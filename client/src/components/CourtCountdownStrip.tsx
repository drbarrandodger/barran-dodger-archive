import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { X, Scale, Gavel, AlertCircle } from "lucide-react";

const STORAGE_KEY = "active-case-strip-dismissed-v2";
const CASE_DATE = new Date("2026-05-14T09:00:00+10:00");
const DAYS_SINCE = Math.floor((Date.now() - CASE_DATE.getTime()) / 86_400_000);

export function CourtCountdownStrip() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (!dismissed && ref.current) ? ref.current.offsetHeight : 0;
    document.documentElement.style.setProperty("--court-strip-height", `${h}px`);
    const obs = ref.current ? new ResizeObserver(() => {
      const h2 = (!dismissed && ref.current) ? ref.current.offsetHeight : 0;
      document.documentElement.style.setProperty("--court-strip-height", `${h2}px`);
    }) : null;
    if (ref.current && obs) obs.observe(ref.current);
    return () => obs?.disconnect();
  }, [dismissed]);

  const dismiss = () => {
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
    setDismissed(true);
    document.documentElement.style.setProperty("--court-strip-height", "0px");
  };

  if (dismissed) return null;

  return (
    <div
      ref={ref}
      className="fixed bottom-0 left-0 right-0 z-[40] shadow-lg"
      style={{
        background: "linear-gradient(90deg, #0d0020 0%, #180035 50%, #0d0020 100%)",
        borderTop: "1px solid rgba(168,85,247,0.5)",
        boxShadow: "0 -4px 30px rgba(168,85,247,0.2)"
      }}
      data-testid="court-active-case-strip"
      data-pdf-hide
    >
      <div className="container mx-auto px-3 md:px-6 py-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <Gavel className="h-3.5 w-3.5 shrink-0 animate-pulse" style={{ color: "#c084fc" }} />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
            <span className="text-[10px] font-black uppercase tracking-[0.15em] shrink-0" style={{ color: "#c084fc" }}>
              ⚖ Active Case
            </span>
            <span
              className="font-mono font-bold text-xs shrink-0"
              style={{ color: "#84cc16" }}
            >
              Day {DAYS_SINCE} of proceedings
            </span>
            <span className="text-[10px] hidden sm:inline shrink-0" style={{ color: "rgba(192,132,252,0.4)" }}>·</span>
            <span className="text-[10px] hidden sm:inline leading-tight" style={{ color: "rgba(220,235,255,0.6)" }}>
              Wyong Local Court · Troy charged: threats to kill · I88267509 · Proceedings continue
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/verdict-before-the-court"
            className="flex items-center gap-1 text-[10px] font-bold rounded px-2 py-1 transition-colors whitespace-nowrap"
            style={{
              color: "#c084fc",
              border: "1px solid rgba(168,85,247,0.5)",
              background: "rgba(168,85,247,0.1)"
            }}
            data-testid="link-court-strip-evidence"
          >
            <Scale className="h-3 w-3" />
            <span>Evidence</span>
          </Link>
          <button
            onClick={dismiss}
            className="transition-colors p-0.5"
            style={{ color: "rgba(168,85,247,0.4)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#c084fc"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(168,85,247,0.4)"; }}
            aria-label="Dismiss case status"
            data-testid="button-dismiss-court-strip"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
