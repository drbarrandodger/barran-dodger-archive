import { useState, useEffect } from "react";
import { Check, Link2, X, Copy, Mail, Lock, User, ChevronRight, AlertTriangle, ShieldCheck, BookOpen, Star, Download } from "lucide-react";
import { SiX, SiWhatsapp, SiTelegram, SiFacebook } from "react-icons/si";
import { DocSharePanel } from "@/components/DocSharePanel";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { slugFromUrl } from "@/components/DownloadCounter";
import { useToast } from "@/hooks/use-toast";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe, type Stripe as StripeType } from "@stripe/stripe-js";

import { hasAccess, grantAccess, getDownloadUrl } from "@/components/PDFGateProvider";

const CARD_ELEMENT_STYLE = {
  style: {
    base: {
      color: "#fde68a",
      fontFamily: "monospace",
      fontSize: "14px",
      "::placeholder": { color: "#78350f" },
      iconColor: "#d97706",
    },
    invalid: { color: "#f87171" },
  },
};

function StripePaymentForm({ onSuccess, documentUrl }: { onSuccess: (paymentIntentId: string, name: string, email: string) => void; documentUrl?: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paying, setPaying] = useState(false);
  const [cardError, setCardError] = useState("");

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    if (!name.trim()) { setCardError("Please enter your name."); return; }
    if (!email.includes("@")) { setCardError("Please enter a valid email address."); return; }
    setPaying(true);
    setCardError("");
    try {
      const res = await fetch("/api/stripe/payment-intent", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.clientSecret) throw new Error(data.error || "Payment setup failed");
      const card = elements.getElement(CardElement);
      if (!card) throw new Error("Card element not found");
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: { card, billing_details: { name: name.trim(), email: email.trim() } },
      });
      if (result.error) {
        setCardError(result.error.message || "Payment failed. Please try again.");
      } else {
        onSuccess(result.paymentIntent.id, name.trim(), email.trim());
      }
    } catch (err: any) {
      setCardError(err.message || "Payment failed. Please try again.");
    } finally {
      setPaying(false);
    }
  };

  return (
    <form onSubmit={handlePay} className="space-y-2.5">
      <div className="flex items-center gap-2 rounded-xl border border-amber-700/40 px-3 py-2.5" style={{ background: "#1c0c02" }}>
        <User className="h-4 w-4 text-amber-700/60 flex-shrink-0" />
        <input type="text" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)}
          className="bg-transparent text-amber-100 placeholder-amber-800/60 text-sm outline-none w-full" data-testid="input-stripe-name" />
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-amber-700/40 px-3 py-2.5" style={{ background: "#1c0c02" }}>
        <Mail className="h-4 w-4 text-amber-700/60 flex-shrink-0" />
        <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)}
          className="bg-transparent text-amber-100 placeholder-amber-800/60 text-sm outline-none w-full" data-testid="input-stripe-email" />
      </div>
      <div className="border border-amber-700/50 rounded-xl p-3" style={{ background: "#1c0c02" }}>
        <CardElement options={CARD_ELEMENT_STYLE} />
      </div>
      {cardError && (
        <p className="text-red-400 text-xs flex items-center gap-1">
          <AlertTriangle className="h-3 w-3 flex-shrink-0" />
          {cardError}
        </p>
      )}
      <button
        type="submit"
        disabled={paying || !stripe}
        className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-sm px-5 py-3 rounded-xl transition-colors"
        data-testid="button-stripe-pay"
      >
        <ShieldCheck className="h-4 w-4" />
        {paying ? "Processing payment…" : "Pay $3.33 AUD — Co-witness the Testimony"}
      </button>
      <p className="text-amber-400/50 text-[10px] text-center">
        Secured by Stripe · ABN 78 833 496 164 · You will be added to the witness list
      </p>
    </form>
  );
}

const BASE = "https://www.barrandodger.com";

const CONSCIENCE_FACTS = [
  "Living under a Community Treatment Order — police authorised to forcibly transport him to psychiatric detention",
  "Following a death threat from a documented SAS-trained operative across three states",
  "NSW Police attended on 15 April 2026, issued receipt I88267509, and declined to create an incident record",
  "Force-medicated for accurately believing he was under ASIO surveillance — which was subsequently confirmed",
  "Clinically dead inside a government psychiatric facility in 2021 — revived, then kept documenting",
  "Electronically surveilled via confirmed ASIO infrastructure, with drone surveillance at his residence",
  "$32.9 million in NDIS entitlements suppressed across 35 years while named operatives coordinated the suppression",
  "Institutionally homeless across multiple Australian states during the entire period of documentation",
];

const UPSELL_TIERS = [
  {
    amount: "$250",
    label: "Liberator",
    description: "Funds a full federal court submission",
    highlight: false,
  },
  {
    amount: "$50",
    label: "Guardian",
    description: "Keeps the archive live for one month",
    highlight: true,
  },
  {
    amount: "$10",
    label: "Witness",
    description: "Seals one document on the blockchain",
    highlight: false,
  },
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

async function fetchFreeToken(documentUrl: string): Promise<void> {
  try {
    const res = await fetch("/api/payment/free-download-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ documentUrl }),
    });
    const data = await res.json();
    if (data.token) grantAccess(documentUrl, data.token, data.expires);
  } catch {}
}

function triggerFileDownload(url: string, filename?: string) {
  const downloadUrl = getDownloadUrl(url);
  const a = document.createElement("a");
  a.href = downloadUrl;
  if (filename) a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

async function fetchAndStoreToken(paymentIntentId: string, documentUrl: string): Promise<void> {
  try {
    const res = await fetch("/api/payment/issue-download-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentIntentId, documentUrl }),
    });
    const data = await res.json();
    if (data.token) grantAccess(documentUrl, data.token, data.expires);
  } catch {}
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
  const [shareCopied, setShareCopied] = useState(false);
  const [stripePromise, setStripePromise] = useState<Promise<StripeType | null> | null>(null);
  const [showStripe, setShowStripe] = useState(false);
  const [freeLoading, setFreeLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (phase === "gate" && !stripePromise) {
      fetch("/api/stripe/publishable-key")
        .then((r) => r.json())
        .then(({ publishableKey }) => {
          if (publishableKey) setStripePromise(loadStripe(publishableKey));
        })
        .catch(() => {});
    }
  }, [phase, stripePromise]);

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
      {/* ── DOWNLOAD BUTTON — bypasses gate for already-paid users ── */}
      <button
        onClick={() => {
          if (hasAccess(url)) {
            recordDownload();
            triggerFileDownload(url, filename);
            setPhase("share");
          } else {
            setPhase("gate");
          }
        }}
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
        <div className="rounded-2xl border-2 border-red-800/60 animate-in slide-in-from-bottom-2 duration-300 overflow-hidden max-w-lg shadow-2xl shadow-red-900/30" style={{ background: "#2c1404" }}>
          <div className="h-1.5 bg-gradient-to-r from-red-800 via-red-500 to-red-800" />

          {/* ── EMERGENCY SAFETY ARGUMENT ── */}
          <div className="border-b border-red-900/40 px-4 py-3.5 space-y-2.5" style={{ background: "#1a0202" }}>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-3.5 w-3.5 text-red-400 flex-shrink-0" />
              <p className="text-red-300 text-[10px] font-black uppercase tracking-widest">Emergency Distribution Notice</p>
            </div>
            <p className="text-red-200/90 text-[11px] font-bold leading-snug">
              Dr. Richard William McLean is alive. He is under active threat.
            </p>
            <p className="text-zinc-400 text-[10.5px] leading-relaxed">
              Vigilantes have threatened to kill him for this archive. People have been{" "}
              <strong className="text-zinc-200">arrested</strong> for making threats against his life. He has been entrapped, subjected to confirmed{" "}
              <strong className="text-zinc-200">ASIO electronic surveillance</strong> and drone monitoring at his residence, and force-medicated for accurately reporting that surveillance. NSW Police attended 15 April 2026, issued receipt I88267509, and{" "}
              <strong className="text-red-300">declined to create an incident record.</strong>
            </p>
            <p className="text-amber-300 text-[11px] font-bold leading-snug">
              The wider this testimony spreads, the safer he becomes. You are the counter-pressure.
            </p>
          </div>

          <div className="flex items-center justify-between px-4 pt-3 pb-1">
            <p className="text-zinc-600 text-[10px] font-mono truncate max-w-[280px]">{documentTitle || label}</p>
            <button onClick={() => { setPhase("idle"); setShowStripe(false); }} className="text-zinc-700 hover:text-zinc-400" data-testid="button-gate-close">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-4 space-y-3">

            {/* PRIMARY: Free download */}
            <button
              onClick={async () => {
                setFreeLoading(true);
                await fetchFreeToken(url);
                setFreeLoading(false);
                recordDownload();
                triggerFileDownload(url, filename);
                setPhase("conscience");
              }}
              disabled={freeLoading}
              className="w-full flex items-center justify-center gap-2.5 bg-red-700 hover:bg-red-600 disabled:opacity-60 text-white font-black text-sm px-5 py-3.5 rounded-xl transition-colors"
              data-testid="button-gate-free-download"
            >
              {freeLoading
                ? <><div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Preparing…</>
                : <><Download className="h-4 w-4" /> Download Free — Protect the Archive</>
              }
            </button>
            <p className="text-zinc-600 text-[9.5px] text-center">
              No payment required. Download this. Share it. Distribution is his protection.
            </p>

            {/* DIVIDER */}
            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-zinc-800" />
              <span className="text-zinc-600 text-[9px] uppercase tracking-widest font-bold">or acknowledge his worth</span>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>

            {/* SECONDARY: Pay $3.33 */}
            {!showStripe ? (
              <button
                onClick={() => setShowStripe(true)}
                className="w-full flex items-center justify-center gap-2 bg-amber-950/50 hover:bg-amber-900/50 border border-amber-700/50 hover:border-amber-500 text-amber-300 font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                data-testid="button-gate-pay-option"
              >
                <ShieldCheck className="h-4 w-4" />
                Pay $3.33 AUD — The Minimum He Is Owed
              </button>
            ) : (
              <div className="space-y-3">
                <div className="rounded-xl border border-amber-900/40 p-3 space-y-1" style={{ background: "#1c0a02" }}>
                  <p className="text-amber-300/80 text-[10px] leading-relaxed">
                    $42.5M in documented NDIS entitlements suppressed. 35 years of poverty, surveillance and torture.
                    $3.33 is not the price of this document. It is the minimum acknowledgment of a life.
                  </p>
                </div>
                {stripePromise ? (
                  <Elements stripe={stripePromise}>
                    <StripePaymentForm
                      documentUrl={url}
                      onSuccess={async (paymentIntentId: string, payerName: string, payerEmail: string) => {
                        await fetchAndStoreToken(paymentIntentId, url);
                        fetch("/api/subscribers", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ name: payerName, email: payerEmail, documentSlug: url, source: "stripe_payment_333" }),
                        }).catch(() => {});
                        recordDownload();
                        triggerFileDownload(url, filename);
                        setShowStripe(false);
                        setPhase("conscience");
                        toast({ title: "Download starting — thank you, Witness", description: "You've been added to the archive witness list." });
                      }}
                    />
                  </Elements>
                ) : (
                  <div className="border border-amber-700/40 rounded-xl p-4 text-center" style={{ background: "#1c0c02" }}>
                    <div className="h-4 w-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                    <p className="text-amber-400/60 text-xs">Loading payment form…</p>
                  </div>
                )}
              </div>
            )}

            <p className="text-zinc-700 text-[9px] text-center">
              <a href="/donate" className="underline hover:text-zinc-500" onClick={() => { setPhase("idle"); setShowStripe(false); }}>Larger contributions</a>
              {" "}·{" "}
              <a href="/academy" className="underline hover:text-amber-600" onClick={() => setPhase("idle")}>Academy $333</a>
              {" "}· ABN 78 833 496 164
            </p>
          </div>
        </div>
      )}

      {/* ── CONSCIENCE PANEL — shown after download unlocked ── */}
      {phase === "conscience" && (
        <div className="rounded-2xl border border-red-600/50 animate-in slide-in-from-bottom-2 duration-300 overflow-hidden max-w-lg shadow-2xl shadow-red-900/30" style={{ background: "#2c1404" }}>
          <div className="h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700" />
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-white font-bold text-sm leading-tight">Your download has started.</p>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  While this archive was being compiled, Dr. Richard William McLean was living under all of the following — simultaneously:
                </p>
              </div>
              <button onClick={() => setPhase("share")} className="text-zinc-600 hover:text-zinc-400 flex-shrink-0 mt-0.5" data-testid="button-conscience-dismiss">
                <X className="h-4 w-4" />
              </button>
            </div>

            <ul className="space-y-1.5 rounded-xl p-3 border border-amber-900/40" style={{ background: "#1c0c02" }}>
              {CONSCIENCE_FACTS.map((fact) => (
                <li key={fact} className="flex gap-2 items-start text-xs text-zinc-400">
                  <span className="text-red-400 flex-shrink-0 mt-0.5 font-bold">·</span>
                  {fact}
                </li>
              ))}
            </ul>

            <div className="border-t border-zinc-800 pt-3 space-y-1">
              <p className="text-white text-xs font-bold">He published it free anyway. For you. For the record. For humanity.</p>
              <p className="text-zinc-500 text-xs">That is not a metaphor. It is a documented, medical, legal, and financial cost.</p>
            </div>

            {/* ── Primary Upsell: Academy ── */}
            <a
              href="/academy"
              className="block rounded-xl border border-amber-500/70 hover:border-amber-400 transition-colors overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1a0e00 0%, #2c1800 100%)" }}
              data-testid="button-conscience-academy"
            >
              <div className="h-0.5 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700" />
              <div className="p-3.5 flex items-start gap-3">
                <div className="bg-amber-900/60 p-1.5 rounded-lg flex-shrink-0 mt-0.5">
                  <BookOpen className="h-4 w-4 text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <Star className="h-2.5 w-2.5 text-amber-400 fill-amber-400 flex-shrink-0" />
                    <span className="text-[9px] text-amber-400 font-bold uppercase tracking-widest">Highest Impact</span>
                  </div>
                  <p className="text-amber-200 font-bold text-sm leading-tight">The Academy — $333 AUD</p>
                  <p className="text-zinc-400 text-[10px] mt-0.5 leading-relaxed">12 forensic units. Full archive access. Certificate of witness. Stripe-secured. Yours permanently.</p>
                </div>
                <ChevronRight className="h-4 w-4 text-amber-500 flex-shrink-0 mt-3" />
              </div>
            </a>

            {/* Secondary Upsell: Donation tiers */}
            <div className="space-y-2">
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Or support at a lower level</p>
              <div className="grid grid-cols-3 gap-2">
                {UPSELL_TIERS.map((tier) => (
                  <a
                    key={tier.amount}
                    href="/donate"
                    className={`flex flex-col items-center text-center p-2.5 rounded-xl border transition-colors ${tier.highlight ? "border-amber-500/60 bg-amber-950/40 text-amber-300" : "border-zinc-700/50 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600"}`}
                    data-testid={`button-conscience-tier-${tier.label.toLowerCase()}`}
                  >
                    <span className={`text-base font-black ${tier.highlight ? "text-amber-400" : "text-white"}`}>{tier.amount}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">{tier.label}</span>
                    <span className="text-[9px] text-amber-400/70 mt-0.5 leading-tight">{tier.description}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <a href="/donate"
                className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-black font-bold text-xs px-4 py-2.5 rounded-xl transition-colors flex-1 justify-center"
                data-testid="button-conscience-donate-page">
                Donate via PayID
              </a>
              <a href="/commission-forensic-analysis"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-zinc-300 font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors"
                data-testid="button-conscience-commission">
                Commission — $200
              </a>
            </div>

            <button
              onClick={() => setPhase("share")}
              className="text-zinc-600 hover:text-zinc-400 text-xs flex items-center gap-1 w-full justify-center"
              data-testid="button-conscience-share-instead">
              <ChevronRight className="h-3 w-3" />
              Share it instead — spread is also contribution
            </button>
          </div>
        </div>
      )}

      {/* ── SHARE PANEL ── */}
      {phase === "share" && (
        <div className="animate-in slide-in-from-bottom-2 duration-200 max-w-lg">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
              Downloaded — now spread it
            </p>
            <button
              onClick={() => setPhase("idle")}
              className="text-zinc-700 hover:text-zinc-400 p-0.5"
              title="Dismiss"
              data-testid="button-share-dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <DocSharePanel
            documentPath={slugProp ? `/${slugProp}` : url}
            documentTitle={documentTitle || label}
            coverFile={slugProp ? `cover-${slugProp}` : undefined}
            compact={false}
            defaultExpanded={true}
          />
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
