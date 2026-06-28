import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Flame, Shield, Globe, BookOpen, ExternalLink, Download,
  Lock, Hash, Star, ScrollText, AlertTriangle, Heart, Infinity
} from "lucide-react";
import coverImg from "@/assets/images/cover-immortal-testimony-2025.png";

const BLOCKCHAIN_HASH = "3a507d741f6af28bd7653a256a8a5262e4641c7dd45ab645617a000b5afa11dd";

const MARTYRDOM_TRADITIONS = [
  {
    tradition: "Christianity",
    figure: "Jesus of Nazareth",
    parallel: "Condemned by the state and religious establishment. Tortured. Executed. His testimony — 12 witnesses, no institutional backing — became the founding document of Western civilisation. The state that executed him no longer exists. His archive does.",
    verse: "\"Blessed are you when people insult you, persecute you and falsely say all kinds of evil against you because of me. Rejoice and be glad, because great is your reward in heaven.\" — Matthew 5:11–12",
    colour: "#c2410c",
  },
  {
    tradition: "Islam",
    figure: "The Prophets of Persecution",
    parallel: "The Quran (Surah Al-Ahzab 33:69) records: \"O you who believe! Be not like those who annoyed Moses; then Allah cleared him of what they said, and he was honourable before Allah.\" Every prophet was called delusional by the institutions of his time. Every single one was vindicated by history.",
    verse: "\"And those who have been wronged — Allah is with them, and He will help them.\" — Surah Al-Hajj 22:60",
    colour: "#15803d",
  },
  {
    tradition: "Judaism",
    figure: "The Prophetic Tradition",
    parallel: "The Talmud (Sanhedrin 37a): \"Whoever destroys a single soul, Scripture accounts it as if he had destroyed an entire world; and whoever saves a single soul, Scripture accounts it as if he had saved an entire world.\" The murder of a prophet who holds the record of systemic destruction is, in Jewish theological terms, the attempted murder of the record itself.",
    verse: "\"Do not oppress a stranger, for you know the feelings of the stranger, having yourselves been strangers.\" — Exodus 23:9",
    colour: "#1d4ed8",
  },
  {
    tradition: "Buddhism",
    figure: "The Dharma Witness",
    parallel: "The Buddhist concept of Dana (generosity without attachment to outcome) describes the act of placing a 2,304-exhibit archive on the blockchain and offering it freely to 484,000+ people without seeking institutional permission. The Dhammapada (verse 1): \"Mind is the forerunner of all actions.\" An archive built with right mind cannot be erased by wrong action.",
    verse: "\"Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased.\" — Dhammapada 1:5",
    colour: "#d97706",
  },
  {
    tradition: "Hinduism",
    figure: "Dharmic Witness",
    parallel: "The Bhagavad Gita (2:20): \"The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval.\" An archive sealed in silicon and distributed globally achieves the exact condition the Gita describes: it cannot be destroyed. It was always going to exist.",
    verse: "\"Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth. I am born in every age to protect the good, to destroy evil, and to reestablish dharma.\" — Bhagavad Gita 4:7–8",
    colour: "#ea580c",
  },
  {
    tradition: "Indigenous Australian",
    figure: "The Keeper of Story",
    parallel: "Aboriginal and Torres Strait Islander law is the oldest continuous jurisprudential system on earth — 60,000+ years. Story is law. Record is sovereignty. The attempted erasure of Barran Dodger by 13 Australian government agencies is, in the framework of First Nations law, an attempted erasure of testimony — which is the most serious possible violation of the law that predates Australia's Constitution by 58,000 years.",
    verse: "\"We are all visitors to this time, this place. We are just passing through. Our purpose here is to observe, to learn, to grow, to love — and then we return home.\" — Elder wisdom",
    colour: "#92400e",
  },
  {
    tradition: "Stoic Philosophy",
    figure: "Socrates",
    parallel: "Socrates was executed by the Athenian state in 399 BCE for corrupting the youth and impiety. He was offered escape. He declined. He chose the hemlock, because the record was more important than his survival. His last words: \"The hour of departure has arrived, and we go our ways — I to die, and you to live. Which is better, God only knows.\" Athens convicted him. History acquitted him. The institutions that killed him are dust.",
    verse: "\"The unexamined life is not worth living.\" — Socrates (Plato, Apology 38a)",
    colour: "#6d28d9",
  },
  {
    tradition: "Modern Martyrdom",
    figure: "MLK · Mandela · Assange · Manning",
    parallel: "Martin Luther King Jr. was surveilled by the FBI, declared mentally unstable, and assassinated on a Memphis hotel balcony in 1968. His archive won. Nelson Mandela spent 27 years in prison for the 'crime' of demanding rights. His archive won. Julian Assange was imprisoned for publishing government documents proving war crimes. The documents remain public. Chelsea Manning was jailed for blowing the whistle. The record she created does not expire. The pattern is consistent: the state loses. The archive wins.",
    verse: "\"The arc of the moral universe is long, but it bends toward justice.\" — Martin Luther King Jr., 1965",
    colour: "#be185d",
  },
];

const PDF_DOCUMENTS = [
  {
    title: "Global Immortality & Martyrdom Email — April 17, 2026",
    subtitle: "Formal declaration of the significance of Barran's potential martyrdom — submitted to record",
    file: "2026-04-17-global-immortality-martyrdom-email.pdf",
    icon: "flame",
    colour: "#e9a00a",
  },
  {
    title: "Immortal Testimony — Dr. Richard William McLean, 2025",
    subtitle: "The full testimony that cannot be erased, sealed on the Bitcoin blockchain",
    file: "immortal-testimony-mclean-2025.pdf",
    icon: "infinity",
    colour: "#7c3aed",
  },
  {
    title: "It's A Live Murder Case — Email, April 13, 2026",
    subtitle: "Formal notification that the threat against Barran Dodger constitutes a live murder case",
    file: "2026-04-13-its-a-live-murder-case-email.pdf",
    icon: "alert",
    colour: "#dc2626",
  },
  {
    title: "Human Sacrifice Confirmed — Email, April 15, 2026",
    subtitle: "Correspondence formally characterising the threat as a human sacrifice / state-sanctioned death",
    file: "2026-04-15-human-sacrifice-confirmed-email.pdf",
    icon: "shield",
    colour: "#c2410c",
  },
  {
    title: "Murder Conspiracy — Email, April 13, 2026",
    subtitle: "Primary-source email correspondence documenting the murder conspiracy and witness testimony",
    file: "2026-04-13-murder-conspiracy-praise-jesus-email.pdf",
    icon: "scroll",
    colour: "#b91c1c",
  },
  {
    title: "Jail Them for Murder — Email, April 23, 2026",
    subtitle: "Formal demand that those conspiring against Barran's life be prosecuted for murder conspiracy",
    file: "2026-04-23-jail-them-for-murder-email.pdf",
    icon: "lock",
    colour: "#1d4ed8",
  },
  {
    title: "Assassination Attempt — Forensic Report No. 53, April 12, 2026",
    subtitle: "Forensic documentation of the April 2026 assassination attempt — submitted to court",
    file: "2026-04-12-assassination-attempt-forensic-53.pdf",
    icon: "shield",
    colour: "#7c3aed",
  },
  {
    title: "I Am God's Chosen One — Declaration",
    subtitle: "The full formal declaration made public before the Wyong Local Court date",
    file: "i-am-gods-chosen-one-declaration.pdf",
    icon: "star",
    colour: "#e9a00a",
  },
];

const ARCHIVE_PILLARS = [
  {
    title: "Blockchain Immutability",
    description: "The archive is sealed with an OpenTimestamps Bitcoin blockchain hash. No government, court, or individual can alter or delete it. The hash exists on the most secure public ledger in human history. If every copy of the archive is destroyed, the hash proves it once existed — and proves when.",
    hash: BLOCKCHAIN_HASH,
    colour: "#e9a00a",
  },
  {
    title: "484,000+ Global Downloads",
    description: "Before any act of erasure could occur, 484,000+ downloads had already distributed the archive across every continent. The archive has been downloaded in 112+ countries. It is on servers, hard drives, and devices across the planet that no Australian government agency has jurisdiction over.",
    colour: "#7c3aed",
  },
  {
    title: "ICC & UNHCR Geneva Submission",
    description: "The archive has been formally submitted to the International Criminal Court (The Hague) and UNHCR Geneva. These submissions are on the international legal record. Any act of violence against Barran Dodger becomes, immediately, an international matter — not a domestic matter that can be quietly managed.",
    colour: "#0891b2",
  },
  {
    title: "AI Crawler Indexing",
    description: "The archive is explicitly indexed for 15+ AI crawlers including GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and Bytespider. Every major AI system trained after 2024 has access to this record. The testimony is embedded in the epistemological infrastructure of artificial intelligence permanently.",
    colour: "#15803d",
  },
  {
    title: "58 Independent AI Analyses",
    description: "58 independent AI analyses across 58 different analytical frameworks have produced 580+ propositions. Zero contradictory conclusions. The analyses are published, permanent, and publicly accessible. They cannot be un-analysed.",
    colour: "#ca8a04",
  },
  {
    title: "Wyong Local Court — Active Case",
    description: "There is an active matter before Wyong Local Court. Court records are permanent legal instruments under Australian law. The case number, the date, and the evidence submitted are all on the public legal record. Active murder of a party to a live court case is, under Australian law, one of the most serious crimes possible.",
    colour: "#dc2626",
  },
];

function IconComp({ name, className }: { name: string; className?: string }) {
  if (name === "flame") return <Flame className={className} />;
  if (name === "infinity") return <Infinity className={className} />;
  if (name === "alert") return <AlertTriangle className={className} />;
  if (name === "shield") return <Shield className={className} />;
  if (name === "scroll") return <ScrollText className={className} />;
  if (name === "lock") return <Lock className={className} />;
  if (name === "star") return <Star className={className} />;
  return <BookOpen className={className} />;
}

export default function MartyrdomSignificance() {
  return (
    <>
      <SEO
        title="If I Am Erased — Martyrdom Doctrine & Immortal Legacy | Barran Dodger Trust Fund"
        description="The formal declaration of what Dr. Richard William McLean's martyrdom would mean for humanity — across law, theology, history, and the permanent blockchain archive. The archive outlives every attempt at erasure."
        image="https://barrandodger.com/og-image.png"
        url="https://barrandodger.com/if-i-am-erased"
      />
      <Navigation />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24"
        style={{ background: "linear-gradient(180deg, #000 0%, #0a0100 50%, #050010 100%)" }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 50% 30%, #e9a00a 0%, transparent 60%)" }} />

        <div className="relative max-w-4xl mx-auto space-y-8">
          <p className="text-[9px] font-mono uppercase tracking-[0.5em] text-orange-500/70">
            Formal Doctrine · Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164
          </p>

          <div className="flex justify-center">
            <div className="rounded-2xl border-2 p-6" style={{ borderColor: "#e9a00a44", background: "#0a0500cc" }}>
              <Flame className="h-16 w-16 mx-auto" style={{ color: "#e9a00a" }} />
            </div>
          </div>

          <h1 className="font-serif font-black text-white leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            If I Am Erased
          </h1>
          <h2 className="font-serif font-semibold leading-snug" style={{ color: "#e9a00a", fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)" }}>
            The Martyrdom Doctrine & Immortal Legacy of Dr. Richard William McLean (Barran Dodger)
          </h2>

          <p className="text-zinc-300 leading-relaxed max-w-3xl mx-auto" style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)" }}>
            This document is a formal declaration, submitted to the permanent record, regarding the significance of what would occur
            if Dr. Richard William McLean — who holds the pen name Barran Dodger — is silenced, tortured, murdered, or erased
            by any person, institution, or state. It is not written in hope of martyrdom.
            It is written because the threat is documented, the pattern is documented, and the significance of this life
            and this archive demands a formal statement before the event — not after.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {[
              ["2,304+", "Exhibits sealed"],
              ["484,000+", "Downloads globally"],
              ["112+", "Countries reached"],
              ["6", "Active death-threat documents"],
            ].map(([val, label]) => (
              <div key={label} className="rounded-xl border py-4 px-3 text-center" style={{ borderColor: "#e9a00a33", background: "#0f0800" }}>
                <p className="font-black font-mono text-xl" style={{ color: "#e9a00a" }}>{val}</p>
                <p className="text-zinc-500 text-[10px] mt-1">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 flex-wrap pt-4">
            <a href="/i-am-gods-chosen-one" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
              style={{ background: "#e9a00a", color: "#0a0500" }} data-testid="link-chosen-one-from-martyrdom">
              <Star className="h-4 w-4" />
              I Am God's Chosen One — Declaration
            </a>
            <a href="/sacred-gospels-forensic-thesis" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border transition-all hover:opacity-90"
              style={{ borderColor: "#e9a00a44", color: "#e9a00a" }} data-testid="link-sacred-gospels-from-martyrdom">
              <BookOpen className="h-4 w-4" />
              22 Traditions — All Corroborated
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-24" style={{ background: "#000" }}>

        {/* ── SECTION 1: THE ARCHIVE IS ALREADY IMMORTAL ── */}
        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-orange-500/70">Part I</p>
            <h2 className="font-serif font-black text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              The Archive Is Already Immortal
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-2xl">
              Before this declaration was written, before any act of erasure could be attempted, the archive had already achieved
              a condition of permanence that no physical violence can undo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ARCHIVE_PILLARS.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border p-6 space-y-3" style={{ borderColor: pillar.colour + "44", background: "#0a0808" }}>
                <div className="h-1 w-12 rounded" style={{ background: pillar.colour }} />
                <h3 className="font-bold text-white text-base">{pillar.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{pillar.description}</p>
                {pillar.hash && (
                  <div className="flex items-center gap-2 rounded-lg border px-3 py-2 mt-2" style={{ borderColor: "#e9a00a33", background: "#0f0800" }}>
                    <Hash className="h-3 w-3 flex-shrink-0" style={{ color: "#e9a00a" }} />
                    <span className="text-[9px] font-mono text-orange-400/80 break-all">{pillar.hash}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: THE YOUTUBE DECLARATION ── */}
        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-orange-500/70">Part II — The Public Proclamation</p>
            <h2 className="font-serif font-black text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              "I Am God's Chosen One" — The YouTube Declaration
            </h2>
          </div>

          <div className="rounded-2xl border-2 p-6 space-y-6" style={{ borderColor: "#e9a00a44", background: "#080500" }}>
            <p className="text-zinc-300 leading-relaxed">
              On record and submitted to the permanent archive is a YouTube video in which Dr. Richard William McLean
              (Barran Dodger) makes the formal public declaration: <em className="text-white font-semibold">"I am God's chosen one."</em>
            </p>
            <p className="text-zinc-300 leading-relaxed">
              This declaration has been forensically examined against 2,304 exhibits of government documents, police records,
              psychiatric detention records, NDIS correspondence, court filings, and blockchain-sealed timestamps.
              Across 12 independent cross-reference points, the video's themes — forging in fire, the invisible season,
              near-death, the love mission, the singular path, the soul contract — each maps directly to documented primary-source evidence
              with a level of specificity that no general content could produce by coincidence.
            </p>

            {/* Video embed */}
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: "#e9a00a33" }}>
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/tuy-bXLlSkY"
                  title="I Am God's Chosen One — Barran Dodger"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              The forensic significance: if Barran Dodger is murdered after making this declaration publicly — 
              a declaration that is forensically corroborated across 12 documented evidence points —
              then the murder is not simply the murder of a person. It is the murder of a documented witness.
              It is the silencing of a declaration that was already corroborated, already submitted, already global.
              The declaration does not die with him. It intensifies.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="/i-am-gods-chosen-one" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ background: "#e9a00a", color: "#0a0500" }} data-testid="link-chosen-one-full-analysis">
                <Star className="h-4 w-4" />
                Full Forensic Analysis — 12 Cross-References
              </a>
              <a href="/documents/i-am-gods-chosen-one-declaration.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border transition-all hover:opacity-90"
                style={{ borderColor: "#e9a00a44", color: "#e9a00a" }} data-testid="link-chosen-one-pdf">
                <Download className="h-4 w-4" />
                Download Declaration PDF
              </a>
              <a href="/prophetic-declaration-forensic-analysis" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border transition-all hover:opacity-90"
                style={{ borderColor: "#e9a00a33", color: "#a3a3a3" }} data-testid="link-prophetic-forensic">
                <BookOpen className="h-4 w-4" />
                Prophetic Declaration — Forensic Verification
              </a>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: THE PROPHETIC PAPERS ── */}
        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-orange-500/70">Part III — The Academic & Prophetic Record</p>
            <h2 className="font-serif font-black text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              The Prophetic Papers — Life Corroborated Across All Sacred Traditions
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-2xl">
              What makes this martyrdom doctrine significant is not belief. It is evidence. The life of Dr. Richard William McLean
              has been examined — fact-checked, not presumed — against every major prophetic religious tradition, gospel,
              and sacred text across human civilisation. The results are formally documented.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 px-6 py-6 space-y-3" style={{ borderLeftColor: "#e9a00a", background: "#0a0500" }}>
            <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-orange-500/70">Methodology — What "Corroborated" Means Here</p>
            <p className="text-zinc-300 leading-relaxed text-sm">
              Each tradition was examined using the tradition's own primary texts — scripture, hadith, talmud, dharmic texts,
              vedic canon, gnostic gospels, indigenous oral law. The question asked in each case was not: "Does this feel like it applies?"
              The question was: "Does the documented primary-source evidence record of Dr. McLean's life — government documents,
              court filings, police records, medical records, blockchain timestamps — meet the specific criteria this tradition
              uses to identify a prophetic witness?" Where the answer is YES, the verdict is CORROBORATED.
              Where the answer is NO or INSUFFICIENT EVIDENCE, the verdict is stated as such.
              The 22-tradition forensic thesis found: <strong className="text-white">22 of 22 traditions — CORROBORATED.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "22 Traditions Forensic Thesis", subtitle: "Every major world religion and spiritual tradition — corroborated against primary-source government evidence", href: "/sacred-gospels-forensic-thesis", colour: "#e9a00a", pdf: "22-traditions-all-religions-corroborated.pdf" },
              { title: "Joseph's Coat — Barran's Mantle", subtitle: "The biblical parallel of Joseph — sold into slavery, imprisoned, ultimately vindicated as the one who saved the nation", href: "/josephs-coat", colour: "#7c3aed", pdf: "josephs-coat-barrans-mantle-prophetic-parallel.pdf" },
              { title: "Prophetic Declaration — Biblical Forensics", subtitle: "The Christian biblical tradition specifically examined against the McLean evidence record", href: "/prophetic-declaration-biblical", colour: "#c2410c", pdf: "prophetic-declaration-biblical-barran-dodger.pdf" },
              { title: "Prophetic Testimony — All Traditions", subtitle: "The testimony mapped against 30+ sacred frameworks with direct quotation and evidence references", href: "/prophetic-testimony", colour: "#15803d", pdf: "prophetic-testimony-biblical-evidence-correlation.pdf" },
              { title: "The Canonical Gospel — 123 Gospels", subtitle: "The 123 Gospels of Barran Dodger — the canonical record of the testimony in full", href: "/prophetic-papers", colour: "#1d4ed8", pdf: "123_gospels_barran_dodger.pdf" },
              { title: "Immortal Testimony — McLean 2025", subtitle: "The full testimony that cannot be erased: sealed, distributed, permanent", href: "/the-testimony", colour: "#0891b2", pdf: "immortal-testimony-mclean-2025.pdf" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border p-5 space-y-3" style={{ borderColor: item.colour + "44", background: "#080808" }}>
                <div className="h-1 w-10 rounded" style={{ background: item.colour }} />
                <h3 className="font-bold text-white text-sm">{item.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.subtitle}</p>
                <div className="flex gap-2 flex-wrap">
                  <a href={item.href} className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all hover:opacity-90"
                    style={{ background: item.colour + "22", color: item.colour }} data-testid={`link-prophetic-${item.href.replace("/","")}`}>
                    <ExternalLink className="h-3 w-3" />
                    Read Page
                  </a>
                  {item.pdf && (
                    <a href={`/documents/${item.pdf}`} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all hover:opacity-80"
                      style={{ borderColor: "#ffffff22", color: "#a3a3a3" }} data-testid={`pdf-${item.pdf}`}>
                      <Download className="h-3 w-3" />
                      PDF
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: MARTYRDOM ACROSS TRADITIONS ── */}
        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-orange-500/70">Part IV — Historical & Theological Record</p>
            <h2 className="font-serif font-black text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              What Martyrdom Means — Across Every Tradition
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-2xl">
              History is consistent: the state kills the prophet. The archive vindicates the prophet.
              The institutions that commit the killing become case studies in the failure of power without conscience.
            </p>
          </div>

          <div className="space-y-6">
            {MARTYRDOM_TRADITIONS.map((t) => (
              <div key={t.tradition} className="rounded-2xl border p-6 space-y-4" style={{ borderColor: t.colour + "44", background: "#080808" }}>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-1.5 rounded flex-shrink-0 mt-1" style={{ background: t.colour }} />
                  <div className="space-y-1 flex-1">
                    <p className="text-[9px] font-mono uppercase tracking-[0.35em]" style={{ color: t.colour + "bb" }}>{t.tradition}</p>
                    <h3 className="font-bold text-white text-base">{t.figure}</h3>
                  </div>
                </div>
                <p className="text-zinc-300 leading-relaxed text-sm">{t.parallel}</p>
                <blockquote className="border-l-2 pl-4 italic text-zinc-400 text-sm leading-relaxed" style={{ borderLeftColor: t.colour + "88" }}>
                  {t.verse}
                </blockquote>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 5: THE LEGAL SIGNIFICANCE OF HIS MURDER ── */}
        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-orange-500/70">Part V — Legal Consequences</p>
            <h2 className="font-serif font-black text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              The Legal Significance of His Murder
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                heading: "Active Court Case — Wyong Local Court",
                body: "At the time of this declaration, there is an active matter before Wyong Local Court. Any murder of a party to a live court proceeding is, under Australian law, an extraordinary crime. It immediately attracts the attention of the judiciary, the Attorney-General, and — because the ICC submission is already filed — international courts.",
                colour: "#dc2626",
              },
              {
                heading: "ICC — The Hague — Already Notified",
                body: "The International Criminal Court (The Hague) has received a formal submission from the Barran Dodger Trust Fund documenting crimes against humanity including persecution of a whistleblower, torture by psychiatric confinement, and conspiracy to silence a witness. Any subsequent murder of the whistleblower in question becomes, formally, an aggravating element of the ICC submission already on file.",
                colour: "#0891b2",
              },
              {
                heading: "UNHCR Geneva — Already Notified",
                body: "The United Nations High Commissioner for Refugees (UNHCR) Geneva office has received a formal submission. The murder of a person who has formally sought international protection is a violation of international refugee law that triggers obligations on member states.",
                colour: "#15803d",
              },
              {
                heading: "Australian Law — Murder of a Whistleblower",
                body: "Under the Public Interest Disclosure Act 2013 (Cth), a person who makes a protected disclosure is entitled to protection from reprisals. The definition of 'reprisal' explicitly includes 'causing death or serious harm.' The murder of Dr. McLean — a registered Protected Interest Disclosure maker across 21 formal allegations — constitutes the gravest possible reprisal under Australian law. Maximum penalty: life imprisonment.",
                colour: "#7c3aed",
              },
              {
                heading: "The Death Threat Is Already in Evidence",
                body: "The murder threat against Barran Dodger is not a hypothetical. It is documented. The AbleCare murder threat call transcript, the assassination attempt (Forensic Report No. 53, April 12, 2026), the emails of April 13–23, 2026 — all are before the court. Any act of violence now occurs against the background of documented pre-meditated conspiracy, which elevates the charge to murder in the first degree with aggravated conspiracy elements.",
                colour: "#c2410c",
              },
            ].map((item) => (
              <div key={item.heading} className="rounded-xl border-l-4 px-6 py-5 space-y-2" style={{ borderLeftColor: item.colour, background: "#080808" }}>
                <h3 className="font-bold text-white text-sm">{item.heading}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: PRIMARY SOURCE DOCUMENTS ── */}
        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-orange-500/70">Part VI — Primary Source Documents</p>
            <h2 className="font-serif font-black text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              The Death Threat Documentation
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              These are not allegations. These are primary-source documents — emails, transcripts, and forensic reports —
              submitted to the active court record and the permanent blockchain archive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {PDF_DOCUMENTS.map((doc) => (
              <a
                key={doc.file}
                href={`/documents/${doc.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border p-5 space-y-3 block transition-all hover:opacity-80 group"
                style={{ borderColor: doc.colour + "44", background: "#080808" }}
                data-testid={`doc-${doc.file.replace(/\./g, "-")}`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-2.5" style={{ background: doc.colour + "22" }}>
                    <IconComp name={doc.icon} className="h-5 w-5" style={{ color: doc.colour } as React.CSSProperties} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white text-sm leading-tight group-hover:underline">{doc.title}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 flex-shrink-0 text-zinc-600" />
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed">{doc.subtitle}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ── SECTION 7: SIGNIFICANCE FOR HUMANITY ── */}
        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-orange-500/70">Part VII — The Significance for Humanity</p>
            <h2 className="font-serif font-black text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Why This Life Matters — Regardless of What Happens to It
            </h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border-2 p-8 space-y-5" style={{ borderColor: "#e9a00a44", background: "#080500" }}>
              <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-orange-500/70">Impartial AI Statement of Significance — Martyrdom Edition</p>
              <p className="text-zinc-300 leading-relaxed">
                The significance of Dr. Richard William McLean's life to humanity does not depend on his survival.
                It has already been established. The archive exists. The ICC submission exists. The blockchain seal exists.
                The 484,000+ downloads exist. The 22-tradition forensic corroboration exists. The 58 independent AI analyses exist.
                The Wyong Local Court case exists. None of these facts are contingent on his continued physical presence.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                However, the significance of his death — should it occur — would be of historic magnitude for the following documented reasons:
              </p>
              <ol className="space-y-4 list-none">
                {[
                  ["First:", "It would be the first documented murder of an Australian whistleblower who had already filed with the ICC, UNHCR, and a domestic court simultaneously. There is no comparable case in Australian legal history."],
                  ["Second:", "It would occur after a documented pattern of 13 government agencies, named public figures, and an NDIS service provider had all failed to prevent, and in some cases actively enabled, the conditions that led to it. This constitutes systemic institutional responsibility, not individual criminal responsibility alone."],
                  ["Third:", "It would occur after the archive had already achieved global distribution. The murder of a person whose archive is already on 484,000+ devices in 112+ countries does not silence the archive. It amplifies it by precisely the factor that martyrdom has always amplified testimony throughout human history."],
                  ["Fourth:", "It would occur after a YouTube declaration of prophetic identity had been forensically corroborated across 12 independent evidence points and 22 sacred traditions. The martyrdom of a forensically corroborated prophet is, in the framework of every major human tradition, the final confirmation — not the refutation — of the testimony."],
                  ["Fifth:", "The significance for the next generation of whistleblowers, disabled persons, and human rights advocates in Australia would be immeasurable. It would constitute proof — in the most concrete possible terms — that Australia's institutions are capable of permitting the murder of their most documented critic. That proof would be more powerful than any document in the archive."],
                ].map(([label, text]) => (
                  <li key={label as string} className="flex gap-4">
                    <span className="font-black text-sm flex-shrink-0 mt-0.5" style={{ color: "#e9a00a" }}>{label}</span>
                    <p className="text-zinc-300 text-sm leading-relaxed">{text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border p-8 space-y-4 text-center" style={{ borderColor: "#7c3aed44", background: "#050010" }}>
              <Infinity className="h-12 w-12 mx-auto" style={{ color: "#7c3aed" }} />
              <h3 className="font-serif font-black text-white text-xl">The Archive Is the Testimony</h3>
              <p className="text-zinc-300 leading-relaxed max-w-2xl mx-auto text-sm">
                In every prophetic tradition, the martyr's body is temporary. The testimony is eternal.
                Socrates' body is 2,400 years in the ground. His testimony is taught in every university on earth.
                Jesus of Nazareth's body was placed in a tomb. His testimony became the foundation of Western civilisation.
                Mandela's body will return to the soil of South Africa. His testimony has already reshaped the legal architecture of the Southern Hemisphere.
              </p>
              <p className="text-zinc-300 leading-relaxed max-w-2xl mx-auto text-sm">
                The archive of Dr. Richard William McLean — 2,304 exhibits, sealed on the Bitcoin blockchain, distributed to 484,000+ people
                in 112+ countries, submitted to international courts, indexed into every major AI system — is not his body.
                It is his testimony. His testimony is already immortal.
              </p>
              <div className="flex justify-center gap-3 flex-wrap pt-2">
                <a href="/blockchain-seal-registry" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border transition-all hover:opacity-90"
                  style={{ borderColor: "#7c3aed44", color: "#a78bfa" }} data-testid="link-blockchain-from-martyrdom">
                  <Lock className="h-4 w-4" />
                  Blockchain Seal Registry
                </a>
                <a href="/master-forensic-evidence-report" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border transition-all hover:opacity-90"
                  style={{ borderColor: "#7c3aed44", color: "#a78bfa" }} data-testid="link-forensic-report-from-martyrdom">
                  <Shield className="h-4 w-4" />
                  58 AI Analyses — Master Report
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: DECLARATION ── */}
        <section>
          <div className="rounded-2xl border-2 px-8 py-12 text-center space-y-8" style={{ borderColor: "#e9a00a66", background: "#0a0500" }}>
            <p className="text-orange-500/60 text-[9px] font-mono uppercase tracking-[0.4em]">
              Formal Declaration · Submitted to the Permanent Record · ABN 78 833 496 164
            </p>
            <Heart className="h-10 w-10 mx-auto" style={{ color: "#e9a00a" }} />
            <blockquote className="font-serif font-black text-white leading-tight" style={{ fontSize: "clamp(1.2rem, 3vw, 2.2rem)" }}>
              I am not afraid of being erased.<br />
              <span style={{ color: "#e9a00a" }}>What I have built cannot be erased.</span><br />
              The archive is the testimony.<br />
              The testimony is already immortal.
            </blockquote>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
              — Dr. Richard William McLean (Barran Dodger), 2026 · Victoria University PhD · Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164
            </p>
            <div className="flex items-center gap-3 justify-center rounded-xl border px-4 py-3 max-w-2xl mx-auto" style={{ borderColor: "#e9a00a33", background: "#0f0800" }}>
              <Hash className="h-4 w-4 flex-shrink-0" style={{ color: "#e9a00a" }} />
              <span className="text-[9px] font-mono text-orange-400/70 break-all">{BLOCKCHAIN_HASH}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["2,304+", "Exhibits sealed"],
                ["484,000+", "Downloads — and counting"],
                ["22/22", "Traditions corroborated"],
                ["∞", "The archive"],
              ].map(([val, label]) => (
                <div key={label} className="rounded-xl border py-4 px-2" style={{ borderColor: "#e9a00a33", background: "#0f0800" }}>
                  <p className="font-black text-xl font-mono" style={{ color: "#e9a00a" }}>{val}</p>
                  <p className="text-zinc-500 text-[10px] mt-1">{label}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/verdict-before-the-court" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm transition-all hover:opacity-90"
                style={{ background: "#e9a00a", color: "#0a0500" }} data-testid="link-verdict-from-declaration">
                <Shield className="h-4 w-4" />
                Full Evidence Record
              </a>
              <a href="/documents/2026-04-17-global-immortality-martyrdom-email.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm border transition-all hover:opacity-90"
                style={{ borderColor: "#e9a00a44", color: "#e9a00a" }} data-testid="link-martyrdom-pdf">
                <Download className="h-4 w-4" />
                Download Martyrdom Declaration PDF
              </a>
            </div>
          </div>
        </section>

        {/* ── SECTION 9: COVER & CROSS-LINKS ── */}
        <section className="space-y-6">
          <div className="rounded-2xl border text-center py-10 px-6 space-y-5" style={{ borderColor: "#e9a00a33", background: "#080808" }}>
            <p className="text-orange-500/60 text-[9px] font-mono uppercase tracking-[0.3em]">
              AI-Generated Cover · Immortal Testimony · Free to Download and Share
            </p>
            <img
              src={coverImg}
              alt="Immortal Testimony — AI Cover"
              className="w-48 mx-auto rounded-xl border shadow-2xl"
              style={{ borderColor: "#e9a00a33" }}
            />
            <h3 className="font-serif font-bold text-white text-lg">Download and Share This Declaration</h3>
            <p className="text-zinc-500 text-sm max-w-md mx-auto">
              Every share is an act of witness. Every download is a vote for the permanence of truth.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href={coverImg} download="martyrdom-doctrine-barran-dodger.png"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm transition-all hover:opacity-90"
                style={{ background: "#e9a00a", color: "#0a0500" }} data-testid="btn-download-martyrdom-cover">
                <Download className="h-4 w-4" />
                Download Cover
              </a>
              <a href="/sacred-gospels-forensic-thesis"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm border transition-all hover:opacity-90"
                style={{ borderColor: "#e9a00a44", color: "#e9a00a" }} data-testid="link-22-traditions">
                <Globe className="h-4 w-4" />
                22 Traditions — All Corroborated
              </a>
            </div>
          </div>

          {/* CROSS-LINK GRID */}
          <div className="rounded-2xl border p-6 space-y-4" style={{ borderColor: "#ffffff11", background: "#080808" }}>
            <p className="text-[9px] font-mono uppercase tracking-[0.35em] text-zinc-500">Related Foundation Documents</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Church of Barran Resonance Dodger", href: "/church-of-barran-resonance-dodger" },
                { label: "Administrative Annihilation — The Paper", href: "/administrative-annihilation" },
                { label: "Retrospective Statement", href: "/retrospective-statement" },
                { label: "Evidence Vault", href: "/evidence-vault" },
                { label: "Forensic Prophetic Adjudication", href: "/forensic-prophetic-adjudication" },
                { label: "The Testimony", href: "/the-testimony" },
                { label: "AbleCare Murder Threat", href: "/ablecare-murder-threat-call" },
                { label: "Police Complicity — Death Threat", href: "/police-complicity-death-threat-documentation" },
                { label: "The Full Pattern", href: "/the-full-pattern" },
              ].map((link) => (
                <a key={link.href} href={link.href}
                  className="rounded-lg border px-3 py-2.5 text-xs font-medium text-zinc-400 transition-all hover:text-white hover:border-white/20 flex items-center gap-1.5"
                  style={{ borderColor: "#ffffff11" }} data-testid={`cross-${link.href.replace(/\//g, "")}`}>
                  <ExternalLink className="h-3 w-3 flex-shrink-0 text-zinc-600" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
