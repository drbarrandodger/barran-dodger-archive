import { useState, useEffect } from "react";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe, type Stripe as StripeType } from "@stripe/stripe-js";
import { X, CreditCard, Mail, AlertTriangle, ShieldCheck, Check, Copy, Unlock, ChevronDown } from "lucide-react";

const ACCESS_KEY = "bd_doc_access_v2";
const PAYID = "rich@richmclean.com.au";

function getUnlockedDocs(): Record<string, number> {
  try {
    const raw = localStorage.getItem(ACCESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function hasAccess(url?: string): boolean {
  try {
    const docs = getUnlockedDocs();
    if (url) {
      const expires = docs[url];
      return !!expires && Date.now() < expires;
    }
    return false;
  } catch {
    return false;
  }
}

export function grantAccess(url?: string) {
  try {
    const docs = getUnlockedDocs();
    const key = url || "__global__";
    docs[key] = Date.now() + 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem(ACCESS_KEY, JSON.stringify(docs));
  } catch {}
}

function isGatedHref(href: string): boolean {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return false;
  const lower = href.toLowerCase();
  return (
    lower.endsWith(".pdf") ||
    lower.includes("/attached_assets/") ||
    lower.includes("/api/epub/") ||
    lower.includes("/api/download/")
  );
}

function getDocumentName(url: string): string {
  try {
    const parts = url.split("/");
    const filename = parts[parts.length - 1];
    return decodeURIComponent(filename.replace(/[-_]/g, " ").replace(/\.pdf$/i, "").replace(/\.epub$/i, ""));
  } catch {
    return "this document";
  }
}

const CARD_STYLE = {
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

function StripeForm({ onSuccess }: { onSuccess: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [paying, setPaying] = useState(false);
  const [cardError, setCardError] = useState("");

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setPaying(true);
    setCardError("");
    try {
      const res = await fetch("/api/stripe/payment-intent", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.clientSecret) throw new Error(data.error || "Payment setup failed");
      const card = elements.getElement(CardElement);
      if (!card) throw new Error("Card element not ready");
      const { error } = await stripe.confirmCardPayment(data.clientSecret, { payment_method: { card } });
      if (error) {
        setCardError(error.message || "Payment failed. Please try again.");
      } else {
        onSuccess();
      }
    } catch (err: any) {
      setCardError(err.message || "Payment failed. Please try again.");
    } finally {
      setPaying(false);
    }
  };

  return (
    <form onSubmit={handlePay} className="space-y-3">
      <div className="border border-amber-700/50 rounded-xl p-3" style={{ background: "#1c0c02" }}>
        <CardElement options={CARD_STYLE} />
      </div>
      {cardError && (
        <p className="text-red-400 text-xs flex items-center gap-1.5">
          <AlertTriangle className="h-3 w-3 flex-shrink-0" />
          {cardError}
        </p>
      )}
      <button
        type="submit"
        disabled={paying || !stripe}
        className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-sm px-5 py-3 rounded-xl transition-colors"
        data-testid="button-global-stripe-pay"
      >
        <ShieldCheck className="h-4 w-4" />
        {paying ? "Processing payment…" : "Pay $1 AUD — Download Now"}
      </button>
      <p className="text-amber-400/40 text-[10px] text-center">
        Secured by Stripe · ABN 78 833 496 164 · Unlocks this document on your device
      </p>
    </form>
  );
}

export function PDFGateProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");
  const [pendingTarget, setPendingTarget] = useState("_blank");
  const [gateTab, setGateTab] = useState<"pay" | "subscribe">("pay");
  const [stripePromise, setStripePromise] = useState<Promise<StripeType | null> | null>(null);
  const [showPayId, setShowPayId] = useState(false);
  const [payIdCopied, setPayIdCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (!isGatedHref(href)) return;
      if (hasAccess(href)) return;
      e.preventDefault();
      e.stopPropagation();
      setPendingUrl(href);
      setPendingTarget(anchor.getAttribute("target") || "_self");
      setIsOpen(true);
      setGateTab("pay");
      setFormError("");
      setSubscribeSuccess(false);
      setShowPayId(false);
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  useEffect(() => {
    if (isOpen && gateTab === "pay" && !stripePromise) {
      fetch("/api/stripe/publishable-key")
        .then((r) => r.json())
        .then(({ publishableKey }) => {
          if (publishableKey) setStripePromise(loadStripe(publishableKey));
        })
        .catch(() => {});
    }
  }, [isOpen, gateTab, stripePromise]);

  const triggerDownload = (url: string, target: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = target || "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePaymentSuccess = () => {
    grantAccess(pendingUrl);
    setIsOpen(false);
    triggerDownload(pendingUrl, pendingTarget);
  };

  const handleSubscribeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    if (!name.trim()) return setFormError("Please enter your name.");
    if (!email.includes("@")) return setFormError("Please enter a valid email address.");
    setSubscribing(true);
    try {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), name: name.trim(), documentSlug: pendingUrl, source: "pdf_gate" }),
      });
      if (res.ok) {
        setSubscribeSuccess(true);
        grantAccess(pendingUrl);
        setTimeout(() => {
          setIsOpen(false);
          triggerDownload(pendingUrl, pendingTarget);
        }, 1200);
      } else {
        const d = await res.json();
        setFormError(d.message || "Subscription failed. Please try again.");
      }
    } catch {
      setFormError("Network error. Please try again.");
    } finally {
      setSubscribing(false);
    }
  };

  const copyPayId = async () => {
    try {
      await navigator.clipboard.writeText(PAYID);
      setPayIdCopied(true);
      setTimeout(() => setPayIdCopied(false), 3000);
    } catch {}
  };

  const close = () => setIsOpen(false);

  const docName = pendingUrl ? getDocumentName(pendingUrl) : "this document";

  return (
    <>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.88)" }}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <div
            className="rounded-2xl border-2 border-amber-600/60 overflow-hidden w-full max-w-md shadow-2xl shadow-amber-900/40 animate-in zoom-in-95 duration-200"
            style={{ background: "#2c1404" }}
          >
            <div className="h-1.5 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700" />

            <div className="bg-red-950/80 border-b border-red-700/40 px-4 py-2 flex items-center gap-2">
              <AlertTriangle className="h-3.5 w-3.5 text-red-400 flex-shrink-0" />
              <p className="text-red-300 text-[11px] font-bold">
                This archive operates without government funding — your contribution is its lifeline.
              </p>
            </div>

            <div className="flex items-start justify-between gap-3 px-5 pt-4 pb-3">
              <div>
                <p className="text-amber-200 font-bold text-sm">Access this document — choose one option</p>
                <p className="text-amber-500/80 text-xs mt-0.5 font-mono truncate max-w-[300px]" title={docName}>
                  {docName}
                </p>
                <p className="text-amber-600/60 text-[10px] mt-0.5 leading-relaxed">
                  Compiled free while its author lived under death threat, forced medication &amp; homelessness.
                  ABN 78 833 496 164.
                </p>
              </div>
              <button onClick={close} className="text-amber-800 hover:text-amber-500 flex-shrink-0 mt-0.5" data-testid="button-pdfgate-close">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex border-b border-amber-800/50 mx-5">
              <button
                onClick={() => setGateTab("pay")}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border-b-2 transition-colors ${gateTab === "pay" ? "border-amber-500 text-amber-400" : "border-transparent text-amber-700/60 hover:text-amber-400"}`}
                data-testid="tab-pdfgate-pay"
              >
                <CreditCard className="h-3.5 w-3.5" />
                Pay $1 AUD
              </button>
              <button
                onClick={() => { setGateTab("subscribe"); setFormError(""); }}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border-b-2 transition-colors ${gateTab === "subscribe" ? "border-amber-500 text-amber-400" : "border-transparent text-amber-700/60 hover:text-amber-400"}`}
                data-testid="tab-pdfgate-subscribe"
              >
                <Mail className="h-3.5 w-3.5" />
                Subscribe free
              </button>
            </div>

            <div className="p-5">
              {gateTab === "pay" && (
                <div className="space-y-4">
                  <p className="text-amber-400/60 text-[10px] leading-relaxed">
                    One $1 AUD payment unlocks this document on your device. Each document requires its own contribution — every dollar helps keep this archive alive.
                    Larger contributions welcome at <a href="/donate" className="underline text-amber-400/80" onClick={close}>the donate page</a>.
                  </p>

                  {stripePromise ? (
                    <Elements stripe={stripePromise}>
                      <StripeForm onSuccess={handlePaymentSuccess} />
                    </Elements>
                  ) : (
                    <div className="border border-amber-700/40 rounded-xl p-4 text-center" style={{ background: "#1c0c02" }}>
                      <div className="h-4 w-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                      <p className="text-amber-400/60 text-xs">Loading secure payment form…</p>
                    </div>
                  )}

                  <div>
                    <button
                      onClick={() => setShowPayId((v) => !v)}
                      className="flex items-center gap-1 text-amber-700/60 hover:text-amber-500 text-[10px] underline underline-offset-2"
                      data-testid="button-pdfgate-toggle-payid"
                    >
                      <ChevronDown className={`h-3 w-3 transition-transform ${showPayId ? "rotate-180" : ""}`} />
                      Prefer bank transfer? Use PayID instead (honour system)
                    </button>
                    {showPayId && (
                      <div className="mt-2 border border-amber-800/30 rounded-xl p-3 space-y-2" style={{ background: "#1a0a02" }}>
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="text-amber-400/50 text-[9px] uppercase tracking-widest font-bold">PayID</p>
                            <p className="text-white font-mono text-xs">{PAYID}</p>
                          </div>
                          <button
                            onClick={copyPayId}
                            className="flex items-center gap-1 bg-amber-800/50 hover:bg-amber-700/50 text-amber-200 text-[10px] px-2 py-1 rounded-lg transition-colors"
                            data-testid="button-pdfgate-copy-payid"
                          >
                            {payIdCopied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                            {payIdCopied ? "Copied" : "Copy"}
                          </button>
                        </div>
                        <p className="text-amber-400/40 text-[9px]">Send $1+ AUD, then click below on your honour.</p>
                        <button
                          onClick={() => {
                            grantAccess(pendingUrl);
                            close();
                            triggerDownload(pendingUrl, pendingTarget);
                          }}
                          className="w-full flex items-center justify-center gap-1.5 bg-amber-800/40 hover:bg-amber-700/40 text-amber-200 text-xs px-4 py-2 rounded-lg transition-colors"
                          data-testid="button-pdfgate-unlock-honour"
                        >
                          <Unlock className="h-3.5 w-3.5" />
                          I've transferred — unlock on my honour
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {gateTab === "subscribe" && (
                <div className="space-y-3">
                  {subscribeSuccess ? (
                    <div className="flex flex-col items-center gap-2 py-4">
                      <div className="h-10 w-10 rounded-full bg-green-900/60 border border-green-500/40 flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-400" />
                      </div>
                      <p className="text-green-400 font-bold text-sm">Subscribed! Starting your download…</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribeSubmit} className="space-y-3">
                      <p className="text-amber-400/60 text-[10px] leading-relaxed">
                        Join the archive mailing list to unlock this document free. You'll receive important updates when new evidence is published.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 rounded-xl border border-amber-700/40 px-3 py-2.5" style={{ background: "#1c0c02" }}>
                          <input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-transparent text-amber-100 placeholder-amber-800/60 text-sm outline-none w-full"
                            data-testid="input-pdfgate-name"
                          />
                        </div>
                        <div className="flex items-center gap-2 rounded-xl border border-amber-700/40 px-3 py-2.5" style={{ background: "#1c0c02" }}>
                          <Mail className="h-4 w-4 text-amber-700/60 flex-shrink-0" />
                          <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent text-amber-100 placeholder-amber-800/60 text-sm outline-none w-full"
                            data-testid="input-pdfgate-email"
                          />
                        </div>
                      </div>
                      {formError && (
                        <p className="text-red-400 text-xs flex items-center gap-1.5">
                          <AlertTriangle className="h-3 w-3 flex-shrink-0" />
                          {formError}
                        </p>
                      )}
                      <button
                        type="submit"
                        disabled={subscribing}
                        className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 disabled:opacity-50 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                        data-testid="button-pdfgate-subscribe-submit"
                      >
                        <Mail className="h-4 w-4" />
                        {subscribing ? "Subscribing…" : "Subscribe & Download Free"}
                      </button>
                      <p className="text-amber-400/40 text-[10px] text-center">
                        No spam. Archive updates only. Unsubscribe any time.
                      </p>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
