import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SocialShare } from "@/components/SocialShare";
import { 
  FileText, 
  Building2, 
  AlertTriangle, 
  ExternalLink,
  Calendar,
  Shield,
  Scale,
  Database
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const caseStudies = [
  {
    id: "oaic-coverup",
    title: "The OAIC Cover-Up",
    subtitle: "How Australia's Information Commissioner Enabled Persecution",
    icon: Building2,
    severity: "critical",
    documents: 15,
    summary: "Systematic refusal to investigate privacy complaints, FOI obstruction, and coordination with other agencies to deny justice.",
    timeline: [
      { date: "October 2021", event: "Initial privacy complaints filed" },
      { date: "November 2021", event: "OAIC response claims 'no interference with privacy'" },
      { date: "April 2022", event: "Complaint about Micron21 dismissed despite evidence" },
      { date: "2022-2024", event: "Pattern of rejection continues across multiple references" }
    ],
    keyEvidence: [
      "EN21/12782 - Documented plea listing every agency rejection",
      "CP21/02752 - Micron21 complaint dismissal",
      "Multiple FOI refusals under various reference numbers"
    ],
    legalImplications: "Potential breach of Privacy Act duties, maladministration under PID Act"
  },
  {
    id: "mercy-hospital",
    title: "The Mercy Hospital Incident",
    subtitle: "Medical Malpractice and Near-Death Experience Under Care",
    icon: AlertTriangle,
    severity: "critical",
    documents: 10,
    summary: "Suicide attempt under care with 'fatal injury', medication denial, and subsequent cover-up by Salt Water Clinic and MHCC.",
    timeline: [
      { date: "February 2021", event: "Hospitalization and medication denial" },
      { date: "February 2021", event: "Suicide attempt - found unresponsive, no pulse" },
      { date: "March 2021", event: "Discharge with documented 'fatal injury'" },
      { date: "May 2021", event: "Salt Water Clinic refuses ongoing care" },
      { date: "June 2021", event: "MHCC complaint investigation compromised" }
    ],
    keyEvidence: [
      "FOI records showing medication denial",
      "Discharge notes confirming near-death incident",
      "MHCC complaint records and Alex Tinter correspondence",
      "Salt Water Clinic rejection documentation"
    ],
    legalImplications: "Medical malpractice, breach of duty of care, potential criminal negligence"
  },
  {
    id: "micron21-destruction",
    title: "Digital Identity Destruction",
    subtitle: "How Micron21 Deleted 20 Years of Evidence During Hospital Stay",
    icon: Database,
    severity: "critical",
    documents: 8,
    summary: "Web hosting company deliberately destroyed website, email, and business records while client was hospitalized after suicide attempt.",
    timeline: [
      { date: "February 2021", event: "Hospitalization following suicide attempt" },
      { date: "March 2021", event: "Micron21 accuses client of being 'conspiratorial'" },
      { date: "March 2021", event: "All website data, emails, and evidence deleted" },
      { date: "December 2021", event: "Privacy complaint filed with OAIC" },
      { date: "April 2022", event: "OAIC dismisses complaint, claims 'no privacy interference'" }
    ],
    keyEvidence: [
      "Micron21 communications accusing client",
      "Evidence of deliberate data destruction timing",
      "OAIC complaint CP21/02752 and dismissal letter",
      "Business registration and 20+ years of domain ownership records"
    ],
    legalImplications: "Destruction of evidence, tortious interference, potential computer crimes"
  },
  {
    id: "ombudsman-restriction",
    title: "Commonwealth Ombudsman Service Restriction",
    subtitle: "How the Oversight Body Silenced a Whistleblower",
    icon: Scale,
    severity: "high",
    documents: 6,
    summary: "The agency meant to protect citizens from government abuse instead banned the victim from making further complaints.",
    timeline: [
      { date: "2021-2023", event: "Multiple complaints filed about agency failures" },
      { date: "March 2023", event: "PID filing with Commonwealth Ombudsman" },
      { date: "June 2024", event: "Service restriction letter issued (Ref: 2024-101985)" },
      { date: "2024", event: "Victim banned from seeking further assistance" }
    ],
    keyEvidence: [
      "Service restriction letter from Senior Assistant Ombudsman",
      "Email from Kristina, Assistant Director (Ref: 2024-101985)",
      "Prior complaint records showing pattern of dismissal"
    ],
    legalImplications: "Breach of oversight duties, obstruction of whistleblower protections"
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Case Studies - Deep-Dive Evidence Analysis"
        description="Detailed examination of major corruption cases documented in the Barran Dodger archive. OAIC cover-ups, medical malpractice, digital identity destruction, and ombudsman failures."
        keywords="case studies, OAIC corruption, Mercy Hospital, Micron21, Commonwealth Ombudsman, whistleblower persecution, evidence analysis"
        path="/case-studies"
      />
      <Navigation />
      
      <main className="flex-grow pt-44 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5 text-sm font-bold">
              DEEP DIVE ANALYSIS
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Detailed examination of the most significant corruption cases documented in the evidence archive.
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden" id={study.id}>
                  <CardHeader className="bg-primary/5 border-b border-border">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${study.severity === "critical" ? "bg-red-500/10 text-red-500" : "bg-orange-500/10 text-orange-500"}`}>
                          <study.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-serif text-primary">{study.title}</CardTitle>
                          <CardDescription className="text-base mt-1">{study.subtitle}</CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant={study.severity === "critical" ? "destructive" : "secondary"}>
                          {study.severity.toUpperCase()}
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <FileText className="h-3 w-3" /> {study.documents} docs
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <p className="text-foreground leading-relaxed mb-6">{study.summary}</p>
                    
                    <div className="grid gap-6 md:grid-cols-2 mb-6">
                      <div>
                        <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                          <Calendar className="h-4 w-4" /> Timeline
                        </h4>
                        <div className="space-y-2">
                          {study.timeline.map((item, idx) => (
                            <div key={idx} className="flex gap-3 text-sm">
                              <span className="text-muted-foreground font-mono whitespace-nowrap">{item.date}</span>
                              <span className="text-foreground">{item.event}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                          <Shield className="h-4 w-4" /> Key Evidence
                        </h4>
                        <ul className="space-y-2">
                          {study.keyEvidence.map((evidence, idx) => (
                            <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                              <FileText className="h-3 w-3 mt-1 text-muted-foreground flex-shrink-0" />
                              {evidence}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                      <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                        <Scale className="h-4 w-4" /> Legal Implications
                      </h4>
                      <p className="text-sm text-foreground">{study.legalImplications}</p>
                    </div>
                    
                    <div className="mt-6 flex justify-end">
                      <Link href="/evidence">
                        <Button variant="outline" className="gap-2">
                          <ExternalLink className="h-4 w-4" /> View Related Evidence
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <SocialShare 
              title="Case Studies - Barran Dodger Evidence Archive"
              description="Detailed analysis of OAIC cover-ups, medical malpractice, and whistleblower persecution in Australia."
              url="https://www.barrandodger.com.au/case-studies"
            />
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
