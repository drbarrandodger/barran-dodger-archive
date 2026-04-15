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

export async function getAllTimestamps() {
  return db.select().from(bitcoinTimestamps).orderBy(bitcoinTimestamps.submittedAt);
}

export function getOTSVerifyUrl(sha256hex: string): string {
  return `https://opentimestamps.org/timestamp/${sha256hex}`;
}

export function getBlockchainExplorerUrl(sha256hex: string): string {
  return `https://www.blockchain.com/explorer/search?search=${sha256hex}`;
}
