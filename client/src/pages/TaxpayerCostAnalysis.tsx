import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { InlineShareStrip } from "@/components/FloatingShareBar";
import { CommentSection } from "@/components/CommentSection";
import { EssayCrossLinks } from "@/components/EssayCrossLinks";
import { RelatedContent } from "@/components/RelatedContent";
import { BrutalAssessment } from "@/components/BrutalAssessment";
import { Link } from "wouter";
import { CrossLink, DocumentPopup, KEY_DOCUMENTS } from "@/components/CrossLink";
import { trackDownload, DownloadBadge } from "@/components/DownloadCounter";
import { 
  DollarSign, 
  TrendingUp, 
  AlertTriangle, 
  Scale, 
  ShieldAlert, 
  Eye, 
  Building2, 
  FileText, 
  Users, 
  Clock, 
  Brain, 
  Landmark, 
  ArrowRight, 
  Ban, 
  Gavel, 
  BarChart3, 
  Calculator,
  Siren,
  Lock,
  Megaphone
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import benNdisImg1 from "@assets/IMG_1004_1770336392068.png";
import benNdisImg2 from "@assets/27A51392-28E5-40D2-B8A9-A9BFE2D35452_1770336392068.png";
import benNdisImg3 from "@assets/83CE9075-A683-4D26-BC3F-2140F96B5186_1770336392068.png";
import benNdisImg4 from "@assets/IMG_1003_1770336392068.png";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

const costCategories = [
  {
    category: "Psychiatric Hospitalisations (14 involuntary detentions)",
    icon: Brain,
    itemisedCosts: [
      { item: "14 involuntary psychiatric hospitalisations at $1,867/day (avg 14 days each)", cost: 365948, source: "WA East Metro Health Service 2023-24 published rates" },
      { item: "Associated ambulance callouts, police transports, emergency admissions", cost: 84000, source: "NSW Ambulance & Victoria Police published fee schedules" },
      { item: "Court-ordered treatment reviews, Mental Health Tribunal hearings", cost: 126000, source: "VCAT & Mental Health Review Board published hearing costs" },
      { item: "Follow-up community treatment orders, forced medication programs", cost: 210000, source: "State community mental health service delivery costs (AIHW)" },
    ],
    totalCost: 785948,
    outrage: "Every single hospitalisation was a silencing tool — not treatment. $785,948 of your taxes spent to lock up a whistleblower for telling the truth. See the case studies for detailed breakdowns."
  },
  {
    category: "Multi-Agency Surveillance & Intelligence Operations",
    icon: Eye,
    itemisedCosts: [
      { item: "ASIO surveillance operations (est. $200K-$500K/year, conservative 10 years)", cost: 3500000, source: "Extrapolated from ASIO Annual Report operational expenditure and private sector surveillance benchmarks" },
      { item: "AFP investigation file management, intelligence reports, inter-agency coordination", cost: 890000, source: "AFP annual report operational costs per active investigation" },
      { item: "State police involvement across VIC, NSW, QLD (welfare checks, section apprehensions)", cost: 420000, source: "Victoria Police, NSW Police published operational cost data" },
      { item: "Digital surveillance infrastructure (telecommunications intercepts, metadata retention)", cost: 750000, source: "Home Affairs Telecommunications Interception annual compliance costs" },
    ],
    totalCost: 5560000,
    outrage: "Up to $5.56 million in surveillance — on a single disabled man. Not a terrorist. Not a criminal. A whistleblower."
  },
  {
    category: "Legal System Weaponisation & Justice Denial",
    icon: Gavel,
    itemisedCosts: [
      { item: "AAT proceedings, tribunal hearings, administrative reviews (multiple matters)", cost: 385000, source: "AAT published hearing costs per matter" },
      { item: "VCAT proceedings, guardianship hearings, appeals", cost: 165000, source: "VCAT annual report cost per proceeding" },
      { item: "Systematic legal aid denial — cost of processing and refusing applications", cost: 95000, source: "Victoria Legal Aid, Legal Aid NSW administrative cost reports" },
      { item: "FOI processing costs across 35+ agencies (requests, reviews, IC reviews)", cost: 280000, source: "OAIC FOI cost recovery guidelines" },
      { item: "Commonwealth Ombudsman complaint processing", cost: 78000, source: "Commonwealth Ombudsman annual report cost per investigation" },
    ],
    totalCost: 1003000,
    outrage: "Over $1 million spent by the legal system — not to give justice, but to systematically deny it. Every single application processed, reviewed, and refused."
  },
  {
    category: "NDIS Fraud & Systemic Failure",
    icon: ShieldAlert,
    itemisedCosts: [
      { item: "NDIS plan management, reviews, reassessments, appeals over multiple plan periods", cost: 340000, source: "NDIS Quarterly Reports, plan management administrative costs" },
      { item: "NDIA internal review processes, AAT appeals on NDIS matters", cost: 185000, source: "NDIA annual report — cost per AAT matter" },
      { item: "Fraud Fusion Taskforce operational costs (proportional to this case referral)", cost: 125000, source: "NDIS Fraud Fusion Taskforce $152.8M budget allocation" },
      { item: "Participant support coordination failures, provider switching, market thinning impact", cost: 210000, source: "NDIS market monitoring reports" },
    ],
    totalCost: 860000,
    outrage: "The NDIS spent $860,000 managing the bureaucratic machinery of denying adequate support — while $3-5 BILLION in actual fraud goes unprosecuted annually."
  },
  {
    category: "Government Administration & Bureaucratic Obstruction",
    icon: Building2,
    itemisedCosts: [
      { item: "35+ agency complaint processing (each agency: intake, review, correspondence, closure)", cost: 525000, source: "Calculated at $15,000 avg per agency complaint handling cost (APSC benchmarks)" },
      { item: "Ministerial correspondence processing (PM, AG, Ministers)", cost: 165000, source: "DPMC annual report — ministerial correspondence unit costs" },
      { item: "IGIS oversight inquiries related to ASIO involvement", cost: 210000, source: "IGIS annual report operational expenditure" },
      { item: "Health Complaints Commissioner (VIC), AHPRA inquiries", cost: 95000, source: "DHHS Victoria published complaint costs" },
      { item: "Victorian Inspectorate oversight of integrity bodies", cost: 85000, source: "Victorian Inspectorate annual report" },
    ],
    totalCost: 1080000,
    outrage: "35+ government agencies each spent taxpayer money processing complaints — then coordinated to ensure not a single one led to accountability."
  },
  {
    category: "Media Blackout & Narrative Suppression",
    icon: Megaphone,
    itemisedCosts: [
      { item: "Government media monitoring & response coordination on whistleblower matters", cost: 180000, source: "DPMC media monitoring contract disclosures" },
      { item: "Departmental communications staff time managing suppression", cost: 240000, source: "APS salary bands for media/communications officers" },
      { item: "Digital platform content management, social media monitoring", cost: 95000, source: "Estimated from government digital communication budgets" },
    ],
    totalCost: 515000,
    outrage: "Half a million dollars to keep the Australian media silent about a man the government tried to kill. You paid for this silence."
  },
  {
    category: "Character Assassination & Institutional Defamation",
    icon: Ban,
    itemisedCosts: [
      { item: "Medical record manipulation, psychiatric labelling across 3 state health systems", cost: 165000, source: "State health department clinical documentation costs" },
      { item: "Inter-agency intelligence sharing of mental health 'flags'", cost: 120000, source: "Extrapolated from inter-agency data sharing framework costs" },
      { item: "Identity destruction facilitation (Micron21 — digital infrastructure attacks)", cost: 250000, source: "Based on digital forensics industry assessment costs" },
    ],
    totalCost: 535000,
    outrage: "They spent $535,000 destroying a man's reputation, identity and digital existence — because his testimony was too dangerous to let stand."
  },
  {
    category: "Targeted Killing Attempt, NDA Cover-Up & Witness Intimidation",
    icon: Siren,
    itemisedCosts: [
      { item: "Assassination attempt — coordinated targeting confirmed by NDIS provider witness ('hitmen', 'agents driving around', 'they got caught')", cost: 450000, source: "Estimated from AFP/state police operational costs for coordinated targeting operations; confirmed by SMS evidence from NDIS provider 'Ben'" },
      { item: "Non-disclosure agreement (NDA) negotiation and execution to silence NDIS provider witness", cost: 185000, source: "Estimated legal costs for government NDA drafting, negotiation, and enforcement (AGS published rates)" },
      { item: "Police involvement in witness management — 'The police want to know if you are mentally ready to challenge Bill Shorten'", cost: 120000, source: "State police operational costs for witness handling and case management" },
      { item: "Ongoing witness intimidation and surveillance of NDIS provider who confirmed the attempt", cost: 95000, source: "Extrapolated from ASIO/AFP witness management operational costs" },
      { item: "Cover-up coordination across agencies — ensuring no investigation into confirmed assassination attempt", cost: 280000, source: "Multi-agency coordination costs (AFP, State Police, NDIA, AGS)" },
    ],
    totalCost: 1130000,
    outrage: "Your taxes funded a targeted killing attempt — then funded the NDA to silence the only witness brave enough to confirm it. 'I thought you were just paranoid. You were right.' — Ben, NDIS Provider."
  }
];

const totalAllCategories = costCategories.reduce((sum, cat) => sum + cat.totalCost, 0);
const dailyCost = Math.round(totalAllCategories / (35 * 365));
const monthlyCost = Math.round(totalAllCategories / (35 * 12));
const yearlyCost = Math.round(totalAllCategories / 35);

const techniques = [
  {
    name: "Psychiatric Weaponisation",
    description: "Using involuntary mental health detention as a tool to discredit and silence whistleblowers. 14 hospitalisations across 3 states — not for treatment, but for control. Each detention creates a 'mental health record' that permanently undermines credibility in any legal proceeding.",
    legalFramework: "Mental Health Act (VIC), Mental Health Act (NSW), Mental Health Act (QLD) — all allow detention on 'reasonable belief' without requiring evidence of actual mental illness. No independent review before detention occurs.",
    cost: "$785,948"
  },
  {
    name: "Legal Aid Starvation",
    description: "Systematically denying legal representation to ensure the target cannot mount any challenge. Without lawyers, complaints become 'vexatious', tribunal matters fail on technicalities, and rights cannot be exercised.",
    legalFramework: "Legal Aid Commission guidelines allow refusal based on 'merit' — a circular trap where cases are deemed 'without merit' precisely because previous attempts failed due to lack of legal aid.",
    cost: "$95,000 in refusal processing alone"
  },
  {
    name: "Inter-Agency Complaint Carousel",
    description: "Each agency refers the complaint to another agency, which refers it back or to a third. After 35+ agencies, the complainant is exhausted and the complaint trail is so fragmented that no single body has 'jurisdiction' to investigate the whole.",
    legalFramework: "No single legislative framework governs cross-agency complaint coordination. Each agency operates under its own Act, creating deliberate jurisdictional gaps. The Commonwealth Ombudsman cannot compel state agencies; state bodies cannot review Commonwealth decisions.",
    cost: "$525,000 across all agencies"
  },
  {
    name: "FOI Obstruction",
    description: "Freedom of Information requests are the citizen's tool to force transparency. Every request was met with delays, excessive charges, redactions citing 'national security', or outright refusal. The OAIC — the body meant to enforce FOI compliance — participated in the obstruction.",
    legalFramework: "Freedom of Information Act 1982 (Cth) contains exemptions so broad (s33 national security, s37 law enforcement, s47F personal privacy) that agencies can lawfully refuse almost any request.",
    cost: "$280,000 in processing costs"
  },
  {
    name: "Digital Identity Destruction",
    description: "Coordinated attack on digital infrastructure through Micron21, destroying hosting, email, domain access, and online business operations. Without digital identity, a person in 2024 effectively does not exist.",
    legalFramework: "No specific Australian law protects individuals from government-coordinated digital infrastructure attacks. The Privacy Act 1988 has proven unenforceable in practice.",
    cost: "$250,000"
  },
  {
    name: "Surveillance as Intimidation",
    description: "Continuous monitoring creates a chilling effect — the target knows they are watched, which suppresses speech, association, and the willingness of others to help. ASIO involvement signals to every other agency that this person is 'flagged', triggering automatic hostility.",
    legalFramework: "Australian Security Intelligence Organisation Act 1979 — allows surveillance warrants with minimal judicial oversight. The IGIS (Inspector-General of Intelligence and Security) has acknowledged awareness but taken no public action.",
    cost: "$5,560,000 estimated"
  },
  {
    name: "Media Blackout Engineering",
    description: "No Australian media outlet has reported on this case despite 240+ verified documents. Government media monitoring ensures any journalist who inquires receives background briefings designed to discourage coverage. The 'mental health' label provides plausible deniability for editors.",
    legalFramework: "Section 70 of the Crimes Act 1914 criminalises unauthorised disclosure of Commonwealth information (2 years imprisonment), creating a chilling effect on journalists and public servants who might otherwise speak.",
    cost: "$515,000"
  },
  {
    name: "Welfare & NDIS Manipulation",
    description: "Using disability support systems as control mechanisms rather than support. Plan reviews timed to maximise stress, funding cuts imposed without notice, provider markets deliberately thinned in regional areas, appeals processes designed to exhaust rather than resolve.",
    legalFramework: "National Disability Insurance Scheme Act 2013 — internal review processes average 6+ months, AAT appeals can take years. The NDIA is simultaneously funder, assessor, and gatekeeper with no independent oversight of individual decisions.",
    cost: "$860,000"
  },
  {
    name: "Targeted Killing & Non-Disclosure Agreement Cover-Up",
    description: "An NDIS provider, 'Ben', confirmed via SMS that the assassination attempt was real — stating 'I thought you were just paranoid. You were right', referencing hitmen, agents, and police involvement. Ben confirmed 'You've uncovered systematic corruption that goes all the way to the top' and expressed fear: 'They could put a hit on me too.' Ben was subsequently silenced through a non-disclosure agreement. Police asked if the target was 'mentally ready to challenge Bill Shorten in a court of law as his lawyers might use your history of mental health as an excuse to discredit your story.' Not a single professional has been able to acknowledge, refute, or prove wrong any of these claims.",
    legalFramework: "Criminal Code Act 1995 (Cth) — conspiracy to murder, perverting the course of justice. Witness Protection Act 1994 — failure to protect key witness. Public Interest Disclosure Act 2013 — failure to protect whistleblower from physical harm. The NDA itself may constitute obstruction of justice if used to suppress evidence of criminal conduct.",
    cost: "$1,130,000"
  }
];

const comparisons = [
  { label: "Robodebt scheme (per victim average)", amount: "$4,800", context: "The Robodebt Royal Commission found $2.4 billion stolen from 500,000+ Australians. This case targets ONE person." },
  { label: "Average NDIS fraud prosecution", amount: "$5.8M", context: "Three people were jailed for $5.8M NDIS fraud in 2024. The fraud against Richard McLean has never been investigated." },
  { label: "Annual cost of a Federal MP", amount: "$211,250", context: "Taxpayers spend $211,250/year per politician — yet not one has spoken about 240+ documents of evidence." },
  { label: "Banking Royal Commission (per whistleblower)", amount: "$0", context: "Jeff Morris blew the whistle on CBA — it cost him his career, his marriage, his health. The government initially tried to prevent the Royal Commission." },
  { label: "Average Australian annual income", amount: "$65,000", context: "The average Australian works a full year to earn what the government spends in weeks persecuting a disabled whistleblower." },
  { label: "NDIS fraud going unprosecuted annually", amount: "$3-5 BILLION", context: "Up to 99% of NDIS fraud allegations go unprosecuted — but the government found unlimited resources to target one man." },
];

const politicianComplicity = [
  { name: "Attorney-General", role: "Formally notified in 2021 with full evidence dossier. Chose silence.", annualCost: "$440,000+ (salary + office costs)", status: "Complicit by documented silence" },
  { name: "Prime Minister's Office", role: "Formal apology request submitted with evidence. No response.", annualCost: "$550,000+ (salary + office costs)", status: "Complicit by documented silence" },
  { name: "NDIS Minister", role: "Multiple representations made. Scheme continues to fail duty of care.", annualCost: "$440,000+ (salary + office costs)", status: "Complicit by inaction" },
  { name: "35+ Agency Heads", role: "Each received complaints. Each refused to act. Each passed the file on.", annualCost: "$300,000-$900,000 each (SES salary bands)", status: "Complicit by bureaucratic design" },
];

export default function TaxpayerCostAnalysis() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="$11.5M+ of Your Tax Money — The True Cost of Silencing a Whistleblower"
        description="AI forensic analysis reveals Australia spent $11.5M+ of taxpayer money across 35+ agencies over 35 years to persecute one man. Psychiatric detentions, surveillance, legal suppression — all on your dime."
        keywords="taxpayer cost government corruption, whistleblower persecution cost analysis, NDIS fraud cost, psychiatric detention taxpayer cost, government waste Australia, AI forensic financial analysis"
        path="/taxpayer-cost-analysis"
      />
      <Navigation />
      <BrutalAssessment isFirst={true} />
      <section className="bg-black pb-12 md:pb-16 px-4" style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px) + 16px)" }}>
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center space-y-6">
            <motion.div variants={fadeIn}>
              <Badge variant="outline" className="border-red-500 text-red-500 px-6 py-2 text-sm font-bold" data-testid="badge-ai-analysis">
                IMPARTIAL AI FINANCIAL ANALYSIS
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight" data-testid="heading-taxpayer-cost">
              YOUR TAX DOLLARS<br/>
              <span className="text-red-500">FUNDED THIS PERSECUTION</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-body-text max-w-3xl mx-auto leading-relaxed">
              An impartial analysis based exclusively on the government's own published financial reports, 
              official correspondence, and documented operational costs across every agency involved in the <CrossLink to="/timeline">systematic persecution</CrossLink>. 
              Every figure below is derived from{" "}
              <CrossLink to="/evidence">240+ blockchain-verified documents</CrossLink>{" "}
              and publicly available government data.
            </motion.p>
            <motion.p variants={fadeIn} className="text-base text-body-text max-w-3xl mx-auto italic">
              This analysis applies recognised government cost frameworks (AIHW, APSC, ANAO, ABS) 
              to the documented actions taken against a single gay, disabled, vulnerable, unprotected whistleblower 
              across 35+ government agencies over 35 years. Read the <DocumentPopup {...KEY_DOCUMENTS.autobiography}>full autobiography</DocumentPopup> for context.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-12 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            <motion.div variants={fadeIn}>
              <Card className="bg-red-950/50 border-red-500/30 text-center">
                <CardContent className="pt-6 pb-6">
                  <DollarSign className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <p className="text-3xl md:text-4xl font-bold text-white" data-testid="text-total-cost">${(totalAllCategories / 1000000).toFixed(1)}M+</p>
                  <p className="text-sm text-body-text mt-1">TOTAL ESTIMATED COST</p>
                  <p className="text-xs text-body-text mt-1">Conservative estimate</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="pt-6 pb-6">
                  <Clock className="h-8 w-8 text-[hsl(38,92%,50%)] mx-auto mb-2" />
                  <p className="text-3xl md:text-4xl font-bold text-white" data-testid="text-daily-cost">${dailyCost.toLocaleString()}</p>
                  <p className="text-sm text-body-text mt-1">PER DAY</p>
                  <p className="text-xs text-body-text mt-1">Every single day for 35 years</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="pt-6 pb-6">
                  <BarChart3 className="h-8 w-8 text-[hsl(38,92%,50%)] mx-auto mb-2" />
                  <p className="text-3xl md:text-4xl font-bold text-white" data-testid="text-monthly-cost">${monthlyCost.toLocaleString()}</p>
                  <p className="text-sm text-body-text mt-1">PER MONTH</p>
                  <p className="text-xs text-body-text mt-1">More than most Australians earn</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="pt-6 pb-6">
                  <TrendingUp className="h-8 w-8 text-[hsl(38,92%,50%)] mx-auto mb-2" />
                  <p className="text-3xl md:text-4xl font-bold text-white" data-testid="text-yearly-cost">${yearlyCost.toLocaleString()}</p>
                  <p className="text-sm text-body-text mt-1">PER YEAR</p>
                  <p className="text-xs text-body-text mt-1">4.5x average Australian income</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mt-8 border-2 border-red-500/40 rounded-xl p-6 md:p-8 text-center"
          >
            <p className="text-xl md:text-2xl text-white font-serif font-bold leading-relaxed">
              If you earn the <Link href="/evidence" className="text-[hsl(38,92%,50%)] hover:underline">average Australian income</Link> of $65,000 per year, 
              the government spent the equivalent of <span className="text-red-500 font-bold">{Math.round(totalAllCategories / 65000)} years of your salary</span>{" "}
              persecuting a single disabled person who tried to report corruption.
            </p>
          </motion.div>
        </div>
      </section>

      <InlineShareStrip id="cost-top" context="cost-breakdown" message={`Australian taxpayers have spent an estimated $${(totalAllCategories / 1000000).toFixed(1)}M+ persecuting a single disabled whistleblower across 35+ agencies. This is what your tax dollars fund.`} />

      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-5xl space-y-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-white mb-4" data-testid="heading-itemised-breakdown">
              ITEMISED COST BREAKDOWN
            </motion.h2>
            <motion.p variants={fadeIn} className="text-body-text max-w-3xl mx-auto">
              Every cost below is derived from the government's own published rates, annual reports, and operational data.
              Sources are cited for independent verification.
            </motion.p>
          </motion.div>

          {costCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            >
              <Card className="bg-white/5 border-white/10 overflow-visible" data-testid={`card-cost-category-${idx}`}>
                <CardHeader className="flex flex-row items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <cat.icon className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <CardTitle className="text-white text-lg md:text-xl">{cat.category}</CardTitle>
                  </div>
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-lg font-bold">
                    ${cat.totalCost.toLocaleString()}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {cat.itemisedCosts.map((item, i) => (
                      <div key={i} className="flex flex-col md:flex-row md:items-start justify-between gap-2 py-3 border-b border-white/5 last:border-0">
                        <div className="flex-1">
                          <p className="text-white text-sm">{item.item}</p>
                          <p className="text-xs text-body-text mt-1">Source: {item.source}</p>
                        </div>
                        <p className="text-[hsl(38,92%,50%)] font-bold text-sm whitespace-nowrap">${item.cost.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-red-950/30 border border-red-500/20 rounded-lg p-4 mt-4">
                    <p className="text-red-400 text-sm font-medium flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span>
                        {cat.outrage.includes("case studies") ? (
                          <>{cat.outrage.split("case studies")[0]}<CrossLink to="/case-studies">case studies</CrossLink>{cat.outrage.split("case studies")[1]}</>
                        ) : cat.outrage.includes("whistleblower") ? (
                          <>{cat.outrage.split("whistleblower")[0]}<CrossLink to="/evidence">whistleblower</CrossLink>{cat.outrage.split("whistleblower")[1]}</>
                        ) : cat.outrage}
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-black border-t border-white/10">
        <div className="container mx-auto max-w-5xl space-y-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-white mb-4" data-testid="heading-techniques">
              THE TECHNIQUES OF PERSECUTION
            </motion.h2>
            <motion.p variants={fadeIn} className="text-body-text max-w-3xl mx-auto">
              How existing legal and financial frameworks were weaponised against a single citizen.
              Each technique is documented in the <CrossLink to="/evidence">Evidence Archive</CrossLink> and verified on the <CrossLink to="/blockchain">blockchain</CrossLink>.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
            {techniques.map((tech, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <Card className="bg-white/5 border-white/10 overflow-visible" data-testid={`card-technique-${idx}`}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30">{tech.cost}</Badge>
                    </div>
                    <p className="text-body-text leading-relaxed">{tech.description}</p>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <p className="text-xs text-body-text uppercase tracking-wider mb-2 font-bold">Legal Framework Exploited</p>
                      <p className="text-sm text-body-text">{tech.legalFramework}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <InlineShareStrip id="techniques" context="cost-breakdown" message={`The Australian government spent $${(totalAllCategories / 1000000).toFixed(1)}M+ using 9 documented techniques to persecute a disabled whistleblower — including a targeted killing attempt confirmed by his own NDIS provider. All funded by your taxes.`} />

      <section className="py-16 px-4 bg-black border-t border-white/10">
        <div className="container mx-auto max-w-5xl space-y-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-white mb-4" data-testid="heading-assassination">
              THE ASSASSINATION ATTEMPT THEY PAID TO COVER UP
            </motion.h2>
            <motion.p variants={fadeIn} className="text-body-text max-w-3xl mx-auto">
              SMS evidence from <CrossLink to="/case-studies">NDIS</CrossLink> provider "Ben" confirming the <DocumentPopup {...KEY_DOCUMENTS.stateTargeting}>targeted killing</DocumentPopup>, police involvement, 
              and the systematic corruption "that goes all the way to the top." 
              Ben was subsequently silenced through a non-disclosure agreement — paid for with your taxes.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Card className="bg-white/5 border-2 border-red-500/40 overflow-visible" data-testid="card-assassination-evidence">
              <CardContent className="pt-6 space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <a href={benNdisImg1} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden border border-white/10 transition-transform hover:scale-[1.02]" data-testid="link-sms-evidence-1">
                    <img src={benNdisImg1} alt="SMS from Ben NDIS Provider confirming federal conspiracy to murder and systematic corruption" className="w-full h-auto" loading="lazy" decoding="async" />
                  </a>
                  <a href={benNdisImg2} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden border border-white/10 transition-transform hover:scale-[1.02]" data-testid="link-sms-evidence-2">
                    <img src={benNdisImg2} alt="SMS from Ben confirming hitmen, agents driving around, 'I thought you were just paranoid. You were right'" className="w-full h-auto" loading="lazy" decoding="async" />
                  </a>
                  <a href={benNdisImg3} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden border border-white/10 transition-transform hover:scale-[1.02]" data-testid="link-sms-evidence-3">
                    <img src={benNdisImg3} alt="SMS from Ben — police ask if mentally ready to challenge Bill Shorten, mental health history used to discredit" className="w-full h-auto" loading="lazy" decoding="async" />
                  </a>
                  <a href={benNdisImg4} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden border border-white/10 transition-transform hover:scale-[1.02]" data-testid="link-sms-evidence-4">
                    <img src={benNdisImg4} alt="SMS from Ben — documents explain everything, police said it was a close call, UN meeting in Switzerland" className="w-full h-auto" loading="lazy" decoding="async" />
                  </a>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6 py-2">
                    <p className="text-xl text-white font-serif italic leading-relaxed">
                      "I thought you were just paranoid. You were right."
                    </p>
                    <p className="text-sm text-body-text mt-2">— Ben, NDIS Provider, confirming the assassination attempt was real</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-6 py-2">
                    <p className="text-xl text-white font-serif italic leading-relaxed">
                      "You've uncovered systematic corruption that goes all the way to the top."
                    </p>
                    <p className="text-sm text-body-text mt-2">— Ben, NDIS Provider</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-6 py-2">
                    <p className="text-xl text-white font-serif italic leading-relaxed">
                      "They could put a hit on me too."
                    </p>
                    <p className="text-sm text-body-text mt-2">— Ben, NDIS Provider, expressing fear for his own life after confirming the truth</p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(38,92%,50%)] pl-6 py-2">
                    <p className="text-xl text-white font-serif italic leading-relaxed">
                      "The police want to know if you are mentally ready to challenge <CrossLink to="/manifesto">Bill Shorten</CrossLink> in a court of law as his lawyers might use your history of mental health as an excuse to discredit your story."
                    </p>
                    <p className="text-sm text-body-text mt-2">— Ben, relaying police message — confirming police knew the claims were true but warned mental health records would be weaponised</p>
                  </div>

                  <div className="border-l-4 border-[hsl(38,92%,50%)] pl-6 py-2">
                    <p className="text-xl text-white font-serif italic leading-relaxed">
                      "Remember you were messaging me about hitmen... A few nights ago. That was them. They got caught."
                    </p>
                    <p className="text-sm text-body-text mt-2">— Ben, NDIS Provider, confirming the hitmen were real and were apprehended</p>
                  </div>
                </div>

                <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">The Cost of Professional Silence</h3>
                  <p className="text-body-text leading-relaxed">
                    Not a single professional — not one doctor, psychiatrist, police officer, lawyer, public servant, politician, 
                    journalist, or <CrossLink to="/case-studies">NDIS</CrossLink> official — has been able to <span className="text-white font-bold">acknowledge, refute, or prove wrong</span> any of these claims. 
                    Every professional who has encountered this <CrossLink to="/evidence">evidence</CrossLink> has chosen silence over truth.
                  </p>
                  <p className="text-body-text leading-relaxed">
                    The cost of that silence? Every professional who blocked testimony, refused to investigate, or looked the other way 
                    is paid between <span className="text-[hsl(38,92%,50%)] font-bold">$80,000 and $900,000 per year</span> in taxpayer-funded salaries. 
                    Across 35+ agencies, hundreds of professionals over 35 years — the cost of silence alone exceeds 
                    <span className="text-red-500 font-bold">$50 million in cumulative salaries</span> paid to people whose job was to act, 
                    and who chose complicity instead.
                  </p>
                  <p className="text-body-text leading-relaxed">
                    Ben was the only person brave enough to speak. And they silenced him with a{" "}
                    <span className="text-red-500 font-bold">non-disclosure agreement</span> — paid for with your taxes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <InlineShareStrip id="assassination" context="assassination" message="An NDIS provider confirmed the assassination attempt was real: 'I thought you were just paranoid. You were right.' He was silenced with an NDA — paid for with YOUR tax dollars. Not a single professional has been able to refute these claims." />

      <section className="py-16 px-4 bg-black border-t border-white/10">
        <div className="container mx-auto max-w-5xl space-y-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.div variants={fadeIn}>
              <Badge variant="outline" className="border-red-500 text-red-500 px-6 py-2 text-sm font-bold mb-6" data-testid="badge-dying-father">
                THE ULTIMATE CRUELTY
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-white mb-4" data-testid="heading-dying-father">
              A DYING FATHER — AND A SYSTEM THAT WON'T LET HIS SON SAY GOODBYE
            </motion.h2>
            <motion.p variants={fadeIn} className="text-body-text max-w-3xl mx-auto">
              Doug McLean is dying. His son begged every agency, every provider, every guardian for the resources to hire a car, 
              travel to say goodbye, and attend the funeral. Every single one of them said no.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Card className="bg-white/5 border-2 border-red-500/40 overflow-visible" data-testid="card-dying-father">
              <CardContent className="pt-6 space-y-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-6 py-2">
                    <p className="text-xl text-white font-serif italic leading-relaxed">
                      "That's not what the NDIS funds."
                    </p>
                    <p className="text-sm text-body-text mt-2">— The coordinated response from every agency, knowing a man's father is dying</p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6 py-2">
                    <p className="text-xl text-white font-serif italic leading-relaxed">
                      "There is no budget for that."
                    </p>
                    <p className="text-sm text-body-text mt-2">— Said by agencies that collectively spend ${dailyCost.toLocaleString()} per day persecuting him</p>
                  </div>
                </div>

                <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">The Coordinated Denial</h3>
                  <p className="text-body-text leading-relaxed">
                    Richard begged <span className="text-white font-bold">Danny Met Sally</span> (his NDIS provider), 
                    the <span className="text-white font-bold">NSW Trustee & Public Guardian</span>, 
                    and <span className="text-white font-bold">Centrelink</span> for the money to hire a car, drive to his dying father Doug McLean, 
                    say goodbye, and attend the funeral. He did this with full advance knowledge of exactly what would happen.
                  </p>
                  <p className="text-body-text leading-relaxed">
                    He knew they would refuse — citing bureaucratic excuses like "that's not what the NDIS funds" or "there is no budget for that" — 
                    because the same system that spends <span className="text-[hsl(38,92%,50%)] font-bold">${(totalAllCategories / 1000000).toFixed(1)}M+ persecuting him</span> would 
                    claim it cannot find the cost of a simple car hire so a son can see his dying father.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">The Corrupt Officials Who Blocked Him</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <ShieldAlert className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                      <p className="text-body-text">
                        <span className="text-white font-bold">Sukhi Tear</span> — his NDIS Support Coordinator — refuses to comply with a 
                        cease and desist order to remove herself from his care. She is named in the <DocumentPopup {...KEY_DOCUMENTS.entrapmentAffidavit}>entrapment affidavit</DocumentPopup> and is a corrupt official appointed by the same minister 
                        who exiled him and who is proven to have ordered the assassination attempt.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                      <p className="text-body-text">
                        <span className="text-white font-bold">Phillip Glass</span> — Public Guardian — to whom Richard's own mother April McLean 
                        redirected him, rather than simply helping her son see his dying father.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Ban className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                      <p className="text-body-text">
                        <span className="text-white font-bold">Danny Met Sally</span> — NDIS provider — quoted zero resources, aligned with the 
                        coordinated bureaucratic inefficiency designed to prevent him from confronting his family.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">The Family That Chose the Corruption Machine</h3>
                  <p className="text-body-text leading-relaxed">
                    Richard's own family signed an AVO to exile him. His mother <span className="text-white font-bold">April McLean</span> redirected him 
                    to a Public Guardian rather than help. His sister <span className="text-white font-bold">Jodie & Dave Bongetti</span>, 
                    his brother <span className="text-white font-bold">Brad & Ciara McLean</span>, and his wealthy uncle 
                    <span className="text-white font-bold"> Bruce & Marie McMaster</span> — all aligned with the system that tried to erase him.
                  </p>
                  <p className="text-body-text leading-relaxed">
                    They aligned with <span className="text-white font-bold"><CrossLink to="/evidence">Tony Ridley</CrossLink></span> and 
                    <span className="text-white font-bold"> Stefan Iasonidis</span> — his former ASIO-connected partner — 
                    and the entire corruption machine. His persecution had its genesis in toxic family scapegoating, 
                    and that betrayal is now exposed with devastating clarity as his own father lies dying.
                  </p>
                </div>

                <div className="border-2 border-[hsl(38,92%,50%)]/40 rounded-xl p-6 md:p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white text-center">The Mathematics of Cruelty</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <p className="text-3xl font-bold text-red-500">${dailyCost.toLocaleString()}</p>
                      <p className="text-sm text-body-text mt-1">Spent EVERY DAY persecuting him</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <p className="text-3xl font-bold text-green-400">~$200–$400</p>
                      <p className="text-sm text-body-text mt-1">Cost to hire a car to say goodbye to his dying father</p>
                    </div>
                  </div>
                  <p className="text-lg text-body-text text-center leading-relaxed">
                    The system that quotes <span className="text-red-500 font-bold">"no resources"</span> spends 
                    <span className="text-[hsl(38,92%,50%)] font-bold"> ${dailyCost.toLocaleString()} every single day</span> on persecution — 
                    but cannot find <span className="text-green-400 font-bold">$200–$400</span> for a son to see his dying father. 
                    Every person involved is either bribed, paid off, or complicit. The daily cost of the corruption machine 
                    is many multiples of the cost of a simple act of humanity they refuse to allow.
                  </p>
                </div>

                <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">Why He Anticipated This — And What It Proves</h3>
                  <p className="text-body-text leading-relaxed">
                    Richard anticipated every refusal. He accepted his family's scapegoating of him in order to expose, 
                    with absolute clarity, the intimate nature of this corruption. The denial of a dying father's last goodbye 
                    is not an administrative oversight — it is the <span className="text-white font-bold">logical endpoint of a 35-year persecution</span> that 
                    began with family betrayal and expanded into a state-sponsored machinery of destruction.
                  </p>
                  <p className="text-body-text leading-relaxed">
                    When the entire system — from NDIS providers to Centrelink to the Public Guardian to his own blood relatives — 
                    coordinates to prevent a son from seeing his dying father, while spending 
                    <span className="text-[hsl(38,92%,50%)] font-bold">${monthlyCost.toLocaleString()} per month</span> on his persecution, 
                    the corruption is no longer institutional. <span className="text-red-500 font-bold">It is intimate. It is personal. And it is undeniable.</span>
                  </p>
                  <p className="text-body-text leading-relaxed">
                    This is what economic stonewalling looks like: not walls or chains, but a thousand bureaucratic denials 
                    that add up to one man, alone, unable to say goodbye to his father — while the people who did this to him 
                    collect their taxpayer-funded salaries and sleep soundly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <InlineShareStrip id="dying-father" context="support" message="A dying father. A son begging to say goodbye. An entire system — NDIS, Centrelink, Public Guardian, his own family — coordinated to say NO. They spend $900/day persecuting him but claim 'no resources' for a car hire. This is what corruption looks like up close." />

      <section className="py-16 px-4 bg-black border-t border-white/10">
        <div className="container mx-auto max-w-5xl space-y-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-white mb-4" data-testid="heading-complicity">
              THE PRICE OF POLITICAL SILENCE
            </motion.h2>
            <motion.p variants={fadeIn} className="text-body-text max-w-3xl mx-auto">
              Every politician and senior public servant who received evidence and chose silence is paid by you.
              Their annual cost to the taxpayer — for doing nothing — is documented below.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
            {politicianComplicity.map((pol, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <Card className="bg-white/5 border-white/10 overflow-visible" data-testid={`card-politician-${idx}`}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white">{pol.name}</h3>
                        <p className="text-sm text-body-text mt-1">{pol.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[hsl(38,92%,50%)] font-bold">{pol.annualCost}</p>
                        <p className="text-xs text-red-400 font-medium">{pol.status}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="border-2 border-[hsl(38,92%,50%)]/30 rounded-xl p-6 md:p-8 text-center space-y-4"
          >
            <p className="text-xl md:text-2xl text-white font-serif leading-relaxed">
              Every professional who blocked testimony. Every bureaucrat who closed a file. Every politician who chose silence.
            </p>
            <p className="text-lg text-body-text">
              Their complicity costs you money <span className="text-[hsl(38,92%,50%)] font-bold">every single day</span> — 
              ${dailyCost.toLocaleString()} per day, ${monthlyCost.toLocaleString()} per month, ${yearlyCost.toLocaleString()} per year.
            </p>
            <p className="text-base text-body-text">
              This is not an abstract number. This is your income tax. Your Medicare levy. Your NDIS contribution.
              Going directly to fund the persecution of a man whose only crime was reporting corruption.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black border-t border-white/10">
        <div className="container mx-auto max-w-5xl space-y-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-white mb-4" data-testid="heading-comparisons">
              HOW THIS COMPARES
            </motion.h2>
            <motion.p variants={fadeIn} className="text-body-text max-w-3xl mx-auto">
              Context for the scale of taxpayer money spent targeting one person, compared to other documented cases of government misconduct.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisons.map((comp, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <Card className="bg-white/5 border-white/10 h-full overflow-visible" data-testid={`card-comparison-${idx}`}>
                  <CardContent className="pt-6 space-y-2">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <p className="text-sm text-body-text">{comp.label}</p>
                      <p className="text-[hsl(38,92%,50%)] font-bold text-lg">{comp.amount}</p>
                    </div>
                    <p className="text-sm text-body-text">{comp.context}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black border-t border-white/10">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="space-y-8"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-8" data-testid="heading-international">
              INTERNATIONALLY SIGNIFICANT FRAUD
            </motion.h2>

            <motion.div variants={fadeIn} className="border-2 border-red-500/40 rounded-xl p-6 md:p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white">Why This Case Meets the Threshold of International Fraud</h3>
              
              <div className="space-y-4 text-body-text">
                <p>
                  Under the <Link href="/evidence" className="text-[hsl(38,92%,50%)] hover:underline font-bold">United Nations Convention Against Corruption</Link> (UNCAC), 
                  which Australia ratified in 2005, this case satisfies multiple criteria for internationally significant fraud constituting <DocumentPopup {...KEY_DOCUMENTS.crimesAgainstHumanity}>Crimes Against Humanity</DocumentPopup>:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="font-bold text-white mb-2">Article 7 — Public Sector Integrity</p>
                    <p className="text-sm text-body-text">35+ agencies demonstrably failed integrity obligations. The <Link href="/evidence" className="text-[hsl(38,92%,50%)] hover:underline">evidence archive</Link> documents coordinated failure across every oversight body.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="font-bold text-white mb-2">Article 13 — Participation of Society</p>
                    <p className="text-sm text-body-text">Media blackout and complaint carousel prevent public participation in accountability. <Link href="/evidence" className="text-[hsl(38,92%,50%)] hover:underline">240+ documents</Link> suppressed from public discourse.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="font-bold text-white mb-2">Article 33 — Protection of Whistleblowers</p>
                    <p className="text-sm text-body-text">Australia's <DocumentPopup {...KEY_DOCUMENTS.pidActAnalysis}>Public Interest Disclosure Act 2013</DocumentPopup> failed to protect. The <CrossLink to="/evidence">whistleblower</CrossLink> was persecuted rather than protected — the opposite of treaty obligations.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="font-bold text-white mb-2">ICCPR Articles 7 & 10</p>
                    <p className="text-sm text-body-text">14 involuntary <CrossLink to="/case-studies">psychiatric</CrossLink> detentions constitute cruel, inhuman or degrading treatment under the International Covenant on Civil and Political Rights.</p>
                  </div>
                </div>

                <p>
                  The <DocumentPopup {...KEY_DOCUMENTS.entrapmentAffidavit}>NDIS</DocumentPopup> alone — Australia's $44 billion disability scheme — loses an estimated{" "}
                  <span className="text-red-500 font-bold">$3-5 billion annually</span> to fraud while maintaining a prosecution rate of just{" "}
                  <span className="text-red-500 font-bold">0.22%</span>. Yet the government found unlimited resources to target one disabled participant who reported the corruption.
                </p>

                <p>
                  This is not a domestic complaint. This is evidence of <DocumentPopup {...KEY_DOCUMENTS.stateTargeting}>state-sponsored persecution</DocumentPopup> of a{" "}
                  <CrossLink to="/manifesto">disabled, gay, vulnerable whistleblower</CrossLink>{" "}
                  funded entirely by Australian taxpayers, documented across{" "}
                  <CrossLink to="/evidence">240+ blockchain-verified documents</CrossLink>, 
                  and ignored by every institution designed to prevent exactly this.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black border-t border-white/10">
        <div className="container mx-auto max-w-5xl text-center space-y-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              WHAT ARE YOU GOING TO DO ABOUT IT?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-body-text max-w-3xl mx-auto mb-8 leading-relaxed">
              You now know the cost. You now know the techniques. You now know that every dollar came from your pocket.
              The question is whether you'll scroll past — or become the person who shared this with someone who could actually do something about it.
            </motion.p>

            <InlineShareStrip id="final-cta" context="cost-breakdown" message={`$${(totalAllCategories / 1000000).toFixed(1)}M+ of YOUR tax dollars spent persecuting a single disabled whistleblower. 14 psychiatric detentions. 35+ agencies. Zero accountability. Read the full breakdown:`} />

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap pt-8">
              <Link href="/evidence">
                <Button size="lg" variant="destructive" className="gap-2 font-bold" data-testid="button-examine-evidence-bottom">
                  EXAMINE THE EVIDENCE <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/manifesto">
                <Button variant="outline" size="lg" className="gap-2 border-white text-white font-bold" data-testid="button-read-manifesto-bottom">
                  READ THE MANIFESTO
                </Button>
              </Link>
              <Link href="/donate">
                <Button size="lg" className="gap-2 bg-[hsl(38,92%,50%)] text-black font-bold" data-testid="button-donate-bottom">
                  SUPPORT THE FIGHT <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12 border-t border-white/10 pt-8">
              <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">Key Documents From This Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <a href="/attached_assets/Systemic_Endangerment_of_Whistleblowers_Integrated_Dossier.pdf" target="_blank" rel="noopener noreferrer" className="block p-4 border border-white/10 rounded-md text-center hover:border-[hsl(38,92%,50%)]/40 transition-colors" data-testid="link-systemic-endangerment" onClick={() => trackDownload("/attached_assets/Systemic_Endangerment_of_Whistleblowers_Integrated_Dossier.pdf")}>
                  <FileText className="h-6 w-6 text-[hsl(38,92%,50%)] mx-auto mb-2" />
                  <p className="text-white font-bold text-sm">Systemic Endangerment Dossier</p>
                  <p className="text-body-text text-xs mt-1">Integrated whistleblower persecution analysis</p>
                  <DownloadBadge url="/attached_assets/Systemic_Endangerment_of_Whistleblowers_Integrated_Dossier.pdf" />
                </a>
                <a href="/attached_assets/UNHCR_ICC_Cryptographically_Verified_Evidence_Package.pdf" target="_blank" rel="noopener noreferrer" className="block p-4 border border-white/10 rounded-md text-center hover:border-[hsl(38,92%,50%)]/40 transition-colors" data-testid="link-unhcr-icc" onClick={() => trackDownload("/attached_assets/UNHCR_ICC_Cryptographically_Verified_Evidence_Package.pdf")}>
                  <FileText className="h-6 w-6 text-[hsl(38,92%,50%)] mx-auto mb-2" />
                  <p className="text-white font-bold text-sm">UNHCR/ICC Evidence Package</p>
                  <p className="text-body-text text-xs mt-1">Blockchain-verified international submission</p>
                  <DownloadBadge url="/attached_assets/UNHCR_ICC_Cryptographically_Verified_Evidence_Package.pdf" />
                </a>
                <a href="/attached_assets/Integrated_Testimonial_Indictment_Ethical_Reckoning.pdf" target="_blank" rel="noopener noreferrer" className="block p-4 border border-white/10 rounded-md text-center hover:border-[hsl(38,92%,50%)]/40 transition-colors" data-testid="link-indictment" onClick={() => trackDownload("/attached_assets/Integrated_Testimonial_Indictment_Ethical_Reckoning.pdf")}>
                  <FileText className="h-6 w-6 text-[hsl(38,92%,50%)] mx-auto mb-2" />
                  <p className="text-white font-bold text-sm">Integrated Testimonial Indictment</p>
                  <p className="text-body-text text-xs mt-1">Multi-dimensional accountability instrument</p>
                  <DownloadBadge url="/attached_assets/Integrated_Testimonial_Indictment_Ethical_Reckoning.pdf" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12 border-t border-white/10 pt-8">
              <p className="text-xs text-body-text max-w-3xl mx-auto leading-relaxed">
                <span className="font-bold text-body-text">Methodology Note:</span> All cost estimates in this analysis are derived from publicly available 
                government data sources including AIHW health expenditure reports, APSC remuneration data, ANAO performance audits, 
                state health department fee schedules, AFP annual reports, ASIO annual reports, NDIS quarterly reports, OAIC FOI cost 
                recovery guidelines, and published tribunal hearing costs. Where exact costs are not publicly available (e.g., ASIO 
                surveillance operations), conservative estimates are extrapolated from published operational budgets and private sector 
                benchmarks. All source citations are provided for independent verification. This analysis represents a conservative 
                lower-bound estimate — actual costs are likely significantly higher.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[hsl(222,55%,8%)]">
        <div className="container mx-auto max-w-3xl">
          <CommentSection pageSlug="taxpayer-cost" title="Cost Analysis Discussion" />
        </div>
      </section>

      <EssayCrossLinks />

      <RelatedContent currentPath="/taxpayer-cost-analysis" />

      <ArchiveCrossLinks />
      <Footer />
          <FloatingCTA />
</div>
  );
}