import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, FileText, BarChart3, Flame, ArrowUpRight } from "lucide-react";

interface DailyData {
  date: string;
  count: number;
}

interface TopDoc {
  slug: string;
  count: number;
}

function slugToTitle(slug: string): string {
  return slug
    .replace(/-\d{10,}$/g, '')
    .replace(/-+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .substring(0, 60) + (slug.length > 65 ? '...' : '');
}

function MiniBarChart({ data }: { data: DailyData[] }) {
  if (!data.length) return null;
  const max = Math.max(...data.map(d => d.count), 1);

  return (
    <div className="flex items-end gap-[3px] h-32 w-full" data-testid="chart-daily-downloads">
      {data.map((d, i) => {
        const height = Math.max((d.count / max) * 100, 2);
        const isRecent = i >= data.length - 3;
        const isToday = i === data.length - 1;
        return (
          <div key={d.date} className="flex-1 flex flex-col items-center gap-1 group relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none z-10">
              {new Date(d.date + 'T12:00:00').toLocaleDateString('en-AU', { month: 'short', day: 'numeric' })}: {d.count}
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.5, delay: i * 0.02 }}
              className={`w-full rounded-t-sm ${
                isToday ? 'bg-[hsl(38,92%,50%)]' :
                isRecent ? 'bg-[hsl(38,92%,50%)]/70' :
                'bg-white/20'
              }`}
            />
            {(i === 0 || isToday || i === Math.floor(data.length / 2)) && (
              <span className="text-[9px] text-gray-500 mt-1 hidden md:block">
                {new Date(d.date + 'T12:00:00').toLocaleDateString('en-AU', { month: 'short', day: 'numeric' })}
              </span>
            )}
          </div>
        );
      })}
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
    queryFn: () => fetch('/api/analytics/top-documents?days=7&limit=5', { cache: 'no-store' }).then(r => r.json()),
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
  const top = topDocs?.data ?? [];

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
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Real-time tracking of document downloads. Every number is a person choosing to witness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Card className="bg-white/[0.03] border-white/10 h-full" data-testid="card-stat-24h">
              <CardContent className="p-6 text-center space-y-2">
                <Clock className="h-5 w-5 text-[hsl(38,92%,50%)] mx-auto" />
                <p className="text-xs text-gray-400 uppercase tracking-wider">Last 24 Hours</p>
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
                <p className="text-xs text-gray-400 uppercase tracking-wider">Last 72 Hours</p>
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
                <p className="text-xs text-gray-400 uppercase tracking-wider">7-Day Trend</p>
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
          <Card className="bg-white/[0.03] border-white/10" data-testid="card-chart">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-white text-lg">Daily Downloads — Last 30 Days</h3>
                <span className="text-xs text-gray-500">Hover bars for detail</span>
              </div>
              <MiniBarChart data={daily} />
            </CardContent>
          </Card>
        </motion.div>

        {top.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
            <Card className="bg-white/[0.03] border-white/10" data-testid="card-top-docs">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif font-bold text-white text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[hsl(38,92%,50%)]" />
                  Most Downloaded This Week
                </h3>
                <div className="space-y-3">
                  {top.map((doc, i) => {
                    const maxCount = top[0]?.count ?? 1;
                    const barWidth = Math.max((doc.count / maxCount) * 100, 5);
                    return (
                      <div key={doc.slug} className="space-y-1" data-testid={`top-doc-${i}`}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-300 truncate max-w-[70%]">{slugToTitle(doc.slug)}</span>
                          <span className="text-white font-mono font-bold tabular-nums">{doc.count}</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${barWidth}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
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
      </div>
    </section>
  );
}
