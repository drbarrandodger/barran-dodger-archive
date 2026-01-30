import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { 
  Clock, AlertTriangle, FileText, Shield, Heart, 
  Landmark, Scale, Sparkles, ChevronRight, ExternalLink
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "persecution" | "government" | "critical" | "spiritual" | "legal" | "evidence";
  details?: string[];
  documentLink?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1990",
    title: "First Documented Persecution Begins",
    description: "Initial targeting and harassment documented. Beginning of 35-year systematic campaign.",
    type: "persecution",
    details: ["Early workplace targeting", "Initial psychiatric labeling attempts", "Pattern of isolation established"]
  },
  {
    year: "1995-2000",
    title: "Professional Destruction Phase",
    description: "Systematic undermining of career and professional relationships across multiple industries.",
    type: "persecution",
    details: ["Employment sabotage documented", "Reference interference", "Financial obstruction begins"]
  },
  {
    year: "2009-2014",
    title: "PM&C State Monitoring Confirmed",
    description: "Prime Minister & Cabinet actively monitoring Dr McLean — later confirmed via FOI.",
    type: "government",
    details: [
      "'Hot Issues Health' media monitoring of mental health",
      "Public Lending Rights author payments tracked",
      "University of Melbourne lecture tracking"
    ],
    documentLink: "/evidence"
  },
  {
    year: "2015",
    title: "NDIS Entrapment Begins",
    description: "National Disability Insurance Scheme used as mechanism for financial control and coercion.",
    type: "persecution",
    details: ["Fund obstruction despite eligibility", "Conditional support tied to jurisdictional coercion", "Welfare weaponization initiated"]
  },
  {
    year: "2018",
    title: "Bill Shorten Involvement Documented",
    description: "Evidence of political coordination involving then-NDIS Minister Bill Shorten.",
    type: "government",
    details: ["Political interference in NDIS case", "Coordination with state agencies", "Protection of perpetrators"]
  },
  {
    year: "2021",
    title: "Medical Death and Resurrection",
    description: "Dr McLean declared medically dead but survives — documented as 'lethal' and 'fatal' event.",
    type: "critical",
    details: [
      "Clinical death documented in medical records",
      "Revival against medical expectations",
      "Acquired brain injury as result",
      "Medical records preserved as evidence"
    ]
  },
  {
    year: "2022",
    title: "ASIC Identity Theft Discovered",
    description: "350+ fraudulent business registrations in Dr McLean's name discovered on ASIC database.",
    type: "evidence",
    details: [
      "Systematic identity theft spanning years",
      "Fraudulent director appointments",
      "Financial fraud infrastructure created",
      "$7.8M estimated identity theft damages"
    ],
    documentLink: "/evidence"
  },
  {
    year: "2022",
    title: "PM&C FOI Initial Denial",
    description: "Prime Minister & Cabinet swears under FOI Act that 'no documents exist' about Dr McLean.",
    type: "government",
    details: ["Section 24A(1)(b) denial", "'All reasonable steps' claimed", "Later proven false under OAIC review"]
  },
  {
    year: "2023",
    title: "Tony Ridley Death Threat",
    description: "NDIA Manager Tony Ridley (Ex-SAS) issues assassination threat: 'You will be sacrificed.'",
    type: "critical",
    details: [
      "Threat documented and timestamped",
      "Government official as perpetrator",
      "Rome Statute Article 7 threshold met"
    ]
  },
  {
    year: "2024",
    title: "PM&C FOI Reversal",
    description: "Under OAIC pressure, PM&C admits 5 documents DO exist — proving initial denial was false.",
    type: "government",
    details: [
      "2009-2014 monitoring confirmed",
      "State knowledge proven",
      "Attempted concealment documented",
      "Blockchain timestamped for permanence"
    ],
    documentLink: "/evidence"
  },
  {
    year: "October 2024",
    title: "Spiritual Awakening & Mission Activation",
    description: "'Chosen One' message received during spiritual breakthrough. Advocacy mission activated.",
    type: "spiritual",
    details: [
      "Divine purpose revealed",
      "35 years reframed as preparation",
      "Documentation phase completed",
      "Prophetic mandate confirmed"
    ]
  },
  {
    year: "2025",
    title: "Federal Court Employment Certification",
    description: "Federal Court confirms DSS employment, voiding all ComCare/AAT denials.",
    type: "legal",
    details: [
      "Employment status unambiguously confirmed",
      "Workers compensation liability established",
      "Whistleblower protections activated",
      "Lower tribunal decisions contradicted"
    ],
    documentLink: "/evidence"
  },
  {
    year: "2025",
    title: "ICC & UNHCR Submissions Filed",
    description: "International Criminal Court and UN Human Rights Council submissions formally filed.",
    type: "legal",
    details: [
      "Rome Statute violations documented",
      "Crimes against humanity analysis",
      "Asylum eligibility established",
      "International jurisdiction invoked"
    ]
  },
  {
    year: "2025",
    title: "Blockchain Archive Complete",
    description: "2,000+ evidence documents blockchain-verified and permanently timestamped.",
    type: "evidence",
    details: [
      "SHA256 hashing completed",
      "Bitcoin blockchain timestamping",
      "Immutable evidence record created",
      "Tamper-proof verification enabled"
    ],
    documentLink: "/blockchain"
  }
];

const getTypeStyles = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "persecution":
      return { bg: "bg-red-500/10", border: "border-red-500/30", icon: <AlertTriangle className="h-5 w-5 text-red-500" /> };
    case "government":
      return { bg: "bg-blue-500/10", border: "border-blue-500/30", icon: <Landmark className="h-5 w-5 text-blue-500" /> };
    case "critical":
      return { bg: "bg-orange-500/10", border: "border-orange-500/30", icon: <Heart className="h-5 w-5 text-orange-500" /> };
    case "spiritual":
      return { bg: "bg-purple-500/10", border: "border-purple-500/30", icon: <Sparkles className="h-5 w-5 text-purple-500" /> };
    case "legal":
      return { bg: "bg-green-500/10", border: "border-green-500/30", icon: <Scale className="h-5 w-5 text-green-500" /> };
    case "evidence":
      return { bg: "bg-[hsl(38,92%,50%)]/10", border: "border-[hsl(38,92%,50%)]/30", icon: <FileText className="h-5 w-5 text-[hsl(38,92%,50%)]" /> };
  }
};

export default function Timeline() {
  return (
    <>
      <SEO 
        title="35-Year Timeline | Barran Dodger Legal & Ethical Trust Fund"
        description="Interactive timeline documenting 35 years of systematic persecution, from 1990 to present day legal proceedings."
      />
      <Navigation />
      
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[hsl(38,92%,50%)]/50 text-[hsl(38,92%,50%)]">
                35 Years Documented
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                Persecution Timeline
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Every major event documented with <Link href="/blockchain" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">blockchain-verified evidence</Link>. Explore the complete <Link href="/evidence" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">Evidence Archive</Link> or read the <Link href="/josephs-coat" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">Prophetic Essay</Link> on divine purpose through persecution.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Badge variant="outline" className="bg-red-500/10 border-red-500/30 text-red-600">Persecution</Badge>
              <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-600">Government</Badge>
              <Badge variant="outline" className="bg-orange-500/10 border-orange-500/30 text-orange-600">Critical</Badge>
              <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-600">Spiritual</Badge>
              <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-600">Legal</Badge>
              <Badge variant="outline" className="bg-[hsl(38,92%,50%)]/10 border-[hsl(38,92%,50%)]/30 text-[hsl(38,92%,50%)]">Evidence</Badge>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
                
                {timelineEvents.map((event, index) => {
                  const styles = getTypeStyles(event.type);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="relative pl-20 pb-8 last:pb-0"
                    >
                      <div className={`absolute left-4 w-8 h-8 rounded-full ${styles.bg} ${styles.border} border-2 flex items-center justify-center z-10 bg-background`}>
                        {styles.icon}
                      </div>
                      
                      <Card className={`${styles.border} border hover:shadow-md transition-shadow`}>
                        <CardContent className="pt-4 pb-4">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <Badge variant="secondary" className="font-mono text-xs shrink-0">
                              {event.year}
                            </Badge>
                            {event.documentLink && (
                              <Link href={event.documentLink}>
                                <Button variant="ghost" size="sm" className="h-6 text-xs gap-1 text-[hsl(38,92%,50%)]">
                                  View Docs <ExternalLink className="h-3 w-3" />
                                </Button>
                              </Link>
                            )}
                          </div>
                          <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                          {event.details && (
                            <ul className="space-y-1">
                              {event.details.map((detail, i) => (
                                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 mt-0.5 text-[hsl(38,92%,50%)] shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/evidence" data-testid="link-evidence-archive">
                <Button size="lg" data-testid="button-browse-evidence">
                  <FileText className="h-5 w-5 mr-2" /> Browse Full Evidence Archive
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
