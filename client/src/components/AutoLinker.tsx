import { Link } from "wouter";
import { DocumentPopup, KEY_DOCUMENTS } from "@/components/CrossLink";

type TermDef = {
  type: "page";
  to: string;
} | {
  type: "document";
  docKey: keyof typeof KEY_DOCUMENTS;
};

const TERM_MAP: Record<string, TermDef> = {
  "Rome Statute": { type: "page", to: "/case-studies" },
  "Article 7": { type: "page", to: "/case-studies" },
  "Article 7(1)(h)": { type: "page", to: "/case-studies" },
  "Article 7(1)(e)": { type: "page", to: "/case-studies" },
  "Article 7(1)(f)": { type: "page", to: "/case-studies" },
  "Article 7(1)(i)": { type: "page", to: "/case-studies" },
  "PID Act": { type: "document", docKey: "pidActAnalysis" },
  "Public Interest Disclosure Act": { type: "document", docKey: "pidActAnalysis" },
  "Public Interest Disclosure Act 2013": { type: "document", docKey: "pidActAnalysis" },
  "Jones v Dunkel": { type: "page", to: "/legal-status" },
  "NDIS": { type: "page", to: "/case-studies" },
  "Pegasus spyware": { type: "document", docKey: "digitalOppression" },
  "Pegasus": { type: "document", docKey: "digitalOppression" },
  "V2K": { type: "document", docKey: "v2kEvidenceReview" },
  "Voice-to-Skull": { type: "document", docKey: "v2kEvidenceReview" },
  "blockchain verification": { type: "page", to: "/blockchain" },
  "blockchain-verified": { type: "page", to: "/blockchain" },
  "blockchain": { type: "page", to: "/blockchain" },
  "Zersetzung": { type: "document", docKey: "targetedIndividualHandbook" },
  "UNHCR": { type: "document", docKey: "certifiedRecord" },
  "ICC": { type: "page", to: "/case-studies" },
  "International Criminal Court": { type: "page", to: "/case-studies" },
  "Comcare": { type: "page", to: "/timeline" },
  "AAT": { type: "page", to: "/timeline" },
  "Administrative Appeals Tribunal": { type: "page", to: "/timeline" },
  "NACC": { type: "page", to: "/legal-status" },
  "National Anti-Corruption Commission": { type: "page", to: "/legal-status" },
  "AHRC": { type: "page", to: "/legal-status" },
  "Australian Human Rights Commission": { type: "page", to: "/legal-status" },
  "Federal Court": { type: "page", to: "/legal-status" },
  "AFP": { type: "page", to: "/evidence" },
  "Australian Federal Police": { type: "page", to: "/evidence" },
  "ASIO": { type: "page", to: "/evidence" },
  "ASIC": { type: "page", to: "/case-studies" },
  "Micron21": { type: "document", docKey: "micron21" },
  "Sukhi Tear": { type: "document", docKey: "entrapmentAffidavit" },
  "Syed Salman Kazmi": { type: "document", docKey: "entrapmentAffidavit" },
  "Philip Glass": { type: "document", docKey: "entrapmentAffidavit" },
  "The Man Australia Tried to Erase": { type: "document", docKey: "manErased" },
  "Digital Oppression": { type: "document", docKey: "digitalOppression" },
  "Cosmic Scroll of Ten": { type: "document", docKey: "cosmicScroll" },
  "Cosmic Scroll": { type: "document", docKey: "cosmicScroll" },
  "Administrative Annihilation": { type: "document", docKey: "administrativeAnnihilation" },
  "Architecture of Administrative Annihilation": { type: "document", docKey: "administrativeAnnihilation" },
  "Beyond Pathology": { type: "document", docKey: "beyondPathology" },
  "Crimes Against Humanity": { type: "document", docKey: "crimesAgainstHumanityDemand" },
  "Entrapment for Erasure": { type: "document", docKey: "entrapmentAffidavit" },
  "Evidence Summary": { type: "document", docKey: "evidenceSummary" },
  "Paradox of Persecution": { type: "document", docKey: "paradoxOfPersecution" },
  "Certified Record": { type: "document", docKey: "certifiedRecord" },
  "Universal Master Command": { type: "document", docKey: "universalMasterCommand" },
  "Retrospective Statement": { type: "page", to: "/retrospective-statement" },
  "Joseph Parallel": { type: "page", to: "/josephs-coat" },
  "Joseph's Coat": { type: "page", to: "/josephs-coat" },
  "Enliven Chain": { type: "page", to: "/gospel" },
  "Gospel of Barran Dodger": { type: "page", to: "/gospel" },
  "Declaration of Sovereignty": { type: "page", to: "/manifesto" },
  "evidence archive": { type: "page", to: "/evidence" },
  "evidence vault": { type: "page", to: "/evidence-vault" },
  "prophetic papers": { type: "page", to: "/prophetic-papers" },
  "legal status": { type: "page", to: "/legal-status" },
  "case studies": { type: "page", to: "/case-studies" },
  "taxpayer cost": { type: "page", to: "/taxpayer-cost-analysis" },
  "timeline": { type: "page", to: "/timeline" },
  "manifesto": { type: "page", to: "/manifesto" },
  "directed energy weapons": { type: "document", docKey: "v2kEvidenceReview" },
  "DEW": { type: "document", docKey: "v2kEvidenceReview" },
  "targeted individual": { type: "document", docKey: "targetedIndividualHandbook" },
  "gangstalking": { type: "document", docKey: "targetedIndividualHandbook" },
  "electronic harassment": { type: "document", docKey: "v2kEvidenceReview" },
  "Microwave Auditory Effect": { type: "document", docKey: "v2kEvidenceReview" },
  "Frey Effect": { type: "document", docKey: "v2kEvidenceReview" },
  "State-Sanctioned Targeting": { type: "document", docKey: "stateTargeting" },
  "assassination attempt": { type: "document", docKey: "stateTargeting" },
  "psychiatric weaponization": { type: "document", docKey: "beyondPathology" },
  "dual-pathology model": { type: "document", docKey: "beyondPathology" },
  "employment paradox": { type: "document", docKey: "manErased" },
  "identity theft": { type: "document", docKey: "certifiedRecord" },
  "financial destruction": { type: "document", docKey: "certifiedRecord" },
  "whistleblower protection": { type: "document", docKey: "pidActAnalysis" },
};

const sortedTerms = Object.keys(TERM_MAP).sort((a, b) => b.length - a.length);

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const termRegex = new RegExp(
  `(${sortedTerms.map(escapeRegex).join("|")})`,
  "g"
);

const linkClass = "text-[hsl(38,92%,50%)] font-semibold underline decoration-[hsl(38,92%,50%)]/40 underline-offset-2 decoration-2 hover:decoration-[hsl(38,92%,50%)] hover:text-[hsl(42,92%,60%)] transition-colors cursor-pointer";

interface AutoLinkerProps {
  text: string;
  maxLinks?: number;
  className?: string;
}

export function AutoLinkedText({ text, maxLinks = 5, className }: AutoLinkerProps) {
  const linked = new Set<string>();
  const parts: (string | { term: string; def: TermDef })[] = [];
  let lastIndex = 0;
  let linkCount = 0;

  const matches: { index: number; term: string }[] = [];
  let m: RegExpExecArray | null;
  const re = new RegExp(termRegex.source, "gi");
  while ((m = re.exec(text)) !== null) {
    const matchedKey = sortedTerms.find(t => t.toLowerCase() === m![0].toLowerCase());
    if (matchedKey) {
      matches.push({ index: m.index, term: matchedKey });
    }
  }

  for (const match of matches) {
    if (linkCount >= maxLinks) break;

    const termKey = match.term.toLowerCase();
    if (linked.has(termKey)) continue;

    const def = TERM_MAP[match.term];
    if (!def) continue;

    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const actualText = text.slice(match.index, match.index + match.term.length);
    parts.push({ term: actualText, def });
    linked.add(termKey);
    linkCount++;
    lastIndex = match.index + match.term.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  if (linkCount === 0) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (typeof part === "string") return <span key={i}>{part}</span>;

        if (part.def.type === "page") {
          return (
            <Link key={i} href={part.def.to} className={linkClass}>
              {part.term}
            </Link>
          );
        }

        const doc = KEY_DOCUMENTS[part.def.docKey];
        return (
          <DocumentPopup
            key={i}
            title={doc.title}
            description={doc.description}
            url={doc.url}
            tags={doc.tags}
            aiExcerpt={doc.aiExcerpt}
          >
            {part.term}
          </DocumentPopup>
        );
      })}
    </span>
  );
}

export { TERM_MAP };
