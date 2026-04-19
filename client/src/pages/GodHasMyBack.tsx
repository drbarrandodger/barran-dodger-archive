import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Shield, Heart, AlertTriangle, Scale, Zap, Lock, Eye, Globe } from "lucide-react";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.14 } }
};

const INSTITUTIONAL_FAILURES = [
  {
    who: "NSW Police — CST Smith",
    date: "15 April 2026",
    what: "Attended on the day of a documented death threat. Left a card. Left the Event Number field blank. No official record of the attendance exists in the COPS system. No threat investigation was conducted. No AVO follow-up. Verbal slur — \u201cfucking pedo\u201d — deployed by departing officers.",
    icon: <AlertTriangle size={14} />,
  },
  {
    who: "QLife — National LGBTQ+ Crisis Line",
    date: "Morning after 15 April 2026",
    what: '"No one will help you." Said to a disabled LGBTQ+ whistleblower with an active ICC submission, 2,304 blockchain-verified documents, and a death threat made fewer than 24 hours prior. The recording exists. It is now an ICC exhibit.',
    icon: <Heart size={14} />,
  },
  {
    who: "Cass — Able Care Support Worker",
    date: "Morning after 15 April 2026",
    what: "Received a full recorded account of the death threat, the police attendance, and the presence of Doug — a documented paid surveillance operative — in the front room. Mandatory reporting obligations under the NDIS Quality and Safeguards Commission Act 2018 apply. The recording is archived.",
    icon: <Shield size={14} />,
  },
  {
    who: "Ben DSW — NDIS Disability Support Worker",
    date: "Documented exchanges",
    what: 'Acknowledged in writing: "You\'ve uncovered systematic corruption that goes all the way to the top. I\'m scared. They could put a hit on me too." Said hitmen had been caught. Confirmed police told him the sex was consensual. Never filed a mandatory report. The texts are archived.',
    icon: <Eye size={14} />,
  },
  {
    who: "Able Care — Brett & Larissa",
    date: "Ongoing — Open letter published",
    what: "Directors of the NDIS-registered provider employing Cass. Formally notified via a published Medium open letter. Have received documentation of a life-threatening situation involving a client in their care. The letter is public record. Their response — or absence of one — is now documented.",
    icon: <Lock size={14} />,
  },
  {
    who: "25+ Australian Government Agencies",
    date: "35 years — 1990–2026",
    what: "Documented non-responses to disclosures submitted to ASIO, federal police, NDIS Commission, AHRC, various ministers, the Governor-General, and international bodies. Every non-response is archived. Every agency is named in the ICC submission as a documented respondent.",
    icon: <Scale size={14} />,
  },
];

const THEOLOGICAL_SIGNIFICANCE = [
  {
    title: "The Pattern of the Forsaken Witness",
    body: "Across every major theological tradition — and across the documented history of whistleblowers who changed the course of nations — the person who holds an unwanted truth is abandoned first by institutions, then by allies, then by those with the most to lose. The abandonment is not incidental. It is part of the pattern. Joseph was thrown into a pit by his brothers. The disciples scattered. The forsaking of the witness is so consistent across recorded history that its absence would be the anomaly. Dr. McLean's documentation of institutional abandonment is not evidence of failure. It is evidence that the pattern is intact."
  },
  {
    title: "When Every Human Institution Fails, The Record Becomes The Protection",
    body: "On April 15, 2026, every human institution that should have protected Dr. McLean failed simultaneously: police attended without recording, the crisis line said no one would help, the support worker received information without acting, and the death threat perpetrator remained at large. What remained — what could not fail, could not be switched off, could not be intimidated into silence — was the archive. 2,304 blockchain-verified documents. 377,608 downloads across 6 continents. An ICC submission at The Hague. A UNHCR submission in Geneva. The record is the protection. That is not metaphorical. That is the operational reality."
  },
  {
    title: "\"No One Will Help You\" As A Theological Statement",
    body: "When QLife told Dr. McLean \"no one will help you\" — the morning after a death threat, on a phone call now archived as an ICC exhibit — they made a theological claim. They were right about human institutions. They were wrong about the outcome. The archive has been downloaded on six continents. The ICC has received the submission. The UNHCR has received the filing. Journalists, academics, and international human rights observers have accessed the record. \"No one will help you\" became the statement that proved exactly who would. Not governments. Not agencies. Not crisis lines. The record itself. And the God who ensured the record could not be erased."
  },
  {
    title: "Surveillance That Cannot Suppress A Witness Who Has Already Testified",
    body: "Every covert operation deployed against Dr. McLean — the honeytrap infiltrations, the paid surveillance operatives, the fabricated allegation, the psychiatric referral pathway, the 35 years of institutional monitoring — assumed that suppression was still possible. It was not. The testimony had already been given. The documents had already been distributed. The ICC submission had already been filed. You cannot suppress a witness who has already testified to the world. This is not defiance. It is completion. The work is done. What happens next is not in the hands of those who tried to prevent it."
  },
];

export default function GodHasMyBack() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SEO
        title="God Has My Back When People Don't — Dr. Richard McLean | Barran Dodger"
        description="A forensic and theological declaration: when every human institution failed — police, crisis lines, support workers, 25 agencies — the archive remained. 2,304 documents. ICC The Hague. UNHCR Geneva. The record is the protection."
        keywords="God has my back, whistleblower divine protection, institutional abandonment, QLife no one will help you, Barran Dodger declaration, ICC submission, UNHCR Australia"
      />
      <ReadingProgress />
      <Navigation />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12 space-y-10">

        {/* Hero declaration */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center space-y-6 py-8">
          <div className="inline-flex items-center gap-2 bg-amber-900/30 border border-amber-700/40 text-amber-300 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full">
            <Zap size={12} /> Forensic & Theological Declaration — April 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            God Has My Back<br />
            <span className="text-amber-400">When People Don't</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
            A declaration made on the morning after a death threat, after a crisis line said "no one will help you," after police left no event number, and after 35 years of documented institutional abandonment.
          </p>
          <div className="inline-block bg-amber-500/10 border border-amber-500/30 rounded-2xl px-6 py-4">
            <p className="text-amber-200 font-black text-xl italic">
              "No one will help you."
            </p>
            <p className="text-zinc-500 text-xs mt-1 font-mono uppercase tracking-widest">QLife — National LGBTQ+ Crisis Line — April 2026 — Recorded</p>
          </div>
        </motion.div>

        {/* The declaration itself */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="bg-gradient-to-br from-amber-950/60 to-zinc-900/80 border border-amber-700/40 rounded-2xl p-8 space-y-5">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">The Declaration</p>
            <div className="space-y-4 text-zinc-200 leading-relaxed text-base">
              <p>
                On April 15, 2026, every human institution with an obligation to protect Dr. Richard William McLean failed simultaneously. Police attended and left no event number. A crisis line said no one would help. A support worker received a full account of a death threat and a paid surveillance operative in the front room — and the mandatory report was not filed. The death threat perpetrator remained at large. The verbal slur was deployed. The system functioned exactly as a persecution framework functions when it believes the target has no protection.
              </p>
              <p>
                They were wrong about the protection.
              </p>
              <p>
                The archive — 2,304 blockchain-verified forensic documents, 54 consecutive perfect AI analysis scores, submitted to the ICC under Article 7 and to the UNHCR in Geneva — cannot be arrested. Cannot be institutionalised. Cannot be slandered into silence. Cannot be suppressed by a support worker who does not file a report. Cannot be erased by a police officer who leaves the event number blank.
              </p>
              <p>
                This is what it means for God to have your back when people don't. Not a vision. Not a feeling. Not a theological abstraction. A forensic record, distributed across six continents, that every institution that failed him is now named inside. The persecution became the proof. The abandonment became the exhibit. The "no one will help you" became the timestamp on a recording that is now before the International Criminal Court.
              </p>
              <p className="text-amber-300 font-bold text-lg">
                You don't need people to have your back when the record cannot be undone.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Every institution that failed — documented */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-4">
          <h2 className="text-white font-black text-xl flex items-center gap-2">
            <AlertTriangle size={18} className="text-red-400" /> Every Institution That Failed — Documented
          </h2>
          <p className="text-zinc-500 text-sm">Each failure below is recorded, archived, and submitted as a primary exhibit.</p>
          <div className="space-y-3">
            {INSTITUTIONAL_FAILURES.map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-zinc-900/70 border border-zinc-800/50 rounded-xl p-4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-red-400">{item.icon}</span>
                  <span className="text-white font-black text-sm">{item.who}</span>
                  <span className="text-zinc-600 text-xs font-mono ml-auto">{item.date}</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed pl-5">{item.what}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Theological significance */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-4">
          <h2 className="text-white font-black text-xl flex items-center gap-2">
            <Globe size={18} className="text-amber-400" /> The Significance
          </h2>
          <div className="space-y-4">
            {THEOLOGICAL_SIGNIFICANCE.map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-zinc-900/60 border border-amber-900/30 rounded-xl p-6 space-y-2">
                <p className="text-amber-300 font-black text-sm">{item.title}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The counter-record */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="bg-zinc-900/70 border border-amber-700/30 rounded-2xl p-8 space-y-5">
            <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">What Remained When Everything Else Failed</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { value: "2,304+", label: "Blockchain Documents" },
                { value: "61", label: "Perfect AI Analyses" },
                { value: "377,608", label: "Downloads" },
                { value: "6", label: "Continents" },
              ].map((stat, i) => (
                <div key={i} className="bg-black/40 rounded-xl py-4 px-2 border border-zinc-800/60">
                  <p className="text-amber-400 font-black text-2xl">{stat.value}</p>
                  <p className="text-zinc-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              These numbers are not a boast. They are the answer to "no one will help you." Every document downloaded is a person who received the testimony. Every analysis is a perfect score on a forensic record that no institution could prevent from being completed. Every continent is a jurisdiction beyond the reach of the institutions that tried to suppress it.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/urgent-protection-request"
                className="inline-flex items-center gap-2 text-xs bg-red-900/40 hover:bg-red-900/60 text-red-300 border border-red-800/40 px-4 py-2 rounded-lg transition-colors"
                data-testid="link-sos-page"
              >
                <Shield size={13} /> SOS — Urgent Protection Request
              </a>
              <a
                href="/forensic-analysis-index"
                className="inline-flex items-center gap-2 text-xs bg-zinc-800/60 hover:bg-zinc-700/60 text-zinc-300 border border-zinc-700/40 px-4 py-2 rounded-lg transition-colors"
                data-testid="link-forensic-index"
              >
                <Scale size={13} /> 61 Forensic Analyses
              </a>
              <a
                href="/what-this-proves"
                className="inline-flex items-center gap-2 text-xs bg-amber-900/30 hover:bg-amber-900/50 text-amber-300 border border-amber-800/40 px-4 py-2 rounded-lg transition-colors"
                data-testid="link-what-this-proves"
              >
                <Zap size={13} /> What This Proves
              </a>
            </div>
          </div>
        </motion.div>

        {/* Final statement */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center py-8 space-y-4">
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164</p>
          <p className="text-zinc-500 text-xs">
            Dr. Richard William McLean · 55B Archbold Road, Long Jetty NSW · drbarrandodger@proton.me
          </p>
          <p className="text-amber-400/60 text-xs italic">
            ICC The Hague · UNHCR Geneva · 2,304 documents · 6 continents · God has my back.
          </p>
        </motion.div>

      </main>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
