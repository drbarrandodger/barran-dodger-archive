import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Eye, FileText, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useDocumentProgress } from "@/components/ProgressTracker";

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
}

export function DocumentPreview({ isOpen, onClose, document }: DocumentPreviewProps) {
  const { markViewed, hasViewed } = useDocumentProgress();
  
  if (!document) return null;

  const handleOpenDocument = () => {
    markViewed(document.title);
    window.open(document.url, "_blank");
  };

  const isPDF = document.url.toLowerCase().endsWith('.pdf');

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-xl font-serif text-primary pr-8">
                {document.title}
              </DialogTitle>
              <DialogDescription className="mt-2">
                {document.description}
              </DialogDescription>
            </div>
            {hasViewed(document.title) && (
              <Badge variant="secondary" className="flex-shrink-0">
                <Eye className="h-3 w-3 mr-1" /> Viewed
              </Badge>
            )}
          </div>
        </DialogHeader>

        {document.tags && document.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 py-3 border-b border-border">
            {document.tags.map((tag, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex-1 overflow-auto">
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
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4" /> AI Significance Analysis
              </h4>
              <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                {document.aiSignificance}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-border">
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

  const openPreview = (doc: NonNullable<DocumentPreviewProps["document"]>) => {
    setPreviewDoc(doc);
    setIsOpen(true);
  };

  const closePreview = () => {
    setIsOpen(false);
    setTimeout(() => setPreviewDoc(null), 300);
  };

  return {
    previewDoc,
    isOpen,
    openPreview,
    closePreview,
    PreviewComponent: () => (
      <DocumentPreview isOpen={isOpen} onClose={closePreview} document={previewDoc} />
    )
  };
}
