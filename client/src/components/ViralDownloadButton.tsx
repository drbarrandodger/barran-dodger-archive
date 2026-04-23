import { useState } from "react";
import { Download, Check, Link2, X, Copy, Mail } from "lucide-react";
import { SiX, SiWhatsapp, SiTelegram, SiFacebook } from "react-icons/si";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { slugFromUrl } from "@/components/DownloadCounter";
import { useToast } from "@/hooks/use-toast";

const BASE = "https://www.barrandodger.com";
const PAYID = "rich@richmclean.com.au";

const CONSCIENCE_FACTS = [
  "Living under a Community Treatment Order — police authorised to forcibly transport him to psychiatric detention",
  "Following a death threat from a documented SAS-trained operative across three states",
  "NSW Police attended the death threat on 15 April 2026, issued receipt I88267509, and declined to create an incident record",
  "Force-medicated for accurately believing he was under ASIO surveillance — which was subsequently confirmed",
  "Clinically dead inside a government psychiatric facility in 2021 — revived",
  "Electronically surveilled via confirmed ASIO infrastructure, with drone surveillance documented at his residence",
  "$32.9 million in NDIS entitlements suppressed across 35 years",
  "Institutionally homeless across multiple Australian states during the period of documentation",
];

interface ViralDownloadButtonProps {
  url: string;
  label?: string;
  filename?: string;
  className?: string;
  shareText?: string;
  size?: "sm" | "md" | "lg";
  shareTheme?: "green" | "amber";
  slug?: string;
}

type Phase = "idle" | "conscience" | "share";

export function ViralDownloadButton({
  url,
  label = "Download",
  filename,
  className = "",
  shareText,
  size = "md",
  shareTheme = "green",
  slug: slugProp,
}: ViralDownloadButtonProps) {
  const slug = slugProp || slugFromUrl(url);
  const [phase, setPhase] = useState<Phase>("idle");
  const [copied, setCopied] = useState(false);
  const [payIdCopied, setPayIdCopied] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const emailMutation = useMutation({
    mutationFn: (email: string) => apiRequest("POST", "/api/subscribers", { email }),
    onSuccess: () => {
      setEmailSent(true);
      toast({ title: "You're on the list", description: "We'll notify you when new analyses are published." });
    },
    onError: () => toast({ title: "Already subscribed", description: "This email is already on the list." }),
  });

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
    setTimeout(() => setPhase("conscience"), 900);
  };

  const copyPayId = async () => {
    try {
      await navigator.clipboard.writeText(PAYID);
      setPayIdCopied(true);
      toast({ title: "PayID copied", description: "Open your banking app and paste to donate." });
      setTimeout(() => setPayIdCopied(false), 3000);
    } catch {}
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

      {/* Conscience panel — shown immediately after download */}
      {phase === "conscience" && (
        <div className="rounded-2xl border border-red-500/30 bg-zinc-950 animate-in slide-in-from-bottom-2 duration-300 overflow-hidden max-w-lg">
          <div className="h-0.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-white font-bold text-sm leading-tight">You just downloaded this for free.</p>
                <p className="text-zinc-400 text-xs mt-1">While it was being compiled, Dr. Richard William McLean was:</p>
              </div>
              <button onClick={() => setPhase("share")} className="text-zinc-600 hover:text-zinc-400 flex-shrink-0 mt-0.5" data-testid="button-conscience-dismiss">
                <X className="h-4 w-4" />
              </button>
            </div>

            <ul className="space-y-1.5">
              {CONSCIENCE_FACTS.map((fact) => (
                <li key={fact} className="flex gap-2 items-start text-xs text-zinc-400">
                  <span className="text-red-400 flex-shrink-0 mt-0.5 font-bold">·</span>
                  {fact}
                </li>
              ))}
            </ul>

            <p className="text-zinc-300 text-xs font-semibold border-t border-zinc-800 pt-3">
              He published it free anyway. For you. For the record. For humanity.
              <br />
              <span className="text-zinc-500 font-normal">If that sits uncomfortably — it should. That discomfort is accurate.</span>
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={copyPayId}
                className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-black font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                data-testid="button-conscience-donate"
              >
                {payIdCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {payIdCopied ? "PayID Copied" : `Donate via PayID — ${PAYID}`}
              </button>
              <a href="/commission-forensic-analysis"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-zinc-300 font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors"
                data-testid="button-conscience-commission">
                Commission an Analysis
              </a>
            </div>

            {/* Email capture */}
            <div className="border-t border-zinc-800 pt-3">
              {emailSent ? (
                <p className="text-green-400 text-xs flex items-center gap-1.5"><Check className="h-3 w-3" /> You're on the list — we'll notify you when new analyses are published.</p>
              ) : (
                <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); if (emailInput.includes("@")) emailMutation.mutate(emailInput); }}>
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Get notified of new analyses — your@email.com"
                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-zinc-500"
                    data-testid="input-download-email-subscribe"
                  />
                  <button
                    type="submit"
                    disabled={emailMutation.isPending}
                    className="flex items-center gap-1.5 bg-zinc-700 hover:bg-zinc-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors flex-shrink-0"
                    data-testid="button-download-email-subscribe"
                  >
                    <Mail className="h-3 w-3" />
                    {emailMutation.isPending ? "..." : "Notify me"}
                  </button>
                </form>
              )}
            </div>

            <button
              onClick={() => setPhase("share")}
              className="text-zinc-600 hover:text-zinc-500 text-xs underline w-full text-center"
              data-testid="button-conscience-share-instead">
              Skip — I just want to share it
            </button>
          </div>
        </div>
      )}

      {/* Share panel — shown after conscience panel is dismissed */}
      {phase === "share" && (
        <div className={`flex flex-wrap items-center gap-2 rounded-xl px-3 py-2.5 animate-in slide-in-from-bottom-2 duration-200 ${shareTheme === "amber" ? "bg-amber-950/80 border border-amber-500/40" : "bg-gray-900/90 border border-green-400/40"}`}>
          <span className={`text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ${shareTheme === "amber" ? "text-amber-400" : "text-green-400"}`}>
            Downloaded — now share it
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {[
              { href: twitterHref, label: "Share on X", icon: <SiX className="h-3 w-3" /> },
              { href: waHref, label: "Share on WhatsApp", icon: <SiWhatsapp className="h-3 w-3" /> },
              { href: tgHref, label: "Share on Telegram", icon: <SiTelegram className="h-3 w-3" /> },
              { href: fbHref, label: "Share on Facebook", icon: <SiFacebook className="h-3 w-3" /> },
            ].map(({ href, label: title, icon }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className={`flex items-center justify-center h-7 w-7 rounded transition-colors ${shareTheme === "amber" ? "bg-black border border-amber-500/25 text-amber-400 hover:border-amber-500/60 hover:bg-amber-950" : "bg-gray-800 border border-green-400/25 text-green-400 hover:border-green-400/70 hover:bg-gray-700"}`}
              >
                {icon}
              </a>
            ))}
            <button
              onClick={copyLink}
              title="Copy share message"
              className={`flex items-center justify-center h-7 w-7 rounded transition-colors ${shareTheme === "amber" ? "bg-black border border-amber-500/25 text-amber-400 hover:border-amber-500/60 hover:bg-amber-950" : "bg-gray-800 border border-green-400/25 text-green-400 hover:border-green-400/70 hover:bg-gray-700"}`}
            >
              {copied ? (
                <Check className={`h-3 w-3 ${shareTheme === "amber" ? "text-amber-300" : "text-green-300"}`} />
              ) : (
                <Link2 className="h-3 w-3" />
              )}
            </button>
          </div>
          <button
            onClick={() => setPhase("idle")}
            className={`flex items-center justify-center h-6 w-6 rounded transition-colors ml-auto ${shareTheme === "amber" ? "text-amber-700 hover:text-amber-400" : "text-gray-600 hover:text-gray-400"}`}
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
  totalDownloads: totalDownloadsProp,
  className = "",
}: {
  totalDownloads?: number;
  className?: string;
}) {
  const { data: dlData } = useQuery<{ total: number }>({
    queryKey: ["/api/downloads/total"],
    staleTime: 60000,
  });
  const displayTotal = dlData?.total ?? totalDownloadsProp ?? 350000;

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 bg-green-950/30 border border-green-500/20 rounded-xl px-5 py-3 text-center ${className}`}
      data-testid="download-social-proof-banner"
    >
      <span className="text-green-400 font-bold text-sm tabular-nums">
        {displayTotal.toLocaleString()}+ verified downloads
      </span>
      <span className="text-gray-500 text-sm hidden md:inline">·</span>
      <span className="text-gray-400 text-xs md:text-sm">
        6 continents · 2,304 documents · blockchain-sealed · ICC-submitted
      </span>
      <span className="text-gray-500 text-sm hidden md:inline">·</span>
      <span className="text-green-300 text-xs font-semibold uppercase tracking-wide">
        Every download is a permanent record
      </span>
    </div>
  );
}
