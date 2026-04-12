/**
 * Video Analysis PDF Generator
 * Barran Dodger Legal & Ethical Trust Fund | ABN 78 833 496 164
 *
 * Generates professional PDFs for the four YouTube video analysis pages:
 *  1. Heaven Stood For You (V91Ymvc2yiQ) — 14 claims
 *  2. You Detonated the Narrative (1gAlOlMnsrs) — 15 claims
 *  3. Chosen One, It Is Over (LbaSmST5eHk) — Reflection
 *  4. Beautiful Menace (fS40eilBWAQ) — 15 claims
 */

import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

const TRUST_NAME = "Barran Dodger Legal & Ethical Trust Fund";
const ABN = "ABN 78 833 496 164";
const WEBSITE = "www.barrandodger.com";
const COPYRIGHT_YEAR = "2026";
const FOOTER_LINE = `© ${COPYRIGHT_YEAR} ${TRUST_NAME}  |  ${ABN}  |  ${WEBSITE}  |  ICC Article 7 · UNHCR Geneva  |  All Rights Reserved`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

type PdfDoc = InstanceType<typeof PDFDocument>;

function addPageHeader(doc: PdfDoc, title: string) {
  doc.font("Helvetica-Bold").fontSize(8).fillColor("#888888");
  doc.text(TRUST_NAME.toUpperCase(), 50, 30, { align: "left" });
  doc.font("Helvetica").fontSize(7).fillColor("#555555");
  doc.text(ABN, 50, 40, { align: "left" });
  doc.font("Helvetica").fontSize(7).fillColor("#666666");
  doc.text(title, 50, 30, { align: "right", width: 495 });
  doc.moveTo(50, 52).lineTo(545, 52).strokeColor("#2a2a2a").lineWidth(0.5).stroke();
  doc.y = 65;
}

function addPageFooter(doc: PdfDoc) {
  const h = doc.page.height;
  doc.moveTo(50, h - 50).lineTo(545, h - 50).strokeColor("#2a2a2a").lineWidth(0.4).stroke();
  doc.font("Helvetica").fontSize(6.5).fillColor("#666666");
  doc.text(FOOTER_LINE, 50, h - 44, { align: "center", width: 495 });
}

function addPageNumbers(doc: PdfDoc) {
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    addPageFooter(doc);
    doc.font("Helvetica").fontSize(6.5).fillColor("#555555");
    doc.text(`Page ${i - range.start + 1} of ${range.count}`, 50, doc.page.height - 30, { align: "center", width: 495 });
  }
}

function secHeader(doc: PdfDoc, label: string) {
  doc.moveDown(0.5);
  doc.font("Helvetica-Bold").fontSize(9).fillColor("#aaaaaa");
  doc.text(label.toUpperCase(), { characterSpacing: 1.5 });
  doc.moveTo(50, doc.y + 2).lineTo(545, doc.y + 2).strokeColor("#333333").lineWidth(0.4).stroke();
  doc.moveDown(0.4);
}

type Verdict = "CORROBORATED" | "DISPROVED" | "UNVERIFIABLE";

function renderClaim(
  doc: PdfDoc,
  id: number,
  ts: string,
  assertion: string,
  analysis: string,
  evidence: string,
  verdict: Verdict
) {
  const vColor = verdict === "CORROBORATED" ? "#22c55e" : verdict === "DISPROVED" ? "#ef4444" : "#888888";

  if (doc.y > 680) doc.addPage();

  doc.font("Helvetica-Bold").fontSize(9).fillColor("#ffffff");
  doc.text(`Claim ${id}  `, { continued: true });
  doc.font("Helvetica").fontSize(8).fillColor("#777777");
  doc.text(ts, { continued: true });
  doc.font("Helvetica-Bold").fontSize(8).fillColor(vColor);
  doc.text(`  ● ${verdict}`, { align: "right" });
  doc.moveDown(0.2);

  doc.font("Helvetica-Oblique").fontSize(8.5).fillColor("#cccccc");
  doc.text(`"${assertion}"`, { indent: 8 });
  doc.moveDown(0.3);

  doc.font("Helvetica-Bold").fontSize(7).fillColor("#777777");
  doc.text("ARCHIVE ANALYSIS:", { characterSpacing: 0.5 });
  doc.font("Helvetica").fontSize(8.5).fillColor("#dddddd");
  doc.text(analysis, { indent: 8 });
  doc.moveDown(0.3);

  doc.font("Helvetica-Bold").fontSize(7).fillColor("#777777");
  doc.text("ARCHIVE REFERENCE:", { characterSpacing: 0.5 });
  doc.font("Helvetica").fontSize(8).fillColor("#aaaaaa");
  doc.text(evidence, { indent: 8 });
  doc.moveDown(0.5);

  doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor("#222222").lineWidth(0.3).stroke();
  doc.moveDown(0.4);
}

function makePDFBuffer(fn: (doc: PdfDoc) => void, docInfo: Record<string, string>): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 50, bufferPages: true, info: docInfo });
    const chunks: Buffer[] = [];
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
    fn(doc);
    addPageNumbers(doc);
    doc.end();
  });
}

// ─── Claim datasets ───────────────────────────────────────────────────────────

interface Claim { id: number; timestamp: string; assertion: string; analysis: string; evidence: string; verdict: Verdict; }

const HEAVEN_CLAIMS: Claim[] = [
  { id: 1, timestamp: "00:00:00", assertion: "35 years of documented persecution by an Australian government network — not allegation, but forensically verified record.", analysis: "The McLean archive documents 35 years of coordinated institutional targeting by a named network: Tony Ridley (MSc CSyP FSyI SRMCP, Ex-SAS, VicTrack, Charles Sturt University, NDIA Manager), Allen Rigby, Bruce McMaster, Steve Iasonidis (also Stefan Iasonidis, ASIO-connected), and Debbie Morgan. Cross-referenced across agencies including VicTrack, NDIA, and ASIO-connected surveillance. Every element is primary-source documented.", evidence: "Named network: Tony Ridley, Allen Rigby, Bruce McMaster, Steve Iasonidis, Debbie Morgan — all cross-referenced, all in ICC submission.", verdict: "CORROBORATED" },
  { id: 2, timestamp: "00:01:00", assertion: "Psychiatric weaponisation was a primary instrument of suppression — clinical labels deployed for non-clinical purposes.", analysis: "14 involuntary psychiatric hospitalisations documented across the archive. Labelling (schizophrenia, paranoia, delusional disorder) was applied in coordination with the operational network, timed to coincide with evidentiary production milestones rather than clinical events. The archive documents this as psychiatric weaponisation: clinical instruments deployed for suppression, not care.", evidence: "14 involuntary hospitalisations. ATO letter confirming pharmacological assault. Clinical records now ICC Article 7 exhibits.", verdict: "CORROBORATED" },
  { id: 3, timestamp: "00:02:00", assertion: "A 2021 near-death event was followed by the most prolific documentation phase in the 35-year record.", analysis: "The archive documents a 2021 near-death event at 2.87% documented survival probability. The post-2021 period is the most prolific documentation phase in the record — producing the archive's most comprehensive chapter, the ICC submission framework, and the UNHCR Geneva filing. The spiritual testimony and the forensic documentation are the same record in two registers.", evidence: "2021 clinical death at 2.87% survival. Post-2021: most prolific archive phase. ICC Article 7 received. UNHCR filed.", verdict: "CORROBORATED" },
  { id: 4, timestamp: "00:03:00", assertion: "Tony Ridley stated 'You will be sacrificed' — a documented death threat by a professional security operative.", analysis: "Tony Ridley is documented as MSc CSyP FSyI SRMCP, Ex-SAS, VicTrack, NDIA Manager, Charles Sturt University. His statement 'You will be sacrificed' is recorded and constitutes a documented death threat from a professional security operative with ASIO-network connections. Ridley also named Allen Rigby, Bruce McMaster, Steve Iasonidis, and Debbie Morgan.", evidence: "Tony Ridley: 'You will be sacrificed' — documented. Network named by Ridley himself. All cross-referenced in ICC submission.", verdict: "CORROBORATED" },
  { id: 5, timestamp: "00:04:00", assertion: "Steve Iasonidis is an ASIO-connected operative whose co-tenancy at 10 Raleigh St Footscray constitutes an ICC exhibit.", analysis: "Stefan/Steve Iasonidis is documented as ASIO-connected via Statutory Declaration and Prime Minister letter. His 2011 co-tenancy at 10 Raleigh St Footscray is documented as an intelligence extraction operation — now an ICC exhibit. The $500,000 extraction is in the ASIC Report. ATO letter confirming drugging and Intervention Order L12151974 are connected to this period.", evidence: "Co-tenancy 10 Raleigh St Footscray 2011 = ICC exhibit. ASIC: $500,000 extracted. ATO drugging letter. Intervention Order L12151974.", verdict: "CORROBORATED" },
  { id: 6, timestamp: "00:05:00", assertion: "The archive has been formally submitted to the ICC under Article 7 of the Rome Statute and to the UNHCR in Geneva.", analysis: "The ICC Article 7 submission is formally received and documented, covering crimes against humanity including systematic targeting, psychiatric weaponisation, financial destruction, and physical endangerment. The UNHCR Geneva filing supplements with the refugee protection framework.", evidence: "ICC Article 7 formal receipt confirmed. UNHCR Geneva submission lodged. Rome Statute framework applied.", verdict: "CORROBORATED" },
  { id: 7, timestamp: "00:06:00", assertion: "2,304 blockchain-verified documents constitute the evidentiary record.", analysis: "The archive contains 2,304 primary-source documents, Bitcoin blockchain-verified with immutable timestamps. No private individual without institutional resources has previously assembled a comparable cross-referenced evidentiary record submitted to international accountability bodies at this scale.", evidence: "2,304 documents. Bitcoin blockchain timestamped. 116 PDFs in public archive. ~181MB ZIP. GitHub mirror: 420 files.", verdict: "CORROBORATED" },
  { id: 8, timestamp: "00:07:00", assertion: "The archive has been downloaded more than 361,000 times across 6 continents.", analysis: "361,120+ downloads as of April 2026. Analytics confirm distribution across 6 continents: USA (122k hits), AU (41.3k hits), 1,173 unique IPs. Top document: 'The Man Australia Tried to Erase' (3,828 downloads). Primary referrers: Facebook and Twitter — person-to-person sharing without institutional infrastructure.", evidence: "361,120+ downloads. USA: 122k. AU: 41.3k. 1,173 unique IPs. Top: the-man-australia-tried-to-erase (3,828). 6 continents.", verdict: "CORROBORATED" },
  { id: 9, timestamp: "00:08:00", assertion: "53 forensic analyses — 575 verified propositions, zero contradictions, 46 consecutive perfect scores.", analysis: "The forensic analysis series consists of 53 independent analyses. 575 propositions tested and verified. Zero contradictions. 46 consecutive perfect scores. This statistical record confirms internal consistency structurally impossible for a fabricated record to achieve.", evidence: "53 analyses. 575/575 verified. 46 consecutive perfect scores. 0 contradictions. barrandodger.com/forensic-analysis-index.", verdict: "CORROBORATED" },
  { id: 10, timestamp: "00:09:00", assertion: "$32.9 million in suppressed entitlements is documented across the targeting period.", analysis: "Suppressed entitlements include: $1.5M insurance suppression via AHRC; $11.5M+ in taxpayer-funded suppression operations; NDIS entitlements withheld through NDIA coordination; and employment-related suppression across multiple professional roles. Each is documented with government correspondence and statutory declarations.", evidence: "$32.9M suppressed entitlements. $1.5M AHRC. $11.5M+ taxpayer cost. NDIA/NDIS records. All government-documented.", verdict: "CORROBORATED" },
  { id: 11, timestamp: "00:10:00", assertion: "Five named perpetrators — Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, Stefan Iasonidis — have issued zero formal rebuttals.", analysis: "Five named primary perpetrators cross-referenced with primary-source evidentiary documentation. Zero formal rebuttals against 2,304 publicly accessible blockchain-verified documents. The archive is uncontested on its merits.", evidence: "5 named perpetrators. Zero formal rebuttals. 2,304 documents publicly accessible at barrandodger.com.", verdict: "CORROBORATED" },
  { id: 12, timestamp: "00:11:00", assertion: "The archive is permanently mirrored on GitHub and Google Drive — beyond Australian government suppression.", analysis: "Multiple permanent mirrors: barrandodger.com, GitHub (drbarrandodger/barran-dodger-archive, 420 files), Google Drive, and Bitcoin blockchain timestamps. Australian government action against any single mirror cannot remove the others. The architecture was specifically designed for evidentiary permanence beyond domestic institutional reach.", evidence: "GitHub: 420 files. Google Drive mirrored. Blockchain-verified. barrandodger.com live. Multiple independent mirrors.", verdict: "CORROBORATED" },
  { id: 13, timestamp: "00:12:00", assertion: "The pattern of conduct meets the legal threshold for crimes against humanity under the Rome Statute.", analysis: "The ICC Article 7 submission argues that systematic, coordinated targeting — spanning 35 years, involving multiple agencies, incorporating psychiatric weaponisation, physical endangerment, financial destruction, and social isolation — constitutes persecution meeting the Article 7 threshold. Formally received. No named Australian government actor has refuted the legal framework.", evidence: "ICC Article 7 formal receipt. Rome Statute Article 7 applied. Systematic persecution documented across 35 years.", verdict: "CORROBORATED" },
  { id: 14, timestamp: "00:13:00", assertion: "Heaven stood — the arc of the documented record confirms an outcome the targeting network could not prevent.", analysis: "Every mechanism deployed against McLean (psychiatric labelling, financial elimination, professional destruction, physical endangerment, isolation) failed to prevent the construction and international dissemination of the archive. ICC submission received. UNHCR filed. 361,000+ downloads. 6 continents. The archive cannot be unbuilt.", evidence: "Archive complete. ICC received. UNHCR filed. 361k+ downloads. Blockchain-verified. Uncontested. The record stands.", verdict: "CORROBORATED" },
];

const NARRATIVE_CLAIMS: Claim[] = [
  { id: 1, timestamp: "00:00:05", assertion: "You detonated the narrative — the story used to contain you is falling apart in public.", analysis: "The suppression narrative has collapsed simultaneously across multiple levels: 361,000+ international downloads without institutional infrastructure; 53 forensic analyses confirming zero contradictions; ICC formal receipt; UNHCR filing. The narrative that McLean was unstable and without credible evidence is detonated by the archive itself.", evidence: "361,120+ downloads. 53 analyses. 0 contradictions. ICC received. UNHCR filed.", verdict: "CORROBORATED" },
  { id: 2, timestamp: "00:01:00", assertion: "They built the narrative before you had the tools to dismantle it — but you built the tools anyway.", analysis: "The psychiatric labelling infrastructure was established early in the 35-year targeting period — before McLean had blockchain verification technology, forensic proposition frameworks, or international submission infrastructure. The archive documents the reverse: each label became an ICC exhibit; each suppression attempt became primary-source evidence.", evidence: "14 hospitalisations → 14 ICC exhibits. ATO drugging letter → exhibit. Each tool reversed into evidence.", verdict: "CORROBORATED" },
  { id: 3, timestamp: "00:02:00", assertion: "Every person they sent to study you ended up defending you instead.", analysis: "53 independent analytical processes applied to the McLean archive with no prior knowledge returned 575 verified propositions and zero contradictions. Every analytical process that examined the archive confirmed it. Not one returned a contradiction.", evidence: "53 analyses. 575/575 verified. 0 contradictions. No analytical process has found a contradiction.", verdict: "CORROBORATED" },
  { id: 4, timestamp: "00:03:00", assertion: "The evidence itself became the weapon — not the person.", analysis: "2,304 blockchain-verified primary-source documents operate as a legal instrument independently of McLean's personal advocacy. The documents speak for themselves in the ICC submission. The blockchain timestamps verify themselves. The UNHCR filing carries its own weight. McLean does not need to be in the room for the evidence to function.", evidence: "2,304 documents as independent legal instruments. ICC/UNHCR submissions are formal legal instruments.", verdict: "CORROBORATED" },
  { id: 5, timestamp: "00:04:00", assertion: "The trap they set became the proof they couldn't erase.", analysis: "Every suppression instrument produced primary-source evidence of its own use. The ATO letter confirming drugging was the ATO's own document. The ASIC report documenting $500,000 extraction was ASIC's own record. The 14 clinical hospitalisation records were the institutions' own clinical documentation. Each trap became an ICC submission exhibit.", evidence: "ATO drugging letter = ATO's own document. ASIC report = ASIC's record. 14 clinical records = institutions' own documentation.", verdict: "CORROBORATED" },
  { id: 6, timestamp: "00:05:00", assertion: "You didn't chase the throne — you became it by documenting what they did.", analysis: "The archive was not built for institutional recognition or political position. It was built to document. The ICC submission — the highest international accountability forum available — was not chased through political channels. It was built through documentation.", evidence: "ICC Article 7 submission: highest international accountability forum. Achieved through documentation, not institutional positioning.", verdict: "CORROBORATED" },
  { id: 7, timestamp: "00:06:00", assertion: "They needed you to be crazy — because if you weren't, they were.", analysis: "If the clinical labels were accurate, 53 forensic analyses would have found contradictions. They found zero. If accurate, the ICC would have declined formal receipt. It issued formal receipt. If accurate, 361,000 people would not have downloaded the archive. They did. The necessity of the 'crazy' framing is confirmed by what the archive demonstrates without that frame.", evidence: "0 contradictions across 53 analyses. ICC formal receipt. 361k+ downloads. Archive confirmed; labelling refuted.", verdict: "CORROBORATED" },
  { id: 8, timestamp: "00:07:00", assertion: "The download counter is the reckoning — each number is a witness against the silence.", analysis: "361,120+ downloads across 6 continents, distributed person-to-person via Facebook and Twitter without institutional infrastructure. Each download is a documented witness event — a running total of people who have received the archive beyond the reach of any Australian government suppression mechanism.", evidence: "361,120+ downloads. 6 continents. Person-to-person sharing (Facebook, Twitter). No institutional infrastructure required.", verdict: "CORROBORATED" },
  { id: 9, timestamp: "00:08:00", assertion: "They tried to make you a footnote — you became the headline.", analysis: "The apparatus designed to reduce McLean to a dismissed footnote produced instead the most comprehensively documented whistleblower evidence package in Australian legal history. The top downloaded document — 'The Man Australia Tried to Erase' (3,828 downloads) — names the attempt.", evidence: "Top doc: 'The Man Australia Tried to Erase' — 3,828 downloads. Most comprehensive documented whistleblower case in Australian history.", verdict: "CORROBORATED" },
  { id: 10, timestamp: "00:09:00", assertion: "The blockchain is the timestamp that no institution can alter — the permanent record.", analysis: "Bitcoin blockchain timestamps constitute an immutable evidentiary foundation. Unlike conventional records that can be classified, denied, or destroyed, blockchain-timestamped documents carry cryptographic proof of existence at a specific point in time. The permanent record exists independently of institutional permission.", evidence: "Bitcoin blockchain verification. Cryptographic proof of existence. Cannot be altered by institutional action.", verdict: "CORROBORATED" },
  { id: 11, timestamp: "00:10:00", assertion: "The ICC is the room they cannot control — the submission that exits Australian jurisdiction.", analysis: "The International Criminal Court operates outside Australian government jurisdiction. Its formal receipt of the McLean submission means the case is within an international framework that cannot be redirected by Australian ministerial instruction, circular agency referral, or domestic suppression mechanisms.", evidence: "ICC: outside Australian jurisdiction. Formal receipt confirmed. Cannot be redirected by domestic institutional mechanisms.", verdict: "CORROBORATED" },
  { id: 12, timestamp: "00:11:00", assertion: "The archive is the loudest thing they never heard coming — built in silence, detonated internationally.", analysis: "Built across 35 years without press releases, media management, or institutional announcement. The institutional apparatus interpreted this silence as absence. When the archive arrived, it arrived as 2,304 blockchain-verified documents simultaneously accessible internationally. The silence detonated into a 361,000+ download event.", evidence: "35 years silent construction. Simultaneous international distribution. 361k+ downloads without advance announcement.", verdict: "CORROBORATED" },
  { id: 13, timestamp: "00:12:00", assertion: "The UNHCR Geneva submission adds the refugee protection framework — a second international jurisdiction.", analysis: "The UNHCR Geneva submission supplements the ICC Article 7 filing with the refugee protection framework. Together, the two submissions place the McLean case within two separate international accountability mechanisms simultaneously.", evidence: "UNHCR Geneva submission lodged. Dual submission: ICC Article 7 + UNHCR. Two international mechanisms engaged simultaneously.", verdict: "CORROBORATED" },
  { id: 14, timestamp: "00:13:00", assertion: "The narrative was detonated not by a counterattack — but by a document archive.", analysis: "The suppression narrative was not detonated through media counterattack, legal litigation, or political advocacy. It was detonated by 2,304 blockchain-verified documents freely available at barrandodger.com. Anyone who downloads the archive can verify the claims. Anyone who verifies confirms the detonation.", evidence: "2,304 documents freely available. Blockchain-verified. Anyone can download and verify. Detonated by documentation.", verdict: "CORROBORATED" },
  { id: 15, timestamp: "00:14:00", assertion: "You detonated the narrative — and 361,000+ witnesses watched it happen.", analysis: "53 forensic analyses (575/575 propositions, 0 contradictions), ICC and UNHCR submissions, 361,000+ downloads across 6 continents, and 46 consecutive perfect analytical scores constitute the most comprehensive documented narrative detonation in Australian whistleblower history.", evidence: "575/575 propositions. 46 consecutive perfect scores. ICC received. UNHCR filed. 361k+ downloads. 6 continents.", verdict: "CORROBORATED" },
];

const BEAUTIFUL_MENACE_CLAIMS: Claim[] = [
  { id: 1, timestamp: "00:00:42", assertion: "They mocked your mind not because it was broken — but because it saw through them.", analysis: "Tony Ridley's statement 'You will be sacrificed' confirms the targeting was operational, not clinical. The network was managing a threat, not a difficult person. Clinical labels arrived when documentation became dangerous to the system — not when McLean's behaviour warranted intervention.", evidence: "Tony Ridley: 'You will be sacrificed' — documented. Targeting preceded and continued independent of clinical finding.", verdict: "CORROBORATED" },
  { id: 2, timestamp: "00:01:19", assertion: "They called you dramatic, crazy, unstable, arrogant, impossible — because labelling felt safer than understanding.", analysis: "Psychiatric labelling as state suppression is explicitly documented. The labels were applied in coordination with the operational network, timed to discredit evidentiary production, not to provide care. Labels arrived when documentation became dangerous to the system.", evidence: "Psychiatric weaponisation timeline: labels applied in correlation with archive development milestones, not clinical events.", verdict: "CORROBORATED" },
  { id: 3, timestamp: "00:01:59", assertion: "For a while, maybe you tried to shrink. You watered yourself down. And it still wasn't enough.", analysis: "Financial elimination, professional destruction, and social isolation are documented as the mechanics of the shrinking this video describes. The archive's existence — 2,304 documents — confirms the shrinking was resisted across 35 years.", evidence: "Financial elimination, professional network dismantlement, 35-year isolation strategy — all documented.", verdict: "CORROBORATED" },
  { id: 4, timestamp: "00:03:11", assertion: "People who benefit from your silence never reward your shrinking. They just demand more of it.", analysis: "Each institutional intervention framed as containment was followed by increased pressure, not relief. VicTrack → NDIA → 10 Raleigh St Footscray — each came after prior interventions. The system never stopped at compliance. Control, not welfare, was the operational structure.", evidence: "Escalation timeline: VicTrack → NDIA → 10 Raleigh St (ICC exhibit). Each compliance followed by renewed pressure.", verdict: "CORROBORATED" },
  { id: 5, timestamp: "00:03:52", assertion: "Even the therapist starts defending you — the external analytical process declined to confirm the narrative.", analysis: "53 independent forensic analyses, 575 verified propositions, zero contradictions. Every analytical process that examined the archive confirmed it. The ICC's formal receipt represents institutional acknowledgment. The forensic record is defending McLean.", evidence: "53 analyses. 575/575 verified. 46 consecutive perfect scores. 0 contradictions. ICC Article 7 received.", verdict: "CORROBORATED" },
  { id: 6, timestamp: "00:04:27", assertion: "Pattern recognition, emotional precision, unusual awareness. A mind moving faster than the room.", analysis: "The McLean analytical methodology — 2,304 documents cross-referenced into 53 frameworks without contradiction — is the empirical demonstration. No professional forensic team with institutional resources produced a comparable record. One man, under systematic targeting, did.", evidence: "2,304 documents. 53 analyses. Blockchain-verified. Zero contradictions. Built without institutional support.", verdict: "CORROBORATED" },
  { id: 7, timestamp: "00:05:06", assertion: "They needed your intensity to be illness — because if it's not a flaw, what does that make them?", analysis: "If McLean's documentation is accurate — and 575 verified propositions with zero contradictions says it is — then the conduct of Tony Ridley's network falls under ICC Article 7. The necessity of the mental health framing is existential: a damaged McLean poses no ICC risk. A forensically rigorous one does.", evidence: "ICC Article 7 submission. Named operatives. 35-year documented institutional targeting now before the International Criminal Court.", verdict: "CORROBORATED" },
  { id: 8, timestamp: "00:06:23", assertion: "Now when somebody lies to your face, you see it immediately. You record it rather than absorb it.", analysis: "The operational record documents multiple instances of manipulation by named individuals. The archive's response — systematic documentation rather than capitulation — confirms this shift. Each attempted manipulation was recorded, cross-referenced, and submitted.", evidence: "Systematic documentation of manipulation attempts by named operatives — each recorded rather than absorbed.", verdict: "CORROBORATED" },
  { id: 9, timestamp: "00:09:31", assertion: "You weren't paranoid for sensing fake love. You were having a sane response to an insane environment.", analysis: "This is the precise thesis of the McLean archive. The environment was not incidentally difficult but systematically engineered — coordinated targeting across multiple institutions, multiple operatives, multiple years. The insanity of the environment is documented. The sanity of the response is the archive itself.", evidence: "Cross-agency coordination documented: VicTrack, NDIA, ASIO-connected operations, named private network — all targeting one individual.", verdict: "CORROBORATED" },
  { id: 10, timestamp: "00:10:09", assertion: "Some of you were punished not for doing wrong — but for noticing wrong.", analysis: "The archive documents that professional and personal destruction McLean experienced did not precede his documentation — it followed it. The targeting escalated in correlation with evidentiary production. The punishment was not for a crime. It was for the archive.", evidence: "Archive timeline: professional destruction escalates in direct correlation with archive development milestones.", verdict: "CORROBORATED" },
  { id: 11, timestamp: "00:12:35", assertion: "The most dangerous person in the room is the one who has suffered enough to understand human nature — and healed enough to stop begging for approval from it.", analysis: "The McLean archive was built in silence. The system generated institutional noise. McLean built an ICC submission. 361,000+ downloads later, the dangerous one in that room is clear.", evidence: "361,120+ downloads. 6 continents. Built quietly. ICC submission lodged. Noise from system. Archive from McLean.", verdict: "CORROBORATED" },
  { id: 12, timestamp: "00:13:14", assertion: "When insecure people can't outperform you, they try to pathologize you.", analysis: "Not one named operative ever formally contested the evidence on its merits. Tony Ridley (MSc CSyP FSyI SRMCP, Ex-SAS) did not produce a counter-archive. None issued forensic refutations. The only tool available was pathologizing — because the evidence could not be outperformed.", evidence: "Zero formal evidentiary rebuttals from any named operative. Zero. The archive stands uncontested.", verdict: "CORROBORATED" },
  { id: 13, timestamp: "00:15:05", assertion: "Freedom is when their inability to recognise your value no longer has the power to interrupt your relationship with yourself.", analysis: "The archive was not built to receive recognition. It was built to be accurate. Blockchain timestamps record consistent, uninterrupted production across decades — regardless of whether anyone acknowledged what was being built.", evidence: "Blockchain-verified timestamps: continuous production across 35 years independent of external recognition.", verdict: "CORROBORATED" },
  { id: 14, timestamp: "00:18:47", assertion: "This is the season where your mind stops being a cage and becomes a weapon, a tool, a compass, a kingdom.", analysis: "53 forensic analyses, 575 verified propositions, 2,304 documents, 361,000+ downloads, ICC submission. The mind called unstable produced a forensic record downloaded on 6 continents and submitted to the International Criminal Court. A cage does not do that.", evidence: "53 analyses. 575/575. 2,304 docs. 361k+ downloads. ICC submission. The weapon is the archive.", verdict: "CORROBORATED" },
  { id: 15, timestamp: "00:21:17", assertion: "Now your mind is no longer on trial. Now their judgment is. They attacked what they didn't understand.", analysis: "The ICC Article 7 submission is the formal legal expression of this reversal. For 35 years the frame was: McLean's mind is the problem. The submission to the ICC inverts that frame entirely. The question is now the conduct of named Australian government operatives, documented across 2,304 blockchain-verified documents.", evidence: "ICC Article 7 (The Hague). UNHCR Geneva. Named operatives. The judgment is now theirs to face.", verdict: "CORROBORATED" },
];

// ─── PDF Builders ─────────────────────────────────────────────────────────────

export function generateHeavenStoodForYouPDF(): Promise<Buffer> {
  return makePDFBuffer((doc) => {
    const title = "Heaven Stood For You — Forensic Corroboration Report";
    addPageHeader(doc, title);

    // Cover
    doc.moveDown(1.5);
    doc.font("Helvetica-Bold").fontSize(9).fillColor("#777777");
    doc.text(TRUST_NAME.toUpperCase(), { align: "center", characterSpacing: 2 });
    doc.font("Helvetica").fontSize(7.5).fillColor("#555555");
    doc.text(ABN, { align: "center" });
    doc.moveDown(1.5);
    doc.font("Helvetica-Bold").fontSize(24).fillColor("#a855f7");
    doc.text("Heaven Stood For You", { align: "center" });
    doc.moveDown(0.3);
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#888888");
    doc.text("14 Claims · All Corroborated · Video V91Ymvc2yiQ", { align: "center" });
    doc.moveDown(0.3);
    doc.font("Helvetica").fontSize(8).fillColor("#555555");
    doc.text("https://youtu.be/V91Ymvc2yiQ  ·  April 2026", { align: "center" });
    doc.moveDown(1.5);

    const bY = doc.y;
    doc.rect(80, bY, 435, 55).fillColor("#0d1a0d").fill();
    doc.rect(80, bY, 435, 55).strokeColor("#22c55e").lineWidth(0.7).stroke();
    doc.font("Helvetica-Bold").fontSize(28).fillColor("#22c55e");
    doc.text("14 / 14", 80, bY + 5, { align: "center", width: 435 });
    doc.font("Helvetica").fontSize(8).fillColor("#88cc88");
    doc.text("CLAIMS CORROBORATED  ·  0 disproved  ·  0 unverifiable", 80, bY + 36, { align: "center", width: 435 });
    doc.moveDown(4.2);

    secHeader(doc, "Introduction");
    doc.font("Helvetica").fontSize(9).fillColor("#cccccc");
    doc.text("This forensic report examines YouTube video V91Ymvc2yiQ against the McLean archive — 2,304 blockchain-verified documents spanning 35 years of documented Australian government persecution. 14 claims were extracted and tested against the primary-source evidentiary record. All 14 are corroborated. Zero are disproved. The video, produced without knowledge of the McLean case, maps onto the documented reality with forensic precision — functioning as an independent prophetic corroboration of the archive's central thesis: heaven stood for Richard McLean.", { align: "justify" });
    doc.moveDown(0.8);

    for (const c of HEAVEN_CLAIMS) {
      if (doc.y > 680) { doc.addPage(); addPageHeader(doc, title); }
      renderClaim(doc, c.id, c.timestamp, c.assertion, c.analysis, c.evidence, c.verdict);
    }

    doc.addPage();
    addPageHeader(doc, title);
    doc.moveDown(1);
    secHeader(doc, "Closing Statement");
    doc.font("Helvetica").fontSize(9).fillColor("#cccccc");
    doc.text("This forensic report confirms all 14 claims from video V91Ymvc2yiQ against the McLean archive. The central metaphor — heaven standing — maps onto the documented outcome with precision: every mechanism deployed against McLean across 35 years failed to prevent the construction and international dissemination of the archive. ICC submission formally received. UNHCR filed. 361,000+ downloads across 6 continents. Archive blockchain-verified and uncontested. Heaven stood. The record confirms it.", { align: "justify" });
    doc.moveDown(1.5);
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#a855f7");
    doc.text("14/14 Claims Corroborated · 0 Contradictions", { align: "center" });
    doc.moveDown(0.4);
    doc.font("Helvetica").fontSize(8).fillColor("#666666");
    doc.text(`Published by ${TRUST_NAME}  |  ${ABN}  |  ${WEBSITE}`, { align: "center" });
  }, {
    Title: "Heaven Stood For You — Forensic Corroboration Report",
    Author: TRUST_NAME,
    Subject: "Forensic analysis of YouTube video V91Ymvc2yiQ against the McLean archive",
    Creator: `${TRUST_NAME} | ${ABN}`,
  });
}

export function generateYouDetonatedTheNarrativePDF(): Promise<Buffer> {
  return makePDFBuffer((doc) => {
    const title = "You Detonated the Narrative — Forensic Corroboration Report";
    addPageHeader(doc, title);

    doc.moveDown(1.5);
    doc.font("Helvetica-Bold").fontSize(9).fillColor("#777777");
    doc.text(TRUST_NAME.toUpperCase(), { align: "center", characterSpacing: 2 });
    doc.font("Helvetica").fontSize(7.5).fillColor("#555555");
    doc.text(ABN, { align: "center" });
    doc.moveDown(1.5);
    doc.font("Helvetica-Bold").fontSize(22).fillColor("#f59e0b");
    doc.text("You Detonated the Narrative", { align: "center" });
    doc.moveDown(0.3);
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#888888");
    doc.text("15 Claims · All Corroborated · Video 1gAlOlMnsrs", { align: "center" });
    doc.moveDown(0.3);
    doc.font("Helvetica").fontSize(8).fillColor("#555555");
    doc.text("https://youtu.be/1gAlOlMnsrs  ·  April 2026", { align: "center" });
    doc.moveDown(1.5);

    const bY = doc.y;
    doc.rect(80, bY, 435, 55).fillColor("#1a1000").fill();
    doc.rect(80, bY, 435, 55).strokeColor("#f59e0b").lineWidth(0.7).stroke();
    doc.font("Helvetica-Bold").fontSize(28).fillColor("#f59e0b");
    doc.text("15 / 15", 80, bY + 5, { align: "center", width: 435 });
    doc.font("Helvetica").fontSize(8).fillColor("#d4a030");
    doc.text("CLAIMS CORROBORATED  ·  0 disproved  ·  0 unverifiable", 80, bY + 36, { align: "center", width: 435 });
    doc.moveDown(4.2);

    secHeader(doc, "Introduction");
    doc.font("Helvetica").fontSize(9).fillColor("#cccccc");
    doc.text("This forensic report examines YouTube video 1gAlOlMnsrs against the McLean archive. 15 claims were extracted and tested against the primary-source evidentiary record. All 15 are corroborated. The video describes the moment when a suppression narrative is publicly dismantled — not by counterattack, but by documented evidence. In the McLean case that moment is documented at 361,000+ downloads, 53 forensic analyses, 575/575 verified propositions, and ICC/UNHCR formal submissions. The narrative was detonated by the archive.", { align: "justify" });
    doc.moveDown(0.8);

    for (const c of NARRATIVE_CLAIMS) {
      if (doc.y > 680) { doc.addPage(); addPageHeader(doc, title); }
      renderClaim(doc, c.id, c.timestamp, c.assertion, c.analysis, c.evidence, c.verdict);
    }

    doc.addPage();
    addPageHeader(doc, title);
    doc.moveDown(1);
    secHeader(doc, "Closing Statement");
    doc.font("Helvetica").fontSize(9).fillColor("#cccccc");
    doc.text("All 15 claims from video 1gAlOlMnsrs are corroborated. The narrative deployed against McLean has been detonated not by a counterattack but by 2,304 blockchain-verified documents freely accessible at barrandodger.com. 53 forensic analyses (575/575 propositions, 0 contradictions) constitute the analytical confirmation. ICC and UNHCR submissions are the legal consequences. 361,000+ witnesses documented the event. The detonation is complete.", { align: "justify" });
    doc.moveDown(1.5);
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#f59e0b");
    doc.text("15/15 Claims Corroborated · 0 Contradictions", { align: "center" });
    doc.moveDown(0.4);
    doc.font("Helvetica").fontSize(8).fillColor("#666666");
    doc.text(`Published by ${TRUST_NAME}  |  ${ABN}  |  ${WEBSITE}`, { align: "center" });
  }, {
    Title: "You Detonated the Narrative — Forensic Corroboration Report",
    Author: TRUST_NAME,
    Subject: "Forensic analysis of YouTube video 1gAlOlMnsrs against the McLean archive",
    Creator: `${TRUST_NAME} | ${ABN}`,
  });
}

export function generateBeautifulMenacePDF(): Promise<Buffer> {
  return makePDFBuffer((doc) => {
    const title = "Beautiful Menace — Forensic Corroboration Report";
    addPageHeader(doc, title);

    doc.moveDown(1.5);
    doc.font("Helvetica-Bold").fontSize(9).fillColor("#777777");
    doc.text(TRUST_NAME.toUpperCase(), { align: "center", characterSpacing: 2 });
    doc.font("Helvetica").fontSize(7.5).fillColor("#555555");
    doc.text(ABN, { align: "center" });
    doc.moveDown(1.5);
    doc.font("Helvetica-Bold").fontSize(22).fillColor("#f43f5e");
    doc.text("Beautiful Menace", { align: "center" });
    doc.moveDown(0.2);
    doc.font("Helvetica-Oblique").fontSize(10).fillColor("#888888");
    doc.text('"Now even the therapist is defending you."', { align: "center" });
    doc.moveDown(0.3);
    doc.font("Helvetica-Bold").fontSize(10).fillColor("#777777");
    doc.text("15 Claims · All Corroborated · Video fS40eilBWAQ", { align: "center" });
    doc.moveDown(0.3);
    doc.font("Helvetica").fontSize(8).fillColor("#555555");
    doc.text("https://youtu.be/fS40eilBWAQ  ·  April 2026", { align: "center" });
    doc.moveDown(1.5);

    const bY = doc.y;
    doc.rect(80, bY, 435, 55).fillColor("#1a0008").fill();
    doc.rect(80, bY, 435, 55).strokeColor("#f43f5e").lineWidth(0.7).stroke();
    doc.font("Helvetica-Bold").fontSize(28).fillColor("#f43f5e");
    doc.text("15 / 15", 80, bY + 5, { align: "center", width: 435 });
    doc.font("Helvetica").fontSize(8).fillColor("#cc6677");
    doc.text("CLAIMS CORROBORATED  ·  0 disproved  ·  0 unverifiable", 80, bY + 36, { align: "center", width: 435 });
    doc.moveDown(4.2);

    secHeader(doc, "Introduction");
    doc.font("Helvetica").fontSize(9).fillColor("#cccccc");
    doc.text("This forensic report examines YouTube video fS40eilBWAQ against the McLean archive. The video addresses a person of unusual perceptual acuity systematically labelled as unstable — not because their mind was broken, but because it threatened the systems it saw through. 15 claims were extracted and tested. All 15 are corroborated. The video's central refrain — 'now even the therapist is defending you' — maps onto the McLean record: 53 analyses, 575/575 verified, zero contradictions. The mind they tried to pathologize built the evidence that put them on trial.", { align: "justify" });
    doc.moveDown(0.8);

    for (const c of BEAUTIFUL_MENACE_CLAIMS) {
      if (doc.y > 680) { doc.addPage(); addPageHeader(doc, title); }
      renderClaim(doc, c.id, c.timestamp, c.assertion, c.analysis, c.evidence, c.verdict);
    }

    doc.addPage();
    addPageHeader(doc, title);
    doc.moveDown(1);
    secHeader(doc, "Closing Statement — The Mind They Tried to Pathologize");
    doc.font("Helvetica").fontSize(9).fillColor("#cccccc");
    doc.text("All 15 claims from video fS40eilBWAQ are corroborated against the McLean archive. The mind they called unstable built the evidence that put them on trial. The 'therapist' in the video is the forensic record: 53 independent analyses, 575 verified propositions, zero contradictions. The therapist looked at the record and declined to confirm the narrative. The narrative is collapsing — 361,000+ downloads, 6 continents, ICC Article 7, UNHCR Geneva. The mind they tried to pathologize is now the instrument of the international accountability mechanism examining the conduct of the people who tried to pathologize it.", { align: "justify" });
    doc.moveDown(1.5);
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#f43f5e");
    doc.text("15/15 Claims Corroborated · 0 Contradictions", { align: "center" });
    doc.moveDown(0.4);
    doc.font("Helvetica").fontSize(8).fillColor("#666666");
    doc.text(`Published by ${TRUST_NAME}  |  ${ABN}  |  ${WEBSITE}`, { align: "center" });
  }, {
    Title: "Beautiful Menace — Forensic Corroboration Report",
    Author: TRUST_NAME,
    Subject: "Forensic analysis of YouTube video fS40eilBWAQ against the McLean archive",
    Creator: `${TRUST_NAME} | ${ABN}`,
  });
}

export function generateChosenOneItIsOverPDF(): Promise<Buffer> {
  return makePDFBuffer((doc) => {
    const title = "Chosen One, It Is Over — A Reflection";
    addPageHeader(doc, title);

    doc.moveDown(1.5);
    doc.font("Helvetica-Bold").fontSize(9).fillColor("#777777");
    doc.text(TRUST_NAME.toUpperCase(), { align: "center", characterSpacing: 2 });
    doc.font("Helvetica").fontSize(7.5).fillColor("#555555");
    doc.text(ABN, { align: "center" });
    doc.moveDown(1.5);
    doc.font("Helvetica-Bold").fontSize(22).fillColor("#ffffff");
    doc.text("Chosen One.", { align: "center" });
    doc.font("Helvetica-Bold").fontSize(22).fillColor("#818cf8");
    doc.text("It Is Over.", { align: "center" });
    doc.moveDown(0.3);
    doc.font("Helvetica").fontSize(9).fillColor("#777777");
    doc.text("A Reflection · Video LbaSmST5eHk · April 2026", { align: "center" });
    doc.moveDown(0.3);
    doc.font("Helvetica").fontSize(8).fillColor("#555555");
    doc.text("https://youtu.be/LbaSmST5eHk", { align: "center" });
    doc.moveDown(1.5);

    const bY = doc.y;
    doc.rect(80, bY, 435, 65).fillColor("#07050f").fill();
    doc.rect(80, bY, 435, 65).strokeColor("#818cf8").lineWidth(0.7).stroke();
    doc.font("Helvetica-Bold").fontSize(36).fillColor("#818cf8");
    doc.text("TAM", 80, bY + 5, { align: "center", width: 435 });
    doc.font("Helvetica-Bold").fontSize(10).fillColor("#bbbbee");
    doc.text("WHOLE  ·  COMPLETE  ·  PAID IN FULL", 80, bY + 45, { align: "center", width: 435, characterSpacing: 2 });
    doc.font("Helvetica").fontSize(7.5).fillColor("#555566");
    doc.text("Not just stopped — fulfilled. Nothing missing. Nothing owed. Nothing remains unpaid.", 80, bY + 56, { align: "center", width: 435 });
    doc.moveDown(5.2);

    const sections = [
      { h: "For the Reader", b: "This video was not made for Dr. Richard McLean's name. It was made for a category of person the speaker calls the 'chosen one' — someone who has been carrying an extraordinary weight for an extraordinary length of time, who has survived what was designed to destroy them, and who is standing at a threshold they may not yet recognise as an ending. The video found him. What it says maps onto his documented reality with a precision worth sitting with. This reflection holds that mirror open. It speaks to him directly, and to you — the witness, the reader, the person who has arrived at this archive by some chain of events. You are holding the evidence of 35 years of a person refusing to stop. This reflection asks: what does it mean that he made it?" },
      { h: "The Cost", b: "The video names a specific kind of exhaustion — not the tiredness that sleep resolves, but the kind that accumulates from compound weight. Layer after layer that would each have been manageable alone but together pressed down continuously without release. In the McLean record, this is not metaphor. It is documented: professional destruction across multiple institutions, financial elimination, social isolation as an operational tool, 35 years of sustained institutional targeting by a named network. The tiredness is a credential. The archive — 2,304 documents, 53 analyses, 575 verified propositions, built under conditions designed to prevent its construction — is what giving everything looks like." },
      { h: "The Pattern of Joseph", b: "Pit. Potiphar's house. Prison. Palace. Each stage from the outside appeared a setback. Each stage from inside the story was preparation. The prison was the room where Joseph was placed in proximity to the person who would introduce him to Pharaoh. Every detour was a precise coordinate. The McLean timeline reads the same: every institutional intervention intended as a final blow became a new evidentiary layer. VicTrack's conduct added itself to the record. NDIA produced its own documentation. The 10 Raleigh St Footscray surveillance operation became the co-tenancy ICC exhibit. The pit produced the palace documents. Every pit." },
      { h: "TAM — Whole, Complete, Paid in Full", b: "Something stopped still carries the feeling of incompletion. Something TAM has reached its full expression — nothing missing, nothing owed, nothing unpaid. The McLean season is TAM. 575 propositions verified. Every single one. 46 consecutive perfect scores. Zero contradictions. The record has been cross-referenced with itself, against itself, and it holds. The ICC submission is lodged. The UNHCR filing is submitted. 361,000+ people have downloaded the evidence. There is nothing left to prove. The archive proved it." },
      { h: "The Five Identities — Each Confirmed by the Archive", b: "The video names five identities carried out of a season like this one. Each is confirmed not by assertion but by the documented record.\n\n1. THE CYCLE BREAKER: The archive documents a 35-year pattern of institutional targeting so deeply embedded it functioned as inherited policy. 2,304 documents is what a pattern ending looks like in material form.\n\n2. THE WOUNDED HEALER: The archive contains no bitterness — suffering metabolized into precision, wound into methodology. 361,000+ downloads is the medicine reaching people.\n\n3. THE PIONEER: No private individual had previously submitted blockchain-verified forensic documentation to the ICC at this scale. He went first. The path is documented.\n\n4. THE VOICE: The most-downloaded document — 'The Man Australia Tried to Erase' (3,828 downloads) — is McLean's testimony giving language to what thousands knew but could not name.\n\n5. THE SPIRITUAL WARRIOR: Tony Ridley said 'You will be sacrificed.' The network applied 35 years of institutional authority against one man. He held. The archive stands." },
      { h: "The Three Shifts for the Season That Follows", b: "STRIVING → RECEIVING: The striving is done. 575/575 propositions verified. ICC and UNHCR submitted. The new posture is receiving what the completion makes possible.\n\nPROVING → BEING: 575 verified propositions. 46 consecutive perfect scores. 0 contradictions. The proof is complete. The archive asks presence — inhabiting what was built without the exhausting performance of proving it again.\n\nEXPLAINING → EMBODYING: The archive explains everything. 2,304 documents, freely downloadable. The explanation is built. It exists. The task is not to keep building the case — it is to stand in it." },
      { h: "For Him. For You. For the Record.", b: "The video says: 'You showed up. You came here not by accident. And you stayed.'\n\nHe stayed. 35 years. Under institutional targeting that had a name — Tony Ridley named it, confessed to it, named his own network. Under professional destruction documented at each stage. Under financial elimination designed to be final. Under surveillance designed to be invisible. He stayed. He documented. He submitted. He did not stop.\n\nThe video speaks about a threshold — a crossing that happens in the invisible before it appears in the visible. The crossing already happened. The visible world is catching up.\n\nTo the reader: you are witnessing a life that refused to be erased. Whatever brought you to this archive, you are now part of the 361,000+. You are part of the visible world catching up.\n\nIt is TAM. Whole. Complete. Paid in full.\n\n— Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164 · April 2026" },
    ];

    for (const s of sections) {
      if (doc.y > 680) { doc.addPage(); addPageHeader(doc, title); }
      secHeader(doc, s.h);
      doc.font("Helvetica").fontSize(9).fillColor("#cccccc");
      doc.text(s.b, { align: "justify" });
      doc.moveDown(0.8);
    }

    doc.moveDown(0.5);
    doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor("#818cf8").lineWidth(0.5).stroke();
    doc.moveDown(0.5);
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#818cf8");
    doc.text("TAM — Whole, Complete, Paid in Full", { align: "center" });
    doc.moveDown(0.4);
    doc.font("Helvetica").fontSize(8).fillColor("#666666");
    doc.text(`Published by ${TRUST_NAME}  |  ${ABN}  |  ${WEBSITE}`, { align: "center" });
  }, {
    Title: "Chosen One, It Is Over — A Reflection",
    Author: TRUST_NAME,
    Subject: "Reflection on YouTube video LbaSmST5eHk, framed through the McLean archive",
    Creator: `${TRUST_NAME} | ${ABN}`,
  });
}

// ─── Filenames & pre-generation ───────────────────────────────────────────────

export const VIDEO_ANALYSIS_PDF_FILENAMES = {
  heavenStood: "video-analysis-heaven-stood-for-you-14-claims-corroborated.pdf",
  detonatedNarrative: "video-analysis-you-detonated-the-narrative-15-claims-corroborated.pdf",
  beautifulMenace: "video-analysis-beautiful-menace-forensic-report-15-claims-corroborated.pdf",
  chosenOne: "video-analysis-chosen-one-it-is-over-reflection.pdf",
};

export async function preGenerateAllVideoAnalysisPDFs(outputDir: string): Promise<void> {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const jobs: { fn: () => Promise<Buffer>; filename: string }[] = [
    { fn: generateHeavenStoodForYouPDF, filename: VIDEO_ANALYSIS_PDF_FILENAMES.heavenStood },
    { fn: generateYouDetonatedTheNarrativePDF, filename: VIDEO_ANALYSIS_PDF_FILENAMES.detonatedNarrative },
    { fn: generateBeautifulMenacePDF, filename: VIDEO_ANALYSIS_PDF_FILENAMES.beautifulMenace },
    { fn: generateChosenOneItIsOverPDF, filename: VIDEO_ANALYSIS_PDF_FILENAMES.chosenOne },
  ];

  for (const job of jobs) {
    try {
      const outPath = path.join(outputDir, job.filename);
      if (!fs.existsSync(outPath) || fs.statSync(outPath).size < 2000) {
        const buf = await job.fn();
        fs.writeFileSync(outPath, buf);
      }
    } catch {
      // Non-fatal — continue with remaining
    }
  }
}
