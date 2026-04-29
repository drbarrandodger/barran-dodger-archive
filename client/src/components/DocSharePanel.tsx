import { useState } from "react";
import { Link2, Check, Share2, Mail, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { SiX, SiFacebook, SiLinkedin, SiWhatsapp, SiTelegram, SiReddit } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { getShareMessages } from "@/lib/shareMessages";

const coverImages = import.meta.glob('../assets/images/cover-*.png', { eager: true }) as Record<string, { default: string }>;
const docImages = import.meta.glob('../assets/images/doc-*.png', { eager: true }) as Record<string, { default: string }>;
const miscImages = import.meta.glob('../assets/images/*.png', { eager: true }) as Record<string, { default: string }>;

function getImgSrc(name: string): string | undefined {
  if (!name) return undefined;
  const key1 = `../assets/images/${name}.png`;
  const key2 = `../assets/images/${name}`;
  return (
    coverImages[key1]?.default ??
    docImages[key1]?.default ??
    miscImages[key1]?.default ??
    miscImages[key2]?.default
  );
}

const PLATFORM_META: Record<string, { active: string; charLimit: number; hint: string }> = {
  X:        { active: "bg-zinc-800 border-zinc-400 text-white",          charLimit: 280,   hint: "280 char limit — hashtags included" },
  Facebook: { active: "bg-blue-950 border-blue-500 text-blue-200",       charLimit: 63206, hint: "Full post with hashtags" },
  WhatsApp: { active: "bg-emerald-950 border-emerald-500 text-emerald-200", charLimit: 65536, hint: "Pre-written message" },
  Telegram: { active: "bg-sky-950 border-sky-500 text-sky-200",          charLimit: 4096,  hint: "Pre-written message" },
  LinkedIn: { active: "bg-blue-950 border-blue-400 text-blue-300",       charLimit: 1300,  hint: "Professional post with hashtags" },
  Reddit:   { active: "bg-orange-950 border-orange-500 text-orange-200", charLimit: 300,   hint: "Pre-loaded post title" },
  Email:    { active: "bg-purple-950 border-purple-500 text-purple-200", charLimit: 99999, hint: "Full email with subject & body" },
};

interface DocSharePanelProps {
  documentPath: string;
  documentTitle: string;
  coverFile?: string;
  className?: string;
  compact?: boolean;
  defaultExpanded?: boolean;
}

export function DocSharePanel({
  documentPath,
  documentTitle,
  coverFile,
  className = "",
  compact = false,
  defaultExpanded = true,
}: DocSharePanelProps) {
  const [selected, setSelected] = useState("X");
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(defaultExpanded);
  const { toast } = useToast();

  const msgs = getShareMessages(documentPath);
  const eu = encodeURIComponent(msgs.pageUrl);
  const coverSrc = coverFile ? getImgSrc(coverFile) : undefined;

  const platforms = [
    {
      id: "X",
      icon: <SiX className="h-3 w-3" />,
      label: "X",
      text: msgs.twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(msgs.twitter)}`,
    },
    {
      id: "Facebook",
      icon: <SiFacebook className="h-3 w-3" />,
      label: "Facebook",
      text: msgs.facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${eu}&quote=${encodeURIComponent(msgs.facebook.slice(0, 500))}`,
    },
    {
      id: "WhatsApp",
      icon: <SiWhatsapp className="h-3 w-3" />,
      label: "WhatsApp",
      text: msgs.whatsapp,
      href: `https://wa.me/?text=${encodeURIComponent(msgs.whatsapp)}`,
    },
    {
      id: "Telegram",
      icon: <SiTelegram className="h-3 w-3" />,
      label: "Telegram",
      text: msgs.telegram,
      href: `https://t.me/share/url?url=${eu}&text=${encodeURIComponent(msgs.telegram)}`,
    },
    {
      id: "LinkedIn",
      icon: <SiLinkedin className="h-3 w-3" />,
      label: "LinkedIn",
      text: msgs.linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${eu}&summary=${encodeURIComponent(msgs.linkedin.slice(0, 700))}`,
    },
    {
      id: "Reddit",
      icon: <SiReddit className="h-3 w-3" />,
      label: "Reddit",
      text: msgs.reddit,
      href: `https://reddit.com/submit?url=${eu}&title=${encodeURIComponent(msgs.reddit)}`,
    },
    {
      id: "Email",
      icon: <Mail className="h-3 w-3" />,
      label: "Email",
      text: msgs.email.body,
      href: `mailto:?subject=${encodeURIComponent(msgs.email.subject)}&body=${encodeURIComponent(msgs.email.body)}`,
    },
  ];

  const active = platforms.find((p) => p.id === selected)!;
  const meta = PLATFORM_META[selected];

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(msgs.clipboard);
      setCopied(true);
      toast({ title: "Message Copied!", description: "Paste it anywhere — every share protects him." });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({ title: "Copy failed", variant: "destructive" });
    }
  };

  const nativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: documentTitle, text: msgs.twitter, url: msgs.pageUrl });
      } catch {}
    }
  };

  if (compact) {
    return (
      <div
        className={`rounded-lg border border-red-900/40 overflow-hidden ${className}`}
        style={{ background: "#080202" }}
        data-testid="doc-share-panel-compact"
      >
        <button
          onClick={() => setExpanded((v) => !v)}
          className="w-full flex items-center justify-between gap-2 px-3 py-2 hover:bg-red-950/20 transition-colors"
          data-testid="doc-share-panel-toggle"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-3 w-3 text-red-400 flex-shrink-0" />
            <span className="text-red-300 text-[10px] font-black uppercase tracking-widest">
              Share — His Safety Requires Distribution
            </span>
          </div>
          {expanded ? (
            <ChevronUp className="h-3.5 w-3.5 text-zinc-600 flex-shrink-0" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5 text-zinc-600 flex-shrink-0" />
          )}
        </button>

        {expanded && (
          <div className="px-3 pb-3 space-y-2.5 border-t border-red-900/20">
            <div className="flex items-center gap-1.5 flex-wrap pt-2">
              {platforms.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  className={`flex items-center gap-1 h-6 px-2 rounded border text-[9px] font-bold transition-colors ${
                    selected === p.id
                      ? PLATFORM_META[p.id].active
                      : "bg-zinc-900/50 border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300"
                  }`}
                  data-testid={`share-tab-${p.id.toLowerCase()}`}
                >
                  {p.icon}
                  <span>{p.label}</span>
                </button>
              ))}
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8px] text-zinc-600 uppercase tracking-widest font-bold">
                  {selected} · {meta.hint}
                </span>
                <span className={`text-[8px] font-mono ${active.text.length > meta.charLimit ? "text-red-400" : "text-zinc-700"}`}>
                  {active.text.length}c
                </span>
              </div>
              <p className="text-zinc-300 text-[9.5px] leading-relaxed whitespace-pre-line line-clamp-5">
                {active.text}
              </p>
            </div>

            <div className="flex gap-1.5">
              <a
                href={active.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 bg-red-700 hover:bg-red-600 text-white font-bold text-[10px] px-3 py-1.5 rounded-lg transition-colors"
                data-testid={`share-open-${selected.toLowerCase()}`}
              >
                {active.icon}
                Share on {selected}
              </a>
              <button
                onClick={copyMessage}
                className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-zinc-300 font-semibold text-[10px] px-2.5 py-1.5 rounded-lg transition-colors"
                data-testid="share-copy-message"
              >
                {copied ? <Check className="h-3 w-3 text-green-400" /> : <Link2 className="h-3 w-3" />}
                {copied ? "Copied!" : "Copy"}
              </button>
              {typeof navigator !== "undefined" && "share" in navigator && (
                <button
                  onClick={nativeShare}
                  className="flex items-center gap-1 bg-zinc-900 border border-zinc-700 text-zinc-400 font-semibold text-[10px] px-2.5 py-1.5 rounded-lg transition-colors hover:bg-zinc-800"
                  data-testid="share-native"
                >
                  <Share2 className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl border border-red-900/40 overflow-hidden ${className}`}
      style={{ background: "#080202" }}
      data-testid="doc-share-panel"
    >
      <div
        className="px-4 py-3 border-b border-red-900/30 flex items-center gap-2"
        style={{ background: "#120102" }}
      >
        <AlertTriangle className="h-3.5 w-3.5 text-red-400 flex-shrink-0" />
        <p className="text-red-300 text-[10px] font-black uppercase tracking-widest">
          Share This — His Safety Requires Global Distribution
        </p>
      </div>

      <div className="p-4 space-y-3.5">
        <div className="flex items-center gap-3 rounded-xl border border-zinc-800 overflow-hidden" style={{ background: "#111" }}>
          {coverSrc ? (
            <img src={coverSrc} alt={documentTitle} className="h-[72px] w-14 object-cover flex-shrink-0" loading="lazy" decoding="async" />
          ) : (
            <div className="h-[72px] w-14 flex-shrink-0 bg-zinc-900 flex items-center justify-center">
              <Share2 className="h-5 w-5 text-zinc-700" />
            </div>
          )}
          <div className="min-w-0 pr-3">
            <p className="text-white text-[11px] font-bold leading-tight line-clamp-2">{documentTitle}</p>
            <p className="text-zinc-500 text-[9px] mt-0.5 font-mono">barrandodger.com</p>
            <div className="flex flex-wrap gap-1 mt-1.5">
              <span className="text-[8px] bg-red-900/50 border border-red-700/50 text-red-400 px-1.5 py-0.5 rounded font-bold">
                ICC FILED
              </span>
              <span className="text-[8px] bg-amber-900/50 border border-amber-700/50 text-amber-400 px-1.5 py-0.5 rounded font-bold">
                BLOCKCHAIN SEALED
              </span>
              <span className="text-[8px] bg-zinc-800 border border-zinc-700 text-zinc-400 px-1.5 py-0.5 rounded font-bold">
                FREE DOWNLOAD
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-1 flex-wrap">
          {platforms.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`flex items-center gap-1 h-7 px-2.5 rounded-lg border text-[10px] font-bold transition-colors ${
                selected === p.id
                  ? PLATFORM_META[p.id].active
                  : "bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
              }`}
              data-testid={`share-tab-${p.id.toLowerCase()}`}
            >
              {p.icon}
              <span className="hidden sm:inline">{p.label}</span>
            </button>
          ))}
        </div>

        <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold">
              {selected} — {meta.hint}
            </span>
            <span
              className={`text-[8px] font-mono ${
                active.text.length > meta.charLimit ? "text-red-400" : "text-zinc-600"
              }`}
            >
              {active.text.length} chars
            </span>
          </div>
          <p className="text-zinc-300 text-[10px] leading-relaxed whitespace-pre-line line-clamp-6">
            {active.text}
          </p>
        </div>

        <div className="flex gap-2">
          <a
            href={active.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
            data-testid={`share-open-${selected.toLowerCase()}`}
          >
            {active.icon}
            Share on {selected}
          </a>
          <button
            onClick={copyMessage}
            className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-zinc-300 font-semibold text-xs px-3 py-2.5 rounded-xl transition-colors"
            data-testid="share-copy-message"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Link2 className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied!" : "Copy"}</span>
          </button>
          {typeof navigator !== "undefined" && "share" in navigator && (
            <button
              onClick={nativeShare}
              className="flex items-center gap-1.5 bg-green-900/40 border border-green-700/40 hover:bg-green-800/50 text-green-400 font-semibold text-xs px-3 py-2.5 rounded-xl transition-colors"
              data-testid="share-native"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">More</span>
            </button>
          )}
        </div>

        <p className="text-zinc-700 text-[8.5px] text-center leading-relaxed">
          Every share is irrevocable — each witness is a shield. Distribution is his protection.
          ABN 78 833 496 164 · © Dr. Richard William McLean (Barran Dodger)
        </p>
      </div>
    </div>
  );
}
