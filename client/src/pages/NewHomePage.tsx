import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { ProphecyBanner } from "@/components/ProphecyBanner";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ArrowRight, BookOpen, Shield, FileText, Scale, Download, Star, Lock, Unlock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const PATHWAY_CARDS = [
  {
    title: "Gospel",
    href: "/gospel",
    description: "Prophetic writings and spiritual declarations — authored by Dr. Richard McLean.",
    icon: Star,
    color: "#8b6914",
  },
  {
    title: "Testimony",
    href: "/testimony",
    description: "A documented, first-person account of institutional persecution and survival across 20+ years.",
    icon: FileText,
    color: "#8b0000",
  },
  {
    title: "Whistleblower Record",
    href: "/whistleblower",
    description: "The complete formal record of systemic misconduct, cover-up operations, and documented evidence.",
    icon: Shield,
    color: "#1a4a6b",
  },
  {
    title: "Publications",
    href: "/publications",
    description: "Authored books, forensic analyses, and compiled archives — freely available to download.",
    icon: BookOpen,
    color: "#2d6a1a",
  },
  {
    title: "Evidence Archive",
    href: "/evidence",
    description: "2,077+ source documents, recordings, and blockchain-verified records — all preserved.",
    icon: Scale,
    color: "#6b1a6b",
  },
];

const ACCESS_TIERS = [
  {
    label: "Free Access",
    icon: Unlock,
    color: "#2d6a1a",
    items: ["Partial document previews", "Selected free publications", "Public evidence summaries", "All testimony pages"],
  },
  {
    label: "Full Archive Access",
    icon: BookOpen,
    color: "#8b6914",
    items: ["Complete PDF library", "Full book collection", "Compiled zip archives", "Forensic analysis reports"],
    cta: "Access Full Archive",
    href: "/publications",
    highlight: true,
  },
  {
    label: "Support the Archive",
    icon: Lock,
    color: "#8b0000",
    items: ["Fund ongoing hosting costs", "Support blockchain timestamping", "Ensure continued preservation", "PayID: rich@richmclean.com.au"],
    cta: "Support Now",
    href: "/donate",
  },
];

export default function NewHomePage() {
  const { data: stats } = useQuery<{ total: number }>({ queryKey: ["/api/downloads/total"] });
  const downloadCount = stats?.total ? `${(stats.total).toLocaleString()}+` : "450,000+";

  return (
    <div className="min-h-screen" style={{ background: "hsl(44, 70%, 94%)" }}>
      <SEO
        title="Barran Dodger — Digital Archive of Dr. Richard McLean"
        description="450,000+ downloads. A complete, preserved archive of authored works, testimony, and documentation accessed globally."
      />
      <Navigation />
      <ProphecyBanner style={{ paddingTop: "calc(var(--banner-height, 120px) + var(--nav-height, 64px))" }} />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pb-24 px-4"
        style={{ paddingTop: "5rem" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,0,0,0.06) 0%, transparent 70%)" }} className="absolute inset-0" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border rounded-full px-5 py-2 mb-8" style={{ borderColor: "rgba(139,105,20,0.4)", background: "rgba(139,105,20,0.06)" }}>
            <Download className="h-4 w-4" style={{ color: "#8b6914" }} />
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#8b6914" }}>
              {downloadCount} Documents Downloaded Worldwide
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6"
            style={{ color: "#3d1400" }}
            data-testid="hero-headline"
          >
            {downloadCount} Downloads.
            <br />
            <span style={{ color: "#8b0000" }}>One Complete Record.</span>
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#6b4010" }}>
            A preserved digital archive of authored works, testimony, and documentation accessed globally.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/testimony">
              <button
                className="flex items-center gap-2 font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg"
                style={{ background: "#8b0000", color: "#fdf3d8" }}
                data-testid="btn-read-the-record"
              >
                Read the Record <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <Link href="/evidence">
              <button
                className="flex items-center gap-2 font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg"
                style={{ background: "#8b6914", color: "#fdf3d8" }}
                data-testid="btn-view-evidence"
              >
                View the Evidence <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <Link href="/publications">
              <button
                className="flex items-center gap-2 font-bold text-base px-8 py-4 rounded-xl border-2 transition-all"
                style={{ borderColor: "#8b6914", color: "#8b6914", background: "transparent" }}
                data-testid="btn-access-books"
              >
                Access the Books <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(139,105,20,0.4), transparent)" }} />
      </div>

      {/* ─── WHAT THIS WEBSITE IS ─────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="border rounded-2xl p-8 md:p-12"
            style={{ borderColor: "rgba(139,105,20,0.3)", background: "rgba(139,105,20,0.04)" }}
          >
            <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: "#3d1400" }}>
              What This Website Is
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  label: "Complete & Unedited",
                  body: "This is a complete archive. Nothing has been removed or altered. All materials are preserved in their original form exactly as created by Dr. Richard McLean.",
                },
                {
                  label: "Globally Accessible",
                  body: "Every document, book, and recording is accessible. No suppression. No gatekeeping. Full transparency for every reader, in every country.",
                },
                {
                  label: "Permanently Preserved",
                  body: "Key documents are blockchain-timestamped and distributed across multiple servers — beyond any single court order, government directive, or point of failure.",
                },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: "#8b0000" }} />
                    <p className="font-bold text-sm uppercase tracking-wider" style={{ color: "#3d1400" }}>{item.label}</p>
                  </div>
                  <p className="text-sm leading-relaxed pl-4" style={{ color: "#6b4010" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─────────────────────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ background: "rgba(139,0,0,0.04)", borderTop: "1px solid rgba(139,0,0,0.1)", borderBottom: "1px solid rgba(139,0,0,0.1)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-8xl md:text-9xl font-serif font-bold mb-4"
              style={{ color: "#8b0000", textShadow: "0 2px 16px rgba(139,0,0,0.12)" }}
              data-testid="stat-downloads"
            >
              {downloadCount}
            </p>
            <p className="text-2xl font-bold mb-4" style={{ color: "#3d1400" }}>Document Downloads</p>
            <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#6b4010" }}>
              This level of engagement reflects sustained global interaction with the archive — across 6 continents, in over 40 countries. The scale of reach is the proof.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "2,077+", label: "Documents" },
              { num: "675", label: "AI Verified" },
              { num: "6", label: "Continents" },
              { num: "40+", label: "Countries" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-xl py-6 px-3 border"
                style={{ background: "rgba(139,0,0,0.06)", borderColor: "rgba(139,0,0,0.15)" }}
              >
                <p className="text-3xl font-serif font-bold mb-2" style={{ color: "#8b0000" }}>{stat.num}</p>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6b4010" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PATHWAY NAVIGATION CARDS ─────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: "#3d1400" }}>
              Enter the Archive
            </h2>
            <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "#6b4010" }}>
              Every section contains original, unaltered material. Choose where to begin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PATHWAY_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <Link key={card.href} href={card.href}>
                  <div
                    className="group h-full border-2 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-xl"
                    style={{
                      borderColor: `${card.color}33`,
                      background: "rgba(253,243,216,0.7)",
                    }}
                    data-testid={`card-pathway-${card.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="p-3 rounded-xl"
                        style={{ background: `${card.color}18` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: card.color }} />
                      </div>
                      <ArrowRight
                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
                        style={{ color: `${card.color}80` }}
                      />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2" style={{ color: "#3d1400" }}>{card.title}</h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b4010" }}>{card.description}</p>
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: card.color }}
                    >
                      Enter Section →
                    </span>
                  </div>
                </Link>
              );
            })}

            <Link href="/donate">
              <div
                className="group h-full border-2 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-xl"
                style={{ borderColor: "rgba(139,0,0,0.25)", background: "rgba(139,0,0,0.04)" }}
                data-testid="card-pathway-support"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl" style={{ background: "rgba(139,0,0,0.12)" }}>
                    <Scale className="h-6 w-6" style={{ color: "#8b0000" }} />
                  </div>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" style={{ color: "rgba(139,0,0,0.4)" }} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2" style={{ color: "#8b0000" }}>Support</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b4010" }}>
                  This archive runs on donations alone. Support the continuation of this record.
                </p>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#8b0000" }}>
                  Support the Archive →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(139,105,20,0.4), transparent)" }} />
      </div>

      {/* ─── ACCESS TIERS ─────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: "#3d1400" }}>
              Access Levels
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#6b4010" }}>
              All content is available. Support the archive to ensure it stays that way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACCESS_TIERS.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.label}
                  className="rounded-2xl border-2 p-6 flex flex-col"
                  style={{
                    borderColor: tier.highlight ? `${tier.color}` : `${tier.color}33`,
                    background: tier.highlight ? `${tier.color}08` : "rgba(253,243,216,0.5)",
                    boxShadow: tier.highlight ? `0 4px 24px ${tier.color}15` : "none",
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl" style={{ background: `${tier.color}18` }}>
                      <Icon className="h-5 w-5" style={{ color: tier.color }} />
                    </div>
                    <h3 className="font-serif font-bold text-lg" style={{ color: "#3d1400" }}>{tier.label}</h3>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#5a3010" }}>
                        <span className="font-bold mt-0.5" style={{ color: tier.color }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {tier.cta && tier.href && (
                    <Link href={tier.href}>
                      <button
                        className="w-full font-bold text-sm py-3 px-4 rounded-xl transition-all"
                        style={{ background: tier.color, color: "#fdf3d8" }}
                        data-testid={`btn-access-tier-${tier.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tier.cta}
                      </button>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
