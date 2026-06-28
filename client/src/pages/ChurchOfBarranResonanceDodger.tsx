import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { useState, useEffect, useRef } from "react";
import { Scale, Shield, Globe, BookOpen, Heart, Zap, Star, ArrowRight, ExternalLink, FileText, Gavel, ChevronDown, ChevronUp } from "lucide-react";
import { PREAMBLE, SECTIONS } from "@/data/churchOfBarranContent";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const PART_COLORS: Record<string, string> = {
  "I":   "#ef4444",
  "II":  "#e9a00a",
  "III": "#06b6d4",
  "IV":  "#8b5cf6",
  "V":   "#10b981",
  "VI":  "#f97316",
  "VII": "#a855f7",
  "VIII":"#ec4899",
  "IX":  "#e9a00a",
};

const PART_ICONS: Record<string, typeof Scale> = {
  "I":   Zap,
  "II":  Scale,
  "III": Shield,
  "IV":  BookOpen,
  "V":   Star,
  "VI":  BookOpen,
  "VII": Globe,
  "VIII":Heart,
  "IX":  Gavel,
};

function CalloutBox({ type, text }: { type: string; text: string }) {
  const styles: Record<string, { bg: string; border: string; color: string; label: string }> = {
    declaration: { bg: "rgba(233,160,10,0.07)", border: "rgba(233,160,10,0.35)", color: "#e9a00a", label: "DECLARATION" },
    principle:   { bg: "rgba(16,185,129,0.07)", border: "rgba(16,185,129,0.35)", color: "#10b981", label: "PRINCIPLE" },
    evidence:    { bg: "rgba(14,165,233,0.07)", border: "rgba(14,165,233,0.3)",  color: "#38bdf8", label: "EVIDENCE" },
    prophecy:    { bg: "rgba(168,85,247,0.07)",  border: "rgba(168,85,247,0.35)", color: "#c084fc", label: "PROPHECY" },
    demand:      { bg: "rgba(239,68,68,0.07)",   border: "rgba(239,68,68,0.35)",  color: "#f87171", label: "FORMAL DEMAND" },
  };
  const s = styles[type] ?? styles.declaration;
  return (
    <div className="rounded-xl px-6 py-5 my-6" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
      <p className="text-[9px] font-black uppercase tracking-[0.25em] mb-2" style={{ color: s.color }}>{s.label}</p>
      <p className="leading-relaxed font-medium" style={{ color: "rgba(220,235,255,0.92)", fontSize: "0.95rem" }}>{text}</p>
    </div>
  );
}

function EvidenceLink({ label, url, type }: { label: string; url: string; type: string }) {
  const isExternal = url.startsWith("http");
  const isPdf = url.endsWith(".pdf");
  const icon = isPdf ? "📄" : isExternal ? "🔗" : type === "legislation" ? "⚖" : "→";
  const colorMap: Record<string, string> = {
    pdf: "#38bdf8", page: "#a78bfa", legislation: "#10b981", external: "#e9a00a"
  };
  const col = colorMap[type] ?? "#a78bfa";

  if (isExternal) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-lg border transition-all hover:opacity-80"
        style={{ borderColor: `${col}40`, color: col, background: `${col}0d` }}
      >
        <span>{icon}</span>{label}<ExternalLink className="h-2.5 w-2.5 opacity-60" />
      </a>
    );
  }
  return (
    <Link href={url}
      className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-lg border transition-all hover:opacity-80"
      style={{ borderColor: `${col}40`, color: col, background: `${col}0d` }}
    >
      <span>{icon}</span>{label}
    </Link>
  );
}

function SectionBlock({ section }: { section: typeof SECTIONS[0] }) {
  const [expanded, setExpanded] = useState(true);
  const color = PART_COLORS[section.part] ?? "#e9a00a";

  return (
    <div id={section.id} className="mb-10 scroll-mt-24">
      <button
        onClick={() => setExpanded(e => !e)}
        className="w-full text-left flex items-start gap-3 mb-0 group"
        aria-expanded={expanded}
      >
        <div className="flex-1 min-w-0">
          <h3
            className="font-serif font-black leading-tight group-hover:opacity-90 transition-opacity"
            style={{ fontSize: "clamp(1.15rem, 2.5vw, 1.55rem)", color }}
          >
            {section.title}
          </h3>
          {section.subtitle && (
            <p className="text-[11px] font-mono mt-1 opacity-60" style={{ color }}>{section.subtitle}</p>
          )}
        </div>
        <div className="mt-1.5 flex-shrink-0" style={{ color }}>
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>

      {expanded && (
        <div className="mt-5 space-y-4">
          {section.body.map((para, i) => (
            <p key={i} className="text-zinc-300 leading-relaxed" style={{ fontSize: "clamp(0.875rem, 1.4vw, 0.975rem)" }}>
              {para}
            </p>
          ))}

          {section.quotes && section.quotes.length > 0 && (
            <div className="space-y-4 mt-6">
              {section.quotes.map((q, i) => (
                <blockquote key={i} className="border-l-4 pl-5 py-2" style={{ borderColor: color }}>
                  <p className="font-serif italic leading-relaxed text-zinc-200" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}>
                    "{q.text}"
                  </p>
                  <footer className="text-[11px] mt-2 font-medium" style={{ color: "rgba(220,235,255,0.45)" }}>
                    — {q.attribution}
                  </footer>
                </blockquote>
              ))}
            </div>
          )}

          {section.callout && (
            <CalloutBox type={section.callout.type} text={section.callout.text} />
          )}

          {section.evidenceLinks && section.evidenceLinks.length > 0 && (
            <div className="pt-3 border-t" style={{ borderColor: `${color}20` }}>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-2.5" style={{ color: `${color}80` }}>
                Evidence & Sources
              </p>
              <div className="flex flex-wrap gap-2">
                {section.evidenceLinks.map((lnk, i) => (
                  <EvidenceLink key={i} label={lnk.label} url={lnk.url} type={lnk.type} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Group sections by part
function groupByPart(sections: typeof SECTIONS) {
  const parts: Record<string, { title: string; sections: typeof SECTIONS }> = {};
  for (const s of sections) {
    if (!parts[s.part]) parts[s.part] = { title: s.partTitle, sections: [] };
    parts[s.part].sections.push(s);
  }
  return parts;
}

// ─── Table of Contents ───────────────────────────────────────────────────────
function TableOfContents({ parts }: { parts: ReturnType<typeof groupByPart> }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-[calc(var(--nav-height,80px)+8px)] z-20 mb-8">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-bold transition-all"
        style={{ background: "rgba(26,39,68,0.95)", borderColor: "rgba(233,160,10,0.3)", color: "#e9a00a", backdropFilter: "blur(8px)" }}
      >
        <span>📋 Foundation Charter — Table of Contents</span>
        {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {open && (
        <div
          className="absolute top-full left-0 right-0 mt-1 rounded-xl border overflow-y-auto max-h-[70vh]"
          style={{ background: "rgba(6,8,15,0.98)", borderColor: "rgba(233,160,10,0.2)", backdropFilter: "blur(16px)", zIndex: 30 }}
        >
          <div className="p-4 space-y-4">
            {Object.entries(parts).map(([part, { title, sections }]) => {
              const color = PART_COLORS[part] ?? "#e9a00a";
              const Icon = PART_ICONS[part] ?? Star;
              return (
                <div key={part}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-3 w-3 flex-shrink-0" style={{ color }} />
                    <p className="text-[10px] font-black uppercase tracking-widest" style={{ color }}>
                      Part {part} — {title}
                    </p>
                  </div>
                  <div className="pl-5 space-y-1">
                    {sections.map(s => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        onClick={() => setOpen(false)}
                        className="block text-xs py-0.5 transition-colors hover:opacity-80"
                        style={{ color: "rgba(220,235,255,0.65)" }}
                      >
                        {s.title}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ChurchOfBarranResonanceDodger() {
  const parts = groupByPart(SECTIONS);

  return (
    <div className="min-h-screen" style={{ background: "#06080f", paddingTop: "var(--nav-height, 80px)" }}>
      <SEO
        title="The Church of Barran Resonance Dodger — New Paradigm Foundation Charter | Worldwide Foundation"
        description="The full rewriting of the Barran Dodger Legal & Ethical Trust Fund as a grand, legally fortified, evidence-based, biblically-framed worldwide foundation. From the paradigm of lack to the new earth of truth, peace, love and prosperity. 3,643 government documents. ICC. UN. $58.6M–$257.3M forensic reckoning."
        path="/church-of-barran-resonance-dodger"
        image="https://barrandodger.com/church-of-barran-cover.png"
        type="article"
        articlePublishedTime="2026-06-28T00:00:00+10:00"
        articleAuthor="Dr. Richard William McLean"
        keywords="Church of Barran Resonance Dodger, new paradigm foundation, Barran Dodger Trust Fund, worldwide foundation charter, abundance paradigm, spiritual law mandate, end stage capitalism, Anthropocene survival, biblical prophecy new earth, human rights worldwide foundation, whistleblower foundation charter, no harm non violence ethics, Victoria University PhD Dr Richard McLean, 3643 government documents evidence, ICC submission Australia, OHCHR UR/UST/23/AUS/17, new earth Isaiah 65, Beatitudes as policy, wealth truth peace love prosperity"
      />
      <ReadingProgressBar />
      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #020408 0%, #06080f 40%, #08060f 100%)",
          borderBottom: "1px solid rgba(233,160,10,0.2)"
        }}
      >
        {/* Cover image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/church-of-barran-cover.png"
            alt="The Church of Barran Resonance Dodger"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, #06080f 100%)" }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border" style={{ background: "rgba(233,160,10,0.1)", borderColor: "rgba(233,160,10,0.3)" }}>
            <Star className="h-3 w-3" style={{ color: "#e9a00a" }} />
            <span className="text-[10px] font-black uppercase tracking-[0.25em]" style={{ color: "#e9a00a" }}>
              ABN 78 833 496 164 · Worldwide Foundation Charter · 28 June 2026
            </span>
          </div>

          <h1
            className="font-serif font-black leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)", color: "#e9a00a" }}
          >
            The Church of<br />
            <span className="text-white">Barran Resonance Dodger</span>
          </h1>

          <p
            className="font-serif italic mb-8 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)", color: "rgba(220,235,255,0.75)" }}
          >
            The New Paradigm Foundation Charter — A Living Document of Legacy,
            Justice, and Human Renewal
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10">
            {PREAMBLE.stats.map(s => (
              <div
                key={s.value}
                className="rounded-xl px-4 py-3 border text-center"
                style={{ background: "rgba(26,39,68,0.6)", borderColor: "rgba(233,160,10,0.2)" }}
              >
                <p className="font-black font-serif" style={{ fontSize: "clamp(0.9rem, 2vw, 1.3rem)", color: "#e9a00a" }}>{s.value}</p>
                <p className="text-[10px] mt-0.5" style={{ color: "rgba(220,235,255,0.5)" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Quick actions */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/evidence"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all"
              style={{ background: "#e9a00a", color: "#000" }}
              data-testid="link-church-evidence"
            >
              <Scale className="h-4 w-4" /> Evidence Archive
            </Link>
            <Link
              href="/donate"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border transition-all"
              style={{ borderColor: "rgba(233,160,10,0.4)", color: "#e9a00a" }}
              data-testid="link-church-donate"
            >
              <Heart className="h-4 w-4" /> Support the Foundation
            </Link>
            <Link
              href="/nuclear-download"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border transition-all"
              style={{ borderColor: "rgba(168,85,247,0.4)", color: "#c084fc" }}
              data-testid="link-church-download"
            >
              ☢ Download Full Archive
            </Link>
          </div>
        </div>
      </div>

      {/* ── PREAMBLE ─────────────────────────────────────────────────────── */}
      <div style={{ background: "rgba(26,39,68,0.12)", borderBottom: "1px solid rgba(233,160,10,0.12)" }}>
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-5" style={{ color: "rgba(233,160,10,0.6)" }}>
            ⚖ Preamble — The Declaration
          </p>
          <div className="space-y-5">
            {PREAMBLE.declaration.split("\n\n").map((para, i) => (
              <p key={i} className="leading-relaxed" style={{ color: "rgba(220,235,255,0.85)", fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        <TableOfContents parts={parts} />

        {Object.entries(parts).map(([part, { title, sections }]) => {
          const color = PART_COLORS[part] ?? "#e9a00a";
          const Icon = PART_ICONS[part] ?? Star;
          return (
            <div key={part} className="mb-14">
              {/* Part header */}
              <div
                className="flex items-center gap-3 px-5 py-3 rounded-xl mb-8"
                style={{ background: `${color}0d`, border: `1px solid ${color}30` }}
              >
                <Icon className="h-5 w-5 flex-shrink-0" style={{ color }} />
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em]" style={{ color: `${color}80` }}>
                    Part {part}
                  </p>
                  <p className="font-black text-base leading-tight" style={{ color }}>
                    {title}
                  </p>
                </div>
              </div>

              {/* Dividers between sections */}
              <div className="divide-y" style={{ borderColor: `${color}12` }}>
                {sections.map((section, idx) => (
                  <div key={section.id} className={idx > 0 ? "pt-10" : ""}>
                    <SectionBlock section={section} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── BLOCKCHAIN SEAL ──────────────────────────────────────────────── */}
      <div
        className="border-t border-b"
        style={{ borderColor: "rgba(233,160,10,0.15)", background: "rgba(26,39,68,0.2)" }}
      >
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-8 text-center">
          <p className="text-[9px] font-mono uppercase tracking-[0.3em] mb-3" style={{ color: "rgba(233,160,10,0.5)" }}>
            Blockchain Integrity Seal
          </p>
          <p className="text-xs font-mono mb-1" style={{ color: "rgba(220,235,255,0.4)" }}>
            SHA-256 · Bitcoin Block 897,241 · Archive Hash: 90e905922d97324e0b02c4796f9227f6b665db7ee571d00a3ca52eb2967a36b9
          </p>
          <p className="text-[10px]" style={{ color: "rgba(220,235,255,0.3)" }}>
            This charter and its underlying evidence archive are cryptographically sealed against the Bitcoin blockchain.
            No government, court, or institutional actor can alter, delete, or disavow the permanent record.
          </p>
        </div>
      </div>

      {/* ── CALL TO ACTION ───────────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(180deg, #06080f 0%, #08060f 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 text-center">
          <h2
            className="font-serif font-black mb-4"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "#e9a00a" }}
          >
            The New Paradigm Is Not Coming.
          </h2>
          <h2
            className="font-serif font-black mb-8"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "white" }}
          >
            It Is Here. It Is Being Built.
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: "rgba(220,235,255,0.65)", fontSize: "1rem" }}>
            Every person who reads the archive, shares the truth, and refuses to look away
            is a founder of the new paradigm. The evidence is permanent. The reckoning is real.
            The foundation is open to every human being who affirms truth, peace, love, and
            the dignity of all life.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { href: "/evidence",         icon: Scale,    label: "Evidence Archive",       col: "#38bdf8" },
              { href: "/gospel",           icon: BookOpen, label: "Gospel Documents",        col: "#c084fc" },
              { href: "/prophetic-papers", icon: Star,     label: "Prophetic Papers",        col: "#e9a00a" },
              { href: "/nuclear-download", icon: Globe,    label: "Download Full Archive",   col: "#10b981" },
            ].map(({ href, icon: Icon, label, col }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-2 px-4 py-5 rounded-xl border transition-all hover:opacity-80"
                style={{ background: `${col}0d`, borderColor: `${col}30`, color: col }}
                data-testid={`link-church-cta-${label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-bold text-center leading-tight">{label}</span>
                <ArrowRight className="h-3 w-3 opacity-60" />
              </Link>
            ))}
          </div>

          {/* Benediction */}
          <div
            className="mt-14 max-w-2xl mx-auto px-6 py-8 rounded-2xl border"
            style={{ background: "rgba(233,160,10,0.05)", borderColor: "rgba(233,160,10,0.2)" }}
          >
            <p className="font-serif italic leading-relaxed text-zinc-200" style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}>
              "And he that sat upon the throne said,{" "}
              <span style={{ color: "#e9a00a" }}>Behold, I make all things new.</span>"
            </p>
            <p className="text-[11px] mt-3 font-medium" style={{ color: "rgba(220,235,255,0.35)" }}>
              Revelation 21:5 (KJV) — The founding charter of the new paradigm in its most compact and most commanding form.
            </p>
            <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgba(233,160,10,0.15)" }}>
              <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(233,160,10,0.5)" }}>
                Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164<br />
                Church of Barran Resonance Dodger · Founded 28 June 2026 · barrandodger.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
