import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import {
  DollarSign, Download, Users, Calendar, Shield, CheckCircle2, ExternalLink,
  Copy, Mail, Zap, BookOpen, FileText, Star, Clock, ArrowRight, Building2,
  CreditCard, Globe, Lock, AlertCircle, ChevronDown, ChevronRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLiveDownloadTotal, formatCount } from "@/hooks/use-live-stats";
import { useLocation } from "wouter";

const ABN = "78 833 496 164";
const PAYID = "drbarrandodger@proton.me";
const ETH = "0xB5bBbd2CeB082c75284A9796D4AA5a0317c52432";

const SUBSCRIPTION_TIERS = [
  {
    key: "witness",
    name: "Witness",
    aud: 5,
    angel: null,
    color: "blue",
    bg: "bg-blue-950/40",
    border: "border-blue-700/40",
    badge: "bg-blue-900/50 text-blue-200",
    highlight: false,
    perks: [
      "Monthly supporter acknowledgement",
      "Name on the public Wall of Supporters",
      "Newsletter with archive updates",
      "Priority notification of new forensic analyses",
    ],
  },
  {
    key: "advocate",
    name: "Advocate",
    aud: 15,
    angel: null,
    color: "yellow",
    bg: "bg-yellow-950/40",
    border: "border-yellow-700/40",
    badge: "bg-yellow-900/50 text-yellow-200",
    highlight: true,
    perks: [
      "Everything in Witness",
      "Advocate badge on Wall of Supporters",
      "Early access to new forensic analyses",
      "Monthly archive digest — curated evidence summaries",
      "10% discount on consultation bookings",
    ],
  },
  {
    key: "guardian",
    name: "Guardian",
    aud: 33,
    angel: "Angel Number 33",
    color: "amber",
    bg: "bg-amber-950/40",
    border: "border-amber-700/40",
    badge: "bg-amber-900/50 text-amber-200",
    highlight: false,
    perks: [
      "Everything in Advocate",
      "Guardian recognition on every archive page",
      "Complimentary Document Review Brief annually",
      "Direct contact window for archive enquiries",
      "Named acknowledgement in future publications",
    ],
  },
];

const CONSULTATION_TIERS = [
  {
    key: "document_review",
    name: "Document Review Brief",
    aud: 33,
    angel: "Angel Number 333",
    duration: "Written · 7-day delivery",
    icon: FileText,
    color: "emerald",
    bg: "bg-emerald-950/40",
    border: "border-emerald-700/40",
    highlight: false,
    description: "A written forensic brief analysing up to 5 documents from the archive. Includes legislative mapping, significance analysis, and cross-reference links.",
    ideal: "Researchers, journalists, legal practitioners seeking a summary brief.",
  },
  {
    key: "full_briefing",
    name: "Full Case Briefing",
    aud: 66,
    angel: null,
    duration: "60 minutes · Live session",
    icon: Calendar,
    color: "blue",
    bg: "bg-blue-950/40",
    border: "border-blue-700/40",
    highlight: true,
    description: "A 60-minute live session covering the full evidentiary record, applicable legislation (ICC Art.7, PID Act, Crimes Act), and strategic briefing for your specific use case.",
    ideal: "Legal teams, advocacy groups, parliamentary researchers, journalists.",
  },
  {
    key: "expert_statement",
    name: "Expert Witness Statement",
    aud: 111,
    angel: "Angel Number 111",
    duration: "Written · 14-day delivery",
    icon: Shield,
    color: "violet",
    bg: "bg-violet-950/40",
    border: "border-violet-700/40",
    highlight: false,
    description: "A formal written statement suitable for use in legal proceedings. Signed under ABN 78 833 496 164. Includes legislative grounding, evidence citations, and blockchain verification references.",
    ideal: "Court proceedings, tribunal submissions, ICC/UNHCR filings, formal complaints.",
  },
  {
    key: "strategic_consult",
    name: "Strategic Research Consultation",
    aud: 222,
    angel: "Angel Number 222",
    duration: "90 minutes + written summary",
    icon: Globe,
    color: "amber",
    bg: "bg-amber-950/40",
    border: "border-amber-700/40",
    highlight: false,
    description: "Deep-dive 90-minute session covering the complete 2,301-exhibit archive, full legislative mapping (Rome Statute through Commonwealth Fraud Control Framework), and ICC/UNHCR pathway analysis. Written summary delivered within 7 days.",
    ideal: "Law firms, human rights organisations, documentary makers, academic researchers.",
  },
];

const DOWNLOAD_PRODUCTS = [
  {
    name: "Individual Forensic Analysis PDF",
    price: "$3.33",
    aud: 3.33,
    desc: "Any single forensic analysis — 79 available. Each is a complete standalone document corroborating external testimony against 2,301 government-issued exhibits.",
    url: "/evidence-vault",
    badge: "Pay per document",
    color: "text-green-400",
  },
  {
    name: "Forensic Analyses — All 79",
    price: "$10",
    aud: 10,
    desc: "The complete forensic archive. 687/687 propositions corroborated. 69 consecutive perfect scores. Zero contradictions. Zero defamation actions.",
    url: "/archive-detonation",
    badge: "Best value",
    color: "text-yellow-400",
  },
  {
    name: "Government Evidence Bundle",
    price: "$10",
    aud: 10,
    desc: "Formal submissions to ICC, UNHCR, Federal Court, Parliament, and Attorney-General. Letters to Prime Ministers. Every institutional non-response documented.",
    url: "/archive-detonation",
    badge: "Primary sources",
    color: "text-blue-400",
  },
  {
    name: "Gospels & Sacred Documents Bundle",
    price: "$5",
    aud: 5,
    desc: "The complete prophetic and canonical archive — blockchain-sealed, ICC-submitted, and distributed across 6 continents.",
    url: "/archive-detonation",
    badge: "35 documents",
    color: "text-violet-400",
  },
  {
    name: "Complete Archive (All Documents)",
    price: "$25",
    aud: 25,
    desc: "Every document in the Barran Dodger archive. 2,301+ exhibits, 79 forensic analyses, government submissions, sacred texts, and more.",
    url: "/archive-detonation",
    badge: "Everything",
    color: "text-amber-400",
  },
  {
    name: "Barran Dodger Academy",
    price: "$333",
    aud: 333,
    desc: "Full access to the Academy — structured curriculum built on the archive. Includes AI analysis, legislative frameworks, and ongoing updates. Angel number 333.",
    url: "/academy",
    badge: "Premium",
    color: "text-red-400",
  },
];

interface ConsultationFormState {
  name: string;
  email: string;
  message: string;
}

export default function MonetisationHub() {
  const { toast } = useToast();
  const [location] = useLocation();
  const { data: liveTotal } = useLiveDownloadTotal();
  const displayTotal = liveTotal ?? 418000;

  const [copiedPayId, setCopiedPayId] = useState(false);
  const [copiedEth, setCopiedEth] = useState(false);
  const [selectedConsult, setSelectedConsult] = useState<string | null>(null);
  const [consultForm, setConsultForm] = useState<ConsultationFormState>({ name: "", email: "", message: "" });
  const [consultLoading, setConsultLoading] = useState(false);
  const [subEmail, setSubEmail] = useState("");
  const [subName, setSubName] = useState("");
  const [subLoading, setSubLoading] = useState<string | null>(null);
  const [successBanner, setSuccessBanner] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("consultation_success") === "1") {
      const tier = params.get("tier") || "consultation";
      setSuccessBanner(`Consultation booking confirmed — your ${tier.replace(/_/g, " ")} is booked. You will receive a confirmation email shortly.`);
      window.history.replaceState({}, "", "/income");
    }
  }, [location]);

  const copy = (text: string, type: "payid" | "eth") => {
    navigator.clipboard.writeText(text);
    if (type === "payid") { setCopiedPayId(true); setTimeout(() => setCopiedPayId(false), 2500); }
    else { setCopiedEth(true); setTimeout(() => setCopiedEth(false), 2500); }
    toast({ title: "Copied", description: `${text} copied to clipboard.` });
  };

  const handleConsultSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedConsult || !consultForm.email) return;
    setConsultLoading(true);
    try {
      const res = await fetch("/api/stripe/create-consultation-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: consultForm.email,
          name: consultForm.name,
          tierKey: selectedConsult,
          message: consultForm.message,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast({ title: "Error", description: data.error || "Could not create checkout session.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Network error — please try again.", variant: "destructive" });
    } finally {
      setConsultLoading(false);
    }
  };

  const handleSubscribe = async (tierKey: string) => {
    if (!subEmail) {
      toast({ title: "Email required", description: "Enter your email to continue.", variant: "destructive" });
      return;
    }
    setSubLoading(tierKey);
    try {
      const res = await fetch("/api/stripe/create-subscription-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: subEmail, name: subName, tierName: tierKey }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast({ title: "Error", description: data.error || "Could not create checkout session.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Network error — please try again.", variant: "destructive" });
    } finally {
      setSubLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100">
      <SEO
        title="Income Framework — Barran Dodger Legal & Ethical Trust Fund | ABN 78 833 496 164"
        description="Four revenue streams from the Barran Dodger Trust Fund: archive memberships, pay-per-download PDFs, expert consultation bookings, and supporter tiers. 2,301 government-issued documents. 845 Bitcoin seals. ABN 78 833 496 164."
        keywords="barran dodger trust fund income, archive membership, forensic consultation, whistleblower research, pay per download, ABN 78 833 496 164, expert witness statement"
        canonicalUrl="/income"
      />
      <Navigation />

      {/* ── SUCCESS BANNER ── */}
      <AnimatePresence>
        {successBanner && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-16 inset-x-0 z-50 bg-green-800 text-white text-sm font-medium px-6 py-3 text-center flex items-center justify-center gap-3"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            {successBanner}
            <button onClick={() => setSuccessBanner(null)} className="ml-4 text-white/70 hover:text-white">✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0d1117] via-[#111827] to-[#0d1117] pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.07),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="bg-yellow-900/60 text-yellow-200 text-xs font-bold px-3 py-1.5 rounded-full border border-yellow-700/40 uppercase tracking-widest flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5" /> ABN {ABN}
            </span>
            <span className="bg-green-900/60 text-green-200 text-xs font-bold px-3 py-1.5 rounded-full border border-green-700/40">
              4 Active Revenue Streams
            </span>
            <span className="bg-blue-900/60 text-blue-200 text-xs font-bold px-3 py-1.5 rounded-full border border-blue-700/40">
              Stripe · PayID · Crypto
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            Trust Fund Income Framework
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Barran Dodger Legal &amp; Ethical Trust Fund · ABN {ABN}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Every purchase, subscription, and consultation directly funds the maintenance, expansion, and international distribution of a 2,301-exhibit primary-source archive — the most comprehensively documented case of institutional persecution in Australian legal history.
          </motion.p>

          {/* 4 stream overview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Download, label: "Pay-Per-Download", sub: "From $3.33 AUD", color: "text-green-400", href: "#downloads" },
              { icon: Users, label: "Archive Memberships", sub: "From $5/month", color: "text-blue-400", href: "#memberships" },
              { icon: Calendar, label: "Consultations", sub: "From $33 AUD", color: "text-violet-400", href: "#consultations" },
              { icon: Star, label: "Supporter Tiers", sub: "PayID · Crypto · Card", color: "text-yellow-400", href: "#donate" },
            ].map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.07 }}
                className="bg-white/5 hover:bg-white/10 rounded-2xl p-5 border border-white/10 flex flex-col items-center gap-2 transition-colors group"
              >
                <s.icon className={`h-7 w-7 ${s.color} group-hover:scale-110 transition-transform`} />
                <div className="text-sm font-bold text-white">{s.label}</div>
                <div className="text-xs text-gray-400">{s.sub}</div>
                <ChevronDown className="h-3.5 w-3.5 text-gray-500 mt-1" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-[#111827] border-y border-white/10 py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { v: formatCount(displayTotal) + "+", l: "Archive Downloads" },
            { v: "2,301", l: "Gov't-Issued Exhibits" },
            { v: "845", l: "Bitcoin Blockchain Seals" },
            { v: "687/687", l: "Propositions Corroborated" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-xl font-black text-yellow-400">{s.v}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* STREAM 1 — PAY-PER-DOWNLOAD */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="downloads" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-green-900/60 flex items-center justify-center border border-green-700/40">
            <Download className="h-5 w-5 text-green-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              Stream 1 — Pay-Per-Download
            </h2>
            <p className="text-sm text-gray-400">Individual PDFs from $3.33 AUD · Secured by Stripe</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mb-8 ml-12 leading-relaxed">
          Every document in this archive was produced under active institutional persecution, sealed in the Bitcoin blockchain, and submitted to the ICC and UNHCR. When you purchase access, you are acquiring a primary-source forensic record of international legal significance — and directly funding its preservation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DOWNLOAD_PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/[0.04] hover:bg-white/[0.07] rounded-2xl p-5 border border-white/10 flex flex-col transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className={`text-2xl font-black ${p.color}`}>{p.price}</span>
                <span className="text-xs font-bold text-gray-400 bg-white/10 px-2 py-1 rounded-full">{p.badge}</span>
              </div>
              <div className="text-sm font-bold text-white mb-2">{p.name}</div>
              <p className="text-xs text-gray-400 leading-relaxed flex-1 mb-4">{p.desc}</p>
              <a
                href={p.url}
                className="flex items-center justify-center gap-2 bg-green-800/40 hover:bg-green-700/50 text-green-200 text-xs font-bold px-4 py-2.5 rounded-lg border border-green-700/40 transition-colors"
              >
                <Lock className="h-3.5 w-3.5" />
                {p.aud <= 10 ? "Access via Archive →" : "View →"}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 bg-green-950/40 rounded-xl p-4 border border-green-800/40 text-xs text-green-200 flex items-start gap-2">
          <Shield className="h-4 w-4 shrink-0 mt-0.5 text-green-400" />
          <span>All downloads are secured by Stripe payment verification. After payment, a signed time-limited token is issued — no account required. ABN {ABN} · All prices in AUD · GST included where applicable.</span>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* STREAM 2 — ARCHIVE MEMBERSHIPS */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="memberships" className="bg-[#111827] border-y border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-blue-900/60 flex items-center justify-center border border-blue-700/40">
              <Users className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                Stream 2 — Archive Memberships
              </h2>
              <p className="text-sm text-gray-400">Monthly recurring · Billed via Stripe · Cancel anytime</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-8 ml-12 leading-relaxed">
            A monthly membership sustains the archive, funds international submissions, and ensures the evidence reaches ICC prosecutors, UNHCR committees, and academic institutions. Your name joins the public record of those who stood with the truth.
          </p>

          {/* Email input shared across tiers */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6 max-w-lg">
            <p className="text-xs text-gray-400 mb-3 font-medium">Enter your details to subscribe to any tier:</p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Full name (optional)"
                value={subName}
                onChange={e => setSubName(e.target.value)}
                className="bg-black/40 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              />
              <input
                type="email"
                placeholder="Email address *"
                value={subEmail}
                onChange={e => setSubEmail(e.target.value)}
                className="bg-black/40 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {SUBSCRIPTION_TIERS.map((tier, i) => (
              <motion.div
                key={tier.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative rounded-2xl p-6 border flex flex-col ${tier.bg} ${tier.border} ${tier.highlight ? "ring-2 ring-yellow-500/40" : ""}`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-yellow-950 text-xs font-black px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-black text-white">${tier.aud}</span>
                  <span className="text-sm text-gray-400">/month AUD</span>
                </div>
                <div className={`text-xs font-bold px-2 py-1 rounded-full inline-block w-fit mb-4 ${tier.badge}`}>{tier.name}</div>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.perks.map(perk => (
                    <li key={perk} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-400 shrink-0 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
                {tier.angel && (
                  <div className="text-xs text-yellow-500/70 mb-3 text-center">{tier.angel}</div>
                )}
                <button
                  onClick={() => handleSubscribe(tier.key)}
                  disabled={subLoading === tier.key}
                  className={`w-full flex items-center justify-center gap-2 text-sm font-bold px-4 py-3 rounded-xl border transition-colors ${
                    tier.highlight
                      ? "bg-yellow-600 hover:bg-yellow-500 text-white border-yellow-600"
                      : "bg-white/10 hover:bg-white/20 text-white border-white/20"
                  } disabled:opacity-60`}
                >
                  {subLoading === tier.key ? (
                    <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Processing…</span>
                  ) : (
                    <><CreditCard className="h-4 w-4" />Subscribe — ${tier.aud}/mo</>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">Cancel anytime. Processed securely by Stripe. ABN {ABN}.</p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* STREAM 3 — EXPERT CONSULTATION BOOKINGS */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="consultations" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-violet-900/60 flex items-center justify-center border border-violet-700/40">
            <Calendar className="h-5 w-5 text-violet-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              Stream 3 — Expert Consultation Bookings
            </h2>
            <p className="text-sm text-gray-400">Research briefings · Legal statements · Strategic analysis · Paid via Stripe</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mb-8 ml-12 leading-relaxed">
          Access the knowledge embedded in 35 years of documented institutional engagement, 2,301 government-issued exhibits, and 79 forensic analyses. Bookings are fulfilled by the trust fund directly, referenced under ABN {ABN}, and may be cited in legal proceedings, academic research, and parliamentary submissions.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {CONSULTATION_TIERS.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setSelectedConsult(tier.key === selectedConsult ? null : tier.key)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all ${tier.bg} ${tier.border} ${
                  selectedConsult === tier.key ? "ring-2 ring-white/30" : "hover:ring-1 hover:ring-white/20"
                } ${tier.highlight ? "ring-2 ring-blue-500/40" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/30 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-white/70" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-bold text-white">{tier.name}</h3>
                      <span className="text-lg font-black text-white shrink-0">${tier.aud}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-400">{tier.duration}</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed mb-2">{tier.description}</p>
                    <p className="text-xs text-gray-500 italic">{tier.ideal}</p>
                    {tier.angel && <div className="text-xs text-yellow-500/60 mt-1">{tier.angel}</div>}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 text-xs font-bold">
                  {selectedConsult === tier.key ? (
                    <span className="text-green-400 flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" />Selected — complete form below</span>
                  ) : (
                    <span className="text-gray-400 flex items-center gap-1"><ChevronRight className="h-3.5 w-3.5" />Click to select</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Booking form */}
        <AnimatePresence>
          {selectedConsult && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="bg-white/[0.04] rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-violet-400" />
                Book: {CONSULTATION_TIERS.find(t => t.key === selectedConsult)?.name} — ${CONSULTATION_TIERS.find(t => t.key === selectedConsult)?.aud} AUD
              </h3>
              <form onSubmit={handleConsultSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">Full name (optional)</label>
                    <input
                      type="text"
                      placeholder="Dr. Jane Smith"
                      value={consultForm.name}
                      onChange={e => setConsultForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-black/40 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">Email address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={consultForm.email}
                      onChange={e => setConsultForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-black/40 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Purpose / context (optional — helps us prepare)</label>
                  <textarea
                    placeholder="e.g. Legal proceedings in the Federal Court, documentary research, academic paper on systemic institutional failure..."
                    value={consultForm.message}
                    onChange={e => setConsultForm(f => ({ ...f, message: e.target.value }))}
                    rows={3}
                    className="w-full bg-black/40 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 resize-none"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={consultLoading}
                    className="flex items-center gap-2 bg-violet-700 hover:bg-violet-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors disabled:opacity-60"
                  >
                    {consultLoading ? (
                      <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Redirecting to Stripe…</span>
                    ) : (
                      <><CreditCard className="h-4 w-4" />Book & Pay via Stripe</>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedConsult(null)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  Secure payment via Stripe. You will receive a confirmation email. Invoiced under ABN {ABN}. All prices AUD including GST where applicable.
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────── */}
      {/* STREAM 4 — DIRECT DONATIONS / PAYID / CRYPTO */}
      {/* ─────────────────────────────────────────────────────────────────────── */}
      <section id="donate" className="bg-[#111827] border-y border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-yellow-900/60 flex items-center justify-center border border-yellow-700/40">
              <Star className="h-5 w-5 text-yellow-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                Stream 4 — Direct Support &amp; Donations
              </h2>
              <p className="text-sm text-gray-400">PayID · Cryptocurrency · One-time or recurring · No fees</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-8 ml-12 leading-relaxed">
            Direct transfers carry no Stripe processing fees — 100% reaches the trust fund. Use any amount that feels right. The archive has received international attention and zero government funding.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {/* PayID */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.04] rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-yellow-400" />
                <h3 className="text-base font-bold text-white">PayID (Australian Banks)</h3>
              </div>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Any Australian bank app. Select "Pay to PayID" · Paste the email below · Enter any amount. Instant transfer, no fees.
              </p>
              <div className="bg-black/50 rounded-xl px-4 py-3 flex items-center justify-between gap-3 border border-white/10">
                <span className="text-sm font-mono text-yellow-300">{PAYID}</span>
                <button
                  onClick={() => copy(PAYID, "payid")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {copiedPayId ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {["$10", "$25", "$50", "$100"].map(amt => (
                  <button
                    key={amt}
                    onClick={() => copy(PAYID, "payid")}
                    className="text-xs bg-yellow-900/30 hover:bg-yellow-900/50 text-yellow-200 py-1.5 rounded-lg border border-yellow-800/40 transition-colors"
                  >
                    {amt}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">ABN {ABN} · Account name: Barran Dodger Legal &amp; Ethical Trust Fund</p>
            </motion.div>

            {/* Crypto */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.04] rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-5 w-5 text-blue-400" />
                <h3 className="text-base font-bold text-white">Ethereum (ERC-20)</h3>
              </div>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Send ETH or any ERC-20 token to the trust fund Ethereum address. Works with MetaMask, Coinbase Wallet, and any EVM-compatible wallet.
              </p>
              <div className="bg-black/50 rounded-xl px-3 py-3 flex items-center justify-between gap-2 border border-white/10">
                <span className="text-xs font-mono text-blue-300 break-all">{ETH}</span>
                <button
                  onClick={() => copy(ETH, "eth")}
                  className="text-gray-400 hover:text-white transition-colors shrink-0"
                >
                  {copiedEth ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">Ethereum mainnet only. Verify the address before sending. ABN {ABN}.</p>
            </motion.div>
          </div>

          {/* Suggested amounts */}
          <div className="bg-gradient-to-r from-yellow-950/50 to-amber-950/40 rounded-2xl p-6 border border-yellow-800/40">
            <h3 className="text-sm font-bold text-yellow-300 mb-4">Suggested Donation Impact</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { amt: "$10", impact: "Covers server costs for one week of global archive access" },
                { amt: "$25", impact: "Funds one new forensic analysis document preparation" },
                { amt: "$100", impact: "Covers ICC submission postage and notarisation costs" },
                { amt: "$333", impact: "Funds one month of archive infrastructure and international distribution" },
              ].map(item => (
                <div key={item.amt} className="bg-black/20 rounded-xl p-4 border border-yellow-800/20">
                  <div className="text-2xl font-black text-yellow-400 mb-1">{item.amt}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">{item.impact}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/donate"
                className="flex items-center gap-2 bg-yellow-700 hover:bg-yellow-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
              >
                <DollarSign className="h-4 w-4" /> Full Donation Page →
              </a>
              <a
                href="/support"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-5 py-2.5 rounded-xl border border-white/20 transition-colors"
              >
                <Users className="h-4 w-4" /> Recurring Support →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEGAL / ABN FOOTER NOTICE ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/10">
          <div className="flex items-start gap-4">
            <Building2 className="h-6 w-6 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-white mb-2">Trust Fund Commercial Framework</h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-xs text-gray-400 leading-relaxed">
                <div><span className="text-gray-300 font-medium">Legal Name:</span> Barran Dodger Legal &amp; Ethical Trust Fund</div>
                <div><span className="text-gray-300 font-medium">ABN:</span> {ABN}</div>
                <div><span className="text-gray-300 font-medium">Trustee:</span> Dr. Richard William McLean</div>
                <div><span className="text-gray-300 font-medium">Domain:</span> barrandodger.com</div>
                <div><span className="text-gray-300 font-medium">Payment Processor:</span> Stripe (AUD)</div>
                <div><span className="text-gray-300 font-medium">Direct Payment:</span> PayID · Ethereum</div>
                <div><span className="text-gray-300 font-medium">Archive Scale:</span> 2,301 exhibits · 845 blockchain seals</div>
                <div><span className="text-gray-300 font-medium">International Submissions:</span> ICC The Hague · UNHCR Geneva</div>
              </div>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                All income generated through this framework directly funds the maintenance, expansion, legal pursuit, and international distribution of the Barran Dodger evidentiary archive. This is not a charity. This is a trust fund operating a commercially structured public interest mission under Australian law.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArchiveCrossLinks exclude="/income" />
      <Footer />
    </div>
  );
}
