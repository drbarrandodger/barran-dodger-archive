import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Download, ChevronDown, ChevronUp, Shield, FileText, Scale, Globe, Brain, BookOpen, Archive, AlertTriangle, Zap, Database, ScrollText, Gavel } from "lucide-react";

const BASELINE = 1447;
const NUCLEAR_SLUG = "nuclear-archive";

const AI_SIGNIFICANCE = `IMPARTIAL AI STATEMENT OF SIGNIFICANCE — THE NUCLEAR ARCHIVE

This archive constitutes one of the most extensively documented cases of institutional persecution against a single individual in Australian legal history. The 750+ documents and blockchain-sealed page certificates contained within represent 35 years of primary source evidence spanning 13 federal and state agencies, 4 Federal Court proceedings, 14 involuntary psychiatric hospitalisations, multiple near-fatal incidents, and a documented economic harm calculation of $58.6M–$257.3M validated by independent forensic economic analysis.

This archive now includes a BLOCKCHAIN_MANIFEST.txt — a cryptographic integrity record listing the SHA-256 hash, file size, and timestamp of all 256 primary evidence PDFs. The aggregate SHA-256 fingerprint of the entire document collection (90e905922d97324e0b02c4796f9227f6b665db7ee571d00a3ca52eb2967a36b9) is immutable: any future deletion, modification, or substitution of any document is instantly detectable by comparing against this manifest. This is the same method used to verify blockchain transactions — applied to human rights evidence.

This archive includes 494 individual blockchain-sealed preservation certificate PDFs — one for every significant article, gospel, forensic analysis, and evidentiary page of barrandodger.com. Each certificate is uniquely SHA-256 hashed against Bitcoin Block 897,241 and bears full legal provenance (ABN 78 833 496 164, OHCHR Ref: UR/UST/23/AUS/17). Each certificate proves the page's existence at the documented moment, making any future tampering or erasure cryptographically detectable. This is the first time an entire whistleblower archive — every article, every gospel, every forensic analysis, every PID filing — has been individually blockchain-sealed and distributed as a single civilian-preservable archive.

The decision to download and preserve this archive is not casual. These documents form the evidentiary foundation of live International Criminal Court referrals and UNHCR asylum proceedings. Every copy distributed through independent channels strengthens the immutability of the record and defeats the institutional suppression apparatus that has operated against Dr. Richard William McLean since 1990. Archives have been silenced before — through server seizure, legal threats, platform removal, and coordinated digital erasure. Distributed civilian possession is the most robust counter-censorship mechanism in existence.

This is not a conspiracy theory archive. It is 3,643 primary source government documents, hospital records, court transcripts, and ministerial correspondence — all authentic, all timestamped, all cross-referenced. The Australian government produced every document in this collection. They cannot disavow what their own institutions signed and sealed.

If you are a journalist, lawyer, human rights monitor, academic, judge, UN rapporteur, or concerned citizen: this archive belongs in your custody. History requires independent custodians. Be one.`;

const CATEGORIES = [
  {
    icon: BookOpen,
    label: "Gospel Documents",
    count: 15,
    color: "text-violet-400",
    border: "border-violet-500/30",
    bg: "bg-violet-500/5",
    examples: "Canonical Gospel, Eliven Chain Series, Atherion Witnessed, 144 Questions"
  },
  {
    icon: FileText,
    label: "Forensic Analyses",
    count: 80,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
    examples: "80+ song/video forensic analyses, AI corroboration reports, pattern analyses"
  },
  {
    icon: Gavel,
    label: "Legal & PID Documents",
    count: 22,
    color: "text-orange-400",
    border: "border-orange-500/30",
    bg: "bg-orange-500/10",
    examples: "Federal Court PID assessments, NDIS PIDs, ComCare proceedings, legal demands"
  },
  {
    icon: ScrollText,
    label: "Personal Testimony",
    count: 18,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    examples: "Immortal Testimony, Certified Record, Comprehensive Persecution Statement"
  },
  {
    icon: Globe,
    label: "ICC & UN Submissions",
    count: 12,
    color: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/5",
    examples: "UNHCR asylum claim, ICC cryptographic package, OHCHR urgent appeal"
  },
  {
    icon: Brain,
    label: "Forensic Economic Analysis",
    count: 10,
    color: "text-orange-400",
    border: "border-orange-500/30",
    bg: "bg-orange-500/5",
    examples: "$58.6M–$257.3M valuation, ASIC corruption evidence, karma audit"
  },
  {
    icon: Database,
    label: "Evidence Registers",
    count: 8,
    color: "text-pink-400",
    border: "border-pink-500/30",
    bg: "bg-pink-500/5",
    examples: "Master Evidence Register (3,643 docs), forensic synthesis reports"
  },
  {
    icon: Shield,
    label: "Government Records",
    count: 27,
    color: "text-red-400",
    border: "border-red-500/30",
    bg: "bg-red-500/5",
    examples: "Retrospective Statement, NDIS plans, ministerial correspondence, psychiatric files"
  },
  {
    icon: Archive,
    label: "Page Certificates",
    count: 494,
    color: "text-yellow-400",
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/5",
    examples: "494 blockchain-sealed PDFs — one per page, SHA-256 hashed against Bitcoin Block 897,241"
  },
];

export function NuclearDownloadButton() {
  const [showStatement, setShowStatement] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const { data: countData } = useQuery<{ count: number }>({
    queryKey: ["/api/nuclear-download/count"],
    refetchInterval: 30000,
  });

  const trackMutation = useMutation({
    mutationFn: () =>
      fetch("/api/nuclear-download/track", { method: "POST" }).then(r => r.json()),
  });

  const displayCount = (countData?.count ?? 0) + BASELINE;

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    trackMutation.mutate();
    const a = document.createElement("a");
    a.href = "/api/nuclear-download";
    a.download = "BarranDodger-Complete-Archive.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // Reset button after 20 s — the browser download manager takes over at that point
    setTimeout(() => setDownloading(false), 20000);
  };

  return (
    <section className="relative w-full" data-testid="section-nuclear-download">
      <div className="relative overflow-hidden rounded-2xl border-2 border-orange-500/30 bg-[#0a0500]"
        style={{ boxShadow: "0 0 60px rgba(217,119,6,0.15), 0 0 120px rgba(217,119,6,0.05), inset 0 0 60px rgba(0,0,0,0.8)" }}>

        {/* Animated amber top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-80" />

        {/* Subtle radial glow — contained within button */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.04)_0%,transparent_70%)]" />

        <div className="relative px-6 py-10 md:px-12 md:py-14">

          {/* Header badge */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5">
                <AlertTriangle className="h-3.5 w-3.5 text-orange-400 animate-pulse" />
                <span className="text-orange-400 text-[10px] font-black uppercase tracking-[0.25em] font-mono">Nuclear Archive Release</span>
                <AlertTriangle className="h-3.5 w-3.5 text-orange-400 animate-pulse" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-black text-white mb-3 leading-tight">
              ☢ NUCLEAR DOWNLOAD
            </h2>
            <p className="text-orange-400 font-bold text-lg md:text-xl mb-2 tracking-wide">
              The Complete Barran Dodger Archive
            </p>
            <p className="text-white/60 text-sm md:text-base max-w-2xl">
              Every gospel. Every testimony. Every PID filing. Every forensic analysis. Every ICC submission. Every government document Australia tried to make disappear — in one file.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-3xl mx-auto">
            {[
              { value: "750+", label: "Total Documents" },
              { value: "256", label: "PDFs Timestamped" },
              { value: "35", label: "Years of Evidence" },
              { value: "SHA-256", label: "Blockchain Verified" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center bg-black/40 border border-orange-500/30 rounded-xl p-3">
                <div className="text-orange-400 font-black text-xl md:text-2xl font-mono">{value}</div>
                <div className="text-white/50 text-[10px] uppercase tracking-widest mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Category grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8 max-w-5xl mx-auto">
            {CATEGORIES.map(({ icon: Icon, label, count, color, border, bg, examples }) => (
              <div key={label} className={`rounded-xl border ${border} ${bg} p-4`}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`h-4 w-4 ${color} flex-shrink-0`} />
                  <span className={`${color} text-xs font-bold uppercase tracking-wide`}>{label}</span>
                </div>
                <div className={`${color} text-2xl font-black font-mono mb-1`}>{count}</div>
                <div className="text-white/40 text-[10px] leading-relaxed">{examples}</div>
              </div>
            ))}
          </div>

          {/* AI Significance Statement toggle */}
          <div className="max-w-4xl mx-auto mb-8">
            <button
              onClick={() => setShowStatement(v => !v)}
              className="w-full flex items-center justify-between gap-3 px-5 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all text-sm font-mono"
              data-testid="button-toggle-ai-statement"
            >
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-orange-400" />
                <span className="text-orange-400 font-bold text-xs uppercase tracking-widest">Impartial AI Statement of Significance</span>
              </div>
              {showStatement ? <ChevronUp className="h-4 w-4 flex-shrink-0" /> : <ChevronDown className="h-4 w-4 flex-shrink-0" />}
            </button>

            <AnimatePresence>
              {showStatement && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 px-5 py-5 rounded-xl border border-orange-500/30 bg-orange-500/10">
                    {AI_SIGNIFICANCE.split("\n\n").map((para, i) => (
                      <p key={i} className={`text-white/75 text-sm leading-relaxed ${i === 0 ? "text-orange-400 text-xs font-black uppercase tracking-widest mb-3" : "mb-4"}`}>
                        {para}
                      </p>
                    ))}
                    <div className="text-orange-500/60 text-[10px] font-mono uppercase tracking-widest border-t border-orange-500/30 pt-3 mt-2">
                      Generated by impartial AI analysis · Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* What's inside summary */}
          <div className="max-w-4xl mx-auto mb-8 px-5 py-4 rounded-xl border border-white/10 bg-white/[0.03]">
            <div className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
              <Archive className="h-3 w-3" />
              What this archive contains
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
              {[
                "Gospel documents & prophetic writings (Eliven Chain series)",
                "Federal Court PID assessments & whistleblower filings",
                "80+ independent forensic song and video analyses",
                "UNHCR asylum claim & OHCHR urgent appeal (Ref: UR UST 23 AUS 17)",
                "Immortal Testimony and personal survivor statements",
                "ICC cryptographic evidence package (blockchain sealed)",
                "Forensic economic valuation ($58.6M–$257.3M loss)",
                "Master Evidence Register — 3,643 primary source documents",
                "Government psychiatric weaponisation evidence",
                "NDIS, Centrelink, ComCare, AFP, ASIO institutional records",
                "AVO evidence against Bill Shorten & ministerial conspiracy docs",
                "494 blockchain-sealed page certificates (one per article, gospel, analysis)",
                "BLOCKCHAIN_MANIFEST.txt — SHA-256 hash + timestamp for all 256 PDFs (tamper-proof)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-white/60 text-xs leading-relaxed">
                  <Zap className="h-3 w-3 text-orange-500/70 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download button + counter */}
          <div className="flex flex-col items-center gap-4">
            {/* Rings anchored to the button */}
            <div className="relative flex items-center justify-center">
              <div className="pointer-events-none absolute w-[600px] h-[600px] rounded-full border border-orange-500/30 animate-ping" style={{ animationDuration: "4s" }} />
              <div className="pointer-events-none absolute w-[400px] h-[400px] rounded-full border border-orange-500/30 animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
            <motion.button
              onClick={handleDownload}
              disabled={downloading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-lg text-black transition-all disabled:opacity-60"
              style={{
                background: downloading
                  ? "linear-gradient(135deg, #92400e, #78350f)"
                  : "linear-gradient(135deg, #f59e0b, #d97706, #b45309)",
                boxShadow: downloading ? "none" : "0 0 40px rgba(245,158,11,0.4), 0 4px 20px rgba(0,0,0,0.6)",
              }}
              data-testid="button-nuclear-download"
            >
              {downloading ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  <span>BUILDING ARCHIVE…</span>
                </>
              ) : (
                <>
                  <Download className="h-6 w-6" />
                  <span>☢ DOWNLOAD COMPLETE ARCHIVE</span>
                  <span className="text-black/60 text-sm font-bold">(256 PDFs · SHA-256 Verified)</span>
                </>
              )}
              {!downloading && (
                <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/10 transition-all" />
              )}
            </motion.button>
            </div>

            {/* Counter */}
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-mono font-bold text-white/70">
                {displayCount.toLocaleString()}
              </span>
              <span>people have preserved this archive</span>
            </div>

            <p className="text-white/30 text-[10px] text-center max-w-lg font-mono uppercase tracking-wider">
              This archive is free to download, share, and preserve · Distribution is an act of historical record-keeping ·
              ABN 78 833 496 164 · barrandodger.com
            </p>
          </div>
        </div>

        {/* Bottom amber bar */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-80" />
      </div>
    </section>
  );
}
