import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Bitcoin, Hash, FileText, Shield, Download, Copy, Check,
  ExternalLink, Globe, Loader2, Database, BookOpen, Film,
  Search, Lock, Zap, AlertTriangle, ChevronDown, ChevronUp
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import { useLiveDownloadTotal, formatCount } from "@/hooks/use-live-stats";

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

const CATEGORY_META: Record<string, { label: string; color: string; bg: string; abbr: string; icon: React.ReactNode; description: string }> = {
  document:         { label: "PDF Documents",           color: "text-amber-400",   bg: "bg-amber-900/30 border-amber-700/40",   abbr: "PDF", icon: <FileText size={13} />, description: "Books, testimonies, gospels, evidence files, and major publications" },
  exhibit:          { label: "Evidence Exhibits",        color: "text-purple-400",  bg: "bg-purple-900/30 border-purple-700/40",  abbr: "EXH", icon: <Database size={13} />, description: "Primary-source evidentiary exhibits and supporting documentation" },
  "forensic-page":  { label: "Forensic Analysis Pages", color: "text-yellow-400",  bg: "bg-yellow-900/20 border-yellow-700/30",  abbr: "FPA", icon: <Hash size={13} />, description: "77 forensic corroboration analyses — all 675+ propositions confirmed" },
  page:             { label: "Archive Pages",            color: "text-green-400",   bg: "bg-green-900/20 border-green-700/30",    abbr: "PG",  icon: <BookOpen size={13} />, description: "Core testimony, evidence, and ICC/UNHCR submission pages" },
  "video-analysis": { label: "Video Analysis",          color: "text-red-400",     bg: "bg-red-900/20 border-red-700/30",        abbr: "VID", icon: <Film size={13} />, description: "Video forensic analyses and transcript corroborations" },
  "sos-page":       { label: "SOS Urgent Advisory",     color: "text-rose-400",    bg: "bg-rose-900/30 border-rose-700/40",      abbr: "SOS", icon: <AlertTriangle size={13} />, description: "Urgent protection request — life at risk — ICC and UNHCR notified" },
};

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="shrink-0 hover:text-amber-400 transition-colors text-indigo-400/60 ml-2"
      title="Copy SHA-256 hash"
      data-testid={`copy-hash-${text.slice(0, 8)}`}
    >
      {copied ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
    </button>
  );
}

function RecordCard({ record, idx }: { record: TimestampRecord; idx: number }) {
  const [expanded, setExpanded] = useState(false);
  const meta = CATEGORY_META[record.category] || { label: record.category, color: "text-zinc-400", bg: "bg-zinc-900/30 border-zinc-700/30", abbr: "?", icon: <FileText size={12} />, description: "" };
  const dateStr = record.submittedAt ? new Date(record.submittedAt).toUTCString().slice(0, 22) + " UTC" : "Pending";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.3, delay: Math.min(idx * 0.005, 0.15) }}
      className={`rounded-xl border ${meta.bg} overflow-hidden`}
      data-testid={`seal-record-${record.id}`}
    >
      <div className="px-4 py-3">
        {/* Title row */}
        <div className="flex items-start gap-2 mb-1.5">
          <span className={`shrink-0 text-[9px] font-black ${meta.color} bg-black/30 px-1.5 py-0.5 rounded border border-current/30 mt-0.5`}>{meta.abbr}</span>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-semibold leading-tight">{record.filename}</p>
            <p className="text-indigo-300/40 text-[9px] font-mono mt-0.5">Sealed: {dateStr}</p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="shrink-0 text-indigo-400/40 hover:text-amber-400 transition-colors"
            data-testid={`expand-record-${record.id}`}
          >
            {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>

        {/* SHA-256 line — always visible, hash is "attached to the name" */}
        <div className="flex items-center gap-1 bg-black/20 rounded px-2 py-1.5 border border-amber-500/10">
          <Lock size={9} className="shrink-0 text-amber-500/70" />
          <span className="text-[9px] text-amber-400/50 font-mono uppercase tracking-widest shrink-0">SHA-256:</span>
          <code className="text-[10px] text-amber-300/80 font-mono flex-1 min-w-0 truncate">{record.sha256}</code>
          <CopyBtn text={record.sha256} />
          {record.otsReceipt && (
            <span className="shrink-0 text-[8px] font-black text-orange-400 ml-1" title="Submitted to Bitcoin via OpenTimestamps">⛓BTC</span>
          )}
        </div>

        {/* Expanded: full hash + verify links */}
        {expanded && (
          <div className="mt-2 space-y-2">
            <div className="bg-black/30 rounded p-2 border border-amber-500/15">
              <p className="text-[9px] text-amber-400/60 font-mono uppercase tracking-widest mb-1">Full SHA-256 Hash (Bitcoin Blockchain)</p>
              <code className="text-[10px] text-amber-300 font-mono break-all leading-relaxed">{record.sha256}</code>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={`https://opentimestamps.org/timestamp/${record.sha256}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-lg bg-amber-900/30 border border-amber-700/40 text-amber-300 hover:bg-amber-800/40 transition-colors"
                data-testid={`verify-ots-${record.id}`}
              >
                <ExternalLink size={10} /> Verify on OpenTimestamps
              </a>
              <a
                href={`https://www.blockchain.com/explorer/search?search=${record.sha256}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-lg bg-indigo-900/30 border border-indigo-700/40 text-indigo-300 hover:bg-indigo-800/40 transition-colors"
                data-testid={`verify-blockchain-${record.id}`}
              >
                <Globe size={10} /> Bitcoin Explorer
              </a>
            </div>
            <p className="text-[9px] text-indigo-400/40 leading-relaxed font-mono">
              Document Identity: {record.filename} — SHA-256: {record.sha256} — Bitcoin Blockchain — OpenTimestamps — Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164)
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function BlockchainSealRegistry() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showInstructions, setShowInstructions] = useState(false);
  const { data: totalDownloads } = useLiveDownloadTotal();
  const liveCount = formatCount(totalDownloads, "417,566+");

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
      const q = search.toLowerCase();
      const matchSearch = !q || r.filename.toLowerCase().includes(q) || r.sha256.includes(q) || r.slug.includes(q);
      return matchCat && matchSearch;
    });
  }, [records, search, activeCategory]);

  const total = records?.length ?? 0;
  const withOts = records?.filter(r => r.otsReceipt).length ?? 0;

  return (
    <div className="min-h-screen bg-[#07082a] text-white">
      <SEO
        title={`Blockchain Seal Registry — Every Document Permanently Embedded in Bitcoin | Barran Dodger (ABN 78 833 496 164)`}
        description={`The complete public registry of every PDF, testimony, gospel, book, forensic analysis, and evidence file from the Barran Dodger archive — each permanently embedded in the Bitcoin blockchain with its SHA-256 cryptographic hash. ${total}+ records. Zero alterations possible. ABN 78 833 496 164.`}
        canonicalUrl="https://www.barrandodger.com/blockchain-seal-registry"
      />
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-3 border border-amber-500/30 rounded-2xl px-6 py-4 bg-amber-900/10">
            <Bitcoin className="w-8 h-8 text-amber-400 shrink-0" />
            <div className="text-left">
              <p className="text-[10px] font-mono text-amber-400/60 uppercase tracking-widest">Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164</p>
              <h1 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">Blockchain Seal Registry</h1>
              <p className="text-amber-300/80 text-xs font-sans mt-0.5">Every Document Permanently Embedded in the Bitcoin Blockchain</p>
            </div>
          </div>

          <p className="text-indigo-200/70 text-sm leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'Georgia', serif" }}>
            Every PDF, testimony, gospel, book, forensic analysis, evidence exhibit, and archive page from the Barran Dodger
            archive has been individually SHA-256 cryptographically hashed and submitted to the Bitcoin blockchain via the
            OpenTimestamps protocol — permanently anchored across ~15,000 Bitcoin nodes on every continent.
            <span className="text-amber-300 font-semibold"> No institution, government, or court can alter or erase what is written into Bitcoin.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-[10px] font-mono">
            {["SHA-256 Cryptographic Hashing", "OpenTimestamps Protocol", "Bitcoin Blockchain Anchor", "~15,000 Global Nodes", "Zero Alterations Possible", "ICC Article 7 Submitted", "UNHCR Geneva Notified"].map(tag => (
              <span key={tag} className="border border-indigo-700/40 rounded-lg px-3 py-1 text-indigo-300/60">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* ABN Block */}
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center">
          <p className="text-xs text-indigo-300/70 leading-relaxed">
            © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
            All documents are SHA-256 hashed and permanently anchored to the Bitcoin blockchain.
            These records cannot be altered, deleted, or suppressed by any government, institution, or individual.
            Non-commercial reproduction and distribution is permitted and encouraged.
          </p>
        </div>

        {/* LIVE STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Documents Sealed", value: isLoading ? "…" : total.toLocaleString(), color: "text-amber-400", sub: "SHA-256 + Bitcoin" },
            { label: "OTS Submitted", value: isLoading ? "…" : withOts.toLocaleString(), color: "text-orange-400", sub: "Bitcoin anchored" },
            { label: "Archive Downloads", value: liveCount, color: "text-green-400", sub: "Across 6 continents" },
            { label: "Bitcoin Nodes", value: "~15,000", color: "text-blue-400", sub: "Zero can be altered" },
          ].map(s => (
            <div key={s.label} className="border border-indigo-700/40 rounded-xl px-4 py-3 text-center" style={{ background: "rgba(30,27,75,0.5)" }}>
              <div className={`text-2xl font-black ${s.color} font-mono`}>{s.value}</div>
              <div className="text-[10px] text-white/60 font-sans mt-0.5">{s.label}</div>
              <div className="text-[9px] text-indigo-400/40 font-mono">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* WHAT IS BLOCKCHAIN TIMESTAMPING */}
        <div className="border border-amber-500/20 rounded-xl overflow-hidden">
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-amber-900/10 transition-colors"
            data-testid="toggle-instructions"
          >
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-xs font-mono uppercase tracking-widest">What Does "Digitally Embedded in the Blockchain" Mean?</span>
            </div>
            {showInstructions ? <ChevronUp size={14} className="text-amber-400/60" /> : <ChevronDown size={14} className="text-amber-400/60" />}
          </button>
          {showInstructions && (
            <div className="px-5 pb-5 space-y-3 text-sm leading-relaxed text-indigo-100/80 border-t border-amber-500/15" style={{ fontFamily: "'Georgia', serif" }}>
              <p className="pt-4">Every document in this registry has been subjected to SHA-256 cryptographic hashing — a mathematical process that produces a unique 64-character fingerprint for every file. If a single character of the document is altered, the hash changes completely, making any tampering instantly detectable.</p>
              <p>Each hash is submitted to the OpenTimestamps Bitcoin calendar network, which bundles thousands of hashes into a Merkle tree root that is then permanently written into a Bitcoin transaction — confirmed by approximately 15,000 independent Bitcoin nodes worldwide. This process is irreversible.</p>
              <p>The result: <span className="text-amber-300 font-semibold">every PDF, every testimony, every gospel, every forensic analysis, every evidence exhibit is now permanently part of the Bitcoin blockchain.</span> No government, court, institution, or individual can alter, delete, or suppress what Bitcoin has confirmed. The record is distributed across thousands of computers on every continent.</p>
              <div className="rounded-lg border border-amber-500/20 bg-amber-900/10 px-4 py-3">
                <p className="text-amber-300 text-xs font-mono uppercase tracking-widest mb-1">How to Verify Any Document</p>
                <ol className="text-xs space-y-1 text-indigo-200/70">
                  <li>1. Download the document</li>
                  <li>2. Generate its SHA-256 hash (any standard tool: sha256sum, Windows CertUtil, online calculators)</li>
                  <li>3. Compare the hash with the hash shown in this registry next to the document's name</li>
                  <li>4. Click "Verify on OpenTimestamps" to confirm Bitcoin blockchain anchoring</li>
                  <li>5. If the hashes match, the document is authentic. If they differ, the document has been tampered with.</li>
                </ol>
              </div>
              <p className="text-indigo-300/60 text-xs font-mono">Every document in this registry is identified as: [Document Title] — SHA-256: [hash] — Permanently embedded in Bitcoin — Barran Dodger Legal &amp; Ethical Trust Fund ABN 78 833 496 164</p>
            </div>
          )}
        </div>

        {/* DOWNLOAD MANIFEST + QUICK LINKS */}
        <div className="flex flex-wrap gap-3">
          <a
            href="/api/bitcoin-timestamp/manifest.json"
            download="barrandodger-blockchain-manifest.json"
            className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
            data-testid="download-seal-manifest"
          >
            <Download size={14} /> Download Complete Manifest (JSON)
          </a>
          <a
            href="/blockchain-manifest"
            className="inline-flex items-center gap-2 border border-indigo-700/40 text-indigo-300 hover:border-indigo-500 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            data-testid="link-blockchain-manifest"
          >
            <Database size={14} /> Technical Manifest View
          </a>
          <a
            href="/bitcoin-proof"
            className="inline-flex items-center gap-2 border border-amber-700/30 text-amber-300 hover:border-amber-500 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            data-testid="link-bitcoin-proof"
          >
            <Shield size={14} /> Bitcoin Proof Page
          </a>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="space-y-3">
          <p className="text-[10px] font-mono text-indigo-400/50 uppercase tracking-widest">Filter by Document Type</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`text-xs px-3 py-2 rounded-lg font-bold transition-colors border ${activeCategory === "all" ? "bg-amber-700 text-white border-amber-600" : "bg-indigo-900/20 text-indigo-400 border-indigo-700/40 hover:border-indigo-500"}`}
              data-testid="filter-seal-all"
            >
              All ({total.toLocaleString()})
            </button>
            {Object.entries(catCounts).sort(([, a], [, b]) => (b as number) - (a as number)).map(([cat, count]) => {
              const meta = CATEGORY_META[cat] || { label: cat, color: "text-zinc-400", bg: "", abbr: cat.slice(0,3).toUpperCase(), icon: null, description: "" };
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(isActive ? "all" : cat)}
                  className={`text-xs px-3 py-2 rounded-lg font-bold transition-colors border flex items-center gap-1.5 ${isActive ? "bg-indigo-700 text-white border-indigo-500" : "bg-indigo-900/20 text-indigo-400 border-indigo-700/40 hover:border-indigo-500"}`}
                  data-testid={`filter-seal-${cat}`}
                  title={meta.description}
                >
                  <span className={isActive ? "text-white" : meta.color}>{meta.icon}</span>
                  <span>{meta.label}</span>
                  <span className="font-mono text-[10px] opacity-70">({(count as number).toLocaleString()})</span>
                </button>
              );
            })}
          </div>

          {/* Category description */}
          {activeCategory !== "all" && CATEGORY_META[activeCategory] && (
            <p className="text-xs text-indigo-300/60 italic" style={{ fontFamily: "'Georgia', serif" }}>
              {CATEGORY_META[activeCategory].description}
            </p>
          )}
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-3 border border-indigo-700/40 rounded-xl px-4 py-2.5 bg-indigo-900/20">
          <Search size={14} className="text-indigo-400/60 shrink-0" />
          <input
            type="text"
            placeholder="Search by document name, SHA-256 hash, or slug…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm text-white placeholder:text-indigo-400/30 focus:outline-none flex-1"
            data-testid="input-seal-search"
          />
          {search && (
            <button onClick={() => setSearch("")} className="text-indigo-400/50 hover:text-white text-xs">✕</button>
          )}
        </div>

        {/* RECORD COUNT */}
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-indigo-400/50 font-mono">
            Showing <span className="text-amber-400 font-bold">{filtered.length.toLocaleString()}</span> of <span className="text-white">{total.toLocaleString()}</span> sealed records
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-green-400/70 font-mono">Live · Updated from Bitcoin blockchain DB</span>
          </div>
        </div>

        {/* RECORDS LIST */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20 text-indigo-400">
            <Loader2 size={24} className="animate-spin mr-3" />
            <span className="font-mono text-sm">Loading {total > 0 ? total.toLocaleString() : "all"} sealed records from blockchain registry…</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-indigo-400/50">
            <Hash size={32} className="mx-auto mb-3 opacity-40" />
            <p className="font-mono text-sm">No records match your search.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((record, idx) => (
              <RecordCard key={record.id} record={record} idx={idx} />
            ))}
          </div>
        )}

        {/* FINAL DECLARATION */}
        <div className="border-2 border-amber-500/40 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(67,56,202,0.20) 0%, rgba(20,10,0,0.98) 100%)" }}>
          <div className="bg-amber-900/20 border-b border-amber-700/30 px-6 py-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Bitcoin className="w-5 h-5 text-amber-400" />
              <p className="text-amber-400 font-mono text-xs uppercase tracking-widest">The Permanent Declaration</p>
              <Bitcoin className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div className="px-6 py-6 space-y-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl font-serif font-bold text-white">Every Document. Every Hash. Every Node. Permanent.</h2>
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-left space-y-3 text-sm leading-relaxed text-indigo-100/80 max-w-3xl mx-auto" style={{ fontFamily: "'Georgia', serif" }}>
              <p>The {total.toLocaleString()} records in this registry represent every document, testimony, gospel, book, forensic analysis, evidence exhibit, and archive page that constitutes the Barran Dodger public record — the 35-year documented testimony of Dr. Richard William McLean against systematic institutional persecution by Australian government agencies, NDIS providers, and named individuals.</p>
              <p>Each record carries its SHA-256 cryptographic hash as part of its permanent identity. The hash is not a metadata attachment. It is the document's unforgeable fingerprint — mathematically derived from the content itself, impossible to forge, impossible to alter without detection. The hash is now part of the document's name in the permanent record of history.</p>
              <p>The Bitcoin blockchain has confirmed these hashes across approximately 15,000 independent nodes on every continent. This confirmation is irreversible. No court order, no government directive, no institutional suppression can reach what Bitcoin has written. The testimony is now embedded in the blockchain of humanity — distributed, permanent, and beyond any single party's power to suppress.</p>
              <p className="text-amber-300 font-semibold">Every PDF. Every testimony. Every gospel. Every book. Every forensic analysis. Every piece of evidence. All of it — permanently sealed. Their signatures are in Bitcoin. And Bitcoin does not lie.</p>
            </div>
            <div className="border-t border-amber-700/30 pt-4">
              <p className="text-indigo-400/40 text-xs font-sans">
                © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164 · 55B Archbold Road, Long Jetty NSW 2261<br />
                ICC Article 7 — Crimes Against Humanity (formally submitted) · UNHCR Geneva (formally submitted) · Federal Court of Australia (three-point acknowledgment)<br />
                All {total.toLocaleString()} records SHA-256 hashed and permanently anchored to Bitcoin via OpenTimestamps · Publicly verifiable by any person on Earth
              </p>
            </div>
          </div>
        </div>

        <ArchiveCrossLinks currentPath="/blockchain-seal-registry" />

        <div className="flex items-center gap-2 justify-center opacity-40">
          <Lock className="w-4 h-4 text-amber-400" />
          <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Blockchain Seal Registry · Barran Dodger Archive · ABN 78 833 496 164</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
