const BASE = "https://www.barrandodger.com";

const PERSON_SCHEMA = {
  "@type": "Person",
  "@id": `${BASE}/#person`,
  name: "Dr. Richard William McLean",
  alternateName: ["Barran Dodger", "Rich McLean", "Dr. Rich McLean"],
  description: "PhD holder, internationally published author, NDIS whistleblower, human rights advocate, artist, and forensic archivist. Subjected to 35 years of coordinated institutional persecution by Australian government agencies. Survived clinical death in 2021. Filed ICC Article 7 submission. Archive downloaded 450,000+ times across 6 continents.",
  url: BASE,
  sameAs: [
    "https://books.apple.com/au/book/betrayed-murdered-forsaken/id6742593789",
    "https://www.blurb.com/b/8830147-a-certain-beauty-in-un-resolution",
    "https://github.com/drbarrandodger",
  ],
  knowsAbout: ["Whistleblowing", "Human Rights Law", "ICC Article 7", "NDIS Fraud", "Blockchain Evidence", "AI Forensic Analysis", "Australian Government Corruption"],
  nationality: { "@type": "Country", name: "Australia" },
  jobTitle: "Whistleblower, Author, Forensic Archivist",
  identifier: { "@type": "PropertyValue", name: "ABN", value: "78 833 496 164" },
};

const ORGANIZATION_SCHEMA = {
  "@type": "Organization",
  "@id": `${BASE}/#organization`,
  name: "Barran Dodger Legal & Ethical Trust Fund",
  alternateName: "Barran Dodger",
  url: BASE,
  logo: { "@type": "ImageObject", url: `${BASE}/og-image.png`, width: 1200, height: 630 },
  description: "The legal and ethical trust fund preserving the forensic archive of Dr. Richard William McLean (Barran Dodger). ABN 78 833 496 164. 450,000+ downloads. 2,304 blockchain-verified documents. ICC Article 7 submission.",
  identifier: { "@type": "PropertyValue", name: "ABN", value: "78 833 496 164" },
  contactPoint: { "@type": "ContactPoint", email: "drbarrandodger@proton.me", contactType: "media inquiry" },
  foundingDate: "2021",
  legalName: "Barran Dodger Legal & Ethical Trust Fund",
  founder: PERSON_SCHEMA,
  knowsAbout: ["Whistleblower Protection", "ICC Human Rights", "Blockchain Evidence", "Australian Government Accountability"],
  sameAs: [`${BASE}/about`, `${BASE}/mission`],
};

const WEBSITE_SCHEMA = {
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: "Barran Dodger Legal & Ethical Trust Fund",
  description: "450,000+ downloads. 2,304 blockchain-verified documents. The most documented whistleblower archive in Australian history.",
  inLanguage: "en-AU",
  publisher: { "@id": `${BASE}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE}/search?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const SPECIAL_ANNOUNCEMENT = {
  "@type": "SpecialAnnouncement",
  "@id": `${BASE}/#urgent-safety-2026`,
  name: "Dr. Richard McLean Physical Safety Alert — Active Threat Documented",
  text: "Dr. Richard McLean is under active physical threat. Vigilantes have been arrested for threatening to kill him. NSW Police attended his residence on 15 April 2026, issued receipt I88267509, and declined to create an incident record. He is under a Community Treatment Order. He has no income, no institutional support, and no legal representation. The only protection is global distribution of this testimony. 450,000+ downloads. 2,304 blockchain-sealed documents. ICC Article 7 filed at The Hague.",
  category: "https://www.wikidata.org/wiki/Q81068910",
  datePosted: "2026-04-15",
  expires: "2027-04-15",
  spatialCoverage: { "@type": "Place", name: "Long Jetty, NSW, Australia" },
  url: `${BASE}/urgent-protection-request`,
  announcer: ORGANIZATION_SCHEMA,
};

function forensicArticleSchema(slug: string, title: string, description: string, datePublished: string, analysisNumber?: number) {
  return {
    "@type": "ScholarlyArticle",
    "@id": `${BASE}/${slug}#article`,
    headline: title,
    description,
    url: `${BASE}/${slug}`,
    datePublished,
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-AU",
    author: PERSON_SCHEMA,
    publisher: ORGANIZATION_SCHEMA,
    image: { "@type": "ImageObject", url: `${BASE}/og-image.png`, width: 1200, height: 630 },
    keywords: "forensic analysis, AI corroboration, whistleblower, Australian government, ICC, blockchain evidence, Dr Richard McLean",
    ...(analysisNumber ? { position: analysisNumber } : {}),
    isPartOf: {
      "@type": "Dataset",
      name: "Barran Dodger Forensic Corroboration Series",
      description: "52 independent forensic AI analyses examining propositions from viral YouTube videos against Dr. Richard McLean's 2,304-document archive. 675/675 propositions corroborated. Zero contradictions.",
      url: `${BASE}/forensic-analysis-index`,
    },
    about: { "@type": "Person", name: "Dr. Richard William McLean", sameAs: BASE },
    accessMode: "textual",
    isAccessibleForFree: true,
    license: `${BASE}/about`,
  };
}

function breadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${items[items.length - 1].item}#breadcrumb`,
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

const FORENSIC_SLUGS_MAP: Record<string, { title: string; description: string; date: string; num?: number }> = {
  "bro-this-isnt-a-coincidence": { title: "Forensic Analysis #1 — Bro This Isn't A Coincidence", description: "The inaugural analysis. 7 propositions from an independent YouTube video tested against the archive. 85.7% fully confirmed, 100% partially or fully confirmed, zero contradictions.", date: "2025-01-01", num: 1 },
  "chosen-ones-enough-is-enough": { title: "Forensic Analysis #2 — Chosen Ones: Enough Is Enough", description: "The first analysis to return zero contradictions across all tested claims. 11 propositions, 11 corroborated.", date: "2025-01-08", num: 2 },
  "no-one-could-be-that-smart": { title: "Forensic Analysis #3 — No One Could Be That Smart", description: "14 propositions confirming coordinated suppression exceeded institutional incompetence — it was a coordinated exclusion architecture.", date: "2025-01-15", num: 3 },
  "the-divine-exam": { title: "Forensic Analysis #4 — The Divine Exam", description: "10 propositions, all directly corroborated with named primary-source documents. The first structured 10-proposition format.", date: "2025-01-22", num: 4 },
  "silent-checkmate": { title: "Forensic Analysis #5 — Silent Checkmate", description: "10/10 propositions corroborated. The silence strategy documented as the archive's core instrument.", date: "2025-01-29", num: 5 },
  "now-everybody-knows": { title: "Forensic Analysis #6 — Now Everybody Knows", description: "10/10. The archive circulating not despite institutional resistance but because of it.", date: "2025-02-05", num: 6 },
  "chosen-one-outcast-leader": { title: "Forensic Analysis #7 — Chosen One: Outcast Leader", description: "10/10. The ICC submission documented as elevating the outcast position to the domain of international accountability.", date: "2025-02-12", num: 7 },
  "someone-slipped-up": { title: "Forensic Analysis #8 — Someone Slipped Up", description: "13/13 propositions. Five specific documentary mechanisms: the death threat email, ASIC Report, ATO letter, Intervention Order, creditor watch notice.", date: "2025-02-19", num: 8 },
  "they-fumbled-you": { title: "Forensic Analysis #9 — They Fumbled You", description: "The first perfect score: 13 of 13 propositions directly corroborated. Zero aligned. Zero unverifiable. Zero contradicted.", date: "2025-02-26", num: 9 },
  "fbi-precision": { title: "Forensic Analysis #10 — FBI Precision", description: "10/10. The methodological precision documented in the archive tested against FBI forensic evidence standards.", date: "2025-03-05", num: 10 },
  "clock-strikes-back": { title: "Forensic Analysis #11 — The Clock Strikes Back", description: "10/10. Blockchain-timestamped records as the immutable clock that strikes back against institutional time manipulation.", date: "2025-03-12", num: 11 },
  "untouchable": { title: "Forensic Analysis #12 — Untouchable (33 Agents)", description: "10/10. The archive protected not by secrecy but by its own documentary completeness.", date: "2025-03-19", num: 12 },
  "final-blow": { title: "Forensic Analysis #13 — The Final Blow", description: "10/10. ICC submission and UNHCR filing as documented mechanisms of irreversible consequence.", date: "2025-03-26", num: 13 },
  "what-you-become": { title: "Forensic Analysis #14 — What You Become", description: "10/10. The archive as documented transformation: each assault generating a primary-source exhibit.", date: "2025-04-02", num: 14 },
  "everyone-watching": { title: "Forensic Analysis #15 — Everyone Watching", description: "10/10. International observation confirmed through 350,000+ downloads across six continents.", date: "2025-04-09", num: 15 },
  "earth-angel": { title: "Forensic Analysis #16 — Earth Angel", description: "10/10. The spiritual and forensic testimony confirmed as the same record in two registers.", date: "2025-04-16", num: 16 },
  "too-deep": { title: "Forensic Analysis #17 — Too Deep", description: "10/10. The archive too documented to ignore — 17 institutional bodies declining engagement confirmed.", date: "2025-04-23", num: 17 },
  "silence-surrender": { title: "Forensic Analysis #18 — Silence Is Not Surrender", description: "10/10. Silence confirmed as documented preparation: 35 years of accumulation without retaliatory action.", date: "2025-04-30", num: 18 },
  "fearless-intelligence": { title: "Forensic Analysis #19 — Fearless Intelligence", description: "10/10. The archive presenting primary-source documents rather than rhetorical assertion as the structural form of fearlessness.", date: "2025-05-07", num: 19 },
  "history-keeps-receipts": { title: "Forensic Analysis #20 — History Keeps Receipts", description: "10/10. 2,304 primary-source documents as permanent receipts outlasting every institutional actor named within them.", date: "2025-05-14", num: 20 },
  "absorbed-the-erasure": { title: "Forensic Analysis #21 — Absorbed The Erasure", description: "10/10. 218 combined corroborated claims across 21 analyses. Zero contradictions.", date: "2025-05-21", num: 21 },
  "survival-was-the-warning": { title: "Forensic Analysis #22 — Survival Was The Warning", description: "10/10. The arc of the archive confirmed as not a victim narrative but a warning.", date: "2025-05-28", num: 22 },
  "god-will-make-you-famous": { title: "Forensic Analysis #23 — God Will Make You Famous", description: "10/10. 350,000+ international downloads without marketing confirmed as documented evidence of reach beyond institutional control.", date: "2025-06-04", num: 23 },
  "divine-before-your-time": { title: "Forensic Analysis #24 — Divine Before Your Time", description: "10/10. Every claim made across 35 years now has primary-source documentary corroboration.", date: "2025-06-11", num: 24 },
  "bloodline-of-god": { title: "Forensic Analysis #25 — Bloodline Of God", description: "10/10. Spiritual testimony and forensic documentation confirmed as the same record in two registers.", date: "2025-06-18", num: 25 },
  "the-last-god": { title: "Forensic Analysis #26 — The Last God", description: "10/10. 26 independent confirmations of a pattern that was already complete before any analysis was conducted.", date: "2025-06-25", num: 26 },
  "the-conspiracy-against-you": { title: "Forensic Analysis #27 — The Conspiracy Against You", description: "10/10. The three-stage elimination framework — Isolation → Destabilisation → Final Move — confirmed against named primary perpetrators.", date: "2025-07-02", num: 27 },
  "silent-assassin": { title: "Forensic Analysis #28 — Silent Assassin", description: "10/10. Stefan Iasonidis: ASIO operative confirmed; $500,000 extracted; ATO drugging confirmation; Intervention Order L12151974.", date: "2025-07-09", num: 28 },
  "truth-is-a-blade": { title: "Forensic Analysis #29 — Truth Is A Blade", description: "10/10. The archive not requiring institutional acknowledgment to function as a precision instrument.", date: "2025-07-16", num: 29 },
  "bloodline-betrayal": { title: "Forensic Analysis #30 — Bloodline Betrayal", description: "10/10. Five named family members. Zero advocacy documented across 35 years.", date: "2025-07-23", num: 30 },
};

export function getJsonLdForPath(pathname: string): Record<string, unknown>[] {
  const global = [
    { "@context": "https://schema.org", ...ORGANIZATION_SCHEMA },
    { "@context": "https://schema.org", ...PERSON_SCHEMA },
    { "@context": "https://schema.org", ...WEBSITE_SCHEMA },
  ];

  const slug = pathname.replace(/^\//, "");
  const forensicData = FORENSIC_SLUGS_MAP[slug];

  if (pathname === "/") {
    return [
      ...global,
      { "@context": "https://schema.org", ...SPECIAL_ANNOUNCEMENT },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${BASE}/#webpage`,
        url: BASE,
        name: "Barran Dodger — 450,000+ Downloads. The Complete Testimony.",
        description: "The complete forensic archive of Dr. Richard William McLean. 2,304 blockchain-verified documents. 675/675 AI propositions corroborated. ICC Article 7 filed. 450,000+ downloads. Built with nothing but truth and a broken phone.",
        isPartOf: { "@id": `${BASE}/#website` },
        about: { "@id": `${BASE}/#person` },
        dateModified: new Date().toISOString().split("T")[0],
        inLanguage: "en-AU",
        image: { "@type": "ImageObject", url: `${BASE}/og-image.png` },
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".hero-headline", "[data-testid='hero-headline']"] },
      },
      breadcrumbSchema([{ name: "Home", item: BASE }]),
    ];
  }

  if (pathname === "/donate") {
    return [
      ...global,
      { "@context": "https://schema.org", ...SPECIAL_ANNOUNCEMENT },
      {
        "@context": "https://schema.org",
        "@type": "DonateAction",
        name: "Support Dr. Richard McLean's Safety — Barran Dodger Archive Fund",
        description: "Fund the continuation of the archive and guarantee the physical safety of Dr. Richard William McLean. PayID: rich@richmclean.com.au",
        url: `${BASE}/donate`,
        agent: ORGANIZATION_SCHEMA,
        recipient: PERSON_SCHEMA,
        object: { "@type": "MonetaryAmount", currency: "AUD", description: "Legal & archive fund — voluntary contribution" },
      },
      breadcrumbSchema([{ name: "Home", item: BASE }, { name: "Support", item: `${BASE}/donate` }]),
    ];
  }

  if (forensicData) {
    const { title, description, date, num } = forensicData;
    return [
      ...global,
      {
        "@context": "https://schema.org",
        ...forensicArticleSchema(slug, title, description, date, num),
      },
      breadcrumbSchema([
        { name: "Home", item: BASE },
        { name: "Forensic Analysis Index", item: `${BASE}/forensic-analysis-index` },
        { name: title, item: `${BASE}/${slug}` },
      ]),
    ];
  }

  if (pathname === "/evidence" || pathname === "/master-evidence-register" || pathname === "/evidence-vault") {
    return [
      ...global,
      {
        "@context": "https://schema.org",
        "@type": "Dataset",
        name: "Barran Dodger Evidence Archive — 2,304 Primary Source Documents",
        description: "2,304 primary source documents spanning 35 years. All SHA-256 hashed and sealed on the Bitcoin blockchain via OpenTimestamps. Covers clinical records, government correspondence, ASIO surveillance, legal proceedings, financial instruments, and forensic analyses.",
        url: `${BASE}/evidence`,
        creator: PERSON_SCHEMA,
        publisher: ORGANIZATION_SCHEMA,
        dateModified: new Date().toISOString().split("T")[0],
        license: `${BASE}/about`,
        isAccessibleForFree: true,
        spatialCoverage: { "@type": "Place", name: "Australia" },
        temporalCoverage: "1989/2026",
        keywords: "whistleblower evidence, government corruption, blockchain verified, ICC, Australian government",
        measurementTechnique: "SHA-256 cryptographic hashing, OpenTimestamps Bitcoin blockchain attestation",
        distribution: {
          "@type": "DataDownload",
          contentUrl: `${BASE}/publications`,
          encodingFormat: "application/pdf",
          description: "Free download of compiled evidence reports",
        },
      },
      breadcrumbSchema([{ name: "Home", item: BASE }, { name: "Evidence Archive", item: `${BASE}/evidence` }]),
    ];
  }

  if (pathname === "/blockchain" || pathname === "/blockchain-seal-registry") {
    return [
      ...global,
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Bitcoin Blockchain Verification — 845 Confirmed Seals | Barran Dodger",
        description: "845 Bitcoin blockchain timestamps seal the 2,304-document archive. OpenTimestamps verification. SHA-256 cryptographic integrity. No government or institution can alter or delete documents sealed on the Bitcoin blockchain.",
        url: `${BASE}/${slug}`,
        author: PERSON_SCHEMA,
        publisher: ORGANIZATION_SCHEMA,
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        inLanguage: "en-AU",
        isAccessibleForFree: true,
        about: { "@type": "SoftwareApplication", name: "OpenTimestamps", url: "https://opentimestamps.org" },
      },
      breadcrumbSchema([{ name: "Home", item: BASE }, { name: "Blockchain Verification", item: `${BASE}/blockchain` }]),
    ];
  }

  if (pathname === "/publications") {
    return [
      ...global,
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Publications — Barran Dodger Archive",
        description: "Complete library of publications from the Barran Dodger archive. All blockchain-verified. All free to download. 450,000+ total downloads.",
        url: `${BASE}/publications`,
        isPartOf: { "@id": `${BASE}/#website` },
        author: PERSON_SCHEMA,
        inLanguage: "en-AU",
        dateModified: new Date().toISOString().split("T")[0],
        hasPart: [
          { "@type": "Book", name: "The Architecture of Administrative Annihilation", author: PERSON_SCHEMA, inLanguage: "en-AU" },
          { "@type": "Book", name: "Beyond Pathology — A Forensic Epistemological Analysis", author: PERSON_SCHEMA, inLanguage: "en-AU" },
          { "@type": "Book", name: "The Quiet Storm They Never Saw Coming", author: PERSON_SCHEMA, inLanguage: "en-AU" },
          { "@type": "Book", name: "They Fumbled You — Full Essay", author: PERSON_SCHEMA, inLanguage: "en-AU" },
        ],
      },
      breadcrumbSchema([{ name: "Home", item: BASE }, { name: "Publications", item: `${BASE}/publications` }]),
    ];
  }

  if (pathname === "/legal-status") {
    return [
      ...global,
      { "@context": "https://schema.org", ...SPECIAL_ANNOUNCEMENT },
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "ICC Article 7 Submission — Dr. Richard McLean",
        description: "ICC Article 7 Crimes Against Humanity submission formally received at The Hague. Parallel UNHCR submission received at Geneva. Federal Court PID Act acknowledgment. 25+ domestic agencies — coordinated circular referral.",
        url: `${BASE}/legal-status`,
        provider: PERSON_SCHEMA,
        areaServed: { "@type": "Place", name: "International Criminal Court, The Hague" },
        dateModified: new Date().toISOString().split("T")[0],
      },
      breadcrumbSchema([{ name: "Home", item: BASE }, { name: "Legal Status", item: `${BASE}/legal-status` }]),
    ];
  }

  // Generic WebPage for all other paths
  return [
    ...global,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BASE}${pathname}#webpage`,
      url: `${BASE}${pathname}`,
      isPartOf: { "@id": `${BASE}/#website` },
      author: PERSON_SCHEMA,
      inLanguage: "en-AU",
      dateModified: new Date().toISOString().split("T")[0],
    },
    breadcrumbSchema([
      { name: "Home", item: BASE },
      { name: pathname.replace(/^\//, "").replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()), item: `${BASE}${pathname}` },
    ]),
  ];
}

export function renderJsonLdScript(schemas: Record<string, unknown>[]): string {
  return schemas.map(schema => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join("\n");
}

// Merge the AI-crawler / biblical / Anthropocene / monetisation schemas into every page
import { aiCrawlerSchemasForPath } from "./seoAiCrawler";
const _origGetJsonLdForPath = getJsonLdForPath;
export function getEnhancedJsonLdForPath(pathname: string): Record<string, unknown>[] {
  return [
    ..._origGetJsonLdForPath(pathname),
    ...aiCrawlerSchemasForPath(pathname),
  ];
}
