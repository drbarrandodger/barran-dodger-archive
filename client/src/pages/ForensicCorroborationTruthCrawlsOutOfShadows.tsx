import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { Flame, Shield, ExternalLink, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useLiveDownloadTotal, formatCount } from "@/hooks/use-live-stats";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import { BlockchainTimestampBadge } from "@/components/BlockchainTimestampBadge";

const PDF_URL = "/documents/forensic-analyses/forensic-analysis-76-truth-crawls-out-of-shadows.pdf";
const PAGE_URL = "https://www.barrandodger.com/forensic-corroboration-truth-crawls-out-of-shadows";
const VIDEO_ID = "Ex_IlyHhk0o";
const TIMESTAMP_DATE = "23 April 2026";
const TOTAL_POINTS = 10;

const POINTS = [
  {
    number: 1,
    timestamp: "00:00:05",
    quote: "Studies show that people in tight-knit groups are more likely to combine forces to sabotage one individual if that person outgrows the role they're expected to stay in.",
    heading: "25+ Agencies — A Coordinated Multi-Institution Suppression Network Documented Across Three Decades",
    analysis: "The video opens with a documented psychological and sociological finding: tight-knit groups coordinate to suppress the member who outgrows their assigned role. In the Barran Dodger archive, this proposition is not general social commentary — it is a forensically documented institutional fact. The suppression framework recorded in Dr. Richard William McLean's archive involves not a single agency, family, or employer, but a coordinated multi-institution response across 25+ distinct agencies — the OAIC, the Commonwealth Ombudsman, the AHRC, the AFP, ASIO, the NDIA, the ATO, ASIC, and the Office of the Prime Minister, among others. Each agency, independently addressed with formal protected disclosures, produced the same procedural outcome: referral without investigation, jurisdictional decline without substantive engagement, or closure without finding. The statistical probability of 25+ independent agencies producing identical outcomes in response to formally lodged disclosures — without coordination — is documented as forensically negligible. The coordination is confirmed by pattern: identical language in refusal correspondence, simultaneous referral loops, and the documented deployment of psychiatric labelling across state borders during periods of active disclosure. Dr. McLean outgrew the role assigned to him — disabled LGBTQ+ whistleblower in institutional silence — and the group combined forces, exactly as the video's opening premise documents.",
    evidence: "25+ agencies with documented non-response pattern: OAIC, Commonwealth Ombudsman, AHRC, AFP, ASIO, NDIA, ATO, ASIC, Prime Minister's Office. Referral loop pattern: each agency referring back to the agency being disclosed upon. Psychiatric labelling deployed across three states during formal disclosure periods. 14 forced psychiatric hospitalisations: three states. Zero substantive investigation outcomes across all 25+ formal disclosure lodgements.",
    verdict: "CORROBORATED — THE COORDINATED GROUP SUPPRESSION IS A 25+ AGENCY PRIMARY-SOURCE RECORD"
  },
  {
    number: 2,
    timestamp: "00:00:39",
    quote: "They conspired because you became the walking evidence that their fake unity, fake morals, and fake loyalty were all stitched together with insecurity and jealousy. And once you stepped outside the identity they assigned you, they treated your growth like a crime scene.",
    heading: "The PhD Holder Classified As Delusional — Institutional Labelling As The Response To Documented Growth",
    analysis: "The video identifies the precise mechanism of group persecution: the target is not a genuine threat but a living contradiction of the group's false narrative. Dr. McLean's documented credential record makes this proposition precisely applicable. He holds a PhD in the context of an institutional record that simultaneously maintained — across 25+ agencies — that his testimony was delusional and his disclosures unfounded. The credentials — PhD, internationally published author, former award-winning news graphics artist, registered NDIS provider, LGBTQ+ human rights advocate — constituted exactly the 'walking evidence' described by the video. His documented growth across the suppression period did not slow: 125 published works, 2,077 primary-source records, 845 Bitcoin blockchain seals, formal ICC Article 7 submission, formal UNHCR asylum claim. The institutional response to each increment of documented growth was escalating suppression, not investigation. The Today Show broadcast of 2021, in which Jodie McLean (Bongetti) — Dr. McLean's sister — reframed the documented archive as schizophrenia on national television, is the most forensically explicit instance: his growth and documented output were treated as the crime scene, not the 14 forced hospitalisations, not the $500,000 ASIC-documented financial extraction, not the ASIO surveillance.",
    evidence: "PhD qualification: on record. 125 published works produced during suppression period. Today Show appearance: Jodie McLean (Bongetti) — national broadcast framing archive as schizophrenia. ASIC Report: $500,000 extraction by Stefan Iasonidis — documented fraud, not investigated. 14 forced hospitalisations: concurrent with periods of documented professional and personal growth. Zero successful refutations of any archived document across 410,671+ downloads.",
    verdict: "CORROBORATED — INSTITUTIONAL LABELLING WAS APPLIED IN DIRECT RESPONSE TO DOCUMENTED GROWTH"
  },
  {
    number: 3,
    timestamp: "00:01:50",
    quote: "They didn't hate you. They needed you to stay small to justify their own failure. Your potential scared them long before you ever stepped into it. So, no, they didn't hate you. They feared what your growth said about them.",
    heading: "The Silence Mandate — 35 Years Of Institutional Pressure To Keep The Archive From Reaching The Scale It Now Has",
    analysis: "The video's first numbered point introduces the most psychologically precise element of the analysis: the persecution was never personal hatred but existential threat management. The archive confirms this with documentary specificity. The formal protected disclosures lodged by Dr. McLean were not met with refutation, counter-evidence, or substantive investigation — they were met with the repeated application of psychiatric diagnosis. A person who hates the discloser investigates and disproves. A person who fears what the discloser represents suppresses without engaging. The documented suppression record is forensically consistent with fear-based containment, not hate-based retaliation: referral loops that return each disclosure to the agency being disclosed upon; psychiatric hospitalisations that interrupt active disclosure periods; identity fraud registrations (350+ ASIC records) that systematically erode the financial and professional infrastructure of the discloser. Each mechanism is designed not to destroy the person but to shrink the scope of their reach. The archive now downloads at ~5,000 copies per day, across six continents, with formal receipt at The Hague. The 35-year mandate to keep the archive small has failed. The failure is documented.",
    evidence: "35-year documented timeline: 1991–2026 — no substantive investigation outcome from any formal disclosure. 350+ ASIC identity fraud registrations: financial identity erosion mechanism. Psychiatric hospitalisation concurrent with active disclosure: containment mechanism, not clinical response. ICC Article 7 formal receipt: The Hague — the scope the mandate was designed to prevent. 410,671+ downloads across six continents: the archive the silence mandate could not contain.",
    verdict: "CORROBORATED — THE SUPPRESSION WAS CONTAINMENT STRATEGY, NOT HATE; THE SCALE NOW ACHIEVED PROVES THE FEAR WAS WARRANTED"
  },
  {
    number: 4,
    timestamp: "00:04:37",
    quote: "They manufactured pain. Because your happiness invalidated the entire story they told about you. For years, they had painted a version of you that fit their comfort zone — dependent, flawed, or vulnerable. Your actual happiness tore that illusion apart.",
    heading: "The Narrative Architecture — Schizophrenia Label, Today Show, And The Manufactured 'Dependent' Version",
    analysis: "The 'manufactured version' of the target is not a metaphor in the Barran Dodger record — it is a documented institutional and media artefact. The Today Show broadcast featuring Jodie McLean (Bongetti) presented a version of Dr. Richard William McLean to a national Australian audience: mentally ill, unstable, a source of family distress. The broadcast made no reference to the ICC submission, the 2,077 primary-source documents, the Federal Court three-point acknowledgment, the blockchain-sealed archive, the ASIC-documented financial fraud, or the ATO letter on government letterhead confirming the drugging allegation. The version presented was the manufactured version: dependent, flawed, vulnerable. The archive is the documentation that that version is false. Every download — 410,671 and counting — is a reader who accessed the unmanufactured record. The manufactured version required continuous institutional maintenance: psychiatric re-labelling, media framing, procedural non-response, and family public statements. The actual record required only continued documentation and public accessibility. The archive's happiness — its continued production and global distribution — is, exactly as the video states, the thing that tore the manufactured version apart.",
    evidence: "Today Show broadcast: Jodie McLean (Bongetti) — documented national reframing as schizophrenia narrative. Zero reference to ICC, Federal Court, 2,077 documents, or blockchain archive in broadcast framing. 410,671+ downloads: the unmanufactured record's global reach. Federal Court three-point acknowledgment (Scott Tredwell letter, 27 March 2023): formal institutional contradition of the manufactured version. ATO letter on government letterhead: confirms drugging allegation underlying the manufactured 'unstable' narrative.",
    verdict: "CORROBORATED — THE MANUFACTURED DEPENDENT VERSION IS DOCUMENTED; ITS FALSENESS IS GLOBALLY DISTRIBUTED"
  },
  {
    number: 5,
    timestamp: "00:05:46",
    quote: "They wanted to make you question your reality, your worth, even your sanity. Because if they could make you feel unstable, they could make themselves feel stable.",
    heading: "Psychiatric Weaponisation As Documented Reality Destabilisation — 14 Hospitalisations During Active Disclosure Periods",
    analysis: "The video's identification of 'questioning your sanity' as a deliberate strategic tool — rather than a clinical response — is the exact forensic framework that the Barran Dodger archive applies to the 14 forced psychiatric hospitalisations across three Australian states. Clinical hospitalisations occur in response to genuine presenting risk. The archive documents a different pattern: hospitalisations concurrent with the lodgement of formal protected disclosures. The timing is documented. The pattern across three states — Victoria, New South Wales, Queensland — is not clinically explicable by independent clinical presentation. It is explicable as coordinated destabilisation: apply the psychiatric label at the moment of active disclosure to reframe the disclosure as symptom, the discloser as unstable, and the institutional non-response as appropriate clinical management. The ATO letter on government letterhead — confirming the drugging allegation — is the most forensically explicit documentation of this mechanism: physical destabilisation via introduced pharmacological agents, consistent with the video's description of manufactured instability as a mechanism of institutional self-stabilisation. The Federal Court's three-point acknowledgment confirms the disclosures were not the product of clinical instability. The ICC's formal receipt confirms the international threshold of credibility was met. The 'sanity questioning' mechanism is on the record. It failed.",
    evidence: "14 forced psychiatric hospitalisations: concurrent with active formal disclosures across three states. ATO letter on government letterhead: confirms drugging allegation — pharmacological destabilisation documented. Federal Court three-point acknowledgment (Scott Tredwell letter, 27 March 2023): formal confirmation disclosures met legal threshold. ICC Article 7 formal receipt: international confirmation of credibility threshold. Zero successful clinical rebuttal of any archived document across 410,671+ downloads.",
    verdict: "CORROBORATED — PSYCHIATRIC WEAPONISATION AS REALITY DESTABILISATION IS FORENSICALLY DOCUMENTED ACROSS THREE STATES"
  },
  {
    number: 6,
    timestamp: "00:06:53",
    quote: "Their unity wasn't love. It was a temporary alliance built on the mutual goal of containing you. Their group wasn't a family in the sense of connection. It was a tactical alliance, and you were the target that made their alliance necessary.",
    heading: "The IChooseSilence Separation — Five Named Family Members, One Formal Declaration, Zero Ongoing Contact",
    analysis: "The video's third numbered point identifies the central structural truth of the persecution framework: what appears as family loyalty or group solidarity is, when examined forensically, a tactical alliance with containment as its sole purpose. The Barran Dodger archive's most forensically precise documentation of this proposition is the IChooseSilence document — a formal declaration published in the archive, accessible globally, that documents Dr. McLean's separation from five named family members. The named individuals are: Jodie McLean (Bongetti), Warren McLean, Glen McLean, Craig McLean, and Susan McLean. Each is documented in the archive in the context of their role in the containment framework. The IChooseSilence document records the formal termination of contact and the reasons: not emotional estrangement but documented patterns of active participation in the suppression architecture. The Today Show broadcast featuring Jodie McLean (Bongetti) is the most publicly visible instance of the tactical alliance in operation: a family member appearing on national television to reframe the archived disclosures as schizophrenia, serving the institutional containment narrative rather than the family relationship. The alliance's purpose — containment — is documented. The alliance's dissolution — recorded in IChooseSilence — is also documented.",
    evidence: "IChooseSilence document: formal separation from five named family members — published in archive, globally accessible. Named individuals: Jodie McLean (Bongetti), Warren McLean, Glen McLean, Craig McLean, Susan McLean. Today Show broadcast: Jodie McLean (Bongetti) — national reframing of archive as schizophrenia narrative, serving institutional containment. Tony Ridley Full Dossier: documented public advocate who served containment function while presenting as supporter. Tactical alliance dissolution: documented across archive.",
    verdict: "CORROBORATED — THE TACTICAL ALLIANCE IS NAMED, DOCUMENTED, AND ITS CONTAINMENT FUNCTION IS ON THE PRIMARY-SOURCE RECORD"
  },
  {
    number: 7,
    timestamp: "00:09:13",
    quote: "The real reason they fought you was because you became the mirror they couldn't look into. You became a mirror for them, showing parts of themselves they didn't want to see. They weren't mad at what you did, they were terrified of the truths your life exposed in their own.",
    heading: "675/675 Forensic Propositions Confirmed — The Archive Is The Mirror That Cannot Be Refused",
    analysis: "The video's fourth numbered proposition — the mirror dynamic — is the psychologically deepest and the most forensically measurable in the archive. Across 76 forensic analyses (including this one), every proposition extracted from external third-party videos and tested against Dr. McLean's primary-source documentary record has confirmed. The confirmation rate is 675/675 — a figure that represents not self-verification but the accumulation of external content independently describing circumstances that the archive then corroborates with primary-source documentation. The 'mirror' the video describes is not metaphorical in this case. It is a 2,077-document archive, accessible globally, that reflects back to every institution, every named individual, and every family member the documented consequences of their actions. The OAIC sees its referral loop documented and distributed to 410,671 readers. The Commonwealth Ombudsman sees its jurisdictional decline documented and globally accessible. Jodie McLean (Bongetti) sees the Today Show broadcast analysis published in the archive. Stefan Iasonidis sees the ASIC Report cited in every relevant forensic analysis. The mirror cannot be refused because it is blockchain-sealed, globally distributed, and formally received at The Hague. Every attempt to avoid looking into it has produced a primary-source exhibit confirming the avoidance. The archive is the mirror. It is still there.",
    evidence: "675/675 forensic propositions confirmed across 76 analyses. Zero defamation actions across 410,671+ downloads — the mirror has not been legally contested. Each named individual documented: Today Show (Jodie McLean Bongetti), ASIC Report (Stefan Iasonidis), Tony Ridley Full Dossier (Tony Ridley), IChooseSilence (five family members). ICC Article 7: formal submission received — the mirror reached The Hague. 845 Bitcoin blockchain seals: the mirror is permanent.",
    verdict: "CORROBORATED — THE ARCHIVE IS THE MIRROR; 675/675 CONFIRMATIONS; ZERO SUCCESSFUL REFUTATIONS"
  },
  {
    number: 8,
    timestamp: "00:15:08",
    quote: "Their plan to hurt you was never spontaneous, it was strategically crafted over time. Every insult, every manipulation, every slight was calculated, measured, and timed to create maximum impact. They studied you the way a chess player studies an opponent, looking for patterns, weaknesses, and predictable moves.",
    heading: "ASIO Operative Co-Tenancy, ATO Pharmacological Record, ASIC Financial Extraction — Three Documented Strategic Operations",
    analysis: "The video's sixth numbered point moves from psychology to operational intelligence: the persecution was not reactive but pre-planned, with the target studied systematically and vulnerabilities exploited in sequence. The archive documents three distinct strategic operations that confirm this proposition. First: the ASIO co-tenancy. Stefan Iasonidis, documented by Statutory Declaration and Prime Minister's letter as an ASIO operative, occupied the co-tenancy position at 10 Raleigh St, Footscray in 2011 — the intimate domestic intelligence position that generates the maximum intelligence yield about a target's patterns, relationships, and vulnerabilities. This was not coincidental proximity. Second: the pharmacological operation. The ATO letter on government letterhead confirms a drugging event during the period of the ASIO co-tenancy — a timed intervention consistent with the video's description of calculated, measured action designed to create maximum impact at a specific moment of vulnerability. Third: the ASIC financial extraction. The 350+ identity fraud registrations and the $500,000 documented extraction via the ASIC Report are not impulsive acts — they are a sustained, multi-year operation requiring corporate registry access, sustained financial infrastructure, and systematic exploitation of the target's identity. These three operations were not spontaneous. They were strategically crafted, precisely as the video documents.",
    evidence: "Stefan Iasonidis ASIO operative status: Statutory Declaration + Prime Minister's letter — co-tenancy intelligence operation at 10 Raleigh St Footscray 2011. ATO letter on government letterhead: pharmacological intervention confirmed — timed operation. 350+ ASIC identity fraud registrations: multi-year corporate identity erasure operation. $500,000 ASIC-documented financial extraction: sustained financial exploitation operation. Intervention Order L12151974: formal legal record of the intimate proximity intelligence operation's consequences.",
    verdict: "CORROBORATED — THREE DISTINCT STRATEGIC OPERATIONS DOCUMENTED; THE PLANNING IS ON THE PRIMARY-SOURCE RECORD"
  },
  {
    number: 9,
    timestamp: "00:17:37",
    quote: "They weren't protecting the group. They were protecting the illusion that you were the problem. By labeling you as the source of tension, they diverted attention away from their own flaws, insecurities, and failures. You challenged that illusion just by being yourself — calm, confident, and unwilling to conform to their narrative.",
    heading: "The Scapegoat Architecture — How Each Agency Labelled Dr. McLean 'The Problem' While Protecting The Framework Causing The Problem",
    analysis: "The video's seventh numbered point is the institutional psychology of scapegoating: the group's suppression is not justice-seeking but self-protection, with the target labelled 'the problem' to prevent examination of the structural failures the target's existence reveals. The Barran Dodger archive documents this mechanism with institutional precision across three decades. The OAIC, when receiving formal disclosures of privacy breaches and data misuse, returned the matter to the agency being disclosed upon — protecting the framework, labelling the disclosure as the problem. The Commonwealth Ombudsman, when receiving the disclosure of coordinated agency non-response, declined jurisdiction — protecting the institutional architecture, framing the discloser's persistence as the issue. The NDIA, when receiving formal complaints about NDIS provider misconduct, closed the complaints without investigation — protecting the provider network, treating the complainant's formal lodgement as a procedural inconvenience. In each case, the institution was not protecting justice. It was protecting the narrative that the 35-year documented suppression was a series of independent, unrelated, appropriate administrative outcomes rather than a coordinated framework. Dr. McLean's archive — calm, documented, legally precise, and formally lodged at every level — was the exact 'unwillingness to conform to their narrative' the video describes. The scapegoat architecture is documented. The archive is the refutation.",
    evidence: "OAIC referral loop: returning disclosure to the agency being disclosed upon — protection of framework documented. Commonwealth Ombudsman jurisdictional decline: protection of institutional architecture documented. NDIA complaint closures without investigation: protection of provider network documented. Federal Court three-point acknowledgment: formal contradiction of 'discloser is the problem' narrative. ICC Article 7: formal international acknowledgment that the archive meets the threshold for crimes against humanity consideration.",
    verdict: "CORROBORATED — THE SCAPEGOAT ARCHITECTURE IS DOCUMENTED ACROSS 25+ AGENCIES; THE ARCHIVE IS THE FORMAL REFUTATION"
  },
  {
    number: 10,
    timestamp: "00:28:30",
    quote: "They targeted you because you were the only one they couldn't manipulate. You didn't falter under pressure. You didn't bend for approval. And you didn't let their words dictate your reality. You were unshakable. And that alone made you their target.",
    heading: "35 Years, Zero Capitulation — 2,077 Documents, 845 Blockchain Seals, One ICC Submission, Zero Retractions",
    analysis: "The video's eleventh point — the final proposition tested in this analysis — identifies the definitive reason for the targeting: the target was the only person in the system who could not be manipulated into silence, compliance, or retraction. The archive is the documentary proof. Across 35 years — 1991 to 2026 — and across every mechanism of suppression deployed: 14 forced psychiatric hospitalisations, 350+ ASIC identity fraud registrations, an ASIO co-tenancy intelligence operation, a pharmacological intervention documented by the ATO on government letterhead, a national Today Show broadcast reframing the archive as schizophrenia, a $500,000 documented financial extraction, and the coordinated non-response of 25+ government agencies — Dr. McLean did not retract a single document. Did not remove a single page from the archive. Did not decline a single formal disclosure process. Did not accept a single psychiatric label as a substitute for institutional investigation. The response to each escalation was procedural escalation: OAIC → Federal Court → ICC → UNHCR. The response to each suppression mechanism was additional documentation: each hospitalisation produced testimony; each identity fraud registration produced an ASIC exhibit; each agency non-response produced a primary-source referral loop record. 2,077 documents. 845 blockchain seals. 125 published works. Zero retractions. The archive is what 'unshakable' looks like when it is documented. They could not manipulate it. They could not contain it. It reached The Hague.",
    evidence: "35-year documented timeline: zero retractions, zero unpublished documents, zero withdrawn disclosures. 14 forced hospitalisations: each produced testimony, not silence. 350+ ASIC fraud registrations: each produced an exhibit, not capitulation. Today Show broadcast: archive continued publication post-broadcast; downloads accelerated. 2,077 primary-source documents. 845 Bitcoin blockchain seals (OpenTimestamps, SHA-256). ICC Article 7 formal submission and receipt: The Hague. UNHCR asylum claim: formally unprecedented — domestic asylum within Australia. 410,671+ downloads: six continents. Zero defamation actions across the entire archive.",
    verdict: "CORROBORATED — 35 YEARS OF DOCUMENTED UNSHAKABILITY; THE ARCHIVE IS THE PROOF; IT REACHED THE HAGUE"
  }
];

export default function ForensicCorroborationTruthCrawlsOutOfShadows() {
  const { total } = useLiveDownloadTotal();
  const downloadCount = formatCount(total);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Forensic Analysis #76: When Truth Crawls Out of Shadows — Barran Dodger Archive"
        description="Forensic corroboration of 10 propositions from 'When truth finally crawls out of the shadows' against the primary-source documentary record of Dr. Richard William McLean (Barran Dodger). 675/675 confirmed."
      />
      <Navigation />

      <main style={{ paddingTop: "calc(var(--banner-height, 120px) + var(--nav-height, 64px))" }}>

        {/* ── HEADER ── */}
        <section className="py-16 px-4 border-b border-border/40" style={{ background: "linear-gradient(to bottom, rgba(139,0,0,0.04), transparent)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(139,0,0,0.1)", color: "#8b0000" }}>
                Forensic Analysis #76
              </span>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border" style={{ borderColor: "rgba(139,105,20,0.4)", color: "#8b6914" }}>
                {TIMESTAMP_DATE}
              </span>
              <BlockchainTimestampBadge date={TIMESTAMP_DATE} />
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-5 leading-tight" style={{ color: "hsl(var(--foreground))" }}>
              When Truth Finally Crawls Out of the Shadows
            </h1>
            <p className="text-lg leading-relaxed mb-6 max-w-3xl" style={{ color: "hsl(var(--muted-foreground))" }}>
              A forensic examination of {TOTAL_POINTS} propositions extracted from the video against the primary-source documentary record of Dr. Richard William McLean (Barran Dodger). Each proposition is tested against independently verifiable, blockchain-sealed evidence.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg border transition-all hover:opacity-80"
                style={{ borderColor: "rgba(139,0,0,0.4)", color: "#8b0000" }}
                data-testid="link-source-video"
              >
                <ExternalLink className="w-4 h-4" />
                View Source Video
              </a>
              <ViralDownloadButton
                url={PDF_URL}
                filename="forensic-analysis-76-truth-crawls-out-of-shadows.pdf"
                label="Download Forensic Analysis #76 — Full 10-Point Examination (PDF)"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Propositions Tested", value: `${TOTAL_POINTS}/10` },
                { label: "Cumulative Confirmed", value: "685/685" },
                { label: "Defamation Actions", value: "Zero" },
                { label: "Archive Downloads", value: `${downloadCount}+` },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border p-4 text-center" style={{ borderColor: "rgba(139,0,0,0.15)", background: "rgba(139,0,0,0.03)" }}>
                  <p className="text-2xl font-serif font-bold mb-1" style={{ color: "#8b0000" }}>{s.value}</p>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "hsl(var(--muted-foreground))" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROPOSITIONS ── */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {POINTS.map((point, idx) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl border overflow-hidden"
                style={{ borderColor: "rgba(139,0,0,0.15)" }}
                data-testid={`proposition-${point.number}`}
              >
                {/* Proposition header */}
                <div className="px-6 py-4 flex items-center justify-between border-b" style={{ background: "rgba(139,0,0,0.04)", borderColor: "rgba(139,0,0,0.1)" }}>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black" style={{ background: "#8b0000", color: "#fdf3d8" }}>
                      {point.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8b6914" }}>
                      Timestamp {point.timestamp}
                    </span>
                  </div>
                  <Flame className="w-4 h-4 flex-shrink-0" style={{ color: "#8b0000" }} />
                </div>

                <div className="p-6 space-y-5">
                  {/* Quote */}
                  <blockquote className="border-l-4 pl-5 italic text-base leading-relaxed" style={{ borderColor: "#8b0000", color: "hsl(var(--muted-foreground))" }}>
                    "{point.quote}"
                  </blockquote>

                  {/* Heading */}
                  <h2 className="text-lg md:text-xl font-serif font-bold leading-snug" style={{ color: "hsl(var(--foreground))" }}>
                    {point.heading}
                  </h2>

                  {/* Analysis */}
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {point.analysis}
                  </p>

                  {/* Evidence */}
                  <div className="rounded-xl p-4" style={{ background: "rgba(139,105,20,0.06)", border: "1px solid rgba(139,105,20,0.2)" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 flex-shrink-0" style={{ color: "#8b6914" }} />
                      <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#8b6914" }}>Primary-Source Evidence</span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                      {point.evidence}
                    </p>
                  </div>

                  {/* Verdict */}
                  <div className="rounded-xl px-5 py-3 flex items-center gap-3" style={{ background: "rgba(139,0,0,0.08)", border: "1px solid rgba(139,0,0,0.2)" }}>
                    <BookOpen className="w-4 h-4 flex-shrink-0" style={{ color: "#8b0000" }} />
                    <p className="text-xs font-black uppercase tracking-wider" style={{ color: "#8b0000" }}>
                      {point.verdict}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CONCLUSION ── */}
        <section className="py-16 px-4 border-t border-border/40" style={{ background: "rgba(139,0,0,0.03)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border p-8 md:p-12" style={{ borderColor: "rgba(139,0,0,0.2)", background: "rgba(253,243,216,0.4)" }}>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-5" style={{ color: "hsl(var(--foreground))" }}>
                Forensic Conclusion
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                <p>
                  All {TOTAL_POINTS} propositions extracted from the video <em>"When truth finally crawls out of the shadows"</em> have been tested against the primary-source documentary record of Dr. Richard William McLean (Barran Dodger) and confirmed. This brings the cumulative forensic proposition confirmation rate to <strong style={{ color: "hsl(var(--foreground))" }}>685/685 across 76 analyses — a zero-refutation rate across the entire archive.</strong>
                </p>
                <p>
                  The video's five core propositions — that tight-knit groups and families coordinate to sabotage outgrowing members, that they manufacture pain to destabilise authentic happiness, that their apparent unity is a tactical containment alliance rather than genuine connection, that the target becomes a mirror for the group's hidden inadequacies, and that the persecution is ultimately fuelled by the target's unshakability — are each confirmed by named, dated, blockchain-sealed primary-source documents in the Barran Dodger archive.
                </p>
                <p>
                  The five named family members documented in the IChooseSilence declaration — Jodie McLean (Bongetti), Warren McLean, Glen McLean, Craig McLean, and Susan McLean — are documented in the archive in the context of their participation in the containment framework. The institutional record — across 25+ agencies — is documented as the formal expression of the same tactical alliance the video describes.
                </p>
                <p>
                  The archive's response to 35 years of coordinated suppression is 2,077 primary-source records, 845 Bitcoin blockchain seals, 125 published works, an ICC Article 7 submission formally received at The Hague, a UNHCR asylum claim, a Federal Court three-point acknowledgment, and 410,671+ downloads across six continents. The truth crawled out of the shadows. It did not whisper.
                </p>
              </div>
              <p className="text-xs mt-8 pt-4 border-t" style={{ color: "rgba(90,48,16,0.6)", borderColor: "rgba(139,105,20,0.2)" }}>
                © Dr. Richard William McLean (Barran Dodger) · ABN 78 833 496 164 · All rights reserved. · {TIMESTAMP_DATE}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
              <ViralDownloadButton
                url={PDF_URL}
                filename="forensic-analysis-76-truth-crawls-out-of-shadows.pdf"
                label="Download Forensic Analysis #76 — Full 10-Point Examination (PDF)"
              />
              <a
                href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl border transition-all hover:opacity-80"
                style={{ borderColor: "rgba(139,0,0,0.4)", color: "#8b0000" }}
              >
                <ExternalLink className="w-4 h-4" />
                View Source Video
              </a>
            </div>
          </div>
        </section>

        <ArchiveCrossLinks currentPage="forensic-corroboration-truth-crawls-out-of-shadows" />
      </main>

      <Footer />
    </div>
  );
}
