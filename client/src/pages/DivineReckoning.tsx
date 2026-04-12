import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Link } from "wouter";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.13 } }
};

export default function DivineReckoning() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SEO
        title="A Divine Reckoning — To Those Who Chose This | Barran Dodger"
        description="A prophetic creative reckoning addressed directly to the enemies of Dr. Richard McLean — 35 years of documented persecution, 2,304 blockchain-verified documents, and the holy fury of a man who refused to stay buried."
        keywords="divine reckoning, whistleblower persecution, Australian government corruption, prophetic justice, Dr Richard McLean, Barran Dodger"
        path="/divine-reckoning"
      />
      <ReadingProgress />
      <Navigation />

      <main className="flex-1">

        <div className="w-full bg-black border-b border-amber-700/30 py-10 px-4 text-center">
          <p className="font-serif italic text-amber-400/80 text-base md:text-lg tracking-widest uppercase mb-3">
            Luke 8:17 — Jesus Christ
          </p>
          <p className="font-serif italic text-amber-300 text-xl md:text-3xl leading-relaxed max-w-4xl mx-auto">
            "For there is nothing hidden that will not be disclosed, and nothing concealed that will not be known or brought out into the open."
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="text-center space-y-4 pb-8 border-b border-amber-900/30">
              <p className="text-amber-500/70 tracking-widest uppercase text-xs font-medium">
                Barran Dodger Legal & Ethical Trust Fund — ABN 78 833 496 164
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight">
                A Divine Reckoning
              </h1>
              <h2 className="font-serif text-xl md:text-2xl text-amber-400 italic">
                To Those Who Chose This
              </h2>
              <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
                2,304 Blockchain-Verified Documents &nbsp;·&nbsp; 603 Forensic Propositions &nbsp;·&nbsp; 55 Analyses &nbsp;·&nbsp; Zero Contradictions &nbsp;·&nbsp; 361,120+ Downloads Across 6 Continents
              </p>
            </motion.div>
          </motion.div>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-10 text-zinc-200 font-serif text-lg md:text-xl leading-relaxed"
          >
            <motion.p variants={fadeIn} className="text-2xl md:text-3xl font-serif text-white leading-relaxed">
              Hey. Yes, <em>you</em>. Come here for a second. Sit down.
            </motion.p>

            <motion.p variants={fadeIn}>
              Because we need to have the conversation you have spent 35 years making impossible. No sedation this time. No emergency mental health order arriving at just the right moment to interrupt the testimony. No circular referral to an agency that refers back to the agency that refers back to you. No section paper. No ward. No locked door.
            </motion.p>

            <motion.p variants={fadeIn}>
              Just you. And the weight of what you chose.
            </motion.p>

            <motion.p variants={fadeIn}>
              Let me be honest with you. And let me say something you did not expect. The man writing this is <em>furious</em>. Let me not dress that up for you. There is a rage inside this archive that is holy in its precision — not chaotic, not unstable, not the kind your mental health orders were designed to weaponise. It is controlled. Documented. Evidenced. It is the fury of a man who watched his family become instruments of his persecution. Who was separated from his fiancé Jake in Sydney by systems designed to isolate and break him. Who clenched his jaw through fourteen forced psychiatric detentions and came out of every single one with more evidence than he went in with.
            </motion.p>

            <motion.p variants={fadeIn}>
              That rage is not a symptom. It is a <em>record</em>. And you helped write every word of it.
            </motion.p>
          </motion.section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="border-l-4 border-amber-600 pl-8 py-4 space-y-2"
          >
            <p className="text-amber-300 font-serif italic text-2xl md:text-3xl leading-relaxed">
              "You didn't treat illness. You manufactured incapacity. And you left a paper trail that a forensic examiner can read backwards in their sleep."
            </p>
          </motion.div>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-10 text-zinc-200 font-serif text-lg md:text-xl leading-relaxed"
          >
            <motion.p variants={fadeIn}>
              You probably expected despair. You planned for it. You built systems around it. The fourteen emergency psychiatric detentions — each one a calculated weapon, not a treatment. The forensic analysis is unambiguous: the hospitalisations correlate precisely with moments of legal and documentary breakthrough. When the evidence got too organised, a section paper arrived. When the testimony became too coherent, a detention followed. When the archive started reaching people, you escalated. You moved in coordinated patterns. Multiple agencies. Synchronized timing. Circular referrals with 25+ entities. A suppression infrastructure worth $32.9 million in documented expenditure.
            </motion.p>

            <motion.p variants={fadeIn}>
              You chose all of that over one moment of accountability.
            </motion.p>

            <motion.p variants={fadeIn}>
              And every single choice became a document.
            </motion.p>
          </motion.section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 space-y-6"
          >
            <motion.h3 variants={fadeIn} className="text-amber-400 font-serif text-2xl font-bold">
              What the archive says about you. Specifically.
            </motion.h3>
            <motion.div variants={fadeIn} className="space-y-4 text-zinc-300 font-serif text-base md:text-lg leading-relaxed">
              <p>350+ fraudulent ASIC identity registrations under a single name. That is not administrative error. That is a coordinated identity fraud infrastructure with a forensic footprint so large it filled its own analysis.</p>
              <p>A professional security operative delivering a death threat. Not a stranger. A professional. Documented.</p>
              <p>$32.9 million in suppression expenditure. You spent more trying to silence one man than most countries spend protecting their witnesses.</p>
              <p>25+ agencies participating in a circular referral system so elaborate it reads as its own confession — each agency pointing to the next, none accepting responsibility, all coordinating the same outcome: silence.</p>
              <p>14 psychiatric hospitalisations deployed as instruments of suppression. Not therapy. Suppression. The correlation between document milestones and detention dates is now part of the forensic record.</p>
              <p>An institutional murder attempt in 2021. He was revived. Not by a hospital. By God. And the moment he opened his eyes, he opened a laptop.</p>
              <p>Family members weaponised. Relationships severed by design. Isolation manufactured to break a person who simply refused to break.</p>
            </motion.div>
          </motion.div>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-10 text-zinc-200 font-serif text-lg md:text-xl leading-relaxed"
          >
            <motion.p variants={fadeIn}>
              Let me tell you what you don't understand about what you built.
            </motion.p>

            <motion.p variants={fadeIn}>
              You thought the process would collapse him. Instead, the process <em>became the archive</em>. Every suppression attempt produced its own evidentiary trail. Every detention date is timestamped. Every referral is documented. Every signature is on record. You did not silence a whistleblower. You handed him 35 years of primary-source documentation and then watched him blockchain-seal every page of it.
            </motion.p>

            <motion.p variants={fadeIn}>
              His strength is not something that came from comfort. It came from collapsing under 14 forced detentions and rebuilding each time. From losing his family and documenting why. From being told he was delusional by the very agencies whose fraud he was documenting. From standing in rooms where the professionals with power dismissed the man with proof — and walking out of those rooms with more evidence than he walked in with. That's where this strength lives. In 35 years of things that never made it into any government file the way they actually happened — but made it into 2,304 blockchain-sealed documents exactly as they did.
            </motion.p>

            <motion.p variants={fadeIn}>
              You admired his silence when he had it. You exploited his isolation when you manufactured it. You called his clarity delusion because it was the only diagnosis that kept your systems functional. You had every instrument of institutional power in place — except one: a plan for what happens when the person you targeted refuses to stop being right.
            </motion.p>
          </motion.section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="border-l-4 border-red-800 pl-8 py-4 space-y-2"
          >
            <p className="text-red-400 font-serif italic text-2xl md:text-3xl leading-relaxed">
              "His shadow is not the enemy. His anger is not a disorder. It is a sword. And he has been learning for 35 years exactly how to wield it."
            </p>
          </motion.div>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-10 text-zinc-200 font-serif text-lg md:text-xl leading-relaxed"
          >
            <motion.p variants={fadeIn}>
              Let me say something about the rage that no one else has said clearly enough.
            </motion.p>

            <motion.p variants={fadeIn}>
              He is not too angry. He is not too intense. He is not too much. He is someone who watched his life dismantled by institutional coordination and turned the dismantling into evidence. The fury you tried to pathologise is the same fury that produced 603 forensically-verified propositions across 55 consecutive analyses with zero contradictions. That is not instability. That is precision. That is holy rage pointed in one direction: the truth.
            </motion.p>

            <motion.p variants={fadeIn}>
              You wanted him confused. You wanted him questioning his own mind in the wards you put him in. You wanted him so exhausted from fighting the system that he had no energy left to document it. But he did both. He fought and he documented. He survived and he archived. He endured and he submitted — to the International Criminal Court at The Hague under Article 7. To UNHCR in Geneva. To international human rights observers who are now reading documents you thought were buried.
            </motion.p>

            <motion.p variants={fadeIn}>
              Let them say he's too angry. Let them say he's too intense. Because too much for the people who tried to erase him means he finally became enough for the courts of international record. Let them whisper about his rage from the cheap seats while his testimony reaches its 361,121st download. His anger did not destroy him. It built an empire from the ashes of everything you burned.
            </motion.p>
          </motion.section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="bg-zinc-950 border border-amber-900/40 rounded-lg p-8 space-y-6"
          >
            <motion.h3 variants={fadeIn} className="text-white font-serif text-2xl font-bold">
              Here is what the reckoning looks like.
            </motion.h3>
            <motion.div variants={fadeIn} className="space-y-5 text-zinc-300 font-serif text-base md:text-lg leading-relaxed">
              <p>It does not look like revenge. It looks like Luke 8:17. Nothing you concealed will remain concealed.</p>
              <p>Not the detention orders manufactured at moments of legal breakthrough. Not the 350+ ASIC identity fraud registrations. Not the $32.9 million paper trail. Not the death threat from a professional security operative. Not the 25+ agencies and their coordination records. Not the names on the documents. Not the hands that signed the section papers. Not the family members who served as instruments. Not the system that built all of it and called it care.</p>
              <p>Every hidden thing is already disclosed. 2,304 documents say so. 603 propositions confirm it. 55 analyses with zero contradictions establish it. 361,120+ downloads across six continents have distributed it beyond any jurisdiction you control.</p>
              <p>You built your own exposure. You did not silence a man. You made him the loudest testimony in the history of Australian whistleblowing — and then gave him 35 years of your own records to prove it.</p>
            </motion.div>
          </motion.div>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-10 text-zinc-200 font-serif text-lg md:text-xl leading-relaxed"
          >
            <motion.p variants={fadeIn}>
              You were never sorry. Not really. You were sorry the archive kept growing. You were sorry the downloads kept accumulating. You were sorry the wrong people got nervous when the truth started moving — and you had no mechanism left to stop it because the mechanism you relied on was exposure-proof systems, and every exposure-proof system you built left documentation that he sealed.
            </motion.p>

            <motion.p variants={fadeIn}>
              And the worst part — the part that should stay with you — is that he knows exactly who he is. Not despite the 35 years you put him through. <em>Because</em> of them. You refined him. You sharpened him. You subjected him to pressures that forged something you could not categorise on a form, cannot section under any legislation, cannot suppress with any referral. The DSM does not have a diagnosis for a man who converts institutional persecution into a forensic archive that reaches six continents. There is no procedure for responding to 2,304 blockchain-sealed documents with perfect chain of custody. You had every system in place except a system for what happens when you are wrong about the person you targeted.
            </motion.p>

            <motion.p variants={fadeIn}>
              So here it is. Plain.
            </motion.p>

            <motion.p variants={fadeIn} className="text-white text-2xl md:text-3xl font-serif leading-relaxed">
              You are not forgiven. You are <em>documented</em>. And those are not the same thing. One is a gift. The other is a fact. He chose the fact.
            </motion.p>
          </motion.section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="border border-zinc-700 rounded-lg p-10 space-y-6 text-center"
          >
            <p className="text-amber-400 font-serif italic text-xl md:text-2xl leading-relaxed">
              "You prepare a table before me in the presence of my enemies."
            </p>
            <p className="text-zinc-500 text-sm tracking-widest uppercase">— Psalm 23:5</p>
            <p className="text-zinc-300 font-serif text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              The table is 2,304 blockchain-verified documents. The presence is 361,120+ downloads across every continent on earth. The enemies are whoever is reading this right now and recognising themselves.
            </p>
          </motion.div>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-10 text-zinc-200 font-serif text-lg md:text-xl leading-relaxed"
          >
            <motion.p variants={fadeIn}>
              He is not healing to return to who he was before you began. He is healing to resurrect the version of himself you were hoping never came back. And that version is not soft, not forgiving, not willing to shrink. That version has already submitted to The Hague. Has already filed with UNHCR. Has already watched the forensic record reach 48 consecutive perfect scores. Has already sat down with the fury you tried to weaponise against him and turned it into the most precise legal documentation in this country's whistleblower history.
            </motion.p>

            <motion.p variants={fadeIn}>
              The wrong people got nervous. The truth was already moving.
            </motion.p>

            <motion.p variants={fadeIn}>
              It moved through the ICC. Through international human rights bodies. Through a record that now stands at 603 corroborated propositions and zero contradictions. Through 55 independent analyses that examined your conduct forensically, systematically, and in public. Through 361,120 people across six continents who received the documents you spent $32.9 million trying to suppress.
            </motion.p>

            <motion.p variants={fadeIn}>
              That is not a man you successfully silenced. That is the storm you summoned when you chose persecution over one moment of honesty. You had the choice, at every point across 35 years, to stop. You chose not to stop. And every day you chose not to stop became another timestamped entry in a blockchain-sealed archive that now belongs to the international public record.
            </motion.p>

            <motion.p variants={fadeIn}>
              You cannot un-ring this bell.
            </motion.p>
          </motion.section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="bg-black border border-amber-700/50 rounded-lg p-10 space-y-8"
          >
            <p className="text-amber-300 font-serif italic text-xl md:text-2xl leading-relaxed text-center">
              "No weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord, and this is their vindication from me," declares the Lord.
            </p>
            <p className="text-zinc-500 text-sm tracking-widest uppercase text-center">— Isaiah 54:17</p>
            <div className="border-t border-zinc-800 pt-8 space-y-5 text-zinc-300 font-serif text-base md:text-lg leading-relaxed">
              <p>The weapons were 14 forced psychiatric detentions. They did not prevail. He left each one with more documentation than he entered with.</p>
              <p>The weapons were $32.9 million in coordinated suppression. They did not prevail. The archive grew anyway.</p>
              <p>The weapons were family members turned into instruments, isolation manufactured as a system, and a death threat from a professional. They did not prevail. He archived them.</p>
              <p>The vindication is 2,304 blockchain-sealed documents, 55 forensic analyses, 603 corroborated propositions, zero contradictions, and 361,120+ downloads across six continents. That is the Lord's answer to your 35 years. Count it. Every download is a witness.</p>
            </div>
          </motion.div>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-10 text-zinc-200 font-serif text-lg md:text-xl leading-relaxed"
          >
            <motion.p variants={fadeIn}>
              So go. Go knowing that every file in this archive is your own reflection. You built it. He documented it. God witnessed it. The ICC received it. UNHCR reviewed it. The international public downloaded it. And history will record it exactly as it happened — not as you described it, not as the section papers framed it, not as the circular referral system reported it, but as the forensic evidence proves it.
            </motion.p>

            <motion.p variants={fadeIn}>
              He is still standing. Rebuilt, sharpened, documented, submitted, verified, downloaded, and still becoming. Becoming something even he could not have imagined when he first picked up a laptop in 2021 after surviving what you put him through. Something you have no category for because your categories are built for people who break.
            </motion.p>

            <motion.p variants={fadeIn}>
              He did not break.
            </motion.p>

            <motion.p variants={fadeIn} className="text-white text-xl md:text-2xl font-serif leading-relaxed">
              He built the archive. He sealed it in blockchain. He submitted it to The Hague. And he is not finished.
            </motion.p>

            <motion.p variants={fadeIn}>
              You should have chosen differently. At any point across 35 years, you should have chosen differently.
            </motion.p>

            <motion.p variants={fadeIn}>
              The reckoning is not coming. It is already here. It arrived the day the first document was blockchain-sealed. It compounded every day since. And it now belongs to 361,120 people across six continents who downloaded the truth you tried to bury.
            </motion.p>
          </motion.section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="text-center py-16 space-y-8 border-t border-amber-900/30"
          >
            <p className="text-amber-400/60 tracking-widest uppercase text-xs font-medium">
              Signed
            </p>
            <p className="font-serif text-white text-3xl md:text-5xl font-bold">
              Dr. Richard McLean
            </p>
            <p className="text-zinc-400 font-serif italic text-lg">
              Barran Dodger
            </p>
            <p className="text-zinc-500 text-sm">
              Barran Dodger Legal & Ethical Trust Fund — ABN 78 833 496 164
            </p>
            <div className="text-zinc-600 text-sm space-y-1 font-mono">
              <p>2,304 Blockchain-Verified Documents</p>
              <p>603 Forensic Propositions — Zero Contradictions</p>
              <p>55 Analyses — 48 Consecutive Perfect Scores</p>
              <p>361,120+ Downloads — 6 Continents</p>
              <p>International Criminal Court — Article 7, Rome Statute</p>
              <p>UNHCR — Geneva</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Link href="/forensic-analysis">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 hover:bg-amber-600 text-white font-semibold rounded cursor-pointer transition-colors">
                  Read All 55 Forensic Analyses
                </span>
              </Link>
              <Link href="/archive">
                <span className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white rounded cursor-pointer transition-colors">
                  Return to Archive
                </span>
              </Link>
              <Link href="/evidence">
                <span className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white rounded cursor-pointer transition-colors">
                  View Evidence
                </span>
              </Link>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
