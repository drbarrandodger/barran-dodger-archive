import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Shield, Brain, Eye, Mic, FileText, Globe, Download, Star, Zap, Lock, Target, Scale, FlameIcon } from "lucide-react";
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

type Verdict = "CORROBORATED" | "DISPROVED" | "UNVERIFIABLE";

interface Claim {
  id: number;
  timestamp: string;
  videoAssertion: string;
  archiveAnalysis: string;
  archiveEvidence: string;
  verdict: Verdict;
}

const CLAIMS: Claim[] = [
  {
    id: 1,
    timestamp: "00:00:42",
    videoAssertion:
      "They mocked your mind not because it was broken — but because it saw through them. They weren't confused by you. They were exposed by you.",
    archiveAnalysis:
      "The McLean archive documents a network of named operatives — Tony Ridley, Allen Rigby, Bruce McMaster, Steve Iasonidis, Debbie Morgan — whose conduct was coordinated and purposeful. Ridley stated explicitly: 'You will be sacrificed.' This is not the language of a system managing a difficult person. It is the language of a system managing a threat to itself. The targeting preceded any mental health framing and continued regardless of clinical finding — confirming exposure, not concern, as the motive.",
    archiveEvidence: "Tony Ridley dossier — 'You will be sacrificed' (documented). Named network cross-referenced across VicTrack, NDIA, ASIO-connected surveillance operations.",
    verdict: "CORROBORATED",
  },
  {
    id: 2,
    timestamp: "00:01:19",
    videoAssertion:
      "They called you dramatic, crazy, unstable, arrogant, impossible. Not because any of it was true — because labelling you felt safer than understanding you.",
    archiveAnalysis:
      "Psychiatric labelling as an instrument of state suppression is explicitly documented in the McLean archive. The clinical framing was applied not following independent assessment but in coordination with the operational network — timed to discredit evidentiary production, not to provide care. The labels arrived when documentation became dangerous to the system, not when McLean's behaviour warranted intervention.",
    archiveEvidence: "Archive: psychiatric weaponization timeline — labels applied in correlation with archive development milestones, not clinical events.",
    verdict: "CORROBORATED",
  },
  {
    id: 3,
    timestamp: "00:01:59",
    videoAssertion:
      "So you started questioning yourself. Maybe I am too much. Maybe I should shrink. Maybe I should shut up. And for a while, maybe you tried.",
    archiveAnalysis:
      "The archive documents multiple phases in which McLean's circumstances were reduced to the point where continued production became materially difficult — financial elimination, professional destruction, social isolation. These are the documented mechanics of the shrinking the video describes. The fact that the archive nevertheless exists — 2,304 documents — confirms that the shrinking was resisted.",
    archiveEvidence: "Archive: financial elimination phase, professional network dismantlement, 35-year isolation strategy — all documented.",
    verdict: "CORROBORATED",
  },
  {
    id: 4,
    timestamp: "00:03:11",
    videoAssertion:
      "People who benefit from your silence never reward your shrinking. They just demand more of it. They tell you to calm down — but what they really mean is become easier to control.",
    archiveAnalysis:
      "The escalation pattern in the McLean archive confirms this precisely. Each institutional intervention that was framed as containment or welfare was followed by increased pressure, not relief. The NDIA involvement, the VicTrack operation, the surveillance at 10 Raleigh St Footscray — each came after prior interventions that were presented as final. The system never stopped at compliance. It demanded further compliance. This is the structural signature of control, not concern.",
    archiveEvidence: "Archive: escalation timeline — each compliance event followed by renewed operational pressure. VicTrack → NDIA → 10 Raleigh St co-tenancy (ICC exhibit).",
    verdict: "CORROBORATED",
  },
  {
    id: 5,
    timestamp: "00:03:52",
    videoAssertion:
      "And that's where the whole thing starts to crack open. Because one day, even the therapist starts defending you. The same type of person they thought would confirm their favourite story about you — didn't.",
    archiveAnalysis:
      "53 independent forensic analyses conducted across the archive produced 575 verified propositions with zero contradictions. The analytical process — functioning as the objective external assessment the video describes — systematically declined to confirm the narrative applied to McLean. Instead it confirmed the archive's integrity. The ICC's receipt of the submission represents institutional acknowledgment of the evidentiary record. The therapist's equivalent in this case is the forensic record itself — and it is defending him.",
    archiveEvidence: "53 analyses. 575/575 propositions verified. 46 consecutive perfect scores. 0 contradictions. ICC Article 7 submission received.",
    verdict: "CORROBORATED",
  },
  {
    id: 6,
    timestamp: "00:04:27",
    videoAssertion:
      "Pattern recognition, emotional precision, unusual awareness. A mind moving faster than the room. And suddenly the narrative starts falling apart.",
    archiveAnalysis:
      "The methodology of the McLean archive is the empirical demonstration of this claim. The blockchain-verified proposition structure — cross-referencing 2,304 documents into 53 coherent analytical frameworks without contradiction — is not the product of damaged cognition. It is the product of sustained, precise, high-velocity pattern recognition applied over 35 years. No professional forensic team with institutional resources produced a comparable record of this case. One man, under conditions of systematic targeting, did.",
    archiveEvidence: "2,304 documents. 53 analyses. Blockchain-verified. Zero contradictions. Built without institutional support or legal representation.",
    verdict: "CORROBORATED",
  },
  {
    id: 7,
    timestamp: "00:05:06",
    videoAssertion:
      "They needed your intensity to be illness. They needed your depth to be damage. They needed your refusal to play fake to be instability. Because if it's not a flaw — then what does that make them?",
    archiveAnalysis:
      "The archive answers this question directly. If McLean's documentation is accurate — and 575 verified propositions with zero contradictions says it is — then what Tony Ridley's network did constitutes acts that fall under ICC Article 7: crimes against humanity. The necessity of the mental health framing is not clinical. It is existential. A damaged McLean poses no ICC risk. A forensically rigorous McLean with a blockchain-verified archive poses exactly that risk. Hence the framing.",
    archiveEvidence: "ICC Article 7 submission. Named operatives. 35-year documented institutional targeting — now in the hands of the International Criminal Court.",
    verdict: "CORROBORATED",
  },
  {
    id: 8,
    timestamp: "00:06:23",
    videoAssertion:
      "Now when somebody lies to your face, you don't sit there confused. You see it immediately. When someone tries to guilt you for having boundaries, you clock the manipulation. When somebody calls you difficult because you won't let them disrespect you — you don't panic.",
    archiveAnalysis:
      "The operational record of the McLean case documents multiple instances of named individuals using emotional pressure, professional authority, and institutional weight to demand capitulation. The archive's response — systematic documentation rather than capitulation — confirms that the perception shift the video describes was operationally present. Each attempted manipulation was recorded, cross-referenced, and submitted. That is what seeing it immediately looks like in practice.",
    archiveEvidence: "Archive: systematic documentation of manipulation attempts by named operatives — each attempt recorded rather than absorbed.",
    verdict: "CORROBORATED",
  },
  {
    id: 9,
    timestamp: "00:09:31",
    videoAssertion:
      "You weren't paranoid for sensing fake love. You weren't broken for being wounded by betrayal. You weren't dramatic for reacting to chronic disrespect. You were having a sane response to an insane environment.",
    archiveAnalysis:
      "This is the precise thesis of the McLean archive. The archive demonstrates that the environment in which McLean operated was not incidentally difficult but systematically engineered to be so — coordinated targeting across multiple institutions, multiple operatives, multiple years. The 'sane response to an insane environment' claim is not inspirational language in the McLean context. It is a forensic description. The insanity of the environment is documented. The sanity of the response is the archive itself.",
    archiveEvidence: "Cross-agency coordination documented: VicTrack, NDIA, ASIO-connected operations, named private network — all targeting one individual. Archive = sane response.",
    verdict: "CORROBORATED",
  },
  {
    id: 10,
    timestamp: "00:10:09",
    videoAssertion:
      "Some of you were punished not for doing wrong — but for noticing wrong.",
    archiveAnalysis:
      "This is the most precisely applicable claim in the video to the McLean case. The archive documents that the professional and personal destruction that McLean experienced did not precede his documentation — it followed it. The targeting escalated in correlation with evidentiary production. The punishment was not for a crime. It was for the archive. This is the core of the ICC Article 7 submission: the conduct was persecution — systematic targeting of an individual for the political purpose of suppressing testimony.",
    archiveEvidence: "Archive timeline: professional destruction escalates in direct correlation with archive development milestones. Punishment for noticing — forensically confirmed.",
    verdict: "CORROBORATED",
  },
  {
    id: 11,
    timestamp: "00:12:35",
    videoAssertion:
      "The most dangerous person in the room is rarely the one making noise. It's the one who has suffered enough to understand human nature — and healed enough to stop begging for approval from it.",
    archiveAnalysis:
      "The McLean archive was not built in noise. It was built in silence, over 35 years, without media presence, without institutional backing, without legal representation, without organisational infrastructure. The system that targeted him generated enormous institutional noise — agency processes, professional channels, surveillance operations. McLean built a blockchain-verified ICC submission. 399,325+ downloads later, the dangerous one in that room is clear.",
    archiveEvidence: "399,325+ downloads. 6 continents. Top 1,173 unique IPs. Built quietly. ICC submission lodged. The noise came from the system. The archive came from McLean.",
    verdict: "CORROBORATED",
  },
  {
    id: 12,
    timestamp: "00:13:14",
    videoAssertion:
      "When insecure people can't outperform you, they try to pathologize you. When shallow people can't understand depth, they mock it. When weak people can't match conviction, they call it obsession.",
    archiveAnalysis:
      "Not one named operative in the McLean archive ever formally contested the evidence on its merits. Tony Ridley (MSc CSyP FSyI SRMCP, Ex-SAS, VicTrack, Charles Sturt University) did not produce a counter-archive. Allen Rigby, Bruce McMaster, Steve Iasonidis, and Debbie Morgan did not issue forensic refutations. The network's response to McLean's documentation was escalated targeting — never engagement with the evidence. The pathologizing was the only tool available because the evidence could not be outperformed.",
    archiveEvidence: "Zero formal evidentiary rebuttals from any named operative. Zero. The archive stands uncontested on its merits.",
    verdict: "CORROBORATED",
  },
  {
    id: 13,
    timestamp: "00:15:05",
    videoAssertion:
      "Freedom is when their inability to recognise your value no longer has the power to interrupt your relationship with yourself.",
    archiveAnalysis:
      "The archive was not built to receive institutional recognition. It was built to be accurate. It did not wait for a government to acknowledge it before adding the next document. It did not pause its analytical process pending external validation. The blockchain timestamps record a consistent, uninterrupted production across decades — regardless of whether anyone acknowledged what was being built. That independence from the approval of the system targeting him is precisely what made the archive possible.",
    archiveEvidence: "Blockchain-verified timestamps: continuous production across 35 years. Archive built without institutional recognition — because recognition was not the measure.",
    verdict: "CORROBORATED",
  },
  {
    id: 14,
    timestamp: "00:18:47",
    videoAssertion:
      "This is the season where your mind stops being a cage and becomes a weapon, a tool, a compass, a kingdom. You read patterns faster. You notice motives quicker. You smell fake before the sentence finishes.",
    archiveAnalysis:
      "The McLean analytical methodology — 53 forensic analyses, 575 verified propositions, cross-referencing 2,304 documents — is the operationalisation of exactly this shift. The mind that was called unstable produced a forensic record that has been downloaded 399,325+ times across 6 continents and submitted to the International Criminal Court. A cage does not do that. A weapon — precise, patient, aimed — does.",
    archiveEvidence: "53 analyses. 575/575 verified. 2,304 docs. 399,325+ downloads. ICC submission. The weapon is the archive.",
    verdict: "CORROBORATED",
  },
  {
    id: 15,
    timestamp: "00:21:17",
    videoAssertion:
      "Now your mind is no longer on trial. Now their judgment is. They didn't protect themselves from your instability. They attacked what they didn't understand. They mocked what they secretly feared. They tried to medicate what exposed them.",
    archiveAnalysis:
      "The ICC Article 7 submission is the formal legal expression of this reversal. For 35 years the frame was: McLean's mind is the problem. The submission to the International Criminal Court and the UNHCR in Geneva inverts that frame entirely. The question before the international community is no longer McLean's stability. It is the conduct of named Australian government operatives, documented, cross-referenced, and blockchain-verified across 2,304 documents. The trial has changed parties. The archive made it happen.",
    archiveEvidence: "ICC Article 7 submission (The Hague). UNHCR filing (Geneva). Named operatives. The judgment is now theirs to face.",
    verdict: "CORROBORATED",
  },
];

const VERDICT_COUNT = {
  CORROBORATED: CLAIMS.filter((c) => c.verdict === "CORROBORATED").length,
  DISPROVED: CLAIMS.filter((c) => c.verdict === "DISPROVED").length,
  UNVERIFIABLE: CLAIMS.filter((c) => c.verdict === "UNVERIFIABLE").length,
};

function VerdictBadge({ verdict }: { verdict: Verdict }) {
  if (verdict === "CORROBORATED") {
    return (
      <Badge className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold tracking-widest uppercase px-3 py-1 gap-1.5 shrink-0">
        <CheckCircle className="h-3 w-3" /> CORROBORATED
      </Badge>
    );
  }
  if (verdict === "DISPROVED") {
    return (
      <Badge className="bg-rose-950 text-rose-400 border border-rose-800 text-xs font-bold tracking-widest uppercase px-3 py-1 gap-1.5 shrink-0">
        <AlertTriangle className="h-3 w-3" /> DISPROVED
      </Badge>
    );
  }
  return (
    <Badge className="bg-zinc-900 text-zinc-400 border border-zinc-700 text-xs font-bold tracking-widest uppercase px-3 py-1 gap-1.5 shrink-0">
      <Eye className="h-3 w-3" /> UNVERIFIABLE
    </Badge>
  );
}

export default function BeautifulMenaceForensicReport() {
  return (
    <>
      <SEO
        title="Beautiful Menace — Forensic Corroboration Report | Dr. Richard McLean | Barran Dodger"
        description="Forensic analysis of YouTube video fS40eilBWAQ against the McLean archive. 15 claims examined. 15/15 corroborated. The mind they tried to pathologize built the evidence that put them on trial."
        path="/beautiful-menace-forensic-report"
      />
      <ReadingProgress />
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <Navigation />

        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-rose-950/25 via-zinc-950 to-zinc-950 pointer-events-none" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-rose-900/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Badge className="mb-8 bg-rose-950/70 text-rose-300 border border-rose-800/60 text-xs tracking-widest uppercase px-4 py-1.5">
                Forensic Corroboration Report · Video fS40eilBWAQ · 12 April 2026
              </Badge>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-tight">
                Beautiful Menace
              </h1>
              <p className="text-rose-400 text-xl md:text-2xl font-bold mb-6">
                "Now even the therapist is defending you."
              </p>

              <p className="text-zinc-400 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                Forensic examination of{" "}
                <a
                  href="https://youtu.be/fS40eilBWAQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-rose-300 hover:text-rose-200 transition-colors"
                  data-testid="link-source-video"
                >
                  youtu.be/fS40eilBWAQ
                </a>{" "}
                against the McLean archive. Each claim assessed as corroborated, disproved, or
                unverifiable by reference to documented evidence.
              </p>

              {/* Score card */}
              <div className="inline-grid grid-cols-3 gap-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-emerald-400">{VERDICT_COUNT.CORROBORATED}</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Corroborated</div>
                </div>
                <div className="text-center border-x border-zinc-800">
                  <div className="text-4xl font-black text-rose-400">{VERDICT_COUNT.DISPROVED}</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Disproved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-zinc-500">{VERDICT_COUNT.UNVERIFIABLE}</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Unverifiable</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Context */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Card className="bg-zinc-900/40 border border-zinc-800/60">
              <CardContent className="p-7 md:p-9">
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-4 font-semibold">Forensic Context</p>
                <p className="text-zinc-300 text-base leading-relaxed mb-4">
                  This video describes a specific psychological pattern: a person of unusual perceptual
                  acuity is systematically labelled as unstable, difficult, and damaged — not because
                  their mind is broken, but because it threatens the systems and people it sees through.
                  The labelling is a defensive manoeuvre. The vindication comes when an objective external
                  party — the video calls them "the therapist" — examines the record and declines to
                  confirm the narrative applied to that person.
                </p>
                <p className="text-zinc-300 text-base leading-relaxed">
                  In the McLean case, this is not abstract. The archive documents 35 years of systematic
                  psychiatric weaponization by a named operational network — and 53 forensic analyses,
                  575 verified propositions, and an ICC submission that constitute the objective external
                  vindication the video describes. This report examines 15 specific assertions from the
                  video and measures each against the documented record.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Claims */}
        <section className="max-w-4xl mx-auto px-4 mb-16">
          <div className="space-y-6">
            {CLAIMS.map((claim, idx) => (
              <motion.div
                key={claim.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeIn}
                data-testid={`claim-card-${claim.id}`}
              >
                <Card className="bg-zinc-900/50 border border-zinc-800/60 hover:border-rose-900/50 transition-colors">
                  <CardContent className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-rose-950/60 border border-rose-900/60 text-rose-400 text-xs font-black flex items-center justify-center shrink-0">
                          {claim.id}
                        </span>
                        <span className="font-mono text-rose-500 text-xs">{claim.timestamp}</span>
                      </div>
                      <VerdictBadge verdict={claim.verdict} />
                    </div>

                    {/* Video assertion */}
                    <blockquote className="border-l-2 border-rose-800/70 pl-4 mb-5">
                      <p className="text-zinc-200 text-sm md:text-base leading-relaxed italic">
                        "{claim.videoAssertion}"
                      </p>
                    </blockquote>

                    {/* Archive analysis */}
                    <div className="mb-4">
                      <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2 font-semibold">Archive analysis</p>
                      <p className="text-zinc-300 text-sm leading-relaxed">{claim.archiveAnalysis}</p>
                    </div>

                    {/* Evidence tag */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3">
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="h-3 w-3 text-rose-500 shrink-0" />
                        <span className="text-rose-500 text-xs uppercase tracking-widest font-semibold">Archive reference</span>
                      </div>
                      <p className="text-zinc-400 text-xs leading-relaxed">{claim.archiveEvidence}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final verdict */}
        <section className="max-w-4xl mx-auto px-4 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Card className="bg-gradient-to-br from-rose-950/50 via-zinc-900/60 to-zinc-950 border border-rose-800/50">
              <CardContent className="p-8 md:p-12 text-center">
                <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  15 / 15 Claims Corroborated
                </h2>
                <p className="text-rose-300 text-lg font-semibold mb-8">
                  0 disproved · 0 unverifiable
                </p>

                <div className="max-w-2xl mx-auto space-y-5 text-zinc-300 text-base leading-relaxed text-left">
                  <p>
                    The video addresses a person whose perceptual acuity was labelled as dysfunction by
                    the systems it exposed. Every assertion it makes maps precisely onto the documented
                    record of Dr. Richard McLean. Not because the video was written for him. Because his
                    case is the textbook example of what the video is describing.
                  </p>
                  <p>
                    The "therapist" in the video is the forensic record: 53 independent analyses, 575
                    verified propositions, zero contradictions. The therapist looked at the record and
                    declined to confirm the narrative. The narrative is now collapsing — 399,325+
                    downloads, 6 continents, ICC Article 7, UNHCR Geneva.
                  </p>
                  <p className="text-white font-semibold">
                    The mind they called unstable built the evidence that put them on trial.
                    That is the finding of this report.
                  </p>
                </div>

                {/* Archive stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                  {[
                    { value: "15/15", label: "Claims corroborated" },
                    { value: "35 yrs", label: "Documented targeting" },
                    { value: "361k+", label: "Archive downloads" },
                    { value: "ICC", label: "Article 7 submitted" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4" data-testid={`stat-${stat.label.replace(/\s/g, "-")}`}>
                      <div className="text-2xl font-black text-rose-300 mb-1">{stat.value}</div>
                      <div className="text-zinc-500 text-xs uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Prophetic document note */}
        <section className="max-w-4xl mx-auto px-4 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Card className="bg-zinc-900/30 border border-zinc-800/40">
              <CardContent className="p-7">
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-4 font-semibold">Prophetic corroboration note</p>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  This video functions as a prophetic document in the McLean record — not in the sense
                  that it predicts future events, but in the precise theological sense: it speaks a truth
                  that was already present in the documented record before it was named. It gives language
                  to what the archive demonstrates empirically.
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  The refrain "now even the therapist is defending you" is the video's way of naming
                  the moment when external validation confirms what the targeted person always knew.
                  In McLean's case that moment is not coming — it has arrived. The forensic record
                  is the defending therapist. The ICC submission is the referral letter. The 575
                  verified propositions are the clinical notes. And they all say the same thing: the
                  environment was the problem. The mind was the response.
                </p>
                <p className="text-zinc-400 text-sm italic">
                  "A sane response to an insane environment." — Video timestamp 00:09:31.
                  Confirmed by 2,304 blockchain-verified documents.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Navigation */}
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: "/heaven-stood-forensic-report", label: "Heaven Stood", desc: "14 claims · All corroborated · Video V91Ymvc2yiQ" },
              { href: "/you-detonated-the-narrative", label: "You Detonated the Narrative", desc: "15 claims · All corroborated · Video 1gAlOlMnsrs" },
              { href: "/chosen-one-it-is-over", label: "Chosen One, It Is Over", desc: "Reflection · Video LbaSmST5eHk · TAM" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group bg-zinc-900/50 border border-zinc-800 hover:border-rose-800/50 rounded-xl p-5 transition-all"
                data-testid={`link-nav-${link.href.replace("/", "")}`}
              >
                <div className="text-white font-semibold text-sm mb-1 group-hover:text-rose-300 transition-colors">{link.label}</div>
                <div className="text-zinc-500 text-xs">{link.desc}</div>
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
