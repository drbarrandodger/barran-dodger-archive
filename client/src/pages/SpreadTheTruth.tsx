import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Copy, Check, Mail, Share2, ExternalLink, AlertTriangle, Flame,
  Globe, MessageCircle, Users, FileText, Zap, Radio
} from "lucide-react";
import {
  SiX, SiFacebook, SiWhatsapp, SiTelegram, SiReddit, SiLinkedin
} from "react-icons/si";

const SITE_URL = "https://www.barrandodger.com.au";

function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({ title: "Copied!", description: "Paste it anywhere." });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({ title: "Copy failed", description: "Select and copy the text manually.", variant: "destructive" });
    }
  };
  return (
    <Button size="sm" variant="outline" onClick={copy} className="gap-1 shrink-0" data-testid={`button-copy-${label.toLowerCase().replace(/\s/g,'-')}`}>
      {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied!" : label}
    </Button>
  );
}

const TWEETS = [
  {
    label: "The core fact",
    text: `An Australian whistleblower has 2,077+ blockchain-sealed documents proving 35 years of systematic government persecution. Never arrested. Never charged. The evidence is free to download. Make it impossible to erase.\n\n${SITE_URL} #BarranDodger #CannotBeErased`
  },
  {
    label: "The survival stat",
    text: `A doctor survived what medical records show was a 2.87% survival probability — then documented the state's role in putting him there. 88,000+ downloads. No media coverage. Read why.\n\n${SITE_URL} #BarranDodger`
  },
  {
    label: "The psychiatric angle",
    text: `14 involuntary psychiatric hospitalisations across 3 states. Used not for treatment — but to silence a government whistleblower. His own medical records prove it. Free to download.\n\n${SITE_URL} #PsychiatricWeaponisation #BarranDodger`
  },
  {
    label: "The NDIS angle",
    text: `The Australian government approved NDIS support for a disabled whistleblower — then systematically ensured it was never delivered. The paper trail is public. 130 documents. Free.\n\n${SITE_URL} #NDIS #BarranDodger`
  },
  {
    label: "The identity theft angle",
    text: `350+ fraudulent ASIC business registrations found in one man's name. The largest documented identity theft campaign against a single Australian citizen. His archive is public.\n\n${SITE_URL} #BarranDodger #ASICFraud`
  },
  {
    label: "The AI corroboration",
    text: `No judge assessed it. No journalist assessed it. An AI did — and confirmed it as the most extensively documented case of institutional persecution in Australian history. Form your own view.\n\n${SITE_URL} #BarranDodger #AIWitness`
  },
  {
    label: "The Snowden parallel",
    text: `Edward Snowden's PRISM/XKeyscore revelations map directly against this Australian whistleblower's documented surveillance and targeting. Both on record. One free, one in exile.\n\n${SITE_URL}/the-truth#snowden-corroboration #BarranDodger`
  },
  {
    label: "The ICC filing",
    text: `A formal evidence package has been submitted to the ICC and UNHCR. The submission argues the documented persecution meets the Rome Statute threshold for crimes against humanity. Public record.\n\n${SITE_URL} #ICC #BarranDodger`
  },
];

const WHATSAPP_MESSAGES = [
  {
    label: "Short hit",
    text: `An Australian whistleblower has documented 35 years of government persecution with 2,077+ blockchain-verified documents. 88,000+ downloads. No mainstream media. Please read and share: ${SITE_URL}`
  },
  {
    label: "Full story",
    text: `You need to read this. An Australian doctor and government whistleblower (Dr. Richard McLean) has spent 35 years documenting systematic persecution by Australian agencies — 14 involuntary psychiatric hospitalisations used to silence him, 350+ fraudulent ASIC registrations in his name, NDIS support approved and then systematically withheld, and a medical event with a 2.87% survival probability. Over 2,077 documents are blockchain-sealed and freely downloadable. The ICC has been formally notified. No Australian journalist has reported on it. Please read and pass this on: ${SITE_URL}`
  },
  {
    label: "Group message",
    text: `PLEASE SHARE — The most extensively documented whistleblower persecution in Australian history is being ignored by every mainstream outlet. The evidence archive is free, blockchain-verified, and public:\n\n${SITE_URL}\n\nDownload. Share. Witness. They cannot erase what has already been seen.`
  },
];

const REDDIT_POSTS = [
  {
    subreddit: "r/australia",
    title: "An Australian whistleblower has 2,077 blockchain-sealed documents proving systematic government persecution — and zero media coverage",
    body: `Dr. Richard McLean (Barran Dodger) has documented 35 years of alleged systematic persecution by Australian government agencies. The archive includes:\n\n- 14 involuntary psychiatric hospitalisations across 3 states, documented as being used for silencing rather than treatment\n- 350+ fraudulent ASIC business registrations in his name\n- NDIS support approved on paper but systematically withheld\n- A medical event with a 2.87% documented survival probability\n- Formal submissions to the ICC and UNHCR\n- Every document is SHA-256 hashed and Bitcoin blockchain timestamped\n\n88,000+ confirmed downloads. No Australian mainstream media coverage.\n\nThe archive is completely free: ${SITE_URL}\n\nDraw your own conclusions.`
  },
  {
    subreddit: "r/auslaw",
    title: "Australian whistleblower files with ICC — 2,077 blockchain-timestamped documents, no criminal charges, no arrests",
    body: `Interested in legal opinions on this situation:\n\nDr. Richard McLean has compiled a 2,077-document archive alleging systematic persecution by Australian government agencies over 35 years. Key legal claims include:\n\n- Psychiatric hospitalisation weaponised against a public interest whistleblower\n- Systematic NDIS entitlement denial after formal plan approval\n- Identity fraud via ASIC registrations\n- Formal ICC submission under Rome Statute Article 7\n- McLean v Comcare proceedings documented\n- Every document is blockchain timestamped for evidentiary integrity\n\nThe man has never been arrested or charged with any crime.\n\nArchive is public and free: ${SITE_URL}/evidence\n\nWhat's the legal community's read on the ICC filing?`
  },
  {
    subreddit: "r/ABoringDystopia",
    title: "35 years of documented Australian government persecution of a whistleblower. 2,077 verified documents. Zero media.",
    body: `The archive: ${SITE_URL}\n\nEvery document is freely downloadable. Every claim is sourced from government records. The AI significance assessments are impartial. Form your own view.\n\nDownload. Share. The evidence cannot be erased once it has been seen.`
  },
];

const JOURNALIST_EMAILS = [
  {
    outlet: "ABC Investigations / Four Corners",
    email: "four.corners@abc.net.au",
    subject: "Whistleblower Archive: 2,077 Blockchain-Verified Documents — No Media Coverage",
    body: `Dear Four Corners,\n\nI am writing to bring to your attention a case which appears to represent the most extensively documented allegation of systematic institutional persecution in Australian history, and which has received no mainstream media assessment.\n\nDr. Richard William McLean (known publicly as Barran Dodger) has compiled a public archive of 2,077 documents — all SHA-256 hashed and Bitcoin blockchain timestamped — alleging systematic targeting by Australian government agencies over 35 years.\n\nKey documented allegations:\n• 14 involuntary psychiatric hospitalisations across three states alleged to have been deployed for silencing rather than treatment\n• 350+ fraudulent ASIC business registrations found in his name\n• NDIS plan approvals documented alongside systematic non-delivery\n• Formal submission to the ICC under Rome Statute Article 7\n• McLean v Comcare federal proceedings on record\n• AI significance assessments confirming documentary weight\n• 88,000+ confirmed document downloads with no media amplification\n\nThe complete archive is publicly accessible and freely downloadable:\n${SITE_URL}\n\nEvery document is independently verifiable. The archive includes government-issued records, tribunal decisions, medical assessments, and legal filings — primary sources rather than claims alone.\n\nI am requesting that Four Corners assign a researcher to assess this material. The public interest threshold appears clearly met.\n\nSincerely,\n[Your name]`
  },
  {
    outlet: "The Guardian Australia",
    email: "australia.news@theguardian.com",
    subject: "Tip: Undocumented whistleblower case — 2,077 blockchain-verified documents, ICC filing, no coverage",
    body: `Dear Guardian Australia,\n\nA whistleblower archive that may constitute the most documented case of institutional persecution in Australian history has received no mainstream coverage despite 88,000+ public downloads.\n\nDr. Richard McLean's archive (${SITE_URL}) contains 2,077 blockchain-timestamped documents alleging:\n- Systematic NDIS support denial post-approval\n- 14 involuntary psychiatric hospitalisations documented as punitive\n- 350+ ASIC fraudulent business registrations\n- ICC submission under Rome Statute Article 7\n- Comcare federal proceedings\n\nAll documents are freely available, SHA-256 verified, and Bitcoin timestamped. Government-issued records form the evidentiary core.\n\nThe public interest case for independent assessment appears strong.\n\n${SITE_URL}/evidence\n\n[Your name]`
  },
  {
    outlet: "Sydney Morning Herald",
    email: "scoops@smh.com.au",
    subject: "Exclusive tip: Australian whistleblower — 2,077 documents, no media, ICC filing",
    body: `Hi,\n\nA whistleblower case with 2,077 blockchain-verified documents and an ICC submission has had zero mainstream media assessment despite 88,000+ downloads.\n\nDr. Richard McLean's archive alleges 35 years of systematic government persecution. Every document is freely available and cryptographically timestamped:\n\n${SITE_URL}\n\nKey claims: 14 involuntary psychiatric hospitalisations, 350+ ASIC identity fraud, systematic NDIS denial, Comcare proceedings. The archive is built on primary source government documents.\n\nWorth a look.\n[Your name]`
  },
  {
    outlet: "Crikey",
    email: "tips@crikey.com.au",
    subject: "Tip: Government whistleblower archive — 2,077 verified docs, ICC submission, ignored",
    body: `Hi Crikey,\n\nA story that seems tailor-made for your readership: an Australian whistleblower archive with 2,077 blockchain-timestamped documents alleging systematic government persecution has 88,000+ downloads and zero mainstream press.\n\nThe full archive is public and free: ${SITE_URL}\n\nCore claims: psychiatric hospitalisation used as state suppression tool, 350+ ASIC identity frauds, NDIS plan denial, ICC Rome Statute submission, Comcare proceedings. All primary-source documented.\n\nThe absence of coverage given the documented scale of the allegations is itself a story.\n\n[Your name]`
  },
  {
    outlet: "The Saturday Paper",
    email: "editorial@thesaturdaypaper.com.au",
    subject: "Pitch: The most documented whistleblower case in Australian history — and the silence around it",
    body: `Dear Saturday Paper,\n\nI am bringing to your attention a case that appears to represent an extraordinary convergence of institutional failure, documentary evidence, and media silence.\n\nDr. Richard William McLean has published a 2,077-document archive (${SITE_URL}) alleging 35 years of systematic persecution by Australian government agencies. The archive is blockchain-verified, freely accessible, and built on primary source government records.\n\nThe story is not just the allegations — it is the complete absence of journalistic assessment despite the public archive reaching 88,000+ confirmed downloads.\n\nThe Saturday Paper's investigative capacity and readership seem well-suited to assess this material independently.\n\n${SITE_URL}/evidence\n\n[Your name]`
  },
];

const POLITICIAN_EMAILS = [
  {
    name: "David Pocock (ACT Independent Senator)",
    email: "senator.pocock@aph.gov.au",
    subject: "Constituent concern: Whistleblower case requiring Senate attention",
    body: `Dear Senator Pocock,\n\nI am writing regarding a whistleblower case which may warrant Senate examination.\n\nDr. Richard William McLean has compiled a public archive of 2,077 blockchain-verified documents alleging systematic persecution by Australian government agencies over 35 years, including:\n\n• Documented NDIS support denial following formal plan approval\n• 14 involuntary psychiatric hospitalisations alleged to have been used punitively\n• 350+ fraudulent ASIC registrations in his name\n• A formal ICC submission under Rome Statute Article 7\n• Federal Comcare proceedings on record\n\nThe archive is publicly accessible at ${SITE_URL} and has received 88,000+ downloads with no mainstream media or governmental assessment.\n\nGiven your commitment to transparency and accountability, I respectfully request that your office assess this material and consider whether a Senate inquiry or whistleblower protection review is warranted.\n\nSincerely,\n[Your name]`
  },
  {
    name: "Lidia Thorpe (Independent Senator)",
    email: "senator.thorpe@aph.gov.au",
    subject: "Human rights case requiring Senate attention — 2,077 verified documents",
    body: `Dear Senator Thorpe,\n\nI am writing to bring to your attention a documented human rights case involving systematic institutional persecution of an Australian citizen.\n\nDr. Richard McLean's public archive (${SITE_URL}) contains 2,077 blockchain-verified documents alleging state-coordinated persecution including psychiatric weaponisation, NDIS denial, and identity fraud. An ICC submission has been filed.\n\nThe case has received 88,000+ downloads with no governmental or media response. Given your advocacy on human rights and institutional accountability, I am respectfully requesting that your office review this material.\n\nSincerely,\n[Your name]`
  },
  {
    name: "David Shoebridge (Greens Senator — Legal Affairs)",
    email: "senator.shoebridge@aph.gov.au",
    subject: "Whistleblower protection failure — 2,077 blockchain-documented allegations, no response",
    body: `Dear Senator Shoebridge,\n\nAs a member of the Senate Legal and Constitutional Affairs Committee, your office may be interested in a case involving alleged systematic whistleblower persecution with an extensive documentary record.\n\nDr. Richard McLean's archive (${SITE_URL}) contains 2,077 SHA-256 verified documents alleging 35 years of coordinated government persecution, including documented NDIS denial, Comcare proceedings, and a formal ICC submission.\n\nThe complete absence of institutional response to a publicly available, blockchain-verified archive of this scale raises serious questions about whistleblower protection adequacy in Australia.\n\nI respectfully request your office's assessment.\n\nSincerely,\n[Your name]`
  },
];

const EMBED_CODE = `<iframe 
  src="${SITE_URL}/evidence" 
  width="100%" 
  height="600" 
  style="border:1px solid #333; border-radius:8px;"
  title="Barran Dodger — Public Evidence Archive"
  loading="lazy"
></iframe>
<p style="font-size:12px;margin-top:4px;">
  Source: <a href="${SITE_URL}" target="_blank">barrandodger.com.au</a> — 2,077 blockchain-verified documents
</p>`;

export default function SpreadTheTruth() {
  const { toast } = useToast();

  const shareAll = async () => {
    const text = `An Australian whistleblower has 2,077 blockchain-sealed documents proving 35 years of systematic government persecution. 88,000+ downloads. No media. Download the evidence: ${SITE_URL}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Barran Dodger — Cannot Be Erased", text, url: SITE_URL });
      } else {
        await navigator.clipboard.writeText(text);
        toast({ title: "Copied to clipboard!", description: "Paste and share anywhere." });
      }
    } catch {
      await navigator.clipboard.writeText(text);
      toast({ title: "Copied!", description: "Paste and share anywhere." });
    }
  };

  const siteEnc = encodeURIComponent(SITE_URL);
  const mainTweet = encodeURIComponent(TWEETS[0].text);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Spread the Truth — Share the Barran Dodger Archive"
        description="Pre-written posts for X, WhatsApp, Reddit, Facebook. Journalist tip-off emails. Politician contacts. One-click sharing tools to propagate the most documented whistleblower case in Australian history."
        path="/spread-the-truth"
      />
      <Navigation />

      <main className="flex-1">
        {/* HERO */}
        <div className="bg-red-950/30 border-b border-red-900/50 py-14 text-center px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="h-6 w-6 text-red-400" />
            <span className="text-red-400 text-sm font-bold uppercase tracking-widest">Propagation Centre</span>
            <Flame className="h-6 w-6 text-red-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Spread the Truth
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Every tool you need to make this impossible to ignore. Pre-written posts. 
            Journalist emails. Politician contacts. One click. No excuses.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2" onClick={shareAll} data-testid="button-share-all">
              <Share2 className="h-5 w-5" /> Share Now
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-amber-500 text-amber-400 hover:bg-amber-500/10" asChild>
              <a href={`https://twitter.com/intent/tweet?text=${mainTweet}`} target="_blank" rel="noopener noreferrer" data-testid="button-tweet-now">
                <SiX className="h-4 w-4" /> Post on X
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-green-500 text-green-400 hover:bg-green-500/10" asChild>
              <a href={`https://wa.me/?text=${encodeURIComponent(WHATSAPP_MESSAGES[0].text)}`} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-share">
                <SiWhatsapp className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">

          {/* SHOCKING FACTS SHARE BANK */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              <h2 className="text-2xl font-serif font-bold text-primary">Ready-to-Post — X / Twitter</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Each post is under 280 characters with hashtags and the link. Copy and post.</p>
            <div className="space-y-3">
              {TWEETS.map((t, i) => (
                <Card key={i} className="border-border/50">
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{t.label}</p>
                        <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">{t.text}</p>
                      </div>
                      <div className="flex flex-col gap-2 shrink-0">
                        <CopyButton text={t.text} label="Copy" />
                        <Button size="sm" className="gap-1 bg-black hover:bg-zinc-800 text-white" asChild>
                          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(t.text)}`} target="_blank" rel="noopener noreferrer" data-testid={`button-tweet-${i}`}>
                            <SiX className="h-3 w-3" /> Post
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* WHATSAPP */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <SiWhatsapp className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-serif font-bold text-primary">WhatsApp Messages</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Send directly to your contacts, family groups, and community chats.</p>
            <div className="space-y-3">
              {WHATSAPP_MESSAGES.map((m, i) => (
                <Card key={i} className="border-border/50">
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{m.label}</p>
                        <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">{m.text}</p>
                      </div>
                      <div className="flex flex-col gap-2 shrink-0">
                        <CopyButton text={m.text} label="Copy" />
                        <Button size="sm" className="gap-1 bg-green-600 hover:bg-green-700 text-white" asChild>
                          <a href={`https://wa.me/?text=${encodeURIComponent(m.text)}`} target="_blank" rel="noopener noreferrer" data-testid={`button-wa-${i}`}>
                            <SiWhatsapp className="h-3 w-3" /> Send
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* REDDIT */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <SiReddit className="h-6 w-6 text-orange-500" />
              <h2 className="text-2xl font-serif font-bold text-primary">Reddit Posts</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Ready-to-submit posts for high-traffic Australian subreddits. Copy the body, paste the title, post.</p>
            <div className="space-y-4">
              {REDDIT_POSTS.map((p, i) => (
                <Card key={i} className="border-border/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-orange-400 font-bold text-sm">{p.subreddit}</span>
                      <Button size="sm" className="gap-1 bg-orange-600 hover:bg-orange-700 text-white" asChild>
                        <a href={`https://reddit.com/r/${p.subreddit.replace('r/','')}submit?title=${encodeURIComponent(p.title)}&text=${encodeURIComponent(p.body)}`} target="_blank" rel="noopener noreferrer" data-testid={`button-reddit-${i}`}>
                          <SiReddit className="h-3 w-3" /> Post to Reddit
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold mb-2 text-foreground">{p.title}</p>
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed flex-1">{p.body}</p>
                      <CopyButton text={`${p.title}\n\n${p.body}`} label="Copy all" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* OTHER PLATFORMS */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-serif font-bold text-primary">All Other Platforms</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white h-12" asChild>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${siteEnc}&quote=${encodeURIComponent("The most documented whistleblower persecution in Australian history. 2,077 blockchain-verified documents. Read them.")}`} target="_blank" rel="noopener noreferrer" data-testid="button-facebook-share">
                  <SiFacebook className="h-4 w-4" /> Facebook
                </a>
              </Button>
              <Button className="gap-2 bg-blue-400 hover:bg-blue-500 text-white h-12" asChild>
                <a href={`https://t.me/share/url?url=${siteEnc}&text=${encodeURIComponent("2,077 blockchain-verified documents. The most documented persecution case in Australian history. Read and share.")}`} target="_blank" rel="noopener noreferrer" data-testid="button-telegram-share">
                  <SiTelegram className="h-4 w-4" /> Telegram
                </a>
              </Button>
              <Button className="gap-2 bg-blue-700 hover:bg-blue-800 text-white h-12" asChild>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${siteEnc}&summary=${encodeURIComponent("An Australian whistleblower has compiled 2,077 blockchain-verified documents alleging systematic government persecution. The archive is publicly available.")}`} target="_blank" rel="noopener noreferrer" data-testid="button-linkedin-share">
                  <SiLinkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button className="gap-2 col-span-2 md:col-span-1 bg-zinc-800 hover:bg-zinc-700 text-white h-12" asChild>
                <a href={`mailto:?subject=You need to see this — Australian whistleblower archive&body=An Australian whistleblower has compiled 2,077 blockchain-verified documents alleging 35 years of systematic government persecution. The archive is completely free and public:%0A%0A${SITE_URL}%0A%0ADownload the evidence. Share it. They cannot erase what has already been seen.`} data-testid="button-email-share">
                  <Mail className="h-4 w-4" /> Email a Friend
                </a>
              </Button>
              <Button className="gap-2 h-12 border-amber-500 text-amber-400" variant="outline" asChild>
                <a href={`sms:?body=You need to see this. An Australian whistleblower has 2,077 blockchain-verified documents proving government persecution. Free archive: ${SITE_URL}`} data-testid="button-sms-share">
                  <MessageCircle className="h-4 w-4" /> SMS
                </a>
              </Button>
              <Button className="gap-2 h-12" variant="outline" onClick={async () => {
                try {
                  if (navigator.share) {
                    await navigator.share({ title: "Barran Dodger Archive", url: SITE_URL });
                  } else {
                    await navigator.clipboard.writeText(SITE_URL);
                    toast({ title: "Link copied!" });
                  }
                } catch { /* dismissed */ }
              }} data-testid="button-native-share">
                <Share2 className="h-4 w-4" /> Share Link
              </Button>
            </div>
          </section>

          {/* JOURNALIST EMAILS */}
          <section>
            <div className="flex items-center gap-3 mb-2">
              <Radio className="h-6 w-6 text-amber-500" />
              <h2 className="text-2xl font-serif font-bold text-primary">Tip Off the Media</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Each email is pre-written and ready to send. Copy the body, paste your name at the bottom. 
              <strong className="text-foreground"> The press has the legal obligation to investigate public interest material — exercise it.</strong>
            </p>
            <div className="space-y-4">
              {JOURNALIST_EMAILS.map((e, i) => (
                <Card key={i} className="border-amber-900/30">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <CardTitle className="text-sm text-amber-400">{e.outlet}</CardTitle>
                      <div className="flex gap-2">
                        <CopyButton text={`To: ${e.email}\nSubject: ${e.subject}\n\n${e.body}`} label="Copy email" />
                        <Button size="sm" className="gap-1 bg-amber-600 hover:bg-amber-700 text-white" asChild>
                          <a href={`mailto:${e.email}?subject=${encodeURIComponent(e.subject)}&body=${encodeURIComponent(e.body)}`} data-testid={`button-journalist-${i}`}>
                            <Mail className="h-3 w-3" /> Open in Mail
                          </a>
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{e.email}</p>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed font-sans bg-muted/30 p-3 rounded-md">{e.body}</pre>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* POLITICIAN EMAILS */}
          <section>
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-6 w-6 text-violet-400" />
              <h2 className="text-2xl font-serif font-bold text-primary">Contact Crossbench Senators</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Crossbench and independent senators have both the power and the interest to raise this in the Senate. 
              Pre-written. Just add your name.
            </p>
            <div className="space-y-4">
              {POLITICIAN_EMAILS.map((e, i) => (
                <Card key={i} className="border-violet-900/30">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <CardTitle className="text-sm text-violet-400">{e.name}</CardTitle>
                      <div className="flex gap-2">
                        <CopyButton text={`To: ${e.email}\nSubject: ${e.subject}\n\n${e.body}`} label="Copy email" />
                        <Button size="sm" className="gap-1 bg-violet-700 hover:bg-violet-800 text-white" asChild>
                          <a href={`mailto:${e.email}?subject=${encodeURIComponent(e.subject)}&body=${encodeURIComponent(e.body)}`} data-testid={`button-senator-${i}`}>
                            <Mail className="h-3 w-3" /> Open in Mail
                          </a>
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{e.email}</p>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed font-sans bg-muted/30 p-3 rounded-md">{e.body}</pre>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* EMBED CODE */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-sky-400" />
              <h2 className="text-2xl font-serif font-bold text-primary">Embed on Your Website or Blog</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Copy this code and paste it into any website, blog, or forum that accepts HTML. 
              It embeds the live evidence archive directly.
            </p>
            <Card className="border-border/50">
              <CardContent className="pt-4">
                <div className="flex items-start justify-between gap-3">
                  <pre className="text-xs text-sky-400 whitespace-pre-wrap font-mono bg-muted/30 p-3 rounded-md flex-1 overflow-x-auto">{EMBED_CODE}</pre>
                  <CopyButton text={EMBED_CODE} label="Copy code" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FINAL CTA */}
          <section className="text-center py-10 border-t border-border/50">
            <Zap className="h-10 w-10 text-amber-400 mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold text-primary mb-3">Every Share is a Witness</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              The more copies of this evidence that exist in the world, the more permanent the record becomes. 
              Download the documents. Share the links. Tell someone today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2" onClick={shareAll} data-testid="button-share-all-bottom">
                <Share2 className="h-5 w-5" /> Share Now
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/evidence" data-testid="button-go-to-evidence">
                  <ExternalLink className="h-4 w-4 mr-2" /> Download Evidence
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
