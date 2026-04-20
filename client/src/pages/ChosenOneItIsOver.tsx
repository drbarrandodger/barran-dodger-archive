import { motion } from "framer-motion";
import { Shield, Star, BookOpen, Heart, Compass, Mic, Sword, Eye, Lock, Globe, FileText, Clock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const slowFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2 } },
};

interface Identity {
  icon: React.ElementType;
  title: string;
  videoLine: string;
  reflection: string;
  archiveProof: string;
}

const FIVE_IDENTITIES: Identity[] = [
  {
    icon: Shield,
    title: "The Cycle Breaker",
    videoLine: "You are not simply someone who went through a hard season and came out the other side. You are someone who ends patterns — generational patterns, relational patterns, behavioral patterns that were handed to you before you were old enough to question them.",
    reflection: "The McLean archive documents a 35-year pattern of institutional targeting so deeply embedded in Australian government networks that it functioned as inherited policy — passed between agencies, replicated across departments, sustained by operatives who rotated roles but preserved the mechanism. Richard McLean is the point at which that pattern ends. Not because he overpowered it. Because he documented it with such completeness that it can no longer operate in darkness. 2,304 blockchain-verified documents is what a pattern ending looks like in material form.",
    archiveProof: "Named network: Allen Rigby, Bruce McMaster, Steve Iasonidis, Debbie Morgan — all documented, all cross-referenced, all submitted to the ICC.",
  },
  {
    icon: Heart,
    title: "The Wounded Healer",
    videoLine: "Every wound that was not resolved by bitterness. Every suffering that was not ended by shutting down. Every difficulty that you chose to metabolize instead of weaponise — all of it has become something. It has become medicine.",
    reflection: "The archive contains no bitterness. Read it carefully and you will not find hatred, not find calls for vengeance, not find the language of a man consumed by what was done to him. You will find 53 forensic analyses. 575 verified propositions. Clinical cross-referencing of documented evidence. The suffering was metabolized into precision. The wound became a methodology. And that methodology is now accessible to anyone — all 350,000+ who have downloaded the archive — who has been told by an institution that their experience is not real, that their evidence does not exist, that they are the problem.",
    archiveProof: "350,000+ downloads across 6 continents. The medicine is already reaching people.",
  },
  {
    icon: Compass,
    title: "The Pioneer",
    videoLine: "You enter spaces, seasons, and territories that have not been entered — not because you are reckless, but because you are willing. Every step you have taken into uncertain territory has been simultaneously a path being laid for the people who are coming behind you.",
    reflection: "No private individual had previously submitted blockchain-verified forensic documentation to the International Criminal Court under Article 7 at the scale Richard McLean achieved. No private whistleblower had cross-referenced 2,304 documents into a coherent, tamper-proof evidentiary record of this kind before institutional resources, legal teams, or financial support. He went first. The path he blazed — the blockchain verification strategy, the forensic proposition structure, the international dual-submission to both the ICC and UNHCR — is now documented and replicable by anyone who comes after him carrying a similar burden of suppressed evidence.",
    archiveProof: "ICC Article 7 submission + UNHCR Geneva filing. First of their kind at this scale by a private individual.",
  },
  {
    icon: Mic,
    title: "The Voice",
    videoLine: "There are people around you who feel things they cannot name. Who carry experiences they do not have the language for. Who know something is true but cannot articulate it. You can. That is a specific gift — the ability to hold something that is felt but not yet spoken and to give it language.",
    reflection: "The most-downloaded document in the archive is called 'The Man Australia Tried to Erase.' It reached 3,828 downloads not because it contains the most technical forensic evidence — it contains Richard McLean's testimony. His voice, giving language to an experience shared by thousands of people across six continents who have encountered institutional suppression, psychiatric labelling as a weapon of state, and the systematic erasure of a life. They downloaded it because he said what they knew but could not name. That is the voice. And the analytics confirm it is being heard.",
    archiveProof: "Top downloaded document: 'the-man-australia-tried-to-erase' — 3,828 downloads. Referrers: Facebook and Twitter — shared person to person.",
  },
  {
    icon: Sword,
    title: "The Spiritual Warrior",
    videoLine: "The one who holds ground quietly when everything around them is pressuring collapse. The one who does not make noise about standing firm because standing firm is simply what they do. Every time the pressure increased and you stayed — every time the evidence said give up and you did not — that is not stubbornness. That is spiritual warfare at the most fundamental level.",
    reflection: "Tony Ridley said 'You will be sacrificed.' He meant it. The system behind that statement — VicTrack, NDIA, ASIO-connected surveillance, professional networks spanning Charles Sturt University and private security — applied the full weight of 35 years of institutional authority against one man. He held. He did not collapse. He did not surrender the archive. He did not accept the diagnosis that was used to discredit him. He did not sign agreements that would have required his silence. He held ground. And on the other side of that holding is 2,304 documents, an ICC submission, and 399,325+ downloads. That is what holding looks like when counted.",
    archiveProof: "35 years. Zero retractions. Zero signed silences. Archive intact.",
  },
];

const THREE_SHIFTS = [
  {
    from: "Striving",
    to: "Receiving",
    videoLine: "You used to have to explain yourself to be believed. You are now coming out known. You used to seek permission to occupy space. You are now coming out authorized.",
    reflection: "For 35 years Richard McLean operated in striving mode — building the archive document by document, analysis by analysis, under conditions designed to prevent him from building anything at all. That season is complete. The archive exists. The ICC and UNHCR submissions are lodged. The blockchain timestamps are fixed. There is nothing left to strive for that has not already been achieved. The new posture is receiving — allowing what the completion makes possible to arrive.",
  },
  {
    from: "Proving",
    to: "Being",
    videoLine: "The previous season required demonstration — required that you show your faithfulness under conditions designed to test it. That season is tam. The new season asks something simpler and in some ways harder. It asks you to just be what you became.",
    reflection: "575 propositions verified. 46 consecutive perfect analytical scores. 0 contradictions. The proof is complete. It does not need to be proven again. What the archive now asks of its author is not more evidence — it is presence. To inhabit what was built. To be, without apology and without the exhausting performance of proving, the person that 35 years of formation produced.",
  },
  {
    from: "Explaining",
    to: "Embodying",
    videoLine: "There will be people who do not understand what you have become. You do not owe an explanation. You have been explaining yourself for long enough. The new posture is settled presence.",
    reflection: "The archive explains everything. It is 2,304 documents long, blockchain-verified, and freely downloadable. If someone wants to understand Richard McLean, the archive is the explanation. He does not need to provide it in person, in conversation, in legal filings, or in further submissions. He built the explanation. It exists. His task now is not to keep building the case. His task is to stand in it.",
  },
];

export default function ChosenOneItIsOver() {
  return (
    <>
      <SEO
        title="Chosen One, It Is Over — A Reflection | Dr. Richard McLean | Barran Dodger"
        description="A reflection on YouTube video LbaSmST5eHk, framed through the 35-year documented testimony of Dr. Richard McLean. For him, and for every witness who has watched this unfold."
        path="/chosen-one-it-is-over"
      />
      <ReadingProgress />
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <Navigation />

        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-zinc-950 to-zinc-950 pointer-events-none" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Badge className="mb-8 bg-indigo-900/60 text-indigo-300 border border-indigo-700/60 text-xs tracking-widest uppercase px-4 py-1.5">
                Reflection — 12 April 2026
              </Badge>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
                Chosen One.
                <br />
                <span className="text-indigo-400">It Is Over.</span>
              </h1>

              <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
                A reflection on{" "}
                <a
                  href="https://youtu.be/LbaSmST5eHk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-indigo-300 hover:text-indigo-200 transition-colors"
                  data-testid="link-source-video"
                >
                  youtu.be/LbaSmST5eHk
                </a>
                , framed through the 35-year documented testimony of Dr. Richard McLean.
                <br />Written for him, and for everyone who has watched this unfold.
              </p>

              <div className="w-12 h-0.5 bg-indigo-600 mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* Opening — For the Reader */}
        <section className="max-w-3xl mx-auto px-4 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slowFade}>
            <Card className="bg-zinc-900/40 border border-zinc-800/60">
              <CardContent className="p-8 md:p-10">
                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-5 font-semibold">For the reader</p>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-5">
                  This video does not know Dr. Richard McLean's name. It was not made for him specifically.
                  It was made for a category of person the speaker calls the "chosen one" — someone who
                  has been carrying an extraordinary weight for an extraordinary length of time, who has
                  survived what was designed to destroy them, and who is standing at a threshold they
                  may not yet recognise as an ending.
                </p>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-5">
                  The video found him. Or rather: he found it. And what it says maps onto his documented
                  reality with a precision that is worth sitting with — not as a coincidence to explain,
                  but as a mirror to look into. This page holds that mirror open. It speaks to him
                  directly. It also speaks to you — the witness, the reader, the person who has
                  arrived at this archive by some chain of events that brought you here.
                </p>
                <p className="text-zinc-400 text-base leading-relaxed italic">
                  You are holding in your hands the evidence of 35 years of a person refusing to stop.
                  This reflection asks: what does it mean that he made it?
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Section 1 — The Cost */}
        <section className="max-w-3xl mx-auto px-4 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-indigo-700" />
              <span className="text-indigo-400 text-xs uppercase tracking-widest font-semibold">The Cost</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              "You have been tired, chosen one. Not tired in the way people mean when they need a weekend."
            </h2>

            <div className="space-y-5 text-zinc-300 text-base md:text-lg leading-relaxed">
              <p>
                The video names a specific kind of exhaustion. Not the tiredness that sleep resolves. The
                tiredness that lives in the chest. The kind that accumulates from compound weight — layer
                after layer of things that would each have been manageable alone, but together created
                something that pressed down continuously without release.
              </p>
              <p>
                In the McLean record, this is not metaphor. It is documented. Professional destruction —
                the systematic dismantling of a career and livelihood across multiple institutions. Financial
                elimination. Social isolation as an operational tool. 35 years of sustained institutional
                targeting by a network whose members — Tony Ridley, Allen Rigby, Bruce McMaster, Steve
                Iasonidis, Debbie Morgan — have been named, cross-referenced, and submitted to the
                International Criminal Court.
              </p>
              <p>
                The video says something important about this exhaustion:{" "}
                <span className="text-white font-semibold italic">
                  "The tiredness you feel is not evidence that you did something wrong. It is evidence
                  of how seriously you took this. You cannot be this tired from something you gave
                  nothing to."
                </span>
              </p>
              <p>
                The archive is what giving everything looks like. 2,304 documents. 53 analyses. 575
                verified propositions. Built under conditions specifically designed to prevent its
                construction. The weight of the archive is the weight of what was given to build it.
                That weight is a credential, not a wound.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 2 — The Pattern of Joseph */}
        <section className="max-w-3xl mx-auto px-4 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-indigo-700" />
              <span className="text-indigo-400 text-xs uppercase tracking-widest font-semibold">The Pattern</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              "He was not being punished in the pit. He was being positioned."
            </h2>

            <div className="space-y-5 text-zinc-300 text-base md:text-lg leading-relaxed">
              <p>
                The video invokes Joseph — not as comfortable allegory but as documented structural
                pattern. Pit. Potiphar's house. Prison. Palace. Each stage, from the outside, appeared
                to be a setback. Each stage, from inside the story, was preparation. The prison was the
                room where he was placed in proximity to the person who would introduce him to Pharaoh.
                Every detour was a precise coordinate.
              </p>
              <p>
                The McLean timeline reads the same way. Every institutional intervention that was intended
                as a final blow became a new evidentiary layer. The targeting by VicTrack did not end
                his professional life — it added VicTrack's conduct to the record. The NDIA involvement
                did not destroy his remaining stability — it produced the NDIA documentation now in the
                archive. The surveillance operation at 10 Raleigh St Footscray, intended as covert
                intelligence extraction, became the co-tenancy ICC exhibit.
              </p>
              <p>
                The pit produced the palace documents. Every pit.
              </p>
              <p className="text-zinc-400 italic">
                The video is clear about what this means for the person standing at the end of that
                journey: "This pattern — of the preparation looking like the opposite of the promise —
                is ancient. It is documented. It is not accidental."
              </p>
              <p>
                2,304 blockchain-verified documents is the palace. Not a metaphor — the actual evidence
                record, lodged with the International Criminal Court and the United Nations High Commissioner
                for Refugees in Geneva. The preparation looked like destruction. The palace looks like this.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 3 — TAM */}
        <section className="max-w-3xl mx-auto px-4 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Card className="bg-indigo-950/40 border border-indigo-800/50">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex items-center gap-3 justify-center mb-6">
                  <div className="w-8 h-0.5 bg-indigo-600" />
                  <span className="text-indigo-400 text-xs uppercase tracking-widest font-semibold">The Hebrew Word</span>
                  <div className="w-8 h-0.5 bg-indigo-600" />
                </div>

                <h2 className="text-6xl md:text-8xl font-black text-indigo-300 mb-4 tracking-tight">TAM</h2>
                <p className="text-indigo-400 text-lg font-semibold mb-8">
                  Whole. Complete. Paid in full.
                </p>

                <div className="space-y-5 text-zinc-300 text-base leading-relaxed text-left max-w-2xl mx-auto">
                  <p>
                    The video draws a distinction that matters. There is a difference between something
                    being <em>stopped</em> and something being <em>tam</em>. Something stopped carries
                    the feeling of incompletion — a door closed before the work was done. Something tam
                    has reached its full expression. Nothing is missing. Nothing is owed. Nothing remains
                    unpaid.
                  </p>
                  <p>
                    The McLean season is tam. Not because the fight has been abandoned. Because the
                    evidence is complete. 575 propositions verified — every single one. 46 consecutive
                    perfect analytical scores. 0 contradictions across the entire body of work. The
                    record has been cross-referenced with itself, against itself, and it holds. The ICC
                    submission is lodged. The UNHCR filing is submitted. 399,325+ people have downloaded
                    the evidence.
                  </p>
                  <p>
                    There is nothing left to prove. The archive proved it. That is not resignation.
                    That is tam.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Section 4 — The Five Identities */}
        <section className="max-w-3xl mx-auto px-4 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-indigo-700" />
              <span className="text-indigo-400 text-xs uppercase tracking-widest font-semibold">The Five Identities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              What the Season Confirmed
            </h2>
            <p className="text-zinc-400 text-base mb-10 leading-relaxed">
              The video names five identities that a person carries out of a season like this one.
              Each is confirmed — not by the video's assertion, but by the documented record.
            </p>
          </motion.div>

          <div className="space-y-6">
            {FIVE_IDENTITIES.map((identity, idx) => (
              <motion.div
                key={identity.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeIn}
                data-testid={`identity-card-${idx}`}
              >
                <Card className="bg-zinc-900/50 border border-zinc-800/60 hover:border-indigo-800/60 transition-colors">
                  <CardContent className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-950 border border-indigo-800 flex items-center justify-center shrink-0">
                        <identity.icon className="h-4.5 w-4.5 text-indigo-400" />
                      </div>
                      <h3 className="text-white font-black text-xl">{identity.title}</h3>
                    </div>

                    <p className="text-zinc-500 text-sm italic leading-relaxed mb-4 border-l-2 border-zinc-800 pl-4">
                      "{identity.videoLine}"
                    </p>

                    <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                      {identity.reflection}
                    </p>

                    <div className="bg-indigo-950/40 border border-indigo-900/50 rounded-lg px-4 py-3">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="h-3 w-3 text-indigo-400 shrink-0" />
                        <span className="text-indigo-400 text-xs uppercase tracking-widest font-semibold">Archive confirmation</span>
                      </div>
                      <p className="text-zinc-400 text-xs leading-relaxed">{identity.archiveProof}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 5 — Three Shifts */}
        <section className="max-w-3xl mx-auto px-4 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-indigo-700" />
              <span className="text-indigo-400 text-xs uppercase tracking-widest font-semibold">The New Posture</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Three Shifts for the Season That Follows
            </h2>
            <p className="text-zinc-400 text-base mb-10 leading-relaxed">
              The video offers three specific changes in orientation that a person must make
              when a season like this completes. Each one maps precisely onto where the archive stands.
            </p>
          </motion.div>

          <div className="space-y-5">
            {THREE_SHIFTS.map((shift, idx) => (
              <motion.div
                key={shift.from}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeIn}
                data-testid={`shift-card-${idx}`}
              >
                <Card className="bg-zinc-900/50 border border-zinc-800/60">
                  <CardContent className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-zinc-600 font-black text-sm bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full line-through">
                        {shift.from}
                      </span>
                      <span className="text-zinc-600 text-sm">→</span>
                      <span className="text-indigo-300 font-black text-sm bg-indigo-950/60 border border-indigo-800/50 px-3 py-1 rounded-full">
                        {shift.to}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm italic leading-relaxed mb-4 border-l-2 border-zinc-800 pl-4">
                      "{shift.videoLine}"
                    </p>
                    <p className="text-zinc-300 text-sm leading-relaxed">{shift.reflection}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 6 — The Declaration */}
        <section className="max-w-3xl mx-auto px-4 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Card className="bg-gradient-to-br from-indigo-950/60 via-zinc-900/80 to-zinc-950 border border-indigo-700/50">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <Star className="h-10 w-10 text-indigo-400 mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                    The Declaration
                  </h2>
                  <p className="text-zinc-500 text-sm">
                    The video closes with five declarations spoken over the chosen one.
                    Each applies to the documented record of Dr. Richard McLean.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      declaration: "I am a cycle breaker. Every pattern that entered my family line — every generational wound that tried to pass through me — ends here with me today.",
                      applied: "Every named operative in the McLean archive was part of a system that consumed people before him. The system expected to consume him too. The archive ended that expectation. The pattern ends with him.",
                    },
                    {
                      declaration: "I am a wounded healer. My pain was not wasted. It was turned into medicine and I carry it now as a gift, not a burden.",
                      applied: "399,325+ downloads is not a download count. It is 399,325 people who found something in the archive that they needed. The pain built the medicine. The medicine is being taken.",
                    },
                    {
                      declaration: "I am a pioneer. I go first. I am not lost. I am ahead.",
                      applied: "The blockchain-verified ICC submission framework Richard McLean built is unprecedented for a private individual without institutional resources. Everyone who comes after him in a similar situation now has a map.",
                    },
                    {
                      declaration: "I am the voice. My silence is not humility. It is the last hesitation of a season that is now tam.",
                      applied: "The archive speaks. 2,304 documents, freely available, downloaded on 6 continents, shared person to person via Facebook and Twitter. The voice is already reaching places it was never supposed to reach.",
                    },
                    {
                      declaration: "I am a spiritual warrior. I hold ground. I have always stood and I stand now.",
                      applied: "35 years. Tony Ridley said 'You will be sacrificed.' The archive answered. It stands. It is blockchain-verified. It cannot be removed. He held ground and the ground held.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="border-l-2 border-indigo-700/60 pl-5">
                      <p className="text-white font-semibold text-base leading-relaxed mb-2 italic">
                        "{item.declaration}"
                      </p>
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.applied}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Closing — For Both Audiences */}
        <section className="max-w-3xl mx-auto px-4 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slowFade}>
            <div className="text-center mb-10">
              <div className="w-12 h-0.5 bg-indigo-700 mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                For Him. For You. For the Record.
              </h2>
            </div>

            <div className="space-y-6 text-zinc-300 text-base md:text-lg leading-relaxed">
              <p>
                The video says: <span className="text-white italic">"You showed up. You came here not by accident. And you stayed."</span>
              </p>
              <p>
                He stayed. 35 years. Under institutional targeting that had a name — Tony Ridley named it,
                confessed to it, named his own network. Under professional destruction that was documented
                at each stage. Under financial elimination that was designed to be final. Under surveillance
                that was designed to be invisible. He stayed. He documented. He submitted. He did not stop.
              </p>
              <p>
                The video speaks about a threshold — a crossing that happens in the invisible before it
                appears in the visible. It says: <span className="text-white italic">"The crossing already happened. This is the moment I was sent to tell you that."</span>
              </p>
              <p>
                This page is that moment, framed in the language of the archive itself. The threshold
                was crossed when the ICC submission was lodged. When the UNHCR filing was accepted. When
                the 350,000th document was downloaded. When the system's silence became its loudest
                testimony. The crossing happened. The visible world is catching up.
              </p>
              <p>
                To the reader: you are witnessing a life that refused to be erased. Whatever brought you
                to this archive — curiosity, solidarity, research, your own experience of institutional
                suppression — you are now part of the 399,325+. You are part of the visible world
                catching up.
              </p>
              <p className="text-indigo-300 font-semibold text-lg">
                It is tam. Whole. Complete. Paid in full.
              </p>
              <p className="text-zinc-500 italic">
                — Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164 ·
                12 April 2026
              </p>
            </div>
          </motion.div>
        </section>

        {/* Navigation */}
        <section className="max-w-3xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: "/heaven-stood-forensic-report", label: "Heaven Stood", icon: Shield, desc: "14 claims · Video V91Ymvc2yiQ" },
              { href: "/you-detonated-the-narrative", label: "You Detonated the Narrative", icon: Star, desc: "15 claims · Video 1gAlOlMnsrs" },
              { href: "/forensic-analysis-index", label: "Forensic Analysis Index", icon: BookOpen, desc: "53 analyses · 575/575 propositions" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group bg-zinc-900/60 border border-zinc-800 hover:border-indigo-700/60 rounded-xl p-5 transition-all"
                data-testid={`link-nav-${link.href.replace("/", "")}`}
              >
                <link.icon className="h-5 w-5 text-zinc-500 group-hover:text-indigo-400 mb-2 transition-colors" />
                <div className="text-white font-semibold text-sm">{link.label}</div>
                <div className="text-zinc-500 text-xs mt-1">{link.desc}</div>
              </a>
            ))}
          </div>
        </section>

        <ArchiveCrossLinks />
      <Footer />
      </div>
    </>
  );
}
