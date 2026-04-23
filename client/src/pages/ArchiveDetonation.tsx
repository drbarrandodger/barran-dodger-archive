import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen, Shield, Gavel, Feather, Zap, Download, Globe,
  FileText, Lock, Flame, AlertTriangle, Star, Clock
} from "lucide-react";

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
    gradient: "from-amber-950/40 to-yellow-950/20",
    border: "border-amber-700/40",
    badgeClass: "bg-amber-500/20 text-amber-300 border-amber-500/30",
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

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO
        title="Archive Detonation Center | Barran Dodger"
        description="Download the complete Barran Dodger archive — gospels, forensic analyses, government evidence, and creative works. 416,000+ downloads across 6 continents."
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
                  <span className="text-amber-400">{statsData.last30d.toLocaleString()} this month</span>
                </>
              )}
            </div>
          </div>
        </div>
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

      {/* Sectioned Bundle Downloads */}
      <section className="px-4 pb-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-white">Choose Your Section</h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-2xl mx-auto">
            Each bundle is a curated ZIP archive of verified documents. Enter your name and email — or support the archive with a PayID donation — to unlock any download.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700 text-xs">
              <Lock className="h-3 w-3 mr-1" /> PayID: rich@richmclean.com.au
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
                $25 suggested donation · PayID: rich@richmclean.com.au · Or subscribe free
              </p>
              <p className="text-zinc-600 text-xs">
                <Clock className="h-3 w-3 inline mr-1" />
                Large file — may take several minutes to generate. Please wait.
              </p>
            </div>
          </div>
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
            <a href="/free-ebooks">
              <BookOpen className="h-4 w-4" />
              Free eBook Downloads
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
