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
            Two viral videos. Millions of views. Both describe — with striking precision — the documented reality
            of Dr. Richard William McLean's 35-year case. Below: the videos, and the evidence-based commentary
            they demand.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 text-xs px-4 py-1.5">2 videos</Badge>
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
