import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Link2, Check, X, ChevronUp } from "lucide-react";
import { SiX, SiFacebook, SiLinkedin, SiReddit, SiWhatsapp, SiTelegram } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

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

  const url = "https://www.barrandodger.com.au";
  const title = "I DARE YOU TO PROVE ME WRONG - 98+ forensic documents spanning 35 years of systematic persecution, sealed with blockchain verification";
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ title: "Link Copied!", description: "Now share it. The truth depends on you." });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  const shareLinks = [
    { name: "X", icon: <SiX className="h-4 w-4" />, href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=bazdod` },
    { name: "Facebook", icon: <SiFacebook className="h-4 w-4" />, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}` },
    { name: "WhatsApp", icon: <SiWhatsapp className="h-4 w-4" />, href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}` },
    { name: "Telegram", icon: <SiTelegram className="h-4 w-4" />, href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}` },
    { name: "LinkedIn", icon: <SiLinkedin className="h-4 w-4" />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { name: "Reddit", icon: <SiReddit className="h-4 w-4" />, href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}` },
  ];

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
            {copied ? "Copied!" : "Copy Link"}
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

  const url = "https://www.barrandodger.com.au";
  const title = "I DARE YOU TO PROVE ME WRONG - 98+ blockchain-verified forensic documents exposing 35 years of Australian government persecution";
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ title: "Link Copied!", description: "Now share it everywhere." });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  const shareLinks = [
    { name: "X", icon: <SiX className="h-4 w-4" />, href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=bazdod` },
    { name: "Facebook", icon: <SiFacebook className="h-4 w-4" />, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}` },
    { name: "WhatsApp", icon: <SiWhatsapp className="h-4 w-4" />, href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}` },
    { name: "Telegram", icon: <SiTelegram className="h-4 w-4" />, href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}` },
    { name: "LinkedIn", icon: <SiLinkedin className="h-4 w-4" />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { name: "Reddit", icon: <SiReddit className="h-4 w-4" />, href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}` },
  ];

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
            data-testid={`inline-share-${link.name.toLowerCase()}`}
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
          data-testid="inline-share-copy"
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
