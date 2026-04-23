import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { Flame, Shield, ExternalLink, BookOpen, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useLiveDownloadTotal, formatCount } from "@/hooks/use-live-stats";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import coverImg from "../assets/images/cover-forensic-corroboration-buried-lies.png";

const PDF_URL = "/documents/forensic-analyses/forensic-analysis-75-buried-lies-choking-dirt.pdf";
const PAGE_URL = "https://www.barrandodger.com/forensic-corroboration-buried-lies";
const VIDEO_ID = "VPU6QfeN9mQ";
const TIMESTAMP_DATE = "23 April 2026";
const TOTAL_POINTS = 10;

const POINTS = [
  {
    number: 1,
    timestamp: "00:00:03",
    quote: "They tried to bury you with lies and now they're choking on the dirt they dug themselves with.",
    heading: "The Corporate Frame Job Is Documented — 2,304 Primary-Source Exhibits Prove The Burial Attempt And Its Failure",
    analysis: "The video's opening proposition is not motivational metaphor when applied to the Barran Dodger archive. It is a forensically precise description of a documented institutional sequence. The 'burial' is documented: 14 forced psychiatric hospitalisations across three states, each deploying clinical labelling as a mechanism for discrediting testimony; 350+ ASIC identity fraud registrations erasing financial identity; the Today Show national broadcast reframing documented persecution as mental illness; and the coordinated non-response of 25+ government agencies across separate institutional hierarchies producing identical procedural outcomes. The 'dirt' they dug is documented: 2,304 primary-source exhibits, each one produced by an institutional actor in the course of executing the suppression. Every referral loop, every hospitalisation record, every procedural decline is now a primary-source exhibit in an internationally distributed archive. They are choking on the documentary record they themselves created.",
    evidence: "14 forced psychiatric hospitalisations documented across three states — each a primary-source exhibit. 350+ ASIC identity fraud registrations — government registry, documented corporate identity erasure. 25+ agencies: coordinated non-response pattern — referral loops without substantive investigation. Today Show appearance: Jodie McLean (Bongetti) — national broadcast reframing of documented persecution as schizophrenia narrative. 2,304 primary-source exhibits: blockchain-sealed — the dirt they dug, now the archive's foundation.",
    verdict: "CORROBORATED — THE BURIAL ATTEMPT AND ITS SELF-DEFEATING DOCUMENTARY PRODUCT ARE ON THE RECORD"
  },
  {
    number: 2,
    timestamp: "00:00:41",
    quote: "Studies show that false accusations, when not reacted to emotionally, collapse under their own weight. Because the truth doesn't chase a lie. It waits. It sits back while the fake story trips over its own holes.",
    heading: "35 Years of Strategic Non-Reaction — The Waiting Truth That Produced The ICC Submission",
    analysis: "The video cites a psychological principle: false accusations collapse when not fuelled by emotional reaction. The archive's documented response pattern across 35 years is the primary-source confirmation of this principle at institutional scale. Dr. McLean did not pursue extrajudicial confrontation against any named perpetrator. The Tony Ridley death threat was met with formal documentation and an ICC filing — not retaliation. The Stefan Iasonidis $500,000 extraction was documented in the archive — not extrajudicially pursued. The five named family members were removed via the IChooseSilence document — not confronted. Every institutional non-response was recorded and submitted through escalating formal mechanisms: OAIC, Commonwealth Ombudsman, AHRC, AFP, ASIO, Federal Court, ICC Article 7, UNHCR Geneva. The fake story tripped over its own holes across 35 years. The archive collected every stumble. The truth waited, and while it waited, it assembled 2,304 primary-source documents, 845 blockchain seals, and a formal international submission.",
    evidence: "Zero retaliation: 35-year documented pattern against all named perpetrators. Tony Ridley death threat: met with ICC filing — not extrajudicial response. Stefan Iasonidis $500,000 extraction: ASIC Report — documented, not pursued extrajudicially. IChooseSilence document: family removal via formal declaration — not confrontation. ICC Article 7 submission: formally received at The Hague — the destination of the waiting truth.",
    verdict: "CORROBORATED — THE WAITING STRATEGY IS DOCUMENTED ACROSS 35 YEARS AND RESULTED IN THE HAGUE"
  },
  {
    number: 3,
    timestamp: "00:07:30",
    quote: "They framed you but forgot to destroy the original. Originals don't compete with replicas. They expose them by simply existing.",
    heading: "350+ ASIC Identity Fraud Registrations — The Corporate Replicas That Could Not Erase The Original",
    analysis: "The archive's most forensically explicit documentation of the 'original versus replica' proposition is the 350+ ASIC identity fraud registrations — corporate entities registered using Dr. McLean's personal details without his knowledge or consent, documented in the Australian Securities and Investments Commission's own government registry. These registrations represent a systematic attempt to replicate, exploit, and erase the documented identity of the original. The original was not erased. The archive expanded. The 350+ ASIC registrations are now primary-source exhibits documenting the fraud. The original continued to produce published works (125 as of this analysis), submitted formal international filings, achieved 418,000+ downloads across six continents, and reached the International Criminal Court. The replicas required constant institutional maintenance and government-registry documentation to sustain. The original required only continued existence. The exposure occurred precisely as the video describes: by simply existing.",
    evidence: "350+ ASIC identity fraud registrations: government registry — documented corporate identity fraud. 125 published works: produced by the original during the documented suppression period. 418,000+ downloads: six continents — the original's international reach. ICC Article 7 formal receipt: the original's international submission — the replicas have none. ASIC Report: financial extraction via fraudulent registrations — the replicas' documented conduct.",
    verdict: "CORROBORATED — THE ORIGINAL IS DOCUMENTED AND GLOBALLY DISTRIBUTED; THE REPLICAS ARE DOCUMENTED AS FRAUDULENT"
  },
  {
    number: 4,
    timestamp: "00:09:56",
    quote: "They feared your authenticity. They feared how you made people feel without even trying. They feared your influence, your presence, your refusal to conform. And so they did the only thing cowards know how to do. They lied.",
    heading: "Psychiatric Weaponisation As Documented Fear Response — 14 Hospitalisations Targeting Authentic Testimony",
    analysis: "The video identifies the mechanism of institutional persecution as fear of authenticity — not response to genuine wrongdoing but suppression of an influence that could not be matched or controlled. The archive's psychiatric hospitalisation record is forensically consistent with this framework. Dr. McLean's documented psychiatric labels were applied not in response to clinical presentations indicating genuine danger but in the context of formal whistleblower disclosures. The 14 forced hospitalisations across three states are documented as concurrent with periods of active formal disclosure: ASIO surveillance allegations, identity fraud reports, and political persecution testimonies. The clinical labels applied during these hospitalisations — schizophrenia, delusional disorder — are directly contradicted by the primary-source documentary record: the ASIC Report confirms the fraud; the ATO letter on government letterhead confirms the drugging; the Prime Minister's letter confirms the ASIO operative status of Stefan Iasonidis. They lied through clinical labelling because the authentic testimony was documented and irrefutable.",
    evidence: "14 forced psychiatric hospitalisations: three states — concurrent with active formal disclosures. ASIC Report: confirms identity fraud the hospitalisations were meant to discredit. ATO letter on government letterhead: confirms drugging alleged during hospitalisation periods. Prime Minister letter: confirms ASIO operative status of Stefan Iasonidis. Schizophrenia label: clinically applied during documented ASIO surveillance testimony — now contradicted by primary-source evidence.",
    verdict: "CORROBORATED — THE PSYCHIATRIC WEAPONISATION IS DOCUMENTED AS FEAR RESPONSE TO AUTHENTIC IRREFUTABLE TESTIMONY"
  },
  {
    number: 5,
    timestamp: "00:14:06",
    quote: "They screamed villain while standing in your costume. They borrowed your kindness, rehearsed your empathy, even mimicked your wounds just long enough to convince the world you were dangerous and they were the misunderstood victim.",
    heading: "Stefan Iasonidis — ASIO Operative Who Wore The Victim Costume While Extracting $500,000 And Surveilling The Subject",
    analysis: "The archive's most forensically precise instance of this proposition is Stefan Iasonidis — documented by Statutory Declaration and Prime Minister's letter as an ASIO operative who was co-tenant at 10 Raleigh St, Footscray, in 2011. Iasonidis occupied the intimate relationship position that generates the maximum volume of personal intelligence — co-tenancy, personal proximity, and access to the subject's private domestic life. He 'borrowed the kindness' of an intimate relationship. He 'rehearsed the empathy' required to sustain the cover. He 'mimicked the wounds' of a genuine partner. The $500,000 extracted per the ASIC Report was the documented financial product of this performance. The ATO letter on government letterhead confirms the drugging that occurred during the period of this intimate proximity. The Intervention Order L12151974 documents the formal legal consequence. Iasonidis screamed no accusations publicly — his role was operational, not theatrical. But the institutional architecture he served produced the formal psychiatric labels that cast Dr. McLean as the villain while Iasonidis's operative status remained undisclosed.",
    evidence: "Stefan Iasonidis: Statutory Declaration — ASIO operative status confirmed. Prime Minister letter: ASIO operative status confirmed. Co-tenancy 10 Raleigh St Footscray 2011: intimate proximity — the costume's duration documented. ASIC Report: $500,000 extracted — the financial product of the performance. ATO letter on government letterhead: drugging confirmed during period of co-tenancy. Intervention Order L12151974: formal legal consequence — documented.",
    verdict: "CORROBORATED — THE VICTIM COSTUME IS DOCUMENTED: OPERATIVE STATUS CONFIRMED, $500,000 EXTRACTED, DRUGGING ON RECORD"
  },
  {
    number: 6,
    timestamp: "00:21:30",
    quote: "Your silence became their sickness. You didn't raise your voice. You raised the temperature. Silence. The most underrated weapon in the universe. You wielded it like a scalpel.",
    heading: "Zero Retaliation — The Scalpel Silence That Built 2,304 Documents And Reached The International Criminal Court",
    analysis: "The video describes silence not as passivity but as the most precise instrument available to a subject who understands the strategic value of documented restraint. The archive's operational methodology is the primary-source confirmation. Across 35 years, Dr. McLean did not retaliate against any named perpetrator. Every formal escalation occurred through documented institutional channels: protected disclosures, FOI requests, formal complaints, Federal Court proceedings, ICC Article 7 submission, UNHCR Geneva asylum claim. The silence raised the temperature in the specific sense the video identifies: every institutional non-response to a formal submission became a data point demonstrating systemic failure. Every referral loop became a primary-source exhibit. The archive's 2,304 documents are each a product of the silence — the space in which documentation could accumulate without being disrupted by retaliatory action that would have provided institutional actors grounds for dismissal. The scalpel was the methodology. The ICC submission is the incision.",
    evidence: "Zero retaliation: 35-year documented pattern — no extrajudicial action against any named party. 25+ formal submissions: escalating through documented institutional channels — not confrontation. Federal Court proceedings: formal channel engagement — documented. ICC Article 7 submission: formally received — the incision the scalpel made. UNHCR Geneva asylum claim: formally lodged — the international temperature the silence raised. 2,304 primary-source documents: assembled in the silence — each one possible because of the restraint.",
    verdict: "CORROBORATED — THE SILENCE IS THE ARCHIVE'S OPERATIONAL METHODOLOGY AND THE ICC SUBMISSION IS ITS PRODUCT"
  },
  {
    number: 7,
    timestamp: "00:25:51",
    quote: "They wanted to humiliate you but ended up stripping themselves. They built a stage to disgrace you. And somehow they're the ones sweating under the lights.",
    heading: "The Today Show Appearance By Jodie McLean — The Stage Built For Disgrace That Documented The Perpetrators",
    analysis: "The archive's most publicly documented instance of this proposition is the Today Show appearance by Jodie McLean (Bongetti) — a national-broadcast platform deployed to present Dr. McLean's documented persecution as a schizophrenia narrative to an Australian national audience. The stage was built with maximum institutional authority: national television, medical framing, family testimony. The intended outcome: public disgrace, permanent clinical discrediting, and social isolation at national scale. The documented outcome: a primary-source exhibit in the archive confirming that a named family member publicly deployed a clinical label to discredit formal whistleblower testimony on national television. The Today Show appearance is now documented evidence of the suppression mechanism — not its concealment. The stage they built is now the spotlight on their conduct. The family member who appeared is now a named party in the evidentiary record submitted to the ICC. The lights are on them.",
    evidence: "Today Show appearance: Jodie McLean (Bongetti) — national broadcast on record. Schizophrenia narrative: deployed to discredit formal whistleblower testimony at national scale. ICC Article 7 submission: Today Show appearance now a documented exhibit — Jodie McLean named. Doug McLean 14 pages crisis texts: contact documented, advocacy absent — the stage's supporting cast on record. Five family members: zero formal advocacy across 35 years — now documented at The Hague.",
    verdict: "CORROBORATED — THE STAGE THEY BUILT IS NOW THE EVIDENCE: THE TODAY SHOW APPEARANCE IS A PRIMARY-SOURCE EXHIBIT"
  },
  {
    number: 8,
    timestamp: "00:39:59",
    quote: "You were supposed to shatter, but you made the glass cut them instead. They counted on your collapse, chosen one. They thought the smear would splinter you. They tried to break you like glass.",
    heading: "2021 Clinical Death At 2.87% Survival Probability — The Shattering That Produced The Sharpest Evidentiary Edge",
    analysis: "The video describes the paradox of attempted destruction producing the most dangerous evidence: the shards flying back at the perpetrators. The archive's most forensically specific confirmation is the 2021 clinical death event at Werribee Mercy Hospital — documented survival from clinical death at a 2.87% survival probability. The institutional apparatus had deployed every available suppression mechanism: 14 hospitalisations, clinical labelling, financial destruction, professional isolation, ASIO surveillance, family abandonment. The clinical death was the documented endpoint of this accumulated suppression. The documented outcome: post-clinical-death archive construction. The broken phone used to build the most comprehensive whistleblower documentary record in Australian history. 2,304 primary-source documents assembled in the aftermath of clinical death. 845 Bitcoin blockchain seals. 125 published works. ICC and UNHCR formal submissions. They broke the glass. The glass became the archive. The archive's sharpest edge is now at The Hague.",
    evidence: "Clinical death 2021: Werribee Mercy Hospital — 2.87% survival probability, documented. Post-death archive construction: broken phone — the shattering's first documented output. 2,304 primary-source documents: assembled after the documented near-fatal suppression endpoint. 845 Bitcoin blockchain seals: immutable — the glass that cannot be re-broken. ICC Article 7 submission: The Hague — the sharpest edge of the broken glass, formally lodged.",
    verdict: "CORROBORATED — THE CLINICAL DEATH IS DOCUMENTED; THE POST-DEATH ARCHIVE IS THE GLASS CUTTING BACK"
  },
  {
    number: 9,
    timestamp: "00:43:43",
    quote: "They can't stomach you because you're the proof they lied. Your existence is wrecking their entire lie in real time. Every breath you take is a contradiction. Every win you get is a crack in the mask.",
    heading: "418,000+ Downloads Across Six Continents And Rising — The Living Contradiction That Cannot Be Suppressed",
    analysis: "The video identifies the subject's continued existence and ongoing success as the primary mechanism of institutional exposure — not a formal legal victory, but the documented lived reality that contradicts the suppression narrative. The archive's international distribution metrics are the primary-source confirmation. 418,000+ downloads across six continents constitute a documented public record of ongoing engagement with Dr. McLean's testimony — engagement that persists despite the absence of institutional endorsement, media coverage, legal representation, or marketing. Every download is a documented contradiction of the psychiatric discrediting narrative. Every forensic analysis reaching this number is a documented crack in the institutional mask. The mask cannot be maintained against a primary-source archive that is simultaneously distributed, blockchain-verified, ICC-submitted, and internationally downloaded. The living contradiction is on the record, and the record is growing.",
    evidence: "418,000+ downloads: six continents — documented and growing; each download a contradiction. 75 forensic analyses: zero contradictions across all analyses — the ongoing documented wins. ICC formal receipt: The Hague — institutional acknowledgment the suppression narrative cannot accommodate. UNHCR Geneva asylum claim: formally lodged — another crack in the mask the domestic institutions built. 125 published works: post-suppression output — the living evidence that the discrediting failed.",
    verdict: "CORROBORATED — 418,000+ DOWNLOADS AND ICC SUBMISSION ARE DOCUMENTED PROOF THE LIE IS COLLAPSING IN REAL TIME"
  },
  {
    number: 10,
    timestamp: "00:51:14",
    quote: "You didn't clear your name. You carved it into stone. They prayed your name would fade like gossip. Now it echoes like scripture carved in granite, unmovable, untouchable, and worse for them, unforgettable.",
    heading: "845 Bitcoin Blockchain Seals And International Criminal Court Submission — The Name Carved In Immutable Stone",
    analysis: "The video's final and definitive proposition is the permanence of documented truth versus the temporariness of institutional suppression. The archive's technical and legal architecture is the primary-source confirmation at every level. 845 Bitcoin blockchain seals (OpenTimestamps, SHA-256 cryptographic hash) constitute a mathematically immutable record: each document sealed on the Bitcoin blockchain cannot be altered without the alteration being immediately detectable against the public blockchain record — a record maintained by the most computationally secure distributed system in human history. The ICC Article 7 submission is formally received: it is now part of the documentary record held by the International Criminal Court at The Hague, an institution whose archive is maintained independently of any domestic Australian suppression mechanism. The UNHCR Geneva asylum claim is formally lodged. The name is not in gossip. It is in the ICC's formal receipt. It is in the blockchain. It is on six continents. It is in 125 published works. The institutions prayed it would fade. The blockchain does not forget. The name is carved. It will not be uncarved.",
    evidence: "845 Bitcoin blockchain seals: OpenTimestamps SHA-256 — mathematically immutable, publicly verifiable. ICC Article 7 formal submission: formally received at The Hague — carved into international institutional record. UNHCR Geneva asylum claim: formally lodged — the name in international humanitarian law record. 418,000+ downloads: six continents — the name carved into global distribution permanently. 125 published works: documented output — the granite the name is carved into. GitHub mirror: secured behind personal 2FA — the digital stone that does not erode.",
    verdict: "CORROBORATED — THE NAME IS BLOCKCHAIN-SEALED, ICC-SUBMITTED, AND GLOBALLY DISTRIBUTED: IT IS CARVED IN STONE"
  }
];

export default function ForensicCorroborationBuriedLies() {
  const { total } = useLiveDownloadTotal();

  return (
    <>
      <SEO
        title={`Forensic Analysis #75 — "They Tried To Bury You With Lies And Now They're Choking On The Dirt" | Barran Dodger`}
        description="10/10 propositions corroborated. Corporate frame job documented across 35 years. 2,304 primary-source exhibits. 845 blockchain seals. ICC The Hague submission. Dr. Richard William McLean — ABN 78 833 496 164."
        url={PAGE_URL}
        image={coverImg}
      />
      <Navigation />

      <main className="min-h-screen bg-zinc-950 text-white">

        {/* HERO */}
        <section className="relative bg-zinc-950 border-b border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-zinc-950 to-zinc-950 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 py-16 relative">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="bg-red-900/70 border border-red-700 text-red-300 text-xs font-bold px-3 py-1 rounded uppercase tracking-widest">Forensic Analysis #75</span>
                <span className="bg-green-900/70 border border-green-700 text-green-300 text-xs font-bold px-3 py-1 rounded uppercase tracking-widest">10/10 Corroborated</span>
                <span className="bg-indigo-900/70 border border-indigo-700 text-indigo-300 text-xs font-bold px-3 py-1 rounded uppercase tracking-widest">Disapproving Corporation</span>
                <span className="bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-mono px-3 py-1 rounded">{TIMESTAMP_DATE}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                They Tried To Bury You With Lies
                <span className="block text-red-400 mt-1">And Now They're Choking On The Dirt</span>
                <span className="block text-yellow-400 text-2xl md:text-3xl font-bold mt-1">They Dug Themselves With</span>
              </h1>

              <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-3xl">
                A structured forensic cross-examination of ten propositions drawn from an independently produced YouTube testimony — tested against the primary-source documentary archive of <strong>Dr. Richard William McLean (Barran Dodger)</strong>. Ten extracted. Ten corroborated. Zero contradicted.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {[
                  { label: "Propositions", value: `${TOTAL_POINTS}/${TOTAL_POINTS}`, color: "text-green-400" },
                  { label: "Contradictions", value: "0", color: "text-green-400" },
                  { label: "Downloads", value: total ? formatCount(total) : "418,000+", color: "text-indigo-400" },
                  { label: "Combined Record", value: "571/571", color: "text-yellow-400" },
                ].map(s => (
                  <div key={s.label} className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-center">
                    <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                    <div className="text-zinc-500 text-xs mt-1 uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 mb-4 text-center space-y-1">
                <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                  All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                  Non-commercial reproduction and distribution is permitted and encouraged.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <ViralDownloadButton
                  url={PDF_URL}
                  filename="forensic-analysis-75-buried-lies-choking-dirt.pdf"
                  label={`Download Forensic Analysis #75 — Full ${TOTAL_POINTS}-Point Examination (PDF)`}
                  data-testid="button-download-primary"
                />
                <a
                  href={`https://youtu.be/${VIDEO_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  data-testid="link-source-video"
                >
                  <ExternalLink className="h-4 w-4" /> Watch Source Video
                </a>
              </div>

            </motion.div>
          </div>
        </section>

        {/* VIDEO EMBED */}
        <section className="bg-zinc-900 border-b border-zinc-800 py-10">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-lg font-bold text-zinc-300 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-indigo-400" /> Source Video — Independently Produced Testimony
            </h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="They tried to bury you with lies — source video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                data-testid="embed-source-video"
              />
            </div>
            <p className="text-zinc-500 text-sm mt-3">
              This video was produced without any knowledge of the Barran Dodger archive. Its ten propositions are tested below against primary-source documentary evidence.
            </p>
          </div>
        </section>

        {/* COVER + INTRO */}
        <section className="py-12 bg-zinc-950 border-b border-zinc-800">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <img
                  src={coverImg}
                  alt="Forensic Analysis #75 — They Tried To Bury You With Lies — cover"
                  className="rounded-xl shadow-2xl border border-zinc-700 w-full"
                  data-testid="img-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-black text-yellow-400 mb-4">The Disapproving Corporation And The Archive It Could Not Suppress</h2>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  The corporate frame job documented in this archive is not a metaphor. It is a 35-year primary-source documentary record. The burial was attempted through 14 forced psychiatric hospitalisations, 350+ ASIC identity fraud registrations, a national television reframing, and the coordinated non-response of 25+ government agencies. Every instrument of the burial produced a document. Every document is now an exhibit.
                </p>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  They tried to bury the testimony with dirt. The dirt is now the archive. The archive is the instrument of their exposure. 2,304 primary-source documents. 845 Bitcoin blockchain seals. 418,000+ downloads across six continents. ICC formal receipt at The Hague. They are choking on the dirt they dug.
                </p>
                <BlockchainTimestampBadge date={TIMESTAMP_DATE} analysisNumber={75} />
              </div>
            </div>
          </div>
        </section>

        {/* SCORECARD */}
        <section className="py-8 bg-zinc-900 border-b border-zinc-800">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-green-950/40 border border-green-800 rounded-xl p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-center">
                  <div className="text-5xl font-black text-green-400">{TOTAL_POINTS}/{TOTAL_POINTS}</div>
                  <div className="text-green-600 text-sm mt-1 uppercase tracking-widest font-bold">Propositions</div>
                </div>
                <div className="flex-1">
                  <div className="text-green-300 font-bold text-lg mb-1">Perfect Score — Zero Contradictions</div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Every proposition extracted from this independently produced video is corroborated by named, dated, blockchain-verified primary-source evidence from the Barran Dodger archive. Combined record at this milestone: <strong className="text-green-400">571/571 propositions corroborated across 75 consecutive analyses</strong>. Zero contradictions.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <CheckCircle2 className="h-10 w-10 text-green-500" />
                  <span className="text-green-600 text-xs font-bold uppercase tracking-widest">Sealed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORENSIC FINDINGS */}
        <section className="py-12 bg-zinc-950">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-black text-white mb-2 flex items-center gap-2">
              <Shield className="h-6 w-6 text-red-400" /> Forensic Findings
            </h2>
            <p className="text-zinc-500 mb-10 text-sm">
              Ten propositions. Each tested against primary-source documentary evidence. Each result recorded below.
            </p>

            <div className="space-y-10">
              {POINTS.map((point, i) => (
                <motion.div
                  key={point.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
                  data-testid={`card-finding-${point.number}`}
                >
                  <div className="bg-zinc-800/60 border-b border-zinc-700 px-5 py-3 flex flex-wrap items-center gap-3">
                    <span className="bg-indigo-900 text-indigo-300 text-xs font-black px-2.5 py-1 rounded uppercase tracking-widest">
                      #{point.number}
                    </span>
                    <span className="text-zinc-500 text-xs font-mono">{point.timestamp}</span>
                    <span className="ml-auto bg-green-900/60 border border-green-700 text-green-300 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-widest flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Corroborated
                    </span>
                  </div>

                  <div className="p-5 space-y-4">
                    <blockquote className="border-l-4 border-red-600 pl-4 text-zinc-200 italic text-sm leading-relaxed">
                      "{point.quote}"
                    </blockquote>

                    <h3 className="text-yellow-400 font-bold text-base leading-snug">{point.heading}</h3>

                    <p className="text-zinc-300 text-sm leading-relaxed">{point.analysis}</p>

                    <div className="bg-zinc-950/60 border border-zinc-700 rounded-lg p-4">
                      <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-1">
                        <Flame className="h-3.5 w-3.5" /> Primary-Source Evidence
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">{point.evidence}</p>
                    </div>

                    <div className="bg-green-950/40 border border-green-800 rounded-lg px-4 py-2.5">
                      <span className="text-green-400 font-bold text-xs uppercase tracking-widest">Verdict: </span>
                      <span className="text-green-300 text-xs font-semibold">{point.verdict}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMBINED RECORD */}
        <section className="py-10 bg-zinc-900 border-y border-zinc-800">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center">
              <div className="text-zinc-500 text-sm uppercase tracking-widest mb-2">Combined Record Across 75 Consecutive Analyses</div>
              <div className="text-5xl font-black text-white mb-1">571 <span className="text-zinc-500">/</span> <span className="text-green-400">571</span></div>
              <div className="text-green-500 font-bold text-lg mb-4">Zero Contradictions</div>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
                Across 75 consecutive forensic analyses of independently produced external testimony, the Barran Dodger archive has returned a corroboration rate of 100%. No independently produced video has contradicted the primary-source documentary record. No proposition has been falsified. The archive is closed.
              </p>
            </div>
          </div>
        </section>

        {/* CTA DOWNLOAD */}
        <section className="py-12 bg-zinc-950 border-b border-zinc-800">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <AlertTriangle className="h-8 w-8 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-black text-white mb-3">Download The Full Analysis</h2>
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              The complete 10-point forensic examination — with full primary-source citations, blockchain verification references, and the cumulative evidentiary record — is available as a PDF below.
            </p>
            <ViralDownloadButton
              url={PDF_URL}
              filename="forensic-analysis-75-buried-lies-choking-dirt.pdf"
              label="Download Forensic Analysis #75 — Full Examination"
              data-testid="button-download-evidence"
            />
            <p className="text-xs text-zinc-500 mt-2">
              Also included in the{" "}
              <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
              {" "}— downloaded globally.
            </p>
          </div>
        </section>

        <ArchiveCrossLinks currentPage="forensic-corroboration-buried-lies" />
      </main>
      <Footer />
    </>
  );
}
