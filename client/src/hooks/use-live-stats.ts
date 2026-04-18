import { useQuery } from "@tanstack/react-query";

export function useLiveDownloadTotal() {
  return useQuery<number>({
    queryKey: ["/api/downloads/total"],
    refetchInterval: 30_000,
    staleTime: 15_000,
  });
}

export function formatCount(n: number | undefined, fallback = "—"): string {
  if (n === undefined || n === null) return fallback;
  return n.toLocaleString("en-AU");
}
