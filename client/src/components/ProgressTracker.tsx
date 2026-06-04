import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, FileText, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const STORAGE_KEY = "barran-viewed-documents";
const TOTAL_DOCUMENTS = 240;

export function useDocumentProgress() {
  const [viewedDocs, setViewedDocs] = useState<string[]>([]);
  
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setViewedDocs(JSON.parse(stored));
    }
  }, []);
  
  const markViewed = (docId: string) => {
    setViewedDocs(prev => {
      if (prev.includes(docId)) return prev;
      const updated = [...prev, docId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };
  
  const clearProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setViewedDocs([]);
  };
  
  return {
    viewedDocs,
    viewedCount: viewedDocs.length,
    totalCount: TOTAL_DOCUMENTS,
    percentage: Math.round((viewedDocs.length / TOTAL_DOCUMENTS) * 100),
    markViewed,
    clearProgress,
    hasViewed: (docId: string) => viewedDocs.includes(docId)
  };
}

interface ProgressTrackerProps {
  variant?: "compact" | "full";
}

export function ProgressTracker({ variant = "full" }: ProgressTrackerProps) {
  const { viewedCount, totalCount, percentage } = useDocumentProgress();
  
  const getLevel = () => {
    if (percentage >= 75) return { title: "Truth Seeker", color: "text-[hsl(38,92%,50%)]" };
    if (percentage >= 50) return { title: "Investigator", color: "text-primary" };
    if (percentage >= 25) return { title: "Researcher", color: "text-blue-500" };
    return { title: "Newcomer", color: "text-muted-foreground" };
  };
  
  const level = getLevel();

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3" data-testid="progress-tracker-compact">
        <Eye className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm">
          <span className="font-medium">{viewedCount}</span>
          <span className="text-muted-foreground">/{totalCount} viewed</span>
        </span>
        <Progress value={percentage} className="w-20 h-2" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-secondary/50 border border-border rounded-lg p-6"
      data-testid="progress-tracker-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <h4 className="font-medium">Your Progress</h4>
        </div>
        <Badge variant="outline" className={level.color}>
          <Award className="h-3 w-3 mr-1" />
          {level.title}
        </Badge>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-muted-foreground">Documents Reviewed</span>
          <span className="font-medium">{viewedCount} / {totalCount}</span>
        </div>
        <Progress value={percentage} className="h-3" />
      </div>
      
      <p className="text-xs text-muted-foreground">
        {percentage < 25 && "Start exploring the evidence archive to track your progress."}
        {percentage >= 25 && percentage < 50 && "You're making progress! Keep reviewing the evidence."}
        {percentage >= 50 && percentage < 75 && "Excellent work! You've reviewed over half the archive."}
        {percentage >= 75 && "You're a dedicated truth seeker. Thank you for bearing witness."}
      </p>
    </motion.div>
  );
}
