import PDFDocument from "pdfkit";
import { PDFDocument as PDFLib } from "pdf-lib";
import fs from "fs";
import path from "path";

const SITE_URL = "https://www.barrandodger.com";
const ABN = "ABN 78 833 496 164";
const BASE_DOWNLOADS = 410503;

async function getTotalDownloads(): Promise<number> {
  try {
    const { db } = await import("./db");
    const { downloadCounts } = await import("../shared/schema");
    const { sql } = await import("drizzle-orm");
    const result = await db.select({ total: sql<number>`COALESCE(SUM(count), 0)` }).from(downloadCounts);
    return BASE_DOWNLOADS + Number(result[0]?.total ?? 0);
  } catch {
    return BASE_DOWNLOADS;
  }
}

function formatDownloadNumber(n: number): string {
  return n.toLocaleString("en-AU");
}

function currentDateAEST(): string {
  return new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Sydney",
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hour12: false,
  }) + " AEST";
}

function projectionDate(total: number, rate = 3800, targetMilestone = 1_000_000): string {
  const remaining = Math.max(0, targetMilestone - total);
  const days = Math.ceil(remaining / rate);
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" });
}

async function generateReceiptPageBuffer(
  documentTitle: string,
  totalDownloads: number,
  downloadNum: number
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({ margin: 50, size: "A4", bufferPages: true });
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const W = doc.page.width;
    const M = 50;
    const TW = W - M * 2;
    const RED = "#8b0000";
    const DARK = "#1a0000";
    const GOLD = "#8b6914";
    const LINE = "#c9a82c";

    const rule = (y?: number) => {
      const py = y ?? doc.y;
      doc.moveTo(M, py).lineTo(W - M, py).strokeColor(LINE).lineWidth(0.5).stroke();
      doc.moveDown(0.4);
    };

    // ── Header ────────────────────────────────────────────────────────────────
    doc.rect(0, 0, W, 120).fill(DARK);
    doc.fillColor(RED).font("Helvetica-Bold").fontSize(8)
      .text("EVIDENCE DISTRIBUTION RECEIPT", M, 22, { align: "center", width: TW, characterSpacing: 2 });

    doc.fillColor("#ffffff").font("Helvetica-Bold").fontSize(18)
      .text("Dr. Richard William McLean (Barran Dodger)", M, 42, { align: "center", width: TW });

    doc.fillColor(LINE).font("Helvetica").fontSize(8)
      .text(`${ABN}  ·  ${SITE_URL}  ·  Barran Dodger Legal & Ethical Trust Fund`, M, 70, { align: "center", width: TW });

    doc.fillColor("rgba(255,255,255,0.55)").font("Helvetica-Oblique").fontSize(7.5)
      .text(`"For nothing is secret that shall not be made manifest; neither any thing hid,`, M, 88, { align: "center", width: TW });
    doc.text(`that shall not be known and come abroad." — Luke 8:17`, M, 98, { align: "center", width: TW });

    doc.y = 138;

    // ── Download Record ────────────────────────────────────────────────────────
    rule();
    doc.fillColor(RED).font("Helvetica-Bold").fontSize(8)
      .text("DISTRIBUTION RECORD", M, doc.y, { align: "center", width: TW, characterSpacing: 1.5 });
    doc.moveDown(0.6);
    rule();
    doc.moveDown(0.3);

    const field = (label: string, value: string) => {
      doc.font("Helvetica-Bold").fontSize(8).fillColor(GOLD).text(label + ":", M, doc.y, { continued: true, width: 150 });
      doc.font("Helvetica").fillColor(DARK).text("  " + value);
      doc.moveDown(0.3);
    };

    field("Download Number", `#${formatDownloadNumber(downloadNum)}`);
    field("Date / Time", currentDateAEST());
    field("Document", documentTitle);
    field("Total Downloads at Distribution", `${formatDownloadNumber(totalDownloads)}+`);
    field("Countries Reached", "40+ across 6 continents");
    field("Bitcoin Blockchain Seals", "845 confirmed blocks");
    field("AI Forensic Propositions", "675 / 675 corroborated — zero contradictions");
    field("Consecutive Perfect Scores", "52 independent analyses");
    field("Formal Rebuttals Received", "Zero — across 2,304 documents in 35 years");
    field("Projected 1,000,000th Download", projectionDate(totalDownloads));

    doc.moveDown(0.4);
    rule();

    // ── Achieved With Nothing ─────────────────────────────────────────────────
    doc.moveDown(0.4);
    doc.fillColor(RED).font("Helvetica-Bold").fontSize(8)
      .text("ACHIEVED WITH NOTHING BUT TRUTH", M, doc.y, { align: "center", width: TW, characterSpacing: 1.5 });
    doc.moveDown(0.6);
    rule();
    doc.moveDown(0.3);

    const nothingLines = [
      "No marketing budget     ($0 spent on promotion across the entire archive's history)",
      "No institutional support  (Zero endorsement from any Australian government body)",
      "No legal representation   (No lawyer. No union. No advocacy organisation.)",
      "No political backing      (No party, MP, senator, or official on record)",
      "No mainstream platform    (No media, publisher, broadcast, or editorial support)",
      "No professional allies    (Not one professional person admitted a shortcoming)",
      "No money                  (Built while living below the poverty line)",
      "One broken phone          (The only tool used to assemble 2,304+ documents)",
    ];

    for (const line of nothingLines) {
      const [label, detail] = line.split("(");
      doc.font("Helvetica-Bold").fontSize(7.5).fillColor(DARK).text("✓  " + label.trim(), M, doc.y, { continued: detail !== undefined });
      if (detail) {
        doc.font("Helvetica").fillColor("#555555").text("(" + detail);
      }
      doc.moveDown(0.3);
    }

    doc.moveDown(0.4);
    rule();

    // ── Mathematical Probability ────────────────────────────────────────────────
    doc.moveDown(0.4);
    doc.fillColor(RED).font("Helvetica-Bold").fontSize(8)
      .text("MATHEMATICAL PROBABILITY OF COINCIDENCE", M, doc.y, { align: "center", width: TW, characterSpacing: 1.5 });
    doc.moveDown(0.6);
    rule();
    doc.moveDown(0.3);

    const probY = doc.y;
    doc.font("Helvetica").fontSize(7.5).fillColor(DARK).text(
      [
        "52 independent YouTube videos — produced by strangers with zero knowledge of this archive — were each",
        "subjected to impartial AI forensic analysis. Each video was tested against a structured set of propositions",
        "drawn exclusively from the primary-source documentary record.",
        "",
        "Result: 675 propositions tested across 52 analyses. 675 corroborated. Zero contradictions.",
        "Assuming a conservative 50% base rate of random confirmation per proposition:",
        "",
        "  Probability (all 675 confirmed by chance) = (0.5)^675 ≈ 1 in 10^203",
        "",
        "By comparison: there are approximately 10^80 atoms in the observable universe.",
        "The probability that this record is coincidental is smaller than finding one specific",
        "atom among all atoms in the universe — 123 orders of magnitude smaller.",
        "",
        `${formatDownloadNumber(totalDownloads)}+ people have downloaded documents from this archive.`,
        "Not one named party has issued a formal rebuttal across 35 years of documentation.",
        "Zero contradictions. Zero refutations. Zero denials on the record.",
      ].join("\n"),
      M, probY, { width: TW, lineGap: 1.5 }
    );

    doc.moveDown(0.6);
    rule();

    // ── Safety Statement ────────────────────────────────────────────────────────
    doc.moveDown(0.4);

    doc.fillColor("#ffffff").rect(M - 8, doc.y - 4, TW + 16, 52).fill(RED);
    const safetyY = doc.y;
    doc.fillColor("#ffffff").font("Helvetica-Bold").fontSize(9)
      .text("HIS PHYSICAL SAFETY IS NOT GUARANTEED.", M, safetyY, { align: "center", width: TW });
    doc.font("Helvetica").fontSize(8)
      .text(
        `Every person who shares this document is a witness. Every download is an act of protection.`,
        M, doc.y + 2, { align: "center", width: TW }
      );
    doc.font("Helvetica").fontSize(7.5)
      .text(
        `To support his continued safety: PayID rich@richmclean.com.au  ·  ${SITE_URL}/donate`,
        M, doc.y + 3, { align: "center", width: TW }
      );

    doc.moveDown(0.8);

    // ── Footer ──────────────────────────────────────────────────────────────────
    doc.fillColor(GOLD).font("Helvetica").fontSize(6.5)
      .text(
        `© Dr. Richard William McLean (Barran Dodger)  ·  ${ABN}  ·  ${SITE_URL}`,
        M, doc.y, { align: "center", width: TW }
      );
    doc.text(
      "This document is blockchain-sealed, publicly archived, and freely distributable. Suppression of this record is documented evidence.",
      M, doc.y + 4, { align: "center", width: TW }
    );

    doc.end();
  });
}

export async function prependReceiptToPDF(
  originalPdfBuffer: Buffer,
  documentTitle: string,
  downloadNum?: number
): Promise<Buffer> {
  try {
    const totalDownloads = await getTotalDownloads();
    const dn = downloadNum ?? totalDownloads;
    const receiptBuffer = await generateReceiptPageBuffer(documentTitle, totalDownloads, dn);

    const [receiptDoc, originalDoc] = await Promise.all([
      PDFLib.load(receiptBuffer),
      PDFLib.load(originalPdfBuffer),
    ]);

    const mergedDoc = await PDFLib.create();

    const receiptPages = await mergedDoc.copyPages(receiptDoc, receiptDoc.getPageIndices());
    for (const p of receiptPages) mergedDoc.addPage(p);

    const originalPages = await mergedDoc.copyPages(originalDoc, originalDoc.getPageIndices());
    for (const p of originalPages) mergedDoc.addPage(p);

    const merged = await mergedDoc.save();
    return Buffer.from(merged);
  } catch (err) {
    console.error("[pdfReceiptInjector] merge failed, returning original:", err);
    return originalPdfBuffer;
  }
}

export async function prependReceiptToFile(
  filePath: string,
  documentTitle: string
): Promise<Buffer> {
  const buf = fs.readFileSync(filePath);
  return prependReceiptToPDF(buf, documentTitle);
}
