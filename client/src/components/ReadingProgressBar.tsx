import { useState, useEffect } from "react";

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      if (scrollHeight <= 0) { setProgress(100); return; }
      setProgress(Math.min(100, Math.round((scrollTop / scrollHeight) * 100)));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[200] h-[3px] pointer-events-none"
      style={{ background: "rgba(255,255,255,0.05)" }}
      aria-hidden="true"
      data-testid="reading-progress-bar"
    >
      <div
        className="h-full transition-[width] duration-100 ease-linear"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #e9a00a 0%, #f59e0b 60%, #fcd34d 100%)",
          boxShadow: "0 0 8px rgba(233,160,10,0.6)",
        }}
      />
    </div>
  );
}
