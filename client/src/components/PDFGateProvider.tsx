import { useState, useEffect } from "react";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe, type Stripe as StripeType } from "@stripe/stripe-js";
import { X, CreditCard, Mail, AlertTriangle, ShieldCheck, Check, Copy, Unlock, ChevronDown, User, Heart } from "lucide-react";

const ACCESS_KEY = "bd_doc_tokens_v3";
const PAYID = "rich@richmclean.com.au";

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
        {paying ? "Processing payment…" : "Pay $3.33 AUD — Co-witness the Testimony"}
      </button>
      <p className="text-amber-400/40 text-[10px] text-center">
        Secured by Stripe · ABN 78 833 496 164 · You will be added to the archive witness list
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
  const [gateTab, setGateTab] = useState<"pay" | "subscribe">("pay");
  const [stripePromise, setStripePromise] = useState<Promise<StripeType | null> | null>(null);
  const [showPayId, setShowPayId] = useState(false);
  const [payIdCopied, setPayIdCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [processingToken, setProcessingToken] = useState(false);

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
        .then(({ publishableKey }) => { if (publishableKey) setStripePromise(loadStripe(publishableKey)); })
        .catch(() => {});
    }
  }, [isOpen, gateTab, stripePromise]);

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

  const handleSubscribeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    if (!name.trim()) return setFormError("Please enter your name.");
    if (!email.includes("@")) return setFormError("Please enter a valid email address.");
    setSubscribing(true);
    try {
      const res = await fetch("/api/payment/issue-free-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), name: name.trim(), documentUrl: pendingUrl }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        grantAccess(pendingUrl, data.token, data.expires);
        setSubscribeSuccess(true);
        setTimeout(() => { setIsOpen(false); triggerDownload(pendingUrl, pendingTarget); }, 1400);
      } else {
        setFormError(data.message || data.error || "Subscription failed. Please try again.");
      }
    } catch {
      setFormError("Network error. Please try again.");
    } finally {
      setSubscribing(false);
    }
  };

  const handleHonour = async () => {
    try {
      const res = await fetch("/api/payment/issue-honour-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentUrl: pendingUrl }),
      });
      const data = await res.json();
      if (data.token) grantAccess(pendingUrl, data.token, data.expires);
    } catch {}
    setIsOpen(false);
    triggerDownload(pendingUrl, pendingTarget);
  };

  const copyPayId = async () => {
    try { await navigator.clipboard.writeText(PAYID); setPayIdCopied(true); setTimeout(() => setPayIdCopied(false), 3000); } catch {}
  };

  const close = () => setIsOpen(false);
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

            {/* Justice appeal banner */}
            <div className="px-5 pt-4 pb-3 border-b border-amber-900/40" style={{ background: "#1a0802" }}>
              <div className="flex items-start gap-2.5">
                <Heart className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-amber-200/80 text-[11px] leading-relaxed">
                  <strong className="text-amber-200">This man has served humanity for 35+ years</strong> — stalked, forcibly medicated,
                  denied legal aid, stripped of income, surveilled by agencies, and brought to the edge of death
                  to suppress the truth he carries. Every document in this archive was produced at personal cost
                  that most humans will never face. <strong className="text-amber-300">$3.33 is a legitimate act of justice.</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start justify-between gap-3 px-5 pt-3 pb-2">
              <div>
                <p className="text-amber-200 font-bold text-sm">Choose how to access this testimony</p>
                <p className="text-amber-500/80 text-xs mt-0.5 font-mono truncate max-w-[290px]" title={docName}>{docName}</p>
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
                Pay $3.33 AUD
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
              {processingToken && (
                <div className="flex flex-col items-center gap-3 py-6">
                  <div className="h-5 w-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
                  <p className="text-amber-400/80 text-xs">Verifying payment &amp; preparing your download…</p>
                  <p className="text-amber-600/50 text-[10px]">Adding you to the witness list…</p>
                </div>
              )}

              {!processingToken && gateTab === "pay" && (
                <div className="space-y-4">

                  {/* Angel number + justice pitch */}
                  <div className="rounded-xl border border-amber-900/50 p-3.5 space-y-2" style={{ background: "#1c0a02" }}>
                    <p className="text-amber-300 text-[11px] font-bold tracking-wide flex items-center gap-1.5">
                      <span className="text-amber-500">333</span> — The Angel Number of Divine Witness
                    </p>
                    <p className="text-amber-400/70 text-[10.5px] leading-relaxed">
                      Dr. Richard McLean (Barran Dodger) has documented government corruption, assassination attempts,
                      identity theft, forced psychiatric detention and systematic erasure — <strong className="text-amber-300">formally submitted to the ICC</strong>,
                      blockchain-sealed, and available to the world despite every attempt to silence it.
                    </p>
                    <p className="text-amber-400/70 text-[10.5px] leading-relaxed">
                      He has done this <strong className="text-amber-300">without legal aid, without income, under surveillance</strong>,
                      and under conditions designed to produce death — not as a metaphor, but as a documented,
                      evidenced conclusion. The people who should have protected him did not.
                    </p>
                    <p className="text-amber-200 text-[10.5px] leading-relaxed font-medium">
                      <strong>$3.33 is your receipt of this covenant.</strong> Not charity — justice.
                      You are rewarding a man for a service to humanity that cost him everything.
                      For less than a coffee, you become a co-witness. Every download is a declaration.
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

                  {/* PayID option */}
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
                        <p className="text-amber-400/40 text-[9px]">Send $3.33+ AUD. Reference: "Witness 333". Then click below on your honour.</p>
                        <button
                          onClick={handleHonour}
                          className="w-full flex items-center justify-center gap-1.5 bg-amber-800/40 hover:bg-amber-700/40 text-amber-200 text-xs px-4 py-2 rounded-lg transition-colors"
                          data-testid="button-pdfgate-unlock-honour"
                        >
                          <Unlock className="h-3.5 w-3.5" />
                          I've transferred — unlock on my honour
                        </button>
                      </div>
                    )}
                  </div>

                  <p className="text-amber-400/30 text-[9px] text-center">
                    Larger contributions: <a href="/donate" className="underline text-amber-400/60" onClick={close}>/donate</a> · ABN 78 833 496 164
                  </p>
                </div>
              )}

              {!processingToken && gateTab === "subscribe" && (
                <div className="space-y-3">
                  {subscribeSuccess ? (
                    <div className="flex flex-col items-center gap-2 py-4">
                      <div className="h-10 w-10 rounded-full bg-green-900/60 border border-green-500/40 flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-400" />
                      </div>
                      <p className="text-green-400 font-bold text-sm">Welcome, Witness. Downloading now…</p>
                      <p className="text-amber-400/50 text-[10px] text-center">You'll be notified when new testimony is published.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribeSubmit} className="space-y-3">
                      <div className="rounded-xl border border-amber-900/50 p-3 space-y-1.5" style={{ background: "#1c0a02" }}>
                        <p className="text-amber-300/90 text-[11px] font-bold">Free access — join the witness list</p>
                        <p className="text-amber-400/60 text-[10px] leading-relaxed">
                          This archive depends on people who care about truth. Subscribe to unlock this document
                          free and receive updates when new evidence, analyses, or testimony is published.
                          <strong className="text-amber-300"> If you are able to contribute $3.33, please consider doing so</strong> —
                          it is a direct act of justice for a man who has given everything to document it.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <TextInput icon={User} placeholder="Your full name" value={name} onChange={setName} testId="input-pdfgate-name" />
                        <TextInput icon={Mail} placeholder="Your email address" value={email} onChange={setEmail} type="email" testId="input-pdfgate-email" />
                      </div>
                      {formError && (
                        <p className="text-red-400 text-xs flex items-center gap-1.5">
                          <AlertTriangle className="h-3 w-3 flex-shrink-0" />{formError}
                        </p>
                      )}
                      <button type="submit" disabled={subscribing}
                        className="w-full flex items-center justify-center gap-2 bg-red-800 hover:bg-red-700 disabled:opacity-50 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                        data-testid="button-pdfgate-subscribe-submit"
                      >
                        <Mail className="h-4 w-4" />
                        {subscribing ? "Subscribing…" : "Join the Witness List & Download Free"}
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
