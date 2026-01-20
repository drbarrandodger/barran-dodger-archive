import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Scale } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/mission", label: "Mission" },
    { href: "/research", label: "Research" },
    { href: "/evidence", label: "Evidence" },
    { href: "/prophetic-papers", label: "Prophetic Papers" },
    { href: "/#invest", label: "Invest" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-background/95 backdrop-blur-sm border-border py-3 shadow-sm" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary text-primary-foreground p-2 rounded-sm group-hover:bg-primary/90 transition-colors">
            <Scale className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg md:text-xl text-primary tracking-tight leading-none">
              Barran Dodger Legal & Ethical Trust Fund
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mt-1">
              The Trustee for www.barrandodger.com.au
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-1",
                location === link.href 
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary" 
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-all shadow-sm hover:shadow"
          >
            Get Involved
          </Link>
        </div>
        
        {/* Mobile menu button could go here - keeping simple for now */}
      </div>
    </nav>
  );
}
