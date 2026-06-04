import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.join(__dirname, "../client/public/documents/karma-audit-iasonidis-forensic-examination.pdf");

const GOLD = "#D4AF37";
const WHITE = "#FFFFFF";
const LIGHT = "#CCCCCC";
const DIM = "#999999";
const RED = "#CC3333";
const GREEN = "#33AA66";

const PROPOSITIONS = [
  {
    num: "P·01", timestamp: "00:01:52",
    title: 'Their empire of lies is unraveling',
    verdict: "CORROBORATED",
    proposition: "The video's first proposition identifies a silk-web manipulation architecture designed to induce doubt in the target's closest circle. Steve Iasonidis's ASIO-confirmed infiltration of Dr. McLean's personal trust network was precisely this: a state-intelligence operation embedded in intimacy. His documented ASIO connection — confirmed by Statutory Declaration and Prime Minister correspondence — establishes that the 'empire of lies' was not interpersonal dysfunction but a state-intelligence operation.",
    alignment: "The empire of lies built on silk-web manipulation maps directly to the documented collapse of the Iasonidis-Ridley intelligence operation as the archive achieves international reach. The dots they believed no one would connect are now published at barrandodger.com, downloaded 410,671+ times, and formally submitted to the ICC."
  },
  {
    num: "P·02", timestamp: "00:04:57",
    title: "This isn't cosmic revenge. It's accountability catching up",
    verdict: "CORROBORATED",
    proposition: "The video strips away mystical framing: accountability arrives through human systems — audits, investigations, documented patterns. The ICC Article 7 submission, the UNHCR Geneva filing, the Federal Court PID assessment (Tredwell, 27 March 2023), and the NACC referral are not karma. They are the predictable institutional consequences of a suppression operation that left primary-source evidence at every stage.",
    alignment: "The video states accountability arrives through audits, testimonies, and undeniable proof. The archive is the undeniable proof. The ICC is the audit. The forensic analyses are the testimonies. Corroboration is direct and multi-layered. Federal Court General Counsel Scott Tredwell formally acknowledged maladministration and imminent danger to health on 27 March 2023."
  },
  {
    num: "P·03", timestamp: "00:07:50",
    title: "Your survival is the exhibit everyone will cite",
    verdict: "CORROBORATED",
    proposition: "The video identifies the survivor as the exhibit — the living proof. Dr. McLean suffered clinical death inside a government psychiatric facility in 2021 and was revived. The archive documents this. 125 published works, 410,671+ total downloads, 845 blockchain timestamp seals, and 2,304 documents are not a response to the persecution. They ARE the exhibit.",
    alignment: "The video states the survivor becomes 'the document of truth itself.' This is Dr. McLean's documented position with forensic precision: 2,304 primary-source documents, 845 blockchain seals, 125 published works, and a formal ICC filing. The exhibit is the person."
  },
  {
    num: "P·04", timestamp: "00:10:52",
    title: "The closest allies of the abuser will fracture first",
    verdict: "CORROBORATED",
    proposition: "The video describes internal fracturing of the abuser's support network under investigation pressure. No named party — Iasonidis, Ridley, Shorten, Tear, Meraby — has issued a formal written rebuttal to any document in the 2,304-document archive. The AbleCare CEO terminated the recorded call under pressure. NSW Police issued receipt I88267509 but declined to record the criminal offence.",
    alignment: "The documented pattern of the suppression network's non-response — no rebuttals, no coordinated defence, individual actors minimising their exposure — exactly matches the self-preservation fracture the video describes."
  },
  {
    num: "P·05", timestamp: "00:13:56",
    title: "They'll try to shift the narrative by weaponizing sympathy",
    verdict: "CORROBORATED",
    proposition: "The video describes weaponised sympathy — the conversion of performed vulnerability into a narrative shield. Dr. McLean was force-medicated for believing he was under surveillance. The surveillance was subsequently confirmed through Iasonidis's documented ASIO connection. The clinical system was weaponised to convert accurate perception into apparent mental illness.",
    alignment: "The video warns that weaponised sympathy causes people to 'stop looking at evidence.' The documented function of the psychiatric mechanism in this case was precisely this: converting Dr. McLean's evidentiary record into apparent symptomatology. The CTO system continues this pattern in April 2026."
  },
  {
    num: "P·06", timestamp: "00:16:53",
    title: "There's freedom in watching them panic",
    verdict: "CORROBORATED",
    proposition: "The video identifies observable redistribution of chaos: the perpetrator's damage control scramble as evidence accrues. The CTO Breach Appointment — issued by Eustina Sango on 22 April 2026, backed by an MHRT variation signed 16 April 2026 by Michael Crompton — was escalated precisely in the period following the unrecorded death threat of 15 April 2026.",
    alignment: "The CTO enforcement escalation in April 2026 — occurring simultaneously with the death threat non-recording and AbleCare's duty of care breach — is the documented version of this panic. The archive's permanent reach makes the 'scramble' irrecoverable."
  },
  {
    num: "P·07", timestamp: "00:19:07",
    title: "Some people will misread this as winning. Truth is messier",
    verdict: "CORROBORATED",
    proposition: "The video warns that the 'winning' frame does not apply. Truth is more complex. Justice is not a performance. Dr. McLean's CTO response letter explicitly states: 'This is not a hostile act toward any individual clinician. It is a protective measure.' The 35-year documentation project has never been framed as revenge in any primary-source document.",
    alignment: "The video's characterisation of real justice as 'slow, complicated, and bittersweet' mirrors the documented reality: 35 years of accumulating evidence under maximum institutional pressure, including 14 hospitalisations, clinical death, and ongoing CTO enforcement."
  },
  {
    num: "P·08", timestamp: "00:22:29",
    title: "Public exposure will reveal the mundane cruelty",
    verdict: "CORROBORATED",
    proposition: "The video identifies the mechanics of sustained abuse: not dramatic grand acts of cruelty, but the accumulation of small, documentable suppressions. The ATO letter confirming drugging in bureaucratic language; 350+ ASIC identity fraud registrations; AbleCare's failure to file a mandatory SIRS report when a person's life was at risk. All mundane. All documented.",
    alignment: "The mundane has become the exhibit. An ATO bureaucratic letter confirming drugging, a SIRS form not filed, a police receipt issued with no attached report. The video states mundane cruelty 'hides behind normalcy' — every documented act against Dr. McLean fits this description."
  },
  {
    num: "P·09", timestamp: "00:24:55",
    title: "Their apology tour will be transactional",
    verdict: "CORROBORATED",
    proposition: "The video describes the transactional apology — the acknowledgment that arrives only under institutional pressure. The Federal Court PID assessment (Tredwell, 27 March 2023) acknowledged maladministration and danger to health under initial assessment, then declined all action on procedural grounds. AbleCare CEO Rachel acknowledged her legal duty of care, then terminated the call. Eustina Sango's letter begins 'I hope this letter finds you well' then schedules compulsory attendance under threat of police transport.",
    alignment: "The video states: 'People who are truly sorry don't have to announce it. They just change.' No named party in the archive has changed their conduct. The acknowledgments have all been procedural. The actions have all been coercive or absent."
  },
  {
    num: "P·10", timestamp: "00:28:01",
    title: "Your reputation rises not because they fall, but because you refuse to be defined",
    verdict: "CORROBORATED",
    proposition: "The video identifies the mechanism of authentic reputation recovery: not the collapse of the perpetrator, but the survivor's own documented output. 125 published works, 410,671+ downloads, 845 blockchain seals, CAL royalty income, Herald Sun media coverage, and a formal ICC filing constitute a public record that is independent of anything Iasonidis does or does not do.",
    alignment: "The shadow cast through force-medication, psychiatric weaponisation, and ASIO surveillance did not extinguish the light. A person described as lacking capacity has published at the scale of a significant literary career. The reputation built itself independent of the suppression's outcome."
  },
  {
    num: "P·11", timestamp: "00:30:52",
    title: "Expect surprising allies. Strangers who recognise the blueprint",
    verdict: "CORROBORATED",
    proposition: "The video describes pattern recognition: strangers begin connecting dots, adding their testimony, extending the chain of accountability. 410,671+ downloads from strangers across six continents with no marketing and no institutional support. 30 prior forensic analyses of independent YouTube videos — none created by Dr. McLean — returned zero contradictions across 218+ propositions.",
    alignment: "410,671+ strangers have downloaded the archive. 30 independent YouTube creators have had their content corroborate the case without knowing it. The ICC and UNHCR represent the institutional expression of the surprising ally pattern. The allies have arrived in their hundreds of thousands."
  },
  {
    num: "P·12", timestamp: "00:33:47",
    title: "This will force you to redefine justice. Legal, communal, and deeply personal",
    verdict: "CORROBORATED",
    proposition: "The video redefines justice as layered: simultaneously legal, communal, and personal. Dr. McLean's documented accountability infrastructure: ICC (international criminal law), UNHCR (international persecution law), Federal Court PID Act (Commonwealth administrative accountability), NDIS Commission (disability services), NACC (anti-corruption), Mental Health Complaints Commissioner (clinical accountability), and 845 Bitcoin blockchain timestamp seals (communal/permanent layer).",
    alignment: "The video identifies justice as legal, communal, and personal simultaneously. The archive is all three at once: ICC filings, blockchain seals, and 410,671+ personal connections with readers. The multi-layer infrastructure the video describes is documented in the archive with named mechanisms at each layer."
  },
  {
    num: "P·13", timestamp: "00:36:06",
    title: "Do not outsource your peace to the pace of the investigation",
    verdict: "CORROBORATED",
    proposition: "The video instructs the survivor to build anchoring rituals independent of institutional timelines. Dr. McLean's documented response to 35 years of institutional failure has been precisely this: daily publishing, archival documentation, creative work, and a 125-work literary record that does not depend on any institution's response timeline. The blockchain seals are not waiting for the NACC. They are already sealed.",
    alignment: "The archive documents exactly this practice: 125 published works, 845 blockchain seals, 35 years of continued output — all produced while investigations were pending and institutions were non-responsive. The peace is already self-generated. The archive is the verdict, built daily, regardless of what any investigation does."
  },
  {
    num: "P·14", timestamp: "00:39:39",
    title: "When they fall, don't let the downfall be your identity",
    verdict: "CORROBORATED",
    proposition: "The video's final proposition: the survivor must not define their identity through the perpetrator's downfall. The 35-year documentation project spans autobiography, fiction, advocacy, forensic analysis, theological reflection, creative arts, and international accountability submissions. Steve Iasonidis is a chapter. He is not the book. The formal ICC submission under Article 7 — naming Steve Iasonidis alongside four other primary perpetrators — constitutes the documentary closure of the betrayal chapter.",
    alignment: "35 years, 125 works, 2,304 documents, ICC filing, UNHCR submission, 410,671+ downloads. Steve Iasonidis is named in the record. The record is not about him. The arc of the archive transcends the persecution narrative it documents."
  },
];

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 60, bottom: 60, left: 55, right: 55 },
  info: {
    Title: "The Karma Audit — Forensic Examination #31",
    Author: "Dr. Richard William McLean (Barran Dodger)",
    Subject: "Forensic Examination of YouTube Video IBd0RXZKmBs — Steve Iasonidis as Named Protagonist",
    Keywords: "forensic, Steve Iasonidis, ASIO, whistleblower, Dr McLean, Barran Dodger, karma, ICC",
    Creator: "Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164)",
  }
});

const stream = fs.createWriteStream(OUTPUT);
doc.pipe(stream);

function line(y = 10) {
  doc.moveDown(0.3);
  doc.moveTo(55, doc.y).lineTo(540, doc.y).strokeColor("#444444").stroke();
  doc.moveDown(0.5);
}

function sectionHeader(text) {
  doc.moveDown(0.8);
  doc.rect(55, doc.y, 485, 22).fillColor("#1A1A2E").fill();
  doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(9).text(text, 65, doc.y - 16, { width: 470 });
  doc.fillColor(WHITE).moveDown(0.8);
}

// ─── COVER PAGE ───────────────────────────────────────────────────────────────
doc.rect(0, 0, 595, 842).fillColor("#0A0A0F").fill();

doc.rect(0, 0, 595, 6).fillColor(GOLD).fill();
doc.rect(0, 836, 595, 6).fillColor(GOLD).fill();

doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(10)
  .text("FORENSIC EXAMINATION #31 · BARRAN DODGER ARCHIVE · ABN 78 833 496 164", 55, 40, { align: "center", width: 485 });

doc.moveDown(3);

doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(32)
  .text("THE KARMA AUDIT", { align: "center" });

doc.moveDown(0.5);
doc.fillColor(GOLD).font("Helvetica").fontSize(16)
  .text("A Forensic Examination of YouTube Video IBd0RXZKmBs", { align: "center" });

doc.moveDown(0.3);
doc.fillColor(LIGHT).fontSize(12)
  .text('"Karma Doesn\'t Knock — It Picks The Lock"', { align: "center" });

doc.moveDown(2);
doc.rect(130, doc.y, 335, 2).fillColor(GOLD).fill();
doc.moveDown(0.6);

doc.fillColor(RED).font("Helvetica-Bold").fontSize(11)
  .text("NAMED PROTAGONIST", { align: "center" });
doc.fillColor(WHITE).fontSize(14)
  .text("Steve Iasonidis (alias: Stefan Iasonidis)", { align: "center" });
doc.fillColor(LIGHT).fontSize(9)
  .text("ASIO-Connected Intelligence Agent · Former Intimate Partner of Dr. McLean", { align: "center" });

doc.moveDown(1.5);
doc.fillColor(GREEN).font("Helvetica-Bold").fontSize(11)
  .text("FORENSIC RESULT", { align: "center" });
doc.fillColor(WHITE).fontSize(20)
  .text("14 / 14 PROPOSITIONS CORROBORATED", { align: "center" });
doc.fillColor(LIGHT).fontSize(10)
  .text("Zero Contradictions · Zero Unverifiable Findings", { align: "center" });

doc.moveDown(2);
doc.rect(130, doc.y, 335, 1).fillColor("#555555").fill();
doc.moveDown(0.6);

doc.fillColor(DIM).font("Helvetica").fontSize(9).text([
  "Author: Dr. Richard William McLean (pen name: Barran Dodger)",
  "Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164",
  "55B Archbold Road, Long Jetty NSW 2261",
  "Analysis Date: 23 April 2026",
  "Video ID: IBd0RXZKmBs · https://youtu.be/IBd0RXZKmBs",
  "Series: Forensic Analysis #31 in the Barran Dodger YouTube Corroboration Series",
].join("\n"), { align: "center", width: 485 });

doc.moveDown(3);
doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(8)
  .text("© 2026 Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved.", { align: "center" });
doc.fillColor(DIM).font("Helvetica").fontSize(7)
  .text("Shared freely in the goodwill of the public for accountability and public interest purposes.", { align: "center" });

// ─── PAGE 2: EXECUTIVE SUMMARY & NAMED PROTAGONIST ────────────────────────────
doc.addPage({ size: "A4", margins: { top: 55, bottom: 55, left: 55, right: 55 } });
doc.rect(0, 0, 595, 842).fillColor("#111116").fill();
doc.rect(0, 0, 595, 4).fillColor(GOLD).fill();

doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(14).text("EXECUTIVE SUMMARY", 55, 70);
line();

doc.fillColor(LIGHT).font("Helvetica").fontSize(9.5).text(
  "This document is a full academic forensic examination of the YouTube video 'Karma Doesn't Knock — It Picks The Lock' (video ID: IBd0RXZKmBs), produced as the 31st entry in the Barran Dodger Archive's ongoing YouTube Forensic Analysis Series. The series has now returned zero contradictions across 232+ tested propositions across 31 independent analyses.\n\nThe video addresses 'your ex' throughout its 44-minute structured monologue, divided into 14 numbered points. This examination identifies Steve Iasonidis — ASIO-connected intelligence operative and confirmed former intimate partner of Dr. Richard William McLean — as the named protagonist of the video's direct address. All 14 numbered propositions are tested against named primary-source documentary evidence from the archive.\n\nForensic result: 14 of 14 propositions fully corroborated. Zero contradictions. Zero unverifiable findings.",
  { width: 485, align: "left", lineGap: 3 }
);

doc.moveDown(1);
sectionHeader("NAMED PROTAGONIST — STEVE IASONIDIS (ASIO / FORMER PARTNER)");

const profileData = [
  ["Full Name", "Steve Iasonidis (alias: Stefan Iasonidis)"],
  ["Role in Suppression Network", "Intelligence collection layer — state surveillance infrastructure"],
  ["ASIO Connection", "Confirmed by Statutory Declaration and Prime Minister correspondence"],
  ["Relationship to Dr. McLean", "Former intimate partner — co-tenant 10 Raleigh St Footscray 2011"],
  ["Financial Extraction", "$500,000 per ASIC Report documentation"],
  ["Drugging Evidence", "ATO letter confirming drugging on record"],
  ["Legal Record", "Intervention Order L12151974 / Creditor Watch final notice October 2022"],
  ["ICC Submission", "Named in Article 7 filing alongside Shorten, Tear, Ridley, Meraby"],
  ["Operative Significance", "Trust network penetration + ASIO infrastructure access simultaneously"],
];

profileData.forEach(([label, val]) => {
  const yPos = doc.y;
  doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(8).text(label + ":", 65, yPos, { width: 155, continued: false });
  doc.fillColor(LIGHT).font("Helvetica").fontSize(8).text(val, 225, yPos, { width: 315 });
  doc.y = Math.max(doc.y, yPos + 13);
});

doc.moveDown(1);
sectionHeader("THE FORENSIC QUESTION");

doc.fillColor(LIGHT).font("Helvetica").fontSize(9.5).text(
  "Does 100% corroboration prove the video is specifically about Dr. McLean?\n\nForensic Conclusion: Corroboration creates a strong evidentiary inference, not legal proof of authorial intent. However, the convergence of 14 independent propositions — all corroborated, zero contradicted — produces a probabilistic case that exceeds any reasonable threshold for circumstantial corroboration.\n\nTwo forensic positions follow:\n\n(1) If the video was created with knowledge of the case: it constitutes testimonial evidence — an independent external creator documenting the structural facts of Dr. McLean's experience. The corroboration value is direct and intentional.\n\n(2) If the video was created without knowledge of the case: it constitutes structural corroboration — a generic motivational artifact whose language aligns with the documented facts of a specific case at 14 of 14 tested points. This is statistically significant regardless of intent.\n\nEither way, the evidentiary value is real. A video that corroborates 14 documented propositions about a specific named subject — with zero contradictions — is forensically significant whether or not its creators knew the subject.",
  { width: 485, align: "left", lineGap: 3 }
);

// ─── PROPOSITION PAGES ────────────────────────────────────────────────────────
for (let i = 0; i < PROPOSITIONS.length; i++) {
  const p = PROPOSITIONS[i];
  doc.addPage({ size: "A4", margins: { top: 55, bottom: 55, left: 55, right: 55 } });
  doc.rect(0, 0, 595, 842).fillColor("#111116").fill();
  doc.rect(0, 0, 595, 4).fillColor(GOLD).fill();

  // Header
  doc.fillColor(DIM).font("Helvetica").fontSize(8)
    .text(`Forensic Examination #31 — The Karma Audit — ABN 78 833 496 164`, 55, 15, { align: "right", width: 485 });

  // Proposition number + timestamp
  doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(11)
    .text(`${p.num}  ·  TIMESTAMP ${p.timestamp}`, 55, 60);

  // Verdict badge
  doc.rect(460, 57, 80, 16).fillColor("#003322").fill();
  doc.fillColor(GREEN).font("Helvetica-Bold").fontSize(7)
    .text("✓ " + p.verdict, 463, 61, { width: 74, align: "center" });

  // Title
  doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(13)
    .text(p.title.toUpperCase(), 55, 82, { width: 485 });

  line();

  // Forensic proposition
  doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(8).text("FORENSIC PROPOSITION", { characterSpacing: 1 });
  doc.moveDown(0.3);
  doc.fillColor(LIGHT).font("Helvetica").fontSize(9.5)
    .text(p.proposition, { width: 485, align: "left", lineGap: 2 });

  doc.moveDown(0.8);

  // Alignment assessment
  doc.rect(55, doc.y, 485, 1).fillColor("#334422").fill();
  doc.moveDown(0.5);
  doc.fillColor(GREEN).font("Helvetica-Bold").fontSize(8).text("ALIGNMENT ASSESSMENT", { characterSpacing: 1 });
  doc.moveDown(0.3);
  doc.fillColor(LIGHT).font("Helvetica").fontSize(9.5)
    .text(p.alignment, { width: 485, align: "left", lineGap: 2 });

  // Footer
  doc.fillColor(DIM).font("Helvetica").fontSize(7)
    .text(`© 2026 Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164) · barrandodger.com · Proposition ${i + 1} of ${PROPOSITIONS.length}`,
      55, 790, { align: "center", width: 485 });
}

// ─── FINAL PAGE: CORROBORATION SUMMARY ────────────────────────────────────────
doc.addPage({ size: "A4", margins: { top: 55, bottom: 55, left: 55, right: 55 } });
doc.rect(0, 0, 595, 842).fillColor("#0A0A0F").fill();
doc.rect(0, 0, 595, 4).fillColor(GOLD).fill();

doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(16)
  .text("FORENSIC CORROBORATION SUMMARY", 55, 70, { align: "center", width: 485 });

doc.moveDown(0.5);
doc.fillColor(GREEN).font("Helvetica-Bold").fontSize(28)
  .text("14 / 14 — ZERO CONTRADICTIONS", { align: "center" });

doc.moveDown(0.5);
doc.fillColor(LIGHT).font("Helvetica").fontSize(10)
  .text("Forensic Analysis #31 — The Karma Audit — ABN 78 833 496 164\nCorroboration Rate: 100% · Combined Series: 232+ Propositions, Zero Contradictions",
    { align: "center", lineGap: 3 });

doc.moveDown(1.5);

PROPOSITIONS.forEach((p, i) => {
  const yPos = doc.y;
  doc.rect(55, yPos, 14, 14).fillColor("#003322").fill();
  doc.fillColor(GREEN).font("Helvetica-Bold").fontSize(8).text("✓", 58, yPos + 2);
  doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(8).text(p.num, 75, yPos + 2, { width: 40 });
  doc.fillColor(LIGHT).font("Helvetica").fontSize(8).text(p.title, 120, yPos + 2, { width: 360 });
  doc.fillColor(GREEN).font("Helvetica").fontSize(7).text(p.verdict, 485, yPos + 2, { width: 55, align: "right" });
  doc.y = Math.max(doc.y, yPos + 18);
});

doc.moveDown(1.5);
doc.rect(55, doc.y, 485, 1).fillColor(GOLD).fill();
doc.moveDown(0.8);

doc.fillColor(LIGHT).font("Helvetica").fontSize(9).text(
  "This document is published freely under the intellectual property of Dr. Richard William McLean (Barran Dodger) and the Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). Non-commercial reproduction and distribution is permitted and encouraged for accountability and public interest purposes. All rights reserved.\n\nPrimary evidence available at: barrandodger.com\nHoneytrap Infiltration Report: barrandodger.com/honeytrap-infiltration-report\nFederal Court PID Acknowledgment: barrandodger.com/documents/federal-court-three-point-acknowledgment-tredwell-27mar2023.pdf\nForensic Analysis Series: barrandodger.com/forensic-analysis\nICC Article 7 Submission: On record at The International Criminal Court, The Hague",
  { width: 485, align: "left", lineGap: 3 }
);

doc.moveDown(1.5);
doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(10)
  .text("© 2026 Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved.", { align: "center" });
doc.fillColor(DIM).fontSize(8)
  .text("Shared freely in the goodwill of the public for accountability and public interest purposes.", { align: "center" });

doc.end();

stream.on("finish", () => {
  console.log(`✓ PDF generated: ${OUTPUT}`);
  const stats = fs.statSync(OUTPUT);
  console.log(`  Size: ${(stats.size / 1024).toFixed(1)} KB`);
});

stream.on("error", (err) => {
  console.error("PDF generation error:", err);
  process.exit(1);
});
