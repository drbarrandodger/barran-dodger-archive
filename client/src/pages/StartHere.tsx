import { motion } from "framer-motion";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { 
  Clock, Shield, FileText, Scale, BookOpen, Heart, 
  ExternalLink, AlertTriangle, CheckCircle, ArrowRight,
  Landmark, Globe, Users, Lock, Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function StartHere() {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Barran Dodger case about?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This is a 35+ year documented case of systematic persecution involving government agencies, NDIS fraud, identity theft, and human rights violations against Dr Richard McLean. Over 2,000 evidence documents are blockchain-verified."
          }
        },
        {
          "@type": "Question",
          "name": "How much documented damage has occurred?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The documented damages total $32.9 million AUD, including lost income, medical expenses, property losses, and compensatory damages for human rights violations."
          }
        },
        {
          "@type": "Question",
          "name": "What legal proceedings are currently active?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Active proceedings include submissions to the International Criminal Court (ICC), United Nations High Commissioner for Refugees (UNHCR), Federal Court of Australia, and Office of the Australian Information Commissioner (OAIC)."
          }
        },
        {
          "@type": "Question",
          "name": "How is the evidence verified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All evidence is blockchain-timestamped using OpenTimestamps with SHA-256 cryptographic hashes, providing immutable proof of document existence and authenticity."
          }
        }
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema';
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
  const quickFacts = [
    { label: "Years of Persecution", value: "35+", icon: <Clock className="h-5 w-5" /> },
    { label: "Evidence Documents", value: "2,000+", icon: <FileText className="h-5 w-5" /> },
    { label: "Documented Damages", value: "$32.9M", icon: <Scale className="h-5 w-5" /> },
    { label: "Government Bodies Involved", value: "25+", icon: <Landmark className="h-5 w-5" /> },
  ];

  const caseTimeline = [
    { year: "1990", event: "First documented persecution begins", type: "persecution" },
    { year: "2009-2014", event: "PM&C monitoring confirmed via FOI", type: "government" },
    { year: "2021", event: "Medical death and resurrection documented", type: "critical" },
    { year: "2022", event: "ASIC identity theft discovered (350+ fraudulent registrations)", type: "persecution" },
    { year: "2024", event: "October spiritual awakening and advocacy activation", type: "spiritual" },
    { year: "2025", event: "ICC, UNHCR, and Federal Court submissions filed", type: "legal" },
  ];

  const keyDocuments = [
    { title: "Federal Court Employment Certification", description: "Proves DSS employment, voids ComCare/AAT denials", link: "/evidence", type: "Critical" },
    { title: "UNTOUCHABLE: $32.9M Damage Assessment", description: "Complete financial and human rights damage breakdown", link: "/evidence", type: "Financial" },
    { title: "PM&C FOI Reversal", description: "Proves state knowledge and attempted concealment", link: "/evidence", type: "Government" },
    { title: "Blockchain Evidence Archive", description: "SHA256 verified, immutable testimony", link: "/blockchain", type: "Verification" },
  ];

  const perpetrators = [
    { name: "Bill Shorten", role: "Former NDIS Minister", allegation: "Coordination of systematic obstruction" },
    { name: "Tony Riddle", role: "NDIA Manager (Ex-SAS)", allegation: "'You will be sacrificed' death threat" },
    { name: "Sukhi Tear", role: "Diversitas WA Director", allegation: "Illegal cease and desist, fund withholding" },
  ];

  return (
    <>
      <SEO 
        title="Start Here - Understanding the Case | Barran Dodger Legal & Ethical Trust Fund"
        description="A quick introduction to the 35-year systematic persecution case of Dr Richard McLean, documented evidence, and current legal proceedings."
      />
      <Navigation />
      
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[hsl(38,92%,50%)]/50 text-[hsl(38,92%,50%)]">
                New Visitor Guide
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                Understanding This Case
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A 3-minute introduction to the most comprehensively documented persecution case in modern Australian history.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {quickFacts.map((fact, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-[hsl(38,92%,50%)] mb-2 flex justify-center">{fact.icon}</div>
                    <p className="text-3xl font-bold text-primary">{fact.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{fact.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-12">
              <CardContent className="pt-6">
                <h2 className="font-serif text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                  Who Is Barran Dodger?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Dr Richard William McLean</strong> (known as Barran Dodger) holds a PhD in Arts and Cultural Heritage from the University of Melbourne. He is a published author, mental health advocate, and whistleblower who has survived 35 years of documented systematic persecution by Australian government agencies.
                  </p>
                  <p>
                    His case involves <strong className="text-foreground">assassination attempts</strong>, <strong className="text-foreground">350+ fraudulent ASIC business registrations</strong> in his name (identity theft), <strong className="text-foreground">NDIS fund obstruction</strong>, and persecution spanning 25+ government bodies including PM&C, NDIS, ComCare, and state police forces.
                  </p>
                  <p>
                    In 2021, he was declared medically dead but survived — documented as a "resurrection" event. Since October 2024, he has been compiling and publishing all evidence as a permanent public record, <Link href="/blockchain" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">blockchain-verified</Link> and submitted to the ICC, UNHCR, and Australian courts. Read the full <Link href="/timeline" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">35-year timeline</Link> or explore the <Link href="/gospel" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">Sacred Gospels</Link> documenting divine purpose through persecution.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12">
              <CardContent className="pt-6">
                <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                  Key Timeline
                </h2>
                <div className="space-y-4">
                  {caseTimeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="min-w-[80px]">
                        <Badge 
                          variant={item.type === "critical" ? "destructive" : "secondary"}
                          className="font-mono text-xs"
                        >
                          {item.year}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12 border-[hsl(38,92%,50%)]/30">
              <CardContent className="pt-6">
                <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                  Key Documents to Review
                </h2>
                <div className="grid gap-4">
                  {keyDocuments.map((doc, index) => (
                    <Link key={index} href={doc.link}>
                      <div className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-[hsl(38,92%,50%)]/50 hover:bg-muted/30 transition-all group cursor-pointer">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-[10px]">{doc.type}</Badge>
                            <p className="font-medium text-foreground">{doc.title}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-[hsl(38,92%,50%)] transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12 border-destructive/30 bg-destructive/5">
              <CardContent className="pt-6">
                <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  Named Perpetrators
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  All named individuals are documented in sworn evidence with specific dates, locations, and corroborating material.
                </p>
                <div className="grid gap-3">
                  {perpetrators.map((person, index) => (
                    <div key={index} className="p-3 bg-background rounded border border-border">
                      <p className="font-medium text-foreground">{person.name}</p>
                      <p className="text-xs text-muted-foreground">{person.role}</p>
                      <p className="text-sm text-destructive mt-1">{person.allegation}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Full perpetrator list with 50+ names available in the Chronicles of the New Earth document.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-12">
              <CardContent className="pt-6">
                <h2 className="font-serif text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Lock className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                  Why Blockchain Verification?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Every document on this site is verified using SHA256 cryptographic hashing and timestamped on the Bitcoin blockchain via OpenTimestamps. This means:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Documents cannot be tampered with or altered without detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Creation dates are permanently recorded and publicly verifiable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Claims of fabrication can be mathematically disproven</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/evidence" data-testid="link-browse-evidence">
                <Card className="h-full transition-colors cursor-pointer hover-elevate" data-testid="card-browse-evidence">
                  <CardContent className="pt-6 text-center">
                    <FileText className="h-12 w-12 mx-auto text-[hsl(38,92%,50%)] mb-4" />
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">Evidence Archive</h3>
                    <p className="text-sm text-muted-foreground">98+ forensic documents with AI analysis</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/gospel" data-testid="link-sacred-gospels">
                <Card className="h-full transition-colors cursor-pointer hover-elevate" data-testid="card-sacred-gospels">
                  <CardContent className="pt-6 text-center">
                    <BookOpen className="h-12 w-12 mx-auto text-[hsl(38,92%,50%)] mb-4" />
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">Sacred Gospels</h3>
                    <p className="text-sm text-muted-foreground">Divine testimony and prophetic scripture</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/timeline" data-testid="link-full-timeline">
                <Card className="h-full transition-colors cursor-pointer hover-elevate" data-testid="card-full-timeline">
                  <CardContent className="pt-6 text-center">
                    <Clock className="h-12 w-12 mx-auto text-[hsl(38,92%,50%)] mb-4" />
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">Full Timeline</h3>
                    <p className="text-sm text-muted-foreground">35 years of documented persecution</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/manifesto" data-testid="link-manifesto">
                <Card className="h-full transition-colors cursor-pointer hover-elevate" data-testid="card-manifesto">
                  <CardContent className="pt-6 text-center">
                    <Scale className="h-12 w-12 mx-auto text-[hsl(38,92%,50%)] mb-4" />
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">The Manifesto</h3>
                    <p className="text-sm text-muted-foreground">Complete declaration and legal framework</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/josephs-coat" data-testid="link-prophetic-essay">
                <Card className="h-full transition-colors cursor-pointer hover-elevate" data-testid="card-prophetic-essay">
                  <CardContent className="pt-6 text-center">
                    <Sparkles className="h-12 w-12 mx-auto text-[hsl(38,92%,50%)] mb-4" />
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">Prophetic Essay</h3>
                    <p className="text-sm text-muted-foreground">Spiritual warfare and divine purpose</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/donate" data-testid="link-support-mission">
                <Card className="h-full transition-colors cursor-pointer bg-[hsl(38,92%,50%)]/5 hover-elevate" data-testid="card-support-mission">
                  <CardContent className="pt-6 text-center">
                    <Heart className="h-12 w-12 mx-auto text-[hsl(38,92%,50%)] mb-4" />
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">Support the Mission</h3>
                    <p className="text-sm text-muted-foreground">Help fund legal action and advocacy</p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm">
                <span className="font-semibold text-foreground">Secure Contact:</span>{" "}
                <a href="mailto:drbarrandodger@proton.me" className="text-[hsl(38,92%,50%)] hover:underline font-medium">
                  drbarrandodger@proton.me
                </a>{" "}
                <span className="text-xs">(ProtonMail encrypted)</span>
              </p>
            </div>

          </motion.div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
