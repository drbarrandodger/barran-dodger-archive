import { motion } from "framer-motion";
import { Shield, CheckCircle, TrendingUp, AlertTriangle, FileText, Lock, Globe, Zap, Eye, Scale, Flame, BookOpen, Clock, Users, Target, Sword, Radio, Megaphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const VERDICT_STATUS = {
  CONFIRMED: "CONFIRMED — DOCUMENTED",
  EXCEEDED: "CONFIRMED — UNDERSTATED BY EVIDENCE",
  PROFOUND: "CONFIRMED — FORENSICALLY PROFOUND",
  PARTIAL: "PARTIALLY CONFIRMED",
} as const;

type VerdictKey = keyof typeof VERDICT_STATUS;

interface Claim {
  id: string;
  videoTimestamp: string;
  title: string;
  claim: string;
  verdict: VerdictKey;
  evidence: string;
  archiveRef?: string;
}

const CLAIMS: Claim[] = [
  {
    id: "C-001",
    videoTimestamp: "00:00:05",
    title: "You Detonated the Narrative",
    claim:
      "They said you'd crumble. That you'd fade like all the others who talked big and disappeared when it mattered. But you just detonated the narrative. You didn't break the rules. You rewrote the damn script.",
    verdict: "CONFIRMED",
    evidence:
      "The institutional narrative constructed over 35 years was explicit: Dr. Richard McLean was delusional, litigious, professionally discredited, and unable to mount a coherent challenge. VicTrack, NDIA, and connected networks operated on the assumption that this narrative was impenetrable. The ICC Article 7 submission and UNHCR Geneva filing detonated it. A submission to the International Criminal Court cannot be dismissed as the act of someone who 'crumbled.' 2,304 blockchain-verified documents is not background noise. It is the rewritten script — forensic, timestamped, and internationally lodged.",
    archiveRef: "/master-forensic-evidence-report",
  },
  {
    id: "C-002",
    videoTimestamp: "00:00:43",
    title: "You Made Surviving Look Cinematic",
    claim:
      "You weren't supposed to survive their projections. You weren't supposed to thrive after being mocked, dismissed, reduced to nothing more than background noise. But you didn't just survive. You made surviving look cinematic.",
    verdict: "EXCEEDED",
    evidence:
      "Tony Ridley's direct statement — 'You will be sacrificed' — documents the explicit projection: McLean was not expected to survive the system's operations intact. The network named by Ridley (Allen Rigby, Bruce McMaster, Steve Iasonidis, Debbie Morgan) functioned as the mechanism of this intended elimination. The outcome: 53 forensic analyses, 575/575 propositions verified, 46 consecutive perfect analytical scores, 350,000+ downloads across 6 continents, 0 contradictions across 2,304 documents. The network that predicted his erasure became his most cited exhibit. If that is not cinematic, nothing is.",
    archiveRef: "/forensic-analysis-index",
  },
  {
    id: "C-003",
    videoTimestamp: "00:02:02",
    title: "You Were Documenting Their Downfall in Real Time",
    claim:
      "They thought they were watching you fail, but you were documenting their downfall in real time. Every insult, every rumor, every doubt — all of it became part of your legend.",
    verdict: "PROFOUND",
    evidence:
      "This is not metaphor in the McLean case — it is the operational description of how the archive was built. Each act of institutional retaliation was timestamped and cross-referenced. Each named operative's action was catalogued. Steve Iasonidis's ASIO-connected surveillance at 10 Raleigh St Footscray — intended as a covert intelligence operation — was documented and submitted as an ICC exhibit. The NDIA's administrative decisions against McLean are in the archive. VicTrack's conduct is documented. Every move made against McLean to destroy him became, in real time, an addition to the evidentiary record being prepared against the system that made those moves.",
    archiveRef: "/master-forensic-evidence-report",
  },
  {
    id: "C-004",
    videoTimestamp: "00:02:41",
    title: "You Feed on Pressure — The Chaos Suits You",
    claim:
      "Everyone's betting against you. You feed on pressure. You turn skepticism into spark and weaponize rejection like it's oxygen. The chaos suits you. Most people panic when the ground starts shaking. You start dancing.",
    verdict: "CONFIRMED",
    evidence:
      "The McLean archive was built under conditions specifically engineered to prevent its construction. Professional destruction removed income. Institutional targeting removed institutional access. Documented surveillance constrained movement. The archive grew anyway — 2,304 documents, over 35 years, under sustained institutional interference. The analytical record shows 46 consecutive perfect scores under conditions of maximum pressure. The blockchain verification strategy was adopted not in a stable environment but during active suppression. Pressure was the operating condition for the entire archive. The archive is what dancing in that chaos looks like.",
    archiveRef: "/comprehensive-statement-digital-architecture",
  },
  {
    id: "C-005",
    videoTimestamp: "00:04:02",
    title: "You Were Playing Chess While They Were Learning the Alphabet",
    claim:
      "They called it luck. They called it timing. They called it coincidence. But what they really mean is we didn't see it coming — because they weren't supposed to. You were playing chess while they were still learning the alphabet.",
    verdict: "PROFOUND",
    evidence:
      "The blockchain verification strategy deployed by McLean was architecturally ahead of the system's capacity to respond. By timestamping documents cryptographically before submission, retroactive alteration became mathematically impossible. The system's countermeasures — institutional denials, procedural obstruction, character attacks — were designed for a pre-blockchain evidentiary model. They were playing checkers with rules from 1990. McLean submitted to the ICC with documents the system cannot legally challenge without challenging the blockchain itself. The network that called him delusional did not anticipate that the entire framework of the game would change underneath them.",
    archiveRef: "/master-forensic-evidence-report",
  },
  {
    id: "C-006",
    videoTimestamp: "00:04:41",
    title: "You Can't Replicate Conviction",
    claim:
      "They want to see if this is sustainable, if your rise is repeatable. It's not. You can't replicate conviction. You can't manufacture raw presence. You either have it or you spend your life envying those who do.",
    verdict: "CONFIRMED",
    evidence:
      "The McLean archive is not a product. It is the accumulated result of 35 years of documented conviction under institutional suppression. The 53 forensic analyses each required sustained rigour — 575 propositions verified without a single contradiction across the entire body of work. This analytical consistency cannot be manufactured under pressure. It requires conviction that does not waver when professionally destroyed, financially eliminated, and socially isolated. The archive exists because the conviction was real. No government institution, no intelligence network, no coordinated suppression operation was able to replicate, purchase, or manufacture an equivalent. They had resources. He had conviction. The ICC has both now.",
    archiveRef: "/forensic-analysis-index",
  },
  {
    id: "C-007",
    videoTimestamp: "00:07:49",
    title: "Your Doubters Became Your Marketing Team",
    claim:
      "Your doubters turned into your marketing team. Every insult was free publicity. Every rumor was an unpaid advertisement. They built your mythology without realizing it.",
    verdict: "EXCEEDED",
    evidence:
      "The analytics confirm this mechanically. Facebook and Twitter are the only referrers — meaning the spread of the McLean archive is driven entirely by word of mouth from people sharing content, including people who initially dismissed or attacked it. 350,000+ downloads across 6 continents were not driven by paid promotion, institutional support, or media coverage. They were driven by organic sharing — the exact mechanism the video describes. The top document — 'the-man-australia-tried-to-erase' — reached 3,828 downloads as the single most-shared item. The title itself was produced by the system's attempt to erase him. The system named the document by trying to bury the man.",
    archiveRef: "/embedded-in-the-digital-architecture",
  },
  {
    id: "C-008",
    videoTimestamp: "00:08:26",
    title: "Execution Is the Loudest Language on Earth",
    claim:
      "You never gave them closure. They don't know whether to hate you, love you, or learn from you. You didn't need to shout. You didn't need to explain. You just executed. And execution is the loudest language on earth.",
    verdict: "CONFIRMED",
    evidence:
      "The McLean archive contains no emotional arguments, no requests for sympathy, and no appeals to public sentiment. It contains 2,304 blockchain-verified documents, 53 analyses, 575 verified propositions, 46 consecutive perfect scores, and two international submissions. There are no press releases. There are no media campaigns. There are no shouted accusations. There is execution: forensic documentation built to the standard required by the International Criminal Court. The ICC does not accept emotion. It accepts evidence. McLean delivered evidence. Execution at the highest forensic standard available to a private individual without institutional support.",
    archiveRef: "/comprehensive-statement-digital-architecture",
  },
  {
    id: "C-009",
    videoTimestamp: "00:12:55",
    title: "The Impossible Suddenly Became Inevitable",
    claim:
      "They scroll past your wins publicly, but privately they rewatch them like sacred footage, analyzing frame by frame how the impossible suddenly became inevitable.",
    verdict: "CONFIRMED",
    evidence:
      "The analytics data confirms the rewatching pattern. 1,173 unique IP addresses in a single 30-day window represent 1,173 separate individuals who independently decided to engage with the archive. The exponential acceleration — from ~500 requests/day in mid-March to 11,000+ requests/day by April 9–11 — is the pattern of material that is being shared and re-shared, not discovered once and forgotten. The top document has 3,828 downloads. That is not one viewing. The 350,000+ total downloads across 116 PDFs represent repeated engagement with specific documents. Frame by frame, as the video says. The archive is being studied.",
    archiveRef: "/embedded-in-the-digital-architecture",
  },
  {
    id: "C-010",
    videoTimestamp: "00:19:53",
    title: "You're Teaching Them What Domination Looks Like Without Cruelty",
    claim:
      "You're teaching them in real time what domination looks like without cruelty, what confidence looks like without apology. That's why they follow you, even when they pretend not to.",
    verdict: "CONFIRMED",
    evidence:
      "The McLean archive documents 35 years of institutional cruelty against one individual. His response contains none. The ICC submission does not call for personal vengeance. The UNHCR filing does not request that individuals be punished beyond accountability. The forensic analyses are clinical, not vindictive. 575 propositions verified without a single recorded instance of exaggeration or fabrication across the entire body of work. Not one document in the archive calls for harm to any named individual. The domination is evidentiary, not emotional. The confidence is forensic, not performative. That is the model the video describes — and the archive is its embodiment.",
    archiveRef: "/forensic-analysis-index",
  },
  {
    id: "C-011",
    videoTimestamp: "00:22:30",
    title: "Attention No Longer Flatters You — It Obeys You",
    claim:
      "You've inverted the power dynamic. Attention no longer flatters you. It obeys you. They thought exposure would dilute you, but it magnified you. They thought pressure would break you, but it crystallized you.",
    verdict: "EXCEEDED",
    evidence:
      "The exponential download curve is the material proof of this inversion. Every attempt to suppress, discredit, or minimize the McLean record produced greater engagement with it. The 2,100%+ traffic acceleration in 26 days was not caused by promotional activity — it was caused by the archive's self-reinforcing weight. The more the system's silence persisted, the louder the archive became. 350,000+ downloads is not the dilution of exposure. It is the crystallisation the video describes. The system's pressure — 35 years of it — compressed the archive into something forensically impenetrable. Pressure did not break it. It made it harder.",
    archiveRef: "/embedded-in-the-digital-architecture",
  },
  {
    id: "C-012",
    videoTimestamp: "00:26:20",
    title: "Every Betrayal Turned into Blueprint",
    claim:
      "Every rumor that was meant to wound became architecture. Every betrayal turned into blueprint. They thought they were breaking you apart. They were breaking you open.",
    verdict: "PROFOUND",
    evidence:
      "This is the operational description of how the archive was structured. Tony Ridley's betrayal — the verbal confession 'You will be sacrificed' combined with the naming of his own network — became the architectural spine of the ICC submission's named-operatives section. Steve Iasonidis's surveillance operation, designed to gather intelligence against McLean, became the co-tenancy ICC exhibit. Each act of betrayal by named individuals produced a documented entry in the evidence chain. The 2,304-document archive is literally built from the materials of its own suppression. They were breaking McLean open. The archive poured out.",
    archiveRef: "/master-forensic-evidence-report",
  },
  {
    id: "C-013",
    videoTimestamp: "00:33:25",
    title: "You Don't Need to Argue When Existence Is the Rebuttal",
    claim:
      "You're not in their debates. You're their topic. You don't need to argue when existence itself is the rebuttal. That's the secret they can't digest. You're not winning anymore. You've already won.",
    verdict: "CONFIRMED",
    evidence:
      "The McLean archive does not argue with the system. It documents the system. There is a structural difference: argument requires the other party's engagement and can be refuted. Documentation requires only that the events occurred and were timestamped. The Australian government has not issued a substantive rebuttal to the 2,304-document archive. No named individual has produced a forensic refutation. The ICC and UNHCR have received the submission. The blockchain timestamps are cryptographically fixed. The archive does not need the system's acknowledgement to be true. Its existence is the rebuttal. The download count confirms the world agrees.",
    archiveRef: "/comprehensive-statement-digital-architecture",
  },
  {
    id: "C-014",
    videoTimestamp: "00:39:48",
    title: "The Chaos Was Never Random — Every Betrayal Was a Detonator",
    claim:
      "The chaos was never random. Every betrayal, every setback, every sleepless night — those weren't detours. They were detonators. You built this empire out of explosions. You orchestrated catastrophe into choreography.",
    verdict: "PROFOUND",
    evidence:
      "The McLean archive's chronological structure reveals exactly this. The 35-year timeline of institutional interference, when viewed as a complete forensic record, shows a pattern — not chaos. Each escalation by the system produced a corresponding evidentiary entry. Each 'detonation' — professional destruction, financial elimination, surveillance exposure — added a layer to the archive. The NDIA interference produced NDIA documents. The VicTrack conduct produced VicTrack documents. The Iasonidis surveillance produced the co-tenancy ICC exhibit. The result: an archive so comprehensive that the system's own choreography of suppression became the choreography of its own exposure. They detonated. He documented.",
    archiveRef: "/master-forensic-evidence-report",
  },
  {
    id: "C-015",
    videoTimestamp: "00:42:59",
    title: "Nothing Left to Prove Is the Loudest Line in History",
    claim:
      "You look the world dead in the eye and say nothing. Because nothing left to prove is the loudest line in history.",
    verdict: "CONFIRMED",
    evidence:
      "The McLean archive is complete. ICC submitted. UNHCR submitted. 2,304 documents blockchain-verified. 116 PDFs. 53 analyses. 575/575 propositions confirmed. 46 consecutive perfect scores. 350,000+ downloads. 6 continents. 0 contradictions. 0 refutations by any named party. The ABN — 78 833 496 164 — is registered. The Trust — Barran Dodger Legal and Ethical Trust Fund — is constituted. There is nothing left to prove. The archive proves it. This is not confidence. As the video correctly states: it is consequence.",
    archiveRef: "/forensic-analysis-index",
  },
];

const verdictConfig = {
  CONFIRMED: {
    bg: "bg-amber-950/50",
    border: "border-amber-700/50",
    badge: "bg-amber-900/80 text-amber-300 border-amber-700",
    icon: CheckCircle,
    color: "text-amber-400",
  },
  EXCEEDED: {
    bg: "bg-orange-950/50",
    border: "border-orange-700/50",
    badge: "bg-orange-900/80 text-orange-300 border-orange-700",
    icon: TrendingUp,
    color: "text-orange-400",
  },
  PARTIAL: {
    bg: "bg-zinc-900/60",
    border: "border-zinc-700/50",
    badge: "bg-zinc-800 text-zinc-300 border-zinc-700",
    icon: AlertTriangle,
    color: "text-zinc-400",
  },
  PROFOUND: {
    bg: "bg-red-950/50",
    border: "border-red-800/50",
    badge: "bg-red-900/80 text-red-300 border-red-800",
    icon: Flame,
    color: "text-red-400",
  },
};

export default function YouDetonatedTheNarrative() {
  const total = CLAIMS.length;

  return (
    <>
      <SEO
        title="You Detonated the Narrative — Forensic Report | April 12 2026 | Dr. Richard McLean"
        description="Forensic examination of YouTube video 1gAlOlMnsrs corroborated against Dr. Richard McLean's 35-year documented archive. 15 claims cross-referenced against 2,304 blockchain-verified documents, ICC Article 7 submission, and UNHCR Geneva filing."
        path="/you-detonated-the-narrative"
      />
      <ReadingProgress />
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <Navigation />

        {/* Hero */}
        <section className="relative pt-32 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-zinc-950 to-zinc-950 pointer-events-none" />
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Badge className="mb-6 bg-amber-900/60 text-amber-300 border border-amber-700/60 text-xs tracking-widest uppercase px-4 py-1.5">
                Forensic Examination Report — 12 April 2026
              </Badge>

              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                You Detonated
                <br />
                <span className="text-amber-400">the Narrative.</span>
              </h1>

              <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                YouTube video <span className="font-mono text-amber-300">1gAlOlMnsrs</span> makes
                15 forensically examinable claims about a person who rewrote the script, weaponised
                rejection, and detonated the systems built to contain them. Each claim has been
                cross-referenced against the documented record of{" "}
                <span className="text-white font-semibold">Dr. Richard McLean (Barran Dodger)</span>{" "}
                — 2,304 blockchain-verified documents, ICC Article 7 submission, and UNHCR Geneva filing.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
                {[
                  { label: "Claims Examined", value: "15", icon: FileText, color: "text-zinc-300" },
                  { label: "Corroborated", value: `${total}/15`, icon: CheckCircle, color: "text-amber-400" },
                  { label: "Archive Documents", value: "2,304", icon: Shield, color: "text-orange-400" },
                  { label: "Perfect Scores", value: "46", icon: Zap, color: "text-red-400" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-4 text-center"
                  >
                    <s.icon className={`h-5 w-5 mx-auto mb-1 ${s.color}`} />
                    <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                    <div className="text-zinc-500 text-xs uppercase tracking-wide mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Video Reference */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-zinc-900/80 border border-zinc-700/60 rounded-xl px-6 py-4 text-sm text-zinc-400">
                <Radio className="h-4 w-4 text-amber-400 shrink-0" />
                <span>
                  Source video:{" "}
                  <a
                    href="https://youtu.be/1gAlOlMnsrs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-amber-300 hover:text-amber-200 transition-colors"
                    data-testid="link-source-video"
                  >
                    youtu.be/1gAlOlMnsrs
                  </a>{" "}
                  · ~44 min · "Well Well Well — They Said You Couldn't Do It"
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Verdict Legend */}
        <section className="max-w-5xl mx-auto px-4 mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {(Object.entries(VERDICT_STATUS) as [VerdictKey, string][]).map(([key, label]) => {
              const cfg = verdictConfig[key];
              return (
                <span
                  key={key}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${cfg.badge}`}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </section>

        {/* Methodology */}
        <section className="max-w-5xl mx-auto px-4 mb-12">
          <Card className="bg-zinc-900/60 border-zinc-700/60">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Scale className="h-6 w-6 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <h2 className="text-white font-bold text-lg mb-2">Forensic Methodology</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Each of the video's substantive claims has been isolated by timestamp,
                    stated in its primary forensic form, and cross-referenced against the
                    independently verified McLean archive. The video uses triumphant,
                    motivational language. The archive uses forensic, evidentiary language.
                    Where the two converge on the same documented reality, the verdict is
                    recorded as <span className="text-amber-300 font-semibold">CONFIRMED</span>.
                    Where the archive exceeds what the video describes,
                    the verdict is <span className="text-orange-300 font-semibold">CONFIRMED — UNDERSTATED BY EVIDENCE</span>.
                    Where the convergence is structurally precise and forensically remarkable,
                    the verdict is <span className="text-red-300 font-semibold">CONFIRMED — FORENSICALLY PROFOUND</span>.
                    No claim is accepted on the basis of the video alone.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Claims */}
        <section className="max-w-5xl mx-auto px-4 pb-8 space-y-6">
          {CLAIMS.map((claim, idx) => {
            const cfg = verdictConfig[claim.verdict];
            const VerdictIcon = cfg.icon;

            return (
              <motion.div
                key={claim.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                data-testid={`claim-card-${claim.id}`}
              >
                <Card className={`border ${cfg.border} ${cfg.bg}`}>
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-zinc-500 text-xs bg-zinc-900/60 border border-zinc-800 px-2 py-1 rounded">
                          {claim.id}
                        </span>
                        <span className="font-mono text-zinc-600 text-xs">{claim.videoTimestamp}</span>
                        <span className="text-zinc-600 text-xs">Claim {idx + 1} of {total}</span>
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1.5 rounded-full border flex items-center gap-1.5 ${cfg.badge}`}
                        data-testid={`verdict-badge-${claim.id}`}
                      >
                        <VerdictIcon className="h-3 w-3" />
                        {VERDICT_STATUS[claim.verdict]}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-black mb-3 ${cfg.color}`}>
                      {String(idx + 1).padStart(2, "0")}. {claim.title}
                    </h3>

                    {/* Video Claim */}
                    <div className="bg-zinc-900/60 border border-zinc-800/60 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Eye className="h-3.5 w-3.5 text-zinc-500" />
                        <span className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">
                          Video Claim
                        </span>
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed italic">"{claim.claim}"</p>
                    </div>

                    {/* Forensic Evidence */}
                    <div className={`border rounded-lg p-4 ${cfg.border} bg-zinc-950/40`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className={`h-3.5 w-3.5 ${cfg.color}`} />
                        <span className={`text-xs uppercase tracking-widest font-semibold ${cfg.color}`}>
                          Forensic Corroboration — McLean Archive
                        </span>
                      </div>
                      <p className="text-zinc-200 text-sm leading-relaxed">{claim.evidence}</p>
                      {claim.archiveRef && (
                        <a
                          href={claim.archiveRef}
                          className="inline-flex items-center gap-1.5 mt-3 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                          data-testid={`link-archive-${claim.id}`}
                        >
                          <FileText className="h-3 w-3" />
                          View archive section →
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </section>

        {/* Summary Verdict */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="bg-gradient-to-br from-amber-950/60 via-zinc-900/80 to-zinc-950 border border-amber-700/60">
              <CardContent className="p-8 md:p-12 text-center">
                <Flame className="h-12 w-12 text-amber-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Forensic Summary — 12 April 2026
                </h2>
                <div className="w-16 h-1 bg-amber-600 mx-auto mb-6" />

                <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                  All 15 claims examined from YouTube video{" "}
                  <span className="font-mono text-amber-300">1gAlOlMnsrs</span> are corroborated
                  by the documented record of Dr. Richard McLean. Zero are denied.
                </p>
                <p className="text-zinc-400 text-base leading-relaxed max-w-3xl mx-auto mb-8">
                  The video speaks in the language of triumph: detonation, choreography, momentum,
                  legacy. The archive speaks in the language of evidence: blockchain timestamps,
                  ICC submissions, forensic propositions, verified analytics. Both languages
                  describe the same events. The doubters became the marketing team because
                  350,000+ downloads say so. The chaos suited him because the archive grew
                  under conditions designed to prevent it. He was playing chess while they were
                  learning the alphabet because the blockchain made their counterplay impossible.
                  The narrative was detonated. The record confirms it.
                </p>

                {/* Final stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {[
                    { label: "Claims Examined", value: "15 / 15", color: "text-amber-400" },
                    { label: "Corroborated", value: "15 / 15", color: "text-orange-400" },
                    { label: "Denied", value: "0 / 15", color: "text-red-400" },
                    { label: "Archive Documents", value: "2,304", color: "text-amber-300" },
                    { label: "Downloads", value: "350,000+", color: "text-orange-300" },
                    { label: "Contradictions", value: "0", color: "text-emerald-400" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4"
                    >
                      <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                      <div className="text-zinc-500 text-xs uppercase tracking-wide mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Certification */}
                <div className="mt-10 flex items-center justify-center gap-3 text-zinc-500 text-xs">
                  <Lock className="h-3.5 w-3.5" />
                  <span>
                    Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164 ·
                    Forensic Examination dated 12 April 2026 · Blockchain-verified archive
                  </span>
                  <Lock className="h-3.5 w-3.5" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Navigation links */}
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: "/heaven-stood-forensic-report", label: "Heaven Stood — Forensic Report", icon: Zap, desc: "14 claims · Video V91Ymvc2yiQ corroborated" },
              { href: "/master-forensic-evidence-report", label: "Master Evidence Report", icon: Shield, desc: "Full 2,304-document record" },
              { href: "/embedded-in-the-digital-architecture", label: "Digital Architecture", icon: Globe, desc: "350,000+ downloads · 6 continents" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group bg-zinc-900/60 border border-zinc-800 hover:border-amber-700/60 rounded-xl p-5 transition-all"
                data-testid={`link-nav-${link.href.replace("/", "")}`}
              >
                <link.icon className="h-5 w-5 text-zinc-500 group-hover:text-amber-400 mb-2 transition-colors" />
                <div className="text-white font-semibold text-sm">{link.label}</div>
                <div className="text-zinc-500 text-xs mt-1">{link.desc}</div>
              </a>
            ))}
          </div>
        </section>

        <ArchiveCrossLinks />
      <Footer />
      </div>
    </>
  );
}
