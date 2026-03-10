import { useState, useEffect } from "react";
import { Share2, Link2, Check, X } from "lucide-react";
import { SiX, SiFacebook, SiLinkedin, SiReddit, SiWhatsapp, SiTelegram } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

const url = "https://www.barrandodger.com.au";
const encodedUrl = encodeURIComponent(url);

export type ShareContext =
  | "hero"
  | "ai-analysis"
  | "assassination"
  | "cost-breakdown"
  | "evidence"
  | "support"
  | "complicity"
  | "default";

const contextMessages: Record<ShareContext, {
  twitter: string;
  facebook: string;
  whatsapp: string;
  telegram: string;
  reddit: string;
  clipboard: string;
  label: string;
}> = {
  hero: {
    twitter: `14 psych detentions across 3 states. No pulse. 35 yrs of persecution by 35+ Aust govt agencies. 240+ blockchain-sealed docs exposed.\n\nThe Attorney-General was told in 2021 & chose silence.\n\n"I DARE YOU TO PROVE ME WRONG"`,
    facebook: `They found him with no pulse. 14 psychiatric hospitalisations across 3 states. 35 years of systematic persecution by 35+ Australian government agencies. 240+ forensic documents, blockchain-sealed and tamper-proof. The Attorney-General was informed in 2021 and did nothing. This is the most documented case of institutional abuse in Australian history.`,
    whatsapp: `READ THIS:\n\n14 psych hospitalisations across 3 states. Found with NO PULSE. 35+ agencies. 35 years. 240+ blockchain-verified docs.\n\nThe PM & Attorney-General were notified. They chose silence.\n\nThis is real. This is Australia.\n\n${url}`,
    telegram: `THE MOST DOCUMENTED GOVT PERSECUTION IN AUSTRALIAN HISTORY\n\n14 forced psychiatric hospitalisations\nFound with no pulse\n35+ agencies\n240+ blockchain-sealed documents\nAttorney-General notified 2021 - chose silence\n\nRead it: ${url}`,
    reddit: `240+ blockchain-verified docs expose 35 years of systematic persecution by 35+ Australian govt agencies — "I DARE YOU TO PROVE ME WRONG"`,
    clipboard: `THEY FOUND HIM WITH NO PULSE.\n\n14 forced psychiatric hospitalisations across 3 states. 35 years. 35+ Australian government agencies. 240+ blockchain-sealed forensic documents.\n\nThe Attorney-General was told in 2021 and chose silence.\n\n"I DARE YOU TO PROVE ME WRONG"\n\nRead the evidence: ${url}`,
    label: "Share This Story",
  },
  "ai-analysis": {
    twitter: `An AI analysed Australia's own govt documents & calculated $11.5M+ in taxpayer costs targeting ONE whistleblower over 35 yrs.\n\nAI can't be bribed, silenced with NDAs, or politically intimidated.\n\nNot one professional can refute it.`,
    facebook: `An impartial AI analysed the Australian government's own documents and calculated over $11.5 million in taxpayer costs spent persecuting a single disabled whistleblower across 35 years. That's 177 years of the average Australian salary. AI cannot be bribed, corrupted, or silenced with NDAs. Not one professional has been able to refute these findings.`,
    whatsapp: `AI FINANCIAL ANALYSIS:\n\n$11.5M+ of YOUR tax dollars spent persecuting ONE person over 35 years.\n\n177 years of avg Aussie salary.\n\nAI can't be bribed. AI can't be silenced.\n\nNot one professional can refute it.\n\n${url}/taxpayer-cost-analysis`,
    telegram: `IMPARTIAL AI ANALYSIS\n\n$11.5M+ taxpayer cost\n35+ agencies\n35 years targeting\n177 years of avg salary\n\nAI cannot be bribed, corrupted, or silenced with NDAs.\n\nFull breakdown: ${url}/taxpayer-cost-analysis`,
    reddit: `AI analysis of Australian govt documents calculates $11.5M+ taxpayer cost persecuting one whistleblower — 177 years of avg salary, 35+ agencies, cannot be refuted`,
    clipboard: `IMPARTIAL AI ANALYSIS — CANNOT BE BRIBED, CORRUPTED, OR SILENCED\n\n$11.5M+ in taxpayer costs targeting ONE whistleblower across 35 years and 35+ agencies. That equals 177 years of the average Australian salary.\n\nAI cannot be bribed. AI cannot be silenced with NDAs. Not one professional can refute it.\n\nSee the full breakdown: ${url}/taxpayer-cost-analysis`,
    label: "Share AI Analysis",
  },
  assassination: {
    twitter: `His own NDIS provider confirmed the assassination attempt was real:\n\n"I thought you were just paranoid. You were right."\n"Systematic corruption all the way to the top."\n\nThen he was silenced with an NDA — paid by YOUR taxes.`,
    facebook: `An NDIS provider named Ben confirmed the assassination attempt against a disabled whistleblower was real. His exact words: "I thought you were just paranoid. You were right." and "Systematic corruption that goes all the way to the top." He was then silenced with a Non-Disclosure Agreement, paid for with taxpayer dollars. The cost of the targeted killing attempt and cover-up: $1.13 million.`,
    whatsapp: `ASSASSINATION CONFIRMED BY NDIS PROVIDER:\n\n"I thought you were just paranoid. You were right."\n"They could put a hit on me too."\n"Systematic corruption all the way to the top."\n\nThen he was silenced with an NDA.\nCost: $1.13M of YOUR taxes.\n\n${url}/taxpayer-cost-analysis`,
    telegram: `CONFIRMED ASSASSINATION ATTEMPT\n\nNDIS provider Ben confirmed:\n"I thought you were just paranoid. You were right."\n"Systematic corruption all the way to the top."\n"They could put a hit on me too."\n\nSilenced with NDA. Cost: $1.13M\n\n${url}/taxpayer-cost-analysis`,
    reddit: `NDIS provider confirmed assassination attempt on Australian whistleblower: "I thought you were just paranoid. You were right" — then silenced with NDA at taxpayer expense`,
    clipboard: `ASSASSINATION ATTEMPT CONFIRMED\n\nHis NDIS provider Ben confirmed it was real:\n"I thought you were just paranoid. You were right."\n"Systematic corruption that goes all the way to the top."\n"They could put a hit on me too."\n\nBen was then silenced with an NDA — paid for with YOUR taxes. Cost: $1.13M.\n\n${url}/taxpayer-cost-analysis`,
    label: "Share This Evidence",
  },
  "cost-breakdown": {
    twitter: `$11.5M+ of Australian taxpayer money spent persecuting ONE disabled whistleblower.\n\n14 psych detentions: $785K\nSurveillance: $2.3M\nLegal suppression: $1.8M\nAssassination attempt: $1.13M\n\nThat's 177 yrs of avg salary.\n\nYour taxes.`,
    facebook: `Your Australian tax dollars at work: $11.5 million spent persecuting a single disabled whistleblower over 35 years. 14 psychiatric hospitalisations costing $785,948. Surveillance operations costing $2.3 million. Legal suppression costing $1.8 million. A targeted killing attempt costing $1.13 million. That's 177 years of the average Australian salary. Zero accountability.`,
    whatsapp: `YOUR TAX DOLLARS:\n\n$11.5M+ spent persecuting ONE person:\n- 14 psych detentions: $785K\n- Surveillance: $2.3M\n- Legal suppression: $1.8M\n- Assassination: $1.13M\n- 35+ agencies involved\n\n= 177 years avg salary\n\n${url}/taxpayer-cost-analysis`,
    telegram: `YOUR TAX DOLLARS FUNDED THIS\n\n$11.5M+ persecuting ONE whistleblower:\n$785K — 14 psych hospitalisations\n$2.3M — Surveillance\n$1.8M — Legal suppression\n$1.13M — Assassination attempt\n\n= 177 years avg salary\n\nFull breakdown: ${url}/taxpayer-cost-analysis`,
    reddit: `$11.5M+ in Australian taxpayer funds spent persecuting one disabled whistleblower — 14 psychiatric detentions, surveillance, assassination attempt — equalling 177 years of average salary`,
    clipboard: `YOUR TAX DOLLARS FUNDED THIS PERSECUTION\n\n$11.5M+ spent on ONE disabled whistleblower:\n- 14 psychiatric hospitalisations: $785,948\n- Surveillance operations: $2.3M\n- Legal suppression: $1.8M\n- Targeted killing attempt: $1.13M\n- 35+ agencies involved\n\nThat equals 177 years of the average Australian salary.\n\nFull breakdown: ${url}/taxpayer-cost-analysis`,
    label: "Share Cost Analysis",
  },
  evidence: {
    twitter: `240+ blockchain-verified documents expose 35 yrs of Australian govt corruption.\n\nEvery claim backed by evidence. Every agency named. SHA-256 sealed.\n\n"I DARE YOU TO PROVE ME WRONG"\n\nNot one person has.`,
    facebook: `240+ forensic documents spanning 35 years expose systematic persecution of a whistleblower by 35+ Australian government agencies. Every document is blockchain-verified with SHA-256 hashing. Every claim is backed by evidence. Every agency is named. Not one person has been able to prove these claims wrong.`,
    whatsapp: `240+ BLOCKCHAIN-VERIFIED DOCUMENTS\n\n35 years of evidence\n35+ agencies exposed\nSHA-256 sealed & tamper-proof\n\nEvery claim backed. Every agency named.\n\n"I DARE YOU TO PROVE ME WRONG"\n\nNot one person has.\n\n${url}/evidence`,
    telegram: `EVIDENCE ARCHIVE\n\n240+ blockchain-verified documents\n35 years of evidence\n35+ agencies named\nSHA-256 sealed\n\nNot one person has been able to refute it.\n\n${url}/evidence`,
    reddit: `240+ blockchain-verified documents expose 35 years of systematic persecution by 35+ Australian govt agencies — every claim backed, every agency named, not one person can refute it`,
    clipboard: `240+ BLOCKCHAIN-VERIFIED DOCUMENTS\n\n35 years of evidence exposing systematic persecution by 35+ Australian government agencies. Every document is SHA-256 sealed and tamper-proof. Every claim is backed by evidence. Every agency is named.\n\n"I DARE YOU TO PROVE ME WRONG" — Not one person has.\n\nBrowse the archive: ${url}/evidence`,
    label: "Share Evidence Archive",
  },
  support: {
    twitter: `One share can change everything.\n\nA whistleblower survived 14 psych detentions, an assassination attempt & 35 yrs of govt persecution across 35+ agencies.\n\n240+ blockchain-sealed docs prove it all.\n\nBreak the silence.`,
    facebook: `One share can change everything. A whistleblower survived 14 psychiatric detentions across 3 states, an assassination attempt, and 35 years of persecution by 35+ Australian government agencies. 240+ blockchain-sealed documents prove every claim. Your silence is your choice. Your share could be the one that breaks the dam.`,
    whatsapp: `One share can change everything.\n\n14 psych detentions. Assassination attempt. 35 years. 35+ agencies. 240+ documents.\n\nAll proven. All blockchain-sealed.\n\nYour silence is a choice. Share this.\n\n${url}`,
    telegram: `BREAK THE SILENCE\n\n14 psychiatric detentions\nAssassination attempt\n35 years of persecution\n35+ agencies\n240+ blockchain-sealed documents\n\nOne share can change everything.\n\n${url}`,
    reddit: `One share can change everything — whistleblower survived 14 psych detentions, assassination attempt, 35 years persecution by 35+ Australian agencies, 240+ blockchain-sealed docs prove it`,
    clipboard: `ONE SHARE CAN CHANGE EVERYTHING\n\nA whistleblower survived 14 psychiatric detentions across 3 states, a confirmed assassination attempt, and 35 years of persecution by 35+ Australian government agencies.\n\n240+ blockchain-sealed documents prove every single claim.\n\nYour silence is your choice. Your share could be the one that breaks the dam.\n\n${url}`,
    label: "Help Break The Silence",
  },
  complicity: {
    twitter: `$11.5M of YOUR tax dollars spent destroying one innocent whistleblower.\n\n14 psych incarcerations. Assassination attempt. 35 years. 35+ agencies.\n\nIf you tolerate this, your children will be next.\n\nSilence is complicity.`,
    facebook: `$11.5 million of Australian taxpayer money — your wages, your Medicare levy, your income tax — spent systematically destroying one person whose only crime was telling the truth. 14 psychiatric incarcerations. A confirmed assassination attempt. 35+ agencies across 35 years. This evidence is blockchain-sealed, AI-verified, and permanent. If you tolerate this, your children will be next. Silence is complicity.`,
    whatsapp: `$11.5M of YOUR tax dollars:\n\n14 psych incarcerations\nAssassination attempt\n35+ agencies\n35 years\n\nIf this can happen to an author & academic, it WILL happen to you.\n\nSilence is complicity. Share this.\n\n${url}`,
    telegram: `YOUR TAX DOLLARS FUNDED THIS\n\n$11.5M persecuting ONE whistleblower\n14 psychiatric incarcerations\nAssassination attempt\n35+ agencies / 35 years\n\nSilence is complicity.\nIf you tolerate this, your children will be next.\n\n${url}`,
    reddit: `$11.5M of Australian taxpayer money spent destroying one whistleblower — if you tolerate this, your children will be next`,
    clipboard: `$11.5 MILLION OF YOUR TAX DOLLARS\n\nSpent destroying one innocent person whose only crime was telling the truth.\n\n14 psychiatric incarcerations. A confirmed assassination attempt. 35+ agencies. 35 years.\n\nThis evidence is blockchain-sealed, AI-verified, and permanent. No government, no lawyer, no agency can delete it.\n\nIf this can happen to an author, academic, and artist with an international professional profile — it WILL happen to you.\n\nIF YOU TOLERATE THIS, YOUR CHILDREN WILL BE NEXT.\n\nSilence is complicity. Act now: ${url}`,
    label: "Break Your Silence",
  },
  default: {
    twitter: `14 psych detentions across 3 states. No pulse. 35 yrs of persecution by 35+ Aust govt agencies. 240+ blockchain-sealed docs exposed.\n\nThe Attorney-General was told in 2021 & chose silence.\n\n"I DARE YOU TO PROVE ME WRONG"`,
    facebook: `They found him with no pulse. 14 psychiatric hospitalisations across 3 states. 35 years of systematic persecution by 35+ Australian government agencies. 240+ forensic documents, blockchain-sealed and tamper-proof. The Attorney-General was informed in 2021 and did nothing.`,
    whatsapp: `READ THIS:\n\n14 psych hospitalisations. No pulse. 35+ agencies. 35 years. 240+ blockchain docs.\n\nThe PM & Attorney-General were notified. They chose silence.\n\n${url}`,
    telegram: `MOST DOCUMENTED GOVT PERSECUTION IN AUSTRALIAN HISTORY\n\n14 forced psychiatric hospitalisations\n35+ agencies\n240+ blockchain-sealed documents\n\nRead it: ${url}`,
    reddit: `240+ blockchain-verified docs expose 35 years of systematic persecution by 35+ Australian govt agencies`,
    clipboard: `THEY FOUND HIM WITH NO PULSE.\n\n14 forced psychiatric hospitalisations across 3 states. 35 years. 35+ Australian government agencies. 240+ blockchain-sealed forensic documents.\n\n"I DARE YOU TO PROVE ME WRONG"\n\nRead the evidence: ${url}`,
    label: "Share The Truth",
  },
};

function getContextUrl(context: ShareContext): string {
  switch (context) {
    case "ai-analysis":
    case "cost-breakdown":
    case "assassination":
    case "complicity":
      return `${url}/taxpayer-cost-analysis`;
    case "evidence":
      return `${url}/evidence`;
    default:
      return url;
  }
}

function buildShareLinks(context: ShareContext = "default") {
  const msgs = contextMessages[context];
  const contextUrl = getContextUrl(context);
  const ctxEncodedUrl = encodeURIComponent(contextUrl);
  return [
    { name: "X", icon: <SiX className="h-4 w-4" />, href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(msgs.twitter)}&url=${ctxEncodedUrl}&via=bazdod` },
    { name: "Facebook", icon: <SiFacebook className="h-4 w-4" />, href: `https://www.facebook.com/sharer/sharer.php?u=${ctxEncodedUrl}&quote=${encodeURIComponent(msgs.facebook)}` },
    { name: "WhatsApp", icon: <SiWhatsapp className="h-4 w-4" />, href: `https://wa.me/?text=${encodeURIComponent(msgs.whatsapp)}` },
    { name: "Telegram", icon: <SiTelegram className="h-4 w-4" />, href: `https://t.me/share/url?url=${ctxEncodedUrl}&text=${encodeURIComponent(msgs.telegram)}` },
    { name: "LinkedIn", icon: <SiLinkedin className="h-4 w-4" />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${ctxEncodedUrl}` },
    { name: "Reddit", icon: <SiReddit className="h-4 w-4" />, href: `https://reddit.com/submit?url=${ctxEncodedUrl}&title=${encodeURIComponent(msgs.reddit)}` },
  ];
}

export function FloatingShareBar() {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contextMessages.default.clipboard);
      setCopied(true);
      toast({ title: "Message & Link Copied!", description: "Paste it anywhere. The truth depends on you." });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  const shareLinks = buildShareLinks("default");

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2" data-testid="floating-share-bar">
      {isOpen && (
        <div className="bg-gray-950 border border-green-400/30 shadow-2xl shadow-green-400/10 rounded-xl p-3 space-y-2 animate-in slide-in-from-bottom-2">
          <p className="text-xs font-bold text-green-400 uppercase tracking-wider text-center px-2">
            Share The Truth
          </p>
          <div className="grid grid-cols-3 gap-2">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${link.name}`}
                className="share-icon-pulse hover-elevate flex items-center justify-center h-9 w-9 rounded-md bg-gray-900 border border-green-400/30 text-green-400"
                data-testid={`floating-share-${link.name.toLowerCase()}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <button
            className="w-full hover-elevate flex items-center justify-center gap-2 h-8 rounded-md bg-gray-900 border border-green-400/30 text-green-400 text-xs font-medium"
            onClick={copyToClipboard}
            data-testid="floating-share-copy"
          >
            {copied ? <Check className="h-3 w-3" /> : <Link2 className="h-3 w-3" />}
            {copied ? "Copied!" : "Copy Message & Link"}
          </button>
        </div>
      )}
      <button
        className={`h-12 w-12 rounded-full shadow-2xl flex items-center justify-center transition-all ${isOpen ? "bg-gray-800 text-body-text" : "bg-green-500 text-gray-950 share-icon-pulse shadow-green-400/30"}`}
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-floating-share-toggle"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}
      </button>
    </div>
  );
}

interface InlineShareStripProps {
  message?: string;
  id?: string;
  context?: ShareContext;
}

export function InlineShareStrip({ message, id = "default", context = "default" }: InlineShareStripProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const msgs = contextMessages[context];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(msgs.clipboard);
      setCopied(true);
      toast({ title: "Message & Link Copied!", description: "Paste it everywhere. Break the silence." });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  const shareLinks = buildShareLinks(context);

  return (
    <div className="bg-gray-950 border border-green-400/30 rounded-xl p-4 md:p-6" data-testid={`inline-share-strip-${id}`}>
      <p className="text-sm md:text-base font-bold text-center text-green-400 mb-4 uppercase tracking-wider">
        {message || msgs.label}
      </p>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${link.name}`}
            className="share-icon-pulse hover-elevate flex items-center justify-center h-10 w-10 rounded-md bg-gray-900 border border-green-400/30 text-green-400"
            data-testid={`inline-share-${id}-${link.name.toLowerCase()}`}
          >
            {link.icon}
          </a>
        ))}
        <button
          className="share-icon-pulse hover-elevate flex items-center justify-center h-10 w-10 rounded-md bg-gray-900 border border-green-400/30 text-green-400"
          onClick={copyToClipboard}
          data-testid={`inline-share-${id}-copy`}
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
