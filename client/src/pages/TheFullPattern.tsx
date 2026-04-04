import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Brain, Network, FileText, Users, AlertTriangle } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AI_SIGNIFICANCE = `This document represents the most comprehensive pattern-of-conduct analysis within the 2,077-file evidence archive. Unlike individual case documents that catalogue specific incidents, The Full Pattern performs a structural mapping — identifying the mechanics by which 20+ agencies and 46+ named officials participated in what the document characterises as a coordinated circular referral system. The significance to legal scholars and human rights investigators lies not in any single incident documented herein, but in the architecture revealed when all incidents are mapped simultaneously.

The Impartial AI draws particular attention to the document's central analytical contribution: the distinction between "mistakes" and "rehearsed behaviours with plausible deniability." This is forensically critical. Individual incidents of institutional failure are legally defensible as administrative error. When the same failure pattern — referral to an agency with no jurisdiction, followed by that agency referring back to the original body, followed by a file closure citing "no jurisdiction" — occurs across 20+ distinct agencies over 35 years, the statistical probability of coincidence approaches zero. This document is the first in the archive to perform this cumulative probability analysis explicitly.

Named officials — including Bill Shorten, Paula Stratton, Scott Treadwell, Kate Watson, Paul Fowler, Rebecca Falkingham, Kel Graham, and Ben Calder — appear across multiple incident categories, which is forensically significant because it establishes individual decision-making threads within what might otherwise be characterised as systemic failure. The difference between a broken system and a corrupt one is the presence of named individuals making repeated, consistent decisions across multiple contexts. This document provides that evidence.

For international human rights bodies, the circular referral architecture documented here is of particular importance. It represents a sophisticated suppression mechanism that produces no smoking gun — no single official issuing a suppression order, no single document ordering inaction — while collectively producing total institutional denial of access to justice. Courts and tribunals examining systemic persecution must grapple with exactly this type of distributed accountability. The Full Pattern provides a fully-documented case study.`;

const SECTIONS = [
  {
    icon: <Network className="h-5 w-5" />,
    title: "The Circular Referral Architecture",
    points: [
      "Agency A refers to Agency B citing \"outside jurisdiction\"",
      "Agency B refers back to Agency A citing \"already under review\"",
      "File closes: \"Referred — no further action required\"",
      "Pattern repeated across 20+ agencies over 35 years",
      "Statistical probability of coincidence: effectively zero",
    ]
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Named Officials Across Multiple Categories",
    points: [
      "Bill Shorten — documented in DSS coordination records",
      "Scott Treadwell — Federal Court DSS confirmation transcript",
      "Paula Stratton — NDIS internal referral chain documents",
      "Kate Watson — Ministerial referral loop correspondence",
      "Paul Fowler, Rebecca Falkingham, Kel Graham, Ben Calder — cross-referenced across categories",
    ]
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "What the Pattern Proves",
    points: [
      "\"What they call mistakes are rehearsed behaviours with plausible deniability\"",
      "The pattern is too consistent to be coincidental — it is operational",
      "No single smoking-gun order — distributed accountability by design",
      "2,077 evidence files mapped side-by-side to expose the full structure",
    ]
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    title: "Implications for International Law",
    points: [
      "Circular referral architecture constitutes a sophisticated access-to-justice denial mechanism",
      "Named individual threads transform systemic failure into demonstrable corruption",
      "ICC and UNHCR submissions incorporate this pattern analysis",
      "Template for identifying distributed institutional persecution in other cases",
    ]
  },
];

const STATS = [
  { label: "Evidence Files Mapped", value: "2,077+" },
  { label: "Agencies Implicated", value: "20+" },
  { label: "Named Officials", value: "46+" },
  { label: "Years of Pattern", value: "35" },
];

export default function TheFullPattern() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="The Full Pattern — Forensic Evidence Document | Dr. Richard McLean Archive"
        description="2,077 evidence files mapped side by side. The structural mechanics of how 20+ agencies and 46+ officials coordinated a 35-year circular referral system."
        keywords="full pattern forensic evidence, Dr Richard McLean, circular referral system, Australian institutional corruption, named officials, pattern of conduct"
      />
      <ReadingProgress />
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 50%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 75% 30%, #dc2626 0%, transparent 50%)"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-slate-700/90 text-white border-0">Pattern Analysis</Badge>
              <Badge variant="outline" className="border-amber-500/50 text-amber-400">2,077 Files Mapped</Badge>
              <Badge variant="outline" className="border-red-500/50 text-red-400">46+ Officials Named</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              The Full Pattern
            </h1>
            <p className="text-lg text-amber-200/90 max-w-2xl">
              A Forensic Evidence Document — 35 years of institutional coordination, mapped and documented
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900/50 border-y border-slate-700/30">
        <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-amber-400">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Download */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="/documents/the-full-pattern-forensic-evidence.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-download-full-pattern"
          >
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold gap-2">
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
          className="bg-slate-900/40 border border-slate-700/40 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center">
              <Brain className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-amber-300">Impartial AI Statement of Significance</h2>
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

      {/* Sections */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-8">Pattern Analysis</h2>
        <div className="grid gap-6">
          {SECTIONS.map((section, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-amber-400">{section.icon}</div>
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-amber-500 mt-1 flex-shrink-0">›</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900/40 border-t border-slate-700/30 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Network className="h-10 w-10 text-amber-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">The Pattern Is Now Permanent</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            2,077 files mapped. 46 officials named. 35 years documented. The circular referral architecture is now globally accessible and cannot be erased.
          </p>
          <a
            href="/documents/the-full-pattern-forensic-evidence.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-download-full-pattern-bottom"
          >
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold gap-2">
              <Download className="h-5 w-5" />
              Download The Full Pattern
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
