import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Subscribers
  app.post(api.subscribers.create.path, async (req, res) => {
    try {
      const input = api.subscribers.create.input.parse(req.body);
      const subscriber = await storage.createSubscriber(input);
      res.status(201).json(subscriber);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      if (err instanceof Error && 'code' in err && (err as any).code === '23505') {
        return res.status(400).json({
          message: "Email already subscribed"
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Inquiries
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Evidence
  app.get(api.evidence.list.path, async (_req, res) => {
    const items = await storage.getEvidenceItems();
    res.json(items);
  });

  // Seeding Data
  async function seedData() {
    const existing = await storage.getEvidenceItems();
    if (existing.length === 0) {
      // Forensic Documents
      await storage.createEvidenceItem({
        title: "CHOSEN THROUGH FIRE - Forensic Origin Document",
        category: "Legal/Spiritual",
        description: "Immutable historical record proving authorship, intent, and chronology of the 50,000-word narrative project.",
        referenceCode: "STAMP & VERIFY",
        timestamp: "SUCCESS! OpenTimestamps receipt created",
        sha256: "100fce740fd4829c0f81d447180532fb986ae06f08bdd8e25eb1fae958a7eb6d",
        externalUrl: "attached_assets/“CHOSEN_THROUGH_FIRE”_1767161917354.pdf"
      });

      // Apple Books / Publications
      await storage.createEvidenceItem({
        title: "Betrayed, Murdered, Forsaken: The Harrowing Life of Barran Dodger",
        category: "Publications",
        description: "Autobiography chronicling persecution and systemic abuse; published in 2024.",
        referenceCode: "Apple Books",
        externalUrl: "https://books.apple.com/au/book/betrayed-murdered-forsaken-the-harrowing-life-of/id6618112290"
      });
      await storage.createEvidenceItem({
        title: "CORONIAL INVESTIGATION REPORT",
        category: "Publications",
        description: "Documents investigation into alleged state-backed persecution and suspicious circumstances.",
        referenceCode: "Apple Books",
        externalUrl: "https://books.apple.com/gb/book/coronial-investigation-report/id6743447570"
      });
      await storage.createEvidenceItem({
        title: "Recovered Not Cured: A Journey Through Schizophrenia",
        category: "Publications",
        description: "First autobiography dealing with mental illness and recovery; originally published by Allen & Unwin.",
        referenceCode: "Apple Books",
        externalUrl: "https://books.apple.com/us/author/rich-mclean/id258911491"
      });
      await storage.createEvidenceItem({
        title: "Diary of a PhD Researcher",
        category: "Publications",
        description: "Exploration of young people's ethical opinions through the lens of technology.",
        referenceCode: "Apple Books",
        externalUrl: "https://books.apple.com/us/author/rich-mclean/id258911491"
      });
      await storage.createEvidenceItem({
        title: "The Shrink!... And You Thought You Were Crazy!",
        category: "Publications",
        description: "Graphic novel/illustrated work exploring mental health themes.",
        referenceCode: "Apple Books",
        externalUrl: "https://books.apple.com/us/author/rich-mclean/id258911491"
      });
    }
  }
  
  seedData().catch(console.error);

  return httpServer;
}
