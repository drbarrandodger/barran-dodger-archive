import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { CrossLink, DocumentPopup, KEY_DOCUMENTS } from "@/components/CrossLink";
import { DownloadBadge } from "@/components/DownloadCounter";
import { 
  Scale, Globe, FileText, Clock, CheckCircle, 
  AlertCircle, Loader2, ExternalLink, Shield, Landmark
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SocialShare } from "@/components/SocialShare";
import { FloatingCTA } from "@/components/FloatingCTA";

interface LegalSubmission {
  body: string;
  fullName: string;
  status: "submitted" | "pending" | "under_review" | "acknowledged" | "decision_pending";
  submissionDate: string;
  reference?: string;
  description: string;
  nextSteps?: string;
  documents?: string[];
}

const submissions: LegalSubmission[] = [
  {
    body: "ICC",
    fullName: "International Criminal Court",
    status: "submitted",
    submissionDate: "September 2025",
    description: "Rome Statute Article 7 crimes against humanity submission documenting systematic persecution, torture, and attempted murder by Australian state actors. Based on 240+ blockchain-verified documents.",
    nextSteps: "Awaiting preliminary examination decision",
    documents: ["Criminal Affidavit", "Evidence Annexes", "Perpetrator Documentation"]
  },
  {
    body: "UNHCR",
    fullName: "UN High Commissioner for Refugees",
    status: "submitted",
    submissionDate: "2024",
    reference: "Ref. UR/UST/23/AUS/17",
    description: "Asylum claim for refugee status within own democracy based on well-founded fear of persecution by state actors.",
    nextSteps: "Protection assessment ongoing",
    documents: ["OHCHR Submission", "Persecution Evidence", "Asylum Claim"]
  },
  {
    body: "OAIC",
    fullName: "Office of the Australian Information Commissioner",
    status: "acknowledged",
    submissionDate: "2022-2024",
    reference: "FOI/2022/045IC",
    description: "FOI review that forced PM&C to admit documents exist after initial false denial.",
    nextSteps: "Review completed — PM&C reversal documented",
    documents: ["FOI Application", "PM&C Reversal", "State Knowledge Proof"]
  },
  {
    body: "Federal Court",
    fullName: "Federal Court of Australia",
    status: "acknowledged",
    submissionDate: "2025",
    description: "Employment status certification confirming DSS worker status, voiding ComCare/AAT denials.",
    nextSteps: "Certification received — workers compensation appeal pending",
    documents: ["Employment Certification", "PID Act Assessment"]
  },
  {
    body: "NDIS Commission",
    fullName: "NDIS Quality and Safeguards Commission",
    status: "submitted",
    submissionDate: "November 2025",
    description: "Formal misconduct complaint against Sukhi Tear and Diversitas WA for illegal cease and desist, fund obstruction.",
    nextSteps: "Investigation pending",
    documents: ["Misconduct Statement", "Evidence of Fund Withholding"]
  },
  {
    body: "Ombudsman",
    fullName: "Commonwealth Ombudsman",
    status: "submitted",
    submissionDate: "November 2025",
    description: "Systemic complaint regarding multi-agency coordination in persecution campaign.",
    nextSteps: "Review in progress",
    documents: ["Multi-Agency Evidence", "Coordination Documentation"]
  }
];

const getStatusBadge = (status: LegalSubmission["status"]) => {
  switch (status) {
    case "submitted":
      return <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30"><FileText className="h-3 w-3 mr-1" /> Submitted</Badge>;
    case "pending":
      return <Badge className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30"><Clock className="h-3 w-3 mr-1" /> Pending</Badge>;
    case "under_review":
      return <Badge className="bg-purple-500/20 text-purple-600 border-purple-500/30"><Loader2 className="h-3 w-3 mr-1 animate-spin" /> Under Review</Badge>;
    case "acknowledged":
      return <Badge className="bg-green-500/20 text-green-600 border-green-500/30"><CheckCircle className="h-3 w-3 mr-1" /> Acknowledged</Badge>;
    case "decision_pending":
      return <Badge className="bg-orange-500/20 text-orange-600 border-orange-500/30"><AlertCircle className="h-3 w-3 mr-1" /> Decision Pending</Badge>;
  }
};

const getProgressValue = (status: LegalSubmission["status"]) => {
  switch (status) {
    case "submitted": return 25;
    case "pending": return 40;
    case "under_review": return 60;
    case "acknowledged": return 80;
    case "decision_pending": return 90;
    default: return 0;
  }
};

export default function LegalStatus() {
  const internationalSubmissions = submissions.filter(s => ["ICC", "UNHCR"].includes(s.body));
  const domesticSubmissions = submissions.filter(s => !["ICC", "UNHCR"].includes(s.body));

  return (
    <>
      <SEO 
        title="Legal Status — Active Proceedings & Formal Demands for Justice"
        description="Current legal proceedings, formal demands sent to the Prime Minister, Attorney-General, AFP, ASIO, and AHRC. 14-day deadlines. No response. The silence is the evidence."
        keywords="legal proceedings whistleblower Australia, formal demand justice, Attorney General silence, Prime Minister Albanese corruption, active legal case Australia"
      />
      <Navigation />
      
      <main className="min-h-screen bg-background pt-44 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[hsl(38,92%,50%)]/50 text-[hsl(38,92%,50%)]">
                Live Status
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                Legal Status Tracker
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real-time status of all legal proceedings and submissions across international and domestic bodies, backed by <CrossLink to="/evidence">240+ blockchain-verified documents</CrossLink>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">{submissions.length}</div>
                  <p className="text-sm text-muted-foreground">Active Submissions</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-green-600">{submissions.filter(s => s.status === "acknowledged").length}</div>
                  <p className="text-sm text-muted-foreground">Acknowledged</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600">{submissions.filter(s => s.status === "submitted").length}</div>
                  <p className="text-sm text-muted-foreground">Awaiting Response</p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Globe className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                  International Bodies
                </h2>
                <div className="space-y-4">
                  {internationalSubmissions.map((submission, index) => (
                    <Card key={index} className="border-[hsl(38,92%,50%)]/30">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-mono text-lg font-bold text-[hsl(38,92%,50%)]">{submission.body}</span>
                              {getStatusBadge(submission.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">{submission.fullName}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {submission.submissionDate}
                          </Badge>
                        </div>
                        
                        <Progress value={getProgressValue(submission.status)} className="h-2 mb-4" />
                        
                        <p className="text-sm text-foreground mb-3">{submission.description}</p>
                        
                        {submission.reference && (
                          <p className="text-xs font-mono text-muted-foreground mb-2">
                            Reference: {submission.reference}
                          </p>
                        )}
                        
                        {submission.nextSteps && (
                          <div className="bg-muted/50 rounded p-3 text-sm">
                            <span className="font-medium text-foreground">Next Steps:</span>{" "}
                            <span className="text-muted-foreground">{submission.nextSteps}</span>
                          </div>
                        )}
                        
                        {submission.documents && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {submission.documents.map((doc, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">{doc}</Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 bg-muted/30 rounded-lg p-4 text-sm text-muted-foreground">
                  International submissions are supported by the <DocumentPopup {...KEY_DOCUMENTS.crimesAgainstHumanity}>Crimes Against Humanity forensic analysis</DocumentPopup> and the <CrossLink to="/taxpayer-cost-analysis">$11.5M+ taxpayer cost analysis</CrossLink> documenting the full scope of state-sponsored persecution. See the complete <CrossLink to="/timeline">35-year timeline</CrossLink> for chronological context.
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Landmark className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                  Australian Bodies
                </h2>
                <div className="space-y-4">
                  {domesticSubmissions.map((submission, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-mono text-lg font-bold text-primary">{submission.body}</span>
                              {getStatusBadge(submission.status)}
                            </div>
                            <p className="text-sm text-muted-foreground">{submission.fullName}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {submission.submissionDate}
                          </Badge>
                        </div>
                        
                        <Progress value={getProgressValue(submission.status)} className="h-2 mb-4" />
                        
                        <p className="text-sm text-foreground mb-3">{submission.description}</p>
                        
                        {submission.reference && (
                          <p className="text-xs font-mono text-muted-foreground mb-2">
                            Reference: {submission.reference}
                          </p>
                        )}
                        
                        {submission.nextSteps && (
                          <div className="bg-muted/50 rounded p-3 text-sm">
                            <span className="font-medium text-foreground">Next Steps:</span>{" "}
                            <span className="text-muted-foreground">{submission.nextSteps}</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <Card className="mt-8 border-2 border-red-500/30 bg-gradient-to-br from-red-500/5 to-background" data-testid="card-legal-demand-download">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <Scale className="h-6 w-6 text-red-500 flex-shrink-0" />
                  <h3 className="text-lg font-serif font-bold text-primary">Formal Legal Demand: Crimes Against Humanity</h3>
                  <Badge variant="destructive" className="font-bold">FREE PDF</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Historical Legal Notice & Final Demand for Justice addressed to the Prime Minister, Attorney-General, <DocumentPopup {...KEY_DOCUMENTS.entrapmentAffidavit}>NDIS</DocumentPopup>, AFP, NACC, AHRC, and ASIO. Documents 2021 state-sanctioned murder at Werribee Mercy Hospital, financial entombment, 2024 <DocumentPopup {...KEY_DOCUMENTS.stateTargeting}>assassination attempt</DocumentPopup> in Port Macquarie, and <CrossLink to="/prophetic-essay">V2K</CrossLink> psychological warfare. Establishes 14-day deadline for acknowledgment, restitution ($42.5M–$123M), and criminal investigation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="destructive" className="gap-2" asChild data-testid="button-download-legal-demand">
                    <a href="/documents/crimes_against_humanity_final_demand.pdf" target="_blank" rel="noopener noreferrer" download>
                      <FileText className="h-4 w-4" /> Download Final Demand (PDF) <DownloadBadge url="/documents/crimes_against_humanity_final_demand.pdf" />
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2" asChild data-testid="button-download-100k-essay-legal">
                    <a href="/documents/digital_oppression_100000_word_essay.pdf" target="_blank" rel="noopener noreferrer" download>
                      <FileText className="h-4 w-4" /> 100,000-Word Digital Oppression Exposé (PDF) <DownloadBadge url="/documents/digital_oppression_100000_word_essay.pdf" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-12">
              <p className="text-sm text-muted-foreground mb-4" data-testid="text-blockchain-notice">
                All submissions are <CrossLink to="/blockchain">blockchain-verified</CrossLink> and timestamped for authenticity. Supporting documents include the <DocumentPopup {...KEY_DOCUMENTS.pidActAnalysis}>PID Act analysis</DocumentPopup>, the <DocumentPopup {...KEY_DOCUMENTS.entrapmentAffidavit}>entrapment affidavit</DocumentPopup>, and the <DocumentPopup {...KEY_DOCUMENTS.evidenceSummary}>comprehensive evidence summary</DocumentPopup>. Full case breakdowns available in the <CrossLink to="/case-studies">case studies</CrossLink>.
              </p>
              <Link href="/blockchain" data-testid="link-blockchain-verification">
                <Button variant="outline" data-testid="button-view-blockchain">
                  <Shield className="h-4 w-4 mr-2" /> View Blockchain Verification
                </Button>
              </Link>
            </div>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 pt-8 border-t border-border"
              data-testid="section-share-legalstatus"
            >
              <SocialShare 
                title="Active Legal Proceedings: ICC, UNHCR & Federal Court Submissions"
                description="Track the status of legal submissions to the International Criminal Court, UN Human Rights Council, and Australian Federal Court. Every submission is blockchain-verified and publicly documented."
                url="https://www.barrandodger.com.au/legal-status"
              />
            </motion.section>
          </motion.div>
        </div>
      </main>
      
      <Footer />
          <FloatingCTA />
</>
  );
}
