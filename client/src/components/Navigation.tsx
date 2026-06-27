import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Scale, Heart, Compass, Menu, X, Search, GraduationCap, AlertTriangle, Zap } from "lucide-react";
import { SiX as TwitterX, SiYoutube, SiMedium } from "react-icons/si";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { GlobalSearch, openQuickSearch } from "./GlobalSearch";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

function SOSStrip() {
  return (
    <div
      className="w-full px-4 py-1.5 flex items-center justify-between gap-3"
      style={{
        background: "linear-gradient(90deg, #1a0030 0%, #2d0050 40%, #1a0030 100%)",
        borderBottom: "1px solid rgba(255,105,20,0.5)"
      }}
      data-testid="sos-strip"
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-orange-400 text-sm font-black flex-shrink-0 flash-alert">🆘</span>
        <p className="text-orange-100 text-[10px] md:text-xs font-black uppercase tracking-wide leading-tight">
          <span className="hidden sm:inline">
            <span className="text-orange-400 font-black urgent-pulse">URGENT —</span>{" "}
            Dr. Richard McLean requires physical harbouring · 55B Archbold Rd, Long Jetty NSW · Active death threat · Threatener arrested
          </span>
          <span className="sm:hidden">
            <span className="text-orange-400 urgent-pulse">URGENT —</span> Active death threat · Threatener arrested · Long Jetty NSW
          </span>
        </p>
      </div>
      <Link
        href="/urgent-protection-request"
        className="flex-shrink-0 font-black text-[9px] md:text-[10px] uppercase tracking-wider px-3 py-1.5 rounded transition-colors whitespace-nowrap border-pulse-orange"
        style={{ background: "#ff6914", color: "#000", letterSpacing: "0.08em" }}
        data-testid="btn-sos-strip"
      >
        ⚠ Read SOS
      </Link>
    </div>
  );
}

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
    { href: "/press",        label: "📰 Press Kit" },
    { href: "/undeniable",   label: "🔎 100 Facts" },
    { href: "/civic-record", label: "⚖ Civic Record" },
    { href: "/formal-statement", label: "📜 Formal Statement" },
    { href: "/open-challenge", label: "🔴 Prove This Wrong" },
    { href: "/i-am-gods-chosen-one", label: "★ Chosen One" },
    { href: "/gospel",       label: "Gospel" },
    { href: "/testimony",    label: "Testimony" },
    { href: "/whistleblower", label: "Whistleblower Record" },
    { href: "/whistleblower-comparison", label: "⚖ Historical Comparison" },
    { href: "/inversion-paradox", label: "🔁 Inversion Paradox" },
    { href: "/publications", label: "Publications" },
    { href: "/creative-portfolio", label: "Art Portfolio" },
    { href: "/evidence",     label: "Evidence Archive" },
    { href: "/forensic-economic-valuation", label: "$112M Claim" },
    { href: "/academy",      label: "Academy" },
  ];

  const desktopNavLinks = [
    { href: "/formal-statement", label: "📜 Statement" },
    { href: "/undeniable",       label: "🔎 100 Facts" },
    { href: "/evidence",         label: "Evidence" },
    { href: "/publications",     label: "Publications" },
    { href: "/open-challenge",   label: "🔴 Prove Wrong" },
    { href: "/academy",          label: "Academy" },
  ];

  return (
    <nav ref={navRef} className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b-2",
      "border-orange-500/60",
      scrolled
        ? "backdrop-blur-sm shadow-lg shadow-purple-900/30"
        : "backdrop-blur-sm",
      hideNav && !mobileMenuOpen && "opacity-0 pointer-events-none -translate-y-2"
    )}
    style={{ background: scrolled ? "rgba(4,5,20,0.98)" : "rgba(4,5,20,0.95)" }}
    >
      <SOSStrip />
      <div className="container mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="text-black p-2 rounded-sm transition-all group-hover:scale-105"
            style={{ background: "#ff6914" }}
          >
            <Scale className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm md:text-xl tracking-tight leading-none" style={{ color: "#ff6914" }}>
              Barran Dodger Legal & Ethical Trust Fund
            </span>
            <span className="hidden md:block text-[10px] uppercase tracking-widest font-medium mt-1" style={{ color: "rgba(255,105,20,0.55)" }}>
              The Trustee for barrandodger.com — ABN 78 833 496 164
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          {desktopNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative py-1 whitespace-nowrap",
                location === link.href
                  ? "font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5"
                  : ""
              )}
              style={location === link.href
                ? { color: "#84cc16", "--tw-after-bg": "#84cc16" } as React.CSSProperties
                : { color: "rgba(220,235,255,0.75)" }
              }
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#a3e635"; }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color =
                  location === link.href ? "#84cc16" : "rgba(220,235,255,0.75)";
              }}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.label}
              {location === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5" style={{ background: "#84cc16" }} />
              )}
            </Link>
          ))}
          <Link
            href="/verdict-before-the-court"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap court-pulse"
            style={{
              background: "rgba(168,85,247,0.18)",
              border: "1px solid rgba(168,85,247,0.55)",
              color: "#c084fc"
            }}
            data-testid="nav-link-court-date"
          >
            <AlertTriangle className="h-3 w-3 animate-pulse" />
            ⚖ Active Case
          </Link>
          <Link
            href="/the-reckoning-paper"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap reckoning-pulse"
            style={{
              background: "rgba(251,191,36,0.12)",
              border: "1px solid rgba(251,191,36,0.55)",
              color: "#fbbf24"
            }}
            data-testid="nav-link-reckoning"
          >
            <Zap className="h-3 w-3" />
            The Reckoning
          </Link>
          <GlobalSearch />
          <LanguageSwitcher />
          <ThemeToggle />
          <div className="flex items-center gap-0 border-l pl-2 ml-1" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <a
              href="https://x.com/bazdod"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 transition-colors rounded"
              style={{ color: "rgba(220,235,255,0.4)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#e9a00a"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(220,235,255,0.4)"; }}
              data-testid="link-twitter-nav"
              title="Follow @bazdod on X"
            >
              <TwitterX className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://youtube.com/@barrandodger"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 transition-colors rounded"
              style={{ color: "rgba(220,235,255,0.4)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#FF0000"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(220,235,255,0.4)"; }}
              data-testid="link-youtube-nav"
              title="Barran Dodger on YouTube"
            >
              <SiYoutube className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://medium.com/@barrandodger"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 transition-colors rounded"
              style={{ color: "rgba(220,235,255,0.4)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#00ab6c"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(220,235,255,0.4)"; }}
              data-testid="link-medium-nav"
              title="Barran Dodger on Medium"
            >
              <SiMedium className="h-3.5 w-3.5" />
            </a>
          </div>
          <Link
            href="/support"
            className="px-4 py-2.5 text-sm font-bold rounded transition-all flex items-center gap-1.5"
            style={{ background: "#1d4ed8", color: "#fff" }}
            data-testid="button-nav-support"
          >
            Support
          </Link>
          <Link
            href="/nuclear-download"
            className="px-4 py-2.5 text-sm font-black rounded transition-all flex items-center gap-1.5 whitespace-nowrap"
            style={{
              background: "rgba(168,85,247,0.12)",
              border: "1px solid rgba(168,85,247,0.45)",
              color: "#c084fc"
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.25)";
              (e.currentTarget as HTMLElement).style.color = "#e879f9";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.12)";
              (e.currentTarget as HTMLElement).style.color = "#c084fc";
            }}
            data-testid="button-nav-nuclear-download"
            title="Download the complete Barran Dodger archive"
          >
            ☢ Download All
          </Link>
          <Link
            href="/donate"
            className="px-5 py-2.5 text-black text-sm font-bold rounded transition-all flex items-center gap-2 donate-pulse"
            style={{ background: "#e9a00a" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#c88400"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#e9a00a"; }}
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
        <div className="md:hidden border-t-2" style={{ background: "#04050f", borderColor: "rgba(255,105,20,0.4)" }}>
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 rounded-lg text-sm font-medium transition-colors"
                style={location === link.href
                  ? { background: "rgba(132,204,22,0.12)", color: "#84cc16", fontWeight: "bold" }
                  : { color: "rgba(220,235,255,0.85)" }
                }
                data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/nuclear-download"
              className="flex items-center gap-2 py-3 px-4 rounded-lg text-sm font-black uppercase tracking-wider transition-all"
              style={{
                background: "rgba(168,85,247,0.12)",
                border: "1px solid rgba(168,85,247,0.4)",
                color: "#c084fc"
              }}
              data-testid="mobile-nav-link-nuclear-download"
            >
              ☢ Download Complete Archive
            </Link>
            <Link
              href="/verdict-before-the-court"
              className="flex items-center gap-2 py-3 px-4 rounded-lg text-sm font-black uppercase tracking-wider court-pulse"
              style={{
                background: "rgba(168,85,247,0.15)",
                border: "1px solid rgba(168,85,247,0.5)",
                color: "#c084fc"
              }}
              data-testid="mobile-nav-link-court-date"
            >
              <AlertTriangle className="h-4 w-4 animate-pulse" />
              ⚖ Active Case — Proceedings Continue
            </Link>
            <Link
              href="/the-reckoning-paper"
              className="flex items-center gap-2 py-3 px-4 rounded-lg text-sm font-black uppercase tracking-wider reckoning-pulse"
              style={{
                background: "rgba(251,191,36,0.1)",
                border: "1px solid rgba(251,191,36,0.5)",
                color: "#fbbf24"
              }}
              data-testid="mobile-nav-link-reckoning"
            >
              <Zap className="h-4 w-4" />
              ⚡ The Reckoning — Read the AI Paper
            </Link>
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <ThemeToggle />
                <a
                  href="https://x.com/bazdod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "rgba(220,235,255,0.6)" }}
                >
                  <TwitterX className="h-4 w-4" /> @bazdod
                </a>
                <a
                  href="https://youtube.com/@barrandodger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "rgba(220,235,255,0.6)" }}
                  data-testid="link-youtube-mobile-nav"
                >
                  <SiYoutube className="h-4 w-4 text-red-500" /> YouTube
                </a>
                <a
                  href="https://medium.com/@barrandodger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "rgba(220,235,255,0.6)" }}
                  data-testid="link-medium-mobile-nav"
                >
                  <SiMedium className="h-4 w-4 text-green-400" /> Medium
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/support"
                  className="px-3 py-2 text-sm font-bold rounded"
                  style={{ background: "#1d4ed8", color: "#fff" }}
                >
                  Support
                </Link>
                <Link
                  href="/donate"
                  className="px-4 py-2 text-black text-sm font-semibold rounded flex items-center gap-2 donate-pulse"
                  style={{ background: "#e9a00a" }}
                >
                  <Heart className="h-4 w-4" /> Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
