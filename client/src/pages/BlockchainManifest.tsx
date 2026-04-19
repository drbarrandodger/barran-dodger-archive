import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Bitcoin, Hash, FileText, Shield, Download, Copy, Check,
  ExternalLink, Globe, Loader2, Database, BookOpen, Film, Search
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

interface TimestampRecord {
  id: number;
  slug: string;
  filename: string;
  sha256: string;
  otsReceipt: string | null;
  submittedAt: string | null;
  category: string;
  calendarUrl: string | null;
}

const CATEGORY_META: Record<string, { label: string; color: string; abbr: string; icon: React.ReactNode }> = {
  document:        { label: "PDF Documents",            color: "text-blue-400",   abbr: "DOC",  icon: <FileText size={13} /> },
  exhibit:         { label: "Evidence Exhibits",         color: "text-purple-400", abbr: "EXH",  icon: <Database size={13} /> },
  "forensic-page": { label: "Forensic Analysis Pages",  color: "text-amber-400",  abbr: "FPA",  icon: <Hash size={13} /> },
  page:            { label: "Archive Pages",             color: "text-green-400",  abbr: "PG",   icon: <BookOpen size={13} /> },
  "video-analysis":{ label: "Video Analysis",           color: "text-red-400",    abbr: "VID",  icon: <Film size={13} /> },
};

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
      className="shrink-0 text-zinc-700 hover:text-amber-400 transition-colors ml-1"
      title="Copy SHA-256"
    >
      {copied ? <Check size={10} className="text-green-400" /> : <Copy size={10} />}
    </button>
  );
}

export function BlockchainManifest() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const { data: records, isLoading } = useQuery<TimestampRecord[]>({
    queryKey: ["/api/bitcoin-timestamps"],
  });

  const catCounts = useMemo(() => {
    if (!records) return {};
    return records.reduce((acc, r) => { acc[r.category] = (acc[r.category] || 0) + 1; return acc; }, {} as Record<string, number>);
  }, [records]);

  const filtered = useMemo(() => {
    if (!records) return [];
    return records.filter(r => {
      const matchCat = activeCategory === "all" || r.category === activeCategory;
      const matchSearch = !search || r.filename.toLowerCase().includes(search.toLowerCase()) || r.sha256.includes(search.toLowerCase()) || r.slug.includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [records, search, activeCategory]);

  const total = records?.length ?? 0;
  const withOts = records?.filter(r => r.otsReceipt).length ?? 0;

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Complete Bitcoin Blockchain Manifest — All 845 Documents, Pages & Exhibits | Barran Dodger"
        description="The complete public record of every SHA-256 hash submitted to the Bitcoin blockchain for the Barran Dodger archive. 845 entries covering all PDFs, evidence exhibits, forensic analysis pages, and archive pages. Permanently anchored. Publicly verifiable."
        url="https://www.barrandodger.com/blockchain-manifest"
      />
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 pt-24 pb-16">

        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10 text-center">
          <div className="inline-flex items-center gap-3 bg-amber-950/30 border border-amber-700/40 rounded-2xl px-6 py-4 mb-6">
            <Bitcoin size={32} className="text-amber-400" />
            <div className="text-left">
              <h1 className="text-2xl font-black text-white">Complete Blockchain Timestamp Manifest</h1>
              <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mt-0.5">All {total} Records — Bitcoin Blockchain — OpenTimestamps Protocol</p>
            </div>
          </div>

          <p className="text-zinc-400 text-sm max-w-3xl mx-auto leading-relaxed mb-6">
            The complete public inventory of every SHA-256 cryptographic hash permanently anchored into the Bitcoin blockchain
            on behalf of the Barran Dodger archive. Every PDF document, evidence exhibit, forensic analysis page, and archive
            page has been individually hashed and submitted to the OpenTimestamps calendar network —
            independently verifiable by any person on Earth via ~15,000 Bitcoin nodes.
            <span className="text-amber-300 font-bold"> No institution can alter or remove what is written into Bitcoin.</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              { label: "Total Records", value: total.toLocaleString(), color: "text-amber-400" },
              { label: "OTS Submitted", value: withOts.toLocaleString(), color: "text-orange-400" },
              { label: "Categories", value: Object.keys(catCounts).length, color: "text-blue-400" },
              { label: "Bitcoin Nodes", value: "~15,000", color: "text-green-400" },
            ].map(s => (
              <div key={s.label} className="bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-3 text-center">
                <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Download manifest */}
          <a
            href="/api/bitcoin-timestamp/manifest.json"
            download="barrandodger-blockchain-manifest.json"
            className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors mr-3"
            data-testid="download-blockchain-manifest"
          >
            <Download size={15} /> Download Full Manifest (JSON)
          </a>
          <a
            href="/bitcoin-proof"
            className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            <Shield size={15} /> Blockchain Proof Page
          </a>
        </motion.div>

        {/* Filters + Search */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-6">
          <div className="flex flex-wrap gap-2 items-center mb-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-colors border ${activeCategory === "all" ? "bg-white text-black border-white" : "bg-zinc-900 text-zinc-400 border-zinc-700 hover:border-zinc-500"}`}
              data-testid="filter-all"
            >
              All ({total})
            </button>
            {Object.entries(catCounts).sort(([, a], [, b]) => b - a).map(([cat, count]) => {
              const meta = CATEGORY_META[cat] || { label: cat, color: "text-zinc-400", abbr: cat.toUpperCase().slice(0,3), icon: null };
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? "all" : cat)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-colors border flex items-center gap-1.5 ${activeCategory === cat ? "bg-zinc-700 text-white border-zinc-500" : "bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-zinc-600"}`}
                  data-testid={`filter-${cat}`}
                >
                  <span className={meta.color}>{meta.abbr}</span> {count.toLocaleString()}
                </button>
              );
            })}
            <div className="ml-auto flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-1.5">
              <Search size={12} className="text-zinc-500" />
              <input
                type="text"
                placeholder="Search name or hash…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent text-xs text-white placeholder:text-zinc-600 focus:outline-none w-44"
                data-testid="input-manifest-search"
              />
            </div>
          </div>
          <p className="text-[11px] text-zinc-400">Showing {filtered.length.toLocaleString()} of {total.toLocaleString()} records</p>
        </motion.div>

        {/* Record list */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          {isLoading ? (
            <div className="flex items-center justify-center py-20 text-zinc-500">
              <Loader2 size={24} className="animate-spin mr-3" /> Loading {total > 0 ? total : "all"} blockchain records…
            </div>
          ) : (
            <div className="space-y-1">
              {filtered.map((r, idx) => {
                const meta = CATEGORY_META[r.category] || { label: r.category, color: "text-zinc-500", abbr: "?", icon: <FileText size={12} /> };
                return (
                  <div
                    key={r.id}
                    className="flex items-start gap-3 px-3 py-2.5 rounded-lg bg-zinc-900/30 hover:bg-zinc-800/50 transition-colors border border-zinc-800/40 hover:border-zinc-700/60 group"
                    data-testid={`manifest-row-${r.id}`}
                  >
                    {/* Index + category */}
                    <div className="shrink-0 flex items-center gap-1.5 w-20">
                      <span className="text-[10px] text-zinc-400 font-mono w-6 text-right">{idx + 1}</span>
                      <span className={`text-[9px] font-black ${meta.color} bg-zinc-800 px-1.5 py-0.5 rounded`}>{meta.abbr}</span>
                    </div>

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-white font-semibold truncate leading-tight">{r.filename}</p>
                      <div className="flex items-center mt-0.5">
                        <code className="text-[9px] text-amber-500/80 font-mono truncate">{r.sha256}</code>
                        <CopyBtn text={r.sha256} />
                      </div>
                      {r.submittedAt && (
                        <p className="text-[9px] text-zinc-500 mt-0.5 leading-none">
                          {new Date(r.submittedAt).toISOString().replace("T", " ").slice(0, 19)} UTC
                        </p>
                      )}
                    </div>

                    {/* OTS badge + verify links */}
                    <div className="shrink-0 flex items-center gap-2">
                      {r.otsReceipt && (
                        <span className="text-[9px] font-black text-amber-400 hidden sm:block">⛓ BTC</span>
                      )}
                      <a
                        href={`https://opentimestamps.org/timestamp/${r.sha256}`}
                        target="_blank" rel="noopener noreferrer"
                        title="Verify on OpenTimestamps"
                        className="text-zinc-500 hover:text-amber-400 transition-colors"
                      >
                        <ExternalLink size={11} />
                      </a>
                      <a
                        href={`https://www.blockchain.com/explorer/search?search=${r.sha256}`}
                        target="_blank" rel="noopener noreferrer"
                        title="Search Bitcoin blockchain"
                        className="text-zinc-500 hover:text-orange-400 transition-colors"
                      >
                        <Globe size={11} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Footer note */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-10">
          <div className="bg-zinc-950 border border-zinc-800/60 rounded-xl p-5 text-center">
            <p className="text-xs text-zinc-500 leading-relaxed">
              © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164) · 55B Archbold Road, Long Jetty NSW ·
              Submitted to ICC The Hague under Article 7 · UNHCR Geneva · All {total} records SHA-256 hashed and anchored to Bitcoin blockchain via OpenTimestamps ·
              Every hash is permanently, publicly, independently verifiable. This cannot be altered. This cannot be erased.
            </p>
          </div>
        </motion.div>

      </main>
      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
