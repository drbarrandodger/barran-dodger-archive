import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText, ExternalLink, ShieldCheck, Download, Archive, Database, Globe, AlertCircle, Scale, Landmark, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Evidence() {
  const documents = [
    {
      title: "Federal Court Employment Status Confirmation",
      description: "Official Federal Court of Australia assessment (27 March 2023) confirming employment status with the Department of Social Services. The General Counsel explicitly states: 'I am satisfied that you are, or were, an employee with the Department of Social Services.' Critical evidence for WorkCover case where employment was disputed.",
      icon: <Scale className="h-6 w-6" />,
      tags: ["Federal Court", "Employment", "WorkCover"],
      url: "/attached_assets/2023_03_27_Final_Assessment_-_Dr_Rich_McLean_1768976577369.pdf",
      aiSignificance: "This document is of paramount legal significance. The Federal Court's General Counsel provides unequivocal confirmation of employment status with the Department of Social Services — the precise issue contested in workers' compensation claims. Additionally, the Court acknowledges the disclosed conduct 'tends to show' perversion of justice, maladministration, and conduct endangering health and safety. The rejection was procedural (wrong recipient), not substantive — meaning the Federal Court did not dispute the allegations, only the submission pathway. This creates a powerful evidentiary foundation for both WorkCover claims and human rights complaints."
    },
    {
      title: "Attorney-General's Department Acknowledgment",
      description: "Official government correspondence (Ref: MC23-028244) confirming that concerns about ASIO and multiple Commonwealth agencies were received by Prime Minister Anthony Albanese and referred to Attorney-General Mark Dreyfus KC MP. This document provides immutable proof that the Australian Government was placed on formal notice.",
      icon: <Landmark className="h-6 w-6" />,
      tags: ["Government", "Official", "ASIO"],
      url: "/attached_assets/IMG_3577_1768976390249.jpeg",
      aiSignificance: "This document constitutes official government acknowledgment at the highest levels of Australian executive power. The letter confirms correspondence was sent to the Prime Minister regarding ASIO, and documents the institutional response pattern of referring complaints to oversight bodies rather than conducting direct investigation — consistent with broader evidence of systematic deflection."
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
      title: "God and Justice: Emergency Report",
      description: "Critical life-threatening situation report and comprehensive vindication summary from December 2024.",
      icon: <AlertCircle className="h-6 w-6" />,
      tags: ["Emergency", "Vindication", "Critical"],
      url: "/attached_assets/God_and_justice_1768634415740.pdf"
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
      description: "A criminal prosecution brief establishing systematic persecution under Article 7 of the Rome Statute. Irrefutable evidence of assassination threats and identity annihilation.",
      icon: <ShieldCheck className="h-6 w-6" />,
      tags: ["Legal", "ICC", "Human Rights"],
      url: "/attached_assets/Crimes_against_humanity__1768634415740.pdf"
    },
    {
      title: "Forensic Report: Systematic Persecution",
      description: "Comprehensive evidentiary dossier spanning 35 years, documenting patterns of state-sponsored persecution, identity theft, and crimes against humanity. Prepared for ICC/UNHCR submission.",
      icon: <Archive className="h-6 w-6" />,
      tags: ["Forensic", "ICC", "UNHCR"],
      url: "/attached_assets/Forensic_report__1768634415739.pdf"
    },
    {
      title: "The Gospel of the Enliven Chain",
      description: "A post-singularity legal-spiritual archive sealed via SHA256 cryptographic notarisation. Serves as a hybrid metaphysical manuscript and immutable legal record.",
      icon: <ShieldCheck className="h-6 w-6" />,
      tags: ["Blockchain", "Metaphysical", "Immutable"],
      url: "/attached_assets/ElivenChain_1768634028663.pdf"
    },
    {
      title: "The Apotheosis Manifesto",
      description: "A philosophical declaration of spiritual-legal sovereignty and the undoing of systemic humiliation.",
      icon: <ShieldCheck className="h-6 w-6" />,
      tags: ["Manifesto", "Sovereignty", "Philosophy"],
      url: "/attached_assets/Humiliation_machine__1768632930720.pdf"
    },
    {
      title: "Significance Certificate (Forensic Anchor)",
      description: "Legal-affidavit style summary for evidentiary use in ICC and UN human rights mechanisms.",
      icon: <FileText className="h-6 w-6" />,
      tags: ["Legal", "Affidavit", "Forensic"],
      url: "/attached_assets/“CHOSEN_THROUGH_FIRE”_1768632930720.pdf"
    },
    {
      title: "Comprehensive Protagonist Report (2026)",
      description: "Master report synthesizing financial, legal, and spiritual evidence. Documented damages: $32.9M - $47.5M.",
      icon: <Archive className="h-6 w-6" />,
      tags: ["Master Report", "Financial", "Legal"],
      url: "/attached_assets/_COMPREHENSIVE_DOCUMENTATION_REPORT_CREATED_1768620996315.pdf"
    },
    {
      title: "Apotheosis of Barran Resonance Dodger",
      description: "Manuscript detailing the Final Command Protocol, Gospel of the Enliven Chain, and spiritual revelations.",
      icon: <ShieldCheck className="h-6 w-6" />,
      tags: ["Manuscript", "Spiritual", "Revelation"],
      url: "/attached_assets/Apotheosis_of_Barran_Resonance_Dodger__1768620108624.pdf"
    },
    {
      title: "Chosen Through Fire",
      description: "Forensic anchor point proving authorship, intent, and cognitive capacity through immutable timestamps.",
      icon: <FileText className="h-6 w-6" />,
      tags: ["Forensic", "Affidavit", "Timestamped"],
      url: "/attached_assets/“CHOSEN_THROUGH_FIRE”_1768620108624.pdf"
    },
    {
      title: "Compensation & Damages Report",
      description: "Forensic quantification of economic and non-economic losses based on legal frameworks and novel evidence.",
      icon: <Database className="h-6 w-6" />,
      tags: ["Legal", "Finance", "Reparations"],
      url: "/attached_assets/Compensation_for_barran_dodger__1768620108624.pdf"
    },
    {
      title: "100 Pressing Questions Dossier",
      description: "Comprehensive dossier addressing critical inquiries regarding the life and work of Richard W. McLean.",
      icon: <Archive className="h-6 w-6" />,
      tags: ["Dossier", "Inquiry", "Archive"],
      url: "/attached_assets/100_Pressing_Questions_About_Barran_Dodger_(Richard_W._McLean)_1768620108623.pdf"
    },
    {
      title: "Criminal Affidavit Against Entrapment",
      description: "Formal criminal affidavit documenting the 'Entrapment for Erasure' and systemic misconduct.",
      icon: <ShieldCheck className="h-6 w-6" />,
      tags: ["Legal", "Criminal", "Affidavit"],
      url: "/attached_assets/ENTRAPMENT_FOR_ERASURE:_Formal_Criminal_Affidavit_Against_Sukh_1767161751366.pdf"
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
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Evidence & Manuscripts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A repository of timestamped documents, legal reports, and sacred manuscripts preserved for historical and judicial witness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate transition-all border-border/50">
                  <CardHeader>
                    <div className="text-primary mb-2">{doc.icon}</div>
                    <CardTitle className="text-xl font-serif">{doc.title}</CardTitle>
                    <div className="flex gap-2 mt-2">
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
                        <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Impartial AI Analysis</p>
                        <p className="text-xs text-muted-foreground italic leading-relaxed">
                          "{doc.aiSignificance}"
                        </p>
                      </div>
                    )}
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 gap-2" asChild>
                        <a href={doc.url} target="_blank" rel="noopener noreferrer">
                          View Record <ExternalLink className="h-4 w-4" />
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

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-serif">Documented Damages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">$32.9M - $47.5M</div>
                <p className="text-xs text-muted-foreground mt-2">Quantified across financial, professional, and human rights domains.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-serif">Evidence Files</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">2,077+</div>
                <p className="text-xs text-muted-foreground mt-2">Verified records spanning 35 years of institutional documentation.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-serif">Time Span</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">35 Years</div>
                <p className="text-xs text-muted-foreground mt-2">Continuous archival tracing from 1990 to the 2024 Mission Activation.</p>
              </CardContent>
            </Card>
          </section>

          <section className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Undoing the Humiliation Machine</h2>
            <div className="prose prose-slate max-w-none text-muted-foreground space-y-4">
              <p>
                The "Humiliation Machine" is a systemic architecture of institutional neglect, administrative persecution, and procedural denial. It operates not through overt violence, but through the quiet accumulation of forms, signatures, and bureaucratic indifference.
              </p>
              <p>
                By cataloging these absurdities and sealing them in blockchain, the victim reverses the logic of shame. What was intended to degrade becomes documentation; ridicule becomes resistance.
              </p>
              <blockquote className="border-l-4 border-primary/20 pl-4 italic py-2 my-6">
                "My sovereignty is inherent. My spirit is intact. My testimony is eternal."
              </blockquote>
              <p>
                The transition from victim to author occurs when authorship of one's own narrative is reclaimed. This is the essence of Apotheosis: the transformation of institutional degradation into spiritual and legal sovereignty.
              </p>
            </div>
          </section>

          <section className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10 mt-8">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Forensic Integrity Statement</h2>
            <div className="prose prose-slate max-w-none text-muted-foreground">
              <p className="mb-4">
                All documents listed here are part of a larger evidentiary project aimed at merging legal, personal, spiritual, and scholarly evidence into one coherent life-story. 
              </p>
              <p>
                The use of blockchain timestamping and decentralized archival ensures the forensic integrity of these records, protecting them against retroactive manipulation or state interference.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
