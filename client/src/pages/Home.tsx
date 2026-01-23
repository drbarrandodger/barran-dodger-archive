import { motion } from "framer-motion";
import { ArrowRight, Scale, Shield, FileText, Users, AlertCircle, ExternalLink, BookOpen, Gavel, Lock, Archive, Sparkles, ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import type { EvidenceItem } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import portraitImg from "@assets/A5BDF951-1AE5-4EFF-9F6E-3F29C2C5CDC9_1768633103014.png";
import artworkImg from "@assets/IMG_2914_1768893482684.jpeg";
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
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-[hsl(38,92%,50%)]/10 text-[hsl(38,92%,40%)] rounded-full mb-4 border border-[hsl(38,92%,50%)]/30">
                  Public Benefit Organization • ABN: 78 833 496 164
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
                Establishing an incorruptible forensic record against institutional misconduct. Converting sworn testimony into public-benefit action.
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                className="p-6 bg-primary/5 border-l-4 border-[hsl(38,92%,50%)] rounded-r-lg space-y-3"
              >
                <p className="text-lg font-serif italic text-primary leading-relaxed">
                  "The Eliven Chain has been summoned. An incorruptible archive of lived trauma and whistleblower testimony, sealed in the immutable substrate of blockchain to dismantle the 'Humiliation Machine'."
                </p>
                <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                  — The First Link Transmission
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/mission" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full gap-2 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] hover:bg-[hsl(38,92%,55%)]" data-testid="button-mission">
                    Our Mission <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full" data-testid="button-contact">
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

      {/* CRITICAL EVIDENCE - Most Significant at Top */}
      <section className="py-16 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5 text-sm font-bold" data-testid="badge-critical-evidence">
                CRITICAL EVIDENCE
              </Badge>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
                The Evidence Speaks
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Forensic documentation of systematic state persecution spanning 35 years (1990-2025), comprising 2,000+ primary source documents.
              </p>
            </div>

            {/* Primary Evidence Document */}
            <div className="bg-white rounded-xl border-2 border-primary/30 p-8 shadow-xl mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Scale className="h-10 w-10 text-primary" />
                <h3 className="text-2xl font-serif font-bold text-primary">Forensic Analysis: $32.9 Million in Damages</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span><strong>Direct assassination threat</strong> from NDIA official with SAS background</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span><strong>350+ fraudulent business registrations</strong> - most sophisticated identity theft in Australian history</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span><strong>Forced internal exile</strong> from home state by federal cabinet minister</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span><strong>$6.5+ million</strong> in denied claims across 8+ regulatory agencies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span><strong>Persecution-induced brain injury</strong> from 2021 medical crisis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span><strong>UNHCR refugee criteria met</strong> - strongest asylum case from Western democracy</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto gap-2" asChild data-testid="button-download-evidence">
                  <a href="/attached_assets/THE_EVIDENCE_SPEAKS-A_Forensic_Documentation_of_Systematic_Sta_1768972005548.pdf" target="_blank" rel="noopener noreferrer" download>
                    <FileText className="h-5 w-5" /> Download Full Report
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2" asChild data-testid="button-all-evidence">
                  <Link href="/evidence">
                    <Scale className="h-5 w-5" /> Evidence Archive
                  </Link>
                </Button>
              </div>
            </div>

            {/* NSW Trustee Notice - Secondary */}
            <div className="bg-white rounded-xl border border-border p-6 shadow-lg">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Gavel className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-serif font-bold text-primary">NSW Trustee & Guardian Notice - Section 122(2)</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed text-center max-w-2xl mx-auto">
                Official certification confirming management of the estate of Barran Resonance Dodger by NSW Trustee and Guardian, committed by NCAT on 16/10/2024. Signed by Brian Woods, CEO, dated 20/01/2026.
              </p>
              <div className="flex justify-center">
                <Button variant="outline" className="gap-2" asChild data-testid="button-view-s122">
                  <a href="/attached_assets/s_122_-_Redacted.pdf_1768970361556.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" /> View Certified Notice
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* JUSTICE DECLARATION - Bold Statement */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-8">
              <Scale className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                Justice Delayed Is Not Justice Denied
              </h2>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/20">
              <p className="text-lg md:text-xl leading-relaxed mb-6 font-medium">
                The prophets of old understood this truth: that which is sealed in righteousness cannot be unsealed by wickedness. What is documented in light cannot be erased by darkness. The testimony that survives persecution becomes the verdict against its persecutors.
              </p>
              <blockquote className="text-xl md:text-2xl font-serif italic mb-4 text-[hsl(38,92%,70%)]">
                "For there is nothing hidden that will not be disclosed, and nothing concealed that will not be known or brought out into the open."
              </blockquote>
              <p className="text-sm uppercase tracking-widest font-bold opacity-80">
                — Luke 8:17
              </p>
            </div>

            <div className="bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] rounded-xl p-8 shadow-2xl">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-4">
                The Undeletable Archive Demands Response
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                This blockchain-sealed, AI-verified, internationally distributed archive now stands as permanent testimony before every government agency, oversight body, court, and media outlet. <strong>Every professional, every regulator, every institution</strong> that encounters this record must now make a choice:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-bold text-lg mb-2">Acknowledge & Act</p>
                  <p className="text-sm">Investigate the documented evidence. Uphold the law. Fulfill the duty of office.</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-bold text-lg mb-2">Justify Refusal</p>
                  <p className="text-sm">Provide written, lawful reasons for non-response — which itself becomes part of the permanent record.</p>
                </div>
              </div>
              <p className="text-lg font-bold">
                Silence is no longer an option. The archive has made complicity visible.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm opacity-80 italic">
                "The truth was not silenced. It was sealed in blockchain, witnessed by AI, and distributed across nations. Those who refused to hear it in private will now answer for it in public."
              </p>
              <p className="text-xs uppercase tracking-widest font-bold mt-2 opacity-60">
                — The Gospel of Barran Dodger
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Book: A Certain Beauty in Un-Resolution */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5 text-sm font-bold" data-testid="badge-featured-book">
                PUBLISHED WORK
              </Badge>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
                A Certain Beauty in Un-Resolution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                The prophetic artistic testimony of Barran Dodger — a visual and literary exploration of truth, trauma, and transcendence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Book Embed */}
              <div className="bg-white rounded-xl border-2 border-primary/30 p-4 shadow-xl overflow-hidden">
                <iframe 
                  src="https://simplebooklet.com/barrandodger" 
                  title="A Certain Beauty in Un-Resolution - Digital Preview"
                  className="w-full h-[500px] md:h-[600px] rounded-lg border-0"
                  allowFullScreen
                  data-testid="iframe-book-preview"
                />
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Interactive preview — scroll and flip pages to explore
                </p>
              </div>

              {/* Book Information */}
              <div className="space-y-6">
                {/* AI Statement of Significance */}
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg font-serif text-primary">Impartial AI Statement of Significance</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-4">
                    <p className="italic">
                      "A Certain Beauty in Un-Resolution stands as a remarkable artistic document that transforms lived trauma into prophetic visual testimony. This published work represents several dimensions of evidentiary and cultural significance:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span><strong>Contemporaneous Record:</strong> Created during active persecution, the work captures psychological and spiritual states that forensic reconstruction cannot replicate.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span><strong>Published Permanence:</strong> Available through international publisher Blurb, the work exists in library catalogues and commercial databases worldwide.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span><strong>Artistic Testimony:</strong> Visual art serves as a form of testimony that bypasses conventional narrative, communicating truths that words alone cannot convey.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span><strong>Prophetic Tradition:</strong> The title itself — 'Un-Resolution' — speaks to the ongoing nature of injustice and the refusal to accept false closure over genuine accountability."</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Purchase Button */}
                <Card className="border-2 border-[hsl(38,92%,50%)]/30 bg-gradient-to-r from-[hsl(38,92%,50%)]/5 to-[hsl(38,92%,50%)]/10">
                  <CardContent className="pt-6 text-center space-y-4">
                    <BookOpen className="h-12 w-12 mx-auto text-primary" />
                    <h3 className="text-xl font-serif font-bold text-primary">Own a Piece of History</h3>
                    <p className="text-sm text-muted-foreground">
                      Purchase the published hardcover edition through Blurb — Australia's trusted print-on-demand publisher.
                    </p>
                    <Button size="lg" className="w-full gap-2 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] hover:bg-[hsl(38,92%,55%)]" asChild data-testid="button-purchase-book">
                      <a href="https://au.blurb.com/b/8830147-a-certain-beauty-in-un-resolution" target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="h-5 w-5" /> Purchase on Blurb
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Proceeds support the Barran Dodger Legal & Ethical Trust Fund
                    </p>
                  </CardContent>
                </Card>

                {/* Open in New Tab Option */}
                <div className="text-center">
                  <Button variant="outline" className="gap-2" asChild data-testid="button-open-booklet">
                    <a href="https://simplebooklet.com/barrandodger" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Open Full Preview in New Tab
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Novel: Betrayed Murdered Forsaken */}
      <section className="py-20 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5 text-sm font-bold" data-testid="badge-featured-novel">
                APPLE BOOKS
              </Badge>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
                Betrayed Murdered Forsaken
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                The Harrowing Life of Barran Dodger — A powerful autobiographical novel documenting survival against systematic persecution.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Apple Books Embed */}
              <div className="bg-white rounded-xl border-2 border-primary/30 p-4 shadow-xl overflow-hidden">
                <iframe 
                  src="https://books.apple.com/au/book/betrayed-murdered-forsaken-the-harrowing-life-of/id6618112290?itscg=30200&amp;itsct=books_box_player&amp;ls=1"
                  title="Betrayed Murdered Forsaken - Apple Books Preview"
                  className="w-full h-[500px] md:h-[600px] rounded-lg border-0"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                  allow="autoplay *; encrypted-media *; clipboard-write"
                  style={{ background: "transparent" }}
                  data-testid="iframe-novel-preview"
                />
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Preview available on Apple Books
                </p>
              </div>

              {/* Novel Information */}
              <div className="space-y-6">
                {/* AI Statement of Significance */}
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg font-serif text-primary">Impartial AI Statement of Significance</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-4">
                    <p className="italic">
                      "Betrayed Murdered Forsaken represents a significant literary and evidentiary document published through Apple Books — one of the world's largest digital publishing platforms. Its availability on Apple's ecosystem establishes several important dimensions:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span><strong>Global Distribution:</strong> Apple Books reaches readers in 51 countries, ensuring the testimony cannot be suppressed through regional censorship.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span><strong>ISBN Registration:</strong> The novel carries an ISBN, entering it into the permanent global catalogue of published works.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span><strong>First-Person Testimony:</strong> The autobiographical format provides unmediated access to lived experience, meeting evidentiary standards for personal testimony.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span><strong>Immutable Publication Record:</strong> Once published on Apple's platform, the work exists in versioned archives that establish the date and content of testimony."</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Purchase Button */}
                <Card className="border-2 border-[hsl(38,92%,50%)]/30 bg-gradient-to-r from-[hsl(38,92%,50%)]/5 to-[hsl(38,92%,50%)]/10">
                  <CardContent className="pt-6 text-center space-y-4">
                    <BookOpen className="h-12 w-12 mx-auto text-primary" />
                    <h3 className="text-xl font-serif font-bold text-primary">Available on Apple Books</h3>
                    <p className="text-sm text-muted-foreground">
                      Purchase and read instantly on iPhone, iPad, Mac, or any device with Apple Books.
                    </p>
                    <Button size="lg" className="w-full gap-2 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] hover:bg-[hsl(38,92%,55%)]" asChild data-testid="button-purchase-novel">
                      <a href="https://books.apple.com/au/book/betrayed-murdered-forsaken-the-harrowing-life-of/id6618112290" target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="h-5 w-5" /> Buy on Apple Books
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Proceeds support the Barran Dodger Legal & Ethical Trust Fund
                    </p>
                  </CardContent>
                </Card>

                {/* Open in New Tab Option */}
                <div className="text-center">
                  <Button variant="outline" className="gap-2" asChild data-testid="button-open-apple-books">
                    <a href="https://books.apple.com/au/book/betrayed-murdered-forsaken-the-harrowing-life-of/id6618112290" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> View on Apple Books
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgent Appeals Section */}
      <section className="py-20 bg-background border-y border-border/50">
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
              title="God Never Calls the Equipped"
              description="A prophetic-theological academic paper examining divine preparation through suffering and documented evidence."
              link="/prophetic-papers"
              tag="PROPHETIC"
            />
            <AppealCard 
              title="Crimes Against Humanity Brief"
              description="A forensic criminal brief establishing systematic persecution under the Rome Statute. Evidence of state-sponsored identity annihilation."
              link="/attached_assets/Crimes_against_humanity__1768634415740.pdf"
              tag="CRIMINAL"
            />
            <AppealCard 
              title="Forensic Report: Systematic Persecution"
              description="A 35-year evidentiary dossier documenting state-sponsored identity annihilation and crimes against humanity. Prepared for ICC/UNHCR."
              link="/attached_assets/Forensic_report__1768634415739.pdf"
              tag="FORENSIC"
            />
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

          {/* Document Archive Links - No Iframes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-primary/20 shadow-lg hover-elevate">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="font-serif text-xl flex items-center gap-2 text-primary">
                  <Shield className="h-5 w-5" />
                  The Enliven Chain Transmission
                </CardTitle>
                <CardDescription>
                  Sanctified guidance and the living record of the First Link.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Button variant="outline" className="w-full gap-2" asChild data-testid="button-enliven-chain">
                  <a href="/attached_assets/_⛓️_The_Enliven_Chain_Has_Been_Summoned_⛓️_2_1767163861559.pdf" target="_blank" rel="noopener noreferrer">
                    View Document <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-lg hover-elevate">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="font-serif text-xl flex items-center gap-2 text-primary">
                  <FileText className="h-5 w-5" />
                  Interactive Archive
                </CardTitle>
                <CardDescription>
                  Digital flipbook documenting the complete case and evidence.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Button variant="outline" className="w-full gap-2" asChild data-testid="button-interactive-archive">
                  <a href="https://simplebooklet.com/barrandodger" target="_blank" rel="noopener noreferrer">
                    Open Booklet <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-lg hover-elevate">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="font-serif text-xl flex items-center gap-2 text-primary">
                  <BookOpen className="h-5 w-5" />
                  PhD Thesis
                </CardTitle>
                <CardDescription>
                  "A Splice of My Life" - Dr. Richard McLean's research from Victoria University.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Button variant="outline" className="w-full gap-2" asChild data-testid="button-phd-thesis">
                  <a href="https://vuir.vu.edu.au/41836/" target="_blank" rel="noopener noreferrer">
                    View Thesis <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Database Evidence Cards */}
          {evidence && evidence.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {evidence.map((item) => (
                <Card key={item.id} className="hover-elevate" data-testid={`card-evidence-${item.id}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2 gap-2">
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
          )}
        </div>
      </section>

      {/* Artwork & Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">The Vision of the Witness</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Visual testimony capturing the raw reality of institutional persecution and the spiritual resilience required to survive the 'Humiliation Machine'. Art as evidence, expression as documentation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <PrincipleCard 
                  icon={<Shield className="h-6 w-6" />}
                  title="Truth Over Narrative"
                  description="Verifiable facts."
                />
                <PrincipleCard 
                  icon={<FileText className="h-6 w-6" />}
                  title="Evidence Over Ideology"
                  description="Sworn testimony."
                />
                <PrincipleCard 
                  icon={<Scale className="h-6 w-6" />}
                  title="Accountability"
                  description="Lawful confrontation."
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img 
                  src={artworkImg} 
                  alt="Visual Testimony - Artwork by the Witness" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Interactive Art Flipbook */}
              {/* Flipbook Gallery */}
              <div className="space-y-3">
                <a 
                  href="https://simplebooklet.com/barrandodger" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                  data-testid="link-flipbook-1"
                >
                  <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/30 rounded-xl p-5 hover:border-primary/50 transition-all hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground p-2.5 rounded-lg group-hover:scale-105 transition-transform">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif font-bold text-base text-primary mb-0.5">
                          "a certain beauty in un-resolution; ...ART"
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Interactive flipbook — Visual testimony
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </a>

                <a 
                  href="https://simplebooklet.com/egoandsoul" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                  data-testid="link-flipbook-2"
                >
                  <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/30 rounded-xl p-5 hover:border-primary/50 transition-all hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground p-2.5 rounded-lg group-hover:scale-105 transition-transform">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif font-bold text-base text-primary mb-0.5">
                          "Strange Currencies of Ego and Soul"
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Interactive flipbook — Artistic exploration
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </a>

                <a 
                  href="https://simplebooklet.com/backtobasicsrecentdrawings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                  data-testid="link-flipbook-3"
                >
                  <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/30 rounded-xl p-5 hover:border-primary/50 transition-all hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground p-2.5 rounded-lg group-hover:scale-105 transition-transform">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif font-bold text-base text-primary mb-0.5">
                          "Back to Basics: Recent Drawings"
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Interactive flipbook — Recent artwork
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
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
                The Trust exists for the benefit of humanity to dismantle the 'Humiliation Machine'—the systemic processes of institutional erasure and psychological containment. We operate as a non-profit, faith-neutral entity dedicated to the preservation of forensic truth.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Protect vulnerable persons and whistleblowers",
                  "Support truth-telling grounded in due process",
                  "Advocate for justice and institutional transparency",
                  "Preserve the Eliven Chain as a permanent moral archive"
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

      {/* Significance Statement */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5 text-sm font-bold" data-testid="badge-significance">
                ARCHIVAL SIGNIFICANCE
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Significance Statement
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Understanding the evidentiary, cryptographic, and legal importance of this archive
              </p>
            </div>

            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8 md:p-10 space-y-6">
                <p className="text-foreground leading-relaxed text-lg">
                  This website constitutes a structured, publicly accessible evidentiary archive documenting allegations of long-term institutional harm, whistleblower retaliation, and human rights violations. Its significance lies not in adjudicating the truth of the claims presented, but in the <strong className="text-primary">methodical preservation, organisation, and authentication</strong> of testimony and records over a 35-year period.
                </p>

                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-serif font-bold text-xl text-primary mb-4 flex items-center gap-3">
                    <Lock className="h-6 w-6" />
                    Cryptographic Authentication & Blockchain Timestamping
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The archive employs <strong>SHA256 cryptographic hashing</strong> and <strong>Bitcoin blockchain timestamping</strong> via OpenTimestamps to establish proof of existence, integrity, and chronology for more than <strong>2,000 documents</strong> — including <strong>63 individually blockchain-verified evidence files</strong> with immutable timestamps.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-border">
                      <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-primary">Proof of Existence:</span>
                        <span className="text-muted-foreground ml-1">Each document's SHA256 hash proves the exact content existed at the timestamped date</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-border">
                      <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-primary">Non-Repudiation:</span>
                        <span className="text-muted-foreground ml-1">Blockchain anchoring creates irrefutable evidence of authorship and timeline</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-border">
                      <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-primary">Tamper Detection:</span>
                        <span className="text-muted-foreground ml-1">Any alteration to a document changes its hash completely, making forgery detectable</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-border">
                      <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-primary">Independent Verification:</span>
                        <span className="text-muted-foreground ml-1">Anyone can verify at OpenTimestamps.org — no trust in central authority required</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed">
                  This creates an <strong className="text-primary">immutable forensic record</strong> that materially strengthens claims of authorship, continuity, and non-repudiation, <strong>exceeding traditional notarisation standards</strong> for evidentiary preservation.
                </p>

                <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                  <h3 className="font-serif font-bold text-xl text-primary mb-4">
                    Public Notice Mechanism
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By consolidating legal submissions, affidavits, correspondence, and contextual analysis into a single public repository, the site functions as a <strong>notice mechanism to institutions, oversight bodies, and the public</strong>. It demonstrates sustained attempts to engage lawful remedies, invoke international human rights frameworks, and preserve evidence against loss, suppression, or retrospective alteration.
                  </p>
                </div>

                <p className="text-foreground leading-relaxed">
                  While some sections adopt theological or symbolic narrative frameworks, these are largely distinguished from formal evidentiary materials. As a whole, the website represents an <strong className="text-primary">uncommon example of individual-driven, technologically fortified documentation</strong> of alleged systemic wrongdoing, with potential relevance to:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
                    <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-primary mb-1">Investigative Journalism</h4>
                    <p className="text-xs text-muted-foreground">Primary source materials for media inquiry</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
                    <Archive className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-primary mb-1">Historical Record-Keeping</h4>
                    <p className="text-xs text-muted-foreground">35-year chronological documentation</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
                    <Scale className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-primary mb-1">Human Rights Review</h4>
                    <p className="text-xs text-muted-foreground">UNHCR/ICC evidentiary submissions</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground italic text-center">
                    "The archive's strength lies not in persuasion but in preservation — creating an indelible record that exists independently of institutional acknowledgment, ensuring that documented truth outlives the systems that sought to suppress it."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Support & Investment Section */}
      <section id="invest" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Support the Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Invest in a legitimate, fact-based evidence published worthy venture dedicated to institutional accountability and the protection of truth.
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
                  <p className="text-xl font-bold text-primary select-all" data-testid="text-payid">rich@richmclean.com.au</p>
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
                <CardTitle className="text-2xl font-serif">Strategic Investment</CardTitle>
                <CardDescription className="text-base">
                  An invitation to invest in a legitimate, fact-based evidence published worthy venture for public benefit.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-8 space-y-4">
                <ul className="space-y-4">
                  {[
                    "Fact-based accountability venture",
                    "Evidence-published documentation",
                    "Dismantling the 'Humiliation Machine'",
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
                    <Button className="w-full gap-2" size="lg" data-testid="button-inquire-investment">
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
              This is more than a fund; it is a documented, immutable archive of truth. By supporting this venture, you are investing in the preservation of forensic evidence and the systematic undoing of the 'Humiliation Machine'—the institutional structures that rely on silence and erasure. Our foundation is built on 35 years of verified records, making this a legitimate and worthy public benefit undertaking.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function AppealCard({ title, description, link, tag }: { title: string; description: string; link: string; tag: string }) {
  const isExternal = link.startsWith("http") || link.startsWith("/attached_assets");
  
  return (
    <Card className="hover-elevate group" data-testid={`card-appeal-${tag.toLowerCase()}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2 gap-2">
          <Badge variant="outline" className="text-xs font-bold border-primary/30 text-primary">
            {tag}
          </Badge>
          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <CardTitle className="font-serif text-lg leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        {isExternal ? (
          <Button variant="outline" size="sm" className="w-full gap-2" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Document <ArrowRight className="h-3 w-3" />
            </a>
          </Button>
        ) : (
          <Link href={link}>
            <Button variant="outline" size="sm" className="w-full gap-2">
              Learn More <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}

function PrincipleCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-6 rounded-lg border border-border bg-background hover-elevate transition-all duration-300">
      <div className="mb-4 text-primary opacity-80 group-hover:opacity-100 transition-opacity">
        {icon}
      </div>
      <h3 className="font-serif text-lg font-bold text-primary mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
