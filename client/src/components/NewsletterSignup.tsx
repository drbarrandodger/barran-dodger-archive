import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Bell, CheckCircle, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface NewsletterSignupProps {
  variant?: "inline" | "card";
  className?: string;
}

export function NewsletterSignup({ variant = "card", className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/subscribers", { email });
    },
    onSuccess: () => {
      setSubscribed(true);
      setEmail("");
      toast({
        title: "Subscribed!",
        description: "You'll receive updates on case developments.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      subscribeMutation.mutate(email);
    }
  };

  if (subscribed) {
    return (
      <div className={`flex items-center gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/30 ${className}`} data-testid="newsletter-success">
        <CheckCircle className="h-5 w-5 text-green-500" />
        <p className="text-sm font-medium">You're subscribed to case updates!</p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`} data-testid="newsletter-form-inline">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
          data-testid="input-newsletter-email"
        />
        <Button 
          type="submit" 
          disabled={subscribeMutation.isPending}
          data-testid="button-newsletter-submit"
        >
          {subscribeMutation.isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Bell className="h-4 w-4" />
          )}
        </Button>
      </form>
    );
  }

  return (
    <Card className={`border-[hsl(38,92%,50%)]/30 bg-[hsl(38,92%,50%)]/5 ${className}`} data-testid="newsletter-card">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-full bg-[hsl(38,92%,50%)]/20">
            <Mail className="h-5 w-5 text-[hsl(38,92%,50%)]" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg">Case Updates</h3>
            <p className="text-xs text-muted-foreground">Get notified of legal developments</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3" data-testid="newsletter-form">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-testid="input-newsletter-email"
          />
          <Button 
            type="submit" 
            className="w-full"
            disabled={subscribeMutation.isPending}
            data-testid="button-newsletter-submit"
          >
            {subscribeMutation.isPending ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Bell className="h-4 w-4 mr-2" />
                Subscribe to Updates
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
