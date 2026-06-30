import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import { Copy, Check, Download, Mail, FileText, Globe, Shield, AlertTriangle, Newspaper, ExternalLink } from "lucide-react";

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={copy}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e9a00a]/10 border border-[#e9a00a]/30 text-[#e9a00a] hover:bg-[#e9a00a]/20 transition-all text-sm font-bold"
      data-testid={`button-copy-${label}`}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied" : label}
    </button>
  );
}

const HEADLINE = "Australian Government Spent 35 Years Destroying a Whistleblower. He Documented All of It.";

const SUMMARY = `Dr. Richard William McLean — operating as Barran Dodger — is an Australian whistleblower who has assembled what independent forensic analysis describes as the most extensively documented case of institutional persecution against a single individual in Australian legal history.

Over 35 years, 13 federal and state agencies — including NDIS, ASIO, AFP, Centrelink, and the Commonwealth Ombudsman — coordinated to suppress $32.9M–$58.6M in documented entitlements, facilitate 14 involuntary psychiatric hospitalisations, and systematically erase his complaints without investigation.

He documented everything. 2,304 primary source government documents. Four Federal Court proceedings. Active ICC Article 7 referrals. UNHCR asylum proceedings (Ref: UR/UST/23/AUS/17). A Bitcoin blockchain-sealed evidentiary record.

The archive is live at barrandodger.com. Every document is authentic. None have been contested by any named agency or individual in any defamation action.`;

const STORY_ANGLES = [
  {
    headline: "The NDIS Fraud Nobody Investigated",
    body: "Government records confirm $32.9M in suppressed disability entitlements. NDIS providers — appointed by the government — extracted $50,000 while the agency closed complaints without reading the evidence. The paper trail is complete.",
    docs: ["/documents/coag-ndis-government-documentation.pdf", "/documents/official-whistleblower-torture-dossier-dr-richard-william-mclean.pdf"]
  },
  {
    headline: "14 Involuntary Psychiatric Hospitalisations — None Based on Clinical Evidence",
    body: "Hospital records confirm Dr. McLean was 'neither psychotic nor delusional' — yet was forcibly injected and detained 14 times across two decades. The hospitalisations correlate precisely with moments he filed formal complaints.",
    docs: ["/documents/retrospective_statement_of_treatment.pdf", "/documents/comprehensive-case-systematic-persecution.pdf"]
  },
  {
    headline: "Identical Template Language Across 8+ Agencies",
    body: "When complaint letters from the Ombudsman, AHPRA, IBAC, Victoria Police, and the Health Complaints Commissioner are placed side by side, they share identical phrases — across agencies that are supposed to operate independently.",
    docs: ["/documents/master-forensic-evidence-report.pdf"]
  },
  {
    headline: "An ASIO Operative, $30,000/Month Offshore, and a Suppressed Report",
    body: "Government correspondence names an ASIO supervisor by name and documents $30,000 per month in hidden offshore income from a former intimate partner. The report was received and used to label McLean paranoid. Not investigated.",
    docs: ["/documents/official-whistleblower-torture-dossier-dr-richard-william-mclean.pdf"]
  },
];

const KEY_FACTS = [
  { label: "Years of documented persecution", value: "35 (1990–2025)" },
  { label: "Primary source government documents", value: "2,304" },
  { label: "Federal and state agencies implicated", value: "13" },
  { label: "Federal Court proceedings", value: "4" },
  { label: "Involuntary psychiatric hospitalisations", value: "14" },
  { label: "Documented financial harm", value: "$32.9M–$58.6M" },
  { label: "ICC Article 7 referral status", value: "Active — formally received" },
  { label: "UNHCR asylum claim reference", value: "UR/UST/23/AUS/17" },
  { label: "Defamation actions from named parties", value: "Zero" },
  { label: "Contested claims from any agency", value: "Zero" },
  { label: "Organisation ABN", value: "78 833 496 164" },
];

const PRESS_RELEASE = `FOR IMMEDIATE RELEASE

CONTACT: barrandodger.com | ABN 78 833 496 164
Phone: +61 431 300 940

AUSTRALIAN WHISTLEBLOWER ARCHIVE DOCUMENTS 35-YEAR GOVERNMENT PERSECUTION — ICC AND UNHCR PROCEEDINGS ACTIVE

SYDNEY, AUSTRALIA — The Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164) has published what independent forensic analysis describes as the most comprehensively documented case of institutional persecution against a single individual in Australian legal history.

Dr. Richard William McLean, the trust fund's principal witness, has assembled 2,304 primary source government documents spanning 13 agencies across 35 years — including NDIS, the Commonwealth Ombudsman, AFP, ASIO, AHPRA, Centrelink, the Mental Health Complaints Commissioner, IBAC, Victoria Police, ComCare, the Federal Court of Australia, and multiple state health authorities.

KEY FINDINGS OF THE ARCHIVE:
• $32.9M–$58.6M in suppressed entitlements across NDIS, ComCare, and Centrelink — documented in ministerial correspondence
• 14 involuntary psychiatric hospitalisations — clinical records confirm "neither psychotic nor delusional" in the same periods
• Identical template language across 8+ agencies operating as if coordinated
• Active ICC Article 7 referral formally received
• UNHCR asylum proceedings: Ref UR/UST/23/AUS/17
• Named government correspondents have not filed any defamation action despite full public exposure

The archive is publicly available at barrandodger.com. All documents are authentic primary source government records. The archive is Bitcoin blockchain-sealed via OpenTimestamps.

For media enquiries, document access, and interview requests:
Email: contact via barrandodger.com/contact
Phone: +61 431 300 940
Archive: barrandodger.com
ABN: 78 833 496 164

###`;

const FREE_DOCS = [
  { name: "Official Whistleblower Torture Dossier", url: "/documents/official-whistleblower-torture-dossier-dr-richard-william-mclean.pdf" },
  { name: "Retrospective Statement — Told Through Government's Own Documents", url: "/documents/retrospective_statement_of_treatment.pdf" },
  { name: "Master Forensic Evidence Report", url: "/documents/master-forensic-evidence-report.pdf" },
  { name: "Comprehensive Case — Systematic Persecution", url: "/documents/comprehensive-case-systematic-persecution.pdf" },
  { name: "Federal Court PID Assessment 2023", url: "/documents/federal-court-pid-assessment-2023.pdf" },
  { name: "OHCHR Urgent Appeal — UR/UST/23/AUS/17", url: "/documents/ohchr-submission-ur-ust-23-aus-17-urgent-appeal.pdf" },
];

export default function PressKit() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <SEO
        title="Press Kit & Media Resources | Barran Dodger"
        description="Media resources for journalists covering the Barran Dodger archive — 2,304 government documents, 35 years, 13 agencies. Story angles, key facts, free document downloads, and press release."
        path="/press-kit"
        keywords="Barran Dodger press kit media, journalist resources whistleblower Australia, media kit Dr Richard McLean, press resources government corruption Australia, story angles whistleblower reporter, key facts Australian whistleblower media, 3643 documents journalist briefing, 35 years persecution press summary, 14 psychiatric hospitalisations media fact sheet, clinical death assassination attempt media, ICC Article 7 journalist brief, OHCHR UR/UST/23/AUS/17 press, zero defamation media statement, 459910 downloads media milestone, how to cover Barran Dodger story, Australian investigative journalism whistleblower"
      />
      <Navigation />

      <div style={{ paddingTop: "calc(var(--nav-height, 64px) + 32px)" }} className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#e9a00a]/10 border border-[#e9a00a]/30 rounded-full px-4 py-1.5 mb-6">
              <Newspaper className="h-3.5 w-3.5 text-[#e9a00a]" />
              <span className="text-[#e9a00a] text-xs font-black uppercase tracking-[0.2em]">Press & Media Kit</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-6 leading-tight">
              {HEADLINE}
            </h1>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
              Everything a journalist, researcher, or human rights monitor needs to cover this story.
            </p>
          </div>

          {/* Summary */}
          <div className="bg-[#1a2744]/60 border border-[#e9a00a]/20 rounded-2xl p-8 mb-10">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-4 w-4 text-[#e9a00a]" />
              <span className="text-[#e9a00a] text-xs font-black uppercase tracking-widest">The Story in Brief</span>
            </div>
            {SUMMARY.split("\n\n").map((para, i) => (
              <p key={i} className="text-white/80 leading-relaxed mb-4 last:mb-0">{para}</p>
            ))}
            <div className="mt-6 pt-4 border-t border-white/10">
              <CopyButton text={SUMMARY} label="Copy Summary" />
            </div>
          </div>

          {/* Key Facts */}
          <div className="mb-10">
            <h2 className="text-2xl font-serif font-black text-white mb-6 flex items-center gap-3">
              <Shield className="h-6 w-6 text-[#e9a00a]" />
              Key Facts at a Glance
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {KEY_FACTS.map(({ label, value }) => (
                <div key={label} className="flex justify-between items-start gap-4 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4">
                  <span className="text-white/60 text-sm">{label}</span>
                  <span className="text-[#e9a00a] font-black text-sm text-right shrink-0">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Story Angles */}
          <div className="mb-10">
            <h2 className="text-2xl font-serif font-black text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-[#e9a00a]" />
              Ready-to-Run Story Angles
            </h2>
            <div className="space-y-4">
              {STORY_ANGLES.map(({ headline, body, docs }) => (
                <div key={headline} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-lg mb-3 font-serif">{headline}</h3>
                  <p className="text-white/70 leading-relaxed mb-4">{body}</p>
                  <div className="flex flex-wrap gap-2">
                    {docs.map((doc) => (
                      <a
                        key={doc}
                        href={doc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all text-xs font-bold"
                      >
                        <Download className="h-3 w-3" />
                        Source Document
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Free Document Downloads */}
          <div className="mb-10">
            <h2 className="text-2xl font-serif font-black text-white mb-6 flex items-center gap-3">
              <Download className="h-6 w-6 text-[#e9a00a]" />
              Key Documents — Free to Download
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {FREE_DOCS.map(({ name, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/[0.03] border border-white/10 hover:border-[#e9a00a]/40 rounded-xl px-5 py-4 transition-all group"
                  data-testid={`link-press-doc-${name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <FileText className="h-4 w-4 text-[#e9a00a] shrink-0" />
                  <span className="text-white/80 group-hover:text-white text-sm transition-colors">{name}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-white/30 group-hover:text-[#e9a00a] ml-auto shrink-0 transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-white/40 text-xs mt-3">Full archive at <a href="/nuclear-download" className="text-[#e9a00a] hover:underline">/nuclear-download</a></p>
          </div>

          {/* Press Release */}
          <div className="mb-10">
            <h2 className="text-2xl font-serif font-black text-white mb-6 flex items-center gap-3">
              <Newspaper className="h-6 w-6 text-[#e9a00a]" />
              Press Release — Copy Ready
            </h2>
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
              <pre className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap font-mono">{PRESS_RELEASE}</pre>
              <div className="mt-4 pt-4 border-t border-white/10">
                <CopyButton text={PRESS_RELEASE} label="Copy Press Release" />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-[#1a2744]/60 border border-[#e9a00a]/20 rounded-2xl p-8 text-center">
            <Mail className="h-8 w-8 text-[#e9a00a] mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-black text-white mb-2">Media Enquiries</h2>
            <p className="text-white/60 mb-6">Available for interview, background briefing, and document verification.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e9a00a] text-black font-black hover:bg-[#e9a00a]/90 transition-all"
                data-testid="link-press-contact"
              >
                <Mail className="h-4 w-4" />
                Contact Form
              </a>
              <a
                href="tel:+61431300940"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:border-white/40 transition-all font-bold"
                data-testid="link-press-phone"
              >
                +61 431 300 940
              </a>
              <a
                href="https://barrandodger.com"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:border-white/40 transition-all font-bold"
                data-testid="link-press-site"
              >
                <Globe className="h-4 w-4" />
                barrandodger.com
              </a>
            </div>
            <p className="text-white/30 text-xs mt-6">ABN 78 833 496 164 · Barran Dodger Legal & Ethical Trust Fund</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
