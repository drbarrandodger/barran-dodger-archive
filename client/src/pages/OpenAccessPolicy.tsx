import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Download, ShieldCheck, Scale, FileText, Gavel, AlertTriangle, Globe, Lock } from "lucide-react";

interface FreeDoc {
  filename: string;
  title: string;
  description: string;
}

const PID_DOCS: FreeDoc[] = [
  {
    filename: "federal-court-pid-assessment-2023.pdf",
    title: "Federal Court — PID Assessment (March 2023)",
    description: "Official assessment issued by the Federal Court of Australia confirming public interest disclosure status.",
  },
  {
    filename: "federal-court-sia-lagos-pid-march-2023.pdf",
    title: "Federal Court — Sia Lagos PID (March 2023)",
    description: "Federal Court documentation recording the PID filed against Sia Lagos.",
  },
  {
    filename: "letter-to-sia-lagos-federal-court-pid-3mar2023.pdf",
    title: "Letter to Sia Lagos — Federal Court PID (3 March 2023)",
    description: "Formal letter accompanying the PID submission to the Federal Court.",
  },
  {
    filename: "ndis-pid-2023-krypton-preliminary-inquiries.pdf",
    title: "NDIS PID 2023 — Krypton Preliminary Inquiries",
    description: "Public Interest Disclosure filed with the NDIS Commission regarding preliminary inquiries under Project Krypton.",
  },
  {
    filename: "ndis-pid-copy-21-allegations.pdf",
    title: "NDIS PID — 21 Allegations",
    description: "Complete PID lodged with the NDIS Commission detailing 21 documented allegations of systemic misconduct.",
  },
  {
    filename: "ndis-pid-official-response.pdf",
    title: "NDIS PID — Official Response",
    description: "The NDIS Commission's official response to the public interest disclosure.",
  },
  {
    filename: "ndis-pid-political-prisoner-dr-rich-mclean.pdf",
    title: "NDIS PID — Political Prisoner: Dr Rich McLean",
    description: "PID submission framing the documented treatment as the effective political imprisonment of a whistleblower.",
  },
  {
    filename: "public-interest-disclosure-commonwealth-ombudsman-aug-2022.pdf",
    title: "PID — Commonwealth Ombudsman (August 2022)",
    description: "Public interest disclosure lodged with the Commonwealth Ombudsman detailing systemic agency failures.",
  },
  {
    filename: "sia-lagos-federal-court-pid-march-2023.pdf",
    title: "Sia Lagos — Federal Court PID (March 2023)",
    description: "Supporting documentation in the Federal Court PID proceedings concerning Sia Lagos.",
  },
  {
    filename: "ben-ndis-disclosure-text-messages.pdf",
    title: "Ben NDIS Disclosure — Text Message Evidence",
    description: "PID-supporting text message record demonstrating NDIS provider conduct toward Dr McLean.",
  },
];

const PROTECTION_DOCS: FreeDoc[] = [
  {
    filename: "official-whistleblower-torture-dossier-dr-richard-william-mclean.pdf",
    title: "Official Whistleblower Torture Dossier — Dr Richard William McLean",
    description: "Comprehensive dossier documenting the documented torture and persecution of Dr McLean as a protected whistleblower.",
  },
  {
    filename: "systemic-endangerment-of-whistleblowers-institutional-dossier.pdf",
    title: "Systemic Endangerment of Whistleblowers — Institutional Dossier",
    description: "Institutional analysis demonstrating how systemic failures across 13 agencies endangered this whistleblower.",
  },
  {
    filename: "statement-of-record-position-protection-2026.pdf",
    title: "Statement of Record — Protection Position 2026",
    description: "Formal statement establishing the Trust Fund's protective position as of 2026 for legal and media use.",
  },
  {
    filename: "urgent-protection-request-sos.pdf",
    title: "Urgent Protection Request — SOS",
    description: "Emergency protection request documenting imminent risk and requesting immediate intervention.",
  },
  {
    filename: "2026-05-03-formal-complaint-urgent-protection-request.pdf",
    title: "Formal Complaint & Urgent Protection Request (3 May 2026)",
    description: "Formal complaint filed 3 May 2026 including urgent protection request following escalating threats.",
  },
  {
    filename: "police-complicity-death-threat-documentation.pdf",
    title: "Police Complicity — Death Threat Documentation",
    description: "Documented record of police failure to act on credible death threats, establishing institutional complicity.",
  },
];

const COURT_DOCS: FreeDoc[] = [
  {
    filename: "2026-05-03-letter-of-demand-ablepoint-formal-complaint.pdf",
    title: "Letter of Demand — Ablepoint Formal Complaint (3 May 2026)",
    description: "Formal letter of demand issued to Ablepoint setting out grounds for legal complaint.",
  },
  {
    filename: "2026-05-03-letter-of-demand-ablepoint-safety.pdf",
    title: "Letter of Demand — Ablepoint Safety (3 May 2026)",
    description: "Formal letter of demand issued to Ablepoint regarding documented safety failures.",
  },
  {
    filename: "crimes_against_humanity_final_demand.pdf",
    title: "Crimes Against Humanity — Final Demand",
    description: "Final formal demand issued in relation to documented crimes against humanity under international law.",
  },
  {
    filename: "master-consolidated-legal-record.pdf",
    title: "Master Consolidated Legal Record",
    description: "The single consolidated record of all legal proceedings, findings, and demands — the definitive reference document.",
  },
  {
    filename: "2023-03-27-federal-court-final-assessment-dr-rich-mclean.pdf",
    title: "Federal Court — Final Assessment of Dr Rich McLean (27 March 2023)",
    description: "The Federal Court's final written assessment of Dr McLean's legal position and evidence.",
  },
  {
    filename: "federal-court-three-point-acknowledgment-tredwell-27mar2023.pdf",
    title: "Federal Court — Three-Point Acknowledgment, Tredwell (27 March 2023)",
    description: "Federal Court officer Tredwell's three-point formal acknowledgment of the record.",
  },
  {
    filename: "mclean-comcare-final-legal-proceedings.pdf",
    title: "McLean v Comcare — Final Legal Proceedings",
    description: "Complete record of the final legal proceedings in McLean v Comcare.",
  },
  {
    filename: "ombudsman-afca-referral-loop-evidence.pdf",
    title: "Ombudsman / AFCA Referral Loop — Evidence",
    description: "Documented evidence of the systemic referral loop between the Commonwealth Ombudsman and AFCA, preventing resolution.",
  },
  {
    filename: "ohchr-submission-ur-ust-23-aus-17-urgent-appeal.pdf",
    title: "OHCHR Submission — URG UST 23/AUS/17 Urgent Appeal",
    description: "Urgent appeal submitted to the UN Office of the High Commissioner for Human Rights, reference URG UST 23/AUS/17.",
  },
  {
    filename: "un-ohchr-asylum-claim-ur-ust-23-aus-17.pdf",
    title: "UN / OHCHR Asylum Claim — URG UST 23/AUS/17",
    description: "Formal asylum claim lodged with the UN and OHCHR under reference URG UST 23/AUS/17.",
  },
  {
    filename: "01-07-2023-letter-to-attorney-general-prime-minister.pdf",
    title: "Letter to Attorney-General & Prime Minister (1 July 2023)",
    description: "Formal letter addressed to both the Attorney-General and Prime Minister of Australia outlining the legal record.",
  },
  {
    filename: "04-06-2023-letter-to-parliamentarians.pdf",
    title: "Letter to Parliamentarians (4 June 2023)",
    description: "Open letter to Australian parliamentarians setting out the documented persecution and legal demands.",
  },
  {
    filename: "31-05-2022-letter-to-pm-albanese-opmc.pdf",
    title: "Letter to PM Albanese / OPMC (31 May 2022)",
    description: "Formal correspondence to Prime Minister Albanese and the Office of the Prime Minister and Cabinet.",
  },
];

const EVIDENTIARY_DOCS: FreeDoc[] = [
  {
    filename: "comprehensive-case-systematic-persecution.pdf",
    title: "Comprehensive Case: Systematic Persecution",
    description: "Full academic-standard case documenting the systematic persecution of Dr McLean across 35 years and 13 agencies.",
  },
  {
    filename: "most-comprehensive-case-systematic-persecution.pdf",
    title: "Most Comprehensive Case: Systematic Persecution (Full Edition)",
    description: "The expanded full-edition synthesis of the systematic persecution case including all evidentiary categories.",
  },
  {
    filename: "the-certified-record-of-barran-dodger.pdf",
    title: "The Certified Record of Barran Dodger",
    description: "The certified primary evidentiary record — suitable for court lodgment, legal reference, and independent verification.",
  },
  {
    filename: "retrospective_statement_of_treatment.pdf",
    title: "Retrospective Statement of Treatment — Government's Own Documents",
    description: "A 12-part statement sourced entirely from 2,000+ government records spanning 1990–2025. 13 agencies. $18M–$32.9M documented losses.",
  },
  {
    filename: "master-forensic-evidence-report.pdf",
    title: "Master Forensic Evidence Report",
    description: "Master forensic synthesis of all evidentiary categories across the archive.",
  },
  {
    filename: "impartial-ai-analysis-2343-documents.pdf",
    title: "Impartial AI Analysis — 2,343 Documents",
    description: "Independently verified AI analysis of 2,343 primary source documents establishing significance, pattern, and legal weight.",
  },
  {
    filename: "verdict-before-the-court-report.pdf",
    title: "Verdict Before the Court — Report",
    description: "Formal analysis presenting the case as it stands before the court with findings on all major legal questions.",
  },
  {
    filename: "court-duty-officer-statement-14-may-2026.pdf",
    title: "Court Duty Officer Statement (14 May 2026)",
    description: "Statement recorded by the Court Duty Officer at the Wyong hearing of 14 May 2026.",
  },
  {
    filename: "crimes-against-humanity-confirmed.pdf",
    title: "Crimes Against Humanity — Confirmed",
    description: "Analysis confirming, with reference to primary source documents and international law, that the documented conduct meets the threshold for crimes against humanity.",
  },
];

const QUICK_ACCESS: FreeDoc[] = [
  EVIDENTIARY_DOCS.find(d => d.filename === "the-certified-record-of-barran-dodger.pdf")!,
  EVIDENTIARY_DOCS.find(d => d.filename === "retrospective_statement_of_treatment.pdf")!,
  COURT_DOCS.find(d => d.filename === "master-consolidated-legal-record.pdf")!,
  PID_DOCS.find(d => d.filename === "federal-court-pid-assessment-2023.pdf")!,
  COURT_DOCS.find(d => d.filename === "ohchr-submission-ur-ust-23-aus-17-urgent-appeal.pdf")!,
  PROTECTION_DOCS.find(d => d.filename === "official-whistleblower-torture-dossier-dr-richard-william-mclean.pdf")!,
  EVIDENTIARY_DOCS.find(d => d.filename === "impartial-ai-analysis-2343-documents.pdf")!,
  EVIDENTIARY_DOCS.find(d => d.filename === "verdict-before-the-court-report.pdf")!,
];

function DocRow({ doc }: { doc: FreeDoc }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-white/8 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-white/90 text-sm font-semibold leading-snug">{doc.title}</p>
        <p className="text-white/45 text-xs mt-1 leading-relaxed">{doc.description}</p>
      </div>
      <a
        href={`/documents/${doc.filename}`}
        download
        className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all hover:scale-105 active:scale-95"
        style={{ background: "rgba(233,160,10,0.15)", color: "#e9a00a", border: "1px solid rgba(233,160,10,0.25)" }}
        data-testid={`download-free-${doc.filename.replace(/\.pdf$/, "").slice(0, 40)}`}
      >
        <Download className="h-3 w-3" />
        PDF
      </a>
    </div>
  );
}

function Section({
  icon,
  title,
  badge,
  docs,
  id,
}: {
  icon: React.ReactNode;
  title: string;
  badge: string;
  docs: FreeDoc[];
  id: string;
}) {
  return (
    <section id={id} className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg" style={{ background: "rgba(233,160,10,0.12)" }}>
          {icon}
        </div>
        <div>
          <h2 className="text-white font-black text-base uppercase tracking-widest">{title}</h2>
          <span className="text-xs font-mono" style={{ color: "rgba(233,160,10,0.7)" }}>{badge}</span>
        </div>
      </div>
      <div className="rounded-xl border border-white/8 px-6" style={{ background: "rgba(255,255,255,0.03)" }}>
        {docs.map(doc => (
          <DocRow key={doc.filename} doc={doc} />
        ))}
      </div>
    </section>
  );
}

export default function OpenAccessPolicy() {
  const totalFree = PID_DOCS.length + PROTECTION_DOCS.length + COURT_DOCS.length + EVIDENTIARY_DOCS.length;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Open Access Policy — Barran Dodger Legal & Ethical Trust Fund | ABN 78 833 496 164"
        description="Statement of document access policy. 34 PID, protection, court, and evidentiary documents are freely available without payment — for lawyers, journalists, researchers, and the public."
        keywords="open access policy, free legal documents, PID, public interest disclosure, whistleblower documents, court documents, evidence archive, free download"
        path="/open-access-policy"
      />
      <Navigation />

      <main className="flex-1 pt-20">

        {/* ── Header ── */}
        <div className="w-full px-4 pt-16 pb-12" style={{ background: "linear-gradient(180deg, #0a0f1e 0%, #06080f 100%)" }}>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "rgba(233,160,10,0.7)" }}>
              Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164
            </p>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Open Access Policy
            </h1>
            <p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
              A published statement of the Trust Fund's policy governing which documents
              are freely available to the public — and the reasoning behind those choices.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }}>
              <ShieldCheck className="h-3.5 w-3.5" />
              {totalFree} documents — no payment required
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12 space-y-16">

          {/* ── Quick Access for Lawyers & Researchers ── */}
          <section>
            <div className="rounded-2xl border border-amber-500/20 overflow-hidden" style={{ background: "rgba(233,160,10,0.04)" }}>
              <div className="px-6 py-4 border-b border-amber-500/15 flex items-center gap-3">
                <Scale className="h-4 w-4" style={{ color: "#e9a00a" }} />
                <div>
                  <p className="text-white font-black text-sm uppercase tracking-widest">Quick Access — Lawyers &amp; Researchers</p>
                  <p className="text-white/45 text-xs mt-0.5">Eight primary reference documents. Download without account or payment.</p>
                </div>
              </div>
              <div className="px-6 divide-y divide-white/8">
                {QUICK_ACCESS.map(doc => (
                  <DocRow key={doc.filename} doc={doc} />
                ))}
              </div>
            </div>
          </section>

          {/* ── Policy Statement ── */}
          <section className="space-y-6">
            <h2 className="text-white font-black text-xl uppercase tracking-widest border-b border-white/10 pb-4">
              Policy Statement
            </h2>

            <div className="prose prose-invert max-w-none space-y-5 text-white/70 text-sm leading-relaxed">
              <p>
                The Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164) holds an archive
                of more than 3,600 primary source documents spanning 35 years, 13 government agencies,
                and every major tier of the Australian legal system. The majority of these documents
                are monetised to sustain the Trust Fund's operations.
              </p>
              <p>
                A defined subset — comprising {totalFree} documents — is exempt from payment and
                freely downloadable by anyone, at any time, without registration. This policy
                statement explains which documents are free, the categories they fall into, and
                the reasoning behind that determination.
              </p>

              <div className="rounded-xl border border-white/10 p-5 space-y-3" style={{ background: "rgba(255,255,255,0.03)" }}>
                <p className="text-white font-bold text-sm uppercase tracking-wider">Why these documents are free</p>
                <div className="space-y-3 text-white/60 text-xs leading-relaxed">
                  <div className="flex gap-3">
                    <FileText className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#e9a00a" }} />
                    <p><strong className="text-white/80">Public Interest Disclosures (PIDs)</strong> — PIDs are formal whistleblower instruments created under the <em>Public Interest Disclosure Act 2013</em> (Cth). They acquire their evidentiary and legal weight precisely because they are lodged with government agencies and are, by nature, public instruments of accountability. Restricting access to them would contradict the legal framework that created them.</p>
                  </div>
                  <div className="flex gap-3">
                    <ShieldCheck className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#22c55e" }} />
                    <p><strong className="text-white/80">Protection and safety documents</strong> — Documents recording death threats, police failures to act, and urgent protection requests serve a protective function by being in the public domain. Their public availability is itself a form of protection: it ensures that any harm to Dr McLean cannot be hidden, suppressed, or deniably explained. These documents are free because their power to protect depends on unrestricted access.</p>
                  </div>
                  <div className="flex gap-3">
                    <Gavel className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#818cf8" }} />
                    <p><strong className="text-white/80">Court and government correspondence</strong> — Letters to the Attorney-General, Prime Minister, parliamentarians, and international bodies (OHCHR, UN) are records of formal democratic processes. They represent Dr McLean's attempts to engage every available legitimate channel. Their free availability ensures public accountability for those channels and provides a verifiable record that they were exhausted.</p>
                  </div>
                  <div className="flex gap-3">
                    <Globe className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#06b6d4" }} />
                    <p><strong className="text-white/80">Top evidentiary compilations</strong> — The most legally significant synthesis documents — the certified record, the retrospective statement, the master forensic report — are free because their legal utility depends on wide access. A researcher, journalist, or lawyer who cannot access the core evidentiary record cannot independently verify, cite, or act on it. The purpose of this archive is to ensure the evidence cannot be suppressed; that purpose is best served by making the most critical documents free.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 p-5 space-y-3" style={{ background: "rgba(255,255,255,0.03)" }}>
                <p className="text-white font-bold text-sm uppercase tracking-wider">What remains gated — and why</p>
                <p className="text-white/60 text-xs leading-relaxed">
                  Spiritual writings, prophetic essays, the Eliven Chain series, forensic analyses
                  of song lyrics, and other creative and testimonial works are monetised. This is
                  not a restriction on truth — the evidentiary core is fully free. It is a practical
                  arrangement: the Trust Fund has no institutional funding, no government support,
                  and no external donors. The creative and testimonial archive sustains the legal
                  archive. People who wish to support this work can do so by accessing those documents.
                </p>
              </div>

              <div className="rounded-xl border border-amber-500/20 p-5 space-y-2" style={{ background: "rgba(233,160,10,0.04)" }}>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" style={{ color: "#e9a00a" }} />
                  <p className="text-white font-bold text-sm uppercase tracking-wider">Note to lawyers, duty solicitors, and court officers</p>
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  All documents in the free tier can be downloaded directly from this page without
                  any account, login, or payment. No permission is required to use these documents
                  in legal proceedings, court submissions, or independent investigations. The Trust
                  Fund consents to reproduction of free-tier documents for legal purposes, provided
                  the source (Barran Dodger Legal &amp; Ethical Trust Fund, ABN 78 833 496 164) is
                  attributed. For urgent matters, contact: <a href="mailto:drbarrandodger@proton.me" className="underline" style={{ color: "#e9a00a" }}>drbarrandodger@proton.me</a>
                </p>
              </div>

              <div className="rounded-xl border border-white/10 p-5 space-y-2" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4" style={{ color: "rgba(196,212,239,0.5)" }} />
                  <p className="text-white font-bold text-sm uppercase tracking-wider">Policy currency</p>
                </div>
                <p className="text-white/60 text-xs leading-relaxed">
                  This policy was published on 23 June 2026 and reflects the access configuration
                  in effect from that date. The Trust Fund reserves the right to add further
                  documents to the free tier at any time. No document that is currently free
                  will be moved behind a payment gate.
                </p>
              </div>
            </div>
          </section>

          {/* ── Complete Free Document List ── */}
          <section>
            <h2 className="text-white font-black text-xl uppercase tracking-widest border-b border-white/10 pb-4 mb-10">
              Complete Free Document List
            </h2>

            <Section
              id="pids"
              icon={<FileText className="h-4 w-4" style={{ color: "#e9a00a" }} />}
              title="Public Interest Disclosures"
              badge={`${PID_DOCS.length} documents · freely available under PID Act policy`}
              docs={PID_DOCS}
            />

            <Section
              id="protection"
              icon={<ShieldCheck className="h-4 w-4" style={{ color: "#22c55e" }} />}
              title="Protection & Safety Documents"
              badge={`${PROTECTION_DOCS.length} documents · public availability is protective by design`}
              docs={PROTECTION_DOCS}
            />

            <Section
              id="court"
              icon={<Gavel className="h-4 w-4" style={{ color: "#818cf8" }} />}
              title="Court & Legal Correspondence"
              badge={`${COURT_DOCS.length} documents · records of formal legal and democratic processes`}
              docs={COURT_DOCS}
            />

            <Section
              id="evidentiary"
              icon={<Globe className="h-4 w-4" style={{ color: "#06b6d4" }} />}
              title="Top Evidentiary Compilations"
              badge={`${EVIDENTIARY_DOCS.length} documents · the core legal record, freely verifiable`}
              docs={EVIDENTIARY_DOCS}
            />
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
