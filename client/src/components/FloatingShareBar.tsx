import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Link2, Check, X } from "lucide-react";
import { SiX, SiFacebook, SiLinkedin, SiReddit, SiWhatsapp, SiTelegram } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

const url = "https://www.barrandodger.com.au";
const encodedUrl = encodeURIComponent(url);

const twitterText = encodeURIComponent(
  `They locked him in psych wards 7 times. They left him for dead with no pulse. 35 years of persecution by 35+ Australian government agencies.\n\n240+ blockchain-sealed documents exposed.\n\nThe Attorney-General was told in 2021 and chose silence.\n\nRead it. Then explain your silence.`
);

const facebookQuote = encodeURIComponent(
  `"They found him with no pulse. Seven psychiatric incarcerations. 35 years of systematic persecution by 35+ Australian government agencies. 240+ forensic documents, blockchain-sealed and tamper-proof. The Attorney-General was informed in 2021 and did nothing. This is the most documented case of institutional abuse in Australian history. Read it. Then ask yourself why no one is talking about it."`
);

const whatsappText = encodeURIComponent(
  `READ THIS BEFORE YOU SCROLL PAST:\n\nA man was incarcerated in psychiatric wards 7 times for being a whistleblower. They found him with NO PULSE. 35+ government agencies coordinated to destroy him for 35 years.\n\n240+ documents. Blockchain-verified. Exposed.\n\nThe Prime Minister and Attorney-General were notified. They chose silence.\n\nThis is real. This is Australia. This is happening.\n\n${url}`
);

const telegramText = encodeURIComponent(
  `THE MOST DOCUMENTED CASE OF GOVERNMENT PERSECUTION IN AUSTRALIAN HISTORY\n\n7 forced psychiatric incarcerations\nFound with no pulse\n35+ agencies involved\n240+ blockchain-sealed documents\nAttorney-General notified in 2021 - chose silence\n\n"I DARE YOU TO PROVE ME WRONG"\n\nEvery document is real. Every claim is backed by evidence. Every agency is named.\n\nRead it: ${url}`
);

const linkedinText = encodeURIComponent(
  `I just read the most disturbing case of institutional failure I've ever encountered.\n\n240+ forensic documents spanning 35 years expose systematic persecution of a whistleblower by 35+ Australian government agencies. Seven psychiatric incarcerations. Found clinically dead. The Attorney-General was formally notified in 2021.\n\nEvery document is blockchain-verified and tamper-proof.\n\nWhether you work in law, government, human rights, or public policy - this demands your attention. Silence is complicity.`
);

const redditTitle = encodeURIComponent(
  `240+ blockchain-verified documents expose 35 years of systematic persecution by 35+ Australian government agencies - "I DARE YOU TO PROVE ME WRONG"`
);

function buildShareLinks() {
  return [
    { name: "X", icon: <SiX className="h-4 w-4" />, href: `https://twitter.com/intent/tweet?text=${twitterText}&url=${encodedUrl}&via=bazdod` },
    { name: "Facebook", icon: <SiFacebook className="h-4 w-4" />, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${facebookQuote}` },
    { name: "WhatsApp", icon: <SiWhatsapp className="h-4 w-4" />, href: `https://wa.me/?text=${whatsappText}` },
    { name: "Telegram", icon: <SiTelegram className="h-4 w-4" />, href: `https://t.me/share/url?url=${encodedUrl}&text=${telegramText}` },
    { name: "LinkedIn", icon: <SiLinkedin className="h-4 w-4" />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { name: "Reddit", icon: <SiReddit className="h-4 w-4" />, href: `https://reddit.com/submit?url=${encodedUrl}&title=${redditTitle}` },
  ];
}

const clipboardMessage = `THEY FOUND HIM WITH NO PULSE.\n\n7 forced psychiatric incarcerations. 35 years of persecution. 35+ Australian government agencies. 240+ blockchain-sealed forensic documents exposed.\n\nThe Attorney-General was told in 2021 and chose silence.\n\n"I DARE YOU TO PROVE ME WRONG"\n\nRead the evidence: ${url}`;

export function FloatingShareBar() {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(clipboardMessage);
      setCopied(true);
      toast({ title: "Message & Link Copied!", description: "Paste it anywhere. The truth depends on you." });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  const shareLinks = buildShareLinks();

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2" data-testid="floating-share-bar">
      {isOpen && (
        <div className="bg-card border border-border shadow-2xl rounded-xl p-3 space-y-2 animate-in slide-in-from-bottom-2">
          <p className="text-xs font-bold text-destructive uppercase tracking-wider text-center px-2">
            Share The Truth
          </p>
          <div className="grid grid-cols-3 gap-2">
            {shareLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="icon"
                asChild
                data-testid={`floating-share-${link.name.toLowerCase()}`}
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${link.name}`}>
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full gap-2"
            onClick={copyToClipboard}
            data-testid="floating-share-copy"
          >
            {copied ? <Check className="h-3 w-3" /> : <Link2 className="h-3 w-3" />}
            {copied ? "Copied!" : "Copy Message & Link"}
          </Button>
        </div>
      )}
      <Button
        size="icon"
        variant={isOpen ? "secondary" : "destructive"}
        className="rounded-full shadow-2xl"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-floating-share-toggle"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}
      </Button>
    </div>
  );
}

export function InlineShareStrip({ message, id = "default" }: { message?: string; id?: string }) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(clipboardMessage);
      setCopied(true);
      toast({ title: "Message & Link Copied!", description: "Paste it everywhere. Break the silence." });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  const shareLinks = buildShareLinks();

  return (
    <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 md:p-6" data-testid={`inline-share-strip-${id}`}>
      <p className="text-sm md:text-base font-bold text-center text-destructive mb-3 uppercase tracking-wider">
        {message || "If you read this and stay silent, your silence is on record. Share it."}
      </p>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {shareLinks.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            size="icon"
            className="border-destructive/30"
            asChild
            data-testid={`inline-share-${id}-${link.name.toLowerCase()}`}
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${link.name}`}>
              {link.icon}
            </a>
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          className="border-destructive/30"
          onClick={copyToClipboard}
          data-testid={`inline-share-${id}-copy`}
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
