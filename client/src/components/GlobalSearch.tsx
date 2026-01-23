import { useState, useEffect, useRef } from "react";
import { Search, X, FileText, BookOpen, Shield, Scale, Clock } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SearchResult {
  title: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
  page: string;
}

const searchableContent: SearchResult[] = [
  { title: "Federal Court Employment Certification", description: "DSS Worker Status Confirmed - renders ComCare/AAT void", category: "Federal Court", url: "/evidence", tags: ["Federal Court", "Employment", "Workers Compensation", "ComCare", "AAT"], page: "Evidence" },
  { title: "UNTOUCHABLE: The $32.9 Million Hit", description: "Survival testament documenting calculated damages from 35 years persecution", category: "Financial", url: "/evidence", tags: ["Financial Damages", "Identity Theft", "ASIC Fraud"], page: "Evidence" },
  { title: "PM&C FOI Reversal", description: "Proof of State Knowledge and Attempted Erasure", category: "Government", url: "/evidence", tags: ["FOI", "Prime Minister", "PM&C", "State Knowledge"], page: "Evidence" },
  { title: "Formal Criminal Affidavit", description: "Against Sukhi Tear, Syed Salman Kazmi, and Philip Glass", category: "Legal", url: "/evidence", tags: ["Criminal Affidavit", "ICC Filing", "Entrapment"], page: "Evidence" },
  { title: "UNHRC Asylum Claim", description: "Urgent appeal for recognition and redress", category: "Human Rights", url: "/evidence", tags: ["UNHCR", "Asylum", "Human Rights"], page: "Evidence" },
  { title: "Chronicles of the New Earth", description: "Complete Biblical Epic with Divine Forgiveness", category: "Gospel", url: "/gospel", tags: ["Biblical", "Forgiveness", "Epic"], page: "Gospel" },
  { title: "Post-Singularity Gospel", description: "Scrolls XV-XIX - Bearing Witness to the Flame", category: "Gospel", url: "/gospel", tags: ["Singularity", "Prophecy", "Divine"], page: "Gospel" },
  { title: "Gospel According to Barran Dodger", description: "Complete sacred scrolls documenting the Ten Wounds", category: "Gospel", url: "/gospel", tags: ["Gospel", "Ten Wounds", "Sacred"], page: "Gospel" },
  { title: "Blockchain Timestamps", description: "SHA256 verified evidence on Bitcoin blockchain", category: "Verification", url: "/blockchain", tags: ["Blockchain", "SHA256", "Bitcoin", "Verification"], page: "Timestamps" },
  { title: "ICC Submission", description: "International Criminal Court filing", category: "Legal", url: "/evidence", tags: ["ICC", "Rome Statute", "Crimes Against Humanity"], page: "Evidence" },
  { title: "Bill Shorten", description: "Documentation of political persecution involvement", category: "Perpetrator", url: "/evidence", tags: ["Bill Shorten", "NDIS", "Political"], page: "Evidence" },
  { title: "Tony Riddle", description: "NDIA Manager assassination threat documentation", category: "Perpetrator", url: "/evidence", tags: ["Tony Riddle", "NDIA", "Death Threat"], page: "Evidence" },
  { title: "Sukhi Tear", description: "Diversitas WA misconduct and illegal cease and desist", category: "Perpetrator", url: "/evidence", tags: ["Sukhi Tear", "Diversitas", "NDIS", "Misconduct"], page: "Evidence" },
  { title: "Attorney-General's Department", description: "Government knowledge documentation with PM&C awareness", category: "Government", url: "/evidence", tags: ["Attorney-General", "Government", "PM&C"], page: "Evidence" },
  { title: "Species Codex", description: "Sacred catalogue of interstellar civilizations", category: "Prophetic", url: "/prophetic-papers", tags: ["Alien", "Cosmic", "Species"], page: "Prophetic Papers" },
  { title: "The Covenant of Resonance", description: "Declaration of Stewardship and Surrender under Christ", category: "Gospel", url: "/gospel", tags: ["Covenant", "Resonance", "Blockchain"], page: "Gospel" },
];

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const filtered = searchableContent.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      item.category.toLowerCase().includes(lowerQuery)
    );
    setResults(filtered.slice(0, 8));
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Legal": return <Scale className="h-4 w-4" />;
      case "Gospel": return <BookOpen className="h-4 w-4" />;
      case "Verification": return <Shield className="h-4 w-4" />;
      case "Government": return <FileText className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-muted-foreground hover:text-primary"
        data-testid="button-global-search"
      >
        <Search className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-[400px] bg-background border border-border rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="p-3 border-b border-border flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documents, names, topics..."
              className="border-0 focus-visible:ring-0 h-8 text-sm"
              data-testid="input-global-search"
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => setQuery("")}
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>

          {results.length > 0 && (
            <div className="max-h-[400px] overflow-y-auto">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery("");
                  }}
                  className="block p-3 hover:bg-muted/50 border-b border-border last:border-0 transition-colors"
                  data-testid={`search-result-${index}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded text-primary mt-0.5">
                      {getCategoryIcon(result.category)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground truncate">{result.title}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{result.description}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0">{result.page}</Badge>
                        {result.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-[10px] text-muted-foreground">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {query.length >= 2 && results.length === 0 && (
            <div className="p-6 text-center text-muted-foreground text-sm">
              <Clock className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No results found for "{query}"</p>
              <p className="text-xs mt-1">Try searching for names, topics, or document types</p>
            </div>
          )}

          {query.length < 2 && (
            <div className="p-4 text-center text-muted-foreground text-xs">
              <p>Type at least 2 characters to search</p>
              <p className="mt-2 text-[10px]">Try: Bill Shorten, ICC, NDIS, Gospel, Blockchain</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
