import { db } from "./db";
import { eq, sql, desc } from "drizzle-orm";
import {
  subscribers,
  inquiries,
  evidenceItems,
  downloadCounts,
  downloadEvents,
  comments,
  type InsertSubscriber,
  type InsertInquiry,
  type InsertEvidence,
  type InsertComment,
  type Subscriber,
  type Inquiry,
  type EvidenceItem,
  type DownloadCount,
  type DownloadEvent,
  type Comment
} from "@shared/schema";

export interface IStorage {
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getEvidenceItems(): Promise<EvidenceItem[]>;
  createEvidenceItem(evidence: InsertEvidence): Promise<EvidenceItem>;
  getDownloadCount(slug: string): Promise<number>;
  getTotalDownloadCount(): Promise<number>;
  incrementDownloadCount(slug: string): Promise<number>;
  recordDownloadEvent(slug: string): Promise<void>;
  getDownloadAnalytics(days: number): Promise<{ date: string; count: number }[]>;
  getTopDocuments(days: number, limit: number): Promise<{ slug: string; count: number }[]>;
  getRecentDownloadCount(hours: number): Promise<number>;
  getComments(pageSlug: string): Promise<Comment[]>;
  createComment(comment: InsertComment): Promise<Comment>;
}

export class DatabaseStorage implements IStorage {
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const [subscriber] = await db
      .insert(subscribers)
      .values(insertSubscriber)
      .returning();
    return subscriber;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async getEvidenceItems(): Promise<EvidenceItem[]> {
    return await db.select().from(evidenceItems);
  }

  async createEvidenceItem(insertEvidence: InsertEvidence): Promise<EvidenceItem> {
    const [evidence] = await db
      .insert(evidenceItems)
      .values(insertEvidence)
      .returning();
    return evidence;
  }

  async getDownloadCount(slug: string): Promise<number> {
    const [row] = await db
      .select()
      .from(downloadCounts)
      .where(eq(downloadCounts.documentSlug, slug));
    return row ? row.count : 0;
  }

  async getTotalDownloadCount(): Promise<number> {
    const [row] = await db
      .select({ total: sql<number>`COALESCE(SUM(${downloadCounts.count}), 0)` })
      .from(downloadCounts);
    return row ? Number(row.total) : 0;
  }

  async incrementDownloadCount(slug: string): Promise<number> {
    const [row] = await db
      .insert(downloadCounts)
      .values({ documentSlug: slug, count: 1 })
      .onConflictDoUpdate({
        target: downloadCounts.documentSlug,
        set: { count: sql`${downloadCounts.count} + 1` },
      })
      .returning();
    this.recordDownloadEvent(slug).catch(() => {});
    return row.count;
  }

  async recordDownloadEvent(slug: string): Promise<void> {
    await db.insert(downloadEvents).values({ documentSlug: slug });
  }

  async getDownloadAnalytics(days: number): Promise<{ date: string; count: number }[]> {
    const rows = await db.execute(sql`
      SELECT DATE(downloaded_at) as date, COUNT(*)::int as count
      FROM download_events
      WHERE downloaded_at >= NOW() - INTERVAL '1 day' * ${days}
      GROUP BY DATE(downloaded_at)
      ORDER BY date ASC
    `);
    return (rows.rows as any[]).map(r => ({ date: String(r.date), count: Number(r.count) }));
  }

  async getTopDocuments(days: number, limit: number): Promise<{ slug: string; count: number }[]> {
    const rows = await db.execute(sql`
      SELECT document_slug as slug, COUNT(*)::int as count
      FROM download_events
      WHERE downloaded_at >= NOW() - INTERVAL '1 day' * ${days}
      GROUP BY document_slug
      ORDER BY count DESC
      LIMIT ${limit}
    `);
    return (rows.rows as any[]).map(r => ({ slug: String(r.slug), count: Number(r.count) }));
  }

  async getRecentDownloadCount(hours: number): Promise<number> {
    const result = await db.execute(sql`
      SELECT COUNT(*)::int as count
      FROM download_events
      WHERE downloaded_at >= NOW() - INTERVAL '1 hour' * ${hours}
    `);
    const row = result.rows[0] as any;
    return row ? Number(row.count) : 0;
  }

  async getComments(pageSlug: string): Promise<Comment[]> {
    return await db
      .select()
      .from(comments)
      .where(eq(comments.pageSlug, pageSlug))
      .orderBy(desc(comments.createdAt));
  }

  async createComment(insertComment: InsertComment): Promise<Comment> {
    const [comment] = await db
      .insert(comments)
      .values(insertComment)
      .returning();
    return comment;
  }
}

export const storage = new DatabaseStorage();
