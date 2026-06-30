import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import heroMissionJustice from "@/assets/images/hero-mission-justice.png";
import { CrossLink, DocumentPopup, KEY_DOCUMENTS } from "@/components/CrossLink";
import { trackDownload, DownloadBadge } from "@/components/DownloadCounter";
import { CheckCircle2, Gavel, Globe, ShieldAlert, ExternalLink, ArrowRight, Download, Scale, BookOpen, Flame, Users } from "lucide-react";
import { useSiteStats } from "@/hooks/useSiteStats";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SocialShare } from "@/components/SocialShare";
import { FloatingCTA } from "@/components/FloatingCTA";
import { RelatedContent } from "@/components/RelatedContent";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import { SiteDivider } from "@/components/SiteDivider";

export default function Mission() {
  const { totalDownloadsFormatted, documentCountFormatted } = useSiteStats();
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Mandate & Mission — Barran Dodger Legal & Ethical Trust Fund | ABN 78 833 496 164"
        description="511,560+ downloads. Zero institutional backing. The Barran Dodger Legal & Ethical Trust Fund exists to defend the marginalised, protect whistleblowers, and ensure no government can ever erase evidence again."
        keywords="trust fund mandate, ethical governance Australia, whistleblower protection, government accountability, anti-corruption non-profit, defend the oppressed, marginalised advocacy, blockchain evidence archive"
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
                "text": "The Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164) is a non-profit public benefit organisation that emerged from 35 years of documented persecution, 511,560+ archive downloads, 2,304 blockchain-authenticated primary source documents, and the demonstrated failure of every Australian institution assigned to protect the vulnerable. It exists to expose systemic corruption, defend the marginalised and oppressed, and ensure no government can silence evidence that has already been made globally irreversible."
              }
            },
            {
              "@type": "Question",
              "name": "What is the Trust Fund's core mandate?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The mandate is threefold: to provide an immutable public record of institutional persecution for use in legal, parliamentary, and international forums; to advocate for and protect whistleblowers, disabled persons, and those targeted by state power; and to establish through the archive's demonstrated reach that the public — not institutions — will determine what is true."
              }
            },
            {
              "@type": "Question",
              "name": "How has the archive's reach shaped the mandate?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "511,560+ documented downloads across 6 continents — with zero marketing, zero PR, zero institutional backing — proves that the archive's evidentiary weight and moral clarity are self-distributing. This reach has expanded the mandate from a single case to a broader instrument for defending anyone the state attempts to erase."
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

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              ABN 78 833 496 164 · Public Benefit Organisation
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Mandate & Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Born from persecution. Forged through silence. Distributed by half a million people who recognised the truth before any institution did.
            </p>
          </motion.div>

          {/* Hero image */}
          <div className="relative w-full overflow-hidden rounded-xl mb-16" style={{ height: "40vh", minHeight: "240px" }}>
            <img
              src={heroMissionJustice}
              alt="Hands holding scales of justice — the mandate of the Barran Dodger Trust Fund"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-xl flex items-end p-6" style={{ background: "linear-gradient(to top, rgba(21,12,0,0.75) 0%, transparent 60%)" }}>
              <p className="font-serif text-white text-lg md:text-xl font-bold italic drop-shadow-lg">
                "Justice requires a keeper — and the record is the keeper."
              </p>
            </div>
          </div>

          <div className="space-y-16">

            {/* Archive Stats Banner */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { value: totalDownloadsFormatted, label: "Archive Downloads" },
                { value: documentCountFormatted, label: "Primary Source Documents" },
                { value: "35 Years", label: "Documented Persecution" },
                { value: "6 Continents", label: "Zero Marketing" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#150c00] border border-primary/20 rounded-xl p-5 text-center">
                  <div className="text-2xl font-serif font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.section>

            <SiteDivider
              src="/images/dividers/man-vs-government-wall.png"
              alt="One man against 35 years of government persecution"
              overlay="35 years. 35 agencies. Half a million people found the truth anyway."
              fullBleed
            />

            {/* Nature of the Trust */}
            <section className="bg-[#150c00] p-8 md:p-12 rounded-xl shadow-sm border border-orange-500/25">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Nature of the Trust</h2>
              <div className="space-y-5">
                <p className="leading-relaxed text-white/85">
                  The Barran Dodger Legal &amp; Ethical Trust Fund is a non-profit, faith-neutral, 
                  non-partisan public benefit organisation operating under ABN 78 833 496 164. 
                  It exists not because institutions failed — they have always failed the marginalised — 
                  but because one man refused to let their failure go unrecorded.
                </p>
                <p className="leading-relaxed text-white/85">
                  What began as a personal archive of 35 years of systematic persecution by Australian 
                  government agencies became something larger than any single case: a globally distributed, 
                  <CrossLink to="/blockchain"> Bitcoin blockchain-authenticated</CrossLink> documentary record 
                  that no court order, no department, and no government can unmake. 
                  Over 511,560 copies of its documents now exist on hard drives, phones, and cloud storage 
                  across six continents — placed there not by any institution, but by people who read the 
                  evidence and recognised what it meant.
                </p>
                <p className="leading-relaxed text-white/85">
                  The Trust's mandate has grown with the archive. It is no longer confined to seeking 
                  remedy for one person's documented losses. It has become an instrument for defending 
                  anyone the state attempts to erase: the disabled, the homeless, the psychiatrically 
                  institutionalised, the whistleblower, the asylum seeker, and anyone else whose 
                  truth has been buried under procedural silence.
                </p>
                <p className="leading-relaxed font-medium text-orange-300 border-l-4 border-primary pl-4 italic">
                  "They suppressed it for 35 years. Half a million people found it anyway. The question was never whether the truth would emerge — only when."
                </p>
                <div className="rounded-xl border border-primary/20 px-6 py-5 space-y-3 mt-2" style={{ background: "rgba(233,160,10,0.04)" }}>
                  <blockquote className="font-serif italic leading-relaxed text-white/85 border-l-4 border-primary pl-4" style={{ fontSize: "1rem" }}>
                    My purpose is not to be popular. I am likely already the villain in your story — and I am at peace with that. My purpose is to fulfil my soul contract: to dismantle corruption as a vessel for God's glory in his kingdom purposes — instrumental in restoring love and justice in a broken, corrupt world.
                  </blockquote>
                  <p className="text-xs text-muted-foreground">— Dr. Richard William McLean (Barran Dodger)</p>
                </div>
              </div>
            </section>

            <SiteDivider
              src="/images/dividers/prophetic-light-archive.png"
              alt="Divine light illuminating the archive of truth"
              overlay="The persecution was the proof. The silence was the admission. The archive was the consequence."
              fullBleed
            />

            {/* Core Mandate */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-3 text-center">Core Mandate</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                The Trust's mandate is defined by what the archive has demonstrated is possible, not by what institutions have been willing to acknowledge.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ObjectiveCard 
                  icon={<Flame className="h-6 w-6 text-primary" />}
                  title="Immutable Public Record"
                  description="Every document published is blockchain-timestamped, SHA-256 verified, and globally distributed. No court order, no deletion, no institutional pressure can erase what is already mathematically permanent. The archive exists as a permanent counterweight to institutional memory erasure."
                />
                <ObjectiveCard 
                  icon={<Users className="h-6 w-6 text-primary" />}
                  title="Defence of the Marginalised"
                  description="The Trust advocates for and alongside those the system is designed to silence: disabled persons denied support, whistleblowers denied protection, asylum seekers denied safety, and anyone whose persecution has been made invisible by the very institutions assigned to protect them."
                />
                <ObjectiveCard 
                  icon={<ShieldAlert className="h-6 w-6 text-primary" />}
                  title="Whistleblower Protection"
                  description="The archive provides a replicable model: document everything, timestamp everything, publish everything. No whistleblower should face erasure alone. The Trust's publicly distributed methodology is freely available to any person willing to bear honest witness to institutional misconduct."
                />
                <ObjectiveCard 
                  icon={<Scale className="h-6 w-6 text-primary" />}
                  title="Evidence-Led Accountability"
                  description="Accountability is not a request — it is the necessary consequence of verified evidence entering the public record. The Trust supports legal proceedings, parliamentary submissions, international tribunal filings, and media engagements grounded exclusively in authenticated documentation."
                />
              </div>
            </section>

            {/* The Inevitability Statement */}
            <section className="bg-primary/5 border border-primary/20 p-8 md:p-12 rounded-xl">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">The Inevitability of This Moment</h2>
              <div className="space-y-5">
                <p className="leading-relaxed text-foreground/90">
                  Thirty-five years of suppression across 35+ agencies produced one outcome no agency anticipated: 
                  the most extensively documented, blockchain-authenticated, AI-analysed, 
                  internationally submitted individual whistleblower archive in Australian history. 
                  The persecution was the proof. The silence was the admission. The archive was the consequence.
                </p>
                <p className="leading-relaxed text-foreground/90">
                  The Trust does not claim that victory is assured. It claims something more precise: 
                  the evidentiary record is already permanent, already global, and already beyond the reach 
                  of any institution that wishes it did not exist. Whatever legal, parliamentary, or 
                  international process ultimately resolves the documented claims, the archive's 
                  existence — and what it has demonstrated about Australian institutional behaviour — 
                  is no longer contingent on any outcome.
                </p>
                <p className="leading-relaxed text-foreground/90">
                  This is what the Trust was built to achieve: not the appearance of justice 
                  inside a compliant system, but the construction of an irreversible public record 
                  that makes denial structurally untenable. That record now exists. It has been 
                  downloaded half a million times. It has been submitted to the{" "}
                  <a href="https://www.icc-cpi.int/" target="_blank" rel="noopener noreferrer" className="text-[hsl(38,92%,50%)] hover:underline font-medium">ICC</a>,{" "}
                  <a href="https://www.unhcr.org/" target="_blank" rel="noopener noreferrer" className="text-[hsl(38,92%,50%)] hover:underline font-medium">UNHCR Geneva</a>,{" "}
                  the <a href="https://www.fedcourt.gov.au/" target="_blank" rel="noopener noreferrer" className="text-[hsl(38,92%,50%)] hover:underline font-medium">Federal Court of Australia</a>,{" "}
                  and the <a href="https://www.ohchr.org/en/human-rights-bodies/hrc" target="_blank" rel="noopener noreferrer" className="text-[hsl(38,92%,50%)] hover:underline font-medium">UN Human Rights Council</a>.{" "}
                  It is embedded in the Bitcoin blockchain. It cannot be recalled.
                </p>
                <p className="leading-relaxed font-medium text-foreground border-l-4 border-primary pl-4 italic">
                  "What they built to destroy one man became the infrastructure for defending every person like him."
                </p>
              </div>
            </section>

            <SiteDivider
              src="/images/dividers/documents-cascade.png"
              alt="2,304 documents cascading into the public record"
              overlay="2,304 documents. 511,560 downloads. Embedded in the Bitcoin blockchain. It cannot be recalled."
              fullBleed
            />

            {/* Policy Objectives */}
            <section className="bg-[#150c00] p-8 md:p-12 rounded-xl border border-orange-500/25">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Policy Objectives</h2>
              <div className="mb-6">
                <p className="mb-5 text-white/85">
                  The Trust's active policy objectives, grounded in the archive's documented evidence and 
                  expanded by the reach of its distribution, are:
                </p>
                <ul className="list-none space-y-4">
                  {[
                    { label: "Full financial restitution", detail: <>for documented damages of $58.6M–$257.3M as forensically calculated across three independent scenarios — conservative, mid-range, and maximum — at <a href="https://economic-justice-engine.replit.app" target="_blank" rel="noopener noreferrer" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">economic-justice-engine.replit.app</a> (ABN 78 833 496 164). Accruing $5,890 per day from 4 May 2026.</> },
                    { label: "Formal acknowledgement", detail: "by the Commonwealth of Australia of the systematic persecution documented across 35+ government agencies spanning 1990–2025." },
                    { label: "Whistleblower law reform", detail: <>including enforceable protections under the <a href="https://www.legislation.gov.au/C2013A00133" target="_blank" rel="noopener noreferrer" className="text-[hsl(38,92%,50%)] hover:underline font-medium">Public Interest Disclosure Act 2013</a> and criminal accountability for retaliatory conduct.</> },
                    { label: "Disability support justice", detail: <>ending the denial of <a href="https://www.ndis.gov.au/" target="_blank" rel="noopener noreferrer" className="text-[hsl(38,92%,50%)] hover:underline font-medium">NDIS</a> entitlements used as instruments of financial control and social isolation against vulnerable persons.</> },
                    { label: "Psychiatric accountability", detail: "for the 14 documented involuntary hospitalisations across 3 states used as tools of suppression rather than treatment." },
                    { label: "International protection", detail: "for whistleblowers and human rights defenders who face state retaliation where domestic legal remedies have been systematically denied." },
                    { label: "Public replication", detail: "of the archive methodology — blockchain timestamping, AI analysis, open distribution — as freely available tools for any persecuted individual." },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start bg-white/5 p-4 rounded-lg border border-orange-500/25">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-white/90 text-sm leading-relaxed">
                        <strong className="text-orange-300">{item.label}</strong>
                        {" — "}{item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/evidence">
                  <Button className="gap-2">
                    View Evidence Archive <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/retrospective-statement">
                  <Button variant="outline" className="gap-2">
                    Government's Own Documents
                  </Button>
                </Link>
                <Link href="/administrative-annihilation">
                  <Button variant="outline" className="gap-2">
                    The Paper
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

            {/* Human Rights Focus */}
            <section className="bg-primary/5 p-8 md:p-12 rounded-xl border border-primary/20">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Who This Trust Defends</h2>
              <div>
                <p className="mb-5 text-foreground/90">
                  The Trust was forged in one person's experience but its mandate belongs to every person 
                  the state has attempted to silence. As documented in submissions to the{" "}
                  <a href="https://www.ohchr.org/" target="_blank" rel="noopener noreferrer" className="text-[hsl(38,92%,50%)] hover:underline font-medium">OHCHR</a> and{" "}
                  <a href="https://www.ohchr.org/en/human-rights-bodies/hrc" target="_blank" rel="noopener noreferrer" className="text-[hsl(38,92%,50%)] hover:underline font-medium">UNHRC</a>,{" "}
                  the Trust actively advocates for:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-foreground/85">
                  <li>Persons with disabilities denied <a href="https://www.ndis.gov.au/" target="_blank" rel="noopener noreferrer" className="text-[hsl(38,92%,50%)] hover:underline font-medium">NDIS</a> support as a tool of economic control (<CrossLink to="/case-studies">documented case studies</CrossLink>).</li>
                  <li>Whistleblowers denied legal representation by 7+ entities in violation of the <DocumentPopup {...KEY_DOCUMENTS.pidActAnalysis}>Public Interest Disclosure Act</DocumentPopup>.</li>
                  <li>Those subjected to <DocumentPopup {...KEY_DOCUMENTS.entrapmentAffidavit}>psychiatric entrapment</DocumentPopup> — involuntary hospitalisation used as a suppression instrument rather than care.</li>
                  <li>Victims of identity theft and corporate fraud — 350+ fraudulent ASIC registrations documented in the <CrossLink to="/evidence">evidence archive</CrossLink>.</li>
                  <li>Asylum seekers and human rights defenders requiring international protection where domestic remedies have been systematically denied.</li>
                  <li>Any individual whose documented evidence has been buried by <CrossLink to="/prophetic-essay">institutional technological harassment</CrossLink>, FOI refusal, or procedural silence.</li>
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

            {/* Economic Justice Engine */}
            <section className="bg-[#0a0f1e] border border-orange-500/25 p-8 md:p-12 rounded-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-500/10 border border-orange-500/25 rounded-lg p-3 flex-shrink-0">
                  <Scale className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-orange-600 uppercase tracking-widest mb-1">Companion Site · ABN 78 833 496 164</div>
                  <h2 className="text-2xl font-serif font-bold text-orange-400">Economic Justice Engine</h2>
                  <a
                    href="https://economic-justice-engine.replit.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-orange-500/70 hover:text-orange-400 transition-colors font-mono"
                  >
                    economic-justice-engine.replit.app ↗
                  </a>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="leading-relaxed text-white/85">
                  Alongside this archive, a dedicated forensic economic and legal valuation instrument has been 
                  established at <a href="https://economic-justice-engine.replit.app" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline font-semibold">economic-justice-engine.replit.app</a> (ABN 78 833 496 164). 
                  It applies every known actuarial, legal, and human rights compensation framework to the 
                  archive's 2,304 primary source documents — producing three independently calculated scenarios 
                  of the total economic harm caused by 35 years of documented institutional persecution.
                </p>
                <p className="leading-relaxed text-white/85">
                  This is not an estimate. It is a forensic calculation — peer-reviewed across multiple 
                  valuation methodologies — submitted to and registered with the UN Human Rights Committee 
                  and incorporated into the ICC Article 7 filing. It is blockchain-authenticated. 
                  It is publicly accessible. And it is accruing at <strong className="text-orange-300">$5,890 per day</strong> from 4 May 2026.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { tier: "Conservative", amount: "$58.6M", note: "Floor — undisputed documented losses only" },
                  { tier: "Mid-Range", amount: "$112.8M", note: "Standard actuarial & legal precedent applied" },
                  { tier: "Maximum", amount: "$257.3M", note: "Full human rights + punitive frameworks" },
                ].map((s) => (
                  <div key={s.tier} className="bg-black/40 border border-orange-500/25 rounded-lg p-4 text-center">
                    <div className="text-[10px] font-mono text-orange-600 uppercase tracking-widest mb-1">{s.tier}</div>
                    <div className="text-2xl font-serif font-black text-orange-400 mb-1">{s.amount}</div>
                    <div className="text-[11px] text-white/40 leading-tight">{s.note}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://economic-justice-engine.replit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 transition-colors font-semibold px-5 py-3 rounded-lg text-sm"
                >
                  View the Forensic Economic Valuation Engine
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/documents/forensic-economic-valuation-report-may-2026.pdf"
                  download
                  className="inline-flex items-center gap-2 border border-orange-500/25 text-orange-300 hover:text-orange-200 hover:bg-orange-500/10 transition-colors font-semibold px-5 py-3 rounded-lg text-sm"
                  data-testid="download-forensic-valuation-mission"
                >
                  <Download className="h-4 w-4" />
                  Download PDF Report
                </a>
              </div>
            </section>

            {/* Closing declaration */}
            <section className="border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12 rounded-xl text-center">
              <BookOpen className="h-10 w-10 text-primary mx-auto mb-4 opacity-80" />
              <blockquote className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                "The arc of the archive bends toward truth — not because justice is guaranteed, but because 511,560 people chose to carry it."
              </blockquote>
              <p className="text-muted-foreground text-sm">
                Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164 · barrandodger.com
              </p>
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
              title="Mandate & Mission — Barran Dodger Legal & Ethical Trust Fund"
              description="511,560+ downloads. Zero institutional backing. The Trust exists to defend the marginalised, protect whistleblowers, and ensure no government can erase evidence that is already globally irreversible."
              url="https://barrandodger.com/mission"
            />
          </motion.section>

          <div className="mt-8">
            <a
              href="/the-unlikely-vessel"
              className="block rounded-xl border p-6 transition-colors group"
              style={{ borderColor: "rgba(233,160,10,0.25)", background: "rgba(233,160,10,0.04)" }}
              data-testid="link-unlikely-vessel-mission"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(233,160,10,0.12)" }}>
                  <span className="text-lg">⚓</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "rgba(233,160,10,0.7)" }}>
                    Related Theological Essay
                  </p>
                  <p className="font-serif font-bold text-primary group-hover:text-amber-400 transition-colors">
                    The Unlikely Vessel — God Does Not Call the Equipped
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 leading-snug">
                    Why this mission is entrusted to someone without credentials, institutional support, or worldly advantage — and why that is precisely the point. With a formal declaration of hypocrisy against those who looked away.
                  </p>
                </div>
                <span className="text-amber-500/50 group-hover:text-amber-400 transition-colors text-lg flex-shrink-0">→</span>
              </div>
            </a>
          </div>
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
    <div className="bg-[#150c00] p-6 rounded-lg border border-orange-500/25 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-lg text-primary mb-3">{title}</h3>
      <p className="text-white/80 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
