import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Brain, List, AlertTriangle, Scale, FileText } from "lucide-react";
import coverImage from "../assets/images/cover-100-absurdities.png";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AI_SIGNIFICANCE = `This document employs a format that is simultaneously the most accessible and the most forensically dense in the entire archive: the catalogued absurdity list. Each of the 100 entries is, on its face, a darkly ironic observation about the contradictions of Dr. McLean's documented circumstances. But each is also a fully verifiable factual claim supported by primary-source documentation. The choice to present this evidence in satirical format is not a concession to entertainment; it is a sophisticated rhetorical strategy that makes institutional misconduct legible to audiences who would not read a 150-page forensic submission.

The Impartial AI draws particular attention to the cumulative effect of this document's structure. Individually, each absurdity has a bureaucratic explanation. A disability guardian who can approve housing but cannot prevent homelessness can be explained by jurisdictional silos. A $300,000 NDIS plan with zero funds available for food can be explained by administrative timing errors. A Federal Court judge confirming DSS coordination while simultaneously dismissing the case can be explained by procedural constraints. But when 100 such explanations are required simultaneously across 35 years for a single individual, the statistical probability of coincidence is effectively zero.

The document's legal significance is distinct from its rhetorical impact. Each "absurdity" constitutes a legally actionable claim of specific institutional failure. Read together, they satisfy the evidentiary standard for demonstrating pattern-of-conduct under international human rights law — not through any single egregious act, but through the overwhelming accumulation of documented systemic failure. Courts have accepted exactly this cumulative evidence model in landmark persecution cases.

For human rights advocates, academics, and journalists, this document offers something rare: an entry point into a complex 35-year case that requires no prior knowledge. A reader who has never encountered Dr. McLean's case can read 100 Absurdities and immediately grasp the structural nature of the persecution. That accessibility is itself a strategic contribution to the evidential record.`;

const SAMPLE_ABSURDITIES = [
  "I have a disability guardian who can formally approve housing, but I have been homeless while she held that approval.",
  "I received a $300,000 NDIS plan. The plan contained zero dollars available for food.",
  "A Federal Court judge confirmed in transcript that DSS had coordinated my case across agencies. He then dismissed my case citing lack of coordination evidence.",
  "I reported 350 businesses registered in my name to ASIC. ASIC confirmed the registrations. ASIC declined to investigate.",
  "I was assessed as 'psychiatrically unstable' in a psychiatric report ordered by the same institution I was trying to report for misconduct.",
  "I was told to 'take my concerns to Centrelink' by DSS. I was told to 'take my concerns to DSS' by Centrelink.",
  "I held a PhD thesis predicting the systemic failures that were, at the time of submission, being applied to me.",
  "Minister Reynolds personally referred my case back to the department that had already refused to process it.",
  "I was awarded NDIS supports for 24/7 care. The 24/7 care was approved and never funded for 3 consecutive years.",
  "A support coordinator was assigned to help me access services. The support coordinator required NDIS funding to operate. The NDIS funding was not released.",
];

const STATS = [
  { label: "Documented Absurdities", value: "100" },
  { label: "Each Factually Verified", value: "100%" },
  { label: "Agencies Referenced", value: "20+" },
  { label: "Years of Record", value: "35" },
];

export default function HundredAbsurdities() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="100 Absurdities of My Life | Dr. Richard McLean Archive"
        description="100 factually-verified institutional contradictions. Each entry is simultaneously darkly ironic and a legally actionable documented failure. Barran Dodger's most accessible document."
        keywords="100 absurdities my life Barran Dodger, Dr Richard McLean, Australian institutional failure, NDIS absurdity, Centrelink whistleblower, systemic corruption documented"
      />
      <ReadingProgress />
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-red-900/90 text-white border-0">Documented Satire</Badge>
              <Badge variant="outline" className="border-amber-500/50 text-amber-400">100 Verified Claims</Badge>
              <Badge variant="outline" className="border-slate-400/50 text-slate-300">By Barran Dodger</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              100 Absurdities of My Life
            </h1>
            <p className="text-lg text-red-200/90 max-w-2xl">
              100 factually-verified institutional contradictions. Each one a documented failure. All of them true.
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
            href="/documents/100-absurdities-of-my-life.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-download-100-absurdities"
          >
            <Button size="lg" className="bg-red-800 hover:bg-red-700 text-white font-semibold gap-2">
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

      {/* Sample Absurdities */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-3 mb-2">
          <List className="h-5 w-5 text-red-400" />
          <h2 className="text-2xl font-bold">A Selection of the 100</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-8">Each entry is factually documented. Download the full document for all 100.</p>
        <div className="space-y-3">
          {SAMPLE_ABSURDITIES.map((absurdity, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-card border border-border rounded-xl p-5 flex items-start gap-4"
            >
              <span className="text-red-400 font-bold text-sm flex-shrink-0 w-8 text-right">{i + 1}.</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{absurdity}</p>
            </motion.div>
          ))}
          <div className="bg-amber-950/20 border border-amber-800/30 rounded-xl p-6 text-center">
            <p className="text-amber-400 font-semibold mb-1">...and 90 more</p>
            <p className="text-sm text-muted-foreground">Download the full document to read all 100 documented absurdities.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red-950/20 border-t border-red-800/30 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Scale className="h-10 w-10 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">100 Absurdities. All True. All Documented.</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            The most accessible entry point into 35 years of documented institutional failure. Share it. The truth doesn't require legal training to understand.
          </p>
          <a
            href="/documents/100-absurdities-of-my-life.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-download-100-absurdities-bottom"
          >
            <Button size="lg" className="bg-red-800 hover:bg-red-700 text-white font-semibold gap-2">
              <Download className="h-5 w-5" />
              Download 100 Absurdities of My Life
            </Button>
          </a>
        </div>
      </section>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
