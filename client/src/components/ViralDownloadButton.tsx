import { useState } from "react";
import { Download, Check, Link2, X } from "lucide-react";
import { SiX, SiWhatsapp, SiTelegram, SiFacebook } from "react-icons/si";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { slugFromUrl } from "@/components/DownloadCounter";

const BASE = "https://www.barrandodger.com";

interface ViralDownloadButtonProps {
  url: string;
  label?: string;
  filename?: string;
  className?: string;
  shareText?: string;
  size?: "sm" | "md" | "lg";
}

export function ViralDownloadButton({
  url,
  label = "Download",
  filename,
  className = "",
  shareText,
  size = "md",
}: ViralDownloadButtonProps) {
  const slug = slugFromUrl(url);
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);

  const { data } = useQuery<{ count: number }>({
    queryKey: ["/api/downloads", slug],
    queryFn: () =>
      fetch(`/api/downloads/${slug}`, { cache: "no-store" }).then((r) =>
        r.json()
      ),
    refetchInterval: 20000,
    staleTime: 0,
  });

  const count = data?.count ?? 0;

  const handleDownload = async () => {
    try {
      await fetch(`/api/downloads/${slug}/increment`, { method: "POST" });
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["/api/downloads", slug] });
      }, 1200);
    } catch {}
    setTimeout(() => setShowShare(true), 900);
  };

  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : BASE;

  const defaultShare =
    shareText ||
    `I just downloaded evidence from the Dr. Richard McLean whistleblower archive — 2,304 primary source documents, 350,000+ downloads, blockchain-sealed, formally before the ICC. This archive cannot be suppressed.\n\n${pageUrl}\n\n#Whistleblower #ICC #BarranDodger #HumanRights`;

  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(defaultShare)}`;
  const waHref = `https://wa.me/?text=${encodeURIComponent(defaultShare)}`;
  const tgHref = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(defaultShare)}`;
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodeURIComponent(defaultShare.slice(0, 500))}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(defaultShare);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-2.5 gap-2",
  };

  return (
    <div className="space-y-2">
      <a
        href={url}
        download={filename || true}
        onClick={handleDownload}
        className={`inline-flex items-center font-semibold rounded-lg transition-colors ${sizeClasses[size]} ${className}`}
        data-testid={`viral-download-${slug.slice(0, 30)}`}
      >
        <Download className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
        {label}
        {count > 0 && (
          <span className="inline-flex items-center gap-0.5 bg-white/15 rounded-full px-2 py-0.5 text-[10px] font-bold tabular-nums">
            {count.toLocaleString()} downloads
          </span>
        )}
      </a>

      {showShare && (
        <div className="flex flex-wrap items-center gap-2 bg-gray-900/90 border border-green-400/40 rounded-xl px-3 py-2.5 animate-in slide-in-from-bottom-2 duration-200">
          <span className="text-green-400 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
            Downloaded — now share it
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            <a
              href={twitterHref}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on X"
              className="flex items-center justify-center h-7 w-7 rounded bg-gray-800 border border-green-400/25 text-green-400 hover:border-green-400/70 hover:bg-gray-700 transition-colors"
            >
              <SiX className="h-3 w-3" />
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on WhatsApp"
              className="flex items-center justify-center h-7 w-7 rounded bg-gray-800 border border-green-400/25 text-green-400 hover:border-green-400/70 hover:bg-gray-700 transition-colors"
            >
              <SiWhatsapp className="h-3 w-3" />
            </a>
            <a
              href={tgHref}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Telegram"
              className="flex items-center justify-center h-7 w-7 rounded bg-gray-800 border border-green-400/25 text-green-400 hover:border-green-400/70 hover:bg-gray-700 transition-colors"
            >
              <SiTelegram className="h-3 w-3" />
            </a>
            <a
              href={fbHref}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Facebook"
              className="flex items-center justify-center h-7 w-7 rounded bg-gray-800 border border-green-400/25 text-green-400 hover:border-green-400/70 hover:bg-gray-700 transition-colors"
            >
              <SiFacebook className="h-3 w-3" />
            </a>
            <button
              onClick={copyLink}
              title="Copy share message"
              className="flex items-center justify-center h-7 w-7 rounded bg-gray-800 border border-green-400/25 text-green-400 hover:border-green-400/70 hover:bg-gray-700 transition-colors"
            >
              {copied ? (
                <Check className="h-3 w-3 text-green-300" />
              ) : (
                <Link2 className="h-3 w-3" />
              )}
            </button>
          </div>
          <button
            onClick={() => setShowShare(false)}
            className="flex items-center justify-center h-6 w-6 rounded text-gray-600 hover:text-gray-400 transition-colors ml-auto"
            title="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

export function DownloadSocialProofBanner({
  totalDownloads = 88810,
  className = "",
}: {
  totalDownloads?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 bg-green-950/30 border border-green-500/20 rounded-xl px-5 py-3 text-center ${className}`}
      data-testid="download-social-proof-banner"
    >
      <span className="text-green-400 font-bold text-sm tabular-nums">
        {totalDownloads.toLocaleString()}+ verified downloads
      </span>
      <span className="text-gray-500 text-sm hidden md:inline">·</span>
      <span className="text-gray-400 text-xs md:text-sm">
        6 continents · 132 unique documents · blockchain-sealed · ICC-submitted
      </span>
      <span className="text-gray-500 text-sm hidden md:inline">·</span>
      <span className="text-green-300 text-xs font-semibold uppercase tracking-wide">
        Every download is a permanent record
      </span>
    </div>
  );
}
