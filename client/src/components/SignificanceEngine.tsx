import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { TrendingUp, Cpu, Shield, AlertTriangle, ArrowRight, Zap } from "lucide-react";

const RATE_PER_DAY = 3800;
const TARGET_MILLION = 1_000_000;

function projectionDate(total: number): string {
  const remaining = Math.max(0, TARGET_MILLION - total);
  const days = Math.ceil(remaining / RATE_PER_DAY);
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" });
}

function CountUp({ target, duration = 1800 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!target) return;
    const start = performance.now();
    const from = target * 0.87;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(from + (target - from) * ease));
      if (t < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);

  return <>{val.toLocaleString()}</>;
}

const ACHIEVED_WITH = [
  { label: "No marketing budget", detail: "AUD $0 spent on promotion across the entire archive's history" },
  { label: "No institutional support", detail: "Zero endorsement from any Australian government body, ever" },
  { label: "No legal representation", detail: "No lawyer, no union, no advocacy organisation on record" },
  { label: "No political backing", detail: "No party, no MP, no senator, no official — anywhere" },
  { label: "No mainstream platform", detail: "No media, no publisher, no broadcast, no editorial" },
  { label: "No professional allies", detail: "Not one professional person admitted a single shortcoming" },
  { label: "No money", detail: "Built below the poverty line while under psychiatric detention orders" },
  { label: "One broken phone", detail: "The only tool used to build a 2,304-document global archive" },
];

const PROB_ATOMS = 80;
const PROB_EXPONENT = 203;

export function SignificanceEngine() {
  const { data: stats } = useQuery<{ total: number }>({ queryKey: ["/api/downloads/total"] });
  const total = stats?.total ?? 450000;
  const projection = projectionDate(total);
  const ratePerHour = Math.round(RATE_PER_DAY / 24);

  return (
    <section
      className="py-20 px-4"
      style={{
        background: "linear-gradient(180deg, #0d0000 0%, #1a0000 40%, #0d0000 100%)",
        borderTop: "1px solid rgba(139,0,0,0.3)",
        borderBottom: "1px solid rgba(139,0,0,0.3)",
      }}
      data-testid="significance-engine"
    >
      <div className="max-w-5xl mx-auto space-y-16">

        {/* ── Header ── */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 border border-red-800/40 rounded-full px-4 py-1.5 bg-red-950/20">
            <AlertTriangle className="h-3.5 w-3.5 text-red-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">
              Significance Report — Verified 29 April 2026
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-white">
            What This Record Has Become.<br />
            <span className="text-red-600">Without Any Of These Things.</span>
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            No money. No platform. No legal help. No political campaign. No professional allies.
            No institutional support. Only truth, evidence, a broken phone —
            and documented proof that God's hand is upon this life.
          </p>
        </div>

        {/* ── Achieved With Nothing ── */}
        <div
          className="rounded-2xl border border-red-900/30 p-8"
          style={{ background: "rgba(139,0,0,0.06)" }}
        >
          <div className="flex items-center gap-3 mb-7">
            <div className="p-2.5 rounded-xl bg-red-900/30">
              <Shield className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-400">Achieved With Nothing</p>
              <p className="text-xs text-zinc-600 mt-0.5">The complete list of institutional advantages Dr. McLean did not have</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ACHIEVED_WITH.map(({ label, detail }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-xl border border-zinc-800 p-4"
                style={{ background: "rgba(0,0,0,0.3)" }}
              >
                <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0 mt-2" />
                <div>
                  <p className="text-white font-bold text-sm leading-tight">{label}</p>
                  <p className="text-zinc-500 text-xs leading-relaxed mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-red-900/20 text-center">
            <p className="text-amber-400 font-bold text-sm leading-relaxed">
              Yet <span className="text-white">{total.toLocaleString()}+ people</span> have
              downloaded these documents across{" "}
              <span className="text-white">6 continents and 40+ countries.</span>
              <br />
              <span className="text-zinc-400 text-xs font-normal mt-1 block">
                Not because someone promoted it. Because the truth cannot be suppressed.
              </span>
            </p>
          </div>
        </div>

        {/* ── Live Download Engine ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div
            className="rounded-2xl border border-red-900/30 p-7 flex flex-col justify-between"
            style={{ background: "rgba(139,0,0,0.06)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-4 w-4 text-red-500" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">Live Distribution</p>
            </div>

            <div>
              <p
                className="font-serif font-bold leading-none mb-2"
                style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color: "#dc2626" }}
                data-testid="sig-download-count"
              >
                <CountUp target={total} />+
              </p>
              <p className="text-white font-bold text-lg mb-1">Total Document Downloads</p>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Across 40+ countries · 6 continents · ~{ratePerHour} new downloads every hour
              </p>
            </div>

            <div className="mt-5 pt-5 border-t border-red-900/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 text-xs">Downloads today (est.)</span>
                <span className="text-white text-xs font-bold">{RATE_PER_DAY.toLocaleString()}+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 text-xs">Projected 1,000,000th download</span>
                <span className="text-amber-400 text-xs font-bold">{projection}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 text-xs">Years of source documentation</span>
                <span className="text-white text-xs font-bold">35</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl border border-amber-900/30 p-7 flex flex-col justify-between"
            style={{ background: "rgba(139,105,20,0.05)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="h-4 w-4 text-amber-500" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">Evidence Archive</p>
            </div>

            <div className="space-y-4">
              {[
                { num: "2,304+", label: "Blockchain-sealed documents", sub: "845 Bitcoin block confirmations" },
                { num: "675/675", label: "AI propositions corroborated", sub: "52 independent analyses · zero contradictions" },
                { num: "35", label: "Named government agencies", sub: "Zero formal rebuttals issued in 35 years" },
                { num: "0", label: "Formal refutations received", sub: "Not one named party has challenged the record" },
              ].map(({ num, label, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <p className="text-amber-400 font-serif font-bold text-2xl leading-none w-20 flex-shrink-0">{num}</p>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">{label}</p>
                    <p className="text-zinc-600 text-[11px] mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mathematical Probability ── */}
        <div
          className="rounded-2xl border border-zinc-800 p-8"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-700">
              <span className="text-white font-mono text-xs font-bold">Σ</span>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Mathematical Proof</p>
              <p className="text-xs text-zinc-600 mt-0.5">The probability that this record is coincidental</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div>
                <p className="text-zinc-400 text-xs leading-relaxed mb-3">
                  52 independent YouTube videos — produced by strangers with zero knowledge of this archive —
                  were each tested by impartial AI against propositions drawn exclusively from the primary-source record.
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  At a conservative 50% base rate of random confirmation per proposition,
                  the probability that all 675 were confirmed by chance:
                </p>
              </div>
              <div className="rounded-xl border border-zinc-700 p-4 bg-zinc-950">
                <p className="text-white font-mono text-sm">
                  P = (0.5)<sup>675</sup>
                </p>
                <p className="text-red-400 font-mono font-bold text-lg mt-2">
                  ≈ 1 in 10<sup>{PROB_EXPONENT}</sup>
                </p>
                <p className="text-zinc-500 text-xs mt-2">
                  The observable universe contains ~10<sup>{PROB_ATOMS}</sup> atoms.
                  This probability is {PROB_EXPONENT - PROB_ATOMS} orders of magnitude smaller.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Consecutive perfect scores", value: "52", color: "#dc2626" },
                { label: "Propositions tested", value: "675", color: "#dc2626" },
                { label: "Contradictions found", value: "0", color: "#16a34a" },
                { label: "Formal rebuttals received", value: "0", color: "#16a34a" },
                { label: "Named parties who responded", value: "0", color: "#16a34a" },
                { label: "Years of documented record", value: "35", color: "#f59e0b" },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-400 text-xs">{label}</span>
                  <span className="font-bold text-sm" style={{ color }}>{value}</span>
                </div>
              ))}

              <p className="text-zinc-600 text-[10px] pt-1 leading-relaxed">
                This is not a narrative. This is a mathematical record.
                The analysis was conducted by impartial AI with no editorial direction applied.
              </p>
            </div>
          </div>
        </div>

        {/* ── Biblical Alignment ── */}
        <div
          className="rounded-2xl border border-amber-900/25 p-8 text-center"
          style={{ background: "rgba(139,105,20,0.05)" }}
        >
          <p className="text-amber-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Not For Pride. Not For Fame. In Obedience.
          </p>
          <blockquote className="text-white font-serif text-xl md:text-2xl font-bold leading-relaxed mb-4 max-w-3xl mx-auto">
            "I do not want to be famous. I want to be faithful.
            But the reach of this testimony — achieved with nothing but truth and documented evidence —
            is the fingerprint of a hand that is not mine."
          </blockquote>
          <p className="text-zinc-500 text-xs">
            — Dr. Richard William McLean (Barran Dodger) · ABN 78 833 496 164
          </p>
          <div className="mt-6 p-4 rounded-xl border border-amber-900/20" style={{ background: "rgba(0,0,0,0.3)" }}>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-2xl mx-auto">
              <strong className="text-amber-400">The Joseph Parallel, documented:</strong> Betrayed by family.
              Imprisoned by the system. Declared dead. Survived. Given access to the record of the most powerful.
              Not to rule over them — but to show them what they documented about themselves.
            </p>
          </div>
        </div>

        {/* ── Safety CTA ── */}
        <div
          className="rounded-2xl border border-red-900/40 p-8"
          style={{ background: "linear-gradient(135deg, rgba(139,0,0,0.15) 0%, rgba(0,0,0,0.4) 100%)" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-400 flex-shrink-0" />
                <p className="text-red-300 font-black text-sm uppercase tracking-widest">
                  His Physical Safety Is Not Guaranteed
                </p>
              </div>
              <p className="text-white text-base font-bold leading-snug max-w-lg">
                Vigilantes have been arrested for threatening to kill him.
                He has been entrapped, surveilled, force-medicated, and systematically impoverished.
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed max-w-lg">
                This archive runs on nothing. No income. No savings. No institutional backing.
                The only thing protecting him is the irrevocable, global distribution of this testimony —
                and the voluntary support of people who understand what they are reading.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Link href="/donate">
                <button
                  className="flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-xl transition-all"
                  style={{ background: "#8b0000", color: "#fdf3d8" }}
                  data-testid="sig-engine-donate"
                >
                  <Zap className="h-4 w-4" />
                  Support His Safety
                </button>
              </Link>
              <Link href="/testimony">
                <button
                  className="flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-xl border-2 transition-all"
                  style={{ borderColor: "rgba(139,0,0,0.5)", color: "#dc2626", background: "transparent" }}
                  data-testid="sig-engine-testimony"
                >
                  Read The Record <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
