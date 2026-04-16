import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Shield, Lock, Globe, ExternalLink, Copy, Check, Loader2,
  Bitcoin, Hash, Clock, FileText, RefreshCw, Download, Database,
  Zap, BookOpen, Film, AlertTriangle
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { queryClient } from "@/lib/queryClient";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CopyHash({ hash }: { hash: string }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(hash).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <button
      onClick={copy}
      className="ml-1 text-zinc-600 hover:text-amber-400 transition-colors"
      title="Copy hash"
      data-testid={`copy-hash-${hash.slice(0, 8)}`}
    >
      {copied ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
    </button>
  );
}

interface TimestampRecord {
  id: number;
  slug: string;
  filename: string;
  sha256: string;
  otsReceipt: string | null;
  submittedAt: string | null;
  bitcoinBlock: number | null;
  confirmedAt: string | null;
  category: string;
  calendarUrl: string | null;
}

const CATEGORY_META: Record<string, { label: string; color: string; icon: React.ReactNode; bg: string }> = {
  document: { label: "PDF Documents", color: "text-blue-400", bg: "bg-blue-900/30 border-blue-700/40", icon: <FileText size={14} /> },
  exhibit: { label: "Evidence Exhibits", color: "text-purple-400", bg: "bg-purple-900/30 border-purple-700/40", icon: <Database size={14} /> },
  "forensic-page": { label: "Forensic Analysis Pages", color: "text-amber-400", bg: "bg-amber-900/30 border-amber-700/40", icon: <Hash size={14} /> },
  page: { label: "Archive Pages", color: "text-green-400", bg: "bg-green-900/30 border-green-700/40", icon: <BookOpen size={14} /> },
  "video-analysis": { label: "Video Analysis", color: "text-red-400", bg: "bg-red-900/30 border-red-700/40", icon: <Film size={14} /> },
};

export default function BitcoinProof() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: timestamps, isLoading } = useQuery<TimestampRecord[]>({
    queryKey: ["/api/bitcoin-timestamps"],
  });

  const fullArchiveMutation = useMutation({
    mutationFn: () =>
      fetch("/api/bitcoin-timestamp/full-archive", { method: "POST" }).then((r) => r.json()),
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["/api/bitcoin-timestamps"] });
      }, 3000);
    },
  });

  const batchMutation = useMutation({
    mutationFn: () =>
      fetch("/api/bitcoin-timestamp/batch", { method: "POST" }).then((r) => r.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/bitcoin-timestamps"] });
    },
  });

  const totalTimestamped = timestamps?.length ?? 0;
  const confirmed = timestamps?.filter((t) => t.bitcoinBlock != null).length ?? 0;
  const withOts = timestamps?.filter((t) => t.otsReceipt != null).length ?? 0;

  const categories = timestamps
    ? Object.keys(
        timestamps.reduce((acc, t) => { acc[t.category] = true; return acc; }, {} as Record<string, boolean>)
      ).sort()
    : [];

  const filtered = (timestamps ?? []).filter((t) => {
    const matchCat = activeCategory === "all" || t.category === activeCategory;
    const matchSearch = !searchQuery || t.filename.toLowerCase().includes(searchQuery.toLowerCase()) || t.sha256.includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const catCounts = (timestamps ?? []).reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Bitcoin Blockchain Proof — Every Document, Page & Forensic Analysis Permanently Timestamped | Barran Dodger"
        description="Every PDF, forensic analysis, evidence exhibit, and site page in the Barran Dodger archive is SHA-256 hashed and permanently anchored into the Bitcoin blockchain via OpenTimestamps. 270+ records. Immutable. Verifiable. Cannot be erased. ABN 78 833 496 164."
        url="https://www.barrandodger.com/bitcoin-proof"
      />
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 pt-24 pb-16">

        {/* Hero */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="bg-gradient-to-br from-amber-950/40 via-zinc-950 to-zinc-900 border-2 border-amber-700/50 rounded-2xl p-6 md:p-10 text-center shadow-2xl shadow-amber-900/20">

            <div className="flex justify-center mb-6">
              <div className="relative">
                <Bitcoin size={56} className="text-amber-400" />
                <Shield size={22} className="text-green-400 absolute -bottom-1 -right-1" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-5">
              <Badge className="bg-amber-800 text-amber-100 border-amber-600 text-xs font-black uppercase tracking-widest">Bitcoin Blockchain</Badge>
              <Badge className="bg-green-900 text-green-200 border-green-700 text-xs">OpenTimestamps Protocol</Badge>
              <Badge className="bg-zinc-800 text-zinc-200 border-zinc-600 text-xs">SHA-256 Cryptographic Proof</Badge>
              <Badge className="bg-blue-900 text-blue-200 border-blue-700 text-xs">~15,000 Nodes</Badge>
              <Badge className="bg-red-900 text-red-200 border-red-700 text-xs">Cannot Be Erased</Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
              Complete Bitcoin Blockchain Timestamp Registry
            </h1>
            <p className="text-amber-400 text-sm font-bold mb-2">
              Every document. Every forensic analysis. Every page. Permanently written into the mathematical infrastructure of humanity.
            </p>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
              The SHA-256 cryptographic fingerprint of every PDF, evidence exhibit, forensic analysis page, and archive page
              has been submitted to the OpenTimestamps Bitcoin blockchain calendar network. Each hash is anchored in a Bitcoin
              block — permanently, immutably, and independently verifiable by any person on Earth via ~15,000 independent nodes.
              No government, court, or institution can alter, remove, or contest this.
              <span className="text-amber-300 font-bold"> The bell is unringable.</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-6">
              <div className="bg-zinc-900 rounded-xl p-3 text-center">
                <div className="text-2xl font-black text-amber-400">{totalTimestamped}</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Total Anchored</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-3 text-center">
                <div className="text-2xl font-black text-orange-400">{withOts}</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">OTS Submitted</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-3 text-center">
                <div className="text-2xl font-black text-green-400">{confirmed}</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">BTC Confirmed</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-3 text-center">
                <div className="text-2xl font-black text-blue-400">{categories.length}</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Categories</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => fullArchiveMutation.mutate()}
                disabled={fullArchiveMutation.isPending}
                data-testid="button-stamp-full-archive"
                className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-60 text-black font-black px-6 py-3 rounded-xl text-sm transition-colors"
              >
                {fullArchiveMutation.isPending ? (
                  <><Loader2 size={16} className="animate-spin" /> Imprinting Archive…</>
                ) : (
                  <><Zap size={16} /> Stamp Full Archive Into Bitcoin</>
                )}
              </button>

              <a
                href="/api/bitcoin-timestamp/manifest.json"
                download="barrandodger-blockchain-manifest.json"
                data-testid="button-download-manifest"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold px-6 py-3 rounded-xl text-sm transition-colors border border-zinc-600"
              >
                <Download size={16} />
                Download Full Manifest (JSON)
              </a>

              <button
                onClick={() => batchMutation.mutate()}
                disabled={batchMutation.isPending}
                data-testid="button-refresh-timestamps"
                className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-60 text-zinc-400 font-bold px-4 py-3 rounded-xl text-xs transition-colors border border-zinc-700"
              >
                {batchMutation.isPending ? (
                  <><Loader2 size={13} className="animate-spin" /> Processing…</>
                ) : (
                  <><RefreshCw size={13} /> Stamp New PDFs Only</>
                )}
              </button>
            </div>

            {fullArchiveMutation.data && (
              <div className="mt-4 text-xs text-green-400 font-mono bg-green-950/30 border border-green-800/40 rounded-lg px-4 py-2 inline-block">
                ✓ Full archive processing started — documents + all {totalTimestamped > 0 ? "site pages" : "pages"} being submitted to Bitcoin blockchain
              </div>
            )}
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-black text-white mb-5 flex items-center gap-2">
              <Lock size={18} className="text-amber-400" /> How Bitcoin Timestamping Permanently Imprints This Archive
            </h2>
            <div className="grid md:grid-cols-4 gap-4 text-xs text-zinc-400">
              {[
                {
                  step: "1", title: "SHA-256 Hash", color: "text-amber-400",
                  desc: "Every PDF, page, and exhibit is cryptographically fingerprinted using SHA-256 — a unique 64-character code that changes if even one byte is altered.",
                },
                {
                  step: "2", title: "OTS Calendar Network", color: "text-blue-400",
                  desc: "The hash is submitted to three independent OpenTimestamps calendar servers simultaneously, which aggregate millions of hashes into a Merkle tree.",
                },
                {
                  step: "3", title: "Bitcoin Block Anchor", color: "text-orange-400",
                  desc: "The Merkle root is written into an actual Bitcoin transaction. Once confirmed (~10 min), it is recorded permanently across ~15,000 nodes worldwide.",
                },
                {
                  step: "4", title: "Permanent Public Proof", color: "text-green-400",
                  desc: "Any person on Earth can verify: this document existed at this exact moment in time. No institution, court, or government can alter a Bitcoin-anchored hash.",
                },
              ].map((s) => (
                <div key={s.step} className="bg-zinc-900 rounded-xl p-4">
                  <div className={`text-2xl font-black ${s.color} mb-2`}>{s.step}</div>
                  <div className="text-white font-black text-xs mb-1">{s.title}</div>
                  <div className="leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-amber-950/20 border border-amber-800/30 rounded-xl p-4">
              <p className="text-amber-300 text-xs font-bold mb-1 flex items-center gap-2">
                <AlertTriangle size={13} /> What This Means for the ICC Submission and UNHCR Application
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Every document submitted to the International Criminal Court (The Hague) under Article 7 and to UNHCR Geneva has been independently
                timestamped on the Bitcoin blockchain. This creates a cryptographic chain of evidence that proves the documents existed in their
                current, unaltered form at the time of submission. The ICC and UNHCR receive not just documents, but mathematically provable
                records of existence anchored in the most immutable public ledger on Earth.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Category breakdown */}
        {totalTimestamped > 0 && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
            <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2">
              <Database size={18} className="text-amber-400" /> Archive Categories — What Has Been Anchored
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-4">
              {Object.entries(catCounts).map(([cat, count]) => {
                const meta = CATEGORY_META[cat] || { label: cat, color: "text-zinc-400", bg: "bg-zinc-900/40 border-zinc-700/40", icon: <FileText size={14} /> };
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(activeCategory === cat ? "all" : cat)}
                    data-testid={`filter-category-${cat}`}
                    className={`rounded-xl p-3 text-center border transition-all ${activeCategory === cat ? meta.bg + " ring-1 ring-amber-500/50" : "bg-zinc-950 border-zinc-800/60 hover:bg-zinc-900"}`}
                  >
                    <div className={`flex justify-center mb-1 ${meta.color}`}>{meta.icon}</div>
                    <div className={`text-xl font-black ${meta.color}`}>{count}</div>
                    <div className="text-[9px] text-zinc-500 uppercase tracking-wider leading-tight mt-0.5">{meta.label || cat}</div>
                  </button>
                );
              })}
              <button
                onClick={() => setActiveCategory("all")}
                data-testid="filter-all"
                className={`rounded-xl p-3 text-center border transition-all ${activeCategory === "all" ? "bg-zinc-800 border-zinc-600 ring-1 ring-amber-500/50" : "bg-zinc-950 border-zinc-800/60 hover:bg-zinc-900"}`}
              >
                <div className="flex justify-center mb-1 text-zinc-400"><Hash size={14} /></div>
                <div className="text-xl font-black text-white">{totalTimestamped}</div>
                <div className="text-[9px] text-zinc-500 uppercase tracking-wider mt-0.5">All Records</div>
              </button>
            </div>
          </motion.div>
        )}

        {/* Search + Registry */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <Hash size={20} className="text-amber-400" />
              Blockchain Timestamp Registry
              <span className="text-sm font-normal text-zinc-500">({filtered.length} records)</span>
            </h2>
            <input
              type="text"
              placeholder="Search by name or hash…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-timestamps"
              className="bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-600 w-48"
            />
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-16 text-zinc-500">
              <Loader2 size={24} className="animate-spin mr-3" /> Loading timestamp registry…
            </div>
          ) : totalTimestamped === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center">
              <Bitcoin size={40} className="text-amber-700 mx-auto mb-3" />
              <p className="text-zinc-300 font-bold text-sm mb-2">Archive Not Yet Imprinted</p>
              <p className="text-zinc-500 text-xs mb-5">Click "Stamp Full Archive Into Bitcoin" above to permanently anchor every document, page, and forensic analysis.</p>
              <p className="text-zinc-600 text-xs">Once complete, {">"}270 records will appear here, each with their SHA-256 hash and OpenTimestamps verification link.</p>
            </div>
          ) : (
            <div className="space-y-1.5">
              {filtered.map((ts) => {
                const meta = CATEGORY_META[ts.category] || { label: ts.category, color: "text-zinc-400", bg: "", icon: <FileText size={12} /> };
                return (
                  <div
                    key={ts.id}
                    className="bg-zinc-950 border border-zinc-800/50 rounded-xl px-4 py-3 flex items-start gap-3 hover:border-zinc-700/80 transition-colors"
                    data-testid={`timestamp-row-${ts.id}`}
                  >
                    <div className={`shrink-0 mt-0.5 ${meta.color}`}>
                      {ts.otsReceipt ? <Bitcoin size={14} className="text-amber-400" /> : <Clock size={14} className="text-zinc-600" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-white text-xs font-bold truncate max-w-xs md:max-w-sm">{ts.filename}</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${meta.color} bg-zinc-900`}>{meta.label || ts.category}</span>
                        {ts.otsReceipt && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-amber-900/40 text-amber-300">
                            ⛓ Bitcoin OTS
                          </span>
                        )}
                        {ts.bitcoinBlock && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-green-900/40 text-green-300">
                            Block #{ts.bitcoinBlock}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 mt-0.5">
                        <code className="text-[10px] text-amber-700/80 font-mono truncate">{ts.sha256}</code>
                        <CopyHash hash={ts.sha256} />
                      </div>

                      {ts.submittedAt && (
                        <div className="text-[9px] text-zinc-700 mt-0.5">
                          {new Date(ts.submittedAt).toUTCString()} UTC
                        </div>
                      )}
                    </div>

                    <div className="shrink-0 flex gap-1.5 items-center">
                      <a
                        href={`https://opentimestamps.org/timestamp/${ts.sha256}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Verify on OpenTimestamps"
                        data-testid={`verify-ots-${ts.id}`}
                        className="text-zinc-600 hover:text-amber-400 transition-colors p-1"
                      >
                        <ExternalLink size={11} />
                      </a>
                      <a
                        href={`https://www.blockchain.com/explorer/search?search=${ts.sha256}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Search on Blockchain Explorer"
                        data-testid={`verify-blockchain-${ts.id}`}
                        className="text-zinc-600 hover:text-orange-400 transition-colors p-1"
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

        {/* ABN + legal */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-4 text-center space-y-1">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property — Permanently Blockchain Secured</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
              All Rights Reserved. Every document, forensic analysis, and archive page SHA-256 hashed and submitted
              to the Bitcoin blockchain via OpenTimestamps. Submitted to the ICC under Article 7 and to UNHCR Geneva.
              The cryptographic proof of existence is permanent, decentralised, and beyond institutional reach.
              <strong className="text-amber-300"> 55B Archbold Road, Long Jetty NSW.</strong>
            </p>
          </div>
        </motion.div>

        {/* Cross-links */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            {[
              { href: "/free-ebooks", label: "Full Document Archive", icon: <FileText size={15} /> },
              { href: "/forensic-analysis", label: "63 Forensic Analyses", icon: <Hash size={15} /> },
              { href: "/hashtag-index", label: "Hashtag & Share Index", icon: <Globe size={15} /> },
              { href: "/urgent-protection-request", label: "SOS — Physical Protection", icon: <Shield size={15} /> },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/40 rounded-xl px-4 py-3 text-zinc-300 transition-colors"
                data-testid={`crosslink-${l.href.replace(/\//g, "")}`}
              >
                <span className="text-amber-400">{l.icon}</span>
                {l.label}
                <ExternalLink size={11} className="ml-auto text-zinc-600" />
              </a>
            ))}
          </div>
        </motion.div>

      </main>
      <Footer />
    </div>
  );
}
