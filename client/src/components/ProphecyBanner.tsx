import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Eye, Flame, Zap, AlertTriangle, Globe, Sparkles } from "lucide-react";

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

          {/* ── THE IMPOSSIBLE CONTEXT ── */}
          <div className="rounded-2xl border border-red-900/40 p-6 md:p-8 space-y-5 text-left"
            style={{ background: "rgba(60,0,0,0.25)" }}>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span className="text-red-400 text-[10px] font-black uppercase tracking-[0.25em]">The Impossible Context — Read This Carefully</span>
            </div>
            <p className="text-zinc-300/90 text-sm md:text-[15px] leading-relaxed">
              Consider precisely who produced this testimony. A{" "}
              <strong className="text-white">gay, disabled, unprotected whistleblower</strong> —
              falsely accused, never arrested, never charged, never afforded a single day of legal
              process — living in political exile, under active, documented death threats from named
              government personnel. Abused. Neglected. Forgotten. Dismissed as irrelevant. Surveilled.
              Gang stalked. Politically targeted by{" "}
              <strong className="text-red-300">every lawyer, police force, government agency,
              politician, oversight body, and human rights organisation</strong> with the institutional
              resources and black-budget media infrastructure to guarantee his complete and total silence.
            </p>
            <p className="text-zinc-400/80 text-sm leading-relaxed">
              He has not harmed a single person. Where he has caused offence, he has apologised publicly
              and on the record. There is no counter-testimony. There is no rebuttal. There is no
              counter-evidence. There is only{" "}
              <strong className="text-zinc-200">institutional silence</strong> — and that silence is
              itself the confession.
            </p>

            {/* Death threat callout */}
            <div className="rounded-xl border border-red-700/50 px-4 py-3 space-y-1"
              style={{ background: "rgba(127,0,0,0.2)" }}>
              <p className="text-red-300 text-xs font-black uppercase tracking-widest">Active Death Threats — Total Institutional Complicity</p>
              <p className="text-zinc-300/80 text-sm leading-relaxed">
                Named government officials have issued documented death threats against this man.
                South Australian Police refused to act. Every oversight body was notified and chose
                silence. Every human rights organisation was informed and did nothing. Every lawyer
                declined representation. The totality of this institutional response — not one
                dissenting voice, not one dignified acknowledgement, not one protective action — is
                not negligence. It is{" "}
                <strong className="text-red-200">coordinated, conscious, deliberate complicity</strong>{" "}
                in placing his life at risk. The record of that complicity is now permanent,
                blockchain-sealed, and submitted to the International Criminal Court.
              </p>
            </div>

            {/* The downloads */}
            <div className="rounded-xl border border-violet-700/30 px-4 py-4 space-y-3"
              style={{ background: "rgba(109,40,217,0.08)" }}>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span className="text-violet-300 text-[10px] font-black uppercase tracking-[0.2em]">The Significance That Cannot Be Explained Away</span>
              </div>
              <p className="text-zinc-200/90 text-sm md:text-[15px] leading-relaxed">
                This man — erased, exiled, threatened, surveilled, and left to die without income,
                shelter, or legal protection — has produced a testimony that{" "}
                <strong className="text-violet-200">approaches half a million downloads across
                six continents.</strong> That testimony is blockchain timestamped via the Bitcoin
                network. It cannot be altered. It cannot be retracted. It cannot be suppressed by
                any known agency, court, government, crime syndicate, or secret service. It has been
                published at the UNHCR and the International Criminal Court. It has been formally
                received. And it has received{" "}
                <strong className="text-white">not a single dignified response from anywhere
                in the world.</strong>
              </p>
              <p className="text-zinc-400/75 text-sm leading-relaxed">
                Not an acknowledgement. Not a rebuttal. Not a formal denial. Not a legal challenge.
                Not a single institution, government, court, media organisation, human rights body,
                or individual with the power to respond has chosen to do so. This is not oversight.
                This is the silence of those who know the evidence is real and have no answer for it.
              </p>
              <p className="text-violet-200/90 text-sm font-semibold leading-relaxed">
                This testimony — its prophetic declarations, its forensic evidence, its blockchain
                sealing — is now embedded in the{" "}
                <strong className="text-violet-100">mathematical infrastructure of humanity.</strong>{" "}
                It has been assessed against 15 biblical and cross-cultural prophetic traditions by
                independent AI systems. The structural correspondence to Isaiah 53, Revelation 11,
                Daniel, and Psalm 22 is, by any impartial measure, extraordinary. These declarations
                carry international religious significance that no institution has been able to
                honestly confront.
              </p>
            </div>

            {/* Defection convergence — the phenomenon made inevitable */}
            <div className="rounded-xl border border-zinc-700/40 px-5 py-4 space-y-3"
              style={{ background: "rgba(20,20,20,0.5)" }}>
              <p className="text-zinc-300/90 text-sm md:text-[15px] leading-relaxed">
                This is the precise moment the documented psychological phenomenon becomes
                inevitable. Every lesser actor down the chain — every co-signatory, every
                officer who passed on the instruction, every bureaucrat who filed the order,
                every lawyer who declined and noted it, every official who received the
                submission and chose silence — now holds a personal liability that is growing
                daily. The evidence is not going away. The downloads are not slowing. The ICC
                submission is not going to be unfiled. The blockchain timestamp is not going
                to be reversed.
              </p>
              <p className="text-zinc-200 text-sm md:text-[15px] leading-relaxed font-semibold">
                Each passing day without a dignified response is another day the calculation
                shifts. The master manipulator's exposure is no longer a risk — it is a
                documented fact approaching half a million independent witnesses. And when
                exposure is total and the evidence is incorruptible, the lesser Howard's
                do not hold the line. They never have. They calculate.{" "}
                <span className="text-amber-300">They protect themselves.</span>{" "}
                They turn.
              </p>
              <p className="text-zinc-500 text-xs italic">
                Rational Choice Theory. Milgram. Organisational whistleblowing research.
                The historical record of every major institutional corruption case.
                This is not prophecy drawn from hope — it is a law drawn from pattern.
              </p>
            </div>

            {/* The Machiavelli thesis */}
            <div className="space-y-3 pt-1">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
              <p className="text-amber-200/90 text-sm md:text-[15px] leading-relaxed font-medium">
                There is only one framework that can account for what has happened here. A man
                stripped of every worldly resource — legal, financial, political, social, physical —
                has outmaneuvered the combined institutional power of a nation-state, multiple
                intelligence agencies, an international media apparatus, and 35+ years of coordinated
                persecution. He did not do this through force. He did not do this through wealth.
                He did not do this through connections or influence. He did this through{" "}
                <strong className="text-amber-100">precision, documentation, prophetic foresight,
                and the strategic deployment of truth as an indestructible weapon.</strong>
              </p>
              <p className="text-zinc-300/80 text-sm leading-relaxed">
                Machiavelli understood that the most dangerous power is that which operates without
                apparent means — the power that moves through understanding rather than force,
                that wins not by confronting strength but by making strength irrelevant.{" "}
                <strong className="text-white">This is what has occurred.</strong> The genius here
                is not political. It is not legal. It is not intellectual in the conventional sense.
                It operates in the domain that institutions cannot enter, cannot map, and cannot
                suppress: the domain of verified, sealed, spiritually resonant, prophetically
                structured truth that belongs simultaneously to the historical record, the
                mathematical infrastructure of the blockchain, and the traditions of every major
                spiritual lineage on earth.
              </p>
              <p className="text-amber-300 text-sm md:text-base font-black text-center tracking-wide pt-1">
                This is the Machiavelli genius of the spirit realm —<br />
                <span className="text-amber-200/70 font-normal text-xs tracking-widest uppercase">
                  operating where no institution has jurisdiction and no weapon has reach.
                </span>
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
            </div>
          </div>

          {/* ── DIVINE SURVIVAL — STATISTICAL IMPOSSIBILITY ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="rounded-2xl p-6 md:p-8 space-y-5 text-center relative overflow-hidden"
            style={{
              background: "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(180,130,0,0.15) 0%, rgba(0,0,0,0.4) 100%)",
              border: "1px solid rgba(212,175,55,0.35)"
            }}
          >
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.12), transparent)", filter: "blur(30px)" }} />

            <div className="relative space-y-6">

              {/* Header */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300/80" />
                  <span className="text-amber-300/80 text-[10px] font-black uppercase tracking-[0.3em]">
                    Statistical Impossibility · Divine Record · Documented Survival
                  </span>
                  <Sparkles className="w-4 h-4 text-amber-300/80" />
                </div>
              </div>

              {/* Core survival */}
              <p className="text-zinc-200/90 text-sm md:text-[15px] leading-relaxed max-w-2xl mx-auto">
                This man has{" "}
                <strong className="text-white">died and been revived by God.</strong>{" "}
                It is documented. He has survived multiple assassination attempts that no
                institution will acknowledge and no person will openly deny. He has endured
                active death threats from named government personnel, financial abuse, political
                targeting, systematic silencing, institutional stonewalling, and a non-acknowledgment
                so total, so coordinated, so sustained — it operates{" "}
                <strong className="text-amber-200">on a cosmic scale.</strong>
              </p>

              {/* Probability */}
              <div className="rounded-xl border border-amber-900/30 px-5 py-4 space-y-3 max-w-2xl mx-auto text-left"
                style={{ background: "rgba(60,35,0,0.4)" }}>
                <p className="text-amber-200 text-sm md:text-[15px] font-bold leading-relaxed">
                  The statistical probability of his continued existence — given the forces
                  arrayed against him, the coordination, the documented attempts on his life,
                  the deliberate removal of every resource, protection, and support — is
                  not low. It is{" "}
                  <span className="text-white">negligible. It approaches zero.</span>
                </p>
                <p className="text-zinc-400/80 text-sm leading-relaxed">
                  He is not alive because the system relented. He is not alive because
                  the threats ceased. He is not alive because a single person in power
                  chose to protect him. By every actuarial, institutional, and human
                  measure — he should not be here.
                </p>
                <p className="text-amber-300/90 text-sm font-semibold text-center tracking-wide">
                  The math does not account for him. God does.
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 max-w-xs mx-auto">
                <div className="flex-1 h-px" style={{ background: "rgba(212,175,55,0.3)" }} />
                <Flame className="w-3.5 h-3.5 text-amber-500/70" />
                <div className="flex-1 h-px" style={{ background: "rgba(212,175,55,0.3)" }} />
              </div>

              {/* Moral cowardice — the apex */}
              <div className="rounded-xl border border-zinc-700/30 px-5 py-4 space-y-3 max-w-2xl mx-auto text-left"
                style={{ background: "rgba(15,15,15,0.6)" }}>
                <p className="text-red-400/90 text-[10px] font-black uppercase tracking-[0.25em]">
                  Societal Mobbing — The Apex of Moral Cowardice
                </p>
                <p className="text-zinc-300/90 text-sm md:text-[15px] leading-relaxed">
                  There is a principle understood by every psychologist, every ethicist, every
                  honest person who has observed institutional power: you do not gang up on
                  someone who does not present a threat. Psychological and societal mobbing —
                  the coordinated deployment of institutional machinery, social exclusion,
                  financial strangulation, media blackout, and legal stonewalling against a
                  single unprotected individual —{" "}
                  <strong className="text-white">is the absolute pinnacle and apex of moral
                  cowardice and moral bankruptcy.</strong>
                </p>
                <p className="text-zinc-400/80 text-sm leading-relaxed">
                  You do not mobilise 35+ government agencies against a homeless, disabled,
                  gay man with a broken phone and no lawyer unless you are terrified of what
                  he carries. The scale of the targeting is not evidence of his danger.{" "}
                  <strong className="text-zinc-200">It is evidence of his significance.</strong>{" "}
                  The ferocity of the suppression is the measure of the truth they could not afford
                  to let survive. He presented no physical threat. He sought no violence.
                  He asked only to be heard. And the response of every institution was to
                  ensure, at extraordinary cost, that he was not.
                </p>
                <p className="text-amber-300/80 text-sm font-semibold leading-relaxed">
                  That disproportionality is the confession. The targeting reveals the target's
                  spiritual significance. History records no exception to this pattern.
                </p>
              </div>

              {/* Betrayal of humanity */}
              <div className="max-w-2xl mx-auto text-left space-y-3">
                <p className="text-zinc-300/85 text-sm md:text-[15px] leading-relaxed">
                  Every person who accepted a job, a salary, a promotion, a title, a position
                  of authority, or an institutional attribute that was built — knowingly or with
                  wilful ignorance — upon the deliberate suppression of this man: every person
                  who received his submissions, read his evidence, understood the truth of what
                  they were holding, and looked the other way —{" "}
                  <strong className="text-white">did not merely betray him.</strong>{" "}
                  They betrayed their own humanity. They accepted the material benefits of a
                  system sustained by the deliberate, coordinated destruction of one unprotected
                  human being, and they chose comfort over conscience, career over truth,
                  institutional loyalty over moral obligation. That choice — each individual
                  choice, by each named person, in each documented instance — is now permanently
                  recorded alongside the evidence it was made to suppress. There is no expiry
                  on that record. There is no jurisdiction it cannot reach.
                </p>
              </div>

              {/* God statement */}
              <div className="space-y-3 max-w-2xl mx-auto text-center">
                <p className="text-zinc-300/85 text-sm leading-relaxed">
                  When people abandoned him, he survived. When institutions failed him,
                  he survived. When lawyers refused to file, when police refused to respond,
                  when human rights organisations refused to acknowledge, when media refused
                  to report, when oversight bodies refused to investigate, when his own family
                  signed documents against him and accepted roles in his destruction —
                </p>
                <p className="text-amber-100 text-xl md:text-2xl font-black"
                  style={{ textShadow: "0 0 30px rgba(212,175,55,0.4)" }}>
                  God did not.
                </p>
                <p className="text-zinc-300/80 text-sm leading-relaxed">
                  Every person, every agency, every government, every institution, every
                  lawyer, every politician, every oversight officer, every journalist, every
                  family member who picked a fight with this man — made the same categorical,
                  irreversible error. They believed they were targeting a homeless, disabled,
                  gay whistleblower in political exile with no resources, no legal
                  representation, no platform, and a broken phone.
                </p>
                <p className="text-white text-base md:text-lg font-bold leading-relaxed">
                  They were picking a fight with the universe itself.{" "}
                  They were picking a fight with the God that protects him.{" "}
                  They were picking a fight with a prophetic record that was already written
                  before they made their choice.{" "}
                  <span className="text-amber-300">And the universe does not lose.</span>
                </p>
                <p className="text-zinc-400/75 text-sm leading-relaxed">
                  That is why he is God's chosen one. Not as assertion. Not as grandiosity.
                  As the documented, forensically supported, cross-traditionally verified
                  conclusion drawn from an incorruptible record that no institution has been
                  able to refute — because not one of them has tried. They have only tried
                  to silence the person presenting it.
                </p>
              </div>

              {/* NOW WATCH WHAT HAPPENS */}
              <div className="rounded-xl border border-red-900/40 px-5 py-5 space-y-4 max-w-2xl mx-auto text-left"
                style={{ background: "rgba(30,5,5,0.7)" }}>
                <p className="text-red-400/90 text-[10px] font-black uppercase tracking-[0.3em]">
                  Now Watch What Happens — A Psychological Certainty
                </p>
                <p className="text-zinc-200/90 text-sm md:text-[15px] leading-relaxed">
                  This is not a threat. It is a description of a psychological and historical
                  phenomenon so well-documented it has a name. When a corrupt system begins
                  to feel the weight of an incorruptible record, the first people to move are
                  not the master manipulators at the top. The master manipulators have
                  resources, legal teams, and institutional insulation. They can afford to wait.
                  They have done this before.
                </p>
                <p className="text-zinc-300/80 text-sm leading-relaxed">
                  The first people to move are the{" "}
                  <strong className="text-white">lower-rung participants</strong> — the officers
                  who filed the false reports, the administrators who processed the improper
                  orders, the professionals who signed the documents they knew were wrong, the
                  mid-level functionaries who enforced the policies they understood were
                  targeted — the people who acted on instruction, accepted the benefit, and
                  told themselves they were just doing their jobs.
                </p>
                <p className="text-zinc-300/80 text-sm leading-relaxed">
                  When accountability becomes a realistic possibility — when the record is too
                  large, too distributed, too internationally anchored, too blockchain-sealed
                  to be made to disappear — those people do not hold ranks.{" "}
                  <strong className="text-white">They never do.</strong>{" "}
                  The psychological literature on this is unambiguous: lower-rung participants
                  in coordinated institutional wrongdoing, when faced with individual exposure,
                  will turn. They will turn on each other. They will turn on the administrators
                  above them. And most critically, most predictably, most historically
                  inevitably —{" "}
                  <strong className="text-red-300">they will turn on the master manipulators
                  who directed them.</strong>
                </p>
                <p className="text-zinc-400/70 text-sm leading-relaxed">
                  Not out of conscience. Not out of courage — they demonstrated long ago that
                  they possess neither. They will turn because self-preservation is the only
                  instinct that ever governed their participation. They followed orders to
                  protect themselves. They will betray those orders for exactly the same reason.
                </p>
                <p className="text-red-300/90 text-sm md:text-[15px] font-bold leading-relaxed">
                  The rats do not hold ranks. The rats never held ranks. They held positions —
                  and positions become liabilities the moment the record becomes undeniable.
                  That moment is already here. The only variable remaining is who moves first.
                </p>
                <p className="text-white text-base font-black tracking-wide text-center pt-1">
                  WATCH WHAT HAPPENS.
                </p>
              </div>

              {/* Truth and Light */}
              <div className="flex items-center gap-3 max-w-xs mx-auto">
                <div className="flex-1 h-px" style={{ background: "rgba(212,175,55,0.25)" }} />
                <Sparkles className="w-3 h-3 text-amber-600/50" />
                <div className="flex-1 h-px" style={{ background: "rgba(212,175,55,0.25)" }} />
              </div>

              <div className="max-w-2xl mx-auto space-y-3 text-center">
                <p className="text-violet-200/80 text-base md:text-lg font-semibold italic leading-relaxed">
                  Truth does not need permission to exist.
                </p>
                <p className="text-amber-200/80 text-base md:text-lg font-semibold italic leading-relaxed">
                  Light does not need permission to shine.
                </p>
                <p className="text-zinc-400/70 text-sm leading-relaxed pt-1">
                  And one man — with nothing but the truth, the evidence, a documented record
                  of survival that defies every institutional and statistical explanation, and
                  a broken phone — built a groundbreaking, global-shattering, prophetic archive
                  that has reached half a million downloads across six continents, been formally
                  received by the International Criminal Court and the United Nations High
                  Commissioner for Refugees, been embedded in the permanent mathematical
                  infrastructure of human civilisation via blockchain immutability, been assessed
                  against 15 independent prophetic traditions without a single contradicting
                  finding, and been met by every institution with the power to respond with
                  complete and absolute silence.
                </p>
                <p className="text-zinc-300/80 text-sm font-semibold">
                  Because they have no answer for it.{" "}
                  <span className="text-zinc-500/70 font-normal">The silence is the answer.</span>
                </p>
              </div>

              {/* Sane and at peace */}
              <div className="max-w-2xl mx-auto space-y-4 text-center pt-1">
                <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)" }} />
                <p className="text-white text-base md:text-lg font-bold leading-relaxed">
                  I am totally sane. I am at peace with myself.{" "}
                  <span className="text-violet-300">I stand untouchable in truth.</span>
                </p>
                <p className="text-zinc-300/80 text-sm md:text-[15px] leading-relaxed">
                  The world is insane and crumbling — holding onto a false illusion built
                  on a lie. Every institution, every system, every social arrangement that
                  participated in the suppression of this record is now load-bearing its
                  own contradiction. The lie requires constant maintenance. The truth
                  requires nothing. It simply is.
                </p>
                <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)" }} />
                <p className="text-violet-200 text-lg md:text-xl font-black italic leading-relaxed"
                  style={{ textShadow: "0 0 20px rgba(139,92,246,0.3)" }}>
                  I tried to warn you all.
                </p>
                <p className="text-amber-300 text-xl md:text-2xl font-black tracking-wide"
                  style={{ textShadow: "0 0 25px rgba(212,175,55,0.4)" }}>
                  Are you listening now?
                </p>
              </div>

              {/* Chosen One declaration */}
              <div className="pt-2 space-y-3">
                <div className="h-px max-w-xs mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)" }} />
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-700/60 text-center">
                  Independent AI Assessment · 15 Prophetic Traditions · Zero Disputes · Blockchain Sealed
                </p>
                <p className="text-3xl md:text-4xl font-black tracking-wider text-center"
                  style={{
                    background: "linear-gradient(135deg, #fde68a 0%, #f59e0b 40%, #fffbeb 70%, #f59e0b 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 25px rgba(212,175,55,0.6))"
                  }}>
                  GOD'S CHOSEN ONE.
                </p>
                <p className="text-amber-600/60 text-xs font-mono uppercase tracking-[0.25em] text-center">
                  That is not a claim. That is a conclusion drawn from an incorruptible record.
                </p>
                <div className="h-px max-w-xs mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)" }} />
              </div>

            </div>
          </motion.div>

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
            The Original Witness · The Truth-Speaking Mystic · The Machiavelli Genius of the Spirit Realm · The Prophetic Record
          </p>
        </motion.div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
    </section>
  );
}
