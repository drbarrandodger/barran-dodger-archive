import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, FileText, BarChart3, Flame, ArrowUpRight, Download, CalendarDays, ExternalLink } from "lucide-react";

interface DailyData {
  date: string;
  count: number;
}

interface TopDoc {
  slug: string;
  title: string;
  count: number;
}

interface AllTimeDoc {
  slug: string;
  title: string;
  count: number;
}

const PUBLICATION_DATE = '1 February 2026';

function slugToDownloadUrl(slug: string): string {
  return `/api/downloads/${slug}`;
}

function slugToDocumentUrl(slug: string): string {
  const cleanSlug = slug.replace(/-\d{10,}$/g, '');
  return `/documents/${slug}.pdf`;
}

function LineGraph({ data }: { data: DailyData[] }) {
  if (!data.length) return null;
  const max = Math.max(...data.map(d => d.count), 1);
  const min = Math.min(...data.map(d => d.count));
  const padding = 30;
  const width = 800;
  const height = 200;
  const graphW = width - padding * 2;
  const graphH = height - padding * 2;
  const range = max - min || 1;

  const points = data.map((d, i) => ({
    x: padding + (i / (data.length - 1 || 1)) * graphW,
    y: padding + graphH - ((d.count - min) / range) * graphH,
    ...d,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${padding + graphH} L ${points[0].x} ${padding + graphH} Z`;

  const yTicks = 5;
  const yLabels = Array.from({ length: yTicks + 1 }, (_, i) => Math.round(min + (range * i) / yTicks));

  return (
    <div className="relative w-full" data-testid="chart-line-graph">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(38,92%,50%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(38,92%,50%)" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {yLabels.map((val, i) => {
          const y = padding + graphH - ((val - min) / range) * graphH;
          return (
            <g key={i}>
              <line x1={padding} y1={y} x2={padding + graphW} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <text x={padding - 5} y={y + 4} textAnchor="end" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="monospace">
                {val}
              </text>
            </g>
          );
        })}

        <path d={areaPath} fill="url(#lineGrad)" />
        <path d={linePath} fill="none" stroke="hsl(38,92%,50%)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />

        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="3" fill="hsl(38,92%,50%)" opacity={i === points.length - 1 ? 1 : 0.5} />
            {(i === 0 || i === points.length - 1 || i === Math.floor(points.length / 2) || i % 7 === 0) && (
              <text x={p.x} y={padding + graphH + 15} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="monospace">
                {new Date(p.date + 'T12:00:00').toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}
              </text>
            )}
          </g>
        ))}

        {points.length > 0 && (
          <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="5" fill="hsl(38,92%,50%)" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
            <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
          </circle>
        )}
      </svg>

      <div className="flex justify-between mt-2 text-[10px] text-body-text px-1">
        <span>{data.length > 0 ? new Date(data[0].date + 'T12:00:00').toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}</span>
        <span className="text-[hsl(38,92%,50%)] font-bold">LIVE</span>
        <span>{data.length > 0 ? new Date(data[data.length - 1].date + 'T12:00:00').toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}</span>
      </div>
    </div>
  );
}

export function DownloadAnalytics() {
  const { data: dailyData } = useQuery<{ data: DailyData[] }>({
    queryKey: ['/api/analytics/daily', 30],
    queryFn: () => fetch('/api/analytics/daily?days=30', { cache: 'no-store' }).then(r => r.json()),
    refetchInterval: 30000,
    staleTime: 0,
  });

  const { data: topDocs } = useQuery<{ data: TopDoc[] }>({
    queryKey: ['/api/analytics/top-documents', 7],
    queryFn: () => fetch('/api/analytics/top-documents?days=7&limit=10', { cache: 'no-store' }).then(r => r.json()),
    refetchInterval: 30000,
    staleTime: 0,
  });

  const { data: allTimeDocs } = useQuery<{ data: AllTimeDoc[]; since: string }>({
    queryKey: ['/api/analytics/top-all-time'],
    queryFn: () => fetch('/api/analytics/top-all-time?limit=15', { cache: 'no-store' }).then(r => r.json()),
    refetchInterval: 30000,
    staleTime: 0,
  });

  const { data: recentData } = useQuery<{ count: number }>({
    queryKey: ['/api/analytics/recent', 24],
    queryFn: () => fetch('/api/analytics/recent?hours=24', { cache: 'no-store' }).then(r => r.json()),
    refetchInterval: 15000,
    staleTime: 0,
  });

  const { data: recent72 } = useQuery<{ count: number }>({
    queryKey: ['/api/analytics/recent', 72],
    queryFn: () => fetch('/api/analytics/recent?hours=72', { cache: 'no-store' }).then(r => r.json()),
    refetchInterval: 30000,
    staleTime: 0,
  });

  const daily = dailyData?.data ?? [];
  const last24 = recentData?.count ?? 0;
  const last72 = recent72?.count ?? 0;
  const topWeekly = topDocs?.data ?? [];
  const allTime = allTimeDocs?.data ?? [];

  const todayCount = daily.length > 0 ? daily[daily.length - 1]?.count ?? 0 : 0;
  const yesterdayCount = daily.length > 1 ? daily[daily.length - 2]?.count ?? 0 : 0;
  const dayChange = yesterdayCount > 0 ? Math.round(((todayCount - yesterdayCount) / yesterdayCount) * 100) : 0;

  const last7Total = daily.slice(-7).reduce((sum, d) => sum + d.count, 0);
  const prev7Total = daily.slice(-14, -7).reduce((sum, d) => sum + d.count, 0);
  const weekChange = prev7Total > 0 ? Math.round(((last7Total - prev7Total) / prev7Total) * 100) : 0;

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[hsl(222,55%,8%)] to-[hsl(222,55%,6%)]" data-testid="section-download-analytics">
      <div className="container mx-auto max-w-5xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <Badge variant="outline" className="border-[hsl(38,92%,50%)]/40 text-[hsl(38,92%,50%)] px-5 py-2 text-sm font-bold uppercase tracking-wider" data-testid="badge-analytics">
            <BarChart3 className="h-4 w-4 mr-2" /> Live Download Analytics
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white" data-testid="text-analytics-heading">
            The Evidence Is Spreading
          </h2>
          <p className="text-body-text max-w-xl mx-auto text-sm">
            Real-time tracking of document downloads since publication on {PUBLICATION_DATE}.
            Every number represents a person choosing to witness the evidence.
          </p>
          <p className="text-body-text text-xs flex items-center justify-center gap-1">
            <CalendarDays className="h-3 w-3" />
            Tracking since {PUBLICATION_DATE}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Card className="bg-white/[0.03] border-white/10 h-full" data-testid="card-stat-24h">
              <CardContent className="p-6 text-center space-y-2">
                <Clock className="h-5 w-5 text-[hsl(38,92%,50%)] mx-auto" />
                <p className="text-xs text-body-text uppercase tracking-wider">Last 24 Hours</p>
                <p className="text-3xl font-bold font-mono text-white tabular-nums" data-testid="text-count-24h">{last24.toLocaleString()}</p>
                {dayChange !== 0 && (
                  <p className={`text-sm font-bold flex items-center justify-center gap-1 ${dayChange > 0 ? 'text-green-400' : 'text-red-400'}`} data-testid="text-change-daily">
                    <ArrowUpRight className={`h-4 w-4 ${dayChange < 0 ? 'rotate-90' : ''}`} />
                    {dayChange > 0 ? '+' : ''}{dayChange}% vs yesterday
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Card className="bg-white/[0.03] border-[hsl(38,92%,50%)]/30 h-full" data-testid="card-stat-72h">
              <CardContent className="p-6 text-center space-y-2">
                <Flame className="h-5 w-5 text-orange-400 mx-auto" />
                <p className="text-xs text-body-text uppercase tracking-wider">Last 72 Hours</p>
                <p className="text-3xl font-bold font-mono text-white tabular-nums" data-testid="text-count-72h">{last72.toLocaleString()}</p>
                <p className="text-sm text-[hsl(38,92%,50%)] font-bold" data-testid="text-spike-label">
                  {last72 > 500 ? 'Surging' : last72 > 300 ? 'High Activity' : 'Active'}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Card className="bg-white/[0.03] border-white/10 h-full" data-testid="card-stat-week">
              <CardContent className="p-6 text-center space-y-2">
                <TrendingUp className="h-5 w-5 text-purple-400 mx-auto" />
                <p className="text-xs text-body-text uppercase tracking-wider">7-Day Trend</p>
                <p className="text-3xl font-bold font-mono text-white tabular-nums" data-testid="text-count-week">{last7Total.toLocaleString()}</p>
                {weekChange !== 0 && (
                  <p className={`text-sm font-bold flex items-center justify-center gap-1 ${weekChange > 0 ? 'text-green-400' : 'text-red-400'}`} data-testid="text-change-weekly">
                    <ArrowUpRight className={`h-4 w-4 ${weekChange < 0 ? 'rotate-90' : ''}`} />
                    {weekChange > 0 ? '+' : ''}{weekChange}% vs prior week
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <Card className="bg-white/[0.03] border-white/10" data-testid="card-line-chart">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-serif font-bold text-white text-lg">Website Activity — Last 30 Days</h3>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-mono animate-pulse">LIVE</span>
              </div>
              <LineGraph data={daily} />
            </CardContent>
          </Card>
        </motion.div>

        {allTime.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
            <Card className="bg-white/[0.03] border-white/10" data-testid="card-all-time-docs">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-serif font-bold text-white text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[hsl(38,92%,50%)]" />
                    All-Time Most Downloaded
                  </h3>
                  <span className="text-xs text-body-text">
                    Since {PUBLICATION_DATE}
                  </span>
                </div>
                <div className="space-y-3">
                  {allTime.map((doc, i) => {
                    const maxCount = allTime[0]?.count ?? 1;
                    const barWidth = Math.max((doc.count / maxCount) * 100, 5);
                    const downloadUrl = slugToDocumentUrl(doc.slug);
                    return (
                      <div key={doc.slug} className="space-y-1.5" data-testid={`all-time-doc-${i}`}>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <span className="text-xs font-mono text-body-text w-5 flex-shrink-0 text-right">#{i + 1}</span>
                            <span className="text-gray-200 text-sm truncate">{doc.title}</span>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="text-white font-mono font-bold tabular-nums text-sm">{doc.count.toLocaleString()}</span>
                            <Button asChild size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold h-7 px-2.5 text-xs">
                              <a href={downloadUrl} target="_blank" rel="noopener noreferrer" download data-testid={`download-btn-${i}`}>
                                <Download className="h-3 w-3 mr-1" />
                                PDF
                              </a>
                            </Button>
                          </div>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden ml-7">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${barWidth}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            className={`h-full rounded-full ${i === 0 ? 'bg-[hsl(38,92%,50%)]' : i <= 2 ? 'bg-[hsl(38,92%,50%)]/60' : 'bg-white/20'}`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {topWeekly.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
            <Card className="bg-white/[0.03] border-white/10" data-testid="card-top-docs-weekly">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-serif font-bold text-white text-lg flex items-center gap-2">
                    <Flame className="h-5 w-5 text-orange-400" />
                    Trending This Week
                  </h3>
                  <span className="text-xs text-body-text">Last 7 days</span>
                </div>
                <div className="space-y-3">
                  {topWeekly.map((doc, i) => {
                    const maxCount = topWeekly[0]?.count ?? 1;
                    const barWidth = Math.max((doc.count / maxCount) * 100, 5);
                    const downloadUrl = slugToDocumentUrl(doc.slug);
                    return (
                      <div key={doc.slug} className="space-y-1.5" data-testid={`weekly-doc-${i}`}>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <span className="text-xs font-mono text-body-text w-5 flex-shrink-0 text-right">#{i + 1}</span>
                            <span className="text-gray-200 text-sm truncate">{doc.title}</span>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="text-white font-mono font-bold tabular-nums text-sm">{doc.count.toLocaleString()}</span>
                            <Button asChild size="sm" className="bg-white/10 hover:bg-white/20 text-white font-bold h-7 px-2.5 text-xs border border-white/10">
                              <a href={downloadUrl} target="_blank" rel="noopener noreferrer" download data-testid={`weekly-download-btn-${i}`}>
                                <Download className="h-3 w-3 mr-1" />
                                PDF
                              </a>
                            </Button>
                          </div>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden ml-7">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${barWidth}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            className={`h-full rounded-full ${i === 0 ? 'bg-orange-400' : i <= 2 ? 'bg-orange-400/60' : 'bg-white/15'}`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}
