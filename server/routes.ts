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

  // Seeding Evidence Data
  async function seedEvidence() {
    const existing = await storage.getEvidenceItems();
    if (existing.length === 0) {
      await storage.createEvidenceItem({
        title: "CHOSEN THROUGH FIRE - Forensic Origin Document",
        category: "Legal/Spiritual",
        description: "Immutable historical record proving authorship, intent, and chronology of the 50,000-word narrative project. Documents high-order executive function and structured reasoning.",
        referenceCode: "STAMP & VERIFY",
        timestamp: "SUCCESS! OpenTimestamps receipt created",
        sha256: "100fce740fd4829c0f81d447180532fb986ae06f08bdd8e25eb1fae958a7eb6d",
        externalUrl: "attached_assets/“CHOSEN_THROUGH_FIRE”_1767161917354.pdf"
      });
      await storage.createEvidenceItem({
        title: "UNHRC Asylum Claim & OHCHR Submission",
        category: "Human Rights",
        description: "Urgent appeal for recognition and redress regarding systemic human rights violations, financial exploitation, and systemic neglect in Australia.",
        referenceCode: "Ref. UR/UST/23/AUS/17",
        sha256: "b484027e371179b5888380ceb4697ee20f7bcef78e53b2df773bfdd659f090c7",
        externalUrl: "attached_assets/ONHCR%20UN%20Barran%20Dodger%20Asylum%20Claim%20.pdf_1767161751365.pdf"
      });
    }
  }
  
  seedEvidence().catch(console.error);

  return httpServer;
}
