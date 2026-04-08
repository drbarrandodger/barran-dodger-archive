import { useState, useEffect } from "react";
import { Globe, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/lib/i18n";

const DISMISSED_KEY = "lang-detect-dismissed";

export function LanguageDetectionBanner() {
  const { i18n } = useTranslation();
  const [suggestedLang, setSuggestedLang] = useState<typeof SUPPORTED_LANGUAGES[0] | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyDismissed = localStorage.getItem(DISMISSED_KEY);
    const savedLang = localStorage.getItem("i18n-lang");
    if (alreadyDismissed || savedLang) return;

    const browserLang = navigator.language.split("-")[0].toLowerCase();
    if (browserLang === "en") return;

    const match = SUPPORTED_LANGUAGES.find((l) => l.code === browserLang);
    if (!match) return;

    setSuggestedLang(match);
    setVisible(true);
  }, []);

  const handleSwitch = () => {
    if (!suggestedLang) return;
    i18n.changeLanguage(suggestedLang.code);
    localStorage.setItem("i18n-lang", suggestedLang.code);
    if (suggestedLang.code === "ar") {
      document.documentElement.dir = "rtl";
    }
    setVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem(DISMISSED_KEY, "1");
    setVisible(false);
  };

  if (!visible || !suggestedLang) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-2rem)] max-w-md"
      data-testid="language-detection-banner"
    >
      <div className="bg-[hsl(222,55%,10%)] border border-white/20 rounded-xl shadow-2xl px-4 py-3 flex items-center gap-3">
        <Globe className="h-5 w-5 text-[hsl(38,92%,50%)] flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-medium leading-tight">
            This site is available in{" "}
            <span className="text-[hsl(38,92%,50%)]">
              {suggestedLang.flag} {suggestedLang.label}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleSwitch}
            className="px-3 py-1.5 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,12%)] text-xs font-bold rounded-lg hover:bg-[hsl(38,92%,55%)] transition-colors"
            data-testid="language-detection-switch"
          >
            Switch
          </button>
          <button
            onClick={handleDismiss}
            className="p-1 text-white/50 hover:text-white transition-colors"
            aria-label="Dismiss"
            data-testid="language-detection-dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
