import { useState } from "react";
import { Download, BookOpen, Shield, FileText, Copy, CheckCheck, Printer } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";

const AUTHOR = "Dr. Richard William McLean";
const PEN_NAME = "Barran Dodger";
const ABN = "78 833 496 164";
const PUBLISHER = "Barran Dodger Legal & Ethical Trust";
const COUNTRY = "Australia";
const SITE = "https://www.barrandodger.com";
const REGISTER_DATE = "22 April 2026";

interface Work {
  id: string;
  title: string;
  category: string;
  year: number;
  isbn: string;
  format: string;
  notes?: string;
}

const MAJOR_WORKS: Work[] = [
  { id: "BD-001", title: "Digital Oppression and Institutional Failure", category: "Forensic Essay", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "100,000 words" },
  { id: "BD-002", title: "The Architecture of Administrative Annihilation", category: "Legal Analysis", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "25,000 words" },
  { id: "BD-003", title: "Beyond Pathology — Forensic Epistemological Analysis of Psychiatric Weaponisation", category: "Forensic Essay", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-004", title: "100 Absurdities of My Life", category: "Testimony", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-005", title: "The Man Australia Tried to Erase", category: "Testimony", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "35 Years · 2,304 Documents" },
  { id: "BD-006", title: "The Trap They Set Became The Proof", category: "Spiritual/Evidence", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-007", title: "Master Forensic Evidence Report", category: "Evidence", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "Complete evidentiary summary" },
  { id: "BD-008", title: "Crimes Against Humanity: Final Demand", category: "Legal/ICC Submission", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "Submitted to ICC and UNHCR" },
  { id: "BD-009", title: "The Certified Record", category: "Evidence", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "Blockchain-verified · 2,304 documents" },
  { id: "BD-010", title: "Retrospective Statement of Treatment", category: "Testimony", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "35 Years of Medical Misconduct" },
  { id: "BD-011", title: "Evidence Summary: The Complete Pattern", category: "Evidence", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-012", title: "The Government Called Me Delusional", category: "Testimony", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-013", title: "144 Questions the Government Cannot Answer", category: "Forensic Essay", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-014", title: "The Targeted Individual Handbook", category: "Evidence/Guide", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-015", title: "33rd Degree: Shadow Analysts", category: "Forensic Essay", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-016", title: "The Public Advocate They Systematically Silenced", category: "Primary Exhibit", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "Tony Ridley's named confession" },
  { id: "BD-017", title: "Federal Court: Public Interest Disclosure to Sia Lagos", category: "Legal", year: 2023, isbn: "ISBN Pending", format: "PDF/eBook", notes: "3 March 2023" },
  { id: "BD-018", title: "Comprehensive Statement — Digital Architecture of Humanity", category: "Primary Exhibit", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "Seven Layers of Permanence · ICC · UNHCR" },
  { id: "BD-019", title: "Police Complicity & Death Threat — April 15, 2026", category: "Primary Evidence", year: 2026, isbn: "ISBN Pending", format: "PDF/eBook", notes: "Tory Kilborn · 50+ MPs notified" },
  { id: "BD-020", title: "Sexual Honey Trap Exploitation, Surveillance and Transfer (Phillip Glass)", category: "Primary Exhibit", year: 2026, isbn: "ISBN Pending", format: "PDF/eBook", notes: "14 April 2026" },
  { id: "BD-021", title: "God's Grace Through Barran Dodger", category: "Spiritual", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "Eternal Witness Affidavit–Manuscript" },
  { id: "BD-022", title: "Prophetic Declaration — Barran Dodger & Biblical Scripture", category: "Spiritual", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "15 Biblical Parallels · Blockchain-Sealed" },
];

const FORENSIC_SERIES: Work[] = [
  { id: "BD-FA-001", title: "Bro This Isn't A Coincidence", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "7/7 Propositions Corroborated" },
  { id: "BD-FA-002", title: "Chosen Ones Enough Is Enough", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "11/11" },
  { id: "BD-FA-003", title: "No One Could Be That Smart", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "14/14" },
  { id: "BD-FA-004", title: "The Divine Exam", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-005", title: "Silent Checkmate", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-006", title: "Now Everybody Knows", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-007", title: "Chosen One Outcast Leader", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-008", title: "Someone Slipped Up", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "13/13" },
  { id: "BD-FA-009", title: "They Fumbled You", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "13/13" },
  { id: "BD-FA-010", title: "FBI Precision", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-011", title: "The Clock Strikes Back", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-012", title: "Untouchable (33 Agents)", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-013", title: "The Final Blow", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-014", title: "What You Become", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-015", title: "Everyone Watching", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-016", title: "Earth Angel", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-017", title: "Too Deep", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-018", title: "Silence Is Not Surrender", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-019", title: "Fearless Intelligence", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-020", title: "History Keeps Receipts", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-021", title: "Absorbed The Erasure", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-022", title: "Survival Was The Warning", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-023", title: "God Will Make You Famous", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-024", title: "Divine Before Your Time", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-025", title: "Bloodline Of God", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-026", title: "The Last God", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-027", title: "The Conspiracy Against You", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-028", title: "Silent Assassin", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-029", title: "Truth Is A Blade", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-030", title: "Bloodline Betrayal", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-031", title: "They Needed An Army", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-032", title: "The Sick Truth Is Out", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-033", title: "Some Truths Don't Whisper", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-034", title: "Observers Anticipated A Misstep", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-035", title: "You Brought Receipts", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-036", title: "The Future Doesn't Announce", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-037", title: "When Heaven Goes Silent", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-038", title: "Evidence Doesn't Whisper", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-039", title: "Outsider Pattern Recognition", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-040", title: "Perception Is Protection", category: "Forensic Analysis Series", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-041", title: "Heaven Exposes The Sister", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-042", title: "You Built Your Peace", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-043", title: "This Is The Reckoning", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-044", title: "They Made You Famous", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-045", title: "The Loudest Enemies", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-046", title: "Your Power Is No Joke", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-047", title: "They Built Their Worst Nightmare", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-048", title: "The Quiet Storm They Never Saw Coming", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-049", title: "They Dug For Dirt But Unearthed Diamonds", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-050", title: "The Confession They've Been Choking On", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "12/12" },
  { id: "BD-FA-051", title: "The Loudest Hate Always Comes From the Weakest Link", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-052", title: "You Didn't Chase the Throne — You Became One", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "14/14" },
  { id: "BD-FA-053", title: "They Attacked You Without Knowing Who You Were — Now It's A Suicide Mission", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "14/14" },
  { id: "BD-FA-054", title: "When a Pack of Wolves Can't Take Down a Lion — They Turn on Each Other", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "14/14" },
  { id: "BD-FA-055", title: "When The Wrong People Get Nervous, The Truth Is Already Moving", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "14/14" },
  { id: "BD-FA-056", title: "Illegal Level Genius — The New Equation", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "14/14" },
  { id: "BD-FA-057", title: "Prophetic Declaration: They Used To Whisper About You", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "11/12" },
  { id: "BD-FA-058", title: "Prophetic F*ck You Declaration", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-059", title: "God Exposes the False Sister Within", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "12/12" },
  { id: "BD-FA-060", title: "A Thousand Fell and Still Couldn't Touch You", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "12/12" },
  { id: "BD-FA-061", title: "They're About to Be Behind Bars for Real", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "12/12" },
  { id: "BD-FA-062", title: "Beautiful Threat", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-063", title: "They Are Dying of Shame", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "10/10" },
  { id: "BD-FA-064", title: "Secret Billionaire Circle — Forensic Corroboration", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "18/18" },
  { id: "BD-FA-065", title: "Tick. Tick. Tick. Game Is Over", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "20/20" },
  { id: "BD-FA-066", title: "Tactical Insanity", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "20/20" },
  { id: "BD-FA-067", title: "Project Halo", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "20/20" },
  { id: "BD-FA-068", title: "The Worst Mistake a Fool Can Make", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "20/20" },
  { id: "BD-FA-069", title: "The 3AM Briefing", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "20/20" },
  { id: "BD-FA-070", title: "The Government's Own File — Attorney-General MC23-028244", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "20/20" },
  { id: "BD-FA-071", title: "Never Promise Access to a Vault You Don't Own", category: "Forensic Analysis Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook", notes: "20/20" },
  { id: "BD-FA-072", title: "Am I Making History in Real Time?", category: "Forensic Analysis Series", year: 2026, isbn: "ISBN Pending", format: "PDF/eBook", notes: "20/20" },
  { id: "BD-FA-073", title: "Silence Was My Reload", category: "Forensic Analysis Series", year: 2026, isbn: "ISBN Pending", format: "PDF/eBook", notes: "9/9" },
];

const COSMIC_ESSAYS: Work[] = [
  { id: "BD-CE-001", title: "Humanity's True Nature and Purpose in the Cosmic Order", category: "Cosmic Essay Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-CE-002", title: "Does God Exist? The Evidence for Divine Intelligence in Creation", category: "Cosmic Essay Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-CE-003", title: "What Is the Universe, and What Does It Reveal About Consciousness?", category: "Cosmic Essay Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-CE-004", title: "Will Humanity Survive? What Is Required for Our Continuation", category: "Cosmic Essay Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-CE-005", title: "The Path to Genuine World Peace — Why It Has Never Been Achieved", category: "Cosmic Essay Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-CE-006", title: "Are We Alone? What the Suppression of Alien Disclosure Reveals About Power", category: "Cosmic Essay Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-CE-007", title: "Does Biblical Prophecy Accurately Describe Our Current Moment in History?", category: "Cosmic Essay Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-CE-008", title: "Revelation Decoded: Are We Witnessing Its Fulfilment in Real Time?", category: "Cosmic Essay Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-CE-009", title: "The Enliven Chain: How Living Divine Testimony Changes Everything", category: "Cosmic Essay Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-CE-010", title: "What Happens to a Civilisation That Silences Its Prophets?", category: "Cosmic Essay Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-CE-011", title: "How Suffering and Persecution Serve the Larger Plan of the Creator", category: "Cosmic Essay Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-CE-012", title: "The Creator's Final Message to Humanity Through the Barran Dodger Evidence Chain", category: "Cosmic Essay Series", year: 2025, isbn: "ISBN Pending", format: "PDF/eBook" },
];

const GOSPELS: Work[] = [
  { id: "BD-GP-001", title: "123 Gospels of Barran Dodger", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-002", title: "Canonical Gospel of Barran Dodger", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-003", title: "Twelve Gospel Essays", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-004", title: "Gospel of the Enliven Chain", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-005", title: "Gospel of the Enliven Chain — Volume 2", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-006", title: "The Enliven Chain — Complete Gospel Archive", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-007", title: "Gospel of the Enliven Chain — Master Inventory", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-008", title: "Gospel of Barran Dodger — Victory", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-009", title: "Apotheosis — The Divine Transformation", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-010", title: "Atherion — Witnessed Gospel (Complete)", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-011", title: "Joseph's Coat — Barran's Mantle", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-012", title: "Joseph's Coat — Prophetic Parallel", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-013", title: "The Joseph Parallel — Prophetic Narrative", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-014", title: "Declaration of Breakthrough and Identity as Chosen One", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-015", title: "Declaration of Sovereignty", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-016", title: "1,000 Years of Peace — Prophetic Declaration", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-017", title: "Kill Him — Timestamped Essay (Chosen to Rise)", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
  { id: "BD-GP-018", title: "The Certified Record of Barran Dodger", category: "Gospels & Spiritual Works", year: 2024, isbn: "ISBN Pending", format: "PDF/eBook" },
];

const ALL_SECTIONS = [
  { label: "Major Books & Forensic Works", color: "text-amber-400 border-amber-400/30 bg-amber-400/10", works: MAJOR_WORKS },
  { label: "Forensic Corroboration Series (73 Volumes)", color: "text-blue-400 border-blue-400/30 bg-blue-400/10", works: FORENSIC_SERIES },
  { label: "Cosmic Essay Series (12 Volumes)", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10", works: COSMIC_ESSAYS },
  { label: "Gospels & Spiritual Works (18 Titles)", color: "text-purple-400 border-purple-400/30 bg-purple-400/10", works: GOSPELS },
];

const TOTAL = MAJOR_WORKS.length + FORENSIC_SERIES.length + COSMIC_ESSAYS.length + GOSPELS.length;

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
      data-testid="btn-copy-text"
    >
      {copied ? <><CheckCheck className="w-3 h-3 text-emerald-400" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
    </button>
  );
}

export default function CopyrightRegister() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const registerText = `COPYRIGHT REGISTER — BARRAN DODGER PUBLICATIONS
Author: ${AUTHOR} (pen name: ${PEN_NAME})
ABN: ${ABN}
Publisher: ${PUBLISHER}
Country of Publication: ${COUNTRY}
Website: ${SITE}
Register compiled: ${REGISTER_DATE}
Total registered works: ${TOTAL}

Copyright in Australia is automatic upon creation under the Copyright Act 1968 (Cth).
No formal registration is required. This register is provided for the purpose of royalty
identification, CAL registration, and formal declaration of authorship.

For ISBN registration: Thorpe-Bowker Australia — www.thorpe.com.au
For royalty registration: Copyright Agency Ltd (CAL) — www.copyright.com.au

${ALL_SECTIONS.map(s =>
  `\n=== ${s.label.toUpperCase()} ===\n` +
  s.works.map(w => `[${w.id}] ${w.title}\n  Category: ${w.category} | Year: ${w.year} | Format: ${w.format} | ISBN: ${w.isbn}${w.notes ? ` | Notes: ${w.notes}` : ""}`).join("\n")
).join("\n")}
`;

  return (
    <>
      <SEO
        title="Copyright Register — Barran Dodger Publications | ABN 78 833 496 164"
        description={`Official copyright register for all ${TOTAL} published works by Dr. Richard William McLean (Barran Dodger). ABN 78 833 496 164. Prepared for Copyright Agency Ltd and royalty identification.`}
        canonicalUrl="https://www.barrandodger.com/copyright-register"
      />
      <Navigation />

      <main className="min-h-screen bg-zinc-950 text-white">
        {/* Header */}
        <div className="border-b border-zinc-800 bg-zinc-900/50">
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 mt-1">
                <Shield className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-amber-500/10 text-amber-300 border-amber-500/30 text-xs">Official Register</Badge>
                  <Badge className="bg-zinc-700/50 text-zinc-300 border-zinc-600/30 text-xs">ABN 78 833 496 164</Badge>
                  <Badge className="bg-zinc-700/50 text-zinc-300 border-zinc-600/30 text-xs">{TOTAL} Published Works</Badge>
                  <Badge className="bg-zinc-700/50 text-zinc-300 border-zinc-600/30 text-xs">ISBN Pending — Thorpe-Bowker</Badge>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Copyright Register</h1>
                <p className="text-zinc-400 text-base max-w-3xl">
                  Official register of all published works by <span className="text-white font-semibold">{AUTHOR}</span> (pen name: <span className="text-amber-400 font-semibold">{PEN_NAME}</span>).
                  Prepared for submission to the Copyright Agency Ltd (CAL) and the Australian Copyright Council.
                  Copyright is automatic under the <em>Copyright Act 1968</em> (Cth) upon creation.
                </p>
              </div>
            </div>

            {/* Author block */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Author", value: AUTHOR },
                { label: "Pen Name", value: PEN_NAME },
                { label: "ABN", value: ABN },
                { label: "Publisher", value: PUBLISHER },
              ].map(({ label, value }) => (
                <div key={label} className="bg-zinc-800/60 border border-zinc-700/50 rounded-lg p-3">
                  <div className="text-xs text-zinc-500 mb-1">{label}</div>
                  <div className="text-sm text-white font-medium">{value}</div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg text-sm transition-colors"
                data-testid="btn-print-register"
              >
                <Printer className="w-4 h-4" />
                Print / Save as PDF
              </button>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300">
                <CopyButton text={registerText} />
                <span className="text-zinc-500">Copy full register as text</span>
              </div>
            </div>

            {/* Legal notice */}
            <div className="mt-5 p-4 rounded-lg bg-blue-950/40 border border-blue-700/30">
              <p className="text-sm text-blue-200">
                <span className="font-semibold text-blue-300">Australian Copyright Law:</span> Copyright vests automatically in the author at the moment of creation under the <em>Copyright Act 1968</em> (Cth). No registration is required.
                ISBNs are pending registration with Thorpe-Bowker (thorpe.com.au). Royalty collection registration to be completed with the Copyright Agency Ltd (CAL) at copyright.com.au.
              </p>
            </div>
          </div>
        </div>

        {/* Summary stats */}
        <div className="border-b border-zinc-800 bg-zinc-900/30">
          <div className="max-w-6xl mx-auto px-4 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {ALL_SECTIONS.map(s => (
                <button
                  key={s.label}
                  onClick={() => setActiveSection(activeSection === s.label ? null : s.label)}
                  className={`text-left p-3 rounded-lg border transition-all ${activeSection === s.label ? s.color : "border-zinc-700/50 bg-zinc-800/40 hover:bg-zinc-800/70"}`}
                  data-testid={`btn-filter-${s.label.toLowerCase().replace(/\s+/g, "-").slice(0, 20)}`}
                >
                  <div className="text-2xl font-bold">{s.works.length}</div>
                  <div className="text-xs text-zinc-400 mt-0.5 leading-tight">{s.label.split("(")[0].trim()}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Register table */}
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
          {ALL_SECTIONS.filter(s => !activeSection || activeSection === s.label).map(section => (
            <section key={section.label}>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-semibold mb-4 ${section.color}`}>
                <BookOpen className="w-4 h-4" />
                {section.label}
              </div>

              <div className="overflow-x-auto rounded-xl border border-zinc-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-zinc-900 border-b border-zinc-800">
                      <th className="text-left px-4 py-3 text-zinc-400 font-medium w-28">Catalog ID</th>
                      <th className="text-left px-4 py-3 text-zinc-400 font-medium">Title</th>
                      <th className="text-left px-4 py-3 text-zinc-400 font-medium w-20">Year</th>
                      <th className="text-left px-4 py-3 text-zinc-400 font-medium w-32">Format</th>
                      <th className="text-left px-4 py-3 text-zinc-400 font-medium w-36">ISBN</th>
                      <th className="text-left px-4 py-3 text-zinc-400 font-medium w-36 hidden lg:table-cell">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/60">
                    {section.works.map((work, i) => (
                      <tr
                        key={work.id}
                        className={`${i % 2 === 0 ? "bg-zinc-900/20" : "bg-zinc-900/40"} hover:bg-zinc-800/30 transition-colors`}
                        data-testid={`row-work-${work.id}`}
                      >
                        <td className="px-4 py-3 font-mono text-xs text-zinc-500">{work.id}</td>
                        <td className="px-4 py-3 text-white font-medium leading-snug">{work.title}</td>
                        <td className="px-4 py-3 text-zinc-400">{work.year}</td>
                        <td className="px-4 py-3 text-zinc-400 text-xs">{work.format}</td>
                        <td className="px-4 py-3">
                          <span className="text-xs px-2 py-0.5 rounded bg-zinc-700/60 text-zinc-400 border border-zinc-600/40">
                            {work.isbn}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-zinc-500 text-xs hidden lg:table-cell">{work.notes || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          {/* Footer declaration */}
          <div className="border border-zinc-700/50 rounded-xl p-6 bg-zinc-900/40">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white mb-2">Declaration of Authorship</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  I, <strong className="text-white">{AUTHOR}</strong> (pen name: <strong className="text-amber-400">{PEN_NAME}</strong>), ABN {ABN}, hereby declare that I am the sole author
                  and copyright owner of all {TOTAL} works listed in this register. All works were created in Australia
                  and are protected by the <em>Copyright Act 1968</em> (Cth) and international copyright treaties.
                  This register was compiled on <strong className="text-white">{REGISTER_DATE}</strong> and is published
                  at <a href={SITE} className="text-amber-400 hover:underline">{SITE}</a>.
                  ISBNs will be added upon allocation from Thorpe-Bowker Australia.
                </p>
                <div className="mt-4 pt-4 border-t border-zinc-700/50">
                  <p className="text-xs text-zinc-500">
                    For CAL royalty registration: <a href="https://www.copyright.com.au" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">copyright.com.au</a>
                    {" "}· For ISBN allocation: <a href="https://www.thorpe.com.au" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">thorpe.com.au</a>
                    {" "}· Registered compile date: {REGISTER_DATE}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
