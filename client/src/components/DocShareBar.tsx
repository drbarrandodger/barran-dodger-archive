import { useState } from "react";
import { useLocation } from "wouter";
import { Link2, Check, Share2, Mail } from "lucide-react";
import { SiX, SiFacebook, SiLinkedin, SiWhatsapp, SiTelegram, SiReddit } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { getShareMessages } from "@/lib/shareMessages";

interface DocShareBarProps {
  path?: string;
  label?: string;
  compact?: boolean;
}

export function DocShareBar({ path, label = "Share This Document", compact = false }: DocShareBarProps) {
  const [location] = useLocation();
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const msgs = getShareMessages(path ?? location);
  const eu = encodeURIComponent(msgs.pageUrl);

  const links = [
    {
      name: "X",
      icon: <SiX className="h-3.5 w-3.5" />,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(msgs.twitter)}`,
      color: "hover:bg-zinc-800 hover:border-zinc-500",
    },
    {
      name: "Facebook",
      icon: <SiFacebook className="h-3.5 w-3.5" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${eu}&quote=${encodeURIComponent(msgs.facebook.slice(0, 500))}`,
      color: "hover:bg-blue-950 hover:border-blue-600",
    },
    {
      name: "WhatsApp",
      icon: <SiWhatsapp className="h-3.5 w-3.5" />,
      href: `https://wa.me/?text=${encodeURIComponent(msgs.whatsapp)}`,
      color: "hover:bg-green-950 hover:border-green-600",
    },
    {
      name: "Telegram",
      icon: <SiTelegram className="h-3.5 w-3.5" />,
      href: `https://t.me/share/url?url=${eu}&text=${encodeURIComponent(msgs.telegram)}`,
      color: "hover:bg-sky-950 hover:border-sky-500",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="h-3.5 w-3.5" />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${eu}&summary=${encodeURIComponent(msgs.linkedin.slice(0, 700))}`,
      color: "hover:bg-blue-950 hover:border-blue-400",
    },
    {
      name: "Reddit",
      icon: <SiReddit className="h-3.5 w-3.5" />,
      href: `https://reddit.com/submit?url=${eu}&title=${encodeURIComponent(msgs.reddit)}`,
      color: "hover:bg-orange-950 hover:border-orange-500",
    },
    {
      name: "Email",
      icon: <Mail className="h-3.5 w-3.5" />,
      href: `mailto:?subject=${encodeURIComponent(msgs.email.subject)}&body=${encodeURIComponent(msgs.email.body)}`,
      color: "hover:bg-purple-950 hover:border-purple-500",
    },
  ];

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(msgs.clipboard);
      setCopied(true);
      toast({ title: "Message Copied!", description: "Paste it anywhere. Every share matters." });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({ title: "Copy failed", variant: "destructive" });
    }
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: msgs.email.subject, text: msgs.twitter, url: msgs.pageUrl });
      } catch {}
    }
  };

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 flex-wrap" data-testid="doc-share-bar-compact">
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 mr-1">Share:</span>
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Share on ${l.name} — pre-loaded message & hashtags`}
            className={`flex items-center justify-center w-7 h-7 rounded-lg border border-white/10 text-white/50 transition-all ${l.color}`}
            data-testid={`doc-share-${l.name.toLowerCase()}`}
          >
            {l.icon}
          </a>
        ))}
        <button
          onClick={copyMessage}
          title="Copy pre-loaded message"
          className="flex items-center justify-center w-7 h-7 rounded-lg border border-white/10 text-white/50 hover:bg-yellow-950 hover:border-yellow-600 transition-all"
          data-testid="doc-share-copy"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Link2 className="h-3.5 w-3.5" />}
        </button>
        {typeof navigator !== "undefined" && "share" in navigator && (
          <button
            onClick={nativeShare}
            title="Share via device"
            className="flex items-center justify-center w-7 h-7 rounded-lg border border-white/10 text-white/50 hover:bg-green-950 hover:border-green-500 transition-all"
            data-testid="doc-share-native"
          >
            <Share2 className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className="rounded-xl border border-green-500/20 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3"
      style={{ background: "rgba(0,30,10,0.4)" }}
      data-testid="doc-share-bar"
    >
      <div className="flex-shrink-0">
        <p className="text-[10px] font-mono uppercase tracking-widest text-green-400/70 mb-0.5">{label}</p>
        <p className="text-[10px] text-white/30 leading-snug">Pre-loaded message + hashtags on every platform</p>
      </div>
      <div className="flex items-center gap-1.5 flex-wrap">
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Share on ${l.name}`}
            className={`flex items-center gap-1.5 h-8 px-2.5 rounded-lg border border-white/10 text-white/60 text-xs font-medium transition-all ${l.color}`}
            data-testid={`doc-share-${l.name.toLowerCase()}`}
          >
            {l.icon}
            <span className="hidden sm:inline">{l.name}</span>
          </a>
        ))}
        <button
          onClick={copyMessage}
          title="Copy pre-loaded viral message"
          className="flex items-center gap-1.5 h-8 px-2.5 rounded-lg border border-white/10 text-white/60 text-xs font-medium hover:bg-yellow-950 hover:border-yellow-600 transition-all"
          data-testid="doc-share-copy"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Link2 className="h-3.5 w-3.5" />}
          <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
        </button>
        {typeof navigator !== "undefined" && "share" in navigator && (
          <button
            onClick={nativeShare}
            title="Share via system"
            className="flex items-center gap-1.5 h-8 px-2.5 rounded-lg border border-green-500/30 text-green-400 text-xs font-medium hover:bg-green-900/30 transition-all"
            data-testid="doc-share-native"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>
        )}
      </div>
    </div>
  );
}
