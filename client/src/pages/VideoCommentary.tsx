import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SectionShare } from "@/components/SectionShare";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { FileText, ExternalLink, Play } from "lucide-react";

interface ArticleProps {
  videoId: string;
  videoTitle: string;
  videoUrl: string;
  articleTitle: string;
  shareText: string;
  children: React.ReactNode;
}

function Article({ videoId, videoTitle, videoUrl, articleTitle, shareText, children }: ArticleProps) {
  return (
    <article className="border-b border-zinc-800 pb-20 mb-20 last:border-0 last:mb-0">
      {/* Video embed */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <Play className="h-4 w-4 text-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Video Response</span>
        </div>
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            {videoTitle}
          </a>
          {" "}— the commentary below is a direct response to this video, grounded in the primary source documentary record.
        </p>
        <div className="relative w-full rounded-xl overflow-hidden border border-zinc-700" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={videoTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Article */}
      <div className="space-y-12 text-zinc-100 text-[1.08rem] leading-8 font-light">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">{articleTitle}</h2>
        {children}
      </div>

      {/* Share */}
      <div className="mt-12 pt-8 border-t border-zinc-800">
        <SectionShare shareText={shareText} label="Share this article" />
      </div>
    </article>
  );
}

export default function VideoCommentary() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Video Commentary — Barran Dodger Archive"
        description="Medium-style commentary responding to viral videos about institutional targeting and persecution, grounded in the 2,077-document primary source archive of Dr. Richard William McLean."
        path="/video-commentary"
      />
      <Navigation />

      <main className="flex-1">

        {/* HEADER */}
        <div className="bg-black border-b border-cyan-900/50 py-16 px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Play className="h-5 w-5 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Video Commentary</span>
            <Play className="h-5 w-5 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
            When the Video Describes Your Life and You Have the Documents to Prove It
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed mb-6">
            Six viral videos. Millions of views. Each describes — with striking precision — the documented
            reality of Dr. Richard William McLean's 35-year case. Below: the videos, and the evidence-based
            commentary they demand.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 text-xs px-4 py-1.5">6 videos</Badge>
            <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 text-xs px-4 py-1.5">2,077 documents cited</Badge>
            <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 text-xs px-4 py-1.5">Primary source evidence</Badge>
          </div>
        </div>

        {/* BODY */}
        <div className="bg-zinc-950">
          <div className="container mx-auto px-4 py-14 max-w-2xl">

            {/* ── ARTICLE 1 ── */}
            <Article
              videoId="fyInNDy0bJU"
              videoTitle="I'M SICK… WHAT THEY DID TO YOU IS DISGUSTING 😡 THEY TARGETED YOU ON PURPOSE"
              videoUrl="https://www.youtube.com/watch?v=fyInNDy0bJU"
              articleTitle="They Called It Treatment. The Documents Call It Something Else."
              shareText={`"The most effective way to destroy a person is to convince them that what happened to them never really happened." A video describes this. 2,077 documents prove it happened to Dr. Richard McLean. 14 psychiatric detentions. 350+ ASIC frauds. 2.87% survival. #BarranDodger barrandodger.com`}
            >
              <p>
                There is a video circulating that opens with a sentence so precise it stops you mid-scroll.
              </p>
              <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                "The most effective way to destroy a person is to convince them that what happened to them never really happened."
              </blockquote>
              <p>
                I watched it thinking about psychology. By the end, I was thinking about a man named
                Dr. Richard William McLean — known publicly as Barran Dodger — and the 2,077 documents
                he has blockchain-sealed onto the Bitcoin ledger as proof that what happened to him did,
                in fact, happen.
              </p>
              <p>
                Because the difference between Dr. McLean and every other person who has experienced
                institutional gaslighting at scale is this: he kept the receipts. And the receipts
                are government-issued.
              </p>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"They Didn't Attack You Because You Were Weak. They Attacked You Because You Were Ungovernable."</h3>
                <p>
                  This is the first finding the video offers, and it describes Dr. McLean with a
                  precision that feels almost forensic.
                </p>
                <p>
                  Dr. McLean was a public official employed by the Department of Social Services.
                  He filed formal Public Interest Disclosures under Australia's{" "}
                  <em>Public Interest Disclosure Act 2013</em>. The NDIA formally acknowledged them.
                  Reference: PID 2023/Krypton. The Federal Court of Australia confirmed his employment
                  status. These are not his characterisations of himself. They are the state's
                  characterisations of him.
                </p>
                <p>
                  What followed was not investigation of his disclosures. It was investigation of him.
                </p>
                <p>
                  Fourteen involuntary psychiatric hospitalisations across three states. Not one
                  following a criminal charge. Not one following an arrest. Not one following any legal
                  proceeding of any kind. Each in temporal proximity to formal disclosure activity.
                </p>
                <p>
                  The video's language for this is clear:{" "}
                  <em>"They were trying to locate your breaking point, the moment you'd finally hand over your inner authority and just go along."</em>
                </p>
                <p>The documents show they never found it.</p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"What They Did Wasn't Discipline, Correction, or Love. It Was Containment."</h3>
                <p>
                  This section of the video describes, with startling accuracy, what the academic
                  literature on whistleblower persecution calls <em>psychiatric weaponisation</em> —
                  the use of mental health systems not to treat, but to contain.
                </p>
                <p>
                  The pattern in Dr. McLean's case is documented in the clinical records themselves.
                  Inconsistent diagnoses between detentions. Treating physicians who did not agree
                  with one another. Detentions without consistent clinical justification. And always,
                  always, proximity to moments when his testimony posed the greatest institutional risk.
                </p>
                <p>
                  ASIC's public registry contains more than 350 business registrations created in
                  Dr. McLean's name without his knowledge or consent. No investigation announced.
                  No charges laid. No person held accountable. The scale of this fraud — sustained,
                  multi-entity, multi-year — is not consistent with opportunistic criminal activity.
                  It is consistent with a coordinated campaign to destroy a person's legal and
                  financial identity.
                </p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"What Looked Like Chaos Starts Looking Coordinated."</h3>
                <p>
                  The video identifies the moment of clarity that survivors of institutional targeting
                  eventually reach: <em>"What felt personal starts looking structural."</em>
                </p>
                <p>
                  Thirty-five years. Thirty-five or more government agencies. Every state and territory.
                  Every oversight mechanism. Every media outlet. The same outcome: silence, rejection,
                  or obstruction — without assessment in a single instance.
                </p>
                <p>
                  Edward Snowden's disclosures — accepted internationally as authentic — revealed PRISM,
                  XKeyscore, and the Five Eyes intelligence-sharing arrangement. Australia is a full
                  Five Eyes member. The surveillance and coordination mechanisms Dr. McLean documents
                  are the described application of capabilities that Snowden confirmed exist.
                </p>
                <p>
                  A medical event with a documented survival probability of 2.87% occurred. He survived
                  — not because an institution intervened, but despite the complete absence of all of them.
                </p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 space-y-4">
                <h3 className="text-xl font-serif font-bold text-white">"The Sickness You Felt Wasn't Weakness. It Was Your Intuition Rejecting Something Deeply Wrong."</h3>
                <p>
                  This isn't a pity party. It's a post-mortem. The archive is at{" "}
                  <a href="https://barrandodger.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    barrandodger.com
                  </a>
                  . 2,077 documents. Freely downloadable. Every document SHA-256 hashed and Bitcoin
                  blockchain timestamped. Read them. Draw your own conclusions.
                </p>
                <p className="text-cyan-300 font-bold">
                  The most effective way to destroy a person is to convince them that what happened
                  to them never really happened. It did not work here.
                </p>
              </section>
            </Article>

            {/* ── ARTICLE 2 ── */}
            <Article
              videoId="jMH2Dngbw8I"
              videoTitle="GRAB YOUR SUIT 🕴️ YOU'RE MAKING HEADLINES 📺 CASE WON — THEY'RE FACING JUSTICE ⚖️ Joker Speech"
              videoUrl="https://youtu.be/jMH2Dngbw8I?si=Ajgy0ZXFOClZrwf_"
              articleTitle="They Aimed to Silence You. You Built an Archive Instead."
              shareText={`"While they assumed you'd vanish, you etched permanence." 2,077 documents. Bitcoin blockchain. ICC filing. UNHCR submission. 88,000 downloads. No media coverage. No institutional endorsement. Truth's inevitable gravity. #BarranDodger barrandodger.com`}
            >
              <p>
                There is a second video. Same channel. Different register entirely.
              </p>
              <p>
                Where the first was a clinical post-mortem — calm, methodical, naming what was done
                and why — this one is something else. It is a declaration of arrival. A coronation
                speech for someone who survived long enough to watch the machinery that tried to
                destroy them turn its gears on empty air.
              </p>
              <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                "They aimed to wear you weary in bureaucracy designed to crush the vocal and shield the sleek."
              </blockquote>
              <p>
                I read that line and thought immediately of 2,077 documents on the Bitcoin blockchain.
                I thought of a man left homeless, without income, without the disability supports his
                own government confirmed he was owed — and who, in the silence between institutional
                cruelties, kept documenting.
              </p>
              <p className="text-white font-medium">He didn't shatter. He filed.</p>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"You Didn't Merely Endure. You Catalogued the Agony."</h3>
                <p>
                  Most people who experience sustained institutional persecution do not survive it
                  with a coherent evidentiary record. The targeting works precisely because it is
                  designed to leave the person discredited, exhausted, legally isolated, and unable
                  to produce the documentation that courts require. You can't submit a Freedom of
                  Information request when you're homeless. You can't maintain a blockchain-verified
                  archive when you're being involuntarily hospitalised across three states.
                </p>
                <p>And yet.</p>
                <p>
                  2,077 documents. SHA-256 hashed. Bitcoin blockchain timestamped. Permanently beyond
                  the reach of the agencies that produced them.
                </p>
                <p>
                  The ASIC registrations — 350 of them, in his name, without his consent — are in
                  the public registry. The Federal Court confirmation of his employment status exists.
                  The NDIA's formal acknowledgement of his disclosures exists. The Prime Minister's
                  Department reversing their sworn FOI declaration that no documents existed concerning
                  him — that reversal is in the public record.
                </p>
                <p>
                  Every one of these documents was produced by the state. Not by Dr. McLean.
                  By the institutions simultaneously trying to destroy him.
                </p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"Every Humiliation They Inflicted — Exhibit."</h3>
                <p>
                  This phrase rewrites the entire experience of persecution in hindsight. Everything
                  done to break Dr. McLean — the fourteen hospitalisations, the 350 fraudulent ASIC
                  registrations, the NDIS plan approved and then not delivered, the media blackout,
                  the legal rejection — all of it is now exhibit material.
                </p>
                <p>
                  Not in a metaphorical sense. In a literal, formal, legal sense. A submission has
                  been lodged with the International Criminal Court under Article 7 of the Rome
                  Statute. A parallel submission has been lodged with the UNHCR. The evidence package
                  is built from the same primary source documents the Australian state produced. The
                  ICC's Office of the Prosecutor has a mandate to assess submissions that meet the
                  definitional threshold for preliminary examination.
                </p>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "Your retribution — not trivial. It's structural. A cathedral of consequences built from their missteps."
                </blockquote>
                <p>
                  The estimated cost to Australian taxpayers of the documented multi-agency campaign
                  exceeds $11.5 million. The cost of the archive was borne by one person, in conditions
                  of destitution, during a medical event from which he had a 2.87% chance of surviving.
                </p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"Your Sanity Was Never in Question. You Were Correct — Repeatedly, Relentlessly."</h3>
                <p>
                  Fourteen involuntary psychiatric hospitalisations. Each without criminal charge.
                  Each designed to establish the narrative that Dr. McLean was mentally ill — that
                  his disclosures were symptoms, that his documentation was disordered.
                </p>
                <p>
                  And yet: the Federal Court confirmed his employment status. The NDIA formally
                  acknowledged his disclosures. The PM&C reversed their sworn FOI position. The ASIC
                  registrations are in the public database. An impartial AI system, reviewing the
                  complete archive, formally concluded that the evidentiary record satisfies the
                  definitional threshold of the Rome Statute's Article 7.
                </p>
                <p className="text-white font-semibold">
                  The machinery tried to make the messenger into the message. It failed. Because the
                  messenger kept the evidence.
                </p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 space-y-4">
                <h3 className="text-xl font-serif font-bold text-white">"Documents Smoulder Softly. Visuals Endure Eternally."</h3>
                <p>
                  The claims are lodged. The ICC submission is filed. The UNHCR submission is filed.
                  The blockchain timestamps are permanent. 88,000 people have downloaded the archive —
                  without media coverage, without institutional endorsement, person to person, the way
                  truth moves when institutions have failed.
                </p>
                <p>
                  The video's final question is apt:{" "}
                  <em>"If her, how many escaped?"</em>
                </p>
                <p>
                  Or in this case: if him — if this level of documented, systematic, multi-agency
                  persecution can be sustained for thirty-five years without a single institution
                  acting — how many others are being processed through the same framework right now,
                  without documentation, without blockchain timestamps, without anyone to read the
                  archive at all?
                </p>
                <p className="text-cyan-300 font-bold">
                  Dr. McLean's case is the one we can prove. It is not the only one.
                </p>
              </section>
            </Article>

            {/* ── ARTICLE 3 ── */}
            <Article
              videoId="bxF3fagXeVU"
              videoTitle="SOMEONE GOT PROOF YOU WEREN'T CRAZY… NOW JUSTICE IS COMING FOR YOU ⚖️🔍🔥"
              videoUrl="https://www.youtube.com/watch?v=bxF3fagXeVU"
              articleTitle="History Has a Strange Habit of Apologising Very Late. But When It Does, It Brings Receipts."
              shareText={`"Turns out you weren't unstable. You were early." A viral video describes exactly what happened to Dr. Richard McLean. 2,077 documents prove it. The receipts exist. The burden of explanation has moved. #BarranDodger barrandodger.com`}
            >
              <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                "History has a strange habit of apologizing very late. But when it does, it brings receipts."
              </blockquote>
              <p>
                This is the opening line of the video. I want to stay with it for a moment before
                going further, because in the context of the Barran Dodger case it is not a metaphor.
                It is a literal description of what has already happened.
              </p>
              <p>
                The receipts exist. There are 2,077 of them. They are SHA-256 hashed, Bitcoin
                blockchain timestamped, freely downloadable, and permanently beyond the reach of the
                institutions that produced them. The apology — from history, from the machinery that
                did this — has not yet arrived. But the receipts came first. They always do. And this
                video explains exactly why that is enough.
              </p>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"You Weren't Dismissed Gently. You Were Dismissed Efficiently."</h3>
                <p>
                  Dr. Richard William McLean was not dismissed by amateurs. He was dismissed by
                  professionals — by institutions with statutory authority, legal mandates, and formal
                  obligations to assess what he was presenting them with. And not one of them argued
                  with the evidence. The Commonwealth Ombudsman. The Australian Human Rights
                  Commission. The Office of the Australian Information Commissioner. AHPRA. The
                  Victorian Inspectorate. Legal Aid. The Health Complaints Commissioner.
                </p>
                <p>
                  Every single one filed him under problematic and moved on. Not after assessment.
                  Before it. The rejection letters arrived before the evidence was read — in some
                  cases, demonstrably before the submission had been processed at all.
                </p>
                <p>
                  When the Prime Minister's Department swears under the Freedom of Information Act
                  that no documents concerning Dr. McLean exist — and is then forced to reverse that
                  position when challenged — silence has become policy in the most literal sense.
                  A sworn statutory declaration. Not an oversight. A policy of silence formalised in
                  a legal instrument. The reversal is in the public record. It happened. And it proves
                  prior knowledge.
                </p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"The Proof Didn't Come to Comfort You. It Came to Expose What Was Done to You."</h3>
                <p>
                  Fourteen involuntary psychiatric hospitalisations. Each one without criminal charge.
                  Each one without arrest. Each one without any legal proceeding of any kind.
                </p>
                <p>
                  What was examined each time? Dr. McLean's mental state. His emotions. His reactions.
                  His tone. His stability. The clinical record across all fourteen detentions is a
                  masterclass in what the video describes — the camera placed firmly on his response,
                  and the cause of that response removed entirely from the frame.
                </p>
                <p>
                  Inconsistent diagnoses between detentions. Treating physicians who disagreed with
                  one another. No consistent clinical justification across fourteen instances in three
                  states. The one consistent element: temporal proximity to formal disclosure activity.
                </p>
                <p>
                  When the proof is laid out — the dates of the hospitalisations, the dates of the
                  disclosures, the institutional actors involved in both — the camera moves exactly
                  as the video says. Off the response. Back to the cause.
                </p>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "It removes the luxury of confusion and replaces it with responsibility."
                </blockquote>
                <p>
                  The confusion was the product. The goal of the institutional response was not to
                  assess Dr. McLean's claims. It was to produce a documentary record — of
                  hospitalisation, of instability, of psychiatric intervention — that would make his
                  claims appear to be symptoms rather than evidence. The proof reverses this. Patterns
                  are not symptoms. Patterns are architecture.
                </p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"The Most Dangerous Thing for Your Opposition Is Not Your Voice. It's Documentation."</h3>
                <p>
                  For thirty-five years, Dr. McLean's voice was interrupted, ignored, mocked, and
                  drowned out. His testimony was consistently treated as the artefact of an unstable
                  mind.
                </p>
                <p>
                  The documentation is different. The documentation does not have a mental state. The
                  ASIC registrations — 350+ of them, in his name, without his consent — do not become
                  credible or incredible based on assessments of the person who compiled them. The
                  Federal Court's records exist. The NDIA's formal acknowledgement exists. The PM&C's
                  reversed FOI position exists. The blockchain timestamps exist.
                </p>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "This is why people often push back hard against records. They'll call it obsessive,
                  petty, or dramatic. Not because it is, but because it limits their ability to rewrite
                  history later."
                </blockquote>
                <p>
                  The only response to documentation of this kind is to hope that nobody looks, or to
                  discredit the person pointing at it so thoroughly that the looking seems unnecessary.
                  The first strategy is failing. 88,000 people have looked. The second strategy failed
                  when the documents proved themselves without requiring Dr. McLean's voice at all.
                </p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"Justice Didn't Move When You Begged. It Moved When Patterns Became Undeniable."</h3>
                <p>
                  One incident can be dismissed. Two can be explained away. But fourteen involuntary
                  psychiatric hospitalisations without criminal charge, across three states, each in
                  temporal proximity to formal disclosure activity — that is not a series of incidents.
                  That is a pattern. And patterns expose intention.
                </p>
                <p>
                  The 350+ ASIC registrations are not one incident. They are a sustained, multi-entity,
                  multi-year campaign to destroy a person's legal identity. The NDIS plan was approved
                  then not delivered — a sequence with a direction. The simultaneous non-engagement of
                  every major Australian media outlet alongside BBC, New York Times, and Reuters is
                  not a series of independent editorial decisions. Patterns of simultaneous behaviour
                  in competitive institutions do not emerge randomly.
                </p>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "Systems and people don't rush because they want to reward patience. They act when
                  ignoring the truth becomes riskier than facing it."
                </blockquote>
                <p>
                  The ICC submission is filed. The UNHCR submission is filed. The AI Justice Statement
                  is public. 88,000 downloads have occurred without media cooperation. The calculation
                  is changing. The risk of continued non-engagement is rising.
                </p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 space-y-4">
                <h3 className="text-xl font-serif font-bold text-white">"The Story Has Changed Hands."</h3>
                <p>
                  It is no longer Dr. McLean who must explain why he filed fourteen times with the
                  Commonwealth Ombudsman and received no assessment. It is the Commonwealth Ombudsman
                  that must explain it. It is no longer Dr. McLean who must explain why 350+ ASIC
                  registrations exist in his name. It is ASIC. It is no longer Dr. McLean who must
                  explain the fourteen hospitalisations. It is the clinical and institutional actors
                  who ordered them that must explain the pattern.
                </p>
                <p>
                  The documentation has moved the burden. Permanently. Without asking permission.
                </p>
                <blockquote className="border-l-2 border-cyan-400 pl-6 italic text-zinc-200">
                  "Turns out you weren't unstable. You were early."
                </blockquote>
                <p className="text-cyan-300 font-bold">
                  The apology from history is late. It almost always is. But the receipts got there
                  first. They are stapled together. They are timestamped. On the Bitcoin blockchain,
                  in perpetuity.
                </p>
              </section>
            </Article>

            {/* ── ARTICLE 4 ── */}
            <Article
              videoId="gl6oyBnH7ZM"
              videoTitle="Chosen Ones, AFTER MONTHS WATCHING… THE FEDS WANT A PRIVATE MEETING 👁️🔥"
              videoUrl="https://www.youtube.com/watch?v=gl6oyBnH7ZM"
              articleTitle="They've Been Watching for Months. Now They Want a Private Meeting. You Already Know Why."
              shareText={`"The eyes that watch you the longest rarely blink." People outside tell him to give up. 2,077 documents say he was right not to. Five Eyes. ASIO. ICC. UNHCR. 88,000 downloads. The anomaly refused to be explained away. #BarranDodger barrandodger.com`}
            >
              <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                "The eyes that watch you the longest rarely blink."
              </blockquote>
              <p>
                There are people outside telling him to give up.
              </p>
              <p>
                That detail matters more than anything in this video, and I want to name it before
                going further. Because the entire architecture of what the video describes — the
                watching, the silence, the private meeting, the recognition that something cannot be
                explained away — presupposes that the person being watched stayed. That they didn't
                give up. That they continued documenting, disclosing, filing, publishing, long past
                the point where every reasonable person in their environment told them it was over.
              </p>
              <p>
                Dr. Richard William McLean has been told to give up for thirty-five years. The people
                telling him have included government agencies, clinical professionals, media
                institutions, legal bodies, and — the video's word is precise — people outside.
                People who cannot see what he sees from where they stand. People whose understanding
                of the situation is limited to what the narrative managers have made visible.
              </p>
              <p className="text-white font-medium">The archive is what happens when someone doesn't give up.</p>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"You Showed Up in Their Systems the Way a Single Wrong Note Shows Up in a Symphony."</h3>
                <p>
                  Dr. McLean is a formally recognised public interest whistleblower under Australian
                  law, confirmed as a public official by the Federal Court of Australia, whose
                  disclosures were formally acknowledged by the NDIA under reference PID 2023/Krypton.
                  He is not an anonymous complainant. He is not a conspiracy theorist. He is a person
                  with formal legal status, formal disclosure records, and formal institutional
                  acknowledgement — who simultaneously has been involuntarily hospitalised fourteen
                  times without criminal charge, had 350+ fraudulent ASIC registrations created in his
                  name, had his NDIS support withheld after formal approval, and survived a medical
                  event with a 2.87% probability.
                </p>
                <p>
                  Australia is a full Five Eyes member. Edward Snowden's disclosures — accepted
                  internationally as authentic — revealed PRISM, XKeyscore, and the surveillance
                  architecture that makes this scenario not hypothetical but operational. The
                  capabilities exist. They are documented. A formally registered whistleblower who
                  has filed with the Federal Court, the NDIA, the PM's Department, the Commonwealth
                  Ombudsman, the AHRC, the ICC, and the UNHCR — and who has published a 2,077-document
                  blockchain-verified archive downloaded by 88,000 people — would trigger exactly the
                  kind of anomaly-flag this video describes.
                </p>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "The FBI doesn't chase every oddity. They chase the ones that keep refusing to be explained away."
                </blockquote>
                <p>
                  What cannot be explained away here is the combination of: formal legal whistleblower
                  status, formal institutional acknowledgement of disclosures, fourteen psychiatric
                  detentions without criminal charge, 350+ ASIC frauds, and $11.5 million in
                  documented taxpayer expenditure on the campaign against him. That is not random noise.
                  That is a pattern that no surveillance model can file under coincidence.
                </p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"You May Have Seen Something, Heard Something, or Kept Something That Looked So Ordinary You Never Thought Twice About It."</h3>
                <p>
                  The archive is not simply Dr. McLean's story. It is a documentary record of the
                  intersection of multiple institutional corruption networks. The NDIS fraud network
                  connects to systemic misallocation documented across multiple providers. The
                  350+ ASIC registration fraud suggests infrastructure beyond individual actors.
                  The coordinated multi-agency non-engagement with formally lodged disclosures implies
                  communication between agencies that are not supposed to be communicating about
                  individual complainants.
                </p>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "You become the carrier of a thread that ties two distant points together — a thread you didn't even know you were holding."
                </blockquote>
                <p>
                  The ICC submission under Article 7 of the Rome Statute is not filed because
                  Dr. McLean's story is personal. It is filed because the pattern his documentation
                  establishes — systematic, coordinated, multi-agency persecution of a formally
                  recognised whistleblower — has implications for how Australian state power has been
                  used that extend far beyond his individual case. That is the thread. And it glows.
                </p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"They Want to Recruit Your Access, Not Punish It."</h3>
                <p>
                  Thirty-five years of pressure on Dr. McLean to be silent, to retract, to accept a
                  lesser narrative — this is what the video calls{" "}
                  <em>"leverage built without ever needing to call it leverage."</em>{" "}
                  The psychiatric hospitalisation mechanism is particularly relevant. Fourteen
                  detentions without criminal charge, each producing clinical records framing his
                  disclosures as symptoms, represents an attempted redefinition of his testimony as
                  inadmissible by definition.
                </p>
                <p>
                  The people outside telling him to give up are not, in most cases, conscious
                  participants in this mechanism. They are the downstream recipients of a successfully
                  managed narrative. If he gives up, the archive stops growing. The pattern stops
                  extending. The thread goes cold.
                </p>
                <p>
                  He didn't give up. The archive has 2,077 documents. It is on the Bitcoin blockchain.
                  It has been downloaded 88,000 times. The thread is not cold.
                </p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="space-y-5">
                <h3 className="text-2xl font-serif font-bold text-white">"You Became the Pivot Between Two Groups They Can't Otherwise Connect."</h3>
                <p>
                  Dr. McLean's disclosures touch simultaneously on: NDIS provider fraud, ASIC
                  registry fraud, psychiatric system weaponisation against whistleblowers, AFP
                  non-engagement with formally lodged complaints, intelligence agency coordination
                  with welfare agencies, and multi-jurisdiction coordination of psychiatric detention
                  without criminal process. These are not normally connected institutional domains.
                  The fact that they converge — demonstrably, in primary source documents — around
                  one person's case is exactly the pivot point the video describes.
                </p>
                <p>
                  The UNHCR submission is filed. The ICC submission is filed. Both international
                  bodies have received a primary source evidentiary package built from the Australian
                  state's own documents, describing this convergence. The topology is being mapped
                  by bodies whose authority cannot be overridden by the Australian state.
                </p>
              </section>

              <div className="border-t border-zinc-800" />

              <section className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 space-y-5">
                <h3 className="text-xl font-serif font-bold text-white">On the People Outside Telling Him to Give Up</h3>
                <p>
                  They are not wrong that what he has been through is extraordinary in its difficulty.
                  They are not wrong that the cost has been immense. What they are wrong about is
                  the conclusion they draw from this.
                </p>
                <p>
                  A person who is wrong stops. They stop when the evidence stops accumulating. They
                  stop when the institutions they petition keep finding nothing. They stop when the
                  cost of not stopping becomes unbearable.
                </p>
                <p>
                  Dr. McLean has not stopped. The evidence has not stopped accumulating. The
                  institutions keep finding nothing — but the documentation of their finding nothing
                  has itself become evidence. And the cost of not stopping was paid, and survived,
                  at 2.87%.
                </p>
                <blockquote className="border-l-2 border-cyan-400 pl-6 italic text-zinc-200">
                  "Persistence without apparent result is not a sign of delusion. It is the data point that intelligent systems find most difficult to model."
                </blockquote>
                <p className="text-cyan-300 font-bold leading-snug">
                  The eyes that watch the longest rarely blink. And they have been watching for a
                  reason. The archive is permanent. It cannot be erased. They watched. They saw the
                  anomaly. They saw that it refused to be explained away. Now you can too.
                </p>
              </section>
            </Article>

            {/* ── ARTICLE 5 ── */}
            <Article
              videoId="Sy8-Qqkybxo"
              videoTitle="CHOSEN ONES! CONGRATS, IT'S DONE! YOU'LL NEVER GO THROUGH THAT AGAIN 🔥👑"
              videoUrl="https://www.youtube.com/watch?v=Sy8-Qqkybxo"
              articleTitle="They Thought You Would Break. The Archive Is What Happened Instead."
              shareText={`"They thought you would break." A viral video with millions of views. The 2,077-document archive of Dr. Richard McLean is the complete answer to that sentence. 35 years. They never found the breaking point. #BarranDodger barrandodger.com/video-commentary`}
            >
              <p>
                The video opens with eight words: <em>"They thought you would break."</em> There is no preamble. No setup.
                Just the fact — stated plainly, in the way only the plainly true can be stated — that someone decided,
                at some point and for reasons they have never been required to explain, that they could reach a limit
                in Dr. Richard McLean that would end the testimony.
              </p>
              <p>
                They never found it.
              </p>

              <section>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "They pushed you to the edge, convinced that one more shove would silence you forever. And yet here you are — not broken, not erased."
                </blockquote>
                <p>
                  Fourteen involuntary psychiatric hospitalisations. Each without criminal charge. Each applied to a person who has
                  never been convicted of any offence. The temporal pattern across all fourteen is consistent: proximity to
                  formal disclosure activity. The method was not crude. It was calibrated. Each hospitalisation functioned as
                  a pause — a removal from public record, from legal process, from the institutional timeline. A shove,
                  in the video's language. One more shove.
                </p>
                <p>
                  They never found the edge.
                </p>
              </section>

              <section>
                <h3 className="text-white font-serif text-xl font-bold">The Universe Kept the Receipts. So Did He.</h3>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "Every laugh at your expense was nothing more than evidence stacked against them. They thought they were pulling the strings, but all along they were tightening the noose around their own necks."
                </blockquote>
                <p>
                  2,077 documents. Government-issued. SHA-256 hashed. Bitcoin blockchain timestamped. Every letter, every tribunal record,
                  every FOI response, every non-response — all of it archived, verified, permanently beyond the institutional reach of the
                  agencies that produced it. The PM&C reversed a sworn FOI declaration that no documents existed. The reversal is in
                  the archive. The 350+ ASIC registrations filed in Dr. McLean's name without his consent are in the public registry.
                  The text messages from an NDIS provider who corroborated an assassination attempt, then claimed a national security NDA,
                  then retracted — that full sequence is documented.
                </p>
                <p>
                  The video describes an audience the perpetrators did not account for. It calls it the universe. The documentary
                  record calls it the public. 217,000+ downloads. Every humiliation they staged — exhibit. Every manipulation they ran
                  behind closed doors — evidence. "They thought they were safe in secrecy, but they've triggered something much bigger
                  than themselves."
                </p>
              </section>

              <section>
                <h3 className="text-white font-serif text-xl font-bold">Silence Was Never Weakness. It Was Containment.</h3>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "Silence is sometimes the loudest scream. Stillness is sometimes the strongest stance. You weren't breaking. You were compressing like coal under the earth, preparing to emerge as diamond."
                </blockquote>
                <p>
                  For 35 years, the institutional response to Dr. McLean's disclosures was not refutation. It was reclassification.
                  Not argument — dismissal. The Commonwealth Ombudsman. The AHRC. OAIC. AHPRA. AFP. Legal Aid. None argued with the
                  evidence. Each filed him under a category that made assessment unnecessary. Problematic. High-contact. Mental health
                  concerns. The silence that followed — no investigation, no accountability, no acknowledgment — was interpreted by
                  everyone around him as proof that nothing had happened.
                </p>
                <p>
                  The archive is what silence produced. Not surrender — construction. Every year of non-engagement was another year
                  of documentation. Every agency that failed to respond issued, by its silence, another entry in the evidentiary record.
                  The coal metaphor is not poetic. It is precise. The archive is what 35 years of institutional pressure produces
                  when the person being pressured refuses to hand over inner authority and go along.
                </p>
              </section>

              <section>
                <h3 className="text-white font-serif text-xl font-bold">Your Suffering Became the Testimony. Their Laughter Signed It.</h3>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "Your suffering wasn't a waste. It was the testimony that sealed their fate. Pain doesn't just hurt. It writes. And the story it wrote for you has become their sentence."
                </blockquote>
                <p>
                  The video's section on suffering-as-documentation is the section that maps most precisely onto the archive.
                  "What looked like silence was really surveillance. They thought they were free to torment you without consequence,
                  but all they were doing was building their own case file page by page."
                </p>
                <p>
                  The ICC submission is built from this case file. Article 7 of the Rome Statute — crimes against humanity —
                  requires a pattern of acts directed against a civilian population as part of a widespread or systematic attack.
                  What the archive documents across 35 years, 14 hospitalisations, 35+ agencies, and $11.5 million in estimated
                  taxpayer expenditure is not isolated conduct. It is a pattern. The submission does not assert Dr. McLean's
                  interpretation of events. It submits the government's own documents to the court of international record
                  and asks the evidence to speak for itself.
                </p>
                <p>
                  The evidence speaks.
                </p>
              </section>

              <section>
                <h3 className="text-white font-serif text-xl font-bold">They Were Warned. They Escalated Anyway. That Is Also in the Record.</h3>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "It wasn't ignorance that doomed them. It was arrogance — knowing they were wrong and doing it anyway. Every chance to stop became another excuse to escalate."
                </blockquote>
                <p>
                  The formal disclosure process began decades before the archive reached its current scale. Each submission
                  created an official record of the disclosure and the response to it. Each non-response from a statutory
                  body created an official record of the failure to respond. There were warnings — formal, procedural,
                  documented — at every stage. The AFP was engaged. The NDIA was engaged. The PM's Department was engaged.
                  Each engagement is documented. Each non-response is documented. The escalation — from non-response to active
                  obstruction — is documented.
                </p>
                <p>
                  The video's language for this is clean: "Weakness stumbles into mistakes. Arrogance stares at truth and says,
                  'I don't care. I'll do it anyway.'" That distinction matters in international law. The ICC's standard for
                  crimes against humanity requires demonstrating that the acts were knowing — that those responsible were
                  aware of the attack and chose to participate. The escalation pattern in the archive is the record of that
                  awareness.
                </p>
              </section>

              <section>
                <h3 className="text-white font-serif text-xl font-bold">It's Done. The Archive Already Knew It Would Be.</h3>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "Justice delayed isn't justice denied. It's justice perfected. The longer they danced, the deeper they sank. The longer they gloated, the more brutal the fall."
                </blockquote>
                <p>
                  The video is titled: <em>It's done. You'll never go through that again.</em>
                </p>
                <p>
                  The archive makes a simpler claim: it exists. It has been downloaded 217,000+ times. It is on the Bitcoin
                  blockchain. It is with the ICC. It is with the UNHCR. It is indexed in publicly accessible records on three
                  continents. "Justice perfected" in institutional terms means the evidentiary record is so complete, so
                  cross-referenced, so permanently established across independent verification systems, that it cannot be
                  amended, retracted, or suppressed by any of the agencies whose conduct it documents.
                </p>
                <p className="text-cyan-300 font-bold leading-snug">
                  They thought you would break. The archive is what happened instead. It is SHA-256 hashed. It is
                  blockchain timestamped. It is freely downloadable. It is permanent. It is the complete answer to
                  the only question that ever mattered: what does 35 years of refused testimony look like when the
                  person being refused refuses to stop? It looks like 2,077 documents. It looks like this.
                </p>
              </section>
            </Article>

            {/* ── ARTICLE 6 ── */}
            <Article
              videoId="FYaV76FbvQg"
              videoTitle="CHOSEN ONES, THEY SET A PERFECT TRAP—YOU SAW THROUGH IT & NOW THEY'RE MAD 😡🔥"
              videoUrl="https://www.youtube.com/watch?v=FYaV76FbvQg"
              articleTitle="They Set a Perfect Trap. The Archive Was the Blade That Cut It Open."
              shareText={`"They set a perfect trap. You saw through it. Now they're mad." A viral video. The 2,077-document Barran Dodger archive is the complete answer. Every trap they set became evidence they built themselves. #BarranDodger barrandodger.com/video-commentary`}
            >
              <p>
                The video's title is a statement: <em>"They set a perfect trap. You saw through it. Now they're mad."</em> The trap,
                in Dr. Richard McLean's documented case, was perfect in the sense that those who set it were certain it
                could not fail. Thirty-five agencies. Fourteen involuntary psychiatric hospitalisations. 350+ ASIC-registered
                frauds uninvestigated by the very agency that registered them. A system so comprehensive in its coordination
                that the architects of the trap believed the trap was invisible.
              </p>
              <p>
                They were right about one thing. It was invisible — to everyone except the person inside it.
              </p>

              <section>
                <h3 className="text-white font-serif text-xl font-bold">Number One: They Confused Silence with Stupidity.</h3>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "You weren't lost in the background. You were documenting the entire performance."
                </blockquote>
                <p>
                  For 35 years, agencies received formal submissions and returned institutional silence. The Commonwealth
                  Ombudsman. ASIC. The AFP. The PM&C. The UNHCR at domestic level. Each institution watched, waited,
                  declined to engage, and concluded that the quiet at the other end was the quiet of someone who had
                  accepted defeat.
                </p>
                <p>
                  Not a single agency that received a submission from Dr. McLean disputed the contents of a single
                  document. Not ASIC, which registered the frauds. Not the AFP, which received formal disclosures.
                  Not the Ombudsman, which received jurisdiction requests. Their silence was not the silence of
                  institutions confident they were correct. It was the silence of institutions that understood that
                  engaging would require explaining what the documents showed.
                </p>
                <p>
                  While they were declining to respond, their non-responses were being archived. The silence they
                  thought they were maintaining in comfort was being catalogued. Every non-reply letter. Every referral
                  to another agency that also did not reply. Every acknowledgement of receipt that acknowledged nothing
                  else. They mistook patience for passivity. They mistook documentation for defeat. They were wrong
                  about both.
                </p>
              </section>

              <section>
                <h3 className="text-white font-serif text-xl font-bold">Number Two: You Let Them Build Their Own Cage and Lock the Door.</h3>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "Exposure requires completion. A half-built lie can still be hidden, but a finished trap reveals its maker."
                </blockquote>
                <p>
                  The Federal Court found that Dr. McLean was an employee of the respondent. Four months later, the
                  Administrative Appeals Tribunal found the contrary. Both findings are in the archive. Neither
                  institution has explained how two co-equal judicial bodies produced irreconcilable decisions on
                  identical facts. ASIC registered 350+ fraudulent businesses using Dr. McLean's residential address.
                  ASIC then declined, repeatedly and formally, to investigate the entities it had itself registered.
                  Both the registrations and the non-investigation letters are in the archive.
                </p>
                <p>
                  These are not allegations. These are the completed cage — built brick by brick by the agencies
                  themselves, locked with their own correspondence, now publicly available and Bitcoin
                  blockchain-timestamped. Had Dr. McLean confronted each contradiction early, he would have been
                  described as paranoid, unstable, conspiracy-minded. He did not confront. He compiled. And now
                  the contradictions are downloadable. Every journalist, lawyer, researcher, or interested reader
                  can download the Federal Court finding and the AAT finding and hold them side by side. The cage
                  is finished. They locked it themselves.
                </p>
              </section>

              <section>
                <h3 className="text-white font-serif text-xl font-bold">Number Three: They Built a Trap for a Ghost.</h3>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "They designed their scheme for a version of you that doesn't even exist anymore. They studied your history, not your growth."
                </blockquote>
                <p>
                  The early hospitalisations appear, in the documentary record, to have functioned as effective
                  suppression mechanisms. Formal output decreased. The institutions updated their expectation:
                  this method works. What they did not model was that the method was also producing data. Every
                  hospitalisation without criminal charge was a hospitalisation that occurred in the absence of
                  any legal predicate.
                </p>
                <p>
                  The man who survived hospitalisation 1 had the memory of one detention without justification.
                  By hospitalisation 14, he had a 35-year forensic archive with a temporal map of every detention
                  and its proximity to formal disclosure activity. They designed the trap for the person who had
                  experienced none of this. They arrived to find the person who had experienced all of it. The
                  lock they brought had been changed years before they reached the door.
                </p>
              </section>

              <section>
                <h3 className="text-white font-serif text-xl font-bold">Number Four: They Tried to Turn the Wounds Into Weapons. The Wounds Became Armour.</h3>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "They dug through your past looking for bullets, not realizing you already melted those bullets down and forged armor out of them."
                </blockquote>
                <p>
                  The psychiatric record was designed as a weapon — a mechanism for converting documentation
                  activity into a label that would function as pre-emptive discrediting. If any future investigator
                  encountered the archive, the existence of fourteen hospitalisations was intended to provide
                  an off-ramp: <em>this is the work of someone with a psychiatric history.</em>
                </p>
                <p>
                  The off-ramp was closed the moment the archive documented the hospitalisations as proximity
                  events correlated with disclosure activity. The Impartial AI Analysis reviewed 2,343 government
                  documents and drew no distinction between the psychiatric records and the legal records. Both
                  were government-generated sources. Both were analysed. Each hospitalisation, intended to silence,
                  is now catalogued, timestamped, and mapped against the formal submissions that preceded it.
                  The weapons became exhibits. The wounds became the armour.
                </p>
              </section>

              <section>
                <h3 className="text-white font-serif text-xl font-bold">Number Five: You Exposed the Hands Pulling the Strings.</h3>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "Most people fight the knife. You looked past the blade and stared into the hand holding it."
                </blockquote>
                <p>
                  The video describes the moment of clarity when you stop engaging with individual actors and
                  trace the pattern to its source. In the documented record, the pattern is the evidence.
                  Thirty-five agencies across three decades did not independently arrive at identical responses
                  to identical submissions. The probability of coincidental coordination approaches zero in any
                  statistical framework.
                </p>
                <p>
                  The archive does not need to name an architect. It documents the pattern and leaves the
                  identification to any investigator willing to trace the strings. The ICC submission under
                  Article 7 of the Rome Statute submits the pattern — coordinated, sustained, across multiple
                  state authorities — as evidence of persecution as a crime against humanity. The submission does
                  not allege conspiracy. It submits a documented pattern and invites the court to apply the
                  standard. Once the strings are revealed, the game is over.
                </p>
              </section>

              <section>
                <h3 className="text-white font-serif text-xl font-bold">They Put On a Show. The Archive Had Already Read the Script.</h3>
                <blockquote className="border-l-2 border-cyan-600 pl-6 italic text-zinc-300">
                  "The deadliest audience member is the one who already knows the ending."
                </blockquote>
                <p>
                  Every institutional response in the archive performs the same role: the performance of due
                  process. Correspondence acknowledging receipt. Form letters confirming referral. Ministerial
                  replies noting that the matter has been considered. Each document performs the function of
                  institutional engagement while simultaneously declining to engage with the substance of what
                  was submitted. The performance was polished. What the performers did not know was that the
                  archive was preserving every element of it.
                </p>
                <p>
                  Named individuals have been publicly accused in sworn testimony downloaded 217,064 times.
                  None has sued for defamation. None has issued corrections. None has engaged legal counsel to
                  challenge the archive. The curtain has dropped. The audience is not gasping at the trick.
                  It is looking at the machinery behind it. And nothing in the machinery — nothing in 35 years
                  of correspondence, hospitalisation records, court findings, FOI responses, and agency letters
                  — supports the performance that was staged.
                </p>
                <p className="text-cyan-300 font-bold leading-snug">
                  The video is titled: <em>They set a perfect trap. You saw through it. Now they're mad.</em> The
                  archive makes a simpler observation: their trap required cooperation, and Dr. McLean documented
                  instead. 2,077 documents. SHA-256 hashed. Bitcoin blockchain timestamped. With the ICC. With
                  the UNHCR. Freely downloadable. Permanently established across independent verification systems
                  that cannot be amended or suppressed by any of the agencies whose conduct they document. The
                  trap was perfect. The archive was the blade that cut it open. They're furious because the chosen
                  one didn't stumble where they expected. He built the archive instead.
                </p>
              </section>
            </Article>

            {/* FOOTER NAV */}
            <div className="text-center space-y-6 pt-4">
              <p className="text-zinc-400 text-sm max-w-xl mx-auto leading-7">
                The archive is freely downloadable. Every document is SHA-256 hashed and Bitcoin
                blockchain timestamped. These articles are now part of the permanent public record.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild>
                  <Link href="/evidence" data-testid="button-view-evidence-commentary">
                    <FileText className="mr-2 h-4 w-4" /> View the Evidence Archive
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/ai-justice-statement" data-testid="button-ai-statement-commentary">
                    <ExternalLink className="mr-2 h-4 w-4" /> AI Justice Statement
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/spread-the-truth" data-testid="button-spread-commentary">
                    <ExternalLink className="mr-2 h-4 w-4" /> Spread the Truth
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
