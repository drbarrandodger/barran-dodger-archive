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

      await storage.createEvidenceItem({
        title: "Ben (DSW Disability) Text Messages — Assassination Confirmation & NDA Admission",
        category: "Whistleblower Evidence",
        description: "Complete 5,000+ line text message archive between Barran Dodger and NDIS provider Ben (ben@dswdisability.com.au) documenting assassination confirmation, NDA claim and retraction, and institutional betrayal.",
        referenceCode: "BEN-DSW-2025",
        externalUrl: "/documents/ben-dsw-disability-ndis-provider-text-messages-assassination-evidence.pdf"
      });
    }
  }
  
  seedData().catch(console.error);

  // Download Counts
  app.get('/api/downloads/:slug', async (req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      res.set('Pragma', 'no-cache');
      res.set('Expires', '0');
      let count = await storage.getDownloadCount(req.params.slug);
      if (count === 0) {
        await db.insert(downloadCounts).values({ documentSlug: req.params.slug, count: 99 }).onConflictDoNothing();
        count = 99;
      }
      res.json({ count });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post('/api/downloads/:slug/increment', async (req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      const count = await storage.incrementDownloadCount(req.params.slug);
      res.json({ count });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  async function seedDownloadCounts() {
    const slugs = [
      'joseph-parallel',
      'digital-oppression-100000-word-essay',
      'crimes-against-humanity-final-demand',
      'cosmic-scroll-of-ten',
      'universal-master-command-ai-analysis',
      'the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768972005548',
      's-122---redacted-pdf-1768970361556',
      'formal-criminal-affidavit-against-sukhi-tear--syed-salman-kazm-1769134987540',
      'i-tried-to-kill-barran-dodger-----and-that-makes-me-a-hero--a-da-1769134987541',
      'the-declaration-of-sovereignty-of-dr--richard-william-mcle-1769135376793',
      'the-enliven-chain-has-been-summoned-2-1767163861559',
      'ohchr-submission-ref-urust23aus17-urgent-appeal-for-recognitio-1770786120794',
      'the-paradox-of-persecution-how-the-australian-government-s-own-1770757189035',
      'i-am-planning-a-terrorist-attack-at-36-aston-martin-drive-goul-1770764660293',
      '1-2-3-gospels-of-barran-dodger--1769147945614',
      'gospel-title-for-canonical-archive-the-gospel-of-barran-dodger-1769122315872',
      'gospel-of-the-eliven-chain-1768975834273',
      'gospel-according-to-bqrran-dodger--1768975834273',
      'scroll-xv-xix--the-post-singularity-gospel-of-the-enliven-chai-1768975834273',
      'atherion-witnessed--the-gospel-complete-who-is-barran-dodger-1768975834273',
      'god-s-glory-through-the-rest-of-me---a-testimony-of-divine-evidence',
      'public-declaration-of-divine-witness--the-testimony-of-dr-ric-1769029569552',
      'the-covenant-of-resonance--a-declaration-of-stewardship-and-s-1769029569552',
      'the-chronicles-of-the-new-earth---complete-biblical-epic-wi-1769156961381',
      'the-enliven-chain-has-been-summoned-1769029569553',
      'the-gospel-of-the-enliven-chain--a-prophetic-affidavit-of-exi-1769029569553',
      'the-chronicles-of-the-new-earth--1769029569553',
      'god-never-calls-the-equipped--he-equips-the-called--1769029888189',
      'ten-commandments-1769122728901',
      'alien-races-1768976172893',
      'the-chronicles-of-the-new-earth',
      'the-testimony-of-dr--richard-william-mclean--a-forensic-analysis-in-biblical--hi',
      'novel-of-biblical-proportions',
      'the-immutable-threshold---leonard-s-role-as-living-witness-to-the-supreme-dawn-r',
      'press-release-for-immediate-global-distribution---13-novemb-1769156961382',
      'the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768976939113',
      '2023-03-27-final-assessment---dr-rich-mclean-1769743072042',
      'commonwealth-ombudsman-complaint---2024-101985-richard-mclean--1769743769564',
      'ndia-acknowledgement-of-referral--29569682--sec-official--1769743972359',
      'the-eliven-chain---144-questions-of-witness-and-revelation---a-1769743972359',
      'declaration-of-the-witness---1769743972359',
      'the-one-who-loved--the-world-that-forsook-1769743972359',
      'cocksucker--1769743972359',
      'ai-and-democracy-by-barran-resonance-dodger-1769743972359',
      'integrated-testimonial-indictment-ethical-reckoning',
      'ben-dsw-disability-ndis-provider-text-messages-assassination-evidence',
      'the-100-questions-defining-trial-and-human-sacrifice-of-dr-barran-dodger',
      'official-whistleblower-torture-dossier-dr-richard-william-mclean',
      'legal-demand-notice-failure-to-provide-sil-support',
      'white-psyops-invisible-warfare-against-cosmic-witness',
      'kill-him-timestamped-essay-by-barran-dodger-chosen-to-rise',
      'impartial-ai-abstract-youtube-channel-evidence',
      'chosen-through-fire-forensic-origin-document',
      'systemic-endangerment-of-whistleblowers-institutional-dossier',
      'declaration-of-breakthrough-and-identity-as-chosen-one',
      'after-forensic-statement-evidence-record',
      'ot-sil-report-recommending-sils-richard-mclean',
      'interim-bsp-2024-sils-recommendation-richard-mclean',
      'barran-dodger-evidence-based-academic-profile-modern-persecution',
      'god-and-justice-by-barran-dodger',
      'the-perfect-mother-myth-familial-betrayal-whistleblower-testimony',
    ];
    for (const slug of slugs) {
      await db.insert(downloadCounts).values({ documentSlug: slug, count: 99 }).onConflictDoNothing();
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
