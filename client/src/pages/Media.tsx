import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { CrossLink, DocumentPopup, KEY_DOCUMENTS } from "@/components/CrossLink";
import { DownloadBadge, trackDownload } from "@/components/DownloadCounter";
import { CommentSection } from "@/components/CommentSection";
import { RelatedContent } from "@/components/RelatedContent";
import { 
  Newspaper, Mail, Download, ExternalLink, FileText, 
  Camera, Video, Mic, Globe, Clock, Share2, Play, ChevronRight
} from "lucide-react";
import { SiX } from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SocialShare } from "@/components/SocialShare";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Media() {
  const pressReleases = [
    {
      date: "20 September 2025",
      title: "Systematic Persecution of Australian Whistleblower — Imminent Risk to Life",
      description: "Comprehensive media pack documenting 35-year persecution, $32.9M damages, Rome Statute violations. Key case documents available.",
      url: "/attached_assets/📢_Press_Release_–_Systematic_Persecution_of_Australian_Whistl_1769156961382.pdf"
    },
    {
      date: "13 November 2025",
      title: "The Mirror Has Opened — Post-Singularity Gospel Revealed",
      description: "Global distribution of Scrolls XV-XIX to government agencies, UN bodies, and international media",
      url: "/attached_assets/📢_PRESS_RELEASE_For_Immediate_Global_Distribution_—_13_Novemb_1769156961382.pdf"
    },
    {
      date: "14 November 2025",
      title: "NDIS Official Caught in Welfare Blackmail Plot",
      description: "Documentation of coercive entrapment via welfare conditioning by Sukhi Tear",
      url: "/attached_assets/PRESS_RELEASE_\"NDIS_Official_Caught_in_Welfare_Blackmail_Plot__1769139898029.pdf"
    }
  ];

  const mediaContacts = [
    { type: "Email", value: "drbarrandodger@proton.me", icon: <Mail className="h-5 w-5" /> },
    { type: "Twitter/X", value: "@bazdod", icon: <SiX className="h-5 w-5" />, link: "https://x.com/bazdod" },
  ];

  const mediaResources = [
    { title: "High-Resolution Photos", description: "Official photos for publication", icon: <Camera className="h-6 w-6" /> },
    { title: "Video Interviews", description: "Available upon request", icon: <Video className="h-6 w-6" /> },
    { title: "Audio Statements", description: "Pre-recorded statements", icon: <Mic className="h-6 w-6" /> },
    { title: "Evidence Archive", description: "2,000+ blockchain-verified documents", icon: <FileText className="h-6 w-6" />, link: "/evidence" },
  ];

  return (
    <>
      <SEO 
        title="Media & Press — For Journalists Ready to Tell This Story"
        description="Press releases, media resources, and contact information for journalists investigating the most documented whistleblower persecution case in Australian history."
        keywords="media press whistleblower Australia, journalist resources corruption, press release government persecution, media contact Barran Dodger"
        path="/media"
        articleAuthor="Dr. Richard William McLean"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Systematic Persecution of Australian Whistleblower — Imminent Risk to Life",
            "description": "Comprehensive media pack documenting 35-year persecution, $32.9M damages, Rome Statute violations.",
            "datePublished": "2025-09-20",
            "author": { "@type": "Person", "name": "Dr. Richard William McLean", "alternateName": "Barran Dodger" },
            "publisher": { "@type": "Organization", "name": "Barran Dodger Legal & Ethical Trust Fund", "url": "https://www.barrandodger.com" },
            "mainEntityOfPage": "https://www.barrandodger.com/media"
          },
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "The Mirror Has Opened — Post-Singularity Gospel Revealed",
            "description": "Global distribution of Scrolls XV-XIX to government agencies, UN bodies, and international media.",
            "datePublished": "2025-11-13",
            "author": { "@type": "Person", "name": "Dr. Richard William McLean", "alternateName": "Barran Dodger" },
            "publisher": { "@type": "Organization", "name": "Barran Dodger Legal & Ethical Trust Fund", "url": "https://www.barrandodger.com" },
            "mainEntityOfPage": "https://www.barrandodger.com/media"
          },
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "NDIS Official Caught in Welfare Blackmail Plot",
            "description": "Documentation of coercive entrapment via welfare conditioning by Sukhi Tear.",
            "datePublished": "2025-11-14",
            "author": { "@type": "Person", "name": "Dr. Richard William McLean", "alternateName": "Barran Dodger" },
            "publisher": { "@type": "Organization", "name": "Barran Dodger Legal & Ethical Trust Fund", "url": "https://www.barrandodger.com" },
            "mainEntityOfPage": "https://www.barrandodger.com/media"
          }
        ]}
      />
      <Navigation />
      
      <main className="min-h-screen bg-background pt-44 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-[hsl(38,92%,50%)]/50 text-[hsl(38,92%,50%)]">
                Press & Media
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                Media Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Press releases, media contacts, and resources for journalists and researchers investigating the <DocumentPopup {...KEY_DOCUMENTS.autobiography}>autobiography</DocumentPopup> and <CrossLink to="/timeline">systematic persecution</CrossLink>. Review the <CrossLink to="/evidence">evidence archive</CrossLink> or read the <CrossLink to="/manifesto">complete manifesto</CrossLink>.
              </p>
            </div>

            {/* ── VIDEO ESSAYS ── */}
            <div className="max-w-6xl mx-auto mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-3xl font-bold text-primary flex items-center gap-3">
                  <Play className="h-7 w-7 text-[hsl(38,92%,50%)]" />
                  Video Essays — Independent Commentary
                </h2>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/video-commentary">
                    View all <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-muted-foreground mb-10 max-w-2xl">
                Six evidence-based essays responding to viral videos that independently describe — with striking precision — the documented reality of Dr. McLean's 35-year case. Every claim below is grounded in the 2,077-document primary source archive.
              </p>

              {[
                {
                  videoId: "fyInNDy0bJU",
                  url: "https://www.youtube.com/watch?v=fyInNDy0bJU",
                  videoTitle: "I'M SICK… WHAT THEY DID TO YOU IS DISGUSTING 😡 THEY TARGETED YOU ON PURPOSE",
                  title: "They Called It Treatment. The Documents Call It Something Else.",
                  excerpt: [
                    `"The most effective way to destroy a person is to convince them that what happened to them never really happened." This is the opening line of a video circulating with millions of views. By the time it ends, it has described — with forensic precision — fourteen involuntary psychiatric hospitalisations without criminal charge, 350+ fraudulent ASIC registrations, NDIS support formally approved and then withheld, and a medical event with a 2.87% survival probability.`,
                    `The difference between Dr. McLean and every other person who has experienced institutional gaslighting at scale is this: he kept the receipts. And the receipts are government-issued. The video's language for what happened is clear: "They were trying to locate your breaking point, the moment you'd finally hand over your inner authority and just go along." The documents show they never found it.`,
                    `Fourteen psychiatric detentions. Each without criminal charge. Each in temporal proximity to formal disclosure activity. Inconsistent diagnoses between detentions. Treating physicians who disagreed. The one consistent element across all fourteen: proximity to moments when his testimony posed the greatest institutional risk. Psychiatric detention without criminal process, applied repeatedly to a person who has never been charged with any crime, is not medicine. It is suppression wearing medicine's clothes.`,
                    `"What looked like chaos starts looking coordinated. What felt personal starts looking structural." The ASIC registrations — 350 of them, in his name, without his consent — are in the public registry. No investigation announced. No charges laid. The scale of this fraud is not consistent with opportunistic criminal activity. It is consistent with a coordinated campaign to destroy a person's legal and financial identity so comprehensively that no institution would engage with him.`,
                  ],
                },
                {
                  videoId: "jMH2Dngbw8I",
                  url: "https://youtu.be/jMH2Dngbw8I?si=Ajgy0ZXFOClZrwf_",
                  videoTitle: "GRAB YOUR SUIT 🕴️ YOU'RE MAKING HEADLINES 📺 CASE WON — THEY'RE FACING JUSTICE ⚖️",
                  title: "They Aimed to Silence You. You Built an Archive Instead.",
                  excerpt: [
                    `"They aimed to wear you weary in bureaucracy designed to crush the vocal and shield the sleek." A declaration of arrival — a coronation speech for someone who survived long enough to watch the machinery that tried to destroy them turn its gears on empty air. He didn't shatter. He filed.`,
                    `2,077 documents. SHA-256 hashed. Bitcoin blockchain timestamped. Permanently beyond the reach of the agencies that produced them. The text messages from an NDIS provider who corroborated the assassination attempt, then claimed a national security NDA, then retracted — that progression is in the record. The PM&C reversing their sworn FOI declaration that no documents existed — that reversal is in the public record. Every one of these documents was produced by the state.`,
                    `"Every humiliation they inflicted — exhibit." A submission has been lodged with the ICC under Article 7 of the Rome Statute. A parallel submission with the UNHCR. The evidence package is built from the same primary source documents the Australian state produced. The ICC's Office of the Prosecutor has a mandate to assess submissions that meet the definitional threshold. This submission meets it.`,
                    `The estimated cost to Australian taxpayers of the documented multi-agency campaign exceeds $11.5 million. The cost of the archive was borne by one person, in conditions of destitution, during a medical event from which he had a 2.87% chance of surviving. The asymmetry is notable. So is its outcome. "While they assumed you'd vanish, you etched permanence."`,
                  ],
                },
                {
                  videoId: "bxF3fagXeVU",
                  url: "https://www.youtube.com/watch?v=bxF3fagXeVU",
                  videoTitle: "SOMEONE GOT PROOF YOU WEREN'T CRAZY… NOW JUSTICE IS COMING FOR YOU ⚖️🔍🔥",
                  title: "History Has a Strange Habit of Apologising Very Late. But When It Does, It Brings Receipts.",
                  excerpt: [
                    `"History has a strange habit of apologizing very late. But when it does, it brings receipts." In the context of the Barran Dodger case, this is not a metaphor. It is a literal description of what has already happened. The receipts exist. There are 2,077 of them. They are SHA-256 hashed, Bitcoin blockchain timestamped, freely downloadable, and permanently beyond the reach of the institutions that produced them.`,
                    `Dr. McLean was not dismissed by amateurs. He was dismissed by professionals — institutions with statutory authority, legal mandates, and formal obligations to assess what he was presenting them with. And not one of them argued with the evidence. The Commonwealth Ombudsman. The AHRC. OAIC. AFP. AHPRA. Legal Aid. Every single one filed him under problematic and moved on. Not after assessment. Before it.`,
                    `"The most dangerous thing for your opposition is not your voice. It's documentation." For 35 years, Dr. McLean's voice was interrupted, ignored, mocked, and drowned out. The documentation is different. The ASIC registrations do not become credible or incredible based on assessments of the person who compiled them. The blockchain timestamps exist regardless of what any institution concludes about Dr. McLean's emotional state.`,
                    `"The story has changed hands." It is no longer Dr. McLean who must explain why he filed fourteen times with the Commonwealth Ombudsman and received no assessment. It is the Commonwealth Ombudsman that must explain it. The documentation has moved the burden. Permanently. Without asking permission. "Turns out you weren't unstable. You were early."`,
                  ],
                },
                {
                  videoId: "gl6oyBnH7ZM",
                  url: "https://www.youtube.com/watch?v=gl6oyBnH7ZM",
                  videoTitle: "Chosen Ones, AFTER MONTHS WATCHING… THE FEDS WANT A PRIVATE MEETING 👁️🔥",
                  title: "They've Been Watching for Months. Now They Want a Private Meeting. You Already Know Why.",
                  excerpt: [
                    `"The eyes that watch you the longest rarely blink." There are people outside telling him to give up. That detail matters more than anything in this video. Because the entire architecture of what it describes — the watching, the silence, the recognition that something cannot be explained away — presupposes that the person being watched stayed. The archive is what happens when someone doesn't give up.`,
                    `Australia is a full Five Eyes member. Snowden's disclosures revealed PRISM, XKeyscore, and the surveillance architecture that makes the scenario this video describes not hypothetical but operational. A formally registered whistleblower who has filed with the Federal Court, NDIA, the PM's Department, the ICC, and the UNHCR — and who has published a 2,077-document blockchain-verified archive downloaded by 88,000 people — would trigger exactly the anomaly-flag this video describes.`,
                    `The 350+ ASIC registrations are not one incident. They are a sustained, multi-entity, multi-year campaign. Dr. McLean's disclosures touch simultaneously on NDIS provider fraud, ASIC registry fraud, psychiatric system weaponisation, AFP non-engagement with formal disclosures, intelligence agency coordination with welfare agencies, and multi-jurisdiction psychiatric detention without criminal process. These domains don't normally converge. Their convergence around one documented case is the rarest data point.`,
                    `The people outside telling him to give up are not wrong about the difficulty. They are wrong about the conclusion. A person who is wrong stops. Dr. McLean has not stopped. "Persistence without apparent result is not a sign of delusion. It is the data point that intelligent systems find most difficult to model." The eyes that watch the longest rarely blink. And they have been watching for a reason.`,
                  ],
                },
                {
                  videoId: "FYaV76FbvQg",
                  url: "https://www.youtube.com/watch?v=FYaV76FbvQg",
                  videoTitle: "CHOSEN ONES, THEY SET A PERFECT TRAP—YOU SAW THROUGH IT & NOW THEY'RE MAD 😡🔥",
                  title: "They Set a Perfect Trap. The Archive Was the Blade That Cut It Open.",
                  excerpt: [
                    `"They were sure they had you. No hesitation, no doubt. In their minds, the trap was perfect." In Dr. McLean's documented case, the trap was 35 years in construction: fourteen involuntary psychiatric hospitalisations without criminal charge, 350+ ASIC-registered frauds uninvestigated by ASIC itself, a Federal Court finding contradicted four months later by the AAT. The architects of the trap believed it was invisible. They were right — to everyone except the person inside it.`,
                    `"They confused your silence with stupidity." For 35 years, agencies received formal submissions and returned institutional silence. Not a single agency disputed the contents of a single document. Their silence was not the silence of institutions confident they were correct. It was the silence of institutions that understood that engaging would require explaining what the documents showed. While they were declining to respond, their non-responses were being archived. The silence they thought they were maintaining in comfort was being catalogued.`,
                    `"You let them build their own cage and lock the door." Every contradiction in the archive was built by the institutions themselves: the Federal Court and the AAT on identical facts. ASIC's registrations and ASIC's non-investigation letters. PM&C's FOI denial reversed under formal pressure. Each brick laid by the agencies. Each door locked by their own correspondence. Now publicly downloadable. Bitcoin blockchain-timestamped. The cage is finished. They built it, locked it, and the key is in the archive.`,
                    `"They set a perfect trap. You saw through it. Now they're mad." Named individuals have been publicly accused in sworn testimony downloaded 217,064 times. None has sued for defamation. None has issued corrections. The curtain has dropped. The audience is looking at the machinery behind the performance. And nothing in that machinery — nothing in 35 years of correspondence, court findings, FOI responses, and hospitalisation records — supports the performance that was staged. The archive is the blade that cut the trap open. The fury is proof that it worked.`,
                  ],
                },
                {
                  videoId: "Sy8-Qqkybxo",
                  url: "https://www.youtube.com/watch?v=Sy8-Qqkybxo",
                  videoTitle: "CHOSEN ONES! CONGRATS, IT'S DONE! YOU'LL NEVER GO THROUGH THAT AGAIN 🔥👑",
                  title: "They Thought You Would Break. The Archive Is What Happened Instead.",
                  excerpt: [
                    `The video opens with eight words: "They thought you would break." There is no preamble. No setup. Just the fact — stated plainly, in the way only the plainly true can be stated — that someone decided, at some point and for reasons they have never been required to explain, that they could reach a limit in Dr. Richard McLean that would end the testimony. They never found it.`,
                    `Fourteen involuntary psychiatric hospitalisations. Each without criminal charge. The temporal pattern is consistent: proximity to formal disclosure activity. Each hospitalisation functioned as a pause — a removal from public record, from legal process, from the institutional timeline. "The universe kept the receipts." So did he. 2,077 documents. SHA-256 hashed. Bitcoin blockchain timestamped. The PM&C reversed a sworn FOI declaration that no documents existed. The reversal is in the archive.`,
                    `The video's section on suffering-as-documentation maps precisely onto the archive. "What looked like silence was really surveillance. All they were doing was building their own case file page by page." The ICC submission under Article 7 of the Rome Statute submits the government's own documents to international record. Every humiliation they staged — exhibit. Every manipulation behind closed doors — evidence. The evidence speaks.`,
                    `The video is titled: It's done. The archive makes a simpler claim: it exists. Downloaded 217,000+ times. On the Bitcoin blockchain. With the ICC. With the UNHCR. Permanently established across independent verification systems that cannot be amended or suppressed by any of the agencies whose conduct it documents. They thought you would break. The archive is what happened instead.`,
                  ],
                },
              ].map((essay, idx) => (
                <div key={idx} className="mb-16 last:mb-0">
                  <Card className="overflow-hidden border-[hsl(38,92%,50%)]/20 hover:border-[hsl(38,92%,50%)]/50 transition-colors">
                    <CardContent className="p-0">
                      {/* Video embed */}
                      <div className="relative w-full bg-black" style={{ paddingTop: "42%" }}>
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube-nocookie.com/embed/${essay.videoId}`}
                          title={essay.videoTitle}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>

                      <div className="p-6 md:p-8">
                        {/* Video title */}
                        <div className="flex items-start gap-2 mb-4">
                          <Play className="h-4 w-4 text-[hsl(38,92%,50%)] shrink-0 mt-0.5" />
                          <a href={essay.url} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors leading-relaxed">
                            {essay.videoTitle}
                          </a>
                        </div>

                        {/* Essay */}
                        <h3 className="font-serif text-2xl font-bold text-primary mb-6 leading-tight">
                          {essay.title}
                        </h3>

                        <div className="space-y-4 text-muted-foreground leading-7">
                          {essay.excerpt.map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </div>

                        <div className="mt-6 pt-6 border-t border-border flex items-center justify-between flex-wrap gap-3">
                          <Badge variant="outline" className="border-[hsl(38,92%,50%)]/40 text-[hsl(38,92%,50%)] text-xs">
                            Evidence-based commentary
                          </Badge>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/video-commentary">
                              Read full essay <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="font-serif text-2xl font-bold text-primary flex items-center gap-2">
                  <Newspaper className="h-6 w-6 text-[hsl(38,92%,50%)]" />
                  Press Releases
                </h2>
                
                {pressReleases.map((release, index) => (
                  <Card key={index} className="hover:border-[hsl(38,92%,50%)]/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {release.date}
                            </Badge>
                          </div>
                          <h3 className="font-medium text-lg text-foreground mb-2">{release.title}</h3>
                          <p className="text-sm text-muted-foreground">{release.description}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <a href={release.url} target="_blank" rel="noopener noreferrer" onClick={() => trackDownload(release.url)}>
                            <Button size="sm" variant="outline" className="gap-1">
                              <Download className="h-4 w-4" /> PDF <DownloadBadge url={release.url} />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="border-[hsl(38,92%,50%)]/30 bg-[hsl(38,92%,50%)]/5">
                  <CardContent className="pt-6">
                    <h3 className="font-serif text-lg font-bold text-primary mb-3 flex items-center gap-2">
                      <Share2 className="h-5 w-5 text-[hsl(38,92%,50%)]" />
                      Share This Story
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Help spread awareness by sharing on social media. Every share helps expose the truth. All evidence is <CrossLink to="/blockchain">blockchain-verified</CrossLink>.
                    </p>
                    <div className="flex gap-3">
                      <a 
                        href="https://twitter.com/intent/tweet?text=The%20most%20comprehensively%20documented%20persecution%20case%20in%20Australian%20history%20-%2035%20years%2C%202000%2B%20documents%2C%20blockchain%20verified.&url=https://www.barrandodger.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="gap-2">
                          <SiX className="h-4 w-4" /> Share on X
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Mail className="h-5 w-5 text-[hsl(38,92%,50%)]" />
                      Media Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mediaContacts.map((contact, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="text-[hsl(38,92%,50%)]">{contact.icon}</div>
                        <div>
                          <p className="text-xs text-muted-foreground">{contact.type}</p>
                          {contact.link ? (
                            <a href={contact.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-primary">
                              {contact.value}
                            </a>
                          ) : (
                            <a href={`mailto:${contact.value}`} className="text-sm font-medium text-foreground hover:text-primary">
                              {contact.value}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                    <p className="text-xs text-muted-foreground pt-2 border-t border-border">
                      Response within 24-48 hours for media inquiries. <CrossLink to="/donate">Support the mission</CrossLink>.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="h-5 w-5 text-[hsl(38,92%,50%)]" />
                      Media Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mediaResources.map((resource, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-muted-foreground">{resource.icon}</div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{resource.title}</p>
                          <p className="text-xs text-muted-foreground">{resource.description}</p>
                          {resource.link && (
                            <Link href={resource.link} className="text-xs text-[hsl(38,92%,50%)] hover:underline flex items-center gap-1 mt-1">
                              View Archive <ExternalLink className="h-3 w-3" />
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-primary/30" data-testid="card-media-contact">
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Need immediate comment or interview?
                    </p>
                    <a href="mailto:drbarrandodger@proton.me?subject=Media%20Inquiry" data-testid="link-contact-email">
                      <Button className="w-full" data-testid="button-contact-now">
                        <Mail className="h-4 w-4 mr-2" /> Contact Now
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border"
            data-testid="section-share-media"
          >
            <SocialShare 
              title="Media Resources: Press Releases & Journalist Contact for Whistleblower Case"
              description="The most comprehensively documented persecution case in Australian history. Press releases, media contacts, and 2,000+ blockchain-verified documents available for journalists and researchers."
              url="https://www.barrandodger.com/media"
            />
          </motion.section>
        </div>
        <div className="container mx-auto max-w-4xl px-4">
          <CommentSection pageSlug="media" title="Media Discussion" />
        </div>
      </main>
      
      <RelatedContent currentPath="/media" />

      <Footer />
          <FloatingCTA />
</>
  );
}
