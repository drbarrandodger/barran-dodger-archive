import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowRight, FileText, Clock, Globe, Shield } from "lucide-react";

const TESTIMONY_SECTIONS = [
  {
    title: "The Full Testimony",
    href: "/the-testimony",
    desc: "The complete, structured, first-person account of documented events — from persecution to global recognition.",
    icon: FileText,
    badge: "Primary Document",
  },
  {
    title: "Testimony Went Global",
    href: "/testimony-went-global",
    desc: "How the testimony reached international audiences across six continents and what that means for the record.",
    icon: Globe,
    badge: "Global Reach",
  },
  {
    title: "Prophetic Testimony (Biblical)",
    href: "/testimony-that-was-already-written",
    desc: "A structured comparison between the documented record and biblical precedent — for those who wish to examine the spiritual dimension.",
    icon: Shield,
    badge: "Prophetic Context",
  },
  {
    title: "Government Called Him Delusional",
    href: "/government-called-him-delusional",
    desc: "A documented account of how government agencies characterised the testimony — and what the evidence shows in response.",
    icon: Shield,
    badge: "Institutional Response",
  },
  {
    title: "Timeline of Events",
    href: "/timeline",
    desc: "A chronological record of key events, decisions, and documented institutional actions spanning more than two decades.",
    icon: Clock,
    badge: "Chronological Record",
  },
  {
    title: "The Full Pattern",
    href: "/the-full-pattern",
    desc: "An analysis of the systematic pattern of conduct across multiple institutions — identifying recurring strategies and their documented effects.",
    icon: FileText,
    badge: "Pattern Analysis",
  },
  {
    title: "Retrospective Statement",
    href: "/retrospective-statement",
    desc: "A formal retrospective assessment of the documented events, authored by Dr. McLean for the public record.",
    icon: FileText,
    badge: "Formal Statement",
  },
  {
    title: "Administrative Annihilation",
    href: "/administrative-annihilation",
    desc: "A detailed account of the administrative and bureaucratic mechanisms used against the author — with documentary evidence.",
    icon: Shield,
    badge: "Institutional Conduct",
  },
];

export default function TestimonyHub() {
  return (
    <div className="min-h-screen" style={{ background: "hsl(44, 70%, 94%)" }}>
      <SEO
        title="Testimony — Barran Dodger Archive"
        description="The complete testimony of Dr. Richard McLean — a documented, first-person account of institutional persecution and survival."
      />
      <Navigation />

      <main style={{ paddingTop: "calc(var(--banner-height, 120px) + var(--nav-height, 64px) + 4rem)" }} className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Title Header */}
          <div className="mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "rgba(139,0,0,0.08)", color: "#8b0000" }}>
              Primary Record
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4" style={{ color: "#3d1400" }}>
              Testimony
            </h1>
            <div className="h-1 w-20 rounded-full mb-6" style={{ background: "#8b0000" }} />
            <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "#6b4010" }}>
              A documented, first-person account of institutional persecution, survival, and the evidence that supports every claim.
            </p>
          </div>

          {/* Orientation Block */}
          <div className="border rounded-2xl p-8 mb-10" style={{ borderColor: "rgba(139,105,20,0.3)", background: "rgba(139,105,20,0.04)" }}>
            <h2 className="text-xl font-bold mb-3 uppercase tracking-wider" style={{ color: "#8b6914" }}>What You Are Viewing</h2>
            <p className="leading-relaxed" style={{ color: "#4a2800" }}>
              This section contains the complete testimony of Dr. Richard William McLean — structured, indexed, and fully preserved. It includes the primary document, chronological records, institutional responses, pattern analyses, and contextual materials. All content is presented exactly as authored.
            </p>
          </div>

          {/* Context Block */}
          <div className="border rounded-2xl p-8 mb-12" style={{ borderColor: "rgba(139,0,0,0.2)", background: "rgba(139,0,0,0.04)" }}>
            <h2 className="text-xl font-bold mb-3 uppercase tracking-wider" style={{ color: "#8b0000" }}>Why This Testimony Exists</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#4a2800" }}>
              The testimony exists because Dr. McLean was unable to find institutional channels willing to receive it. After exhausting formal avenues — including government bodies, legal systems, and media — he published the record directly to the public. The 450,000+ downloads demonstrate that the public has engaged with this material at a scale that exceeds most institutional reports.
            </p>
            <p className="leading-relaxed" style={{ color: "#4a2800" }}>
              Every claim in the testimony is supported by documentary evidence available in the Evidence Archive.
            </p>
          </div>

          {/* Content Display */}
          <h2 className="text-2xl font-serif font-bold mb-6" style={{ color: "#3d1400" }}>Testimony Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {TESTIMONY_SECTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className="group border-2 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg h-full"
                    style={{ borderColor: "rgba(139,0,0,0.2)", background: "rgba(253,243,216,0.7)" }}
                    data-testid={`card-testimony-${item.title.toLowerCase().replace(/\s+/g, '-').substring(0, 30)}`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg flex-shrink-0" style={{ background: "rgba(139,0,0,0.1)" }}>
                          <Icon className="h-4 w-4" style={{ color: "#8b0000" }} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "rgba(139,0,0,0.08)", color: "#8b0000" }}>
                          {item.badge}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "rgba(139,0,0,0.4)" }} />
                    </div>
                    <h3 className="font-serif font-bold text-base mb-2" style={{ color: "#3d1400" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b4010" }}>{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t" style={{ borderColor: "rgba(139,105,20,0.2)" }}>
            <Link href="/the-testimony">
              <button className="flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl" style={{ background: "#8b0000", color: "#fdf3d8" }}>
                Read the Full Testimony <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="/evidence">
              <button className="flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl border-2" style={{ borderColor: "#8b6914", color: "#8b6914" }}>
                View Supporting Evidence <ArrowRight className="h-4 w-4" />
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
