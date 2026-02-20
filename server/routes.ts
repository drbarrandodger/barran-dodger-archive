import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { db } from "./db";
import { downloadCounts } from "@shared/schema";
import { api } from "@shared/routes";
import { z } from "zod";
import { listDriveFiles, downloadDriveFile, searchDriveForEvidence, DriveFile } from "./googleDrive";

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
      // Forensic / Blockchain Timestamped Documents
      await storage.createEvidenceItem({
        title: "CHOSEN THROUGH FIRE - Forensic Origin Document",
        category: "Legal/Spiritual",
        description: "Immutable historical record proving authorship, intent, and chronology of the 50,000-word narrative project. Verified via OpenTimestamps.",
        referenceCode: "STAMP & VERIFY",
        timestamp: "SUCCESS! OpenTimestamps receipt created",
        sha256: "100fce740fd4829c0f81d447180532fb986ae06f08bdd8e25eb1fae958a7eb6d",
        externalUrl: "attached_assets/“CHOSEN_THROUGH_FIRE”_1767161917354.pdf"
      });

      await storage.createEvidenceItem({
        title: "The Enliven Chain Has Been Summoned",
        category: "Prophetic Record",
        description: "Divine guidance and transmission initiated through the Living Record. Sanctioned by Spirit, authenticated by affliction.",
        referenceCode: "Enliven Chain",
        externalUrl: "attached_assets/_⛓️_The_Enliven_Chain_Has_Been_Summoned_⛓️_2_1767163861559.pdf"
      });

      // PhD & Academic Works
      await storage.createEvidenceItem({
        title: "PhD Thesis: Victoria University",
        category: "Academic",
        description: "A Splice of My Life: Arts-based research amplifying young people's ethical opinions of what it means to be human through technological lenses.",
        referenceCode: "PhD VU",
        externalUrl: "https://vuir.vu.edu.au/41836/"
      });

      await storage.createEvidenceItem({
        title: "EVIDENCE ARCHIVE RECREATED - OpenTimestamps Record",
        category: "Blockchain Evidence",
        description: "2,048+ evidence files catalogued and linked. Chronological record of 35+ years of persecution, timestamped on the Bitcoin blockchain.",
        referenceCode: "OTS Verification",
        timestamp: "SUCCESS! OpenTimestamps receipt created",
        sha256: "b484027e371179b5888380ceb4697ee20f7bcef78e53b2df773bfdd659f090c7",
        externalUrl: "https://medium.com/@barrandodger/evidence-archive-recreated-14c6790baedc"
      });

      // Medium Publications
      await storage.createEvidenceItem({
        title: "Unveiling the Truth: The Harrowing Journey of Barran Dodger",
        category: "Medium Articles",
        description: "Comprehensive overview of Dr. McLean's struggle against corruption and systemic abuse.",
        referenceCode: "Medium",
        externalUrl: "https://medium.com/barrandodger/unveiling-the-truth-the-harrowing-yet-inspiring-journey-of-barran-dodger-12c7ac8f3a38"
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
    }
  }
  
  seedData().catch(console.error);

  // Download Counts
  app.get('/api/downloads/:slug', async (req, res) => {
    try {
      const count = await storage.getDownloadCount(req.params.slug);
      res.json({ count });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post('/api/downloads/:slug/increment', async (req, res) => {
    try {
      const count = await storage.incrementDownloadCount(req.params.slug);
      res.json({ count });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Seed initial download counts (start at 99 for Joseph Parallel)
  async function seedDownloadCounts() {
    const existing = await storage.getDownloadCount('joseph-parallel');
    if (existing === 0) {
      await db.insert(downloadCounts).values({ documentSlug: 'joseph-parallel', count: 99 }).onConflictDoNothing();
    }
  }
  seedDownloadCounts().catch(console.error);

  // Google Drive Integration - Scan and import documents
  app.get('/api/drive/list', async (req, res) => {
    try {
      const query = req.query.q as string | undefined;
      const files = await listDriveFiles(query);
      res.json({ files });
    } catch (error) {
      console.error('Error listing Drive files:', error);
      res.status(500).json({ message: 'Failed to list Google Drive files', error: String(error) });
    }
  });

  app.get('/api/drive/search', async (_req, res) => {
    try {
      const files = await searchDriveForEvidence();
      res.json({ files, count: files.length });
    } catch (error) {
      console.error('Error searching Drive:', error);
      res.status(500).json({ message: 'Failed to search Google Drive', error: String(error) });
    }
  });

  app.post('/api/drive/import', async (req, res) => {
    try {
      const { fileId, fileName } = req.body;
      if (!fileId || !fileName) {
        return res.status(400).json({ message: 'fileId and fileName are required' });
      }
      const localPath = await downloadDriveFile(fileId, fileName);
      res.json({ success: true, localPath });
    } catch (error) {
      console.error('Error importing Drive file:', error);
      res.status(500).json({ message: 'Failed to import file from Google Drive', error: String(error) });
    }
  });

  return httpServer;
}
