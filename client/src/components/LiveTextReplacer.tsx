import { useEffect } from "react";
import { useSiteStats } from "@/hooks/useSiteStats";

const STALE_DOWNLOAD_PATTERNS = [
  "450,000+", "450,000",
  "491,000+", "491,000",
  "410,503+", "410,503",
  "409,000+", "409,000",
  "217,000+", "217,000",
  "368K+", "377,608", "511,560+", "511,560",
];

const STALE_DOC_PATTERNS = [
  "2,077+", "2,077",
];

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceInNode(node: Text, pattern: string, replacement: string) {
  const val = node.nodeValue;
  if (!val) return;
  const updated = val.replace(new RegExp(escapeRegExp(pattern), "g"), replacement);
  if (updated !== val) node.nodeValue = updated;
}

function walkAndReplace(root: HTMLElement, downloadFmt: string, docFmt: string) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const t = node as Text;
    for (const p of STALE_DOWNLOAD_PATTERNS) {
      replaceInNode(t, p, downloadFmt);
    }
    for (const p of STALE_DOC_PATTERNS) {
      replaceInNode(t, p, docFmt);
    }
  }
}

export function LiveTextReplacer() {
  const { totalDownloadsFormatted, documentCountFormatted } = useSiteStats();

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;
    walkAndReplace(root as HTMLElement, totalDownloadsFormatted, documentCountFormatted);
  }, [totalDownloadsFormatted, documentCountFormatted]);

  return null;
}
