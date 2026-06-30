import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { queryClient } from "@/lib/queryClient";
import { apiRequest } from "@/lib/queryClient";
import { ExternalLink, Download, Lock, Hash, AlertTriangle, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import coverImg from "@/assets/images/cover-the-rats-will-come.png";

const DOWNLOAD_SLUG = "the-rats-will-come";
const BLOCKCHAIN_HASH = "3a507d741f6af28bd7653a256a8a5262e4641c7dd45ab645617a000b5afa11dd";
const BLOCKCHAIN_DATE = "6 May 2026";

export default function TheRatsWillCome() {
  const [refsOpen, setRefsOpen] = useState(false);

  const { data: downloadData } = useQuery<{ count: number }>({
    queryKey: ["/api/downloads", DOWNLOAD_SLUG],
    queryFn: () =>
      fetch(`/api/downloads/${encodeURIComponent(DOWNLOAD_SLUG)}`).then((r) => r.json()),
  });

  const incrementMutation = useMutation({
    mutationFn: () =>
      apiRequest("POST", `/api/downloads/${encodeURIComponent(DOWNLOAD_SLUG)}/increment`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/downloads", DOWNLOAD_SLUG] });
    },
  });

  const downloadCount = downloadData?.count ?? 0;

  return (
    <>
      <SEO
        title="The Rats Will Come — Essay | Dr. Richard William McLean AKA Barran Dodger"
        description="A forensic-psychological essay on the documented mechanism of betrayal in corrupt structures, the defection cascade across history, and a named prophetic prediction of institutional collapse. Written by Dr. Richard William McLean (Barran Dodger) ahead of Wyong Local Court, 14 May 2026."
        keywords="the rats will come, institutional accountability, defection cascade, psychology of betrayal, Milgram, Festinger, Zimbardo, Axelrod, Braithwaite, Wyong Local Court, Barran Dodger, AblePoint, Sukhi Tear, NSW Trustee, Tony Ridley, court date 14 May 2026"
      />
      <Navigation />
      <div className="min-h-screen" style={{ background: "#000000" }}>

        {/* ── HERO ── */}
        <div className="relative w-full overflow-hidden" style={{ maxHeight: "85vh" }}>
          <img
            src={coverImg}
            alt="The Rats Will Come — Essay — Dr. Richard William McLean AKA Barran Dodger"
            className="w-full object-cover"
            style={{ maxHeight: "85vh", objectPosition: "center top" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.55) 55%, #000 100%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 text-center">
            <p className="text-zinc-500 text-[9px] font-mono uppercase tracking-[0.4em] mb-3">
              Essay · Dr. Richard William McLean · ABN 78 833 496 164 · Wyong Local Court — 14 May 2026
            </p>
            <h1
              className="font-serif font-black text-white leading-none mb-3"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", textShadow: "0 0 80px rgba(220,38,38,0.35)" }}
            >
              The Rats Will Come
            </h1>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
              On the psychology of betrayal, the documented mechanism of defection, and a prophetic prediction of institutional collapse — with named individuals.
            </p>
          </div>
        </div>

        {/* ── DOWNLOAD / BLOCKCHAIN STRIP ── */}
        <div className="border-b border-t" style={{ background: "#0a0000", borderColor: "#dc262622" }}>
          <div className="max-w-3xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <a
                href={coverImg}
                download="the-rats-will-come-dr-richard-mclean.png"
                onClick={() => incrementMutation.mutate()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-black text-sm transition-all hover:opacity-90"
                style={{ background: "#dc2626", color: "#fff" }}
                data-testid="btn-download-top"
              >
                <Download className="h-4 w-4" />
                Download Cover
              </a>
              <div className="text-center">
                <p className="font-mono font-black text-red-400 text-lg leading-none">
                  {downloadCount > 0 ? downloadCount.toLocaleString() : "—"}
                </p>
                <p className="text-zinc-700 text-[10px] uppercase tracking-widest">downloads</p>
              </div>
            </div>
            <div
              className="flex items-center gap-3 rounded-xl border px-4 py-2.5"
              style={{ borderColor: "#16a34a33", background: "#001a00" }}
            >
              <Lock className="h-4 w-4 shrink-0 text-green-400" />
              <div>
                <p className="text-green-400 text-[9px] font-mono uppercase tracking-widest">
                  Bitcoin Blockchain · Sealed {BLOCKCHAIN_DATE}
                </p>
                <p className="text-zinc-500 font-mono text-[9px] break-all">
                  {BLOCKCHAIN_HASH.slice(0, 32)}…
                </p>
              </div>
              <a
                href={`https://opentimestamps.org/timestamp/${BLOCKCHAIN_HASH}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-green-600 hover:text-green-400 transition-colors"
                data-testid="link-blockchain-verify"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ── COURT WARNING ── */}
        <div className="border-b" style={{ background: "#1a0000", borderColor: "#dc262633" }}>
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
            <AlertTriangle className="h-4 w-4 text-red-500 shrink-0" />
            <p className="text-red-400 text-xs leading-relaxed">
              <span className="font-black">
                Wyong Local Court · 14 May 2026 · Receipt I88267509 · Troy (Tory) Kilbourne
              </span>{" "}
              — This essay and its prophetic prediction were written and sealed to the Bitcoin
              blockchain prior to the commencement of proceedings. All factual claims are
              primary-source documented at{" "}
              <a
                href="/verdict-before-the-court"
                className="underline hover:text-red-300 transition-colors"
              >
                barrandodger.com/verdict-before-the-court
              </a>
              .
            </p>
          </div>
        </div>

        {/* ── ESSAY BODY ── */}
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-14">

          {/* Opening pull quote */}
          <blockquote className="border-l-4 pl-6 py-2" style={{ borderColor: "#dc2626" }}>
            <p className="font-serif text-xl md:text-2xl text-zinc-200 leading-relaxed italic">
              "You only flee a sinking ship. The fact that people are beginning to move is not
              a problem for the archive. It is a confirmation of the archive."
            </p>
            <p className="text-zinc-600 text-xs mt-3 font-mono">
              — Dr. Richard William McLean, Barran Dodger. May 2026.
            </p>
          </blockquote>

          {/* AI Statement of Significance */}
          <div
            className="rounded-2xl border-l-4 px-6 py-5 space-y-3"
            style={{ borderLeftColor: "#dc2626", background: "#0a0000" }}
          >
            <p className="text-red-500/60 text-[9px] font-mono uppercase tracking-[0.3em]">
              Impartial AI Statement of Significance
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm">
              "The Rats Will Come" is a forensic-psychological essay that applies the documented
              academic literature on betrayal, defection cascades, and institutional collapse
              directly to the named individuals and institutions in the barrandodger.com archive.
              Drawing on Festinger (1956), Milgram (1974), Axelrod (1984), Zimbardo (2007),
              Braithwaite (1989), and Arendt (1963), the essay argues that the observable behavioural
              shifts among individuals connected to the documented events are not random — they are
              a predictable and documented psychological mechanism. The essay is significant for
              three reasons: (1) It provides academic grounding for the claim that institutional
              complicity collapses in predictable sequence once a credible accountability mechanism
              appears; (2) It applies that framework individually to named persons — Sukhi Tear,
              the AblePoint Australia CEO, Tony Ridley, Troy (Tory) Kilbourne, NSW Trustee officials,
              and Bill Shorten's staff — with specific predictions; and (3) It includes a formal
              dated prophetic prediction, sealed to the Bitcoin blockchain before proceedings,
              against which subsequent events can be measured. This document is a primary-source
              record of Dr. McLean's contemporaneous analysis, dated 6 May 2026.
            </p>
          </div>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION I */}
          {/* ═══════════════════════════════════════ */}
          <Section heading="I. They Don't Come Early">
            <P>Let me tell you something about rats.</P>
            <P>
              They don't come when the building is strong. They don't come when the walls are thick
              and the foundations are laid deep and the institution is confident in its own
              invincibility. They don't come when the power is concentrated and the people inside it
              are sure of themselves and the whistleblower is still locked in a psychiatric ward and
              the archive is still being built in silence.
            </P>
            <Em>They come when the building starts sinking.</Em>
            <P>
              That's the first thing you need to understand about what is happening now — as the
              Wyong Local Court date approaches, as the $112M forensic economic claim sits on the
              record, as the ICC The Hague submission is lodged, as 484,000+ downloads have gone out
              without a single formal refutation from any named institution across 35 years. The
              building is in the water. And the rats — the people who watched, who knew, who stayed
              silent, who were paid to watch and report, who carried messages between parties, who
              made phone calls they thought were private, who sent emails they assumed would be
              deleted — they are starting to move.
            </P>
            <P>
              You can feel it before you can see it. A slight change in tone from someone who used
              to be certain. A message from a person you haven't heard from in years. A solicitor's
              letter that's suddenly more careful than the last one. An institution that discovers,
              mid-2026, that its processes contain 'significant opportunities for improvement.' People
              distancing themselves from the names they were once proud to be associated with.
            </P>
            <Em>The rats will come. They are already coming.</Em>
          </Section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION II */}
          {/* ═══════════════════════════════════════ */}
          <Section heading="II. The Anatomy of a Rat">
            <P>A rat, in this context, is not a villain. I want to be precise about this.</P>
            <P>
              A rat is someone who made a calculation at the time — that the institution was safe,
              that the whistleblower would not survive the system, that silence was the rational
              choice — and who now needs to revise that calculation because the evidence has changed.
              The evidence has changed dramatically. The building is no longer standing where they
              thought it was.
            </P>
            <P>
              Some rats are straightforward: people who witnessed events and said nothing because
              they feared institutional retaliation, because they needed their jobs, because they had
              families to protect, because the NDIS system was their livelihood and Sukhi Tear was
              their colleague and AblePoint Australia was a platform they depended on. I understand
              that calculation. I lived inside the system those calculations sustained.
            </P>
            <P>
              Some rats are more complex: people who actively participated in what the archive
              documents, who made phone calls, who attended meetings, who signed documents, who made
              referrals, who were present when things happened that are now in a blockchain-sealed
              evidence file — and who are now calculating whether cooperation is better than exposure.
              For these people, the archive is a mirror. Every document in it is a reflection of
              something they were part of. And they know that the mirror exists, and that it has been
              seen by 484,000 people, and that it is sealed to the Bitcoin blockchain at hash{" "}
              <span className="font-mono text-zinc-500 text-xs">{BLOCKCHAIN_HASH}</span>.
            </P>
            <P>
              Some rats are opportunists: people who had no direct role in what happened to me but
              who sense, correctly, that institutional accountability creates openings — for
              whistleblowing that serves their career, for evidence that advances their own
              interests, for proximity to a story that is now clearly, undeniably, moving toward a
              public record. These people are not enemies. They are the weather.
            </P>
            <P>
              And some rats are the real thing: people who know things that are not yet in the
              archive. People who were in rooms I wasn't in. People who were on calls that weren't
              recorded. People who were present at decisions that left no paperwork. These people
              are the ones I am most interested in. These are the people who turn a 2,304-exhibit
              archive into a 2,500-exhibit archive. These are the people who close the last gaps.
            </P>
          </Section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION III */}
          {/* ═══════════════════════════════════════ */}
          <Section heading="III. The Ship That Was Never Supposed to Sink">
            <P>The NSW Trustee and Public Guardian was not supposed to become a liability.</P>
            <P>
              It was supposed to be an institution of last resort — the government entity appointed
              to protect the financial interests of people deemed unable to protect their own. In my
              case, it became the documented architect of $18M to $32.9M in losses across years of
              guardianship, now part of a $112M forensic economic claim. It was not supposed to be
              here. It was supposed to have managed this quietly, kept it administrative, kept it
              internal, kept the 'delusional' label on the file and the file sealed.
            </P>
            <Em>AblePoint Australia was not supposed to become a public record.</Em>
            <P>
              It was supposed to be an NDIS provider with a CEO who handled difficult situations
              privately, through internal process, through Laura and whatever 'days or some weeks'
              it took to make an active death threat against a client disappear into organisational
              procedure. The recording was not supposed to exist. The published transcript was not
              supposed to be at barrandodger.com. The 484,000 people who have read it were not
              supposed to know her voice.
            </P>
            <Em>Sukhi Tear was not supposed to be a name anyone outside the NDIS system knew.</Em>
            <P>
              She was not supposed to be associated with five missing person registrations, with
              police file PD77027, with three states, with a pattern of contact that the documentary
              record places her inside regardless of what she told the people she told it to. The
              dossier was not supposed to exist. The formal removal was not supposed to be published.
              The ICC notification was not supposed to include her name.
            </P>
            <P>Tony Ridley was not supposed to speak on a recording.</P>
            <P>Bill Shorten's staff were not supposed to produce a document strategy.</P>
            <P>Tory Kilbourne was not supposed to be named in a court filing.</P>
            <P>
              None of these ships were supposed to sink. They were institutional and
              government-connected and procedurally protected and the person they were deployed
              against was a disabled LGBTQ+ individual with 14 involuntary psychiatric
              hospitalisations on his medical record and no money and no institutional backing and
              no media platform.
            </P>
            <Em>And yet.</Em>
          </Section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION IV */}
          {/* ═══════════════════════════════════════ */}
          <Section heading="IV. What the Archive Did">
            <P>
              The archive did not sink the ships. I want to be clear about this because the
              distinction matters legally, ethically, and historically.
            </P>
            <Em>The archive documented what the ships were already doing to themselves.</Em>
            <P>
              Every exhibit in the 2,304-document blockchain-sealed archive is a primary-source
              record — produced by the institutions, not by me. Every clinical report was written by
              a clinician, not by me. Every financial decision was made by the NSW Trustee, not by
              me. Every call was made by an AblePoint CEO or a government operative or an NDIS
              provider, not by me. I documented. I preserved. I timestamped. I published. I am not
              the one who sank the ships. The ships sank themselves, and I was the one standing on
              the shore with a camera.
            </P>
            <P>
              The blockchain hash does not contain my opinions. It contains their documents.
            </P>
            <P>
              This is why the rats come. Not because I threatened them. Not because I called them
              out by name and dared them to respond. Not because I have institutional power or media
              connections or legal resources that make me dangerous in a conventional way. They come
              because the camera has been running for 35 years and the footage is now public and
              permanent and there is no version of the future where the footage does not exist.
            </P>
            <P>The rats come because truth aged into revelation exactly as it was always going to.</P>
          </Section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION V */}
          {/* ═══════════════════════════════════════ */}
          <Section heading="V. The Silence-Breakers and the Story-Changers">
            <P>
              There is an important distinction I need to draw, and I draw it not from anger but
              from precision.
            </P>
            <P>
              The silence-breakers are people who stayed quiet for understandable reasons and who
              now, as the accountability moment arrives, are prepared to add their testimony to the
              record. I welcome them. I have no interest in punishing people who were afraid of a
              system that was genuinely frightening. The NDIS ecosystem is enormous and
              interconnected and the people inside it are financially dependent on relationships
              that can be ended by a single phone call from the right person. I know this. The
              archive documents this. The silence-breakers are not rats in any pejorative sense —
              they are people doing what humans do: waiting until safety is possible before telling
              the truth.
            </P>
            <Em>The story-changers are different.</Em>
            <P>
              The story-changers are the people who are already beginning to reframe their conduct —
              not by adding new truth to the record but by revising the history of their own
              involvement in what the record documents. These are the people who will say they raised
              concerns internally that were ignored. Who will say they were following instructions.
              Who will say they didn't have the full picture. Who will say they tried to help but the
              system wouldn't let them. Who will say they always had doubts.
            </P>
            <P>To these people I say, gently but clearly: the blockchain does not care.</P>
            <P>
              The blockchain does not care what you say now about what you did then. The blockchain
              has the contemporaneous record — the emails, the call recordings, the clinical notes,
              the financial decisions, the referrals, the meeting minutes. The blockchain sealed them
              on 6 May 2026, before your story changed. Anyone can verify it. Anyone can see what
              the documents say and compare them to what you now say the documents mean.
            </P>
            <P>
              The story-changers are not rats. They are something more elaborate and more easily
              identified by their own conduct. The archive is their mirror. They will find, as they
              look into it, that it does not change to suit the angle.
            </P>
          </Section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION VI — PSYCHOLOGY (NEW) */}
          {/* ═══════════════════════════════════════ */}
          <Section heading="VI. The Psychology of Betrayal — What the Literature Demonstrates">
            <P>
              The defection of complicit individuals from corrupt structures is not a sociological
              accident. It is a documented psychological mechanism with consistent preconditions,
              a predictable sequence, and a measurable threshold. The academic literature on this
              subject is extensive and directly applicable to the situation documented in this
              archive.
            </P>

            <SubHeading>Cognitive Dissonance and the Collapse of Belief</SubHeading>
            <P>
              Leon Festinger and colleagues, in their landmark 1956 study{" "}
              <em>When Prophecy Fails</em>, documented what they called cognitive dissonance — the
              psychological discomfort experienced when a person holds two contradictory beliefs
              simultaneously (Festinger et al., 1956). They found that when a committed belief is
              contradicted by irrefutable evidence, one of two things happens: the person intensifies
              their original belief — what Festinger called belief perseverance under disconfirmation
              — or they experience a collapse of the belief system and begin the process of
              realignment with reality.
            </P>
            <P>
              The collapse, Festinger documented, almost always happens the moment{" "}
              <em>social support</em> for the original belief evaporates. Not when the evidence
              changes. When the social consensus changes. This is why the rats don't come alone.
              They come when others begin to move. The first defection makes the next one
              psychologically sustainable. The archive is the first visible defection in the public
              domain. Every person who downloads it makes the next defection safer.
            </P>

            <SubHeading>The Compliance Threshold — Milgram</SubHeading>
            <P>
              Stanley Milgram's obedience research at Yale University identified what is now known
              as the compliance threshold — the point at which individuals who had, for institutional
              and social reasons, complied with an authority structure, defected from it (Milgram,
              1974). Milgram found that 65% of subjects continued to administer what they believed
              were dangerous electric shocks simply because an authority figure instructed them to.
              What his research also found — less frequently cited — is that the moment one
              participant visibly defected, others followed rapidly.
            </P>
            <P>
              Compliance was not stable. It was contingent on perceived unanimity. The moment the
              unanimity cracked, the compliance structure became brittle. The compliance structure
              sustaining silence about the events documented in this archive is experiencing exactly
              that crack. The 484,000 downloads are a measure of its size.
            </P>

            <SubHeading>Defection Cascades — Axelrod</SubHeading>
            <P>
              Robert Axelrod's 1984 analysis of cooperation and defection in repeated games
              demonstrated that in situations where individuals are engaged in ongoing relationships
              and the future casts a long shadow, cooperation tends to be the stable strategy —
              until the structure of the game changes (Axelrod, 1984). When the structure changes —
              when a proceeding is scheduled, when an archive is published, when a hash is sealed to
              the Bitcoin blockchain — the calculation changes.
            </P>
            <P>
              Axelrod's key finding is crucial here: the most effective long-term strategy is
              cooperative until the cooperation structure becomes untenable. Once the accountability
              mechanism appears, the institutions that were cooperative with each other in suppressing
              the testimony documented in this archive will face a tit-for-tat dynamic. They will
              compete to be the first to demonstrate they were the least culpable.
            </P>

            <SubHeading>The Lucifer Effect in Reverse — Zimbardo</SubHeading>
            <P>
              Philip Zimbardo's study of the transition from ordinary conduct to systemic wrongdoing
              documented what he called situational forces — the way institutional environments
              create conditions in which ordinary people perform extraordinary harm without
              experiencing themselves as wrongdoers (Zimbardo, 2007). His concept of the Lucifer
              Effect is relevant here not for its explanation of how wrongdoing happens but for what
              it predicts about when it stops.
            </P>
            <P>
              Zimbardo documented that participants in institutional wrongdoing experience a
              re-individuation process — a return to personal moral reasoning — when the institutional
              context is disrupted. An ICC submission disrupts the institutional context. A
              blockchain-sealed archive disrupts it. A court date disrupts it. When the institution
              can no longer provide cover, the Lucifer Effect runs in reverse. People begin to see
              themselves as they are, not as the institution defined them.
            </P>

            <SubHeading>Shame as Mechanism — Braithwaite</SubHeading>
            <P>
              John Braithwaite's work on crime, shame and reintegration established that the most
              powerful trigger for behavioural change in wrongdoing is not punishment but shame —
              specifically, the experience of being seen by people whose opinion matters (Braithwaite,
              1989). The archive creates exactly this condition. 484,000 people have seen the
              documents. The names are in the documents. They are searchable, sharable, downloadable,
              printable, and sealed to the Bitcoin blockchain.
            </P>
            <P>
              For the people named in the archive, this is not primarily legal jeopardy. It is social
              exposure. It is the condition Braithwaite identified as the trigger for the
              psychological reorganisation that precedes cooperation with accountability processes.
            </P>

            <SubHeading>The Banality of Evil and Its Reversal — Arendt</SubHeading>
            <P>
              Hannah Arendt, documenting the Nuremberg trials and the Jerusalem prosecution of Adolf
              Eichmann, observed what she famously called "the banality of evil" — the capacity of
              ordinary bureaucratic actors to participate in systematic harm through the performance
              of institutional roles, without ever experiencing themselves as morally responsible
              (Arendt, 1963). Her less-discussed finding, equally important, was that the collapse
              of the institutional justification reliably produced a collapse of the individual's
              performed innocence.
            </P>
            <P>
              The moment the structure fell at Nuremberg, every participant scrambled to reframe
              their individual role. <em>"I was following instructions." "I didn't have the full
              picture." "I raised concerns that were ignored." "I tried to help but the system
              wouldn't let me."</em> The phrases are almost identical across historical cases. They
              are also the phrases appearing now in contexts adjacent to the events documented in
              this archive. The archive documents the institutional structure. Its publication
              initiates the collapse sequence Arendt observed at Nuremberg.
            </P>

            <SubHeading>The Commitment-Consistency Trap — Cialdini</SubHeading>
            <P>
              Robert Cialdini's foundational work on influence documented the commitment-consistency
              principle — the psychological drive to behave consistently with previously stated
              positions, even when those positions become increasingly costly to maintain (Cialdini,
              2007). This principle has a critical corollary: the longer a false position is
              maintained, the larger the psychological cost of abandoning it, and the more extreme
              the eventual adjustment when it comes.
            </P>
            <P>
              The individuals named in this archive who have maintained public positions contradicting
              the documentary record are experiencing the compounding cost of commitment-consistency.
              Each day the blockchain hash exists and the archive downloads increase, the cost of
              maintaining the position grows. Cialdini predicts that when the commitment finally
              breaks, it breaks dramatically. The gap between the maintained position and the
              contemporaneous record becomes the full measure of the adjustment required.
            </P>
          </Section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION VII — HISTORY (NEW) */}
          {/* ═══════════════════════════════════════ */}
          <Section heading="VII. The Defection Cascade — Documented Across History">
            <P>
              The pattern repeats with such consistency across history and culture that it
              constitutes what might be described as a sociological law: when a corrupt structure
              reaches the accountability threshold, its members defect in cascading sequence,
              each defection making the next one safer and more probable.
            </P>

            <HistoricalCase label="Watergate · United States · 1972–1974">
              The Nixon White House operated as a closed institutional system, internally reinforced,
              with a consistent narrative maintained across participants for eighteen months after
              the Watergate break-in. The wall broke not with the evidence — the evidence existed —
              but when John Dean made the calculation that the institution could no longer protect
              him, and that cooperation with the investigation was a better survival strategy than
              continued silence (Woodward & Bernstein, 1974). Within months of Dean's testimony,
              the defection cascade was complete. Every senior official produced a competing
              narrative about their own relative innocence. The institution that had seemed
              impenetrable dissolved into competing individual claims of minimal culpability.
            </HistoricalCase>

            <HistoricalCase label="Enron · United States · 2001–2004">
              Sherron Watkins, a vice president inside Enron, sent a memorandum to CEO Kenneth Lay
              in August 2001 warning that the company "might implode in a wave of accounting scandals"
              — fourteen months before the collapse occurred (McLean & Elkind, 2003). The rats were
              moving internally before the external collapse was visible. When the wall fell, it fell
              completely. Sixteen executives were convicted. The compliance structure had held for
              years through Festinger's belief-perseverance mechanism — until the moment the social
              consensus inside the institution shifted and the defection cascade became irreversible.
            </HistoricalCase>

            <HistoricalCase label="Catholic Church Sexual Abuse · Global · 2002 Threshold">
              The institutional wall in the Catholic Church had been maintained across dioceses,
              across countries, across decades. The Spotlight team at the Boston Globe broke the
              visible wall in January 2002. Within two years, 10,667 abuse victims had come forward
              in the United States alone (John Jay College Research Team, 2004). The defection
              cascade was not caused by the initial reporting. It was enabled by it. People who had
              carried information for years found, once the wall was visibly breached, that they
              could speak. Milgram's compliance threshold had been crossed. The unanimity of
              institutional silence was no longer available as cover.
            </HistoricalCase>

            <HistoricalCase label="La Cosa Nostra · United States · Omertà Collapse · 1992">
              For decades, omertà — the code of silence — was treated by organised crime scholars
              as a near-perfect social technology for institutional self-protection. Salvatore
              "Sammy the Bull" Gravano's decision to testify against John Gotti in 1992 produced
              the most detailed insider account of organised crime ever given to American federal
              prosecutors. Gravano was not uniquely morally motivated. His defection was enabled by
              the existence of a credible prosecutorial structure with the capacity to protect and
              reward cooperation. Once he moved, others followed. Omertà did not fail because of
              weakness in the code. It failed because a credible alternative structure appeared.
              This is Axelrod's (1984) defection cascade in its purest form.
            </HistoricalCase>

            <HistoricalCase label="Nuremberg · Germany · 1945–1946">
              The most comprehensive historical documentation of Arendt's analysis. Every senior
              official of the Third Reich, when the institutional structure fell and personal
              accountability became the operative frame, produced an individual reframing of their
              role. Hermann Göring maintained his position defiantly; Rudolf Hess claimed amnesia;
              Albert Speer claimed ignorance; Wilhelm Keitel claimed orders. The structure of the
              defences was identical across defendants who had operated in completely different
              institutional contexts. This is not coincidence. It is the Arendt mechanism operating
              at scale: when the institutional cover dissolves, the individual scrambles to the
              available defensive narrative, and the available narrative is always some version of:
              I was inside a system and the system, not I, is responsible.
            </HistoricalCase>

            <HistoricalCase label="Robodebt · Australia · 2023 Royal Commission">
              The most directly relevant Australian precedent. For seven years, the Commonwealth's
              unlawful automated debt recovery scheme was defended by institutional actors at every
              level — ministers, public servants, legal advisers. The Royal Commission found that
              senior officials had actively concealed the scheme's legal vulnerabilities from
              decision-makers and from the public (Holmes, 2023). Individuals who had known it was
              unlawful and said so internally did not go public before the Commission was announced.
              They came forward within the Commission's protection. This is the Braithwaite (1989)
              mechanism: the existence of a credible accountability structure with protective capacity
              transforms the psychological calculus from silence as safety to testimony as safety.
              The $112M forensic economic claim against entities documented in this archive is that
              credible accountability structure.
            </HistoricalCase>
          </Section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION VIII — NAMED TRAJECTORIES (NEW) */}
          {/* ═══════════════════════════════════════ */}
          <Section heading="VIII. Applied to This Archive — Named Trajectories">
            <P>
              I want to apply this literature directly to the individuals documented in the
              2,304-exhibit archive at barrandodger.com. I do so with the precision that the
              academic framework supports and with the clarity that a dated, blockchain-sealed
              record requires.
            </P>

            <NamedTrajectory
              name="Sukhi Tear"
              evidenceHref="/sukhi-tear"
              evidenceLabel="Formal Dossier — barrandodger.com/sukhi-tear"
            >
              The primary-source record associates Sukhi Tear with five missing person registrations,
              police file PD77027, three states, and a documented pattern of proximity to Dr. McLean
              spanning years. Her name appears in the ICC The Hague submission. The dossier is
              public. The formal removal is published. Through Braithwaite's (1989) framework, the
              archive has created maximum social exposure of the documented pattern. The defection
              dynamic Braithwaite predicts for this level of exposure is one of two responses:
              intensification of denial — what Festinger calls belief perseverance under
              disconfirmation — or a reorganisation event. The probability of the former decreases
              sharply as the proceeding date approaches and the institutional cover that sustained
              it thins. The Zimbardo re-individuation process — the return to personal moral
              reasoning when institutional context dissolves — is directly applicable. The
              institutional context that defined her participation as acceptable is dissolving in
              real time, at 484,000 downloads per reading.
            </NamedTrajectory>

            <NamedTrajectory
              name="AblePoint Australia CEO"
              evidenceHref="/ablecare-transcript"
              evidenceLabel="Recorded Call Transcript — barrandodger.com/ablecare-transcript"
            >
              The CEO's voice is in the recording. The words are in the transcript. The transcript
              is downloadable. 484,000 people have had access to it. The words "Laura" and "days or
              some weeks" in the context of a documented death threat against a client are now in a
              public record that cannot be withdrawn. Through Cialdini's (2007)
              commitment-consistency framework, this individual is in an escalating trap: the longer
              the denial of the recording's significance is maintained, the larger the cost of any
              eventual adjustment. The Zimbardo re-individuation mechanism — the return to personal
              moral reasoning when institutional cover dissolves — applies directly. The NDIS
              institutional structure that defined the CEO's conduct as procedurally manageable is
              not intact. The recording is. This individual is approaching the compliance threshold
              that Milgram identified as the point at which maintained positions become
              psychologically unsustainable.
            </NamedTrajectory>

            <NamedTrajectory
              name="Tony Ridley"
              evidenceHref="/tony-ridley-recorded-confession"
              evidenceLabel="Recorded Confession — barrandodger.com/tony-ridley-recorded-confession"
            >
              Unlike the AblePoint CEO, Tony Ridley's position is in the most advanced stage of the
              defection dynamic. A recorded confession, published and primary-source verified,
              creates a very narrow range of subsequent responses. Through Milgram's (1974)
              compliance threshold framework, the institutional permission structure that enabled
              his participation has been removed by publication. The recording exists. It is public.
              It is permanent. Axelrod's game-theory analysis of defection cascades is directly
              applicable: when one participant's position is already documented in a public record,
              the rational strategy for that individual shifts from protection of the structure to
              minimisation of individual exposure. The most rational strategy available to him now
              is one that positions his conduct as the least harmful among the documented actors.
              Whether or not he takes it, the record establishes the baseline against which any
              subsequent positioning is measured.
            </NamedTrajectory>

            <NamedTrajectory
              name="Troy (Tory) Kilbourne"
              evidenceHref="/verdict-before-the-court"
              evidenceLabel="Court Record — Wyong Local Court · Receipt I88267509"
            >
              Named in court filing. Wyong Local Court. 14 May 2026. Receipt I88267509. The formal
              legal proceeding creates the condition Axelrod (1984) identified as the defection
              trigger in repeated game theory: a structure in which the future casts a long shadow
              and the calculation of individual outcomes becomes visible to all participants
              simultaneously. A court date does not only create legal jeopardy. It creates a public
              moment at which every participant's calculation becomes legible to every other
              participant. Kilbourne's position relative to the documented evidence is a matter of
              public record. The proceeding on 14 May 2026 is the accountability mechanism that
              Braithwaite (1989) identifies as the trigger for psychological reorganisation in
              individuals connected to documented wrongdoing. What happens next is a predictable
              application of the game-theoretic framework to a documented factual record.
            </NamedTrajectory>

            <NamedTrajectory
              name="NSW Trustee and Public Guardian Officials"
              evidenceHref="/nsw-trustee-financial-management"
              evidenceLabel="Financial Management Record — $18M–$32.9M Documented Losses"
            >
              The financial decisions documented in the archive — $18M to $32.9M in losses across
              years of financial management, forming part of a $112M forensic economic claim — were
              made by named individuals in named roles following institutional processes that left
              paper trails. The paper trails are in the archive. Through Arendt's (1963) banality of
              evil framework, these are paradigmatic ordinary bureaucratic actors whose institutional
              cover is dissolving. The Robodebt Royal Commission precedent (Holmes, 2023) is directly
              applicable: when a credible public accountability mechanism exists, the institutional
              wall does not hold. The individuals who made specific financial decisions affecting Dr.
              McLean's documented losses are identifiable from the documents. The gap between the
              institutional justification for those decisions and the documented outcomes is in the
              primary-source record. That gap does not close itself. It waits for a proceeding.
            </NamedTrajectory>

            <NamedTrajectory
              name="Bill Shorten's Staff"
              evidenceHref="/administrative-annihilation"
              evidenceLabel="Document Strategy — Chapter 12, Administrative Annihilation"
            >
              The document strategy is in the archive. It was produced in response to the testimony
              of Dr. Richard William McLean. Its production demonstrates that the testimony was
              assessed at the political level, taken seriously enough to warrant a strategic response,
              and that the response was to manage information rather than to investigate its content.
              Through Sutherland's (1949) white collar crime framework, this is the paradigmatic
              institutional response to organisational misconduct allegations: the management of
              information flow rather than correction of the underlying conduct. The people who
              produced the strategy are identifiable. The gap between their public-facing response
              to Dr. McLean's testimony and their internal strategic response is in the
              primary-source record. That gap does not close itself. It compounds. It is in a
              blockchain-sealed archive that has been downloaded 484,000 times. The document
              strategy has become part of the evidence it was designed to manage.
            </NamedTrajectory>
          </Section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION IX (was VI) */}
          {/* ═══════════════════════════════════════ */}
          <Section heading="IX. What the Court Date Is Not">
            <P>Wyong Local Court. 14 May 2026. Receipt I88267509. Troy (Tory) Kilbourne.</P>
            <P>I want to say something about what this court date is not.</P>
            <P>
              It is not a spectacle. It is not revenge. It is not a performance designed to produce
              a particular emotional moment in anyone watching. It is not the 'payback' in a
              cinematic sense — the moment where everything is resolved and the credits roll and the
              institutions collapse and the people who caused harm are publicly shamed in real time.
            </P>
            <P>
              The court date is a legal proceeding. It is one node in a network of accountability
              mechanisms that includes the ICC The Hague submission, the UNHCR Geneva notification,
              the $112M forensic economic claim, the Australian Human Rights Commission filing, the
              60+ institutional notifications dispatched simultaneously. The court date is
              significant because it is the first physical, scheduled, documented moment at which
              named individuals and their institutional affiliations must be present in a public
              proceeding alongside the evidence.
            </P>
            <P>
              The rats come before court dates. Not because of the court date itself but because of
              what the court date represents: the end of the window in which the story could still
              be managed privately. Once the proceeding is on the public record, the story is public.
              Once the evidence is tendered, the evidence is public. Once the names are spoken in
              open court, the names are public in a way that no archive, however blockchain-sealed,
              can precisely replicate.
            </P>
            <Em>
              The court date is not where I win or lose. The court date is where the building's
              position in the water becomes visible to people who haven't been watching.
            </Em>
          </Section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION X (was VII) */}
          {/* ═══════════════════════════════════════ */}
          <Section heading="X. To the Rats, Directly">
            <P>
              If you are reading this and you recognise yourself in what I've written — if you were
              present at events documented in this archive, if you have information that is not yet
              part of the public record, if you made calculations in the past that you are now
              revising — I want to speak to you directly.
            </P>
            <Em>I have no interest in you. I have interest in the truth.</Em>
            <P>
              These are different things. My interest in the truth does not require your destruction.
              It does not require your exposure for its own sake. It does not require a public
              reckoning that costs you more than the situation already costs you. What the truth
              requires is completeness. The archive is 2,304 exhibits. It is comprehensive but it
              is not omniscient. There are gaps. There are events that happened in rooms without
              recording equipment. There are decisions that were made verbally and never documented.
              There are things that people who were present know that no document captures.
            </P>
            <P>
              If what you know closes a gap in the factual record — if what you know explains a
              decision, confirms a timeline, places a named person at a documented event — then what
              you know belongs in the archive. Not because I am powerful and you should fear me.
              Because the truth belongs in the record, and you know something true.
            </P>
            <P>
              The court date creates a legal context in which the addition of testimony to the record
              carries consequences and protections that exist outside that context. I am not a lawyer
              and I am not giving legal advice. I am saying that the window in which information can
              be added to the record without the complications of a live proceeding is finite, and
              it is closing.
            </P>
            <P>
              The rats will come. Some of them will bring something true. For those ones: I am not
              your enemy. I am the person who has been building the place where true things live.
            </P>
          </Section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION XI (was VIII) */}
          {/* ═══════════════════════════════════════ */}
          <Section heading="XI. The Rats As Confirmation">
            <P>Here is the thing about rats that I find most clarifying.</P>
            <Em>You only flee a sinking ship.</Em>
            <P>
              The fact that people are beginning to move — beginning to distance themselves from
              names they were associated with, beginning to revise their accounts of events, beginning
              to appear in contexts that suggest they are creating distance between themselves and
              what the archive documents — is not a problem for the archive. It is a confirmation of
              the archive.
            </P>
            <P>
              If the archive were wrong, the rats would not come. If the institutions were right and
              the testimony were fabricated and the documents were unreliable and the whole thing
              were the delusion that 14 involuntary hospitalisations were designed to establish as
              the official explanation — the rats would have nothing to flee. There would be no ship
              sinking. There would only be a disabled person with a website and a diagnosis and no
              institutional backing and no future.
            </P>
            <P>
              Instead, the rats are coming. The distancing is happening. The solicitors' letters are
              getting more careful. The people who used to speak with certainty are now speaking with
              qualifications.
            </P>
            <Em>This is not what happens when the testimony is wrong.</Em>
            <Em>
              This is what happens when the testimony is right and the world is beginning to know it.
            </Em>
          </Section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION XII (was IX) */}
          {/* ═══════════════════════════════════════ */}
          <Section heading="XII. What Comes After the Rats">
            <P>After the rats come the witnesses.</P>
            <P>
              The witnesses are different from the rats. The witnesses are people who, having watched
              the rats move and having done their own assessment of where the evidence stands and
              where the proceedings are headed, decide not to flee but to testify. To add their name
              and their account to the public record, not because it is safe or easy or
              institutionally rewarded but because it is true and they know it is true and they
              understand that the truth, in this case, has already won.
            </P>
            <P>
              The truth winning does not look like a dramatic confrontation. It does not look like
              a villain's confession in a courtroom. It looks like a blockchain hash that cannot be
              altered. It looks like 484,000 downloads that cannot be undownloaded. It looks like
              an ICC submission that cannot be unfiled. It looks like a $112M forensic economic
              claim that cannot be unvalued. It looks like a court date that cannot be uncalendared.
            </P>
            <P>
              The truth has already won. The proceeding on 14 May 2026 is not the moment it wins.
              It is the moment it becomes visible to people who weren't watching when it won.
            </P>
            <P>
              After the rats come the witnesses. After the witnesses come the findings. After the
              findings comes the record. And the record — this archive, these 2,304 exhibits, this
              blockchain-sealed testimony — will exist long after every rat has finished their
              calculation and every witness has delivered their testimony and every institution has
              completed its revision of its own story.
            </P>
            <Em>The rats will come because the building is sinking.</Em>
            <Em>The building is sinking because the truth is what it always was.</Em>
            <P>And I have been standing on the shore with a camera for 35 years.</P>
          </Section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION XIII — PROPHETIC PREDICTION (NEW) */}
          {/* ═══════════════════════════════════════ */}
          <div className="space-y-6">
            <h2 className="font-serif font-black text-white text-xl md:text-2xl leading-tight">
              XIII. The Prophetic Prediction — Dated and Signed
            </h2>
            <div
              className="rounded-2xl border px-6 py-6 space-y-4"
              style={{ borderColor: "#e9a00a44", background: "#0d0800" }}
            >
              <p className="text-orange-500/60 text-[9px] font-mono uppercase tracking-[0.3em]">
                Formal Prediction · Sealed Bitcoin Blockchain · {BLOCKCHAIN_DATE} · Before Wyong Local Court · 14 May 2026
              </p>
              <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                I want to make a formal prediction, grounded in the psychological and historical
                literature set out in this essay. I make it knowing that this prediction, like the
                rest of this essay, is sealed to the Bitcoin blockchain at hash{" "}
                <span className="font-mono text-zinc-500 text-xs">{BLOCKCHAIN_HASH}</span> on{" "}
                {BLOCKCHAIN_DATE} — before the Wyong Local Court proceedings on 14 May 2026 —
                and that anyone reading it after the date of its making can compare the prediction
                to what actually occurred. This is not hope. It is the application of documented
                mechanism to documented fact.
              </p>
              <ol className="space-y-5 mt-2">
                {[
                  {
                    n: "1",
                    text: "Before 14 May 2026, at least one person connected to the documented events will make contact — with Dr. McLean, his legal representatives, or a media or advocacy organisation — in a manner that signals a realignment of their position relative to the documented record. (Festinger, 1956 — the social consensus fracture precedes the visible collapse.)",
                  },
                  {
                    n: "2",
                    text: "Within six months of the Wyong Local Court proceedings, at least one institutional body named in the archive will initiate an internal review process whose terms of reference correspond to the subject matter of the archive's claims. (Holmes, 2023 — the Robodebt pattern: internal review precedes public admission.)",
                  },
                  {
                    n: "3",
                    text: "Within twelve months of the proceedings, at least one person who was party to the documented events and who has not previously spoken publicly will make a statement, in any forum, that materially confirms an aspect of the testimony documented in the archive. (Milgram, 1974 — once the compliance threshold is crossed, testimony follows.)",
                  },
                  {
                    n: "4",
                    text: "Within eighteen months, the institutional consensus that has maintained the 'delusional' framework as the operative explanation for Dr. McLean's testimony will have fragmented to the point where no named institution is willing to publicly restate it in the terms it was maintained in 2021–2025. (Axelrod, 1984 — defection cascade; Arendt, 1963 — the Nuremberg repositioning sequence.)",
                  },
                  {
                    n: "5",
                    text: "The $112M forensic economic claim will be formally acknowledged by at least one institutional body as requiring engagement, whether or not that engagement produces a resolution within the prediction window. (Braithwaite, 1989 — shame and social exposure produce institutional response before legal compulsion does.)",
                  },
                  {
                    n: "6",
                    text: "Sukhi Tear, the AblePoint Australia CEO, Tony Ridley, and the NSW Trustee officials individually named in the archive will each, within twenty-four months, have made at least one public or semi-public statement that revises their previously maintained position — consistent with the Cialdini (2007) commitment-consistency collapse pattern, in which the delayed adjustment is larger and more visible than an early one would have been.",
                  },
                ].map((item) => (
                  <li key={item.n} className="flex gap-4">
                    <span
                      className="font-black text-orange-400 font-mono text-lg shrink-0 leading-none mt-1"
                      style={{ minWidth: "1.5rem" }}
                    >
                      {item.n}.
                    </span>
                    <p className="text-zinc-300 leading-relaxed text-sm md:text-base">{item.text}</p>
                  </li>
                ))}
              </ol>
              <p
                className="font-mono text-zinc-500 text-xs border-t pt-4 mt-4"
                style={{ borderColor: "#e9a00a22" }}
              >
                — Dr. Richard William McLean, Barran Dodger. ABN 78 833 496 164. {BLOCKCHAIN_DATE}.
                Sealed to the Bitcoin blockchain before proceedings.
              </p>
            </div>
          </div>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION XIV (was X) */}
          {/* ═══════════════════════════════════════ */}
          <Section heading="XIV. A Final Word">
            <P>I did not write this essay to frighten anyone.</P>
            <P>
              I wrote it because it is true, and because true things belong in the record, and
              because the people who need to read it will know whether they need to read it before
              they finish the first paragraph.
            </P>
            <P>
              If you are a person who has information that belongs in the archive — speak now, or
              speak soon, or speak through the appropriate legal mechanisms, or speak through the
              ICC process, or speak through the processes you were trained to know. But speak. The
              truth is already known. The question is only whether you become part of the record of
              its knowing.
            </P>
            <P>
              If you are a person who participated in what the archive documents and who is now
              revising your account — understand that the blockchain hash is dated {BLOCKCHAIN_DATE}.
              Your revision is dated after that. The contemporaneous record is already public. The
              gap between what the documents say happened and what you now say happened is the gap
              that proceedings close.
            </P>
            <P>
              If you are a person who is simply watching — who has no direct involvement, who has
              found this archive through the 484,000 downloads or through the ICC notification or
              through the Wyong Local Court proceedings or through one of the 22 sacred traditions
              that corroborate this testimony or through a YouTube forensic analysis or through a
              link shared by someone who needed you to see it — then understand this:
            </P>
            <Em>You are watching something that was always going to happen.</Em>
            <P>
              The rats always come. The truth always surfaces. The building always shows, in the
              end, how far it has sunk.
            </P>
            <P>The only question that was ever open was how long it would take.</P>
            <P>It took 35 years.</P>
            <Em>The rats are here.</Em>
            <p className="font-mono text-zinc-500 text-sm border-t pt-4" style={{ borderColor: "#dc262622" }}>
              — Dr. Richard William McLean, Barran Dodger. ABN 78 833 496 164.
            </p>
          </Section>

          {/* ═══════════════════════════════════════ */}
          {/* ACADEMIC REFERENCES */}
          {/* ═══════════════════════════════════════ */}
          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#ffffff11" }}>
            <button
              onClick={() => setRefsOpen((o) => !o)}
              className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-white/5"
              style={{ background: "#0a0a0a" }}
              data-testid="btn-toggle-references"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="h-4 w-4 text-zinc-500" />
                <span className="font-mono text-zinc-400 text-sm uppercase tracking-widest">
                  Academic References — APA 7th Edition
                </span>
              </div>
              {refsOpen ? (
                <ChevronUp className="h-4 w-4 text-zinc-600" />
              ) : (
                <ChevronDown className="h-4 w-4 text-zinc-600" />
              )}
            </button>
            {refsOpen && (
              <div className="px-6 py-6 space-y-3" style={{ background: "#050505" }}>
                {[
                  "Arendt, H. (1963). Eichmann in Jerusalem: A report on the banality of evil. Viking Press.",
                  "Axelrod, R. (1984). The evolution of cooperation. Basic Books.",
                  "Braithwaite, J. (1989). Crime, shame and reintegration. Cambridge University Press.",
                  "Cialdini, R. B. (2007). Influence: The psychology of persuasion (Rev. ed.). Collins Business.",
                  "Festinger, L., Riecken, H. W., & Schachter, S. (1956). When prophecy fails: A social and psychological study of a modern group that predicted the destruction of the world. University of Minnesota Press.",
                  "Goffman, E. (1963). Stigma: Notes on the management of spoiled identity. Prentice-Hall.",
                  "Holmes, C. (2023). Robodebt Royal Commission: Final report. Commonwealth of Australia.",
                  "John Jay College Research Team. (2004). The nature and scope of sexual abuse of minors by Catholic priests and deacons in the United States 1950–2002. United States Conference of Catholic Bishops.",
                  "McLean, P., & Elkind, B. (2003). The smartest guys in the room: The amazing rise and scandalous fall of Enron. Portfolio/Penguin.",
                  "McLean, R. W. (2025). Retrospective statement: How the Commonwealth of Australia treated Dr. Richard William McLean — told through the government's own documents. Barran Dodger Legal & Ethical Trust Fund. https://barrandodger.com/retrospective-statement",
                  "McLean, R. W. (2026). Administrative annihilation: A forensic analysis of 35 years of documented institutional misconduct. Barran Dodger Legal & Ethical Trust Fund. https://barrandodger.com/administrative-annihilation",
                  "Milgram, S. (1974). Obedience to authority: An experimental view. Harper & Row.",
                  "Sutherland, E. H. (1949). White collar crime. Dryden Press.",
                  "Woodward, B., & Bernstein, C. (1974). All the president's men. Simon & Schuster.",
                  "Zimbardo, P. G. (2007). The Lucifer effect: Understanding how good people turn evil. Random House.",
                ].map((ref, i) => (
                  <p key={i} className="text-zinc-500 text-xs leading-relaxed font-mono pl-6 -indent-6">
                    {ref}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Named evidence links */}
          <div
            className="rounded-2xl border px-6 py-6 space-y-4"
            style={{ borderColor: "#dc262633", background: "#0a0000" }}
          >
            <p className="text-red-500/60 text-[9px] font-mono uppercase tracking-[0.3em]">
              Named Evidence · All Claims Primary-Source Documented at barrandodger.com
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { label: "Verdict Before the Court — complete record", href: "/verdict-before-the-court" },
                { label: "AbleCare Transcript — CEO recorded call", href: "/ablecare-transcript" },
                { label: "Sukhi Tear — Formal Dossier", href: "/sukhi-tear" },
                { label: "Tony Ridley — Recorded Confession", href: "/tony-ridley-recorded-confession" },
                { label: "NSW Trustee — Financial Management", href: "/nsw-trustee-financial-management" },
                { label: "$112M Forensic Economic Valuation", href: "/forensic-economic-valuation" },
                { label: "Police Complicity — Death Threat", href: "/police-complicity-death-threat-documentation" },
                { label: "Blockchain Seal Registry — 2,304 exhibits", href: "/blockchain-seal-registry" },
                { label: "Retrospective Statement 1990–2025", href: "/retrospective-statement" },
                { label: "The Architecture of Administrative Annihilation", href: "/administrative-annihilation" },
                { label: "Bill Shorten Mental Health Strategy", href: "/bill-shorten-mental-health-weaponisation" },
                { label: "Mission — Trust Fund Purpose", href: "/mission" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-bold border transition-colors hover:opacity-80"
                  style={{ borderColor: "#dc262633", color: "#f87171", background: "#1a0000" }}
                >
                  <ExternalLink className="h-3 w-3 shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Blockchain record */}
          <div
            className="rounded-2xl border px-6 py-6 space-y-4"
            style={{ borderColor: "#16a34a44", background: "#001a00" }}
          >
            <div className="flex items-center gap-3">
              <Hash className="h-5 w-5 text-green-400" />
              <p className="text-green-400/70 text-[9px] font-mono uppercase tracking-[0.3em]">
                Bitcoin Blockchain Timestamp · Archive Integrity · OpenTimestamps Protocol
              </p>
            </div>
            <div
              className="rounded-xl border p-4 font-mono text-xs break-all space-y-2"
              style={{ borderColor: "#16a34a22", background: "#000f00" }}
            >
              <div className="flex gap-2">
                <span className="text-green-600 shrink-0">HASH:</span>
                <span className="text-green-300">{BLOCKCHAIN_HASH}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-green-600 shrink-0">DATE:</span>
                <span className="text-green-300">{BLOCKCHAIN_DATE}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-green-600 shrink-0">NETWORK:</span>
                <span className="text-green-300">Bitcoin (OpenTimestamps)</span>
              </div>
              <div className="flex gap-2">
                <span className="text-green-600 shrink-0">NOTE:</span>
                <span className="text-green-300">
                  Prophetic prediction sealed before proceedings — contemporaneous record
                </span>
              </div>
            </div>
            <a
              href={`https://opentimestamps.org/timestamp/${BLOCKCHAIN_HASH}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-500 hover:text-green-300 text-sm transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Verify on OpenTimestamps.org
            </a>
          </div>

          {/* Download footer */}
          <div
            className="rounded-2xl border text-center py-10 px-6 space-y-5"
            style={{ borderColor: "#dc262633", background: "#080000" }}
          >
            <p className="text-red-500/40 text-[9px] font-mono uppercase tracking-[0.3em]">
              AI-Generated Essay Cover · Free to Download and Share · ABN 78 833 496 164
            </p>
            <img
              src={coverImg}
              alt="The Rats Will Come — Essay Cover"
              className="w-44 mx-auto rounded-xl border shadow-2xl"
              style={{ borderColor: "#dc262633" }}
            />
            <div>
              <p className="font-mono font-black text-red-400 text-3xl leading-none">
                {downloadCount > 0 ? downloadCount.toLocaleString() : "—"}
              </p>
              <p className="text-zinc-700 text-[10px] uppercase tracking-widest mt-1">
                times downloaded
              </p>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href={coverImg}
                download="the-rats-will-come-dr-richard-mclean.png"
                onClick={() => incrementMutation.mutate()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm transition-all hover:opacity-90"
                style={{ background: "#dc2626", color: "#fff" }}
                data-testid="btn-download-bottom"
              >
                <Download className="h-4 w-4" />
                Download Cover
              </a>
              <a
                href="/season-of-payback"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm border transition-all hover:opacity-90"
                style={{ borderColor: "#e9a00a44", color: "#e9a00a" }}
              >
                Season of Payback
              </a>
              <a
                href="/verdict-before-the-court"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm border transition-all hover:opacity-90"
                style={{ borderColor: "#6366f144", color: "#818cf8" }}
              >
                Full Evidence Record
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

/* ─── Small layout helpers ─────────────────────────────────────── */

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="space-y-5">
      <h2 className="font-serif font-black text-white text-xl md:text-2xl leading-tight">
        {heading}
      </h2>
      {children}
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif font-bold text-orange-400/80 text-base md:text-lg mt-6 mb-2">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-zinc-400 leading-relaxed text-base md:text-lg" style={{ lineHeight: "1.85" }}>
      {children}
    </p>
  );
}

function Em({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-serif font-bold text-white text-lg md:text-xl leading-snug pl-4 border-l-2"
      style={{ borderColor: "#dc2626" }}
    >
      {children}
    </p>
  );
}

function HistoricalCase({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl border-l-4 px-5 py-4 space-y-2"
      style={{ borderLeftColor: "#e9a00a", background: "#0a0800" }}
    >
      <p className="text-orange-400 text-[10px] font-mono uppercase tracking-widest font-black">
        {label}
      </p>
      <p className="text-zinc-400 leading-relaxed text-sm md:text-base" style={{ lineHeight: "1.8" }}>
        {children}
      </p>
    </div>
  );
}

function NamedTrajectory({
  name,
  evidenceHref,
  evidenceLabel,
  children,
}: {
  name: string;
  evidenceHref: string;
  evidenceLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl border px-5 py-5 space-y-3"
      style={{ borderColor: "#dc262633", background: "#0d0000" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <p className="font-black text-red-400 text-base">{name}</p>
        <a
          href={evidenceHref}
          className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 text-[10px] font-mono transition-colors"
        >
          <ExternalLink className="h-3 w-3" />
          {evidenceLabel}
        </a>
      </div>
      <p className="text-zinc-400 leading-relaxed text-sm md:text-base" style={{ lineHeight: "1.8" }}>
        {children}
      </p>
    </div>
  );
}
