import { useState, useRef, useEffect } from "react";
import { Globe, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language) || SUPPORTED_LANGUAGES[0];

  const switchLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18n-lang", code);
    setOpen(false);
    if (code === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  };

  return (
    <div ref={ref} className="relative" data-testid="language-switcher">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Change language"
        data-testid="language-switcher-button"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline text-xs font-medium">{currentLang.flag} {currentLang.code.toUpperCase()}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-52 bg-[hsl(222,55%,8%)] border border-white/20 rounded-lg shadow-2xl overflow-hidden z-[100] max-h-[420px] overflow-y-auto">
          <div className="px-3 py-2 border-b border-white/10">
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-mono">Interface Language</p>
          </div>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors ${
                i18n.language === lang.code
                  ? "bg-purple-500/20 text-white font-bold"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
              data-testid={`language-option-${lang.code}`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
          <div className="border-t border-white/10 px-3 py-2">
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-mono mb-1">Full Page Translation</p>
            <a
              href={`https://translate.google.com/translate?sl=en&tl=${i18n.language !== "en" ? i18n.language : "auto"}&u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "https://barrandodger.com")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="w-full flex items-center gap-2 px-1 py-2 text-xs text-white/60 hover:text-white transition-colors"
              data-testid="language-option-google-translate"
            >
              <Globe className="h-3.5 w-3.5 flex-shrink-0" />
              <span>Translate this page</span>
              <ExternalLink className="h-3 w-3 ml-auto flex-shrink-0" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
