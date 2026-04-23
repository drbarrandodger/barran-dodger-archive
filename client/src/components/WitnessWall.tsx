import { useQuery } from "@tanstack/react-query";
import { Globe, Download, Shield, Lock, Zap } from "lucide-react";

const GLOBAL_FACTS = [
  { icon: Globe, text: "416,000+ downloads across 6 continents", color: "text-emerald-400" },
  { icon: Shield, text: "52 forensic analyses — 675/675 propositions corroborated", color: "text-blue-400" },
  { icon: Lock, text: "Bitcoin blockchain sealed — beyond deletion, beyond suppression", color: "text-amber-400" },
  { icon: Zap, text: "ICC Article 7 formal receipt confirmed — The Hague", color: "text-red-400" },
  { icon: Globe, text: "UNHCR Geneva submission lodged", color: "text-emerald-400" },
  { icon: Shield, text: "Not one rebuttal. Not one defamation action. Because the record is accurate.", color: "text-blue-400" },
  { icon: Download, text: "ABC National broadcast. McGill University. Australian Parliament.", color: "text-amber-400" },
  { icon: Zap, text: "Human Rights Award — from the same government that persecuted him", color: "text-purple-400" },
  { icon: Lock, text: "845 Bitcoin blockchain timestamps. Every document. Verified.", color: "text-amber-400" },
  { icon: Globe, text: "Formally studied in Australian Parliament", color: "text-emerald-400" },
];

interface WitnessWallProps {
  variant?: "strip" | "card";
  className?: string;
}

export function WitnessWall({ variant = "strip", className = "" }: WitnessWallProps) {
  const { data: statsData } = useQuery<{ allTime: number; last24h: number; last30d: number }>({
    queryKey: ["/api/download-stats"],
    staleTime: 30000,
  });

  if (variant === "card") {
    return (
      <div className={`rounded-2xl border border-zinc-700/40 bg-zinc-900/40 overflow-hidden ${className}`}>
        <div className="h-0.5 bg-gradient-to-r from-emerald-600 via-blue-500 to-amber-500" />
        <div className="p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">Global Witness Record</span>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-2xl font-mono font-black text-emerald-400" data-testid="text-witness-alltime">
                {statsData ? `${statsData.allTime.toLocaleString()}+` : "416K+"}
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">All-time downloads</div>
            </div>
            <div>
              <div className="text-2xl font-mono font-black text-blue-400" data-testid="text-witness-today">
                {statsData ? statsData.last24h.toLocaleString() : "5,000+"}
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Today</div>
            </div>
            <div>
              <div className="text-2xl font-mono font-black text-amber-400" data-testid="text-witness-month">
                {statsData ? `${Math.round(statsData.last30d / 1000)}K+` : "187K+"}
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">This month</div>
            </div>
          </div>
          <div className="space-y-1.5">
            {GLOBAL_FACTS.slice(0, 4).map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.text} className="flex items-start gap-2 text-xs">
                  <Icon className={`h-3 w-3 ${fact.color} flex-shrink-0 mt-0.5`} />
                  <span className="text-zinc-400 leading-relaxed">{fact.text}</span>
                </div>
              );
            })}
          </div>
          <div className="border-t border-zinc-800 pt-3">
            <a
              href="/archive-detonation"
              className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-zinc-300 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
              data-testid="button-witness-download"
            >
              <Download className="h-3.5 w-3.5" />
              Download the Archive
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-zinc-900/60 border-y border-zinc-800/50 py-3 overflow-hidden ${className}`} data-testid="witness-wall-strip">
      <div className="flex items-center gap-8 animate-[marquee_40s_linear_infinite] whitespace-nowrap w-max">
        {[...GLOBAL_FACTS, ...GLOBAL_FACTS].map((fact, i) => {
          const Icon = fact.icon;
          return (
            <div key={i} className="flex items-center gap-2 shrink-0">
              <Icon className={`h-3 w-3 ${fact.color}`} />
              <span className="text-xs text-zinc-400">{fact.text}</span>
              <span className="text-zinc-700 mx-2">·</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
