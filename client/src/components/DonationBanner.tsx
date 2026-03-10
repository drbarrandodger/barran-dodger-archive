import { useState, useEffect, useRef, createContext, useContext } from "react";
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
  const bannerRef = useRef<HTMLDivElement>(null);
  const payId = "rich@richmclean.com.au";

  useEffect(() => {
    const updateHeight = () => {
      const wbHeight = getComputedStyle(document.documentElement).getPropertyValue("--whistleblower-banner-height").trim() || "0px";
      if (dismissed || !bannerRef.current) {
        document.documentElement.style.setProperty("--banner-height", wbHeight);
        document.documentElement.style.setProperty("--donation-banner-height", "0px");
      } else {
        const actualHeight = bannerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--donation-banner-height", `${actualHeight}px`);
        document.documentElement.style.setProperty("--banner-height", `calc(${wbHeight} + ${actualHeight}px)`);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    const observer = new MutationObserver(updateHeight);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });

    const resizeObserver = new ResizeObserver(updateHeight);
    if (bannerRef.current) resizeObserver.observe(bannerRef.current);

    return () => {
      window.removeEventListener("resize", updateHeight);
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, [dismissed]);

  const copyPayId = () => {
    navigator.clipboard.writeText(payId);
    setCopied(true);
    toast({ title: "PayID Copied!", description: "Open your banking app and paste to donate." });
    setTimeout(() => setCopied(false), 3000);
  };

  if (dismissed) return null;

  return (
    <div
      ref={bannerRef}
      className="fixed left-0 right-0 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] py-2 px-4 pr-10 z-[60]"
      style={{ top: "var(--whistleblower-banner-height, 0px)" }}
      data-testid="donation-banner"
    >
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-3 flex-wrap text-sm font-medium">
        <Heart className="h-4 w-4 flex-shrink-0 fill-[hsl(222,55%,12%)]" />
        <span className="text-center text-xs md:text-sm">
          <strong>He survived. They won't stop.</strong> Help keep this fight alive — PayID: <strong className="font-mono">{payId}</strong>
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-[hsl(222,55%,12%)] text-white border-[hsl(222,55%,12%)] gap-1 h-7 text-xs"
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
              className="bg-[hsl(222,55%,12%)] text-white border-[hsl(222,55%,12%)] gap-1 h-7 text-xs"
              data-testid="button-banner-donate"
            >
              <Heart className="h-3 w-3" />
              Donate
            </Button>
          </Link>
        </div>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Dismiss donation banner"
        data-testid="button-dismiss-banner"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
