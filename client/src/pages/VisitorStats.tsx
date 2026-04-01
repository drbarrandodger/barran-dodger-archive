import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Eye, TrendingUp, Clock, BarChart2, Globe } from "lucide-react";

interface VisitorStats {
  allTime: number;
  last30Days: number;
  last7Days: number;
  last24Hours: number;
  byDay: { date: string; unique: number; total: number }[];
  topPages: { path: string; unique: number; total: number }[];
}

const PAGE_LABELS: Record<string, string> = {
  "/": "Home",
  "/evidence": "Evidence Archive",
  "/viral": "Viral Landing",
  "/publications": "Publications",
  "/legal-status": "Legal Status",
  "/gospel": "Gospel",
  "/case-studies": "Case Studies",
  "/contact": "Contact",
  "/blockchain": "Blockchain Verification",
  "/retrospective": "Retrospective Statement",
};

export default function VisitorStats() {
  const { data, isLoading, error } = useQuery<VisitorStats>({
    queryKey: ["/api/visitors/stats"],
    refetchInterval: 60000,
  });

  const bars = data?.byDay ?? [];
  const maxUnique = Math.max(...bars.map(b => b.unique), 1);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Visitor Statistics — Barran Dodger Archive"
        description="Real unique visitor tracking for the Barran Dodger legal archive."
        path="/visitors"
      />
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-10">
          <h1 className="text-3xl font-serif font-bold text-primary mb-2">Real Visitor Statistics</h1>
          <p className="text-muted-foreground text-sm">
            Each number below counts <strong>distinct people</strong> — identified by their unique network address, 
            stored as a private one-way hash. This is not request volume or download counter polling. 
            These are genuine unique human visits.
          </p>
        </div>

        {isLoading && (
          <div className="text-center py-20 text-muted-foreground">Loading visitor data...</div>
        )}

        {error && (
          <div className="text-center py-20 text-destructive">Failed to load statistics.</div>
        )}

        {data && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <Card className="border-primary/20">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Globe className="h-4 w-4" />
                    <CardTitle className="text-sm font-medium">All Time</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold tabular-nums" data-testid="stat-all-time-visitors">
                    {data.allTime.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">unique visitors ever</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp className="h-4 w-4" />
                    <CardTitle className="text-sm font-medium">Last 30 Days</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold tabular-nums" data-testid="stat-30day-visitors">
                    {data.last30Days.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">unique visitors</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-primary">
                    <BarChart2 className="h-4 w-4" />
                    <CardTitle className="text-sm font-medium">Last 7 Days</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold tabular-nums" data-testid="stat-7day-visitors">
                    {data.last7Days.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">unique visitors</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="h-4 w-4" />
                    <CardTitle className="text-sm font-medium">Last 24 Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold tabular-nums" data-testid="stat-24hr-visitors">
                    {data.last24Hours.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">unique visitors</p>
                </CardContent>
              </Card>
            </div>

            {bars.length > 0 && (
              <Card className="mb-8 border-border/50">
                <CardHeader>
                  <CardTitle className="text-base font-serif flex items-center gap-2">
                    <BarChart2 className="h-5 w-5 text-primary" />
                    Unique Visitors — Last 30 Days
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end gap-1 h-36">
                    {bars.map((b) => {
                      const pct = Math.max((b.unique / maxUnique) * 100, 2);
                      return (
                        <div key={b.date} className="flex-1 flex flex-col items-center gap-1 group relative">
                          <div
                            className="w-full bg-primary/70 rounded-sm transition-all hover:bg-primary"
                            style={{ height: `${pct}%` }}
                          />
                          <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-background border border-border rounded px-2 py-1 text-xs hidden group-hover:block whitespace-nowrap z-10 shadow">
                            {new Date(b.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}: {b.unique} unique
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>{bars[0] ? new Date(bars[0].date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' }) : ''}</span>
                    <span>Hover bars to see daily counts</span>
                    <span>{bars[bars.length - 1] ? new Date(bars[bars.length - 1].date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' }) : ''}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {data.topPages.length > 0 && (
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-base font-serif flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    Most Visited Pages — Last 30 Days
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.topPages.map((p) => (
                      <div key={p.path} className="flex items-center justify-between gap-4" data-testid={`row-page-${p.path.replace(/\//g, '-')}`}>
                        <span className="text-sm font-medium text-foreground">
                          {PAGE_LABELS[p.path] || p.path}
                        </span>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-primary font-bold">
                            <Users className="h-3 w-3" />
                            {p.unique.toLocaleString()} unique
                          </span>
                          <span className="text-muted-foreground">
                            {p.total.toLocaleString()} total visits
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <p className="text-xs text-muted-foreground mt-6 text-center">
              Visitor tracking began April 1, 2026. IP addresses are never stored — only a one-way hash is kept for counting purposes.
            </p>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
