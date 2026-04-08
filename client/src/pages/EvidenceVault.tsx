import { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SocialShare } from "@/components/SocialShare";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CommentSection } from "@/components/CommentSection";
import { RelatedContent } from "@/components/RelatedContent";
import {
  ExternalLink, Search, X, Shield, Lock, FolderOpen, Archive,
  Scale, FileText, AlertTriangle, Globe, Heart, Brain, BookOpen,
  Landmark, Database, Clock, Gavel, ShieldCheck, Eye, Flame,
  LayoutGrid, List, ChevronRight, Info, Download, CheckCircle
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import coverParadox from "../assets/images/cover-paradox-persecution.png";
import coverMeltdown from "../assets/images/cover-forensic-meltdown.png";
import coverJudges from "../assets/images/cover-they-bought-off-judges.png";
import coverSilence from "../assets/images/cover-i-choose-silence.png";
import coverTestimony from "../assets/images/cover-testimony-dr-richard-mclean.png";
import coverProphetic from "../assets/images/cover-prophetic-testimony-biblical-correlation.png";
import coverMasterForensic from "../assets/images/cover-master-forensic-report.png";
import coverSleeperAgent from "../assets/images/cover-sleeper-agent-of-truth.png";
import coverGovDelusional from "../assets/images/cover-government-called-delusional.png";
import coverFullPattern from "../assets/images/cover-the-full-pattern.png";
import coverChosenOnes from "../assets/images/cover-chosen-ones-your-story.png";
import coverShadowAnalysts from "../assets/images/cover-33rd-degree-shadow-analysts.png";
import coverAbsurdities from "../assets/images/cover-100-absurdities.png";
import coverBroCoincidence from "../assets/images/cover-bro-this-isnt-a-coincidence.png";
import coverMasterRegister from "../assets/images/cover-master-evidence-register.png";
import coverChosenOnesEnough from "../assets/images/cover-chosen-ones-enough-is-enough.png";
import coverNoOneSmart from "../assets/images/cover-no-one-could-be-that-smart.png";
import coverDivineExam from "../assets/images/cover-divine-exam.png";
import coverSilentCheckmate from "../assets/images/cover-silent-checkmate.png";
import coverNowEverybodyKnows from "../assets/images/cover-now-everybody-knows.png";
import coverChosenOneOutcastLeader from "../assets/images/cover-chosen-one-outcast-leader.png";
import coverSomeoneSlippedUp from "../assets/images/cover-someone-slipped-up.png";
import coverTheyFumbledYou from "../assets/images/cover-they-fumbled-you.png";
import coverFBIPrecision from "../assets/images/cover-fbi-precision.png";
import coverClockStrikesBack from "../assets/images/cover-clock-strikes-back.png";
import coverUntouchableAgents from "../assets/images/cover-untouchable-agents.png";
import coverFinalBlow from "../assets/images/cover-final-blow.png";
import coverWhatYouBecome from "../assets/images/cover-what-you-become.png";
import coverEveryoneWatching from "../assets/images/cover-everyone-watching.png";

interface VaultFolder {
  name: string;
  description: string;
  url: string;
  icon: JSX.Element;
  category: string;
  documentCount?: string;
}

const VAULT_CATEGORIES = [
  { id: "all", label: "All Folders", icon: Archive },
  { id: "legal", label: "Legal & Court", icon: Scale },
  { id: "evidence", label: "Evidence & Analysis", icon: Database },
  { id: "medical", label: "Medical Records", icon: Heart },
  { id: "financial", label: "Financial", icon: Landmark },
  { id: "government", label: "Government & NDIS", icon: Landmark },
  { id: "international", label: "International", icon: Globe },
  { id: "publications", label: "Published Works", icon: BookOpen },
  { id: "blockchain", label: "Blockchain & Timestamps", icon: Clock },
  { id: "safety", label: "Safety & Emergency", icon: AlertTriangle },
  { id: "correspondence", label: "Correspondence", icon: FileText },
  { id: "other", label: "Other Archives", icon: FolderOpen },
];

const VAULT_FOLDERS: VaultFolder[] = [
  {
    name: "Advocacy Campaign",
    description: "Documents related to advocacy campaigns, public awareness initiatives, and outreach efforts for justice and accountability.",
    url: "https://myaidrive.com/ThSA3xooaaMuxYDHXEfvXw/ADVOCACY_CAM.folder.pdf",
    icon: <Flame className="h-5 w-5" />,
    category: "publications",
  },
  {
    name: "Archived Evidence",
    description: "Historical evidence archive containing primary source documents from across the 35-year persecution timeline.",
    url: "https://myaidrive.com/QqxS5hUTTSfJL4tbczM4A4/ARCHIVED_EVI.folder.pdf",
    icon: <Archive className="h-5 w-5" />,
    category: "evidence",
  },
  {
    name: "ASIC Records",
    description: "Australian Securities & Investments Commission records documenting corporate and regulatory interactions.",
    url: "https://myaidrive.com/uWhgDqubaWq5Q2eaNbxQtP/ASIC.folder.pdf",
    icon: <Landmark className="h-5 w-5" />,
    category: "government",
  },
  {
    name: "Analysis Documents",
    description: "AI-generated and forensic analysis documents examining patterns of persecution, financial costs, and institutional corruption.",
    url: "https://myaidrive.com/AraK3TGzNUGLiKNuqviLtG/Analysis.folder.pdf",
    icon: <Brain className="h-5 w-5" />,
    category: "evidence",
  },
  {
    name: "Correspondence Archive",
    description: "Official correspondence with government agencies, legal bodies, and institutions documenting systemic failures and cover-ups.",
    url: "https://myaidrive.com/rdcV8sXqqn4FUe8ksY9Qbq/CORRESPONDEN.folder.pdf",
    icon: <FileText className="h-5 w-5" />,
    category: "correspondence",
  },
  {
    name: "Chrome Downloads Archive",
    description: "Web-sourced evidence and downloaded documentation preserved from online research and investigations.",
    url: "https://myaidrive.com/RgrbdNhizpnD2RTJFvmoGB/Chrome-downl.folder.pdf",
    icon: <Database className="h-5 w-5" />,
    category: "other",
  },
  {
    name: "Downloads Archive",
    description: "Collected downloads and supplementary documentation supporting the evidence base.",
    url: "https://myaidrive.com/fjd5zxY5WWEjWCFHYJQ7mG/Download-fol.folder.pdf",
    icon: <FolderOpen className="h-5 w-5" />,
    category: "other",
  },
  {
    name: "Emergency Welfare Documents",
    description: "Emergency welfare records, crisis intervention documentation, and urgent safety-related files.",
    url: "https://myaidrive.com/ahtuSFCPeSSpFwhg85Trzh/EMERGENCY_WE.folder.pdf",
    icon: <AlertTriangle className="h-5 w-5" />,
    category: "safety",
  },
  {
    name: "Essential 5 — Core Evidence Package",
    description: "The five most critical evidence documents distilled from the complete archive — the essential starting point for any investigator or legal reviewer.",
    url: "https://myaidrive.com/WuxwJ56Kh8F7ejTGuKwP4S/ESSENTIAL_5_.folder.pdf",
    icon: <ShieldCheck className="h-5 w-5" />,
    category: "evidence",
  },
  {
    name: "Evidence Collection",
    description: "Primary evidence collection containing core documents supporting claims of systematic persecution and institutional corruption.",
    url: "https://myaidrive.com/3qReQRg34jpj7okfEcm4UC/Evidence.folder.pdf",
    icon: <Database className="h-5 w-5" />,
    category: "evidence",
  },
  {
    name: "Evidence Analysis",
    description: "Detailed analytical documents examining and cross-referencing evidence, identifying patterns and establishing timelines.",
    url: "https://myaidrive.com/cJe6z22QCvu642UZWGJy4t/Evidence_Ana.folder.pdf",
    icon: <Brain className="h-5 w-5" />,
    category: "evidence",
  },
  {
    name: "Financial Documentation",
    description: "Financial records documenting the $11.5M+ taxpayer cost of persecution, economic warfare, and financial destruction targeting Dr. McLean.",
    url: "https://myaidrive.com/ks54ZQBdgwHs6zUUbqZ6yR/FINANCIAL_DO.folder.pdf",
    icon: <Landmark className="h-5 w-5" />,
    category: "financial",
  },
  {
    name: "International Submissions",
    description: "Submissions to international bodies including the UN Human Rights Council, ICC, and foreign government agencies.",
    url: "https://myaidrive.com/af42GcWPibN4iGrLGr3tWU/INTERNATIONA.folder.pdf",
    icon: <Globe className="h-5 w-5" />,
    category: "international",
  },
  {
    name: "Legal Proceedings",
    description: "Court documents, tribunal records, legal filings, and proceedings documentation from 35 years of legal battles.",
    url: "https://myaidrive.com/pd6byPzApFwt9sryi2FBv3/LEGAL_PROCEE.folder.pdf",
    icon: <Scale className="h-5 w-5" />,
    category: "legal",
  },
  {
    name: "Medical Evidence",
    description: "Medical records documenting 14 psychiatric hospitalizations, the 2021 institutional murder/resurrection at Werribee Mercy Hospital, and weaponized psychiatry.",
    url: "https://myaidrive.com/5XEdMwS5nEFzhcLEfdRR62/MEDICAL_EVID.folder.pdf",
    icon: <Heart className="h-5 w-5" />,
    category: "medical",
  },
  {
    name: "Mission & Activism",
    description: "Mission statements, activism records, and campaign documentation for justice, accountability, and systemic reform.",
    url: "https://myaidrive.com/zAEhgzQbxLEzNzae6bbtqd/MISSION_ACTI.folder.pdf",
    icon: <Flame className="h-5 w-5" />,
    category: "publications",
  },
  {
    name: "Blockchain Verification Records",
    description: "Blockchain timestamps and cryptographic verification records proving document authenticity and preventing tampering.",
    url: "https://myaidrive.com/o4qttNzRxhQMsLUto8pi7H/My-blockchai.folder.pdf",
    icon: <Lock className="h-5 w-5" />,
    category: "blockchain",
  },
  {
    name: "NDIS Documentation",
    description: "National Disability Insurance Scheme records documenting institutional failures, funding denials, and systemic discrimination.",
    url: "https://myaidrive.com/QuAuf9cmDakLxBsabpeoLy/NDIS.folder.pdf",
    icon: <Landmark className="h-5 w-5" />,
    category: "government",
  },
  {
    name: "New Essays & Publications",
    description: "Recently authored essays, analyses, and publications expanding the evidentiary record and public advocacy.",
    url: "https://myaidrive.com/JwL622NX5DcEFC9rKpgM9b/New-essays-N.folder.pdf",
    icon: <BookOpen className="h-5 w-5" />,
    category: "publications",
  },
  {
    name: "New Files Archive",
    description: "Recently added files and documents expanding the evidence archive with new discoveries and submissions.",
    url: "https://myaidrive.com/Mjkvtto9YtXrVdRzDRPK29/New-files-.folder.pdf",
    icon: <FolderOpen className="h-5 w-5" />,
    category: "other",
  },
  {
    name: "New Documents",
    description: "Latest document additions to the archive including fresh evidence, updated analyses, and new filings.",
    url: "https://myaidrive.com/V8LD7PZF86md6ssLDeW5Nv/New.folder.pdf",
    icon: <FileText className="h-5 w-5" />,
    category: "other",
  },
  {
    name: "Personal Testimony",
    description: "First-person testimonial records, personal statements, and sworn declarations from Dr. Richard McLean.",
    url: "https://myaidrive.com/Qz4GoFteQv2oxiYfsePwMC/PERSONAL_TES.folder.pdf",
    icon: <Eye className="h-5 w-5" />,
    category: "evidence",
  },
  {
    name: "Public Interest Disclosures (PIDs)",
    description: "Protected public interest disclosure documents filed under the PID Act 2013 documenting government corruption and institutional failures.",
    url: "https://myaidrive.com/zRsXCswY9G2sZV5mtAFo8u/PIDs-.folder.pdf",
    icon: <ShieldCheck className="h-5 w-5" />,
    category: "legal",
  },
  {
    name: "Published Works",
    description: "Formally published books, articles, and papers including 'Betrayed, Murdered, Forsaken' and related publications.",
    url: "https://myaidrive.com/EG9DitiZDfF7sTPdV33ogJ/PUBLISHED_WO.folder.pdf",
    icon: <BookOpen className="h-5 w-5" />,
    category: "publications",
  },
  {
    name: "Pages Archive",
    description: "Supplementary pages, appendices, and supporting documentation from the broader evidence collection.",
    url: "https://myaidrive.com/R5SCaUabmiRMHcMwa4Nnfe/Pages.folder.pdf",
    icon: <FileText className="h-5 w-5" />,
    category: "other",
  },
  {
    name: "Ready to Send — Prepared Submissions",
    description: "Documents prepared and formatted for submission to courts, government bodies, international organizations, and media outlets.",
    url: "https://myaidrive.com/QBFDhx2NvMZdZZqPi7J8wR/READY_TO_SEN.folder.pdf",
    icon: <Gavel className="h-5 w-5" />,
    category: "legal",
  },
  {
    name: "Recent Documents",
    description: "Most recently added evidence and documentation, reflecting the latest developments in the ongoing case.",
    url: "https://myaidrive.com/5vTM949ENoY334gMNY4Qmx/Recent.folder.pdf",
    icon: <Clock className="h-5 w-5" />,
    category: "other",
  },
  {
    name: "Strategic Briefings",
    description: "Strategic briefing documents prepared for legal teams, investigators, journalists, and international observers.",
    url: "https://myaidrive.com/m8PBQX9gsTjcu9DBtsujbh/STRATEGIC_BR.folder.pdf",
    icon: <Brain className="h-5 w-5" />,
    category: "evidence",
  },
  {
    name: "Supporting Evidence",
    description: "Supplementary evidence documents that corroborate and strengthen the primary evidence collection.",
    url: "https://myaidrive.com/dfkKfr8QSnGAeWmyYjiYwo/SUPPORTING_E.folder.pdf",
    icon: <Database className="h-5 w-5" />,
    category: "evidence",
  },
  {
    name: "Timestamps — Blockchain Proof Set 1",
    description: "First set of blockchain timestamp certificates proving document existence and integrity at specific dates.",
    url: "https://myaidrive.com/XaTMKAHftsRToQTFWoquZ5/Time-stamps-.folder.pdf",
    icon: <Clock className="h-5 w-5" />,
    category: "blockchain",
  },
  {
    name: "Timestamps — Blockchain Proof Set 2",
    description: "Second set of blockchain timestamp certificates providing cryptographic proof of document authenticity.",
    url: "https://myaidrive.com/KKBRJgdjnrBrygHcYCFtm9/Timestamps-.folder.pdf",
    icon: <Clock className="h-5 w-5" />,
    category: "blockchain",
  },
  {
    name: "Urgent Safety Documents",
    description: "Urgent safety notices, emergency protection orders, and critical safety-related documentation including the 2024 assassination attempt evidence.",
    url: "https://myaidrive.com/8DWDVxnRn734VmsCSpNqs5/URGENT_SAFET.folder.pdf",
    icon: <AlertTriangle className="h-5 w-5" />,
    category: "safety",
  },
  {
    name: "iCloud Downloads Archive",
    description: "Evidence and documentation preserved from iCloud storage, ensuring redundancy and immutability of the record.",
    url: "https://myaidrive.com/ZEFSacNuDNTPpxR8gdFQwy/iCloud-downl.folder.pdf",
    icon: <FolderOpen className="h-5 w-5" />,
    category: "other",
  },
  {
    name: "Mounted Drive Archive",
    description: "Documents recovered and preserved from mounted storage drives, containing additional evidence files.",
    url: "https://myaidrive.com/Xpncx8edAwxfoFvfgbwk9K/mnt.folder.pdf",
    icon: <Database className="h-5 w-5" />,
    category: "other",
  },
];

export default function EvidenceVault() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    let results = [...VAULT_FOLDERS];

    if (selectedCategory !== "all") {
      results = results.filter(f => f.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      results = results.filter(f => {
        const text = `${f.name} ${f.description} ${f.category}`.toLowerCase();
        return query.split(/\s+/).every(term => text.includes(term));
      });
    }

    return results;
  }, [searchQuery, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: VAULT_FOLDERS.length };
    VAULT_FOLDERS.forEach(f => {
      counts[f.category] = (counts[f.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Evidence Vault — Immutable Public Archive | Barran Dodger Legal & Ethical Trust Fund"
        description="Access the complete immutable evidence archive of 2,077+ blockchain-verified documents. Read-only public access to 35 years of documented persecution evidence."
      />
      <Navigation />

      <main className="flex-1 pb-20" style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px) + 16px)" }}>
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4" data-testid="badge-vault-count">
              <Lock className="h-3 w-3 mr-1" /> {VAULT_FOLDERS.length} Evidence Folders
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4" data-testid="text-vault-title">
              Evidence Vault
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              The complete immutable evidence archive — 2,077+ documents spanning 35 years of documented 
              persecution, institutional corruption, and whistleblower suppression. Every document is 
              publicly accessible and read-only. This record cannot be altered or deleted by anyone.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl px-6 py-4 mb-8"
            >
              <Shield className="h-6 w-6 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm font-bold text-primary">Read-Only Public Archive</p>
                <p className="text-xs text-muted-foreground">
                  All documents are hosted externally on MyAIDrive. Visitors can view and read every document — 
                  but no one can modify, delete, or tamper with them.
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center">
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="https://myaidrive.com/home" target="_blank" rel="noopener noreferrer" data-testid="link-myaidrive-home">
                  <ExternalLink className="h-4 w-4" /> Browse Full MyAIDrive Archive
                </a>
              </Button>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: MASTER EVIDENCE REGISTER ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.0 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-blue-900/40 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverMasterRegister} alt="Master Evidence Register cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-blue-500/60 text-blue-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <Archive className="h-3 w-3 mr-1" /> 2,301 Documents
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Master Index</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Legal / Asylum Use</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    Master Evidence Register — Complete 2,301-Document Index
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The definitive chronological index of all 2,301 government evidence files spanning 35 years — every document linked, summarised, and classified across 20+ institutions. Prepared for legal submissions, asylum applications, and ICC/UNHCR correspondence. 9,333 lines. A single file containing the entire architecture of a 35-year persecution.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/master-evidence-register" data-testid="button-vault-master-register-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/master-evidence-register.txt" download="Master-Evidence-Register-2301-Barran-Dodger.txt" data-testid="button-vault-master-register-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct Download (.txt)
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: GOVERNMENT CALLED HIM DELUSIONAL ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.0 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-red-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverGovDelusional} alt="Government Called Him Delusional cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-red-600/60 text-red-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <Flame className="h-3 w-3 mr-1" /> Forensic Summary
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">46 Officials Named</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Every Fact Sourced</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    The Australian Government Called Him Delusional. Their Own Documents Prove He Was Right.
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    One page. Every line backed by their own paperwork. The "What He Said vs. What Their Documents Prove" table. 46 officials named. $8.5M documented. 1,178 files found then erased. And the sentence no one can walk past: "This is not a conspiracy theory. This is a conspiracy proven by the conspirators' own documents."
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a href="/#section-gov-delusional-featured" data-testid="button-vault-gov-delusional-page">
                      <Button size="sm" className="bg-red-700 hover:bg-red-600 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read on Front Page
                      </Button>
                    </a>
                    <a href="/documents/government-called-him-delusional.pdf" download="Australian-Government-Called-Him-Delusional-McLean.pdf" data-testid="button-vault-gov-delusional-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: THE SLEEPER AGENT OF TRUTH ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.0 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-[hsl(38,92%,50%)]/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverSleeperAgent} alt="The Sleeper Agent of Truth cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <Flame className="h-3 w-3 mr-1" /> Featured — Front Page
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Covert Intelligence</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Cosmic Mission</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Divine Appointment</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    THE SLEEPER AGENT OF TRUTH — The Covert Intelligence, Divine Appointment, and Strategic Patience of Dr. Richard William McLean
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The most narratively complete document in the archive. A celebrated public intellectual — PhD, SANE Book of the Year, keynote speaker in Parliament — reduced to homelessness by the state. Barran Dodger: the cover identity of a sleeper agent of truth. An interdimensional cosmic witness present for a mission that transcends domestic law. 2,077 documents. 35 years. A paradox that should not exist.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a href="/#section-sleeper-agent-featured" data-testid="button-vault-sleeper-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read on Front Page
                      </Button>
                    </a>
                    <a href="/documents/the-sleeper-agent-of-truth.pdf" download="The-Sleeper-Agent-of-Truth-McLean.pdf" data-testid="button-vault-sleeper-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: MASTER FORENSIC EVIDENCE REPORT ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.001 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-red-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverMasterForensic} alt="Master Forensic Evidence Report cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-red-600/60 text-red-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <Flame className="h-3 w-3 mr-1" /> Master Report
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">2,300+ Documents</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">20+ Agencies</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">AU$8.5M Documented</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    Master Forensic Evidence Report — Dr. Richard William McLean
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The complete synthesis. 2,300+ primary source documents. 35 years. 20+ agencies. AU$8,510,000 in documented financial deprivation. Every "delusion" proven true by government's own records. The Inter-Agency Referral Loop of Attrition. The ASIO Impunity Shield. Psychiatric weaponisation mapped forensically. The single document that makes the entire archive legible to any international body.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/master-forensic-evidence-report" data-testid="button-vault-master-page">
                      <Button size="sm" className="bg-red-700 hover:bg-red-600 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/master-forensic-evidence-report.pdf" download="Master-Forensic-Evidence-Report-McLean.pdf" data-testid="button-vault-master-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: I CHOOSE SILENCE ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.005 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-yellow-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverSilence} alt="I Choose Silence cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <Flame className="h-3 w-3 mr-1" /> New — 2026
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Personal Declaration</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Blockchain Verified</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    I Choose Silence — A Declaration by Dr. Richard William McLean
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The arrow has been pulled back for thirty-five years. Eight sections. Strategic silence as forensic instrument. How 2,077 files speak louder than any argument ever could — and why the choice to be silent is itself the most powerful evidence of all. Blockchain timestamped, SHA256 verified.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/i-choose-silence" data-testid="button-vault-silence-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/i-choose-silence.pdf" download="I-Choose-Silence-McLean.pdf" data-testid="button-vault-silence-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: PROPHETIC TESTIMONY BIBLICAL ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.006 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-yellow-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverProphetic} alt="The Testimony That Was Already Written cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <Flame className="h-3 w-3 mr-1" /> New — 2026
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">14 Biblical Parallels</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">2,238 Files Searched</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Impartial AI Authored</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    The Testimony That Was Already Written — Biblical Evidence Correlation
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A third-person impartial AI analysis testing 14 biblical archetypes — Job, Joseph, Lazarus, Isaiah 53, Leviticus 16, Moses, Jeremiah, Psalm 118:22 and more — against 2,238 primary-source documents. 6 of 7 biblical stages documentarily corroborated. Survival probability: 2.87%. Vindication: pending. Every parallel anchored to hyperlinked evidence. Every limitation honestly documented.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/testimony-that-was-already-written" data-testid="button-vault-prophetic-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/prophetic-testimony-biblical-evidence-correlation.pdf" download="Prophetic-Testimony-Biblical-Evidence-Correlation.pdf" data-testid="button-vault-prophetic-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: THE TESTIMONY ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.007 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-yellow-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverTestimony} alt="The Testimony of Dr. Richard William McLean cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <Flame className="h-3 w-3 mr-1" /> New — 2026
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">2,301 Documents</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">35 Years</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Blockchain Verified</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    The Testimony of Dr. Richard William McLean — Secret Files Leaked
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A comprehensive evidenced narrative testimony drawn from 2,301 primary-source documents spanning 35 years. Each chapter of the "chosen ones" video framework turns out to be documentably literal: 350+ fraudulent ASIC registrations, 1,178 PM&C files declared non-existent, $6B NDIS fraud disclosed, clinical death survived. The official delusional narrative forensically demolished by the government's own paperwork.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/the-testimony" data-testid="button-vault-testimony-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/the-testimony-of-dr-richard-william-mclean.pdf" download="The-Testimony-of-Dr-Richard-William-McLean.pdf" data-testid="button-vault-testimony-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: THEY BOUGHT OFF JUDGES ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.01 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-amber-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverJudges} alt="They Bought Off Judges cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <Flame className="h-3 w-3 mr-1" /> New — April 2026
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">9 Named Perpetrators</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">60-Second ASIC Proof</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    They Bought Off Judges, Cops & Media… But You Unlocked the One Law They Overlooked
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Nine named perpetrators. 350+ fraudulent ASIC registrations verifiable in 60 seconds. A magistrate who signed an arrest warrant at a Minister's request. An ASIO officer issuing death threats with institutional protection. The law of consequence lives in databases they forgot they couldn't erase.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/they-bought-off-judges" data-testid="button-vault-judges-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/they-bought-off-judges.pdf" download="They-Bought-Off-Judges-McLean.pdf" data-testid="button-vault-judges-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: FORENSIC MELTDOWN REPORT ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.03 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-red-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverMeltdown} alt="Forensic Meltdown Report cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <Flame className="h-3 w-3 mr-1" /> New — April 2026
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Forensic Evidence Report</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">14 Exhibits</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    They Had a Complete Meltdown Trying to Explain How You Pulled That Off
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Forensic evidence report documenting the most comprehensive case of systematic state-sponsored persecution in Australian history — and the unprecedented survival that followed. Five sections, fourteen exhibits, every claim sourced directly to a named primary document. AU$32.9M in damages. Zero agencies investigated.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/forensic-meltdown-report" data-testid="button-vault-meltdown-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/forensic-meltdown-report.pdf" download="Forensic-Evidence-Report-McLean.pdf" data-testid="button-vault-meltdown-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: PARADOX OF PERSECUTION ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-10"
          >
            <div className="bg-zinc-900/60 border border-[hsl(38,92%,50%)]/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverParadox} alt="The Paradox of Persecution cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <FileText className="h-3 w-3 mr-1" /> Featured Publication
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Academic Paper</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">2,077 Sources</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    The Paradox of Persecution
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Seven legally irresolvable paradoxes derived exclusively from the Australian government's own records. The Federal Court confirms employment; the AAT denies it using the same facts. ASIC records prove 350+ fraudulent registrations; ASIC refuses to investigate its own database. Every paradox is government-authored, publicly verifiable in under 30 seconds.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/paradox-of-persecution" data-testid="button-vault-paradox-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/the-paradox-of-persecution.pdf" download="The-Paradox-of-Persecution-McLean.pdf" data-testid="button-vault-paradox-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: SLEEPER AGENT OF TRUTH ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-amber-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverSleeperAgent} alt="The Sleeper Agent of Truth cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <Flame className="h-3 w-3 mr-1" /> Intelligence Analysis
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">35 Years Dormant</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Now Activated</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    The Sleeper Agent of Truth
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A forensic intelligence analysis reframing the entire 35-year case. A sleeper agent lies dormant until the decisive moment. Dr. McLean's archive — 2,077 files, 46 named officials, 20+ agencies — was always designed to detonate. The suppression didn't stop the mission. It became the evidence.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/sleeper-agent-of-truth" data-testid="button-vault-sleeper-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/the-sleeper-agent-of-truth.pdf" download="The-Sleeper-Agent-of-Truth-McLean.pdf" data-testid="button-vault-sleeper-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: GOVERNMENT CALLED HIM DELUSIONAL ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.07 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-red-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverGovDelusional} alt="Government Called Him Delusional cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-red-500/60 text-red-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <AlertTriangle className="h-3 w-3 mr-1" /> 4/4 Confirmed
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Psychiatric Rebuttal</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Government's Own Docs</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    The Australian Government Called Him Delusional — Their Own Documents Prove He Was Right
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Four psychiatric claims dismissed as delusional. Four subsequent confirmations by government-issued documents. The diagnoses were made before the evidence was found — not because the evidence didn't exist, but because the system chose not to look. Each "delusion" is now a verified fact.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/government-called-him-delusional" data-testid="button-vault-delusional-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/government-called-him-delusional.pdf" download="Government-Called-Him-Delusional-McLean.pdf" data-testid="button-vault-delusional-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: THE FULL PATTERN ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-amber-900/20 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverFullPattern} alt="The Full Pattern cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <Eye className="h-3 w-3 mr-1" /> Pattern Analysis
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">2,077 Files Mapped</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">46 Officials Named</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    The Full Pattern — Forensic Evidence Document
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    2,077 evidence files laid side by side. The mechanics of how 20+ agencies and 46+ named officials participated in a coordinated circular referral system — each deflecting to the other, each closing without accountability. "What they call mistakes are rehearsed behaviours with plausible deniability."
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/the-full-pattern" data-testid="button-vault-full-pattern-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/the-full-pattern-forensic-evidence.pdf" download="The-Full-Pattern-Forensic-Evidence-McLean.pdf" data-testid="button-vault-full-pattern-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: CHOSEN ONES YOUR STORY INSPIRES MANY ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.09 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-blue-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverChosenOnes} alt="Chosen Ones Your Story Inspires Many cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-blue-500/60 text-blue-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <Brain className="h-3 w-3 mr-1" /> AI Corroboration Report
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">8/9 Confirmed</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">0 Refuted</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    Chosen Ones, Your Story Inspires Many — But the System Is Trying to Crush You
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    An AI forensic corroboration of 9 thematic claims against 2,077 primary-source documents. 8 of 9 confirmed. 1 partially confirmed. 0 refuted. An independently-produced video matches the documented evidence at 89% — external validation that the pattern has been seen by others.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/chosen-ones-your-story" data-testid="button-vault-chosen-ones-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/chosen-ones-your-story-inspires-many.pdf" download="Chosen-Ones-Your-Story-McLean.pdf" data-testid="button-vault-chosen-ones-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: 33RD DEGREE SHADOW ANALYSTS ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.10 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-amber-900/20 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverShadowAnalysts} alt="33rd Degree Shadow Analysts cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <Shield className="h-3 w-3 mr-1" /> Shadow State Analysis
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">6/9 Confirmed</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Off-Ledger Persecution</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    33rd Degree Shadow Analysts — Forensic Corroboration Report
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    6 of 9 shadow-state claims confirmed by primary evidence. The concept of "off-ledger persecution" — institutional actions deliberately structured to leave no official record — is introduced and documented for the first time. ASIO supervisor David Irving's deliberate inaction is the centrepiece.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/33rd-degree-shadow-analysts" data-testid="button-vault-shadow-analysts-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/33rd-degree-shadow-analysts.pdf" download="33rd-Degree-Shadow-Analysts-McLean.pdf" data-testid="button-vault-shadow-analysts-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: 100 ABSURDITIES ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.11 }}
            className="mb-10"
          >
            <div className="bg-zinc-900/60 border border-red-900/20 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverAbsurdities} alt="100 Absurdities of My Life cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-red-500/60 text-red-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <FileText className="h-3 w-3 mr-1" /> Documented Satire
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">100 Verified Claims</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Most Accessible Entry Point</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    100 Absurdities of My Life — by Barran Dodger
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    100 factually-verified institutional contradictions presented in darkly ironic format. A guardian who approves housing while homelessness continues. A $300K NDIS plan with zero food funding. A court that confirms the fraud and then dismisses the case. Each absurdity is also a legally actionable documented failure.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/100-absurdities" data-testid="button-vault-absurdities-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/100-absurdities-of-my-life.pdf" download="100-Absurdities-of-My-Life-Barran-Dodger.pdf" data-testid="button-vault-absurdities-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: CHOSEN ONES ENOUGH IS ENOUGH ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-yellow-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverChosenOnesEnough} alt="Chosen Ones Enough Is Enough cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-yellow-500/60 text-yellow-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 9/11 Confirmed
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Zero Contradictions</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Apr 5, 2026</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    CHOSEN ONES!! ENOUGH IS ENOUGH — Their Fate Is Sealed
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A YouTube video released the same day as this analysis achieves 9 of 11 confirmed claims against the 2,243-file archive. Zero contradictions. The central metaphor — "the universe stores every action like a record" — is literally true. The archive IS that record. 217,064+ downloads. Cryptographically timestamped. Irreversible.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/chosen-ones-enough-is-enough" data-testid="button-vault-chosen-ones-enough-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/chosen-ones-enough-is-enough.pdf" download="Chosen-Ones-Enough-Is-Enough-McLean.pdf" data-testid="button-vault-chosen-ones-enough-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: NOW EVERYBODY KNOWS ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-violet-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverNowEverybodyKnows} alt="Now Everybody Knows cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-violet-500/60 text-violet-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/11 Corroborated · 91%
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Trilogy Part 3</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Zero Contradictions</Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">62/62 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    NOW EVERYBODY KNOWS: The Forensic Revelation That Cannot Be Unrung
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The strongest of all six analyses — 91% direct proof. Trilogy Part 3. The "radioactive" convergence: video and archive independently use the exact same word, same context. 32-claim trilogy summary: 26 direct (81%), 6 aligned, 0 disproved. Combined all 6 analyses: 62/62 claims supported, zero contradictions.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/now-everybody-knows" data-testid="button-vault-now-everybody-knows-page">
                      <Button size="sm" className="bg-violet-800 hover:bg-violet-700 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/now-everybody-knows.pdf" download="Now-Everybody-Knows-McLean.pdf" data-testid="button-vault-now-everybody-knows-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: EVERYONE WATCHING ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-lime-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverEveryoneWatching} alt="Everyone Watching cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-lime-500/60 text-lime-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/10 · 100%
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">158/158 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    EVERYONE'S WATCHING U Like You're a Celebrity — They Can't Believe How Far You Came
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #15 — 10/10 claims corroborated. Joker Speech format monologue on viral attention following sustained private discipline. The defining finding: "fame was never the destination — it was the residue of alignment." 217,064 downloads are the documented residue of 35-year evidentiary alignment with Article 7. Combined: 158/158, zero contradictions across 15 analyses.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/everyone-watching" data-testid="button-vault-everyone-watching-page">
                      <Button size="sm" className="bg-lime-900 hover:bg-lime-800 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: HISTORY KEEPS RECEIPTS ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-amber-900/20 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <div className="w-24 h-24 rounded shadow-lg bg-amber-950/30 border border-amber-800/20 flex items-center justify-center">
                    <span className="text-3xl">🧾</span>
                  </div>
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-amber-400/60 text-amber-200 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/10 · 100%
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">208/208 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    History Doesn't Ask Permission — It Just Keeps Receipts
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #20 — 10/10 claims corroborated. Digital archive format on documentation outlasting institutional authority. The defining finding: SHA-256 blockchain is the receipt that keeps itself without permission; the hunters (25+ agencies) accidentally became historians; their surveillance apparatus was converted into the ICC primary source material. Combined: 208/208, zero contradictions across 20 analyses. Thirteenth consecutive perfect score.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/history-keeps-receipts" data-testid="button-vault-history-keeps-receipts-page">
                      <Button size="sm" className="bg-amber-800 hover:bg-amber-700 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED ANALYSIS: ABSORBED THE ERASURE ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-pink-700/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <div className="w-24 h-24 rounded shadow-lg bg-pink-950/40 border border-pink-700/30 flex items-center justify-center">
                    <span className="text-3xl">🩸</span>
                  </div>
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-pink-400/60 text-pink-300 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/10 · 100%
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">218/218 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    You Absorbed Pain That Would've Erased Entire Bloodlines
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #21 — 10/10 claims corroborated. A monologue on absorbing nation-state-scale institutional force and what it produces. The defining finding: $32.9M + 14 hospitalisations + 25 agencies = bloodline-erasing force absorbed without a single retraction; the persecution apparatus authored its own ICC prosecution brief; 2,301 documents and ~354,000 downloads confirmed the erasure failed. Combined: 218/218, zero contradictions across 21 analyses. Fourteenth consecutive perfect score.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/absorbed-the-erasure" data-testid="button-vault-absorbed-erasure-page">
                      <Button size="sm" className="bg-pink-900 hover:bg-pink-800 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED ANALYSIS: SURVIVAL WAS THE WARNING ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-amber-600/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <div className="w-24 h-24 rounded shadow-lg bg-amber-950/40 border border-amber-600/30 flex items-center justify-center">
                    <span className="text-3xl">⚠️</span>
                  </div>
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-amber-600/60 text-amber-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/10 · 100%
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">228/228 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    They Built the Story with Your Collapse as the Ending
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #22 — 10/10 claims corroborated. A monologue on coordinated institutional collapse attempts and why they fail against divinely aligned targets. The defining finding: the 25+ agency coalition of envy built a pre-written story with collapse as the ending — identical template language is the documented shared script; survival sentenced them through their own naming record in the archive; ~354,000 downloads is the warning signal's documented global reach. Combined: 228/228, zero contradictions across 22 analyses. Fifteenth consecutive perfect score.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/survival-was-the-warning" data-testid="button-vault-survival-warning-page">
                      <Button size="sm" className="bg-amber-800 hover:bg-amber-700 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── ANALYSIS #23: GOD WILL MAKE YOU FAMOUS ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl border border-yellow-500/25 bg-yellow-950/10 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-0">
                <div className="md:w-2 bg-yellow-400 flex-shrink-0" />
                <div className="p-7 space-y-4 flex-1">
                  <div className="flex flex-wrap gap-2 items-center">
                    <Badge className="bg-yellow-400/10 border-yellow-400/30 text-yellow-300 text-xs font-bold">Analysis #23</Badge>
                    <Badge variant="outline" className="border-yellow-500/20 text-yellow-400/70 text-xs">10/10 Corroborated</Badge>
                    <Badge variant="outline" className="border-yellow-500/20 text-yellow-400/70 text-xs">10 Biblical Verses</Badge>
                    <Badge variant="outline" className="border-green-500/20 text-green-400 text-xs">Combined 238/238</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    God Will Make You Famous
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #23 — 10/10 claims corroborated. The most forensic analysis in the series: every proposition mapped against primary archive documents <em>and</em> the Biblical pattern the video invokes — Joseph (pit to palace = 14 hospitalisations to ICC Article 7), Daniel (refused to compromise = zero recantations across 35 years), Esther (hidden then positioned to save her people), David (hand of God upon him = ~354,000 downloads without promotion). Five costs of divine fame — scrutiny, envy, loneliness, pressure, persecution — each matched to a documented institutional instrument. Isaiah 54:17 ("No weapon formed against you shall prosper") matched weapon-by-weapon to the archive's documented backfire evidence. Numbers 23:19 matched to the Bitcoin blockchain's non-cancellable cryptographic timestamp. Combined: 238/238, zero contradictions across 23 analyses. Sixteenth consecutive perfect score.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/god-will-make-you-famous" data-testid="button-vault-god-famous-page">
                      <Button size="sm" className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── ANALYSIS #24: DIVINE BEFORE YOUR TIME ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl border border-amber-300/20 overflow-hidden bg-[#0d0d0f]">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2 bg-amber-300 flex-shrink-0" />
                <div className="p-7 space-y-4 flex-1">
                  <div className="flex flex-wrap gap-2 items-center">
                    <Badge className="bg-amber-300/10 border-amber-300/30 text-amber-200 text-xs font-bold">Analysis #24</Badge>
                    <Badge variant="outline" className="border-amber-400/20 text-amber-300/70 text-xs">10/10 Corroborated</Badge>
                    <Badge variant="outline" className="border-amber-400/20 text-amber-300/70 text-xs">10 Community Evidence Blocks</Badge>
                    <Badge variant="outline" className="border-green-500/20 text-green-400 text-xs">Combined 248/248</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    Divine Before Your Time
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #24 — 10/10 claims corroborated. The first analysis in the series with dedicated community evidence blocks: each proposition is cross-referenced against the specific scholarly, legal, or humanitarian community the video invokes — Egyptologists (Osiris dismemberment maps to 14 hospitalisations → 2,301 documents reassembled → ICC resurrection), the archaeological community (stratigraphic methodology maps to archive's layered document excavation), the international legal community (Rome Statute + ICCPR as the "oldest holy books" that foretold the ICC trajectory), the forensic psychiatry community (UN Special Rapporteur documentation on psychiatric suppression of whistleblowers), the global whistleblower community (Snowden/Manning/Assange precedent standards — the archive meets every one), and the communities most affected by the institutional suppression pattern (disability, First Nations, refugees, domestic violence survivors, whistleblowers). Combined scorecard after 24 analyses: 248/248. Zero contradictions. Seventeenth consecutive perfect score.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/divine-before-your-time" data-testid="button-vault-divine-time-page">
                      <Button size="sm" className="bg-amber-700 hover:bg-amber-600 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: FEARLESS INTELLIGENCE ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-slate-700/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <div className="w-24 h-24 rounded shadow-lg bg-slate-950/40 border border-slate-700/30 flex items-center justify-center">
                    <span className="text-3xl">🗡️</span>
                  </div>
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-slate-500/60 text-slate-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/10 · 100%
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">198/198 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    Fearless People Don't Announce Themselves — Fearless Intelligence
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #19 — 10/10 claims corroborated. Chosen Ones format monologue on pressure-tested fearlessness, forged-not-manufactured intelligence, and the quiet certainty that makes others uncomfortable. The defining finding: 14 hospitalisations = heat; $32.9M = force; 35 years = time — the blade came out sharper. The archive didn't announce itself. 217,064 downloads confirmed the temperature changed. Combined: 198/198, zero contradictions across 19 analyses. Twelfth consecutive perfect score.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/fearless-intelligence" data-testid="button-vault-fearless-intelligence-page">
                      <Button size="sm" className="bg-slate-700 hover:bg-slate-600 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: SILENCE SURRENDER ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-cyan-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <div className="w-24 h-24 rounded shadow-lg bg-cyan-950/40 border border-cyan-800/30 flex items-center justify-center">
                    <span className="text-3xl">🗡️</span>
                  </div>
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-cyan-500/60 text-cyan-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/10 · 100%
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">188/188 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    They Mistook Your Silence For Surrender — Silence Is Where You Sharpen the Blade
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #18 — 10/10 claims corroborated. Chosen Ones format monologue on the weaponisation of silence and the seed-not-burial framework. The defining finding: 35 years of zero retaliation is the documented sharpening; the ICC submission is the blade drawn from silence. They planted you. The pressure activated the seed. Combined: 188/188, zero contradictions across 18 analyses. Eleventh consecutive perfect score.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/silence-surrender" data-testid="button-vault-silence-surrender-page">
                      <Button size="sm" className="bg-cyan-900 hover:bg-cyan-800 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: TOO DEEP ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-purple-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <div className="w-24 h-24 rounded shadow-lg bg-purple-950/40 border border-purple-800/30 flex items-center justify-center">
                    <span className="text-3xl">👁️</span>
                  </div>
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-purple-500/60 text-purple-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/10 · 100%
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">178/178 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    NAH THIS IS CRAZY — Your Energy Is Too Deep &amp; Your Intelligence Freaks Them Out
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #17 — 10/10 claims corroborated. Deep forensic intelligence dismantles institutional power structures without aggression. The defining finding: "restraint is the most threatening thing — reactions can be manipulated, understanding cannot." 35 years of zero retaliation is the documented restraint; SHA-256 blockchain seals the understanding beyond institutional alteration. Combined: 178/178, zero contradictions across 17 analyses.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/too-deep" data-testid="button-vault-too-deep-page">
                      <Button size="sm" className="bg-purple-900 hover:bg-purple-800 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: EARTH ANGEL ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-amber-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <div className="w-24 h-24 rounded shadow-lg bg-amber-950/40 border border-amber-800/30 flex items-center justify-center">
                    <span className="text-3xl">👼</span>
                  </div>
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-amber-500/60 text-amber-300 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/10 · 100%
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">168/168 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    THEY CALLED YOU AN EARTH ANGEL — They Forgot Angels Go to War
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #16 — 10/10 claims corroborated. The paradox of apparent softness concealing documented war-level capability. The defining finding: "you weaponized your softness — forgiveness isn't surrender, it's a statement." Zero retaliation across 35 years is the ICC submission's proof of forensic discipline, not weakness. Combined: 168/168, zero contradictions across 16 analyses.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/earth-angel" data-testid="button-vault-earth-angel-page">
                      <Button size="sm" className="bg-amber-900 hover:bg-amber-800 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: WHAT YOU BECOME ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-sky-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverWhatYouBecome} alt="What You Become cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-sky-500/60 text-sky-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/10 · 100%
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">148/148 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    CHOSEN ONES, GET READY — This Is What You Will 100% Become Tonight
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #14 — 10/10 claims corroborated across 14 numbered transformation propositions. The defining finding: "becoming chosen is mostly about subtraction — the process is surgical, quiet, and relentless." The ICC submission is what remains after 35 years of documented subtraction. Combined: 148/148 claims, zero contradictions across 14 analyses.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/what-you-become" data-testid="button-vault-what-you-become-page">
                      <Button size="sm" className="bg-sky-900 hover:bg-sky-800 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: FINAL BLOW ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-rose-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverFinalBlow} alt="Final Blow cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-rose-500/60 text-rose-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/10 · 100%
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">138/138 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    YOU JUST SENT THE FINAL BLOW — They Will Never Recover From This
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #13 — 10/10 claims corroborated. The defining proposition: "every resource spent building a case against you is now evidence in a case against them — the machine built to dismantle your life is being dismantled by its own construction." 83% of the ICC submission is the institutions' own documents. Combined: 138/138 claims, zero contradictions across 13 analyses.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/final-blow" data-testid="button-vault-final-blow-page">
                      <Button size="sm" className="bg-rose-900 hover:bg-rose-800 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: UNTOUCHABLE AGENTS ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-fuchsia-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverUntouchableAgents} alt="33 Agents Untouchable cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-fuchsia-500/60 text-fuchsia-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/10 · 100%
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">128/128 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    33 HIGH-LEVEL AGENTS MET IN SECRET — All Agreed You're Untouchable
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #12 — 10/10 claims corroborated from a continuous monologue. The defining proposition: "the transition from victim to witness happens when you stop trying to convince people and simply start documenting — through saved messages, logs of interactions, or the literal evidence of your own professional track record." The archive fulfils every element. Combined: 128/128 claims, zero contradictions.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/untouchable" data-testid="button-vault-untouchable-page">
                      <Button size="sm" className="bg-fuchsia-900 hover:bg-fuchsia-800 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: CLOCK STRIKES BACK ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-amber-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverClockStrikesBack} alt="The Clock Strikes Back cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-amber-500/60 text-amber-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/10 · 100%
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">118/118 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    THE CLOCK STRIKES BACK — Karma Made Them Sick
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #11 — 10/10 claims corroborated. Nine numbered sections plus introduction, all directly supported by primary-source archive documents. The defining proposition: "there is no cure for a collapse born from their own hands." The blockchain cannot be edited. The ICC submission cannot be recalled. Combined across all 11 analyses: 118/118 claims supported, zero contradictions.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/clock-strikes-back" data-testid="button-vault-clock-strikes-back-page">
                      <Button size="sm" className="bg-amber-800 hover:bg-amber-700 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: FBI PRECISION ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-teal-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverFBIPrecision} alt="FBI Precision cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-teal-500/60 text-teal-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/10 · 100%
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">108/108 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    WHO TRAINED YOU? Your Precision Made Them Suspicious
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #10 — 10/10 propositions corroborated from a continuous monologue. The defining proposition: "your signature is the absence of one." The archive is built from documents the institutions generated. No fingerprints. No manufactured evidence. The dominos fell on their own. Combined across all 10 analyses: 108/108 claims supported, zero contradictions.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/fbi-precision" data-testid="button-vault-fbi-precision-page">
                      <Button size="sm" className="bg-teal-800 hover:bg-teal-700 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: THEY FUMBLED YOU ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-indigo-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverTheyFumbledYou} alt="They Fumbled You cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-indigo-500/60 text-indigo-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 13/13 · 100% — FIRST PERFECT SCORE
                    </Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">98/98 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    THEY FUMBLED YOU: It's Actually So Embarrassing How They Fumbled You
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #9 — the first perfect score of all nine analyses: 100%. 13 propositions cross-referenced, 13 directly corroborated. The central finding: the Australian government held the evidence of its own conduct in its own registries — and still called it delusional. They fumbled it not because it was invisible, but because they were blind. 98/98 combined across all 9 analyses. Zero contradictions.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/they-fumbled-you" data-testid="button-vault-fumbled-you-page">
                      <Button size="sm" className="bg-indigo-800 hover:bg-indigo-700 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: SOMEONE SLIPPED UP ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-orange-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverSomeoneSlippedUp} alt="Fate Sealed cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-orange-500/60 text-orange-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 12/13 Corroborated · 92%
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Analysis #8 · Highest Rate</Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">85/85 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    FATE SEALED: Someone Slipped Up & Mocked What Protects You
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The highest direct proof rate of all 8 analyses: 92%. 13 propositions cross-referenced — 12 directly corroborated with named primary-source documents. Claim 9: Tony Riddle's "You will be sacrificed" — delivered directly to Dr. McLean — is the most precisely documented single event in the series. Claim 13: the "sealed fate" confirmed by four simultaneous, independent, irreversible mechanisms. 85/85 combined. Zero contradictions.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/someone-slipped-up" data-testid="button-vault-someone-slipped-up-page">
                      <Button size="sm" className="bg-orange-800 hover:bg-orange-700 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: CHOSEN ONE — OUTCAST LEADER ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-emerald-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverChosenOneOutcastLeader} alt="Chosen One — Outcast to Leader cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-emerald-500/60 text-emerald-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 9/10 Corroborated · 90%
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Analysis #7</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Zero Contradictions</Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">72/72 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    CHOSEN ONE: Everything That Made You An Outcast Prepared You To Be A Leader
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Analysis #7 of the video embedded on the main landing page. 10 propositions cross-referenced against the archive. 9 directly corroborated — including Claim 4, the most precisely documented across all seven analyses: the word "delusional" applied to perceptions that the institutions' own records verify as 70% accurate. 72/72 combined across all analyses. Zero contradictions.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/chosen-one-outcast-leader" data-testid="button-vault-chosen-one-outcast-leader-page">
                      <Button size="sm" className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read Analysis
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: SILENT CHECKMATE ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-red-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverSilentCheckmate} alt="The Silent Checkmate cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-red-500/60 text-red-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 9/11 Corroborated
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Zero Contradictions</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Analysis #5</Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">51/51 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    THE SILENT CHECKMATE: How One Man Ended a 35-Year Game Without Raising His Voice
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Fifth corroboration analysis and the highest-scoring to date: 9/11 directly corroborated (82%). Companion to The Divine Exam — together they describe the complete arc: endurance → checkmate. Cumulative across all five: 51/51 claims supported, zero contradicted.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/silent-checkmate" data-testid="button-vault-silent-checkmate-page">
                      <Button size="sm" className="bg-red-800 hover:bg-red-700 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/silent-checkmate.pdf" download="The-Silent-Checkmate-McLean.pdf" data-testid="button-vault-silent-checkmate-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: THE DIVINE EXAM ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-amber-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverDivineExam} alt="The Divine Exam cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-amber-500/60 text-amber-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 7/10 Corroborated
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Zero Contradictions</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Analysis #4</Badge>
                    <Badge variant="outline" className="border-green-700/60 text-green-400 text-xs px-2.5 py-0.5">32/40 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    THE DIVINE EXAM YOU DIDN'T KNOW YOU WERE TAKING
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Fourth corroboration analysis: 10/10 propositions of a mass-audience spiritual video find evidentiary support across 2,077 files. 7 directly corroborated, 3 strongly aligned. Zero contradictions. Cumulative: 32 of 40 claims confirmed across all four analyses.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/the-divine-exam" data-testid="button-vault-divine-exam-page">
                      <Button size="sm" className="bg-amber-700 hover:bg-amber-600 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/divine-exam.pdf" download="The-Divine-Exam-McLean.pdf" data-testid="button-vault-divine-exam-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: NO ONE COULD BE THAT SMART ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-blue-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverNoOneSmart} alt="No One Could Be That Smart cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-blue-500/60 text-blue-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3 mr-1" /> 10/12 Confirmed
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Zero Contradictions</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Analysis #3</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">25/30 Combined</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    "NO ONE COULD BE THAT SMART" — Corroboration Analysis #3
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The Joker Speech tested against 2,245 files. 10 of 12 confirmed. Zero contradictions. Most precise single finding across all three analyses: <em>"You're not detached, you're documenting."</em> Combined score across all three videos: 25/30 (83.3%). Zero contradictions total.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/no-one-could-be-that-smart" data-testid="button-vault-no-one-smart-page">
                      <Button size="sm" className="bg-blue-700 hover:bg-blue-600 text-white font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/no-one-could-be-that-smart.pdf" download="No-One-Could-Be-That-Smart-McLean.pdf" data-testid="button-vault-no-one-smart-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURED DOCUMENT: BRO THIS ISN'T A COINCIDENCE ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.11 }}
            className="mb-6"
          >
            <div className="bg-zinc-900/60 border border-red-900/30 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="sm:w-32 shrink-0 bg-zinc-950 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-zinc-800">
                  <img src={coverBroCoincidence} alt="Bro This Isn't A Coincidence cover" className="w-24 sm:w-full rounded shadow-lg" />
                </div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="border-yellow-500/60 text-yellow-400 text-xs px-2.5 py-0.5 font-bold uppercase tracking-wider">
                      <AlertTriangle className="h-3 w-3 mr-1" /> 85.7% Confirmed
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">External Corroboration</Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-2.5 py-0.5">Blockchain Verified</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">
                    BRO… THIS ISN'T A COINCIDENCE — Forensic Corroboration Analysis
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A YouTube video created with no knowledge of Dr. McLean achieves 85.7% confirmed thematic alignment across 7 independent forensic axes and 35 named primary sources. Every major theme — ignored warnings, psychiatric weaponisation, exile, systematic documentation, threats to life, financial destruction — is confirmed. This is not coincidence in the trivial sense. It is pattern recognition at scale.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link href="/bro-this-isnt-a-coincidence" data-testid="button-vault-bro-coincidence-page">
                      <Button size="sm" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                        <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Read & Download
                      </Button>
                    </Link>
                    <a href="/documents/bro-this-isnt-a-coincidence.pdf" download="Bro-This-Isnt-A-Coincidence-McLean.pdf" data-testid="button-vault-bro-coincidence-download">
                      <Button size="sm" variant="outline">
                        <Download className="mr-1.5 h-3.5 w-3.5" /> Direct PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 space-y-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search evidence folders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 pr-10 h-12 text-base"
                  data-testid="input-search-vault"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2"
                    onClick={() => setSearchQuery("")}
                    data-testid="button-clear-vault-search"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <div className="flex border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  className="h-12 w-12 rounded-none"
                  onClick={() => setViewMode("grid")}
                  data-testid="button-vault-view-grid"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  className="h-12 w-12 rounded-none"
                  onClick={() => setViewMode("list")}
                  data-testid="button-vault-view-list"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {VAULT_CATEGORIES.map(cat => {
                const Icon = cat.icon;
                const count = categoryCounts[cat.id] || 0;
                if (cat.id !== "all" && count === 0) return null;
                return (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    className="gap-1.5 text-xs"
                    onClick={() => setSelectedCategory(cat.id)}
                    data-testid={`filter-vault-${cat.id}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {cat.label}
                    <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-[10px]">
                      {count}
                    </Badge>
                  </Button>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground" data-testid="text-vault-results">
                Showing {filtered.length} of {VAULT_FOLDERS.length} evidence folders
                {selectedCategory !== "all" && ` in "${VAULT_CATEGORIES.find(c => c.id === selectedCategory)?.label}"`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
              {(selectedCategory !== "all" || searchQuery) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                  data-testid="button-clear-vault-filters"
                >
                  <X className="h-3 w-3 mr-1" /> Clear filters
                </Button>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <Search className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-serif font-bold text-primary mb-2">No folders found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search or category filter.</p>
                <Button variant="outline" onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}>
                  Reset All Filters
                </Button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((folder, index) => {
                  const catLabel = VAULT_CATEGORIES.find(c => c.id === folder.category)?.label || folder.category;
                  return (
                    <motion.div
                      key={folder.url}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                    >
                      <a
                        href={folder.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                        data-testid={`link-vault-folder-${index}`}
                      >
                        <Card className="h-full hover-elevate transition-all border-border/50 group-hover:border-primary/30 group-hover:shadow-lg">
                          <CardContent className="p-5">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                {folder.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-serif font-bold text-sm text-primary leading-tight group-hover:underline">
                                  {folder.name}
                                </h3>
                                <Badge variant="outline" className="mt-1 text-[10px]">
                                  {catLabel}
                                </Badge>
                              </div>
                              <ExternalLink className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                              {folder.description}
                            </p>
                            <div className="mt-3 flex items-center gap-1.5 text-[10px] text-primary/60 font-medium uppercase tracking-wider">
                              <Lock className="h-3 w-3" /> Read-Only Access
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-2">
                {filtered.map((folder, index) => {
                  const catLabel = VAULT_CATEGORIES.find(c => c.id === folder.category)?.label || folder.category;
                  return (
                    <motion.div
                      key={folder.url}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.02 }}
                    >
                      <a
                        href={folder.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                        data-testid={`list-vault-folder-${index}`}
                      >
                        <Card className="hover-elevate transition-all border-border/50 group-hover:border-primary/30">
                          <CardContent className="p-4 flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                              {folder.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-serif font-bold text-sm text-primary leading-tight group-hover:underline truncate">
                                  {folder.name}
                                </h3>
                                <Badge variant="outline" className="text-[10px] flex-shrink-0 hidden sm:inline-flex">
                                  {catLabel}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-1">
                                {folder.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="text-[10px] text-primary/60 font-medium uppercase tracking-wider hidden md:flex items-center gap-1">
                                <Lock className="h-3 w-3" /> Read-Only
                              </span>
                              <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-lg text-primary mb-2">About This Archive</h3>
                    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                      <p>
                        This Evidence Vault provides public, read-only access to the complete document archive 
                        of Dr. Richard William McLean (Barran Dodger). The archive contains 2,077+ primary source 
                        documents spanning from 1990 to 2025, organized across {VAULT_FOLDERS.length} evidence folders.
                      </p>
                      <p>
                        All documents are hosted on MyAIDrive, an independent cloud storage platform. Documents are 
                        blockchain-timestamped to prove their existence and integrity at specific dates. No visitor, 
                        administrator, or external party can modify or delete these records.
                      </p>
                      <p>
                        This archive exists to ensure that truth cannot be erased. It serves as a permanent, 
                        immutable record available to investigators, journalists, legal professionals, human rights 
                        organizations, and the general public.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 py-8 border-t border-border"
          >
            <SocialShare
              title="Evidence Vault — Immutable Public Archive"
              description="Access 2,077+ blockchain-verified documents exposing 35 years of Australian government corruption and whistleblower persecution."
              url="https://www.barrandodger.com/evidence-vault"
            />
          </motion.section>
        </div>
      </main>

      <section className="py-12 px-4 bg-[hsl(222,55%,8%)]">
        <div className="container mx-auto max-w-3xl">
          <CommentSection pageSlug="evidence-vault" title="Evidence Vault Discussion" />
        </div>
      </section>

      <RelatedContent currentPath="/evidence-vault" />

      <Footer />
      <FloatingCTA />
    </div>
  );
}
