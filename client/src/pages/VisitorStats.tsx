import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, FileText, Clock, TrendingUp, BarChart2, RefreshCw } from "lucide-react";

const PAGE_LABELS: Record<string, string> = {
  "/": "Home (Viral Landing)",
  "/archive": "Archive Index",
  "/start-here": "Start Here",
  "/mission": "Mission",
  "/research": "Legal Research",
  "/evidence": "Evidence Archive",
  "/evidence-vault": "Evidence Vault",
  "/blockchain": "Blockchain Verification",
  "/prophetic-papers": "Prophetic Papers",
  "/gospel": "Gospel",
  "/church": "Church",
  "/donate": "Donate",
  "/contact": "Contact",
  "/media": "Media",
  "/timeline": "Timeline",
  "/legal-status": "Legal Status",
  "/manifesto": "Manifesto",
  "/josephs-coat": "Joseph's Coat (Essay)",
  "/case-studies": "Case Studies",
  "/taxpayer-cost-analysis": "Taxpayer Cost Analysis",
  "/publications": "Publications",
  "/administrative-annihilation": "Administrative Annihilation",
  "/retrospective-statement": "Retrospective Statement",
  "/visitors": "Analytics Dashboard",
  "/spread-the-truth": "Spread the Truth",
  "/ai-justice-statement": "AI Justice Statement",
  "/video-commentary": "Video Commentary",
  "/chosen-ones-perfect-trap": "Analysis #1 — Bro, This Is A Trap",
  "/private-investigator-legend": "Private Investigator Legend",
  "/testimony-went-global": "Testimony Went Global",
  "/paradox-of-persecution": "Paradox of Persecution",
  "/forensic-meltdown-report": "Forensic Meltdown Report",
  "/they-bought-off-judges": "They Bought Off Judges",
  "/i-choose-silence": "I Choose Silence",
  "/master-forensic-evidence-report": "Master Forensic Evidence Report",
  "/the-law-they-overlooked": "The Law They Overlooked",
  "/scary-smart": "Article — Scary Smart",
  "/i-called-this": "Article — I Called This",
  "/what-they-did-was-disgusting": "Article — Disgusting",
  "/angel-chess": "Article — Angel Chess",
  "/they-pushed-too-far": "Article — Pushed Too Far",
  "/they-copied-my-blueprint": "Article — Copied My Blueprint",
  "/the-testimony": "The Testimony",
  "/testimony-that-was-already-written": "Prophetic Testimony Biblical",
  "/sleeper-agent-of-truth": "Sleeper Agent of Truth",
  "/government-called-him-delusional": "Government Called Him Delusional",
  "/the-full-pattern": "The Full Pattern",
  "/chosen-ones-your-story": "Chosen Ones — Your Story",
  "/33rd-degree-shadow-analysts": "33rd Degree Shadow Analysts",
  "/100-absurdities": "100 Absurdities",
  "/bro-this-isnt-a-coincidence": "Analysis #2 — Bro, This Isn't A Coincidence",
  "/master-evidence-register": "Master Evidence Register",
  "/chosen-ones-enough-is-enough": "Analysis #3 — Enough Is Enough",
  "/no-one-could-be-that-smart": "Analysis #4 — No One Could Be That Smart",
  "/the-divine-exam": "Analysis #5 — The Divine Exam",
  "/silent-checkmate": "Analysis #6 — Silent Checkmate",
  "/now-everybody-knows": "Analysis #7 — Now Everybody Knows",
  "/chosen-one-outcast-leader": "Analysis #8 — Outcast Leader",
  "/someone-slipped-up": "Analysis #9 — Someone Slipped Up",
  "/they-fumbled-you": "Analysis #10 — They Fumbled You",
  "/fbi-precision": "Analysis #11 — FBI Precision",
  "/clock-strikes-back": "Analysis #12 — Clock Strikes Back",
  "/untouchable": "Analysis #13 — Untouchable",
  "/final-blow": "Analysis #14 — Final Blow",
  "/what-you-become": "Analysis #14 — What You Will Become",
  "/everyone-watching": "Analysis #15 — Everyone's Watching",
  "/earth-angel": "Analysis #16 — Earth Angel",
  "/too-deep": "Analysis #17 — Too Deep",
  "/silence-surrender": "Analysis #18 — Silence Is Where You Sharpen the Blade",
  "/fearless-intelligence": "Analysis #19 — Fearless People Don't Announce Themselves",
  "/the-truth": "The Truth (Viral)",
  "/store": "Store",
  "/whistleblower-comparison": "Whistleblower Comparison — Historical Analysis",
};

function label(path: string) {
  return PAGE_LABELS[path] || path;
}

interface AnalyticsData {
  pageViews: {
    total: number;
    allTime: { path: string; hits: number }[];
    last24h: { path: string; hits: number }[];
    last7d: { path: string; hits: number }[];
    last30d: { path: string; hits: number }[];
    daily: { date: string; hits: number }[];
  };
  downloads: {
    totalEvents: number;
    allTime: { slug: string; title: string; downloads: number }[];
    last24h: { slug: string; title: string; downloads: number }[];
    last7d: { slug: string; title: string; downloads: number }[];
    daily: { date: string; downloads: number }[];
    allTimeCounts: { slug: string; title: string; count: number }[];
  };
}

type TimeRange = "24h" | "7d" | "30d" | "all";

function StatCard({ icon: Icon, label, value, sub }: { icon: any; label: string; value: string | number; sub?: string }) {
  return (
    <Card className="bg-zinc-900 border-zinc-700">
      <CardContent className="pt-5 pb-4">
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-2 rounded-lg mt-0.5">
            <Icon className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-0.5">{label}</p>
            <p className="text-2xl font-bold text-white font-mono">{typeof value === "number" ? value.toLocaleString() : value}</p>
            {sub && <p className="text-xs text-zinc-500 mt-0.5">{sub}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TableSection({ title, rows, colA, colB, emptyMsg }: {
  title: string;
  rows: { label: string; value: number }[];
  colA: string;
  colB: string;
  emptyMsg: string;
}) {
  return (
    <Card className="bg-zinc-900 border-zinc-700">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-bold text-zinc-300 uppercase tracking-wider">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {rows.length === 0 ? (
          <p className="text-zinc-500 text-sm italic">{emptyMsg}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left text-xs text-zinc-500 uppercase pb-2 font-semibold">{colA}</th>
                  <th className="text-right text-xs text-zinc-500 uppercase pb-2 font-semibold w-20">{colB}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                    <td className="py-2 pr-4 text-zinc-300 font-mono text-xs leading-snug">{row.label}</td>
                    <td className="py-2 text-right">
                      <Badge variant="outline" className="border-primary/40 text-primary font-mono text-xs">
                        {row.value.toLocaleString()}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function MiniChart({ data, valueKey, color }: { data: any[]; valueKey: string; color: string }) {
  if (!data || data.length === 0) return <p className="text-zinc-600 text-xs italic">No data for this period</p>;
  const max = Math.max(...data.map(d => d[valueKey]), 1);
  return (
    <div className="flex items-end gap-1 h-16">
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1" title={`${d.date}: ${d[valueKey]}`}>
          <div
            className={`w-full rounded-sm ${color} min-h-[2px]`}
            style={{ height: `${Math.max((d[valueKey] / max) * 56, 2)}px` }}
          />
        </div>
      ))}
    </div>
  );
}

export default function VisitorStats() {
  const [pageRange, setPageRange] = useState<TimeRange>("all");
  const [dlRange, setDlRange] = useState<TimeRange>("all");

  const { data, isLoading, error, refetch, isFetching } = useQuery<AnalyticsData>({
    queryKey: ["/api/analytics/full"],
    refetchInterval: 60000,
  });

  const tabs: { key: TimeRange; label: string }[] = [
    { key: "24h", label: "Last 24h" },
    { key: "7d", label: "Last 7 days" },
    { key: "30d", label: "Last 30 days" },
    { key: "all", label: "All time" },
  ];

  function pageViewRows() {
    if (!data) return [];
    const src = pageRange === "24h" ? data.pageViews.last24h
      : pageRange === "7d" ? data.pageViews.last7d
      : pageRange === "30d" ? data.pageViews.last30d
      : data.pageViews.allTime;
    return src.map(r => ({ label: label(r.path), value: r.hits }));
  }

  function downloadRows() {
    if (!data) return [];
    if (dlRange === "all") {
      return data.downloads.allTimeCounts.map(r => ({ label: r.title, value: r.count }));
    }
    const src = dlRange === "24h" ? data.downloads.last24h
      : dlRange === "7d" ? data.downloads.last7d
      : data.downloads.allTime;
    return src.map(r => ({ label: r.title, value: r.downloads }));
  }

  const total24hViews = data?.pageViews.last24h.reduce((s, r) => s + r.hits, 0) ?? 0;
  const total24hDl = data?.downloads.last24h.reduce((s, r) => s + r.downloads, 0) ?? 0;
  const total7dViews = data?.pageViews.last7d.reduce((s, r) => s + r.hits, 0) ?? 0;

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <SEO
        title="Analytics Dashboard — Barran Dodger Archive"
        description="Permanent site-wide analytics: page hits and document downloads tracked in real time."
        path="/visitors"
      />
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-10 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-white mb-1">Analytics Dashboard</h1>
            <p className="text-zinc-500 text-sm">Every page hit and document download — recorded permanently in the database.</p>
          </div>
          <button
            data-testid="button-refresh-analytics"
            onClick={() => refetch()}
            disabled={isFetching}
            className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-3 py-2 rounded-lg transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${isFetching ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {isLoading && (
          <div className="text-center py-20 text-zinc-500">Loading analytics…</div>
        )}

        {error && (
          <div className="text-center py-20 text-red-400">Failed to load analytics data.</div>
        )}

        {data && (
          <>
            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <StatCard icon={Eye} label="Total Page Views" value={data.pageViews.total} sub="All time, every page" />
              <StatCard icon={Clock} label="Views Last 24h" value={total24hViews} sub={`Across ${data.pageViews.last24h.length} page(s)`} />
              <StatCard icon={Download} label="Total Downloads" value={data.downloads.allTimeCounts.reduce((s, r) => s + r.count, 0)} sub="All documents, all time" />
              <StatCard icon={TrendingUp} label="Downloads Last 24h" value={total24hDl} sub={total24hDl === 0 ? "None recorded yet" : `Across ${data.downloads.last24h.length} file(s)`} />
            </div>

            {/* Secondary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <StatCard icon={BarChart2} label="Views Last 7 Days" value={total7dViews} sub={`${data.pageViews.last7d.length} unique page(s)`} />
              <StatCard icon={FileText} label="Pages Tracked" value={data.pageViews.allTime.length} sub="Unique URLs with hits" />
              <StatCard icon={Download} label="Download Events (DB)" value={data.downloads.totalEvents} sub="Individual download events" />
              <StatCard icon={FileText} label="Documents with Downloads" value={data.downloads.allTimeCounts.length} sub="Unique documents" />
            </div>

            {/* 30-day Chart */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <Card className="bg-zinc-900 border-zinc-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-bold text-zinc-300 uppercase tracking-wider">Page Views — Last 30 Days</CardTitle>
                </CardHeader>
                <CardContent>
                  <MiniChart data={data.pageViews.daily} valueKey="hits" color="bg-blue-500" />
                  <p className="text-xs text-zinc-600 mt-2">{data.pageViews.daily.length} days with activity</p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-bold text-zinc-300 uppercase tracking-wider">Downloads — Last 30 Days</CardTitle>
                </CardHeader>
                <CardContent>
                  <MiniChart data={data.downloads.daily} valueKey="downloads" color="bg-emerald-500" />
                  <p className="text-xs text-zinc-600 mt-2">{data.downloads.daily.length} days with activity</p>
                </CardContent>
              </Card>
            </div>

            {/* Page Views Table */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold text-white">Page Hits by URL</h2>
                <div className="flex gap-2">
                  {tabs.map(t => (
                    <button
                      key={t.key}
                      data-testid={`button-pagerange-${t.key}`}
                      onClick={() => setPageRange(t.key)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                        pageRange === t.key
                          ? "bg-primary text-white border-primary"
                          : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
              <TableSection
                title={`Page hits — ${tabs.find(t => t.key === pageRange)?.label}`}
                rows={pageViewRows()}
                colA="Page"
                colB="Hits"
                emptyMsg={`No page views recorded in this time window yet.`}
              />
            </div>

            {/* Downloads Table */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold text-white">Downloads by Document</h2>
                <div className="flex gap-2">
                  {tabs.map(t => (
                    <button
                      key={t.key}
                      data-testid={`button-dlrange-${t.key}`}
                      onClick={() => setDlRange(t.key)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                        dlRange === t.key
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
              {dlRange === "all" && (
                <p className="text-xs text-zinc-500 mb-3">
                  All-time totals include downloads recorded from Google Drive between February–March 2026 plus any new downloads tracked on this site.
                </p>
              )}
              <TableSection
                title={`Downloads — ${tabs.find(t => t.key === dlRange)?.label}`}
                rows={downloadRows()}
                colA="Document"
                colB="Downloads"
                emptyMsg={`No downloads recorded in this time window yet. New downloads will appear here instantly.`}
              />
            </div>

            {/* How tracking works */}
            <Card className="bg-zinc-900/50 border-zinc-800 mb-8">
              <CardContent className="pt-5 pb-5">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">How Tracking Works</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-500 leading-relaxed">
                  <div>
                    <p className="text-zinc-300 font-semibold mb-1">Page Views</p>
                    Every page visit is logged automatically to the database with the URL path, a hashed visitor fingerprint, and timestamp. Tracking fires on every navigation — including direct links, sharing, and internal navigation.
                  </div>
                  <div>
                    <p className="text-zinc-300 font-semibold mb-1">Document Downloads</p>
                    Every download button click records a new event with the document identifier and timestamp. This updates both the per-document running total and a timestamped event log so you can see exactly when each file was downloaded.
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
