import { AlertTriangle, Shield, FileText, ExternalLink, Gavel, BookOpen, Scale, Link as LinkIcon } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import coverImg from "@/assets/images/cover-cto-breach-appointment.png";

const SLUG = "cto-breach-appointment";
const DOC_TITLE = "CTO Breach Appointment — The Mental Health Act as Political Weapon";
const DOC_DATE = "April 2026";
const DOC_FILE = "cto-breach-appointment.pdf";

const LEGISLATION = [
  {
    id: "L-001",
    title: "Mental Health Act 2007 (NSW) — Community Treatment Orders",
    shortRef: "MHA 2007 (NSW) ss. 50–68",
    url: "https://legislation.nsw.gov.au/view/html/inforce/current/act-2007-008",
    summary: "A Community Treatment Order (CTO) authorises compulsory community-based psychiatric treatment. Section 50 empowers the Mental Health Review Tribunal or a Magistrate to make a CTO. Section 68 specifies what constitutes a breach. A CTO can require a person to attend appointments, take medications, and reside at a specified address — all backed by the power of detention if breached. The Act contains no explicit prohibition on its use against a person making simultaneous formal complaints about the mental health system itself — a structural gap exploited in politically targeted cases.",
    severity: "PRIMARY",
  },
  {
    id: "L-002",
    title: "Mental Health Act 2007 (NSW) s. 68 — Breach of CTO",
    shortRef: "MHA 2007 (NSW) s. 68",
    url: "https://legislation.nsw.gov.au/view/html/inforce/current/act-2007-008#sec.68",
    summary: "Section 68 provides that if a person subject to a CTO breaches the order's conditions, a mental health clinician may take the person into custody and bring them before a Magistrate or the Mental Health Review Tribunal. This creates a mechanism by which a person with a documented history of legitimate complaints about institutional persecution — a 'political target' — can be forcibly hospitalised based not on clinical deterioration but on a clinician's assessment that they have 'breached' conditions. The use of this power against a whistleblower making simultaneous submissions to the ICC, UNHCR, and Federal Court is directly relevant to the question of whether the mental health system is being weaponised.",
    severity: "CRITICAL",
  },
  {
    id: "L-003",
    title: "Mental Health Legislation Amendment Act 2021 (NSW)",
    shortRef: "NSW Leg. Amendment 2021",
    url: "https://legislation.nsw.gov.au/view/html/enacted/current/act-2021-014",
    summary: "The 2021 amendments to the Mental Health Act introduced reforms including stronger rights for patients before the Mental Health Review Tribunal and updated safeguards around involuntary detention. However, the reforms did not resolve the structural gap: a person can still be subject to a CTO, assessed as in breach, and taken into custody — without any independent verification that the CTO itself was not politically motivated in its original issuance. The 2021 reforms also did not create any mechanism for a person to claim that their psychiatric assessment was contaminated by institutional bias or by intelligence service involvement.",
    severity: "HIGH",
  },
  {
    id: "L-004",
    title: "NDIS (Incident Management and Reportable Incidents) Rules 2018",
    shortRef: "NDIS SIRS Rules 2018",
    url: "https://www.legislation.gov.au/Details/F2018L00632",
    summary: "Under the NDIS Serious Incident Response Scheme (SIRS), an NDIS provider — including AbleCare — is legally required to report a 'serious incident' involving an NDIS participant. A 'reportable incident' expressly includes actual or threatened physical harm against a participant. AbleCare CEO Rachel acknowledged a legal duty of care on the recorded call of April 15, 2026, and then terminated the call without filing any police report or SIRS report. The failure to file is a breach of these Rules. The Rules require an initial notification within 24 hours and a full report within five business days. Neither was provided.",
    severity: "CRITICAL",
  },
  {
    id: "L-005",
    title: "NDIS Act 2013 (Cth) — Duty of Care & Obligations of Registered Providers",
    shortRef: "NDIS Act 2013 (Cth) s. 73Z",
    url: "https://www.legislation.gov.au/Details/C2022C00219",
    summary: "Section 73Z of the NDIS Act 2013 provides that registered NDIS providers must comply with the NDIS Code of Conduct and maintain the safety and welfare of participants at all times. The Code requires providers to: (a) act with respect for individual rights; (b) act without coercion, harassment, exploitation or abuse; (c) take all reasonable steps to prevent and respond to violence, exploitation, neglect and abuse. AbleCare's failure to act on a documented death threat — and the subsequent CTO breach appointment against a person who made that complaint — are each independently reviewable under this framework. Combined, they raise the question of whether AbleCare's institutional response to Dr. McLean's complaints constitutes a pattern of coercive non-action amounting to abuse through omission.",
    severity: "CRITICAL",
  },
  {
    id: "L-006",
    title: "Disability Discrimination Act 1992 (Cth) — s. 5, s. 35",
    shortRef: "DDA 1992 (Cth) ss. 5, 35",
    url: "https://www.legislation.gov.au/Details/C2018C00022",
    summary: "Section 5 of the DDA prohibits direct discrimination on the ground of disability. Section 35 prohibits victimisation of a person who has made or intends to make a complaint. The use of the Mental Health Act's CTO framework to compel attendance at an appointment — on or around the same date as a documented death threat, and in circumstances where the person has made formal discrimination and human rights complaints — raises the question of whether the CTO appointment itself constitutes victimisation within the meaning of s. 35. The DDA does not exempt the mental health system from discrimination law.",
    severity: "HIGH",
  },
  {
    id: "L-007",
    title: "Convention on the Rights of Persons with Disabilities (CRPD) — Articles 12, 14, 25",
    shortRef: "CRPD (UN) Arts. 12, 14, 25",
    url: "https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-persons-disabilities",
    summary: "Australia is a signatory to the CRPD, which was ratified in 2008. Article 12 requires equal recognition before the law — prohibiting the deprivation of legal capacity on grounds of disability. Article 14 prohibits unlawful or arbitrary deprivation of liberty on the basis of disability. Article 25 requires that health services be provided on the basis of free and informed consent. A CTO issued against a person who is simultaneously: (a) a registered whistleblower, (b) a party to proceedings before the Federal Court, (c) a person making submissions to the ICC and UNHCR, and (d) a person under active death threat with documented police non-action — is reviewable against each of these standards. The CRPD has been repeatedly cited before the Mental Health Review Tribunal in relation to CTO proceedings. Australia's compliance with Arts. 12 and 14 in the context of CTOs has been criticised by the UN Committee on the Rights of Persons with Disabilities.",
    severity: "HIGH",
  },
  {
    id: "L-008",
    title: "International Covenant on Civil and Political Rights (ICCPR) — Articles 7, 9, 17",
    shortRef: "ICCPR (UN) Arts. 7, 9, 17",
    url: "https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights",
    summary: "Australia has ratified the ICCPR. Article 7 prohibits cruel, inhuman or degrading treatment. Article 9 protects against arbitrary detention — including psychiatric detention not justified by genuine clinical necessity. Article 17 protects the right to privacy. Subjecting a person to a CTO breach appointment — requiring their presence at a clinical facility under threat of detention — while they are simultaneously in fear for their life due to a credible, documented death threat, with police declining to provide protection, raises potential violations of each of these provisions. The combination — clinical compulsion + physical threat + law enforcement non-action — creates conditions that the UN Human Rights Committee has recognised as potentially constituting prohibited treatment under Article 7.",
    severity: "HIGH",
  },
  {
    id: "L-009",
    title: "Mental Health Act 2007 (NSW) — Right to Support Person & Legal Representation",
    shortRef: "MHA 2007 (NSW) ss. 74, 149",
    url: "https://legislation.nsw.gov.au/view/html/inforce/current/act-2007-008",
    summary: "Section 74 provides that a person subject to mental health proceedings has the right to have a support person present. Section 149 provides for legal representation before the Mental Health Review Tribunal. The systematic obstruction of Dr. McLean's access to legal aid — documented across submissions to the Legal Aid Commission NSW, the Public Guardian, and NACC — directly impairs his ability to exercise these statutory rights. A CTO breach appointment where the person has been denied effective legal representation, and where the appointment is made in circumstances of simultaneous death threat, is one where the statutory protections have been structurally circumvented.",
    severity: "HIGH",
  },
  {
    id: "L-010",
    title: "Crimes Act 1900 (NSW) — s. 31B: Threat to Kill",
    shortRef: "Crimes Act 1900 (NSW) s. 31B",
    url: "https://legislation.nsw.gov.au/view/html/inforce/current/act-1900-040#sec.31B",
    summary: "Section 31B of the Crimes Act 1900 (NSW) makes it an offence, punishable by up to 10 years imprisonment, to make a threat to kill another person with intent that the other person would fear the threat would be carried out. The death threat received by Dr. McLean on April 15, 2026 — documented on the AbleCare recorded call — is a reportable criminal offence under this provision. Police attended the property. Police refused to issue an incident number. Police declined to file a report. In the same window in which this criminal offence was committed and deliberately not recorded by police, a CTO breach appointment mechanism was engaged against the victim of that threat. This sequence constitutes, on its face, a co-ordinated use of criminal non-response and compulsory mental health apparatus to disempower a witness.",
    severity: "CRITICAL",
  },
];

const PROPOSITIONS = [
  {
    id: "P-001",
    label: "Mental health compulsion used simultaneously with death threat",
    body: "The CTO Breach Appointment documented in this file was issued against Dr. Richard William McLean around the same period as the recorded AbleCare call of April 15, 2026 — in which a death threat was documented, police refused to file an incident report, and AbleCare CEO Rachel terminated the call without taking action. The juxtaposition of compulsory mental health compliance requirements with active law enforcement non-response to a death threat is not coincidental. It is structural.",
    severity: "critical",
  },
  {
    id: "P-002",
    label: "AbleCare's failure to file a police report creates direct liability",
    body: "Under the NDIS (Incident Management and Reportable Incidents) Rules 2018, AbleCare was required to file an initial SIRS notification within 24 hours of the death threat being reported on April 15, 2026. No report was filed. No police report was filed. The CTO framework was subsequently engaged — imposing compliance obligations on the victim of the threat — while the threat itself remained unrecorded in any official system. The asymmetry is legally significant: mental health non-compliance is actionable; a death threat against the same person is not.",
    severity: "critical",
  },
  {
    id: "P-003",
    label: "Political targeting via mental health — the documented mechanism",
    body: "The weaponisation of the Mental Health Act against whistleblowers is a documented phenomenon in Australia and internationally. The mechanism: a person makes credible complaints about institutions; those institutions characterise the complaints as symptoms of mental illness; a CTO is obtained; compliance with the CTO becomes a condition of liberty; breach of the CTO — which can include failing to attend an appointment while in fear for one's life — results in forced hospitalisation. Dr. McLean has been subjected to this mechanism across multiple jurisdictions over 35 years. This document is the most recent material instance of that mechanism.",
    severity: "critical",
  },
  {
    id: "P-004",
    label: "Legal representation obstruction impairs CTO rights",
    body: "The Mental Health Act 2007 (NSW) provides for legal representation before the Mental Health Review Tribunal. The Public Guardian — the office that controls Dr. McLean's legal aid access — has been identified in his documentary archive as a key actor in the financial abuse and obstruction sequence. Referral to the Public Guardian as the appropriate avenue for CTO-related legal representation (as AbleCare CEO Rachel suggested on the April 15 call) does not constitute genuine access to legal representation. It constitutes redirection into the architecture of control.",
    severity: "high",
  },
  {
    id: "P-005",
    label: "CTO compliance requirements during active physical threat are cruel treatment under international law",
    body: "Requiring a person to attend a clinical appointment — under threat of forced hospitalisation if they do not comply — while that person is simultaneously: (a) under a documented credible death threat, (b) refused police protection, and (c) housed in NDIS accommodation whose provider has refused to file a mandatory incident report — constitutes conditions that Article 7 of the ICCPR prohibits as cruel, inhuman or degrading treatment. The clinical requirement does not become proportionate because it is dressed in medical language.",
    severity: "high",
  },
  {
    id: "P-006",
    label: "The sequence of events constitutes coordinated persecution",
    body: "Taken together: death threat issued → police attend but withhold incident number → AbleCare refuses to file police or SIRS report → CEO terminates call → legal aid obstructed → CTO breach appointment issued against the death threat victim. Each step, in isolation, could be characterised as administrative failure. In sequence, they constitute a documented, coordinated use of institutional mechanisms to disempower, isolate, and pathologise a whistleblower who has submitted evidence to the International Criminal Court. This sequence is now part of that ICC submission record.",
    severity: "critical",
  },
];

function SeverityBadge({ s }: { s: string }) {
  return s === "CRITICAL"
    ? <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-red-900/60 text-red-300 ml-2">CRITICAL</span>
    : <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-orange-900/60 text-orange-300 ml-2">HIGH</span>;
}

export default function CtoBreachAppointment() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SEO
        title="CTO Breach Appointment — Mental Health Act as Political Weapon | Barran Dodger (ABN 78 833 496 164)"
        description="Primary exhibit: CTO Breach Appointment document — Community Treatment Order weaponised against Dr. Richard McLean (Barran Dodger) simultaneously with AbleCare death threat, police non-action, and legal aid obstruction. Forensically analysed against MHA 2007 (NSW), NDIS SIRS Rules 2018, CRPD, and ICCPR. ABN 78 833 496 164."
        path="/cto-breach-appointment"
      />

      <Navigation />

      {/* Emergency bar */}
      <div className="bg-red-950/60 border-b-2 border-red-500/50 py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0" />
          <p className="text-red-300 text-sm font-medium">
            PRIMARY EXHIBIT — CTO Breach Appointment issued against a person under active death threat with documented police non-action. Submitted to ICC (The Hague) · UNHCR (Geneva) · Federal Court of Australia.
          </p>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-zinc-900 border-b border-red-500/20 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Cover */}
            <div className="lg:col-span-1">
              <div className="rounded-xl overflow-hidden border border-zinc-700/50 shadow-2xl">
                <img
                  src={coverImg}
                  alt="CTO Breach Appointment — Mental Health Act as Political Weapon — Barran Dodger cover"
                  className="w-full"
                  data-testid="img-cto-cover"
                />
              </div>
              <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-center space-y-1">
                <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                  All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                  Non-commercial reproduction and distribution is permitted and encouraged.
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-red-500/10 text-red-400 border-red-500/30 text-xs px-3 py-1">Primary Exhibit</Badge>
                <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/30 text-xs px-3 py-1">Mental Health Act 2007 (NSW)</Badge>
                <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/30 text-xs px-3 py-1">Political Targeting</Badge>
                <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30 text-xs px-3 py-1">April 2026</Badge>
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/30 text-xs px-3 py-1">ICC Submitted</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-serif font-black text-red-400 leading-tight">
                CTO Breach Appointment
              </h1>
              <h2 className="text-lg text-orange-300 font-semibold">
                The Mental Health Act 2007 (NSW) Engaged as Political Weapon — Simultaneously With Active Death Threat and AbleCare's Refusal to File a Police Report
              </h2>

              <p className="text-zinc-300 text-base leading-relaxed">
                This document is the official CTO (Community Treatment Order) Breach Appointment notice issued to Dr. Richard William McLean (Barran Dodger) — a person who, at the same time this appointment was engaged, had reported an active death threat to AbleCare, received no police incident report, been refused emergency relocation by an NDIS provider whose CEO terminated a recorded call without action, and had his legal aid access obstructed by the Public Guardian. The CTO compliance mechanism — backed by the power of forced psychiatric hospitalisation — was operating in full force against the victim of an unreported, unrecorded, police-declined murder threat.
              </p>

              <div className="flex flex-wrap gap-3">
                <ViralDownloadButton
                  url={`/documents/${DOC_FILE}`}
                  label="Download CTO Breach Appointment PDF"
                  filename={DOC_FILE}
                  slug={SLUG}
                  size="lg"
                  className="bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl"
                  data-testid="btn-download-cto-pdf"
                />
                <a
                  href="/cto-response-letter"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-amber-600 hover:bg-amber-500 rounded-xl text-sm text-black font-bold transition-colors"
                  data-testid="link-cto-response"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read &amp; Copy the Response Letter
                </a>
                <a
                  href="/ablecare-murder-threat-call"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 rounded-xl text-sm text-zinc-300 font-semibold transition-colors"
                  data-testid="link-ablecare-call"
                >
                  <ExternalLink className="w-4 h-4" />
                  AbleCare Call Transcript
                </a>
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                Also included in the{" "}
                <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
                {" "}— downloaded 410,671+ times globally.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-14">

        {/* AI Significance Statement */}
        <section className="bg-amber-950/20 border border-amber-500/30 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl">⚖️</div>
            <h3 className="text-amber-300 font-bold text-lg uppercase tracking-wider">Forensic Significance Statement</h3>
          </div>
          <div className="space-y-4 text-zinc-300 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Georgia', serif" }}>
            <p>
              The CTO Breach Appointment document published here is primary-source evidence of the most intimate mechanism by which the mental health system in Australia has been deployed as an instrument of political targeting against Dr. Richard William McLean. A Community Treatment Order compels a person to attend medical appointments, take prescribed medications, and comply with specified conditions — all backed by the threat of forced psychiatric hospitalisation if the order is breached. It is, in effect, a form of legally sanctioned coercive control over a person's body, movements, and time — issued not by a court in adversarial proceedings but by a clinical authority whose assessment is not independently verifiable in real time.
            </p>
            <p>
              The forensic significance of this document lies in its timing and context. On April 15, 2026, Dr. McLean reported a credible death threat to AbleCare — his NDIS-funded housing provider. Police attended and deliberately withheld the incident number. AbleCare CEO Rachel terminated the recorded call without filing a police report or SIRS (Serious Incident Response Scheme) report. Dr. McLean sent written notice to Brett Butler (AbleCare support worker) stating that AbleCare would be complicit in his murder if it did not act. None of these communications prompted any protective action. Into this vacuum — in which law enforcement declined to protect a person from a documented murder threat — the mental health compliance apparatus remained operative, requiring Dr. McLean's attendance at a CTO appointment. The asymmetry is the evidence: the state will not protect him from death, but it will compel him to attend a psychiatric appointment.
            </p>
            <p>
              This pattern is consistent with the internationally documented phenomenon of mental health weaponisation against dissidents, whistleblowers, and human rights defenders. In the Soviet Union it was called 'psikhushka' — the use of psychiatric diagnosis to suppress political opposition. In Australia, it does not require a conspiracy; it requires only a system in which psychiatric assessors are not independent of the institutions against which a person is complaining, and in which the clinical record of a 35-year whistleblower is written, in part, by the very system they are exposing. The presence of this CTO Breach Appointment in the archive — alongside 2,304 other documents, 845 blockchain timestamp seals, and submissions to the ICC, UNHCR, and Federal Court — means it cannot be dismissed as an isolated clinical event. It is the latest chapter in a 35-year documented sequence.
            </p>
          </div>
        </section>

        {/* The Specific Sequence — Death Threat + CTO */}
        <section>
          <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-red-400" />
            The Documented Sequence — April 2026
          </h3>
          <div className="space-y-4">
            {PROPOSITIONS.map((p) => {
              const bg = p.severity === "critical" ? "bg-red-950/20 border-red-500/30" : "bg-orange-950/20 border-orange-500/25";
              const labelColor = p.severity === "critical" ? "text-red-300" : "text-orange-300";
              const bodyColor = p.severity === "critical" ? "text-red-100/80" : "text-orange-100/80";
              return (
                <div key={p.id} className={`rounded-xl border p-5 ${bg}`} data-testid={`proposition-${p.id}`}>
                  <div className="flex items-start gap-3">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded flex-shrink-0 ${p.severity === "critical" ? "bg-red-900/60 text-red-300" : "bg-orange-900/60 text-orange-300"}`}>{p.id}</span>
                    <div>
                      <p className={`font-bold text-sm mb-2 ${labelColor}`}>
                        {p.label}
                        <span className={`ml-2 text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${p.severity === "critical" ? "bg-red-500/20 text-red-400" : "bg-orange-500/20 text-orange-400"}`}>
                          {p.severity.toUpperCase()}
                        </span>
                      </p>
                      <p className={`text-sm leading-relaxed ${bodyColor}`}>{p.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Legislation */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Scale className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <h3 className="text-2xl font-serif font-bold text-white">Relevant Legislation — Legally Fortified Analysis</h3>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-3xl">
            The following legislation is directly applicable to the CTO Breach Appointment document and the surrounding sequence of events. Each provision is linked to the primary legislative source. This analysis forms part of Dr. McLean's formal submission record before the International Criminal Court and UNHCR.
          </p>
          <div className="space-y-5">
            {LEGISLATION.map((leg) => (
              <div
                key={leg.id}
                className={`rounded-xl border p-5 ${leg.severity === "CRITICAL" ? "bg-blue-950/20 border-blue-500/30" : "bg-zinc-900/40 border-zinc-700/50"}`}
                data-testid={`legislation-${leg.id}`}
              >
                <div className="flex items-start gap-3 flex-wrap">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 flex-shrink-0">{leg.id}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <a
                        href={leg.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-bold text-sm hover:underline flex items-center gap-1 ${leg.severity === "CRITICAL" ? "text-blue-300" : "text-zinc-200"}`}
                        data-testid={`link-legislation-${leg.id}`}
                      >
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        {leg.title}
                      </a>
                      <SeverityBadge s={leg.severity} />
                    </div>
                    <p className="text-xs font-mono text-zinc-500 mb-2">{leg.shortRef}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{leg.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Link to AbleCare Call */}
        <section className="bg-red-950/20 border-2 border-red-500/40 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <FileText className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-red-300 font-bold text-xl mb-3">The AbleCare Call — Companion Evidence</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Georgia', serif" }}>
                The recorded phone call to AbleCare CEO Rachel and support worker Brett on April 15, 2026 — in which the death threat was reported, a duty of care was acknowledged and then abandoned, and a request for emergency relocation was met with "days or weeks" — is the primary companion exhibit to this CTO Breach Appointment document. Taken together, these two documents define the operational architecture of the targeting: compulsory mental health compliance enforced against the same person whose physical safety was deliberately ignored by law enforcement and abandoned by an NDIS provider. The call is transcribed, forensically annotated, and published in full on this site.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/ablecare-murder-threat-call"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-red-800 hover:bg-red-700 rounded-xl text-sm text-white font-bold transition-colors"
                  data-testid="link-companion-ablecare"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read Full AbleCare Transcript
                </a>
                <a
                  href="/police-complicity-death-threat-documentation"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 rounded-xl text-sm text-zinc-300 font-semibold transition-colors"
                  data-testid="link-police-complicity"
                >
                  <Shield className="w-4 h-4" />
                  Police Complicity Documentation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Specific Challenge to CTO Use */}
        <section className="bg-zinc-900/60 border border-zinc-700/50 rounded-2xl p-6 md:p-8" style={{ fontFamily: "'Georgia', serif" }}>
          <div className="flex items-center gap-3 mb-4">
            <Gavel className="h-5 w-5 text-amber-400" />
            <h3 className="text-amber-300 font-bold text-lg">Formal Challenge — CTO Engagement During Active Threat</h3>
          </div>
          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p>
              Dr. Richard William McLean formally places on public record — through publication of this document and this analysis — his challenge to the legitimacy of any CTO compliance requirement issued against him while:
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-4 text-zinc-400">
              <li>He was under a credible, documented death threat from an identified individual (Tory Kilborn) and associated persons;</li>
              <li>NSW Police attended his premises and deliberately withheld an incident report — removing the threat from official records;</li>
              <li>AbleCare CEO Rachel acknowledged a legal duty of care on a recorded call, then terminated the call without action;</li>
              <li>No mandatory SIRS incident report was filed by AbleCare within the required 24-hour window;</li>
              <li>His access to legal representation before the Mental Health Review Tribunal was obstructed by the Public Guardian — an office identified in his documentary archive as a key actor in coordinated financial abuse;</li>
              <li>His primary submissions documenting 35 years of institutional persecution were before the International Criminal Court under Article 7 (Crimes Against Humanity) and before the UNHCR (Geneva).</li>
            </ol>
            <p>
              The engagement of compulsory mental health compliance mechanisms in these circumstances — without any of the above facts being placed before the assessing clinician or the Mental Health Review Tribunal — represents a failure of procedural fairness that is independently reviewable under the Mental Health Act 2007 (NSW), the NDIS Act 2013 (Cth), the Disability Discrimination Act 1992 (Cth), the CRPD, and the ICCPR.
            </p>
            <p>
              This challenge is published at <strong className="text-white">barrandodger.com/cto-breach-appointment</strong> and constitutes a formal public record of the objection. It cannot be administratively lost, referral-looped, or silently filed. The evidence chain is blockchain-verified, globally distributed, and submitted to international courts.
            </p>
            <p className="text-amber-400 font-semibold">
              ABN 78 833 496 164 · Barran Dodger Legal &amp; Ethical Trust Fund · 22 April 2026
            </p>
          </div>
        </section>

        {/* Download CTA */}
        <section className="bg-zinc-900/40 border border-zinc-700/40 rounded-2xl p-6 text-center space-y-4">
          <h3 className="text-white font-bold text-xl">Download the Primary Document</h3>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto">
            The CTO Breach Appointment PDF is the primary source document for this analysis. Download it, share it, and submit it to any authority you believe can act on it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ViralDownloadButton
              url={`/documents/${DOC_FILE}`}
              label="Download CTO Breach Appointment"
              filename={DOC_FILE}
              slug={SLUG}
              size="lg"
              className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl"
              data-testid="btn-download-cto-bottom"
            />
          </div>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved.
            Shared freely for public interest and accountability purposes.
          </p>
        </section>

        {/* Links */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          {[
            { href: "/forensic-analysis", label: "Forensic Analysis Index", icon: BookOpen },
            { href: "/testimony-archive", label: "The Testimony Archive — $3.33", icon: FileText },
            { href: "/urgent-protection-request", label: "Urgent Protection Request", icon: Shield },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-3 p-4 rounded-xl border border-zinc-700/50 bg-zinc-900/40 hover:bg-zinc-800/60 text-zinc-300 transition-colors"
              data-testid={`link-nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Icon className="w-5 h-5 text-amber-400 flex-shrink-0" />
              {label}
            </a>
          ))}
        </section>

        {/* ABN Footer */}
        <section className="text-center border-t border-zinc-800 pt-8 pb-4">
          <div className="text-xs text-zinc-600 space-y-1">
            <p className="font-semibold text-zinc-500">Barran Dodger Legal &amp; Ethical Trust Fund</p>
            <p>ABN 78 833 496 164</p>
            <p>55B Archbold Road, Long Jetty NSW 2261</p>
            <p className="mt-2">© {new Date().getFullYear()} Dr. Richard William McLean. All evidence copyright protected and submitted to international human rights bodies.</p>
          </div>
        </section>

      </div>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
