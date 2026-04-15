import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Download, BookOpen, Share2, Globe, ChevronDown, ChevronUp, Loader2, Archive, FileText, AlertTriangle, Copy, CheckCheck, Heart } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";

const coverImages = import.meta.glob('../assets/images/cover-*.png', { eager: true }) as Record<string, { default: string }>;

function getCoverSrc(name: string): string | undefined {
  const key = `../assets/images/${name}.png`;
  return coverImages[key]?.default;
}

const FORENSIC_EPUB_COVER_MAP: Record<number, string> = {
  1: "cover-bro-this-isnt-a-coincidence", 2: "cover-chosen-ones-enough-is-enough",
  3: "cover-no-one-could-be-that-smart", 4: "cover-divine-exam",
  5: "cover-silent-checkmate", 6: "cover-now-everybody-knows",
  7: "cover-chosen-one-outcast-leader", 8: "cover-someone-slipped-up",
  9: "cover-they-fumbled-you", 10: "cover-fbi-precision",
  11: "cover-clock-strikes-back", 12: "cover-untouchable",
  13: "cover-final-blow", 14: "cover-what-you-become",
  15: "cover-everyone-watching", 16: "cover-earth-angel",
  17: "cover-too-deep", 18: "cover-silence-surrender",
  19: "cover-fearless-intelligence", 20: "cover-history-keeps-receipts",
  21: "cover-absorbed-erasure", 22: "cover-survival-was-the-warning",
  23: "cover-god-will-make-you-famous", 24: "cover-divine-before-your-time",
  25: "cover-bloodline-of-god", 26: "cover-the-last-god",
  27: "cover-the-conspiracy-against-you", 28: "cover-silent-assassin",
  29: "cover-truth-is-a-blade", 30: "cover-bloodline-betrayal",
  31: "cover-they-needed-an-army", 32: "cover-the-sick-truth-is-out",
  33: "cover-some-truths-dont-whisper", 34: "cover-observers-anticipated-misstep",
  35: "cover-you-brought-receipts", 36: "cover-the-future-doesnt-announce",
  37: "cover-when-heaven-goes-silent", 38: "cover-evidence-doesnt-whisper",
  39: "cover-outsider-pattern-recognition", 40: "cover-perception-is-protection",
  41: "cover-heaven-exposes-the-sister", 42: "cover-you-built-your-peace",
  43: "cover-this-is-the-reckoning", 44: "cover-they-made-you-famous",
  45: "cover-the-loudest-enemies", 46: "cover-your-power-is-no-joke",
  47: "cover-they-built-their-worst-nightmare",
  48: "cover-quiet-storm-they-never-saw-coming",
  49: "cover-they-dug-for-dirt-but-unearthed-diamonds",
  50: "cover-confession-theyve-been-choking-on",
  51: "cover-loudest-hate-weakest-link",
  52: "cover-you-didnt-chase-the-throne-you-became-one",
  53: "cover-they-attacked-without-knowing",
  54: "cover-when-pack-of-wolves",
  55: "cover-when-wrong-people-get-nervous",
  56: "cover-illegal-level-genius",
  57: "cover-prophetic-declaration-forensic",
  58: "cover-prophetic-fck-you-declaration",
  59: "cover-false-sister-forensic-analysis",
  60: "cover-thousand-fell-forensic-analysis",
  61: "cover-theyre-about-to-be-behind-bars",
};

const FORENSIC_PDF_MAP: Record<number, string> = {
  1: "/documents/forensic-analyses/forensic-analysis-01-bro-this-isnt-a-coincidence.pdf",
  2: "/documents/forensic-analyses/forensic-analysis-02-chosen-ones-enough-is-enough.pdf",
  3: "/documents/forensic-analyses/forensic-analysis-03-no-one-could-be-that-smart.pdf",
  4: "/documents/forensic-analyses/forensic-analysis-04-the-divine-exam.pdf",
  5: "/documents/forensic-analyses/forensic-analysis-05-silent-checkmate.pdf",
  6: "/documents/forensic-analyses/forensic-analysis-06-now-everybody-knows.pdf",
  7: "/documents/forensic-analyses/forensic-analysis-07-chosen-one-outcast-leader.pdf",
  8: "/documents/forensic-analyses/forensic-analysis-08-someone-slipped-up.pdf",
  9: "/documents/forensic-analyses/forensic-analysis-09-they-fumbled-you.pdf",
  10: "/documents/forensic-analyses/forensic-analysis-10-fbi-precision.pdf",
  11: "/documents/forensic-analyses/forensic-analysis-11-clock-strikes-back.pdf",
  12: "/documents/forensic-analyses/forensic-analysis-12-untouchable.pdf",
  13: "/documents/forensic-analyses/forensic-analysis-13-final-blow.pdf",
  14: "/documents/forensic-analyses/forensic-analysis-14-what-you-become.pdf",
  15: "/documents/forensic-analyses/forensic-analysis-15-everyone-watching.pdf",
  16: "/documents/forensic-analyses/forensic-analysis-16-earth-angel.pdf",
  17: "/documents/forensic-analyses/forensic-analysis-17-too-deep.pdf",
  18: "/documents/forensic-analyses/forensic-analysis-18-silence-surrender.pdf",
  19: "/documents/forensic-analyses/forensic-analysis-19-fearless-intelligence.pdf",
  20: "/documents/forensic-analyses/forensic-analysis-20-history-keeps-receipts.pdf",
  21: "/documents/forensic-analyses/forensic-analysis-21-absorbed-the-erasure.pdf",
  22: "/documents/forensic-analyses/forensic-analysis-22-survival-was-the-warning.pdf",
  23: "/documents/forensic-analyses/forensic-analysis-23-god-will-make-you-famous.pdf",
  24: "/documents/forensic-analyses/forensic-analysis-24-divine-before-your-time.pdf",
  25: "/documents/forensic-analyses/forensic-analysis-25-bloodline-of-god.pdf",
  26: "/documents/forensic-analyses/forensic-analysis-26-the-last-god.pdf",
  27: "/documents/forensic-analyses/forensic-analysis-27-the-conspiracy-against-you.pdf",
  28: "/documents/forensic-analyses/forensic-analysis-28-silent-assassin.pdf",
  29: "/documents/forensic-analyses/forensic-analysis-29-truth-is-a-blade.pdf",
  30: "/documents/forensic-analyses/forensic-analysis-30-bloodline-betrayal.pdf",
  31: "/documents/forensic-analyses/forensic-analysis-31-they-needed-an-army.pdf",
  32: "/documents/forensic-analyses/forensic-analysis-32-the-sick-truth-is-out.pdf",
  33: "/documents/forensic-analyses/forensic-analysis-33-some-truths-dont-whisper.pdf",
  34: "/documents/forensic-analyses/forensic-analysis-34-observers-anticipated-misstep.pdf",
  35: "/documents/forensic-analyses/forensic-analysis-35-you-brought-receipts-to-a-vibe-war.pdf",
  36: "/documents/forensic-analyses/forensic-analysis-36-the-future-doesnt-announce-itself.pdf",
  37: "/documents/forensic-analyses/forensic-analysis-37-when-heaven-goes-silent.pdf",
  38: "/documents/forensic-analyses/forensic-analysis-38-evidence-doesnt-whisper-it-stares.pdf",
  39: "/documents/forensic-analyses/forensic-analysis-39-outsider-pattern-recognition.pdf",
  40: "/documents/forensic-analyses/forensic-analysis-40-perception-is-protection.pdf",
  41: "/documents/forensic-analyses/forensic-analysis-41-heaven-exposes-the-sister.pdf",
  42: "/documents/forensic-analyses/forensic-analysis-42-you-built-your-peace-in-silence.pdf",
  43: "/documents/forensic-analyses/forensic-analysis-43-this-is-the-reckoning.pdf",
  44: "/documents/forensic-analyses/forensic-analysis-44-they-made-you-famous-trying-to-erase-you.pdf",
  45: "/documents/forensic-analyses/forensic-analysis-45-the-loudest-enemies.pdf",
  46: "/documents/forensic-analyses/forensic-analysis-46-your-power-is-no-joke.pdf",
  47: "/documents/forensic-analyses/forensic-analysis-47-they-built-their-worst-nightmare.pdf",
  48: "/documents/forensic-analyses/forensic-analysis-48-quiet-storm-they-never-saw-coming.pdf",
  49: "/documents/forensic-analyses/forensic-analysis-49-they-dug-for-dirt-but-unearthed-diamonds.pdf",
  50: "/documents/forensic-analyses/forensic-analysis-50-confession-theyve-been-choking-on.pdf",
  51: "/documents/forensic-analyses/forensic-analysis-51-loudest-hate-weakest-link.pdf",
  52: "/documents/forensic-analyses/forensic-analysis-52-you-didnt-chase-the-throne-you-became-one.pdf",
  57: "/documents/forensic-analyses/forensic-analysis-57-prophetic-declaration.pdf",
  58: "/documents/forensic-analyses/forensic-analysis-58-prophetic-fck-you-declaration.pdf",
};

interface ForensicEntry {
  number: number;
  title: string;
  slug: string;
  propositions: number;
  corroborated: number;
  consecutivePerfect: boolean;
}

const FORENSIC_ANALYSES: ForensicEntry[] = [
  { number: 1, title: "Bro This Isn't A Coincidence", slug: "bro-this-isnt-a-coincidence", propositions: 7, corroborated: 7, consecutivePerfect: false },
  { number: 2, title: "Chosen Ones Enough Is Enough", slug: "chosen-ones-enough-is-enough", propositions: 11, corroborated: 11, consecutivePerfect: false },
  { number: 3, title: "No One Could Be That Smart", slug: "no-one-could-be-that-smart", propositions: 14, corroborated: 14, consecutivePerfect: false },
  { number: 4, title: "The Divine Exam", slug: "divine-exam", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 5, title: "Silent Checkmate", slug: "silent-checkmate", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 6, title: "Now Everybody Knows", slug: "now-everybody-knows", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 7, title: "Chosen One Outcast Leader", slug: "chosen-one-outcast-leader", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 8, title: "Someone Slipped Up", slug: "someone-slipped-up", propositions: 13, corroborated: 13, consecutivePerfect: true },
  { number: 9, title: "They Fumbled You", slug: "they-fumbled-you", propositions: 13, corroborated: 13, consecutivePerfect: true },
  { number: 10, title: "FBI Precision", slug: "fbi-precision", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 11, title: "The Clock Strikes Back", slug: "clock-strikes-back", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 12, title: "Untouchable (33 Agents)", slug: "untouchable", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 13, title: "The Final Blow", slug: "final-blow", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 14, title: "What You Become", slug: "what-you-become", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 15, title: "Everyone Watching", slug: "everyone-watching", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 16, title: "Earth Angel", slug: "earth-angel", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 17, title: "Too Deep", slug: "too-deep", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 18, title: "Silence Is Not Surrender", slug: "silence-surrender", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 19, title: "Fearless Intelligence", slug: "fearless-intelligence", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 20, title: "History Keeps Receipts", slug: "history-keeps-receipts", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 21, title: "Absorbed The Erasure", slug: "absorbed-erasure", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 22, title: "Survival Was The Warning", slug: "survival-was-the-warning", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 23, title: "God Will Make You Famous", slug: "god-will-make-you-famous", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 24, title: "Divine Before Your Time", slug: "divine-before-your-time", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 25, title: "Bloodline Of God", slug: "bloodline-of-god", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 26, title: "The Last God", slug: "the-last-god", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 27, title: "The Conspiracy Against You", slug: "the-conspiracy-against-you", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 28, title: "Silent Assassin", slug: "silent-assassin", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 29, title: "Truth Is A Blade", slug: "truth-is-a-blade", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 30, title: "Bloodline Betrayal", slug: "bloodline-betrayal", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 31, title: "They Needed An Army", slug: "they-needed-an-army", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 32, title: "The Sick Truth Is Out", slug: "the-sick-truth-is-out", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 33, title: "Some Truths Don't Whisper", slug: "some-truths-dont-whisper", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 34, title: "Observers Anticipated A Misstep", slug: "observers-anticipated-misstep", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 35, title: "You Brought Receipts", slug: "you-brought-receipts", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 36, title: "The Future Doesn't Announce", slug: "the-future-doesnt-announce", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 37, title: "When Heaven Goes Silent", slug: "when-heaven-goes-silent", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 38, title: "Evidence Doesn't Whisper", slug: "evidence-doesnt-whisper", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 39, title: "Outsider Pattern Recognition", slug: "outsider-pattern-recognition", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 40, title: "Perception Is Protection", slug: "perception-is-protection", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 41, title: "Heaven Exposes The Sister", slug: "heaven-exposes-the-sister", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 42, title: "You Built Your Peace", slug: "you-built-your-peace", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 43, title: "This Is The Reckoning", slug: "this-is-the-reckoning", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 44, title: "They Made You Famous", slug: "they-made-you-famous", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 45, title: "The Loudest Enemies", slug: "the-loudest-enemies", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 46, title: "Your Power Is No Joke", slug: "your-power-is-no-joke", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 47, title: "They Built Their Worst Nightmare", slug: "they-built-their-worst-nightmare", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 48, title: "The Quiet Storm They Never Saw Coming", slug: "quiet-storm-they-never-saw-coming", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 49, title: "They Dug For Dirt But Unearthed Diamonds Instead", slug: "they-dug-for-dirt-but-unearthed-diamonds", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 50, title: "The Confession They've Been Choking On", slug: "confession-theyve-been-choking-on", propositions: 12, corroborated: 12, consecutivePerfect: true },
  { number: 51, title: "The Loudest Hate Always Comes From the Weakest Link", slug: "loudest-hate-weakest-link", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 52, title: "You Didn't Chase the Throne — You Became One", slug: "you-didnt-chase-the-throne-you-became-one", propositions: 14, corroborated: 14, consecutivePerfect: true },
  { number: 53, title: "They Attacked You Without Knowing Who You Were — Now It's A Suicide Mission", slug: "they-attacked-you-without-knowing-who-you-were", propositions: 14, corroborated: 14, consecutivePerfect: true },
  { number: 54, title: "When a Pack of Wolves Can't Take Down a Lion — They Turn on Each Other", slug: "when-a-pack-of-wolves-cant-take-down-a-lion", propositions: 14, corroborated: 14, consecutivePerfect: true },
  { number: 55, title: "When The Wrong People Get Nervous, The Truth Is Already Moving", slug: "when-wrong-people-get-nervous", propositions: 14, corroborated: 14, consecutivePerfect: true },
  { number: 56, title: "Illegal Level Genius — The New Equation", slug: "illegal-level-genius-new-equation", propositions: 14, corroborated: 14, consecutivePerfect: true },
  { number: 57, title: "Prophetic Declaration: They Used To Whisper About You", slug: "prophetic-declaration-forensic-analysis", propositions: 12, corroborated: 11, consecutivePerfect: true },
  { number: 58, title: "Prophetic F*ck You: They Called You Dramatic, Crazy, Obsessive", slug: "prophetic-fck-you-declaration", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 59, title: "God Exposes the False Sister Within: When the Support Network Is the Surveillance Network", slug: "false-sister-forensic-analysis", propositions: 12, corroborated: 12, consecutivePerfect: true },
  { number: 60, title: "A Thousand Fell and Still Couldn't Touch You: The Architecture of Unseen Protection", slug: "thousand-fell-forensic-analysis", propositions: 12, corroborated: 12, consecutivePerfect: true },
  { number: 61, title: "They're About to Be Behind Bars for Real: God Signed the Warrant — Heaven's Courtroom Cross-Examined", slug: "theyre-about-to-be-behind-bars-forensic-analysis", propositions: 12, corroborated: 12, consecutivePerfect: true },
];

const TOTAL_PROPOSITIONS = FORENSIC_ANALYSES.reduce((s, a) => s + a.propositions, 0);

interface MajorPub {
  slug: string;
  title: string;
  subtitle: string;
  coverFile: string;
  category: string;
  wordCount?: string;
  downloadUrl?: string;
  downloadLabel?: string;
  downloadFilename?: string;
  pageUrl?: string;
}

const MAJOR_PUBLICATIONS: MajorPub[] = [
  { slug: "digital-oppression", title: "Digital Oppression and Institutional Failure", subtitle: "A 100,000-Word Forensic Essay", coverFile: "cover-digital-oppression", category: "Forensic", wordCount: "100,000" },
  { slug: "admin-annihilation", title: "The Architecture of Administrative Annihilation", subtitle: "How Australian Institutions Systematically Destroyed a Whistleblower", coverFile: "cover-admin-annihilation", category: "Legal", wordCount: "25,000" },
  { slug: "beyond-pathology", title: "Beyond Pathology", subtitle: "A Forensic Epistemological Analysis of Psychiatric Weaponisation", coverFile: "cover-beyond-pathology", category: "Forensic" },
  { slug: "100-absurdities", title: "100 Absurdities of My Life", subtitle: "A Documented Record of the Impossible Becoming Inevitable", coverFile: "cover-100-absurdities", category: "Testimony" },
  { slug: "man-australia-erased", title: "The Man Australia Tried to Erase", subtitle: "A Complete Whistleblower Exposé — 35 Years, 2,304 Documents", coverFile: "cover-man-australia-erased", category: "Testimony" },
  { slug: "trap-they-set", title: "The Trap They Set Became The Proof", subtitle: "Prophetic Scripture and Forensic Record", coverFile: "cover-trap-they-set-became-proof", category: "Spiritual" },
  { slug: "master-forensic-report", title: "Master Forensic Evidence Report", subtitle: "The Complete Evidentiary Summary of 35 Years", coverFile: "cover-master-forensic-report", category: "Evidence" },
  { slug: "crimes-against-humanity", title: "Crimes Against Humanity: Final Demand", subtitle: "Formal Declaration to the ICC and UNHCR", coverFile: "cover-crimes-against-humanity", category: "Legal" },
  { slug: "certified-record", title: "The Certified Record", subtitle: "Blockchain-Verified: 2,304 Documents, Zero Contradictions", coverFile: "cover-certified-record", category: "Evidence" },
  { slug: "retrospective-statement", title: "Retrospective Statement of Treatment", subtitle: "35 Years of Documented Medical Misconduct", coverFile: "cover-retrospective-statement", category: "Testimony" },
  { slug: "evidence-summary", title: "Evidence Summary: The Complete Pattern", subtitle: "A Plain-Language Guide to 2,304 Documents", coverFile: "cover-evidence-summary", category: "Evidence" },
  { slug: "government-called-delusional", title: "The Government Called Me Delusional", subtitle: "How a Psychiatric Label Became the Primary Evidence of Its Own Misuse", coverFile: "cover-government-called-delusional", category: "Testimony" },
  { slug: "144-questions", title: "144 Questions the Government Cannot Answer", subtitle: "A Forensic Interrogation of 35 Years of Unanswered Accountability", coverFile: "cover-144-questions", category: "Forensic" },
  { slug: "targeted-individual-handbook", title: "The Targeted Individual Handbook", subtitle: "A Documented Guide to Surviving and Exposing State-Enabled Persecution", coverFile: "cover-targeted-individual-handbook", category: "Evidence" },
  { slug: "33rd-degree-shadow-analysts", title: "33rd Degree: Shadow Analysts", subtitle: "The Hidden Architecture of Institutional Suppression", coverFile: "cover-33rd-degree-shadow-analysts", category: "Forensic" },
  { slug: "the-public-advocate-they-silenced", title: "The Public Advocate They Systematically Silenced", subtitle: "Tony Ridley's Named Confession · Complete Advocacy Record", coverFile: "cover-public-advocate-they-silenced", category: "Primary Exhibit" },
  { slug: "federal-court-pid-sia-lagos", title: "Federal Court: Send This to the Bastards", subtitle: "Public Interest Disclosure to CEO Sia Lagos — 3 March 2023", coverFile: "cover-federal-court-pid-sia-lagos", category: "Legal" },
  { slug: "quiet-storm-they-never-saw-coming", title: "The Quiet Storm They Never Saw Coming", subtitle: "Forensic Analysis #48 — Full Essay — 41st Consecutive Perfect Score", coverFile: "cover-quiet-storm-they-never-saw-coming", category: "Forensic Essay", downloadUrl: "/api/forensic/full-essay/quiet-storm", downloadLabel: "Download PDF", downloadFilename: "forensic-analysis-48-quiet-storm-they-never-saw-coming-full-essay.pdf", pageUrl: "/forensic-analysis-48-quiet-storm-download" },
  { slug: "they-fumbled-you", title: "They Fumbled You — Full Essay", subtitle: "Forensic Analysis #9 — First Perfect Score — 13/13 Corroborated", coverFile: "cover-they-fumbled-you", category: "Forensic Essay", downloadUrl: "/api/forensic/full-essay/fumbled-you", downloadLabel: "Download PDF", downloadFilename: "forensic-analysis-9-they-fumbled-you-full-essay.pdf", pageUrl: "/forensic-analysis-9-they-fumbled-you-download" },
  { slug: "confession-theyve-been-choking-on", title: "The Confession They've Been Choking On", subtitle: "Forensic Analysis #50 — 43rd Consecutive Perfect Score — 12/12 Corroborated", coverFile: "cover-confession-theyve-been-choking-on", category: "Forensic Essay", downloadUrl: "/api/forensic/full-essay/confession-choked-on", downloadLabel: "Download PDF", downloadFilename: "forensic-analysis-50-confession-theyve-been-choking-on-full-essay.pdf", pageUrl: "/forensic-analysis-50-confession-theyve-been-choking-on-download" },
  { slug: "comprehensive-statement-digital-architecture", title: "Comprehensive Statement — Digital Architecture of Humanity", subtitle: "Seven Layers of Permanence — Blockchain Verified — ICC Submitted — UNHCR Submitted", coverFile: "cover-comprehensive-statement-digital-architecture", category: "Primary Exhibit", pageUrl: "/comprehensive-statement-digital-architecture" },
  { slug: "police-complicity-death-threat-documentation", title: "Police Complicity & Death Threat — April 15, 2026", subtitle: "Direct death threat by Tory Kilborn · Police slur · Institutional complicity · 50+ MPs notified", coverFile: "cover-police-complicity-death-threat", category: "Primary Evidence", pageUrl: "/police-complicity-death-threat-documentation" },
  { slug: "honey-trap-phillip-glass", title: "Sexual Honey Trap Exploitation, Surveillance and Transfer", subtitle: "Phillip Glass (TAG NSW) — Financial Coercive Control — Gang Stalking Documentation — 14 April 2026", coverFile: "cover-honey-trap-phillip-glass", category: "Primary Exhibit", pageUrl: "/honey-trap-phillip-glass" },
];

interface PdfDoc {
  file: string;
  title: string;
  category: string;
}

const ALL_PDFS: PdfDoc[] = [
  { file: "police-complicity-death-threat-documentation.pdf", title: "Police Complicity & Death Threat — April 15, 2026 — Tory Kilborn, Iasonidis, AVO Applications, 50+ MPs Notified", category: "Primary Evidence" },
  { file: "digital_oppression_100000_word_essay.pdf", title: "Digital Oppression and Institutional Failure (100,000 Words)", category: "Forensic Reports" },
  { file: "master-forensic-evidence-report.pdf", title: "Master Forensic Evidence Report — Complete Evidentiary Summary", category: "Forensic Reports" },
  { file: "forensic-meltdown-report.pdf", title: "Forensic Meltdown Report", category: "Forensic Reports" },
  { file: "the-full-pattern-forensic-evidence.pdf", title: "The Full Pattern — Forensic Evidence Synthesis", category: "Forensic Reports" },
  { file: "precision_as_evidence_evidentiary_synthesis.pdf", title: "Precision as Evidence — Evidentiary Synthesis", category: "Forensic Reports" },
  { file: "impartial-ai-analysis-2343-documents.pdf", title: "Impartial AI Analysis of 2,343 Documents", category: "Forensic Reports" },
  { file: "impartial-ai-abstract-youtube-channel-evidence.pdf", title: "Impartial AI Abstract — YouTube Channel Evidence", category: "Forensic Reports" },
  { file: "impartial-ai-statement-of-significance.pdf", title: "Impartial AI Statement of Significance", category: "Forensic Reports" },
  { file: "universal_master_command_ai_analysis.pdf", title: "Universal Master Command — AI Analysis", category: "Forensic Reports" },
  { file: "comprehensive-case-systematic-persecution.pdf", title: "The Most Comprehensive Case of Systematic Persecution", category: "Forensic Reports" },
  { file: "most-comprehensive-case-systematic-persecution.pdf", title: "Most Comprehensive Case of Systematic Persecution (v2)", category: "Forensic Reports" },
  { file: "systemic-endangerment-of-whistleblowers-institutional-dossier.pdf", title: "Systemic Endangerment of Whistleblowers — Institutional Dossier", category: "Forensic Reports" },
  { file: "paradox-of-persecution-academic-paper.pdf", title: "The Paradox of Persecution — Academic Paper", category: "Forensic Reports" },
  { file: "the-paradox-of-persecution.pdf", title: "The Paradox of Persecution (Full Essay)", category: "Forensic Reports" },
  { file: "barran-dodger-evidence-based-academic-profile-modern-persecution.pdf", title: "Evidence-Based Academic Profile of Modern Persecution", category: "Forensic Reports" },
  { file: "crimes_against_humanity_final_demand.pdf", title: "Crimes Against Humanity — Final Demand (ICC/UNHCR)", category: "Legal & ICC Submissions" },
  { file: "unhcr-icc-cryptographic-evidence-package.pdf", title: "UNHCR/ICC Cryptographic Evidence Package", category: "Legal & ICC Submissions" },
  { file: "urgent_request_for_refuge_and_asylum.pdf", title: "Urgent Request for Refuge and Asylum", category: "Legal & ICC Submissions" },
  { file: "official-whistleblower-torture-dossier-dr-richard-william-mclean.pdf", title: "Official Whistleblower Torture Dossier", category: "Legal & ICC Submissions" },
  { file: "sia-lagos-federal-court-pid-march-2023.pdf", title: "Federal Court PID — Sia Lagos — March 2023", category: "Legal & ICC Submissions" },
  { file: "ndis-pid-official-response.pdf", title: "NDIS PID Official Response", category: "Legal & ICC Submissions" },
  { file: "master-consolidated-legal-record.pdf", title: "Master Consolidated Legal Record", category: "Legal & ICC Submissions" },
  { file: "critical-legal-examination.pdf", title: "Critical Legal Examination", category: "Legal & ICC Submissions" },
  { file: "mclean-comcare-final-legal-proceedings.pdf", title: "McLean Comcare Final Legal Proceedings", category: "Legal & ICC Submissions" },
  { file: "written-reasons-cover-letter-for-parties.pdf", title: "Written Reasons — Cover Letter for Parties", category: "Legal & ICC Submissions" },
  { file: "legal-demand-notice-failure-to-provide-sil-support.pdf", title: "Legal Demand Notice — Failure to Provide SIL Support", category: "Legal & ICC Submissions" },
  { file: "state_and_federal_mp_letter.pdf", title: "State and Federal MP Letter", category: "Legal & ICC Submissions" },
  { file: "s122_redacted_document.pdf", title: "S.122 Redacted Government Document", category: "Legal & ICC Submissions" },
  { file: "they-bought-off-judges.pdf", title: "They Bought Off Judges — Evidence Record", category: "Legal & ICC Submissions" },
  { file: "the-paper-trail-of-erasure.pdf", title: "The Paper Trail of Erasure", category: "Legal & ICC Submissions" },
  { file: "constructive_elimination_under_colour_of_law.pdf", title: "Constructive Elimination Under Colour of Law", category: "Legal & ICC Submissions" },
  { file: "the-testimony-of-dr-richard-william-mclean.pdf", title: "The Testimony of Dr. Richard William McLean", category: "Primary Testimony" },
  { file: "retrospective_statement_of_treatment.pdf", title: "Retrospective Statement of Treatment — 35 Years", category: "Primary Testimony" },
  { file: "RETROSPECTIVE_STATEMENT_OF_TREATMENT.pdf", title: "Retrospective Statement of Treatment (Signed Original)", category: "Primary Testimony" },
  { file: "public-statement-dr-richard-mclean.pdf", title: "Public Statement — Dr. Richard McLean", category: "Primary Testimony" },
  { file: "immortal-testimony-mclean-2025.pdf", title: "Immortal Testimony — McLean 2025", category: "Primary Testimony" },
  { file: "100-absurdities-of-my-life.pdf", title: "100 Absurdities of My Life", category: "Primary Testimony" },
  { file: "government-called-him-delusional.pdf", title: "The Government Called Him Delusional", category: "Primary Testimony" },
  { file: "richard_mclean_australia.pdf", title: "Richard McLean — Australia (Evidence Summary)", category: "Primary Testimony" },
  { file: "i-choose-silence.pdf", title: "I Choose Silence — Testimony", category: "Primary Testimony" },
  { file: "history-has-a-strange-habit.pdf", title: "History Has a Strange Habit — Essay", category: "Primary Testimony" },
  { file: "version-you-tried-to-destroy-is-gone.pdf", title: "The Version You Tried to Destroy Is Gone", category: "Primary Testimony" },
  { file: "they-thought-you-would-break.pdf", title: "They Thought You Would Break", category: "Primary Testimony" },
  { file: "the-perfect-mother-myth-familial-betrayal-whistleblower-testimony.pdf", title: "The Perfect Mother Myth — Familial Betrayal Testimony", category: "Primary Testimony" },
  { file: "kill-him-timestamped-essay-by-barran-dodger-chosen-to-rise.pdf", title: "Kill Him — Timestamped Essay (Chosen to Rise)", category: "Primary Testimony" },
  { file: "the-certified-record-of-barran-dodger.pdf", title: "The Certified Record of Barran Dodger", category: "Primary Testimony" },
  { file: "document_that_cannot_be_erased.pdf", title: "The Document That Cannot Be Erased", category: "Primary Testimony" },
  { file: "living_scroll_unkillable_witness.pdf", title: "Living Scroll of the Unkillable Witness", category: "Primary Testimony" },
  { file: "2.87_percent_survival.pdf", title: "2.87% Survival — Clinical Death 2021 Record", category: "Primary Testimony" },
  { file: "ndis-pid-political-prisoner-dr-rich-mclean.pdf", title: "NDIS PID — Political Prisoner Dr. Richard McLean", category: "NDIS & Disability Evidence" },
  { file: "coag-ndis-government-documentation.pdf", title: "COAG/NDIS Government Documentation", category: "NDIS & Disability Evidence" },
  { file: "interim-bsp-2024-sils-recommendation-richard-mclean.pdf", title: "Interim BSP 2024 — SIL Recommendation", category: "NDIS & Disability Evidence" },
  { file: "ndis-plan-approval-nov-2025.pdf", title: "NDIS Plan Approval — November 2025", category: "NDIS & Disability Evidence" },
  { file: "ot-sil-report-recommending-sils-richard-mclean.pdf", title: "OT SIL Report — SIL Recommendation", category: "NDIS & Disability Evidence" },
  { file: "ben-dsw-disability-ndis-provider-text-messages-assassination-evidence.pdf", title: "DSW Text Messages — Assassination Evidence", category: "NDIS & Disability Evidence" },
  { file: "fih_third_party_authorisation.pdf", title: "FIH Third Party Authorisation", category: "NDIS & Disability Evidence" },
  { file: "dr-horgan-mclean-confidential-psychiatric-assessment.pdf", title: "Dr. Horgan — Confidential Psychiatric Assessment", category: "Psychiatric Weaponisation" },
  { file: "psychiatric_assessment_asylum_documentation.pdf", title: "Psychiatric Assessment — Asylum Documentation", category: "Psychiatric Weaponisation" },
  { file: "ai_personality_profile_barran_dodger.pdf", title: "AI Personality Profile — Barran Dodger", category: "Psychiatric Weaponisation" },
  { file: "v2k-electronic-harassment-evidence-review.pdf", title: "V2K Electronic Harassment Evidence Review", category: "Psychiatric Weaponisation" },
  { file: "white-psyops-invisible-warfare-against-cosmic-witness.pdf", title: "White PsyOps — Invisible Warfare Against Cosmic Witness", category: "Psychiatric Weaponisation" },
  { file: "confinement_by_erasure_threat_by_blade.pdf", title: "Confinement by Erasure, Threat by Blade", category: "Psychiatric Weaponisation" },
  { file: "the-sleeper-agent-of-truth.pdf", title: "The Sleeper Agent of Truth", category: "Psychiatric Weaponisation" },
  { file: "the-100-questions-defining-trial-and-human-sacrifice-of-dr-barran-dodger.pdf", title: "100 Questions Defining the Trial and Human Sacrifice", category: "Psychiatric Weaponisation" },
  { file: "123_gospels_barran_dodger.pdf", title: "123 Gospels of Barran Dodger", category: "Gospels & Prophecy" },
  { file: "canonical_gospel_barran_dodger.pdf", title: "Canonical Gospel of Barran Dodger", category: "Gospels & Prophecy" },
  { file: "twelve_gospel_essays.pdf", title: "Twelve Gospel Essays", category: "Gospels & Prophecy" },
  { file: "gospel_of_the_eliven_chain.pdf", title: "Gospel of the Eliven Chain", category: "Gospels & Prophecy" },
  { file: "gospel_of_the_eliven_chain_2.pdf", title: "Gospel of the Eliven Chain (Volume 2)", category: "Gospels & Prophecy" },
  { file: "gospel_eliven_chain.pdf", title: "Gospel — Eliven Chain (Master)", category: "Gospels & Prophecy" },
  { file: "eliven_chain_has_been_summoned.pdf", title: "The Eliven Chain Has Been Summoned", category: "Gospels & Prophecy" },
  { file: "eliven_chain_144_questions.pdf", title: "Eliven Chain — 144 Questions", category: "Gospels & Prophecy" },
  { file: "enliven_chain_has_been_summoned.pdf", title: "The Enliven Chain Has Been Summoned", category: "Gospels & Prophecy" },
  { file: "enliven_chain_has_been_summoned_2.pdf", title: "The Enliven Chain Has Been Summoned (v2)", category: "Gospels & Prophecy" },
  { file: "the-enliven-chain-complete-gospel-archive.pdf", title: "The Enliven Chain — Complete Gospel Archive", category: "Gospels & Prophecy" },
  { file: "gospel_of_the_enliven_chain_master_inventory.pdf", title: "Gospel of the Enliven Chain — Master Inventory", category: "Gospels & Prophecy" },
  { file: "gospel_of_barran_dodger_victory_2.pdf", title: "Gospel of Barran Dodger — Victory (v2)", category: "Gospels & Prophecy" },
  { file: "1000_years_of_peace.pdf", title: "1,000 Years of Peace — Prophetic Declaration", category: "Gospels & Prophecy" },
  { file: "apotheosis.pdf", title: "Apotheosis — The Divine Transformation", category: "Gospels & Prophecy" },
  { file: "atherion_witnessed_gospel_complete.pdf", title: "Atherion — Witnessed Gospel (Complete)", category: "Gospels & Prophecy" },
  { file: "josephs-coat-barrans-mantle.pdf", title: "Joseph's Coat — Barran's Mantle", category: "Gospels & Prophecy" },
  { file: "josephs-coat-barrans-mantle-prophetic-parallel.pdf", title: "Joseph's Coat — Prophetic Parallel", category: "Gospels & Prophecy" },
  { file: "the_joseph_parallel_prophetic_narrative.pdf", title: "The Joseph Parallel — Prophetic Narrative", category: "Gospels & Prophecy" },
  { file: "declaration-of-breakthrough-and-identity-as-chosen-one.pdf", title: "Declaration of Breakthrough and Identity as Chosen One", category: "Gospels & Prophecy" },
  { file: "declaration_of_sovereignty.pdf", title: "Declaration of Sovereignty", category: "Gospels & Prophecy" },
  { file: "tribunal_declaration_cosmic_court.pdf", title: "Tribunal Declaration — Cosmic Court", category: "Gospels & Prophecy" },
  { file: "sacred_declaration_master_record.pdf", title: "Sacred Declaration — Master Record", category: "Gospels & Prophecy" },
  { file: "cosmic_scroll_of_ten.pdf", title: "Cosmic Scroll of Ten", category: "Gospels & Prophecy" },
  { file: "ten_commandments.pdf", title: "Ten Commandments — Barran Dodger", category: "Gospels & Prophecy" },
  { file: "prophetic_manifesto_barran_dodger.pdf", title: "Prophetic Manifesto — Barran Dodger", category: "Gospels & Prophecy" },
  { file: "prophetic-testimony-biblical-evidence-correlation.pdf", title: "Prophetic Testimony — Biblical Evidence Correlation", category: "Gospels & Prophecy" },
  { file: "witness_before_tribunal_of_humanity.pdf", title: "Witness Before the Tribunal of Humanity", category: "Gospels & Prophecy" },
  { file: "witness_resonantia_eternalis.pdf", title: "Witness Resonantia Eternalis", category: "Gospels & Prophecy" },
  { file: "when_the_machine_wakes_for_you.pdf", title: "When the Machine Wakes for You", category: "Gospels & Prophecy" },
  { file: "god-and-justice-by-barran-dodger.pdf", title: "God and Justice — by Barran Dodger", category: "Gospels & Prophecy" },
  { file: "gods_media_release.pdf", title: "God's Media Release", category: "Gospels & Prophecy" },
  { file: "alien_races_disclosure.pdf", title: "Alien Races Disclosure", category: "Gospels & Prophecy" },
  { file: "chosen-ones-your-story-inspires-many.pdf", title: "Chosen Ones — Your Story Inspires Many", category: "Gospels & Prophecy" },
  { file: "chosen_one_you_were_framed.pdf", title: "Chosen One — You Were Framed", category: "Gospels & Prophecy" },
  { file: "chosen-through-fire-forensic-origin-document.pdf", title: "Chosen Through Fire — Forensic Origin Document", category: "Gospels & Prophecy" },
  { file: "they-hurt-you-angered-god.pdf", title: "They Hurt You and Angered God", category: "Gospels & Prophecy" },
  { file: "they-set-a-perfect-trap.pdf", title: "They Set a Perfect Trap — Forensic Record", category: "Gospels & Prophecy" },
  { file: "the_trap_they_set_became_the_proof.pdf", title: "The Trap They Set Became the Proof", category: "Gospels & Prophecy" },
  { file: "i_tried_to_kill_barran_dodger_satire_2.pdf", title: "I Tried to Kill Barran Dodger (Satire v2)", category: "Gospels & Prophecy" },
  { file: "comprehensive-statement-digital-architecture.pdf", title: "Comprehensive Statement — Digital Architecture of Humanity", category: "Comprehensive Reports" },
  { file: "universal-silence-non-acknowledgement.pdf", title: "Universal Silence — Non-Acknowledgement Record", category: "Comprehensive Reports" },
  { file: "after-forensic-statement-evidence-record.pdf", title: "After Forensic Statement — Evidence Record", category: "Comprehensive Reports" },
  { file: "targeted-individual-handbook.pdf", title: "The Targeted Individual Handbook", category: "Comprehensive Reports" },
  { file: "bro-this-isnt-a-coincidence.pdf", title: "Bro This Isn't A Coincidence (Original)", category: "Comprehensive Reports" },
  { file: "now-everybody-knows.pdf", title: "Now Everybody Knows (Original)", category: "Comprehensive Reports" },
  { file: "no-one-could-be-that-smart.pdf", title: "No One Could Be That Smart (Original)", category: "Comprehensive Reports" },
  { file: "silent-checkmate.pdf", title: "Silent Checkmate (Original)", category: "Comprehensive Reports" },
  { file: "divine-exam.pdf", title: "The Divine Exam (Original)", category: "Comprehensive Reports" },
  { file: "chosen-ones-enough-is-enough.pdf", title: "Chosen Ones — Enough Is Enough (Original)", category: "Comprehensive Reports" },
];

const PDF_CATEGORIES = Array.from(new Set(ALL_PDFS.map(p => p.category)));

const UPLOAD_PLATFORMS = [
  { name: "Internet Archive", url: "https://archive.org/upload", desc: "Permanently archived, free to all, never deleted — the gold standard for permanent public record" },
  { name: "Apple Books", url: "https://authors.apple.com", desc: "Upload via Authors & Books — worldwide distribution to 175+ countries" },
  { name: "Google Play Books", url: "https://play.google.com/books/publish", desc: "Partner Center accepts EPUB directly — billions of users" },
  { name: "Draft2Digital", url: "https://www.draft2digital.com", desc: "Distributes to 40+ platforms simultaneously from one upload — the most efficient method" },
  { name: "Scribd", url: "https://www.scribd.com/upload-document", desc: "Freely readable by millions — no account needed to read" },
  { name: "Open Library", url: "https://openlibrary.org/books/add", desc: "Part of Internet Archive — permanent public record, ISBN optional" },
  { name: "Smashwords", url: "https://www.smashwords.com/publish", desc: "Free distribution to major ebook retailers globally" },
  { name: "Kobo Writing Life", url: "https://www.kobo.com/writinglife", desc: "Millions of readers across 190+ countries — free to publish" },
  { name: "Issuu", url: "https://issuu.com/upload", desc: "PDF and EPUB publishing platform — shareable links and embeds" },
  { name: "DocDroid", url: "https://www.docdroid.net", desc: "Instant PDF sharing with permanent links — no account required" },
];

function LiveDownloadTotal() {
  const { data } = useQuery<{ total: number }>({
    queryKey: ["/api/downloads/total"],
    refetchInterval: 15000,
    staleTime: 0,
  });
  const total = data?.total ?? 0;
  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-emerald-950/40 border border-emerald-500/20 rounded-xl px-5 py-3 text-center mb-2" data-testid="live-download-total-ebooks">
      <span className="text-emerald-400 font-bold text-sm tabular-nums">
        {total > 0 ? `${total.toLocaleString()} verified downloads` : "Live download counter"}
      </span>
      <span className="text-zinc-600 text-sm hidden md:inline">·</span>
      <span className="text-zinc-400 text-xs">All publications · 6 continents · Zero cost</span>
      <span className="text-zinc-600 text-sm hidden md:inline">·</span>
      <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wide">ABN 78 833 496 164</span>
    </div>
  );
}

function DownloadButton({ url, filename, label, slug, variant = "epub" }: { url: string; filename: string; label: string; slug?: string; variant?: "epub" | "pdf" }) {
  const [loading, setLoading] = useState(false);
  const trackSlug = slug || filename.replace(/\.[^/.]+$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const { data: countData, refetch } = useQuery<{ count: number }>({
    queryKey: ["/api/downloads", trackSlug],
    queryFn: () => fetch(`/api/downloads/${trackSlug}`, { cache: "no-store" }).then(r => r.json()),
    refetchInterval: 30000,
    staleTime: 0,
  });
  const count = countData?.count ?? 0;
  const handleDownload = async () => {
    setLoading(true);
    try {
      await fetch(`/api/downloads/${trackSlug}/increment`, { method: "POST" });
      const res = await fetch(url);
      if (!res.ok) throw new Error("Download failed");
      const blob = await res.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      URL.revokeObjectURL(link.href);
      setTimeout(() => refetch(), 1500);
    } catch (e) { console.error(e); } finally { setLoading(false); }
  };
  const colorClass = variant === "pdf"
    ? "bg-blue-700 hover:bg-blue-600 text-white"
    : "bg-amber-600 hover:bg-amber-500 text-black";
  return (
    <button onClick={handleDownload} disabled={loading} data-testid={`btn-dl-${filename}`}
      className={`flex items-center gap-1.5 ${colorClass} disabled:opacity-60 font-semibold text-xs px-2.5 py-1.5 rounded transition-colors`}>
      {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Download className="w-3 h-3" />}
      {loading ? "…" : label}
      {count > 0 && <span className="bg-black/20 rounded-full px-1.5 py-0.5 text-[9px] font-bold tabular-nums">{count.toLocaleString()}</span>}
    </button>
  );
}

function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };
  return (
    <button onClick={copy} data-testid="btn-copy-link"
      className="flex items-center gap-1.5 bg-zinc-700 hover:bg-zinc-600 text-zinc-300 text-xs font-medium px-2.5 py-1.5 rounded transition-colors">
      {copied ? <CheckCheck className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
      {copied ? "Copied!" : "Copy Link"}
    </button>
  );
}

function ForensicGrid({ showAll }: { showAll: boolean }) {
  const displayed = showAll ? FORENSIC_ANALYSES : FORENSIC_ANALYSES.slice(0, 12);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {displayed.map((a) => {
        const coverSrc = FORENSIC_EPUB_COVER_MAP[a.number] ? getCoverSrc(FORENSIC_EPUB_COVER_MAP[a.number]) : undefined;
        const epubFilename = `Forensic-Analysis-${String(a.number).padStart(2, "0")}-${a.slug}.epub`;
        const pdfUrl = FORENSIC_PDF_MAP[a.number];
        return (
          <div key={a.number} data-testid={`card-epub-forensic-${a.number}`}
            className="flex flex-col bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden hover:border-amber-600/60 transition-colors">
            <div className="relative">
              {coverSrc ? (
                <a href={`/api/epub/forensic/${a.number}`} download={epubFilename} title={`Download ${a.title} — EPUB`} className="block" data-testid={`link-cover-epub-${a.number}`}>
                  <img src={coverSrc} alt={a.title} className="w-full aspect-[2/3] object-cover hover:opacity-80 transition-opacity cursor-pointer" />
                </a>
              ) : (
                <div className="w-full aspect-[2/3] bg-zinc-800 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-amber-600/40" />
                </div>
              )}
              <div className="absolute top-1 left-1">
                <span className="bg-black/80 text-amber-400 text-[10px] font-bold px-1 py-0.5 rounded">#{a.number}</span>
              </div>
              {a.consecutivePerfect && (
                <div className="absolute top-1 right-1">
                  <span className="bg-amber-600 text-black text-[9px] font-bold px-1 py-0.5 rounded">{a.corroborated}/{a.propositions}</span>
                </div>
              )}
            </div>
            <div className="p-2 flex flex-col gap-1.5 flex-1">
              <p className="text-zinc-300 text-[11px] font-medium leading-tight line-clamp-2">{a.title}</p>
              <div className="flex flex-wrap gap-1 mt-auto">
                <DownloadButton url={`/api/epub/forensic/${a.number}`} filename={epubFilename} label="EPUB" slug={a.slug} variant="epub" />
                {pdfUrl && <DownloadButton url={pdfUrl} filename={`forensic-analysis-${String(a.number).padStart(2,"0")}-${a.slug}.pdf`} label="PDF" slug={`pdf-${a.slug}`} variant="pdf" />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FreeEbooks() {
  const [showAllForensic, setShowAllForensic] = useState(false);
  const [bundleLoading, setBundleLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [showAllPdfs, setShowAllPdfs] = useState(false);

  const handleBundleDownload = async () => {
    setBundleLoading(true);
    try {
      const res = await fetch("/api/epub/forensic/all-bundle");
      if (!res.ok) throw new Error("Bundle download failed");
      const blob = await res.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `Barran-Dodger-All-${FORENSIC_ANALYSES.length}-Forensic-Analyses-EPUBs.zip`;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (e) { console.error(e); } finally { setBundleLoading(false); }
  };

  const filteredPdfs = activeCategory === "All" ? ALL_PDFS : ALL_PDFS.filter(p => p.category === activeCategory);
  const displayedPdfs = showAllPdfs ? filteredPdfs : filteredPdfs.slice(0, 20);
  const totalPropositions = TOTAL_PROPOSITIONS;
  const perfectCount = FORENSIC_ANALYSES.filter(a => a.consecutivePerfect).length;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SEO
        title="Free eBooks & Documents — Barran Dodger | 170+ Free Downloads"
        description={`Download ${FORENSIC_ANALYSES.length + MAJOR_PUBLICATIONS.length} free EPUB eBooks + 115 source PDFs documenting 35 years of Australian government corruption. ICC Article 7 submitted. UNHCR submitted. ${totalPropositions}/${totalPropositions} propositions verified. Upload freely. Share everywhere. ABN 78 833 496 164.`}
        canonicalUrl="https://www.barrandodger.com/free-ebooks"
      />
      <Navigation />

      {/* SIGNIFICANCE DECLARATION BANNER */}
      <div className="bg-gradient-to-r from-red-950/60 via-amber-950/40 to-red-950/60 border-b border-amber-700/30 py-4 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-amber-300 text-sm md:text-base font-semibold leading-relaxed">
            <AlertTriangle className="w-4 h-4 inline mr-2 text-amber-400" />
            <strong className="text-white">This is a public service archive.</strong> Every document on this page is free to download, share, upload, and republish without restriction.
            ICC (The Hague) and UNHCR (Geneva) formally received. 300+ named perpetrators. 25+ government agencies. 35 years. Zero defamation proceedings. The record speaks for itself.
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/30 rounded-full px-4 py-1.5 mb-6">
            <Heart className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">Free Gift to the World — No Restrictions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 leading-tight">
            170+ Free Publications.<br />
            <span className="text-zinc-100">Download. Share. Publish Everywhere.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            Every eBook, every PDF, every forensic analysis on this page is the intellectual property of the
            Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164) — shared freely in the
            goodwill of the public for accountability and human rights purposes. Download them.
            Upload them to Apple Books, Google Play, Scribd, the Internet Archive, Kobo, and everywhere else.
            <strong className="text-amber-400"> The testimony of one person, freely shared by anyone, is the most powerful accountability mechanism in history.</strong>
          </p>
          <LiveDownloadTotal />
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-500 mt-3">
            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-amber-600" /> {FORENSIC_ANALYSES.length} Forensic EPUBs with Covers</span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-amber-600" /> {MAJOR_PUBLICATIONS.length} Major Publication EPUBs</span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-1"><FileText className="w-4 h-4 text-blue-500" /> {ALL_PDFS.length}+ Source PDFs</span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-1"><Globe className="w-4 h-4 text-amber-600" /> ICC + UNHCR Submitted</span>
          </div>

          {/* Key stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mt-8">
            {[
              { label: "Forensic Analyses", value: `${FORENSIC_ANALYSES.length}`, sub: "61 independent videos" },
              { label: "Propositions Verified", value: `${totalPropositions}/${totalPropositions}`, sub: "Zero contradicted" },
              { label: "Perfect Scores", value: `${perfectCount}`, sub: "54 consecutive" },
              { label: "Source Documents", value: "2,304", sub: "Blockchain-verified" },
            ].map(s => (
              <div key={s.label} className="bg-zinc-900/60 border border-zinc-700 rounded-lg p-3 text-center">
                <p className="text-2xl font-black text-amber-400">{s.value}</p>
                <p className="text-zinc-300 text-xs font-semibold mt-0.5">{s.label}</p>
                <p className="text-zinc-600 text-[10px]">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="border-b border-zinc-800 bg-zinc-900/40 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-400 mb-2 text-center">Why Sharing These Documents Is a Public Service</h2>
          <p className="text-zinc-500 text-sm text-center mb-6 max-w-2xl mx-auto">
            This is not a personal vendetta. It is the documented record of 35 years of coordinated Australian government persecution, submitted to two international institutions and verified by 61 independent AI analyses. Sharing it is an act of accountability.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: <Archive className="w-5 h-5 text-amber-400" />,
                title: "Each Upload Creates a Permanent Record",
                body: "When you upload an EPUB to Apple Books, Google Play, or the Internet Archive, you create a permanently hosted, independently accessible copy. 300+ named individuals cannot remove what 6 continents have downloaded.",
              },
              {
                icon: <Globe className="w-5 h-5 text-amber-400" />,
                title: "ICC Article 7 — The Hague Is Watching",
                body: "These documents have been formally submitted to the ICC under Article 7 (crimes against humanity) and the UNHCR in Geneva. Every upload extends the record's reach to new journalists, scholars, and accountability bodies.",
              },
              {
                icon: <Share2 className="w-5 h-5 text-amber-400" />,
                title: "The Cover Makes It Discoverable",
                body: "Every EPUB includes the AI-generated cover art so it displays correctly on every platform. A book with a cover gets discovered. A discovered book gets read. A read book changes minds. A changed mind changes the world.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-700 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">{item.icon}<h3 className="font-semibold text-zinc-100 text-sm">{item.title}</h3></div>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Share this page */}
          <div className="mt-6 bg-amber-950/20 border border-amber-700/30 rounded-xl p-5 text-center">
            <h3 className="text-amber-300 font-bold text-base mb-2">Share This Page — It Is a Free Public Resource</h3>
            <p className="text-zinc-400 text-sm mb-4">Copy the link below and share it everywhere — social media, forums, email lists, human rights networks, journalism contacts, legal databases.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <code className="text-amber-400 text-sm bg-zinc-900 border border-zinc-700 px-3 py-2 rounded">https://www.barrandodger.com/free-ebooks</code>
              <CopyLinkButton url="https://www.barrandodger.com/free-ebooks" />
            </div>
          </div>
        </div>
      </section>

      {/* FORENSIC ANALYSES EPUBs */}
      <section className="py-12 px-4 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-amber-400 mb-1">{FORENSIC_ANALYSES.length} Forensic Analysis EPUBs — With Embedded Covers</h2>
              <p className="text-zinc-400 text-sm max-w-xl">
                Each is a standalone EPUB book with embedded AI cover: one independent YouTube video forensically tested against 2,304 primary-source documents.
                Combined record: <strong className="text-amber-300">{totalPropositions}/{totalPropositions} propositions verified. {perfectCount} consecutive perfect scores. Zero contradictions.</strong>
                Where PDF is also available, both formats are offered.
              </p>
            </div>
            <button onClick={handleBundleDownload} disabled={bundleLoading} data-testid="btn-epub-bundle-all"
              className="shrink-0 flex items-center gap-2 bg-amber-700 hover:bg-amber-600 disabled:opacity-60 text-black font-bold px-5 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap">
              {bundleLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Archive className="w-4 h-4" />}
              {bundleLoading ? "Generating ZIP…" : `Download All ${FORENSIC_ANALYSES.length} as ZIP`}
            </button>
          </div>
          <ForensicGrid showAll={showAllForensic} />
          {!showAllForensic && (
            <div className="mt-6 text-center">
              <button onClick={() => setShowAllForensic(true)} data-testid="btn-show-all-forensic"
                className="flex items-center gap-2 mx-auto text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
                <ChevronDown className="w-4 h-4" />
                Show all {FORENSIC_ANALYSES.length} analyses ({FORENSIC_ANALYSES.length - 12} more)
              </button>
            </div>
          )}
          {showAllForensic && (
            <div className="mt-6 text-center">
              <button onClick={() => setShowAllForensic(false)} data-testid="btn-hide-forensic"
                className="flex items-center gap-2 mx-auto text-zinc-500 hover:text-zinc-400 text-sm transition-colors">
                <ChevronUp className="w-4 h-4" />Show fewer
              </button>
            </div>
          )}
        </div>
      </section>

      {/* MAJOR PUBLICATION EPUBs */}
      <section className="py-12 px-4 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-1">{MAJOR_PUBLICATIONS.length} Major Publication EPUBs — With Embedded Covers</h2>
            <p className="text-zinc-400 text-sm max-w-xl">
              The foundational documents of the archive — forensic reports, legal affidavits, testimony, and evidence summaries.
              Each includes the AI-generated cover and is free to download, share, and republish.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MAJOR_PUBLICATIONS.map((pub) => {
              const coverSrc = getCoverSrc(pub.coverFile);
              const filename = `${pub.slug}.epub`;
              return (
                <div key={pub.slug} data-testid={`card-epub-pub-${pub.slug}`}
                  className="flex gap-3 bg-zinc-900 border border-zinc-700 rounded-lg p-3 hover:border-amber-600/50 transition-colors">
                  <div className="shrink-0 w-16 sm:w-20">
                    {coverSrc ? (
                      <img src={coverSrc} alt={pub.title} className="w-full aspect-[2/3] object-cover rounded" />
                    ) : (
                      <div className="w-full aspect-[2/3] bg-zinc-800 rounded flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-amber-600/30" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                    <Badge variant="outline" className="w-fit text-[10px] text-amber-400 border-amber-600/30 px-1.5 py-0">{pub.category}</Badge>
                    <h3 className="text-zinc-200 font-semibold text-sm leading-tight line-clamp-2">{pub.title}</h3>
                    <p className="text-zinc-500 text-[11px] leading-tight line-clamp-2">{pub.subtitle}</p>
                    {pub.wordCount && <p className="text-amber-600/70 text-[10px] font-medium">~{pub.wordCount} words</p>}
                    <div className="mt-auto pt-1 flex flex-wrap gap-1.5">
                      <DownloadButton url={pub.downloadUrl ?? `/api/epub/publication/${pub.slug}`} filename={pub.downloadFilename ?? filename} label={pub.downloadLabel ?? "EPUB"} slug={pub.slug} variant="epub" />
                      {pub.pageUrl && (
                        <a href={pub.pageUrl} data-testid={`link-page-${pub.slug}`}
                          className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-zinc-300 font-semibold text-xs px-2.5 py-1.5 rounded transition-colors">
                          View Essay
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ALL 115 SOURCE PDFs */}
      <section className="py-12 px-4 border-b border-zinc-800 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-7 h-7 text-blue-400" />
              <h2 className="text-2xl font-bold text-blue-400">{ALL_PDFS.length}+ Source PDF Documents — All Free</h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-2xl mb-4">
              The complete source document library — every PDF in the archive available for direct free download.
              These are the primary-source documents behind the 2,304-exhibit blockchain-verified archive.
              Download them. Upload them. Share them. The record is permanent and cannot be erased.
            </p>
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["All", ...PDF_CATEGORIES].map(cat => (
                <button key={cat} onClick={() => { setActiveCategory(cat); setShowAllPdfs(false); }}
                  data-testid={`filter-pdf-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors font-medium ${
                    activeCategory === cat
                      ? "bg-blue-700 border-blue-600 text-white"
                      : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-blue-600 hover:text-blue-300"
                  }`}>
                  {cat} {cat === "All" ? `(${ALL_PDFS.length})` : `(${ALL_PDFS.filter(p => p.category === cat).length})`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {displayedPdfs.map((doc) => (
              <div key={doc.file} data-testid={`card-pdf-${doc.file}`}
                className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-blue-700/40 rounded-lg px-3 py-2.5 transition-colors group">
                <FileText className="w-4 h-4 text-blue-500/60 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                <div className="flex-1 min-w-0">
                  <p className="text-zinc-300 text-xs font-medium leading-snug line-clamp-2 group-hover:text-white transition-colors">{doc.title}</p>
                  <p className="text-zinc-600 text-[10px] mt-0.5">{doc.category}</p>
                </div>
                <a href={`/documents/${doc.file}`} download={doc.file}
                  data-testid={`btn-pdf-dl-${doc.file}`}
                  onClick={() => fetch(`/api/downloads/pdf-${doc.file.replace(/\.[^/.]+$/, "")}/increment`, { method: "POST" }).catch(() => {})}
                  className="flex-shrink-0 flex items-center gap-1 bg-blue-800/40 hover:bg-blue-700 border border-blue-700/40 text-blue-300 hover:text-white text-[10px] font-bold px-2 py-1 rounded transition-colors">
                  <Download className="w-3 h-3" /> PDF
                </a>
              </div>
            ))}
          </div>

          {filteredPdfs.length > 20 && !showAllPdfs && (
            <div className="mt-5 text-center">
              <button onClick={() => setShowAllPdfs(true)} data-testid="btn-show-all-pdfs"
                className="flex items-center gap-2 mx-auto text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                <ChevronDown className="w-4 h-4" />
                Show all {filteredPdfs.length} documents ({filteredPdfs.length - 20} more)
              </button>
            </div>
          )}
          {showAllPdfs && filteredPdfs.length > 20 && (
            <div className="mt-5 text-center">
              <button onClick={() => setShowAllPdfs(false)} data-testid="btn-hide-pdfs"
                className="flex items-center gap-2 mx-auto text-zinc-500 hover:text-zinc-400 text-sm transition-colors">
                <ChevronUp className="w-4 h-4" />Show fewer
              </button>
            </div>
          )}

          <div className="mt-6 bg-blue-950/20 border border-blue-700/20 rounded-lg p-4 text-center">
            <p className="text-blue-300 text-sm font-semibold mb-1">All PDFs are free. No account required. No restrictions.</p>
            <p className="text-zinc-500 text-xs">
              Download individually above, or visit <a href="/documents" className="text-blue-400 hover:text-blue-300 underline">/documents</a> to browse the complete archive.
              The full 2,304-document blockchain-verified archive is also available as a ZIP bundle.
            </p>
          </div>
        </div>
      </section>

      {/* UPLOAD GUIDE */}
      <section className="py-12 px-4 border-b border-zinc-800 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-400 mb-2 text-center">How to Publish These Books — Step by Step</h2>
          <p className="text-zinc-400 text-sm text-center mb-2 max-w-xl mx-auto">
            Download any EPUB above. Create a free account on the platform. Upload. Set price to FREE. Publish.
            You will be listed as the uploader but the intellectual property remains with Dr. McLean and the Trust.
            This is an act of accountability, not commerce.
          </p>
          <div className="max-w-2xl mx-auto mb-6 border border-amber-600/20 bg-amber-600/5 rounded-lg px-5 py-3 text-xs text-zinc-500 text-center leading-relaxed">
            <strong className="text-amber-500/80">IP Notice:</strong> All publications © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved.
            Non-commercial reproduction and distribution is permitted and <strong className="text-amber-400">actively encouraged</strong> as a public service.
            All intellectual property rights remain exclusively with Dr. Richard William McLean (Barran Dodger) and the Trust.
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {UPLOAD_PLATFORMS.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                data-testid={`link-platform-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-start gap-3 bg-zinc-900 border border-zinc-700 hover:border-amber-600/50 rounded-lg p-4 transition-colors group">
                <Globe className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 group-hover:text-amber-400 transition-colors" />
                <div>
                  <p className="font-semibold text-zinc-200 text-sm group-hover:text-amber-300 transition-colors">{p.name}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL DECLARATION */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-amber-700/20 rounded-2xl p-8">
            <blockquote className="text-2xl md:text-3xl font-bold text-amber-400 mb-6 leading-relaxed italic">
              "The testimony of one person, freely shared by anyone, is the most powerful accountability mechanism in history."
            </blockquote>
            <p className="text-zinc-400 text-base mb-6 leading-relaxed">
              Every EPUB downloaded is a book that can be uploaded. Every book uploaded creates a permanent,
              independently hosted record. Every record is harder to erase than the last.
              This is how 35 years of documented corruption is permanently preserved — not through official channels,
              but through people.
              <strong className="text-amber-300"> The archive was submitted to the ICC and UNHCR. Now it belongs to the world.</strong>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { val: "2,304", label: "Blockchain-verified docs" },
                { val: "ICC", label: "The Hague — Article 7" },
                { val: "UNHCR", label: "Geneva — Received" },
                { val: "361,120+", label: "Downloads · 6 Continents" },
              ].map(s => (
                <div key={s.label} className="bg-zinc-800/60 rounded-lg p-2 text-center">
                  <p className="text-amber-300 font-bold text-lg">{s.val}</p>
                  <p className="text-zinc-500 text-[10px]">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="/forensic-analysis" className="bg-amber-700 hover:bg-amber-600 text-black font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                View All 61 Analyses
              </a>
              <a href="/documents" className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                Browse Full Archive
              </a>
              <CopyLinkButton url="https://www.barrandodger.com/free-ebooks" />
            </div>
            <p className="text-zinc-600 text-xs mt-4">
              <a href="https://www.barrandodger.com" className="text-amber-600 hover:text-amber-400 transition-colors">www.barrandodger.com</a>
              {" · "}ABN 78 833 496 164
              {" · "}Dr. Richard William McLean (Barran Dodger)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
