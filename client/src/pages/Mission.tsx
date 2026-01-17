import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Gavel, Globe, ShieldAlert, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Mission() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20">
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
            <section className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-border">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Nature of the Trust</h2>
              <div className="prose prose-slate max-w-none text-muted-foreground">
                <p className="leading-relaxed mb-6">
                  The Barran Dodger Legal & Ethical Trust Fund (The Trustee for www.barrandodger.com.au) is a non-profit, faith-neutral, and non-partisan organization. 
                  We operate solely for the public benefit, independent of political affiliations or corporate interests.
                </p>
                <p className="leading-relaxed">
                  Our foundation is unique: we are established upon a specific, verified body of evidence—sworn testimony, 
                  affidavits, and public records authored and compiled by Barran Dodger. This documentation serves not just 
                  as a historical record, but as a functional tool for advocacy and reform.
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
                  <li>Ending systemic abuse and financial exploitation within disability support systems (NDIS).</li>
                  <li>Addressing professional isolation and social neglect of persons with disabilities.</li>
                  <li>Combatting psychological torture, institutional entrapment, and technological harassment.</li>
                  <li>Seeking asylum and international protection for whistleblowers and human rights defenders.</li>
                  <li>Ensuring transparency in legal and guardianship oversight to prevent the 'erasure' of vulnerable individuals.</li>
                  <li>Documenting the 7+ entities that have systematically denied legal representation.</li>
                  <li>Exposing the fraudulent ASIC registrations (350+) used in identity theft and corporate fraud.</li>
                </ul>
                <div className="mt-8">
                  <Button variant="outline" className="gap-2" asChild>
                    <a href="/attached_assets/ONHCR_UN_Barran_Dodger_Asylum_Claim__1768620108623.pdf" target="_blank" rel="noopener noreferrer">
                      Read the UN Asylum Claim <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 md:p-12 rounded-xl border border-border">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Financial Accountability</h2>
              <div className="prose prose-slate max-w-none text-muted-foreground mb-8">
                <p>
                  The Trust seeks full financial restitution for documented damages totaling <strong>$32.9M - $47.5M</strong>. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>NDIA:</strong> $2.5M+ in denied supports and housing failures.</li>
                  <li><strong>WorkCover/ComCare:</strong> $1.8M (19+ year delay in impairment benefits).</li>
                  <li><strong>Identity Theft:</strong> $7.8M in losses related to 350+ fraudulent registrations.</li>
                  <li><strong>Human Rights:</strong> $15M for systematic violations and psychological torture.</li>
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
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ObjectiveCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
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
