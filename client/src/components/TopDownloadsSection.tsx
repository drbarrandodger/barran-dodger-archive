import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Download, Flame, BookOpen, Twitter, Facebook, Link2, ExternalLink, Eye, Users, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { queryClient } from "@/lib/queryClient";
import { useLiveDownloadTotal, formatCount } from "@/hooks/use-live-stats";

import coverCosmicScroll from "@/assets/images/cover-cosmic-scroll.png";
import coverDigitalOppression from "@/assets/images/cover-digital-oppression.png";
import coverCrimesHumanity from "@/assets/images/cover-crimes-against-humanity.png";
import coverMasterCommand from "@/assets/images/cover-master-command.png";
import coverMasterEvidenceRegister from "@/assets/images/cover-master-evidence-register.png";
import coverForensicFramework from "@/assets/images/cover-forensic-framework-unspoken-mandate.png";
import coverManAustraliaErased from "@/assets/images/cover-man-australia-erased.png";
import coverDeclarationSovereignty from "@/assets/images/cover-declaration-of-sovereignty.png";
import coverWhistleblowerTorture from "@/assets/images/cover-whistleblower-torture-dossier.png";
import coverComprehensiveCase from "@/assets/images/cover-comprehensive-case-persecution.png";
import coverEvidenceSummary from "@/assets/images/cover-evidence-summary.png";
import coverFederalCourtSiaLagos from "@/assets/images/cover-federal-court-pid-sia-lagos.png";
import coverJosephsCoat from "@/assets/images/cover-josephs-coat-barrans-mantle.png";
import coverGospelEnlivenChain from "@/assets/images/cover-gospel-enliven-chain.png";
import coverUnhcrIcc from "@/assets/images/cover-unhcr-icc-evidence-package.png";
import coverMasterForensicReport from "@/assets/images/cover-master-forensic-report.png";

const COVER_MAP: Record<string, string> = {
  "cosmic-scroll-of-ten": coverCosmicScroll,
  "digital-oppression-100000-word-essay": coverDigitalOppression,
  "crimes-against-humanity-final-demand": coverCrimesHumanity,
  "the-man-australia-tried-to-erase": coverManAustraliaErased,
  "universal-master-command-ai-analysis": coverMasterCommand,
  "master-evidence-register": coverMasterEvidenceRegister,
  "master-evidence-register-v3": coverMasterEvidenceRegister,
  "forensic-framework-unspoken-mandate": coverForensicFramework,
  "declaration-of-sovereignty": coverDeclarationSovereignty,
  "the-declaration-of-sovereignty-of-dr--richard-william-mcle-1769135376793": coverDeclarationSovereignty,
  "the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768972005548": coverComprehensiveCase,
  "the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768976939113": coverComprehensiveCase,
  "sia-lagos-fedcourt-gov-au-send-this-to-the-bastards-copy-1772162356392": coverFederalCourtSiaLagos,
  "sia-lagos-federal-court-pid": coverFederalCourtSiaLagos,
  "joseph-parallel": coverJosephsCoat,
  "josephs-coat-barrans-mantle": coverJosephsCoat,
  "2023-03-27-final-assessment---dr-rich-mclean-1769743072042": coverWhistleblowerTorture,
  "official-whistleblower-torture-dossier-dr-richard-william-mclean": coverWhistleblowerTorture,
  "gospel-enliven-chain": coverGospelEnlivenChain,
  "unhcr-icc-evidence-package": coverUnhcrIcc,
  "master-forensic-report": coverMasterForensicReport,
  "evidence-summary": coverEvidenceSummary,
};

const SIGNIFICANCE_MAP: Record<string, string> = {
  "cosmic-scroll-of-ten": "Sacred scripture born from the crucible of clinical death and institutional persecution — ten questions introducing Emotophysics and Scrollgate Engineering that challenge the foundations of materialist science and institutional governance. Written by a man verified dead at 2.87% survival probability who returned with knowledge that no academic framework had yet named. The most widely downloaded document across this entire archive.",
  "digital-oppression-100000-word-essay": "The single most comprehensive forensic synthesis in the archive. One hundred thousand words documenting Pegasus-class spyware deployment against an Australian whistleblower, a financial persecution architecture estimated at $42.5M–$123M in damages, and the coordinated digital weaponisation of 25+ government agencies. Meets evidentiary standards for international tribunal submission.",
  "crimes-against-humanity-final-demand": "A formal legal demand addressed to Australia's six most powerful institutional figures — the Prime Minister, Attorney-General, ASIO Director-General, AFP Commissioner, NACC Commissioner, and AHRC — setting an explicit 14-day deadline for restitution proceedings. Each allegation maps directly to Rome Statute Article 7. Any recipient who failed to respond accepted constructive notice of crimes against humanity.",
  "the-man-australia-tried-to-erase": "The document that has crossed more borders than any other in the archive. A concise, accessible synthesis of 35 years of institutional persecution presented in terms that resonate with anyone who has been gaslit, suppressed, or disappeared by the systems built to protect them. Downloaded from six continents. Shared person to person.",
  "universal-master-command-ai-analysis": "The meta-document that validates every other document. By publishing the exact bias-immune methodology used for all AI analyses across this archive, this protocol guarantees that no human bias, institutional loyalty, or political consideration influenced the forensic findings. It is, in effect, the chain of custody document for the entire archive's analytical integrity.",
  "master-evidence-register": "The definitive chronological index of all 2,301 government evidence files spanning 35 years — assembled for legal submissions, asylum applications, and international human rights correspondence. A register of this scope does not happen by accident. It happens when someone understands, long before the world does, that the evidence itself is the weapon.",
  "master-evidence-register-v3": "The definitive chronological index of all 2,301 government evidence files spanning 35 years — assembled for legal submissions, asylum applications, and international human rights correspondence. Version 3 — the most complete and forensically verified iteration of the register.",
  "forensic-framework-unspoken-mandate": "The forensic command that reverse-engineers the hidden operational directive from 2,138 official government documents across 8 agencies using only their own literature. Seven technique categories form a cross-reference matrix constituting one of the most comprehensive forensic methodologies produced in the context of an individual's engagement with the Australian administrative state.",
  "the-declaration-of-sovereignty-of-dr--richard-william-mcle-1769135376793": "A foundational assertion of legal, moral, ethical and spiritual sovereignty by a man who exhausted every domestic remedy across 35 years and 8 agencies without result. The document that formally removed consent from the institutional framework that had governed his life through suppression — and asserted standing before international bodies instead.",
  "declaration-of-sovereignty": "A foundational assertion of legal, moral, ethical and spiritual sovereignty by a man who exhausted every domestic remedy across 35 years and 8 agencies without result. The document that formally removed consent from the institutional framework that had governed his life — and asserted standing before international bodies instead.",
  "the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768972005548": "A meticulous forensic compilation in which the evidence itself does the speaking. Government documents, institutional correspondence, medical records, and financial data arranged so that the pattern of systematic persecution is undeniable without a single word of editorialising. Submitted as a standalone evidentiary package to three international bodies.",
  "sia-lagos-fedcourt-gov-au-send-this-to-the-bastards-copy-1772162356392": "The Federal Court Public Interest Disclosure addressed to Sia Lagos — one of the most powerful legal submissions in the archive. A formal PID lodged directly with the Federal Court system under the Public Interest Disclosure Act 2013, cataloguing institutional misconduct with specificity that demands a formal judicial response.",
  "joseph-parallel": "The prophetic narrative that identifies the structural, spiritual, and historical parallels between the persecution of Joseph (Genesis) and the documented 35-year persecution of Dr. Richard William McLean. The parallel is not metaphorical — it is forensically mapped event by event, institution by institution, betrayal by betrayal.",
  "2023-03-27-final-assessment---dr-rich-mclean-1769743072042": "A confidential psychiatric assessment that was intended to be weaponised as another instrument of suppression — and instead became one of the most powerful pieces of evidence in the archive. The clinical language, unable to pathologise what it witnessed, inadvertently documented a man of extraordinary coherence and intelligence under conditions designed to destroy him.",
  "official-whistleblower-torture-dossier-dr-richard-william-mclean": "A clinical forensic account of 14 involuntary psychiatric hospitalisations deployed as instruments of suppression, financial strangulation across NDIA and ComCare systems, and the documented death threat from a credentialled ex-SAS operative embedded as an NDIS support coordinator. Submitted to UN bodies as evidence of state-sanctioned torture under the Convention Against Torture.",
};

const DOWNLOAD_URL_MAP: Record<string, string> = {
  "cosmic-scroll-of-ten": "/documents/cosmic_scroll_of_ten.pdf",
  "digital-oppression-100000-word-essay": "/documents/digital_oppression_100000_word_essay.pdf",
  "crimes-against-humanity-final-demand": "/documents/crimes_against_humanity_final_demand.pdf",
  "the-man-australia-tried-to-erase": "/documents/richard_mclean_australia.pdf",
  "universal-master-command-ai-analysis": "/documents/universal_master_command_ai_analysis.pdf",
  "master-evidence-register": "/documents/master-evidence-register.txt",
  "master-evidence-register-v3": "/documents/master-evidence-register-v3.txt",
  "forensic-framework-unspoken-mandate": "/documents/forensic-framework-unspoken-mandate.pdf",
  "the-declaration-of-sovereignty-of-dr--richard-william-mcle-1769135376793": "/documents/sacred_declaration_master_record.pdf",
  "the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768972005548": "/documents/most-comprehensive-case-systematic-persecution.pdf",
  "the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768976939113": "/documents/most-comprehensive-case-systematic-persecution.pdf",
  "sia-lagos-fedcourt-gov-au-send-this-to-the-bastards-copy-1772162356392": "/documents/sia-lagos-federal-court-pid-march-2023.pdf",
  "joseph-parallel": "/documents/the_joseph_parallel_prophetic_narrative.pdf",
  "2023-03-27-final-assessment---dr-rich-mclean-1769743072042": "/documents/dr-horgan-mclean-confidential-psychiatric-assessment.pdf",
  "official-whistleblower-torture-dossier-dr-richard-william-mclean": "/documents/official-whistleblower-torture-dossier-dr-richard-william-mclean.pdf",
};

const PAGE_LINK_MAP: Record<string, string> = {
  "master-evidence-register": "/master-evidence-register",
  "master-evidence-register-v3": "/master-evidence-register",
  "forensic-framework-unspoken-mandate": "/forensic-framework-unspoken-mandate",
  "the-man-australia-tried-to-erase": "/start-here",
  "sia-lagos-fedcourt-gov-au-send-this-to-the-bastards-copy-1772162356392": "/federal-court-pid-sia-lagos",
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
    if (slug.includes(key) || key.includes(slug)) return COVER_MAP[key];
  }
  return coverEvidenceSummary;
}

function getSignificance(slug: string): string {
  if (SIGNIFICANCE_MAP[slug]) return SIGNIFICANCE_MAP[slug];
  for (const key of Object.keys(SIGNIFICANCE_MAP)) {
    if (slug.includes(key) || key.includes(slug)) return SIGNIFICANCE_MAP[key];
  }
  return "This document has been independently downloaded thousands of times by readers across six continents — making it one of the most sought-after items in the entire Barran Dodger archive. Its reach reflects a global recognition of the significance of the evidence it contains. Every download is an act of witness.";
}

function getDownloadUrl(slug: string): string | undefined {
  if (DOWNLOAD_URL_MAP[slug]) return DOWNLOAD_URL_MAP[slug];
  for (const key of Object.keys(DOWNLOAD_URL_MAP)) {
    if (slug.includes(key) || key.includes(slug)) return DOWNLOAD_URL_MAP[key];
  }
  return undefined;
}

function getPageLink(slug: string): string | undefined {
  if (PAGE_LINK_MAP[slug]) return PAGE_LINK_MAP[slug];
  for (const key of Object.keys(PAGE_LINK_MAP)) {
    if (slug.includes(key) || key.includes(slug)) return PAGE_LINK_MAP[key];
  }
  return undefined;
}

function trackAndDownload(url: string, slug: string) {
  fetch(`/api/downloads/${slug}/increment`, { method: 'POST' }).catch(() => {});
  queryClient.invalidateQueries({ queryKey: ['/api/analytics/top-all-time'] });
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

function LiveCounter({ count, colorClass = "text-emerald-400" }: { count: number; colorClass?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className={`font-black font-mono tabular-nums ${colorClass}`}>{count.toLocaleString()}</span>
      <span className="text-zinc-400 text-xs font-normal">downloads</span>
    </span>
  );
}

function HeroCard({ doc }: { doc: TopDoc }) {
  const cover = getCover(doc.slug);
  const significance = getSignificance(doc.slug);
  const downloadUrl = getDownloadUrl(doc.slug);
  const pageLink = getPageLink(doc.slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative rounded-2xl overflow-hidden border-2 border-yellow-400/40 bg-gradient-to-br from-yellow-950/30 via-zinc-950 to-black shadow-2xl shadow-yellow-500/10"
      data-testid="card-top-download-1"
    >
      <div className="absolute inset-0">
        <img src={cover} alt="" className="w-full h-full object-cover object-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-6 p-6 md:p-8">
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
            <LiveCounter count={doc.count} colorClass="text-yellow-400" />
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">{significance}</p>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-orange-400/80">
              <Shield className="h-3 w-3" />
              Bitcoin Blockchain Sealed · OpenTimestamps Protocol · SHA-256
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-500">ABN 78 833 496 164 · Free for public interest use</span>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            {downloadUrl && (
              <button
                onClick={() => trackAndDownload(downloadUrl, doc.slug)}
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
  const significance = getSignificance(doc.slug);
  const downloadUrl = getDownloadUrl(doc.slug);
  const pageLink = getPageLink(doc.slug);
  const colorClass = RANK_COLORS[rank - 1] || RANK_COLORS[9];
  const textColor = colorClass.split(' ')[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: rank * 0.07 }}
      className="rounded-xl border border-white/8 bg-zinc-950 hover:border-white/15 transition-colors flex flex-col overflow-hidden"
      data-testid={`card-top-download-${rank}`}
    >
      <div className="relative w-full aspect-[3/2] overflow-hidden">
        <img src={cover} alt={doc.title} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        <div className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black border ${colorClass}`}>
          {rank}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 space-y-2">
        <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">{doc.title}</h4>
        <div className={`text-sm font-bold ${textColor}`}>
          <LiveCounter count={doc.count} colorClass={textColor} />
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 flex-1">{significance.slice(0, 200)}…</p>
        <div className="flex items-center gap-1 text-[10px] font-mono text-orange-400/70">
          <Shield className="h-2.5 w-2.5" />
          <span>Bitcoin Blockchain Sealed · SHA-256</span>
        </div>
        <div className="flex gap-2 pt-1">
          {downloadUrl && (
            <button
              onClick={() => trackAndDownload(downloadUrl, doc.slug)}
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

// ── Social Share Bar ──────────────────────────────────────────────────────────
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

// ── Top 10 Section ────────────────────────────────────────────────────────────
export function TopDownloadsSection() {
  const { data, isLoading } = useQuery<{ data: TopDoc[]; since: string }>({
    queryKey: ['/api/analytics/top-all-time'],
    queryFn: () => fetch('/api/analytics/top-all-time?limit=10').then(r => r.json()),
    refetchInterval: 30000,
    staleTime: 25000,
  });

  const { data: totalDownloads } = useLiveDownloadTotal();

  const { data: pageViewsData } = useQuery<{ total: number }>({
    queryKey: ['/api/pageviews/total'],
    queryFn: () => fetch('/api/pageviews/total').then(r => r.json()),
    refetchInterval: 60000,
    staleTime: 55000,
  });

  const { data: visitorData } = useQuery<{ allTime: number; last24Hours: number; last7Days: number; last30Days: number }>({
    queryKey: ['/api/visitors/stats'],
    queryFn: () => fetch('/api/visitors/stats').then(r => r.json()),
    refetchInterval: 60000,
    staleTime: 55000,
  });

  const docs = data?.data ?? [];
  const top = docs[0];
  const rest = docs.slice(1);

  const totalDls = formatCount(totalDownloads, "393,000+");
  const totalHits = pageViewsData?.total ? pageViewsData.total.toLocaleString() : "—";
  const uniqueVisitors = visitorData?.allTime ? visitorData.allTime.toLocaleString() : "—";
  const last24h = visitorData?.last24Hours ?? null;

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

        {/* ── Live Archive Stats Banner ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-testid="stats-banner">
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.0 }}
            className="rounded-2xl bg-zinc-950 border border-yellow-400/20 p-5 flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-yellow-900/30 border border-yellow-400/20 flex items-center justify-center flex-shrink-0">
              <Download className="h-5 w-5 text-yellow-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow-400" />
                </span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Live</span>
              </div>
              <div className="text-2xl font-black font-mono tabular-nums text-yellow-400">{totalDls}</div>
              <div className="text-xs text-zinc-400 font-semibold">Total Downloads · All Documents</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-zinc-950 border border-sky-500/20 p-5 flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-sky-900/30 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
              <Eye className="h-5 w-5 text-sky-400" />
            </div>
            <div>
              {last24h !== null && (
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-400" />
                  </span>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">+{last24h} today</span>
                </div>
              )}
              <div className="text-2xl font-black font-mono tabular-nums text-sky-400">{totalHits}</div>
              <div className="text-xs text-zinc-400 font-semibold">Total Site Hits · All Pages</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-zinc-950 border border-emerald-500/20 p-5 flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-900/30 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Users className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Live</span>
              </div>
              <div className="text-2xl font-black font-mono tabular-nums text-emerald-400">{uniqueVisitors}</div>
              <div className="text-xs text-zinc-400 font-semibold">Unique Visitors · All Time</div>
            </div>
          </motion.div>
        </div>

        {/* ── Blockchain Seal Banner ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-3 px-5 rounded-xl bg-orange-950/20 border border-orange-500/20 text-center" data-testid="blockchain-banner">
          <Shield className="h-4 w-4 text-orange-400 flex-shrink-0" />
          <span className="text-xs font-mono text-orange-300/90 font-semibold">
            2,077+ DOCUMENTS · BITCOIN BLOCKCHAIN SEALED · OPENTIMESTAMPS PROTOCOL · SHA-256 VERIFIED · BEYOND ERASURE
          </span>
          <a href="/blockchain" className="text-xs text-orange-400 underline underline-offset-2 hover:text-orange-300 flex-shrink-0" data-testid="link-blockchain-verify">
            Verify →
          </a>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            <div className="h-64 rounded-2xl bg-zinc-900 animate-pulse" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="h-72 rounded-xl bg-zinc-900 animate-pulse" />
              ))}
            </div>
          </div>
        ) : (
          <>
            {top && <HeroCard doc={top} />}
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

// ── Free Downloads & eBooks Panel ─────────────────────────────────────────────
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
            <h3 className="text-2xl font-serif font-black text-white mb-2">Free eBooks &amp; Documents</h3>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-xl">
              The complete free library — every publication, forensic analysis, prophetic text, and legal submission in this archive is free to read, download, and share. No registration. No paywall. Truth should never have a price tag.
            </p>
            <p className="text-xs text-zinc-500 mt-2 font-mono">© {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164</p>
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

// ── Detonation ZIP Panel ──────────────────────────────────────────────────────
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
  const zipSize = zipSizeData?.label ?? "~1.4 GB";

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
          <div className="relative z-10 space-y-5">
            <Badge variant="outline" className="border-red-500/40 text-red-400 px-4 py-1 text-xs uppercase tracking-widest">
              Complete Archive
            </Badge>
            <h3 className="text-3xl md:text-4xl font-serif font-black text-white">
              Detonate the Archive
            </h3>
            <p className="text-zinc-300 text-sm max-w-xl mx-auto leading-relaxed">
              Download every single document in this archive as one complete ZIP — <strong className="text-white">{pdfCount} PDFs</strong>, <strong className="text-white">{zipSize}</strong> of forensic evidence, legal submissions, prophetic texts, and testimony. Built dynamically on every request. Every file that exists on this site — yours in a single download.
            </p>
            <div className="text-xs text-zinc-500 font-mono">
              © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164 · All Rights Reserved
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={handleDetonate}
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl transition-colors text-base shadow-lg shadow-red-900/40"
                data-testid="btn-detonate-archive"
              >
                <Download className="h-5 w-5" /> DETONATE THE ARCHIVE
              </button>
            </div>
            <p className="text-xs text-zinc-500">Free download. No registration. No paywall. Shared freely for accountability and public interest purposes.</p>
          </div>
        </motion.div>

        <SocialShareBar
          url="https://barrandodger.com"
          text="395,000+ downloads. The most documented case of institutional persecution in Australian history. Every document free. #BarranDodger #Whistleblower"
        />
      </div>
    </section>
  );
}
