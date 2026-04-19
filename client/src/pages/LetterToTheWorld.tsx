import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Globe, Shield, Scale, Download, Clock, Archive } from "lucide-react";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const STAT_PILLS = [
  { icon: Archive, label: "2,301 Documents" },
  { icon: Clock, label: "35 Years" },
  { icon: Shield, label: "25+ Agencies" },
  { icon: Scale, label: "ICC Article 7" },
  { icon: Download, label: "378,571 Downloads" },
  { icon: Globe, label: "Zero Defamation Suits" },
];

function Rule() {
  return (
    <div className="flex items-center gap-4 my-12">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
    </div>
  );
}

function RomanNumeral({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="text-amber-500/60 text-xs tracking-[0.3em] uppercase font-mono mb-1">{n}</div>
      <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{title}</h2>
    </div>
  );
}

function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="relative my-10 pl-6 border-l-2 border-amber-500">
      <div className="text-amber-100/90 text-lg md:text-xl font-light leading-relaxed italic">
        {children}
      </div>
    </blockquote>
  );
}

function StatRow() {
  return (
    <div className="flex flex-wrap gap-2 justify-center my-10">
      {STAT_PILLS.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-xs text-zinc-300 font-mono"
        >
          <Icon className="h-3 w-3 text-amber-400" />
          {label}
        </span>
      ))}
    </div>
  );
}

export default function LetterToTheWorld() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <SEO
        title="A Letter to the World — Barran Dodger | For Every Vulnerable Person Who Ever Stood Against the System"
        description="An impartial author's essay on why a win for Barran Dodger is a win for every vulnerable person who has ever been dismissed, silenced, or erased by the system. 2,301 documents. 35 years. ICC Article 7. 378,571 downloads. Zero defamation suits."
      />
      <Navigation />

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-8">
            <BookOpen className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-amber-300 text-xs tracking-widest uppercase font-mono">Impartial Author Essay — April 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            A Letter to
            <span className="block text-amber-400">the World</span>
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Why a win for Barran Dodger is a win for every vulnerable person
            who has ever stood against the system — and why the archive
            makes that win permanent.
          </p>

          <StatRow />

          <p className="text-zinc-500 text-sm italic max-w-xl mx-auto">
            Written as an act of independent witness. No fact stated in this essay is contested
            in any public forum by any named party, despite 378,571 downloads of the underlying archive.
          </p>
        </div>
      </div>

      {/* Essay body */}
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-0">

        {/* I */}
        <RomanNumeral n="I" title="Invocation" />
        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-zinc-300 text-lg leading-loose mb-6">
            There is a moment, in the history of every system that has ever tried to erase a person,
            when the archive becomes larger than the erasure.
          </p>
          <p className="text-zinc-300 text-lg leading-loose mb-6">
            We are at that moment.
          </p>
          <p className="text-zinc-300 leading-loose mb-6">
            What you are about to read is not written by the man this archive documents. It is written
            about what his archive <em>means</em> — not only for him, but for every person who has ever been
            dismissed, institutionally silenced, psychiatrically detained to discredit a true claim,
            or financially strangled to prevent a truthful voice from reaching the bodies that are
            supposed to hear it.
          </p>
          <p className="text-zinc-300 leading-loose mb-6">
            This is a letter to the world. It is addressed to everyone who has ever sat across a desk
            from a person with institutional authority and been told that what they know to be true is
            not true. It is addressed to everyone who has been labelled before they could be heard.
            It is addressed to every parent who tried to report harm and was referred to the body the
            harm came from. It is addressed to every person in a disability system who filed a
            complaint and watched it loop back to the agency that caused the damage. It is addressed
            to every whistleblower who told the truth in writing and was met with a template letter.
          </p>
        </div>

        <Pullquote>
          You know who you are. This letter is for you.
        </Pullquote>

        <Rule />

        {/* II */}
        <RomanNumeral n="II" title="The Archive Speaks" />
        <div className="space-y-5 text-zinc-300 leading-loose">
          <p>
            The archive of Dr. Richard William McLean — known to the world as Barran Dodger — is not
            a collection of complaints. It is a collection of <em>government-produced documents.</em>
          </p>
          <p>
            Every hospitalisation is documented. Every referral letter is on file. Every tribunal
            finding is catalogued. Every FOI response is preserved — including the responses that
            claimed 1,178 documents did not exist, until the government's own metadata proved they
            did. Every agency that closed the file is named. Every denial letter is timestamped and
            hashed on a cryptographic ledger that no agency — not the Commonwealth Ombudsman, not
            ASIO, not the Prime Minister's department — can alter.
          </p>
          <p>
            Over thirty-five years, across twenty-five agencies, through fourteen involuntary
            psychiatric detentions imposed without criminal charge, across three hundred and sixty-five
            thousand dollars spent hospitalising a man whose beliefs the government's own subsequent
            documents proved were accurate — through all of it — every institutional actor
            wrote something down.
          </p>
        </div>

        <Pullquote>
          They always write something down. And the man they wrote about kept every document they produced.
        </Pullquote>

        <div className="space-y-5 text-zinc-300 leading-loose">
          <p>
            This is what makes the archive extraordinary: it is not one side of a story. It is almost
            entirely <em>their</em> side of the story. The government authored this archive. They wrote
            the letters, issued the findings, produced the tribunal records, registered the ASIC
            entries — over three hundred and fifty of which were later found to be fraudulent — and
            signed the correspondence. What they did not anticipate is that the person they were
            writing about would one day assemble every page they had ever produced, cross-reference
            it, timestamp it on the Bitcoin blockchain, and submit it to the International Criminal
            Court under Article 7 of the Rome Statute.
          </p>
          <p>
            Article 7 concerns crimes against humanity.
          </p>
          <p>
            The ICC is reviewing it.
          </p>
          <p>
            Independently, twenty-two separate AI corroboration analyses compared viral video
            testimonies against the archive's two thousand, three hundred and one documents.
            The result across all twenty-two: two hundred and twenty-eight propositions assessed,
            two hundred and twenty-eight corroborated, zero contradictions. Not one claim in the
            archive — not one — has been contradicted by the evidence. Fifteen consecutive analyses
            returned a perfect score.
          </p>
        </div>

        <Rule />

        {/* III */}
        <RomanNumeral n="III" title="The Oldest Pattern in the World" />
        <div className="space-y-5 text-zinc-300 leading-loose">
          <p>
            The mechanisms used against Barran Dodger are not novel. They are ancient. They are the
            oldest instruments in the institutional toolkit for managing people who tell inconvenient
            truths — and they are being used, right now, today, against millions of people who will
            never build an archive, never reach the ICC, and never have three hundred and fifty-four
            thousand strangers download their evidence.
          </p>
        </div>

        <div className="space-y-6 my-8 border border-white/8 rounded-xl bg-white/[0.02] p-6">
          {[
            {
              label: "The psychiatric label.",
              body: "Applied not when behaviour is dangerous but when disclosure is dangerous. Documented in this archive across fourteen occasions, each mapped forensically against the timing of formal disclosure activity. When the disclosure came, the hospitalisation followed. Not as treatment. As interruption."
            },
            {
              label: "The circular referral.",
              body: "The mechanism by which a complaint is sent from Agency A to Agency B, which refers it to Agency C, which refers it back to Agency A — each step producing a template letter indistinguishable from the last — until the person filing abandons it or is no longer in a position to file. This archive documents this loop across twenty-five independently operating agencies producing identical template language. Statisticians call this probability: impossible."
            },
            {
              label: "The financial strangulation.",
              body: "$32.9 million in documented suppressed entitlements across thirty-five years. Not only a financial harm — forensically, the removal of the resource base required to sustain legal representation, maintain stable housing, protect physical health, and fund the documentation that would prevent the institutional narrative from becoming the only narrative."
            },
            {
              label: "The credibility destruction.",
              body: "The clinical label applied before the claim can be assessed on its merits. The Federal Court and the Administrative Appeals Tribunal produced contradictory findings on identical facts about the same individual. Neither body has corrected this. Neither has explained it. The contradiction is in the public record."
            },
          ].map(({ label, body }) => (
            <div key={label} className="flex gap-4">
              <div className="flex-shrink-0 w-1 rounded-full bg-amber-500/50 mt-1" />
              <div>
                <span className="text-amber-300 font-semibold">{label}</span>{" "}
                <span className="text-zinc-300 leading-loose">{body}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-5 text-zinc-300 leading-loose">
          <p>
            You have seen these patterns before. Not necessarily in this archive — in the news. In
            your family. In your community. In the story of the woman who reported domestic violence
            and was assessed by a contractor employed by the department the violence was reported to.
            In the story of the asylum seeker whose claim was reviewed by the agency that first
            rejected it. In the story of the disability recipient whose support was cut by a body
            citing assessments it had commissioned, criteria it had written, interpreted by staff
            it employed.
          </p>
        </div>

        <Pullquote>
          The loop is the point. The loop is always the point.
        </Pullquote>

        <Rule />

        {/* IV */}
        <RomanNumeral n="IV" title="The Silence That Damns" />
        <div className="space-y-5 text-zinc-300 leading-loose">
          <p>
            There is a principle in Anglo-Australian law known as the rule in <em>Jones v Dunkel.</em>{" "}
            It holds that when a party who could answer a specific, documented accusation — and who
            has access to the legal remedy of defamation if the accusation is false — chooses not
            to answer, a court may draw an adverse inference from that silence. The silence is not
            neutral. The silence is evidence.
          </p>
          <p>
            Approximately three hundred and fifty-four thousand people have downloaded this archive.
          </p>
          <p>
            Every document in it makes specific, named, sourced accusations against specific, named
            individuals and agencies, each of whom has had full access to the defamation courts of
            Australia, the United Kingdom, and the United States since the day each document
            was published.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 my-8 text-center">
          {[
            { num: "0", label: "Defamation suits filed" },
            { num: "0", label: "Corrections issued" },
            { num: "0", label: "Specific claims contested publicly" },
          ].map(({ num, label }) => (
            <div key={label} className="rounded-lg bg-white/[0.03] border border-white/8 p-5">
              <div className="text-3xl font-bold text-amber-400 mb-1">{num}</div>
              <div className="text-zinc-400 text-xs leading-tight">{label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-5 text-zinc-300 leading-loose">
          <p>
            This is not remarkable.
          </p>
          <p>
            This is <em>legally significant.</em>
          </p>
          <p>
            The silence, multiplied across three hundred and fifty-four thousand downloads and zero
            challenges, is not the silence of parties who have not seen the documents. It is the
            silence of parties who have read them and determined that the cost of a public answer
            exceeds the benefit of a public denial. In law, and in reason, that calculation is
            itself a form of admission.
          </p>
          <p>
            The archive does not need to win in a courtroom to have already won in the most durable
            court there is: the court of documented, unanswered, cryptographically preserved,
            permanently accessible public record.
          </p>
        </div>

        <Rule />

        {/* V */}
        <RomanNumeral n="V" title="Why This Win Belongs to Everyone" />
        <div className="space-y-5 text-zinc-300 leading-loose">
          <p>
            A win for Barran Dodger does not mean one man receives compensation — though he should
            receive it. It does not mean one set of agencies is held accountable — though they
            must be.
          </p>
          <p>
            A win for Barran Dodger means something more structural, more durable, and more
            important than either of those outcomes.
          </p>
        </div>

        <Pullquote>
          It means the methodology works.
        </Pullquote>

        <div className="space-y-5 text-zinc-300 leading-loose">
          <p>
            The methodology is: document everything, timestamp everything, publish everything,
            answer nothing with anger and everything with evidence, and wait for the institutional
            silence to complete the record.
          </p>
          <p>
            If this methodology works — if an individual, with no institutional backing, operating
            from within a system designed to produce his disappearance, can assemble two thousand
            and three hundred and one government-produced documents, have them independently
            corroborated across twenty-two separate analyses with two hundred and twenty-eight
            propositions assessed and zero contradicted, file them with the International Criminal
            Court, and watch three hundred and fifty-four thousand people find them on their own —
            then the same methodology is available to every person who is currently sitting
            across a desk from an institution that is writing something down about them.
          </p>

          <div className="rounded-xl border border-amber-500/20 bg-amber-950/10 p-6 space-y-3 my-6">
            {[
              "Keep every letter.",
              "Every template response is an exhibit.",
              "Every referral letter is a document of the loop.",
              "Every denial is a primary source.",
              "Every agency that closes a file without resolution is an entry in the pattern.",
            ].map((line) => (
              <div key={line} className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-amber-400 mt-2.5 flex-shrink-0" />
                <p className="text-amber-100/90 font-medium leading-relaxed">{line}</p>
              </div>
            ))}
          </div>

          <p>
            Because if one person, in one country, built this archive from within the system
            designed to prevent it — then the methodology, the discipline, the forensic patience
            to let the documents speak — is not unique to him. It is a proof of concept for every
            person who is currently experiencing what he experienced at an earlier stage, before
            the archive was large enough to speak for itself.
          </p>
          <p>
            What Barran Dodger has built is not a monument to one case. It is a{" "}
            <em>template</em> for the vindication of everyone the system has decided is too
            inconvenient to accommodate.
          </p>
        </div>

        <Rule />

        {/* VI */}
        <RomanNumeral n="VI" title="The Prophetic Accounting" />
        <div className="space-y-5 text-zinc-300 leading-loose">
          <p>
            Something happens when a system overreaches.
          </p>
          <p>
            It leaves a record.
          </p>
          <p>
            The greater the overreach, the more detailed the record. The more agencies that are
            deployed, the more letters are produced. The more formal processes that are invoked,
            the more timestamps exist. The more institutional authority that is brought to bear
            against one person, the more evidence there is that institutional authority was brought
            to bear — and when that evidence outlasts the authority, the record is complete.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
          {[
            { figure: "35 years", sub: "of documented persecution" },
            { figure: "25+ agencies", sub: "deployed against one person" },
            { figure: "14", sub: "hospitalisations, zero criminal charges" },
            { figure: "$32.9M", sub: "in suppressed entitlements" },
            { figure: "228/228", sub: "AI propositions corroborated" },
            { figure: "0", sub: "proven lies in the archive" },
          ].map(({ figure, sub }) => (
            <div key={sub} className="rounded-lg bg-white/[0.03] border border-white/8 p-4 text-center">
              <div className="text-xl font-bold text-white mb-0.5">{figure}</div>
              <div className="text-zinc-400 text-xs leading-tight">{sub}</div>
            </div>
          ))}
        </div>

        <Pullquote>
          There is a word for this kind of accounting. It has been used by every tradition in
          human history to describe the moment when what was done in darkness is brought into
          light — not by intervention from outside, but by the sheer weight of the documented record.
          The word is <em>reckoning.</em>
        </Pullquote>

        <div className="space-y-5 text-zinc-300 leading-loose">
          <p>
            It is not coming.
          </p>
          <p>
            It is here.
          </p>
          <p>
            The archive is the reckoning. Three hundred and fifty-four thousand downloads is the
            reckoning being witnessed. The ICC filing is the reckoning having a formal address.
            The Bitcoin blockchain is the reckoning having an expiry date of never.
          </p>
        </div>

        <Rule />

        {/* VII */}
        <RomanNumeral n="VII" title="To the World" />

        <div className="space-y-3 text-zinc-300 leading-loose">
          {[
            "If you have ever been told that what you know is not what happened — this archive is for you.",
            "If you have ever sat in a room where the people with the power to help you also had the power to decide whether you needed help — this archive is for you.",
            "If you have ever been psychiatrically labelled before your complaint was assessed — this archive is for you.",
            "If you have ever filed a complaint and received a letter that told you to file it with the agency the complaint was about — this archive is for you.",
            "If you are a person with a disability whose care has been rationed by bodies measuring your need against a cost model — this archive is for you.",
            "If you are a whistleblower who was told that what you saw was not what you saw — this archive is for you.",
            "If you are a refugee whose safety was assessed by the same system whose conduct made you unsafe — this archive is for you.",
            "If you are a parent who reported harm to the system and was referred to the harm — this archive is for you.",
            "If you have ever survived something that the institution responsible for it refused to document — this archive is for you.",
          ].map((line) => (
            <div key={line} className="flex items-start gap-3">
              <div className="w-1 h-1 rounded-full bg-amber-400 mt-2.5 flex-shrink-0" />
              <p className="leading-loose">{line}</p>
            </div>
          ))}
        </div>

        <div className="my-10 rounded-xl border border-amber-500/30 bg-amber-950/15 p-8">
          <p className="text-amber-100 text-lg leading-loose mb-4">
            You do not have to have two thousand and three hundred and one documents to be in this fight.
          </p>
          <p className="text-zinc-300 leading-loose mb-4">
            You have to know that one person built that archive from inside the system that was designed
            to prevent it — and that the archive now lives on a blockchain that no government can alter,
            has been downloaded three hundred and fifty-four thousand times without a single legal
            challenge, and sits in the hands of the International Criminal Court.
          </p>
          <p className="text-zinc-300 leading-loose">
            The archive proves that the system can be outpaced by the person the system decided to
            target — if that person is patient enough, disciplined enough, and honest enough to let
            the system write its own indictment.
          </p>
        </div>

        <Pullquote>
          Barran Dodger was patient enough. Barran Dodger was disciplined enough.
          Barran Dodger was honest enough. And the system wrote its own indictment.
        </Pullquote>

        <div className="space-y-5 text-zinc-300 leading-loose">
          <p>
            A win for him is a win for the discipline.
          </p>
          <p>
            A win for the discipline is a win for everyone who has ever chosen documentation over
            despair, evidence over emotion, and the slow accumulation of the record over the
            immediate satisfaction of being believed.
          </p>
        </div>

        <Pullquote>
          This archive says: you will be believed. Not today, necessarily. But permanently.
        </Pullquote>

        <Rule />

        {/* Colophon */}
        <div className="text-center py-8">
          <p className="text-zinc-500 text-sm italic leading-relaxed max-w-lg mx-auto">
            This essay was written as an act of independent witness by an impartial author examining
            the public record. No fact stated above is contested in any public forum by any named party,
            despite approximately 378,571 downloads of the underlying archive. The silence is the
            record completing itself.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
            <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs">April 8, 2026</Badge>
            <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs">2,301 Documents</Badge>
            <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs">ICC Article 7</Badge>
            <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs">Bitcoin Blockchain Verified</Badge>
            <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs">378,571 Downloads</Badge>
            <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs">Zero Defamation Suits</Badge>
          </div>
        </div>
      </div>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
