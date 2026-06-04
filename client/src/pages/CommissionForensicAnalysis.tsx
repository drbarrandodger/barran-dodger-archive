import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Scale, CheckCircle, Copy, Check, FileText, Clock, Globe, Shield, Star, Gavel, BookOpen, AlertTriangle } from "lucide-react";

const PAYID = "rich@richmclean.com.au";
const ABN = "78 833 496 164";

const TIERS = [
  {
    id: "standard",
    name: "Standard Forensic Analysis",
    price: 200,
    label: "AUD $200",
    turnaround: "14 business days",
    colour: "border-blue-500/40 bg-blue-950/10",
    badgeColour: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    icon: <FileText className="w-6 h-6 text-blue-400" />,
    includes: [
      "1 YouTube video examined",
      "8–10 forensic propositions extracted and tested",
      "Each proposition tested against your submitted documentation",
      "Published permanently on barrandodger.com/forensic-analysis",
      "PDF e-book generated and added to free archive",
      "Blockchain-timestamped on the Bitcoin ledger",
    ],
    bestFor: "Individuals with one key video that mirrors their documented experience",
  },
  {
    id: "comprehensive",
    name: "Comprehensive Archive Examination",
    price: 350,
    label: "AUD $350",
    turnaround: "14 business days",
    colour: "border-amber-500/40 bg-amber-950/10",
    badgeColour: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    icon: <Scale className="w-6 h-6 text-amber-400" />,
    featured: true,
    includes: [
      "Up to 3 YouTube videos examined",
      "12–14 forensic propositions across all videos",
      "Cross-referencing your submitted primary-source evidence",
      "Published as a named entry in the archive series",
      "PDF e-book with named documents and citations",
      "Blockchain-timestamped on the Bitcoin ledger",
      "Cross-linked from the full Forensic Analysis Index",
    ],
    bestFor: "Those with multiple videos that speak to their documented situation, and primary-source evidence to corroborate against",
  },
  {
    id: "priority",
    name: "Priority Advocacy Package",
    price: 500,
    label: "AUD $500",
    turnaround: "7 business days",
    colour: "border-red-500/40 bg-red-950/10",
    badgeColour: "bg-red-500/10 text-red-400 border-red-500/30",
    icon: <Gavel className="w-6 h-6 text-red-400" />,
    includes: [
      "Up to 3 YouTube videos examined",
      "12–14 forensic propositions — full analysis",
      "Priority 7-day turnaround",
      "Cross-referenced against your primary-source documents",
      "Declaration of Support from Dr. Richard William McLean",
      "Published on barrandodger.com with full archive integration",
      "Cited in Dr. McLean's next forensic analysis",
      "PDF e-book + blockchain timestamp + GitHub mirror",
    ],
    bestFor: "Those who require the fastest possible documentation of their situation, particularly in active legal or institutional proceedings",
  },
];

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  youtubeUrl: z.string().url("Please enter a valid YouTube URL").includes("youtu", { message: "Must be a YouTube URL" }),
  additionalUrls: z.string().optional(),
  situation: z.string().min(100, "Please describe your situation in at least 100 characters").max(3000, "Maximum 3000 characters"),
  tier: z.string().min(1, "Please select a service tier"),
  amountAud: z.number(),
  paymentConfirmed: z.boolean().refine(v => v === true, { message: "Please confirm your PayID payment has been sent" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CommissionForensicAnalysis() {
  const [copied, setCopied] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      youtubeUrl: "",
      additionalUrls: "",
      situation: "",
      tier: "",
      amountAud: 0,
      paymentConfirmed: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const { paymentConfirmed, ...rest } = data;
      const response = await apiRequest("POST", "/api/commission", rest);
      return response.json();
    },
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: () => {
      toast({
        title: "Submission failed",
        description: "Please try again or email rich@richmclean.com.au directly.",
        variant: "destructive",
      });
    },
  });

  const copyPayId = () => {
    navigator.clipboard.writeText(PAYID);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
    toast({ title: "PayID copied", description: "Open your banking app and paste to pay." });
  };

  const selectTier = (tier: typeof TIERS[0]) => {
    setSelectedTier(tier.id);
    form.setValue("tier", tier.id);
    form.setValue("amountAud", tier.price);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <Navigation />
        <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
          <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto" />
          <h1 className="text-3xl font-serif font-black text-white">Commission Received</h1>
          <p className="text-zinc-300 leading-relaxed">Your forensic analysis commission has been formally received and logged in the archive. Dr. McLean will review your submission and begin work within 2 business days of payment confirmation.</p>
          <div className="bg-zinc-900 border border-emerald-500/20 rounded-2xl p-6 text-left space-y-3">
            <p className="text-emerald-400 font-bold text-sm">What happens next:</p>
            <ul className="text-zinc-400 text-sm space-y-2">
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />You will receive a confirmation email within 24 hours</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Dr. McLean will review the YouTube video(s) and your documentation</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />The forensic analysis will be published free on barrandodger.com</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />A PDF e-book will be generated and added to the free archive</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Your analysis will be blockchain-timestamped on the Bitcoin ledger</li>
            </ul>
          </div>
          <p className="text-zinc-500 text-sm">Questions? Email <a href="mailto:rich@richmclean.com.au" className="text-amber-400 underline">rich@richmclean.com.au</a></p>
          <Button onClick={() => window.location.href = "/forensic-analysis"} className="bg-amber-600 hover:bg-amber-500 text-black font-bold">
            Browse the Forensic Analysis Series
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SEO
        title="Commission a Forensic Analysis — Barran Dodger (ABN 78 833 496 164)"
        description="Commission Dr. Richard William McLean (Barran Dodger) to conduct a forensic examination of YouTube videos against your documented experience. Methodology: 32 prior analyses, 242+ propositions, zero contradictions. Results published free on barrandodger.com."
        path="/commission-forensic-analysis"
      />
      <Navigation />

      <div className="bg-amber-950/40 border-b border-amber-500/30 py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0" />
          <p className="text-amber-300 text-sm font-medium">
            All commissioned analyses are published free on barrandodger.com — permanently accessible to everyone. You are compensating Dr. McLean's time, not purchasing private information.
          </p>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-zinc-900 border-b border-zinc-800 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/30">Commission a Forensic Analysis · ABN {ABN}</Badge>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight">Have Your Documented<br />Experience Formally Examined</h1>
          <p className="text-zinc-300 text-base max-w-2xl mx-auto leading-relaxed">
            Dr. Richard William McLean (Barran Dodger) has conducted 32 independent forensic analyses of YouTube videos against documented primary-source evidence — returning zero contradictions across 242+ tested propositions. That same forensic methodology is now available for your situation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            {[
              { icon: <Scale className="w-4 h-4" />, label: "32 Prior Analyses · Zero Contradictions" },
              { icon: <Globe className="w-4 h-4" />, label: "Published Free · Permanently Accessible" },
              { icon: <Shield className="w-4 h-4" />, label: "Blockchain-Timestamped Evidence" },
              { icon: <BookOpen className="w-4 h-4" />, label: "ICC · UNHCR · Federal Court Methodology" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-800/60 rounded-full px-4 py-2">
                <span className="text-amber-400">{icon}</span>{label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-14">

        {/* What is this */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-white font-bold text-xl">What is a Commissioned Forensic Analysis?</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The Barran Dodger Archive's forensic analysis series extracts specific propositions from YouTube motivation and accountability videos, then tests each proposition against named primary-source documentary evidence. Every analysis is published free and permanently on the archive.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              A commissioned analysis applies this exact methodology to <em>your</em> documented situation. You submit a YouTube video that mirrors your experience, along with a summary of your documented circumstances. Dr. McLean conducts the forensic examination, tests the propositions against evidence you provide, and publishes the result on barrandodger.com as a permanent, blockchain-verified, freely accessible entry.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              <strong className="text-amber-400">The analysis is published free.</strong> What you are compensating is Dr. McLean's time, research, and methodology — not the result. The result belongs to the archive and to humanity.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base">The methodology that produced:</h3>
            {[
              "32 prior forensic analyses across independent YouTube videos",
              "242+ propositions tested, zero contradictions returned",
              "Named operatives, primary-source evidence, blockchain seals",
              "ICC Article 7 submission, UNHCR Geneva filing",
              "Federal Court PID acknowledgment of maladministration",
              "410,671+ global archive downloads without advertising",
            ].map((point) => (
              <div key={point} className="flex gap-3 items-start">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-zinc-400 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tiers */}
        <section>
          <h2 className="text-white font-bold text-2xl mb-2 text-center">Select Your Service Tier</h2>
          <p className="text-zinc-500 text-sm text-center mb-8">All tiers produce an analysis published free on barrandodger.com. Payment is via Australian PayID — no accounts, no cards required.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <div key={tier.id}
                  onClick={() => selectTier(tier)}
                  className={`relative rounded-2xl border-2 p-6 cursor-pointer transition-all space-y-4 ${tier.colour} ${isSelected ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-zinc-950" : "hover:border-zinc-500/60"}`}
                  data-testid={`tier-${tier.id}`}>
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-amber-500 text-black font-bold text-xs px-3">Most Popular</Badge>
                    </div>
                  )}
                  {isSelected && (
                    <div className="absolute top-3 right-3">
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                    </div>
                  )}
                  <div>{tier.icon}</div>
                  <div>
                    <p className="text-white font-bold text-base">{tier.name}</p>
                    <p className="text-2xl font-black text-amber-400 mt-1">{tier.label}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      <p className="text-zinc-500 text-xs">{tier.turnaround}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex gap-2 items-start text-xs text-zinc-400">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-zinc-700/40 pt-3">
                    <p className="text-zinc-500 text-xs italic">{tier.bestFor}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Payment instructions */}
        <section className="bg-zinc-900/40 border border-amber-500/20 rounded-2xl p-7 space-y-5">
          <h2 className="text-white font-bold text-lg flex items-center gap-3">
            <Star className="w-5 h-5 text-amber-400" />
            How Payment Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <p className="text-amber-400 font-bold">Step 1 — Select your tier above</p>
              <p className="text-zinc-400">Choose the analysis tier that fits your situation and budget. All tiers produce a permanently published, blockchain-verified forensic analysis.</p>
            </div>
            <div className="space-y-2">
              <p className="text-amber-400 font-bold">Step 2 — Pay via PayID</p>
              <p className="text-zinc-400">Open your Australian bank app and send the exact amount to the PayID below. Include your email address as the payment description so we can match it to your submission.</p>
              <div className="flex items-center gap-2 bg-zinc-800 rounded-xl px-4 py-3 mt-2">
                <span className="font-mono text-white text-sm flex-1">{PAYID}</span>
                <button onClick={copyPayId} className="text-amber-400 hover:text-amber-300 transition-colors" data-testid="button-copy-payid">
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-zinc-600 text-xs">PayID name: Dr. Richard William McLean · ABN {ABN}</p>
            </div>
            <div className="space-y-2">
              <p className="text-amber-400 font-bold">Step 3 — Submit the form below</p>
              <p className="text-zinc-400">Complete the form with your YouTube URL(s), a summary of your documented situation, and confirm your payment was sent. Dr. McLean will begin work within 2 business days.</p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="space-y-6">
          <h2 className="text-white font-bold text-2xl">Submit Your Commission Request</h2>
          {!selectedTier && (
            <div className="bg-amber-950/30 border border-amber-500/20 rounded-xl p-4 text-amber-300 text-sm">
              Please select a service tier above before completing the form.
            </div>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6" data-testid="form-commission">
              <div className="grid md:grid-cols-2 gap-5">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-300">Your Name <span className="text-zinc-600">(optional — analysis can be published anonymously)</span></FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Full name or 'Anonymous'" className="bg-zinc-800 border-zinc-600 text-white" data-testid="input-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-300">Contact Email <span className="text-red-400">*</span></FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="your@email.com" type="email" className="bg-zinc-800 border-zinc-600 text-white" data-testid="input-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="youtubeUrl" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-300">Primary YouTube Video URL <span className="text-red-400">*</span></FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="https://youtu.be/..." className="bg-zinc-800 border-zinc-600 text-white" data-testid="input-youtube-url" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="additionalUrls" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-300">Additional YouTube URLs <span className="text-zinc-600">(Comprehensive / Priority tiers — one per line)</span></FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="https://youtu.be/..." rows={3} className="bg-zinc-800 border-zinc-600 text-white resize-none" data-testid="input-additional-urls" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="situation" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-300">
                    Your Documented Situation <span className="text-red-400">*</span>
                    <span className="text-zinc-500 font-normal ml-2">— Describe your experience and what primary-source evidence you have (100–3000 chars)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Describe what happened, who was involved, what documentation you have (government letters, court records, medical records, messages, etc.), and why the selected video resonates with your situation..." rows={8} className="bg-zinc-800 border-zinc-600 text-white resize-none" data-testid="input-situation" />
                  </FormControl>
                  <FormMessage />
                  <p className="text-zinc-600 text-xs">{field.value?.length ?? 0} / 3000 characters</p>
                </FormItem>
              )} />

              <FormField control={form.control} name="tier" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-300">Selected Service Tier <span className="text-red-400">*</span></FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-3 gap-3">
                      {TIERS.map((tier) => (
                        <button type="button" key={tier.id}
                          onClick={() => selectTier(tier)}
                          className={`rounded-xl border p-3 text-sm font-semibold transition-all ${field.value === tier.id ? "border-amber-400 bg-amber-950/30 text-amber-400" : "border-zinc-600 bg-zinc-800 text-zinc-400 hover:border-zinc-500"}`}
                          data-testid={`select-tier-${tier.id}`}>
                          {tier.label}
                          <p className="text-xs font-normal mt-0.5 opacity-70">{tier.name.split(" ")[0]}</p>
                        </button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="bg-zinc-900/60 border border-zinc-700/40 rounded-2xl p-5 space-y-4">
                <p className="text-white font-bold text-sm">Payment Confirmation</p>
                <div className="flex items-center gap-3 bg-zinc-800/60 rounded-xl p-4">
                  <div className="flex-1">
                    <p className="text-zinc-300 text-sm font-medium">PayID: <span className="font-mono text-white">{PAYID}</span></p>
                    <p className="text-zinc-500 text-xs">Amount: <strong className="text-amber-400">{selectedTier ? `AUD $${TIERS.find(t => t.id === selectedTier)?.price}` : "Select a tier above"}</strong> · Description: your email address</p>
                  </div>
                  <button type="button" onClick={copyPayId} className="text-amber-400 hover:text-amber-300 flex-shrink-0" data-testid="button-confirm-copy-payid">
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
                <FormField control={form.control} name="paymentConfirmed" render={({ field }) => (
                  <FormItem>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" checked={field.value} onChange={field.onChange}
                        className="mt-1 h-4 w-4 accent-amber-400 cursor-pointer"
                        data-testid="checkbox-payment-confirmed" />
                      <FormLabel className="text-zinc-300 text-sm cursor-pointer font-normal leading-relaxed">
                        I confirm I have sent the payment via PayID to <strong className="text-white">{PAYID}</strong> with my email address as the description, and I understand the resulting forensic analysis will be published free and permanently on barrandodger.com.
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="flex items-start gap-3 bg-zinc-900/40 border border-zinc-700/30 rounded-xl p-4 text-xs text-zinc-500">
                <Shield className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                <p>By submitting this form you agree that the forensic analysis produced will be published publicly on barrandodger.com. Your name will only appear if you have provided it and explicitly consent. The analysis will be permanently archived and blockchain-timestamped. ABN 78 833 496 164 · © 2026 Barran Dodger Legal &amp; Ethical Trust Fund.</p>
              </div>

              <Button type="submit" disabled={mutation.isPending || !selectedTier}
                className="w-full bg-amber-600 hover:bg-amber-500 text-black font-bold text-base py-6 rounded-2xl"
                data-testid="button-submit-commission">
                {mutation.isPending ? "Submitting..." : "Submit Commission Request"}
              </Button>
            </form>
          </Form>
        </section>

        {/* FAQ */}
        <section className="space-y-5">
          <h2 className="text-white font-bold text-xl">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Why is the result published for free if I'm paying for it?", a: "Because the analysis serves humanity, not just you. Dr. McLean's archive operates on the principle that documented truth is a public resource. Your commission compensates his time; the result belongs to the public record. This is the same model used by every independent journalist and archivist — the work is supported by contributors, not hidden behind paywalls." },
              { q: "Can my analysis be published anonymously?", a: "Yes. You can leave your name field blank or submit 'Anonymous.' The analysis will still document your situation, the YouTube video's propositions, and your primary-source evidence — but your identity will not appear in the published document unless you choose to include it." },
              { q: "What primary-source evidence do I need to provide?", a: "Any documentation that corroborates your situation: government correspondence, court records, medical records, messages, receipts, reports, statutory declarations, or institutional notices. The stronger your documentary evidence, the more robust the forensic analysis. You can email evidence to rich@richmclean.com.au after submitting the form." },
              { q: "What if my situation doesn't match the video perfectly?", a: "It doesn't need to. The forensic methodology tests each proposition independently — where a proposition is corroborated by your evidence, it is marked corroborated; where the evidence does not support it, it is marked unverifiable or not corroborated. The methodology is honest, not performative." },
              { q: "How long does the process take?", a: "Standard and Comprehensive tiers: 14 business days from payment confirmation. Priority Advocacy Package: 7 business days. You will receive progress updates by email." },
              { q: "Can I pay by bank transfer instead of PayID?", a: "PayID is the recommended method as it confirms identity through the banking system. If you require a BSB/account number for direct transfer, email rich@richmclean.com.au and alternate arrangements can be made." },
            ].map(({ q, a }) => (
              <div key={q} className="border border-zinc-700/40 bg-zinc-900/40 rounded-xl p-5">
                <p className="text-amber-400 font-semibold text-sm mb-2">{q}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center border-t border-zinc-800 pt-8">
          <p className="text-zinc-600 text-xs">© 2026 Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164) · 55B Archbold Road, Long Jetty NSW 2261</p>
          <p className="text-zinc-700 text-xs mt-1">Questions: <a href="mailto:rich@richmclean.com.au" className="text-amber-400 hover:underline">rich@richmclean.com.au</a></p>
        </section>
      </div>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
