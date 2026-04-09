import { useState, useRef, useEffect, useCallback } from "react";
import { X, ExternalLink, Eye, FileText, Search, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useDocumentProgress } from "@/components/ProgressTracker";
import { HighlightText } from "@/components/HighlightText";

interface DocumentPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  document: {
    title: string;
    description: string;
    url: string;
    tags?: string[];
    aiSignificance?: string;
  } | null;
  initialSearchQuery?: string;
}

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function countMatches(text: string, query: string): number {
  if (!query.trim()) return 0;
  const terms = query.trim().split(/\s+/).filter(Boolean);
  const pattern = terms.map(escapeRegex).join("|");
  const regex = new RegExp(pattern, "gi");
  return (text.match(regex) || []).length;
}

export function DocumentPreview({ isOpen, onClose, document, initialSearchQuery = "" }: DocumentPreviewProps) {
  const { markViewed, hasViewed } = useDocumentProgress();
  const [viewerSearch, setViewerSearch] = useState(initialSearchQuery);
  const [matchCount, setMatchCount] = useState(0);
  const [currentMatch, setCurrentMatch] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setViewerSearch(initialSearchQuery);
    }
  }, [isOpen, initialSearchQuery]);

  useEffect(() => {
    if (!document || !viewerSearch.trim()) {
      setMatchCount(0);
      setCurrentMatch(0);
      return;
    }
    const fullText = [
      document.title,
      document.description,
      (document.tags || []).join(" "),
      document.aiSignificance || "",
    ].join(" ");
    const count = countMatches(fullText, viewerSearch);
    setMatchCount(count);
    setCurrentMatch(count > 0 ? 1 : 0);
  }, [viewerSearch, document]);

  const scrollToMatch = useCallback((index: number) => {
    if (!bodyRef.current) return;
    const marks = Array.from(bodyRef.current.querySelectorAll("mark")) as HTMLElement[];
    if (marks.length === 0) return;
    marks.forEach((m) => { m.style.outline = "none"; });
    const target = marks[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.style.outline = "2px solid #f59e0b";
      target.style.outlineOffset = "2px";
    }
  }, []);

  useEffect(() => {
    if (matchCount > 0 && currentMatch > 0) {
      setTimeout(() => scrollToMatch(currentMatch - 1), 120);
    }
  }, [matchCount, currentMatch, scrollToMatch]);

  const handlePrev = () => {
    const next = currentMatch <= 1 ? matchCount : currentMatch - 1;
    setCurrentMatch(next);
    setTimeout(() => scrollToMatch(next - 1), 50);
  };

  const handleNext = () => {
    const next = currentMatch >= matchCount ? 1 : currentMatch + 1;
    setCurrentMatch(next);
    setTimeout(() => scrollToMatch(next - 1), 50);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNext();
    }
    if (e.key === "Escape") {
      setViewerSearch("");
    }
  };

  if (!document) return null;

  const handleOpenDocument = () => {
    markViewed(document.title);
    window.open(document.url, "_blank");
  };

  const isPDF = document.url.toLowerCase().endsWith(".pdf");
  const q = viewerSearch;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[92vh] overflow-hidden flex flex-col gap-0 p-0">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-3 border-b border-border flex-shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-xl font-serif text-primary pr-8 leading-snug">
                <HighlightText text={document.title} query={q} />
              </DialogTitle>
              <DialogDescription className="mt-1.5 text-sm leading-relaxed">
                <HighlightText text={document.description} query={q} />
              </DialogDescription>
            </div>
            {hasViewed(document.title) && (
              <Badge variant="secondary" className="flex-shrink-0 mt-1">
                <Eye className="h-3 w-3 mr-1" /> Viewed
              </Badge>
            )}
          </div>

          {/* Tags */}
          {document.tags && document.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3">
              {document.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  <HighlightText text={tag} query={q} />
                </Badge>
              ))}
            </div>
          )}
        </DialogHeader>

        {/* In-viewer search bar */}
        <div className="px-6 py-2.5 border-b border-border bg-zinc-950/60 flex-shrink-0 flex items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <Input
            ref={searchInputRef}
            type="text"
            placeholder="Search within this document…"
            value={viewerSearch}
            onChange={(e) => setViewerSearch(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            className="h-8 text-sm bg-transparent border-0 border-b border-transparent focus-visible:border-amber-400 rounded-none focus-visible:ring-0 px-0 flex-1"
            data-testid="input-viewer-search"
          />
          {viewerSearch ? (
            <>
              <span className="text-xs text-muted-foreground flex-shrink-0 tabular-nums min-w-[5rem] text-right">
                {matchCount === 0 ? "No matches" : `${currentMatch} of ${matchCount}`}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 flex-shrink-0"
                onClick={handlePrev}
                disabled={matchCount === 0}
                data-testid="button-viewer-search-prev"
                title="Previous match"
              >
                <ChevronUp className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 flex-shrink-0"
                onClick={handleNext}
                disabled={matchCount === 0}
                data-testid="button-viewer-search-next"
                title="Next match"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 flex-shrink-0"
                onClick={() => setViewerSearch("")}
                data-testid="button-viewer-search-clear"
                title="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            </>
          ) : (
            <span className="text-xs text-muted-foreground/40 flex-shrink-0">Enter to jump · Esc to clear</span>
          )}
        </div>

        {/* Scrollable body */}
        <div ref={bodyRef} className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {isPDF ? (
            <div className="bg-secondary/50 rounded-lg p-8 text-center">
              <FileText className="h-16 w-16 mx-auto text-primary/50 mb-4" />
              <p className="text-lg font-medium text-foreground mb-2">PDF Document</p>
              <p className="text-sm text-muted-foreground mb-6">
                Click below to open the full document in a new tab
              </p>
              <Button onClick={handleOpenDocument} className="gap-2">
                <ExternalLink className="h-4 w-4" /> Open Document
              </Button>
            </div>
          ) : (
            <div className="bg-muted rounded-lg overflow-hidden">
              <img
                src={document.url}
                alt={document.title}
                className="w-full h-auto"
                onLoad={() => markViewed(document.title)}
              />
            </div>
          )}

          {document.aiSignificance && (
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-bold text-primary mb-2 flex items-center gap-2 text-sm">
                <FileText className="h-4 w-4" /> AI Significance Analysis
              </h4>
              <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                <HighlightText text={document.aiSignificance} query={q} />
              </p>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-border flex-shrink-0 bg-background">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleOpenDocument} className="gap-2">
              <ExternalLink className="h-4 w-4" /> Open Full Document
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function useDocumentPreview() {
  const [previewDoc, setPreviewDoc] = useState<DocumentPreviewProps["document"]>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialSearch, setInitialSearch] = useState("");

  const openPreview = (doc: NonNullable<DocumentPreviewProps["document"]>, searchQuery = "") => {
    setPreviewDoc(doc);
    setInitialSearch(searchQuery);
    setIsOpen(true);
  };

  const closePreview = () => {
    setIsOpen(false);
    setTimeout(() => {
      setPreviewDoc(null);
      setInitialSearch("");
    }, 300);
  };

  return {
    previewDoc,
    isOpen,
    openPreview,
    closePreview,
    PreviewComponent: () => (
      <DocumentPreview
        isOpen={isOpen}
        onClose={closePreview}
        document={previewDoc}
        initialSearchQuery={initialSearch}
      />
    ),
  };
}
