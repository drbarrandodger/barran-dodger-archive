import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What is the Barran Dodger Trust Fund?",
  "Who is Dr. Richard McLean?",
  "What evidence is on this site?",
  "How can I help?",
];

function getChatSessionId(): string {
  const key = "bd_chat_session";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const createConversation = async (): Promise<number> => {
    if (conversationId) return conversationId;
    const res = await fetch("/api/conversations", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Chat-Session": getChatSessionId() },
      body: JSON.stringify({ title: "Chat" }),
    });
    const data = await res.json();
    setConversationId(data.id);
    return data.id;
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const convId = await createConversation();

      const res = await fetch(`/api/conversations/${convId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Chat-Session": getChatSessionId() },
        body: JSON.stringify({ content: text.trim() }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response body");

      const decoder = new TextDecoder();
      let buffer = "";
      let assistantContent = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const data = JSON.parse(line.slice(6));
            if (data.content) {
              assistantContent += data.content;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "assistant",
                  content: assistantContent,
                };
                return updated;
              });
            }
          } catch {}
        }
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev.filter((m) => m.content !== ""),
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if (conversationId) {
      fetch(`/api/conversations/${conversationId}`, {
        method: "DELETE",
        headers: { "X-Chat-Session": getChatSessionId() },
      }).catch(() => {});
    }
    setMessages([]);
    setConversationId(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-[60] w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-8rem)] flex flex-col rounded-2xl border-2 border-[hsl(38,92%,50%)]/40 bg-[hsl(222,55%,8%)] shadow-2xl shadow-black/50"
            data-testid="chatbot-window"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-[hsl(38,92%,50%)]/20 bg-[hsl(222,55%,10%)] rounded-t-2xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <h3 className="text-sm font-bold text-white">Trust Fund Assistant</h3>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0 text-body-text hover:text-white hover:bg-white/10"
                    onClick={clearChat}
                    data-testid="button-clear-chat"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0 text-body-text hover:text-white hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                  data-testid="button-close-chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3" data-testid="chat-messages">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <div className="text-center space-y-2 py-4">
                    <MessageCircle className="h-8 w-8 text-[hsl(38,92%,50%)] mx-auto opacity-60" />
                    <p className="text-sm text-body-text">
                      Ask me anything about the Barran Dodger Legal & Ethical Trust Fund, the evidence archive, or how you can help.
                    </p>
                  </div>
                  <div className="space-y-2">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="w-full text-left px-3 py-2 text-xs text-body-text border border-white/10 rounded-lg hover:border-[hsl(38,92%,50%)]/40 hover:bg-white/5 hover:text-white transition-colors"
                        data-testid={`suggested-q-${q.slice(0, 20).replace(/\s/g, '-').toLowerCase()}`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[hsl(38,92%,50%)] text-[hsl(222,55%,10%)] rounded-br-sm"
                        : "bg-white/10 text-gray-200 rounded-bl-sm"
                    }`}
                    data-testid={`chat-message-${msg.role}-${i}`}
                  >
                    <div className="whitespace-pre-wrap break-words">{msg.content || (isLoading && i === messages.length - 1 ? "..." : "")}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-white/10">
              <div className="flex gap-2 items-end">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your question..."
                  rows={1}
                  className="flex-1 resize-none bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-body-text/50 focus:outline-none focus:border-[hsl(38,92%,50%)]/50 max-h-20"
                  disabled={isLoading}
                  data-testid="input-chat-message"
                />
                <Button
                  size="sm"
                  className="h-9 w-9 p-0 bg-[hsl(38,92%,50%)] text-[hsl(222,55%,10%)] hover:bg-[hsl(38,92%,55%)] shrink-0"
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isLoading}
                  data-testid="button-send-chat"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-20 right-6 z-[60] h-12 w-12 rounded-full bg-[hsl(38,92%,50%)] text-[hsl(222,55%,10%)] shadow-lg shadow-[hsl(38,92%,50%)]/25 flex items-center justify-center hover:bg-[hsl(38,92%,55%)] transition-colors"
            data-testid="button-open-chatbot"
          >
            <MessageCircle className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
