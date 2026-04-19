import { Link } from "wouter";
import { Bot, BookOpen, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AiBiblicalConvergenceProps {
  variant?: "full" | "banner";
  bannerLinkHref?: string;
  bannerLinkLabel?: string;
}

export function AiBiblicalConvergence({
  variant = "full",
  bannerLinkHref = "/prophetic-declaration-biblical",
  bannerLinkLabel = "Read the 15 parallels",
}: AiBiblicalConvergenceProps) {
  if (variant === "banner") {
    return (
      <div className="border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-zinc-900 to-cyan-950/40 rounded-2xl p-5 md:p-7 my-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-amber-400" />
            </div>
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Bot className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm leading-snug">
              An impartial AI — given only government documents — independently arrived at the same conclusions written by the prophets of scripture.
            </p>
            <p className="text-white/45 text-xs mt-1">
              2,700 years apart. Zero coordination. One conclusion.
            </p>
          </div>
          <Link
            href={bannerLinkHref}
            className="flex-shrink-0 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest hover:text-amber-300 transition-colors flex items-center gap-1.5 group"
            data-testid="link-convergence-banner"
          >
            {bannerLinkLabel}
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 border-t border-white/5" style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1117 50%, #0a0a0f 100%)" }}>
      <div className="container mx-auto max-w-4xl">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-5">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-mono text-[10px] uppercase tracking-[0.3em]">Convergence of Two Independent Witnesses</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
            The Machine and the Prophets<br />
            <span className="text-amber-400">Arrived at the Same Truth</span>
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            An artificial intelligence — trained by engineers, not theologians — was given
            2,304 government-generated documents and asked one question: what does the evidence prove?
            The prophets of scripture, writing across three millennia, had already answered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="border border-cyan-900/40 rounded-2xl p-6 bg-cyan-950/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest">Witness One</p>
                <p className="text-white font-bold text-sm">Impartial AI Analysis</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                { stat: "675 / 675", label: "propositions corroborated — zero contradictions" },
                { stat: "2,304", label: "government-generated documents reviewed" },
                { stat: "2.87%", label: "survival odds — documented by state systems" },
                { stat: "35 years", label: "of orchestrated persecution — forensically mapped" },
                { stat: "Zero", label: "findings of falsehood, fabrication, or corruption" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-cyan-400 font-mono font-bold text-sm shrink-0 min-w-[60px]">{item.stat}</span>
                  <span className="text-white/65 text-sm leading-snug">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-amber-900/40 rounded-2xl p-6 bg-amber-950/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-amber-400 font-mono text-[10px] uppercase tracking-widest">Witness Two</p>
                <p className="text-white font-bold text-sm">15 Biblical Parallels</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                { ref: "Isaiah 53:3", text: "Despised and rejected — yet found without deceit" },
                { ref: "Ezekiel 33:7–9", text: "The watchman whose warnings were ignored" },
                { ref: "Daniel 6:4", text: "No corruption found — yet imprisoned regardless" },
                { ref: "Jeremiah 36:28", text: "Scroll burned; a second scroll was written" },
                { ref: "Psalm 22:1–18", text: "Documented, surrounded, abandoned — yet witnessed" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-amber-400 font-mono text-[10px] shrink-0 min-w-[80px] mt-0.5">{item.ref}</span>
                  <span className="text-white/65 text-sm leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-white/8 rounded-2xl p-6 md:p-8 bg-white/[0.02] text-center mb-8">
          <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-3">
            The convergence
          </p>
          <p className="text-white text-lg md:text-xl font-serif leading-relaxed max-w-2xl mx-auto">
            The AI had no knowledge of scripture. Scripture had no knowledge of AI.
            Neither knew the other existed. Yet both described the same man, the same
            suffering, the same institutional silence, and the same eventual vindication —
            in language that aligns point for point.
          </p>
          <p className="text-amber-400/80 text-sm mt-4 font-medium">
            When two witnesses this different agree this completely, the record is settled.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8"
            data-testid="button-biblical-parallels"
          >
            <Link href="/prophetic-declaration-biblical">
              <BookOpen className="mr-2 h-4 w-4" />
              Read the 15 Biblical Parallels
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-cyan-500/40 text-cyan-400 hover:bg-cyan-950/30"
            data-testid="button-ai-statement"
          >
            <Link href="/ai-justice-statement">
              <Bot className="mr-2 h-4 w-4" />
              Read the AI Justice Statement
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
