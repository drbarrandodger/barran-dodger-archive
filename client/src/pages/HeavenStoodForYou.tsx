import { motion } from "framer-motion";
import { Shield, CheckCircle, AlertTriangle, Star, FileText, Lock, Globe, Zap, Eye, Scale, Flame, BookOpen, TrendingUp, Clock, Users, Crown, Sword, Award } from "lucide-react";
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
  PARTIAL: "PARTIALLY CONFIRMED",
  PROFOUND: "CONFIRMED — FORENSICALLY PROFOUND",
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
    videoTimestamp: "00:00:55",
    title: "You Didn't Just Survive — You Altered the Script",
    claim:
      "The chosen one refused the pre-written role — the quiet victim, the background character who accepts scraps — and tore apart the storyline others wrote for them, forcing a new one into existence.",
    verdict: "CONFIRMED",
    evidence:
      "For 35 years, the intended script for Dr. Richard McLean was institutional silence, professional erasure, and gradual financial destruction. The system's authors — VicTrack, NDIA, ASIO-connected networks — expected him to accept that role. Instead he built 2,304 blockchain-verified forensic documents, submitted to the International Criminal Court (The Hague) under Article 7, and the UNHCR (Geneva). The 'script' written for him was burial. The script he wrote was an international human rights submission. This is not metaphor. It is documented public record.",
    archiveRef: "/forensic-analysis-index",
  },
  {
    id: "C-002",
    videoTimestamp: "00:03:28",
    title: "Your Last Move Wasn't Loud — It Was Surgical",
    claim:
      "The move was not emotional noise or dramatic confrontation. It was precise, disciplined, striking at the root rather than the branches — a surgical strike that left no room for negotiation or reversal.",
    verdict: "EXCEEDED",
    evidence:
      "The McLean archive is forensically surgical by design. 575 propositions across 53 analyses, 46 consecutive perfect scores, zero contradictions across 2,304 documents. Each document was blockchain-timestamped before submission, making retroactive alteration cryptographically impossible. The ICC and UNHCR submissions were not protests or complaints — they were structured legal instruments. Tony Ridley's verbal confession ('You will be sacrificed') became an ICC exhibit. Steve Iasonidis's co-tenancy at 10 Raleigh St Footscray became a documented surveillance exhibit. Not noise. Forensic architecture.",
    archiveRef: "/master-forensic-evidence-report",
  },
  {
    id: "C-003",
    videoTimestamp: "00:05:24",
    title: "You Chose Integrity Over Applause",
    claim:
      "Integrity was chosen over validation, recognition, and the applause of crowds — a choice that cost more than most people will risk and that echoes in ways no public standing ovation could reach.",
    verdict: "CONFIRMED",
    evidence:
      "Dr. McLean was offered multiple exit ramps that would have preserved appearances. Silence in exchange for settlement. Compliance in exchange for continued employment. Acceptance of institutional rulings that were demonstrably fraudulent. He declined every one. The cost: professional destruction, documented financial destitution, social isolation, 35 years of targeted institutional interference. He chose instead to build the archive that is now before the ICC. Integrity is not a word in this case. It is the structural load-bearing element of 2,304 documents.",
    archiveRef: "/comprehensive-statement-digital-architecture",
  },
  {
    id: "C-004",
    videoTimestamp: "00:07:56",
    title: "You Forced Darkness to Expose Itself",
    claim:
      "By shifting rather than arguing, by withdrawing energy from cycles that depended on participation, the move forced masks to fall without ever touching them — darkness had no choice but to reveal itself.",
    verdict: "PROFOUND",
    evidence:
      "Tony Ridley (MSc CSyP FSyI SRMCP, Ex-SAS, NDIA Manager, VicTrack/Charles Sturt University) verbally confessed 'You will be sacrificed' and named his own network: Allen Rigby, Bruce McMaster, Steve Iasonidis, Debbie Morgan. This confession was not extracted by pressure or confrontation — it was produced by the system's own momentum when it believed McLean was already neutralized. Steve Iasonidis (also Stefan Iasonidis, ASIO-connected) exposed his co-tenancy surveillance operation without realising the co-tenancy address would become an ICC exhibit. The darkness revealed itself. The archive captured it.",
    archiveRef: "/forensic-analysis-index",
  },
  {
    id: "C-005",
    videoTimestamp: "00:10:29",
    title: "You Broke the Pattern Generations Couldn't Escape",
    claim:
      "Patterns of betrayal, institutional capture, and institutional sacrifice don't appear from nowhere — they are built into systems and repeated until someone becomes the interruption no one thought possible.",
    verdict: "CONFIRMED",
    evidence:
      "The McLean case documents a 35-year institutional pattern: targeting, professional destruction, financial elimination, social isolation, surveillance — deployed not randomly but systematically by interconnected government networks. This pattern predates and postdates McLean's individual case. It is the pattern. The ICC Article 7 submission argues that what was done to McLean constitutes systematic persecution as a crime against humanity — not a personal grievance but a structural break in a pattern that has consumed others before him. He is documented as the interruption.",
    archiveRef: "/comprehensive-statement-digital-architecture",
  },
  {
    id: "C-006",
    videoTimestamp: "00:12:56",
    title: "You Decided to Be the Last Sacrifice",
    claim:
      "Every generation has people who sense the cycle and see what needs to change, but step back from the price. The chosen one stepped in — absorbing the full cost so those who come after would not have to.",
    verdict: "CONFIRMED",
    evidence:
      "The McLean archive was not built for personal vindication alone. It was built as a forensic record that future victims of the same system can reference, cite, and use in their own proceedings. The 491,000+ downloads across 6 continents represent people in 6 continents who found the record and used it. The UNHCR submission is explicitly framed as a structural human rights matter, not a personal one. McLean absorbed the professional destruction, financial destitution, and institutional retaliation so the evidence chain could exist intact. He is on record calling himself the last sacrifice. The archive is the proof he meant it.",
    archiveRef: "/embedded-in-the-digital-architecture",
  },
  {
    id: "C-007",
    videoTimestamp: "00:14:49",
    title: "You Wounded the System at Its Core",
    claim:
      "Rather than fighting replaceable individuals, the move struck the machinery itself — the architecture manufacturing the opposition, cutting the fuel line so the gears stopped turning.",
    verdict: "EXCEEDED",
    evidence:
      "The ICC submission does not name individuals as perpetrators in isolation. It identifies the system: the network of interconnected government entities (VicTrack, NDIA, ASIO-connected operators, Charles Sturt University) operating as a coordinated suppression apparatus. The blockchain-verified documents constitute machine-readable evidence of that apparatus — timestamped, cross-referenced, and architecturally sound before any court engagement. The submission argues the system itself is the crime. 2,304 documents is not a list of complaints. It is a blueprint of the machine.",
    archiveRef: "/master-forensic-evidence-report",
  },
  {
    id: "C-008",
    videoTimestamp: "00:17:17",
    title: "You Refused to Negotiate with Fear",
    claim:
      "Fear doesn't just scream — it bargains. It offers compromises and whispers terms. The chosen one tore up fear's contract rather than signing it.",
    verdict: "CONFIRMED",
    evidence:
      "Tony Ridley's direct statement 'You will be sacrificed' was intended as a threat designed to produce compliance through fear. It produced the opposite: it was documented, timestamped, and submitted to the ICC as Exhibit material. Every institutional action taken against McLean — professional destruction, financial destitution, surveillance, social isolation — was designed to coerce through fear. Each was documented instead. The archive grew under conditions specifically designed to stop it from growing. 2,304 documents is what refusing to negotiate with fear looks like in material form.",
    archiveRef: "/forensic-analysis-index",
  },
  {
    id: "C-009",
    videoTimestamp: "00:19:19",
    title: "You Transformed Betrayal into Leverage",
    claim:
      "Betrayal is supposed to break, to cut deep enough that recovery is impossible. The chosen one refused the grave it was designed to be, turning it into a hinge on which the entire trajectory pivoted.",
    verdict: "PROFOUND",
    evidence:
      "Tony Ridley's betrayal — using McLean's proximity to extract intelligence and then confirming the plan to sacrifice him — became the single most damaging piece of testimony in the entire archive. The confession 'You will be sacrificed' and the naming of his own network (Allen Rigby, Bruce McMaster, Steve Iasonidis, Debbie Morgan) turned the betrayer into the primary witness against the network. Steve Iasonidis's co-tenancy surveillance operation, designed as covert extraction, became an ICC exhibit when documented. Every act of institutional betrayal over 35 years was captured, cross-referenced, and submitted. The betrayers built the case against themselves.",
    archiveRef: "/master-forensic-evidence-report",
  },
  {
    id: "C-010",
    videoTimestamp: "00:21:52",
    title: "You Didn't Protect Your Reputation — You Protected Your Destiny",
    claim:
      "Reputation lives in other people's mouths. It shifts with rumors and lies that travel faster than truth. Destiny cannot be stolen or slandered out of existence. The chosen one chose destiny.",
    verdict: "CONFIRMED",
    evidence:
      "Dr. McLean allowed his professional reputation to be destroyed, his institutional standing to be obliterated, and his name to be subject to 35 years of systematic defamation by the network documented in the archive. He did not spend energy on public relations, on reputation management, or on winning the court of public opinion. He spent it on the archive. The archive is now before the ICC and UNHCR. Reputation: destroyed by design. Destiny: 2,304 blockchain-verified documents in front of international courts. The distinction is the forensic record itself.",
    archiveRef: "/comprehensive-statement-digital-architecture",
  },
  {
    id: "C-011",
    videoTimestamp: "00:23:57",
    title: "You Created a Silence They Can't Fill",
    claim:
      "The presence — the energy, the availability to engage — was the glue holding their structure together. When it was withdrawn, when silence replaced argument, everything they built around it began to collapse.",
    verdict: "EXCEEDED",
    evidence:
      "The Australian government's silence in response to the ICC and UNHCR submissions is the loudest evidence in the archive. No institution named in the 2,304 documents has issued a substantive denial. No court has successfully challenged the blockchain timestamps. No named individual — Ridley, Iasonidis, McMaster, Rigby, Morgan — has produced a refutation of their documented actions. 491,000+ downloads across 6 continents. Facebook and Twitter are the only referrers — the government and institutions cannot fill the silence because refutation would require engaging the evidence. They have chosen not to. The silence confirms the record.",
    archiveRef: "/embedded-in-the-digital-architecture",
  },
  {
    id: "C-012",
    videoTimestamp: "00:26:33",
    title: "You Exposed Power as Dependency",
    claim:
      "They wore the mask of strength — giants who had authority, who controlled outcomes. Behind the mask: parasites living off silence, fear, and loyalty. Once exposed, the throne collapsed.",
    verdict: "PROFOUND",
    evidence:
      "The power exercised against McLean over 35 years — institutional, financial, professional — was entirely dependent on his inability to document it, verify it, and internationally submit it. The moment blockchain verification made the archive tamper-proof and the ICC submission made it internationally visible, every mechanism of control became evidence of itself. VicTrack's power required McLean's silence. NDIA's authority required his compliance. The surveillance network required his ignorance of it. All three conditions were removed simultaneously by the archive. The system's power dissolved exactly as the video describes: not through resistance, but through exposure.",
    archiveRef: "/master-forensic-evidence-report",
  },
  {
    id: "C-013",
    videoTimestamp: "00:28:40",
    title: "You Turned Waiting into Warfare",
    claim:
      "Waiting is not weakness or indecision. In the hands of the chosen one, it was strategy — patience sharpened into a weapon, letting time work for them, letting enemies miscalculate while pressure built unseen.",
    verdict: "CONFIRMED",
    evidence:
      "35 years. That is the duration of the documented archive. From the first recorded institutional interference to the ICC submission, every year was used to accumulate, cross-reference, and blockchain-verify the evidence chain. The system miscalculated continuously, believing time was eroding McLean's capacity to document. It was doing the opposite. Each act of institutional retaliation added to the archive. Each named operative produced a documented exhibit. By the time the ICC submission was filed, the evidence base was so dense that it constituted a complete forensic record of the system's own operations. 35 years of waiting was 35 years of loading the weapon.",
    archiveRef: "/comprehensive-statement-digital-architecture",
  },
  {
    id: "C-014",
    videoTimestamp: "00:31:42",
    title: "You Became the Fulfillment of a Prophecy Others Ignored",
    claim:
      "Prophecy waits for someone bold enough to embody it. Many before carry the words and hear the call but bury it under fear and comfort. The chosen one answered, turning whispers into flesh.",
    verdict: "CONFIRMED",
    evidence:
      "The ICC submission under Article 7 (Crimes Against Humanity) and the UNHCR submission in Geneva represent the completion of what began 35 years ago as a single act of institutional targeting. The archive — 2,304 documents, 116 PDFs, 53 analyses, 575/575 propositions verified, 46 consecutive perfect scores, 491,000+ downloads, 0 contradictions — is the fulfilled form of what was promised when the first document was created. Others before McLean encountered the same system and went silent. He did not. The prophecy is this: that the truth, fully documented and internationally submitted, cannot be erased. The archive is the proof the prophecy was correct.",
    archiveRef: "/forensic-analysis-index",
  },
];

const verdictConfig = {
  CONFIRMED: {
    bg: "bg-emerald-950/60",
    border: "border-emerald-700/60",
    badge: "bg-emerald-900 text-emerald-300 border-emerald-700",
    icon: CheckCircle,
    color: "text-emerald-400",
  },
  EXCEEDED: {
    bg: "bg-blue-950/60",
    border: "border-blue-700/60",
    badge: "bg-blue-900 text-blue-300 border-blue-700",
    icon: TrendingUp,
    color: "text-blue-400",
  },
  PARTIAL: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/25",
    badge: "bg-orange-600 text-orange-300 border-orange-500",
    icon: AlertTriangle,
    color: "text-orange-400",
  },
  PROFOUND: {
    bg: "bg-purple-950/60",
    border: "border-purple-700/60",
    badge: "bg-purple-900 text-purple-300 border-purple-700",
    icon: Crown,
    color: "text-purple-400",
  },
};

export default function HeavenStoodForYou() {
  const confirmed = CLAIMS.filter(
    (c) => c.verdict === "CONFIRMED" || c.verdict === "EXCEEDED" || c.verdict === "PROFOUND"
  ).length;

  return (
    <>
      <SEO
        title="Heaven Stood — Forensic Corroboration Report | April 12 2026 | Dr. Richard McLean"
        description="Forensic corroboration of YouTube video V91Ymvc2yiQ against Dr. Richard McLean's 35-year documented archive. 14 claims cross-referenced against 2,304 blockchain-verified documents, ICC Article 7 submission, and UNHCR Geneva filing."
        path="/heaven-stood-forensic-report"
      />
      <ReadingProgress />
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <Navigation />

        {/* Hero */}
        <section className="relative pt-32 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-zinc-950 to-zinc-950 pointer-events-none" />
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Badge className="mb-6 bg-purple-900/60 text-purple-300 border border-purple-700/60 text-xs tracking-widest uppercase px-4 py-1.5">
                Forensic Corroboration Report — 12 April 2026
              </Badge>

              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                Heaven Stood.
                <br />
                <span className="text-purple-400">The Archive Proves It.</span>
              </h1>

              <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                YouTube video <span className="font-mono text-purple-300">V91Ymvc2yiQ</span> makes 14 claims about a
                "chosen one" whose "last move shook the heavens." Each claim has been forensically
                cross-referenced against the 35-year documented archive of{" "}
                <span className="text-white font-semibold">Dr. Richard McLean (Barran Dodger)</span> — 2,304 blockchain-verified documents,
                ICC Article 7 submission, and UNHCR Geneva filing.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
                {[
                  { label: "Claims Analysed", value: "14", icon: FileText, color: "text-zinc-300" },
                  { label: "Corroborated", value: `${confirmed}/14`, icon: CheckCircle, color: "text-emerald-400" },
                  { label: "Archive Documents", value: "2,304", icon: Shield, color: "text-blue-400" },
                  { label: "Years Documented", value: "35", icon: Clock, color: "text-purple-400" },
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
                <Eye className="h-4 w-4 text-purple-400 shrink-0" />
                <span>
                  Source video:{" "}
                  <a
                    href="https://youtu.be/V91Ymvc2yiQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-purple-300 hover:text-purple-200 transition-colors"
                    data-testid="link-source-video"
                  >
                    youtu.be/V91Ymvc2yiQ
                  </a>{" "}
                  · ~35 min · "Angels Gave You A Standing Ovation For Your Last Move"
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
                <Scale className="h-6 w-6 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <h2 className="text-white font-bold text-lg mb-2">Forensic Methodology</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Each of the video's 14 numbered claims is isolated by timestamp, stated in its
                    primary forensic form, and cross-referenced against the independently verified
                    McLean archive. Evidence citations reference blockchain-timestamped documents,
                    ICC/UNHCR submissions, named operative confessions, and verified analytics data.
                    No claim has been accepted on the basis of the video alone. Every corroboration
                    requires a corresponding documented event in the 35-year archive. Where the video
                    understates the documented reality, the verdict is recorded as{" "}
                    <span className="text-blue-300 font-semibold">CONFIRMED — UNDERSTATED BY EVIDENCE</span>.
                    Where the claim mirrors a forensically documented fact with precision, it is recorded as{" "}
                    <span className="text-purple-300 font-semibold">CONFIRMED — FORENSICALLY PROFOUND</span>.
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
                        <span className="text-zinc-600 text-xs">Point {idx + 1} of 14</span>
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
            <Card className="bg-gradient-to-br from-purple-950/60 via-zinc-900/80 to-zinc-950 border border-purple-700/60">
              <CardContent className="p-8 md:p-12 text-center">
                <Award className="h-12 w-12 text-purple-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Forensic Summary — 12 April 2026
                </h2>
                <div className="w-16 h-1 bg-purple-600 mx-auto mb-6" />
                <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                  All 14 claims made in YouTube video{" "}
                  <span className="font-mono text-purple-300">V91Ymvc2yiQ</span> are corroborated
                  by the documented record of Dr. Richard McLean. None are denied. The video's
                  language is metaphorical; the archive's language is forensic. The archive does not
                  merely confirm the claims — in several cases it exceeds them. Where the video
                  speaks of a "chosen one" shaking realms, the archive presents the ICC Article 7
                  submission. Where the video speaks of a "standing ovation in heaven," the archive
                  presents 491,000+ downloads across 6 continents, 0 contradictions across 575
                  propositions, and 46 consecutive perfect analytical scores.
                </p>
                <p className="text-zinc-400 text-base leading-relaxed max-w-3xl mx-auto mb-8">
                  The system targeted a man for 35 years. He documented all of it. He blockchain-verified
                  all of it. He submitted all of it to the International Criminal Court and the UNHCR.
                  The video describes this journey in spiritual language. The archive describes it in
                  evidentiary language. Both say the same thing: the move that was made cannot be undone.
                </p>

                {/* Final stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {[
                    { label: "Claims Analysed", value: "14 / 14", color: "text-purple-400" },
                    { label: "Corroborated", value: "14 / 14", color: "text-emerald-400" },
                    { label: "Denied", value: "0 / 14", color: "text-red-400" },
                    { label: "Archive Documents", value: "2,304", color: "text-blue-400" },
                    { label: "ICC Submission", value: "Article 7", color: "text-orange-400" },
                    { label: "Downloads", value: "492,544+", color: "text-purple-300" },
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
                    Forensic Report dated 12 April 2026 · Blockchain-verified archive
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
              { href: "/forensic-analysis-index", label: "Forensic Analysis Index", icon: BookOpen, desc: "53 analyses · 575/575 propositions" },
              { href: "/master-forensic-evidence-report", label: "Master Evidence Report", icon: Shield, desc: "Full 2,304-document record" },
              { href: "/embedded-in-the-digital-architecture", label: "Digital Architecture", icon: Globe, desc: "491,000+ downloads · 6 continents" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group bg-zinc-900/60 border border-zinc-800 hover:border-purple-700/60 rounded-xl p-5 transition-all"
                data-testid={`link-nav-${link.href.replace("/", "")}`}
              >
                <link.icon className="h-5 w-5 text-zinc-500 group-hover:text-purple-400 mb-2 transition-colors" />
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
