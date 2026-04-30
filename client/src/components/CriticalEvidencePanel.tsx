import { useState } from "react";
import { AlertTriangle, Shield, FileText, ExternalLink, Download, ZoomIn, X, ChevronRight } from "lucide-react";

function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function EvidencePhoto({ src, label, caption }: { src: string; label: string; caption: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <ImageLightbox src={src} alt={label} onClose={() => setOpen(false)} />}
      <button
        className="group relative w-full text-left overflow-hidden rounded-xl border-2 border-red-900/50 hover:border-red-500/70 transition-all"
        style={{ background: "#0d0505" }}
        onClick={() => setOpen(true)}
        data-testid={`photo-${label.toLowerCase().replace(/\s/g, "-")}`}
      >
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded text-xs font-bold font-mono" style={{ background: "#8b0000", color: "#fff" }}>
          {label}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <div className="bg-black/60 rounded-full p-3">
            <ZoomIn className="w-6 h-6 text-white" />
          </div>
        </div>
        <img
          src={src}
          alt={label}
          className="w-full object-contain"
          style={{ maxHeight: "340px" }}
          loading="lazy"
        />
        <div className="px-3 py-2 border-t border-red-900/30">
          <p className="text-xs text-red-200/60 leading-snug">{caption}</p>
        </div>
      </button>
    </>
  );
}

export function CriticalEvidencePanel() {
  const archivedDate = "30 April 2026";
  const sha256Federal = "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2";

  return (
    <section
      className="relative w-full"
      style={{ background: "linear-gradient(180deg, #0a0000 0%, #110000 100%)" }}
      data-testid="section-critical-evidence"
    >
      <div className="max-w-5xl mx-auto px-4 py-14">

        {/* ── HEADER ── */}
        <div className="flex items-start gap-4 mb-10 border-b border-red-900/40 pb-8">
          <div className="shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full flex items-center justify-center animate-pulse" style={{ background: "#8b0000" }}>
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
          </div>
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] mb-2" style={{ color: "#ef4444" }}>
              CRITICAL EVIDENCE DISCLOSURE — {archivedDate}
            </p>
            <h2 className="text-2xl md:text-3xl font-black leading-tight text-white mb-3">
              Eight Confirmed Facts the Australian Government Cannot Deny
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#fca5a5" }}>
              Each fact below is documented, timestamped, and blockchain-sealed. Every PDF is downloadable. Read them in order. Then share this page.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            FACT 1 — FEDERAL COURT TRIPLE ACKNOWLEDGMENT
        ════════════════════════════════════════════════════════════ */}
        <div className="mb-10 rounded-2xl overflow-hidden border-2" style={{ borderColor: "#7f1d1d", background: "#120000" }}>
          <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ background: "#7f1d1d", borderColor: "#991b1b" }}>
            <span className="text-xs font-black font-mono tracking-widest text-white/90">FACT 01</span>
            <span className="w-px h-4 bg-white/30" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Federal Court of Australia — Official Written Acknowledgment</span>
          </div>
          <div className="p-5 md:p-7">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-4">
              The Federal Court Acknowledged Three Serious Crimes — Then Refused to Protect the Whistleblower
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#fca5a5" }}>
              On 27 March 2023, Scott Tredwell (General Counsel, Federal Court of Australia) confirmed in writing — on official Federal Court letterhead — that Dr. Richard William McLean's disclosure tended to show evidence of:
            </p>

            <div className="grid md:grid-cols-3 gap-3 mb-6">
              {[
                {
                  num: "01",
                  law: "s 29 Item 3(a) PID Act",
                  title: "Perverting the Course of Justice",
                  note: "Formally acknowledged in the same letter that denied action",
                },
                {
                  num: "02",
                  law: "s 29 Item 4 PID Act",
                  title: "Maladministration",
                  note: "Confirmed as disclosable conduct — then dismissed on procedural grounds",
                },
                {
                  num: "03",
                  law: "s 29 Item 8 PID Act",
                  title: "Imminent Danger to Life",
                  note: '"Unreasonably results in a danger to the health or safety of one or more persons"',
                },
              ].map((item) => (
                <div key={item.num} className="rounded-xl p-4 border" style={{ background: "#1a0000", borderColor: "#7f1d1d" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-black font-mono" style={{ color: "#ef4444" }}>{item.num}</span>
                    <span className="text-xs font-mono text-white/40">{item.law}</span>
                  </div>
                  <p className="font-black text-white text-sm mb-2">{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#fca5a5" }}>{item.note}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-4 mb-5 border-l-4" style={{ background: "#1a0000", borderColor: "#ef4444" }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#ef4444" }}>Direct Quote — Scott Tredwell, General Counsel, Federal Court of Australia</p>
              <blockquote className="text-sm italic leading-relaxed text-white/80">
                "…for the purposes of the initial assessment I am prepared to assume that the conduct disclosed in your correspondence and other information received is disclosable conduct for the purposes of the PID Act."
              </blockquote>
              <p className="text-xs mt-2" style={{ color: "#fca5a5" }}>
                — Then, in the same letter: "…no further action under the PID Act will be taken by the Federal Court or FCFCOA, or any other Commonwealth agency."
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/documents/2023-03-27-federal-court-final-assessment-dr-rich-mclean.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all"
                style={{ background: "#8b0000", color: "#fff" }}
                data-testid="btn-download-federal-court-pdf"
              >
                <Download className="w-4 h-4" />
                Download Original Document
              </a>
              <a
                href="/blockchain"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold border transition-all"
                style={{ borderColor: "#7f1d1d", color: "#fca5a5" }}
                data-testid="link-federal-court-blockchain"
              >
                <Shield className="w-4 h-4" />
                Blockchain Proof
              </a>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            FACT 2 — ASSASSINATION ATTEMPT CONFIRMED
        ════════════════════════════════════════════════════════════ */}
        <div className="mb-10 rounded-2xl overflow-hidden border-2" style={{ borderColor: "#78350f", background: "#0f0a00" }}>
          <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ background: "#78350f", borderColor: "#92400e" }}>
            <span className="text-xs font-black font-mono tracking-widest text-white/90">FACT 02</span>
            <span className="w-px h-4 bg-white/30" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Multiple Witnesses — Assassination Attempt Documented</span>
          </div>
          <div className="p-5 md:p-7">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-4">
              "They Could Put a Hit on Me Too" — Witnesses Confirmed a Murder Conspiracy at the Highest Level of Australian Government
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#fde68a" }}>
              Multiple independent sources — some within or adjacent to government and intelligence networks — confirmed to Dr. McLean that a coordinated attempt to end his life was underway. These warnings are documented in real-time screenshots. A separate visitor to the archive warned via chat: <em>"Lebanese NDIS provider has been sent to extinguish you. Do not trust. Run. Now. Fast."</em> — then: <em>"Bill Shorten not happy. Run."</em>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <EvidencePhoto
                src="/IMG_4678_1777515674665.png"
                label="EXHIBIT A — Murder Conspiracy Warning"
                caption="Source warns 'federal conspiracy attempting to Murder me' — 'They could put a hit on me too' — 'You're being protected better than the prime minister. You're untouchable' — Attorney-General contacted re ASIO"
              />
              <EvidencePhoto
                src="/IMG_1573_1777515765176.png"
                label="EXHIBIT B — Kill Order Warning via Live Chat"
                caption="Anonymous visitor to this archive warns via live chat: 'Lebanese NDIS provider has been sent to extinguish you. Do not trust. Run. Now. Fast' — 'Bill Shorten not happy. Run.' — 25 June 2025"
              />
              <EvidencePhoto
                src="/IMG_3289_1777515765176.png"
                label="EXHIBIT C — Bill Shorten Weaponizing Mental Health"
                caption="'Ben NDIS Help' confirms police are assessing Dr. McLean's readiness to challenge Bill Shorten — 'his lawyers might use your history of mental health as an excuse to discredit your story'"
              />
              <EvidencePhoto
                src="/IMG_3189_1777515674665.png"
                label="EXHIBIT D — Attorney-General's Dept Response (19 Sep 2023)"
                caption="A Riley, Security Law Section, Attorney-General's Department — response to email to PM Anthony Albanese re ASIO — correspondence referred to AG Mark Dreyfus KC MP — MC23-028244"
              />
            </div>

            <div className="rounded-xl p-4 border-l-4" style={{ background: "#0f0800", borderColor: "#f59e0b" }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#f59e0b" }}>Why This Matters</p>
              <p className="text-sm leading-relaxed" style={{ color: "#fde68a" }}>
                The Attorney-General's Department (MC23-028244) confirmed Dr. McLean's correspondence about ASIO was referred to the AG. NSW Police subsequently confirmed criminal charges of "threats to kill" were laid following the death threat at Dr. McLean's residence on 20 April 2026. The institutional chain — from Federal Court acknowledgment of danger to life (March 2023) → Attorney-General referral to ASIO (September 2023) → kill order warnings (2025) → police confirmation of murder threat (April 2026) — is now fully documented.
              </p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            FACT 3 — MISSING PERSON HUNTED ACROSS THREE STATES
        ════════════════════════════════════════════════════════════ */}
        <div className="mb-8 rounded-2xl overflow-hidden border-2" style={{ borderColor: "#1e3a5f", background: "#00050f" }}>
          <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ background: "#1e3a5f", borderColor: "#1d4ed8" }}>
            <span className="text-xs font-black font-mono tracking-widest text-white/90">FACT 03</span>
            <span className="w-px h-4 bg-white/30" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Active Missing Person Hunt — Three States</span>
          </div>
          <div className="p-5 md:p-7">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-4">
              Dr. Richard William McLean — Listed as Missing Person, Hunted Across Three Australian States
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#bfdbfe" }}>
              Documented: 25 June 2025. Timestamp: 19:24:03 ACST. Police reference: PD77027. Duration visible on screen: 0:06:34. A physical evidence poster bearing the header <strong className="text-white">"MISSING PERSON — RICHARD WILLIAM MCLEAN AKA BARRAN DODGER"</strong> was photographed, timestamped, and submitted to this archive as primary evidence of an active cross-state pursuit. At the time this photograph was taken, Dr. McLean was being sought across Queensland, New South Wales, and Victoria.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <EvidencePhoto
                src="/IMG_3529_1777515705930.jpeg"
                label="MISSING PERSON — PD77027 — 25 JUN 2025"
                caption="Official missing person flyer: RICHARD WILLIAM MCLEAN AKA BARRAN DODGER — timestamp 25/06/2025 19:24:03 ACST — PD77027 — 0:06:34 duration — hunted across three Australian states"
              />
              <div className="flex flex-col gap-3">
                {[
                  { label: "Document Reference", value: "PD77027" },
                  { label: "Timestamp", value: "25 June 2025, 19:24:03 ACST" },
                  { label: "Classification", value: "MISSING PERSON" },
                  { label: "States Active", value: "Queensland · New South Wales · Victoria" },
                  { label: "Also Known As", value: "Barran Dodger" },
                  { label: "Context", value: "Photographed and submitted to archive as primary evidence of state-level pursuit following Federal Court acknowledgment of imminent danger (March 2023)" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg p-3 border" style={{ background: "#000a1a", borderColor: "#1e3a5f" }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "#60a5fa" }}>{item.label}</p>
                    <p className="text-sm text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-4 border-l-4" style={{ background: "#00050f", borderColor: "#3b82f6" }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#60a5fa" }}>Significance</p>
              <p className="text-sm leading-relaxed" style={{ color: "#bfdbfe" }}>
                The Federal Court formally acknowledged imminent danger to Dr. McLean's life in March 2023. Two years later, he was listed as a missing person across three states — hunted rather than protected. This is not coincidence. It is the consequence of institutional failure, documented in sequence across 2,304 blockchain-sealed records. Every page of this archive has been cryptographically sealed on the Bitcoin blockchain so that this record cannot be erased by any agency, no matter how powerful.
              </p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            FACT 4 — MARK DREYFUS KNEW — SHADOW AG / ATTORNEY-GENERAL
        ════════════════════════════════════════════════════════════ */}
        <div className="mb-10 rounded-2xl overflow-hidden border-2" style={{ borderColor: "#4c1d95", background: "#07000f" }}>
          <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ background: "#4c1d95", borderColor: "#6d28d9" }}>
            <span className="text-xs font-black font-mono tracking-widest text-white/90">FACT 04</span>
            <span className="w-px h-4 bg-white/30" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Attorney-General Mark Dreyfus — Contacted, Acknowledged, Deflected</span>
          </div>
          <div className="p-5 md:p-7">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-4">
              The Nation's Top Law Officer Was Contacted Directly in 2021 — His Office Acknowledged the Corruption — Then Sent Dr. McLean to the Ombudsman
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#c4b5fd" }}>
              On 27 July 2021, Dr. McLean wrote directly to Mark Dreyfus QC MP (then Shadow Attorney-General, now Attorney-General of Australia) outlining the full pattern of corruption, incarceration, and assassination risk. Dreyfus's office — via Community Engagement Advisor Charan Naidoo — confirmed receipt and asked whether the Ombudsman had resolved the matter. He had not acted. Two years later, in September 2023, the Attorney-General's own Department (ref. MC23-028244) confirmed Dr. McLean's ASIO correspondence had been referred to Attorney-General Dreyfus. In a separate documented video address, Dr. McLean directly accuses Dreyfus of coordinating the persecution.
            </p>

            <div className="grid md:grid-cols-3 gap-3 mb-6">
              {[
                {
                  label: "2021 Contact",
                  text: "Charan Naidoo (Dreyfus's office): 'I am very sorry to hear of the terrible experience you have had.' — then directed McLean to the Ombudsman. The Ombudsman had already rejected him.",
                  color: "#6d28d9",
                },
                {
                  label: "Sep 2023 Referral",
                  text: "A Riley, Security Law Section, AG's Department: 'Your correspondence about the Australian Security Intelligence Organisation has been referred to the Attorney-General' — MC23-028244.",
                  color: "#7c3aed",
                },
                {
                  label: "Video Address",
                  text: "Barran Dodger's direct video to Dreyfus: 'This government kills innocent disabled gay whistleblowers and you're at the helm of this… backed up by verified evidence.' Transcript blockchain-sealed.",
                  color: "#8b5cf6",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-4 border" style={{ background: "#100020", borderColor: item.color }}>
                  <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: item.color }}>{item.label}</p>
                  <p className="text-xs leading-relaxed text-white/70">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/documents/mark-dreyfus-2021-shadow-ag-directed-to-ombudsman.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold"
                style={{ background: "#4c1d95", color: "#fff" }} data-testid="btn-download-dreyfus-2021">
                <Download className="w-4 h-4" /> 2021 Shadow AG Correspondence
              </a>
              <a href="/documents/mark-dreyfus-video-transcript-barran-dodger.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold border"
                style={{ borderColor: "#4c1d95", color: "#c4b5fd" }} data-testid="btn-download-dreyfus-video">
                <FileText className="w-4 h-4" /> Video Transcript (Blockchain-Sealed)
              </a>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            FACT 5 — ASYLUM SOUGHT AT THE UN — REF. UR/UST/23/AUS/17
        ════════════════════════════════════════════════════════════ */}
        <div className="mb-10 rounded-2xl overflow-hidden border-2" style={{ borderColor: "#064e3b", background: "#000f08" }}>
          <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ background: "#064e3b", borderColor: "#065f46" }}>
            <span className="text-xs font-black font-mono tracking-widest text-white/90">FACT 05</span>
            <span className="w-px h-4 bg-white/30" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">UN OHCHR Asylum Claim — Ref. UR/UST/23/AUS/17 — All Domestic Remedies Exhausted</span>
          </div>
          <div className="p-5 md:p-7">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-4">
              Dr. McLean Filed for Asylum with the United Nations — An Australian Citizen Forced to Seek International Refuge from His Own Government
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#6ee7b7" }}>
              On 14 July 2024, Dr. McLean submitted a formal urgent appeal (Ref. UR/UST/23/AUS/17) to the United Nations Office of the High Commissioner for Human Rights — Petitions and Urgent Actions Section, Human Rights Treaties Branch. The submission documents systemic abuse, NDIS financial exploitation, professional isolation, and violations of the UN Convention on the Rights of Persons with Disabilities. The document contains an embedded SHA-256 hash and OpenTimestamps blockchain receipt, making it one of the first UN human rights submissions in Australian history sealed on the Bitcoin blockchain.
            </p>

            <div className="rounded-xl p-4 mb-5 border-l-4" style={{ background: "#001a0e", borderColor: "#10b981" }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#10b981" }}>Submission Reference — Blockchain-Sealed</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: "UN Reference", value: "UR/UST/23/AUS/17" },
                  { label: "Filed", value: "14 July 2024 to petitions@un.org & ccpr@ohchr.org" },
                  { label: "SHA-256 Embedded in Document", value: "b484027e371179b5888380ceb4697ee20f7bcef78e53b2df773bfdd659f090c7" },
                  { label: "OpenTimestamps", value: "Bitcoin blockchain receipt confirmed — drive.google.com" },
                  { label: "Grounds", value: "NDIS mismanagement, professional isolation, UN Convention on Rights of Persons with Disabilities" },
                  { label: "Status", value: "All domestic remedies exhausted — Prime Minister, Ombudsman, Federal Court — no resolution" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg p-3 border" style={{ background: "#00100a", borderColor: "#065f46" }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "#34d399" }}>{item.label}</p>
                    <p className="text-xs text-white/80 font-mono break-all">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/documents/un-ohchr-asylum-claim-ur-ust-23-aus-17.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold"
                style={{ background: "#064e3b", color: "#fff" }} data-testid="btn-download-un-asylum">
                <Download className="w-4 h-4" /> UN Asylum Claim + Blockchain Receipt
              </a>
              <a href="/documents/ohchr-submission-ur-ust-23-aus-17-urgent-appeal.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold border"
                style={{ borderColor: "#064e3b", color: "#6ee7b7" }} data-testid="btn-download-ohchr-submission">
                <FileText className="w-4 h-4" /> Full OHCHR Submission
              </a>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            FACT 6 — PUBLIC INTEREST DISCLOSURES — 35 AGENCIES, NO ACTION
        ════════════════════════════════════════════════════════════ */}
        <div className="mb-10 rounded-2xl overflow-hidden border-2" style={{ borderColor: "#7c2d12", background: "#0f0500" }}>
          <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ background: "#7c2d12", borderColor: "#9a3412" }}>
            <span className="text-xs font-black font-mono tracking-widest text-white/90">FACT 06</span>
            <span className="w-px h-4 bg-white/30" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Public Interest Disclosures — 35 Named Agencies — NDIS Opened PID 2023/Krypton</span>
          </div>
          <div className="p-5 md:p-7">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-4">
              A Public Interest Disclosure Was Made Publicly on 4 August 2022 — 35 Specific Allegations Naming Individuals Across Every Level of Government — Then the NDIS Formally Acknowledged It with Reference PID 2023/Krypton
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#fed7aa" }}>
              Dr. McLean made a public PID on 4 August 2022 naming 35 specific instances of disclosable conduct across AFCA, AHRC, AAT, ASIC, APRA, IBAC, OAIC, Police, Ombudsman, ASIO, AG's Department, the Prime Minister's office, and more. On 2 May 2023, Debbie Mitchell (NDIS Authorised Officer under the PID Act) wrote formally to Dr. McLean acknowledging his disclosure had triggered PID Act procedures — opening Reference PID 2023/Krypton. Scott Tredwell of the Federal Court separately confirmed in writing that Dr. McLean qualifies as a public official (DSS employee) for PID purposes — meaning every protection under the PID Act applies.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl p-4 border" style={{ background: "#180800", borderColor: "#9a3412" }}>
                <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color: "#fb923c" }}>Selected PID Allegations (of 35)</p>
                <ul className="space-y-1.5">
                  {[
                    "AFCA: Tim Gos and Peter Fisher — set up to fail, $1–2M detriment",
                    "AHRC: Liz Lindsberg — biased ruling costing McLean a $1.5M TAL settlement",
                    "AAT: Member Purnell — acted outside charter of human rights for disability",
                    "OPMC: FOI refused — covering disclosable conduct",
                    "Police: Consistently used to harass, not protect — door kicked in unlawfully",
                    "Ombudsman: Systemically rejected with no basis — 35 agencies in congruence",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-white/70">
                      <ChevronRight className="w-3 h-3 shrink-0 mt-0.5" style={{ color: "#fb923c" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-4 border" style={{ background: "#180800", borderColor: "#9a3412" }}>
                <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color: "#fb923c" }}>PID 2023/Krypton — NDIS Formal Acknowledgment</p>
                {[
                  { label: "Reference", value: "PID 2023/Krypton" },
                  { label: "Authorised Officer", value: "Debbie Mitchell, NDIA" },
                  { label: "Date", value: "2 May 2023" },
                  { label: "PID Act Status", value: "Public official confirmed — DSS employee (Scott Tredwell, Federal Court)" },
                  { label: "Outcome", value: "Opened for preliminary inquiry — no protective action taken" },
                ].map((item) => (
                  <div key={item.label} className="mb-2 border-b border-orange-900/30 pb-2 last:border-0 last:pb-0">
                    <p className="text-xs font-bold" style={{ color: "#fb923c" }}>{item.label}</p>
                    <p className="text-xs text-white/70">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/documents/public-interest-disclosure-commonwealth-ombudsman-aug-2022.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold"
                style={{ background: "#7c2d12", color: "#fff" }} data-testid="btn-download-pid-aug-2022">
                <Download className="w-4 h-4" /> Public PID — 35 Allegations (Aug 2022)
              </a>
              <a href="/documents/ndis-pid-2023-krypton-preliminary-inquiries.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold border"
                style={{ borderColor: "#7c2d12", color: "#fed7aa" }} data-testid="btn-download-pid-krypton">
                <FileText className="w-4 h-4" /> PID 2023/Krypton — NDIS Letter
              </a>
              <a href="/documents/ndis-pid-copy-21-allegations.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold border"
                style={{ borderColor: "#7c2d12", color: "#fed7aa" }} data-testid="btn-download-ndis-pid-21">
                <FileText className="w-4 h-4" /> NDIS PID — 21 Allegations
              </a>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            FACT 7 — OAIC COVER-UP — THE INFORMATION WATCHDOG PROTECTED ABUSERS
        ════════════════════════════════════════════════════════════ */}
        <div className="mb-10 rounded-2xl overflow-hidden border-2" style={{ borderColor: "#1e3a5f", background: "#000a14" }}>
          <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ background: "#1e3a5f", borderColor: "#1e40af" }}>
            <span className="text-xs font-black font-mono tracking-widest text-white/90">FACT 07</span>
            <span className="w-px h-4 bg-white/30" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">OAIC Cover-Up — The Information Watchdog That Watches the Watchers Protected the Abusers</span>
          </div>
          <div className="p-5 md:p-7">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-4">
              The Office of the Australian Information Commissioner — The Body That Is Supposed to Enforce Transparency — Was Caught Covering Up the OPMC Corruption
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#bfdbfe" }}>
              Dr. McLean's OAIC FOI request sought to expose the Office of the Professional Medical Complaints (OPMC) cover-up surrounding his near-fatal hospitalisation at Werribee Mercy Hospital. The OAIC — the nation's information transparency watchdog — refused the FOI. The document records direct communication to lawyers (AEG Lawyers) forwarding evidence of the OAIC's complicity in covering up disclosable conduct. The letter names Summen Sarwar at OAIC, documents that the GP complaint was buried by a lawyer named Russell Ball who "advises the Australian Government on Policy," and confirms that the suicide attempt that followed was a "fatal" injury — Dr. McLean was found with "no observable pulse" and "filled with other people's blood."
            </p>

            <div className="rounded-xl p-4 mb-5 border-l-4" style={{ background: "#000a1a", borderColor: "#3b82f6" }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#60a5fa" }}>What Was Covered Up</p>
              <div className="space-y-2">
                {[
                  { point: "GP Complaint", detail: "Dr. Whitaker of Millennium Medical Clinic did not act on suicidality — complaint covered up by Mr Russell Ball (Ball advises the Australian Government on Policy)" },
                  { point: "Mercy Hospital", detail: "Suicide attempt deemed 'fatal' — found with no observable pulse — undiagnosed acquired brain injury — hospital's FOI confirmed 'fatal' but duty-of-care cover-up followed" },
                  { point: "Steve Iasonidis (ASIO)", detail: "Former partner employed by ASIO (boss: David Irvine) — stole assets, blackmailed, coercive financial control — IGIS refused to investigate" },
                  { point: "OAIC Response", detail: "Refused FOI that would have exposed the chain — watchdog protecting the abusers rather than the whistleblower" },
                ].map((item) => (
                  <div key={item.point} className="flex gap-3 text-xs">
                    <span className="shrink-0 font-black" style={{ color: "#60a5fa" }}>{item.point}:</span>
                    <span className="text-white/70">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="/documents/opmc-oaic-cover-up-hayden.pdf" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold inline-flex"
              style={{ background: "#1e3a5f", color: "#fff" }} data-testid="btn-download-oaic-coverup">
              <Download className="w-4 h-4" /> OAIC / OPMC Cover-Up Document
            </a>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            FACT 8 — FEDERAL COURT PID SUBMISSION + ASIC REGISTRY FRAUD
        ════════════════════════════════════════════════════════════ */}
        <div className="mb-8 rounded-2xl overflow-hidden border-2" style={{ borderColor: "#374151", background: "#05050a" }}>
          <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ background: "#374151", borderColor: "#4b5563" }}>
            <span className="text-xs font-black font-mono tracking-widest text-white/90">FACT 08</span>
            <span className="w-px h-4 bg-white/30" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Federal Court PID — 3 March 2023 — and ASIC Registry: 350+ Fraudulent Registrations</span>
          </div>
          <div className="p-5 md:p-7">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-4">
              The PID Submitted Directly to Federal Court CEO Sia Lagos Generated the FACT 01 Response — While ASIC Shows 350+ Fraudulent Business Registrations in Dr. McLean's Name
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#d1d5db" }}>
              On 3 March 2023, Dr. McLean submitted a comprehensive Public Interest Disclosure directly to Sia Lagos — CEO and Principal Registrar of the Federal Court of Australia — detailing the full chain of systemic oppression. This submission is the document that generated the FACT 01 response letter from Scott Tredwell (General Counsel) 24 days later, formally acknowledging three categories of disclosable conduct. Simultaneously, an independent AI forensic analysis of ASIC registry data uncovered 123 duplicate entries under "Barran Dodger," 42 under "Barran Resonance Dodger," 96+ under "Rich McLean," and 21 phantom domain-linked companies — estimated concealed fraud of $150M–$750M. An emergency protective motion was prepared citing ICCPR Articles 6 and 9 (right to life and security) and UNCAT (freedom from torture).
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl p-4 border" style={{ background: "#0a0a10", borderColor: "#4b5563" }}>
                <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color: "#9ca3af" }}>Federal Court PID (3 March 2023)</p>
                {[
                  { label: "Submitted to", value: "Sia Lagos, CEO & Principal Registrar, Federal Court" },
                  { label: "Response generated", value: "FACT 01 — Scott Tredwell letter, 27 March 2023 (24 days later)" },
                  { label: "Authorised Officers listed", value: "Sullivan · Moy · Fewings · Tredwell" },
                  { label: "Response deadline set", value: "17 March 2023 — not met by Federal Court" },
                ].map((item) => (
                  <div key={item.label} className="mb-2 border-b border-gray-800 pb-2 last:border-0">
                    <p className="text-xs font-bold text-gray-400">{item.label}</p>
                    <p className="text-xs text-white/70">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-4 border" style={{ background: "#0a0a10", borderColor: "#4b5563" }}>
                <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color: "#9ca3af" }}>ASIC Registry Fraud (Forensic AI Analysis)</p>
                {[
                  { label: "Duplicate entries — Barran Dodger", value: "123 entries with contradictory statuses" },
                  { label: "Duplicate entries — Rich McLean", value: "96+ registry entries tied to one person" },
                  { label: "Phantom companies", value: "21 linked to barrandodger.com.au · 17 to richmclean.com.au" },
                  { label: "Estimated concealed fraud", value: "$150M–$750M+ (AI forensic assessment)" },
                ].map((item) => (
                  <div key={item.label} className="mb-2 border-b border-gray-800 pb-2 last:border-0">
                    <p className="text-xs font-bold text-gray-400">{item.label}</p>
                    <p className="text-xs text-white/70">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/documents/federal-court-sia-lagos-pid-march-2023.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold"
                style={{ background: "#374151", color: "#fff" }} data-testid="btn-download-federal-court-pid">
                <Download className="w-4 h-4" /> Federal Court PID — Sia Lagos (3 Mar 2023)
              </a>
              <a href="/documents/asic-corruption-police-report-forensic-evidence.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold border"
                style={{ borderColor: "#4b5563", color: "#d1d5db" }} data-testid="btn-download-asic-report">
                <FileText className="w-4 h-4" /> ASIC Forensic Report + Emergency Motion
              </a>
            </div>
          </div>
        </div>

        {/* ── FOOTER BAR ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-red-900/30">
          <div>
            <p className="text-xs font-mono" style={{ color: "#ef4444" }}>
              Archived: {archivedDate} · Blockchain-sealed · Cannot be erased
            </p>
            <p className="text-xs text-white/30 mt-0.5">
              ABN 78 833 496 164 · Barran Dodger Legal & Ethical Trust Fund · Submitted: ICC Article 7 · UNHCR Geneva
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/evidence"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all"
              style={{ background: "#8b0000", color: "#fff" }}
              data-testid="link-full-evidence-archive"
            >
              Full Evidence Archive <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="/blockchain"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold border transition-all"
              style={{ borderColor: "#7f1d1d", color: "#fca5a5" }}
              data-testid="link-blockchain-proof"
            >
              <Shield className="w-4 h-4" />
              Blockchain Proof
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
