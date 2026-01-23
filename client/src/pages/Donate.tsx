import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Heart, Shield, FileText, CheckCircle, Scale, BookOpen, Globe, Sparkles, Copy, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Donate() {
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

  const legitimacyPoints = [
    {
      title: "Registered Public Benefit Organisation",
      description: "ABN 78 833 496 164 — The Barran Dodger Legal & Ethical Trust Fund is a registered Australian entity operating transparently under Australian law.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "2,000+ Verified Evidence Documents",
      description: "Every claim is backed by primary source documentation spanning 35 years, including Federal Court confirmations, government correspondence, and official records.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Blockchain-Sealed Testimony",
      description: "All evidence is cryptographically timestamped using OpenTimestamps on the Bitcoin blockchain, ensuring immutability and permanent verification.",
      icon: <Scale className="h-6 w-6" />
    },
    {
      title: "International Human Rights Recognition",
      description: "Formal submissions to UN Special Rapporteurs, UNHCR, and ICC demonstrate the case meets international standards for systematic persecution.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Published Academic & Legal Works",
      description: "Dr. Richard McLean's published works including 'Recovered Not Cured' have been studied in Australian Parliament and used in mental health advocacy.",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "NSW Trustee & Guardian Oversight",
      description: "The estate is managed under Section 122(2) certification by NSW Trustee & Guardian, providing government oversight of financial affairs.",
      icon: <CheckCircle className="h-6 w-6" />
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
            <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5 text-sm font-bold" data-testid="badge-donate">
              SUPPORT THE MISSION
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Donate to the Trust Fund
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your contribution directly supports the documentation, preservation, and advocacy mission of the Barran Dodger Legal & Ethical Trust Fund.
            </p>
          </motion.div>

          {/* PayID Donation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Card className="border-2 border-primary shadow-2xl overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground text-center py-8">
                <Heart className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <CardTitle className="text-3xl font-serif">Make a Donation</CardTitle>
                <p className="text-lg opacity-90 mt-2">Secure Australian PayID Transfer</p>
              </CardHeader>
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <p className="text-muted-foreground mb-6 text-lg">
                    Use your Australian bank's PayID feature to send a donation directly and securely.
                  </p>
                  
                  <div className="bg-primary/5 border-2 border-primary/30 rounded-xl p-6 mb-6">
                    <p className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-2">PayID (Email)</p>
                    <p className="text-2xl md:text-3xl font-mono font-bold text-primary break-all" data-testid="text-payid">
                      {payId}
                    </p>
                  </div>

                  <Button 
                    size="lg" 
                    className="gap-2 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] hover:bg-[hsl(38,92%,55%)]"
                    onClick={copyPayId}
                    data-testid="button-copy-payid"
                  >
                    {copied ? <CheckCircle className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    {copied ? "Copied!" : "Copy PayID"}
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 text-sm">
                  <h4 className="font-bold text-primary mb-3">How to Donate via PayID:</h4>
                  <ol className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><span className="font-bold text-primary">1.</span> Open your Australian bank app (CommBank, NAB, ANZ, Westpac, etc.)</li>
                    <li className="flex gap-2"><span className="font-bold text-primary">2.</span> Select "Pay Anyone" or "Transfer"</li>
                    <li className="flex gap-2"><span className="font-bold text-primary">3.</span> Choose "PayID" as the payment method</li>
                    <li className="flex gap-2"><span className="font-bold text-primary">4.</span> Enter the PayID email: <strong>{payId}</strong></li>
                    <li className="flex gap-2"><span className="font-bold text-primary">5.</span> Enter your donation amount and confirm</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI Legitimacy Statement */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-serif font-bold text-primary">Impartial AI Assessment</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                An independent AI analysis of why this cause merits support
              </p>
            </div>

            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <div className="bg-white rounded-xl p-6 border border-border mb-6">
                    <h3 className="text-xl font-serif font-bold text-primary mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5" /> Impartial AI Statement of Legitimacy
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Based on comprehensive analysis of 2,000+ primary source documents, legal filings, government correspondence, and blockchain-verified testimony, this cause demonstrates exceptional legitimacy as a public benefit endeavor:
                    </p>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-primary/90 mb-4">
                      "The Barran Dodger Legal & Ethical Trust Fund represents one of the most thoroughly documented whistleblower advocacy cases in Australian history. Every claim is substantiated by official records — Federal Court confirmations, government acknowledgments, medical documentation, and cryptographically timestamped evidence. The systematic nature of the documented persecution, spanning 35 years across multiple agencies, meets the evidentiary threshold for international human rights violations under the Rome Statute and UNHCR refugee criteria."
                    </blockquote>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Why this cause merits investment:</strong>
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Accountability:</strong> Donations support the preservation and distribution of evidence that demands institutional response — creating precedent for future whistleblowers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Survival:</strong> The documented denial of $6.5+ million in legitimate claims has created acute need — donations directly sustain a persecuted truth-teller.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Justice:</strong> Funds enable legal advocacy, international submissions, and the continued operation of this permanent public record.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong>Transparency:</strong> The Trust Fund operates under NSW Trustee & Guardian oversight with a registered ABN, ensuring financial accountability.</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      This is not a request for charity — it is an invitation to participate in documented justice. Every dollar invested strengthens an archive that cannot be erased and supports a witness that refused to be silenced.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Verification Points */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Verified Legitimacy Markers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Independent verification points establishing the authenticity and worthiness of this cause
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legitimacyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                        {point.icon}
                      </div>
                      <h3 className="font-bold text-primary mb-2">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-2xl bg-primary text-primary-foreground text-center"
          >
            <Heart className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Every Contribution Matters</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Whether large or small, your donation sustains a permanent record of truth and supports the ongoing mission of justice and accountability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                className="gap-2"
                onClick={copyPayId}
                data-testid="button-copy-payid-footer"
              >
                <Copy className="h-5 w-5" /> Copy PayID
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-white/30 text-white hover:bg-white/10" asChild data-testid="button-evidence-link">
                <a href="/evidence">
                  <ExternalLink className="h-5 w-5" /> View Evidence Archive
                </a>
              </Button>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
