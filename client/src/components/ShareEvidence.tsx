import { useState } from "react";
import { Link2, Check, Mail, Share2 } from "lucide-react";
import { SiX, SiFacebook, SiWhatsapp } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

interface ShareEvidenceProps {
  documentTitle: string;
  documentUrl?: string;
  compact?: boolean;
}

export function ShareEvidence({
  documentTitle,
  documentUrl,
  compact = false,
}: ShareEvidenceProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const siteBase = "https://www.barrandodger.com";
  const fullUrl = documentUrl
    ? documentUrl.startsWith("http")
      ? documentUrl
      : `${siteBase}${documentUrl.startsWith("/") ? "" : "/"}${documentUrl}`
    : siteBase;

  const tweetTitle = documentTitle.length > 160 ? documentTitle.substring(0, 157) + '...' : documentTitle;
  const tweetText = `${tweetTitle} — Evidence Australia tried to suppress. #BarranDodger #Whistleblower`;
  const emailSubject = `Evidence: ${documentTitle}`;
  const emailBody = `I wanted to share this important document with you:\n\n${documentTitle}\n\nThis is part of the Barran Dodger Legal & Ethical Trust Fund evidence archive — 240+ forensic documents with blockchain verification documenting systematic persecution by the Australian government.\n\nView the document: ${fullUrl}\n\nVisit the full archive: ${siteBase}`;
  const whatsAppText = `${documentTitle} — Evidence from the Barran Dodger archive. The documents Australia doesn't want you to see. ${fullUrl}`;

  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTweet = encodeURIComponent(tweetText);
  const encodedEmailSubject = encodeURIComponent(emailSubject);
  const encodedEmailBody = encodeURIComponent(emailBody);
  const encodedWhatsApp = encodeURIComponent(whatsAppText);

  const shareLinks = [
    {
      name: "Tweet",
      icon: <SiX className="h-4 w-4" />,
      href: `https://twitter.com/intent/tweet?text=${encodedTweet}&url=${encodedUrl}`,
      label: "Share on X",
    },
    {
      name: "Facebook",
      icon: <SiFacebook className="h-4 w-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodeURIComponent(documentTitle)}`,
      label: "Share on Facebook",
    },
    {
      name: "WhatsApp",
      icon: <SiWhatsapp className="h-4 w-4" />,
      href: `https://wa.me/?text=${encodedWhatsApp}`,
      label: "Share on WhatsApp",
    },
    {
      name: "Email",
      icon: <Mail className="h-4 w-4" />,
      href: `mailto:?subject=${encodedEmailSubject}&body=${encodedEmailBody}`,
      label: "Share via Email",
    },
  ];

  const copyToClipboard = async () => {
    try {
      const text = `${documentTitle}\n\n${fullUrl}\n\nFrom the Barran Dodger evidence archive — the documents Australia doesn't want you to see.`;
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Link Copied",
        description: "Evidence link copied to clipboard. Share it far and wide.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Failed to copy",
        description: "Please copy the URL manually.",
        variant: "destructive",
      });
    }
  };

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 flex-wrap" data-testid="share-evidence-compact">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="hover-elevate flex items-center justify-center h-8 w-8 rounded-md bg-[hsl(222,55%,15%)] border border-[hsl(38,92%,50%)]/20 text-[hsl(38,92%,50%)]"
            data-testid={`button-share-evidence-${link.name.toLowerCase()}`}
          >
            {link.icon}
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          aria-label="Copy evidence link"
          className="hover-elevate flex items-center justify-center h-8 w-8 rounded-md bg-[hsl(222,55%,15%)] border border-[hsl(38,92%,50%)]/20 text-[hsl(38,92%,50%)]"
          data-testid="button-share-evidence-copy"
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 flex-wrap" data-testid="share-evidence">
      <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(38,92%,50%)]/70 flex items-center gap-1.5">
        <Share2 className="h-3 w-3" />
        Share
      </span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="hover-elevate flex items-center justify-center h-8 w-8 rounded-md bg-[hsl(222,55%,15%)] border border-[hsl(38,92%,50%)]/20 text-[hsl(38,92%,50%)] text-sm"
          data-testid={`button-share-evidence-${link.name.toLowerCase()}`}
        >
          {link.icon}
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        aria-label="Copy evidence link"
        className="hover-elevate flex items-center gap-1.5 h-8 px-2.5 rounded-md bg-[hsl(222,55%,15%)] border border-[hsl(38,92%,50%)]/20 text-[hsl(38,92%,50%)] text-sm"
        data-testid="button-share-evidence-copy"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Link2 className="h-3.5 w-3.5" />}
        <span className="text-xs">{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}
