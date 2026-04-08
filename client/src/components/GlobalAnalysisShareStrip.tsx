import { useState } from "react";
import { useLocation } from "wouter";
import { Share2, Link2, Check, Mail } from "lucide-react";
import { SiX, SiFacebook, SiLinkedin, SiReddit, SiWhatsapp, SiTelegram } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { getShareMessages } from "@/lib/shareMessages";

const EXCLUDED = new Set([
  "/",
  "/store",
  "/donate",
  "/contact",
  "/visitors",
  "/spread-the-truth",
  "/video-commentary",
  "/the-truth",
  "/blockchain",
  "/archive",
  "/start-here",
  "/mission",
  "/research",
  "/evidence",
  "/prophetic-papers",
  "/gospel",
  "/church",
  "/media",
  "/publications",
  "/retrospective-statement",
  "/case-studies",
  "/josephs-coat",
  "/evidence-vault",
]);

export function GlobalAnalysisShareStrip() {
  const [location] = useLocation();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  if (EXCLUDED.has(location)) return null;

  const msgs = getShareMessages(location);
  const eu = encodeURIComponent(msgs.pageUrl);
  const et = encodeURIComponent(msgs.email.subject);

  const links = [
    {
      name: "X / Twitter",
      short: "X",
      icon: <SiX className="h-4 w-4" />,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(msgs.twitter)}`,
      hint: "Pre-loaded tweet with hashtags",
    },
    {
      name: "Facebook",
      short: "Facebook",
      icon: <SiFacebook className="h-4 w-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${eu}&quote=${encodeURIComponent(msgs.facebook.slice(0, 500))}`,
      hint: "Full post with hashtags",
    },
    {
      name: "WhatsApp",
      short: "WhatsApp",
      icon: <SiWhatsapp className="h-4 w-4" />,
      href: `https://wa.me/?text=${encodeURIComponent(msgs.whatsapp)}`,
      hint: "Pre-written message",
    },
    {
      name: "Telegram",
      short: "Telegram",
      icon: <SiTelegram className="h-4 w-4" />,
      href: `https://t.me/share/url?url=${eu}&text=${encodeURIComponent(msgs.telegram)}`,
      hint: "Pre-written message",
    },
    {
      name: "LinkedIn",
      short: "LinkedIn",
      icon: <SiLinkedin className="h-4 w-4" />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${eu}&summary=${encodeURIComponent(msgs.linkedin.slice(0, 700))}`,
      hint: "Professional post with hashtags",
    },
    {
      name: "Reddit",
      short: "Reddit",
      icon: <SiReddit className="h-4 w-4" />,
      href: `https://reddit.com/submit?url=${eu}&title=${encodeURIComponent(msgs.reddit)}`,
      hint: "Pre-loaded title",
    },
    {
      name: "Email",
      short: "Email",
      icon: <Mail className="h-4 w-4" />,
      href: `mailto:?subject=${et}&body=${encodeURIComponent(msgs.email.body)}`,
      hint: "Full email with subject & body",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(msgs.clipboard);
      setCopied(true);
      toast({
        title: "Viral Message Copied!",
        description: "Paste it to any platform. Every share matters.",
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: msgs.email.subject,
          text: msgs.twitter,
          url: msgs.pageUrl,
        });
      } catch {}
    }
  };

  return (
    <div
      className="border-t border-green-400/20 bg-gray-950/90 backdrop-blur-sm mt-16 py-12 px-4"
      data-testid="global-analysis-share-strip"
      data-pdf-hide
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2">
            Spread This Evidence
          </p>
          <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Every share is a record the suppression apparatus cannot erase. Each button opens with a pre-loaded message, hashtags, and a direct link — optimised for every platform.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${link.name}`}
              title={`${link.name} — ${link.hint}`}
              className="flex items-center gap-2 h-10 px-3 rounded-lg bg-gray-900 border border-green-400/25 text-green-400 text-sm font-medium hover:border-green-400/60 hover:bg-gray-800 transition-colors"
              data-testid={`global-share-${link.short.toLowerCase()}`}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.short}</span>
            </a>
          ))}

          <button
            onClick={copyToClipboard}
            title="Copy pre-loaded viral message"
            className="flex items-center gap-2 h-10 px-3 rounded-lg bg-gray-900 border border-green-400/25 text-green-400 text-sm font-medium hover:border-green-400/60 hover:bg-gray-800 transition-colors"
            data-testid="global-share-copy"
          >
            {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
            <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Message"}</span>
          </button>

          {typeof navigator !== "undefined" && "share" in navigator && (
            <button
              onClick={nativeShare}
              title="Share via system dialog"
              className="flex items-center gap-2 h-10 px-3 rounded-lg bg-green-500/10 border border-green-500/40 text-green-400 text-sm font-medium hover:bg-green-500/20 transition-colors"
              data-testid="global-share-native"
            >
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">Share…</span>
            </button>
          )}
        </div>

        <p className="text-xs text-gray-600 font-mono">{msgs.pageUrl}</p>

        <div className="pt-2 border-t border-gray-800">
          <p className="text-xs text-gray-600 uppercase tracking-widest">
            #Whistleblower #ICC #AustralianGovernment #HumanRights #BlockchainEvidence #BarranDodger #GovernmentAccountability
          </p>
        </div>
      </div>
    </div>
  );
}
