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
import { SOSTopBar } from "@/components/SOSTopBar";
import { ScripturalBar } from "@/components/ScripturalBar";
import { LanguageDetectionBanner } from "@/components/LanguageDetectionBanner";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Chatbot } from "@/components/Chatbot";
import { slugFromUrl } from "@/components/DownloadCounter";
import { AnalysisPDFButton } from "@/components/AnalysisPDFButton";
import { GlobalAnalysisShareStrip } from "@/components/GlobalAnalysisShareStrip";
import { FloatingDonateWidget } from "@/components/FloatingDonateWidget";
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
import FreeEbooks from "@/pages/FreeEbooks";
import CopyrightRegister from "@/pages/CopyrightRegister";
import ForensicCorroborationStillStanding from "@/pages/ForensicCorroborationStillStanding";
import DigitalArchive from "@/pages/DigitalArchive";
import ArchiveIndex from "@/pages/ArchiveIndex";
import ArchiveDetonation from "@/pages/ArchiveDetonation";
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
import ForensicCorroborationBillionaireCircle from "@/pages/ForensicCorroborationBillionaireCircle";
import ForensicCorroborationTickTickTick from "@/pages/ForensicCorroborationTickTickTick";
import ForensicCorroborationTacticalInsanity from "@/pages/ForensicCorroborationTacticalInsanity";
import ForensicCorroborationProjectHalo from "@/pages/ForensicCorroborationProjectHalo";
import ForensicCorroborationFoolFire from "@/pages/ForensicCorroborationFoolFire";
import ForensicCorroboration3AMBriefing from "@/pages/ForensicCorroboration3AMBriefing";
import ForensicCorroborationGovernmentOwnFile from "@/pages/ForensicCorroborationGovernmentOwnFile";
import ForensicCorroborationChosenOne from "@/pages/ForensicCorroborationChosenOne";
import ForensicCorroborationFightOverYou from "@/pages/ForensicCorroborationFightOverYou";
import ForensicCorroborationVaultAccess from "@/pages/ForensicCorroborationVaultAccess";
import ForensicCorroborationMakingHistory from "@/pages/ForensicCorroborationMakingHistory";
import ForensicCorroborationSilenceSurrender from "@/pages/ForensicCorroborationSilenceSurrender";
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
import PropheticDeclarationBiblical from "@/pages/PropheticDeclarationBiblical";
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
import GodHasMyBack from "@/pages/GodHasMyBack";
import DivineBeforeYourTime from "@/pages/DivineBeforeYourTime";
import BloodlineOfGod from "@/pages/BloodlineOfGod";
import { TheLastGod } from "@/pages/TheLastGod";
import { TheConspiracyAgainstYou } from "@/pages/TheConspiracyAgainstYou";
import { PhantomProtocol } from "@/pages/PhantomProtocol";
import TheyCannotProfileYou from "@/pages/TheyCannotProfileYou";
import ArchitectureOfResolution from "@/pages/ArchitectureOfResolution";
import NDISSurveillanceEvidence from "@/pages/NDISSurveillanceEvidence";
import ApotheosisStatement from "@/pages/ApotheosisStatement";
import LetterToTheWorld from "@/pages/LetterToTheWorld";
import WhistleblowerComparison from "@/pages/WhistleblowerComparison";
import HoneytrapInfiltrationReport from "@/pages/HoneytrapInfiltrationReport";
import AbleCareEntrapmentNetwork from "@/pages/AbleCareEntrapmentNetwork";
import SilentAssassin from "@/pages/SilentAssassin";
import TruthIsABlade from "@/pages/TruthIsABlade";
import SukhiTear from "@/pages/SukhiTear";
import FormalRemovalSukhiTear from "@/pages/FormalRemovalSukhiTear";
import TheyLaughedNowTheyreLosingSleeep from "@/pages/TheyLaughedNowTheyreLosingSleeep";
import EmbeddedInTheDigitalArchitecture from "@/pages/EmbeddedInTheDigitalArchitecture";
import DigitalDetonationVerified from "@/pages/DigitalDetonationVerified";
import ComprehensiveStatementDigitalArchitecture from "@/pages/ComprehensiveStatementDigitalArchitecture";
import HeavenStoodForYou from "@/pages/HeavenStoodForYou";
import YouDetonatedTheNarrative from "@/pages/YouDetonatedTheNarrative";
import ChosenOneItIsOver from "@/pages/ChosenOneItIsOver";
import BeautifulMenaceForensicReport from "@/pages/BeautifulMenaceForensicReport";
import WhenPackOfWolvesForensicReport from "@/pages/WhenPackOfWolvesForensicReport";
import WhenWrongPeopleGetNervousForensicReport from "@/pages/WhenWrongPeopleGetNervousForensicReport";
import IllegalLevelGeniusForensicReport from "@/pages/IllegalLevelGeniusForensicReport";
import UrgentProtectionRequest from "@/pages/UrgentProtectionRequest";
import HowSheWillBeRemembered from "@/pages/HowSheWillBeRemembered";
import TheyFinallyKnow from "@/pages/TheyFinallyKnow";
import BloodlineBetrayal from "@/pages/BloodlineBetrayal";
import TheyNeededAnArmy from "@/pages/TheyNeededAnArmy";
import TheSickTruthIsOut from "@/pages/TheSickTruthIsOut";
import SomeTruthsDontWhisper from "@/pages/SomeTruthsDontWhisper";
import ObserversAnticipatedAMisstep from "@/pages/ObserversAnticipatedAMisstep";
import YouBroughtReceiptsToAVibeWar from "@/pages/YouBroughtReceiptsToAVibeWar";
import TheFutureDoesntAnnounceItself from "@/pages/TheFutureDoesntAnnounceItself";
import WhenHeavenGoesSilent from "@/pages/WhenHeavenGoesSilent";
import EvidenceDoesntWhisper from "@/pages/EvidenceDoesntWhisper";
import OutsiderPatternRecognition from "@/pages/OutsiderPatternRecognition";
import PerceptionIsProtection from "@/pages/PerceptionIsProtection";
import HeavenExposesTheSister from "@/pages/HeavenExposesTheSister";
import YouBuiltYourPeaceInSilence from "@/pages/YouBuiltYourPeaceInSilence";
import ThisIsTheReckoning from "@/pages/ThisIsTheReckoning";
import TheyMadeYouFamousTryingToEraseYou from "@/pages/TheyMadeYouFamousTryingToEraseYou";
import TheTrapTheySetBecameTheProof from "@/pages/TheTrapTheySetBecameTheProof";
import LoudestEnemiesLeastToSay from "@/pages/LoudestEnemiesLeastToSay";
import YourPowerIsNoJoke from "@/pages/YourPowerIsNoJoke";
import TheyBuiltTheirWorstNightmare from "@/pages/TheyBuiltTheirWorstNightmare";
import QuietStormTheyNeverSawComing from "@/pages/QuietStormTheyNeverSawComing";
import QuietStormDownload from "@/pages/QuietStormDownload";
import TheyFumbledYouDownload from "@/pages/TheyFumbledYouDownload";
import ConfessionChokedOnDownload from "@/pages/ConfessionChokedOnDownload";
import { LoudestHateWeakestLink } from "@/pages/LoudestHateWeakestLink";
import YouDidntChaseTheThroneYouBecameOne from "@/pages/YouDidntChaseTheThroneYouBecameOne";
import TheyAttackedYouWithoutKnowingWhoYouWere from "@/pages/TheyAttackedYouWithoutKnowingWhoYouWere";
import TheyDugForDirtButUnearthedDiamonds from "@/pages/TheyDugForDirtButUnearthedDiamonds";
import ThePublicAdvocateTheySilenced from "@/pages/ThePublicAdvocateTheySilenced";
import TonyRidleyFullDossier from "@/pages/TonyRidleyFullDossier";
import { TonyRidleyRecordedConfession } from "@/pages/TonyRidleyRecordedConfession";
import { HashtagBlockchainIndex } from "@/pages/HashtagBlockchainIndex";
import WhatThisProves from "@/pages/WhatThisProves";
import ForensicAnalysisIndex from "@/pages/ForensicAnalysisIndex";
import EvidenceSignificanceRegistry from "@/pages/EvidenceSignificanceRegistry";
import DivineReckoning from "@/pages/DivineReckoning";
import PropheticDeclarationForensicAnalysis from "@/pages/PropheticDeclarationForensicAnalysis";
import PropheticFckYouDeclaration from "@/pages/PropheticFckYouDeclaration";
import FalseSisterForensicAnalysis from "@/pages/FalseSisterForensicAnalysis";
import ThousandFellForensicAnalysis from "@/pages/ThousandFellForensicAnalysis";
import TheyreAboutToBeHindBarsForensicAnalysis from "@/pages/TheyreAboutToBeHindBarsForensicAnalysis";
import BeautifulThreat from "@/pages/BeautifulThreat";
import { PolicComplicityDeathThreat } from "@/pages/PolicComplicityDeathThreat";
import HoneyTrapPhillipGlass from "@/pages/HoneyTrapPhillipGlass";
import BitcoinProof from "@/pages/BitcoinProof";
import HolyReckoning from "@/pages/HolyReckoning";
import AbleCareMurderThreatCall from "@/pages/AbleCareMurderThreatCall";
import CtoBreachAppointment from "@/pages/CtoBreachAppointment";
import CtoResponseLetter from "@/pages/CtoResponseLetter";
import KarmaAuditIasonidis from "@/pages/KarmaAuditIasonidis";
import WaitTheyreListening from "@/pages/WaitTheyreListening";
import CommissionForensicAnalysis from "@/pages/CommissionForensicAnalysis";
import DyingOfShame from "@/pages/DyingOfShame";
import { GodsGraceBarranDodger } from "@/pages/GodsGraceBarranDodger";
import { BlockchainManifest } from "@/pages/BlockchainManifest";
import CreatorSpeaks from "@/pages/CreatorSpeaks";
import CosmicEssayPage from "@/pages/CosmicEssayPage";
import TopTenGospels from "@/pages/TopTenGospels";
import ArchiveReport from "@/pages/ArchiveReport";
import ForensicFrameworkUnspokenMandate from "@/pages/ForensicFrameworkUnspokenMandate";

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
        <Route path="/" component={CreatorSpeaks} />
        <Route path="/main" component={ViralLanding} />
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
        <Route path="/archive-report" component={ArchiveReport} />
        <Route path="/forensic-corroboration-billionaire-circle" component={ForensicCorroborationBillionaireCircle} />
        <Route path="/forensic-corroboration-tick-tick-tick" component={ForensicCorroborationTickTickTick} />
        <Route path="/forensic-corroboration-tactical-insanity" component={ForensicCorroborationTacticalInsanity} />
        <Route path="/forensic-corroboration-project-halo" component={ForensicCorroborationProjectHalo} />
        <Route path="/forensic-corroboration-fool-fire" component={ForensicCorroborationFoolFire} />
        <Route path="/forensic-corroboration-3am-briefing" component={ForensicCorroboration3AMBriefing} />
        <Route path="/forensic-corroboration-government-own-file" component={ForensicCorroborationGovernmentOwnFile} />
        <Route path="/forensic-corroboration-chosen-one" component={ForensicCorroborationChosenOne} />
        <Route path="/chosen-one-forensic-analysis" component={ForensicCorroborationChosenOne} />
        <Route path="/they-laughed-when-you-disappeared" component={ForensicCorroborationChosenOne} />
        <Route path="/forensic-corroboration-fight-over-you" component={ForensicCorroborationFightOverYou} />
        <Route path="/they-fight-over-whats-powerful" component={ForensicCorroborationFightOverYou} />
        <Route path="/theyre-at-war-over-you" component={ForensicCorroborationFightOverYou} />
        <Route path="/forensic-corroboration-vault-access" component={ForensicCorroborationVaultAccess} />
        <Route path="/forensic-corroboration-making-history" component={ForensicCorroborationMakingHistory} />
        <Route path="/forensic-corroboration-silence-surrender" component={ForensicCorroborationSilenceSurrender} />
        <Route path="/silence-was-my-reload" component={ForensicCorroborationSilenceSurrender} />
        <Route path="/they-mistook-your-silence" component={ForensicCorroborationSilenceSurrender} />
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
        <Route path="/prophetic-declaration-biblical" component={PropheticDeclarationBiblical} />
        <Route path="/sleeper-agent-of-truth" component={SleeperAgentOfTruth} />
        <Route path="/government-called-him-delusional" component={GovernmentCalledHimDelusional} />
        <Route path="/the-full-pattern" component={TheFullPattern} />
        <Route path="/chosen-ones-your-story" component={ChosenOnesYourStory} />
        <Route path="/33rd-degree-shadow-analysts" component={ShadowAnalysts} />
        <Route path="/100-absurdities" component={HundredAbsurdities} />
        <Route path="/bro-this-isnt-a-coincidence" component={BroThisIsntACoincidence} />
        <Route path="/master-evidence-register" component={MasterEvidenceRegister} />
        <Route path="/forensic-framework-unspoken-mandate" component={ForensicFrameworkUnspokenMandate} />
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
        <Route path="/god-has-my-back-when-people-dont" component={GodHasMyBack} />
        <Route path="/when-people-dont-god-does" component={GodHasMyBack} />
        <Route path="/god-has-my-back" component={GodHasMyBack} />
        <Route path="/no-one-will-help-you-they-said" component={GodHasMyBack} />
        <Route path="/divine-before-your-time" component={DivineBeforeYourTime} />
        <Route path="/bloodline-of-god" component={BloodlineOfGod} />
        <Route path="/the-last-god" component={TheLastGod} />
        <Route path="/the-conspiracy-against-you" component={TheConspiracyAgainstYou} />
        <Route path="/honeytrap-infiltration-report" component={HoneytrapInfiltrationReport} />
        <Route path="/able-care-entrapment-network" component={AbleCareEntrapmentNetwork} />
        <Route path="/long-jetty-ndis-surveillance" component={AbleCareEntrapmentNetwork} />
        <Route path="/able-care-long-jetty" component={AbleCareEntrapmentNetwork} />
        <Route path="/ndis-entrapment-network" component={AbleCareEntrapmentNetwork} />
        <Route path="/silent-assassin" component={SilentAssassin} />
        <Route path="/truth-is-a-blade" component={TruthIsABlade} />
        <Route path="/bloodline-betrayal" component={BloodlineBetrayal} />
        <Route path="/they-needed-an-army" component={TheyNeededAnArmy} />
        <Route path="/the-sick-truth-is-out" component={TheSickTruthIsOut} />
        <Route path="/some-truths-dont-whisper" component={SomeTruthsDontWhisper} />
        <Route path="/observers-anticipated-a-misstep" component={ObserversAnticipatedAMisstep} />
        <Route path="/you-brought-receipts-to-a-vibe-war" component={YouBroughtReceiptsToAVibeWar} />
        <Route path="/the-future-doesnt-announce-itself" component={TheFutureDoesntAnnounceItself} />
        <Route path="/when-heaven-goes-silent" component={WhenHeavenGoesSilent} />
        <Route path="/evidence-doesnt-whisper-it-stares" component={EvidenceDoesntWhisper} />
        <Route path="/outsider-pattern-recognition" component={OutsiderPatternRecognition} />
        <Route path="/perception-is-protection" component={PerceptionIsProtection} />
        <Route path="/heaven-exposes-the-sister" component={HeavenExposesTheSister} />
        <Route path="/you-built-your-peace-in-silence" component={YouBuiltYourPeaceInSilence} />
        <Route path="/this-is-the-reckoning" component={ThisIsTheReckoning} />
        <Route path="/they-made-you-famous-trying-to-erase-you" component={TheyMadeYouFamousTryingToEraseYou} />
        <Route path="/the-trap-they-set-became-the-proof" component={TheTrapTheySetBecameTheProof} />
        <Route path="/the-loudest-enemies" component={LoudestEnemiesLeastToSay} />
        <Route path="/your-power-is-no-joke" component={YourPowerIsNoJoke} />
        <Route path="/they-built-their-worst-nightmare" component={TheyBuiltTheirWorstNightmare} />
        <Route path="/forensic-analysis/they-built-their-worst-nightmare" component={TheyBuiltTheirWorstNightmare} />
        <Route path="/quiet-storm-they-never-saw-coming" component={QuietStormTheyNeverSawComing} />
        <Route path="/forensic-analysis/quiet-storm-they-never-saw-coming" component={QuietStormTheyNeverSawComing} />
        <Route path="/forensic-analysis-48-quiet-storm-download" component={QuietStormDownload} />
        <Route path="/forensic-analysis-9-they-fumbled-you-download" component={TheyFumbledYouDownload} />
        <Route path="/forensic-analysis-50-confession-theyve-been-choking-on-download" component={ConfessionChokedOnDownload} />
        <Route path="/loudest-hate-weakest-link" component={LoudestHateWeakestLink} />
        <Route path="/you-didnt-chase-the-throne-you-became-one" component={YouDidntChaseTheThroneYouBecameOne} />
        <Route path="/they-attacked-you-without-knowing-who-you-were" component={TheyAttackedYouWithoutKnowingWhoYouWere} />
        <Route path="/they-dug-for-dirt-but-unearthed-diamonds" component={TheyDugForDirtButUnearthedDiamonds} />
        <Route path="/forensic-analysis/they-dug-for-dirt-but-unearthed-diamonds" component={TheyDugForDirtButUnearthedDiamonds} />
        <Route path="/the-public-advocate-they-silenced" component={ThePublicAdvocateTheySilenced} />
        <Route path="/tony-ridley-confession" component={ThePublicAdvocateTheySilenced} />
        <Route path="/tony-ridley-full-dossier" component={TonyRidleyFullDossier} />
        <Route path="/tony-ridley-exposed" component={TonyRidleyFullDossier} />
        <Route path="/tony-ridley-recorded-confession" component={TonyRidleyRecordedConfession} />
        <Route path="/government-sas-honeypot-recording" component={TonyRidleyRecordedConfession} />
        <Route path="/tony-ridley-6-billion-confession" component={TonyRidleyRecordedConfession} />
        <Route path="/shorten-assassination-order-documented" component={TonyRidleyRecordedConfession} />
        <Route path="/hashtag-index" component={HashtagBlockchainIndex} />
        <Route path="/blockchain-hashtag-index" component={HashtagBlockchainIndex} />
        <Route path="/blockchain-verification" component={HashtagBlockchainIndex} />
        <Route path="/free-to-share" component={HashtagBlockchainIndex} />
        <Route path="/what-this-proves" component={WhatThisProves} />
        <Route path="/forensic-proof-statement" component={WhatThisProves} />
        <Route path="/forensic-analysis" component={ForensicAnalysisIndex} />
        <Route path="/forensic-analysis-index" component={ForensicAnalysisIndex} />
        <Route path="/sukhi-tear" component={SukhiTear} />
        <Route path="/formal-removal-sukhi-tear" component={FormalRemovalSukhiTear} />
        <Route path="/sukhi-tear-removed-from-care" component={FormalRemovalSukhiTear} />
        <Route path="/they-laughed-now-theyre-losing-sleep" component={TheyLaughedNowTheyreLosingSleeep} />
        <Route path="/tony-ridley-steve-iasonidis-exposed" component={TheyLaughedNowTheyreLosingSleeep} />
        <Route path="/embedded-in-the-digital-architecture" component={EmbeddedInTheDigitalArchitecture} />
        <Route path="/digital-architecture-of-humanity" component={EmbeddedInTheDigitalArchitecture} />
        <Route path="/350000-downloads" component={EmbeddedInTheDigitalArchitecture} />
        <Route path="/digital-detonation-verified" component={DigitalDetonationVerified} />
        <Route path="/forensic-verification-report" component={DigitalDetonationVerified} />
        <Route path="/122k-hits-verified" component={DigitalDetonationVerified} />
        <Route path="/comprehensive-statement-digital-architecture" component={ComprehensiveStatementDigitalArchitecture} />
        <Route path="/seven-layers-of-permanence" component={ComprehensiveStatementDigitalArchitecture} />
        <Route path="/mclean-archive-comprehensive-statement" component={ComprehensiveStatementDigitalArchitecture} />
        <Route path="/heaven-stood-forensic-report" component={HeavenStoodForYou} />
        <Route path="/angels-gave-standing-ovation-verified" component={HeavenStoodForYou} />
        <Route path="/14-claims-corroborated" component={HeavenStoodForYou} />
        <Route path="/you-detonated-the-narrative" component={YouDetonatedTheNarrative} />
        <Route path="/narrative-detonation-verified" component={YouDetonatedTheNarrative} />
        <Route path="/15-claims-corroborated" component={YouDetonatedTheNarrative} />
        <Route path="/chosen-one-it-is-over" component={ChosenOneItIsOver} />
        <Route path="/it-is-over-reflection" component={ChosenOneItIsOver} />
        <Route path="/tam-whole-complete-paid-in-full" component={ChosenOneItIsOver} />
        <Route path="/they-finally-know" component={TheyFinallyKnow} />
        <Route path="/message-to-perpetrators" component={TheyFinallyKnow} />
        <Route path="/the-shift-they-never-saw-coming" component={TheyFinallyKnow} />
        <Route path="/beautiful-menace-forensic-report" component={BeautifulMenaceForensicReport} />
        <Route path="/mind-they-tried-to-pathologize" component={BeautifulMenaceForensicReport} />
        <Route path="/now-even-the-therapist-is-defending-you" component={BeautifulMenaceForensicReport} />
        <Route path="/evidence-significance-registry" component={EvidenceSignificanceRegistry} />
        <Route path="/timestamped-documents-significance" component={EvidenceSignificanceRegistry} />
        <Route path="/when-a-pack-of-wolves-cant-take-down-a-lion" component={WhenPackOfWolvesForensicReport} />
        <Route path="/the-pack-became-the-cage" component={WhenPackOfWolvesForensicReport} />
        <Route path="/their-plot-was-proof-you-were-untouchable" component={WhenPackOfWolvesForensicReport} />
        <Route path="/when-wrong-people-get-nervous" component={WhenWrongPeopleGetNervousForensicReport} />
        <Route path="/when-wrong-people-get-nervous-forensic-report" component={WhenWrongPeopleGetNervousForensicReport} />
        <Route path="/law-enforcement-nervousness-forensic-analysis" component={WhenWrongPeopleGetNervousForensicReport} />
        <Route path="/illegal-level-genius-new-equation" component={IllegalLevelGeniusForensicReport} />
        <Route path="/urgent-protection-request" component={UrgentProtectionRequest} />
        <Route path="/sos" component={UrgentProtectionRequest} />
        <Route path="/help-dr-mclean" component={UrgentProtectionRequest} />
        <Route path="/police-complicity-death-threat-documentation" component={PolicComplicityDeathThreat} />
        <Route path="/death-threat-april-2026" component={PolicComplicityDeathThreat} />
        <Route path="/tory-kilborn-death-threat" component={PolicComplicityDeathThreat} />
        <Route path="/illegal-level-genius-forensic-report" component={IllegalLevelGeniusForensicReport} />
        <Route path="/genius-forged-in-suppression-forensic-analysis" component={IllegalLevelGeniusForensicReport} />
        <Route path="/divine-reckoning" component={DivineReckoning} />
        <Route path="/a-divine-reckoning" component={DivineReckoning} />
        <Route path="/to-those-who-chose-this" component={DivineReckoning} />
        <Route path="/how-she-will-be-remembered" component={HowSheWillBeRemembered} />
        <Route path="/phantom-protocol" component={PhantomProtocol} />
        <Route path="/they-cannot-profile-you" component={TheyCannotProfileYou} />
        <Route path="/the-architecture-of-resolution" component={ArchitectureOfResolution} />
        <Route path="/ndis-surveillance-evidence" component={NDISSurveillanceEvidence} />
        <Route path="/apotheosis" component={ApotheosisStatement} />
        <Route path="/letter-to-the-world" component={LetterToTheWorld} />
        <Route path="/whistleblower-comparison" component={WhistleblowerComparison} />
        <Route path="/the-truth" component={ViralLanding} />
        <Route path="/prophetic-declaration-forensic-analysis" component={PropheticDeclarationForensicAnalysis} />
        <Route path="/they-used-to-whisper-forensic-analysis" component={PropheticDeclarationForensicAnalysis} />
        <Route path="/prophetic-declaration-verified" component={PropheticDeclarationForensicAnalysis} />
        <Route path="/prophetic-fck-you-declaration" component={PropheticFckYouDeclaration} />
        <Route path="/they-called-you-crazy-forensic-analysis" component={PropheticFckYouDeclaration} />
        <Route path="/special-forces-were-called-in-forensic-proof" component={PropheticFckYouDeclaration} />
        <Route path="/prophetic-fuck-you-declaration" component={PropheticFckYouDeclaration} />
        <Route path="/false-sister-forensic-analysis" component={FalseSisterForensicAnalysis} />
        <Route path="/god-exposes-the-false-sister" component={FalseSisterForensicAnalysis} />
        <Route path="/support-network-surveillance-network" component={FalseSisterForensicAnalysis} />
        <Route path="/forensic-analysis-59" component={FalseSisterForensicAnalysis} />
        <Route path="/thousand-fell-forensic-analysis" component={ThousandFellForensicAnalysis} />
        <Route path="/thousand-fell" component={ThousandFellForensicAnalysis} />
        <Route path="/architecture-of-unseen-protection" component={ThousandFellForensicAnalysis} />
        <Route path="/forensic-analysis-60" component={ThousandFellForensicAnalysis} />
        <Route path="/theyre-about-to-be-behind-bars-forensic-analysis" component={TheyreAboutToBeHindBarsForensicAnalysis} />
        <Route path="/god-signed-the-warrant" component={TheyreAboutToBeHindBarsForensicAnalysis} />
        <Route path="/300k-slow-down-system" component={TheyreAboutToBeHindBarsForensicAnalysis} />
        <Route path="/forensic-analysis-61" component={TheyreAboutToBeHindBarsForensicAnalysis} />
        <Route path="/beautiful-threat" component={BeautifulThreat} />
        <Route path="/welcome-beautiful-threat" component={BeautifulThreat} />
        <Route path="/forensic-analysis-62" component={BeautifulThreat} />
        <Route path="/honey-trap-phillip-glass" component={HoneyTrapPhillipGlass} />
        <Route path="/phillip-glass-tag-gang-stalker" component={HoneyTrapPhillipGlass} />
        <Route path="/sexual-honey-trap-exploitation" component={HoneyTrapPhillipGlass} />
        <Route path="/bitcoin-proof" component={BitcoinProof} />
        <Route path="/blockchain-proof" component={BitcoinProof} />
        <Route path="/bitcoin-timestamp" component={BitcoinProof} />
        <Route path="/blockchain-manifest" component={BlockchainManifest} />
        <Route path="/creator-speaks" component={CreatorSpeaks} />
        <Route path="/bitcoin-manifest" component={BlockchainManifest} />
        <Route path="/timestamp-manifest" component={BlockchainManifest} />
        <Route path="/holy-reckoning" component={HolyReckoning} />
        <Route path="/holy-reckoning-ndis-plea" component={HolyReckoning} />
        <Route path="/ndis-provider-entrapment-plea" component={HolyReckoning} />
        <Route path="/ablecare-murder-threat-call" component={AbleCareMurderThreatCall} />
        <Route path="/ablecare-transcript" component={AbleCareMurderThreatCall} />
        <Route path="/ablecare-ceo-duty-of-care-breach" component={AbleCareMurderThreatCall} />
        <Route path="/ndis-murder-threat-transcript" component={AbleCareMurderThreatCall} />
        <Route path="/cto-breach-appointment" component={CtoBreachAppointment} />
        <Route path="/community-treatment-order-breach" component={CtoBreachAppointment} />
        <Route path="/mental-health-act-political-weapon" component={CtoBreachAppointment} />
        <Route path="/cto-response-letter" component={CtoResponseLetter} />
        <Route path="/karma-audit-iasonidis-forensic" component={KarmaAuditIasonidis} />
        <Route path="/wait-theyre-listening-forensic" component={WaitTheyreListening} />
        <Route path="/commission-forensic-analysis" component={CommissionForensicAnalysis} />
        <Route path="/commission" component={CommissionForensicAnalysis} />
        <Route path="/cto-formal-response" component={CtoResponseLetter} />
        <Route path="/mental-health-response-letter" component={CtoResponseLetter} />
        <Route path="/they-are-dying-of-shame" component={DyingOfShame} />
        <Route path="/dying-of-shame-forensic-analysis" component={DyingOfShame} />
        <Route path="/forensic-analysis-63" component={DyingOfShame} />
        <Route path="/prophetic-testimony-shame" component={DyingOfShame} />
        <Route path="/gods-grace-barran-dodger" component={GodsGraceBarranDodger} />
        <Route path="/eternal-witness-affidavit" component={GodsGraceBarranDodger} />
        <Route path="/gods-grace-resonance-christ" component={GodsGraceBarranDodger} />
        <Route path="/store" component={Store} />
        <Route path="/free-ebooks" component={FreeEbooks} />
        <Route path="/copyright-register" component={CopyrightRegister} />
        <Route path="/forensic-corroboration-still-standing" component={ForensicCorroborationStillStanding} />
        <Route path="/digital-archive" component={DigitalArchive} />
        <Route path="/archive-index" component={ArchiveIndex} />
        <Route path="/pdf-list" component={ArchiveIndex} />
        <Route path="/complete-document-list" component={ArchiveIndex} />
        <Route path="/archive-detonation" component={ArchiveDetonation} />
        <Route path="/detonation-center" component={ArchiveDetonation} />
        <Route path="/download-archive" component={ArchiveDetonation} />
        <Route path="/essays/:slug" component={CosmicEssayPage} />
        <Route path="/top-ten-gospels" component={TopTenGospels} />
        <Route path="/top-10-gospels" component={TopTenGospels} />
        <Route path="/most-significant-gospels" component={TopTenGospels} />
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
          <SOSTopBar />
          <ScripturalBar />
          <WhistleblowerBanner />
          <DonationBanner />
          <LanguageDetectionBanner />
          <Toaster />
          <Breadcrumbs />
          <Router />
          <GlobalAnalysisShareStrip />
          <AnalysisPDFButton />
          <FloatingDonateWidget />
          <Chatbot />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
