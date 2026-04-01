import { Share2, Check } from "lucide-react";
import { SiX, SiFacebook, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface SectionShareProps {
  shareText: string;
  url?: string;
  label?: string;
}

export function SectionShare({
  shareText,
  url = "https://www.barrandodger.com",
  label = "Share this section",
}: SectionShareProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  // Twitter limit: 280 chars total. &url= adds ~24 chars (23 for t.co link + 1 space).
  // So tweet text must be ≤ 256 chars.
  const twitterText = shareText.length > 256 ? shareText.substring(0, 253) + "..." : shareText;
  const encodedText = encodeURIComponent(shareText);
  const encodedTwitterText = encodeURIComponent(twitterText);
  const encodedUrl = encodeURIComponent(url);

  const platforms = [
    {
      name: "X",
      icon: SiX,
      href: `https://twitter.com/intent/tweet?text=${encodedTwitterText}&url=${encodedUrl}&via=bazdod`,
    },
    {
      name: "Facebook",
      icon: SiFacebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&summary=${encodedText}`,
    },
    {
      name: "WhatsApp",
      icon: SiWhatsapp,
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText} ${url}`);
    setCopied(true);
    toast({ title: "Copied", description: "Share text copied to clipboard" });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 pt-2" data-testid="section-share-buttons">
      <span className="text-xs text-body-text uppercase tracking-wider font-bold flex items-center gap-1.5 mr-1">
        <Share2 className="h-3 w-3" /> {label}
      </span>
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 text-body-text transition-colors"
          title={`Share on ${p.name}`}
          data-testid={`button-section-share-${p.name.toLowerCase()}`}
        >
          <p.icon className="h-3.5 w-3.5" />
        </a>
      ))}
      <button
        onClick={handleCopy}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 text-body-text transition-colors cursor-pointer"
        title="Copy share text"
        data-testid="button-section-share-copy"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Share2 className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}
