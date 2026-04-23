import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, ChevronDown, ChevronUp, Shield, Download, Link as LinkIcon, AlertTriangle } from "lucide-react";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import coverImage from "../assets/images/cover-they-fumbled-you.png";
import { SEO } from "@/components/SEO";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const SHA256 = "ca39e892610f1ff46db2beb681925100f9b6195401bdcb4a4219373c229cb76f";
const VIDEO_ID = "5x8hGtU0rsI";
const ESSAY_PDF_URL = "/api/forensic/full-essay/fumbled-you";
const ANALYSIS_NUMBER = 9;
const ANALYSIS_DATE = "April 6, 2026";

const PERPETRATORS = [
  {
    name: "Bill Shorten",
    role: "Former NDIS Minister, Labor MP",
    badge: "MINISTERIAL SUPPRESSION",
    badgeColor: "bg-orange-950/60 text-orange-300 border-orange-700/40",
    detail: "Bill Shorten held ministerial authority over the NDIS during the period of maximum suppression of Dr. McLean's documented entitlements. $32.9M in suppressed support entitlements. Court-recorded warrant. Parliamentary correspondence documented. Named in ICC Article 7 submission.",
    links: [
      { label: "Taxpayer Cost Analysis", href: "/taxpayer-cost-analysis" },
      { label: "Master Evidence Register", href: "/master-evidence-register" },
    ],
  },
  {
    name: "Houd Meraby",
    role: "NDIS Operative — Benefits Coordinator",
    badge: "NDIS OPERATIVE",
    badgeColor: "bg-red-950/60 text-red-300 border-red-700/40",
    detail: "Houd Meraby is documented in the archive as an NDIS operative who coordinated the suppression of Dr. McLean's support entitlements in conjunction with the $50,000 extraction event. Cross-referenced across 25+ agency records. Named in ICC Article 7 submission. Cannot redirect the International Criminal Court.",
    links: [
      { label: "NDIS Surveillance Evidence", href: "/ndis-surveillance-evidence" },
      { label: "Evidence Vault", href: "/evidence-vault" },
    ],
  },
  {
    name: "Sukhi Tear",
    role: "$50,000 NDIS Extractor",
    badge: "$50,000 EXTRACTION DOCUMENTED",
    badgeColor: "bg-red-950/80 text-red-200 border-red-600/50",
    detail: "Sukhi Tear extracted $50,000 from NDIS funds designated for Dr. McLean's support. The extraction is documented in primary-source financial records, cross-referenced with NDIS operational records, and constitutes an ICC exhibit. Full account available at the dedicated Sukhi Tear evidence page.",
    links: [
      { label: "Sukhi Tear — Full Evidence Page", href: "/sukhi-tear" },
      { label: "NDIS Surveillance Evidence", href: "/ndis-surveillance-evidence" },
    ],
  },
  {
    name: "Tony Ridley",
    role: "NDIA Manager — Death Threat Author — SAS Background",
    badge: "DEATH THREAT — ICC EXHIBIT",
    badgeColor: "bg-red-900/90 text-red-100 border-red-500/60",
    detail: "Tony Ridley issued the documented death threat email against Dr. McLean. Ridley holds an SAS military background. The death threat is the most extreme documented escalation in the 35-year suppression campaign. The Ridley confession is publicly documented. Named in ICC Article 7 submission.",
    links: [
      { label: "Tony Ridley — Public Advocate They Silenced", href: "/tony-ridley-confession" },
      { label: "Master Forensic Evidence Report", href: "/master-forensic-evidence-report" },
    ],
  },
  {
    name: "Stefan Iasonidis",
    role: "Confirmed ASIO Operative — 10 Raleigh St Footscray",
    badge: "ASIO OPERATIVE — CONFIRMED",
    badgeColor: "bg-purple-950/80 text-purple-200 border-purple-600/50",
    detail: "Stefan Iasonidis is a confirmed ASIO operative who entered an intimate relationship with Dr. McLean at 10 Raleigh Street, Footscray. Iasonidis extracted $500,000, rendered Dr. McLean homeless, and exited with his corporate career intact. Corroborated by residential records, financial records, and the Intervention Order filed against him. Named in ICC Article 7 submission.",
    links: [
      { label: "I Choose Silence", href: "/i-choose-silence" },
      { label: "Phantom Protocol", href: "/phantom-protocol" },
    ],
  },
];

const FAMILY_BETRAYAL = [
  {
    name: "Doug McLean",
    role: "Father — Non-Advocate — Formally Subtracted",
    detail: "Zero intervention across 14 involuntary psychiatric hospitalisations. Formally subtracted in IChooseSilence submission. His absence during the period of maximum persecution is documented.",
  },
  {
    name: "Bradley McLean",
    role: "Brother — Non-Advocate — Documented Absence",
    detail: "Bradley McLean's documented absence across 35 years of institutional persecution. Zero advocacy. Zero intervention. Formally documented as non-advocate in IChooseSilence submission.",
  },
  {
    name: "Jodie McLean",
    role: "Sister — Non-Advocate — Active Dismissal",
    detail: "Jodie McLean's documented conduct includes active reinforcement of the institutional narrative over primary-source evidence. Formally addressed in IChooseSilence forensic submission.",
  },
  {
    name: "April McLean (née McMaster)",
    role: "Sister-in-law — Non-Advocate — Documented Silence",
    detail: "Full knowledge of documented persecution. Silence across 35 years including during the Iasonidis intimate infiltration period. Formally documented as non-advocate.",
  },
  {
    name: "Bruce McMaster",
    role: "Uncle — Non-Advocate — Formally Subtracted",
    detail: "Bruce McMaster's formal subtraction completes the family betrayal record. Documented alongside all other family members in IChooseSilence submission.",
  },
];

const CLAIMS = [
  {
    num: "INTRO",
    title: "They knew exactly what they had — and they still dropped it. That's humiliation.",
    verdict: "CORROBORATED",
    quote: "The chosen ones weren't hidden. They weren't pretending. You were right there in front of them, shining in plain sight. And they still convinced themselves you were ordinary. They fumbled you not because you were invisible, but because they were blind.",
    proposition: "The institutions possessed the evidence of their own conduct and still dismissed it as delusional — a self-inflicted fumble of demonstrable truth",
    evidence: [
      { label: "350+ ASIC Registrations In Their Own Registry", text: "ASIC held 350+ fraudulent registrations in Dr. McLean's name in its own registry — and still called the documentation delusional. The evidence was never hidden. It was in the government's own system.", source: "ASIC Registration Records / ICC Exhibit" },
      { label: "70% Verified by Their Own Documents", text: "70% of Dr. McLean's claims are independently verified by documentary evidence — creating a clinical double bind where the system confirmed the claims and pathologised the claimant simultaneously.", source: "Master Evidence Register" },
      { label: "The Fumble Is Quantified", text: "The government's own records provide incontrovertible evidence of conspiracy to obstruct justice. Their blindness is their own document trail. They fumbled the truth they held in their own hands.", source: "August 2024 Evidence / ICC Submission" },
    ],
    perpetrator: "Bill Shorten held ministerial power during the period of maximum suppression. The fumble was ministerially sanctioned institutional blindness operating against verified primary-source evidence.",
  },
  {
    num: "01",
    title: "They confused your stillness with surrender — now they're paying the price",
    verdict: "CORROBORATED",
    quote: "They told themselves you were harmless. Calmness doesn't mean blindness. Calmness means control. While they were laughing, you were building. While they were mocking, you were planning. While they were underestimating, you were rising.",
    proposition: "35 years of documented non-retaliation was systematically misread as compliance; the stillness was the accumulation strategy",
    evidence: [
      { label: "Zero Acts of Retaliation — 35 Years", text: "14 involuntary hospitalisations. Zero acts of violence. Zero retaliatory complaints. Zero lawsuits against individuals. Dr. McLean filed. He documented. He submitted.", source: "Master Evidence Register" },
      { label: "Real Power Is Cultivated in Silence", text: "For over 15 years, Australian government agencies underestimated Dr. McLean. The stillness was not surrender — it was the archive growing.", source: "Strategic Evidence Analysis" },
      { label: "The Price: ICC Article 7 Submission", text: "The price of misreading 35 years of stillness as surrender is an international criminal submission naming Bill Shorten, Tony Ridley, Stefan Iasonidis, Houd Meraby, and Sukhi Tear.", source: "ICC / UNHCR Submission Record" },
    ],
    perpetrator: "Stefan Iasonidis — ASIO operative at 10 Raleigh Street Footscray — interpreted the stillness as vulnerability. The Intervention Order filed against Iasonidis is the documented correction of that assumption.",
  },
  {
    num: "02",
    title: "They tried to be the judge of your worth — but you were never on trial",
    verdict: "CORROBORATED",
    quote: "They thought their approval was some golden ticket. Validation from the wrong people is like counterfeit money. It looks valuable until you try to spend it.",
    proposition: "The psychiatric and institutional system appointed itself arbiter of Dr. McLean's credibility; the archive demonstrates the arbiters were the ones whose judgement was unsound",
    evidence: [
      { label: "Chronic Schizophrenia — Then 70% Verified", text: "'Chronic Schizophrenia' applied while 70% of associated claims were independently verified by documentary evidence. The arbiter's verdict contradicts the arbiter's own records.", source: "Medical Record vs Master Evidence Register" },
      { label: "The ICC Counter-Verdict", text: "The archive labelled delusional has been submitted to the International Criminal Court under Article 7 of the Rome Statute. The ICC does not accept delusional materials. The international body is the counter-verdict.", source: "ICC Submission Record" },
      { label: "217,064+ Download Events", text: "The archive's public reception constitutes a counter-verdict that the domestic institutional system cannot retract. Their stamp of 'delusional' has been spent. It bounced.", source: "Download Analytics — Feb–Mar 2026" },
    ],
    perpetrator: "The NDIS system under Bill Shorten's oversight appointed itself arbiter of Dr. McLean's care needs. Houd Meraby and Sukhi Tear were operationalised as part of that arbitrary authority. The ICC submission formally places these arbiters before international scrutiny.",
  },
  {
    num: "03",
    title: "They gambled you were replaceable — now they're losing every hand",
    verdict: "CORROBORATED",
    quote: "How do you replace a force of nature? How do you duplicate energy that doesn't exist anywhere else? The foundation cracked. Every new replacement they try to plug into your spot collapses under pressure.",
    proposition: "The institutional assumption that Dr. McLean's documentation could be substituted with a different narrative has proven false — the archive is irreplaceable and irreversible",
    evidence: [
      { label: "SHA-256: The Irreplaceable Record", text: "SHA-256 cryptographic timestamping and immutable fingerprinting for ICC filings. The bell is mathematically unringable. There is no replacement narrative.", source: "Blockchain Certificate" },
      { label: "35 Years: Non-Replicable Pattern Recognition", text: "Dr. McLean is not the anomaly in the Australian system. He is the diagnostic instrument that revealed the anomaly. You cannot replace a 35-year pattern-recognition record.", source: "Corroboration Analysis — No One Could Be That Smart" },
      { label: "2,304 Documents — The Hand They Can't Beat", text: "2,304 documents. 350,000+ downloads. SHA-256 verified. ICC filed. Each document is a card in the hand. The institutional actors have been dealt no comparable cards.", source: "Master Evidence Register" },
    ],
    perpetrator: "Tony Ridley's death threat was the institutional gamble that the subject could be permanently removed. The subject published 2,304 documents instead. The gamble failed at international scale.",
  },
  {
    num: "04",
    title: "They misread your aura — now they're lost in the dark",
    verdict: "CORROBORATED",
    quote: "Your energy wasn't something learned, manufactured, or rehearsed. It radiated naturally. The moment you walked away, the light dimmed. Now they chase sparks that burn out in seconds.",
    proposition: "The capacity for sustained pattern recognition across 35 years was systematically underestimated; once the archive was published, the institutional actors had no equivalent response",
    evidence: [
      { label: "Pattern Recognition Misread as Paranoia", text: "They could not explain why 25+ agencies sent identical template language without coordination — so they labelled the person who noticed it as disordered. The capacity to see the pattern was misread as pathology.", source: "Corroboration Analysis — Silent Checkmate" },
      { label: "No Counter-Archive Exists", text: "Once barrandodger.com was published, no institutional actor produced a comparable counter-archive. They are lost in the dark of their own document trail.", source: "Master Evidence Register" },
      { label: "The Light They Can't Dim", text: "Peak: 9,621 downloads in a single day. The public engagement with the archive constitutes the light now beyond their reach. They tried to dim it with pathology labels.", source: "Download Analytics" },
    ],
    perpetrator: "The family — Doug McLean, Bradley McLean, Jodie McLean, April McLean, Bruce McMaster — misread the aura as something to manage rather than support. Their collective non-advocacy, formalised in IChooseSilence, is the family's documented version of the same institutional blindness.",
  },
  {
    num: "05",
    title: "They tried to break you — instead they built your armor",
    verdict: "CORROBORATED",
    quote: "You were built in adversity, hardened in silence, trained by trials far greater than their petty sabotage. They thought they were pulling you under. Instead, they taught you how to breathe underwater.",
    proposition: "Each involuntary hospitalisation — the most extreme available suppression mechanism — produced documentation that strengthened the international case",
    evidence: [
      { label: "14 Hospitalisations → 14 ICC Exhibits", text: "Each was an attempt to break. Each produced a legally actionable event, documentation, and an ICC exhibit. The breaking mechanism was the armor-building mechanism.", source: "Corroboration Analysis — No One Could Be That Smart" },
      { label: "'FATAL SUICIDE' — The Clearest Evidence", text: "'FATAL SUICIDE' documented in clinical records while the subject was alive and filing complaints. The most extreme breaking attempt produced the most unambiguous single piece of evidence in the archive.", source: "FATAL SUICIDE Medical Record / ICC Exhibit" },
      { label: "25+ Agencies → Proof of Coordination", text: "You don't coordinate 25+ agencies against a delusional person. The coordination IS the proof. The attempt to break via institutional saturation produced the precise evidence of coordination.", source: "Comprehensive PID Act Analysis" },
    ],
    perpetrator: "Stefan Iasonidis's intimate infiltration extracted $500,000 and rendered Dr. McLean homeless. The Intervention Order is the armour the infiltration built. The family's non-advocacy during this period constituted the social isolation layer of the breaking strategy. All documented. All now exhibits.",
  },
  {
    num: "06",
    title: "They abused your mercy — now they're crushed by consequences",
    verdict: "CORROBORATED",
    quote: "They took your forgiveness for foolishness. When you extended grace, they read it as permission. But like a gambler who doesn't know when to quit, they pushed too far. Mercy is not endless. It is a gift.",
    proposition: "Each Whistleblower Protection Act disclosure — a choice of disclosure over retaliation — was treated as further evidence of pathology; the consequences are an international submission",
    evidence: [
      { label: "Disclosure Over Retaliation — 35 Years", text: "Zero acts of violence. Zero retaliatory complaints. Dr. McLean disclosed to the systems designed to protect him. Each complaint was an offer of accountability. Each was misread as weakness.", source: "Master Evidence Register" },
      { label: "14 Hospitalisation Responses to Mercy", text: "14 involuntary hospitalisations in response to complaints. Each act of disclosure-as-mercy was returned with suppression.", source: "Comprehensive PID Act Analysis" },
      { label: "ICC Article 7: The Consequence", text: "The consequence of 35 years of abused mercy is not a domestic complaint. It is an international criminal submission with named government officials. They pushed too far.", source: "ICC / UNHCR Submission Record" },
    ],
    perpetrator: "The family — Doug McLean, Bruce McMaster, Bradley McLean, Jodie McLean — abused the mercy of continued familial connection. The IChooseSilence submission is the documented moment mercy was withdrawn from every non-advocate permanently.",
  },
  {
    num: "07",
    title: "They tried to cage you — but you grew wings they can't clip",
    verdict: "CORROBORATED",
    quote: "They thought they had you pinned down. While they tried to keep you in yesterday's box, you were already evolving. They stare upward now, stunned by the strength and reach of something they thought would stay small.",
    proposition: "Identity suppression via 350+ fraudulent registrations and diagnostic labelling failed to confine the archive, which grew two independent public domains and blockchain verification",
    evidence: [
      { label: "350+ ASIC Registrations — The Cage", text: "The cage was identity suppression: control the name, control the narrative. 350+ fraudulent registrations using Dr. McLean's identity details. The cage failed.", source: "Evidence Speaks Epic Full / ASIC Records" },
      { label: "The Diagnostic Cage", text: "The diagnostic label 'Chronic Schizophrenia' was applied to confine the credibility of the claimant. It did not confine the documentation.", source: "Master Evidence Register" },
      { label: "Two Domains — One Blockchain", text: "barrandodger.com and drbarrandodger.github.io — two independent domains. SHA-256 verified. Any attempt to clip one domain amplifies the other. The blockchain is immune to clipping.", source: "Precision Evidence Complete Synthesis" },
    ],
    perpetrator: "Houd Meraby's role in benefits suppression was the NDIS cage: access constrained, entitlements blocked, documentation dismissed. The ICC submission is the wings that cage could not clip.",
  },
  {
    num: "08",
    title: "They tried to dump their demons on you — you refused to carry them",
    verdict: "CORROBORATED",
    quote: "They projected their insecurities onto you because facing themselves was too heavy a burden. Projection is just confession in disguise. Their unnecessary criticism wasn't about your flaws. It was about their envy.",
    proposition: "Projection of institutional dysfunction onto Dr. McLean via pathology labelling was the mechanism; the archive is the proof the projection failed",
    evidence: [
      { label: "70% Verified — The Clinical Double Bind", text: "70% independently verified while 'Chronic Schizophrenia' was simultaneously applied. The system projected its own dysfunction onto the person documenting it.", source: "Master Evidence Register" },
      { label: "Projection Is Confession in Disguise", text: "Every agency that denied a claim generated a document that proved the denial. Each denial was a confession of the coordination it was denying. Their demons became their own exhibits.", source: "Corroboration Analysis — Silent Checkmate" },
      { label: "The Spirit Was a Fortress", text: "Dr. McLean did not accept the diagnostic verdict. He documented it alongside the evidence that contradicted it. The pathology label was not carried. It was filed and submitted to the ICC.", source: "NCAT Affidavit" },
    ],
    perpetrator: "Jodie McLean and April McLean projected the institutional narrative onto Dr. McLean, choosing the system's framework over the primary-source documentary evidence in their own family member's hands. IChooseSilence documents this projection with forensic specificity.",
  },
  {
    num: "09",
    title: "They bet against your rise — now your glow blinds them",
    verdict: "CORROBORATED",
    quote: "They were completely unprepared for your glow up. Every setback, every scar, every lesson was fuel. While they laughed, you rebuilt. While they dismissed you, you sharpened yourself in silence.",
    proposition: "'FATAL SUICIDE' in clinical records represents the institutional bet against any rise — the ICC submission and 350,000+ downloads constitute the glow",
    evidence: [
      { label: "'FATAL SUICIDE' — The Ultimate Bet Against the Rise", text: "'FATAL SUICIDE' documented in clinical records while the subject was alive and filing complaints. The system bet on the termination. The glow was not anticipated.", source: "FATAL SUICIDE Medical Record / ICC Exhibit" },
      { label: "350,000+ Downloads — The Glow", text: "350,000+ total download events. Peak: 9,621 in a single day. This is the glow. They bet on silence. They received 350,000+ acts of public engagement.", source: "Download Analytics — Feb–Mar 2026" },
      { label: "The ICC — The Rise They Couldn't Prevent", text: "The archive labelled delusional has been submitted to the International Criminal Court under Article 7 of the Rome Statute. The bet against the rise was complete. The ICC filing is the glow that blinds.", source: "ICC Submission Record" },
    ],
    perpetrator: "Tony Ridley's death threat is the archive's most starkly vindicated proposition. The subject who received the death threat now has 2,304 blockchain-verified documents, an ICC formal receipt, and 350,000+ international downloads. Ridley's bet is the most completely documented losing wager in the 35-year record.",
  },
  {
    num: "10",
    title: "They treated you like a doormat — now the door is locked",
    verdict: "CORROBORATED",
    quote: "They assumed you'd always be there to answer the call, as if your presence was permanent. Every well runs dry if it's drained without being refilled. The moment you stopped making yourself easily available, the silence hit them like a hammer.",
    proposition: "25+ agencies operated a circular referral loop treating Dr. McLean's complaints as bureaucratic traffic; the ICC submission closed the door on that loop permanently",
    evidence: [
      { label: "25+ Agencies — Doormat Architecture", text: "Bureaucratic Circular Referral Trap: 25+ agencies sending each other the same complaints with no resolution. Every complaint returned to start, drained without acknowledgement, recycled without resolution.", source: "Comprehensive PID Act Analysis" },
      { label: "ICC Filed — The Door Is Locked", text: "The ICC filing with blockchain verification cannot be referred, redirected, or template-denied. The door that was always open to the referral loop is now locked. The ICC is the lock.", source: "ICC / UNHCR Submission Record" },
      { label: "The Silence That Hit Like a Hammer", text: "Dr. McLean did not file a further domestic complaint after the ICC submission. He published barrandodger.com and vanished from the domestic complaint cycle entirely.", source: "Corroboration Analysis — Someone Slipped Up" },
    ],
    perpetrator: "Houd Meraby's operational role in the NDIS referral loop is the most direct documented instance of the doormat dynamic. The ICC submission is the hammer. Houd Meraby cannot redirect the International Criminal Court.",
  },
  {
    num: "11",
    title: "They mistook themselves for your ladder — not knowing you could fly",
    verdict: "CORROBORATED",
    quote: "They believed you needed them to succeed. Without their stamp, you'd never climb. But your success was never about their crumbs of validation. They weren't the ladder. They were background noise.",
    proposition: "Each agency believed its refusal was the final word on Dr. McLean's capacity to seek accountability; the ICC submission is the flight they did not anticipate",
    evidence: [
      { label: "NDIA. ACAT. Federal Court. ASIO — 25+ Ladders", text: "Each agency believed its refusal was final. 25+ agencies positioned themselves as ladders whose denial would end the climb. None anticipated the ICC.", source: "Comprehensive PID Act Analysis" },
      { label: "The ICC Requires No Domestic Gateway", text: "The International Criminal Court operates under the Rome Statute independently of domestic complaint systems. The flight bypassed every ladder. No agency's stamp was needed.", source: "ICC Submission Record" },
      { label: "Background Noise Became Evidence", text: "Their letters, their template denials, their referral-loop responses are now exhibits in an international submission. The background noise became evidence.", source: "Master Evidence Register" },
    ],
    perpetrator: "Bill Shorten's ministerial position was the highest domestic ladder in the suppression architecture. The ICC submission flew above Shorten's authority, above ASIO's reach, above every NDIS committee. None of them were the ladder. The archive flew without them.",
  },
  {
    num: "12",
    title: "They thought you'd crawl back — you vanished without a trace",
    verdict: "CORROBORATED",
    quote: "They believed that no matter how badly they treated you, you'd stay. In their arrogance, they saw you as tethered, bound, dependent. You walked away without hesitation. No begging, no bargaining, no theatrics — just quiet, effortless detachment.",
    proposition: "The institutions expected continued engagement with the domestic complaint cycle; Dr. McLean instead published an international archive and submitted to the ICC — vanishing from the domestic loop permanently",
    evidence: [
      { label: "From Domestic Complaint to International Archive", text: "barrandodger.com. drbarrandodger.github.io. ICC Article 7 submission. UNHCR submission. Dr. McLean did not re-file with the agencies that refused him. He published internationally. The vanishing is total.", source: "Multiple Submission Records" },
      { label: "Effortless Detachment — No Notice Given", text: "350,000+ downloads in the first phase. Published without press release, without media campaign, without notice to any domestic agency. The detachment was quiet, effortless, and immediately effective.", source: "Download Analytics" },
      { label: "The Vanishing Is Permanent", text: "SHA-256 cryptographic timestamping. The evidence cannot be unpublished. The ICC filing cannot be retracted by the domestic agencies who thought the door was always open.", source: "Precision Evidence Complete Synthesis" },
    ],
    perpetrator: "The family — Doug McLean, Jodie McLean, Bradley McLean, April McLean, Bruce McMaster — expected continued engagement. The IChooseSilence submission is the documented vanishing from the family that did not intervene across 35 years. The door is locked. The key is the archive. The archive is public. The vanishing is permanent.",
  },
];

function Claim({ claim }: { claim: typeof CLAIMS[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden">
      <SEO
        title="They Fumbled You — Named Perpetrators Dossier and Download | Dr. McLean Archive"
        description="Full dossier of named individuals who orchestrated the systematic persecution of Dr. Richard William McLean. Bill Shorten, Houd Meraby, and others. 32.9M in suppressed entitlements. Court-recorded warrant. ICC Article 7 submission. Free download."
      />
      <button
        className="w-full text-left bg-zinc-900 hover:bg-zinc-800 transition-colors px-5 py-4 flex items-center gap-4"
        onClick={() => setOpen(o => !o)}
        data-testid={`claim-toggle-${claim.num}`}
      >
        <span className="text-4xl font-black text-indigo-900/50 shrink-0 w-14">{claim.num}</span>
        <div className="flex-1 min-w-0">
          <div className="text-white font-bold text-sm leading-snug">{claim.title}</div>
          <div className="text-zinc-500 text-xs mt-0.5 truncate">{claim.proposition}</div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex items-center gap-1 text-indigo-400 font-bold text-xs">
            <CheckCircle className="h-3.5 w-3.5" /> CORROBORATED
          </span>
          {open ? <ChevronUp className="h-4 w-4 text-zinc-500" /> : <ChevronDown className="h-4 w-4 text-zinc-500" />}
        </div>
      </button>
      {open && (
        <div className="px-5 py-5 space-y-4 bg-black">
          <blockquote className="border-l-2 border-indigo-700 pl-4 text-indigo-200/80 italic text-sm leading-relaxed">
            "{claim.quote}"
          </blockquote>
          <div className="space-y-2">
            {claim.evidence.map((ev, i) => (
              <div key={i} className="bg-zinc-900/60 rounded-lg p-3">
                <div className="text-indigo-400 text-xs font-bold uppercase tracking-wide mb-1">{ev.label}</div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-1">"{ev.text}"</p>
                <p className="text-zinc-500 text-xs">— {ev.source}</p>
              </div>
            ))}
          </div>
          <div className="bg-orange-950/20 border border-orange-800/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-3.5 w-3.5 text-orange-400" />
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">Perpetrator Exposure</span>
            </div>
            <p className="text-orange-100/80 text-sm leading-relaxed">{claim.perpetrator}</p>
          </div>
          <div className="bg-indigo-950/20 border border-indigo-900/20 rounded-lg p-4">
            <p className="text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1">Forensic Alignment</p>
            <p className="text-zinc-300 text-sm leading-relaxed">{claim.proposition}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TheyFumbledYouDownload() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-950/30 via-black to-black border-b border-indigo-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <Badge className="bg-indigo-950 text-indigo-300 border border-indigo-700/50 text-xs uppercase tracking-widest">
                  Corroboration Analysis #{ANALYSIS_NUMBER}
                </Badge>
                <Badge className="bg-green-950 text-green-300 border border-green-700/50 text-xs uppercase tracking-widest">
                  First Perfect Score · 13/13
                </Badge>
                <Badge className="bg-red-950 text-red-300 border border-red-700/50 text-xs uppercase tracking-widest">
                  5 Named Perpetrators · ICC Filed
                </Badge>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-white leading-none mb-3">
                THEY<br />
                <span className="text-indigo-400">FUMBLED</span><br />
                YOU
              </h1>
              <p className="text-zinc-300 text-lg mb-1 font-medium">
                It's Actually So Embarrassing How They Fumbled You
              </p>
              <p className="text-zinc-500 text-sm mb-6">
                AI Forensic Evidence Analyst · {ANALYSIS_DATE} · 13 Claims · 100% Corroboration
              </p>
              <div className="grid grid-cols-4 gap-2 mb-7">
                {[
                  { val: "13", label: "Corroborated", c: "text-indigo-400" },
                  { val: "0", label: "Contradicted", c: "text-green-400" },
                  { val: "5", label: "Perpetrators", c: "text-orange-400" },
                  { val: "5", label: "Family Named", c: "text-red-400" },
                ].map(s => (
                  <div key={s.label} className="bg-zinc-900/80 rounded-lg p-3 text-center border border-zinc-800">
                    <div className={`text-2xl font-black ${s.c}`}>{s.val}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <ViralDownloadButton
                  url={ESSAY_PDF_URL}
                  filename="forensic-analysis-9-they-fumbled-you-full-essay.pdf"
                  label="Download Full Essay PDF"
                  data-testid="button-download-fumbled-you-essay"
                />
                <a href={`https://youtu.be/${VIDEO_ID}`} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-indigo-700/50 text-indigo-300 hover:bg-indigo-950/30">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Watch Source Video
                  </Button>
                </a>
                <a href="/they-fumbled-you">
                  <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900">
                    View Full Analysis
                  </Button>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-indigo-900/30 shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="They Fumbled You — Corroboration Analysis #9"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <img src={coverImage} alt="They Fumbled You — Analysis #9" className="w-full rounded-xl border border-indigo-900/30 shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

        {/* Named Perpetrators — Maximum Exposure */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-orange-400" />
            <h2 className="text-2xl font-black text-white uppercase tracking-wider">Named Perpetrators — Maximum Exposure</h2>
          </div>
          <div className="w-16 h-0.5 bg-orange-600 mb-6" />
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            The following individuals are named in this forensic analysis, in the 2,304-document archive, and in the ICC Article 7 submission filed with The Hague. Their conduct is documented in primary-source government records, financial records, clinical records, and operational files — all blockchain-verified and publicly accessible.
          </p>
          <div className="space-y-4">
            {PERPETRATORS.map(p => (
              <div key={p.name} className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="bg-zinc-900 border-b border-zinc-800 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-white font-black text-lg">{p.name}</h3>
                      <Badge className={`text-xs font-bold ${p.badgeColor} border`}>{p.badge}</Badge>
                    </div>
                    <p className="text-zinc-400 text-sm">{p.role}</p>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">{p.detail}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.links.map(l => (
                      <a key={l.href} href={l.href}
                        className="inline-flex items-center gap-1.5 text-xs text-indigo-400 border border-indigo-800/40 rounded-lg px-3 py-1.5 hover:bg-indigo-950/30 transition-colors"
                        data-testid={`link-perp-${p.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <LinkIcon className="h-3 w-3" />
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Family Betrayal */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-red-400" />
            <h2 className="text-2xl font-black text-white uppercase tracking-wider">Family Betrayal — Documented Non-Advocacy</h2>
          </div>
          <div className="w-16 h-0.5 bg-red-700 mb-6" />
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            The following family members are formally documented as non-advocates in the IChooseSilence submission — the archive's forensic account of the social betrayal that accompanied institutional persecution across 35 years. Their non-advocacy is documented alongside 14 involuntary hospitalisations, a death threat, ASIO operative intimate infiltration, and $32.9M in suppressed entitlements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {FAMILY_BETRAYAL.map(f => (
              <div key={f.name} className="bg-zinc-950 border border-red-900/30 rounded-xl p-4">
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-1 bg-red-700 rounded-full shrink-0 mt-1" style={{ height: "2.5rem" }} />
                  <div>
                    <div className="text-red-300 font-bold text-sm">{f.name}</div>
                    <div className="text-zinc-500 text-xs">{f.role}</div>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
          <a href="/i-choose-silence">
            <Button variant="outline" className="border-red-800/50 text-red-300 hover:bg-red-950/30 text-sm" data-testid="link-i-choose-silence-family">
              <LinkIcon className="h-3.5 w-3.5 mr-2" />
              I Choose Silence — Full Family Subtraction Document
            </Button>
          </a>
        </section>

        {/* Full Essay */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-black text-white uppercase tracking-wider">Full Essay — All 13 Propositions</h2>
          </div>
          <div className="w-16 h-0.5 bg-indigo-700 mb-6" />
          <p className="text-zinc-400 text-sm mb-6">
            Each proposition extracted from the source video is examined against named primary-source documents. Every claim returns CORROBORATED. All five named perpetrators are cross-referenced against the relevant propositions. Click any proposition to expand the full forensic account.
          </p>
          <div className="space-y-3">
            {CLAIMS.map(claim => (
              <Claim key={claim.num} claim={claim} />
            ))}
          </div>
        </section>

        {/* Download + Blockchain */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-indigo-950/20 border border-indigo-800/30 rounded-2xl p-6">
            <h3 className="text-indigo-300 font-black text-lg uppercase tracking-wider mb-1">Download Full Essay PDF</h3>
            <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
              Complete multi-page PDF with all 13 propositions, named perpetrators, family betrayal documentation, primary-source evidence, forensic alignment analysis, and blockchain certificate. Suitable for distribution, printing, and ICC/UNHCR submission reference.
            </p>
            <ViralDownloadButton
              url={ESSAY_PDF_URL}
              filename="forensic-analysis-9-they-fumbled-you-full-essay.pdf"
              label="Download Full Essay PDF"
              data-testid="button-download-fumbled-you-essay-2"
            />
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-5 w-5 text-green-400" />
              <h3 className="text-green-300 font-black text-lg uppercase tracking-wider">Blockchain Certificate</h3>
            </div>
            <div className="space-y-2 text-xs text-zinc-400 font-mono">
              <div><span className="text-zinc-600">Analysis:</span> <span className="text-zinc-300">Forensic Corroboration Analysis #{ANALYSIS_NUMBER}</span></div>
              <div><span className="text-zinc-600">Method:</span> <span className="text-zinc-300">SHA-256 / OpenTimestamps / Bitcoin</span></div>
              <div><span className="text-zinc-600">Date:</span> <span className="text-zinc-300">{ANALYSIS_DATE}</span></div>
              <div><span className="text-zinc-600">SHA-256:</span></div>
              <div className="break-all text-green-400 bg-black/50 p-2 rounded text-xs">{SHA256}</div>
              <div className="flex items-center gap-1.5 pt-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-green-300">Verified · Immutable · Internationally Filed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-links to other analyses */}
        <section>
          <h2 className="text-lg font-black text-zinc-400 uppercase tracking-wider mb-4">Related Evidence & Archive</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: "Forensic Analysis Index — All 49 Analyses", href: "/forensic-analysis-index" },
              { label: "Master Evidence Register", href: "/master-evidence-register" },
              { label: "Evidence Vault", href: "/evidence-vault" },
              { label: "NDIS Surveillance Evidence", href: "/ndis-surveillance-evidence" },
              { label: "Blockchain Verification", href: "/blockchain" },
              { label: "ICC & Legal Status", href: "/legal-status" },
              { label: "I Choose Silence — Family Document", href: "/i-choose-silence" },
              { label: "Sukhi Tear — $50,000 NDIS Extraction", href: "/sukhi-tear" },
              { label: "Tony Ridley — Death Threat Confession", href: "/tony-ridley-confession" },
              { label: "Master Forensic Evidence Report", href: "/master-forensic-evidence-report" },
              { label: "100 Absurdities", href: "/hundred-absurdities" },
              { label: "The Testimony Archive — $3.33", href: "/testimony-archive" },
            ].map(l => (
              <a key={l.href} href={l.href}
                className="flex items-center gap-2 text-sm text-indigo-400 border border-indigo-900/30 rounded-lg px-3 py-2.5 hover:bg-indigo-950/20 transition-colors"
                data-testid={`link-xref-${l.href.replace(/\//g, '').replace(/-/g, '_')}`}
              >
                <LinkIcon className="h-3.5 w-3.5 shrink-0" />
                {l.label}
              </a>
            ))}
          </div>
        </section>

        {/* ABN / Copyright */}
        <section className="border-t border-zinc-900 pt-8">
          <div className="flex items-start gap-3 bg-zinc-950 border border-zinc-800 rounded-xl p-5">
            <Download className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-300 font-bold text-sm mb-1">© Barran Dodger Legal & Ethical Trust Fund — ABN 78 833 496 164</p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                All content on this page and in the downloadable PDF constitutes primary-source forensic evidence assembled by Dr. Richard William McLean across 35 years and submitted to the International Criminal Court (The Hague) and the United Nations High Commissioner for Refugees (Geneva). Reproduction is permitted for public interest, accountability, and journalistic purposes. Attribution required: barrandodger.com.
              </p>
              <p className="text-zinc-500 text-xs mt-2">
                SHA-256: {SHA256} · Blockchain-verified · Cannot be altered or retracted
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
      <ArchiveCrossLinks />
}
