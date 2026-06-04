import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CrossLink, DocumentPopup, KEY_DOCUMENTS } from "@/components/CrossLink";
import { 
  BookOpen, 
  Heart, 
  Shield, 
  Clock, 
  Star, 
  Users, 
  Flame,
  Crown,
  Eye,
  Scroll,
  ExternalLink,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { SocialShare } from "@/components/SocialShare";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CommentSection } from "@/components/CommentSection";
import { RelatedContent } from "@/components/RelatedContent";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

export default function PropheticEssay() {
  const josephParallels = [
    {
      joseph: "Betrayed by his own brothers who sold him into slavery",
      barran: "Abandoned by family members when love demanded presence",
      evidence: "Declaration of the Witness; Family abandonment documented"
    },
    {
      joseph: "Falsely accused by Potiphar's wife and imprisoned",
      barran: "Falsely accused through weaponized mental health and imprisoned in psychiatric facilities",
      evidence: "14 psychiatric hospitalisations across 3 states; Federal Court PID Act confirmation"
    },
    {
      joseph: "Forgotten in prison despite helping the cupbearer",
      barran: "Ignored by every institution despite providing evidence to lawyers, police, politicians",
      evidence: "Commonwealth Ombudsman service restriction; No institution followed through"
    },
    {
      joseph: "Interpreted Pharaoh's dreams and was elevated to second-in-command",
      barran: "Preserved 2,304+ blockchain-authenticated files awaiting divine elevation",
      evidence: "Enliven Chain blockchain archive; SHA-256 verification"
    },
    {
      joseph: "Saved Egypt and his own family from famine",
      barran: "Testimony preserved to save the vulnerable and expose systemic corruption",
      evidence: "$6 billion NDIS fraud exposure; Whistleblower protection documentation"
    },
    {
      joseph: "Forgave his brothers: 'You meant it for evil, but God meant it for good'",
      barran: "Declaration of Divine Forgiveness: Forgiveness extended to all persecutors",
      evidence: "Manifesto Part VI; Divine appointment declaration"
    }
  ];

  const historicalMartyrs = [
    {
      name: "Socrates (469-399 BCE)",
      sacrifice: "Executed by hemlock for 'corrupting the youth' by teaching them to think",
      legacy: "Father of Western philosophy; The examined life"
    },
    {
      name: "Jesus of Nazareth (c. 4 BCE - 30 CE)",
      sacrifice: "Crucified for claiming divine authority and challenging religious hypocrisy",
      legacy: "Salvation for all humanity; The ultimate sacrifice of love"
    },
    {
      name: "Joan of Arc (1412-1431)",
      sacrifice: "Burned at the stake for heresy after leading France to military victory",
      legacy: "Symbol of courage, faith, and divine calling against impossible odds"
    },
    {
      name: "Giordano Bruno (1548-1600)",
      sacrifice: "Burned at the stake for proposing infinite worlds and challenging Church doctrine",
      legacy: "Martyr for scientific freedom and cosmological truth"
    },
    {
      name: "Galileo Galilei (1564-1642)",
      sacrifice: "Imprisoned and silenced for proving the Earth revolves around the Sun",
      legacy: "Father of modern observational astronomy"
    },
    {
      name: "Mahatma Gandhi (1869-1948)",
      sacrifice: "Assassinated for his message of non-violence and religious unity",
      legacy: "Liberation of India; Non-violent resistance"
    },
    {
      name: "Dr. Martin Luther King Jr. (1929-1968)",
      sacrifice: "Assassinated for leading the civil rights movement",
      legacy: "The dream of equality; Non-violent protest"
    },
    {
      name: "Harvey Milk (1930-1978)",
      sacrifice: "Assassinated for being an openly gay elected official",
      legacy: "LGBTQ+ political representation and rights"
    },
    {
      name: "Oscar Romero (1917-1980)",
      sacrifice: "Assassinated while celebrating Mass for speaking against oppression",
      legacy: "Liberation theology; Voice for the poor"
    },
    {
      name: "Karen Silkwood (1946-1974)",
      sacrifice: "Died under suspicious circumstances while exposing nuclear safety violations",
      legacy: "Corporate whistleblower protections; Nuclear safety"
    },
    {
      name: "Jamal Khashoggi (1958-2018)",
      sacrifice: "Murdered in a consulate for criticizing authoritarian power",
      legacy: "Press freedom; Accountability for powerful nations"
    },
    {
      name: "Aaron Swartz (1986-2013)",
      sacrifice: "Prosecuted to death for believing information should be free",
      legacy: "Open access movement; Internet freedom"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Joseph's Coat, Barran's Mantle — A Prophetic Parallel"
        description="A prophetic essay comparing Barran Dodger's 35-year journey to the biblical Joseph. Betrayed by brothers. Imprisoned by power. Vindicated by God. The pattern is unmistakable."
        keywords="Joseph parallel Barran Dodger, prophetic essay, biblical comparison persecution, divine vindication, kairos time prophecy"
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1.5">
              <Scroll className="h-4 w-4 mr-2" />
              PROPHETIC ESSAY
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Joseph's Coat, Barran's Mantle
            </h1>
            <p className="text-xl text-muted-foreground font-serif italic">
              A Meditation on Divine Providence in the Face of Universal Abandonment
            </p>
            <p className="text-lg text-foreground mt-4">
              Kairos Time: When Delay Was Not Denial
            </p>
          </div>

          {/* Opening Essay */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:float-left first-letter:mr-3">
                  In the ancient scroll of Genesis, there lived a young man named Joseph — beloved of his father, 
                  despised by his brothers, sold into slavery, falsely accused, imprisoned, forgotten, and ultimately 
                  elevated to save nations from famine. His story spans thirteen years of suffering before a single 
                  morning of vindication. Yet in those thirteen years of darkness, God's hand was working — invisible 
                  but undeniable, orchestrating a deliverance that human wisdom could never have designed.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Nearly four millennia later, in the land called Australia, there lives a man named Richard William McLean — 
                  known by his prophetic name Barran Dodger — whose journey mirrors Joseph's with uncanny precision. 
                  Betrayed by family. Falsely accused. Imprisoned in <CrossLink to="/case-studies">psychiatric facilities</CrossLink>. Forgotten by every institution 
                  of justice. Yet like Joseph, he has preserved something precious through the darkness: testimony. Truth. 
                  Evidence. <Link href="/evidence" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">2,304 blockchain-authenticated files</Link> spanning <Link href="/timeline" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">35 years</Link> that cannot be erased, denied, or silenced.
                </p>

                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 my-8">
                  <p className="text-xl font-serif text-primary text-center italic">
                    "What you meant for evil, God meant for good, to accomplish what is now being done — 
                    the saving of many lives."
                  </p>
                  <cite className="text-sm text-muted-foreground block text-center mt-2">— Genesis 50:20</cite>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  Consider the magnitude of abandonment: No lawyer would take the case. No police officer would investigate. 
                  No public official would intervene. No politician would speak. His own family turned away. 
                  The UNHCR would not recognize political exile within a democracy. 
                  The International Criminal Court would not hear a complaint against Australia — despite evidence meeting <CrossLink to="/legal-status">Rome Statute</CrossLink> thresholds. 
                  Every door closed. Every hand withdrew. Every voice fell silent.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  And yet — <em>and yet</em> — the testimony survives. The evidence endures. The <Link href="/blockchain" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">blockchain cannot be silenced</Link>. 
                  After <CrossLink to="/case-studies">fourteen psychiatric hospitalisations</CrossLink> across three states, after death and resuscitation, after exile from homeland to 
                  Southeast Asia, after 35 years of documented persecution — the witness still stands. 
                  The <Link href="/gospel" className="text-[hsl(38,92%,50%)] hover:underline font-semibold">gospels are being written</Link>. The Enliven Chain grows link by link.
                </p>

                <p className="text-lg leading-relaxed mb-6 font-semibold text-primary">
                  If every human institution has failed, and yet the testimony persists — whose hand is this? 
                  If every earthly power has abandoned, and yet the witness survives — whose protection is this? 
                  If delay has not become denial, if silence has not become erasure — then this is not human preservation. 
                  This is divine providence. This is Kairos time.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Kairos Time Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-serif">
                <Clock className="h-6 w-6 text-primary" />
                Kairos: The Appointed Time
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  The Greeks had two words for time: <em>Chronos</em> — the endless tick of seconds, the calendar's 
                  march, the clock's tyranny — and <em>Kairos</em> — the appointed moment, the fullness of time, 
                  the pregnant pause before divine action. Joseph spent thirteen years in Chronos time before 
                  one morning of Kairos vindication. Jesus spent thirty years in obscurity before three years 
                  of ministry that changed eternity.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Barran's <CrossLink to="/timeline">thirty-five years</CrossLink> of documentation are not wasted years. They are Kairos years — 
                  years of preparation, years of evidence-gathering, years when the <CrossLink to="/blockchain">blockchain</CrossLink> was being 
                  forged link by link into an unbreakable chain of testimony. What appears to be delay 
                  is actually divine timing. What appears to be abandonment is actually protection. 
                  What appears to be silence is actually the gathering of witnesses.
                </p>

                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary/30 my-8">
                  <p className="text-xl font-serif text-primary text-center">
                    Delay was not denial. Silence was not surrender. The appointed time approaches.
                  </p>
                </div>

                <p className="text-lg leading-relaxed">
                  To the vulnerable, the downtrodden, the forgotten — let Joseph's story and Barran's journey 
                  remind you: God's silence is not God's absence. The prison is not the end of the story. 
                  The pit is not the grave. What is being prepared in the darkness will be revealed in the light. 
                  Keep the faith. The Kairos moment comes for all who endure.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Joseph Parallels Table */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-serif">
                <BookOpen className="h-6 w-6 text-primary" />
                The Parallels: Joseph and Barran
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {josephParallels.map((parallel, index) => (
                  <div key={index} className="grid md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg border border-border/50">
                    <div>
                      <Badge variant="secondary" className="mb-2">Joseph (Genesis 37-50)</Badge>
                      <p className="text-foreground">{parallel.joseph}</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2 border-primary text-primary">Barran Dodger (1990-2026)</Badge>
                      <p className="text-foreground">{parallel.barran}</p>
                      <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                        <Shield className="h-3 w-3" /> Evidence: {parallel.evidence}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link href="/evidence">
                  <Button variant="outline" className="gap-2" data-testid="link-view-evidence">
                    <ExternalLink className="h-4 w-4" />
                    View Full Evidence Archive
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Message of Hope */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-serif">
                <Heart className="h-6 w-6 text-primary" />
                A Message to the Downtrodden
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  If you are reading this in the depths of your own suffering — if you have been abandoned by 
                  family, betrayed by institutions, silenced by power, forgotten by the world — hear this truth:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Star className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">Your suffering is not invisible. God sees. The universe records. The blockchain of eternity preserves every tear.</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Star className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">Your delay is not denial. Joseph waited thirteen years. Jesus waited thirty. Barran has waited thirty-five. The appointed time comes.</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Star className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">Your persecutors are not victorious. What they meant for evil, God means for good. The evidence accumulates. Justice approaches.</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Star className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">Your testimony matters. Even if no court will hear it, even if no journalist will report it — the <CrossLink to="/blockchain">blockchain</CrossLink> preserves it. Future generations will know. Read the <CrossLink to="/manifesto">complete manifesto</CrossLink>.</p>
                  </div>
                </div>

                <p className="text-xl font-serif text-primary text-center italic">
                  Keep the faith. The pit is not the grave. The prison is not the end. 
                  Your Kairos moment is being prepared in the silence.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Historical Martyrs Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-serif">
                <Flame className="h-6 w-6 text-primary" />
                The Avant-Garde of Truth: Those Who Were Sacrificed
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Remembering the pioneers, prophets, and truth-speakers who paid the ultimate price 
                so that we might enjoy the freedoms they never knew
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed">
                  Throughout human history, there have been those who saw further, spoke louder, and stood firmer 
                  than their age could tolerate. They were burned, crucified, assassinated, imprisoned, silenced — 
                  yet their voices echo still. The rights we enjoy today were purchased with their blood. 
                  The truths we take for granted were heresies for which they died.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-primary">
                  Both Barran and God remember these souls. In Barran's gospels, not a single one is forgotten.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {historicalMartyrs.map((martyr, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-muted/30 rounded-lg border border-border/50 hover-elevate"
                  >
                    <div className="flex items-start gap-3">
                      <Crown className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-foreground">{martyr.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{martyr.sacrifice}</p>
                        <p className="text-sm text-primary mt-2 flex items-center gap-1">
                          <Sparkles className="h-3 w-3" /> Legacy: {martyr.legacy}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary/30">
                <p className="text-xl font-serif text-primary text-center">
                  "God has allowed these souls to be taken — not because they were wrong, 
                  but because humanity was not yet ready for their truth. 
                  Their sacrifice was not in vain. We are their harvest."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Spiritual Warfare Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-serif">
                <Flame className="h-6 w-6 text-primary" />
                Spiritual Warfare: The Reality Beyond Human Understanding
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Spiritual warfare backed by human technology is a real, indefinable thing. <DocumentPopup {...KEY_DOCUMENTS.stateTargeting}>Voice-to-skull 
                  harassment</DocumentPopup>, <CrossLink to="/evidence">electronic targeting</CrossLink>, <CrossLink to="/evidence">gang stalking</CrossLink>, coordinated isolation — these are not 
                  the inventions of troubled minds. They are the weapons of a battle fought on frequencies 
                  most people cannot perceive, in dimensions most institutions refuse to acknowledge. 
                  The war is ancient. The tools are modern. The target is always the same: those marked 
                  for divine purpose. The <DocumentPopup {...KEY_DOCUMENTS.stateTargeting}>state-sanctioned targeting</DocumentPopup> is documented.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  To those who are going through struggle, abandonment, exile — to those who have experienced 
                  gang stalking, electronic harassment, coordinated <CrossLink to="/timeline">persecution</CrossLink> — hear this truth: 
                  <strong className="text-primary"> Your suffering is not evidence of your downfall. It is not evidence 
                  that you are wrong. It is not evidence that you are weak.</strong>
                </p>

                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border-2 border-primary/30 my-8">
                  <p className="text-xl font-serif text-primary text-center font-semibold">
                    Your persecution is evidence of your significance. Your targeting is proof of your importance.
                  </p>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  God exists outside of human constructs of time. From the eternal vantage point, He witnesses 
                  with perfect clarity the amazing contributions you are going to make to society, to humanity, 
                  to the healing of nations. Before you know your own purpose, He has already seen your victory. 
                  Before you can imagine your impact, He has already counted the lives you will save.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  And the devil also knows this.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  This is why the warfare increases just before vindication. This is why the attacks intensify 
                  when breakthrough is near. This is why the persecution escalates when the anointing ripens. 
                  The enemy does not waste resources on the insignificant. The magnitude of the assault is 
                  proportional to the magnitude of the calling.
                </p>

                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 my-8">
                  <p className="text-xl font-serif text-primary text-center italic">
                    "For our struggle is not against flesh and blood, but against the rulers, against the 
                    authorities, against the powers of this dark world and against the spiritual forces 
                    of evil in the heavenly realms."
                  </p>
                  <cite className="text-sm text-muted-foreground block text-center mt-2">— Ephesians 6:12</cite>
                </div>

                <p className="text-lg leading-relaxed mb-6 font-semibold text-primary">
                  So hang in there. The darkness before dawn is always darkest. The flood before deliverance 
                  is always deepest. The attack before breakthrough is always fiercest. You are not losing — 
                  you are being proven. You are not falling — you are being forged. The very intensity of 
                  what you are enduring is your diploma of significance.
                </p>

                <p className="text-lg leading-relaxed">
                  Heaven sees what earth cannot. And when the Kairos moment arrives — when vindication comes 
                  in its appointed hour — the same technology that was used to torment you will be used to 
                  document the truth. The same systems that targeted you will be exposed. The same powers 
                  that sought your destruction will witness your elevation. Hold on. Your contribution 
                  to humanity is already written in eternity.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Not a Soul Forgotten */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-serif">
                <Eye className="h-6 w-6 text-primary" />
                Not a Soul Forgotten
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  In Barran's gospels, every soul is recorded. Every <CrossLink to="/evidence">whistleblower</CrossLink> silenced. 
                  Every patient neglected. Every citizen betrayed. Every child unprotected. 
                  Every elder abandoned. The 2,304 evidence files are not mere documents — 
                  they are memorials. They are names. They are faces. They are stories that 
                  institutional power tried to erase.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  The <CrossLink to="/blockchain">blockchain</CrossLink> does not forget. God does not forget. Barran does not forget.
                </p>

                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 my-8">
                  <p className="text-xl font-serif text-primary text-center italic">
                    "Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God. 
                    Indeed, the very hairs of your head are all numbered. Don't be afraid; 
                    you are worth more than many sparrows."
                  </p>
                  <cite className="text-sm text-muted-foreground block text-center mt-2">— Luke 12:6-7</cite>
                </div>

                <p className="text-lg leading-relaxed">
                  If you have suffered and your suffering was never acknowledged — it is acknowledged here. 
                  If you spoke truth and were silenced — your truth echoes in these gospels. 
                  If you were sacrificed by institutional power — your sacrifice is remembered. 
                  The evidence archive is not just Barran's testimony. It is <em>our</em> testimony. 
                  It is the testimony of all who have been crushed by systems that should have protected them.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Closing */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                  The Coat of Many Colors, The Mantle of Truth
                </h3>
                
                <p className="text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                  Joseph's father gave him a coat of many colors — a sign of favor that provoked 
                  his brothers' jealousy. Barran's heavenly Father has given him a mantle of truth — 
                  a blockchain-authenticated testimony that provokes institutional fury. 
                  Both coats were stripped away. Both men were thrown into pits. 
                  Both were forgotten by those who should have remembered.
                </p>

                <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto font-semibold">
                  But neither story ended in the pit. Joseph rose to save nations. 
                  Barran's testimony rises to save the vulnerable, the forgotten, the downtrodden. 
                  God's hand is visible — not in the deliverance that never came from human institutions, 
                  but in the preservation that no human institution could provide.
                </p>

                <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-8 rounded-lg text-primary-foreground mb-8">
                  <p className="text-2xl font-serif italic mb-4">
                    "The stone the builders rejected has become the cornerstone; 
                    the Lord has done this, and it is marvelous in our eyes."
                  </p>
                  <cite className="text-sm opacity-80">— Psalm 118:22-23</cite>
                </div>

                <p className="text-sm text-muted-foreground whitespace-pre-line font-serif italic">
                  Written in exile but not in despair,{"\n"}
                  Dr. Richard William McLean (Barran Dodger){"\n"}
                  January 2026
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link href="/evidence">
                    <Button className="gap-2" data-testid="link-evidence-archive">
                      <Shield className="h-4 w-4" />
                      Evidence Archive
                    </Button>
                  </Link>
                  <Link href="/manifesto">
                    <Button variant="outline" className="gap-2" data-testid="link-manifesto">
                      <Scroll className="h-4 w-4" />
                      The Manifesto
                    </Button>
                  </Link>
                  <Link href="/gospel">
                    <Button variant="outline" className="gap-2" data-testid="link-gospel">
                      <BookOpen className="h-4 w-4" />
                      Sacred Gospels
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border"
            data-testid="section-share-propheticessay"
          >
            <SocialShare 
              title="Joseph's Coat: A Prophetic Essay on Spiritual Warfare & Institutional Persecution"
              description="The biblical parallel between Joseph's betrayal and Barran Dodger's 35-year persecution. When the coat was stripped away, truth remained. Blockchain-verified testimony that cannot be silenced."
              url="https://www.barrandodger.com/josephs-coat"
            />
          </motion.section>

        </motion.div>

        <section className="py-12 px-4 bg-[hsl(222,55%,8%)]">
          <div className="container mx-auto max-w-3xl">
            <CommentSection pageSlug="prophetic-essay" title="Prophetic Essay Discussion" />
          </div>
        </section>
      </main>

      <RelatedContent currentPath="/josephs-coat" />

          <FloatingCTA />
</div>
  );
      <ArchiveCrossLinks />
}
