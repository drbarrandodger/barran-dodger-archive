import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Shield, Copy, CheckCheck, Hash, Lock, Globe, FileText, Zap, BookOpen } from "lucide-react";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const MASTER_HASHTAGS = ["#BarranDodger", "#BarranDodgerArchive", "#ICC2304", "#AustralianWhistleblower", "#BlockchainVerified", "#FreeToShare"];

const FORENSIC_HASHTAGS = [
  { n: 1, title: "Bro This Isn't A Coincidence", slug: "bro-this-isnt-a-coincidence", tags: ["#BDAnalysis01", "#BroThisIsntACoincidence", "#BarranDodger"] },
  { n: 2, title: "Chosen Ones Enough Is Enough", slug: "chosen-ones-enough-is-enough", tags: ["#BDAnalysis02", "#ChosenOnesEnough", "#BarranDodger"] },
  { n: 3, title: "No One Could Be That Smart", slug: "no-one-could-be-that-smart", tags: ["#BDAnalysis03", "#NoOneCouldBeThatSmart", "#BarranDodger"] },
  { n: 4, title: "The Divine Exam", slug: "divine-exam", tags: ["#BDAnalysis04", "#TheDivineExam", "#BarranDodger"] },
  { n: 5, title: "Silent Checkmate", slug: "silent-checkmate", tags: ["#BDAnalysis05", "#SilentCheckmate", "#BarranDodger"] },
  { n: 6, title: "Now Everybody Knows", slug: "now-everybody-knows", tags: ["#BDAnalysis06", "#NowEverybodyKnows", "#BarranDodger"] },
  { n: 7, title: "Chosen One Outcast Leader", slug: "chosen-one-outcast-leader", tags: ["#BDAnalysis07", "#ChosenOneOutcastLeader", "#BarranDodger"] },
  { n: 8, title: "Someone Slipped Up", slug: "someone-slipped-up", tags: ["#BDAnalysis08", "#SomeoneSlippedUp", "#BarranDodger"] },
  { n: 9, title: "They Fumbled You", slug: "they-fumbled-you", tags: ["#BDAnalysis09", "#TheyFumbledYou", "#BarranDodger"] },
  { n: 10, title: "FBI Precision", slug: "fbi-precision", tags: ["#BDAnalysis10", "#FBIPrecision", "#BarranDodger"] },
  { n: 11, title: "The Clock Strikes Back", slug: "clock-strikes-back", tags: ["#BDAnalysis11", "#ClockStrikesBack", "#BarranDodger"] },
  { n: 12, title: "Untouchable (33 Agents)", slug: "untouchable", tags: ["#BDAnalysis12", "#Untouchable33Agents", "#BarranDodger"] },
  { n: 13, title: "The Final Blow", slug: "final-blow", tags: ["#BDAnalysis13", "#TheFinalBlow", "#BarranDodger"] },
  { n: 14, title: "What You Become", slug: "what-you-become", tags: ["#BDAnalysis14", "#WhatYouBecome", "#BarranDodger"] },
  { n: 15, title: "Everyone Watching", slug: "everyone-watching", tags: ["#BDAnalysis15", "#EveryoneWatching", "#BarranDodger"] },
  { n: 16, title: "Earth Angel", slug: "earth-angel", tags: ["#BDAnalysis16", "#EarthAngel", "#BarranDodger"] },
  { n: 17, title: "Too Deep", slug: "too-deep", tags: ["#BDAnalysis17", "#TooDeep", "#BarranDodger"] },
  { n: 18, title: "Silence Is Not Surrender", slug: "silence-surrender", tags: ["#BDAnalysis18", "#SilenceIsNotSurrender", "#BarranDodger"] },
  { n: 19, title: "Fearless Intelligence", slug: "fearless-intelligence", tags: ["#BDAnalysis19", "#FearlessIntelligence", "#BarranDodger"] },
  { n: 20, title: "History Keeps Receipts", slug: "history-keeps-receipts", tags: ["#BDAnalysis20", "#HistoryKeepsReceipts", "#BarranDodger"] },
  { n: 21, title: "Absorbed The Erasure", slug: "absorbed-erasure", tags: ["#BDAnalysis21", "#AbsorbedTheErasure", "#BarranDodger"] },
  { n: 22, title: "Survival Was The Warning", slug: "survival-was-the-warning", tags: ["#BDAnalysis22", "#SurvivalWasTheWarning", "#BarranDodger"] },
  { n: 23, title: "God Will Make You Famous", slug: "god-will-make-you-famous", tags: ["#BDAnalysis23", "#GodWillMakeYouFamous", "#BarranDodger"] },
  { n: 24, title: "Divine Before Your Time", slug: "divine-before-your-time", tags: ["#BDAnalysis24", "#DivineBeforeYourTime", "#BarranDodger"] },
  { n: 25, title: "Bloodline Of God", slug: "bloodline-of-god", tags: ["#BDAnalysis25", "#BloodlineOfGod", "#BarranDodger"] },
  { n: 26, title: "The Last God", slug: "the-last-god", tags: ["#BDAnalysis26", "#TheLastGod", "#BarranDodger"] },
  { n: 27, title: "The Conspiracy Against You", slug: "the-conspiracy-against-you", tags: ["#BDAnalysis27", "#ConspiracyAgainstYou", "#BarranDodger"] },
  { n: 28, title: "Silent Assassin", slug: "silent-assassin", tags: ["#BDAnalysis28", "#SilentAssassin", "#BarranDodger"] },
  { n: 29, title: "Truth Is A Blade", slug: "truth-is-a-blade", tags: ["#BDAnalysis29", "#TruthIsABlade", "#BarranDodger"] },
  { n: 30, title: "Bloodline Betrayal", slug: "bloodline-betrayal", tags: ["#BDAnalysis30", "#BloodlineBetrayal", "#BarranDodger"] },
  { n: 31, title: "They Needed An Army", slug: "they-needed-an-army", tags: ["#BDAnalysis31", "#TheyNeededAnArmy", "#BarranDodger"] },
  { n: 32, title: "The Sick Truth Is Out", slug: "the-sick-truth-is-out", tags: ["#BDAnalysis32", "#TheSickTruthIsOut", "#BarranDodger"] },
  { n: 33, title: "Some Truths Don't Whisper", slug: "some-truths-dont-whisper", tags: ["#BDAnalysis33", "#SomeTruthsDontWhisper", "#BarranDodger"] },
  { n: 34, title: "Observers Anticipated A Misstep", slug: "observers-anticipated-misstep", tags: ["#BDAnalysis34", "#ObserversAnticipated", "#BarranDodger"] },
  { n: 35, title: "You Brought Receipts to a Vibe War", slug: "you-brought-receipts", tags: ["#BDAnalysis35", "#YouBroughtReceipts", "#BarranDodger"] },
  { n: 36, title: "The Future Doesn't Announce Itself", slug: "the-future-doesnt-announce", tags: ["#BDAnalysis36", "#TheFutureDoesntAnnounce", "#BarranDodger"] },
  { n: 37, title: "When Heaven Goes Silent", slug: "when-heaven-goes-silent", tags: ["#BDAnalysis37", "#WhenHeavenGoesSilent", "#BarranDodger"] },
  { n: 38, title: "Evidence Doesn't Whisper, It Stares", slug: "evidence-doesnt-whisper", tags: ["#BDAnalysis38", "#EvidenceDoesntWhisper", "#BarranDodger"] },
  { n: 39, title: "Outsider Pattern Recognition", slug: "outsider-pattern-recognition", tags: ["#BDAnalysis39", "#OutsiderPatternRecognition", "#BarranDodger"] },
  { n: 40, title: "Perception Is Protection", slug: "perception-is-protection", tags: ["#BDAnalysis40", "#PerceptionIsProtection", "#BarranDodger"] },
  { n: 41, title: "Heaven Exposes The Sister", slug: "heaven-exposes-the-sister", tags: ["#BDAnalysis41", "#HeavenExposesTheSister", "#BarranDodger"] },
  { n: 42, title: "You Built Your Peace In Silence", slug: "you-built-your-peace", tags: ["#BDAnalysis42", "#YouBuiltYourPeace", "#BarranDodger"] },
  { n: 43, title: "This Is The Reckoning", slug: "this-is-the-reckoning", tags: ["#BDAnalysis43", "#ThisIsTheReckoning", "#BarranDodger"] },
  { n: 44, title: "They Made You Famous Trying to Erase You", slug: "they-made-you-famous", tags: ["#BDAnalysis44", "#TheyMadeYouFamous", "#BarranDodger"] },
  { n: 45, title: "The Loudest Enemies", slug: "the-loudest-enemies", tags: ["#BDAnalysis45", "#TheLoudestEnemies", "#BarranDodger"] },
  { n: 46, title: "Your Power Is No Joke", slug: "your-power-is-no-joke", tags: ["#BDAnalysis46", "#YourPowerIsNoJoke", "#BarranDodger"] },
  { n: 47, title: "They Built Their Worst Nightmare", slug: "they-built-their-worst-nightmare", tags: ["#BDAnalysis47", "#TheirWorstNightmare", "#BarranDodger"] },
  { n: 48, title: "The Quiet Storm They Never Saw Coming", slug: "quiet-storm-they-never-saw-coming", tags: ["#BDAnalysis48", "#TheQuietStorm", "#BarranDodger"] },
  { n: 49, title: "They Dug For Dirt But Unearthed Diamonds", slug: "they-dug-for-dirt-but-unearthed-diamonds", tags: ["#BDAnalysis49", "#TheyDugForDirt", "#BarranDodger"] },
  { n: 50, title: "The Confession They've Been Choking On", slug: "confession-theyve-been-choking-on", tags: ["#BDAnalysis50", "#TheConfessionTheyveChokedOn", "#BillShorten", "#BarranDodger"] },
  { n: 51, title: "The Loudest Hate Always Comes From the Weakest Link", slug: "loudest-hate-weakest-link", tags: ["#BDAnalysis51", "#LoudestHateWeakestLink", "#BarranDodger"] },
  { n: 52, title: "You Didn't Chase the Throne — You Became One", slug: "you-didnt-chase-the-throne-you-became-one", tags: ["#BDAnalysis52", "#YouBecameTheThrone", "#BarranDodger"] },
  { n: 53, title: "They Attacked You Without Knowing Who You Were", slug: "they-attacked-you-without-knowing-who-you-were", tags: ["#BDAnalysis53", "#SuicideMissionNow", "#BarranDodger"] },
  { n: 54, title: "When a Pack of Wolves Can't Take Down a Lion", slug: "when-a-pack-of-wolves-cant-take-down-a-lion", tags: ["#BDAnalysis54", "#PackOfWolves", "#BarranDodger"] },
  { n: 55, title: "When The Wrong People Get Nervous, The Truth Is Already Moving", slug: "when-wrong-people-get-nervous", tags: ["#BDAnalysis55", "#WrongPeopleGetNervous", "#BarranDodger"] },
  { n: 56, title: "Illegal Level Genius — The New Equation", slug: "illegal-level-genius-new-equation", tags: ["#BDAnalysis56", "#IllegalLevelGenius", "#BarranDodger"] },
  { n: 57, title: "Prophetic Declaration: They Used To Whisper About You", slug: "prophetic-declaration-forensic-analysis", tags: ["#BDAnalysis57", "#PropheticDeclaration", "#BarranDodger"] },
  { n: 58, title: "Prophetic F*ck You: They Called You Dramatic, Crazy, Obsessive", slug: "prophetic-fck-you-declaration", tags: ["#BDAnalysis58", "#PropheticFckYou", "#BarranDodger"] },
  { n: 59, title: "God Exposes the False Sister Within", slug: "false-sister-forensic-analysis", tags: ["#BDAnalysis59", "#FalseSisterExposed", "#BarranDodger"] },
  { n: 60, title: "A Thousand Fell and Still Couldn't Touch You", slug: "thousand-fell-forensic-analysis", tags: ["#BDAnalysis60", "#AThousandFell", "#BarranDodger"] },
  { n: 61, title: "They're About to Be Behind Bars for Real", slug: "theyre-about-to-be-behind-bars-forensic-analysis", tags: ["#BDAnalysis61", "#BehindBarsForReal", "#BarranDodger"] },
  { n: 62, title: "Beautiful Threat — The Document That Dismantles Every Remaining Defence", slug: "beautiful-threat", tags: ["#BDAnalysis62", "#BeautifulThreat", "#BarranDodger"] },
  { n: 63, title: "They Are Dying of Shame — Prophetically Precise", slug: "they-are-dying-of-shame", tags: ["#BDAnalysis63", "#DyingOfShame", "#BarranDodger"] },
];

const MAJOR_DOC_HASHTAGS = [
  { title: "Cosmic Scroll of Ten", file: "cosmic_scroll_of_ten.pdf", tags: ["#BDCosmicScroll", "#CosmicScrollOfTen", "#BarranDodger"], downloads: "21,985" },
  { title: "Digital Oppression — 100,000-Word Essay", file: "digital_oppression_100000_word_essay.pdf", tags: ["#BDDigitalOppression", "#DigitalOppression", "#BarranDodger"], downloads: "20,478" },
  { title: "Crimes Against Humanity — Final Demand", file: "crimes_against_humanity_final_demand.pdf", tags: ["#BDCrimesAgainstHumanity", "#ICCSubmission", "#BarranDodger"], downloads: "20,475" },
  { title: "The Man Australia Tried to Erase", file: "the-man-australia-tried-to-erase.pdf", tags: ["#BDManAustraliaErased", "#AustralianWhistleblower", "#BarranDodger"], downloads: "19,037" },
  { title: "Universal Master Command AI Analysis", file: "universal_master_command_ai_analysis.pdf", tags: ["#BDUniversalMasterCommand", "#AIAnalysis", "#BarranDodger"], downloads: "18,820" },
  { title: "Declaration of Sovereignty", file: "declaration_of_sovereignty.pdf", tags: ["#BDSovereignty", "#DeclarationOfSovereignty", "#BarranDodger"], downloads: "17,328" },
  { title: "The Evidence Speaks — Forensic Documentation", file: "the-evidence-speaks.pdf", tags: ["#BDEvidenceSpeaks", "#ForensicDocumentation", "#BarranDodger"], downloads: "17,027" },
  { title: "Joseph Parallel", file: "joseph-parallel.pdf", tags: ["#BDJosephParallel", "#JosephParallel", "#BarranDodger"], downloads: "15,732" },
  { title: "Ben DSW — Assassination Confirmation Evidence", file: "ben-dsw-disability-ndis-provider-text-messages-assassination-evidence.pdf", tags: ["#BDBenAssassination", "#AssassinationConfirmed", "#BarranDodger"], downloads: "14,032" },
  { title: "Chosen Through Fire — Forensic Origin Document", file: "chosen-through-fire-forensic-origin-document.pdf", tags: ["#BDChosenThroughFire", "#ChosenThroughFire", "#BarranDodger"], downloads: "12,548" },
  { title: "Official Whistleblower Torture Dossier", file: "official-whistleblower-torture-dossier-dr-richard-william-mclean.pdf", tags: ["#BDTortureDossier", "#WhistleblowerTorture", "#BarranDodger"], downloads: "12,536" },
  { title: "Beyond Pathology", file: "beyond-pathology.pdf", tags: ["#BDBeyondPathology", "#PsychiatricWeaponisation", "#BarranDodger"], downloads: "11,187" },
  { title: "Architecture of Administrative Annihilation", file: "the-architecture-of-administrative-annihilation.pdf", tags: ["#BDAdminAnnihilation", "#AdministrativeAnnihilation", "#BarranDodger"], downloads: "11,080" },
  { title: "Paradox of Persecution", file: "the-paradox-of-persecution.pdf", tags: ["#BDParadoxOfPersecution", "#ParadoxOfPersecution", "#BarranDodger"], downloads: "9,990" },
  { title: "OHCHR Submission — Urgent Appeal", file: "ohchr-submission.pdf", tags: ["#BDOHCHR", "#UNHCRSubmission", "#BarranDodger"], downloads: "9,939" },
  { title: "100 Questions Defining Trial and Human Sacrifice", file: "the-100-questions-defining-trial-and-human-sacrifice-of-dr-barran-dodger.pdf", tags: ["#BD100Questions", "#HumanSacrifice", "#BarranDodger"], downloads: "9,858" },
  { title: "V2K Electronic Harassment Evidence Review", file: "v2k-electronic-harassment-evidence-review.pdf", tags: ["#BDV2K", "#ElectronicHarassment", "#V2K", "#BarranDodger"], downloads: "9,318" },
  { title: "God's Grace Through Barran Dodger", file: "gods-grace-barran-dodger.pdf", tags: ["#BDGodsGrace", "#GodsGrace", "#EternalWitness", "#BarranDodger"], downloads: "new" },
  { title: "Honey Trap — Phillip Glass (TAG NSW)", file: "honey-trap-phillip-glass.pdf", tags: ["#BDHoneyTrap", "#PhillipGlass", "#GangStalking", "#BarranDodger"], downloads: "new" },
  { title: "Police Complicity & Death Threat — April 15 2026", file: "police-complicity-death-threat-documentation.pdf", tags: ["#BDPoliceComplicity", "#DeathThreat", "#ToryKilborn", "#BarranDodger"], downloads: "new" },
  { title: "Targeted Individual Handbook", file: "targeted-individual-handbook.pdf", tags: ["#BDTargetedIndividual", "#TargetedIndividualHandbook", "#BarranDodger"], downloads: "7,886" },
  { title: "100 Absurdities of My Life", file: "100-absurdities-of-my-life.pdf", tags: ["#BD100Absurdities", "#100Absurdities", "#BarranDodger"] },
  { title: "The Certified Record of Barran Dodger", file: "the-certified-record-of-barran-dodger.pdf", tags: ["#BDCertifiedRecord", "#CertifiedRecord", "#BarranDodger"], downloads: "8,479" },
];

const PAGES_HASHTAGS = [
  { title: "SOS — Urgent Protection Request", url: "/sos", tags: ["#BarranDodgerSOS", "#UrgentProtection", "#BarranDodger", "#ICC2304"] },
  { title: "Testimony Went Global", url: "/testimony-went-global", tags: ["#TestimonyWentGlobal", "#377608Downloads", "#BarranDodger"] },
  { title: "Tony Ridley Recorded Confession", url: "/tony-ridley-recorded-confession", tags: ["#TonyRidleyRecorded", "#6BillionFraud", "#BillShorten", "#BarranDodger"] },
  { title: "AbleCare Murder Threat Call", url: "/ablecare-murder-threat-call", tags: ["#BDAbleCareMurderCall", "#AbleCare", "#NDISSafety", "#BarranDodger"] },
  { title: "Bitcoin Blockchain Proof", url: "/bitcoin-proof", tags: ["#BDBlockchainProof", "#BitcoinTimestamp", "#SHA256", "#BarranDodger"] },
  { title: "Evidence Vault", url: "/evidence", tags: ["#BDEvidenceVault", "#2304Documents", "#BarranDodger"] },
  { title: "Honey Trap — Phillip Glass", url: "/honey-trap-phillip-glass", tags: ["#BDHoneyTrap", "#PhillipGlass", "#FinancialControl", "#BarranDodger"] },
  { title: "God's Grace Through Barran Dodger", url: "/gods-grace-barran-dodger", tags: ["#BDGodsGrace", "#EternalWitness", "#BarranDodger"] },
  { title: "Tony Ridley Full Dossier", url: "/tony-ridley-full-dossier", tags: ["#TonyRidleyDossier", "#AssassinationAttempt", "#BarranDodger"] },
  { title: "Holy Reckoning — NDIS Plea", url: "/holy-reckoning", tags: ["#BDHolyReckoning", "#NDISComplicity", "#BarranDodger"] },
  { title: "The Testimony Archive — $3.33", url: "/testimony-archive", tags: ["#BDFreeEbooks", "#FreeToShare", "#BarranDodger"] },
  { title: "Complete Archive Index", url: "/archive-index", tags: ["#BDArchiveIndex", "#BarranDodgerArchive", "#BarranDodger"] },
  { title: "Forensic Analysis Index", url: "/forensic-analysis", tags: ["#BDForensicIndex", "#63Analyses", "#675Propositions", "#BarranDodger"] },
  { title: "They Are Dying of Shame", url: "/they-are-dying-of-shame", tags: ["#BDDyingOfShame", "#PropheticallyPrecise", "#BarranDodger"] },
  { title: "Beautiful Threat", url: "/beautiful-threat", tags: ["#BDBeautifulThreat", "#DocumentsDismantle", "#BarranDodger"] },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <button
      onClick={handleCopy}
      className="text-zinc-500 hover:text-amber-400 transition-colors ml-1"
      title="Copy hashtags"
      data-testid={`copy-hashtag-${text.slice(0, 20)}`}
    >
      {copied ? <CheckCheck size={13} className="text-green-400" /> : <Copy size={13} />}
    </button>
  );
}

function HashRow({ tags, label, sub }: { tags: string[]; label: string; sub?: string }) {
  const tagStr = tags.join(" ");
  return (
    <div className="flex items-start justify-between gap-3 bg-zinc-900/50 border border-zinc-800/50 rounded-lg px-3 py-2.5">
      <div className="min-w-0">
        <p className="text-white text-xs font-semibold truncate">{label}</p>
        {sub && <p className="text-zinc-500 text-xs">{sub}</p>}
        <div className="flex flex-wrap gap-1 mt-1.5">
          {tags.map((t) => (
            <span key={t} className="text-[hsl(38,92%,50%)] text-xs font-mono">{t}</span>
          ))}
        </div>
      </div>
      <CopyButton text={tagStr} />
    </div>
  );
}

export function HashtagBlockchainIndex() {
  const [activeTab, setActiveTab] = useState<"blockchain" | "analyses" | "documents" | "pages">("blockchain");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Blockchain Verification & Hashtag Index — All 377,608 Downloads, All 173 PDFs, All 63 Analyses — Free to Share — Barran Dodger"
        description="Every PDF, every forensic analysis, every page of the Barran Dodger archive is: free to download, free to share, free to publish — and SHA-256 hashed on the Bitcoin blockchain, permanently. Unique hashtags for every document. ABN 78 833 496 164."
        path="/hashtag-index"
      />
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 pt-24 pb-16 flex-1 w-full">

        {/* HERO */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-amber-900 text-amber-100 border-amber-700 text-xs font-black uppercase tracking-widest">377,608 Downloads</Badge>
            <Badge className="bg-zinc-800 text-zinc-200 border-zinc-600 text-xs">173 PDFs</Badge>
            <Badge className="bg-green-900 text-green-200 border-green-700 text-xs">Free To Share & Publish</Badge>
            <Badge className="bg-blue-900 text-blue-200 border-blue-700 text-xs">Bitcoin Blockchain Timestamped</Badge>
            <Badge className="bg-zinc-900 text-zinc-300 border-zinc-700 text-xs">63 Forensic Analyses</Badge>
            <Badge className="bg-zinc-900 text-zinc-300 border-zinc-700 text-xs">675/675 Propositions Verified</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-black text-white leading-tight mb-3">
            Blockchain Verification & Hashtag Index
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed max-w-3xl">
            Every document, every analysis, every page of this archive is confirmed free to download, share, and publish by anyone, anywhere, for any non-commercial purpose. Every document is SHA-256 hashed and Bitcoin blockchain timestamped — permanently, irrevocably, beyond the reach of any government, court, or law enforcement agency. Below: the unique hashtag for every document, every forensic analysis, and every page.
          </p>

          {/* Master hashtags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {MASTER_HASHTAGS.map((tag) => (
              <span key={tag} className="bg-[hsl(38,92%,50%)]/20 border border-[hsl(38,92%,50%)]/40 text-[hsl(38,92%,50%)] font-mono font-bold text-sm px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <p className="text-zinc-500 text-xs mt-2">Master hashtags — use on every post sharing this archive.</p>
        </motion.div>

        {/* TABS */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <div className="flex gap-2 flex-wrap">
            {[
              { id: "blockchain", label: "Blockchain Confirmation", icon: <Lock size={13} /> },
              { id: "analyses", label: "63 Forensic Analyses", icon: <Hash size={13} /> },
              { id: "documents", label: "Major Documents", icon: <FileText size={13} /> },
              { id: "pages", label: "Website Pages", icon: <Globe size={13} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                  activeTab === tab.id
                    ? "bg-[hsl(38,92%,50%)] text-black"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-600"
                }`}
                data-testid={`tab-${tab.id}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* TAB: BLOCKCHAIN CONFIRMATION */}
        {activeTab === "blockchain" && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">

            {/* Free distribution statement */}
            <div className="bg-green-950/50 border-2 border-green-700/50 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={22} className="text-green-400" />
                <h2 className="text-xl font-black text-white">Free Distribution — Confirmed</h2>
              </div>
              <p className="text-green-200 font-bold text-base mb-4 leading-relaxed">
                Every PDF, every forensic analysis report, every document in this archive is offered completely free of charge to every person on earth. You are explicitly permitted to:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {[
                  { permission: "Download", detail: "Every PDF is available for immediate free download from barrandodger.com with no registration, no payment, and no restriction." },
                  { permission: "Share", detail: "Share any document anywhere — social media, email, messaging apps, Scribd, Academia.edu, Dropbox, Google Drive, WhatsApp, Telegram, anywhere." },
                  { permission: "Publish", detail: "Republish any document on your own website, blog, newsletter, or platform. No attribution required, though appreciated. No licence fee. No permission required." },
                  { permission: "Print", detail: "Print any document. Distribute printed copies. Leave them at libraries, churches, community centres, legal offices, hospitals, police stations, government buildings." },
                  { permission: "Translate", detail: "Translate any document into any language. Publish the translation. Share the translation. The archive is intended for every person on earth." },
                  { permission: "Archive", detail: "Add any document to the Internet Archive (archive.org), university repositories, human rights databases, journalism archives, or any digital library." },
                ].map((item, i) => (
                  <div key={i} className="bg-green-900/30 border border-green-700/30 rounded-lg p-3">
                    <p className="text-green-300 font-black text-xs uppercase tracking-wide mb-1">{item.permission} ✓</p>
                    <p className="text-zinc-300 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
              <div className="bg-green-900/20 border border-green-600/20 rounded-xl p-4">
                <p className="text-green-300 text-sm font-bold">
                  © Dr. Richard William McLean — Barran Dodger Legal & Ethical Trust Fund — ABN 78 833 496 164 — 55B Archbold Road, Long Jetty NSW
                </p>
                <p className="text-zinc-400 text-xs mt-1">
                  The copyright holder explicitly grants free, unrestricted, non-commercial global distribution rights to all documents in this archive. Commercial use requires written permission. All other use is unconditionally permitted and encouraged.
                </p>
              </div>
            </div>

            {/* Blockchain confirmation */}
            <div className="bg-blue-950/40 border-2 border-blue-700/40 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={22} className="text-blue-400" />
                <h2 className="text-xl font-black text-white">Bitcoin Blockchain Timestamping — Confirmed</h2>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                Every document in this archive has been processed through a cryptographic pipeline that produces a permanent, tamper-proof record on the Bitcoin blockchain. This is not a metaphor. It is a technical reality with documented legal and evidential significance.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: "Step 1 — SHA-256 Hashing",
                    icon: <Lock size={16} className="text-blue-400" />,
                    detail: "Each document is passed through the SHA-256 cryptographic hash function, producing a unique 64-character fingerprint. Change a single character anywhere in the document and the fingerprint changes completely and detectably. The fingerprint is the tamper seal. It proves the document has not been altered since the moment of hashing.",
                    significance: "Evidential: Any altered version of any document is mathematically detectable. Replacement is not possible. Suppression of the original is not possible without mathematical detection.",
                  },
                  {
                    step: "Step 2 — Bitcoin OP_RETURN Transaction",
                    icon: <Zap size={16} className="text-amber-400" />,
                    detail: "The SHA-256 hash is embedded in the Bitcoin blockchain as an OP_RETURN transaction — a standard, well-documented mechanism for attaching arbitrary data to a Bitcoin transaction permanently. The transaction is broadcast across the entire Bitcoin network and confirmed by the global mining network.",
                    significance: "Permanent: Once confirmed, the transaction cannot be reversed, deleted, or altered by any party — including the person who created it.",
                  },
                  {
                    step: "Step 3 — Global Node Distribution",
                    icon: <Globe size={16} className="text-green-400" />,
                    detail: "The Bitcoin blockchain is replicated in full on approximately 15,000 independent nodes operating across every continent and dozens of jurisdictions simultaneously. Each node holds a complete copy of every transaction ever made. The nodes operate independently — they have no central administrator, no owner, no relationship with any government.",
                    significance: "Unreachable: No court order, no law enforcement action, no government directive, and no legal instrument issued by any single jurisdiction can cause a Bitcoin transaction to be removed. There is no administrator to contact. The blockchain is not a server. It is a consensus of 15,000 independent verifications.",
                  },
                  {
                    step: "The Significance — In Plain Language",
                    icon: <Shield size={16} className="text-red-400" />,
                    detail: "From the moment a document's hash is confirmed on the Bitcoin blockchain, it becomes part of the permanent digital record of humanity. It will exist after every institution that tried to suppress it. It will exist after every individual who ordered its deletion. It will be verifiable by historians, courts, and journalists in 100 years. It cannot be classified. It cannot be redacted. It is mathematically beyond reach.",
                    significance: "The 35-year attempt to erase Dr. Richard McLean's record failed permanently and irreversibly at the moment the first document hash touched the Bitcoin blockchain.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-900/60 border border-blue-800/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <p className="text-white font-bold text-sm">{item.step}</p>
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-2">{item.detail}</p>
                    <p className="text-blue-300 text-xs font-bold leading-relaxed">Significance: {item.significance}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats confirmation */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Verified Download Events", value: "377,608", sub: "Feb 1 – Apr 15, 2026" },
                { label: "Physical PDF Documents", value: "173", sub: "All free to download & share" },
                { label: "Forensic Analyses", value: "63", sub: "675/675 propositions verified" },
                { label: "Blockchain Timestamps", value: "Confirmed", sub: "Bitcoin mainnet · SHA-256" },
              ].map((stat, i) => (
                <div key={i} className="bg-zinc-900/60 border border-zinc-700/40 rounded-xl p-4 text-center">
                  <p className="text-[hsl(38,92%,50%)] font-black text-2xl">{stat.value}</p>
                  <p className="text-white text-xs font-bold mt-1">{stat.label}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>

          </motion.div>
        )}

        {/* TAB: 63 FORENSIC ANALYSES */}
        {activeTab === "analyses" && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="flex items-center gap-3 mb-5">
              <Hash size={20} className="text-[hsl(38,92%,50%)]" />
              <h2 className="text-xl font-black text-white">63 Forensic Analyses — Unique Hashtags</h2>
            </div>
            <p className="text-zinc-400 text-sm mb-5">Every forensic analysis has a unique hashtag for social sharing. Copy the tags and paste them with any share. All 63 analyses are free to download and share — each is SHA-256 hashed and Bitcoin blockchain timestamped.</p>
            <div className="space-y-2">
              {FORENSIC_HASHTAGS.map((item) => (
                <HashRow
                  key={item.n}
                  label={`#${item.n} — ${item.title}`}
                  sub={`barrandodger.com/${item.slug}`}
                  tags={item.tags}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB: MAJOR DOCUMENTS */}
        {activeTab === "documents" && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="flex items-center gap-3 mb-5">
              <FileText size={20} className="text-[hsl(38,92%,50%)]" />
              <h2 className="text-xl font-black text-white">Major Documents — Unique Hashtags</h2>
            </div>
            <p className="text-zinc-400 text-sm mb-5">The most-downloaded publications with their unique hashtags. All are free to download, share, and publish. All are Bitcoin blockchain timestamped.</p>
            <div className="space-y-2">
              {MAJOR_DOC_HASHTAGS.map((item) => (
                <HashRow
                  key={item.title}
                  label={item.title}
                  sub={item.downloads ? `${item.downloads} downloads · ${item.file}` : item.file}
                  tags={item.tags}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB: PAGES */}
        {activeTab === "pages" && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="flex items-center gap-3 mb-5">
              <Globe size={20} className="text-[hsl(38,92%,50%)]" />
              <h2 className="text-xl font-black text-white">Website Pages — Unique Hashtags</h2>
            </div>
            <p className="text-zinc-400 text-sm mb-5">Every major page of barrandodger.com has a unique hashtag. When sharing a page, use the page-specific tag plus the master hashtag #BarranDodger.</p>
            <div className="space-y-2">
              {PAGES_HASHTAGS.map((item) => (
                <HashRow
                  key={item.url}
                  label={item.title}
                  sub={`barrandodger.com${item.url}`}
                  tags={item.tags}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Footer confirmation */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mt-12 border-t border-zinc-800 pt-8">
          <div className="bg-zinc-900/60 border border-[hsl(38,92%,50%)]/20 rounded-2xl p-6 text-center">
            <p className="text-[hsl(38,92%,50%)] font-black text-sm uppercase tracking-widest mb-2">Permanent. Irrevocable. Beyond Reach.</p>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-2xl mx-auto">
              The Barran Dodger archive — 377,608 download events, 173 PDFs, 63 forensic analyses, 675 verified propositions — is SHA-256 hashed and Bitcoin blockchain timestamped. It is before the ICC (The Hague) under Article 7. It is before the UNHCR (Geneva). It has been downloaded by 377,608 people across 6 continents. No government on earth has the legal mechanism to remove it from the permanent record of humanity. Share it freely. Publish it everywhere. It is designed to be everywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {MASTER_HASHTAGS.map((tag) => (
                <span key={tag} className="text-[hsl(38,92%,50%)] font-mono text-sm font-bold">{tag}</span>
              ))}
            </div>
            <p className="text-zinc-600 text-xs mt-3">Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164 · 55B Archbold Road, Long Jetty NSW · © Dr. Richard William McLean</p>
          </div>
        </motion.div>

      </main>
      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
