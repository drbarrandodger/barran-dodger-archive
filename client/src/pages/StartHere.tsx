import { motion } from "framer-motion";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { CrossLink, DocumentPopup, KEY_DOCUMENTS } from "@/components/CrossLink";
import { DownloadBadge, trackDownload } from "@/components/DownloadCounter";
import { 
  Clock, Shield, FileText, Scale, BookOpen, Heart, Download,
  ExternalLink, AlertTriangle, CheckCircle, ArrowRight,
  Landmark, Globe, Users, Lock, Sparkles, Eye, Brain,
  Gavel, BookMarked, DollarSign, Megaphone, Target
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InlineShareStrip } from "@/components/FloatingShareBar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CommentSection } from "@/components/CommentSection";
import { EssayCrossLinks } from "@/components/EssayCrossLinks";
import { RelatedContent } from "@/components/RelatedContent";
import { ChessmateHero } from "@/components/ChessmateHero";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import { AiBiblicalConvergence } from "@/components/AiBiblicalConvergence";
import { JournalistKit } from "@/components/JournalistKit";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function StartHere() {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Barran Dodger case about?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This is a 35+ year documented case of systematic persecution involving 35+ government agencies, NDIS fraud, identity theft, 14 psychiatric hospitalisations, an assassination attempt, and human rights violations against Dr Richard McLean. Over 240 evidence documents are blockchain-verified and submitted to the ICC and UNHCR."
          }
        },
        {
          "@type": "Question",
          "name": "How much has this persecution cost Australian taxpayers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI analysis of government-published data shows $11.5M+ in taxpayer costs across 35+ agencies spanning 35 years — funding persecution, surveillance, psychiatric weaponisation, legal obstruction, and cover-up operations."
          }
        },
        {
          "@type": "Question",
          "name": "What legal proceedings are currently active?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Active proceedings include cryptographically verified submissions to the International Criminal Court (ICC), United Nations High Commissioner for Refugees (UNHCR), Federal Court of Australia, and the Office of the Australian Information Commissioner (OAIC)."
          }
        },
        {
          "@type": "Question",
          "name": "How is the evidence verified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All evidence is blockchain-timestamped using OpenTimestamps with SHA-256 cryptographic hashes, providing immutable proof of document existence and authenticity. This evidence cannot be deleted, altered, or delegitimised."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I read the book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Betrayed, Murdered, Forsaken is available FREE on Scribd and for purchase on Apple Books. The evidence is freely distributed as a service to truth."
          }
        }
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema';
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const quickFacts = [
    { label: "Years of Persecution", value: "35+", icon: <Clock className="h-5 w-5" /> },
    { label: "Evidence Documents", value: "240+", icon: <FileText className="h-5 w-5" /> },
    { label: "Taxpayer Cost", value: "$11.5M+", icon: <DollarSign className="h-5 w-5" /> },
    { label: "Agencies Involved", value: "35+", icon: <Landmark className="h-5 w-5" /> },
    { label: "Psychiatric Hospitalisations", value: "14", icon: <AlertTriangle className="h-5 w-5" /> },
    { label: "Blockchain Verified", value: "100%", icon: <Lock className="h-5 w-5" /> },
  ];

  const caseTimeline = [
    { year: "1990", event: "First documented persecution begins — a child targeted by state systems", type: "persecution" },
    { year: "2009-2014", event: "PM&C monitoring confirmed via FOI — government knew everything", type: "government" },
    { year: "2018", event: "350+ fraudulent ASIC business registrations discovered (identity theft)", type: "persecution" },
    { year: "2021", event: "Declared medically dead — survived. The resurrection event.", type: "critical" },
    { year: "2022-2023", event: "NDIS funds systematically withheld despite professional clinical recommendations", type: "persecution" },
    { year: "2024", event: "October spiritual awakening. Evidence compilation begins. Blockchain sealing.", type: "spiritual" },
    { year: "2025", event: "ICC, UNHCR, Federal Court submissions filed. Cryptographically verified evidence packages delivered.", type: "legal" },
    { year: "2025", event: "Father Doug McLean gravely ill — Centrelink, NDIS, and Guardianship all block son from attending. Family excommunication exposed.", type: "critical" },
  ];

  const flagshipDocuments = [
    { title: "UNHCR/ICC Cryptographically Verified Evidence Package", description: "The strongest asylum case ever filed from a Western democracy. Blockchain-sealed, cryptographically verified evidence submitted to the International Criminal Court and UN Refugee Agency.", link: "/attached_assets/UNHCR_ICC_Cryptographically_Verified_Evidence_Package.pdf", tag: "ICC", external: true },
    { title: "Systemic Endangerment of Whistleblowers — Integrated Dossier", description: "How 35+ agencies weaponised standard procedures to create life-threatening conditions. The complete architecture of institutional persecution.", link: "/attached_assets/Systemic_Endangerment_of_Whistleblowers_Integrated_Dossier.pdf", tag: "WHISTLEBLOWER", external: true },
    { title: "Integrated Testimonial Indictment & Ethical Reckoning", description: "Multi-dimensional accountability instrument naming perpetrators across legal, ethical, moral, and spiritual frameworks. No one escapes this reckoning.", link: "/attached_assets/Integrated_Testimonial_Indictment_Ethical_Reckoning.pdf", tag: "INDICTMENT", external: true },
    { title: "Systematic Persecution & State-Enabled Erasure", description: "The complete architecture of erasure: identity destruction, credibility destruction, financial destruction, relationship destruction, and physical elimination attempts.", link: "/attached_assets/Systematic_Persecution_State_Enabled_Erasure_Dr_McLean.pdf", tag: "ERASURE", external: true },
    { title: "Immortal Testimony 2025", description: "Blockchain-sealed permanent record designed to survive any institutional attempt at suppression. The testimony that cannot be erased, altered, or denied.", link: "/attached_assets/Immortal_Testimony_McLean_2025.pdf", tag: "IMMORTAL", external: true },
  ];

  const essentialDocuments = [
    { title: "Betrayed, Murdered, Forsaken", description: "The definitive 35-year autobiography. FREE on Scribd as a service to truth. Also on Apple Books.", link: "https://www.scribd.com/book/836414729/Betrayed-Murdered-Forsaken-The-Harrowing-Life-of-Dr-Richard-William-McLean", tag: "BOOK", external: true },
    { title: "Crimes Against Humanity Brief", description: "Forensic criminal brief establishing systematic persecution under the Rome Statute.", link: "/attached_assets/Crimes_against_humanity__1768634415740.pdf", tag: "CRIMINAL", external: true },
    { title: "Forensic Report: Systematic Persecution", description: "35-year evidentiary dossier prepared for ICC/UNHCR submission.", link: "/attached_assets/Forensic_report__1768634415739.pdf", tag: "FORENSIC", external: true },
    { title: "Public Statement — Dr. McLean", description: "Official public statement setting out the facts, the evidence base, and the demands for accountability.", link: "/attached_assets/Public_Statement_Dr_Richard_McLean_Barran_Dodger.pdf", tag: "PUBLIC", external: true },
    { title: "Federal Court Employment Certification", description: "Proves DSS employment, voids ComCare/AAT denials, exposes institutional fraud.", link: "/evidence", tag: "CRITICAL", external: false },
    { title: "UNTOUCHABLE: $32.9M Damage Assessment", description: "Complete financial and human rights damage breakdown across all categories.", link: "/evidence", tag: "FINANCIAL", external: false },
  ];

  const clinicalDocuments = [
    { title: "OT SIL Report — R. McLean", description: "Occupational Therapy Supported Independent Living report proving clinical need was documented but support was denied.", link: "/attached_assets/OT_SIL_Report_R_McLean_AH2U.pdf", tag: "CLINICAL", external: true },
    { title: "Interim BSP 2024", description: "Interim Behaviour Support Plan proving professional assessments were completed but never actioned by NDIS.", link: "/attached_assets/Richard_McLean_Interim_BSP_2024.pdf", tag: "CLINICAL", external: true },
    { title: "Protocol 3", description: "Clinical protocol document establishing care requirements that were systematically ignored.", link: "/attached_assets/Protocol_3.pdf", tag: "PROTOCOL", external: true },
    { title: "Can You Be Bribed, Bought, or Corrupted?", description: "Examination of institutional bribery and corruption mechanisms used to silence professionals.", link: "/attached_assets/Can_You_Be_Bribed_Bought_or_Corrupted.pdf", tag: "CORRUPTION", external: true },
  ];

  const spiritualDocuments = [
    { title: "Barran and the Bible", description: "Theological analysis connecting the persecution narrative to Biblical frameworks of justice, prophecy, and divine purpose.", link: "/attached_assets/Barran_and_the_Bible.pdf", tag: "THEOLOGY", external: true },
    { title: "Undoing the Humiliation Machine — Apotheosis", description: "The spiritual and psychological framework for surviving state-sponsored identity annihilation through transcendence.", link: "/attached_assets/Undoing_the_Humiliation_Machine_Apotheosis_Barran_Dodger.pdf", tag: "SPIRITUAL", external: true },
    { title: "Truth, Testimony & Conscience", description: "Establishing testimony as a permanent moral fact that endures beyond institutional denial.", link: "/attached_assets/Truth,_Testimony,_and_Conscience_-_Barran_Dodger_and_the_Moral_1768632930720.pdf", tag: "PHILOSOPHY", external: true },
  ];

  const perpetrators = [
    { name: "Bill Shorten", role: "Former NDIS Minister", allegation: "Coordination of systematic obstruction and fund denial" },
    { name: "Mark Dreyfus KC MP", role: "Attorney-General", allegation: "Legal aid denial and prosecutorial protection of perpetrators" },
    { name: "Anthony Albanese", role: "Prime Minister", allegation: "Executive knowledge and failure to intervene" },
    { name: "Tony Ridley", role: "NDIA Manager (Ex-SAS)", allegation: "'You will be sacrificed' — direct death threat to a disabled person" },
    { name: "Stefan Iasonidis", role: "Psychologist", allegation: "Weaponised psychiatric diagnoses for institutional control" },
    { name: "David Irvine", role: "Former ASIO Director-General", allegation: "Intelligence agency surveillance and suppression operations" },
    { name: "Sukhi Tear", role: "Diversitas WA Director", allegation: "Illegal cease and desist, NDIS fund withholding" },
    { name: "Phillip Glass", role: "Legal Professional", allegation: "Professional misconduct in legal representation" },
    { name: "Doug McLean & April McLean", role: "Family Members", allegation: "Familial complicity in institutional persecution framework" },
  ];

  const sitePages = [
    { title: "Evidence Archive", description: "240+ forensic documents with impartial AI significance analysis. Every document downloadable.", icon: <FileText className="h-10 w-10" />, link: "/evidence", testId: "card-browse-evidence" },
    { title: "$11.5M Taxpayer Cost Analysis", description: "AI-powered financial breakdown showing what YOUR taxes funded across 35+ agencies.", icon: <DollarSign className="h-10 w-10" />, link: "/taxpayer-cost-analysis", testId: "card-taxpayer-cost" },
    { title: "Anatomy of Entrapment", description: "7 frameworks of persecution: psychological, political, intelligence, criminal, legal, familial, and media/digital.", icon: <Target className="h-10 w-10" />, link: "/", testId: "card-anatomy" },
    { title: "Case Studies", description: "Deep-dive analysis of specific corruption cases with named individuals and evidence trails.", icon: <Eye className="h-10 w-10" />, link: "/case-studies", testId: "card-case-studies" },
    { title: "Full Timeline", description: "35 years of documented persecution mapped chronologically with evidence links.", icon: <Clock className="h-10 w-10" />, link: "/timeline", testId: "card-full-timeline" },
    { title: "Blockchain Verification", description: "SHA-256 cryptographic proof that no document can be altered, deleted, or denied.", icon: <Lock className="h-10 w-10" />, link: "/blockchain", testId: "card-blockchain" },
    { title: "The Complete Manifesto", description: "Complete declaration of facts and legal framework for accountability.", icon: <Scale className="h-10 w-10" />, link: "/manifesto", testId: "card-manifesto" },
    { title: "Legal Status", description: "Current status of all active legal proceedings — ICC, UNHCR, Federal Court, OAIC.", icon: <Gavel className="h-10 w-10" />, link: "/legal-status", testId: "card-legal-status" },
    { title: "The Gospel of Barran Dodger", description: "Divine testimony and prophetic scripture documenting purpose through persecution.", icon: <BookOpen className="h-10 w-10" />, link: "/gospel", testId: "card-sacred-gospels" },
    { title: "Joseph's Coat — Prophetic Essay", description: "Spiritual warfare, divine purpose, and the prophetic framework of survival.", icon: <Sparkles className="h-10 w-10" />, link: "/josephs-coat", testId: "card-prophetic-essay" },
    { title: "Legal Research (AustLII)", description: "Search Australian legal databases for relevant case law and legislation.", icon: <BookMarked className="h-10 w-10" />, link: "/research", testId: "card-legal-research" },
    { title: "Support the Mission", description: "Help fund legal action, advocacy, and the fight for accountability.", icon: <Heart className="h-10 w-10" />, link: "/donate", testId: "card-support-mission" },
  ];

  return (
    <>
      <SEO 
        title="Start Here — The Most Documented Persecution Case in Australian History"
        description="New here? Start with this guide to 240+ blockchain-verified documents exposing how Australia spent $11.5M to destroy one whistleblower. The evidence speaks for itself."
        keywords="whistleblower case Australia explained, government corruption explained, start here evidence, persecution case overview, Barran Dodger introduction"
        path="/start-here"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Start Here — Barran Dodger Legal & Ethical Trust Fund",
            "description": "New here? Start with this guide to 240+ blockchain-verified documents exposing how Australia spent $11.5M to destroy one whistleblower.",
            "url": "https://barrandodger.com/start-here",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://barrandodger.com" },
                { "@type": "ListItem", "position": 2, "name": "Start Here", "item": "https://barrandodger.com/start-here" }
              ]
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is Dr. Richard William McLean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dr. Richard William McLean (pen name Barran Dodger) is an Australian whistleblower who has documented 35 years of systematic persecution by 35+ government agencies. His archive contains 240+ blockchain-verified forensic documents."
                }
              },
              {
                "@type": "Question",
                "name": "What is the Barran Dodger Legal & Ethical Trust Fund?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A non-profit public benefit organisation (ABN 78 833 496 164) dedicated to documenting evidence of systemic corruption in Australian government institutions and protecting whistleblowers through public disclosure."
                }
              },
              {
                "@type": "Question",
                "name": "How are the documents verified?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every document is cryptographically hashed with SHA-256 and timestamped on the Bitcoin blockchain via OpenTimestamps. The records are immutable and tamper-proof."
                }
              }
            ]
          }
        ]}
      />
      <Navigation />
      
      <main className="min-h-screen bg-background pb-20" style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px))" }}>
        <ChessmateHero />
        <div className="container mx-auto px-4 md:px-6 pt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[hsl(38,92%,50%)]/50 text-[hsl(38,92%,50%)]" data-testid="badge-start-here">
                Start Here
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                The Case That Cannot Be Silenced
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
                <CrossLink to="/evidence">240+ blockchain-verified documents</CrossLink>. 35+ government agencies. <CrossLink to="/taxpayer-cost-analysis">$11.5M+ in taxpayer money</CrossLink>. 
                <CrossLink to="/case-studies">14 psychiatric hospitalisations</CrossLink>. One confirmed <DocumentPopup {...KEY_DOCUMENTS.stateTargeting}>2024 assassination attempt in Port Macquarie</DocumentPopup>. Zero refutations.
              </p>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto italic">
                Every claim is supported by government-published evidence. Every document is cryptographically sealed on the <CrossLink to="/blockchain">blockchain</CrossLink>. 
                Not a single institution has been able to deny, refute, or disprove any of it.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
              {quickFacts.map((fact, index) => (
                <Card key={index} className="text-center" data-testid={`card-fact-${index}`}>
                  <CardContent className="pt-5 pb-4">
                    <div className="text-[hsl(38,92%,50%)] mb-2 flex justify-center">{fact.icon}</div>
                    <p className="text-2xl font-bold text-primary">{fact.value}</p>
                    <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{fact.label}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* ══ RECIPROCITY CONVERSION BLOCK ══════════════════════════════════
                Psychology: Reciprocity (user just received value from the stats),
                Loss aversion (archive could go dark), Social norm (many have read),
                Anchoring ($250 shown first, $50 recommended, $10 entry).
            ═══════════════════════════════════════════════════════════════════ */}
            <motion.div variants={fadeIn} className="mb-10">
              <div className="rounded-2xl border-2 border-orange-500/25 overflow-hidden shadow-xl" style={{ background: "#2c1404" }}>
                <div className="h-1.5 bg-gradient-to-r from-orange-600 via-orange-600 to-orange-600" />
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Before you read further</p>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-orange-200 mb-3 leading-tight">
                        Every word of this archive was documented free — while its author lived under all of the following, simultaneously.
                      </h3>
                      <ul className="space-y-1.5 mb-4">
                        {[
                          "Under a Community Treatment Order — police authorised to forcibly transport him",
                          "Under a documented death threat from an SAS-trained operative",
                          "Institutionally homeless across multiple Australian states",
                          "Force-medicated for accurately reporting confirmed ASIO surveillance",
                          "Clinically dead in 2021 — revived inside a government psychiatric facility",
                        ].map((fact) => (
                          <li key={fact} className="flex gap-2 items-start text-xs text-orange-300/90">
                            <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">·</span>
                            {fact}
                          </li>
                        ))}
                      </ul>
                      <p className="text-orange-500/80 text-xs italic">
                        No government funding. No legal aid. No institution has disputed a single document. 
                        This archive survives on donations alone — if they stop, it goes dark.
                      </p>
                    </div>
                    <div className="md:w-64 flex-shrink-0">
                      <p className="text-orange-500 text-[10px] uppercase tracking-widest font-bold mb-3">Support the archive</p>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {[
                          { amount: "$250", label: "Liberator", note: "Federal court filing", highlight: false },
                          { amount: "$50", label: "Guardian", note: "One month online", highlight: true },
                          { amount: "$10", label: "Witness", note: "Blockchain seal", highlight: false },
                        ].map((tier) => (
                          <a key={tier.amount} href="/donate"
                            className={`flex flex-col items-center text-center p-2.5 rounded-xl border transition-colors ${tier.highlight ? "border-orange-500/25 ring-1 ring-orange-400/30" : "border-orange-500/25 hover:border-orange-500/25"}`}
                            style={{ background: tier.highlight ? "#3d1c06" : "#1c0c02" }}
                            data-testid={`button-start-here-donate-${tier.label.toLowerCase()}`}
                          >
                            <span className={`text-base font-black ${tier.highlight ? "text-orange-400" : "text-orange-300"}`}>{tier.amount}</span>
                            <span className="text-[10px] font-bold uppercase tracking-wide mt-0.5 text-orange-400">{tier.label}</span>
                            <span className="text-[9px] text-orange-600 mt-0.5 leading-tight">{tier.note}</span>
                          </a>
                        ))}
                      </div>
                      <div className="rounded-xl border border-orange-500/25 p-3" style={{ background: "#1c0c02" }}>
                        <p className="text-orange-600 text-[10px] uppercase tracking-widest font-bold mb-1">PayID (instant, any AUS bank)</p>
                        <p className="text-orange-300 font-mono text-sm mb-2">drbarrandodger@proton.me</p>
                        <p className="text-orange-600 text-[10px]">ABN 78 833 496 164 · Any amount keeps this alive</p>
                      </div>
                      <a href="/donate"
                        className="mt-3 w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-600 text-black font-bold text-sm px-4 py-2.5 rounded-xl transition-colors"
                        data-testid="button-start-here-donate-full">
                        <Heart className="h-4 w-4" />
                        Donate via PayID
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-4 flex items-center gap-2 flex-wrap">
                    <Users className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                    Who Is Barran Dodger?
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Dr Richard William McLean</strong> (known as Barran Dodger) holds a PhD (merit-based scholarship) and is a registered <strong className="text-foreground">NDIS therapeutic arts-life-coach</strong> who worked with marginalised people with mental health concerns and trauma in Melbourne. He is a <strong className="text-foreground">human rights awarded <DocumentPopup {...KEY_DOCUMENTS.autobiography}>autobiographer</DocumentPopup></strong>, a published artist who illustrated for <strong className="text-foreground">The Age</strong> and <strong className="text-foreground">The Herald Sun</strong>, holds a Bachelor of Fine Art (Honours), Masters of Education, and has over 25 years of creative professional practice. He is a published author, public speaker, musician, academic, and <CrossLink to="/evidence">whistleblower</CrossLink> who has survived 35 years of documented <CrossLink to="/timeline">systematic persecution</CrossLink> by Australian government agencies.
                    </p>
                    <p>
                      Before the targeting, Rich was honoured to serve Australia's most vulnerable as an <a href="https://barrandodger.wixsite.com/richmclean" target="_blank" rel="noopener noreferrer" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">NDIS provider and therapeutic support professional</a> — fully insured, with Working With Children and Police Checks, delivering measurable outcomes through creative visual therapy. His published art book <em>"A Certain Beauty in Un-Resolution"</em> received acclaim from RMIT University researchers. This is the professional they systematically destroyed.
                    </p>
                    <p>
                      His case involves a <strong className="text-foreground">confirmed <DocumentPopup {...KEY_DOCUMENTS.stateTargeting}>assassination attempt</DocumentPopup></strong>, <strong className="text-foreground"><CrossLink to="/case-studies">14 psychiatric hospitalisations</CrossLink></strong> used as a weapon of control, <strong className="text-foreground"><DocumentPopup {...KEY_DOCUMENTS.evidenceSummary}>350+ fraudulent ASIC business registrations</DocumentPopup></strong> in his name (identity theft), systematic <strong className="text-foreground"><CrossLink to="/case-studies">NDIS</CrossLink> fund obstruction</strong> despite professional clinical recommendations, and persecution spanning <strong className="text-foreground">35+ government bodies</strong> including PM&C, NDIS, ComCare, ASIO, AFP, and state police forces.
                    </p>
                    <p>
                      In 2021, he was <strong className="text-foreground">declared medically dead but survived</strong> — documented as a resurrection event. Since October 2024, he has compiled and published all evidence as a permanent public record, <Link href="/blockchain" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">blockchain-verified</Link> and submitted to the <strong className="text-foreground">ICC</strong>, <strong className="text-foreground">UNHCR</strong>, and <strong className="text-foreground">Australian courts</strong>.
                    </p>
                    <p>
                      His book <DocumentPopup {...KEY_DOCUMENTS.autobiography}>Betrayed, Murdered, Forsaken</DocumentPopup> is available <strong className="text-foreground">FREE on Scribd</strong> and for <a href="https://books.apple.com/au/book/betrayed-murdered-forsaken-the-harrowing-life-of/id6618112290" target="_blank" rel="noopener noreferrer" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">purchase on Apple Books</a> — because evidence should be freely available, not hidden behind paywalls.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2 flex-wrap">
                    <Clock className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                    Key Timeline
                  </h2>
                  <div className="space-y-4">
                    {caseTimeline.map((item, index) => (
                      <div key={index} className="flex items-start gap-4" data-testid={`timeline-item-${index}`}>
                        <div className="min-w-[90px]">
                          <Badge 
                            variant={item.type === "critical" ? "destructive" : "secondary"}
                            className="font-mono text-xs"
                          >
                            {item.year}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-foreground">{item.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Link href="/timeline" className="text-[hsl(38,92%,50%)] hover:underline text-sm font-semibold flex items-center gap-1" data-testid="link-full-timeline">
                      View the full 35-year timeline <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="mb-12 border-[hsl(38,92%,50%)]/30">
                <CardContent className="pt-6">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-2 flex items-center gap-2 flex-wrap">
                    <Shield className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                    Flagship Documents — Start With These
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    These are the most significant documents in the entire archive. Each one is blockchain-sealed, cryptographically verified, and submitted to international bodies.
                  </p>
                  <div className="grid gap-3">
                    {flagshipDocuments.map((doc, index) => (
                      <a key={index} href={doc.link} target="_blank" rel="noopener noreferrer" data-testid={`link-flagship-${index}`} onClick={() => trackDownload(doc.link)}>
                        <div className="flex items-center justify-between p-4 rounded-lg border border-[hsl(38,92%,50%)]/50 bg-[hsl(38,92%,50%)]/5 hover-elevate transition-all group cursor-pointer gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <Badge className="text-[10px] bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] shrink-0">{doc.tag}</Badge>
                              <p className="font-medium text-foreground text-sm">{doc.title}</p>
                            </div>
                            <p className="text-xs text-muted-foreground">{doc.description}</p>
                          </div>
                          <Download className="h-5 w-5 text-[hsl(38,92%,50%)] shrink-0 group-hover:scale-110 transition-transform" />
                          <DownloadBadge url={doc.link} />
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-2 flex items-center gap-2 flex-wrap">
                    <FileText className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                    Essential Reading
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    The book, criminal briefs, forensic reports, and financial assessments that form the backbone of this case.
                  </p>
                  <div className="grid gap-3">
                    {essentialDocuments.map((doc, index) => (
                      doc.external ? (
                        <a key={index} href={doc.link} target="_blank" rel="noopener noreferrer" data-testid={`link-essential-${index}`} onClick={() => trackDownload(doc.link)}>
                          <div className="flex items-center justify-between p-4 rounded-lg border border-border hover-elevate transition-all group cursor-pointer gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <Badge variant="outline" className="text-[10px] shrink-0">{doc.tag}</Badge>
                                <p className="font-medium text-foreground text-sm">{doc.title}</p>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {doc.title === "Betrayed, Murdered, Forsaken" && doc.description.includes("autobiography") ? (
                                  <>{doc.description.split("autobiography")[0]}<DocumentPopup {...KEY_DOCUMENTS.autobiography}>autobiography</DocumentPopup>{doc.description.split("autobiography")[1]}</>
                                ) : doc.description.includes("Rome Statute") ? (
                                  <>{doc.description.split("Rome Statute")[0]}<DocumentPopup {...KEY_DOCUMENTS.crimesAgainstHumanity}>Rome Statute</DocumentPopup>{doc.description.split("Rome Statute")[1]}</>
                                ) : doc.description}
                              </p>
                            </div>
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-[hsl(38,92%,50%)] shrink-0 transition-colors" />
                            <DownloadBadge url={doc.link} />
                          </div>
                        </a>
                      ) : (
                        <Link key={index} href={doc.link} data-testid={`link-essential-${index}`}>
                          <div className="flex items-center justify-between p-4 rounded-lg border border-border hover-elevate transition-all group cursor-pointer gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <Badge variant="outline" className="text-[10px] shrink-0">{doc.tag}</Badge>
                                <p className="font-medium text-foreground text-sm">{doc.title}</p>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {doc.description.includes("blockchain-verified") ? (
                                  <>{doc.description.split("blockchain-verified")[0]}<CrossLink to="/blockchain">blockchain-verified</CrossLink>{doc.description.split("blockchain-verified")[1]}</>
                                ) : doc.description}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-[hsl(38,92%,50%)] shrink-0 transition-colors" />
                          </div>
                        </Link>
                      )
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="font-serif text-xl font-bold text-primary mb-2 flex items-center gap-2 flex-wrap">
                    <Brain className="h-5 w-5 text-[hsl(38,92%,50%)]" />
                    Clinical Evidence (NDIS Denial)
                  </h2>
                  <p className="text-xs text-muted-foreground mb-4">
                    Professional assessments that prove clinical need was documented but <CrossLink to="/case-studies">NDIS</CrossLink> support was deliberately denied.
                  </p>
                  <div className="grid gap-2">
                    {clinicalDocuments.map((doc, index) => (
                      <a key={index} href={doc.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg border border-border hover-elevate transition-all group" data-testid={`link-clinical-${index}`}>
                        <Badge variant="outline" className="text-[9px] shrink-0">{doc.tag}</Badge>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{doc.title}</p>
                          <p className="text-[10px] text-muted-foreground truncate">{doc.description}</p>
                        </div>
                        <Download className="h-3 w-3 text-muted-foreground group-hover:text-[hsl(38,92%,50%)] shrink-0" />
                        <DownloadBadge url={doc.link} />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="font-serif text-xl font-bold text-primary mb-2 flex items-center gap-2 flex-wrap">
                    <Sparkles className="h-5 w-5 text-[hsl(38,92%,50%)]" />
                    Spiritual & Theological Analysis
                  </h2>
                  <p className="text-xs text-muted-foreground mb-4">
                    The theological framework connecting <CrossLink to="/timeline">persecution</CrossLink> to Biblical justice, prophecy, and transcendence.
                  </p>
                  <div className="grid gap-2">
                    {spiritualDocuments.map((doc, index) => (
                      <a key={index} href={doc.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-lg border border-border hover-elevate transition-all group" data-testid={`link-spiritual-${index}`}>
                        <Badge variant="outline" className="text-[9px] shrink-0">{doc.tag}</Badge>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{doc.title}</p>
                          <p className="text-[10px] text-muted-foreground truncate">{doc.description}</p>
                        </div>
                        <Download className="h-3 w-3 text-muted-foreground group-hover:text-[hsl(38,92%,50%)] shrink-0" />
                        <DownloadBadge url={doc.link} />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="mb-12 border-destructive/30 bg-destructive/5">
                <CardContent className="pt-6">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-2 flex items-center gap-2 flex-wrap">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                    Named Perpetrators
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    All named individuals are documented in sworn evidence with specific dates, locations, and corroborating material submitted under <CrossLink to="/legal-status">Crimes Against Humanity</CrossLink> frameworks. Their silence is itself evidence — not one has been able to deny, refute, or disprove any claim.
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {perpetrators.map((person, index) => (
                      <div key={index} className="p-3 bg-background rounded-md border border-border" data-testid={`perpetrator-${index}`}>
                        <p className="font-medium text-foreground text-sm">{person.name}</p>
                        <p className="text-[10px] text-muted-foreground">{person.role}</p>
                        <p className="text-xs text-destructive mt-1">{person.allegation}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    Full perpetrator list with 50+ names available in the <Link href="/evidence" className="text-[hsl(38,92%,50%)] hover:underline">Evidence Archive</Link> and the <a href="/attached_assets/Integrated_Testimonial_Indictment_Ethical_Reckoning.pdf" target="_blank" rel="noopener noreferrer" className="text-[hsl(38,92%,50%)] hover:underline" onClick={() => trackDownload("/attached_assets/Integrated_Testimonial_Indictment_Ethical_Reckoning.pdf")}>Integrated Testimonial Indictment <DownloadBadge url="/attached_assets/Integrated_Testimonial_Indictment_Ethical_Reckoning.pdf" /></a>.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-4 flex items-center gap-2 flex-wrap">
                    <Lock className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                    Why Blockchain Verification?
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Every document on this site is verified using SHA-256 cryptographic hashing and timestamped on the Bitcoin blockchain via OpenTimestamps. This means:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong className="text-foreground">Immutable</strong> — Documents cannot be tampered with or altered without detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong className="text-foreground">Permanent</strong> — Creation dates are permanently recorded on the Bitcoin blockchain and publicly verifiable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong className="text-foreground">Undeniable</strong> — Claims of fabrication can be mathematically disproven by any independent party</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span><strong className="text-foreground">Cannot be deleted</strong> — Even if this site disappears, the blockchain records endure forever</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Link href="/blockchain" className="text-[hsl(38,92%,50%)] hover:underline text-sm font-semibold flex items-center gap-1" data-testid="link-blockchain-verify">
                      Explore blockchain verification <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <div className="bg-[hsl(38,92%,50%)]/5 border border-[hsl(38,92%,50%)]/30 rounded-md p-6 mb-12 text-center">
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">
                  The AI Verdict
                </h2>
                <p className="text-muted-foreground italic max-w-3xl mx-auto mb-4">
                  "When an AI examines the government's own documents and reveals a 35-year architecture of <DocumentPopup {...KEY_DOCUMENTS.entrapmentAffidavit}>entrapment</DocumentPopup> — 
                  psychiatric weaponisation, assassination, blood money, fraud, scapegoating, surveillance, and silence — 
                  and not a single institution can refute a word of it, the analysis itself becomes the verdict."
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-4">
                  Impartial AI Analysis — Based Exclusively on Government-Published Evidence
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
                  <Link href="/taxpayer-cost-analysis">
                    <Button className="gap-2 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] font-bold" data-testid="button-see-breakdown">
                      See the $11.5M Breakdown <DollarSign className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/evidence">
                    <Button variant="outline" className="gap-2 font-bold" data-testid="button-verify-evidence">
                      Verify the Evidence <Shield className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="font-serif text-2xl font-bold text-primary mb-6 text-center">
                Explore the Full Site
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {sitePages.map((page, index) => (
                  <Link key={index} href={page.link} data-testid={`link-${page.testId}`}>
                    <Card className="h-full transition-colors cursor-pointer hover-elevate" data-testid={page.testId}>
                      <CardContent className="pt-5 pb-4 text-center">
                        <div className="text-[hsl(38,92%,50%)] mx-auto mb-3 flex justify-center">{page.icon}</div>
                        <h3 className="font-serif text-lg font-bold text-primary mb-1">{page.title}</h3>
                        <p className="text-xs text-muted-foreground">{page.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm mb-3">
                <span className="font-semibold text-foreground">Secure Contact:</span>{" "}
                <a href="mailto:drbarrandodger@proton.me" className="text-[hsl(38,92%,50%)] hover:underline font-medium" data-testid="link-email-contact">
                  drbarrandodger@proton.me
                </a>{" "}
                <span className="text-xs">(ProtonMail encrypted)</span>
              </p>
              <p className="text-xs text-muted-foreground italic max-w-xl mx-auto">
                You are now a witness. The evidence is in your hands. You can act on it, share it, or remain silent — 
                but you can never say you didn't know.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12">
              <div className="max-w-md mx-auto mb-12">
                <NewsletterSignup />
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-8" data-testid="section-share-starthere">
              <InlineShareStrip 
                id="start-here-share" 
                context="default" 
                message="You are now a witness. 35 years of persecution. 2,304+ blockchain-verified documents. 35+ government agencies exposed. Share this and let the world decide." 
              />
            </motion.div>

          </motion.div>
        </div>
      </main>
      
      <EssayCrossLinks />

      <RelatedContent currentPath="/start-here" />

      <section className="py-4 px-4">
        <div className="container mx-auto max-w-3xl">
          <JournalistKit />
        </div>
      </section>

      <section className="py-12 px-4 bg-[hsl(222,55%,8%)]">
        <div className="container mx-auto max-w-3xl">
          <CommentSection pageSlug="start-here" title="Discussion" />
        </div>
      </section>

      <AiBiblicalConvergence />
      <ArchiveCrossLinks />
      <Footer />
          <FloatingCTA />
</>
  );
}
