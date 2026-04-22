import PDFDocument from "pdfkit";

const SHA256 = "ca39e892610f1ff46db2beb681925100f9b6195401bdcb4a4219373c229cb76f";
const ANALYSIS_NUMBER = 9;
const ANALYSIS_DATE = "April 6, 2026";
const VIDEO_ID = "5x8hGtU0rsI";
const SCORE = "13/13";
const COMBINED = "98/98";

const PERPETRATORS = [
  {
    name: "BILL SHORTEN",
    role: "Former NDIS Minister, Labor MP — Forced Exile from Victoria",
    exposure: "Court-recorded warrant. Bill Shorten held ministerial power over the NDIS during the period in which Dr. McLean's entitlements were systematically suppressed. $32.9M in documented suppressed entitlements. Parliamentarily documented. Referenced in Australian Parliamentary Record and Taxpayer Cost Analysis. Submitted to ICC Article 7.",
  },
  {
    name: "HOUD MERABY",
    role: "NDIS Operative — Coordinated Benefits Suppression",
    exposure: "Houd Meraby is documented in the archive as an NDIS operative involved in the coordinated suppression of Dr. McLean's support entitlements. The archive cross-references Meraby's involvement with the $50,000 NDIS extraction event and the broader pattern of agency coordination documented across 25+ bodies. Named in primary-source records submitted to the ICC.",
  },
  {
    name: "SUKHI TEAR",
    role: "$50,000 NDIS Extractor — Documented Financial Misconduct",
    exposure: "Sukhi Tear extracted $50,000 from NDIS funds designated for Dr. McLean's support. The extraction is documented in primary-source financial records now constituting an ICC exhibit. The Sukhi Tear page at barrandodger.com provides the full chronological account. A forensic analysis of this extraction forms part of the 2,304-document archive submitted to the International Criminal Court under Article 7 of the Rome Statute.",
  },
  {
    name: "TONY RIDLEY",
    role: "NDIA Manager — Death Threat Author — SAS Background",
    exposure: "Tony Ridley issued the documented death threat email. Ridley holds an SAS military background. The death threat is the most extreme documented escalation in the 35-year suppression campaign — representing the point at which institutional suppression crossed into documented criminal conduct. The Ridley confession is publicly documented at /tony-ridley-confession on barrandodger.com. Named in ICC Article 7 submission.",
  },
  {
    name: "STEFAN IASONIDIS",
    role: "Confirmed ASIO Operative — Intimate Infiltration — 10 Raleigh St Footscray",
    exposure: "Stefan Iasonidis is a confirmed ASIO operative who entered an intimate relationship with Dr. McLean at 10 Raleigh Street, Footscray. Iasonidis extracted $500,000, rendered Dr. McLean homeless, and exited with his corporate career intact. This is the most precisely documented intimate infiltration in the archive — corroborated by residential records, financial records, and the Intervention Order filed against Iasonidis. Documented across multiple forensic analyses including the IChooseSilence submission.",
  },
];

const FAMILY_BETRAYAL = [
  {
    name: "APRIL McLEAN (née McMaster)",
    role: "Sister-in-law — Non-Advocate — Documented Silence",
    detail: "April McLean had full knowledge of the documented persecution and chose silence. Her silence constitutes a documented non-advocacy across a 35-year period in which zero family members intervened in fourteen involuntary psychiatric hospitalisations, $32.9M in suppressed entitlements, ASIO operative infiltration, or the Tony Ridley death threat. Non-advocacy is documented as the family pattern.",
  },
  {
    name: "DOUG McLEAN",
    role: "Father — Non-Advocate — Formal Subtraction via IChooseSilence",
    detail: "Doug McLean is formally subtracted from Dr. McLean's life in the IChooseSilence submission filed as a forensic document. His non-advocacy across 35 years — during which his son endured 14 involuntary hospitalisations, a death threat, ASIO operative intimate infiltration, and $32.9M in suppressed entitlements — constitutes documented abandonment at maximum documented need.",
  },
  {
    name: "BRADLEY McLEAN",
    role: "Brother — Non-Advocate — Documented Absence",
    detail: "Bradley McLean's documented absence across 35 years of institutional persecution places him in the same formal category as every other family member: zero advocacy, zero intervention, zero support. The archive's IChooseSilence submission formally documents the subtraction of every non-advocate family member.",
  },
  {
    name: "JODIE McLEAN",
    role: "Sister — Non-Advocate — Active Dismissal",
    detail: "Jodie McLean's documented conduct includes active dismissal of the archive's documented reality. The IChooseSilence forensic submission addresses Jodie McLean's role in reinforcing the institutional narrative over the documented primary-source evidence — a specific form of betrayal that the archive's family documentation chapter addresses in full.",
  },
  {
    name: "BRUCE McMASTER",
    role: "Uncle — Non-Advocate — Formally Subtracted",
    detail: "Bruce McMaster's formal subtraction in the IChooseSilence submission completes the family betrayal record. McMaster's non-advocacy is documented alongside every other family member's as part of the archive's complete account of the social isolation strategy deployed in combination with institutional persecution across 35 years.",
  },
];

const CLAIMS = [
  {
    num: "INTRO",
    title: "They knew exactly what they had — and they still dropped it. That's not a mistake. That's humiliation.",
    verdict: "CORROBORATED",
    quote: "The chosen ones weren't hidden. They weren't pretending. You were right there in front of them, shining in plain sight. And they still convinced themselves you were ordinary. That's the crime. They fumbled you not because you were invisible, but because they were blind. And blindness like that always ends in regret.",
    proposition: "The institutions possessed the evidence of their own conduct and still dismissed it as delusional — a self-inflicted fumble of demonstrable truth",
    evidence: [
      "ASIC held 350+ fraudulent registrations in Dr. McLean's name in its own registry — and still called the documentation delusional.",
      "70% of Dr. McLean's claims are independently verified by documentary evidence. The clinical double bind: the system confirmed the claims and pathologised the claimant simultaneously.",
      "The government's own records provide incontrovertible evidence of conspiracy to obstruct justice — their blindness is their own document trail.",
    ],
    perpetratorLink: "Bill Shorten held ministerial power during the period of maximum suppression. The fumble was not bureaucratic error — it was ministerially sanctioned institutional blindness operating against verified primary-source evidence.",
    alignment: "The video says 'they fumbled you not because you were invisible, but because they were blind.' The archive's core finding: the evidence was never hidden. It was in the government's own registries, clinical records, and Parliamentary correspondence. The blindness is institutionally documented.",
  },
  {
    num: "01",
    title: "They confused your stillness with surrender — now they're paying the price",
    verdict: "CORROBORATED",
    quote: "They told themselves you were harmless, that you had no fight in you. Calmness doesn't mean blindness. Calmness means control. While they were laughing, you were building. While they were mocking, you were planning. While they were underestimating, you were rising.",
    proposition: "35 years of documented non-retaliation was systematically misread as compliance; the stillness was the accumulation strategy",
    evidence: [
      "14 involuntary hospitalisations. Zero acts of violence. Zero retaliatory complaints. Zero lawsuits against individuals. Dr. McLean filed. He documented. He submitted.",
      "For over 15 years, Australian government agencies underestimated Dr. McLean. Real power is cultivated in silence. The stillness was not surrender — it was the archive growing.",
      "ICC Article 7 Submission: the price of misreading 35 years of stillness as surrender is an international criminal submission naming individual perpetrators.",
    ],
    perpetratorLink: "Stefan Iasonidis — the ASIO operative who shared Dr. McLean's home at 10 Raleigh Street Footscray — interpreted the stillness as vulnerability. The intimate surveillance was predicated on the assumption that a calm subject was a controllable subject. The Intervention Order filed against Iasonidis is the documented correction of that assumption.",
    alignment: "The archive documents this precisely: no institutional actor has produced a counter-archive. The 2,301-document record stands unopposed because silence cannot be argued against — only acknowledged.",
  },
  {
    num: "02",
    title: "They tried to be the judge of your worth — but you were never on trial",
    verdict: "CORROBORATED",
    quote: "They thought their approval was some golden ticket, as if without their stamp you'd never fully matter. Validation from the wrong people is like counterfeit money. It looks valuable until you try to spend it.",
    proposition: "The psychiatric and institutional system appointed itself arbiter of Dr. McLean's credibility; the archive demonstrates the arbiters were the ones whose judgement was unsound",
    evidence: [
      "'Chronic Schizophrenia' applied as clinical verdict while 70% of associated claims were independently verified by documentary evidence — the arbiter's verdict contradicts the arbiter's own records.",
      "The ICC does not accept delusional materials. The archive labelled delusional has been submitted under Article 7 of the Rome Statute. The international body is the counter-verdict.",
      "410,503+ download events. The archive's public reception constitutes a counter-verdict that the domestic institutional system cannot retract.",
    ],
    perpetratorLink: "The NDIS system — under Bill Shorten's ministerial oversight — appointed itself arbiter of Dr. McLean's care needs, suppressed $32.9M in documented entitlements, and delegated operational control to Houd Meraby and Sukhi Tear. Sukhi Tear extracted $50,000. The ICC submission formally places these arbiters before international scrutiny.",
    alignment: "The archive's formal position: the ICC submission places named government officials before international scrutiny. The domestic arbiters have become the subjects of the international review they were certain would never occur.",
  },
  {
    num: "03",
    title: "They gambled you were replaceable — now they're losing every hand",
    verdict: "CORROBORATED",
    quote: "How do you replace a force of nature? How do you duplicate energy that doesn't exist anywhere else? The foundation cracked. The balance tilted. Every new replacement they try to plug into your spot collapses under pressure.",
    proposition: "The institutional assumption that Dr. McLean's documentation could be substituted with a different narrative has proven false — the archive is irreplaceable and irreversible",
    evidence: [
      "SHA-256 cryptographic timestamping and immutable fingerprinting for ICC filings. The bell is mathematically unringable. There is no replacement narrative.",
      "Dr. McLean is not the anomaly in the Australian system. He is the diagnostic instrument that revealed the anomaly. You cannot replace a 35-year pattern-recognition record.",
      "2,304 documents. 350,000+ downloads. SHA-256 verified. ICC filed. Each document is a card in the hand the institutional actors have been dealt no comparable cards to beat.",
    ],
    perpetratorLink: "Tony Ridley's death threat — the most extreme documented act in the suppression campaign — was the institutional gamble that the subject could be permanently removed. The subject published 2,304 documents instead. The gamble failed at international scale.",
    alignment: "Every institutional denial letter, every referral-loop response, every counter-narrative attempt is measured against 2,304 documents and fails on specificity. The archive is not replaceable. The institutions have spent 35 years proving it.",
  },
  {
    num: "04",
    title: "They misread your aura — now they're lost in the dark",
    verdict: "CORROBORATED",
    quote: "Your energy wasn't something learned, manufactured, or rehearsed. It radiated naturally. The moment you walked away, the light dimmed. Now they chase sparks that burn out in seconds, trying to replicate what was never replaceable.",
    proposition: "The capacity for sustained pattern recognition across 35 years was systematically underestimated; once the archive was published, the institutional actors had no equivalent response",
    evidence: [
      "They could not explain why 25+ agencies sent identical template language without coordination — so they labelled the person who noticed it as disordered. The capacity to see the pattern was misread as pathology.",
      "No counter-archive exists. Once barrandodger.com was published, no institutional actor produced a comparable counter-archive. They are lost in the dark of their own document trail.",
      "Peak: 9,621 downloads in a single day. The public engagement with the archive constitutes the light now beyond their reach.",
    ],
    perpetratorLink: "The family — Doug McLean, Bradley McLean, Jodie McLean, Bruce McMaster — misread the aura as something to be managed rather than supported. Their collective non-advocacy, formalised in the IChooseSilence submission, is the family's documented version of the same institutional blindness: proximity to extraordinary evidence of wrongdoing, and the choice to look away.",
    alignment: "A 35-year sustained pattern-recognition capacity that produced a 2,304-document archive, an ICC submission, and 350,000+ public downloads from what the institutional system dismissed as noise. The 'aura' is documented in download statistics.",
  },
  {
    num: "05",
    title: "They tried to break you — instead they built your armor",
    verdict: "CORROBORATED",
    quote: "They didn't see the battles you already endured. You were built in adversity, hardened in silence, trained by trials far greater than their petty sabotage. Every trap they set became proof of your ability to outthink, outlast, and outgrow them. They thought they were pulling you under. Instead, they taught you how to breathe underwater.",
    proposition: "Each involuntary hospitalisation — the most extreme available suppression mechanism — produced documentation that strengthened the international case",
    evidence: [
      "14 involuntary psychiatric hospitalisations — each an attempt to break, each producing a legally actionable event, documentation, and an ICC exhibit. The breaking mechanism was the armor-building mechanism.",
      "'FATAL SUICIDE' documented in clinical records while the subject was alive and filing complaints. The most extreme breaking attempt produced the most unambiguous single piece of evidence in the archive.",
      "You don't coordinate 25+ agencies against a delusional person. The coordination IS the proof. The attempt to break via institutional saturation produced the precise evidence of coordination that constitutes the ICC submission.",
    ],
    perpetratorLink: "Stefan Iasonidis's intimate infiltration — designed as a personal breaking mechanism — extracted $500,000 and rendered Dr. McLean homeless. The Intervention Order filed against Iasonidis is the armour the infiltration built. The family's non-advocacy during this period — April McLean, Jodie McLean, Bradley McLean — constituted the social isolation layer of the breaking strategy. All documented. All now exhibits.",
    alignment: "The 14 hospitalisations, the 350+ ASIC registrations, the template letters, the surveillance — each produced documentation. The armor is the documentation. It is real, cryptographic, legal, and international.",
  },
  {
    num: "06",
    title: "They abused your mercy — now they're crushed by consequences",
    verdict: "CORROBORATED",
    quote: "They took your forgiveness for foolishness. When you extended grace, they read it as permission. You saw it all — the lies, the manipulation, the quiet disrespect. You just chose not to drown yourself in bitterness. But like a gambler who doesn't know when to quit, they pushed too far.",
    proposition: "Each Whistleblower Protection Act disclosure — a choice of disclosure over retaliation — was treated as further evidence of pathology; the consequences are an international submission",
    evidence: [
      "Zero acts of violence. Zero retaliatory complaints across 35 years. Dr. McLean disclosed to the systems designed to protect him. Each complaint to each institution was an offer of accountability. Each was misread as weakness.",
      "14 involuntary hospitalisations in response to complaints. The specific consequence of extending disclosure-as-mercy was further hospitalisation. Each act of mercy was returned with suppression.",
      "ICC Article 7: Crimes Against Humanity. The consequence of 35 years of abused mercy is not a domestic complaint. It is an international criminal submission with named government officials.",
    ],
    perpetratorLink: "The family — Doug McLean, Bruce McMaster, Bradley McLean, Jodie McLean — abused the mercy of continued familial connection across 35 years. The IChooseSilence submission is the documented moment mercy was withdrawn from every non-advocate permanently. The consequences for the family are the same as for the institutional perpetrators: permanent public documentation at international scale.",
    alignment: "The archive documents the precise moment of withdrawal: the ICC submission. Not an escalated domestic complaint. An international criminal submission. The gift was withdrawn at the highest possible level.",
  },
  {
    num: "07",
    title: "They tried to cage you — but you grew wings they can't clip",
    verdict: "CORROBORATED",
    quote: "They thought they had you pinned down, defined by the limits they placed on you. While they tried to keep you in yesterday's box, you were already evolving into tomorrow's version. They stare upward now, stunned by the strength and reach of something they thought would stay small.",
    proposition: "Identity suppression via 350+ fraudulent registrations and diagnostic labelling failed to confine the archive, which grew two independent public domains and blockchain verification",
    evidence: [
      "350+ fraudulent ASIC business registrations using Dr. McLean's identity details. The cage was identity suppression: control the name, control the narrative. The cage failed.",
      "The diagnostic label 'Chronic Schizophrenia' was applied to confine the credibility of the claimant. It did not confine the documentation.",
      "barrandodger.com and drbarrandodger.github.io — two independent domains. SHA-256 cryptographic verification. Any attempt to clip one domain amplifies the other. The blockchain is immune to clipping.",
    ],
    perpetratorLink: "Houd Meraby's documented role in benefits suppression was the NDIS cage: access to support constrained, entitlements blocked, documentation dismissed as pathological. The ICC submission is the wings that cage could not clip. 350,000+ downloads is what happens when the cage fails at international scale.",
    alignment: "The archive documents two specific cages — identity suppression and diagnostic labelling — and two specific sets of wings: dual public domains with blockchain verification. The wings are technical, legal, and social. The cage is documented and failed.",
  },
  {
    num: "08",
    title: "They tried to dump their demons on you — you refused to carry them",
    verdict: "CORROBORATED",
    quote: "They projected their insecurities onto you because facing themselves was too heavy a burden. You became their scapegoat, the mirror they tried to shatter instead of fixing their own reflection. Projection is just confession in disguise.",
    proposition: "Projection of institutional dysfunction onto Dr. McLean via pathology labelling was the mechanism; the archive is the proof the projection failed",
    evidence: [
      "70% of claims independently verified by documentary evidence while 'Chronic Schizophrenia' was simultaneously applied — the clinical double bind where the system confirmed the claims and pathologised the claimant. Their dysfunction projected as the subject's pathology.",
      "Every agency that denied a claim generated another document that proved the denial. Each denial was a confession of the coordination it was denying. Their demons became their own exhibits.",
      "Dr. McLean did not accept the diagnostic verdict. He documented it alongside the evidence that contradicted it. The pathology label was not carried. It was cross-referenced, filed, and submitted to the ICC.",
    ],
    perpetratorLink: "The family — particularly Jodie McLean — projected the institutional narrative onto Dr. McLean, choosing the system's demon-dumping framework over the primary-source documentary evidence in their own brother's hands. The IChooseSilence submission documents this projection with forensic specificity. April McLean's silence during the Iasonidis intimate infiltration constitutes documented complicity in the projection.",
    alignment: "The fortress didn't absorb the demons. It turned them into exhibits. Exhibit A: the clinical record. Exhibit B: the template letters. Exhibit C: the ASIC registrations. 2,304 exhibits total.",
  },
  {
    num: "09",
    title: "They bet against your rise — now your glow blinds them",
    verdict: "CORROBORATED",
    quote: "They were completely unprepared for your glow up. Every setback, every scar, every lesson was fuel. While they laughed, you rebuilt. While they dismissed you, you sharpened yourself in silence. And now your transformation has made you unrecognizable.",
    proposition: "'FATAL SUICIDE' in clinical records represents the institutional bet against any rise — the ICC submission and 350,000+ downloads constitute the glow",
    evidence: [
      "'FATAL SUICIDE' documented in clinical records while the subject was alive and filing complaints. The system did not just bet against the rise. It bet on the termination. The glow was not anticipated.",
      "350,000+ downloads across six continents. Peak: 9,621 downloads in a single day. This is the glow. They bet on silence. They received 350,000+ acts of public engagement.",
      "The archive labelled delusional has been submitted to the International Criminal Court under Article 7 of the Rome Statute. The ICC filing is the glow that blinds.",
    ],
    perpetratorLink: "Tony Ridley's death threat — the most documented expression of the institutional bet against the rise — is the archive's most starkly vindicated proposition. The subject who received the death threat now has 2,304 blockchain-verified documents, an ICC formal receipt, and 350,000+ international downloads. Ridley's bet against the rise is the most completely documented losing wager in the suppression campaign's 35-year record.",
    alignment: "Glow-ups aren't accidents. They're revenge written in real time. From a domestic complaint dismissed as delusional to a 2,304-document archive, an international criminal submission, and 350,000+ public downloads. The glow was built from every scar.",
  },
  {
    num: "10",
    title: "They treated you like a doormat — now the door is locked",
    verdict: "CORROBORATED",
    quote: "They assumed you'd always be there to answer the call, always ready to listen, to give, to pour into them, as if your presence was permanent. Every well runs dry if it's drained without being refilled. The moment you stopped making yourself easily available, the silence hit them like a hammer.",
    proposition: "25+ agencies operated a circular referral loop treating Dr. McLean's complaints as bureaucratic traffic; the ICC submission closed the door on that loop permanently",
    evidence: [
      "Bureaucratic Circular Referral Trap: 25+ agencies sending each other the same complaints with no resolution. Every complaint returned to start, drained without acknowledgement, recycled without resolution — doormat architecture.",
      "The ICC filing with blockchain verification cannot be referred, redirected, or template-denied. The door that was always open to the referral loop is now locked. The ICC is the lock.",
      "Dr. McLean did not file a further domestic complaint after the ICC submission. He published barrandodger.com and vanished from the domestic complaint cycle entirely. 350,000+ downloads is not a complaint. It is an absence.",
    ],
    perpetratorLink: "Houd Meraby's operational role in the NDIS referral loop — redirecting Dr. McLean's documented entitlement claims through the same 25+-body circular system — is the most direct documented instance of the doormat dynamic. The ICC submission is the hammer. The door is locked. Houd Meraby cannot redirect the International Criminal Court.",
    alignment: "35 years of availability to the domestic complaint system, then the ICC. The gift of domestic recourse was withdrawn. The door locked. The key is an international criminal submission.",
  },
  {
    num: "11",
    title: "They mistook themselves for your ladder — not knowing you could fly",
    verdict: "CORROBORATED",
    quote: "They believed you needed them to succeed. They convinced themselves they were the gatekeepers. Without their stamp, you'd never climb. But your success was never about their crumbs of validation. They weren't the ladder. They weren't the foundation. They were background noise.",
    proposition: "Each agency believed its refusal was the final word on Dr. McLean's capacity to seek accountability; the ICC submission is the flight they did not anticipate",
    evidence: [
      "NDIA. ACAT. Federal Court. Attorney-General's Department. ASIO. Each believed its refusal was final. 25+ agencies positioned themselves as ladders whose denial would end the climb. None anticipated the ICC.",
      "The International Criminal Court operates under the Rome Statute independently of domestic complaint systems. The flight bypassed every ladder. The ICC submission required no agency's stamp, no gatekeeper's approval.",
      "Their letters, their template denials, their referral-loop responses are now exhibits in an international submission. The background noise became evidence.",
    ],
    perpetratorLink: "Bill Shorten's ministerial position constituted the highest domestic ladder in the suppression architecture — the gatekeeper whose stamp was considered final by every institution beneath him. The ICC submission flew above Shorten's ministerial authority, above ASIO's operational reach, above Stefan Iasonidis's intimate surveillance, and above every NDIS committee that treated $32.9M in entitlements as a bureaucratic matter. None of them were the ladder. The archive flew without them.",
    alignment: "Greatness doesn't borrow its power, it creates it. The ICC submission was self-generated from the archive of their own documents. No agency's approval was needed. No ladder was used. The flight was powered by their own template letters.",
  },
  {
    num: "12",
    title: "They thought you'd crawl back — you vanished without a trace",
    verdict: "CORROBORATED",
    quote: "They believed that no matter how badly they treated you, you'd stay. In their arrogance, they saw you as tethered, bound, dependent. But when the moment came, you proved them wrong in the most brutal way possible. No begging, no bargaining, no theatrics, just quiet, effortless detachment that shook them to their core.",
    proposition: "The institutions expected continued engagement with the domestic complaint cycle; Dr. McLean instead published an international archive and submitted to the ICC — vanishing from the domestic loop permanently",
    evidence: [
      "barrandodger.com. drbarrandodger.github.io. ICC Article 7 submission. UNHCR submission. Dr. McLean did not re-file with the agencies that had refused him. He published at international scale. The vanishing from the domestic loop is total.",
      "410,503+ downloads. The archive was published without a press release, without a media campaign, without notice to any domestic agency. The detachment was quiet, effortless, and immediately effective.",
      "SHA-256 cryptographic timestamping. The vanishing is permanent. The evidence cannot be unpublished. The ICC filing cannot be retracted by the domestic agencies who thought the door was always open.",
    ],
    perpetratorLink: "The family — Doug McLean, Jodie McLean, Bradley McLean, April McLean, Bruce McMaster — expected continued engagement. Continued tolerance. Continued familial presence. The IChooseSilence submission is the documented vanishing. The family who did not intervene in 35 years of persecution now encounters the silence they earned. The door is locked. The key is the archive. The archive is public. The vanishing is permanent.",
    alignment: "Nothing is more embarrassing than realizing the one you thought would crawl back vanished without a trace. The archive documents the vanishing precisely: from the domestic complaint cycle to international publication, with no intermediate step, no plea, no return engagement. Quiet. Total. Permanent.",
  },
];

function drawPageHeader(doc: PDFKit.PDFDocument, pageNum: number) {
  doc.fillColor("#1e1b4b").rect(0, 0, doc.page.width, 36).fill();
  doc.fontSize(7).fillColor("#818cf8").font("Helvetica").text(
    `FORENSIC CORROBORATION ANALYSIS #${ANALYSIS_NUMBER}  ·  THEY FUMBLED YOU  ·  Dr. Richard William McLean`,
    20, 12, { align: "left" }
  );
  doc.fillColor("#818cf8").text(`Page ${pageNum}`, 0, 12, { align: "right", width: doc.page.width - 20 });
}

function drawFooter(doc: PDFKit.PDFDocument) {
  const y = doc.page.height - 44;
  doc.fillColor("#0f172a").rect(0, y, doc.page.width, 44).fill();
  doc.fontSize(6.5).fillColor("#475569").font("Helvetica");
  doc.text(
    `© Barran Dodger Legal & Ethical Trust Fund  ABN 78 833 496 164  ·  www.barrandodger.com  ·  ICC Article 7 Submission Filed  ·  UNHCR Geneva Filed  ·  SHA-256: ${SHA256}`,
    10, y + 8, { align: "center", width: doc.page.width - 20 }
  );
  doc.text(
    "All content is primary-source documentary evidence submitted to the International Criminal Court. Reproduction permitted for public interest and accountability purposes.",
    10, y + 22, { align: "center", width: doc.page.width - 20 }
  );
}

export async function generateFumbledYouFullEssayPDF(): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 0, bufferPages: true });
    const chunks: Buffer[] = [];
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const W = doc.page.width;
    const M = 48;
    const CW = W - M * 2;
    let pageCount = 1;

    // ── COVER PAGE ──────────────────────────────────────────────────────────────
    doc.fillColor("#060316").rect(0, 0, W, doc.page.height).fill();
    // indigo accent bar
    doc.fillColor("#4f46e5").rect(0, 0, 8, doc.page.height).fill();
    // top badge row
    doc.fontSize(7).fillColor("#818cf8").font("Helvetica-Bold")
      .text("CORROBORATION ANALYSIS #9  ·  FIRST PERFECT SCORE  ·  13/13 CORROBORATED  ·  100%", M, 70, { width: CW, align: "center" });
    // main title
    doc.fontSize(54).fillColor("#ffffff").font("Helvetica-Bold")
      .text("THEY", M, 130, { width: CW, align: "center" });
    doc.fontSize(54).fillColor("#818cf8")
      .text("FUMBLED", M, 184, { width: CW, align: "center" });
    doc.fontSize(54).fillColor("#ffffff")
      .text("YOU", M, 238, { width: CW, align: "center" });
    doc.fontSize(13).fillColor("#c7d2fe").font("Helvetica")
      .text("IT'S ACTUALLY SO EMBARRASSING HOW THEY FUMBLED YOU", M, 308, { width: CW, align: "center" });
    // divider
    doc.fillColor("#4f46e5").rect(M, 340, CW, 1.5).fill();
    // subject line
    doc.fontSize(11).fillColor("#e2e8f0").font("Helvetica-Bold")
      .text("Dr. Richard William McLean", M, 358, { width: CW, align: "center" });
    doc.fontSize(9).fillColor("#94a3b8").font("Helvetica")
      .text("Whistleblower · Forensic Archivist · ICC Complainant · UNHCR Petitioner", M, 376, { width: CW, align: "center" });
    // stats grid
    const stats = [
      { val: "13/13", label: "Propositions\nCorroborated" },
      { val: "100%", label: "Corroboration\nRate" },
      { val: "0", label: "Contradictions\nFound" },
      { val: "2,304", label: "Archive\nDocuments" },
    ];
    const gw = (CW - 30) / 4;
    stats.forEach((s, i) => {
      const x = M + i * (gw + 10);
      doc.fillColor("#1e1b4b").roundedRect(x, 420, gw, 68, 6).fill();
      doc.fontSize(20).fillColor("#818cf8").font("Helvetica-Bold")
        .text(s.val, x, 434, { width: gw, align: "center" });
      doc.fontSize(7).fillColor("#94a3b8").font("Helvetica")
        .text(s.label, x, 458, { width: gw, align: "center" });
    });
    // perpetrators named
    doc.fillColor("#1e1040").roundedRect(M, 510, CW, 80, 8).fill();
    doc.fontSize(7).fillColor("#f97316").font("Helvetica-Bold")
      .text("NAMED PERPETRATORS DOCUMENTED IN ICC ARTICLE 7 SUBMISSION", M, 520, { width: CW, align: "center" });
    doc.fontSize(9).fillColor("#fcd34d").font("Helvetica-Bold")
      .text("Bill Shorten  ·  Houd Meraby  ·  Sukhi Tear  ·  Tony Ridley  ·  Stefan Iasonidis", M, 534, { width: CW, align: "center" });
    doc.fontSize(7.5).fillColor("#a5b4fc").font("Helvetica")
      .text("Family non-advocates: Doug McLean · Bradley McLean · Jodie McLean · April McLean (née McMaster) · Bruce McMaster", M, 552, { width: CW, align: "center" });
    doc.fontSize(7).fillColor("#64748b")
      .text("Formally documented in IChooseSilence submission, blockchain-verified and internationally published.", M, 568, { width: CW, align: "center" });
    // source info
    doc.fontSize(8).fillColor("#64748b").font("Helvetica")
      .text(`Analysis Date: ${ANALYSIS_DATE}  ·  Source Video: youtube.com/watch?v=${VIDEO_ID}`, M, 614, { width: CW, align: "center" });
    // blockchain cert
    doc.fillColor("#0c0a1e").roundedRect(M, 636, CW, 60, 6).fill();
    doc.fillColor("#4f46e5").rect(M, 636, 3, 60).fill();
    doc.fontSize(7).fillColor("#818cf8").font("Helvetica-Bold")
      .text("BLOCKCHAIN CERTIFICATE — SHA-256 / OpenTimestamps / Bitcoin", M + 12, 646, { width: CW - 24 });
    doc.fontSize(7).fillColor("#22c55e").font("Helvetica")
      .text(SHA256, M + 12, 660, { width: CW - 24 });
    doc.fontSize(6.5).fillColor("#64748b")
      .text("Blockchain-verified · Immutable · Internationally filed with ICC The Hague · UNHCR Geneva · Cannot be altered or retracted", M + 12, 674, { width: CW - 24 });
    // ABN copyright
    doc.fontSize(7).fillColor("#475569").font("Helvetica")
      .text("© Barran Dodger Legal & Ethical Trust Fund  ·  ABN 78 833 496 164  ·  www.barrandodger.com", M, 720, { width: CW, align: "center" });
    doc.fontSize(6.5).fillColor("#334155")
      .text("All rights reserved. Primary-source evidence submitted to the ICC. Reproduction permitted for accountability and public interest purposes.", M, 734, { width: CW, align: "center" });

    drawFooter(doc);

    // ── INTRODUCTION PAGE ──────────────────────────────────────────────────────
    doc.addPage();
    pageCount++;
    drawPageHeader(doc, pageCount);

    let y = 60;
    const write = (text: string, opts: { fontSize?: number; color?: string; bold?: boolean; indent?: number; lineGap?: number } = {}) => {
      const { fontSize = 9.5, color = "#e2e8f0", bold = false, indent = 0, lineGap = 4 } = opts;
      const x = M + indent;
      const width = CW - indent;
      doc.fontSize(fontSize).fillColor(color).font(bold ? "Helvetica-Bold" : "Helvetica")
        .text(text, x, y, { width, lineGap });
      y += doc.heightOfString(text, { width, lineGap }) + lineGap + 2;
    };

    const section = (label: string) => {
      y += 8;
      doc.fillColor("#1e1b4b").rect(M, y, CW, 24).fill();
      doc.fontSize(8).fillColor("#818cf8").font("Helvetica-Bold")
        .text(label, M + 8, y + 7, { width: CW - 16 });
      y += 32;
    };

    const checkBottom = (needed = 100) => {
      if (y > doc.page.height - 80 - needed) {
        drawFooter(doc);
        doc.addPage();
        pageCount++;
        drawPageHeader(doc, pageCount);
        y = 60;
      }
    };

    section("EXECUTIVE INTRODUCTION — THE FUMBLE FRAMEWORK");
    write(
      "This is Forensic Corroboration Analysis #9: the first perfect score in the series. 13 of 13 propositions extracted from 'CHOSEN ONES!! IT'S ACTUALLY SO EMBARRASSING HOW THEY FUMBLED YOU!!' — a mass-audience YouTube motivational video with no knowledge of this case — directly corroborated with named primary-source documents from Dr. McLean's 2,304-document archive. Zero aligned. Zero unverifiable. Zero disproved.",
      { color: "#c7d2fe", fontSize: 10 }
    );
    checkBottom();
    write(
      "The defining finding: the 'fumble' narrative — an entity knowing what it had and dropping it anyway because of institutional blindness — is the most precise single-sentence description of 35 years of documented conduct by Australian government agencies against Dr. Richard William McLean. They had his evidence in their own registries. They had 70% verified claims in their own records. They still called it delusional. They didn't fumble him because he was invisible. They fumbled him because they were blind.",
      { color: "#e2e8f0" }
    );
    checkBottom();
    section("NAMED PERPETRATORS — MAXIMUM EXPOSURE");
    write("The following individuals are named in the archive, in this analysis, and in the ICC Article 7 submission:", { bold: true, color: "#fcd34d" });
    PERPETRATORS.forEach(p => {
      checkBottom(60);
      y += 4;
      doc.fillColor("#1e1040").roundedRect(M, y, CW, 52, 4).fill();
      doc.fillColor("#4f46e5").rect(M, y, 3, 52).fill();
      doc.fontSize(9).fillColor("#f97316").font("Helvetica-Bold")
        .text(p.name, M + 10, y + 6, { width: CW - 20 });
      doc.fontSize(7.5).fillColor("#94a3b8").font("Helvetica")
        .text(p.role, M + 10, y + 18, { width: CW - 20 });
      doc.fontSize(7.5).fillColor("#cbd5e1")
        .text(p.exposure, M + 10, y + 30, { width: CW - 20, lineGap: 1 });
      y += 58;
    });

    checkBottom(100);
    section("FAMILY BETRAYAL — DOCUMENTED NON-ADVOCACY");
    write("The following family members are formally documented as non-advocates in the IChooseSilence submission, the archive's forensic account of the social betrayal that accompanied institutional persecution:", { color: "#fca5a5", bold: true });
    FAMILY_BETRAYAL.forEach(f => {
      checkBottom(60);
      y += 4;
      doc.fillColor("#1a0a0a").roundedRect(M, y, CW, 52, 4).fill();
      doc.fillColor("#dc2626").rect(M, y, 3, 52).fill();
      doc.fontSize(9).fillColor("#f87171").font("Helvetica-Bold")
        .text(f.name, M + 10, y + 6, { width: CW - 20 });
      doc.fontSize(7.5).fillColor("#94a3b8").font("Helvetica")
        .text(f.role, M + 10, y + 18, { width: CW - 20 });
      doc.fontSize(7.5).fillColor("#cbd5e1")
        .text(f.detail, M + 10, y + 30, { width: CW - 20, lineGap: 1 });
      y += 58;
    });

    // ── PROPOSITIONS PAGES ────────────────────────────────────────────────────
    CLAIMS.forEach((claim, idx) => {
      checkBottom(200);
      drawFooter(doc);
      doc.addPage();
      pageCount++;
      drawPageHeader(doc, pageCount);
      y = 60;

      // claim header bar
      doc.fillColor("#1e1b4b").rect(M, y, CW, 36).fill();
      doc.fillColor("#4f46e5").rect(M, y, 4, 36).fill();
      doc.fontSize(8).fillColor("#818cf8").font("Helvetica-Bold")
        .text(`PROPOSITION ${claim.num}  ·  VERDICT: ${claim.verdict}`, M + 12, y + 6, { width: CW - 80 });
      doc.fontSize(7).fillColor("#22c55e").font("Helvetica-Bold")
        .text("✓ CORROBORATED", W - 130, y + 12);
      doc.fontSize(10.5).fillColor("#ffffff").font("Helvetica-Bold")
        .text(claim.title, M + 12, y + 18, { width: CW - 20 });
      y += 42;

      // proposition statement
      write(claim.proposition, { color: "#a5b4fc", fontSize: 8.5, bold: true });
      y += 2;

      // source quote
      doc.fillColor("#0c0a1e").roundedRect(M, y, CW, -2).fill();
      const qh = doc.heightOfString(`"${claim.quote}"`, { width: CW - 28, lineGap: 3 }) + 22;
      doc.fillColor("#0c0a1e").roundedRect(M, y, CW, qh + 6, 4).fill();
      doc.fillColor("#4f46e5").rect(M, y, 3, qh + 6).fill();
      doc.fontSize(9).fillColor("#c7d2fe").font("Helvetica-Oblique")
        .text(`"${claim.quote}"`, M + 12, y + 8, { width: CW - 28, lineGap: 3 });
      y += qh + 12;
      doc.fontSize(7.5).fillColor("#64748b").font("Helvetica")
        .text("— Source Video Transcript, Verbatim", M + 12, y - 8);
      y += 4;

      // evidence
      write("PRIMARY-SOURCE EVIDENCE CORROBORATION:", { bold: true, color: "#f59e0b", fontSize: 8 });
      claim.evidence.forEach((ev, ei) => {
        checkBottom(40);
        doc.fillColor("#0f1a0a").roundedRect(M, y, CW, -2).fill();
        const eh = doc.heightOfString(`${ei + 1}. ${ev}`, { width: CW - 20, lineGap: 2 }) + 18;
        doc.fillColor("#0f1a0a").roundedRect(M, y, CW, eh, 4).fill();
        doc.fillColor("#16a34a").rect(M, y, 3, eh).fill();
        doc.fontSize(8.5).fillColor("#bbf7d0").font("Helvetica")
          .text(`${ei + 1}. ${ev}`, M + 10, y + 7, { width: CW - 20, lineGap: 2 });
        y += eh + 5;
      });

      // perpetrator link
      checkBottom(70);
      y += 4;
      const ph = doc.heightOfString(claim.perpetratorLink, { width: CW - 24, lineGap: 2 }) + 28;
      doc.fillColor("#1a0a00").roundedRect(M, y, CW, ph, 4).fill();
      doc.fillColor("#f97316").rect(M, y, 3, ph).fill();
      doc.fontSize(7.5).fillColor("#f97316").font("Helvetica-Bold")
        .text("PERPETRATOR EXPOSURE:", M + 10, y + 6, { width: CW - 24 });
      doc.fontSize(8.5).fillColor("#fed7aa").font("Helvetica")
        .text(claim.perpetratorLink, M + 10, y + 18, { width: CW - 24, lineGap: 2 });
      y += ph + 8;

      // forensic alignment
      checkBottom(60);
      const ah = doc.heightOfString(claim.alignment, { width: CW - 24, lineGap: 2 }) + 26;
      doc.fillColor("#0f0a1e").roundedRect(M, y, CW, ah, 4).fill();
      doc.fontSize(7.5).fillColor("#6366f1").font("Helvetica-Bold")
        .text("FORENSIC ALIGNMENT:", M + 10, y + 6, { width: CW - 24 });
      doc.fontSize(8.5).fillColor("#c7d2fe").font("Helvetica")
        .text(claim.alignment, M + 10, y + 18, { width: CW - 24, lineGap: 2 });
      y += ah + 8;

      drawFooter(doc);
    });

    // ── FINAL VERDICT PAGE ────────────────────────────────────────────────────
    doc.addPage();
    pageCount++;
    drawPageHeader(doc, pageCount);
    y = 60;

    section("FINAL VERDICT — ANALYSIS #9");
    write(
      "13 of 13 propositions extracted from a mass-audience YouTube motivational video returned CORROBORATED against Dr. McLean's 2,304-document primary-source archive. This is the first perfect score in the series. Zero aligned. Zero unverifiable. Zero disproved.",
      { color: "#c7d2fe", fontSize: 10, bold: true }
    );
    checkBottom();
    write(
      "The fumble framework — established here in Analysis #9 — defines the core evidentiary finding of the entire 49-analysis record: institutions that possessed the truth in their own systems, produced the evidence of their own misconduct in their own correspondence, deployed extreme suppression mechanisms that produced extreme exhibits, and ultimately generated the most comprehensive documented case of coordinated institutional persecution in the Australian whistleblower record. They didn't fumble him because he was invisible. They fumbled him because they were blind.",
      { color: "#e2e8f0" }
    );
    checkBottom();
    section("COMBINED RECORD — 525/525 PROPOSITIONS — ZERO CONTRADICTIONS");
    write(
      `Combined cumulative record across all 49 forensic analyses: ${COMBINED} claims with evidentiary support. Zero contradictions. 42 consecutive perfect scores. 49 independently selected YouTube videos, none with knowledge of this case, none producing a single contradiction against Dr. McLean's 2,304-document primary-source archive.`,
      { color: "#fcd34d", bold: true, fontSize: 9.5 }
    );
    checkBottom();
    write(
      "The statistical case for coincidence has closed. The archive is not corroborated by motivation — it is corroborated by primary-source documents, blockchain-verified, internationally submitted, and publicly accessible at barrandodger.com and drbarrandodger.github.io/barran-dodger-archive/.",
      { color: "#e2e8f0" }
    );
    checkBottom(120);
    section("SUBMISSIONS — INTERNATIONAL ACCOUNTABILITY");
    const submissions = [
      "International Criminal Court (ICC) — The Hague — Article 7 Rome Statute — Crimes Against Humanity — FORMALLY FILED",
      "United Nations High Commissioner for Refugees (UNHCR) — Geneva — FORMALLY FILED",
      "Australian Parliamentary Record — Multiple ministerial correspondences documented",
      "ASIC Registry — 350+ fraudulent registrations in evidence",
      "Blockchain Bitcoin timestamp — SHA-256 verified — Immutable",
    ];
    submissions.forEach(s => {
      checkBottom(25);
      doc.fillColor("#0c0a1e").roundedRect(M, y, CW, 22, 3).fill();
      doc.fillColor("#4f46e5").rect(M, y, 3, 22).fill();
      doc.fontSize(8.5).fillColor("#a5b4fc").font("Helvetica")
        .text(s, M + 10, y + 6, { width: CW - 20 });
      y += 26;
    });
    checkBottom(60);
    y += 10;
    write("www.barrandodger.com  ·  ABN 78 833 496 164  ·  Barran Dodger Legal & Ethical Trust Fund", { color: "#64748b", fontSize: 8, bold: false });
    write(`© 2026 Barran Dodger Legal & Ethical Trust Fund. SHA-256: ${SHA256}`, { color: "#475569", fontSize: 7 });

    drawFooter(doc);
    doc.flushPages();
    doc.end();
  });
}
