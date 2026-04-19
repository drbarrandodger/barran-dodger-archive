import { useState } from "react";
import { Shield, ExternalLink, Download, Award, AlertTriangle, ChevronDown, ChevronUp, Gavel, FileText, Eye, Play, Mic, Tv, BookOpen, Users, Globe, Link } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import tonyRidleyProfile from "@assets/IMG_4709_1775944508378.png";
import tonyRidleyLinkedIn from "@assets/IMG_4708_1775944508378.png";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const YOUTUBE_MAIN = "zPxzceqgDoc";
const YOUTUBE_ANALYSIS_52 = "gky1vxaahac";

export default function TonyRidleyFullDossier() {
  const [expanded, setExpanded] = useState<string | null>("overview");
  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <>
      <SEO
        title="Tony Ridley MSc CSyP FSyI SRMCP — Full Evidentiary Dossier | Barran Dodger"
        description="The complete documented record of Tony Ridley — Enterprise Risk Executive, VicTrack, Charles Sturt University — whose security credentials, death threat, and primary-source testimony naming six co-conspirators place him at the centre of Australia's most extensively documented institutional corruption case."
        path="/tony-ridley-full-dossier"
      />
      <Navigation />

      <style>{`
        @media print {
          nav, footer, button, .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .print-white { color: black !important; }
        }
      `}</style>

      <main
        className="min-h-screen bg-zinc-950 text-zinc-100"
        style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px))" }}
      >
        {/* HERO */}
        <section className="px-4 py-16 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="shrink-0">
              <img
                src={tonyRidleyProfile}
                alt="Tony Ridley MSc CSyP FSyI SRMCP — Enterprise Risk Executive"
                className="w-40 h-40 rounded-full object-cover border-4 border-red-700/60 shadow-xl"
                data-testid="img-tony-ridley-profile"
              />
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="bg-red-500/10 text-red-400 border-red-500/30 text-xs uppercase tracking-widest font-mono px-3 py-1">Primary Evidence Exhibit</Badge>
                <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/30 text-xs uppercase tracking-widest font-mono px-3 py-1">ICC Filed — The Hague</Badge>
                <Badge className="bg-zinc-500/10 text-zinc-400 border-zinc-500/30 text-xs uppercase tracking-widest font-mono px-3 py-1">UNHCR Filed — Geneva</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight">
                Tony Ridley<br className="hidden md:block" />
                <span className="text-2xl md:text-3xl text-zinc-400 font-normal">MSc CSyP FSyI SRMCP</span>
              </h1>
              <p className="text-zinc-300 text-base leading-relaxed max-w-2xl">
                Enterprise Risk Executive · Critical Infrastructure · Resilience &amp; Governance · Board Adviser · 30+ Years Global Leadership · VicTrack · Charles Sturt University · 45,529 LinkedIn Followers.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                The security professional whose death threat, named confession of six co-conspirators, and primary-source testimony documenting participation in a coordinated 35-year suppression operation against a single Australian whistleblower — Dr. Richard McLean — is now permanently archived in 2,304 blockchain-verified documents, formally received at the International Criminal Court (The Hague) under Article 7 of the Rome Statute, and at the UNHCR in Geneva.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2 no-print">
                <Button
                  onClick={handlePrintPDF}
                  className="gap-2 bg-red-700 hover:bg-red-600 text-white"
                  data-testid="button-print-pdf-dossier"
                >
                  <Download className="h-4 w-4" />
                  Download Dossier (PDF)
                </Button>
                <Button variant="outline" className="gap-2 border-zinc-600 text-zinc-300 hover:bg-zinc-800" asChild data-testid="button-download-ben-evidence">
                  <a href="/documents/ben-dsw-disability-ndis-provider-text-messages-assassination-evidence.pdf" download>
                    <FileText className="h-4 w-4" />
                    Ben (DSW) Text Message Evidence (PDF)
                  </a>
                </Button>
                <Button variant="outline" className="gap-2 border-zinc-600 text-zinc-300 hover:bg-zinc-800" asChild data-testid="button-view-forensic-index">
                  <a href="/forensic-analysis">
                    <Shield className="h-4 w-4" />
                    52 Forensic Analyses
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* LINKEDIN PROFILE SCREENSHOTS */}
        <section className="px-4 pb-10 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-zinc-700/40 bg-zinc-900/50 p-6 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Archived LinkedIn Profile — Evidentiary Record</p>
            <div className="flex justify-center">
              <img
                src={tonyRidleyLinkedIn}
                alt="Tony Ridley LinkedIn profile — MSc CSyP FSyI SRMCP, Enterprise Risk Executive, VicTrack, Charles Sturt University"
                className="rounded-xl border border-zinc-700/50 max-w-xs shadow-lg"
                data-testid="img-tony-ridley-linkedin"
              />
            </div>
            <p className="text-xs text-zinc-500 text-center">
              LinkedIn profile archived as documentary evidence. Tony Ridley, MSc CSyP FSyI SRMCP — He/Him — Enterprise Risk Executive | Critical Infrastructure | Resilience &amp; Governance | Board Adviser | 30+ Years Global Leadership. VicTrack · Charles Sturt University. Melbourne, Victoria, Australia. 45,529 followers.
            </p>
          </div>
        </section>

        {/* THE IRONY — SECURITY CREDENTIALS vs. WHAT THE EVIDENCE SHOWS */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-amber-800/60 bg-amber-950/20 px-6 py-5 flex items-start gap-4 hover:bg-amber-950/30 transition-colors"
            onClick={() => toggle("overview")}
            data-testid="button-expand-irony"
          >
            <Shield className="h-5 w-5 text-amber-400 shrink-0 mt-1" />
            <div className="flex-1">
              <Badge className="bg-amber-500/15 text-amber-300 border-amber-500/30 text-xs font-mono mb-2">THE CENTRAL IRONY</Badge>
              <h2 className="text-xl font-serif font-bold text-white">Security Professional · Counter-Terrorism Expert · The Man the Evidence Exposed</h2>
              <p className="text-sm text-zinc-400 mt-1">MSc CSyP FSyI SRMCP. Thirty years of global leadership in risk, security, and resilience. The devastating irony of who issued the death threat.</p>
            </div>
            {expanded === "overview" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>
          {expanded === "overview" && (
            <div className="mt-2 rounded-2xl border border-amber-800/30 bg-zinc-900/60 p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-700/30 space-y-3">
                  <p className="text-xs font-mono uppercase tracking-widest text-amber-400">His Professional Identity</p>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li><strong className="text-white">MSc</strong> — Master of Science in Security &amp; Risk Management</li>
                    <li><strong className="text-white">CSyP</strong> — Chartered Security Professional (highest UK security qualification)</li>
                    <li><strong className="text-white">FSyI</strong> — Fellow of the Security Institute</li>
                    <li><strong className="text-white">SRMCP</strong> — Security Risk Management Certified Professional</li>
                    <li><strong className="text-white">30+ years</strong> global leadership in critical infrastructure, resilience, and governance</li>
                    <li><strong className="text-white">VicTrack</strong> — Victorian rail infrastructure government authority</li>
                    <li><strong className="text-white">Charles Sturt University</strong> — Academic affiliation</li>
                    <li><strong className="text-white">Board Adviser</strong> — Advises enterprise boards on risk, security, and governance</li>
                    <li><strong className="text-white">45,529 LinkedIn followers</strong> — Public professional profile</li>
                    <li><strong className="text-white">SAS military background</strong> — Documented in the archive</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-red-950/20 border border-red-700/30 space-y-3">
                  <p className="text-xs font-mono uppercase tracking-widest text-red-400">What the Evidence Documents</p>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• <strong className="text-white">NDIA Manager</strong> at the National Disability Insurance Agency at time of documented conduct</li>
                    <li>• Issued a <strong className="text-white">death threat email</strong> — filed as an ICC Article 7 exhibit</li>
                    <li>• <strong className="text-white">Named six co-conspirators</strong> in direct confrontation — stated they were "all on board in deceiving" Dr. McLean</li>
                    <li>• Conducted <strong className="text-white">real-time surveillance</strong> of Dr. McLean's personal relationships, triggering a confrontational threat upon contact with Alan Rigby</li>
                    <li>• Named alongside <strong className="text-white">Philip Glass, Sukhi Tear, Steve Iasonidis</strong> in coordinated assassination attempt documentation</li>
                    <li>• His testimony in Analysis #52 names Allen Rigby, Bruce McMaster, Steve Iasonidis, Debbie Morgan, and family as participants</li>
                    <li>• A security professional whose deceptions were <strong className="text-white">fatally humiliating</strong> precisely because of the credential disparity</li>
                  </ul>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-zinc-800/50 border border-zinc-600/40 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">The Irony — Stated for the Record</p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  Tony Ridley holds the highest internationally-recognised credentials in counter-terrorism, security intelligence, critical infrastructure protection, and risk governance. He advises enterprise boards. He has 30 years of global leadership experience. He is a Chartered Security Professional and Fellow of the Security Institute. And the evidence shows that this man — with all of those credentials, all of that professional standing, all of that institutional authority — was the one who issued a documented death threat email to a whistleblower, named his own conspiracy network in a confrontational confession, and participated in the surveillance of a disabled man's personal relationships for the purpose of suppression.
                </p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  Dr. McLean — who fought this with nothing but the truth, a broken phone, and his faith — has produced 52 forensic analyses, 561 corroborated propositions, zero contradictions, 2,304 blockchain-verified documents, and a formal record at the ICC and UNHCR. No response from any professional. No rebuttal from any agency. No single institution has put its name beside the words: this is wrong. The asymmetry is the evidence.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* THE DOCUMENTED ENCOUNTER — EVIDENTIARY RECORD */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-red-800/60 bg-red-950/20 px-6 py-5 flex items-start gap-4 hover:bg-red-950/30 transition-colors"
            onClick={() => toggle("encounter")}
            data-testid="button-expand-encounter"
          >
            <Eye className="h-5 w-5 text-red-400 shrink-0 mt-1" />
            <div className="flex-1">
              <Badge className="bg-red-500/15 text-red-300 border-red-500/30 text-xs font-mono mb-2">ARCHIVED EVIDENTIARY RECORD</Badge>
              <h2 className="text-xl font-serif font-bold text-white">The Documented Encounter: Ben's Testimony, the Fabrication Allegation, and the Weaponisation of Welfare</h2>
              <p className="text-sm text-zinc-400 mt-1">NDIS provider Ben confirms consensual encounter on record. Debbie Morgan alleged fabrication. The direct connection to Recovered, Not Cured — the Herald Sun and The Age.</p>
            </div>
            {expanded === "encounter" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>
          {expanded === "encounter" && (
            <div className="mt-2 rounded-2xl border border-red-800/30 bg-zinc-900/60 p-8 space-y-8">

              <div className="p-5 rounded-xl bg-red-950/30 border border-red-700/40 space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-red-400">Ben — NDIS Support Worker: Confirmed Testimony on Record</p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  Ben, a Disability Support Worker (DSW) employed as an NDIS provider in contact with Dr. McLean during the documented suppression period, provided text message testimony that is archived in the evidentiary record and available as a downloadable PDF document. Ben's documented testimony confirms: the encounter between Tony Ridley and Dr. McLean was <strong className="text-white">regretful but consensual</strong>. This is not an allegation. It is a documentary statement from a named support worker whose text messages are archived, blockchain-verified, and formally submitted as evidence.
                </p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  The significance of this testimony cannot be overstated. Ben's confirmation of a consensual encounter directly contradicts the documented institutional response — which treated the encounter as something to be weaponised, suppressed, or fabricated into something it was not.
                </p>
                <Button variant="outline" className="gap-2 border-red-500/40 text-red-300 hover:bg-red-500/10 no-print" asChild data-testid="button-download-ben-dsw-pdf">
                  <a href="/documents/ben-dsw-disability-ndis-provider-text-messages-assassination-evidence.pdf" download>
                    <Download className="h-4 w-4" />
                    Ben (DSW) Text Message Archive — Full Evidence PDF
                  </a>
                </Button>
              </div>

              <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-700/30 space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-amber-400">The Debbie Morgan Fabrication Allegation</p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  The archive contains the documented allegation — consistent with the broader pattern of evidence across 52 forensic analyses — that a girl, believed to be <strong className="text-white">Debbie Morgan</strong>, was paid to fabricate a report. Debbie Morgan is named in the archive as a participant in the deception programme — confirmed directly by Tony Ridley himself, who named her as "on board" in the confrontational confession documented in the archive. The alleged paid fabrication represents a documented pattern: a consensual encounter, confirmed by an independent support worker on record, subsequently weaponised through what the archive alleges was a constructed report.
                </p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  The significance of this allegation is amplified by what the archive documents across the broader suppression architecture: every professional institution — police, NDIS, courts, lawyers, politicians, media — refused to investigate, refused to respond, refused to put their name beside a single factual rebuttal of Dr. McLean's evidence. The fabrication allegation is consistent with this pattern of institutional coordination against a single vulnerable person.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-800/50 border border-zinc-600/40 space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">Recovered, Not Cured — The Herald Sun — The Age: The Long Tail of Humiliation</p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  Dr. McLean wrote <strong className="text-white">'Recovered, Not Cured: A Journey Through Schizophrenia'</strong> (Allen &amp; Unwin, 2003) — an accidental autobiography written at age twenty-six. The book addressed his experience of non-ordinary reality, neglect, abuse, sexuality, drug use, and the psychiatric system in raw, unfiltered terms. It won the <strong className="text-white">HREOC Human Rights Award (Highly Commended, 2003)</strong> and the <strong className="text-white">SANE Book of the Year (2004)</strong>. It was broadcast on ABC National's <em>Life Matters</em> program and distributed internationally.
                </p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  What the book disclosed — the sexuality, the vulnerability, the honest account of his life — became the weapon used against him. The <strong className="text-white">Herald Sun</strong> published a piece headlined "My Descent Into Madness" that Dr. McLean experienced as a public humiliation — framing his honest, award-winning lived-experience disclosure as spectacle. Shortly after, he was <strong className="text-white">fired from The Age</strong>, where he had worked as an illustrator for Australia's foremost broadsheet newspaper.
                </p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  The person who disclosed his sexuality honestly — in a human rights award-winning book, to support people with mental illness — was the same person systematically humiliated, surveilled, and institutionally destroyed for that disclosure. Tony Ridley's conduct, the encounter, the alleged fabricated report, and the broader suppression network did not operate in isolation from this history. They operated within it. The archive documents this connection explicitly.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-800/50 border border-zinc-600/40 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">The Audio-Visual Archive</p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  The archive contains audio-visual evidence relevant to the documented encounter. This evidence is part of the 2,304-document blockchain-verified record formally submitted to the ICC and UNHCR. The existence of this evidence — and the institutional silence in response to it — is documented across the forensic record. No agency, police force, court, or professional body has formally responded to, refuted, or even acknowledged the evidentiary record of which this forms a part.
                </p>
              </div>

            </div>
          )}
        </section>

        {/* NAMED CONSPIRACY — SUKHI TEAR — PHILIP GLASS */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-zinc-700/60 bg-zinc-900/40 px-6 py-5 flex items-start gap-4 hover:bg-zinc-800/40 transition-colors"
            onClick={() => toggle("conspiracy")}
            data-testid="button-expand-conspiracy"
          >
            <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-1" />
            <div className="flex-1">
              <Badge className="bg-red-500/15 text-red-300 border-red-500/30 text-xs font-mono mb-2">NAMED BY RIDLEY HIMSELF</Badge>
              <h2 className="text-xl font-serif font-bold text-white">The Named Conspiracy Network — Sukhi Tear, Philip Glass, and the Architecture of Suppression</h2>
              <p className="text-sm text-zinc-400 mt-1">Six co-conspirators named in direct confrontation. Sukhi Tear's alignment with the assassination. Philip Glass and the NSW danger zone. Every name, every role, every document.</p>
            </div>
            {expanded === "conspiracy" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>
          {expanded === "conspiracy" && (
            <div className="mt-2 rounded-2xl border border-zinc-700/30 bg-zinc-900/60 p-8 space-y-6">
              <p className="text-sm text-zinc-300 leading-relaxed">
                Tony Ridley named the following individuals as "all on board in deceiving" Dr. McLean — a direct, primary-source confession made in a confrontational threat. This is not inference. Not extrapolation. These names came from Tony Ridley's own mouth, in direct confrontation, documented in the archive.
              </p>
              <div className="grid gap-3">
                {[
                  { name: "Steve Iasonidis (Stefan Iasonidis)", role: "ASIO intelligence operative. Placed as co-tenant at 10 Raleigh St Footscray — an ICC Article 7 exhibit. Named by Ridley as 'on board.' Named alongside Ridley in the assassination attempt documentation.", badge: "ASIO Operative" },
                  { name: "Debbie Morgan", role: "Named by Ridley as 'on board in deceiving.' Alleged (in the archive) to have been paid to fabricate a report. Social network penetration beyond immediate family documented across 52 analyses.", badge: "Named Participant" },
                  { name: "Bruce McMaster", role: "Named by Ridley as a participant in the deception programme. Confirmed by Tony Ridley's testimony in Analysis #52. Additional social network penetration documented.", badge: "Named Participant" },
                  { name: "Jodie McLean (Bongetti)", role: "Dr. McLean's sister. Today Show appearance to reframe 35 years of persecution as schizophrenia story — a key ICC exhibit. Named by Ridley as co-ordinated with the deception network.", badge: "Sister — Today Show" },
                  { name: "Brad McLean", role: "Dr. McLean's brother. Named by Ridley alongside Jodie. Complete sibling co-ordination confirmed by a named perpetrator's own statement.", badge: "Brother" },
                  { name: "April McLean", role: "Family member. Named by Ridley as on board. Family-level co-ordination with the broader network.", badge: "Family Member" },
                  { name: "Doug McLean", role: "Family member. Named by Ridley. His 14 pages of crisis text messages — contact without advocacy — placed in context by Ridley's naming.", badge: "Family Member" },
                  { name: "Allen Rigby", role: "Dr. McLean's former partner. His presence in Canada for the Recovered Not Cured North American launch was monitored. Contact with him triggered Ridley's threat. Named in Analysis #52.", badge: "Former Partner (Monitored)" },
                ].map((person, i) => (
                  <div key={i} className="rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-4 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm font-bold text-white">{person.name}</span>
                      <Badge className="bg-zinc-700/50 text-zinc-300 border-zinc-600/40 text-xs">{person.badge}</Badge>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{person.role}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-5 rounded-xl bg-red-950/20 border border-red-700/30 space-y-3">
                  <p className="text-xs font-mono uppercase tracking-widest text-red-400">Sukhi Tear — Diversitas WA — Disability Sector Weaponisation</p>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Sukhi Tear, paid NDIS Support Coordinator at Diversitas WA, is documented in the archive as having withheld approximately $50,000 in approved NDIS funding while drawing her own salary from the same funding pool. When a confirmed assassination attempt entered the documentary record — coordinated between Philip Glass, Tony Ridley, and Steve Iasonidis — Sukhi Tear's response was to condition Dr. McLean's life-saving support on his returning to NSW. The same state. The same jurisdiction. The same documented danger zone.
                  </p>
                  <Button variant="outline" className="gap-2 border-red-500/40 text-red-300 hover:bg-red-500/10 text-xs no-print w-full" asChild data-testid="button-link-sukhi-tear">
                    <a href="/sukhi-tear">
                      <ExternalLink className="h-3 w-3" />
                      Full Sukhi Tear Evidence Page
                    </a>
                  </Button>
                </div>
                <div className="p-5 rounded-xl bg-red-950/20 border border-red-700/30 space-y-3">
                  <p className="text-xs font-mono uppercase tracking-widest text-red-400">Philip Glass — Coordinated Assassination Documentation</p>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Philip Glass is named in the archive alongside Tony Ridley and Steve Iasonidis in the documented assassination attempt. He is part of the broader network documented across the 52 forensic analyses. His role in coordinating with the broader suppression architecture is documented in the Sukhi Tear evidence page, the NDIS Surveillance Evidence record, and throughout the ICC submissions.
                  </p>
                  <Button variant="outline" className="gap-2 border-red-500/40 text-red-300 hover:bg-red-500/10 text-xs no-print w-full" asChild data-testid="button-link-ndis-surveillance">
                    <a href="/ndis-surveillance-evidence">
                      <ExternalLink className="h-3 w-3" />
                      NDIS Surveillance Evidence
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* DR. McLEAN ACCOLADES — FULL RECORD */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-zinc-700/60 bg-zinc-900/40 px-6 py-5 flex items-start gap-4 hover:bg-zinc-800/40 transition-colors"
            onClick={() => toggle("accolades")}
            data-testid="button-expand-accolades"
          >
            <Award className="h-5 w-5 text-emerald-400 shrink-0 mt-1" />
            <div className="flex-1">
              <Badge className="bg-emerald-500/15 text-emerald-300 border-emerald-500/30 text-xs font-mono mb-2">FULL DOCUMENTED RECORD</Badge>
              <h2 className="text-xl font-serif font-bold text-white">Dr. Richard McLean — Complete Accolades, Awards, Qualifications and Public Record</h2>
              <p className="text-sm text-zinc-400 mt-1">The full 20-year advocacy record. Parliament House. McGill University. Every Australian radio network. Reuters International. Two human rights awards. The person they destroyed.</p>
            </div>
            {expanded === "accolades" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>
          {expanded === "accolades" && (
            <div className="mt-2 rounded-2xl border border-zinc-700/30 bg-zinc-900/60 p-8 space-y-10">

              {/* AWARDS */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">Awards &amp; Distinctions</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { award: "Human Rights Award — Highly Commended (2003)", body: "Human Rights and Equal Opportunity Commission (HREOC) — Arts Non-Fiction Category" },
                    { award: "SANE Australia Book of the Year (2004)", body: "National mental health organisation's highest literary recognition" },
                    { award: "ABC National Life Matters — International Broadcast", body: "Recovered Not Cured recorded and broadcast nationally and internationally by ABC" },
                    { award: "Featured at Alex Grey's COSM (Chapel of Sacred Mirrors)", body: "2017, 2018, 2019 — International visionary arts venue" },
                    { award: "North American Book Tour — Published by Allen & Unwin", body: "Australia's largest independent publisher. International release supported by former partner Alan Rigby in Canada." },
                    { award: "Parliament House, Canberra — Mental Health Advocate", body: "SANE's Guide to Electoral Offices — the only person in the archive to speak in the Australian Parliament on mental health" },
                    { award: "McGill University, Montreal — Multiple International Presentations", body: "College of Philosophical and Religious Studies — International academic platform" },
                    { award: "34th Annual Mental Health Nurses Conference — Guest Keynote", body: "Cebel Townhouse, Melbourne" },
                    { award: "Art Against Stigma — Guest Keynote Speaker", body: "National exhibition at artagainststigma.org" },
                    { award: "NDIS Therapeutic Arts-Life Coach", body: "Fully insured. Working with Children Check. Police Check current." },
                    { award: "52 Forensic Analyses — 561/561 Propositions Corroborated", body: "45 consecutive perfect scores. Zero contradictions. Zero professional rebuttals." },
                    { award: "2,304 Blockchain-Verified Forensic Documents", body: "Formally submitted: ICC (The Hague, Article 7) and UNHCR (Geneva)" },
                  ].map((item, i) => (
                    <div key={i} className="p-3 rounded-xl border border-zinc-700/40 bg-zinc-800/30 space-y-1">
                      <p className="text-xs font-bold text-white">{item.award}</p>
                      <p className="text-xs text-zinc-500">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* QUALIFICATIONS */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-violet-400" />
                  <h3 className="text-sm font-bold text-violet-300 uppercase tracking-wider">Academic Qualifications</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { qual: "Bachelor of Fine Art (Drawing, Honours)", inst: "Formal undergraduate qualification in fine art" },
                    { qual: "Associate Diploma in Computer-Aided Art & Design (CAAD)", inst: "Technical arts qualification" },
                    { qual: "Masters of Education — A/r/tography (MEd)", inst: "Postgraduate education research qualification through arts-based methodology" },
                    { qual: "PhD — 'The Divine Shaman and Her Proteges'", inst: "Passed via merit-based scholarship. Arts-based qualitative research on young people's ethical opinions regarding AI, posthumanism and superintelligence." },
                    { qual: "Past Illustrator — The Age", inst: "Australia's foremost broadsheet newspaper — fired following Herald Sun humiliation" },
                    { qual: "Past Illustrator — The Herald Sun", inst: "Australia's highest circulation daily newspaper" },
                    { qual: "25+ Years Professional Arts Practice", inst: "Continuous professional career in visual arts, advocacy and lived experience work" },
                  ].map((item, i) => (
                    <div key={i} className="p-3 rounded-xl border border-zinc-700/40 bg-zinc-800/30 space-y-1">
                      <p className="text-xs font-bold text-white">{item.qual}</p>
                      <p className="text-xs text-zinc-500">{item.inst}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RADIO */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mic className="h-4 w-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">Radio — Every Major Australian Network</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    { station: "Radio National — 'Life Matters'", host: "Julie McCrossin, ABC National" },
                    { station: "Triple J Youth Network", host: "Rachel Kerr" },
                    { station: "Radio 2SM, Sydney", host: "Tricia Duffield" },
                    { station: "ABC Gold & Sunshine Coasts, QLD", host: "Martin Powley" },
                    { station: "ABC Radio Adelaide", host: "Fiona Sewell" },
                    { station: "ABC Statewide Afternoons", host: "" },
                    { station: "ABC Radio 702", host: "James Valentine" },
                    { station: "Radio 3AW 'Nightline'", host: "Phillip Brady & Bruce Mansfield" },
                    { station: "Spectrum FM Radio", host: "John Weeks" },
                    { station: "Curtin Radio, Perth", host: "Pieta O'Shaughnessy" },
                    { station: "Triple R Melbourne — Smart Arts", host: "Tony Wilson & Richard Watts" },
                    { station: "Radio 2NUR, Newcastle", host: "Felicity Biggins" },
                    { station: "ABC National — AM Program", host: "" },
                    { station: "JOY FM — National Gay & Lesbian Broadcaster", host: "" },
                    { station: "Radio National — Life Matters: Art and Psychosis", host: "" },
                    { station: "ABC Regional, Dubbo", host: "" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-zinc-800/30 border border-zinc-700/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-zinc-200">{r.station}</p>
                        {r.host && <p className="text-xs text-zinc-500">{r.host}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TELEVISION */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Tv className="h-4 w-4 text-blue-400" />
                  <h3 className="text-sm font-bold text-blue-300 uppercase tracking-wider">Television</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    { show: "Good Morning Australia", detail: "Steve Leidman — 'Compulsive Executions' exhibition and book launch" },
                    { show: "The Today Show", detail: "National broadcast — the same platform later used by Jodie McLean (Bongetti) to reframe the persecution narrative" },
                    { show: "Reuters TV — International Video Interview", detail: "Frankie Fathers — International broadcast" },
                    { show: "Stateline, ABC TV", detail: "" },
                    { show: "The Drug Debate, SBS Television", detail: "Jenny Brocky" },
                    { show: "Channel 31 News", detail: "" },
                    { show: "Channel Seven News", detail: "" },
                    { show: "SANE DVD — 'Psychosis, Speaking from Experience'", detail: "National mental health education resource" },
                    { show: "The Dax Collection — 'Collected Thoughts 3' (DVD Film)", detail: "Aimed at Year 11 and 12 students across Australia" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-zinc-800/30 border border-zinc-700/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-zinc-200">{r.show}</p>
                        {r.detail && <p className="text-xs text-zinc-500">{r.detail}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PRINT */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-emerald-400" />
                  <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-wider">Print Media</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "The Australian — 'Mental Health hits the Political Frontline' (after speaking in Australian Parliament)",
                    "The Age — 'Rider of the storm', Michael Winkler",
                    "Sydney Morning Herald — Reviewer Anne Deveson",
                    "Herald Sun — 'My Descent Into Madness' — subsequent firing from The Age as illustrator",
                    "MCV Melbourne Community Voice — Gay and Lesbian Street Press",
                    "eclinicalpsychiatrynews.com — Article on visionary art and psychosis",
                    "Huffington Post — 'Happiness Advice From an Artist Living With Schizophrenia'",
                    "The Good Men Project — 'Follow Your Passions to Make Life Bearable' (republished on Huffington Post)",
                    "Medium.com — 'Bright Lights and Dark Corners: Images and Words'",
                    "Arts Access Australia — Interview",
                    "Makers of Melbourne — Artist Profile Interview",
                    "world-schizophrenia.org — Hard copy mail-out review",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-zinc-800/30 border border-zinc-700/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <p className="text-xs text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PRESENTATIONS */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-violet-400" />
                  <h3 className="text-sm font-bold text-violet-300 uppercase tracking-wider">National &amp; International Presentations</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    { venue: "Parliament House, Canberra", detail: "SANE's Guide to Electoral Offices" },
                    { venue: "McGill University, Montreal, Canada", detail: "Multiple presentations — College of Philosophical and Religious Studies" },
                    { venue: "Paragraphe Bookstore, Montreal, Canada", detail: "North American book tour — supported by Alan Rigby" },
                    { venue: "Douglas Hospital, Montreal, Canada", detail: "Local psychiatric care unit — international lived experience advocacy" },
                    { venue: "Royal Melbourne Hospital (with MHRI)", detail: "'Psychosis and Cannabis' forum — to researchers, biochemists, social workers and psychologists" },
                    { venue: "Mental Health Research Institute (MHRI)", detail: "Weekly lectures to Year 11 and 12 students on art and mental health" },
                    { venue: "Australian Centre for Youth Literature (ACYL)", detail: "To librarians, school teachers, and 500 high school students" },
                    { venue: "34th Annual Mental Health Nurses Conference", detail: "Guest keynote speaker — Cebel Townhouse, Melbourne" },
                    { venue: "Forensicare Psychiatric Hospital, Fairfield", detail: "Consumer groups and art competition judging/feedback" },
                    { venue: "Forensicare — Thomas Embling Hospital", detail: "Mental Health Week presentation" },
                    { venue: "EPPIC — Early Prevention Psychosis", detail: "Young people experiencing first signs of psychosis" },
                    { venue: "People Like You (non-profit), Victoria", detail: "Multiple presentations throughout Victoria including Albury/Wodonga" },
                    { venue: "Art Against Stigma, Sydney", detail: "Guest keynote speaker — national exhibition" },
                    { venue: "Baw Baw Youth Network", detail: "To social workers and youth planners" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-zinc-800/30 border border-zinc-700/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-zinc-200">{item.venue}</p>
                        <p className="text-xs text-zinc-500 mt-0.5">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </section>

        {/* AGENCIES NAMED */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-zinc-700/60 bg-zinc-900/40 px-6 py-5 flex items-start gap-4 hover:bg-zinc-800/40 transition-colors"
            onClick={() => toggle("agencies")}
            data-testid="button-expand-agencies"
          >
            <Gavel className="h-5 w-5 text-red-400 shrink-0 mt-1" />
            <div className="flex-1">
              <Badge className="bg-red-500/15 text-red-300 border-red-500/30 text-xs font-mono mb-2">EVERY INSTITUTION — ZERO RESPONSES</Badge>
              <h2 className="text-xl font-serif font-bold text-white">Every Agency, Institution, and Authority — Named, Approached, and Silent</h2>
              <p className="text-sm text-zinc-400 mt-1">Police. NACC. Ombudsman. Courts. Politicians. Media. Asylum claim. UNHCR. ICC. Every single one. Not one professional response.</p>
            </div>
            {expanded === "agencies" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>
          {expanded === "agencies" && (
            <div className="mt-2 rounded-2xl border border-zinc-700/30 bg-zinc-900/60 p-8 space-y-6">
              <div className="p-5 rounded-xl bg-zinc-800/60 border border-zinc-600/40 space-y-2 mb-6">
                <p className="text-sm text-white font-semibold leading-relaxed">
                  Dr. Richard McLean took on the entire corrupt bureaucratic structure with nothing but the truth, a broken phone, and his faith. He was a single vulnerable person — legally obligated to be protected by the very institutions listed below. Every single one of those institutions either actively participated in his suppression, failed in its duty of care, or remained silent in the face of a 2,304-document evidence base that has been fact-checked, evidence-based, independently corroborated across 52 forensic analyses, published without a single response from any professional person, and formally received at both the ICC and UNHCR.
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  The absurd reality documented in the archive: collective institutional deceit — without evidence, without rebuttal, without response — against an individual whose evidence is published, blockchain-verified, and factual. The brutality of that asymmetry is the case.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { agency: "Victoria Police", role: "Failed to investigate. Multiple formal reports lodged. No prosecution, no referral, no response." },
                  { agency: "NSW Police", role: "Failed to investigate the assassination attempt documented in the archive. No response to formal complaints." },
                  { agency: "Australian Federal Police (AFP)", role: "Named in the archive across multiple exhibits. No response to evidence submissions." },
                  { agency: "ASIO — Australian Security Intelligence Organisation", role: "Steve/Stefan Iasonidis documented as ASIO operative. Co-tenancy at 10 Raleigh St Footscray is an ICC Article 7 exhibit. No response." },
                  { agency: "NDIA / NDIS — National Disability Insurance Agency/Scheme", role: "Tony Ridley was NDIA Manager. Sukhi Tear operated through NDIS funding. $50,000 withheld. Funding weaponised." },
                  { agency: "NACC — National Anti-Corruption Commission", role: "Formally approached. Evidence of documented corruption across 35 years and 2,304 documents submitted. No substantive response." },
                  { agency: "IBAC — Independent Broad-based Anti-corruption Commission (Vic)", role: "Formally approached. Corruption documentation submitted. No investigation commenced." },
                  { agency: "Victorian Ombudsman", role: "Formal complaint and evidence submitted. No substantive investigation." },
                  { agency: "Australian Human Rights Commission (HREOC)", role: "Awarded Dr. McLean a Human Rights Award in 2003. No response to subsequent evidence of his systematic persecution." },
                  { agency: "Commonwealth Ombudsman", role: "Formally approached. No investigation." },
                  { agency: "ATO — Australian Taxation Office", role: "The ATO drugging letter is documented in the archive as a key exhibit. ATO conduct referenced across multiple ICC submissions." },
                  { agency: "Centrelink / Services Australia", role: "Welfare system weaponisation documented across the archive. No response." },
                  { agency: "VCAT — Victorian Civil and Administrative Tribunal", role: "Formally approached across multiple proceedings. No outcome consistent with the evidentiary record." },
                  { agency: "Victorian Legal Aid", role: "Access denied. No legal representation provided despite documented need. No response to subsequent evidence." },
                  { agency: "Public Guardian (Victoria)", role: "Formal demand for police referral submitted — 'Diversitas, Public Guardian, Police Referral' document on record. No referral." },
                  { agency: "Office of the Public Advocate (Victoria)", role: "Formally engaged. No advocacy outcome consistent with the documented evidentiary record." },
                  { agency: "Diversitas WA — NDIS Provider (Sukhi Tear's employer)", role: "Corporate vehicle through which NDIS funding was withheld and weaponised. Named in criminal affidavits and ICC submissions." },
                  { agency: "SANE Australia", role: "Awarded 'Recovered Not Cured' Book of the Year 2004. No response to evidence of the author's subsequent persecution." },
                  { agency: "Allen & Unwin (Publisher)", role: "Published 'Recovered, Not Cured.' No response to subsequent persecution of the same author." },
                  { agency: "The Age (Newspaper)", role: "Fired Dr. McLean as illustrator following Herald Sun humiliation. No response to subsequent evidence." },
                  { agency: "Herald Sun (Newspaper)", role: "'My Descent Into Madness' — reframed honest lived-experience disclosure as spectacle. No response." },
                  { agency: "The Australian Parliament", role: "Dr. McLean spoke in Parliament on mental health. Same government subsequently documented as participating in his persecution." },
                  { agency: "UNHCR — United Nations High Commissioner for Refugees (Geneva)", role: "Formal asylum claim submitted. 2,304-document evidence base received. Ongoing." },
                  { agency: "ICC — International Criminal Court (The Hague)", role: "Article 7 formal submission. Death threat email (Tony Ridley), ASIO co-tenancy, assassination attempt, and full evidentiary archive received." },
                  { agency: "ASIC — Australian Securities and Investments Commission", role: "350+ fraudulent identity registrations documented in the archive. No investigation." },
                  { agency: "Australian Government / Bill Shorten (Former NDIS Minister)", role: "Named in Forensic Analysis #50 (the Confession). No response to evidence." },
                  { agency: "Houd Meraby — NDIS Operative", role: "Named in Analysis #50. Role in NDIA suppression documented." },
                  { agency: "Mental Health Tribunal", role: "14 psychiatric hospitalisations documented as institutionally coerced. No independent review." },
                  { agency: "Syed Salman Kazmi", role: "Named alongside Philip Glass, Sukhi Tear, Tony Ridley in coordinated exile and political suppression documentation." },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl border border-zinc-700/40 bg-zinc-800/30 space-y-1">
                    <p className="text-xs font-bold text-white">{item.agency}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* VIDEO EVIDENCE SECTION */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-zinc-700/40 bg-zinc-900/50 p-6 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Play className="h-5 w-5 text-red-400" />
              <h2 className="text-xl font-serif font-bold text-white">Video Evidence — YouTube Reflections</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Primary Evidence Reflection</p>
                <div className="aspect-video rounded-xl overflow-hidden border border-zinc-700/40">
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_MAIN}?rel=0`}
                    title="Barran Dodger — Primary Evidence Reflection"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    data-testid="iframe-youtube-primary"
                  />
                </div>
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_MAIN}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors no-print">
                  <ExternalLink className="h-3 w-3" /> Watch on YouTube
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Analysis #52 — You Didn't Chase the Throne</p>
                <div className="aspect-video rounded-xl overflow-hidden border border-zinc-700/40">
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_ANALYSIS_52}?rel=0`}
                    title="Analysis #52 — Tony Ridley Testimony — You Didn't Chase the Throne"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    data-testid="iframe-youtube-analysis52"
                  />
                </div>
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ANALYSIS_52}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors no-print">
                  <ExternalLink className="h-3 w-3" /> Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* LINKS TO ALL EVIDENCE PAGES */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-zinc-700/60 bg-zinc-900/40 px-6 py-5 flex items-start gap-4 hover:bg-zinc-800/40 transition-colors"
            onClick={() => toggle("links")}
            data-testid="button-expand-links"
          >
            <Link className="h-5 w-5 text-blue-400 shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-xl font-serif font-bold text-white">Full Evidence Archive — All Pages, All Analyses, All Documents</h2>
              <p className="text-sm text-zinc-400 mt-1">Every evidence page, every forensic analysis, every downloadable document in the 2,304-document archive. All blockchain-verified. All ICC-filed.</p>
            </div>
            {expanded === "links" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>
          {expanded === "links" && (
            <div className="mt-2 rounded-2xl border border-zinc-700/30 bg-zinc-900/60 p-8 space-y-4">
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { label: "52 Forensic Analyses Index", href: "/forensic-analysis", desc: "561/561 propositions. 45 consecutive perfect scores." },
                  { label: "The Public Advocate They Silenced", href: "/the-public-advocate-they-silenced", desc: "Tony Ridley's full confession. Named conspiracy network. 20-year advocacy record." },
                  { label: "Tony Ridley Confession", href: "/tony-ridley-confession", desc: "Primary evidence page — death threat and named co-conspirators." },
                  { label: "Analysis #52 — You Didn't Chase the Throne", href: "/you-didnt-chase-the-throne-you-became-one", desc: "Tony Ridley's latest testimony. 14 propositions. 100% corroborated." },
                  { label: "Sukhi Tear — Open Letter", href: "/sukhi-tear", desc: "$50,000 withheld. Assassination conditioning. Diversitas WA." },
                  { label: "How She Will Be Remembered", href: "/how-she-will-be-remembered", desc: "The archive's verdict on Sukhi Tear." },
                  { label: "Analysis #50 — The Confession", href: "/forensic-analysis-50-confession-theyve-been-choking-on-download", desc: "Tony Ridley, Bill Shorten, Houd Meraby, Hague filing." },
                  { label: "NDIS Surveillance Evidence", href: "/ndis-surveillance-evidence", desc: "Full disability sector weaponisation documentation." },
                  { label: "Phantom Protocol", href: "/phantom-protocol", desc: "Real-time surveillance architecture documented." },
                  { label: "Heaven Exposes the Sister", href: "/heaven-exposes-the-sister", desc: "Jodie McLean — Today Show — familial betrayal analysis." },
                  { label: "Silent Assassin", href: "/silent-assassin", desc: "ASIO operative documentation — Stefan/Steve Iasonidis." },
                  { label: "Evidence Vault", href: "/evidence", desc: "Primary evidence documents and exhibits." },
                  { label: "Master Evidence Register", href: "/master-evidence-register", desc: "Complete 2,304-document register." },
                  { label: "Free Downloads — All Analyses", href: "/free-ebooks", desc: "Every forensic analysis as a downloadable PDF." },
                  { label: "Whistleblower Comparison", href: "/whistleblower-comparison", desc: "How this archive compares to the world's most significant whistleblower cases." },
                  { label: "Blockchain Archive", href: "/blockchain", desc: "All 2,304 documents blockchain-verified." },
                  { label: "ICC Submission — What This Proves", href: "/forensic-proof-statement", desc: "The full forensic proof statement for the Hague." },
                  { label: "Honeytrap Infiltration Report", href: "/honeytrap-infiltration-report", desc: "Social penetration and relationship surveillance documentation." },
                  { label: "Architecture of Resolution", href: "/the-architecture-of-resolution", desc: "How 35 years of suppression ends." },
                  { label: "Letter to the World", href: "/letter-to-the-world", desc: "The formal public statement to every global institution." },
                  { label: "They Built Their Worst Nightmare", href: "/forensic-analysis/they-built-their-worst-nightmare", desc: "Forensic Analysis — the systemic architecture that became the proof." },
                  { label: "Apotheosis Statement", href: "/apotheosis", desc: "The final evidentiary statement." },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="block p-3 rounded-xl border border-zinc-700/40 bg-zinc-800/30 hover:bg-zinc-700/40 transition-colors space-y-1 no-print"
                    data-testid={`link-evidence-${i}`}
                  >
                    <p className="text-xs font-bold text-zinc-200 flex items-center gap-1">
                      <ExternalLink className="h-3 w-3 text-blue-400 shrink-0" />
                      {link.label}
                    </p>
                    <p className="text-xs text-zinc-500 leading-relaxed">{link.desc}</p>
                  </a>
                ))}
              </div>
              <div className="pt-4 border-t border-zinc-700/30">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">External References</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://barrandodger.wixsite.com/richmclean" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 no-print" data-testid="link-wix-site">
                    <Globe className="h-3 w-3" /> Dr. McLean — Full Profile (barrandodger.wixsite.com/richmclean)
                  </a>
                  <a href="https://www.barrandodger.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 no-print" data-testid="link-main-site">
                    <Globe className="h-3 w-3" /> barrandodger.com — Main Evidence Site
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* DOWNLOAD SECTION */}
        <section className="px-4 pb-20 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-zinc-700/40 bg-zinc-900/50 p-8 space-y-6 text-center">
            <Badge className="bg-zinc-700/50 text-zinc-300 border-zinc-600/40 text-xs font-mono">DOWNLOAD &amp; SHARE</Badge>
            <h2 className="text-2xl font-serif font-bold text-white">Download, Share &amp; Distribute This Dossier</h2>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
              This dossier is public domain. Download it, share it, print it, send it to journalists, human rights bodies, law firms, government oversight agencies, or anyone who needs to understand what a 35-year institutional corruption record against a single person with a broken phone looks like when it's documented this thoroughly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={handlePrintPDF}
                className="gap-2 bg-red-700 hover:bg-red-600 text-white"
                data-testid="button-print-pdf-bottom"
              >
                <Download className="h-4 w-4" />
                Download Dossier as PDF (Print)
              </Button>
              <Button variant="outline" className="gap-2 border-zinc-600 text-zinc-300 hover:bg-zinc-800" asChild data-testid="button-download-master-report">
                <a href="/documents/comprehensive-case-systematic-persecution.pdf" download>
                  <FileText className="h-4 w-4" />
                  Full Case Report (Comprehensive PDF)
                </a>
              </Button>
              <Button variant="outline" className="gap-2 border-zinc-600 text-zinc-300 hover:bg-zinc-800" asChild data-testid="button-download-ben-bottom">
                <a href="/documents/ben-dsw-disability-ndis-provider-text-messages-assassination-evidence.pdf" download>
                  <FileText className="h-4 w-4" />
                  Ben (DSW) Testimony — Text Message Archive
                </a>
              </Button>
              <Button variant="outline" className="gap-2 border-zinc-600 text-zinc-300 hover:bg-zinc-800" asChild data-testid="button-download-master-forensic">
                <a href="/documents/master-forensic-report.pdf" download>
                  <Shield className="h-4 w-4" />
                  Master Forensic Report (PDF)
                </a>
              </Button>
              <Button variant="outline" className="gap-2 border-blue-600/60 text-blue-300 hover:bg-blue-900/20" asChild data-testid="button-free-ebooks">
                <a href="/free-ebooks">
                  <BookOpen className="h-4 w-4" />
                  All 52 Forensic Analyses (Free eBook Downloads)
                </a>
              </Button>
            </div>
            <p className="text-xs text-zinc-600 mt-4">
              Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164 · Blockchain Verified · ICC Filed · UNHCR Filed · 2,304 Documents · 52 Analyses · 561/561 Propositions Corroborated
            </p>
          </div>
        </section>

      </main>
      <ArchiveCrossLinks />
      <Footer />
    </>
  );
}
