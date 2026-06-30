import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowRight, Shield, FileText, AlertTriangle, Scale, BookOpen } from "lucide-react";

const WHISTLEBLOWER_SECTIONS = [
  {
    title: "Master Forensic Evidence Report",
    href: "/master-forensic-evidence-report",
    desc: "The complete compiled forensic evidence report — the definitive reference document for all evidentiary claims.",
    badge: "Primary Report",
    icon: FileText,
    priority: true,
  },
  {
    title: "Master Evidence Register",
    href: "/master-evidence-register",
    desc: "A structured register of all evidence items — indexed, categorised, and cross-referenced with source documentation.",
    badge: "Evidence Index",
    icon: Scale,
    priority: true,
  },
  {
    title: "Honeytrap Infiltration Report",
    href: "/honeytrap-infiltration-report",
    desc: "Documented evidence of infiltration operations — with named individuals, dated records, and corroborating materials.",
    badge: "Infiltration Evidence",
    icon: AlertTriangle,
  },
  {
    title: "Able Care Entrapment Network",
    href: "/able-care-entrapment-network",
    desc: "A comprehensive report on the NDIS support worker network used in documented entrapment operations.",
    badge: "NDIS Evidence",
    icon: Shield,
  },
  {
    title: "NDIS Surveillance Evidence",
    href: "/ndis-surveillance-evidence",
    desc: "Documented surveillance operations conducted under the guise of NDIS support services.",
    badge: "Surveillance Record",
    icon: AlertTriangle,
  },
  {
    title: "They Bought Off Judges",
    href: "/they-bought-off-judges",
    desc: "A formal evidentiary record regarding documented judicial conduct and institutional interference with legal proceedings.",
    badge: "Judicial Conduct",
    icon: Scale,
  },
  {
    title: "Tony Ridley Full Dossier",
    href: "/tony-ridley-full-dossier",
    desc: "The complete documented record regarding Tony Ridley — including correspondence, recordings, and corroborating evidence.",
    badge: "Individual Dossier",
    icon: FileText,
  },
  {
    title: "Police Complicity Death Threat",
    href: "/police-complicity-death-threat",
    desc: "Documentary evidence of a death threat and the documented response — or non-response — of law enforcement.",
    badge: "Critical Evidence",
    icon: AlertTriangle,
  },
  {
    title: "Able Care Murder Threat Call",
    href: "/able-care-murder-threat-call",
    desc: "Recorded and documented evidence of a murder threat originating within the Able Care network.",
    badge: "Recorded Evidence",
    icon: AlertTriangle,
  },
  {
    title: "Whistleblower Comparison",
    href: "/whistleblower-comparison",
    desc: "A structured comparison of this case against internationally recognised whistleblower precedents.",
    badge: "Comparative Analysis",
    icon: Shield,
  },
  {
    title: "The Law They Overlooked",
    href: "/the-law-they-overlooked",
    desc: "A legal analysis of the specific legislative provisions that apply to this case — and were not applied.",
    badge: "Legal Analysis",
    icon: Scale,
  },
  {
    title: "Evidence Significance Registry",
    href: "/evidence-significance-registry",
    desc: "A formal registry assigning significance ratings to each evidence item — with methodology and reasoning.",
    badge: "Evidence Registry",
    icon: BookOpen,
  },
];

export default function WhistleblowerRecord() {
  return (
    <div className="min-h-screen" style={{ background: "hsl(44, 70%, 94%)" }}>
      <SEO
        title="Whistleblower Record — Barran Dodger Archive"
        description="The complete formal whistleblower record of Dr. Richard McLean — documented systemic misconduct, forensic evidence, and corroborated records."
        path="/whistleblower-record"
        keywords="formal whistleblower record Dr Richard McLean, documented systemic misconduct Australia, official whistleblower declaration, Public Interest Disclosure PID Act 2013 record, Federal Court whistleblower confirmation, Commonwealth Ombudsman complaint record, APRA whistleblower submission, OAIC complaint record, most formal whistleblower record Australian history, corroborated whistleblower evidence, 623 propositions formal record, zero defamation formal whistleblower, whistleblower legal status Australia confirmed, institutional misconduct documented record"
      />
      <Navigation />

      <main style={{ paddingTop: "calc(var(--banner-height, 120px) + var(--nav-height, 64px) + 4rem)" }} className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Title Header */}
          <div className="mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "rgba(26,74,107,0.1)", color: "#1a4a6b" }}>
              Formal Record
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4" style={{ color: "#3d1400" }}>
              Whistleblower Record
            </h1>
            <div className="h-1 w-20 rounded-full mb-6" style={{ background: "#1a4a6b" }} />
            <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "#6b4010" }}>
              The complete formal record of systemic misconduct — with documentary evidence, forensic analyses, and corroborated reports.
            </p>
          </div>

          {/* Orientation Block */}
          <div className="border rounded-2xl p-8 mb-10" style={{ borderColor: "rgba(26,74,107,0.25)", background: "rgba(26,74,107,0.04)" }}>
            <h2 className="text-xl font-bold mb-3 uppercase tracking-wider" style={{ color: "#1a4a6b" }}>What You Are Viewing</h2>
            <p className="leading-relaxed" style={{ color: "#4a2800" }}>
              This section contains the formal whistleblower record of Dr. Richard William McLean — a structured, evidence-based account of institutional misconduct spanning multiple government agencies, legal systems, and support networks. Every document in this section is backed by primary source evidence available in the Evidence Archive.
            </p>
          </div>

          {/* Context Block */}
          <div className="border rounded-2xl p-8 mb-12" style={{ borderColor: "rgba(139,0,0,0.2)", background: "rgba(139,0,0,0.04)" }}>
            <h2 className="text-xl font-bold mb-3 uppercase tracking-wider" style={{ color: "#8b0000" }}>Why This Record Exists</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#4a2800" }}>
              Dr. McLean has documented a systematic pattern of conduct across multiple institutions — including government departments, judicial bodies, disability support networks, and law enforcement agencies. After formal complaints were either dismissed or ignored, the record was made public.
            </p>
            <p className="leading-relaxed" style={{ color: "#4a2800" }}>
              This record has been submitted to international bodies including the ICC (Article 7) and UNHCR. The public distribution of this material ensures it cannot be suppressed through any single institutional mechanism.
            </p>
          </div>

          {/* Priority documents */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: "#1a4a6b" }} />
              <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: "#1a4a6b" }}>Primary Documents</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {WHISTLEBLOWER_SECTIONS.filter(s => s.priority).map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href}>
                    <div
                      className="group border-2 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg h-full"
                      style={{ borderColor: "rgba(26,74,107,0.4)", background: "rgba(26,74,107,0.04)" }}
                      data-testid={`card-whistleblower-primary-${item.title.toLowerCase().replace(/\s+/g, '-').substring(0, 30)}`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg flex-shrink-0" style={{ background: "rgba(26,74,107,0.12)" }}>
                            <Icon className="h-4 w-4" style={{ color: "#1a4a6b" }} />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "rgba(26,74,107,0.1)", color: "#1a4a6b" }}>
                            {item.badge}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "rgba(26,74,107,0.5)" }} />
                      </div>
                      <h3 className="font-serif font-bold text-base mb-2" style={{ color: "#3d1400" }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b4010" }}>{item.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* All other documents */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: "#8b0000" }} />
              <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: "#8b0000" }}>All Whistleblower Documents</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {WHISTLEBLOWER_SECTIONS.filter(s => !s.priority).map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href}>
                    <div
                      className="group border-2 rounded-2xl p-5 cursor-pointer transition-all hover:shadow-lg h-full"
                      style={{ borderColor: "rgba(139,0,0,0.2)", background: "rgba(253,243,216,0.7)" }}
                      data-testid={`card-whistleblower-${item.title.toLowerCase().replace(/\s+/g, '-').substring(0, 30)}`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg flex-shrink-0" style={{ background: "rgba(139,0,0,0.1)" }}>
                            <Icon className="h-3.5 w-3.5" style={{ color: "#8b0000" }} />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#8b0000" }}>
                            {item.badge}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "rgba(139,0,0,0.4)" }} />
                      </div>
                      <h3 className="font-serif font-bold text-sm mb-1.5" style={{ color: "#3d1400" }}>{item.title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "#6b4010" }}>{item.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t" style={{ borderColor: "rgba(139,105,20,0.2)" }}>
            <Link href="/master-forensic-evidence-report">
              <button className="flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl" style={{ background: "#1a4a6b", color: "#fdf3d8" }}>
                Read Primary Report <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="/evidence">
              <button className="flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl border-2" style={{ borderColor: "#8b6914", color: "#8b6914" }}>
                Evidence Archive <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="/donate">
              <button className="flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl border-2" style={{ borderColor: "rgba(139,0,0,0.3)", color: "#8b0000" }}>
                Support the Archive <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
