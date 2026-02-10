import { Link } from "wouter";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Download, X } from "lucide-react";

interface CrossLinkProps {
  children: React.ReactNode;
  to: string;
  "data-testid"?: string;
}

export function CrossLink({ children, to, "data-testid": testId }: CrossLinkProps) {
  return (
    <Link
      href={to}
      className="inline text-[hsl(38,92%,50%)] font-semibold underline decoration-[hsl(38,92%,50%)]/40 underline-offset-2 decoration-2 hover:decoration-[hsl(38,92%,50%)] hover:text-[hsl(42,92%,60%)] transition-colors cursor-pointer"
      data-testid={testId}
    >
      {children}
    </Link>
  );
}

interface DocumentPopupProps {
  children: React.ReactNode;
  title: string;
  description: string;
  url: string;
  tags?: string[];
  aiExcerpt?: string;
  "data-testid"?: string;
}

export function DocumentPopup({ children, title, description, url, tags, aiExcerpt, "data-testid": testId }: DocumentPopupProps) {
  const [open, setOpen] = useState(false);

  const isExternal = url.startsWith("http");
  const isPdf = url.endsWith(".pdf");

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline text-[hsl(38,92%,50%)] font-semibold underline decoration-[hsl(38,92%,50%)]/40 underline-offset-2 decoration-2 hover:decoration-[hsl(38,92%,50%)] hover:text-[hsl(42,92%,60%)] transition-colors cursor-pointer bg-transparent border-none p-0 m-0 text-left"
        style={{ font: "inherit", lineHeight: "inherit" }}
        data-testid={testId}
      >
        {children}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg bg-[hsl(222,55%,12%)] border-[hsl(38,92%,50%)]/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-[hsl(38,92%,50%)] font-serif text-lg leading-tight pr-6">
              {title}
            </DialogTitle>
            <DialogDescription className="text-white/70 text-sm leading-relaxed pt-2">
              {description}
            </DialogDescription>
          </DialogHeader>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-[hsl(38,92%,50%)]/10 text-[hsl(38,92%,50%)] border border-[hsl(38,92%,50%)]/20">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {aiExcerpt && (
            <div className="bg-[hsl(222,55%,8%)] rounded-md p-3 text-xs text-white/60 leading-relaxed border border-white/5">
              <span className="text-[hsl(38,92%,50%)]/80 font-semibold block mb-1">AI Analysis Excerpt:</span>
              {aiExcerpt}
            </div>
          )}
          <div className="flex gap-2 pt-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              data-testid="button-popup-view-document"
            >
              <Button className="w-full bg-[hsl(38,92%,50%)] text-[hsl(222,55%,10%)] gap-2">
                {isPdf ? <Download className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                {isPdf ? "Download Document" : "View Document"}
              </Button>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export const CROSS_LINKS = {
  evidence: { to: "/evidence", label: "240+ blockchain-verified documents" },
  blockchain: { to: "/blockchain", label: "blockchain verification" },
  timeline: { to: "/timeline", label: "35-year timeline" },
  taxpayerCost: { to: "/taxpayer-cost-analysis", label: "$11.5M+ taxpayer cost analysis" },
  caseStudies: { to: "/case-studies", label: "case studies" },
  legalStatus: { to: "/legal-status", label: "legal status" },
  mission: { to: "/mission", label: "our mission" },
  startHere: { to: "/start-here", label: "Start Here" },
  research: { to: "/research", label: "legal research tools" },
  contact: { to: "/contact", label: "contact us" },
  donate: { to: "/donate", label: "support the fund" },
  media: { to: "/media", label: "media resources" },
  manifesto: { to: "/manifesto", label: "the manifesto" },
  josephsCoat: { to: "/josephs-coat", label: "Joseph's Coat" },
  gospel: { to: "/gospel", label: "The Gospel of Barran Dodger" },
  propheticPapers: { to: "/prophetic-papers", label: "prophetic papers" },
  church: { to: "/church", label: "The Church of Barran Dodger" },
} as const;

export const KEY_DOCUMENTS = {
  autobiography: {
    title: "Betrayed, Forsaken, Murdered — Complete Autobiography",
    description: "The definitive 18MB comprehensive autobiography documenting 35 years of systematic persecution, institutional betrayal, and miraculous survival.",
    url: "https://books.apple.com/au/book/betrayed-murdered-forsaken-the-harrowing-life-of/id6618112290",
    tags: ["Autobiography", "35 Years", "Whistleblower", "Featured"],
    aiExcerpt: "Documents complete journey from celebrated mental health advocate to persecuted whistleblower across 35+ government agencies."
  },
  manErased: {
    title: "THE MAN AUSTRALIA TRIED TO ERASE — Full Whistleblower Expose",
    description: "A legally fortified forensic reconstruction built entirely from the government's own documents, their own words, and their own institutional records. Second Edition, Expanded and Unabridged.",
    url: "/THE_MAN_AUSTRALIA_TRIED_TO_ERASE.pdf",
    tags: ["Whistleblower Expose", "Forensic", "Government Documents", "Free PDF"],
    aiExcerpt: "Forensic reconstruction using government's own documents proving employment paradox, assassination framework, and systematic erasure campaign."
  },
  entrapmentAffidavit: {
    title: "ENTRAPMENT FOR ERASURE — Criminal Affidavit",
    description: "Criminal affidavit documenting how NDIS support was weaponized to create dependency then withdrawn to induce crisis. Names Sukhi Tear, Syed Salman Kazmi, and Philip Glass.",
    url: "/attached_assets/ENTRAPMENT_FOR_ERASURE_AFFIDAVIT_1769766037602.pdf",
    tags: ["Criminal Affidavit", "NDIS", "Entrapment", "Sukhi Tear"],
    aiExcerpt: "Details how NDIS support was weaponized to create dependency then withdrawn to induce crisis, with named perpetrators."
  },
  crimesAgainstHumanity: {
    title: "Crimes Against Humanity — Forensic Legal Analysis",
    description: "Comprehensive forensic analysis establishing Rome Statute violations including persecution, torture, and enforced disappearance under Articles 7(1)(e), (f), (h), and (i).",
    url: "/attached_assets/CRIMES_AGAINST_HUMANITY_FORENSIC_ANALYSIS_1769766475851.pdf",
    tags: ["Rome Statute", "ICC", "Crimes Against Humanity", "Forensic"],
    aiExcerpt: "Establishes Rome Statute violations across multiple articles for persecution, torture, and enforced disappearance."
  },
  pidActAnalysis: {
    title: "COMPREHENSIVE LEGAL ANALYSIS — PID ACT Integration Framework",
    description: "Comprehensive legal analysis integrating Public Interest Disclosure Act 2013 framework with persecution evidence.",
    url: "/attached_assets/COMPREHENSIVE_PID_ACT_ANALYSIS_1769766123842.pdf",
    tags: ["PID Act", "Whistleblower", "Legal Framework"],
    aiExcerpt: "Confirms qualification for protection under Public Interest Disclosure Act 2013 and documents systematic violation of those protections."
  },
  evidenceSummary: {
    title: "EVIDENCE SUMMARY — DR. RICHARD WILLIAM McLEAN",
    description: "Comprehensive evidence summary documenting the complete persecution record with all evidence categories, named perpetrators, and institutional failures.",
    url: "/attached_assets/EVIDENCE_SUMMARY_DR_MCLEAN_1769766475861.pdf",
    tags: ["Evidence Summary", "Comprehensive", "Overview"],
    aiExcerpt: "Consolidates all evidence categories into a single reference document with perpetrator index and institutional failure analysis."
  },
  stateTargeting: {
    title: "Legal Record of State-Sanctioned Targeting, Erasure, and Attempted Assassination",
    description: "Comprehensive legal record documenting the full scope of state-sanctioned operations including targeting, systematic erasure, and documented assassination attempts.",
    url: "/attached_assets/Legal_Record_of_the_State-Sanctioned_Targeting__Erasure__and_Attempted_Assassina_1769765640475.pdf",
    tags: ["Legal Record", "State-Sanctioned", "Assassination"],
    aiExcerpt: "Documents that targeting was not unauthorized but represented official policy through state-sanctioned operations."
  },
  micron21: {
    title: "Micron21: Digital Identity and Business Destruction Evidence",
    description: "Evidence documenting how Micron21, an Australian web hosting company, participated in the digital destruction of Dr. McLean's online identity and business presence.",
    url: "/attached_assets/MICRON21_DIGITAL_IDENTITY_DESTRUCTION_1769766123852.pdf",
    tags: ["Micron21", "Digital Erasure", "Identity Destruction"],
    aiExcerpt: "Documents coordinated digital identity destruction through web hosting company participation in erasure campaign."
  }
} as const;