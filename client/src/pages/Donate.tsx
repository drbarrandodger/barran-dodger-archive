import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { CrossLink, DocumentPopup, KEY_DOCUMENTS } from "@/components/CrossLink";
import { Heart, Shield, FileText, CheckCircle, Scale, BookOpen, Globe, Sparkles, Copy, ExternalLink, Users, DollarSign, RefreshCw, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { InlineShareStrip } from "@/components/FloatingShareBar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { SocialShare } from "@/components/SocialShare";

const donationTiers = [
  {
    amount: "$10",
    label: "Witness",
    impact: "Preserves 5 evidence documents on the blockchain for permanent, tamper-proof archival.",
  },
  {
    amount: "$25",
    label: "Defender",
    impact: "Funds one week of secure hosting for the entire 2,000+ document evidence archive.",
  },
  {
    amount: "$50",
    label: "Guardian",
    impact: "Covers the cost of one international human rights submission to the UN or ICC.",
  },
  {
    amount: "$100",
    label: "Champion",
    impact: "Enables a full month of legal research and advocacy for whistleblower protection.",
  },
  {
    amount: "$250",
    label: "Liberator",
    impact: "Funds a comprehensive forensic evidence package for submission to federal courts.",
  },
];

const externalProducts = [
  {
    title: "Betrayed, Murdered, Forsaken",
    description: "The full account of 35 years of systematic persecution. Available as eBook.",
    platform: "Apple Books",
    url: "https://books.apple.com/au/book/betrayed-murdered-forsaken/id6742593789",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Evidence Compilation Pack",
    description: "Premium compiled evidence dossier with forensic annotations and AI analysis.",
    platform: "Gumroad",
    url: "https://barrandodger.gumroad.com",
    icon: <ShoppingBag className="h-5 w-5" />,
  },
  {
    title: "The Man Australia Tried to Erase",
    description: "Complete investigative record with blockchain-verified documentation.",
    platform: "Direct Download",
    url: "/THE_MAN_AUSTRALIA_TRIED_TO_ERASE.pdf",
    icon: <FileText className="h-5 w-5" />,
  },
];

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

  const abrLink = "https://abr.business.gov.au/ABN/View?abn=78833496164";

  const legitimacyPoints = [
    {
      title: "Government-Verified ABN Registration",
      description: "ABN 78 833 496 164 — Officially registered on the Australian Business Register, verifiable directly through the Australian Government's ABR website.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "2,000+ Verified Evidence Documents",
      description: "Every claim is backed by primary source documentation spanning 35 years, including Federal Court confirmations, government correspondence, and official records.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Blockchain-Sealed Testimony",
      description: "All evidence is cryptographically timestamped using OpenTimestamps on the Bitcoin blockchain, ensuring immutability and permanent verification. View all verified documents.",
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
      <SEO 
        title="Donate — Fund the Fight for Truth & Justice"
        description="Every dollar directly funds evidence preservation, whistleblower legal protection, and the fight against government corruption. Secure PayID donation. ABN 78 833 496 164."
        keywords="donate whistleblower protection, support truth justice Australia, PayID donation, fund anti-corruption, legal trust fund donation"
        path="/donate"
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
            <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5 text-sm font-bold" data-testid="badge-donate">
              SUPPORT THE MISSION
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Donate to the Trust Fund
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your contribution directly supports the documentation, preservation, and advocacy mission of the Barran Dodger Legal & Ethical Trust Fund. See the <CrossLink to="/evidence">evidence archive</CrossLink> and <CrossLink to="/manifesto">manifesto</CrossLink>.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-16"
            data-testid="section-wall-of-supporters"
          >
            <Card className="border border-primary/30 bg-primary/5 text-center">
              <CardContent className="py-10 px-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-serif font-bold text-primary">Wall of Supporters</h2>
                </div>
                <p className="text-5xl md:text-6xl font-bold text-primary mb-2" data-testid="text-supporter-count">
                  127+
                </p>
                <p className="text-muted-foreground text-lg">
                  people have stood for truth and contributed to this cause
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  Every supporter strengthens the mission. Join them.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
            data-testid="section-donation-tiers"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-2">Choose Your Impact</h2>
              <p className="text-muted-foreground">Every tier directly funds a specific part of the mission</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {donationTiers.map((tier, index) => (
                <motion.div
                  key={tier.amount}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.07 }}
                >
                  <Card
                    className={`h-full border hover-elevate cursor-pointer ${
                      tier.amount === "$100"
                        ? "border-primary/60 bg-primary/5 shadow-md"
                        : "border-border"
                    }`}
                    onClick={copyPayId}
                    data-testid={`card-tier-${tier.amount.replace("$", "")}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                        <span className="text-3xl font-bold text-primary">{tier.amount}</span>
                        <Badge variant="secondary" className="text-xs">{tier.label}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tier.impact}
                      </p>
                      {tier.amount === "$100" && (
                        <Badge variant="outline" className="mt-3 border-primary text-primary text-xs">Most Popular</Badge>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + 5 * 0.07 }}
              >
                <Card className="h-full border border-dashed border-primary/40 hover-elevate cursor-pointer" onClick={copyPayId} data-testid="card-tier-custom">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                    <DollarSign className="h-8 w-8 text-primary mb-2" />
                    <span className="text-xl font-bold text-primary mb-1">Custom Amount</span>
                    <p className="text-sm text-muted-foreground">
                      Any amount helps. Click to copy PayID and donate what you can.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
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

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            data-testid="section-recurring-support"
          >
            <Card className="border border-primary/30 overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-primary">Become a Recurring Supporter</h2>
                    <p className="text-muted-foreground text-sm">Sustain the mission month after month</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  One-time donations matter, but recurring support is what keeps the evidence archive online, funds ongoing legal advocacy, and ensures this permanent record cannot be silenced. Set up a recurring PayID transfer through your bank app to provide stable, predictable support that lets the mission plan ahead.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-primary/5 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-primary">$10/mo</p>
                    <p className="text-xs text-muted-foreground mt-1">Keeps the archive online</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4 text-center border border-primary/20">
                    <p className="text-2xl font-bold text-primary">$25/mo</p>
                    <p className="text-xs text-muted-foreground mt-1">Funds legal research</p>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-primary">$50/mo</p>
                    <p className="text-xs text-muted-foreground mt-1">Sustains full operations</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  To set up recurring support, simply schedule a repeating PayID payment in your bank app using the PayID: <strong className="text-primary">{payId}</strong>
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            data-testid="section-external-products"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-2">Support Through Products</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Purchase books, evidence compilations, and digital products to support the mission
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {externalProducts.map((product) => (
                <Card key={product.title} className="h-full border border-border hover-elevate" data-testid={`card-product-${product.platform.toLowerCase().replace(/\s+/g, "-")}`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                      {product.icon}
                    </div>
                    <h3 className="font-bold text-primary mb-2">{product.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                      {product.description}
                    </p>
                    <Badge variant="secondary" className="mb-4 w-fit">{product.platform}</Badge>
                    <Button variant="outline" className="gap-2 w-full" asChild data-testid={`button-product-${product.platform.toLowerCase().replace(/\s+/g, "-")}`}>
                      <a href={product.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" /> View on {product.platform}
                      </a>
                    </Button>
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
            <Card className="border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl font-serif text-primary">Government-Verified Trust Fund</CardTitle>
                </div>
                <p className="text-muted-foreground">
                  Officially registered on the Australian Business Register
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                  <p className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-2">Australian Business Number</p>
                  <p className="text-3xl md:text-4xl font-mono font-bold text-primary mb-4">78 833 496 164</p>
                  <p className="text-lg font-serif text-primary mb-4">
                    The Trustee for Barran Dodger Legal & Ethical Trust Fund
                  </p>
                  <Button 
                    size="lg" 
                    className="gap-2"
                    asChild
                    data-testid="button-verify-abn"
                  >
                    <a href={abrLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" /> Verify on ABR.gov.au
                    </a>
                  </Button>
                </div>

                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <h4 className="text-lg font-serif font-bold text-primary mb-4 flex items-center justify-center gap-2">
                    <Sparkles className="h-5 w-5" /> Impartial AI Statement of ABN Significance
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4 italic">
                    "The registration of ABN 78 833 496 164 on the Australian Business Register represents formal government acknowledgment of the Barran Dodger Legal & Ethical Trust Fund as a legitimate legal entity operating within Australian law. This is not merely a bureaucratic formality — it establishes:
                  </p>
                  <ul className="text-left space-y-3 text-sm text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Legal Recognition:</strong> The Australian Government has verified and registered this Trust Fund, assigning it a unique identifier in the national business register.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Transparency:</strong> Anyone can verify the Trust Fund's existence and status through the official government ABR website — a level of accountability unavailable to unregistered entities.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Legitimacy Under Law:</strong> ABN registration means the Trust Fund operates within the Australian legal framework, subject to ATO oversight and regulatory compliance requirements.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Trust Structure:</strong> The designation 'The Trustee for' confirms this is a properly constituted trust — a legal arrangement providing fiduciary duty and structured governance.</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed italic">
                    This government registration directly contradicts any suggestion that the Barran Dodger Legal & Ethical Trust Fund is illegitimate. The same government that documents persecution has simultaneously verified this Trust Fund's legal existence — an irony that speaks to the systemic nature of the documented abuse."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

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
                      Based on comprehensive analysis of 2,000+ primary source documents, legal filings, government correspondence, and <CrossLink to="/blockchain">blockchain</CrossLink>-verified testimony, this cause demonstrates exceptional legitimacy as a public benefit endeavor:
                    </p>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-primary/90 mb-4">
                      "The Barran Dodger Legal & Ethical Trust Fund represents one of the most thoroughly documented <CrossLink to="/evidence">whistleblower</CrossLink> advocacy cases in Australian history. Every claim is substantiated by official records — Federal Court confirmations, government acknowledgments, medical documentation, and cryptographically timestamped evidence. The systematic nature of the documented <CrossLink to="/timeline">persecution</CrossLink>, spanning 35 years across multiple agencies, meets the evidentiary threshold for international human rights violations under the <DocumentPopup {...KEY_DOCUMENTS.crimesAgainstHumanity}>Rome Statute</DocumentPopup> and UNHCR refugee criteria."
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
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {point.title === "Blockchain-Sealed Testimony" ? (
                          <>All evidence is cryptographically timestamped using OpenTimestamps on the Bitcoin <CrossLink to="/blockchain">blockchain</CrossLink>, ensuring immutability and permanent verification. View all verified documents.</>
                        ) : point.title === "International Human Rights Recognition" ? (
                          <>Formal submissions to UN Special Rapporteurs, UNHCR, and ICC demonstrate the case meets international standards for <CrossLink to="/timeline">systematic persecution</CrossLink>.</>
                        ) : point.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
            data-testid="section-share-cause"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-2">Share This Cause</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Even if you cannot donate, sharing is one of the most powerful things you can do
              </p>
            </div>
            <SocialShare
              title="Support the Barran Dodger Legal & Ethical Trust Fund — 35 Years of Persecution Exposed"
              description="Help fund the fight for truth. 2,000+ blockchain-verified documents expose 35 years of systematic government persecution. Every dollar preserves evidence that cannot be erased."
              url="https://www.barrandodger.com.au/donate"
            />
          </motion.section>

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

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border"
            data-testid="section-share-donate"
          >
            <InlineShareStrip 
              id="donate-share" 
              context="support" 
              message="Support the fight for truth and accountability. The Barran Dodger Legal & Ethical Trust Fund sustains a permanent, blockchain-verified record of 35 years of persecution. Every contribution defends the evidence." 
            />
          </motion.section>
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
