import { useState, useEffect, createContext, useContext } from "react";
import { Link } from "wouter";
import { Heart, Copy, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const BannerContext = createContext({ visible: true });
export const useBannerVisible = () => useContext(BannerContext).visible;

export function DonationBanner() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);
  const payId = "rich@richmclean.com.au";

  useEffect(() => {
    document.documentElement.style.setProperty("--banner-height", dismissed ? "0px" : "40px");
  }, [dismissed]);

  const copyPayId = () => {
    navigator.clipboard.writeText(payId);
    setCopied(true);
    toast({ title: "PayID Copied!", description: "Open your banking app and paste to donate." });
    setTimeout(() => setCopied(false), 3000);
  };

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] py-2 px-4 z-[60]" data-testid="donation-banner">
      <div className="container mx-auto flex items-center justify-center gap-3 flex-wrap text-sm font-medium">
        <Heart className="h-4 w-4 flex-shrink-0" />
        <span className="text-center">
          Support the fight for justice — PayID: <strong className="font-mono">{payId}</strong>
        </span>
        <Button
          variant="outline"
          size="sm"
          className="bg-[hsl(222,55%,12%)] text-white border-[hsl(222,55%,12%)] gap-1"
          onClick={copyPayId}
          data-testid="button-banner-copy-payid"
        >
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          {copied ? "Copied!" : "Copy PayID"}
        </Button>
        <Link href="/donate">
          <Button
            variant="outline"
            size="sm"
            className="bg-[hsl(222,55%,12%)] text-white border-[hsl(222,55%,12%)] gap-1"
            data-testid="button-banner-donate"
          >
            <Heart className="h-3 w-3" />
            Donate
          </Button>
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Dismiss donation banner"
          data-testid="button-dismiss-banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
