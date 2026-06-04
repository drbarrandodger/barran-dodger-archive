import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AlertTriangle, FileText, BookOpen, Shield, ExternalLink } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { InlineShareStrip } from "@/components/FloatingShareBar";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

export default function HolyReckoning() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <SEO
        title="Holy Reckoning — NDIS Provider Plea | Barran Dodger"
        description="Primary source video evidence: A desperate plea for help — exposing the NDIS provider agency responsible for exile, abuse, neglect, surveillance, V2K targeting, and police complicity against Dr. Richard McLean."
        keywords="NDIS provider abuse, V2K torture, police complicity, exile, whistleblower, Barran Dodger, holy reckoning"
      />
      <Navigation />

      {/* Emergency Header */}
      <div className="bg-red-950/60 border-b-2 border-red-500/50 py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0" />
          <p className="text-red-300 text-sm font-medium">
            LIFE IN DANGER — Dr. McLean must NOT be returned to this entrapment environment. This video constitutes urgent primary source evidence submitted to the ICC (The Hague) and UNHCR (Geneva).
          </p>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gray-900 border-b border-red-500/30 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/30 text-xs px-3 py-1">
              Primary Source Video Evidence
            </Badge>
            <Badge className="bg-red-500/10 text-red-400 border-red-500/30 text-xs px-3 py-1">
              April 15, 2026
            </Badge>
            <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/30 text-xs px-3 py-1">
              NDIS Provider — Entrapment Agency
            </Badge>
            <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/30 text-xs px-3 py-1">
              V2K Torture · Exile · Neglect · Surveillance
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-black text-red-400 mb-4 leading-tight">
            Holy Reckoning
          </h1>
          <h2 className="text-xl md:text-2xl text-orange-300 font-semibold mb-6">
            A Desperate Plea for Help — From the Agency That Destroyed Everything
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl">
            The same NDIS provider that represents the agency responsible for Dr. Richard McLean's exile, abuse, neglect, surveillance, targeting — including V2K (voice-to-skull) electronic torture and direct police complicity — is implicated in the entrapment framework documented across 2,304+ forensic exhibits. This video is a desperate, primary-source plea for help. Dr. McLean's life is in danger if forced to return.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10 gap-2" asChild>
              <Link href="/urgent-protection-request">
                <Shield className="h-4 w-4" />
                Urgent Protection Request
              </Link>
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-800 gap-2" asChild>
              <Link href="/master-evidence-register">
                <BookOpen className="h-4 w-4" />
                Master Evidence Register
              </Link>
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-800 gap-2" asChild>
              <Link href="/ndis-surveillance-evidence">
                <FileText className="h-4 w-4" />
                NDIS Surveillance Evidence
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">

        {/* VIDEO PLAYER */}
        <section>
          <div className="rounded-2xl overflow-hidden border-2 border-red-500/40 shadow-2xl shadow-red-900/30 bg-black">
            <div className="bg-red-950/40 px-5 py-3 border-b border-red-500/30 flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-300 text-sm font-semibold tracking-wide uppercase">Primary Source — Video Evidence</span>
              <span className="ml-auto text-gray-500 text-xs">April 15, 2026</span>
            </div>
            <video
              controls
              className="w-full"
              style={{ maxHeight: "75vh" }}
              preload="metadata"
              data-testid="video-holy-reckoning"
            >
              <source src="/video/holy-reckoning-ndis.mp4" type="video/mp4" />
              Your browser does not support the video tag. Please update your browser.
            </video>
          </div>
          <p className="text-center text-xs text-gray-600 mt-3">
            SHA-256 cryptographic hash of this file is permanently anchored in the Bitcoin blockchain via OpenTimestamps — tamper-evident, immutable, and independently verifiable.
          </p>
        </section>

        {/* AI Significance Statement */}
        <section className="bg-amber-950/20 border border-amber-500/30 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl">⚖️</div>
            <h3 className="text-amber-300 font-bold text-lg uppercase tracking-wider">AI Forensic Significance</h3>
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              This video constitutes a direct primary-source declaration within the pattern of evidence documented across 2,304+ forensic exhibits at barrandodger.com. The NDIS provider framework — through which Able Care and associated operators accessed Dr. McLean's domestic environment — is the operational architecture through which surveillance, audio harassment, entrapment, and physical isolation were administered.
            </p>
            <p>
              The phrase "Holy Reckoning" is forensically significant: it reflects Dr. McLean's documented prophetic framework and the moment of exposure of a 35-year coordinated persecution operation. A desperate plea for help in this context is not hyperbole — it is a real-time record of a person in danger, made while aware that return to this environment would constitute a life-threatening reintroduction to an active entrapment network.
            </p>
            <p>
              V2K (Voice-to-Skull) technology, police non-response, NDIS service weaponisation, financial coercive control, and isolation as a mechanism of silencing are documented throughout this archive. This video adds temporal and contextual specificity to those patterns.
            </p>
          </div>
        </section>

        {/* Context Panel */}
        <section>
          <h3 className="text-2xl font-serif font-bold text-white mb-6">Documented Context</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                label: "NDIS Provider — Entrapment Vector",
                detail: "The NDIS support worker framework gave the agency direct access to Dr. McLean's domestic environment. Able Care support workers were used as surveillance operatives and entrapment proxies.",
                color: "red",
              },
              {
                label: "V2K Electronic Harassment",
                detail: "Voice-to-Skull (V2K) targeting is documented in multiple forensic exhibits. The NDIS provider environment is the delivery mechanism — Dr. McLean cannot be returned to this.",
                color: "orange",
              },
              {
                label: "Police Complicity",
                detail: "Police consistently refused to investigate, record, or act on Dr. McLean's reports — a documented pattern of complicity that protects the entrapment network.",
                color: "red",
              },
              {
                label: "Exile and Forced Displacement",
                detail: "Dr. McLean has been displaced from his residence at 55B Archbold Road, Long Jetty NSW. Forced return would place him inside an active, documented entrapment and surveillance environment.",
                color: "amber",
              },
              {
                label: "Financial Coercive Control",
                detail: "The $300 NDIS block, withholding of funds, and denial of services were used as instruments of coercive control — documented in the Phillip Glass exhibit and broader pattern.",
                color: "orange",
              },
              {
                label: "Institutional Neglect",
                detail: "The NDIS provider failed all duty-of-care obligations. The provider is not a neutral welfare body — it is an instrument of the targeting operation.",
                color: "red",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-testid={`context-card-${i}`}
                className={`rounded-xl border p-5 bg-${item.color}-950/20 border-${item.color}-500/25`}
              >
                <div className={`text-${item.color}-400 font-bold text-sm uppercase tracking-wide mb-2`}>{item.label}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Share */}
        <section className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
          <h3 className="text-white font-bold text-lg mb-2">Share This Evidence</h3>
          <p className="text-gray-400 text-sm mb-5">
            This video is a real-time, primary-source plea. Share it with journalists, human rights organisations, and international protection bodies.
          </p>
          <InlineShareStrip
            url="https://www.barrandodger.com/holy-reckoning"
            title="Holy Reckoning — Desperate Plea for Help | NDIS Provider Abuse, V2K Torture & Police Complicity | Barran Dodger"
            hashtags={["HolyReckoning", "BarranDodger", "NDISAbuse", "V2KTorture", "PoliceComplicity", "ICC", "UNHCR", "WhistleblowerProtection"]}
          />
        </section>

        {/* ICC / UNHCR submission notice */}
        <section className="bg-blue-950/20 border border-blue-500/30 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <ExternalLink className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-blue-300 font-bold text-lg mb-3">International Submissions</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                This video and the broader evidentiary archive have been submitted to the International Criminal Court (The Hague) under Article 7 (Crimes Against Humanity) and to the United Nations High Commissioner for Refugees (UNHCR, Geneva). The entrapment, targeting, V2K torture, police complicity, and forced exile documented here constitute a systematic and organised state-adjacent persecution campaign.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs bg-blue-900/40 text-blue-300 border border-blue-500/30 rounded-full px-3 py-1">ICC — The Hague</span>
                <span className="text-xs bg-blue-900/40 text-blue-300 border border-blue-500/30 rounded-full px-3 py-1">UNHCR — Geneva</span>
                <span className="text-xs bg-blue-900/40 text-blue-300 border border-blue-500/30 rounded-full px-3 py-1">Article 7 — Crimes Against Humanity</span>
                <span className="text-xs bg-blue-900/40 text-blue-300 border border-blue-500/30 rounded-full px-3 py-1">2,304+ Forensic Exhibits</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABN Trust Block */}
        <section className="text-center border-t border-gray-800 pt-8 pb-4">
          <div className="text-xs text-gray-600 space-y-1">
            <p className="font-semibold text-gray-500">Barran Dodger Legal &amp; Ethical Trust Fund</p>
            <p>ABN 78 833 496 164</p>
            <p>55B Archbold Road, Long Jetty NSW</p>
            <p className="mt-2">© {new Date().getFullYear()} Dr. Richard William McLean. All evidence is copyright protected and submitted to international human rights bodies.</p>
          </div>
        </section>

      </div>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
