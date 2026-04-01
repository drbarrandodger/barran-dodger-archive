import { Link } from "wouter";
import { Scale, Mail, Heart, Globe, Shield } from "lucide-react";
import { SiX, SiGithub } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema } from "@shared/schema";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { mutate, isPending } = useCreateSubscriber();
  
  const form = useForm({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: { email: "" }
  });

  const onSubmit = (data: { email: string }) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <footer className="bg-[hsl(222,55%,12%)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-none">Barran Dodger Legal & Ethical Trust Fund</span>
                <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium mt-1">
                  The Trustee for www.barrandodger.com — ABN 78 833 496 164
                </span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Upholding ethical governance, protecting truth-tellers, and converting evidence into public-benefit action.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/start-here" className="hover:text-[hsl(38,92%,50%)] transition-colors font-medium">Start Here</Link></li>
              <li><Link href="/timeline" className="hover:text-white transition-colors">35-Year Timeline</Link></li>
              <li><Link href="/legal-status" className="hover:text-white transition-colors">Legal Status Tracker</Link></li>
              <li><Link href="/evidence" className="hover:text-white transition-colors">Evidence Archive</Link></li>
              <li><Link href="/media" className="hover:text-white transition-colors">Press & Media</Link></li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-xs text-white/60">
              <p className="flex items-center gap-2">
                <Mail className="h-3 w-3" />
                <a href="mailto:drbarrandodger@proton.me" className="hover:text-white transition-colors">drbarrandodger@proton.me</a>
              </p>
              <p className="flex items-center gap-2">
                <Scale className="h-3 w-3" />
                <a href="tel:+61431167907" className="hover:text-white transition-colors">+61 431 167 907</a>
              </p>
              <a 
                href="https://x.com/bazdod" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[hsl(38,92%,50%)] transition-colors mt-3 text-sm"
                data-testid="link-twitter-footer"
              >
                <SiX className="h-4 w-4" />
                <span>Follow @bazdod on X</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif font-semibold text-lg mb-4">Stay Informed</h3>
            <p className="text-sm text-white/80 mb-4 max-w-md">
              Receive updates on our advocacy work, public records releases, and ethical governance initiatives.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2 max-w-md">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input 
                          placeholder="Email address" 
                          {...field} 
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-[hsl(38,92%,50%)]/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] hover:bg-[hsl(38,92%,55%)] font-medium px-6"
                >
                  {isPending ? "..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Donate Call-to-Action */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-[hsl(38,92%,50%)]" />
              <div>
                <p className="font-serif font-semibold text-lg">Support the Mission</p>
                <p className="text-sm text-white/70">PayID: <span className="font-mono text-[hsl(38,92%,50%)]">rich@richmclean.com.au</span></p>
              </div>
            </div>
            <Link 
              href="/donate" 
              className="px-6 py-3 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] font-semibold rounded hover:bg-[hsl(38,92%,55%)] transition-all flex items-center gap-2"
            >
              <Heart className="h-4 w-4" /> Donate Now
            </Link>
          </div>
        </div>

        {/* Official Mirror & Donation Appeal */}
        <div className="py-6 border-t border-white/10">
          <div className="bg-gradient-to-r from-white/5 to-white/[0.02] rounded-lg p-5 space-y-4">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-[hsl(38,92%,50%)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-[hsl(38,92%,50%)] uppercase tracking-wider mb-2">Official Mirror Site</h4>
                <p className="text-xs text-white/70 leading-relaxed mb-3">
                  An independently published permanent online archive exists as an official mirror of this site with reduced capability. It is secured behind Barran's personal 2FA authentication on GitHub, ensuring the evidence remains publicly accessible should any political silencing or further financial sabotage ever lead to the deletion of this primary site.
                </p>
                <a
                  href="https://drbarrandodger.github.io/barran-dodger-archive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[hsl(38,92%,50%)] hover:text-[hsl(38,92%,60%)] transition-colors font-medium"
                  data-testid="link-github-mirror"
                >
                  <SiGithub className="h-4 w-4" />
                  <span>drbarrandodger.github.io/barran-dodger-archive</span>
                  <Globe className="h-3 w-3 opacity-60" />
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-white/80 leading-relaxed mb-2">
                    Barran is in political exile, desperately needing donations to keep this online testimony live and public. In obedience to the Creator and as a vessel for His glory — if any person has prosperity to spare, please consider donating. A win for Barran is a win for human justice, for all vulnerable people, and for every victim of corruption.
                  </p>
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 text-sm text-[hsl(38,92%,50%)] hover:text-[hsl(38,92%,60%)] transition-colors font-semibold"
                    data-testid="link-donate-footer-appeal"
                  >
                    <Heart className="h-4 w-4" />
                    <span>Please Donate — Keep the Truth Alive</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Pages Links */}
        <div className="py-6 border-t border-white/10">
          <p className="text-xs text-[hsl(38,92%,50%)] uppercase tracking-wider font-bold mb-3">Sub Pages</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <Link href="/start-here" className="hover:text-[hsl(38,92%,50%)] transition-colors font-medium">Start Here</Link>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/archive" className="hover:text-[hsl(38,92%,50%)] transition-colors font-medium">Full Archive</Link>
            <Link href="/mission" className="hover:text-white transition-colors">Mission</Link>
            <Link href="/timeline" className="hover:text-white transition-colors">Timeline</Link>
            <Link href="/legal-status" className="hover:text-white transition-colors">Legal Status</Link>
            <Link href="/gospel" className="hover:text-white transition-colors">Gospel</Link>
            <Link href="/church" className="hover:text-white transition-colors">Church</Link>
            <Link href="/evidence" className="hover:text-white transition-colors">Evidence</Link>
            <Link href="/blockchain" className="hover:text-white transition-colors">Timestamps</Link>
            <Link href="/media" className="hover:text-white transition-colors">Media</Link>
            <Link href="/donate" className="hover:text-white transition-colors font-semibold text-[hsl(38,92%,50%)]">Donate</Link>
            <Link href="/prophetic-papers" className="hover:text-white transition-colors">Prophetic Papers</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Copyright & Legal Protection Notice */}
        <div className="py-6 border-t border-white/10">
          <div className="bg-white/5 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-[hsl(38,92%,50%)] mb-2 uppercase tracking-wider">Copyright & Intellectual Property Notice</h4>
            <p className="text-xs text-white/70 leading-relaxed mb-3">
              &copy; {new Date().getFullYear()} Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved.
            </p>
            <p className="text-xs text-white/60 leading-relaxed mb-3">
              All content on this website and the domains <strong className="text-white/80">www.barrandodger.com</strong> and <strong className="text-white/80">clean-text-generator--richarddrawsstu.replit.app</strong>, including but not limited to: testimony documents, witness statements, forensic evidence, gospel writings, blockchain-verified manuscripts, legal correspondence, evidence archives, photographic materials, audio/video recordings, and all downloadable documents, are protected under Australian and international copyright law.
            </p>
            <p className="text-xs text-white/60 leading-relaxed mb-3">
              These materials constitute original works of authorship and sworn testimony. Unauthorised reproduction, distribution, modification, public display, or commercial use of any materials from this website is strictly prohibited without prior written consent from the Barran Dodger Legal & Ethical Trust Fund.
            </p>
            <p className="text-xs text-white/60 leading-relaxed">
              Evidence documents are blockchain-timestamped and legally sealed. Any tampering, misrepresentation, or unauthorised alteration of these materials may constitute fraud and will be prosecuted to the fullest extent of the law. These materials are preserved for evidentiary purposes in ongoing and future legal proceedings.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>&copy; {new Date().getFullYear()} Barran Dodger Legal & Ethical Trust Fund. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1 font-mono text-white/40">
              <a 
                href="https://abr.business.gov.au/ABN/View?abn=78833496164" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[hsl(38,92%,50%)] transition-colors underline"
              >
                ABN: 78 833 496 164 (Verify on ABR.gov.au)
              </a>
              <p>The Trustee for www.barrandodger.com</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="/rss.xml" 
              target="_blank"
              className="hover:text-[hsl(38,92%,50%)] transition-colors"
              data-testid="link-rss-feed"
            >
              RSS Feed
            </a>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
