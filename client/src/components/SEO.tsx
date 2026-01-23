import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
}

const BASE_KEYWORDS = "Barran Dodger, Richard McLean, whistleblower protection Australia, public interest disclosure, human rights violations, government corruption, blockchain evidence, forensic documentation, legal testimony, ethical governance, truth archive";

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
