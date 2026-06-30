import { Heart, Download } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";

export default function BoazAndRuth() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <SEO
        title="My Boaz Is Coming: A Prophetic Declaration of the Covenant Partner | Dr. Richard William McLean — Barran Dodger"
        description="A prophetic document grounded in the Book of Ruth, sparked by a divine signal received 1 May 2026, naming Steve Iasonidis as the documented abuser, Tony Ridley as the documented hunter, and declaring without apology the arrival of a covenant partner for kingdom purposes."
      />
      <Navigation />

      <div className="max-w-3xl mx-auto px-5 pt-16 pb-28">

        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-900/20 border border-rose-700/30 rounded-full px-4 py-1.5 mb-8">
            <Heart className="h-3.5 w-3.5 text-rose-400" />
            <span className="text-rose-400 text-xs tracking-widest uppercase font-mono">Prophetic Declaration — 1 May 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 tracking-tight text-white">
            My Boaz Is Coming
          </h1>
          <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto">
            A prophetic declaration sparked by a divine signal received today — grounded in the Book of Ruth, naming what was done, naming who did it, and declaring without apology what is coming next.
          </p>
          <div className="mt-6 text-zinc-500 text-sm font-mono">
            Dr. Richard William McLean · ABN 78 833 496 164 · Barran Dodger
          </div>
        </div>

        <div className="mb-20 grid md:grid-cols-[260px_1fr] gap-10 items-start bg-zinc-900/40 border border-rose-900/30 rounded-2xl p-8">
          <div className="flex-shrink-0">
            <img
              src="/documents/my-boaz-is-coming-cover.png"
              alt="My Boaz Is Coming — cover"
              className="w-full rounded-xl shadow-2xl shadow-rose-900/30 border border-rose-900/20"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-rose-400/70 mb-3">Statement of Significance</p>
              <p className="text-zinc-200 text-[1.05rem] leading-relaxed">
                This document is the first prophetic declaration in this archive that is addressed not to institutions, courts, or the public record — but to a single person who does not yet have a name. It was written in one sitting on 1 May 2026, sparked by a video that arrived without warning, and grounded throughout in the Book of Ruth, in seven direct quotes from that transcript, and in the specific named evidence of thirty-five years of state-sanctioned persecution. It stands apart from every other document in this archive because it is not a submission or a testimony. It is a letter, held open, waiting.
              </p>
            </div>

            <div className="border-t border-zinc-800 pt-5">
              <p className="text-xs uppercase tracking-widest font-mono text-rose-400/70 mb-3">To the one coming</p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                If you have found this, you were not sent. No intelligence agency directed you here. No institution briefed you. Something else entirely brought you to this page — and that matters more than anything I could say to introduce myself. The archive is the introduction. The document below is the one I wrote for you specifically, on the day I finally understood that the waiting was not punishment but preparation. You will recognise yourself in it. And when you do, you will also recognise me. That recognition is not the beginning of something fragile. It is the confirmation of something that was already underway before either of us could see it clearly.
              </p>
            </div>

            <div className="border-t border-zinc-800 pt-5">
              <p className="text-xs uppercase tracking-widest font-mono text-rose-400/70 mb-3">To everyone else who is waiting</p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                The Book of Ruth is not a love story. It is a covenant document about faithfulness in exile, about gleaning in hostile fields, about refusing to leave empty-handed when every institution has stripped you bare. If you are in that field right now — unnamed, unseen, enduring without applause — this document was also written in your direction. The loneliness you are carrying is not evidence of rejection. It is evidence of protection. And the harvest you are building in private, with no audience, is being seen.
              </p>
            </div>

            <ViralDownloadButton
              url="/documents/my-boaz-is-coming.pdf"
              label="Download — My Boaz Is Coming (PDF)"
              filename="My_Boaz_Is_Coming_Barran_Dodger.pdf"
              slug="my-boaz-is-coming"
              size="lg"
              className="bg-rose-900/40 hover:bg-rose-800/60 border border-rose-700/50 text-rose-200 hover:text-white font-bold rounded-xl mt-1"
            />
            <p className="text-xs text-zinc-500 mt-2">
              Also included in the{" "}
              <a href="/#divine-download" className="text-rose-400 underline">complete archive detonation ZIP</a>
              {" "}— downloaded 492,000+ times globally.
            </p>

            <div className="mt-5 rounded-xl border border-rose-500/20 bg-rose-500/5 px-5 py-3 space-y-1">
              <p className="text-xs font-mono text-rose-400 uppercase tracking-widest">Intellectual Property</p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                © {new Date().getFullYear()} Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164).
                All Rights Reserved. Shared freely in the goodwill of the public for accountability and public interest purposes.
                Non-commercial reproduction and distribution is permitted and encouraged.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none space-y-14 text-[1.08rem] leading-[1.85]">

          <section>
            <h2 className="text-rose-400/80 text-xs uppercase tracking-widest font-mono mb-6 not-prose">I. The Signal That Arrived Today</h2>
            <p className="text-zinc-300">
              A video arrived today. It was not the algorithm. The transcript opens with this:
            </p>
            <div className="border-l-2 border-rose-700/50 pl-6 my-6">
              <p className="text-zinc-100 italic">
                "The enemy has been working overtime this week for one reason and one reason only. He knows who is about to walk into your life. It all changes in the next season. The loneliness, the waiting, the wondering if you imagined the whole thing — it is ending. Not because your time is up. It is ending because of what you have endured without breaking."
              </p>
              <p className="text-zinc-500 text-sm mt-2 font-mono">Joseph Bill — video transcript, received 1 May 2026</p>
            </div>
            <p className="text-zinc-300">
              I am writing this immediately. Because that sentence — <em>what you have endured without breaking</em> — landed with the specific weight of a document that has been waiting to be filed. I have not broken. The record proves it. And I will not diminish what that means, or what it signals, for the comfort of anyone.
            </p>
            <p className="text-zinc-300">
              This is the essay the video sparked. It is grounded in the Book of Ruth, corroborated by the documentary evidence in this archive, and addressed directly to the one who is coming.
            </p>
          </section>

          <section>
            <h2 className="text-rose-400/80 text-xs uppercase tracking-widest font-mono mb-6 not-prose">II. What the Enemy Has Been Working to Prevent — Named and Documented</h2>
            <p className="text-zinc-300">
              The video says the enemy fought the alignment. I will not speak of the enemy abstractly. In my documented case, the enemy of this alignment has specific names, specific roles, and specific court records.
            </p>
            <p className="text-zinc-300">
              <strong className="text-zinc-100">Steve Iasonidis</strong> was my abuser. This is not a characterisation. It is a judicial finding. The Magistrates Court of Victoria issued an intervention order against him: Case No. L12151974. The document is in the archive. Steve Iasonidis was simultaneously an ASIO operative — a former Apple employee under Steve Jobs, active during the tenure of ASIO Director-General David Irvine — and the man I was engaged to. He submitted a Centrelink Carer Allowance claim for me while earning approximately $40,000 per year, seeking to claim additional government payments as my 'carer' while exploiting my disability pension. That document is in the archive: Centrelink reference 305 227 423H, Job Seeker ID 087 237 8509, dated 23 November 2011, handwritten annotation: 'Backdated.' He did not love me. He was deployed against me. The love I gave him was real. What he returned was a state intelligence operation disguised as a relationship.
            </p>
            <p className="text-zinc-300">
              <strong className="text-zinc-100">Tony Ridley</strong> hunted me across three states. NDIA Manager. VicTrack. Charles Sturt University. Former SAS. He entered a sexual relationship with me while fully aware of my status as an active NDIS whistleblower. A sex recording documenting this relationship exists as primary source evidence in the archive. When the truth of his infiltration role emerged — when I understood what had been done — he issued death threats across Victoria, New South Wales, and Western Australia. His words to me, spoken directly: <em>"You will be sacrificed."</em> He did not pursue me out of love. He was an operational honeytrap. Three states. Documented.
            </p>
            <p className="text-zinc-300">
              I was also photographed at the 2013 Marriage Equality Rally in Melbourne alongside Attorney-General Mark Dreyfus — a man who was later formally notified of the full persecution and took no action — while engaged to an intelligence operative who was monitoring me. I marched for the right to love and be loved, while being surveilled by the person beside me.
            </p>
            <div className="border-l-2 border-rose-700/50 pl-6 my-6">
              <p className="text-zinc-100 italic">
                "You did not beg. You did not force it. You did not collapse into the arms of the wrong person just to feel something. You held the standard even when holding it cost you everything. You did not know it then, but that decision was not loneliness. That was precision. That was the divine hand selecting you from the crowd and marking you for something the ordinary process cannot produce. You did not ruin your love story. You protected it."
              </p>
              <p className="text-zinc-500 text-sm mt-2 font-mono">Joseph Bill — video transcript, received 1 May 2026</p>
            </div>
            <p className="text-zinc-300">
              I did not ruin my love story. The state attempted to destroy it by sending operatives into it. What I gave — the faithfulness, the vulnerability, the genuine love — was real. What was returned was a constructed deception backed by government resources. That distinction matters. The wound is real. The love I was capable of was also real. Both things are in the record.
            </p>
          </section>

          <section>
            <h2 className="text-rose-400/80 text-xs uppercase tracking-widest font-mono mb-6 not-prose">III. The Pattern That Must Be Named — And Then Broken</h2>
            <div className="border-l-2 border-rose-700/50 pl-6 my-6">
              <p className="text-zinc-100 italic">
                "There is a pattern that has been running in your love life that you have not fully named yet. And unnamed patterns don't break. They repeat. They dress themselves in different faces, different seasons, different circumstances, but the root remains."
              </p>
              <p className="text-zinc-500 text-sm mt-2 font-mono">Joseph Bill — video transcript, received 1 May 2026</p>
            </div>
            <p className="text-zinc-300">
              The pattern in my love life is not a personal psychological failure. The pattern is a state strategy. It has a name: the honeytrap. It has a documented methodology: identify the target, deploy an intimate operative, extract intelligence, maintain surveillance, and when the target becomes too dangerous to contain, issue threats and escalate.
            </p>
            <p className="text-zinc-300">
              Steve Iasonidis: ASIO. Tony Ridley: SAS. Two separate intelligence streams. Two separate relationships. The same pattern in different faces. The Honeytrap Infiltration Report — a forensic analysis in this archive — documents both operations and their coordination: Layer 1 (Steve Iasonidis) providing state-infrastructure surveillance; Layer 2 (Tony Ridley) providing intimate physical access. Combined, the network had a complete picture of my private environment, communications, psychological state, and physical location.
            </p>
            <p className="text-zinc-300">
              I am naming this pattern now. Not to condemn my own heart for loving. But because the video is right: unnamed patterns repeat. And I will not allow the next relationship in my life to be shaped — consciously or unconsciously — by the damage these two operations left behind. The pattern was the state's. The damage is mine to name and refuse to pass forward.
            </p>
            <p className="text-zinc-300">
              I break agreement now with any belief that love is surveillance. I break agreement with any belief that intimacy is a data-extraction operation. I break agreement with any belief that the people who come close to me come to monitor me. I name the pattern. I take authority over it. It ends here.
            </p>
            <div className="border-l-2 border-rose-700/50 pl-6 my-6">
              <p className="text-zinc-100 italic">
                "Once you name the pattern, you take authority over it. You stop being the person the pattern happens to and you become the person who sees it, calls it by name, and refuses to let it lead anymore."
              </p>
              <p className="text-zinc-500 text-sm mt-2 font-mono">Joseph Bill — video transcript, received 1 May 2026</p>
            </div>
          </section>

          <section>
            <h2 className="text-rose-400/80 text-xs uppercase tracking-widest font-mono mb-6 not-prose">IV. The Fields of Ruth — Faithfulness When No One of Significance Appeared to Be Watching</h2>
            <div className="border-l-2 border-rose-700/50 pl-6 my-6">
              <p className="text-zinc-100 italic">
                "She went to work. She kept her head down in a field that wasn't hers, gleaning what she could from the edges of someone else's harvest. She wasn't performing for an audience. She wasn't curating an image of readiness. She was simply faithful — radically, quietly, stubbornly faithful. And in that faithfulness, she became visible to the one person who had the authority to cover her completely. Boaz didn't see her across a crowded room. He saw her in her posture, in her character, in the way she moved when she thought no one of significance was watching. She was wrong. She was always being watched, not in the way that produces anxiety, but in the way that produces destiny."
              </p>
              <p className="text-zinc-500 text-sm mt-2 font-mono">Joseph Bill — video transcript, received 1 May 2026</p>
            </div>
            <p className="text-zinc-300">
              Ruth 2:2 — <em>"Let me go to the fields and pick up the leftover grain behind anyone in whose eyes I find favour."</em>
            </p>
            <p className="text-zinc-300">
              I know what it is to glean at the margins. I built this archive living in a car with my therapy dog Crystal. Four years of homelessness. Fourteen involuntary psychiatric hospitalisations across three states — not for treatment, but for suppression. No housing. No institutional support. The NDIS, which existed to support me, deployed as a surveillance and isolation mechanism. Able Care refusing on 29 April 2026 to report a police-confirmed death threat against their own client. The isolation policy, documented and operational, designed to ensure I remained alone, monitored, and incapacitated.
            </p>
            <p className="text-zinc-300">
              Through all of it I kept gleaning. Two thousand, three hundred and four blockchain-authenticated documents. A Federal Court three-point acknowledgment. An OHCHR case: UR/UST/23/AUS/17. A mandatory criminal proceeding — Troy charged with threats to kill, 21 April 2026 — the first legal forum in thirty-five years that cannot refuse my testimony.
            </p>
            <p className="text-zinc-300">
              I gleaned when the field was hostile. I gleaned when the surveillance was watching. I gleaned when no human institution saw the value of what I was collecting. Four hundred and fifty-three thousand, eight hundred and eighty-two people later downloaded the harvest.
            </p>
            <p className="text-zinc-200 font-medium">
              I thought no one of significance was watching. Ruth 2:12 says I was wrong: <em>"May the LORD repay you for what you have done. May you be richly rewarded by the LORD, the God of Israel, under whose wings you have come to take refuge."</em>
            </p>
          </section>

          <section>
            <h2 className="text-rose-400/80 text-xs uppercase tracking-widest font-mono mb-6 not-prose">V. Jacob at the Jabbok — Refusing to Let Go Without the Blessing</h2>
            <div className="border-l-2 border-rose-700/50 pl-6 my-6">
              <p className="text-zinc-100 italic">
                "Jacob wrestled with the angel until the breaking of dawn. He refused to let go. He walked away limping, but he walked away renamed. He did not receive his new name at the beginning of his journey. He received it at the end of the wrestling. Your new name — the one that carries the identity of who you are in this next season — is given after the struggle, not before it. You don't enter this alignment as the person you were at the start of the battle. You enter it as the one who refused to let go until the blessing came."
              </p>
              <p className="text-zinc-500 text-sm mt-2 font-mono">Joseph Bill — video transcript, received 1 May 2026</p>
            </div>
            <p className="text-zinc-300">
              I have a medical record documenting clinical death. Survival probability: 2.87%. I came back. I did not come back the same person. The fourteen hospitalisations, the years in a car, the abuser with a court order, the operative who hunted me across three states — all of it was the wrestling. I am limping. The archive is the limp and the testimony simultaneously.
            </p>
            <p className="text-zinc-300">
              The video says Jacob declared from a position of exhaustion: <em>"I will not let you go unless you bless me."</em> That is not strength. That is desperation that refuses to become surrender. I understand this from the inside. I have said this declaration in hospital beds, in a car park, in the process of producing documents that no institution wanted to receive. I will not release. The blessing has been coming the whole time. Four hundred and fifty-three thousand downloads is the beginning of it made visible.
            </p>
            <p className="text-zinc-300">
              Jacob was renamed Israel — <em>one who wrestles with God and prevails</em> — after the struggle, not before it. The name Barran Dodger was not given at the start. It was earned in the field, in the archive, in the survival of what should have killed me. The covenant partner who comes now does not come to someone at the beginning of the story. They come to the one who wrestled through the night and is standing at dawn, renamed and ready.
            </p>
          </section>

          <section>
            <h2 className="text-rose-400/80 text-xs uppercase tracking-widest font-mono mb-6 not-prose">VI. Excavation — What These Seasons Were Actually Doing</h2>
            <div className="border-l-2 border-rose-700/50 pl-6 my-6">
              <p className="text-zinc-100 italic">
                "God was not taking things from you. He was taking things out of you. The need for constant validation. The reflex to shrink. The agreement you made with loneliness that said, 'This is just how it is for me.' Every single layer that came off in those hard seasons was not loss. It was liberation. It was God removing the interference so that when this person finally arrives, there is nothing standing between your spirit and theirs. Nothing clouding the signal. Nothing distorting the frequency."
              </p>
              <p className="text-zinc-500 text-sm mt-2 font-mono">Joseph Bill — video transcript, received 1 May 2026</p>
            </div>
            <p className="text-zinc-300">
              The video describes excavation: an archaeologist removing sediment layer by layer, not because the sediment was wrong to accumulate, but because what was underneath was always more valuable than anything on top of it. This metaphor is precise for me. The persecution did not add things to my life. It removed them. The housing, the finances, the relationships, the institutional standing, the professional identity, the psychiatric freedom — all stripped away. And what remained, in the documented record, was the irreducible core: the testimony, the evidence, the capacity to love, the refusal to break.
            </p>
            <p className="text-zinc-300">
              The video says: <em>"The intensity that you've been told is too much, that is anointing. The depth that people have found overwhelming, that is capacity. The way you feel things to a degree that leaves others behind, that is the cost of being someone who was built to carry more than average."</em>
            </p>
            <p className="text-zinc-300">
              Thirty-five years of institutions have told me I was too much. Fourteen involuntary hospitalisations are fourteen institutional attempts to call what I carry a disorder rather than a capacity. The archive is the answer: what they called disorder produced two thousand, three hundred and four documents, half a million downloads, an OHCHR case, and a mandatory court proceeding. That is not disorder. That is what the video calls anointing made visible through the evidence.
            </p>
            <div className="border-l-2 border-rose-700/50 pl-6 my-6">
              <p className="text-zinc-100 italic">
                "The person heaven is sending is not looking for the edited version. They were not designed to connect with the performance. They were designed specifically, intentionally, by divine blueprint to receive the unedited you — the full frequency, the one you've been afraid to broadcast."
              </p>
              <p className="text-zinc-500 text-sm mt-2 font-mono">Joseph Bill — video transcript, received 1 May 2026</p>
            </div>
            <p className="text-zinc-300">
              The archive is the unedited version. Every document, every audio recording, every court order, every police slip, every intervention order, every blockchain timestamp — the unedited version, permanently published, downloaded by half a million people. My Boaz does not need the edited version. The unedited version has already reached the world.
            </p>
          </section>

          <section>
            <h2 className="text-rose-400/80 text-xs uppercase tracking-widest font-mono mb-6 not-prose">VII. Who Is Coming — And Why They Are Different From Everyone Before</h2>
            <p className="text-zinc-300">
              I am expecting someone new.
            </p>
            <p className="text-zinc-300">
              Not an ASIO operative. Not an SAS honeytrap. Not someone connected to the network of named perpetrators — Bill Shorten, Sukhi Tear, Houd Meraby, Philip Glass, the infrastructure that surrounded Steve Iasonidis and Tony Ridley. Someone who found the archive the way four hundred and fifty-three thousand people found it: by being drawn to it, without instruction, without assignment, without an intelligence brief.
            </p>
            <div className="border-l-2 border-rose-700/50 pl-6 my-6">
              <p className="text-zinc-100 italic">
                "The same furnace that felt like it was destroying you was actually doing something precise. It was calibrating you, matching your temperature, because the one who is coming cannot be someone who was never tested, never broken, never forced to choose between what was easy and what was true. They need to know the weight of what you've carried — not because you'll burden them with it, but because they've carried something comparable, and that shared understanding becomes the foundation of something unshakeable. Two people refined by fire don't build something fragile together. They build something that has already been tested before it was assembled."
              </p>
              <p className="text-zinc-500 text-sm mt-2 font-mono">Joseph Bill — video transcript, received 1 May 2026</p>
            </div>
            <p className="text-zinc-300">
              I know what this person has been through because the video describes the calibration: they have been through a fire comparable in weight to mine. Not identical — the archive is specific to me and to the Australian institutional apparatus deployed against me. But comparable in the category of endurance. They know what it is to be underestimated. They know what it is to carry something that institutions could not contain or categorise. They have been tested and they held.
            </p>
            <p className="text-zinc-300">
              Ruth 3:11 — Boaz to Ruth: <em>"All the people of my town know that you are a woman of noble character."</em> He named her publicly before he named her as his. My Boaz will read the archive — or know it, or feel the resonance of it — and not flinch. They will see the Magistrates Court intervention order against Steve Iasonidis and understand it as evidence of what I survived, not evidence of what I invited. They will read the documented death threat from Tony Ridley — <em>"You will be sacrificed"</em> — and understand it as the operational record of a man who feared what I was building, not a verdict on who I am.
            </p>
            <p className="text-zinc-300">
              Proverbs 18:22 — <em>"He who finds a wife finds what is good and receives favour from the LORD."</em> The video quotes this and adds the clarification: it does not say <em>he who deserves</em>, it does not say <em>he who has never failed</em>. It says <em>he who finds</em>. The favour is attached to the assignment. And the assignment over my life — OHCHR UR/UST/23/AUS/17, the mandatory court proceeding, the 492,544 downloads, the Genesis 50:20 sequence — has not been revoked.
            </p>
          </section>

          <section>
            <h2 className="text-rose-400/80 text-xs uppercase tracking-widest font-mono mb-6 not-prose">VIII. The Kingdom Purpose — Why the Enemy Fought This So Hard</h2>
            <div className="border-l-2 border-rose-700/50 pl-6 my-6">
              <p className="text-zinc-100 italic">
                "This alignment, this person, this love that is coming — it is a partnership. A covenant partnership. And covenant partnerships in the kingdom are not designed for the comfort of the individuals within them. They are designed for the advancement of something larger than both of them. What you carry in one hand and they carry in the other, when joined, will become something that neither of you could have lifted alone. This is why the enemy has fought this alignment so hard. He is not afraid of your happiness. He is afraid of your fruitfulness."
              </p>
              <p className="text-zinc-500 text-sm mt-2 font-mono">Joseph Bill — video transcript, received 1 May 2026</p>
            </div>
            <p className="text-zinc-300">
              This is why it was Steve Iasonidis. This is why it was Tony Ridley. This is why the isolation policy was operational. This is why Able Care refused to report the death threat. This is why Troy stood at the front of my home and threatened my life. The enemy was not afraid of my happiness. He was afraid of my fruitfulness.
            </p>
            <p className="text-zinc-300">
              The archive reached half a million people without a publisher, without institutional support, without a PR campaign, without any resource the state had not already stripped from me. That is the fruitfulness the enemy was trying to prevent. And the covenant partner who stands beside me in the next season does not just share a life. They compound the impact. What I carry in documentation, in testimony, in the legal record now before a mandatory court, and what they carry — their own refined, tested, unedited self — joined together, becomes something the kingdom of darkness cannot easily contain.
            </p>
            <p className="text-zinc-300">
              Boaz and Ruth produced Obed. Obed produced Jesse. Jesse produced David. David's lineage produced Jesus. One covenant, made at the margins of a field, by a man who saw a widow gleaning and recognised her faithfulness — that covenant became the line through which world redemption was carried.
            </p>
            <p className="text-zinc-300">
              <em>"Every delay, every detour, every almost — understand that the resistance is not evidence of abandonment. It is evidence of significance."</em> — Joseph Bill
            </p>
            <p className="text-zinc-300">
              The significance of what I am carrying is documented. The resistance has been proportional to it. The covenant partner who comes now comes knowing both.
            </p>
          </section>

          <section>
            <h2 className="text-rose-400/80 text-xs uppercase tracking-widest font-mono mb-6 not-prose">IX. The Declaration</h2>
            <div className="border-l-2 border-rose-700/50 pl-6 my-6">
              <p className="text-zinc-100 italic">
                "God sets the lonely in families."
              </p>
              <p className="text-zinc-500 text-sm mt-2 font-mono">Psalm 68:6</p>
            </div>
            <div className="border-l-2 border-rose-700/50 pl-6 my-6">
              <p className="text-zinc-100 italic">
                "You intended to harm me, but God intended it for good — to accomplish what is now being done, the saving of many lives."
              </p>
              <p className="text-zinc-500 text-sm mt-2 font-mono">Genesis 50:20</p>
            </div>
            <p className="text-zinc-300">
              The video closes with a declaration. I am speaking mine here, grounded in the specific documented record of this life:
            </p>
            <div className="bg-zinc-900/60 border border-rose-900/40 rounded-xl p-6 my-8">
              <p className="text-zinc-100 leading-relaxed">
                I, Dr. Richard William McLean — ABN 78 833 496 164, Barran Dodger — release the need to earn what God has already given me.
              </p>
              <p className="text-zinc-100 leading-relaxed mt-4">
                I break agreement with every lie that Steve Iasonidis's abuse planted — that love is surveillance, that intimacy is a data operation, that the person beside me has an intelligence brief.
              </p>
              <p className="text-zinc-100 leading-relaxed mt-4">
                I break agreement with every wound that Tony Ridley's three-state hunt inflicted — that getting close means getting threatened, that vulnerability is a target, that the man who says "I will sacrifice you" represents anything about my worth.
              </p>
              <p className="text-zinc-100 leading-relaxed mt-4">
                I refuse to call something love if it is only wearing love's clothes. I know what love is built to look like. And I will wait for the real thing — not from pride, but from clarity.
              </p>
              <p className="text-zinc-100 leading-relaxed mt-4">
                I call in the alignment heaven has been preparing. I receive it without shrinking, without performing, without fear. I am known completely. I am loved completely. I step into this season as my full self — unedited, unafraid, and ready.
              </p>
              <p className="text-zinc-100 leading-relaxed mt-4">
                My Boaz is not an aspiration. They are a documented inevitability. The pattern of Ruth is established. The harvest is gleaned and visible. The field is open. And I will be standing in my truth when they arrive — because I have been standing in my truth for thirty-five years, and I am not stopping now.
              </p>
              <p className="text-zinc-100 font-semibold leading-relaxed mt-4">
                What is mine will find me. What is ordained will arrive. The season of shrinking is over.
              </p>
            </div>
            <div className="border-l-2 border-rose-700/50 pl-6 my-6">
              <p className="text-zinc-100 italic">
                "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God."
              </p>
              <p className="text-zinc-500 text-sm mt-2 font-mono">Ruth 1:16 — what I am waiting to hear</p>
            </div>
            <p className="text-zinc-400 text-sm mt-10 font-mono border-t border-zinc-800 pt-6">
              Dr. Richard William McLean · ABN 78 833 496 164 · Barran Dodger<br />
              1 May 2026 · barrandodger.com · OHCHR Case UR/UST/23/AUS/17<br />
              Steve Iasonidis — Magistrates Court Case No. L12151974 (domestic violence, intervention order)<br />
              Tony Ridley — documented death threats across three states: "You will be sacrificed"<br />
              Federal Court Acknowledgment — Scott Tredwell, 27 March 2023<br />
              NSW Police — Troy charged, threats to kill, 21 April 2026<br />
              Sparked by: Joseph Bill — prophetic video, received 1 May 2026
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}
