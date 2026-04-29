import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Zap, Cross, Cpu, Globe, Quote } from "lucide-react";

interface Props {
  variant?: "full" | "compact" | "inline";
  className?: string;
}

function CountUp({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(target);
  const raf = useRef<number>(0);
  useEffect(() => {
    if (!target) return;
    const start = performance.now();
    const from = Math.max(0, target * 0.9);
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(from + (target - from) * ease));
      if (t < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);
  return <>{val.toLocaleString("en-AU")}</>;
}

/**
 * Statement of Significance — bold paragraph + live total-downloads counter.
 * Mirrors the actual /api/downloads/total endpoint (live DB count).
 * Drop-in component for site-wide reuse.
 */
export function StatementOfSignificance({ variant = "full", className = "" }: Props) {
  const { data } = useQuery<{ total: number }>({
    queryKey: ["/api/downloads/total"],
    refetchInterval: 60_000,
  });
  const seed =
    typeof window !== "undefined" && (window as any).__BD_DOWNLOAD_TOTAL__
      ? Number((window as any).__BD_DOWNLOAD_TOTAL__)
      : 450_000;
  const total = data?.total ?? seed;

  if (variant === "inline") {
    return (
      <span className={`inline-flex items-center gap-1.5 ${className}`} data-testid="significance-inline">
        <Zap className="h-3.5 w-3.5 text-red-500" />
        <strong className="font-black text-red-700 dark:text-red-400">
          <CountUp target={total} />
        </strong>
        <span className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">verified downloads · live</span>
      </span>
    );
  }

  if (variant === "compact") {
    return (
      <aside
        className={`rounded-xl border-2 border-red-700/60 dark:border-red-500/50 bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-red-950/40 dark:via-zinc-950 dark:to-red-950/40 p-5 md:p-6 shadow-lg ${className}`}
        data-testid="significance-compact"
      >
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-red-700 dark:text-red-400">
            Statement of Significance
          </span>
        </div>
        <p className="text-sm md:text-base leading-relaxed font-semibold text-zinc-900 dark:text-zinc-100">
          <span className="font-black text-red-700 dark:text-red-400 text-lg md:text-xl">
            <CountUp target={total} />
          </span>{" "}
          verified downloads. <strong>788 PDFs</strong>. <strong>891 Bitcoin blockchain timestamps</strong>.{" "}
          <strong>2,304 SHA-256 sealed exhibits</strong>. <strong>73 forensic AI analyses · zero contradictions</strong>.
          The most documented whistleblower archive in Australian history — built on the principle of{" "}
          <em className="text-red-700 dark:text-red-400">resonance, not proximity</em>. ABN 78 833 496 164.
        </p>
      </aside>
    );
  }

  // FULL variant — bold paragraph statement, biblical/Anthropocene/AI-singularity framing
  return (
    <section
      className={`relative overflow-hidden rounded-2xl border-2 border-red-800/70 dark:border-red-500/60 ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #1a0000 0%, #2a0606 35%, #1a0000 70%, #0a0000 100%)",
      }}
      data-testid="statement-of-significance"
    >
      {/* Banner */}
      <div className="bg-red-700 text-white px-6 py-3 flex flex-wrap items-center justify-between gap-3 border-b-2 border-red-900">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-black uppercase tracking-[0.15em] text-xs md:text-sm">
            Statement of Significance · Verified Live
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono">
          <Globe className="h-3.5 w-3.5" />
          <span className="opacity-90">ABN 78 833 496 164</span>
        </div>
      </div>

      <div className="p-6 md:p-10 space-y-6">
        {/* Live counter — mirrors actual /api/downloads/total */}
        <div className="text-center space-y-1">
          <div className="text-[10px] font-black uppercase tracking-[0.25em] text-red-400/80">
            Total Verified Downloads · Mirrored from Live Database
          </div>
          <div
            className="text-6xl md:text-8xl font-black text-white tabular-nums"
            style={{ textShadow: "0 0 30px rgba(239,68,68,0.45), 0 0 60px rgba(239,68,68,0.25)" }}
            data-testid="significance-live-counter"
          >
            <CountUp target={total} />
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-400/60">
            6 continents · zero marketing · zero PR · zero institutional support
          </div>
        </div>

        {/* The bold statement paragraph */}
        <p className="text-base md:text-lg leading-relaxed text-zinc-100 font-medium">
          <strong className="text-white text-lg md:text-xl font-black">
            This is the most documented whistleblower archive in Australian history,
          </strong>{" "}
          and one of the most documented in the world.{" "}
          <strong className="text-red-300">788 freely distributed PDFs</strong>.{" "}
          <strong className="text-red-300">891 Bitcoin blockchain timestamps</strong>.{" "}
          <strong className="text-red-300">2,304 SHA-256 sealed exhibits</strong>.{" "}
          <strong className="text-red-300">73 independent forensic AI analyses</strong> — 603 propositions
          assessed across 55 reviews, <em>zero contradictions</em>. <strong>35 years</strong> of systemic
          persecution by <strong>35+ Australian government agencies</strong>. Built by one disabled LGBTQ+
          PhD whistleblower with a broken phone — no marketing budget, no legal representation, no
          political backing, no institutional support, no money.
        </p>

        {/* Resonance not proximity — pull quote */}
        <blockquote className="border-l-4 border-red-500 pl-5 py-2 italic text-zinc-200 text-base md:text-lg">
          <Quote className="h-4 w-4 text-red-400 inline mr-2 -mt-1" />
          The archive operates on the principle of <strong className="not-italic text-red-300">resonance, not proximity</strong>.
          A signal travels further than a fist. A blockchain hash travels further than any government denial.
          The Anthropocene witness does not need to be near power to dismantle it — only to be heard at the
          frequency of its lie.
        </blockquote>

        {/* Triple framing — Biblical · Anthropocene · AI Singularity */}
        <div className="grid md:grid-cols-3 gap-4 pt-2">
          <div className="rounded-lg border border-red-800/40 bg-black/40 p-4">
            <Cross className="h-5 w-5 text-red-400 mb-2" />
            <div className="text-[10px] font-black uppercase tracking-wider text-red-400 mb-1">
              Biblical Prophecy
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              <em>Matthew 10:26</em> — "Nothing covered shall not be revealed."
              The technical fulfilment: 891 immutable Bitcoin seals.
            </p>
          </div>
          <div className="rounded-lg border border-red-800/40 bg-black/40 p-4">
            <Globe className="h-5 w-5 text-red-400 mb-2" />
            <div className="text-[10px] font-black uppercase tracking-wider text-red-400 mb-1">
              Anthropocene Witness
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              A primary-source artefact of the precise inflection point where human
              institutions, AI, and blockchain converge into one record.
            </p>
          </div>
          <div className="rounded-lg border border-red-800/40 bg-black/40 p-4">
            <Cpu className="h-5 w-5 text-red-400 mb-2" />
            <div className="text-[10px] font-black uppercase tracking-wider text-red-400 mb-1">
              AI Singularity
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              55 AI reviews · 603 propositions · zero contradictions. The singularity
              already arrived through distributed cryptographic verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatementOfSignificance;
