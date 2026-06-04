import { useState } from "react";
import { useLocation } from "wouter";
import { Share2, Link2, Check, Mail, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { SiX, SiFacebook, SiLinkedin, SiReddit, SiWhatsapp, SiTelegram } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { getShareMessages } from "@/lib/shareMessages";

const coverImages = import.meta.glob('../assets/images/cover-*.png', { eager: true }) as Record<string, { default: string }>;
const docImages = import.meta.glob('../assets/images/doc-*.png', { eager: true }) as Record<string, { default: string }>;
const miscImages = import.meta.glob('../assets/images/*.png', { eager: true }) as Record<string, { default: string }>;

function getImgSrc(name: string): string | undefined {
  if (!name) return undefined;
  const key = `../assets/images/${name}.png`;
  return coverImages[key]?.default ?? docImages[key]?.default ?? miscImages[key]?.default;
}

function deriveSlug(path: string): string {
  return path.replace(/^\//, "").replace(/\//g, "-").toLowerCase();
}

const EXCLUDED = new Set(["/store", "/donate", "/contact", "/visitors"]);

const PLATFORM_META: Record<string, { hint: string; charLimit: number }> = {
  "X / Twitter": { hint: "280 chars — hashtags included", charLimit: 280 },
  Facebook:      { hint: "Full post with hashtags",        charLimit: 63206 },
  WhatsApp:      { hint: "Pre-written message",            charLimit: 65536 },
  Telegram:      { hint: "Pre-written message",            charLimit: 4096 },
  LinkedIn:      { hint: "Professional post",              charLimit: 1300 },
  Reddit:        { hint: "Pre-loaded post title",          charLimit: 300 },
  Email:         { hint: "Full email with body",           charLimit: 99999 },
};

export function GlobalAnalysisShareStrip() {
  const [location] = useLocation();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("X / Twitter");
  const [showPreview, setShowPreview] = useState(false);

  if (EXCLUDED.has(location)) return null;

  const msgs = getShareMessages(location);
  const eu = encodeURIComponent(msgs.pageUrl);

  const slug = deriveSlug(location);
  const coverSrc = getImgSrc(`cover-${slug}`) ?? getImgSrc(`doc-cover-${slug}`);

  const links = [
    {
      name: "X / Twitter",
      short: "X",
      icon: <SiX className="h-4 w-4" />,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(msgs.twitter)}`,
      hint: "Pre-loaded tweet with hashtags",
      text: msgs.twitter,
    },
    {
      name: "Facebook",
      short: "Facebook",
      icon: <SiFacebook className="h-4 w-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${eu}&quote=${encodeURIComponent(msgs.facebook.slice(0, 500))}`,
      hint: "Full post with hashtags",
      text: msgs.facebook,
    },
    {
      name: "WhatsApp",
      short: "WhatsApp",
      icon: <SiWhatsapp className="h-4 w-4" />,
      href: `https://wa.me/?text=${encodeURIComponent(msgs.whatsapp)}`,
      hint: "Pre-written message",
      text: msgs.whatsapp,
    },
    {
      name: "Telegram",
      short: "Telegram",
      icon: <SiTelegram className="h-4 w-4" />,
      href: `https://t.me/share/url?url=${eu}&text=${encodeURIComponent(msgs.telegram)}`,
      hint: "Pre-written message",
      text: msgs.telegram,
    },
    {
      name: "LinkedIn",
      short: "LinkedIn",
      icon: <SiLinkedin className="h-4 w-4" />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${eu}&summary=${encodeURIComponent(msgs.linkedin.slice(0, 700))}`,
      hint: "Professional post with hashtags",
      text: msgs.linkedin,
    },
    {
      name: "Reddit",
      short: "Reddit",
      icon: <SiReddit className="h-4 w-4" />,
      href: `https://reddit.com/submit?url=${eu}&title=${encodeURIComponent(msgs.reddit)}`,
      hint: "Pre-loaded title",
      text: msgs.reddit,
    },
    {
      name: "Email",
      short: "Email",
      icon: <Mail className="h-4 w-4" />,
      href: `mailto:?subject=${encodeURIComponent(msgs.email.subject)}&body=${encodeURIComponent(msgs.email.body)}`,
      hint: "Full email with subject & body",
      text: msgs.email.body,
    },
  ];

  const activePlatform = links.find((l) => l.name === selectedPlatform) ?? links[0];
  const activeMeta = PLATFORM_META[selectedPlatform] ?? { hint: "", charLimit: 99999 };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(msgs.clipboard);
      setCopied(true);
      toast({
        title: "Viral Message Copied!",
        description: "Paste it to any platform. Every share protects him.",
      });
      setTimeout(() => setCopied(false), 2500);
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

  return (
    <div
      className="border-t border-red-900/20 mt-16 py-10 px-4"
      style={{ background: "linear-gradient(180deg, #0a0101 0%, #050000 100%)" }}
      data-testid="global-analysis-share-strip"
      data-pdf-hide
    >
      <div className="max-w-3xl mx-auto space-y-5">

        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2 mb-1">
            <AlertTriangle className="h-3.5 w-3.5 text-red-400" />
            <p className="text-[10px] font-black uppercase tracking-widest text-red-300">
              Share This — His Safety Requires Distribution
            </p>
          </div>
          <p className="text-xs text-zinc-500 max-w-xl mx-auto leading-relaxed">
            Every platform button opens with a unique pre-loaded message, relevant hashtags, and a direct link.
            Click a platform to preview exactly what will be shared — then share it.
          </p>
        </div>

        {coverSrc && (
          <div className="flex justify-center">
            <div className="flex items-center gap-3 bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-2.5 max-w-sm">
              <img src={coverSrc} alt="Document cover" className="h-14 w-10 object-cover rounded flex-shrink-0" loading="lazy" decoding="async" />
              <div className="min-w-0">
                <p className="text-zinc-300 text-[10px] font-bold leading-snug line-clamp-2">{msgs.email.subject.replace(/ \| .*$/, "")}</p>
                <div className="flex gap-1 mt-1">
                  <span className="text-[7px] bg-red-900/50 border border-red-700/40 text-red-400 px-1 py-0.5 rounded font-bold">ICC</span>
                  <span className="text-[7px] bg-amber-900/50 border border-amber-700/40 text-amber-400 px-1 py-0.5 rounded font-bold">BLOCKCHAIN</span>
                  <span className="text-[7px] bg-zinc-800 border border-zinc-700 text-zinc-400 px-1 py-0.5 rounded font-bold">FREE</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setSelectedPlatform(link.name);
                setShowPreview(true);
              }}
              title={`${link.name} — ${link.hint}`}
              className={`flex items-center gap-2 h-9 px-3 rounded-lg border text-xs font-semibold transition-colors ${
                selectedPlatform === link.name && showPreview
                  ? "bg-red-900/40 border-red-600/60 text-red-300"
                  : "bg-gray-900 border-zinc-700 text-zinc-300 hover:border-red-800/50 hover:text-red-400 hover:bg-red-950/20"
              }`}
              data-testid={`global-share-${link.short.toLowerCase()}`}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.short}</span>
            </button>
          ))}

          <button
            onClick={copyToClipboard}
            title="Copy pre-loaded viral message"
            className="flex items-center gap-2 h-9 px-3 rounded-lg bg-gray-900 border border-zinc-700 text-zinc-300 text-xs font-semibold hover:border-amber-600/50 hover:text-amber-300 hover:bg-amber-950/20 transition-colors"
            data-testid="global-share-copy"
          >
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Link2 className="h-4 w-4" />}
            <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Message"}</span>
          </button>

          {typeof navigator !== "undefined" && "share" in navigator && (
            <button
              onClick={nativeShare}
              title="Share via system dialog"
              className="flex items-center gap-2 h-9 px-3 rounded-lg bg-green-900/20 border border-green-800/40 text-green-400 text-xs font-semibold hover:bg-green-900/40 transition-colors"
              data-testid="global-share-native"
            >
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">Share…</span>
            </button>
          )}
        </div>

        {showPreview && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
                  {selectedPlatform} — {activeMeta.hint}
                </span>
                <span
                  className={`ml-2 text-[8px] font-mono ${
                    activePlatform.text.length > activeMeta.charLimit ? "text-red-400" : "text-zinc-600"
                  }`}
                >
                  {activePlatform.text.length} chars
                </span>
              </div>
              <button
                onClick={() => setShowPreview(false)}
                className="text-zinc-700 hover:text-zinc-400"
                data-testid="global-share-preview-close"
              >
                <ChevronUp className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="text-zinc-300 text-[10.5px] leading-relaxed whitespace-pre-line line-clamp-8">
              {activePlatform.text}
            </p>
            <a
              href={activePlatform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-red-700 hover:bg-red-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
              data-testid={`global-share-open-${activePlatform.short.toLowerCase()}`}
            >
              {activePlatform.icon}
              Share on {activePlatform.short}
            </a>
          </div>
        )}

        <div className="flex items-center justify-between pt-1 border-t border-zinc-900">
          <p className="text-[8.5px] text-zinc-700 font-mono truncate">{msgs.pageUrl}</p>
          <button
            onClick={() => setShowPreview((v) => !v)}
            className="flex items-center gap-1 text-[9px] text-zinc-600 hover:text-zinc-400 transition-colors flex-shrink-0 ml-3"
            data-testid="global-share-toggle-preview"
          >
            {showPreview ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            {showPreview ? "Hide preview" : "Preview message"}
          </button>
        </div>

        <p className="text-[8.5px] text-zinc-800 text-center uppercase tracking-widest">
          #Whistleblower #ICC #AustralianGovernment #HumanRights #BlockchainEvidence #BarranDodger #GovernmentAccountability
        </p>
      </div>
    </div>
  );
}
