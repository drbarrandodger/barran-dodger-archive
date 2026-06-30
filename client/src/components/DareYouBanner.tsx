import { useState, useEffect, useCallback } from "react";
import { X, Share2, Copy, CheckCheck, MessageCircle } from "lucide-react";

const SHARE_TEXT = `🔥 I DARE YOU TO PROVE ME WRONG.

3,643 primary source government documents. 459,910+ downloads. Bitcoin Block 897,241 sealed. 623 propositions — zero contradictions. Zero defamation actions.

35 years of documented persecution of Australian whistleblower Dr Richard McLean by 13+ government agencies.

Read it. Prove it wrong. I dare you.

👉 barrandodger.com`;

const SESSION_KEY = "dare-banner-dismissed";
const SCROLL_THRESHOLD = 400;
const DELAY_MS = 20000;

export default function DareYouBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shown, setShown] = useState(false);

  const show = useCallback(() => {
    if (!shown && !sessionStorage.getItem(SESSION_KEY)) {
      setVisible(true);
      setShown(true);
    }
  }, [shown]);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(show, DELAY_MS);

    const onScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) show();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [show]);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem(SESSION_KEY, "1");
    setTimeout(() => setVisible(false), 400);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const el = document.createElement("textarea");
      el.value = SHARE_TEXT;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "I DARE YOU TO PROVE ME WRONG",
          text: SHARE_TEXT,
          url: "https://www.barrandodger.com",
        });
      } catch {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT)}`,
      "_blank",
      "noopener noreferrer"
    );
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[80] transition-transform duration-500 ease-out ${
        dismissed ? "translate-y-full" : "translate-y-0"
      }`}
      role="banner"
      aria-label="Challenge banner"
      data-testid="dare-you-banner"
    >
      <div className="bg-[#1a2744] border-t-4 border-[#e9a00a] shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">

          <div className="flex-1 min-w-0">
            <p className="text-[#e9a00a] font-bold text-sm sm:text-base leading-tight tracking-wide uppercase">
              ⚡ I DARE YOU TO PROVE ME WRONG
            </p>
            <p className="text-white/70 text-xs sm:text-sm mt-0.5 leading-snug">
              3,643 documents · 623 propositions · zero contradictions · zero defamation actions ·{" "}
              <a
                href="/open-challenge"
                className="text-[#e9a00a] underline underline-offset-2 hover:text-amber-300 transition-colors"
                data-testid="dare-banner-challenge-link"
              >
                Read the challenge →
              </a>
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleNativeShare}
              data-testid="dare-banner-share-btn"
              className="flex items-center gap-1.5 bg-[#e9a00a] hover:bg-amber-500 text-[#1a2744] font-bold text-xs sm:text-sm px-3 py-2 rounded-lg transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>

            <button
              onClick={handleWhatsApp}
              data-testid="dare-banner-whatsapp-btn"
              title="Share on WhatsApp"
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-green-500 text-white font-bold text-xs sm:text-sm px-3 py-2 rounded-lg transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>

            <button
              onClick={handleCopy}
              data-testid="dare-banner-copy-btn"
              title="Copy challenge text"
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm px-3 py-2 rounded-lg transition-colors border border-white/20"
            >
              {copied ? (
                <CheckCheck className="w-3.5 h-3.5 text-green-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
            </button>

            <button
              onClick={dismiss}
              data-testid="dare-banner-dismiss-btn"
              aria-label="Dismiss challenge banner"
              className="text-white/40 hover:text-white/80 transition-colors p-1 ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
