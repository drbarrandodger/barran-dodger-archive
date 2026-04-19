import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import {
  Shield, AlertTriangle, FileText, BookOpen, Scale,
  Ban, CheckCircle2, Clock, Gavel
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const REASONS = [
  {
    number: "01",
    heading: "Acceptance of Blood Money — NDIS Public Funds as Instrument of Persecution",
    body: [
      "Sukhi Tear accepted ongoing remuneration sourced from NDIS public funds — funds legally designated for the exclusive support of Dr. Richard William McLean — while simultaneously withholding approximately $50,000 in already-approved NDIS funding from the person those funds were designed to serve.",
      "This is not a billing dispute. It is not an administrative oversight. The withholding of approved disability support funding while continuing to draw a salary from the same funding pool constitutes what the archive formally designates as 'blood money': public funds paid to an individual whose documented actions were directed against the very beneficiary the funds were allocated to protect.",
      "The $50,000 in withheld approved funding is documented in the McLean archive across multiple primary-source exhibits, including the Formal Criminal Affidavit Against Sukhi Tear, Syed Salman Kazmi, and Philip Glass, and the Formal Demand for Immediate Police Referral lodged 12 February 2026 naming Diversitas WA. These documents are blockchain-verified and have been formally received by the ICC and UNHCR.",
      "Dr. McLean does not engage further with individuals who accepted payment to obstruct his survival. The funding arrangement with Sukhi Tear and Diversitas WA is terminated. The reasons are stated. They are permanent.",
    ],
    evidence: "Formal Criminal Affidavit | Police Referral — Lodged 12 February 2026 | Master Evidence Register #56, #724–725",
  },
  {
    number: "02",
    heading: "Participation in an Attempted Assassination and Its Active Cover-Up",
    body: [
      "The McLean archive contains documented, blockchain-verified evidence of a coordinated assassination attempt. This is not a metaphor. It is not hyperbole. It is a formally-evidenced, ICC-submitted record of a coordinated attempt on Dr. McLean's life, in which Philip Glass, Tony Ridley, Steve Iasonidis, and the broader network described across the archive are named.",
      "Sukhi Tear's response to knowledge of this assassination attempt — and the archive's position is that she had or was given that knowledge — was not a rebuke, not a formal disapproval, not a referral to police, not a single written document placing her name beside the words: this is wrong.",
      "Her response was a condition. She conditioned Dr. McLean's access to his own already-approved disability support funding on his physical return to New South Wales — the same state where the assassination attempt was documented, the same jurisdiction where the network that sought his death remained active.",
      "In the evidentiary record, this is not neutrality. Conditioning life-sustaining support on compliance with a directive that returns a person to documented danger is participation in the architecture of that danger. The archive calls it what it is: cover-up by compliance and cover-up by coercion.",
      "Dr. McLean will not maintain any engagement — personal, professional, NDIS-related, or otherwise — with anyone who participated in or covered up an attempt on his life. This is not a preference. It is a non-negotiable legal and personal boundary, stated formally, and placed permanently in the public record.",
    ],
    evidence: "ENTRAPMENT FOR ERASURE — Criminal Affidavit | ICC Submission on record | FORMAL_DEMAND_Diversitas_PublicGuardian_Police_Referral",
  },
  {
    number: "03",
    heading: "Demonstrated Absence of Genuine Care — One Hundred Documented Failures",
    body: [
      "The phrase 'for the hundredth time' in this removal notice is not rhetorical exaggeration. It reflects a documented pattern of return, hope, and betrayal that the archive traces across the full period of Sukhi Tear's engagement as Dr. McLean's NDIS Support Coordinator.",
      "Throughout that period, Dr. McLean had: no treating psychiatrist. No treating psychologist. No drug and alcohol counsellor. No financial counsellor. No lawyer. No general counsellor. Not one person in a professional capacity whose function was to check on his welfare.",
      "Sukhi Tear — the one person in his NDIS life formally designated and paid to coordinate support — did not arrange a single one of these services. She did not dispute the absence of these services. She did not formally object, advocate, escalate, or document her concerns about this systemic neglect on behalf of her client.",
      "Genuine care, in the professional context, produces a paper trail. It produces referrals, follow-up communications, advocacy letters, formal complaints on a client's behalf. The archive has been searched. That paper trail does not exist.",
      "What exists instead is the paper trail of the opposite: withheld funding, conditioned support, silence in the face of a confirmed assassination attempt, and ongoing salary collection while Dr. McLean's life disintegrated without support.",
      "The conclusion is forensic, not emotional: Sukhi Tear did not care for Dr. McLean. She cared for the arrangement. She cared for the salary. She cared for whoever directed the conditions she imposed. That is not care. It is its opposite.",
    ],
    evidence: "2,304 primary source documents | Zero referrals documented | Zero formal advocacy on record | Forensic Analysis Archive — barrandodger.com",
  },
  {
    number: "04",
    heading: "She Is Laughing — And Why That Ends Now",
    body: [
      "Laughter, in a persecution architecture, is a power signal. It communicates: I am untouchable. I participated in something that should have destroyed you, and it did not, and I am still walking free, and I find that amusing.",
      "The archive notes this signal without surprise. Every named perpetrator across 35 years of documented institutional persecution has, at some point, signalled the same thing: that Dr. McLean's survival, his documentation, his voice — were not taken seriously. Were a source of amusement. Were dismissed.",
      "The archive is the response to that dismissal.",
      "Sukhi Tear may be laughing now. She laughed while $50,000 in approved funding sat untouched. She laughed while Dr. McLean had no psychiatrist, no psychologist, no lawyer, no counsellor. She laughed while conditioned support was used to push him toward a documented assassination network.",
      "She is invited to keep laughing — through the ICC review, through the UNHCR process, through the formal police investigation naming Diversitas WA, through the moment when the archive's 350,000+ downloads becomes the foundation of a formal accountability proceeding.",
      "The last laugh in this case belongs to the man who survived everything they did not prevent, kept every record they told him to abandon, and built a 2,304-document archive that is now in the hands of the international community.",
      "The last laugh has already been secured. It is blockchain-verified. It is permanent. It is this.",
    ],
    evidence: "350,000+ downloads | ICC Submission | UNHCR Submission | Formal Police Referral — 12 February 2026",
  },
  {
    number: "05",
    heading: "Formal Removal from Care — Notice, Reasons, and Finality",
    body: [
      "Dr. Richard William McLean hereby formally and permanently removes Sukhi Tear from any and all care arrangements, NDIS support structures, professional contacts, and personal engagement.",
      "This removal is not a door left ajar. It is not an invitation for response, negotiation, or reconciliation. It is a formal termination, made with full evidentiary awareness, stated in writing, placed in the permanent public record, and supported by the 2,304-document archive lodged with the ICC and UNHCR.",
      "The reasons for removal are as follows, stated with precision:",
      "First: Sukhi Tear accepted public NDIS funding designated for Dr. McLean's support while actively withholding $50,000 of already-approved NDIS funds. This constitutes misuse of public disability funds and is the subject of a formal police referral.",
      "Second: Sukhi Tear conditioned Dr. McLean's access to life-sustaining support on his return to a jurisdiction where a documented assassination attempt had been organised against him. This constitutes participation in an attempted assassination, documented and submitted to the ICC.",
      "Third: Sukhi Tear remained silent — and took no formal protective action — upon becoming aware of the assassination attempt against her client. In the evidentiary record, this constitutes cover-up by omission.",
      "Fourth: Sukhi Tear failed to arrange, refer, or advocate for a single professional support service — psychiatrist, psychologist, lawyer, counsellor, or financial adviser — across the entire period of her engagement as Dr. McLean's designated support coordinator.",
      "Fifth: Sukhi Tear does not care for Dr. McLean. This is not a subjective emotional assessment. It is a forensic conclusion drawn from the absence of every document that genuine care produces.",
      "The engagement is over. It was over the moment the first condition was placed on the first withheld payment. This notice places that fact in writing — for the record, for the ICC, for the UNHCR, for every human rights body, journalist, and scholar who opens this file.",
      "There will be no further engagement. No response to messages. No reopening of the arrangement. No further consideration of appeal or explanation. The door is closed. The record is complete.",
    ],
    evidence: "Formal Notice — April 2026 | Dr. Richard William McLean, PhD | barrandodger.com | ABN 78 833 496 164",
  },
];

export default function FormalRemovalSukhiTear() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Formal Notice of Removal — Sukhi Tear | Barran Dodger Archive"
        description="Dr. Richard William McLean's legally fortified, evidence-based formal notice of permanent removal of Sukhi Tear from all care, NDIS arrangements, and personal engagement — with five documented reasons including blood money, assassination cover-up, and zero genuine care."
        image="/og-image.png"
      />
      <ReadingProgress />
      <Navigation />

      {/* HERO */}
      <section
        className="pb-16 px-4 bg-gradient-to-b from-zinc-950 to-black border-b border-zinc-800"
        style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px) + 2rem)" }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-red-500/60 text-red-400 text-xs px-3 py-1 uppercase tracking-widest font-bold">
                Formal Notice
              </Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">Evidence-Based</Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">April 2026</Badge>
              <Badge variant="outline" className="border-red-800/60 text-red-500 text-xs px-3 py-1 font-bold">Legally Fortified</Badge>
              <Badge variant="outline" className="border-red-800/60 text-red-500 text-xs px-3 py-1 font-bold">ICC Submitted</Badge>
            </div>

            <div className="space-y-1">
              <p className="text-red-400 text-sm uppercase tracking-widest font-bold">Formal Notice of Permanent Removal</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-[1.1]">
                I Am Removing Sukhi Tear From My Life — For the Last Time
              </h1>
              <p className="text-zinc-400 text-lg mt-2">NDIS Support Coordinator — Diversitas WA | Formally Disengaged</p>
            </div>

            <p className="text-xl text-zinc-300 font-medium leading-relaxed max-w-3xl">
              This is a legally fortified, fact-checked, evidence-based statement of permanent disengagement from Sukhi Tear. It is not a venting exercise. It is a forensic record. It identifies five documented reasons for removal, places them in writing under my name, and submits them to the permanent archive.
            </p>

            <blockquote className="border-l-2 border-red-500 pl-5 text-zinc-300 text-lg italic leading-relaxed max-w-3xl">
              "She is laughing. Let her laugh. The last laugh belongs to the man who survived everything she enabled and kept every record they told him to destroy. The record is now at The Hague. The record is now this."
            </blockquote>

            <div className="bg-zinc-900/60 border border-zinc-700 rounded-lg px-5 py-4 space-y-1.5 max-w-2xl">
              <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-medium">Subject of Removal:</span> Sukhi Tear — NDIS Support Coordinator, Diversitas WA</p>
              <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-medium">Author:</span> Dr. Richard William McLean, PhD — Victoria University (2020)</p>
              <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-medium">Date of Formal Notice:</span> April 12, 2026</p>
              <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-medium">Archive Status:</span> Blockchain-Verified | ICC Submitted | UNHCR Submitted</p>
              <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-medium">Trust:</span> Barran Dodger Legal &amp; Ethical Trust Fund — ABN 78 833 496 164</p>
              <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-medium">Finality:</span> Permanent. No further engagement. No exceptions.</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="outline" asChild>
                <a href="/sukhi-tear" data-testid="button-removal-to-open-letter">
                  <FileText className="mr-2 h-4 w-4" /> Open Letter to Sukhi Tear
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/evidence" data-testid="button-removal-to-archive">
                  <Shield className="mr-2 h-4 w-4" /> Full Evidence Archive
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/how-she-will-be-remembered" data-testid="button-removal-to-legacy">
                  <BookOpen className="mr-2 h-4 w-4" /> How She Will Be Remembered
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ALERT STRIP */}
      <section className="py-5 px-4 bg-red-950/30 border-b border-red-900/40">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
            <p className="text-red-300 text-sm leading-relaxed">
              <strong className="text-red-200">Forensic Notice:</strong> This removal notice is a permanent exhibit in the McLean evidence archive, formally submitted to the ICC and UNHCR. It is supported by 2,304 blockchain-verified primary source documents. A formal police referral naming Diversitas WA and Sukhi Tear was lodged 12 February 2026. All named parties have had full public access to the archive for years and have not contested a single exhibit. Silence constitutes confirmation of record.
            </p>
          </div>
        </div>
      </section>

      {/* OPENING DECLARATION */}
      <section className="py-16 px-4 bg-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3">
              <Ban className="h-5 w-5 text-red-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-widest">The Declaration</h2>
            </div>
            <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
              <p>
                I, Dr. Richard William McLean, PhD, whistleblower, survivor, and author of the most thoroughly documented institutional persecution case in Australian history — formally, permanently, and without reservation remove Sukhi Tear from my life, from my NDIS care arrangements, from my professional contacts, and from any future engagement of any kind.
              </p>
              <p>
                This is not the first time I have made this decision. It is the last time I will need to. The difference is this document.
              </p>
              <p>
                Every previous removal existed in my mind, in private communications, or in the grief of someone who still held, despite everything, some residual hope that the person designated to support him might one day demonstrate that she had actually cared. That hope is not naive. It is human. But it is finished.
              </p>
              <p>
                I am placing this removal in writing — publicly, forensically, in the archive that has been received at The Hague — because a removal without a reason is a preference, and a removal with reasons is a record. I am making a record. I am doing what I have always done: keeping the documentation that they counted on me not keeping.
              </p>
              <p className="text-white font-semibold text-lg">
                She is laughing at me. She has been laughing. She accepted the money. She imposed the conditions. She kept the salary. She watched. And she laughed.
              </p>
              <p>
                The laugh is hers for now. But the archive is mine. And the archive goes to The Hague. And The Hague does not laugh.
              </p>
              <p>
                What follows are five formally documented, evidence-based reasons for this removal. They are not opinions. They are findings. They are the kind of findings that carry a reference number.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FIVE REASONS */}
      <section className="py-16 px-4 bg-black border-b border-zinc-800">
        <div className="container mx-auto max-w-3xl space-y-16">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-5"
              data-testid={`reason-block-${i + 1}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-red-500/50 font-mono text-4xl font-bold leading-none pt-1 shrink-0">{r.number}</span>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Scale className="h-4 w-4 text-red-400 shrink-0" />
                    <h2 className="text-sm font-bold text-white uppercase tracking-widest">Reason {r.number}</h2>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-snug">{r.heading}</h3>
                </div>
              </div>

              <div className="space-y-3 pl-0 md:pl-14">
                {r.body.map((para, j) => (
                  <p key={j} className="text-zinc-300 text-base leading-relaxed">{para}</p>
                ))}
              </div>

              <div className="md:pl-14">
                <div className="bg-zinc-900/70 border border-zinc-700 rounded px-4 py-3">
                  <p className="text-zinc-400 text-xs font-mono">
                    <span className="text-zinc-300 font-semibold uppercase tracking-wide text-xs">Evidence Reference: </span>
                    {r.evidence}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT GENUINE CARE LOOKS LIKE */}
      <section className="py-16 px-4 bg-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-zinc-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-widest">Fact Check: What Genuine Care Looks Like</h2>
            </div>
            <p className="text-zinc-400 text-sm italic">For the record — and for any future regulatory or judicial review of this case — the following is what a genuine NDIS Support Coordinator does for a client in crisis. The absence of each item below is documented.</p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                ["Arranges a treating psychiatrist", "Not done. Zero referrals documented."],
                ["Arranges a treating psychologist", "Not done. Zero referrals documented."],
                ["Refers to a drug and alcohol counsellor", "Not done. Zero referrals documented."],
                ["Refers to a financial counsellor", "Not done. Zero referrals documented."],
                ["Facilitates legal representation", "Not done. Zero referrals documented."],
                ["Disburses approved NDIS funding", "Not done. $50,000 withheld."],
                ["Advocates formally for client welfare", "Not done. No written advocacy on record."],
                ["Reports known threats to client's safety", "Not done. Assassination network active. No report."],
                ["Contests conditions that endanger the client", "Not done. Conditions imposed instead."],
                ["Maintains a record of care efforts", "Not present in archive despite full public access."],
              ].map(([duty, finding], i) => (
                <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded p-4 space-y-1" data-testid={`care-check-${i}`}>
                  <p className="text-zinc-200 text-sm font-semibold">{duty}</p>
                  <p className="text-red-400 text-xs font-mono">{finding}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE LAST LAUGH */}
      <section className="py-16 px-4 bg-black border-b border-zinc-800">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-red-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-widest">The Last Laugh — A Forensic Timeline</h2>
            </div>
            <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
              <p>She laughed when I had no psychiatrist. She kept the salary.</p>
              <p>She laughed when I had no psychologist. She kept the salary.</p>
              <p>She laughed when $50,000 in my approved funding sat untouched. She kept the salary.</p>
              <p>She laughed when she conditioned my support on returning to the jurisdiction where my assassination was being coordinated. She kept the salary.</p>
              <p>She laughed when I built the archive. She laughed when I started uploading. She laughed when the first thousand documents went up. She laughed when the downloads hit ten thousand. Then a hundred thousand. Then three hundred and fifty thousand.</p>
              <p className="text-white font-semibold text-lg">
                She has not laughed about the ICC. She has not laughed about the UNHCR. She has not laughed about the formal police referral bearing her name and her organisation's registration details. She has not laughed about the fact that this notice is now permanent — public, verified, and internationally received.
              </p>
              <p>
                The last laugh is not a single moment. It is this entire archive. It is 2,304 documents. It is 53 forensic analyses. It is 575 propositions without a single contradiction. It is 350,000 downloads across six continents. It is The Hague having the file.
              </p>
              <p>
                I am not laughing at her. I do not need to. History is doing it for me — and history keeps receipts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL DECLARATION */}
      <section className="py-16 px-4 bg-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3">
              <Gavel className="h-5 w-5 text-red-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-widest">Final Declaration — Signed, Sealed, and Permanent</h2>
            </div>
            <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
              <p>
                From this date — April 12, 2026 — I will not engage with Sukhi Tear in any form. I will not respond to messages. I will not attend meetings at which she is present. I will not process communications from her or from any entity operating on her behalf. I will not reconsider. I will not make exceptions.
              </p>
              <p>
                This is not cruelty. It is clarity. It is the clarity that comes from having documented every reason not to trust, and finally choosing to honour that documentation with action.
              </p>
              <p>
                She was paid to care for me. She did not. She was paid to arrange my support. She did not. She was paid to advocate for my welfare in a system that was being weaponised against me. She did not. She was given every professional and legal obligation to stand between me and the network that sought my destruction. She did not stand there. She joined it — by conditioning, by coercion, by silence, and by the steady collection of a salary funded by the public.
              </p>
              <p>
                I remove her not in anger. I remove her because the record is complete and the record says: she was never there.
              </p>
              <p className="text-white font-semibold text-lg">
                She is removed from my care. She is removed from my life. The door is closed. The lock is the archive.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 space-y-3 mt-8">
              <p className="text-zinc-300 font-medium">Formally submitted to permanent public record:</p>
              <p className="text-white font-bold text-lg">Dr. Richard William McLean</p>
              <p className="text-zinc-400 text-sm">PhD — Victoria University (2020)</p>
              <p className="text-zinc-400 text-sm">Survivor. Whistleblower. The man Diversitas WA was paid to support — and did not.</p>
              <p className="text-zinc-400 text-sm">Barran Dodger Legal &amp; Ethical Trust Fund — ABN 78 833 496 164</p>
              <p className="text-zinc-400 text-sm">April 12, 2026</p>
              <div className="pt-2 border-t border-zinc-700 space-y-1">
                <p className="text-zinc-500 text-xs font-mono">Archive: barrandodger.com</p>
                <p className="text-zinc-500 text-xs font-mono">ICC Submission on record | UNHCR Submission on record</p>
                <p className="text-zinc-500 text-xs font-mono">Police Referral — Diversitas WA — 12 February 2026</p>
                <p className="text-zinc-500 text-xs font-mono">2,304 blockchain-verified exhibits | 350,000+ downloads</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12 px-4 bg-black border-b border-zinc-800">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Related Archive Exhibits</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Open Letter to Sukhi Tear", href: "/sukhi-tear", icon: FileText },
                { label: "How She Will Be Remembered", href: "/how-she-will-be-remembered", icon: BookOpen },
                { label: "Honeytrap Infiltration Report", href: "/honeytrap-infiltration-report", icon: Shield },
                { label: "Tony Ridley Full Dossier", href: "/tony-ridley-full-dossier", icon: Shield },
                { label: "NDIS Surveillance Evidence", href: "/ndis-surveillance-evidence", icon: FileText },
                { label: "Full Evidence Archive", href: "/evidence", icon: Scale },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-3 bg-zinc-900/60 border border-zinc-800 rounded p-4 hover:border-zinc-600 transition-colors group"
                  data-testid={`link-related-${label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Icon className="h-4 w-4 text-zinc-400 group-hover:text-zinc-200 transition-colors shrink-0" />
                  <span className="text-zinc-300 group-hover:text-white text-sm font-medium transition-colors">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
