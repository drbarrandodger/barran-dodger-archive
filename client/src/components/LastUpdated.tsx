import { Clock } from "lucide-react";

const BUILD_TIMESTAMP =
  typeof window !== "undefined" && (window as any).__BD_BUILD__
    ? new Date((window as any).__BD_BUILD__)
    : new Date();

interface Props {
  date?: Date | string;
  label?: string;
  className?: string;
  variant?: "subtle" | "badge";
}

/**
 * Visible "Last Updated" timestamp — uses page render time by default
 * (server-injected via window.__BD_BUILD__). Trust signal + freshness signal
 * for both human visitors and search engine crawlers.
 */
export function LastUpdated({
  date,
  label = "Last updated",
  className = "",
  variant = "subtle",
}: Props) {
  const d = date ? new Date(date) : BUILD_TIMESTAMP;
  const formatted = d.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const iso = d.toISOString();

  if (variant === "badge") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold uppercase tracking-wider ${className}`}
        data-testid="text-last-updated-badge"
      >
        <Clock className="h-3 w-3" />
        <span>
          {label}: <time dateTime={iso}>{formatted}</time>
        </span>
      </span>
    );
  }

  return (
    <p
      className={`inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 ${className}`}
      data-testid="text-last-updated"
    >
      <Clock className="h-3 w-3" />
      <span>
        {label}: <time dateTime={iso} className="font-mono">{formatted}</time>
      </span>
    </p>
  );
}

export default LastUpdated;
