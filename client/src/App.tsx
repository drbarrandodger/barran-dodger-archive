import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DonationBanner } from "@/components/DonationBanner";
import { WhistleblowerBanner } from "@/components/WhistleblowerBanner";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Chatbot } from "@/components/Chatbot";
import { slugFromUrl } from "@/components/DownloadCounter";
import Home from "@/pages/Home";
import Mission from "@/pages/Mission";
import Contact from "@/pages/Contact";
import LegalResearch from "@/pages/LegalResearch";
import Evidence from "@/pages/Evidence";
import Blockchain from "@/pages/Blockchain";
import PropheticPapers from "@/pages/PropheticPapers";
import Gospel from "@/pages/Gospel";
import Church from "@/pages/Church";
import Donate from "@/pages/Donate";
import StartHere from "@/pages/StartHere";
import Media from "@/pages/Media";
import Timeline from "@/pages/Timeline";
import LegalStatus from "@/pages/LegalStatus";
import Manifesto from "@/pages/Manifesto";
import PropheticEssay from "@/pages/PropheticEssay";
import CaseStudies from "@/pages/CaseStudies";
import TaxpayerCostAnalysis from "@/pages/TaxpayerCostAnalysis";
import Publications from "@/pages/Publications";
import EvidenceVault from "@/pages/EvidenceVault";
import Store from "@/pages/Store";
import ViralLanding from "@/pages/ViralLanding";
import AdministrativeAnnihilation from "@/pages/AdministrativeAnnihilation";
import RetrospectiveStatement from "@/pages/RetrospectiveStatement";
import VisitorStats from "@/pages/VisitorStats";
import SpreadTheTruth from "@/pages/SpreadTheTruth";
import AIJusticeStatement from "@/pages/AIJusticeStatement";
import VideoCommentary from "@/pages/VideoCommentary";
import ChosenOnesPerfectTrap from "@/pages/ChosenOnesPerfectTrap";
import PrivateInvestigatorLegend from "@/pages/PrivateInvestigatorLegend";
import TestimonyWentGlobal from "@/pages/TestimonyWentGlobal";

function GlobalDownloadTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      if (!/\/documents\/.*\.pdf/i.test(href)) return;
      const slug = slugFromUrl(href);
      if (!slug) return;
      fetch(`/api/downloads/${encodeURIComponent(slug)}/increment`, { method: 'POST' })
        .then(r => r.json())
        .then((data: { count: number }) => {
          queryClient.setQueryData(['/api/downloads', slug], data);
        })
        .catch(() => {});
    }
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);
  return null;
}

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('/api/pageviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: location }),
    }).catch(() => {});
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={ViralLanding} />
        <Route path="/archive" component={Home} />
        <Route path="/start-here" component={StartHere} />
        <Route path="/mission" component={Mission} />
        <Route path="/research" component={LegalResearch} />
        <Route path="/evidence" component={Evidence} />
        <Route path="/blockchain" component={Blockchain} />
        <Route path="/prophetic-papers" component={PropheticPapers} />
        <Route path="/gospel" component={Gospel} />
        <Route path="/church" component={Church} />
        <Route path="/donate" component={Donate} />
        <Route path="/contact" component={Contact} />
        <Route path="/media" component={Media} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/legal-status" component={LegalStatus} />
        <Route path="/manifesto" component={Manifesto} />
        <Route path="/josephs-coat" component={PropheticEssay} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/taxpayer-cost-analysis" component={TaxpayerCostAnalysis} />
        <Route path="/publications" component={Publications} />
        <Route path="/evidence-vault" component={EvidenceVault} />
        <Route path="/administrative-annihilation" component={AdministrativeAnnihilation} />
        <Route path="/retrospective-statement" component={RetrospectiveStatement} />
        <Route path="/visitors" component={VisitorStats} />
        <Route path="/spread-the-truth" component={SpreadTheTruth} />
        <Route path="/ai-justice-statement" component={AIJusticeStatement} />
        <Route path="/video-commentary" component={VideoCommentary} />
        <Route path="/chosen-ones-perfect-trap" component={ChosenOnesPerfectTrap} />
        <Route path="/private-investigator-legend" component={PrivateInvestigatorLegend} />
        <Route path="/testimony-went-global" component={TestimonyWentGlobal} />
        <Route path="/the-truth" component={ViralLanding} />
        <Route path="/store" component={Store} />
        <Route component={ViralLanding} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <GlobalDownloadTracker />
          <ReadingProgress />
          <WhistleblowerBanner />
          <DonationBanner />
          <Toaster />
          <Breadcrumbs />
          <Router />
          <Chatbot />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
