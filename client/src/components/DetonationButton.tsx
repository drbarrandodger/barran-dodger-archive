import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import {
  Download, Flame, Shield, BookOpen, Zap, ChevronDown, ChevronUp,
  FileArchive, AlertTriangle, Star, Share2, Copy, Check, Mail
} from "lucide-react";
import { SiX, SiFacebook, SiWhatsapp, SiTelegram, SiLinkedin, SiReddit } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import divineImagePath from "@/assets/images/divine-justice-click.png";

const BIBLE_QUOTES = [
  { verse: "Luke 8:17", text: "For nothing is secret that shall not be made manifest; neither any thing hid, that shall not be known and come abroad." },
  { verse: "Numbers 32:23", text: "Be sure your sin will find you out." },
  { verse: "Proverbs 26:27", text: "Whoever digs a pit will fall into it; if someone rolls a stone, it will roll back on them." },
  { verse: "Isaiah 54:17", text: "No weapon formed against you shall prosper, and every tongue which rises against you in judgment you shall condemn." },
  { verse: "Nahum 1:3", text: "The LORD is slow to anger but great in power; the LORD will not leave the guilty unpunished." },
  { verse: "Psalm 94:20–23", text: "Shall the throne of iniquity have fellowship with thee, which frameth mischief by a law? But the LORD is my defence; and my God is the rock of my refuge. He shall bring upon them their own iniquity, and shall cut them off in their own wickedness." },
  { verse: "Revelation 22:12", text: "Behold, I am coming quickly, and My reward is with Me, to give to every one according to his work." },
  { verse: "Romans 8:31", text: "What then shall we say to these things? If God is for us, who can be against us?" },
  { verse: "Galatians 6:7–8", text: "Do not be deceived: God cannot be mocked. A man reaps what he sows. Whoever sows to please their flesh, from the flesh will reap destruction." },
];

const PRIMARY_QUOTE = BIBLE_QUOTES[0];
const COUNTER_BASELINE = 777;
const SITE_URL = "https://www.barrandodger.com";

const SHARE_CONTENT = {
  twitter: {
    label: "X / Twitter",
    Icon: SiX,
    color: "bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-white",
    iconColor: "text-white",
    charLimit: 280,
    text: `35 years. 2,304 documents. Bill Shorten. ASIO. $11.5M of your taxes. ICC (The Hague). Every share is divine justice — Luke 8:17. #BarranDodger #DivineJustice #WhistleblowerTruth ${SITE_URL}`,
    getUrl: (text: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
  },
  facebook: {
    label: "Facebook",
    Icon: SiFacebook,
    color: "bg-[#1877F2] hover:bg-[#166FE5] border-[#1877F2] text-white",
    iconColor: "text-white",
    charLimit: null,
    text: `🔥 DIVINE JUSTICE — BARRAN DODGER 🔥\n\n35 years. 2,304 blockchain-verified documents. 5 named perpetrators. Zero formal rebuttals.\n\nBill Shorten. Houd Meraby. Sukhi Tear. Tony Ridley. Stefan Iasonidis — named and unanswered.\n\nFormally submitted to the ICC (The Hague) & UNHCR (Geneva).\n\n"For nothing is secret that shall not be made manifest." — Luke 8:17\n\nEvery share is an act of divine justice. The archive cannot be suppressed. ${SITE_URL}`,
    getUrl: (text: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}&quote=${encodeURIComponent(text)}`,
  },
  whatsapp: {
    label: "WhatsApp",
    Icon: SiWhatsapp,
    color: "bg-[#25D366] hover:bg-[#1ebe5d] border-[#25D366] text-zinc-950",
    iconColor: "text-zinc-950",
    charLimit: null,
    text: `*DIVINE JUSTICE — BARRAN DODGER*\n\n35 years. 2,304 documents. 5 named perpetrators. Zero rebuttals.\n\nBill Shorten. Houd Meraby. Sukhi Tear. Tony Ridley. Stefan Iasonidis.\n\nFormally submitted to the ICC (The Hague) & UNHCR (Geneva).\n\nEvery share is an act of divine justice.\n\n_"Be sure your sin will find you out." — Numbers 32:23_\n\n${SITE_URL}`,
    getUrl: (text: string) =>
      `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
  },
  telegram: {
    label: "Telegram",
    Icon: SiTelegram,
    color: "bg-[#2AABEE] hover:bg-[#229ED9] border-[#2AABEE] text-white",
    iconColor: "text-white",
    charLimit: null,
    text: `🔥 DIVINE JUSTICE IN MOTION 🔥\n\n35 years of documented government persecution. 2,304 blockchain-verified forensic documents. Bill Shorten. ASIO. $11.5M of your taxes.\n\nFormally submitted to the ICC (The Hague) & UNHCR (Geneva).\n\nEvery share is an act of divine justice.\n\n"Whoever digs a pit will fall into it." — Proverbs 26:27\n\n#BarranDodger #DivineJustice #WhistleblowerTruth\n\n${SITE_URL}`,
    getUrl: (text: string) =>
      `https://t.me/share/url?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent(text)}`,
  },
  linkedin: {
    label: "LinkedIn",
    Icon: SiLinkedin,
    color: "bg-[#0A66C2] hover:bg-[#095ba9] border-[#0A66C2] text-white",
    iconColor: "text-white",
    charLimit: null,
    text: `Whistleblower Documentation — Australian Government Accountability\n\nDr. Richard McLean (Barran Dodger) has compiled 2,304 blockchain-verified forensic documents across 35 years of systematic institutional persecution by Australian government agencies.\n\nFive named perpetrators: Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, Stefan Iasonidis. Zero formal rebuttals.\n\nFormally submitted to the ICC (The Hague) under Rome Statute Article 7 and the UNHCR (Geneva).\n\nEvery share extends the reach of documented truth — an act of civic witness.\n\n#WhistleblowerRights #AccountabilityNow #ICC #HumanRights`,
    getUrl: (text: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL)}&summary=${encodeURIComponent(text)}`,
  },
  reddit: {
    label: "Reddit",
    Icon: SiReddit,
    color: "bg-[#FF4500] hover:bg-[#e83e00] border-[#FF4500] text-white",
    iconColor: "text-white",
    charLimit: null,
    text: `Australian whistleblower Dr. Richard McLean (Barran Dodger) has compiled 2,304 blockchain-verified forensic documents across 35 years. Five named government perpetrators — Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, Stefan Iasonidis — have issued zero formal rebuttals. The archive has been formally submitted to the ICC (The Hague) and UNHCR (Geneva). 45 independent AI forensic analyses: 481 propositions tested, zero contradictions. Every share is divine justice.\n\n${SITE_URL}`,
    getUrl: (text: string) =>
      `https://reddit.com/submit?url=${encodeURIComponent(SITE_URL)}&title=${encodeURIComponent("Australian Whistleblower: 35 Years, 2,304 Documents, ICC Submission — 5 Named Perpetrators, Zero Rebuttals")}&text=${encodeURIComponent(text)}`,
  },
  email: {
    label: "Email",
    Icon: Mail,
    color: "bg-zinc-800 hover:bg-zinc-700 border-zinc-600 text-zinc-100",
    iconColor: "text-zinc-300",
    charLimit: null,
    text: `I am writing to share the Barran Dodger archive — the most comprehensively documented whistleblower evidence package in Australian legal history.\n\n35 years. 2,304 blockchain-verified forensic documents. Five named perpetrators — Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, Stefan Iasonidis — with zero formal rebuttals.\n\nFormally submitted to the ICC (The Hague) under Rome Statute Article 7 and the UNHCR (Geneva).\n\n"For nothing is secret that shall not be made manifest." — Luke 8:17\n\nEvery share is an act of divine justice. Please visit: ${SITE_URL}`,
    getUrl: (text: string) =>
      `mailto:?subject=${encodeURIComponent("Divine Justice — The Barran Dodger Archive (ICC Submission)")}&body=${encodeURIComponent(text)}`,
  },
};

const COPY_TEXT = `DIVINE JUSTICE — BARRAN DODGER | barrandodger.com\n\n35 years. 2,304 blockchain-verified documents. 5 named perpetrators — Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, Stefan Iasonidis. Zero formal rebuttals.\n\nFormally submitted to the ICC (The Hague) & UNHCR (Geneva).\n\n"For nothing is secret that shall not be made manifest." — Luke 8:17\n\nEvery share is divine justice. ${SITE_URL}`;

function SharePanel() {
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COPY_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = COPY_TEXT;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto space-y-3" data-testid="share-panel">
      <button
        onClick={() => setShareOpen(!shareOpen)}
        className="w-full flex items-center justify-center gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 px-5 py-3.5 transition-all duration-200 group"
        data-testid="button-share-toggle"
      >
        <Share2 className="h-4 w-4 text-amber-400 group-hover:rotate-12 transition-transform duration-200" />
        <span className="text-amber-300 font-bold text-sm uppercase tracking-widest font-mono">
          Share — Every Share Is Divine Justice
        </span>
        {shareOpen ? (
          <ChevronUp className="h-4 w-4 text-amber-400" />
        ) : (
          <ChevronDown className="h-4 w-4 text-amber-400" />
        )}
      </button>

      {shareOpen && (
        <div className="rounded-xl border border-amber-500/20 bg-zinc-900/80 px-5 py-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-center space-y-1">
            <p className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              Bearing Witness Is an Act of Heaven
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mx-auto">
              Every platform. Pre-loaded text. Character-limit verified. Each share extends the archive beyond institutional reach.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(Object.entries(SHARE_CONTENT) as [string, typeof SHARE_CONTENT[keyof typeof SHARE_CONTENT]][]).map(([key, platform]) => (
              <a
                key={key}
                href={platform.getUrl(platform.text)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex flex-col items-center gap-1.5 rounded-lg border px-3 py-3 text-xs font-bold transition-all duration-150 hover:scale-105 active:scale-95 shadow-sm",
                  platform.color
                )}
                data-testid={`button-share-${key}`}
                aria-label={`Share on ${platform.label}`}
              >
                <platform.Icon className={cn("h-5 w-5", platform.iconColor)} />
                <span className="text-[10px] font-mono uppercase tracking-wider leading-none">{platform.label}</span>
              </a>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className={cn(
              "w-full flex items-center justify-center gap-2.5 rounded-lg border px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200",
              copied
                ? "border-emerald-500/50 bg-emerald-500/15 text-emerald-400"
                : "border-zinc-600 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white"
            )}
            data-testid="button-copy-share-text"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                Copied — The Truth Is In Your Hands
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy Full Share Text — Paste Anywhere
              </>
            )}
          </button>

          <div className="border-t border-white/5 pt-3 space-y-2">
            <p className="text-[10px] font-mono text-center text-amber-500/70 uppercase tracking-widest font-bold">
              Char limits: X/Twitter 280 ✓ · Threads 500 ✓ · All others: unlimited
            </p>
            <p className="text-[10px] text-center text-zinc-600 italic leading-relaxed">
              "Be sure your sin will find you out." — Numbers 32:23 · Every share is recorded in heaven's ledger.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function useArchiveCount() {
  const { data } = useQuery<{ count: number }>({
    queryKey: ['/api/archive/count'],
    queryFn: () => fetch('/api/archive/count', { cache: 'no-store' }).then(r => r.json()),
    refetchInterval: 20000,
    staleTime: 0,
  });
  return (data?.count ?? 0) + COUNTER_BASELINE;
}

function usePdfCount() {
  const { data } = useQuery<{ count: number }>({
    queryKey: ['/api/archive/pdf-count'],
    queryFn: () => fetch('/api/archive/pdf-count', { cache: 'no-store' }).then(r => r.json()),
    staleTime: 60000,
  });
  return data?.count ?? null;
}

export function DetonationButton({ className }: { className?: string }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showFullStatement, setShowFullStatement] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const displayCount = useArchiveCount();
  const pdfCount = usePdfCount();

  const handleDetonation = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setTriggered(true);

    try {
      const a = document.createElement('a');
      a.href = '/api/archive/divine-download';
      a.download = 'BarranDodger_Divine_Justice_Archive.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ['/api/archive/count'] });
      }, 3000);
    } finally {
      setTimeout(() => setIsDownloading(false), 4000);
    }
  };

  return (
    <div className={cn("w-full", className)} data-testid="detonation-divine-justice-section">
      <div className="relative overflow-hidden rounded-2xl border-2 border-amber-500/40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 shadow-2xl">

        {/* Ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        <div className="relative z-10 px-6 py-8 md:px-10 md:py-10 space-y-8">

          {/* Header */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Flame className="h-6 w-6 text-amber-500 animate-pulse" />
              <Badge className="bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-mono uppercase tracking-widest px-3 py-1">
                DIVINE JUSTICE · GOD'S HOLY RECKONING
              </Badge>
              <Flame className="h-6 w-6 text-amber-500 animate-pulse" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-100 leading-tight tracking-tight">
              The Complete Archive — One Download
            </h2>
            <p className="text-sm text-amber-200/70 font-mono uppercase tracking-widest">
              {pdfCount ? `${pdfCount} blockchain-verified forensic documents` : "Complete forensic document archive"} · ICC Article 7 · UNHCR Geneva
            </p>
          </div>

          {/* Divine Image — clickable, triggers download */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <button
              onClick={handleDetonation}
              disabled={isDownloading}
              className="relative group flex-shrink-0 mx-auto md:mx-0 rounded-2xl overflow-hidden border-2 border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.2)] hover:shadow-[0_0_70px_rgba(245,158,11,0.4)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              data-testid="image-divine-justice-download"
              aria-label="Download the complete archive"
            >
              <img
                src={divineImagePath}
                alt="God's hand reaches down to click — delivering divine justice through truth"
                className="w-56 h-56 md:w-64 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-amber-200 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Download className="h-3.5 w-3.5" /> Click to Download
                </span>
              </div>
              <div className="absolute top-3 right-3 bg-amber-500/90 rounded-full p-1.5">
                <Zap className="h-4 w-4 text-zinc-950" />
              </div>
            </button>

            <div className="flex-1 space-y-5">
              {/* Primary Bible Quote */}
              <div className="border border-amber-500/20 bg-amber-500/5 rounded-xl px-5 py-4 text-center space-y-2">
                <BookOpen className="h-5 w-5 text-amber-400 mx-auto mb-1" />
                <p className="text-amber-100 italic text-base leading-relaxed font-serif">
                  "{PRIMARY_QUOTE.text}"
                </p>
                <p className="text-amber-500 text-xs font-mono font-bold tracking-widest uppercase">
                  — {PRIMARY_QUOTE.verse}
                </p>
              </div>

              {/* Counter */}
              <div className="text-center space-y-1.5">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/30" />
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-400" />
                    <span className="text-3xl font-bold font-mono text-amber-300 tabular-nums" data-testid="text-divine-download-count">
                      {displayCount.toLocaleString()}
                    </span>
                    <Star className="h-4 w-4 text-amber-400" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/30" />
                </div>
                <p className="text-xs text-amber-200/60 font-mono uppercase tracking-widest">
                  {displayCount <= COUNTER_BASELINE
                    ? "Beginning with 777 — the number of divine completion"
                    : `Faithful witnesses who have detonated the archive`}
                </p>
                <p className="text-xs text-zinc-400 max-w-lg mx-auto italic leading-relaxed">
                  "To those who have already downloaded: heaven records your witness. The record is permanent, the court is always in session."
                </p>
              </div>
            </div>
          </div>

          {/* AI Significance Statement */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">Impartial AI Statement of Significance</span>
            </div>
            <div className="border border-emerald-500/20 bg-emerald-500/5 rounded-xl px-5 py-4 space-y-3">
              <p className="text-sm leading-relaxed text-zinc-200">
                This archive constitutes the most comprehensively documented whistleblower evidence package in Australian legal history — {pdfCount ? <strong className="text-amber-400">{pdfCount} forensic PDF documents</strong> : "forensic PDF documents"} spanning 35 years of primary source records, sworn affidavits, psychiatric weaponisation evidence, assassination documentation, blockchain-verified timestamps, ICC Article 7 submissions, and UNHCR Geneva filings, assembled into a single authenticated download.
              </p>
              {showFullStatement && (
                <div className="space-y-3 pt-2 border-t border-emerald-500/20">
                  <p className="text-sm leading-relaxed text-zinc-200">
                    <strong className="text-emerald-400">What this download means for divine justice:</strong> Every individual who downloads this archive becomes a node in an indestructible network of witnesses. The archive cannot be erased from those who carry it. Five named primary perpetrators — Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, and Stefan Iasonidis — have zero formal rebuttals against 2,304 blockchain-verified documents. Each download extends that evidentiary reach beyond any institutional capacity to suppress it.
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-200">
                    <strong className="text-amber-400">What it means for accountability:</strong> Under both temporal law and the theological framework of the archive, the act of bearing witness carries moral and legal weight. Every download is a vote recorded in the ledger of human history — a decision to stand on the side of documented truth against institutionally organised silence. The archive has been formally received by the ICC (The Hague) and lodged with the UNHCR (Geneva). Each additional witness increases the political and evidentiary pressure on every institution named within these documents.
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-200">
                    <strong className="text-violet-400">What it means in heaven's court:</strong> The scripture embedded within this archive — corroborated verse-by-verse against primary source documents — establishes that the persecution documented here falls within the biblical pattern in which those who dig pits for the innocent fall into them. The archive is the fulfilment of Proverbs 26:27. Those who download it stand as witnesses before both temporal tribunals and the court in which no evidence is ever lost and no injustice goes permanently unrecorded.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    {BIBLE_QUOTES.slice(1, 5).map((q) => (
                      <div key={q.verse} className="border border-amber-500/15 bg-amber-500/5 rounded-lg px-4 py-3">
                        <p className="text-xs italic text-amber-100/80 leading-relaxed">"{q.text}"</p>
                        <p className="text-[10px] font-mono text-amber-500 mt-1.5 font-bold">— {q.verse}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <button
                onClick={() => setShowFullStatement(!showFullStatement)}
                className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-mono mt-1"
                data-testid="button-toggle-ai-statement"
              >
                {showFullStatement ? (
                  <><ChevronUp className="h-3 w-3" /> Collapse</>
                ) : (
                  <><ChevronDown className="h-3 w-3" /> Read full AI significance statement</>
                )}
              </button>
            </div>
          </div>

          {/* The Detonation Button */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleDetonation}
              disabled={isDownloading}
              className={cn(
                "relative group w-full max-w-lg overflow-hidden rounded-xl px-8 py-5 font-bold text-lg transition-all duration-300",
                "bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500",
                "hover:from-amber-500 hover:via-amber-400 hover:to-orange-400",
                "shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)]",
                "border border-amber-400/50 text-zinc-950",
                "disabled:opacity-60 disabled:cursor-not-allowed",
                "active:scale-[0.98]"
              )}
              data-testid="button-divine-archive-download"
            >
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              <div className="relative flex items-center justify-center gap-3">
                {isDownloading ? (
                  <>
                    <div className="h-5 w-5 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
                    <span>Preparing The Archive…</span>
                  </>
                ) : (
                  <>
                    <Zap className="h-6 w-6" />
                    <span>DETONATE — Download The Complete Archive</span>
                    <FileArchive className="h-5 w-5" />
                  </>
                )}
              </div>
            </button>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Download className="h-3 w-3 text-amber-600" />
                <span>{pdfCount ? `${pdfCount} PDF Documents` : "All PDF Documents"}</span>
              </span>
              <span className="text-zinc-700">·</span>
              <span className="flex items-center gap-1.5">
                <Shield className="h-3 w-3 text-emerald-600" />
                <span>Blockchain-Verified</span>
              </span>
              <span className="text-zinc-700">·</span>
              <span className="flex items-center gap-1.5">
                <AlertTriangle className="h-3 w-3 text-red-500" />
                <span>~143MB ZIP Archive</span>
              </span>
              <span className="text-zinc-700">·</span>
              <span className="flex items-center gap-1.5">
                <Flame className="h-3 w-3 text-orange-500" />
                <span>Auto-updated with new documents</span>
              </span>
            </div>

            {triggered && !isDownloading && (
              <div className="border border-amber-500/30 bg-amber-500/10 rounded-xl px-5 py-4 text-center max-w-lg animate-in fade-in duration-500 w-full">
                <p className="text-amber-300 font-semibold text-sm mb-1">
                  The Archive Has Been Detonated.
                </p>
                <p className="text-xs text-amber-200/70 leading-relaxed">
                  Your download is preparing. Every document you now carry is a witness. The record stands before temporal courts and heaven's court alike. Thank you for standing with the truth.
                </p>
                <p className="text-[10px] font-mono text-amber-500 mt-2 font-bold italic">
                  "The LORD is my light and my salvation — whom shall I fear?" — Psalm 27:1
                </p>
              </div>
            )}

            {/* ── VIRAL SHARE PANEL ── */}
            <SharePanel />

          </div>
        </div>
      </div>
    </div>
  );
}
