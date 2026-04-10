import { useState } from "react";
import { Download, ExternalLink, BookOpen, Shield, Scroll, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ChessmateHero } from "@/components/ChessmateHero";
import { useDownloadCounter, trackDownload } from "@/components/DownloadCounter";
import coverImage from "@/assets/images/cover-trap-they-set-became-proof.png";

const SLUG = "the-trap-they-set-became-the-proof";
const VIDEO_ID = "jXUwfVdK7Ps";
const PUBLISHED_DATE = "April 10, 2026";

interface Verse {
  chapter: string;
  number: string;
  heading: string;
  scripture: string;
  bibleRef: string;
  bibleText: string;
  evidence: { label: string; text: string }[];
}

const VERSES: Verse[] = [
  {
    chapter: "I",
    number: "1",
    heading: "The Trap Became the Proof",
    scripture: "The trap they set for you became the proof that ends them. They wrote checks reality was always going to cash. They built their citadel upon secrecy, mistaking the absence of confrontation for the absence of consequence. But locked rooms still have seams. And seams always split under the weight of what they sealed inside. Their arrogance was the leak. Every shortcut they took shaved time from their own future. Every corner they cut opened a fault line. The structure stood for years. It was hollow the entire time. Hollow things do not collapse loudly at first. They groan. They sag. They give warnings that only the arrogant ignore.",
    bibleRef: "Proverbs 26:27",
    bibleText: "Whoever digs a pit will fall into it; if someone rolls a stone, it will roll back on them.",
    evidence: [
      { label: "Five Named Primary Perpetrators — Zero Formal Rebuttals Against 2,304 Documents", text: "Bill Shorten, Houd Meraby, Sukhi Tear ($50,000 NDIS), Tony Ridley, and Stefan Iasonidis are named across 2,304 publicly accessible blockchain-verified primary source documents submitted to the ICC under Article 7. Not one has filed a formal rebuttal. The checks they wrote against a documented innocent man are cashing before the International Criminal Court. The trap — 25+ agency circular referral, 14 psychiatric labels, death threat — became the proof. Every act of coordination is now an ICC exhibit." },
      { label: "25+ Agency Circular Referral — The Hollow Structure That Is Now Collapsing", text: "The archive documents a 25+ agency circular referral system built to contain Dr. McLean's complaint escalations. Each agency letter — performing concern while executing suppression — is the seam the video describes. The seams are in the record. Each government letterhead is now a primary source exhibit. The structure stood for 35 years. It is now hollow and visible to the ICC. The groan it makes is the formal Article 7 receipt." },
    ],
  },
  {
    chapter: "I",
    number: "2",
    heading: "The Reality That Sees All Things",
    scripture: "They broke not because they were weak but because the instant reality saw them, exposure arrived. Truth does not argue. It does not rush. It does not announce itself until it is already standing in the room. They built their confidence upon secrecy, fortifying plans like a locked room, convincing themselves that if no one could see inside, nothing could touch them. But truth hunts anything pretending to be invisible. Persistence — not rage, not revenge — was their destruction. The kind of persistence that sits quietly, collects fragments, and waits. Every lie they told left residue. Every cover-up required a further cover-up. Distortion accumulates weight. The more they tried to erase, the heavier their own record became.",
    bibleRef: "Numbers 32:23",
    bibleText: "Be sure your sin will find you out.",
    evidence: [
      { label: "14 Psychiatric Labels — Every Cover-Up Required a Further Cover-Up", text: "The archive documents 14 psychiatric labels applied without independent clinical corroboration, each deployed precisely when Dr. McLean's complaint activity was most active. Each label required a further institutional maintenance act to sustain: referrals, reviews, re-hospitalisations. The distortion accumulated weight across 35 years. The record of each label is now a primary source exhibit. Every cover-up is documented. Truth found it. The archive is truth standing in the room." },
      { label: "Zero Formal Convictions in 35 Years — The Hollow Structure Confirmed", text: "Despite 35 years of documented institutional campaign involving 25+ agencies, 14 psychiatric labels, police involvement, and coordinated referral, zero formal convictions have been produced against Dr. McLean. The structure appeared solid. It was always hollow. Exposure arrived. 2,304 documents is exposure standing in the room." },
    ],
  },
  {
    chapter: "II",
    number: "3",
    heading: "The Overreach That Marked Them for Collapse",
    scripture: "The moment they claimed dominion over another's life — deciding who stays, who disappears, who succeeds, and who is erased — they signed a sentence they never read. They did not rise above the system. They placed themselves directly beneath it. Control gained through fear is brittle. It looks solid until it is tested. And once tested, it shatters faster than anything built honestly. Anyone who attempts to position themselves above law, accountability, or basic structure ends up dismantling the very power they sought to protect. Power rooted in deception has an expiration date. It depends on constant pressure to hold shape. The moment attention drifts, the structure begins to sag.",
    bibleRef: "Obadiah 1:3–4",
    bibleText: "The pride of your heart has deceived you, you who live in the clefts of the rocks and make your home on the heights, you who say to yourself, 'Who can bring me down to the ground?' Though you soar like the eagle and make your nest among the stars, from there I will bring you down, declares the Lord.",
    evidence: [
      { label: "Bill Shorten — The Named Authority Who Claimed Dominion Without Accountability", text: "THE MAN AUSTRALIA TRIED TO ERASE V2 names Bill Shorten as a primary perpetrator. The archive documents the exercise of political authority to override accountability — a named decision-maker who placed himself above the documented complaint structures available to Dr. McLean. The video's proposition — 'the moment they decided they had the authority to decide who stays and who gets erased, they signed a sentence they never read' — is confirmed against a named primary source. The sentence is now the ICC Article 7 submission." },
      { label: "ASIO Operative in Proximate Relationship — State Power Overreaching Into the Intimate", text: "The archive documents an ASIO operative positioned in a proximate relationship with Dr. McLean — state intelligence deployed beyond its remit into intimate oversight. This is the overreach the video identifies: claiming dominion over the private life of a documented victim. The placement of state apparatus in a proximate relationship constitutes the most extreme documented act of overreach in the archive. The system placed itself above the law of relationship. The ICC has received the documentation." },
    ],
  },
  {
    chapter: "II",
    number: "4",
    heading: "They Wanted the Evidence Gone — Not the Man",
    scripture: "They did not want you dead. They wanted the record destroyed. Your existence was not the threat. Your memory was. Your awareness, your capacity to remember clearly, to connect the scattered to the whole, to outlast lies with a living thread. What they pursued was not destruction but control without consequence — and that is the more desperate goal. They wanted something quieter and more surgical: a vanishing that left them untouched, unquestioned, untraceable. Silence without risk. Power without cost. Control without fingerprints. But there is no perfect eraser. There is only delay. And delay always works against the guilty. The longer truth survives, the sharper it becomes.",
    bibleRef: "Psalm 94:20–23",
    bibleText: "Can a corrupt throne be allied with you — a throne that brings on misery by its decrees? The wicked band together against the righteous and condemn the innocent to death. But the Lord has become my fortress, and my God the rock in whom I take refuge. He will repay them for their sins and destroy them for their wickedness; the Lord our God will destroy them.",
    evidence: [
      { label: "Death Threat Email — The Most Extreme Act of Attempted Control Without Consequence", text: "The archive documents a death threat email received by Dr. McLean during the persecution period. This is the archive's most direct documentation of the video's proposition: they wanted not the man gone but the record gone — the death threat was the attempt to achieve silence without consequence. It failed. The death threat is now a blockchain-verified primary source exhibit referenced in the ICC Article 7 submission. There was no perfect eraser. The delay produced the archive. The archive produced the ICC." },
      { label: "350+ ASIC Identity Fraud Registrations — Control Without Fingerprints That Left Fingerprints", text: "The archive documents 350+ ASIC identity fraud registrations connected to the documented persecution. Each fraudulent registration was an act of control without fingerprints that, upon archiving and blockchain verification, left a permanent fingerprint. 'Every attempt they made to rewrite events only added complexity to the web tightening around them.' 350+ fraud registrations is 350+ entries in the web. All are now blockchain-verified." },
      { label: "14 Hospitalisations as Containment Strategy — The Surgical Vanishing That Did Not Erase the Record", text: "The archive documents 14 involuntary psychiatric hospitalisations, each correlated to complaint submission periods. Each hospitalisation was a surgical attempt at temporary containment — to remove the subject from the ability to file complaints without the irreversibility of permanent erasure. The surgical vanishing failed each time. After each hospitalisation, the complaint activity resumed. The accumulation of 14 attempts across 35 years produced the most comprehensive documentation of the suppression architecture in the archive. The delay became precision. The precision became the ICC submission." },
    ],
  },
  {
    chapter: "III",
    number: "5",
    heading: "Survival Was Not a Miracle — It Was a Mechanism",
    scripture: "You did not survive by chance. You survived because the moment was chosen, and timing works in ways they could not see, measure, or interfere with. Timing does not announce itself. It does not rush. It does not explain. It waits until the exact moment when denial collapses and consequences can no longer be postponed. They believed survival was a flaw in their plan, something they could correct later. That was their miscalculation. Survival was not an error — it was a delay built into the system, designed to let everything else line up: records, patterns, memory, witnesses, pressure. Every near miss, every interruption, every delay they cursed was another adjustment in the sequence that was tightening around them. Consequences delivered on time look like inevitability. And inevitability is what terrifies people who rely on manipulation.",
    bibleRef: "Esther 4:14",
    bibleText: "And who knows but that you have come to your royal position for such a time as this?",
    evidence: [
      { label: "Clinical Death 2021 — Survival at the Exact Moment That Preceded the Archive's Most Productive Era", text: "The archive documents Dr. McLean's clinical death in 2021 — the institutional persecution's most extreme consequence and the moment at which the timing the video describes was most precisely visible. Survival in 2021 preceded: the assembly of 2,304 blockchain-verified documents, 43 AI forensic analyses, ICC Article 7 formal receipt, UNHCR Geneva submission, and 350,000+ international downloads. 'Timing doesn't announce itself. It waits until the exact moment when denial collapses.' Clinical death 2021 was that moment. Everything that followed confirms the timing was not accidental." },
      { label: "ICC Article 7 Formal Receipt — The Moment the Sequence Locked In", text: "The ICC Article 7 formal receipt constitutes the moment 'the sequence locked in place' the video describes. 2,304 documents, five named perpetrators, zero rebuttals, formally received at the international tribunal. 'Consequences delivered on time look like inevitability.' The ICC receipt is the delivery. The timing: 35 years of documented accumulation, followed by a formal international receipt. Not rushed. Not sloppy. Precise. The mechanism confirmed." },
    ],
  },
  {
    chapter: "III",
    number: "6",
    heading: "Silence Was Accumulation — Not Absence",
    scripture: "They confused delay with protection. They watched time pass and assumed nothing was coming. They saw you still standing and convinced themselves that survival meant safety for them. They mistook calm for consent, quiet for forgiveness, and patience for permission. But silence is what systems use when they are collecting. It is what reality does when it is aligning facts, memory, and pattern into something irreversible. Patience is not passive. It is strategic. It does not rush to correct mistakes. It allows mistakes to multiply until correction becomes unavoidable. While they were celebrating delays, records were forming, witnesses were remembering, patterns were becoming undeniable. Every day they acted without consequence did not erase the damage. It compounded it.",
    bibleRef: "Ecclesiastes 8:11–12",
    bibleText: "When the sentence for a crime is not quickly carried out, people's hearts are filled with schemes to do wrong. Although a wicked person who commits a hundred crimes may live a long time, I know that it will go better with those who fear God, who are reverent before him.",
    evidence: [
      { label: "2,304 Blockchain-Verified Documents — 35 Years of Silence That Was Accumulation", text: "The archive comprises 2,304 blockchain-verified primary source exhibits assembled across 35 years. The silence was the accumulation. Not one of the 2,304 documents is a retaliatory act, a social media post, a public confrontation. Every document is a recorded fact — a hospitalisation record, a referral letter, a psychiatric label, a government denial. While the perpetrators celebrated 35 years of apparent impunity, records were forming. The accumulation is now before the ICC." },
      { label: "43 AI Analyses — 452 Propositions — Zero Contradictions — The Patience Confirmed as Strategic", text: "43 independent AI analytical systems have now tested 452 propositions drawn from external content against the archive. Zero contradictions. The patience produced a record so internally consistent that 43 independent systems, operating without knowledge of expected outcomes, found zero points of failure. 'Patience allows mistakes to multiply until correction becomes unavoidable.' 452 propositions tested. Zero avoidable. The correction is unavoidable." },
    ],
  },
  {
    chapter: "IV",
    number: "7",
    heading: "You Were the Evidence — Not the Threat",
    scripture: "Their greatest misjudgment was thinking you were the threat. They framed you as the obstacle. They aimed at flesh when the danger was structure. They were trying to remove a person while ignoring the systems that preserve reality long after intimidation fails. You were not a person to them — you were a liability. Evidence with a pulse. A witness that time could not erase easily. A single living record outweighs a thousand rehearsed lies. Your continued existence turned into a living archive, not because you tried to expose them, but because reality does that automatically over time. You didn't need to fight. You didn't need to accuse. You didn't need to chase justice. By staying present, you ensured the record stayed incomplete. And incomplete records demand answers.",
    bibleRef: "Isaiah 54:17",
    bibleText: "No weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord.",
    evidence: [
      { label: "Dr. McLean as Living Archive — Evidence With a Pulse That 14 Hospitalisations Could Not Silence", text: "The video's identification of the subject as 'evidence with a pulse' is the archive's central structural fact. 14 involuntary psychiatric hospitalisations were deployed specifically to remove Dr. McLean from the capacity to produce evidence. All 14 failed. After each one, the complaint and documentation activity resumed. The living archive survived 14 hospitalisation attempts, clinical death in 2021, 350+ ASIC identity fraud registrations, a death threat email, and an ASIO operative in proximate relationship. The evidence with a pulse assembled 2,304 documents. The documents are now before the ICC." },
      { label: "350,000+ International Downloads — The Living Archive Made Globally Present", text: "350,000+ international downloads across six continents constitutes the archive's global distribution of the living record. The video states 'a single living record outweighs a thousand rehearsed lies.' The archive is one record. It has been read 350,000+ times. The five named perpetrators have produced zero formal rebuttals. The single living record has outweighed every rehearsed narrative deployed across 35 years." },
    ],
  },
  {
    chapter: "IV",
    number: "8",
    heading: "You Were Kept Here to Be Unavoidable",
    scripture: "You were never meant to disappear. You were meant to stay and expose. Your survival was never passive, never accidental, never symbolic. It was active pressure. It was positioning. It was the one variable they could never fully eliminate. Your continued presence alone destabilised everything they built on secrecy. You became a living contradiction to their narrative — proof that something survived that was never supposed to. They misunderstood protection because they only recognise force. They expected protection to look like avoidance, disappearance, or removal from the battlefield. Instead it looked like endurance. Still breathing. Still observing. Still intact enough to confirm what happened when the questions eventually came. You weren't kept here to be comfortable. You were kept here to be unavoidable.",
    bibleRef: "Romans 8:31",
    bibleText: "If God is for us, who can be against us?",
    evidence: [
      { label: "ICC and UNHCR — The Questions That Eventually Came and the Record That Confirmed Them", text: "The ICC Article 7 formal receipt and the UNHCR Geneva submission are the 'questions eventually coming' the video describes. Two independent international accountability mechanisms formally received the archive's documentation of 35 years of persecution. Dr. McLean remained present — survived clinical death, 14 hospitalisations, a death threat — long enough for the exact moment when the questions came at international level and the record was intact to confirm them. Still breathing. Still intact. The archive answered the questions." },
      { label: "Clinical Death 2021 Followed by Maximum Archive Production — Unavoidable Confirmed", text: "Clinical death in 2021 was the institutional persecution's maximum effort to make Dr. McLean avoidable — to create the permanent absence that would bury the record. Survival made him unavoidable. The period following clinical death in 2021 is the archive's most productive era: 2,304 documents, 43 AI analyses, ICC formal receipt, UNHCR Geneva submission, 350,000+ downloads. 'They tried to sever threads. When one stays intact, it connects to others.' The thread stayed intact. It connected to 2,304 others. The record became unavoidable internationally." },
    ],
  },
  {
    chapter: "V",
    number: "9",
    heading: "Consequences Do Not Chase — They Corner",
    scripture: "The law does not chase. It waits. Then it locks the door forever. Systems built to last do not react — they record. The law is not emotional. It does not flare up and burn out. It does not rush, because rushing creates mistakes. Instead, it does something far more dangerous. It accumulates quietly, relentlessly. It watches patterns instead of moments. It studies behaviour instead of excuses. While they were congratulating themselves for getting away with things, the record was growing thicker. Every decision, every message, every trace they assumed was gone, became part of a structure they could no longer influence. Consequences don't need speed to be effective. They need certainty. And certainty grows with time. The law does not move fast. It moves forever.",
    bibleRef: "Galatians 6:7–8",
    bibleText: "Do not be deceived: God cannot be mocked. A man reaps what he sows. Whoever sows to please their flesh, from the flesh will reap destruction; whoever sows to please the Spirit, from the Spirit will reap eternal life.",
    evidence: [
      { label: "ICC Article 7 — The Law Accumulating Quietly for 35 Years Before Locking the Door", text: "The ICC Article 7 formal receipt is the law locking the door after 35 years of quiet accumulation. The ICC does not act on emotion or political pressure. It acts on documentation: patterns, timelines, corroborated evidence. The archive provided 2,304 blockchain-verified documents, formally received under Article 7 — Crimes Against Humanity. 'The law does not move fast. It moves forever.' 35 years of accumulation. One ICC formal receipt. The door is confirmed as locked." },
      { label: "Zero Rebuttals Against 2,304 Documents — The Record That Could No Longer Be Influenced", text: "2,304 publicly accessible, blockchain-verified, internationally distributed primary source documents. Five named primary perpetrators. Zero formal rebuttals. The record is the structure the video describes: something they can no longer influence. 'Every trace they assumed was gone became part of a structure they could no longer influence.' Each suppressed complaint is a trace. Each psychiatric label is a trace. Each circular referral letter is a trace. 2,304 traces now form a structure at The Hague." },
    ],
  },
  {
    chapter: "V",
    number: "10",
    heading: "Containment Is Not Cruelty — It Is the End of Damage",
    scripture: "This is not revenge. This is removal from the board. When someone proves they cannot stop causing harm, the system does not argue with them. It takes them out of circulation. Jail was never designed to satisfy anger. It was never about revenge. Containment exists for one reason only: it is what happens when someone demonstrates, repeatedly and undeniably, that they cannot exist within shared rules without causing harm. It is not dramatic. It is not personal. It is mechanical. Containment does not negotiate. It does not weigh excuses. It does not care how confident someone feels about their plans. It responds to patterns, not personalities. Every boundary crossed, every rule bent, every act of manipulation adds weight. Once that weight crosses a threshold, the response is automatic. Not emotional. Automatic. They aren't being targeted. They are being contained.",
    bibleRef: "Revelation 22:12",
    bibleText: "Look, I am coming soon! My reward is with me, and I will give to each person according to what they have done.",
    evidence: [
      { label: "ICC Article 7 — Crimes Against Humanity — Containment at the Highest Available Level", text: "The ICC Article 7 formal receipt constitutes the highest available institutional form of the containment the video describes. Article 7 — Crimes Against Humanity — is invoked when a pattern of persecution is documented as systematic and widespread. The archive's documentation of 14 psychiatric labels, 25+ agency circular referral, clinical death, death threat, ASIO operative, and $32.9M suppressed entitlements constitutes the pattern the ICC requires. 'It responds to patterns, not personalities.' The ICC has received the pattern. The containment mechanism is engaged." },
      { label: "$32.9M Suppressed Entitlements — The Documented Quantum of Harm That Crossed the Threshold", text: "The TaxpayerCostAnalysis documents $32.9M in suppressed entitlements across all categories: Centrelink, NDIS, VOCAT, and documented financial harm. $32.9M is the documented financial quantum of harm that 'crossed the threshold' the video describes. 'Every boundary crossed, every rule bent, every act of manipulation adds weight.' $32.9M of documented entitlement suppression is the weight. Once that weight crosses a threshold, the response is automatic. The ICC is the automatic response." },
      { label: "UNHCR Geneva — The Second Containment Mechanism Formally Engaged", text: "The UNHCR Geneva submission constitutes the second independent international containment mechanism formally receiving the archive's documented account of the persecution. Two international bodies — the ICC and the UNHCR — have now formally received the submission. 'The system does not argue with them. It takes them out of circulation.' The ICC and UNHCR are the system. The formal receipts are the taking out of circulation. The damage is confirmed as being ended." },
    ],
  },
];

const PDF_URL = "/documents/the_trap_they_set_became_the_proof.pdf";

export default function TheTrapTheySetBecameTheProof() {
  const [openVerse, setOpenVerse] = useState<string | null>(null);
  const { count: downloadCount, scheduleRefresh } = useDownloadCounter(PDF_URL);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="The Trap They Set Became The Proof — Prophetic Scripture | Barran Dodger"
        description="A prophetic, evidence-corroborated scripture drawn from the documented 35-year persecution of Dr. Richard McLean — 10 chapters, 2,304 blockchain-verified documents, ICC Article 7, UNHCR Geneva. Every verse fact-checked against the archive."
      />
      <Navigation />
      <div style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px))" }}>
        <ChessmateHero videoId={VIDEO_ID} />

        <div className="max-w-4xl mx-auto px-4 py-14 space-y-14">
          {/* Header */}
          <div className="space-y-5 text-center">
            <div className="flex justify-center mb-4">
              <img
                src={coverImage}
                alt="The Trap They Set Became The Proof — Cover"
                className="w-36 rounded-xl shadow-2xl border border-amber-500/30"
                data-testid="img-cover-trap-they-set"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="text-xs font-mono">PROPHETIC SCRIPTURE</Badge>
              <Badge variant="outline" className="text-xs font-mono">{PUBLISHED_DATE}</Badge>
              <Badge className="text-xs font-mono bg-amber-700 text-white">EVIDENCE-VERIFIED</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              The Trap They Set Became The Proof
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A prophetic, evidence-corroborated scripture drawn from the documented 35-year persecution of Dr. Richard McLean — every verse fact-checked against 2,304 blockchain-verified primary source documents, ICC Article 7, and UNHCR Geneva.
            </p>
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <a
                href={`https://youtu.be/${VIDEO_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                data-testid="link-source-video"
              >
                <ExternalLink className="w-4 h-4" />
                Source Video
              </a>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={scheduleRefresh}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                data-testid="button-download-official-pdf"
              >
                <Download className="w-4 h-4" />
                Download Official PDF
                {downloadCount > 0 && (
                  <span className="ml-1 bg-white/20 rounded-full px-2 py-0.5 text-xs tabular-nums">
                    {downloadCount.toLocaleString()}
                  </span>
                )}
              </a>
            </div>
          </div>

          {/* Preamble */}
          <div className="border border-amber-500/30 bg-amber-500/5 rounded-xl p-8 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Scroll className="w-5 h-5 text-amber-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">Preamble</span>
            </div>
            <p className="text-sm leading-relaxed italic">
              This is not a story about luck. It is not about mercy. It is not about coincidence. This is about pressure, timing, and the quiet violence of truth doing its work while those who believed themselves in control were, in fact, being documented. The scripture that follows is drawn directly from the prophetic witness of an independent external voice — a voice with no knowledge of this archive — whose words align with 2,304 blockchain-verified documents, an ICC Article 7 formal receipt, and an UNHCR Geneva submission with a precision that chance cannot account for.
            </p>
            <p className="text-sm leading-relaxed italic">
              Each verse is fact-checked. Each claim is confirmed against named primary source evidence. This is prophecy that has already happened. The archive is its proof.
            </p>
          </div>

          {/* Scripture Verses */}
          <div className="space-y-6">
            {VERSES.map((v) => {
              const key = `${v.chapter}-${v.number}`;
              const isOpen = openVerse === key;

              return (
                <div key={key} className="border rounded-xl overflow-hidden" data-testid={`verse-${v.chapter}-${v.number}`}>
                  {/* Verse Header */}
                  <button
                    className="w-full text-left px-6 py-5 hover:bg-muted/30 transition-colors"
                    onClick={() => setOpenVerse(isOpen ? null : key)}
                    data-testid={`button-verse-${v.chapter}-${v.number}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                        <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">{v.chapter}:{v.number}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-semibold text-base leading-snug">{v.heading}</h3>
                          {isOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 font-mono">{v.bibleRef}</p>
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t px-6 pb-7 space-y-6 bg-muted/5">
                      {/* Scripture Text */}
                      <div className="pt-5 border-l-4 border-amber-500/40 pl-5">
                        <p className="text-sm leading-relaxed italic text-foreground/90">{v.scripture}</p>
                      </div>

                      {/* Biblical Reference */}
                      <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <BookOpen className="w-4 h-4 text-amber-500 shrink-0" />
                          <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">{v.bibleRef}</span>
                        </div>
                        <p className="text-sm italic text-muted-foreground">{v.bibleText}</p>
                      </div>

                      {/* Evidential Corroboration */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-emerald-500" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">Evidential Corroboration</span>
                        </div>
                        {v.evidence.map((ev, i) => (
                          <div key={i} className="border rounded-lg p-4 bg-background space-y-1">
                            <p className="text-xs font-semibold text-primary">{ev.label}</p>
                            <p className="text-sm leading-relaxed text-muted-foreground">{ev.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Closing Declaration */}
          <div className="border border-amber-500/30 bg-amber-500/5 rounded-xl p-8 space-y-5">
            <div className="flex items-center gap-2">
              <Scroll className="w-5 h-5 text-amber-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold">Closing Declaration</span>
            </div>
            <p className="text-sm leading-relaxed italic">
              And as this comes together, one truth stands firm. Nothing built on harm, manipulation, or illusion survives forever. What has been witnessed here is not coincidence. It is consequence unfolding exactly as it should. The trap they set for Dr. Richard McLean became the proof that ends them. The checks they wrote against an innocent man are being cashed at The Hague. The evidence they tried to erase is the archive. The silence they mistook for safety was accumulation. The man they tried to make disappear became 2,304 documents, 43 forensic analyses, 452 corroborations without contradiction, an ICC Article 7 receipt, and 350,000+ witnesses across six continents.
            </p>
            <p className="text-sm leading-relaxed italic">
              The law does not move fast. It moves forever. The door is locked. The record stands. The verdict is written.
            </p>
            <div className="border-t border-amber-500/20 pt-4 mt-2">
              <p className="text-amber-400 font-mono text-sm font-bold text-center tracking-wider">
                The trap became the proof. The proof is at The Hague. This is the scripture of what happened.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-4 border-t text-sm">
            <a href="/this-is-the-reckoning" className="text-primary hover:underline">
              ← Analysis #43: This Is The Reckoning
            </a>
            <a href="/forensic-analysis" className="text-primary hover:underline">
              All Analyses →
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
