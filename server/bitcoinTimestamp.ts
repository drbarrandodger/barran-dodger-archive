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

export async function batchTimestampAllDocuments(): Promise<{
  total: number;
  succeeded: number;
  alreadyDone: number;
  failed: number;
  results: Array<{ slug: string; sha256?: string; status: "new" | "existing" | "failed"; error?: string }>;
}> {
  const documentsDir = path.join(process.cwd(), "client/public/documents");

  if (!fs.existsSync(documentsDir)) {
    return { total: 0, succeeded: 0, alreadyDone: 0, failed: 0, results: [] };
  }

  const files = fs
    .readdirSync(documentsDir)
    .filter((f) => f.endsWith(".pdf"))
    .sort();

  const results: Array<{ slug: string; sha256?: string; status: "new" | "existing" | "failed"; error?: string }> = [];
  let succeeded = 0;
  let alreadyDone = 0;
  let failed = 0;

  for (const file of files) {
    const slug = `doc-${file.replace(/[^a-z0-9]/gi, "-").toLowerCase().replace(/-+/g, "-").replace(/-pdf$/i, "")}`;
    const filePath = path.join(documentsDir, file);

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

      const result = await timestampDocument(slug, file, filePath, "document");
      succeeded++;
      results.push({ slug, sha256: result.sha256, status: "new" });

      await new Promise((r) => setTimeout(r, 150));
    } catch (err) {
      failed++;
      results.push({ slug, status: "failed", error: String(err) });
    }
  }

  return { total: files.length, succeeded, alreadyDone, failed, results };
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
