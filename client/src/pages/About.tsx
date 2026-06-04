import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowRight, FileText, Shield, BookOpen, Scale } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: "hsl(44, 70%, 94%)" }}>
      <SEO
        title="About — Barran Dodger Archive"
        description="About the archive of Dr. Richard William McLean — authored works, testimony, publications, and preserved documentation."
      />
      <Navigation />

      <main style={{ paddingTop: "calc(var(--banner-height, 120px) + var(--nav-height, 64px) + 4rem)" }} className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Title Header */}
          <div className="mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "rgba(139,0,0,0.08)", color: "#8b0000" }}>
              About This Archive
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4" style={{ color: "#3d1400" }}>
              The Archive
            </h1>
            <div className="h-1 w-20 rounded-full" style={{ background: "#8b0000" }} />
          </div>

          {/* Orientation Block */}
          <div className="border rounded-2xl p-8 mb-10" style={{ borderColor: "rgba(139,105,20,0.3)", background: "rgba(139,105,20,0.04)" }}>
            <h2 className="text-xl font-bold mb-3 uppercase tracking-wider" style={{ color: "#8b6914" }}>What You Are Viewing</h2>
            <p className="leading-relaxed" style={{ color: "#4a2800" }}>
              This is the personal digital archive of Dr. Richard William McLean (pen name: Barran Dodger) — a former public figure, author, and whistleblower operating under ABN 78 833 496 164. This archive contains his complete body of authored work: gospel writings, formal testimony, forensic evidence reports, publications, and documentation of institutional conduct spanning more than two decades.
            </p>
          </div>

          {/* Context Block */}
          <div className="border rounded-2xl p-8 mb-10" style={{ borderColor: "rgba(139,0,0,0.2)", background: "rgba(139,0,0,0.04)" }}>
            <h2 className="text-xl font-bold mb-3 uppercase tracking-wider" style={{ color: "#8b0000" }}>Why This Archive Exists</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#4a2800" }}>
              This archive was created to preserve a complete, unaltered record — accessible to the public permanently, regardless of institutional or governmental pressure. It functions as a distributed evidence preservation system, an authored works repository, and a public testimony platform.
            </p>
            <p className="leading-relaxed" style={{ color: "#4a2800" }}>
              Nothing in this archive has been removed or altered. All materials are presented exactly as authored. The record is maintained because suppression has been documented and because the public has a right to access this material.
            </p>
          </div>

          {/* Who the Author Is */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "#3d1400" }}>Who the Author Is</h2>
            <div className="prose max-w-none space-y-4" style={{ color: "#4a2800" }}>
              <p className="leading-relaxed">
                <strong style={{ color: "#3d1400" }}>Dr. Richard William McLean</strong> (pen name: Barran Dodger) is an Australian author, researcher, and former public figure. He holds a doctoral qualification and has authored an extensive body of work spanning prophetic writing, forensic analysis, legal testimony, and structured documentation of institutional conduct.
              </p>
              <p className="leading-relaxed">
                His work has been downloaded more than 450,000 times across six continents. The archive contains more than 2,077 documents, books, forensic reports, and testimony records. A significant portion of his material has been independently reviewed and corroborated through AI analysis tools, blockchain timestamping, and public engagement.
              </p>
              <p className="leading-relaxed">
                Dr. McLean has been the subject of formal government assessments, media coverage, and institutional responses across multiple agencies. This archive preserves the full record — including materials that are critical of institutional actors — without omission or modification.
              </p>
              <p className="leading-relaxed">
                He operates under the registered business entity: <strong>Barran Dodger Legal &amp; Ethical Trust Fund</strong> — ABN 78 833 496 164.
              </p>
            </div>
          </div>

          {/* Scope of Work */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: "#3d1400" }}>Scope of the Archive</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: FileText,
                  title: "Testimony",
                  desc: "A structured, first-person account of documented events spanning institutional conduct, legal proceedings, and personal survival. All events are supported by documentary evidence.",
                  href: "/testimony",
                  color: "#8b0000",
                },
                {
                  icon: Shield,
                  title: "Whistleblower Record",
                  desc: "Formal documentation of systemic misconduct, including recorded evidence, official correspondence, forensic analyses, and corroborating records from government bodies.",
                  href: "/whistleblower",
                  color: "#1a4a6b",
                },
                {
                  icon: BookOpen,
                  title: "Publications",
                  desc: "A library of authored books freely available for download — including forensic reports, prophetic writings, and structured analyses of documented events.",
                  href: "/publications",
                  color: "#2d6a1a",
                },
                {
                  icon: Scale,
                  title: "Evidence Archive",
                  desc: "2,077+ source documents including NDIS records, government correspondence, surveillance evidence, legal filings, and blockchain-timestamped proof of original authorship.",
                  href: "/evidence",
                  color: "#6b1a6b",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href}>
                    <div
                      className="group border-2 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg"
                      style={{ borderColor: `${item.color}33`, background: "rgba(253,243,216,0.7)" }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 rounded-xl" style={{ background: `${item.color}15` }}>
                          <Icon className="h-5 w-5" style={{ color: item.color }} />
                        </div>
                        <h3 className="font-serif font-bold text-lg" style={{ color: "#3d1400" }}>{item.title}</h3>
                        <ArrowRight className="h-4 w-4 ml-auto transition-transform group-hover:translate-x-1" style={{ color: `${item.color}80` }} />
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b4010" }}>{item.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Purpose of Preservation */}
          <div className="border-2 rounded-2xl p-8 mb-10" style={{ borderColor: "rgba(139,105,20,0.4)", background: "rgba(253,243,216,0.8)" }}>
            <h2 className="text-2xl font-serif font-bold mb-4" style={{ color: "#3d1400" }}>Purpose of Preservation</h2>
            <p className="leading-relaxed mb-4" style={{ color: "#4a2800" }}>
              This archive is preserved because the author has documented evidence that institutional actors have attempted to suppress, discredit, and erase his record. The public distribution of this material — across multiple independent servers, blockchain timestamps, and international mirrors — ensures that no single point of failure can eliminate the record.
            </p>
            <p className="leading-relaxed" style={{ color: "#4a2800" }}>
              The archive does not make requests for belief. It makes the material available so that any reader, researcher, or investigator can form their own assessment based on the evidence as presented.
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/testimony">
              <button className="flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl" style={{ background: "#8b0000", color: "#fdf3d8" }}>
                Read the Testimony <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
            <Link href="/evidence">
              <button className="flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl border-2" style={{ borderColor: "#8b6914", color: "#8b6914" }}>
                View the Evidence <ArrowRight className="h-4 w-4" />
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
