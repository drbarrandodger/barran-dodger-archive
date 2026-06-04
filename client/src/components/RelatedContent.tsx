import { Link } from "wouter";
import { DocumentPopup, KEY_DOCUMENTS } from "@/components/CrossLink";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowRight, BookOpen, Scale, Shield, Globe, Lock, Eye, Brain, DollarSign, Landmark, Flame, Gavel } from "lucide-react";

type PageRef = {
  type: "page";
  to: string;
  label: string;
  description: string;
  icon: "evidence" | "blockchain" | "timeline" | "case-studies" | "taxpayer" | "legal-status" | "manifesto" | "gospel" | "start-here" | "admin-annihilation" | "retrospective" | "publications" | "josephs-coat";
};

type DocRef = {
  type: "document";
  docKey: keyof typeof KEY_DOCUMENTS;
};

type RelatedItem = PageRef | DocRef;

const PAGE_ICON_MAP = {
  "evidence": FileText,
  "blockchain": Lock,
  "timeline": Landmark,
  "case-studies": Eye,
  "taxpayer": DollarSign,
  "legal-status": Gavel,
  "manifesto": Scale,
  "gospel": BookOpen,
  "start-here": ArrowRight,
  "admin-annihilation": Brain,
  "retrospective": Shield,
  "publications": FileText,
  "josephs-coat": Flame,
};

const CONTEXT_MAP: Record<string, RelatedItem[]> = {
  "/": [
    { type: "page", to: "/start-here", label: "Start Here", description: "New? Begin with this essential guide", icon: "start-here" },
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "240+ forensic documents with AI analysis", icon: "evidence" },
    { type: "page", to: "/case-studies", label: "Case Studies", description: "Deep-dive corruption analysis", icon: "case-studies" },
    { type: "page", to: "/taxpayer-cost-analysis", label: "$11.5M Taxpayer Cost", description: "What YOUR taxes funded", icon: "taxpayer" },
    { type: "document", docKey: "retrospectiveStatement" },
    { type: "document", docKey: "manErased" },
  ],
  "/evidence": [
    { type: "page", to: "/blockchain", label: "Blockchain Verification", description: "How every document is cryptographically sealed", icon: "blockchain" },
    { type: "page", to: "/case-studies", label: "Case Studies", description: "Deep-dive analysis of specific corruption cases", icon: "case-studies" },
    { type: "page", to: "/taxpayer-cost-analysis", label: "$11.5M Taxpayer Cost", description: "What YOUR taxes funded across 35+ agencies", icon: "taxpayer" },
    { type: "page", to: "/timeline", label: "35-Year Timeline", description: "Chronological map of documented persecution", icon: "timeline" },
    { type: "document", docKey: "retrospectiveStatement" },
    { type: "document", docKey: "administrativeAnnihilation" },
    { type: "document", docKey: "beyondPathology" },
  ],
  "/blockchain": [
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "240+ forensic documents with AI analysis", icon: "evidence" },
    { type: "page", to: "/legal-status", label: "Legal Status", description: "Active ICC, UNHCR, Federal Court proceedings", icon: "legal-status" },
    { type: "document", docKey: "universalMasterCommand" },
    { type: "document", docKey: "certifiedRecord" },
  ],
  "/timeline": [
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "240+ supporting documents", icon: "evidence" },
    { type: "page", to: "/case-studies", label: "Case Studies", description: "Detailed analysis of key incidents", icon: "case-studies" },
    { type: "page", to: "/legal-status", label: "Legal Status", description: "Current legal proceedings", icon: "legal-status" },
    { type: "document", docKey: "manErased" },
    { type: "document", docKey: "evidenceSummary" },
    { type: "document", docKey: "stateTargeting" },
  ],
  "/case-studies": [
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "Full document collection", icon: "evidence" },
    { type: "page", to: "/taxpayer-cost-analysis", label: "$11.5M Taxpayer Cost", description: "Financial breakdown of persecution", icon: "taxpayer" },
    { type: "page", to: "/legal-status", label: "Legal Status", description: "Active proceedings against perpetrators", icon: "legal-status" },
    { type: "document", docKey: "paradoxOfPersecution" },
    { type: "document", docKey: "entrapmentAffidavit" },
    { type: "document", docKey: "crimesAgainstHumanity" },
    { type: "document", docKey: "micron21" },
  ],
  "/taxpayer-cost-analysis": [
    { type: "page", to: "/case-studies", label: "Case Studies", description: "Detailed breakdowns of each cost category", icon: "case-studies" },
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "Supporting documents for all claims", icon: "evidence" },
    { type: "page", to: "/timeline", label: "35-Year Timeline", description: "When each cost was incurred", icon: "timeline" },
    { type: "document", docKey: "administrativeAnnihilation" },
    { type: "document", docKey: "digitalOppression" },
    { type: "document", docKey: "pidActAnalysis" },
  ],
  "/legal-status": [
    { type: "page", to: "/case-studies", label: "Case Studies", description: "Evidence supporting each proceeding", icon: "case-studies" },
    { type: "page", to: "/blockchain", label: "Blockchain Verification", description: "Cryptographic proof of evidence integrity", icon: "blockchain" },
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "Full document collection", icon: "evidence" },
    { type: "document", docKey: "crimesAgainstHumanityDemand" },
    { type: "document", docKey: "certifiedRecord" },
    { type: "document", docKey: "paradoxOfPersecution" },
  ],
  "/manifesto": [
    { type: "page", to: "/gospel", label: "Sacred Gospels", description: "Prophetic testimony and scripture", icon: "gospel" },
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "The documentary foundation", icon: "evidence" },
    { type: "page", to: "/blockchain", label: "Blockchain Verification", description: "Immutable testimony", icon: "blockchain" },
    { type: "document", docKey: "cosmicScroll" },
    { type: "document", docKey: "universalMasterCommand" },
  ],
  "/gospel": [
    { type: "page", to: "/manifesto", label: "The Manifesto", description: "Declaration of purpose and mission", icon: "manifesto" },
    { type: "page", to: "/josephs-coat", label: "Joseph's Coat", description: "Prophetic essay on divine purpose", icon: "josephs-coat" },
    { type: "page", to: "/blockchain", label: "Blockchain Verification", description: "All gospels are blockchain-sealed", icon: "blockchain" },
    { type: "document", docKey: "cosmicScroll" },
  ],
  "/josephs-coat": [
    { type: "page", to: "/gospel", label: "Sacred Gospels", description: "The complete sacred writings", icon: "gospel" },
    { type: "page", to: "/manifesto", label: "The Manifesto", description: "Declaration and tenets", icon: "manifesto" },
    { type: "page", to: "/timeline", label: "35-Year Timeline", description: "The persecution narrative", icon: "timeline" },
    { type: "document", docKey: "manErased" },
  ],
  "/start-here": [
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "240+ forensic documents", icon: "evidence" },
    { type: "page", to: "/case-studies", label: "Case Studies", description: "Deep-dive corruption analysis", icon: "case-studies" },
    { type: "page", to: "/taxpayer-cost-analysis", label: "$11.5M Taxpayer Cost", description: "What your taxes funded", icon: "taxpayer" },
    { type: "page", to: "/blockchain", label: "Blockchain Verification", description: "Cryptographic proof", icon: "blockchain" },
    { type: "document", docKey: "manErased" },
    { type: "document", docKey: "retrospectiveStatement" },
  ],
  "/retrospective-statement": [
    { type: "page", to: "/administrative-annihilation", label: "Administrative Annihilation", description: "The 8 paradoxes analysis", icon: "admin-annihilation" },
    { type: "page", to: "/case-studies", label: "Case Studies", description: "Individual agency failures", icon: "case-studies" },
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "The source documents", icon: "evidence" },
    { type: "document", docKey: "manErased" },
    { type: "document", docKey: "evidenceSummary" },
  ],
  "/administrative-annihilation": [
    { type: "page", to: "/case-studies", label: "Case Studies", description: "Individual paradox deep-dives", icon: "case-studies" },
    { type: "page", to: "/legal-status", label: "Legal Status", description: "Active proceedings", icon: "legal-status" },
    { type: "page", to: "/taxpayer-cost-analysis", label: "$11.5M Taxpayer Cost", description: "The financial dimension", icon: "taxpayer" },
    { type: "document", docKey: "paradoxOfPersecution" },
    { type: "document", docKey: "beyondPathology" },
    { type: "document", docKey: "crimesAgainstHumanity" },
  ],
  "/publications": [
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "Full document collection", icon: "evidence" },
    { type: "page", to: "/gospel", label: "Sacred Gospels", description: "Prophetic writings", icon: "gospel" },
    { type: "page", to: "/blockchain", label: "Blockchain Verification", description: "All publications are sealed", icon: "blockchain" },
    { type: "document", docKey: "digitalOppression" },
    { type: "document", docKey: "cosmicScroll" },
  ],
  "/archive": [
    { type: "page", to: "/start-here", label: "Start Here", description: "New? Begin with this guide", icon: "start-here" },
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "240+ documents", icon: "evidence" },
    { type: "page", to: "/case-studies", label: "Case Studies", description: "Deep-dive analysis", icon: "case-studies" },
    { type: "document", docKey: "retrospectiveStatement" },
    { type: "document", docKey: "manErased" },
  ],
  "/media": [
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "Full document collection", icon: "evidence" },
    { type: "page", to: "/start-here", label: "Start Here", description: "Case overview", icon: "start-here" },
    { type: "page", to: "/legal-status", label: "Legal Status", description: "Active proceedings", icon: "legal-status" },
    { type: "document", docKey: "manErased" },
  ],
  "/mission": [
    { type: "page", to: "/manifesto", label: "The Manifesto", description: "Full declaration", icon: "manifesto" },
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "The documentary foundation", icon: "evidence" },
    { type: "page", to: "/legal-status", label: "Legal Status", description: "Active proceedings", icon: "legal-status" },
    { type: "document", docKey: "certifiedRecord" },
  ],
  "/donate": [
    { type: "page", to: "/evidence", label: "See the Evidence", description: "240+ documents justifying support", icon: "evidence" },
    { type: "page", to: "/legal-status", label: "Legal Status", description: "Active legal proceedings", icon: "legal-status" },
    { type: "page", to: "/taxpayer-cost-analysis", label: "$11.5M Taxpayer Cost", description: "Why justice needs funding", icon: "taxpayer" },
    { type: "document", docKey: "manErased" },
  ],
  "/research": [
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "240+ primary source documents", icon: "evidence" },
    { type: "page", to: "/case-studies", label: "Case Studies", description: "Applied legal analysis", icon: "case-studies" },
    { type: "page", to: "/legal-status", label: "Legal Status", description: "Current proceedings", icon: "legal-status" },
    { type: "document", docKey: "pidActAnalysis" },
  ],
  "/church": [
    { type: "page", to: "/gospel", label: "Sacred Gospels", description: "The sacred writings", icon: "gospel" },
    { type: "page", to: "/manifesto", label: "The Manifesto", description: "Tenets and mission", icon: "manifesto" },
    { type: "page", to: "/josephs-coat", label: "Joseph's Coat", description: "Prophetic essay", icon: "josephs-coat" },
    { type: "document", docKey: "cosmicScroll" },
  ],
  "/prophetic-papers": [
    { type: "page", to: "/gospel", label: "Sacred Gospels", description: "Complete sacred canon", icon: "gospel" },
    { type: "page", to: "/manifesto", label: "The Manifesto", description: "Spiritual tenets", icon: "manifesto" },
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "Documentary foundation", icon: "evidence" },
    { type: "document", docKey: "cosmicScroll" },
  ],
  "/evidence-vault": [
    { type: "page", to: "/evidence", label: "Evidence Archive", description: "Full document list", icon: "evidence" },
    { type: "page", to: "/blockchain", label: "Blockchain Verification", description: "Cryptographic proof", icon: "blockchain" },
    { type: "page", to: "/case-studies", label: "Case Studies", description: "Analysis of key documents", icon: "case-studies" },
    { type: "document", docKey: "evidenceSummary" },
  ],
};

interface RelatedContentProps {
  currentPath: string;
}

export function RelatedContent({ currentPath }: RelatedContentProps) {
  const items = CONTEXT_MAP[currentPath];
  if (!items || items.length === 0) return null;

  const pages = items.filter((i): i is PageRef => i.type === "page");
  const docs = items.filter((i): i is DocRef => i.type === "document");

  return (
    <section className="py-12 px-4" data-testid="section-related-content">
      <div className="container mx-auto max-w-5xl">
        <div className="border-t border-border pt-10 space-y-8">
          <div className="text-center space-y-2">
            <Badge variant="outline" className="border-[hsl(38,92%,50%)]/40 text-[hsl(38,92%,50%)] px-4 py-1 text-xs font-bold uppercase tracking-wider">
              <Globe className="h-3 w-3 mr-1.5" /> Cross-Reference
            </Badge>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-primary">
              Related Evidence & Analysis
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              This case is interconnected across hundreds of documents and multiple legal proceedings. Explore related material below.
            </p>
          </div>

          {pages.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {pages.map((page) => {
                const IconComponent = PAGE_ICON_MAP[page.icon] || FileText;
                return (
                  <Link key={page.to} href={page.to}>
                    <Card className="h-full hover:border-[hsl(38,92%,50%)]/40 transition-colors cursor-pointer group" data-testid={`related-page-${page.icon}`}>
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="h-9 w-9 rounded-lg bg-[hsl(38,92%,50%)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(38,92%,50%)]/20 transition-colors">
                          <IconComponent className="h-4 w-4 text-[hsl(38,92%,50%)]" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-sm text-primary group-hover:text-[hsl(38,92%,50%)] transition-colors leading-tight">
                            {page.label}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                            {page.description}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-[hsl(38,92%,50%)] transition-colors flex-shrink-0 mt-0.5" />
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}

          {docs.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground pl-1">
                Key Documents
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {docs.map((doc) => {
                  const docData = KEY_DOCUMENTS[doc.docKey];
                  return (
                    <DocumentPopup
                      key={doc.docKey}
                      title={docData.title}
                      description={docData.description}
                      url={docData.url}
                      tags={docData.tags}
                      aiExcerpt={docData.aiExcerpt}
                      data-testid={`related-doc-${doc.docKey}`}
                    >
                      <Card className="hover:border-[hsl(38,92%,50%)]/30 transition-colors cursor-pointer w-full text-left">
                        <CardContent className="p-3 flex items-center gap-3">
                          <FileText className="h-4 w-4 text-[hsl(38,92%,50%)] flex-shrink-0" />
                          <span className="text-sm text-primary font-medium leading-tight line-clamp-1">
                            {docData.title}
                          </span>
                        </CardContent>
                      </Card>
                    </DocumentPopup>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
