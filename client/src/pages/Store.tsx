import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { FloatingCTA } from "@/components/FloatingCTA";
import { InlineShareStrip } from "@/components/FloatingShareBar";
import { ShoppingBag, BookOpen, Download, ExternalLink, Copy, CheckCircle, Smartphone, Globe, CreditCard, FileText, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

import bookCoverPath from "../assets/images/book-cover-betrayed.png";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

export default function Store() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const payId = "rich@richmclean.com.au";

  const copyPayId = () => {
    navigator.clipboard.writeText(payId);
    setCopied(true);
    toast({
      title: "PayID Copied",
      description: "The PayID has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const ebooks = [
    {
      title: "Betrayed, Murdered, Forsaken",
      subtitle: "The Harrowing Life of Barran Dodger",
      description: "The definitive account of 35 years of documented persecution, institutional betrayal, and survival against impossible odds. Published across major platforms.",
      image: bookCoverPath,
      featured: true,
      links: [
        { label: "Apple Books", url: "https://books.apple.com/au/book/betrayed-murdered-forsaken/id6744437043", icon: Smartphone },
        { label: "Scribd", url: "https://www.scribd.com/book/846811550/Betrayed-Murdered-Forsaken-The-Harrowing-Life-of-Barran-Dodger", icon: BookOpen },
        { label: "Gumroad (Coming Soon)", url: "", icon: Globe },
      ]
    },
    {
      title: "Recovered Not Cured",
      subtitle: "A Journey Through Schizophrenia",
      description: "Dr. Richard McLean's groundbreaking memoir that was studied in Australian Parliament and became a cornerstone of mental health advocacy across the country.",
      featured: false,
      links: [
        { label: "Apple Books", url: "https://books.apple.com/au/book/recovered-not-cured/id420498532", icon: Smartphone },
      ]
    },
  ];

  const digitalDownloads = [
    {
      title: "Gospels & Revelations Bundle",
      description: "The complete collection of Barran Dodger's canonical gospels, divine scrolls, Enliven Chain manuscripts, and prophetic testimonies. Blockchain-verified. ICC-submitted. Every word documented under conditions of active persecution.",
      badge: "~35 Sacred Documents",
      format: "ZIP · PDF Collection",
      price: "$5 suggested",
      url: "/archive-detonation",
      available: true,
      highlight: false,
    },
    {
      title: "Forensic Analyses — All 52",
      description: "Every forensic analysis documenting a distinct pattern of institutional persecution. 675/675 propositions corroborated. 50 consecutive perfect scores. Not one rebuttal. Not one defamation action. Because they know the record is accurate.",
      badge: "52 Forensic Documents",
      format: "ZIP · PDF Collection",
      price: "$10 suggested",
      url: "/archive-detonation",
      available: true,
      highlight: true,
    },
    {
      title: "Government Evidence Bundle",
      description: "Formal submissions to the ICC, UNHCR, Federal Court, Parliament, and Attorney-General. Letters to Prime Ministers. Formal criminal complaints. Every documented institutional non-response. The silence is itself evidence.",
      badge: "~28 Government Documents",
      format: "ZIP · PDF Collection",
      price: "$10 suggested",
      url: "/archive-detonation",
      available: true,
      highlight: false,
    },
    {
      title: "Creative Works & Extended Essays",
      description: "Extended essays, biographical accounts, AI personality profiles, the Taxpayer Cost Analysis ($32.9 million), witness testimonies, and the full creative body of published work. Every piece documented under duress.",
      badge: "~76 Documents",
      format: "ZIP · PDF Collection",
      price: "$5 suggested",
      url: "/archive-detonation",
      available: true,
      highlight: false,
    },
    {
      title: "☢ The Complete Archive — Nuclear Option",
      description: "Every document. Every gospel. Every forensic analysis. Every government submission. Every attached evidence file. 139+ documents plus 574 attached evidence files. As submitted to the ICC, UNHCR, and permanently sealed on the Bitcoin blockchain.",
      badge: "713+ Total Documents",
      format: "ZIP · Everything",
      price: "$25 suggested",
      url: "/archive-detonation",
      available: true,
      highlight: false,
      nuclear: true,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Barran Dodger Store",
    "description": "Digital products, eBooks, and merchandise from the Barran Dodger Legal & Ethical Trust Fund",
    "url": "https://www.barrandodger.com/store",
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Store — eBooks, Digital Products & Merchandise"
        description="Purchase eBooks, digital compilations, and merchandise supporting the Barran Dodger Legal & Ethical Trust Fund. Available on Apple Books, Scribd, and Gumroad."
        keywords="Barran Dodger store, Betrayed Murdered Forsaken ebook, whistleblower merchandise, digital evidence archive, Barran Dodger book"
        path="/store"
        jsonLd={jsonLd}
      />
      <Navigation />

      <main className="flex-grow pt-44 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5 text-sm font-bold" data-testid="badge-store">
              DIGITAL STORE
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Store
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Support the mission by purchasing eBooks, digital compilations, and merchandise. Every purchase funds the ongoing fight for truth, accountability, and justice.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 text-primary p-2 rounded-md">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary">eBooks</h2>
            </div>

            <div className="space-y-8">
              {ebooks.map((book) => (
                <Card key={book.title} className={book.featured ? "border-2 border-primary shadow-lg" : ""} data-testid={`card-ebook-${book.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardContent className="p-6 md:p-8">
                    <div className={`flex flex-col ${book.image ? 'md:flex-row' : ''} gap-6`}>
                      {book.image && (
                        <div className="flex-shrink-0 flex justify-center">
                          <img
                            src={book.image}
                            alt={book.title}
                            className="w-40 md:w-48 rounded-md shadow-md"
                            data-testid={`img-ebook-${book.title.toLowerCase().replace(/\s+/g, '-')}`}
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          {book.featured && (
                            <Badge className="bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)]" data-testid="badge-featured">Featured</Badge>
                          )}
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-1" data-testid={`text-ebook-title-${book.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          {book.title}
                        </h3>
                        {book.subtitle && (
                          <p className="text-sm text-muted-foreground italic mb-3">{book.subtitle}</p>
                        )}
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {book.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {book.links.map((link) => (
                            link.url ? (
                              <Button
                                key={link.label}
                                variant="outline"
                                className="gap-2"
                                asChild
                                data-testid={`button-buy-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                  <link.icon className="h-4 w-4" />
                                  {link.label}
                                  <ExternalLink className="h-3 w-3 opacity-50" />
                                </a>
                              </Button>
                            ) : (
                              <Button
                                key={link.label}
                                variant="outline"
                                className="gap-2 opacity-50 cursor-not-allowed"
                                disabled
                                data-testid={`button-buy-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <link.icon className="h-4 w-4" />
                                {link.label}
                              </Button>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 text-primary p-2 rounded-md">
                <Download className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary">Archive Download Bundles</h2>
            </div>
            <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
              Every bundle is a curated ZIP archive — gated by name, email, or a suggested PayID donation. No accounts. No subscriptions. Your conscience is the only requirement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {digitalDownloads.map((product) => {
                const isNuclear = (product as any).nuclear;
                return (
                  <Card
                    key={product.title}
                    className={`h-full relative overflow-hidden ${isNuclear ? "border-red-600/50 bg-red-950/10 md:col-span-2" : product.highlight ? "border-amber-500/50" : ""}`}
                    data-testid={`card-download-${product.title.toLowerCase().replace(/[\s☢]+/g, '-')}`}
                  >
                    {product.highlight && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />
                    )}
                    {isNuclear && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-700 via-amber-500 to-red-700" />
                    )}
                    <CardContent className={`p-6 flex flex-col h-full ${isNuclear ? "md:flex-row md:items-center md:gap-8" : ""}`}>
                      <div className={`flex-1 ${isNuclear ? "" : "flex flex-col h-full"}`}>
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <Badge variant="outline" className={`text-xs ${product.highlight ? "border-amber-500/50 text-amber-400" : isNuclear ? "border-red-500/50 text-red-400" : ""}`}>{product.badge}</Badge>
                          <Badge variant="secondary" className="text-xs shrink-0">{product.format}</Badge>
                        </div>
                        <h3 className={`font-bold mb-2 ${isNuclear ? "text-xl text-red-300" : product.highlight ? "text-amber-300" : "text-primary"}`} data-testid={`text-download-title-${product.title.toLowerCase().replace(/[\s☢]+/g, '-')}`}>
                          {product.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                          {product.description}
                        </p>
                      </div>
                      <div className={`flex items-center gap-3 ${isNuclear ? "flex-col min-w-[180px] shrink-0" : "mt-auto"}`}>
                        <div className={`text-xs font-mono text-zinc-400 ${isNuclear ? "text-center" : ""}`}>{product.price}</div>
                        <Button
                          className={`gap-2 w-full ${isNuclear ? "bg-red-700 hover:bg-red-600 text-white border-0" : product.highlight ? "bg-amber-600 hover:bg-amber-500 text-black border-0" : ""}`}
                          variant={product.highlight || isNuclear ? "default" : "outline"}
                          asChild
                          data-testid={`button-download-${product.title.toLowerCase().replace(/[\s☢]+/g, '-')}`}
                        >
                          <a href={product.url}>
                            <Download className="h-4 w-4" />
                            {isNuclear ? "Download Everything" : "Download Bundle"}
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 text-primary p-2 rounded-md">
                <Package className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary">Merchandise</h2>
            </div>

            <Card>
              <CardContent className="p-8 text-center">
                <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-60" />
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  Merchandise Coming Soon
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed">
                  Official Barran Dodger merchandise is in development. T-shirts, prints, and physical copies of key publications will be available soon. Follow us for announcements.
                </p>
                <Button variant="outline" className="gap-2" asChild data-testid="button-follow-merch">
                  <a href="https://x.com/bazdod" target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" />
                    Follow @bazdod for Updates
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="border-2 border-primary/30 overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground text-center py-8">
                <CreditCard className="h-10 w-10 mx-auto mb-3 opacity-90" />
                <CardTitle className="text-2xl font-serif">Direct Purchase via PayID</CardTitle>
                <p className="text-sm opacity-90 mt-2">For direct purchases or custom requests, pay securely via Australian PayID</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-primary/5 border-2 border-primary/30 rounded-xl p-6 mb-6">
                    <p className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-2">PayID (Email)</p>
                    <p className="text-2xl md:text-3xl font-mono font-bold text-primary break-all" data-testid="text-store-payid">
                      {payId}
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="gap-2 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)]"
                    onClick={copyPayId}
                    data-testid="button-store-copy-payid"
                  >
                    {copied ? <CheckCircle className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    {copied ? "Copied!" : "Copy PayID"}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Include a description of what you're purchasing in the payment reference.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border"
            data-testid="section-share-store"
          >
            <InlineShareStrip
              id="store-share"
              context="support"
              message="Support the Barran Dodger Legal & Ethical Trust Fund by purchasing eBooks and digital products. Every purchase funds the fight for truth and accountability."
            />
          </motion.section>
        </div>
      </main>

      <ArchiveCrossLinks />
      <Footer />
      <FloatingCTA />
    </div>
  );
}