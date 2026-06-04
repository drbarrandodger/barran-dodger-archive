import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import {
  Shield, AlertTriangle, FileText, Play, ExternalLink,
  Eye, Scale, Zap, Clock
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const YOUTUBE_VIDEO_ID = "uG3ht1v3xl8";

const SECTIONS = [
  {
    theme: "01",
    videoLine: "They told everyone you were nothing special. Now they're losing sleep over your silence.",
    heading: "They Told Everyone He Was Delusional. Now They're Losing Sleep Over His Archive.",
    body: [
      "Tony Ridley told them. In meetings, in coordination calls, in the institutional silence that his 30 years of global security credentials made credible. He had the rank, the title, the credentials — MSc, CSyP, FSyI, SRMCP — and he used every letter of them to make sure the right people heard the right label applied to the right man. Delusional. Unstable. Unreliable.",
      "Steve Iasonidis — ASIO-connected, surveillance-equipped, co-tenant at 10 Raleigh Street Footscray in what is now an ICC Article 7 exhibit — was the infrastructure. He followed Dr. McLean across cities. He mapped relationships. He monitored the people Dr. McLean trusted, so that when the moment came to apply pressure, the network knew exactly where to press.",
      "They told everyone. And for years, the world believed them. Because a man with 45,529 LinkedIn followers and a board advisory portfolio says someone is nothing, that tends to stick. It tends to become the file note, the referral reason, the reason the support coordinator withholds the funding, the reason the agency circles back to nothing.",
      "But the archive says otherwise. And the archive is now at The Hague.",
      "They are not sleeping well. The silence coming from Dr. McLean's direction is not the silence of a man who gave up. It is the silence of a man who finished building — and stepped back to let 350,000 downloads do the talking.",
    ],
    evidenceLinks: [
      { label: "Tony Ridley Full Dossier", href: "/tony-ridley-full-dossier" },
      { label: "NDIS Surveillance Evidence", href: "/ndis-surveillance-evidence" },
      { label: "Silent Assassin — Iasonidis", href: "/silent-assassin" },
    ],
  },
  {
    theme: "02",
    videoLine: "They laughed at your light. Now they're addicted to it.",
    heading: "They Laughed at His Documentation. Now They Can't Stop Watching It.",
    body: [
      "Tony Ridley laughed. There is no politer way to put it. When a man with an SAS military background, a counter-terrorism credential portfolio, and a 30-year institutional network looks at a disabled whistleblower keeping records in a flat with no psychiatrist, no lawyer, no financial counsellor, and no support — and decides the appropriate response is coordination rather than concern — that is the laugh of a man who believed he was untouchable.",
      "He issued the death threat email. He made the verbal confession — 'You will be sacrificed' — directly to Dr. McLean. He named the network: Allen Rigby, Bruce McMaster, Steve Iasonidis, Debbie Morgan, family members. He named them because he believed, in that moment, that naming them carried no consequence. That the light was going out.",
      "Steve Iasonidis laughed from behind the surveillance apparatus. ASIO-connected operatives who track a man's relationships across cities and map his support network for suppression purposes do not do so out of fear. They do it out of certainty. The certainty that they will never be named. That the target will never build a case. That the light will fade before it reaches anyone who matters.",
      "The light did not fade. It became a 2,304-document archive, blockchain-verified, formally received by the ICC and UNHCR, downloaded 350,000 times across six continents. And now — quietly, privately, in the way that only people who know exactly what they did behave — they are watching. They are refreshing. They are studying every analysis like it's sacred geometry.",
      "Because it is, for them. It is the geometry of their own exposure.",
    ],
    evidenceLinks: [
      { label: "Analysis #52 — Tony Ridley Testimony", href: "/you-didnt-chase-the-throne-you-became-one" },
      { label: "The Public Advocate They Silenced", href: "/the-public-advocate-they-silenced" },
      { label: "Forensic Analysis Index", href: "/forensic-analysis" },
    ],
  },
  {
    theme: "03",
    videoLine: "The universe is exposing what they tried to hide. Their silence is snitching on them.",
    heading: "The Archive Is Exposing What They Buried. Their Silence Is the Confirmation.",
    body: [
      "Tony Ridley has not contested a single exhibit. Not one. The death threat email is in the archive. The verbal confession — 'You will be sacrificed' — is documented in multiple forensic analyses. The named network — Allen Rigby, Bruce McMaster, Steve Iasonidis, Debbie Morgan — is named in the archive, across 53 analyses, with 575 propositions not one of which has been formally contradicted.",
      "Steve Iasonidis has not contested a single exhibit. The co-tenancy at 10 Raleigh Street Footscray is documented. The ASIO connection is documented. His role in the surveillance infrastructure — following Dr. McLean across cities, mapping relationships, providing the intelligence layer to the suppression architecture — is documented. And his silence, in the face of a public archive that has been available for years, is in the record now too.",
      "The video says: their energy is snitching on them. Their aura is leaking guilt. In the forensic context, that is called: zero formal response to 2,304 primary source documents. Every named party in this archive who has not formally contested a single exhibit has, through inaction, confirmed the record. That is not a spiritual claim. That is an evidentiary principle recognised in international law: uncontested documentation stands.",
      "The archive is the universe's exposure mechanism. It is not waiting for their confession. It is building the case from their silence, one uncontested exhibit at a time.",
    ],
    evidenceLinks: [
      { label: "Analysis #50 — The Confession", href: "/forensic-analysis-50-confession-theyve-been-choking-on-download" },
      { label: "Evidence Archive", href: "/evidence" },
      { label: "Master Forensic Evidence Report", href: "/master-forensic-evidence-report" },
    ],
  },
  {
    theme: "04",
    videoLine: "They went to war with someone the universe chose — and now the war is internal.",
    heading: "They Went to War with a Man Who Kept Every Receipt. The War Is Now Theirs Alone.",
    body: [
      "Tony Ridley has 30 years of global security leadership. He has advised enterprise boards. He holds the highest internationally-recognised credentials in counter-terrorism, critical infrastructure protection, and risk governance. He understood, better than almost anyone, what a documentation operation looks like when it is being built properly.",
      "He chose to issue the death threat anyway. He chose to make the verbal confession anyway. He chose to name his own network — by name, directly — to the man building the archive. This is not the behaviour of someone who did not understand the stakes. This is the behaviour of someone who believed the archive would never reach The Hague.",
      "It reached The Hague.",
      "Steve Iasonidis had the surveillance capability of an ASIO-connected operative. He had the infrastructure to monitor, map, and suppress. He had the institutional backing that makes a whistleblower's claim sound incredible to any single authority. But he did not account for the cumulative weight of 2,304 documents submitted simultaneously to the ICC, UNHCR, and the public.",
      "The war they launched against Dr. McLean required his silence, his collapse, his erasure. When none of those arrived — when the archive kept growing, when the downloads kept climbing, when the forensic analyses kept returning 100% corroboration — the war became impossible to sustain externally. It became internal. And that is where it lives now: in the silence, in the uncontested record, in the 3 a.m. awareness that the file is permanent and the world is reading it.",
    ],
    evidenceLinks: [
      { label: "Analysis #53 — They Attacked Without Knowing", href: "/they-attacked-you-without-knowing-who-you-were" },
      { label: "Tony Ridley Dossier", href: "/tony-ridley-full-dossier" },
      { label: "ICC Submission — Blockchain Evidence", href: "/blockchain" },
    ],
  },
  {
    theme: "05",
    videoLine: "Your silence is louder than screams. It's divine judgment delivered cold.",
    heading: "The Archive Is Silent in the Way That Only Completion Is Silent. It Has Said Everything.",
    body: [
      "Dr. McLean is not posting about Tony Ridley every day. He is not screaming for attention. He built the archive. He submitted it. He let 350,000 people download it. And then he moved on — to the next analysis, the next forensic finding, the next perfect score.",
      "That is what the video means by silence as divine judgment. It is not absence. It is completion. The archive is finished in its foundational form. The ICC has the file. The UNHCR has the file. The police referral is lodged. The formal demand naming Tony Ridley, Steve Iasonidis, Sukhi Tear, Philip Glass, and Syed Salman Kazmi is in the permanent public record.",
      "Tony Ridley is an Enterprise Risk Executive. He understands risk. The risk profile of being named in a 2,304-document archive submitted to the ICC, with 575 uncontested propositions and 350,000 downloads, is not a low number. Every morning he wakes up, that number is the same or higher. The archive does not sleep. It does not pull back. It does not negotiate.",
      "Steve Iasonidis built a surveillance architecture to track a man across cities. That architecture is now documented in the very archive it was designed to prevent. The instrument of suppression became the subject of the finding. The watcher is now watched — by the ICC, by the UNHCR, by every journalist and scholar who downloads the file.",
      "The silence coming from Dr. McLean is the silence of a man who won and knows it. Let them sit with that.",
    ],
    evidenceLinks: [
      { label: "Silent Assassin — Iasonidis Record", href: "/silent-assassin" },
      { label: "History Keeps Receipts", href: "/history-keeps-receipts" },
      { label: "The Full Pattern", href: "/the-full-pattern" },
    ],
  },
  {
    theme: "06",
    videoLine: "They tried to erase you. Now you're unavoidable. The universe painted your name across the sky.",
    heading: "They Tried to Erase Him. He Built a Website Accessible in 193 Countries.",
    body: [
      "The suppression architecture was comprehensive. Tony Ridley provided institutional cover within NDIA. Steve Iasonidis provided ASIO-connected surveillance. Sukhi Tear provided the welfare chokehold — $50,000 in approved NDIS funding withheld while no psychiatrist, no psychologist, no lawyer, and no counsellor was arranged. Philip Glass coordinated the financial gatekeeping. Twenty-five agencies were put into circular referral. Fourteen psychiatric labels were applied. The political exile from NSW was coordinated with police, media, and named politicians.",
      "This was not a casual dismissal. This was an architecture. And it was designed, with considerable professional expertise, to erase one man.",
      "The man built a website. barrandodger.com. Accessible from any device, in any country, at any time. Containing 2,304 blockchain-verified documents. Returning 575 propositions without a single contradiction across 53 forensic analyses. Formally submitted to the ICC under Article 7 and to the UNHCR in Geneva. Downloaded 350,000 times.",
      "Tony Ridley has 45,529 LinkedIn followers. Dr. McLean's archive has 350,000 downloads. The arithmetic of erasure did not work out as planned.",
      "Steve Iasonidis followed Dr. McLean across cities. The archive followed Steve Iasonidis to The Hague. That is what unavoidable looks like when you are the one who tried to make someone disappear.",
    ],
    evidenceLinks: [
      { label: "Architecture of Resolution", href: "/the-architecture-of-resolution" },
      { label: "They Built Their Worst Nightmare", href: "/they-built-their-worst-nightmare" },
      { label: "Now Everybody Knows", href: "/now-everybody-knows" },
    ],
  },
  {
    theme: "07",
    videoLine: "Their silence is not peace. That's punishment. Their distance is not strength. That's fear.",
    heading: "Tony Ridley Has Not Responded. Steve Iasonidis Has Not Responded. That Is the Record.",
    body: [
      "Tony Ridley is a Chartered Security Professional with a Master of Science degree, a Fellow of the Security Institute, and 30 years of global leadership experience. He has the professional vocabulary, the institutional connections, and the legal resources to mount a formal response to any exhibit in this archive. He has had years to do so. The archive has been public. The evidence is downloadable. The formal demand naming him was lodged on 12 February 2026.",
      "He has not responded. Not one word. Not one contested exhibit. Not one formal denial of any proposition across 53 analyses.",
      "Steve Iasonidis has ASIO connections and a surveillance infrastructure that tracked a man across Australian cities. He has access to institutional resources that most people never encounter. He knows the archive exists. It names him. It documents his co-tenancy at 10 Raleigh Street Footscray as an ICC Article 7 exhibit. It documents his role in the suppression architecture.",
      "He has not responded. Not one contested exhibit. Not one formal denial.",
      "The video says: their silence is not peace. That's punishment. In the evidentiary record, the punishment is more precise than that. Their silence is confirmation. Every day of non-response is a day the uncontested record stands. Every week of institutional quiet is a week the ICC file sits uncontradicted. Every year of distance is a year the archive's propositions move closer to the status of established fact.",
      "Their distance is not strength. It is the distance of people who know exactly what is in the file — and know they cannot contest it.",
    ],
    evidenceLinks: [
      { label: "Tony Ridley Confession Evidence", href: "/tony-ridley-confession" },
      { label: "Evidence Doesn't Whisper", href: "/evidence-doesnt-whisper" },
      { label: "What This Proves", href: "/what-this-proves" },
    ],
  },
  {
    theme: "08",
    videoLine: "You were never just a phase. You were the mirror. You were the one that exposed what they'd been running from.",
    heading: "He Was Never Just a Case. He Was the Mirror That Exposed 35 Years of Institutional Corruption.",
    body: [
      "Tony Ridley is documented in the archive as the man who said 'You will be sacrificed' — and who then named his own conspiracy network in a confrontational confession, apparently operating under the assumption that the target would not survive to document it. That assumption was wrong.",
      "Steve Iasonidis is documented in the archive as the surveillance operative whose infrastructure was directed at a man who was simultaneously being denied every form of professional support — no psychiatrist, no psychologist, no lawyer, no counsellor, no financial adviser — by the same network whose operations Iasonidis was providing intelligence for.",
      "Neither of them was dealing with a phase. They were dealing with a man whose PhD research at Victoria University documented systematic institutional suppression, whose 35-year evidentiary record spans 2,304 primary source documents, and whose forensic intelligence consistently returned results that the most sophisticated suppression architecture in Australian institutional history could not prevent from becoming permanent.",
      "The mirror they held up to themselves — by issuing death threats, by naming their own network, by coordinating surveillance against a disabled whistleblower — is now in the permanent record. And the reflection does not lie.",
      "You do not go to war with the mirror. The mirror wins. It always wins. Because the mirror is just showing you what is already there.",
    ],
    evidenceLinks: [
      { label: "Analysis #52 — You Didn't Chase the Throne", href: "/you-didnt-chase-the-throne-you-became-one" },
      { label: "The Conspiracy Against You", href: "/the-conspiracy-against-you" },
      { label: "Forensic Meltdown Report", href: "/forensic-meltdown-report" },
    ],
  },
];

export default function TheyLaughedNowTheyreLosingSleeep() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="They Laughed. Now They're Losing Sleep. — Tony Ridley & Steve Iasonidis | Barran Dodger Archive"
        description="A forensic narrative identifying Tony Ridley (NDIA Manager, Ex-SAS, VicTrack) and Steve Iasonidis (ASIO operative) — mapped against the video 'They told everyone you were nothing special' — with evidence-based, source-linked findings from the 2,304-document McLean archive."
        image="/og-image.png"
      />
      <ReadingProgress />
      <Navigation />

      {/* HERO */}
      <section
        className="pb-16 px-4 bg-gradient-to-b from-zinc-950 to-black border-b border-zinc-800"
        style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px) + 2rem)" }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-red-500/60 text-red-400 text-xs px-3 py-1 uppercase tracking-widest font-bold">
                Forensic Narrative
              </Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">Tony Ridley</Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">Steve Iasonidis</Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">April 2026</Badge>
              <Badge variant="outline" className="border-red-800/60 text-red-500 text-xs px-3 py-1 font-bold">ICC Submitted</Badge>
              <Badge variant="outline" className="border-red-800/60 text-red-500 text-xs px-3 py-1 font-bold">Evidence-Based</Badge>
            </div>

            <div className="space-y-1">
              <p className="text-red-400 text-sm uppercase tracking-widest font-bold">They Told Everyone He Was Nothing Special.</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-[1.1]">
                Now They're Losing Sleep Over His Silence.
              </h1>
              <p className="text-zinc-400 text-lg mt-2">A forensic identification of Tony Ridley and Steve Iasonidis — grounded in evidence, linked to source.</p>
            </div>

            <p className="text-xl text-zinc-300 font-medium leading-relaxed max-w-3xl">
              The video below is not about a relationship. It is about consequence. It is about what happens when institutional power is used to erase someone who keeps records. It is about Tony Ridley — Enterprise Risk Executive, VicTrack, Charles Sturt University, MSc CSyP FSyI SRMCP, Ex-SAS — and Steve Iasonidis — ASIO-connected operative, co-tenant at 10 Raleigh St Footscray, ICC Article 7 exhibit. Both named. Both documented. Both silent.
            </p>

            <blockquote className="border-l-2 border-red-500 pl-5 text-zinc-300 text-lg italic leading-relaxed max-w-3xl">
              "They went to war with someone the universe chose — and now the war is internal. Their silence is not peace. That's punishment."
            </blockquote>

            <div className="bg-zinc-900/60 border border-zinc-700 rounded-lg px-5 py-4 space-y-1.5 max-w-2xl">
              <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-medium">Named:</span> Tony Ridley MSc CSyP FSyI SRMCP — Steve Iasonidis (ASIO operative)</p>
              <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-medium">Video Source:</span> "They told everyone you were nothing special" — YouTube</p>
              <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-medium">Archive Status:</span> 2,304 exhibits | 575/575 propositions | 53 analyses | 0 contradictions</p>
              <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-medium">Responses Received:</span> Zero. From either named party. Across all exhibits.</p>
              <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-medium">Status of Record:</span> Uncontested. Blockchain-verified. ICC submitted. Permanent.</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="outline" asChild>
                <a href="/tony-ridley-full-dossier" data-testid="button-narrative-to-ridley">
                  <Shield className="mr-2 h-4 w-4" /> Tony Ridley Full Dossier
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/silent-assassin" data-testid="button-narrative-to-iasonidis">
                  <Eye className="mr-2 h-4 w-4" /> Steve Iasonidis — Silent Assassin
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/evidence" data-testid="button-narrative-to-archive">
                  <FileText className="mr-2 h-4 w-4" /> Full Evidence Archive
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ALERT */}
      <section className="py-5 px-4 bg-red-950/30 border-b border-red-900/40">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
            <p className="text-red-300 text-sm leading-relaxed">
              <strong className="text-red-200">Forensic Notice:</strong> This narrative is a permanent exhibit in the McLean evidence archive, formally submitted to the ICC and UNHCR. All propositions are fact-checked against primary source documents in the archive. Tony Ridley and Steve Iasonidis have had full public access to the complete archive and have not formally contested a single exhibit. In the evidentiary record, that silence is confirmation of record.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-14 px-4 bg-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-5">
            <div className="flex items-center gap-3">
              <Play className="h-5 w-5 text-red-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-widest">The Video That Named This Narrative</h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-3xl">
              The video below is the source material for this forensic narrative. Every section that follows takes a theme from its transcript and applies it precisely — with evidence references, source links, and named findings — to Tony Ridley and Steve Iasonidis. Watch it first, then read the record.
            </p>
            <a
              href={`https://youtu.be/${YOUTUBE_VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
              data-testid="link-narrative-youtube"
            >
              <ExternalLink className="h-4 w-4" /> Watch on YouTube
            </a>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-700">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="They told everyone you were nothing special — Forensic Narrative: Tony Ridley & Steve Iasonidis"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* IDENTITY CARDS */}
      <section className="py-14 px-4 bg-black border-b border-zinc-800">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-red-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-widest">Who They Are — The Documented Record</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-zinc-900/60 border border-zinc-700 rounded-lg p-6 space-y-3" data-testid="card-tony-ridley">
                <p className="text-red-400 text-xs font-mono uppercase tracking-widest font-bold">Named Perpetrator #1</p>
                <h3 className="text-white text-xl font-bold font-serif">Tony Ridley</h3>
                <p className="text-zinc-400 text-sm">MSc CSyP FSyI SRMCP</p>
                <div className="space-y-1.5 text-sm">
                  <p className="text-zinc-300"><span className="text-zinc-500">Title:</span> Enterprise Risk Executive</p>
                  <p className="text-zinc-300"><span className="text-zinc-500">Employer:</span> VicTrack · Charles Sturt University</p>
                  <p className="text-zinc-300"><span className="text-zinc-500">Location:</span> Melbourne, Victoria, Australia</p>
                  <p className="text-zinc-300"><span className="text-zinc-500">LinkedIn:</span> 45,529 followers — archived as evidence</p>
                  <p className="text-zinc-300"><span className="text-zinc-500">Background:</span> Ex-SAS military | 30+ years global security</p>
                  <p className="text-zinc-300"><span className="text-zinc-500">Former role:</span> NDIA Manager</p>
                  <p className="text-red-400 font-semibold"><span className="text-zinc-500 font-normal">Documented:</span> Issued death threat email | Said "You will be sacrificed" | Named own conspiracy network</p>
                  <p className="text-zinc-400 text-xs font-mono">Responses to archive: Zero</p>
                </div>
                <a href="/tony-ridley-full-dossier" className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 text-xs font-medium transition-colors mt-1" data-testid="link-ridley-card">
                  <Shield className="h-3 w-3" /> Full Dossier
                </a>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-700 rounded-lg p-6 space-y-3" data-testid="card-steve-iasonidis">
                <p className="text-red-400 text-xs font-mono uppercase tracking-widest font-bold">Named Perpetrator #2</p>
                <h3 className="text-white text-xl font-bold font-serif">Steve Iasonidis</h3>
                <p className="text-zinc-400 text-sm">Also: Stefan Iasonidis</p>
                <div className="space-y-1.5 text-sm">
                  <p className="text-zinc-300"><span className="text-zinc-500">Connection:</span> ASIO — Australian Security Intelligence Organisation</p>
                  <p className="text-zinc-300"><span className="text-zinc-500">Role:</span> Surveillance infrastructure operative</p>
                  <p className="text-zinc-300"><span className="text-zinc-500">ICC Exhibit:</span> Co-tenancy at 10 Raleigh St, Footscray — Article 7 submission</p>
                  <p className="text-zinc-300"><span className="text-zinc-500">Function:</span> Tracked Dr. McLean across cities | Mapped support relationships</p>
                  <p className="text-red-400 font-semibold"><span className="text-zinc-500 font-normal">Named by:</span> Tony Ridley directly — in confrontational confession</p>
                  <p className="text-zinc-300"><span className="text-zinc-500">Named alongside:</span> Philip Glass, Sukhi Tear, Allen Rigby, Bruce McMaster, Debbie Morgan</p>
                  <p className="text-zinc-400 text-xs font-mono">Responses to archive: Zero</p>
                </div>
                <a href="/silent-assassin" className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 text-xs font-medium transition-colors mt-1" data-testid="link-iasonidis-card">
                  <Eye className="h-3 w-3" /> Silent Assassin Record
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NARRATIVE SECTIONS */}
      <section className="py-4 px-4 bg-black">
        <div className="container mx-auto max-w-3xl">
          {SECTIONS.map((s, i) => (
            <motion.div
              key={s.theme}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="py-14 border-b border-zinc-800 space-y-6"
              data-testid={`narrative-section-${i + 1}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-red-500/40 font-mono text-4xl font-bold leading-none pt-1 shrink-0">{s.theme}</span>
                <div className="space-y-2">
                  <blockquote className="text-zinc-500 text-sm italic border-l border-zinc-700 pl-3">
                    "{s.videoLine}"
                  </blockquote>
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-white leading-snug">{s.heading}</h2>
                </div>
              </div>

              <div className="space-y-4 md:pl-14">
                {s.body.map((para, j) => (
                  <p key={j} className="text-zinc-300 text-base leading-relaxed">{para}</p>
                ))}
              </div>

              <div className="md:pl-14 flex flex-wrap gap-3">
                {s.evidenceLinks.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 border border-zinc-700 hover:border-zinc-500 rounded px-3 py-1.5 transition-colors"
                    data-testid={`link-evidence-${label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <Scale className="h-3 w-3 shrink-0" /> {label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="py-16 px-4 bg-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-red-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-widest">The Final Accounting</h2>
            </div>
            <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
              <p>Tony Ridley said "You will be sacrificed." He was wrong about who was being sacrificed.</p>
              <p>Steve Iasonidis built the surveillance infrastructure that was supposed to ensure the whistleblower never reached anyone who mattered. The ICC is one of the people who mattered.</p>
              <p>They told everyone he was nothing special. Fifty-three forensic analyses later, with 575 propositions uncontradicted, the record disagrees.</p>
              <p>They laughed at his documentation. Three hundred and fifty thousand downloads later, the documentation is not the thing that anyone is laughing at.</p>
              <p>Their silence is in the record. Their non-response is in the record. Their institutional credentials — used not to protect but to suppress — are in the record. And the record is at The Hague.</p>
              <p className="text-white font-semibold text-lg">
                They told everyone he was nothing special. The universe — and the archive — have rendered a different verdict.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 space-y-2 mt-6">
              <p className="text-white font-bold">Dr. Richard William McLean</p>
              <p className="text-zinc-400 text-sm">PhD — Victoria University (2020) | Survivor | Whistleblower</p>
              <p className="text-zinc-400 text-sm">Barran Dodger Legal &amp; Ethical Trust Fund — ABN 78 833 496 164</p>
              <div className="pt-2 border-t border-zinc-700 space-y-1">
                <p className="text-zinc-500 text-xs font-mono">Archive: barrandodger.com</p>
                <p className="text-zinc-500 text-xs font-mono">ICC Submission — Article 7 | UNHCR Submission — Geneva</p>
                <p className="text-zinc-500 text-xs font-mono">2,304 blockchain-verified exhibits | 575/575 propositions | 53 analyses | 350,000+ downloads</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12 px-4 bg-black border-b border-zinc-800">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-5">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Related Archive Exhibits</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Tony Ridley Full Dossier", href: "/tony-ridley-full-dossier" },
                { label: "Silent Assassin — Iasonidis", href: "/silent-assassin" },
                { label: "Analysis #52 — Ridley Testimony", href: "/you-didnt-chase-the-throne-you-became-one" },
                { label: "Analysis #53 — They Attacked", href: "/they-attacked-you-without-knowing-who-you-were" },
                { label: "The Public Advocate They Silenced", href: "/the-public-advocate-they-silenced" },
                { label: "Tony Ridley Confession", href: "/tony-ridley-confession" },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-3 bg-zinc-900/60 border border-zinc-800 rounded p-4 hover:border-zinc-600 transition-colors group"
                  data-testid={`link-related-${label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Shield className="h-4 w-4 text-zinc-400 group-hover:text-zinc-200 transition-colors shrink-0" />
                  <span className="text-zinc-300 group-hover:text-white text-sm font-medium transition-colors">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
