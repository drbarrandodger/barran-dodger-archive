import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Scale, Heart, Compass, Menu, X, Search, GraduationCap } from "lucide-react";
import { SiX as TwitterX } from "react-icons/si";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { GlobalSearch, openQuickSearch } from "./GlobalSearch";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navigation() {
  const [location] = useLocation();
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const atBottom = (window.innerHeight + currentY) >= (document.body.scrollHeight - 100);
      setScrolled(currentY > 20);

      if (window.innerWidth < 768) {
        if (atBottom || currentY < 60) {
          setHideNav(false);
        } else if (currentY > lastScrollY && currentY > 80) {
          setHideNav(true);
        } else if (currentY < lastScrollY) {
          setHideNav(false);
        }
      } else {
        setHideNav(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty("--nav-height", `${navRef.current.offsetHeight}px`);
      }
    };
    updateNavHeight();
    const observer = new ResizeObserver(updateNavHeight);
    if (navRef.current) observer.observe(navRef.current);
    return () => observer.disconnect();
  }, [scrolled]);

  const navLinks = [
    { href: "/about",        label: "About" },
    { href: "/gospel",       label: "Gospel" },
    { href: "/testimony",    label: "Testimony" },
    { href: "/whistleblower", label: "Whistleblower Record" },
    { href: "/publications", label: "Publications" },
    { href: "/evidence",     label: "Evidence Archive" },
    { href: "/academy",      label: "Academy" },
  ];

  return (
    <nav ref={navRef} className={cn(
      "fixed top-[var(--banner-height,120px)] w-full z-50 transition-all duration-300 border-b-2 border-amber-500/70",
      scrolled ? "bg-[#8b0000]/98 backdrop-blur-sm py-2 md:py-3 shadow-lg shadow-red-900/40" : "bg-[#8b0000]/95 backdrop-blur-sm py-3 md:py-5",
      hideNav && !mobileMenuOpen && "opacity-0 pointer-events-none -translate-y-2"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-amber-500 text-zinc-950 p-2 rounded-sm group-hover:bg-amber-400 transition-colors">
            <Scale className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm md:text-xl text-amber-400 tracking-tight leading-none">
              Barran Dodger Legal & Ethical Trust Fund
            </span>
            <span className="hidden md:block text-[10px] uppercase tracking-widest text-amber-600/70 font-medium mt-1">
              The Trustee for www.barrandodger.com — ABN 78 833 496 164
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-300 relative py-1",
                location === link.href 
                  ? "text-amber-200 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-400" 
                  : "text-amber-100/80 hover:text-amber-200"
              )}
              data-testid={`nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
            >
              {link.label}
            </Link>
          ))}
          <GlobalSearch />
          <LanguageSwitcher />
          <ThemeToggle />
          <a 
            href="https://x.com/bazdod" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-twitter-nav"
            title="Follow @bazdod on X"
          >
            <TwitterX className="h-5 w-5" />
          </a>
          <Link 
            href="/donate" 
            className="px-5 py-2.5 bg-amber-500 text-black text-sm font-bold rounded hover:bg-amber-400 transition-all flex items-center gap-2 donate-pulse"
            data-testid="button-nav-donate"
          >
            <Heart className="h-4 w-4" /> Donate
          </Link>
        </div>
        
        <div className="md:hidden flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => openQuickSearch()}
            className="text-muted-foreground hover:text-primary"
            data-testid="button-mobile-search"
            title="Quick Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#8b0000] border-t-2 border-amber-500/50">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "block py-3 px-4 rounded-lg text-sm font-medium transition-colors",
                  location === link.href 
                    ? "bg-amber-500/20 text-amber-200 font-bold" 
                    : "text-amber-100/90 hover:bg-white/10 hover:text-amber-200"
                )}
                data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <ThemeToggle />
                <a 
                  href="https://x.com/bazdod" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <TwitterX className="h-4 w-4" /> @bazdod
                </a>
              </div>
              <Link 
                href="/donate" 
                className="px-4 py-2 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] text-sm font-semibold rounded hover:bg-[hsl(38,92%,55%)] flex items-center gap-2"
              >
                <Heart className="h-4 w-4" /> Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
