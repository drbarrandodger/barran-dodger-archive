import { Link, useLocation } from "wouter";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function FloatingCTA() {
  const [location] = useLocation();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (location === '/start-here') return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
          data-testid="floating-cta-start-here"
        >
          <Button
            size="lg"
            className="gap-2 rounded-full bg-[hsl(38,92%,50%)] text-[hsl(222,55%,10%)] shadow-lg shadow-[hsl(38,92%,50%)]/25"
            asChild
            data-testid="button-floating-start-here"
          >
            <Link href="/start-here">
              <Compass className="h-4 w-4" />
              New Here? Start Here
            </Link>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
