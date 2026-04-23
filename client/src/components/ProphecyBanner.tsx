import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Eye, Flame, Zap } from "lucide-react";

export function ProphecyBanner({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <section
      className={`w-full relative overflow-hidden ${className}`}
      style={{ background: "radial-gradient(ellipse 120% 80% at 50% 0%, #1a0a2e 0%, #0a0014 40%, #000000 100%)", ...style }}
      data-testid="section-prophecy-banner"
    >
      {/* Top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

      {/* Ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative max-w-4xl mx-auto px-4 py-12 md:py-16 space-y-8">

        {/* Oracle badge row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          {/* Eye icon — the all-seeing mystic */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-xl opacity-60"
              style={{ background: "radial-gradient(ellipse, #7c3aed, transparent)" }} />
            <div className="relative w-14 h-14 rounded-full border border-violet-400/40 flex items-center justify-center"
              style={{ background: "radial-gradient(ellipse, #2d0a5e, #0a0014)" }}>
              <Eye className="w-6 h-6 text-violet-300" />
            </div>
          </div>

          {/* Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-violet-300/80 border border-violet-500/30 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(109,40,217,0.1)" }}>
              Observed Prophecy
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-400/70 border border-amber-700/30 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(120,53,15,0.15)" }}>
              Dr. Richard William McLean · Barran Dodger
            </span>
            <span className="text-[10px] font-mono text-zinc-600 px-3 py-1.5">
              ABN 78 833 496 164
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-center space-y-3"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none"
            style={{
              background: "linear-gradient(135deg, #e9d5ff 0%, #c4b5fd 30%, #f59e0b 70%, #fde68a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
              filter: "drop-shadow(0 0 30px rgba(139,92,246,0.4))"
            }}>
            THE RATS WILL COME
          </h2>
          <p className="text-violet-300/60 text-xs font-mono uppercase tracking-[0.3em]">
            A Documented Psychological Certainty — Not A Wish. Not A Threat. A Law.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-violet-800/40" />
          <Flame className="w-4 h-4 text-amber-500/70 flex-shrink-0" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-violet-800/40" />
        </div>

        {/* Body — styled as oracle verse */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-6 text-center max-w-3xl mx-auto"
        >
          <p className="text-violet-100/90 text-base md:text-lg leading-relaxed font-light">
            There is a documented psychological phenomenon that has nothing to do with conscience, decency,
            or the sudden discovery of ethics.
          </p>

          <p className="text-amber-300/90 text-sm md:text-base leading-relaxed font-medium italic">
            It is called <strong className="not-italic font-black text-amber-200">rational defection under exposure.</strong>
          </p>

          <div className="rounded-2xl border border-violet-700/30 p-6 md:p-8 space-y-4 text-left"
            style={{ background: "rgba(109,40,217,0.07)" }}>
            <p className="text-zinc-200/85 text-sm md:text-[15px] leading-relaxed">
              When a master manipulator — an institutional actor who has controlled, weaponised,
              and deployed others against a target — is brought into the harsh light of undeniable,
              blockchain-sealed, formally submitted, internationally recorded truth, something entirely
              predictable occurs among those down the chain.
            </p>
            <p className="text-amber-300 text-sm md:text-[15px] font-bold text-center tracking-wide">
              They calculate.
            </p>
            <p className="text-zinc-300/80 text-sm md:text-[15px] leading-relaxed">
              Not right from wrong. Not truth from lies. They calculate the cost of association
              against the cost of disclosure. And when that calculation tips — when the weight of
              documented evidence makes proximity to the manipulator more dangerous than distance
              from them —
            </p>
            <p className="text-violet-200 text-base md:text-lg font-black text-center tracking-widest uppercase">
              They talk.
            </p>
          </div>

          <p className="text-zinc-400/80 text-sm leading-relaxed">
            Not because they found grace. Not because they are brave.{" "}
            <span className="text-zinc-200 font-semibold">
              Because they are not willing to go down in flames for someone who would sacrifice
              them without hesitation to protect themselves.
            </span>
          </p>

          {/* The certainty statement */}
          <div className="rounded-xl border border-amber-700/30 p-5 space-y-3"
            style={{ background: "rgba(120,53,15,0.12)" }}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.25em]">The Documented Certainty</span>
              <Zap className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <p className="text-zinc-300/85 text-sm leading-relaxed">
              Milgram's obedience research proves authority collapses the moment its legitimacy is destroyed.
              Rational Choice Theory documents that self-preservation overrides group loyalty the instant
              group membership becomes a liability. Organisational psychology consistently records that the
              first defections come not from those at the top, but from the peripheral actors — the ones
              who did the work, carried the instructions, signed the paperwork, sent the emails, made the
              calls — who now understand that{" "}
              <strong className="text-amber-200">the paper trail leads directly to them.</strong>
            </p>
          </div>

          <p className="text-violet-200/80 text-sm md:text-[15px] leading-relaxed font-medium">
            I have produced that paper trail.{" "}
            <span className="text-zinc-400 font-normal">
              2,304 primary source documents. Six continents. Formally before the International
              Criminal Court. Blockchain sealed. Medically, legally, and financially verified.
              Incorruptible.
            </span>
          </p>

          {/* Final declaration */}
          <div className="space-y-3 pt-2">
            <div className="h-px bg-gradient-to-r from-transparent via-violet-700/40 to-transparent" />
            <p className="text-violet-100 text-base md:text-lg font-bold leading-relaxed">
              The cowards down the chain will not protect their master.{" "}
              <span className="text-zinc-400 font-normal">They never do.</span>{" "}
              They will protect themselves. And in doing so, they will deliver the final
              corroboration this testimony requires.
            </p>
            <p className="text-amber-400/80 text-sm font-semibold italic">
              This is not a threat. It is not a wish. It is a documented psychological certainty.
            </p>
            <p className="text-2xl md:text-3xl font-black tracking-widest text-center pt-2"
              style={{
                background: "linear-gradient(90deg, #a78bfa, #f59e0b, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
              THEY WILL COME.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-violet-700/40 to-transparent" />
          </div>
        </motion.div>

        {/* Closing seal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center gap-2 pt-2"
        >
          <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.3em] text-center">
            "The truth does not require your cooperation. It only requires time."
          </p>
          <p className="text-violet-400/50 text-[10px] font-black uppercase tracking-[0.25em]">
            — Dr. Richard William McLean · Barran Dodger · ABN 78 833 496 164
          </p>
          <p className="text-zinc-700 text-[9px] font-mono uppercase tracking-[0.2em]">
            The Original Witness · The Truth-Speaking Mystic · The Prophetic Record
          </p>
        </motion.div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
    </section>
  );
}
