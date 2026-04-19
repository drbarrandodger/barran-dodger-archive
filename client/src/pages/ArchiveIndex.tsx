import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, FileText, Download, RefreshCw, Archive, FolderOpen } from "lucide-react";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

interface PdfEntry {
  name: string;
  path: string;
  category: string;
  size: number;
  humanName: string;
}

interface PdfListResponse {
  total: number;
  byCategory: Record<string, PdfEntry[]>;
  updatedAt: string;
}

const CATEGORY_ORDER = [
  "Core",
  "Core Documents",
  "Forensic Analyses",
  "Video Analyses",
  "Uploaded Evidence",
];

const CATEGORY_COLORS: Record<string, string> = {
  "Core": "bg-amber-900/40 border-amber-600/40 text-amber-300",
  "Core Documents": "bg-zinc-800/60 border-zinc-600/40 text-zinc-300",
  "Forensic Analyses": "bg-indigo-900/40 border-indigo-600/40 text-indigo-300",
  "Video Analyses": "bg-rose-900/40 border-rose-600/40 text-rose-300",
  "Uploaded Evidence": "bg-emerald-900/40 border-emerald-600/40 text-emerald-300",
};

const CATEGORY_BADGE: Record<string, string> = {
  "Core": "bg-amber-700/60 text-amber-200",
  "Core Documents": "bg-zinc-700/60 text-zinc-200",
  "Forensic Analyses": "bg-indigo-700/60 text-indigo-200",
  "Video Analyses": "bg-rose-700/60 text-rose-200",
  "Uploaded Evidence": "bg-emerald-700/60 text-emerald-200",
};

function formatSize(bytes: number): string {
  if (bytes === 0) return "";
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

export default function ArchiveIndex() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const { data, isLoading, dataUpdatedAt, refetch, isRefetching } = useQuery<PdfListResponse>({
    queryKey: ["/api/archive/pdf-list"],
    queryFn: () => fetch("/api/archive/pdf-list", { cache: "no-store" }).then(r => r.json()),
    refetchInterval: 60000,
    staleTime: 0,
  });

  const categories = useMemo(() => {
    if (!data) return [];
    const found = Object.keys(data.byCategory);
    const ordered = CATEGORY_ORDER.filter(c => found.includes(c));
    const rest = found.filter(c => !CATEGORY_ORDER.includes(c));
    return ["All", ...ordered, ...rest];
  }, [data]);

  const allEntries = useMemo((): PdfEntry[] => {
    if (!data) return [];
    const ordered = CATEGORY_ORDER.filter(c => data.byCategory[c]);
    const rest = Object.keys(data.byCategory).filter(c => !CATEGORY_ORDER.includes(c));
    return [...ordered, ...rest].flatMap(cat => data.byCategory[cat] ?? []);
  }, [data]);

  const filtered = useMemo(() => {
    let list = activeCategory === "All" ? allEntries : (data?.byCategory[activeCategory] ?? []);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(e => e.humanName.toLowerCase().includes(q) || e.name.toLowerCase().includes(q));
    }
    return list;
  }, [allEntries, data, activeCategory, search]);

  const grouped = useMemo(() => {
    if (activeCategory !== "All" || search.trim()) return null;
    const g: Record<string, PdfEntry[]> = {};
    const ordered = CATEGORY_ORDER.filter(c => data?.byCategory[c]);
    const rest = Object.keys(data?.byCategory ?? {}).filter(c => !CATEGORY_ORDER.includes(c));
    for (const cat of [...ordered, ...rest]) {
      if (data?.byCategory[cat]) g[cat] = data.byCategory[cat];
    }
    return g;
  }, [activeCategory, search, data]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SEO
        title="Complete Archive Index — 749 PDFs | Barran Dodger"
        description="Full itemised list of every PDF in the Barran Dodger evidence archive. 749 documents covering 35 years of documented government corruption, forensic analyses, legal filings, and uploaded evidence."
        keywords="Barran Dodger archive, whistleblower documents, Australian government corruption evidence, PDF archive index"
      />
      <ReadingProgress />
      <Navigation />

      <main className="pt-24 pb-20 px-4 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/30 border border-amber-700/40 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Archive className="h-3 w-3" />
            Live Archive Index
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Complete Document Archive
          </h1>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed">
            Every PDF in the Barran Dodger archive — updated automatically whenever a new document is added. Blockchain-verified. ICC-submitted. UNHCR-lodged.
          </p>
          {data && (
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-amber-400 font-mono font-bold text-lg">
                {data.total.toLocaleString()} PDFs
              </span>
              {Object.entries(data.byCategory).map(([cat, items]) => (
                <span key={cat} className={`px-3 py-1 rounded-full border text-xs font-medium ${CATEGORY_BADGE[cat] ?? "bg-zinc-800 border-zinc-700 text-zinc-300"}`}>
                  {cat}: {items.length}
                </span>
              ))}
            </div>
          )}
          <div className="mt-3 flex items-center justify-center gap-2">
            <button
              onClick={() => refetch()}
              className="text-xs text-zinc-500 hover:text-amber-400 flex items-center gap-1 transition-colors"
              data-testid="button-refresh-archive"
            >
              <RefreshCw className={`h-3 w-3 ${isRefetching ? "animate-spin" : ""}`} />
              {isRefetching ? "Refreshing…" : "Refresh list"}
            </button>
            {dataUpdatedAt ? (
              <span className="text-xs text-zinc-600">· Updated {new Date(dataUpdatedAt).toLocaleTimeString()}</span>
            ) : null}
          </div>
        </div>

        {/* Search + Download all */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
            <Input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by document name…"
              className="pl-9 bg-zinc-900 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-600"
              data-testid="input-search-archive"
            />
          </div>
          <a
            href="/api/archive/divine-download"
            download
            data-testid="button-download-full-archive"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-bold text-sm rounded transition-colors whitespace-nowrap"
          >
            <Download className="h-4 w-4" />
            Download All ({data?.total ?? "749"}+ PDFs)
          </a>
        </div>

        {/* Category tabs */}
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`tab-category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                  activeCategory === cat
                    ? "bg-amber-700 border-amber-600 text-white"
                    : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-amber-700/50 hover:text-zinc-200"
                }`}
              >
                {cat}
                {cat !== "All" && data?.byCategory[cat] ? ` (${data.byCategory[cat].length})` : ""}
                {cat === "All" && data ? ` (${data.total})` : ""}
              </button>
            ))}
          </div>
        )}

        {/* Loading */}
        {isLoading && (
          <div className="text-center py-20 text-zinc-500">
            <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-3 text-amber-600" />
            <p>Loading archive…</p>
          </div>
        )}

        {/* Search / flat results */}
        {!isLoading && (search.trim() || activeCategory !== "All") && (
          <div className="space-y-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-zinc-500">
                <FileText className="h-10 w-10 mx-auto mb-3 opacity-30" />
                <p>No documents match "{search}"</p>
              </div>
            ) : (
              filtered.map((entry, i) => (
                <PdfRow key={`${entry.name}-${i}`} entry={entry} />
              ))
            )}
            <p className="text-xs text-zinc-600 pt-2 text-center">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>
          </div>
        )}

        {/* Grouped results (default view) */}
        {!isLoading && !search.trim() && activeCategory === "All" && grouped && (
          <div className="space-y-8">
            {Object.entries(grouped).map(([cat, items]) => (
              <CategorySection key={cat} category={cat} items={items} />
            ))}
          </div>
        )}
      </main>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}

function CategorySection({ category, items }: { category: string; items: PdfEntry[] }) {
  const [expanded, setExpanded] = useState(category !== "Uploaded Evidence");
  const colorClass = CATEGORY_COLORS[category] ?? "bg-zinc-800/60 border-zinc-600/40 text-zinc-300";

  return (
    <div className={`rounded-xl border ${colorClass} overflow-hidden`}>
      <button
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/5 transition-colors"
        onClick={() => setExpanded(e => !e)}
        data-testid={`section-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div className="flex items-center gap-3">
          <FolderOpen className="h-4 w-4 opacity-70" />
          <span className="font-bold text-base">{category}</span>
          <span className="text-xs opacity-60 font-mono">{items.length} documents</span>
        </div>
        <span className="text-xs opacity-50">{expanded ? "▲ collapse" : "▼ expand"}</span>
      </button>
      {expanded && (
        <div className="divide-y divide-white/5 border-t border-white/10">
          {items.map((entry, i) => (
            <PdfRow key={`${entry.name}-${i}`} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}

function PdfRow({ entry }: { entry: PdfEntry }) {
  const hasDirectLink = !!entry.path;
  return (
    <div className="flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition-colors group">
      <FileText className="h-4 w-4 text-zinc-500 group-hover:text-amber-400 transition-colors flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-zinc-200 group-hover:text-white transition-colors truncate font-medium" title={entry.humanName}>
          {entry.humanName}
        </p>
        <p className="text-xs text-zinc-600 truncate font-mono" title={entry.name}>
          {entry.name.split('/').pop()}
        </p>
      </div>
      {entry.size > 0 && (
        <span className="text-xs text-zinc-600 font-mono whitespace-nowrap flex-shrink-0">{formatSize(entry.size)}</span>
      )}
      {hasDirectLink ? (
        <a
          href={entry.path}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 p-1.5 rounded opacity-0 group-hover:opacity-100 hover:bg-amber-700/30 text-amber-400 transition-all"
          title={`View ${entry.humanName}`}
          data-testid={`link-pdf-${entry.name.replace(/[^a-zA-Z0-9]/g, "-").slice(0, 40)}`}
        >
          <Download className="h-3.5 w-3.5" />
        </a>
      ) : (
        <div className="w-7 flex-shrink-0" />
      )}
    </div>
  );
}
