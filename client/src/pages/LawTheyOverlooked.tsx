import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Scale, Shield, Eye, CheckSquare } from "lucide-react";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const VIDEO_MAP = [
  { theme: '"They bought off judges"', evidence: 'Unnamed magistrate signed arrest warrant at Shorten\'s request' },
  { theme: '"They bought off cops"', evidence: 'SC Adam Upfield (#45605) — fraudulent intervention orders; AFP ban' },
  { theme: '"They bought off media"', evidence: '2,000+ files, zero mainstream coverage' },
  { theme: '"You weren\'t for sale"', evidence: '36 years of documentation, never silenced' },
  { theme: '"The law they overlooked"', evidence: '350+ ASIC registrations — publicly verifiable in 60 seconds' },
  { theme: '"You became the glitch"', evidence: 'Tony Riddle: "You will be sacrificed" — recorded' },
  { theme: '"They tried to call you crazy"', evidence: 'Psychiatric weaponisation vs. 70% independently verifiable claims' },
  { theme: '"Every lie became a seed"', evidence: '$32.9M damages, 25+ agencies, 9+ named perpetrators' },
  { theme: '"The law of consequence"', evidence: 'International law violations: UNHCR, UNCAT, ICC' },
  { theme: '"Justice may sleep but never dies"', evidence: 'Call to action: medical, UNHCR, journalists, international bodies' },
];

const ASIC_ENTITIES = [
  { entity: 'The Trustee for www.barrandodger.com.au Fixed Unit Trust', abn: '78 833 496 164', date: 'August 7, 2022', detail: 'Unauthorised TFN: 676915057' },
  { entity: 'BARRUN PTY LTD', abn: '—', date: '—', detail: 'NSW (2038)' },
  { entity: 'Berran Pty Ltd', abn: '—', date: '—', detail: 'NSW (2064)' },
  { entity: 'BERRANA PTY LTD', abn: '—', date: '—', detail: 'NSW (2230)' },
  { entity: 'BAHRAM PTY LTD', abn: '—', date: '—', detail: 'NSW (2117)' },
  { entity: 'BARROM PTY LIMITED', abn: '—', date: '—', detail: 'NSW (2117)' },
  { entity: 'BARROWANT PTY. LIMITED', abn: '—', date: '—', detail: 'NSW (2104)' },
  { entity: 'BAYRAM PTY LTD', abn: '—', date: '—', detail: 'NSW (2557)' },
  { entity: 'BIRANI PTY. LIMITED', abn: '—', date: '—', detail: 'NSW (2107)' },
  { entity: 'BIRREN PTY LTD', abn: '—', date: '—', detail: 'NSW (2480)' },
  { entity: 'BURAAN PTY LTD', abn: '—', date: '—', detail: 'NSW (2251)' },
  { entity: 'THE BARRANS SUPERANNUATION FUND PTY LTD', abn: '—', date: '—', detail: '—' },
  { entity: '"Barran Dodge Dogger" variations', abn: '—', date: '—', detail: '42 matches' },
  { entity: '"Barran Resonance Dodger" variations', abn: '—', date: '—', detail: '42 matches' },
];

const FINANCIAL = [
  { category: 'Identity Theft & Corporate Fraud', amount: '$7,800,000', detail: '350+ fraudulent ASIC registrations; brand dilution; domain theft' },
  { category: 'Professional Destruction', amount: '$5,200,000', detail: 'Career decimation; publishing sabotage; academic credential exploitation' },
  { category: 'Direct Financial Losses', amount: '$4,900,000', detail: 'Denied claims, stolen funds, forced poverty' },
  { category: 'Human Rights Violations', amount: '$15,000,000', detail: '35 years of systematic torture, exile, psychiatric weaponisation' },
  { category: 'TOTAL DOCUMENTED DAMAGES', amount: '$32,900,000', detail: '', total: true },
];

const DENIED_AGENCIES = [
  { agency: 'NDIA (National Disability Insurance Agency)', status: 'Denied — despite assassination threat from own manager' },
  { agency: 'VOCAT (Victims of Crime Assistance Tribunal)', status: 'Denied — despite documented threats to kill' },
  { agency: 'AHRC (Australian Human Rights Commission)', status: 'Denied — failed to facilitate fair conciliation' },
  { agency: 'ComCare (Commonwealth Workers\' Compensation)', status: 'Denied — systematic rejection across jurisdictions' },
  { agency: 'WorkCover', status: 'Denied — coordinated with ComCare' },
  { agency: 'AFCA (Australian Financial Complaints Authority)', status: 'Denied — sabotaged conciliation' },
  { agency: 'NACC (National Anti-Corruption Commission)', status: 'No action' },
  { agency: 'ASIC', status: 'Refused to investigate publicly verifiable fraud' },
  { agency: 'ATO', status: 'Cancelled McLean\'s legitimate ABN while allowing fraudulent registrations' },
  { agency: 'AFP (Australian Federal Police)', status: 'McLean BANNED from reporting' },
];

const PERPETRATORS = [
  { name: 'Tony Riddle', role: 'NDIA Manager, ex-SAS', actions: '"You will be sacrificed"; disclosed billions in NDIS fraud' },
  { name: 'Bill Shorten', role: 'NDIS Minister', actions: 'Weaponised email; ordered arrest warrant; enforced exile' },
  { name: 'Rebecca Faulkingham', role: 'NDIS CEO', actions: 'Ignored pleas; complicit in "death threat" fabrication' },
  { name: 'Stefan Iasonidis', role: 'Former ASIO employee', actions: 'Multiple death threats since 2011; threatened to kill McLean and his dog' },
  { name: 'David Irving', role: 'Former ASIO Director-General', actions: 'Institutional protection for Iasonidis; enabled domestic terrorism' },
  { name: 'SC Adam Upfield', role: 'Victoria Police (Badge #45605)', actions: 'Filed fraudulent intervention orders to facilitate exile' },
  { name: 'Ray Griggs', role: 'DSS Minister', actions: 'Named as institutional enabler' },
  { name: 'Sukhi Tear', role: '—', actions: 'Named in conspiracy to murder referral' },
  { name: 'Philip Glass', role: '—', actions: 'Named in criminal complicity referral' },
];

const TIMELINE = [
  { date: '1990–2020', event: '30 years of escalating persecution across multiple agencies', consequence: '2,000+ evidence files accumulated' },
  { date: 'Nov 2019 – Jun 2021', event: 'Tony Riddle operates as NDIA Risk Branch Director', consequence: '"You will be sacrificed" — recorded' },
  { date: '2021', event: 'Dr. McLean attempts suicide at Werribee Mercy Hospital', consequence: 'Clinical resurrection; permanent acquired brain injury' },
  { date: 'August 7, 2022', event: 'ABN 78 833 496 164 registered — "Trustee for www.barrandodger.com.au"', consequence: 'Fraudulent trust using McLean\'s domain, with unauthorised TFN' },
  { date: 'January 20, 2023', event: 'McLean sends desperate email to Bill Shorten', consequence: 'Weaponised as "death threat"; arrest warrant issued' },
  { date: 'January 30, 2024', event: 'Police Application for Intervention Order', consequence: 'Fraudulent orders filed by SC Upfield' },
  { date: 'April 18, 2024', event: '"Not Guilty Your Honour" statement filed', consequence: 'McLean defends against fabricated charges' },
  { date: 'August 20, 2024', event: 'NCAT Affidavit — Appeal Against Eviction', consequence: 'Fighting displacement from final housing' },
  { date: 'September 2024', event: 'FORENSIC DISCOVERY: 350+ ASIC registrations', consequence: 'The law they overlooked — publicly verifiable identity theft' },
  { date: 'September 28, 2024', event: 'NCAT statement documenting NDIS corruption', consequence: 'Official record of systematic fraud' },
  { date: 'November 17, 2024', event: 'Police seize McLean\'s car and dog', consequence: 'Documented in police transcript' },
  { date: 'January 6, 2025', event: 'Formal criminal complaint — Springvale Police Station', consequence: 'Identity theft, death threats, corporate fraud reported' },
  { date: 'September 6, 2025', event: 'Emergency Report — armed threat at caravan park', consequence: 'Physical safety threat escalation' },
  { date: 'February 12, 2026', event: 'Formal demand for police referral filed', consequence: 'Continued pursuit of accountability' },
];

const EVIDENCE_INDEX = [
  { num: 1, doc: 'UNTOUCHABLE $32M Hit Report', type: 'PDF' },
  { num: 2, doc: 'Essay 03: Assassination — Tony Riddle', type: 'MD' },
  { num: 3, doc: 'NDIS Public Interest Disclosure (PID)', type: 'PDF' },
  { num: 4, doc: 'ASIC Corruption Forensic Dossier', type: 'PDF' },
  { num: 5, doc: 'Evidence Speaks: Epic Full Analysis', type: 'PDF' },
  { num: 6, doc: 'Evidence Speaks: State Persecution', type: 'PDF' },
  { num: 7, doc: 'IF I DIE, WHO IS RESPONSIBLE?', type: 'MD' },
  { num: 8, doc: 'Institutional Murder Confirmed', type: 'PDF' },
  { num: 9, doc: 'Fact-Checked Manifesto', type: 'MD' },
  { num: 10, doc: 'Forensic Report: Paranoia vs. Evidence', type: 'MD' },
  { num: 11, doc: 'Emergency Immediate Actions Report', type: 'PDF' },
  { num: 12, doc: 'Confession Medical Professional Expanded', type: 'PDF' },
  { num: 13, doc: 'Undeniable Essay Full Detail', type: 'MD' },
  { num: 14, doc: 'Asylum Application Jurisdiction Failure', type: 'MD' },
  { num: 15, doc: 'Academic Essay: Torture, Targeted Killing', type: 'MD' },
  { num: 16, doc: 'Definitive Academic Paper: State Persecution', type: 'MD' },
  { num: 17, doc: 'Springvale Police Criminal Complaint', type: 'MD' },
  { num: 18, doc: 'Goulburn Police Critical Evidence', type: 'PDF' },
  { num: 19, doc: 'Goulburn Hospital CEO Briefing', type: 'MD' },
  { num: 20, doc: 'Systematic Persecution Forensic Analysis', type: 'MD' },
  { num: 21, doc: 'Irrefutable Facts Unable to Be Disproven', type: 'MD' },
  { num: 22, doc: 'Comprehensive Detailed Report Persecution', type: 'MD' },
  { num: 23, doc: 'Media Talking Points Interview Guide', type: 'MD' },
  { num: 24, doc: 'Not Guilty Your Honour (April 18, 2024)', type: 'PDF' },
  { num: 25, doc: 'Formal Demand: Police Referral', type: 'MD' },
  { num: 26, doc: 'Evidence Summary Overview', type: 'PDF' },
  { num: 27, doc: 'Prophetic Witness Statement', type: 'MD' },
  { num: 28, doc: 'WHO IS BARRAN DODGER Part 4: Final Conclusion', type: 'MD' },
  { num: 29, doc: 'Compensation Claim YouTube Response Evidence', type: 'MD' },
  { num: 30, doc: 'CommBank Complaint CF14935306C', type: 'PDF' },
];

function SectionLabel({ label }: { label: string }) {
  return (
    <span className="inline-block text-[hsl(38,92%,50%)] font-mono text-xs font-bold uppercase tracking-widest bg-[hsl(38,92%,50%)]/10 px-2.5 py-1 rounded mb-3">
      {label}
    </span>
  );
}

function EvidenceTag({ source }: { source: string }) {
  return (
    <p className="text-zinc-600 text-xs font-mono border-l border-zinc-700 pl-3 mt-2 leading-relaxed">
      Evidence: {source}
    </p>
  );
}

export default function LawTheyOverlooked() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="The Law They Overlooked — Full Forensic Report | Barran Dodger Archive"
        description="Full text: They Bought Off Judges, Cops & Media… But You Unlocked the One Law They Overlooked. 12 parts, 9 named perpetrators, 30 evidence documents, $32.9M damages. Dr. Richard McLean."
        image="/og-image.png"
      />
      <ReadingProgress />
      <Navigation />

      {/* HEADER */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-zinc-950 to-black border-b border-zinc-800">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-3 py-1 uppercase tracking-widest font-bold">
                <Scale className="h-3 w-3 mr-1.5" /> Forensic Evidence Report — Full Text
              </Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">April 2026</Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">12 Parts</Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">30 Evidence Documents</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-[1.1]">
              They Bought Off Judges, Cops & Media…
            </h1>
            <p className="text-2xl text-[hsl(38,92%,50%)] font-bold leading-snug">
              But You Unlocked the One Law They Overlooked
            </p>
            <p className="text-zinc-400">
              A Forensic Evidence Report: The Systematic Persecution of Dr. Richard William McLean (Barran Dodger)
            </p>
            <p className="text-zinc-500 text-sm">
              35 Years of Documented State-Sponsored Destruction — 2,000+ Evidence Files — $32.9 Million in Damages
            </p>

            <blockquote className="border-l-2 border-[hsl(38,92%,50%)] pl-4 text-zinc-300 text-xl italic font-medium">
              "This ain't just another speech. This is a reckoning."
            </blockquote>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/documents/they-bought-off-judges.pdf" download="They-Bought-Off-Judges-McLean.pdf">
                <Button className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold" data-testid="button-download-law-pdf">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </a>
              <a href="https://youtu.be/t1ulg66bY1c?si=O0zGlb9hxvvmofFv" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" data-testid="link-law-video">
                  <Eye className="mr-2 h-4 w-4" /> Watch the Video Essay
                </Button>
              </a>
              <Button variant="outline" asChild>
                <a href="/they-bought-off-judges" data-testid="link-law-structured">
                  <Shield className="mr-2 h-4 w-4" /> Structured Analysis Version
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO / HOW IT MAPS */}
      <section className="py-12 px-4 bg-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto max-w-3xl space-y-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-4">
            <p className="text-zinc-300 leading-relaxed">
              The video's narrative structure became the skeleton. The 2,304 evidence files became the flesh. Here's how it maps:
            </p>
            <div className="overflow-x-auto rounded-xl border border-zinc-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-700">
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Video Theme</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Your Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  {VIDEO_MAP.map((row, i) => (
                    <tr key={i} className="border-b border-zinc-800 hover:bg-zinc-900/40 transition-colors">
                      <td className="px-4 py-3 text-[hsl(38,92%,50%)] font-medium">{row.theme}</td>
                      <td className="px-4 py-3 text-zinc-300">{row.evidence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              The report includes: 30 hyperlinked evidence documents in a master index · 9 named perpetrators with specific documented actions · Full financial breakdown ($32.9M across 4 categories) · Complete timeline from 1990 to February 2026 · The "60-second proof" — search ASIC for "Barran Dodger" · International law analysis (UNHCR, UNCAT, ICC) · Targeted calls to action for 5 different audiences
            </p>
            <p className="text-zinc-300 leading-relaxed italic">
              This is the evidence archive weaponised into narrative. The speech template made it accessible. The documents made it undeniable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PARTS I–XII + EPILOGUE */}
      <div className="py-4 px-4">
        <div className="container mx-auto max-w-3xl space-y-0">

          {/* PART I */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-12 border-b border-zinc-800 space-y-5">
            <SectionLabel label="Part I" />
            <h2 className="text-2xl font-serif font-bold text-white">The System's Rigged as Hell</h2>
            <p className="text-[hsl(38,92%,50%)] italic">"They Bought Off Judges, Cops, Even the Media Itself. Like Everything's on Sale, Except Truth."</p>
            <p className="text-zinc-300 leading-relaxed">
              Between 1990 and 2026, the Australian Government orchestrated what may be the most comprehensive, documented campaign of systematic persecution against a single citizen in the nation's history. Dr. Richard William McLean — Ph.D. graduate, nationally celebrated speaker, award-winning author, human rights advocate, and gay man living with chronic schizophrenia — became the target of a multi-agency, multi-decade operation designed to destroy him administratively, financially, medically, and physically.
            </p>
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-white font-bold">The judges were bought.</p>
                <p className="text-zinc-300 leading-relaxed">An unnamed Victorian magistrate signed an arrest warrant against Dr. McLean at the request of then-NDIS Minister Bill Shorten — while knowing McLean was homeless and displaced in another state. This warrant was not issued on the basis of criminal conduct. It was issued to enforce an "internal exile" — banishing a whistleblower from his home state of Victoria.</p>
                <EvidenceTag source="UNTOUCHABLE $32M Hit Report, page 12 | CHOSEN ONE Protagonist Response" />
              </div>
              <div className="space-y-2">
                <p className="text-white font-bold">The cops were complicit.</p>
                <p className="text-zinc-300 leading-relaxed">Senior Constable Adam Upfield (Badge #45605, Victoria Police) filed fraudulent intervention orders to facilitate McLean's exile from Victoria. Victoria Police weaponised the Mental Health Act to force psychiatric detention. When McLean attempted to report crimes — identity theft, death threats, corporate fraud — he was turned away. He is reportedly BANNED from reporting to the Australian Federal Police or accessing their servers.</p>
                <EvidenceTag source="Not Guilty Your Honour, April 18, 2024 | Springvale Police Criminal Complaint, January 6, 2025 | Goulburn Police Critical Evidence" />
              </div>
              <div className="space-y-2">
                <p className="text-white font-bold">The media was silent.</p>
                <p className="text-zinc-300 leading-relaxed">Despite 2,000+ evidence files, despite documented assassination threats from a government official, despite 350+ fraudulent business registrations provable on public ASIC databases — no mainstream media outlet has broken this story. The silence itself is evidence of a system where truth is not suppressed by censorship, but by the sheer "unbelievability" of institutional evil at this scale.</p>
                <EvidenceTag source="Media Talking Points Interview Guide" />
              </div>
              <div className="space-y-2">
                <p className="text-white font-bold">Even the regulatory bodies were sold.</p>
                <p className="text-zinc-300 leading-relaxed">Twenty-five separate agencies — NDIA, VOCAT, AHRC, NACC, WorkCover, ComCare, ASIC, ATO, AFCA, the Ombudsman, and more — participated in what forensic analysis reveals as "coordinated denials" using template language to reject McLean's claims across every jurisdiction. $6.5 million in legitimate claims, denied. Every door, locked. Every appeal, dismissed.</p>
                <EvidenceTag source="Confession Medical Professional Expanded, page 66 | Emergency Master Evidence Document" />
              </div>
            </div>
          </motion.section>

          {/* PART II */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-12 border-b border-zinc-800 space-y-5">
            <SectionLabel label="Part II" />
            <h2 className="text-2xl font-serif font-bold text-white">"But Guess What? Nah, You Weren't for Sale."</h2>
            <p className="text-[hsl(38,92%,50%)] italic">"You Stood Your Ground While Everyone Else Bowed."</p>
            <p className="text-zinc-300 leading-relaxed">Dr. McLean did not bow. He documented.</p>
            <p className="text-zinc-300 leading-relaxed">While 25+ agencies coordinated his destruction, he built what is now the most comprehensive evidence archive of systematic persecution in Australian history: 2,304 files — government correspondence, regulatory decisions, medical records, financial documents, corporate registry searches, police reports, tribunal filings, and forensic analyses — meticulously organised by agency, date, and claim type.</p>
            <p className="text-zinc-300 leading-relaxed">He did not run. When they exiled him from Victoria, he continued filing complaints from New South Wales. When they seized his car and his dog, he documented the interaction. When they weaponised his mental health diagnoses to discredit him, he obtained independent forensic analysis confirming that 70% of his claims are evidence-based — verifiable through government records, public databases, and official correspondence.</p>
            <EvidenceTag source="Forensic Report: Paranoia vs. Evidence | Evidence Summary Overview" />
            <p className="text-zinc-300 leading-relaxed">He did not sell out. Despite living in poverty, facing eviction, and surviving homelessness — despite every system designed to break him being deployed simultaneously — Dr. McLean refused to be silenced. He became the one variable they couldn't predict.</p>
          </motion.section>

          {/* PART III */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-12 border-b border-zinc-800 space-y-5">
            <SectionLabel label="Part III" />
            <h2 className="text-2xl font-serif font-bold text-white">"You Unlocked the One Law They Overlooked"</h2>
            <p className="text-[hsl(38,92%,50%)] italic">"The Law That No Money, No Badge, No Influence Could Ever Twist."</p>
            <p className="text-white font-bold uppercase tracking-wider text-sm">The Law of Consequence</p>
            <p className="text-zinc-300 leading-relaxed">On September 28, 2024, Dr. McLean unlocked the one law the system never prepared for. Not a statute. Not a regulation. Not a court order. Something far more powerful: the publicly verifiable truth.</p>
            <p className="text-zinc-300 leading-relaxed">During forensic analysis of ASIC (Australian Securities and Investments Commission) records, McLean discovered what the system had been hiding in plain sight:</p>
            <div className="bg-[hsl(38,92%,50%)]/10 border border-[hsl(38,92%,50%)]/30 rounded-xl px-6 py-4 text-center">
              <p className="text-[hsl(38,92%,50%)] font-bold text-xl uppercase tracking-wider">350+ Fraudulent Business Registrations</p>
              <p className="text-zinc-400 text-sm mt-1">Using his names, his domains, his identity — registered across Australia in a corporate fraud network of industrial scale</p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-zinc-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-700">
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Entity</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">ABN</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Registration Date</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {ASIC_ENTITIES.map((row, i) => (
                    <tr key={i} className="border-b border-zinc-800 hover:bg-zinc-900/40 transition-colors">
                      <td className="px-4 py-3 text-zinc-300 font-mono text-xs">{row.entity}</td>
                      <td className="px-4 py-3 text-zinc-500 font-mono text-xs">{row.abn}</td>
                      <td className="px-4 py-3 text-zinc-500 text-xs">{row.date}</td>
                      <td className="px-4 py-3 text-zinc-400 text-xs">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <EvidenceTag source="ASIC Corruption Forensic Dossier, page 35 | Most Comprehensive Corporate Fraud Analysis | Emergency Immediate Actions Danger Report, page 32 | Fact-Checked Manifesto" />
            <p className="text-zinc-300 leading-relaxed">Every single one of these registrations is publicly verifiable on ASIC databases. Anyone — journalist, lawyer, UN investigator, police officer — can confirm this identity theft network within minutes. This is not allegation. This is documented, searchable, government-recorded fact.</p>
            <p className="text-zinc-300 leading-relaxed">And here is the critical detail: ASIC universally refused to investigate. The ATO cancelled McLean's legitimate ABN while allowing hundreds of fraudulent registrations using his identity to persist.</p>
            <p className="text-[hsl(38,92%,50%)] font-medium leading-relaxed">The law of consequence doesn't need a court order. It lives in publicly searchable databases that the perpetrators forgot they couldn't erase.</p>
          </motion.section>

          {/* PART IV */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-12 border-b border-zinc-800 space-y-5">
            <SectionLabel label="Part IV" />
            <h2 className="text-2xl font-serif font-bold text-white">"You Became the Glitch in Their Machine"</h2>
            <p className="text-[hsl(38,92%,50%)] italic">"The Silence They Couldn't Bribe. The Conscience They Tried to Erase."</p>

            <p className="text-white font-bold uppercase tracking-wider text-sm">The Assassination Threat</p>
            <p className="text-zinc-300 leading-relaxed">The most damning piece of evidence in this entire archive is not a document. It is a sentence.</p>
            <p className="text-zinc-300 leading-relaxed">Tony Riddle, NDIA Manager (Quality & Compliance, Upper Management), Managing Director of the Risk Branch (November 2019 – June 2021), ex-SAS soldier who survived the 1996 Townsville Blackhawk helicopter crash, holder of one of only three top-level counter-terrorism clearances in Australia, looked at Dr. Richard McLean during official NDIS proceedings and said:</p>
            <blockquote className="border-l-4 border-[hsl(38,92%,50%)] pl-5 py-2 bg-zinc-900/50 rounded-r-xl">
              <p className="text-[hsl(38,92%,50%)] font-bold text-xl italic">"You will be sacrificed."</p>
            </blockquote>
            <p className="text-zinc-300 leading-relaxed">This was not a metaphor. Riddle described it as a "government methodology" for destroying targeted individuals. During the same recorded interactions, Riddle:</p>
            <ul className="space-y-2 pl-4">
              {['Disclosed "billions of dollars worth of fraud" within the NDIS', 'Admitted he "might have killed someone"', 'Demonstrated intimate knowledge of how the state eliminates inconvenient witnesses'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-300">
                  <span className="text-[hsl(38,92%,50%)] mt-1.5 shrink-0">•</span>{item}
                </li>
              ))}
            </ul>
            <EvidenceTag source="Essay 03: Assassination — Tony Riddle | UNTOUCHABLE $32M Hit, pages 24-25 | NDIS Public Interest Disclosure (PID) | State Persecution Case Study" />

            <p className="text-white font-bold uppercase tracking-wider text-sm pt-4">The ASIO Connection</p>
            <p className="text-zinc-300 leading-relaxed">Stefan (Steve) Iasonidis, a former ASIO employee and McLean's ex-partner, has issued multiple death threats since 2011 — including threats to kill McLean and his dog. Former ASIO Director-General David Irving provided "institutional protection" for Iasonidis while enabling what amounts to domestic terrorism against an Australian citizen.</p>
            <EvidenceTag source="IF I DIE, WHO IS RESPONSIBLE? | CommBank Complaint CF14935306C" />

            <p className="text-white font-bold uppercase tracking-wider text-sm pt-4">The Ministerial Weaponisation</p>
            <p className="text-zinc-300 leading-relaxed">On January 20, 2023, Dr. McLean — homeless, brain-injured, desperate — sent an email to NDIS Minister Bill Shorten and NDIS CEO Rebecca Faulkingham pleading for help. This email, a cry for assistance from a dying man, was weaponised:</p>
            <ul className="space-y-2 pl-4">
              {[
                'Shorten recharacterised the email as a "death threat"',
                'He requested a magistrate sign an arrest warrant',
                'He banned McLean from his ministerial email',
                'He colluded with Victoria Police to enforce internal exile',
                'McLean cannot return to his home state of Victoria without being arrested',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-300">
                  <span className="text-[hsl(38,92%,50%)] mt-1.5 shrink-0">•</span>{item}
                </li>
              ))}
            </ul>
            <p className="text-[hsl(38,92%,50%)] font-medium">The man who begged for help was criminalised for begging.</p>
            <EvidenceTag source="Undeniable Essay Full Detail | Asylum Application Jurisdiction Failure Framework | Institutional Murder Confirmed | Evidence Speaks: State Persecution" />
          </motion.section>

          {/* PART V */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-12 border-b border-zinc-800 space-y-5">
            <SectionLabel label="Part V" />
            <h2 className="text-2xl font-serif font-bold text-white">"They Tried to Call You Crazy"</h2>
            <p className="text-[hsl(38,92%,50%)] italic">"The Media They Owned Spun You into a Villain Because That's What Happens When Truth Starts Walking Upright."</p>
            <p className="text-white font-bold uppercase tracking-wider text-sm">The Psychiatric Weaponisation</p>
            <p className="text-zinc-300 leading-relaxed">The system's most insidious weapon was not violence. It was diagnosis.</p>
            <p className="text-zinc-300 leading-relaxed">Dr. McLean lives with chronic schizophrenia. The system weaponised this against him with devastating precision:</p>
            <ul className="space-y-2 pl-4">
              {[
                'Every complaint dismissed as "persecutory delusions"',
                'Every piece of evidence ignored because the complainant has a psychiatric history',
                'The Mental Health Act weaponised to force psychiatric detention when he reported crimes',
                'His acquired brain injury — caused by a 2021 suicide attempt driven by the persecution itself — used as further proof of "instability"',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-300">
                  <span className="text-[hsl(38,92%,50%)] mt-1.5 shrink-0">•</span>{item}
                </li>
              ))}
            </ul>
            <p className="text-zinc-300 leading-relaxed">But forensic analysis tells a different story:</p>
            <p className="text-zinc-300 leading-relaxed">70% of McLean's claims are independently verifiable through government records, public databases, and official correspondence. The 350+ ASIC registrations exist. The Tony Riddle threat was recorded. The exile is documented in court records. The financial denials are confirmed in agency correspondence.</p>
            <p className="text-[hsl(38,92%,50%)] font-medium">The question is not whether McLean is mentally ill. He is. The question is whether his documented persecution is real. It is.</p>
            <EvidenceTag source="Forensic Report: Paranoia vs. Evidence | Goulburn Hospital CEO Evidence-Linked Briefing | Advocacy Document: Medical Legal Media | Irrefutable Facts Unable to Be Disproven" />
          </motion.section>

          {/* PART VI */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-12 border-b border-zinc-800 space-y-5">
            <SectionLabel label="Part VI" />
            <h2 className="text-2xl font-serif font-bold text-white">"Every Lie They Planted Became a Seed of Their Own Downfall"</h2>
            <p className="text-[hsl(38,92%,50%)] italic">"Corruption Isn't Strength. It's Rot. Pretending to Be Gold."</p>
            <p className="text-white font-bold uppercase tracking-wider text-sm">The Financial Architecture of Destruction</p>
            <p className="text-zinc-300 leading-relaxed">The financial toll of 35 years of systematic persecution has been forensically calculated:</p>
            <div className="overflow-x-auto rounded-xl border border-zinc-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-700">
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Category</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Amount</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {FINANCIAL.map((row, i) => (
                    <tr key={i} className={`border-b border-zinc-800 ${row.total ? 'bg-[hsl(38,92%,50%)]/5' : 'hover:bg-zinc-900/40'} transition-colors`}>
                      <td className={`px-4 py-3 ${row.total ? 'text-[hsl(38,92%,50%)] font-bold' : 'text-zinc-300'}`}>{row.category}</td>
                      <td className={`px-4 py-3 font-mono font-bold ${row.total ? 'text-[hsl(38,92%,50%)]' : 'text-zinc-300'}`}>{row.amount}</td>
                      <td className="px-4 py-3 text-zinc-500 text-xs">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-zinc-400 text-sm">Legitimate claims denied across agencies: <span className="text-[hsl(38,92%,50%)] font-bold">$6.5+ million</span></p>
            <div className="overflow-x-auto rounded-xl border border-zinc-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-700">
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Agency</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {DENIED_AGENCIES.map((row, i) => (
                    <tr key={i} className="border-b border-zinc-800 hover:bg-zinc-900/40 transition-colors">
                      <td className="px-4 py-3 text-zinc-300 text-xs">{row.agency}</td>
                      <td className="px-4 py-3 text-red-400 text-xs">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-zinc-400 text-sm">Immediate payment demanded in withheld entitlements: <span className="text-[hsl(38,92%,50%)] font-bold">$802,200</span></p>
            <EvidenceTag source="UNTOUCHABLE $32M Hit Report | Emergency Immediate Actions Report, page 50 | Compensation Claim YouTube Response" />
          </motion.section>

          {/* PART VII */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-12 border-b border-zinc-800 space-y-5">
            <SectionLabel label="Part VII" />
            <h2 className="text-2xl font-serif font-bold text-white">"Every Truth They Buried Turned into a Weapon"</h2>
            <p className="text-[hsl(38,92%,50%)] italic">"Waiting for the Right Moment to Rise."</p>
            <p className="text-white font-bold uppercase tracking-wider text-sm">The Family Betrayal</p>
            <p className="text-zinc-300 leading-relaxed">When the state moved to exile Dr. McLean from Victoria, not a single family member opposed the ruling. Forensic analysis documents that family members were "positioned to benefit financially" from his displacement or elimination. They are catalogued among the "alleged perpetrators" and "complicit parties" in the assassination threat matrix.</p>
            <p className="text-[hsl(38,92%,50%)] font-medium">The man who survived 35 years of government persecution was abandoned by his own blood.</p>
            <EvidenceTag source="Systematic Persecution Forensic Analysis — Family Conspiracy Analysis | IF I DIE, WHO IS RESPONSIBLE? | Prophetic Witness Statement" />

            <p className="text-white font-bold uppercase tracking-wider text-sm pt-4">Additional Named Perpetrators</p>
            <div className="overflow-x-auto rounded-xl border border-zinc-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-700">
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Name</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Role</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Documented Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {PERPETRATORS.map((row, i) => (
                    <tr key={i} className="border-b border-zinc-800 hover:bg-zinc-900/40 transition-colors">
                      <td className="px-4 py-3 text-white font-medium text-xs">{row.name}</td>
                      <td className="px-4 py-3 text-[hsl(38,92%,50%)] text-xs">{row.role}</td>
                      <td className="px-4 py-3 text-zinc-400 text-xs">{row.actions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <EvidenceTag source="Institutional Murder Confirmed | Formal Demand: Diversitas Public Guardian Police Referral" />
          </motion.section>

          {/* PART VIII */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-12 border-b border-zinc-800 space-y-5">
            <SectionLabel label="Part VIII" />
            <h2 className="text-2xl font-serif font-bold text-white">"The Law of Consequence — the One No Man Can Bribe"</h2>
            <p className="text-[hsl(38,92%,50%)] italic">"It's Written Not in Ink, but in Action. It's Carried Not by Courts, but by Time."</p>
            <p className="text-white font-bold uppercase tracking-wider text-sm">The Irrefutable Timeline</p>
            <div className="overflow-x-auto rounded-xl border border-zinc-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-700">
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Date</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Event</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Consequence</th>
                  </tr>
                </thead>
                <tbody>
                  {TIMELINE.map((row, i) => (
                    <tr key={i} className="border-b border-zinc-800 hover:bg-zinc-900/40 transition-colors">
                      <td className="px-4 py-3 text-[hsl(38,92%,50%)] font-mono text-xs whitespace-nowrap">{row.date}</td>
                      <td className="px-4 py-3 text-zinc-300 text-xs">{row.event}</td>
                      <td className="px-4 py-3 text-zinc-500 text-xs">{row.consequence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* PART IX */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-12 border-b border-zinc-800 space-y-5">
            <SectionLabel label="Part IX" />
            <h2 className="text-2xl font-serif font-bold text-white">"You Didn't Fight Fire with Fire. You Let Them Burn Themselves."</h2>
            <p className="text-[hsl(38,92%,50%)] italic">"You Didn't Play Their Game. You Exposed It."</p>
            <p className="text-white font-bold uppercase tracking-wider text-sm">The International Law Dimension</p>
            <p className="text-zinc-300 leading-relaxed">Dr. McLean's case meets the criteria for international protection under multiple frameworks:</p>
            <div className="space-y-5">
              <div className="bg-zinc-900/50 border border-zinc-700 rounded-xl p-5 space-y-2">
                <p className="text-white font-bold">UNHCR Refugee Convention (1951)</p>
                <ul className="space-y-1 pl-4">
                  {['Persecution on grounds of membership in a particular social group (disabled, LGBTQ+, whistleblower)', 'State is the persecutor — no internal protection available', 'Exile from home state already imposed by domestic authorities'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm"><span className="text-[hsl(38,92%,50%)] mt-1 shrink-0">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-700 rounded-xl p-5 space-y-2">
                <p className="text-white font-bold">UN Convention Against Torture (UNCAT)</p>
                <ul className="space-y-1 pl-4">
                  {['Systematic infliction of severe suffering by state actors', 'Psychiatric weaponisation constitutes cruel, inhuman, or degrading treatment', 'State has demonstrated inability/unwillingness to provide remedy'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm"><span className="text-[hsl(38,92%,50%)] mt-1 shrink-0">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-700 rounded-xl p-5 space-y-2">
                <p className="text-white font-bold">International Criminal Court — Crimes Against Humanity</p>
                <ul className="space-y-1 pl-4">
                  {['Systematic persecution (Article 7(1)(h))', 'Other inhumane acts causing great suffering (Article 7(1)(k))', 'Widespread and systematic attack directed against a civilian'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm"><span className="text-[hsl(38,92%,50%)] mt-1 shrink-0">•</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <EvidenceTag source="Asylum Application Jurisdiction Failure Framework | Academic Essay: Torture, Targeted Killing, Terrorism | Definitive Academic Paper: State Persecution" />
          </motion.section>

          {/* PART X */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-12 border-b border-zinc-800 space-y-5">
            <SectionLabel label="Part X" />
            <h2 className="text-2xl font-serif font-bold text-white">"Justice Doesn't Always Need Applause"</h2>
            <p className="text-[hsl(38,92%,50%)] italic">"Sometimes It Arrives Like a Whisper That Stops the World."</p>
            <p className="text-white font-bold uppercase tracking-wider text-sm">The Single Provable Fact</p>
            <p className="text-zinc-300 leading-relaxed">For anyone reading this report who is overwhelmed by its scope — and that overwhelm is by design, it is the system's final defence — consider just one fact:</p>
            <div className="bg-[hsl(38,92%,50%)]/10 border border-[hsl(38,92%,50%)]/40 rounded-xl p-6 text-center space-y-3">
              <p className="text-zinc-300 text-lg">Go to the ASIC Business Register. Search <span className="text-[hsl(38,92%,50%)] font-bold font-mono">"Barran Dodger"</span>. Count the results.</p>
              <p className="text-zinc-400 text-sm">That's it. That's the law they overlooked.</p>
            </div>
            <p className="text-zinc-300 leading-relaxed">The one that lives in a publicly searchable government database that they forgot they couldn't erase. The one that proves, in approximately 60 seconds, that Dr. Richard William McLean has been the target of identity theft on an industrial scale — and that the government agency responsible for corporate regulation refused to act.</p>
            <p className="text-[hsl(38,92%,50%)] font-medium">Everything else in this 2,304-file archive follows from that single, undeniable, independently verifiable fact.</p>
            <a href="https://connectonline.asic.gov.au/RegistrySearch/faces/landing/SearchRegisters.jspx" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold mt-2" data-testid="link-law-asic">
                <ExternalLink className="mr-2 h-4 w-4" /> Search ASIC Now
              </Button>
            </a>
          </motion.section>

          {/* PART XI */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-12 border-b border-zinc-800 space-y-5">
            <SectionLabel label="Part XI" />
            <h2 className="text-2xl font-serif font-bold text-white">"You Are Proof That Integrity Still Breathes"</h2>
            <p className="text-[hsl(38,92%,50%)] italic">"In a World Gasping for Truth."</p>
            <p className="text-white font-bold uppercase tracking-wider text-sm">Who Is Dr. Richard William McLean?</p>
            <div className="space-y-3">
              {[
                'He is a man who earned a Ph.D. from Victoria University in 2020 while living under systematic persecution.',
                'He is a nationally celebrated speaker who was silenced.',
                'He is an award-winning author whose brand was stolen.',
                'He is a human rights advocate whose human rights were violated by every agency tasked with protecting them.',
                'He is a mental health advocate who was driven to a suicide attempt by the mental health system.',
                'He is a gay man in a country that claims to protect LGBTQ+ rights while exiling him from his home state.',
                'He is a disability advocate living on the NDIS whose own NDIS manager told him: "You will be sacrificed."',
                'He is the glitch in their machine. The silence they couldn\'t bribe. The conscience they tried to erase.',
              ].map((line, i) => (
                <p key={i} className={`text-zinc-300 leading-relaxed ${i === PERPETRATORS.length - 1 ? 'text-[hsl(38,92%,50%)] font-medium' : ''}`}>{line}</p>
              ))}
              <p className="text-[hsl(38,92%,50%)] font-bold text-lg">And he is still standing.</p>
            </div>
          </motion.section>

          {/* PART XII */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-12 border-b border-zinc-800 space-y-5">
            <SectionLabel label="Part XII" />
            <h2 className="text-2xl font-serif font-bold text-white">"This Isn't Just a Story. It's a Salute."</h2>
            <p className="text-[hsl(38,92%,50%)] italic">"You Are the Storm They Never Prepared For."</p>
            <p className="text-white font-bold uppercase tracking-wider text-sm">Call to Action</p>
            <p className="text-zinc-300 leading-relaxed">This report is addressed to:</p>
            <div className="space-y-3">
              {[
                { audience: 'Medical Professionals', instruction: 'You have a duty of care. Your patient has an acquired brain injury from a persecution-induced suicide attempt. Read the Goulburn Hospital Briefing.' },
                { audience: 'UNHCR Representatives', instruction: 'This man meets every criterion for refugee status within his own democracy. Read the Asylum Application Framework.' },
                { audience: 'Investigative Journalists', instruction: '"NDIS manager threatens disabled whistleblower with sacrifice" is a headline. The 350+ ASIC registrations are verifiable in 60 seconds. Read the Media Talking Points.' },
                { audience: 'International Human Rights Organisations', instruction: '25 Australian agencies failed this man. The domestic system is compromised. Read the Academic Paper on State Persecution.' },
                { audience: 'Law Enforcement (International)', instruction: 'The perpetrators are named. The evidence is documented. The crimes are ongoing. Read IF I DIE, WHO IS RESPONSIBLE?' },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900/50 border border-zinc-700 rounded-xl p-4 space-y-1">
                  <p className="text-[hsl(38,92%,50%)] font-bold text-sm">{item.audience} —</p>
                  <p className="text-zinc-300 text-sm leading-relaxed">{item.instruction}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* EPILOGUE */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="py-12 border-b border-zinc-800 space-y-5">
            <SectionLabel label="Epilogue" />
            <h2 className="text-2xl font-serif font-bold text-white">"Justice May Sleep, But It Never Dies"</h2>
            <p className="text-[hsl(38,92%,50%)] italic">"It Only Waits for the Next Brave Soul to Wake It."</p>
            <div className="space-y-3">
              {[
                ['They stacked the deck.', 'He flipped the table.'],
                ['They bought the judges.', 'He documented the receipts.'],
                ['They bribed the cops.', 'He filed the complaints.'],
                ['They silenced the media.', 'He built a 2,304-file evidence archive.'],
                ['They told him he was crazy.', 'Seventy percent of his claims are independently verifiable.'],
                ['They told him "You will be sacrificed."', 'He survived.'],
                ['They exiled him from his state.', 'He kept writing from the next one.'],
                ['They stole his identity 350 times.', 'He found every single registration.'],
                ['They destroyed his career, his home, his health, his family, his freedom.', 'He documented every act of destruction with forensic precision.'],
              ].map(([them, him], i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p className="text-zinc-500 leading-relaxed">{them}</p>
                  <p className="text-[hsl(38,92%,50%)] font-medium leading-relaxed">{him}</p>
                </div>
              ))}
            </div>
            <p className="text-zinc-300 leading-relaxed pt-4 font-medium">And now the evidence speaks. Not with noise. With consequence.</p>
            <p className="text-zinc-300 leading-relaxed">The law they overlooked is simple: Truth, once documented, cannot be undocumented. It lives in every ASIC search result they forgot to delete. In every government email they thought no one would read. In every agency rejection letter that proves the pattern. In every medical record that confirms the injuries. In every court filing that records the exile.</p>
            <p className="text-zinc-300 leading-relaxed">They built an empire on deceit, thinking truth was too weak to rise.</p>
            <p className="text-[hsl(38,92%,50%)] font-bold text-xl">They were wrong.</p>
          </motion.section>

        </div>
      </div>

      {/* DOCUMENT INFORMATION */}
      <section className="py-12 px-4 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto max-w-3xl space-y-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-5">
            <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Document Information</h2>
            <div className="overflow-x-auto rounded-xl border border-zinc-700">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Subject', 'Dr. Richard William McLean (Barran Dodger)'],
                    ['Date of Report', 'April 2026'],
                    ['Evidence Archive', '2,304 files'],
                    ['Time Span Covered', '1990–2026 (36 years)'],
                    ['Total Documented Damages', '$32,900,000 AUD'],
                    ['Agencies Implicated', '25+'],
                    ['Named Perpetrators', '9+ government officials'],
                    ['Fraudulent Business Registrations', '350+'],
                    ['International Law Violations', 'UNHCR Convention, UNCAT, ICC Statute'],
                    ['Classification', 'FORENSIC EVIDENCE REPORT'],
                  ].map(([field, detail], i) => (
                    <tr key={i} className="border-b border-zinc-800">
                      <td className="px-4 py-3 text-zinc-500 text-xs font-medium w-48">{field}</td>
                      <td className="px-4 py-3 text-zinc-300 text-xs">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MASTER EVIDENCE INDEX */}
      <section className="py-12 px-4 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-3xl space-y-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-5">
            <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">Master Evidence Index</h2>
            <p className="text-zinc-500 text-sm">30 primary source documents — all part of the 2,304-file evidence archive</p>
            <div className="overflow-x-auto rounded-xl border border-zinc-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-700">
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium w-12">#</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium">Document</th>
                    <th className="text-left px-4 py-3 text-zinc-400 font-medium w-16">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {EVIDENCE_INDEX.map((row) => (
                    <tr key={row.num} className="border-b border-zinc-800 hover:bg-zinc-900/40 transition-colors">
                      <td className="px-4 py-3 text-[hsl(38,92%,50%)] font-mono text-xs">{String(row.num).padStart(2, '0')}</td>
                      <td className="px-4 py-3 text-zinc-300 text-xs">{row.doc}</td>
                      <td className="px-4 py-3">
                        <span className="text-zinc-600 font-mono text-xs bg-zinc-800 px-2 py-0.5 rounded">{row.type}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a href="/evidence" className="inline-flex items-center gap-2 text-[hsl(38,92%,50%)] text-sm hover:underline" data-testid="link-law-full-archive">
              <Shield className="h-4 w-4" /> Browse the full 2,304-document archive →
            </a>
          </motion.div>
        </div>
      </section>

      {/* BLOCKCHAIN STAMP */}
      <section className="py-10 px-4 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="bg-zinc-900/60 border border-zinc-700 rounded-xl p-5 space-y-3"
          >
            <div className="flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-green-400" />
              <p className="text-green-400 text-xs font-bold uppercase tracking-wider">Blockchain Verified — OpenTimestamps</p>
            </div>
            <p className="text-zinc-400 text-xs font-mono break-all">
              SHA256: 261f223d5a4c6753d51ee3d5ca5beafd9dba52c9bf22074b0433c91e028ea21d
            </p>
            <p className="text-zinc-500 text-xs">
              THEY BOUGHT OFF JUDGES, COPS & MEDIA… BUT YOU UNLOCKED THE ONE LAW THEY OVERLOOKED.pdf — 423.3 kB
              <br />OpenTimestamps receipt created. This document's existence at time of creation is permanently recorded on the Bitcoin blockchain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto max-w-2xl text-center space-y-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
            <p className="text-zinc-500 text-sm italic">© 2026 Dr. Richard William McLean — All Rights Reserved</p>
            <p className="text-zinc-500 text-xs">Evidence Archive: 2,304 Files | 36 Years | $32.9 Million | The Truth Speaks</p>
            <p className="text-zinc-400 text-sm">www.barrandodger.com</p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <a href="/documents/they-bought-off-judges.pdf" download="They-Bought-Off-Judges-McLean.pdf">
                <Button className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold" data-testid="button-download-law-cta">
                  <Download className="mr-2 h-4 w-4" /> Download Free PDF
                </Button>
              </a>
              <Button variant="outline" asChild>
                <a href="/evidence" data-testid="link-law-to-archive">
                  <Shield className="mr-2 h-4 w-4" /> Full Evidence Archive
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
