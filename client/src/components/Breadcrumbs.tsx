import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

const routeLabels: Record<string, string> = {
  "": "Home",
  "start-here": "Start Here",
  "mission": "Mission & Vision",
  "gospel": "Gospel",
  "church": "Church & Congregation",
  "evidence": "Evidence Archive",
  "blockchain": "Blockchain Verification",
  "donate": "Donate",
  "contact": "Contact",
  "prophetic-papers": "Prophetic Papers",
  "research": "Legal Research",
  "timeline": "35-Year Timeline",
  "legal-status": "Legal Status Tracker",
  "media": "Press & Media",
};

export function Breadcrumbs() {
  const [location] = useLocation();
  
  if (location === "/") return null;
  
  const segments = location.split("/").filter(Boolean);
  
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="py-3 px-4 bg-muted/30 border-b border-border"
      data-testid="breadcrumb-nav"
    >
      <div className="container mx-auto">
        <ol className="flex items-center gap-1 text-sm flex-wrap" data-testid="breadcrumb-list">
          <li>
            <Link 
              href="/" 
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              data-testid="breadcrumb-home"
            >
              <Home className="h-3.5 w-3.5" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {segments.map((segment, index) => {
            const path = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;
            const label = routeLabels[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
            
            return (
              <li key={path} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
                {isLast ? (
                  <span 
                    className="font-medium text-foreground"
                    aria-current="page"
                    data-testid={`breadcrumb-${segment}`}
                  >
                    {label}
                  </span>
                ) : (
                  <Link 
                    href={path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`breadcrumb-${segment}`}
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
