import { db } from "./db";
import { eq, sql, desc } from "drizzle-orm";
import {
  subscribers,
  inquiries,
  evidenceItems,
  downloadCounts,
  comments,
  type InsertSubscriber,
  type InsertInquiry,
  type InsertEvidence,
  type InsertComment,
  type Subscriber,
  type Inquiry,
  type EvidenceItem,
  type DownloadCount,
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
    return row.count;
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
