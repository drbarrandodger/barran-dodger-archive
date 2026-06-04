import { useQuery } from "@tanstack/react-query";
import { SiX, SiReddit, SiTelegram, SiWhatsapp } from "react-icons/si";
import { Share2, TrendingUp } from "lucide-react";

const MILESTONE = 500_000;
const SITE_URL = "https://www.barrandodger.com";

function shareText(total: number) {
  const remaining = (MILESTONE - total).toLocaleString();
  return `${total.toLocaleString()} people have downloaded the Barran Dodger archive. Only ${remaining} away from 500,000. Help push it over the line — the evidence Australia tried to bury: ${SITE_URL} #BarranDodger #CannotBeErased`;
}

export function MilestoneBar() {
  const { data } = useQuery<{ total: number; last24h: number }>({
    queryKey: ["/api/downloads/total"],
    queryFn: () => fetch("/api/downloads/total", { cache: "no-store" }).then((r) => r.json()),
    refetchInterval: 30_000,
  });

  const total = data?.total ?? 0;
  const last24h = data?.last24h ?? 0;
  const pct = Math.min((total / MILESTONE) * 100, 100);
  const remaining = Math.max(MILESTONE - total, 0);
  const daysToMilestone = last24h > 0 ? Math.ceil(remaining / last24h) : null;
  const text = shareText(total);
  const eu = encodeURIComponent(SITE_URL);
  const et = encodeURIComponent(text);

  if (!total) return null;

  return (
    <div
      className="w-full bg-black border-b border-amber-500/20 px-4 py-3"
      data-testid="milestone-bar"
      data-pdf-hide
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                {total.toLocaleString()} downloads — {pct.toFixed(1)}% to 500K
                {daysToMilestone !== null && remaining > 0 && (
                  <span className="text-amber-400/60 ml-2 font-normal normal-case tracking-normal">
                    · ~{daysToMilestone} {daysToMilestone === 1 ? "day" : "days"} at current pace
                  </span>
                )}
              </span>
            </div>
            <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-1000"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-white/25">0</span>
              <span className="text-[10px] text-amber-400/60 font-bold">
                {remaining.toLocaleString()} to go
              </span>
              <span className="text-[10px] text-white/25">500,000</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[10px] text-white/30 uppercase tracking-widest hidden sm:block">Push it:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${et}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Post on X / Twitter"
              className="flex items-center justify-center h-7 w-7 rounded bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-amber-400/40 transition-colors"
              data-testid="milestone-share-x"
            >
              <SiX className="h-3 w-3" />
            </a>
            <a
              href={`https://reddit.com/submit?url=${eu}&title=${encodeURIComponent(`${total.toLocaleString()} downloads — the archive Australia tried to bury`)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Post on Reddit"
              className="flex items-center justify-center h-7 w-7 rounded bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-amber-400/40 transition-colors"
              data-testid="milestone-share-reddit"
            >
              <SiReddit className="h-3 w-3" />
            </a>
            <a
              href={`https://t.me/share/url?url=${eu}&text=${et}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Telegram"
              className="flex items-center justify-center h-7 w-7 rounded bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-amber-400/40 transition-colors"
              data-testid="milestone-share-telegram"
            >
              <SiTelegram className="h-3 w-3" />
            </a>
            <a
              href={`https://wa.me/?text=${et}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on WhatsApp"
              className="flex items-center justify-center h-7 w-7 rounded bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-amber-400/40 transition-colors"
              data-testid="milestone-share-whatsapp"
            >
              <SiWhatsapp className="h-3 w-3" />
            </a>
            <button
              onClick={async () => {
                try {
                  if (navigator.share) {
                    await navigator.share({ title: "Barran Dodger — 500K push", text, url: SITE_URL });
                  } else {
                    await navigator.clipboard.writeText(text);
                  }
                } catch {}
              }}
              title="Share"
              className="flex items-center justify-center h-7 w-7 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 transition-colors"
              data-testid="milestone-share-native"
            >
              <Share2 className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
