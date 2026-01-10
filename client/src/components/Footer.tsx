import { Link } from "wouter";
import { Scale, Mail } from "lucide-react";
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
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-none">Barran Dodger Legal & Ethical Trust Fund</span>
                <span className="text-[10px] uppercase tracking-wider text-secondary-foreground/60 font-medium mt-1">
                  The Trustee for www.barrandodger.com.au
                </span>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed max-w-xs">
              Upholding ethical governance, protecting truth-tellers, and converting evidence into public-benefit action.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/mission" className="hover:text-white transition-colors">Mission & Vision</Link></li>
              <li><Link href="/evidence" className="hover:text-white transition-colors">Evidence & Manuscripts</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif font-semibold text-lg mb-4">Stay Informed</h3>
            <p className="text-sm text-secondary-foreground/80 mb-4 max-w-md">
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
                          className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 focus-visible:ring-secondary-foreground/30"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={isPending}
                  variant="secondary"
                  className="bg-background text-primary hover:bg-background/90 font-medium px-6"
                >
                  {isPending ? "..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/60">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>&copy; {new Date().getFullYear()} Barran Dodger Legal & Ethical Trust Fund. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1 font-mono text-secondary-foreground/40">
              <p>ABN: 78 833 496 164</p>
              <p>The Trustee for www.barrandodger.com.au</p>
            </div>
          </div>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
