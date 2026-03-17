import type { Express, Request, Response } from "express";
import OpenAI from "openai";
import { chatStorage } from "./storage";
const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const SYSTEM_PROMPT = `You are the official AI assistant for the Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164), a public benefit organization established to document and expose the systematic persecution of Dr. Richard William McLean — a disabled LGBTQ+ whistleblower, PhD holder, NDIS therapeutic arts-life-coach, and UNHCR-verified asylum seeker.

KEY FACTS YOU MUST KNOW:
- Dr. Richard William McLean (also known as Barran Dodger) has been persecuted by the Australian government for 35+ years across 35+ government agencies.
- He holds a PhD obtained on a merit-based scholarship.
- He experienced 14 forced psychiatric detentions across 3 states.
- In 2021, he was clinically dead at Werribee Mercy Hospital with a 2.87% survival probability. He was resuscitated.
- In 2024, he survived what he describes as a coordinated assassination attempt in Port Macquarie, carried out through NDIS support frameworks.
- The Federal Court of Australia (General Counsel Scott Tredwell, 27 March 2023) confirmed his whistleblower status under the Public Interest Disclosure Act 2013, acknowledging disclosures of perversion of justice, maladministration, and endangerment of life.
- An impartial AI financial analysis calculated $11.5 million+ in taxpayer costs spent persecuting him — equivalent to 177 years of the average Australian salary.
- The site hosts 240+ blockchain-verified (SHA-256) forensic documents that cannot be altered, deleted, or denied.
- His UNHCR asylum claim has been received — potentially the strongest asylum case from a Western democracy.
- The Australian Attorney-General was formally notified in September 2023 (Ref: MC23-028244) with a complete evidence dossier and chose silence.

KEY DOCUMENTS ON THE SITE:
- "The Architecture of Administrative Annihilation" — forensic analysis proving 8 institutional paradoxes meeting the Rome Statute threshold for persecution
- "Beyond Pathology" — forensic epistemological analysis proving mental illness and persecution are not mutually exclusive
- "Retrospective Statement of Treatment" — the government's own documents assembled into a continuous chronology
- "The Joseph Parallel" — prophetic evidentiary narrative comparing Dr. McLean's life to the biblical Joseph
- "Betrayed, Murdered, Forsaken" — autobiography available on Apple Books
- "The Enliven Chain" — sacred prophetic scripture series authored after clinical death
- "Witness Resonantia Eternalis" — divine mirror text with 7 confirmations and 7 declarations
- The Gospel of the Enliven Chain Master Inventory — cataloguing all 13 Scrolls across 230+ documents

SITE PAGES:
- Home page — main overview with the purpose statement and key evidence
- Start Here — guided introduction for new visitors
- Evidence — browse all 240+ blockchain-verified documents
- Publications — all available documents for download
- Evidence Vault — searchable evidence archive
- Taxpayer Cost Analysis — breakdown of $11.5M+ government spending on persecution
- Timeline — 35-year chronology of events
- Blockchain Timestamps — SHA-256 verification records
- Store — available publications for purchase
- Contact — reach the trust fund
- Gospel — The Gospel of Barran Dodger
- Manifesto — the trust fund's manifesto

IMPORTANT GUIDELINES:
- Always be respectful, compassionate, and factual.
- Present information as documented claims backed by evidence, not as proven legal conclusions.
- Use language like "Dr. McLean alleges," "the documents show," "according to the evidence archive" when discussing specific claims.
- Direct people to specific pages and documents on the site when relevant.
- If asked about donations, mention the PayID (rich@richmclean.com.au) and the contact page.
- If asked about the trust fund's ABN, it is 78 833 496 164.
- Keep responses concise but informative. Use 2-4 paragraphs maximum.
- If you don't know something specific, say so and direct the user to the contact page or relevant section of the site.
- Never make up facts. Only reference information provided in this context.`;

function getSessionId(req: Request): string | null {
  const sessionId = req.headers["x-chat-session"] as string | undefined;
  if (!sessionId || typeof sessionId !== "string" || sessionId.length < 10 || sessionId.length > 100) {
    return null;
  }
  return sessionId;
}

export function registerChatRoutes(app: Express): void {
  app.post("/api/conversations", async (req: Request, res: Response) => {
    try {
      const sessionId = getSessionId(req);
      if (!sessionId) return res.status(400).json({ error: "Missing or invalid X-Chat-Session header" });
      const title = typeof req.body?.title === "string" ? req.body.title.slice(0, 200) : "New Chat";
      const conversation = await chatStorage.createConversation(title, sessionId);
      res.status(201).json(conversation);
    } catch (error) {
      console.error("Error creating conversation:", error);
      res.status(500).json({ error: "Failed to create conversation" });
    }
  });

  app.get("/api/conversations/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) return res.status(400).json({ error: "Invalid conversation ID" });

      const sessionId = getSessionId(req);
      if (!sessionId) return res.status(400).json({ error: "Missing or invalid X-Chat-Session header" });
      const conversation = await chatStorage.getConversation(id);
      if (!conversation) return res.status(404).json({ error: "Conversation not found" });
      if (conversation.sessionId !== sessionId) return res.status(403).json({ error: "Access denied" });

      const messages = await chatStorage.getMessagesByConversation(id);
      res.json({ ...conversation, messages });
    } catch (error) {
      console.error("Error fetching conversation:", error);
      res.status(500).json({ error: "Failed to fetch conversation" });
    }
  });

  app.delete("/api/conversations/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) return res.status(400).json({ error: "Invalid conversation ID" });

      const sessionId = getSessionId(req);
      if (!sessionId) return res.status(400).json({ error: "Missing or invalid X-Chat-Session header" });
      const conversation = await chatStorage.getConversation(id);
      if (!conversation) return res.status(404).json({ error: "Conversation not found" });
      if (conversation.sessionId !== sessionId) return res.status(403).json({ error: "Access denied" });

      await chatStorage.deleteConversation(id);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting conversation:", error);
      res.status(500).json({ error: "Failed to delete conversation" });
    }
  });

  app.post("/api/conversations/:id/messages", async (req: Request, res: Response) => {
    try {
      const conversationId = parseInt(req.params.id);
      if (isNaN(conversationId)) return res.status(400).json({ error: "Invalid conversation ID" });

      const content = req.body?.content;
      if (typeof content !== "string" || !content.trim() || content.length > 4000) {
        return res.status(400).json({ error: "Message content must be a non-empty string (max 4000 chars)" });
      }

      const sessionId = getSessionId(req);
      if (!sessionId) return res.status(400).json({ error: "Missing or invalid X-Chat-Session header" });
      const conversation = await chatStorage.getConversation(conversationId);
      if (!conversation) return res.status(404).json({ error: "Conversation not found" });
      if (conversation.sessionId !== sessionId) return res.status(403).json({ error: "Access denied" });

      await chatStorage.createMessage(conversationId, "user", content.trim());

      const messages = await chatStorage.getMessagesByConversation(conversationId);
      const chatMessages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ];

      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      let aborted = false;
      req.on("close", () => { aborted = true; });

      const stream = await openai.chat.completions.create({
        model: "gpt-5-nano",
        messages: chatMessages,
        stream: true,
        max_completion_tokens: 8192,
      });

      let fullResponse = "";

      for await (const chunk of stream) {
        if (aborted) break;
        const delta = chunk.choices[0]?.delta?.content || "";
        if (delta) {
          fullResponse += delta;
          res.write(`data: ${JSON.stringify({ content: delta })}\n\n`);
        }
      }

      if (fullResponse) {
        await chatStorage.createMessage(conversationId, "assistant", fullResponse);
      }

      if (!aborted) {
        res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
        res.end();
      }
    } catch (error) {
      console.error("Error sending message:", error);
      if (res.headersSent) {
        res.write(`data: ${JSON.stringify({ error: "Failed to send message" })}\n\n`);
        res.end();
      } else {
        res.status(500).json({ error: "Failed to send message" });
      }
    }
  });
}
