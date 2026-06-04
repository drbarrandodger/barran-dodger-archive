import { useState, useEffect, useRef, useCallback } from "react";
import {
  Search, X, FileText, BookOpen, Shield, Scale, Brain,
  ShieldCheck, Globe, Database, Scroll, Flame, Building,
  AlertCircle, Heart, ArrowRight, Gavel, Eye, Keyboard,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HighlightText } from "@/components/HighlightText";
import { cn } from "@/lib/utils";

interface SearchEntry {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
  isExternal?: boolean;
  isPDF?: boolean;
}

function getIcon(category: string) {
  switch (category) {
    case "Affidavit": return <Scale className="h-4 w-4" />;
    case "Gospel": return <BookOpen className="h-4 w-4" />;
    case "Verification": return <Shield className="h-4 w-4" />;
    case "Government": return <FileText className="h-4 w-4" />;
    case "Whistleblower": return <ShieldCheck className="h-4 w-4" />;
    case "International": return <Globe className="h-4 w-4" />;
    case "Forensic": return <Brain className="h-4 w-4" />;
    case "Theological": return <Flame className="h-4 w-4" />;
    case "Persecution": return <AlertCircle className="h-4 w-4" />;
    case "Identity": return <Heart className="h-4 w-4" />;
    case "Analysis": return <Database className="h-4 w-4" />;
    case "Prophetic": return <Scroll className="h-4 w-4" />;
    case "Institution": return <Building className="h-4 w-4" />;
    case "Legal": return <Gavel className="h-4 w-4" />;
    case "Page": return <Eye className="h-4 w-4" />;
    default: return <FileText className="h-4 w-4" />;
  }
}

const CATEGORY_COLOR: Record<string, string> = {
  Affidavit: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Gospel: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Verification: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Government: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  Whistleblower: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  International: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Forensic: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Theological: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Persecution: "bg-red-500/10 text-red-400 border-red-500/20",
  Analysis: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Prophetic: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Legal: "bg-blue-600/10 text-blue-300 border-blue-600/20",
  Page: "bg-muted text-muted-foreground border-border",
};

const ALL_ENTRIES: SearchEntry[] = [
  // ── KEY PAGES ──────────────────────────────────────────────────────────────
  { id: "page-start", title: "Start Here", description: "The essential orientation to the archive — begin here to understand the 35-year persecution of Dr. Richard McLean.", category: "Page", url: "/start-here", tags: ["orientation", "start", "introduction", "overview"] },
  { id: "page-archive", title: "Full Archive", description: "The complete home archive — every document, affidavit, and forensic report catalogued.", category: "Page", url: "/archive", tags: ["archive", "home", "documents", "full"] },
  { id: "page-evidence", title: "Evidence Vault", description: "Blockchain-verified primary source documents across 25+ government agencies.", category: "Page", url: "/evidence", tags: ["evidence", "blockchain", "documents", "primary source"] },
  { id: "page-publications", title: "Publications Archive", description: "Browse and filter all affidavits, gospels, forensic analyses, and whistleblower documentation.", category: "Page", url: "/publications", tags: ["publications", "filter", "search", "browse"] },
  { id: "page-forensic-index", title: "Forensic Analysis Index", description: "All 43+ YouTube forensic analysis reports — 452/452 propositions corroborated.", category: "Page", url: "/forensic-analysis", tags: ["forensic", "analysis", "youtube", "video", "corroborated"] },
  { id: "page-timeline", title: "Timeline 1990–2025", description: "Chronological record of every documented persecution event across 35 years.", category: "Page", url: "/timeline", tags: ["timeline", "chronology", "history", "1990", "2025"] },
  { id: "page-blockchain", title: "Blockchain Timestamps", description: "SHA256-verified evidence permanence on the Bitcoin blockchain.", category: "Page", url: "/blockchain", tags: ["blockchain", "sha256", "bitcoin", "timestamp", "verification"] },
  { id: "page-legal-status", title: "Legal Status", description: "Current status of all legal proceedings — ICC, UNHRC, domestic courts.", category: "Page", url: "/legal-status", tags: ["legal", "status", "icc", "unhrc", "courts"] },
  { id: "page-taxpayer", title: "Taxpayer Cost Analysis", description: "The $32.9M suppressed entitlements and $4.7B–$16.9B taxpayer cost of 35 years of institutional persecution.", category: "Page", url: "/taxpayer-cost-analysis", tags: ["cost", "taxpayer", "$32.9m", "financial", "damages"] },
  { id: "page-mission", title: "Mission Statement", description: "The mission of the Barran Dodger Legal & Ethical Trust Fund.", category: "Page", url: "/mission", tags: ["mission", "trust fund", "purpose"] },
  { id: "page-gospel", title: "Sacred Gospel", description: "The complete gospel scrolls — divine witness to the persecution and survival of Dr. Richard McLean.", category: "Page", url: "/gospel", tags: ["gospel", "sacred", "scrolls", "divine"] },
  { id: "page-manifesto", title: "Manifesto", description: "The core manifesto documenting systematic persecution and the case for international redress.", category: "Page", url: "/manifesto", tags: ["manifesto", "persecution", "redress"] },
  { id: "page-sukhi-tear", title: "Sukhi Tear — Named Perpetrator", description: "$50,000 NDIS fraud, Diversitas WA misconduct. Zero formal rebuttal against 2,304 documents.", category: "Page", url: "/sukhi-tear", tags: ["sukhi tear", "ndis", "fraud", "diversitas", "perpetrator"] },
  { id: "page-administrative", title: "Architecture of Administrative Annihilation", description: "25,000-word forensic documentary analysis of 2,304 government records. Inversion Method. Institutional Cascade Model.", category: "Page", url: "/administrative-annihilation", tags: ["forensic", "annihilation", "inversion method", "institutional cascade"] },
  { id: "page-retrospective", title: "Retrospective Statement of Treatment", description: "2,343 official government records assembled into a continuous 35-year institutional chronology.", category: "Page", url: "/retrospective-statement", tags: ["retrospective", "treatment", "government records", "chronology"] },
  { id: "page-ai-justice", title: "AI Justice Statement", description: "Impartial AI verdict on the evidence archive — significance and legal weight assessed independently.", category: "Page", url: "/ai-justice-statement", tags: ["ai", "justice", "statement", "impartial", "verdict"] },
  { id: "page-trap-proof", title: "The Trap They Set Became The Proof", description: "A prophetic, evidence-corroborated scripture — 10 verses, 5 chapters, every claim matched to archive evidence.", category: "Page", url: "/the-trap-they-set-became-the-proof", tags: ["prophetic", "scripture", "trap", "proof", "biblical"] },
  { id: "page-reckoning", title: "This Is The Reckoning — Analysis #43", description: "Final forensic analysis: 11/11 propositions corroborated, 452/452 combined total, 36 consecutive perfect scores.", category: "Page", url: "/this-is-the-reckoning", tags: ["reckoning", "forensic", "analysis", "452", "perfect"] },
  { id: "page-spread", title: "Spread The Truth", description: "Share the archive with the world — shareable assets, talking points, and viral tools.", category: "Page", url: "/spread-the-truth", tags: ["spread", "share", "viral", "truth"] },

  // ── KEY PEOPLE ─────────────────────────────────────────────────────────────
  { id: "person-bill-shorten", title: "Bill Shorten — Named Primary Perpetrator", description: "Former Minister for the NDIS. Named in 2,304 blockchain-verified documents. Zero formal rebuttal.", category: "Persecution", url: "/evidence", tags: ["bill shorten", "ndis", "minister", "perpetrator", "political"] },
  { id: "person-houd-meraby", title: "Houd Meraby — Named Perpetrator", description: "Named perpetrator in the archive. Zero formal rebuttal against 2,304 documents submitted to ICC.", category: "Persecution", url: "/evidence", tags: ["houd meraby", "perpetrator", "icc"] },
  { id: "person-sukhi-tear", title: "Sukhi Tear — $50,000 NDIS Fraud", description: "Diversitas WA. Illegal cease and desist. $50,000 NDIS misappropriation. Named in criminal affidavit.", category: "Persecution", url: "/sukhi-tear", tags: ["sukhi tear", "ndis", "diversitas", "fraud", "cease and desist"] },
  { id: "person-tony-ridley", title: "Tony Ridley — Death Threat", description: "NDIA Manager, former SAS background. Death threat email documented in archive. Named in ICC filing.", category: "Persecution", url: "/evidence", tags: ["tony ridley", "ndia", "death threat", "sas", "assassination"] },
  { id: "person-stefan", title: "Stefan Iasonidis — Named Perpetrator", description: "Named fifth primary perpetrator. Zero formal rebuttal against 2,304 blockchain-verified documents.", category: "Persecution", url: "/evidence", tags: ["stefan iasonidis", "perpetrator", "icc"] },

  // ── PUBLICATIONS (key documents) ───────────────────────────────────────────
  { id: "pub-autobiography", title: "Betrayed, Forsaken, Murdered — Complete Autobiography", description: "The definitive 18MB comprehensive autobiography documenting 35 years of systematic persecution, institutional betrayal, and miraculous survival.", category: "Identity", url: "https://books.apple.com/au/book/betrayed-murdered-forsaken-the-harrowing-life-of/id6618112290", tags: ["autobiography", "35 years", "persecution", "survival", "apple books"], isExternal: true },
  { id: "pub-trap-proof-pdf", title: "The Trap They Set Became The Proof — PDF", description: "10-verse prophetic scripture fact-checked against 2,304 blockchain-verified documents, ICC Article 7, and UNHCR Geneva.", category: "Prophetic", url: "/documents/the_trap_they_set_became_the_proof.pdf", tags: ["prophetic", "scripture", "pdf", "biblical", "icc", "unhcr"], isPDF: true },
  { id: "pub-forensic-affidavit", title: "FINAL FORENSIC AFFIDAVIT: State-Enabled PsyOps & Assassination Attempt", description: "Comprehensive forensic affidavit documenting state-enabled psychological operations, assassination attempts, and Crimes Against Humanity.", category: "Affidavit", url: "/attached_assets/FINAL_FORENSIC_AFFIDAVIT_OF_STATE-ENABLED_PSYCHOLOGICAL_OPERATIONS__ASSASSINATIO_1769765489558.pdf", tags: ["affidavit", "psyops", "assassination", "crimes against humanity", "rome statute"], isPDF: true },
  { id: "pub-supreme-affidavit", title: "SUPREME AFFIDAVIT OF PERSECUTION AND ERASURE", description: "Comprehensive supreme affidavit documenting 35+ years of systematic persecution and attempted erasure across 25+ government agencies.", category: "Affidavit", url: "/attached_assets/SUPREME_AFFIDAVIT_OF_PERSECUTION_AND_ERASURE_1769765624925.pdf", tags: ["affidavit", "supreme", "persecution", "erasure", "35 years"], isPDF: true },
  { id: "pub-master-affidavit", title: "MASTER AFFIDAVIT of Dr. Richard William McLean", description: "The definitive master affidavit compiling all sworn testimony, evidence annexures, and legal declarations.", category: "Affidavit", url: "/attached_assets/MASTER_AFFIDAVIT_of_Dr._Richard_William_McLean_Barran_Dodger_1769765627345.pdf", tags: ["master affidavit", "sworn testimony", "richard mclean"], isPDF: true },
  { id: "pub-unforgivable-record", title: "THE UNFORGIVABLE RECORD — Final Sacred-Legal Declaration", description: "Sacred-legal declaration synthesizing spiritual witness with forensic legal documentation of state-enabled erasure.", category: "Gospel", url: "/attached_assets/THE_UNFORGIVABLE_RECORD_Final_Sacred-Legal_Declaration_of_State-Enabled_Erasure__1769765632355.pdf", tags: ["sacred", "legal", "declaration", "unforgivable", "divine witness"], isPDF: true },
  { id: "pub-sovereign-dossier", title: "FINAL SOVEREIGN WHISTLEBLOWER DOSSIER WITH AFFIDAVIT", description: "Comprehensive dossier establishing sovereign whistleblower status under international law — UN conventions and PID Act 2013.", category: "Whistleblower", url: "/attached_assets/FINAL_SOVEREIGN_WHISTLEBLOWER_DOSSIER_WITH_AFFIDAVIT.pdf_1769765633961.pdf", tags: ["whistleblower", "sovereign", "dossier", "international law", "pid act"], isPDF: true },
  { id: "pub-digital-oppression", title: "DIGITAL OPPRESSION — 100,000-Word Interdisciplinary Examination", description: "100,000-word academic exposé integrating forensic analysis, Pegasus spyware documentation, and compensation analysis ($42.5M–$123M AUD).", category: "Forensic", url: "/documents/digital_oppression_100000_word_essay.pdf", tags: ["pegasus", "spyware", "digital", "surveillance", "100000 words", "compensation"], isPDF: true },
  { id: "pub-annihilation", title: "THE ARCHITECTURE OF ADMINISTRATIVE ANNIHILATION", description: "~25,000-word forensic documentary analysis examining 2,304 primary source documents. Inversion Method. Institutional Cascade Model. Rome Statute.", category: "Forensic", url: "/attached_assets/THE_ARCHITECTURE_OF_ADMINISTRATIVE_ANNIHILATION_1773707654515.pdf", tags: ["forensic", "inversion method", "institutional cascade", "rome statute", "administrative law"], isPDF: true },
  { id: "pub-retrospective", title: "RETROSPECTIVE STATEMENT OF TREATMENT", description: "2,343 official government records assembled into a continuous institutional chronology spanning 1990–2025.", category: "Government", url: "/attached_assets/Retrospective_statement_of_treatment_1773707654515.pdf", tags: ["retrospective", "government records", "chronology", "1990", "2025"], isPDF: true },
  { id: "pub-beyond-pathology", title: "BEYOND PATHOLOGY — Forensic Epistemological Analysis", description: "Academic research paper examining 'Targeted Individual', Electronic Surveillance, and Psychological Operations using declassified government records.", category: "Forensic", url: "/attached_assets/BEYOND_PATHOLOGY_1773707654515.pdf", tags: ["targeted individual", "psyops", "electronic surveillance", "epistemology", "academic"], isPDF: true },
  { id: "pub-2-87-survival", title: "2.87% SURVIVAL PROBABILITY — Clinical Death Documentation", description: "Clinical documentation of the 2021 Port Macquarie death event. 2.87% survival probability confirmed by medical records.", category: "Persecution", url: "/documents/2.87_percent_survival.pdf", tags: ["survival", "clinical death", "2021", "port macquarie", "2.87%"], isPDF: true },
  { id: "pub-witness-tribunal", title: "WITNESS BEFORE THE TRIBUNAL OF HUMANITY", description: "Sacred declaration placing the persecution record before the universal tribunal — historical, moral, and legal witness.", category: "Theological", url: "/documents/witness_before_tribunal_of_humanity.pdf", tags: ["tribunal", "humanity", "sacred", "witness", "declaration"], isPDF: true },
  { id: "pub-constructive-elimination", title: "CONSTRUCTIVE ELIMINATION UNDER COLOUR OF LAW", description: "Legal analysis of how Australian institutions used legislative colour to construct the elimination of a whistleblower.", category: "Legal", url: "/documents/constructive_elimination_under_colour_of_law.pdf", tags: ["constructive elimination", "colour of law", "legal", "whistleblower", "australia"], isPDF: true },
  { id: "pub-declaration-sovereignty", title: "DECLARATION OF SOVEREIGNTY", description: "Formal declaration of sovereign individual status under natural law and international human rights principles.", category: "International", url: "/documents/declaration_of_sovereignty.pdf", tags: ["sovereignty", "declaration", "natural law", "international", "human rights"], isPDF: true },
  { id: "pub-asylum-request", title: "URGENT REQUEST FOR REFUGE AND ASYLUM", description: "Emergency asylum request filed with UNHCR Geneva, documenting persecution meeting the 1951 Refugee Convention criteria.", category: "International", url: "/documents/urgent_request_for_refuge_and_asylum.pdf", tags: ["asylum", "unhcr", "geneva", "refugee convention", "persecution"], isPDF: true },
  { id: "pub-precision-evidence", title: "PRECISION AS EVIDENCE — Evidentiary Synthesis", description: "Forensic synthesis demonstrating that the precision of corroborating evidence across 2,304 documents itself constitutes proof.", category: "Forensic", url: "/documents/precision_as_evidence_evidentiary_synthesis.pdf", tags: ["precision", "evidentiary synthesis", "forensic", "corroboration", "2304"], isPDF: true },
  { id: "pub-ten-commandments", title: "TEN COMMANDMENTS OF ACCOUNTABILITY", description: "Sacred-legal commandments derived from the forensic record — accountability framework for institutions and individuals.", category: "Theological", url: "/documents/ten_commandments.pdf", tags: ["ten commandments", "accountability", "sacred", "legal"], isPDF: true },
  { id: "pub-prophetic-manifesto", title: "PROPHETIC MANIFESTO", description: "Core prophetic manifesto establishing the divine dimension of the 35-year persecution narrative.", category: "Prophetic", url: "/documents/prophetic_manifesto_barran_dodger.pdf", tags: ["prophetic", "manifesto", "divine", "35 years"], isPDF: true },
  { id: "pub-psychiatric-asylum", title: "PSYCHIATRIC ASSESSMENT — Asylum Documentation", description: "Medical asylum documentation integrating psychiatric history with asylum claim — demonstrating psychiatric weaponisation.", category: "Persecution", url: "/documents/psychiatric_assessment_asylum_documentation.pdf", tags: ["psychiatric", "asylum", "medical", "weaponisation", "hospitalisations"], isPDF: true },
  { id: "pub-when-machine-wakes", title: "WHEN THE MACHINE WAKES FOR YOU", description: "AI-authored testimony on the significance of machine intelligence recognising the persecution archive.", category: "Analysis", url: "/documents/when_the_machine_wakes_for_you.pdf", tags: ["ai", "machine", "testimony", "significance", "intelligence"], isPDF: true },
  { id: "pub-man-australia-erased", title: "THE MAN AUSTRALIA TRIED TO ERASE", description: "Definitive narrative of 35 years of attempted erasure — available in root public directory.", category: "Identity", url: "/THE_MAN_AUSTRALIA_TRIED_TO_ERASE.pdf", tags: ["man australia", "erased", "35 years", "narrative"], isPDF: true },
  { id: "pub-document-cannot-erased", title: "THE DOCUMENT THAT CANNOT BE ERASED", description: "Blockchain-authenticated permanent record. Every attempt at erasure has been documented and preserved.", category: "Verification", url: "/documents/document_that_cannot_be_erased.pdf", tags: ["cannot be erased", "blockchain", "permanent", "authentication"], isPDF: true },
  { id: "pub-state-mp-letter", title: "STATE AND FEDERAL MP LETTER", description: "Formal letter to all state and federal members of parliament — on notice of the documented persecution.", category: "Government", url: "/documents/state_and_federal_mp_letter.pdf", tags: ["mp", "parliament", "state", "federal", "formal letter"], isPDF: true },
  { id: "pub-confinement-erasure", title: "CONFINEMENT BY ERASURE — Threat By Blade", description: "Documentation of the psychological and physical confinement tactics deployed — including direct physical threats.", category: "Persecution", url: "/documents/confinement_by_erasure_threat_by_blade.pdf", tags: ["confinement", "erasure", "threat", "blade", "physical"], isPDF: true },

  // ── KEY CONCEPTS ───────────────────────────────────────────────────────────
  { id: "concept-icc", title: "ICC — International Criminal Court Submission", description: "Article 7 formal receipt from The Hague. Rome Statute — Crimes Against Humanity threshold met.", category: "International", url: "/legal-status", tags: ["icc", "hague", "rome statute", "article 7", "crimes against humanity"] },
  { id: "concept-unhcr", title: "UNHCR Geneva — Asylum Submission", description: "Formal asylum and refugee protection claim lodged with the United Nations High Commissioner for Refugees in Geneva.", category: "International", url: "/legal-status", tags: ["unhcr", "geneva", "asylum", "refugee", "united nations"] },
  { id: "concept-ndis", title: "NDIS — National Disability Insurance Scheme Fraud", description: "$50,000 NDIS misappropriation. Coordinated denial of disability support across multiple states.", category: "Government", url: "/evidence", tags: ["ndis", "disability", "fraud", "support", "misappropriation"] },
  { id: "concept-psyops", title: "PsyOps — Psychological Operations Documentation", description: "Documented deployment of psychological warfare techniques against a civilian whistleblower.", category: "Persecution", url: "/publications", tags: ["psyops", "psychological operations", "warfare", "civilian"] },
  { id: "concept-v2k", title: "V2K — Voice to Skull Technology", description: "Voice-to-Skull (V2K) neuroweapon deployment catalogued in the forensic affidavit.", category: "Persecution", url: "/publications", tags: ["v2k", "voice to skull", "neuroweapon", "directed energy"] },
  { id: "concept-asic-fraud", title: "ASIC Identity Fraud — 350+ Registrations", description: "350+ fraudulent ASIC business registrations used to destroy digital identity. Publicly searchable.", category: "Persecution", url: "/evidence", tags: ["asic", "identity fraud", "350", "business registration", "digital identity"] },
  { id: "concept-pid-act", title: "PID Act 2013 — Public Interest Disclosure", description: "All disclosures meet the statutory definition of 'disclosable conduct' under the Public Interest Disclosure Act 2013.", category: "Whistleblower", url: "/legal-status", tags: ["pid act", "public interest", "disclosure", "whistleblower", "statutory"] },
  { id: "concept-clinical-death", title: "Clinical Death — 2.87% Survival Probability", description: "2021 Port Macquarie. 2.87% survival probability. Medically documented revival.", category: "Persecution", url: "/evidence", tags: ["clinical death", "survival", "2021", "port macquarie", "revival"] },
];

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function scoreEntry(entry: SearchEntry, query: string): number {
  const q = query.toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);
  let score = 0;
  const titleLower = entry.title.toLowerCase();
  const descLower = entry.description.toLowerCase();
  const tagsLower = entry.tags.map(t => t.toLowerCase()).join(" ");
  for (const term of terms) {
    if (titleLower.startsWith(term)) score += 10;
    else if (titleLower.includes(term)) score += 6;
    if (descLower.includes(term)) score += 3;
    if (tagsLower.includes(term)) score += 4;
    if (entry.category.toLowerCase().includes(term)) score += 2;
  }
  return score;
}

function search(query: string, limit = 12): SearchEntry[] {
  if (query.trim().length < 2) return [];
  const scored = ALL_ENTRIES
    .map(e => ({ entry: e, score: scoreEntry(e, query) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(x => x.entry);
}

const QUICK_LINKS: SearchEntry[] = [
  ALL_ENTRIES.find(e => e.id === "page-start")!,
  ALL_ENTRIES.find(e => e.id === "page-forensic-index")!,
  ALL_ENTRIES.find(e => e.id === "page-publications")!,
  ALL_ENTRIES.find(e => e.id === "concept-icc")!,
  ALL_ENTRIES.find(e => e.id === "concept-unhcr")!,
  ALL_ENTRIES.find(e => e.id === "page-timeline")!,
];

let _externalOpen: (() => void) | null = null;

export function openQuickSearch() {
  _externalOpen?.();
}

export function useQuickSearch() {
  return { open: openQuickSearch };
}

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  const open = useCallback(() => {
    setIsOpen(true);
    setQuery("");
    setResults([]);
    setActiveIndex(-1);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(-1);
  }, []);

  useEffect(() => {
    _externalOpen = open;
    return () => { _externalOpen = null; };
  }, [open]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? close() : open();
      }
      if (e.key === "Escape" && isOpen) close();
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, open, close]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [isOpen]);

  useEffect(() => {
    setResults(search(query));
    setActiveIndex(-1);
  }, [query]);

  const displayItems = query.trim().length >= 2 ? results : QUICK_LINKS;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, displayItems.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      const selected = displayItems[activeIndex];
      if (selected) activateEntry(selected);
    }
  };

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll("[data-result-item]");
      const el = items[activeIndex] as HTMLElement;
      if (el) el.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  const activateEntry = useCallback((entry: SearchEntry) => {
    close();
    if (entry.isExternal || entry.isPDF || entry.url.startsWith("http")) {
      window.open(entry.url, "_blank", "noopener,noreferrer");
    } else {
      navigate(entry.url);
    }
  }, [close, navigate]);

  const Backdrop = isOpen ? (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      onClick={close}
      aria-hidden="true"
    />
  ) : null;

  return (
    <>
      {Backdrop}

      <Button
        variant="ghost"
        size="sm"
        onClick={open}
        className="text-muted-foreground hover:text-primary gap-2 hidden md:flex items-center"
        data-testid="button-global-search"
        title="Quick Search (⌘K)"
      >
        <Search className="h-4 w-4" />
        <span className="text-xs">Search</span>
        <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-border bg-muted text-[10px] font-mono text-muted-foreground leading-none">
          ⌘K
        </kbd>
      </Button>


      {isOpen && (
        <div
          className="fixed left-1/2 top-[12vh] z-[60] w-full max-w-2xl -translate-x-1/2 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Quick search"
        >
          <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
            {/* Search input row */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border flex-shrink-0">
              <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <Input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search documents, people, topics, pages…"
                className="flex-1 border-0 focus-visible:ring-0 bg-transparent text-sm h-9 px-0"
                data-testid="input-global-search"
                autoComplete="off"
                spellCheck={false}
              />
              {query && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 flex-shrink-0 text-muted-foreground"
                  onClick={() => setQuery("")}
                  data-testid="button-search-clear"
                  title="Clear"
                >
                  <X className="h-3.5 w-3.5" />
                </Button>
              )}
              <button
                onClick={close}
                className="flex-shrink-0 text-[10px] font-mono text-muted-foreground border border-border rounded px-1.5 py-0.5 hover:border-primary/50 transition-colors"
                data-testid="button-search-close"
              >
                ESC
              </button>
            </div>

            {/* Results or quick links */}
            <div ref={listRef} className="overflow-y-auto flex-1">
              {query.trim().length >= 2 ? (
                results.length > 0 ? (
                  <>
                    <div className="px-4 py-2 flex items-center justify-between border-b border-border/40">
                      <span className="text-[11px] text-muted-foreground font-mono uppercase tracking-wide">
                        {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
                      </span>
                      <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <Keyboard className="h-3 w-3" /> ↑↓ navigate · Enter select
                      </span>
                    </div>
                    {results.map((entry, idx) => (
                      <ResultItem
                        key={entry.id}
                        entry={entry}
                        query={query}
                        isActive={activeIndex === idx}
                        onClick={() => activateEntry(entry)}
                        onMouseEnter={() => setActiveIndex(idx)}
                      />
                    ))}
                  </>
                ) : (
                  <div className="py-12 text-center text-muted-foreground">
                    <Search className="h-10 w-10 mx-auto mb-3 opacity-30" />
                    <p className="text-sm font-medium">No results for "{query}"</p>
                    <p className="text-xs mt-1 opacity-70">Try: Bill Shorten, ICC, NDIS, PsyOps, Blockchain, Gospel</p>
                  </div>
                )
              ) : (
                <>
                  <div className="px-4 py-2 border-b border-border/40">
                    <span className="text-[11px] text-muted-foreground font-mono uppercase tracking-wide">Quick Links</span>
                  </div>
                  {QUICK_LINKS.map((entry, idx) => (
                    <ResultItem
                      key={entry.id}
                      entry={entry}
                      query=""
                      isActive={activeIndex === idx}
                      onClick={() => activateEntry(entry)}
                      onMouseEnter={() => setActiveIndex(idx)}
                    />
                  ))}
                </>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-border/40 flex items-center justify-between flex-shrink-0 bg-muted/20">
              <span className="text-[10px] text-muted-foreground">
                {ALL_ENTRIES.length} indexed items · 2,304 blockchain-verified documents
              </span>
              <span className="text-[10px] text-muted-foreground flex items-center gap-1.5">
                <kbd className="px-1 py-0.5 rounded border border-border bg-muted font-mono">⌘K</kbd> to toggle
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ResultItem({
  entry,
  query,
  isActive,
  onClick,
  onMouseEnter,
}: {
  entry: SearchEntry;
  query: string;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}) {
  const colorClass = CATEGORY_COLOR[entry.category] ?? CATEGORY_COLOR["Page"];

  return (
    <div
      data-result-item
      role="option"
      aria-selected={isActive}
      className={cn(
        "flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors border-b border-border/30 last:border-0",
        isActive ? "bg-primary/8 dark:bg-primary/10" : "hover:bg-muted/40"
      )}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      data-testid={`search-result-${entry.id}`}
    >
      <div className={cn("p-2 rounded-lg border flex-shrink-0 mt-0.5", colorClass)}>
        {getIcon(entry.category)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-medium text-sm text-foreground leading-snug">
            {query ? <HighlightText text={entry.title} query={query} /> : entry.title}
          </p>
          {(entry.isPDF) && (
            <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground bg-muted px-1.5 py-0.5 rounded flex-shrink-0">PDF</span>
          )}
          {(entry.isExternal) && (
            <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground bg-muted px-1.5 py-0.5 rounded flex-shrink-0">↗</span>
          )}
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5 leading-relaxed">
          {query ? <HighlightText text={entry.description} query={query} /> : entry.description}
        </p>
        <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
          <Badge
            variant="outline"
            className={cn("text-[9px] px-1.5 py-0 h-4 border", colorClass)}
          >
            {entry.category}
          </Badge>
          {entry.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="text-[10px] text-muted-foreground/60">
              {query ? <HighlightText text={tag} query={query} /> : tag}
            </span>
          ))}
        </div>
      </div>
      <ArrowRight className={cn("h-4 w-4 flex-shrink-0 mt-1 transition-opacity", isActive ? "opacity-70 text-primary" : "opacity-0")} />
    </div>
  );
}
