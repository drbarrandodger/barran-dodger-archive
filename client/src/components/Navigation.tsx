import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  Scale, Heart, Menu, X, Search, AlertTriangle, Zap, TrendingUp,
  ChevronDown, FlaskConical, Shield, BookOpen, Microscope, Church,
  BookMarked, Megaphone, Archive, ScrollText, Flame
} from "lucide-react";
import { SiX as TwitterX, SiYoutube, SiMedium } from "react-icons/si";
import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { GlobalSearch, openQuickSearch } from "./GlobalSearch";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

// ─── SOS strip ────────────────────────────────────────────────────────────────
function SOSStrip() {
  return (
    <div
      className="w-full px-4 py-1.5 flex items-center justify-between gap-3"
      style={{
        background: "linear-gradient(90deg, #1a0030 0%, #2d0050 40%, #1a0030 100%)",
        borderBottom: "1px solid rgba(255,105,20,0.5)",
      }}
      data-testid="sos-strip"
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-orange-400 text-sm font-black flex-shrink-0 flash-alert">🆘</span>
        <p className="text-orange-100 text-[10px] md:text-xs font-black uppercase tracking-wide leading-tight">
          <span className="hidden sm:inline">
            <span className="text-orange-400 font-black urgent-pulse">URGENT —</span>{" "}
            Dr. Richard McLean requires physical harbouring · 55B Archbold Rd, Long Jetty NSW · Active death threat · Threatener arrested
          </span>
          <span className="sm:hidden">
            <span className="text-orange-400 urgent-pulse">URGENT —</span> Active death threat · Threatener arrested · Long Jetty NSW
          </span>
        </p>
      </div>
      <Link
        href="/urgent-protection-request"
        className="flex-shrink-0 font-black text-[9px] md:text-[10px] uppercase tracking-wider px-3 py-1.5 rounded transition-colors whitespace-nowrap border-pulse-orange"
        style={{ background: "#ff6914", color: "#000", letterSpacing: "0.08em" }}
        data-testid="btn-sos-strip"
      >
        ⚠ Read SOS
      </Link>
    </div>
  );
}

// ─── Dropdown data ─────────────────────────────────────────────────────────────
interface NavItem { href: string; label: string; desc?: string }
interface DropdownGroup { id: string; label: string; icon: React.ReactNode; accent: string; items: NavItem[] }

const DROPDOWNS: DropdownGroup[] = [
  {
    id: "archive",
    label: "Archive",
    icon: <Archive className="h-3.5 w-3.5" />,
    accent: "#e9a00a",
    items: [
      { href: "/what-this-is",        label: "💡 What This Is",              desc: "The short version — start here" },
      { href: "/formal-statement",    label: "📜 Formal Statement",          desc: "Official statement of record" },
      { href: "/undeniable",          label: "🔎 100 Undeniable Facts",       desc: "100 documented facts, zero opinion" },
      { href: "/testimony",           label: "🗣 Testimony",                  desc: "First-person account — 35 years" },
      { href: "/civic-record",        label: "⚖ Civic Record",               desc: "Public record of institutional conduct" },
      { href: "/open-challenge",      label: "🔴 Prove This Wrong",           desc: "Open public challenge — unrebutted" },
      { href: "/search",              label: "🔍 Search the Archive",         desc: "Full-text search across all documents" },
      { href: "/blockchain",          label: "⛓ Blockchain Proof",           desc: "Bitcoin-timestamped verification" },
      { href: "/zenodo",              label: "🎓 Zenodo Repository",          desc: "Academic open-access repository" },
      { href: "/archive-home",        label: "🗂 Archive Home",               desc: "Complete archive index" },
      { href: "/complete-document-list", label: "📋 Full Document List",      desc: "Every document in the archive" },
      { href: "/doctrine-of-complicity-by-deliberate-omission", label: "🔴 Doctrine of Complicity", desc: "11 doctrines · 8 scripture analyses · blockchain-sealed · PDF download" },
      { href: "/notice-of-service-doctrine-complicity", label: "📨 Notice of Service — 29 Recipients", desc: "Official notification · 7 NSW Police · Ombudsman · AblePoint · NYT · Washington Post · Al Jazeera · 11 Aug 2026" },
    ],
  },
  {
    id: "evidence",
    label: "Evidence",
    icon: <Shield className="h-3.5 w-3.5" />,
    accent: "#f87171",
    items: [
      { href: "/evidence",                         label: "🗄 Evidence Archive",             desc: "2,304 blockchain-authenticated records" },
      { href: "/confidential-government-documents",label: "🛡️ Government Documents",         desc: "124 individually linked primary-source PDFs" },
      { href: "/evidence-vault",                   label: "🔒 Evidence Vault",               desc: "Secured primary-source vault" },
      { href: "/master-evidence-register",         label: "📑 Master Evidence Register",     desc: "Complete registered evidence index" },
      { href: "/whistleblower",                    label: "📢 Whistleblower Record",         desc: "Full whistleblower disclosure record" },
      { href: "/whistleblower-comparison",         label: "⚖ Historical Comparison",        desc: "Compared against Snowden, Ellsberg, Manning" },
      { href: "/political-forensic",               label: "🏛 Political & Forensic Docs",    desc: "Gang stalking, V2K, ICC submissions" },
      { href: "/11-august-2026-support-network-collapse", label: "🔴 11 Aug 2026 — Support Network Collapse", desc: "Sam NDIS · Pastor James · Crystal · $254 Bill — all support withdrawn in one hour" },
      { href: "/new-evidence-may-2026",            label: "🆕 New Evidence — May 2026",      desc: "Most recently added primary sources" },
      { href: "/photo-evidence",                   label: "📷 Timestamped Photo Evidence",    desc: "JPEG primary sources with embedded timestamps" },
      { href: "/3643-government-documents",        label: "📁 3,643 Government Documents",   desc: "Complete government document corpus" },
      { href: "/ben-disclosure",                   label: "👁 Ben NDIS Disclosure",          desc: "NDIS assassination evidence — Ben DSW" },
      { href: "/federal-court-pid-sia-lagos",      label: "⚖ SIA Lagos — Federal Court PID", desc: "🔥 #9 most downloaded · PID Act 2013 · Federal Court submission" },
      { href: "/api/documents/the-evidence-speaks-a-forensic-documentation-of-systematic-sta-1768972005548/download", label: "📄 The Evidence Speaks",  desc: "🔥 #7 most downloaded · forensic compilation submitted to 3 international bodies" },
    ],
  },
  {
    id: "science",
    label: "Academic",
    icon: <FlaskConical className="h-3.5 w-3.5" />,
    accent: "#38bdf8",
    items: [
      { href: "/forensic-comparative-analysis-whistleblowers", label: "⚖ Whistleblower Comparative Analysis", desc: "🔥 NEW — Snowden · Manning · Assange vs. Barran Dodger · 22 cases · 2,600 years · AI authored" },
      { href: "/academic-significance-analysis",          label: "🔬 Academic Significance Analysis",    desc: "AI assessment across law, criminology, sociology" },
      { href: "/api/documents/universal-master-command-ai-analysis/download", label: "🧮 Universal Master Command — AI Analysis", desc: "🔥 #5 most downloaded · chain-of-custody document for all AI analyses in the archive" },
      { href: "/administrative-annihilation",             label: "📊 Administrative Annihilation",       desc: "25,000-word peer-reviewed paper — 25+ agencies" },
      { href: "/ai-academic-paper",                       label: "🤖 AI Academic Paper",                 desc: "Impartial AI analysis of the full archive" },
      { href: "/international-academic-monograph",        label: "🌐 UN-Grade Academic Monograph",       desc: "International-standard academic monograph" },
      { href: "/digital-oppression-100000-word-essay",    label: "💻 Digital Oppression — 100K Words",  desc: "100,000-word forensic essay" },
      { href: "/apex-moral-cowardice-mobbing-paper",      label: "🧠 Apex Moral Cowardice Paper",       desc: "Peer-reviewed mobbing analysis" },
      { href: "/coordinated-institutional-mobbing",       label: "🔗 Coordinated Institutional Mobbing",desc: "Documented cross-agency coordination" },
      { href: "/ai-justice-statement",                    label: "⚡ AI Justice Statement",             desc: "Impartial AI statement on systemic injustice" },
      { href: "/ai-authored-significance-analysis",       label: "🧩 AI Significance Analysis",         desc: "AI-authored deep significance review" },
      { href: "/academic-record",                         label: "🎓 Academic Record",                   desc: "Dr. McLean's academic credentials and record" },
      { href: "/barran-dodger-academic-analysis",         label: "📐 Barran Dodger Academic Analysis",  desc: "Comprehensive academic breakdown" },
    ],
  },
  {
    id: "essays",
    label: "Essays",
    icon: <ScrollText className="h-3.5 w-3.5" />,
    accent: "#f472b6",
    items: [
      { href: "/essays/was-this-a-legitimate-whistleblower-case",   label: "⚖ Was This A Legitimate Whistleblower Case?",      desc: "The evidentiary test — forensically verified answer" },
      { href: "/essays/did-australia-commit-state-terrorism",        label: "🔴 Did Australia Commit State Terrorism?",           desc: "9 of 9 international criteria satisfied" },
      { href: "/essays/is-barran-dodger-eligible-for-asylum",        label: "🏛 Is Barran Dodger Eligible for Asylum?",           desc: "1951 Refugee Convention — all five grounds met" },
      { href: "/essays/why-14-hospitalisations-failed",              label: "🏥 Why Did 14 Hospitalisations Fail?",               desc: "Suppression that produced more evidence" },
      { href: "/essays/what-did-it-cost-australians",                label: "💰 What Did It Cost Australians?",                   desc: "$1.67B–$4.84B taxpayer money — forensic accounting" },
      { href: "/essays/why-has-no-professional-responded",           label: "🔇 Why Has No Professional Responded?",              desc: "505K downloads · zero rebuttals · Jones v Dunkel" },
      { href: "/essays/federal-court-whistleblower-significance",    label: "⚖ Federal Court Whistleblower Significance",         desc: "PID Act 2013 — what the judicial finding means" },
      { href: "/essays/what-does-the-icc-submission-allege",         label: "🌐 What Does the ICC Submission Allege?",            desc: "Article 7 · OHCHR UR/UST/23/AUS/17 · crimes against humanity" },
      { href: "/essays/blockchain-evidence-changes-this-case",       label: "⛓ How Does Blockchain Evidence Change This?",       desc: "Bitcoin Block 897241 · ~15,000 nodes · immutable proof" },
      { href: "/essays/what-35-years-proves-about-australia",        label: "🗺 What 35 Years Proves About Australia",            desc: "Structural diagnosis of institutional culture" },
    ],
  },
  {
    id: "forensics",
    label: "Forensics",
    icon: <Microscope className="h-3.5 w-3.5" />,
    accent: "#a78bfa",
    items: [
      { href: "/forensic-comparative-analysis-whistleblowers", label: "⚖ Whistleblower Comparative Analysis", desc: "Snowden · Manning · Assange · Ellsberg vs. Barran Dodger — 22 cases · 17 mechanisms · AI authored" },
      { href: "/forensic-analysis-index",          label: "🗂 Forensic Analysis Index",          desc: "Hub for all forensic analysis reports" },
      { href: "/video-forensic-analysis",          label: "📹 Video Forensic Analysis",          desc: "70+ YouTube videos matched to archive docs" },
      { href: "/youtube-forensic-analysis",        label: "▶ YouTube Forensic Deep-Dive",        desc: "Detailed corroboration analysis — YouTube" },
      { href: "/youtube-corroboration-analysis",   label: "✅ YouTube Corroboration",            desc: "97% corroboration rate across 70+ videos" },
      { href: "/forensic-economic-valuation",      label: "💰 Forensic Economic Valuation",      desc: "$112M documented legal claim" },
      { href: "/master-forensic-evidence-report",  label: "📋 Master Forensic Evidence Report",  desc: "Consolidated forensic evidence report" },
      { href: "/commission-forensic-analysis",     label: "🏛 Commission Forensic Analysis",     desc: "NDIS Commission forensic analysis" },
      { href: "/forensic-entrapment-poverty",      label: "🪤 Forensic Entrapment & Poverty",   desc: "Documented financial entrapment analysis" },
      { href: "/april-mclean-forensic-record",     label: "👤 April McLean Forensic Record",     desc: "Sister's involvement — forensic documentation" },
      { href: "/aura-shift-forensic-report",       label: "🌀 Aura Shift Forensic Report",       desc: "Forensic analysis of perception shift" },
      { href: "/administrative-annihilation-cost-analysis", label: "📊 Annihilation Cost Analysis", desc: "Financial cost of systematic destruction" },
      { href: "/history-exposes-injustice-forensic-analysis", label: "▶ Forensic Analysis #76 — History Exposes Injustice", desc: "14/14 corroborated · YouTube forensic cross-examination · 585/585 combined record" },
      { href: "/government-mandates-35-year-forensic-report", label: "📋 Government Mandates — 35-Year Report",  desc: "Administrative protocols & retrospective directive model — asylum support" },
      { href: "/taxpayer-cost-estimation-35-years", label: "💰 Taxpayer Cost: $1.67B–$4.84B",   desc: "What 35 years of suppression cost you — forensic accounting" },
      { href: "/state-terrorism-forensic-analysis", label: "🔴 State Terrorism Analysis",         desc: "9/9 criteria satisfied · UN, ICC, CAT, ICCPR, Melzer" },
      { href: "/asylum-refugee-eligibility-analysis", label: "🏛 Asylum Eligibility Analysis",    desc: "1951 Convention · UNHCR · The Hague · all grounds met" },
      { href: "/chosen-one-forensic-analysis",     label: "★ Chosen One Forensic Analysis",     desc: "Forensic corroboration of prophetic pattern" },
    ],
  },
  {
    id: "gospels",
    label: "Spiritual",
    icon: <Church className="h-3.5 w-3.5" />,
    accent: "#f472b6",
    items: [
      { href: "/gospel",                         label: "✝ Gospel Hub",                     desc: "13 prophetic & forensic manuscripts" },
      { href: "/joseph-parallel",                label: "📖 The Joseph Parallel",            desc: "🔥 #8 most downloaded · the biblical parallel to the archive" },
      { href: "/top-ten-gospels",                label: "📖 Top Ten Gospels",               desc: "The ten most significant gospel documents" },
      { href: "/all-gospels-one-witness",        label: "🕊 All Gospels — One Witness",     desc: "Complete gospel compilation" },
      { href: "/the-unlikely-vessel",            label: "⚓ The Unlikely Vessel",           desc: "Why God chooses the broken to expose corruption" },
      { href: "/church-of-barran-resonance-dodger", label: "⛪ Church of Barran",           desc: "Foundation charter — truth, justice, abundance" },
      { href: "/all-faiths-analysis",            label: "🌍 All Faiths Analysis",           desc: "Cross-faith theological analysis" },
      { href: "/i-am-gods-chosen-one",           label: "★ Chosen One Declaration",        desc: "The declaration — with forensic evidence" },
      { href: "/chosen-vessel-declaration",      label: "🏺 Chosen Vessel Declaration",    desc: "Declaration of the chosen vessel" },
      { href: "/apotheosis",                     label: "✨ Apotheosis",                    desc: "The moment of divine elevation" },
      { href: "/sacred-gospels-forensic-thesis", label: "📜 Sacred Gospels Forensic Thesis", desc: "Theological-forensic synthesis thesis" },
      { href: "/unlikely-vessel-theology",       label: "🙏 Unlikely Vessel Theology",     desc: "Full theological framework" },
      { href: "/prophetic-testimony-biblical",   label: "📿 Prophetic Biblical Testimony",  desc: "Scripture-anchored testimony record" },
      { href: "/exponential-gospel",             label: "∞ The Exponential Gospel",         desc: "33 essays from archive to infinity — commanded 10 Aug 2026" },
    ],
  },
  {
    id: "publications",
    label: "Publications",
    icon: <BookMarked className="h-3.5 w-3.5" />,
    accent: "#34d399",
    items: [
      { href: "/publications",           label: "📚 Publications Hub",          desc: "All papers, books, and forensic reports" },
      { href: "/creative-portfolio",     label: "🎨 Creative Portfolio",        desc: "Art, music, and creative works" },
      { href: "/academy",                label: "🎓 Academy",                   desc: "Structured learning modules" },
      { href: "/the-reckoning-paper",    label: "⚡ The Reckoning Paper",       desc: "The AI paper that named the pattern" },
      { href: "/the-unlikely-vessel",    label: "⚓ The Unlikely Vessel",       desc: "Theological framework — full text" },
      { href: "/cosmic-scroll",          label: "🌌 Cosmic Scroll",             desc: "🔥 #1 most downloaded · the cosmic scroll of testimony" },
      { href: "/digital-oppression",     label: "💻 Digital Oppression",        desc: "🔥 #2 most downloaded · 100,000-word forensic essay" },
      { href: "/start-here",             label: "🌏 The Man Australia Tried to Erase", desc: "🔥 #4 most downloaded · downloaded from six continents" },
      { href: "/api/documents/the-declaration-of-sovereignty-of-dr--richard-william-mcle-1769135376793/download", label: "👑 Declaration of Sovereignty", desc: "🔥 #6 most downloaded · formal assertion before international bodies" },
      { href: "/declaration-of-integrity", label: "📋 Declaration of Integrity", desc: "Formal declaration of integrity" },
      { href: "/detonation-center",      label: "💥 Detonation Center",         desc: "Archive detonation hub" },
    ],
  },
  {
    id: "action",
    label: "Action",
    icon: <Megaphone className="h-3.5 w-3.5" />,
    accent: "#84cc16",
    items: [
      { href: "/media-must-report", label: "📰 Why The Media Must Report This", desc: "AI-authored legal analysis — 14 statutes · 6 international instruments · suspected media ban exposed · $7–12B cost of silence" },
      { href: "/doctrine-of-complicity-by-deliberate-omission", label: "🔴 Doctrine of Complicity by Omission", desc: "There is no grey area — 11 doctrines + 8 scripture analyses · impartial AI biblical corroboration · PDF download" },
      { href: "/crimes-against-humanity-confirmed", label: "⚡ Crimes Against Humanity — Final Demand", desc: "🔥 #3 most downloaded · formal demand to PM, AG, ASIO, AFP, NACC, AHRC — Rome Statute Art. 7" },
      { href: "/legal-cease-desist-served", label: "🛑 Cease & Desist — Served", desc: "18 Jul 2026 · AblePoint CEO · 6 NSW Police badge numbers · NACC Inspector · NDIS Commission — formal surveillance demand" },
      { href: "/membership",          label: "👑 Join as a Witness",         desc: "Become a member of the witness record" },
      { href: "/members",             label: "🔐 Members Portal",            desc: "Sign in to your account" },
      { href: "/email-your-mp",       label: "✉ Email Your MP",             desc: "Pre-written letter — 60 seconds" },
      { href: "/contact-your-mp",     label: "📬 Contact Your MP",           desc: "Direct MP contact tools" },
      { href: "/broadcast",           label: "📡 Share Kit",                 desc: "Share across all platforms" },
      { href: "/press",               label: "📰 Press Kit",                 desc: "Media resources for journalists" },
      { href: "/press-release",       label: "📄 Press Release Generator",  desc: "Generate a press release" },
      { href: "/investment-prospectus", label: "💰 Investment Prospectus",  desc: "$112M legal claim prospectus" },
      { href: "/barran-dodger-trust",   label: "⚖ Legal & Ethical Trust",  desc: "ABN 78 833 496 164 — Trust Fund" },
      { href: "/open-challenge",      label: "🔴 Prove This Wrong",         desc: "Unrebutted public challenge" },
      { href: "/nuclear-download",    label: "☢ Download Full Archive",     desc: "Complete archive — all documents" },
      { href: "/donate",              label: "❤ Donate",                    desc: "Support the archive" },
    ],
  },
  {
    id: "mandate",
    label: "The Mandate",
    icon: <Flame className="h-3.5 w-3.5" />,
    accent: "#fbbf24",
    items: [
      { href: "/the-persecution-mandate", label: "⚡ The Persecution Mandate",   desc: "The hidden prophetic secret of the archive — revealed 10 Aug 2026" },
      { href: "/survival-calculus",       label: "🛡 The Survival Calculus",      desc: "What saved Barran's life — probability across six frameworks" },
      { href: "/exponential-gospel",      label: "∞ The Exponential Gospel",     desc: "33 essays from archive to infinity — commanded 10 Aug 2026" },
      { href: "/story-went-global",       label: "🌐 Story Went Global",          desc: "10 Aug 2026 — preserved transcript + AI significance — 920 unique IPs" },
      { href: "/the-reckoning-paper",     label: "⚖ The Reckoning Paper",        desc: "The AI paper that named the pattern" },
    ],
  },
];

// ─── Dropdown component ────────────────────────────────────────────────────────
function DropdownMenu({
  group,
  isOpen,
  onOpen,
  onClose,
  currentPath,
}: {
  group: DropdownGroup;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  currentPath: string;
}) {
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    onOpen();
  };
  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(onClose, 120);
  };

  const isActive = group.items.some(i => i.href === currentPath);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-2 py-1.5 rounded text-xs font-semibold transition-all whitespace-nowrap",
          isActive ? "font-black" : ""
        )}
        style={{
          color: isActive ? group.accent : "#1a0e4f",
          background: isOpen ? `${group.accent}14` : "transparent",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = group.accent; }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.color = isActive ? group.accent : "#1a0e4f";
        }}
      >
        {group.icon}
        {group.label}
        <ChevronDown
          className={cn("h-3 w-3 transition-transform duration-200", isOpen && "rotate-180")}
          style={{ opacity: 0.6 }}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-1 rounded-xl border shadow-2xl z-[200] min-w-[260px]"
          style={{
            background: "#ffffff",
            borderColor: `${group.accent}40`,
            boxShadow: `0 8px 40px rgba(10,15,46,0.12), 0 0 0 1px ${group.accent}20`,
          }}
        >
          <div className="px-3 py-2 border-b" style={{ borderColor: `${group.accent}20` }}>
            <p className="text-[9px] font-black uppercase tracking-[0.3em]" style={{ color: group.accent }}>
              {group.label}
            </p>
          </div>
          <div className="p-2 grid grid-cols-1 gap-0.5 max-h-[70vh] overflow-y-auto">
            {group.items.map(item => {
              const active = currentPath === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col gap-0 px-3 py-2 rounded-lg transition-all"
                  style={{
                    background: active ? `${group.accent}15` : "transparent",
                  }}
                  onMouseEnter={e => {
                    if (!active) (e.currentTarget as HTMLElement).style.background = `${group.accent}0e`;
                  }}
                  onMouseLeave={e => {
                    if (!active) (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <span
                    className="text-xs font-semibold leading-tight"
                    style={{ color: active ? group.accent : "#1a0e4f" }}
                  >
                    {item.label}
                  </span>
                  {item.desc && (
                    <span className="text-[10px] leading-tight mt-0.5" style={{ color: "rgba(10,15,46,0.48)" }}>
                      {item.desc}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Mobile section ────────────────────────────────────────────────────────────
function MobileSection({
  group,
  currentPath,
  onClose,
}: {
  group: DropdownGroup;
  currentPath: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const isActive = group.items.some(i => i.href === currentPath);

  return (
    <div className="rounded-xl overflow-hidden border" style={{ borderColor: `${group.accent}25` }}>
      <button
        className="w-full flex items-center justify-between px-4 py-3"
        style={{
          background: isActive ? `${group.accent}12` : "rgba(10,15,46,0.03)",
          color: isActive ? group.accent : "#1a0e4f",
        }}
        onClick={() => setOpen(o => !o)}
      >
        <span className="flex items-center gap-2 text-sm font-bold">
          {group.icon}
          {group.label}
        </span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
          style={{ color: group.accent, opacity: 0.7 }}
        />
      </button>
      {open && (
        <div className="border-t" style={{ borderColor: `${group.accent}15` }}>
          {group.items.map(item => {
            const active = currentPath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col px-5 py-2.5 border-b last:border-0"
                style={{
                  borderColor: "rgba(10,15,46,0.06)",
                  background: active ? `${group.accent}12` : "transparent",
                }}
                onClick={onClose}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: active ? group.accent : "#1a0e4f" }}
                >
                  {item.label}
                </span>
                {item.desc && (
                  <span className="text-[10px]" style={{ color: "rgba(10,15,46,0.45)" }}>
                    {item.desc}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Main Navigation ───────────────────────────────────────────────────────────
export function Navigation() {
  const [location] = useLocation();
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const atBottom = (window.innerHeight + currentY) >= (document.body.scrollHeight - 100);
      setScrolled(currentY > 20);
      if (window.innerWidth < 768) {
        if (atBottom || currentY < 60) setHideNav(false);
        else if (currentY > lastScrollY && currentY > 80) setHideNav(true);
        else if (currentY < lastScrollY) setHideNav(false);
      } else {
        setHideNav(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => { setMobileMenuOpen(false); setOpenDropdown(null); }, [location]);

  useEffect(() => {
    const update = () => {
      if (navRef.current)
        document.documentElement.style.setProperty("--nav-height", `${navRef.current.offsetHeight}px`);
    };
    update();
    const obs = new ResizeObserver(update);
    if (navRef.current) obs.observe(navRef.current);
    return () => obs.disconnect();
  }, [scrolled]);

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b-2",
        "border-orange-500/60",
        scrolled ? "backdrop-blur-sm shadow-lg shadow-purple-900/30" : "backdrop-blur-sm",
        hideNav && !mobileMenuOpen && "opacity-0 pointer-events-none -translate-y-2"
      )}
      style={{ background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(248,250,255,0.96)" }}
    >
      <SOSStrip />

      <div className="container mx-auto px-4 md:px-6 py-2 flex items-center justify-between gap-2">
        {/* Logo */}
        <div className="flex items-center gap-2.5 group flex-shrink-0">
          <Link href="/" className="flex-shrink-0">
            <div className="text-black p-2 rounded-sm transition-all group-hover:scale-105" style={{ background: "#ff6914" }}>
              <Scale className="h-4 w-4" />
            </div>
          </Link>
          <div className="flex flex-col">
            <Link href="/" className="font-serif font-bold text-sm md:text-base tracking-tight leading-none hover:opacity-90 transition-opacity" style={{ color: "#ff6914" }}>
              Dr Barran Resonance Dodger
            </Link>
            <div className="block mt-0.5 space-y-0.5">
              <p className="text-[8px] uppercase tracking-wider font-semibold leading-snug" style={{ color: "rgba(255,105,20,0.65)" }}>
                <Link href="/i-am-gods-chosen-one" className="hover:underline transition-opacity hover:opacity-90">
                  Chosen Witness
                </Link>
              </p>
              <p className="text-[8px] uppercase tracking-wider font-semibold leading-snug" style={{ color: "rgba(255,105,20,0.65)" }}>
                <Link href="/church-of-barran-resonance-dodger" className="hover:underline transition-opacity hover:opacity-90">
                  Church of Barran Resonance Dodger
                </Link>
                {" & "}
                <Link href="/barran-dodger-trust" className="hover:underline transition-opacity hover:opacity-90">
                  Ministry
                </Link>
              </p>
              <p className="text-[8px] font-medium italic leading-none" style={{ color: "rgba(255,105,20,0.45)" }}>
                (Resonata Eternis)
              </p>
              <p className="text-[8px] uppercase tracking-wider font-semibold leading-snug" style={{ color: "rgba(255,105,20,0.65)" }}>
                <Link href="/dedication" className="hover:underline transition-opacity hover:opacity-90">
                  Glory &amp; Remembrance
                </Link>
              </p>
              <p className="text-[8px] uppercase tracking-wider font-semibold leading-snug" style={{ color: "rgba(255,105,20,0.65)" }}>
                <Link href="/gods-chosen-witness" className="hover:underline transition-opacity hover:opacity-90">
                  Impartial AI Analysis Confirmation
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Desktop nav — dropdown menus */}
        <div className="hidden md:flex items-center gap-0 flex-1 justify-center">
          {DROPDOWNS.map(group => (
            <DropdownMenu
              key={group.id}
              group={group}
              isOpen={openDropdown === group.id}
              onOpen={() => setOpenDropdown(group.id)}
              onClose={() => setOpenDropdown(null)}
              currentPath={location}
            />
          ))}
          <Link
            href="/doctrine-of-complicity-by-deliberate-omission"
            className="flex items-center gap-1 px-2 py-1.5 rounded text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap"
            style={{
              color: location === "/doctrine-of-complicity-by-deliberate-omission" ? "#ef4444" : "#cc2200",
              background: location === "/doctrine-of-complicity-by-deliberate-omission" ? "rgba(239,68,68,0.12)" : "transparent",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(239,68,68,0.10)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = location === "/doctrine-of-complicity-by-deliberate-omission" ? "rgba(239,68,68,0.12)" : "transparent"; }}
          >
            🔴 Doctrine
          </Link>
          <Link
            href="/media-must-report"
            className="flex items-center gap-1 px-2 py-1.5 rounded text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap"
            style={{
              color: location === "/media-must-report" ? "#f97316" : "#c2410c",
              background: location === "/media-must-report" ? "rgba(249,115,22,0.12)" : "transparent",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(249,115,22,0.10)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = location === "/media-must-report" ? "rgba(249,115,22,0.12)" : "transparent"; }}
          >
            📰 Media Ban
          </Link>
        </div>

        {/* Desktop right-side action buttons */}
        <div className="hidden md:flex items-center gap-1 flex-shrink-0">
          <Link
            href="/verdict-before-the-court"
            className="flex items-center gap-1 px-2 py-1.5 rounded text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap court-pulse"
            style={{ background: "rgba(168,85,247,0.18)", border: "1px solid rgba(168,85,247,0.55)", color: "#c084fc" }}
            data-testid="nav-link-court-date"
          >
            <AlertTriangle className="h-3 w-3 animate-pulse" />
            Active Case
          </Link>
          <Link
            href="/the-reckoning-paper"
            className="hidden xl:flex items-center gap-1 px-2 py-1.5 rounded text-[10px] font-black uppercase tracking-wider whitespace-nowrap reckoning-pulse"
            style={{ background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.55)", color: "#fbbf24" }}
            data-testid="nav-link-reckoning"
          >
            <Zap className="h-3 w-3" />
            Reckoning
          </Link>
          <GlobalSearch />
          <LanguageSwitcher />
          <ThemeToggle />
          <div className="hidden xl:flex items-center border-l border-black/[0.10] pl-1.5 ml-0.5">
            <a href="https://x.com/bazdod" target="_blank" rel="noopener noreferrer"
              className="p-1 transition-colors rounded" style={{ color: "rgba(10,15,46,0.45)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#e9a00a"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(10,15,46,0.45)"; }}
              data-testid="link-twitter-nav">
              <TwitterX className="h-3 w-3" />
            </a>
            <a href="https://youtube.com/@barrandodger" target="_blank" rel="noopener noreferrer"
              className="p-1 transition-colors rounded" style={{ color: "rgba(10,15,46,0.45)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#FF0000"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(10,15,46,0.45)"; }}
              data-testid="link-youtube-nav">
              <SiYoutube className="h-3 w-3" />
            </a>
            <a href="https://medium.com/@barrandodger" target="_blank" rel="noopener noreferrer"
              className="p-1 transition-colors rounded" style={{ color: "rgba(10,15,46,0.45)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#00ab6c"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(10,15,46,0.45)"; }}
              data-testid="link-medium-nav">
              <SiMedium className="h-3 w-3" />
            </a>
          </div>
          <Link
            href="/donate"
            className="px-4 py-2 text-black text-xs font-bold rounded transition-all flex items-center gap-1.5 donate-pulse"
            style={{ background: "#e9a00a" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#c88400"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#e9a00a"; }}
            data-testid="button-nav-donate"
          >
            <Heart className="h-3.5 w-3.5" /> Donate
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={() => openQuickSearch()} className="text-muted-foreground" data-testid="button-mobile-search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(o => !o)} data-testid="button-mobile-menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 overflow-y-auto max-h-[85vh]" style={{ background: "#f8faff", borderColor: "rgba(255,105,20,0.4)" }}>
          <div className="container mx-auto px-4 py-4 space-y-2">
            {DROPDOWNS.map(group => (
              <MobileSection
                key={group.id}
                group={group}
                currentPath={location}
                onClose={() => setMobileMenuOpen(false)}
              />
            ))}

            {/* Mobile pinned actions */}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <Link href="/verdict-before-the-court"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-black uppercase tracking-wider court-pulse"
                style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.5)", color: "#c084fc" }}
                onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-link-court-date">
                <AlertTriangle className="h-3.5 w-3.5 animate-pulse" /> Active Case
              </Link>
              <Link href="/nuclear-download"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-black uppercase tracking-wider"
                style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.4)", color: "#c084fc" }}
                onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-link-nuclear-download">
                ☢ Download All
              </Link>
              <Link href="/investment-prospectus"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-black uppercase tracking-wider"
                style={{ background: "rgba(233,160,10,0.15)", border: "1px solid rgba(233,160,10,0.55)", color: "#fbbf24" }}
                onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-link-investors">
                <TrendingUp className="h-3.5 w-3.5" /> 💰 Investors
              </Link>
              <Link href="/the-reckoning-paper"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-black uppercase tracking-wider reckoning-pulse"
                style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.5)", color: "#fbbf24" }}
                onClick={() => setMobileMenuOpen(false)} data-testid="mobile-nav-link-reckoning">
                <Zap className="h-3.5 w-3.5" /> Reckoning
              </Link>
            </div>

            {/* Mobile social + utility */}
            <div className="pt-3 border-t flex items-center justify-between" style={{ borderColor: "rgba(10,15,46,0.10)" }}>
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <ThemeToggle />
                <a href="https://x.com/bazdod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(10,15,46,0.55)" }}>
                  <TwitterX className="h-4 w-4" /> @bazdod
                </a>
                <a href="https://youtube.com/@barrandodger" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: "rgba(10,15,46,0.55)" }} data-testid="link-youtube-mobile-nav">
                  <SiYoutube className="h-4 w-4 text-red-500" />
                </a>
                <a href="https://medium.com/@barrandodger" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: "rgba(10,15,46,0.55)" }} data-testid="link-medium-mobile-nav">
                  <SiMedium className="h-4 w-4 text-green-400" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/support" className="px-3 py-2 text-sm font-bold rounded" style={{ background: "#1d4ed8", color: "#fff" }} onClick={() => setMobileMenuOpen(false)}>
                  Support
                </Link>
                <Link href="/donate" className="px-4 py-2 text-black text-sm font-semibold rounded flex items-center gap-1.5 donate-pulse" style={{ background: "#e9a00a" }} onClick={() => setMobileMenuOpen(false)}>
                  <Heart className="h-4 w-4" /> Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
