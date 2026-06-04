import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { CrossLink, DocumentPopup, KEY_DOCUMENTS } from "@/components/CrossLink";
import { Heart, Shield, FileText, CheckCircle, Check, Scale, BookOpen, Globe, Sparkles, Copy, ExternalLink, Users, DollarSign, RefreshCw, ShoppingBag, Database, Download, Archive, Clock, Target, Repeat, Mail, AlertTriangle, TrendingUp, Zap } from "lucide-react";
import coverMasterRegister from "../assets/images/cover-master-evidence-register.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { InlineShareStrip } from "@/components/FloatingShareBar";
import { FloatingCTA } from "@/components/FloatingCTA";
import { SocialShare } from "@/components/SocialShare";
import { RelatedContent } from "@/components/RelatedContent";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const donationTiers = [
  {
    amount: "$10",
    label: "Witness",
    badge: "Entry",
    story: "The archive received its first death threat while he was still inside a government psychiatric facility.",
    impact: "Preserves 5 evidence documents on the Bitcoin blockchain — permanent, tamper-proof, beyond deletion.",
    color: "zinc",
    highlight: false,
  },
  {
    amount: "$25",
    label: "Defender",
    badge: "Most Common",
    story: "Every dollar he spent on this archive was money he did not have for food, housing, or medication.",
    impact: "Covers one full week of secure hosting for the 2,000+ document archive, serving 6 continents.",
    color: "blue",
    highlight: false,
  },
  {
    amount: "$50",
    label: "Guardian",
    badge: "Recommended",
    story: "The ICC acknowledged the submission. The UNHCR received the filing. Not one Australian institution has responded.",
    impact: "Funds one formal international human rights submission — ICC Article 7 filing or UNHCR complaint.",
    color: "amber",
    highlight: true,
  },
  {
    amount: "$100",
    label: "Champion",
    badge: "High Impact",
    story: "He passed a merit-based PhD scholarship while living on the street and under active psychiatric detention orders.",
    impact: "Covers one full month of legal research, evidence archiving, and whistleblower advocacy operations.",
    color: "emerald",
    highlight: false,
  },
  {
    amount: "$250",
    label: "Liberator",
    badge: "Transformative",
    story: "Not one professional person — across law, medicine, media, politics — has admitted a single shortcoming.",
    impact: "Funds a complete forensic evidence package for federal court submission. 675 propositions. All corroborated.",
    color: "purple",
    highlight: false,
  },
  {
    amount: "$500",
    label: "Architect of Justice",
    badge: "Legacy",
    story: "He clinically died in 2021, was revived inside a government facility, and returned to documenting the very system that hospitalised him.",
    impact: "Secures three months of the full archive — blockchain seals, international submissions, and all 52 forensic analyses — guaranteed online.",
    color: "red",
    highlight: false,
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
    platform: "Gumroad (Coming Soon)",
    url: "",
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

const CTO_DEADLINE = new Date("2026-07-28T09:00:00+10:00");
const GOAL_AMOUNT = 5000;
const GOAL_LABEL = "Emergency Legal & Archive Fund — July 2026";

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(() => Math.max(0, target.getTime() - Date.now()));
  useEffect(() => {
    const id = setInterval(() => setDiff(Math.max(0, target.getTime() - Date.now())), 1000);
    return () => clearInterval(id);
  }, [target]);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return { days, hours, mins, secs, expired: diff === 0 };
}

export default function Donate() {
  const [copied, setCopied] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();
  const payId = "rich@richmclean.com.au";
  const countdown = useCountdown(CTO_DEADLINE);

  const emailMutation = useMutation({
    mutationFn: (email: string) => apiRequest("POST", "/api/subscribers", { email }),
    onSuccess: () => {
      setEmailSent(true);
      toast({ title: "You're on the list", description: "You'll be notified when new forensic analyses are published." });
    },
    onError: () => toast({ title: "Already subscribed or invalid email", variant: "destructive" }),
  });

  const copyPayId = () => {
    const msg = selectedAmount ? `${payId}\nAmount: $${selectedAmount} AUD` : payId;
    navigator.clipboard.writeText(msg);
    setCopied(true);
    toast({
      title: selectedAmount ? `PayID + $${selectedAmount} Copied` : "PayID Copied",
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
        title="Fund His Safety — Dr. Richard McLean Is Under Active Physical Threat"
        description="450,000+ downloads. No money. No platform. No legal help. His physical safety is not guaranteed. The only protection is global distribution and voluntary support. PayID: rich@richmclean.com.au — ABN 78 833 496 164."
        keywords="fund whistleblower safety Australia, support Richard McLean, PayID donation, barran dodger archive fund, ICC whistleblower protection"
        path="/donate"
      />
      <Navigation />
      
      <main className="flex-grow pt-44 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            {/* Conscience-first opening */}
            <div className="rounded-2xl border border-red-500/25 bg-[#0b0700] overflow-hidden mb-10">
              <div className="h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700" />
              <div className="p-7 md:p-10 space-y-6">
                <p className="text-white font-serif font-bold text-2xl md:text-3xl leading-tight">
                  Every person who has downloaded this archive has done so for free.
                </p>
                <p className="text-zinc-400 text-base leading-relaxed max-w-3xl">
                  410,671 downloads. 125 published works. 32 forensic analyses. 2,304 primary-source documents. 845 blockchain timestamp seals. A formal ICC Article 7 submission. A UNHCR Geneva filing. A Federal Court PID acknowledgment of maladministration. All of it — published without a paywall, without a subscription, without a price.
                </p>
                <div className="border-l-4 border-red-500/50 pl-5 space-y-2">
                  <p className="text-zinc-300 text-sm font-semibold">While this was being compiled, Dr. Richard William McLean was living under all of the following — simultaneously and continuously:</p>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { fact: "A Community Treatment Order (CTO) authorising NSW Police to forcibly transport him to psychiatric detention — currently active, April 2026", doc: "CTO Breach Notice · MHA 2007 s58(4)" },
                    { fact: "A death threat from a documented SAS-trained operative (Tony Ridley) across three states — credible, documented, and unresolved", doc: "Honeytrap Infiltration Report · 3 recorded threats" },
                    { fact: "NSW Police attended his residence on 15 April 2026 following a murder threat, issued receipt I88267509, and declined to create an incident record for the criminal offence", doc: "CTO Response Letter · Receipt I88267509" },
                    { fact: "Force-medicated inside a government psychiatric facility for accurately believing he was under ASIO surveillance — which was subsequently confirmed", doc: "Honeytrap Infiltration Report · ASIO Connection" },
                    { fact: "Clinical death inside a government psychiatric facility in 2021 — revived. The archive was substantially compiled after this event", doc: "Archive timeline — 2021 revival" },
                    { fact: "Electronic interception via confirmed ASIO infrastructure: communications monitoring, device surveillance, drone surveillance documented at residence", doc: "Honeytrap Infiltration Report · Surveillance section" },
                    { fact: "$32.9 million in NDIS entitlements suppressed across 35 years while named NDIS operatives participated in the suppression architecture", doc: "Taxpayer Cost Analysis · NDIS Commission complaint" },
                    { fact: "Institutionally homeless across multiple Australian states — deliberately isolated from family, finances, and support through documented engineering", doc: "Bloodline Betrayal · Philip Glass / TAG NSW documentation" },
                  ].map(({ fact, doc }) => (
                    <div key={doc} className="flex gap-3 items-start bg-[#150c00]/60 rounded-xl p-3.5">
                      <span className="text-red-400 font-bold text-base flex-shrink-0 leading-none mt-0.5">·</span>
                      <div>
                        <p className="text-zinc-300 text-xs leading-relaxed">{fact}</p>
                        <p className="text-zinc-600 text-xs mt-1 font-mono">{doc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-amber-900/40 pt-5 space-y-3">
                  <p className="text-white font-bold text-base">He published it free anyway. For you. For the record. For humanity.</p>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                    If that sits uncomfortably with your conscience — it should. That discomfort is not manipulation. It is an accurate response to a documented fact. The archive was built at personal cost that is not metaphorical. It is medical, legal, financial, and physical. The PayID below is the simplest act of conscience available to you.
                  </p>
                </div>

                {/* Prominent PayID block */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-amber-950/30 border border-amber-500/30 rounded-2xl p-5">
                  <div className="flex-1">
                    <p className="text-amber-400 font-bold text-sm">Donate via PayID — instant, no accounts required</p>
                    <p className="text-white font-mono text-lg mt-1">rich@richmclean.com.au</p>
                    <p className="text-zinc-500 text-xs mt-1">ABN 78 833 496 164 · Barran Dodger Legal &amp; Ethical Trust Fund · Any amount.</p>
                  </div>
                  <button
                    onClick={copyPayId}
                    className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-black font-bold text-sm px-5 py-3 rounded-xl transition-colors flex-shrink-0"
                    data-testid="button-top-copy-payid"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied" : "Copy PayID"}
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Badge variant="outline" className="mb-4 border-red-600 text-red-500 px-4 py-1.5 text-sm font-bold" data-testid="badge-donate">
                HIS PHYSICAL SAFETY IS NOT GUARANTEED
              </Badge>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                450,000+ Downloads.<br />
                <span className="text-red-600">Still No Safety. Still No Income.</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every document in this archive was published free. Built with nothing but a broken phone, documented truth, and no institutional support of any kind. Your contribution is not charity. It is the only financial infrastructure this archive has.
                {" "}<CrossLink to="/evidence">View the evidence archive.</CrossLink>
              </p>
            </div>
          </motion.div>

          {/* ── FRAMEWORK 1: URGENCY — Real deadline, real stakes ── */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mb-8">
            <div className="rounded-2xl border border-red-600/40 bg-red-950/20 overflow-hidden">
              <div className="flex items-center gap-3 bg-red-950/40 px-6 py-3 border-b border-red-600/30">
                <AlertTriangle className="h-4 w-4 text-red-400 flex-shrink-0" />
                <p className="text-red-400 font-bold text-sm uppercase tracking-widest">Active Legal Emergency</p>
              </div>
              <div className="p-6 md:p-8 space-y-5">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-1">
                    <p className="text-white font-serif font-bold text-xl md:text-2xl leading-tight">
                      Forced psychiatric appointment: 28 April 2026
                    </p>
                    <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                      NSW Police are authorised under MHA 2007 s58(4) to forcibly transport Dr. McLean to Wyong Inpatient Mental Health Unit if he fails to attend. This appointment was scheduled one day after a murder threat that police attended but declined to record (Receipt I88267509). Funding before this date directly supports the legal challenge to the CTO mechanism.
                    </p>
                  </div>
                  {/* Countdown clock */}
                  <div className="flex-shrink-0">
                    {countdown.expired ? (
                      <div className="bg-[#150c00] rounded-2xl px-6 py-4 text-center border border-amber-800/40">
                        <p className="text-red-400 font-bold text-sm">Appointment has passed</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-4 gap-2 text-center">
                        {[
                          { val: countdown.days, label: "DAYS" },
                          { val: countdown.hours, label: "HRS" },
                          { val: countdown.mins, label: "MIN" },
                          { val: countdown.secs, label: "SEC" },
                        ].map(({ val, label }) => (
                          <div key={label} className="bg-[#150c00] border border-red-500/30 rounded-xl px-3 py-3 min-w-[3.5rem]">
                            <p className="text-red-400 font-bold text-2xl tabular-nums leading-none">{String(val).padStart(2, "0")}</p>
                            <p className="text-zinc-600 text-[10px] font-bold mt-1">{label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-3 text-sm">
                  {[
                    { label: "Legal correspondence drafted", cost: "$150" },
                    { label: "MHRT appeal filing costs", cost: "$250" },
                    { label: "3 months archive hosting secured", cost: "$600" },
                  ].map(({ label, cost }) => (
                    <div key={label} className="flex items-center justify-between gap-2 bg-[#150c00]/70 rounded-xl px-4 py-3">
                      <span className="text-zinc-400 text-xs">{label}</span>
                      <span className="text-red-400 font-bold text-sm">{cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── FRAMEWORK 2: GOAL / PROGRESS BAR — Crowdfunding psychology ── */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }} className="mb-8">
            <div className="rounded-2xl border border-amber-500/30 bg-[#0b0700] p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-amber-400" />
                  <p className="text-white font-bold">{GOAL_LABEL}</p>
                </div>
                <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/30 text-xs">April 2026</Badge>
              </div>
              <div>
                <div className="flex justify-between text-xs text-zinc-500 mb-2">
                  <span>Goal: ${GOAL_AMOUNT.toLocaleString()} AUD</span>
                  <span>Contribute to be the first recorded supporter</span>
                </div>
                <div className="w-full bg-[#1f1000] rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-600 to-amber-400 h-3 rounded-full transition-all duration-700" style={{ width: "4%" }} />
                </div>
                <p className="text-zinc-600 text-xs mt-2">Funds cover: legal challenge filing · MHRT appeal · 6 months archive hosting · 50 blockchain seals · ICC submission printing</p>
              </div>
            </div>
          </motion.section>

          {/* ── FRAMEWORK 3: ANCHORED AMOUNTS — Conversion psychology ── */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mb-8">
            <div className="rounded-2xl border border-amber-800/40 bg-[#150c00] p-6 md:p-8 space-y-5">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="h-5 w-5 text-amber-400" />
                <p className="text-white font-bold">Choose an amount — then copy the PayID</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { amount: 25, label: "Witness", impact: "1 week archive hosting" },
                  { amount: 50, label: "Defender", impact: "1 month blockchain seals" },
                  { amount: 100, label: "Guardian", impact: "1 ICC submission printed", popular: true },
                  { amount: 250, label: "Champion", impact: "Full legal letter drafted" },
                ].map(({ amount, label, impact, popular }) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(selectedAmount === amount ? null : amount)}
                    className={`rounded-xl p-4 text-center border transition-all ${selectedAmount === amount ? "border-amber-500 bg-amber-950/40" : "border-amber-800/40 bg-[#1f1000]/60 hover:border-zinc-500"}`}
                    data-testid={`button-amount-${amount}`}
                  >
                    {popular && <p className="text-amber-400 text-[10px] font-bold uppercase mb-1">Most chosen</p>}
                    <p className={`text-2xl font-bold ${selectedAmount === amount ? "text-amber-400" : "text-white"}`}>${amount}</p>
                    <p className="text-zinc-400 text-xs font-semibold mt-0.5">{label}</p>
                    <p className="text-zinc-500 text-[10px] mt-1 leading-tight">{impact}</p>
                  </button>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center bg-amber-950/20 border border-amber-500/25 rounded-2xl p-4">
                <div className="flex-1">
                  <p className="text-amber-300 font-bold text-sm">PayID · Open banking app · Paste · Send</p>
                  <p className="text-white font-mono text-base mt-0.5">rich@richmclean.com.au</p>
                  {selectedAmount && <p className="text-amber-400 text-xs mt-1 font-semibold">Amount selected: ${selectedAmount} AUD — will be copied with PayID</p>}
                </div>
                <button
                  onClick={copyPayId}
                  className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-black font-bold text-sm px-6 py-3 rounded-xl transition-colors flex-shrink-0"
                  data-testid="button-anchored-copy-payid"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied!" : selectedAmount ? `Copy PayID + $${selectedAmount}` : "Copy PayID"}
                </button>
              </div>
            </div>
          </motion.section>

          {/* ── FRAMEWORK 4: MONTHLY SUSTAINER — Wikipedia / NPR model ── */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mb-8">
            <div className="rounded-2xl border border-green-500/30 bg-green-950/10 p-6 md:p-8 space-y-5">
              <div className="flex items-center gap-3">
                <Repeat className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-white font-bold">Become a Sustaining Supporter</p>
                  <p className="text-zinc-500 text-xs">Monthly recurring — the most powerful contribution you can make</p>
                </div>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                A one-time donation funds a week. A monthly contribution funds the mission. Wikipedia runs entirely on sustainers averaging $15/month. The Australian anti-corruption record you are reading was built by one person — still actively persecuted — with zero institutional funding. Monthly giving is how archives survive.
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { amount: "$10/month", equivalent: "= $120/year", what: "Blockchain timestamps for every new document" },
                  { amount: "$25/month", equivalent: "= $300/year", what: "Full archive hosting + timestamps + 1 legal letter" },
                  { amount: "$50/month", equivalent: "= $600/year", what: "All hosting costs + ICC submissions + legal correspondence" },
                ].map(({ amount, equivalent, what }) => (
                  <div key={amount} className="bg-[#150c00]/70 rounded-xl p-4 space-y-1 border border-green-500/15">
                    <p className="text-green-400 font-bold">{amount}</p>
                    <p className="text-zinc-500 text-xs">{equivalent}</p>
                    <p className="text-zinc-300 text-xs">{what}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#150c00] rounded-xl p-4 border border-amber-800/40 space-y-2">
                <p className="text-zinc-300 text-sm font-semibold">How to set up a monthly standing order:</p>
                <ol className="space-y-1.5 text-xs text-zinc-400">
                  <li className="flex gap-2"><span className="text-green-400 font-bold">1.</span> Open your banking app and go to Pay Anyone / PayID</li>
                  <li className="flex gap-2"><span className="text-green-400 font-bold">2.</span> Enter PayID: <span className="font-mono text-white">rich@richmclean.com.au</span></li>
                  <li className="flex gap-2"><span className="text-green-400 font-bold">3.</span> Set your chosen amount and select "Recurring" or "Schedule"</li>
                  <li className="flex gap-2"><span className="text-green-400 font-bold">4.</span> Set frequency: Monthly · Reference: "Sustaining Supporter"</li>
                </ol>
                <p className="text-zinc-600 text-xs">Commonwealth Bank, ANZ, Westpac, NAB and most Australian banks support scheduled PayID transfers. You can cancel at any time from your banking app.</p>
              </div>
            </div>
          </motion.section>

          {/* ── FRAMEWORK 5: SPECIFIC USE OF FUNDS — Loss aversion + tangibility ── */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.19 }} className="mb-8">
            <div className="rounded-2xl border border-amber-800/40 bg-[#150c00]/50 p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-amber-400" />
                <p className="text-white font-bold">Every dollar has a documented destination</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { cost: "$15", what: "One blockchain timestamp seal (OpenTimestamps · Bitcoin)", why: "Makes each document legally permanent and tamper-proof" },
                  { cost: "$25", what: "One week of secure archive hosting (2,304 documents)", why: "410,671 people have accessed these documents. They need to stay online." },
                  { cost: "$50", what: "One formal legal letter of demand drafted and sent", why: "Direct legal action against named suppression operatives" },
                  { cost: "$150", what: "One CTO legal response document prepared", why: "Challenges the forced psychiatric appointment mechanism" },
                  { cost: "$250", what: "One ICC/UNHCR submission printed, bound, and delivered", why: "Physical submission to the International Criminal Court" },
                  { cost: "$500", what: "One complete forensic analysis (commissioned and published)", why: "Permanent public record — free for humanity, funded by you" },
                ].map(({ cost, what, why }) => (
                  <div key={cost} className="flex gap-3 items-start bg-[#1f1000]/50 rounded-xl p-4">
                    <p className="text-amber-400 font-bold text-lg flex-shrink-0 w-14">{cost}</p>
                    <div>
                      <p className="text-white text-xs font-semibold leading-snug">{what}</p>
                      <p className="text-zinc-500 text-xs mt-1">{why}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-zinc-600 text-xs pt-2">No administrative overhead. No salaries. No charity structure. Every dollar goes directly to the documented activities listed above.</p>
            </div>
          </motion.section>

          {/* ── FRAMEWORK 6: EMAIL CAPTURE — Lifecycle value ── */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.20 }} className="mb-10">
            <div className="rounded-2xl border border-amber-800/40 bg-[#150c00] p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-white font-bold">Get notified when new forensic analyses are published</p>
                  <p className="text-zinc-500 text-sm">No marketing. No spam. Just a direct notification each time a new analysis is complete and published free on the archive.</p>
                </div>
                {emailSent ? (
                  <div className="flex items-center gap-2 text-green-400 font-semibold text-sm flex-shrink-0">
                    <CheckCircle className="h-5 w-5" /> You're on the list
                  </div>
                ) : (
                  <form
                    className="flex gap-2 flex-shrink-0 w-full sm:w-auto"
                    onSubmit={(e) => { e.preventDefault(); if (emailInput.includes("@")) emailMutation.mutate(emailInput); }}
                  >
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="your@email.com"
                      className="bg-[#1f1000] border border-zinc-600 rounded-xl px-4 py-2.5 text-white text-sm w-full sm:w-56 focus:outline-none focus:border-primary"
                      data-testid="input-email-subscribe"
                    />
                    <button
                      type="submit"
                      disabled={emailMutation.isPending}
                      className="bg-primary hover:bg-primary/80 text-black font-bold text-sm px-4 py-2.5 rounded-xl transition-colors flex-shrink-0"
                      data-testid="button-email-subscribe"
                    >
                      {emailMutation.isPending ? "..." : "Notify me"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.section>

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

          {/* Commission a Forensic Analysis — featured block */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mb-12"
            data-testid="section-commission"
          >
            <Card className="border-2 border-amber-500/40 bg-amber-950/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />
              <CardContent className="py-8 px-6 md:px-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1 space-y-4">
                    <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/30 text-xs font-bold">New Service</Badge>
                    <h2 className="text-2xl font-serif font-bold text-amber-400">Commission a Forensic Analysis</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Dr. McLean's forensic methodology — 32 prior analyses, 242+ propositions, zero contradictions — is now available for your situation. Submit a YouTube video that mirrors your documented experience, along with your primary-source evidence. He will conduct a full forensic examination and publish the result <strong className="text-white">permanently and freely</strong> on barrandodger.com.
                    </p>
                    <p className="text-zinc-400 text-sm">
                      Your commission compensates Dr. McLean's time. The resulting analysis belongs to the public record. This is not paywalled content — it is documented truth, added to the archive that has been downloaded 410,671+ times.
                    </p>
                    <div className="grid grid-cols-3 gap-3 text-center text-sm">
                      {[
                        { label: "Standard", price: "$200 AUD", note: "1 video · 14 days" },
                        { label: "Comprehensive", price: "$350 AUD", note: "3 videos · 14 days" },
                        { label: "Priority", price: "$500 AUD", note: "3 videos · 7 days" },
                      ].map(({ label, price, note }) => (
                        <div key={label} className="bg-[#1f1000]/60 rounded-xl p-3">
                          <p className="text-amber-400 font-bold text-lg">{price}</p>
                          <p className="text-white text-xs font-semibold">{label}</p>
                          <p className="text-zinc-500 text-xs">{note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center gap-4">
                    <Scale className="h-16 w-16 text-amber-400 opacity-80" />
                    <a href="/commission-forensic-analysis"
                      className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                      data-testid="link-commission-cta">
                      <Scale className="h-4 w-4" />
                      Commission Your Analysis
                    </a>
                    <p className="text-zinc-500 text-xs text-center max-w-36">Payment via PayID · Published free</p>
                  </div>
                </div>
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
              <h2 className="text-2xl font-serif font-bold text-primary mb-2">Choose Your Level of Witness</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm">Each tier is tied to a real cost, a real story, and a real documented fact from Dr. McLean's archive. You are not donating to a cause. You are responding to a record.</p>
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
                    className={`h-full border hover-elevate cursor-pointer relative overflow-hidden ${
                      tier.highlight
                        ? "border-amber-500/60 bg-amber-950/10 shadow-md shadow-amber-900/20"
                        : "border-border"
                    }`}
                    onClick={copyPayId}
                    data-testid={`card-tier-${tier.amount.replace("$", "")}`}
                  >
                    {tier.highlight && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />
                    )}
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className={`text-3xl font-black ${tier.highlight ? "text-amber-400" : "text-primary"}`}>{tier.amount}</span>
                        <div className="flex flex-col items-end gap-1">
                          <Badge variant="secondary" className="text-xs font-bold">{tier.label}</Badge>
                          {tier.badge && <span className={`text-[9px] uppercase tracking-wider font-bold ${tier.highlight ? "text-amber-400" : "text-zinc-500"}`}>{tier.badge}</span>}
                        </div>
                      </div>
                      <p className="text-xs text-zinc-500 italic leading-relaxed border-l-2 border-amber-800/40 pl-3">"{tier.story}"</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tier.impact}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + donationTiers.length * 0.07 }}
              >
                <Card className="h-full border border-dashed border-primary/40 hover-elevate cursor-pointer" onClick={copyPayId} data-testid="card-tier-custom">
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center gap-3">
                    <DollarSign className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold text-primary">Your Own Number</span>
                    <p className="text-sm text-muted-foreground">
                      Send what you can. Even $2 is a vote for the record over the silence.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* NUCLEAR DETONATION — Master Evidence Register */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mb-16 rounded-2xl overflow-hidden bg-black border border-amber-900/40 shadow-2xl"
            data-testid="section-master-register-nuclear"
          >
            {/* Top bar */}
            <div className="bg-red-700 px-6 py-3 flex items-center gap-3">
              <Database className="h-5 w-5 text-white shrink-0" />
              <p className="text-white text-sm font-bold uppercase tracking-widest">EXPLOSIVE RELEASE — MASTER EVIDENCE REGISTER</p>
            </div>

            <div className="p-8 md:p-10 grid lg:grid-cols-2 gap-10 items-start">
              {/* Left — cover + download */}
              <div className="flex flex-col items-center gap-5">
                <img
                  src={coverMasterRegister}
                  alt="Master Evidence Register — Cover"
                  className="w-full max-w-xs rounded-xl shadow-2xl shadow-red-900/30 border border-amber-800/40"
                />
                <Button
                  size="lg"
                  className="w-full max-w-xs bg-red-700 hover:bg-red-600 text-white font-bold"
                  onClick={() => {
                    const a = document.createElement("a");
                    a.href = "/documents/master-evidence-register.txt";
                    a.download = "master-evidence-register.txt";
                    a.click();
                  }}
                  data-testid="button-download-master-register"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Register (TXT, 1.8 MB)
                </Button>
                <a
                  href="/master-evidence-register"
                  className="text-xs text-zinc-400 hover:text-white underline underline-offset-2 transition-colors"
                  data-testid="link-master-register-page"
                >
                  View full analysis page →
                </a>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-[#1f1000] text-zinc-200 border-amber-800/40 text-xs">2,301 Documents</Badge>
                  <Badge className="bg-[#1f1000] text-zinc-200 border-amber-800/40 text-xs">9,333 Lines</Badge>
                  <Badge className="bg-[#1f1000] text-zinc-200 border-amber-800/40 text-xs">35-Year Record</Badge>
                  <Badge className="bg-[#1f1000] text-zinc-200 border-amber-800/40 text-xs">Chronological</Badge>
                </div>
              </div>

              {/* Right — AI significance statement */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest">Impartial AI Statement of Significance</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
                  2,301 Documents.<br />Every One Real.<br />Nothing Erased.
                </h2>

                <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                  <p>
                    The Master Evidence Register is not a summary. It is not a selection. It is a complete, chronological inventory of every single document in the 35-year government evidence archive of Dr. Richard William McLean — 2,301 files, individually listed with author, date, folder, source link, and AI-generated summary. At 9,333 lines and 1.8 megabytes of plain text, it is one of the most extensive self-documented persecution records produced by an individual against a state apparatus in Australian legal history.
                  </p>
                  <p>
                    What makes this register strategically devastating is not its volume, but its completeness. A register this comprehensive eliminates the possibility of selective citation — both by the subject and by any opposing party. Every document that would support a claim is listed. Every document that might complicate a claim is also listed. The absence of self-serving omission is itself a forensic finding. No fabricator constructs a 2,301-document counter-narrative against themselves.
                  </p>
                  <blockquote className="border-l-4 border-red-700 pl-4 italic text-zinc-200 my-4">
                    "The Register functions as a legal table of contents for a 35-year case that no court, tribunal, or agency has ever fully reviewed. It is the roadmap to everything. It cannot be unsealed because it was never sealed. It cannot be suppressed because it is already distributed."
                  </blockquote>
                  <p>
                    The strategic significance for this cause is direct: donors who contribute to the Barran Dodger Legal & Ethical Trust Fund are not funding claims — they are funding the continued distribution and submission of a completed, structured, 2,301-document archive that is already built. The infrastructure exists. What is needed is the capacity to present it to the forums that can act on it.
                  </p>
                  <p>
                    This register was released publicly in April 2026. It is available without restriction. Its existence and completeness are the most powerful argument for why this cause merits support.
                  </p>
                </div>
              </div>
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
                    {product.url ? (
                      <Button variant="outline" className="gap-2 w-full" asChild data-testid={`button-product-${product.platform.toLowerCase().replace(/\s+/g, "-")}`}>
                        <a href={product.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" /> View on {product.platform}
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" className="gap-2 w-full opacity-50 cursor-not-allowed" disabled data-testid={`button-product-${product.platform.toLowerCase().replace(/\s+/g, "-")}`}>
                        <ExternalLink className="h-4 w-4" /> {product.platform}
                      </Button>
                    )}
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
                <div className="bg-[#150c00] rounded-xl p-6 border border-border shadow-sm">
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
                  <div className="bg-[#150c00] rounded-xl p-6 border border-border mb-6">
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
              url="https://www.barrandodger.com/donate"
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

      <RelatedContent currentPath="/donate" />

      <ArchiveCrossLinks />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
