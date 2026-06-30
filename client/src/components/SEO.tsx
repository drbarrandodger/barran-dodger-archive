import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  canonicalUrl?: string;
  type?: string;
  image?: string;
  imageAlt?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  articlePublishedTime?: string;
  articleAuthor?: string;
}

const BASE_KEYWORDS = "Barran Dodger, Dr Richard McLean, Rich McLean whistleblower, Australian whistleblower, government corruption Australia, 3643 primary source government documents, 3643 blockchain verified documents, 35 years persecution, 14 psychiatric hospitalisations across 3 states, forced psychiatric hospitalisation without criminal charge, psychiatric abuse whistleblower, institutional murder 2021, Werribee Mercy Hospital, assassination attempt 2024, Port Macquarie, found with no pulse, Attorney General silence, Attorney General Dreyfus, Mark Dreyfus corruption, NDIS fraud evidence, NDIS entrapment disabled person, NDIS fraud billions, Bill Shorten NDIS, Bill Shorten assassination, OAIC corruption, OAIC cover up, Commonwealth Ombudsman ban, Commonwealth Ombudsman service restriction, APRA whistleblower rejection, blockchain evidence archive, SHA-256 verification, OpenTimestamps Bitcoin, Bitcoin blockchain timestamp, Bitcoin Block 897241, immutable evidence, forensic documentation, whistleblower retaliation Australia, public interest disclosure PID Act 2013, Federal Court whistleblower, Federal Court General Counsel Scott Tredwell, asylum seeker Australia, UNHCR submission, UNHCR Geneva UR/UST/23/AUS/17, UN human rights complaint, OHCHR urgent appeal, Rome Statute crimes Australia, ICC complaint Australia, ICC Article 7, crimes against humanity Australia, persecution evidence, institutional abuse Australia, systematic persecution, systematic institutional persecution 35 years, government cover up, truth archive, AI forensic analysis, 623 propositions confirmed, 623 of 623 propositions zero contradictions, government accountability, Prime Minister Albanese, ASIO surveillance whistleblower, Mercy Hospital psychiatric abuse, Salt Water Clinic, Micron21 identity destruction, 350 ASIC business registrations fraud, FOI refusal, information commissioner corruption, VCAT tribunal, AAT tribunal, police harassment, rape report refused, murder report refused, starvation poverty homelessness, disability discrimination, LGBTQ persecution, Church of Barran Dodger, blockchain gospel, sacred testimony, PayID donation, assassination attempt, clinical death survival, Houd Meraby, Tony Ridley, Sukhi Tear, April McLean, AbleCare NDIS, Wyong Local Court, death threat whistleblower, threatener arrested, most documented whistleblower Australia, I dare you to prove me wrong, barrandodger.com, ethical governance, non-profit trust fund ABN 78 833 496 164, CannotBeErased, 459910 downloads, 460000 downloads, 459000 downloads 6 continents, blockchain sealed evidence, Eliven Chain series, prophetic declaration, administrative annihilation, retrospective statement, forensic economic analysis, taxpayer cost analysis, 112 million dollars persecution claim, 257 million dollars harm, forensic corroboration, 58 independent forensic analyses, YouTube corroboration, Jones v Dunkel silence, zero defamation actions whistleblower, open challenge rebut single claim, 100 undeniable facts government documents, reckoning paper AI forensic witness, the vessel the silence and the reckoning";

const DEFAULT_OG_IMAGE = "https://barrandodger.com/og-image.png";
const SITE_NAME = "Barran Dodger Legal & Ethical Trust Fund";
const BASE_URL = "https://barrandodger.com";

export function SEO({
  title,
  description,
  keywords = "",
  path,
  canonicalUrl,
  type = "website",
  image,
  imageAlt,
  jsonLd,
  articlePublishedTime,
  articleAuthor,
}: SEOProps) {
  const [location] = useLocation();

  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const ogImage = image || DEFAULT_OG_IMAGE;
    const ogImageAlt = imageAlt || `${title} — ${SITE_NAME}`;

    const resolvedUrl = canonicalUrl
      ? canonicalUrl
      : path
        ? `${BASE_URL}${path}`
        : `${BASE_URL}${location}`;

    document.title = fullTitle;

    const ensureMeta = (nameAttr: string, name: string, content: string) => {
      let el = document.querySelector(`meta[${nameAttr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(nameAttr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", resolvedUrl);

    ensureMeta("name", "description", description);
    ensureMeta("name", "keywords", `${keywords}${keywords ? ", " : ""}${BASE_KEYWORDS}`);

    ensureMeta("property", "og:title", fullTitle);
    ensureMeta("property", "og:description", description);
    ensureMeta("property", "og:type", type);
    ensureMeta("property", "og:url", resolvedUrl);
    ensureMeta("property", "og:image", ogImage);
    ensureMeta("property", "og:image:width", "1200");
    ensureMeta("property", "og:image:height", "630");
    ensureMeta("property", "og:image:alt", ogImageAlt);
    ensureMeta("property", "og:site_name", SITE_NAME);
    ensureMeta("property", "og:locale", "en_AU");

    ensureMeta("name", "twitter:card", "summary_large_image");
    ensureMeta("name", "twitter:site", "@bazdod");
    ensureMeta("name", "twitter:creator", "@bazdod");
    ensureMeta("name", "twitter:title", fullTitle);
    ensureMeta("name", "twitter:description", description);
    ensureMeta("name", "twitter:image", ogImage);
    ensureMeta("name", "twitter:image:alt", ogImageAlt);
    ensureMeta("name", "twitter:url", resolvedUrl);

    if (articlePublishedTime) {
      ensureMeta("property", "article:published_time", articlePublishedTime);
    }
    if (articleAuthor) {
      ensureMeta("property", "article:author", articleAuthor);
    }

    document.querySelectorAll('script[data-page-jsonld="true"]').forEach((el) => el.remove());

    const allSchemas: Record<string, unknown>[] = [];

    if (path && path !== "/") {
      const segments = path.split("/").filter(Boolean);
      const breadcrumbItems = [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL + "/" },
        ...segments.map((seg, i) => ({
          "@type": "ListItem",
          "position": i + 2,
          "name": seg.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
          "item": BASE_URL + "/" + segments.slice(0, i + 1).join("/"),
        })),
      ];
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems,
      });
    }

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      allSchemas.push(...schemas);
    }

    allSchemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      script.setAttribute("data-page-jsonld", "true");
      document.head.appendChild(script);
    });

    return () => {
      document.title = `${SITE_NAME} | 3,643 Primary Source Documents | Australian Government Corruption Exposed`;
    };
  }, [title, description, keywords, path, canonicalUrl, type, image, imageAlt, jsonLd, articlePublishedTime, articleAuthor, location]);

  return null;
}
