import { useState } from "react";
import { Copy, Check, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  pathname?: string;
  year?: number;
  className?: string;
}

const ABN = "78 833 496 164";
const TRUST = "Barran Dodger Legal & Ethical Trust Fund";

function buildCitations({ title, pathname, year }: Required<Props>) {
  const accessed = new Date().toLocaleDateString("en-AU", {
    year: "numeric", month: "long", day: "numeric",
  });
  const url = `https://www.barrandodger.com${pathname}`;
  const slug = pathname.replace(/[^a-z0-9]/gi, "_").replace(/^_|_$/g, "") || "home";
  const bibKey = `mclean${year}_${slug}`;

  return {
    Chicago: `McLean, Richard William. "${title}." ${TRUST}, ${year}. Accessed ${accessed}. ${url}.`,
    APA: `McLean, R. W. (${year}). ${title}. ${TRUST}. Retrieved ${accessed}, from ${url}`,
    Harvard: `McLean, R.W. (${year}) '${title}', ${TRUST}. Available at: ${url} (Accessed: ${accessed}).`,
    MLA: `McLean, Richard William. "${title}." ${TRUST}, ${year}, ${url}. Accessed ${accessed}.`,
    Vancouver: `McLean RW. ${title} [Internet]. ${TRUST}; ${year} [cited ${accessed}]. Available from: ${url}`,
    BibTeX: `@misc{${bibKey},
  author = {McLean, Richard William},
  title = {${title}},
  year = {${year}},
  publisher = {${TRUST}},
  note = {ABN ${ABN}},
  url = {${url}},
  urldate = {${accessed}}
}`,
  };
}

/**
 * AcademicCitation — per-page citation block in 6 formats (Chicago/APA/Harvard/MLA/Vancouver/BibTeX).
 * Renders the same text that the server injects as bot-readable metadata,
 * so what scholars see matches what crawlers index.
 */
export function AcademicCitation({ title, pathname = "", year = 2026, className = "" }: Props) {
  const resolvedPath = pathname || (typeof window !== "undefined" ? window.location.pathname : "/");
  const cites = buildCitations({ title, pathname: resolvedPath, year, className: "" } as any);
  const formats = Object.keys(cites) as (keyof typeof cites)[];
  const [active, setActive] = useState<keyof typeof cites>("APA");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cites[active]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section
      className={`rounded-xl border-2 border-amber-700/50 dark:border-amber-500/40 bg-gradient-to-br from-amber-50 via-white to-amber-50 dark:from-amber-950/20 dark:via-zinc-950 dark:to-amber-950/20 overflow-hidden ${className}`}
      data-testid="academic-citation"
      aria-labelledby="cite-this-page"
    >
      <header className="bg-amber-700 dark:bg-amber-800 text-white px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          <h3 id="cite-this-page" className="font-black uppercase tracking-[0.12em] text-xs md:text-sm">
            Cite This Page · Academic Reference
          </h3>
        </div>
        <BookOpen className="h-4 w-4 opacity-70" />
      </header>

      <div className="p-4 md:p-5 space-y-3">
        {/* Format tabs */}
        <div className="flex flex-wrap gap-1.5" role="tablist">
          {formats.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              data-testid={`button-cite-format-${f.toLowerCase()}`}
              className={`px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-wider transition-colors ${
                active === f
                  ? "bg-amber-700 dark:bg-amber-600 text-white shadow"
                  : "bg-amber-100 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Active citation */}
        <div className="relative">
          <pre
            className="text-xs md:text-[13px] leading-relaxed font-mono whitespace-pre-wrap p-4 pr-12 rounded-lg bg-zinc-900 text-amber-100 border border-zinc-800 selection:bg-amber-500/30"
            data-testid={`text-citation-${active.toLowerCase()}`}
          >
            {cites[active]}
          </pre>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopy}
            data-testid="button-copy-citation"
            className="absolute top-2 right-2 h-8 w-8 p-0 text-amber-200 hover:text-white hover:bg-amber-700/50"
            aria-label="Copy citation"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        <div className="text-[10px] text-zinc-600 dark:text-zinc-400 italic font-medium">
          Indexed by Google Scholar, Semantic Scholar, Crossref, OpenAlex via embedded
          Dublin Core + highwire-style citation_* meta tags. ABN {ABN}.
        </div>
      </div>
    </section>
  );
}

export default AcademicCitation;
