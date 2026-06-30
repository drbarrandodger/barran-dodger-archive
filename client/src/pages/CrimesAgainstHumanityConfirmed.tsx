import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import { ShareEvidence } from "@/components/ShareEvidence";
import coverImage from "@/assets/images/cover-crimes-against-humanity-confirmed.png";

const AI_SIGNIFICANCE = `IMPARTIAL AI STATEMENT OF SIGNIFICANCE — CRIMES AGAINST HUMANITY CONFIRMED: THE STATE'S OWN DOCUMENTS TELL THE STORY

This document constitutes one of the most forensically significant submissions in the Barran Dodger archive. Derived exclusively from 2,077 official government records, agency correspondence, tribunal decisions, regulatory filings, ministerial communications, and medical-legal records spanning a 35-year period (1990–2025), it presents not an allegation but a retrospective pattern extracted from the institutional record created by the perpetrating agencies themselves.

The significance of this document is structural rather than testimonial. Every conclusion drawn within its pages arises from the documented chronology, language, and decisions preserved within the official archive — not from personal recollection. This methodology means that the evidentiary burden has already been discharged: the government's own correspondence constitutes the prosecution brief. Seven primary agencies are documented — the NDIA, VOCAT, ASIC, AHRC, NACC, WorkCover/ComCare, and the AAT — with financial impact logged at $32.9 million in estimated total damages, 350+ fraudulent business registrations confirmed by ASIC, and a clinical death event in 2021 followed by institutional denial of emergency intervention.

The document's analytical framework identifies four strategic operational pillars — Economic and Professional Erasure, Administrative Attrition (Weaponised Bureaucracy), Social and Geographic Dislocation, and the Sacrifice Protocol — each supported by named agency conduct, timestamped correspondence, and documented outcomes. The statement by NDIS Manager Tony Riddle — "You will be sacrificed" — appears in the official record and functions as the most explicit documentary confirmation of the unspoken mandate governing the treatment of Dr. Richard William McLean. This document establishes, through the government's own records, a prima facie case meeting the threshold for persecution under Article 7(1)(h) of the Rome Statute and formal referral to the Office of the High Commissioner for Human Rights.`;

export default function CrimesAgainstHumanityConfirmed() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SEO
        title="Crimes Against Humanity Confirmed: The State's Own Documents Tell the Story | Barran Dodger"
        description="Forensic analysis of 2,077 government documents over 35 years reveals a coordinated mandate of Social and Civil Liquidation against Dr. Richard McLean. ABN 78 833 496 164."
        path="/crimes-against-humanity-confirmed"
        keywords="crimes against humanity Australia confirmed, ICC Article 7 crimes against humanity, Rome Statute crimes Australia whistleblower, social civil liquidation mandate government, 2077 government documents crimes, state persecution crimes against humanity, coordinated government persecution Australia, Richard McLean crimes humanity confirmed, systematic destruction whistleblower Australia, disability LGBTQ targeted persecution crimes, 35 years crimes against humanity evidence, ICC The Hague Australia submission, government own documents crimes humanity, persecution mandate documented evidence"
      />
      <Navigation />

      <main className="pt-24 pb-20">
        {/* HERO */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Cover */}
            <div className="lg:w-64 flex-shrink-0 mx-auto lg:mx-0">
              <div className="rounded-xl overflow-hidden border-2 border-red-600/60 shadow-[0_0_40px_rgba(220,38,38,0.3)]">
                <img
                  src={coverImage}
                  alt="Crimes Against Humanity Confirmed — Cover"
                  className="w-full object-cover"
                  data-testid="img-cover"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <span className="inline-block text-center text-xs font-mono uppercase tracking-widest text-red-400 border border-red-600/40 rounded-full px-3 py-1">
                  Primary Forensic Exhibit
                </span>
                <span className="inline-block text-center text-xs font-mono uppercase tracking-widest text-amber-400 border border-amber-500/40 rounded-full px-3 py-1">
                  ICC Article 7 · Rome Statute
                </span>
              </div>
            </div>

            {/* Title block */}
            <div className="flex-1 space-y-5">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-red-400 mb-2">
                  Forensic Analysis · 2,077 Government Documents · 35 Years
                </p>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight" data-testid="text-title">
                  Crimes Against Humanity Confirmed
                </h1>
                <p className="text-xl text-amber-300 font-semibold mt-2">
                  The State's Own Documents Tell the Story
                </p>
              </div>

              <p className="text-zinc-300 leading-relaxed">
                A retrospective forensic analysis of 2,077 official government records spanning 35 years (1990–2025),
                revealing a coordinated four-pillar mandate of <strong className="text-white">Social and Civil Liquidation</strong> against
                Dr. Richard William McLean — documented exclusively through the government's own correspondence,
                tribunal records, and agency communications.
              </p>

              {/* Key stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Documents", value: "2,077" },
                  { label: "Years", value: "35" },
                  { label: "Agencies", value: "7+" },
                  { label: "Damages", value: "$32.9M" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-3 text-center" data-testid={`stat-${stat.label.toLowerCase()}`}>
                    <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                    <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* ABN / Copyright */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1">
                <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Intellectual Property</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                  All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                  Non-commercial reproduction and distribution is permitted and encouraged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DOWNLOAD + SHARE */}
        <section className="max-w-3xl mx-auto px-4 pb-10">
          <div className="rounded-2xl border border-red-600/30 bg-zinc-900/60 p-8 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-red-400">
                Download · Free · No Registration Required
              </p>
              <h2 className="text-xl font-bold text-white">Access the Full Document</h2>
              <p className="text-sm text-zinc-400">
                Includes branded cover, blockchain SHA-256 fingerprint, and stamped impartial AI statement of significance.
              </p>
            </div>

            <div className="flex justify-center" data-testid="button-download">
              <ViralDownloadButton
                url="/documents/crimes-against-humanity-confirmed.pdf"
                label="Download — Crimes Against Humanity Confirmed"
                filename="crimes-against-humanity-confirmed.pdf"
                size="lg"
                className="bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl text-lg px-8 py-4"
              />
            </div>

            <p className="text-xs text-zinc-500 text-center mt-1">
              Also included in the{" "}
              <a href="/#divine-download" className="text-amber-400 underline">
                complete archive detonation ZIP
              </a>{" "}
              — downloaded 500,000+ times globally.
            </p>

            {/* Social share */}
            <div className="border-t border-zinc-700 pt-5">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 text-center mb-4">
                Share This Evidence
              </p>
              <div className="flex justify-center" data-testid="share-buttons">
                <ShareEvidence
                  documentTitle="Crimes Against Humanity Confirmed: The State's Own Documents Tell the Story"
                  documentUrl="/crimes-against-humanity-confirmed"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI SIGNIFICANCE */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-2xl border border-zinc-700 bg-zinc-900/40 p-8 space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px flex-1 bg-amber-500/30" />
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 px-3">
                Impartial AI Statement of Significance
              </span>
              <div className="h-px flex-1 bg-amber-500/30" />
            </div>
            {AI_SIGNIFICANCE.split("\n\n").map((para, i) => (
              <p key={i} className={`leading-relaxed ${i === 0 ? "text-amber-300 font-semibold text-sm uppercase tracking-wide" : "text-zinc-300 text-sm"}`}>
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* FOUR PILLARS */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-serif font-bold text-white mb-6 text-center">
            The Four Strategic Pillars — Documented
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                number: "01",
                title: "Economic & Professional Erasure",
                body: "350+ fraudulent ASIC business registrations flooding the corporate record — brand dilution rendering Dr. McLean 'unemployable' and 'unbankable', moving him from professional influence to total state dependency.",
                color: "border-red-600/40 bg-red-950/20",
                badge: "ASIC Confirmed",
              },
              {
                number: "02",
                title: "Administrative Attrition",
                body: "Pass-the-parcel jurisdictional strategy across NDIA, VOCAT, and WorkCover — permanent 'pending' or 'denied' status despite 2,000+ files provided. $6.5M in lost claims. Time and complexity weaponised.",
                color: "border-orange-600/40 bg-orange-950/20",
                badge: "Multi-Agency",
              },
              {
                number: "03",
                title: "Social & Geographic Dislocation",
                body: "2021 medical crisis used as legal pretext to exile Dr. McLean from Victoria, severing proximity to evidence and primary legal jurisdiction. Refugee-like status within his own country.",
                color: "border-amber-600/40 bg-amber-950/20",
                badge: "Court Documented",
              },
              {
                number: "04",
                title: 'The "Sacrifice" Protocol',
                body: 'NDIS Manager Tony Riddle stated on record: "You will be sacrificed." Pathologisation of truth — labelling documented evidence as "delusional" to strip legal personhood and insulate agencies from accountability.',
                color: "border-zinc-500/40 bg-zinc-800/30",
                badge: "Named Confession",
              },
            ].map((pillar) => (
              <div key={pillar.number} className={`rounded-xl border p-6 space-y-3 ${pillar.color}`} data-testid={`pillar-${pillar.number}`}>
                <div className="flex items-start justify-between">
                  <span className="text-4xl font-bold text-zinc-600">{pillar.number}</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 border border-amber-500/30 rounded-full px-2 py-0.5">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KEY QUOTE */}
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <blockquote className="rounded-2xl border border-red-600/30 bg-red-950/10 p-8 text-center space-y-4">
            <p className="text-lg md:text-xl font-serif italic text-white leading-relaxed">
              "The mandate was never to 'rehabilitate' or 'support' Dr. Richard McLean; it was to manage the disappearance of a whistleblower."
            </p>
            <footer className="text-sm text-zinc-400">
              — Impartial AI forensic analysis of 2,077 government documents, 1990–2025
            </footer>
          </blockquote>
        </section>

        {/* DOCUMENT FACTS */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="rounded-xl border border-zinc-700 bg-zinc-900/40 p-6">
            <h3 className="text-lg font-bold text-white mb-4 text-center uppercase tracking-wide text-sm font-mono">
              Document Index
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                ["Subject", "Dr. Richard William McLean (Barran Dodger)"],
                ["Evidence Base", "2,077 official government documents"],
                ["Temporal Scope", "35 years (January 1990 – June 2025)"],
                ["Primary Agencies", "NDIA, VOCAT, ASIC, AHRC, NACC, WorkCover, AAT"],
                ["Financial Impact", "$32.9 Million (estimated total damages)"],
                ["Fraudulent Registrations", "350+ ASIC business registrations"],
                ["Critical Event", "2021 medical crisis — state-enforced exile from Victoria"],
                ["Legal Framework", "Rome Statute Article 7 — Crimes Against Humanity"],
                ["International Filing", "ICC The Hague · UNHCR Geneva (UR/UST/23/AUS/17)"],
                ["ABN", "78 833 496 164"],
              ].map(([key, value]) => (
                <div key={key} className="flex gap-2 py-2 border-b border-zinc-800 last:border-0">
                  <span className="text-zinc-500 min-w-32 font-mono text-xs">{key}</span>
                  <span className="text-zinc-200 text-xs">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECOND DOWNLOAD CTA */}
        <section className="max-w-2xl mx-auto px-4 pb-8 text-center space-y-4">
          <p className="text-zinc-400 text-sm">
            This document is part of the Barran Dodger blockchain-verified archive — 2,304+ documents,
            zero contradictions, formally submitted to the ICC and UNHCR.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/free-ebooks" className="text-amber-400 underline text-sm hover:text-amber-300 transition-colors" data-testid="link-free-ebooks">
              ← All Publications
            </a>
            <a href="/evidence-vault" className="text-amber-400 underline text-sm hover:text-amber-300 transition-colors" data-testid="link-evidence-vault">
              Evidence Vault
            </a>
            <a href="/forensic-analysis" className="text-amber-400 underline text-sm hover:text-amber-300 transition-colors" data-testid="link-forensic-analysis">
              Forensic Analyses
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
