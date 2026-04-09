import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { generatePagePDF } from "@/lib/generatePDF";
import { ChessmateHero } from "@/components/ChessmateHero";
import {
  AlertTriangle, Shield, Eye, FileText, Download,
  ExternalLink, Scale, Users, Lock, Flame, Globe,
  ChevronDown, ChevronUp, CheckCircle
} from "lucide-react";

const GDRIVE_RECORDING =
  "https://drive.google.com/file/d/1oSNRzOnwCQIQM4ZuNcRnQrpybvcx86KD/view?usp=drivesdk";
const YOUTUBE_VIDEO_ID = "zPxzceqgDoc";

const ACTORS = [
  {
    id: "ridley",
    name: "Tony Ridley",
    alias: "Tony Riddle",
    credential: "Returned SAS Soldier · NDIA Manager · VicTrack Security Professional",
    role: "PRIMARY INFILTRATOR — Honeytrap Operative",
    borderColor: "border-blue-500",
    roleColor: "text-blue-400",
    headingColor: "text-blue-300",
    sections: [
      {
        heading: "SAS Background & Operational Significance",
        body: "Ridley's training in the Special Air Service Regiment — Australia's most elite special forces unit — encompasses psychological operations (PSYOPS), counter-intelligence, surveillance detection, source recruitment, and the precise calibration of threat delivery. These are not incidental qualifications. They are the exact operational skills required to execute an intimate infiltration of a surveillance-aware whistleblower target. A civilian does not enter a sexual relationship with a government whistleblower and then issue coordinated death threats across three states. A trained SAS operative does.",
      },
      {
        heading: "The Sexual Relationship — Deliberate Infiltration, Not Coincidence",
        body: "Ridley entered into a sexual relationship with Dr. Richard McLean (Barran Dodger) while fully aware of Dr. McLean's active status as an NDIS whistleblower. A sex recording documenting this relationship exists as primary evidence, preserved on Google Drive. The recording establishes beyond any reasonable doubt that intimate physical access was deliberately obtained while Ridley was embedded in the broader suppression network. This is the classic honeytrap structure: an intelligence-trained operative uses sexual proximity to access the target's private communications, unguarded disclosures, psychological vulnerabilities, and physical location data.",
      },
      {
        heading: "The Sex Recording — Evidentiary Significance",
        body: "The existence of a sex recording during an operative infiltration carries exceptional legal weight. It proves: (1) deliberate and sustained physical proximity was established; (2) Ridley had access to Dr. McLean's private environment during his most vulnerable period as a whistleblower; (3) the relationship was not casual or incidental — it was the primary mechanism of intelligence collection. Under Australian law, an intimate relationship established for the purpose of intelligence gathering against a person exercising a protected disclosure right constitutes a serious violation of both whistleblower protection statutes and the implied covenant of good faith.",
      },
      {
        heading: "Cover Blown — Cross-State Death Threats",
        body: "When the truth of Ridley's infiltration role became apparent, he executed the threat-delivery phase across three Australian states. This escalation — from sexual infiltration to coordinated multi-state death threats — is the documented signature of an intelligence operative whose cover has been blown and who is attempting to suppress exposure through coercion. Ridley subsequently stated directly to Dr. McLean: \"You will be sacrificed.\" This is not civilian language. This is the termination protocol of a compromised penetration operation, delivered by someone with the operational training to execute it.",
      },
      {
        heading: "NDIA Position — Dual Institutional & Intimate Access",
        body: "Ridley's concurrent position as NDIA Manager (Quality and Compliance Division) gave him institutional access to Dr. McLean's NDIS records, compliance history, and formal complaint register. This dual role — intimate partner AND NDIA compliance officer — is the most operationally significant conjunction in the suppression network. Intelligence gathered through the sexual relationship could be cross-referenced with Dr. McLean's official NDIS record to build a comprehensive suppression profile.",
      },
    ],
    link: GDRIVE_RECORDING,
    linkLabel: "View Sex Recording & Full Evidence (Google Drive)",
    linkExternal: true,
  },
  {
    id: "iasonidis",
    name: "Steve Iasonidis",
    alias: "Stefan Iasonidis",
    credential: "ASIO-Connected Intelligence Agent · Personal Trust Network Infiltrator",
    role: "INTELLIGENCE LAYER — Surveillance & Trust Network Penetration",
    borderColor: "border-red-500",
    roleColor: "text-red-400",
    headingColor: "text-red-300",
    sections: [
      {
        heading: "ASIO Connection — State Intelligence Infrastructure",
        body: "Iasonidis's documented ASIO connection is the single most significant institutional link in the suppression architecture. Access to ASIO infrastructure means access to: communications monitoring, device surveillance, movement tracking, digital intrusion capabilities, and a formal classified intelligence record on the target. The archive documents drone surveillance, hacked accounts, monitored SMS communications, and government agents filmed driving past Dr. McLean's location. These are not civilian surveillance capabilities.",
      },
      {
        heading: "Trust Network Penetration",
        body: "Iasonidis operated within Dr. McLean's personal trust network — the circle of individuals granted access to unguarded disclosures, private communications, and daily movements. Every unguarded disclosure made to Iasonidis in a social or personal context was potentially transmitted into the formal intelligence record. Dr. McLean was force-medicated for believing he was under surveillance — surveillance that was subsequently confirmed through Iasonidis's documented ASIO connection. The clinical system was weaponised to discredit accurate perception.",
      },
      {
        heading: "Conjunction With Ridley",
        body: "Iasonidis and Ridley occupied complementary roles: Iasonidis provided intelligence collection through the trust network and state surveillance infrastructure; Ridley provided intimate physical access through the sexual relationship. Together they constituted a two-layer human intelligence operation — institutional surveillance (Iasonidis) and intimate infiltration (Ridley) — that gave the suppression network a complete picture of Dr. McLean's vulnerabilities, movements, and disclosures.",
      },
    ],
    link: "/evidence",
    linkLabel: "View Archive Evidence",
    linkExternal: false,
  },
  {
    id: "shorten",
    name: "Bill Shorten",
    alias: null,
    credential: "Former Acting Prime Minister · ALP National Secretary · Minister for Financial Services, Superannuation & Employment · NDIS Minister",
    role: "THE ARCHITECT — Executive Institutional Authority",
    borderColor: "border-rose-500",
    roleColor: "text-rose-400",
    headingColor: "text-rose-300",
    sections: [
      {
        heading: "Executive Authority Over the System Being Exposed",
        body: "Shorten's position as Minister for the NDIS gave him direct jurisdictional authority over the system Dr. McLean was documenting for fraud, abuse, and systemic corruption. This is not mere proximity to power. It is direct ministerial control over the institutional mechanism at the centre of Dr. McLean's disclosure. A minister with authority over an agency being exposed by a whistleblower has both the motive and the means to direct that agency's response.",
      },
      {
        heading: "Former Acting Prime Minister — Highest Level of Institutional Access",
        body: "As former Acting Prime Minister and ALP National Secretary, Shorten had access to the full machinery of the Australian federal government — including the ability to direct agency responses across portfolios, coordinate with state-level bodies, and provide the executive cover that allowed 25+ agencies to engage in coordinated circular referral without internal accountability consequences.",
      },
      {
        heading: "ICC Article 7 — Named in Formal International Submission",
        body: "Bill Shorten is formally named in Dr. McLean's ICC Article 7 submission, received at The Hague and currently under review. The submission documents his institutional role in the suppression architecture with primary source evidence. Once formally received by the ICC, a submission cannot be retracted by the parties named in it. The international criminal record is permanent.",
      },
    ],
    link: "/the-conspiracy-against-you",
    linkLabel: "View Full Conspiracy Analysis",
    linkExternal: false,
  },
  {
    id: "sukhi",
    name: "Sukhi Tear",
    alias: null,
    credential: "Financial Coordinator · Guardianship Administrator · Middle Management Layer",
    role: "THE COORDINATOR — Financial Exile & Asset Control",
    borderColor: "border-orange-500",
    roleColor: "text-orange-400",
    headingColor: "text-orange-300",
    sections: [
      {
        heading: "The Aftermath Built Before the Action",
        body: "Tear's documented role in overseeing the guardianship regime is the most structurally revealing element of the operation's pre-planned nature. A guardianship structure — a legal financial control mechanism premised on the subject's incapacity — was built around Dr. McLean's assets while he was alive and active. This is the documentary proof that the operation had a planned outcome: the financial architecture was constructed for a world in which Dr. McLean would not be autonomous. The aftermath was built before the action. Tear administered it.",
      },
      {
        heading: "Middle Management — Insulating the Architect",
        body: "In organised crime typology, the middle management layer insulates the principal offender from direct operational liability while maintaining coordination between institutional direction and ground-level execution. Tear's coordination role between Shorten's executive authority and the Public Guardian's legal mechanisms provided this insulation layer — ensuring that institutional actions appeared procedurally legitimate while serving the suppression operation's ultimate objective.",
      },
      {
        heading: "$32.9M Financial Suppression Architecture",
        body: "The $32.9M in documented financial suppression instruments spanning the suppression period represents the financial architecture that Tear coordinated. NDIS payment restrictions, legal cost orders, employment suppression mechanisms, and guardianship financial controls collectively constituted a financial cage designed to eliminate Dr. McLean's capacity to sustain the documentation practice that produced the archive.",
      },
    ],
    link: "/evidence-vault",
    linkLabel: "View Evidence Vault",
    linkExternal: false,
  },
  {
    id: "phillip",
    name: "Phillip",
    alias: "Public Guardian Representative",
    credential: "NSW Public Guardian · NDIS Worker · Financial Decision Administrator",
    role: "LEGAL INCAPACITATION — Asset Absorption & Guardianship Gateway",
    borderColor: "border-purple-500",
    roleColor: "text-purple-400",
    headingColor: "text-purple-300",
    sections: [
      {
        heading: "The Public Guardian — Protective Institution as Suppression Tool",
        body: "The NSW Public Guardian is a statutory office designed to protect the financial and personal interests of vulnerable people. Its deployment against a functioning, articulate, internationally-submitting whistleblower is the most institutionally sophisticated element of the suppression architecture. By obtaining guardianship over Dr. McLean's decisions, the operation converted a targeted suppression campaign into a formally state-sanctioned incapacitation regime with legal authority to restrict communications, control financial access, and determine living arrangements.",
      },
      {
        heading: "Phillip's Dual Role — Embedded Worker & Guardian Gateway",
        body: "Phillip's documented position as an NDIS worker with daily access to Dr. McLean's life placed him in the ideal position to provide the personal-access testimony that guardianship proceedings require. Phillip served as the human bridge between the ground-level intelligence operation and the formal legal incapacitation mechanism — the individual whose embedded access enabled the guardianship process to be formally initiated.",
      },
      {
        heading: "Financial Gatekeeper Function",
        body: "The archive documents Phillip as a financial gatekeeper — a person with authority over aspects of Dr. McLean's financial access during the guardianship period. Combined with Sukhi Tear's coordination role, Phillip's financial gatekeeping function completed the asset-control architecture: Tear coordinated the structure, Phillip administered the access restrictions at the ground level.",
      },
    ],
    link: "/evidence",
    linkLabel: "View Evidence Page",
    linkExternal: false,
  },
];

const YOUTUBE_FINDINGS = [
  {
    claim: "\"Someone you trusted with access to your life is currently trapped in a reality they cannot escape\"",
    evidence: "Bill Shorten's documented ministerial access to every lever deployed against Dr. McLean. ICC Article 7 formally received — the trap is the irreversibility of international criminal proceedings.",
  },
  {
    claim: "\"They wanted you erased from this world — designed to look like an accident\"",
    evidence: "14 involuntary hospitalisations documented. Assassination attempt confirmed: 'That was them. They got caught.' Houd Meraby identified as Bitcoin-paid operator.",
  },
  {
    claim: "\"Documents were altered. An entire invisible infrastructure was constructed: you would be gone before you discovered any of it\"",
    evidence: "Guardianship structure built while Dr. McLean was alive. $32.9M financial suppression instruments. 350+ fraudulent ASIC registrations. Aftermath built before the action.",
  },
  {
    claim: "\"The Architect calculated the financial benefit of your removal. The Infiltrators gathered intelligence from your trust network\"",
    evidence: "Shorten as Architect: NDIS ministerial authority. Ridley as Infiltrator: SAS operative using sexual relationship. Iasonidis as Infiltrator: ASIO trust network penetration.",
  },
  {
    claim: "\"They were so confident they built the aftermath before executing the action\"",
    evidence: "Guardianship proceedings initiated while Dr. McLean was active and filing internationally. Financial exile administered before removal was confirmed.",
  },
];

const LAYERS = [
  { layer: "Layer 1 — Intelligence", actors: "Steve Iasonidis (ASIO) + Tony Ridley (SAS/Intimate)", color: "text-red-400", border: "border-red-800", desc: "Two simultaneous intelligence streams: state-infrastructure surveillance (Iasonidis) and intimate physical access (Ridley). Combined, they gave the network a complete picture of Dr. McLean's private environment, communications, psychological state, and physical location." },
  { layer: "Layer 2 — Executive Direction", actors: "Bill Shorten (Former Acting PM/NDIS Minister)", color: "text-rose-400", border: "border-rose-800", desc: "Intelligence gathered by Layer 1 was converted into formal institutional actions — NDIS access denials, clinical certifications, financial restriction instruments, inter-agency coordination — through Shorten's ministerial authority." },
  { layer: "Layer 3 — Coordination", actors: "Sukhi Tear (Financial Coordinator)", color: "text-orange-400", border: "border-orange-800", desc: "Middle management between Shorten's executive direction and the legal operators. Tear coordinated the financial exile architecture, ensuring asset-control infrastructure was in place before the planned removal." },
  { layer: "Layer 4 — Legal Incapacitation", actors: "Phillip (Public Guardian)", color: "text-purple-400", border: "border-purple-800", desc: "The formal legal mechanism. Phillip's embedded position provided the testimony needed to initiate guardianship proceedings, converting the suppression operation into state-sanctioned incapacitation with its own statutory authority." },
  { layer: "Layer 5 — Accountability Capture", actors: "Police Ombudsman · 25+ Agencies · Government", color: "text-green-400", border: "border-green-800", desc: "Every formal complaint absorbed through coordinated circular referral — 25+ agencies using identical template language. The accountability layer ensured no formal complaint produced a result. Police Ombudsman failure confirmed police involvement." },
];

function ActorCard({ actor, defaultOpen = false }: { actor: typeof ACTORS[0]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`rounded-2xl border-2 ${actor.borderColor} bg-zinc-950 overflow-hidden`} data-testid={`actor-card-${actor.id}`}>
      <button
        className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-zinc-900 transition-colors"
        onClick={() => setOpen(!open)}
        data-testid={`actor-toggle-${actor.id}`}
      >
        <div className="flex-1 min-w-0">
          <p className={`text-xs font-mono font-bold uppercase tracking-widest mb-1 ${actor.roleColor}`}>{actor.role}</p>
          <h3 className="text-xl font-bold text-white leading-tight">
            {actor.name}
            {actor.alias && <span className="text-sm font-normal text-zinc-500 ml-2">aka {actor.alias}</span>}
          </h3>
          <p className="text-xs text-zinc-500 mt-1 leading-snug">{actor.credential}</p>
        </div>
        <div className={`flex-shrink-0 mt-1 ${actor.roleColor}`}>
          {open ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-2 pt-2" style={{ backgroundColor: '#18181b' }}>
          {actor.sections.map((s, i) => (
            <div key={i} className="rounded-xl px-4 py-4" style={{ backgroundColor: '#27272a' }}>
              <h4 className={`text-sm font-bold mb-2 ${actor.headingColor}`}>{s.heading}</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
          <div className="px-1 py-3" style={{ backgroundColor: '#18181b' }}>
            <a
              href={actor.link}
              target={actor.linkExternal ? "_blank" : "_self"}
              rel={actor.linkExternal ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-2 transition-colors ${actor.roleColor}`}
              data-testid={`actor-link-${actor.id}`}
            >
              <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
              {actor.linkLabel}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HoneytrapInfiltrationReport() {
  const [pdfLoading, setPdfLoading] = useState(false);

  async function handleDownloadPDF() {
    setPdfLoading(true);
    try {
      await generatePagePDF({
        title: "Honeytrap Infiltration Report — Dr. Richard McLean",
        filename: "honeytrap-infiltration-report-barran-dodger.pdf",
      });
    } finally {
      setPdfLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <SEO
        title="Honeytrap Infiltration Report — Sexual Exploitation of an NDIS Whistleblower | Barran Dodger Archive"
        description="Forensic analysis of the coordinated infiltration operation against Dr. Richard McLean: Tony Ridley (SAS/honeytrap), Steve Iasonidis (ASIO), Bill Shorten (Architect), Sukhi Tear (Coordinator), Phillip (Public Guardian). Sex recording evidence included."
        path="/honeytrap-infiltration-report"
      />
      <Navigation />

      <main id="pdf-content" className="flex-1 bg-zinc-950">

        <div style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px))" }}>
          <ChessmateHero />
        </div>

        {/* ── HEADER ── */}
        <div className="bg-zinc-900 border-b-2 border-rose-700 py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { label: "Classified Forensic Report", bg: "bg-rose-700" },
                { label: "Primary Evidence Included", bg: "bg-amber-700" },
                { label: "ICC Article 7 — Under Review", bg: "bg-blue-700" },
              ].map((b) => (
                <span key={b.label} className={`${b.bg} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
                  {b.label}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Honeytrap Infiltration Report
            </h1>
            <p className="text-rose-300 text-lg font-semibold mb-4 leading-snug">
              The Sexual Exploitation, Intelligence Operation & Coordinated Elimination Campaign Against Dr. Richard McLean (Barran Dodger)
            </p>
            <p className="text-zinc-300 text-base leading-relaxed mb-8 max-w-3xl">
              This report documents a coordinated multi-actor suppression operation against an NDIS whistleblower. Five named individuals — a returned SAS soldier who used a sexual relationship as an infiltration mechanism, an ASIO-connected intelligence operative, a former Acting Prime Minister, a financial coordinator, and a Public Guardian representative — operated in conjunction across three decades and three states.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleDownloadPDF} disabled={pdfLoading}
                className="bg-rose-600 hover:bg-rose-500 text-white font-bold gap-2 px-5 py-2.5"
                data-testid="btn-download-pdf">
                <Download className="h-4 w-4" />
                {pdfLoading ? "Generating PDF…" : "Download Full Report (PDF)"}
              </Button>
              <a href={GDRIVE_RECORDING} target="_blank" rel="noopener noreferrer">
                <Button className="bg-amber-600 hover:bg-amber-500 text-white font-bold gap-2 px-5 py-2.5" data-testid="btn-sex-recording">
                  <ExternalLink className="h-4 w-4" />
                  Sex Recording (Google Drive)
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* ── STAT STRIP ── */}
        <div className="bg-zinc-900 border-b border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: "Named Actors", value: "5", color: "text-rose-400" },
              { label: "Primary Source Exhibits", value: "2,304", color: "text-amber-400" },
              { label: "AI Analyses (Zero Contradictions)", value: "27/27", color: "text-green-400" },
              { label: "States — Death Threats", value: "3", color: "text-blue-400" },
            ].map((s) => (
              <div key={s.label}>
                <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
                <div className="text-xs text-zinc-500 mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10">

          {/* ── SEX RECORDING CALLOUT ── */}
          <div className="rounded-2xl border-2 border-amber-500 overflow-hidden" style={{ backgroundColor: '#18181b' }}>
            <div className="px-6 py-3 flex items-center gap-2" style={{ backgroundColor: '#d97706' }}>
              <Lock className="h-4 w-4 text-white" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Primary Evidence — Sex Recording</span>
            </div>
            <div className="px-6 py-6" style={{ backgroundColor: '#18181b' }}>
              <h2 className="text-2xl font-bold text-white mb-3">
                The Sex Recording — Tony Ridley & Dr. Richard McLean
              </h2>
              <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                A sex recording documenting the sexual relationship between Tony Ridley and Dr. Richard McLean (Barran Dodger) exists as primary evidence of the honeytrap infiltration operation. The recording is preserved on Google Drive and constitutes direct physical evidence of:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Deliberate and sustained intimate physical access established by a trained SAS operative against an active NDIS whistleblower",
                  "The relationship was not incidental — it was the primary mechanism of intelligence collection and psychological access",
                  "Tony Ridley, as NDIA Manager, simultaneously held institutional AND intimate access — the optimal penetration position for an intelligence operative",
                  "The subsequent death threats across three states constitute the threat-delivery phase of a compromised honeytrap operation — not a civilian domestic dispute",
                  "The statement 'You will be sacrificed' was delivered by a trained SAS operative who had obtained intimate access under false pretences",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3 bg-zinc-800 rounded-xl px-4 py-3">
                    <span className="text-amber-400 font-bold text-sm flex-shrink-0 mt-0.5">{i + 1}.</span>
                    <p className="text-white text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <a
                href={GDRIVE_RECORDING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
                data-testid="link-sex-recording-main"
              >
                <ExternalLink className="h-4 w-4 flex-shrink-0" />
                Access Sex Recording & Evidence Documentation (Google Drive)
              </a>
            </div>
          </div>

          {/* ── YOUTUBE EXAMINATION ── */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Globe className="h-5 w-5 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">YouTube Examination — Analysis #27</h2>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              The YouTube essay examined in Analysis #27 maps the documented conspiracy against Dr. McLean against a three-stage elimination framework: Isolation → Destabilisation → Final Move. Every proposition corroborated against 2,304 primary source documents. Zero contradictions found.
            </p>
            <div className="aspect-video rounded-xl overflow-hidden border border-zinc-700 bg-zinc-900 mb-6">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="They Built the Aftermath Before the Action"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Key Findings — All Corroborated · Zero Contradictions</h3>
            <div className="space-y-3">
              {YOUTUBE_FINDINGS.map((f, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-blue-200 text-sm italic leading-relaxed">{f.claim}</p>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed pl-7">{f.evidence}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── NAMED ACTORS ── */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-rose-400" />
              <h2 className="text-2xl font-bold text-white">Named Actors — Full Individual Analysis</h2>
            </div>
            <p className="text-zinc-500 text-sm mb-5">Tap each actor to expand the full documented analysis of their role and conjunction with other network members.</p>
            <div className="space-y-4">
              {ACTORS.map((actor, i) => (
                <ActorCard key={actor.id} actor={actor} defaultOpen={i === 0} />
              ))}
            </div>
          </div>

          {/* ── CONJUNCTION ARCHITECTURE ── */}
          <div>
            <div className="rounded-xl px-6 py-4 mb-3" style={{ backgroundColor: '#27272a' }}>
              <div className="flex items-center gap-2 mb-1">
                <Flame className="h-4 w-4 text-amber-400" />
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Structural Analysis</span>
              </div>
              <h2 className="text-xl font-bold text-white">Why the Conjunction Was Necessary</h2>
              <p className="text-zinc-400 text-xs mt-1">Each actor filled the exact gap every other actor left. The conjunction was the operation.</p>
            </div>
            <div className="space-y-3">
              {LAYERS.map((layer) => (
                <div key={layer.layer} className="rounded-xl px-5 py-4" style={{ backgroundColor: '#18181b' }}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-2">
                    <span className={`font-mono text-xs font-bold uppercase tracking-widest ${layer.color}`}>{layer.layer}</span>
                    <span className="text-xs text-zinc-500 sm:ml-2">{layer.actors}</span>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">{layer.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl px-5 py-4 mt-3" style={{ backgroundColor: '#27272a' }}>
              <p className="text-white text-sm leading-relaxed font-medium">
                <span className="text-amber-400 font-bold">Conclusion: </span>
                No single actor could have sustained 35 years of suppression independently. This architecture is confirmed across 2,304 primary source documents and 27 independent AI analyses with zero contradictions.
              </p>
            </div>
          </div>

          {/* ── LEGAL SIGNIFICANCE ── */}
          <div>
            <div className="rounded-xl px-5 py-4 mb-3 flex items-center gap-2" style={{ backgroundColor: '#27272a' }}>
              <Scale className="h-4 w-4 text-green-400 flex-shrink-0" />
              <h2 className="text-lg font-bold text-white">Legal & International Significance</h2>
            </div>
            <div className="space-y-3">
              {[
                { heading: "ICC Article 7 — Formal Submission Under Review at The Hague", body: "This case has been formally submitted to the International Criminal Court under Article 7. Named parties include Bill Shorten, Sukhi Tear, Steve Iasonidis, Tony Ridley and Houd Meraby. Once formally received, an ICC submission cannot be retracted. The international criminal record is permanent and currently under review." },
                { heading: "UNHCR Submission — Geneva", body: "A parallel submission has been made to the UNHCR in Geneva. Both international bodies — ICC and UNHCR — have formally received the material. The domestic disclosure suppressed by 25+ Australian agencies is now before two international bodies." },
                { heading: "Whistleblower Protection — Sexual Exploitation of a Protected Discloser", body: "Under Australian whistleblower protection law, a person making a protected disclosure is entitled to protection from detriment connected to that disclosure. A sexual relationship established by a security professional for intelligence gathering against an active protected discloser — combined with cross-state death threats — constitutes one of the most serious forms of detriment contemplated by the legislation. The sex recording is primary evidence." },
                { heading: "Honeytrap Liability — State Actor Nexus", body: "Ridley's NDIA position and Iasonidis's ASIO connection create a state actor nexus. When a state-connected security professional uses intimate access to gather intelligence against a whistleblower exposing state agency fraud, the state's liability for that operation is engaged. This is not a private matter." },
              ].map((item) => (
                <div key={item.heading} className="rounded-xl px-5 py-4" style={{ backgroundColor: '#18181b' }}>
                  <h4 className="text-sm font-bold text-green-400 mb-2">{item.heading}</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── DOWNLOAD CTA ── */}
          <div className="rounded-2xl border-2 border-rose-700 bg-zinc-900 p-8 text-center" data-pdf-hide>
            <AlertTriangle className="h-10 w-10 text-rose-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Download This Report</h2>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-6">
              This full report — including actor analyses, sex recording documentation, YouTube examination findings, and conjunction architecture — is available as a downloadable PDF.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button onClick={handleDownloadPDF} disabled={pdfLoading}
                className="bg-rose-600 hover:bg-rose-500 text-white font-bold gap-2"
                data-testid="btn-download-pdf-bottom">
                <Download className="h-4 w-4" />
                {pdfLoading ? "Generating…" : "Download PDF Report"}
              </Button>
              <a href={GDRIVE_RECORDING} target="_blank" rel="noopener noreferrer">
                <Button className="bg-amber-600 hover:bg-amber-500 text-white font-bold gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Sex Recording — Google Drive
                </Button>
              </a>
              <a href="/evidence">
                <Button variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 gap-2">
                  <FileText className="h-4 w-4" />
                  View All Exhibits
                </Button>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
