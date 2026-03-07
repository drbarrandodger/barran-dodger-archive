import { motion } from "framer-motion";
import { Download, ArrowRight, Share2, Shield, FileText, Eye, Flame, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SocialShare } from "@/components/SocialShare";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { DownloadBadge, trackDownload } from "@/components/DownloadCounter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const TOP_DOCUMENTS = [
  {
    title: "THE MAN AUSTRALIA TRIED TO ERASE",
    tagline: "Built entirely from the government's own documents. They wrote the evidence themselves.",
    url: "/THE_MAN_AUSTRALIA_TRIED_TO_ERASE.pdf",
    tags: ["Whistleblower Expose", "Free PDF"],
  },
  {
    title: "THE ARCHITECTURE OF ADMINISTRATIVE ANNIHILATION",
    tagline: "25+ agencies, 8 paradoxes, 35 years. A statistically impossible pattern of institutional harm.",
    url: "/attached_assets/THE_ARCHITECTURE_OF_ADMINISTRATIVE_ANNIHILATION_1772799878162.pdf",
    tags: ["Forensic Analysis", "Rome Statute"],
  },
  {
    title: "BEYOND PATHOLOGY",
    tagline: "AI-authored academic proof that 'Targeted Individual' describes verified phenomena, not psychiatric delusion.",
    url: "/attached_assets/BEYOND_PATHOLOGY_1772855173966.pdf",
    tags: ["Academic Research", "Forensic"],
  },
  {
    title: "CRIMES AGAINST HUMANITY — Final Demand",
    tagline: "Formal legal demand to PM, AG, AFP, NACC. State-sanctioned murder. Fourteen-day deadline.",
    url: "/documents/crimes_against_humanity_final_demand.pdf",
    tags: ["Legal Notice", "Free PDF"],
  },
  {
    title: "THE JOSEPH PARALLEL — Prophetic Evidentiary Narrative",
    tagline: "2,146 evidence files mapped against Genesis 37-50. Every parallel fact-checked against government records.",
    url: "/documents/the_joseph_parallel_prophetic_narrative.pdf",
    tags: ["Prophetic", "Free PDF"],
  },
  {
    title: "DIGITAL OPPRESSION — 100,000-Word Examination",
    tagline: "Pegasus spyware, surveillance apparatus, and a $42.5M-$123M compensation framework. All documented.",
    url: "/documents/digital_oppression_100000_word_essay.pdf",
    tags: ["100K Words", "Forensic"],
  },
  {
    title: "ENTRAPMENT FOR ERASURE — Criminal Affidavit",
    tagline: "NDIS support weaponized to create dependency, then withdrawn to induce crisis. Named perpetrators.",
    url: "/attached_assets/ENTRAPMENT_FOR_ERASURE_AFFIDAVIT_1769766037602.pdf",
    tags: ["Criminal Affidavit", "NDIS"],
  },
  {
    title: "EVIDENCE SUMMARY — Complete Persecution Record",
    tagline: "Every agency. Every rejection. Every contradiction. All in one document.",
    url: "/attached_assets/EVIDENCE_SUMMARY_DR_MCLEAN_1769766475861.pdf",
    tags: ["Evidence Summary"],
  },
  {
    title: "THE COSMIC SCROLL OF TEN",
    tagline: "Ten paradigm-breaking questions introducing Emotophysics and post-materialist knowledge systems.",
    url: "/documents/cosmic_scroll_of_ten.pdf",
    tags: ["Sacred Scripture", "Free PDF"],
  },
  {
    title: "COMPREHENSIVE PID ACT ANALYSIS",
    tagline: "Legal proof that whistleblower protections were systematically violated by the very agencies meant to enforce them.",
    url: "/attached_assets/COMPREHENSIVE_PID_ACT_ANALYSIS_1769766123842.pdf",
    tags: ["PID Act", "Legal Framework"],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ViralLanding() {
  const shareText = "The documents Australia doesn't want you to see. 240+ blockchain-verified files expose 35 years of government persecution. Read them before they disappear. @bazdod";
  const shareUrl = "https://www.barrandodger.com.au/the-truth";

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SEO
        title="The Documents Australia Doesn't Want You to See"
        description="240+ blockchain-verified documents expose 35 years of Australian government persecution. Download the evidence. Share the truth. They can't erase what's already been seen."
        keywords="viral evidence, banned documents Australia, whistleblower documents, government cover up, blockchain evidence, free download"
        path="/"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "The Documents Australia Doesn't Want You to See",
          "description": "Top 10 most critical blockchain-verified documents exposing Australian government corruption",
          "url": "https://www.barrandodger.com.au/",
          "publisher": {
            "@type": "Organization",
            "name": "Barran Dodger Legal & Ethical Trust Fund",
          },
        }}
      />
      <Navigation />

      <section className="pt-32 pb-16 px-4 relative overflow-hidden" data-testid="section-viral-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.12)_0%,_transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-6">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Badge variant="outline" className="border-red-500/60 text-red-400 px-6 py-2 text-sm font-bold uppercase tracking-wider" data-testid="badge-viral-warning">
              <AlertTriangle className="h-4 w-4 mr-2" /> They Don't Want You To See This
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight"
            data-testid="text-viral-headline"
          >
            The Documents Australia{" "}
            <span className="text-red-500">Doesn't Want</span>{" "}
            You to See
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            data-testid="text-viral-subtitle"
          >
            240+ blockchain-verified forensic documents. 35 years of persecution across 35+ government agencies.
            14 forced psychiatric detentions. An assassination attempt. All exposed. All downloadable. All free.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <a href="#documents">
              <Button size="lg" className="bg-red-600 text-white font-bold text-lg px-8 py-6 border-red-600" data-testid="button-viral-see-documents">
                <Eye className="mr-2 h-5 w-5" /> See the Documents
              </Button>
            </a>
            <Link href="/evidence">
              <Button variant="outline" size="lg" className="border-white/30 text-white text-lg px-8 py-6" data-testid="button-viral-full-archive">
                <FileText className="mr-2 h-5 w-5" /> Full Archive (240+)
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[hsl(38,92%,50%)]" />
              <span>Blockchain-sealed</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4 text-[hsl(38,92%,50%)]" />
              <span>Free to download</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 className="h-4 w-4 text-[hsl(38,92%,50%)]" />
              <span>Share everywhere</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="documents" className="py-16 px-4 bg-gradient-to-b from-black to-[hsl(222,55%,6%)]" data-testid="section-viral-documents">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white" data-testid="text-top-documents-heading">
                Top 10 Documents They Tried to Bury
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto">
                Every document below is free, verifiable, and built from the government's own records.
              </p>
            </div>

            {TOP_DOCUMENTS.map((doc, index) => (
              <motion.div key={doc.url} variants={fadeIn}>
                <Card className="bg-white/[0.03] border-white/10 hover-elevate" data-testid={`card-viral-doc-${index}`}>
                  <CardContent className="p-5 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center justify-center md:justify-start gap-3 shrink-0">
                        <span className="text-2xl font-bold text-[hsl(38,92%,50%)] tabular-nums w-8 text-center" data-testid={`text-doc-rank-${index}`}>
                          {index + 1}
                        </span>
                        <Flame className="h-5 w-5 text-red-500" />
                      </div>
                      <div className="flex-1 min-w-0 space-y-1.5">
                        <h3 className="font-serif font-bold text-white text-base md:text-lg leading-snug" data-testid={`text-doc-title-${index}`}>
                          {doc.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed" data-testid={`text-doc-tagline-${index}`}>
                          {doc.tagline}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {doc.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-[hsl(38,92%,50%)]/30 text-[hsl(38,92%,50%)] no-default-active-elevate">
                              {tag}
                            </Badge>
                          ))}
                          <DownloadBadge url={doc.url} />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Button
                          asChild
                          className="bg-[hsl(38,92%,50%)] text-black font-bold gap-2"
                          data-testid={`button-download-viral-${index}`}
                        >
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackDownload(doc.url)}
                          >
                            <Download className="h-4 w-4" /> Download
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[hsl(222,55%,6%)]" data-testid="section-viral-share">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white" data-testid="text-share-heading">
            Share This Before It Disappears
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Every share makes it harder for them to erase. Copy the link. Post on X. Send to a journalist. The truth only survives when people spread it.
          </p>
          <SocialShare
            title={shareText}
            description="240+ blockchain-verified documents exposing 35 years of Australian government persecution against Dr Richard McLean (Barran Dodger). Free downloads."
            url={shareUrl}
          />
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/archive">
              <Button size="lg" className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold gap-2" data-testid="button-viral-explore-archive">
                <Eye className="h-4 w-4" /> Explore the Full Archive
              </Button>
            </Link>
            <Link href="/donate">
              <Button variant="outline" size="lg" className="border-[hsl(38,92%,50%)]/40 text-[hsl(38,92%,50%)] gap-2" data-testid="button-viral-donate">
                <ArrowRight className="h-4 w-4" /> Support This Cause
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-[hsl(222,55%,6%)] to-black" data-testid="section-viral-newsletter">
        <div className="container mx-auto max-w-md text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white" data-testid="text-newsletter-heading">
            Stay Updated
          </h2>
          <p className="text-gray-400 text-sm">
            New evidence drops, legal updates, and case developments delivered to your inbox. No spam.
          </p>
          <NewsletterSignup variant="card" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
