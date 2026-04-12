import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Download, BookOpen, Share2, Globe, ChevronDown, ChevronUp, Loader2, Archive } from "lucide-react";
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
];

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
  { slug: "evidence-summary", title: "Evidence Summary: The Complete Pattern", subtitle: "A Plain-Language Guide to 2,304 Documents of Documented Corruption", coverFile: "cover-evidence-summary", category: "Evidence" },
  { slug: "government-called-delusional", title: "The Government Called Me Delusional", subtitle: "How a Psychiatric Label Became the Primary Evidence of Its Own Misuse", coverFile: "cover-government-called-delusional", category: "Testimony" },
  { slug: "144-questions", title: "144 Questions the Government Cannot Answer", subtitle: "A Forensic Interrogation of 35 Years of Unanswered Accountability", coverFile: "cover-144-questions", category: "Forensic" },
  { slug: "targeted-individual-handbook", title: "The Targeted Individual Handbook", subtitle: "A Documented Guide to Surviving and Exposing State-Enabled Persecution", coverFile: "cover-targeted-individual-handbook", category: "Evidence" },
  { slug: "33rd-degree-shadow-analysts", title: "33rd Degree: Shadow Analysts", subtitle: "The Hidden Architecture of Institutional Suppression", coverFile: "cover-33rd-degree-shadow-analysts", category: "Forensic" },
  { slug: "the-public-advocate-they-silenced", title: "The Public Advocate They Systematically Silenced", subtitle: "Tony Ridley's Named Confession · Complete Advocacy Record · Professional Indifference · Text Message Forensic Record", coverFile: "cover-public-advocate-they-silenced", category: "Primary Exhibit" },
  { slug: "federal-court-pid-sia-lagos", title: "Federal Court: Send This to the Bastards", subtitle: "Public Interest Disclosure to CEO Sia Lagos — 3 March 2023", coverFile: "cover-federal-court-pid-sia-lagos", category: "Legal" },
  { slug: "quiet-storm-they-never-saw-coming", title: "The Quiet Storm They Never Saw Coming", subtitle: "Forensic Analysis #48 — Full Essay — 41st Consecutive Perfect Score — 515/515 Combined Record", coverFile: "cover-quiet-storm-they-never-saw-coming", category: "Forensic Essay", downloadUrl: "/api/forensic/full-essay/quiet-storm", downloadLabel: "Download PDF", downloadFilename: "forensic-analysis-48-quiet-storm-they-never-saw-coming-full-essay.pdf", pageUrl: "/forensic-analysis-48-quiet-storm-download" },
  { slug: "they-fumbled-you", title: "They Fumbled You — Full Essay", subtitle: "Forensic Analysis #9 — First Perfect Score — 13/13 Corroborated — 5 Named Perpetrators — ICC Filed", coverFile: "cover-they-fumbled-you", category: "Forensic Essay", downloadUrl: "/api/forensic/full-essay/fumbled-you", downloadLabel: "Download PDF", downloadFilename: "forensic-analysis-9-they-fumbled-you-full-essay.pdf", pageUrl: "/forensic-analysis-9-they-fumbled-you-download" },
  { slug: "confession-theyve-been-choking-on", title: "The Confession They've Been Choking On", subtitle: "Forensic Analysis #50 — 43rd Consecutive Perfect Score — 12/12 Corroborated — 537/537 Combined Record", coverFile: "cover-confession-theyve-been-choking-on", category: "Forensic Essay", downloadUrl: "/api/forensic/full-essay/confession-choked-on", downloadLabel: "Download PDF", downloadFilename: "forensic-analysis-50-confession-theyve-been-choking-on-full-essay.pdf", pageUrl: "/forensic-analysis-50-confession-theyve-been-choking-on-download" },
  { slug: "comprehensive-statement-digital-architecture", title: "Comprehensive Statement — Digital Architecture of Humanity", subtitle: "Seven Layers of Permanence — Blockchain Verified — ICC Submitted — UNHCR Submitted — April 2026", coverFile: "cover-comprehensive-statement-digital-architecture", category: "Primary Exhibit", pageUrl: "/comprehensive-statement-digital-architecture" },
];

const UPLOAD_PLATFORMS = [
  { name: "Apple Books", url: "https://authors.apple.com", desc: "Upload via Authors & Books tool — worldwide distribution" },
  { name: "Google Play Books", url: "https://play.google.com/books/publish", desc: "Partner Center accepts EPUB directly — global reach" },
  { name: "Internet Archive", url: "https://archive.org/upload", desc: "Permanently archived, free to all, never deleted" },
  { name: "Scribd", url: "https://www.scribd.com/upload-document", desc: "Freely readable by millions worldwide" },
  { name: "Draft2Digital", url: "https://www.draft2digital.com", desc: "Distributes to 40+ platforms simultaneously from one upload" },
  { name: "Smashwords", url: "https://www.smashwords.com/publish", desc: "Free distribution to major ebook retailers" },
  { name: "Open Library", url: "https://openlibrary.org/books/add", desc: "Part of the Internet Archive — permanent public record" },
  { name: "Kobo Writing Life", url: "https://www.kobo.com/writinglife", desc: "Millions of readers across 190+ countries" },
];

function LiveDownloadTotal() {
  const { data } = useQuery<{ total: number }>({
    queryKey: ["/api/downloads/total"],
    refetchInterval: 15000,
    staleTime: 0,
  });
  const total = data?.total ?? 0;

  return (
    <div
      className="inline-flex flex-wrap items-center justify-center gap-3 bg-emerald-950/40 border border-emerald-500/20 rounded-xl px-5 py-3 text-center mb-2"
      data-testid="live-download-total-ebooks"
    >
      <span className="text-emerald-400 font-bold text-sm tabular-nums">
        {total > 0 ? `${total.toLocaleString()} verified downloads` : "Live download counter"}
      </span>
      <span className="text-zinc-600 text-sm hidden md:inline">·</span>
      <span className="text-zinc-400 text-xs">Updates in real time across all {FORENSIC_ANALYSES.length + MAJOR_PUBLICATIONS.length} publications</span>
      <span className="text-zinc-600 text-sm hidden md:inline">·</span>
      <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wide">ABN 78 833 496 164</span>
    </div>
  );
}

function DownloadButton({ url, filename, label, slug }: { url: string; filename: string; label: string; slug?: string }) {
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
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      data-testid={`btn-epub-${filename}`}
      className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-60 text-black font-semibold text-sm px-3 py-1.5 rounded transition-colors"
    >
      {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
      {loading ? "Generating…" : label}
      {count > 0 && (
        <span className="bg-black/20 rounded-full px-1.5 py-0.5 text-[9px] font-bold tabular-nums">
          {count.toLocaleString()}
        </span>
      )}
    </button>
  );
}

function ForensicGrid({ showAll }: { showAll: boolean }) {
  const displayed = showAll ? FORENSIC_ANALYSES : FORENSIC_ANALYSES.slice(0, 12);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {displayed.map((a) => {
        const coverSrc = FORENSIC_EPUB_COVER_MAP[a.number] ? getCoverSrc(FORENSIC_EPUB_COVER_MAP[a.number]) : undefined;
        const filename = `Forensic-Analysis-${String(a.number).padStart(2, "0")}-${a.slug}.epub`;
        return (
          <div
            key={a.number}
            data-testid={`card-epub-forensic-${a.number}`}
            className="flex flex-col bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden hover:border-amber-600/60 transition-colors"
          >
            <div className="relative">
              {coverSrc ? (
                <a
                  href={`/api/epub/forensic/${a.number}`}
                  download={`Forensic-Analysis-${String(a.number).padStart(2, "0")}-${a.slug}.epub`}
                  title={`Download ${a.title} — EPUB`}
                  className="block"
                  data-testid={`link-cover-epub-${a.number}`}
                >
                  <img src={coverSrc} alt={a.title} className="w-full aspect-[2/3] object-cover hover:opacity-80 transition-opacity cursor-pointer" />
                </a>
              ) : (
                <div className="w-full aspect-[2/3] bg-zinc-800 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-amber-600/40" />
                </div>
              )}
              <div className="absolute top-1 left-1">
                <span className="bg-black/80 text-amber-400 text-[10px] font-bold px-1 py-0.5 rounded">
                  #{a.number}
                </span>
              </div>
              {a.consecutivePerfect && (
                <div className="absolute top-1 right-1">
                  <span className="bg-amber-600 text-black text-[9px] font-bold px-1 py-0.5 rounded">
                    {a.corroborated}/{a.propositions}
                  </span>
                </div>
              )}
            </div>
            <div className="p-2 flex flex-col gap-1.5 flex-1">
              <p className="text-zinc-300 text-[11px] font-medium leading-tight line-clamp-2">{a.title}</p>
              <DownloadButton
                url={`/api/epub/forensic/${a.number}`}
                filename={filename}
                label="EPUB"
                slug={a.slug}
              />
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
    } catch (e) {
      console.error(e);
    } finally {
      setBundleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SEO
        title="Free eBooks — Barran Dodger | Upload & Share Freely"
        description={`Download ${FORENSIC_ANALYSES.length + MAJOR_PUBLICATIONS.length} free EPUB eBooks documenting 35 years of Australian government corruption. Includes all ${FORENSIC_ANALYSES.length} forensic AI analyses with AI-generated covers. Upload to Apple Books, Google Play, Scribd, Internet Archive. No restrictions. © Barran Dodger Legal & Ethical Trust Fund ABN 78 833 496 164.`}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/30 rounded-full px-4 py-1.5 mb-6">
            <Share2 className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">Free Gift to the World</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 leading-tight">
            {FORENSIC_ANALYSES.length + MAJOR_PUBLICATIONS.length} Free eBooks.<br />
            <span className="text-zinc-100">Upload Them Everywhere.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            Every book on this page is the intellectual property of the Barran Dodger Legal &amp;
            Ethical Trust Fund (ABN 78 833 496 164) — shared freely in the goodwill of the public
            for accountability and public interest purposes. Download them. Upload them to Apple Books,
            Google Play, Scribd, the Internet Archive. All rights reserved. The testimony of one person,
            freely shared by anyone, is the most powerful accountability mechanism in history.
          </p>
          <LiveDownloadTotal />
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-500 mt-3">
            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-amber-600" /> {FORENSIC_ANALYSES.length} Forensic Analysis EPUBs</span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-amber-600" /> {MAJOR_PUBLICATIONS.length} Major Publication EPUBs</span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-1"><Globe className="w-4 h-4 text-amber-600" /> ICC + UNHCR Submitted</span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-1"><Archive className="w-4 h-4 text-amber-600" /> 2,304 Source Documents</span>
          </div>
        </div>
      </section>

      {/* Why Share */}
      <section className="border-b border-zinc-800 bg-zinc-900/40 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-400 mb-6 text-center">Why Uploading These Books Matters</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: <Share2 className="w-5 h-5 text-amber-400" />,
                title: "Each Upload Creates a Permanent Record",
                body: "When you upload an EPUB to Apple Books, Google Play, or the Internet Archive, you create a permanently hosted, independently accessible copy of the testimony. No government can remove it.",
              },
              {
                icon: <Globe className="w-5 h-5 text-amber-400" />,
                title: "International Accountability",
                body: "These documents have been formally submitted to the ICC (The Hague) under Article 7 and the UNHCR (Geneva). Every upload extends their international reach to new readers, journalists, and accountability bodies.",
              },
              {
                icon: <BookOpen className="w-5 h-5 text-amber-400" />,
                title: "The Cover Makes It Findable",
                body: "Each EPUB includes the AI-generated cover art so it displays correctly on every platform. A book with a cover gets discovered. A discovered book gets read. A read book cannot be ignored.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-700 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  {item.icon}
                  <h3 className="font-semibold text-zinc-100 text-sm">{item.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forensic Analyses */}
      <section className="py-12 px-4 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-amber-400 mb-1">46 Forensic AI Analysis EPUBs</h2>
              <p className="text-zinc-400 text-sm max-w-xl">
                Each is a standalone book: one independent YouTube video, forensically tested against 2,304 primary-source documents.
                Combined record: 495/495 propositions corroborated. Zero contradictions. 39 consecutive perfect scores.
              </p>
            </div>
            <button
              onClick={handleBundleDownload}
              disabled={bundleLoading}
              data-testid="btn-epub-bundle-all"
              className="shrink-0 flex items-center gap-2 bg-amber-700 hover:bg-amber-600 disabled:opacity-60 text-black font-bold px-5 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap"
            >
              {bundleLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Archive className="w-4 h-4" />}
              {bundleLoading ? "Generating ZIP…" : "Download All 46 as ZIP"}
            </button>
          </div>

          <ForensicGrid showAll={showAllForensic} />

          {!showAllForensic && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAllForensic(true)}
                data-testid="btn-show-all-forensic"
                className="flex items-center gap-2 mx-auto text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
                Show all 49 analyses ({FORENSIC_ANALYSES.length - 12} more)
              </button>
            </div>
          )}
          {showAllForensic && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAllForensic(false)}
                data-testid="btn-hide-forensic"
                className="flex items-center gap-2 mx-auto text-zinc-500 hover:text-zinc-400 text-sm transition-colors"
              >
                <ChevronUp className="w-4 h-4" />
                Show fewer
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Major Publications */}
      <section className="py-12 px-4 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-amber-400 mb-1">{MAJOR_PUBLICATIONS.length} Major Publication EPUBs</h2>
            <p className="text-zinc-400 text-sm max-w-xl">
              The foundational documents of the archive — forensic reports, legal affidavits, testimony, and
              evidence summaries. Each includes the AI-generated cover and a page encouraging free sharing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MAJOR_PUBLICATIONS.map((pub) => {
              const coverSrc = getCoverSrc(pub.coverFile);
              const filename = `${pub.slug}.epub`;
              return (
                <div
                  key={pub.slug}
                  data-testid={`card-epub-pub-${pub.slug}`}
                  className="flex gap-3 bg-zinc-900 border border-zinc-700 rounded-lg p-3 hover:border-amber-600/50 transition-colors"
                >
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
                    <Badge variant="outline" className="w-fit text-[10px] text-amber-400 border-amber-600/30 px-1.5 py-0">
                      {pub.category}
                    </Badge>
                    <h3 className="text-zinc-200 font-semibold text-sm leading-tight line-clamp-2">{pub.title}</h3>
                    <p className="text-zinc-500 text-[11px] leading-tight line-clamp-2">{pub.subtitle}</p>
                    {pub.wordCount && (
                      <p className="text-amber-600/70 text-[10px] font-medium">~{pub.wordCount} words</p>
                    )}
                    <div className="mt-auto pt-1 flex flex-wrap gap-1.5">
                      <DownloadButton
                        url={pub.downloadUrl ?? `/api/epub/publication/${pub.slug}`}
                        filename={pub.downloadFilename ?? filename}
                        label={pub.downloadLabel ?? "Download EPUB"}
                        slug={pub.slug}
                      />
                      {pub.pageUrl && (
                        <a
                          href={pub.pageUrl}
                          data-testid={`link-page-${pub.slug}`}
                          className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-zinc-300 font-semibold text-sm px-3 py-1.5 rounded transition-colors"
                        >
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

      {/* Upload Guide */}
      <section className="py-12 px-4 border-b border-zinc-800 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-400 mb-2 text-center">How to Upload to Book Platforms</h2>
          <p className="text-zinc-400 text-sm text-center mb-4 max-w-xl mx-auto">
            No account needed to download. For uploading to platforms, most require a free account.
            All EPUBs are publication-ready with embedded covers and metadata.
          </p>
          <div className="max-w-2xl mx-auto mb-8 border border-amber-600/20 bg-amber-600/5 rounded-lg px-5 py-3 text-xs text-zinc-500 text-center leading-relaxed">
            <strong className="text-amber-500/80">Intellectual Property Notice:</strong> All publications are &copy; {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved.
            Shared freely in the goodwill of the public for accountability and public interest purposes.
            Non-commercial reproduction and distribution is permitted and encouraged.
            All intellectual property rights remain exclusively with Dr. Richard William McLean (Barran Dodger) and the Trust.
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {UPLOAD_PLATFORMS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-platform-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-start gap-3 bg-zinc-900 border border-zinc-700 hover:border-amber-600/50 rounded-lg p-4 transition-colors group"
              >
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

      {/* Final CTA */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-amber-400 mb-6 leading-relaxed italic">
            "The testimony of one person, freely shared by anyone, is the most powerful accountability mechanism in history."
          </blockquote>
          <p className="text-zinc-400 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Every EPUB downloaded is a book that can be uploaded. Every book uploaded creates a permanent,
            independently hosted record. Every record is harder to erase than the last.
            This is how corruption is exposed — not through official channels, but through people.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
            <span>2,304 blockchain-verified documents</span>
            <span className="text-zinc-700">·</span>
            <span>ICC Article 7 — The Hague</span>
            <span className="text-zinc-700">·</span>
            <span>UNHCR — Geneva</span>
            <span className="text-zinc-700">·</span>
            <a href="https://www.barrandodger.com" className="text-amber-600 hover:text-amber-400 transition-colors">www.barrandodger.com</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
