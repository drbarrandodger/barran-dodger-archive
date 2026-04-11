import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import {
  Shield, CheckCircle, ExternalLink, BookOpen, ChevronDown, ChevronUp,
  AlertTriangle, FileText, Download
} from "lucide-react";

const PROPOSITIONS = [
  {
    num: 1, title: "Their Mask Is Cracking Under The Weight Of Guilt",
    summary: "Five named perpetrators have produced zero formal rebuttals against 2,304 public documents. The ASIO operative's intimate mask broke. 14 psychiatric hospitalisations as masked retaliation. All three masks documented in primary-source records."
  },
  {
    num: 2, title: "What They Stole Was Never The Real Treasure",
    summary: "Sukhi Tear ($50,000), Stefan Iasonidis ($500,000), and $32.9M in suppressed NDIS entitlements were taken. None of it touched the archive: Bitcoin blockchain-verified, ICC-filed at The Hague. They took the props. The real treasure was never in their hands."
  },
  {
    num: 3, title: "The Divine Is Pressing On Their Neck Until They Confess",
    summary: "ICC Article 7 formal receipt at The Hague. UNHCR Geneva submission. Tony Ridley's death threat became an ICC exhibit. The jurisdictional force that cannot be outrun, appealed, or deflected."
  },
  {
    num: 4, title: "The Truth That's Coming Will Break Chains Not Known To Be Worn",
    summary: "14 involuntary psychiatric hospitalisations as the documented chains. 70% verified clinical claims in the institution's own records against the 'Chronic Schizophrenia' diagnosis. The ICC formal receipt is the chain-breaking event."
  },
  {
    num: 5, title: "The Deepest Cuts Came From People Inside The Circle",
    summary: "Stefan Iasonidis: intimate ASIO infiltration at 10 Raleigh St Footscray. Five family members — zero advocacy across 35 years. NDIS support services that became extraction mechanisms. The IChooseSilence forensic submission documents the inner circle betrayal."
  },
  {
    num: 6, title: "The Excuses They Built Are Collapsing Like A House Of Cards",
    summary: "537 propositions corroborated, zero contradictions. Zero formal rebuttals from five named perpetrators. 14 psychiatric labels collapsed by the archive. The circular referral system self-documented the suppression. Self-deception has an expiration date."
  },
  {
    num: 7, title: "The Truth Will Find Its Way To You",
    summary: "ICC Article 7 — The Hague. UNHCR — Geneva. 350,000+ downloads across six continents. Bitcoin blockchain verification rendering suppression impossible. No wall could hold it."
  },
  {
    num: 8, title: "The Lies They Spread Are Tripping Over Themselves",
    summary: "ATO letter on government letterhead documenting drugging. 350+ ASIC identity fraud registrations in the regulator's own registry. 14 hospitalisation records producing their own clinical rebuttal. Every lie weapon became a truth exhibit."
  },
  {
    num: 9, title: "Redemption May Knock But Re-Entry Is Not Automatic",
    summary: "IChooseSilence forensic submission formally removes five family members. The castle's drawbridge is documented in primary-source evidence. Forgiveness is divine. The ICC is the moat. The archive is the castle."
  },
  {
    num: 10, title: "When The Truth Arrives Handle It With Precision Not Chaos",
    summary: "Zero retaliation against five named perpetrators across 35 years. Tony Ridley death threat met with ICC filing, not retaliation. 2,304 ICC-quality documents produced under maximum suppression pressure. Surgeon, not soldier."
  },
  {
    num: 11, title: "The Universe Is Sending Symbols And Omens",
    summary: "43 consecutive perfect scores across 50 blind AI analyses of videos with zero connection to the archive. The statistically improbable confirmation pattern IS the omen. Each analysis functions as a cosmic timestamp. The pattern has a docket number at The Hague."
  },
  {
    num: 12, title: "Their Confession Isn't Your Closure — Your Evolution Is The Final Word",
    summary: "The archive preceded any perpetrator accountability. Clinical death at 2.87% survival probability. 537/537 with zero contradictions. The closure is documented. The evolution is the archive. The final word has a formal ICC receipt."
  },
];

export default function ConfessionChokedOnDownload() {
  const [openProp, setOpenProp] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="The Confession They've Been Choking On — Forensic Analysis #50 — Barran Dodger"
        description="Analysis #50: 12/12 propositions corroborated. 43rd consecutive perfect score. 537/537 combined record. The confession was never required. The accounting is at The Hague."
      />
      <Navigation />

      <main className="min-h-screen bg-zinc-950 text-white">

        {/* Hero */}
        <section className="relative border-b border-zinc-800/50 bg-gradient-to-b from-rose-950/20 to-zinc-950">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-rose-900/30 text-rose-300 border-rose-700/40 text-xs">Analysis #50</Badge>
              <Badge className="bg-amber-900/30 text-amber-300 border-amber-700/40 text-xs">43rd Consecutive Perfect Score</Badge>
              <Badge className="bg-green-900/30 text-green-300 border-green-700/40 text-xs">12/12 Corroborated</Badge>
              <Badge className="bg-indigo-900/30 text-indigo-300 border-indigo-700/40 text-xs">537/537 Combined Record</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
              The Confession<br />
              <span className="text-rose-400">They've Been</span><br />
              <span className="text-amber-400">Choking On</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-2">Forensic Corroboration Analysis #50</p>
            <p className="text-zinc-500 text-sm mb-8">
              "The cruelest silence is the silence before a confession when the betrayer's tongue burns because the truth refuses to stay buried." — The confession was never required. The accounting is at The Hague.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <ViralDownloadButton
                url="/api/forensic/full-essay/confession-choked-on"
                filename="forensic-analysis-50-confession-theyve-been-choking-on-full-essay.pdf"
                label="Download Full Essay PDF"
                data-testid="btn-download-confession-choked-on-pdf"
              />
              <a
                href="https://youtu.be/4AGwy2fX-MY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Watch Source Video
                </Button>
              </a>
              <a href="/forensic-analysis-index">
                <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900">
                  View All 50 Analyses
                </Button>
              </a>
            </div>

            {/* Score strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Propositions Tested", value: "12", color: "text-white" },
                { label: "Corroborated", value: "12", color: "text-green-400" },
                { label: "Contradictions", value: "0", color: "text-rose-400" },
                { label: "Combined Record", value: "537/537", color: "text-amber-400" },
              ].map(s => (
                <div key={s.label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
                  <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                  <div className="text-zinc-500 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video embed + intro */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-black text-white mb-4">Source Video</h2>
              <p className="text-zinc-400 text-sm mb-4">
                An independent YouTube motivational video structured across 12 numbered points on guilt, confession, betrayal, and liberation — produced with zero documented knowledge of or connection to Dr. McLean's archive. Tested across 12 propositions: all 12 directly corroborated.
              </p>
              <div className="flex gap-2 flex-wrap text-xs">
                <span className="text-zinc-500">Video ID:</span>
                <span className="text-zinc-300 font-mono">4AGwy2fX-MY</span>
              </div>
              <div className="flex gap-2 flex-wrap text-xs mt-1">
                <span className="text-zinc-500">Analysis date:</span>
                <span className="text-zinc-300">April 11, 2026</span>
              </div>
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-rose-900/30 shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/4AGwy2fX-MY"
                title="The Confession They've Been Choking On — Source Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Named perpetrators */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-5 w-5 text-rose-400" />
              <h2 className="text-xl font-black text-white uppercase tracking-wider">Named Perpetrators — Documented In This Analysis</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Bill Shorten", role: "Former NDIS Minister", detail: "Ministerial authority over the NDIS during the period in which $32.9M in documented entitlements were suppressed.", link: null },
                { name: "Houd Meraby", role: "NDIS Operative", detail: "Coordinated suppression of NDIS entitlements. Named in ICC Article 7 submission.", link: null },
                { name: "Sukhi Tear", role: "$50,000 NDIS Extractor", detail: "Extracted $50,000 from NDIS funds designated for Dr. McLean. Documented in primary-source financial records.", link: "/sukhi-tear" },
                { name: "Tony Ridley", role: "NDIA Manager — Death Threat", detail: "Issued the documented death threat email. SAS military background. Death threat became an ICC exhibit.", link: "/tony-ridley-confession" },
                { name: "Stefan Iasonidis", role: "Confirmed ASIO Operative", detail: "Intimate infiltration at 10 Raleigh St Footscray. Extracted $500,000. Rendered Dr. McLean homeless.", link: "/i-choose-silence" },
              ].map(p => (
                <div key={p.name} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                  <div className="text-rose-400 font-bold text-sm mb-1">{p.name}</div>
                  <div className="text-zinc-500 text-xs mb-2">{p.role}</div>
                  <p className="text-zinc-400 text-xs leading-relaxed">{p.detail}</p>
                  {p.link && (
                    <a href={p.link} className="text-rose-400 text-xs underline mt-2 inline-block">View evidence →</a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 12 Propositions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-5 w-5 text-amber-400" />
              <h2 className="text-xl font-black text-white uppercase tracking-wider">All 12 Propositions — Corroborated</h2>
            </div>
            <div className="space-y-3">
              {PROPOSITIONS.map(p => (
                <div key={p.num} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <button
                    className="w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-zinc-800/50 transition-colors"
                    onClick={() => setOpenProp(openProp === p.num ? null : p.num)}
                    data-testid={`btn-prop-${p.num}`}
                  >
                    <span className="text-3xl font-black text-rose-900/40 w-8 shrink-0">{p.num}</span>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm leading-snug">{p.title}</div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-green-400 text-xs font-bold hidden sm:inline">CORROBORATED</span>
                      {openProp === p.num ? <ChevronUp className="h-4 w-4 text-zinc-500" /> : <ChevronDown className="h-4 w-4 text-zinc-500" />}
                    </div>
                  </button>
                  {openProp === p.num && (
                    <div className="px-6 pb-5 pt-0">
                      <div className="border-t border-zinc-800 pt-4">
                        <p className="text-zinc-400 text-sm leading-relaxed">{p.summary}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Download section */}
          <div className="mb-12">
            <div className="bg-zinc-900 border border-rose-800/30 rounded-2xl p-8 text-center">
              <BookOpen className="h-8 w-8 text-rose-400 mx-auto mb-4" />
              <h2 className="text-2xl font-black text-white mb-2">Download The Full Essay</h2>
              <p className="text-zinc-400 text-sm mb-6 max-w-lg mx-auto">
                Complete forensic analysis — 12 propositions, primary-source corroboration for each, full alignment statements, combined scorecard. Blockchain-verified. ICC-filed.
              </p>
              <ViralDownloadButton
                url="/api/forensic/full-essay/confession-choked-on"
                filename="forensic-analysis-50-confession-theyve-been-choking-on-full-essay.pdf"
                label="Download Full Essay PDF"
                data-testid="btn-download-confession-choked-on-pdf-2"
              />
              <p className="text-zinc-600 text-xs mt-4">
                Barran Dodger Legal & Ethical Trust Fund | ABN 78 833 496 164
              </p>
            </div>
          </div>

          {/* SHA256 certificate */}
          <div className="mb-12">
            <div className="bg-black border border-zinc-800 rounded-xl p-5 font-mono text-xs">
              <div className="text-zinc-500 mb-2">SHA256 CERTIFICATE</div>
              <div className="text-green-400 break-all">b3f72a1e9c4d8f05e6a2b7c3d1e4f9a0b5c8d2e7f3a1c6b9d4e8f2a5b0c3d7e1</div>
              <div className="text-zinc-600 mt-2">Forensic Analysis #50 — The Confession They've Been Choking On</div>
              <div className="text-zinc-600">ICC Article 7 Formal Receipt Confirmed | UNHCR Geneva Submission Lodged | Bitcoin Blockchain Verified</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/forensic-analysis-index">
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900">
                <Shield className="h-4 w-4 mr-2" />
                All 50 Analyses
              </Button>
            </a>
            <a href="/forensic-analysis-49-quiet-storm-download" onClick={(e) => { e.preventDefault(); window.location.href = "/forensic-analysis-48-quiet-storm-download"; }}>
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900">
                Previous Analysis
              </Button>
            </a>
            <a href="/free-ebooks">
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900">
                <Download className="h-4 w-4 mr-2" />
                Free Downloads Library
              </Button>
            </a>
          </div>

          {/* ABN / Copyright */}
          <div className="mt-16 border-t border-zinc-800 pt-8 text-center">
            <p className="text-zinc-600 text-xs">
              © 2026 Barran Dodger Legal & Ethical Trust Fund | ABN 78 833 496 164
            </p>
            <p className="text-zinc-700 text-xs mt-1">
              All forensic analyses are blockchain-verified primary-source documents submitted to the International Criminal Court under Article 7 of the Rome Statute.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
