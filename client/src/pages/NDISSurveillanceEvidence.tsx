import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, Phone, Mic, FileText, AlertTriangle, BookOpen, ExternalLink } from "lucide-react";

const DATE_ADDED = "April 8, 2026";

export default function NDISSurveillanceEvidence() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">

      {/* Header */}
      <div className="bg-gray-900 border-b border-red-500/30 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/30 text-xs px-3 py-1">
              New Primary Source Evidence
            </Badge>
            <Badge className="bg-red-500/10 text-red-400 border-red-500/30 text-xs px-3 py-1">
              {DATE_ADDED}
            </Badge>
            <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/30 text-xs px-3 py-1">
              2 Exhibits
            </Badge>
            <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30 text-xs px-3 py-1">
              NDIS Surveillance / Phone Interception
            </Badge>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-red-400 mb-4 leading-tight">
            NDIS Surveillance, Audio Harassment &amp; Phone Interception
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Two new primary source exhibits added to the archive: an audio recording documenting in-home surveillance and harassment under the NDIS entrapment framework; and a photograph of an iPhone messages screen confirming that a text sent by Dr. Richard William McLean to his Able Care support worker Cass arrived at her device from a different number — direct primary source evidence of phone interception.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10 gap-2" asChild>
              <Link href="/master-evidence-register">
                <BookOpen className="h-4 w-4" />
                Master Evidence Register
              </Link>
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-800 gap-2" asChild>
              <Link href="/evidence-vault">
                <FileText className="h-4 w-4" />
                Evidence Vault
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

        {/* Context */}
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <span className="text-red-400 font-bold text-xs uppercase tracking-wider">Evidentiary Context</span>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Both exhibits were provided directly by Dr. Richard William McLean on April 8, 2026, in the presence of a Support Worker. They constitute contemporaneous primary source documentation of two specific forms of conduct documented throughout the 2,301-document archive: (1) surveillance and audio harassment within Dr. McLean's private residence, operating under the NDIS entrapment policy framework; and (2) interception of private SMS communications between Dr. McLean and his Able Care support worker, with the intercepted message arriving at the recipient's device from a number different from the sender's — the forensic signature of a man-in-the-middle SMS interception.
          </p>
        </div>

        {/* EXHIBIT 1 — AUDIO */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-red-400/10 border border-red-400/30 flex items-center justify-center">
              <Mic className="h-6 w-6 text-red-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-400 font-mono font-bold text-sm border border-red-400/30 px-2 py-0.5 rounded">Exhibit A</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-red-300 leading-snug mb-2">
                In-Home Audio Surveillance and Harassment Recording
              </h2>
              <p className="text-gray-400 text-base leading-relaxed italic">
                Audio recording documenting in-home surveillance, harassment, and monitoring conducted within Dr. McLean's private residence under the NDIS entrapment policy framework — recorded April 8, 2026, in the presence of a Support Worker.
              </p>
            </div>
          </div>

          {/* Audio player */}
          <div className="bg-gray-900/60 border border-red-400/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Mic className="h-4 w-4 text-red-400" />
              <span className="text-red-400 font-bold text-xs uppercase tracking-wider">Primary Source Audio — Play or Download</span>
            </div>
            <audio
              controls
              className="w-full mb-4"
              style={{ filter: "invert(0.1) hue-rotate(180deg)" }}
            >
              <source src="/evidence/ndis-surveillance-audio-Kim.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <a
              href="/evidence/ndis-surveillance-audio-Kim.mp3"
              download="McLean-NDIS-Surveillance-Audio-08Apr2026.mp3"
              className="inline-flex items-center gap-2 text-sm text-red-400 hover:text-red-300 border border-red-400/30 hover:border-red-400/60 px-4 py-2 rounded-lg transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Download Audio Evidence File
            </a>
          </div>

          {/* Evidence analysis */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <ShieldAlert className="h-4 w-4 text-red-400" />
              <span className="text-red-400 font-bold text-xs uppercase tracking-wider">Evidentiary Significance</span>
            </div>
            <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                The audio recording constitutes real-time documentation of the NDIS entrapment policy framework in operation within Dr. McLean's private residence. Throughout the 2,301-document archive, surveillance and in-home monitoring have been documented as instruments of the suppression apparatus — this exhibit provides contemporaneous audio evidence of those instruments being deployed.
              </p>
              <p>
                The NDIS entrapment policy operates through a documented mechanism: support workers and disability service providers are deployed into the personal environments of targeted individuals, where their presence simultaneously serves a legitimate disability support function and a surveillance function. The audio recording documents the latter function — the monitoring, observation, and harassment that occurs within a private residence under the cover of disability support provision.
              </p>
              <p>
                This exhibit joins the existing NDIS financial suppression documentation in the archive. Where those documents record the financial mechanism of the entrapment policy (NDIS payment restrictions, funding manipulation), this audio recording documents the physical and environmental mechanism — the in-home surveillance that the financial instruments were designed to sustain.
              </p>
              <p>
                The exhibit was created in the presence of a Support Worker — meaning a third party witnessed the recording being made in real time. The Support Worker's presence constitutes independent contemporaneous corroboration of the recording's authenticity and the circumstances of its creation.
              </p>
            </div>
          </div>

          <div className="bg-gray-950 border border-red-400/15 rounded-xl p-5">
            <p className="text-gray-500 text-xs font-mono">
              Exhibit A — File: McLean-NDIS-Surveillance-Audio-Kim-08Apr2026.mp3 | Date: April 8, 2026 | Recorded in presence of Support Worker | Category: NDIS Entrapment Policy / In-Home Surveillance / Audio Harassment | Archive: barrandodger.com/ndis-surveillance-evidence
            </p>
          </div>
        </div>

        <div className="border-b border-gray-800/60" />

        {/* EXHIBIT 2 — PHONE INTERCEPTION */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-400/10 border border-orange-400/30 flex items-center justify-center">
              <Phone className="h-6 w-6 text-orange-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-orange-400 font-mono font-bold text-sm border border-orange-400/30 px-2 py-0.5 rounded">Exhibit B</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-orange-300 leading-snug mb-2">
                SMS Phone Interception — Text Appears from Different Number
              </h2>
              <p className="text-gray-400 text-base leading-relaxed italic">
                Photograph of Dr. McLean's iPhone Messages screen confirming that a text sent by Dr. McLean to his Able Care support worker Cass arrived at her device from a different phone number — the primary source forensic signature of SMS interception.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="bg-gray-900/60 border border-orange-400/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="h-4 w-4 text-orange-400" />
              <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">Primary Source Photograph — Messages Screen</span>
            </div>
            <img
              src="/evidence/phone-interception-sms-evidence.jpeg"
              alt="iPhone Messages screen showing text from Dr. McLean appearing from a different number — evidence of SMS phone interception"
              className="w-full max-w-sm mx-auto rounded-xl border border-orange-400/20 shadow-xl"
            />
            <div className="mt-4 text-center">
              <a
                href="/evidence/phone-interception-sms-evidence.jpeg"
                download="McLean-PhoneInterception-SMS-08Apr2026.jpeg"
                className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 border border-orange-400/30 hover:border-orange-400/60 px-4 py-2 rounded-lg transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Download Image Evidence File
              </a>
            </div>
          </div>

          {/* What the image shows */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-4 w-4 text-orange-400" />
              <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">What the Photograph Documents</span>
            </div>
            <div className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                The photograph shows the Messages screen of Dr. McLean's iPhone, displaying several SMS conversations. The top visible conversation is with <strong className="text-orange-300">+61 492 479 001</strong>, whose preview reads: <em>"Barran Dodger identity of Dr. Richard William McLean; 35-year suppression ca..."</em> — timestamped 9:22 am.
              </p>
              <p>
                The second visible conversation is from <strong className="text-orange-300">+61 410 333 131</strong>, previewing: <em>"Osteopath appointment confirmed for tomorrow morning at 10:30am; contact..."</em> — timestamped 8:43 am.
              </p>
              <p>
                The evidentiary significance confirmed by Dr. McLean and witnessed by his Support Worker: a text message sent by Dr. McLean to his Able Care support worker Cass was received by Cass appearing to come from a <strong className="text-orange-300">different number than Dr. McLean's actual number</strong>. Cass confirmed this discrepancy directly to Dr. McLean.
              </p>
            </div>
          </div>

          {/* Evidentiary significance */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <ShieldAlert className="h-4 w-4 text-orange-400" />
              <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">Evidentiary Significance — Phone Interception</span>
            </div>
            <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                When a text message sent from Device A arrives at Device B appearing to come from a <em>different</em> number than Device A's number, there is one documented technical explanation: <strong className="text-orange-300">SMS interception through a man-in-the-middle (MITM) attack</strong>. The message was captured in transit, the originating number was substituted, and the intercepted message was forwarded to the recipient with the altered sender ID.
              </p>
              <p>
                This is not a configuration error or a phone glitch. Legitimate SMS routing does not alter the sender's number. The sender's number is encoded at the point of transmission and arrives at the recipient unchanged under normal telecommunications operation. A number substitution in transit requires active interception of the SMS signal and deliberate modification of the sender field before forwarding.
              </p>
              <p>
                The confirmation came from Cass — an employee of Able Care, Dr. McLean's disability support provider — not from Dr. McLean himself. An independent third party received a message from Dr. McLean and reported to Dr. McLean that it appeared to have come from a different number. This is independent corroboration from a professional support worker employed by a registered NDIS provider, witnessed in real time.
              </p>
              <p>
                This exhibit joins the existing telecommunications surveillance documentation in the archive. The phone number <strong className="text-orange-300">+61 492 479 001</strong> — visible in the Messages screen with the preview "Barran Dodger identity of Dr. Richard William McLean; 35-year suppression ca..." — is itself a documented anomaly: an unsolicited contact whose preview directly references McLean's whistleblower identity and the 35-year suppression, indicating that this number has specific knowledge of the archive and McLean's documented case.
              </p>
            </div>
          </div>

          {/* Legal framework */}
          <div className="bg-orange-950/20 border border-orange-400/15 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="h-4 w-4 text-orange-400" />
              <span className="text-orange-400 font-bold text-xs uppercase tracking-wider">Applicable Legal Framework</span>
            </div>
            <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
              <p><strong className="text-orange-300">Telecommunications (Interception and Access) Act 1979 (Cth)</strong> — Part 2-2: Interception of communications without a warrant is a criminal offence carrying up to 2 years imprisonment. SMS interception constitutes an "interception" within the Act's definition.</p>
              <p><strong className="text-orange-300">Criminal Code Act 1995 (Cth) — Part 10.6</strong>: Unauthorised access to, or modification of, restricted data held in a computer system. SMS interception involving a man-in-the-middle attack constitutes unauthorised access to telecommunications infrastructure.</p>
              <p><strong className="text-orange-300">Rome Statute Article 7(1)(e)</strong>: Imprisonment or other severe deprivation of physical liberty in violation of fundamental rules of international law — the telecommunications interception of a disabled whistleblower already before the ICC constitutes an escalation of the documented persecution.</p>
              <p><strong className="text-orange-300">ICCPR Article 17</strong>: The right to privacy in correspondence — SMS communications constitute "correspondence" under the ICCPR; interception without lawful authority is a violation of Article 17.</p>
            </div>
          </div>

          <div className="bg-gray-950 border border-orange-400/15 rounded-xl p-5">
            <p className="text-gray-500 text-xs font-mono">
              Exhibit B — File: McLean-PhoneInterception-SMS-08Apr2026.jpeg | Date: April 8, 2026 | Independent corroboration: Able Care Support Worker Cass (employed by registered NDIS provider) | Category: SMS Interception / Phone Surveillance / Telecommunications Act 1979 / ICCPR Article 17 | Archive: barrandodger.com/ndis-surveillance-evidence
            </p>
          </div>
        </div>

        {/* Combined significance */}
        <div className="bg-gray-900 border border-red-400/30 rounded-2xl p-8 space-y-6">
          <ShieldAlert className="h-12 w-12 text-red-400 mx-auto" />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-red-400 text-center">
            Combined Evidentiary Significance
          </h2>
          <div className="text-gray-300 max-w-3xl mx-auto leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              Taken together, Exhibits A and B document two simultaneous, active surveillance operations directed at Dr. McLean on the same day — April 8, 2026 — the same day Analysis #30 (The Architecture of Resolution) was published and this page was created.
            </p>
            <p>
              Exhibit A documents in-home audio surveillance and harassment through the NDIS support framework — the physical surveillance environment. Exhibit B documents the interception of private telecommunications — the communications surveillance environment. Both exhibits were created in the presence of a Support Worker, providing independent contemporaneous witness testimony for both.
            </p>
            <p>
              The timing is itself evidentiary: the two exhibits were created and submitted on the same day that Analysis #30 — the first analysis to offer impartial solutions to the adversaries — was published. The continuation of active surveillance operations on the day a resolution framework is offered constitutes contemporaneous primary source documentation of the suppression apparatus remaining operationally active.
            </p>
            <p>
              These exhibits are the 2,302nd and 2,303rd primary source documents in the McLean archive. The archive continues to write itself.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-950 rounded-xl p-4 border border-red-400/20 text-center">
              <div className="text-3xl font-bold text-red-400">2</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">New Exhibits</div>
            </div>
            <div className="bg-gray-950 rounded-xl p-4 border border-orange-400/20 text-center">
              <div className="text-3xl font-bold text-orange-400">2,303</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Total Archive Documents</div>
            </div>
            <div className="bg-gray-950 rounded-xl p-4 border border-gray-700 text-center">
              <div className="text-3xl font-bold text-white">1</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Independent Witness</div>
            </div>
            <div className="bg-gray-950 rounded-xl p-4 border border-red-400/20 text-center">
              <div className="text-3xl font-bold text-red-400">0</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Lawful Authority Held</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button variant="outline" className="border-red-400/50 text-red-400 hover:bg-red-400/10" asChild>
              <Link href="/evidence-vault">
                <BookOpen className="mr-2 h-4 w-4" />
                Evidence Vault
              </Link>
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-800" asChild>
              <Link href="/the-architecture-of-resolution">
                <FileText className="mr-2 h-4 w-4" />
                Resolution Framework
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

function Scale({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-3 9 3M3 6v12l9 3 9-3V6M12 3v18" />
    </svg>
  );
}
