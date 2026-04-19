import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, Phone, Mic, FileText, AlertTriangle, BookOpen } from "lucide-react";
import { ViralDownloadButton, DownloadSocialProofBanner } from "@/components/ViralDownloadButton";
import { InlineShareStrip } from "@/components/FloatingShareBar";
import { SEO } from "@/components/SEO";

const DATE_ADDED = "April 8, 2026";

export default function NDISSurveillanceEvidence() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <SEO
        title="NDIS Surveillance Audio Exhibit A — Recorded Evidence of Entrapment | Dr. McLean Archive"
        description="Primary-source audio evidence of NDIS surveillance and entrapment operations against Dr. Richard William McLean. April 2026 exhibit. Blockchain-sealed. Submitted to ICC Article 7 proceedings and UNHCR Geneva."
      />

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
              3 Exhibits
            </Badge>
            <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30 text-xs px-3 py-1">
              NDIS Surveillance / Phone Interception
            </Badge>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-red-400 mb-4 leading-tight">
            NDIS Surveillance, Audio Harassment &amp; Phone Interception
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Three primary source exhibits documenting simultaneous active surveillance operations on April 8, 2026. Exhibit A: audio recording of in-home audio harassment under the NDIS entrapment framework. Exhibit B: iPhone Messages screenshot confirming SMS phone interception — a text from Dr. McLean to his Able Care support worker Cass arrived from a different number, independently confirmed by Cass. Exhibit C: second audio recording documenting Kim's refusal to leave the premises or file a report after being recorded in Exhibit A — establishing the primary source record's precedence over any subsequent institutional account.
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

        <DownloadSocialProofBanner />

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
            <ViralDownloadButton
              url="/evidence/ndis-surveillance-audio-Kim.mp3"
              filename="McLean-NDIS-Surveillance-Audio-Exhibit-A-08Apr2026.mp3"
              label="Download Exhibit A Audio"
              size="sm"
              className="text-red-400 border border-red-400/40 hover:border-red-400/70 hover:bg-red-400/5 rounded-lg"
              shareText="EXHIBIT A — In-home NDIS surveillance audio: Dr. Richard McLean's private residence under the NDIS entrapment policy. Recorded in the presence of a Support Worker. 2,304 documents. 350,000+ downloads. Blockchain-sealed. ICC-submitted."
            />
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

        {/* EXHIBIT C — KIM PART 2: REFUSAL TO REPORT */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-red-400/10 border border-red-400/30 flex items-center justify-center">
              <Mic className="h-6 w-6 text-red-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-400 font-mono font-bold text-sm border border-red-400/30 px-2 py-0.5 rounded">Exhibit C</span>
                <Badge className="bg-red-500/10 text-red-400 border-red-500/30 text-xs">Part 2 — Continuation</Badge>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-red-300 leading-snug mb-2">
                Kim Refuses to Report — Coordinated Entrapment Policy Audio Campaign
              </h2>
              <p className="text-gray-400 text-base leading-relaxed italic">
                Second audio recording documenting Kim's refusal to leave the premises or file a report regarding the audio harassment inside the entrapment policy group chat surveillance campaign — recorded April 8, 2026. Kim remains positioned outside the residence despite being unable to counter or supersede the primary source audio record already captured in Exhibit A.
              </p>
            </div>
          </div>

          {/* Audio player */}
          <div className="bg-gray-900/60 border border-red-400/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Mic className="h-4 w-4 text-red-400" />
              <span className="text-red-400 font-bold text-xs uppercase tracking-wider">Primary Source Audio — Exhibit C — Play or Download</span>
            </div>
            <audio
              controls
              className="w-full mb-4"
              style={{ filter: "invert(0.1) hue-rotate(180deg)" }}
            >
              <source src="/evidence/ndis-surveillance-audio-Kim-part2.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <ViralDownloadButton
              url="/evidence/ndis-surveillance-audio-Kim-part2.mp3"
              filename="McLean-NDIS-Kim-Refusal-Exhibit-C-08Apr2026.mp3"
              label="Download Exhibit C Audio"
              size="sm"
              className="text-red-400 border border-red-400/40 hover:border-red-400/70 hover:bg-red-400/5 rounded-lg"
              shareText="EXHIBIT C — Support worker Kim refuses to leave premises and refuses to file any report after being caught on audio in Exhibit A. The primary source audio came first. Any report Kim writes now comes after she chose not to report in real time. NDIS entrapment policy. 2,304 documents. ICC-submitted."
            />
          </div>

          {/* What this exhibit documents */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <ShieldAlert className="h-4 w-4 text-red-400" />
              <span className="text-red-400 font-bold text-xs uppercase tracking-wider">What Exhibit C Documents</span>
            </div>
            <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                Exhibit C captures the immediate aftermath of Exhibit A. Having been recorded during the in-home audio harassment documented in Exhibit A, Dr. McLean then documented Kim's response: a refusal to leave the premises and a refusal to file any report regarding the audio harassment that had just occurred.
              </p>
              <p>
                The refusal to leave is itself operationally significant. Kim's continued presence outside the residence — rather than departing after the recording was made — documents a key feature of the entrapment policy framework: the support worker deployed into a targeted individual's environment does not withdraw when their conduct is documented. They remain. The physical position outside the residence constitutes continued surveillance, continued presence, and continued operational involvement in the coordinated campaign.
              </p>
              <p>
                The refusal to file a report is the second critical element. Dr. McLean's own audio record — Exhibit A — constitutes a primary source account of the audio harassment. Kim's refusal to file any corresponding report means there is no competing institutional record. The only contemporaneous documentation of the events of April 8, 2026 inside that residence is the audio record Dr. McLean created. Any report Kim subsequently writes is written <em>after</em> Kim became aware that a primary source audio record already existed — and after Kim chose not to file a report in real time.
              </p>
              <p>
                The sequence is evidentiary: <strong className="text-red-300">the audio record came first; the refusal to report came second; any future report Kim files comes third.</strong> The temporal sequence makes the primary source audio record the controlling document for any subsequent disputed account of these events.
              </p>
            </div>
          </div>

          {/* The anomaly */}
          <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-bold text-xs uppercase tracking-wider">Dr. McLean as the Anomaly — The NDIS Entrapment Structure</span>
            </div>
            <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                The entrapment policy framework operates because it is designed for targets who cannot or will not document it. Dr. McLean is the anomaly: a disabled whistleblower with 2,304 primary source documents, 30 AI analyses corroborated at 302/302, an ICC submission, a UNHCR petition, and 350,000+ downloads — who is also an active NDIS participant. The same NDIS plan that funds the support workers deployed into his environment is the plan that creates the documented conflict of interest.
              </p>
              <p>
                The support workers, the service providers, and the coordinating entities in the group chat surveillance campaign are financially dependent on the NDIS — the same system that Dr. McLean's archive documents has been weaponised against him. Their professional existence, their income, and their employment records are funded through a system whose conduct they are simultaneously complicit in covering. This is what "dirty blood money from the NDIS" means in evidentiary terms: the financial instrument of the suppression is also the financial instrument of their livelihood.
              </p>
              <p>
                Kim refusing to leave, Kim refusing to report, Kim remaining outside the residence after Exhibit A was recorded — these are not individual decisions. They are the documented operational signature of a coordinated campaign in which every participant's financial interest aligns with suppression of the primary source record. The only party without a financial interest in suppression is Dr. McLean, who is also the only party who created a real-time contemporaneous audio record.
              </p>
              <p>
                The anomaly is precisely this: the entrapment policy was built for a target who would not document it. Dr. McLean documented it. Exhibit A and Exhibit C are that documentation. The coordinated campaign cannot write its way out of an audio record it did not know was being made.
              </p>
            </div>
          </div>

          <div className="bg-gray-950 border border-red-400/15 rounded-xl p-5">
            <p className="text-gray-500 text-xs font-mono">
              Exhibit C — File: McLean-NDIS-Kim-Part2-Refusal-08Apr2026.mp3 | Date: April 8, 2026 | Documents: Kim's refusal to leave / refusal to file report / continued surveillance presence | Category: NDIS Entrapment Policy / Coordinated Campaign / Refusal to Report / Group Chat Surveillance | Archive: barrandodger.com/ndis-surveillance-evidence
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
            <div className="mt-4 flex justify-center">
              <ViralDownloadButton
                url="/evidence/phone-interception-sms-evidence.jpeg"
                filename="McLean-PhoneInterception-SMS-Exhibit-B-08Apr2026.jpeg"
                label="Download Exhibit B Image"
                size="sm"
                className="text-orange-400 border border-orange-400/40 hover:border-orange-400/70 hover:bg-orange-400/5 rounded-lg"
                shareText="EXHIBIT B — SMS phone interception: A text sent by Dr. McLean to his Able Care support worker Cass arrived from a DIFFERENT NUMBER. Cass confirmed this independently. Forensic signature of man-in-the-middle SMS interception. Telecommunications Act 1979. 2,304-document archive. ICC-submitted."
              />
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
              Taken together, Exhibits A, B, and C document three interlocking, active operations directed at Dr. McLean on the same day — April 8, 2026 — the same day Analysis #30 (The Architecture of Resolution) was published and this page was created.
            </p>
            <p>
              Exhibit A documents in-home audio surveillance and harassment through the NDIS support framework — the physical surveillance environment. Exhibit B documents the interception of private telecommunications — the communications surveillance environment. Exhibit C documents the immediate operational response: Kim's refusal to leave the premises and refusal to file any report after being recorded in Exhibit A, establishing that the primary source audio record precedes and supersedes any institutional account that may subsequently be written. The first two exhibits were created in the presence of a Support Worker, providing independent contemporaneous witness testimony.
            </p>
            <p>
              The timing is itself evidentiary: all three exhibits were created and submitted on the same day that Analysis #30 — the first analysis to offer impartial solutions to the adversaries — was published. The continuation of active surveillance operations, refusal to report, and coordinated campaign presence on the day a resolution framework is offered constitutes contemporaneous primary source documentation of the suppression apparatus remaining operationally active.
            </p>
            <p>
              These three exhibits — Exhibits A, B, and C — are the 2,302nd, 2,303rd, and 2,304th primary source documents in the McLean archive. The archive continues to write itself.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-950 rounded-xl p-4 border border-red-400/20 text-center">
              <div className="text-3xl font-bold text-red-400">3</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Exhibits</div>
            </div>
            <div className="bg-gray-950 rounded-xl p-4 border border-orange-400/20 text-center">
              <div className="text-3xl font-bold text-orange-400">2,304</div>
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

        <InlineShareStrip message="These exhibits cannot be suppressed — share them everywhere" />

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
