import { useState, useEffect } from "react";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe, type Stripe as StripeType } from "@stripe/stripe-js";
import { X, CreditCard, Mail, AlertTriangle, ShieldCheck, User, Lock, Download, Heart } from "lucide-react";

const ACCESS_KEY = "bd_doc_tokens_v3";

interface DocEntry { token: string; expires: number; }

function getStore(): Record<string, DocEntry> {
  try { return JSON.parse(localStorage.getItem(ACCESS_KEY) || "{}"); } catch { return {}; }
}

function saveStore(store: Record<string, DocEntry>) {
  try { localStorage.setItem(ACCESS_KEY, JSON.stringify(store)); } catch {}
}

function normalizeUrl(url: string) { return url.split("?")[0].toLowerCase(); }

export function hasAccess(url?: string): boolean {
  if (!url) return false;
  const entry = getStore()[normalizeUrl(url)];
  return !!entry && Date.now() < entry.expires && !!entry.token;
}

export function grantAccess(url: string, token: string, expires: number) {
  const store = getStore();
  store[normalizeUrl(url)] = { token, expires };
  saveStore(store);
}

export function getDownloadUrl(url: string): string {
  const entry = getStore()[normalizeUrl(url)];
  if (!entry?.token) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}token=${encodeURIComponent(entry.token)}`;
}

function isGatedHref(href: string): boolean {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return false;
  const lower = href.toLowerCase();
  if (lower.endsWith(".pdf") || lower.endsWith(".epub")) return true;
  if (lower.includes("/attached_assets/")) return true;
  if (lower.includes("/api/epub/")) return true;
  if (lower.includes("/api/forensic/pdf/") || lower.includes("/api/forensic/full-essay") || lower.includes("/api/forensic/bundle")) return true;
  if (lower.includes("/api/video-analysis/pdf/")) return true;
  if (lower.includes("/api/divine-reckoning/pdf")) return true;
  if (lower.includes("/api/evidence-registry/analyses-bundle")) return true;
  if (lower.includes("/api/archive/divine-download")) return true;
  if (/\/api\/essays\/[^/]+\/(pdf|epub)/.test(lower)) return true;
  return false;
}

function getDocumentName(url: string): string {
  try {
    const parts = url.split("/");
    const filename = parts[parts.length - 1].split("?")[0];
    return decodeURIComponent(filename.replace(/[-_]/g, " ").replace(/\.pdf$/i, "").replace(/\.epub$/i, ""));
  } catch { return "this document"; }
}

const CARD_STYLE = {
  style: {
    base: { color: "#fde68a", fontFamily: "monospace", fontSize: "14px", "::placeholder": { color: "#78350f" }, iconColor: "#d97706" },
    invalid: { color: "#f87171" },
  },
};

function TextInput({ icon: Icon, placeholder, value, onChange, type = "text", testId }: {
  icon: any; placeholder: string; value: string; onChange: (v: string) => void; type?: string; testId?: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-amber-700/40 px-3 py-2.5" style={{ background: "#1c0c02" }}>
      <Icon className="h-4 w-4 text-amber-700/60 flex-shrink-0" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent text-amber-100 placeholder-amber-800/60 text-sm outline-none w-full"
        data-testid={testId}
      />
    </div>
  );
}

function StripeForm({ onSuccess }: {
  onSuccess: (paymentIntentId: string, name: string, email: string) => void;
}) {
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
      if (!card) throw new Error("Card element not ready");
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card,
          billing_details: { name: name.trim(), email: email.trim() },
        },
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
      <TextInput icon={User} placeholder="Your full name" value={name} onChange={setName} testId="input-stripe-name" />
      <TextInput icon={Mail} placeholder="Your email address" value={email} onChange={setEmail} type="email" testId="input-stripe-email" />
      <div className="border border-amber-700/50 rounded-xl p-3" style={{ background: "#1c0c02" }}>
        <CardElement options={CARD_STYLE} />
      </div>
      {cardError && (
        <p className="text-red-400 text-xs flex items-center gap-1.5">
          <AlertTriangle className="h-3 w-3 flex-shrink-0" />{cardError}
        </p>
      )}
      <button
        type="submit"
        disabled={paying || !stripe}
        className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-sm px-5 py-3 rounded-xl transition-colors"
        data-testid="button-global-stripe-pay"
      >
        <ShieldCheck className="h-4 w-4" />
        {paying ? "Processing payment…" : "Pay $3.33 AUD — Unlock This Document"}
      </button>
      <p className="text-amber-400/40 text-[10px] text-center">
        Secured by Stripe · ABN 78 833 496 164 · One payment unlocks this document for 7 days
      </p>
    </form>
  );
}

async function subscribeWitness(name: string, email: string, documentUrl: string, source: string) {
  try {
    await fetch("/api/subscribers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        documentSlug: documentUrl,
        source,
      }),
    });
  } catch {}
}

export function PDFGateProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState("");
  const [pendingTarget, setPendingTarget] = useState("_blank");
  const [stripePromise, setStripePromise] = useState<Promise<StripeType | null> | null>(null);
  const [processingToken, setProcessingToken] = useState(false);
  const [showStripe, setShowStripe] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (!isGatedHref(href)) return;
      if (hasAccess(href)) {
        e.preventDefault();
        e.stopPropagation();
        triggerDownload(href, anchor.getAttribute("target") || "_self");
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      setPendingUrl(href);
      setPendingTarget(anchor.getAttribute("target") || "_self");
      setIsOpen(true);
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  useEffect(() => {
    if (isOpen && !stripePromise) {
      fetch("/api/stripe/publishable-key")
        .then((r) => r.json())
        .then(({ publishableKey }) => { if (publishableKey) setStripePromise(loadStripe(publishableKey)); })
        .catch(() => {});
    }
  }, [isOpen, stripePromise]);

  const triggerDownload = (url: string, target: string) => {
    const downloadUrl = getDownloadUrl(url);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.target = target || "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePaymentSuccess = async (paymentIntentId: string, payerName: string, payerEmail: string) => {
    setProcessingToken(true);
    try {
      const res = await fetch("/api/payment/issue-download-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentIntentId, documentUrl: pendingUrl }),
      });
      const data = await res.json();
      if (data.token) grantAccess(pendingUrl, data.token, data.expires);
    } catch {}
    await subscribeWitness(payerName, payerEmail, pendingUrl, "stripe_payment_333");
    setProcessingToken(false);
    setIsOpen(false);
    triggerDownload(pendingUrl, pendingTarget);
  };

  const handleFreeDownload = async () => {
    setProcessingToken(true);
    try {
      const res = await fetch("/api/payment/free-download-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentUrl: pendingUrl }),
      });
      const data = await res.json();
      if (data.token) grantAccess(pendingUrl, data.token, data.expires);
    } catch {}
    setProcessingToken(false);
    setIsOpen(false);
    triggerDownload(pendingUrl, pendingTarget);
  };

  const close = () => { setIsOpen(false); setShowStripe(false); };
  const docName = pendingUrl ? getDocumentName(pendingUrl) : "this document";

  return (
    <>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <div
            className="rounded-2xl border-2 border-amber-600/60 overflow-hidden w-full max-w-md shadow-2xl shadow-amber-900/40 animate-in zoom-in-95 duration-200 overflow-y-auto"
            style={{ background: "#2c1404", maxHeight: "92vh" }}
          >
            <div className="h-1.5 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700" />

            {/* ── EMERGENCY SAFETY BANNER ── */}
            <div className="px-5 pt-4 pb-4 border-b border-red-900/50 space-y-3" style={{ background: "#1a0202" }}>
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-red-300 text-[11px] font-black uppercase tracking-widest">Emergency Distribution Notice</p>
              </div>
              <p className="text-red-200/90 text-[11px] leading-relaxed font-medium">
                Dr. Richard William McLean is alive. He is under active threat.
              </p>
              <p className="text-zinc-400 text-[10.5px] leading-relaxed">
                Vigilantes have threatened to kill him for this archive. People have been <strong className="text-zinc-200">arrested</strong> for making threats against his life. He has been entrapped, subjected to confirmed <strong className="text-zinc-200">ASIO electronic surveillance</strong>, drone monitoring at his residence, and force-medicated for accurately reporting the surveillance. On 15 April 2026, NSW Police attended, issued receipt I88267509, and <strong className="text-red-300">declined to create an incident record.</strong>
              </p>
              <p className="text-amber-300 text-[11px] leading-relaxed font-bold">
                The more this testimony is downloaded, shared, and distributed — the safer he becomes. Erasure is only possible through silence. You are the counter-pressure.
              </p>
            </div>

            <div className="flex items-start justify-between gap-3 px-5 pt-3 pb-1">
              <div>
                <p className="text-zinc-400 text-[10px] font-mono truncate max-w-[290px]" title={docName}>{docName}</p>
              </div>
              <button onClick={close} className="text-zinc-700 hover:text-zinc-400 flex-shrink-0" data-testid="button-pdfgate-close">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-5">
              {processingToken && (
                <div className="flex flex-col items-center gap-3 py-6">
                  <div className="h-5 w-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
                  <p className="text-amber-400/80 text-xs">Preparing your download…</p>
                </div>
              )}

              {!processingToken && (
                <div className="space-y-3">

                  {/* PRIMARY: Free download */}
                  <button
                    onClick={handleFreeDownload}
                    className="w-full flex items-center justify-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-black text-sm px-5 py-3.5 rounded-xl transition-colors"
                    data-testid="button-pdfgate-free-download"
                  >
                    <Download className="h-4 w-4" />
                    Download Free — Protect the Archive
                  </button>
                  <p className="text-zinc-600 text-[9.5px] text-center -mt-1">
                    No payment required. Download this. Share it. The breadth of distribution is his only protection.
                  </p>

                  {/* DIVIDER */}
                  <div className="flex items-center gap-3 py-1">
                    <div className="flex-1 h-px bg-zinc-800" />
                    <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">or acknowledge his worth</span>
                    <div className="flex-1 h-px bg-zinc-800" />
                  </div>

                  {/* SECONDARY: Pay $3.33 */}
                  {!showStripe ? (
                    <button
                      onClick={() => { setShowStripe(true); }}
                      className="w-full flex items-center justify-center gap-2 bg-amber-950/50 hover:bg-amber-900/50 border border-amber-700/50 hover:border-amber-600 text-amber-300 font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                      data-testid="button-pdfgate-pay-option"
                    >
                      <Heart className="h-4 w-4" />
                      Pay $3.33 AUD — The Minimum He Is Owed
                    </button>
                  ) : (
                    <div className="space-y-3">
                      <div className="rounded-xl border border-amber-900/50 p-3 space-y-1.5" style={{ background: "#1c0a02" }}>
                        <p className="text-amber-300 text-[11px] font-bold">Why $3.33?</p>
                        <p className="text-amber-400/70 text-[10px] leading-relaxed">
                          The documented suppression of his NDIS entitlements alone exceeds <strong className="text-amber-300">$42.5 million AUD.</strong>{" "}
                          $3.33 is not the price of this document. It is the minimum acknowledgment of a life — 35 years of poverty, surveillance, torture, clinical death, and documented persecution — that produced the testimony you are about to read.
                        </p>
                      </div>
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
                    </div>
                  )}

                  {/* Academy */}
                  <a
                    href="/academy"
                    onClick={close}
                    className="flex items-center gap-3 rounded-xl border border-amber-900/40 hover:border-amber-700/60 transition-colors px-3.5 py-2.5"
                    style={{ background: "#1a0c01" }}
                    data-testid="button-gate-academy-upsell"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-amber-400/80 text-[10px] font-bold leading-tight">Full Archive Access — Enrol in the Academy — $333 AUD</p>
                      <p className="text-zinc-600 text-[9.5px] mt-0.5">12 forensic units · certificate of witness · Stripe-secured</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-amber-800 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </a>

                  <p className="text-zinc-700 text-[9px] text-center">
                    <a href="/donate" className="underline hover:text-zinc-500" onClick={close}>Larger contributions via PayID</a> · ABN 78 833 496 164
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
