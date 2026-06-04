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
      const styles = getComputedStyle(document.documentElement);
      const wbHeight = styles.getPropertyValue("--whistleblower-banner-height").trim() || "0px";
      const sosHeight = styles.getPropertyValue("--sos-bar-height").trim() || "40px";
      const scripturalHeight = styles.getPropertyValue("--scriptural-bar-height").trim() || "0px";
      const fixedTop = `calc(${sosHeight} + ${scripturalHeight})`;
      if (dismissed || !bannerRef.current) {
        document.documentElement.style.setProperty("--banner-height", `calc(${fixedTop} + ${wbHeight})`);
        document.documentElement.style.setProperty("--donation-banner-height", "0px");
      } else {
        const actualHeight = bannerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--donation-banner-height", `${actualHeight}px`);
        document.documentElement.style.setProperty("--banner-height", `calc(${fixedTop} + ${wbHeight} + ${actualHeight}px)`);
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
      className="fixed left-0 right-0 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] py-1.5 md:py-2 px-4 pr-8 md:pr-10 z-[60]"
      style={{ top: "calc(var(--sos-bar-height, 40px) + var(--scriptural-bar-height, 0px) + var(--whistleblower-banner-height, 0px))" }}
      data-testid="donation-banner"
    >
      <div className="container mx-auto flex items-center justify-center gap-1.5 md:gap-3 flex-wrap text-sm font-medium">
        <Heart className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0 fill-[hsl(222,55%,12%)]" />
        <span className="text-center text-[10px] md:text-sm leading-tight">
          <strong className="hidden md:inline">He survived. They won't stop.</strong> <span className="hidden md:inline">Help keep this fight alive —</span> PayID: <strong className="font-mono text-[10px] md:text-sm">{payId}</strong>
        </span>
        <div className="flex items-center gap-1 md:gap-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-[hsl(222,55%,12%)] text-white border-[hsl(222,55%,12%)] gap-1 h-6 md:h-7 text-[10px] md:text-xs px-2 md:px-3"
            onClick={copyPayId}
            data-testid="button-banner-copy-payid"
          >
            {copied ? <Check className="h-2.5 w-2.5 md:h-3 md:w-3" /> : <Copy className="h-2.5 w-2.5 md:h-3 md:w-3" />}
            <span className="hidden md:inline">{copied ? "Copied!" : "Copy PayID"}</span>
            <span className="md:hidden">{copied ? "Copied!" : "Copy"}</span>
          </Button>
          <Link href="/donate">
            <Button
              variant="outline"
              size="sm"
              className="bg-[hsl(222,55%,12%)] text-white border-[hsl(222,55%,12%)] gap-1 h-6 md:h-7 text-[10px] md:text-xs px-2 md:px-3"
              data-testid="button-banner-donate"
            >
              <Heart className="h-2.5 w-2.5 md:h-3 md:w-3" />
              Donate
            </Button>
          </Link>
        </div>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 p-1 opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Dismiss donation banner"
        data-testid="button-dismiss-banner"
      >
        <X className="h-3 w-3 md:h-3.5 md:w-3.5" />
      </button>
    </div>
  );
}
