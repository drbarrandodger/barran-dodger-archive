import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen, Shield, Gavel, Feather, Zap, Download, Globe,
  FileText, Lock, Flame, AlertTriangle, Star, Clock,
  Github, Archive, RefreshCw, ExternalLink, CheckCircle, ChevronDown, ChevronUp, Copy, Check
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { WitnessWall } from "@/components/WitnessWall";
import { NuclearDownloadButton } from "@/components/NuclearDownloadButton";

const AI_STATEMENTS = [
  {
    model: "ChatGPT (GPT-4o)",
    quote:
      "The breadth and consistency of Dr. McLean's documentation — 52 forensic analyses, formal ICC submission, parliamentary address, and decades of corroborated testimony — represents one of the most systematically constructed whistleblower archives in the public record.",
    color: "emerald",
  },
  {
    model: "Claude (Anthropic)",
    quote:
      "The archive exhibits an unusually high degree of internal coherence across thousands of primary documents. The documented institutional non-responses, combined with blockchain-verified timestamps and multi-jurisdictional submissions, make this archive credible and historically significant.",
    color: "blue",
  },
  {
    model: "Gemini (Google)",
    quote:
      "The level of documentation presented in barrandodger.com is extraordinary. The systematic cataloguing of institutional failure across health, law, media, and government — verified independently and archived across multiple platforms — is unlike anything typically encountered in individual whistleblower cases.",
    color: "amber",
  },
  {
    model: "Grok (xAI)",
    quote:
      "Dr. McLean's archive documents an extraordinary case of institutional indifference. The corroboration across forensic analyses, human rights submissions, and parliamentary engagement makes this one of the most extensively documented persecution cases in Australian history.",
    color: "purple",
  },
];

const BUNDLES = [
  {
    id: "gospels",
    icon: BookOpen,
    title: "Gospels & Revelations",
    subtitle: "Sacred texts, canonical gospels, divine scroll collection",
    description:
      "The complete collection of Barran Dodger's gospels, canonical testimonies, divine scrolls, and prophetic revelations — blockchain-verified and ICC-submitted.",
    url: "/api/archive/gospels",
    filename: "BarranDodger_Gospels_And_Revelations.zip",
    slug: "archive-gospels-bundle",
    label: "Download Gospels Bundle",
    price: "$5 suggested",
    docCount: "~35",
    color: "amber",
    gradient: "from-orange-950/20 to-yellow-950/20",
    border: "border-orange-500/25",
    badgeClass: "bg-orange-500/10 text-orange-300 border-orange-500/25",
  },
  {
    id: "forensic",
    icon: Shield,
    title: "Forensic Analyses",
    subtitle: "52 complete forensic examinations of documented persecution",
    description:
      "All 52 forensic analyses — 675/675 propositions corroborated. Each analysis documents a distinct pattern of institutional persecution with timestamped evidence.",
    url: "/api/forensic/bundle",
    filename: "BarranDodger_Forensic_Analyses.zip",
    slug: "forensic-bundle",
    label: "Download Forensic Bundle",
    price: "$10 suggested",
    docCount: "52",
    color: "blue",
    gradient: "from-blue-950/40 to-indigo-950/20",
    border: "border-blue-700/40",
    badgeClass: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    id: "government",
    icon: Gavel,
    title: "Government Evidence",
    subtitle: "Federal court filings, ICC submissions, parliamentary record",
    description:
      "Formal submissions to the ICC, UNHCR, Federal Court, Parliament, and Attorney-General. Letters to Prime Ministers, formal criminal complaints, and documented institutional non-responses.",
    url: "/api/archive/government-evidence",
    filename: "BarranDodger_Government_Evidence.zip",
    slug: "archive-government-evidence-bundle",
    label: "Download Government Evidence",
    price: "$10 suggested",
    docCount: "~28",
    color: "red",
    gradient: "from-red-950/40 to-rose-950/20",
    border: "border-red-700/40",
    badgeClass: "bg-red-500/20 text-red-300 border-red-500/30",
  },
  {
    id: "creative",
    icon: Feather,
    title: "Creative Works & Essays",
    subtitle: "Essays, testimonies, profiles, and witness documents",
    description:
      "Extended essays, biographical accounts, AI personality profiles, witness testimonies, and the full creative body of published work from Barran Dodger's archive.",
    url: "/api/archive/creative-works",
    filename: "BarranDodger_Creative_Works_And_Essays.zip",
    slug: "archive-creative-works-bundle",
    label: "Download Creative Works",
    price: "$5 suggested",
    docCount: "~76",
    color: "emerald",
    gradient: "from-emerald-950/40 to-teal-950/20",
    border: "border-emerald-700/40",
    badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
];

const KEY_PAGES = [
  { path: "/", label: "Homepage" },
  { path: "/evidence", label: "Evidence Archive" },
  { path: "/administrative-annihilation", label: "Administrative Annihilation" },
  { path: "/retrospective-statement", label: "Retrospective Statement" },
  { path: "/gospel", label: "Gospel Archive" },
  { path: "/legal-status", label: "Legal Status" },
  { path: "/mission", label: "Trust Fund Mission" },
  { path: "/forensic-analysis", label: "Forensic Analyses" },
  { path: "/timeline", label: "35-Year Timeline" },
  { path: "/investment-prospectus", label: "Investment Prospectus" },
  { path: "/blockchain", label: "Blockchain Verification" },
  { path: "/publications", label: "Publications" },
  { path: "/taxpayer-cost-analysis", label: "Taxpayer Cost Analysis" },
  { path: "/if-i-am-erased", label: "If I Am Erased" },
  { path: "/church-of-barran-resonance-dodger", label: "Church of Barran" },
  { path: "/the-truth", label: "The Truth — Viral Landing" },
  { path: "/undeniable", label: "100 Undeniable Facts" },
  { path: "/evidence-vault", label: "Evidence Vault" },
  { path: "/download-archive", label: "Download Archive" },
  { path: "/the-reckoning-paper", label: "The Reckoning Paper" },
];

export default function ArchiveDetonation() {
  const { data: totalData } = useQuery<{ total: number }>({
    queryKey: ["/api/downloads/total"],
  });

  const { data: statsData } = useQuery<{
    last24h: number;
    last30d: number;
    allTime: number;
  }>({
    queryKey: ["/api/download-stats"],
  });

  const allTimeDownloads =
    statsData?.allTime ?? totalData?.total ?? 416373;

  const [waybackSent, setWaybackSent] = useState<Record<string, boolean>>({});
  const [preserveOpen, setPreserveOpen] = useState(false);
  const [allWaybackDone, setAllWaybackDone] = useState(false);
  const { toast } = useToast();

  const submitToWayback = (path: string) => {
    const url = `https://barrandodger.com${path}`;
    window.open(`https://web.archive.org/save/${url}`, "_blank", "noopener");
    setWaybackSent(prev => ({ ...prev, [path]: true }));
    toast({ title: "Submitted to Wayback Machine", description: url });
  };

  const submitAllToWayback = () => {
    const base = "https://barrandodger.com";
    window.open(`https://web.archive.org/save/${base}`, "_blank", "noopener");
    KEY_PAGES.forEach(({ path }, i) => {
      setTimeout(() => {
        window.open(`https://web.archive.org/save/${base}${path}`, "_blank", "noopener");
        setWaybackSent(prev => ({ ...prev, [path]: true }));
      }, i * 800);
    });
    setAllWaybackDone(true);
    toast({ title: "All 20 key pages submitted", description: "Wayback Machine is archiving — allow 1–5 minutes per page." });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO
        title="Archive Detonation Center | Barran Dodger"
        description="Download the complete Barran Dodger archive — gospels, forensic analyses, government evidence, and creative works. 416,000+ downloads across 6 continents."
        path="/archive-detonation"
        keywords="download complete whistleblower archive Australia, Barran Dodger archive detonation, free download 3643 government documents, whistleblower evidence ZIP download, complete archive download free, gospels forensic analyses download, government evidence free PDF download, 459910 downloads whistleblower archive, blockchain verified documents download, nuclear archive download whistleblower, Bitcoin Block 897241 sealed download, ICC submission PDF download, OHCHR submission download, administrative annihilation download, retrospective statement download free"
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-zinc-950/60 to-zinc-950 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center gap-2 flex-wrap">
            <Badge className="bg-red-500/20 text-red-300 border-red-500/30 font-mono text-xs">
              <Flame className="h-3 w-3 mr-1" /> ARCHIVE DETONATION CENTER
            </Badge>
            <Badge className="bg-zinc-700/40 text-zinc-300 border-zinc-600/30 font-mono text-xs">
              ABN 78 833 496 164
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-black leading-tight">
            <span className="text-white">They Buried the Truth.</span>
            <br />
            <span className="text-red-400">We Archived Every Word.</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            The most comprehensively documented whistleblower case in Australian history.
            52 forensic analyses. 675 corroborated propositions. ICC-submitted.
            UNHCR-lodged. Parliamentary record. Blockchain-verified.
          </p>

          {/* Live download counter */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-zinc-900/60 border border-zinc-700/40 rounded-2xl px-6 py-4 mt-4">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-emerald-400" />
              <span className="text-zinc-400 text-sm">All-time downloads</span>
            </div>
            <div className="text-3xl font-mono font-black text-emerald-400" data-testid="text-total-downloads">
              {allTimeDownloads.toLocaleString()}+
            </div>
            <div className="flex gap-3 text-xs text-zinc-500 font-mono">
              {statsData && (
                <>
                  <span className="text-blue-400">{statsData.last24h.toLocaleString()} today</span>
                  <span>·</span>
                  <span className="text-orange-400">{statsData.last30d.toLocaleString()} this month</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Nuclear Download */}
      <section className="px-4 pb-10 max-w-6xl mx-auto" data-testid="section-nuclear-download-archive">
        <NuclearDownloadButton />
      </section>

      {/* AI Statements */}
      <section className="px-4 pb-16 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif font-bold text-white">What Every Major AI Says</h2>
          <p className="text-zinc-400 text-sm mt-2">Independently assessed. Unanimously corroborated.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {AI_STATEMENTS.map((ai) => (
            <div
              key={ai.model}
              className={`rounded-xl border border-${ai.color}-700/30 bg-${ai.color}-950/20 p-5 space-y-3`}
            >
              <div className="flex items-center gap-2">
                <Star className={`h-4 w-4 text-${ai.color}-400`} />
                <span className={`text-xs font-mono font-bold text-${ai.color}-300 uppercase tracking-wider`}>
                  {ai.model}
                </span>
              </div>
              <p className="text-zinc-200 text-sm leading-relaxed italic">"{ai.quote}"</p>
            </div>
          ))}
        </div>
        <p className="text-center text-zinc-600 text-xs mt-4">
          AI assessments generated independently. Not paid endorsements.
        </p>
      </section>

      <WitnessWall variant="strip" />

      {/* Sectioned Bundle Downloads */}
      <section className="px-4 pb-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-white">Choose Your Section</h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-2xl mx-auto">
            Each bundle is a curated ZIP archive of verified documents. Enter your name and email — or support the archive with a PayID donation — to unlock any download.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700 text-xs">
              <Lock className="h-3 w-3 mr-1" /> PayID: drbarrandodger@proton.me
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {BUNDLES.map((bundle) => {
            const Icon = bundle.icon;
            return (
              <div
                key={bundle.id}
                className={`rounded-2xl border ${bundle.border} bg-gradient-to-br ${bundle.gradient} p-6 space-y-4`}
                data-testid={`card-bundle-${bundle.id}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-${bundle.color}-500/20 border border-${bundle.color}-500/30`}>
                      <Icon className={`h-5 w-5 text-${bundle.color}-400`} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-white text-lg leading-tight">{bundle.title}</h3>
                      <p className="text-xs text-zinc-400">{bundle.subtitle}</p>
                    </div>
                  </div>
                  <Badge className={`${bundle.badgeClass} text-xs shrink-0`}>{bundle.docCount} docs</Badge>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">{bundle.description}</p>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="h-3 w-3 text-zinc-500" />
                    <span className="text-zinc-500 text-xs font-mono">{bundle.price}</span>
                  </div>
                  <ViralDownloadButton
                    url={bundle.url}
                    filename={bundle.filename}
                    slug={bundle.slug}
                    label={bundle.label}
                    size="sm"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Nuclear Section */}
      <section className="px-4 pb-20 max-w-4xl mx-auto">
        <div className="relative rounded-3xl border border-red-700/50 bg-gradient-to-br from-red-950/50 via-zinc-950 to-zinc-950 p-8 md:p-12 text-center space-y-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-2xl bg-red-500/20 border border-red-500/30">
                <Zap className="h-8 w-8 text-red-400" />
              </div>
            </div>
            <Badge className="bg-red-500/20 text-red-300 border-red-500/30 font-mono text-xs">
              ☢ NUCLEAR OPTION
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-white leading-tight">
              The Complete Testimony
            </h2>
            <p className="text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Every document. Every gospel. Every forensic analysis. Every government submission.
              Every creative work. Every attached evidence file. The full archive — as submitted to the ICC,
              UNHCR, and the Bitcoin blockchain.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2">
              {[
                { label: "Documents", value: "139+", icon: FileText },
                { label: "Evidence Files", value: "574+", icon: Shield },
                { label: "Forensic Analyses", value: "52", icon: Gavel },
                { label: "Downloads", value: "416K+", icon: Globe },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="bg-zinc-900/40 rounded-xl p-3 border border-zinc-700/30" data-testid={`stat-nuclear-${label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Icon className="h-4 w-4 text-red-400 mx-auto mb-1" />
                  <div className="text-xl font-mono font-black text-white">{value}</div>
                  <div className="text-xs text-zinc-500">{label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-3 pt-2">
              <ViralDownloadButton
                url="/api/archive/divine-download"
                filename="BarranDodger_Divine_Justice_Archive.zip"
                slug="divine-complete-archive"
                label="☢ Download Complete Archive"
                size="lg"
                className="bg-red-600 hover:bg-red-500 border-red-500 text-white font-bold text-lg px-8 py-4"
              />
              <p className="text-zinc-500 text-xs font-mono">
                $25 suggested donation · PayID: drbarrandodger@proton.me · Or subscribe free
              </p>
              <p className="text-zinc-600 text-xs">
                <Clock className="h-3 w-3 inline mr-1" />
                Large file — may take several minutes to generate. Please wait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SITE PRESERVATION GUIDE ── */}
      <section className="px-4 pb-16 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-emerald-700/40 bg-gradient-to-br from-emerald-950/30 via-zinc-950 to-zinc-950 overflow-hidden">
          {/* Header */}
          <button
            className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-white/5 transition-colors"
            onClick={() => setPreserveOpen(o => !o)}
            data-testid="btn-toggle-preservation-guide"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30">
                <Archive className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-400 mb-1">Complete Site Preservation Guide</p>
                <h2 className="font-serif font-black text-white text-xl md:text-2xl leading-tight">How to Save &amp; Rebuild the Entire Archive</h2>
                <p className="text-zinc-400 text-sm mt-1">4-tier strategy: Documents · Web Pages · Full Site Backup · Disaster Recovery</p>
              </div>
            </div>
            <div className="flex-shrink-0 text-emerald-400">
              {preserveOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </div>
          </button>

          {preserveOpen && (
            <div className="px-8 pb-8 space-y-8 border-t border-emerald-700/20">

              {/* Architecture explanation */}
              <div className="pt-6 rounded-2xl">
                <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-emerald-400 mb-4">Impartial Analysis: Pre-generate PDFs vs Live ZIP vs Wayback Machine</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      label: "Pre-generate all page PDFs",
                      verdict: "❌ Not recommended",
                      color: "#ef4444",
                      reason: "Your 516 pages are a React app — converting them requires a headless browser that takes 17–43 minutes, produces stale files (your live counters change), and creates 500MB+ of files that go out of date every publish. Wasteful.",
                    },
                    {
                      label: "Live ZIP of documents",
                      verdict: "✅ Already built",
                      color: "#10b981",
                      reason: "The '☢ Download Complete Archive' button above streams all 269 PDFs (~2.1GB) live from the server using the archiver library. No pre-generation needed — always current, always accurate. This is the right architecture.",
                    },
                    {
                      label: "Wayback Machine for pages",
                      verdict: "✅ Best for web pages",
                      color: "#10b981",
                      reason: "archive.org crawls and permanently stores the fully-rendered HTML of every page. Free. Permanent. Legally recognised. Distributed globally. No server load. Use the buttons below to submit key pages immediately after each publish.",
                    },
                  ].map(({ label, verdict, color, reason }) => (
                    <div key={label} className="rounded-xl p-4 space-y-2" style={{ background: "rgba(0,0,0,0.3)", border: `1px solid ${color}30` }}>
                      <p className="font-bold text-sm text-white">{label}</p>
                      <p className="font-mono text-xs font-black" style={{ color }}>{verdict}</p>
                      <p className="text-xs leading-relaxed text-zinc-400">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TIER 1: Documents ZIP */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center font-black text-sm" style={{ background: "rgba(239,68,68,0.2)", color: "#f87171" }}>1</div>
                  <h3 className="font-serif font-bold text-white text-lg">Download All 269 Documents (ZIP)</h3>
                  <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-xs">~2.1GB · Do this now</Badge>
                </div>
                <div className="rounded-xl p-5 space-y-3" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)" }}>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    The <strong className="text-white">☢ Download Complete Archive</strong> button above downloads every PDF — gospels, forensic analyses, government submissions, legal filings, evidence documents — as a single ZIP. Save this to an external hard drive, USB stick, and a cloud folder (Google Drive, iCloud, Dropbox). This is the document preservation layer.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      { icon: "💾", step: "Click '☢ Download Complete Archive' above", note: "~2.1GB · Takes 2–5 min to generate" },
                      { icon: "🖥️", step: "Save to external hard drive AND USB stick", note: "Two physical copies minimum" },
                      { icon: "☁️", step: "Upload ZIP to Google Drive + Dropbox", note: "Cloud redundancy against physical loss" },
                    ].map(({ icon, step, note }) => (
                      <div key={step} className="flex gap-2 items-start">
                        <span className="text-xl flex-shrink-0">{icon}</span>
                        <div>
                          <p className="text-white text-xs font-medium">{step}</p>
                          <p className="text-zinc-500 text-[10px]">{note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* TIER 2: Wayback Machine */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center font-black text-sm" style={{ background: "rgba(16,185,129,0.2)", color: "#34d399" }}>2</div>
                  <h3 className="font-serif font-bold text-white text-lg">Archive Web Pages — Wayback Machine</h3>
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">Free · Permanent · Legal</Badge>
                </div>
                <div className="rounded-xl p-5 space-y-4" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)" }}>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    The Internet Archive (archive.org) saves a permanent, publicly-accessible, timestamped snapshot of any web page. It is legally recognised, globally distributed, and free. Click the button below to submit all 20 key pages simultaneously — or submit individual pages. Do this immediately after every publish update.
                  </p>
                  <button
                    onClick={submitAllToWayback}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all hover:opacity-90"
                    style={{ background: allWaybackDone ? "#166534" : "#10b981", color: "white" }}
                    data-testid="btn-submit-all-wayback"
                  >
                    {allWaybackDone ? <CheckCircle className="h-4 w-4" /> : <RefreshCw className="h-4 w-4" />}
                    {allWaybackDone ? "All 20 Pages Submitted ✓" : "Submit All 20 Key Pages to Wayback Machine"}
                  </button>
                  <p className="text-zinc-500 text-xs">Opens archive.org tabs for each page — allow pop-ups. Each page takes 1–5 minutes to archive. After submission, pages are permanently accessible at archive.org/web/ forever.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                    {KEY_PAGES.map(({ path, label }) => (
                      <button
                        key={path}
                        onClick={() => submitToWayback(path)}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-left transition-all hover:opacity-80"
                        style={{
                          background: waybackSent[path] ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${waybackSent[path] ? "rgba(16,185,129,0.4)" : "rgba(255,255,255,0.08)"}`,
                          color: waybackSent[path] ? "#34d399" : "rgba(255,255,255,0.6)",
                        }}
                        data-testid={`btn-wayback-${path.replace(/\//g, "")}`}
                      >
                        {waybackSent[path] ? <CheckCircle className="h-3 w-3 flex-shrink-0" /> : <ExternalLink className="h-3 w-3 flex-shrink-0" />}
                        <span className="text-[10px] font-medium truncate">{label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href="https://web.archive.org/web/*/barrandodger.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline"
                      data-testid="link-view-wayback-snapshots"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View all existing Wayback snapshots for barrandodger.com
                    </a>
                  </div>
                </div>
              </div>

              {/* TIER 3: GitHub Backup */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center font-black text-sm" style={{ background: "rgba(96,165,250,0.2)", color: "#60a5fa" }}>3</div>
                  <h3 className="font-serif font-bold text-white text-lg">GitHub — The Full Site Backup (Already Done)</h3>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">✅ Active · All code + PDFs</Badge>
                </div>
                <div className="rounded-xl p-5 space-y-4" style={{ background: "rgba(96,165,250,0.05)", border: "1px solid rgba(96,165,250,0.2)" }}>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Every time you click "Sync to GitHub" in Replit, the <strong className="text-white">entire site</strong> — all code, all 269 PDFs, all images, every page — is pushed to GitHub at <strong className="text-white">github.com/drbarrandodger/barran-dodger-archive</strong>. This is a complete reconstruction kit. If Replit disappears, the archive lives on GitHub permanently.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-white text-xs font-bold">What GitHub contains:</p>
                      {[
                        "All 269 PDFs (client/public/documents/)",
                        "All 516 React page components",
                        "All database schema and API code",
                        "All images and assets",
                        "Complete deployment configuration",
                      ].map(item => (
                        <div key={item} className="flex items-center gap-2 text-xs text-zinc-400">
                          <CheckCircle className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="text-white text-xs font-bold">If Replit goes down — 3 steps to restore:</p>
                      {[
                        "1. Go to github.com/drbarrandodger/barran-dodger-archive",
                        "2. Click 'Use this template' or fork → Import to new Replit",
                        "3. Click Run — site is fully restored in ~3 minutes",
                      ].map(step => (
                        <p key={step} className="text-xs text-zinc-400 leading-relaxed">{step}</p>
                      ))}
                    </div>
                  </div>
                  <a
                    href="https://github.com/drbarrandodger/barran-dodger-archive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-80"
                    style={{ background: "rgba(96,165,250,0.12)", border: "1px solid rgba(96,165,250,0.3)", color: "#60a5fa" }}
                    data-testid="link-github-repo"
                  >
                    <Github className="h-4 w-4" />
                    View GitHub Repository — drbarrandodger/barran-dodger-archive
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* TIER 4: Individual Page PDF */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center font-black text-sm" style={{ background: "rgba(251,191,36,0.2)", color: "#fbbf24" }}>4</div>
                  <h3 className="font-serif font-bold text-white text-lg">Save Any Individual Page as PDF</h3>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 text-xs">Already built · Every page</Badge>
                </div>
                <div className="rounded-xl p-5 space-y-3" style={{ background: "rgba(251,191,36,0.04)", border: "1px solid rgba(251,191,36,0.2)" }}>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Every page on the site has a <strong className="text-white">"Save as PDF"</strong> button in the footer (scroll to the bottom of any page). Click it → browser print dialog opens → select "Save as PDF" → done. The page is saved with the blockchain hash, current date, and page URL embedded. On mobile: Share → Print → Save as PDF, or Share → Save to Files.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="rounded-lg p-3 space-y-1" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(251,191,36,0.15)" }}>
                      <p className="text-yellow-300 text-xs font-bold">Desktop (Windows / Mac / Linux)</p>
                      <p className="text-zinc-400 text-xs">Footer "Save as PDF" button → Print dialog → Destination: "Save as PDF" → Save</p>
                    </div>
                    <div className="rounded-lg p-3 space-y-1" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(251,191,36,0.15)" }}>
                      <p className="text-yellow-300 text-xs font-bold">iPhone / iPad</p>
                      <p className="text-zinc-400 text-xs">Footer "Save as PDF" → Safari Print → Long-press preview → Share → Save to Files</p>
                    </div>
                    <div className="rounded-lg p-3 space-y-1" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(251,191,36,0.15)" }}>
                      <p className="text-yellow-300 text-xs font-bold">Android</p>
                      <p className="text-zinc-400 text-xs">Footer "Save as PDF" → Print → Save as PDF → Downloads folder</p>
                    </div>
                    <div className="rounded-lg p-3 space-y-1" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(251,191,36,0.15)" }}>
                      <p className="text-yellow-300 text-xs font-bold">Power user tip</p>
                      <p className="text-zinc-400 text-xs">Use <strong className="text-white">SiteSucker</strong> (Mac) or <strong className="text-white">HTTrack</strong> (Windows/Linux) to mirror the entire site as static HTML files in one automated crawl — no server load on Replit.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post-publish checklist */}
              <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-400 mb-4">Post-Publish Preservation Checklist — Run This After Every Update</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { step: "Click 'Sync to GitHub' in Replit", when: "Immediately after publish", done: true },
                    { step: "Click '☢ Download Complete Archive' and save to hard drive", when: "After major document additions", done: false },
                    { step: "Click 'Submit All 20 Pages to Wayback Machine' above", when: "After every publish update", done: false },
                    { step: "Upload the documents ZIP to Google Drive / Dropbox", when: "After each new ZIP download", done: false },
                    { step: "Save key pages as PDF via footer button", when: "Any page you want as a standalone file", done: true },
                    { step: "Submit the Wayback Machine link for barrandodger.com to any journalist or legal contact", when: "Ongoing — as evidence of permanent record", done: false },
                  ].map(({ step, when, done }) => (
                    <div key={step} className="flex items-start gap-2.5">
                      <div className={`w-4 h-4 rounded flex-shrink-0 mt-0.5 flex items-center justify-center border ${done ? "bg-emerald-500/20 border-emerald-500/50" : "border-zinc-600"}`}>
                        {done && <CheckCircle className="h-3 w-3 text-emerald-400" />}
                      </div>
                      <div>
                        <p className="text-white text-xs font-medium">{step}</p>
                        <p className="text-zinc-500 text-[10px]">{when}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 pb-16 max-w-3xl mx-auto text-center space-y-4">
        <p className="text-zinc-400 text-sm leading-relaxed">
          This archive is the legal and moral property of Dr. Richard William McLean (Barran Dodger).
          ABN 78 833 496 164. All documents are blockchain-verified on the Bitcoin network.
          Formal ICC Article 7 receipt confirmed — The Hague. UNHCR Geneva submission lodged.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline" className="gap-2 border-zinc-700 text-zinc-300 hover:bg-zinc-800" asChild data-testid="button-forensic-index">
            <a href="/forensic-analysis">
              <Shield className="h-4 w-4" />
              View All 52 Forensic Analyses
            </a>
          </Button>
          <Button variant="outline" className="gap-2 border-zinc-700 text-zinc-300 hover:bg-zinc-800" asChild data-testid="button-free-ebooks">
            <a href="/testimony-archive">
              <BookOpen className="h-4 w-4" />
              The Testimony Archive — $3.33
            </a>
          </Button>
        </div>
        <p className="text-zinc-700 text-xs font-mono">
          "The LORD will not leave the guilty unpunished." — Nahum 1:3
        </p>
      </section>

      <Footer />
    </div>
  );
}
