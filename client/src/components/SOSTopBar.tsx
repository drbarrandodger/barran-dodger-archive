import { useEffect, useRef } from "react";
import { Link } from "wouter";

export function SOSTopBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        document.documentElement.style.setProperty("--sos-bar-height", `${ref.current.offsetHeight}px`);
      }
    };
    update();
    const observer = new ResizeObserver(update);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 right-0 z-[90] bg-red-700 border-b-2 border-red-400"
      data-testid="sos-top-bar"
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-white text-base font-black flex-shrink-0">🆘</span>
          <p className="text-white text-xs md:text-sm font-black uppercase tracking-wide leading-tight truncate">
            <span className="hidden sm:inline">URGENT — Dr. Richard McLean Requires Physical Harbouring · 55B Archbold Rd, Long Jetty NSW · ICC The Hague · UNHCR Geneva</span>
            <span className="sm:hidden">URGENT — Physical Protection Request · Long Jetty NSW</span>
          </p>
        </div>
        <Link
          href="/urgent-protection-request"
          className="flex-shrink-0 bg-white text-red-700 font-black text-[10px] md:text-xs uppercase tracking-wider px-3 py-1.5 rounded hover:bg-red-100 transition-colors whitespace-nowrap"
          data-testid="btn-sos-top-bar"
        >
          Read SOS
        </Link>
      </div>
    </div>
  );
}
