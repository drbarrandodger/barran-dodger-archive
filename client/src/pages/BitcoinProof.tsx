import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Shield, Lock, Globe, ExternalLink, Copy, Check, Loader2, Bitcoin, Hash, Clock, FileText, RefreshCw } from "lucide-react";
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
      className="ml-2 text-zinc-600 hover:text-amber-400 transition-colors"
      title="Copy hash"
      data-testid={`copy-hash-${hash.slice(0, 8)}`}
    >
      {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
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

export default function BitcoinProof() {
  const { data: timestamps, isLoading } = useQuery<TimestampRecord[]>({
    queryKey: ["/api/bitcoin-timestamps"],
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
  const pending = totalTimestamped - confirmed;
  const docCount = timestamps?.filter((t) => t.category === "document").length ?? 0;
  const exhibitCount = timestamps?.filter((t) => t.category === "exhibit").length ?? 0;
  const withOts = timestamps?.filter((t) => t.otsReceipt != null).length ?? 0;

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Bitcoin Blockchain Proof — Every Document Permanently Timestamped | Barran Dodger | ABN 78 833 496 164"
        description="Every document in the Barran Dodger archive is SHA-256 hashed and permanently anchored into the Bitcoin blockchain via OpenTimestamps. Immutable. Verifiable. Cannot be erased. ABN 78 833 496 164."
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
              <Badge className="bg-red-900 text-red-200 border-red-700 text-xs">Cannot Be Erased</Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
              Bitcoin Blockchain Timestamp Registry
            </h1>
            <p className="text-amber-400 text-sm font-bold mb-2">
              Every document. Every page. Permanently written into the digital infrastructure of humanity.
            </p>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
              Using the OpenTimestamps protocol, the SHA-256 cryptographic hash of every document in this archive is submitted to the Bitcoin blockchain calendar network. Within ~10 minutes, each hash is anchored in a Bitcoin block — permanently, immutably, and verifiably — by thousands of independent nodes worldwide. No government, institution, or court can alter this. The bell is unringable.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-2xl mx-auto mb-6">
              <div className="bg-zinc-900 rounded-xl p-3 text-center">
                <div className="text-2xl font-black text-amber-400">{totalTimestamped}</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Total Anchored</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-3 text-center">
                <div className="text-2xl font-black text-blue-400">{docCount}</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Documents</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-3 text-center">
                <div className="text-2xl font-black text-purple-400">{exhibitCount}</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Exhibits</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-3 text-center">
                <div className="text-2xl font-black text-orange-400">{withOts}</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">OTS Submitted</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-3 text-center">
                <div className="text-2xl font-black text-green-400">{confirmed}</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">BTC Confirmed</div>
              </div>
            </div>

            {totalTimestamped === 0 ? (
              <button
                onClick={() => batchMutation.mutate()}
                disabled={batchMutation.isPending}
                data-testid="button-trigger-batch-timestamp"
                className="flex items-center gap-2 mx-auto bg-amber-600 hover:bg-amber-500 disabled:opacity-60 text-black font-black px-8 py-3 rounded-xl text-sm transition-colors"
              >
                {batchMutation.isPending ? (
                  <><Loader2 size={16} className="animate-spin" /> Submitting to Bitcoin blockchain…</>
                ) : (
                  <><Bitcoin size={16} /> Timestamp All Documents Now</>
                )}
              </button>
            ) : (
              <button
                onClick={() => batchMutation.mutate()}
                disabled={batchMutation.isPending}
                data-testid="button-refresh-timestamps"
                className="flex items-center gap-2 mx-auto bg-zinc-800 hover:bg-zinc-700 disabled:opacity-60 text-zinc-300 font-black px-6 py-2.5 rounded-xl text-xs transition-colors"
              >
                {batchMutation.isPending ? (
                  <><Loader2 size={14} className="animate-spin" /> Processing…</>
                ) : (
                  <><RefreshCw size={14} /> Timestamp New Documents</>
                )}
              </button>
            )}

            {batchMutation.data && (
              <div className="mt-4 text-xs text-green-400 font-mono">
                ✓ {batchMutation.data.succeeded} new · {batchMutation.data.alreadyDone} already done · {batchMutation.data.failed} failed
              </div>
            )}

          </div>
        </motion.div>

        {/* How it works */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-black text-white mb-5 flex items-center gap-2">
              <Lock size={18} className="text-amber-400" /> How Bitcoin Timestamping Works
            </h2>
            <div className="grid md:grid-cols-4 gap-4 text-xs text-zinc-400">
              {[
                { step: "1", title: "SHA-256 Hash", desc: "Every PDF is cryptographically fingerprinted using SHA-256 — a unique 64-character code that changes if even one byte of the document is altered.", color: "text-amber-400" },
                { step: "2", title: "OTS Calendar", desc: "The hash is submitted to the OpenTimestamps calendar network — a decentralised system that aggregates millions of hashes into a Merkle tree.", color: "text-blue-400" },
                { step: "3", title: "Bitcoin Block", desc: "The Merkle root is written into an actual Bitcoin block transaction. Once confirmed (~10 min), it is permanently recorded across 60,000+ Bitcoin nodes worldwide.", color: "text-orange-400" },
                { step: "4", title: "Permanent Proof", desc: "Anyone can independently verify: the document existed at this exact moment in time. No institution can alter, remove, or contest a Bitcoin-anchored SHA-256 hash.", color: "text-green-400" },
              ].map((s) => (
                <div key={s.step} className="bg-zinc-900 rounded-xl p-4">
                  <div className={`text-2xl font-black ${s.color} mb-2`}>{s.step}</div>
                  <div className="text-white font-black text-xs mb-1">{s.title}</div>
                  <div className="leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timestamp registry */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
            <Hash size={20} className="text-amber-400" />
            Blockchain Timestamp Registry
            <span className="text-sm font-normal text-zinc-500 ml-2">({totalTimestamped} records)</span>
          </h2>

          {isLoading ? (
            <div className="flex items-center justify-center py-16 text-zinc-500">
              <Loader2 size={24} className="animate-spin mr-3" /> Loading timestamp registry…
            </div>
          ) : totalTimestamped === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center">
              <Bitcoin size={40} className="text-amber-700 mx-auto mb-3" />
              <p className="text-zinc-400 text-sm mb-4">No timestamps yet. Click the button above to timestamp all 118+ documents into the Bitcoin blockchain.</p>
              <p className="text-zinc-500 text-xs">This is a one-time operation per document. Each submission takes ~10 seconds. Bitcoin confirmation follows within ~10 minutes.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {timestamps!.map((ts) => (
                <div
                  key={ts.id}
                  className="bg-zinc-950 border border-zinc-800/60 rounded-xl px-4 py-3 flex items-start gap-3"
                  data-testid={`timestamp-row-${ts.id}`}
                >
                  <div className="shrink-0 mt-0.5">
                    {ts.otsReceipt ? (
                      <Bitcoin size={16} className="text-amber-400" />
                    ) : (
                      <Clock size={16} className="text-zinc-500" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white text-xs font-black truncate max-w-xs">{ts.filename}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${ts.otsReceipt ? "bg-amber-900/50 text-amber-300" : "bg-zinc-800 text-zinc-500"}`}>
                        {ts.otsReceipt ? "OTS Submitted" : "Pending"}
                      </span>
                      {ts.bitcoinBlock && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-green-900/50 text-green-300">
                          Block #{ts.bitcoinBlock}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 mt-1">
                      <code className="text-[10px] text-amber-600/80 font-mono truncate">{ts.sha256}</code>
                      <CopyHash hash={ts.sha256} />
                    </div>

                    {ts.submittedAt && (
                      <div className="text-[10px] text-zinc-600 mt-0.5">
                        Submitted: {new Date(ts.submittedAt).toUTCString()} UTC
                      </div>
                    )}
                  </div>

                  <div className="shrink-0 flex gap-1">
                    <a
                      href={`https://opentimestamps.org/timestamp/${ts.sha256}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Verify on OpenTimestamps"
                      data-testid={`verify-ots-${ts.id}`}
                      className="text-zinc-600 hover:text-amber-400 transition-colors p-1"
                    >
                      <ExternalLink size={12} />
                    </a>
                    <a
                      href={`https://www.blockchain.com/explorer/search?search=${ts.sha256}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Search on blockchain explorer"
                      data-testid={`verify-blockchain-${ts.id}`}
                      className="text-zinc-600 hover:text-orange-400 transition-colors p-1"
                    >
                      <Globe size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* ABN */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property — Blockchain Secured</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
              All Rights Reserved. Every document SHA-256 hashed and submitted to the Bitcoin blockchain via OpenTimestamps.
              The cryptographic proof of existence is permanent, decentralised, and beyond institutional reach.
            </p>
          </div>
        </motion.div>

        {/* Cross-links */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {[
              { href: "/free-ebooks", label: "Full Document Archive", icon: <FileText size={16} /> },
              { href: "/forensic-analysis", label: "62 Forensic Analyses", icon: <Hash size={16} /> },
              { href: "/urgent-protection-request", label: "SOS — Physical Protection", icon: <Shield size={16} /> },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/40 rounded-xl px-4 py-3 text-zinc-300 transition-colors"
                data-testid={`crosslink-${l.href.replace(/\//g, "")}`}
              >
                <span className="text-amber-400">{l.icon}</span>
                {l.label}
                <ExternalLink size={12} className="ml-auto text-zinc-600" />
              </a>
            ))}
          </div>
        </motion.div>

      </main>
      <Footer />
    </div>
  );
}
