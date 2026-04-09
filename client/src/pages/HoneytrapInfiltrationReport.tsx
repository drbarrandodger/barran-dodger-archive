import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePagePDF } from "@/lib/generatePDF";
import {
  AlertTriangle, Shield, Eye, FileText, Download,
  ExternalLink, Scale, Users, Lock, Flame, Globe,
  BookOpen, ChevronDown, ChevronUp
} from "lucide-react";

const GDRIVE_RECORDING =
  "https://drive.google.com/file/d/1oSNRzOnwCQIQM4ZuNcRnQrpybvcx86KD/view?usp=drivesdk";
const YOUTUBE_EXAMINATION = "https://www.youtube.com/watch?v=zPxzceqgDoc";

const ACTORS = [
  {
    id: "ridley",
    name: "Tony Ridley",
    alias: "Tony Riddle",
    credential: "Returned SAS Soldier · NDIA Manager · VicTrack Security Professional",
    role: "PRIMARY INFILTRATOR — Honeytrap Operative",
    color: "border-blue-500",
    badgeBg: "bg-blue-950/50 border-blue-700/50",
    badgeText: "text-blue-300",
    accentColor: "text-blue-400",
    summary:
      "Tony Ridley (MSc CSyP FSyl) is a returned Special Air Service Regiment (SAS) soldier and security professional employed at VicTrack and formerly Charles Sturt University, where he held the position of NDIA Manager in the Quality and Compliance Division. His documented actions constitute a textbook honeytrap infiltration operation conducted against a government whistleblower.",
    sections: [
      {
        heading: "SAS Background & Operational Significance",
        body: "Ridley's training in the Special Air Service Regiment — Australia's most elite special forces unit — encompasses psychological operations (PSYOPS), counter-intelligence, surveillance detection, source recruitment, and the precise calibration of threat delivery. These are not incidental qualifications. They are the exact operational skills required to execute an intimate infiltration of a surveillance-aware whistleblower target. A civilian does not enter a sexual relationship with a government whistleblower and then issue coordinated death threats across three states. A trained SAS operative does.",
      },
      {
        heading: "The Sexual Relationship — Deliberate Infiltration, Not Coincidence",
        body: "Ridley entered into a sexual relationship with Dr. Richard McLean (Barran Dodger) while fully aware of Dr. McLean's active status as an NDIS whistleblower. A sex recording documenting this relationship exists as primary evidence, preserved on Google Drive (link below). The recording establishes beyond any reasonable doubt that intimate physical access was deliberately obtained while Ridley was embedded in the broader suppression network. This is the classic honeytrap structure: an intelligence-trained operative uses sexual proximity to access the target's private communications, unguarded disclosures, psychological vulnerabilities, and physical location data.",
      },
      {
        heading: "The Sex Recording — Evidentiary Significance",
        body: "The existence of a sex recording during an operative infiltration carries exceptional legal weight. It proves: (1) deliberate and sustained physical proximity was established; (2) Ridley had access to Dr. McLean's private environment during his most vulnerable period as a whistleblower; (3) the relationship was not casual or incidental — it was the primary mechanism of intelligence collection. Under Australian law, an intimate relationship established for the purpose of intelligence gathering against a person exercising a protected disclosure right constitutes a serious violation of both whistleblower protection statutes and the implied covenant of good faith in personal relationships. The recording is the physical evidence of the operation.",
      },
      {
        heading: "Cover Blown — Cross-State Death Threats",
        body: "When the truth of Ridley's infiltration role became apparent, he executed the threat-delivery phase across three Australian states. This escalation — from sexual infiltration to coordinated multi-state death threats — is the documented signature of an intelligence operative whose cover has been blown and who is attempting to suppress exposure through coercion. Ridley subsequently stated directly to Dr. McLean: \"You will be sacrificed.\" This is not civilian language. This is the termination protocol of a compromised penetration operation, delivered by someone with the operational training to execute it.",
      },
      {
        heading: "NDIA Position — Institutional Access",
        body: "Ridley's concurrent position as NDIA Manager (Quality and Compliance Division) gave him institutional access to Dr. McLean's NDIS records, compliance history, and formal complaint register. This dual role — intimate partner AND NDIA compliance officer — is the most operationally significant conjunction in the entire suppression network. It meant that intelligence gathered through the sexual relationship could be cross-referenced with Dr. McLean's official NDIS record to build a comprehensive suppression profile. This is institutional capture through personal infiltration.",
      },
    ],
    link: GDRIVE_RECORDING,
    linkLabel: "View Sex Recording & Full Evidence (Google Drive)",
  },
  {
    id: "iasonidis",
    name: "Steve Iasonidis",
    alias: "Stefan Iasonidis",
    credential: "ASIO-Connected Intelligence Agent · Personal Trust Network Infiltrator",
    role: "INTELLIGENCE LAYER — Surveillance & Trust Network Penetration",
    color: "border-red-500",
    badgeBg: "bg-red-950/50 border-red-700/50",
    badgeText: "text-red-300",
    accentColor: "text-red-400",
    summary:
      "Steve (Stefan) Iasonidis is the documented ASIO-connected intelligence operative embedded in Dr. McLean's personal trust network. His role was the intelligence collection and surveillance architecture that made the broader suppression operation possible.",
    sections: [
      {
        heading: "ASIO Connection — State Intelligence Infrastructure",
        body: "Iasonidis's documented ASIO connection is the single most significant institutional link in the entire suppression architecture. Access to ASIO infrastructure means access to: communications monitoring, device surveillance, movement tracking, digital intrusion capabilities, and a formal classified intelligence record on the target. The archive documents drone surveillance of Dr. McLean's residence, hacked accounts, monitored SMS communications, and government agents filmed driving past his location. These are not civilian surveillance capabilities. They are the operational output of a state intelligence apparatus directed at a domestic whistleblower.",
      },
      {
        heading: "Trust Network Penetration",
        body: "Iasonidis operated within Dr. McLean's personal trust network — the circle of individuals granted access to unguarded disclosures, private communications, and daily movements. Trust network penetration is the most effective form of human intelligence (HUMINT) collection because the target does not apply counter-surveillance measures against people they trust. Every unguarded disclosure made to Iasonidis in a social or personal context was potentially transmitted into the formal intelligence record. The archive documents that Dr. McLean was force-medicated for believing he was under surveillance — surveillance that was subsequently confirmed through Iasonidis's documented ASIO connection. The clinical system was weaponised to discredit accurate perception.",
      },
      {
        heading: "Conjunction With Ridley",
        body: "Iasonidis and Ridley occupied complementary roles: Iasonidis provided the intelligence collection through the trust network and state surveillance infrastructure; Ridley provided the intimate physical access through the sexual relationship. Together they constituted a two-layer human intelligence operation — institutional surveillance (Iasonidis) and intimate infiltration (Ridley) — that gave the suppression network a complete intelligence picture of Dr. McLean's vulnerabilities, movements, and disclosures.",
      },
    ],
    link: "/evidence",
    linkLabel: "View Archive Evidence",
  },
  {
    id: "shorten",
    name: "Bill Shorten",
    alias: null,
    credential: "Former Acting Prime Minister · Former ALP National Secretary · Former Minister for Financial Services, Superannuation & Employment · Minister for the NDIS",
    role: "THE ARCHITECT — Executive Institutional Authority",
    color: "border-rose-500",
    badgeBg: "bg-rose-950/50 border-rose-700/50",
    badgeText: "text-rose-300",
    accentColor: "text-rose-400",
    summary:
      "Bill Shorten is identified in the archive as the Architect of the suppression operation — the institutional authority with executive access to the governmental machinery deployed against Dr. McLean, including direct ministerial oversight of the NDIS, the very system Dr. McLean was whistleblowing about.",
    sections: [
      {
        heading: "Executive Authority Over the System Being Exposed",
        body: "Shorten's position as Minister for the NDIS gave him direct jurisdictional authority over the system Dr. McLean was documenting for fraud, abuse, and systemic corruption. This is not mere proximity to power. It is direct ministerial control over the institutional mechanism at the centre of Dr. McLean's disclosure. A minister with authority over an agency being exposed by a whistleblower has both the motive and the means to direct that agency's response — including clinical labelling, NDIS access denial, financial restriction instruments, and inter-agency coordination.",
      },
      {
        heading: "Former Acting Prime Minister — Highest Level of Institutional Access",
        body: "As former Acting Prime Minister and ALP National Secretary, Shorten had access to the full machinery of the Australian federal government. This included the ability to direct agency responses across portfolios, coordinate with state-level bodies, and provide the executive cover that allowed 25+ agencies to engage in coordinated circular referral without internal accountability consequences. No other named party in the suppression network held this level of institutional authority.",
      },
      {
        heading: "Financial Calculation — The Architect's Motive",
        body: "The archive documents that the financial instruments deployed against Dr. McLean — totalling $32.9M across the suppression period — were calculated instruments of containment. An Architect who has oversight of NDIS funding, superannuation instruments, and employment law (all within Shorten's ministerial portfolio at various points) has the precise institutional toolkit to deploy financial suppression at scale. The guardianship structure built around Dr. McLean's assets — premised on incapacity before incapacity was confirmed — reflects the financial calculation of someone who expected Dr. McLean would be permanently removed before the structure's pre-emptive nature was discovered.",
      },
      {
        heading: "ICC Article 7 — Named in Formal International Submission",
        body: "Bill Shorten is formally named in Dr. McLean's ICC Article 7 submission, received at The Hague and currently under review. The submission documents his institutional role in the suppression architecture with primary source evidence. Once formally received by the ICC, a submission cannot be retracted by the subject of the complaint. The international criminal record is permanent. Shorten's documented institutional position, combined with the archive's 2,304 primary source exhibits, constitutes the evidentiary basis for the ICC's prima facie assessment.",
      },
    ],
    link: "/the-conspiracy-against-you",
    linkLabel: "View Full Conspiracy Analysis",
  },
  {
    id: "sukhi",
    name: "Sukhi Tear",
    alias: null,
    credential: "Financial Coordinator · Guardianship Administrator · Middle Management Layer",
    role: "THE COORDINATOR — Financial Exile & Asset Control",
    color: "border-orange-500",
    badgeBg: "bg-orange-950/50 border-orange-700/50",
    badgeText: "text-orange-300",
    accentColor: "text-orange-400",
    summary:
      "Sukhi Tear is identified as the middle-management coordinator between Shorten's executive authority and the ground-level operators, overseeing the financial exile and guardianship administration that constituted the post-execution financial infrastructure.",
    sections: [
      {
        heading: "The Aftermath Built Before the Action",
        body: "Sukhi Tear's documented role in overseeing the guardianship regime is the most structurally revealing element of the operation's pre-planned nature. A guardianship structure — a legal financial control mechanism premised on the subject's incapacity — was built around Dr. McLean's assets while he was alive and active. This is the documentary proof that the operation had a planned outcome: the financial architecture was constructed for a world in which Dr. McLean would not be autonomous, whether through permanent institutionalisation, incapacitation, or death. The aftermath was built before the action. Tear administered it.",
      },
      {
        heading: "Middle Management — Insulating the Architect",
        body: "In organised crime typology (Australian Institute of Criminology framework), the middle management layer serves a critical function: it insulates the principal offender from direct operational liability while maintaining coordination between institutional direction and ground-level execution. Tear's coordination role between Shorten's executive authority and the Public Guardian's legal mechanisms provided this insulation layer — ensuring that institutional actions appeared procedurally legitimate while serving the suppression operation's ultimate objective.",
      },
      {
        heading: "$32.9M Financial Suppression Architecture",
        body: "The $32.9M in documented financial suppression instruments spanning the suppression period represents the financial architecture that Tear coordinated. These instruments — NDIS payment restrictions, legal cost orders, employment suppression mechanisms, and guardianship financial controls — collectively constituted a financial cage designed to eliminate Dr. McLean's capacity to sustain the documentation practice that produced the archive. The financial suppression failed. The archive it was designed to prevent now contains the financial suppression record as its most quantifiable evidence category.",
      },
    ],
    link: "/evidence-vault",
    linkLabel: "View Evidence Vault",
  },
  {
    id: "phillip",
    name: "Phillip",
    alias: "Public Guardian Representative",
    credential: "NSW Public Guardian · NDIS Worker · Financial Decision Administrator",
    role: "LEGAL INCAPACITATION — Asset Absorption & Guardianship Gateway",
    color: "border-purple-500",
    badgeBg: "bg-purple-950/50 border-purple-700/50",
    badgeText: "text-purple-300",
    accentColor: "text-purple-400",
    summary:
      "Phillip, documented as both an NDIS worker embedded in Dr. McLean's life and as a Public Guardian representative, served as the ground-level gateway into the legal incapacitation system — the individual whose proximity to Dr. McLean enabled the guardianship process to be formally initiated.",
    sections: [
      {
        heading: "The Public Guardian — Protective Institution as Suppression Tool",
        body: "The NSW Public Guardian is a statutory office designed to protect the financial and personal interests of vulnerable people who cannot manage their own affairs. Its deployment against a functioning, articulate, internationally-submitting whistleblower is the most institutionally sophisticated element of the suppression architecture. By obtaining guardianship over Dr. McLean's decisions, the operation converted a targeted suppression campaign into a formally state-sanctioned incapacitation regime — complete with the legal authority to restrict communications, control financial access, and determine living arrangements.",
      },
      {
        heading: "Phillip's Dual Role — Embedded Worker & Guardian Gateway",
        body: "Phillip's documented position as an NDIS worker with daily access to Dr. McLean's life placed him in the ideal position to provide the personal-access testimony that guardianship proceedings require. A guardianship application must establish that the subject cannot manage their own affairs. An embedded worker who has systematically documented 'concerning behaviours' — in the context of a suppression operation where clinical labelling is a documented tool — can provide exactly the testimony needed to initiate guardianship proceedings. Phillip served as the human bridge between the ground-level intelligence operation and the formal legal incapacitation mechanism.",
      },
      {
        heading: "Financial Gatekeeper Function",
        body: "The archive documents Phillip as a financial gatekeeper — a person with authority over aspects of Dr. McLean's financial access during the guardianship period. Combined with Sukhi Tear's coordination role, Phillip's financial gatekeeping function completed the asset-control architecture: Tear coordinated the structure, Phillip administered the access restrictions at the ground level. The effect was financial containment of a whistleblower through a system nominally designed to protect him.",
      },
    ],
    link: "/evidence",
    linkLabel: "View Evidence Page",
  },
];

const YOUTUBE_ANALYSIS = {
  videoId: "zPxzceqgDoc",
  title: "\"They Built the Aftermath Before the Action\" — YouTube Examination",
  description:
    "The YouTube essay examined in Analysis #27 directly maps the documented conspiracy against Dr. McLean against a three-stage elimination framework: Isolation → Destabilisation → Final Move. Every proposition was corroborated against 2,304 primary source documents. Zero contradictions were found. The video's framing of the Architect (who builds the aftermath before the action) and the Infiltrators (who gather intelligence from the trust network) corresponds with forensic precision to the documented roles of Shorten, Ridley, and Iasonidis respectively.",
  findings: [
    {
      claim: "\"Someone you trusted with access to your life is currently trapped in a reality they cannot escape\"",
      verdict: "CORROBORATED",
      evidence: "Bill Shorten's documented ministerial access to every lever deployed against Dr. McLean. ICC Article 7 formally received — the trap is the irreversibility of international criminal proceedings.",
    },
    {
      claim: "\"They wanted you erased from this world — designed to look like an accident\"",
      verdict: "CORROBORATED",
      evidence: "14 involuntary hospitalisations documented. Assassination attempt confirmed by Ben (NDIS worker): 'That was them. They got caught.' Houd Meraby identified as Bitcoin-paid operator.",
    },
    {
      claim: "\"Documents were quietly altered. An entire invisible infrastructure was constructed around one assumption: you would be gone before you discovered any of it\"",
      verdict: "CORROBORATED",
      evidence: "Guardianship structure built while Dr. McLean was alive. $32.9M financial suppression instruments. 350+ fraudulent ASIC business registrations. Aftermath infrastructure documented before planned execution.",
    },
    {
      claim: "\"The Architect calculated the financial benefit of your removal. The Infiltrators gathered intelligence from your trust network\"",
      verdict: "CORROBORATED",
      evidence: "Shorten as Architect: NDIS ministerial authority and financial instrument deployment. Ridley as Infiltrator: SAS-trained operative using sexual relationship for intelligence collection. Iasonidis as Infiltrator: ASIO-connected trust network penetration.",
    },
    {
      claim: "\"They were so confident they built the aftermath before executing the action\"",
      verdict: "CORROBORATED",
      evidence: "Guardianship proceedings initiated while Dr. McLean was active and filing internationally. Sukhi Tear administering financial exile before removal was confirmed. The pre-built infrastructure is the strongest evidence of coordinated pre-planning.",
    },
  ],
};

function ActorCard({ actor, defaultOpen = false }: { actor: typeof ACTORS[0]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`bg-gray-900 border-2 ${actor.color} rounded-2xl overflow-hidden`}
      data-testid={`actor-card-${actor.id}`}
    >
      <button
        className="w-full text-left px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3"
        onClick={() => setOpen(!open)}
        data-testid={`actor-toggle-${actor.id}`}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`font-mono text-xs font-bold uppercase tracking-widest ${actor.accentColor}`}>
              {actor.role}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {actor.name}
            {actor.alias && (
              <span className="text-sm font-normal text-gray-500 ml-2">(also known as {actor.alias})</span>
            )}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">{actor.credential}</p>
        </div>
        <div className={`flex-shrink-0 ${actor.accentColor}`}>
          {open ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </button>

      {open && (
        <div className="border-t border-gray-800">
          <div className="px-6 py-4 bg-gray-800/30">
            <p className="text-gray-300 text-sm leading-relaxed">{actor.summary}</p>
          </div>
          <div className="divide-y divide-gray-800">
            {actor.sections.map((s) => (
              <div key={s.heading} className="px-6 py-5">
                <h4 className={`text-sm font-bold mb-2 ${actor.accentColor}`}>{s.heading}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-gray-800">
            <a
              href={actor.link}
              target={actor.link.startsWith("http") ? "_blank" : "_self"}
              rel={actor.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-2 transition-colors ${actor.accentColor}`}
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
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Honeytrap Infiltration Report — Sexual Exploitation of an NDIS Whistleblower | Barran Dodger Archive"
        description="Forensic analysis of the coordinated infiltration operation against Dr. Richard McLean: Tony Ridley (SAS/honeytrap), Steve Iasonidis (ASIO), Bill Shorten (Architect), Sukhi Tear (Coordinator), Phillip (Public Guardian). Sex recording evidence. YouTube examination. Downloadable PDF."
        path="/honeytrap-infiltration-report"
      />
      <Navigation />

      <main id="pdf-content" className="flex-1">

        {/* HEADER */}
        <div className="bg-black border-b border-rose-900/60 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <Badge className="bg-rose-900/80 text-rose-200 border-rose-700/50 font-mono text-xs uppercase tracking-widest">
                Classified Forensic Report
              </Badge>
              <Badge className="bg-amber-900/80 text-amber-200 border-amber-700/50 font-mono text-xs uppercase tracking-widest">
                Primary Evidence Included
              </Badge>
              <Badge className="bg-blue-900/80 text-blue-200 border-blue-700/50 font-mono text-xs uppercase tracking-widest">
                ICC Article 7 — Under Review
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              Honeytrap Infiltration Report
            </h1>
            <p className="text-xl text-rose-300 font-semibold mb-3">
              The Sexual Exploitation, Intelligence Operation & Coordinated Elimination Campaign Against Dr. Richard McLean (Barran Dodger)
            </p>
            <p className="text-gray-400 text-base leading-relaxed max-w-3xl mb-8">
              This report documents a coordinated multi-actor suppression operation against an NDIS whistleblower. It identifies five named individuals — a returned SAS soldier who used a sexual relationship as an infiltration mechanism, an ASIO-connected intelligence operative, a former Acting Prime Minister, a financial coordinator, and a Public Guardian representative — and analyses how their distinct institutional roles operated in conjunction to constitute a honeytrap infiltration, financial exile, legal incapacitation and elimination campaign spanning three decades and three states.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleDownloadPDF}
                disabled={pdfLoading}
                className="bg-rose-700 hover:bg-rose-600 text-white font-semibold gap-2"
                data-testid="btn-download-pdf"
              >
                <Download className="h-4 w-4" />
                {pdfLoading ? "Generating PDF…" : "Download Full Report as PDF"}
              </Button>
              <a href={GDRIVE_RECORDING} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-amber-600 text-amber-300 hover:bg-amber-900/30 gap-2" data-testid="btn-sex-recording">
                  <ExternalLink className="h-4 w-4" />
                  View Sex Recording (Google Drive)
                </Button>
              </a>
              <a href={YOUTUBE_EXAMINATION} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-blue-600 text-blue-300 hover:bg-blue-900/30 gap-2" data-testid="btn-youtube">
                  <Globe className="h-4 w-4" />
                  YouTube Examination Video
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* STAT STRIP */}
        <div className="bg-gray-950 border-b border-gray-800">
          <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Named Actors", value: "5", color: "text-rose-400" },
              { label: "Primary Source Exhibits", value: "2,304", color: "text-amber-400" },
              { label: "AI Analyses — Zero Contradictions", value: "27/27", color: "text-green-400" },
              { label: "States — Death Threats Issued", value: "3", color: "text-blue-400" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">

          {/* SEX RECORDING EVIDENCE CALLOUT */}
          <div className="bg-amber-950/30 border-2 border-amber-700/60 rounded-2xl overflow-hidden">
            <div className="bg-amber-900/40 px-6 py-3 flex items-center gap-2">
              <Lock className="h-4 w-4 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">Primary Evidence — Sex Recording</span>
            </div>
            <div className="px-6 py-6">
              <h2 className="text-xl font-bold text-white mb-3">The Sex Recording — Tony Ridley & Dr. Richard McLean</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                A sex recording documenting the sexual relationship between Tony Ridley and Dr. Richard McLean (Barran Dodger) exists as primary evidence of the honeytrap infiltration operation. The recording is preserved on Google Drive and constitutes direct physical evidence that:
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Deliberate and sustained intimate physical access was established by a trained SAS operative against an active NDIS whistleblower",
                  "The relationship was not incidental — it was the primary mechanism of intelligence collection and psychological access",
                  "Tony Ridley, as an NDIA Manager with access to Dr. McLean's formal NDIS record, simultaneously held institutional AND intimate access — an intelligence operation's optimal penetration position",
                  "The subsequent death threats across three states constitute the threat-delivery phase of a compromised honeytrap operation, not a civilian domestic dispute",
                  "The statement 'You will be sacrificed' — delivered by a trained SAS operative who had obtained intimate access under false pretences — is a terminal warning from an operative whose cover was blown",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-amber-400 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={GDRIVE_RECORDING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
                data-testid="link-sex-recording-main"
              >
                <ExternalLink className="h-4 w-4 flex-shrink-0" />
                Access Sex Recording & Full Evidence Documentation (Google Drive)
              </a>
            </div>
          </div>

          {/* YOUTUBE EXAMINATION */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">YouTube Examination — Analysis #27</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{YOUTUBE_ANALYSIS.description}</p>

            <div className="aspect-video rounded-xl overflow-hidden border border-blue-800/40 bg-gray-900 mb-6">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ANALYSIS.videoId}`}
                title={YOUTUBE_ANALYSIS.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold text-blue-300 uppercase tracking-widest mb-3">Key Findings — All Corroborated, Zero Contradictions</h3>
              {YOUTUBE_ANALYSIS.findings.map((f, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <Badge className="bg-green-900/60 text-green-300 border-green-700/50 text-xs flex-shrink-0 mt-0.5">
                      {f.verdict}
                    </Badge>
                    <p className="text-sm text-blue-200 italic leading-relaxed">{f.claim}</p>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-16">{f.evidence}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NAMED ACTORS */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-rose-400" />
              <h2 className="text-2xl font-bold text-white">Named Actors — Full Individual Analysis</h2>
            </div>
            <p className="text-gray-500 text-sm mb-6">Click each actor to expand the full documented analysis of their role, credentials and conjunction with other network members.</p>
            <div className="space-y-4">
              {ACTORS.map((actor, i) => (
                <ActorCard key={actor.id} actor={actor} defaultOpen={i === 0} />
              ))}
            </div>
          </div>

          {/* CONJUNCTION ARCHITECTURE */}
          <div className="bg-gray-900 border border-amber-800/40 rounded-2xl overflow-hidden">
            <div className="bg-amber-950/50 px-6 py-4 border-b border-amber-800/40">
              <div className="flex items-center gap-2 mb-1">
                <Flame className="h-4 w-4 text-amber-400" />
                <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">Structural Analysis</span>
              </div>
              <h2 className="text-xl font-bold text-white">Why the Conjunction Was Necessary — The Complete Architecture</h2>
            </div>
            <div className="px-6 py-6 space-y-5">
              {[
                {
                  layer: "Layer 1 — Intelligence",
                  actors: "Steve Iasonidis (ASIO) + Tony Ridley (SAS/Intimate)",
                  desc: "Two simultaneous intelligence streams: state-infrastructure surveillance (Iasonidis) and intimate physical access (Ridley). Combined, they gave the network a complete picture of Dr. McLean's private environment, communications, psychological state, and physical location at any given time.",
                  color: "text-red-400",
                },
                {
                  layer: "Layer 2 — Executive Direction",
                  actors: "Bill Shorten (Former Acting PM/NDIS Minister)",
                  desc: "Intelligence gathered by Layer 1 required executive authority to be converted into formal institutional actions — NDIS access denials, clinical certification orders, financial restriction instruments, inter-agency coordination. Shorten's ministerial position provided the institutional authority to direct these outcomes.",
                  color: "text-rose-400",
                },
                {
                  layer: "Layer 3 — Coordination",
                  actors: "Sukhi Tear (Financial Coordinator)",
                  desc: "Middle management between Shorten's executive direction and the legal/ground-level operators. Tear coordinated the financial exile architecture, ensuring the asset-control infrastructure was in place before the planned removal was executed.",
                  color: "text-orange-400",
                },
                {
                  layer: "Layer 4 — Legal Incapacitation",
                  actors: "Phillip (Public Guardian)",
                  desc: "The legal legitimisation layer. Phillip's embedded position and Public Guardian role provided the formal legal mechanism to convert the suppression operation into state-sanctioned incapacitation — a process with its own statutory authority and immune from ordinary accountability mechanisms.",
                  color: "text-purple-400",
                },
                {
                  layer: "Layer 5 — Accountability Capture",
                  actors: "Police Ombudsman, 25+ Agencies, Government",
                  desc: "Every formal complaint was absorbed through coordinated circular referral — 25+ agencies using identical template language without coordination justification. The accountability layer ensured no formal complaint produced a result. Police Ombudsman failure confirmed police involvement in the suppression architecture.",
                  color: "text-green-400",
                },
              ].map((layer) => (
                <div key={layer.layer} className="border border-gray-800 rounded-xl p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className={`font-mono text-xs font-bold uppercase tracking-widest ${layer.color}`}>{layer.layer}</span>
                    <span className="text-xs text-gray-500">{layer.actors}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{layer.desc}</p>
                </div>
              ))}
              <div className="bg-amber-950/30 border border-amber-700/40 rounded-xl px-5 py-4 mt-2">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong className="text-amber-300">Structural Conclusion:</strong> No single actor could have sustained 35 years of suppression independently. The conjunction — intelligence, executive, coordination, legal, and accountability layers operating simultaneously — was the operation. Each actor filled the precise gap every other actor left. This architecture is confirmed across 2,304 primary source documents and 27 independent AI analyses with zero contradictions.
                </p>
              </div>
            </div>
          </div>

          {/* LEGAL SIGNIFICANCE */}
          <div className="bg-gray-900 border border-green-800/40 rounded-2xl overflow-hidden">
            <div className="bg-green-950/40 px-6 py-4 border-b border-green-800/40">
              <div className="flex items-center gap-2">
                <Scale className="h-4 w-4 text-green-400" />
                <span className="text-xs font-mono font-bold text-green-300 uppercase tracking-widest">Legal & International Significance</span>
              </div>
            </div>
            <div className="px-6 py-6 space-y-4">
              {[
                {
                  heading: "ICC Article 7 — Formal International Submission Under Review",
                  body: "This case has been formally submitted to the International Criminal Court under Article 7. The submission has been received. Named parties include Bill Shorten, Sukhi Tear, Steve Iasonidis, Tony Ridley and Houd Meraby. Once formally received, an ICC submission cannot be retracted by the parties named in it. The international criminal record is permanent and is currently under review at The Hague.",
                },
                {
                  heading: "UNHCR Submission — Geneva",
                  body: "A parallel submission has been made to the UNHCR in Geneva, documenting the refugee and human rights dimensions of the suppression campaign. Both international bodies — the ICC and UNHCR — have formally received the material. The domestic disclosure that was suppressed by 25+ Australian agencies is now before two international bodies.",
                },
                {
                  heading: "Whistleblower Protection — Sexual Exploitation of a Protected Discloser",
                  body: "Under Australian whistleblower protection law, a person making a protected disclosure is entitled to protection from any detriment connected to that disclosure. A sexual relationship established by a security professional for the purpose of intelligence gathering against an active protected discloser — combined with subsequent death threats across three states — constitutes one of the most serious forms of detriment contemplated by the legislation. The sex recording is primary evidence of this detriment.",
                },
                {
                  heading: "Honeytrap Liability — State Actor Nexus",
                  body: "Ridley's NDIA position and Iasonidis's ASIO connection create a state actor nexus for the honeytrap operation. When a state-connected security professional uses intimate access to gather intelligence against a person exposing state agency fraud, the state's liability for that operation is engaged. This is not a purely private matter. It is a documented state-connected intelligence operation directed at a domestic whistleblower.",
                },
              ].map((item) => (
                <div key={item.heading} className="border border-gray-800 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-green-400 mb-2">{item.heading}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DOWNLOAD CTA */}
          <div className="bg-gradient-to-br from-rose-950 to-gray-900 border border-rose-700/50 rounded-2xl p-8 text-center" data-pdf-hide>
            <AlertTriangle className="h-10 w-10 text-rose-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Download This Report</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
              This full report — including actor analyses, sex recording documentation, YouTube examination findings, and conjunction architecture — is available as a downloadable PDF for sharing with journalists, legal representatives, and international bodies.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                onClick={handleDownloadPDF}
                disabled={pdfLoading}
                className="bg-rose-600 hover:bg-rose-500 text-white font-semibold gap-2"
                data-testid="btn-download-pdf-bottom"
              >
                <Download className="h-4 w-4" />
                {pdfLoading ? "Generating…" : "Download PDF Report"}
              </Button>
              <a href={GDRIVE_RECORDING} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-amber-600 text-amber-300 hover:bg-amber-900/30 gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Sex Recording — Google Drive
                </Button>
              </a>
              <a href="/evidence">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 gap-2">
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
