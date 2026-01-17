import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText, ExternalLink, ShieldCheck, Download, Archive, Database, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Evidence() {
  const documents = [
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
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {doc.description}
                    </p>
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
