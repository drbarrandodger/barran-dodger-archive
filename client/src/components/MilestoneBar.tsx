import { useQuery } from "@tanstack/react-query";
import { SiX, SiReddit, SiTelegram, SiWhatsapp } from "react-icons/si";
import { Share2, TrendingUp } from "lucide-react";

const MILESTONE = 500_000;
const SITE_URL = "https://www.barrandodger.com";

function shareText(total: number) {
  const remaining = (MILESTONE - total).toLocaleString();
  return `${total.toLocaleString()} downloads of the Barran Dodger whistleblower archive. Only ${remaining} away from 500,000. Zero marketing. Zero PR. Just people sharing the truth.\n\n306 PDFs · Blockchain-sealed · ICC Article 7 · UNHCR Geneva filed · AI: 603/603 verified · Zero contradictions\n\n${SITE_URL}\n\n#BarranDodger #CannotBeErased #Whistleblower #ICC #UNHCR #AustralianGovernment #HumanRights #NDISFraud #RomeStatute #BlockchainEvidence #DrRichardMcLean #GovernmentCorruption #WyongCourt`;
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
      className="w-full px-4 py-3"
      style={{
        background: "#04060f",
        borderBottom: "1px solid rgba(132,204,22,0.2)"
      }}
      data-testid="milestone-bar"
      data-pdf-hide
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <TrendingUp className="h-3.5 w-3.5 shrink-0 lime-glow" style={{ color: "#84cc16" }} />
              <span className="text-xs font-bold uppercase tracking-widest lime-glow" style={{ color: "#84cc16" }}>
                {total.toLocaleString()} downloads — {pct.toFixed(1)}% to 500K
                {daysToMilestone !== null && remaining > 0 && (
                  <span className="ml-2 font-normal normal-case tracking-normal" style={{ color: "rgba(132,204,22,0.55)" }}>
                    · ~{daysToMilestone} {daysToMilestone === 1 ? "day" : "days"} at current pace
                  </span>
                )}
              </span>
            </div>
            <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div
                className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000"
                style={{
                  width: `${pct}%`,
                  background: "linear-gradient(90deg, #ff6914 0%, #84cc16 100%)"
                }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>0</span>
              <span className="text-[10px] font-bold" style={{ color: "#ff6914" }}>
                {remaining.toLocaleString()} to go
              </span>
              <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>500,000</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[10px] uppercase tracking-widest hidden sm:block" style={{ color: "rgba(255,255,255,0.25)" }}>Push it:</span>
            {[
              { href: `https://twitter.com/intent/tweet?text=${et}`, icon: <SiX className="h-3 w-3" />, title: "Post on X / Twitter", testid: "milestone-share-x" },
              { href: `https://reddit.com/submit?url=${eu}&title=${encodeURIComponent(`${total.toLocaleString()} downloads — the archive Australia tried to bury`)}`, icon: <SiReddit className="h-3 w-3" />, title: "Post on Reddit", testid: "milestone-share-reddit" },
              { href: `https://t.me/share/url?url=${eu}&text=${et}`, icon: <SiTelegram className="h-3 w-3" />, title: "Share on Telegram", testid: "milestone-share-telegram" },
              { href: `https://wa.me/?text=${et}`, icon: <SiWhatsapp className="h-3 w-3" />, title: "Share on WhatsApp", testid: "milestone-share-whatsapp" },
            ].map(({ href, icon, title, testid }) => (
              <a
                key={testid}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className="flex items-center justify-center h-7 w-7 rounded transition-colors"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.45)"
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "#84cc16";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(132,204,22,0.4)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
                data-testid={testid}
              >
                {icon}
              </a>
            ))}
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
              className="flex items-center justify-center h-7 w-7 rounded transition-colors donate-pulse"
              style={{
                background: "rgba(255,105,20,0.12)",
                border: "1px solid rgba(255,105,20,0.35)",
                color: "#ff6914"
              }}
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
