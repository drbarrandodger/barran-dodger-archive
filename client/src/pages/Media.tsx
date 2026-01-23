import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { 
  Newspaper, Mail, Download, ExternalLink, FileText, 
  Camera, Video, Mic, Globe, Clock, Share2
} from "lucide-react";
import { SiX } from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Media() {
  const pressReleases = [
    {
      date: "20 September 2025",
      title: "Systematic Persecution of Australian Whistleblower — Imminent Risk to Life",
      description: "Comprehensive media pack documenting 35-year persecution, $32.9M damages, Rome Statute violations",
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
        title="Media & Press | Barran Dodger Legal & Ethical Trust Fund"
        description="Press releases, media resources, and contact information for journalists covering the systematic persecution case."
      />
      <Navigation />
      
      <main className="min-h-screen bg-background pt-32 pb-20">
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
                Press releases, media contacts, and resources for journalists and researchers.
              </p>
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
                          <a href={release.url} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="gap-1">
                              <Download className="h-4 w-4" /> PDF
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
                      Help spread awareness by sharing on social media. Every share helps expose the truth.
                    </p>
                    <div className="flex gap-3">
                      <a 
                        href="https://twitter.com/intent/tweet?text=The%20most%20comprehensively%20documented%20persecution%20case%20in%20Australian%20history%20-%2035%20years%2C%202000%2B%20documents%2C%20blockchain%20verified.&url=https://www.barrandodger.com.au"
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
                      Response within 24-48 hours for media inquiries
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
        </div>
      </main>
      
      <Footer />
    </>
  );
}
