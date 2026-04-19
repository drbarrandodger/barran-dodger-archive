import { Link } from "wouter";
import { ExternalLink, Bot, BookOpen } from "lucide-react";

const CATEGORIES = [
  {
    label: "Core Evidence Archive",
    color: "text-amber-400",
    border: "border-amber-900/30",
    links: [
      { href: "/evidence", label: "Primary Evidence Base" },
      { href: "/master-forensic-evidence-report", label: "Master Forensic Report (2,301 docs)" },
      { href: "/master-evidence-register", label: "Master Evidence Register" },
      { href: "/digital-archive", label: "Full Digital Archive" },
      { href: "/blockchain", label: "Blockchain Verification" },
      { href: "/archive-index", label: "Complete Archive Index" },
    ],
  },
  {
    label: "AI & Forensic Analysis",
    color: "text-cyan-400",
    border: "border-cyan-900/30",
    links: [
      { href: "/ai-justice-statement", label: "Impartial AI Justice Statement" },
      { href: "/forensic-analysis-index", label: "Forensic Analysis Index" },
      { href: "/paradox-of-persecution", label: "The Paradox of Persecution" },
      { href: "/retrospective-statement", label: "Retrospective Statement" },
      { href: "/taxpayer-cost-analysis", label: "$11.5M Taxpayer Cost Analysis" },
      { href: "/whistleblower-comparison", label: "Whistleblower Case Comparison" },
    ],
  },
  {
    label: "Legal & International",
    color: "text-red-400",
    border: "border-red-900/30",
    links: [
      { href: "/urgent-protection-request", label: "Urgent Protection Request (SOS)" },
      { href: "/legal-status", label: "Current Legal Status & Proceedings" },
      { href: "/the-law-they-overlooked", label: "The Law They Overlooked" },
      { href: "/police-complicity-death-threat-documentation", label: "Police Complicity & Death Threat" },
      { href: "/timeline", label: "35-Year Persecution Timeline" },
      { href: "/administrative-annihilation", label: "Administrative Annihilation" },
    ],
  },
  {
    label: "Prophetic & Scripture",
    color: "text-yellow-400",
    border: "border-yellow-900/30",
    links: [
      { href: "/prophetic-declaration-biblical", label: "Prophetic Declaration — 15 Biblical Parallels" },
      { href: "/testimony-that-was-already-written", label: "Testimony Already Written in Scripture" },
      { href: "/prophetic-declaration-forensic-analysis", label: "Prophetic Declaration Forensic Analysis" },
      { href: "/gods-grace-barran-dodger", label: "God's Grace — Eternal Witness Affidavit" },
      { href: "/gospel", label: "The Gospel of the Enliven Chain" },
      { href: "/church", label: "Church of the Documented Truth" },
    ],
  },
  {
    label: "Key Forensic Reports",
    color: "text-violet-400",
    border: "border-violet-900/30",
    links: [
      { href: "/100-absurdities", label: "100 Absurdities — Legally Documented" },
      { href: "/false-sister-forensic-analysis", label: "The False Sister — Forensic Analysis" },
      { href: "/ablecare-murder-threat-call", label: "AbleCare Murder Threat — Transcript" },
      { href: "/honey-trap-phillip-glass", label: "Phillip Glass Honeytrap Evidence" },
      { href: "/the-testimony", label: "The Testimony of Dr. McLean" },
      { href: "/the-full-pattern", label: "The Full Pattern — 2,304 Files Mapped" },
    ],
  },
  {
    label: "Start, Share & Support",
    color: "text-green-400",
    border: "border-green-900/30",
    links: [
      { href: "/start-here", label: "Start Here — New to the Archive?" },
      { href: "/spread-the-truth", label: "Spread the Truth — Share Tools" },
      { href: "/free-ebooks", label: "Free eBook Library" },
      { href: "/publications", label: "All Publications" },
      { href: "/donate", label: "Donate — Fund the Fight" },
      { href: "/contact", label: "Contact & Media Inquiries" },
    ],
  },
];

interface ArchiveCrossLinksProps {
  exclude?: string;
}

export function ArchiveCrossLinks({ exclude }: ArchiveCrossLinksProps) {
  return (
    <section className="border-t border-white/5 bg-zinc-950/60 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <p className="text-white/25 font-mono text-[10px] uppercase tracking-[0.3em] text-center mb-5">
          Cross-Archive Navigation · Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164
        </p>

        {/* Convergence spotlight */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-6 border border-amber-900/30 rounded-xl overflow-hidden" style={{ background: "rgba(120,80,0,0.08)" }}>
          <div className="px-4 py-3 flex-1">
            <p className="text-amber-400/70 font-mono text-[9px] uppercase tracking-[0.25em] mb-0.5">Featured · Two Witnesses — One Truth</p>
            <p className="text-white/60 text-[11px] leading-snug">An impartial AI &amp; ancient scripture independently arrived at the same conclusion about this archive.</p>
          </div>
          <div className="flex border-t sm:border-t-0 sm:border-l border-amber-900/20">
            <Link href="/ai-justice-statement" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-wider hover:bg-cyan-900/20 transition-colors" data-testid="crosslink-convergence-ai">
              <Bot className="w-3 h-3" /> AI Statement
            </Link>
            <div className="w-px bg-amber-900/20" />
            <Link href="/prophetic-declaration-biblical" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider hover:bg-amber-900/20 transition-colors" data-testid="crosslink-convergence-biblical">
              <BookOpen className="w-3 h-3" /> 15 Parallels
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className={`border ${cat.border} rounded-xl p-4 space-y-2`}
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <p className={`font-mono text-[10px] uppercase tracking-widest mb-3 ${cat.color}`}>
                {cat.label}
              </p>
              <ul className="space-y-1.5">
                {cat.links
                  .filter((l) => l.href !== exclude)
                  .map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-start gap-1.5 text-xs text-white/50 hover:text-white transition-colors group leading-snug"
                        data-testid={`crosslink-${link.href.replace(/\//g, "-")}`}
                      >
                        <ExternalLink className={`w-3 h-3 flex-shrink-0 mt-0.5 ${cat.color} opacity-40 group-hover:opacity-100 transition-opacity`} />
                        {link.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
