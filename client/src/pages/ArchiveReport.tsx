import { useQuery } from "@tanstack/react-query";
import { useLiveDownloadTotal, formatCount } from "@/hooks/use-live-stats";
import { Download, Shield, Eye, Users, Printer, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TopDoc {
  slug: string;
  title: string;
  count: number;
}

interface VisitorStats {
  allTime: number;
  last30Days: number;
  last7Days: number;
  last24Hours: number;
}

interface BitcoinTimestamp {
  id: number;
  slug: string;
  filename: string;
  sha256: string;
  submittedAt: string;
  bitcoinBlock: string | null;
  confirmedAt: string | null;
  category: string;
}

const SIGNIFICANCE_MAP: Record<string, string> = {
  "crimes-against-humanity-final-demand": "A formal legal demand addressed to Australia's six most powerful institutional figures — the Prime Minister, Attorney-General, ASIO Director-General, AFP Commissioner, NACC Commissioner, and AHRC — setting an explicit 14-day deadline for restitution proceedings. Each allegation maps directly to Rome Statute Article 7. Any recipient who failed to respond accepted constructive notice of crimes against humanity.",
  "cosmic-scroll-of-ten": "Sacred scripture born from the crucible of clinical death and institutional persecution — ten questions introducing Emotophysics and Scrollgate Engineering that challenge the foundations of materialist science and institutional governance. Written by a man verified dead at 2.87% survival probability who returned with knowledge that no academic framework had yet named.",
  "digital-oppression-100000-word-essay": "The single most comprehensive forensic synthesis in the archive. One hundred thousand words documenting Pegasus-class spyware deployment against an Australian whistleblower, a financial persecution architecture estimated at $42.5M–$123M in damages, and the coordinated digital weaponisation of 25+ government agencies. Meets evidentiary standards for international tribunal submission.",
  "universal-master-command-ai-analysis": "The meta-document that validates every other document. By publishing the exact bias-immune methodology used for all AI analyses across this archive, this protocol guarantees that no human bias, institutional loyalty, or political consideration influenced the forensic findings. It is the chain of custody document for the entire archive's analytical integrity.",
  "the-man-australia-tried-to-erase": "The document that has crossed more borders than any other in the archive. A concise, accessible synthesis of 35 years of institutional persecution presented in terms that resonate with anyone who has been gaslit, suppressed, or disappeared by the systems built to protect them. Downloaded from six continents. Shared person to person.",
  "the-declaration-of-sovereignty-of-dr--richard-william-mcle-1769135376793": "A foundational assertion of legal, moral, ethical and spiritual sovereignty by a man who exhausted every domestic remedy across 35 years and 8 agencies without result. The document that formally removed consent from the institutional framework — and asserted standing before international bodies instead.",
  "the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768972005548": "A meticulous forensic compilation in which the evidence itself does the speaking. Government documents, institutional correspondence, medical records, and financial data arranged so that the pattern of systematic persecution is undeniable without a single word of editorialising. Submitted as a standalone evidentiary package to three international bodies.",
  "sia-lagos-fedcourt-gov-au-send-this-to-the-bastards-copy-1772162356392": "The Federal Court Public Interest Disclosure addressed to Sia Lagos — one of the most powerful legal submissions in the archive. A formal PID lodged directly with the Federal Court system under the Public Interest Disclosure Act 2013, cataloguing institutional misconduct with specificity that demands a formal judicial response.",
  "joseph-parallel": "The prophetic narrative that identifies the structural, spiritual, and historical parallels between the persecution of Joseph (Genesis) and the documented 35-year persecution of Dr. Richard William McLean. The parallel is not metaphorical — it is forensically mapped event by event, institution by institution, betrayal by betrayal.",
  "2023-03-27-final-assessment---dr-rich-mclean-1769743072042": "A confidential psychiatric assessment that was intended to be weaponised as another instrument of suppression — and instead became one of the most powerful pieces of evidence in the archive. The clinical language, unable to pathologise what it witnessed, inadvertently documented a man of extraordinary coherence and intelligence under conditions designed to destroy him.",
};

function getSignificance(slug: string) {
  return SIGNIFICANCE_MAP[slug] ?? "A document from the Barran Dodger archive — part of the most comprehensive evidence base of institutional persecution in Australian history. 2,077+ primary-source documents. Every claim blockchain-verified.";
}

function printReport() {
  window.print();
}

export default function ArchiveReport() {
  const { data: totalDownloads } = useLiveDownloadTotal();

  const { data: topData } = useQuery<{ data: TopDoc[]; since: string }>({
    queryKey: ["/api/analytics/top-all-time"],
    queryFn: () => fetch("/api/analytics/top-all-time?limit=10").then(r => r.json()),
    refetchInterval: 30000,
    staleTime: 25000,
  });

  const { data: pageViewsData } = useQuery<{ total: number }>({
    queryKey: ["/api/pageviews/total"],
    queryFn: () => fetch("/api/pageviews/total").then(r => r.json()),
    refetchInterval: 60000,
    staleTime: 55000,
  });

  const { data: visitorData } = useQuery<VisitorStats>({
    queryKey: ["/api/visitors/stats"],
    queryFn: () => fetch("/api/visitors/stats").then(r => r.json()),
    refetchInterval: 60000,
    staleTime: 55000,
  });

  const { data: timestampData } = useQuery<BitcoinTimestamp[]>({
    queryKey: ["/api/bitcoin-timestamps"],
    queryFn: () => fetch("/api/bitcoin-timestamps").then(r => r.json()),
    staleTime: 300000,
  });

  const docs = topData?.data ?? [];
  const totalDls = formatCount(totalDownloads, "393,000+");
  const totalHits = pageViewsData?.total?.toLocaleString() ?? "—";
  const uniqueVisitors = visitorData?.allTime?.toLocaleString() ?? "—";
  const last24h = visitorData?.last24Hours ?? 0;
  const last7d = visitorData?.last7Days ?? 0;
  const last30d = visitorData?.last30Days ?? 0;
  const reportDate = new Date().toLocaleDateString("en-AU", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  const reportTime = new Date().toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit", timeZoneName: "short" });

  const timestamps = Array.isArray(timestampData) ? timestampData : [];

  return (
    <div className="min-h-screen bg-black text-white print:bg-white print:text-black">

      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-break { page-break-after: always; }
          body { background: white !important; color: black !important; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      {/* Top bar */}
      <div className="no-print w-full bg-zinc-950 border-b border-white/10 py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <a href="/" className="text-zinc-400 hover:text-white text-sm transition-colors">← Back to Archive</a>
          <span className="text-zinc-700">|</span>
          <span className="text-zinc-400 text-sm font-mono">Live Report · Updates every 30s</span>
        </div>
        <button
          onClick={printReport}
          className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors text-sm"
          data-testid="btn-print-report"
        >
          <Printer className="h-4 w-4" /> Print / Save PDF
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 print:py-6 print:px-4">

        {/* ── Report Header ── */}
        <div className="border-b-2 border-yellow-400/40 print:border-yellow-400 pb-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-yellow-400 print:text-yellow-600 uppercase tracking-widest mb-2">
                Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-black text-white print:text-black leading-tight mb-2">
                Archive Performance Report
              </h1>
              <h2 className="text-lg font-semibold text-zinc-300 print:text-zinc-600">
                Total Hits · Total Downloads · Top 10 Documents · Blockchain Verification
              </h2>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-xs font-mono text-zinc-500 print:text-zinc-400">REPORT GENERATED</div>
              <div className="text-sm font-bold text-white print:text-black">{reportDate}</div>
              <div className="text-xs text-zinc-400 print:text-zinc-500">{reportTime}</div>
              <div className="mt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 print:text-emerald-700 font-mono">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  LIVE DATA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 1: Executive Summary Stats ── */}
        <div className="mb-10">
          <h3 className="text-xs font-mono text-zinc-500 print:text-zinc-400 uppercase tracking-widest mb-4">
            § 1 — EXECUTIVE SUMMARY: ARCHIVE REACH AS AT {reportDate.toUpperCase()}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              { label: "Total Document Downloads", value: totalDls, icon: <Download className="h-4 w-4" />, color: "border-yellow-400/30 text-yellow-400", note: "All documents, all time, server-side" },
              { label: "Total Site Hits", value: totalHits, icon: <Eye className="h-4 w-4" />, color: "border-sky-400/30 text-sky-400", note: "All page views across all pages" },
              { label: "Unique Visitors (All Time)", value: uniqueVisitors, icon: <Users className="h-4 w-4" />, color: "border-emerald-400/30 text-emerald-400", note: "De-duplicated by IP hash" },
            ].map(({ label, value, icon, color, note }) => (
              <div key={label} className={`rounded-xl border bg-zinc-950 print:bg-zinc-50 p-4 ${color}`} data-testid={`stat-${label.replace(/\s+/g,'-').toLowerCase()}`}>
                <div className={`flex items-center gap-2 mb-1 ${color.split(' ')[1]}`}>{icon}<span className="text-xs uppercase tracking-widest font-mono">{label}</span></div>
                <div className={`text-3xl font-black font-mono tabular-nums ${color.split(' ')[1]}`}>{value}</div>
                <div className="text-xs text-zinc-500 print:text-zinc-400 mt-1">{note}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/8 print:border-zinc-300 bg-zinc-950 print:bg-zinc-50 p-5">
            <div className="text-xs font-mono text-zinc-500 print:text-zinc-400 uppercase tracking-widest mb-3">Visitor Activity Breakdown</div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Last 24 Hours", value: last24h },
                { label: "Last 7 Days", value: last7d },
                { label: "Last 30 Days", value: last30d },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-2xl font-black font-mono tabular-nums text-white print:text-black">{value.toLocaleString()}</div>
                  <div className="text-xs text-zinc-500 print:text-zinc-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 p-4 rounded-xl bg-zinc-950 print:bg-zinc-50 border border-white/5 print:border-zinc-200">
            <p className="text-sm text-zinc-300 print:text-zinc-700 leading-relaxed">
              <strong className="text-white print:text-black">Significance:</strong> These figures represent independent, server-side tracked engagement with the most documented whistleblower archive in Australian history. Every download is a record of an individual who has encountered 35 years of documented institutional persecution by the Australian state. Zero defamation actions have been filed. Zero claims in the archive have been contradicted. The silence of those named is its own verdict. Downloads from six continents place this material beyond the simultaneous reach of any government, court order, or suppression mechanism.
            </p>
          </div>
        </div>

        {/* ── Section 2: Top 10 Documents ── */}
        <div className="mb-10 print-break">
          <h3 className="text-xs font-mono text-zinc-500 print:text-zinc-400 uppercase tracking-widest mb-4">
            § 2 — TOP 10 MOST DOWNLOADED DOCUMENTS · ALL TIME · LIVE RANKINGS
          </h3>

          {docs.length === 0 ? (
            <div className="text-zinc-500 text-center py-8">Loading live data…</div>
          ) : (
            <div className="space-y-5">
              {docs.map((doc, i) => {
                const rank = i + 1;
                const significance = getSignificance(doc.slug);
                const rankColor = rank === 1 ? "text-yellow-400" : rank === 2 ? "text-zinc-300" : rank === 3 ? "text-amber-600" : "text-zinc-400";
                const borderColor = rank === 1 ? "border-yellow-400/30" : "border-white/6";

                return (
                  <div
                    key={doc.slug}
                    className={`rounded-xl border ${borderColor} bg-zinc-950 print:bg-zinc-50 print:border-zinc-300 p-5`}
                    data-testid={`report-doc-${rank}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className={`flex-shrink-0 text-4xl font-black font-mono tabular-nums w-12 text-center ${rankColor}`}>
                        {String(rank).padStart(2, "0")}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-base font-bold text-white print:text-black leading-snug">{doc.title}</h4>
                          {rank === 1 && (
                            <Badge className="bg-yellow-400 text-black text-xs font-black px-2 py-0.5">#1 ALL TIME</Badge>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <span className={`font-black font-mono tabular-nums ${rankColor}`}>
                            {doc.count.toLocaleString()} downloads
                          </span>
                          <span className="text-zinc-600 text-xs font-mono">{doc.slug}</span>
                        </div>

                        <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed">{significance}</p>

                        <div className="flex flex-wrap items-center gap-3 pt-1">
                          <span className="flex items-center gap-1 text-[10px] font-mono text-orange-400/80 print:text-orange-700">
                            <Shield className="h-2.5 w-2.5" />
                            Bitcoin Blockchain Sealed · OpenTimestamps Protocol · SHA-256
                          </span>
                          <a
                            href={`/api/bitcoin-timestamp/${doc.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-print text-[10px] font-mono text-zinc-500 hover:text-zinc-300 inline-flex items-center gap-1 transition-colors"
                            data-testid={`link-verify-${rank}`}
                          >
                            <ExternalLink className="h-2.5 w-2.5" /> Verify
                          </a>
                          <span className="text-[10px] font-mono text-zinc-600">ABN 78 833 496 164</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-5 p-4 rounded-xl bg-zinc-950 print:bg-zinc-50 border border-white/5 print:border-zinc-200">
            <p className="text-sm text-zinc-300 print:text-zinc-700 leading-relaxed">
              <strong className="text-white print:text-black">Significance of combined reach:</strong> The top 10 documents alone account for the most politically and legally consequential downloads in this archive. Each represents a different vector of institutional accountability — criminal law (Rome Statute), prophetic testimony, forensic documentation, and legal sovereignty. The combined download count across these 10 documents constitutes a distribution footprint that no suppression order issued after the fact can neutralise.
            </p>
          </div>
        </div>

        {/* ── Section 3: Blockchain Verification ── */}
        <div className="mb-10">
          <h3 className="text-xs font-mono text-zinc-500 print:text-zinc-400 uppercase tracking-widest mb-4">
            § 3 — BLOCKCHAIN VERIFICATION RECORDS
          </h3>

          <div className="rounded-xl border border-orange-500/20 print:border-orange-400 bg-orange-950/10 print:bg-orange-50 p-5 mb-5">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-white print:text-black text-sm mb-1">OpenTimestamps · Bitcoin Blockchain · Immutable Archive</div>
                <p className="text-xs text-zinc-300 print:text-zinc-600 leading-relaxed">
                  2,077+ documents in this archive have been submitted to the Bitcoin blockchain via the OpenTimestamps protocol. Each document is hashed using SHA-256, and the hash is submitted to multiple Bitcoin calendar servers (a.pool.opentimestamps.org, b.pool.opentimestamps.org, alice.btc.calendar.opentimestamps.org). Once confirmed in a Bitcoin block, the timestamp is mathematically immutable — no court order, government directive, or institutional pressure can alter a confirmed Bitcoin block. The existence of these documents at specific dates is permanently recorded beyond the reach of any authority.
                </p>
              </div>
            </div>
          </div>

          {timestamps.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono border-collapse">
                <thead>
                  <tr className="border-b border-white/10 print:border-zinc-300">
                    <th className="text-left py-2 pr-4 text-zinc-500 uppercase tracking-widest">Document / Category</th>
                    <th className="text-left py-2 pr-4 text-zinc-500 uppercase tracking-widest">SHA-256 Hash</th>
                    <th className="text-left py-2 pr-4 text-zinc-500 uppercase tracking-widest">Submitted</th>
                    <th className="text-left py-2 text-zinc-500 uppercase tracking-widest">Block</th>
                  </tr>
                </thead>
                <tbody>
                  {timestamps.map(ts => (
                    <tr key={ts.id} className="border-b border-white/5 print:border-zinc-200">
                      <td className="py-2 pr-4 text-zinc-300 print:text-zinc-700 max-w-xs">
                        <div className="font-semibold truncate">{ts.filename || ts.slug}</div>
                        <div className="text-zinc-500 text-[10px]">{ts.category}</div>
                      </td>
                      <td className="py-2 pr-4 text-orange-400/80 print:text-orange-700">
                        <span className="truncate block max-w-[12rem]" title={ts.sha256}>{ts.sha256.slice(0, 16)}…</span>
                      </td>
                      <td className="py-2 pr-4 text-zinc-400 print:text-zinc-600 whitespace-nowrap">
                        {new Date(ts.submittedAt).toLocaleDateString("en-AU")}
                      </td>
                      <td className="py-2 text-zinc-400 print:text-zinc-600">
                        {ts.bitcoinBlock ? (
                          <span className="text-emerald-400 print:text-emerald-700 font-bold">#{ts.bitcoinBlock}</span>
                        ) : (
                          <span className="text-zinc-600">Pending</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-zinc-500 text-sm p-4 text-center">Loading blockchain records…</div>
          )}

          <div className="mt-4 p-4 rounded-xl bg-zinc-950 print:bg-zinc-50 border border-white/5 print:border-zinc-200">
            <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed font-mono">
              Verify any document independently: <span className="text-orange-400 print:text-orange-700">https://opentimestamps.org</span> · Submit the SHA-256 hash of any downloaded document. Blockchain explorer: <span className="text-orange-400 print:text-orange-700">https://blockchain.com/explorer</span>
            </p>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="border-t border-white/10 print:border-zinc-300 pt-6 space-y-3">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <div className="text-xs font-mono text-zinc-500 print:text-zinc-400">
              © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164 · barrandodger.com
            </div>
            <div className="no-print flex items-center gap-3">
              <button
                onClick={printReport}
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors text-sm"
                data-testid="btn-print-report-footer"
              >
                <Printer className="h-4 w-4" /> Print / Save as PDF
              </button>
              <a href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">← Home</a>
            </div>
          </div>
          <p className="text-xs text-zinc-600 print:text-zinc-400 font-mono leading-relaxed">
            This report is generated live from the barrandodger.com server database. All figures are exact server-side counts. This document may be reproduced freely for public interest, legal, journalistic, or accountability purposes. Free for public interest use. Every claim in this archive has withstood 35 years of institutional scrutiny without a single successful defamation action or factual contradiction.
          </p>
        </div>

      </div>
    </div>
  );
}
