import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

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
                  The Barran Dodger Legal & Ethical Trust Fund is a non-profit, faith-neutral, and non-partisan organization. 
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
                  title="Ethical Governance"
                  description="Advocating for systems that prioritize moral responsibility and lawful accountability over institutional self-protection."
                />
                <ObjectiveCard 
                  title="Whistleblower Protection"
                  description="Creating safe pathways and support networks for individuals who risk their safety to expose corruption and misconduct."
                />
                <ObjectiveCard 
                  title="Evidence-Based Justice"
                  description="Supporting legal actions and public inquiries that rely on verified documentation rather than hearsay or narrative control."
                />
                <ObjectiveCard 
                  title="Public Education"
                  description="Providing resources to help citizens understand their rights, the nature of institutional abuse, and methods of lawful resistance."
                />
              </div>
            </section>

            <section className="bg-primary/5 p-8 md:p-12 rounded-xl border border-primary/10">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Our Public Commitment</h2>
              <div className="space-y-4">
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

function ObjectiveCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function CommitmentItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded border border-border/50">
      <CheckCircle2 className="h-5 w-5 text-primary" />
      <span className="font-medium text-foreground uppercase tracking-wide text-sm">{text}</span>
    </div>
  );
}
