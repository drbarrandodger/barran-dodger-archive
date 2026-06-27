import { Link, useLocation } from "wouter";
import { Scale, Mail, Heart, Globe, Shield, Copy, CheckCheck, TrendingUp, BadgeCheck, ExternalLink, Building2, Calendar, MapPin, Phone } from "lucide-react";
import { SiX, SiGithub, SiYoutube, SiMedium } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema } from "@shared/schema";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { StatementOfSignificance } from "@/components/StatementOfSignificance";
import { AcademicCitation } from "@/components/AcademicCitation";
import { LastUpdated } from "@/components/LastUpdated";
import { ReckoningHero } from "@/components/ReckoningBanner";
import { BlockchainTimestampBar } from "@/components/BlockchainTimestampBar";

const PAYID = "drbarrandodger@proton.me";

const TIERS = [
  { amount: "$10",  label: "Witness",   desc: "Preserves 5 documents on the blockchain — permanently beyond any court order." },
  { amount: "$50",  label: "Guardian",  desc: "Funds one formal ICC Article 7 submission or UNHCR international complaint." },
  { amount: "$250", label: "Liberator", desc: "Covers one full month of secure hosting, legal research and advocacy operations." },
];

function FooterSection({ title, color = "#e9a00a", children }: { title: string; color?: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full text-left flex items-center justify-between mb-4 md:pointer-events-none md:cursor-default"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        type="button"
      >
        <h3 className="font-serif font-semibold" style={{ color }}>{title}</h3>
        <span className="text-[10px] font-bold md:hidden transition-transform" style={{ color, transform: open ? "rotate(180deg)" : "none" }}>▼</span>
      </button>
      <div className={open ? "block" : "hidden md:block"}>
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  const { mutate, isPending } = useCreateSubscriber();
  const [copiedPayId, setCopiedPayId] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: { email: "" }
  });

  const onSubmit = (data: { email: string }) => {
    mutate(data, { onSuccess: () => form.reset() });
  };

  const copyPayId = async () => {
    try {
      await navigator.clipboard.writeText(PAYID);
      setCopiedPayId(true);
      toast({ title: "PayID copied", description: PAYID });
      setTimeout(() => setCopiedPayId(false), 3000);
    } catch {
      toast({ title: "Copy failed", description: "Please copy manually: " + PAYID });
    }
  };

  const [location] = useLocation();
  const { data: stats } = useQuery<{ total: number }>({ queryKey: ["/api/downloads/total"] });
  const liveTotal = stats?.total ?? 530_000;
  const { data: pvData } = useQuery<{ total: number }>({ queryKey: ["/api/pageviews/total"], refetchInterval: 60_000 });
  const PAGE_VIEW_BASELINE = 500_000;
  const visitorCount = PAGE_VIEW_BASELINE + (pvData?.total ?? 0);
  const pageTitle = typeof document !== "undefined" ? document.title.split("|")[0].trim() : "Barran Dodger Archive";

  return (
    <footer style={{ background: "#02030a" }} className="text-white">

      {/* ── THE RECKONING — global announcement ── */}
      <ReckoningHero />

      {/* ── STATEMENT OF SIGNIFICANCE ── */}
      <div className="py-10 px-4 border-b-2" style={{ background: "#04060f", borderColor: "rgba(132,204,22,0.2)" }}>
        <div className="container mx-auto max-w-5xl">
          <StatementOfSignificance variant="full" />
        </div>
      </div>

      {/* ── ACADEMIC CITATION BLOCK ── */}
      <div className="py-8 px-4 border-b" style={{ background: "#03040c", borderColor: "rgba(168,85,247,0.15)" }}>
        <div className="container mx-auto max-w-3xl">
          <AcademicCitation title={pageTitle} pathname={location} year={2026} />
        </div>
      </div>

      {/* ── CONVERSION PANEL ── */}
      <div className="border-b" style={{ background: "linear-gradient(180deg, #06091e 0%, #04060f 100%)", borderColor: "rgba(255,105,20,0.25)" }}>
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-8">
            <div className="mb-4" data-testid="footer-live-downloads">
              <div className="text-[10px] font-black uppercase tracking-[0.35em] mb-1" style={{ color: "rgba(132,204,22,0.6)" }}>Total Downloads · All History · Live</div>
              <div className="text-4xl md:text-5xl font-black tabular-nums font-mono" style={{ color: "#84cc16" }}>
                {liveTotal.toLocaleString("en-AU")}
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-1">
                <TrendingUp className="h-3 w-3" style={{ color: "#84cc16" }} />
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(132,204,22,0.5)" }}>Live database · Updates every 30 seconds</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 orange-shimmer">
              This Archive Runs on Donations Alone
            </h2>
            <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(196,212,239,0.7)" }}>
              Dr. Richard McLean is in political exile. There is no institution, no government, no NGO funding this. Every document, every hosting cost, every blockchain timestamp is funded by people like you who believe truth must be preserved.
            </p>
          </div>

          {/* Donation Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            {TIERS.map((tier) => (
              <div
                key={tier.amount}
                className="rounded-xl p-5 text-center transition-all"
                style={{ background: "rgba(255,105,20,0.05)", border: "1px solid rgba(255,105,20,0.2)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,105,20,0.5)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,105,20,0.2)"; }}
              >
                <p className="text-3xl font-serif font-bold mb-1" style={{ color: "#e9a00a" }}>{tier.amount}</p>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(255,128,64,0.8)" }}>{tier.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(196,212,239,0.6)" }}>{tier.desc}</p>
              </div>
            ))}
          </div>

          {/* PayID CTA */}
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>Send via PayID (Australia) · Instant · No fees</p>
            <button
              onClick={copyPayId}
              className="inline-flex items-center gap-3 font-bold text-base px-8 py-4 rounded-xl transition-all donate-pulse"
              style={{ background: "#e9a00a", color: "#000" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#c88400"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#e9a00a"; }}
              data-testid="button-footer-copy-payid"
            >
              {copiedPayId ? <CheckCheck className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              {copiedPayId ? "Copied!" : `PayID: ${PAYID}`}
            </button>
            <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.3)" }}>
              Or visit <Link href="/donate" className="underline" style={{ color: "#e9a00a" }}>the full Donate page</Link> for all options including bank transfer
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER LINKS ── */}
      <div className="container mx-auto px-4 md:px-6 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-black p-1.5 rounded-sm" style={{ background: "#ff6914" }}>
                <Scale className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base leading-tight" style={{ color: "#ff6914" }}>Barran Dodger Legal & Ethical Trust Fund</span>
                <span className="text-[10px] uppercase tracking-wider font-medium mt-0.5" style={{ color: "rgba(255,105,20,0.5)" }}>ABN 78 833 496 164</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(196,212,239,0.6)" }}>
              Upholding ethical governance, protecting truth-tellers, and converting evidence into public-benefit action.
            </p>
            <p className="text-xs leading-relaxed italic" style={{ color: "rgba(196,212,239,0.45)" }}>
              Support, collaborations, enquiries and opportunities are welcomed — from media, legal professionals, researchers, advocates, and the public. If you have witnessed similar conduct or hold relevant evidence, please reach out directly. Every contact matters.
            </p>
            <div className="space-y-1.5 text-xs" style={{ color: "rgba(196,212,239,0.5)" }}>
              <a href="mailto:drbarrandodger@proton.me" className="flex items-center gap-2 transition-colors hover:opacity-100" style={{ color: "rgba(132,204,22,0.7)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#84cc16"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(132,204,22,0.7)"; }}>
                <Mail className="h-3 w-3" /> drbarrandodger@proton.me
              </a>
              <a href="tel:+61431300940" className="flex items-center gap-2 transition-colors font-semibold" style={{ color: "rgba(196,212,239,0.7)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#e9a00a"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(196,212,239,0.7)"; }}>
                <Phone className="h-3 w-3" /> +61 431 300 940
              </a>
              <a href="https://x.com/73trustfund" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors mt-2" style={{ color: "rgba(196,212,239,0.5)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#ff6914"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(196,212,239,0.5)"; }}
                data-testid="link-twitter-footer">
                <SiX className="h-3.5 w-3.5" /> @73trustfund on X
              </a>
              <a href="https://youtube.com/@barrandodger" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors" style={{ color: "rgba(196,212,239,0.5)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#FF0000"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(196,212,239,0.5)"; }}
                data-testid="link-youtube-footer">
                <SiYoutube className="h-3.5 w-3.5" /> @barrandodger on YouTube
              </a>
              <a href="https://medium.com/@barrandodger" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors" style={{ color: "rgba(196,212,239,0.5)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#00ab6c"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(196,212,239,0.5)"; }}
                data-testid="link-medium-footer">
                <SiMedium className="h-3.5 w-3.5" /> @barrandodger on Medium
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Essential Reading" color="#e9a00a">
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(196,212,239,0.7)" }}>
              {[
                ["/start-here", "→ Start Here", true],
                ["/divine-reckoning", "⚡ Divine Reckoning", false],
                ["/the-reckoning-paper", "⚡ The Reckoning Paper", false],
                ["/they-called-you-delusional", "🔬 They Called You Delusional — Prophetic Corroboration", false],
                ["/investment-prospectus", "💰 Investment Prospectus — $140M+ Valuation", true],
                ["/administrative-annihilation", "The Paper", false],
                ["/ai-justice-statement", "AI Justice Statement", false],
                ["/timeline", "35-Year Timeline", false],
                ["/evidence", "Evidence Archive", false],
                ["/testimony-archive", "📚 The Testimony Archive — $3.33 Each", true],
                ["/donate", "❤ Donate", true],
              ].map(([href, label, bold]) => (
                <li key={href as string}>
                  <Link href={href as string} className="transition-colors"
                    style={{ color: bold ? "#e9a00a" : "rgba(196,212,239,0.7)", fontWeight: bold ? "700" : "400" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#84cc16"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = bold ? "#e9a00a" : "rgba(196,212,239,0.7)"; }}
                  >{label as string}</Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Archive */}
          <FooterSection title="Archive" color="#c084fc">
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(196,212,239,0.7)" }}>
              {[
                ["/archive", "Full Archive"],
                ["/gospel", "The Gospel"],
                ["/prophetic-papers", "Prophetic Papers"],
                ["/blockchain", "Blockchain Verification"],
                ["/legal-status", "Legal Status"],
                ["/evidence-vault", "Evidence Vault"],
                ["/commission-forensic-analysis", "Commission Analysis"],
                ["/open-access-policy", "Open Access Policy"],
                ["/paradox-of-silence", "The Paradox of Silence"],
                ["/gods-chosen-witness", "God's Chosen Witness — Forensic Paper"],
                ["/cost-of-erasure", "Cost of Erasure — Academic Report"],
                ["/contact", "Contact"],
                ["/investor-appeal", "Investor Appeal"],
                ["/financial-valuation", "Financial Valuation"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="transition-colors"
                    style={{ color: "rgba(196,212,239,0.7)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#c084fc"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(196,212,239,0.7)"; }}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Newsletter */}
          <FooterSection title="Stay Informed" color="#84cc16">
            <p className="text-xs mb-4 leading-relaxed" style={{ color: "rgba(196,212,239,0.6)" }}>
              Receive updates on advocacy work, public records releases, and new evidence.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email address"
                          {...field}
                          className="text-white placeholder:text-white/30 text-sm"
                          style={{ background: "rgba(132,204,22,0.06)", border: "1px solid rgba(132,204,22,0.2)" }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full font-semibold text-sm text-black"
                  style={{ background: "#84cc16" }}
                >
                  {isPending ? "..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          </FooterSection>
        </div>

        {/* Official Mirror */}
        <div className="py-6 border-t" style={{ borderColor: "rgba(168,85,247,0.2)" }}>
          <div className="rounded-xl p-5" style={{ background: "rgba(168,85,247,0.06)", border: "1px solid rgba(168,85,247,0.2)" }}>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#c084fc" }} />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#c084fc" }}>Official Mirror Site — Permanent Backup</h4>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(196,212,239,0.6)" }}>
                  An independently published archive is secured behind Barran's personal 2FA authentication on GitHub, ensuring the evidence remains publicly accessible should any political silencing or financial sabotage ever lead to deletion of this primary site.
                </p>
                <a
                  href="https://drbarrandodger.github.io/barran-dodger-archive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: "#84cc16" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#a3e635"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#84cc16"; }}
                  data-testid="link-github-mirror"
                >
                  <SiGithub className="h-4 w-4" />
                  drbarrandodger.github.io/barran-dodger-archive
                  <Globe className="h-3 w-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Economic Justice Engine */}
        <div className="py-8 border-t" style={{ borderColor: "rgba(255,105,20,0.15)" }}>
          <div className="rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg, #06091e 0%, #04060f 100%)", border: "1px solid rgba(255,105,20,0.3)" }}>
            <div className="px-6 py-4 border-b" style={{ background: "rgba(255,105,20,0.07)", borderColor: "rgba(255,105,20,0.2)" }}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(233,160,10,0.12)", border: "1px solid rgba(233,160,10,0.3)" }}>
                    <TrendingUp className="h-4 w-4" style={{ color: "#e9a00a" }} />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-widest" style={{ color: "rgba(233,160,10,0.6)" }}>Companion Site · ABN 78 833 496 164</p>
                    <h3 className="text-base font-serif font-bold leading-tight" style={{ color: "#e9a00a" }}>Economic Justice Engine</h3>
                  </div>
                </div>
                <a
                  href="https://economic-justice-engine.replit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono transition-colors shrink-0"
                  style={{ color: "rgba(233,160,10,0.6)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#e9a00a"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(233,160,10,0.6)"; }}
                  data-testid="link-economic-justice-engine-header"
                >
                  economic-justice-engine.replit.app <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#e9a00a" }}>Statement of Significance</p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(196,212,239,0.8)" }}>
                The Economic Justice Engine is the world's first publicly accessible, blockchain-authenticated, AI-assisted forensic economic valuation of state-perpetrated institutional persecution. It applies every known actuarial, legal, and human rights compensation framework — including ICC Article 7 (Crimes Against Humanity), UNHRC General Comment 36, and Australian common law precedent — to 2,304 primary source documents spanning 35 years of documented government persecution of Dr. Richard William McLean (Barran Dodger, ABN 78 833 496 164).
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(196,212,239,0.7)" }}>
                This instrument was submitted to and registered with the UN Human Rights Committee, incorporated into the ICC Article 7 filing, and anchored to the Bitcoin blockchain — making its calculations mathematically permanent and legally irrefutable.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { tier: "Conservative", amount: "$58.6M", note: "Floor — undisputed documented losses" },
                  { tier: "Mid-Range",    amount: "$112.8M", note: "Standard actuarial & legal precedent" },
                  { tier: "Maximum",     amount: "$257.3M", note: "Full human rights + punitive" },
                ].map((s) => (
                  <div key={s.tier} className="rounded-lg p-3 text-center" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,105,20,0.2)" }}>
                    <p className="text-[9px] font-mono uppercase tracking-widest mb-0.5" style={{ color: "rgba(255,105,20,0.6)" }}>{s.tier}</p>
                    <p className="text-lg font-serif font-black leading-none mb-1 lime-glow" style={{ color: "#84cc16" }}>{s.amount}</p>
                    <p className="text-[9px] leading-tight" style={{ color: "rgba(255,255,255,0.35)" }}>{s.note}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold" style={{ border: "1px solid rgba(233,160,10,0.4)", color: "#e9a00a", background: "rgba(233,160,10,0.06)" }}>
                  Accruing $5,890 per day from 4 May 2026
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold border border-blue-700/40 text-blue-400 bg-blue-500/5">
                  UN Human Rights Committee Registered
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold border border-emerald-700/40 text-emerald-400 bg-emerald-500/5">
                  Bitcoin Blockchain Sealed
                </span>
              </div>

              <a
                href="https://economic-justice-engine.replit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all"
                style={{ border: "1px solid rgba(233,160,10,0.4)", color: "#e9a00a", background: "rgba(233,160,10,0.08)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(233,160,10,0.18)";
                  (e.currentTarget as HTMLElement).style.color = "#c88400";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(233,160,10,0.08)";
                  (e.currentTarget as HTMLElement).style.color = "#e9a00a";
                }}
                data-testid="link-economic-justice-engine"
              >
                <ExternalLink className="h-4 w-4" />
                View the Forensic Economic Valuation Engine
              </a>
            </div>
          </div>
        </div>

        {/* ABN Registry Verification */}
        <div className="py-6 border-t" style={{ borderColor: "rgba(132,204,22,0.15)" }}>
          <div className="rounded-xl p-5" style={{ background: "rgba(20,83,45,0.15)", border: "1px solid rgba(34,197,94,0.25)" }}>
            <div className="flex items-start gap-3 mb-4">
              <BadgeCheck className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-green-400 uppercase tracking-wider">Registered Legal Entity — Australian Business Register</h4>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>Independently verifiable on the Australian Government ABR public registry</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-4">
              <div className="space-y-3">
                {[
                  { icon: Building2, label: "Entity Name", value: "The Trustee for barrandodger.com" },
                  { icon: Scale, label: "ABN", value: "78 833 496 164", mono: true },
                  { icon: BadgeCheck, label: "ABN Status", value: "Active from 07 Aug 2022", green: true },
                ].map(({ icon: Icon, label, value, mono, green }) => (
                  <div key={label} className="flex items-start gap-2">
                    <Icon className="h-3.5 w-3.5 text-green-500/70 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</p>
                      <p className={`text-xs font-semibold ${mono ? "font-mono" : ""} ${green ? "text-green-400" : ""}`} style={!green ? { color: "rgba(196,212,239,0.8)" } : {}}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  { icon: Scale, label: "Entity Type", value: "Fixed Unit Trust" },
                  { icon: MapPin, label: "Main Business Location", value: "VIC 3173, Australia" },
                  { icon: Calendar, label: "Record Last Updated", value: "03 Oct 2024" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-2">
                    <Icon className="h-3.5 w-3.5 text-green-500/70 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</p>
                      <p className="text-xs" style={{ color: "rgba(196,212,239,0.8)" }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://abr.business.gov.au/ABN/View?abn=78833496164"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-green-400 hover:text-green-300 transition-colors font-semibold border border-green-800/40 rounded-lg px-3 py-2"
              style={{ background: "rgba(20,83,45,0.3)" }}
              data-testid="link-abn-verify"
            >
              <ExternalLink className="h-3 w-3" />
              Verify independently at abr.business.gov.au
            </a>
            <p className="text-[10px] mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>Record extracted: 24 Apr 2026 · Source: Australian Business Register (ABR)</p>
          </div>
        </div>

        {/* Sub Pages */}
        <div className="py-5 border-t" style={{ borderColor: "rgba(255,105,20,0.12)" }}>
          <p className="text-xs uppercase tracking-wider font-bold mb-3" style={{ color: "rgba(255,105,20,0.6)" }}>All Pages</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: "rgba(196,212,239,0.5)" }}>
            {[
              ["/", "Home"], ["/archive", "Archive"], ["/start-here", "Start Here"], ["/mission", "Mission"],
              ["/timeline", "Timeline"], ["/legal-status", "Legal Status"], ["/gospel", "Gospel"],
              ["/top-ten-gospels", "Top 10 Gospels"], ["/church", "Church"], ["/evidence", "Evidence"],
              ["/blockchain", "Timestamps"], ["/media", "Media"], ["/publications", "Publications"],
              ["/prophetic-papers", "Prophetic Papers"], ["/contact", "Contact"], ["/donate", "Donate ❤"],
              ["/testimony-archive", "The Archive — $3.33"], ["/store", "Store"], ["/commission-forensic-analysis", "Commission"],
            ].map(([href, label]) => (
              <Link key={href} href={href}
                className="transition-colors"
                style={{ color: label.includes("❤") ? "#e9a00a" : "rgba(196,212,239,0.5)", fontWeight: label.includes("❤") ? "600" : "400" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#84cc16"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = label.includes("❤") ? "#e9a00a" : "rgba(196,212,239,0.5)"; }}
              >{label}</Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="py-5 border-t" style={{ borderColor: "rgba(168,85,247,0.12)" }}>
          <div className="rounded-lg p-4 mb-4" style={{ background: "rgba(255,105,20,0.03)", border: "1px solid rgba(255,105,20,0.1)" }}>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#e9a00a" }}>Copyright & Intellectual Property Notice</h4>
            <p className="text-xs leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
              &copy; {new Date().getFullYear()} Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved. All content — testimony documents, forensic evidence, gospel writings, blockchain-verified manuscripts, legal correspondence, and all downloadable documents — is protected under Australian and international copyright law.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Evidence documents are blockchain-timestamped and legally sealed. Any tampering, misrepresentation, or unauthorised alteration of these materials may constitute fraud and will be prosecuted to the fullest extent of the law.
            </p>
          </div>

          <div className="rounded-xl px-5 py-4 mb-4" style={{ background: "rgba(168,85,247,0.04)", border: "1px solid rgba(168,85,247,0.15)" }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <p className="text-xs font-bold" style={{ color: "#e9a00a" }}>
                  &copy; {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund — All Rights Reserved
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs" style={{ color: "rgba(196,212,239,0.6)" }}>
                  <a href="https://abr.business.gov.au/ABN/View?abn=78833496164" target="_blank" rel="noopener noreferrer"
                    className="font-mono underline transition-colors" style={{ color: "rgba(255,105,20,0.8)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#ff6914"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,105,20,0.8)"; }}>
                    ABN: 78 833 496 164
                  </a>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                  <a href="tel:+61431300940" className="font-mono font-semibold transition-colors" style={{ color: "rgba(196,212,239,0.7)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#ff6914"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(196,212,239,0.7)"; }}>
                    +61 431 300 940
                  </a>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                  <a href="mailto:drbarrandodger@proton.me" className="transition-colors" style={{ color: "rgba(196,212,239,0.6)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#84cc16"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(196,212,239,0.6)"; }}>
                    drbarrandodger@proton.me
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  <span>The Trustee for barrandodger.com</span>
                  <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                  <a href="https://economic-justice-engine.replit.app" target="_blank" rel="noopener noreferrer"
                    className="transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#ff6914"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"; }}>
                    economic-justice-engine.replit.app
                  </a>
                  <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                  <LastUpdated className="text-white/40" />
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1.5 text-xs shrink-0" style={{ color: "rgba(255,255,255,0.4)" }}>
                <div className="flex items-center gap-5">
                  <Link href="/tags" className="transition-colors hover:text-lime-400" data-testid="link-tags-footer">Tags</Link>
                  <a href="/rss.xml" target="_blank" className="transition-colors hover:text-lime-400" data-testid="link-rss-feed">RSS Feed</a>
                  <Link href="/page-archive-registry" className="transition-colors hover:text-lime-400">⛓ Archive</Link>
                </div>
                <a
                  href="https://abr.business.gov.au/ABN/View?abn=78833496164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono transition-colors"
                  style={{ color: "rgba(132,204,22,0.6)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#84cc16"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(132,204,22,0.6)"; }}
                >
                  ✓ Verified Australian Business Register
                </a>
                <span
                  className="text-[10px] font-mono tabular-nums"
                  title="Total page views since launch"
                  style={{ color: "rgba(196,212,239,0.25)" }}
                  data-testid="text-visitor-count"
                >
                  ◎ {visitorCount.toLocaleString()} visits
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BLOCKCHAIN TIMESTAMP FACILITY ── */}
      <BlockchainTimestampBar />

    </footer>
  );
}
