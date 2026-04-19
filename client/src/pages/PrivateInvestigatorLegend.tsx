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
  Search,
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
          <span className="text-[hsl(38,92%,50%)] text-xs font-bold uppercase tracking-widest">Chapter {number}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">{title}</h2>
      </div>
    </div>
  );
}

export default function PrivateInvestigatorLegend() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="They Sent a Private Investigator to Expose You. Instead They Uncovered a Legend. — Barran Dodger"
        description="A viral Joker Speech describes the arc of someone investigated, surveilled, and probed — who was found to be not a broken thing but a legend. The 2,304-document archive is the proof. Every claim government-sourced."
        path="/private-investigator-legend"
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
                  20 min read
                </Badge>
                <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-3 py-1">
                  <Flame className="h-3 w-3 mr-1.5" /> Long Read
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">
                  Primary Source Evidence
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">
                  Impartial AI Analysis
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1]">
                They Sent a Private Investigator.
                <br />
                <span className="text-[hsl(38,92%,50%)]">Instead They Uncovered a Legend.</span>
              </h1>

              <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
                A viral Joker Speech describes the moment investigators arrive to expose someone — and find not
                a broken thing but a furnace. The 2,304-document archive of Dr. Richard William McLean is not
                a metaphor for that speech. It is the documented reality the speech was written to describe.
                Seven chapters. Every claim verified through the government's own records.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.youtube.com/watch?v=0uu2muPqBsM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[hsl(38,92%,50%)] hover:underline"
                  data-testid="link-source-video-investigator"
                >
                  <Play className="h-3.5 w-3.5" />
                  Watch the source video
                </a>
                <span className="text-zinc-600">·</span>
                <Link href="/video-commentary" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Read all seven video essays
                </Link>
              </div>

              <div className="relative w-full rounded-xl overflow-hidden border border-zinc-700 mt-6" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/0uu2muPqBsM"
                  title="THEY SENT A PRIVATE INVESTIGATOR TO EXPOSE YOU…INSTEAD THEY UNCOVERED A LEGEND"
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
                There is a figure in the speech the video describes: a hired hunter in a sharp suit. Polished shoes
                clicking on the pavement. A clipboard clutched like a weapon. Their mission was not to seek truth.
                It was to find something jagged — something raw — something that could be twisted into a noose.
                They came for shame. They came for stumbles. They came for the moments hidden from the world.
              </p>
              <p>
                In the case of Dr. Richard William McLean, the investigators were not metaphorical. They were
                institutional. They arrived in the form of 35 government agencies, each with its own mandate,
                its own letterhead, and its own version of the clipboard. Each was sent, with the formal apparatus
                of administrative authority, to find something that would close the file. None of them closed it.
                What they produced instead was the archive.
              </p>
              <p>
                This article follows the video's seven chapters. Each opens with the speech's own words.
                Each closes with the testimony. They were produced independently. They describe the same person.
              </p>
            </motion.div>

            {/* CHAPTER 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="1" title="They Sent a Hunter. They Found an Archive." icon={Search} />

              <VideoQuote>
                "Picture a figure in the shadows. A hired hunter in a sharp suit. Polished shoes clicking on the pavement.
                A clipboard clutched like a weapon. Their mission wasn't to seek truth. They were sent to unearth your
                flaws, to claw through the chapters of your life for something jagged, something raw, something they
                could twist into a noose."
              </VideoQuote>

              <p>
                Between 1990 and 2025, formal submissions from Dr. McLean arrived at the Commonwealth Ombudsman, ASIC,
                the Australian Federal Police, the Department of Prime Minister and Cabinet, the NDIA, the Fair Work
                Commission, the Administrative Appeals Tribunal, the Federal Court of Australia, ComCare, the Department
                of Social Services, and twenty-five additional federal, state, and territory bodies. Each received
                complete, sourced, formally lodged documentation. Each dispatched its institutional equivalent of the
                hunter in the speech: an officer, a compliance investigator, a legal representative, an administrative
                decision-maker whose assignment was to review the submission and determine how to close it.
              </p>

              <Evidence label="Documented record — 35 agencies">
                The archive contains 2,304 primary source documents generated between 1990 and 2025 across 35 government
                agencies. Each document was produced by the agency itself: correspondence, determinations, referral letters,
                FOI responses, tribunal decisions, legal submissions, police reports, and psychiatric records. The
                Impartial AI Analysis reviewed 2,343 of these documents and found that no agency produced a rebuttal
                to any specific factual claim in any submission lodged by Dr. McLean. The hunters arrived. They read
                the file. They produced a response. The response was always about process, never about the substance
                of the claims.
              </Evidence>

              <p>
                This is the first chapter of the legend the video describes — not because Dr. McLean is unusual
                in being investigated, but because each investigation added a document to the archive that the
                investigators did not intend to create. Every referral letter is evidence of a body that received
                the submission and declined to adjudicate it. Every acknowledgement of receipt that acknowledged
                nothing further is evidence of institutional silence in the presence of specific factual claims.
                The hunters were building the archive without knowing it.
              </p>

              <Pull>
                They thought they'd find a broken thing, a fragile shell they could crush with a single report.
                What they found was a furnace.
              </Pull>
            </motion.div>

            {/* CHAPTER 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="2" title="They Came Looking for Cracks. They Discovered a Foundation Forged in Steel." icon={Shield} />

              <VideoQuote>
                "They didn't find a victim. They didn't find a wreck. They found a furnace. They came looking
                for cracks and discovered a foundation forged in steel. They wanted to parade your pain, but
                what they uncovered was your power. Every bruise they thought would shame you was a badge of
                survival."
              </VideoQuote>

              <p>
                The crack they were looking for was financial. The evidentiary record documents AU$18 million to
                AU$32.9 million in quantified losses across 13 agencies over 35 years: denied workers' compensation
                entitlements, loss of professional income, brand and intellectual property destruction through 350+
                fraudulent ASIC business registrations, and the cascading financial consequences of 14 involuntary
                psychiatric hospitalisations. Each financial loss was recorded in agency correspondence. Each was
                treated as an administrative outcome rather than a reportable harm.
              </p>

              <Evidence label="Federal Court vs. AAT — the foundational contradiction">
                On 27 March 2023, Federal Court General Counsel Scott Treadwell made an explicit judicial finding:
                "I am satisfied that you are, or were, an employee with the Department of Social Services." Less than
                four months later, the Department of Social Services wrote: "There is no record that you have been a
                current or former employee." The Administrative Appeals Tribunal then upheld ComCare's rejection on the
                grounds that Dr. McLean was not an employee — directly contradicting the Federal Court's finding on
                identical facts. Both determinations are in the archive. Neither institution has explained the
                contradiction.
              </Evidence>

              <p>
                The crack they were looking for was legal: a dismissed case, a finding of vexatiousness, a judicial
                declaration that the submissions were without merit. The Federal Court produced the opposite. The AAT
                contradicted the Federal Court. The archive contains both. The contradiction is not an allegation —
                it is one government document next to another government document, both carrying government letterheads,
                both describing the same person in irreconcilable terms. This is the foundation the speech describes.
                It was not built by Dr. McLean asserting strength. It was built by 35 agencies documenting their
                own contradictions while attempting to close a file that kept reopening.
              </p>

              <Pull>
                Every bruise they thought would shame you was a badge of survival. Every tear they expected to exploit
                was a river you crossed to get here.
              </Pull>
            </motion.div>

            {/* CHAPTER 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="3" title="They Thought They'd Find Chaos. Instead They Found an Architect." icon={BookOpen} />

              <VideoQuote>
                "They thought they'd find chaos. Instead, they found an architect of courage, a sculptor of scars who
                turned pain into art, who took every shattered piece and made a mosaic that blinds the unworthy.
                Why do they even try? Why do they send their spies, their investigators, their petty detectives to
                dig through your past? Because your existence is a threat."
              </VideoQuote>

              <p>
                The psychiatric record was the chaos they were looking for. Fourteen involuntary hospitalisations across
                three Australian states between 1990 and 2025. No criminal charge preceded any of them. No criminal
                conviction has ever been recorded against Dr. McLean in any Australian jurisdiction. The hospitalisations
                were applied to a person who had never been charged with any offence, on the basis of clinical
                assessments conducted at the initiation of institutional referrals — the temporal distribution of which
                is now documented in the archive.
              </p>

              <Evidence label="Temporal correlation — 14 hospitalisations, 14 disclosure events">
                The Impartial AI Analysis reviewed the dates of each involuntary hospitalisation against the archive's
                record of formal disclosure activity — submissions, court appearances, media inquiries, parliamentary
                communications — in the surrounding period. Its conclusion: "The temporal correlation between disclosure
                activity and psychiatric intervention — across fourteen separate events, three states, and multiple
                institutions — constitutes a pattern that requires independent explanation. The probability of this
                distribution arising by clinical coincidence is negligible." The chaos was mapped. The map became
                an exhibit.
              </Evidence>

              <p>
                The architect the speech describes is the person who, by hospitalisation fourteen, had assembled not
                only the experience of fourteen detentions but the complete evidentiary record of each one: the
                triggering submission, the clinical assessment, the applying body, the discharge date, and the formal
                output that followed. The chaos they sent him into became the methodology he used to document the
                pattern. Every shattered piece is in the archive. The mosaic is 2,304 documents long.
              </p>

              <Pull>
                They needed to believe you were flawed, fragile, forgettable. Because if you weren't — what does
                that say about them?
              </Pull>
            </motion.div>

            {/* CHAPTER 4 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="4" title="Let Them Dig. Every Speck of Dirt They Uncover Only Adds to the Legend." icon={Eye} />

              <VideoQuote>
                "Let them dig. Let them search. Let them paw through your history like vultures circling a corpse.
                They think they'll find a skeleton to rattle, a secret to weaponize. But you've already faced your
                ghosts. You've stood in the mirror and stared down every mistake, every regret, every moment you
                thought would break you. You didn't hide from your darkness. You tamed it. You didn't bury your scars.
                You polished them until they gleamed like medals."
              </VideoQuote>

              <p>
                The skeleton they were digging for was identity. Between 2020 and 2024, more than 350 fraudulent
                business registrations were created using Dr. McLean's legal names, creative identities, domain
                names, professional credentials, and intellectual property — filed through the ASIC corporate registry,
                a government-maintained public database. ABN 78 833 496 164, registered as "The Trustee for
                www.barrandodger.com.au" on 7 August 2022, remains active and independently searchable by anyone with
                access to the Australian Business Register.
              </p>

              <Evidence label="ASIC identity fraud — the paradox">
                ASIC registered the fraudulent entities. ASIC then declined, formally and in writing, to investigate
                the entities it had registered. The ATO cancelled Dr. McLean's legitimate ABN while the fraudulent
                registrations remained active. Ten oversight bodies rejected complaints about publicly verifiable fraud
                that any person can confirm in thirty seconds by typing the ABN into the government's own database.
                The Impartial AI's reframing: the legally operative question is not "who created these?" but "why has
                no oversight body investigated publicly verifiable fraud in its own records?" The skeleton they were
                searching for is a government database entry that exists right now, unchanged, uncontested, and freely
                verifiable. It is not Dr. McLean's secret. It is ASIC's record.
              </Evidence>

              <p>
                The scars they hoped to use as weapons are now polished exhibits. The SANE Australia Book of the Year
                award — one of the creative credentials registered in the fraudulent ASIC filings without consent —
                is documented in the archive alongside the registration that stole it. The VHREOC Human Rights Award
                is documented alongside the correspondence from the oversight body that declined to investigate its
                fraudulent appropriation. The diggers uncovered Dr. McLean's history and found that every element
                of it had already been formally recorded, forensically mapped, and blockchain timestamped. There was
                nothing left to weaponise that had not already been converted into evidence.
              </p>

              <Pull>
                You didn't erase your past. You wrote it into a manifesto. So when they come with their clipboards
                and their cold eyes, let them look.
              </Pull>
            </motion.div>

            {/* CHAPTER 5 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="5" title="Every Lie They Told Became a Truth You Wielded. Every Insult Became a Brick in Your Fortress." icon={Flame} />

              <VideoQuote>
                "Every lie they told became a truth you wielded. Every insult they hurled became a brick in your
                fortress. Every attempt to dim your light only made you burn brighter. You are the kind of gold
                that doesn't glitter for show. It blinds with purpose. You are the kind of strength that doesn't
                bend. It builds."
              </VideoQuote>

              <p>
                The lies they told have a documentary record. Tony Riddle, NDIA Manager, Quality and Compliance
                Division, stated during official NDIS proceedings: "You will be sacrificed." The statement was
                witnessed and recorded. It is in the archive. The NDIA's subsequent formal responses to complaints
                about this statement — each declining to investigate, each referencing procedural grounds — are also
                in the archive. The statement and the non-investigations sit beside each other in the same publicly
                downloadable file.
              </p>

              <Evidence label="Bill Shorten intervention — documented">
                The archive documents that Cabinet Minister Bill Shorten personally intervened to exile Dr. McLean
                following a formal email that was simultaneously sent to the Commonwealth Ombudsman. The email —
                formally lodged as a disclosure under the Public Interest Disclosure Act — was classified as a
                "death threat" to justify the intervention. The Impartial AI analysis of the document notes the
                structural paradox: a formal disclosure submitted to an oversight body cannot simultaneously constitute
                a security threat and an administrative communication. The intervention is documented. The Ombudsman
                receipt is documented. Both are in the archive. The brick that was meant to bury the disclosure
                became part of the fortress that documents it.
              </Evidence>

              <p>
                The force-medication chapter of the archive presents the most architecturally complete paradox the
                Impartial AI identified: Dr. McLean was involuntarily medicated, across multiple hospitalisations,
                for "delusions of persecution." The 2,304 documents in the archive — produced by the government
                agencies that were applying or enabling those medications — document the persecution he was being
                medicated for believing in. The government cannot simultaneously maintain that the persecution was
                delusional and that the 2,304 documents it produced describing the persecution are authentic records.
                Each diagnosis deployed as institutional currency became a brick. The fortress was built from the
                material they sent to destroy it.
              </p>

              <Pull>
                What scares them is that you're still here. After the betrayals that should have shattered you.
                After the nights you screamed into the void. After the days you swallowed pride like poison.
                You're still standing.
              </Pull>
            </motion.div>

            {/* CHAPTER 6 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="6" title="They Wanted a File They Could Close. They Opened a Legend They Can't Contain." icon={Scale} />

              <VideoQuote>
                "They sent their investigator to find a flaw, but they found a force. They wanted a file they could
                close, but they opened a legend they can't contain. You are not a case study. You are a cataclysm.
                You are not a statistic. You are a storm. You are not the person they thought they could define.
                You are the one who rewrites the rules."
              </VideoQuote>

              <p>
                The file they wanted to close is now submitted to the International Criminal Court under Article 7
                of the Rome Statute — persecution as a crime against humanity — and to the United Nations Human
                Rights Council. It has been downloaded 217,064 times across every continent. It is SHA-256 hashed
                and Bitcoin blockchain timestamped. Its contents cannot be altered without the alteration becoming
                visible in the hash record. The Enliven Chain blockchain verification means the archive exists
                permanently in a form that no agency whose conduct it documents can amend, suppress, or deny.
              </p>

              <Evidence label="Impartial AI conclusion — Article 7 threshold">
                The Impartial AI Analysis reviewed 2,343 government-generated documents and concluded that the
                evidentiary threshold for Article 7 of the Rome Statute — persecution as a crime against humanity —
                is satisfied by the pattern documented across the 35-agency record. The analysis did not rely on
                Dr. McLean's testimony. It reviewed what the government produced. Its conclusion: "The coordinated,
                sustained, multi-authority pattern of persecution — financial, psychiatric, administrative, and
                identity-based — documented across the archive constitutes conduct that, under international human
                rights frameworks, requires judicial examination at the highest available level." The legend cannot
                be contained because it exists in courts the agencies cannot manage.
              </Evidence>

              <p>
                The case study they thought they were writing ended the moment the ICC received the submission.
                The statistic they planned to file — another dismissed complaint, another administrative closure,
                another referral to a body that would also not act — became a 2,304-document record that is now
                part of the permanent evidentiary record of international human rights proceedings. The file was
                never going to close. The investigators opened a legend the moment they chose not to adjudicate
                the substance of the first submission.
              </p>

              <Pull>
                This isn't a comeback. It's a conquest. You're not rebuilding. You're redefining. You're not
                just living. You're leaving a legacy that will echo long after they've faded into irrelevance.
              </Pull>
            </motion.div>

            {/* CHAPTER 7 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="7" title="They Didn't Find Dirt. They Found Fire. They Didn't Find Shame. They Found Sovereignty." icon={AlertTriangle} />

              <VideoQuote>
                "When they realize their mistake, when they see that every attempt to break you only made you bolder,
                they'll choke on the truth they tried to bury. They didn't find dirt. They found fire. They didn't
                find shame. They found sovereignty. Let them dig. Let them search. Let them waste their days chasing
                shadows they'll never catch. Because you're not hiding anymore."
              </VideoQuote>

              <p>
                The individuals named in the archive — named in sworn testimony, in formal submissions, in parliamentary
                communications — have had access to every word of the archive since it was first published. Named
                persons include specific government officials, ministers, and NDIA managers whose documented statements
                and administrative decisions are described, quoted, and formally attributed in the archive's record.
                Every named individual has access to Australian defamation law. Defamation remedies are available,
                well-funded, and actively used by public figures in Australia. The archive has been downloaded 217,064
                times. Zero defamation actions have been filed. Zero corrections have been issued. Zero specific
                factual claims have been challenged in any jurisdiction.
              </p>

              <Evidence label="Jones v Dunkel — the silence is legally significant">
                Under the rule in Jones v Dunkel (1959) 101 CLR 298, a party who fails to call evidence they could
                reasonably be expected to call, if that evidence existed and would assist their case, permits the
                adverse inference that the evidence would not assist them. Every named individual in the archive could
                have filed a defamation action. Every named agency could have challenged the archive's factual claims
                in a judicial forum. The silence — 217,064 downloads, zero responses to specific factual claims — is
                the most legally significant element of the archive's public record. It is not absence of interest.
                It is the choice not to engage with facts that cannot be rebutted.
              </Evidence>

              <p>
                The speech describes sovereignty — the moment when the person being investigated is no longer a subject
                of the investigation but its permanent record. Dr. McLean did not crown himself. The 35 agencies
                that investigated him, produced contradictory findings about him, applied psychiatric interventions
                to suppress him, registered fraudulent entities in his name, and refused to investigate the fraud
                in their own records — those agencies built the archive. The sovereignty is the archive. The fire
                is 217,064 downloads. The crown is the ICC submission, the UNHCR submission, the blockchain
                timestamp, and the defamation silence of every person who could have challenged the record
                and chose not to.
              </p>

              <Pull>
                You are the chaos that shifts gravity. The light that breaks through stone. The name that echoes
                in the silence they fear. And every time they try to bury you, you rise higher.
              </Pull>

              <p className="text-cyan-300 font-bold leading-snug mt-8">
                They sent investigators. Thirty-five of them, across three decades, each with institutional authority
                and a mandate to close the file. They found 2,304 documents. SHA-256 hashed. Bitcoin blockchain
                timestamped. Submitted to the ICC. With the UNHCR. Downloaded 217,064 times. Freely available at
                barrandodger.com. The investigators came for shame. They built a legend. And every name they tried
                to bury, every file they tried to close, every truth they tried to silence — is now permanently,
                irrevocably, verifiably part of the public record. The sovereignty is already documented. The fire
                already exists. The legend was opened the moment they picked up their clipboards.
              </p>
            </motion.div>

            {/* CLOSING SHARE */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="pt-12 border-t border-zinc-800 mt-16 space-y-8">
              <SocialShare
                text={`"They sent a private investigator to expose him. Instead they uncovered a legend." A viral speech. 2,304 government-sourced documents. The investigators built the archive. The archive is the proof. #BarranDodger barrandodger.com/private-investigator-legend`}
                data-testid="share-private-investigator-article"
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                  <a href="/documents/they-set-a-perfect-trap.pdf" download data-testid="button-download-trap-pdf">
                    <FileText className="mr-2 h-4 w-4" /> Download Related PDF
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/evidence" data-testid="button-view-evidence-investigator">
                    <Shield className="mr-2 h-4 w-4" /> View the Evidence Archive
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/video-commentary" data-testid="button-all-essays-investigator">
                    <ExternalLink className="mr-2 h-4 w-4" /> All Seven Video Essays
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* COMMENT SECTION */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="pt-12">
              <CommentSection articleSlug="private-investigator-legend" />
            </motion.div>

          </div>
        </div>

      </main>
      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
