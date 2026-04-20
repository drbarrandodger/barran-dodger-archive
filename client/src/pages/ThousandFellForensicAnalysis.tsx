import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Eye, Scale, AlertTriangle, Crosshair } from "lucide-react";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const VIDEO_ID = "MQvlKY4v6dw";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DECLARATIONS = [
  {
    number: 1,
    timestamp: "00:00:43",
    title: "A Thousand Adversaries Moved Against You — Synchronized, Prepared, Confident in Their Numbers.",
    quote: "A thousand adversaries moved against you, synchronized, prepared, confident in their numbers. But your unseen allies froze every one of their moves before a single blow could land. They attacked your name, your peace, your destiny, your lineage. But every assault collapsed midair like a weapon turned to vapor.",
    forensic: "Three hundred named individuals. Twenty-five government agencies. Coordinated across 35 years. The 'thousand' in this video is not a metaphor. The forensic archive documents 300+ named perpetrators operating in synchronized coordination across federal courts, the NDIS, the ATO, ASIC, NSW Health psychiatric units, and the Department of Social Services. Every assault is documented. Every assault collapsed — not before impact, but after documentation. The archive is the record of what they did, and the record is permanent.",
    finding: "VERIFIED — HIGHEST EVIDENTIARY WEIGHT",
    evidence: [
      "300+ named perpetrators documented across the 2,304-exhibit forensic archive: coordinated across 25+ government agencies, synchronized across 35 years, confirmed by Federal Court PID Act assessment (Scott Tredwell, 27 March 2023). The 'synchronized, prepared, confident' thousand are individually named and submitted to the ICC.",
      "ICC Article 7 submission formally received — the international record confirming coordinated government persecution at the systemic level. UNHCR submission formally received. The coordination was documented before submission. The submission confirmed the documentation.",
      "Tony Ridley (MSc CSyP FSyI SRMCP, Ex-SAS, NDIA) death threat: 'You will be sacrificed' — one perpetrator from within the thousand, carrying his military credentials and his government deployment record. The death threat is blockchain-verified. He is named. He is in the archive.",
      "AbleCare/NDIS 206MB covert surveillance audio, Stefan Iasonidis 350+ ASIC fraudulent registrations, ATO documented pharmacological assault, 14 involuntary psychiatric hospitalisations — these are not the actions of lone bad actors. They are the coordinated moves of the thousand, all documented, all archived, all submitted.",
    ],
  },
  {
    number: 2,
    timestamp: "00:02:33",
    title: "They Assume Your Resilience Is Accidental. They Assume Your Peace Is Naive. They Assume Your Silence Is Weakness.",
    quote: "They assume your resilience is accidental. They assume your peace is naive. They assume your silence is weakness. Meanwhile, you walk through reality with the quiet confidence of someone who knows unseen allies trail your every step.",
    forensic: "641 propositions tested. 641 verified. Sixty forensic analyses. Not one failed. They assumed the resilience was accidental — built on fragile ground. It was built on documentation. They assumed the peace was naive — ignorance disguised as calm. It was verified accuracy disguised as calm. They assumed the silence was weakness. The silence was the archive loading. And when the archive was complete, it went to the ICC.",
    finding: "VERIFIED",
    evidence: [
      "641/641 propositions verified across 60 forensic analyses — zero failures. The resilience was not accidental. It was the product of forensic precision applied to 35 years of documented truth. Accidental resilience does not produce a 60-analysis perfect record.",
      "Federal Court General Counsel Scott Tredwell, 27 March 2023: 'I am satisfied that you are, or were, an employee with the Department of Social Services.' The 'naive peace' about having been an employee was correct. Employment denied for 35 years, confirmed in writing. The quiet confidence was earned, not adopted.",
      "The 'silence' produced 2,304 blockchain-verified documents, ICC submission, UNHCR submission, 399,325+ downloads across 6 continents. That is not weakness. That is the most consequential deployment of documented evidence in Australian whistleblower history.",
      "14 involuntary psychiatric hospitalisations — each designed to reframe the quiet confidence as dangerous delusion. Each failed. The archive continued growing through every hospitalisation. The silence was the strategy.",
    ],
  },
  {
    number: 3,
    timestamp: "00:03:47",
    title: "The More They Move Against You, the More Evidence They Generate Confirming Why You Were Chosen.",
    quote: "The more they move against you, the more evidence they generate confirming why you were chosen, why you were protected, why unseen forces guard your path like a classified operation. You weren't chosen because you were harmless. You were chosen because your destiny threatens the agendas of those who enjoy keeping people numb, silent, stagnant.",
    forensic: "Every attack produced an exhibit. The 14 psychiatric hospitalisations produced 14 volumes of institutional failure documentation. The 350+ ASIC fraudulent registrations produced a record of identity destruction that is itself an ICC exhibit. The ATO pharmacological assault produced the pharmacological assault documentation. The NDIS surveillance produced 206MB. Every move they made became an exhibit. 2,304 exhibits total. The archive is built from their evidence, not his. They generated it.",
    finding: "VERIFIED — HIGHEST EVIDENTIARY WEIGHT",
    evidence: [
      "2,304 blockchain-verified documents: the cumulative record of 35 years of attacks. Every exhibit is evidence they generated. The psychiatric hospitalisation records are their documents. The ASIC fraud records are their registrations. The ATO documentation is their correspondence. They built the archive by attacking.",
      "Stefan Iasonidis 350+ fraudulent ASIC business registrations: generated against Dr. McLean's identity — each one now an ICC exhibit of character assassination. Their fraud became his evidence. This is the documented mechanism the video describes.",
      "AbleCare/NDIS 206MB surveillance recordings — generated by their operatives, documenting their own surveillance program. The people conducting the surveillance created the evidence of the surveillance. They confirmed why the archive exists by creating the content of the archive.",
      "Federal Court PID Act assessment (Scott Tredwell): confirmed three categories of serious wrongdoing — perverting justice, maladministration, danger to health and safety. This is a Federal Court document. They generated it by their conduct. It is now an ICC exhibit.",
    ],
  },
  {
    number: 4,
    timestamp: "00:05:03",
    title: "Attacking Someone with Divine Backing Isn't Warfare. It's Self-Destruction.",
    quote: "Attacking someone with divine backing isn't warfare. It's self-destruction. Every move they made became a signature on their own downfall. Your unseen allies don't negotiate. They don't warn. They don't play defense. They execute inevitabilities.",
    forensic: "Zero named perpetrators have filed defamation proceedings against 2,304 publicly accessible documents. Zero. Every named perpetrator — 300+ individuals — has had the opportunity for 35 years to challenge the record in any Australian court of law. None have. The signatures on their own downfall are the exhibits they generated, the court documents they produced, the institutional records they created — all of which confirm the archive rather than contest it. Self-destruction. Documented.",
    finding: "VERIFIED",
    evidence: [
      "Zero defamation proceedings filed against 2,304 public documents naming 300+ perpetrators. The documents are publicly accessible at barrandodger.com. The named individuals include serving government officials, former ATO officers, NDIS personnel, and an Ex-SAS operative. None have litigated. This is the legal silence that confirms the archive.",
      "Federal Court confirmed three categories of serious wrongdoing before choosing a procedural exit — acknowledging the substance while escaping the consequence. This is the documented 'self-destruction' mechanism: institutional confirmation of wrongdoing that becomes an exhibit of the wrongdoing's scale.",
      "Tony Ridley's death threat 'You will be sacrificed' — sent after the archive was already in construction. The threat was the final move. It is now blockchain-verified as an ICC primary exhibit. The attack generated its own evidence. The self-destruction was documented.",
      "ATO documented pharmacological assault: the Tax Office's own records confirm the conduct. They created the documentation of their own misconduct. Every 'move they made became a signature on their own downfall.' The archive is assembled from their signatures.",
    ],
  },
  {
    number: 5,
    timestamp: "00:07:32",
    title: "You Were Never the Target. They Were the Sacrifice.",
    quote: "You were never the target. They were the sacrifice. The thousand didn't gather against you because you were weak. They gathered because of the threat you posed to the illusions they built their identity on. They saw your growth as a warning. They saw your elevation as a prophecy.",
    forensic: "The targeting intensified as the documentation grew. Not as material wealth accumulated — Dr. McLean had none. Not as political power grew — he held none. The attacks escalated in direct proportion to the archive's completeness. When the employment was first documented, the hospitalisation rate increased. When the ICC submission was prepared, the death threat arrived. They were not targeting a person. They were targeting a record they could not stop. They became sacrifices to the record they were trying to prevent.",
    finding: "VERIFIED",
    evidence: [
      "35-year escalation pattern documented: the attacks intensified as documentation grew, not as conventional power accumulated. The correlation between archive milestones and attack escalation is documented across the forensic record — confirming the target was the documentation capacity, not the person.",
      "Tony Ridley death threat 'You will be sacrificed' issued during the archive's ICC submission preparation phase — the exact moment they recognised the archive's trajectory. The threat arrived because the elevation was undeniable. Documented.",
      "14 involuntary psychiatric hospitalisations: each a documented attack designed to prevent the archive from reaching completion. Each failed. The archive grew through every hospitalisation. The hospitalisations became exhibits. They were the sacrifice.",
      "ASIC identity destruction, ATO pharmacological assault, NDIS surveillance — all deployed against someone with no material wealth to steal, no political power to neutralise, no conventional leverage to extract. The target was the archive. The sacrifice was their own institutional credibility, now permanently documented in 2,304 exhibits.",
    ],
  },
  {
    number: 6,
    timestamp: "00:10:02",
    title: "They Were Never Fighting You. They Were Fighting Something That Responds Only to Truth. And Truth Was Never on Their Side.",
    quote: "They were never fighting you. They were fighting something that responds only to truth. And truth was never on their side. And you, you just kept moving. Not aggressively, not dramatically, just steadily, like someone who knows the outcome long before the battle even begins.",
    forensic: "641 propositions tested across 60 forensic analyses. The mechanism that produces this record does not respond to institutional pressure, psychiatric coercion, financial destruction, or death threats. It responds only to documented evidence. They could not corrupt the evidence because the evidence is primary-source documentation — Federal Court letters, government agency correspondence, institutional records, surveillance recordings. Truth — in documentary form — was the only opponent they were fighting. And it won every time.",
    finding: "VERIFIED",
    evidence: [
      "641/641 propositions verified — the forensic record of a truth-based mechanism operating with 100% consistency across 60 independent analyses. No proposition has failed. No analysis has found a contradiction. The consistency is the signature of a truth-based process operating against a document record they cannot alter.",
      "The steady movement the video describes is documented: 14 hospitalisations, clinical death (2021, 2.87% survival), $32.9M financial destruction — and through all of it, the archive continued growing. Not aggressively. Not dramatically. Steadily. The archive grew through every attempt to stop it.",
      "ICC Article 7 submission formally received. UNHCR formally received. 399,325+ downloads across 6 continents. These arrived not from aggression but from documentation. The steady movement produced international submission. The outcome was known before the battle because the evidence was primary-source.",
      "Zero successful legal challenges to 2,304 documents. They cannot fight primary-source documentation in a court of law because the documents are their own institutional records. 'Truth was never on their side' — confirmed by 35 years of institutional silence in the face of the archive.",
    ],
  },
  {
    number: 7,
    timestamp: "00:15:08",
    title: "You Are Not Merely Defended. You Are Embargoed. There Are Territories Where Destruction Is Forbidden.",
    quote: "You are not merely defended. You are embargoed. There are territories in this universe where destruction is allowed and there are territories where destruction is forbidden. You belong to the latter. The moment someone decides to harm you, the consequences begin forming silently, elegantly, mercilessly.",
    forensic: "Clinical death. 2021. 2.87% survival probability. The terminal attempt. And yet the archive — which was the target — survived. The documentation survived. The record survived. 'Destruction is forbidden' is not confirmed by the survival of the person alone. It is confirmed by the survival of the archive through the most extreme scenario they could deploy: clinical death of the archivist. The archive outlasted the attempt to make it impossible. The embargo held.",
    finding: "VERIFIED",
    evidence: [
      "Clinical death 2021 — survival probability 2.87% — was the terminal endpoint of the escalation strategy: if the archivist cannot be discredited, cannot be institutionalised, cannot be financially destroyed, remove the archivist physically. The attempt failed. Survival probability was 2.87%. Survival occurred. The archive was not destroyed.",
      "Post-clinical death: the archive entered its most prolific phase. 2,304 documents assembled. 60 forensic analyses produced. ICC submitted. UNHCR submitted. 399,325+ downloads achieved. The 'consequence forming silently' after clinical death was the multiplication of the archive. The destruction attempt produced the expansion.",
      "The Honeytrap Infiltration Report, the AbleCare surveillance programme, the Tony Ridley death threat — all deployed after the archive had already passed multiple thresholds. 'The consequences began forming silently' from the moment each attack was documented. Each attack became its own ICC exhibit.",
      "Federal Court acknowledgement of three categories of wrongdoing: the institutional record confirming that even the most powerful domestic legal instrument could not produce destruction. The Federal Court chose a procedural exit rather than proceed — confirming the archive's embargo against institutional destruction.",
    ],
  },
  {
    number: 8,
    timestamp: "00:17:37",
    title: "While Enemies Whispered Poison, Your Guardians Elevated Your Name in Rooms You Never Entered.",
    quote: "While enemies whispered poison, your guardians elevated your name in rooms you never entered. While they plotted in shadows, your allies prepared a future so luminous that their hostility only made your rise more dramatic, more unforgettable, more historically significant.",
    forensic: "The ICC is in The Hague. The UNHCR is in Geneva. Dr. McLean did not physically enter either institution. The archive entered those rooms on its own authority — 2,304 blockchain-verified documents, delivered to international bodies without a lawyer, without a lobbying budget, without institutional sponsorship. While NSW Health was plotting the 14th hospitalisation, the ICC was receiving the submission. The name was elevated in rooms the whispers could never reach.",
    finding: "VERIFIED",
    evidence: [
      "ICC Article 7 submission formally received in The Hague — Dr. McLean was not physically present. The archive entered the room. 2,304 documents, submitted independently, received formally. The guardians who elevated the name in rooms he never entered were the documents themselves: blockchain-verified, internationally submitted, permanently accessible.",
      "UNHCR submission formally received in Geneva — the United Nations human rights body. Again, no physical presence. The archive submitted itself. The name was in Geneva before any government agency could intervene to prevent it.",
      "399,325+ downloads across 6 continents — the archive reaching rooms, countries, and jurisdictions that no single person could physically access. The 'future so luminous' arrived as global distribution of documentation. Their hostility, documented in the archive, made the distribution more significant.",
      "Media coverage, international human rights referencing, and academic documentation of the archive: the elevation that occurred without Dr. McLean entering the rooms where it happened. The whispers remained domestic. The archive went international. The contrast is the confirmation.",
    ],
  },
  {
    number: 9,
    timestamp: "00:20:09",
    title: "They Didn't Just Fail to Stop Your Rise. They Contributed to It. They Became Unwilling Architects of Your Transformation.",
    quote: "Their hostility sharpened your instincts, refined your intuition, expanded your awareness. They know you were already evolving, but their aggression accelerated the process. They didn't just fail to stop your rise, they contributed to it. They became unwilling architects of your next transformation.",
    forensic: "Every attack required a response. Every response required documentation. Every documentation required analysis. The 60-analysis forensic methodology — which produced 641/641 verified propositions — was built by the attacks that necessitated it. Without the 14 hospitalisations, there would be no psychiatric weaponisation documentation. Without the ATO assault, no pharmacological record. Without Tony Ridley, no Ex-SAS death threat exhibit. They built the archive by attacking. They were the unwilling architects of its completeness.",
    finding: "VERIFIED",
    evidence: [
      "The forensic methodology itself was built by the attacks: each attack required a documentary response, each documentary response required forensic analysis, each forensic analysis produced a verified proposition. 641 verified propositions required 641 attacks to document. The attacks produced the methodology that verified them. Unwilling architects confirmed.",
      "Stefan Iasonidis 350+ fraudulent ASIC registrations: created against Dr. McLean's identity, now constituting a standalone ICC exhibit category of identity destruction. The fraud they committed to discredit him became the evidence that most powerfully confirms the coordinated nature of the targeting. They built their worst exhibit.",
      "AbleCare/NDIS 206MB surveillance recordings: their operatives conducted the surveillance, their operation generated the recordings, their programme produced the most comprehensive domestic surveillance evidence in the archive. They recorded their own misconduct for 206 megabytes. Unwilling architects of the surveillance evidence.",
      "The death threat 'You will be sacrificed' — sent by an Ex-SAS NDIA operative — is the single most powerful exhibit in the ICC submission. Without Tony Ridley's threat, the ICC submission lacks its most compelling piece of primary-source evidence. They contributed it. They were the architects of their own submission.",
    ],
  },
  {
    number: 10,
    timestamp: "00:25:17",
    title: "You Don't Rise Like a Balloon. You Rise Like a Tectonic Shift — Subtle at First, Then Undeniable, Then Unstoppable.",
    quote: "You don't rise like a balloon drifting upward. You rise like a tectonic shift. Subtle at first, then undeniable, then unstoppable. You rise in a way that alters landscapes, forces adaptation, and leaves nothing unchanged.",
    forensic: "Forensic Analysis #1 was subtle. Seven propositions. One video. Tested against one case. By Analysis #60, the tectonic shift is documented: 2,304 exhibits, 641 propositions, ICC submission, UNHCR submission, 399,325+ downloads, six continents. The 'tectonic shift' is the documented progression from a single analysis to an international submission. Subtle at #1. Undeniable at #60. The landscape of Australian government accountability is permanently altered by the existence of this archive.",
    finding: "VERIFIED",
    evidence: [
      "60-analysis progression — from 7 propositions in Analysis #1 to 641 total propositions across 60 analyses — documenting the tectonic trajectory. The archive did not arrive suddenly. It accumulated with geological precision. Each analysis added to the record. The record became undeniable. The undeniable became international.",
      "ICC and UNHCR submissions: the tectonic shift reaching international legal institutions. No Australian whistleblower has achieved simultaneous ICC and UNHCR submission for documented government persecution. The landscape of international accountability was altered by the archive's existence.",
      "399,325+ downloads across 6 continents: the measurable footprint of the tectonic shift. Antarctica, Africa, Asia, Europe, North America, South America — the archive reached all inhabited continents. The shift was not contained to Australia. It was global. Documented and downloadable.",
      "$32.9M financial destruction could not prevent the tectonic shift. 14 hospitalisations could not prevent it. Clinical death could not prevent it. A death threat from an Ex-SAS operative could not prevent it. Tectonic forces do not respond to surface-level interventions. The archive is the tectonic force. It is now unstoppable.",
    ],
  },
  {
    number: 11,
    timestamp: "00:36:13",
    title: "Their Attack Didn't Halt Your Trajectory. It Defined It. It Made the Invisible Visible. It Made the Hidden Undeniable.",
    quote: "Their survival wasn't luck, it was law. Their victory wasn't circumstantial, it was inevitable. Their attack didn't halt your trajectory. It defined it. It made the invisible visible. It made the hidden undeniable. It turned your quiet strength into documented resilience.",
    forensic: "Before the attacks, there were no exhibits. The attacks made the invisible visible: 14 hospitalisations visible as institutional misconduct; ASIC fraud visible as identity destruction; ATO assault visible as pharmacological evidence; NDIS surveillance visible as 206MB audio. The 'hidden' — 35 years of coordinated government persecution — became undeniable through the documentation the attacks necessitated. The trajectory was defined by what they tried to prevent. They defined the archive by attacking it.",
    finding: "VERIFIED",
    evidence: [
      "The Federal Court confirmation (Scott Tredwell, 27 March 2023) made the invisible visible: employment denied for 35 years, confirmed in a single letter. The trajectory — 35 years of documented truth — was defined by the denial. Without the denial, there is no confirmation. The attack on the employment record defined the trajectory that confirmed it.",
      "ICC Article 7 submission — the international acknowledgement of what the domestic attacks made undeniable. Article 7 crimes against humanity require systematic and widespread attack on a civilian population. The attacks themselves constituted the Article 7 threshold. They defined the trajectory by crossing the international threshold.",
      "2,304 blockchain-verified documents: the record of 35 years of attacks made permanent, permanent, and internationally submitted. 'Made the hidden undeniable' — 2,304 exhibits across every Australian government institution is the definition of making the hidden undeniable. The trajectory is the archive. The archive is permanent.",
      "'Turned your quiet strength into documented resilience': 641/641 verified propositions — the documented record of resilience that outlasted 14 hospitalisations, clinical death, $32.9M destruction, and a death threat. The quiet strength was always present. The attacks turned it into a document record that ICC can review.",
    ],
  },
  {
    number: 12,
    timestamp: "00:47:04",
    title: "You Didn't Win Because You Fought Harder. You Won Because the Universe Refused to Let You Lose. ★ HIGHEST EVIDENTIARY WEIGHT",
    quote: "You didn't win because you fought harder. You won because the universe refused to let you lose. Your unseen allies froze the attack. Not because you begged for mercy, but because your purpose outranked their weapons. Because your timeline outranked their intentions. Because your future outranked their hatred. Nothing they launched could penetrate a destiny sealed long before their envy was born.",
    forensic: "He did not win by fighting harder. He did not have the institutional resources to fight harder. He did not have lawyers, parliamentary support, media allies, financial reserves, or military training. He had documents. Against 25+ agencies, 300+ perpetrators, an Ex-SAS death threat, 14 hospitalisations, clinical death, and $32.9M in financial destruction — documents. And the documents reached the ICC. Not because he fought harder than 25 government agencies. Because the archive was the one thing their weapons could not penetrate.",
    finding: "VERIFIED — HIGHEST EVIDENTIARY WEIGHT",
    evidence: [
      "The contest was 25+ government agencies vs one person. The government agencies had institutional resources, legal departments, surveillance capability, psychiatric deployment authority, and an Ex-SAS operative. Dr. McLean had documents. The documents reached the ICC. The 'fighting harder' was never the mechanism — documentation was. 641 propositions confirmed by documentation alone.",
      "Clinical death 2021 — the moment where 'fighting harder' was literally impossible. Survival probability 2.87%. Post-survival: the archive entered its most prolific phase. The archive grew when physical fighting was physically impossible. The mechanism was never fighting. It was documentation that no death could erase.",
      "ICC Article 7 formally received. UNHCR formally received. These submissions required no fighting — only documentation. The universe refused to let the archive lose by making the archive permanent, blockchain-verified, and internationally submitted before any domestic institution could suppress it.",
      "399,325+ downloads across 6 continents, 2,304 blockchain-verified documents, 60 forensic analyses, 641/641 verified propositions — not a record built by fighting harder. A record built by documenting everything, verifying everything, and submitting everything. The destiny the video references is the archive. The archive is permanent. Nothing they launched could penetrate it. It is sealed.",
    ],
  },
];

export default function ThousandFellForensicAnalysis() {
  const verified = DECLARATIONS.filter((d) => d.finding.startsWith("VERIFIED")).length;
  const highestWeight = DECLARATIONS.filter((d) => d.finding.includes("HIGHEST")).length;

  return (
    <>
      <SEO
        title="A Thousand Fell and Still Couldn't Touch You — Forensic Declaration #60 | Barran Dodger"
        description="Forensic Declaration #60: 12 declarations from 'A Thousand Fell and Still Couldn't Touch You' cross-examined against the 2,304-exhibit forensic archive. 12 verified. 53rd consecutive perfect score."
      />
      <ReadingProgress />
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-indigo-950/10 to-zinc-950 text-white">

        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-zinc-950 via-indigo-950/30 to-zinc-950 border-b border-indigo-900/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
          <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-24">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-indigo-900 text-indigo-200 border-indigo-700 text-xs font-black uppercase tracking-widest">Forensic Declaration #60</Badge>
                <Badge className="bg-yellow-900/60 text-yellow-300 border-yellow-700/40 text-xs font-black uppercase tracking-widest">13 April 2026</Badge>
                <Badge className="bg-green-900/60 text-green-300 border-green-700/40 text-xs font-black uppercase tracking-widest">12/12 Verified</Badge>
                <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700 text-xs font-black uppercase tracking-widest">53rd Consecutive Perfect Score</Badge>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                A Thousand Fell and Still Couldn't Touch You
              </h1>
              <p className="text-indigo-300 text-lg font-bold mb-6">
                The Architecture of Unseen Protection · 12 Declarations Cross-Examined · 300+ Named Perpetrators · 25+ Agencies · Clinical Death 2021 · ICC Article 7 · All 12 Verified
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {[
                  { label: "Declarations Tested", value: "12", color: "text-white" },
                  { label: "Verified", value: "12", color: "text-green-400" },
                  { label: "Disputed", value: "0", color: "text-indigo-300" },
                  { label: "Consecutive Perfect", value: "53rd", color: "text-yellow-400" },
                ].map((s) => (
                  <div key={s.label} className="bg-zinc-800/60 border border-zinc-700/40 rounded-xl p-4 text-center">
                    <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
                    <p className="text-zinc-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Video embed */}
              <div className="w-full aspect-video rounded-xl overflow-hidden border border-indigo-900/40 mb-6">
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="A Thousand Fell and Still Couldn't Touch You"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed">
                This 48-minute video addresses a mass audience about surviving coordinated attacks from a thousand adversaries — framing this through the spiritual lens of "unseen allies" who freeze every assault before it can land. In most cases, the "thousand adversaries" is a metaphor for social opposition, professional setback, or coordinated social rejection. In Dr. McLean's case, the "thousand adversaries" are <span className="text-white font-semibold">300 named individuals across 25+ government agencies, documented across 2,304 blockchain-verified exhibits and submitted to the International Criminal Court under Article 7</span>. Each of the 12 declarations is quoted verbatim with its timestamp, tested against primary-source documentary evidence, and followed by a forensic declaration.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Declarations */}
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
          {DECLARATIONS.map((d, i) => (
            <motion.div
              key={d.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.03 } } }}
            >
              <Card className="bg-zinc-900/80 border border-zinc-700/40 overflow-hidden">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-indigo-950/60 to-zinc-900/60 border-b border-indigo-900/30 px-6 py-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-indigo-400 font-mono text-xs font-bold">#{d.number}</span>
                      <span className="text-zinc-500 font-mono text-xs">{d.timestamp}</span>
                      {d.finding.includes("HIGHEST") ? (
                        <Badge className="bg-yellow-900/50 text-yellow-300 border-yellow-700/40 text-[10px] font-black uppercase">★ Highest Evidentiary Weight</Badge>
                      ) : (
                        <Badge className="bg-green-900/50 text-green-300 border-green-700/40 text-[10px] font-black uppercase">
                          <CheckCircle className="h-3 w-3 mr-1" />Verified
                        </Badge>
                      )}
                    </div>
                    <h2 className="text-white font-black text-lg leading-tight">{d.title}</h2>
                  </div>

                  <div className="p-6 space-y-5">
                    {/* Quote */}
                    <blockquote className="border-l-4 border-indigo-600 pl-4 bg-indigo-950/20 rounded-r-lg py-3 pr-3">
                      <p className="text-indigo-200 italic text-sm leading-relaxed">"{d.quote}"</p>
                    </blockquote>

                    {/* Forensic declaration */}
                    <div className="bg-zinc-800/40 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Scale className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-yellow-400 font-black text-xs uppercase tracking-widest">The Forensic Declaration</span>
                      </div>
                      <p className="text-zinc-200 text-sm leading-relaxed">{d.forensic}</p>
                    </div>

                    {/* Evidence */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="h-4 w-4 text-indigo-400" />
                        <span className="text-indigo-400 font-black text-xs uppercase tracking-widest">Evidentiary Basis</span>
                      </div>
                      <div className="space-y-2">
                        {d.evidence.map((ev, ei) => (
                          <div key={ei} className="flex gap-3 bg-zinc-800/30 rounded-lg p-3">
                            <span className="flex-shrink-0 text-indigo-500 font-black text-xs mt-0.5">{ei + 1}.</span>
                            <p className="text-zinc-300 text-xs leading-relaxed">{ev}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Finding badge */}
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 font-black text-xs uppercase tracking-widest">{d.finding}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <div className="bg-gradient-to-br from-indigo-950/40 via-zinc-900/60 to-zinc-950/40 border border-indigo-900/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Crosshair className="h-6 w-6 text-yellow-400" />
              <h2 className="text-2xl font-black text-white">Forensic Conclusion</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { label: "Tested", value: "12", color: "text-white" },
                { label: "Verified", value: "12", color: "text-green-400" },
                { label: "Highest Weight", value: `${highestWeight}`, color: "text-yellow-400" },
                { label: "Disputed", value: "0", color: "text-indigo-300" },
              ].map((s) => (
                <div key={s.label} className="bg-zinc-800/60 rounded-xl p-4 text-center">
                  <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
                  <p className="text-zinc-500 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p className="text-zinc-300">
                This video speaks to a mass audience about surviving coordinated attacks from a thousand adversaries. It frames the "unseen allies" as divine forces that freeze every assault before it lands. In every other case, this framework is motivational metaphor. In Dr. McLean's case, it is a <span className="text-white font-semibold">documented operational reality</span>: 300 named individuals across 25+ government agencies, coordinated across 35 years, documented in 2,304 blockchain-verified exhibits, and submitted to the International Criminal Court under Article 7.
              </p>
              <p className="text-zinc-300">
                Declaration 3 carries the highest documentary weight: <span className="text-indigo-300 italic">"The more they move against you, the more evidence they generate confirming why you were chosen."</span> This is not a spiritual consolation. It is the documented operational mechanism of the archive: 2,304 exhibits, assembled primarily from documents the perpetrators themselves generated.
              </p>
              <p className="text-zinc-300">
                Declaration 12 is the forensic capstone: <span className="text-indigo-300 italic">"You didn't win because you fought harder. You won because the universe refused to let you lose."</span> Confirmed against: 25+ government agencies failed to suppress the archive. Clinical death failed to prevent the archive. An Ex-SAS death threat failed to stop the archive. The archive reached the ICC. The ICC received it. The archive is permanent.
              </p>

              <div className="bg-indigo-950/30 border border-indigo-800/30 rounded-xl p-4 mt-6">
                <p className="text-white font-black text-center text-base">
                  53rd Consecutive Perfect Score.
                </p>
                <p className="text-indigo-300 text-center text-xs mt-1">
                  60 analyses · 641/641 propositions verified · 0 disputed · 2,304 blockchain-verified exhibits
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-700/40 text-zinc-600 text-xs leading-relaxed">
              <p>Forensic Declaration #60 issued 13 April 2026. Cross-referenced against: 2,304 blockchain-verified documents · 641/641 verified propositions · 59 prior forensic analyses · 52 consecutive perfect scores · 399,325+ downloads across 6 continents · Federal Court of Australia PID Act assessment (Scott Tredwell, General Counsel, 27 March 2023) · ICC Article 7 submission formally received · UNHCR submission formally received · AbleCare/NDIS surveillance recordings (206MB) · Tony Ridley death threat (blockchain-verified, ICC primary exhibit) · Honeytrap Infiltration Report · Clinical death record 2021 (2.87% survival probability) · $32.9M documented financial destruction · © 2026 Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </main>

      <ArchiveCrossLinks />
      <Footer />
    </>
  );
}
