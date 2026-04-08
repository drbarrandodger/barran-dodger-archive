import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Share2, Link2, Check, X, Mail } from "lucide-react";
import { SiX, SiFacebook, SiLinkedin, SiReddit, SiWhatsapp, SiTelegram } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { getShareMessages } from "@/lib/shareMessages";

export type ShareContext = "default";

/* ─── FloatingShareBar (bottom-left, appears after scroll 400px) ──── */
export function FloatingShareBar() {
  const { toast } = useToast();
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    const onScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location]);

  const msgs = getShareMessages(location);
  const eu = encodeURIComponent(msgs.pageUrl);
  const et = encodeURIComponent(msgs.email.subject);

  const links = [
    { name: "X", icon: <SiX className="h-4 w-4" />, href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(msgs.twitter)}` },
    { name: "Facebook", icon: <SiFacebook className="h-4 w-4" />, href: `https://www.facebook.com/sharer/sharer.php?u=${eu}&quote=${encodeURIComponent(msgs.facebook.slice(0, 500))}` },
    { name: "WhatsApp", icon: <SiWhatsapp className="h-4 w-4" />, href: `https://wa.me/?text=${encodeURIComponent(msgs.whatsapp)}` },
    { name: "Telegram", icon: <SiTelegram className="h-4 w-4" />, href: `https://t.me/share/url?url=${eu}&text=${encodeURIComponent(msgs.telegram)}` },
    { name: "LinkedIn", icon: <SiLinkedin className="h-4 w-4" />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${eu}&summary=${encodeURIComponent(msgs.linkedin.slice(0, 700))}` },
    { name: "Reddit", icon: <SiReddit className="h-4 w-4" />, href: `https://reddit.com/submit?url=${eu}&title=${encodeURIComponent(msgs.reddit)}` },
    { name: "Email", icon: <Mail className="h-4 w-4" />, href: `mailto:?subject=${et}&body=${encodeURIComponent(msgs.email.body)}` },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(msgs.clipboard);
      setCopied(true);
      toast({ title: "Message & Link Copied!", description: "Paste it anywhere. The truth depends on you." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: msgs.email.subject, text: msgs.twitter, url: msgs.pageUrl });
      } catch {}
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2" data-testid="floating-share-bar" data-pdf-hide>
      {isOpen && (
        <div className="bg-gray-950 border border-green-400/30 shadow-2xl shadow-green-400/10 rounded-xl p-3 space-y-2 animate-in slide-in-from-bottom-2">
          <p className="text-xs font-bold text-green-400 uppercase tracking-wider text-center px-2">
            Share This Page
          </p>
          <div className="grid grid-cols-4 gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${link.name}`}
                title={link.name}
                className="share-icon-pulse hover-elevate flex items-center justify-center h-9 w-9 rounded-md bg-gray-900 border border-green-400/30 text-green-400 hover:border-green-400/60 hover:bg-gray-800 transition-colors"
                data-testid={`floating-share-${link.name.toLowerCase()}`}
              >
                {link.icon}
              </a>
            ))}
            {typeof navigator !== "undefined" && "share" in navigator && (
              <button
                className="share-icon-pulse hover-elevate flex items-center justify-center h-9 w-9 rounded-md bg-gray-900 border border-green-400/30 text-green-400 hover:border-green-400/60 hover:bg-gray-800 transition-colors"
                onClick={nativeShare}
                title="Share via device"
                data-testid="floating-share-native"
              >
                <Share2 className="h-4 w-4" />
              </button>
            )}
          </div>
          <button
            className="w-full hover-elevate flex items-center justify-center gap-2 h-8 rounded-md bg-gray-900 border border-green-400/30 text-green-400 text-xs font-medium hover:bg-gray-800 transition-colors"
            onClick={copyToClipboard}
            data-testid="floating-share-copy"
          >
            {copied ? <Check className="h-3 w-3" /> : <Link2 className="h-3 w-3" />}
            {copied ? "Copied!" : "Copy Viral Message"}
          </button>
        </div>
      )}
      <button
        className={`h-12 w-12 rounded-full shadow-2xl flex items-center justify-center transition-all ${isOpen ? "bg-gray-800 text-gray-200" : "bg-green-500 text-gray-950 share-icon-pulse shadow-green-400/30"}`}
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-floating-share-toggle"
        title="Share this page"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}
      </button>
    </div>
  );
}

/* ─── InlineShareStrip (legacy compat / embeds) ───────────────────── */
interface InlineShareStripProps {
  message?: string;
  id?: string;
  context?: ShareContext;
  path?: string;
}

export function InlineShareStrip({ message, id = "default", path }: InlineShareStripProps) {
  const [location] = useLocation();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const effectivePath = path || location;
  const msgs = getShareMessages(effectivePath);
  const eu = encodeURIComponent(msgs.pageUrl);
  const et = encodeURIComponent(msgs.email.subject);

  const links = [
    { name: "X", icon: <SiX className="h-4 w-4" />, href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(msgs.twitter)}` },
    { name: "Facebook", icon: <SiFacebook className="h-4 w-4" />, href: `https://www.facebook.com/sharer/sharer.php?u=${eu}&quote=${encodeURIComponent(msgs.facebook.slice(0, 500))}` },
    { name: "WhatsApp", icon: <SiWhatsapp className="h-4 w-4" />, href: `https://wa.me/?text=${encodeURIComponent(msgs.whatsapp)}` },
    { name: "Telegram", icon: <SiTelegram className="h-4 w-4" />, href: `https://t.me/share/url?url=${eu}&text=${encodeURIComponent(msgs.telegram)}` },
    { name: "LinkedIn", icon: <SiLinkedin className="h-4 w-4" />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${eu}` },
    { name: "Reddit", icon: <SiReddit className="h-4 w-4" />, href: `https://reddit.com/submit?url=${eu}&title=${encodeURIComponent(msgs.reddit)}` },
    { name: "Email", icon: <Mail className="h-4 w-4" />, href: `mailto:?subject=${et}&body=${encodeURIComponent(msgs.email.body)}` },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(msgs.clipboard);
      setCopied(true);
      toast({ title: "Message & Link Copied!", description: "Paste it everywhere. Break the silence." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  return (
    <div className="bg-gray-950 border border-green-400/30 rounded-xl p-4 md:p-6" data-testid={`inline-share-strip-${id}`}>
      <p className="text-sm md:text-base font-bold text-center text-green-400 mb-4 uppercase tracking-wider">
        {message || "Share This Analysis"}
      </p>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${link.name}`}
            title={link.name}
            className="share-icon-pulse hover-elevate flex items-center justify-center h-10 w-10 rounded-md bg-gray-900 border border-green-400/30 text-green-400"
            data-testid={`inline-share-${id}-${link.name.toLowerCase()}`}
          >
            {link.icon}
          </a>
        ))}
        <button
          className="share-icon-pulse hover-elevate flex items-center justify-center h-10 w-10 rounded-md bg-gray-900 border border-green-400/30 text-green-400"
          onClick={copyToClipboard}
          title="Copy viral message"
          data-testid={`inline-share-${id}-copy`}
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

/* ─── CompactShare (for cards/document rows) ─────────────────────── */
interface CompactShareProps {
  path: string;
  title?: string;
}

export function CompactShare({ path }: CompactShareProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const msgs = getShareMessages(path);
  const eu = encodeURIComponent(msgs.pageUrl);
  const et = encodeURIComponent(msgs.email.subject);

  const links = [
    { name: "X", icon: <SiX />, href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(msgs.twitter)}` },
    { name: "Facebook", icon: <SiFacebook />, href: `https://www.facebook.com/sharer/sharer.php?u=${eu}&quote=${encodeURIComponent(msgs.facebook.slice(0, 400))}` },
    { name: "WhatsApp", icon: <SiWhatsapp />, href: `https://wa.me/?text=${encodeURIComponent(msgs.whatsapp)}` },
    { name: "LinkedIn", icon: <SiLinkedin />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${eu}` },
    { name: "Telegram", icon: <SiTelegram />, href: `https://t.me/share/url?url=${eu}&text=${encodeURIComponent(msgs.telegram)}` },
    { name: "Email", icon: <Mail />, href: `mailto:?subject=${et}&body=${encodeURIComponent(msgs.email.body)}` },
  ];

  const copyToClipboard = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(msgs.clipboard);
      setCopied(true);
      toast({ title: "Viral Message Copied!", description: "Spread the truth." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  const nativeShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      try {
        await navigator.share({ title: msgs.email.subject, text: msgs.twitter, url: msgs.pageUrl });
      } catch {}
    }
  };

  return (
    <div className="flex items-center gap-1 flex-wrap" data-testid={`compact-share-${path.replace(/\//g, "-")}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`Share on ${link.name}`}
          className="flex items-center justify-center h-7 w-7 rounded bg-gray-800 border border-green-400/20 text-green-400 hover:border-green-400/50 hover:bg-gray-700 transition-colors text-[11px]"
          data-testid={`compact-share-${link.name.toLowerCase()}`}
        >
          <span className="scale-[0.75]">{link.icon}</span>
        </a>
      ))}
      {typeof navigator !== "undefined" && "share" in navigator ? (
        <button
          onClick={nativeShare}
          title="Share…"
          className="flex items-center justify-center h-7 w-7 rounded bg-gray-800 border border-green-400/20 text-green-400 hover:border-green-400/50 hover:bg-gray-700 transition-colors"
        >
          <Share2 className="h-3 w-3" />
        </button>
      ) : (
        <button
          onClick={copyToClipboard}
          title="Copy viral message"
          className="flex items-center justify-center h-7 w-7 rounded bg-gray-800 border border-green-400/20 text-green-400 hover:border-green-400/50 hover:bg-gray-700 transition-colors"
        >
          {copied ? <Check className="h-3 w-3" /> : <Link2 className="h-3 w-3" />}
        </button>
      )}
    </div>
  );
}
