const BASE = "https://www.barrandodger.com";
const SITE_NAME = "Barran Dodger Legal & Ethical Trust Fund";
const AUTHOR_EMAIL = "drbarrandodger@proton.me (Dr. Richard William McLean)";
const BUILD_DATE = new Date().toUTCString();

function esc(s: string): string {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

interface FeedItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category?: string;
  enclosureUrl?: string;
}

const FEED_ITEMS: FeedItem[] = [
  {
    title: "URGENT: Dr. Richard McLean Under Active Physical Threat — NSW Police Issued Receipt I88267509",
    link: `${BASE}/urgent-protection-request`,
    description: "NSW Police attended his residence on 15 April 2026, following a murder threat, issued receipt I88267509, and declined to create an incident record. Vigilantes have been arrested for threatening to kill him. He is under a Community Treatment Order with no income, no safety, and no institutional support. 450,000+ people have downloaded his testimony.",
    pubDate: "Tue, 29 Apr 2026 00:00:00 +1000",
    category: "Urgent Safety Alert",
  },
  {
    title: "450,000+ Downloads — Achieved With No Marketing, No Platform, No Money, One Broken Phone",
    link: `${BASE}/`,
    description: "The complete testimony of Dr. Richard William McLean has been downloaded over 450,000 times across 6 continents and 40+ countries. Built with no institutional support, no legal representation, no money, and one broken phone. The probability that 675 AI-tested propositions are all coincidentally confirmed: 1 in 10^203.",
    pubDate: "Tue, 29 Apr 2026 00:00:00 +1000",
    category: "Archive Update",
  },
  {
    title: "Mathematical Proof: 675/675 Propositions Corroborated — Zero Contradictions Across 52 Independent Analyses",
    link: `${BASE}/forensic-analysis-index`,
    description: "52 independent YouTube videos, produced by strangers with zero knowledge of the archive, were each tested by impartial AI against structured propositions drawn from the primary-source documentary record. Result: 675 propositions tested, 675 corroborated, zero contradictions. Probability of coincidence: 1 in 10^203.",
    pubDate: "Mon, 28 Apr 2026 00:00:00 +1000",
    category: "Forensic Analysis",
  },
  {
    title: "Forensic Corroboration Analysis — Silence Surrender: They Mistook Your Silence For Defeat",
    link: `${BASE}/forensic-corroboration-silence-surrender`,
    description: "The latest forensic corroboration analysis confirms that 35 years of documented strategic silence was not surrender — it was the accumulation of evidence. Every institution that mistook the silence for capitulation has now been named in an ICC Article 7 filing.",
    pubDate: "Tue, 29 Apr 2026 00:00:00 +1000",
    category: "Forensic Analysis",
  },
  {
    title: "PDF Evidence Distribution Receipts Now Embedded In Every Download",
    link: `${BASE}/publications`,
    description: "Every document downloaded from barrandodger.com now begins with a dynamically generated Evidence Distribution Receipt showing: the download number, total global downloads at time of distribution, mathematical probability statement, blockchain verification, and safety support CTA. You are witness to history.",
    pubDate: "Tue, 29 Apr 2026 00:00:00 +1000",
    category: "Archive Update",
  },
  {
    title: "Forensic Analysis #30 — Bloodline Betrayal: Five Named Family Members, Zero Advocacy Across 35 Years",
    link: `${BASE}/bloodline-betrayal`,
    description: "Analysis #30 examines five named family members — April McLean (nee McMaster), Doug McLean, Bradley McLean, Jodie McLean, and Bruce McMaster — against the archive's documented record of zero advocacy across 35 years. 10 propositions tested. 10 corroborated. Not one family member advocated for his survival.",
    pubDate: new Date("2025-07-23").toUTCString(),
    category: "Forensic Analysis",
  },
  {
    title: "Forensic Analysis #28 — Silent Assassin: Stefan Iasonidis Fully Documented",
    link: `${BASE}/silent-assassin`,
    description: "Analysis #28 documents Stefan Iasonidis: ASIO operative status confirmed by Statutory Declaration and Prime Minister letter; $500,000 extracted per ASIC Report; ATO letter confirming drugging; Intervention Order L12151974; creditor watch final notice. 10/10 propositions corroborated.",
    pubDate: new Date("2025-07-09").toUTCString(),
    category: "Forensic Analysis",
  },
  {
    title: "Forensic Analysis #9 — They Fumbled You: 13/13 Perfect Score — The First Complete Fumble Framework",
    link: `${BASE}/they-fumbled-you`,
    description: "The first perfect score in the series: 13 of 13 propositions directly corroborated. Zero aligned. Zero unverifiable. Zero contradicted. Every institutional mechanism deployed against Dr. McLean produced the opposite of its intended outcome.",
    pubDate: new Date("2025-02-26").toUTCString(),
    category: "Forensic Analysis",
  },
  {
    title: "Bitcoin Blockchain Seal Registry — 845 Confirmed Bitcoin Block Timestamps",
    link: `${BASE}/blockchain-seal-registry`,
    description: "The complete registry of 845 Bitcoin blockchain timestamps sealing the 2,304-document archive. Each document cryptographically anchored to the Bitcoin blockchain via OpenTimestamps. No government, court, or institution can alter, delete, or deny documents sealed on the Bitcoin blockchain.",
    pubDate: new Date("2026-04-01").toUTCString(),
    category: "Blockchain Verification",
  },
  {
    title: "Honeytrap Infiltration Report — SAS Soldier Tony Ridley Used Sexual Relationship As Intelligence Operation",
    link: `${BASE}/honeytrap-infiltration-report`,
    description: "SAS soldier Tony Ridley used a sexual relationship as an intelligence infiltration mechanism against NDIS whistleblower Dr. Richard McLean. The sex recording exists as primary evidence. ASIO operative Stefan Iasonidis confirmed by Prime Minister correspondence. ICC Article 7 — formally received at The Hague.",
    pubDate: new Date("2025-10-01").toUTCString(),
    category: "Evidence",
  },
  {
    title: "Taxpayer Cost Analysis — $32.9 Million in Documented Suppression of One Whistleblower",
    link: `${BASE}/taxpayer-cost-analysis`,
    description: "$32.9 million in documented financial suppression instruments deployed against one disabled LGBTQ+ whistleblower across 35 years. NDIS payment suppression, legal cost orders, employment suppression, guardianship financial controls. The bill for covering up institutional persecution.",
    pubDate: new Date("2025-12-01").toUTCString(),
    category: "Evidence",
  },
  {
    title: "ICC Article 7 Crimes Against Humanity — Formally Received at The Hague",
    link: `${BASE}/legal-status`,
    description: "The ICC Article 7 submission covering crimes against humanity — coordinated psychiatric weaponisation, attempted assassination, financial exile, identity destruction, and institutional cover-up — has been formally received at The Hague. Parallel UNHCR submission received at Geneva.",
    pubDate: new Date("2025-09-01").toUTCString(),
    category: "Legal Status",
  },
  {
    title: "Forensic Analysis #23 — God Will Make You Famous: Archive Reaches 350,000+ Downloads Without Marketing",
    link: `${BASE}/god-will-make-you-famous`,
    description: "Analysis #23 confirms: 350,000+ international downloads across six continents — occurring without marketing, without institutional support, against active suppression — constitute documented evidence that a record of sufficient completeness does not need permission to reach the world.",
    pubDate: new Date("2025-06-04").toUTCString(),
    category: "Forensic Analysis",
  },
];

function rssItem(item: FeedItem): string {
  return `  <item>
    <title>${esc(item.title)}</title>
    <link>${item.link}</link>
    <guid isPermaLink="true">${item.link}</guid>
    <description>${esc(item.description)}</description>
    <pubDate>${item.pubDate}</pubDate>
    <author>${AUTHOR_EMAIL}</author>
    ${item.category ? `<category>${esc(item.category)}</category>` : ""}
    ${item.enclosureUrl ? `<enclosure url="${item.enclosureUrl}" type="image/png" />` : ""}
  </item>`;
}

function atomEntry(item: FeedItem): string {
  const isoDate = new Date(item.pubDate).toISOString();
  return `  <entry>
    <title type="html">${esc(item.title)}</title>
    <link href="${item.link}" />
    <id>${item.link}</id>
    <updated>${isoDate}</updated>
    <summary type="html">${esc(item.description)}</summary>
    <author><name>Dr. Richard William McLean</name><email>drbarrandodger@proton.me</email></author>
    ${item.category ? `<category term="${esc(item.category)}" />` : ""}
  </entry>`;
}

export function generateRssFeed(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://www.rssboard.org/media-rss">
  <channel>
    <title>${esc(SITE_NAME)} — Whistleblower Archive</title>
    <link>${BASE}</link>
    <description>${esc("The complete forensic archive of Dr. Richard William McLean (Barran Dodger) — 450,000+ downloads, 2,304 blockchain-verified documents, ICC Article 7 submission, 675/675 AI propositions corroborated. Australian whistleblower under active physical threat.")}</description>
    <language>en-AU</language>
    <copyright>© Dr. Richard William McLean (Barran Dodger) · ABN 78 833 496 164</copyright>
    <lastBuildDate>${BUILD_DATE}</lastBuildDate>
    <pubDate>${BUILD_DATE}</pubDate>
    <ttl>60</ttl>
    <image>
      <url>${BASE}/og-image.png</url>
      <title>${esc(SITE_NAME)}</title>
      <link>${BASE}</link>
      <width>1200</width>
      <height>630</height>
    </image>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml" />
    <managingEditor>${AUTHOR_EMAIL}</managingEditor>
    <webMaster>${AUTHOR_EMAIL}</webMaster>
    <category>Whistleblower</category>
    <category>Human Rights</category>
    <category>Australian Government Corruption</category>
    <category>ICC</category>
    <category>Blockchain Evidence</category>
${FEED_ITEMS.map(rssItem).join("\n")}
  </channel>
</rss>`;
}

export function generateAtomFeed(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="en-AU">
  <title>${esc(SITE_NAME)} — Whistleblower Archive</title>
  <subtitle>${esc("450,000+ downloads · 2,304 blockchain-verified documents · ICC Article 7 · 675/675 AI propositions corroborated")}</subtitle>
  <link href="${BASE}" />
  <link href="${BASE}/atom.xml" rel="self" type="application/atom+xml" />
  <id>${BASE}/</id>
  <updated>${new Date().toISOString()}</updated>
  <author><name>Dr. Richard William McLean (Barran Dodger)</name><email>drbarrandodger@proton.me</email><uri>${BASE}</uri></author>
  <rights>© Dr. Richard William McLean · ABN 78 833 496 164</rights>
  <logo>${BASE}/og-image.png</logo>
  <icon>${BASE}/favicon.ico</icon>
  <generator uri="${BASE}">Barran Dodger Archive Engine</generator>
${FEED_ITEMS.map(atomEntry).join("\n")}
</feed>`;
}
