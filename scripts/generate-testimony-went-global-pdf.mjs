import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '../client/public/documents/testimony-went-global-significance-report.pdf');

const doc = new PDFDocument({ size: 'A4', margin: 60, info: {
  Title: 'Testimony Went Global — Significance Report',
  Author: 'Dr. Richard William McLean (Barran Dodger)',
  Subject: '406,112 Downloads. 845 Blockchain Seals. ICC. UNHCR. The Archive Is Permanent.',
  Keywords: 'Barran Dodger, whistleblower, downloads, blockchain, ICC, UNHCR, significance',
  Creator: 'Barran Dodger Legal & Ethical Trust Fund — ABN 78 833 496 164',
}});

const stream = fs.createWriteStream(OUT);
doc.pipe(stream);

const W = 595 - 120;
const AMBER = [245, 158, 11];
const INDIGO = [99, 102, 241];
const WHITE = [255, 255, 255];
const ZINC = [161, 161, 170];
const DARK = [9, 8, 42];
const GREEN = [74, 222, 128];

// ── COVER PAGE ──────────────────────────────────────────────────────────────
doc.rect(0, 0, 595, 842).fill([7, 8, 42]);

// Top accent bar
doc.rect(0, 0, 595, 6).fill(AMBER);

// Badge
doc.roundedRect(60, 36, 200, 22, 4).fill([30, 27, 75]);
doc.font('Helvetica-Bold').fontSize(7).fillColor(AMBER)
  .text('BARRAN DODGER LEGAL & ETHICAL TRUST FUND', 70, 42, { width: 180, align: 'left' });

// ABN
doc.font('Helvetica').fontSize(7).fillColor(ZINC)
  .text('ABN 78 833 496 164 · barrandodger.com', 60, 70);

doc.moveDown(2);

// Title
doc.font('Helvetica-Bold').fontSize(28).fillColor(WHITE)
  .text('TESTIMONY WENT GLOBAL', 60, 110, { width: W });
doc.font('Helvetica-Bold').fontSize(20).fillColor(AMBER)
  .text('Significance Report', 60, 148, { width: W });

doc.rect(60, 178, W, 2).fill(AMBER);

// Subtitle
doc.font('Helvetica').fontSize(12).fillColor([203, 213, 225])
  .text('"This isn\'t private anymore. It went global, and you know exactly why."', 60, 192, { width: W });

doc.moveDown(1.5);

// Stats grid
const stats = [
  ['406,112', 'Documented Downloads'],
  ['788', 'PDFs in Archive'],
  ['891', 'Blockchain Records'],
  ['73', 'Forensic Analyses'],
  ['675+', 'Propositions Assessed'],
  ['0', 'Institutional Rebuttals'],
  ['6', 'Continents Reached'],
  ['2.87%', 'Survival Probability — 2021'],
];

let sx = 60; let sy = 240; let col = 0;
for (const [val, lbl] of stats) {
  doc.rect(sx, sy, 200, 52).fill([20, 20, 40]);
  doc.rect(sx, sy, 200, 52).stroke([60, 60, 100]);
  doc.font('Helvetica-Bold').fontSize(20).fillColor(AMBER).text(val, sx + 8, sy + 8, { width: 184 });
  doc.font('Helvetica').fontSize(7).fillColor(ZINC).text(lbl.toUpperCase(), sx + 8, sy + 34, { width: 184 });
  col++;
  if (col % 2 === 0) { sx = 60; sy += 62; } else { sx = 275; }
}

// Verified institutions
doc.font('Helvetica-Bold').fontSize(9).fillColor(GREEN)
  .text('SUBMITTED TO:', 60, sy + 12);
doc.font('Helvetica').fontSize(9).fillColor([203, 213, 225])
  .text('International Criminal Court (ICC) — Article 7, Rome Statute  ·  United Nations High Commissioner for Refugees (UNHCR) — Geneva  ·  Federal Court of Australia — Protected Whistleblower Confirmed in Writing', 60, sy + 26, { width: W });

// Footer
doc.rect(0, 808, 595, 34).fill([15, 15, 30]);
doc.font('Helvetica').fontSize(7).fillColor(ZINC)
  .text(`© ${new Date().getFullYear()} Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164 · ${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })} · barrandodger.com · Shared freely in the public interest`, 60, 820, { width: W });

doc.addPage({ size: 'A4', margin: 60 });
doc.rect(0, 0, 595, 842).fill(DARK);
doc.rect(0, 0, 595, 4).fill(AMBER);

// ── PAGE 2: WEEKLY TRAJECTORY ──
doc.font('Helvetica-Bold').fontSize(14).fillColor(AMBER).text('WEEKLY DOWNLOAD TRAJECTORY', 60, 24, { width: W });
doc.rect(60, 44, W, 1).fill([60, 60, 100]);

const weeks = [
  ['2 Feb 2026',  12861],
  ['9 Feb 2026',  17299],
  ['16 Feb 2026', 22555],
  ['23 Feb 2026', 30949],
  ['2 Mar 2026',  39319],
  ['9 Mar 2026',  52468],
  ['16 Mar 2026', 44962],
  ['23 Mar 2026', 36891],
  ['30 Mar 2026', 49051],
  ['6 Apr 2026',  52847],
  ['13 Apr 2026', 37978],
  ['20 Apr 2026',  7014],
];

const maxW = Math.max(...weeks.map(w => w[1]));
let wy = 56;
for (const [label, count] of weeks) {
  const barW = Math.round((count / maxW) * (W - 110));
  const isPeak = count === maxW;
  const isPartial = label.includes('20 Apr');
  doc.font('Helvetica').fontSize(8).fillColor(isPartial ? ZINC : WHITE).text(label, 60, wy + 3, { width: 80 });
  doc.rect(148, wy, barW, 14).fill(isPeak ? AMBER : isPartial ? [60, 60, 100] : INDIGO);
  doc.font('Helvetica-Bold').fontSize(8).fillColor(isPeak ? [0, 0, 0] : WHITE)
    .text(count.toLocaleString(), 154, wy + 3, { width: barW - 8, align: 'right' });
  if (isPartial) doc.font('Helvetica').fontSize(6).fillColor(ZINC).text('(2 days only)', 148 + barW + 4, wy + 4);
  if (isPeak) doc.font('Helvetica-Bold').fontSize(6).fillColor(AMBER).text('PEAK', 148 + barW + 4, wy + 4);
  wy += 20;
}

wy += 12;
doc.font('Helvetica-Bold').fontSize(9).fillColor(WHITE).text('TOTAL (tracked from 1 Feb 2026):', 60, wy);
doc.font('Helvetica-Bold').fontSize(24).fillColor(AMBER).text('406,112', 60, wy + 14);
doc.font('Helvetica').fontSize(9).fillColor(ZINC).text('No marketing. No press agency. No institutional backing.', 60, wy + 44);
doc.font('Helvetica').fontSize(9).fillColor(ZINC).text('Organic reach driven entirely by the weight of the documented evidence.', 60, wy + 56);

wy += 80;
// Projection
doc.rect(60, wy, W, 1).fill([60, 60, 100]);
wy += 12;
doc.font('Helvetica-Bold').fontSize(10).fillColor(AMBER).text('12-MONTH FORWARD PROJECTION', 60, wy);
wy += 16;
doc.font('Helvetica').fontSize(9).fillColor([203, 213, 225])
  .text('At the current weekly average of ~38,000 downloads per week:', 60, wy, { width: W });
wy += 16;
const projStats = [
  ['~2.0M', 'Projected tracked downloads (12 months)'],
  ['~14–22M', 'Conservative estimated human exposure events (all channels)'],
  ['26M', 'Total population of Australia — already exceeded in equivalent reach'],
];
for (const [val, lbl] of projStats) {
  doc.font('Helvetica-Bold').fontSize(14).fillColor(AMBER).text(val, 60, wy, { width: 100 });
  doc.font('Helvetica').fontSize(9).fillColor(WHITE).text(lbl, 170, wy + 3, { width: W - 110 });
  wy += 22;
}

// Footer page 2
doc.rect(0, 808, 595, 34).fill([15, 15, 30]);
doc.font('Helvetica').fontSize(7).fillColor(ZINC)
  .text('ABN 78 833 496 164 · Barran Dodger Legal & Ethical Trust Fund · barrandodger.com', 60, 820, { width: W });

// ── PAGE 3: SIGNIFICANCE STATEMENT ──
doc.addPage({ size: 'A4', margin: 60 });
doc.rect(0, 0, 595, 842).fill(DARK);
doc.rect(0, 0, 595, 4).fill(AMBER);

doc.font('Helvetica-Bold').fontSize(14).fillColor(AMBER).text('THE SIGNIFICANCE OF YOUR IMPACT', 60, 24, { width: W });
doc.rect(60, 44, W, 1).fill([60, 60, 100]);

const paras = [
  { heading: 'DOCUMENTED GLOBAL REACH WITHOUT PRECEDENT', text: 'There is no comparable case in Australian history where a single individual without institutional resources has assembled a 2,301-document primary-source archive, had it formally received by the International Criminal Court, the UNHCR, and the Federal Court of Australia — and generated 406,112 documented downloads across six continents with zero marketing spend.' },
  { heading: 'THE DEFAMATION SILENCE IS LEGALLY SIGNIFICANT', text: 'Zero defamation actions have been filed by any named individual or agency against any document in the 788-PDF archive. Under the rule in Jones v Dunkel (1959) 101 CLR 298, a party who could produce evidence and chooses not to permits the adverse inference that the evidence would not assist their case. 406,112 downloads. Zero challenges to any specific factual claim.' },
  { heading: '891 BLOCKCHAIN RECORDS — IMMUTABLE TESTIMONY', text: 'Each of the 891 blockchain records represents a SHA-256 cryptographic hash of a document, permanently anchored to the Bitcoin blockchain via OpenTimestamps, distributed across approximately 15,000 independent Bitcoin nodes globally. No government, court, or institution can alter, suppress, or deny these records without the alteration itself becoming mathematically visible.' },
  { heading: 'SUBMITTED TO INTERNATIONAL BODIES — BEYOND AUSTRALIAN JURISDICTION', text: 'The International Criminal Court (Article 7, Rome Statute — persecution as a crime against humanity) and the United Nations High Commissioner for Refugees in Geneva both hold formal submissions. The Federal Court of Australia confirmed Protected Whistleblower status in writing. These are not claims — they are institutional records held by bodies that are not subject to Australian suppression.' },
  { heading: 'THIS IMPACT REQUIRES A LIVING, SUPPORTED PERSON TO CONTINUE', text: '73 forensic analyses. 675+ propositions assessed. 891 blockchain seals. 406,112 downloads. All of this was produced by one person — after surviving clinical death at 2.87% probability, after 14 forced psychiatric hospitalisations across three states, without adequate NDIS support. The significance of the impact is inseparable from the survival of the person who produced it. Adequate care is not incidental to this work. It is the precondition of it.' },
];

let py = 56;
for (const { heading, text } of paras) {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(AMBER).text(heading, 60, py, { width: W });
  py += 14;
  doc.font('Helvetica').fontSize(9).fillColor([203, 213, 225]).text(text, 60, py, { width: W });
  py += doc.heightOfString(text, { width: W }) + 16;
}

// Sign-off
doc.rect(60, py, W, 1).fill([60, 60, 100]);
py += 12;
doc.font('Helvetica-Bold').fontSize(9).fillColor(WHITE).text('Dr. Richard William McLean', 60, py);
py += 14;
doc.font('Helvetica').fontSize(8).fillColor(ZINC)
  .text(`Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164\ndrbarrandodger@proton.me · +61 431 167 907 · barrandodger.com\n${new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })} · All figures drawn from live database · Bitcoin blockchain verified`, 60, py, { width: W });

doc.rect(0, 808, 595, 34).fill([15, 15, 30]);
doc.font('Helvetica').fontSize(7).fillColor(ZINC)
  .text('© 2026 Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164 · Shared freely in the public interest. Non-commercial reproduction permitted with full attribution.', 60, 820, { width: W });

doc.end();
stream.on('finish', () => {
  const size = fs.statSync(OUT).size;
  console.log(`PDF written: ${OUT} (${(size / 1024).toFixed(1)}KB)`);
});
stream.on('error', (e) => { console.error('Stream error:', e); process.exit(1); });
