import { useEffect, useRef, useState } from "react";
import { SiX, SiWhatsapp } from "react-icons/si";
import { Copy, Share2 } from "lucide-react";

const SITE_HANDLE = "@bazdod";
const SITE_URL = "https://barrandodger.com";
const HASHTAGS = "#CannotBeErased #Whistleblower #AustraliaCorruption";

interface SelectionPos {
  x: number;
  y: number;
}

export function TextSelectionShare() {
  const [quote, setQuote] = useState("");
  const [pos, setPos] = useState<SelectionPos | null>(null);
  const [copied, setCopied] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleSelectionChange() {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) {
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(() => {
          setPos(null);
          setQuote("");
        }, 200);
        return;
      }
      const text = sel.toString().trim();
      if (text.length < 25 || text.length > 600) {
        setPos(null);
        setQuote("");
        return;
      }

      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setQuote(text);
      setPos({
        x: rect.left + rect.width / 2 + window.scrollX,
        y: rect.top + window.scrollY - 12,
      });
    }

    function handleMouseUp() {
      setTimeout(handleSelectionChange, 10);
    }

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setPos(null);
        setQuote("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!pos || !quote) return null;

  const pageUrl = `${SITE_URL}${window.location.pathname}`;
  const shortQuote = quote.length > 200 ? quote.slice(0, 197) + "…" : quote;

  const tweetText = `"${shortQuote}"\n\n— ${SITE_URL}\n${HASHTAGS}`;
  const whatsappText = `"${shortQuote}"\n\nSource: ${pageUrl}\n${HASHTAGS}`;

  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&via=${SITE_HANDLE.replace("@", "")}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`"${quote}"\n\n— ${pageUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: do nothing */
    }
  };

  return (
    <div
      ref={popoverRef}
      style={{
        position: "absolute",
        left: Math.max(90, Math.min(pos.x, window.innerWidth - 90 + window.scrollX)),
        top: pos.y,
        transform: "translate(-50%, -100%)",
        zIndex: 9999,
      }}
      className="pointer-events-auto"
    >
      <div className="flex items-center gap-1 bg-[#1a2744] border border-[#e9a00a]/40 rounded-full px-2 py-1.5 shadow-2xl shadow-black/60 select-none">
        <span className="text-[10px] font-semibold text-[#e9a00a]/70 uppercase tracking-widest pl-1 pr-1 hidden sm:block">
          Share quote
        </span>
        <a
          href={twitterHref}
          target="_blank"
          rel="noopener noreferrer"
          title="Tweet this quote"
          className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          onClick={() => { setPos(null); setQuote(""); }}
        >
          <SiX className="h-3.5 w-3.5" />
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          title="Share to WhatsApp"
          className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 hover:bg-[#25D366]/30 text-white transition-colors"
          onClick={() => { setPos(null); setQuote(""); }}
        >
          <SiWhatsapp className="h-3.5 w-3.5" />
        </a>
        <button
          onClick={handleCopy}
          title={copied ? "Copied!" : "Copy quote with link"}
          className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 hover:bg-[#e9a00a]/20 text-white transition-colors"
        >
          {copied ? (
            <Share2 className="h-3.5 w-3.5 text-[#e9a00a]" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
      <div
        className="mx-auto w-2 h-2 bg-[#1a2744] border-r border-b border-[#e9a00a]/40 rotate-45 -mt-1"
        style={{ width: 8, height: 8 }}
      />
    </div>
  );
}
