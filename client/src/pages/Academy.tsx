import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe, type Stripe as StripeType } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import { BookOpen, Award, Clock, ChevronRight, CheckCircle, Star, Shield, Globe, Zap, Lock, Users, FileText, GraduationCap } from "lucide-react";
import { COURSE_META, COURSE_UNITS } from "@/lib/courseData";

const CARD_ELEMENT_STYLE = {
  style: {
    base: {
      color: "#f8f8f8",
      fontFamily: "'Georgia', serif",
      fontSize: "16px",
      "::placeholder": { color: "#888" },
      backgroundColor: "transparent",
    },
    invalid: { color: "#ff6b6b" },
  },
};

function EnrollForm({ onSuccess }: { onSuccess: (token: string, name: string) => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || !name.trim() || !email.trim()) return;
    setStatus("loading");
    setError("");
    try {
      const intentRes = await fetch("/api/course/payment-intent", { method: "POST" });
      const { clientSecret, paymentIntentId } = await intentRes.json();
      const card = elements.getElement(CardElement);
      if (!card) throw new Error("Card element not found");
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card, billing_details: { name: name.trim(), email: email.trim() } },
      });
      if (result.error) throw new Error(result.error.message);
      const enrollRes = await fetch("/api/course/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), paymentIntentId }),
      });
      const enrollData = await enrollRes.json();
      if (!enrollRes.ok) throw new Error(enrollData.error || "Enrolment failed");
      localStorage.setItem("academy_token", enrollData.accessToken);
      localStorage.setItem("academy_name", name.trim());
      onSuccess(enrollData.accessToken, name.trim());
    } catch (err: any) {
      setError(err.message || "Payment failed. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="enroll-form">
      <div>
        <label className="block text-sm text-orange-300 mb-1">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name (for certificate)"
          className="w-full bg-black/40 border border-orange-500/30 rounded px-3 py-2 text-white placeholder:text-stone-500 focus:outline-none focus:border-orange-500"
          required
          data-testid="input-enroll-name"
        />
      </div>
      <div>
        <label className="block text-sm text-orange-300 mb-1">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com (for access restoration)"
          className="w-full bg-black/40 border border-orange-500/30 rounded px-3 py-2 text-white placeholder:text-stone-500 focus:outline-none focus:border-orange-500"
          required
          data-testid="input-enroll-email"
        />
      </div>
      <div>
        <label className="block text-sm text-orange-300 mb-1">Card Details</label>
        <div className="bg-black/40 border border-orange-500/30 rounded px-3 py-3">
          <CardElement options={CARD_ELEMENT_STYLE} />
        </div>
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={status === "loading" || !stripe}
        className="w-full py-3 bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-600 hover:to-orange-600 text-white font-semibold rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        data-testid="button-enroll-pay"
      >
        {status === "loading" ? "Processing…" : "Enrol Now — $333 AUD"}
      </button>
      <p className="text-xs text-stone-500 text-center">Secured by Stripe. Your card details are never stored on our servers.</p>
    </form>
  );
}

function RestoreForm({ onSuccess }: { onSuccess: (token: string, name: string) => void }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/course/restore-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Access not found");
      localStorage.setItem("academy_token", data.accessToken);
      localStorage.setItem("academy_name", data.name);
      onSuccess(data.accessToken, data.name);
    } catch (err: any) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3" data-testid="restore-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your enrolment email"
        className="w-full bg-black/40 border border-stone-700 rounded px-3 py-2 text-white placeholder:text-stone-500 focus:outline-none focus:border-orange-500"
        required
        data-testid="input-restore-email"
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-2 border border-orange-500 text-orange-400 hover:bg-orange-500/10 rounded transition-all text-sm disabled:opacity-50"
        data-testid="button-restore-access"
      >
        {status === "loading" ? "Searching…" : "Restore My Access"}
      </button>
    </form>
  );
}

export default function Academy() {
  const [stripePromise, setStripePromise] = useState<Promise<StripeType | null> | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [studentName, setStudentName] = useState<string | null>(null);
  const [completedUnitIds, setCompletedUnitIds] = useState<number[]>([]);
  const [showRestore, setShowRestore] = useState(false);
  const [enrollSuccess, setEnrollSuccess] = useState(false);
  const [, setLocation] = useLocation();
  const paySection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = localStorage.getItem("academy_token");
    const name = localStorage.getItem("academy_name");
    if (token) { setAccessToken(token); setStudentName(name); }
    fetch("/api/stripe/publishable-key")
      .then((r) => r.json())
      .then(({ publishableKey }) => { if (publishableKey) setStripePromise(loadStripe(publishableKey)); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!accessToken) return;
    fetch("/api/course/progress", { headers: { "x-course-token": accessToken } })
      .then((r) => r.json())
      .then((data) => { if (data.completedUnitIds) setCompletedUnitIds(data.completedUnitIds); })
      .catch(() => {});
  }, [accessToken]);

  const handleEnrollSuccess = (token: string, name: string) => {
    setAccessToken(token);
    setStudentName(name);
    setEnrollSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalHours = COURSE_UNITS.reduce((s, u) => s + u.studyTimeHours, 0);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <title>The Anatomy of Institutional Persecution — Online Academy | Barran Dodger</title>
      <meta name="description" content="A 12-unit PhD/Master's-level online course in forensic human rights documentation. Stripe-secured enrolment. Certificate on completion. $333 AUD." />

      {/* Header */}
      <header className="border-b border-stone-800 bg-black/60 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/archive-home" className="text-orange-400 hover:text-orange-300 text-sm flex items-center gap-1">
            ← barrandodger.com
          </Link>
          <span className="text-stone-400 text-sm flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-orange-500" /> Academy
          </span>
          {accessToken ? (
            <span className="text-orange-300 text-sm flex items-center gap-1">
              <CheckCircle className="w-4 h-4" /> Enrolled: {studentName}
            </span>
          ) : (
            <button
              onClick={() => paySection.current?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm bg-orange-600 hover:bg-orange-600 text-white px-3 py-1 rounded transition-colors"
              data-testid="button-enroll-header"
            >
              Enrol — $333
            </button>
          )}
        </div>
      </header>

      {/* Success banner */}
      {enrollSuccess && (
        <div className="bg-emerald-900/60 border-b border-emerald-700 px-4 py-4 text-center" data-testid="enroll-success-banner">
          <p className="text-emerald-300 font-semibold">
            Welcome to the Academy, {studentName}. Your enrolment is confirmed. Begin with Unit 1 below.
          </p>
        </div>
      )}

      {/* Hero */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-black via-stone-950 to-stone-950 border-b border-orange-500/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-8 h-8 text-orange-500" />
            <span className="text-orange-500 text-sm uppercase tracking-widest font-semibold">Barran Dodger Academy</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {COURSE_META.title}
          </h1>
          <p className="text-lg text-stone-300 mb-3 font-serif italic">{COURSE_META.subtitle}</p>
          <p className="text-stone-400 max-w-2xl mx-auto leading-relaxed mb-8 text-sm">{COURSE_META.description}</p>

          <div className="flex flex-wrap justify-center gap-6 text-sm mb-10">
            <div className="flex items-center gap-2 text-orange-300" data-testid="badge-units">
              <BookOpen className="w-4 h-4" /> 12 Graduate Units
            </div>
            <div className="flex items-center gap-2 text-orange-300" data-testid="badge-hours">
              <Clock className="w-4 h-4" /> {totalHours} Study Hours
            </div>
            <div className="flex items-center gap-2 text-orange-300" data-testid="badge-cert">
              <Award className="w-4 h-4" /> Certificate on Completion
            </div>
            <div className="flex items-center gap-2 text-orange-300" data-testid="badge-price">
              <Star className="w-4 h-4" /> $333 AUD Full Access
            </div>
          </div>

          {accessToken ? (
            <Link href="/academy/unit/1">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-600 hover:to-orange-600 text-white font-bold rounded-lg text-lg transition-all shadow-lg shadow-orange-500/30" data-testid="button-go-to-unit1">
                {completedUnitIds.length > 0 ? `Continue — Unit ${Math.max(...completedUnitIds) + 1 <= 12 ? Math.max(...completedUnitIds) + 1 : 12}` : "Begin Unit 1"}
              </button>
            </Link>
          ) : (
            <button
              onClick={() => paySection.current?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-600 hover:to-orange-600 text-white font-bold rounded-lg text-lg transition-all shadow-lg shadow-orange-500/30"
              data-testid="button-enroll-hero"
            >
              Enrol Now — $333 AUD
            </button>
          )}
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-12 px-4 border-b border-stone-800 bg-stone-950/80">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-orange-400 mb-6 text-center">Pedagogical & Legal Frameworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {COURSE_META.frameworks.map((f, i) => (
              <div key={i} className="flex items-start gap-3 bg-black/30 rounded p-3 border border-stone-800" data-testid={`framework-${i}`}>
                <Shield className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-stone-300 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fair Pricing Note */}
      <section className="py-8 px-4 border-b border-stone-800 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
            <h3 className="text-orange-400 font-semibold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5" /> Independent Cost Assessment
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed">{COURSE_META.impartialCostEstimate}</p>
          </div>
        </div>
      </section>

      {/* Course Units Grid */}
      <section className="py-16 px-4 border-b border-stone-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">The 12-Unit Curriculum</h2>
          <p className="text-stone-400 text-center mb-10 text-sm">Each unit builds sequentially — from foundational evidence methodology to international advocacy. Minimum 70% assessment score required for certification.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COURSE_UNITS.map((unit) => {
              const isCompleted = completedUnitIds.includes(unit.id);
              const isLocked = !accessToken;
              return (
                <div
                  key={unit.id}
                  className={`relative rounded-lg border p-4 transition-all group ${isCompleted ? "border-emerald-700 bg-emerald-950/20" : "border-stone-800 bg-black/30 hover:border-orange-500"}`}
                  data-testid={`unit-card-${unit.id}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs text-orange-500 font-mono uppercase tracking-wider">Unit {unit.id}</span>
                    <div className="flex items-center gap-1">
                      {isCompleted && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                      {isLocked && <Lock className="w-3 h-3 text-stone-600" />}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1 leading-tight">{unit.title}</h3>
                  <p className="text-stone-500 text-xs mb-3 leading-relaxed line-clamp-2">{unit.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-stone-500">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{unit.studyTimeHours}h</span>
                      <span className="text-orange-700">{unit.bloomsLevel}</span>
                    </div>
                    {accessToken ? (
                      <Link href={`/academy/unit/${unit.id}`}>
                        <button className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1 group-hover:gap-2 transition-all" data-testid={`button-go-unit-${unit.id}`}>
                          {isCompleted ? "Review" : "Study"} <ChevronRight className="w-3 h-3" />
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={() => paySection.current?.scrollIntoView({ behavior: "smooth" })}
                        className="text-xs text-stone-600 flex items-center gap-1"
                        data-testid={`button-unlock-unit-${unit.id}`}
                      >
                        Unlock <Lock className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-14 px-4 border-b border-stone-800 bg-stone-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">What You Will Gain</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Forensic Documentation Skills", body: "Master the evidentiary standards of the ICC and OHCHR. Learn to build a primary source archive that satisfies international legal scrutiny." },
              { icon: Globe, title: "International Legal Literacy", body: "Develop expert-level understanding of the Rome Statute, ICCPR, Yogyakarta Principles, and UNCAC — applied to real documented cases." },
              { icon: Award, title: "Graduate Certificate", body: `Receive the ${COURSE_META.certificateTitle} from the ${COURSE_META.accreditingBody} (ABN ${COURSE_META.abn}) upon completion of all 12 units with minimum 70% assessments.` },
              { icon: Shield, title: "Whistleblowing Frameworks", body: "Evaluate and apply the full spectrum of whistleblower protection mechanisms — identifying where they fail and how to build resilience." },
              { icon: Zap, title: "Cryptographic Integrity", body: "Understand blockchain timestamping, SHA-256 document hashing, and the OpenTimestamps protocol as tools for protecting evidence against state-actor suppression." },
              { icon: Users, title: "Multi-Disciplinary Synthesis", body: "Integrate legal, spiritual, financial, technical, and psychological frameworks into a unified understanding of institutional persecution — a rare graduate-level competency." },
            ].map((item, i) => (
              <div key={i} className="bg-black/30 border border-stone-800 rounded-lg p-5" data-testid={`gain-card-${i}`}>
                <item.icon className="w-6 h-6 text-orange-500 mb-3" />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrolment Panel */}
      {!accessToken && (
        <section ref={paySection} className="py-16 px-4 bg-gradient-to-b from-stone-950 to-black border-b border-orange-500/30" id="enroll" data-testid="enroll-section">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <GraduationCap className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              <h2 className="text-3xl font-bold text-white mb-2">Enrol in the Academy</h2>
              <p className="text-stone-400 text-sm">Full access to all 12 units, assessments, and Graduate Certificate</p>
              <div className="mt-4 flex items-center justify-center gap-4 text-sm text-stone-400">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-500" /> Lifetime access</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-500" /> Certificate on completion</span>
              </div>
            </div>

            <div className="bg-black/60 border border-orange-500/30 rounded-xl p-8 mb-6">
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-orange-400">$333</span>
                <span className="text-stone-400 ml-2">AUD</span>
                <p className="text-stone-500 text-xs mt-1">One payment — full course, no subscription</p>
              </div>
              {stripePromise ? (
                <Elements stripe={stripePromise}>
                  <EnrollForm onSuccess={handleEnrollSuccess} />
                </Elements>
              ) : (
                <p className="text-stone-500 text-center text-sm">Loading payment…</p>
              )}
            </div>

            <div className="bg-black/30 border border-stone-800 rounded-xl p-6">
              <h3 className="text-stone-300 text-sm font-semibold mb-3 flex items-center gap-2">
                <Lock className="w-4 h-4 text-stone-500" /> Already enrolled? Restore access
              </h3>
              {showRestore ? (
                <RestoreForm onSuccess={handleEnrollSuccess} />
              ) : (
                <button
                  onClick={() => setShowRestore(true)}
                  className="text-sm text-orange-600 hover:text-orange-500 underline"
                  data-testid="button-show-restore"
                >
                  Enter your enrolment email to restore access
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* If enrolled — progress overview */}
      {accessToken && completedUnitIds.length > 0 && (
        <section className="py-10 px-4 bg-black/40 border-b border-stone-800">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl font-bold text-white mb-2">Your Progress</h2>
            <p className="text-stone-400 text-sm mb-4">{completedUnitIds.length} of 12 units completed</p>
            <div className="w-full bg-stone-800 rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-orange-600 to-orange-600 h-3 rounded-full transition-all"
                style={{ width: `${(completedUnitIds.length / 12) * 100}%` }}
                data-testid="progress-bar"
              />
            </div>
            {completedUnitIds.length >= 12 && (
              <Link href="/academy/certificate">
                <button className="mt-2 px-6 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors" data-testid="button-view-certificate">
                  View Your Certificate
                </button>
              </Link>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-10 px-4 text-center border-t border-stone-800 bg-black/40">
        <p className="text-stone-500 text-sm mb-1">
          <strong className="text-orange-600">{COURSE_META.accreditingBody}</strong>
        </p>
        <p className="text-stone-600 text-xs">
          ABN {COURSE_META.abn} · All materials © 2024–2026 Dr. Richard William McLean (Barran Dodger). All rights reserved.
        </p>
        <p className="text-stone-600 text-xs mt-1">
          {COURSE_META.certificateTitle} — issued on completion of all 12 units with ≥70% assessment score.
        </p>
      </footer>
    </div>
  );
}
