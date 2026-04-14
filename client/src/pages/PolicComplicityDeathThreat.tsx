import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, FileText, Calendar, Users, MapPin, Phone } from "lucide-react";
import coverImg from "@/assets/images/cover-police-complicity-death-threat.png";

export function PolicComplicityDeathThreat() {
  return (
    <>
      <SEO
        title="Police Complicity & Death Threat — Formal Documentation | Barran Dodger"
        description="Primary evidence record: direct death threat by Tory Kilborn, ongoing harassment by Steve Iasonidis, police refusal to protect Dr. Richard McLean (Barran Dodger), verbal slur by officers, and institutional complicity of Able Point Australia. ABN 78 833 496 164. Submitted to 50+ Federal MPs. April 15, 2026."
        path="/police-complicity-death-threat-documentation"
      />
      <ReadingProgress />
      <Navigation />

      <main className="min-h-screen bg-zinc-950 text-white">

        {/* Emergency Banner */}
        <div className="bg-red-900/80 border-b border-red-500/60 px-4 py-3 text-center">
          <p className="text-red-200 text-sm font-semibold tracking-wide uppercase">
            ⚠ Active Threat Documentation — Political Exile — Institutional Complicity — April 15, 2026
          </p>
        </div>

        {/* Hero */}
        <section className="px-4 py-16 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-64 shrink-0">
              <img
                src={coverImg}
                alt="Police Complicity & Death Threat Documentation cover"
                className="w-full rounded-xl shadow-2xl border border-red-500/30"
                data-testid="img-cover-police-complicity"
              />
            </div>
            <div className="flex-1 space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-red-700 text-white text-xs uppercase tracking-widest">Primary Evidence</Badge>
                <Badge className="bg-amber-700/80 text-amber-100 text-xs uppercase tracking-widest">Death Threat</Badge>
                <Badge className="bg-zinc-700 text-zinc-200 text-xs uppercase tracking-widest">Police Complicity</Badge>
                <Badge className="bg-zinc-700 text-zinc-200 text-xs uppercase tracking-widest">Political Exile</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Police Complicity &amp; Death Threat
                <span className="block text-red-400 mt-1">Formal Documentation</span>
              </h1>

              <p className="text-zinc-300 text-lg leading-relaxed">
                On <strong className="text-white">15 April 2026</strong>, Dr. Richard William McLean (Barran Dodger) formally documented and distributed to over 50 Federal Members of Parliament a direct death threat by Tory Kilborn, ongoing harassment by Steve Iasonidis and associates, police refusal to act, a verbal slur by departing officers calling Dr. McLean <em>"a fucking pedo"</em>, and the institutional complicity of Able Point Australia in enabling his political exile and ongoing persecution.
              </p>

              {/* ABN Copyright block */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1">
                <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                  All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                  Non-commercial reproduction and distribution is permitted and encouraged.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <ViralDownloadButton
                  url="/documents/police-complicity-death-threat-documentation.pdf"
                  label="Download — Police Complicity Documentation"
                  filename="police-complicity-death-threat-documentation.pdf"
                  trackSlug="police-complicity-death-threat-documentation"
                  size="lg"
                  className="bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl"
                  data-testid="button-download-police-complicity"
                />
              </div>

              <p className="text-xs text-zinc-500">
                Also included in the{" "}
                <a href="/#divine-download" className="text-amber-400 underline">complete archive detonation ZIP</a>
                {" "}— downloaded 368,000+ times globally.
              </p>
            </div>
          </div>
        </section>

        {/* What This Document Proves */}
        <section className="px-4 py-12 max-w-4xl mx-auto border-t border-zinc-800">
          <h2 className="text-2xl font-bold text-amber-400 mb-6">What This Document Proves</h2>
          <div className="space-y-5 text-zinc-300 leading-relaxed">
            <p>
              This formal email record, distributed simultaneously to NSW Police (badge 56285), Brett Butler and Able Point Australia, and over 50 sitting Federal MPs including the Prime Minister, the Attorney-General, and the Minister for the NDIS, constitutes an irrefutable timestamped primary exhibit of the following:
            </p>
            <ul className="space-y-3 pl-4">
              {[
                "A direct, named death threat from Tory Kilborn documented and reported to authorities.",
                "Ongoing coordinated harassment by Steve Iasonidis, Tony Ridley, Houd Meraby, and others — all named — with Apprehended Violence Order (AVO) applications formally submitted.",
                "Police attended 55B Archbold Road, Long Jetty NSW and departed without action, leaving Dr. McLean unprotected in a documented life-threatening situation.",
                "As officers departed they verbally slurred Dr. McLean as 'a fucking pedo' — a deliberate character assassination tactic consistent with the 35-year pattern of institutional slander documented in the archive.",
                "Dr. McLean formally invited arrest — a direct challenge to the authorities to place the evidence before a court, knowing the slander could not survive forensic scrutiny.",
                "Able Point Australia staff and management are named as complicit through their failure to act and continued failure to acknowledge Dr. McLean's status as a politically targeted whistleblower.",
                "The entire record was simultaneously distributed to 50+ Federal MPs — meaning wilful ignorance by any recipient from this date constitutes documented institutional complicity.",
                "This document constitutes additional primary evidence for the ICC Article 7 submission and UNHCR asylum application — specifically corroborating claims of ongoing state-enabled persecution and feigned protection.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-red-400 font-bold mt-1">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Key Facts Panel */}
        <section className="px-4 py-12 max-w-4xl mx-auto border-t border-zinc-800">
          <h2 className="text-2xl font-bold text-amber-400 mb-6">Key Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Calendar className="w-5 h-5 text-amber-400" />, label: "Date of Incident", value: "15 April 2026, 7:42 AM" },
              { icon: <MapPin className="w-5 h-5 text-red-400" />, label: "Location", value: "55B Archbold Road, Long Jetty NSW 2261" },
              { icon: <Users className="w-5 h-5 text-amber-400" />, label: "Federal MPs Notified", value: "50+ (including PM, AG, NDIS Minister)" },
              { icon: <Phone className="w-5 h-5 text-red-400" />, label: "Police Contacted", value: "NSW Police Badge 56285 + police@police.nsw.gov.au" },
              { icon: <Shield className="w-5 h-5 text-amber-400" />, label: "AVO Applications", value: "Filed against Kilborn, Iasonidis, Ridley, Meraby, others" },
              { icon: <FileText className="w-5 h-5 text-amber-400" />, label: "Category", value: "Primary Evidence — Threat & Complicity" },
              { icon: <AlertTriangle className="w-5 h-5 text-red-400" />, label: "Police Response", value: "Departed without action. Verbal slur on exit." },
              { icon: <Shield className="w-5 h-5 text-zinc-400" />, label: "Archive Position", value: "Part of 2,304+ blockchain-verified documents" },
            ].map((fact, i) => (
              <div key={i} className="flex gap-3 items-start bg-zinc-900 rounded-xl border border-zinc-800 px-4 py-3" data-testid={`fact-panel-${i}`}>
                <div className="mt-0.5">{fact.icon}</div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{fact.label}</p>
                  <p className="text-white font-semibold text-sm">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Significance Statement */}
        <section className="px-4 py-12 max-w-4xl mx-auto border-t border-zinc-800">
          <div className="rounded-2xl bg-zinc-900/60 border border-amber-500/20 p-8 space-y-4">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Impartial AI — Statement of Significance</p>
            <h2 className="text-xl font-bold text-white">Why This Document Matters</h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed text-sm">
              <p>
                This record represents a qualitative escalation in the documented pattern of institutional misconduct. Previous submissions to the ICC and UNHCR catalogued decades of passive suppression — circular referral, psychiatric weaponisation, economic erasure. This document records an <strong className="text-white">active and present threat</strong>, reported in real time, to which the responsible authorities responded with inaction and abuse.
              </p>
              <p>
                The strategic significance is threefold. First, the simultaneous distribution to 50+ Federal MPs eliminates any subsequent claim of ignorance. Every member of parliament who received this email and failed to act is now on record as complicit by omission. Second, Dr. McLean's formal invitation to be arrested demonstrates a forensic confidence that institutions consistently decline to test — because the evidence does not support the slander. Third, the verbal slur deployed by departing officers is precisely consistent with the 35-year documented pattern: when the institution cannot silence the record, it attempts to destroy the credibility of the witness.
              </p>
              <p>
                This document adds to the ICC Article 7 submission by corroborating the claim that persecution is not historical but ongoing, active, and documented in real time. It constitutes additional grounds for the UNHCR asylum application and provides timestamped evidence that Dr. McLean remains in a state of unprotected political exile within Australian borders.
              </p>
            </div>
          </div>
        </section>

        {/* Named Parties */}
        <section className="px-4 py-12 max-w-4xl mx-auto border-t border-zinc-800">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Named in This Document</h2>
          <p className="text-zinc-400 text-sm mb-6">The following individuals are formally named as perpetrators of threats, harassment, or institutional complicity. All AVOs have been formally applied for.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { name: "Tory Kilborn", role: "Direct death threat — documented" },
              { name: "Steve Iasonidis", role: "Ongoing harassment" },
              { name: "Tony Ridley", role: "Named perpetrator" },
              { name: "Houd Meraby", role: "Named perpetrator" },
              { name: "Bill Shorten", role: "Named in connection — political" },
              { name: "Brett Butler / Able Point", role: "Institutional complicity" },
            ].map((person, i) => (
              <div key={i} className="bg-zinc-900 rounded-xl border border-red-900/40 px-4 py-3" data-testid={`named-party-${i}`}>
                <p className="text-white font-bold text-sm">{person.name}</p>
                <p className="text-red-300 text-xs mt-0.5">{person.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Download Section */}
        <section className="px-4 py-16 max-w-4xl mx-auto border-t border-zinc-800 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Download &amp; Distribute This Record</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            This document is a primary evidence exhibit in the barrandodger.com archive. It is blockchain-timestamped, freely distributable for public interest purposes, and forms part of the ICC and UNHCR submissions.
          </p>
          <ViralDownloadButton
            url="/documents/police-complicity-death-threat-documentation.pdf"
            label="Download — Police Complicity & Death Threat Documentation"
            filename="police-complicity-death-threat-documentation.pdf"
            trackSlug="police-complicity-death-threat-documentation"
            size="lg"
            className="bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl mx-auto"
            data-testid="button-download-main"
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="/free-ebooks" className="text-amber-400 underline hover:text-amber-300" data-testid="link-free-ebooks">← All Free Documents</a>
            <a href="/forensic-analysis" className="text-amber-400 underline hover:text-amber-300" data-testid="link-forensic-index">Forensic Analysis Index</a>
            <a href="/urgent-protection-request" className="text-red-400 underline hover:text-red-300" data-testid="link-sos">SOS — Urgent Protection Request</a>
          </div>

          {/* ABN copyright footer */}
          <div className="mt-10 rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1 max-w-xl mx-auto">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
              All Rights Reserved. Shared freely for accountability and public interest purposes.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
