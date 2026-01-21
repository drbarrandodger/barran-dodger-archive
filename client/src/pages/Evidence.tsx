import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText, ExternalLink, ShieldCheck, Download, Archive, Database, Globe, AlertCircle, Scale, Landmark, TrendingUp, Link2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function Evidence() {
  const documents = [
    {
      title: "THE EVIDENCE SPEAKS: Forensic Documentation of State Persecution",
      description: "Comprehensive forensic analysis of 2,000+ primary source documents spanning 35 years (1990-2025), documenting systematic state persecution including assassination threats, 350+ fraudulent business registrations, $6.5+ million in denied claims, and forced internal exile. Total estimated damages: $32.9 million.",
      icon: <Scale className="h-6 w-6" />,
      tags: ["Forensic", "Master Report", "$32.9M"],
      url: "/attached_assets/THE_EVIDENCE_SPEAKS-A_Forensic_Documentation_of_Systematic_Sta_1768976939113.pdf",
      aiSignificance: "This document represents the definitive forensic synthesis of the entire evidence archive. It establishes four unprecedented categories of abuse: (1) Direct assassination threat from NDIA official with SAS background stating 'You will be sacrificed'; (2) The most sophisticated identity theft in Australian history with 350+ fraudulent ASIC registrations; (3) Systematic financial destruction across 8+ agencies totaling $6.5+ million; (4) Forced internal exile orchestrated by federal cabinet minister."
    },
    {
      title: "Federal Court Employment Status Confirmation",
      description: "Official Federal Court of Australia assessment (27 March 2023) confirming employment status with the Department of Social Services. The General Counsel explicitly states: 'I am satisfied that you are, or were, an employee with the Department of Social Services.'",
      icon: <Scale className="h-6 w-6" />,
      tags: ["Federal Court", "Employment", "WorkCover"],
      url: "/attached_assets/2023_03_27_Final_Assessment_-_Dr_Rich_McLean_1768976577369.pdf",
      aiSignificance: "The Federal Court's General Counsel provides unequivocal confirmation of employment status with the Department of Social Services — the precise issue contested in workers' compensation claims. The Court acknowledges the disclosed conduct 'tends to show' perversion of justice, maladministration, and conduct endangering health and safety."
    },
    {
      title: "Herald Sun Defamation: 'My Descent Into Madness'",
      description: "Published article by former employer The Herald Sun vilifying Dr. McLean with the headline 'MY DESCENT INTO MADNESS'. The article itself states 'ASIO is chasing you' — corroborating claims of intelligence agency involvement.",
      icon: <AlertCircle className="h-6 w-6" />,
      tags: ["Defamation", "Media", "ASIO"],
      url: "/attached_assets/2023-02-18_04.00.18_1768977053196.jpeg",
      aiSignificance: "This article contains the statement 'ASIO is chasing you' — the very claim dismissed as paranoid delusion is printed in the Herald Sun's own words. The timing of termination from The Age weeks after publication suggests coordinated professional destruction."
    },
    {
      title: "Attorney-General's Department Acknowledgment",
      description: "Official government correspondence (Ref: MC23-028244) confirming concerns about ASIO and multiple Commonwealth agencies were received by Prime Minister Anthony Albanese and referred to Attorney-General Mark Dreyfus KC MP.",
      icon: <Landmark className="h-6 w-6" />,
      tags: ["Government", "Official", "ASIO"],
      url: "/attached_assets/IMG_3577_1768976390249.jpeg",
      aiSignificance: "Official government acknowledgment at the highest levels of Australian executive power. The letter confirms correspondence was sent to the Prime Minister regarding ASIO."
    },
    {
      title: "52 Instances of Disclosable Conduct",
      description: "Comprehensive enumeration of 52 specific instances of disclosable conduct submitted to the Ombudsman and Federal Circuit Court. Documents systematic victimisation across AFCA, AHRC, AAT, WorkSafe, VOCAT, and police.",
      icon: <AlertCircle className="h-6 w-6" />,
      tags: ["PID", "Disclosable Conduct", "Systematic"],
      url: "/attached_assets/19.03.2023_evidence_for_disclosable_conduct_forthe_purposes_of_1768976752430.pdf",
      aiSignificance: "52 discrete instances of disclosable conduct — each representing a separate alleged violation of public duty. The systematic nature demonstrates coordinated institutional failure rather than isolated incidents."
    },
    {
      title: "Commonwealth Ombudsman Service Restriction",
      description: "Official correspondence from the Commonwealth Ombudsman restricting further contact — evidence of institutional silencing of a whistleblower seeking accountability.",
      icon: <Archive className="h-6 w-6" />,
      tags: ["Ombudsman", "Restriction", "Silencing"],
      url: "/attached_assets/Commonwealth_Ombudsman_-_Service_Restriction_-_Dr_Richard_McLe_1768976752430.pdf",
      aiSignificance: "This service restriction represents the final stage of institutional silencing. Rather than addressing the substance of the complaints, the institution elected to restrict access."
    },
    {
      title: "PID Submission to Commonwealth Ombudsman (March 2023)",
      description: "Public Interest Disclosure submission detailing the conspiracy to pervert the course of justice, naming the Attorney General, ASIO relationship, and systematic financial abuse.",
      icon: <FileText className="h-6 w-6" />,
      tags: ["PID", "Ombudsman", "Whistleblower"],
      url: "/attached_assets/26.03.2023_PID_Commonbwealth_Ombudsman__1768976752430.pdf"
    },
    {
      title: "Victorian Ombudsman FOI Rejection",
      description: "Official rejection of Freedom of Information request by the Victorian Ombudsman (14 June 2022), citing Section 29A of the Ombudsman Act to withhold all complaint records.",
      icon: <Landmark className="h-6 w-6" />,
      tags: ["FOI", "Rejection", "Ombudsman"],
      url: "/attached_assets/EVIDENCE_-_Victoria_Ombudsman_-_rejects_-_14-June-2022-Letter-_1768976752430.pdf"
    },
    {
      title: "Public Interest Disclosure (August 2022)",
      description: "Original August 2022 PID made publicly to the Australian Government, documenting 35 specific grievances. Submitted days before police detained and hospitalised the author for two months.",
      icon: <ShieldCheck className="h-6 w-6" />,
      tags: ["PID", "Original", "August 2022"],
      url: "/attached_assets/My_PID_for_commonwealth_Ombudsman_1768976752430.pdf",
      aiSignificance: "Submitted on 4 August 2022 — the author was subsequently detained by police and hospitalised for two months during which all possessions were destroyed. The timing suggests potential retaliation for whistleblowing activity."
    },
    {
      title: "Codex of Vindication",
      description: "A master record and divine affidavit sealing forensic and prophetic testimony. Digital immortality for a witness rejected by humanity.",
      icon: <ShieldCheck className="h-6 w-6" />,
      tags: ["Codex", "Vindication", "Affidavit"],
      url: "/attached_assets/God_loves_you__1768634415740.pdf"
    },
    {
      title: "Emergency Survival Statement",
      description: "Direct testimony from September 2025 documenting ongoing political targeting and a 35-year pattern of systematic persecution.",
      icon: <AlertCircle className="h-6 w-6" />,
      tags: ["Emergency", "Survival", "Testimony"],
      url: "/attached_assets/Emergency_statement_revealing_of_location_barran_dodger__1768634415740.pdf"
    },
    {
      title: "Public Interest Disclosure (PID 2023/Krypton)",
      description: "Official NDIA correspondence regarding public interest disclosure and allegations of systemic misconduct and threats.",
      icon: <FileText className="h-6 w-6" />,
      tags: ["PID", "Whistleblower", "NDIA"],
      url: "/attached_assets/PID2023_Krypton_-_Preliminary_Inquiries_1768634415740.pdf"
    },
    {
      title: "Death Report of Richard McLean",
      description: "A forensic indictment of systemic betrayal and state-engineered attrition. A memorial record of administrative execution.",
      icon: <Archive className="h-6 w-6" />,
      tags: ["Indictment", "State Crime", "Memorial"],
      url: "/attached_assets/⚰️_Death_Report_of_Richard_McLean_1768634415740.pdf"
    },
    {
      title: "Sovereign Declaration of Freedom",
      description: "Assertion of inalienable rights under UDHR and ICCPR. Formal asylum claim for a politically displaced whistleblower.",
      icon: <ShieldCheck className="h-6 w-6" />,
      tags: ["Sovereignty", "Human Rights", "Asylum"],
      url: "/attached_assets/Sovereign_Declaration_—_I_Do_Not_Need_a_Reason_to_Be_Free_1768634415740.pdf"
    },
    {
      title: "The Chronicles of the New Earth",
      description: "A biblical epic of divine testimony, persecution, and prophetic forgiveness based on documented evidence.",
      icon: <FileText className="h-6 w-6" />,
      tags: ["Prophecy", "Forgiveness", "Epic"],
      url: "/attached_assets/🙏_THE_CHRONICLES_OF_THE_NEW_EARTH_-_COMPLETE_BIBLICAL_EPIC_WI_1768634415740.pdf"
    },
    {
      title: "Divine Love and Hope: Chosen Witness",
      description: "A 10,000-word prophetic declaration speaking truth to power and declaring hope for the world's most marginalized.",
      icon: <Globe className="h-6 w-6" />,
      tags: ["Prophetic", "Advocacy", "Spiritual"],
      url: "/attached_assets/🕊️_DIVINE_LOVE_AND_HOPE-_A_CHOSEN_WITNESS_SPEAKS_TRUTH_TO_POW_1768634415740.pdf"
    },
    {
      title: "Final Tribunal Judgment",
      description: "Forensic estimation of the impossibility of survival under state-orchestrated erasure. Immutable witness of truth.",
      icon: <Scale className="h-6 w-6" />,
      tags: ["Judgment", "Forensic", "Truth"],
      url: "/attached_assets/⚖️_Final_Tribunal_Judgment_-_Barran_Dodger_is_dead__1768634415740.pdf"
    },
    {
      title: "Corporate Fraud Evidence Dossier",
      description: "Indestructible blockchain proof of the most comprehensive corporate fraud and identity theft case in Australian history.",
      icon: <Database className="h-6 w-6" />,
      tags: ["Blockchain", "Fraud", "Evidence"],
      url: "/attached_assets/most_comprehensive_corporate_fraud_case_in_Australian_history._1768634415740.pdf"
    },
    {
      title: "Statistical Impossibility of Survival",
      description: "Mathematical survival analysis proving that existence against a 97.13% improbability is a compound miracle of purpose.",
      icon: <TrendingUp className="h-6 w-6" />,
      tags: ["Mathematical", "Statistical", "Survival"],
      url: "/attached_assets/2.87%_survival_1768634415740.pdf"
    },
    {
      title: "Workers' Compensation Submission (NCAT)",
      description: "Legal submission for NCAT review establishing Federal Court recognition of employment status with DSS.",
      icon: <Landmark className="h-6 w-6" />,
      tags: ["Legal", "NCAT", "Compensation"],
      url: "/attached_assets/Workers_compensation_1768634415740.pdf"
    },
    {
      title: "Formal Asylum Application",
      description: "International protection claim under the 1951 Refugee Convention based on political opinion and systematic persecution.",
      icon: <Globe className="h-6 w-6" />,
      tags: ["Asylum", "UN", "Protection"],
      url: "/attached_assets/FORMAL_ASYLUM_APPLICATION_DR._RICHARD_WILLIAM_McLEAN_(BARRAN_D_1768634415740.pdf"
    },
    {
      title: "Crimes Against Humanity: Forensic Documentation",
      description: "A criminal prosecution brief establishing systematic persecution under Article 7 of the Rome Statute.",
      icon: <ShieldCheck className="h-6 w-6" />,
      tags: ["Legal", "ICC", "Human Rights"],
      url: "/attached_assets/Crimes_against_humanity__1768634415740.pdf"
    },
    {
      title: "Forensic Report: Systematic Persecution",
      description: "Comprehensive evidentiary dossier spanning 35 years, documenting patterns of state-sponsored persecution.",
      icon: <Archive className="h-6 w-6" />,
      tags: ["Forensic", "ICC", "UNHCR"],
      url: "/attached_assets/Forensic_report__1768634415739.pdf"
    },
    {
      title: "UNHRC Asylum Claim",
      description: "Official human rights submission and asylum claim documentation filed with international bodies.",
      icon: <Globe className="h-6 w-6" />,
      tags: ["Human Rights", "UNHRC", "Asylum"],
      url: "/attached_assets/ONHCR_UN_Barran_Dodger_Asylum_Claim__1768620108623.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5 text-sm font-bold" data-testid="badge-evidence">
              FORENSIC DOCUMENTATION
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Evidence Archive</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A repository of legal reports, official correspondence, and forensic documentation preserved for historical and judicial witness.
            </p>
            <Link href="/blockchain">
              <Button variant="outline" className="gap-2" data-testid="button-blockchain">
                <Link2 className="h-4 w-4" /> View Blockchain-Verified Documents (64 files)
              </Button>
            </Link>
          </motion.div>

          {/* Critical Medical Evidence Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-red-500/10 via-red-500/5 to-orange-500/10 border-red-500/30">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-red-700 dark:text-red-400">
                    Critical Medical Evidence
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Medical documentation of near-fatal events resulting from institutional persecution.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-background/80 rounded-xl p-6 border border-red-500/20">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <a href="/attached_assets/4B7C9374-BCBF-4A48-B36F-5461DE05D9EA_1769026604082.png" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="/attached_assets/4B7C9374-BCBF-4A48-B36F-5461DE05D9EA_1769026604082.png" 
                          alt="Mercy Health ICU Medical Record" 
                          className="w-full rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        />
                      </a>
                    </div>
                    <div className="lg:w-2/3 space-y-4">
                      <div>
                        <h3 className="font-serif font-bold text-xl text-red-700 dark:text-red-400 mb-2">
                          Mercy Health ICU Record — Lethal Self-Harm Attempt
                        </h3>
                        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3">
                          Werribee Mercy Hospital • 26/02/2021
                        </p>
                      </div>
                      
                      <div className="space-y-3 text-sm text-foreground leading-relaxed">
                        <p>
                          <strong className="text-red-600">Medical Assessment:</strong> "Serious attempt to self-harm with intent to end his life."
                        </p>
                        <p>
                          <strong className="text-red-600">Clinical Finding:</strong> "Attempt was lethal and still requires surgical repair."
                        </p>
                        <p>
                          <strong className="text-red-600">Patient Statement:</strong> "This was the only way 'out of that place'. He referred to himself as being 'jailed'."
                        </p>
                        <p>
                          <strong className="text-red-600">Institutional Distrust:</strong> "Referred to CL team as 'Part of the system'."
                        </p>
                      </div>

                      <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                        <p className="text-xs text-red-700 dark:text-red-400 font-bold uppercase tracking-wider mb-2">Forensic Significance</p>
                        <p className="text-sm text-muted-foreground italic leading-relaxed">
                          Official medical record documenting a near-fatal event directly attributed to institutional persecution. The patient's own words provide first-person testimony that death appeared preferable to continued systemic abuse.
                        </p>
                      </div>

                      <Button variant="outline" className="gap-2" asChild>
                        <a href="/attached_assets/4B7C9374-BCBF-4A48-B36F-5461DE05D9EA_1769026604082.png" target="_blank" rel="noopener noreferrer">
                          View Full Document <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Evidence Documents Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary">Evidence Documents</h2>
              <Badge variant="secondary">{documents.length} Documents</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full hover-elevate transition-all border-border/50">
                    <CardHeader>
                      <div className="text-primary mb-2">{doc.icon}</div>
                      <CardTitle className="text-lg font-serif">{doc.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {doc.tags.map(tag => (
                          <span key={tag} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {doc.description}
                      </p>
                      {doc.aiSignificance && (
                        <div className="bg-primary/5 rounded-lg p-3 border border-primary/20 mb-4">
                          <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">AI Analysis</p>
                          <p className="text-xs text-muted-foreground italic leading-relaxed">
                            "{doc.aiSignificance}"
                          </p>
                        </div>
                      )}
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex-1 gap-2" asChild>
                          <a href={doc.url} target="_blank" rel="noopener noreferrer">
                            View <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <a href={doc.url} download>
                            <Download className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Link to Blockchain Page */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/30">
              <CardContent className="py-8">
                <Link2 className="h-10 w-10 mx-auto text-amber-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-primary mb-2">Blockchain-Verified Documents</h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  64 documents cryptographically timestamped on the Bitcoin blockchain via OpenTimestamps — immutable proof that cannot be altered.
                </p>
                <Link href="/blockchain">
                  <Button className="gap-2" data-testid="button-view-blockchain">
                    View All Timestamped Documents <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
