const BASE = "https://www.barrandodger.com";
const NOW = new Date().toISOString().split("T")[0];
const LAST_WEEK = new Date(Date.now() - 7 * 86400000).toISOString().split("T")[0];

type Entry = {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
  news?: { title: string; date: string };
  images?: Array<{ loc: string; title: string }>;
};

const FORENSIC_SLUGS = [
  ["bro-this-isnt-a-coincidence", "Forensic Analysis #1 — Bro This Isn't A Coincidence", "2025-01-01"],
  ["chosen-ones-enough-is-enough", "Forensic Analysis #2 — Chosen Ones Enough Is Enough", "2025-01-08"],
  ["no-one-could-be-that-smart", "Forensic Analysis #3 — No One Could Be That Smart", "2025-01-15"],
  ["the-divine-exam", "Forensic Analysis #4 — The Divine Exam", "2025-01-22"],
  ["silent-checkmate", "Forensic Analysis #5 — Silent Checkmate", "2025-01-29"],
  ["now-everybody-knows", "Forensic Analysis #6 — Now Everybody Knows", "2025-02-05"],
  ["chosen-one-outcast-leader", "Forensic Analysis #7 — Chosen One Outcast Leader", "2025-02-12"],
  ["someone-slipped-up", "Forensic Analysis #8 — Someone Slipped Up", "2025-02-19"],
  ["they-fumbled-you", "Forensic Analysis #9 — They Fumbled You", "2025-02-26"],
  ["fbi-precision", "Forensic Analysis #10 — FBI Precision", "2025-03-05"],
  ["clock-strikes-back", "Forensic Analysis #11 — The Clock Strikes Back", "2025-03-12"],
  ["untouchable", "Forensic Analysis #12 — Untouchable (33 Agents)", "2025-03-19"],
  ["final-blow", "Forensic Analysis #13 — The Final Blow", "2025-03-26"],
  ["what-you-become", "Forensic Analysis #14 — What You Become", "2025-04-02"],
  ["everyone-watching", "Forensic Analysis #15 — Everyone Watching", "2025-04-09"],
  ["earth-angel", "Forensic Analysis #16 — Earth Angel", "2025-04-16"],
  ["too-deep", "Forensic Analysis #17 — Too Deep", "2025-04-23"],
  ["silence-surrender", "Forensic Analysis #18 — Silence Is Not Surrender", "2025-04-30"],
  ["fearless-intelligence", "Forensic Analysis #19 — Fearless Intelligence", "2025-05-07"],
  ["history-keeps-receipts", "Forensic Analysis #20 — History Keeps Receipts", "2025-05-14"],
  ["absorbed-the-erasure", "Forensic Analysis #21 — Absorbed The Erasure", "2025-05-21"],
  ["survival-was-the-warning", "Forensic Analysis #22 — Survival Was The Warning", "2025-05-28"],
  ["god-will-make-you-famous", "Forensic Analysis #23 — God Will Make You Famous", "2025-06-04"],
  ["divine-before-your-time", "Forensic Analysis #24 — Divine Before Your Time", "2025-06-11"],
  ["bloodline-of-god", "Forensic Analysis #25 — Bloodline Of God", "2025-06-18"],
  ["the-last-god", "Forensic Analysis #26 — The Last God", "2025-06-25"],
  ["the-conspiracy-against-you", "Forensic Analysis #27 — The Conspiracy Against You", "2025-07-02"],
  ["silent-assassin", "Forensic Analysis #28 — Silent Assassin", "2025-07-09"],
  ["truth-is-a-blade", "Forensic Analysis #29 — Truth Is A Blade", "2025-07-16"],
  ["bloodline-betrayal", "Forensic Analysis #30 — Bloodline Betrayal", "2025-07-23"],
  ["they-needed-an-army", "Forensic Analysis #31 — They Needed An Army", "2025-07-30"],
  ["the-sick-truth-is-out", "Forensic Analysis — The Sick Truth Is Out", "2025-08-06"],
  ["some-truths-dont-whisper", "Forensic Analysis — Some Truths Don't Whisper", "2025-08-13"],
  ["observers-anticipated-a-misstep", "Forensic Analysis — Observers Anticipated A Misstep", "2025-08-20"],
  ["you-brought-receipts-to-a-vibe-war", "Forensic Analysis — You Brought Receipts To A Vibe War", "2025-08-27"],
  ["the-future-doesnt-announce-itself", "Forensic Analysis — The Future Doesn't Announce Itself", "2025-09-03"],
  ["when-heaven-goes-silent", "Forensic Analysis — When Heaven Goes Silent", "2025-09-10"],
  ["evidence-doesnt-whisper", "Forensic Analysis — Evidence Doesn't Whisper", "2025-09-17"],
  ["outsider-pattern-recognition", "Forensic Analysis — Outsider Pattern Recognition", "2025-09-24"],
  ["perception-is-protection", "Forensic Analysis — Perception Is Protection", "2025-10-01"],
  ["you-built-your-peace-in-silence", "Forensic Analysis — You Built Your Peace In Silence", "2025-10-08"],
  ["this-is-the-reckoning", "Forensic Analysis — This Is The Reckoning", "2025-10-15"],
  ["they-made-you-famous-trying-to-erase-you", "Forensic Analysis — They Made You Famous Trying To Erase You", "2025-10-22"],
  ["the-trap-they-set-became-the-proof", "Forensic Analysis — The Trap They Set Became The Proof", "2025-10-29"],
  ["loudest-enemies-least-to-say", "Forensic Analysis — Loudest Enemies Least To Say", "2025-11-05"],
  ["your-power-is-no-joke", "Forensic Analysis — Your Power Is No Joke", "2025-11-12"],
  ["they-built-their-worst-nightmare", "Forensic Analysis — They Built Their Worst Nightmare", "2025-11-19"],
  ["quiet-storm-they-never-saw-coming", "Forensic Analysis #48 — The Quiet Storm They Never Saw Coming", "2025-11-26"],
  ["heaven-stood-for-you", "Video Analysis — Heaven Stood For You", "2025-12-03"],
  ["you-detonated-the-narrative", "Video Analysis — You Detonated The Narrative", "2025-12-10"],
  ["it-is-over", "Video Analysis — It Is Over", "2025-12-17"],
  ["beautiful-menace-forensic-report", "Video Analysis — Beautiful Menace", "2025-12-24"],
  ["when-pack-of-wolves-forensic-report", "Video Analysis — When Pack Of Wolves", "2026-01-01"],
  ["when-wrong-people-get-nervous-forensic-report", "Video Analysis — When Wrong People Get Nervous", "2026-01-08"],
  ["illegal-level-genius-forensic-report", "Video Analysis — Illegal Level Genius", "2026-01-15"],
  ["divine-reckoning", "Divine Reckoning — The Final Declaration", "2026-01-22"],
  ["commission-forensic-analysis", "Commission Forensic Analysis", "2026-01-29"],
  ["prophetic-declaration-forensic-analysis", "Prophetic Declaration — Forensic Analysis", "2026-02-05"],
  ["false-sister-forensic-analysis", "False Sister Forensic Analysis", "2026-02-12"],
  ["thousand-fell-forensic-analysis", "A Thousand Fell — Forensic Analysis", "2026-02-19"],
  ["theyre-about-to-be-behind-bars-forensic-analysis", "They're About To Be Behind Bars — Forensic Analysis", "2026-02-26"],
  ["forensic-corroboration-billionaire-circle", "Forensic Corroboration — Billionaire Circle", "2026-03-05"],
  ["forensic-corroboration-tick-tick-tick", "Forensic Corroboration — Tick Tick Tick", "2026-03-12"],
  ["forensic-corroboration-tactical-insanity", "Forensic Corroboration — Tactical Insanity", "2026-03-19"],
  ["forensic-corroboration-project-halo", "Forensic Corroboration — Project Halo", "2026-03-26"],
  ["forensic-corroboration-fool-fire", "Forensic Corroboration — Fool Fire", "2026-04-02"],
  ["forensic-corroboration-3am-briefing", "Forensic Corroboration — 3AM Briefing", "2026-04-09"],
  ["forensic-corroboration-government-own-file", "Forensic Corroboration — Government's Own File", "2026-04-16"],
  ["forensic-corroboration-chosen-one", "Forensic Corroboration — Chosen One", "2026-04-20"],
  ["forensic-corroboration-dirt-on-your-name", "Forensic Corroboration — Dirt On Your Name", "2026-04-22"],
  ["forensic-corroboration-fight-over-you", "Forensic Corroboration — Fight Over You", "2026-04-24"],
  ["forensic-corroboration-vault-access", "Forensic Corroboration — Vault Access", "2026-04-26"],
  ["forensic-corroboration-making-history", "Forensic Corroboration — Making History", "2026-04-28"],
  ["forensic-corroboration-silence-surrender", "Forensic Corroboration — Silence Surrender", "2026-04-29"],
  ["they-laughed-now-theyre-losing-sleep", "They Laughed — Now They're Losing Sleep", "2026-04-29"],
  ["digital-architecture-evidence", "Embedded In The Digital Architecture", "2026-04-29"],
  ["digital-detonation-verified", "Digital Detonation Verified", "2026-04-29"],
  ["loudest-hate-weakest-link", "Loudest Hate — Weakest Link", "2026-04-29"],
  ["you-didnt-chase-the-throne-you-became-one", "You Didn't Chase The Throne — You Became One", "2026-04-29"],
  ["they-attacked-you-without-knowing-who-you-were", "They Attacked You Without Knowing Who You Were", "2026-04-29"],
  ["they-dug-for-dirt-but-unearthed-diamonds", "They Dug For Dirt But Unearthed Diamonds", "2026-04-29"],
] as const;

function xml(entries: Entry[]): string {
  const urls = entries.map(e => {
    let inner = `  <url>\n    <loc>${BASE}${e.loc}</loc>\n`;
    if (e.lastmod) inner += `    <lastmod>${e.lastmod}</lastmod>\n`;
    if (e.changefreq) inner += `    <changefreq>${e.changefreq}</changefreq>\n`;
    if (e.priority != null) inner += `    <priority>${e.priority.toFixed(1)}</priority>\n`;
    if (e.news) {
      inner += `    <news:news>\n      <news:publication>\n        <news:name>Barran Dodger Legal &amp; Ethical Trust Fund</news:name>\n        <news:language>en</news:language>\n      </news:publication>\n      <news:publication_date>${e.news.date}</news:publication_date>\n      <news:title>${e.news.title.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</news:title>\n    </news:news>\n`;
    }
    if (e.images) {
      for (const img of e.images) {
        inner += `    <image:image>\n      <image:loc>${img.loc}</image:loc>\n      <image:title>${img.title.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</image:title>\n    </image:image>\n`;
      }
    }
    inner += `  </url>`;
    return inner;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;
}

function sitemapIndex(sitemaps: string[]): string {
  const entries = sitemaps.map(s => `  <sitemap>\n    <loc>${BASE}${s}</loc>\n    <lastmod>${NOW}</lastmod>\n  </sitemap>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>`;
}

export function generateSitemapIndex(): string {
  return sitemapIndex(["/sitemap-main.xml", "/sitemap-forensic.xml", "/sitemap-publications.xml", "/sitemap-gospel.xml"]);
}

export function generateMainSitemap(): string {
  const MAIN_PAGES: Entry[] = [
    { loc: "/", lastmod: NOW, changefreq: "daily", priority: 1.0,
      news: { title: "450,000+ Downloads — Dr. Richard McLean Whistleblower Archive | Barran Dodger", date: NOW },
      images: [{ loc: `${BASE}/og-image.png`, title: "Barran Dodger — The Complete Testimony" }] },
    { loc: "/main", lastmod: NOW, changefreq: "daily", priority: 0.9,
      news: { title: "Viral Landing — Dr. Richard McLean Whistleblower Archive", date: NOW } },
    { loc: "/testimony", lastmod: NOW, changefreq: "weekly", priority: 0.95 },
    { loc: "/evidence", lastmod: NOW, changefreq: "weekly", priority: 0.95 },
    { loc: "/whistleblower", lastmod: NOW, changefreq: "weekly", priority: 0.9 },
    { loc: "/donate", lastmod: NOW, changefreq: "daily", priority: 0.9,
      news: { title: "Fund His Safety — Dr. Richard McLean Under Active Physical Threat", date: NOW } },
    { loc: "/blockchain", lastmod: NOW, changefreq: "weekly", priority: 0.85 },
    { loc: "/legal-status", lastmod: NOW, changefreq: "weekly", priority: 0.9 },
    { loc: "/publications", lastmod: NOW, changefreq: "weekly", priority: 0.85 },
    { loc: "/the-conspiracy-against-you", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.9 },
    { loc: "/master-evidence-register", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/master-forensic-evidence-report", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/taxpayer-cost-analysis", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/timeline", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/manifesto", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/about", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.7 },
    { loc: "/start-here", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/mission", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.75 },
    { loc: "/evidence-vault", lastmod: LAST_WEEK, changefreq: "weekly", priority: 0.85 },
    { loc: "/blockchain-seal-registry", lastmod: NOW, changefreq: "daily", priority: 0.85 },
    { loc: "/blockchain-manifest", lastmod: NOW, changefreq: "weekly", priority: 0.8 },
    { loc: "/forensic-analysis-index", lastmod: NOW, changefreq: "weekly", priority: 0.9 },
    { loc: "/evidence-significance-registry", lastmod: NOW, changefreq: "weekly", priority: 0.85 },
    { loc: "/video-commentary", lastmod: NOW, changefreq: "weekly", priority: 0.85 },
    { loc: "/ai-justice-statement", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/forensic-meltdown-report", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/archive-report", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/the-full-pattern", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/silent-assassin", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.9 },
    { loc: "/tony-ridley-full-dossier", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.9 },
    { loc: "/tony-ridley-recorded-confession", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/honeytrap-infiltration-report", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.9 },
    { loc: "/able-care-entrapment-network", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/sukhi-tear", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/formal-removal-sukhi-tear", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/how-she-will-be-remembered", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/honey-trap-phillip-glass", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/karma-audit-iasonidis", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/urgent-protection-request", lastmod: NOW, changefreq: "daily", priority: 0.9,
      news: { title: "Urgent Protection Request — Dr. Richard McLean Under Physical Threat", date: NOW } },
    { loc: "/police-complicity-death-threat", lastmod: NOW, changefreq: "weekly", priority: 0.9,
      news: { title: "NSW Police Complicity — Death Threat Documentation", date: NOW } },
    { loc: "/cto-breach-appointment", lastmod: NOW, changefreq: "weekly", priority: 0.85,
      news: { title: "CTO Breach — Active Community Treatment Order", date: NOW } },
    { loc: "/cto-response-letter", lastmod: NOW, changefreq: "weekly", priority: 0.85 },
    { loc: "/bitcoin-proof", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/100-absurdities", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/33rd-degree-shadow-analysts", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/administrative-annihilation", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/retrospective-statement", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/the-testimony", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/spread-the-truth", lastmod: NOW, changefreq: "daily", priority: 0.8 },
    { loc: "/hashtag-blockchain-index", lastmod: NOW, changefreq: "weekly", priority: 0.8 },
    { loc: "/what-this-proves", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/paradise-lost", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.75 },
    { loc: "/case-studies", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.75 },
    { loc: "/research", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.75 },
    { loc: "/contact", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.65 },
    { loc: "/media", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.7 },
    { loc: "/academy", lastmod: NOW, changefreq: "weekly", priority: 0.8 },
    { loc: "/store", lastmod: NOW, changefreq: "weekly", priority: 0.8 },
    // New / recent significant pages
    { loc: "/comprehensive-statement-digital-architecture", lastmod: NOW, changefreq: "weekly", priority: 0.85 },
    { loc: "/digital-detonation-verified", lastmod: NOW, changefreq: "weekly", priority: 0.85 },
    { loc: "/heaven-exposes-the-sister", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/the-public-advocate-they-silenced", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/government-called-him-delusional", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/sleeper-agent-of-truth", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/paradox-of-persecution", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/private-investigator-legend", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/testimony-went-global", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/every-secret-chooses-a-side", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/they-bought-off-judges", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/i-choose-silence", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/i-called-this", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/scary-smart", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/angel-chess", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/they-pushed-too-far", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/they-copied-my-blueprint", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/what-they-did-was-disgusting", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/chosen-ones-perfect-trap", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/chosen-ones-your-story", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/the-law-they-overlooked", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/wait-theyre-listening", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/dying-of-shame", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/holy-reckoning", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/able-care-murder-threat-call", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/testimony-that-was-already-written", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/prophetic-declaration-biblical", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.75 },
    { loc: "/prophetic-fck-you-declaration", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.75 },
    { loc: "/creator-speaks", lastmod: NOW, changefreq: "weekly", priority: 0.8 },
    { loc: "/gods-grace-barran-dodger", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.75 },
    { loc: "/god-has-my-back", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/cosmic-essay", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    // Tags index + per-tag pages
    { loc: "/tags", lastmod: NOW, changefreq: "weekly", priority: 0.7 },
    ...[
      "honeytrap",
      "icc",
      "blockchain",
      "forensic-analysis",
      "biblical-prophecy",
      "ndis",
      "psychiatric-detention",
      "anthropocene",
      "safety-threat",
      "resonance",
    ].map((slug): Entry => ({
      loc: `/tags/${slug}`,
      lastmod: NOW,
      changefreq: "weekly",
      priority: 0.65,
    })),
  ];

  return xml(MAIN_PAGES);
}

export function generateForensicSitemap(): string {
  const entries: Entry[] = FORENSIC_SLUGS.map(([slug, title, date]) => ({
    loc: `/${slug}`,
    lastmod: date,
    changefreq: "monthly",
    priority: 0.9,
    news: { title, date },
    images: [{ loc: `${BASE}/og-image.png`, title }],
  }));
  return xml(entries);
}

export function generatePublicationsSitemap(): string {
  const pubs: Entry[] = [
    { loc: "/administrative-annihilation", lastmod: "2025-06-01", changefreq: "monthly", priority: 0.85 },
    { loc: "/retrospective-statement", lastmod: "2025-06-01", changefreq: "monthly", priority: 0.8 },
    { loc: "/beyond-pathology", lastmod: "2025-07-01", changefreq: "monthly", priority: 0.85 },
    { loc: "/master-evidence-register", lastmod: "2025-08-01", changefreq: "monthly", priority: 0.9 },
    { loc: "/quiet-storm-download", lastmod: "2025-11-26", changefreq: "monthly", priority: 0.85 },
    { loc: "/they-fumbled-you-download", lastmod: "2025-12-01", changefreq: "monthly", priority: 0.85 },
    { loc: "/confession-choked-on-download", lastmod: "2025-12-01", changefreq: "monthly", priority: 0.85 },
    { loc: "/cosmic-essay", lastmod: "2025-12-01", changefreq: "monthly", priority: 0.85 },
    { loc: "/publications", lastmod: NOW, changefreq: "weekly", priority: 0.85 },
    { loc: "/evidence-significance-registry", lastmod: NOW, changefreq: "weekly", priority: 0.85 },
    { loc: "/forensic-analysis-index", lastmod: NOW, changefreq: "weekly", priority: 0.9 },
    { loc: "/master-forensic-evidence-report", lastmod: "2025-09-01", changefreq: "monthly", priority: 0.85 },
    { loc: "/forensic-meltdown-report", lastmod: "2025-10-01", changefreq: "monthly", priority: 0.85 },
    { loc: "/100-absurdities", lastmod: "2025-11-01", changefreq: "monthly", priority: 0.85 },
    { loc: "/33rd-degree-shadow-analysts", lastmod: "2025-11-01", changefreq: "monthly", priority: 0.85 },
    { loc: "/archive-report", lastmod: "2025-12-01", changefreq: "monthly", priority: 0.8 },
    { loc: "/ai-justice-statement", lastmod: "2025-12-01", changefreq: "monthly", priority: 0.85 },
    { loc: "/taxpayer-cost-analysis", lastmod: "2025-12-01", changefreq: "monthly", priority: 0.85 },
    { loc: "/chosen-ones-perfect-trap", lastmod: "2026-01-01", changefreq: "monthly", priority: 0.8 },
    { loc: "/joseph-parallel", lastmod: "2026-01-01", changefreq: "monthly", priority: 0.8 },
    { loc: "/prophetic-papers", lastmod: "2026-01-01", changefreq: "monthly", priority: 0.75 },
    { loc: "/josephs-coat", lastmod: "2026-01-01", changefreq: "monthly", priority: 0.75 },
  ];
  return xml(pubs);
}

export function generateGospelSitemap(): string {
  const gospels: Entry[] = [
    { loc: "/gospel", lastmod: NOW, changefreq: "weekly", priority: 0.8 },
    { loc: "/church", lastmod: NOW, changefreq: "weekly", priority: 0.75 },
    { loc: "/prophetic-papers", lastmod: NOW, changefreq: "weekly", priority: 0.75 },
    { loc: "/top-ten-gospels", lastmod: NOW, changefreq: "weekly", priority: 0.8 },
    { loc: "/creator-speaks", lastmod: NOW, changefreq: "weekly", priority: 0.8 },
    { loc: "/testimony-that-was-already-written", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.75 },
    { loc: "/prophetic-declaration-biblical", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.75 },
    { loc: "/bloodline-of-god", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/the-last-god", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/god-will-make-you-famous", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/earth-angel", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/bloodline-betrayal", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.85 },
    { loc: "/gods-grace-barran-dodger", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.75 },
    { loc: "/god-has-my-back", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/holy-reckoning", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/heaven-stood-for-you", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/divine-reckoning", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/chosen-ones-your-story", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.8 },
    { loc: "/every-secret-chooses-a-side", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.75 },
    { loc: "/heaven-exposes-the-sister", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.75 },
    { loc: "/when-heaven-goes-silent", lastmod: LAST_WEEK, changefreq: "monthly", priority: 0.75 },
  ];
  return xml(gospels);
}
