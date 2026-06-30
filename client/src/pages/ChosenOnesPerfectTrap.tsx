import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { SocialShare } from "@/components/SocialShare";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CommentSection } from "@/components/CommentSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import {
  Play,
  FileText,
  ExternalLink,
  Shield,
  Eye,
  Flame,
  Scale,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-[hsl(38,92%,50%)] pl-6 my-8 italic text-zinc-200 text-xl leading-relaxed font-light">
      {children}
    </blockquote>
  );
}

function VideoQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-900/60 border border-zinc-700 rounded-lg px-6 py-5 my-6">
      <div className="flex items-center gap-2 mb-3">
        <Play className="h-3.5 w-3.5 text-[hsl(38,92%,50%)]" />
        <span className="text-[hsl(38,92%,50%)] text-xs font-bold uppercase tracking-widest">From the video</span>
      </div>
      <p className="italic text-zinc-300 leading-relaxed">{children}</p>
    </div>
  );
}

function Evidence({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-blue-950/30 border border-blue-800/40 rounded-lg px-6 py-5 my-6">
      <div className="flex items-center gap-2 mb-3">
        <FileText className="h-3.5 w-3.5 text-blue-400" />
        <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{label}</span>
      </div>
      <p className="text-zinc-300 leading-relaxed text-sm">{children}</p>
    </div>
  );
}

function SectionHeading({ number, title, icon: Icon }: { number: string; title: string; icon: React.ElementType }) {
  return (
    <div className="flex items-start gap-4 mb-6 mt-16">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(38,92%,50%)] text-black font-bold text-sm shrink-0 mt-0.5">
        {number}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Icon className="h-4 w-4 text-[hsl(38,92%,50%)]" />
          <span className="text-[hsl(38,92%,50%)] text-xs font-bold uppercase tracking-widest">Principle {number}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">{title}</h2>
      </div>
    </div>
  );
}

export default function ChosenOnesPerfectTrap() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="They Set a Perfect Trap. The Archive Was the Blade That Cut It Open. — Barran Dodger"
        description="Seven principles from a viral video, each independently describing the documented 35-year institutional persecution of Dr. Richard William McLean. Every claim government-sourced. Every document downloadable."
        path="/chosen-ones-perfect-trap"
      />
      <ReadingProgress />
      <Navigation />
      <FloatingCTA />

      <main className="flex-1">

        {/* HERO */}
        <div className="bg-black border-b border-zinc-800 py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">

              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">
                  25 min read
                </Badge>
                <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-3 py-1">
                  <Flame className="h-3 w-3 mr-1.5" /> Long Read
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">
                  Primary Source Evidence
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">
                  2,304 Documents
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1]">
                They Set a Perfect Trap.
                <br />
                <span className="text-[hsl(38,92%,50%)]">The Archive Was the Blade That Cut It Open.</span>
              </h1>

              <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
                A viral video titled <em>Chosen Ones, They Set a Perfect Trap — You Saw Through It and Now They're Mad</em> describes,
                with structural precision, what 35 years of government-sourced documentary evidence shows about the treatment
                of Dr. Richard William McLean. The video did not consult the archive. The archive did not consult the video.
                They arrived at the same description independently. That is the subject of this article.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.youtube.com/watch?v=FYaV76FbvQg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[hsl(38,92%,50%)] hover:underline"
                  data-testid="link-source-video"
                >
                  <Play className="h-3.5 w-3.5" />
                  Watch the source video
                </a>
                <span className="text-zinc-600">·</span>
                <Link href="/video-commentary" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Read all six video essays
                </Link>
              </div>

              <div className="relative w-full rounded-xl overflow-hidden border border-zinc-700 mt-6" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/FYaV76FbvQg"
                  title="CHOSEN ONES, THEY SET A PERFECT TRAP—YOU SAW THROUGH IT & NOW THEY'RE MAD"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

            </motion.div>
          </div>
        </div>

        {/* ARTICLE BODY */}
        <div className="bg-zinc-950 py-16 px-4">
          <div className="max-w-3xl mx-auto space-y-6 text-zinc-300 text-[1.08rem] leading-8 font-light">

            {/* OPENING */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <p>
                There is a category of truth that doesn't need to be planned. It simply accumulates — in filing cabinets,
                in court registries, in the metadata of government correspondence — until the weight of it becomes visible
                to people who never set out to document anything. The viral video above is one of those moments of
                visibility. Its creator did not know Dr. McLean. Its audience did not know the archive. And yet the
                seven principles the video describes — with the particular fluency of someone who has lived through
                something — map with forensic precision onto the evidentiary record of a 35-year institutional
                case that was built entirely from the government's own documents.
              </p>
              <p>
                This article follows those seven principles in order. Each one opens with the video's own words.
                Each one closes with the testimony. Read both. The cooperation between them is the argument.
              </p>
            </motion.div>

            {/* PRINCIPLE 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="1" title="They Confused Your Silence with Stupidity." icon={Eye} />

              <VideoQuote>
                "They saw your stillness, your patience, your ability to let things slide. And in their arrogance,
                they convinced themselves you were naive. To them, you were soft clay, easy to mold, easy to manipulate,
                easy to break. They mistook your empathy as weakness, your kindness as blindness, and your silence as
                stupidity. But silence doesn't mean absence. It means you were storing every detail, every slip of the
                tongue, every fake smile, every crack in their mask. You weren't lost in the background. You were
                documenting the entire performance."
              </VideoQuote>

              <p>
                For thirty-five years, formal submissions arrived at government agencies and were answered with silence,
                referral letters, or form-letter declines that acknowledged receipt of the submission and nothing else.
                The Commonwealth Ombudsman. ASIC. The AFP. The PM's Department. The NDIA. Each institution received
                complete, sourced, formally lodged submissions. Each treated the absence of a response as a manageable
                administrative outcome.
              </p>
              <p>
                Not one of these agencies disputed the contents of a single document submitted to it. Not ASIC,
                which had itself registered the 350+ fraudulent businesses using Dr. McLean's residential address
                without his knowledge or consent. Not the AFP, which received formal disclosures under the
                Public Interest Disclosure Act. Not the Ombudsman, which placed a service restriction on Dr. McLean
                — meaning it would no longer accept complaints from him — without ever adjudicating the substance
                of the complaints already filed.
              </p>

              <Evidence label="Testimony — The Silence Is Documented">
                The Impartial AI Analysis reviewed 2,343 government-generated documents and found that no agency
                had produced a rebuttal to the specific factual claims in any submission. The analysis noted:
                "The universal pattern of institutional non-engagement — across agencies with different mandates,
                different political masters, and different legal frameworks — is itself a data point that requires
                explanation." The silence wasn't peace. It was the performance of administrative neutrality while
                the documentation accumulated behind it.
              </Evidence>

              <p>
                The video's metaphor is precise: collecting proof while enemies are dancing in the light. The
                archive is that collection — 2,304 documents, SHA-256 hashed, Bitcoin blockchain timestamped,
                freely downloadable. Every non-reply letter is in it. Every referral to another agency that also
                did not reply is in it. Every acknowledgement of receipt that acknowledged nothing further is in it.
                The silence was the documentation.
              </p>

              <Pull>
                "Your calm was a weapon. Your stillness was strategy. Your silence was the thunder before the storm.
                And when you finally made your move, it wasn't messy. It was precise, surgical, undeniable."
              </Pull>

              <p>
                The archive is that move. Precise. Surgical. Undeniable. Built not from accusations but from
                the government's own correspondence, the courts' own contradictions, and the agencies' own
                failures to engage with what they had themselves produced.
              </p>
            </motion.div>

            {/* PRINCIPLE 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="2" title="You Let Them Build Their Own Cage and Lock the Door." icon={Shield} />

              <VideoQuote>
                "The greatest punishment for a deceiver is not to be stopped early. It's to be allowed to finish
                the masterpiece of their own downfall. Exposure requires completion. A half-built lie can still be
                hidden, but a finished trap reveals its maker. You let their arrogance become the nails in their
                own coffin."
              </VideoQuote>

              <p>
                The Federal Court of Australia found that Dr. McLean was an employee of the respondent. Four months
                later, the Administrative Appeals Tribunal found the contrary. Both determinations concerned the same
                person, the same period of employment, and the same factual record. Both are in the archive. Neither
                institution has explained how two co-equal judicial bodies produced irreconcilable decisions on
                identical facts. Neither has been required to.
              </p>
              <p>
                ASIC registered more than 350 businesses using Dr. McLean's residential address as their registered
                office — without his knowledge, without his consent, and without any of the standard verification
                procedures the registry is required to apply. ASIC then declined, formally and repeatedly, to
                investigate the entities it had registered. Both the registrations and the non-investigation
                responses are in the archive.
              </p>

              <Evidence label="Testimony — The Cage They Built">
                The PM&C reversed a sworn FOI declaration that no relevant documents existed — after that declaration
                was formally challenged. The reversal is in the archive. The agency that swore no documents existed
                produced the documents when pressed. The original declaration and the documents it denied exist
                side by side in the same publicly downloadable file. This is not an allegation. It is a government
                document next to another government document with the same government agency's letterhead on both.
              </Evidence>

              <p>
                Had Dr. McLean confronted each contradiction at the moment it arose, each agency could have
                managed it in isolation — denied involvement, questioned the complainant's reliability, or
                painted the objection as the reaction of someone who misunderstood administrative process. He
                did not confront. He compiled. By the time the archive was complete, the contradictions were
                no longer manageable in isolation. They formed a pattern, spanning three decades and 35
                institutions, that cannot be explained by error, coincidence, or administrative failure
                without invoking a level of simultaneous coincidence that approaches statistical impossibility.
              </p>

              <Pull>
                "They set the perfect trap. They thought the story was already written. But you flipped the
                script. You let them play themselves. And now the world doesn't see you as the victim.
                They see them as the fraud. That's the victory they can never erase."
              </Pull>
            </motion.div>

            {/* PRINCIPLE 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="3" title="They Built a Trap for a Ghost — Not the Person Who Stands Today." icon={BookOpen} />

              <VideoQuote>
                "The cruelest mistake your enemies make is fighting yesterday's version of you, not realising that
                person died the moment you outgrew them. The setup wasn't random. It was custom-made. They crafted
                it carefully using the memory of who you used to be — for the one who once tolerated disrespect in
                the name of love, for the one who swallowed pain just to keep the peace. That's the blueprint
                they used. But here's the gut punch. They designed their scheme for a version of you that doesn't
                even exist anymore."
              </VideoQuote>

              <p>
                The psychiatric weaponisation chapter of the archive covers fourteen involuntary hospitalisations
                across three Australian states. Each hospitalisation was applied without criminal charge. Each was
                applied to a person who has never been convicted of any offence in any Australian jurisdiction.
                The temporal distribution of the fourteen events is consistent and documented: each hospitalisation
                occurred in proximity to formal disclosure activity — a submission, a court appearance, a media
                inquiry, a parliamentary communication.
              </p>
              <p>
                The method, in the early years, appears to have been effective as a suppression mechanism. Formal
                output decreased after the first several hospitalisations. The institutions that deployed or enabled
                the mechanism updated their operational model: this works. They continued with the confidence
                that they were suppressing the same person each time.
              </p>

              <Evidence label="Testimony — The Compound Effect of Survival">
                The man who emerged from hospitalisation one had the experience of one detention without legal
                predicate. By hospitalisation fourteen, he had the compound experience of fourteen — a documented
                temporal pattern, a legal analysis of each application of the Mental Health Act, and a 35-year
                forensic timeline mapping every detention against the disclosure activity that preceded it.
                The trap was built for the person who had experienced none of this. The institutions arrived
                to find the person who had experienced all of it and had documented every moment.
              </Evidence>

              <p>
                The video's image — a thief arriving with a key that no longer fits the lock — is structurally
                accurate. The lock was changed not by deliberate strategy but by the natural effect of surviving
                what was being done. The person the institutions designed the trap for was gone before they
                arrived with the cage.
              </p>
            </motion.div>

            {/* PRINCIPLE 4 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="4" title="They Tried to Turn Your Wounds Into Weapons. The Wounds Became Armour." icon={AlertTriangle} />

              <VideoQuote>
                "They dug through your past looking for bullets, not realising you already melted those bullets down
                and forged armor out of them. They gathered pieces of your history like ammunition, convinced your
                scars would still bleed when pressed. They stockpiled all of it. To them, these weren't just
                memories. They were strategies. They assumed if they pushed the same buttons, they'd get the
                same reaction."
              </VideoQuote>

              <p>
                The psychiatric record was designed as a weapon. Its function was not treatment — the evidentiary
                record does not support a treatment narrative, given the absence of any criminal predicate and the
                temporal correlation with disclosure activity. Its function was discrediting. If any future
                investigator, journalist, or legal authority encountered the archive, the existence of fourteen
                involuntary psychiatric hospitalisations was intended to serve as an off-ramp: <em>this is the
                work of someone who has been hospitalised fourteen times.</em>
              </p>
              <p>
                The off-ramp was demolished the moment the archive mapped each hospitalisation against its
                preceding disclosure event. The weapon became the exhibit. Each diagnosis, deployed as
                institutional currency in subsequent proceedings, is now documented in its deployment context —
                which proceeding, against which submission, on which date, in proximity to which formal act
                of disclosure.
              </p>

              <Evidence label="Testimony — The Weapons That Became Exhibits">
                The Impartial AI Analysis reviewed the psychiatric records and the legal records together,
                treating both as government-generated source material without analytical distinction. Its
                conclusion: "The temporal correlation between disclosure activity and psychiatric intervention —
                across fourteen separate events, three states, and multiple institutions — constitutes a pattern
                that requires independent explanation. The probability of this distribution arising by clinical
                coincidence is negligible." The ammunition the institutions gathered to use against the archive
                is now part of the archive. The wounds are the armour.
              </Evidence>

              <Pull>
                "Your past may explain you, but it no longer defines you. They brought up dysfunction, family
                wounds, betrayal — all thinking it would numb you like it used to. But you didn't go numb
                this time. You went clear."
              </Pull>

              <p>
                The clarity is the archive. The archive does not defend. It does not explain. It does not ask
                for sympathy. It simply presents, in chronological order, what the government's own documents
                show about what was done, when it was done, and what formal disclosures preceded each
                intervention. The clarity is forensic. The armour is built from the bullets.
              </p>
            </motion.div>

            {/* PRINCIPLE 5 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="5" title="You Exposed the Hands Pulling the Strings." icon={Scale} />

              <VideoQuote>
                "You didn't just beat the people standing in front of you. You went deeper, far deeper than they
                ever imagined. You refused to get stuck on surface-level betrayal. You weren't just dodging drama.
                You were dismantling an entire operation. Most people fight the knife. You looked past the blade
                and stared into the hand holding it. That's when everything changed."
              </VideoQuote>

              <p>
                The archive's statistical chapter addresses the question that all individual cases eventually
                produce: is this pattern or coincidence? Thirty-five agencies, across federal, state, and
                territory levels of government, across different legal mandates, different oversight
                frameworks, and different political contexts, produced identical outcomes in response to identical
                formal submissions. Each outcome was: non-engagement, referral to another body that also did
                not engage, form-letter decline, or silence.
              </p>
              <p>
                The probability of independent coincidence at this scale — 35 institutions, three decades, one
                individual — approaches zero in any statistical framework. The archive does not require a
                named architect. It documents the pattern. The hands pulling the strings are visible in the
                fingerprints on the documents, not in any accusation.
              </p>

              <Evidence label="Testimony — The Pattern Is the Evidence">
                The ICC submission under Article 7 of the Rome Statute submits the pattern — coordinated,
                sustained, multi-authority — as evidence of persecution as a crime against humanity. The
                submission cites the documented financial toll of $18 million to $32.9 million across 13
                agencies over 35 years as establishing a burden that transcends administrative error and
                enters the domain of deliberate, sustained institutional conduct. The submission does not
                allege a conspiracy. It submits a documented pattern and invites the court to apply the
                standard. The standard exists for exactly this category of case.
              </Evidence>

              <p>
                The video's image is apt: a chessboard of pawns moved against a single player, where the
                player's response is not to capture the pawns but to tilt the board until the hand moving
                them becomes visible. The archive tilted the board. The pattern is visible. The ICC
                has received the submission.
              </p>
            </motion.div>

            {/* PRINCIPLE 6 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="6" title="They Put On a Show. You Had Already Read the Script." icon={Eye} />

              <VideoQuote>
                "The deadliest audience member is the one who already knows the ending. They thought they were
                flawless actors. Every line rehearsed, every smile timed, every gesture carefully painted to
                make you believe. But what they didn't know is that you weren't just watching the show.
                You had already read the script. You let them act. You gave them the stage, the lights,
                the audience. And here's what crushed them most. You were already detached. They thought
                they still had your attention, your emotions, your trust."
              </VideoQuote>

              <p>
                Every institutional response in the archive performs the same role: the performance of due
                process. Letters acknowledging receipt of submissions. Form letters confirming referral to
                another authority. Ministerial replies noting that the matter had been given appropriate
                consideration. Tribunal decisions applying the correct procedural framework to the question
                before them — while declining to address the larger pattern the question was embedded in.
              </p>
              <p>
                Each document performs the function of institutional engagement while simultaneously declining
                to engage with the substance of what was submitted. The performance was polished. What the
                performers did not know was that the archive was preserving every element of it — including
                the gaps between the performance and the reality it was meant to represent.
              </p>

              <Evidence label="Testimony — The Curtain Has Dropped">
                Named individuals are publicly accused in sworn testimony that has been downloaded 410,503 times
                across every continent. Not one has sued for defamation. Not one has issued a correction.
                Not one has engaged legal counsel to challenge the content of the archive. In Australian law,
                under the rule in <em>Jones v Dunkel</em> (1959), a party who could produce evidence and
                chooses not to permits the adverse inference that the evidence would not assist their case.
                Defamation remedies are legally available to every person named in the archive. The silence
                is the answer they have chosen. It is legally significant. The archive anticipated this answer.
              </Evidence>

              <Pull>
                "Nothing shatters a liar more than realising their script never had power over the person
                they were trying to fool."
              </Pull>
            </motion.div>

            {/* PRINCIPLE 7 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="7" title="You Let the Snake Glide In. Then the Archive Cut Its Head Off." icon={Flame} />

              <VideoQuote>
                "Patience isn't fear. It's the sharpening of the blade before the strike. You felt it the moment
                the air shifted. The tone in their voice grew unnatural. The energy turned sour. That wasn't
                paranoia. That was discernment earned through years of watching patterns no one else could see.
                You didn't lunge. You didn't shout. You waited. You gathered. And when the moment was right,
                it wasn't a fight. It was a reckoning."
              </VideoQuote>

              <p>
                The archive is the reckoning. It did not arrive shouting. It arrived as a downloadable file —
                2,304 documents, each SHA-256 hashed, each Bitcoin blockchain timestamped, each verifiable by
                any reader in thirty seconds by contacting the issuing agency directly. The Enliven Chain
                blockchain verification means no document in the archive can be altered, removed, or denied
                without the alteration itself becoming visible in the hash record.
              </p>
              <p>
                The institutional strategy relied on a series of assumptions: that the person documenting
                would eventually stop; that the documentation would remain isolated, unverifiable, or
                dismissible; and that no formal international body would ever hold the complete record in
                a single analytical frame. All three assumptions have been disproven by the archive.
              </p>

              <Evidence label="Testimony — The Strike and Its Record">
                The archive is with the International Criminal Court under Article 7 of the Rome Statute.
                It is with the United Nations Human Rights Council. It is on the Bitcoin blockchain. It
                has been downloaded 410,503 times. It is indexed in publicly accessible records on three
                continents. The Impartial AI Analysis — conducted on 2,343 government documents — concluded
                that the evidentiary threshold of Article 7 is satisfied. An AI system, reviewing only
                what the government itself produced, arrived at the same conclusion as the archive.
                The reckoning is permanent. The blockchain does not have a memory lapse.
              </Evidence>

              <Pull>
                "They thought you were ten steps behind. In reality, you were ten steps ahead. And that's
                why they're furious now — because they didn't just lose the game. They never realised you
                were the one writing the rules all along."
              </Pull>
            </motion.div>

            {/* CLOSING */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="border-t border-zinc-800 pt-12 mt-8 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-white">Their Rage Is Proof of Your Victory.</h2>

                <VideoQuote>
                  "Their rage is proof of your victory. The angriest people in your story right now are the ones
                  who thought they had you in their pocket. The ones who swore you were gullible. The ones who
                  smirked behind your back. Why do you think their rage burns hotter than anyone else's? It's
                  because they weren't just exposed. They were exposed by the very person they underestimated
                  the most."
                </VideoQuote>

                <p>
                  The video was made for millions of people who recognise, in the abstract, the experience of
                  being underestimated and then proving the estimators wrong. The archive was made for the
                  record — for the courts, the investigators, the journalists, the historians who will one
                  day need to understand what was done and how it was documented.
                </p>
                <p>
                  They arrived at the same description because the description is true. The trap was perfect
                  in the sense that it was comprehensive, sustained, and institutionally protected. It was
                  imperfect in the sense that it was documented from the inside by the person it was designed
                  to destroy — using the government's own tools, the government's own letterheads, the
                  government's own contradictions.
                </p>
                <p>
                  The fury that the video describes — the particular fury of people who built something
                  for thirty-five years and watched it become evidence against them — is documented too.
                  In the defamation silence. In the non-engagement with formal submissions that cite
                  specific documents, specific names, and specific dates. In the continued absence of
                  any institutional rebuttal to an archive downloaded 410,503 times.
                </p>

                <p className="text-[hsl(38,92%,50%)] font-bold text-lg leading-relaxed">
                  The trap was perfect. The archive was the blade. The fury is the proof. And the
                  archive — SHA-256 hashed, Bitcoin blockchain timestamped, freely downloadable,
                  submitted to the ICC, with the UNHCR, permanently established across independent
                  verification systems that cannot be amended or suppressed by any of the agencies
                  whose conduct it documents — is what happened instead of the collapse they planned.
                </p>
              </div>
            </motion.div>

            {/* CTA BLOCK */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 mt-12 space-y-5">
                <h3 className="text-white font-serif text-xl font-bold">Read the Evidence. Verify Every Claim.</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Every factual claim in this article is sourced to documents freely downloadable from the archive.
                  Every document is SHA-256 hashed and Bitcoin blockchain timestamped. The archive can be verified
                  by contacting the issuing agencies directly.
                </p>
                <div className="flex flex-wrap gap-3" data-testid="cta-buttons-perfect-trap">
                  <Button asChild>
                    <Link href="/archive-home" data-testid="button-view-archive">
                      <FileText className="mr-2 h-4 w-4" /> View the Archive
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/video-commentary" data-testid="button-all-essays">
                      <Play className="mr-2 h-4 w-4" /> All Six Video Essays
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/ai-justice-statement" data-testid="button-ai-statement">
                      <ExternalLink className="mr-2 h-4 w-4" /> AI Justice Statement
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href="/documents/chosen-ones-they-set-a-perfect-trap.pdf"
                      data-testid="button-download-pdf"
                    >
                      <FileText className="mr-2 h-4 w-4" /> Download This Article (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SocialShare
                title="They Set a Perfect Trap. The Archive Was the Blade That Cut It Open."
                description="Seven principles from a viral video, each independently describing the documented 35-year institutional persecution of Dr. Richard William McLean. Every claim government-sourced."
                url="https://barrandodger.com/chosen-ones-perfect-trap"
              />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <CommentSection pageId="chosen-ones-perfect-trap" />
            </motion.div>

          </div>
        </div>
      </main>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
