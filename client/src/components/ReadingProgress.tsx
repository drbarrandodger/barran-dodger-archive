import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(scrollPercent, 100));
      setShowBackToTop(scrollTop > 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-[9999] transition-all duration-150"
        style={{ width: `${progress}%` }}
        data-testid="reading-progress-bar"
      />

      <div
        className="fixed bottom-6 right-6 z-50 transition-all duration-300"
        style={{
          opacity: showBackToTop ? 1 : 0,
          pointerEvents: showBackToTop ? "auto" : "none",
          transform: showBackToTop ? "translateY(0)" : "translateY(16px)",
        }}
      >
        <Button
          size="icon"
          variant="default"
          onClick={scrollToTop}
          className="rounded-full shadow-lg"
          data-testid="button-back-to-top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </>
  );
}
