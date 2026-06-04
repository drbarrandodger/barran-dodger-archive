import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { CrossLink, DocumentPopup, KEY_DOCUMENTS } from "@/components/CrossLink";
import { trackDownload, DownloadBadge } from "@/components/DownloadCounter";
import { CheckCircle2, Gavel, Globe, ShieldAlert, ExternalLink, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SocialShare } from "@/components/SocialShare";
import { FloatingCTA } from "@/components/FloatingCTA";
import { RelatedContent } from "@/components/RelatedContent";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

export default function Mission() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Our Mission — Truth Cannot Be Deleted When It Lives on the Blockchain"
        description="The Barran Dodger Legal & Ethical Trust Fund exists because truth matters. Committed to transparency, ethical governance, and ensuring no government can ever erase evidence again."
        keywords="truth mission blockchain, ethical governance Australia, whistleblower protection mission, government accountability mission, anti-corruption non-profit"
        path="/mission"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the Barran Dodger Legal & Ethical Trust Fund?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164) is a non-profit, faith-neutral, and non-partisan organization established upon blockchain-verified evidence — sworn testimony, affidavits, and public records. It operates solely for the public benefit, independent of political affiliations or corporate interests."
              }
            },
            {
              "@type": "Question",
              "name": "What are the core objectives of the Trust Fund?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The four core objectives are: Human Rights Advocacy (upholding UN Convention on Persons with Disabilities), Whistleblower Protection (creating safe pathways for exposing corruption), Evidence-Based Justice (supporting legal actions relying on verified documentation), and Public Accountability (ensuring institutional failures are acknowledged with meaningful redress)."
              }
            },
            {
              "@type": "Question",
              "name": "What financial restitution does the Trust seek?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Trust seeks full financial restitution for documented damages totaling $32.9M–$47.5M, including: NDIA $2.5M+ in denied supports, WorkCover/ComCare $1.8M (19+ year delay), Identity Theft $7.8M (350+ fraudulent registrations), and Human Rights $15M for Rome Statute violations."
              }
            },
            {
              "@type": "Question",
              "name": "How can I contact the Trust Fund?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Secure contact via ProtonMail encrypted email: drbarrandodger@proton.me. Response within 24-48 hours for media inquiries."
              }
            }
          ]
        }}
      />
      <Navigation />
      
      <main className="flex-grow pt-44 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Mission & Purpose</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A commitment to truth, transparency, and the restoration of ethical governance through lawful means.
            </p>
          </motion.div>

          <div className="space-y-16">
            <section className="bg-[#150c00] p-8 md:p-12 rounded-xl shadow-sm border border-border">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Nature of the Trust</h2>
              <div className="prose prose-slate max-w-none text-muted-foreground">
                <p className="leading-relaxed mb-6">
                  The Barran Dodger Legal & Ethical Trust Fund (The Trustee for www.barrandodger.com) is a non-profit, faith-neutral, and non-partisan organization. 
                  We operate solely for the public benefit, independent of political affiliations or corporate interests.
                </p>
                <p className="leading-relaxed">
                  Our foundation is unique: we are established upon a specific, <CrossLink to="/blockchain">blockchain</CrossLink>-verified body of evidence—sworn testimony, 
                  affidavits, and public records authored and compiled by Barran Dodger. This documentation serves not just 
                  as a historical record, but as a functional tool for advocacy and reform. Explore the complete{" "}
                  <Link href="/evidence" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">Evidence Archive</Link>{" "}
                  containing <Link href="/timeline" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">35 years of documented persecution</Link>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-8 text-center">Core Objectives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ObjectiveCard 
                  icon={<Globe className="h-6 w-6 text-primary" />}
                  title="Human Rights Advocacy"
                  description="Upholding the rights afforded under the UN Convention on the Rights of Persons with Disabilities and seeking redress for systemic violations."
                />
                <ObjectiveCard 
                  icon={<ShieldAlert className="h-6 w-6 text-primary" />}
                  title="Whistleblower Protection"
                  description="Creating safe pathways and support networks for individuals who risk their safety to expose corruption and misconduct."
                />
                <ObjectiveCard 
                  icon={<Gavel className="h-6 w-6 text-primary" />}
                  title="Evidence-Based Justice"
                  description="Supporting legal actions and public inquiries that rely on verified documentation, forensic timestamps, and immutable records."
                />
                <ObjectiveCard 
                  icon={<CheckCircle2 className="h-6 w-6 text-primary" />}
                  title="Public Accountability"
                  description="Ensuring that institutional failures are acknowledged publicly and formal apologies are issued alongside meaningful redress."
                />
              </div>
            </section>

            <section className="bg-primary/5 p-8 md:p-12 rounded-xl border border-primary/10">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Human Rights Focus</h2>
              <div className="prose prose-slate max-w-none text-muted-foreground">
                <p className="mb-4">
                  As documented in our submissions to the OHCHR and UNHRC, our focus includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ending systemic abuse and financial exploitation within disability support systems (<CrossLink to="/case-studies">NDIS</CrossLink>).</li>
                  <li>Addressing professional isolation and social neglect of persons with disabilities.</li>
                  <li>Combatting psychological torture, institutional <DocumentPopup {...KEY_DOCUMENTS.entrapmentAffidavit}>entrapment</DocumentPopup>, and <CrossLink to="/prophetic-essay">technological harassment</CrossLink>.</li>
                  <li>Seeking asylum and international protection for whistleblowers protected under the <DocumentPopup {...KEY_DOCUMENTS.pidActAnalysis}>PID Act</DocumentPopup> and human rights defenders.</li>
                  <li>Ensuring transparency in legal and guardianship oversight to prevent the 'erasure' of vulnerable individuals.</li>
                  <li>Documenting the 7+ entities that have systematically denied legal representation.</li>
                  <li>Exposing the fraudulent <DocumentPopup {...KEY_DOCUMENTS.evidenceSummary}>ASIC registrations (350+)</DocumentPopup> used in identity theft and corporate fraud — full details in the <CrossLink to="/evidence">evidence archive</CrossLink>.</li>
                </ul>
                <div className="mt-8">
                  <Button variant="outline" className="gap-2" asChild>
                    <a href="/attached_assets/ONHCR_UN_Barran_Dodger_Asylum_Claim__1768620108623.pdf" target="_blank" rel="noopener noreferrer" onClick={() => trackDownload("/attached_assets/ONHCR_UN_Barran_Dodger_Asylum_Claim__1768620108623.pdf")}>
                      <Download className="h-4 w-4" /> Read the UN Asylum Claim <DownloadBadge url="/attached_assets/ONHCR_UN_Barran_Dodger_Asylum_Claim__1768620108623.pdf" />
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            <section className="bg-[#150c00] p-8 md:p-12 rounded-xl border border-border">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Financial Accountability</h2>
              <div className="prose prose-slate max-w-none text-muted-foreground mb-8">
                <p>
                  The Trust seeks full financial restitution for documented damages totaling <strong>$32.9M - $47.5M</strong>, as detailed in the <CrossLink to="/taxpayer-cost-analysis">$11.5M taxpayer cost analysis</CrossLink>. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>NDIA:</strong> $2.5M+ in denied supports and housing failures.</li>
                  <li><strong>WorkCover/ComCare:</strong> $1.8M (19+ year delay in impairment benefits).</li>
                  <li><strong>Identity Theft:</strong> $7.8M in losses related to 350+ fraudulent registrations.</li>
                  <li><strong>Human Rights:</strong> $15M for systematic violations and psychological torture under the <CrossLink to="/legal-status">Rome Statute</CrossLink>.</li>
                </ul>
                <p className="mt-4 font-serif italic">
                  "They will fight against you, but they shall not prevail against you." — Jeremiah 1:19
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CommitmentItem text="Truth over narrative" />
                <CommitmentItem text="Evidence over ideology" />
                <CommitmentItem text="Accountability over silence" />
                <CommitmentItem text="Dignity over harm" />
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/evidence">
                  <Button className="gap-2">
                    View Evidence Archive <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/manifesto">
                  <Button variant="outline" className="gap-2">
                    Read Full Manifesto
                  </Button>
                </Link>
                <Link href="/gospel">
                  <Button variant="outline" className="gap-2">
                    Sacred Gospels
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-muted-foreground text-sm">
                  <span className="font-semibold text-foreground">Secure Contact:</span>{" "}
                  <a href="mailto:drbarrandodger@proton.me" className="text-[hsl(38,92%,50%)] hover:underline font-medium">
                    drbarrandodger@proton.me
                  </a>{" "}
                  <span className="text-xs">(ProtonMail encrypted)</span>
                </p>
              </div>
            </section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border"
            data-testid="section-share-mission"
          >
            <SocialShare 
              title="Our Mission: Truth, Transparency & Ethical Governance"
              description="The Barran Dodger Legal & Ethical Trust Fund seeks full accountability for $32.9M-$47.5M in documented damages across 35+ government agencies. Evidence-based justice demands public awareness."
              url="https://www.barrandodger.com/mission"
            />
          </motion.section>
        </div>
      </main>

      <RelatedContent currentPath="/mission" />

      <ArchiveCrossLinks />
      <Footer />
          <FloatingCTA />
</div>
  );
}

function ObjectiveCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="bg-[#150c00] p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-lg text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function CommitmentItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 bg-muted/30 p-4 rounded border border-border/50">
      <CheckCircle2 className="h-5 w-5 text-primary" />
      <span className="font-medium text-foreground uppercase tracking-wide text-xs">{text}</span>
    </div>
  );
}
