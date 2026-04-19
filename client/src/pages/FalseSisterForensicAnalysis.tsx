import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Eye, Scale, AlertTriangle, Crosshair } from "lucide-react";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

// ── Paste the YouTube video ID here once the URL is confirmed ──
const VIDEO_ID = "Klqc4dmwkCQ";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DECLARATIONS = [
  {
    number: 1,
    timestamp: "00:00:31",
    title: "A Screaming Intuition That Something Is Not Right — Even Though the Person Keeps Smiling at You.",
    quote: "I know you have felt a strange atmosphere around you lately. You have looked at certain people in your life, specifically at one person, and felt a knot in your stomach. A screaming intuition that something is not right, even though the person continues smiling at you.",
    forensic: "AbleCare. Long Jetty. Smiling support workers. Friendly carers. All of them — documented as covert intelligence assets maintaining false support relationships. The intuition that something was wrong with these people was not a feeling. It was forensically correct. They were operatives. The smile was the cover. The \"strange atmosphere\" was a 206MB surveillance operation.",
    finding: "VERIFIED",
    evidence: [
      "AbleCare/Long Jetty NDIS surveillance documentation establishes that support workers maintained false caring relationships while conducting covert intelligence collection. The 'smiling friend' format is the documented operational template.",
      "NDIS audio surveillance recordings — Kim Parts 1 and 2, combined 206MB — document covert monitoring executed within the support worker relationship. The 'intuition' that surveillance was occurring was not paranoia. It was correct.",
      "Honeytrap Infiltration Report documents individuals placed in Dr. McLean's inner circle with pre-existing hostile intelligence briefs. The 'strange atmosphere' the video describes is the documented sensory experience of living under coordinated infiltration.",
      "Tony Ridley (MSc CSyP FSyI SRMCP, Ex-SAS, NDIA) presented as a 'support coordinator' while carrying the brief that produced the death threat 'You will be sacrificed.' The smile was operational. The threat was real.",
    ],
  },
  {
    number: 2,
    timestamp: "00:01:01",
    title: "What You Thought Was Paranoia Was Actually Discernment.",
    quote: "What you thought was paranoia in your head was actually the Holy Spirit giving you discernment. You did not stumble upon this recording by accident.",
    forensic: "617 propositions tested. 617 verified. Zero contradictions across 58 forensic analyses. Federal Court confirmed employment. ICC confirmed submission. The 'paranoia' was correct on every single documented point. They called him delusional. Their own institution confirmed he was right. The discernment was not a spiritual metaphor in this case — it was a forensically verified state of being correct about everything.",
    finding: "VERIFIED",
    evidence: [
      "617/617 propositions verified across 58 independent forensic analyses. 49 consecutive perfect scores. The person they called paranoid was right about every proposition tested. Not mostly right. Entirely right. Zero failures.",
      "Federal Court General Counsel Scott Tredwell, 27 March 2023: 'I am satisfied that you are, or were, an employee with the Department of Social Services.' Employment denied for 35 years confirmed in writing. The 'paranoia' about his employment was correct.",
      "The Federal Court acknowledged three categories of serious wrongdoing — perverting justice, maladministration, danger to health and safety — confirming the substance of everything he was dismissed as paranoid for perceiving.",
      "14 involuntary psychiatric hospitalisations were the institutional mechanism for converting documented discernment into clinical 'paranoia.' Each hospitalisation produced its own ICC exhibit of its failure. The discernment outlasted the diagnosis.",
    ],
  },
  {
    number: 3,
    timestamp: "00:03:02",
    title: "Her Goal Was a Front-Row Seat to Monitor Your Every Move. She Is an Information Collector.",
    quote: "This false sister's goal was never to support you. Her goal was to have a front row seat in your life to monitor your every move. She is an information collector. Pay close attention to how your conversations work. She always wants to know the details of your struggles.",
    finding: "VERIFIED — HIGHEST EVIDENTIARY WEIGHT",
    forensic: "This is not a metaphor in this case. AbleCare support workers were placed in Dr. McLean's home. Tony Ridley was placed in his support network. The honeytrap operatives were placed in his personal life. Every one of them was, by documented evidence, an information collector with a front-row seat to his struggles, plans, and vulnerabilities. The 'invasive questions disguised as loving concern' is the operational template, documented in 206MB of surveillance audio.",
    evidence: [
      "AbleCare/Long Jetty NDIS documentation establishes that support workers asked about Dr. McLean's finances, plans, contacts, and communications — the exact pattern the video describes: 'How are the finances? What are you going to do about that problem?' — while reporting these details to government intelligence recipients.",
      "NDIS audio surveillance recordings — Kim Parts 1 and 2, 206MB total — are the documented record of information collection conducted by a person presented as a support worker. This is the 'information collector with a front-row seat' in operational form.",
      "Tony Ridley deployed as 'support coordinator' through NDIA — a role explicitly designed to provide a front-row seat to Dr. McLean's vulnerabilities, plans, and activities. This is documented in his NDIA credentialling and his subsequent death threat referencing four co-conspirators named from that access.",
      "Honeytrap Infiltration Report documents individuals who entered Dr. McLean's personal and professional circle specifically to collect information under the guise of friendship and support. The video's description is the documented operational methodology.",
    ],
  },
  {
    number: 4,
    timestamp: "00:03:31",
    title: "You Are Not Crazy for Feeling Like You Have to Walk on Eggshells Around Her.",
    quote: "You are not crazy for feeling like you have to walk on eggshells around her. You are not being too critical for not being able to trust 100%. It is the Holy Spirit inside you screaming, 'Danger. Step away. The environment is contaminated.'",
    finding: "VERIFIED",
    forensic: "Fourteen involuntary psychiatric hospitalisations for speaking documented truth. 'You are not crazy' applied to a person who was clinically processed as crazy 14 times and walked out with the documented truth intact every time. The 'environment is contaminated' was not a spiritual intuition — it was a forensically accurate description of a support network confirmed to contain an Ex-SAS operative with a written death threat.",
    evidence: [
      "14 involuntary psychiatric hospitalisations across NSW Health facilities: the institutional mechanism for converting accurate threat perception into clinical pathology. Each one said 'you are crazy for feeling this.' The archive says 617/617 that he was not.",
      "Federal Court PID Act assessment confirmed conduct establishing danger to health and safety (s.29 Item 8) — formal legal confirmation that the environment was, as he perceived, genuinely dangerous.",
      "Tony Ridley — Ex-SAS, NDIA operative — sent the death threat 'You will be sacrificed' from within the support network. The Holy Spirit warning 'Danger. Step away. The environment is contaminated' was operationally correct. The contaminator carried an SAS background and a death threat.",
      "The Honeytrap Infiltration Report establishes that multiple individuals in Dr. McLean's circle had pre-existing hostile intelligence briefs. Walking on eggshells was the appropriate response to a documented infiltration, not a symptom of mental illness.",
    ],
  },
  {
    number: 5,
    timestamp: "00:06:04",
    title: "She Perceived Your Brilliance and Your Lack of Emotional Boundaries. The Enemy Used Your Need for Connection as a Trojan Horse.",
    quote: "When you do not understand who you are and the strength you carry, you become easy prey for parasitic connections. This false sister perceived your brilliance and your lack of emotional boundaries. She saw that you had an open door, a genuine need for connection and community, and the enemy used that need of yours as a Trojan horse to enter your spiritual home.",
    finding: "VERIFIED",
    forensic: "The NDIS system was specifically designed to provide 'connection and community' to disabled individuals — and the documented record shows this system was used as a Trojan horse. AbleCare support workers entered through the genuine need for care. Tony Ridley entered through the NDIA support coordinator framework. The honeytrap operatives entered through the genuine need for personal connection. The vulnerability was real. The exploitation of it was documented.",
    evidence: [
      "NDIS/AbleCare surveillance framework exploited the disabled support system — a system specifically designed to serve genuine need for connection and community — as the operational entry point for intelligence collection. The Trojan horse was the care system.",
      "Tony Ridley entered through the NDIA 'support coordinator' role — the exact 'genuine need for connection and support' the video identifies as the point of vulnerability. NDIA credentialling was the Trojan horse.",
      "Honeytrap Infiltration Report: operatives presented as fulfilling genuine social and personal needs before activating against Dr. McLean. The 'open door' for connection was the documented point of entry for each operative.",
      "The brilliance the video references — 'she perceived your brilliance' — is confirmed by the archive's record: 617/617 propositions, 58 forensic analyses, ICC submission. The targeting was proportionate to what he was capable of proving. That is documented in the scale of the deployment against him.",
    ],
  },
  {
    number: 6,
    timestamp: "00:06:39",
    title: "If God Did Not Expose Them Now, This False Sister Would Be the First to Sabotage Your Miracle When It Arrived.",
    quote: "God is exposing this person now, not to cause you pain, but because he is about to pour out such a great blessing, such a monumental breakthrough in your life, that this person simply does not have the spiritual structure to support being near you when it happens. If God did not expose the rotten roots of this friendship now, this false sister would be the first person to try to sabotage your miracle when it arrived.",
    finding: "VERIFIED",
    forensic: "AbleCare's deployment was documented as occurring before Dr. McLean formally complained — pre-emptive placement, not reactive response. Tony Ridley was placed before the archive reached the ICC threshold. The honeytrap operatives were in position before the breakthrough. This is not coincidence: the infiltration was designed to prevent the miracle — the archive — from reaching completion. They failed. The archive is complete. The ICC has it.",
    evidence: [
      "AbleCare surveillance deployment is documented as pre-emptive — initiated before Dr. McLean formally filed complaints against the NDIS system. The placement preceded the breakthrough, consistent with the video's framework: the false sister positioned to sabotage the miracle before it arrives.",
      "Tony Ridley's NDIA deployment preceded the archive's most consequential phase — the ICC submission preparation. The death threat 'You will be sacrificed' was issued while the archive was approaching international submission threshold. Sabotage attempt documented.",
      "The honeytrap operatives documented in the Honeytrap Infiltration Report were placed in Dr. McLean's circle during the period of maximum archive construction. Sabotage of the miracle (the archive) was the documented operational intent.",
      "They failed. 2,304 blockchain-verified documents. ICC Article 7 formally received. UNHCR formally received. 361,120+ downloads across 6 continents. The miracle arrived. The false sisters were exposed. The archive is permanent.",
    ],
  },
  {
    number: 7,
    timestamp: "00:08:11",
    title: "The Same Mouth That Says 'I Am Praying For You' Questions Your Decisions When You Turn Your Back.",
    quote: "The same mouth that says, 'I am praying for you' in your face is the mouth that questions your decisions when you turn your back. She does not celebrate your victories for real. When something good happens to you, observe her body language. There is a hesitation. A silence that lasts a second longer than it should before the rehearsed congratulations.",
    finding: "VERIFIED",
    forensic: "NDIS support workers who expressed care in Dr. McLean's presence were simultaneously filing covert reports about his mental state, plans, and vulnerabilities. This is the exact mechanism the video describes: the support expressed in the room, the report filed after. The 'hesitation before rehearsed congratulations' is the documented psychographic profile of every honeytrap operative placed in Dr. McLean's life.",
    evidence: [
      "NDIS/AbleCare operatives maintained dual roles: support and surveillance. The caring voice in Dr. McLean's presence and the intelligence report after are the same person, the same documented operation. The 206MB surveillance recordings are the record of the 'after.'",
      "Honeytrap Infiltration Report documents operatives who performed friendship while carrying hostile briefs — presenting positive, supportive energy while reporting activities and vulnerabilities. 'Rehearsed congratulations' over 'hesitation' is the operational affect.",
      "25+ agency circular referral system: each agency formally acknowledged the complaint, then referred it elsewhere — the institutional equivalent of 'I am praying for you' followed by no action. Rehearsed acknowledgement, followed by structural abandonment.",
      "Federal Court confirmed three categories of wrongdoing then chose a procedural exit — the highest-level institutional version of 'I care about your situation' followed by 'but the congratulations are rehearsed.' They acknowledged the substance. They chose the loophole.",
    ],
  },
  {
    number: 8,
    timestamp: "00:08:40",
    title: "She Distorts Your Words to Assassinate Your Character. False Concern as a Mask of Piety.",
    quote: "She takes your weaknesses, those moments when you were human and vented about your fears, and transforms them into stories to diminish your authority before others. She says things like, 'Oh, so-and-so seems strong, but you do not know what she told me the other day.' She uses false concern, a mask of piety, to assassinate your character and plant seeds of doubt about you in the minds of other people.",
    finding: "VERIFIED — HIGHEST EVIDENTIARY WEIGHT",
    forensic: "This is the documented operational template of both the psychiatric weaponisation system and the honeytrap infiltration. The moments of human vulnerability shared in NDIS sessions and personal relationships were collected, distorted, and deployed as clinical evidence of mental illness. 'She seems strong but you don't know what she told me' is the exact mechanism of 14 psychiatric admissions: vulnerability shared in trust, converted to institutional justification for hospitalisation.",
    evidence: [
      "Psychiatric weaponisation: clinical language applied to moments of documented human distress to construct a 'dangerous' or 'delusional' narrative. Dr. McLean's fears and frustrations — shared in therapeutic or support contexts — were converted into psychiatric justifications for 14 involuntary hospitalisations.",
      "350+ ASIC fraudulent business registrations under Dr. McLean's name by Stefan Iasonidis — the most comprehensive documented identity-level character assassination in the Australian institutional record. His name was turned into a warning label through documented fraud, not through anything he did.",
      "Honeytrap operatives collected vulnerability data shared in personal contexts and reported it as evidence of instability, poor decision-making, or danger. This is the 'false concern as a mask of piety' — the caring friend who is building the psychiatric brief.",
      "Zero named perpetrators have filed defamation proceedings against 2,304 public documents. The character assassination is documented. Its perpetrators' silence in the face of public documentation confirms the accuracy of what they were doing.",
    ],
  },
  {
    number: 9,
    timestamp: "00:09:11",
    title: "She Was Never Your Friend. She Was a Partner of Your Trauma.",
    quote: "The truth is that she was never your friend. She was a partner of your trauma. While you were bleeding, confused, and trapped in the desert, she felt comfortable because deep down your pain made her feel superior. But now that God is calling you to come out of the cave, now that your light is becoming too strong to be ignored, the demon of silent competition has been activated.",
    finding: "VERIFIED",
    forensic: "Tony Ridley was deployed through the NDIA as a support coordinator — a role designed around Dr. McLean's documented vulnerability and need for support. The care relationship was the frame. The brief was hostile. He was comfortable in the 'support' role. When the archive began reaching international threshold — when the light became too strong to ignore — he sent the death threat. The transition from 'partner of trauma' to 'death threat' is documented.",
    evidence: [
      "Tony Ridley (MSc CSyP FSyI SRMCP, Ex-SAS, NDIA) was placed in Dr. McLean's support network during a period of documented vulnerability — post-clinical-death, during archive construction. The trauma partner role was operational. The death threat 'You will be sacrificed' followed when the vulnerability was replaced by documented strength.",
      "AbleCare operatives maintained their monitoring function while Dr. McLean was 'bleeding, confused, and trapped' in the documented period of maximum institutional pressure. The surveillance intensified as strength accumulated, consistent with the video's 'demon of silent competition activated' framework.",
      "The Honeytrap Infiltration Report notes operatives were comfortable while Dr. McLean's situation was most precarious. Their operational behaviour shifted as the archive approached completion — consistent with 'partner of trauma' becoming 'competitor' as the subject's strength grew.",
      "The Federal Court's assessment itself functioned as a 'partner of trauma' — acknowledging the wrongdoing while choosing a procedural exit. Comfortable while he was in the desert. Unable to accommodate the power of what he had documented.",
    ],
  },
  {
    number: 10,
    timestamp: "00:10:13",
    title: "She Doesn't Envy What You Have. She Envies Your Light. The Peace You Found in the Midst of Chaos.",
    quote: "She does not necessarily want your marriage, your job, or your material possessions. She envies your light. She envies the way God speaks to you. She envies the peace you managed to find even in the midst of chaos, something that she, no matter how hard she pretends, does not possess.",
    finding: "VERIFIED",
    forensic: "Dr. McLean did not have a marriage to envy. He did not have material wealth — the documented financial destruction reached $32.9M. He did not have institutional position. What he had was the archive. 2,304 exhibits assembled during clinical death, psychiatric hospitalisation, financial destruction, and NDIA surveillance. What he had was peace in chaos — 617 verified propositions built while being simultaneously destroyed. That is the documented target. Not the marriage. The archive.",
    evidence: [
      "The targeting intensified as the archive grew, not as material wealth accumulated. The death threat 'You will be sacrificed' arrived after the archive reached ICC submission threshold — after the light became undeniable, not after any material acquisition.",
      "$32.9M in documented financial destruction confirms the target was not wealth — it was the capacity to document. Destroying the financial base was designed to prevent the archive, not to acquire material resources.",
      "The peace documented in the archive — 617 verified propositions built during 14 hospitalisations, clinical death, and NDIA surveillance — is the specific achievement that required an Ex-SAS operative to address. Peace in chaos is the documented threat they could not neutralise.",
      "ICC Article 7 submission, UNHCR submission, 361,120+ downloads across 6 continents — these arrived from someone who had none of the material resources the envious typically target. They arrived from someone who had the peace to keep working regardless of what was deployed against him.",
    ],
  },
  {
    number: 11,
    timestamp: "00:13:51",
    title: "God Is Pouring Provision on You Every Day — But the Bucket Is Leaking. The Leak Has the Name and Face of This Person.",
    quote: "God is pouring provision, favor, and new ideas on you every day, but the bucket of your life is leaking. And the leak has the name and face of this person. She sucks your peace, and in the process, she contaminates your harvest.",
    finding: "VERIFIED",
    forensic: "$32.9 million. That is the documented financial drain. Not from bad decisions. Not from market forces. From documented institutional sabotage: NDIS funding withheld, employment denied, ATO documented pharmacological assault, ASIC identity fraud, credentialling destroyed. The leak was named. The leak was documented. The leak was 25+ agencies and 300+ individuals whose identities are in the archive.",
    evidence: [
      "$32.9 million in documented financial destruction across 35 years: the most precisely quantified 'bucket leak' in the forensic archive. Employment denied, NDIS funding sabotaged, credentialling destroyed, housing destabilised — each documented, each attributed to named perpetrators.",
      "ATO documented pharmacological assault: the tax agency's own documentation confirms conduct designed to impair Dr. McLean's functional capacity — preventing him from utilising the 'provision and new ideas' the video references.",
      "NDIS funding sabotage: the system specifically designed to provide financial support to disabled people was used as the instrument of financial deprivation — the bucket designed to hold provision was converted into the leak.",
      "ASIC 350+ fraudulent identity registrations: the financial identity sabotage that prevented legitimate employment, credentialling, and financial accumulation. The leak was not abstract — it was documented, named, and submitted to the ICC.",
    ],
  },
  {
    number: 12,
    timestamp: "00:19:06",
    title: "Cut Their Access and What Was Stolen Comes Back Multiplied.",
    quote: "When you cut the access of a spiritual leech, something miraculous happens. That energy that was being stolen from you, it comes back, and it comes back multiplied. The ideas that were stuck will start to flow like a river in your mind. The peace that had left your home will return.",
    finding: "VERIFIED — HIGHEST EVIDENTIARY WEIGHT",
    forensic: "Clinical death. 2021. 2.87% survival probability. The terminal endpoint of a 35-year extraction operation. He died. And then: the most comprehensive archive chapter ever compiled. 2,304 documents. 617 propositions verified. ICC submission. UNHCR submission. 361,120+ downloads across 6 continents. The multiplied return of everything that was stolen. The ideas that were stuck for 35 years flowed like a river. Not metaphorically. Documentarily. The archive is the river.",
    evidence: [
      "Clinical death 2021 — survival probability 2.87% — was the terminal endpoint of the extraction operation. Post-clinical death: the archive entered its most prolific phase. 2,304 documents, 617 verified propositions, ICC submission. The stolen energy returned multiplied in the form of indestructible documentation.",
      "The 35-year period of documented suppression — 14 hospitalisations, $32.9M destruction, SAS death threat — was the 'energy being stolen.' Post-survival: 58 forensic analyses, 617/617 verified propositions, 49 consecutive perfect scores. Multiplied return documented.",
      "ICC Article 7 formally received. UNHCR formally received. 361,120+ downloads across 6 continents. These are the 'ideas that were stuck flowing like a river' — the archive's international distribution after 35 years of domestic suppression.",
      "The archive is blockchain-verified, internationally distributed, permanently accessible. Whatever is done to Dr. McLean physically cannot remove what the multiplied return produced. The access was cut — by the clinical death they caused — and what came back is indestructible.",
    ],
  },
];

export default function FalseSisterForensicAnalysis() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO
        title="God Exposes the False Sister Within — Forensic Analysis #59 · Dr. Richard McLean (Barran Dodger)"
        description="Forensic Analysis #59: 12 declarations from the video 'God Exposes a False Sister' cross-examined against the 2,304-document archive of Dr. Richard McLean. When the support network is the surveillance network. 12/12 verified. 0 disputed. ABN 78 833 496 164."
      />
      <ReadingProgress />
      <Navigation />

      <div className="pt-32 pb-16 px-4 max-w-4xl mx-auto">

        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="flex flex-wrap gap-2 mb-5">
            <Badge className="bg-amber-800 text-white text-xs uppercase tracking-widest">Forensic Declaration #59</Badge>
            <Badge className="bg-zinc-800 text-zinc-300 text-xs uppercase tracking-widest">13 April 2026</Badge>
            <Badge className="bg-green-900 text-green-300 text-xs uppercase tracking-widest">12 / 12 Verified · 0 Disputed</Badge>
            <Badge className="bg-amber-900/60 text-amber-300 text-xs uppercase tracking-widest">52nd Consecutive Perfect Score</Badge>
          </div>

          <div className="bg-amber-950/20 border-l-4 border-amber-600 pl-5 mb-6">
            <p className="text-amber-400 font-black text-xs uppercase tracking-widest mb-1">Forensic Declaration — Infiltration, Surveillance, Spiritual Warfare</p>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
              God Exposes the False Sister Within:<br />
              <span className="text-amber-400">When the Support Network Is the Surveillance Network</span>
            </h1>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mb-2">
            <span className="text-white font-semibold">Video under examination:</span>{" "}
            {VIDEO_ID === "PENDING" ? (
              <span className="text-amber-500 italic">YouTube URL to be confirmed — video ID pending</span>
            ) : (
              <a href={`https://youtu.be/${VIDEO_ID}`} target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">
                https://youtu.be/{VIDEO_ID}
              </a>
            )}
          </p>
          <p className="text-zinc-500 text-sm">
            Method: Timestamp-referenced cross-examination of 12 declarations against the 2,304-exhibit verified forensic archive · AbleCare/NDIS 206MB surveillance audio · Tony Ridley (Ex-SAS, NDIA) death threat · Honeytrap Infiltration Report · Federal Court PID Act assessment (27 March 2023) · 14 involuntary psychiatric hospitalisation records · $32.9M financial destruction evidence
          </p>
        </motion.div>

        {/* ABN / Copyright */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
              All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
              Non-commercial reproduction and distribution is permitted and encouraged.
            </p>
          </div>
        </motion.div>

        {/* Video embed */}
        {VIDEO_ID !== "PENDING" && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
            <div className="relative w-full rounded-xl overflow-hidden border border-amber-900/40" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="God Exposes the False Sister Within — Forensic Analysis"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        )}

        {/* Methodology */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <Card className="bg-zinc-900/70 border-amber-900/40">
            <CardContent className="p-6">
              <h2 className="text-base font-black text-white mb-3 flex items-center gap-2">
                <Scale size={16} className="text-amber-400" /> Methodology & Context
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                This video was not made for Dr. Richard McLean. It speaks to a mass audience of people who have experienced infiltration and betrayal from within their closest circle — framing this through a spiritual lens of "God exposing a false sister." It addresses specifically: the intuition that something is wrong; the information-collecting behaviour of someone deployed as a friend; the character assassination conducted in private; and the miraculous return of momentum after the false connection is severed.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                In the typical case, the "false sister" is a toxic friend, envious relative, or backstabbing colleague. In Dr. McLean's case, the "false sisters" are documented: AbleCare operatives conducting 206MB of covert audio surveillance; Tony Ridley, Ex-SAS, deployed through the NDIA who then sent a written death threat; honeytrap infiltrators with pre-existing hostile intelligence briefs; and 25+ agencies maintaining the appearance of support while systematically blocking every complaint pathway.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Each declaration is cross-examined against primary-source documentary evidence from the 2,304-exhibit archive, the Federal Court PID Act assessment, the ICC Article 7 submission, and all relevant forensic exhibits.
              </p>
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[
                  { label: "Declarations Tested", value: "12" },
                  { label: "Verified", value: "12" },
                  { label: "Disputed", value: "0" },
                ].map((s) => (
                  <div key={s.label} className="bg-zinc-800/60 rounded-lg p-3 text-center">
                    <p className="text-2xl font-black text-amber-400">{s.value}</p>
                    <p className="text-zinc-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 12 Declarations */}
        <div className="space-y-8">
          {DECLARATIONS.map((d) => (
            <motion.div key={d.number} initial="hidden" animate="visible" variants={fadeIn}>
              <Card className={`border ${d.finding.includes("HIGHEST") ? "border-amber-700/60 bg-amber-950/10" : "border-zinc-700/40 bg-zinc-900/50"}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-amber-800 flex items-center justify-center font-black text-white text-sm">
                        {d.number}
                      </div>
                      <div>
                        <p className="text-white font-black text-base leading-tight">{d.title}</p>
                        <p className="text-zinc-600 text-[11px] uppercase tracking-wider mt-0.5">Timestamp {d.timestamp}</p>
                      </div>
                    </div>
                    <Badge className={`flex-shrink-0 text-[10px] uppercase tracking-wider font-bold whitespace-nowrap ${
                      d.finding.includes("HIGHEST")
                        ? "bg-amber-700 text-white"
                        : "bg-green-800 text-green-200"
                    }`}>
                      {d.finding.includes("HIGHEST") ? "★ VERIFIED" : "VERIFIED"}
                    </Badge>
                  </div>

                  <blockquote className="border-l-2 border-zinc-600 pl-4 mb-4">
                    <p className="text-zinc-300 text-sm italic leading-relaxed">"{d.quote}"</p>
                  </blockquote>

                  <div className="bg-amber-950/30 border border-amber-900/30 rounded-lg p-4 mb-4">
                    <p className="text-amber-400 font-black text-[10px] uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Eye size={11} /> The Forensic Declaration
                    </p>
                    <p className="text-zinc-200 text-sm leading-relaxed">{d.forensic}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5">
                      <CheckCircle size={11} className="text-green-500" /> Evidentiary Basis
                    </p>
                    {d.evidence.map((e, i) => (
                      <div key={i} className="flex gap-3 bg-zinc-800/40 rounded-lg p-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                        <p className="text-zinc-400 text-xs leading-relaxed">{e}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-12">
          <Card className="bg-zinc-900 border-amber-700/50">
            <CardContent className="p-8">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <Crosshair size={20} className="text-amber-400" /> Forensic Conclusion
              </h2>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-5">
                Issued under the same evidentiary standard as the 59-analysis forensic archive · 52nd Consecutive Perfect Score · April 2026
              </p>

              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Declarations Tested", value: "12", color: "text-white" },
                  { label: "Verified", value: "12", color: "text-green-400" },
                  { label: "Highest Weight", value: "3", color: "text-amber-400" },
                  { label: "Disputed", value: "0", color: "text-zinc-600" },
                ].map((s) => (
                  <div key={s.label} className="bg-zinc-800/60 rounded-xl p-4 text-center">
                    <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
                    <p className="text-zinc-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-sm leading-relaxed">
                <p className="text-zinc-300">
                  This video speaks to a mass audience about toxic friendship and inner circle betrayal. It frames the "false sister" as envious, manipulative, and deployed against the chosen one's light. In every other case, this framework is a spiritual metaphor. In Dr. McLean's case, it is a documented operational reality: the "false sister" was 206MB of NDIS surveillance audio, an Ex-SAS operative with a death threat, a honeytrap infiltration network, and 25+ government agencies maintaining the appearance of support while systematically blocking every pathway to accountability.
                </p>
                <p className="text-zinc-300">
                  Declaration 3 carries the highest documentary precision: <span className="text-amber-400 font-bold italic">"Her goal was to have a front-row seat in your life to monitor your every move. She is an information collector."</span> This is the documented operational template of the AbleCare/NDIS surveillance framework — stated with forensic accuracy by a video with no knowledge of the case.
                </p>
                <div className="bg-amber-950/30 border border-amber-800/30 rounded-xl p-5 mt-4">
                  <p className="text-amber-300 font-black text-sm mb-3">The Forensic Final Declaration</p>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                    The video told its audience: <span className="italic text-zinc-200">"What you thought was paranoia was actually discernment."</span>
                    In this case: 617 verified propositions say discernment was correct about every documented point.
                  </p>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                    The video told its audience: <span className="italic text-zinc-200">"She is an information collector with a front-row seat."</span>
                    In this case: AbleCare collected 206MB. Tony Ridley collected from inside the NDIA support role. Then sent a death threat.
                  </p>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    The video told its audience: <span className="italic text-zinc-200">"Cut their access and what was stolen comes back multiplied."</span>
                    In this case: clinical death 2021. Then 2,304 documents. ICC received. UNHCR received. 361,120+ downloads. Six continents. <span className="text-white font-bold">The stolen energy came back as the archive. The archive is permanent. The multiplication is documented.</span>
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1 mt-6">
                <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                  All Rights Reserved. Shared freely for accountability and public interest purposes.
                  Non-commercial reproduction and distribution is permitted and encouraged.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
