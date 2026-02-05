import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  type?: string;
}

const BASE_KEYWORDS = "Barran Dodger, Dr Richard McLean, Rich McLean whistleblower, Australian whistleblower, government corruption Australia, 240 blockchain verified documents, 35 years persecution, 14 psychiatric hospitalisations across 3 states, psychiatric abuse whistleblower, found with no pulse, Attorney General silence, NDIS fraud evidence, OAIC corruption, OAIC cover up, Commonwealth Ombudsman ban, APRA whistleblower, blockchain evidence archive, SHA-256 verification, OpenTimestamps Bitcoin, immutable evidence, forensic documentation, whistleblower retaliation Australia, public interest disclosure PID Act, Federal Court whistleblower, asylum seeker Australia, UNHCR submission, UN human rights complaint, Rome Statute crimes Australia, ICC complaint Australia, persecution evidence, institutional abuse Australia, systematic persecution, government cover up, truth archive, AI forensic analysis, government accountability, Prime Minister Albanese, Attorney General Dreyfus, ASIO surveillance, Bill Shorten NDIS, Mercy Hospital psychiatric abuse, Micron21 identity destruction, 350 ASIC fraud, FOI refusal, VCAT tribunal, AAT tribunal, police harassment, disability discrimination, LGBTQ persecution, neuroweaponry, V2K targeted individual, Church of Barran Dodger, blockchain gospel, sacred testimony, PayID donation, assassination attempt, clinical death survival, most documented whistleblower Australia, I dare you to prove me wrong, barrandodger.com.au, ethical governance, non-profit trust fund ABN 78 833 496 164";

export function SEO({ title, description, keywords = "", path = "", type = "website" }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Barran Dodger Legal & Ethical Trust Fund`;
    const fullUrl = `https://www.barrandodger.com.au${path}`;
    document.title = fullTitle;
    
    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="keywords"]', "content", `${keywords}, ${BASE_KEYWORDS}`);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    
    if (path) {
      setMeta('meta[property="og:url"]', "content", fullUrl);
      setMeta('meta[name="twitter:url"]', "content", fullUrl);
      setMeta('link[rel="canonical"]', "href", fullUrl);
    }
    
    return () => {
      document.title = "Barran Dodger Legal & Ethical Trust Fund | 240+ Blockchain-Verified Documents | Australian Government Corruption Exposed";
    };
  }, [title, description, keywords, path, type]);
  
  return null;
}
