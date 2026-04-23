import { useState, useEffect } from "react";
import { Heart, X, Copy, Check, ChevronDown, ChevronUp, CreditCard, ExternalLink, Flame } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

const PAYID = "rich@richmclean.com.au";

const TIERS = [
  { amount: "$5", label: "Witness", desc: "1 day online", highlight: false },
  { amount: "$25", label: "Defender", desc: "1 blockchain seal", highlight: true },
  { amount: "$100", label: "Champion", desc: "1 month hosting", highlight: false },
];

export function FloatingDonateWidget() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const { data } = useQuery<{ total: number }>({
    queryKey: ["/api/downloads/total"],
    staleTime: 30000,
  });
  const total = data?.total ?? 447000;

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const copyPayId = async () => {
    try {
      await navigator.clipboard.writeText(PAYID);
      setCopied(true);
      toast({ title: "PayID copied", description: "Open your banking app and paste to donate." });
      setTimeout(() => setCopied(false), 3000);
    } catch {}
  };

  if (!visible || dismissed) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-0"
      data-testid="floating-donate-widget"
      data-pdf-hide
    >
      {/* Expanded panel */}
      {open && (
        <div className="mb-2 w-72 rounded-2xl border border-amber-500/50 bg-zinc-950 shadow-2xl shadow-amber-900/30 overflow-hidden animate-in slide-in-from-bottom-2 duration-200">
          {/* Gold top stripe */}
          <div className="h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

          <div className="p-4 space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-amber-400 text-xs font-black uppercase tracking-widest flex items-center gap-1.5">
                  <Flame className="h-3.5 w-3.5" /> Support the Archive
                </p>
                <p className="text-zinc-400 text-[11px] mt-0.5 leading-snug">
                  <span className="text-white font-bold tabular-nums">{total.toLocaleString()}</span> downloads. Zero defamation suits. Zero rebuttals.
                </p>
              </div>
              <button
                onClick={() => setDismissed(true)}
                className="text-zinc-600 hover:text-zinc-400 transition-colors"
                data-testid="button-donate-widget-close"
                title="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Tiers */}
            <div className="grid grid-cols-3 gap-1.5">
              {TIERS.map((tier) => (
                <a
                  key={tier.amount}
                  href="/donate"
                  className={`flex flex-col items-center text-center p-2 rounded-xl border transition-all hover:scale-105 ${
                    tier.highlight
                      ? "border-amber-500/70 bg-amber-950/50 text-amber-300"
                      : "border-zinc-700/60 bg-zinc-900/60 text-zinc-400 hover:border-zinc-500"
                  }`}
                  data-testid={`button-donate-tier-${tier.label.toLowerCase()}`}
                >
                  <span className={`text-sm font-black ${tier.highlight ? "text-amber-400" : "text-white"}`}>
                    {tier.amount}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wide mt-0.5">{tier.label}</span>
                  <span className="text-[9px] text-zinc-600 mt-0.5 leading-tight">{tier.desc}</span>
                </a>
              ))}
            </div>

            {/* PayID */}
            <div className="bg-zinc-900 border border-amber-500/20 rounded-xl p-3 space-y-2">
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">PayID — instant bank transfer</p>
              <div className="flex items-center justify-between gap-2">
                <span className="text-white font-mono text-xs truncate">{PAYID}</span>
                <button
                  onClick={copyPayId}
                  className="flex items-center gap-1 bg-amber-600 hover:bg-amber-500 text-black font-bold text-[10px] px-2.5 py-1.5 rounded-lg transition-colors flex-shrink-0"
                  data-testid="button-donate-widget-copy"
                >
                  {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <p className="text-zinc-600 text-[10px]">ABN 78 833 496 164 · Barran Dodger Legal & Ethical Trust Fund</p>
            </div>

            {/* Commission */}
            <div className="flex gap-2">
              <a
                href="/donate"
                className="flex-1 flex items-center justify-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-black font-black text-xs py-2.5 rounded-xl transition-colors"
                data-testid="button-donate-widget-donate"
              >
                <Heart className="h-3.5 w-3.5" /> Donate
              </a>
              <a
                href="/commission-forensic-analysis"
                className="flex items-center justify-center gap-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600/50 text-zinc-300 font-bold text-[10px] px-3 py-2.5 rounded-xl transition-colors"
                data-testid="button-donate-widget-commission"
              >
                <CreditCard className="h-3 w-3" /> Commission $200
              </a>
            </div>

            <p className="text-zinc-700 text-[9px] text-center">
              Every dollar keeps the archive online, sealed on the blockchain, and free to download.
            </p>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 font-black text-xs px-4 py-3 rounded-2xl shadow-lg shadow-amber-900/30 transition-all hover:scale-105 ${
          open
            ? "bg-zinc-900 border border-amber-500/40 text-amber-400"
            : "bg-amber-600 hover:bg-amber-500 text-black"
        }`}
        data-testid="button-donate-widget-toggle"
      >
        <Heart className="h-4 w-4" />
        {open ? "Close" : "Support the Archive"}
        {open ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronUp className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}
