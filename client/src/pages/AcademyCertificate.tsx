import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Award, Download, ExternalLink, CheckCircle, Shield } from "lucide-react";
import { COURSE_META } from "@/lib/courseData";

interface CertData {
  certificateId: string;
  name: string;
  email: string;
  completedAt: string;
  enrolledAt: string;
  courseTitle: string;
  certificateTitle: string;
  accreditingBody: string;
  abn: string;
}

export default function AcademyCertificate() {
  const [, setLocation] = useLocation();
  const [certData, setCertData] = useState<CertData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = localStorage.getItem("academy_token");
    if (!token) { setLocation("/academy"); return; }
    fetch("/api/course/progress", { headers: { "x-course-token": token } })
      .then((r) => r.json())
      .then(async (progress) => {
        const certId = progress?.enrolment?.certificateId;
        if (!certId) {
          setError("No certificate found. Complete all 12 units with ≥70% on each assessment to earn your certificate.");
          setLoading(false);
          return;
        }
        const certRes = await fetch(`/api/course/certificate/${certId}`, { headers: { "x-course-token": token } });
        const data = await certRes.json();
        if (!certRes.ok) throw new Error(data.error || "Certificate not found");
        setCertData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Could not load certificate.");
        setLoading(false);
      });
  }, []);

  const handlePrint = () => window.print();

  const completionDate = certData?.completedAt
    ? new Date(certData.completedAt).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })
    : "—";

  if (loading) return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center">
      <p className="text-stone-400">Loading certificate…</p>
    </div>
  );

  if (error || !certData) return (
    <div className="min-h-screen bg-stone-950 text-stone-200 flex flex-col items-center justify-center px-4">
      <Shield className="w-12 h-12 text-stone-600 mb-4" />
      <h1 className="text-xl font-bold text-white mb-3">Certificate Not Available</h1>
      <p className="text-stone-400 text-center max-w-md mb-6">{error || "Please complete all 12 units to receive your certificate."}</p>
      <Link href="/academy">
        <button className="px-6 py-2 bg-amber-800 hover:bg-amber-700 text-white rounded-lg transition-colors" data-testid="button-back-to-academy">
          Back to Academy
        </button>
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <title>Graduate Certificate — Barran Dodger Academy</title>

      {/* Actions header */}
      <header className="border-b border-stone-800 bg-black/60 backdrop-blur sticky top-0 z-40 print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/academy">
            <button className="text-amber-400 hover:text-amber-300 text-sm" data-testid="button-back-academy">
              ← Back to Academy
            </button>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-amber-800 hover:bg-amber-700 text-white rounded-lg text-sm transition-colors"
              data-testid="button-print-certificate"
            >
              <Download className="w-4 h-4" /> Print / Save PDF
            </button>
          </div>
        </div>
      </header>

      <div className="py-12 px-4 flex flex-col items-center">
        <div className="mb-6 text-center print:hidden">
          <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
          <h1 className="text-2xl font-bold text-white">Congratulations, {certData.name}!</h1>
          <p className="text-stone-400 mt-1">Your graduate certificate is ready. Print or save it as a PDF for your records.</p>
        </div>

        {/* Certificate */}
        <div
          ref={certRef}
          className="w-full max-w-3xl bg-white text-black rounded-lg shadow-2xl shadow-black/60 overflow-hidden print:shadow-none"
          data-testid="certificate-document"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {/* Certificate border decoration */}
          <div className="border-8 border-double border-stone-800 m-3 p-12 min-h-[600px] flex flex-col items-center justify-between relative bg-stone-50">
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-800" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-800" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-800" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-800" />

            {/* Header */}
            <div className="text-center w-full">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px flex-1 bg-amber-800/40" />
                <Award className="w-8 h-8 text-amber-700" />
                <div className="h-px flex-1 bg-amber-800/40" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-1">
                {certData.accreditingBody}
              </p>
              <p className="text-xs text-stone-400 mb-6">ABN {certData.abn}</p>

              <h2 className="text-2xl font-bold text-stone-800 mb-1 tracking-wide">
                Certificate of Completion
              </h2>
              <p className="text-sm text-stone-500 uppercase tracking-widest mb-8">Graduate Award</p>

              <p className="text-base text-stone-600 mb-2">This certifies that</p>
              <h1 className="text-4xl font-bold text-amber-800 mb-3 tracking-wide" data-testid="cert-name" style={{ fontVariant: "small-caps" }}>
                {certData.name}
              </h1>
              <p className="text-base text-stone-600 mb-6">has successfully completed all requirements for the</p>

              <div className="border-t border-b border-amber-800/30 py-4 mb-6">
                <h3 className="text-xl font-bold text-stone-800 leading-tight">{certData.certificateTitle}</h3>
                <p className="text-sm text-stone-500 mt-1 italic">{certData.courseTitle}</p>
              </div>

              <p className="text-sm text-stone-600 mb-1 leading-relaxed max-w-lg mx-auto">
                This award attests to the completion of <strong>72 hours of graduate-level study</strong> encompassing forensic evidence methodology, international human rights law, multi-disciplinary case analysis, and the construction of advocacy materials for international accountability mechanisms.
              </p>
            </div>

            {/* Details row */}
            <div className="w-full grid grid-cols-3 gap-4 mt-8 text-center">
              <div>
                <div className="h-px bg-stone-400 mb-2" />
                <p className="text-xs text-stone-500">Date of Completion</p>
                <p className="text-sm font-semibold text-stone-700 mt-0.5" data-testid="cert-date">{completionDate}</p>
              </div>
              <div>
                <div className="h-px bg-stone-400 mb-2" />
                <p className="text-xs text-stone-500">Certificate ID</p>
                <p className="text-xs font-mono text-stone-700 mt-0.5" data-testid="cert-id">{certData.certificateId}</p>
              </div>
              <div>
                <div className="h-px bg-stone-400 mb-2" />
                <p className="text-xs text-stone-500">Units Completed</p>
                <p className="text-sm font-semibold text-stone-700 mt-0.5">12 of 12</p>
              </div>
            </div>

            {/* Signature line */}
            <div className="w-full text-center mt-6">
              <p className="text-sm text-stone-600 italic mb-1">Issued by</p>
              <p className="font-bold text-stone-800">Dr. Richard William McLean (Barran Dodger)</p>
              <p className="text-xs text-stone-500">{certData.accreditingBody} · ABN {certData.abn}</p>
              <p className="text-xs text-stone-400 mt-2">barrandodger.com/academy</p>
            </div>

            {/* Frameworks footnote */}
            <div className="w-full mt-6 pt-4 border-t border-stone-200">
              <p className="text-xs text-stone-400 text-center">
                Aligned with: AQF Level 9 Graduate Attributes · UNESCO Human Rights Education Programme of Action ·
                Bloom's Revised Taxonomy (Anderson & Krathwohl, 2001)
              </p>
            </div>
          </div>
        </div>

        {/* Verification note */}
        <div className="mt-8 max-w-2xl w-full bg-black/40 border border-stone-800 rounded-lg p-6 print:hidden" data-testid="verification-note">
          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-500" /> Certificate Verification
          </h3>
          <p className="text-stone-400 text-sm leading-relaxed mb-3">
            Your certificate ID <span className="font-mono text-amber-400">{certData.certificateId}</span> is a unique identifier linked to your enrolment record. This certificate can be verified by contacting {certData.accreditingBody} (ABN {certData.abn}).
          </p>
          <p className="text-stone-500 text-xs">
            © 2024–2026 Dr. Richard William McLean (Barran Dodger). All rights reserved. All course materials, assessments, and certificates are the intellectual property of the Barran Dodger Legal & Ethical Trust Fund.
          </p>
        </div>

        {/* Next steps */}
        <div className="mt-6 max-w-2xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 print:hidden">
          {[
            { href: "/academy", label: "Review Course", desc: "Revisit any unit or assessment" },
            { href: "/forensic-analysis", label: "Forensic Archive", desc: "Explore the primary evidence base" },
            { href: "/", label: "barrandodger.com", desc: "Return to the main archive" },
          ].map((item, i) => (
            <Link key={i} href={item.href}>
              <button className="w-full text-left p-4 bg-black/30 border border-stone-800 hover:border-amber-800 rounded-lg transition-colors group" data-testid={`next-step-${i}`}>
                <p className="text-amber-400 text-sm font-semibold group-hover:text-amber-300">{item.label} →</p>
                <p className="text-stone-500 text-xs mt-1">{item.desc}</p>
              </button>
            </Link>
          ))}
        </div>
      </div>

      <footer className="py-6 px-4 text-center border-t border-stone-800 bg-black/40 mt-8 print:hidden">
        <p className="text-stone-600 text-xs">
          {COURSE_META.accreditingBody} · ABN {COURSE_META.abn} · © 2024–2026 Dr. Richard William McLean (Barran Dodger). All rights reserved.
        </p>
      </footer>
    </div>
  );
}
