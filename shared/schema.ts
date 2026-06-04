import { pgTable, text, serial, timestamp, boolean, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  documentSlug: text("document_slug"),
  source: text("source"),
  createdAt: timestamp("created_at").defaultNow(),
  isActive: boolean("is_active").default(true),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const evidenceItems = pgTable("evidence_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  description: text("description"),
  externalUrl: text("external_url"),
  referenceCode: text("reference_code"),
  timestamp: text("timestamp"),
  sha256: text("sha256"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  email: true,
  name: true,
  documentSlug: true,
  source: true,
});

export const insertInquirySchema = createInsertSchema(inquiries).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export const insertEvidenceSchema = createInsertSchema(evidenceItems).omit({
  id: true,
  createdAt: true,
});

export type Subscriber = typeof subscribers.$inferSelect;
export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type EvidenceItem = typeof evidenceItems.$inferSelect;
export type InsertEvidence = z.infer<typeof insertEvidenceSchema>;

export const downloadCounts = pgTable("download_counts", {
  id: serial("id").primaryKey(),
  documentSlug: text("document_slug").notNull().unique(),
  count: integer("count").notNull().default(0),
});

export type DownloadCount = typeof downloadCounts.$inferSelect;

export const downloadEvents = pgTable("download_events", {
  id: serial("id").primaryKey(),
  documentSlug: text("document_slug").notNull(),
  downloadedAt: timestamp("downloaded_at").defaultNow(),
});

export type DownloadEvent = typeof downloadEvents.$inferSelect;

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  pageSlug: text("page_slug").notNull(),
  displayName: text("display_name").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCommentSchema = createInsertSchema(comments).omit({
  id: true,
  createdAt: true,
});

export type Comment = typeof comments.$inferSelect;
export type InsertComment = z.infer<typeof insertCommentSchema>;

export const pageViews = pgTable("page_views", {
  id: serial("id").primaryKey(),
  path: text("path").notNull(),
  viewedAt: timestamp("viewed_at").defaultNow(),
  ipHash: text("ip_hash"),
  userAgent: text("user_agent"),
  country: text("country"),
});

export type PageView = typeof pageViews.$inferSelect;

export const bitcoinTimestamps = pgTable("bitcoin_timestamps", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  filename: text("filename").notNull(),
  sha256: text("sha256").notNull(),
  otsReceipt: text("ots_receipt"),
  submittedAt: timestamp("submitted_at").defaultNow(),
  bitcoinBlock: integer("bitcoin_block"),
  confirmedAt: timestamp("confirmed_at"),
  category: text("category").notNull().default("document"),
  documentPath: text("document_path"),
  calendarUrl: text("calendar_url"),
});

export type BitcoinTimestamp = typeof bitcoinTimestamps.$inferSelect;

export * from "./models/chat";

export const commissionRequests = pgTable("commission_requests", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  youtubeUrl: text("youtube_url").notNull(),
  additionalUrls: text("additional_urls"),
  situation: text("situation").notNull(),
  tier: text("tier").notNull(),
  amountAud: integer("amount_aud").notNull(),
  paymentConfirmed: boolean("payment_confirmed").default(false),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCommissionSchema = createInsertSchema(commissionRequests).omit({
  id: true,
  paymentConfirmed: true,
  status: true,
  createdAt: true,
});

export type CommissionRequest = typeof commissionRequests.$inferSelect;
export type InsertCommission = z.infer<typeof insertCommissionSchema>;

// ── Online Academy — Course Enrollment & Progress ──────────────────────────

export const courseEnrollments = pgTable("course_enrollments", {
  id: serial("id").primaryKey(),
  accessToken: text("access_token").notNull().unique(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  paymentIntentId: text("payment_intent_id"),
  amountPaid: integer("amount_paid").notNull().default(33300),
  enrolledAt: timestamp("enrolled_at").defaultNow(),
  completedAt: timestamp("completed_at"),
  certificateId: text("certificate_id"),
});

export const courseProgress = pgTable("course_progress", {
  id: serial("id").primaryKey(),
  accessToken: text("access_token").notNull(),
  unitId: integer("unit_id").notNull(),
  completedAt: timestamp("completed_at").defaultNow(),
  quizScore: integer("quiz_score"),
  quizAnswers: json("quiz_answers"),
});

export const insertCourseEnrollmentSchema = createInsertSchema(courseEnrollments).omit({
  id: true,
  enrolledAt: true,
  completedAt: true,
  certificateId: true,
});

export const insertCourseProgressSchema = createInsertSchema(courseProgress).omit({
  id: true,
  completedAt: true,
});

export type CourseEnrollment = typeof courseEnrollments.$inferSelect;
export type InsertCourseEnrollment = z.infer<typeof insertCourseEnrollmentSchema>;
export type CourseProgress = typeof courseProgress.$inferSelect;
export type InsertCourseProgress = z.infer<typeof insertCourseProgressSchema>;
