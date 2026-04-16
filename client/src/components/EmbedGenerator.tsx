import { useState } from "react";
import { Code, Copy, Check, Globe, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmbedGeneratorProps {
  path?: string;
  title?: string;
}

export function EmbedGenerator({ path = "/urgent-protection-request", title = "Barran Dodger — Urgent Protection Request" }: EmbedGeneratorProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedEmbed, setSelectedEmbed] = useState<"page" | "badge" | "archive">("page");

  const BASE = "https://www.barrandodger.com";
  const pageUrl = `${BASE}${path}`;

  const embeds = {
    page: {
      label: "Full Page Embed",
      description: "Embed the SOS protection request page as a full iFrame on your website or blog.",
      code: `<iframe
  src="${pageUrl}"
  width="100%"
  height="800"
  frameborder="0"
  allow="clipboard-write"
  title="${title}"
  style="border: 2px solid #dc2626; border-radius: 8px;"
></iframe>
<p style="font-size:11px;color:#666;margin-top:4px;">
  Source: <a href="${pageUrl}" target="_blank" rel="noopener">${pageUrl}</a>
  — Barran Dodger Legal &amp; Ethical Trust Fund | ABN 78 833 496 164
</p>`,
    },
    badge: {
      label: "Evidence Badge",
      description: "A compact badge linking to the archive. Place it in a sidebar, footer, or article.",
      code: `<!-- Barran Dodger Evidence Badge -->
<a href="${BASE}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;background:#0f172a;border:1px solid #dc2626;color:#fff;text-decoration:none;padding:8px 14px;border-radius:6px;font-family:monospace;font-size:12px;">
  <span style="color:#ef4444;font-weight:700;">⛓</span>
  <span><strong>2,304+</strong> Blockchain-Verified Documents</span>
  <span style="color:#ef4444;">|</span>
  <span style="color:#a1a1aa;">ICC Article 7 · UNHCR Geneva</span>
</a>`,
    },
    archive: {
      label: "Archive Link Block",
      description: "A styled text block suitable for embedding in articles, newsletters, or emails.",
      code: `<!-- Barran Dodger Archive Reference -->
<blockquote style="border-left:4px solid #dc2626;padding:12px 16px;margin:16px 0;background:#0f172a;color:#e4e4e7;font-family:sans-serif;">
  <p style="margin:0 0 8px;font-weight:700;color:#fff;">
    ⚠️ WHISTLEBLOWER EVIDENCE ARCHIVE — PUBLIC INTEREST DISCLOSURE
  </p>
  <p style="margin:0 0 8px;font-size:13px;color:#a1a1aa;">
    Dr. Richard McLean (Barran Dodger) — 2,304+ blockchain-verified forensic documents,
    63 AI analyses, 675/675 propositions corroborated, zero contradictions.
    Formally submitted to the ICC under Article 7 and UNHCR Geneva.
    378,571+ downloads. Cannot be suppressed.
  </p>
  <p style="margin:0;font-size:12px;">
    <a href="${BASE}" target="_blank" rel="noopener" style="color:#ef4444;">www.barrandodger.com</a>
    &nbsp;|&nbsp;
    <a href="${BASE}/urgent-protection-request" target="_blank" rel="noopener" style="color:#f97316;">🚨 SOS — Physical Protection Required</a>
    &nbsp;|&nbsp;
    <a href="${BASE}/digital-archive" target="_blank" rel="noopener" style="color:#a78bfa;">⛓ Full Digital Archive</a>
  </p>
</blockquote>`,
    },
  };

  const handleCopy = (key: string, code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(key);
      toast({ title: "Embed Code Copied!", description: "Paste it into your website, blog, or newsletter." });
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div className="bg-zinc-900/80 border border-zinc-700/50 rounded-2xl p-5 md:p-6" data-testid="embed-generator">
      <div className="flex items-center gap-2 mb-1">
        <Globe size={15} className="text-zinc-400" />
        <span className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">Embed This Testimony</span>
      </div>
      <h3 className="text-white font-black text-sm mb-1">
        Embed the Evidence on Your Website, Blog, or Newsletter
      </h3>
      <p className="text-zinc-500 text-xs mb-4">
        Copy any of the code blocks below and paste into your site. Every embed creates a permanent, indexed node of this testimony in the world's digital infrastructure.
      </p>

      <div className="flex gap-2 mb-4 flex-wrap">
        {(Object.keys(embeds) as Array<keyof typeof embeds>).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedEmbed(key)}
            data-testid={`button-embed-type-${key}`}
            className={`text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full border transition-colors ${
              selectedEmbed === key
                ? "bg-green-500/20 border-green-400/50 text-green-300"
                : "bg-zinc-800/50 border-zinc-700/30 text-zinc-500 hover:border-zinc-600"
            }`}
          >
            {embeds[key].label}
          </button>
        ))}
      </div>

      <div className="bg-black/60 border border-zinc-700/40 rounded-xl p-4 mb-3">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <p className="text-white text-xs font-bold">{embeds[selectedEmbed].label}</p>
            <p className="text-zinc-500 text-[10px]">{embeds[selectedEmbed].description}</p>
          </div>
          <button
            onClick={() => handleCopy(selectedEmbed, embeds[selectedEmbed].code)}
            data-testid={`button-copy-embed-${selectedEmbed}`}
            className="shrink-0 flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors"
          >
            {copied === selectedEmbed ? <Check size={11} /> : <Copy size={11} />}
            {copied === selectedEmbed ? "Copied!" : "Copy Code"}
          </button>
        </div>
        <div className="relative">
          <Code size={11} className="absolute top-2.5 left-2.5 text-zinc-600" />
          <pre className="text-[9px] text-zinc-400 overflow-x-auto whitespace-pre-wrap break-all font-mono bg-zinc-950/80 rounded-lg p-3 pl-6 leading-relaxed max-h-44">
            {embeds[selectedEmbed].code}
          </pre>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <a
          href={pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="link-embed-preview"
          className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 text-[10px] transition-colors"
        >
          <ExternalLink size={10} /> Preview page
        </a>
        <span className="text-zinc-700 text-[10px]">|</span>
        <a
          href={BASE}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 text-[10px] transition-colors"
        >
          <Globe size={10} /> barrandodger.com
        </a>
        <span className="text-zinc-700 text-[10px]">|</span>
        <span className="text-zinc-600 text-[10px]">ABN 78 833 496 164</span>
      </div>
    </div>
  );
}
