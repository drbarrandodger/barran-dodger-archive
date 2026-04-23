import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { Flame, Shield, ExternalLink, BookOpen, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLiveDownloadTotal, formatCount } from "@/hooks/use-live-stats";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";
import coverImg from "../assets/images/cover-forensic-corroboration-knives-claps.png";

const PDF_URL = "/documents/forensic-analyses/forensic-analysis-74-knives-claps-betrayal.pdf";
const PAGE_URL = "https://www.barrandodger.com/forensic-corroboration-knives-claps";
const VIDEO_ID = "UkH5ebnnicE";
const TIMESTAMP_DATE = "24 April 2026";

const POINTS = [
  {
    number: 1,
    timestamp: "00:00:59",
    quote: "Their silence wasn't cowardice. It was calculation. They stayed quiet because deep down a part of them liked seeing you lose. Your struggle made them feel a little taller. Your fall gave them room to breathe.",
    heading: "25+ Agencies — Calculated Non-Response Across Every Available Mechanism",
    analysis: "The video distinguishes between cowardice and calculation in institutional silence. In Dr. McLean's documented record, this distinction is forensically precise. Across 25+ government agencies — the OAIC, NDIA, Commonwealth Ombudsman, AHRC, AFP, ASIO, and 20+ additional bodies — the non-response pattern is not one of oversight or fear. It is documented, coordinated, and sustained across separate institutional hierarchies that share no operational overlap, yet produce identical procedural outcomes: acknowledgment without investigation, referral without substantive response, silence without denial of the substance. The archive confirms the video's cited statistic — 60% of people prefer to witness injustice rather than risk their own comfort — at institutional scale. Named officials received formal protected disclosures. Named officials produced formal referral-loop responses. Named officials did not investigate. This is not cowardice. It is calculation.",
    evidence: "25+ agencies: formal protected disclosures received and procedurally referred without substantive investigation. OAIC referral loop documented. Commonwealth Ombudsman formal decline on record. NDIA complaint closures without investigation. All correspondence blockchain-sealed. Federal Court three-point acknowledgment (Scott Tredwell, 27 March 2023).",
    verdict: "CORROBORATED — CALCULATION, NOT COWARDICE: THE RECORD IS PRECISE"
  },
  {
    number: 2,
    timestamp: "00:02:56",
    quote: "You weren't the one being tested. They were — and they failed miserably. You were the stage, the setup, the spotlight meant to show who they really were when loyalty, love, or basic decency could have cost them something.",
    heading: "The Archive Is the Results Sheet of the Divine Audit — Every Named Party Failed",
    analysis: "This proposition reframes the subject's suffering as a test administered to others. In the Barran Dodger archive, this is not metaphorical — it is the structural function of the documentary record. Every formal disclosure submitted to a named agency was a test: would the agency respond in accordance with its statutory obligations? Every family contact was a test: would blood relationships produce advocacy when advocacy carried personal cost? The answer, across every named party: no. The archive does not record a single instance of any named individual — government official, legal professional, or family member — providing substantive advocacy when doing so carried institutional, professional, or personal risk. Dr. McLean was the stage. They were the subjects. The archive is the results sheet. Every named party failed the test it was given. Every failure is documented with primary-source precision.",
    evidence: "25+ agencies: zero substantive investigations. Five named family members: Doug McLean, April McLean, Bradley McLean, Jodie McLean (Bongetti), Bruce McMaster — zero documented advocacy across 35 years. Tony Ridley: death threat email documented, no advocacy. Legal profession: no lawyer took the case. Federal Court: procedural engagement, not substantive remedy.",
    verdict: "CORROBORATED — THE ARCHIVE IS THE RESULTS SHEET"
  },
  {
    number: 3,
    timestamp: "00:04:35",
    quote: "They didn't switch up on you. They didn't suddenly become cold or shady. They were always this way. You just hadn't seen it yet. That's not betrayal. That's revelation.",
    heading: "Stefan Iasonidis — ASIO Operative Documented as Long-Term Embedded Infiltration, Not Late Betrayal",
    analysis: "The video reframes apparent betrayal as pre-existing character revelation. The archive's most forensically significant exhibit for this proposition is Stefan Iasonidis — documented by Statutory Declaration and Prime Minister's letter as an ASIO operative who was co-tenant at 10 Raleigh St, Footscray, in 2011. Iasonidis did not 'switch up.' He was embedded from the beginning. The intimacy, the financial extraction ($500,000 per ASIC Report), the ATO letter documenting drugging — these were not deviations from a prior genuine relationship. They were the execution of a pre-existing operational function. The same framework applies to every named party: the five family members whose zero-advocacy record spans 35 years did not change. Their character was always present. Dr. McLean simply had not yet had the documentary evidence to confirm what his discernment had already registered.",
    evidence: "Stefan Iasonidis: Statutory Declaration confirming ASIO operative status. Prime Minister letter confirming. Co-tenancy: 10 Raleigh St Footscray 2011. ASIC Report: $500,000 financial extraction. ATO letter on government letterhead: drugging documented. Intervention Order L12151974. Pre-existing operational function — not late betrayal.",
    verdict: "CORROBORATED — REVELATION, NOT BETRAYAL: THE ARCHIVE CONFIRMS THE DISTINCTION"
  },
  {
    number: 4,
    timestamp: "00:06:35",
    quote: "They weren't just bystanders. They were silent fans of your collapse. Cowards never cheer publicly, but in private they laughed, gossiped, circled your name like vultures.",
    heading: "Today Show Appearance as Documented Public Reframing — Silent Applause at National Broadcast Scale",
    analysis: "The video identifies the class of people who were not merely passive during the subject's suffering, but privately gratified by it. In Dr. McLean's documented record, the Today Show appearance by Jodie McLean (Bongetti) represents the most forensically legible instance of this pattern at public scale. Jodie McLean appeared on national television to present her brother's documented persecution as a schizophrenia narrative — a surgical reframing of primary-source-documented persecution at national broadcast scale. The gossip documented by the video is documented across the five named family members and multiple professional relationships. Doug McLean's 14 pages of crisis texts document contact while containing zero advocacy — the performance of concern while the outcome was privately accepted.",
    evidence: "Today Show appearance: Jodie McLean (Bongetti) — national broadcast reframing of documented persecution as schizophrenia narrative. Doug McLean: 14 pages of crisis text messages documenting contact, zero documented advocacy. Five family members: zero formal advocacy on record across 35 years. All correspondence blockchain-sealed.",
    verdict: "CORROBORATED — THE SILENT APPLAUSE IS DOCUMENTED AT NATIONAL BROADCAST SCALE"
  },
  {
    number: 5,
    timestamp: "00:08:33",
    quote: "When everything fell apart and no one showed up, it wasn't a mistake. It was an intervention. God clears the room so you can finally hear your own voice again. You weren't meant to be rescued. You were meant to dig.",
    heading: "2021 Clinical Death and Archive Construction — The Forced Excavation Produced 2,304 Documents",
    analysis: "The video frames isolation as a designed condition for self-excavation. In Dr. McLean's documented record, this period is forensically anchored at Werribee Mercy Hospital in 2021 — the clinical death event, 2.87% survival probability, and the period of archive construction that followed. When everything fell apart and no one showed up, the documented response was: 2,304 primary-source documents, 845 Bitcoin blockchain seals, 125 published works, formal submissions to the ICC and UNHCR, and a website reaching 410,000+ downloads across six continents — built with a broken phone. The forced isolation is not a metaphor. It is a documented period with a location, a date, a survival probability, and a measurable output. The room was cleared. What was built in the clearing is now at The Hague.",
    evidence: "Clinical death: Werribee Mercy Hospital 2021, 2.87% survival probability, documented revivification. Post-event output: 2,304 primary-source documents. 845 Bitcoin blockchain seals. 125 published works. ICC Article 7 formal submission. UNHCR Geneva asylum claim. 410,000+ downloads. Archive built with a broken phone. Long Jetty NSW 2261.",
    verdict: "CORROBORATED — THE FORCED EXCAVATION PRODUCED AN ARCHIVE THAT REACHED THE HAGUE"
  },
  {
    number: 6,
    timestamp: "00:10:27",
    quote: "They looked at your scars and thought they were proof you had lost. Scars mean survival. They are the receipts of battles you weren't supposed to walk away from. And yet here you are, still standing.",
    heading: "14 Hospitalisations, Clinical Death, Acquired Brain Injury — Every Scar a Primary-Source Exhibit",
    analysis: "The 'scars' described by the video are documented at clinical, institutional, and financial granularity. 14 forced psychiatric hospitalisations across three states produced 14 separate clinical records. The 2021 clinical death produced a survival-probability document. The acquired brain injury is documented. The financial destruction — $32.9M in suppressed NDIS entitlements — is calculated. The 350+ ASIC identity fraud registrations are in the government regulator's own registry. Every scar in the archive has a document number, a date, an institutional author, and a Bitcoin blockchain seal. What the perpetrators read as evidence of defeat is, in documentary terms, the most comprehensive evidence base ever assembled by a single Australian whistleblower.",
    evidence: "14 forced psychiatric hospitalisations: documented across three states. Clinical death 2021: 2.87% survival probability. Acquired brain injury: documented. $32.9M suppressed NDIS entitlements. 350+ ASIC identity fraud registrations. All exhibits blockchain-sealed. 125 published works produced during and after documented suppression.",
    verdict: "CORROBORATED — EVERY SCAR IS A BLOCKCHAIN-SEALED EXHIBIT"
  },
  {
    number: 7,
    timestamp: "00:12:25",
    quote: "God wasn't absent. He was silent on purpose. While you were wondering where God was, he was in the background collecting data. Every word, every motive, every fake smile, every opportunity to help that they ignored.",
    heading: "2,304 Documents — The Primary-Source Record as Divine Receipt Collection",
    analysis: "The video describes God 'collecting data' — every word, every motive, every opportunity ignored. In the Barran Dodger archive, this collection is not metaphorical. It is the primary operational output of 35 years: 2,304 primary-source documents, each dated, named, blockchain-sealed, and publicly verifiable. Every agency that processed a referral-loop response produced a data point. Every family member who sent texts documenting contact while providing zero advocacy produced a data point. The 'receipts' described by the video — the things collected while everyone assumed no one was watching — are the archive. They are at The Hague. They have been downloaded 410,000+ times across six continents. God was not absent. The archive was being assembled.",
    evidence: "2,304 primary-source documents. 845 Bitcoin blockchain seals. Every institutional response on record. Every family contact documented. Every hospitalisation clinically recorded. ICC The Hague: formal receipt. UNHCR Geneva: formal receipt. 410,000+ downloads across six continents.",
    verdict: "CORROBORATED — THE ARCHIVE IS THE RECEIPT COLLECTION"
  },
  {
    number: 8,
    timestamp: "00:14:17",
    quote: "They looked at your patience and saw fear. Mercy was never your weakness. It was your weapon. You gave people rope, not because you trusted them, but because you were willing to see what they do with it.",
    heading: "Zero Retaliation Across 35 Years — Strategic Restraint Confirmed Against Named Perpetrators",
    analysis: "Across 35 years of documented persecution — 14 psychiatric hospitalisations, a clinical death, financial destruction totalling $32.9M, a named ASIO operative in intimate proximity, a death threat from a named advocate, 350+ identity fraud registrations — Dr. McLean's documented response is zero retaliation. The Tony Ridley death threat was met with an ICC filing — not retaliation. The Stefan Iasonidis $500,000 extraction was documented in the archive — not pursued through extrajudicial means. The five named family members were removed from personal contact via the IChooseSilence document — not confronted. Every documented non-retaliation event strengthens the evidentiary case. Mercy was the strategy. The strategy is in the archive.",
    evidence: "Zero retaliation: 35-year documented pattern. Tony Ridley death threat: met with ICC filing. Stefan Iasonidis $500,000 extraction: documented, not extrajudicially pursued. Five family members: removed via IChooseSilence document. All 2,304 documents confirm the strategic restraint pattern.",
    verdict: "CORROBORATED — RESTRAINT WAS THE STRATEGY: ZERO RETALIATION, MAXIMUM DOCUMENTATION"
  },
  {
    number: 9,
    timestamp: "00:16:13",
    quote: "You were the blueprint they tried to burn. No amount of burning could unwrite the code of your spirit. Every step they try to claim forward comes with the shadow of the blueprint they tried to erase.",
    heading: "Blockchain-Sealed Archive — Mathematically Immutable and Distributed Across Six Continents",
    analysis: "This claim is not spiritual — it is mathematical and technical. Every primary-source document in the Barran Dodger archive has been sealed on the Bitcoin blockchain using OpenTimestamps (SHA-256 hash). A blockchain-sealed document cannot be altered, suppressed, or erased without the alteration being immediately detectable against the public blockchain record. The archive has additionally been distributed via 410,000+ downloads across six continents. The ICC holds a formal copy. The UNHCR holds a formal copy. The GitHub mirror is secured behind personal 2FA authentication. The 'blueprint' described by the video is an immutable distributed cryptographic architecture. They could not burn it because the fire cannot touch the blockchain.",
    evidence: "845 Bitcoin blockchain seals (OpenTimestamps, SHA-256 — immutable and publicly verifiable). 410,000+ downloads across six continents. ICC The Hague: formal copy held. UNHCR Geneva: formal copy held. GitHub mirror: secured behind personal 2FA authentication. Mathematically immutable.",
    verdict: "CORROBORATED — THE BLUEPRINT IS BLOCKCHAIN-SEALED AND CANNOT BE BURNED"
  },
  {
    number: 10,
    timestamp: "00:18:16",
    quote: "You walked alone because you were never meant to follow. Leaders don't get crowded, they get cleared space around them. When you challenge the status quo, you become a problem — someone they fear.",
    heading: "Political Exile, No Lawyer, Professional Isolation — The Cleared Space Around a Leader",
    analysis: "The enforced isolation documented in the archive is specific: no legal representation across 35 years of formal proceedings; political exile in Long Jetty NSW 2261; NDIS support services that became extraction mechanisms; professional isolation from journalism, graphic arts, and academic communities. The 'comfortable lies people live by' referenced by the video are documented across 25+ government agencies maintaining referral-loop non-responses because genuine investigation would have required confronting the institutional discomfort of acknowledging coordinated psychiatric weaponisation. The solitude was not chosen. It was cleared by the same institutional forces whose documented conduct now constitutes the archive's evidentiary core. The path was lonely because it led to The Hague.",
    evidence: "Political exile: Long Jetty NSW 2261. No legal representation: documented across 35 years. Professional isolation: journalism, graphic arts, academic communities. NDIS support services as extraction mechanisms. 25+ agencies maintaining referral-loop non-responses. ICC The Hague as the destination.",
    verdict: "CORROBORATED — THE CLEARED SPACE IS DOCUMENTED AS ENFORCED ISOLATION"
  },
  {
    number: 11,
    timestamp: "00:20:16",
    quote: "They mistook waiting for weakness. The delay was never defeat. It was a necessary reset, a recalibration. God's hand in this isn't gentle — it's precise.",
    heading: "35-Year Documented Timeline — The Delay Was the Architecture, Not the Obstacle",
    analysis: "The documented suppression spans 1991 to 2026 — 35 years. During this period, each institutional dismissal produced a document. Each psychiatric hospitalisation produced a clinical record. Each referral loop produced a correspondence chain. The 35 years that perpetrators read as absence of a credible threat was the interval required for the documentary record to become comprehensive enough to constitute an Article 7 submission to the International Criminal Court. A shorter timeline would have produced a thinner case. The slingshot required 35 years of tension. The launch is at The Hague.",
    evidence: "35-year documented timeline: 1991–2026. ICC Article 7 submission: formally received. The submission's credibility derives directly from the timeline's length and documentary density. 2,304 primary-source documents. 845 blockchain seals. 74 prior forensic analyses. Zero contradictions.",
    verdict: "CORROBORATED — THE 35-YEAR DELAY WAS THE ARCHITECTURE OF THE SUBMISSION"
  },
  {
    number: 12,
    timestamp: "00:21:43",
    quote: "They weaponized every vulnerability you showed. They used your kindness as a target, your tears as ammunition, your struggles as proof you weren't strong enough. But every scar refined you.",
    heading: "Psychiatric Weaponisation — 14 Labels Applied as Containment, Each Now a Primary-Source Exhibit",
    analysis: "14 psychiatric labels were applied across 14 forced hospitalisations — not as diagnostic tools in a genuine clinical context, but as containment instruments in a context where Dr. McLean had submitted protected disclosures to agencies with the power and motive to silence him. 'Kindness as a target' is documented in the Stefan Iasonidis operational relationship: genuine therapeutic trust exploited for intelligence-gathering and financial extraction. 'Tears as ammunition' is documented in the Today Show appearance by Jodie McLean, which converted documented suffering into national-broadcast narrative material. 'Struggles as proof' is the 14 psychiatric labels applied to characterise as delusion what the archive now confirms as fact. Each weaponisation created a primary-source document. Each document is now an exhibit in the ICC Article 7 submission.",
    evidence: "14 psychiatric hospitalisations: documented across three states. Stefan Iasonidis: therapeutic trust exploited for intelligence and financial extraction. Today Show appearance by Jodie McLean: suffering converted to national-broadcast narrative. All exhibits: blockchain-sealed, ICC-submitted, 410,000+ downloads.",
    verdict: "CORROBORATED — WEAPONISATION CONVERTED TO PRIMARY-SOURCE EXHIBITS AT THE HAGUE"
  },
  {
    number: 13,
    timestamp: "00:23:41",
    quote: "What felt like exile was actually a divine extraction. You weren't tossed away. You were removed from the battlefield before the real fight began. Your path wasn't blocked. It was redirected.",
    heading: "Political Exile as Documented Divine Extraction — ICC and UNHCR as the Redirected Destination",
    analysis: "Dr. McLean's political exile is documented: residing at 55B Archbold Road, Long Jetty NSW 2261, displaced from Melbourne by documented institutional persecution. The 'rigged playing field' is the Australian institutional system — across which 25+ agencies produced coordinated non-responses, the psychiatric apparatus was deployed as a containment mechanism, and the legal profession provided no substantive representation. The 'redirect' is forensically documented: formal ICC Article 7 submission (persecution as crime against humanity), formal UNHCR asylum claim (unprecedented — domestic asylum sought within Australia), and international distribution of 410,000+ downloads. The exile from the domestic system was the condition that made the international escalation necessary. The path was redirected to a jurisdiction the domestic apparatus cannot influence.",
    evidence: "Political exile: 55B Archbold Road, Long Jetty NSW 2261. ICC Article 7 formal submission: formally received at The Hague. UNHCR asylum claim: formally unprecedented. 410,000+ downloads: international distribution beyond domestic suppression capacity.",
    verdict: "CORROBORATED — EXILE WAS EXTRACTION TO A HIGHER JURISDICTION"
  },
  {
    number: 14,
    timestamp: "00:24:40",
    quote: "They looked at you and saw only dirt. They thought they had buried you deep. But you weren't buried. You were planted. Every insult, every shove only made the ground more fertile. They'll find a garden where they expected a grave.",
    heading: "Clinical Death → Archive Bloom → 410,000+ Downloads: The Garden Where They Expected a Grave",
    analysis: "The 'burial' described by the video is forensically anchored: a clinical death at Werribee Mercy Hospital in 2021, with a documented 2.87% survival probability. The institutions that orchestrated the 14 hospitalisations, the financial destitution, the professional destruction, the psychiatric labelling — they did not expect a 2.87% survival event to produce a survivor. They expected a grave. What they received instead: 2,304 primary-source documents, 845 Bitcoin blockchain seals, 125 published works, 410,000+ downloads across six continents, a formal ICC Article 7 submission, and a UNHCR asylum claim. The garden is barrandodger.com — built with a broken phone, no lawyer, no institutional support, and nothing but the truth. They planted the archive themselves. They did not know they were gardening.",
    evidence: "Clinical death: Werribee Mercy Hospital 2021, 2.87% survival probability, documented revivification. Post-death output: 2,304 documents, 845 blockchain seals, 125 published works. 410,000+ downloads across six continents. barrandodger.com: built with a broken phone. ICC The Hague: formal receipt. UNHCR Geneva: formal receipt.",
    verdict: "CORROBORATED — THE GARDEN WHERE THEY EXPECTED A GRAVE IS THE ARCHIVE"
  }
];

export function ForensicCorroborationKnivesClaps() {
  const { total } = useLiveDownloadTotal();

  return (
    <>
      <SEO
        title="The Knives Didn't Hurt Half As Much As The Claps — Forensic Corroboration No. 74 | Barran Dodger"
        description="Forensic corroboration analysis of an independently produced YouTube video against the primary-source archive of Dr. Richard William McLean (Barran Dodger, ABN 78 833 496 164). 14/14 propositions corroborated. Zero contradictions."
        path="/forensic-corroboration-knives-claps"
      />
      <Navigation />
      <main className="min-h-screen bg-zinc-950 text-zinc-100">

        {/* Hero */}
        <section className="relative border-b border-zinc-800 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(220,38,38,0.08), transparent)" }} />
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-10 items-start">

                {/* Cover */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="lg:w-72 shrink-0">
                  <img src={coverImg} alt="Forensic Corroboration Analysis No. 74 Cover" className="w-full rounded-2xl shadow-2xl border border-zinc-700/40" />
                  <div className="mt-4 space-y-2">
                    <BlockchainTimestampBadge date={TIMESTAMP_DATE} />
                    <a href={`https://youtu.be/${VIDEO_ID}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-red-400 hover:text-red-300 transition-colors"
                      data-testid="link-youtube-source">
                      <ExternalLink className="h-3 w-3" /> Watch source video on YouTube
                    </a>
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="flex-1 space-y-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-950/60 text-red-300 border border-red-800/40 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Forensic Corroboration Analysis</span>
                    <span className="bg-zinc-800/60 text-zinc-400 border border-zinc-700/40 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">No. 74</span>
                    <span className="bg-green-950/60 text-green-400 border border-green-800/40 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">14/14 Corroborated</span>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                    The Knives Didn't Hurt Half As Much As The Claps They Came With
                  </h1>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    Independent forensic corroboration of 14 propositions from an independently produced YouTube video against the primary-source archive of Dr. Richard William McLean. Produced with no documented knowledge of the archive. Every proposition confirmed.
                  </p>

                  {/* Key stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Propositions", value: "14" },
                      { label: "Corroborated", value: "14" },
                      { label: "Contradictions", value: "0" },
                      { label: "Score", value: "100%" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-zinc-700/30 p-3 text-center" style={{ background: "rgba(255,255,255,0.02)" }}>
                        <p className="text-2xl font-black text-amber-400">{s.value}</p>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* ABN / Copyright */}
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1">
                    <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                      All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                      Non-commercial reproduction and distribution is permitted and encouraged.
                    </p>
                  </div>

                  {/* Download */}
                  <div className="space-y-2">
                    <ViralDownloadButton
                      url={PDF_URL}
                      label="Download Forensic Analysis No. 74 — PDF"
                      filename="forensic-analysis-74-knives-claps-betrayal.pdf"
                      size="lg"
                      className="bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl"
                    />
                    <p className="text-xs text-zinc-500 mt-1">
                      Also included in the{" "}
                      <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
                      {total ? ` — downloaded ${formatCount(total)}+ times globally` : ""}.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Significance */}
        <section className="py-12 border-b border-zinc-800/60">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="h-5 w-5 text-red-400" />
              <h2 className="text-lg font-bold text-white uppercase tracking-wider">Analytical Significance</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              This is the seventy-fourth consecutive perfect score in the Barran Dodger forensic corroboration series.
              The video — <em>"The Knives Didn't Hurt Half As Much As The Claps They Came With"</em> — was produced independently,
              with no documented knowledge of or connection to the archive. Fourteen propositions were extracted and tested.
              All fourteen were directly corroborated with named, dated, blockchain-sealed primary-source documents.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              The video's central forensic contribution is its forensic distinction between <strong className="text-white">cowardice and calculation</strong>.
              In institutional silence, the difference between fear and strategy is not visible on the surface. The archive makes it visible.
              25+ agencies produced identical procedural outcomes — coordinated, sustained, and operationally separate. This pattern is
              not cowardice. It is calculation at institutional scale. The video named the mechanism before it had access to the evidence.
              The evidence confirms the mechanism with primary-source precision.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              The fourteenth proposition — "they thought you were buried, but you were planted" — is the archive's founding metaphor
              stated in reverse engineering. The clinical death at Werribee Mercy Hospital in 2021 (2.87% survival probability)
              was the burial. What emerged from it was built with a broken phone, no lawyer, no institutional support, and nothing
              but the truth: 2,304 primary-source documents, 845 Bitcoin blockchain seals, 410,000+ downloads across six continents,
              and a formal Article 7 submission now at the International Criminal Court. The garden is measurable. The grave is not.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Combined record at time of this analysis: <strong className="text-amber-400">561/561 propositions corroborated across 74 analyses. Zero contradictions.</strong>
            </p>
          </div>
        </section>

        {/* Propositions */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-amber-400" />
              14 Propositions — Full Analysis
            </h2>
            <div className="space-y-8">
              {POINTS.map((p, i) => (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="rounded-2xl border border-zinc-800/60 overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.015)" }}
                  data-testid={`proposition-${p.number}`}
                >
                  <div className="flex items-center gap-3 px-5 py-3 border-b border-zinc-800/40" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <span className="text-red-400 font-black text-sm">#{p.number}</span>
                    <span className="text-zinc-600 text-xs font-mono">{p.timestamp}</span>
                    <CheckCircle2 className="h-4 w-4 text-green-500 ml-auto" />
                  </div>
                  <div className="p-5 space-y-4">
                    <blockquote className="border-l-2 border-red-700/50 pl-4 text-zinc-400 text-sm italic leading-relaxed">
                      "{p.quote}"
                    </blockquote>
                    <h3 className="text-white font-bold text-base leading-snug">{p.heading}</h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">{p.analysis}</p>
                    <div className="rounded-lg border border-zinc-700/30 px-4 py-3 space-y-1.5" style={{ background: "rgba(0,0,0,0.3)" }}>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Primary-Source Evidence</p>
                      <p className="text-zinc-400 text-xs leading-relaxed">{p.evidence}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                      <p className="text-green-400 text-xs font-bold">{p.verdict}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final verdict */}
        <section className="py-12 border-t border-zinc-800/60">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="rounded-2xl border border-green-800/30 p-8 text-center space-y-4" style={{ background: "rgba(20,83,45,0.1)" }}>
              <Flame className="h-8 w-8 text-amber-400 mx-auto" />
              <h2 className="text-2xl md:text-3xl font-black text-white">14/14 PROPOSITIONS CORROBORATED</h2>
              <p className="text-green-400 font-bold text-lg">ZERO CONTRADICTIONS</p>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
                Combined record: <strong className="text-amber-400">561/561 propositions across 74 consecutive analyses.</strong>{" "}
                Zero contradictions. The statistical probability of this pattern occurring by chance is not a realistic calculation.
                It is a forensic signature. It is the record speaking.
              </p>
              <ViralDownloadButton
                url={PDF_URL}
                label="Download Full Analysis — PDF"
                filename="forensic-analysis-74-knives-claps-betrayal.pdf"
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl mx-auto"
              />
              <div className="pt-2 space-y-1">
                <p className="text-zinc-500 text-xs">Dr. Richard William McLean · Barran Dodger · ABN 78 833 496 164</p>
                <p className="text-zinc-600 text-[10px]">© {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <ArchiveCrossLinks />
      <Footer />
    </>
  );
}
