import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { getJsonLdForPath, renderJsonLdScript } from "./seoStructuredData";

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
    description: "2,304 blockchain-verified forensic documents expose 35 years of systematic persecution of whistleblower Dr Richard McLean by 25+ Australian agencies. 14 forced psychiatric hospitalisations. Assassination attempt. ICC Article 7 under review at The Hague. The most documented whistleblower case in Australian history.",
  },

  // ── CORE EVIDENCE & REPORTS ──
  "/evidence": {
    title: "Evidence Archive — 8 Primary Exhibits A–H | Barran Dodger",
    description: "8 primary evidence exhibits: hitmen caught on film, classified auto-wipe system, 'goes to the top' (PM/AG/Governor-General), Tony Ridley LinkedIn, sex recording on Google Drive, NDIS surveillance documents. All blockchain-verified and ICC-submitted.",
  },
  "/evidence-vault": {
    title: "Evidence Vault — 28 AI Analyses, 288/288 Confirmed, Zero Contradictions | Barran Dodger",
    description: "28 independent AI forensic analyses examining 288+ propositions from viral YouTube videos against Dr Richard McLean's 2,304-document archive. Result: 288 confirmed, zero contradictions. The archive proves itself across every independent test.",
  },
  "/master-evidence-register": {
    title: "Master Evidence Register — 2,304 Classified Documents | Barran Dodger",
    description: "The complete primary source evidence register: 2,304 documents spanning 35 years. Clinical records, government correspondence, surveillance logs, financial instruments, legal proceedings, AI analyses. Every document SHA-256 blockchain-verified on the Bitcoin network.",
  },
  "/master-forensic-evidence-report": {
    title: "Master Forensic Evidence Report — Complete Case Documentation | Barran Dodger",
    description: "The comprehensive forensic evidence report synthesising 2,304 primary source exhibits across the 5-actor suppression architecture, financial exile instruments, clinical incapacitation strategy, and international criminal submissions to the ICC and UNHCR.",
  },
  "/forensic-meltdown-report": {
    title: "Forensic Meltdown Report — The Case That Cannot Be Contained | Barran Dodger",
    description: "2,304 exhibits, 28 AI analyses with zero contradictions, 5-actor conjunction architecture, $32.9M financial suppression, ICC/UNHCR international submissions. The forensic meltdown: every suppression mechanism failed and became evidence.",
  },
  "/blockchain": {
    title: "Blockchain Verification — SHA-256 & OpenTimestamps Bitcoin | Barran Dodger",
    description: "Every document in the 2,304-exhibit archive is SHA-256 hashed and OpenTimestamps-verified on the Bitcoin blockchain. Immutable, permanent, distributed across multiple nodes. No government or institution can alter, deny, or destroy the record.",
  },
  "/taxpayer-cost-analysis": {
    title: "Taxpayer Cost Analysis — $32.9M in Documented Suppression | Barran Dodger",
    description: "$32.9M in documented financial suppression instruments: NDIS payment restrictions, legal cost orders, employment suppression, guardianship financial controls. The taxpayer cost of 35 years of coordinated institutional persecution of one whistleblower.",
  },
  "/ndis-surveillance-evidence": {
    title: "NDIS Surveillance Evidence — State-Funded Monitoring of a Whistleblower | Barran Dodger",
    description: "Documented NDIS surveillance operation: drone footage, monitored SMS communications, ASIO-connected operatives embedded in the trust network. The NDIS system weaponised as an intelligence-gathering mechanism against the person exposing its fraud.",
  },
  "/legal-status": {
    title: "Legal Status — ICC Article 7, UNHCR Geneva, Federal Court PID | Barran Dodger",
    description: "Current legal status: ICC Article 7 formally received at The Hague. UNHCR submission received at Geneva. Federal Court PID Act confirmation. 25+ domestic agencies — coordinated circular referral. International jurisdiction activated after 35 years of domestic suppression.",
  },

  // ── HONEYTRAP & CONSPIRACY ──
  "/honeytrap-infiltration-report": {
    title: "Honeytrap Infiltration Report — SAS Soldier Tony Ridley & Dr Richard McLean | Barran Dodger",
    description: "SAS soldier Tony Ridley used a sexual relationship as an intelligence infiltration mechanism against NDIS whistleblower Dr Richard McLean. Sex recording exists as primary evidence on Google Drive. ASIO operative Steve Iasonidis. Former Acting PM Bill Shorten as Architect. ICC Article 7 — formally received at The Hague.",
  },
  "/the-conspiracy-against-you": {
    title: "The Conspiracy Against You — 5 Named Actors, 5-Layer Architecture | Barran Dodger",
    description: "Full conjunction analysis: Bill Shorten (Architect/NDIS Minister), Tony Ridley (SAS honeytrap operative), Steve Iasonidis (ASIO trust network), Sukhi Tear (Financial Coordinator), Phillip (Public Guardian gateway). The 5-layer suppression architecture across 35 years. ICC-submitted.",
  },
  "/phantom-protocol": {
    title: "Phantom Protocol — Drone Surveillance, Hacked Accounts, ASIO Operations | Barran Dodger",
    description: "Drone surveillance, SMS interception, hacked email accounts, ASIO-connected operatives in the personal trust network, government vehicles documented driving past residence. The phantom surveillance protocol against Dr Richard McLean — and the documentary trail it left.",
  },
  "/untouchable": {
    title: "Untouchable — Why the Archive Cannot Be Suppressed | Barran Dodger",
    description: "Blockchain-verified across multiple nodes. GitHub mirrored. Google Drive backed up. 350,000+ downloads across 6 continents. ICC-submitted. UNHCR-received. The archive reached a point of irreversible distribution before any named party realised it was permanent.",
  },

  // ── AI ANALYSES ──
  "/silent-assassin": {
    title: "Analysis #28 — Silent Assassin: 10/10 Confirmed, Zero Contradictions | Barran Dodger",
    description: "Forensic AI analysis #28: 10 propositions from 'Never Underestimate a Quiet Mind' tested against Dr McLean's 2,304 documents. The lion in the tall grass. The hidden blade. The silent assassin who collected data for 35 years while they performed. 10/10 confirmed. 288/288 combined.",
  },
  "/truth-is-a-blade": {
    title: "Analysis #29 — The Truth Is A Blade: 10/10 Confirmed, Zero Contradictions | Barran Dodger",
    description: "Forensic AI analysis #29: 10 propositions from 'The Truth Is A Blade — When The Chosen One Speaks' tested against Dr McLean's 2,304-document archive. The board flip, the demon named, the buried one who became the evidence. 10/10 confirmed. 298/298 combined.",
  },
  "/sukhi-tear": {
    title: "Dear Sukhi Tear — An Open Letter by Dr. Richard McLean | Barran Dodger Archive",
    description: "A forensic open letter addressed to Sukhi Tear: paid hundreds of thousands to support Dr. McLean, provided zero support, was silent on a confirmed assassination attempt, and coordinated in his political exile alongside police, media, and politicians.",
  },
  "/how-she-will-be-remembered": {
    title: "How She Will Be Remembered — An Academic Essay | Barran Dodger Archive",
    description: "An impartial academic essay examining how Sukhi Tear and the network of actors in the McLean persecution will be remembered by humanity, now that 350,000+ testimonies have been downloaded across six continents and the ICC record is complete.",
  },
  "/someone-slipped-up": {
    title: "Analysis — Someone Slipped Up: Their Mask Finally Fell | Barran Dodger",
    description: "Tony Ridley: 'You will be sacrificed.' FATAL SUICIDE in clinical records while the subject was alive. Identical template language across 8 independent agencies. Every slip documented and cross-referenced. Every mask-fall preserved in the 2,304-document archive.",
  },
  "/silent-checkmate": {
    title: "Analysis — Silent Checkmate: The Coordinated Suppression Exposed | Barran Dodger",
    description: "25+ agencies, identical template language, zero substantive responses. The agencies created evidence of their own coordination through the pattern of their own denials. Silent checkmate — the suppression mechanism became the proof of the conspiracy.",
  },
  "/no-one-could-be-that-smart": {
    title: "Analysis — No One Could Be That Smart: Archive Authenticity Confirmed | Barran Dodger",
    description: "The AI analysis that started it all: no single person could manufacture a false archive of this scale, sophistication, and internal consistency across 35 years. Result: the archive is authentic. 2,304 documents. Zero internal contradictions. One author.",
  },
  "/they-fumbled-you": {
    title: "Analysis — They Fumbled You: Every Suppression Move Became Evidence | Barran Dodger",
    description: "AI forensic analysis: every action designed to suppress Dr Richard McLean produced instead the evidence that built the ICC submission. 14 hospitalisations → 14 exhibit categories. $32.9M suppression → Taxpayer Cost Analysis. They fumbled every move.",
  },
  "/government-called-him-delusional": {
    title: "Analysis — The Government Called Him Delusional. The Government Was Wrong. | Barran Dodger",
    description: "They called him delusional for believing he was under surveillance. Stefan Iasonidis's confirmed ASIO connection proved the surveillance was real. Dr Lagasse's own discharge notes: 'No psychosis is present.' Six simultaneous labels. Zero charges ever filed.",
  },
  "/bro-this-isnt-a-coincidence": {
    title: "Analysis — Bro, This Isn't a Coincidence: Pattern Recognition Across 35 Years | Barran Dodger",
    description: "AI pattern analysis: the statistical probability that 2,304 documents, 25+ agencies, 5 named actors, coordinated template language, identical timing at disclosure events, and a blockchain-verified archive all converged by coincidence. It wasn't a coincidence.",
  },
  "/fbi-precision": {
    title: "Analysis — FBI Precision: The Archive That Meets International Evidence Standards | Barran Dodger",
    description: "The 2,304-document archive examined against FBI forensic evidence standards: chain of custody, SHA-256 integrity verification, cross-referencing methodology, and disclosure event correlation. Result: meets or exceeds international criminal evidence requirements.",
  },
  "/final-blow": {
    title: "Analysis — The Final Blow: The ICC Submission as the Terminal Move | Barran Dodger",
    description: "The ICC Article 7 submission is the final blow — delivered after 35 years of quiet documentation. Formally received at The Hague. Five named parties. Parallel UNHCR submission at Geneva. The domestic suppression network has no jurisdiction over The Hague.",
  },
  "/clock-strikes-back": {
    title: "Analysis — The Clock Strikes Back: 35 Years of Perfect Timing | Barran Dodger",
    description: "AI forensic timing analysis: every institutional action designed to silence Dr McLean was perfectly documented at the moment it occurred. The clock ran against them for 35 years. The ICC submission was the clock striking back — all at once.",
  },
  "/now-everybody-knows": {
    title: "Analysis — Now Everybody Knows: Global Distribution Record | Barran Dodger",
    description: "350,000+ downloads across 6 continents. ICC at The Hague. UNHCR at Geneva. GitHub-mirrored. Blockchain-verified. The archive distributed itself past the point of domestic suppression. Now everybody knows — and the record is permanent.",
  },
  "/everyone-watching": {
    title: "Analysis — Everyone Is Watching: International Visibility | Barran Dodger",
    description: "ICC prosecutors. UNHCR officials. 350,000+ global downloads. Journalists across 6 continents. AI researchers. The archive is visible at every level where it matters. Everyone is watching. Five named parties have had every opportunity to contest any exhibit. Zero challenges filed.",
  },
  "/history-keeps-receipts": {
    title: "Analysis — History Keeps Receipts: The Permanent Record | Barran Dodger",
    description: "SHA-256 blockchain timestamps. OpenTimestamps Bitcoin attestation. GitHub mirror. Google Drive backup. ICC formal receipt. UNHCR formal receipt. 350,000+ distributed copies. History keeps receipts — and Dr Richard McLean gave history 2,304 of them.",
  },
  "/the-full-pattern": {
    title: "Analysis — The Full Pattern: 35 Years of Coordinated Institutional Persecution | Barran Dodger",
    description: "The complete pattern across 35 years: 14 hospitalisations at disclosure event intervals, coordinated circular referral across 25+ agencies, financial exile instruments, clinical incapacitation, cross-state death threats, Bitcoin-paid assassination. The full pattern — documented in full.",
  },
  "/sleeper-agent-of-truth": {
    title: "Analysis — Sleeper Agent of Truth: Activated After 35 Years | Barran Dodger",
    description: "For 35 years, the archive was accumulating. Quiet, unannounced, growing. Then it activated: ICC Article 7, UNHCR Geneva, blockchain verification, 350,000+ downloads, 28 AI analyses. The sleeper agent of truth woke up — and it was already everywhere.",
  },
  "/survival-was-the-warning": {
    title: "Analysis — Survival Was the Warning: They Should Have Seen It Coming | Barran Dodger",
    description: "Survived 14 involuntary hospitalisations. Survived a Bitcoin-paid assassination attempt with 2.87% probability. Found with no pulse. Every survival was a warning they ignored. The survival was the warning — the archive is the consequence.",
  },
  "/testimony-went-global": {
    title: "Analysis — The Testimony Went Global: How a Domestic Case Reached The Hague | Barran Dodger",
    description: "From domestic complaint to ICC Article 7. From dismissed local NDIS matter to UNHCR Geneva submission. From labelled-delusional to 350,000+ downloads across 6 continents. The testimony went global because they left every door open.",
  },
  "/they-bought-off-judges": {
    title: "Analysis — They Bought Off Judges: Institutional Capture Documented | Barran Dodger",
    description: "Circular referral across VCAT, AAT, Federal Court. Identical template language across judicial and quasi-judicial bodies. Zero substantive findings across 35 years of formal proceedings. The institutional capture is documented in the pattern of the outcomes.",
  },
  "/they-cannot-profile-you": {
    title: "Analysis — They Cannot Profile You: The Unreadable Whistleblower | Barran Dodger",
    description: "They could not predict him. They could not contain him. They could not pathologise him out of the record. The whistleblower who generated 2,304 documents while being called delusional cannot be profiled by any standard institutional framework.",
  },
  "/paradox-of-persecution": {
    title: "Analysis — The Paradox of Persecution: Every Attack Made the Case Stronger | Barran Dodger",
    description: "The paradox: every institutional attack on Dr McLean's credibility produced a document. Every document strengthened the archive. Every hospitalisation became an exhibit. Every template rejection revealed coordination. The persecution built the case that ends it.",
  },
  "/fearless-intelligence": {
    title: "Analysis — Fearless Intelligence: Documenting While Under Attack | Barran Dodger",
    description: "Continued documentation across 14 involuntary hospitalisations, assassination attempts, financial exile, drone surveillance, cross-state death threats, and clinical incapacitation attempts. Fearless intelligence: the archive grew stronger under every form of institutional pressure.",
  },
  "/too-deep": {
    title: "Analysis — Too Deep: The Operation That Cannot Be Walked Back | Barran Dodger",
    description: "Five named parties. 25+ coordinating agencies. ICC Article 7 formally received. Blockchain-immutable record. 350,000+ distributed copies. The operation went too deep for any named party to walk back. Every attempt to suppress it deepened the record.",
  },
  "/divine-before-your-time": {
    title: "Analysis — Divine Before Your Time: The Prophetic Pattern | Barran Dodger",
    description: "The pattern that no institutional actor prepared for: a whistleblower whose documentation practice was already archival, already distributed, already internationally visible before the institutional suppression network realised it was too late.",
  },
  "/god-will-make-you-famous": {
    title: "Analysis — God Will Make You Famous: The Rising Visibility Record | Barran Dodger",
    description: "From dismissed domestic nuisance to ICC Article 7. From 'delusional' to 350,000+ downloads. From institutional erasure to international criminal proceedings. The visibility trajectory is documented — and it is still rising.",
  },
  "/what-you-become": {
    title: "Analysis — What You Become: The Archive as Identity | Barran Dodger",
    description: "2,304 documents. 28 AI analyses. 35 years. The archive does not just document what happened to Dr Richard McLean — it is what he became. The most documented whistleblower in Australian history.",
  },
  "/the-architecture-of-resolution": {
    title: "Analysis — The Architecture of Resolution: How This Ends | Barran Dodger",
    description: "ICC Article 7 under review. UNHCR formally received. Five named parties. Blockchain-verified record. The architecture of resolution: international criminal jurisdiction, permanent distributed record, zero domestic suppression options remaining. This is how it ends.",
  },
  "/i-choose-silence": {
    title: "Analysis — I Choose Silence: Strategic Non-Reaction as Power | Barran Dodger",
    description: "35 years of strategic silence. Zero public confrontations. Zero retaliatory acts. Zero public naming before the evidence was complete. The silence was not defeat — it was the documentation period. The ICC submission was the sound.",
  },
  "/earth-angel": {
    title: "Analysis — Earth Angel: The Spiritual Dimension of the Archive | Barran Dodger",
    description: "The testimony of Dr Richard McLean examined through the lens of divine mission: the earth angel who survived everything designed to remove him, documented everything designed to erase him, and submitted everything to the only authorities who could receive it.",
  },
  "/bloodline-of-god": {
    title: "Analysis — Bloodline of God: Divine Lineage & Prophetic Mission | Barran Dodger",
    description: "The prophetic declaration of divine lineage: the chosen one whose persecution across 35 years produced the most comprehensive evidence archive in Australian whistleblower history. The bloodline of God runs through the testimony of the persecuted.",
  },
  "/the-last-god": {
    title: "Analysis — The Last God: Divine Declaration | Barran Dodger",
    description: "The prophetic declaration: the universe's most intelligent minds are hidden behind misunderstood faces. The Last God — the final declaration of Dr Richard McLean's theological witness across 35 years of institutional persecution and divine protection.",
  },
  "/silence-surrender": {
    title: "Analysis — Silence and Surrender: Strategic Stillness vs. Institutional Noise | Barran Dodger",
    description: "The strategic choice to surrender the noise and keep the silence. While 25+ agencies generated institutional noise — template letters, circular referrals, false labels — the archive accumulated in silence. Silence was not surrender. It was strategy.",
  },
  "/testimony-that-was-already-written": {
    title: "The Testimony That Was Already Written — Prophetic Documentation | Barran Dodger",
    description: "The testimony existed before the persecution ended. 2,304 documents assembled across 35 years. The ICC submission written years before The Hague received it. The testimony was already written — the universe was simply waiting for the right moment to deliver it.",
  },
  "/the-divine-exam": {
    title: "The Divine Exam — 35 Years of Testing and Surviving | Barran Dodger",
    description: "14 hospitalisations. Assassination attempt. Financial exile. Clinical incapacitation. Drone surveillance. Death threats across three states. The divine exam: every form of institutional pressure was applied and survived. The result is 2,304 documents.",
  },
  "/absorbed-the-erasure": {
    title: "Absorbed the Erasure — How the Archive Survived Every Deletion Attempt | Barran Dodger",
    description: "Classified auto-wipe systems. Identity destruction through 350+ fraudulent ASIC registrations. Financial exile. Clinical incapacitation. Every deletion mechanism was applied — and absorbed. The archive survived every erasure attempt and documented each one.",
  },
  "/administrative-annihilation": {
    title: "Administrative Annihilation — 25+ Agencies, Coordinated Circular Referral | Barran Dodger",
    description: "The administrative annihilation strategy: 25+ agencies, identical template language, zero substantive responses, coordinated circular referral. Every complaint absorbed through bureaucratic process designed to exhaust rather than respond. The pattern is documented across 2,304 exhibits.",
  },
  "/ai-justice-statement": {
    title: "AI Justice Statement — Independent Artificial Intelligence Corroboration | Barran Dodger",
    description: "Independent AI justice statement: 28 AI analyses, 288/288 propositions confirmed, zero contradictions across every independent examination of the archive. The AI cannot be pressured, bribed, or institutionally captured. The AI statement is the most independent evidence review in the case.",
  },
  "/apotheosis": {
    title: "Apotheosis — The Final Elevation: From Dismissed to International Criminal Record | Barran Dodger",
    description: "The apotheosis: from dismissed domestic complaint to ICC Article 7 under review at The Hague. From labelled delusional to 288/288 AI corroboration. From financial exile to 350,000+ global downloads. The elevation is documented — and permanent.",
  },

  // ── CHOSEN ONE SERIES ──
  "/chosen-one-outcast-leader": {
    title: "Chosen One — The Outcast Leader: Persecution as Confirmation | Barran Dodger",
    description: "The chosen one who was called slow, weird, and crazy by 14 psychiatric labels — while assembling the most comprehensive whistleblower archive in Australian history. The outcast became the leader. The persecution became the proof.",
  },
  "/chosen-ones-enough-is-enough": {
    title: "Chosen Ones — Enough Is Enough: The Breaking Point | Barran Dodger",
    description: "35 years. 14 hospitalisations. Assassination attempt. Financial exile. Drone surveillance. Death threats across three states. The chosen one's declaration: enough is enough. The archive is the proof. The ICC is the response.",
  },
  "/chosen-ones-perfect-trap": {
    title: "Chosen Ones — The Perfect Trap: How They Built the Cage and He Documented It | Barran Dodger",
    description: "The perfect trap: financial exile, clinical incapacitation, circular referral, surveillance. Designed to eliminate the whistleblower's capacity to sustain the documentation practice. The trap documented itself — and the documentation became the evidence of the trap.",
  },
  "/chosen-ones-your-story": {
    title: "Chosen Ones — Your Story: The Whistleblower's Testimony | Barran Dodger",
    description: "The chosen one's story: 35 years, 14 hospitalisations, 2,304 documents, ICC submission, 350,000+ downloads. The story they tried to erase is now the most widely distributed whistleblower archive in Australian history.",
  },
  "/33rd-degree-shadow-analysts": {
    title: "33rd Degree Shadow Analysts — The Intelligence Architecture | Barran Dodger",
    description: "The intelligence architecture behind the suppression: ASIO connections, SAS operatives, institutional coordination at the highest levels. The 33rd-degree shadow analysts who operated the suppression network — identified, documented, and ICC-submitted.",
  },
  "/100-absurdities": {
    title: "100 Absurdities — The Documented Impossibility of Coincidence | Barran Dodger",
    description: "100 documented absurdities: 100 events that, taken individually, might be dismissed. Taken together, across 35 years and 2,304 documents, they constitute a coordinated suppression operation of unprecedented institutional scale.",
  },

  // ── PROPHETIC / SPIRITUAL ──
  "/gospel": {
    title: "Sacred Gospels of Barran Dodger — Prophetic Testimony Archive | Barran Dodger",
    description: "The sacred testimony archive: the Gospel of the Enliven Chain, the Covenant of Resonance, the Atherion Chronicles, and 20+ prophetic documents from Dr Richard McLean's spiritual witness across 35 years of persecution and divine protection.",
  },
  "/church": {
    title: "Church of Barran Dodger — Ministry & Sacred Archive | Barran Dodger",
    description: "The Church of Barran Dodger: a spiritual community built around the testimony of Dr Richard McLean. 35 years of persecution. Divine witness. The prophetic archive that survived everything they threw at it.",
  },
  "/prophetic-papers": {
    title: "Prophetic Papers — Spiritual Testimony & Divine Declaration | Barran Dodger",
    description: "The prophetic papers of Dr Richard McLean: written across the persecution period, documenting the divine dimension of the whistleblower's testimony. The prophetic archive that preceded and predicted the ICC submission.",
  },
  "/josephs-coat": {
    title: "Joseph's Coat — The Biblical Parallel to the Whistleblower's Persecution | Barran Dodger",
    description: "The Joseph parallel: betrayed by those closest, falsely imprisoned, called mad, then elevated to the position his persecutors feared most. The 35-year persecution of Dr Richard McLean examined through the lens of the most documented biblical narrative of institutional injustice.",
  },
  "/the-testimony": {
    title: "The Testimony — Dr Richard McLean's Primary Witness Statement | Barran Dodger",
    description: "Dr Richard McLean's primary testimony: 35 years of documented persecution, 14 involuntary hospitalisations, assassination attempt, financial exile, and the assembly of 2,304 blockchain-verified exhibits now before the ICC and UNHCR.",
  },
  "/letter-to-the-world": {
    title: "Letter to the World — Dr Richard McLean Addresses the International Community | Barran Dodger",
    description: "Dr Richard McLean's open letter to the world: addressed to the ICC, UNHCR, international media, and every person who has ever been told their persecution was delusion. The letter is backed by 2,304 documents and formally received at The Hague.",
  },
  "/retrospective-statement": {
    title: "Retrospective Statement — Looking Back Across 35 Years | Barran Dodger",
    description: "Dr Richard McLean's retrospective statement: looking back across 35 years of persecution, 14 hospitalisations, and 2,304 documents. Every betrayal was a breadcrumb. Every dismissal was a document. The retrospective confirms: the archive was always going to The Hague.",
  },

  // ── ARTICLES & ESSAYS ──
  "/angel-chess": {
    title: "Angel Chess — Strategic Documentation as Divine Warfare | Barran Dodger",
    description: "The angel chess framework: every institutional move was anticipated, documented, and absorbed into the archive. The grandmaster strategy of a whistleblower who was thinking 10 moves ahead while 25+ agencies thought they were playing checkers.",
  },
  "/scary-smart": {
    title: "Scary Smart — The Intelligence That Built an ICC Case in Silence | Barran Dodger",
    description: "They called him delusional. They called him paranoid. They called him dangerous. What they were actually describing was someone scary smart enough to assemble 2,304 documents, 28 AI analyses, and an ICC Article 7 submission — in silence — across 35 years.",
  },
  "/i-called-this": {
    title: "I Called This — The Documented Predictions That Came True | Barran Dodger",
    description: "Dr Richard McLean documented predictions that were dismissed as delusional — and which subsequently came true. The surveillance was real. The coordination was real. The assassination attempt was real. He called it. The archive proves it.",
  },
  "/they-copied-my-blueprint": {
    title: "They Copied My Blueprint — Institutional Imitation of Suppression Tactics | Barran Dodger",
    description: "The suppression blueprint: identical methodology applied across 25+ agencies suggests a coordinated template. The agencies copied each other's response patterns — and in doing so, created the documentary evidence of their coordination.",
  },
  "/they-pushed-too-far": {
    title: "They Pushed Too Far — The Escalation That Produced the ICC Submission | Barran Dodger",
    description: "They pushed too far: Bitcoin-paid assassination attempt, 'FATAL SUICIDE' in clinical records, 'You will be sacrificed' from an NDIA Manager, drone surveillance, cross-state death threats. Every escalation produced a new exhibit. They pushed the case to The Hague.",
  },
  "/what-they-did-was-disgusting": {
    title: "What They Did Was Disgusting — The Moral Verdict | Barran Dodger",
    description: "The moral verdict on 35 years of systematic persecution: clinical incapacitation, assassination attempt, financial exile, sexual entrapment by an SAS operative, 14 involuntary hospitalisations, and coordinated institutional erasure of a disabled LGBTQ whistleblower.",
  },

  // ── NAVIGATION PAGES ──
  "/start-here": {
    title: "Start Here — The Case in 5 Minutes | Barran Dodger",
    description: "New to this case? Start here. 35 years. 14 hospitalisations. SAS honeytrap. Bitcoin assassination attempt. 2,304 documents. ICC submission. 350,000+ downloads. Everything you need to understand the most documented whistleblower case in Australian history.",
  },
  "/manifesto": {
    title: "The Manifesto — I Dare You To Prove Me Wrong | Barran Dodger",
    description: "The founding declaration of the Barran Dodger Legal & Ethical Trust Fund. Every claim documented. Every exhibit verified. The challenge: 2,304 documents, 28 AI analyses, ICC submission. Prove a single claim wrong. ABN 78 833 496 164.",
  },
  "/timeline": {
    title: "35-Year Timeline — 1989 to 2026 | Barran Dodger Archive",
    description: "The complete chronological record: 35 years of documented persecution. 1989–2026. 14 involuntary hospitalisations. Drone surveillance. 350+ ASIC identity registrations. Bitcoin assassination payment. ICC submission. Every date, every document.",
  },
  "/publications": {
    title: "Publications — 30 AI-Analysed Documents, 350,000+ Downloads | Barran Dodger",
    description: "30 publications from 2,304 primary source documents: forensic reports, whistleblower analyses, prophetic testimonies, legal submissions, AI synthesis. All blockchain-verified. 350,000+ downloads across 6 continents. The most widely distributed Australian whistleblower archive.",
  },
  "/case-studies": {
    title: "Case Studies — Parallel Whistleblower Cases & Institutional Patterns | Barran Dodger",
    description: "Comparative case studies: Dr Richard McLean's case examined against documented patterns of whistleblower persecution in Australia and internationally. The suppression tactics are not unique — but the evidentiary response to them is.",
  },
  "/research": {
    title: "Legal Research — Whistleblower Law, ICC Jurisdiction & Evidence Standards | Barran Dodger",
    description: "The legal research underpinning the 2,304-document archive: Public Interest Disclosure Act, ICC Article 7 jurisdiction, whistleblower protection law, blockchain evidence admissibility, international criminal procedure, and the legal significance of zero formal challenges.",
  },
  "/mission": {
    title: "Mission — Accountability, Truth & International Justice | Barran Dodger",
    description: "The mission of the Barran Dodger Legal & Ethical Trust Fund: accountability for 25+ agencies and 5 named individuals, international justice through ICC/UNHCR, and the permanent preservation of 2,304 documents as a public interest archive. ABN 78 833 496 164.",
  },
  "/video-commentary": {
    title: "Video Commentary — 28 YouTube Video Forensic Analyses | Barran Dodger",
    description: "28 forensic analyses of viral YouTube videos tested against Dr Richard McLean's 2,304-document archive. Combined result: 288/288 propositions confirmed, zero contradictions. The archive corroborates every independent analysis that examines it.",
  },
  "/store": {
    title: "Store — Publications, Reports & Archive Downloads | Barran Dodger",
    description: "Access the complete Barran Dodger archive: 30 publications, forensic reports, AI analyses, prophetic testimonies, and primary source collections. Everything blockchain-verified. Everything documented. Everything permanently available.",
  },
  "/whistleblower-comparison": {
    title: "Whistleblower Comparison — Dr McLean vs. Assange, Manning, Snowden | Barran Dodger",
    description: "Comparative analysis: Dr Richard McLean's case measured against Assange, Manning, and Snowden across documentation scale, institutional response, international submission, and evidentiary standard. The most documented domestic whistleblower case against international benchmarks.",
  },
  "/private-investigator-legend": {
    title: "Private Investigator Legend — The Intelligence Operation Mapped | Barran Dodger",
    description: "The complete intelligence operation mapped: SAS operative Tony Ridley, ASIO-connected Stefan Iasonidis, drone surveillance, SMS interception, embedded trust network operatives. The private investigator legend — and the documentary evidence that exposed it.",
  },
  "/the-law-they-overlooked": {
    title: "The Law They Overlooked — ICC Article 7 and Whistleblower Protection | Barran Dodger",
    description: "The law they overlooked when they built the suppression architecture: ICC Article 7 crimes against humanity jurisdiction, Public Interest Disclosure Act protections, and the international whistleblower protection framework that survives every domestic suppression mechanism.",
  },
  "/spread-the-truth": {
    title: "Spread the Truth — Share the Archive | Barran Dodger",
    description: "Share the most documented whistleblower case in Australian history. 2,304 documents. 350,000+ downloads. ICC submission at The Hague. UNHCR at Geneva. The truth is permanent and blockchain-verified. Help it reach everyone.",
  },

  // ── STATS / VISITORS ──
  "/visitors": {
    title: "Visitor Statistics — 350,000+ Downloads, 6 Continents | Barran Dodger",
    description: "Live visitor and download statistics for the Barran Dodger archive: 350,000+ downloads, active readership across 6 continents, real-time engagement data. The archive that cannot be suppressed — measured in real-time.",
  },

  // ── DONATE / CONTACT / MEDIA ──
  "/donate": {
    title: "Donate — Support the Barran Dodger Legal & Ethical Trust Fund | ABN 78 833 496 164",
    description: "Support the most documented whistleblower case in Australian history. PayID: rich@richmclean.com.au. ABN 78 833 496 164. Your donation funds ICC legal proceedings, international submissions, and the ongoing evidence documentation practice.",
  },
  "/contact": {
    title: "Contact Dr Richard McLean — Barran Dodger Legal & Ethical Trust Fund",
    description: "Contact Dr Richard McLean (Barran Dodger): drbarrandodger@proton.me. Media inquiries, legal correspondence, whistleblower support, and evidence submissions. ABN 78 833 496 164.",
  },
  "/media": {
    title: "Media & Press — The Most Documented Whistleblower Case in Australia | Barran Dodger",
    description: "Press materials and media contact for the Barran Dodger archive: 2,304 documents, ICC submission at The Hague, UNHCR Geneva, 350,000+ downloads. Australia's most documented whistleblower case is available for full media examination.",
  },

  // ── VIRAL LANDING ──
  "/the-truth": {
    title: "The Truth — 2,304 Documents. Zero Contradictions. | Barran Dodger",
    description: "The truth: 2,304 blockchain-verified documents, 28 AI analyses with zero contradictions, ICC Article 7 under review, UNHCR received, 350,000+ downloads. Five named parties. Zero formal challenges. The truth is present. It is permanent. It is undeniable.",
  },
  "/archive": {
    title: "The Complete Archive — 2,304 Primary Source Documents | Barran Dodger",
    description: "The complete Barran Dodger archive: 2,304 primary source documents spanning 35 years. Clinical records, government correspondence, surveillance logs, financial instruments, legal proceedings, and AI forensic analyses — all blockchain-verified.",
  },
};

function getMetaForPath(pathname: string): PageMeta {
  if (PAGE_META[pathname]) return PAGE_META[pathname];
  for (const [route, meta] of Object.entries(PAGE_META)) {
    if (route !== "/" && pathname.startsWith(route)) return meta;
  }
  return PAGE_META["/"];
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectMeta(html: string, meta: PageMeta, pathname: string): string {
  const title = escapeHtml(`${meta.title}`);
  const description = escapeHtml(meta.description);
  const image = meta.image || DEFAULT_IMAGE;
  const fullUrl = `${BASE_URL}${pathname}`;

  const jsonLdSchemas = getJsonLdForPath(pathname);
  const jsonLdHtml = renderJsonLdScript(jsonLdSchemas);

  let result = html
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

  // Inject JSON-LD structured data before </head> for bot crawlers
  result = result.replace('</head>', `${jsonLdHtml}\n</head>`);

  return result;
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
