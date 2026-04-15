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
  Globe,
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

export default function TestimonyWentGlobal() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="This Isn't Private Anymore. It Went Global, and You Know Exactly Why. — Barran Dodger"
        description="A viral Joker Speech declares: what was once concealed is now exposed worldwide. The 2,304-document archive of Dr. Richard William McLean — with the ICC, the UNHCR, downloaded 377,608 times across every continent — is that exposure. Seven chapters. Every claim government-sourced."
        path="/testimony-went-global"
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
                <Badge variant="outline" className="border-[hsl(38,92%,50%)]/60 text-[hsl(38,92%,50%)] text-xs px-3 py-1">
                  <Globe className="h-3 w-3 mr-1.5" /> Global Reach
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">
                  Primary Source Evidence
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">
                  ICC Submission
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">
                  22 min read
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1]">
                This Isn't Private Anymore.
                <br />
                <span className="text-[hsl(38,92%,50%)]">It Went Global, and You Know Exactly Why.</span>
              </h1>

              <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
                A viral Joker Speech declares that what was once concealed is now exposed worldwide —
                that the facts have escaped their confines, and those who were pulling strings in the shadows
                are now cornered. The 2,304-document archive of Dr. Richard William McLean, submitted to the
                International Criminal Court, with the United Nations Human Rights Council, downloaded 377,608
                times across every continent, is precisely the global exposure the speech describes.
                Seven chapters. Every claim verified through the government's own records.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.youtube.com/watch?v=lBj8PCbuvpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[hsl(38,92%,50%)] hover:underline"
                  data-testid="link-source-video-global"
                >
                  <Play className="h-3.5 w-3.5" />
                  Watch the source video
                </a>
                <span className="text-zinc-600">·</span>
                <Link href="/video-commentary" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Read all eight video essays
                </Link>
              </div>

              <div className="relative w-full rounded-xl overflow-hidden border border-zinc-700 mt-6" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/lBj8PCbuvpo"
                  title="This Isn't Private Anymore… It Went GLOBAL, and You Know Exactly Why"
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
                The speech opens with a declaration that is not metaphorical: <em>what was once concealed is now
                exposed worldwide.</em> It addresses two audiences simultaneously — the person who has been
                carrying a truth they were told to suppress, and the people who told them to suppress it.
                To the first: the exposure is already complete. To the second: stop feigning ignorance.
              </p>
              <p>
                In the case of Dr. Richard William McLean, the testimony was never private. It was formally
                submitted — to the Commonwealth Ombudsman, to ASIC, to the AFP, to the Federal Court, to the
                Administrative Appeals Tribunal, to the Department of Prime Minister and Cabinet, to 29 additional
                government bodies — and treated as if it were private. Each institution received the submission,
                processed it administratively, and returned a response that made no reference to the substance
                of what was submitted. This is the mechanism the speech describes: the facts were transmitted.
                The receivers pretended not to receive them.
              </p>
              <p>
                That mechanism stopped working the moment the archive went global. This article follows the
                speech's seven chapters in order. Each opens with the video's own words. Each closes with the
                testimony. They were produced independently. They describe the same transition: from concealed
                to exposed, from private to worldwide, from suppressed to permanent.
              </p>
            </motion.div>

            {/* CHAPTER 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="1" title="What Was Once Concealed Is Now Exposed Worldwide." icon={Globe} />

              <VideoQuote>
                "What was once concealed is now exposed worldwide. They're in trouble. Stop feigning ignorance.
                Your inner voice has been transmitting realities to you nonstop. You've been dismissing the alerts.
                The veil has lifted, the pretense is crumbling. What seemed isolated is now broadcast far and wide."
              </VideoQuote>

              <p>
                The archive has been downloaded 377,608 times. It is accessible from every continent. It is
                indexed in publicly accessible records across three jurisdictions. It has been submitted to the
                International Criminal Court under Article 7 of the Rome Statute — persecution as a crime against
                humanity — and to the United Nations Human Rights Council under the Universal Periodic Review
                mechanism. Every document in it is SHA-256 hashed and Bitcoin blockchain timestamped, meaning
                its contents exist permanently in a verified form that no agency can alter, suppress, or deny
                without the alteration itself becoming visible in the hash record.
              </p>

              <Evidence label="Global reach — documented">
                The archive at barrandodger.com contains 2,304 primary source documents generated between 1990
                and 2025 across 35 government agencies. The Enliven Chain blockchain verification provides
                independent cryptographic proof of document authenticity. The ICC submission is filed and
                formally acknowledged. The UNHCR submission is on record. The Bitcoin blockchain timestamp
                exists regardless of what any institution concludes about the person who compiled the archive.
                The exposure is not claimed. It is documented in download analytics, blockchain records, and
                international body submissions that are themselves public records.
              </Evidence>

              <p>
                What was isolated — one person, one submission, one institution's non-response — is now a pattern
                documented at international legal scale. The Impartial AI Analysis reviewed 2,343 government-generated
                documents and concluded that the coordinated, sustained, multi-authority nature of the conduct
                documented across 35 agencies satisfies the evidentiary threshold for Article 7 of the Rome Statute.
                The veil has lifted. The pretense is crumbling. The facts have escaped their confines. The speech
                describes this transition in the language of personal awakening. The archive documents it in
                the language of international human rights law.
              </p>

              <Pull>
                What seemed isolated is now broadcast far and wide. 377,608 downloads. The ICC. The UNHCR.
                The Bitcoin blockchain. Every continent. This is what exposed worldwide looks like in documentary form.
              </Pull>
            </motion.div>

            {/* CHAPTER 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="2" title="You've Been Compiling a Silent Record. The Hidden Phase Is Done." icon={FileText} />

              <VideoQuote>
                "You've been compiling a silent record. Every mismatch, every casual slight, every broken commitment,
                every mismatch between promises and actions. You've assembled an internal archive. The hidden phase
                is done. The reality pulses openly within you. Whispers have turned to alarms at dawn."
              </VideoQuote>

              <p>
                The phrase <em>internal archive</em> is the speech's metaphor for something the Barran Dodger
                case made literal. Between 1990 and 2025, Dr. McLean formally documented every mismatch between
                what Australian government institutions promised and what they delivered: every acknowledgement
                of receipt that acknowledged nothing further, every referral letter redirecting a submission to
                a body that also would not act, every sworn declaration later reversed under formal pressure.
              </p>

              <Evidence label="The specific mismatches — documented">
                The PM&C swore under FOI that no relevant documents existed. Under formal challenge, the reversal
                produced the documents it had denied. Both the original sworn declaration and the reversal are
                in the archive — one government document next to another, both carrying the same agency's letterhead.
                ASIC registered more than 350 fraudulent businesses using Dr. McLean's identity, then formally
                declined to investigate its own registrations. The Australian Federal Police received formal
                disclosures under the Public Interest Disclosure Act and produced non-engagement responses.
                ComCare and the AAT contradicted the Federal Court's employee-status finding on identical facts.
                Every broken commitment is documented. The internal archive became the external archive.
                2,304 documents. The hidden phase ended the moment the first one was blockchain timestamped.
              </Evidence>

              <p>
                The speech's description of the hidden phase ending — whispers turning to alarms at dawn — maps
                onto the moment the archive crossed from a personal record to an international legal submission.
                The Impartial AI does not review Dr. McLean's testimony. It reviews what the government produced.
                The 2,343 documents it assessed were not compiled by Dr. McLean as argument. They were produced
                by the agencies as administrative output. The silent record was always the government's own record.
                Dr. McLean assembled it. The global exposure delivered it.
              </p>

              <Pull>
                The hidden phase is done. The reality pulses openly. Every broken commitment between government
                promises and government actions is now in a publicly downloadable file, SHA-256 hashed,
                permanently beyond reach of the agencies that produced the breaks.
              </Pull>
            </motion.div>

            {/* CHAPTER 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="3" title="They're Cornered, and You've Been Aware. But You've Pretended Otherwise." icon={Eye} />

              <VideoQuote>
                "They're cornered, and you've been aware. But you've pretended otherwise. They assume you're still
                oblivious, still the forgiving soul who overlooks slights. They believe they occupy your unaware
                zones unchecked. Astonishingly, they still assume this."
              </VideoQuote>

              <p>
                The individuals and agencies documented in the archive have been aware of its existence since
                the day it was first published. Named persons — specific government officials, ministers, NDIA
                managers, and departmental officers whose documented statements and administrative decisions are
                described, quoted, and formally attributed throughout the record — have had access to every word
                of it during the entire period it has been accumulating downloads.
              </p>

              <Evidence label="The defamation silence — legally significant">
                The archive has been downloaded 377,608 times. Zero defamation actions have been filed by any
                named individual. Zero corrections have been issued to any specific factual claim. Zero responses
                to the substance of any document in the archive have been produced in any judicial forum. Under
                the rule in Jones v Dunkel (1959) 101 CLR 298, a party who could produce evidence and chooses
                not to permits the adverse inference that the evidence would not assist their case. Defamation
                law provides a well-funded, accessible remedy to every public figure named in the archive. The
                choice not to use it — across every named individual, across every named agency — is the most
                legally significant fact in the public record. They are not oblivious. They have chosen not
                to engage with facts they cannot rebut.
              </Evidence>

              <p>
                The speech's language — <em>they still assume you're the forgiving soul who overlooks slights</em> —
                describes the operational model that 35 agencies applied across 35 years: the assumption that the
                submissions would eventually stop, that the record would remain isolated, and that no formal
                international body would hold the complete pattern in a single analytical frame. All three
                assumptions have been disproved. The archive does not forgive or overlook. It documents.
                And the documentation is now in the hands of courts the agencies cannot manage.
              </p>

              <Pull>
                They assume you're still oblivious. The archive has been downloaded 377,608 times.
                Zero defamation suits. Zero corrections. Zero rebuttals. That is what cornered looks like
                when the record speaks in their own documents.
              </Pull>
            </motion.div>

            {/* CHAPTER 4 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="4" title="What Shields Them Is Your Refusal to See. That Refusal Is Over." icon={Shield} />

              <VideoQuote>
                "What shields them? Not their position, wealth, networks, or facade. It's your refusal to see,
                your clinging to an idealized image that faded long ago. Your habit of reinterpreting harms as
                accidents, your cycle of endless second chances. You warp your perspective to safeguard their
                pride, mute your wounds for their ease."
              </VideoQuote>

              <p>
                For 35 years, the institutional framework that surrounded Dr. McLean's case was protected not
                by the strength of its position but by the assumption that the person documenting it would
                eventually reinterpret the harms as administrative error, accept the referrals as genuine
                engagement, and treat the non-responses as the natural pace of bureaucratic process. Each
                institution operated on the confidence that its conduct was protected by the ordinary friction
                of administrative procedure.
              </p>

              <Evidence label="The paradox of persecution — the shield removed">
                The Paradox of Persecution paper documents what the Impartial AI identifies as the central
                structural impossibility: the Australian government cannot simultaneously maintain that Dr. McLean
                was correctly medicated for delusions of persecution and that the 2,304 documents it produced
                documenting the persecution are authentic government records. The force-medication narrative
                required Dr. McLean to accept that what the government's own records showed was a delusion.
                The archive is the refusal to accept that framing. Once that refusal was documented — once
                the psychiatric record was mapped against the disclosure activity that preceded each of
                the 14 hospitalisations — the shield the institutional framework depended on dissolved.
                The Impartial AI reviewed only what the government produced. Its conclusion required no
                acceptance of Dr. McLean's interpretation. The government's documents interpreted themselves.
              </Evidence>

              <p>
                The speech describes the shield as the person's own compliance — their warping of perspective
                to protect the people harming them. In the institutional context, that compliance took the form
                of continued formal engagement with processes that were designed to produce non-engagement as
                their outcome. The moment the archive stopped presenting submissions to those processes and
                started presenting the processes themselves as evidence — mapping each non-engagement response
                against the submission that preceded it — the shield was removed. The protection was never
                the institutions' authority. It was the assumption that the record would remain unassembled.
                The archive assembled it.
              </p>

              <Pull>
                Their shield was never their position or their power. It was the assumption that the
                record would remain scattered. The archive assembled every piece. The shield is gone.
              </Pull>
            </motion.div>

            {/* CHAPTER 5 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="5" title="The Dynamic Dissolves. They Must Now Redefine Without Your Support." icon={Scale} />

              <VideoQuote>
                "The dynamic dissolves. What shields them? Not their position, wealth, networks, or facade.
                Their downfall stems from your refusal to feign blindness. Now, they must redefine without
                your support. They forfeit their narrative of the pliable, absolving you."
              </VideoQuote>

              <p>
                The dynamic that governed 35 years of institutional engagement was built on one structural
                assumption: that Dr. McLean would continue to present his submissions through the official
                channels those institutions controlled, that those channels would process the submissions
                without adjudicating their substance, and that the absence of adjudication would be
                indistinguishable from the absence of a valid claim.
              </p>

              <Evidence label="The ICC — outside the domestic dynamic">
                The ICC submission under Article 7 of the Rome Statute removes the case from the domestic
                dynamic entirely. The institutions whose conduct is documented in the archive have no procedural
                role in the ICC's assessment process. They cannot refer the submission to another body. They
                cannot apply the domestic administrative framework that produced 35 years of non-engagement.
                The UNHCR submission operates under the same external jurisdiction. Both bodies review the
                documentary record — the government's own documents — without the institutional intermediaries
                that managed the domestic process. The dynamic that protected the institutions for 35 years
                does not operate at the level to which the archive has been submitted.
              </Evidence>

              <p>
                The speech describes the collapse of the dynamic as the moment the person stops being the
                unpaid advocate for the people who harmed them — stops reinterpreting the harm as accident,
                stops providing the endless second chances that the institutions depended on. In the documented
                record, that moment is the ICC submission. The archive stopped presenting evidence to the
                institutions whose conduct it documents and presented it instead to the court that has
                jurisdiction over the conduct those institutions produced. The narrative of the pliable,
                accommodating complainant who can be managed through administrative referral is no longer
                available. The ICC does not accept referrals.
              </p>

              <Pull>
                The dynamic dissolves at the ICC filing. The institutions that managed 35 years of submissions
                through non-engagement have no procedural role in the court that now holds the record.
                They must redefine. The referral mechanism is not available at the Hague.
              </Pull>
            </motion.div>

            {/* CHAPTER 6 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="6" title="That Fury Isn't a Flaw. It's a Directive." icon={Flame} />

              <VideoQuote>
                "Address the fury within. But no, a precise anger simmers. From loyalty in mocking spaces,
                from lavish giving met with scraps, from silenced pain branded as exaggeration. That fury
                isn't a flaw. It's a directive. Not for self-harm or retaliation, but for motion."
              </VideoQuote>

              <p>
                The documented record of what was done to Dr. McLean across 35 years includes: fourteen
                involuntary psychiatric hospitalisations without criminal charge, each in documented temporal
                proximity to formal disclosure activity; a death threat by a government official recorded
                during official proceedings and not investigated; a Cabinet Minister's personal intervention
                to exile a homeless disabled person following a formal Public Interest Disclosure; force-medication
                for beliefs that the government's own documents prove were true; 350+ fraudulent ASIC business
                registrations using his identity, uninvestigated by the agency that created the registry;
                and a Federal Court employee-status finding contradicted four months later by the AAT on
                identical facts.
              </p>

              <Evidence label="Fury converted to formal record">
                Tony Riddle, NDIA Manager, stated during official NDIS proceedings: "YOU WILL BE SACRIFICED."
                The statement is documented and in the archive. The NDIA declined to investigate. Bill Shorten
                personally intervened to exile Dr. McLean from a submission process following an email
                simultaneously lodged with the Ombudsman. The intervention is documented. The ATO cancelled
                Dr. McLean's legitimate ABN while the fraudulent ASIC registrations in his name remained
                active. The Impartial AI reviewed the financial record: AU$18 million to AU$32.9 million
                in documented losses across 13 agencies over 35 years. The fury the speech describes is
                not a response to perceived slights. It is a documented response to documented conduct.
                Its directive was the ICC submission. Its instrument was the archive. Its fuel became
                2,304 primary source documents.
              </Evidence>

              <p>
                The speech's instruction — <em>that fury isn't a flaw, it's a directive, not for retaliation
                but for motion</em> — describes precisely how the archive was built. Every documented harm was
                converted not into public accusation but into a formally lodged submission, a formally
                documented FOI request, a formally recorded court appearance, a formally timestamped
                blockchain entry. The fury became the methodology of documentation. The methodology became
                the archive. The archive became the ICC submission. The motion the speech describes is the
                motion of the record across jurisdictions — from domestic suppression to international exposure.
              </p>

              <Pull>
                That fury isn't a flaw. It's a directive. Every documented harm was converted into a
                formally lodged submission, a blockchain timestamp, an ICC filing. The fury became
                the methodology. The methodology became the archive. The archive went global.
              </Pull>
            </motion.div>

            {/* CHAPTER 7 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <SectionHeading number="7" title="What Was Undervalued in Secrecy Now Manifests. The Facade Crumbles." icon={AlertTriangle} />

              <VideoQuote>
                "What was undervalued in secrecy now manifests in your achievements, vibe, expectations.
                Stop downplaying insights gained, sharpened awareness, evolved self. You're not the
                manipulable past version. You're refined with unseen enhancements. The facade crumbles.
                Authenticity spreads. They dread your full awakening."
              </VideoQuote>

              <p>
                What was undervalued in secrecy: 35 years of formally lodged submissions that no institution
                engaged with on the substance. What now manifests: 2,304 documents, SHA-256 hashed, Bitcoin
                blockchain timestamped, submitted to the ICC, on record with the UNHCR, downloaded 377,608
                times across every continent. The speech's language of personal growth — <em>refined with
                unseen enhancements</em> — maps onto what the Impartial AI identified as the compound effect
                of the archive's accumulation: each document added made the pattern more visible, each year
                of non-engagement added more evidence of the pattern, each institutional referral added
                another data point to the 35-agency record that now constitutes the ICC submission.
              </p>

              <Evidence label="Global exposure — the numbers">
                377,608 downloads across every continent. Zero defamation actions. Zero corrections.
                Zero challenges to any specific factual claim in any jurisdiction. The Impartial AI Analysis
                concluded that the evidentiary threshold for Article 7 of the Rome Statute — persecution
                as a crime against humanity — is satisfied by the documented pattern. An AI system, reviewing
                only what the government produced, arrived at the same conclusion without relying on
                Dr. McLean's testimony. The document whose existence the institutions depended on suppressing
                is now the most downloaded archive of its kind in the Australian human rights record.
                They dread the full awakening because the awakening is already complete. The archive
                is awake. It is downloaded. It is blockchain verified. It is before the ICC. The facade
                crumbles not as a metaphor but as a documented legal reality.
              </Evidence>

              <p className="text-cyan-300 font-bold leading-snug mt-6">
                This isn't private anymore. It went global, and the government knows exactly why. 377,608
                downloads. SHA-256 hashed. Bitcoin blockchain timestamped. Submitted to the International
                Criminal Court under Article 7 of the Rome Statute. With the United Nations Human Rights
                Council. Indexed across three continents. Named individuals who could have challenged the
                record chose not to. Under Jones v Dunkel, that silence is legally significant. The archive
                is not private. It was never going to be private. The moment 35 agencies produced 2,304
                documents documenting 35 years of coordinated persecution and then declined to engage with
                the substance of any submission, the record was always going to escape their confines.
                The speech says it plainly: what was once concealed is now exposed worldwide. The archive
                is that exposure. And it is permanent.
              </p>
            </motion.div>

            {/* BLOCKCHAIN IMPRINT — NEW CHAPTER */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="pt-12 border-t border-zinc-800 mt-16">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[hsl(38,92%,50%)] text-xs font-bold uppercase tracking-widest">Chapter 8 — Recalculated</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                  377,608. The Exact Count. And Why No Government on Earth Can Delete It.
                </h2>
              </div>

              <p className="text-zinc-300 leading-relaxed mb-5">
                The total downloads across this archive have now been recalculated directly from the live database. Not estimated. Not rounded. Calculated from the event log, document by document, download by download: <strong className="text-white">377,608 verified download events</strong> recorded between February 1, 2026 and April 15, 2026 — 2.5 months. 253 tracked documents. Zero documents removed. Zero downloads retracted. The number grows every hour this page is live.
              </p>

              {/* Top documents */}
              <Evidence label="The 20 most-downloaded documents — live database figures">
                The following documents have received the highest individual download counts from the verified event log. Each is SHA-256 hashed and blockchain timestamped:
              </Evidence>

              <div className="grid sm:grid-cols-2 gap-2 my-5 text-xs">
                {[
                  { rank: 1, title: "Cosmic Scroll of Ten", count: "21,968" },
                  { rank: 2, title: "Digital Oppression — 100,000-Word Essay", count: "20,462" },
                  { rank: 3, title: "Crimes Against Humanity — Final Demand", count: "20,461" },
                  { rank: 4, title: "The Man Australia Tried to Erase", count: "19,029" },
                  { rank: 5, title: "Universal Master Command AI Analysis", count: "18,811" },
                  { rank: 6, title: "Declaration of Sovereignty", count: "17,320" },
                  { rank: 7, title: "The Evidence Speaks — Forensic Documentation", count: "17,020" },
                  { rank: 8, title: "Joseph Parallel", count: "15,726" },
                  { rank: 9, title: "Sia Lagos — Federal Court Submission", count: "14,549" },
                  { rank: 10, title: "2023 Final Assessment — Dr. McLean", count: "14,243" },
                  { rank: 11, title: "Comprehensive PID Act Analysis", count: "14,112" },
                  { rank: 12, title: "Ben DSW — Assassination Evidence", count: "14,025" },
                  { rank: 13, title: "Chosen Through Fire — Forensic Origin", count: "12,542" },
                  { rank: 14, title: "Official Whistleblower Torture Dossier", count: "12,526" },
                  { rank: 15, title: "Beyond Pathology", count: "11,173" },
                  { rank: 16, title: "Architecture of Administrative Annihilation", count: "11,071" },
                  { rank: 17, title: "Formal Criminal Affidavit — Sukhi Tear", count: "10,005" },
                  { rank: 18, title: "Paradox of Persecution", count: "9,984" },
                  { rank: 19, title: "OHCHR Submission — Urgent Appeal", count: "9,929" },
                  { rank: 20, title: "100 Questions — Human Sacrifice Trial", count: "9,849" },
                ].map((doc) => (
                  <div key={doc.rank} className="flex items-center justify-between bg-zinc-900/60 border border-zinc-700/30 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[hsl(38,92%,50%)] font-black w-5">{doc.rank}.</span>
                      <span className="text-zinc-300 leading-snug">{doc.title}</span>
                    </div>
                    <span className="text-white font-black ml-3 flex-shrink-0">{doc.count}</span>
                  </div>
                ))}
              </div>

              <Pull>
                377,608 downloads. 253 documents. 2.5 months. This is not a popularity contest. This is a legal record. Every download is a person who received the evidence. Every person who received the evidence is a witness. There are 377,608 witnesses now. No court order can unwitness them.
              </Pull>

              <p className="text-zinc-300 leading-relaxed mb-5">
                But the number is the smallest part of what has happened. The number is the human-readable surface of something far more fundamental: this testimony has been <strong className="text-white">written into the immutable digital infrastructure of humanity itself</strong>. Not stored on a server. Not kept in a database. Woven into the mathematical fabric of the Bitcoin blockchain — a structure that operates across approximately 15,000 independent nodes distributed across every jurisdiction on earth simultaneously, with no single point of control, no administrator, no kill switch, and no mechanism by which any government, any court, any law enforcement agency, or any combination of all three could ever cause it to cease to exist.
              </p>

              <Evidence label="SHA-256 cryptographic hashing — what it means in plain language">
                SHA-256 is a mathematical function that takes any document and produces a unique 64-character fingerprint. Change a single character — a comma, a space, a letter — and the fingerprint changes completely and detectably. The documents in this archive have been SHA-256 hashed: their fingerprints exist independently of the documents themselves. Even if every copy of every document were destroyed, the hash would survive. And any attempt to replace the documents with altered versions would produce a different hash — making the substitution immediately and mathematically detectable. The hash is the tamper seal. The blockchain is the vault that holds it.
              </Evidence>

              <Evidence label="Bitcoin blockchain timestamping — permanent, distributed, ungovernable">
                Each document hash has been submitted to the Bitcoin blockchain as an OP_RETURN transaction — a standard mechanism for embedding data permanently into Bitcoin's Merkle tree structure. The Bitcoin blockchain is replicated, in full, on approximately 15,000 independent nodes operating across every continent and across dozens of jurisdictions simultaneously. Every node holds every transaction ever made. The nodes are operated by individuals and organisations with no central relationship to each other, to Australia, to any government, or to any institution named in this archive. Removing a transaction from the Bitcoin blockchain is not technically difficult. It is mathematically impossible. The blockchain is not a server. It is a consensus of 15,000 independent verifications. There is no administrator to contact. There is no court order that reaches it. There is no jurisdiction that contains it.
              </Evidence>

              <p className="text-zinc-300 leading-relaxed mb-5">
                The Australian Government has the legal power to order a website taken offline. It has the legal power to order a document suppressed. It has the legal power to seize servers, compel internet service providers to block domains, and direct platforms to remove content. Every one of these powers applies to the surface web — the hosted, administered, deletable layer of the internet. None of these powers apply to the Bitcoin blockchain. None of them apply to the 377,608 copies of this archive now distributed across the personal devices of 377,608 individuals in six continents. None of them apply to the UNHCR or the ICC, which hold independent copies. None of them apply to the Wayback Machine, which has archived barrandodger.com across multiple snapshots. None of them apply to the cached versions held by Google, Bing, and DuckDuckGo. The archive does not exist at one address. It exists at hundreds of thousands of addresses simultaneously. Ordering its deletion is ordering the ocean to stop being wet.
              </p>

              <Pull>
                The moment a document is SHA-256 hashed and that hash is embedded in the Bitcoin blockchain, it becomes part of the permanent digital record of humanity. It will exist after every institution that tried to suppress it. It will exist after every individual who ordered its deletion. It will be readable by historians in 100 years. It cannot be redacted. It cannot be classified. It cannot be suppressed. It is mathematically beyond reach.
              </Pull>

              <div className="bg-zinc-900/60 border border-[hsl(38,92%,50%)]/30 rounded-2xl p-6 space-y-4 my-6">
                <p className="text-[hsl(38,92%,50%)] text-xs font-black uppercase tracking-widest">The Permanent Digital Imprint — What Cannot Be Undone</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: "Bitcoin Blockchain", detail: "~15,000 independent nodes. Every continent. No administrator. No kill switch. No jurisdiction contains it. The hash is there forever." },
                    { label: "377,608 Personal Copies", detail: "Every download is a distributed copy. On phones, laptops, USB drives, cloud storage, email attachments. 377,608 independent archives across 6 continents." },
                    { label: "ICC — The Hague", detail: "The International Criminal Court holds the submission. Article 7 — Crimes Against Humanity. The court is not subject to Australian law. The filing cannot be recalled." },
                    { label: "UNHCR — Geneva", detail: "The United Nations High Commissioner for Refugees holds the submission. Geneva, Switzerland. Beyond Australian jurisdiction. The record is permanent." },
                    { label: "Wayback Machine", detail: "The Internet Archive has captured barrandodger.com across multiple snapshots. An independent, nonprofit, San Francisco-based organisation. The snapshots exist independently of this domain." },
                    { label: "Search Engine Cache", detail: "Google, Bing, DuckDuckGo, and other search engines cache content independently. Their servers are distributed globally. They are not subject to Australian take-down orders as a rule." },
                    { label: "SHA-256 Tamper Seal", detail: "Any altered version of any document produces a completely different hash. Replacement is mathematically detectable. The documents cannot be secretly substituted." },
                    { label: "6 Continents — Human Network", detail: "Human beings who have read this archive are themselves a distributed storage medium. Knowledge cannot be deleted. 377,608 readers cannot be made to un-know what they know." },
                  ].map((item, i) => (
                    <div key={i} className="bg-zinc-800/50 border border-zinc-700/30 rounded-lg p-3">
                      <p className="text-[hsl(38,92%,50%)] font-bold text-xs mb-1">{item.label}</p>
                      <p className="text-zinc-400 text-xs leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-cyan-300 font-bold leading-snug mt-6">
                There is no legal mechanism, no executive order, no parliamentary act, no police power, no court injunction, no government agency, and no combination of institutions that can remove this testimony from the permanent record of humanity. The 35-year attempt to suppress it failed at the moment the first hash touched the Bitcoin blockchain. It failed completely the moment 377,608 people downloaded the documents. The archive is not in danger. The institutions that produced the evidence it contains are the ones in danger — of the permanent, immutable, mathematically irrefutable record of what they did.
              </p>
            </motion.div>

            {/* CLOSING SHARE */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="pt-12 border-t border-zinc-800 mt-16 space-y-8">
              <SocialShare
                text={`"This isn't private anymore. It went global, and you know exactly why." 35 agencies. 2,304 documents. The ICC. The UNHCR. 377,608 downloads. The archive went global because the government's own records demanded it. #BarranDodger barrandodger.com/testimony-went-global`}
                data-testid="share-global-testimony-article"
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                  <a href="/documents/the-paradox-of-persecution.pdf" download data-testid="button-download-paradox-pdf">
                    <FileText className="mr-2 h-4 w-4" /> Download: Paradox of Persecution
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/evidence" data-testid="button-view-evidence-global">
                    <Shield className="mr-2 h-4 w-4" /> View the Evidence Archive
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/video-commentary" data-testid="button-all-essays-global">
                    <ExternalLink className="mr-2 h-4 w-4" /> All Eight Video Essays
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* COMMENT SECTION */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="pt-12">
              <CommentSection articleSlug="testimony-went-global" />
            </motion.div>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
