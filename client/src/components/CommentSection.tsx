import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, User, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import type { Comment } from "@shared/schema";

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

export function CommentSection({ pageSlug, title = "Discussion" }: { pageSlug: string; title?: string }) {
  const [expanded, setExpanded] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const { data: comments = [], isLoading } = useQuery<Comment[]>({
    queryKey: ['/api/comments', pageSlug],
    queryFn: () => fetch(`/api/comments/${pageSlug}`).then(r => r.json()),
    refetchInterval: 30000,
  });

  const postMutation = useMutation({
    mutationFn: async (data: { pageSlug: string; displayName: string; message: string }) => {
      const res = await apiRequest("POST", "/api/comments", data);
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/comments', pageSlug] });
      setMessage("");
      toast({ title: "Comment posted", description: "Your comment has been added to the discussion." });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to post comment. Please try again.", variant: "destructive" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMsg = message.trim();
    if (!trimmedName || !trimmedMsg) return;
    postMutation.mutate({ pageSlug, displayName: trimmedName, message: trimmedMsg });
  };

  return (
    <section className="mt-16 mb-8" data-testid={`comment-section-${pageSlug}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-3 w-full text-left group"
        data-testid="button-toggle-comments"
      >
        <div className="flex items-center gap-2">
          <MessageCircle className="h-6 w-6 text-[hsl(38,92%,50%)]" />
          <h2 className="text-2xl font-serif font-bold text-white">{title}</h2>
        </div>
        <span className="ml-2 text-sm text-body-text tabular-nums">
          {comments.length} {comments.length === 1 ? "comment" : "comments"}
        </span>
        <span className="ml-auto text-body-text group-hover:text-white transition-colors">
          {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="mt-6 p-5 rounded-xl bg-white/5 border border-white/10" data-testid="form-new-comment">
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <div className="flex-1 sm:max-w-[200px]">
                  <label htmlFor={`name-${pageSlug}`} className="sr-only">Your name</label>
                  <input
                    id={`name-${pageSlug}`}
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={50}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-body-text focus:outline-none focus:border-[hsl(38,92%,50%)]/50 transition-colors"
                    data-testid="input-comment-name"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label htmlFor={`message-${pageSlug}`} className="sr-only">Your comment</label>
                  <textarea
                    id={`message-${pageSlug}`}
                    placeholder="Share your thoughts on this document..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={2000}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-body-text focus:outline-none focus:border-[hsl(38,92%,50%)]/50 transition-colors resize-none"
                    data-testid="input-comment-message"
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    type="submit"
                    disabled={!name.trim() || !message.trim() || postMutation.isPending}
                    className="h-[84px] px-5 bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,55%)] text-[hsl(222,55%,10%)] font-bold"
                    data-testid="button-submit-comment"
                  >
                    {postMutation.isPending ? (
                      <span className="animate-pulse">...</span>
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>
              <p className="text-xs text-body-text mt-2">{message.length}/2000 characters</p>
            </form>

            <div className="mt-6 space-y-4" data-testid="comments-list">
              {isLoading && (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 rounded-lg bg-white/5 animate-pulse">
                      <div className="h-4 w-32 bg-white/10 rounded mb-3" />
                      <div className="h-3 w-full bg-white/10 rounded mb-2" />
                      <div className="h-3 w-2/3 bg-white/10 rounded" />
                    </div>
                  ))}
                </div>
              )}

              {!isLoading && comments.length === 0 && (
                <div className="text-center py-8 text-body-text">
                  <MessageCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No comments yet. Be the first to share your thoughts.</p>
                </div>
              )}

              <AnimatePresence>
                {comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-colors"
                    data-testid={`comment-item-${comment.id}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-7 w-7 rounded-full bg-[hsl(38,92%,50%)]/20 flex items-center justify-center">
                        <User className="h-3.5 w-3.5 text-[hsl(38,92%,50%)]" />
                      </div>
                      <span className="font-bold text-sm text-white" data-testid={`text-comment-author-${comment.id}`}>
                        {comment.displayName}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-body-text">
                        <Clock className="h-3 w-3" />
                        {comment.createdAt ? timeAgo(comment.createdAt.toString()) : "just now"}
                      </span>
                    </div>
                    <p className="text-sm text-body-text leading-relaxed whitespace-pre-wrap break-words" data-testid={`text-comment-body-${comment.id}`}>
                      {comment.message}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
