import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Scale, Heart, Compass, Menu, X, FileText } from "lucide-react";
import { SiX as TwitterX } from "react-icons/si";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { GlobalSearch } from "./GlobalSearch";
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
    { href: "/spread-the-truth", label: "🔥 Spread the Truth", highlight: true },
    { href: "/start-here", label: t("nav.startHere"), highlight: true },
    { href: "/administrative-annihilation", label: t("nav.thePaper"), highlight: true },
    { href: "/retrospective-statement", label: t("nav.govDocs"), highlight: true },
    { href: "/archive", label: t("nav.fullArchive") },
    { href: "/manifesto", label: t("nav.manifesto") },
    { href: "/josephs-coat", label: t("nav.josephsCoat") },
    { href: "/gospel", label: t("nav.gospel") },
    { href: "/evidence", label: t("nav.evidence") },
    { href: "/publications", label: t("nav.publications") },
    { href: "/evidence-vault", label: t("nav.evidenceVault") },
    { href: "/taxpayer-cost-analysis", label: t("nav.costAnalysis") },
    { href: "/blockchain", label: t("nav.timestamps") },
    { href: "/store", label: t("nav.store") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav ref={navRef} className={cn(
      "fixed top-[var(--banner-height,40px)] w-full z-50 transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-background/95 backdrop-blur-sm border-border py-2 md:py-3 shadow-sm" : "bg-transparent py-3 md:py-6",
      hideNav && !mobileMenuOpen && "opacity-0 pointer-events-none -translate-y-2"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary text-primary-foreground p-2 rounded-sm group-hover:bg-primary/90 transition-colors">
            <Scale className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm md:text-xl text-primary tracking-tight leading-none">
              Barran Dodger Legal & Ethical Trust Fund
            </span>
            <span className="hidden md:block text-[10px] uppercase tracking-widest text-muted-foreground font-medium mt-1">
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
                "text-sm font-medium transition-colors hover:text-primary relative py-1",
                link.highlight && location !== link.href
                  ? "text-[hsl(38,92%,50%)] flex items-center gap-1"
                  : location === link.href 
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[hsl(38,92%,50%)]" 
                    : "text-muted-foreground"
              )}
              data-testid={`nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
            >
              {link.highlight && <Compass className="h-3.5 w-3.5" />}
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
            className="px-5 py-2.5 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] text-sm font-semibold rounded hover:bg-[hsl(38,92%,55%)] transition-all shadow-sm hover:shadow flex items-center gap-2"
            data-testid="button-nav-donate"
          >
            <Heart className="h-4 w-4" /> Donate
          </Link>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "block py-3 px-4 rounded-lg text-sm font-medium transition-colors",
                  link.highlight
                    ? "bg-[hsl(38,92%,50%)]/10 text-[hsl(38,92%,50%)] flex items-center gap-2"
                    : location === link.href 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:bg-muted"
                )}
                data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.highlight && <Compass className="h-4 w-4" />}
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
