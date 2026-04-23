import { useState } from "react";
import { Download, Check, Link2, X, Copy, Mail, CreditCard, Lock, Unlock, User, ChevronRight } from "lucide-react";
import { SiX, SiWhatsapp, SiTelegram, SiFacebook } from "react-icons/si";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { slugFromUrl } from "@/components/DownloadCounter";
import { useToast } from "@/hooks/use-toast";

const BASE = "https://www.barrandodger.com";
const PAYID = "rich@richmclean.com.au";
const MIN_DONATION = 1;

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
  documentTitle?: string;
}

type Phase = "idle" | "gate" | "conscience" | "share";
type GateTab = "pay" | "subscribe";

function triggerFileDownload(url: string, filename?: string) {
  const a = document.createElement("a");
  a.href = url;
  if (filename) a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function ViralDownloadButton({
  url,
  label = "Download",
  filename,
  className = "",
  shareText,
  size = "md",
  shareTheme = "green",
  slug: slugProp,
  documentTitle,
}: ViralDownloadButtonProps) {
  const slug = slugProp || slugFromUrl(url);
  const [phase, setPhase] = useState<Phase>("idle");
  const [gateTab, setGateTab] = useState<GateTab>("pay");
  const [payIdCopied, setPayIdCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: (data: { email: string; name: string; documentSlug: string; source: string }) =>
      apiRequest("POST", "/api/subscribers", data),
    onSuccess: () => {
      recordDownload();
      triggerFileDownload(url, filename);
      setPhase("conscience");
      toast({ title: "Subscribed — download starting", description: "You'll be notified when new analyses are published." });
    },
    onError: (err: any) => {
      if (err?.message?.includes("already") || err?.status === 400) {
        recordDownload();
        triggerFileDownload(url, filename);
        setPhase("conscience");
        toast({ title: "Already subscribed — download starting" });
      } else {
        setFormError("Something went wrong. Please try again.");
      }
    },
  });

  const { data } = useQuery<{ count: number }>({
    queryKey: ["/api/downloads", slug],
    queryFn: () =>
      fetch(`/api/downloads/${slug}`, { cache: "no-store" }).then((r) => r.json()),
    refetchInterval: 20000,
    staleTime: 0,
  });

  const count = data?.count ?? 0;

  const recordDownload = async () => {
    try {
      await fetch(`/api/downloads/${slug}/increment`, { method: "POST" });
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["/api/downloads", slug] });
      }, 1200);
    } catch {}
  };

  const handleUnlockViaPay = () => {
    recordDownload();
    triggerFileDownload(url, filename);
    setPhase("conscience");
    toast({ title: "Download starting", description: "Thank you for your contribution." });
  };

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    if (!name.trim()) return setFormError("Please enter your name.");
    if (!email.includes("@")) return setFormError("Please enter a valid email address.");
    subscribeMutation.mutate({ email: email.trim(), name: name.trim(), documentSlug: slug, source: "download_gate" });
  };

  const copyPayId = async () => {
    try {
      await navigator.clipboard.writeText(PAYID);
      setPayIdCopied(true);
      toast({ title: "PayID copied", description: `Open your banking app, paste, and send at least $${MIN_DONATION} AUD.` });
      setTimeout(() => setPayIdCopied(false), 4000);
    } catch {}
  };

  const pageUrl = typeof window !== "undefined" ? window.location.href : BASE;

  const defaultShare =
    shareText ||
    `I just downloaded evidence from the Dr. Richard McLean whistleblower archive — 2,304 primary source documents, 350,000+ downloads, blockchain-sealed, formally before the ICC. This archive cannot be suppressed.\n\n${pageUrl}\n\n#Whistleblower #ICC #BarranDodger #HumanRights`;

  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(defaultShare)}`;
  const waHref = `https://wa.me/?text=${encodeURIComponent(defaultShare)}`;
  const tgHref = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(defaultShare)}`;
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodeURIComponent(defaultShare.slice(0, 500))}`;

  const copyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(defaultShare);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch {}
  };

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-2.5 gap-2",
  };

  return (
    <div className="space-y-3">
      {/* ── DOWNLOAD BUTTON — opens gate, does not download directly ── */}
      <button
        onClick={() => setPhase("gate")}
        className={`inline-flex items-center font-semibold rounded-lg transition-colors ${sizeClasses[size]} ${className}`}
        data-testid={`viral-download-${slug.slice(0, 30)}`}
      >
        <Lock className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
        {label}
        {count > 0 && (
          <span className="inline-flex items-center gap-0.5 bg-white/15 rounded-full px-2 py-0.5 text-[10px] font-bold tabular-nums">
            {count.toLocaleString()} downloads
          </span>
        )}
      </button>

      {/* ── DOWNLOAD GATE MODAL ── */}
      {phase === "gate" && (
        <div className="rounded-2xl border border-amber-500/40 bg-zinc-950 animate-in slide-in-from-bottom-2 duration-300 overflow-hidden max-w-lg shadow-2xl">
          <div className="h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

          {/* Header */}
          <div className="flex items-start justify-between gap-3 px-5 pt-5 pb-3">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-amber-400 flex-shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">This document is gated</p>
                <p className="text-zinc-500 text-xs mt-0.5">
                  {documentTitle ? `"${documentTitle}"` : "This testimony"} — built under documented persecution. To access it, choose one option below.
                </p>
              </div>
            </div>
            <button onClick={() => setPhase("idle")} className="text-zinc-600 hover:text-zinc-400 flex-shrink-0" data-testid="button-gate-close">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-zinc-800 mx-5">
            <button
              onClick={() => setGateTab("pay")}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border-b-2 transition-colors ${gateTab === "pay" ? "border-amber-500 text-amber-400" : "border-transparent text-zinc-500 hover:text-zinc-300"}`}
              data-testid="tab-gate-pay"
            >
              <CreditCard className="h-3.5 w-3.5" />
              Donate $1+ AUD
            </button>
            <button
              onClick={() => setGateTab("subscribe")}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border-b-2 transition-colors ${gateTab === "subscribe" ? "border-primary text-primary" : "border-transparent text-zinc-500 hover:text-zinc-300"}`}
              data-testid="tab-gate-subscribe"
            >
              <Mail className="h-3.5 w-3.5" />
              Subscribe free
            </button>
          </div>

          {/* Tab: Pay */}
          {gateTab === "pay" && (
            <div className="p-5 space-y-4">
              <p className="text-zinc-400 text-xs leading-relaxed">
                Send a minimum of <span className="text-amber-400 font-bold">$1 AUD</span> via PayID to the Barran Dodger Legal & Ethical Trust Fund. Then click "Unlock my download" below.
              </p>
              <div className="bg-zinc-900 border border-amber-500/20 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">PayID</p>
                    <p className="text-white font-mono text-sm mt-0.5">{PAYID}</p>
                  </div>
                  <button
                    onClick={copyPayId}
                    className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-black font-bold text-xs px-3 py-2 rounded-lg transition-colors flex-shrink-0"
                    data-testid="button-gate-copy-payid"
                  >
                    {payIdCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {payIdCopied ? "Copied!" : "Copy PayID"}
                  </button>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-600">Minimum: <span className="text-amber-400 font-bold">$1 AUD</span></span>
                  <span className="text-zinc-600">ABN 78 833 496 164</span>
                </div>
                <ol className="space-y-1 text-xs text-zinc-500">
                  <li className="flex gap-2"><span className="text-amber-400 font-bold">1.</span> Open your banking app</li>
                  <li className="flex gap-2"><span className="text-amber-400 font-bold">2.</span> Go to Pay Anyone / PayID</li>
                  <li className="flex gap-2"><span className="text-amber-400 font-bold">3.</span> Paste PayID, enter $1+ AUD, send</li>
                  <li className="flex gap-2"><span className="text-amber-400 font-bold">4.</span> Return here and click Unlock</li>
                </ol>
              </div>
              <button
                onClick={handleUnlockViaPay}
                className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-black font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                data-testid="button-gate-unlock-pay"
              >
                <Unlock className="h-4 w-4" />
                I've transferred — unlock my download
              </button>
              <p className="text-zinc-700 text-[10px] text-center">
                This is an honor system. Your integrity is your contribution to truth.
              </p>
            </div>
          )}

          {/* Tab: Subscribe */}
          {gateTab === "subscribe" && (
            <div className="p-5 space-y-4">
              <p className="text-zinc-400 text-xs leading-relaxed">
                Can't donate right now? Leave your name and email. You'll be added to the Barran Dodger archive subscriber list and notified whenever new forensic analyses are published. Your download will start immediately.
              </p>
              <form onSubmit={handleSubscribeSubmit} className="space-y-3">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-9 pr-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary placeholder:text-zinc-600"
                    data-testid="input-gate-name"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-9 pr-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary placeholder:text-zinc-600"
                    data-testid="input-gate-email"
                  />
                </div>
                {formError && <p className="text-red-400 text-xs">{formError}</p>}
                <button
                  type="submit"
                  disabled={subscribeMutation.isPending}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-black font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                  data-testid="button-gate-subscribe-unlock"
                >
                  <Unlock className="h-4 w-4" />
                  {subscribeMutation.isPending ? "Subscribing..." : "Subscribe & unlock my download"}
                </button>
              </form>
              <p className="text-zinc-700 text-[10px] text-center">
                No spam. No marketing. You'll only hear from us when new analyses are published. Unsubscribe any time.
              </p>
              <button
                onClick={() => setGateTab("pay")}
                className="text-zinc-600 hover:text-zinc-500 text-xs flex items-center gap-1 w-full justify-center"
              >
                <ChevronRight className="h-3 w-3 rotate-180" />
                I'd rather donate $1
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── CONSCIENCE PANEL — shown after download unlocked ── */}
      {phase === "conscience" && (
        <div className="rounded-2xl border border-red-500/30 bg-zinc-950 animate-in slide-in-from-bottom-2 duration-300 overflow-hidden max-w-lg">
          <div className="h-0.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-white font-bold text-sm leading-tight">Your download has started.</p>
                <p className="text-zinc-400 text-xs mt-1">While this was being compiled, Dr. Richard William McLean was:</p>
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
              <span className="text-zinc-500 font-normal">Now share it — because silence is participation with a cleaner conscience.</span>
            </p>

            <div className="flex flex-wrap gap-2">
              <a href="/commission-forensic-analysis"
                className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-black font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                data-testid="button-conscience-commission">
                Commission an Analysis — $200
              </a>
              <a href="/donate"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-zinc-300 font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors"
                data-testid="button-conscience-donate-page">
                Donate more
              </a>
            </div>

            <button
              onClick={() => setPhase("share")}
              className="text-zinc-600 hover:text-zinc-500 text-xs underline w-full text-center"
              data-testid="button-conscience-share-instead">
              Share it instead
            </button>
          </div>
        </div>
      )}

      {/* ── SHARE PANEL ── */}
      {phase === "share" && (
        <div className={`flex flex-wrap items-center gap-2 rounded-xl px-3 py-2.5 animate-in slide-in-from-bottom-2 duration-200 ${shareTheme === "amber" ? "bg-amber-950/80 border border-amber-500/40" : "bg-gray-900/90 border border-green-400/40"}`}>
          <span className={`text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ${shareTheme === "amber" ? "text-amber-400" : "text-green-400"}`}>
            Downloaded — now spread it
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
              onClick={copyShareLink}
              title="Copy share message"
              className={`flex items-center justify-center h-7 w-7 rounded transition-colors ${shareTheme === "amber" ? "bg-black border border-amber-500/25 text-amber-400 hover:border-amber-500/60 hover:bg-amber-950" : "bg-gray-800 border border-green-400/25 text-green-400 hover:border-green-400/70 hover:bg-gray-700"}`}
            >
              {shareCopied ? (
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
        Every download is a gated permanent record
      </span>
    </div>
  );
}
