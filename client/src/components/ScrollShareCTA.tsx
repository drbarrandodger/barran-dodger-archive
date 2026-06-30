import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { X, Link2, Check } from "lucide-react";
import { SiX, SiWhatsapp } from "react-icons/si";
import { Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getShareMessages } from "@/lib/shareMessages";
import { useSiteStats } from "@/hooks/useSiteStats";

const STORAGE_KEY = "scroll-share-cta-shown-v1";
const TRIGGER_DEPTH = 75;

const EXCLUDED = new Set(["/donate", "/contact", "/store", "/admin/subscribers"]);

export function ScrollShareCTA() {
  const [location] = useLocation();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const { totalDownloadsFormatted } = useSiteStats();

  useEffect(() => {
    setVisible(false);
    setDismissed(false);

    if (EXCLUDED.has(location)) return;

    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setDismissed(true);
        return;
      }
    } catch {}

    const onScroll = () => {
      const scrolled = window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight) * 100;
      if (scrolled >= TRIGGER_DEPTH) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location]);

  const dismiss = () => {
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
    setDismissed(true);
  };

  const msgs = getShareMessages(location);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(msgs.clipboard);
      setCopied(true);
      toast({ title: "Copied!", description: "Paste anywhere — every share matters." });
      setTimeout(() => setCopied(false), 2000);
      setTimeout(dismiss, 3500);
    } catch {}
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: msgs.email.subject, text: msgs.twitter, url: msgs.pageUrl });
        dismiss();
      } catch {}
    }
  };

  if (!visible || dismissed) return null;

  const hasNativeShare = typeof navigator !== "undefined" && "share" in navigator;

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-[55] animate-in slide-in-from-bottom-4 duration-500"
      style={{ bottom: "calc(var(--court-strip-height, 0px) + 16px)" }}
      data-testid="scroll-share-cta"
      data-pdf-hide
    >
      <div className="bg-zinc-950 border border-orange-500/30 rounded-2xl shadow-2xl shadow-orange-500/20 px-5 py-4 max-w-xs w-[88vw]">
        <div className="flex items-start justify-between mb-2">
          <p className="text-orange-400 text-[11px] font-black uppercase tracking-widest leading-tight">
            You've seen enough. Share it.
          </p>
          <button
            onClick={dismiss}
            className="text-zinc-600 hover:text-zinc-400 ml-3 transition-colors shrink-0 mt-0.5"
            aria-label="Dismiss share prompt"
            data-testid="button-dismiss-scroll-share"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        <p className="text-zinc-500 text-[11px] mb-3 leading-relaxed">
          {totalDownloadsFormatted} downloads. No marketing. No PR. Just people sharing the truth.
        </p>

        <div className="flex gap-2">
          {hasNativeShare ? (
            <button
              onClick={nativeShare}
              className="flex-1 flex items-center justify-center gap-1.5 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/10 text-[11px] font-bold transition-colors"
              data-testid="scroll-share-native"
            >
              <Share2 className="h-3.5 w-3.5" /> Share
            </button>
          ) : (
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(msgs.twitter)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="flex-1 flex items-center justify-center gap-1.5 h-8 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20 text-[11px] font-bold transition-colors"
              data-testid="scroll-share-x"
            >
              <SiX className="h-3 w-3" /> Post
            </a>
          )}

          <a
            href={`https://wa.me/?text=${encodeURIComponent(msgs.whatsapp)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="flex-1 flex items-center justify-center gap-1.5 h-8 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-green-400/30 text-[11px] font-bold transition-colors"
            data-testid="scroll-share-whatsapp"
          >
            <SiWhatsapp className="h-3 w-3" /> WhatsApp
          </a>

          <button
            onClick={copy}
            className="flex-1 flex items-center justify-center gap-1.5 h-8 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white text-[11px] font-bold transition-colors"
            data-testid="scroll-share-copy"
          >
            {copied
              ? <><Check className="h-3 w-3 text-green-400" /> Done</>
              : <><Link2 className="h-3 w-3" /> Copy</>
            }
          </button>
        </div>
      </div>
    </div>
  );
}
