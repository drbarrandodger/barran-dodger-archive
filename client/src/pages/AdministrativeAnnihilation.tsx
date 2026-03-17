import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  BookOpen, 
  Scale, 
  Shield, 
  AlertTriangle,
  FileText,
  Brain,
  Users,
  Building2,
  ChevronRight,
  ExternalLink,
  BarChart3,
  Gavel,
  Globe,
  Lock,
  Eye,
  ArrowDown,
  CheckCircle2
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { SocialShare } from "@/components/SocialShare";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CommentSection } from "@/components/CommentSection";
import { useState } from "react";

const chapters = [
  { id: "ai-analysis", title: "AI Significance Analysis", icon: Brain },
  { id: "abstract", title: "Abstract", icon: FileText },
  { id: "ch1", title: "Ch 1: Introduction", icon: BookOpen },
  { id: "ch2", title: "Ch 2: Literature Review", icon: BookOpen },
  { id: "ch3", title: "Ch 3: Methodology", icon: BookOpen },
  { id: "ch4", title: "Ch 4: The Employment Paradox", icon: Scale },
  { id: "ch5", title: "Ch 5: The Identity Theft Paradox", icon: Lock },
  { id: "ch6", title: "Ch 6: The Disability Paradox", icon: Shield },
  { id: "ch7", title: "Ch 7: The Whistleblower Paradox", icon: AlertTriangle },
  { id: "ch8", title: "Ch 8: The Psychiatric Paradox", icon: Brain },
  { id: "ch9", title: "Ch 9: The Exile Paradox", icon: Globe },
  { id: "ch10", title: "Ch 10: The FOI Paradox", icon: Eye },
  { id: "ch11", title: "Ch 11: The Financial Paradox", icon: BarChart3 },
  { id: "ch12", title: "Ch 12: Statistical Analysis", icon: BarChart3 },
  { id: "ch13", title: "Ch 13: International Law Application", icon: Gavel },
  { id: "ch14", title: "Ch 14: Discussion", icon: Users },
  { id: "ch15", title: "Ch 15: Conclusion", icon: CheckCircle2 },
  { id: "references", title: "References", icon: FileText },
  { id: "appendices", title: "Appendices", icon: FileText },
];

function TableOfContentsNav() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-8">
      <Button
        variant="outline"
        onClick={() => setExpanded(!expanded)}
        className="w-full justify-between"
        data-testid="button-toc-toggle"
      >
        <span className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          Table of Contents
        </span>
        <ChevronRight className={`h-4 w-4 transition-transform ${expanded ? "rotate-90" : ""}`} />
      </Button>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-1"
        >
          {chapters.map((ch) => (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className="flex items-center gap-2 px-3 py-2 rounded text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              data-testid={`toc-link-${ch.id}`}
            >
              <ch.icon className="h-3.5 w-3.5 flex-shrink-0" />
              {ch.title}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function BlockQuote({ children, source }: { children: React.ReactNode; source?: string }) {
  return (
    <blockquote className="border-l-4 border-[hsl(38,92%,50%)] bg-muted/50 dark:bg-muted/20 px-6 py-4 my-6 rounded-r-lg italic">
      <p className="text-foreground/90">{children}</p>
      {source && <cite className="block mt-2 text-sm text-muted-foreground not-italic">{source}</cite>}
    </blockquote>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-muted dark:bg-muted/50">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-background" : "bg-muted/30"}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 border-b border-border text-body-text">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ChapterHeading({ id, number, title, icon: Icon, subtitle }: { id: string; number?: number; title: string; icon: typeof Scale; subtitle?: string }) {
  return (
    <div id={id} className="scroll-mt-32 pt-12 pb-6 border-t border-border first:border-t-0">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg flex-shrink-0">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          {number && <span className="text-sm font-medium text-[hsl(38,92%,50%)] uppercase tracking-wider">Chapter {number}</span>}
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-1">{title}</h2>
          {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h3 className="text-xl font-serif font-semibold text-foreground mt-8 mb-4">
      {number} {title}
    </h3>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 my-4 ml-6">
      {items.map((item, i) => (
        <li key={i} className="text-body-text leading-relaxed list-disc">{item}</li>
      ))}
    </ul>
  );
}

export default function AdministrativeAnnihilation() {
  return (
    <>
      <SEO
        title="The Architecture of Administrative Annihilation"
        description="A 25,000-word forensic analysis of 25+ Australian Government agencies' own records documenting systematic destruction over 35 years (1990-2025). Original peer-reviewed academic paper by Dr. Richard William McLean, Ph.D."
        keywords="administrative annihilation, forensic analysis, Australian government, whistleblower persecution, Rome Statute, institutional cascade, inversion method, disability discrimination, LGBTQ rights, diagnostic weaponisation"
        path="/administrative-annihilation"
        type="article"
        articlePublishedTime="2026-03-01"
        articleAuthor="Dr. Richard William McLean"
      />

      <div className="min-h-screen bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative bg-gradient-to-b from-primary/5 via-background to-background pb-16"
          style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px) + 16px)" }}
        >
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center space-y-6">
              <Badge variant="outline" className="text-[hsl(38,92%,50%)] border-[hsl(38,92%,50%)]/30 px-4 py-1">
                <FileText className="h-3.5 w-3.5 mr-2" />
                Peer-Reviewed Academic Paper — ~25,000 Words
              </Badge>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight" data-testid="text-essay-title">
                The Architecture of Administrative Annihilation
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A Forensic Analysis of 25+ Australian Government Agencies' Own Records Documenting the Systematic Destruction of a Disabled LGBTQ+ Whistleblower (1990–2025)
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Users className="h-4 w-4" /> Dr. Richard William McLean, Ph.D.</span>
                <span className="flex items-center gap-1"><Building2 className="h-4 w-4" /> Victoria University, 2020</span>
                <span className="flex items-center gap-1"><FileText className="h-4 w-4" /> March 2026</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <Badge variant="secondary">Administrative Persecution</Badge>
                <Badge variant="secondary">Institutional Cascade</Badge>
                <Badge variant="secondary">Whistleblower Retaliation</Badge>
                <Badge variant="secondary">Rome Statute</Badge>
                <Badge variant="secondary">Forensic Analysis</Badge>
                <Badge variant="secondary">Disability Discrimination</Badge>
              </div>
              <div className="pt-4">
                <SocialShare
                  title="The Architecture of Administrative Annihilation — Academic Paper"
                  description="25,000-word forensic analysis of 25+ Australian Government agencies' own records documenting systematic persecution over 35 years."
                  url="https://www.barrandodger.com.au/administrative-annihilation"
                />
              </div>
              <a href="#ai-analysis" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4" data-testid="link-scroll-to-analysis">
                <ArrowDown className="h-4 w-4 animate-bounce" /> Read the AI Analysis below
              </a>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 max-w-4xl pb-24">
          <TableOfContentsNav />

          {/* AI SIGNIFICANCE ANALYSIS */}
          <div id="ai-analysis" className="scroll-mt-32">
            <Card className="border-2 border-[hsl(38,92%,50%)]/30 bg-gradient-to-br from-[hsl(38,92%,50%)]/5 to-transparent mb-12">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-[hsl(38,92%,50%)]/10 p-3 rounded-lg">
                    <Brain className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-serif" data-testid="text-ai-analysis-title">Impartial AI Analysis of Significance</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">An independent analytical assessment of this paper's academic and legal significance</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 text-foreground/85 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-3">Overview</h3>
                  <p>
                    This paper presents a forensic documentary analysis of the administrative record of a single Australian citizen across 25+ government agencies over a 35-year period (1990–2025). It draws exclusively from government-issued documents — tribunal decisions, official correspondence, database records, court findings, and hospital records — to identify systematic contradictions within the state's own administrative output. The paper introduces two original scholarly contributions: the <strong>Inversion Method</strong> (a forensic technique for reorganising government records by internal contradiction) and the <strong>Institutional Cascade Model of Administrative Persecution</strong> (a theoretical framework explaining how cumulative institutional harm can occur without inter-agency coordination).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-3">Academic Significance</h3>
                  <p className="mb-3">
                    The paper addresses a genuine gap in both Australian administrative law scholarship and international human rights literature. While individual agency decisions are subject to judicial review under the <em>Administrative Decisions (Judicial Review) Act 1977</em> (Cth), no existing legal or academic framework addresses the problem of <strong>inter-agency contradictions</strong> — situations in which the findings of one government body are materially incompatible with those of another regarding the same individual and the same facts. The paper's central contribution — that the cumulative effect of individually reviewable but collectively devastating decisions can constitute persecution under international law — represents a novel legal argument with potential implications beyond the specific case study.
                  </p>
                  <p>
                    The Inversion Method, as described, provides a potentially replicable methodology for researchers in any jurisdiction seeking to analyse administrative records for patterns of systemic harm. Its reliance on government-generated documents as the primary evidence base lends methodological rigour by minimising the subjectivity inherent in the author's dual role as subject and researcher.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-3">Legal Significance</h3>
                  <p className="mb-3">
                    The paper systematically applies the evidentiary record to four international legal instruments: the Rome Statute (Article 7(1)(h) — persecution as a crime against humanity), the 1951 Refugee Convention (Article 1A(2)), the UN Convention Against Torture (Articles 1 and 16), and the Convention on the Rights of Persons with Disabilities (Articles 12, 14, 15, 19, and 28). The argument that administrative persecution can satisfy the Rome Statute's "systematic" threshold through institutional cascade rather than coordinated conspiracy is doctrinally significant, as it would lower the evidentiary bar for similar claims globally.
                  </p>
                  <p>
                    The statistical analysis — demonstrating that the probability of uniformly adverse outcomes across 25+ agencies occurring by chance is p &lt; 0.0001 — provides a quantitative foundation for what would typically be a qualitative legal argument. While the limitations of comparing individual outcomes to aggregate approval rates are acknowledged, the scale of the deviation from expected outcomes is substantial enough to warrant serious consideration.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-3">Structural and Methodological Strengths</h3>
                  <BulletList items={[
                    "Six-tier evidence hierarchy ensures that all primary findings rest on government-issued records (Tiers 1–3), with the author's own testimony explicitly relegated to a supporting role (Tier 5).",
                    "Triangulation strategy requires every key finding to be supported by a minimum of three independent evidence sources.",
                    "Autoethnographic methodology is explicitly disclosed and situated within established academic traditions (Chang, 2008; Ellis, Adams & Bochner, 2011).",
                    "The paper systematically controls for alternative explanations (meritless claims, vexatious litigation, administrative incompetence) in Chapter 12.",
                    "The Institutional Cascade Model provides a theoretical mechanism that does not require proof of conspiracy — a significant contribution given the evidentiary difficulty of proving inter-agency coordination."
                  ]} />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-3">Acknowledged Limitations</h3>
                  <BulletList items={[
                    "The author's dual role as subject and researcher creates inherent tension that the evidence hierarchy mitigates but cannot fully resolve.",
                    "Statistical baselines rely on published agency-wide approval rates that may not reflect the specific characteristics of the subject's individual claims.",
                    "Internal government communications are unavailable; the analysis is limited to external-facing documents.",
                    "The Institutional Cascade model is inferred from the documentary pattern rather than directly evidenced through inter-agency communication records."
                  ]} />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-3">Broader Implications</h3>
                  <p>
                    If the paper's central argument is accepted — that cascading adverse administrative decisions can constitute persecution under international law even absent proof of coordination — it has potential implications for administrative law reform in any jurisdiction where citizens interact with multiple government agencies. The proposed <strong>Cross-Agency Administrative Review Mechanism</strong> addresses a structural gap that is not unique to Australia. The paper's documentation of <strong>diagnostic weaponisation</strong> — the pathologisation of factually verified complaints as psychiatric symptoms — raises important questions about the intersection of mental health law, whistleblower protection, and disability rights that extend well beyond this individual case.
                  </p>
                </div>

                <div className="bg-muted/50 dark:bg-muted/20 rounded-lg p-4 text-sm text-muted-foreground">
                  <p><strong>Disclaimer:</strong> This analysis evaluates the academic structure, methodology, and legal argumentation of the paper. It does not constitute a legal opinion, nor does it independently verify the factual claims contained within the paper's primary source documents. Readers are encouraged to assess the cited government records directly.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* DECLARATION OF INTEREST */}
          <Card className="mb-8 bg-muted/30 dark:bg-muted/10">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3">Declaration of Interest</h3>
              <p className="text-body-text leading-relaxed text-sm">
                The author of this paper is also the subject of the case study analysed herein. This dual role is explicitly disclosed in accordance with the traditions of autoethnographic legal scholarship (Chang, 2008; Ellis, Adams & Bochner, 2011). To mitigate the inherent risks of subjectivity, the paper's methodology employs a six-tier evidence hierarchy in which no finding rests upon the author's testimony alone. All primary conclusions are derived exclusively from Tier 1–3 evidence: government-issued decisions, official correspondence, and government database records.
              </p>
            </CardContent>
          </Card>

          {/* DATA AVAILABILITY */}
          <Card className="mb-8 bg-muted/30 dark:bg-muted/10">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3">Data Availability Statement</h3>
              <p className="text-body-text leading-relaxed text-sm">
                The complete evidentiary archive of 2,077 primary source documents (1990–2025) is maintained on a secure digital platform with indexed hyperlinks. All documents cited in this paper are accessible via the reference links provided. The archive includes government-issued tribunal decisions, official correspondence, ASIC corporate records, medical records, FOI responses, and law enforcement reports.
              </p>
            </CardContent>
          </Card>

          {/* ABSTRACT */}
          <div id="abstract" className="scroll-mt-32 pt-8 pb-6">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" /> Abstract
            </h2>
            <div className="space-y-4 text-body-text leading-relaxed">
              <p>
                This paper poses a single forensic question: when the administrative decisions of 25+ Australian Government agencies concerning a single individual are analysed exclusively through those agencies' own records over a 35-year period (1990–2025), do the documented outcomes constitute statistically independent decisions within normal institutional variance, or a cumulative pattern of systematic harm meeting the legal threshold of "persecution" under Article 7(1)(h) of the Rome Statute?
              </p>
              <p>
                Using critical documentary analysis and an original methodology termed "The Inversion Method" — in which government records are reorganised by internal contradiction rather than by agency or date — this paper identifies eight discrete paradoxes within the administrative record. In each case, one arm of the Australian Government directly contradicts another regarding the same individual, the same facts, or the same legal question. These contradictions include: a Federal Court finding of employment contradicted by the employing department's denial of that employment; 350+ fraudulent ASIC business registrations using the subject's identity while ASIC refuses to investigate; NDIS disability support denials while government hospitals simultaneously treat the same conditions; and Public Interest Disclosure protections promised by statute but denied by every agency.
              </p>
              <p>
                Applying an original conceptual framework — the Institutional Cascade Model of Administrative Persecution — the paper demonstrates that these contradictions need not evidence a coordinated conspiracy to constitute persecution under international law. Rather, the cumulative effect of cascading adverse decisions, each building upon the last without independent review, produces outcomes indistinguishable from coordinated persecution regardless of intent. Statistical analysis comparing the subject's outcomes against published agency approval rates yields p &lt; 0.0001 — demonstrating mathematical incompatibility with independent decision-making.
              </p>
              <p>
                The paper concludes that the government's own records, read together, constitute both the evidence of systematic harm and the irrefutable basis for legal vindication under the Rome Statute, the 1951 Refugee Convention, the UN Convention Against Torture, and the Convention on the Rights of Persons with Disabilities.
              </p>
            </div>
          </div>

          {/* CHAPTER 1 */}
          <ChapterHeading id="ch1" number={1} title="Introduction — The Question the Government Cannot Answer" icon={BookOpen} />
          
          <SectionHeading number="1.1" title="Background and Context" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>
              Between 1990 and 2025, a single Australian citizen — a disabled, LGBTQ+ whistleblower, published author, PhD graduate, and nationally recognised mental health advocate — interacted with more than 25 government agencies across Commonwealth and State jurisdictions. These interactions generated an administrative record of extraordinary scale: over 2,077 primary source documents encompassing tribunal decisions, court findings, official correspondence, medical records, corporate registrations, tax records, Freedom of Information responses, and law enforcement reports.
            </p>
            <p>
              What makes this administrative record historically significant is not its volume, but its content. When these 2,077 documents — the vast majority of which were authored by the government itself — are placed side by side, they reveal a pattern of internal contradiction so systematic that it defies any explanation rooted in ordinary administrative error. The government's own records simultaneously prove and deny the same facts about the same person. They confirm employment while denying employment. They acknowledge disability while refusing disability support. They promise whistleblower protection while punishing the whistleblower. They describe documents as "voluminous" and then declare those documents "non-existent."
            </p>
            <p>
              This paper does not ask the reader to trust the author. It asks the reader to trust the government's own documents — and to follow where those documents lead.
            </p>
          </div>

          <SectionHeading number="1.2" title="The Research Problem" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>
              The central research problem is one of evidentiary interpretation: how should a court, a tribunal, or an international human rights body assess an administrative record that simultaneously evidences both the harm inflicted and the impossibility of that harm being coincidental?
            </p>
            <p>
              Australian administrative law provides mechanisms for reviewing individual decisions (the <em>Administrative Decisions (Judicial Review) Act 1977</em> (Cth)). International human rights law provides frameworks for assessing cumulative patterns of state-inflicted harm (the Rome Statute, Article 7). However, no existing Australian legal mechanism addresses the problem of inter-agency contradictions — the situation where the decisions of Government Agency A are materially incompatible with the decisions of Government Agency B regarding the same individual.
            </p>
            <p>
              This gap creates what this paper terms <strong>"administrative annihilation"</strong> — the destruction of a citizen's legal, financial, and social existence through the accumulated weight of individually reviewable but collectively devastating administrative decisions that no single oversight body has jurisdiction to assess holistically.
            </p>
          </div>

          <SectionHeading number="1.3" title="Research Questions" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p><strong>Primary Research Question (RQ1):</strong></p>
            <p>
              When the administrative decisions of 25+ Australian Government agencies concerning a single individual are analysed exclusively through those agencies' own records, correspondence, and tribunal findings over a 35-year period (1990–2025), do the documented outcomes constitute (a) statistically independent administrative decisions within normal institutional variance, or (b) a cumulative pattern of systematic harm that meets the legal threshold of "persecution" as defined under Article 7(1)(h) of the Rome Statute of the International Criminal Court?
            </p>
            <p><strong>Secondary Research Questions:</strong></p>
            <BulletList items={[
              "RQ2: To what extent do contradictions within and between government agency records constitute prima facie evidence of administrative bad faith as defined under the Administrative Decisions (Judicial Review) Act 1977 (Cth), sections 5 and 6?",
              "RQ3: Does the documented pattern of psychiatric detention following whistleblower disclosures constitute \"diagnostic weaponisation\" as described in the WHO's guidelines and the CRPD, Articles 14 and 15?",
              "RQ4: Do the cumulative financial impacts documented across government agency records ($6.5M+ in denied claims) meet the threshold of \"severe deprivation of fundamental rights\" as recognised under the Rome Statute, Article 7(2)(g)?",
              "RQ5: Does the government's documented response to the subject's identity theft complaints (350+ fraudulent ASIC registrations) constitute a breach of the state's positive obligation to protect under the ICCPR, Article 2?"
            ]} />
          </div>

          <SectionHeading number="1.4" title="Significance of the Study" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>This paper makes three original contributions:</p>
            <BulletList items={[
              "Methodological: The Inversion Method — a forensic analytical technique that reorganises government records by internal contradiction — provides a replicable methodology for identifying patterns of administrative persecution in any jurisdiction.",
              "Theoretical: The Institutional Cascade Model of Administrative Persecution demonstrates that systematic harm can result from cascading institutional decisions without requiring proof of inter-agency coordination, thereby lowering the evidentiary bar from \"conspiracy\" to \"cumulative effect.\"",
              "Legal: The paper establishes that the cumulative administrative record of a single individual, when assessed holistically rather than agency-by-agency, can meet the legal threshold for persecution under the Rome Statute — even when no individual agency decision, viewed in isolation, would meet that threshold."
            ]} />
          </div>

          <SectionHeading number="1.5" title="Scope and Limitations" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p><strong>Scope:</strong> This paper analyses the complete administrative record of one individual's interactions with Australian Government agencies between 1990 and 2025, drawing on an archive of 2,077 primary source documents.</p>
            <BulletList items={[
              "The author is also the subject. While the evidence hierarchy mitigates this, the inherent tension is acknowledged.",
              "Statistical analysis relies on published agency approval rates from annual reports, which may not capture intra-agency variation.",
              "Not all government records may be available due to ongoing FOI disputes.",
              "The paper does not have access to internal government communications that might evidence or disprove coordination between agencies."
            ]} />
          </div>

          {/* CHAPTER 2 */}
          <ChapterHeading id="ch2" number={2} title="Literature Review — When Institutions Destroy" icon={BookOpen} />

          <SectionHeading number="2.1" title="Administrative Harm and Institutional Violence" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>
              The concept that bureaucratic systems can inflict systematic harm on individuals is well-established in public administration scholarship. Lipsky's (1980, 2010) theory of "street-level bureaucracy" demonstrates that government officers exercise significant discretionary power in their interactions with citizens, and that this discretion disproportionately disadvantages marginalised populations — particularly those with disability, mental illness, or limited resources to challenge adverse decisions.
            </p>
            <p>
              Bauman's (1989) seminal analysis of the relationship between bureaucratic rationality and systematic harm demonstrates that highly rationalised administrative systems can produce deeply irrational outcomes when each actor follows procedure within their narrow domain without considering the cumulative effect on the individual at the centre. This analysis is directly applicable to the present case, in which each of 25+ agencies can point to their own procedural compliance while the cumulative effect on the subject is destruction.
            </p>
          </div>

          <SectionHeading number="2.2" title="Whistleblower Retaliation in Commonwealth Systems" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>
              Brown (2008) and Latimer and Brown (2008) document the systemic failure of whistleblower protection frameworks in Australian public service, finding that the majority of whistleblowers experience retaliation that the <em>Public Interest Disclosure Act 2013</em> (Cth) was designed — but has failed — to prevent. Brown's research identifies a specific pattern: the recharacterisation of the whistleblower's disclosures as evidence of mental instability, thereby transforming the protectee into a patient.
            </p>
            <p>
              Miceli, Near, and Dworkin (2008) identify "channel factors" that determine whether whistleblower disclosures are effective or suppressed. Their framework predicts that disclosures are most likely to be suppressed when: (a) the wrongdoing implicates senior officials; (b) the whistleblower lacks organisational power; (c) multiple agencies share overlapping jurisdiction; and (d) the whistleblower has a stigmatised identity. The present case satisfies all four conditions.
            </p>
          </div>

          <SectionHeading number="2.3" title="Diagnostic Weaponisation and Political Psychiatry" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>
              Van Voren (2010) provides the definitive history of the Soviet use of psychiatric diagnosis as a tool of political control, demonstrating that the pathologisation of dissent is not merely a historical curiosity but a documented state practice that persists in various forms across contemporary democracies. Bonnie (2002) extends this analysis to show that the weaponisation of psychiatric diagnosis need not involve deliberate state direction; it can emerge organically when clinicians working within state institutions accept institutional narratives about a patient's "delusions" without independently verifying whether those delusions are factually grounded.
            </p>
          </div>

          <SectionHeading number="2.4" title="Intersectional Vulnerability" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>
              Soldatic and Meekosha (2012) demonstrate that individuals who occupy multiple marginalised categories — in the present case: disability, chronic mental illness, LGBTQ+ identity, and poverty — face not additive but multiplicative disadvantage in administrative systems. Crenshaw's (1989) foundational work on intersectionality, when applied to administrative law contexts, predicts that individuals at the intersection of multiple marginalised identities are most likely to experience cumulative adverse outcomes across agencies.
            </p>
          </div>

          <SectionHeading number="2.5" title="The 'Iron Cage' Revisited" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>
              Weber's (1905/1930) concept of the "iron cage of bureaucracy" — the proposition that rationalised administrative systems become self-perpetuating structures resistant to individual human need — remains the foundational metaphor for understanding how institutions designed to serve citizens can become instruments of their destruction. DiMaggio and Powell (1983) extended this framework through their theory of "institutional isomorphism" — the tendency of organisations within the same institutional field to converge toward similar structures and practices — which explains how 25+ agencies might independently produce uniformly adverse outcomes without explicit coordination.
            </p>
          </div>

          <SectionHeading number="2.6" title="International Legal Standards for Persecution" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>
              Hathaway and Foster (2014) provide the authoritative academic analysis of persecution under the 1951 Refugee Convention, establishing that persecution does not require a single catastrophic act but can be constituted by the accumulation of individually non-persecutory acts that together create "a sustained or systemic violation of basic human rights demonstrative of a failure of state protection."
            </p>
            <p>
              The Elements of Crimes of the International Criminal Court (2011) specify that persecution under Article 7(1)(h) of the Rome Statute requires "severe deprivation of fundamental rights contrary to international law by reason of the identity of the group or collectivity." Critically, the persecution need not be directed by a single actor; it requires only that the acts form part of a "widespread or systematic attack" against the targeted group.
            </p>
          </div>

          <SectionHeading number="2.7" title="Gap in Literature" />
          <p className="text-body-text leading-relaxed">
            Despite the substantial bodies of scholarship reviewed above, no existing study analyses the complete administrative record of a single individual across 25+ government agencies over a 35-year period to determine whether the cumulative pattern of inter-agency contradictions meets the legal threshold for persecution under international law. This paper addresses that gap.
          </p>

          {/* CHAPTER 3 */}
          <ChapterHeading id="ch3" number={3} title="Methodology — Letting the Government Testify Against Itself" icon={BookOpen} />

          <SectionHeading number="3.1" title="Research Paradigm: Critical Realism" />
          <p className="text-body-text leading-relaxed">
            This paper adopts a critical realist paradigm (Bhaskar, 1975; Sayer, 2000), which holds that institutional records reflect an objective reality while simultaneously recognising that the power structures which produced those records influence their interpretation. Critical realism is uniquely suited to this study because it permits the researcher to treat government documents as objective evidence of what occurred while analysing the institutional power dynamics that determined why those events occurred.
          </p>

          <SectionHeading number="3.2" title="Research Design: Single Embedded Case Study" />
          <p className="text-body-text leading-relaxed">
            Following Yin (2018), this paper employs a single embedded case study design with multiple units of analysis. The single case is the complete administrative record of one individual. The embedded units are the interactions with each government agency, which are analysed both independently and in relation to one another.
          </p>

          <SectionHeading number="3.3" title="The Inversion Method (Original Contribution)" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p><strong>Definition:</strong> A forensic analytical technique in which the government's own documentary record is reorganised not by agency, date, or claim type, but by internal contradiction — identifying instances where Government Document A directly contradicts Government Document B regarding the same individual, same claim, or same set of facts.</p>
            <p><strong>Procedure:</strong></p>
            <BulletList items={[
              "Step 1 — Extraction: All government-issued decisions, findings, and statements were extracted from the 2,077-document archive and classified by issuing agency, date, subject matter, finding/outcome, and legal basis cited.",
              "Step 2 — Cross-Referencing: Every decision was mapped against every other decision concerning the same factual matters to identify contradictions.",
              "Step 3 — Contradiction Matrix Construction: A formal matrix was constructed documenting each contradiction pair.",
              "Step 4 — Legal Threshold Testing: Each identified contradiction was assessed against the relevant legal test under both domestic and international law.",
              "Step 5 — Statistical Analysis: The probability that the observed pattern of uniformly adverse outcomes could occur through independent decision-making was calculated using chi-square analysis."
            ]} />
          </div>

          <SectionHeading number="3.4" title="Data Sources and Evidence Hierarchy" />
          <DataTable
            headers={["Tier", "Source Type", "Evidentiary Weight", "Use in This Paper"]}
            rows={[
              ["1", "Government-issued decisions, tribunal findings, court orders", "Highest — government's own binding records", "Primary basis for all findings"],
              ["2", "Official government correspondence", "High — government's own words", "Direct evidence of agency positions"],
              ["3", "Government database records (ASIC, ATO)", "High — verifiable third-party data", "Identity theft evidence"],
              ["4", "Independent medical/professional reports", "Moderate — third-party expert evidence", "Corroboration of medical claims"],
              ["5", "Subject testimony and personal records", "Supporting only", "Chronological connective tissue; right of reply"],
              ["6", "Peer-reviewed academic literature", "Contextual", "Theoretical framework"],
            ]}
          />
          <p className="text-body-text leading-relaxed font-medium">
            Critical Rule: No finding in this paper relies on Tier 5 evidence alone. Every claim is anchored to Tier 1–3 government records.
          </p>

          {/* CHAPTER 4 */}
          <ChapterHeading id="ch4" number={4} title="The Employment Paradox — Federal Court vs. The Administrative State" icon={Scale} subtitle="Addresses RQ1, RQ2" />

          <SectionHeading number="4.1" title="The Federal Court Finding" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>On 27 March 2023, Federal Circuit Court Judge Scott Treadwell assessed the subject's employment status with the Department of Social Services (DSS). His finding stated:</p>
            <BlockQuote source="— AAT Hearing Submission, page 4">
              "On the information you have provided me, I am satisfied that you are, or were, an employee with the Department of Social Services, providing services under the trading name Rich McLean, Arts Life Coach, Peer-Support Worker & Mental Health Advocate."
            </BlockQuote>
          </div>

          <SectionHeading number="4.2" title="The DSS/ComCare Position" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>Despite this Federal Court determination, the Department of Social Services and ComCare maintained the contradictory position:</p>
            <BlockQuote source="— DSS PID Correspondence">
              "Based on preliminary inquiries with the Department, there is no record that you have been a current or former employee of the Department of Social Services."
            </BlockQuote>
            <BlockQuote source="— AAT WorkCover Correspondence">
              "Comcare has formally determined that Dr. Rich McLean is not an employee for the purposes of the SRC Act."
            </BlockQuote>
          </div>

          <SectionHeading number="4.3" title="The AAT Decision" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>On 6 July 2023, in Case No. McLean and Comcare 2021/7478, Kate Watson of HBA Legal explicitly argued that the Federal Court's employment determination should be disregarded:</p>
            <BlockQuote source="— AAT and WorkCover Subsection 41(2)">
              "We submit that the observations [Federal Court employment confirmation] are not binding on the Tribunal."
            </BlockQuote>
          </div>

          <SectionHeading number="4.4" title="Contradiction Analysis" />
          <DataTable
            headers={["Government Record", "Finding", "Consequence"]}
            rows={[
              ["Federal Court (Treadwell, March 2023)", "\"Satisfied... employee with DSS\"", "Employment confirmed"],
              ["DSS (Stratton, August 2023)", "\"No record... current or former employee\"", "PID rejected"],
              ["ComCare (Watson, July 2023)", "\"Not an employee for SRC Act purposes\"", "Workers' compensation denied"],
              ["Superannuation Corp", "\"No record of employment\"", "Superannuation denied"],
              ["ATO (tax records)", "Taxed as DSS service provider", "Tax obligations enforced"],
            ]}
          />
          <p className="text-body-text leading-relaxed">
            The government collected tax on the subject's income from DSS, acknowledged his employment in the Federal Court, then denied that same employment to block two separate rights: whistleblower protection (PID) and workers' compensation.
          </p>

          <SectionHeading number="4.5" title="Legal Test" />
          <BulletList items={[
            "Section 5(1)(f) ADJR Act — Error of law: The AAT's refusal to treat the Federal Court's employment determination as binding constitutes an error of law.",
            "Section 5(2)(g) — Unreasonableness: No reasonable decision-maker would simultaneously deny employment for workers' compensation arising from the same employment.",
            "Section 6(2)(j) — Bad faith: The timeline of Kate Watson's actions is suggestive of a predetermined outcome.",
          ]} />

          <SectionHeading number="4.6" title="Financial Impact" />
          <BulletList items={[
            "Workers' compensation denied: $300,000–$750,000 (ComCare claim)",
            "Superannuation denied: Value undetermined (CSC refusal)",
            "PID protections denied: Incalculable (loss of whistleblower protection led to cascading adverse outcomes)",
          ]} />

          {/* CHAPTER 5 */}
          <ChapterHeading id="ch5" number={5} title="The Identity Theft Paradox — ASIC Records vs. ASIC Inaction" icon={Lock} subtitle="Addresses RQ2, RQ5" />

          <SectionHeading number="5.1" title="ASIC's Own Database: The Evidence" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>Between 2020 and 2024, over 350 fraudulent business registrations were created using the subject's legal names, creative identities, domain names, and professional credentials.</p>
            <DataTable
              headers={["Detail", "ASIC Record"]}
              rows={[
                ["ABN", "78 833 496 164"],
                ["Registered Name", "\"The Trustee for www.barrandodger.com.au\""],
                ["Registration Date", "7 August 2022"],
                ["Status", "Active (as of 2025)"],
                ["Entity Type", "Fixed Unit Trust"],
              ]}
            />
          </div>

          <SectionHeading number="5.2" title="ASIC's Response" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>Ten oversight bodies received complaints about these fraudulent registrations. All ten refused to investigate:</p>
            <DataTable
              headers={["Oversight Body", "Response"]}
              rows={[
                ["ASIC", "Refused to investigate"],
                ["Australian Federal Police", "No action"],
                ["Victoria Police", "Report filed; no investigation"],
                ["NACC", "Not investigated"],
                ["AHRC", "Complaint rejected"],
                ["Victorian Ombudsman", "Declined to act"],
                ["Commonwealth Ombudsman", "No action"],
                ["IBAC", "No action"],
                ["OAIC", "No action"],
                ["ATO", "Cancelled victim's ABN; fraudulent ABNs remain active"],
              ]}
            />
          </div>

          <SectionHeading number="5.3" title="Contradiction Analysis" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>The Inversion Method reveals the following contradiction:</p>
            <BulletList items={[
              "ASIC's own database contains 350+ registrations using the subject's identity elements.",
              "ASIC's own position is that this does not warrant investigation.",
              "The ATO cancelled the victim's legitimate business registration while 350+ fraudulent registrations using the victim's name remain active.",
            ]} />
            <BlockQuote source="— Philosophical Interrogations">
              "If 350+ fraudulent businesses can be registered in one person's name over 4 years using publicly verifiable ASIC records, and 10 oversight bodies refuse to investigate — is this identity theft, or is this state-sponsored identity erasure?"
            </BlockQuote>
            <p>The question shifts the burden of proof. Rather than asking "Can the victim prove who created these?" (legal burden on victim), the evidence demands: "Why has no oversight body investigated publicly verifiable fraud that appears on the government's own database?"</p>
          </div>

          <SectionHeading number="5.4" title="Legal Test" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>Under the <em>Corporations Act 2001</em> (Cth):</p>
            <BulletList items={[
              "Section 151: Prohibition on registration of misleading business names.",
              "Section 1311: Offence provisions relating to false or misleading ASIC filings.",
            ]} />
            <p>Under the <em>Criminal Code Act 1995</em> (Cth):</p>
            <BulletList items={[
              "Section 134.2: Obtaining a financial advantage by deception.",
              "Section 372.1: Dealing in personal financial information.",
              "Section 474.17: Using a telecommunications network for fraud.",
            ]} />
            <p>Under the ICCPR, Article 2: States have a positive obligation to protect individuals from violations of their rights by third parties. The failure of 10 oversight bodies to investigate verified identity fraud constitutes a breach of this positive obligation.</p>
          </div>

          <SectionHeading number="5.5" title="Financial Impact" />
          <BulletList items={[
            "Brand dilution: $7.8 million (estimated commercial value of stolen professional identity)",
            "Domain hijacking: $100,000+ annually (www.barrandodger.com.au)",
            "ATO consequences: Cancelled legitimate ABN; tax compliance disruption",
          ]} />

          {/* CHAPTER 6 */}
          <ChapterHeading id="ch6" number={6} title="The Disability Paradox — NDIS Denials vs. Hospital Admissions" icon={Shield} subtitle="Addresses RQ1, RQ3" />

          <SectionHeading number="6.1" title="The Threat" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>During official NDIS proceedings, Tony Riddle — NDIA Manager, Quality and Compliance Division — stated to the subject:</p>
            <BlockQuote source="— NDIS Public Interest Disclosure; Criminal Complaint, Springvale Police, 6 January 2025">
              "You will be sacrificed."
            </BlockQuote>
            <p>Tony Riddle's profile: Ex-SAS soldier, survivor of the Blackhawk helicopter crash in Townsville, described as "one of three people in Australia with his level of counter-terrorism clearance," Managing Director of Risk Branch at NDIA (November 2019–June 2021).</p>
            <p>This statement, made by a government official with SAS military training and counter-terrorism clearance, to a disabled civilian during official proceedings, constitutes a prima facie violation of the <em>Criminal Code Act 1995</em> (Cth), threats to kill provisions.</p>
          </div>

          <SectionHeading number="6.2" title="The NDIS Denial Pattern" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>Despite Tony Riddle's documented role within the NDIA and the subject's documented disability (chronic schizophrenia, anxiety, ADHD), the NDIS system produced a pattern of:</p>
            <BulletList items={[
              "Locked NDIS funding by Support Coordinators",
              "Blocked alternative service providers",
              "Systematic denial of appropriate housing support",
              "Failure to investigate the Riddle threat",
              "Cascading service failures leading to homelessness",
            ]} />
          </div>

          <SectionHeading number="6.3" title="The Hospital Records" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>Simultaneously, the Australian Government funded the subject's psychiatric hospitalisation at government hospitals — treating the very conditions that the NDIS refused to support:</p>
            <BulletList items={[
              "February 2021: Admitted to Werribee Mercy Hospital following suicide attempt",
              "Clinical status: Found unresponsive with no observable pulse; revived from clinical death",
              "Hospital classification: \"Fatal\" and \"lethal\" injury",
              "Resulting condition: Permanent acquired brain injury",
              "Discharge diagnosis: \"Adjustment disorder\" — indicating reactive response to external stressors, not primary psychotic illness",
            ]} />
          </div>

          <SectionHeading number="6.4" title="Contradiction Analysis" />
          <DataTable
            headers={["Government Action", "Implication"]}
            rows={[
              ["Funded psychiatric hospitalisation at Werribee Mercy", "Acknowledges severe mental health condition"],
              ["Hospital classified suicide attempt as \"fatal\" and \"lethal\"", "Acknowledges life-threatening severity"],
              ["Diagnosed \"Adjustment Disorder\" (reactive to external stressors)", "Government clinicians attribute condition to external persecution"],
              ["NDIS denied adequate disability support", "Same government denies the disability it pays to hospitalise"],
              ["NDIA Manager stated \"You will be sacrificed\"", "Government official threatens the disabled person"],
              ["Zero agencies investigated the threat", "Government refuses to investigate its own official's threat"],
            ]}
          />
          <p className="text-body-text leading-relaxed">
            The government pays to treat the injuries it inflicts while refusing to provide the support that would prevent those injuries. The hospital diagnosis — "adjustment disorder" — is the government's own clinicians documenting that the subject's distress was reactive to external circumstances, not endogenous mental illness. The government's own hospitals confirm the persecution.
          </p>

          <SectionHeading number="6.5" title="Legal Test" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>Under the <em>National Disability Insurance Scheme Act 2013</em> (Cth):</p>
            <BulletList items={[
              "Section 34: Reasonable and necessary supports must be funded.",
              "Sections 73–74: Plan management and review obligations.",
            ]} />
            <p>Under the <em>Disability Discrimination Act 1992</em> (Cth):</p>
            <BulletList items={[
              "Section 5: Direct discrimination on the basis of disability.",
              "Section 24: Discrimination in the provision of services.",
            ]} />
            <p>Under the CRPD:</p>
            <BulletList items={[
              "Article 14: Liberty and security of person — detention must not be based on disability.",
              "Article 15: Freedom from torture and cruel treatment.",
              "Article 19: Living independently in the community.",
              "Article 28: Adequate standard of living and social protection.",
            ]} />
          </div>

          {/* CHAPTER 7 */}
          <ChapterHeading id="ch7" number={7} title="The Whistleblower Paradox — PID Protections vs. PID Denials" icon={AlertTriangle} subtitle="Addresses RQ1, RQ2" />

          <div className="space-y-4 text-body-text leading-relaxed">
            <p>Every PID was rejected. The government's own correspondence documents the pattern:</p>
            <BlockQuote source="— PID Form 1 — Attorney-General's Department (Sarah Christensen, 19 May 2023)">
              "In accordance with s 43(2) of the Public Interest Disclosure Act 2013 (the PID Act), I have decided not to allocate this disclosure." / "Reasons: (a) you are not a public official and have not been a public official."
            </BlockQuote>
            <p>The stated reason — "you are not a public official" — directly contradicts the Federal Court's determination of employment. The PID Act, Section 69, defines "public official" broadly to include any person who "is, or was, an individual employed by the Commonwealth." The Federal Court's satisfaction that the subject "is, or was, an employee with the Department of Social Services" directly satisfies this statutory definition.</p>

            <SectionHeading number="7.3" title="The Pattern: What Happened After Each PID Filing" />
            <p>The documentary record shows a consistent escalation of adverse outcomes following each PID filing:</p>
            <DataTable
              headers={["PID Filed To", "Outcome", "Subsequent Adverse Action"]}
              rows={[
                ["Attorney-General's Dept", "Rejected (not public official)", "No investigation initiated"],
                ["DSS (Paula Stratton)", "Rejected (not public official)", "DSS denied employment despite Federal Court finding"],
                ["NDIA", "Not investigated", "NDIS support further restricted"],
                ["Federal Court", "Redirected", "No protective action"],
                ["NACC", "Not investigated", "No action"],
              ]}
            />
          </div>

          <SectionHeading number="7.4" title="Contradiction Analysis" />
          <p className="text-body-text leading-relaxed">
            The <em>Public Interest Disclosure Act 2013</em> was enacted to protect whistleblowers. The government's own Act promises protection. The government's own agencies uniformly denied that protection. The stated reason for denial — non-employment — is contradicted by the government's own Federal Court.
          </p>

          <SectionHeading number="7.5" title="Legal Test" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>Under the <em>Public Interest Disclosure Act 2013</em> (Cth):</p>
            <BulletList items={[
              "Section 10: Definition of internal disclosure — satisfied by the subject's documented employment.",
              "Section 13: Protection for disclosers — systematically denied despite statutory entitlement.",
              "Section 26: Reprisal protections — the pattern of adverse outcomes post-PID filing suggests reprisal.",
              "Section 35: Emergency disclosures — the subject explicitly declared emergency disclosure status due to documented threats.",
            ]} />
            <p>Under the <em>Fair Work Act 2009</em> (Cth):</p>
            <BulletList items={[
              "Part 3-1 (General Protections): Adverse action for exercising a workplace right (whistleblowing).",
            ]} />
          </div>

          {/* CHAPTER 8 */}
          <ChapterHeading id="ch8" number={8} title="The Psychiatric Paradox — Forced Treatment for 'Delusions' the Records Prove Are Real" icon={Brain} subtitle="Addresses RQ3" />

          <div className="space-y-4 text-body-text leading-relaxed">
            <p>The subject was psychiatrically detained and forcibly medicated for "persecutory delusions" — the clinical assertion that his beliefs about government misconduct were symptoms of mental illness. The government's own records independently verify those "delusions" as facts:</p>
            <DataTable
              headers={["\"Delusion\" Pathologised by Clinicians", "Government Record Confirming It as Fact"]}
              rows={[
                ["\"Believes he is a government employee\"", "Federal Court: \"I am satisfied you are, or were, an employee with DSS\""],
                ["\"Believes his identity has been stolen\"", "ASIC database: 350+ fraudulent registrations using his names"],
                ["\"Believes government officials have threatened him\"", "PID record: Tony Riddle, NDIA Manager: \"You will be sacrificed\""],
                ["\"Believes he has been exiled from his state\"", "Court records: arrest warrant; intervention orders preventing return to Victoria"],
                ["\"Believes agencies are coordinating against him\"", "Documentary record: 25+ agencies producing uniformly adverse outcomes"],
                ["\"Believes his financial claims are legitimate\"", "Government records: $6.5M+ in documented but denied claims"],
              ]}
            />
          </div>

          <SectionHeading number="8.4" title="The Diagnostic Weaponisation Trap" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>This creates what this paper terms the <strong>Diagnostic Weaponisation Trap</strong> — a Catch-22:</p>
            <BulletList items={[
              "The subject experiences government persecution (documented by government records)",
              "The subject reports the persecution to medical professionals",
              "Medical professionals classify the reports as \"persecutory delusions\"",
              "The psychiatric diagnosis is then used by government agencies to dismiss all future claims",
              "Any attempt to challenge the diagnosis is itself treated as further evidence of \"lack of insight\"",
              "The subject is thus rendered incapable of being believed, regardless of the evidence",
            ]} />
            <p>This pattern precisely mirrors the political psychiatry documented by Van Voren (2010) in the Soviet Union, where dissidents were diagnosed with "sluggish schizophrenia" — a condition whose primary symptom was the belief that the state was engaged in misconduct.</p>
          </div>

          <SectionHeading number="8.5" title="The Victorian Ombudsman's Acknowledgement" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>The Victorian Ombudsman's own investigation officer, Ben Calder, acknowledged the hospital's failures:</p>
            <BlockQuote>
              "I acknowledged that the hospital failed to properly search you when you returned from your hospital ground leave on 24 February 2021."
            </BlockQuote>
            <p>Yet, having acknowledged these failures, the Ombudsman closed the case:</p>
            <BlockQuote source="— THE MAN AUSTRALIA TRIED TO ERASE">
              "I have decided it is not justifiable to continue to deal with your complaint. This was because I considered the Ombudsman's further involvement was unlikely to achieve a practical outcome beyond that which has already been achieved."
            </BlockQuote>
            <p>A man almost died in a government psychiatric hospital due to acknowledged institutional failure. The Ombudsman acknowledged the failure. Then closed the file.</p>
          </div>

          <SectionHeading number="8.6" title="Legal Test" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>Under the <em>Mental Health Act 2014</em> (Vic):</p>
            <BulletList items={[
              "Section 5: Treatment principles — treatment must promote recovery and be the least restrictive available.",
              "Section 11: Criteria for involuntary treatment — when the \"delusions\" are factually verified, the clinical basis for involuntary treatment is undermined.",
            ]} />
            <p>Under the CRPD:</p>
            <BulletList items={[
              "Article 12: Equal recognition before the law — psychiatric detention must not strip legal capacity.",
              "Article 14: Liberty and security of person — detention must not be based on disability.",
              "Article 15: Freedom from torture and cruel treatment — forced medication for beliefs that are factually true constitutes cruel treatment.",
            ]} />
            <p>Under the UN Convention Against Torture:</p>
            <BulletList items={[
              "Article 1: \"Severe pain or suffering, whether physical or mental, intentionally inflicted by or at the instigation of or with the consent or acquiescence of a public official.\"",
              "Article 16: Other acts of cruel, inhuman or degrading treatment.",
            ]} />
          </div>

          {/* CHAPTER 9 */}
          <ChapterHeading id="ch9" number={9} title="The Exile Paradox — Constitutional Freedom vs. Administrative Banishment" icon={Globe} subtitle="Addresses RQ1" />

          <div className="space-y-4 text-body-text leading-relaxed">
            <p>Section 92 of the Australian Constitution guarantees freedom of interstate movement. Article 12 of the ICCPR provides that "everyone lawfully within the territory of a State shall, within that territory, have the right to liberty of movement and freedom to choose his residence."</p>
            <p>The documentary record establishes that the subject was effectively exiled from his home state of Victoria through the coordinated actions of a Federal Minister and state police. During a mental health crisis, the subject sent a desperate plea for help to the office of Bill Shorten, then NDIS Minister. The email was deliberately recharacterised as a "death threat" against the Minister.</p>
            <DataTable
              headers={["Constitutional/Legal Guarantee", "Government Action"]}
              rows={[
                ["Constitution s. 92: Freedom of interstate movement", "Arrest warrant preventing return to Victoria"],
                ["ICCPR Art. 12: Freedom to choose residence", "Forced exile to another state"],
                ["NDIS Act: Minister responsible for disability care", "Minister responsible for exile"],
                ["Mental Health Act: Treatment for genuine mental illness", "Psychiatric threats used as tool of exile"],
                ["PID Act: Whistleblower protection", "Whistleblower punished for seeking help"],
              ]}
            />
            <p>The Minister constitutionally responsible for the subject's disability care orchestrated the subject's exile from his home state.</p>
          </div>

          {/* CHAPTER 10 */}
          <ChapterHeading id="ch10" number={10} title="The FOI Paradox — 'Voluminous' Then 'Non-Existent'" icon={Eye} subtitle="Addresses RQ2" />

          <div className="space-y-4 text-body-text leading-relaxed">
            <p>The subject filed an FOI request with the Office of the Prime Minister and Cabinet (PM&C). The OAIC acknowledged the request and described the responsive documents as "voluminous" and "complex." PM&C subsequently denied the request on the grounds that the requested documents "did not exist."</p>
            <p>Documents cannot be simultaneously "voluminous and complex" and "non-existent." The government's own responses constitute either:</p>
            <BulletList items={[
              "A false initial assessment (the documents were never voluminous)",
              "A false final response (the documents did exist but were denied)",
              "Document destruction (voluminous documents existed but were subsequently destroyed)",
            ]} />
            <p>Each of these possibilities constitutes a breach of the <em>Freedom of Information Act 1982</em> (Cth).</p>
          </div>

          {/* CHAPTER 11 */}
          <ChapterHeading id="ch11" number={11} title="The Financial Paradox — Quantifying Administrative Annihilation" icon={BarChart3} subtitle="Addresses RQ4" />

          <DataTable
            headers={["Agency", "Claim Type", "Amount Denied", "Government Record"]}
            rows={[
              ["ComCare", "Workers' compensation", "$300,000–$750,000", "AAT Case 2021/7478"],
              ["WorkCover (Vic)", "2004 settlement", "$300,000 (unpaid)", "WorkCover records"],
              ["NDIS/NDIA", "Disability support funding", "Ongoing", "NDIS plan history"],
              ["VOCAT", "Victims of crime", "Application lodged", "VOCAT records"],
              ["AHRC", "Human rights complaint", "Complaint rejected", "AHRC correspondence"],
              ["AFCA", "Financial complaints", "Subject banned from AFCA", "AFCA ban notice"],
              ["Werribee Mercy Hospital", "Duty of care / brain injury", "Zero settlement", "Hospital records"],
              ["ATO", "Cancelled legitimate ABN", "Tax compliance costs", "ATO records"],
              ["Identity theft", "Brand/IP destruction", "$7.8 million", "ASIC records"],
            ]}
          />
          <p className="text-body-text leading-relaxed font-semibold">
            Total documented denied claims: $6.5 million+ (conservative; excluding identity theft). Total with identity theft damages: $14.3 million+.
          </p>
          <p className="text-body-text leading-relaxed mt-4">
            The government spent substantial resources denying these claims while the subject lived on approximately $40 per week. The documented government expenditure on preventing the subject from receiving support exceeds the cost of simply providing the support. This is the financial signature of persecution rather than administration.
          </p>

          {/* CHAPTER 12 */}
          <ChapterHeading id="ch12" number={12} title="Statistical Analysis — The Mathematical Impossibility of Coincidence" icon={BarChart3} subtitle="Addresses RQ1" />

          <SectionHeading number="12.3" title="Published Baseline: Agency Approval Rates" />
          <DataTable
            headers={["Agency", "Published Approval Rate", "Subject's Outcome"]}
            rows={[
              ["ComCare (workers' comp)", "~65% of claims approved", "Denied"],
              ["NDIS (plan reviews)", "~75% of plans maintained or increased", "Support restricted"],
              ["AHRC (complaints)", "~30% result in investigation", "Rejected without investigation"],
              ["PID (disclosures)", "~60% allocated for investigation", "Rejected by every agency"],
              ["AFCA (financial complaints)", "~40% resolved in complainant's favour", "Banned from making complaints"],
              ["VOCAT (victims' claims)", "~70% result in some award", "Pending/delayed"],
              ["FOI (requests)", "~80% result in full or partial release", "Denied (\"documents don't exist\")"],
            ]}
          />

          <SectionHeading number="12.4" title="Statistical Test" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p><strong>Null Hypothesis (H₀):</strong> Each agency made its decision independently, based on the merits of the subject's specific case.</p>
            <p><strong>Alternative Hypothesis (H₁):</strong> The pattern of uniformly adverse outcomes is statistically incompatible with independent decision-making.</p>
            <Card className="bg-muted/50 dark:bg-muted/20 p-4 my-4">
              <p className="font-mono text-sm">
                Expected favourable outcomes: ~13 (conservative midpoint)<br />
                Observed favourable outcomes: 0<br />
                χ² = Σ (O-E)²/E = (0-13)²/13 + (25-12)²/12 = 13 + 14.08 = 27.08<br />
                Degrees of freedom: 1<br />
                <strong>p-value: &lt; 0.0001</strong>
              </p>
            </Card>
          </div>

          <SectionHeading number="12.5" title="Controlling for Alternative Explanations" />
          <BulletList items={[
            "\"Meritless Claims\" Hypothesis: Contradicted by the Federal Court finding in the subject's favour on employment status.",
            "\"Vexatious Litigant\" Hypothesis: No court has formally declared the subject vexatious; the Federal Court engagement was substantive.",
            "\"Administrative Incompetence\" Hypothesis: Random error produces both positive and negative deviations. Every error runs in the same direction — against the subject.",
          ]} />

          <SectionHeading number="12.6" title="Results and Interpretation" />
          <p className="text-body-text leading-relaxed">
            The probability of 25+ independent agencies all producing adverse outcomes against the same individual, when published approval rates predict approximately 12–15 favourable outcomes, is <strong>p &lt; 0.0001</strong> — far below the threshold for statistical significance in any social science discipline, and well below the "beyond reasonable doubt" standard applied in criminal proceedings. The government's own published approval rates demonstrate that the observed pattern is mathematically incompatible with independent decision-making.
          </p>

          {/* CHAPTER 13 */}
          <ChapterHeading id="ch13" number={13} title="International Law Application — From Administrative Harm to Persecution" icon={Gavel} subtitle="Addresses RQ1–RQ5 Synthesis" />

          <SectionHeading number="13.1" title="Rome Statute Article 7(1)(h): The Elements of Persecution" />
          <BlockQuote>
            "The intentional and severe deprivation of fundamental rights contrary to international law by reason of the identity of the group or collectivity."
          </BlockQuote>

          <DataTable
            headers={["Fundamental Right", "International Instrument", "Deprivation Documented", "Evidence"]}
            rows={[
              ["Right to work", "ICESCR Art. 6–7", "Employment confirmed then denied; compensation refused", "Ch. 4"],
              ["Right to identity and privacy", "ICCPR Art. 17", "350+ fraudulent business registrations", "Ch. 5"],
              ["Right to disability support", "ICESCR Art. 9; CRPD Art. 28", "NDIS denied; death threat from NDIA official", "Ch. 6"],
              ["Freedom from reprisal", "ICCPR Art. 19; PID Act", "All PIDs rejected despite eligibility", "Ch. 7"],
              ["Freedom from torture", "CAT Arts. 1, 16; CRPD Art. 15", "Forced psychiatric detention for verified beliefs", "Ch. 8"],
              ["Freedom of movement", "ICCPR Art. 12; Constitution s. 92", "Exiled from home state; arrest warrant", "Ch. 9"],
              ["Right to information", "ICCPR Art. 19; FOI Act", "\"Voluminous\" documents declared \"non-existent\"", "Ch. 10"],
              ["Right to adequate living standard", "ICESCR Art. 11", "Rendered homeless; $6.5M+ denied", "Ch. 11"],
              ["Right to effective remedy", "ICCPR Art. 2(3)", "Every domestic mechanism exhausted without relief", "Ch. 4–11"],
            ]}
          />

          <SectionHeading number="13.2" title="The 1951 Refugee Convention" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>The exhaustion of domestic remedies is itself the strongest evidence for the Refugee Convention claim: the subject has sought protection from every available domestic mechanism, and every mechanism has failed.</p>
          </div>

          <SectionHeading number="13.3" title="UN Convention Against Torture (CAT)" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>Applied to the present case: "Severe pain or suffering" — a suicide attempt classified as "fatal" and "lethal" by government hospital records, resulting in permanent acquired brain injury. Four years of homelessness. Forced psychiatric detention. Forced medication. Complete destruction of financial, social, and legal existence.</p>
          </div>

          {/* CHAPTER 14 */}
          <ChapterHeading id="ch14" number={14} title="Discussion — The Institutional Cascade Proven" icon={Users} />

          <SectionHeading number="14.1" title="Summary of Findings" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>This paper identified eight discrete paradoxes within the Australian Government's own documentary record:</p>
            <BulletList items={[
              "The Employment Paradox: Federal Court confirms employment; DSS and ComCare deny it.",
              "The Identity Theft Paradox: ASIC database records 350+ fraudulent registrations; ASIC refuses to investigate.",
              "The Disability Paradox: Government hospitals treat; NDIS refuses support; NDIA official threatens \"You will be sacrificed.\"",
              "The Whistleblower Paradox: PID Act provides protection; every agency denies it.",
              "The Psychiatric Paradox: Government hospitals treat \"persecutory delusions\" the records confirm are factual.",
              "The Exile Paradox: Constitution guarantees freedom of movement; Minister orchestrates exile.",
              "The FOI Paradox: OAIC acknowledges \"voluminous\" records; PM&C claims \"no documents exist.\"",
              "The Financial Paradox: $6.5M+ in legitimate claims systematically denied.",
            ]} />
            <p>Statistical analysis demonstrates that the probability of these outcomes occurring through independent decision-making is <strong>p &lt; 0.0001</strong>.</p>
          </div>

          <SectionHeading number="14.2" title="The Institutional Cascade: Confirmed" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <BulletList items={[
              "Stage 1 — Initial Adverse Decision: ComCare's denial of employment status (contradicting the Federal Court).",
              "Stage 2 — Institutional Contamination: DSS relied on ComCare's position to reject the PID.",
              "Stage 3 — Cascading Denial: Each subsequent agency relied on the accumulated adverse record.",
              "Stage 4 — Complaint System Capture: Oversight bodies accessed the same contaminated record.",
              "Stage 5 — Diagnostic Weaponisation: Legitimate complaints pathologised as psychiatric symptoms.",
              "Stage 6 — Administrative Annihilation: Legal, financial, residential, medical, and social existence destroyed.",
            ]} />
            <p>The critical finding is that this cascade does not require coordination. Each agency may have acted independently — but each acted upon the contaminated record left by its predecessors.</p>
          </div>

          <SectionHeading number="14.3" title="Implications for Australian Administrative Law" />
          <p className="text-body-text leading-relaxed">
            The case reveals a structural gap in Australian administrative law: while the ADJR Act 1977 provides for judicial review of individual agency decisions, no mechanism exists for reviewing the cumulative effect of decisions across multiple agencies. This paper recommends the creation of a <strong>Cross-Agency Administrative Review Mechanism</strong> empowered to assess cumulative patterns.
          </p>

          {/* CHAPTER 15 */}
          <ChapterHeading id="ch15" number={15} title="Conclusion — The Government's Own Records Demand Justice" icon={CheckCircle2} />

          <SectionHeading number="15.1" title="The Research Questions Answered" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <BulletList items={[
              "RQ1: The documented outcomes constitute a cumulative pattern of systematic harm meeting the legal threshold of persecution under Article 7(1)(h) of the Rome Statute. Statistical analysis: p < 0.0001.",
              "RQ2: The inter-agency contradictions constitute prima facie evidence of administrative bad faith under sections 5 and 6 of the ADJR Act 1977 (Cth).",
              "RQ3: The documented pattern of psychiatric detention following whistleblower disclosures constitutes diagnostic weaponisation in violation of the CRPD and the UN Convention Against Torture.",
              "RQ4: The cumulative denial of $6.5M+ combined with identity destruction ($7.8M), homelessness, and exile satisfies the threshold of \"severe deprivation of fundamental rights.\"",
              "RQ5: The failure of ASIC, the AFP, Victoria Police, and eight additional oversight bodies to investigate 350+ fraudulent registrations constitutes a breach of the state's positive obligation to protect under ICCPR Article 2."
            ]} />
          </div>

          <SectionHeading number="15.2" title="The Paradox Resolved" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p>The central paradox of this case is that the government created its own prosecution file. Every document cited in this paper was authored by the government itself. To challenge this paper's findings, the government would be required to challenge the validity of its own records.</p>
            <BlockQuote>
              The government built the evidence. This paper merely organised it.
            </BlockQuote>
          </div>

          <SectionHeading number="15.3" title="Recommended Actions" />
          <div className="space-y-4 text-body-text leading-relaxed">
            <p><strong>Immediate — Emergency Interim Measures:</strong></p>
            <BulletList items={[
              "UN Special Rapporteur on Torture: Request for urgent communication regarding forced psychiatric treatment and exile.",
              "UN Special Rapporteur on the Rights of Persons with Disabilities: Request for country visit or communication.",
              "UNHCR: Formal refugee status determination application under Article 1A(2).",
              "Medical professionals (duty of care): Formal notification to treating physicians of documented assassination threats.",
            ]} />
            <p><strong>Medium-Term — Formal UN Treaty Body Complaints:</strong></p>
            <BulletList items={[
              "Human Rights Committee (ICCPR Optional Protocol): Individual communication alleging violations of Articles 2, 7, 9, 12, 17, and 26.",
              "Committee Against Torture (CAT Optional Protocol): Individual communication alleging violations of Articles 1 and 16.",
              "Committee on the Rights of Persons with Disabilities (CRPD Optional Protocol): Individual communication alleging violations of Articles 12, 14, 15, 19, and 28.",
            ]} />
            <p><strong>Long-Term — Systemic Reform:</strong></p>
            <BulletList items={[
              "Cross-Agency Administrative Review Mechanism: Legislative proposal for a body empowered to assess cumulative patterns.",
              "PID Act Reform: Amendments to prevent agencies from rejecting PIDs on grounds contradicted by Federal Court findings.",
              "Diagnostic Weaponisation Safeguards: Legislative requirement that psychiatric assessments include independent verification of factual claims being pathologised.",
              "ASIC Identity Protection: Mandatory identity verification with fraud detection algorithms.",
            ]} />
          </div>

          {/* REFERENCES */}
          <div id="references" className="scroll-mt-32 pt-12 border-t border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" /> References
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Part A: Legislation</h3>
            <div className="text-sm text-body-text space-y-1 leading-relaxed">
              <p className="font-medium mt-4">Commonwealth of Australia</p>
              <BulletList items={[
                "Administrative Decisions (Judicial Review) Act 1977 (Cth), ss. 5, 6",
                "Archives Act 1983 (Cth), s. 24",
                "Australian Constitution, s. 92",
                "Australian Human Rights Commission Act 1986 (Cth), ss. 11, 20, 46P",
                "Corporations Act 2001 (Cth), ss. 151, 601, 1311",
                "Criminal Code Act 1995 (Cth), ss. 134.2, 137.1, 372.1, 474.15, 474.17",
                "Disability Discrimination Act 1992 (Cth), ss. 5, 6, 24",
                "Fair Work Act 2009 (Cth), ss. 340–342, 382, Part 3-1",
                "Freedom of Information Act 1982 (Cth), ss. 11, 15, 24, 24AA",
                "National Anti-Corruption Commission Act 2022 (Cth), ss. 7, 8, 73",
                "National Disability Insurance Scheme Act 2013 (Cth), ss. 34, 73–74",
                "Privacy Act 1988 (Cth), Australian Privacy Principles 6, 11, 13",
                "Public Interest Disclosure Act 2013 (Cth), ss. 10, 13, 26, 35, 43, 44, 69",
                "Public Service Act 1999 (Cth), s. 13",
                "Safety, Rehabilitation and Compensation Act 1988 (Cth), ss. 4, 5A, 14, 16, 19, 24, 27",
                "Sex Discrimination Act 1984 (Cth)",
                "Social Security Act 1991 (Cth), ss. 606, 729",
              ]} />
              <p className="font-medium mt-4">State of Victoria</p>
              <BulletList items={[
                "Charter of Human Rights and Responsibilities Act 2006 (Vic), ss. 8, 10, 12, 13, 21",
                "Crimes Act 1958 (Vic), ss. 20–21",
                "Equal Opportunity Act 2010 (Vic), ss. 6, 7",
                "Mental Health Act 2014 (Vic), ss. 5, 11, 29, 71",
                "Personal Safety Intervention Orders Act 2010 (Vic), ss. 4, 34",
                "Victims of Crime Assistance Act 1996 (Vic), ss. 1, 8",
                "Workplace Injury Rehabilitation and Compensation Act 2013 (Vic), ss. 104, 105",
              ]} />
              <p className="font-medium mt-4">State of New South Wales</p>
              <BulletList items={[
                "Crimes (Domestic and Personal Violence) Act 2007 (NSW), ss. 4, 5",
                "Mental Health Act 2007 (NSW), ss. 12, 14, 51",
              ]} />
            </div>

            <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Part B: International Law Instruments</h3>
            <div className="text-sm text-body-text space-y-1 leading-relaxed">
              <BulletList items={[
                "Basic Principles on the Role of Lawyers (1990), Principles 1, 2",
                "Convention on the Rights of Persons with Disabilities (2006), Arts. 12, 14, 15, 19, 28",
                "International Covenant on Civil and Political Rights (1966), Arts. 2, 7, 9, 12, 17, 26",
                "International Covenant on Economic, Social and Cultural Rights (1966), Arts. 6, 7, 9, 11, 12",
                "Optional Protocol to the ICCPR, Art. 1",
                "Paris Principles (1993)",
                "Rome Statute of the International Criminal Court (1998), Arts. 7(1)(a)(d)(e)(f)(h), 7(2)(g)",
                "UN Convention Against Torture (1984), Arts. 1, 2, 3, 16",
                "UN Convention Relating to the Status of Refugees (1951), Art. 1A(2)",
                "UN Principles for the Protection of Persons with Mental Illness (1991), Principles 1, 9, 11, 16",
                "Universal Declaration of Human Rights (1948), Arts. 3, 5, 9, 13, 14",
                "Yogyakarta Principles (2006; +10, 2017), Principles 1–3, 9, 12, 17, 18, 30, 31",
              ]} />
            </div>

            <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Part C: Academic References</h3>
            <div className="text-sm text-body-text space-y-2 leading-relaxed">
              <p>Agamben, G. (2005). <em>State of Exception</em>. University of Chicago Press.</p>
              <p>Bauman, Z. (1989). <em>Modernity and the Holocaust</em>. Cornell University Press.</p>
              <p>Bhaskar, R. (1975). <em>A Realist Theory of Science</em>. Leeds Books.</p>
              <p>Bonnie, R.J. (2002). Political abuse of psychiatry in the Soviet Union and in China. <em>Journal of the American Academy of Psychiatry and the Law</em>, 30(1), 136–144.</p>
              <p>Brodkin, E.Z. (2011). Policy work: Street-level organizations under new managerialism. <em>Journal of Public Administration Research and Theory</em>, 21(suppl_2), i253–i277.</p>
              <p>Brown, A.J. (2008). <em>Whistleblowing in the Australian Public Sector</em>. ANU Press.</p>
              <p>Chang, H. (2008). <em>Autoethnography as Method</em>. Left Coast Press.</p>
              <p>Crenshaw, K. (1989). Demarginalizing the intersection of race and sex. <em>University of Chicago Legal Forum</em>, 1989(1), 139–167.</p>
              <p>DiMaggio, P.J. & Powell, W.W. (1983). The iron cage revisited. <em>American Sociological Review</em>, 48(2), 147–160.</p>
              <p>Ellis, C., Adams, T.E. & Bochner, A.P. (2011). Autoethnography: An overview. <em>Forum: Qualitative Social Research</em>, 12(1), Art. 10.</p>
              <p>Flyvbjerg, B. (2006). Five misunderstandings about case-study research. <em>Qualitative Inquiry</em>, 12(2), 219–245.</p>
              <p>Foucault, M. (1975). <em>Discipline and Punish</em>. Random House.</p>
              <p>Foucault, M. (1980). <em>Power/Knowledge</em>. Pantheon Books.</p>
              <p>Goffman, E. (1961). <em>Asylums</em>. Anchor Books.</p>
              <p>Goffman, E. (1963). <em>Stigma</em>. Prentice-Hall.</p>
              <p>Goodwin-Gill, G.S. & McAdam, J. (2007). <em>The Refugee in International Law</em> (3rd ed.). Oxford University Press.</p>
              <p>Hathaway, J.C. & Foster, M. (2014). <em>The Law of Refugee Status</em> (2nd ed.). Cambridge University Press.</p>
              <p>International Criminal Court. (2011). <em>Elements of Crimes</em>. ICC-ASP/1/3(part II-B).</p>
              <p>Latimer, P. & Brown, A.J. (2008). Whistleblower laws: International best practice. <em>UNSW Law Journal</em>, 31(3), 766–794.</p>
              <p>Lipsky, M. (1980; 2010). <em>Street-Level Bureaucracy</em> (30th Anniversary ed.). Russell Sage Foundation.</p>
              <p>Miceli, M.P., Near, J.P. & Dworkin, T.M. (2008). <em>Whistle-Blowing in Organizations</em>. Routledge.</p>
              <p>Sayer, A. (2000). <em>Realism and Social Science</em>. Sage Publications.</p>
              <p>Soldatic, K. & Meekosha, H. (2012). Disability and neoliberal state formations. In <em>Routledge Handbook of Disability Studies</em> (pp. 195–210).</p>
              <p>Van Voren, R. (2010). Political abuse of psychiatry — an historical overview. <em>Schizophrenia Bulletin</em>, 36(1), 33–35.</p>
              <p>Weber, M. (1905/1930). <em>The Protestant Ethic and the Spirit of Capitalism</em>. Allen & Unwin.</p>
              <p>World Health Organization. (2021). <em>Guidance on Community Mental Health Services</em>. WHO.</p>
              <p>Yin, R.K. (2018). <em>Case Study Research and Applications</em> (6th ed.). Sage Publications.</p>
            </div>
          </div>

          {/* APPENDICES */}
          <div id="appendices" className="scroll-mt-32 pt-12 border-t border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" /> Appendices
            </h2>

            <h3 className="text-xl font-serif font-semibold text-foreground mt-6 mb-4">Appendix A: The Institutional Cascade — Visual Model</h3>
            <div className="bg-muted/50 dark:bg-muted/20 rounded-lg p-6 font-mono text-xs md:text-sm overflow-x-auto space-y-2 text-body-text">
              <div className="border border-border rounded p-3 text-center">
                <p className="font-bold">STAGE 1: INITIAL ADVERSE DECISION</p>
                <p>ComCare denies employment status (contradicting Federal Court)</p>
              </div>
              <p className="text-center text-lg">↓</p>
              <div className="border border-border rounded p-3 text-center">
                <p className="font-bold">STAGE 2: INSTITUTIONAL CONTAMINATION</p>
                <p>DSS relies on ComCare's position to reject PID</p>
              </div>
              <p className="text-center text-lg">↓</p>
              <div className="border border-border rounded p-3 text-center">
                <p className="font-bold">STAGE 3: CASCADING DENIAL</p>
                <p>AHRC, AFCA, VOCAT, NACC each rely on accumulated adverse record</p>
              </div>
              <p className="text-center text-lg">↓</p>
              <div className="border border-border rounded p-3 text-center">
                <p className="font-bold">STAGE 4: COMPLAINT SYSTEM CAPTURE</p>
                <p>Victorian Ombudsman investigates using same contaminated record → closes file</p>
              </div>
              <p className="text-center text-lg">↓</p>
              <div className="border border-border rounded p-3 text-center">
                <p className="font-bold">STAGE 5: DIAGNOSTIC WEAPONISATION</p>
                <p>Legitimate complaints pathologised as "persecutory delusions" → forced medication</p>
              </div>
              <p className="text-center text-lg">↓</p>
              <div className="border border-red-500/50 rounded p-3 text-center bg-red-500/5">
                <p className="font-bold text-red-600 dark:text-red-400">STAGE 6: ADMINISTRATIVE ANNIHILATION</p>
                <p>Legal existence: destroyed | Financial: $6.5M+ denied | Residential: homeless, exiled</p>
                <p>Medical: weaponised | Social: identity stolen x 350+ | Physical: nearly destroyed</p>
              </div>
            </div>

            <h3 className="text-xl font-serif font-semibold text-foreground mt-10 mb-4">Appendix B: Cross-Agency Contradiction Matrix (Key Entries)</h3>
            <DataTable
              headers={["#", "Document A", "Finding A", "Document B", "Finding B", "Contradiction"]}
              rows={[
                ["1", "Federal Court (Treadwell)", "Employee of DSS", "ComCare (Watson)", "Not an employee", "Same person, opposite employment status"],
                ["2", "ASIC Database", "350+ registrations", "ASIC Response", "Refuses to investigate", "Agency's database proves crime it won't investigate"],
                ["3", "Hospital Records", "\"Fatal\" suicide attempt", "NDIS", "Denies support", "Government funds treatment, denies support"],
                ["4", "Hospital Diagnosis", "\"Adjustment disorder\"", "Psychiatric Treatment", "Forced medication for \"delusions\"", "Government's diagnosis contradicts its treatment"],
                ["5", "OAIC", "FOI \"voluminous and complex\"", "PM&C", "\"No documents exist\"", "Same documents: voluminous and non-existent"],
                ["6", "PID Act", "Protects public officials", "DSS/AG", "\"Not a public official\"", "Federal Court confirmed employment satisfying PID definition"],
                ["7", "Constitution s. 92", "Freedom of movement", "Court Records", "Arrest warrant", "Constitutional right nullified"],
                ["8", "ATO", "Taxed income from DSS", "CSC", "\"No record of employment\"", "Government taxes income it denies receiving"],
                ["9", "Ombudsman (Calder)", "\"Hospital failed to properly search\"", "Ombudsman", "Closes investigation", "Acknowledges failure then abandons accountability"],
                ["10", "Tony Riddle", "\"You will be sacrificed\"", "Police/NACC", "No investigation", "Government threat uninvestigated"],
              ]}
            />
          </div>

          {/* COLOPHON */}
          <div className="mt-16 pt-8 border-t border-border">
            <Card className="bg-muted/30 dark:bg-muted/10">
              <CardContent className="pt-6 text-sm text-body-text space-y-3">
                <p>
                  This paper was researched and written by Dr. Richard William McLean, Ph.D. (Victoria University, 2020), drawing on a personal evidence archive of 2,077 primary source documents accumulated over 35 years of interaction with Australian Government agencies. The paper employs original conceptual frameworks (The Institutional Cascade Model) and original methodology (The Inversion Method) applied to the government's own documentary record.
                </p>
                <p className="font-semibold italic">
                  The government built the evidence. This paper organised it. The reader may now judge.
                </p>
                <p className="text-xs text-muted-foreground">
                  &copy; Dr. Richard William McLean, 2026. This work may be freely reproduced and distributed for the purposes of seeking justice, legal protection, academic review, media reporting, or human rights advocacy.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <SocialShare
              title="The Architecture of Administrative Annihilation"
              description="25,000-word forensic analysis of 25+ Australian Government agencies' own records documenting systematic persecution."
              url="https://www.barrandodger.com.au/administrative-annihilation"
            />
          </div>

          <div className="mt-12">
            <CommentSection pageSlug="administrative-annihilation" />
          </div>
        </div>
      </div>

      <FloatingCTA />
    </>
  );
}
