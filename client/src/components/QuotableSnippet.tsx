import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Copy, Check, Share2 } from "lucide-react";
import { SiX, SiFacebook, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface QuotableSnippetProps {
  quote: string;
  source: string;
  date?: string;
  documentUrl?: string;
}

const quotableSnippets = [
  {
    quote: "I've suffered a fatal injury in a hospital. I can't report rape or murder to police. I'm banned from the MHCC, HCC, the MHLC... rejected from Centrelink, human services rejected me.",
    source: "OAIC Evidence EN21/12782",
    date: "November 2021"
  },
  {
    quote: "It is clear that a movement exists to de-value me and dehumanise me, even to kill me. That is quite evident, because of the systemic oppression and the conspiracy to pervert the course of justice.",
    source: "OPMC Cover-up Documentation",
    date: "May 2022"
  },
  {
    quote: "Micron 21, after a hospital stay in which I tried to kill myself, accused me of being conspiratorial and intentionally deleted all evidence I had before litigation.",
    source: "Micron21 Privacy Complaint",
    date: "December 2021"
  },
  {
    quote: "The deletion of your data was intentional and authorised by Micron 21 who made a business decision to no longer provide its services to you.",
    source: "OAIC FOI Closure CP21/02752",
    date: "April 2022"
  },
  {
    quote: "240+ forensic documents with blockchain verification exposing Australian government corruption, whistleblower persecution, and institutional abuse.",
    source: "Evidence Archive",
    date: "2026"
  }
];

export function QuotableSnippet({ quote, source, date, documentUrl }: QuotableSnippetProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const shareUrl = documentUrl || "https://www.barrandodger.com/evidence";
  const shareText = `"${quote}" — ${source}`;
  
  const copyQuote = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
      setCopied(true);
      toast({ title: "Quote copied!", description: "Ready to paste and share." });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };
  
  const shareToTwitter = () => {
    const hashtags = "\n\n#Whistleblower #HumanRights #Australia";
    // Twitter limit: 280 chars. URL (via &url=) counts as 23 chars + 1 space = 24.
    // So tweet text must be ≤ 256 chars.
    const maxLen = 256 - hashtags.length;
    const truncated = shareText.length > maxLen
      ? shareText.substring(0, maxLen - 3) + "..."
      : shareText;
    const text = encodeURIComponent(`${truncated}${hashtags}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-secondary/50 border border-border rounded-lg p-6 relative"
      data-testid="quotable-snippet"
    >
      <Quote className="h-8 w-8 text-primary/30 absolute top-4 left-4" />
      
      <blockquote className="pl-8 pr-4 text-foreground italic leading-relaxed mb-4">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="text-sm">
          <p className="font-medium text-primary">{source}</p>
          {date && <p className="text-muted-foreground">{date}</p>}
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={copyQuote} title="Copy quote" data-testid="button-copy-quote">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={shareToTwitter} title="Share on X" data-testid="button-share-quote-x">
            <SiX className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function QuotableSnippetsSection() {
  return (
    <div className="space-y-6" data-testid="quotable-snippets-section">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif font-bold text-primary mb-2">Share The Truth</h3>
        <p className="text-muted-foreground">Click to copy and share these documented quotes</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        {quotableSnippets.slice(0, 4).map((snippet, index) => (
          <QuotableSnippet key={index} {...snippet} />
        ))}
      </div>
    </div>
  );
}
