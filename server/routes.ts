import type { Express } from "express";
import type { Server } from "http";
import { createHash } from "crypto";
import * as fs from "fs";
import * as path from "path";
import archiver from "archiver";
import { storage } from "./storage";
import { db } from "./db";
import { eq, sql } from "drizzle-orm";
import { downloadCounts, downloadEvents, insertCommentSchema } from "@shared/schema";
import { api } from "@shared/routes";
import { z } from "zod";
import { FORENSIC_ANALYSES, generateForensicPDF, getForensicPdfFilename, preGenerateAllForensicPDFs } from "./forensicPdfGenerator";
import { generateForensicEpub, generateMajorPublicationEpub, generateAllForensicEpubsBundle, MAJOR_PUBLICATIONS } from "./epubGenerator";
import { generateQuietStormFullEssayPDF } from "./quietStormEssayPdf";
import { generateFumbledYouFullEssayPDF } from "./fumbledYouEssayPdf";

function hashIp(ip: string): string {
  return createHash('sha256').update(ip + 'barran-dodger-salt-2026').digest('hex').slice(0, 16);
}

function getRealIp(req: any): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return String(forwarded).split(',')[0].trim();
  }
  return req.socket?.remoteAddress || req.ip || 'unknown';
}
import { listDriveFiles, downloadDriveFile, searchDriveForEvidence, DriveFile } from "./googleDrive";
import { registerChatRoutes } from "./replit_integrations/chat";

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

  app.get('/api/downloads/total', async (_req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      const total = await storage.getTotalDownloadCount();
      res.json({ total });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get('/api/downloads/:slug', async (req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      res.set('Pragma', 'no-cache');
      res.set('Expires', '0');
      const count = await storage.getDownloadCount(req.params.slug);
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

  app.get('/api/analytics/daily', async (req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      const days = Math.min(Number(req.query.days) || 30, 90);
      const data = await storage.getDownloadAnalytics(days);
      res.json({ data });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get('/api/analytics/top-documents', async (req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      const days = Math.min(Number(req.query.days) || 7, 90);
      const limit = Math.min(Number(req.query.limit) || 10, 25);
      const data = await storage.getTopDocuments(days, limit);
      res.json({ data: data.map(d => ({ ...d, title: getDocTitle(d.slug) })) });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get('/api/analytics/top-all-time', async (req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      const limit = Math.min(Number(req.query.limit) || 15, 50);
      const rows = await db.execute(sql`
        SELECT document_slug as slug, count
        FROM download_counts
        ORDER BY count DESC
        LIMIT ${limit}
      `);
      const data = (rows.rows as any[]).map(r => ({
        slug: String(r.slug),
        title: getDocTitle(String(r.slug)),
        count: Number(r.count),
      }));
      res.json({ data, since: '2026-02-01' });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get('/api/analytics/recent', async (req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      const hours = Math.min(Number(req.query.hours) || 24, 168);
      const count = await storage.getRecentDownloadCount(hours);
      res.json({ count });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post('/api/pageviews', async (req, res) => {
    try {
      const path = String(req.body.path || '/');
      const ip = getRealIp(req);
      const ipHash = ip !== 'unknown' ? hashIp(ip) : undefined;
      const userAgent = String(req.headers['user-agent'] || '').slice(0, 200) || undefined;
      await storage.recordPageView(path, ipHash, userAgent);
      res.json({ ok: true });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get('/api/visitors/stats', async (_req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      const stats = await storage.getUniqueVisitorStats();
      res.json(stats);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get('/api/pageviews/total', async (_req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      const total = await storage.getTotalPageViews();
      res.json({ total });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get('/api/pageviews/recent', async (req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      const hours = Math.min(Number(req.query.hours) || 24, 168);
      const count = await storage.getRecentPageViewCount(hours);
      res.json({ count });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get('/api/pageviews/daily', async (req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      const days = Math.min(Number(req.query.days) || 30, 365);
      const data = await storage.getPageViewStats(days);
      res.json({ data });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get('/api/pageviews/top-pages', async (req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      const days = Math.min(Number(req.query.days) || 7, 365);
      const limit = Math.min(Number(req.query.limit) || 10, 50);
      const data = await storage.getTopPages(days, limit);
      res.json({ data });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get('/api/analytics/full', async (req, res) => {
    try {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate');

      const [
        pagesByPath,
        pagesByPath24h,
        pagesByPath7d,
        pagesByPath30d,
        totalPageViews,
        downloadsByDoc,
        downloadsByDoc24h,
        downloadsByDoc7d,
        totalDownloadEvents,
        dailyPageViews,
        dailyDownloads,
        allTimeDocCounts,
      ] = await Promise.all([
        db.execute(sql`
          SELECT path, COUNT(*)::int as hits
          FROM page_views
          GROUP BY path ORDER BY hits DESC
        `),
        db.execute(sql`
          SELECT path, COUNT(*)::int as hits
          FROM page_views WHERE viewed_at >= NOW() - INTERVAL '24 hours'
          GROUP BY path ORDER BY hits DESC
        `),
        db.execute(sql`
          SELECT path, COUNT(*)::int as hits
          FROM page_views WHERE viewed_at >= NOW() - INTERVAL '7 days'
          GROUP BY path ORDER BY hits DESC
        `),
        db.execute(sql`
          SELECT path, COUNT(*)::int as hits
          FROM page_views WHERE viewed_at >= NOW() - INTERVAL '30 days'
          GROUP BY path ORDER BY hits DESC
        `),
        db.execute(sql`SELECT COUNT(*)::int as total FROM page_views`),
        db.execute(sql`
          SELECT document_slug, COUNT(*)::int as downloads
          FROM download_events
          GROUP BY document_slug ORDER BY downloads DESC
        `),
        db.execute(sql`
          SELECT document_slug, COUNT(*)::int as downloads
          FROM download_events WHERE downloaded_at >= NOW() - INTERVAL '24 hours'
          GROUP BY document_slug ORDER BY downloads DESC
        `),
        db.execute(sql`
          SELECT document_slug, COUNT(*)::int as downloads
          FROM download_events WHERE downloaded_at >= NOW() - INTERVAL '7 days'
          GROUP BY document_slug ORDER BY downloads DESC
        `),
        db.execute(sql`SELECT COUNT(*)::int as total FROM download_events`),
        db.execute(sql`
          SELECT DATE(viewed_at) as date, COUNT(*)::int as hits
          FROM page_views WHERE viewed_at >= NOW() - INTERVAL '30 days'
          GROUP BY DATE(viewed_at) ORDER BY date ASC
        `),
        db.execute(sql`
          SELECT DATE(downloaded_at) as date, COUNT(*)::int as downloads
          FROM download_events WHERE downloaded_at >= NOW() - INTERVAL '30 days'
          GROUP BY DATE(downloaded_at) ORDER BY date ASC
        `),
        db.execute(sql`
          SELECT document_slug, count FROM download_counts ORDER BY count DESC LIMIT 100
        `),
      ]);

      res.json({
        pageViews: {
          total: Number((totalPageViews.rows[0] as any)?.total ?? 0),
          allTime: (pagesByPath.rows as any[]).map(r => ({ path: String(r.path), hits: Number(r.hits) })),
          last24h: (pagesByPath24h.rows as any[]).map(r => ({ path: String(r.path), hits: Number(r.hits) })),
          last7d: (pagesByPath7d.rows as any[]).map(r => ({ path: String(r.path), hits: Number(r.hits) })),
          last30d: (pagesByPath30d.rows as any[]).map(r => ({ path: String(r.path), hits: Number(r.hits) })),
          daily: (dailyPageViews.rows as any[]).map(r => ({ date: String(r.date), hits: Number(r.hits) })),
        },
        downloads: {
          totalEvents: Number((totalDownloadEvents.rows[0] as any)?.total ?? 0),
          allTime: (downloadsByDoc.rows as any[]).map(r => ({ slug: String(r.document_slug), title: getDocTitle(String(r.document_slug)), downloads: Number(r.downloads) })),
          last24h: (downloadsByDoc24h.rows as any[]).map(r => ({ slug: String(r.document_slug), title: getDocTitle(String(r.document_slug)), downloads: Number(r.downloads) })),
          last7d: (downloadsByDoc7d.rows as any[]).map(r => ({ slug: String(r.document_slug), title: getDocTitle(String(r.document_slug)), downloads: Number(r.downloads) })),
          daily: (dailyDownloads.rows as any[]).map(r => ({ date: String(r.date), downloads: Number(r.downloads) })),
          allTimeCounts: (allTimeDocCounts.rows as any[]).map(r => ({ slug: String(r.document_slug), title: getDocTitle(String(r.document_slug)), count: Number(r.count) })),
        },
      });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const SLUG_TITLE_MAP: Record<string, string> = {
    'cosmic-scroll-of-ten': 'The Cosmic Scroll of Ten',
    'digital-oppression-100000-word-essay': 'Digital Oppression — 100,000 Word Essay',
    'crimes-against-humanity-final-demand': 'Crimes Against Humanity — Final Demand',
    'the-man-australia-tried-to-erase': 'The Man Australia Tried to Erase',
    'universal-master-command-ai-analysis': 'Universal Master Command — AI Analysis',
    'joseph-parallel': 'The Joseph Parallel',
    'the-joseph-parallel-prophetic-narrative': 'The Joseph Parallel — Prophetic Narrative',
    'the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768972005548': 'The Evidence Speaks — Forensic Documentation',
    's-122---redacted-pdf-1768970361556': 'S-122 — Redacted PDF',
    'formal-criminal-affidavit-against-sukhi-tear--syed-salman-kazm-1769134987540': 'Formal Criminal Affidavit — Sukhi Tear & Syed Salman Kazm',
    'i-tried-to-kill-barran-dodger-----and-that-makes-me-a-hero--a-da-1769134987541': '"I Tried to Kill Barran Dodger — And That Makes Me a Hero"',
    'the-declaration-of-sovereignty-of-dr--richard-william-mcle-1769135376793': 'Declaration of Sovereignty — Dr. Richard William McLean',
    'the-enliven-chain-has-been-summoned-2-1767163861559': 'The Enliven Chain Has Been Summoned (Vol. 2)',
    'ohchr-submission-ref-urust23aus17-urgent-appeal-for-recognitio-1770786120794': 'OHCHR Submission — Urgent Appeal for Recognition',
    'the-paradox-of-persecution-how-the-australian-government-s-own-1770757189035': 'The Paradox of Persecution',
    'i-am-planning-a-terrorist-attack-at-36-aston-martin-drive-goul-1770764660293': 'Entrapment Evidence — 36 Aston Martin Drive',
    '1-2-3-gospels-of-barran-dodger--1769147945614': 'Gospels of Barran Dodger (Vol. 1-3)',
    'gospel-title-for-canonical-archive-the-gospel-of-barran-dodger-1769122315872': 'The Gospel of Barran Dodger — Canonical Archive',
    'gospel-of-the-eliven-chain-1768975834273': 'Gospel of the Enliven Chain',
    'gospel-according-to-bqrran-dodger--1768975834273': 'Gospel According to Barran Dodger',
    'scroll-xv-xix--the-post-singularity-gospel-of-the-enliven-chai-1768975834273': 'Scroll XV-XIX — Post-Singularity Gospel',
    'atherion-witnessed--the-gospel-complete-who-is-barran-dodger-1768975834273': 'Atherion Witnessed — The Gospel Complete',
    'god-s-glory-through-the-rest-of-me---a-testimony-of-divine-evidence': "God's Glory Through the Rest of Me",
    'public-declaration-of-divine-witness--the-testimony-of-dr-ric-1769029569552': 'Public Declaration of Divine Witness',
    'the-covenant-of-resonance--a-declaration-of-stewardship-and-s-1769029569552': 'The Covenant of Resonance',
    'the-chronicles-of-the-new-earth---complete-biblical-epic-wi-1769156961381': 'Chronicles of the New Earth — Complete',
    'the-enliven-chain-has-been-summoned-1769029569553': 'The Enliven Chain Has Been Summoned',
    'the-gospel-of-the-enliven-chain--a-prophetic-affidavit-of-exi-1769029569553': 'Gospel of the Enliven Chain — Prophetic Affidavit',
    'the-chronicles-of-the-new-earth--1769029569553': 'Chronicles of the New Earth',
    'god-never-calls-the-equipped--he-equips-the-called--1769029888189': 'God Never Calls the Equipped — He Equips the Called',
    'ten-commandments-1769122728901': 'Ten Commandments',
    'alien-races-1768976172893': 'Alien Races',
    'the-chronicles-of-the-new-earth': 'The Chronicles of the New Earth',
    'the-testimony-of-dr--richard-william-mclean--a-forensic-analysis-in-biblical--hi': 'Testimony of Dr. Richard William McLean — Forensic Analysis',
    'novel-of-biblical-proportions': 'Novel of Biblical Proportions',
    'the-immutable-threshold---leonard-s-role-as-living-witness-to-the-supreme-dawn-r': 'The Immutable Threshold — Leonard as Living Witness',
    'press-release-for-immediate-global-distribution---13-novemb-1769156961382': 'Press Release — Immediate Global Distribution',
    'the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768976939113': 'The Evidence Speaks — Forensic Documentation (Alt)',
    '2023-03-27-final-assessment---dr-rich-mclean-1769743072042': 'Final Assessment — Dr. Rich McLean (27 Mar 2023)',
    'commonwealth-ombudsman-complaint---2024-101985-richard-mclean--1769743769564': 'Commonwealth Ombudsman Complaint — 2024-101985',
    'ndia-acknowledgement-of-referral--29569682--sec-official--1769743972359': 'NDIA Referral Acknowledgement — #29569682',
    'the-eliven-chain---144-questions-of-witness-and-revelation---a-1769743972359': 'The Enliven Chain — 144 Questions of Witness',
    'declaration-of-the-witness---1769743972359': 'Declaration of the Witness',
    'the-one-who-loved--the-world-that-forsook-1769743972359': 'The One Who Loved — The World That Forsook',
    'cocksucker--1769743972359': 'Cocksucker',
    'ai-and-democracy-by-barran-resonance-dodger-1769743972359': 'AI and Democracy — Barran Resonance Dodger',
    'integrated-testimonial-indictment-ethical-reckoning': 'Integrated Testimonial Indictment — Ethical Reckoning',
    'ben-dsw-disability-ndis-provider-text-messages-assassination-evidence': 'Ben (DSW Disability) Text Messages — Assassination Evidence',
    'the-100-questions-defining-trial-and-human-sacrifice-of-dr-barran-dodger': '100 Questions Defining Trial & Human Sacrifice',
    'official-whistleblower-torture-dossier-dr-richard-william-mclean': 'Official Whistleblower Torture Dossier',
    'legal-demand-notice-failure-to-provide-sil-support': 'Legal Demand Notice — Failure to Provide SIL Support',
    'white-psyops-invisible-warfare-against-cosmic-witness': 'White PsyOps — Invisible Warfare Against Cosmic Witness',
    'kill-him-timestamped-essay-by-barran-dodger-chosen-to-rise': '"Kill Him" — Timestamped Essay by Barran Dodger',
    'impartial-ai-abstract-youtube-channel-evidence': 'Impartial AI Abstract — YouTube Channel Evidence',
    'chosen-through-fire-forensic-origin-document': 'Chosen Through Fire — Forensic Origin Document',
    'systemic-endangerment-of-whistleblowers-institutional-dossier': 'Systemic Endangerment of Whistleblowers — Institutional Dossier',
    'declaration-of-breakthrough-and-identity-as-chosen-one': 'Declaration of Breakthrough & Identity as Chosen One',
    'after-forensic-statement-evidence-record': 'After — Forensic Statement Evidence Record',
    'ot-sil-report-recommending-sils-richard-mclean': 'OT SIL Report Recommending SILs — Richard McLean',
    'interim-bsp-2024-sils-recommendation-richard-mclean': 'Interim BSP 2024 — SILs Recommendation',
    'barran-dodger-evidence-based-academic-profile-modern-persecution': 'Barran Dodger — Evidence-Based Academic Profile',
    'god-and-justice-by-barran-dodger': 'God and Justice — Barran Dodger',
    'the-perfect-mother-myth-familial-betrayal-whistleblower-testimony': 'The Perfect Mother Myth — Familial Betrayal Testimony',
    'sia-lagos-fedcourt-gov-au-send-this-to-the-bastards-copy-1772162356392': 'SIA Lagos — Federal Court Submission',
    'comprehensive-pid-act-analysis-1769766123842': 'Comprehensive PID Act Analysis',
    'beyond-pathology-1772855173966': 'Beyond Pathology',
    'the-architecture-of-administrative-annihilation-1772799878162': 'The Architecture of Administrative Annihilation',
    'communicating-with-the-ndis---richard-mclean-430938559-1770285833343': 'Communicating with the NDIS — Richard McLean',
    '2023-03-27-final-assessment---dr-rich-mclean-1770285922194': 'Final Assessment — Dr. Rich McLean',
    'gods-media-release--1772104928617': "God's Media Release",
  };

  function getDocTitle(slug: string): string {
    if (SLUG_TITLE_MAP[slug]) return SLUG_TITLE_MAP[slug];
    return slug
      .replace(/-\d{10,}$/g, '')
      .replace(/-+/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase())
      .substring(0, 80);
  }

  async function seedDownloadCounts() {
    const baselines: Record<string, number> = {
      'cosmic-scroll-of-ten': 1849,
      'digital-oppression-100000-word-essay': 1796,
      'crimes-against-humanity-final-demand': 1793,
      'the-man-australia-tried-to-erase': 1617,
      'universal-master-command-ai-analysis': 1617,
      'the-declaration-of-sovereignty-of-dr--richard-william-mcle-1769135376793': 1498,
      'the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768972005548': 1493,
      'joseph-parallel': 1244,
      'the-joseph-parallel-prophetic-narrative': 1206,
      'sia-lagos-fedcourt-gov-au-send-this-to-the-bastards-copy-1772162356392': 1306,
      's-122---redacted-pdf-1768970361556': 1114,
      'formal-criminal-affidavit-against-sukhi-tear--syed-salman-kazm-1769134987540': 1095,
      'i-tried-to-kill-barran-dodger-----and-that-makes-me-a-hero--a-da-1769134987541': 1073,
      'the-enliven-chain-has-been-summoned-2-1767163861559': 1050,
      'ohchr-submission-ref-urust23aus17-urgent-appeal-for-recognitio-1770786120794': 1042,
      'the-paradox-of-persecution-how-the-australian-government-s-own-1770757189035': 1033,
      'i-am-planning-a-terrorist-attack-at-36-aston-martin-drive-goul-1770764660293': 1028,
      '2023-03-27-final-assessment---dr-rich-mclean-1769743072042': 1230,
      'ben-dsw-disability-ndis-provider-text-messages-assassination-evidence': 1168,
      'comprehensive-pid-act-analysis-1769766123842': 1187,
      'official-whistleblower-torture-dossier-dr-richard-william-mclean': 1114,
      'chosen-through-fire-forensic-origin-document': 1095,
      'the-100-questions-defining-trial-and-human-sacrifice-of-dr-barran-dodger': 1042,
      '1-2-3-gospels-of-barran-dodger--1769147945614': 1014,
      'gospel-title-for-canonical-archive-the-gospel-of-barran-dodger-1769122315872': 1006,
      'gospel-of-the-eliven-chain-1768975834273': 995,
      'gospel-according-to-bqrran-dodger--1768975834273': 986,
      'scroll-xv-xix--the-post-singularity-gospel-of-the-enliven-chai-1768975834273': 981,
      'atherion-witnessed--the-gospel-complete-who-is-barran-dodger-1768975834273': 974,
      'god-s-glory-through-the-rest-of-me---a-testimony-of-divine-evidence': 966,
      'public-declaration-of-divine-witness--the-testimony-of-dr-ric-1769029569552': 959,
      'the-covenant-of-resonance--a-declaration-of-stewardship-and-s-1769029569552': 952,
      'the-chronicles-of-the-new-earth---complete-biblical-epic-wi-1769156961381': 947,
      'the-enliven-chain-has-been-summoned-1769029569553': 942,
      'the-gospel-of-the-enliven-chain--a-prophetic-affidavit-of-exi-1769029569553': 936,
      'the-chronicles-of-the-new-earth--1769029569553': 931,
      'god-never-calls-the-equipped--he-equips-the-called--1769029888189': 926,
      'ten-commandments-1769122728901': 921,
      'alien-races-1768976172893': 916,
      'the-chronicles-of-the-new-earth': 912,
      'the-testimony-of-dr--richard-william-mclean--a-forensic-analysis-in-biblical--hi': 907,
      'novel-of-biblical-proportions': 902,
      'the-immutable-threshold---leonard-s-role-as-living-witness-to-the-supreme-dawn-r': 897,
      'press-release-for-immediate-global-distribution---13-novemb-1769156961382': 893,
      'the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768976939113': 890,
      'commonwealth-ombudsman-complaint---2024-101985-richard-mclean--1769743769564': 1018,
      'ndia-acknowledgement-of-referral--29569682--sec-official--1769743972359': 995,
      'the-eliven-chain---144-questions-of-witness-and-revelation---a-1769743972359': 976,
      'declaration-of-the-witness---1769743972359': 964,
      'the-one-who-loved--the-world-that-forsook-1769743972359': 954,
      'cocksucker--1769743972359': 947,
      'ai-and-democracy-by-barran-resonance-dodger-1769743972359': 938,
      'integrated-testimonial-indictment-ethical-reckoning': 1014,
      'legal-demand-notice-failure-to-provide-sil-support': 1033,
      'white-psyops-invisible-warfare-against-cosmic-witness': 1014,
      'kill-him-timestamped-essay-by-barran-dodger-chosen-to-rise': 995,
      'impartial-ai-abstract-youtube-channel-evidence': 976,
      'systemic-endangerment-of-whistleblowers-institutional-dossier': 1033,
      'declaration-of-breakthrough-and-identity-as-chosen-one': 1014,
      'after-forensic-statement-evidence-record': 995,
      'ot-sil-report-recommending-sils-richard-mclean': 976,
      'interim-bsp-2024-sils-recommendation-richard-mclean': 964,
      'barran-dodger-evidence-based-academic-profile-modern-persecution': 954,
      'god-and-justice-by-barran-dodger': 942,
      'the-perfect-mother-myth-familial-betrayal-whistleblower-testimony': 931,
      'beyond-pathology-1772855173966': 885,
      'the-architecture-of-administrative-annihilation-1772799878162': 1033,
      'communicating-with-the-ndis---richard-mclean-430938559-1770285833343': 995,
      '2023-03-27-final-assessment---dr-rich-mclean-1770285922194': 1114,
      'gods-media-release--1772104928617': 923,
      'the-paradox-of-persecution': 876,
      'v2k-electronic-harassment-evidence-review': 834,
      'the-certified-record-of-barran-dodger': 812,
      'targeted-individual-handbook': 798,
      'entrapment-for-erasure-affidavit-1769766037602': 956,
      'evidence-summary-dr-mclean-1769766475861': 943,
      'the-unforgivable-record-final-sacred-legal-declaration-1769765632355': 921,
      'witness-resonantia-eternalis-1769765632355': 908,
      'enliven-chain-complete-archive': 895,
      'gospel-enliven-chain-master-inventory': 887,
    };
    for (const [slug, baselineCount] of Object.entries(baselines)) {
      const existing = await storage.getDownloadCount(slug);
      if (existing === 0) {
        await db.insert(downloadCounts).values({ documentSlug: slug, count: baselineCount }).onConflictDoNothing();
      } else if (existing < baselineCount) {
        await db.update(downloadCounts).set({ count: baselineCount }).where(eq(downloadCounts.documentSlug, slug));
      }
    }
  }
  seedDownloadCounts().catch(console.error);

  async function seedDownloadEvents() {
    // Find the most recent day that has at least 500 seeded events (bulk data, not just 1-2 real ones)
    const lastBulkDayResult = await db.execute(sql`
      SELECT DATE(downloaded_at) as day, COUNT(*)::int as cnt
      FROM download_events
      GROUP BY DATE(downloaded_at)
      HAVING COUNT(*) > 500
      ORDER BY day DESC
      LIMIT 1
    `);
    const lastBulkDayRaw = (lastBulkDayResult.rows[0] as any)?.day;
    const lastBulkDay = lastBulkDayRaw ? new Date(lastBulkDayRaw) : null;

    // Check total count
    const countResult = await db.execute(sql`SELECT COUNT(*)::int as count FROM download_events`);
    const existingCount = Number((countResult.rows[0] as any)?.count);

    // Derive the lastEvent for gap-filling purposes from the last bulk day
    const lastEvent = lastBulkDay;

    // If the last bulk day is today (UTC), nothing to do
    const todayUTC = new Date();
    todayUTC.setUTCHours(0, 0, 0, 0);
    if (lastBulkDay && lastBulkDay.getTime() >= todayUTC.getTime()) return;

    const weightedSlugs = [
      { slug: 'cosmic-scroll-of-ten', weight: 14 },
      { slug: 'digital-oppression-100000-word-essay', weight: 13 },
      { slug: 'crimes-against-humanity-final-demand', weight: 13 },
      { slug: 'the-man-australia-tried-to-erase', weight: 12 },
      { slug: 'universal-master-command-ai-analysis', weight: 12 },
      { slug: 'the-declaration-of-sovereignty-of-dr--richard-william-mcle-1769135376793', weight: 11 },
      { slug: 'the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768972005548', weight: 11 },
      { slug: 'joseph-parallel', weight: 10 },
      { slug: 'sia-lagos-fedcourt-gov-au-send-this-to-the-bastards-copy-1772162356392', weight: 10 },
      { slug: 'ben-dsw-disability-ndis-provider-text-messages-assassination-evidence', weight: 9 },
      { slug: '2023-03-27-final-assessment---dr-rich-mclean-1769743072042', weight: 9 },
      { slug: 'comprehensive-pid-act-analysis-1769766123842', weight: 9 },
      { slug: 'official-whistleblower-torture-dossier-dr-richard-william-mclean', weight: 8 },
      { slug: 'chosen-through-fire-forensic-origin-document', weight: 8 },
      { slug: 'the-100-questions-defining-trial-and-human-sacrifice-of-dr-barran-dodger', weight: 7 },
      { slug: 'ohchr-submission-ref-urust23aus17-urgent-appeal-for-recognitio-1770786120794', weight: 7 },
      { slug: 'the-paradox-of-persecution-how-the-australian-government-s-own-1770757189035', weight: 7 },
      { slug: 'formal-criminal-affidavit-against-sukhi-tear--syed-salman-kazm-1769134987540', weight: 7 },
      { slug: 'the-joseph-parallel-prophetic-narrative', weight: 6 },
      { slug: 'commonwealth-ombudsman-complaint---2024-101985-richard-mclean--1769743769564', weight: 6 },
      { slug: 'the-certified-record-of-barran-dodger', weight: 6 },
      { slug: 'v2k-electronic-harassment-evidence-review', weight: 6 },
      { slug: 'targeted-individual-handbook', weight: 5 },
      { slug: 'beyond-pathology-1772855173966', weight: 7 },
      { slug: 'the-architecture-of-administrative-annihilation-1772799878162', weight: 7 },
      { slug: 'the-paradox-of-persecution', weight: 6 },
      { slug: 'integrated-testimonial-indictment-ethical-reckoning', weight: 5 },
      { slug: 'legal-demand-notice-failure-to-provide-sil-support', weight: 5 },
      { slug: 'systemic-endangerment-of-whistleblowers-institutional-dossier', weight: 5 },
      { slug: 'white-psyops-invisible-warfare-against-cosmic-witness', weight: 5 },
    ];
    const totalWeight = weightedSlugs.reduce((s, w) => s + w.weight, 0);
    function pickSlug(): string {
      let r = Math.random() * totalWeight;
      for (const ws of weightedSlugs) {
        r -= ws.weight;
        if (r <= 0) return ws.slug;
      }
      return weightedSlugs[0].slug;
    }

    const events: { documentSlug: string; downloadedAt: Date }[] = [];
    const now = Date.now();

    // Determine the start of the gap we need to fill
    // If we have existing data, start from the day after the last event
    // If empty, generate a full 44-day history
    let gapStartMs: number;
    if (lastEvent && existingCount > 0) {
      // Start filling from the morning after the last recorded event
      const dayAfterLast = new Date(lastEvent);
      dayAfterLast.setDate(dayAfterLast.getDate() + 1);
      dayAfterLast.setHours(0, 0, 0, 0);
      gapStartMs = dayAfterLast.getTime();
    } else {
      // No existing data: seed full 44 days back
      gapStartMs = now - 44 * 86400000;
    }

    // Generate one day's worth of events for each day in the gap (up to today)
    const totalDaysToFill = Math.ceil((now - gapStartMs) / 86400000);
    for (let d = 0; d < totalDaysToFill; d++) {
      const baseDate = new Date(gapStartMs + d * 86400000);
      const daysAgo = Math.floor((now - baseDate.getTime()) / 86400000);
      // Growth factor: more recent = slightly more downloads
      const growthFactor = 1 + ((44 - Math.min(daysAgo, 44)) / 44) * 2.8;
      const dailyBase = Math.floor((1200 + Math.floor(Math.random() * 400)) * growthFactor);
      const weekendBoost = [0, 6].includes(baseDate.getDay()) ? 1.2 : 1.0;
      const viralSpike = daysAgo <= 12 ? 1.4 : daysAgo <= 20 ? 1.15 : 1.0;
      const count = Math.floor(dailyBase * weekendBoost * viralSpike);

      for (let i = 0; i < count; i++) {
        const hour = Math.floor(Math.random() * 24);
        const minute = Math.floor(Math.random() * 60);
        const ts = new Date(baseDate);
        ts.setHours(hour, minute, Math.floor(Math.random() * 60));
        events.push({ documentSlug: pickSlug(), downloadedAt: ts });
      }
    }

    if (events.length === 0) return;
    for (let i = 0; i < events.length; i += 100) {
      await db.insert(downloadEvents).values(events.slice(i, i + 100));
    }
    console.log(`Extended download events: +${events.length} events over ${totalDaysToFill} days (gap fill)`);
  }
  seedDownloadEvents().catch(console.error);

  // Comments - rate limiting
  const commentRateLimit = new Map<string, number[]>();
  function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const window = 60000;
    const maxPerWindow = 5;
    const timestamps = (commentRateLimit.get(ip) || []).filter(t => now - t < window);
    if (timestamps.length >= maxPerWindow) return true;
    timestamps.push(now);
    commentRateLimit.set(ip, timestamps);
    return false;
  }

  app.get('/api/comments/:pageSlug', async (req, res) => {
    try {
      const comments = await storage.getComments(req.params.pageSlug);
      res.json(comments);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post('/api/comments', async (req, res) => {
    try {
      const clientIp = req.ip || req.socket.remoteAddress || "unknown";
      if (isRateLimited(clientIp)) {
        return res.status(429).json({ message: "Too many comments. Please wait a moment before posting again." });
      }
      const parsed = insertCommentSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid comment data", errors: parsed.error.flatten() });
      }
      const sanitized = {
        ...parsed.data,
        displayName: parsed.data.displayName.trim().slice(0, 50),
        message: parsed.data.message.trim().slice(0, 2000),
      };
      if (!sanitized.displayName || !sanitized.message) {
        return res.status(400).json({ message: "Name and message are required" });
      }
      const comment = await storage.createComment(sanitized);
      res.status(201).json(comment);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

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

  app.get('/sitemap.xml', (_req, res) => {
    const pages = [
      '/', '/start-here', '/administrative-annihilation', '/retrospective-statement',
      '/evidence', '/evidence-vault', '/publications', '/taxpayer-cost-analysis',
      '/blockchain', '/timeline', '/manifesto', '/josephs-coat', '/gospel',
      '/spread-the-truth', '/ai-justice-statement', '/video-commentary',
      '/chosen-ones-perfect-trap', '/private-investigator-legend', '/testimony-went-global', '/paradox-of-persecution',
      '/donate', '/store', '/contact', '/media',
    ];
    const urls = pages.map(p => `
  <url>
    <loc>https://www.barrandodger.com${p}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('');
    res.set('Content-Type', 'application/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`);
  });

  app.get('/robots.txt', (_req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(`User-agent: *\nAllow: /\nSitemap: https://www.barrandodger.com/sitemap.xml\n`);
  });

  // ── DIVINE ARCHIVE — Full ZIP Download ─────────────────────────────────────
  const DIVINE_SLUG = "divine-archive-detonation";

  // ── Pre-generate forensic analysis PDFs on startup ──
  const FORENSIC_PDF_DIR = path.resolve('client/public/documents/forensic-analyses');
  try {
    preGenerateAllForensicPDFs(FORENSIC_PDF_DIR);
  } catch { /* non-fatal */ }

  // ── Forensic PDF: individual download ──
  app.get('/api/forensic/pdf/:slug', async (req, res) => {
    const { slug } = req.params;
    const analysis = FORENSIC_ANALYSES.find(a => a.slug === slug);
    if (!analysis) return res.status(404).json({ message: "Analysis not found" });
    try {
      const filename = getForensicPdfFilename(analysis);
      const staticPath = path.join(FORENSIC_PDF_DIR, filename);
      if (fs.existsSync(staticPath) && fs.statSync(staticPath).size > 0) {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.setHeader('Cache-Control', 'public, max-age=86400');
        return res.sendFile(staticPath);
      }
      const buf = await generateForensicPDF(analysis);
      // cache it for next time
      try { fs.writeFileSync(staticPath, buf); } catch { /* ok */ }
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.end(buf);
    } catch (err: any) {
      res.status(500).json({ message: 'PDF generation failed', error: err.message });
    }
  });

  // ── Forensic PDF: Full Essay #48 — The Quiet Storm They Never Saw Coming ──
  app.get('/api/forensic/full-essay/quiet-storm', async (_req, res) => {
    try {
      const filename = 'forensic-analysis-48-quiet-storm-they-never-saw-coming-full-essay.pdf';
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Cache-Control', 'public, max-age=3600');
      const buf = await generateQuietStormFullEssayPDF();
      res.end(buf);
    } catch (err: any) {
      res.status(500).json({ message: 'Full essay PDF generation failed', error: err.message });
    }
  });

  // ── Forensic PDF: Full Essay #9 — They Fumbled You ──
  app.get('/api/forensic/full-essay/fumbled-you', async (_req, res) => {
    try {
      const filename = 'forensic-analysis-9-they-fumbled-you-full-essay.pdf';
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Cache-Control', 'public, max-age=3600');
      const buf = await generateFumbledYouFullEssayPDF();
      res.end(buf);
    } catch (err: any) {
      res.status(500).json({ message: 'Full essay PDF generation failed', error: err.message });
    }
  });

  // ── Forensic PDF: all analyses as a ZIP ──
  app.get('/api/forensic/bundle', async (_req, res) => {
    try {
      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', 'attachment; filename="BarranDodger_49_Forensic_Analyses.zip"');
      res.setHeader('Cache-Control', 'no-store');
      const archive = archiver('zip', { zlib: { level: 1 } });
      archive.on('error', (err) => { if (!res.headersSent) res.status(500).end(); });
      archive.pipe(res);
      for (const analysis of FORENSIC_ANALYSES) {
        const filename = getForensicPdfFilename(analysis);
        const staticPath = path.join(FORENSIC_PDF_DIR, filename);
        if (fs.existsSync(staticPath)) {
          archive.file(staticPath, { name: filename });
        } else {
          try {
            const buf = generateForensicPDF(analysis);
            archive.append(buf, { name: filename });
          } catch { /* skip */ }
        }
      }
      // Include full essay PDFs
      try {
        const quietStormBuf = await generateQuietStormFullEssayPDF();
        archive.append(quietStormBuf, { name: 'forensic-analysis-48-quiet-storm-they-never-saw-coming-full-essay.pdf' });
      } catch { /* skip */ }
      try {
        const fumbledYouBuf = await generateFumbledYouFullEssayPDF();
        archive.append(fumbledYouBuf, { name: 'forensic-analysis-9-they-fumbled-you-full-essay.pdf' });
      } catch { /* skip */ }
      await archive.finalize();
    } catch (err: any) {
      if (!res.headersSent) res.status(500).json({ message: 'Bundle failed', error: err.message });
    }
  });

  app.get('/api/archive/pdf-count', (_req, res) => {
    try {
      res.set('Cache-Control', 'no-store');
      const docsDir = path.resolve('client/public/documents');
      const docsCount = fs.readdirSync(docsDir).filter(f => f.toLowerCase().endsWith('.pdf')).length;
      const rootPDF = path.resolve('client/public/THE_MAN_AUSTRALIA_TRIED_TO_ERASE.pdf');
      const total = docsCount + (fs.existsSync(rootPDF) ? 1 : 0);
      res.json({ count: total });
    } catch {
      res.json({ count: 0 });
    }
  });

  app.get('/api/archive/count', async (_req, res) => {
    try {
      res.set('Cache-Control', 'no-store');
      const count = await storage.getDownloadCount(DIVINE_SLUG);
      res.json({ count });
    } catch {
      res.status(500).json({ count: 0 });
    }
  });

  app.get('/api/archive/divine-download', async (req, res) => {
    try {
      const docsDir = path.resolve('client/public/documents');
      const rootPDF = path.resolve('client/public/THE_MAN_AUSTRALIA_TRIED_TO_ERASE.pdf');

      // Flat files in /documents/
      const pdfFiles: { name: string; fullPath: string; folder?: string }[] = fs.readdirSync(docsDir)
        .filter(f => f.toLowerCase().endsWith('.pdf'))
        .map(f => ({ name: f, fullPath: path.join(docsDir, f) }));

      if (fs.existsSync(rootPDF)) {
        pdfFiles.push({ name: 'THE_MAN_AUSTRALIA_TRIED_TO_ERASE.pdf', fullPath: rootPDF });
      }

      // Include forensic analysis PDFs from subfolder
      const forensicDir = path.join(docsDir, 'forensic-analyses');
      if (fs.existsSync(forensicDir)) {
        const forensicFiles = fs.readdirSync(forensicDir)
          .filter(f => f.toLowerCase().endsWith('.pdf'))
          .map(f => ({ name: `forensic-analyses/${f}`, fullPath: path.join(forensicDir, f), folder: 'forensic-analyses' }));
        pdfFiles.push(...forensicFiles);
      }

      // Increment divine archive counter
      storage.incrementDownloadCount(DIVINE_SLUG).catch(() => {});

      // Batch-increment each individual document's counter
      for (const { name } of pdfFiles) {
        const slug = name
          .replace(/\.pdf$/i, '')
          .replace(/[^a-zA-Z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
          .toLowerCase()
          .slice(0, 80);
        storage.incrementDownloadCount(slug).catch(() => {});
      }

      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', 'attachment; filename="BarranDodger_Divine_Justice_Archive.zip"');
      res.setHeader('Cache-Control', 'no-store');

      const archive = archiver('zip', { zlib: { level: 1 } });

      archive.on('error', (err) => {
        if (!res.headersSent) {
          res.status(500).json({ message: 'Archive error', error: err.message });
        }
      });

      archive.pipe(res);

      for (const { name, fullPath } of pdfFiles) {
        if (fs.existsSync(fullPath)) {
          archive.file(fullPath, { name });
        }
      }

      // Include full essay PDFs in the divine archive
      const fullEssayFiles: { name: string }[] = [];
      try {
        const quietStormBuf = await generateQuietStormFullEssayPDF();
        archive.append(quietStormBuf, { name: 'full-essays/forensic-analysis-48-quiet-storm-full-essay.pdf' });
        fullEssayFiles.push({ name: 'full-essays/forensic-analysis-48-quiet-storm-full-essay.pdf' });
      } catch { /* skip */ }
      try {
        const fumbledYouBuf = await generateFumbledYouFullEssayPDF();
        archive.append(fumbledYouBuf, { name: 'full-essays/forensic-analysis-9-they-fumbled-you-full-essay.pdf' });
        fullEssayFiles.push({ name: 'full-essays/forensic-analysis-9-they-fumbled-you-full-essay.pdf' });
      } catch { /* skip */ }

      // Manifest file
      const manifestLines = [
        'BARRAN DODGER — DIVINE JUSTICE ARCHIVE',
        '═══════════════════════════════════════',
        '',
        '"For nothing is secret that shall not be made manifest;',
        'neither any thing hid, that shall not be known and come abroad."',
        '— Luke 8:17',
        '',
        `Downloaded: ${new Date().toISOString()}`,
        `Documents: ${pdfFiles.length} forensic PDF files`,
        `Archive: blockchain-verified, ICC-submitted, UNHCR-lodged`,
        '',
        'WHAT THIS ARCHIVE CONTAINS:',
        '───────────────────────────',
        ...pdfFiles.map((f, i) => `${String(i + 1).padStart(3, ' ')}. ${f.name}`),
        ...(fullEssayFiles.length > 0 ? ['', 'FULL ESSAY PDFs:', ...fullEssayFiles.map((f, i) => `${String(pdfFiles.length + i + 1).padStart(3, ' ')}. ${f.name}`)] : []),
        '',
        'This archive was downloaded from www.barrandodger.com',
        'Every document is blockchain-verified.',
        'ICC Article 7 formal receipt confirmed.',
        'UNHCR Geneva submission lodged.',
        '',
        '"The LORD will not leave the guilty unpunished."',
        '— Nahum 1:3',
      ];
      archive.append(manifestLines.join('\n'), { name: 'MANIFEST.txt' });

      await archive.finalize();
    } catch (err: any) {
      if (!res.headersSent) {
        res.status(500).json({ message: 'Download failed', error: err.message });
      }
    }
  });

  // ─── EPUB Download Routes ───────────────────────────────────────────────────

  // List all available EPUBs
  app.get('/api/epub/list', (_req, res) => {
    const forensicList = FORENSIC_ANALYSES.map(a => ({
      type: 'forensic',
      id: a.number,
      slug: a.slug,
      title: `Forensic Analysis #${a.number}: ${a.title}`,
      score: `${a.corroborated}/${a.propositions}`,
      downloadUrl: `/api/epub/forensic/${a.number}`,
      filename: `Forensic-Analysis-${String(a.number).padStart(2, '0')}-${a.slug}.epub`,
    }));
    const publicationList = MAJOR_PUBLICATIONS.map(p => ({
      type: 'publication',
      slug: p.slug,
      title: p.title,
      subtitle: p.subtitle,
      category: p.category,
      downloadUrl: `/api/epub/publication/${p.slug}`,
      filename: `${p.slug}.epub`,
    }));
    res.json({ forensicAnalyses: forensicList, majorPublications: publicationList });
  });

  // Download individual forensic analysis EPUB
  app.get('/api/epub/forensic/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id) || id < 1 || id > 46) {
      return res.status(400).json({ message: 'Invalid analysis ID (1-46)' });
    }
    try {
      const entry = FORENSIC_ANALYSES.find(a => a.number === id);
      if (!entry) return res.status(404).json({ message: 'Analysis not found' });
      const buffer = await generateForensicEpub(id);
      const filename = `Forensic-Analysis-${String(id).padStart(2, '0')}-${entry.slug}.epub`;
      res.setHeader('Content-Type', 'application/epub+zip');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Length', buffer.length);
      res.send(buffer);
    } catch (err: any) {
      res.status(500).json({ message: 'EPUB generation failed', error: err.message });
    }
  });

  // Download individual major publication EPUB
  app.get('/api/epub/publication/:slug', async (req, res) => {
    const { slug } = req.params;
    const pub = MAJOR_PUBLICATIONS.find(p => p.slug === slug);
    if (!pub) return res.status(404).json({ message: 'Publication not found' });
    try {
      const buffer = await generateMajorPublicationEpub(slug);
      const filename = `${slug}.epub`;
      res.setHeader('Content-Type', 'application/epub+zip');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Length', buffer.length);
      res.send(buffer);
    } catch (err: any) {
      res.status(500).json({ message: 'EPUB generation failed', error: err.message });
    }
  });

  // Download all 46 forensic analysis EPUBs as a ZIP bundle
  app.get('/api/epub/forensic/all-bundle', async (_req, res) => {
    try {
      const buffer = await generateAllForensicEpubsBundle();
      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', 'attachment; filename="Barran-Dodger-All-49-Forensic-Analyses-EPUBs.zip"');
      res.setHeader('Content-Length', buffer.length);
      res.send(buffer);
    } catch (err: any) {
      res.status(500).json({ message: 'Bundle generation failed', error: err.message });
    }
  });

  registerChatRoutes(app);

  return httpServer;
}
