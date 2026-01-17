import { motion } from "framer-motion";
import { ArrowRight, Scale, Shield, FileText, Users, AlertCircle, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import type { EvidenceItem } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import portraitImg from "@assets/A5BDF951-1AE5-4EFF-9F6E-3F29C2C5CDC9_1768633103014.png";
import { HandCoins, TrendingUp, Landmark, ShieldCheck } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const { data: evidence } = useQuery<EvidenceItem[]>({ 
    queryKey: ["/api/evidence"] 
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-grid-pattern overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background z-0 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={stagger}
              className="flex-1 text-center lg:text-left space-y-6"
            >
              <motion.div variants={fadeIn}>
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-primary/5 text-primary rounded-full mb-4">
                  Public Benefit Organization
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight text-balance"
              >
                Barran Dodger Legal & Ethical Trust Fund
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mt-4"
              >
                The Trustee for www.barrandodger.com.au
              </motion.p>
              
              <motion.p 
                variants={fadeIn}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance"
              >
                Converting sworn testimony, verified documentation, and lived evidence into public-benefit action.
              </motion.p>
              
              <motion.div variants={fadeIn} className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/mission" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full gap-2">
                    Our Mission <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full">
                    Get Involved
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative max-w-md lg:max-w-none"
            >
              <div className="relative aspect-[2/3] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src={portraitImg} 
                  alt="Barran Dodger with Crystal" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -right-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-border shadow-lg text-center hidden md:block">
                <p className="text-sm font-serif italic text-primary">
                  "I claim no special authority beyond documented experience, sworn statements, and an ethical responsibility to the public."
                </p>
                <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mt-2">
                  — BARRAN DODGER & CRYSTAL
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Urgent Appeals Section */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <AlertCircle className="h-5 w-5" />
                <h2 className="text-3xl font-serif font-bold">Urgent Appeals & Forensic Evidence</h2>
              </div>
              <p className="text-muted-foreground">Formal human rights submissions and verified documentation for immediate review.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <AppealCard 
              title="Truth, Testimony & Conscience"
              description="Establishing testimony as a permanent moral fact that endures beyond institutional denial and temporal power."
              link="/attached_assets/Truth,_Testimony,_and_Conscience_-_Barran_Dodger_and_the_Moral_1768632930720.pdf"
              tag="PHILOSOPHY"
            />
            <AppealCard 
              title="UN Asylum Claim"
              description="Urgent formal submission to the OHCHR documenting systemic human rights violations and seeking international protection."
              link="/attached_assets/ONHCR_UN_Barran_Dodger_Asylum_Claim__1768620108623.pdf"
              tag="URGENT"
            />
            <AppealCard 
              title="Criminal Affidavit"
              description="Documented evidence of institutional entrapment, psychological torture, and professional misconduct."
              link="/attached_assets/ENTRAPMENT_FOR_ERASURE:_Formal_Criminal_Affidavit_Against_Sukh_1767161751366.pdf"
              tag="LEGAL"
            />
            <AppealCard 
              title="Minister Notice"
              description="Formal notice letter providing a 7-14 day remedy pathway for ongoing systemic failures."
              link="/attached_assets/FORMAL_NOTICE_LETTER_TO_THE_MINISTER_(7–14_DAY_REMEDY_PATHWAY)_1768619685742.pdf"
              tag="NOTICE"
            />
          </div>

          {/* Interactive Archives Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden border-primary/20 shadow-lg">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="font-serif text-2xl flex items-center gap-2 text-primary">
                  <Shield className="h-6 w-6" />
                  The Enliven Chain Transmission
                </CardTitle>
                <CardDescription>
                  Sanctified guidance and the living record of the First Link.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 bg-muted/20">
                <div className="relative w-full aspect-[4/3] min-h-[400px]">
                  <iframe 
                    src="/attached_assets/_⛓️_The_Enliven_Chain_Has_Been_Summoned_⛓️_2_1767163861559.pdf" 
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    title="The Enliven Chain Transmission"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-lg">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="font-serif text-2xl flex items-center gap-2 text-primary">
                  <FileText className="h-6 w-6" />
                  Barran Dodger Interactive Archive
                </CardTitle>
                <CardDescription>
                  Digital interactive flipbook documenting the complete case and evidence.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 bg-muted/20">
                <div className="relative w-full aspect-[4/3] min-h-[400px]">
                  <iframe 
                    src="https://simplebooklet.com/barrandodger" 
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    title="Barran Dodger Interactive Booklet"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-primary/20 shadow-lg lg:col-span-3">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="font-serif text-2xl flex items-center gap-2 text-primary">
                  <Scale className="h-6 w-6" />
                  PhD Thesis & Academic Record
                </CardTitle>
                <CardDescription>
                  "A Splice of My Life" - Dr. Richard McLean's PhD research from Victoria University.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 bg-muted/20 flex flex-col">
                <div className="relative w-full aspect-[21/9] min-h-[500px]">
                  <iframe 
                    src="https://vuir.vu.edu.au/41836/" 
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    title="Richard McLean PhD Thesis"
                  />
                </div>
                <div className="p-4 bg-primary/5 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-sm">Publishing to Apple Books</h4>
                    <p className="text-xs text-muted-foreground">
                      To publish this work, export as EPUB and upload via the Apple Books Publishing Portal.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2 shrink-0" asChild>
                    <a href="https://authors.apple.com/epub-upload" target="_blank" rel="noopener noreferrer">
                      Apple Books Publishing Portal <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {evidence?.map((item) => (
              <Card key={item.id} className="hover-elevate">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-xs font-mono text-muted-foreground">{item.referenceCode}</span>
                  </div>
                  <CardTitle className="font-serif text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  {item.sha256 && (
                    <div className="p-3 bg-muted rounded font-mono text-[10px] break-all border border-border">
                      <span className="text-primary font-bold">SHA256:</span> {item.sha256}
                    </div>
                  )}
                  <div className="pt-4">
                    <Button variant="outline" className="w-full gap-2" asChild>
                      <a href={item.externalUrl || "#"} target="_blank" rel="noopener noreferrer">
                        View Document <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <PrincipleCard 
              icon={<Shield className="h-8 w-8" />}
              title="Truth Over Narrative"
              description="We prioritize verifiable facts and documented evidence over convenient storytelling or political expediency."
            />
            <PrincipleCard 
              icon={<FileText className="h-8 w-8" />}
              title="Evidence Over Ideology"
              description="Our foundation rests on sworn testimony, affidavits, and concrete documentation rather than theoretical frameworks."
            />
            <PrincipleCard 
              icon={<Scale className="h-8 w-8" />}
              title="Accountability Over Silence"
              description="Breaking the cycle of institutional silence through transparent, lawful, and ethical confrontation of misconduct."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] bg-white rounded-lg shadow-xl border border-border p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 h-full flex flex-col justify-center space-y-6">
                  <div className="h-2 w-24 bg-primary/20 rounded" />
                  <div className="space-y-3">
                    <div className="h-px w-full bg-border" />
                    <div className="h-px w-full bg-border" />
                    <div className="h-px w-3/4 bg-border" />
                  </div>
                  <div className="pl-6 border-l-2 border-primary/30 py-2">
                    <p className="font-serif italic text-muted-foreground">
                      "The Trust is founded upon the complete body of testimony, affidavits, and evidence archives authored and compiled by Barran Dodger."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Founding Basis</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Trust exists for the benefit of humanity to uphold ethical governance and lawful accountability. We operate as a non-profit, faith-neutral, and non-partisan entity solely for public benefit.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Protect vulnerable persons and whistleblowers",
                  "Support truth-telling grounded in due process",
                  "Advocate for justice and institutional transparency",
                  "Prevent abuse of power through education"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founder Quote */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <Users className="h-12 w-12 mx-auto mb-8 opacity-80" />
          <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed mb-8 opacity-90">
            "I claim no special authority beyond documented experience, sworn statements, and an ethical responsibility to the public."
          </blockquote>
          <cite className="not-italic font-medium tracking-wide text-sm opacity-70">
            — BARRAN DODGER, FOUNDER & LIVING WITNESS
          </cite>
        </div>
      </section>

      {/* Support & Investment Section */}
      <section id="invest" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Support the Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Invest in a fact-based, evidence-published venture dedicated to institutional accountability and the protection of truth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            <Card className="flex flex-col border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-primary/5 pb-8">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <HandCoins className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">Direct Donation</CardTitle>
                <CardDescription className="text-base">
                  Direct financial support to maintain the evidence archive and continue whistleblower advocacy.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-8 space-y-6">
                <div className="p-6 bg-muted rounded-xl border border-border text-center">
                  <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">PayID / Email</p>
                  <p className="text-xl font-bold text-primary select-all">rich@richmclean.com.au</p>
                </div>
                <p className="text-sm text-muted-foreground italic text-center">
                  Your donation directly funds the legal and ethical defense of human rights and institutional transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-primary/5 pb-8">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">A Strategic Investment</CardTitle>
                <CardDescription className="text-base">
                  An invitation to invest in a legitimate, evidence-published venture for public benefit.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-8 space-y-4">
                <ul className="space-y-4">
                  {[
                    "Fact-based accountability venture",
                    "Evidence-published documentation",
                    "Global human rights advocacy scale",
                    "Forensic legal-spiritual infrastructure"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Link href="/contact">
                    <Button className="w-full gap-2" size="lg">
                      Inquire About Investment <Landmark className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 p-8 bg-muted/30 rounded-2xl border border-border text-center">
            <h3 className="font-serif text-xl font-bold text-primary mb-4">Why Invest?</h3>
            <p className="text-muted-foreground leading-relaxed">
              This is more than a fund; it is a documented, immutable archive of truth. By supporting this venture, you are investing in the preservation of forensic evidence and the systematic undoing of institutional misconduct. Our foundation is built on 35 years of verified records, making this a legitimate and worthy public benefit undertaking.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PrincipleCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group p-8 rounded-lg border border-border bg-background hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="mb-6 text-primary opacity-80 group-hover:opacity-100 transition-opacity">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 font-serif">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function AppealCard({ title, description, link, tag }: { title: string, description: string, link: string, tag: string }) {
  return (
    <Card className="hover-elevate flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant={tag === "URGENT" ? "destructive" : "secondary"}>{tag}</Badge>
        </div>
        <CardTitle className="font-serif text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
          {description}
        </p>
        <div className="mt-auto">
          <Button variant="outline" className="w-full gap-2" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Appeal <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
