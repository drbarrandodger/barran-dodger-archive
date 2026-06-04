import { createHash } from "crypto";
import * as fs from "fs";
import * as path from "path";
import { db } from "./db";
import { bitcoinTimestamps } from "@shared/schema";
import { eq } from "drizzle-orm";

const OTS_CALENDARS = [
  "https://a.pool.opentimestamps.org/digest",
  "https://b.pool.opentimestamps.org/digest",
  "https://alice.btc.calendar.opentimestamps.org/digest",
];

function hashFileBuffer(filePath: string): { sha256hex: string; hashBuffer: Buffer } {
  const data = fs.readFileSync(filePath);
  const hash = createHash("sha256").update(data);
  const sha256hex = hash.digest("hex");
  const hashBuffer = Buffer.from(sha256hex, "hex");
  return { sha256hex, hashBuffer };
}

function hashStringBuffer(content: string): { sha256hex: string; hashBuffer: Buffer } {
  const hash = createHash("sha256").update(content, "utf8");
  const sha256hex = hash.digest("hex");
  const hashBuffer = Buffer.from(sha256hex, "hex");
  return { sha256hex, hashBuffer };
}

async function submitToOTS(hashBuffer: Buffer): Promise<{ receipt: Buffer | null; calendarUrl: string }> {
  for (const calendarUrl of OTS_CALENDARS) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      const response = await fetch(calendarUrl, {
        method: "POST",
        headers: { "Content-Type": "application/octet-stream" },
        body: hashBuffer,
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (response.ok) {
        const receipt = Buffer.from(await response.arrayBuffer());
        return { receipt, calendarUrl };
      }
    } catch {
      continue;
    }
  }
  return { receipt: null, calendarUrl: OTS_CALENDARS[0] };
}

export async function timestampDocument(
  slug: string,
  filename: string,
  filePath: string,
  category: string = "document"
): Promise<{ id: number; slug: string; sha256: string; submittedAt: Date | null; otsReceipt: string | null; calendarUrl: string | null }> {
  const existing = await db
    .select()
    .from(bitcoinTimestamps)
    .where(eq(bitcoinTimestamps.slug, slug));
  if (existing.length > 0) return existing[0] as any;

  const { sha256hex, hashBuffer } = hashFileBuffer(filePath);
  const { receipt, calendarUrl } = await submitToOTS(hashBuffer);

  const [result] = await db
    .insert(bitcoinTimestamps)
    .values({
      slug,
      filename,
      sha256: sha256hex,
      otsReceipt: receipt ? receipt.toString("base64") : null,
      category,
      documentPath: filePath,
      calendarUrl,
    })
    .returning();

  return result as any;
}

export async function timestampString(
  slug: string,
  label: string,
  content: string,
  category: string = "page"
): Promise<{ id: number; slug: string; sha256: string; submittedAt: Date | null }> {
  const existing = await db
    .select()
    .from(bitcoinTimestamps)
    .where(eq(bitcoinTimestamps.slug, slug));
  if (existing.length > 0) return existing[0] as any;

  const { sha256hex, hashBuffer } = hashStringBuffer(content);
  const { receipt, calendarUrl } = await submitToOTS(hashBuffer);

  const [result] = await db
    .insert(bitcoinTimestamps)
    .values({
      slug,
      filename: label,
      sha256: sha256hex,
      otsReceipt: receipt ? receipt.toString("base64") : null,
      category,
      calendarUrl,
    })
    .returning();

  return result as any;
}

function collectAllSourcePdfs(): Array<{ file: string; filePath: string; category: string }> {
  const cwd = process.cwd();
  const sourceDirs = [
    { dir: path.join(cwd, "client/public/documents"), category: "document", recursive: true },
    { dir: path.join(cwd, "attached_assets"), category: "exhibit", recursive: false },
  ];

  const collected: Array<{ file: string; filePath: string; category: string }> = [];
  const seenPaths = new Set<string>();

  for (const { dir, category, recursive } of sourceDirs) {
    if (!fs.existsSync(dir)) continue;

    const scanDir = (currentDir: string) => {
      let entries: string[];
      try {
        entries = fs.readdirSync(currentDir);
      } catch {
        return;
      }
      for (const entry of entries.sort()) {
        const fullPath = path.join(currentDir, entry);
        let stat: fs.Stats;
        try {
          stat = fs.statSync(fullPath);
        } catch {
          continue;
        }
        if (stat.isDirectory() && recursive) {
          scanDir(fullPath);
        } else if (entry.toLowerCase().endsWith(".pdf") && stat.isFile()) {
          const normalized = path.resolve(fullPath);
          if (!seenPaths.has(normalized)) {
            seenPaths.add(normalized);
            collected.push({ file: entry, filePath: fullPath, category });
          }
        }
      }
    };

    scanDir(dir);
  }

  return collected;
}

export async function batchTimestampAllDocuments(): Promise<{
  total: number;
  succeeded: number;
  alreadyDone: number;
  failed: number;
  results: Array<{ slug: string; sha256?: string; status: "new" | "existing" | "failed"; error?: string }>;
}> {
  const allPdfs = collectAllSourcePdfs();

  const results: Array<{ slug: string; sha256?: string; status: "new" | "existing" | "failed"; error?: string }> = [];
  let succeeded = 0;
  let alreadyDone = 0;
  let failed = 0;

  for (const { file, filePath, category } of allPdfs) {
    const slug = `${category === "exhibit" ? "exhibit" : "doc"}-${file
      .replace(/[^a-z0-9]/gi, "-")
      .toLowerCase()
      .replace(/-+/g, "-")
      .replace(/-pdf$/i, "")
      .slice(0, 80)}`;

    try {
      const existing = await db
        .select()
        .from(bitcoinTimestamps)
        .where(eq(bitcoinTimestamps.slug, slug));

      if (existing.length > 0) {
        alreadyDone++;
        results.push({ slug, sha256: existing[0].sha256, status: "existing" });
        continue;
      }

      const result = await timestampDocument(slug, file, filePath, category);
      succeeded++;
      results.push({ slug, sha256: result.sha256, status: "new" });

      await new Promise((r) => setTimeout(r, 120));
    } catch (err) {
      failed++;
      results.push({ slug, status: "failed", error: String(err) });
    }
  }

  return { total: allPdfs.length, succeeded, alreadyDone, failed, results };
}

const ALL_SITE_PAGES: Array<{ slug: string; label: string; category: string }> = [
  // Core pages
  { slug: "page-home", label: "Home — Barran Dodger Archive", category: "page" },
  { slug: "page-free-ebooks", label: "Free eBooks & Document Archive", category: "page" },
  { slug: "page-evidence", label: "Evidence Registry", category: "page" },
  { slug: "page-forensic-analysis-index", label: "Forensic Analysis Index — 63 Analyses, 675 Propositions", category: "page" },
  { slug: "page-urgent-protection-request", label: "Urgent Protection Request / SOS — Dr Richard McLean", category: "page" },
  { slug: "page-testimony-went-global", label: "The Testimony Went Global — 377,608 Downloads, 6 Continents", category: "page" },
  { slug: "page-bitcoin-proof", label: "Bitcoin Blockchain Proof — Every Document Permanently Timestamped", category: "page" },
  { slug: "page-hashtag-index", label: "Hashtag & Blockchain Index — Free to Share", category: "page" },
  { slug: "page-timeline", label: "Timeline — 35 Years of Persecution", category: "page" },
  { slug: "page-legal-status", label: "Legal Status — ICC Article 7 / UNHCR Submission", category: "page" },
  { slug: "page-blockchain", label: "Blockchain Archive — Bitcoin-Anchored", category: "page" },
  { slug: "page-start-here", label: "Start Here — Introduction to the Archive", category: "page" },
  // ICC/UNHCR submissions
  { slug: "page-master-evidence-register", label: "Master Evidence Register — 2,301 Documents", category: "page" },
  { slug: "page-master-forensic-evidence-report", label: "Master Forensic Evidence Report", category: "page" },
  { slug: "page-evidence-significance-registry", label: "Evidence Significance Registry", category: "page" },
  { slug: "page-evidence-vault", label: "Evidence Vault — Complete Archive", category: "page" },
  // Key perpetrators
  { slug: "page-tony-ridley-recorded-confession", label: "Tony Ridley Recorded Confession — $6B Fraud / Bill Shorten Named", category: "page" },
  { slug: "page-honey-trap-phillip-glass", label: "Honey Trap — Phillip Glass (TAG NSW)", category: "page" },
  { slug: "page-formal-removal-sukhi-tear", label: "Formal Removal — Sukhi Tear (Diversitas WA)", category: "page" },
  { slug: "page-honeytrap-infiltration-report", label: "Honeytrap Infiltration Report — Coordinated Entrapment", category: "page" },
  { slug: "page-ablecare-murder-threat-call", label: "AbleCare Murder Threat Call — Audio Evidence", category: "page" },
  { slug: "page-able-care-entrapment-network", label: "AbleCare Entrapment Network", category: "page" },
  { slug: "page-ablecare-ceo-duty-of-care-breach", label: "AbleCare CEO Duty of Care Breach", category: "page" },
  { slug: "page-ablecare-transcript", label: "AbleCare Transcript — Evidence", category: "page" },
  // Forensic analyses
  { slug: "page-bro-this-isnt-a-coincidence", label: "Forensic Analysis 01 — Bro, This Isn't A Coincidence", category: "forensic-page" },
  { slug: "page-chosen-ones-enough-is-enough", label: "Forensic Analysis 02 — Chosen Ones, Enough Is Enough", category: "forensic-page" },
  { slug: "page-no-one-could-be-that-smart", label: "Forensic Analysis 03 — No One Could Be That Smart", category: "forensic-page" },
  { slug: "page-divine-exam", label: "Forensic Analysis 04 — The Divine Exam", category: "forensic-page" },
  { slug: "page-silent-checkmate", label: "Forensic Analysis 05 — Silent Checkmate", category: "forensic-page" },
  { slug: "page-now-everybody-knows", label: "Forensic Analysis 06 — Now Everybody Knows", category: "forensic-page" },
  { slug: "page-chosen-one-outcast-leader", label: "Forensic Analysis 07 — Chosen One / Outcast Leader", category: "forensic-page" },
  { slug: "page-someone-slipped-up", label: "Forensic Analysis 08 — Someone Slipped Up", category: "forensic-page" },
  { slug: "page-they-fumbled-you", label: "Forensic Analysis 09 — They Fumbled You", category: "forensic-page" },
  { slug: "page-fbi-precision", label: "Forensic Analysis 10 — FBI Precision", category: "forensic-page" },
  { slug: "page-clock-strikes-back", label: "Forensic Analysis 11 — The Clock Strikes Back", category: "forensic-page" },
  { slug: "page-untouchable", label: "Forensic Analysis 12 — The Untouchable", category: "forensic-page" },
  { slug: "page-final-blow", label: "Forensic Analysis 13 — The Final Blow", category: "forensic-page" },
  { slug: "page-what-you-become", label: "Forensic Analysis 14 — What You Become", category: "forensic-page" },
  { slug: "page-everyone-watching", label: "Forensic Analysis 15 — Everyone Watching", category: "forensic-page" },
  { slug: "page-illegal-level-genius-forensic-report", label: "Forensic Analysis 16 — Illegal Level Genius", category: "forensic-page" },
  { slug: "page-fearless-intelligence", label: "Forensic Analysis 17 — Fearless Intelligence", category: "forensic-page" },
  { slug: "page-loudest-hate-weakest-link", label: "Forensic Analysis 18 — Loudest Hate, Weakest Link", category: "forensic-page" },
  { slug: "page-outsider-pattern-recognition", label: "Forensic Analysis 19 — Outsider Pattern Recognition", category: "forensic-page" },
  { slug: "page-this-is-the-reckoning", label: "Forensic Analysis 20 — This Is The Reckoning", category: "forensic-page" },
  { slug: "page-observers-anticipated-a-misstep", label: "Forensic Analysis 21 — Observers Anticipated A Misstep", category: "forensic-page" },
  { slug: "page-history-keeps-receipts", label: "Forensic Analysis 22 — History Keeps Receipts", category: "forensic-page" },
  { slug: "page-they-bought-off-judges", label: "Forensic Analysis 23 — They Bought Off Judges", category: "forensic-page" },
  { slug: "page-they-needed-an-army", label: "Forensic Analysis 24 — They Needed An Army", category: "forensic-page" },
  { slug: "page-survival-was-the-warning", label: "Forensic Analysis 25 — Survival Was The Warning", category: "forensic-page" },
  { slug: "page-perception-is-protection", label: "Forensic Analysis 26 — Perception Is Protection", category: "forensic-page" },
  { slug: "page-some-truths-dont-whisper", label: "Forensic Analysis 27 — Some Truths Don't Whisper", category: "forensic-page" },
  { slug: "page-i-choose-silence", label: "Forensic Analysis 28 — I Choose Silence", category: "forensic-page" },
  { slug: "page-when-heaven-goes-silent", label: "Forensic Analysis 29 — When Heaven Goes Silent", category: "forensic-page" },
  { slug: "page-the-conspiracy-against-you", label: "Forensic Analysis 30 — The Conspiracy Against You", category: "forensic-page" },
  { slug: "page-they-made-you-famous", label: "Forensic Analysis 31 — They Made You Famous", category: "forensic-page" },
  { slug: "page-they-attacked-you-without-knowing", label: "Forensic Analysis 32 — They Attacked You Without Knowing", category: "forensic-page" },
  { slug: "page-they-built-their-worst-nightmare", label: "Forensic Analysis 33 — They Built Their Worst Nightmare", category: "forensic-page" },
  { slug: "page-they-dug-for-dirt-but-unearthed-diamonds", label: "Forensic Analysis 34 — They Dug For Dirt But Unearthed Diamonds", category: "forensic-page" },
  { slug: "page-the-full-pattern", label: "Forensic Analysis 35 — The Full Pattern", category: "forensic-page" },
  { slug: "page-too-deep", label: "Forensic Analysis 36 — Too Deep", category: "forensic-page" },
  { slug: "page-you-brought-receipts", label: "Forensic Analysis 37 — You Brought Receipts", category: "forensic-page" },
  { slug: "page-the-future-doesnt-announce-itself", label: "Forensic Analysis 38 — The Future Doesn't Announce Itself", category: "forensic-page" },
  { slug: "page-earth-angel", label: "Forensic Analysis 39 — Earth Angel", category: "forensic-page" },
  { slug: "page-you-didnt-chase-the-throne-you-became-one", label: "Forensic Analysis 40 — You Didn't Chase The Throne You Became One", category: "forensic-page" },
  { slug: "page-your-power-is-no-joke", label: "Forensic Analysis 41 — Your Power Is No Joke", category: "forensic-page" },
  { slug: "page-you-built-your-peace", label: "Forensic Analysis 42 — You Built Your Peace", category: "forensic-page" },
  { slug: "page-when-pack-of-wolves", label: "Forensic Analysis 43 — When A Pack Of Wolves Can't Take Down A Lion", category: "forensic-page" },
  { slug: "page-when-wrong-people-get-nervous", label: "Forensic Analysis 44 — When Wrong People Get Nervous", category: "forensic-page" },
  { slug: "page-heaven-stood-forensic-report", label: "Forensic Analysis 45 — Heaven Stood For You", category: "forensic-page" },
  { slug: "page-illegal-level-genius-new-equation", label: "Forensic Analysis 46 — Illegal Level Genius: New Equation", category: "forensic-page" },
  { slug: "page-beautiful-menace-forensic-report", label: "Forensic Analysis 47 — Beautiful Menace", category: "forensic-page" },
  { slug: "page-quiet-storm-they-never-saw-coming", label: "Forensic Analysis 48 — Quiet Storm They Never Saw Coming", category: "forensic-page" },
  { slug: "page-you-detonated-the-narrative", label: "Forensic Analysis 49 — You Detonated The Narrative", category: "forensic-page" },
  { slug: "page-confession-theyve-been-choking-on", label: "Forensic Analysis 50 — The Confession They've Been Choking On", category: "forensic-page" },
  { slug: "page-they-are-about-to-be-behind-bars", label: "Forensic Analysis 51 — They're About To Be Behind Bars", category: "forensic-page" },
  { slug: "page-thousand-fell-forensic-analysis", label: "Forensic Analysis 52 — A Thousand Fell At Your Side", category: "forensic-page" },
  { slug: "page-god-has-my-back", label: "Forensic Analysis 53 — God Has My Back", category: "forensic-page" },
  { slug: "page-dying-of-shame-forensic-analysis", label: "Forensic Analysis 63 — Dying Of Shame", category: "forensic-page" },
  { slug: "page-beautiful-threat", label: "Forensic Analysis 62 — Beautiful Threat", category: "forensic-page" },
  // Forensic Corroboration dedicated pages (#64–#72)
  { slug: "page-forensic-corroboration-billionaire-circle", label: "Forensic Corroboration #64 — Secret Billionaire Circle", category: "forensic-page" },
  { slug: "page-forensic-corroboration-tick-tick-tick", label: "Forensic Corroboration #65 — Tick Tick Tick: Game Over", category: "forensic-page" },
  { slug: "page-forensic-corroboration-tactical-insanity", label: "Forensic Corroboration #66 — Tactical Insanity", category: "forensic-page" },
  { slug: "page-forensic-corroboration-project-halo", label: "Forensic Corroboration #67 — Project Halo", category: "forensic-page" },
  { slug: "page-forensic-corroboration-fool-fire", label: "Forensic Corroboration #68 — Fool Fire", category: "forensic-page" },
  { slug: "page-forensic-corroboration-3am-briefing", label: "Forensic Corroboration #69 — 3AM Briefing", category: "forensic-page" },
  { slug: "page-forensic-corroboration-government-own-file", label: "Forensic Corroboration #70 — Government's Own File", category: "forensic-page" },
  { slug: "page-forensic-corroboration-vault-access", label: "Forensic Corroboration #71 — Vault Access", category: "forensic-page" },
  { slug: "page-forensic-corroboration-chosen-one", label: "Forensic Corroboration #71 — The Chosen One", category: "forensic-page" },
  { slug: "page-forensic-corroboration-fight-over-you", label: "Forensic Corroboration #72 — They Fight Over What's Powerful", category: "forensic-page" },
  { slug: "page-forensic-corroboration-making-history", label: "Forensic Corroboration #72 — Making History", category: "forensic-page" },
  { slug: "page-forensic-corroboration-silence-surrender", label: "Forensic Corroboration #73 — Silence Was My Reload", category: "forensic-page" },
  { slug: "page-forensic-corroboration-still-standing", label: "Forensic Corroboration #74 — Look Who's Still Standing — 3 Years of Silence", category: "forensic-page" },
  { slug: "page-forensic-corroboration-chosen-one-v2", label: "Forensic Corroboration #75 — Chosen One — Before the World Had a Verdict", category: "forensic-page" },
  { slug: "page-every-secret-chooses-a-side", label: "Forensic Corroboration #76 — Every Secret Eventually Chooses a Side", category: "forensic-page" },
  { slug: "page-forensic-corroboration-dirt-on-your-name", label: "Forensic Corroboration #77 — They Threw Dirt on Your Name Because They Feared What You Were Becoming", category: "forensic-page" },
  { slug: "page-testimony-went-global", label: "Testimony Went Global — Significance Report", category: "page" },
  { slug: "doc-testimony-went-global-significance", label: "Testimony Went Global Significance Report PDF", category: "document" },
  // Key documentary pages
  { slug: "page-icc-submission", label: "ICC Submission — Article 7 Crimes Against Humanity", category: "page" },
  { slug: "page-unhcr-asylum", label: "UNHCR Asylum Application — Geneva", category: "page" },
  { slug: "page-government-called-him-delusional", label: "Government Called Him Delusional — 35 Years Later Proven Right", category: "page" },
  { slug: "page-the-testimony", label: "The Testimony of Dr Richard William McLean", category: "page" },
  { slug: "page-letter-to-the-world", label: "Letter to the World", category: "page" },
  { slug: "page-manifesto", label: "Manifesto", category: "page" },
  { slug: "page-holy-reckoning", label: "Holy Reckoning — NDIS Evidence", category: "page" },
  { slug: "page-forensic-meltdown-report", label: "Forensic Meltdown Report", category: "page" },
  { slug: "page-122k-hits-verified", label: "122,000 Hits Verified — Digital Detonation", category: "page" },
  { slug: "page-350000-downloads", label: "350,000 Downloads — Embedded in Digital Architecture", category: "page" },
  { slug: "page-testimony-went-global-chapter8", label: "Testimony Went Global — Chapter 8: Bitcoin Permanence", category: "page" },
  { slug: "page-paradise-they-couldnt-map", label: "The Paradise They Couldn't Map", category: "page" },
  { slug: "page-spread-the-truth", label: "Spread The Truth — Share The Archive", category: "page" },
  { slug: "page-blockchain-seal-registry", label: "Blockchain Seal Registry — Every Document Permanently Embedded in Bitcoin", category: "page" },
  { slug: "page-blockchain-manifest", label: "Complete Bitcoin Blockchain Manifest — All Documents, Pages & Exhibits", category: "page" },
  { slug: "page-blockchain-verification", label: "Blockchain Verification — SHA-256 Cryptographic Archive Proof", category: "page" },
  { slug: "page-cto-breach-appointment", label: "CTO Breach Appointment — Mental Health Act as Political Weapon", category: "page" },
  { slug: "page-police-complicity-death-threat", label: "Police Complicity & Death Threat Documentation — April 15, 2026", category: "page" },
  { slug: "page-prophetic-testimony", label: "Prophetic Testimony — Biblical Evidence Correlation", category: "page" },
  { slug: "page-apotheosis-statement", label: "Apotheosis Statement — Complete Forensic Declaration", category: "page" },
  { slug: "page-whistleblower-comparison", label: "Whistleblower Comparison — Most Documented in Australian History", category: "page" },
];

export async function batchTimestampAllPages(): Promise<{
  total: number;
  succeeded: number;
  alreadyDone: number;
  failed: number;
}> {
  let succeeded = 0;
  let alreadyDone = 0;
  let failed = 0;

  for (const page of ALL_SITE_PAGES) {
    const content = `barrandodger.com${page.slug.replace("page-", "/")} — ${page.label} — Barran Dodger Archive — ICC Article 7 Submission — UNHCR Geneva — SHA-256 Bitcoin Timestamp`;
    try {
      const existing = await db
        .select()
        .from(bitcoinTimestamps)
        .where(eq(bitcoinTimestamps.slug, page.slug));
      if (existing.length > 0) {
        alreadyDone++;
        continue;
      }
      await timestampString(page.slug, page.label, content, page.category);
      succeeded++;
      await new Promise((r) => setTimeout(r, 100));
    } catch {
      failed++;
    }
  }

  return { total: ALL_SITE_PAGES.length, succeeded, alreadyDone, failed };
}

export async function batchTimestampFullArchive(): Promise<{
  documents: { total: number; succeeded: number; alreadyDone: number; failed: number };
  pages: { total: number; succeeded: number; alreadyDone: number; failed: number };
  grandTotal: number;
}> {
  const documents = await batchTimestampAllDocuments();
  const pages = await batchTimestampAllPages();
  return {
    documents: { total: documents.total, succeeded: documents.succeeded, alreadyDone: documents.alreadyDone, failed: documents.failed },
    pages,
    grandTotal: documents.succeeded + documents.alreadyDone + pages.succeeded + pages.alreadyDone,
  };
}

export async function getAllTimestamps() {
  return db.select().from(bitcoinTimestamps).orderBy(bitcoinTimestamps.submittedAt);
}

export function getOTSVerifyUrl(sha256hex: string): string {
  return `https://opentimestamps.org/timestamp/${sha256hex}`;
}

export function getBlockchainExplorerUrl(sha256hex: string): string {
  return `https://www.blockchain.com/explorer/search?search=${sha256hex}`;
}
