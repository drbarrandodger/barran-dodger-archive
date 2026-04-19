import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { CrossLink, DocumentPopup, KEY_DOCUMENTS } from "@/components/CrossLink";
import { Search, ExternalLink, Gavel, Book, Landmark, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { SocialShare } from "@/components/SocialShare";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

export default function LegalResearch() {
  const [query, setQuery] = useState("");

  const handleAustLIISearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    const searchUrl = `https://www.austlii.edu.au/cgi-bin/sino/search.cgi?query=${encodeURIComponent(query)}&context=/au`;
    window.open(searchUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Legal Research — AustLII Database & Case Law Resources"
        description="Research the legal framework behind 35 years of whistleblower persecution using AustLII and other authoritative legal databases. Public Interest Disclosure Act, Rome Statute, and more."
        keywords="legal research Australia, AustLII database, whistleblower law Australia, Public Interest Disclosure Act, Rome Statute Australia, case law research"
        path="/legal-research"
      />
      <Navigation />
      
      <main className="flex-grow pt-44 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Legal Research & Transparency</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering the public with direct access to Australasian legal databases, legislation, and case law to support accountability and justice in documented <DocumentPopup {...KEY_DOCUMENTS.crimesAgainstHumanity}>Crimes Against Humanity</DocumentPopup>. Explore our <CrossLink to="/evidence">evidence archive</CrossLink> or review <CrossLink to="/legal-status">legal status findings</CrossLink>.
            </p>
          </motion.div>

          {/* AustLII Search Integration */}
          <section className="mb-16">
            <Card className="border-primary/20 shadow-lg overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <div className="flex items-center gap-3 mb-2">
                  <Landmark className="h-6 w-6 text-primary" />
                  <CardTitle className="font-serif text-2xl">AustLII Database Search</CardTitle>
                </div>
                <CardDescription>
                  Search over 1.5 million cases, legislation, and treaties via the Australasian Legal Information Institute. Key whistleblower protections include the <DocumentPopup {...KEY_DOCUMENTS.pidActAnalysis}>PID Act framework</DocumentPopup>.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleAustLIISearch} className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search for cases, acts, or keywords (e.g., 'NDIS Act', 'Duty of Care')..." 
                      className="pl-10"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="gap-2">
                    Search AustLII <ExternalLink className="h-4 w-4" />
                  </Button>
                </form>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Quick Filters:</span>
                  <QuickFilterLink label="High Court Cases" query="mask:/au/cases/cth/HCA" setQuery={setQuery} />
                  <QuickFilterLink label="Federal Court" query="mask:/au/cases/cth/FCA" setQuery={setQuery} />
                  <QuickFilterLink label="Commonwealth Acts" query="mask:/au/legis/cth/consol_act" setQuery={setQuery} />
                  <QuickFilterLink label="Human Rights" query="human rights" setQuery={setQuery} />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* External Legal Resources */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ResourceCard 
              icon={<Gavel className="h-6 w-6" />}
              title="Federal Register of Legislation"
              description="The official whole-of-government website for Commonwealth legislation and related documents."
              url="https://www.legislation.gov.au/"
            />
            <ResourceCard 
              icon={<Book className="h-6 w-6" />}
              title="Queensland Legislation API"
              description="Public access to the Queensland Government's official legislation database and API services."
              url="https://www.legislation.qld.gov.au/api"
            />
            <ResourceCard 
              icon={<Landmark className="h-6 w-6" />}
              title="Federal Court Judgments"
              description="Direct access to the Digital Law Library of Federal Court judgments from 1977 to present."
              url="https://www.fedcourt.gov.au/digital-law-library/judgments"
            />
            <ResourceCard 
              icon={<Scale className="h-6 w-6" />}
              title="UN Human Rights Treaties"
              description="Database of the United Nations Office of the High Commissioner for Human Rights (OHCHR)."
              url="https://www.ohchr.org/en/instruments-listings"
            />
          </section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border"
            data-testid="section-share-legalresearch"
          >
            <SocialShare 
              title="Australian Legal Research Tools - Public Access to Case Law & Legislation"
              description="Search AustLII, Federal Court judgments, and UN human rights treaties. Empowering citizens with direct access to the legal databases that hold institutions accountable."
              url="https://www.barrandodger.com/legal-research"
            />
          </motion.section>
        </div>
      </main>

      <ArchiveCrossLinks />
      <Footer />
          <FloatingCTA />
</div>
  );
}

function QuickFilterLink({ label, query, setQuery }: { label: string, query: string, setQuery: (q: string) => void }) {
  return (
    <button 
      onClick={() => setQuery(query)}
      className="text-xs bg-muted hover:bg-primary/10 hover:text-primary px-2 py-1 rounded border border-border transition-colors"
    >
      {label}
    </button>
  );
}

function ResourceCard({ icon, title, description, url }: { icon: React.ReactNode, title: string, description: string, url: string }) {
  return (
    <Card className="hover-elevate transition-all border-border/50">
      <CardHeader>
        <div className="text-primary mb-2">{icon}</div>
        <CardTitle className="text-xl font-serif">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{description}</p>
        <Button variant="outline" className="w-full gap-2" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Access Database <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
