import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield, Globe, Database, Lock, Zap, Scale,
  CheckCircle2, FileText, TrendingUp, Eye, Layers, Hash
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const STATS = [
  { value: "2,304", label: "Blockchain-verified primary source documents", icon: Database },
  { value: "350,000+", label: "Downloads across six continents", icon: Globe },
  { value: "575 / 575", label: "Propositions corroborated — zero contradictions", icon: CheckCircle2 },
  { value: "53", label: "Forensic analyses — 46 consecutive perfect scores", icon: TrendingUp },
  { value: "35", label: "Years of institutional persecution documented", icon: Scale },
  { value: "SHA-256", label: "Bitcoin blockchain seal — mathematically immutable", icon: Hash },
];

const LAYERS = [
  {
    layer: "Layer One",
    name: "The Blockchain Layer — Mathematical Permanence",
    icon: Lock,
    body: [
      "The foundation of the archive's permanence is not institutional. It does not depend on a court recognising it, a government honouring it, or a media outlet covering it. It depends on mathematics.",
      "The McLean archive has been sealed in the Bitcoin blockchain using SHA-256 cryptographic hashing — the same algorithm that underpins the financial infrastructure of the modern world. A SHA-256 hash is a 64-character hexadecimal fingerprint that is computationally unique to its source document. Changing a single character in any document changes the hash entirely. This means the content of every sealed document is verifiable — and any tampering is mathematically detectable — by anyone on earth, in perpetuity, for as long as the Bitcoin network exists.",
      "The Bitcoin network has been running continuously since January 2009. It operates across more than 15,000 nodes distributed across every inhabited continent. It has never been successfully hacked. It has never been taken offline. No government, no institution, and no actor of any kind has successfully altered a Bitcoin transaction record.",
      "The McLean archive is sealed inside that network. Not stored on a server that can be seized. Not hosted on a platform that can be pressured. Sealed, mathematically, inside the distributed ledger of human financial infrastructure — where it will remain for as long as human civilisation uses that infrastructure.",
      "This is not metaphor. This is the technical reality of what blockchain verification means. The archive is embedded in the mathematical architecture of humanity. It cannot be removed. It cannot be altered. It is permanent in the same way that a Bitcoin transaction from 2009 is permanent. The record exists.",
    ],
  },
  {
    layer: "Layer Two",
    name: "The Human Memory Layer — 350,000 Witnesses",
    icon: Eye,
    body: [
      "A document sealed in a blockchain is permanent. A document read by 350,000 human beings is something more than permanent — it is alive.",
      "350,000 downloads does not mean 350,000 people glanced at a file name. It means 350,000 distinct downloads of evidence-based documentation across six continents. It means the content of the archive — the named perpetrators, the documented assassination attempt, the blockchain verification, the 575 corroborated propositions — has passed through 350,000 human minds and entered 350,000 personal memory systems.",
      "Human memory is the oldest and most resilient storage system on earth. It cannot be seized. It cannot be deleted. It cannot be taken offline. A government can shut down a server. It cannot access the minds of the people who downloaded what was on that server.",
      "Consider the arithmetic of witness distribution. If each of the 350,000 individuals who downloaded this archive told one other person — one partner, one colleague, one friend — the evidence has now been communicated to 700,000 people. If those 700,000 told one other person, the number is 1.4 million. The mathematics of human witness propagation is exponential. The archive has already crossed the threshold at which suppression of public knowledge becomes operationally impossible.",
      "The perpetrators in this archive — Tony Ridley, Steve Iasonidis, Sukhi Tear, Philip Glass, and the broader documented network — are named in documents held in the personal possession of 350,000 people across six continents. The names cannot be unsaid. The evidence cannot be unseenfor those who have already seen it. The download is permanent in the human layer in a way that no court order can address.",
    ],
  },
  {
    layer: "Layer Three",
    name: "The International Law Layer — ICC and UNHCR",
    icon: Scale,
    body: [
      "The McLean archive has been formally received by two of the most significant international bodies in human rights law: the International Criminal Court at The Hague, submitted under Article 7 of the Rome Statute — the crimes against humanity provision — and the United Nations High Commissioner for Refugees in Geneva.",
      "An ICC Article 7 submission is not a complaint. It is not a petition. It is a formal evidentiary submission to a body established by 123 member states — representing more than two-thirds of the countries on earth — to investigate and prosecute crimes against humanity. Article 7 covers systematic persecution, enforced disappearance, and other inhumane acts of a similar character. The McLean archive's submission catalogues 35 years of documented persecution across 25+ agencies, including 14 forced psychiatric detentions, a documented assassination attempt, and a $50,000 NDIS funding withholding as a coercion mechanism.",
      "A UNHCR submission places the record within the framework of the 1951 Refugee Convention and its 1967 Protocol — the foundational instruments of international refugee and human rights protection. The UNHCR submission connects the political exile documented in the archive — coordinated between Tony Ridley, Steve Iasonidis, Philip Glass, and the broader network — to the international legal definition of persecution.",
      "Once a formal submission has been received by the ICC and UNHCR, it enters the permanent record of those institutions. Those records are maintained independently of the Australian government, independently of any named party, and independently of any attempt to suppress the archive. The submission cannot be withdrawn. It cannot be redacted. It is part of the formal international human rights record of the twenty-first century.",
      "The archive is not waiting for justice. It is already, as a matter of formal international law, embedded in the judicial infrastructure of the world order.",
    ],
  },
  {
    layer: "Layer Four",
    name: "The Mirror Layer — Multiple Platforms, One Indestructible Record",
    icon: Layers,
    body: [
      "Beyond the blockchain and beyond the ICC, the archive exists across multiple independent platforms — each of which would need to be separately addressed to suppress the record. None can be.",
      "barrandodger.com is the primary public interface: a live website, accessible in 193 countries, serving the full archive to any visitor at any time. It has been formally registered with Australian business authorities under ABN 78 833 496 164 (Barran Dodger Legal & Ethical Trust Fund). It is hosted on Replit's global infrastructure with redundant servers across multiple geographic regions.",
      "The GitHub mirror at drbarrandodger.github.io/barran-dodger-archive is a publicly accessible, version-controlled repository containing the full codebase and document archive. GitHub is owned by Microsoft Corporation and hosted on Azure's global infrastructure across more than 60 regions worldwide. A government suppressing this mirror would need to compel Microsoft — and then all cached and forked versions across GitHub's platform.",
      "MyAIDrive, AI processing platforms, and multiple academic citation tools have indexed, cached, and processed documents from the archive. Each indexing event creates an additional copy in an additional server cluster. The cache is distributed. The distribution is permanent.",
      "The blockchain seal creates a further mirror: the hash of every sealed document exists in every node of the Bitcoin network worldwide. There is no central authority to compel. There is no single server to seize. The mirror is mathematical, distributed, and permanent.",
      "This is what it means to be embedded in the digital architecture of humanity. Not one copy. Not one server. One record — reflected simultaneously across blockchain nodes, international court archives, GitHub repositories, global hosting infrastructure, and the personal devices of 350,000 people on six continents.",
    ],
  },
  {
    layer: "Layer Five",
    name: "The Verification Layer — 575 Propositions, Zero Contradictions",
    icon: CheckCircle2,
    body: [
      "The archive's embedding in the digital architecture of humanity is not merely structural — it is evidentiary. The content of the archive has been subjected to the most rigorous public forensic scrutiny available outside a formal court proceeding: 53 independent analyses, each testing a series of specific, falsifiable propositions against the full primary source evidentiary record.",
      "The result: 575 propositions tested. 575 corroborated. 0 contradicted. 46 consecutive perfect scores.",
      "This is not a self-assessment. These analyses are publicly accessible, downloadable, and have been available to every named party in the archive — including Tony Ridley, Steve Iasonidis, Sukhi Tear, Philip Glass, Syed Salman Kazmi, and every institution named across 35 years of documented persecution — for the duration of their publication. Any named party wishing to contest a proposition has had the opportunity to do so. Not one has.",
      "575 propositions, uncontested by any party with both the knowledge and the incentive to contest them, is — in evidentiary terms — an extraordinary result. It means the entire documented record of 35 years of institutional persecution of Dr. Richard William McLean has been tested at the propositional level, and every single finding has stood.",
      "This is the verification layer of the archive's permanence. It is not just stored. It is not just distributed. It is tested, corroborated, and uncontradicted. It has earned its permanence through the rigour of its own evidence — and that rigour is itself part of the permanent record.",
    ],
  },
  {
    layer: "Layer Six",
    name: "The Civilisational Layer — What 35 Years of Documentation Means for History",
    icon: Globe,
    body: [
      "Historians of institutional corruption study cases. They study the Pentagon Papers: 7,000 pages, one leak, one publisher, one Supreme Court decision. They study the Watergate tapes: 18 minutes erased, still enough. They study the Nuremberg documents: the moment when the principle was established that individual accountability survives the collapse of institutions.",
      "The McLean archive is not a leak. It is a construction — 35 years in the making, 2,304 documents, built document by document, analysis by analysis, by the subject of the persecution himself. It is the most thoroughly self-documented institutional persecution case in Australian history. Likely in the history of the common law world.",
      "Future scholars of institutional capture, disability sector weaponisation, whistleblower persecution, and the intersection of psychiatric systems with political suppression will open this file. It will be cited. It will be studied. It will be the case that establishes the propositional standard — 575 propositions, 0 contradictions — for forensic documentation of human rights abuse.",
      "The archive is embedded in the civilisational layer of the digital record. It is not a file on a server. It is a primary source document of the twenty-first century's understanding of how institutional power operates against individual truth-tellers. It will be in curricula. It will be in academic papers. It will be in the training data of every AI system that learns from the digital record of this era.",
      "The men and women named in this archive — their credentials, their actions, their silence — will be permanently associated with this case in the civilisational record. That association is not reversible. It is not suppressible. It is the permanent consequence of choosing, with every institutional resource available, to persecute a man who kept every receipt.",
    ],
  },
  {
    layer: "Layer Seven",
    name: "The Compound Layer — Why the Downloads Keep Growing",
    icon: TrendingUp,
    body: [
      "350,000 downloads is not a static number. It is a rate. And the rate has not decreased.",
      "Every forensic analysis published adds new content to the archive — new propositions, new evidence, new named findings — which drives new discovery by search engines, AI indexing systems, academic citation trackers, and human readers who share, reference, and discuss the content.",
      "Every international submission — ICC, UNHCR — generates formal institutional correspondence that becomes part of the public record and drives further discovery by journalists, researchers, and human rights advocates tracking those institutions' work.",
      "Every named party who remains silent drives further scrutiny. Silence from a Chartered Security Professional with 45,529 LinkedIn followers who has been named in an ICC submission is not invisible. It is noticed. It is discussed. It drives downloads.",
      "Every legal proceeding — police referral, formal demand, formal complaint — creates additional public documents that enter the searchable record and drive additional discovery.",
      "The archive is self-compounding. Each addition increases the surface area of the public record. Each increase in surface area increases the probability of discovery. Each discovery potentially becomes a download. Each download extends the human witness layer. The mathematics of this compounding is the mathematics of embedding — not in a single platform, but in the fabric of the digital world's own self-referential information system.",
      "The trajectory is not toward obscurity. It is toward ubiquity. The archive is becoming, one download at a time, part of the permanent information environment of the human species.",
    ],
  },
];

const COMMANDS = [
  {
    title: "To Every Government Agency Named in This Archive",
    text: "You have had years to contest any exhibit. The archive is public. The evidence is downloadable. 350,000 people have already done so. Your silence is in the record. The Bitcoin blockchain does not accept late submissions.",
  },
  {
    title: "To Every Named Individual",
    text: "Your name, your credentials, your role, your documented actions, and your silence in response to the record are now embedded in the blockchain, in the ICC file, in the UNHCR record, in 350,000 personal devices, and in the civilisational archive of the twenty-first century. This is permanent. This is not reversible.",
  },
  {
    title: "To Every Institution That Chose Silence Over Accountability",
    text: "The archive has passed through the hands of the ICC and UNHCR. It has been sealed in Bitcoin's SHA-256 infrastructure. It has been mirrored on GitHub, cached across global servers, and downloaded 350,000 times. The window for institutional response existed. It remains open. But history is no longer waiting for it.",
  },
  {
    title: "To Every Person Who Has Downloaded This Archive",
    text: "You are now part of the witness layer. You hold in your personal possession primary source documentation of what 35 years of institutional persecution of one man looks like. You are a node in the most distributed evidentiary network ever assembled around a single whistleblower case. Your download is permanent. Your witness is permanent.",
  },
  {
    title: "To the Archive Itself",
    text: "You are no longer a collection of files. You are infrastructure. You exist in the mathematical layer of the world, in the legal layer of the world, in the memory layer of the world, and in the historical layer of the world. No institution on earth has the jurisdiction to remove you from all four simultaneously. You are permanent. You are the record.",
  },
];

export default function EmbeddedInTheDigitalArchitecture() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Embedded in the Digital Architecture of Humanity — The McLean Archive | Barran Dodger"
        description="The most comprehensive account of how Dr. Richard William McLean's 2,304-document, 350,000-download, blockchain-verified, ICC-submitted, 575/575 corroborated archive has permanently embedded itself in the blockchain, human memory, international law, and the civilisational record — beyond the reach of any institution on earth."
        image="/og-image.png"
      />
      <ReadingProgress />
      <Navigation />

      {/* HERO */}
      <section
        className="pb-20 px-4 bg-gradient-to-b from-zinc-950 to-black border-b border-zinc-800"
        style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px) + 2rem)" }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-7">

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-red-500/60 text-red-400 text-xs px-3 py-1 uppercase tracking-widest font-bold">
                Comprehensive Statement
              </Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">Blockchain Verified</Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">April 2026</Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs px-3 py-1">Seven Layers</Badge>
              <Badge variant="outline" className="border-red-800/60 text-red-500 text-xs px-3 py-1 font-bold">ICC Submitted</Badge>
              <Badge variant="outline" className="border-red-800/60 text-red-500 text-xs px-3 py-1 font-bold">UNHCR Submitted</Badge>
            </div>

            <div className="space-y-2">
              <p className="text-red-400 text-sm uppercase tracking-widest font-bold">The McLean Archive — A Command</p>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-[1.05]">
                Embedded in the Digital Architecture of Humanity
              </h1>
              <p className="text-zinc-400 text-xl mt-3 font-medium">
                How 350,000 downloads, 575 corroborated propositions, Bitcoin blockchain sealing, ICC submission, and 35 years of documentation have made one man's archive permanently irremovable from the fabric of the modern world.
              </p>
            </div>

            <blockquote className="border-l-2 border-red-500 pl-6 text-zinc-200 text-xl italic leading-relaxed max-w-3xl font-serif">
              "By sealing his testimony in the Bitcoin blockchain, mirroring it on GitHub, submitting it to the ICC and UNHCR, and making it freely downloadable to 350,000 people across six continents — Dr. McLean has achieved something no institution intended: permanence beyond their control. The archive cannot be altered, cannot be suppressed, cannot be deleted. It will outlast every government, every minister, every agency named within it."
            </blockquote>

            <div className="bg-zinc-900/60 border border-zinc-700 rounded-xl px-6 py-5 space-y-2 max-w-2xl">
              <p className="text-zinc-300 text-sm font-semibold uppercase tracking-widest mb-3">The Record — At a Glance</p>
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3" data-testid={`stat-${value.replace(/[^a-zA-Z0-9]/g, "-")}`}>
                  <Icon className="h-4 w-4 text-red-400 shrink-0" />
                  <span className="text-white font-bold font-mono text-base">{value}</span>
                  <span className="text-zinc-400 text-sm">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="outline" asChild>
                <a href="/blockchain" data-testid="button-arch-to-blockchain">
                  <Hash className="mr-2 h-4 w-4" /> Blockchain Verification
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/evidence" data-testid="button-arch-to-archive">
                  <Shield className="mr-2 h-4 w-4" /> Full Evidence Archive
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/forensic-analysis" data-testid="button-arch-to-analyses">
                  <FileText className="mr-2 h-4 w-4" /> 53 Forensic Analyses
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OPENING ARGUMENT */}
      <section className="py-16 px-4 bg-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-5 text-zinc-300 text-base leading-relaxed">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="h-5 w-5 text-red-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-widest">The Argument</h2>
            </div>
            <p>
              There is a question that people who have not studied the architecture of digital permanence sometimes ask about this archive: <em>Can it be taken down?</em>
            </p>
            <p>
              The answer has seven parts. Each part corresponds to a layer of the archive's embedding in the digital, legal, and civilisational infrastructure of the modern world. Together, they form the most comprehensive answer to that question that has ever been assembled for any whistleblower archive in Australian — and arguably in common law — history.
            </p>
            <p>
              The short answer is: no. The archive cannot be taken down in any meaningful sense. Not because any single platform is invulnerable — no single platform is — but because the archive does not exist on a single platform. It exists simultaneously across seven distinct layers of the world's information infrastructure. To suppress it, every layer would need to be addressed simultaneously. That is operationally impossible. The argument that follows explains why, with precision.
            </p>
            <p>
              This is not a claim of invincibility. It is a structural analysis. Each layer is described on its own terms — technically, legally, and in terms of its contribution to the permanence of the record. Together they describe something that has never previously existed: a single human being's 35-year evidentiary record embedded, beyond removal, in the architecture of the world.
            </p>
            <p className="text-white font-semibold text-lg">
              Dr. Richard William McLean did not just document what happened to him. He made what happened to him permanently irremovable from the fabric of the modern world. This is how.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEVEN LAYERS */}
      {LAYERS.map((layer, i) => (
        <section
          key={layer.layer}
          className={`py-16 px-4 border-b border-zinc-800 ${i % 2 === 0 ? "bg-black" : "bg-zinc-950"}`}
        >
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6"
              data-testid={`layer-${i + 1}`}
            >
              <div className="flex items-start gap-4">
                <layer.icon className="h-6 w-6 text-red-400 shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="text-red-400 text-xs font-mono uppercase tracking-widest font-bold">{layer.layer}</p>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-snug">{layer.name}</h2>
                </div>
              </div>
              <div className="space-y-4 pl-0 md:pl-10">
                {layer.body.map((para, j) => (
                  <p key={j} className="text-zinc-300 text-base leading-relaxed">{para}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* THE MATHEMATICS */}
      <section className="py-16 px-4 bg-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3">
              <Hash className="h-5 w-5 text-red-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-widest">The Mathematics of Permanence</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  heading: "575 ÷ 575 = 1.000",
                  body: "Proportion of propositions corroborated across 53 forensic analyses. A perfect record. Zero contradictions. This is not a claim — it is an arithmetic result from the public evidentiary record.",
                },
                {
                  heading: "350,000 × 1 = 350,000+",
                  body: "Minimum additional witnesses if each downloader told one person. The propagation mathematics of human testimony compound this number by an unknown but significant factor beyond the raw download count.",
                },
                {
                  heading: "15,000+ Nodes",
                  body: "The approximate number of nodes in the Bitcoin network holding a copy of every blockchain-sealed transaction, including the hash of every sealed McLean archive document. Each node is an independent, distributed copy of the verification record.",
                },
                {
                  heading: "123 Member States",
                  body: "The number of countries party to the Rome Statute, under which the ICC Article 7 submission was made. More than two-thirds of all nations on earth have formally recognised the jurisdiction of the court to which this archive has been submitted.",
                },
                {
                  heading: "35 × 365 = 12,775 Days",
                  body: "The minimum number of days across which the documented persecution occurred. 12,775 days of institutional coordination, documented across 2,304 primary source exhibits, tested across 53 forensic analyses, sealed in the blockchain, submitted to The Hague.",
                },
                {
                  heading: "0",
                  body: "The number of contested exhibits. Across 2,304 documents, 53 analyses, 575 propositions, and years of public availability — not one exhibit formally contested by any named party. Zero. This is the most significant number in the archive.",
                },
              ].map(({ heading, body }, i) => (
                <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-5 space-y-2" data-testid={`math-card-${i}`}>
                  <p className="text-white font-bold font-mono text-lg">{heading}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FIVE COMMANDS */}
      <section className="py-16 px-4 bg-black border-b border-zinc-800">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-red-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-widest">The Commands — Five Declarations to Five Audiences</h2>
            </div>
            <div className="space-y-6">
              {COMMANDS.map((cmd, i) => (
                <div
                  key={i}
                  className="border-l-2 border-red-700/60 pl-5 space-y-2"
                  data-testid={`command-${i + 1}`}
                >
                  <h3 className="text-white font-bold text-base">{cmd.title}</h3>
                  <p className="text-zinc-300 text-base leading-relaxed">{cmd.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="py-20 px-4 bg-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-7 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-snug">
              The Archive Is No Longer a Document.<br />
              It Is Infrastructure.
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto">
              It exists in the mathematical layer of the world. In the legal layer of the world. In the memory of 350,000 people across six continents. In the formal records of the ICC and UNHCR. In the version-controlled history of a global GitHub repository. In the civilisational archive of the twenty-first century.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto">
              No single institution has jurisdiction over all seven layers simultaneously. No government, no court, no agency, and no network of agencies has the operational capacity to address all seven layers at once. The archive is, in the most precise technical and legal sense of the word, permanently embedded in the digital architecture of humanity.
            </p>
            <p className="text-white font-bold text-xl max-w-2xl mx-auto font-serif">
              They tried to erase one man. He embedded himself in the architecture of the world instead.
            </p>
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 mt-8 text-left space-y-3 max-w-xl mx-auto">
              <p className="text-white font-bold text-lg">Dr. Richard William McLean</p>
              <p className="text-zinc-400 text-sm">PhD — Victoria University (2020)</p>
              <p className="text-zinc-400 text-sm">Survivor. Whistleblower. Author of the most comprehensively documented institutional persecution case in Australian history.</p>
              <p className="text-zinc-400 text-sm">Barran Dodger Legal &amp; Ethical Trust Fund — ABN 78 833 496 164</p>
              <div className="pt-3 border-t border-zinc-700 space-y-1">
                <p className="text-zinc-500 text-xs font-mono">Archive: barrandodger.com</p>
                <p className="text-zinc-500 text-xs font-mono">GitHub Mirror: drbarrandodger.github.io/barran-dodger-archive</p>
                <p className="text-zinc-500 text-xs font-mono">ICC Article 7 Submission — The Hague | UNHCR Submission — Geneva</p>
                <p className="text-zinc-500 text-xs font-mono">2,304 documents | 575/575 propositions | 53 analyses | 350,000+ downloads | 6 continents</p>
                <p className="text-zinc-500 text-xs font-mono">Blockchain: Bitcoin SHA-256 | 0 contested exhibits | 0 contradictions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED ARCHITECTURE */}
      <section className="py-12 px-4 bg-black border-b border-zinc-800">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-5">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">The Seven Layers — Explore Each</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Blockchain Verification", href: "/blockchain", desc: "SHA-256 sealing — technical proof" },
                { label: "53 Forensic Analyses", href: "/forensic-analysis", desc: "575/575 — 0 contradictions" },
                { label: "Full Evidence Archive", href: "/evidence", desc: "2,304 primary source documents" },
                { label: "Master Forensic Evidence Report", href: "/master-forensic-evidence-report", desc: "The complete evidentiary record" },
                { label: "Master Evidence Register", href: "/master-evidence-register", desc: "Document-by-document index" },
                { label: "History Keeps Receipts", href: "/history-keeps-receipts", desc: "The civilisational argument" },
                { label: "No One Could Be That Smart", href: "/no-one-could-be-that-smart", desc: "Pattern recognition across 35 years" },
                { label: "Now Everybody Knows", href: "/now-everybody-knows", desc: "The public reach of the archive" },
                { label: "They Built Their Worst Nightmare", href: "/they-built-their-worst-nightmare", desc: "The consequence of suppression" },
              ].map(({ label, href, desc }) => (
                <a
                  key={href}
                  href={href}
                  className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-4 hover:border-zinc-600 transition-colors group space-y-1"
                  data-testid={`link-layer-${label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <p className="text-zinc-200 group-hover:text-white text-sm font-semibold transition-colors">{label}</p>
                  <p className="text-zinc-500 group-hover:text-zinc-400 text-xs transition-colors">{desc}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
