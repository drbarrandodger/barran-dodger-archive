import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
}

const BASE_KEYWORDS = "Barran Dodger, Dr Richard McLean, Rich McLean whistleblower, Australian whistleblower protection, public interest disclosure Australia, PID Act, human rights violations Australia, government corruption Australia, NDIS fraud, OAIC corruption, Commonwealth Ombudsman, blockchain evidence, forensic documentation, legal testimony, ethical governance, truth archive, VCAT tribunal, AAT tribunal, Federal Court Australia, Rome Statute crimes, ICC Australia, asylum claim, UNHRC submission, persecution evidence, institutional abuse, whistleblower retaliation, Mercy Hospital malpractice, Salt Water Clinic, Micron21, digital identity destruction, FOI refusal, privacy complaint, service restriction ombudsman, AHPRA complaint, Centrelink rejection, police harassment, disability discrimination, LGBTQ persecution, Church of Barran Dodger, divine forgiveness, blockchain gospel, SHA-256 verification, OpenTimestamps Bitcoin, AI forensic analysis";

export function SEO({ title, description, keywords = "", path = "" }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Barran Dodger Legal & Ethical Trust Fund`;
    document.title = fullTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", `${keywords}, ${BASE_KEYWORDS}`);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", fullTitle);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && path) {
      ogUrl.setAttribute("content", `https://www.barrandodger.com.au${path}`);
    }
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", fullTitle);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && path) {
      canonical.setAttribute("href", `https://www.barrandodger.com.au${path}`);
    }
    
    return () => {
      document.title = "Barran Dodger Legal & Ethical Trust Fund | Whistleblower Protection & Human Rights Documentation";
    };
  }, [title, description, keywords, path]);
  
  return null;
}
