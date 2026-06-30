import { useQuery } from "@tanstack/react-query";
import { Link2, ShieldCheck, ExternalLink } from "lucide-react";

interface TimestampRecord {
  id: number;
  slug: string;
  filename: string | null;
  sha256: string;
  otsReceipt: string | null;
  submittedAt: string | null;
  category: string | null;
  calendarUrl: string | null;
}

interface BlockchainTimestampBadgeProps {
  docSlug: string;
  pageSlug?: string;
  label?: string;
  accentColor?: "indigo" | "amber" | "green";
}

function useTimestamp(slug: string) {
  return useQuery<TimestampRecord>({
    queryKey: ["/api/bitcoin-timestamp", slug],
    queryFn: async () => {
      const res = await fetch(`/api/bitcoin-timestamp/${encodeURIComponent(slug)}`);
      if (!res.ok) throw new Error("not found");
      return res.json();
    },
    staleTime: 1000 * 60 * 60,
    retry: false,
  });
}

function HashRow({ label, hash }: { label: string; hash: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-indigo-400/50 mb-0.5">{label}</p>
      <p
        className="font-mono text-[10px] break-all select-all text-yellow-300/90 leading-relaxed"
        data-testid={`hash-${label.toLowerCase().replace(/\s/g, "-")}`}
      >
        {hash}
      </p>
    </div>
  );
}

function TimestampDetail({ record, label }: { record: TimestampRecord; label: string }) {
  const date = record.submittedAt
    ? new Date(record.submittedAt).toLocaleDateString("en-AU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;
  const verifyUrl = `https://opentimestamps.org/timestamp/${record.sha256}`;
  const blockchainUrl = `https://www.blockchain.com/explorer/search?search=${record.sha256}`;

  return (
    <div className="space-y-2">
      <HashRow label={label} hash={record.sha256} />
      <div className="flex flex-wrap gap-x-4 gap-y-1 items-center">
        {date && (
          <span className="text-[10px] text-white/50">
            Submitted: <span className="text-white/70">{date}</span>
          </span>
        )}
        {record.calendarUrl && (
          <span className="text-[10px] text-white/50">
            Calendar:{" "}
            <span className="text-white/70 font-mono text-[9px]">
              {record.calendarUrl.replace("https://", "").split("/")[0]}
            </span>
          </span>
        )}
      </div>
      <div className="flex gap-2 flex-wrap">
        <a
          href={verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] text-indigo-400/80 hover:text-indigo-300 transition-colors"
          data-testid="link-ots-verify"
        >
          <ExternalLink className="w-2.5 h-2.5" />
          Verify on OpenTimestamps
        </a>
        <a
          href={blockchainUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] text-orange-400/60 hover:text-orange-300 transition-colors"
          data-testid="link-blockchain-verify"
        >
          <ExternalLink className="w-2.5 h-2.5" />
          Bitcoin Explorer
        </a>
      </div>
    </div>
  );
}

export function BlockchainTimestampBadge({
  docSlug,
  pageSlug,
  label = "Forensic Analysis PDF",
  accentColor = "indigo",
}: BlockchainTimestampBadgeProps) {
  const { data: docRecord, isLoading: docLoading } = useTimestamp(docSlug);
  const { data: pageRecord, isLoading: pageLoading } = useTimestamp(pageSlug ?? "__none__");

  const borderColor =
    accentColor === "amber"
      ? "border-orange-600/30"
      : accentColor === "green"
      ? "border-green-600/30"
      : "border-indigo-600/30";
  const bgColor =
    accentColor === "amber"
      ? "bg-orange-950/20"
      : accentColor === "green"
      ? "bg-green-950/20"
      : "bg-indigo-950/20";
  const headerBorderColor =
    accentColor === "amber"
      ? "border-orange-700/20"
      : accentColor === "green"
      ? "border-green-700/20"
      : "border-indigo-700/20";
  const iconColor =
    accentColor === "amber"
      ? "text-orange-400"
      : accentColor === "green"
      ? "text-green-400"
      : "text-indigo-400";
  const titleColor =
    accentColor === "amber"
      ? "text-orange-300/70"
      : accentColor === "green"
      ? "text-green-300/70"
      : "text-indigo-300/70";

  return (
    <div
      className={`rounded-xl border ${borderColor} ${bgColor} overflow-hidden`}
      data-testid="blockchain-timestamp-badge"
    >
      <div
        className={`flex items-center gap-2 px-5 pt-4 pb-2 border-b ${headerBorderColor}`}
      >
        <Link2 className={`w-4 h-4 ${iconColor} flex-shrink-0`} />
        <span className={`${titleColor} text-xs tracking-widest uppercase font-sans`}>
          Bitcoin Blockchain Timestamp — Permanent Record
        </span>
        <ShieldCheck className={`w-3.5 h-3.5 ${iconColor} ml-auto flex-shrink-0`} />
      </div>

      <div className="px-5 py-4 space-y-4 font-sans text-xs">
        {docLoading ? (
          <p className="text-white/30 text-[10px] animate-pulse">Loading SHA-256 hash…</p>
        ) : docRecord ? (
          <TimestampDetail record={docRecord} label={`${label} — SHA-256`} />
        ) : (
          <p className="text-white/30 text-[10px]">PDF timestamp pending Bitcoin confirmation.</p>
        )}

        {pageSlug && !pageLoading && pageRecord && (
          <div className="pt-2 border-t border-white/5">
            <TimestampDetail record={pageRecord} label="Web Page — SHA-256" />
          </div>
        )}

        <div className="pt-2 border-t border-white/5 space-y-1">
          <p className="text-[10px] text-white/40 leading-relaxed">
            SHA-256 hash is cryptographically immutable — any alteration of the document produces
            a different hash, making tampering immediately detectable. Anchored to the Bitcoin
            blockchain across ~15,000 independent nodes. Independently verifiable by any person on
            earth.
          </p>
          <p className="text-[10px] text-white/30">
            Included in Detonation Archive ZIP · GitHub mirror (drbarrandodger/barran-dodger-archive)
            · barrandodger.com permanent record · ABN 78 833 496 164
          </p>
        </div>
      </div>
    </div>
  );
}
