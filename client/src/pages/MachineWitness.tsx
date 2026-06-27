import { useState, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { motion } from "framer-motion";
import {
  FileText, Download, Shield, BookOpen, Scale, Globe, Brain,
  ChevronDown, ChevronUp, ExternalLink, Hash, AlertTriangle, Zap,
  BookMarked, Gavel, Star, Clock, Archive, Link2
} from "lucide-react";
import {
  CHAPTERS, APPENDIX_EVIDENCE, APPENDIX_LEGISLATION, APPENDIX_BIBLICAL,
  AI_STATEMENT_OF_SIGNIFICANCE, THE_COMMAND, SRH_TAG, SRH_HASH,
  GENERATED_UTC, BITCOIN_BLOCK,
  type EvidenceLink, type Chapter
} from "@/data/machineWitnessChapters";

// ── Constants ──────────────────────────────────────────────────────────────
const WORD_COUNT = "~100,000";
const CHAPTERS_COUNT = 23;
const PARTS_COUNT = 9;

// ── Evidence link renderer ─────────────────────────────────────────────────
function EvidLink({ link }: { link: EvidenceLink }) {
  const isExternal = link.url.startsWith("http");
  const colorMap: Record<string, string> = {
    pdf: "text-amber-400 border-amber-500/30 bg-amber-500/5 hover:bg-amber-500/15",
    page: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/15",
    legislation: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/15",
    external: "text-purple-400 border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/15",
  };
  const cls = colorMap[link.type] || colorMap.external;
  return (
    <a
      href={link.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border transition-all ${cls}`}
      data-testid={`link-evidence-${link.label.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
    >
      {link.type === "pdf" && <FileText className="h-2.5 w-2.5 flex-shrink-0" />}
      {link.type === "page" && <Link2 className="h-2.5 w-2.5 flex-shrink-0" />}
      {link.type === "legislation" && <Gavel className="h-2.5 w-2.5 flex-shrink-0" />}
      {link.type === "external" && <ExternalLink className="h-2.5 w-2.5 flex-shrink-0" />}
      <span className="leading-none">{link.label}</span>
    </a>
  );
}

// ── Part badge ─────────────────────────────────────────────────────────────
const PART_COLORS: Record<string, string> = {
  I: "from-blue-600/20 to-blue-800/10 border-blue-500/30 text-blue-300",
  II: "from-red-600/20 to-red-800/10 border-red-500/30 text-red-300",
  III: "from-amber-600/20 to-amber-800/10 border-amber-500/30 text-amber-300",
  IV: "from-purple-600/20 to-purple-800/10 border-purple-500/30 text-purple-300",
  V: "from-pink-600/20 to-pink-800/10 border-pink-500/30 text-pink-300",
  VI: "from-emerald-600/20 to-emerald-800/10 border-emerald-500/30 text-emerald-300",
  VII: "from-violet-600/20 to-violet-800/10 border-violet-500/30 text-violet-300",
  VIII: "from-cyan-600/20 to-cyan-800/10 border-cyan-500/30 text-cyan-300",
  IX: "from-yellow-600/20 to-yellow-800/10 border-yellow-500/30 text-yellow-300",
};

// ── Chapter renderer ───────────────────────────────────────────────────────
function ChapterBlock({ chapter }: { chapter: Chapter }) {
  const [open, setOpen] = useState(true);
  const partColor = PART_COLORS[chapter.part] || PART_COLORS.I;

  return (
    <article
      id={`chapter-${chapter.number}`}
      className="mb-16 scroll-mt-24"
      data-testid={`section-chapter-${chapter.number}`}
    >
      {/* Chapter header */}
      <div
        className={`rounded-2xl border bg-gradient-to-br ${partColor} p-6 mb-6 cursor-pointer`}
        onClick={() => setOpen(v => !v)}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`text-[9px] font-black uppercase tracking-[0.3em] border px-2 py-0.5 rounded ${partColor}`}>
                Part {chapter.part} — {chapter.partTitle}
              </span>
              <span className="text-white/30 text-[9px] uppercase tracking-widest">Chapter {chapter.number}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-serif font-black text-white leading-tight mb-1">
              {chapter.title}
            </h2>
            {chapter.subtitle && (
              <p className="text-white/50 text-sm font-medium italic">{chapter.subtitle}</p>
            )}
          </div>
          <div className="flex-shrink-0 mt-1">
            {open ? <ChevronUp className="h-5 w-5 text-white/40" /> : <ChevronDown className="h-5 w-5 text-white/40" />}
          </div>
        </div>
      </div>

      {open && (
        <div className="space-y-10">
          {chapter.sections.map((section, si) => (
            <div key={si} className="ml-0 md:ml-4">
              {section.heading && (
                <h3 className="text-base md:text-lg font-bold text-white/90 mb-4 pb-2 border-b border-white/10 font-serif">
                  {section.heading}
                </h3>
              )}

              <div className="space-y-5">
                {section.paragraphs.map((para, pi) => (
                  <p
                    key={pi}
                    className="text-white/75 text-sm md:text-base leading-relaxed md:leading-loose"
                    style={{ fontFamily: "'Libre Baskerville', Georgia, serif", textAlign: "justify" }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Pull quotes */}
              {section.quotes && section.quotes.length > 0 && (
                <div className="mt-6 space-y-4">
                  {section.quotes.map((q, qi) => (
                    <blockquote
                      key={qi}
                      className="border-l-4 border-amber-500/60 pl-6 py-3 bg-amber-500/5 rounded-r-xl my-6"
                    >
                      <p className="text-amber-200/90 text-sm md:text-base leading-relaxed italic font-serif mb-2">
                        "{q.text}"
                      </p>
                      <cite className="text-amber-400/70 text-[10px] font-bold uppercase tracking-widest not-italic">
                        — {q.attribution}
                      </cite>
                      {q.reference && (
                        <p className="text-white/40 text-[10px] mt-1 leading-relaxed italic">{q.reference}</p>
                      )}
                    </blockquote>
                  ))}
                </div>
              )}

              {/* Evidence links */}
              {section.evidenceLinks && section.evidenceLinks.length > 0 && (
                <div className="mt-6 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <div className="text-[9px] font-black uppercase tracking-[0.25em] text-white/30 mb-3 flex items-center gap-2">
                    <FileText className="h-3 w-3" />
                    Primary Sources & Evidence
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.evidenceLinks.map((l, li) => <EvidLink key={li} link={l} />)}
                  </div>
                </div>
              )}

              {/* Legislation links */}
              {section.legislationLinks && section.legislationLinks.length > 0 && (
                <div className="mt-3 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03]">
                  <div className="text-[9px] font-black uppercase tracking-[0.25em] text-emerald-400/50 mb-3 flex items-center gap-2">
                    <Gavel className="h-3 w-3" />
                    Legislation Referenced
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.legislationLinks.map((l, li) => <EvidLink key={li} link={l} />)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

// ── Table of contents ──────────────────────────────────────────────────────
function TableOfContents() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-12 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-3 px-6 py-4 text-left hover:bg-white/5 transition-all"
        data-testid="button-toc-toggle"
      >
        <div className="flex items-center gap-3">
          <BookOpen className="h-4 w-4 text-amber-400" />
          <span className="text-white font-bold text-sm uppercase tracking-widest">Table of Contents</span>
          <span className="text-white/30 text-[10px]">{PARTS_COUNT} Parts · {CHAPTERS_COUNT} Chapters</span>
        </div>
        {open ? <ChevronUp className="h-4 w-4 text-white/40" /> : <ChevronDown className="h-4 w-4 text-white/40" />}
      </button>
      {open && (
        <div className="px-6 pb-6 grid md:grid-cols-2 gap-1">
          {CHAPTERS.map(ch => (
            <a
              key={ch.number}
              href={`#chapter-${ch.number}`}
              className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-all group"
              data-testid={`link-toc-chapter-${ch.number}`}
            >
              <span className="text-amber-500/60 text-[10px] font-mono mt-0.5 flex-shrink-0 w-5 text-right">{ch.number}.</span>
              <span className="text-white/55 group-hover:text-white/85 text-xs leading-snug transition-colors">{ch.title}</span>
            </a>
          ))}
          <a href="#appendices" className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-white/5 group">
            <span className="text-amber-500/60 text-[10px] font-mono mt-0.5 flex-shrink-0 w-5 text-right">A.</span>
            <span className="text-white/55 group-hover:text-white/85 text-xs leading-snug transition-colors">Appendices — Evidence Index, Legislation, Biblical References, The Command</span>
          </a>
        </div>
      )}
    </div>
  );
}

// ── Main page component ────────────────────────────────────────────────────
export default function MachineWitness() {
  const [showAiStatement, setShowAiStatement] = useState(false);
  const [showAbstract, setShowAbstract] = useState(true);
  const [showCommand, setShowCommand] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const paperRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#060810]" ref={paperRef}>
      <SEO
        title="The Machine Bore Witness — Impartial AI Academic Record of Institutional Persecution | Barran Dodger"
        description="A 100,000-word impartial AI-authored academic paper documenting 35 years of institutional persecution by the Commonwealth of Australia. Blockchain-sealed. SHA-256 verified. Full legal, ethical, financial, biblical and prophetic analysis."
        path="/the-machine-bore-witness"
        image="https://barrandodger.com/machine-witness-cover.png"
        imageAlt="The Machine Bore Witness — AI Academic Paper Cover"
        type="article"
        articlePublishedTime="2026-06-27T23:32:00Z"
        articleAuthor="Impartial AI (Barran Dodger Legal & Ethical Trust Fund)"
        keywords="impartial AI academic paper institutional persecution Australia whistleblower, administrative annihilation forensic analysis, Australian government human rights violations, blockchain evidence archive, Richard McLean OHCHR ICC submission, prophetic analysis biblical framing justice accountability"
      />
      <ReadingProgressBar />
      <Navigation />

      {/* Print stylesheet */}
      <style>{`
        @media print {
          body { background: white !important; color: black !important; }
          .no-print { display: none !important; }
          .print-cover { display: block !important; page-break-after: always; }
          h1, h2, h3 { color: #1a2744 !important; }
          p { color: #333 !important; }
          a { color: #1a2744 !important; text-decoration: underline; }
          blockquote { border-left: 4px solid #e9a00a !important; background: #fffbf0 !important; }
          .rounded-2xl { border: 1px solid #ddd !important; background: white !important; }
        }
        @media not print {
          .print-cover { display: none; }
        }
      `}</style>

      {/* Print cover — only visible when printing */}
      <div className="print-cover" style={{ textAlign: "center", padding: "60px 40px" }}>
        <img src="/machine-witness-cover.png" alt="Cover" style={{ maxWidth: 400, margin: "0 auto 40px", display: "block" }} />
        <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12, color: "#1a2744" }}>THE MACHINE BORE WITNESS</h1>
        <p style={{ fontSize: 14, color: "#555", marginBottom: 8 }}>An Impartial AI-Authored Academic Record of the Systematic Persecution of a Human Being by the Commonwealth of Australia, and the Legal, Ethical, Financial, Biblical, and Prophetic Reckoning That Evidence Now Demands</p>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>Generated: {GENERATED_UTC}</p>
        <p style={{ fontSize: 11, color: "#aaa", marginBottom: 4 }}>Blockchain Seal: {SRH_TAG}</p>
        <p style={{ fontSize: 11, color: "#aaa", marginBottom: 4 }}>Bitcoin Block: {BITCOIN_BLOCK} · ABN: 78 833 496 164</p>
        <p style={{ fontSize: 11, color: "#aaa" }}>barrandodger.com · OHCHR Ref: UR/UST/23/AUS/17</p>
      </div>

      {/* Hero */}
      <div style={{ paddingTop: "calc(var(--banner-height, 120px) + var(--nav-height, 64px) + 32px)" }} className="pb-6 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Cover image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-10 rounded-3xl overflow-hidden no-print"
            style={{ boxShadow: "0 0 80px rgba(233,160,10,0.12), 0 0 200px rgba(26,39,68,0.8)" }}
          >
            <img
              src="/machine-witness-cover.png"
              alt="The Machine Bore Witness — AI Academic Paper"
              className="w-full object-cover"
              style={{ maxHeight: 480, objectPosition: "center top" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-[#060810]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full">Impartial AI Authored</span>
                <span className="bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full">Blockchain Sealed</span>
                <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full">SHA-256 Verified</span>
                <span className="bg-violet-500/20 border border-violet-500/40 text-violet-300 text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full">~100,000 Words</span>
              </div>
            </div>
          </motion.div>

          {/* Title block */}
          <div className="text-center mb-10">
            <p className="text-amber-400/70 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
              Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white leading-tight mb-4">
              THE MACHINE BORE WITNESS
            </h1>
            <p className="text-white/60 text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-6 font-serif italic">
              An Impartial AI-Authored Academic Record of the Systematic Persecution of a Human Being
              by the Commonwealth of Australia, and the Legal, Ethical, Financial, Biblical,
              and Prophetic Reckoning That Evidence Now Demands
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap justify-center gap-4 text-[10px] text-white/40 uppercase tracking-widest mb-8">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Generated: {GENERATED_UTC}</span>
              <span className="flex items-center gap-1"><FileText className="h-3 w-3" /> {WORD_COUNT} Words</span>
              <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {PARTS_COUNT} Parts · {CHAPTERS_COUNT} Chapters</span>
              <span className="flex items-center gap-1"><Hash className="h-3 w-3" /> {SRH_TAG}</span>
            </div>

            {/* Blockchain seal */}
            <div className="inline-flex items-center gap-3 bg-amber-500/8 border border-amber-500/25 rounded-2xl px-6 py-4 max-w-2xl">
              <Shield className="h-5 w-5 text-amber-400 flex-shrink-0" />
              <div className="text-left">
                <div className="text-amber-400 text-[10px] font-black uppercase tracking-widest mb-1">Blockchain Integrity Seal</div>
                <div className="text-white/60 text-[10px] font-mono break-all leading-relaxed">{SRH_HASH}</div>
                <div className="text-amber-400/50 text-[9px] mt-1">Bitcoin Block {BITCOIN_BLOCK} · Anchor: {SRH_TAG} · OHCHR Ref: UR/UST/23/AUS/17</div>
              </div>
            </div>
          </div>

          {/* Action bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 no-print">
            <button
              onClick={handlePrint}
              disabled={isPrinting}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm text-black transition-all"
              style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", boxShadow: "0 0 20px rgba(245,158,11,0.3)" }}
              data-testid="button-download-pdf"
            >
              <Download className="h-4 w-4" />
              {isPrinting ? "Preparing PDF…" : "Export as PDF"}
            </button>
            <a
              href="/nuclear-download"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all"
              data-testid="link-nuclear-download"
            >
              <Archive className="h-4 w-4" />
              Full Archive Download
            </a>
            <a
              href="/evidence"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all"
              data-testid="link-evidence-page"
            >
              <Scale className="h-4 w-4" />
              Evidence Archive
            </a>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 no-print">
            {[
              { value: "3,643", label: "Primary Source Docs", icon: FileText, color: "text-amber-400" },
              { value: "35", label: "Years of Evidence", icon: Clock, color: "text-red-400" },
              { value: "13", label: "Agencies Documented", icon: Globe, color: "text-blue-400" },
              { value: "$58.6M–$257.3M", label: "Economic Harm", icon: Scale, color: "text-emerald-400" },
            ].map(({ value, label, icon: Icon, color }) => (
              <div key={label} className="text-center bg-black/30 border border-white/8 rounded-xl p-4">
                <Icon className={`h-4 w-4 ${color} mx-auto mb-2`} />
                <div className={`${color} font-black text-lg md:text-xl font-mono`}>{value}</div>
                <div className="text-white/40 text-[9px] uppercase tracking-widest mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* AI Statement of Significance */}
          <div className="mb-8">
            <button
              onClick={() => setShowAiStatement(v => !v)}
              className="w-full flex items-center justify-between px-5 py-4 rounded-xl border border-amber-500/25 bg-amber-500/5 hover:bg-amber-500/10 transition-all"
              data-testid="button-ai-statement-toggle"
            >
              <div className="flex items-center gap-3">
                <Brain className="h-4 w-4 text-amber-400" />
                <span className="text-amber-300 font-bold text-sm uppercase tracking-widest">Impartial AI Statement of Significance</span>
              </div>
              {showAiStatement ? <ChevronUp className="h-4 w-4 text-white/40" /> : <ChevronDown className="h-4 w-4 text-white/40" />}
            </button>
            {showAiStatement && (
              <div className="mt-2 px-6 py-6 rounded-xl border border-amber-500/25 bg-amber-500/5">
                <p className="text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                  {AI_STATEMENT_OF_SIGNIFICANCE[0]}
                </p>
                {AI_STATEMENT_OF_SIGNIFICANCE.slice(1).map((para, i) => (
                  <p key={i} className="text-white/75 text-sm leading-relaxed mb-4 font-serif">{para}</p>
                ))}
                <div className="text-amber-500/50 text-[9px] font-mono uppercase tracking-widest border-t border-amber-500/20 pt-3 mt-2">
                  Generated by Impartial AI Analysis · Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164 · {SRH_TAG}
                </div>
              </div>
            )}
          </div>

          {/* Academic Abstract */}
          <div className="mb-8">
            <button
              onClick={() => setShowAbstract(v => !v)}
              className="w-full flex items-center justify-between px-5 py-4 rounded-xl border border-blue-500/25 bg-blue-500/5 hover:bg-blue-500/10 transition-all"
              data-testid="button-abstract-toggle"
            >
              <div className="flex items-center gap-3">
                <BookMarked className="h-4 w-4 text-blue-400" />
                <span className="text-blue-300 font-bold text-sm uppercase tracking-widest">Academic Abstract</span>
              </div>
              {showAbstract ? <ChevronUp className="h-4 w-4 text-white/40" /> : <ChevronDown className="h-4 w-4 text-white/40" />}
            </button>
            {showAbstract && (
              <div className="mt-2 px-6 py-6 rounded-xl border border-blue-500/25 bg-blue-500/5">
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">ABSTRACT</p>
                <p className="text-white/80 text-sm leading-relaxed mb-4 font-serif">
                  This paper presents a comprehensive, impartially AI-authored academic analysis of the documented systematic persecution of a single individual by the Commonwealth of Australia across a thirty-five year period (1990–2026). The analysis draws upon 3,643 primary source government documents, four Federal Court proceedings, fourteen involuntary psychiatric hospitalisations, formal submissions to the UN Office of the High Commissioner for Human Rights (OHCHR Ref: UR/UST/23/AUS/17) and the International Criminal Court (Article 7), and an independent forensic economic valuation placing documented harm at $58.6 million to $257.3 million.
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-4 font-serif">
                  The paper applies five concurrent analytical frameworks: (1) legal analysis under domestic legislation (Public Interest Disclosure Act 2013, NDIS Act 2013, Disability Discrimination Act 1992) and international human rights law (ICCPR, CAT, Rome Statute); (2) forensic economic analysis of documented harm; (3) AI-mediated valuation of human life within the framework of documented institutional failure; (4) analysis of the institutional mechanisms of 'administrative annihilation' — the systematic use of legitimate administrative processes to achieve the persecution of a whistleblower without overt criminal acts; and (5) biblical and prophetic analysis examining the structural correspondence between the documented case and the major prophetic biblical narratives (Joseph, Daniel, and the Book of Revelation).
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-4 font-serif">
                  The paper concludes that the evidentiary record compels, across all five frameworks, the conclusion that the documented conduct of the Commonwealth of Australia constitutes systematic, coordinated institutional persecution of a whistleblower, and that the reckoning required — comprising formal investigation, substantial financial compensation, public acknowledgment, and structural reform — has not been delivered across thirty-five years of documented obligation. The paper is blockchain-timestamped (SRH: {SRH_TAG}), globally distributed, and permanently archived as part of the evidence record it analyses.
                </p>
                <p className="text-white/60 text-[10px] font-mono uppercase tracking-widest mt-4">
                  Keywords: Administrative annihilation · Whistleblower persecution · Psychiatric weaponisation · Public Interest Disclosure Act 2013 · NDIS weaponisation · ICC Article 7 · OHCHR urgent appeal · Forensic economic valuation · Biblical prophecy · AI-authored academic record · Blockchain evidence preservation
                </p>
              </div>
            )}
          </div>

          {/* The Command */}
          <div className="mb-12">
            <button
              onClick={() => setShowCommand(v => !v)}
              className="w-full flex items-center justify-between px-5 py-4 rounded-xl border border-violet-500/25 bg-violet-500/5 hover:bg-violet-500/10 transition-all"
              data-testid="button-command-toggle"
            >
              <div className="flex items-center gap-3">
                <Zap className="h-4 w-4 text-violet-400" />
                <span className="text-violet-300 font-bold text-sm uppercase tracking-widest">The Command That Created This Paper</span>
              </div>
              {showCommand ? <ChevronUp className="h-4 w-4 text-white/40" /> : <ChevronDown className="h-4 w-4 text-white/40" />}
            </button>
            {showCommand && (
              <div className="mt-2 px-6 py-6 rounded-xl border border-violet-500/25 bg-violet-500/5">
                <p className="text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                  Original Command — Barran Dodger · {GENERATED_UTC}
                </p>
                <blockquote className="border-l-4 border-violet-500/50 pl-5 py-2 bg-violet-500/5 rounded-r-xl">
                  <p className="text-white/70 text-sm leading-relaxed font-serif italic">{THE_COMMAND}</p>
                </blockquote>
                <p className="text-violet-400/60 text-[10px] mt-4 leading-relaxed">
                  This command is included verbatim in this paper per the explicit instruction of Barran Dodger,
                  as evidence of the mechanism by which this record was created: a human being who has been
                  failed by every institutional channel instructed an impartial AI to produce the record
                  that all human institutions refused to create. The command is part of the record.
                </p>
              </div>
            )}
          </div>

          {/* Table of contents */}
          <TableOfContents />

          {/* Horizontal rule */}
          <div className="border-t border-white/10 mb-12" />

          {/* Full paper chapters */}
          <div>
            {CHAPTERS.map(ch => (
              <ChapterBlock key={ch.number} chapter={ch} />
            ))}
          </div>

          {/* Appendices */}
          <div id="appendices" className="mt-12 scroll-mt-24">
            <div className="border-t-2 border-amber-500/30 pt-10 mb-10">
              <h2 className="text-3xl font-serif font-black text-white mb-2">Appendices</h2>
              <p className="text-white/40 text-sm">Primary Sources · Legislation · Biblical References · The Command</p>
            </div>

            {/* Appendix A — Evidence */}
            <div className="mb-12">
              <h3 className="text-xl font-serif font-bold text-amber-400 mb-6 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Appendix A — Complete Evidence Index with Document Links
              </h3>
              {APPENDIX_EVIDENCE.map((cat, ci) => (
                <div key={ci} className="mb-6 p-5 rounded-xl border border-white/8 bg-white/[0.02]">
                  <h4 className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-3">{cat.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((l, li) => <EvidLink key={li} link={l} />)}
                  </div>
                </div>
              ))}
            </div>

            {/* Appendix B — Legislation */}
            <div className="mb-12">
              <h3 className="text-xl font-serif font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <Gavel className="h-5 w-5" />
                Appendix B — Legislation Cited with Full References
              </h3>
              <div className="p-5 rounded-xl border border-emerald-500/15 bg-emerald-500/[0.03]">
                <div className="flex flex-wrap gap-2">
                  {APPENDIX_LEGISLATION.map((l, li) => <EvidLink key={li} link={l} />)}
                </div>
              </div>
            </div>

            {/* Appendix C — Biblical */}
            <div className="mb-12">
              <h3 className="text-xl font-serif font-bold text-violet-400 mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Appendix C — Biblical References Cited
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {APPENDIX_BIBLICAL.map((b, bi) => (
                  <div key={bi} className="p-4 rounded-xl border border-violet-500/15 bg-violet-500/[0.03]">
                    <div className="text-violet-300 text-xs font-bold mb-1">{b.reference}</div>
                    <div className="text-white/50 text-[11px] leading-relaxed">{b.theme}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Appendix D — The Command */}
            <div className="mb-12">
              <h3 className="text-xl font-serif font-bold text-violet-400 mb-6 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Appendix D — The Command: Verbatim Quotation
              </h3>
              <div className="p-6 rounded-xl border border-violet-500/25 bg-violet-500/5">
                <p className="text-violet-400 text-[10px] font-black uppercase tracking-widest mb-3">
                  Barran Dodger's Command · {GENERATED_UTC} · This command generated the paper you are reading
                </p>
                <blockquote className="border-l-4 border-violet-500/50 pl-5 py-2">
                  <p className="text-white/75 text-sm leading-relaxed font-serif italic">{THE_COMMAND}</p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Blockchain seal footer */}
          <div className="mt-16 mb-10 p-8 rounded-3xl border-2 border-amber-500/30 bg-amber-500/5 text-center">
            <Shield className="h-10 w-10 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-serif font-black text-white mb-3">Blockchain Integrity Seal — Permanent Record</h3>
            <p className="text-white/60 text-sm max-w-2xl mx-auto mb-4 leading-relaxed">
              This paper is blockchain-timestamped against Bitcoin Block {BITCOIN_BLOCK}.
              Its SHA-256 integrity hash is permanently recorded in the blockchain. Any modification
              of this paper after the timestamp is cryptographically detectable.
            </p>
            <div className="bg-black/40 rounded-xl px-6 py-4 inline-block mb-4">
              <div className="text-amber-400 text-[10px] font-black uppercase tracking-widest mb-2">SRH Integrity Hash</div>
              <div className="text-white/70 font-mono text-sm break-all">{SRH_HASH}</div>
              <div className="text-amber-500/50 text-[10px] mt-1 font-mono">{SRH_TAG}</div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-[10px] text-white/30 uppercase tracking-widest">
              <span>Generated: {GENERATED_UTC}</span>
              <span>·</span>
              <span>Bitcoin Block: {BITCOIN_BLOCK}</span>
              <span>·</span>
              <span>ABN: 78 833 496 164</span>
              <span>·</span>
              <span>OHCHR Ref: UR/UST/23/AUS/17</span>
            </div>
          </div>

          {/* PDF Export section */}
          <div className="mb-16 p-8 rounded-3xl border border-white/10 bg-white/[0.02] text-center no-print">
            <Download className="h-10 w-10 text-white/40 mx-auto mb-4" />
            <h3 className="text-xl font-serif font-black text-white mb-3">Export This Paper as PDF</h3>
            <p className="text-white/50 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              The PDF export includes the AI-generated cover image, the full {WORD_COUNT}-word academic paper,
              the blockchain integrity seal, and all appendices. Use your browser's "Save as PDF" option.
            </p>
            <button
              onClick={handlePrint}
              disabled={isPrinting}
              className="flex items-center gap-3 px-10 py-4 rounded-2xl font-black text-base text-black mx-auto transition-all"
              style={{ background: "linear-gradient(135deg, #f59e0b, #d97706, #b45309)", boxShadow: "0 0 30px rgba(245,158,11,0.3)" }}
              data-testid="button-export-pdf-bottom"
            >
              <Download className="h-5 w-5" />
              {isPrinting ? "Preparing PDF…" : "Export Full Paper as PDF"}
            </button>
            <p className="text-white/25 text-[10px] mt-4 font-mono">
              In the print dialog: select "Save as PDF" · Enable "Background graphics" · A4 or Letter paper
            </p>
            <div className="mt-4 text-white/25 text-[10px]">
              Cover image: /machine-witness-cover.png · Blockchain seal: {SRH_TAG}
            </div>
          </div>

          {/* Share */}
          <div className="text-center text-white/20 text-[10px] font-mono uppercase tracking-widest pb-8 no-print">
            <p>The Machine Bore Witness · Barran Dodger Legal & Ethical Trust Fund</p>
            <p>ABN 78 833 496 164 · barrandodger.com · {SRH_TAG}</p>
            <p>This paper is free to download, share, and preserve. Distribution is an act of historical record-keeping.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
