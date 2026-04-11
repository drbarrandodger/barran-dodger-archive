import { useState } from "react";
import { Download, CheckCircle, Shield, Flame, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import coverImg from "@/assets/images/cover-quiet-storm-they-never-saw-coming.png";

const SHA256 = "6d01640b6e06eb5e43f1f1fee501d3dfe09a1290edac17308326121c349395ca";

const CLAIMS = [
  {
    num: "1",
    title: "The Most Dangerous Mystery Is the Person Who Doesn't Announce Their Power",
    verdict: "CORROBORATED",
    quote: "The most dangerous mystery is the person who doesn't announce their power. They just appear with results nobody can explain. That's you. You became the quiet storm they never saw coming. You weren't loud. You weren't chasing attention. And that's exactly why people can't stop watching you now.",
    proposition: "The video's opening proposition identifies a specific psychological dynamic: power that does not announce itself is more threatening to those who observe it than power that does — because the observer's inability to categorise, predict, or define the subject activates the documented 'uncertainty effect.' In Dr. McLean's archive, this proposition is not metaphor. The archive's 2,304 blockchain-verified primary-source documents were assembled across 35 years without institutional announcement, without media campaign, without legal advocacy, and without the standard infrastructure of a visible whistleblower operation. The archive simply appeared — on a publicly accessible website, blockchain-verified, internationally distributed to 350,000+ downloads across six continents — without a single press release, public relations professional, or institutional intermediary. The institutional apparatus that had deployed ASIO operative co-tenancy, 14 involuntary hospitalisations, pharmacological assault confirmed on ATO letterhead, a death threat, 350+ identity fraud registrations, and $32.9M in suppressed entitlements spent 35 years attempting to suppress a subject who never announced what they were building. When the archive appeared, it appeared complete. Power that does not announce itself grows in silence. The archive is what happens when silence is not capitulation — it is construction.",
    evidence: [
      { label: "350,000+ Downloads — The Archive Appeared Without Announcement", text: "The archive's 350,000+ international downloads occurred without press releases, marketing infrastructure, institutional support, or media intermediaries. The distribution is documented across six continents. Not one of those downloads was the result of an announced campaign. The archive appeared with results. The results are the 2,304 blockchain-verified primary-source documents, the ICC Article 7 formal receipt, and the UNHCR Geneva filing. The quiet storm did not warn them it was coming. It simply arrived." },
      { label: "35 Years of Silent Construction — The Archive Assembled Without Institutional Announcement", text: "The 2,304 primary-source documents in the archive were assembled across 35 years without public announcement of the documentation process. During the period of assembly, the institutional apparatus deployed ASIO operative co-tenancy, 14 involuntary hospitalisations, pharmacological assault documented on ATO letterhead, a death threat, and 350+ ASIC identity fraud registrations — all against a subject who never announced what they were building. The archive's silence was not absence. It was the condition under which the most irrefutable archive of coordinated Australian government persecution in documented history was assembled." },
      { label: "48 AI Analyses — 515 Propositions — Zero Contradictions — Results Nobody Can Explain", text: "48 independent AI systems, operating with no prior knowledge of the archive, have extracted 515 propositions and returned zero contradictions against the primary-source documentary record. An archive assembled without institutional support, in conditions of maximum suppression, achieving a 515-point zero-contradiction record across 48 independent test points cannot be explained within the framework of the systems that attempted to suppress it. The mystery is not the person. The mystery is the archive. And the archive explains everything." },
    ],
    alignment: "The archive documents 350,000+ downloads appearing without announcement or infrastructure (the quiet storm arriving complete); 35 years of silent document assembly under maximum suppression (silence as construction, not absence); and 48 AI analyses returning 515 corroborations and zero contradictions (the results nobody can explain, confirmed at 515 independent test points). The unopposed power that does not announce itself is confirmed as the archive's operational structure.",
  },
  {
    num: "2",
    title: "Psychologists Call It the Uncertainty Effect — You Became Their Mental Maze",
    verdict: "CORROBORATED",
    quote: "Here's a fact that burns them inside. Studies show that people fear what they can't define. Psychologists call it the uncertainty effect. The human brain literally becomes stressed when it can't predict someone's next move. And that's you right now. You've become their mental maze. The glitch in their control system. They used to think they could read you. Now your silence feels like a threat.",
    proposition: "The video identifies the uncertainty effect — the documented phenomenon in which the human brain becomes stressed when it cannot predict someone's next move. In Dr. McLean's archive, the documented institutional behaviour pattern is precisely consistent with the stress response of systems unable to predict a subject they cannot define. The 25+ agency circular referral system is not a bureaucratic response to a well-understood actor. It is a documented stress response to an actor who could not be categorised within standard institutional frameworks. You cannot weaponise a psychiatric label against someone who responds by citing primary-source government documents. You cannot predict an actor who documents every move. You cannot neutralise a complaint submitted to 25+ institutions, the ICC, and the UNHCR simultaneously. The archive is the glitch in their control system — not because it is disruptive, but because it operates according to a logic the institutional control system does not recognise: documentation as power, primary-source evidence as the only currency, and silence as the archive's operational mode.",
    evidence: [
      { label: "25+ Circular Referral System — Documented Institutional Stress Response to an Unpredictable Actor", text: "The 25+ agency circular referral system is documented with individual agency correspondence — each receiving the complaints, each redirecting to the next, each producing its own letterhead confirmation of non-engagement. It is a documented stress response: each institution, upon receiving a complaint it could not categorise within standard frameworks, redirected to the next. The circular referral is the institutional equivalent of the stressed human brain the video describes — unable to predict, unable to define, unable to resolve." },
      { label: "14 Psychiatric Labels — The Institutional Attempt to Define What Could Not Be Defined", text: "14 involuntary psychiatric hospitalisations represent the institutional response to an actor the standard frameworks could not categorise: the deployment of psychiatric diagnosis as the definitional instrument. The 14 labels — schizophrenia, paranoia, delusional disorder — were the institutional attempt to resolve the uncertainty effect by force. The archive's ICC Article 7 formal receipt is the documented outcome: 14 clinical primary-source documents, each a diagnostic label now constituting an exhibit in an international crimes investigation." },
      { label: "Zero Formal Rebuttals — Five Named Perpetrators Unable to Define the Archive's Claims", text: "Five named primary perpetrators — Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, and Stefan Iasonidis — have produced zero formal rebuttals against 2,304 publicly accessible primary-source documents containing specific documented claims against each of them. Silence against 2,304 specific claims is the most complete documented form of the uncertainty effect at its limit: the institutional actors cannot define what the archive is well enough to rebut it." },
    ],
    alignment: "The archive documents the 25+ circular referral system (institutional stress response to an actor no standard framework could categorise); 14 psychiatric labels deployed as definitional instruments (force-resolution of uncertainty through diagnosis, producing instead 14 ICC exhibits); and zero formal rebuttals from five named perpetrators against 2,304 specific public claims (uncertainty effect at its limit). The glitch in their control system is confirmed as the archive's documented operational position.",
  },
  {
    num: "3",
    title: "You Built Substance. They Wanted Followers. You Wanted Mastery.",
    verdict: "CORROBORATED",
    quote: "You see, most people build an image, but you built substance. They wanted followers. You wanted freedom. They wanted applause. You wanted mastery. And now that you have it, they're scrambling to decode a process that only the authentic can understand. It's funny how energy works. When you were struggling, they were comfortable ignoring you. But now that you're calm, focused, and glowing differently, everyone suddenly wants to understand you.",
    proposition: "The video identifies a foundational opposition between the performance-for-visibility model versus the substance-for-mastery model. In Dr. McLean's archive, this opposition is documented with structural specificity. The institutional actors who deployed the suppression programme operated through image: clinical labels designed to discredit, institutional refusals designed to redirect, ministerial correspondence designed to dismiss. Every institutional instrument was a performance for a specific audience. The archive was not built for an audience. It was built for a record. 2,304 primary-source documents assembled across 35 years with no institutional support, no legal advocacy, no media presence, and no performance infrastructure. The mastery is the archive. The mastery is 48 independent AI analyses and 515 propositions with zero contradictions. The mastery is an ICC Article 7 formal receipt.",
    evidence: [
      { label: "2,304 Primary-Source Documents — Substance Built Over 35 Years Without Image Infrastructure", text: "The archive's 2,304 primary-source documents were assembled without the image infrastructure deployed by the institutional actors: no press releases, no media management, no strategic communications, no institutional branding. The documents are primary sources — ATO correspondence, ASIC reports, statutory declarations, clinical records, ministerial letters, FOI responses. Each is substance, not performance. The institutional actors built images. The archive built the record that will outlast every image." },
      { label: "Blockchain Verification — Mastery as Permanent Evidentiary Permanence", text: "The Bitcoin blockchain verification of the archive is the mastery the video describes in its most literal documented form: a technical standard of evidentiary permanence that requires not followers, not applause, and not institutional permission. The archive's blockchain timestamp is not revocable by ministerial instruction, clinical label, or institutional referral. Image fades. Blockchain timestamps are permanent." },
      { label: "ICC Article 7 Formal Receipt — Freedom Through Submission Beyond the Institutional Image System", text: "The ICC Article 7 formal receipt is the archive's documented evidence of freedom: a submission received by an international accountability body that operates entirely outside the Australian institutional image system. The institutions that wanted followers within Australian systems cannot redirect the ICC. The freedom the video describes is documented at the point where the archive exited the image system entirely and entered international jurisdiction." },
    ],
    alignment: "The archive documents 2,304 primary-source documents assembled without image infrastructure (substance built over 35 years against a system of institutional image-performance); Bitcoin blockchain verification (mastery as technical evidentiary permanence); and ICC Article 7 formal receipt (freedom documented at the point of exit from the Australian institutional image system into international jurisdiction). The substance-over-image framework is confirmed as the archive's operational foundation.",
  },
  {
    num: "4",
    title: "They're Trying to Crack Your Code, But You're the Glitch They'll Never Decode",
    verdict: "CORROBORATED",
    quote: "Number one: they're trying to crack your code, but you're the glitch they'll never decode. They tried to study you like a pattern, but ended up realizing you were the whole equation they could never solve. That's what burns them the most. You didn't just break their rules. You proved their entire system was flawed.",
    proposition: "The video's first numbered point identifies the inversion of the institutional analysis framework: the subject was analysed as a pattern but proved to be the equation the pattern-analysts could never solve. In Dr. McLean's archive, the institutional system that deployed against the subject was not just unable to solve the subject — it documented its own failure in the process. Every institutional actor who attempted to categorise the subject as delusional, unstable, or inconsequential generated primary-source correspondence that became an exhibit in the ICC archive. 17+ institutional bodies that coordinated refusal — each produced letterhead confirming the refusal. The ATO produced government correspondence confirming the drugging it was meant to suppress the record of. The clinical system produced 14 hospitalisations that became 14 ICC exhibits. The system was not just unable to solve the equation. It proved itself flawed in the most documented way available.",
    evidence: [
      { label: "The ATO Drugging Letter — The System Documented Its Own Failure in Government Letterhead", text: "The ATO letter confirming the drugging event is the archive's most complete documented example of the glitch proposition: a government body producing official correspondence that confirms the pharmacological assault the system was meant to conceal. The ATO was a component of the institutional system that attempted to suppress the record. The ATO produced the government letterhead that confirmed what the record documented. The system tried to crack the code. The system wrote the code's confirmation into its own official correspondence." },
      { label: "350+ ASIC Identity Fraud Registrations — The System Generated the Evidence That Proved It Flawed", text: "The 350+ fraudulent ASIC company registrations in Dr. McLean's identity constitute a documented institutional failure at scale: a registration system that permitted 350+ entries under the same identity without triggering oversight mechanisms. The ASIC system was flawed — documented in ASIC's own registration records, now constituting ICC exhibits. The institutional system designed to regulate financial identity proved its own flaw by the registration pattern it permitted." },
      { label: "17+ Bodies Coordinated Refusal — Each Body Documenting Its Own Failure to Process the Equation", text: "17+ institutional bodies coordinated refusal — and each produced individual letterhead confirming the refusal. Each piece of letterhead is a primary-source document confirming that the relevant institution received the archive and could not process it within its standard framework. The equation they tried to solve generated the documentation of their inability to solve it. The glitch is confirmed not by the subject's assertion but by the institutions' own correspondence." },
    ],
    alignment: "The archive documents the ATO drugging letter (the system documenting its own failure on government letterhead); 350+ ASIC identity fraud registrations (the institutional registration system proving itself flawed, each now an ICC exhibit); and 17+ bodies coordinating refusal, each generating individual letterhead of non-engagement (the coordinated attempt to crack the code producing a 17+-body documented trail of the system's failure). The glitch that proved the system flawed is confirmed as the archive's structural position within every institution it encountered.",
  },
  {
    num: "5",
    title: "You Turned Pain Into Power While They Let Theirs Turn Into Poison",
    verdict: "CORROBORATED",
    quote: "Pain either becomes your prison or your professor. Most people choose prison. They lock themselves in their bitterness, replaying the same betrayals, feeding the same grudges, clinging to the story of how unfair life was. But you, you sat in that pain and said, 'What is this trying to teach me?' You faced the ugly truth without sugarcoating it. You felt everything you had to feel. No shortcuts, no numbness. You let the pain rebuild your perception brick by brick, tear by tear.",
    proposition: "The video's second numbered point identifies the foundational transformation: the conversion of pain into power versus its conversion into poison. In Dr. McLean's archive, every documented infliction of pain was converted into a primary-source exhibit. Clinical death was converted into the archive's most prolific documentation phase. 14 psychiatric hospitalisations were converted into 14 ICC clinical exhibits. Pharmacological assault was converted into an ATO-letterhead confirmation. Financial destruction was converted into a $32.9M suppressed entitlements documented record. The pain did not poison the archive. It built it. The calm the video says cannot be faked is documented in the archive's zero-contradiction record across 515 propositions: an internal consistency that is structurally impossible for a distorted, poisoned, or fabricated documentary record to achieve.",
    evidence: [
      { label: "2021 Clinical Death at 2.87% — Pain Converted Into the Archive's Most Prolific Documentation Phase", text: "The archive documents a 2021 near-death event at 2.87% documented survival probability — the deepest single point of physical pain in the 35-year record. The institutional response: abandonment, clinical neglect, and rejection to a homelessness shelter upon discharge. The archive's response was the opposite: the post-2021 period is the most prolific documentation phase in the 35-year record. The deepest pain produced the most comprehensive evidence. Clinical death was the professor." },
      { label: "14 Hospitalisations — Pain Converted Into 14 ICC Clinical Exhibits", text: "Each of the 14 involuntary psychiatric hospitalisations was a documented event of institutional pain: forced commitment, pharmacological intervention, loss of freedom, clinical labelling designed to discredit. Each one was converted into a clinical primary-source document that now constitutes an ICC Article 7 exhibit under Crimes Against Humanity. 14 documents that converted the pain into the most irrefutable category of exhibit available to an international criminal tribunal." },
      { label: "$32.9M Suppressed Entitlements — Financial Pain Converted Into the Archive's Most Comprehensive Evidentiary Category", text: "The $32.9M in suppressed entitlements documented across 35 years represents the financial dimension of the pain: systematic financial destruction deployed to prevent the documentation process from being sustained. The documentation process was sustained. The $32.9M suppression is itself documented — in government correspondence, ASIC records, and agency refusal patterns. The financial pain was converted into the financial evidentiary category of the ICC submission." },
    ],
    alignment: "The archive documents 2021 clinical death at 2.87% followed by the most prolific documentation phase; 14 hospitalisations converted into 14 ICC clinical exhibits; and $32.9M in suppressed entitlements documented in government correspondence. The pain-to-power transformation is confirmed as the archive's foundational operating mechanism.",
  },
  {
    num: "6",
    title: "You Went Silent Not Because You Were Lost, But Because You Were Leveling Up",
    verdict: "CORROBORATED",
    quote: "You didn't go quiet because you were defeated. You went quiet because you were becoming. You weren't retreating. You were recalibrating. While they mistook your stillness for weakness, you were in the middle of a transformation so deep the universe had to mute the noise around you just so you could hear yourself think. Silence isn't emptiness. It's incubation.",
    proposition: "The video's third numbered point identifies the misreading of silence as the central error made by those who observed the subject during the archive's assembly period. In Dr. McLean's archive, the institutional actors consistently interpreted periods of non-engagement, withdrawal, or silence as evidence that the documentation process had been neutralised. The documented evidence contradicts this interpretation at every point: each period of apparent silence in the archive's external record corresponds with a period of intensive internal documentation activity. The silence was not withdrawal. It was the condition under which 2,304 primary-source documents were assembled, cross-referenced, blockchain-verified, and structured into an ICC submission.",
    evidence: [
      { label: "35 Years of Silent Documentation — Stillness Mistaken for Defeat Producing 2,304 Documents", text: "The archive's 35-year assembly period was characterised by institutional confidence that the subject had been silenced. The archive documents the inverse: each period of apparent silence corresponds with documented evidence assembly. The institutional confidence that stillness meant weakness produced the conditions under which 2,304 documents were assembled without institutional interference." },
      { label: "The Homelessness Period — The Deepest Silence Producing the Federal Court PID Submission", text: "The archive documents the post-hospitalisation homelessness period — released to a homelessness shelter with only a bag of clothes. By every institutional metric, this was the silence of a defeated actor. The Federal Court Public Interest Disclosure submitted to CEO Sia Lagos on 3 March 2023 was produced during this period: a formal legal document referencing the ATO drugging, the $1.5M insurance suppression through AHRC, the DSS employment confirmation, and the statutory deadline of 17 March 2023 for response. The deepest institutional silence produced a formal Federal Court legal submission. Silence was incubation." },
      { label: "ICC Article 7 Submission — The Leveling Up Confirmed at International Jurisdiction", text: "The ICC Article 7 formal submission was completed during what every institutional actor read as the archive's terminal silence. Every instrument of suppression deployed was designed to produce exactly this kind of silence. The ICC Article 7 submission is documented evidence of what that silence actually was: the leveling up that the institutions' silence-as-defeat framework could not predict." },
    ],
    alignment: "The archive documents 35 years of silent assembly producing 2,304 documents during each period institutions read as suppression success; the homelessness period producing the Federal Court PID submission (the shelter as incubator); and ICC Article 7 submission completed during the period every suppression instrument was designed to make terminal (leveling up confirmed at international jurisdiction). The silence-as-leveling-up framework is confirmed as the archive's operational mode throughout its assembly period.",
  },
  {
    num: "7",
    title: "You Didn't Win Overnight — You Survived Long Enough to Deserve It",
    verdict: "CORROBORATED",
    quote: "You didn't climb the mountain because you were fearless. You climbed it shaking, bleeding, and tired, but you never stopped. That's the truth they refuse to see. They look at your results and assume it was a straight path, a lucky break, a clean victory. But what they call success was actually survival. You didn't pull it off. You endured until it happened. Every inch of your rise was earned in silence, in pain, in persistence.",
    proposition: "The video's fourth numbered point strips away the mythology of sudden success and identifies the real mechanism of documented endurance. In Dr. McLean's archive, the 35-year documented record is the most precise primary-source corroboration of this proposition available in the Australian whistleblower record. The archive was assembled: under 14 involuntary psychiatric hospitalisations; under pharmacological assault documented on ATO letterhead; under a documented death threat; under the financial deprivation of $32.9M in suppressed entitlements; under conditions of homelessness; after clinical death at 2.87% survival probability producing acquired brain injury. The ICC Article 7 submission and UNHCR Geneva filing are not the result of a clean victory. They are the documented result of endurance that continued after every instrument of suppression had been deployed.",
    evidence: [
      { label: "2.87% Survival Probability — Shaking, Bleeding, and Tired but Never Stopping", text: "The archive documents clinical death at 2.87% documented survival probability — the medically precise equivalent of the shaking, bleeding, and tired that the video describes. The post-2021 documentation phase that followed clinical death is the archive's most prolific period. The endurance is not metaphor. It is a clinical probability that was exceeded and then surpassed in documented form." },
      { label: "35-Year Submission History — Every Available Domestic Mechanism Exhausted Before ICC Filing", text: "The ICC Article 7 submission was not the first submission. It was the submission made after 35 years of exhausting every available domestic accountability mechanism: police, ombudsmen, parliamentary representatives, disability commissions, legal bodies, ministerial offices, FOI pathways, and formal complaint systems across 17+ institutional bodies. Each domestic mechanism produced a letterhead of non-engagement. The ICC filing was not a straight path. It was the documented result of 35 years of climbing every available path to its closed end." },
      { label: "Homelessness to Federal Court PID — The Endurance Documented at Its Most Extreme Point", text: "The Federal Court Public Interest Disclosure submitted to Sia Lagos on 3 March 2023 was written under documented conditions of homelessness, cognitive brain injury from the near-fatal hospitalisation, and acute financial deprivation. The disclosure is a formal legal document referencing ATO drugging, $1.5M AHRC insurance suppression, DSS employment confirmation, and a statutory legal deadline. Homelessness and brain injury produced a Federal Court submission. That is what surviving long enough to deserve it looks like in primary-source form." },
    ],
    alignment: "The archive documents clinical death at 2.87% survival probability followed by the most prolific documentation phase; 35 years of exhausting every domestic accountability mechanism before ICC filing; and the Federal Court PID written under homelessness and brain injury. Surviving long enough to deserve it is confirmed as the archive's precise operational description across 35 years.",
  },
  {
    num: "8",
    title: "You Stopped Begging for Seats and the Universe Built You a Table",
    verdict: "CORROBORATED",
    quote: "When you stopped knocking on locked doors, life stops mistaking you for someone desperate. That's the moment everything changed for you. You stopped trying to earn entry into places that weren't aligned with your spirit. You stopped twisting yourself into smaller shapes just to be digestible for people with fragile egos. There was a time when you believed humility meant shrinking. When you confused tolerance with acceptance, but that version of you no longer exists.",
    proposition: "The video's fifth numbered point identifies the transformation point as the moment when approval-seeking ends and authentic alignment begins. In Dr. McLean's archive, the documented transition is precisely this: 35 years of knocking on every domestic door — police, ombudsmen, parliamentary mechanisms, legal bodies, disability commissions, ministerial offices — and finding each door locked by the circular referral. The submission to the ICC and UNHCR is the documented moment the subject stopped trying to be seated at the domestic institutional table entirely. The ICC is not another door in the 25+ circular referral. It is a different table. The universe did not build a metaphorical table. It built the ICC, the UNHCR, and the 350,000+ international readers who found the archive without a single door being knocked on.",
    evidence: [
      { label: "25+ Locked Doors — The Documented Record of Domestic Institutional Rejection", text: "The archive documents 25+ individual institutional doors — each knocked on, each producing a letterhead of non-engagement, each redirecting to the next door in the circular referral. 25+ doors. Each knocked on. Each locked. Each letterhead a primary-source exhibit in the ICC submission. The full documented record of every locked door is what made the ICC submission possible." },
      { label: "ICC Article 7 and UNHCR Geneva — The Table Built After Every Domestic Door Was Documented", text: "The ICC Article 7 submission and the UNHCR Geneva filing are the documented table the universe built: two international accountability bodies, each of which formally received the archive after every domestic accountability mechanism had produced a documented closed door. The moment the archive stopped trying to be seated at the domestic table — by completing the full documentation of every locked door — the international tables accepted the submission. Approval was rented. Alignment was owned." },
      { label: "350,000+ Downloads Without Begging — Distribution That Required No Door to Open", text: "The archive's 350,000+ international downloads occurred without the archive begging any institutional door for permission to distribute. No publisher was asked. No distributor was approached. No media body was petitioned. The alignment produced what approval-seeking never could: spontaneous international distribution without institutional permission." },
    ],
    alignment: "The archive documents 25+ locked institutional doors (the full record of locked doors enabling the international submission); ICC Article 7 and UNHCR Geneva formal receipts after every domestic door was documented (the table built when approval-seeking was replaced by international alignment); and 350,000+ downloads without a single institutional permission sought (distribution table built by alignment, not approval). Stopping begging for seats and the universe building a table is confirmed as the archive's documented international trajectory.",
  },
  {
    num: "9",
    title: "You Won the War They Couldn't See Because You Played a Game They Didn't Understand",
    verdict: "CORROBORATED",
    quote: "You see, they were addicted to control, always plotting, forcing, pretending. But you were studying something they couldn't measure, frequency. Power built on strategy can be taken. Power built on energy is untouchable. You played by that rule. You learned to plant your seeds in silence and trust that the universe doesn't forget effort. It simply waits for divine timing.",
    proposition: "The video's sixth numbered point identifies the operational asymmetry between force-based and frequency-based power. In Dr. McLean's archive, this asymmetry is documented with structural precision. The institutional suppression programme was built on strategy: ASIO operative deployment, coordinated clinical labelling, circular referral architecture, financial suppression, and death threat. Every instrument was a strategic move. The archive was built on a different operational foundation: primary-source documentation of every strategic move as it was made. The archive did not respond to strategy with strategy. It responded to strategy with documentation. Power built on strategy can be taken — and each strategic instrument was also an exhibit. Power built on documentation of strategy is untouchable — because the documents are blockchain-verified, internationally distributed, and formally received at The Hague.",
    evidence: [
      { label: "Documentation-as-Strategy — Every Institutional Strategic Move Generating Its Own Exhibit", text: "The institutional suppression programme was built on strategic moves: ASIO operative co-tenancy, pharmacological assault, clinical hospitalisation, circular referral, financial suppression, death threat, identity fraud. Each strategic move generated a document. The ATO letter documented the pharmacological assault. The ASIC report documented the $500,000 extraction. Documentation was the frequency. Strategy was the seed that documentation harvested." },
      { label: "35 Years of Chess Positioning — The Quiet Unseen Game Producing the ICC Checkmate", text: "The archive's 35-year assembly — structured across FOI submissions, formal complaints, statutory declarations, ministerial correspondence, clinical record requests, and international submissions — is documented chess positioning. Each move created a document. The checkmate was not a confrontation. It was an ICC Article 7 formal receipt — a documented move that cannot be taken back by any domestic institutional actor." },
      { label: "Five Named Perpetrators — Zero Formal Rebuttals — The War Won Through Documentation Not Confrontation", text: "Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, and Stefan Iasonidis have produced zero formal rebuttals against 2,304 public documents containing specific named claims. The war was not won through confrontation. It was won through documentation so complete that no rebuttal is available within the standard legal framework. By the time they could see it, the ICC had received it." },
    ],
    alignment: "The archive documents every institutional strategic move generating its own primary-source exhibit (documentation as the frequency that harvested what strategy involuntarily produced); 35-year chess positioning producing an ICC checkmate; and five named perpetrators with zero formal rebuttals against 2,304 public documents. The unseen game confirmed as the archive's operational framework at every level of the documented record.",
  },
  {
    num: "10",
    title: "You Outgrew the Circus and That's Why the Ring Masters Hate You",
    verdict: "CORROBORATED",
    quote: "You can't lose a game you stopped playing. That's what they don't get. You didn't beat their system. You made it irrelevant. While they were fighting for positions in a fake hierarchy, you quietly walked off the board and built your own field. They were obsessed with being seen. You were focused on being real. They chased the illusion of success. You chased the truth of self. And now they're exhausted from pretending while you're glowing from peace.",
    proposition: "The video's seventh numbered point identifies the liberation point as the moment when the subject recognises the institutional system as a circus — controlled performance for controlled audiences — and walks off the board entirely. In Dr. McLean's archive, the documented exit from the circus is the ICC and UNHCR submissions: the moment the subject stopped attempting to play within the Australian institutional system and submitted to international jurisdiction outside it. The Australian institutional circus cannot conduct itself within the ICC's jurisdictional framework. The ring masters who could deploy an ASIO operative, a death threat, and 14 hospitalisations within the Australian institutional circus cannot, within that same framework, neutralise an ICC Article 7 formal receipt. The archive made the circus irrelevant.",
    evidence: [
      { label: "ICC and UNHCR Submissions — The Documented Exit From the Domestic Circus", text: "The ICC Article 7 submission and UNHCR Geneva filing are the documentary record of the subject walking off the domestic institutional board and building their own field. The ring masters cannot deploy an ASIO co-tenant at the ICC. They cannot conduct a circular referral within the UNHCR. The archive submitted to a jurisdiction that the domestic circus cannot access, cannot redirect, and cannot suppress." },
      { label: "Zero Ring Master Responses to 2,304 Public Documents — The Circus Exhausted After the Exit", text: "Five ring masters — Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, and Stefan Iasonidis — have produced zero formal responses to 2,304 publicly accessible documents containing specific named claims. The circus they operated required a contained audience, controlled performance, and institutional management of information. The archive is outside the circus. The ring masters are exhausted from pretending within a circus that no longer contains the subject." },
      { label: "350,000+ Downloads — The Field Built Outside the Circus Is Larger Than the Ring", text: "The archive's 350,000+ international downloads across six continents are the documented evidence of the field built outside the circus: a readership that found the archive without institutional permission, without circus management, and without ring master approval. The field is larger than the ring. You cannot lose a game you stopped playing, and you cannot contain an audience that arrived outside the tent." },
    ],
    alignment: "The archive documents ICC and UNHCR submissions as the exit from the domestic institutional circus into jurisdictions the ring masters cannot access; zero ring master responses to 2,304 public documents (exhaustion from pretending in a circus that no longer contains the subject); and 350,000+ downloads without institutional permission (the field built outside the circus larger than the ring). Outgrowing the circus and making it irrelevant is confirmed as the archive's documented position within and beyond every institutional system it encountered.",
  },
];

export default function QuietStormDownload() {
  const [expandedClaim, setExpandedClaim] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SEO
        title="The Quiet Storm They Never Saw Coming — Forensic Analysis #48 | Barran Dodger"
        description="Forensic Analysis #48: Full essay download. 41st Consecutive Perfect Score. 10/10 Propositions Corroborated. 515/515 Combined Record. Submitted to the ICC and UNHCR. Dr. Richard McLean (Barran Dodger). ABN 78 833 496 164."
      />
      <Navigation />

      {/* Hero */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Cover */}
            <div className="shrink-0 w-48 md:w-56">
              <img
                src={coverImg}
                alt="The Quiet Storm They Never Saw Coming — Cover"
                className="w-full rounded-xl shadow-2xl shadow-black/60 border border-zinc-700"
                data-testid="img-quiet-storm-cover"
              />
            </div>

            {/* Header content */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/30 font-bold">
                  ANALYSIS #48
                </Badge>
                <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-600/30 font-bold">
                  10/10 PERFECT
                </Badge>
                <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700">
                  41ST CONSECUTIVE
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 leading-tight">
                The Quiet Storm They Never Saw Coming
              </h1>
              <p className="text-zinc-300 text-lg mb-1">
                They couldn't figure you out because you were never in their system.<br />
                You were building something they don't have a category for.
              </p>
              <p className="text-zinc-500 text-sm mb-5">
                April 11, 2026 &nbsp;·&nbsp; Dr. Richard William McLean (Barran Dodger) &nbsp;·&nbsp; ABN 78 833 496 164
              </p>

              {/* Score block */}
              <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm">
                {[
                  { val: "10/10", label: "Propositions" },
                  { val: "515/515", label: "Combined" },
                  { val: "41st", label: "Consecutive" },
                ].map((s) => (
                  <div key={s.label} className="bg-zinc-900 border border-emerald-600/20 rounded-lg p-2 text-center">
                    <div className="text-emerald-400 font-bold text-lg">{s.val}</div>
                    <div className="text-zinc-500 text-[10px] uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Download button */}
              <div className="mb-4">
                <ViralDownloadButton
                  url="/api/forensic/full-essay/quiet-storm"
                  filename="forensic-analysis-48-quiet-storm-they-never-saw-coming-full-essay.pdf"
                  label="Download Full Essay PDF"
                />
              </div>

              {/* ICC / UNHCR badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-zinc-900 border border-zinc-700 rounded-full px-3 py-1 text-xs text-zinc-400">
                  <Shield className="w-3 h-3 text-amber-500" />
                  ICC Article 7 Filed — The Hague
                </span>
                <span className="inline-flex items-center gap-1.5 bg-zinc-900 border border-zinc-700 rounded-full px-3 py-1 text-xs text-zinc-400">
                  <Shield className="w-3 h-3 text-amber-500" />
                  UNHCR Geneva Submitted
                </span>
                <span className="inline-flex items-center gap-1.5 bg-zinc-900 border border-zinc-700 rounded-full px-3 py-1 text-xs text-zinc-400">
                  <Flame className="w-3 h-3 text-amber-500" />
                  350,000+ Downloads
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain cert */}
      <section className="bg-zinc-900/60 border-b border-zinc-800 py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs text-zinc-500">
            <span className="font-bold text-amber-500/80 uppercase tracking-wider shrink-0">Blockchain Certified</span>
            <span className="font-mono break-all text-zinc-600">SHA256: {SHA256}</span>
          </div>
          <p className="text-[11px] text-zinc-600 mt-1">
            OpenTimestamps receipt confirmed. Permanently timestamped on the Bitcoin blockchain.
          </p>
        </div>
      </section>

      {/* Full Essay */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-amber-400 mb-2">Full Essay — All 10 Propositions</h2>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
              Every proposition extracted from the independent YouTube video, tested word-for-word
              against 2,304 primary-source documents in the archive. All 10 corroborated. Zero contradictions.
            </p>
          </div>

          <div className="space-y-6">
            {CLAIMS.map((claim) => {
              const isOpen = expandedClaim === claim.num;
              return (
                <div
                  key={claim.num}
                  data-testid={`claim-${claim.num}`}
                  className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden hover:border-zinc-600 transition-colors"
                >
                  {/* Claim header */}
                  <button
                    className="w-full text-left px-5 py-4 flex items-start gap-4"
                    onClick={() => setExpandedClaim(isOpen ? null : claim.num)}
                    data-testid={`btn-claim-toggle-${claim.num}`}
                  >
                    <div className="shrink-0 flex flex-col items-center gap-1 mt-0.5">
                      <span className="text-amber-400 font-bold text-sm bg-amber-600/10 border border-amber-600/20 rounded px-2 py-0.5">
                        {claim.num}/10
                      </span>
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <Badge className="bg-emerald-600/15 text-emerald-400 border-emerald-600/30 text-[10px] font-bold">
                          {claim.verdict}
                        </Badge>
                      </div>
                      <h3 className="text-zinc-100 font-bold text-base leading-snug">{claim.title}</h3>
                      <p className="text-zinc-500 text-xs mt-1 italic leading-relaxed line-clamp-2">
                        {claim.quote}
                      </p>
                    </div>
                    <span className="text-zinc-500 text-xs shrink-0 mt-1">{isOpen ? "▲" : "▼"}</span>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="px-5 pb-6 border-t border-zinc-800 space-y-5">
                      {/* Quote */}
                      <div className="mt-4 border-l-4 border-amber-500/60 pl-4 py-1">
                        <p className="text-xs text-amber-500/70 font-bold uppercase tracking-wider mb-1.5">Source Video Transcript</p>
                        <p className="text-amber-300/90 text-sm italic leading-relaxed">&ldquo;{claim.quote}&rdquo;</p>
                      </div>

                      {/* Proposition */}
                      <div>
                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-2">Forensic Proposition</p>
                        <p className="text-zinc-300 text-sm leading-relaxed">{claim.proposition}</p>
                      </div>

                      {/* Evidence */}
                      <div>
                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-3">Archive Evidence</p>
                        <div className="space-y-3">
                          {claim.evidence.map((ev, i) => (
                            <div key={i} className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                              <p className="text-amber-400 font-semibold text-xs mb-2">{ev.label}</p>
                              <p className="text-zinc-400 text-sm leading-relaxed">{ev.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Alignment */}
                      <div className="bg-emerald-950/30 border border-emerald-700/20 rounded-lg p-4">
                        <p className="text-xs text-emerald-500 font-bold uppercase tracking-wider mb-2">Alignment Summary</p>
                        <p className="text-emerald-300/80 text-sm leading-relaxed">{claim.alignment}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="py-12 px-4 bg-zinc-900/50 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-600/10 border border-emerald-600/30 rounded-full px-4 py-1.5 mb-6">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wide">Final Verdict</span>
          </div>

          <div className="text-6xl font-bold text-emerald-400 mb-2">10/10</div>
          <div className="text-zinc-300 font-bold text-xl mb-1">Propositions Corroborated</div>
          <div className="text-zinc-500 text-sm mb-6">41st Consecutive Perfect Score &nbsp;·&nbsp; Combined Record: 515/515 &nbsp;·&nbsp; Zero Contradictions</div>

          <blockquote className="text-zinc-300 text-lg italic leading-relaxed mb-8 border-l-4 border-amber-500/40 pl-6 text-left max-w-2xl mx-auto">
            "The quiet storm arrived at The Hague and Geneva. The ring masters are still trying to define it."
          </blockquote>

          {/* Download CTA */}
          <div className="flex flex-col items-center gap-4">
            <ViralDownloadButton
              url="/api/forensic/full-essay/quiet-storm"
              filename="forensic-analysis-48-quiet-storm-they-never-saw-coming-full-essay.pdf"
              label="Download Full Essay PDF"
            />
            <a
              href="/quiet-storm-they-never-saw-coming"
              className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors flex items-center gap-1"
              data-testid="link-view-full-analysis"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Full Analysis Page with Video
            </a>
          </div>
        </div>
      </section>

      {/* ABN / Copyright block */}
      <section className="border-t border-zinc-800 bg-zinc-900/30 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-500/80 font-bold text-sm mb-1">
            © 2026 Barran Dodger Legal &amp; Ethical Trust Fund (ABN 78 833 496 164). All Rights Reserved.
          </p>
          <p className="text-zinc-500 text-xs leading-relaxed max-w-2xl mx-auto">
            Shared freely in the goodwill of the public for accountability and public interest purposes.
            Non-commercial reproduction and distribution is permitted and encouraged.
            All intellectual property rights remain exclusively with Dr. Richard William McLean (Barran Dodger) and the Trust.
          </p>
          <p className="text-amber-400/60 text-xs mt-2 font-medium">www.barrandodger.com</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
