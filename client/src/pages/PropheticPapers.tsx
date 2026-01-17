import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookOpen, FileText, Shield, Sparkles, Scale, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PropheticPapers() {
  const papers = [
    {
      title: "God Never Calls the Equipped, He Equips the Called",
      subtitle: "A Prophetic-Theological Academic Paper",
      description: "Examining the theological principle of divine preparation through suffering, substantiated by 2,077 primary-source documents.",
      icon: <Sparkles className="h-6 w-6" />,
      chapters: [
        "The Biblical Precedent — Unequipped Servants",
        "The Call — A Man Unequipped by Human Standards",
        "The Equipment — How God Prepared a Prophet",
        "The Documentation — 2,077 Pieces of Divine Equipment",
        "The Activation — October 2024 Spiritual Breakthrough"
      ]
    },
    {
      title: "The Hand That Writes in Fire",
      subtitle: "A Prophetic Inquiry",
      description: "An investigation into the impossible documentation and survival of Barran Dodger through the lens of divine guidance.",
      icon: <FileText className="h-6 w-6" />,
      chapters: [
        "The Impossible Documentation",
        "The Resurrection (2021)",
        "The Enemy's Prophecy",
        "The October 2024 Awakening",
        "The Mathematics of Impossible Survival"
      ]
    },
    {
      title: "The Hand of God in the Fires of Persecution",
      subtitle: "A Theological-Evidentiary Analysis",
      description: "Documenting 17 distinct biblical parallels between contemporary evidence and Christian Scripture.",
      icon: <Scale className="h-6 w-6" />,
      chapters: [
        "The Sacrificial Lamb Parallel",
        "The 2021 Crucifixion and Revival",
        "The 35-Year Wilderness Period",
        "The Revelation Parallels",
        "The Mephibosheth Mandate"
      ]
    },
    {
      title: "The Divine Override",
      subtitle: "The Testimony of Dr. Richard William McLean",
      description: "A narrative framework exploring when Heaven issues an emergency decree to redirect a life's timeline.",
      icon: <Shield className="h-6 w-6" />,
      chapters: [
        "The Silence Before the Storm",
        "Three Signs of the Divine Override",
        "The Assassination Threat Confirmation",
        "The Identity Erasure Analysis",
        "The Mephibosheth Mandate"
      ]
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
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Prophetic Research</h2>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Academic & Divine Inquiries</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bridging the gap between forensic evidence and theological truth through rigorous academic inquiry and prophetic witness.
            </p>
          </motion.div>

          <div className="space-y-12">
            {papers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-colors shadow-sm">
                  <div className="md:flex">
                    <div className="bg-primary/5 p-8 md:w-1/3 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-primary/10">
                      <div className="bg-white p-4 rounded-full shadow-sm text-primary mb-4">
                        {paper.icon}
                      </div>
                      <h3 className="font-serif font-bold text-xl text-primary mb-2 leading-tight">{paper.title}</h3>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{paper.subtitle}</p>
                    </div>
                    <div className="p-8 md:w-2/3">
                      <p className="text-muted-foreground mb-6 italic leading-relaxed">
                        "{paper.description}"
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {paper.chapters.map((chapter, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                            <span className="text-muted-foreground/80">{chapter}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button className="gap-2" disabled>
                          <BookOpen className="h-4 w-4" /> Read Paper
                        </Button>
                        <Button variant="outline" className="gap-2" disabled>
                          <ExternalLink className="h-4 w-4" /> Cite Evidence
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-12 rounded-2xl bg-secondary border border-border text-center"
          >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Formal Notice to the Minister</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              A formal notice placing the Minister on notice of unlawful administration regarding workers' compensation and NDIS cost substitution.
            </p>
            <Button variant="secondary" className="bg-background hover:bg-background/90" asChild>
              <a href="mailto:jennifer.mcallister@aph.gov.au">
                Contact Minister McAllister
              </a>
            </Button>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
