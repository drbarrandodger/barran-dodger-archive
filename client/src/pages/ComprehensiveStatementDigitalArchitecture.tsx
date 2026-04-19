import { motion } from "framer-motion";
import { Shield, Download, Globe, Lock, Database, FileText, Layers, CheckCircle, Zap, BookOpen, Scale } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import coverImage from "../assets/images/cover-comprehensive-statement-digital-architecture.png";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SEVEN_LAYERS = [
  {
    number: "I",
    title: "The Blockchain Layer",
    subtitle: "Mathematical Permanence",
    icon: Lock,
    colour: "amber",
    summary:
      "Sealed in the Bitcoin blockchain using SHA-256 cryptographic hashing. 15,000+ nodes. Running continuously since January 2009. Never hacked. Never taken offline. The archive is embedded in the distributed ledger of human financial infrastructure — permanently, mathematically, and beyond any authority's reach.",
  },
  {
    number: "II",
    title: "The Human Memory Layer",
    subtitle: "350,000 Witnesses",
    icon: Globe,
    colour: "emerald",
    summary:
      "350,000 distinct downloads across six continents. Each represents a human mind now in possession of the primary source record. Human memory cannot be seized, deleted, or taken offline. The propagation arithmetic: 350,000 → 700,000 → 1.4 million. The threshold at which suppression of public knowledge becomes operationally impossible has already been crossed.",
  },
  {
    number: "III",
    title: "The International Law Layer",
    subtitle: "ICC Article 7 & UNHCR Geneva",
    icon: Scale,
    colour: "blue",
    summary:
      "Formally received by the ICC at The Hague under Article 7 of the Rome Statute (crimes against humanity) and the UNHCR in Geneva. 123 member states. The submission cannot be withdrawn, redacted, or suppressed. It is part of the permanent international human rights record of the twenty-first century.",
  },
  {
    number: "IV",
    title: "The Mirror Layer",
    subtitle: "Five Independent Platforms",
    icon: Database,
    colour: "purple",
    summary:
      "barrandodger.com (Replit global CDN). GitHub mirror (Microsoft Azure, 60+ regions). MyAIDrive. Academic citation trackers. Bitcoin blockchain nodes. Five independent systems. Each would need to be separately addressed to suppress the record. None can be.",
  },
  {
    number: "V",
    title: "The Verification Layer",
    subtitle: "575/575 — Zero Contradictions",
    icon: CheckCircle,
    colour: "emerald",
    summary:
      "53 independent forensic analyses. 575 propositions tested. 575 corroborated. 0 contradicted. 46 consecutive perfect scores. Every named party has had full public access and has not contested a single proposition. Uncontested documentation stands — as a matter of evidentiary principle recognised in international law.",
  },
  {
    number: "VI",
    title: "The Civilisational Layer",
    subtitle: "35 Years — What History Does With This",
    icon: BookOpen,
    colour: "amber",
    summary:
      "The McLean archive is the most thoroughly self-documented institutional persecution case in Australian history. Future scholars of institutional capture, disability sector weaponisation, and whistleblower persecution will cite this archive. It will exist in curricula, academic papers, and the training data of every AI system built from the digital record of this era.",
  },
  {
    number: "VII",
    title: "The Compound Layer",
    subtitle: "Self-Perpetuating Growth",
    icon: Zap,
    colour: "red",
    summary:
      "The archive is self-compounding. Every new analysis increases the surface area of the public record. Every international submission creates additional public documents driving additional discovery. Every named party's silence drives further scrutiny. The trajectory is not toward obscurity. It is toward ubiquity.",
  },
];

const colourMap: Record<string, { text: string; bg: string; border: string; badge: string }> = {
  amber: { text: "text-amber-400", bg: "bg-amber-950/30", border: "border-amber-800/40", badge: "bg-amber-900/60 text-amber-300" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-950/30", border: "border-emerald-800/40", badge: "bg-emerald-900/60 text-emerald-300" },
  blue: { text: "text-blue-400", bg: "bg-blue-950/30", border: "border-blue-800/40", badge: "bg-blue-900/60 text-blue-300" },
  purple: { text: "text-purple-400", bg: "bg-purple-950/30", border: "border-purple-800/40", badge: "bg-purple-900/60 text-purple-300" },
  red: { text: "text-red-400", bg: "bg-red-950/30", border: "border-red-800/40", badge: "bg-red-900/60 text-red-300" },
};

export default function ComprehensiveStatementDigitalArchitecture() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Comprehensive Statement: The McLean Archive Embedded in the Digital Architecture of Humanity — April 2026 | ABN 78 833 496 164"
        description="Blockchain-verified comprehensive statement documenting the seven layers of permanent irremovability of the McLean Archive. ICC submitted. UNHCR submitted. April 2026. 575/575 propositions. 350,000+ downloads. ABN 78 833 496 164."
        keywords="McLean archive digital architecture, seven layers permanence, blockchain verified statement, ICC UNHCR submission, 575 propositions, 350000 downloads, barrandodger comprehensive statement April 2026"
      />
      <ReadingProgress />
      <Navigation />

      <div className="pt-20">
        {/* HERO */}
        <section className="bg-zinc-950 border-b border-zinc-800 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-amber-900/60 text-amber-300 border-amber-800/40">Blockchain Verified</Badge>
                <Badge className="bg-red-900/60 text-red-300 border-red-800/40">ICC Submitted</Badge>
                <Badge className="bg-blue-900/60 text-blue-300 border-blue-800/40">UNHCR Submitted</Badge>
                <Badge className="bg-zinc-700 text-zinc-300 border-zinc-600">April 2026</Badge>
                <Badge className="bg-emerald-900/60 text-emerald-300 border-emerald-800/40">Seven Layers</Badge>
              </div>

              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">
                The McLean Archive — A Command
              </p>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "Libre Baskerville, serif" }}>
                Comprehensive Statement
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-amber-400 mb-6" style={{ fontFamily: "Libre Baskerville, serif" }}>
                Embedded in the Digital Architecture of Humanity
              </h2>

              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                How 350,000 downloads, 575 corroborated propositions, Bitcoin blockchain sealing,
                ICC submission, and 35 years of documentation have made one man's archive permanently
                irremovable from the fabric of the modern world.
              </p>

              {/* Cover + download */}
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="flex-shrink-0">
                  <img
                    src={coverImage}
                    alt="Comprehensive Statement — Digital Architecture Cover"
                    className="w-48 rounded-xl shadow-2xl border border-amber-800/30"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-center">
                  <div className="bg-zinc-900/60 border border-zinc-700 rounded-xl p-5 space-y-3">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Document Record</p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div><span className="text-zinc-500">Date:</span> <span className="text-white font-semibold">April 2026</span></div>
                      <div><span className="text-zinc-500">Category:</span> <span className="text-amber-400 font-semibold">Primary Exhibit</span></div>
                      <div><span className="text-zinc-500">Layers:</span> <span className="text-white font-semibold">Seven</span></div>
                      <div><span className="text-zinc-500">Propositions:</span> <span className="text-emerald-400 font-semibold">575/575</span></div>
                      <div><span className="text-zinc-500">ICC Filed:</span> <span className="text-blue-400 font-semibold">Article 7</span></div>
                      <div><span className="text-zinc-500">UNHCR Filed:</span> <span className="text-blue-400 font-semibold">Geneva</span></div>
                    </div>
                  </div>

                  <ViralDownloadButton
                    url="/documents/comprehensive-statement-digital-architecture.pdf"
                    label="Download — Comprehensive Statement (April 2026)"
                    filename="comprehensive-statement-digital-architecture-april-2026.pdf"
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl"
                    data-testid="button-download-comprehensive-statement"
                  />
                  <p className="text-xs text-zinc-500">
                    Also included in the{" "}
                    <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
                    {" "}— downloaded 350,000+ times globally.
                  </p>
                </div>
              </div>

              {/* ABN block */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1">
                <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                  All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                  Non-commercial reproduction and distribution is permitted and encouraged.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SIGNIFICANCE */}
        <section className="bg-black py-14 px-4 border-b border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-8">
                <FileText className="text-amber-400" size={24} />
                <h2 className="text-2xl font-bold" style={{ fontFamily: "Libre Baskerville, serif" }}>
                  Why This Document Matters
                </h2>
              </div>

              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  This is not a complaint. It is not a petition. It is not a plea for recognition. It is a structural
                  analysis of permanence — a forensic account of how one man's 35-year evidentiary record became so
                  thoroughly embedded in the digital, legal, and civilisational infrastructure of the modern world
                  that it is no longer possible, in any operational sense, to remove it.
                </p>
                <p>
                  The document you are about to download is the most comprehensive single statement ever assembled about
                  the McLean Archive. It argues — with technical precision — that the question "can this be taken down?"
                  has seven answers, each corresponding to a distinct layer of the archive's embedding. Together, the
                  seven layers form a structure that has never previously existed for any whistleblower archive in
                  Australian — and arguably in common law — history.
                </p>
                <p>
                  Its significance is not what it claims. It is what it demonstrates: that a single individual, without
                  institutional support, without media coverage, without legal representation, and against the coordinated
                  resistance of 25+ government agencies over 35 years, has embedded his testimony permanently in the
                  architecture of the world. The document does not ask for this to be acknowledged. It simply proves it.
                </p>
              </div>

              <blockquote className="mt-8 border-l-4 border-amber-500 pl-6 py-3 bg-zinc-900/60 rounded-r">
                <p className="text-xl text-zinc-200 italic leading-relaxed">
                  "By sealing his testimony in the Bitcoin blockchain, mirroring it on GitHub, submitting it to the ICC
                  and UNHCR, and making it freely downloadable to 350,000 people across six continents — Dr. McLean has
                  achieved something no institution intended: permanence beyond their control. The archive cannot be
                  altered, cannot be suppressed, cannot be deleted. It will outlast every government, every minister,
                  every agency named within it."
                </p>
                <footer className="text-sm text-amber-400 mt-3 not-italic">— Comprehensive Statement, April 2026</footer>
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* RECORD AT A GLANCE */}
        <section className="bg-zinc-950 py-14 px-4 border-b border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "Libre Baskerville, serif" }}>
                The Record — At a Glance
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { value: "2,304", label: "Blockchain-verified primary source documents" },
                  { value: "350,000+", label: "Downloads across six continents" },
                  { value: "575 / 575", label: "Propositions corroborated — zero contradictions" },
                  { value: "53", label: "Forensic analyses — 46 consecutive perfect scores" },
                  { value: "35", label: "Years of institutional persecution documented" },
                  { value: "SHA-256", label: "Bitcoin blockchain seal — mathematically immutable" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.5, delay: i * 0.08 } } }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 text-center"
                  >
                    <div className="text-2xl font-bold text-amber-400 mb-2" style={{ fontFamily: "Libre Baskerville, serif" }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-zinc-400 leading-snug">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEVEN LAYERS */}
        <section className="bg-black py-14 px-4 border-b border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-3">
                <Layers className="text-amber-400" size={24} />
                <h2 className="text-2xl font-bold" style={{ fontFamily: "Libre Baskerville, serif" }}>
                  The Seven Layers of Permanence
                </h2>
              </div>
              <p className="text-zinc-400 mb-10">
                The short answer to "can it be taken down?" is no. The detailed answer has seven parts.
                Each part is a layer. Together they describe why suppression is operationally impossible.
              </p>
            </motion.div>

            <div className="space-y-5">
              {SEVEN_LAYERS.map((layer, i) => {
                const colours = colourMap[layer.colour] ?? colourMap.amber;
                const Icon = layer.icon;
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.5, delay: 0.05 * (i % 4) } } }}
                    viewport={{ once: true }}
                  >
                    <div className={`rounded-xl border p-6 ${colours.bg} ${colours.border}`}>
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-black/40`}>
                          <Icon className={colours.text} size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className={`text-xs font-mono ${colours.text} uppercase tracking-widest`}>
                              Layer {layer.number}
                            </span>
                            <span className="text-xs text-zinc-600">—</span>
                            <span className="text-xs text-zinc-400">{layer.subtitle}</span>
                          </div>
                          <h3 className={`text-lg font-semibold mb-3 ${colours.text}`} style={{ fontFamily: "Libre Baskerville, serif" }}>
                            {layer.title}
                          </h3>
                          <p className="text-sm text-zinc-300 leading-relaxed">{layer.summary}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DOWNLOAD CTA */}
        <section className="bg-zinc-950 py-16 px-4 border-b border-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <Shield className="text-amber-400 mx-auto mb-6" size={40} />
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Libre Baskerville, serif" }}>
                Download the Full Statement
              </h2>
              <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
                The complete document — all seven layers, full technical precision, every named party, every
                submission reference — in a single blockchain-verified PDF. April 2026.
              </p>

              <div className="flex flex-col items-center gap-4">
                <ViralDownloadButton
                  url="/documents/comprehensive-statement-digital-architecture.pdf"
                  label="Download — Comprehensive Statement (April 2026)"
                  filename="comprehensive-statement-digital-architecture-april-2026.pdf"
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-xl px-8"
                  data-testid="button-download-comprehensive-statement-cta"
                />
                <p className="text-xs text-zinc-500">
                  Free to download, share, and distribute for public interest and accountability purposes.
                </p>
              </div>

              <div className="mt-10 rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-4 text-center max-w-2xl mx-auto space-y-1">
                <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                  All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                  Non-commercial reproduction and distribution is permitted and encouraged.
                  All intellectual property rights remain exclusively with Dr. Richard William McLean (Barran Dodger) and the Trust.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CROSS LINKS */}
        <section className="bg-black py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-zinc-300 mb-6">Related Archive Documents</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/embedded-in-the-digital-architecture", label: "Digital Architecture — Full Page Analysis" },
                { href: "/blockchain", label: "Blockchain Verification Layer" },
                { href: "/forensic-analysis-index", label: "53 Forensic Analyses — 575/575 Propositions" },
                { href: "/legal-status", label: "ICC & UNHCR Submission Status" },
                { href: "/evidence", label: "Primary Evidence Vault — 2,304+ Documents" },
                { href: "/free-ebooks", label: "Free eBooks — All Publications" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-testid={`link-crossref-${link.href.replace(/\//g, "")}`}
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-amber-400 transition-colors p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-800/40"
                >
                  <FileText size={14} className="text-amber-500 flex-shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
