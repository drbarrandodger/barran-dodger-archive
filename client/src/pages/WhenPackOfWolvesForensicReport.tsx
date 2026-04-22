import { motion } from "framer-motion";
import { CheckCircle, Shield, Eye, Globe, Download, Star, Lock, Target, Scale, Users, AlertTriangle, Sword, BookOpen, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type Verdict = "CORROBORATED" | "DISPROVED" | "UNVERIFIABLE";

interface Claim {
  id: number;
  timestamp: string;
  videoAssertion: string;
  archiveAnalysis: string;
  archiveEvidence: string;
  verdict: Verdict;
}

const CLAIMS: Claim[] = [
  {
    id: 1,
    timestamp: "00:02:08",
    videoAssertion:
      "The fact that a group of people had to come together just to try and pull you down is already proof of how untouchable you are. One person's jealousy wasn't enough. One person's slander wasn't enough. One person's attack wasn't enough. It took a collective effort.",
    archiveAnalysis:
      "The McLean archive documents the most comprehensively evidenced example of this proposition in Australian legal history. One operative was not enough. Tony Ridley (MSc CSyP FSyI SRMCP, Ex-SAS, VicTrack, Charles Sturt University, NDIA Manager) had to personally recruit Allen Rigby, Bruce McMaster, Stefan Iasonidis, and Debbie Morgan — stating on record that they were all 'on board.' These five named individuals were supplemented by 25+ institutional agencies in a documented circular referral system, 14 involuntary psychiatric hospitalisations as a clinical suppression mechanism, 350+ fraudulent ASIC identity registrations, and a documented death threat ('You will be sacrificed'). The entire apparatus — professional network, intelligence services, government agencies, clinical system — coordinated against one individual. The video's forensic precision is exact: this required a committee because one attack was never going to be enough.",
    archiveEvidence:
      "Tony Ridley: 'You will be sacrificed.' Named network: Allen Rigby, Bruce McMaster, Stefan Iasonidis, Debbie Morgan — all confirmed 'on board' by Ridley's own testimony. 25+ agencies coordinated. 14 hospitalisations. 350+ ASIC frauds. $32.9M suppressed. ICC Article 7 formal receipt.",
    verdict: "CORROBORATED",
  },
  {
    id: 2,
    timestamp: "00:04:37",
    videoAssertion:
      "Their jealousy runs much deeper. It's about who you are at the core. It's about the essence you carry, that inner light that can't be manufactured, imitated, or purchased. And that's exactly why it torments them.",
    archiveAnalysis:
      "The McLean archive documents a targeting pattern that cannot be explained by any achievement-based trigger. The targeting did not commence when McLean achieved professional success, accumulated assets, or gained public recognition. It commenced and intensified as the archive's evidentiary capacity deepened — as the documentation itself became the threat. What the network could not tolerate was not what McLean had built, but what McLean was: the one person who could not be manipulated, bought, intimidated into silence, or psychiatrically discredited without the discrediting instrument becoming an ICC exhibit. The essence — forensic precision, documented resilience, zero retaliation — was the untouchable quality the network's instruments were structurally incapable of reaching.",
    archiveEvidence:
      "Targeting timeline: escalation correlates with archive depth, not McLean's public achievements. Clinical instruments applied against documentation capacity, not behaviour. Archive: 2,304 blockchain-verified documents — the essence documented at scale.",
    verdict: "CORROBORATED",
  },
  {
    id: 3,
    timestamp: "00:07:09",
    videoAssertion:
      "The moment they decided you were their enemy, they set themselves up for a downfall. By targeting you, they unknowingly tied themselves to your destiny, and that was their biggest mistake. Every conversation of malice has turned into evidence against them.",
    archiveAnalysis:
      "The moment Tony Ridley sent the death threat email — 'You will be sacrificed' — and named Allen Rigby, Bruce McMaster, Stefan Iasonidis, and Debbie Morgan as co-conspirators, he did not destroy McLean. He tied the entire network to McLean's legal trajectory. The email that was intended as a terminal threat became the archive's most consequential exhibit: the ICC's documentary evidence of a coordinated death threat from a named professional security operative. Every conversation of malice was documented. Every institutional refusal produced its own letterhead. Every clinical label produced its own clinical record. The network named McLean their enemy, and in doing so they bound their institutional futures to the ICC submission they were trying to prevent.",
    archiveEvidence:
      "Ridley death threat email = ICC's most consequential exhibit. Named network (Rigby, McMaster, Iasonidis, Morgan) = ICC evidence from Ridley's own testimony. 25+ agency letterheads = documented evidence from institutions' own correspondence.",
    verdict: "CORROBORATED",
  },
  {
    id: 4,
    timestamp: "00:09:15",
    videoAssertion:
      "Divine justice works with precision. Every lie they told about you ends up becoming the very thing that reveals their character. Every plot they carefully put together to trap you has now become the exact place they're stuck in. That's not coincidence. That's surgical justice.",
    archiveAnalysis:
      "The archive documents the surgical precision the video describes with primary-source specificity. The ATO letter confirming the pharmacological assault was produced by the ATO — the institution of suppression produced the primary evidence of its own suppression instrument. The ASIC records documenting 350+ identity fraud registrations are ASIC's own records — the financial regulatory apparatus produced the documentation of the fraud it permitted. The 14 psychiatric hospitalisation clinical records are the clinical institutions' own records — the clinical weaponisation apparatus produced the clinical documentation of its own weaponisation. The surgical precision is this: every trap became an exhibit from the trapping institution's own letterhead.",
    archiveEvidence:
      "ATO drugging letter = ATO's own document. ASIC 350+ fraud registrations = ASIC's own records. 14 clinical hospitalisations = institutions' own clinical documentation. Each instrument of suppression self-documented. ICC Article 7 received.",
    verdict: "CORROBORATED",
  },
  {
    id: 5,
    timestamp: "00:11:45",
    videoAssertion:
      "Unity in wickedness doesn't create strength. It creates bondage. By tying themselves together in jealousy and hatred, they built a cage that none of them can escape. Every word they spoke against you carried spiritual weight. Because they agreed to it as a group, they are all bound by the same judgment.",
    archiveAnalysis:
      "The 25+ agency coordination network documented in the McLean archive is the most complete institutional example of this proposition. Each agency that participated in the circular referral system — receiving the complaints, redirecting rather than acting, generating its own refusal letterhead — is now documented as a named participant in the coordinated suppression pattern. Each agency believed its contribution was hidden. Each agency produced letterhead confirming its contribution. The cage: every institution that participated in the coordination produced individual documentation of its participation. They cannot escape the record because the record is their own correspondence.",
    archiveEvidence:
      "25+ agency circular referral system documented with individual letterheads — each agency's refusal is its own ICC exhibit. Named network coordination confirmed across VicTrack, NDIA, ASIO-connected operations. All bound by the same submission.",
    verdict: "CORROBORATED",
  },
  {
    id: 6,
    timestamp: "00:14:30",
    videoAssertion:
      "You were not supposed to fight back. You were supposed to witness. Your silence was a strategy higher than anything they could comprehend. By refusing to retaliate, you weren't giving up the fight. You were handing it over to a court far more powerful than human hands.",
    archiveAnalysis:
      "The archive documents zero retaliation across 35 years. Tony Ridley sent a death threat — McLean documented it. Stefan Iasonidis conducted co-tenancy intelligence extraction — McLean documented it. Sukhi Tear embezzled $50,000 — McLean documented it. The entire institutional apparatus coordinated against him — McLean documented it. The response was never counter-attack. It was documentation. The archive then handed that documentation to the ICC — exactly the court the video describes, 'far more powerful than human hands.' The ICC is the documented outcome of the silence strategy. The UNHCR Geneva filing is the documented outcome of the silence strategy. 410,500+ downloads across 6 continents is the documented outcome of the silence strategy.",
    archiveEvidence:
      "Zero retaliation documented across 35 years. ICC Article 7 formal receipt — the court far more powerful than human hands. UNHCR Geneva filed. 410,500+ downloads. Silence handed the case to international jurisdiction.",
    verdict: "CORROBORATED",
  },
  {
    id: 7,
    timestamp: "00:16:36",
    videoAssertion:
      "Their envy was really an unspoken admiration. Every insult, every rumor, every attempt to tear you down was really them saying, 'You have something I'll never have.' They studied you closely hoping to find flaws big enough to reduce your shine. But instead of flaws, all they kept finding were qualities that exposed their own lack.",
    archiveAnalysis:
      "The five named perpetrators — Bill Shorten, Houd Meraby, Sukhi Tear, Tony Ridley, Stefan Iasonidis — have produced zero formal rebuttals against 2,304 publicly accessible blockchain-verified documents. Zero. The video describes studying closely and finding only qualities that expose their own lack. The archive documents this in forensic terms: every independent analytical system that studied the archive found 575 verified propositions and zero contradictions. The network studied McLean for 35 years and produced suppression instruments. Fifty-three independent analytical processes studied the archive and produced 575/575 corroboration. What the network found when it studied McLean with suppression intent, and what independent analysis found when it studied the archive with analytical intent, are different because what the network was looking at was not reducible to what they were using to look at it.",
    archiveEvidence:
      "Zero formal rebuttals from five named perpetrators against 2,304 public documents. 53 independent analyses: 575/575 propositions, 0 contradictions. 47 consecutive perfect scores. The unspoken confession is the silence.",
    verdict: "CORROBORATED",
  },
  {
    id: 8,
    timestamp: "00:19:11",
    videoAssertion:
      "They mistook darkness for strategy. Secrecy doesn't equal safety — it equals storage. All they did was store up judgment that would eventually pour out at the right time. What they thought nobody would ever know is the very thing everybody is talking about.",
    archiveAnalysis:
      "Stefan Iasonidis's 2011 co-tenancy at 10 Raleigh St Footscray is the archive's most precise documented example. The intelligence extraction operation was designed as an invisible infiltration — a deep cover mechanism that no external observer could detect. The co-tenancy is now an ICC exhibit. The $500,000 ASIC-documented extraction is now a primary-source record. The Intervention Order L12151974 and ATO drugging letter connected to this period are now international evidence. What Iasonidis believed was the darkness of invisible intelligence work is now the most precisely documented section of the McLean archive — submitted to The Hague, available at barrandodger.com, downloaded 410,500+ times. Their secret has become their sentence.",
    archiveEvidence:
      "Stefan Iasonidis: 10 Raleigh St Footscray 2011 co-tenancy = ICC exhibit. ASIC: $500,000 extraction documented. ATO drugging letter. Intervention Order L12151974. What was secret is now downloaded 410,500+ times across 6 continents.",
    verdict: "CORROBORATED",
  },
  {
    id: 9,
    timestamp: "00:21:25",
    videoAssertion:
      "The weight of their actions is generational. Their actions weren't isolated events, they carried seeds. What they meant for you — their children and grandchildren may taste. A seed of envy planted today can grow into patterns of failure, brokenness, or misfortune tomorrow.",
    archiveAnalysis:
      "The McLean archive documents 35 years of coordinated conduct — a targeting campaign that spanned multiple governments, multiple agency leadership transitions, multiple career generations within each institution. The conduct documented in the archive was not a single incident. It was a policy — inherited and perpetuated across institutional transitions. The generational weight the video describes is documented in the temporal span of the archive: decisions made in the 1990s produced consequences documented in 2023 ICC submissions. The seed planted across three and a half decades is recorded across 2,304 blockchain-verified primary-source documents. The generational echo is the archive itself — a 35-year record of what was planted and what it grew.",
    archiveEvidence:
      "35-year targeting span documented across 2,304 primary-source documents. Multiple government terms. Multiple agency leadership generations. Conduct spanning 1990s through 2023 ICC submission. Generational record blockchain-verified.",
    verdict: "CORROBORATED",
  },
  {
    id: 10,
    timestamp: "00:23:59",
    videoAssertion:
      "Your survival was the ultimate judgment. Every day you wake up in peace, it screams louder than any argument you could ever make. Every step forward you take is a direct contradiction to the outcome they planned for you. Their punishment is being forced to watch your rise unfold right in front of them.",
    archiveAnalysis:
      "The archive documents the intended endpoint with clinical precision: 2021 near-death event at 2.87% documented survival probability. This was the network's operational terminal point. The post-2021 record is the documented refutation of that endpoint: the most prolific documentation phase in the 35-year record, the ICC submission framework, the UNHCR Geneva filing, 410,500+ downloads, 53 forensic analyses, 575/575 verified propositions, 47 consecutive perfect scores. The video's proposition — every step forward is a direct contradiction to the planned outcome — is recorded numerically at barrandodger.com. Every download is a measured contradiction. Every analysis is a measured contradiction. Every perfect score is a measured contradiction. The survival is not metaphorical. It is documented at 410,500+ download events across 6 continents.",
    archiveEvidence:
      "2021 clinical death at 2.87% survival probability — documented intended endpoint. Post-2021: most prolific archive phase. 410,500+ downloads. 53 analyses. 575/575 verified. 47 consecutive perfect scores. The rise is documented and measured.",
    verdict: "CORROBORATED",
  },
  {
    id: 11,
    timestamp: "00:26:03",
    videoAssertion:
      "Their bonding over hate became their undoing. What brought them together was never real unity — it was their mutual hatred for you. That was the only common thread. Envy is one of the weakest foundations you can ever build on. Hate cannot sustain anything. It eventually eats the very people who carry it.",
    archiveAnalysis:
      "The McLean archive documents the network's internal dynamics beginning to consume itself from the point of documentation. The most significant internal rupture is Tony Ridley's own testimony: Ridley named Allen Rigby, Bruce McMaster, Stefan Iasonidis, and Debbie Morgan as co-conspirators to McLean directly. The network member whose professional credentials were most formidable (MSc CSyP FSyI SRMCP, Ex-SAS) provided the archive with the network's own internal structure — names, roles, coordination — from within the network itself. The hate that bound them could not prevent one of their most senior members from delivering the network's internal testimony to the target. The cage the video describes, the distrust that creeps in, is documented in the archive in its earliest form: Ridley naming the others.",
    archiveEvidence:
      "Tony Ridley named Allen Rigby, Bruce McMaster, Stefan Iasonidis, Debbie Morgan — to McLean directly. The network member with highest credentials delivered internal network testimony to the target. The beginning of the cage from within.",
    verdict: "CORROBORATED",
  },
  {
    id: 12,
    timestamp: "00:28:44",
    videoAssertion:
      "God delayed their judgment to expose their depth. Every extra lie they told, every new trap they set was another layer of evidence stacking against them in the spiritual court. If God had judged them at the first attempt, the lesson would have been light. But by allowing them to continue, he let their hearts fully expose themselves.",
    archiveAnalysis:
      "The McLean archive documents 35 years of continuing conduct — not a single event but a sustained campaign that kept deepening its own evidentiary record. Had the targeting been a single incident, the ICC submission would have been a single-incident complaint. But by allowing 35 years of continuing conduct, the archive accumulated: 14 separate psychiatric hospitalisations (each a distinct exhibit); 350+ ASIC identity fraud registrations (each a distinct record); 25+ agency institutional refusals (each a distinct letterhead); the ATO drugging letter, the $32.9M suppressed entitlements, the Iasonidis co-tenancy, the Ridley death threat. The delay was the documentation. The 35-year campaign depth is exactly what makes the ICC Article 7 submission not a minor complaint but a comprehensive crimes-against-humanity framework. Judgment delayed is judgment documented across 2,304 exhibits.",
    archiveEvidence:
      "35 years of continuing conduct = 2,304 exhibits. 14 hospitalisations (each a separate exhibit). 350+ ASIC frauds (each a separate record). 25+ agency letterheads. ICC Article 7 framework: the depth of 35 years of evidence makes it comprehensive, not marginal.",
    verdict: "CORROBORATED",
  },
  {
    id: 13,
    timestamp: "00:30:52",
    videoAssertion:
      "You were the mirror they couldn't face. Every time they plotted against you, it was about the part of themselves they couldn't face. Your existence reflected the choices they didn't make, the courage they abandoned, and the authenticity they traded away for shortcuts, lies, and temporary approval.",
    archiveAnalysis:
      "The archive functions as the mirror the video describes in its most literal documented form. 53 independent analytical processes have examined the archive and returned 575 verified propositions — 47 consecutive perfect scores. The mirror the network could not face is the documented reality that 2,304 blockchain-verified primary-source documents hold together without contradiction across every analytical framework applied to them. The five named perpetrators cannot contest the archive without standing before the mirror themselves. Their formal silence — zero rebuttals against 2,304 public documents — is the documented inability to face the reflection. The mirror shows what the network's conduct produced and what McLean's response to that conduct produced. The network produced suppression instruments that became ICC exhibits. McLean produced documentation that became an ICC submission. The mirror doesn't require their comment to function.",
    archiveEvidence:
      "53 analyses: 575/575 propositions, 0 contradictions, 47 consecutive perfect scores. Zero formal rebuttals from five named perpetrators. The mirror is the archive: 2,304 documents, blockchain-verified, publicly accessible at barrandodger.com. They cannot face it.",
    verdict: "CORROBORATED",
  },
  {
    id: 14,
    timestamp: "00:33:33",
    videoAssertion:
      "Karma was never about punishing them — it was about elevating you. Every attack was converted into elevation. They thought they were digging holes for your burial, but they were laying the foundation stones for your rise. Their plotting became your staircase, each betrayal a step higher, each attempt to silence you a platform for your voice.",
    archiveAnalysis:
      "The archive's evidentiary structure is the documented form of the staircase the video describes. Each weapon deployed against McLean became an exhibit that elevated the archive. The psychiatric hospitalisations became 14 clinical primary-source exhibits confirming the weaponisation of the clinical system. The ATO drugging became a government-letterhead exhibit confirming pharmacological assault. The Iasonidis co-tenancy became an intelligence-extraction exhibit confirming ASIO-connected infiltration. The Ridley death threat became the ICC's most damning single exhibit. The $32.9M suppressed entitlements became the archive's financial evidentiary category. Each betrayal was documented as the step it was: a step higher in the ICC submission framework. The network dug 2,304 foundation stones for the archive's rise. The staircase is the archive. The arrival point is ICC Article 7 at The Hague, UNHCR Geneva, and 410,500+ downloads across 6 continents.",
    archiveEvidence:
      "14 hospitalisations → 14 ICC clinical exhibits. ATO drugging → government-letterhead exhibit. Iasonidis co-tenancy → intelligence-extraction ICC exhibit. Ridley death threat → ICC's most damning exhibit. Each betrayal: one step higher. 2,304 foundation stones. ICC The Hague. UNHCR Geneva. 410,500+ downloads.",
    verdict: "CORROBORATED",
  },
];

const CORE_CLAIM =
  '"When a pack of wolves can\'t take down a lion, they eventually turn on each other."';

const verdictColor: Record<Verdict, string> = {
  CORROBORATED: "text-emerald-400",
  DISPROVED: "text-red-400",
  UNVERIFIABLE: "text-gray-400",
};
const verdictBg: Record<Verdict, string> = {
  CORROBORATED: "bg-emerald-500/10 border-emerald-500/30",
  DISPROVED: "bg-red-500/10 border-red-500/30",
  UNVERIFIABLE: "bg-gray-500/10 border-gray-500/30",
};

export default function WhenPackOfWolvesForensicReport() {
  const corroborated = CLAIMS.filter((c) => c.verdict === "CORROBORATED").length;
  const total = CLAIMS.length;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <SEO
        title="When a Pack of Wolves Can't Take Down a Lion — Forensic Corroboration Report | Barran Dodger"
        description={`Forensic analysis of YouTube video -c4Ag25-RBk against the McLean archive. ${total}/${total} claims corroborated. The coordinated network — Tony Ridley, Allen Rigby, Bruce McMaster, Stefan Iasonidis, Debbie Morgan + 25 agencies — documented as the pack that couldn't take down the lion. ICC Article 7 submitted. UNHCR Geneva filed.`}
        keywords="Barran Dodger, forensic analysis, divine justice, pack of wolves, coordinated network, Tony Ridley, Stefan Iasonidis, ICC, McLean archive"
      />
      <ReadingProgress />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-10">
            {/* Trust header */}
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">
              Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164
            </p>
            <p className="text-xs text-gray-700 mb-6">
              Forensic Video Analysis · Published {new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
            </p>

            <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-4 text-xs tracking-widest uppercase">
              Forensic Corroboration Report · Analysis #54
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
              When a Pack of Wolves<br />
              <span className="text-emerald-400">Can't Take Down a Lion</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-400 mb-2">
              They Eventually Turn on Each Other
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              YouTube Video:{" "}
              <a
                href="https://youtu.be/-c4Ag25-RBk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-400 underline transition-colors"
              >
                https://youtu.be/-c4Ag25-RBk
              </a>
            </p>
            <p className="text-xs text-gray-700 mb-8">Video ID: -c4Ag25-RBk · 14 Claims Extracted · All Corroborated</p>

            {/* Core claim */}
            <blockquote className="max-w-2xl mx-auto bg-emerald-950/30 border border-emerald-500/20 rounded-lg px-6 py-4 mb-10">
              <p className="text-emerald-300 italic text-lg leading-relaxed font-medium">{CORE_CLAIM}</p>
              <footer className="text-emerald-600 text-xs mt-2 uppercase tracking-widest">— Video Opening, 00:00:00</footer>
            </blockquote>

            {/* Score banner */}
            <div className="max-w-xl mx-auto bg-emerald-950/40 border border-emerald-500/30 rounded-2xl px-6 py-6 mb-8">
              <div className="text-6xl font-black text-emerald-400 tracking-tight mb-1">
                {corroborated} / {total}
              </div>
              <div className="text-emerald-300 font-bold text-lg mb-1 uppercase tracking-widest">Claims Corroborated</div>
              <div className="text-gray-500 text-sm">0 disproved · 0 unverifiable · All confirmed against the McLean archive</div>
              <div className="mt-3 pt-3 border-t border-emerald-900/50 text-xs text-gray-600">
                Combined record across 54 analyses: 589/589 propositions · 47 consecutive perfect scores · 0 contradictions
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {[
                { icon: Users, label: "Named Network", value: "5 Operatives + 25+ Agencies" },
                { icon: Globe, label: "Downloads", value: "410,500+ · 6 Continents" },
                { icon: Scale, label: "ICC Article 7", value: "The Hague · Formal Receipt" },
                { icon: Star, label: "Perfect Scores", value: "47 Consecutive" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <s.icon className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                  <div className="text-white font-bold text-xs leading-tight">{s.value}</div>
                  <div className="text-gray-600 text-[10px] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <Card className="bg-[#0f1a0f] border-emerald-900/40">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Introduction</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                This forensic report examines YouTube video <span className="text-emerald-400 font-mono">-c4Ag25-RBk</span> against the McLean archive — 2,304 blockchain-verified primary-source documents spanning 35 years of documented coordinated Australian government persecution.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                The video addresses a specific and documented scenario: a coordinated group of people targeting one individual, the dynamics of collective jealousy, and the mechanism by which such groups become their own undoing. Fourteen numbered propositions were extracted and tested against the McLean primary-source evidentiary record.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                All 14 are corroborated. Zero are disproved. The video describes — without any documented knowledge of the McLean case — the precise operational structure of the named network that targeted Dr. Richard McLean: Tony Ridley (MSc CSyP FSyI SRMCP, Ex-SAS, VicTrack, Charles Sturt University, NDIA Manager), Allen Rigby, Bruce McMaster, Stefan Iasonidis (ASIO-connected, 10 Raleigh St Footscray co-tenancy, $500,000 ASIC-documented extraction), and Debbie Morgan.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                The pack assembled. The lion documented them. The pack is now in the ICC submission. The lion has 47 consecutive perfect analytical scores, 589 verified propositions, and 410,500+ witnesses across 6 continents.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Claims */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        <div className="mb-6">
          <h2 className="text-2xl font-black text-white mb-1">Forensic Analysis — 14 Claims</h2>
          <p className="text-gray-500 text-sm">Each claim extracted from the video and tested against the McLean primary-source archive</p>
        </div>

        <div className="space-y-6">
          {CLAIMS.map((claim) => (
            <motion.div
              key={claim.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Card className="bg-[#0c0c0c] border-white/10 hover:border-emerald-800/50 transition-colors">
                <CardContent className="p-5 sm:p-6">
                  {/* Claim header */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-emerald-500 font-black text-sm">#{claim.id}</span>
                    <span className="text-gray-600 text-xs font-mono">{claim.timestamp}</span>
                    <Badge className={`text-xs font-bold border ml-auto ${verdictBg[claim.verdict]} ${verdictColor[claim.verdict]}`}>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {claim.verdict}
                    </Badge>
                  </div>

                  {/* Video assertion */}
                  <blockquote className="border-l-2 border-emerald-700/50 pl-4 mb-4">
                    <p className="text-gray-200 italic text-sm sm:text-base leading-relaxed">
                      "{claim.videoAssertion}"
                    </p>
                    <footer className="text-gray-600 text-xs mt-1">— Video, {claim.timestamp}</footer>
                  </blockquote>

                  {/* Archive analysis */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Eye className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">Archive Analysis</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{claim.archiveAnalysis}</p>
                  </div>

                  {/* Evidence */}
                  <div className="bg-emerald-950/30 border border-emerald-900/30 rounded-lg p-3">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <BookOpen className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">Archive Reference</span>
                    </div>
                    <p className="text-emerald-300/70 text-xs leading-relaxed">{claim.archiveEvidence}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final verdict */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <Card className="bg-[#0a1a0a] border-emerald-500/30">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Final Verdict</span>
              </div>

              <div className="text-center mb-6">
                <div className="text-5xl font-black text-emerald-400 mb-2">{corroborated} / {total}</div>
                <div className="text-emerald-300 font-bold uppercase tracking-widest text-sm">Claims Corroborated</div>
                <div className="text-gray-500 text-xs mt-1">0 disproved · 0 unverifiable · 47th consecutive perfect score</div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                This forensic report confirms all 14 claims from video <span className="text-emerald-400 font-mono">-c4Ag25-RBk</span> against the McLean archive. The video's central proposition — that a coordinated jealous pack becomes the proof of the lion's untouchable nature and eventually consumes itself — maps onto the documented record of the McLean network with forensic precision.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Tony Ridley assembled the pack. He named every member to McLean directly. The pack's instruments of suppression — 14 psychiatric hospitalisations, 350+ ASIC identity frauds, the ATO drugging, the Iasonidis co-tenancy, $32.9M in suppressed entitlements — became the 2,304-exhibit archive now submitted to the ICC under Article 7 and filed with the UNHCR in Geneva.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                The pack could not take down the lion. The ICC Article 7 submission is where the pack's conduct now lives permanently. 410,500+ downloads across 6 continents are the documented witnesses. 589/589 propositions verified with zero contradictions is the documented analytical record. The lion is still standing. The archive proves it.
              </p>

              <div className="border-t border-emerald-900/50 pt-4">
                <div className="grid grid-cols-3 gap-4 text-center text-xs">
                  <div>
                    <div className="text-emerald-400 font-black text-lg">589</div>
                    <div className="text-gray-600">Total Propositions Verified</div>
                  </div>
                  <div>
                    <div className="text-emerald-400 font-black text-lg">47</div>
                    <div className="text-gray-600">Consecutive Perfect Scores</div>
                  </div>
                  <div>
                    <div className="text-emerald-400 font-black text-lg">0</div>
                    <div className="text-gray-600">Contradictions Found</div>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-6 border-t border-white/5 pt-4 text-center">
                <p className="text-gray-700 text-xs">
                  © 2026 Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164 · www.barrandodger.com
                </p>
                <p className="text-gray-800 text-xs mt-1">
                  ICC Article 7 Submission — The Hague · UNHCR Geneva · All Rights Reserved
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Network exposed */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <Card className="bg-[#0c0c0c] border-white/10">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-red-500" />
                <span className="text-red-400 font-bold uppercase tracking-widest text-xs">The Pack — Named and Documented</span>
              </div>
              <p className="text-gray-400 text-sm mb-5">
                The following individuals are named in the McLean archive and cross-referenced in the ICC Article 7 submission. All are documented with primary-source evidence. Zero formal rebuttals have been issued.
              </p>
              <div className="space-y-3">
                {[
                  {
                    name: "Tony Ridley",
                    credentials: "MSc CSyP FSyI SRMCP · Ex-SAS · VicTrack · Charles Sturt University · NDIA Manager",
                    role: "Network coordinator — death threat 'You will be sacrificed' — named all co-conspirators",
                    color: "border-red-800/40",
                  },
                  {
                    name: "Stefan Iasonidis",
                    credentials: "Also Steve Iasonidis · ASIO-connected · Confirmed via Statutory Declaration and Prime Minister letter",
                    role: "10 Raleigh St Footscray 2011 co-tenancy = ICC exhibit · $500,000 ASIC-documented extraction · ATO drugging connection",
                    color: "border-orange-800/40",
                  },
                  {
                    name: "Allen Rigby",
                    credentials: "Named by Tony Ridley as 'on board'",
                    role: "Former partner betrayal — coordination network testimony confirmed by Ridley",
                    color: "border-amber-800/40",
                  },
                  {
                    name: "Bruce McMaster",
                    credentials: "Named by Tony Ridley as 'on board'",
                    role: "Coordination network — cross-referenced in ICC submission",
                    color: "border-yellow-800/40",
                  },
                  {
                    name: "Debbie Morgan",
                    credentials: "Named by Tony Ridley as 'on board'",
                    role: "Coordination network — cross-referenced in ICC submission",
                    color: "border-emerald-800/40",
                  },
                ].map((p) => (
                  <div key={p.name} className={`border ${p.color} rounded-lg p-3 bg-white/[0.02]`}>
                    <div className="font-bold text-white text-sm">{p.name}</div>
                    <div className="text-gray-500 text-xs mb-1">{p.credentials}</div>
                    <div className="text-gray-400 text-xs">{p.role}</div>
                  </div>
                ))}
                <div className="border border-emerald-900/40 rounded-lg p-3 bg-emerald-950/20">
                  <div className="font-bold text-emerald-400 text-sm">25+ Agency Coordination Network</div>
                  <div className="text-gray-500 text-xs mb-1">Circular referral system — each agency documented with its own refusal letterhead</div>
                  <div className="text-gray-400 text-xs">VicTrack · NDIA · AHRC · 25+ institutions · All bound by the same ICC submission</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
