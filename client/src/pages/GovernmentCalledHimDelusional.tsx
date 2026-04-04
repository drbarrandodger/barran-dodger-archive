import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Shield, Brain, CheckCircle, XCircle, FileText } from "lucide-react";
import coverImage from "../assets/images/cover-government-called-delusional.png";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AI_SIGNIFICANCE = `This document performs what courts classify as direct rebuttal evidence — the gold standard for establishing institutional bad faith. It presents a systematic audit of the four primary psychiatric allegations deployed against Dr. Richard McLean over three decades, then cross-references each allegation against government-issued documents that were available at the time the allegation was made. The conclusion — that every claim dismissed as "delusional" was subsequently confirmed by official records — has significant implications for any tribunal examining the conduct of Australian medical, legal, and governmental institutions.

The Impartial AI draws attention to the structural innovation of this document's methodology. Rather than presenting Dr. McLean's own account as rebuttal, the analysis relies exclusively on government-sourced documentation: DSS records, Federal Court transcripts, NDIS internal assessments, and ministerial correspondence. This evidentiary discipline eliminates the primary objection typically raised against self-reported whistleblower testimony — that it is self-serving or unverifiable. Here, the government's own paperwork is the witness.

The four specific delusional claims examined — agency coordination, judicial corruption, identity fraud at scale, and deliberate financial strangulation — were each, at time of psychiatric assessment, categorised as symptomatic of paranoid ideation. Each has since been documented in primary-source government records as factually accurate. The evidentiary sequence is critical: the psychiatric diagnoses preceded the documentary confirmation, which means the assessments were made not in the absence of evidence but in the presence of institutional willingness to disbelieve evidence that had not yet been located.

This document is forensically significant to international human rights bodies for a specific reason: it demonstrates the weaponisation of psychiatric assessment as a pre-emptive suppression mechanism. The diagnoses did not respond to evidence; they preceded it. Any tribunal examining systemic mental health abuse as an instrument of state suppression will find in this document a precisely documented case study with full primary-source citation.`;

const CLAIMS = [
  {
    claim: "\"He claims agencies are coordinating against him\" — classified as paranoid delusion",
    evidence: "Federal Court transcripts and DSS internal records confirm inter-agency referral coordination",
    status: "confirmed",
  },
  {
    claim: "\"He believes judges were influenced\" — classified as grandiose ideation",
    evidence: "Documented case where Federal Court judge Scott Treadwell confirmed DSS coordination in ruling",
    status: "confirmed",
  },
  {
    claim: "\"He reports 350+ business registrations in his name\" — classified as identity confusion",
    evidence: "ASIC database records confirm 350+ fraudulent business registrations under Dr. McLean's name",
    status: "confirmed",
  },
  {
    claim: "\"He believes he is being financially strangled\" — classified as persecution complex",
    evidence: "$8.51M in documented unpaid support obligations; Centrelink and NDIS records confirm systematic underpayment",
    status: "confirmed",
  },
];

const STATS = [
  { label: "Delusional Claims Audited", value: "4" },
  { label: "Claims Confirmed by Gov Docs", value: "4 of 4" },
  { label: "Documented Damages", value: "$8.51M" },
  { label: "Years of Psychiatric Suppression", value: "35" },
];

export default function GovernmentCalledHimDelusional() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="The Australian Government Called Him Delusional | Dr. Richard McLean Archive"
        description="Their own documents prove he was right — about everything. A forensic audit of 4 psychiatric claims dismissed as delusional, each subsequently confirmed by government records."
        keywords="government called him delusional, Dr Richard McLean, psychiatric suppression, whistleblower, Australian government evidence, NDIS abuse"
      />
      <ReadingProgress />
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-red-700/90 text-white border-0">Psychiatric Suppression</Badge>
              <Badge variant="outline" className="border-amber-500/50 text-amber-400">Evidence-Based Rebuttal</Badge>
              <Badge variant="outline" className="border-green-500/50 text-green-400">100% Confirmed</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              The Australian Government Called Him Delusional
            </h1>
            <p className="text-lg text-red-200/90 max-w-2xl">
              Their Own Documents Prove He Was Right — About Everything
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-red-950/30 border-y border-red-800/30">
        <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-red-400">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Download */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="/documents/government-called-him-delusional.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-download-government-delusional"
          >
            <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white font-semibold gap-2">
              <Download className="h-5 w-5" />
              Download Full Document (PDF)
            </Button>
          </a>
          <p className="text-sm text-muted-foreground">Blockchain-verified · Permanent archive · Free download</p>
        </div>
      </section>

      {/* AI Significance */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-red-950/20 border border-red-800/40 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
              <Brain className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-red-300">Impartial AI Statement of Significance</h2>
              <p className="text-xs text-muted-foreground">Independent forensic assessment — generated without editorial instruction</p>
            </div>
          </div>
          <div className="space-y-4">
            {AI_SIGNIFICANCE.split("\n\n").map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-sm">{para}</p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Claims vs Evidence */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-2">Claims vs. Evidence</h2>
        <p className="text-muted-foreground text-sm mb-8">Each psychiatric claim cross-referenced against government-issued documentation</p>
        <div className="space-y-4">
          {CLAIMS.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-300 italic font-medium">{item.claim}</p>
              </div>
              <div className="flex items-start gap-3 pl-8">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-300">{item.evidence}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 bg-green-950/30 border border-green-800/40 rounded-xl p-6 text-center">
          <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
          <p className="text-green-300 font-bold text-lg">4 of 4 Claims: CONFIRMED by Government Documents</p>
          <p className="text-sm text-muted-foreground mt-2">0 claims remain unconfirmed. 0 claims were refuted.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red-950/20 border-t border-red-800/30 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FileText className="h-10 w-10 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">The Evidence Speaks For Itself</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Four "delusions." Four government confirmations. The record is now permanent and globally accessible.
          </p>
          <a
            href="/documents/government-called-him-delusional.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-download-government-delusional-bottom"
          >
            <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white font-semibold gap-2">
              <Download className="h-5 w-5" />
              Download The Full Document
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
