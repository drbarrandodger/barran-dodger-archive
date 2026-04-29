import { Link, useLocation } from "wouter";
import { Scale, Mail, Heart, Globe, Shield, Copy, CheckCheck, TrendingUp, BadgeCheck, ExternalLink, Building2, Calendar, MapPin } from "lucide-react";
import { SiX, SiGithub } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema } from "@shared/schema";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { StatementOfSignificance } from "@/components/StatementOfSignificance";
import { AcademicCitation } from "@/components/AcademicCitation";
import { LastUpdated } from "@/components/LastUpdated";

const PAYID = "rich@richmclean.com.au";

const TIERS = [
  { amount: "$10",  label: "Witness",   desc: "Preserves 5 documents on the blockchain — permanently beyond any court order." },
  { amount: "$50",  label: "Guardian",  desc: "Funds one formal ICC Article 7 submission or UNHCR international complaint." },
  { amount: "$250", label: "Liberator", desc: "Covers one full month of secure hosting, legal research and advocacy operations." },
];

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
  const liveTotal = stats?.total ??
    (typeof window !== "undefined" && (window as any).__BD_DOWNLOAD_TOTAL__
      ? Number((window as any).__BD_DOWNLOAD_TOTAL__)
      : 450_000);
  const pageTitle = typeof document !== "undefined" ? document.title.split("|")[0].trim() : "Barran Dodger Archive";

  return (
    <footer style={{ background: "#6b0000" }} className="text-white">

      {/* ── STATEMENT OF SIGNIFICANCE — Bold, site-wide, live counter ── */}
      <div className="bg-black py-10 px-4 border-b-2 border-red-900">
        <div className="container mx-auto max-w-5xl">
          <StatementOfSignificance variant="full" />
        </div>
      </div>

      {/* ── ACADEMIC CITATION BLOCK — Per-page, scholarly indexable ── */}
      <div className="bg-zinc-900 py-8 px-4 border-b border-amber-900/40">
        <div className="container mx-auto max-w-3xl">
          <AcademicCitation title={pageTitle} pathname={location} year={2026} />
        </div>
      </div>

      {/* ── CONVERSION PANEL — Top of footer, maximum visibility ── */}
      <div className="border-b border-amber-600/40" style={{ background: "linear-gradient(180deg, #8b0000 0%, #6b0000 100%)" }}>
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4" data-testid="footer-live-downloads">
              <TrendingUp className="h-4 w-4 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                <span className="tabular-nums">{liveTotal.toLocaleString("en-AU")}</span>+ Verified Downloads · Live · Resonance Not Proximity
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-400 mb-3">
              This Archive Runs on Donations Alone
            </h2>
            <p className="text-white/70 text-sm max-w-xl mx-auto leading-relaxed">
              Dr. Richard McLean is in political exile. There is no institution, no government, no NGO funding this. Every document, every hosting cost, every blockchain timestamp is funded by people like you who believe truth must be preserved.
            </p>
          </div>

          {/* Donation Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            {TIERS.map((tier) => (
              <div
                key={tier.amount}
                className="rounded-xl border border-amber-700/40 p-5 text-center hover:border-amber-500/60 transition-all"
                style={{ background: "rgba(251,191,36,0.05)" }}
              >
                <p className="text-3xl font-serif font-bold text-amber-400 mb-1">{tier.amount}</p>
                <p className="text-amber-300/80 text-xs font-bold uppercase tracking-widest mb-3">{tier.label}</p>
                <p className="text-white/60 text-xs leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>

          {/* PayID CTA */}
          <div className="max-w-xl mx-auto text-center">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Send via PayID (Australia) · Instant · No fees</p>
            <button
              onClick={copyPayId}
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-base px-8 py-4 rounded-xl transition-all donate-pulse"
              data-testid="button-footer-copy-payid"
            >
              {copiedPayId ? <CheckCheck className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              {copiedPayId ? "Copied!" : `PayID: ${PAYID}`}
            </button>
            <p className="text-white/30 text-xs mt-3">Or visit <Link href="/donate" className="text-amber-500 hover:text-amber-400 underline">the full Donate page</Link> for all options including bank transfer</p>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER LINKS ── */}
      <div className="container mx-auto px-4 md:px-6 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-amber-500 text-black p-1.5 rounded-sm">
                <Scale className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base text-amber-400 leading-tight">Barran Dodger Legal & Ethical Trust Fund</span>
                <span className="text-[10px] uppercase tracking-wider text-amber-700/70 font-medium mt-0.5">ABN 78 833 496 164</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Upholding ethical governance, protecting truth-tellers, and converting evidence into public-benefit action.
            </p>
            <div className="space-y-1.5 text-xs text-white/50">
              <a href="mailto:drbarrandodger@proton.me" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Mail className="h-3 w-3" /> drbarrandodger@proton.me
              </a>
              <a href="tel:+61431167907" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Scale className="h-3 w-3" /> +61 431 167 907
              </a>
              <a href="https://x.com/bazdod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-400 transition-colors mt-2" data-testid="link-twitter-footer">
                <SiX className="h-3.5 w-3.5" /> @bazdod on X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-amber-400 mb-4">Essential Reading</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link href="/start-here" className="hover:text-amber-400 transition-colors font-semibold">→ Start Here</Link></li>
              <li><Link href="/divine-reckoning" className="hover:text-amber-400 transition-colors">⚡ Divine Reckoning</Link></li>
              <li><Link href="/administrative-annihilation" className="hover:text-amber-400 transition-colors">The Paper</Link></li>
              <li><Link href="/ai-justice-statement" className="hover:text-amber-400 transition-colors">AI Justice Statement</Link></li>
              <li><Link href="/timeline" className="hover:text-amber-400 transition-colors">35-Year Timeline</Link></li>
              <li><Link href="/evidence" className="hover:text-amber-400 transition-colors">Evidence Archive</Link></li>
              <li><Link href="/testimony-archive" className="hover:text-amber-400 transition-colors font-semibold">📚 The Testimony Archive — $3.33 Each</Link></li>
              <li><Link href="/donate" className="hover:text-amber-400 transition-colors font-bold text-amber-500">❤ Donate</Link></li>
            </ul>
          </div>

          {/* Archive */}
          <div>
            <h3 className="font-serif font-semibold text-amber-400 mb-4">Archive</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link href="/archive" className="hover:text-amber-400 transition-colors">Full Archive</Link></li>
              <li><Link href="/gospel" className="hover:text-amber-400 transition-colors">The Gospel</Link></li>
              <li><Link href="/prophetic-papers" className="hover:text-amber-400 transition-colors">Prophetic Papers</Link></li>
              <li><Link href="/blockchain" className="hover:text-amber-400 transition-colors">Blockchain Timestamps</Link></li>
              <li><Link href="/legal-status" className="hover:text-amber-400 transition-colors">Legal Status</Link></li>
              <li><Link href="/evidence-vault" className="hover:text-amber-400 transition-colors">Evidence Vault</Link></li>
              <li><Link href="/commission-forensic-analysis" className="hover:text-amber-400 transition-colors font-semibold">Commission Analysis</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-semibold text-amber-400 mb-3">Stay Informed</h3>
            <p className="text-xs text-white/60 mb-4 leading-relaxed">
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
                          className="bg-amber-900/10 border-amber-800/30 text-white placeholder:text-white/40 focus-visible:ring-amber-500/50 text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-amber-500 text-black hover:bg-amber-400 font-semibold text-sm"
                >
                  {isPending ? "..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Official Mirror */}
        <div className="py-6 border-t border-amber-900/30">
          <div className="rounded-xl border border-amber-800/25 p-5" style={{ background: "rgba(251,191,36,0.04)" }}>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Official Mirror Site — Permanent Backup</h4>
                <p className="text-xs text-white/60 leading-relaxed mb-3">
                  An independently published archive is secured behind Barran's personal 2FA authentication on GitHub, ensuring the evidence remains publicly accessible should any political silencing or financial sabotage ever lead to deletion of this primary site.
                </p>
                <a
                  href="https://drbarrandodger.github.io/barran-dodger-archive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors font-medium"
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

        {/* ABN Registry Verification */}
        <div className="py-6 border-t border-amber-900/30">
          <div className="rounded-xl border border-green-800/30 p-5" style={{ background: "rgba(20,83,45,0.15)" }}>
            <div className="flex items-start gap-3 mb-4">
              <BadgeCheck className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-green-400 uppercase tracking-wider">Registered Legal Entity — Australian Business Register</h4>
                <p className="text-xs text-white/50 mt-0.5">Independently verifiable on the Australian Government ABR public registry</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Building2 className="h-3.5 w-3.5 text-green-500/70 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">Entity Name</p>
                    <p className="text-xs text-white/80 font-semibold">The Trustee for www.barrandodger.com.au</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Scale className="h-3.5 w-3.5 text-green-500/70 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">ABN</p>
                    <p className="text-xs text-white/80 font-mono font-semibold">78 833 496 164</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <BadgeCheck className="h-3.5 w-3.5 text-green-500/70 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">ABN Status</p>
                    <p className="text-xs text-green-400 font-bold">Active from 07 Aug 2022</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Scale className="h-3.5 w-3.5 text-green-500/70 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">Entity Type</p>
                    <p className="text-xs text-white/80">Fixed Unit Trust</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-green-500/70 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">Main Business Location</p>
                    <p className="text-xs text-white/80">VIC 3173, Australia</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-3.5 w-3.5 text-green-500/70 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider">Record Last Updated</p>
                    <p className="text-xs text-white/80">03 Oct 2024</p>
                  </div>
                </div>
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
            <p className="text-[10px] text-white/30 mt-2">Record extracted: 24 Apr 2026 · Source: Australian Business Register (ABR)</p>
          </div>
        </div>

        {/* Sub Pages */}
        <div className="py-5 border-t border-amber-900/30">
          <p className="text-xs text-amber-600 uppercase tracking-wider font-bold mb-3">All Pages</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-white/50">
            {[
              ["/", "Home"], ["/archive", "Archive"], ["/start-here", "Start Here"], ["/mission", "Mission"],
              ["/timeline", "Timeline"], ["/legal-status", "Legal Status"], ["/gospel", "Gospel"],
              ["/top-ten-gospels", "Top 10 Gospels"], ["/church", "Church"], ["/evidence", "Evidence"],
              ["/blockchain", "Timestamps"], ["/media", "Media"], ["/publications", "Publications"],
              ["/prophetic-papers", "Prophetic Papers"], ["/contact", "Contact"], ["/donate", "Donate ❤"],
              ["/testimony-archive", "The Archive — $3.33"], ["/store", "Store"], ["/commission-forensic-analysis", "Commission"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className={`hover:text-amber-400 transition-colors ${label.includes("❤") || label === "Donate ❤" ? "text-amber-500 font-semibold" : ""}`}>{label}</Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="py-5 border-t border-amber-900/30">
          <div className="rounded-lg border border-amber-900/20 p-4 mb-4" style={{ background: "rgba(251,191,36,0.03)" }}>
            <h4 className="text-xs font-semibold text-amber-500 mb-2 uppercase tracking-wider">Copyright & Intellectual Property Notice</h4>
            <p className="text-xs text-white/50 leading-relaxed mb-2">
              &copy; {new Date().getFullYear()} Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved. All content — testimony documents, forensic evidence, gospel writings, blockchain-verified manuscripts, legal correspondence, and all downloadable documents — is protected under Australian and international copyright law.
            </p>
            <p className="text-xs text-white/40 leading-relaxed">
              Evidence documents are blockchain-timestamped and legally sealed. Any tampering, misrepresentation, or unauthorised alteration of these materials may constitute fraud and will be prosecuted to the fullest extent of the law.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p>&copy; {new Date().getFullYear()} Barran Dodger Legal & Ethical Trust Fund. All rights reserved.</p>
              <a
                href="https://abr.business.gov.au/ABN/View?abn=78833496164"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono hover:text-amber-400 transition-colors underline"
              >
                ABN: 78 833 496 164 (Verify on ABR.gov.au)
              </a>
              <LastUpdated className="text-white/40 mt-1" />
            </div>
            <div className="flex items-center gap-5">
              <Link href="/tags" className="hover:text-amber-400 transition-colors" data-testid="link-tags-footer">Tags</Link>
              <a href="/rss.xml" target="_blank" className="hover:text-amber-400 transition-colors" data-testid="link-rss-feed">RSS Feed</a>
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
