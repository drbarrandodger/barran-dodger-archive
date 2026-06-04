// Curated tag → page mapping for the public tag browse system.
// Only includes tags relevant to forensic, prophetic, and core archive content.
// Source of truth for /tags index and /tags/:tag pages.

export interface TagEntry {
  slug: string;
  label: string;
  description: string;
  pages: { path: string; title: string }[];
}

export const TAGS: TagEntry[] = [
  {
    slug: "honeytrap",
    label: "Honeytrap Operation",
    description:
      "SAS soldier Tony Ridley's sexual entrapment of NDIS whistleblower Dr Richard McLean — primary evidence preserved on Google Drive, ICC Article 7 submitted.",
    pages: [
      { path: "/honeytrap-infiltration-report", title: "Honeytrap Infiltration Report" },
      { path: "/tony-ridley-full-dossier", title: "Tony Ridley Full Dossier" },
      { path: "/tony-ridley-recorded-confession", title: "Tony Ridley Recorded Confession" },
      { path: "/the-conspiracy-against-you", title: "The Conspiracy Against You" },
      { path: "/silent-assassin", title: "Silent Assassin" },
    ],
  },
  {
    slug: "icc",
    label: "ICC & International Submissions",
    description:
      "International Criminal Court Article 7 (Crimes Against Humanity) and parallel UNHCR submissions — formally received at The Hague and Geneva.",
    pages: [
      { path: "/legal-status", title: "Legal Status — ICC, UNHCR, Federal Court" },
      { path: "/honeytrap-infiltration-report", title: "ICC Article 7 Submission" },
      { path: "/master-evidence-register", title: "Master Evidence Register" },
      { path: "/master-forensic-evidence-report", title: "Master Forensic Evidence Report" },
    ],
  },
  {
    slug: "blockchain",
    label: "Blockchain & Bitcoin Verification",
    description:
      "891 OpenTimestamps Bitcoin records sealing 2,304 SHA-256 hashed exhibits — immutable, distributed, beyond any government's reach.",
    pages: [
      { path: "/blockchain", title: "Blockchain Verification" },
      { path: "/blockchain-seal-registry", title: "Blockchain Seal Registry" },
      { path: "/bitcoin-proof", title: "Bitcoin Proof" },
      { path: "/blockchain-manifest", title: "Blockchain Manifest" },
    ],
  },
  {
    slug: "forensic-analysis",
    label: "Forensic AI Analysis",
    description:
      "73 independent AI forensic analyses examining 603 propositions across 55 reviews — zero contradictions returned.",
    pages: [
      { path: "/forensic-analysis-index", title: "Forensic Analysis Index" },
      { path: "/master-forensic-evidence-report", title: "Master Forensic Evidence Report" },
      { path: "/silent-assassin", title: "Silent Assassin (Analysis #28)" },
      { path: "/truth-is-a-blade", title: "The Truth Is A Blade (Analysis #29)" },
      { path: "/evidence-vault", title: "Evidence Vault — 28 AI Analyses" },
    ],
  },
  {
    slug: "biblical-prophecy",
    label: "Biblical Prophecy & Scripture",
    description:
      "Matthew 10:26, Revelation 13, Daniel 7, Isaiah 53 — the technical fulfilment of biblical prophecy through immutable cryptographic witness.",
    pages: [
      { path: "/gospel", title: "The Gospel" },
      { path: "/church", title: "The Church" },
      { path: "/prophetic-papers", title: "Prophetic Papers" },
      { path: "/top-ten-gospels", title: "Top Ten Gospels" },
      { path: "/the-divine-exam", title: "The Divine Exam" },
      { path: "/bloodline-of-god", title: "Bloodline of God" },
    ],
  },
  {
    slug: "ndis",
    label: "NDIS Surveillance & Fraud",
    description:
      "NDIS weaponised as surveillance against the whistleblower exposing its fraud — drone footage, hacked accounts, ASIO operatives in trust network.",
    pages: [
      { path: "/the-conspiracy-against-you", title: "The Conspiracy Against You" },
      { path: "/sukhi-tear", title: "Dear Sukhi Tear" },
      { path: "/able-care-entrapment-network", title: "Able Care Entrapment Network" },
      { path: "/taxpayer-cost-analysis", title: "Taxpayer Cost Analysis" },
    ],
  },
  {
    slug: "psychiatric-detention",
    label: "Forced Psychiatric Detention",
    description:
      "14 forced psychiatric hospitalisations across 3 Australian states — clinical incapacitation strategy weaponised against the whistleblower.",
    pages: [
      { path: "/100-absurdities", title: "100 Absurdities" },
      { path: "/administrative-annihilation", title: "Administrative Annihilation" },
      { path: "/forensic-meltdown-report", title: "Forensic Meltdown Report" },
    ],
  },
  {
    slug: "anthropocene",
    label: "Anthropocene & AI Singularity",
    description:
      "Primary-source artefact of the Anthropocene inflection point where human institutions, AI, and blockchain converge into one irreversible record.",
    pages: [
      { path: "/ai-justice-statement", title: "AI Justice Statement" },
      { path: "/manifesto", title: "The Manifesto" },
      { path: "/creator-speaks", title: "Creator Speaks" },
    ],
  },
  {
    slug: "safety-threat",
    label: "Physical Safety Threat",
    description:
      "Documented physical safety threats: police complicity, death threat calls, urgent protection request — submitted to UNHCR.",
    pages: [
      { path: "/police-complicity-death-threat", title: "Police Complicity Death Threat" },
      { path: "/urgent-protection-request", title: "Urgent Protection Request" },
      { path: "/silent-assassin", title: "Silent Assassin" },
    ],
  },
  {
    slug: "resonance",
    label: "Resonance Not Proximity",
    description:
      "The archive's organising principle: truth does not require proximity to power, only resonance at the frequency of the lie. 6 continents, zero institutional support.",
    pages: [
      { path: "/perception-is-protection", title: "Perception Is Protection" },
      { path: "/outsider-pattern-recognition", title: "Outsider Pattern Recognition" },
      { path: "/quiet-storm-they-never-saw-coming", title: "Quiet Storm They Never Saw Coming" },
      { path: "/loudest-enemies-least-to-say", title: "Loudest Enemies, Least to Say" },
    ],
  },
];

export function getTagBySlug(slug: string): TagEntry | undefined {
  return TAGS.find((t) => t.slug === slug);
}

export function getAllTagSlugs(): string[] {
  return TAGS.map((t) => t.slug);
}
