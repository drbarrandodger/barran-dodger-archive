import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Flame, Share2, BookOpen, Twitter, Facebook, Link2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { slugFromUrl } from "@/components/DownloadCounter";
import { queryClient } from "@/lib/queryClient";

import coverCosmicScroll from "@/assets/images/cover-cosmic-scroll.png";
import coverDigitalOppression from "@/assets/images/cover-digital-oppression.png";
import coverCrimesHumanity from "@/assets/images/cover-crimes-against-humanity.png";
import coverMasterCommand from "@/assets/images/cover-master-command.png";
import coverMasterEvidenceRegister from "@/assets/images/cover-master-evidence-register.png";
import coverForensicFramework from "@/assets/images/cover-forensic-framework-unspoken-mandate.png";
import coverManAustraliaErased from "@/assets/images/cover-man-australia-erased.png";
import coverDeclarationSovereignty from "@/assets/images/cover-declaration-of-sovereignty.png";
import coverWhistleblowerTorture from "@/assets/images/cover-whistleblower-torture-dossier.png";
import coverUntouchable from "@/assets/images/cover-untouchable.png";
import coverComprehensiveCase from "@/assets/images/cover-comprehensive-case-persecution.png";
import coverEvidenceSummary from "@/assets/images/cover-evidence-summary.png";
import coverChosenOneEnough from "@/assets/images/cover-chosen-ones-enough-is-enough.png";
import coverGospelEnlivenChain from "@/assets/images/cover-gospel-enliven-chain.png";
import coverEnlivenChainComplete from "@/assets/images/cover-enliven-chain-complete-archive.png";
import coverUnhcrIcc from "@/assets/images/cover-unhcr-icc-evidence-package.png";
import coverMasterForensicReport from "@/assets/images/cover-master-forensic-report.png";
import coverWitnessResonantia from "@/assets/images/cover-witness-resonantia-eternalis.png";

const COVER_MAP: Record<string, string> = {
  "cosmic-scroll-of-ten": coverCosmicScroll,
  "digital-oppression-100000-word-essay": coverDigitalOppression,
  "crimes-against-humanity-final-demand": coverCrimesHumanity,
  "universal-master-command-ai-analysis": coverMasterCommand,
  "master-evidence-register": coverMasterEvidenceRegister,
  "master-evidence-register-v3": coverMasterEvidenceRegister,
  "forensic-framework-unspoken-mandate": coverForensicFramework,
  "the-man-australia-tried-to-erase": coverManAustraliaErased,
  "declaration-of-sovereignty": coverDeclarationSovereignty,
  "official-whistleblower-torture-dossier-dr-richard-william-mclean": coverWhistleblowerTorture,
  "untouchable": coverUntouchable,
  "comprehensive-case-persecution": coverComprehensiveCase,
  "evidence-summary": coverEvidenceSummary,
  "chosen-ones-enough-is-enough": coverChosenOneEnough,
  "gospel-enliven-chain": coverGospelEnlivenChain,
  "enliven-chain-complete-archive": coverEnlivenChainComplete,
  "unhcr-icc-evidence-package": coverUnhcrIcc,
  "master-forensic-report": coverMasterForensicReport,
  "witness-resonantia-eternalis": coverWitnessResonantia,
};

const SIGNIFICANCE_MAP: Record<string, string> = {
  "cosmic-scroll-of-ten": "Sacred scripture born from the crucible of clinical death and institutional persecution — ten questions introducing Emotophysics and Scrollgate Engineering that challenge the foundations of materialist science and institutional governance. Written by a man verified dead at 2.87% survival probability who returned with knowledge that no academic framework had yet named. The most widely downloaded document across this entire archive.",
  "digital-oppression-100000-word-essay": "The single most comprehensive forensic synthesis in the archive. One hundred thousand words documenting Pegasus-class spyware deployment against an Australian whistleblower, a financial persecution architecture estimated at $42.5M–$123M in damages, and the coordinated digital weaponisation of 25+ government agencies. Meets evidentiary standards for international tribunal submission.",
  "crimes-against-humanity-final-demand": "A formal legal demand addressed to Australia's six most powerful institutional figures — the Prime Minister, Attorney-General, ASIO Director-General, AFP Commissioner, NACC Commissioner, and AHRC — setting an explicit 14-day deadline for restitution proceedings. Each allegation maps directly to Rome Statute Article 7. Any recipient who failed to respond accepted constructive notice of crimes against humanity.",
  "the-man-australia-tried-to-erase": "The document that has crossed more borders than any other in the archive. A concise, accessible synthesis of 35 years of institutional persecution presented in terms that resonate with anyone who has been gaslit, suppressed, or disappeared by the systems built to protect them. Downloaded from six continents. Shared person to person.",
  "universal-master-command-ai-analysis": "The meta-document that validates every other document. By publishing the exact bias-immune methodology used for all AI analyses across this archive, this protocol guarantees that no human bias, institutional loyalty, or political consideration influenced the forensic findings. It is, in effect, the chain of custody document for the entire archive's analytical integrity.",
  "master-evidence-register": "The definitive chronological index of all 2,301 government evidence files spanning 35 years — assembled for legal submissions, asylum applications, and international human rights correspondence. A register of this scope does not happen by accident. It happens when someone understands, long before the world does, that the evidence itself is the weapon and must be maintained with archival precision.",
  "master-evidence-register-v3": "The definitive chronological index of all 2,301 government evidence files spanning 35 years — assembled for legal submissions, asylum applications, and international human rights correspondence. A register of this scope does not happen by accident. It happens when someone understands, long before the world does, that the evidence itself is the weapon and must be maintained with archival precision.",
  "forensic-framework-unspoken-mandate": "The forensic command that reverse-engineers the hidden operational directive from 2,138 official government documents across 8 agencies using only their own literature. Seven technique categories — from Procedural Weaponisation through Inter-Agency Coordination Signatures — form a cross-reference matrix constituting one of the most comprehensive forensic methodologies produced in the context of an individual's engagement with the Australian administrative state.",
  "official-whistleblower-torture-dossier-dr-richard-william-mclean": "A clinical forensic account of 14 involuntary psychiatric hospitalisations deployed as instruments of suppression, financial strangulation across NDIA and ComCare systems, and the documented death threat from a credentialled ex-SAS operative embedded as an NDIS support coordinator. Submitted to UN bodies as evidence of state-sanctioned torture under the Convention Against Torture.",
  "the-declaration-of-sovereignty-of-dr--richard-william-mcle-1769135376793": "A foundational assertion of legal, moral, ethical and spiritual sovereignty by a man who exhausted every domestic remedy across 35 years and 8 agencies without result. The document that formally removed consent from the institutional framework that had governed his life through suppression — and asserted standing before international bodies instead.",
};

const DOWNLOAD_URL_MAP: Record<string, string> = {
  "cosmic-scroll-of-ten": "/documents/cosmic_scroll_of_ten.pdf",
  "digital-oppression-100000-word-essay": "/documents/digital_oppression_100000_word_essay.pdf",
  "crimes-against-humanity-final-demand": "/documents/crimes_against_humanity_final_demand.pdf",
  "the-man-australia-tried-to-erase": "/THE_MAN_AUSTRALIA_TRIED_TO_ERASE.pdf",
  "universal-master-command-ai-analysis": "/documents/universal_master_command_ai_analysis.pdf",
  "master-evidence-register": "/documents/master-evidence-register.txt",
  "master-evidence-register-v3": "/documents/master-evidence-register-v3.txt",
  "forensic-framework-unspoken-mandate": "/documents/forensic-framework-unspoken-mandate.pdf",
  "official-whistleblower-torture-dossier-dr-richard-william-mclean": "/documents/official_whistleblower_torture_dossier.pdf",
};

const PAGE_LINK_MAP: Record<string, string> = {
  "master-evidence-register": "/master-evidence-register",
  "master-evidence-register-v3": "/master-evidence-register",
  "forensic-framework-unspoken-mandate": "/forensic-framework-unspoken-mandate",
  "the-man-australia-tried-to-erase": "/start-here",
};

const RANK_COLORS = [
  "text-yellow-400 border-yellow-400/40 bg-yellow-400/10",
  "text-zinc-300 border-zinc-400/40 bg-zinc-400/10",
  "text-orange-400 border-orange-400/40 bg-orange-400/10",
  "text-cyan-400 border-cyan-400/30 bg-cyan-400/5",
  "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  "text-violet-400 border-violet-400/30 bg-violet-400/5",
  "text-rose-400 border-rose-400/30 bg-rose-400/5",
  "text-amber-400 border-amber-400/30 bg-amber-400/5",
  "text-sky-400 border-sky-400/30 bg-sky-400/5",
  "text-indigo-400 border-indigo-400/30 bg-indigo-400/5",
];

function getCover(slug: string): string {
  if (COVER_MAP[slug]) return COVER_MAP[slug];
  for (const key of Object.keys(COVER_MAP)) {
    if (slug.startsWith(key) || slug.includes(key)) return COVER_MAP[key];
  }
  return coverEvidenceSummary;
}

function getSignificance(slug: string, title: string): string {
  if (SIGNIFICANCE_MAP[slug]) return SIGNIFICANCE_MAP[slug];
  for (const key of Object.keys(SIGNIFICANCE_MAP)) {
    if (slug.startsWith(key) || slug.includes(key)) return SIGNIFICANCE_MAP[key];
  }
  return `This document has been independently downloaded ${""} times by readers across six continents — making it one of the most sought-after items in the entire Barran Dodger archive. Its reach reflects a global recognition of the significance of the evidence it contains. Every download is an act of witness.`;
}

function trackAndDownload(url: string) {
  const slug = slugFromUrl(url);
  fetch(`/api/downloads/${slug}/increment`, { method: 'POST' }).catch(() => {});
  queryClient.invalidateQueries({ queryKey: ['/api/analytics/top-all-time'] });
  queryClient.invalidateQueries({ queryKey: ['/api/downloads', slug] });
  const a = document.createElement('a');
  a.href = url;
  a.download = '';
  a.target = '_blank';
  a.click();
}

interface TopDoc {
  slug: string;
  title: string;
  count: number;
}

function LiveCounter({ count }: { count: number }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="font-black font-mono tabular-nums">{count.toLocaleString()}</span>
      <span className="text-zinc-400 text-xs font-normal">downloads</span>
    </span>
  );
}

function HeroCard({ doc, rank }: { doc: TopDoc; rank: number }) {
  const cover = getCover(doc.slug);
  const significance = getSignificance(doc.slug, doc.title);
  const downloadUrl = DOWNLOAD_URL_MAP[doc.slug];
  const pageLink = PAGE_LINK_MAP[doc.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative rounded-2xl overflow-hidden border-2 border-yellow-400/40 bg-gradient-to-br from-yellow-950/30 via-zinc-950 to-black shadow-2xl shadow-yellow-500/10"
      data-testid="card-top-download-1"
    >
      {/* Full-width cover background */}
      <div className="absolute inset-0">
        <img src={cover} alt="" className="w-full h-full object-cover object-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-6 p-6 md:p-8">
        {/* Cover thumbnail */}
        <div className="flex-shrink-0 mx-auto md:mx-0 relative">
          <div className="absolute -top-3 -left-3 z-20">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-yellow-400 text-black font-black text-lg shadow-lg">1</span>
          </div>
          <img src={cover} alt={doc.title} className="w-36 md:w-52 rounded-xl shadow-2xl shadow-yellow-500/30 border-2 border-yellow-400/30" />
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            <Badge className="bg-yellow-400 text-black font-black text-xs px-3">🔥 #1 Most Downloaded — All Time</Badge>
            <Badge variant="outline" className="border-yellow-400/40 text-yellow-400 text-xs">Live Rank</Badge>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-black text-white leading-tight">{doc.title}</h3>
          <div className="text-yellow-400 text-lg font-bold">
            <LiveCounter count={doc.count} />
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">{significance}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            {downloadUrl && (
              <button
                onClick={() => trackAndDownload(downloadUrl)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors text-sm"
                data-testid="btn-download-top1"
              >
                <Download className="h-4 w-4" /> Download Free
              </button>
            )}
            {pageLink && (
              <a href={pageLink} className="inline-flex items-center gap-2 px-4 py-2.5 border border-yellow-400/30 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-950/40 transition-colors text-sm" data-testid="link-page-top1">
                <ExternalLink className="h-4 w-4" /> View Page
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DocCard({ doc, rank }: { doc: TopDoc; rank: number }) {
  const cover = getCover(doc.slug);
  const significance = getSignificance(doc.slug, doc.title);
  const downloadUrl = DOWNLOAD_URL_MAP[doc.slug];
  const pageLink = PAGE_LINK_MAP[doc.slug];
  const colorClass = RANK_COLORS[rank - 1] || RANK_COLORS[9];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: rank * 0.07 }}
      className="rounded-xl border border-white/8 bg-zinc-950 hover:border-white/15 transition-colors flex flex-col overflow-hidden"
      data-testid={`card-top-download-${rank}`}
    >
      {/* Full-width cover image */}
      <div className="relative w-full aspect-[3/2] overflow-hidden">
        <img src={cover} alt={doc.title} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        {/* Rank badge */}
        <div className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black border ${colorClass}`}>
          {rank}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 space-y-2">
        <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">{doc.title}</h4>
        <div className={`text-sm font-bold ${colorClass.split(' ')[0]}`}>
          <LiveCounter count={doc.count} />
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 flex-1">{significance.slice(0, 180)}…</p>
        <div className="flex gap-2 pt-1">
          {downloadUrl && (
            <button
              onClick={() => trackAndDownload(downloadUrl)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white/8 hover:bg-white/12 text-white text-xs font-semibold rounded-lg transition-colors"
              data-testid={`btn-download-top${rank}`}
            >
              <Download className="h-3 w-3" /> Download
            </button>
          )}
          {pageLink && (
            <a
              href={pageLink}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-white/10 text-zinc-400 text-xs font-semibold rounded-lg hover:border-white/20 hover:text-white transition-colors"
              data-testid={`link-page-top${rank}`}
            >
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Social Share Bar ────────────────────────────────────────────
function SocialShareBar({ url = "https://barrandodger.com", text = "" }: { url?: string; text?: string }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = encodeURIComponent(url);
  const shareText = encodeURIComponent(text || "395,000+ downloads across 6 continents. The archive that changed everything. #BarranDodger");

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center" data-testid="social-share-bar">
      <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2]/15 border border-[#1DA1F2]/30 text-[#1DA1F2] text-sm font-semibold hover:bg-[#1DA1F2]/25 transition-colors"
        data-testid="btn-share-twitter">
        <Twitter className="h-4 w-4" /> Share on X
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2]/15 border border-[#1877F2]/30 text-[#1877F2] text-sm font-semibold hover:bg-[#1877F2]/25 transition-colors"
        data-testid="btn-share-facebook">
        <Facebook className="h-4 w-4" /> Share on Facebook
      </a>
      <button onClick={copyLink}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/8 border border-white/15 text-zinc-300 text-sm font-semibold hover:bg-white/12 transition-colors"
        data-testid="btn-copy-link">
        <Link2 className="h-4 w-4" /> {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
}

// ── Top 10 Section ──────────────────────────────────────────────
export function TopDownloadsSection() {
  const { data, isLoading } = useQuery<{ data: TopDoc[]; since: string }>({
    queryKey: ['/api/analytics/top-all-time'],
    queryFn: () => fetch('/api/analytics/top-all-time?limit=10').then(r => r.json()),
    refetchInterval: 30000,
    staleTime: 25000,
  });

  const docs = data?.data ?? [];
  const top = docs[0];
  const rest = docs.slice(1);

  return (
    <section className="py-16 px-4 bg-black border-t border-white/5" data-testid="section-top-downloads">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="outline" className="border-yellow-400/40 text-yellow-400 mb-2 px-4 py-1 text-xs uppercase tracking-widest">
            <Flame className="h-3 w-3 mr-1.5 inline" />Live Rankings — All Time
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-white">Top 10 Most Downloaded Documents</h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">Rankings update automatically with every download. Every count is a live server-side figure — never estimated, never rounded. Each document is free.</p>
        </div>

        {isLoading ? (
          <div className="grid gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-40 rounded-xl bg-zinc-900 animate-pulse" />
            ))}
          </div>
        ) : (
          <>
            {top && <HeroCard doc={top} rank={1} />}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((doc, i) => (
                <DocCard key={doc.slug} doc={doc} rank={i + 2} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ── Free Downloads & eBooks Panel ───────────────────────────────
export function FreeDownloadsPanel() {
  return (
    <section className="py-14 px-4 bg-zinc-950 border-t border-white/5" data-testid="section-free-downloads-panel">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-zinc-950 to-black p-8 flex flex-col md:flex-row gap-6 items-center"
        >
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-900/40 border border-emerald-500/30 flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-emerald-400" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <Badge variant="outline" className="border-emerald-500/40 text-emerald-400 mb-2 px-3 py-0.5 text-xs uppercase tracking-widest">Free Library</Badge>
            <h3 className="text-2xl font-serif font-black text-white mb-2">Free eBooks & Documents</h3>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-xl">
              The complete free library — every publication, forensic analysis, prophetic text, and legal submission in this archive is free to read, download, and share. No registration. No paywall. Truth should never have a price tag.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="/free-ebooks"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors text-sm whitespace-nowrap"
              data-testid="link-free-ebooks-panel"
            >
              <BookOpen className="h-4 w-4" /> Browse Free Library →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Detonation ZIP Panel ────────────────────────────────────────
export function DetonationPanel() {
  const { data: pdfCountData } = useQuery<{ count: number }>({
    queryKey: ['/api/archive/pdf-count'],
    queryFn: () => fetch('/api/archive/pdf-count').then(r => r.json()),
    staleTime: 60000,
  });
  const { data: zipSizeData } = useQuery<{ label: string }>({
    queryKey: ['/api/archive/zip-size'],
    queryFn: () => fetch('/api/archive/zip-size').then(r => r.json()),
    staleTime: 60000,
  });

  const pdfCount = pdfCountData?.count ?? "500+";
  const zipSize = zipSizeData?.label ?? "~1.4GB";

  const handleDetonate = () => {
    const slug = "divine-archive-detonation";
    fetch(`/api/downloads/${slug}/increment`, { method: 'POST' }).catch(() => {});
    window.open('/api/archive/divine-download', '_blank');
  };

  return (
    <section className="py-14 px-4 bg-black border-t border-white/5" data-testid="section-detonation-panel">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border-2 border-red-500/40 bg-gradient-to-br from-red-950/30 via-zinc-950 to-black p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at center, hsl(0,80%,40%) 0%, transparent 65%)' }} />
          <div className="relative z-10 space-y-4">
            <Badge variant="outline" className="border-red-500/40 text-red-400 mb-2 px-4 py-1 text-xs uppercase tracking-widest">Archive Detonation</Badge>
            <h3 className="text-3xl md:text-4xl font-serif font-black text-white">
              Download the <span className="text-red-400">Entire Archive</span>
            </h3>
            <p className="text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Every PDF on this site — forensic analyses, legal submissions, prophetic texts, evidence packages, government document collections — compressed into a single ZIP file. {pdfCount} documents. {zipSize} of evidence they never expected to become public.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-2">
              {[
                { label: "Documents", value: String(pdfCount) },
                { label: "Archive Size", value: zipSize },
                { label: "Agencies Documented", value: "8+" },
                { label: "Years of Evidence", value: "35" },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl font-black text-red-400 font-mono">{stat.value}</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={handleDetonate}
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-black rounded-xl transition-colors text-lg shadow-lg shadow-red-900/30"
                data-testid="btn-detonate-archive"
              >
                <Download className="h-5 w-5" /> DETONATE THE ARCHIVE — FREE ZIP
              </button>
            </div>
            <p className="text-xs text-zinc-600 mt-2">Free download · No registration · Share freely · ABN 78 833 496 164</p>
          </div>
        </motion.div>

        {/* Social Share */}
        <div className="text-center space-y-3">
          <p className="text-xs text-zinc-500 uppercase tracking-widest">
            <Share2 className="h-3 w-3 inline mr-1" />Share the archive
          </p>
          <SocialShareBar
            url="https://barrandodger.com"
            text="395,000+ downloads across 6 continents. The most comprehensively documented case of institutional persecution in Australian history — all documents free: barrandodger.com"
          />
        </div>
      </div>
    </section>
  );
}
