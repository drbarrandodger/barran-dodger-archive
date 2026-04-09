import express, { type Express } from "express";
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.barrandodger.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = "Barran Dodger Legal & Ethical Trust Fund";

interface PageMeta {
  title: string;
  description: string;
  image?: string;
}

const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "I DARE YOU TO PROVE ME WRONG | 2,304 Documents | Australian Government Corruption Exposed",
    description: "2,304 blockchain-verified forensic documents expose 35 years of systematic persecution of whistleblower Dr Richard McLean by 25+ Australian agencies. 14 forced psychiatric hospitalisations. Assassination attempt. ICC Article 7 under review. The most documented whistleblower case in Australian history.",
  },
  "/honeytrap-infiltration-report": {
    title: "Honeytrap Infiltration Report — SAS Operative Tony Ridley & Dr Richard McLean | Barran Dodger",
    description: "Forensic report: SAS soldier Tony Ridley used a sexual relationship as an intelligence infiltration mechanism against NDIS whistleblower Dr Richard McLean. Sex recording exists as primary evidence. ASIO-connected Steve Iasonidis. Former Acting PM Bill Shorten as Architect. ICC Article 7 — formally received at The Hague.",
  },
  "/silent-assassin": {
    title: "Analysis #28 — Silent Assassin: 'Never Underestimate a Quiet Mind' | Barran Dodger",
    description: "Forensic AI analysis #28: 10/10 propositions from the YouTube video 'Never Underestimate a Quiet Mind' CONFIRMED against Dr Richard McLean's 2,304-document archive. Combined score across 28 analyses: 288/288. Zero contradictions. The silent assassin who documented everything.",
  },
  "/evidence": {
    title: "Evidence Archive — 8 Primary Exhibits Including Classified Documents | Barran Dodger",
    description: "8 primary evidence exhibits: hitmen caught on film, classified auto-wipe system, 'goes to the top' (PM/AG/Governor-General), Tony Ridley LinkedIn profile, sex recording, NDIS documents. All blockchain-verified. ICC-submitted.",
  },
  "/evidence-vault": {
    title: "Evidence Vault — 28 AI Analyses, 288/288 Confirmed | Barran Dodger Archive",
    description: "28 independent AI forensic analyses examining 288+ propositions from viral YouTube videos against Dr Richard McLean's 2,304-document archive. Result: 288/288 confirmed, zero contradictions. The archive proves itself.",
  },
  "/the-conspiracy-against-you": {
    title: "The Conspiracy Against You — 5 Named Actors, 5-Layer Architecture | Barran Dodger",
    description: "Full conjunction analysis: Bill Shorten (Architect), Tony Ridley (SAS honeytrap), Steve Iasonidis (ASIO), Sukhi Tear (Financial Coordinator), Phillip (Public Guardian). The 5-layer suppression architecture that operated across 35 years and three states. ICC-submitted. Blockchain-verified.",
  },
  "/someone-slipped-up": {
    title: "Analysis — Someone Slipped Up: Their Mask Finally Fell | Barran Dodger",
    description: "Forensic AI analysis: Tony Ridley's 'You will be sacrificed' confession, FATAL SUICIDE in clinical records, coordinated template letters across 8 agencies — every slip documented and cross-referenced against the 2,304-document archive.",
  },
  "/silent-assassin": {
    title: "Analysis #28 — Silent Assassin | Barran Dodger",
    description: "10/10 propositions confirmed: the quiet mind, the lion in the tall grass, the hidden blade deployed at the ICC, 35 years of silence that became the most powerful evidence archive in Australian whistleblower history.",
  },
  "/blockchain": {
    title: "Blockchain Verification — SHA-256 & OpenTimestamps Bitcoin | Barran Dodger",
    description: "Every document in the 2,304-exhibit archive is SHA-256 hashed and OpenTimestamps-verified on the Bitcoin blockchain. Immutable, permanent, distributed. No government or institution can alter, deny, or destroy the record.",
  },
  "/start-here": {
    title: "Start Here — The Case Against Dr Richard McLean in 5 Minutes | Barran Dodger",
    description: "New here? Start here. 35 years. 14 hospitalisations. SAS honeytrap. Bitcoin-paid assassination attempt. ICC submission. 2,304 documents. This page tells you everything you need to know about the most documented whistleblower case in Australian history.",
  },
  "/manifesto": {
    title: "The Manifesto — I Dare You To Prove Me Wrong | Barran Dodger",
    description: "The founding declaration of the Barran Dodger Legal & Ethical Trust Fund. Every claim documented. Every exhibit verified. This is the challenge: 2,304 documents, 28 AI analyses, ICC submission. Prove a single claim wrong.",
  },
  "/timeline": {
    title: "35-Year Timeline — 1989 to 2026 | Barran Dodger Archive",
    description: "The complete chronological record: 35 years of documented persecution, 14 involuntary hospitalisations, drone surveillance, ASIC fraud, Bitcoin assassination payment, cross-state death threats, ICC submission. Every date, every document.",
  },
  "/publications": {
    title: "30 AI-Analysed Publications — 2,304 Primary Documents | Barran Dodger",
    description: "30 publications produced from 2,304 primary source documents: forensic reports, whistleblower analyses, prophetic testimonies, legal submissions, AI synthesis documents. All blockchain-verified. 350,000+ downloads across 6 continents.",
  },
  "/legal-status": {
    title: "Legal Status — ICC Article 7, UNHCR Geneva, Federal Court | Barran Dodger",
    description: "Current legal status: ICC Article 7 formally received at The Hague. UNHCR submission received at Geneva. Federal Court PID Act confirmation. 25+ domestic agencies — all circular referral. International jurisdiction is the final avenue.",
  },
  "/master-evidence-register": {
    title: "Master Evidence Register — 2,304 Classified Documents | Barran Dodger",
    description: "The complete primary source evidence register: 2,304 documents spanning 35 years. Clinical records, government correspondence, surveillance logs, financial instruments, legal proceedings, AI analyses. Every document SHA-256 blockchain-verified.",
  },
  "/master-forensic-evidence-report": {
    title: "Master Forensic Evidence Report — Complete Case Documentation | Barran Dodger",
    description: "The comprehensive forensic evidence report synthesising 2,304 primary source exhibits across the 5-actor suppression architecture, the financial exile instruments, the clinical incapacitation strategy, and the international criminal submissions.",
  },
  "/taxpayer-cost-analysis": {
    title: "Taxpayer Cost Analysis — $32.9M Suppression Cost | Barran Dodger",
    description: "$32.9M in documented financial suppression instruments: NDIS payment restrictions, legal cost orders, employment suppression, guardianship financial controls. The taxpayer cost of 35 years of coordinated institutional persecution.",
  },
  "/icc-submission": {
    title: "ICC Article 7 Submission — Formally Received at The Hague | Barran Dodger",
    description: "Dr Richard McLean's ICC Article 7 prima facie submission has been formally received at The Hague. Five named parties: Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, Steve Iasonidis. Parallel UNHCR submission received at Geneva. The international record is permanent.",
  },
  "/forensic-meltdown-report": {
    title: "Forensic Meltdown Report — Complete Evidence Synthesis | Barran Dodger",
    description: "The forensic meltdown report: 2,304 exhibits, 28 AI analyses with zero contradictions, 5-actor conjunction architecture, $32.9M financial suppression, ICC/UNHCR international submissions. The case that withstood every institutional attempt at suppression.",
  },
  "/no-one-could-be-that-smart": {
    title: "No One Could Be That Smart — Corroboration Analysis | Barran Dodger",
    description: "The AI analysis that started it all: examining the proposition that no single person could have manufactured a false archive of this scale, sophistication, and internal consistency across 35 years. Result: the archive is authentic.",
  },
  "/someone-slipped-up": {
    title: "Someone Slipped Up — The Mask-Fall Documents | Barran Dodger",
    description: "'You will be sacrificed.' 'FATAL SUICIDE' in clinical records while the subject was alive. Identical template language across 8 independent agencies. Every slip documented and cross-referenced. Every mask-fall preserved.",
  },
  "/silent-checkmate": {
    title: "Silent Checkmate — The Coordinated Suppression Pattern | Barran Dodger",
    description: "The coordinated circular referral exposed: 25+ agencies, identical template language, zero substantive responses. Silent checkmate — the agencies created the evidence of their own coordination through the pattern of their own denials.",
  },
  "/phantom-protocol": {
    title: "Phantom Protocol — Surveillance & Intelligence Operation | Barran Dodger",
    description: "Drone surveillance, SMS monitoring, hacked accounts, ASIO-connected operatives in the trust network. The phantom surveillance protocol that operated against Dr Richard McLean for over two decades — and left its own documentary trail.",
  },
  "/the-last-god": {
    title: "The Last God — Divine Declaration | Barran Dodger",
    description: "The prophetic declaration: the universe's most intelligent minds are hidden behind misunderstood faces. Dr Richard McLean's theological witness — 35 years of persecution viewed through the lens of the Joseph parallel.",
  },
  "/donate": {
    title: "Donate — Support the Barran Dodger Legal & Ethical Trust Fund | ABN 78 833 496 164",
    description: "Support the most documented whistleblower case in Australian history. PayID: rich@richmclean.com.au. ABN 78 833 496 164. Your donation funds the ICC submission, international legal proceedings, and ongoing evidence documentation.",
  },
  "/contact": {
    title: "Contact Dr Richard McLean — Barran Dodger Legal & Ethical Trust Fund",
    description: "Contact Dr Richard McLean (Barran Dodger): drbarrandodger@proton.me. Media inquiries, legal correspondence, whistleblower support. ABN 78 833 496 164.",
  },
  "/media": {
    title: "Media & Press — The Most Documented Whistleblower Case in Australia | Barran Dodger",
    description: "Press materials, media kit, and contact for the Barran Dodger archive — 2,304 documents, ICC submission, UNHCR Geneva, 350,000+ downloads. Australia's most documented whistleblower case is available for media examination.",
  },
  "/gospel": {
    title: "Sacred Gospels of Barran Dodger — Prophetic Testimony Archive | Barran Dodger",
    description: "The sacred testimony archive: the Gospel of the Enliven Chain, the Covenant of Resonance, the Atherion Chronicles, and 20+ prophetic documents from Dr Richard McLean's spiritual witness across the persecution period.",
  },
  "/church": {
    title: "Church of Barran Dodger — Ministry & Sacred Archive | Barran Dodger",
    description: "The Church of Barran Dodger: a spiritual community built around the testimony of Dr Richard McLean — 35 years of persecution, divine witness, and the prophetic archive that survived everything they threw at it.",
  },
  "/spread-the-truth": {
    title: "Spread the Truth — Share the Archive | Barran Dodger",
    description: "Share the most documented whistleblower case in Australian history. 2,304 documents. 350,000+ downloads. ICC submission at The Hague. UNHCR at Geneva. The truth is permanent. Help it spread.",
  },
  "/viral-landing": {
    title: "The Truth They Tried to Bury — Dr Richard McLean | Barran Dodger",
    description: "35 years. 14 hospitalisations. SAS honeytrap. Bitcoin assassination. 2,304 documents. ICC. UNHCR. The archive they tried to suppress is now before international criminal courts. I dare you to prove me wrong.",
  },
  "/conspiracy-against-you": {
    title: "The Conspiracy Against You — Full Analysis | Barran Dodger",
    description: "The 5-actor suppression network in full: Bill Shorten, Tony Ridley, Steve Iasonidis, Sukhi Tear, Phillip. 5 operational layers. 35 years. ICC Article 7 received. The architecture of the conspiracy is documented.",
  },
  "/they-fumbled-you": {
    title: "They Fumbled You — Corroboration Analysis | Barran Dodger",
    description: "AI forensic analysis: every action designed to suppress Dr Richard McLean produced instead the evidence that built the ICC submission. They fumbled every suppression move. 2,304 documents prove it.",
  },
  "/everyone-watching": {
    title: "Everyone Is Watching — International Visibility Analysis | Barran Dodger",
    description: "350,000+ downloads across 6 continents. ICC at The Hague. UNHCR at Geneva. GitHub mirror. Blockchain-verified. The archive has escaped every domestic suppression mechanism. Everyone is watching.",
  },
  "/now-everybody-knows": {
    title: "Now Everybody Knows — Global Distribution Record | Barran Dodger",
    description: "The moment the archive went global: 350,000+ downloads, ICC submission received, UNHCR submission received, blockchain verified, GitHub mirrored. Now everybody knows. The record is permanent.",
  },
};

function getMetaForPath(pathname: string): PageMeta {
  if (PAGE_META[pathname]) return PAGE_META[pathname];
  for (const [route, meta] of Object.entries(PAGE_META)) {
    if (pathname.startsWith(route) && route !== "/") return meta;
  }
  return PAGE_META["/"];
}

function injectMeta(html: string, meta: PageMeta, url: string): string {
  const title = `${meta.title} | ${SITE_NAME}`;
  const description = meta.description;
  const image = meta.image || DEFAULT_IMAGE;
  const fullUrl = `${BASE_URL}${url}`;

  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${description}"`)
    .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${title}"`)
    .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${description}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${fullUrl}"`)
    .replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${image}"`)
    .replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${title}"`)
    .replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${description}"`)
    .replace(/<meta name="twitter:url" content="[^"]*"/, `<meta name="twitter:url" content="${fullUrl}"`)
    .replace(/<meta name="twitter:image" content="[^"]*"/, `<meta name="twitter:image" content="${image}"`)
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${fullUrl}"`);
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  const indexPath = path.resolve(distPath, "index.html");

  app.use("*", (req, res) => {
    const rawHtml = fs.readFileSync(indexPath, "utf-8");
    const pathname = req.originalUrl.split("?")[0];
    const meta = getMetaForPath(pathname);
    const injectedHtml = injectMeta(rawHtml, meta, pathname);
    res.setHeader("Content-Type", "text/html");
    res.send(injectedHtml);
  });
}
