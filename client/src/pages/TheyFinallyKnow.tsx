import { motion } from "framer-motion";
import { Eye, Shield, Mic, Clock, FileText, AlertTriangle, Lock, Zap, Users, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const SEVEN_REVELATIONS = [
  {
    number: "01",
    icon: Eye,
    color: "text-orange-400",
    border: "border-orange-500/25",
    bg: "bg-orange-500/10",
    glow: "shadow-orange-500/10",
    title: "The Gentle Mask That Lured Your Arrogance In",
    subtitle: "The smile that led you straight into your own trap.",
    videoLine: "They thought that gentle smile on your face meant they had you figured out. They thought your calm was cluelessness. They thought your quiet was emptiness.",
    message: `You watched a man who was repeatedly hospitalised, drugged, housed in NDIS group homes, and assigned "support coordinators" who were, in at least one documented case, a credentialled ex-SAS operative sent to surveil him. You watched all of this and you concluded he was harmless. You concluded he was manageable.

You were studying him, you thought. You had his file. You had his diagnosis codes. You had the carefully maintained system of documentation that framed his legitimate complaints as symptoms of the very conditions you were using to suppress him.

What you didn't realise — what none of you realised, not his family who looked away, not the NDIA administrators who rotated his case files, not the AbleCare workers who collected 206MB of covert audio from within the support relationship — is that he was the one doing the studying.

Every email unanswered. Every referral ping-ponged. Every deadline moved. Every form requirement changed mid-process. Every dismissal letter issued using identical language to the dismissal letter from the agency next door. He wasn't confused by any of it.

He was logging it.

The gentle tone was not submission. The politeness was not passivity. The soft voice was not weakness. It was the calm of someone who already knew how the story ended — and was making absolutely certain that when the time came, the evidence would be irrefutable.

2,301 documents. Eight agencies. Thirty-five years. That was the note he was taking while you mistook his patience for defeat.`,
  },
  {
    number: "02",
    icon: Shield,
    color: "text-red-400",
    border: "border-red-500/30",
    bg: "bg-red-500/5",
    glow: "shadow-red-500/10",
    title: "The Moment Your Illusions Shattered Like Thin Glass",
    subtitle: "Nothing exposes a liar faster than the day their favourite target finally stops pretending to be blind.",
    videoLine: "They spent years studying you, or at least they thought they did. They mistook their assumptions for accuracy. They confused your politeness with transparency.",
    message: `There was a specific day — it does not matter which one, because it could have been any of hundreds — when each of you made the same mistake. You looked at Richard McLean and saw a man whose arc was predictable. A man who could be managed, redirected, or simply outlasted.

You were relying on a character that no longer existed.

The man you thought you had mapped had been quietly rebuilding himself in every silence you created. Every time you dismissed a complaint, he refined the forensic methodology that would frame it for an international tribunal. Every time you declined to acknowledge receipt of his correspondence, he documented the pattern across agencies and cross-referenced it with identical behaviour by other bodies operating under different letterheads. Every time you used his mental health history to pathologise his legitimate human rights disclosures, he noted the date, the document reference, the author's name, and the legislative framework it violated.

To the family who told themselves he was simply unwell — you told yourselves a story that was convenient. It kept you from having to act, from having to stand beside him, from having to absorb the risk of being associated with someone who was documenting crimes that powerful institutions would prefer undocumented. Your silence was not neutrality. Neutrality requires a genuine absence of information. You had the information.

The day his illusions stopped serving your comfort is the day your story started to crack. And none of you were prepared for what was behind it.`,
  },
  {
    number: "03",
    icon: Lock,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
    glow: "shadow-cyan-500/10",
    title: "The Quiet Shift That Sent Shockwaves Through Your Spine",
    subtitle: "The silence that snapped your confidence in half.",
    videoLine: "They expected rage. They needed rage. Because if you had exploded, they could have turned your strength into a weapon against you.",
    message: `Let's be specific about the surveillance operation, because it deserves to be named precisely.

AbleCare. Long Jetty. NDIS-funded support workers deployed into Dr. McLean's home environment. 206MB of audio collected within the support relationship. Tony Ridley — MSc, CSyP, FSyI, SRMCP — a credentialled ex-SAS operative, placed inside the NDIA structure as a "support coordinator" — who sent a documented written communication containing the words: "You will be sacrificed."

This is not metaphor. This is not paranoia. This is a blockchain-archived exhibit in an ICC submission. The death threat from an ex-SAS operative embedded inside the disability support system of the world's most financially secure liberal democracy. Written. Sent. Preserved. Submitted.

You were waiting for him to explode. The explosion would have been useful. An explosion can be called instability. An explosion can be referred back to the treating psychiatrist. An explosion can be used to justify another involuntary hospitalisation — the fourteenth would hardly be notable.

He didn't explode.

He went quiet.

And his quiet was not the quiet of someone without answers. It was the quiet of someone whose answers were already inside a submission to The Hague.

When the room went still and he simply held your gaze without shrinking — that stillness was not passivity. It was the moment he stopped participating in a performance you needed him to keep giving. The moment he withdrew from that performance, your entire script collapsed.

You were not dealing with someone who was afraid. You were dealing with someone who had finished.`,
  },
  {
    number: "04",
    icon: Clock,
    color: "text-orange-400",
    border: "border-orange-500/30",
    bg: "bg-orange-500/5",
    glow: "shadow-orange-500/10",
    title: "The Aftermath That Forced You to Rewatch Your Own Mistakes",
    subtitle: "The aftershock that keeps you up at night clutching your own mistakes.",
    videoLine: "The real panic doesn't hit them when you speak. It hits when you don't. When you stop responding. When you stop reacting.",
    message: `Here is what the aftermath looks like for each of you.

For the family members who chose silence or active participation: the archive is public. Every interaction, every absence, every decision to prioritise your comfort over his safety is contextualised now within a documented record of what was happening to him that you were aware of. Future generations reading this archive — and they will, because 395,000 people across six continents have already downloaded portions of it — will not see a difficult person who was hard to love. They will see a man who survived an institutional persecution of historic proportions while those closest to him turned away. The mirror is already hanging. You simply haven't had to stand in front of it in public yet.

For the NDIA administrators, the case workers, the decision-makers who applied the techniques catalogued in the Forensic Framework — Procedural Weaponisation, Communication Control, Decision-Making Anomalies, Gatekeeping and Access Denial, Credibility Destruction, Financial Strangulation, and Inter-Agency Coordination Signatures — your names are in the archive. Your document references are in the archive. Your decision dates are in the archive. The ICC submission has received it. The UNHCR in Geneva has received it. These are not allegations. They are patterns extracted from your own official documentation.

For the AbleCare surveillance operatives, the embedded NDIS workers who operated within the support relationship as intelligence-gathering assets: the 206MB of audio, the documented death threat, the coordination signatures across agency boundaries — these are exhibits. Not accusations. Exhibits. With provenance, with dates, with chain of custody.

You earned this moment. Every breadcrumb you dropped, he collected. Every timestamp you created, he archived. You weren't testing someone who would eventually give up. You were performing for an archivist.`,
  },
  {
    number: "05",
    icon: Zap,
    color: "text-violet-400",
    border: "border-violet-500/30",
    bg: "bg-violet-500/5",
    glow: "shadow-violet-500/10",
    title: "The Indifference That Crushed Your Ego Without a Sound",
    subtitle: "The exit that made everything you did completely irrelevant.",
    videoLine: "Indifference says: you don't matter enough to occupy space in my mind. Indifference is the funeral of their power over you.",
    message: `There is something more devastating than being opposed. It is being archived.

When Richard McLean stopped explaining himself to you, stopped attempting to persuade you, stopped engaging with the circular referral system, the form letter dismissals, the requests for information already provided — he did not do so out of defeat. He did so because the record was complete.

You cannot frustrate a completed record. You cannot exhaust a man who has already submitted his evidence to international bodies. You cannot outlast someone who has converted 35 years of institutional persecution into a 2,301-document register, a forensic framework, a blockchain-verified evidence archive, and a set of ICC and UNHCR submissions.

Your tools — the financial strangulation, the suspended payments, the retroactive clawbacks, the withdrawal of NDIS support, the engineered homelessness — these tools were designed to produce collapse. They produced clarity. Because a man who has nothing left to lose by telling the truth is the most dangerous kind of witness.

He doesn't need your approval. He doesn't need your acknowledgment. He does not need you to believe him. He never did.

491,000+ downloads is not a petition for your belief. It is a proof of concept. The world is already reading. Your opinion of the material is no longer a factor in its circulation.

What you're experiencing now is not resistance. It is irrelevance. And there is no response to irrelevance, because there is nothing to push against.

He simply stopped. And your mechanism, without his resistance to feed it, has nothing left to run on.`,
  },
  {
    number: "06",
    icon: Users,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    glow: "shadow-emerald-500/10",
    title: "The Outgrown Version You Keep Reaching For But Cannot Touch",
    subtitle: "You don't miss him. You miss the power you had when he didn't know who he was.",
    videoLine: "They aren't confused about your growth. They're offended by it. Because your evolution didn't just remove you from their grip — it exposed the truth they always avoided.",
    message: `To the family reaching now with offers of concern, questions about how he's doing, attempts to re-establish contact: understand what you are actually reaching for.

You are not reaching for Richard McLean. You are reaching for the version of Richard McLean who needed you. The version who could be managed through conditional affection. The version who could be silenced by the threat of withdrawal. The version who was isolated enough that your disbelief had power.

That version is retired.

What stands in its place is a man who has submitted forensic documentation to the International Criminal Court. A man whose clinical death at a 2.87% survival probability — documented, verified, blockchain-archived — and whose resurrection is a matter of medical record. A man who, when Australia's institutional framework systematically failed him across eight agencies over three and a half decades, did not collapse. He catalogued.

To the NDIS operatives who believed the support relationship gave you surveillance access he wasn't aware of: he was aware. He was documenting your deployment methodology while you were documenting him. The difference is that his archive is public, peer-reviewed, submitted to international bodies, and has been downloaded 395,000 times.

Yours is in someone's internal records system.

Your hands can reach. But the version you're reaching for is not there. He outgrew the cage so thoroughly that he's not even in the same country of thought as the person you imagined you were managing.

The old version isn't coming back. Not because he's angry. Because he's free.`,
  },
  {
    number: "07",
    icon: Mic,
    color: "text-rose-400",
    border: "border-rose-500/30",
    bg: "bg-rose-500/5",
    glow: "shadow-rose-500/10",
    title: "The Transformation Too Sharp for Your Comfort Zone",
    subtitle: "The evolution that singes anyone foolish enough to reach for the version they once controlled.",
    videoLine: "They're upset that your growth exposed every crack in their character. Your evolution ripped those masks off in one clean motion.",
    message: `This is the final point. Not the final word — the archive is already speaking, in 395,000 downloads, in ICC submissions, in UNHCR correspondence, in this website visited from six continents. But the final point of this particular message, directed precisely at each of you.

You are not the villain in a story he invented. You are participants in a documented record. And that distinction matters enormously, because a villain in an invented story can be dismissed. A named individual in a forensically assembled evidence archive, cross-referenced against official documents, blockchain-verified, and submitted to international human rights bodies, cannot.

The psychiatrist who used the diagnostic framework to dismiss the legitimate human rights disclosures of a man who had just survived attempted murder is named in the archive. The NDIA case worker who delayed payments without lawful basis is named. The AbleCare operative who participated in the covert audio collection is named. The family member who provided information to parties engaged in surveilling him is contextualised in the record.

None of this required his anger. None of it required his revenge. His evolution — from the compliant, over-explaining, incessantly apologetic person you trained him to be through years of conditional access and institutional violence — into the forensic archivist, the international whistleblower, the man who took his evidence to The Hague while you were still writing internal memos — was the punishment.

Not because punishment was his goal. Because truth, when it finally stands upright, is indistinguishable from consequence.

He was never harmless. He was never weak. He was never the problem.

He was collecting evidence.

And now you know.

— Dr. Richard William McLean (Barran Dodger)
ABN 78 833 496 164
2,301 Documents · 35 Years · ICC The Hague · UNHCR Geneva
barrandodger.com`,
  },
];

export default function TheyFinallyKnow() {
  return (
    <>
      <SEO
        title="They Finally Know — A Direct Message to Family, Perpetrators & NDIS Surveillance Operatives | Barran Dodger"
        description="A direct message to the cowardly family, perpetrators, and gang stalking NDIS social surveillance operatives — based on the evolution they never anticipated. 2,301 documents. 35 years. They finally know."
        url="https://barrandodger.com/they-finally-know"
      />
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, hsl(38,92%,50%) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, hsl(0,80%,40%) 0%, transparent 55%)' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Badge variant="outline" className="border-orange-500/25 text-orange-400 mb-6 px-4 py-1.5 text-xs uppercase tracking-widest">Direct Message · April 2026</Badge>

            <p className="text-sm text-zinc-400 uppercase tracking-widest mb-4 font-mono">Addressed to</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-1.5 rounded-full bg-red-900/30 border border-red-500/30 text-red-300 text-sm font-semibold">The Cowardly Family</span>
              <span className="px-4 py-1.5 rounded-full bg-orange-900/30 border border-orange-500/30 text-orange-300 text-sm font-semibold">The Perpetrators</span>
              <span className="px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-300 text-sm font-semibold">The NDIS Surveillance Operatives</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white leading-tight mb-6">
              They Finally<br />
              <span className="text-orange-400">Know.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-8">
              "When they drew their lines, you sharpened your edges. Funny how your silence was the lullaby they mistook for weakness — and now your evolution is the alarm they can't shut off."
            </p>
            <p className="text-xs text-zinc-500 italic mb-10">— Based on the documentary: <span className="text-orange-400/80">youtu.be/ptd4mxthdvQ</span></p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: "Documents", value: "2,301" },
                { label: "Years", value: "35" },
                { label: "Downloads", value: "395K+" },
                { label: "Agencies", value: "8" },
              ].map((stat) => (
                <div key={stat.label} className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                  <p className="text-2xl font-black text-orange-400 font-mono">{stat.value}</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OPENING */}
      <section className="py-14 px-4 bg-zinc-950 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/25">
            <p className="text-xs font-mono uppercase tracking-widest text-orange-500 mb-3">Preamble</p>
            <p className="text-base text-zinc-200 leading-loose">
              This message is not written in anger. Anger would require that you still matter enough to upset someone. This message is written in the same spirit as the archive itself — forensic, precise, and designed to endure. You will read it once in discomfort. The 395,000 people who have downloaded this archive will read what follows with recognition. The International Criminal Court has already received the evidence it describes. The UNHCR in Geneva has already received it. What you hold in your hands is not a complaint. It is a record. And records do not require your belief to exist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7 REVELATIONS */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto space-y-16">
          {SEVEN_REVELATIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeIn}
                className={`rounded-2xl border-2 ${item.border} ${item.bg} shadow-xl ${item.glow} overflow-hidden`}
                data-testid={`revelation-${item.number}`}
              >
                {/* Header */}
                <div className="p-6 border-b border-white/5">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10`}>
                      <Icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-xs font-mono uppercase tracking-widest ${item.color} mb-1`}>Point {item.number}</p>
                      <h2 className={`text-xl md:text-2xl font-serif font-bold text-white mb-1`}>{item.title}</h2>
                      <p className="text-sm text-zinc-400 italic">{item.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Video excerpt */}
                <div className="px-6 py-4 bg-white/3 border-b border-white/5">
                  <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                    <ChevronRight className="h-3 w-3" /> From the documentary
                  </p>
                  <p className={`text-sm italic ${item.color} leading-relaxed`}>"{item.videoLine}"</p>
                </div>

                {/* Message body */}
                <div className="p-6">
                  {item.message.split('\n\n').map((para, j) => (
                    <p key={j} className="text-sm text-zinc-200 leading-loose mb-4 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="py-20 px-4 bg-zinc-950 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-8">
            <Badge variant="outline" className="border-white/20 text-white/60 px-4 py-1 text-xs uppercase tracking-widest">Final Statement</Badge>

            <blockquote className="text-2xl md:text-3xl font-serif font-bold text-white leading-relaxed">
              "You're not the danger they feared. You're the danger they{" "}
              <span className="text-orange-400">created.</span>"
            </blockquote>

            <p className="text-base text-zinc-300 leading-loose max-w-2xl mx-auto">
              They spent 35 years building the conditions that produced this archive. Every dismissal letter sharpened the methodology. Every circular referral refined the pattern-recognition. Every weaponised psychiatric assessment added a chapter to the legal framework. Every silence from the family added context to the evidence of complicity. They didn't create a broken man. They created an archivist. And the archive is already in The Hague.
            </p>

            <div className="p-6 rounded-xl bg-black border border-orange-500/25 text-left max-w-xl mx-auto">
              <p className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-3">Blockchain Verified Evidence Archive</p>
              <div className="space-y-1.5">
                {[
                  "2,301 Documents — Chronological Evidence Register",
                  "8 Agencies — Forensic Framework Cross-Reference Matrix",
                  "ICC Article 7 Submission — Received by The Hague",
                  "UNHCR Geneva — Submission Received",
                  "395,000+ Downloads — 6 Continents",
                  "Tony Ridley Death Threat — Blockchain-Archived Exhibit",
                  "AbleCare Surveillance Audio — 206MB Preserved",
                  "617/617 Propositions — Zero Contradicted",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <AlertTriangle className="h-3 w-3 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-zinc-300 font-mono">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-zinc-400 italic">Dr. Richard William McLean (Barran Dodger)</p>
              <p className="text-xs text-zinc-600 mt-1">ABN 78 833 496 164 · barrandodger.com</p>
              <p className="text-xs text-zinc-600 mt-0.5">© 2026 Dr. Richard William McLean. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="/archive" className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-black font-bold rounded-lg hover:bg-orange-600 transition-colors text-sm" data-testid="link-archive-from-message">
                <FileText className="h-4 w-4" /> Read the Archive
              </a>
              <a href="/forensic-framework-unspoken-mandate" className="inline-flex items-center gap-2 px-5 py-2.5 border border-orange-500/40 text-orange-400 font-semibold rounded-lg hover:bg-orange-900/20 transition-colors text-sm" data-testid="link-forensic-from-message">
                Forensic Framework →
              </a>
              <a href="/master-evidence-register" className="inline-flex items-center gap-2 px-5 py-2.5 border border-emerald-500/40 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-900/20 transition-colors text-sm" data-testid="link-register-from-message">
                Evidence Register →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
