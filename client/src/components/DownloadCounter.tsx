import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Download } from "lucide-react";

export function slugFromUrl(url: string): string {
  return url
    .replace(/^\/?(documents|attached_assets)\//, '')
    .replace(/\.(pdf|txt|docx?)$/i, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
    .slice(0, 80);
}

export function useDownloadCounter(url: string) {
  const slug = slugFromUrl(url);

  const { data } = useQuery<{ count: number }>({
    queryKey: ['/api/downloads', slug],
    queryFn: () => fetch(`/api/downloads/${slug}`, { cache: 'no-store' }).then(r => r.json()),
    refetchInterval: 15000,
    staleTime: 0,
  });

  // Invalidate the query after a short delay so the badge refreshes after a download
  const scheduleRefresh = () => {
    setTimeout(() => {
      queryClient.invalidateQueries({ queryKey: ['/api/downloads', slug] });
    }, 2000);
  };

  return {
    count: data?.count ?? 0,
    scheduleRefresh,
    increment: scheduleRefresh,
    slug,
  };
}

export function DownloadBadge({ url, standalone = false }: { url: string; standalone?: boolean }) {
  const { count, scheduleRefresh } = useDownloadCounter(url);
  const ref = useRef<HTMLSpanElement>(null);

  if (count === 0) return null;

  return (
    <span
      ref={ref}
      onClick={standalone ? scheduleRefresh : undefined}
      className="inline-flex items-center gap-1 bg-white/10 dark:bg-white/10 rounded-full px-2.5 py-0.5 text-xs cursor-pointer"
      data-testid={`counter-downloads-${slugFromUrl(url).slice(0, 30)}`}
    >
      <Download className="h-3 w-3 text-[hsl(38,92%,50%)]" />
      <span className="font-bold tabular-nums">{count.toLocaleString()}</span>
    </span>
  );
}

/**
 * trackDownload — call this when a user initiates a download via the UI.
 * The server-side middleware (/documents route) is the authoritative counter;
 * this function schedules a query invalidation so the DownloadBadge refreshes
 * after the server has recorded the event. It does NOT call the API increment
 * endpoint to avoid double-counting with the server middleware.
 */
export function trackDownload(url: string) {
  const slug = slugFromUrl(url);
  // Schedule a badge refresh after the server has had time to record the event
  setTimeout(() => {
    queryClient.invalidateQueries({ queryKey: ['/api/downloads', slug] });
  }, 2500);
}

export function DownloadLink({
  url,
  children,
  className = "",
  ...props
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const { scheduleRefresh } = useDownloadCounter(url);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      download
      className={className}
      onClick={scheduleRefresh}
      {...props}
    >
      {children}
      <DownloadBadge url={url} />
    </a>
  );
}
