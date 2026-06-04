import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Shield, Link2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface EvidenceCounterProps {
  variant?: "compact" | "full";
  showLink?: boolean;
}

export function EvidenceCounter({ variant = "full", showLink = true }: EvidenceCounterProps) {
  const [count, setCount] = useState(0);
  const targetCount = 2304;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-2 text-sm" data-testid="evidence-counter-compact">
        <FileText className="h-4 w-4 text-primary" />
        <span className="font-bold text-primary">{count}+</span>
        <span className="text-muted-foreground">verified documents</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-lg p-6 text-center"
      data-testid="evidence-counter-full"
    >
      <div className="flex items-center justify-center gap-3 mb-3">
        <Shield className="h-8 w-8 text-primary" />
        <Link2 className="h-6 w-6 text-[hsl(38,92%,50%)]" />
      </div>
      
      <motion.div
        key={count}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        className="text-5xl md:text-6xl font-bold text-primary mb-2"
      >
        {count}+
      </motion.div>
      
      <p className="text-lg font-medium text-foreground mb-1">
        Blockchain-Verified Documents
      </p>
      <p className="text-sm text-muted-foreground mb-4">
        AI-analyzed with SHA-256 hash verification
      </p>
      
      {showLink && (
        <Link href="/evidence">
          <Button variant="outline" className="gap-2" data-testid="button-view-evidence">
            <FileText className="h-4 w-4" /> View Evidence Archive
          </Button>
        </Link>
      )}
    </motion.div>
  );
}
