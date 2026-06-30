import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { updateSiteStats } from "@/lib/forensicAnalysesData";

interface SiteStats {
  totalDownloads: number;
  documentCount: number;
}

export function useSiteStats() {
  const { data } = useQuery<SiteStats>({
    queryKey: ["/api/site-stats"],
    refetchInterval: 60_000,
    staleTime: 30_000,
  });

  useEffect(() => {
    if (data) {
      updateSiteStats(data.totalDownloads, data.documentCount);
    }
  }, [data]);

  return {
    totalDownloads: data?.totalDownloads ?? 492544,
    documentCount: data?.documentCount ?? 2304,
    totalDownloadsFormatted: data
      ? data.totalDownloads.toLocaleString("en-AU") + "+"
      : "492,544+",
    documentCountFormatted: data
      ? data.documentCount.toLocaleString("en-AU") + "+"
      : "2,304+",
  };
}
