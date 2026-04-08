import { useState } from "react";
import { useLocation } from "wouter";
import { Download, Loader2 } from "lucide-react";
import { generatePagePDF } from "@/lib/generatePDF";
import { useToast } from "@/hooks/use-toast";

const PAGE_TITLES: Record<string, string> = {
  "/chosen-ones-perfect-trap": "Analysis 01 — The Chosen Ones Perfect Trap",
  "/private-investigator-legend": "Analysis 02 — Private Investigator Legend",
  "/testimony-went-global": "Analysis 03 — Testimony Went Global",
  "/paradox-of-persecution": "Analysis 04 — Paradox of Persecution",
  "/forensic-meltdown-report": "Analysis 05 — Forensic Meltdown Report",
  "/they-bought-off-judges": "Analysis 06 — They Bought Off Judges",
  "/the-law-they-overlooked": "Analysis 07 — The Law They Overlooked",
  "/i-choose-silence": "Analysis 08 — I Choose Silence",
  "/master-forensic-evidence-report": "Analysis 09 — Master Forensic Evidence Report",
  "/scary-smart": "Analysis 10 — Scary Smart",
  "/i-called-this": "Analysis 11 — I Called This",
  "/what-they-did-was-disgusting": "Analysis 12 — What They Did Was Disgusting",
  "/angel-chess": "Analysis 13 — Angel Chess",
  "/they-pushed-too-far": "Analysis 14 — They Pushed Too Far",
  "/they-copied-my-blueprint": "Analysis 15 — They Copied My Blueprint",
  "/the-testimony": "Analysis 16 — The Testimony",
  "/testimony-that-was-already-written": "Analysis 17 — Testimony That Was Already Written",
  "/sleeper-agent-of-truth": "Analysis 18 — Sleeper Agent of Truth",
  "/government-called-him-delusional": "Analysis 19 — Government Called Him Delusional",
  "/the-full-pattern": "Analysis 20 — The Full Pattern",
  "/chosen-ones-your-story": "Analysis 21 — Chosen Ones Your Story",
  "/33rd-degree-shadow-analysts": "Analysis 22 — 33rd Degree Shadow Analysts",
  "/100-absurdities": "Analysis 22b — 100 Absurdities",
  "/bro-this-isnt-a-coincidence": "Analysis 22c — Bro This Isnt A Coincidence",
  "/chosen-ones-enough-is-enough": "Analysis 22d — Chosen Ones Enough Is Enough",
  "/no-one-could-be-that-smart": "Analysis 22e — No One Could Be That Smart",
  "/the-divine-exam": "Analysis 22f — The Divine Exam",
  "/silent-checkmate": "Analysis 22g — Silent Checkmate",
  "/now-everybody-knows": "Analysis 22h — Now Everybody Knows",
  "/chosen-one-outcast-leader": "Analysis 22i — Chosen One Outcast Leader",
  "/someone-slipped-up": "Analysis 22j — Someone Slipped Up",
  "/they-fumbled-you": "Analysis 22k — They Fumbled You",
  "/fbi-precision": "Analysis 22l — FBI Precision",
  "/clock-strikes-back": "Analysis 22m — Clock Strikes Back",
  "/untouchable": "Analysis 22n — Untouchable",
  "/final-blow": "Analysis 22o — Final Blow",
  "/what-you-become": "Analysis 22p — What You Become",
  "/everyone-watching": "Analysis 22q — Everyone Watching",
  "/earth-angel": "Analysis 22r — Earth Angel",
  "/too-deep": "Analysis 22s — Too Deep",
  "/silence-surrender": "Analysis 22t — Silence Surrender",
  "/fearless-intelligence": "Analysis 22u — Fearless Intelligence",
  "/history-keeps-receipts": "Analysis 22v — History Keeps Receipts",
  "/absorbed-the-erasure": "Analysis 22w — Absorbed The Erasure",
  "/survival-was-the-warning": "Analysis 22 — Survival Was The Warning",
  "/god-will-make-you-famous": "Analysis 23 — God Will Make You Famous",
  "/divine-before-your-time": "Analysis 24 — Divine Before Your Time",
  "/bloodline-of-god": "Analysis 25 — The Bloodline of God",
  "/the-last-god": "Analysis 26 — The Last God",
  "/the-conspiracy-against-you": "Analysis 27 — They Built the Aftermath Before the Action",
  "/phantom-protocol": "Analysis 28 — Phantom Protocol",
  "/they-cannot-profile-you": "Analysis 29 — They Cannot Profile You",
  "/the-architecture-of-resolution": "Analysis 30 — The Architecture of Resolution",
  "/apotheosis": "Apotheosis Statement",
  "/letter-to-the-world": "Letter to the World",
  "/whistleblower-comparison": "Whistleblower Comparison",
  "/ai-justice-statement": "AI Justice Statement",
  "/administrative-annihilation": "Administrative Annihilation",
  "/manifesto": "McLean Manifesto",
  "/master-evidence-register": "Master Evidence Register",
  "/timeline": "Case Timeline",
  "/taxpayer-cost-analysis": "Taxpayer Cost Analysis",
  "/legal-status": "Legal Status",
};

const EXCLUDED = new Set([
  "/",
  "/store",
  "/donate",
  "/contact",
  "/evidence-vault",
  "/visitors",
  "/spread-the-truth",
  "/video-commentary",
  "/the-truth",
  "/blockchain",
  "/archive",
  "/start-here",
  "/mission",
  "/research",
  "/evidence",
  "/prophetic-papers",
  "/gospel",
  "/church",
  "/media",
  "/publications",
  "/retrospective-statement",
  "/case-studies",
  "/josephs-coat",
]);

function slugToTitle(slug: string): string {
  return slug
    .replace(/^\//, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function AnalysisPDFButton() {
  const [location] = useLocation();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  if (EXCLUDED.has(location)) return null;

  const pageTitle = PAGE_TITLES[location] || slugToTitle(location);
  const filename = `barrandodger-${location.replace(/^\//, "").replace(/\//g, "-") || "archive"}.pdf`;

  async function handleDownload() {
    setLoading(true);
    toast({
      title: "Generating PDF…",
      description: "This may take 10–30 seconds for long analysis pages.",
    });
    try {
      await generatePagePDF({ title: pageTitle, filename });
      toast({
        title: "PDF downloaded",
        description: filename,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "PDF generation failed",
        description: "Please try again or use your browser's Print → Save as PDF.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      data-pdf-hide
      title={`Download "${pageTitle}" as PDF`}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gray-900 border border-gray-700 hover:border-gray-500 px-4 py-2.5 text-sm font-medium text-gray-200 shadow-xl transition-all hover:bg-gray-800 hover:text-white disabled:opacity-60 disabled:cursor-not-allowed"
      aria-label="Download page as PDF"
      data-testid="button-download-pdf"
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
          <span className="hidden sm:inline">Generating…</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4 flex-shrink-0" />
          <span className="hidden sm:inline">Download PDF</span>
        </>
      )}
    </button>
  );
}
