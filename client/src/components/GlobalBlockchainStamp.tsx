import { useState, useCallback } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import {
  Lock, Download, Loader2, Copy, CheckCheck,
  ExternalLink, FileText, Image, ChevronUp, ChevronDown, X, Shield
} from "lucide-react";

interface ArchiveInfo {
  path: string;
  title: string;
  aiStatement: string;
  sha256: string;
  timestampSlug: string;
  generatedAt: string;
  otsVerifyUrl: string;
}

export function GlobalBlockchainStamp() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [certLoading, setCertLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  const { data: archive, isLoading } = useQuery<ArchiveInfo>({
    queryKey: ["/api/page-archive/info", location],
    queryFn: () =>
      fetch(`/api/page-archive/info?path=${encodeURIComponent(location)}`).then(
        (r) => r.json()
      ),
    staleTime: 1000 * 60 * 60,
    retry: 1,
    enabled: open,
  });

  const handleCopy = useCallback(() => {
    if (archive?.sha256) {
      navigator.clipboard.writeText(archive.sha256);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [archive?.sha256]);

  const handleCertPDF = useCallback(async () => {
    setCertLoading(true);
    try {
      const res = await fetch(
        `/api/page-archive/pdf?path=${encodeURIComponent(location)}`
      );
      if (!res.ok) throw new Error("PDF failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `barrandodger-certificate${location.replace(/\//g, "-") || "-home"}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
    } finally {
      setCertLoading(false);
    }
  }, [location]);

  const handleFullPagePDF = useCallback(async () => {
    if (!archive) return;
    setPageLoading(true);
    try {
      const [html2canvasModule, jsPDFModule] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);
      const html2canvas = html2canvasModule.default;
      const { jsPDF } = jsPDFModule;

      const canvas = await html2canvas(document.body, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        logging: false,
        ignoreElements: (el) =>
          el.classList.contains("global-blockchain-stamp-widget") ||
          el.classList.contains("floating-share-bar") ||
          el.id === "chatbot-widget",
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.85);
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? "landscape" : "portrait",
        unit: "px",
        format: [canvas.width, canvas.height + 80],
      });

      pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);

      pdf.setFillColor(10, 10, 10);
      pdf.rect(0, canvas.height, canvas.width, 80, "F");

      pdf.setTextColor(184, 150, 12);
      pdf.setFontSize(7);
      pdf.setFont("helvetica", "bold");
      pdf.text("BARRAN DODGER LEGAL & ETHICAL TRUST FUND — ABN 78 833 496 164", canvas.width / 2, canvas.height + 14, { align: "center" });

      pdf.setTextColor(255, 255, 255);
      pdf.setFont("courier", "normal");
      pdf.setFontSize(6.5);
      pdf.text(`SHA-256: ${archive.sha256}`, canvas.width / 2, canvas.height + 28, { align: "center" });

      pdf.setTextColor(150, 150, 150);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(6);
      pdf.text(
        `Bitcoin-timestamped via OpenTimestamps · Verify: opentimestamps.org/timestamp/${archive.sha256.slice(0, 16)}… · ${new Date().toUTCString()}`,
        canvas.width / 2,
        canvas.height + 42,
        { align: "center" }
      );

      pdf.setTextColor(100, 100, 100);
      pdf.text(
        "This document is permanently embedded in the Bitcoin blockchain. No government, court, or institution can erase or alter it. ICC Article 7 | UNHCR Geneva | Federal Court of Australia",
        canvas.width / 2,
        canvas.height + 56,
        { align: "center", maxWidth: canvas.width - 40 }
      );

      pdf.setTextColor(184, 150, 12);
      pdf.text(
        `barrandodger.com${location} · Generated ${new Date().toLocaleDateString("en-AU")}`,
        canvas.width / 2,
        canvas.height + 70,
        { align: "center" }
      );

      pdf.save(
        `barrandodger-fullpage${location.replace(/\//g, "-") || "-home"}-${archive.sha256.slice(0, 8)}.pdf`
      );
    } catch (err) {
      console.error("Full page PDF error:", err);
    } finally {
      setPageLoading(false);
    }
  }, [archive, location]);

  const isSpecialPage =
    location === "/page-archive-registry" || location.startsWith("/admin");

  if (isSpecialPage) return null;

  return (
    <div
      className="global-blockchain-stamp-widget"
      style={{
        position: "fixed",
        bottom: "90px",
        left: "16px",
        zIndex: 54,
        maxWidth: open ? "340px" : "auto",
        width: open ? "340px" : "auto",
      }}
    >
      {open ? (
        <div
          className="rounded-xl overflow-hidden shadow-2xl border border-orange-500/30"
          style={{ background: "rgba(8,6,0,0.97)" }}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-orange-500/30">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                Bitcoin-Sealed Archive
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded hover:bg-white/10 transition-colors"
            >
              <X className="w-3.5 h-3.5 text-white/40" />
            </button>
          </div>

          <div className="px-4 py-3 space-y-3">
            {isLoading ? (
              <div className="flex items-center gap-2 py-2 text-white/40">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-orange-500" />
                <span className="text-xs">Anchoring to Bitcoin blockchain…</span>
              </div>
            ) : archive ? (
              <>
                <div>
                  <p className="text-[10px] font-bold text-orange-500 uppercase tracking-wider mb-1">
                    SHA-256 Cryptographic Hash
                  </p>
                  <div className="flex items-center gap-2 bg-black/40 rounded-lg px-2 py-1.5 border border-orange-500/30">
                    <code className="text-[10px] text-white/60 font-mono flex-1 break-all leading-tight">
                      {archive.sha256}
                    </code>
                    <button
                      onClick={handleCopy}
                      className="shrink-0 p-1 hover:bg-white/10 rounded transition-colors"
                      title="Copy hash"
                    >
                      {copied ? (
                        <CheckCheck className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3 text-white/30" />
                      )}
                    </button>
                  </div>
                </div>

                {archive.aiStatement && (
                  <div className="border-l-2 border-orange-500/30 pl-2.5 py-1">
                    <p className="text-[10px] font-bold text-orange-500/80 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Shield className="w-2.5 h-2.5" />
                      AI Archival Significance
                    </p>
                    <p className="text-[10px] text-white/50 leading-relaxed line-clamp-3">
                      {archive.aiStatement}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={handleCertPDF}
                    disabled={certLoading}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-bold transition-all disabled:opacity-60"
                    style={{
                      background: "linear-gradient(135deg,#b8960c 0%,#d4af37 100%)",
                      color: "#000",
                    }}
                    title="Download blockchain certificate PDF"
                  >
                    {certLoading ? (
                      <Loader2 className="w-3 h-3 animate-spin" />
                    ) : (
                      <FileText className="w-3 h-3" />
                    )}
                    {certLoading ? "…" : "Certificate"}
                  </button>

                  <button
                    onClick={handleFullPagePDF}
                    disabled={pageLoading || !archive}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-bold border border-orange-500/30 text-orange-300 hover:bg-orange-500/10 transition-all disabled:opacity-60"
                    title="Download full page as PDF with blockchain hash watermark"
                  >
                    {pageLoading ? (
                      <Loader2 className="w-3 h-3 animate-spin" />
                    ) : (
                      <Image className="w-3 h-3" />
                    )}
                    {pageLoading ? "Rendering…" : "Full Page"}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={archive.otsVerifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] border border-white/10 text-white/40 hover:text-white/60 hover:bg-white/5 transition-colors"
                  >
                    <ExternalLink className="w-2.5 h-2.5" />
                    Verify Bitcoin
                  </a>
                  <a
                    href="/page-archive-registry"
                    className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] border border-white/10 text-white/40 hover:text-white/60 hover:bg-white/5 transition-colors"
                  >
                    <Download className="w-2.5 h-2.5" />
                    All Archives
                  </a>
                </div>

                <p className="text-[9px] text-white/20 leading-relaxed pt-0.5">
                  Permanently sealed on Bitcoin via OpenTimestamps. No government or
                  court can erase or alter it. ABN 78 833 496 164.
                </p>
              </>
            ) : (
              <p className="text-xs text-white/30 py-2">
                Archive generation failed. Refresh and try again.
              </p>
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg border border-orange-500/30 hover:border-orange-500/30 transition-all group"
          style={{ background: "rgba(8,6,0,0.92)" }}
          title="Download this page as a blockchain-sealed PDF"
          data-testid="button-open-blockchain-stamp"
        >
          <div className="w-5 h-5 rounded-md bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
            <Lock className="w-2.5 h-2.5 text-orange-400" />
          </div>
          <span className="text-[10px] font-bold text-orange-500/80 uppercase tracking-wider group-hover:text-orange-400 transition-colors">
            ⛓ Archive PDF
          </span>
          <ChevronUp className="w-3 h-3 text-white/25 group-hover:text-white/50 transition-colors" />
        </button>
      )}
    </div>
  );
}
