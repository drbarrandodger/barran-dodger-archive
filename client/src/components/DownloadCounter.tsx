import { useRef, useCallback } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Download } from "lucide-react";

export function slugFromUrl(url: string): string {
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
    queryFn: () => fetch(`/api/downloads/${slug}`, { cache: 'no-store' }).then(r => r.json()),
    refetchInterval: 30000,
    staleTime: 0,
  });

  const incrementMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest('POST', `/api/downloads/${slug}/increment`);
      return await res.json();
    },
    onSuccess: (newData: { count: number }) => {
      queryClient.setQueryData(['/api/downloads', slug], newData);
    },
  });

  const increment = useCallback(() => {
    if (!incrementMutation.isPending) {
      incrementMutation.mutate();
    }
  }, [incrementMutation]);

  return {
    count: data?.count ?? 0,
    increment,
    slug,
  };
}

export function DownloadBadge({ url, standalone = false }: { url: string; standalone?: boolean }) {
  const { count, increment } = useDownloadCounter(url);
  const ref = useRef<HTMLSpanElement>(null);

  const handleClick = standalone ? () => increment() : undefined;

  if (count === 0) return null;

  return (
    <span
      ref={ref}
      onClick={handleClick}
      className="inline-flex items-center gap-1 bg-white/10 dark:bg-white/10 rounded-full px-2.5 py-0.5 text-xs cursor-pointer"
      data-testid={`counter-downloads-${slugFromUrl(url).slice(0, 30)}`}
    >
      <Download className="h-3 w-3 text-[hsl(38,92%,50%)]" />
      <span className="font-bold tabular-nums">{count.toLocaleString()}</span>
    </span>
  );
}

export function trackDownload(url: string) {
  const slug = slugFromUrl(url);
  fetch(`/api/downloads/${slug}/increment`, { method: 'POST' })
    .then(r => r.json())
    .then((data: { count: number }) => {
      queryClient.setQueryData(['/api/downloads', slug], data);
    })
    .catch(() => {});
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
