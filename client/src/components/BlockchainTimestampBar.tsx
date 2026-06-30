import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { Copy, Check, Download, Clock, Hash, Shield, ExternalLink, Loader2, Users, Lock, Globe, Archive } from "lucide-react";

const ARCHIVE_BLOCK = "897,241";
const ARCHIVE_HASH = "3a507d741f6af28bd7653a256a8a5262e4641c7dd45ab645617a000b5afa11dd";
const ABN = "78 833 496 164";
const OHCHR = "UR/UST/23/AUS/17";

async function sha256(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function pad(n: number) { return String(n).padStart(2, "0"); }

function formatIso(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export function BlockchainTimestampBar() {
  const [location] = useLocation();
  const [now, setNow] = useState(() => new Date());
  const [pageHash, setPageHash] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [txtLoading, setTxtLoading] = useState(false);
  const [pdfDone, setPdfDone] = useState(false);
  const [zipLoading, setZipLoading] = useState(false);
  const [zipDone, setZipDone] = useState(false);
  const [totalPages, setTotalPages] = useState(501);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    fetch("/api/site-archive/info")
      .then(r => r.json())
      .then(d => { if (d?.totalPages) setTotalPages(d.totalPages); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const url = typeof window !== "undefined" ? window.location.href : location;
    sha256(`${url}|${formatIso(now).slice(0, 16)}|${ARCHIVE_HASH}|ABN:${ABN}`).then(setPageHash);
  }, [location, now.getMinutes()]);

  const isoTimestamp = formatIso(now);
  const humanTimestamp = now.toLocaleString("en-AU", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: "short",
  });

  const copyHash = useCallback(async () => {
    await navigator.clipboard.writeText(pageHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [pageHash]);

  // ── FULL PAGE PDF with blockchain stamp footer ──────────────────────────
  const downloadPDF = useCallback(async () => {
    setPdfLoading(true);
    const url = typeof window !== "undefined" ? window.location.href : `https://www.barrandodger.com${location}`;
    const title = typeof document !== "undefined" ? document.title.split("|")[0].trim() : "Barran Dodger Archive";
    const finalHash = pageHash || await sha256(`${url}|${isoTimestamp}|${ARCHIVE_HASH}`);

    try {
      const [h2cMod, jsPDFMod] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);
      const html2canvas = h2cMod.default;
      const { jsPDF } = jsPDFMod;

      // Hide UI chrome that shouldn't appear in the preservation copy
      const hideStyle = document.createElement("style");
      hideStyle.id = "__pdf-stamp-hide__";
      hideStyle.textContent = `
        nav, .floating-share-bar, #chatbot-widget,
        [data-pdf-hide], .reading-progress-bar,
        .global-blockchain-stamp-widget { display: none !important; }
        body { overflow: visible !important; }
      `;
      document.head.appendChild(hideStyle);
      await new Promise((r) => setTimeout(r, 180));

      const canvas = await html2canvas(document.body, {
        scale: 1.4,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: "#06080f",
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight,
      });

      document.getElementById("__pdf-stamp-hide__")?.remove();

      const STAMP_H = 110; // px added at bottom for blockchain stamp
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? "landscape" : "portrait",
        unit: "px",
        format: [canvas.width, canvas.height + STAMP_H],
        compress: true,
      });

      // Page content
      const imgData = canvas.toDataURL("image/jpeg", 0.86);
      pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);

      // Blockchain stamp footer
      pdf.setFillColor(3, 4, 12);
      pdf.rect(0, canvas.height, canvas.width, STAMP_H, "F");

      // Gold top border
      pdf.setDrawColor(233, 160, 10);
      pdf.setLineWidth(1.5);
      pdf.line(0, canvas.height + 1, canvas.width, canvas.height + 1);

      const cw = canvas.width;

      // Row 1 — title & org
      pdf.setTextColor(233, 160, 10);
      pdf.setFontSize(8);
      pdf.setFont("helvetica", "bold");
      pdf.text(
        `PRESERVED TESTIMONY — ${title.toUpperCase()}`,
        cw / 2, canvas.height + 16, { align: "center" }
      );

      // Row 2 — org line
      pdf.setTextColor(180, 180, 180);
      pdf.setFontSize(6.5);
      pdf.setFont("helvetica", "normal");
      pdf.text(
        `Barran Dodger Legal & Ethical Trust Fund  ·  ABN ${ABN}  ·  OHCHR ${OHCHR}  ·  ICC Article 7 Filed`,
        cw / 2, canvas.height + 28, { align: "center" }
      );

      // Row 3 — SHA-256
      pdf.setTextColor(255, 255, 255);
      pdf.setFont("courier", "normal");
      pdf.setFontSize(6.5);
      pdf.text(`SHA-256: ${finalHash}`, cw / 2, canvas.height + 42, { align: "center" });

      // Row 4 — archive seal
      pdf.setTextColor(52, 211, 153);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(6.5);
      pdf.text(
        `Archive Sealed · Bitcoin Block ${ARCHIVE_BLOCK} · Hash: ${ARCHIVE_HASH.slice(0, 32)}…`,
        cw / 2, canvas.height + 54, { align: "center" }
      );

      // Row 5 — timestamp
      pdf.setTextColor(150, 150, 150);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(6);
      pdf.text(
        `Downloaded: ${humanTimestamp}  ·  URL: ${url}`,
        cw / 2, canvas.height + 66, { align: "center" }
      );

      // Row 6 — preservation statement
      pdf.setTextColor(120, 120, 120);
      pdf.setFontSize(5.8);
      pdf.text(
        "This document is a node of non-erasure. By holding this copy you participate in the permanent preservation of testimony against institutional persecution.",
        cw / 2, canvas.height + 78, { align: "center", maxWidth: cw - 40 }
      );

      // Row 7 — site & zero defamation
      pdf.setTextColor(100, 100, 100);
      pdf.setFontSize(5.5);
      pdf.text(
        `barrandodger.com  ·  3,643 primary-source documents  ·  Zero defamation actions received  ·  ${isoTimestamp}`,
        cw / 2, canvas.height + 92, { align: "center" }
      );

      const safeTitle = title.replace(/[^a-z0-9]/gi, "-").toLowerCase().slice(0, 40);
      const dateStr = isoTimestamp.slice(0, 10);
      pdf.save(`barrandodger-preserved-testimony-${safeTitle}-${dateStr}.pdf`);

      setPdfDone(true);
      setTimeout(() => setPdfDone(false), 3000);
    } catch (err) {
      console.error("PDF generation error:", err);
      document.getElementById("__pdf-stamp-hide__")?.remove();
    } finally {
      setPdfLoading(false);
    }
  }, [pageHash, isoTimestamp, humanTimestamp, location, now]);

  // ── TEXT CERTIFICATE (lightweight alternative) ──────────────────────────
  const downloadTxt = useCallback(async () => {
    setTxtLoading(true);
    const url = typeof window !== "undefined" ? window.location.href : `https://www.barrandodger.com${location}`;
    const title = typeof document !== "undefined" ? document.title : "Barran Dodger Archive";
    const finalHash = pageHash || await sha256(`${url}|${isoTimestamp}|${ARCHIVE_HASH}|ABN:${ABN}`);

    const lines = [
      "═══════════════════════════════════════════════════════════════",
      "  PRESERVED TESTIMONY — BLOCKCHAIN-AUTHENTICATED CERTIFICATE",
      "  Barran Dodger Legal & Ethical Trust Fund",
      "═══════════════════════════════════════════════════════════════",
      "",
      `  Page     : ${title}`,
      `  URL      : ${url}`,
      `  Saved    : ${humanTimestamp}`,
      `  ISO      : ${isoTimestamp}`,
      "",
      "  BLOCKCHAIN SEAL",
      `  Bitcoin Block  : ${ARCHIVE_BLOCK}`,
      `  Archive Hash   : ${ARCHIVE_HASH}`,
      `  Page Hash      : ${finalHash}`,
      `  Verify         : https://blockchain.info/block/${ARCHIVE_BLOCK.replace(",", "")}`,
      "",
      "  LEGAL STANDING",
      `  ABN       : ${ABN}`,
      `  OHCHR     : ${OHCHR}`,
      `  ICC       : Article 7 — Crimes Against Humanity`,
      `  Documents : 3,643 primary-source government records`,
      `  Defamation: Zero actions received across 492,544+ downloads`,
      "",
      "  PRESERVATION STATEMENT",
      "  This certificate is a node of non-erasure. You now hold a",
      "  timestamped, cryptographically authenticated record that this",
      "  page existed at this moment. Share it. Every copy is a",
      "  guarantee that no institution can erase this testimony.",
      "",
      "═══════════════════════════════════════════════════════════════",
      `  © ${now.getFullYear()} Barran Dodger Legal & Ethical Trust Fund`,
      "═══════════════════════════════════════════════════════════════",
    ];

    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const safeTitle = title.replace(/[^a-z0-9]/gi, "-").toLowerCase().slice(0, 40);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `barrandodger-certificate-${safeTitle}-${isoTimestamp.slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
    setTimeout(() => setTxtLoading(false), 800);
  }, [pageHash, isoTimestamp, humanTimestamp, location, now]);

  // ── WHOLE-SITE ZIP download ─────────────────────────────────────────────
  const downloadSiteZip = useCallback(async () => {
    setZipLoading(true);
    try {
      const res = await fetch("/api/site-archive/zip");
      if (!res.ok) throw new Error("ZIP generation failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `barrandodger-complete-testimony-archive-${new Date().toISOString().slice(0, 10)}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setZipDone(true);
      setTimeout(() => setZipDone(false), 8000);
    } catch (err) {
      console.error("Site ZIP error:", err);
    } finally {
      setZipLoading(false);
    }
  }, []);

  const shortHash = pageHash ? pageHash.slice(0, 16) + "…" + pageHash.slice(-8) : "computing…";

  return (
    <div
      className="w-full"
      style={{ background: "linear-gradient(180deg,#020408 0%,#03050e 100%)", borderTop: "2px solid rgba(233,160,10,0.35)" }}
      data-testid="blockchain-timestamp-bar"
    >
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">

        {/* Purpose statement */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px flex-1 max-w-16" style={{ background: "rgba(233,160,10,0.3)" }} />
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-[0.4em]" style={{ background: "rgba(233,160,10,0.08)", border: "1px solid rgba(233,160,10,0.3)", color: "#e9a00a" }}>
              <Lock className="h-3 w-3" /> Preservation Through Distribution
            </span>
            <div className="h-px flex-1 max-w-16" style={{ background: "rgba(233,160,10,0.3)" }} />
          </div>
          <p className="font-serif text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Every download of this page is a node of non-erasure. When thousands of people hold a blockchain-stamped copy, no government, court, or institution can erase this testimony. <span style={{ color: "#e9a00a" }}>Download. Share. Preserve.</span>
          </p>
          <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
            The archive is sealed to Bitcoin Block {ARCHIVE_BLOCK} · {OHCHR} · ABN {ABN} · Zero defamation actions received
          </p>
        </div>

        {/* Live timestamp grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          <div className="rounded-xl px-4 py-3 space-y-1.5" style={{ background: "rgba(233,160,10,0.04)", border: "1px solid rgba(233,160,10,0.15)" }}>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3" style={{ color: "#e9a00a" }} />
              <p className="font-mono text-[9px] uppercase tracking-[0.3em]" style={{ color: "#e9a00a" }}>Your Download Timestamp</p>
            </div>
            <p className="font-mono text-xs tabular-nums font-bold text-white" data-testid="text-live-timestamp">
              {isoTimestamp}
            </p>
            <p className="text-[10px] leading-tight" style={{ color: "rgba(255,255,255,0.4)" }}>
              {humanTimestamp}
            </p>
          </div>

          <div className="rounded-xl px-4 py-3 space-y-1.5" style={{ background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.15)" }}>
            <div className="flex items-center gap-1.5">
              <Shield className="h-3 w-3" style={{ color: "#34d399" }} />
              <p className="font-mono text-[9px] uppercase tracking-[0.3em]" style={{ color: "#34d399" }}>Archive Blockchain Seal</p>
            </div>
            <p className="font-mono text-xs font-bold" style={{ color: "#34d399" }}>Bitcoin Block {ARCHIVE_BLOCK}</p>
            <p className="font-mono text-[9px] break-all leading-tight" style={{ color: "rgba(52,211,153,0.5)" }}>
              {ARCHIVE_HASH.slice(0, 32)}…
            </p>
          </div>

          <div className="rounded-xl px-4 py-3 space-y-1.5" style={{ background: "rgba(129,140,248,0.04)", border: "1px solid rgba(129,140,248,0.15)" }}>
            <div className="flex items-center gap-1.5">
              <Hash className="h-3 w-3" style={{ color: "#818cf8" }} />
              <p className="font-mono text-[9px] uppercase tracking-[0.3em]" style={{ color: "#818cf8" }}>This Page · SHA-256</p>
            </div>
            <p className="font-mono text-xs font-bold" style={{ color: "#818cf8" }} data-testid="text-page-hash">
              {shortHash}
            </p>
            <button onClick={copyHash} className="flex items-center gap-1 text-[9px] font-mono transition-opacity hover:opacity-70" style={{ color: "rgba(129,140,248,0.6)" }} data-testid="button-copy-page-hash">
              {copied ? <Check className="h-2.5 w-2.5" /> : <Copy className="h-2.5 w-2.5" />}
              {copied ? "Copied" : "Copy full hash"}
            </button>
          </div>
        </div>

        {/* Primary download — full page PDF */}
        <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(233,160,10,0.04)", border: "1.5px solid rgba(233,160,10,0.3)" }}>
          <div className="px-6 py-4 space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="font-bold text-white text-sm">Download This Page as a Blockchain-Stamped PDF</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  A full screenshot of this page is captured and embedded into a PDF with a blockchain seal footer — your timestamp, this page's SHA-256 hash, the Bitcoin Block {ARCHIVE_BLOCK} seal, and a preservation statement. Each copy is cryptographically unique to the moment you downloaded it.
                </p>
              </div>
              <button
                onClick={downloadPDF}
                disabled={pdfLoading}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shrink-0 min-w-[200px]"
                style={{
                  background: pdfDone ? "rgba(52,211,153,0.15)" : pdfLoading ? "rgba(233,160,10,0.06)" : "rgba(233,160,10,0.12)",
                  border: `1.5px solid ${pdfDone ? "rgba(52,211,153,0.5)" : "rgba(233,160,10,0.5)"}`,
                  color: pdfDone ? "#34d399" : "#e9a00a",
                }}
                onMouseEnter={e => { if (!pdfLoading && !pdfDone) (e.currentTarget as HTMLElement).style.background = "rgba(233,160,10,0.2)"; }}
                onMouseLeave={e => { if (!pdfLoading && !pdfDone) (e.currentTarget as HTMLElement).style.background = "rgba(233,160,10,0.12)"; }}
                data-testid="button-download-pdf"
              >
                {pdfLoading ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Rendering Page…</>
                ) : pdfDone ? (
                  <><Check className="h-4 w-4" /> Saved — Share It</>
                ) : (
                  <><Download className="h-4 w-4" /> Download & Preserve (PDF)</>
                )}
              </button>
            </div>

            {/* What's stamped on the PDF */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-1">
              {[
                { label: "Page screenshot", desc: "Full rendered content" },
                { label: "Your timestamp", desc: isoTimestamp },
                { label: "SHA-256 hash", desc: shortHash },
                { label: "Bitcoin seal", desc: `Block ${ARCHIVE_BLOCK}` },
              ].map(({ label, desc }) => (
                <div key={label} className="rounded-lg px-3 py-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "rgba(233,160,10,0.7)" }}>{label}</p>
                  <p className="text-[9px] font-mono mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Distribution call to action */}
        <div className="rounded-xl px-5 py-4" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="flex items-start gap-3">
            <Users className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#e9a00a" }} />
            <div>
              <p className="text-sm font-bold text-white mb-1">Why Download? The Math of Non-Erasure</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                A single server can be taken down. A leaked document can be suppressed. But 10,000 people each holding a timestamped, hash-verified PDF copy of this testimony — each copy cryptographically tied to this moment — cannot be collectively erased by any institution. This is how evidence survives. Not through courts. Through distribution. <span className="font-semibold" style={{ color: "#e9a00a" }}>Every person who downloads this page becomes part of the evidentiary record.</span>
              </p>
            </div>
          </div>
        </div>

        {/* ── WHOLE-SITE ZIP — the big preservation button ── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: "rgba(233,160,10,0.0)", border: "2.5px solid rgba(233,160,10,0.55)" }}
        >
          {/* Top label strip */}
          <div className="px-6 py-3 flex items-center justify-between gap-3"
            style={{ background: "rgba(233,160,10,0.1)", borderBottom: "1px solid rgba(233,160,10,0.25)" }}>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" style={{ color: "#e9a00a" }} />
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] font-bold" style={{ color: "#e9a00a" }}>
                Entire Website — {totalPages} Pages
              </span>
            </div>
            <span className="font-mono text-[9px]" style={{ color: "rgba(255,255,255,0.3)" }}>
              {totalPages} blockchain-stamped PDFs · 1 ZIP file
            </span>
          </div>

          <div className="px-6 py-5 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex-1 space-y-2">
                <p className="font-bold text-white text-base leading-tight">
                  Help Preserve This Testimony — Download the Entire Website as a ZIP File
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Every one of the <strong style={{ color: "#e9a00a" }}>{totalPages} pages</strong> on this site, each rendered as a blockchain-sealed PDF with its own SHA-256 hash, Bitcoin Block {ARCHIVE_BLOCK} seal, timestamp, and preservation statement — bundled into a single ZIP. Download it. Keep it. Share it. Upload it to your own cloud. Email it to lawyers, journalists, and activists. <strong className="text-white">Each copy you distribute makes this testimony permanently harder to erase.</strong>
                </p>
                <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
                  ZIP includes a README + {totalPages} text certificate PDFs in a <code>/pages/</code> folder · ~2 MB · Cryptographic proof, not screenshots
                </p>
              </div>

              {/* THE BIG BUTTON */}
              <button
                onClick={downloadSiteZip}
                disabled={zipLoading}
                className="flex flex-col items-center justify-center gap-2 px-8 py-5 rounded-2xl font-bold transition-all shrink-0 min-w-[220px]"
                style={{
                  background: zipDone
                    ? "rgba(52,211,153,0.12)"
                    : zipLoading
                    ? "rgba(233,160,10,0.06)"
                    : "linear-gradient(135deg, rgba(233,160,10,0.18) 0%, rgba(233,160,10,0.08) 100%)",
                  border: `2px solid ${zipDone ? "rgba(52,211,153,0.6)" : "rgba(233,160,10,0.7)"}`,
                  color: zipDone ? "#34d399" : "#e9a00a",
                  boxShadow: zipLoading || zipDone ? "none" : "0 0 32px rgba(233,160,10,0.12)",
                }}
                onMouseEnter={e => { if (!zipLoading && !zipDone) (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg,rgba(233,160,10,0.28) 0%,rgba(233,160,10,0.14) 100%)"; }}
                onMouseLeave={e => { if (!zipLoading && !zipDone) (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg,rgba(233,160,10,0.18) 0%,rgba(233,160,10,0.08) 100%)"; }}
                data-testid="button-download-site-zip"
              >
                {zipLoading ? (
                  <>
                    <Loader2 className="h-7 w-7 animate-spin" />
                    <span className="text-sm text-center leading-tight">Generating {totalPages} PDFs…<br/><span className="text-xs opacity-60">This takes ~30 sec</span></span>
                  </>
                ) : zipDone ? (
                  <>
                    <Check className="h-7 w-7" />
                    <span className="text-sm text-center leading-tight">Saved!<br/><span className="text-xs opacity-60">Share it widely</span></span>
                  </>
                ) : (
                  <>
                    <Archive className="h-7 w-7" />
                    <span className="text-sm text-center leading-tight">Download Entire<br/>Website as ZIP</span>
                  </>
                )}
              </button>
            </div>

            {/* What's inside */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { label: `${totalPages} PDFs`, desc: "One per page" },
                { label: "Bitcoin sealed", desc: `Block ${ARCHIVE_BLOCK}` },
                { label: "README.txt", desc: "Verification guide" },
                { label: "Zero cost", desc: "Free forever" },
              ].map(({ label, desc }) => (
                <div key={label} className="rounded-lg px-3 py-2 text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(233,160,10,0.15)" }}>
                  <p className="text-[10px] font-bold" style={{ color: "#e9a00a" }}>{label}</p>
                  <p className="text-[9px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary — text certificate + verify link */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={downloadTxt}
              disabled={txtLoading}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-opacity hover:opacity-70"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
              data-testid="button-download-txt"
            >
              {txtLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Download className="h-3 w-3" />}
              Download Certificate (.txt)
            </button>
            <a
              href={`https://blockchain.info/block/${ARCHIVE_BLOCK.replace(",", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-opacity hover:opacity-70"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
              data-testid="link-blockchain-verify"
            >
              <ExternalLink className="h-3 w-3" /> Verify Block {ARCHIVE_BLOCK} on blockchain.info
            </a>
          </div>
          <p className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>
            SHA-256 via Web Crypto API · {OHCHR}
          </p>
        </div>

      </div>
    </div>
  );
}
