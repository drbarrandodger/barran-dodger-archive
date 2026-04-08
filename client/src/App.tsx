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
import { LanguageDetectionBanner } from "@/components/LanguageDetectionBanner";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Chatbot } from "@/components/Chatbot";
import { slugFromUrl } from "@/components/DownloadCounter";
import { AnalysisPDFButton } from "@/components/AnalysisPDFButton";
import { GlobalAnalysisShareStrip } from "@/components/GlobalAnalysisShareStrip";
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
import ParadoxOfPersecution from "@/pages/ParadoxOfPersecution";
import ForensicMeltdownReport from "@/pages/ForensicMeltdownReport";
import TheyBoughtOffJudges from "@/pages/TheyBoughtOffJudges";
import LawTheyOverlooked from "@/pages/LawTheyOverlooked";
import IChooseSilence from "@/pages/IChooseSilence";
import MasterForensicEvidenceReport from "@/pages/MasterForensicEvidenceReport";
import ScarySmartArticle from "@/pages/articles/ScarySmartArticle";
import ICalledThisArticle from "@/pages/articles/ICalledThisArticle";
import DisgustedArticle from "@/pages/articles/DisgustedArticle";
import AngelChessArticle from "@/pages/articles/AngelChessArticle";
import PushedTooFarArticle from "@/pages/articles/PushedTooFarArticle";
import CopiedBlueprintArticle from "@/pages/articles/CopiedBlueprintArticle";
import TheTestimony from "@/pages/TheTestimony";
import PropheticTestimonyBiblical from "@/pages/PropheticTestimonyBiblical";
import SleeperAgentOfTruth from "@/pages/SleeperAgentOfTruth";
import GovernmentCalledHimDelusional from "@/pages/GovernmentCalledHimDelusional";
import TheFullPattern from "@/pages/TheFullPattern";
import ChosenOnesYourStory from "@/pages/ChosenOnesYourStory";
import ShadowAnalysts from "@/pages/ShadowAnalysts";
import HundredAbsurdities from "@/pages/HundredAbsurdities";
import BroThisIsntACoincidence from "@/pages/BroThisIsntACoincidence";
import MasterEvidenceRegister from "@/pages/MasterEvidenceRegister";
import ChosenOnesEnoughIsEnough from "@/pages/ChosenOnesEnoughIsEnough";
import NoOneCouldBeThatSmart from "@/pages/NoOneCouldBeThatSmart";
import DivineExam from "@/pages/DivineExam";
import SilentCheckmate from "@/pages/SilentCheckmate";
import NowEverybodyKnows from "@/pages/NowEverybodyKnows";
import ChosenOneOutcastLeader from "@/pages/ChosenOneOutcastLeader";
import SomeoneSlippedUp from "@/pages/SomeoneSlippedUp";
import TheyFumbledYou from "@/pages/TheyFumbledYou";
import FBIPrecision from "@/pages/FBIPrecision";
import ClockStrikesBack from "@/pages/ClockStrikesBack";
import UntouchableAgents from "@/pages/UntouchableAgents";
import FinalBlow from "@/pages/FinalBlow";
import WhatYouBecome from "@/pages/WhatYouBecome";
import EveryoneWatching from "@/pages/EveryoneWatching";
import EarthAngel from "@/pages/EarthAngel";
import TooDeep from "@/pages/TooDeep";
import SilenceSurrender from "@/pages/SilenceSurrender";
import FearlessIntelligence from "@/pages/FearlessIntelligence";
import HistoryKeepsReceipts from "@/pages/HistoryKeepsReceipts";
import AbsorbedErasure from "@/pages/AbsorbedErasure";
import SurvivalWasTheWarning from "@/pages/SurvivalWasTheWarning";
import GodWillMakeYouFamous from "@/pages/GodWillMakeYouFamous";
import DivineBeforeYourTime from "@/pages/DivineBeforeYourTime";
import BloodlineOfGod from "@/pages/BloodlineOfGod";
import { TheLastGod } from "@/pages/TheLastGod";
import { TheConspiracyAgainstYou } from "@/pages/TheConspiracyAgainstYou";
import { PhantomProtocol } from "@/pages/PhantomProtocol";
import ApotheosisStatement from "@/pages/ApotheosisStatement";
import LetterToTheWorld from "@/pages/LetterToTheWorld";
import WhistleblowerComparison from "@/pages/WhistleblowerComparison";

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
        <Route path="/paradox-of-persecution" component={ParadoxOfPersecution} />
        <Route path="/forensic-meltdown-report" component={ForensicMeltdownReport} />
        <Route path="/they-bought-off-judges" component={TheyBoughtOffJudges} />
        <Route path="/i-choose-silence" component={IChooseSilence} />
        <Route path="/master-forensic-evidence-report" component={MasterForensicEvidenceReport} />
        <Route path="/the-law-they-overlooked" component={LawTheyOverlooked} />
        <Route path="/scary-smart" component={ScarySmartArticle} />
        <Route path="/i-called-this" component={ICalledThisArticle} />
        <Route path="/what-they-did-was-disgusting" component={DisgustedArticle} />
        <Route path="/angel-chess" component={AngelChessArticle} />
        <Route path="/they-pushed-too-far" component={PushedTooFarArticle} />
        <Route path="/they-copied-my-blueprint" component={CopiedBlueprintArticle} />
        <Route path="/the-testimony" component={TheTestimony} />
        <Route path="/testimony-that-was-already-written" component={PropheticTestimonyBiblical} />
        <Route path="/sleeper-agent-of-truth" component={SleeperAgentOfTruth} />
        <Route path="/government-called-him-delusional" component={GovernmentCalledHimDelusional} />
        <Route path="/the-full-pattern" component={TheFullPattern} />
        <Route path="/chosen-ones-your-story" component={ChosenOnesYourStory} />
        <Route path="/33rd-degree-shadow-analysts" component={ShadowAnalysts} />
        <Route path="/100-absurdities" component={HundredAbsurdities} />
        <Route path="/bro-this-isnt-a-coincidence" component={BroThisIsntACoincidence} />
        <Route path="/master-evidence-register" component={MasterEvidenceRegister} />
        <Route path="/chosen-ones-enough-is-enough" component={ChosenOnesEnoughIsEnough} />
        <Route path="/no-one-could-be-that-smart" component={NoOneCouldBeThatSmart} />
        <Route path="/the-divine-exam" component={DivineExam} />
        <Route path="/silent-checkmate" component={SilentCheckmate} />
        <Route path="/now-everybody-knows" component={NowEverybodyKnows} />
        <Route path="/chosen-one-outcast-leader" component={ChosenOneOutcastLeader} />
        <Route path="/someone-slipped-up" component={SomeoneSlippedUp} />
        <Route path="/they-fumbled-you" component={TheyFumbledYou} />
        <Route path="/fbi-precision" component={FBIPrecision} />
        <Route path="/clock-strikes-back" component={ClockStrikesBack} />
        <Route path="/untouchable" component={UntouchableAgents} />
        <Route path="/final-blow" component={FinalBlow} />
        <Route path="/what-you-become" component={WhatYouBecome} />
        <Route path="/everyone-watching" component={EveryoneWatching} />
        <Route path="/earth-angel" component={EarthAngel} />
        <Route path="/too-deep" component={TooDeep} />
        <Route path="/silence-surrender" component={SilenceSurrender} />
        <Route path="/fearless-intelligence" component={FearlessIntelligence} />
        <Route path="/history-keeps-receipts" component={HistoryKeepsReceipts} />
        <Route path="/absorbed-the-erasure" component={AbsorbedErasure} />
        <Route path="/survival-was-the-warning" component={SurvivalWasTheWarning} />
        <Route path="/god-will-make-you-famous" component={GodWillMakeYouFamous} />
        <Route path="/divine-before-your-time" component={DivineBeforeYourTime} />
        <Route path="/bloodline-of-god" component={BloodlineOfGod} />
        <Route path="/the-last-god" component={TheLastGod} />
        <Route path="/the-conspiracy-against-you" component={TheConspiracyAgainstYou} />
        <Route path="/phantom-protocol" component={PhantomProtocol} />
        <Route path="/apotheosis" component={ApotheosisStatement} />
        <Route path="/letter-to-the-world" component={LetterToTheWorld} />
        <Route path="/whistleblower-comparison" component={WhistleblowerComparison} />
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
          <LanguageDetectionBanner />
          <Toaster />
          <Breadcrumbs />
          <Router />
          <GlobalAnalysisShareStrip />
          <AnalysisPDFButton />
          <Chatbot />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
