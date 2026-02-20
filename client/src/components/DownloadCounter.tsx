import { useEffect, useRef } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Download } from "lucide-react";

function slugFromUrl(url: string): string {
  return url
    .replace(/^\/?(documents|attached_assets)\//, '')
    .replace(/\.pdf$/i, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
    .slice(0, 80);
}

export function useDownloadCounter(url: string) {
  const slug = slugFromUrl(url);

  const { data } = useQuery<{ count: number }>({
    queryKey: ['/api/downloads', slug],
    queryFn: () => fetch(`/api/downloads/${slug}`).then(r => r.json()),
    refetchInterval: 30000,
  });

  const incrementMutation = useMutation({
    mutationFn: () => apiRequest('POST', `/api/downloads/${slug}/increment`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/downloads', slug] });
    },
  });

  return {
    count: data?.count ?? 0,
    increment: () => incrementMutation.mutate(),
    slug,
  };
}

export function DownloadBadge({ url }: { url: string }) {
  const { count, increment } = useDownloadCounter(url);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const badge = ref.current;
    if (!badge) return;
    const parent = badge.closest('a');
    if (!parent) return;
    const handler = () => increment();
    parent.addEventListener('click', handler);
    return () => parent.removeEventListener('click', handler);
  }, [increment]);

  if (count === 0) return null;

  return (
    <span ref={ref} className="inline-flex items-center gap-1 bg-white/10 dark:bg-white/10 rounded-full px-2.5 py-0.5 text-xs" data-testid={`counter-downloads-${slugFromUrl(url).slice(0, 30)}`}>
      <Download className="h-3 w-3 text-[hsl(38,92%,50%)]" />
      <span className="font-bold tabular-nums">{count.toLocaleString()}</span>
    </span>
  );
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
  const { increment } = useDownloadCounter(url);

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      download 
      className={className} 
      onClick={() => increment()}
      {...props}
    >
      {children}
      <DownloadBadge url={url} />
    </a>
  );
}
