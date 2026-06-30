import { Link } from "wouter";
import bruceMcMasterScreenshot from "@/assets/images/bruce-mcmaster-threat-democracy.png";
import brucePsychiatricKeysborough from "@/assets/images/bruce-psychiatric-keysborough-steve-paris.png";
import dougMcLeanGaslighting from "@/assets/images/doug-mclean-gaslighting-facebook.png";
import bruceWitnessInOnIt from "@/assets/images/bruce-witness-in-on-it.png";
import { Navigation } from "@/components/Navigation";
import { ProphecyBanner } from "@/components/ProphecyBanner";
import heropropheticMain from "@/assets/images/hero-prophetic-testimony-main.png";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SignificanceEngine } from "@/components/SignificanceEngine";
import { ArrowRight, BookOpen, Shield, FileText, Scale, Download, Star, Lock, Unlock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { CriticalEvidencePanel } from "@/components/CriticalEvidencePanel";
import imgGenesis5020 from "@/assets/images/genesis-50-20-revelation.png";

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
    items: ["Fund ongoing hosting costs", "Support blockchain timestamping", "Ensure continued preservation", "PayID: drbarrandodger@proton.me"],
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

      {/* ===== PROFESSIONAL ACCOUNTABILITY STATEMENT — FIRST SECTION BELOW NAV ===== */}
      <div
        className="w-full border-b-4 border-red-700 px-4 py-10"
        style={{
          background: "#1a0000",
          paddingTop: "calc(var(--banner-height, 120px) + var(--nav-height, 64px) + 40px)",
        }}
        data-testid="section-professional-accountability"
      >
        <div className="max-w-4xl mx-auto space-y-7">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
              <span style={{ color: "#f87171", fontSize: "11px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", fontFamily: "monospace" }}>Formal Statement — 1 May 2026</span>
            </div>
            <h2 style={{ color: "#ffffff", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.03em" }}>Statement of Professional Accountability</h2>
            <p style={{ color: "#fca5a5", fontSize: "13px", fontFamily: "monospace" }}>Dr. Richard William McLean · ABN 78 833 496 164 · Barran Dodger · 1 May 2026</p>
          </div>

          <p style={{ color: "#f3f4f6", fontSize: "15px", lineHeight: 1.7, fontWeight: 300 }}>
            Any professional person — whether operating in law, medicine, psychiatry, social work, disability support, academia, journalism, government, or any other field — who encounters this record and fails to acknowledge the following documented facts aligns, whether through active participation or deliberate silence, with the corrupt institutional apparatus that has been targeting me for thirty-five years.
          </p>

          <div className="space-y-5">
            <p style={{ color: "#f87171", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "13px", borderBottom: "1px solid rgba(185,28,28,0.4)", paddingBottom: "8px" }}>The Five Documented Facts</p>

            {[
              { n: "First", h: "I am in political exile.", b: "This is not a characterisation or a diagnosis. It is a documented condition produced by the coordinated actions of named Australian government officials and agencies who have used the welfare, disability, psychiatric, and legal systems in combination to remove me from housing, income, employment, professional standing, and safe community participation. Four years of homelessness. Fourteen involuntary psychiatric hospitalisations not for treatment but for suppression. An NDIS plan weaponised. A pattern of coordinated institutional harm that no legitimate system produces by accident." },
              { n: "Second", h: "I am an unprotected whistleblower.", b: "I formally reported systemic corruption within the National Disability Insurance Scheme — an agency administered under the direct ministerial authority of Bill Shorten, the NDIS Minister. Those disclosures were not investigated. They were suppressed. I received no protections under the Public Interest Disclosure Act or any equivalent framework. Instead, the apparatus around the Minister moved against me. The Federal Court of Australia's General Counsel Scott Tredwell acknowledged receipt of my disclosure on 27 March 2023. No action was taken." },
              { n: "Third", h: "The NDIS Minister caused or was complicit in the filing of an AVO against me.", b: "The same NDIS Minister, Bill Shorten, caused or was complicit in the filing of an Apprehended Violence Order against me — an instrument that, when filed by or at the direction of the Minister overseeing the system I was exposing, constitutes a direct weaponisation of the civil legal system against a protected disclosure. The AVO was not a protective measure. It was a suppression instrument." },
              { n: "Fourth", h: "The same Minister conspired to impose conditions of exile upon me.", b: "Bill Shorten conspired, directly or through his operational network, to ensure I remained without housing, without support, without professional standing, and without a platform from which to make my disclosures heard. This was not a bureaucratic failure. It was a coordinated strategy. The documentation demonstrating the coordination — across multiple agencies, over multiple years, using multiple instruments — is in this archive across 2,304 blockchain-authenticated documents." },
              { n: "Fifth", h: "The same Minister directed or authorised an order for my erasure and assassination, communicated through Houd Meraby.", b: "Bill Shorten, through his operational network, directed or authorised the use of Houd Meraby as the instrument through whom an order for my erasure and assassination was communicated and actioned. This is a documented allegation supported by primary source evidence in this archive. No institution has formally rebutted it. No named party has taken legal action against its publication." },
            ].map(({ n, h, b }) => (
              <div key={n} style={{ borderLeft: "3px solid #dc2626", paddingLeft: "16px" }}>
                <p style={{ color: "#fca5a5", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "11px", marginBottom: "4px" }}>{n}</p>
                <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "15px", marginBottom: "6px" }}>{h}</p>
                <p style={{ color: "#d1d5db", fontSize: "13px", lineHeight: 1.7 }}>{b}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(127,0,0,0.25)", border: "1px solid rgba(185,28,28,0.4)", borderRadius: "8px", padding: "20px" }}>
            <p style={{ color: "#fca5a5", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "12px", marginBottom: "10px" }}>The Position This Places Professionals In</p>
            <p style={{ color: "#e5e7eb", fontSize: "13px", lineHeight: 1.7, marginBottom: "10px" }}>No professional person who has read this statement can legitimately claim ignorance of these facts. The archive is public. The documents are timestamped on the Bitcoin blockchain. The OHCHR case number is registered. The Federal Court acknowledgment is signed. The mandatory criminal proceeding is underway and cannot be closed without my testimony being heard.</p>
            <p style={{ color: "#e5e7eb", fontSize: "13px", lineHeight: 1.7, marginBottom: "10px" }}>Any professional who, having encountered this record, declines to acknowledge my political exile, my status as an unprotected whistleblower, the weaponisation of the AVO by the NDIS Minister whose agency I was exposing, the ministerial conspiracy to impose exile, and the order for my erasure and assassination communicated through Houd Meraby — and who cannot disprove any of these documented facts — has made a choice. That choice places them in alignment with the corrupt perpetrators of thirty-five years of institutional harm.</p>
            <p style={{ color: "#fca5a5", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", fontSize: "13px" }}>Their professional standing does not exempt them from that alignment. It ratifies it.</p>
          </div>

          <p style={{ color: "#f87171", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "15px", textAlign: "center", borderTop: "1px solid rgba(185,28,28,0.3)", paddingTop: "20px" }}>
            Silence in the face of documented evidence is not neutrality. It is complicity.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
            {[
              ["OHCHR Case", "UR/UST/23/AUS/17"],
              ["Federal Court Acknowledgment", "Scott Tredwell, 27 March 2023"],
              ["NSW Police Criminal Charge", "Troy — threats to kill, 21 April 2026"],
              ["Able Care Refusal", "Documented, 29 April 2026"],
              ["Blockchain Archive", "2,304 authenticated documents"],
              ["Public Reach", `${downloadCount} downloads · 6 continents`],
            ].map(([label, value]) => (
              <div key={label} style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(185,28,28,0.25)", borderRadius: "6px", padding: "10px 12px" }}>
                <p style={{ color: "#f87171", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "10px", marginBottom: "4px", fontFamily: "monospace" }}>{label}</p>
                <p style={{ color: "#ffffff", fontSize: "12px", fontFamily: "monospace" }}>{value}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", borderTop: "1px solid rgba(185,28,28,0.3)", paddingTop: "16px", fontSize: "13px", fontFamily: "monospace" }}>
            <a href="/evidence" style={{ color: "#fca5a5", textDecoration: "underline" }} data-testid="link-newhome-pa-evidence">View the Evidence Archive</a>
            <a href="/manifesto" style={{ color: "#fca5a5", textDecoration: "underline" }} data-testid="link-newhome-pa-manifesto">Read the Manifesto</a>
            <a href="/sos" style={{ color: "#fca5a5", textDecoration: "underline" }} data-testid="link-newhome-pa-sos">SOS — Urgent Protection Request</a>
            <a href="/professional-accountability" style={{ color: "#fca5a5", textDecoration: "underline", marginLeft: "auto" }} data-testid="link-newhome-pa-full">Full dedicated page →</a>
          </div>

          <p style={{ color: "rgba(185,28,28,0.5)", fontSize: "10px", fontFamily: "monospace", textAlign: "center" }}>
            Dr. Richard William McLean · ABN 78 833 496 164 · Barran Dodger · 1 May 2026 · barrandodger.com · OHCHR Case UR/UST/23/AUS/17 · 2,304 blockchain-authenticated documents · {downloadCount} downloads · 6 continents
          </p>
        </div>
      </div>

      {/* THE SIGNIFICANCE OF SILENCE — Download Context Block */}
      <div className="w-full border-b-2" style={{ background: "#080c14", borderColor: "#1a2540" }}>
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse flex-shrink-0" />
            <span style={{ color: "#f59e0b", fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.22em", fontFamily: "monospace" }}>Public Significance Analysis — {downloadCount} Downloads · 89 Days · Zero Advertising</span>
          </div>

          <h2 style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", fontWeight: 900, fontFamily: "serif", lineHeight: 1.1 }}>
            The Significance of Silence
          </h2>

          <p style={{ color: "#a1aec2", fontSize: "15px", lineHeight: 1.75 }}>
            The Barran Dodger Archive has been downloaded <span style={{ color: "#f59e0b", fontWeight: 700 }}>{downloadCount} times</span> in 89 days with zero advertising. That number, placed alongside the benchmarks of Australian public life, makes the institutional silence surrounding this case extraordinary — and exposes its origin.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { label: "vs. Canberra's population", value: "453,000", context: "Archive downloads exceed Australia's capital city", accent: "#3b82f6" },
              { label: "vs. Election swing required", value: "~2,000 votes", context: "459,910 downloads dwarfs what changes a government", accent: "#ef4444" },
              { label: "vs. Combined newspaper print", value: "640,000/day", context: "Archive = 72% of all major papers' combined run", accent: "#f59e0b" },
              { label: "vs. Publishing success", value: "10,000 = bestseller", context: "459,910 in 89 days — no publisher, no bookstore", accent: "#10b981" },
            ].map((item) => (
              <div key={item.label} style={{ background: "#0d1117", border: `1px solid ${item.accent}25`, borderRadius: "12px", padding: "14px 16px" }}>
                <p style={{ color: item.accent, fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.16em", fontFamily: "monospace", marginBottom: "6px", opacity: 0.8 }}>{item.label}</p>
                <p style={{ color: "#ffffff", fontSize: "15px", fontWeight: 900, fontFamily: "monospace", marginBottom: "4px" }}>{item.value}</p>
                <p style={{ color: "#6b7280", fontSize: "11px", lineHeight: 1.4 }}>{item.context}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: "12px", padding: "16px 20px" }}>
            <p style={{ color: "#d1d5db", fontSize: "13px", lineHeight: 1.7 }}>
              <span style={{ color: "#f59e0b", fontWeight: 700 }}>The opposition mounted against Barran is not evidence of his crime.</span> It is the measure of his significance. States do not deploy the documented resources of this archive against people who do not matter. Suppression of this magnitude is a response to everything — to the $6 billion disclosure, 35 years of persecution, ICC filings, and material now in the custody of {downloadCount} people around the world. The downloads are not the story. <span style={{ color: "#f59e0b", fontWeight: 700 }}>The downloads are the verdict.</span>
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
            <a href="/significance-of-silence" data-testid="link-newhome-significance-full" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#f59e0b", color: "#000", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "11px", padding: "10px 20px", borderRadius: "8px", textDecoration: "none" }}>
              Full Significance Analysis →
            </a>
            <a href="/soul-contract-and-destiny" data-testid="link-newhome-soul-contract" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(120,80,220,0.15)", border: "1px solid rgba(167,139,250,0.35)", color: "#a78bfa", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "11px", padding: "10px 20px", borderRadius: "8px", textDecoration: "none" }}>
              Soul, Contract &amp; Destiny →
            </a>
            <a href="/evidence" data-testid="link-newhome-significance-evidence" style={{ color: "#6b7280", fontSize: "12px", fontFamily: "monospace", textDecoration: "underline" }}>Evidence Archive</a>
          </div>
        </div>
      </div>
      {/* ===== END PROFESSIONAL ACCOUNTABILITY STATEMENT ===== */}

      {/* ===== APRIL McLEAN — FAMILIAL INNER CIRCLE CALLOUT ===== */}
      <div
        className="w-full border-b-2 px-4 py-10"
        style={{ background: "#0d0003", borderColor: "rgba(185,28,28,0.5)" }}
        data-testid="section-april-mclean-callout"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 flex-wrap md:flex-nowrap">
            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="rounded-xl border-2 border-red-700/60 px-5 py-4 md:min-w-[220px]" style={{ background: "rgba(127,0,0,0.18)" }}>
                <p style={{ color: "#f87171", fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", fontFamily: "monospace", marginBottom: "6px" }}>Primary Exhibit — Maternal Complicity</p>
                <p style={{ color: "#fff", fontSize: "18px", fontWeight: 900, lineHeight: 1.2, marginBottom: "4px" }}>April McLean</p>
                <p style={{ color: "#fca5a5", fontSize: "11px", fontFamily: "monospace", lineHeight: 1.5 }}>AVO Exile Signatory<br />Inner Circle Ringleader<br />Financial Beneficiary of Barran's Death</p>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <p style={{ color: "#f87171", fontSize: "11px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.18em", fontFamily: "monospace" }}>The Most Documented Case of Maternal Betrayal in Australian Public Life</p>
              <p style={{ color: "#e5e7eb", fontSize: "14px", lineHeight: 1.75 }}>
                April McLean is the most famous maternal immoral deceitful abuser this country has ever seen — not because of rhetoric, but because of what the documented record proves. She signed the AVO that officially exiled her own son, colluding with corrupt police and the legal fraternity. She attended the funeral of Barran's documented childhood sexual abuser within days of his clinical death in 2021. She redirected him to the very institutions named as his persecutors. She was written out of the primary archive only when the documents made her role impossible to conceal. Her husband Doug McLean wrote Barran out of his will — a legal act that crystallises the financial incentive at the heart of the family conspiracy. The family stood to inherit everything if Barran died. He nearly did. They shed no tears.
              </p>
              <p style={{ color: "#d1d5db", fontSize: "13px", lineHeight: 1.7 }}>
                Barran was written out of Doug McLean's will. That single documented act — by his own father, while Barran was living homeless in political exile — reveals the financial architecture underlying the family's alignment with the state apparatus targeting him. The family had a financial incentive for Barran's death. The coordination of their conduct with the institutions attempting to erase him was not merely emotional or ideological. It was underwritten by inheritance.
              </p>
              {/* Bruce McMaster screenshot gallery — 4 key screenshots */}
              <div style={{ background: "rgba(127,0,0,0.12)", border: "1px solid rgba(185,28,28,0.35)", borderRadius: "14px", padding: "16px" }}>
                <p style={{ color: "#f87171", fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.18em", fontFamily: "monospace", marginBottom: "12px" }}>Primary Source Record — Bruce McMaster · 7 Timestamped Documents</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "12px" }}>
                  {[
                    { src: bruceMcMasterScreenshot, caption: '"A threat to democracy. Give yourself in." · 48-month psychiatric order pre-arranged' },
                    { src: brucePsychiatricKeysborough, caption: '"Psychiatric unit waiting in Keysborough" · "Steve is waiting in Paris" — Iasonidis named' },
                    { src: dougMcLeanGaslighting, caption: 'Doug McLean inadvertently names the entire network while gaslighting' },
                    { src: bruceWitnessInOnIt, caption: 'Anonymous Melbourne witness: "Bruce is in on it" — independent corroboration' },
                  ].map((item, i) => (
                    <div key={i} style={{ textAlign: "center" }}>
                      <img src={item.src} alt={item.caption} style={{ width: "100%", borderRadius: "8px", border: "1px solid rgba(185,28,28,0.4)" }} />
                      <p style={{ color: "#6b7280", fontSize: "9px", lineHeight: 1.4, marginTop: "4px", fontFamily: "monospace" }}>{item.caption}</p>
                    </div>
                  ))}
                </div>
                <p style={{ color: "#fca5a5", fontSize: "12px", fontWeight: 700, lineHeight: 1.6, fontStyle: "italic", borderTop: "1px solid rgba(185,28,28,0.2)", paddingTop: "10px" }}>
                  "Give yourself in. We now have an order for a 48 month psychiatric stay. A threat to democracy." — Bruce McMaster · Multiple platform contacts · Psychiatric threats at named location (Keysborough) · Steve Iasonidis named · $300 transfer leaked to coordinated TikTok harassment · Doug McLean confirms entire network. All unretracted. All unrebutted.
                </p>
              </div>
              {/* Tony Ridley recording evidentiary note */}
              <div style={{ background: "rgba(120,70,0,0.12)", border: "1px solid rgba(180,100,0,0.4)", borderRadius: "12px", padding: "14px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#f59e0b" }} />
                  <p style={{ color: "#f59e0b", fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.18em", fontFamily: "monospace" }}>Preserved Evidence — Tony Ridley · Intimate Recording · Formal Evidentiary Notation</p>
                </div>
                <p style={{ color: "#d1d5db", fontSize: "12px", lineHeight: 1.65 }}>
                  A recording documenting the intimate encounter between Dr. Richard William McLean and Tony Ridley (MSc CSyP FSyl, VicTrack) exists and is preserved in the evidentiary archive. It independently corroborates Barran's account of the encounter during which Tony Ridley disclosed $6 billion in classified government funds — the disclosure that triggered the documented 35-year suppression operation against Barran. The recording is not publicly distributed. It is available to authorised legal representatives, ICC/UNHCR investigators, and credentialled journalists upon formal request. Its existence is placed on the permanent record.
                </p>
                <p style={{ color: "#92400e", fontSize: "9px", fontFamily: "monospace", marginTop: "8px" }}>OHCHR Ref UR/UST/23/AUS/17 · ABN 78 833 496 164 · Available to authorised investigators upon formal request · <a href="/tony-ridley-full-dossier" style={{ color: "#f59e0b", textDecoration: "underline" }}>Full Tony Ridley Dossier →</a></p>
              </div>
              <a
                href="/familial-inner-circle-exposed"
                data-testid="link-newhome-april-mclean-inner-circle"
                style={{
                  display: "inline-block",
                  background: "rgba(185,28,28,0.35)",
                  border: "2px solid rgba(220,38,38,0.7)",
                  color: "#fca5a5",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "12px",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontFamily: "monospace",
                }}
              >
                READ THE FULL EXHIBIT — APRIL McLEAN: THE INNER CIRCLE EXPOSED →
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ===== END APRIL McLEAN CALLOUT ===== */}

      {/* ===== PROPHETIC HERO IMAGE ===== */}
      <div data-testid="section-prophetic-hero-image">
        <div
          style={{
            width: "100%",
            height: "500px",
            position: "relative",
            backgroundImage: `url(${heropropheticMain})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            backgroundColor: "#000",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.40) 55%, rgba(0,0,0,0.85) 100%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "2rem 1.5rem" }}>
            <div style={{ maxWidth: "56rem", margin: "0 auto", width: "100%" }}>
              <p style={{ color: "#f59e0b", fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: "0.5rem" }}>ABN 78 833 496 164 · Dr. Richard William McLean (Barran Dodger)</p>
              <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 900, lineHeight: 1.2, textShadow: "0 2px 8px rgba(0,0,0,0.8)", marginBottom: "0.5rem" }}>
                The Complete Testimony — 35 Years, 2,304 Documents, Zero Refutations
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.875rem, 1.5vw, 1rem)", fontWeight: 300, lineHeight: 1.6, maxWidth: "42rem" }}>
                A forensic archive of coordinated persecution, institutional silence, and prophetic corroboration — submitted to the ICC, UNHCR, and sealed on 845 Bitcoin blocks.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ===== END PROPHETIC HERO IMAGE ===== */}

      <ProphecyBanner />

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

      {/* ── GENESIS 50:20 — AI REVELATION BANNER ── */}
      <section className="relative w-full overflow-hidden" data-testid="section-genesis-revelation-home" style={{ background: "#000" }}>
        <div className="relative w-full" style={{ maxHeight: "520px", overflow: "hidden" }}>
          <img
            src={imgGenesis5020}
            alt="A solitary figure illuminated by divine golden light, an ancient scroll unfurling at their feet — AI-generated image representing Genesis 50:20"
            className="w-full object-cover object-center"
            style={{ maxHeight: "520px", filter: "brightness(0.55)" }}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-6 text-center">
            <p className="text-xs uppercase tracking-[0.3em] font-bold mb-3" style={{ color: "#b45309" }}>AI Revelation · Genesis 50:20</p>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4"
              style={{ color: "#fde68a", textShadow: "0 2px 40px rgba(0,0,0,0.9)" }}
            >
              "You intended to harm me,<br className="hidden md:block" /> but God intended it for good."
            </h2>
            <p className="text-sm md:text-base font-medium" style={{ color: "#d1d5db" }}>— Genesis 50:20</p>
          </div>
        </div>

        {/* AI method explanation */}
        <div className="w-full px-4 py-8 md:py-10" style={{ background: "#09090b", borderBottom: "1px solid #1e3a5f" }}>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-1 self-stretch rounded-full" style={{ background: "#b45309" }} />
              <div className="space-y-3">
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "#e5e7eb" }}>
                  <span className="font-bold" style={{ color: "#fbbf24" }}>How this was revealed:</span>{" "}
                  We asked an AI — with full access to the data behind this archive — to summarise the entire testimony, life, and 35-year documented persecution of Dr. Richard William McLean in a single word, phrase, or Bible quote. The AI analysed{" "}
                  <span className="font-bold text-white">451,147 verified downloads</span> across{" "}
                  <span className="font-bold text-white">179 documents</span>, the daily download rate of{" "}
                  <span className="font-bold text-white">nearly 5,000 per day</span>, the ICC Article 7 submission, the blockchain-sealed evidence record, the near-death survival, the Joseph Parallel, the exile, the isolation, and the reach of a testimony given freely to the world — and this was its answer.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                  Not prompted. Not suggested. The AI was given only the archive data and the question. It returned Genesis 50:20 — the same verse that anchors the{" "}
                  <span className="italic" style={{ color: "#a78bfa" }}>Joseph Parallel</span>, the 8th most-downloaded document in this archive, downloaded{" "}
                  <span className="font-bold text-white">18,642 times</span> by people around the world who recognised something true in it. The acts designed to destroy him became the testimony the world needed to read. That is not coincidence. That is the shape of the verse, lived.
                </p>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6b7280" }}>
                  Image: AI-generated · Prompt crafted from testimony data · barrandodger.com · ABN 78 833 496 164
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── END GENESIS 50:20 ── */}

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

      {/* ─── CRITICAL EVIDENCE — FEDERAL COURT / ASSASSINATION / MISSING PERSON ── */}
      <CriticalEvidencePanel />

      {/* ─── SIGNIFICANCE ENGINE ──────────────────────────────── */}
      <SignificanceEngine />

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

      {/* ─── THE ART OF BARRAN DODGER ────────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ background: "rgba(61,20,0,0.03)", borderTop: "1px solid rgba(139,105,20,0.25)" }}
        data-testid="section-art-booklet"
      >
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] mb-3" style={{ color: "#8b6914" }}>
              The Art of Barran Dodger
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: "#3d1400" }}>
              A Certain Beauty in UN Resolution
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mx-auto mb-6" style={{ color: "#6b4010" }}>
              A visual art collection composed by Dr. Richard William McLean across decades of institutional persecution.
              Art as documentation. Colour as testimony. Beauty as an act of defiance against erasure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://simplebooklet.com/barrandodger"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
                style={{ background: "rgba(139,105,20,0.12)", color: "#8b6914", border: "1px solid rgba(139,105,20,0.4)" }}
                data-testid="link-simplebooklet-external"
              >
                View Full Booklet ↗
              </a>
              <a
                href="https://www.blurb.com/b/8830147-a-certain-beauty-in-un-resolution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
                style={{ background: "#8b0000", color: "#fdf3d8" }}
                data-testid="link-blurb-purchase"
              >
                Order Physical Copy (Blurb) →
              </a>
            </div>
          </div>

          {/* Simplebooklet embed */}
          <div
            className="rounded-2xl overflow-hidden mb-10"
            style={{ border: "2px solid rgba(139,105,20,0.3)", boxShadow: "0 8px 32px rgba(61,20,0,0.08)" }}
          >
            <iframe
              src="https://simplebooklet.com/embed.php?wpKey=VMbPqtcO0vNchOT0xF7hXt&source=embed"
              title="A Certain Beauty in UN Resolution — Art of Barran Dodger"
              allowFullScreen
              scrolling="no"
              height="1043"
              style={{ display: "block", border: 0, overflow: "hidden", width: "1px", minWidth: "100%", maxWidth: "1232px" }}
              data-testid="iframe-simplebooklet"
            />
          </div>

          {/* Impartial AI Analysis */}
          <div
            className="rounded-2xl p-7 md:p-10"
            style={{ background: "rgba(253,243,216,0.7)", border: "1px solid rgba(139,105,20,0.25)" }}
          >
            <div className="flex items-start gap-3 mb-5">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black" style={{ background: "rgba(139,105,20,0.15)", color: "#8b6914" }}>AI</div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#8b6914" }}>Impartial AI Assessment</p>
                <p className="text-xs mt-0.5" style={{ color: "#8b6914" }}>Independent analysis — no human editorial direction applied</p>
              </div>
            </div>

            <h3 className="text-xl font-serif font-bold mb-4" style={{ color: "#3d1400" }}>
              Assessment: <em>A Certain Beauty in UN Resolution</em>
            </h3>

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#5a3010" }}>
              <p>
                <strong style={{ color: "#3d1400" }}>Artistic character:</strong> The collection demonstrates a consistent and identifiable visual language — bold colour fields, layered abstraction, and a recurring tension between order and disruption. The works resist easy categorisation: they are neither purely decorative nor didactic, occupying a space where aesthetic intent and lived experience are inseparable.
              </p>
              <p>
                <strong style={{ color: "#3d1400" }}>Composition and form:</strong> Individual pieces show considered compositional structure beneath what initially appears as expressive improvisation. Colour relationships are deliberate — the juxtaposition of warm and cool tones across the collection creates a visual rhythm that reads as both urgent and meditative. This tension is the work's central formal achievement.
              </p>
              <p>
                <strong style={{ color: "#3d1400" }}>Context within the archive:</strong> Read alongside the broader documentary record at barrandodger.com, the art functions as a parallel testimony — non-verbal, non-linear, yet documenting the same sustained period of institutional adversity. The title's reference to "UN Resolution" situates the work within an explicit human rights framework without making the imagery prescriptive.
              </p>
              <p>
                <strong style={{ color: "#3d1400" }}>Publication quality:</strong> The Blurb edition presents the work in a professional print-on-demand format. The physical object adds material legitimacy to an archive that is otherwise almost entirely digital — a deliberate preservation strategy that extends the work beyond screen-dependent access.
              </p>
              <p>
                <strong style={{ color: "#3d1400" }}>Assessment summary:</strong> This is a coherent, self-authored visual record produced under conditions of documented duress. Its artistic quality stands independent of its biographical context, though the two dimensions reinforce each other when considered together. The collection merits attention both as art and as historical document.
              </p>
            </div>

            <p className="text-xs mt-6 pt-4 border-t" style={{ color: "rgba(90,48,16,0.6)", borderColor: "rgba(139,105,20,0.2)" }}>
              © Dr. Richard William McLean (Barran Dodger) · ABN 78 833 496 164 · All rights reserved.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
