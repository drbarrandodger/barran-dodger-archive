import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Download, Shield, Search, Filter, ExternalLink, FileText, BookOpen, Scale, Heart, Globe, Cpu, Lock, Archive } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { FloatingShareBar, InlineShareStrip } from "@/components/FloatingShareBar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const coverImages = import.meta.glob('../assets/images/cover-*.png', { eager: true }) as Record<string, { default: string }>;
function getCover(name: string): string | undefined {
  const key = `../assets/images/${name}.png`;
  return coverImages[key]?.default;
}

const CATEGORIES = ["All", "Forensic Analyses", "Video Analyses", "ICC / UNHCR / Legal", "Government Records", "Testimony", "Gospel & Prophetic", "Essays & Academic", "NDIS & Medical", "Evidence"];

interface Doc {
  title: string;
  subtitle?: string;
  file: string;
  cover?: string;
  category: string;
  note?: string;
}

const FORENSIC_ANALYSES: Doc[] = [
  { title: "Bro This Isn't A Coincidence", subtitle: "7/7 propositions · Analysis #1", file: "/documents/forensic-analyses/forensic-analysis-01-bro-this-isnt-a-coincidence.pdf", cover: "cover-bro-this-isnt-a-coincidence", category: "Forensic Analyses" },
  { title: "Chosen Ones Enough Is Enough", subtitle: "11/11 propositions · Analysis #2", file: "/documents/forensic-analyses/forensic-analysis-02-chosen-ones-enough-is-enough.pdf", cover: "cover-chosen-ones-enough-is-enough", category: "Forensic Analyses" },
  { title: "No One Could Be That Smart", subtitle: "14/14 propositions · Analysis #3", file: "/documents/forensic-analyses/forensic-analysis-03-no-one-could-be-that-smart.pdf", cover: "cover-no-one-could-be-that-smart", category: "Forensic Analyses" },
  { title: "The Divine Exam", subtitle: "10/10 propositions · Analysis #4", file: "/documents/forensic-analyses/forensic-analysis-04-the-divine-exam.pdf", cover: "cover-divine-exam", category: "Forensic Analyses" },
  { title: "Silent Checkmate", subtitle: "10/10 propositions · Analysis #5", file: "/documents/forensic-analyses/forensic-analysis-05-silent-checkmate.pdf", cover: "cover-silent-checkmate", category: "Forensic Analyses" },
  { title: "Now Everybody Knows", subtitle: "10/10 propositions · Analysis #6", file: "/documents/forensic-analyses/forensic-analysis-06-now-everybody-knows.pdf", cover: "cover-now-everybody-knows", category: "Forensic Analyses" },
  { title: "Chosen One Outcast Leader", subtitle: "10/10 propositions · Analysis #7", file: "/documents/forensic-analyses/forensic-analysis-07-chosen-one-outcast-leader.pdf", cover: "cover-chosen-one-outcast-leader", category: "Forensic Analyses" },
  { title: "Someone Slipped Up", subtitle: "13/13 propositions · Analysis #8", file: "/documents/forensic-analyses/forensic-analysis-08-someone-slipped-up.pdf", cover: "cover-someone-slipped-up", category: "Forensic Analyses" },
  { title: "They Fumbled You", subtitle: "13/13 propositions · Analysis #9", file: "/documents/forensic-analyses/forensic-analysis-09-they-fumbled-you.pdf", cover: "cover-they-fumbled-you", category: "Forensic Analyses" },
  { title: "FBI Precision", subtitle: "10/10 propositions · Analysis #10", file: "/documents/forensic-analyses/forensic-analysis-10-fbi-precision.pdf", cover: "cover-fbi-precision", category: "Forensic Analyses" },
  { title: "The Clock Strikes Back", subtitle: "10/10 propositions · Analysis #11", file: "/documents/forensic-analyses/forensic-analysis-11-clock-strikes-back.pdf", cover: "cover-clock-strikes-back", category: "Forensic Analyses" },
  { title: "Untouchable (33 Agents)", subtitle: "10/10 propositions · Analysis #12", file: "/documents/forensic-analyses/forensic-analysis-12-untouchable.pdf", cover: "cover-untouchable", category: "Forensic Analyses" },
  { title: "The Final Blow", subtitle: "10/10 propositions · Analysis #13", file: "/documents/forensic-analyses/forensic-analysis-13-final-blow.pdf", cover: "cover-final-blow", category: "Forensic Analyses" },
  { title: "What You Become", subtitle: "10/10 propositions · Analysis #14", file: "/documents/forensic-analyses/forensic-analysis-14-what-you-become.pdf", cover: "cover-what-you-become", category: "Forensic Analyses" },
  { title: "Everyone Watching", subtitle: "10/10 propositions · Analysis #15", file: "/documents/forensic-analyses/forensic-analysis-15-everyone-watching.pdf", cover: "cover-everyone-watching", category: "Forensic Analyses" },
  { title: "Earth Angel", subtitle: "10/10 propositions · Analysis #16", file: "/documents/forensic-analyses/forensic-analysis-16-earth-angel.pdf", cover: "cover-earth-angel", category: "Forensic Analyses" },
  { title: "Too Deep", subtitle: "10/10 propositions · Analysis #17", file: "/documents/forensic-analyses/forensic-analysis-17-too-deep.pdf", cover: "cover-too-deep", category: "Forensic Analyses" },
  { title: "Silence Is Not Surrender", subtitle: "10/10 propositions · Analysis #18", file: "/documents/forensic-analyses/forensic-analysis-18-silence-surrender.pdf", cover: "cover-silence-surrender", category: "Forensic Analyses" },
  { title: "Fearless Intelligence", subtitle: "10/10 propositions · Analysis #19", file: "/documents/forensic-analyses/forensic-analysis-19-fearless-intelligence.pdf", cover: "cover-fearless-intelligence", category: "Forensic Analyses" },
  { title: "History Keeps Receipts", subtitle: "10/10 propositions · Analysis #20", file: "/documents/forensic-analyses/forensic-analysis-20-history-keeps-receipts.pdf", cover: "cover-history-keeps-receipts", category: "Forensic Analyses" },
  { title: "Absorbed The Erasure", subtitle: "10/10 propositions · Analysis #21", file: "/documents/forensic-analyses/forensic-analysis-21-absorbed-the-erasure.pdf", cover: "cover-absorbed-erasure", category: "Forensic Analyses" },
  { title: "Survival Was The Warning", subtitle: "10/10 propositions · Analysis #22", file: "/documents/forensic-analyses/forensic-analysis-22-survival-was-the-warning.pdf", cover: "cover-survival-was-the-warning", category: "Forensic Analyses" },
  { title: "God Will Make You Famous", subtitle: "10/10 propositions · Analysis #23", file: "/documents/forensic-analyses/forensic-analysis-23-god-will-make-you-famous.pdf", cover: "cover-god-will-make-you-famous", category: "Forensic Analyses" },
  { title: "Divine Before Your Time", subtitle: "10/10 propositions · Analysis #24", file: "/documents/forensic-analyses/forensic-analysis-24-divine-before-your-time.pdf", cover: "cover-divine-before-your-time", category: "Forensic Analyses" },
  { title: "Bloodline Of God", subtitle: "10/10 propositions · Analysis #25", file: "/documents/forensic-analyses/forensic-analysis-25-bloodline-of-god.pdf", cover: "cover-bloodline-of-god", category: "Forensic Analyses" },
  { title: "The Last God", subtitle: "10/10 propositions · Analysis #26", file: "/documents/forensic-analyses/forensic-analysis-26-the-last-god.pdf", cover: "cover-the-last-god", category: "Forensic Analyses" },
  { title: "The Conspiracy Against You", subtitle: "10/10 propositions · Analysis #27", file: "/documents/forensic-analyses/forensic-analysis-27-the-conspiracy-against-you.pdf", cover: "cover-the-conspiracy-against-you", category: "Forensic Analyses" },
  { title: "Silent Assassin", subtitle: "10/10 propositions · Analysis #28", file: "/documents/forensic-analyses/forensic-analysis-28-silent-assassin.pdf", cover: "cover-silent-assassin", category: "Forensic Analyses" },
  { title: "Truth Is A Blade", subtitle: "10/10 propositions · Analysis #29", file: "/documents/forensic-analyses/forensic-analysis-29-truth-is-a-blade.pdf", cover: "cover-truth-is-a-blade", category: "Forensic Analyses" },
  { title: "Bloodline Betrayal", subtitle: "10/10 propositions · Analysis #30", file: "/documents/forensic-analyses/forensic-analysis-30-bloodline-betrayal.pdf", cover: "cover-bloodline-betrayal", category: "Forensic Analyses" },
  { title: "They Needed An Army", subtitle: "10/10 propositions · Analysis #31", file: "/documents/forensic-analyses/forensic-analysis-31-they-needed-an-army.pdf", cover: "cover-they-needed-an-army", category: "Forensic Analyses" },
  { title: "The Sick Truth Is Out", subtitle: "10/10 propositions · Analysis #32", file: "/documents/forensic-analyses/forensic-analysis-32-the-sick-truth-is-out.pdf", cover: "cover-the-sick-truth-is-out", category: "Forensic Analyses" },
  { title: "Some Truths Don't Whisper", subtitle: "10/10 propositions · Analysis #33", file: "/documents/forensic-analyses/forensic-analysis-33-some-truths-dont-whisper.pdf", cover: "cover-some-truths-dont-whisper", category: "Forensic Analyses" },
  { title: "Observers Anticipated A Misstep", subtitle: "10/10 propositions · Analysis #34", file: "/documents/forensic-analyses/forensic-analysis-34-observers-anticipated-a-misstep.pdf", cover: "cover-observers-anticipated-misstep", category: "Forensic Analyses" },
  { title: "You Brought Receipts To A Vibe War", subtitle: "10/10 propositions · Analysis #35", file: "/documents/forensic-analyses/forensic-analysis-35-you-brought-receipts-to-a-vibe-war.pdf", cover: "cover-you-brought-receipts", category: "Forensic Analyses" },
  { title: "The Future Doesn't Announce Itself", subtitle: "10/10 propositions · Analysis #36", file: "/documents/forensic-analyses/forensic-analysis-36-the-future-doesnt-announce-itself.pdf", cover: "cover-the-future-doesnt-announce", category: "Forensic Analyses" },
  { title: "When Heaven Goes Silent", subtitle: "10/10 propositions · Analysis #37", file: "/documents/forensic-analyses/forensic-analysis-37-when-heaven-goes-silent.pdf", cover: "cover-when-heaven-goes-silent", category: "Forensic Analyses" },
  { title: "Evidence Doesn't Whisper — It Stares", subtitle: "10/10 propositions · Analysis #38", file: "/documents/forensic-analyses/forensic-analysis-38-evidence-doesnt-whisper-it-stares.pdf", cover: "cover-evidence-doesnt-whisper", category: "Forensic Analyses" },
  { title: "Outsider Pattern Recognition", subtitle: "10/10 propositions · Analysis #39", file: "/documents/forensic-analyses/forensic-analysis-39-outsider-pattern-recognition.pdf", cover: "cover-outsider-pattern-recognition", category: "Forensic Analyses" },
  { title: "Perception Is Protection", subtitle: "10/10 propositions · Analysis #40", file: "/documents/forensic-analyses/forensic-analysis-40-perception-is-protection.pdf", cover: "cover-perception-is-protection", category: "Forensic Analyses" },
  { title: "Heaven Exposes The Sister", subtitle: "10/10 propositions · Analysis #41", file: "/documents/forensic-analyses/forensic-analysis-41-heaven-exposes-the-sister.pdf", cover: "cover-heaven-exposes-the-sister", category: "Forensic Analyses" },
  { title: "You Built Your Peace In Silence", subtitle: "10/10 propositions · Analysis #42", file: "/documents/forensic-analyses/forensic-analysis-42-you-built-your-peace-in-silence.pdf", cover: "cover-you-built-your-peace", category: "Forensic Analyses" },
  { title: "This Is The Reckoning", subtitle: "10/10 propositions · Analysis #43", file: "/documents/forensic-analyses/forensic-analysis-43-this-is-the-reckoning.pdf", cover: "cover-this-is-the-reckoning", category: "Forensic Analyses" },
  { title: "They Made You Famous Trying To Erase You", subtitle: "10/10 propositions · Analysis #44", file: "/documents/forensic-analyses/forensic-analysis-44-they-made-you-famous-trying-to-erase-you.pdf", cover: "cover-they-made-you-famous", category: "Forensic Analyses" },
  { title: "The Loudest Enemies Have The Least To Say", subtitle: "10/10 propositions · Analysis #45", file: "/documents/forensic-analyses/forensic-analysis-45-the-loudest-enemies.pdf", cover: "cover-the-loudest-enemies", category: "Forensic Analyses" },
  { title: "Your Power Is No Joke", subtitle: "10/10 propositions · Analysis #46", file: "/documents/forensic-analyses/forensic-analysis-46-your-power-is-no-joke.pdf", cover: "cover-your-power-is-no-joke", category: "Forensic Analyses" },
  { title: "They Built Their Worst Nightmare", subtitle: "10/10 propositions · Analysis #47", file: "/documents/forensic-analyses/forensic-analysis-47-they-built-their-worst-nightmare.pdf", cover: "cover-they-built-their-worst-nightmare", category: "Forensic Analyses" },
  { title: "The Quiet Storm They Never Saw Coming", subtitle: "10/10 propositions · Analysis #48", file: "/documents/forensic-analyses/forensic-analysis-48-quiet-storm-they-never-saw-coming.pdf", cover: "cover-quiet-storm-they-never-saw-coming", category: "Forensic Analyses" },
  { title: "They Dug For Dirt But Unearthed Diamonds", subtitle: "10/10 propositions · Analysis #49", file: "/documents/forensic-analyses/forensic-analysis-49-they-dug-for-dirt-but-unearthed-diamonds.pdf", cover: "cover-they-dug-for-dirt-but-unearthed-diamonds", category: "Forensic Analyses" },
  { title: "The Confession They've Been Choking On", subtitle: "12/12 propositions · Analysis #50", file: "/documents/forensic-analyses/forensic-analysis-50-confession-theyve-been-choking-on.pdf", cover: "cover-confession-theyve-been-choking-on", category: "Forensic Analyses" },
  { title: "The Loudest Hate Always Comes From The Weakest Link", subtitle: "10/10 propositions · Analysis #51", file: "/documents/forensic-analyses/forensic-analysis-51-loudest-hate-weakest-link.pdf", cover: "cover-loudest-hate-weakest-link", category: "Forensic Analyses" },
  { title: "You Didn't Chase The Throne — You Became One", subtitle: "14/14 propositions · Analysis #52", file: "/documents/forensic-analyses/forensic-analysis-52-you-didnt-chase-the-throne-you-became-one.pdf", cover: "cover-you-didnt-chase-the-throne-you-became-one", category: "Forensic Analyses" },
  { title: "They Attacked You Without Knowing Who You Were", subtitle: "14/14 propositions · Analysis #53", file: "/documents/forensic-analyses/forensic-analysis-53-they-attacked-you-without-knowing.pdf", cover: "cover-they-attacked-without-knowing", category: "Forensic Analyses" },
  { title: "When A Pack Of Wolves Can't Take Down A Lion", subtitle: "14/14 propositions · Analysis #54", file: "/documents/forensic-analyses/forensic-analysis-54-when-pack-of-wolves.pdf", cover: "cover-when-pack-of-wolves", category: "Forensic Analyses" },
  { title: "When The Wrong People Get Nervous", subtitle: "14/14 propositions · Analysis #55", file: "/documents/forensic-analyses/forensic-analysis-55-when-wrong-people-get-nervous.pdf", cover: "cover-when-wrong-people-get-nervous", category: "Forensic Analyses" },
  { title: "Illegal Level Genius — The New Equation", subtitle: "14/14 propositions · Analysis #56", file: "/documents/forensic-analyses/forensic-analysis-56-illegal-level-genius.pdf", cover: "cover-illegal-level-genius", category: "Forensic Analyses" },
  { title: "Prophetic Declaration: They Used To Whisper About You", subtitle: "12/11 propositions · Analysis #57", file: "/documents/forensic-analyses/forensic-analysis-57-prophetic-declaration.pdf", cover: "cover-prophetic-declaration-forensic", category: "Forensic Analyses" },
  { title: "Prophetic F*ck You Declaration", subtitle: "10/10 propositions · Analysis #58", file: "/documents/forensic-analyses/forensic-analysis-58-prophetic-fck-you-declaration.pdf", cover: "cover-prophetic-fck-you-declaration", category: "Forensic Analyses" },
  { title: "God Exposes The False Sister — Support Network Was Surveillance", subtitle: "12/12 propositions · Analysis #59", file: "/documents/forensic-analyses/forensic-analysis-59-false-sister-forensic-analysis.pdf", cover: "cover-false-sister-forensic-analysis", category: "Forensic Analyses" },
  { title: "A Thousand Fell And Still Couldn't Touch You", subtitle: "12/12 propositions · Analysis #60", file: "/documents/forensic-analyses/forensic-analysis-60-thousand-fell-forensic-analysis.pdf", cover: "cover-thousand-fell-forensic-analysis", category: "Forensic Analyses" },
  { title: "They're About To Be Behind Bars — God Signed The Warrant", subtitle: "12/12 propositions · Analysis #61", file: "/documents/forensic-analyses/forensic-analysis-61-theyre-about-to-be-behind-bars.pdf", cover: "cover-theyre-about-to-be-behind-bars", category: "Forensic Analyses" },
  { title: "Beautiful Threat — The Document That Dismantles Every Remaining Defence", subtitle: "10/10 propositions · Analysis #62", file: "/documents/forensic-analyses/forensic-analysis-62-beautiful-threat.pdf", cover: "cover-beautiful-threat", category: "Forensic Analyses" },
  { title: "They Are Dying Of Shame — Prophetically Precise", subtitle: "10/10 propositions · Analysis #63", file: "/documents/forensic-analyses/forensic-analysis-63-dying-of-shame.pdf", cover: "cover-dying-of-shame", category: "Forensic Analyses" },
];

const VIDEO_ANALYSES: Doc[] = [
  { title: "A Divine Reckoning To Those Who Chose This", subtitle: "YouTube video analysis", file: "/documents/video-analyses/a-divine-reckoning-to-those-who-chose-this-dr-richard-mclean.pdf", cover: "cover-divine-reckoning", category: "Video Analyses" },
  { title: "Beautiful Menace Forensic Report — 15 Claims Corroborated", subtitle: "YouTube video analysis", file: "/documents/video-analyses/video-analysis-beautiful-menace-forensic-report-15-claims-corroborated.pdf", cover: "cover-beautiful-threat", category: "Video Analyses" },
  { title: "Chosen One It Is Over — Reflection", subtitle: "YouTube video analysis", file: "/documents/video-analyses/video-analysis-chosen-one-it-is-over-reflection.pdf", cover: "cover-chosen-one-outcast-leader", category: "Video Analyses" },
  { title: "Heaven Stood For You — 14 Claims Corroborated", subtitle: "YouTube video analysis", file: "/documents/video-analyses/video-analysis-heaven-stood-for-you-14-claims-corroborated.pdf", cover: "cover-heaven-exposes-the-sister", category: "Video Analyses" },
  { title: "Illegal Level Genius — New Equation: 14 Claims Corroborated", subtitle: "YouTube video analysis", file: "/documents/video-analyses/video-analysis-illegal-level-genius-new-equation-14-claims-corroborated.pdf", cover: "cover-illegal-level-genius", category: "Video Analyses" },
  { title: "When Pack Of Wolves Can't Take Down A Lion — 14 Claims Corroborated", subtitle: "YouTube video analysis", file: "/documents/video-analyses/video-analysis-when-pack-of-wolves-cant-take-down-lion-14-claims-corroborated.pdf", cover: "cover-when-pack-of-wolves", category: "Video Analyses" },
  { title: "When Wrong People Get Nervous — 14 Claims Corroborated", subtitle: "YouTube video analysis", file: "/documents/video-analyses/video-analysis-when-wrong-people-get-nervous-14-claims-corroborated.pdf", cover: "cover-when-wrong-people-get-nervous", category: "Video Analyses" },
  { title: "You Detonated The Narrative — 15 Claims Corroborated", subtitle: "YouTube video analysis", file: "/documents/video-analyses/video-analysis-you-detonated-the-narrative-15-claims-corroborated.pdf", cover: "cover-you-detonated-narrative", category: "Video Analyses" },
];

const MASTER_DOCUMENTS: Doc[] = [
  // ICC / UNHCR / Legal
  { title: "UNHCR ICC Cryptographic Evidence Package", subtitle: "Submitted to The Hague & Geneva", file: "/documents/unhcr-icc-cryptographic-evidence-package.pdf", cover: "cover-unhcr-icc-evidence-package", category: "ICC / UNHCR / Legal" },
  { title: "Urgent Request For Refuge And Asylum", subtitle: "Formal application — UNHCR Geneva", file: "/documents/urgent_request_for_refuge_and_asylum.pdf", cover: "cover-ndis-pid-political-prisoner", category: "ICC / UNHCR / Legal" },
  { title: "Crimes Against Humanity — Final Demand", subtitle: "ICC Article 7 formal submission", file: "/documents/crimes_against_humanity_final_demand.pdf", cover: "cover-master-evidence-register", category: "ICC / UNHCR / Legal" },
  { title: "Critical Legal Examination", subtitle: "Comprehensive forensic legal review", file: "/documents/critical-legal-examination.pdf", cover: "cover-critical-legal", category: "ICC / UNHCR / Legal" },
  { title: "Master Consolidated Legal Record", subtitle: "All legal proceedings documented", file: "/documents/master-consolidated-legal-record.pdf", cover: "cover-master-forensic-report", category: "ICC / UNHCR / Legal" },
  { title: "Comprehensive Case — Systematic Persecution", subtitle: "Primary case document", file: "/documents/comprehensive-case-systematic-persecution.pdf", cover: "cover-master-forensic-report", category: "ICC / UNHCR / Legal" },
  { title: "Most Comprehensive Case Of Systematic Persecution", subtitle: "Extended edition", file: "/documents/most-comprehensive-case-systematic-persecution.pdf", cover: "cover-master-forensic-report", category: "ICC / UNHCR / Legal" },
  { title: "Systemic Endangerment Of Whistleblowers — Institutional Dossier", subtitle: "Full dossier on institutional failures", file: "/documents/systemic-endangerment-of-whistleblowers-institutional-dossier.pdf", cover: "cover-master-forensic-report", category: "ICC / UNHCR / Legal" },
  { title: "Official Whistleblower Torture Dossier", subtitle: "Dr. Richard William McLean", file: "/documents/official-whistleblower-torture-dossier-dr-richard-william-mclean.pdf", cover: "cover-whistleblower-torture-dossier", category: "ICC / UNHCR / Legal" },
  { title: "Written Reasons — Cover Letter For Parties", subtitle: "Formal legal correspondence", file: "/documents/written-reasons-cover-letter-for-parties.pdf", cover: "cover-legal-research", category: "ICC / UNHCR / Legal" },
  { title: "SIA Lagos Federal Court — PID March 2023", subtitle: "Public Interest Disclosure — Federal Court", file: "/documents/sia-lagos-federal-court-pid-march-2023.pdf", cover: "cover-pid-act-analysis", category: "ICC / UNHCR / Legal" },
  { title: "McLean ComCare Final Legal Proceedings", subtitle: "ComCare proceedings documentation", file: "/documents/mclean-comcare-final-legal-proceedings.pdf", cover: "cover-legal-research", category: "ICC / UNHCR / Legal" },
  { title: "S122 Redacted Document", subtitle: "Redacted government document — official record", file: "/documents/s122_redacted_document.pdf", cover: "cover-legal-research", category: "ICC / UNHCR / Legal" },
  { title: "Live Murder Case — Email April 13 2026", subtitle: "Active murder case documentation", file: "/documents/live-murder-case-email-april-13-2026.pdf", cover: "cover-police-complicity-death-threat", category: "ICC / UNHCR / Legal" },
  { title: "Constructive Elimination Under Colour Of Law", subtitle: "Legal analysis of persecution mechanism", file: "/documents/constructive_elimination_under_colour_of_law.pdf", cover: "cover-legal-research", category: "ICC / UNHCR / Legal" },

  // Government Records
  { title: "State And Federal MP Letter", subtitle: "Formal correspondence to Members of Parliament", file: "/documents/state_and_federal_mp_letter.pdf", cover: "cover-legal-research", category: "Government Records" },
  { title: "COAG NDIS Government Documentation", subtitle: "Official COAG & NDIS records", file: "/documents/coag-ndis-government-documentation.pdf", cover: "cover-ndis-pid-political-prisoner", category: "Government Records" },
  { title: "FIH Third Party Authorisation", subtitle: "Official third-party authorisation document", file: "/documents/fih_third_party_authorisation.pdf", cover: "cover-legal-research", category: "Government Records" },
  { title: "God's Media Release", subtitle: "Official public statement / media release", file: "/documents/gods_media_release.pdf", cover: "cover-legal-research", category: "Government Records" },
  { title: "Honey Trap — Phillip Glass (TAG NSW)", subtitle: "Documented entrapment by government operative", file: "/documents/honey-trap-phillip-glass.pdf", cover: "cover-honeytrap-infiltration", category: "Government Records" },
  { title: "33rd Degree Shadow Analysts", subtitle: "Documented surveillance operation", file: "/documents/33rd-degree-shadow-analysts.pdf", cover: "cover-33rd-degree-shadow-analysts", category: "Government Records" },

  // NDIS & Medical
  { title: "NDIS PID — Official Response", subtitle: "Official NDIS Public Interest Disclosure response", file: "/documents/ndis-pid-official-response.pdf", cover: "cover-ndis-pid-political-prisoner", category: "NDIS & Medical" },
  { title: "NDIS PID — Political Prisoner", subtitle: "Dr. Richard McLean designated political prisoner", file: "/documents/ndis-pid-political-prisoner-dr-rich-mclean.pdf", cover: "cover-ndis-pid-political-prisoner", category: "NDIS & Medical" },
  { title: "NDIS Plan Approval — November 2025", subtitle: "Official NDIS plan approval document", file: "/documents/ndis-plan-approval-nov-2025.pdf", cover: "cover-ndis-pid-political-prisoner", category: "NDIS & Medical" },
  { title: "Interim BSP 2024 — SILS Recommendation", subtitle: "Behaviour Support Plan — Richard McLean", file: "/documents/interim-bsp-2024-sils-recommendation-richard-mclean.pdf", cover: "cover-ndis-pid-political-prisoner", category: "NDIS & Medical" },
  { title: "OT SIL Report — Recommending SILS", subtitle: "Occupational Therapy SIL recommendation", file: "/documents/ot-sil-report-recommending-sils-richard-mclean.pdf", cover: "cover-ndis-pid-political-prisoner", category: "NDIS & Medical" },
  { title: "Legal Demand — Failure To Provide SIL Support", subtitle: "Formal legal demand for NDIS support", file: "/documents/legal-demand-notice-failure-to-provide-sil-support.pdf", cover: "cover-ndis-pid-political-prisoner", category: "NDIS & Medical" },
  { title: "Dr. Horgan McLean — Confidential Psychiatric Assessment", subtitle: "Independent psychiatric assessment documentation", file: "/documents/dr-horgan-mclean-confidential-psychiatric-assessment.pdf", cover: "cover-ai-personality-profile", category: "NDIS & Medical" },
  { title: "Psychiatric Assessment — Asylum Documentation", subtitle: "Asylum support psychiatric documentation", file: "/documents/psychiatric_assessment_asylum_documentation.pdf", cover: "cover-ai-personality-profile", category: "NDIS & Medical" },
  { title: "2.87% Survival — Clinical Death Documentation", subtitle: "2021 clinical death — documented survival", file: "/documents/2.87_percent_survival.pdf", cover: "cover-survival-was-the-warning", category: "NDIS & Medical" },
  { title: "V2K Electronic Harassment — Evidence Review", subtitle: "Documented electronic harassment evidence", file: "/documents/v2k-electronic-harassment-evidence-review.pdf", cover: "cover-v2k-electronic-harassment", category: "NDIS & Medical" },

  // Evidence
  { title: "Impartial AI Analysis — 2,343 Documents", subtitle: "Independent AI corroboration of entire archive", file: "/documents/impartial-ai-analysis-2343-documents.pdf", cover: "cover-master-forensic-report", category: "Evidence" },
  { title: "Impartial AI Abstract — YouTube Channel Evidence", subtitle: "AI analysis of video channel evidence", file: "/documents/impartial-ai-abstract-youtube-channel-evidence.pdf", cover: "cover-master-forensic-report", category: "Evidence" },
  { title: "Impartial AI Statement Of Significance", subtitle: "Third-party AI statement confirming significance", file: "/documents/impartial-ai-statement-of-significance.pdf", cover: "cover-master-forensic-report", category: "Evidence" },
  { title: "Ben (DSW) — Text Messages Assassination Evidence", subtitle: "NDIS disability worker assassination evidence texts", file: "/documents/ben-dsw-disability-ndis-provider-text-messages-assassination-evidence.pdf", cover: "cover-police-complicity-death-threat", category: "Evidence" },
  { title: "Police Complicity — Death Threat Documentation", subtitle: "Documented police non-response to death threat", file: "/documents/police-complicity-death-threat-documentation.pdf", cover: "cover-police-complicity-death-threat", category: "Evidence" },
  { title: "Master Forensic Evidence Report", subtitle: "Definitive forensic evidence compilation", file: "/documents/master-forensic-evidence-report.pdf", cover: "cover-master-forensic-report", category: "Evidence" },
  { title: "Forensic Meltdown Report", subtitle: "Point of no return — institutional exposure", file: "/documents/forensic-meltdown-report.pdf", cover: "cover-master-forensic-report", category: "Evidence" },
  { title: "The Full Pattern — Forensic Evidence", subtitle: "Pattern recognition across 35 years", file: "/documents/the-full-pattern-forensic-evidence.pdf", cover: "cover-the-full-pattern", category: "Evidence" },
  { title: "Comprehensive Statement — Digital Architecture", subtitle: "Digital infrastructure of the persecution", file: "/documents/comprehensive-statement-digital-architecture.pdf", cover: "cover-master-forensic-report", category: "Evidence" },
  { title: "After Forensic Statement — Evidence Record", subtitle: "Post-forensic analysis evidence record", file: "/documents/after-forensic-statement-evidence-record.pdf", cover: "cover-after-forensic-statement", category: "Evidence" },
  { title: "Precision As Evidence — Evidentiary Synthesis", subtitle: "Synthesis of all evidentiary precision", file: "/documents/precision_as_evidence_evidentiary_synthesis.pdf", cover: "cover-master-forensic-report", category: "Evidence" },
  { title: "Universal Silence — Non Acknowledgement", subtitle: "Documented institutional silence as evidence", file: "/documents/universal-silence-non-acknowledgement.pdf", cover: "cover-master-forensic-report", category: "Evidence" },
  { title: "Confinement By Erasure — Threat By Blade", subtitle: "Documented methods of confinement and threat", file: "/documents/confinement_by_erasure_threat_by_blade.pdf", cover: "cover-silent-assassin", category: "Evidence" },
  { title: "The Paper Trail Of Erasure", subtitle: "Paper trail documenting systematic erasure", file: "/documents/the-paper-trail-of-erasure.pdf", cover: "cover-master-forensic-report", category: "Evidence" },
  { title: "Document That Cannot Be Erased", subtitle: "Permanent blockchain-verified record", file: "/documents/document_that_cannot_be_erased.pdf", cover: "cover-master-forensic-report", category: "Evidence" },
  { title: "White Psyops — Invisible Warfare Against Cosmic Witness", subtitle: "Documented psychological warfare operations", file: "/documents/white-psyops-invisible-warfare-against-cosmic-witness.pdf", cover: "cover-white-psyops", category: "Evidence" },
  { title: "Universal Master Command — AI Analysis", subtitle: "AI command analysis of the archive", file: "/documents/universal_master_command_ai_analysis.pdf", cover: "cover-master-forensic-report", category: "Evidence" },

  // Testimony
  { title: "The Testimony Of Dr. Richard William McLean", subtitle: "Primary personal testimony", file: "/documents/the-testimony-of-dr-richard-william-mclean.pdf", cover: "cover-testimony-dr-richard-mclean", category: "Testimony" },
  { title: "Retrospective Statement Of Treatment", subtitle: "Complete retrospective on 35 years of treatment", file: "/documents/retrospective_statement_of_treatment.pdf", cover: "cover-retrospective-statement", category: "Testimony" },
  { title: "Public Statement — Dr. Richard McLean", subtitle: "Official public statement", file: "/documents/public-statement-dr-richard-mclean.pdf", cover: "cover-testimony-dr-richard-mclean", category: "Testimony" },
  { title: "Immortal Testimony — McLean 2025", subtitle: "2025 testimony — permanent record", file: "/documents/immortal-testimony-mclean-2025.pdf", cover: "cover-testimony-dr-richard-mclean", category: "Testimony" },
  { title: "Declaration Of Sovereignty", subtitle: "Formal declaration of personal sovereignty", file: "/documents/declaration_of_sovereignty.pdf", cover: "cover-testimony-dr-richard-mclean", category: "Testimony" },
  { title: "Declaration Of Breakthrough And Identity As Chosen One", subtitle: "Formal identity declaration", file: "/documents/declaration-of-breakthrough-and-identity-as-chosen-one.pdf", cover: "cover-chosen-one-outcast-leader", category: "Testimony" },
  { title: "Richard McLean — Australia", subtitle: "National identity documentation", file: "/documents/richard_mclean_australia.pdf", cover: "cover-testimony-dr-richard-mclean", category: "Testimony" },
  { title: "The Perfect Mother Myth — Familial Betrayal Testimony", subtitle: "Documented familial betrayal and abandonment", file: "/documents/the-perfect-mother-myth-familial-betrayal-whistleblower-testimony.pdf", cover: "cover-testimony-dr-richard-mclean", category: "Testimony" },
  { title: "AI Personality Profile — Barran Dodger", subtitle: "Independent AI personality analysis", file: "/documents/ai_personality_profile_barran_dodger.pdf", cover: "cover-ai-personality-profile", category: "Testimony" },
  { title: "Chosen — Through Fire: Forensic Origin Document", subtitle: "Origin documentation of the persecution", file: "/documents/chosen-through-fire-forensic-origin-document.pdf", cover: "cover-chosen-one-outcast-leader", category: "Testimony" },
  { title: "Chosen One — You Were Framed", subtitle: "Documentation of manufactured allegation", file: "/documents/chosen_one_you_were_framed.pdf", cover: "cover-chosen-one-outcast-leader", category: "Testimony" },

  // Essays & Academic
  { title: "100 Absurdities Of My Life", subtitle: "100-point documented absurdity record", file: "/documents/100-absurdities-of-my-life.pdf", cover: "cover-100-absurdities", category: "Essays & Academic" },
  { title: "The 100 Questions Defining Trial And Human Sacrifice", subtitle: "100 unanswered questions for the perpetrators", file: "/documents/the-100-questions-defining-trial-and-human-sacrifice-of-dr-barran-dodger.pdf", cover: "cover-100-absurdities", category: "Essays & Academic" },
  { title: "Barran Dodger — Evidence-Based Academic Profile", subtitle: "Academic-grade persecution profile", file: "/documents/barran-dodger-evidence-based-academic-profile-modern-persecution.pdf", cover: "cover-academic-profile-persecution", category: "Essays & Academic" },
  { title: "Digital Oppression — 100,000 Word Essay", subtitle: "Definitive 100k-word analysis of digital oppression", file: "/documents/digital_oppression_100000_word_essay.pdf", cover: "cover-master-forensic-report", category: "Essays & Academic" },
  { title: "Targeted Individual Handbook", subtitle: "Reference handbook for targeted individuals", file: "/documents/targeted-individual-handbook.pdf", cover: "cover-targeted-individual-handbook", category: "Essays & Academic" },
  { title: "The Paradox Of Persecution", subtitle: "Academic paper on persecution paradox", file: "/documents/paradox-of-persecution-academic-paper.pdf", cover: "cover-paradox-persecution", category: "Essays & Academic" },
  { title: "The Paradox Of Persecution (Extended)", subtitle: "Extended edition", file: "/documents/the-paradox-of-persecution.pdf", cover: "cover-paradox-persecution", category: "Essays & Academic" },
  { title: "Joseph's Coat — Barran's Mantle", subtitle: "Biblical prophetic essay", file: "/documents/josephs-coat-barrans-mantle.pdf", cover: "cover-josephs-coat-barrans-mantle", category: "Essays & Academic" },
  { title: "Joseph's Coat — Prophetic Parallel", subtitle: "Extended prophetic parallel analysis", file: "/documents/josephs-coat-barrans-mantle-prophetic-parallel.pdf", cover: "cover-josephs-coat-barrans-mantle", category: "Essays & Academic" },
  { title: "The Sleeper Agent Of Truth", subtitle: "Long-form essay on the whistleblower archetype", file: "/documents/the-sleeper-agent-of-truth.pdf", cover: "cover-sleeper-agent-of-truth", category: "Essays & Academic" },
  { title: "History Has A Strange Habit", subtitle: "Historical pattern recognition essay", file: "/documents/history-has-a-strange-habit.pdf", cover: "cover-history-keeps-receipts", category: "Essays & Academic" },
  { title: "I Choose Silence", subtitle: "Essay on strategic silence as weapon", file: "/documents/i-choose-silence.pdf", cover: "cover-i-choose-silence", category: "Essays & Academic" },
  { title: "They Bought Off Judges", subtitle: "Essay — judicial corruption documentation", file: "/documents/they-bought-off-judges.pdf", cover: "cover-they-bought-off-judges", category: "Essays & Academic" },
  { title: "Kill Him — Timestamped Essay", subtitle: "Timestamped assassination order essay", file: "/documents/kill-him-timestamped-essay-by-barran-dodger-chosen-to-rise.pdf", cover: "cover-police-complicity-death-threat", category: "Essays & Academic" },
  { title: "Version You Tried To Destroy Is Gone", subtitle: "Essay on transformation through persecution", file: "/documents/version-you-tried-to-destroy-is-gone.pdf", cover: "cover-master-forensic-report", category: "Essays & Academic" },
  { title: "Government Called Him Delusional", subtitle: "Documenting the psychiatric weapon", file: "/documents/government-called-him-delusional.pdf", cover: "cover-master-forensic-report", category: "Essays & Academic" },
  { title: "No One Could Be That Smart", subtitle: "Intelligence profiling essay", file: "/documents/no-one-could-be-that-smart.pdf", cover: "cover-no-one-could-be-that-smart", category: "Essays & Academic" },
  { title: "Now Everybody Knows", subtitle: "Declaration of public knowledge", file: "/documents/now-everybody-knows.pdf", cover: "cover-now-everybody-knows", category: "Essays & Academic" },
  { title: "They Set A Perfect Trap", subtitle: "Documentation of the entrapment", file: "/documents/they-set-a-perfect-trap.pdf", cover: "cover-master-forensic-report", category: "Essays & Academic" },
  { title: "The Trap They Set Became The Proof", subtitle: "Entrapment as self-defeating evidence", file: "/documents/the_trap_they_set_became_the_proof.pdf", cover: "cover-trap-they-set-became-proof", category: "Essays & Academic" },
  { title: "They Thought You Would Break", subtitle: "Essay on resilience under persecution", file: "/documents/they-thought-you-would-break.pdf", cover: "cover-master-forensic-report", category: "Essays & Academic" },
  { title: "They Hurt You — Angered God", subtitle: "Spiritual essay on divine response to injustice", file: "/documents/they-hurt-you-angered-god.pdf", cover: "cover-master-forensic-report", category: "Essays & Academic" },
  { title: "Chosen Ones — Your Story Inspires Many", subtitle: "Inspirational testimony essay", file: "/documents/chosen-ones-your-story-inspires-many.pdf", cover: "cover-chosen-ones-your-story", category: "Essays & Academic" },
  { title: "Silent Checkmate", subtitle: "Chess metaphor for the persecution endgame", file: "/documents/silent-checkmate.pdf", cover: "cover-silent-checkmate", category: "Essays & Academic" },
  { title: "The Certified Record Of Barran Dodger", subtitle: "Complete certified documentary record", file: "/documents/the-certified-record-of-barran-dodger.pdf", cover: "cover-certified-record", category: "Essays & Academic" },
  { title: "1000 Years Of Peace", subtitle: "Prophetic vision of post-reckoning peace", file: "/documents/1000_years_of_peace.pdf", cover: "cover-master-forensic-report", category: "Essays & Academic" },
  { title: "I Tried To Kill Barran Dodger (Satire)", subtitle: "Satirical exposure of the persecution", file: "/documents/i_tried_to_kill_barran_dodger_satire_2.pdf", cover: "cover-master-forensic-report", category: "Essays & Academic" },
  { title: "Alien Races Disclosure", subtitle: "Cosmological testimony document", file: "/documents/alien_races_disclosure.pdf", cover: "cover-master-forensic-report", category: "Essays & Academic" },

  // Gospel & Prophetic
  { title: "Canonical Gospel — Barran Dodger", subtitle: "Primary canonical gospel document", file: "/documents/canonical_gospel_barran_dodger.pdf", cover: "cover-gospel-canonical", category: "Gospel & Prophetic" },
  { title: "123 Gospels — Barran Dodger", subtitle: "Complete 123-gospel archive", file: "/documents/123_gospels_barran_dodger.pdf", cover: "cover-gospel-canonical", category: "Gospel & Prophetic" },
  { title: "Atherion — Witnessed Gospel Complete", subtitle: "Complete witnessed gospel of Atherion", file: "/documents/atherion_witnessed_gospel_complete.pdf", cover: "cover-atherion-witnessed", category: "Gospel & Prophetic" },
  { title: "Gospel Of Barran Dodger — Victory Vol 2", subtitle: "Victory gospel — volume 2", file: "/documents/gospel_of_barran_dodger_victory_2.pdf", cover: "cover-gospel-canonical", category: "Gospel & Prophetic" },
  { title: "Gospel Of The Eliven Chain", subtitle: "Eliven Chain gospel — primary", file: "/documents/gospel_of_the_eliven_chain.pdf", cover: "cover-gospel-eliven", category: "Gospel & Prophetic" },
  { title: "Gospel Of The Eliven Chain Vol 2", subtitle: "Eliven Chain gospel — volume 2", file: "/documents/gospel_of_the_eliven_chain_2.pdf", cover: "cover-gospel-eliven", category: "Gospel & Prophetic" },
  { title: "Gospel Of The Enliven Chain — Master Inventory", subtitle: "Master inventory of the Enliven Chain gospel", file: "/documents/gospel_of_the_enliven_chain_master_inventory.pdf", cover: "cover-gospel-eliven", category: "Gospel & Prophetic" },
  { title: "Gospel — Eliven Chain", subtitle: "Eliven Chain gospel document", file: "/documents/gospel_eliven_chain.pdf", cover: "cover-gospel-eliven", category: "Gospel & Prophetic" },
  { title: "The Enliven Chain — Complete Gospel Archive", subtitle: "Complete Enliven Chain gospel archive", file: "/documents/the-enliven-chain-complete-gospel-archive.pdf", cover: "cover-gospel-eliven", category: "Gospel & Prophetic" },
  { title: "Eliven Chain — 144 Questions", subtitle: "144 prophetic questions of the Eliven Chain", file: "/documents/eliven_chain_144_questions.pdf", cover: "cover-144-questions", category: "Gospel & Prophetic" },
  { title: "Eliven Chain Has Been Summoned", subtitle: "Summoning document — Eliven Chain", file: "/documents/eliven_chain_has_been_summoned.pdf", cover: "cover-gospel-eliven", category: "Gospel & Prophetic" },
  { title: "Enliven Chain Has Been Summoned", subtitle: "Summoning document — Enliven Chain", file: "/documents/enliven_chain_has_been_summoned.pdf", cover: "cover-gospel-eliven", category: "Gospel & Prophetic" },
  { title: "Enliven Chain Has Been Summoned Vol 2", subtitle: "Summoning document — volume 2", file: "/documents/enliven_chain_has_been_summoned_2.pdf", cover: "cover-gospel-eliven", category: "Gospel & Prophetic" },
  { title: "Twelve Gospel Essays", subtitle: "Twelve prophetic gospel essays", file: "/documents/twelve_gospel_essays.pdf", cover: "cover-gospel-canonical", category: "Gospel & Prophetic" },
  { title: "Cosmic Scroll Of Ten", subtitle: "Ten commandments of cosmic reckoning", file: "/documents/cosmic_scroll_of_ten.pdf", cover: "cover-gospel-canonical", category: "Gospel & Prophetic" },
  { title: "Ten Commandments", subtitle: "The ten commandments of the testimony", file: "/documents/ten_commandments.pdf", cover: "cover-gospel-canonical", category: "Gospel & Prophetic" },
  { title: "God And Justice — By Barran Dodger", subtitle: "Theological essay on divine justice", file: "/documents/god-and-justice-by-barran-dodger.pdf", cover: "cover-gospel-canonical", category: "Gospel & Prophetic" },
  { title: "God's Grace — Barran Dodger", subtitle: "Essay on grace in persecution", file: "/documents/gods-grace-barran-dodger.pdf", cover: "cover-gospel-canonical", category: "Gospel & Prophetic" },
  { title: "Prophetic Manifesto — Barran Dodger", subtitle: "Complete prophetic manifesto", file: "/documents/prophetic_manifesto_barran_dodger.pdf", cover: "cover-prophetic-manifesto", category: "Gospel & Prophetic" },
  { title: "Prophetic Testimony — Biblical Evidence Correlation", subtitle: "Biblical correlation of the testimony", file: "/documents/prophetic-testimony-biblical-evidence-correlation.pdf", cover: "cover-prophetic-testimony", category: "Gospel & Prophetic" },
  { title: "The Joseph Parallel — Prophetic Narrative", subtitle: "Joseph/McLean prophetic parallel", file: "/documents/the_joseph_parallel_prophetic_narrative.pdf", cover: "cover-josephs-coat-barrans-mantle", category: "Gospel & Prophetic" },
  { title: "Sacred Declaration — Master Record", subtitle: "Master sacred declaration document", file: "/documents/sacred_declaration_master_record.pdf", cover: "cover-gospel-canonical", category: "Gospel & Prophetic" },
  { title: "Tribunal Declaration — Cosmic Court", subtitle: "Declaration before the cosmic tribunal", file: "/documents/tribunal_declaration_cosmic_court.pdf", cover: "cover-gospel-canonical", category: "Gospel & Prophetic" },
  { title: "Apotheosis", subtitle: "Documentation of transcendence through persecution", file: "/documents/apotheosis.pdf", cover: "cover-gospel-canonical", category: "Gospel & Prophetic" },
  { title: "Living Scroll — Unkillable Witness", subtitle: "Living testimony — permanent record", file: "/documents/living_scroll_unkillable_witness.pdf", cover: "cover-gospel-canonical", category: "Gospel & Prophetic" },
  { title: "Witness Before Tribunal Of Humanity", subtitle: "Formal witness statement to humanity", file: "/documents/witness_before_tribunal_of_humanity.pdf", cover: "cover-witness-tribunal-humanity", category: "Gospel & Prophetic" },
  { title: "Witness — Resonantia Eternalis", subtitle: "Eternal resonance witness document", file: "/documents/witness_resonantia_eternalis.pdf", cover: "cover-witness-resonantia-eternalis", category: "Gospel & Prophetic" },
  { title: "When The Machine Wakes For You", subtitle: "Essay on AI and divine alignment", file: "/documents/when_the_machine_wakes_for_you.pdf", cover: "cover-gospel-canonical", category: "Gospel & Prophetic" },
  { title: "Divine Exam", subtitle: "The divine examination of the persecution", file: "/documents/divine-exam.pdf", cover: "cover-divine-exam", category: "Gospel & Prophetic" },
];

const ALL_DOCS: Doc[] = [...FORENSIC_ANALYSES, ...VIDEO_ANALYSES, ...MASTER_DOCUMENTS];

const CAT_ICONS: Record<string, any> = {
  "Forensic Analyses": <Cpu size={13} className="shrink-0" />,
  "Video Analyses": <Globe size={13} className="shrink-0" />,
  "ICC / UNHCR / Legal": <Scale size={13} className="shrink-0" />,
  "Government Records": <Lock size={13} className="shrink-0" />,
  "NDIS & Medical": <Heart size={13} className="shrink-0" />,
  "Evidence": <Shield size={13} className="shrink-0" />,
  "Testimony": <FileText size={13} className="shrink-0" />,
  "Essays & Academic": <BookOpen size={13} className="shrink-0" />,
  "Gospel & Prophetic": <Archive size={13} className="shrink-0" />,
};

const CAT_COLORS: Record<string, string> = {
  "Forensic Analyses": "text-amber-400 bg-amber-900/30 border-amber-700/40",
  "Video Analyses": "text-purple-400 bg-purple-900/30 border-purple-700/40",
  "ICC / UNHCR / Legal": "text-red-400 bg-red-900/30 border-red-700/40",
  "Government Records": "text-orange-400 bg-orange-900/30 border-orange-700/40",
  "NDIS & Medical": "text-pink-400 bg-pink-900/30 border-pink-700/40",
  "Evidence": "text-blue-400 bg-blue-900/30 border-blue-700/40",
  "Testimony": "text-green-400 bg-green-900/30 border-green-700/40",
  "Essays & Academic": "text-cyan-400 bg-cyan-900/30 border-cyan-700/40",
  "Gospel & Prophetic": "text-yellow-400 bg-yellow-900/30 border-yellow-700/40",
};

function DocCard({ doc }: { doc: Doc }) {
  const cover = doc.cover ? getCover(doc.cover) : undefined;
  const colorClass = CAT_COLORS[doc.category] || "text-zinc-400 bg-zinc-800/30 border-zinc-700/40";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl overflow-hidden flex flex-col group transition-all duration-200 hover:shadow-lg hover:shadow-black/50"
    >
      <div className="relative bg-zinc-950 aspect-[3/4] overflow-hidden">
        {cover ? (
          <img src={cover} alt={doc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-3">
            <FileText size={28} className="text-zinc-600" />
            <span className="text-zinc-600 text-[10px] text-center leading-tight">{doc.title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className={`absolute top-2 right-2 flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded border ${colorClass}`}>
          {CAT_ICONS[doc.category]}
          <span className="max-w-[60px] truncate">{doc.category}</span>
        </div>
        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-amber-600/90 text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
          <Shield size={7} /> BTC Timestamped
        </div>
      </div>
      <div className="p-3 flex flex-col gap-2 flex-1">
        <p className="text-white font-bold text-xs leading-tight line-clamp-2">{doc.title}</p>
        {doc.subtitle && <p className="text-zinc-500 text-[10px] leading-snug">{doc.subtitle}</p>}
        {doc.note && <p className="text-amber-400 text-[10px]">{doc.note}</p>}
        <div className="mt-auto pt-2">
          <a
            href={doc.file}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-500 text-white text-[10px] font-bold px-3 py-2 rounded-lg transition-colors uppercase tracking-wider"
            data-testid={`btn-download-${doc.file.split('/').pop()}`}
          >
            <Download size={11} /> Free Download
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function DigitalArchive() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const { data: archiveTimestamps } = useQuery<any[]>({
    queryKey: ['/api/bitcoin-timestamp/sos-records'],
    staleTime: 1000 * 60 * 10,
  });

  const batchTimestamp = useMutation({
    mutationFn: () => apiRequest('POST', '/api/bitcoin-timestamp/sos-page-now'),
  });

  useEffect(() => {
    batchTimestamp.mutate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = ALL_DOCS.filter(d => {
    const matchesCat = category === "All" || d.category === category;
    const q = search.toLowerCase();
    const matchesSearch = !q || d.title.toLowerCase().includes(q) || d.subtitle?.toLowerCase().includes(q) || d.category.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const catCounts: Record<string, number> = {};
  CATEGORIES.forEach(c => {
    catCounts[c] = c === "All" ? ALL_DOCS.length : ALL_DOCS.filter(d => d.category === c).length;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Complete Digital Archive — Free Forever — Dr. Richard McLean (Barran Dodger)"
        description="The permanent, unerasable digital archive of Dr. Richard William McLean. 185+ Bitcoin blockchain-timestamped PDFs: 63 forensic analyses, 8 video analyses, 123 evidence documents. Free forever. Submitted to ICC and UNHCR."
        url="https://www.barrandodger.com/digital-archive"
      />
      <Navigation />
      <FloatingShareBar />
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-20">

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-600/40 text-amber-300 text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            <Shield size={13} className="animate-pulse" /> Bitcoin Blockchain Timestamped — Permanent — Unerasable
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
            The Complete<br />
            <span className="text-amber-400">Digital Archive</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto mb-3 leading-relaxed">
            Every document. Every analysis. Every testimony. Every gospel. Every video examination. Every piece of evidence. <strong className="text-white">Free forever. Permanently embedded in the digital infrastructure of humanity.</strong>
          </p>
          <p className="text-zinc-500 text-sm max-w-2xl mx-auto">
            Dr. Richard William McLean (Barran Dodger) · ABN 78 833 496 164 · Submitted to ICC The Hague (Article 7) and UNHCR Geneva · 35 years of documented Australian government persecution
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {[
            { v: `${ALL_DOCS.length}+`, l: "Free PDFs" },
            { v: "63", l: "Forensic Analyses" },
            { v: "675/675", l: "Propositions Verified" },
            { v: "845", l: "Bitcoin Records" },
            { v: "378K+", l: "Downloads" },
          ].map(s => (
            <div key={s.l} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
              <div className="text-2xl font-black text-amber-400">{s.v}</div>
              <div className="text-zinc-500 text-[10px] uppercase tracking-wider mt-0.5">{s.l}</div>
            </div>
          ))}
        </motion.div>

        {/* Blockchain Banner */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="bg-gradient-to-r from-amber-950/60 via-orange-950/40 to-amber-950/60 border border-amber-600/40 rounded-xl p-4 mb-8">
          <div className="flex items-start gap-3 mb-3">
            <Shield size={18} className="text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-300 font-black text-sm uppercase tracking-widest mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse inline-block" />
                Bitcoin Blockchain Verified — OpenTimestamps Protocol
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                This archive and every document within it is permanently anchored to the Bitcoin blockchain via SHA-256 cryptographic hashing. No government, institution, or individual can alter, delete, or deny this record. It exists on the most immutable ledger in human history.
              </p>
            </div>
          </div>
          {archiveTimestamps && archiveTimestamps.length > 0 ? (
            <div className="space-y-2">
              {archiveTimestamps.map((ts: any) => (
                <div key={ts.slug} className="bg-black/50 border border-amber-700/30 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-amber-300 text-[10px] font-bold uppercase mb-0.5">{ts.filename || ts.slug}</p>
                    <p className="text-zinc-400 font-mono text-[10px] break-all">SHA-256: {ts.sha256}</p>
                    {ts.submittedAt && <p className="text-zinc-600 text-[9px] mt-0.5">Submitted: {new Date(ts.submittedAt).toUTCString()}</p>}
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a href={`https://opentimestamps.org/timestamp/${ts.sha256}`} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-amber-700 hover:bg-amber-600 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition-colors uppercase tracking-wider whitespace-nowrap"
                      data-testid={`btn-ots-verify-${ts.slug}`}>
                      <ExternalLink size={9} /> Verify
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-2">
              <p className="text-amber-400 text-xs font-mono animate-pulse">⛏ Connecting to Bitcoin blockchain calendar...</p>
            </div>
          )}
        </motion.div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search all documents..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-amber-600/60 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
              data-testid="input-archive-search"
            />
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs shrink-0">
            <Filter size={13} />
            <span>{filtered.length} documents</span>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              data-testid={`btn-cat-${c.toLowerCase().replace(/\s+/g, '-')}`}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                category === c
                  ? "bg-amber-600 border-amber-500 text-white"
                  : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
              }`}
            >
              {c === "All" ? <Archive size={11} /> : CAT_ICONS[c]}
              {c} <span className="opacity-60">({catCounts[c] || 0})</span>
            </button>
          ))}
        </div>

        {/* Document grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-zinc-600">
            <FileText size={40} className="mx-auto mb-3 opacity-30" />
            <p>No documents match your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map((doc, i) => (
              <DocCard key={`${doc.file}-${i}`} doc={doc} />
            ))}
          </div>
        )}

        {/* Footer declaration */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-16 text-center border-t border-zinc-800 pt-10">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-xl p-6 max-w-2xl mx-auto">
            <Shield size={20} className="text-amber-400 shrink-0" />
            <div className="text-left">
              <p className="text-amber-300 font-black text-sm mb-1">This Archive Cannot Be Erased</p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Every document in this archive is permanently anchored to the Bitcoin blockchain via OpenTimestamps. The SHA-256 cryptographic hashes are verifiable by any person on Earth, forever. This record has been submitted to the International Criminal Court (The Hague) under Article 7 and the United Nations High Commissioner for Refugees (UNHCR) in Geneva. 378,571 downloads across 6 continents. Zero institutional rebuttals. Zero.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 mb-4">
          <InlineShareStrip
            message="SHARE THIS ARCHIVE — 750+ blockchain-verified documents. They tried to erase him. They authored his evidence."
            path="/digital-archive"
          />
        </div>

      </div>
      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
