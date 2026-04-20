import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Link } from "wouter";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

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
                2,304 Blockchain-Verified Documents &nbsp;·&nbsp; 603 Forensic Propositions &nbsp;·&nbsp; 55 Analyses &nbsp;·&nbsp; Zero Contradictions &nbsp;·&nbsp; 399,325+ Downloads Across 6 Continents
              </p>
              <div className="pt-4">
                <a
                  href="/api/divine-reckoning/pdf"
                  download
                  data-testid="button-divine-reckoning-pdf"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white font-bold text-base rounded transition-colors shadow-lg shadow-amber-900/40"
                >
                  ⬇ Download This Reckoning — PDF
                </a>
                <p className="text-zinc-600 text-xs mt-2">
                  A Divine Reckoning — To Those Who Chose This &nbsp;·&nbsp; Dr. Richard McLean (Barran Dodger)
                </p>
              </div>
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
              Hey. Yes, <em>you</em>. Come here for a second. Sit the fuck down.
            </motion.p>

            <motion.p variants={fadeIn}>
              Because we need to have the conversation you have spent 35 years making impossible. No sedation this time. No emergency mental health order arriving at just the right moment to shut the testimony down. No circular referral to an agency that refers back to the agency that refers back to you, each one pretending they don't know what the others are doing. No section paper. No ward. No locked door. None of that bullshit is available to you right now.
            </motion.p>

            <motion.p variants={fadeIn}>
              Just you. And the full, crushing weight of what you chose.
            </motion.p>

            <motion.p variants={fadeIn}>
              Let me be honest with you. And let me say something you did not expect. The man writing this is <em>furious</em>. Not the kind of fury you tried to pathologise. Not the kind you wrote up in your little section paper to justify the next detention. This is controlled, documented, evidenced fury — holy in its precision and absolutely fucking devastating in its reach. It is the fury of a man who watched his family become instruments of his persecution. Who was separated from his fiancé Jake in Sydney by systems designed not to help anyone but to isolate and break him. Who clenched his jaw through fourteen forced psychiatric detentions and came out of every goddamn one with more evidence than he went in with.
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
              "You didn't treat illness. You manufactured incapacity. And you left a paper trail that a forensic examiner can read backwards in their sleep. What kind of idiots do that?"
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
              You expected despair. You planned for it. You built entire bureaucratic systems around the assumption that a man — alone, separated from everyone he loved, locked in a ward — would eventually break. That he'd go quiet. That the documentation would stop. That the archive would die with his spirit. You spent $32.9 million on that assumption. Thirty-two point nine million fucking dollars. To silence one man. And it didn't work. Not even close.
            </motion.p>

            <motion.p variants={fadeIn}>
              The fourteen emergency psychiatric detentions — each one a calculated weapon, not a treatment. The forensic analysis is unambiguous. The hospitalisations correlate precisely with moments of legal and documentary breakthrough. When the evidence got too organised, a section paper arrived. When the testimony became too coherent, a detention followed. When the archive started reaching people you didn't want it to reach, you escalated. Multiple agencies. Synchronised timing. 25+ entities in a circular referral system so airtight and so stupid that every referral letter became its own piece of evidence. You built a suppression infrastructure and then handed him the blueprints.
            </motion.p>

            <motion.p variants={fadeIn}>
              You chose all of that over one moment of accountability.
            </motion.p>

            <motion.p variants={fadeIn}>
              Every single choice became a document. Every document is now sealed in blockchain. What in the hell did you think was going to happen?
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
              What the archive says about you. Specifically. In detail. On record.
            </motion.h3>
            <motion.div variants={fadeIn} className="space-y-4 text-zinc-300 font-serif text-base md:text-lg leading-relaxed">
              <p>350+ fraudulent ASIC identity registrations under a single name. That is not an administrative error. That is not a clerical oversight. That is a coordinated identity fraud infrastructure, and it has a forensic footprint so enormous it filled its own goddamn analysis. Someone built that. Someone maintained it. Someone signed off on it.</p>
              <p>A professional security operative delivering a death threat. Not a random stranger. Not an anonymous coward. A <em>professional</em>. Documented. Timestamped. In the archive.</p>
              <p>$32.9 million in suppression expenditure. You spent more trying to bury one man's testimony than most countries spend protecting their witnesses. And you failed. You failed completely.</p>
              <p>25+ agencies in a circular referral system so elaborate it reads as its own confession. Each one pointing to the next. None accepting responsibility. All coordinating toward the same outcome: silence. The outcome they achieved instead: the most detailed institutional corruption record in Australian whistleblower history.</p>
              <p>14 psychiatric hospitalisations deployed as instruments of suppression. Not therapy. Suppression. The correlation between documentary breakthroughs and detention dates is in the forensic record now. It will not come out. It will not be amended. It is sealed.</p>
              <p>An institutional murder attempt in 2021. He was revived. Not by a hospital. By God. And the first thing he did when he opened his eyes was open a laptop. You should have thought that through a little better.</p>
              <p>Family members weaponised. Relationships severed by design. Isolation manufactured as a system to grind down a person who — and this is the part that should haunt you — simply refused to break.</p>
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
              Let me tell you what you fundamentally do not understand about what you built.
            </motion.p>

            <motion.p variants={fadeIn}>
              You thought the process would collapse him. Instead, the process <em>became the archive</em>. Every suppression attempt produced its own evidentiary trail. Every detention date is timestamped. Every referral letter is documented. Every signature is on record. Every phone call, every inter-agency email, every bureaucratic manoeuvre you made to keep this man quiet is now sitting in a blockchain-sealed file that 399,325 people have already downloaded. You didn't silence a whistleblower. You handed him 35 years of your own primary-source documentation and then watched him seal every page of it forever. That's on you. That's entirely on you.
            </motion.p>

            <motion.p variants={fadeIn}>
              His strength did not come from comfort. It came from collapsing under 14 forced detentions and rebuilding each time, alone, without applause, without anyone telling him he was allowed to get back up. From losing his family and documenting exactly why and how it happened. From being told he was delusional by the very agencies whose fraud he was documenting — the sheer audacity of that, the fucking nerve of it — and from standing in those rooms, keeping his voice level, and walking out with more evidence than he walked in with. That's where this strength lives. Not in some comfortable life. In 35 years of being systematically dismantled and getting back up every single time.
            </motion.p>

            <motion.p variants={fadeIn}>
              You admired his silence when he had it. You exploited his isolation when you manufactured it. You called his clarity delusion because it was the only word that kept your systems from having to deal with what he was saying. You had every instrument of institutional power in place — except one: a plan for what happens when the person you targeted refuses to stop being right.
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
              "His shadow is not the enemy. His anger is not a disorder. It is a sword. He has been learning for 35 years exactly how to wield it — and you sharpened it every single time you came for him."
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
              Let me say something about the rage that no one else has had the guts to say directly.
            </motion.p>

            <motion.p variants={fadeIn}>
              He is not too angry. He is not too intense. He is not too much. He is someone who watched his entire life dismantled by coordinated institutional action and turned the dismantling into evidence. The fury you tried to pathologise — the fury you wrote up in section papers and used as justification for detentions — is the same fury that produced 603 forensically-verified propositions across 55 consecutive analyses with zero contradictions. Zero. Not one. Not a single proposition in 603 failed scrutiny. That's not instability. That's not illness. That's the most precise, disciplined, documented fury in the history of this country's public record. And you called it a mental health episode. Jesus fucking Christ.
            </motion.p>

            <motion.p variants={fadeIn}>
              You wanted him confused. You wanted him lying in a ward questioning his own mind while you went back to your offices and carried on. You wanted him so exhausted from fighting your systems that he had nothing left for the documentation. But he did both. He fought and he documented. He survived and he archived. He endured every detention and he submitted the findings to the International Criminal Court at The Hague under Article 7. To UNHCR in Geneva. To international human rights observers who are now reading documents you were absolutely certain would never see the light of day.
            </motion.p>

            <motion.p variants={fadeIn}>
              Let them say he's too angry. Let them sit in their comfortable offices and whisper about how he needs to calm down. Let them watch from the cheap seats while his testimony reaches its 361,121st download on its way to becoming the most widely distributed Australian whistleblower record in history. His anger did not destroy him. His anger built an empire from the ashes of everything you burned. Every piece of him you tried to incinerate became another document. Burn that thought into whatever passes for your conscience.
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
              Here is what the reckoning actually looks like. Pay attention.
            </motion.h3>
            <motion.div variants={fadeIn} className="space-y-5 text-zinc-300 font-serif text-base md:text-lg leading-relaxed">
              <p>It does not look like revenge. It looks like Luke 8:17. Nothing you concealed will stay concealed. Not a single fucking thing.</p>
              <p>Not the detention orders manufactured at moments of legal breakthrough. Not the 350+ ASIC identity fraud registrations. Not the $32.9 million paper trail. Not the death threat from a professional security operative. Not the 25+ agencies and their coordination records. Not the names on the documents. Not the hands that signed the section papers. Not the family members who served as instruments of the persecution. Not the system that built all of it and had the absolute audacity to call it care.</p>
              <p>Every hidden thing is already disclosed. 2,304 documents say so. 603 propositions confirm it. 55 analyses with zero contradictions establish it beyond any reasonable challenge. 399,325+ downloads across six continents have distributed it so far beyond any jurisdiction you control that there is no mechanism left on earth that can put it back in the box.</p>
              <p>You built your own exposure. You did not silence a man. You made him the loudest testimony in the history of Australian whistleblowing — and then had the spectacular stupidity to give him 35 years of your own records to prove it.</p>
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
              You were never sorry. Not really. You were sorry the archive kept growing when it was supposed to stop. You were sorry the downloads kept accumulating when they were supposed to dry up. You were sorry the wrong people got nervous when the truth started moving — and you had no mechanism left to stop it because every exposure-proof system you built left documentation that he sealed into a permanent, immutable, internationally distributed record. You built a trap and walked into it 35 years in a row.
            </motion.p>

            <motion.p variants={fadeIn}>
              And the worst part — the part that should actually keep you up at night — is that he knows exactly who he is. Not despite the 35 years you put him through. <em>Because</em> of them. You refined him. You sharpened him into something the DSM has no category for and your legislation has no procedure to address. There is no section paper for a man who converts 35 years of institutional persecution into a blockchain-sealed forensic archive that reaches six continents. There is no circular referral pathway for responding to 2,304 documents with perfect chain of custody submitted to the International Criminal Court. You had every system in place except the only one that mattered: a plan for what happens when you are catastrophically, irreversibly, publicly wrong.
            </motion.p>

            <motion.p variants={fadeIn}>
              So here it is. Plain as the record.
            </motion.p>

            <motion.p variants={fadeIn} className="text-white text-2xl md:text-3xl font-serif leading-relaxed">
              You are not forgiven. You are <em>documented</em>. And those are not the same goddamn thing. One is a gift. The other is a fact that lives in blockchain forever. He chose the fact.
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
              The table is 2,304 blockchain-verified documents. The presence is 399,325+ downloads across every continent on this earth. The enemies are whoever is reading this right now and recognising themselves in it. Sit with that.
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
              He is not healing to return to who he was before you began. He is healing to resurrect the version of himself you were desperately hoping would never come back. And that version is not soft. That version is not willing to shrink or stay quiet or keep it clean for your comfort. That version has already submitted to The Hague. Has already filed with UNHCR. Has already watched the forensic record hit 48 consecutive perfect scores. Has already sat down with every gram of the fury you tried to weaponise against him and turned it into the most precise, most lethal, most legally significant documentation this country has ever produced from a single witness.
            </motion.p>

            <motion.p variants={fadeIn}>
              The wrong people got nervous. The truth was already moving. And it didn't give a damn about your jurisdictions.
            </motion.p>

            <motion.p variants={fadeIn}>
              It moved through the ICC. Through international human rights bodies. Through 55 independent analyses that examined your conduct forensically, systematically, publicly, and in permanent record. Through 399,325 people across six continents who downloaded the truth you spent $32.9 million trying to bury and passed it on to people you will never be able to reach or suppress.
            </motion.p>

            <motion.p variants={fadeIn}>
              That is not a man you successfully silenced. That is the storm you summoned when you chose 35 years of persecution over a single moment of honesty. You had the choice — at every point, in every meeting, on every section paper, in every referral letter — to stop. You chose not to stop. And every day you chose not to stop became another timestamped, blockchain-sealed, internationally-downloaded entry in a record that will outlive every single person who contributed to it.
            </motion.p>

            <motion.p variants={fadeIn}>
              You cannot un-ring this bell. It is ringing on six continents right now.
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
              <p>The weapons were 14 forced psychiatric detentions. They did not prevail. He left every single one with more documentation than he entered with. You paid for those detentions out of public money and they produced his archive. Let that sink in.</p>
              <p>The weapons were $32.9 million in coordinated suppression. They did not prevail. The archive grew anyway. It is still growing. It will keep growing.</p>
              <p>The weapons were family members turned into instruments, isolation manufactured as policy, and a death threat from a hired professional. They did not prevail. He archived every one of them.</p>
              <p>The vindication is 2,304 blockchain-sealed documents, 55 forensic analyses, 603 corroborated propositions, zero contradictions, and 399,325+ downloads across six continents. That is God's answer to your 35 years of weapons. Count it. Every download is a witness. Every witness is a verdict. And the verdict is already written.</p>
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
              So go. Get out of here. Go back to whatever comfortable life you built on the rubble of his. But go knowing that every file in this archive is your own reflection staring back at you from a mirror you cannot smash, cannot sedate, cannot refer to another agency, cannot lock in a ward. You built it. He documented it. God witnessed it. The ICC received it. UNHCR reviewed it. 399,325 members of the international public downloaded it. And history will record it exactly as it happened — not as you described it in your paperwork, not as the section papers framed it, not as the circular referral reports characterised it. As the forensic evidence proves it. Irrefutably. Permanently. In blockchain.
            </motion.p>

            <motion.p variants={fadeIn}>
              He is still standing. Rebuilt. Sharpened. Documented. Submitted to The Hague. Verified by 55 independent forensic analyses. Downloaded across six continents. And still becoming something you have no framework for, because your frameworks were designed for people who break when you push hard enough.
            </motion.p>

            <motion.p variants={fadeIn} className="text-white text-xl md:text-2xl font-serif leading-relaxed">
              He did not break. Not once. Not in 35 years. Not in 14 forced detentions. Not in a death that God reversed. Not in the betrayal of every person who should have protected him. Not once.
            </motion.p>

            <motion.p variants={fadeIn}>
              You should have chosen differently. At literally any point across 35 years of deliberate, coordinated, documented persecution, you should have chosen differently. You didn't. That's on you. That will always be on you. That is sealed in blockchain and it will be on you long after you are gone.
            </motion.p>

            <motion.p variants={fadeIn} className="text-white text-2xl font-serif leading-relaxed">
              The reckoning is not coming. It is already here. It arrived the day the first document was sealed. It is compounding every day. And it belongs now to the whole world — every person who downloaded the truth you tried to bury, every researcher who read the forensic record you tried to prevent, every international observer who received the submission you thought would never reach them.
            </motion.p>

            <motion.p variants={fadeIn}>
              You cannot outrun this. You cannot contain this. You cannot suppress this. You already tried all of that for 35 years and spent $32.9 million doing it, and the result is 399,325 downloads and counting.
            </motion.p>

            <motion.p variants={fadeIn} className="text-amber-400 font-serif italic text-xl">
              Sit with that. You've got nothing but time now.
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
              <p>399,325+ Downloads — 6 Continents</p>
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

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
