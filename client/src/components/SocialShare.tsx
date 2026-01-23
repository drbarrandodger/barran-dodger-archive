import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { SiX, SiFacebook, SiLinkedin, SiReddit } from "react-icons/si";

interface SocialShareProps {
  title?: string;
  description?: string;
  url?: string;
  compact?: boolean;
}

export function SocialShare({ 
  title = "Barran Dodger Legal & Ethical Trust Fund - Blockchain-Verified Evidence Archive",
  description = "94+ forensic documents with blockchain verification. Whistleblower protection & human rights documentation.",
  url = "https://www.barrandodger.com.au",
  compact = false
}: SocialShareProps) {
  const [supportsNativeShare, setSupportsNativeShare] = useState(false);
  
  useEffect(() => {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      setSupportsNativeShare(true);
    }
  }, []);
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  const shareLinks = [
    {
      name: "X",
      icon: <SiX className="h-4 w-4" />,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=bazdod`
    },
    {
      name: "Facebook",
      icon: <SiFacebook className="h-4 w-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="h-4 w-4" />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    },
    {
      name: "Reddit",
      icon: <SiReddit className="h-4 w-4" />,
      href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`
    }
  ];
  
  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    }
  };
  
  if (compact) {
    return (
      <div className="flex items-center gap-2" data-testid="social-share-compact">
        {shareLinks.map((link) => (
          <Button
            key={link.name}
            variant="ghost"
            size="icon"
            asChild
            data-testid={`button-share-${link.name.toLowerCase()}`}
          >
            <a 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Share on ${link.name}`}
              data-testid={`link-share-${link.name.toLowerCase()}`}
            >
              {link.icon}
            </a>
          </Button>
        ))}
        {supportsNativeShare && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNativeShare}
            data-testid="button-share-native"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        )}
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center gap-4" data-testid="social-share-section">
      <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground" data-testid="text-share-label">
        Share This Archive
      </p>
      <div className="flex items-center gap-3 flex-wrap justify-center">
        {shareLinks.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            size="sm"
            className="gap-2"
            asChild
            data-testid={`button-share-${link.name.toLowerCase()}`}
          >
            <a 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid={`link-share-${link.name.toLowerCase()}`}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.name}</span>
            </a>
          </Button>
        ))}
        {supportsNativeShare && (
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={handleNativeShare}
            data-testid="button-share-native"
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Share</span>
          </Button>
        )}
      </div>
    </div>
  );
}
