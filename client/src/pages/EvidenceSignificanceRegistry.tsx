import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Shield, Search, Download, ExternalLink, FileText, Calendar, User, ChevronLeft, ChevronRight, Filter, Database, AlertCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

interface EvidenceEntry {
  number: number;
  date: string;
  dateSort: string;
  category: string;
  title: string;
  authors: string;
  pages: number;
  folder: string;
  filename: string;
  link: string;
  summary: string;
  significance: string;
}

interface LocalPDFEntry {
  filename: string;
  sizeKB: number;
  dateAdded: string;
  title: string;
  category: string;
  significance: string;
  downloadPath: string;
}

interface RegistryStats {
  totalRegisterEntries: number;
  totalLocalPDFs: number;
  totalDocuments: number;
  earliestDate: string;
  latestDate: string;
  categoryBreakdown: Record<string, number>;
  localTotalSizeKB: number;
}

interface PaginatedResponse {
  entries: EvidenceEntry[];
  total: number;
  page: number;
  totalPages: number;
  limit: number;
}

const CATEGORY_COLOURS: Record<string, string> = {
  NDIS: "bg-blue-900/40 text-blue-300 border-blue-700",
  NDIA: "bg-blue-900/40 text-blue-300 border-blue-700",
  FOI: "bg-purple-900/40 text-purple-300 border-purple-700",
  WorkCover: "bg-orange-900/40 text-orange-300 border-orange-700",
  Superannuation: "bg-yellow-900/40 text-yellow-300 border-yellow-700",
  VCAT: "bg-teal-900/40 text-teal-300 border-teal-700",
  Comcare: "bg-red-900/40 text-red-300 border-red-700",
  AHRC: "bg-pink-900/40 text-pink-300 border-pink-700",
  VOCAT: "bg-rose-900/40 text-rose-300 border-rose-700",
  Police: "bg-slate-900/40 text-slate-300 border-slate-700",
  LECC: "bg-indigo-900/40 text-indigo-300 border-indigo-700",
  General: "bg-zinc-800/60 text-zinc-300 border-zinc-600",
};

function getCategoryColour(cat: string): string {
  for (const [key, cls] of Object.entries(CATEGORY_COLOURS)) {
    if (cat.toUpperCase().includes(key.toUpperCase())) return cls;
  }
  return "bg-zinc-800/60 text-zinc-300 border-zinc-600";
}

function RegistryEntryCard({ entry }: { entry: EvidenceEntry }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      data-testid={`registry-entry-${entry.number}`}
      className="border border-zinc-700/60 rounded-lg bg-zinc-900/50 p-4 hover:border-orange-500/25 transition-colors"
    >
      <div className="flex flex-wrap items-start gap-2 mb-2">
        <span className="text-xs font-mono text-zinc-500 shrink-0 mt-0.5">#{entry.number}</span>
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-xs font-medium shrink-0 ${getCategoryColour(entry.category)}`}
        >
          {entry.category.split(";")[0].trim()}
        </span>
        <span className="flex items-center gap-1 text-xs text-orange-400/80 shrink-0">
          <Calendar size={11} />
          {entry.date}
        </span>
        {entry.pages > 0 && (
          <span className="text-xs text-zinc-500 shrink-0">{entry.pages}pp</span>
        )}
      </div>

      <h3 className="text-sm font-semibold text-zinc-100 mb-1 leading-snug">{entry.title}</h3>

      {entry.authors && (
        <p className="flex items-center gap-1 text-xs text-zinc-400 mb-2">
          <User size={11} className="shrink-0" />
          {entry.authors}
        </p>
      )}

      <div className="mt-2 border-t border-zinc-700/40 pt-2">
        <p className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-1">AI Statement of Significance</p>
        <p className="text-xs text-zinc-300 leading-relaxed">{entry.significance}</p>
      </div>

      {(entry.summary || entry.link) && (
        <div className="mt-2 flex items-center gap-3">
          {entry.summary && (
            <button
              data-testid={`toggle-summary-${entry.number}`}
              onClick={() => setExpanded(!expanded)}
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {expanded ? "Hide summary ▲" : "Show archival summary ▼"}
            </button>
          )}
          {entry.link && (
            <a
              href={entry.link}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-entry-${entry.number}`}
              className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={11} />
              View on myaidrive
            </a>
          )}
        </div>
      )}

      {expanded && entry.summary && (
        <div className="mt-2 bg-zinc-800/50 rounded p-3 text-xs text-zinc-400 leading-relaxed border border-zinc-700/30">
          {entry.summary}
        </div>
      )}
    </div>
  );
}

function LocalPDFCard({ entry }: { entry: LocalPDFEntry }) {
  return (
    <div
      data-testid={`local-pdf-${entry.filename}`}
      className="border border-zinc-700/60 rounded-lg bg-zinc-900/50 p-4 hover:border-emerald-700/50 transition-colors"
    >
      <div className="flex flex-wrap items-start gap-2 mb-2">
        <span
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded border text-xs font-medium bg-emerald-900/40 text-emerald-300 border-emerald-700 shrink-0"
        >
          {entry.category}
        </span>
        <span className="flex items-center gap-1 text-xs text-orange-400/80 shrink-0">
          <Calendar size={11} />
          Added {entry.dateAdded}
        </span>
        <span className="text-xs text-zinc-500 shrink-0">{entry.sizeKB > 1024 ? `${(entry.sizeKB / 1024).toFixed(1)} MB` : `${entry.sizeKB} KB`}</span>
      </div>

      <h3 className="text-sm font-semibold text-zinc-100 mb-1 leading-snug">{entry.title}</h3>
      <p className="text-xs text-zinc-500 font-mono mb-2 break-all">{entry.filename}</p>

      <div className="mt-2 border-t border-zinc-700/40 pt-2">
        <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">AI Statement of Significance</p>
        <p className="text-xs text-zinc-300 leading-relaxed">{entry.significance}</p>
      </div>

      <div className="mt-3">
        <a
          href={entry.downloadPath}
          download
          data-testid={`download-local-${entry.filename}`}
          className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <Download size={11} />
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default function EvidenceSignificanceRegistry() {
  const [activeTab, setActiveTab] = useState<"register" | "local">("register");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const LIMIT = 50;

  // Debounce search input
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);
    return () => clearTimeout(t);
  }, [search]);

  const { data: stats } = useQuery<RegistryStats>({
    queryKey: ["/api/evidence-registry/stats"],
  });

  const { data: categories } = useQuery<string[]>({
    queryKey: ["/api/evidence-registry/categories"],
  });

  const { data: registerData, isLoading: registerLoading } = useQuery<PaginatedResponse>({
    queryKey: ["/api/evidence-registry", page, debouncedSearch, selectedCategory],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: String(page),
        limit: String(LIMIT),
        search: debouncedSearch,
        category: selectedCategory,
      });
      const res = await fetch(`/api/evidence-registry?${params}`);
      if (!res.ok) throw new Error("Failed to fetch register");
      return res.json();
    },
    enabled: activeTab === "register",
  });

  const { data: localData, isLoading: localLoading } = useQuery<LocalPDFEntry[]>({
    queryKey: ["/api/evidence-registry/local"],
    enabled: activeTab === "local",
  });

  const filteredLocal = localData?.filter((e) => {
    if (!debouncedSearch) return true;
    const s = debouncedSearch.toLowerCase();
    return (
      e.title.toLowerCase().includes(s) ||
      e.filename.toLowerCase().includes(s) ||
      e.category.toLowerCase().includes(s) ||
      e.significance.toLowerCase().includes(s)
    );
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Evidence Significance Registry — 2,301 Timestamped Documents | Barran Dodger"
        description="Complete AI-annotated registry of 2,301 blockchain-verified timestamped documents submitted to the ICC under Article 7 and UNHCR Geneva. Includes significance statements for all locally hosted PDFs."
        path="/evidence-significance-registry"
        keywords="evidence significance registry whistleblower Australia, AI annotated evidence registry, 2301 blockchain timestamped documents, Bitcoin Block 897241 evidence registry, ICC Article 7 document significance, OHCHR UR/UST/23/AUS/17 evidence list, SHA-256 document registry, significance statements government documents, primary source document registry, each document AI significance statement, 3643 government documents registry, whistleblower evidence annotated, forensic significance per document, NDIS fraud evidence registry, psychiatric abuse evidence list, 35 years evidence significance"
        url="https://www.barrandodger.com/evidence-significance-registry"
      />
      <ReadingProgress />
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 pt-24 pb-16">

        {/* Hero Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 rounded-full px-4 py-1.5 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Shield size={13} />
            Blockchain-Verified Archive
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Evidence Significance<br />
            <span className="text-orange-400">Registry</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Complete AI-annotated registry of <strong className="text-white">2,301 timestamped documents</strong> from
            the master evidence archive, plus <strong className="text-white">115 locally hosted PDFs</strong> —
            each with an independent AI statement of forensic significance.
            Submitted to the ICC under Article 7 and filed with the UNHCR Geneva.
          </p>
        </div>

        {/* Stats row */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <div className="bg-zinc-900/70 border border-zinc-700/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-orange-400">{stats.totalRegisterEntries.toLocaleString()}</div>
              <div className="text-xs text-zinc-400 mt-1">Archive Documents</div>
            </div>
            <div className="bg-zinc-900/70 border border-zinc-700/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-emerald-400">{stats.totalLocalPDFs}</div>
              <div className="text-xs text-zinc-400 mt-1">Locally Hosted PDFs</div>
            </div>
            <div className="bg-zinc-900/70 border border-zinc-700/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-blue-400">{stats.totalDocuments.toLocaleString()}</div>
              <div className="text-xs text-zinc-400 mt-1">Total Documents</div>
            </div>
            <div className="bg-zinc-900/70 border border-zinc-700/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-black text-purple-400">
                {stats.localTotalSizeKB > 1024 * 1024
                  ? `${(stats.localTotalSizeKB / 1024 / 1024).toFixed(1)}GB`
                  : `${(stats.localTotalSizeKB / 1024).toFixed(0)}MB`}
              </div>
              <div className="text-xs text-zinc-400 mt-1">Local Archive Size</div>
            </div>
          </div>
        )}

        {/* Download ZIP CTA */}
        <div className="bg-zinc-900/80 border border-orange-500/25 rounded-xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-white mb-1">
                Download All Forensic &amp; Video Analyses — Complete Bundle
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                ZIP bundle containing all <strong className="text-white">54 forensic analyses</strong>,{" "}
                <strong className="text-white">5 video analysis reports</strong>,{" "}
                <strong className="text-white">3 extended essays</strong>, and the{" "}
                <strong className="text-white">master evidence register</strong> (2,301 timestamped documents).
                One click. Every YouTube examination, reflection, and forensic report — blockchain-verified, ICC-submitted.
              </p>
            </div>
            <a
              href="/api/evidence-registry/analyses-bundle"
              data-testid="btn-download-analyses-bundle"
              className="shrink-0 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap shadow-lg shadow-orange-500/30"
            >
              <Download size={16} />
              Download All Analyses ZIP
            </a>
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center">
            <div className="bg-zinc-800/60 rounded px-3 py-2 border border-zinc-700/40">
              <div className="font-bold text-orange-400 text-base">54</div>
              <div className="text-zinc-400">Forensic Analyses</div>
            </div>
            <div className="bg-zinc-800/60 rounded px-3 py-2 border border-zinc-700/40">
              <div className="font-bold text-blue-400 text-base">5</div>
              <div className="text-zinc-400">Video Reports</div>
            </div>
            <div className="bg-zinc-800/60 rounded px-3 py-2 border border-zinc-700/40">
              <div className="font-bold text-purple-400 text-base">589</div>
              <div className="text-zinc-400">Verified Propositions</div>
            </div>
            <div className="bg-zinc-800/60 rounded px-3 py-2 border border-zinc-700/40">
              <div className="font-bold text-emerald-400 text-base">0</div>
              <div className="text-zinc-400">Contradictions</div>
            </div>
          </div>
        </div>

        {/* AI Note */}
        <div className="bg-orange-500/10 border border-orange-500/25 rounded-lg p-4 mb-8 flex gap-3">
          <AlertCircle size={16} className="text-orange-400 shrink-0 mt-0.5" />
          <p className="text-xs text-zinc-300 leading-relaxed">
            <strong className="text-orange-400">AI Statements of Significance:</strong> Each document in this registry has been assessed
            by AI against the ICC Article 7 submission framework, the 35-year documented persecution record, and the
            forensic archive of Dr. Richard William McLean (Barran Dodger). Statements are generated from document
            metadata, archival summaries, category classification, and cross-reference patterns within the 2,304-document blockchain-verified record.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-zinc-900/60 border border-zinc-700/50 rounded-lg p-1 w-fit">
          <button
            data-testid="tab-register"
            onClick={() => { setActiveTab("register"); setPage(1); setSearch(""); setSelectedCategory("All"); }}
            className={`px-5 py-2 rounded-md text-sm font-semibold transition-all ${activeTab === "register" ? "bg-orange-600 text-white shadow" : "text-zinc-400 hover:text-white"}`}
          >
            <span className="flex items-center gap-2">
              <Database size={14} />
              Full Archive Register
              {stats && <span className="text-xs opacity-75">({stats.totalRegisterEntries.toLocaleString()})</span>}
            </span>
          </button>
          <button
            data-testid="tab-local"
            onClick={() => { setActiveTab("local"); setSearch(""); }}
            className={`px-5 py-2 rounded-md text-sm font-semibold transition-all ${activeTab === "local" ? "bg-emerald-700 text-white shadow" : "text-zinc-400 hover:text-white"}`}
          >
            <span className="flex items-center gap-2">
              <FileText size={14} />
              Locally Hosted PDFs
              {stats && <span className="text-xs opacity-75">({stats.totalLocalPDFs})</span>}
            </span>
          </button>
        </div>

        {/* Search + Filter row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              data-testid="input-search-registry"
              type="text"
              placeholder={activeTab === "register" ? "Search by title, authors, date, summary…" : "Search locally hosted PDFs…"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-zinc-900/70 border border-zinc-700/60 rounded-lg text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/25"
            />
          </div>
          {activeTab === "register" && categories && categories.length > 0 && (
            <div className="relative">
              <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <select
                data-testid="select-category-filter"
                value={selectedCategory}
                onChange={(e) => { setSelectedCategory(e.target.value); setPage(1); }}
                className="pl-9 pr-8 py-2.5 bg-zinc-900/70 border border-zinc-700/60 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-orange-500/25 appearance-none min-w-[180px]"
              >
                <option value="All">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Register Tab */}
        {activeTab === "register" && (
          <>
            {registerLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="border border-zinc-700/40 rounded-lg bg-zinc-900/30 p-4 animate-pulse h-28" />
                ))}
              </div>
            ) : registerData ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs text-zinc-500">
                    Showing {Math.min(registerData.total, (page - 1) * LIMIT + 1)}–{Math.min(registerData.total, page * LIMIT)} of{" "}
                    <strong className="text-zinc-300">{registerData.total.toLocaleString()}</strong> documents
                    {debouncedSearch && ` matching "${debouncedSearch}"`}
                  </p>
                  <a
                    href="/documents/master-evidence-register.txt"
                    download
                    data-testid="download-register"
                    className="flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <Download size={12} />
                    Download full register
                  </a>
                </div>

                <div className="space-y-3">
                  {registerData.entries.map((entry) => (
                    <RegistryEntryCard key={entry.number} entry={entry} />
                  ))}
                </div>

                {/* Pagination */}
                {registerData.totalPages > 1 && (
                  <div className="flex items-center justify-center gap-3 mt-8">
                    <button
                      data-testid="btn-prev-page"
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-700/60 bg-zinc-900/60 text-sm text-zinc-300 hover:border-orange-500/25 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft size={14} />
                      Previous
                    </button>
                    <span className="text-sm text-zinc-400">
                      Page <strong className="text-white">{page}</strong> of{" "}
                      <strong className="text-white">{registerData.totalPages}</strong>
                    </span>
                    <button
                      data-testid="btn-next-page"
                      onClick={() => setPage((p) => Math.min(registerData.totalPages, p + 1))}
                      disabled={page === registerData.totalPages}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-700/60 bg-zinc-900/60 text-sm text-zinc-300 hover:border-orange-500/25 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                      <ChevronRight size={14} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16 text-zinc-500">No entries found.</div>
            )}
          </>
        )}

        {/* Local PDFs Tab */}
        {activeTab === "local" && (
          <>
            {localLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="border border-zinc-700/40 rounded-lg bg-zinc-900/30 p-4 animate-pulse h-28" />
                ))}
              </div>
            ) : filteredLocal ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs text-zinc-500">
                    Showing <strong className="text-zinc-300">{filteredLocal.length}</strong> locally hosted PDFs
                    {debouncedSearch && ` matching "${debouncedSearch}"`}
                  </p>
                  <span className="text-xs text-zinc-500">
                    Total size: {stats ? (stats.localTotalSizeKB > 1024 ? `${(stats.localTotalSizeKB / 1024).toFixed(0)} MB` : `${stats.localTotalSizeKB} KB`) : "—"}
                  </span>
                </div>
                <div className="space-y-3">
                  {filteredLocal.map((entry) => (
                    <LocalPDFCard key={entry.filename} entry={entry} />
                  ))}
                </div>
              </>
            ) : null}
          </>
        )}

        {/* Footer trust note */}
        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-xs text-zinc-600">
          <p className="mb-1">
            Barran Dodger Legal &amp; Ethical Trust Fund | ABN 78 833 496 164
          </p>
          <p>
            All documents are blockchain-verified. Registry generated April 2026.
            Submitted to the International Criminal Court (The Hague) under Article 7 and filed with UNHCR Geneva.
          </p>
        </div>
      </main>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
