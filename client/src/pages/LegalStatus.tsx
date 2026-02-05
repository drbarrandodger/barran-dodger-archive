import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { 
  Scale, Globe, FileText, Clock, CheckCircle, 
  AlertCircle, Loader2, ExternalLink, Shield, Landmark
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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
    description: "Rome Statute Article 7 crimes against humanity submission documenting systematic persecution, torture, and attempted murder by Australian state actors.",
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
        title="Legal Status Tracker | Barran Dodger Legal & Ethical Trust Fund"
        description="Track the status of all legal submissions to ICC, UNHCR, Federal Court, and Australian oversight bodies."
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
                Real-time status of all legal proceedings and submissions.
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

            <div className="text-center mt-12">
              <p className="text-sm text-muted-foreground mb-4" data-testid="text-blockchain-notice">
                All submissions are blockchain-verified and timestamped for authenticity.
              </p>
              <Link href="/blockchain" data-testid="link-blockchain-verification">
                <Button variant="outline" data-testid="button-view-blockchain">
                  <Shield className="h-4 w-4 mr-2" /> View Blockchain Verification
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
