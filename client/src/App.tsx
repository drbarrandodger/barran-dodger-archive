import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { useReferralCapture } from "@/hooks/useReferral";
import { queryClient } from "./lib/queryClient";
import { useSiteStats } from "@/hooks/useSiteStats";
import { LiveTextReplacer } from "@/components/LiveTextReplacer";
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
import { GlobalAnalysisShareStrip } from "@/components/GlobalAnalysisShareStrip";
import { FloatingDonateWidget } from "@/components/FloatingDonateWidget";
import { FloatingShareBar } from "@/components/FloatingShareBar";
import { TextSelectionShare } from "@/components/TextSelectionShare";
import { MilestoneBar } from "@/components/MilestoneBar";
import { CourtCountdownStrip } from "@/components/CourtCountdownStrip";
import { BookmarksPanel } from "@/components/BookmarksPanel";
import { FloatingAudioPlayer } from "@/components/FloatingAudioPlayer";
import DareYouBanner from "@/components/DareYouBanner";
import { AblePointExposureBanner } from "@/components/AblePointExposureBanner";
import { ScrollShareCTA } from "@/components/ScrollShareCTA";
import { ViralActionStrip } from "@/components/ViralActionStrip";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { PDFGateProvider } from "@/components/PDFGateProvider";
import { GlobalBlockchainStamp } from "@/components/GlobalBlockchainStamp";
import Home from "@/pages/Home";
import DeclarationOfIntegrity from "@/pages/DeclarationOfIntegrity";
import GrandSynthesisOfWitness from "@/pages/GrandSynthesisOfWitness";
import CoordinatedInstitutionalMobbing from "@/pages/CoordinatedInstitutionalMobbing";
import Mission from "@/pages/Mission";
import PressKit from "@/pages/PressKit";
import SearchPage from "@/pages/SearchPage";
import PressRelease from "@/pages/PressRelease";
import Undeniable from "@/pages/Undeniable";
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
import JosephsCoatBarransMantle from "@/pages/JosephsCoatBarransMantle";
import CaseStudies from "@/pages/CaseStudies";
import TaxpayerCostAnalysis from "@/pages/TaxpayerCostAnalysis";
import Publications from "@/pages/Publications";
import EvidenceVault from "@/pages/EvidenceVault";
import Store from "@/pages/Store";
import MonetisationHub from "@/pages/MonetisationHub";
import CreativePortfolio from "@/pages/CreativePortfolio";
import FreeEbooks from "@/pages/FreeEbooks";
import Tags from "@/pages/Tags";
import CopyrightRegister from "@/pages/CopyrightRegister";
import ForensicCorroborationStillStanding from "@/pages/ForensicCorroborationStillStanding";
import { ForensicCorroborationKnivesClaps } from "@/pages/ForensicCorroborationKnivesClaps";
import ForensicCorroborationBuriedLies from "@/pages/ForensicCorroborationBuriedLies";
import ForensicCorroborationTruthCrawlsOutOfShadows from "@/pages/ForensicCorroborationTruthCrawlsOutOfShadows";
import AprilMcLeanForensicRecord from "@/pages/AprilMcLeanForensicRecord";
import TheyCalledYouCrazyProphesied from "@/pages/TheyCalledYouCrazyProphesied";
import ForensicCorroborationGoingToJail from "@/pages/ForensicCorroborationGoingToJail";
import DigitalArchive from "@/pages/DigitalArchive";
import ArchiveIndex from "@/pages/ArchiveIndex";
import ArchiveDetonation from "@/pages/ArchiveDetonation";
import NuclearDownloadPage from "@/pages/NuclearDownloadPage";
import AdminSubscribers from "@/pages/AdminSubscribers";
import ViralLanding from "@/pages/ViralLanding";
import AdministrativeAnnihilation from "@/pages/AdministrativeAnnihilation";
import RetrospectiveStatement from "@/pages/RetrospectiveStatement";
import DoctrineOfComplicity from "@/pages/DoctrineOfComplicity";
import MediaObligation from "@/pages/MediaObligation";
import SupportNetworkCollapse11Aug2026 from "@/pages/SupportNetworkCollapse11Aug2026";
import NoticeOfServiceDoctrine from "@/pages/NoticeOfServiceDoctrine";
import MachineWitness from "@/pages/MachineWitness";
import ChurchOfBarranResonanceDodger from "@/pages/ChurchOfBarranResonanceDodger";
import Dedication from "@/pages/Dedication";
import ConfidentialGovernmentDocuments from "@/pages/ConfidentialGovernmentDocuments";
import VisitorStats from "@/pages/VisitorStats";
import SpreadTheTruth from "@/pages/SpreadTheTruth";
import AIJusticeStatement from "@/pages/AIJusticeStatement";
import VerdictBeforeTheCourt from "@/pages/VerdictBeforeTheCourt";
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
import SignificanceOfSilence from "@/pages/SignificanceOfSilence";
import SoulContractAndDestiny from "@/pages/SoulContractAndDestiny";
import CosmicTransmission from "@/pages/CosmicTransmission";
import NewEvidenceMay2026 from "@/pages/NewEvidenceMay2026";
import PhotoEvidence from "@/pages/PhotoEvidence";
import ForensicEconomicValuation from "@/pages/ForensicEconomicValuation";
import WhenReceiptsAreReal from "@/pages/WhenReceiptsAreReal";
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
import ChosenOneSoloMission from "@/pages/ChosenOneSoloMission";
import ChosenVesselDeclaration from "@/pages/ChosenVesselDeclaration";
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
import PropheticTestimony from "@/pages/PropheticTestimony";
import { EverySecretChoosesASide } from "@/pages/EverySecretChosesASide";
import ForensicCorroborationDirtOnYourName from "@/pages/ForensicCorroborationDirtOnYourName";
import { TheConspiracyAgainstYou } from "@/pages/TheConspiracyAgainstYou";
import { PhantomProtocol } from "@/pages/PhantomProtocol";
import TheyCannotProfileYou from "@/pages/TheyCannotProfileYou";
import ArchitectureOfResolution from "@/pages/ArchitectureOfResolution";
import NDISSurveillanceEvidence from "@/pages/NDISSurveillanceEvidence";
import ApotheosisStatement from "@/pages/ApotheosisStatement";
import TheRecordStands from "@/pages/TheRecordStands";
import BoazAndRuth from "@/pages/BoazAndRuth";
import ProfessionalAccountability from "@/pages/ProfessionalAccountability";
import LetterToTheWorld from "@/pages/LetterToTheWorld";
import WhistleblowerComparison from "@/pages/WhistleblowerComparison";
import InversionParadox from "@/pages/InversionParadox";
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
import ChosenOneMirrorTransmission from "@/pages/ChosenOneMirrorTransmission";
import ChosenOneWelcomeOnBoard from "@/pages/ChosenOneWelcomeOnBoard";
import MirrorRespondsArchive from "@/pages/MirrorRespondsArchive";
import GameOverCheckmate from "@/pages/GameOverCheckmate";
import MirrorLieUnmasking from "@/pages/MirrorLieUnmasking";
import MirrorUnmarkedOne from "@/pages/MirrorUnmarkedOne";
import MirrorBillIsDue from "@/pages/MirrorBillIsDue";
import BeautifulMenaceForensicReport from "@/pages/BeautifulMenaceForensicReport";
import WhenPackOfWolvesForensicReport from "@/pages/WhenPackOfWolvesForensicReport";
import WhenWrongPeopleGetNervousForensicReport from "@/pages/WhenWrongPeopleGetNervousForensicReport";
import IllegalLevelGeniusForensicReport from "@/pages/IllegalLevelGeniusForensicReport";
import UrgentProtectionRequest from "@/pages/UrgentProtectionRequest";
import HowSheWillBeRemembered from "@/pages/HowSheWillBeRemembered";
import SukhiTearHorseHasBolted from "@/pages/SukhiTearHorseHasBolted";
import TheyFinallyKnow from "@/pages/TheyFinallyKnow";
import BloodlineBetrayal from "@/pages/BloodlineBetrayal";
import FamilialInnerCircleExposed from "@/pages/FamilialInnerCircleExposed";
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
import InvestmentProspectus from "@/pages/InvestmentProspectus";
import TheyCalledYouDelusional from "@/pages/TheyCalledYouDelusional";
import ForensicEntrapmentPoverty from "@/pages/ForensicEntrapmentPoverty";
import MobbingPuppetMastersPaper from "@/pages/MobbingPuppetMastersPaper";
import InternationalAcademicMonograph from "@/pages/InternationalAcademicMonograph";
import StillBreathingNotTheSameSpecies from "@/pages/StillBreathingNotTheSameSpecies";
import TheyTriedToBreakYou from "@/pages/TheyTriedToBreakYou";
import IfTheWallsCouldTalk from "@/pages/IfTheWallsCouldTalk";
import YouBeautifulClassifiedThreat from "@/pages/YouBeautifulClassifiedThreat";
import TheyMadeYouFamousTryingToEraseYou from "@/pages/TheyMadeYouFamousTryingToEraseYou";
import TheTrapTheySetBecameTheProof from "@/pages/TheTrapTheySetBecameTheProof";
import LoudestEnemiesLeastToSay from "@/pages/LoudestEnemiesLeastToSay";
import YourPowerIsNoJoke from "@/pages/YourPowerIsNoJoke";
import TheyBuiltTheirWorstNightmare from "@/pages/TheyBuiltTheirWorstNightmare";
import TheyBuiltTheirEmpireInTheDark from "@/pages/TheyBuiltTheirEmpireInTheDark";
import MothersDayPrayer2026 from "@/pages/MothersDayPrayer2026";
import CrimesAgainstHumanityConfirmed from "@/pages/CrimesAgainstHumanityConfirmed";
import ElivenChainPortalSummoning from "@/pages/ElivenChainPortalSummoning";
import TheyThoughtBuryingYouForensicReport from "@/pages/TheyThoughtBuryingYouForensicReport";
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
import TheyWillKillMeJosh from "@/pages/TheyWillKillMeJosh";
import CourtDutyOfficerStatement from "@/pages/CourtDutyOfficerStatement";
import PraiseJesusAblePointExposure from "@/pages/PraiseJesusAblePointExposure";
import ChosenOneProtheticDeclaration from "@/pages/ChosenOneProtheticDeclaration";
import SeasonOfPayback from "@/pages/SeasonOfPayback";
import JohnGottiSpiritualRealm from "@/pages/JohnGottiSpiritualRealm";
import SacredGospelsForensicThesis from "@/pages/SacredGospelsForensicThesis";
import ElijahJesusCrystalBarran from "@/pages/ElijahJesusCrystalBarran";
import PoliticalForensicDocs from "@/pages/PoliticalForensicDocs";
import VideoForensicAnalysis from "@/pages/VideoForensicAnalysis";
import TheRatsWillCome from "@/pages/TheRatsWillCome";
import ForensicPerceptionAnalysis from "@/pages/ForensicPerceptionAnalysis";
import CtoBreachAppointment from "@/pages/CtoBreachAppointment";
import CtoResponseLetter from "@/pages/CtoResponseLetter";
import KarmaAuditIasonidis from "@/pages/KarmaAuditIasonidis";
import WaitTheyreListening from "@/pages/WaitTheyreListening";
import CommissionForensicAnalysis from "@/pages/CommissionForensicAnalysis";
import DyingOfShame from "@/pages/DyingOfShame";
import GodsFuryForensicAnalysis from "@/pages/GodsFuryForensicAnalysis";
import YouBuiltABonfireForensicAnalysis from "@/pages/YouBuiltABonfireForensicAnalysis";
import { GodsGraceBarranDodger } from "@/pages/GodsGraceBarranDodger";
import { BlockchainManifest } from "@/pages/BlockchainManifest";
import BlockchainSealRegistry from "@/pages/BlockchainSealRegistry";
import PageArchiveRegistry from "@/pages/PageArchiveRegistry";
import CreatorSpeaks from "@/pages/CreatorSpeaks";
import CosmicEssayPage from "@/pages/CosmicEssayPage";
import ExponentialGospel from "@/pages/ExponentialGospel";
import ThePersecutionMandate from "@/pages/ThePersecutionMandate";
import SurvivalCalculus from "@/pages/SurvivalCalculus";
import StoryWentGlobal from "@/pages/StoryWentGlobal";
import LegalAidNSWAdviceLetter from "@/pages/LegalAidNSWAdviceLetter";
import MinisterMcAllisterNDISNotice from "@/pages/MinisterMcAllisterNDISNotice";
import TopTenGospels from "@/pages/TopTenGospels";
import ArchiveReport from "@/pages/ArchiveReport";
import ForensicFrameworkUnspokenMandate from "@/pages/ForensicFrameworkUnspokenMandate";
import ForensicSignificance2301Exhibit from "@/pages/ForensicSignificance2301Exhibit";
import NewHomePage from "@/pages/NewHomePage";
import EntryLanding from "@/pages/EntryLanding";
import About from "@/pages/About";
import TestimonyHub from "@/pages/TestimonyHub";
import WhistleblowerRecord from "@/pages/WhistleblowerRecord";
import Academy from "@/pages/Academy";
import AcademyUnit from "@/pages/AcademyUnit";
import AcademyCertificate from "@/pages/AcademyCertificate";
import Support from "@/pages/Support";
import Membership from "@/pages/Membership";
import MembersPortal from "@/pages/MembersPortal";
import AcademicSignificanceAnalysis from "@/pages/AcademicSignificanceAnalysis";
import ForensicPropheticAdjudication from "@/pages/ForensicPropheticAdjudication";
import ForensicComparativeAnalysis from "@/pages/ForensicComparativeAnalysis";
import CropCirclesDisclosure from "@/pages/CropCirclesDisclosure";
import BenDisclosure from "@/pages/BenDisclosure";
import ForensicVideoAnalysis from "@/pages/ForensicVideoAnalysis";
import OpenAccessPolicy from "@/pages/OpenAccessPolicy";
import ParadoxOfSilence from "@/pages/ParadoxOfSilence";
import CostOfErasure from "@/pages/CostOfErasure";
import CivicRecord from "@/pages/CivicRecord";
import OpenChallenge from "@/pages/OpenChallenge";
import FormalStatement from "@/pages/FormalStatement";
import GodsChosenWitness from "@/pages/GodsChosenWitness";
import ReasonsChosenWitness from "@/pages/ReasonsChosenWitness";
import PersecutionToPurpose from "@/pages/PersecutionToPurpose";
import LongitudinalArchive3643 from "@/pages/LongitudinalArchive3643";
import CrownedWitnessIndictmentNations from "@/pages/CrownedWitnessIndictmentNations";
import DeclarationSovereignVindication from "@/pages/DeclarationSovereignVindication";
import FormalNoticeNonConsent from "@/pages/FormalNoticeNonConsent";
import LegalCeaseDesistServed from "@/pages/LegalCeaseDesistServed";
import PublicDisclosureAblepointJune2026 from "@/pages/PublicDisclosureAblepointJune2026";
import AblepointBlockingCourtMay2026 from "@/pages/AblepointBlockingCourtMay2026";
import EmergencyRelocationCourtMay2026 from "@/pages/EmergencyRelocationCourtMay2026";
import CropCirclesCodedGlyphsFuture from "@/pages/CropCirclesCodedGlyphsFuture";
import DougSeveranceAblepointJune2026 from "@/pages/DougSeveranceAblepointJune2026";
import ArchitectureAnnihilationAttemptedMurder from "@/pages/ArchitectureAnnihilationAttemptedMurder";
import DigitalOppression100000WordEssay from "@/pages/DigitalOppression100000WordEssay";
import BetrayalOfHumanity from "@/pages/BetrayalOfHumanity";
import ManWhoRefusedToDisappear from "@/pages/ManWhoRefusedToDisappear";
import TheRejectedWitness from "@/pages/TheRejectedWitness";
import PhdPropheticAlgorithm from "@/pages/PhdPropheticAlgorithm";
import GodsChosenOneFinalTestimony from "@/pages/GodsChosenOneFinalTestimony";
import TheUnlikelyVessel from "@/pages/TheUnlikelyVessel";
import TheReckoningPaper from "@/pages/TheReckoningPaper";
import ArchitectureOfSilence from "@/pages/ArchitectureOfSilence";
import AdminAnalytics from "@/pages/AdminAnalytics";
import QrPage from "@/pages/QrPage";
import MartyrdomSignificance from "@/pages/MartyrdomSignificance";
import AustralianGovernmentCorruptionExposed from "@/pages/AustralianGovernmentCorruptionExposed";
import ArchiveUnerasabilityStatement from "@/pages/ArchiveUnerasabilityStatement";
import SignThePetition from "@/pages/SignThePetition";
import AcademicRecord from "@/pages/AcademicRecord";
import BroadcastKit from "@/pages/BroadcastKit";
import EmailYourMP from "@/pages/EmailYourMP";
import PrintableFactsheet from "@/pages/PrintableFactsheet";
import WhatThisIs from "@/pages/WhatThisIs";
import LgbtqPersecutionAustralia from "@/pages/LgbtqPersecutionAustralia";
import BarranDodgerTrust from "@/pages/BarranDodgerTrust";
import CocksuckerCrown from "@/pages/CocksuckerCrown";
import MasterConsolidatedLegalRecord from "@/pages/MasterConsolidatedLegalRecord";
import SystemicEndangermentWhistleblowers from "@/pages/SystemicEndangermentWhistleblowers";
import TaxpayerCostEstimation35Years from "@/pages/TaxpayerCostEstimation35Years";
import StateTerrorismForensicAnalysis from "@/pages/StateTerrorismForensicAnalysis";
import AsylumRefugeeEligibilityAnalysis from "@/pages/AsylumRefugeeEligibilityAnalysis";
import GovernmentMandates35YearForensicReport from "@/pages/GovernmentMandates35YearForensicReport";
import HistoryExposesInjusticeForensicAnalysis from "@/pages/HistoryExposesInjusticeForensicAnalysis";
import EvidenceArchive240Blockchain from "@/pages/EvidenceArchive240Blockchain";
import BlockchainRegistry from "@/pages/BlockchainRegistry";
import AhrcGangstalkingAcknowledgment from "@/pages/AhrcGangstalkingAcknowledgment";

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
      <a id="main-content" tabIndex={-1} className="sr-only">Main content</a>
      <Switch>
        <Route path="/" component={EntryLanding} />
        <Route path="/archive-home" component={NewHomePage} />
        <Route path="/about" component={About} />
        <Route path="/testimony" component={TestimonyHub} />
        <Route path="/whistleblower" component={WhistleblowerRecord} />
        <Route path="/creator-speaks" component={CreatorSpeaks} />
        <Route path="/main" component={ViralLanding} />
        <Route path="/archive" component={Home} />
        <Route path="/start-here" component={StartHere} />
        <Route path="/mission" component={Mission} />
        <Route path="/press" component={PressKit} />
        <Route path="/press-release" component={PressRelease} />
        <Route path="/search" component={SearchPage} />
        <Route path="/undeniable" component={Undeniable} />
        <Route path="/research" component={LegalResearch} />
        <Route path="/evidence" component={Evidence} />
        <Route path="/blockchain" component={Blockchain} />
        <Route path="/blockchain-registry" component={BlockchainRegistry} />
        <Route path="/prophetic-papers" component={PropheticPapers} />
        <Route path="/gospel" component={Gospel} />
        <Route path="/church" component={Church} />
        <Route path="/church-of-barran-resonance-dodger" component={ChurchOfBarranResonanceDodger} />
        <Route path="/dedication" component={Dedication} />
        <Route path="/foundational-dedication" component={Dedication} />
        <Route path="/confidential-government-documents" component={ConfidentialGovernmentDocuments} />
        <Route path="/government-documents" component={ConfidentialGovernmentDocuments} />
        <Route path="/the-foundation" component={ChurchOfBarranResonanceDodger} />
        <Route path="/new-paradigm-charter" component={ChurchOfBarranResonanceDodger} />
        <Route path="/support" component={Support} />
        <Route path="/support/success" component={Support} />
        <Route path="/membership" component={Membership} />
        <Route path="/members" component={MembersPortal} />
        <Route path="/donate" component={Donate} />
        <Route path="/contact" component={Contact} />
        <Route path="/media" component={Media} />
        <Route path="/media-must-report" component={MediaObligation} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/legal-status" component={LegalStatus} />
        <Route path="/manifesto" component={Manifesto} />
        <Route path="/josephs-coat" component={JosephsCoatBarransMantle} />
        <Route path="/josephs-coat-barrans-mantle" component={JosephsCoatBarransMantle} />
        <Route path="/joseph-parallel" component={JosephsCoatBarransMantle} />
        <Route path="/joseph-barran-parallel" component={JosephsCoatBarransMantle} />
        <Route path="/political-forensic" component={PoliticalForensicDocs} />
        <Route path="/political-forensic-docs" component={PoliticalForensicDocs} />
        <Route path="/gang-stalking" component={PoliticalForensicDocs} />
        <Route path="/v2k-mkutra-psyops" component={PoliticalForensicDocs} />
        <Route path="/video-forensic-analysis" component={VideoForensicAnalysis} />
        <Route path="/youtube-forensic-analysis" component={VideoForensicAnalysis} />
        <Route path="/forensic-video-analysis" component={VideoForensicAnalysis} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/taxpayer-cost-analysis" component={TaxpayerCostAnalysis} />
        <Route path="/publications" component={Publications} />
        <Route path="/evidence-vault" component={EvidenceVault} />
        <Route path="/administrative-annihilation" component={AdministrativeAnnihilation} />
        <Route path="/retrospective-statement" component={RetrospectiveStatement} />
        <Route path="/the-machine-bore-witness" component={MachineWitness} />
        <Route path="/machine-witness" component={MachineWitness} />
        <Route path="/ai-academic-paper" component={MachineWitness} />
        <Route path="/visitors" component={VisitorStats} />
        <Route path="/spread-the-truth" component={SpreadTheTruth} />
        <Route path="/ai-justice-statement" component={AIJusticeStatement} />
        <Route path="/verdict-before-the-court" component={VerdictBeforeTheCourt} />
        <Route path="/the-verdict-before-the-court-speaks" component={VerdictBeforeTheCourt} />
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
        <Route path="/forensic-corroboration-dirt-on-your-name" component={ForensicCorroborationDirtOnYourName} />
        <Route path="/they-threw-dirt-on-your-name" component={ForensicCorroborationDirtOnYourName} />
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
        <Route path="/forensic-significance-2301-exhibit" component={ForensicSignificance2301Exhibit} />
        <Route path="/chosen-ones-enough-is-enough" component={ChosenOnesEnoughIsEnough} />
        <Route path="/no-one-could-be-that-smart" component={NoOneCouldBeThatSmart} />
        <Route path="/the-divine-exam" component={DivineExam} />
        <Route path="/silent-checkmate" component={SilentCheckmate} />
        <Route path="/now-everybody-knows" component={NowEverybodyKnows} />
        <Route path="/chosen-one-outcast-leader" component={ChosenOneOutcastLeader} />
        <Route path="/chosen-one-solo-mission" component={ChosenOneSoloMission} />
        <Route path="/chosen-vessel-declaration" component={ChosenVesselDeclaration} />
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
        <Route path="/prophetic-testimony" component={PropheticTestimony} />
        <Route path="/every-secret-chooses-a-side" component={EverySecretChoosesASide} />
        <Route path="/the-last-god-prophetic-declaration" component={PropheticTestimony} />
        <Route path="/the-conspiracy-against-you" component={TheConspiracyAgainstYou} />
        <Route path="/honeytrap-infiltration-report" component={HoneytrapInfiltrationReport} />
        <Route path="/able-care-entrapment-network" component={AbleCareEntrapmentNetwork} />
        <Route path="/long-jetty-ndis-surveillance" component={AbleCareEntrapmentNetwork} />
        <Route path="/able-care-long-jetty" component={AbleCareEntrapmentNetwork} />
        <Route path="/ndis-entrapment-network" component={AbleCareEntrapmentNetwork} />
        <Route path="/silent-assassin" component={SilentAssassin} />
        <Route path="/truth-is-a-blade" component={TruthIsABlade} />
        <Route path="/bloodline-betrayal" component={BloodlineBetrayal} />
        <Route path="/familial-inner-circle-exposed" component={FamilialInnerCircleExposed} />
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
        <Route path="/they-built-their-empire-in-the-dark" component={TheyBuiltTheirEmpireInTheDark} />
        <Route path="/forensic-analysis/they-built-their-empire-in-the-dark" component={TheyBuiltTheirEmpireInTheDark} />
        <Route path="/forensic-analysis-57-empire-in-the-dark" component={TheyBuiltTheirEmpireInTheDark} />
        <Route path="/mothers-day-prayer-2026" component={MothersDayPrayer2026} />
        <Route path="/the-prayer-that-was-heard" component={MothersDayPrayer2026} />
        <Route path="/prayer-was-answered" component={MothersDayPrayer2026} />
        <Route path="/they-thought-burying-you-would-end-the-story" component={TheyThoughtBuryingYouForensicReport} />
        <Route path="/forensic-analysis/they-thought-burying-you" component={TheyThoughtBuryingYouForensicReport} />
        <Route path="/forensic-analysis-58-burying-you" component={TheyThoughtBuryingYouForensicReport} />
        <Route path="/eliven-chain-portal" component={ElivenChainPortalSummoning} />
        <Route path="/portal-summoning" component={ElivenChainPortalSummoning} />
        <Route path="/gospel-opens-the-portal" component={ElivenChainPortalSummoning} />
        <Route path="/creator-responds-to-the-portal" component={ElivenChainPortalSummoning} />
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
        <Route path="/mirror-of-god-chosen-one-vindication" component={ChosenOneMirrorTransmission} />
        <Route path="/the-mirror-speaks-chosen-one" component={ChosenOneMirrorTransmission} />
        <Route path="/chosen-one-vindication-mirror" component={ChosenOneMirrorTransmission} />
        <Route path="/mirror-of-god-welcome-on-board" component={ChosenOneWelcomeOnBoard} />
        <Route path="/welcome-on-board-mirror-responds" component={ChosenOneWelcomeOnBoard} />
        <Route path="/ten-sections-impossible-survival" component={ChosenOneWelcomeOnBoard} />
        <Route path="/mirror-of-god-responds-to-the-archive" component={MirrorRespondsArchive} />
        <Route path="/mirror-faces-the-archive" component={MirrorRespondsArchive} />
        <Route path="/eight-lenses-one-verdict" component={MirrorRespondsArchive} />
        <Route path="/mirror-of-god-game-over-checkmate" component={GameOverCheckmate} />
        <Route path="/game-over-mirror-confirms" component={GameOverCheckmate} />
        <Route path="/checkmate-confirmed-mirror-of-god" component={GameOverCheckmate} />
        <Route path="/mirror-of-god-lie-unmasking" component={MirrorLieUnmasking} />
        <Route path="/lie-doesnt-collapse-when-challenged" component={MirrorLieUnmasking} />
        <Route path="/mirror-names-the-unmasking" component={MirrorLieUnmasking} />
        <Route path="/mirror-of-god-unmarked-one" component={MirrorUnmarkedOne} />
        <Route path="/mirror-confirms-the-unmarked-one" component={MirrorUnmarkedOne} />
        <Route path="/thirteen-agencies-no-category" component={MirrorUnmarkedOne} />
        <Route path="/mirror-of-god-bill-is-due" component={MirrorBillIsDue} />
        <Route path="/you-rang-the-alarm-bill-is-due" component={MirrorBillIsDue} />
        <Route path="/mirror-names-the-consequence" component={MirrorBillIsDue} />
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
        <Route path="/they-will-kill-me-josh" component={TheyWillKillMeJosh} />
        <Route path="/they-will-kill-me" component={TheyWillKillMeJosh} />
        <Route path="/ablepoint-entrapment" component={TheyWillKillMeJosh} />
        <Route path="/praise-jesus-ablepoint-exposure" component={PraiseJesusAblePointExposure} />
        <Route path="/praise-jesus" component={PraiseJesusAblePointExposure} />
        <Route path="/forensic-perception-analysis" component={ForensicPerceptionAnalysis} />
        <Route path="/the-depth-they-couldnt-hold" component={ForensicPerceptionAnalysis} />
        <Route path="/depth-perception-corroboration" component={ForensicPerceptionAnalysis} />
        <Route path="/youtube-corroboration-analysis" component={ForensicPerceptionAnalysis} />
        <Route path="/the-rats-will-come" component={TheRatsWillCome} />
        <Route path="/rats-will-come" component={TheRatsWillCome} />
        <Route path="/institutional-accountability-essay" component={TheRatsWillCome} />
        <Route path="/the-building-is-sinking" component={TheRatsWillCome} />
        <Route path="/elijah-jesus-crystal-barran" component={ElijahJesusCrystalBarran} />
        <Route path="/elijah-gospel" component={ElijahJesusCrystalBarran} />
        <Route path="/elijah-jesus-barran" component={ElijahJesusCrystalBarran} />
        <Route path="/sacred-gospels-forensic-thesis" component={SacredGospelsForensicThesis} />
        <Route path="/all-faiths-analysis" component={SacredGospelsForensicThesis} />
        <Route path="/interfaith-forensic-thesis" component={SacredGospelsForensicThesis} />
        <Route path="/prophetic-significance-all-traditions" component={SacredGospelsForensicThesis} />
        <Route path="/all-gospels-one-witness" component={SacredGospelsForensicThesis} />
        <Route path="/22-traditions-corroborated" component={SacredGospelsForensicThesis} />
        <Route path="/john-gotti-spiritual-realm" component={JohnGottiSpiritualRealm} />
        <Route path="/everyone-is-shook" component={JohnGottiSpiritualRealm} />
        <Route path="/aura-shift-forensic-report" component={JohnGottiSpiritualRealm} />
        <Route path="/makaveli-soul-plane" component={JohnGottiSpiritualRealm} />
        <Route path="/quiet-apocalypse" component={JohnGottiSpiritualRealm} />
        <Route path="/season-of-payback" component={SeasonOfPayback} />
        <Route path="/they-threw-dirt-on-your-name" component={SeasonOfPayback} />
        <Route path="/forensic-corroboration-season-of-payback" component={SeasonOfPayback} />
        <Route path="/dirt-on-your-name-forensic-report" component={SeasonOfPayback} />
        <Route path="/chosen-one-payback-corroboration" component={SeasonOfPayback} />
        <Route path="/i-am-gods-chosen-one" component={ChosenOneProtheticDeclaration} />
        <Route path="/chosen-one-declaration" component={ChosenOneProtheticDeclaration} />
        <Route path="/prophetic-forensic-declaration" component={ChosenOneProtheticDeclaration} />
        <Route path="/gods-chosen-one" component={ChosenOneProtheticDeclaration} />
        <Route path="/soul-contract-declaration" component={ChosenOneProtheticDeclaration} />
        <Route path="/court-duty-officer-statement" component={CourtDutyOfficerStatement} />
        <Route path="/print-court-statement" component={CourtDutyOfficerStatement} />
        <Route path="/wyong-court-statement" component={CourtDutyOfficerStatement} />
        <Route path="/illegal-level-genius-forensic-report" component={IllegalLevelGeniusForensicReport} />
        <Route path="/genius-forged-in-suppression-forensic-analysis" component={IllegalLevelGeniusForensicReport} />
        <Route path="/divine-reckoning" component={DivineReckoning} />
        <Route path="/a-divine-reckoning" component={DivineReckoning} />
        <Route path="/to-those-who-chose-this" component={DivineReckoning} />
        <Route path="/how-she-will-be-remembered" component={HowSheWillBeRemembered} />
        <Route path="/sukhi-tear-horse-has-bolted" component={SukhiTearHorseHasBolted} />
        <Route path="/sukhi-tear-too-late" component={SukhiTearHorseHasBolted} />
        <Route path="/sukhi-tear-reckoning" component={SukhiTearHorseHasBolted} />
        <Route path="/phantom-protocol" component={PhantomProtocol} />
        <Route path="/they-cannot-profile-you" component={TheyCannotProfileYou} />
        <Route path="/the-architecture-of-resolution" component={ArchitectureOfResolution} />
        <Route path="/ndis-surveillance-evidence" component={NDISSurveillanceEvidence} />
        <Route path="/apotheosis" component={ApotheosisStatement} />
        <Route path="/the-record-stands" component={TheRecordStands} />
        <Route path="/my-boaz-is-coming" component={BoazAndRuth} />
        <Route path="/professional-accountability" component={ProfessionalAccountability} />
        <Route path="/letter-to-the-world" component={LetterToTheWorld} />
        <Route path="/whistleblower-comparison" component={WhistleblowerComparison} />
        <Route path="/inversion-paradox" component={InversionParadox} />
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
        <Route path="/page-archive-registry" component={PageArchiveRegistry} />
        <Route path="/blockchain-manifest" component={BlockchainManifest} />
        <Route path="/blockchain-seal-registry" component={BlockchainSealRegistry} />
        <Route path="/blockchain-timestamp-proof" component={BlockchainSealRegistry} />
        <Route path="/every-document-sealed" component={BlockchainSealRegistry} />
        <Route path="/bitcoin-blockchain-embedded" component={BlockchainSealRegistry} />
        <Route path="/blockchain-of-humanity" component={BlockchainSealRegistry} />
        <Route path="/creator-speaks" component={CreatorSpeaks} />
        <Route path="/bitcoin-manifest" component={BlockchainManifest} />
        <Route path="/timestamp-manifest" component={BlockchainManifest} />
        <Route path="/holy-reckoning" component={HolyReckoning} />
        <Route path="/holy-reckoning-ndis-plea" component={HolyReckoning} />
        <Route path="/ndis-provider-entrapment-plea" component={HolyReckoning} />
        <Route path="/forensic-prophetic-declaration" component={HolyReckoning} />
        <Route path="/you-picked-a-fight-with-god" component={HolyReckoning} />
        <Route path="/god-of-divine-justice" component={HolyReckoning} />
        <Route path="/chosen-witness-declaration" component={HolyReckoning} />
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
        <Route path="/gods-fury-forensic-analysis" component={GodsFuryForensicAnalysis} />
        <Route path="/forensic-analysis-79" component={GodsFuryForensicAnalysis} />
        <Route path="/gods-fury-14-declarations" component={GodsFuryForensicAnalysis} />
        <Route path="/you-built-a-bonfire-forensic-analysis" component={YouBuiltABonfireForensicAnalysis} />
        <Route path="/forensic-analysis-80" component={YouBuiltABonfireForensicAnalysis} />
        <Route path="/bonfire-forensic-analysis" component={YouBuiltABonfireForensicAnalysis} />
        <Route path="/chosen-ones-bonfire" component={YouBuiltABonfireForensicAnalysis} />
        <Route path="/you-burned-your-own-house-down" component={YouBuiltABonfireForensicAnalysis} />
        <Route path="/gods-grace-barran-dodger" component={GodsGraceBarranDodger} />
        <Route path="/eternal-witness-affidavit" component={GodsGraceBarranDodger} />
        <Route path="/gods-grace-resonance-christ" component={GodsGraceBarranDodger} />
        <Route path="/store" component={Store} />
        <Route path="/income" component={MonetisationHub} />
        <Route path="/creative-portfolio" component={CreativePortfolio} />
        <Route path="/testimony-archive" component={FreeEbooks} />
        <Route path="/tags" component={Tags} />
        <Route path="/tags/:slug" component={Tags} />
        <Route path="/copyright-register" component={CopyrightRegister} />
        <Route path="/significance-of-silence" component={SignificanceOfSilence} />
        <Route path="/soul-contract-and-destiny" component={SoulContractAndDestiny} />
        <Route path="/cosmic-transmission" component={CosmicTransmission} />
        <Route path="/new-evidence-may-2026" component={NewEvidenceMay2026} />
        <Route path="/photo-evidence" component={PhotoEvidence} />
        <Route path="/forensic-economic-valuation" component={ForensicEconomicValuation} />
        <Route path="/archive-valuation-report" component={ForensicEconomicValuation} />
        <Route path="/value-of-the-testimony" component={ForensicEconomicValuation} />
        <Route path="/when-receipts-are-real" component={WhenReceiptsAreReal} />
        <Route path="/accountability-mirror" component={WhenReceiptsAreReal} />
        <Route path="/legally-mandated-forward-plan" component={WhenReceiptsAreReal} />
        <Route path="/forensic-corroboration-still-standing" component={ForensicCorroborationStillStanding} />
        <Route path="/forensic-corroboration-knives-claps" component={ForensicCorroborationKnivesClaps} />
        <Route path="/forensic-corroboration-buried-lies" component={ForensicCorroborationBuriedLies} />
        <Route path="/forensic-corroboration-truth-crawls-out-of-shadows" component={ForensicCorroborationTruthCrawlsOutOfShadows} />
        <Route path="/april-mclean-forensic-record" component={AprilMcLeanForensicRecord} />
        <Route path="/forensic-analysis-78-they-called-you-crazy-prophesied" component={TheyCalledYouCrazyProphesied} />
        <Route path="/forensic-corroboration-going-to-jail" component={ForensicCorroborationGoingToJail} />
        <Route path="/digital-archive" component={DigitalArchive} />
        <Route path="/archive-index" component={ArchiveIndex} />
        <Route path="/pdf-list" component={ArchiveIndex} />
        <Route path="/complete-document-list" component={ArchiveIndex} />
        <Route path="/nuclear-download" component={NuclearDownloadPage} />
        <Route path="/download-all" component={NuclearDownloadPage} />
        <Route path="/archive-detonation" component={ArchiveDetonation} />
        <Route path="/detonation-center" component={ArchiveDetonation} />
        <Route path="/download-archive" component={ArchiveDetonation} />
        <Route path="/admin/subscribers" component={AdminSubscribers} />
        <Route path="/admin/analytics" component={AdminAnalytics} />
        <Route path="/essays/:slug" component={CosmicEssayPage} />
        <Route path="/exponential-gospel" component={ExponentialGospel} />
        <Route path="/the-persecution-mandate" component={ThePersecutionMandate} />
        <Route path="/survival-calculus" component={SurvivalCalculus} />
        <Route path="/story-went-global" component={StoryWentGlobal} />
        <Route path="/legal-aid-nsw-advice-letter-january-2026" component={LegalAidNSWAdviceLetter} />
        <Route path="/formal-notice-minister-mcallister-ndis-substitution" component={MinisterMcAllisterNDISNotice} />
        <Route path="/ahrc-gangstalking-acknowledgment" component={AhrcGangstalkingAcknowledgment} />
        <Route path="/ahrc-gangstalking" component={AhrcGangstalkingAcknowledgment} />
        <Route path="/government-acknowledges-gangstalking" component={AhrcGangstalkingAcknowledgment} />
        <Route path="/top-ten-gospels" component={TopTenGospels} />
        <Route path="/top-10-gospels" component={TopTenGospels} />
        <Route path="/most-significant-gospels" component={TopTenGospels} />
        <Route path="/academy" component={Academy} />
        <Route path="/academy/unit/:id" component={AcademyUnit} />
        <Route path="/academy/certificate" component={AcademyCertificate} />
        <Route path="/academic-significance-analysis" component={AcademicSignificanceAnalysis} />
        <Route path="/impartial-ai-analysis" component={AcademicSignificanceAnalysis} />
        <Route path="/archive-significance-statement" component={AcademicSignificanceAnalysis} />
        <Route path="/forensic-academic-assessment" component={AcademicSignificanceAnalysis} />
        <Route path="/ai-authored-significance-analysis" component={AcademicSignificanceAnalysis} />
        <Route path="/barran-dodger-academic-analysis" component={AcademicSignificanceAnalysis} />
        <Route path="/forensic-prophetic-adjudication" component={ForensicPropheticAdjudication} />
        <Route path="/impartial-ai-prophetic-assessment" component={ForensicPropheticAdjudication} />
        <Route path="/forensic-comparative-analysis-whistleblowers" component={ForensicComparativeAnalysis} />
        <Route path="/whistleblower-comparative-analysis" component={ForensicComparativeAnalysis} />
        <Route path="/snowden-manning-assange-barran-dodger-comparative-analysis" component={ForensicComparativeAnalysis} />
        <Route path="/heaven-files-a-case" component={ForensicPropheticAdjudication} />
        <Route path="/divine-justice-evidence-mapping" component={ForensicPropheticAdjudication} />
        <Route path="/14-findings-documented" component={ForensicPropheticAdjudication} />
        <Route path="/crop-circles-coded-glyphs-disclosure" component={CropCirclesDisclosure} />
        <Route path="/ben-disclosure" component={BenDisclosure} />
        <Route path="/forensic-video-analysis" component={ForensicVideoAnalysis} />
        <Route path="/open-access-policy" component={OpenAccessPolicy} />
        <Route path="/free-documents" component={OpenAccessPolicy} />
        <Route path="/document-access-policy" component={OpenAccessPolicy} />
        <Route path="/paradox-of-silence" component={ParadoxOfSilence} />
        <Route path="/inversion-theory" component={ParadoxOfSilence} />
        <Route path="/universal-betrayal-paradox" component={ParadoxOfSilence} />
        <Route path="/the-cost-of-my-silence" component={ParadoxOfSilence} />
        <Route path="/144-reasons-chosen-witness" component={ReasonsChosenWitness} />
        <Route path="/144-reasons-revelation" component={ReasonsChosenWitness} />
        <Route path="/persecution-to-purpose" component={PersecutionToPurpose} />
        <Route path="/from-persecution-to-purpose" component={PersecutionToPurpose} />
        <Route path="/lgbtq-resilience-essay" component={PersecutionToPurpose} />
        <Route path="/longitudinal-archive-3643" component={LongitudinalArchive3643} />
        <Route path="/3643-government-documents" component={LongitudinalArchive3643} />
        <Route path="/forensic-audit-3643" component={LongitudinalArchive3643} />
        <Route path="/crowned-witness-indictment-nations" component={CrownedWitnessIndictmentNations} />
        <Route path="/crowned-witness" component={CrownedWitnessIndictmentNations} />
        <Route path="/indictment-of-nations" component={CrownedWitnessIndictmentNations} />
        <Route path="/declaration-sovereign-vindication" component={DeclarationSovereignVindication} />
        <Route path="/sovereign-vindication" component={DeclarationSovereignVindication} />
        <Route path="/detonation-of-accountability" component={DeclarationSovereignVindication} />
        <Route path="/formal-notice-non-consent" component={FormalNoticeNonConsent} />
        <Route path="/cease-and-desist-surveillance" component={FormalNoticeNonConsent} />
        <Route path="/legal-cease-desist-served" component={LegalCeaseDesistServed} />
        <Route path="/cease-desist-ablepoint-police" component={LegalCeaseDesistServed} />
        <Route path="/public-disclosure-ablepoint-june-2026" component={PublicDisclosureAblepointJune2026} />
        <Route path="/public-disclosure-june-2026" component={PublicDisclosureAblepointJune2026} />
        <Route path="/ablepoint-blocking-court-may-2026" component={AblepointBlockingCourtMay2026} />
        <Route path="/ablepoint-court-obstruction" component={AblepointBlockingCourtMay2026} />
        <Route path="/emergency-relocation-court-may-2026" component={EmergencyRelocationCourtMay2026} />
        <Route path="/master-consolidated-legal-record" component={MasterConsolidatedLegalRecord} />
        <Route path="/systemic-endangerment-whistleblowers" component={SystemicEndangermentWhistleblowers} />
        <Route path="/taxpayer-cost-estimation-35-years" component={TaxpayerCostEstimation35Years} />
        <Route path="/taxpayer-cost-35-years" component={TaxpayerCostEstimation35Years} />
        <Route path="/taxpayer-forensic-accounting-report" component={TaxpayerCostEstimation35Years} />
        <Route path="/history-exposes-injustice-forensic-analysis" component={HistoryExposesInjusticeForensicAnalysis} />
        <Route path="/forensic-analysis-76" component={HistoryExposesInjusticeForensicAnalysis} />
        <Route path="/evidence-archive-240-blockchain-sealed-documents" component={EvidenceArchive240Blockchain} />
        <Route path="/240-blockchain-sealed-documents" component={EvidenceArchive240Blockchain} />
        <Route path="/government-cannot-deny-evidence-archive" component={EvidenceArchive240Blockchain} />
        <Route path="/government-mandates-35-year-forensic-report" component={GovernmentMandates35YearForensicReport} />
        <Route path="/government-mandates-forensic-report" component={GovernmentMandates35YearForensicReport} />
        <Route path="/retrospective-directive-model" component={GovernmentMandates35YearForensicReport} />
        <Route path="/state-terrorism-forensic-analysis" component={StateTerrorismForensicAnalysis} />
        <Route path="/state-terrorism-analysis" component={StateTerrorismForensicAnalysis} />
        <Route path="/asylum-refugee-eligibility-analysis" component={AsylumRefugeeEligibilityAnalysis} />
        <Route path="/asylum-analysis" component={AsylumRefugeeEligibilityAnalysis} />
        <Route path="/refugee-eligibility-analysis" component={AsylumRefugeeEligibilityAnalysis} />
        <Route path="/emergency-relocation-ablepoint" component={EmergencyRelocationCourtMay2026} />
        <Route path="/crop-circles-coded-glyphs-future" component={CropCirclesCodedGlyphsFuture} />
        <Route path="/coded-glyphs-from-the-future" component={CropCirclesCodedGlyphsFuture} />
        <Route path="/doug-severance-ablepoint-june-2026" component={DougSeveranceAblepointJune2026} />
        <Route path="/doug-ablepoint-severance" component={DougSeveranceAblepointJune2026} />
        <Route path="/architecture-annihilation-attempted-murder" component={ArchitectureAnnihilationAttemptedMurder} />
        <Route path="/annihilation-attempted-murder" component={ArchitectureAnnihilationAttemptedMurder} />
        <Route path="/betrayal-of-humanity" component={BetrayalOfHumanity} />
        <Route path="/ethical-collapse-civilisation" component={BetrayalOfHumanity} />
        <Route path="/why-australia-must-look" component={ManWhoRefusedToDisappear} />
        <Route path="/man-who-refused-to-disappear" component={ManWhoRefusedToDisappear} />
        <Route path="/the-rejected-witness" component={TheRejectedWitness} />
        <Route path="/rejected-witness" component={TheRejectedWitness} />
        <Route path="/phd-prophetic-algorithm" component={PhdPropheticAlgorithm} />
        <Route path="/prophetic-phd" component={PhdPropheticAlgorithm} />
        <Route path="/mclean-phd-gospel" component={PhdPropheticAlgorithm} />
        <Route path="/gods-chosen-one-final-testimony" component={GodsChosenOneFinalTestimony} />
        <Route path="/i-am-gods-chosen-one-evidence" component={GodsChosenOneFinalTestimony} />
        <Route path="/gods-chosen-one-all-traditions" component={GodsChosenOneFinalTestimony} />
        <Route path="/chosen-one-forensic-gospel" component={GodsChosenOneFinalTestimony} />
        <Route path="/gods-chosen-one-prove-wrong" component={GodsChosenOneFinalTestimony} />
        <Route path="/digital-oppression-100000-word-essay" component={DigitalOppression100000WordEssay} />
        <Route path="/digital-oppression" component={DigitalOppression100000WordEssay} />
        <Route path="/invisible-chains" component={DigitalOppression100000WordEssay} />
        <Route path="/gods-chosen-witness" component={GodsChosenWitness} />
        <Route path="/forensic-theology" component={GodsChosenWitness} />
        <Route path="/chosen-one-analysis" component={GodsChosenWitness} />
        <Route path="/the-prophetic-record" component={GodsChosenWitness} />
        <Route path="/chosen-one-forensic-paper" component={GodsChosenWitness} />
        <Route path="/the-architecture-of-silence" component={ArchitectureOfSilence} />
        <Route path="/psychology-of-erasure" component={ArchitectureOfSilence} />
        <Route path="/how-it-was-allowed" component={ArchitectureOfSilence} />
        <Route path="/the-unlikely-vessel" component={TheUnlikelyVessel} />
        <Route path="/the-reckoning-paper" component={TheReckoningPaper} />
        <Route path="/vessel-silence-reckoning" component={TheReckoningPaper} />
        <Route path="/broken-phone-reckoning" component={TheReckoningPaper} />
        <Route path="/god-does-not-call-the-equipped" component={TheUnlikelyVessel} />
        <Route path="/unlikely-vessel-theology" component={TheUnlikelyVessel} />
        <Route path="/declaration-of-integrity" component={DeclarationOfIntegrity} />
        <Route path="/grand-synthesis-of-witness" component={GrandSynthesisOfWitness} />
        <Route path="/coordinated-institutional-mobbing" component={CoordinatedInstitutionalMobbing} />
        <Route path="/cost-of-erasure" component={CostOfErasure} />
        <Route path="/civic-record" component={CivicRecord} />
        <Route path="/qr" component={QrPage} />
        <Route path="/statement-of-contributions" component={CivicRecord} />
        <Route path="/democratic-contradiction" component={CivicRecord} />
        <Route path="/open-challenge" component={OpenChallenge} />
        <Route path="/prove-this-wrong" component={OpenChallenge} />
        <Route path="/ethical-challenge" component={OpenChallenge} />
        <Route path="/formal-statement" component={FormalStatement} />
        <Route path="/statement-of-entrapment" component={FormalStatement} />
        <Route path="/v2k-statement" component={FormalStatement} />
        <Route path="/government-accountability-report" component={CostOfErasure} />
        <Route path="/administrative-annihilation-cost-analysis" component={CostOfErasure} />
        <Route path="/survival-calculus" component={CostOfErasure} />
        <Route path="/the-cost-of-killing-me" component={CostOfErasure} />
        <Route path="/crop-circles-nhi-disclosure" component={CropCirclesDisclosure} />
        <Route path="/glyphs-from-the-future" component={CropCirclesDisclosure} />
        <Route path="/crimes-against-humanity-confirmed" component={CrimesAgainstHumanityConfirmed} />
        <Route path="/state-documents-confirm-crimes" component={CrimesAgainstHumanityConfirmed} />
        <Route path="/2077-documents-mandate" component={CrimesAgainstHumanityConfirmed} />
        <Route path="/investment-prospectus" component={InvestmentProspectus} />
        <Route path="/financial-valuation" component={InvestmentProspectus} />
        <Route path="/investor-appeal" component={InvestmentProspectus} />
        <Route path="/forensic-entrapment-poverty-v2k" component={ForensicEntrapmentPoverty} />
        <Route path="/poverty-trap-failed" component={ForensicEntrapmentPoverty} />
        <Route path="/v2k-gang-stalking-forensic-analysis" component={ForensicEntrapmentPoverty} />
        <Route path="/318571-downloads" component={ForensicEntrapmentPoverty} />
        <Route path="/international-academic-monograph" component={InternationalAcademicMonograph} />
        <Route path="/un-grade-academic-monograph" component={InternationalAcademicMonograph} />
        <Route path="/interdisciplinary-forensic-examination" component={InternationalAcademicMonograph} />
        <Route path="/apex-moral-cowardice-mobbing-paper" component={MobbingPuppetMastersPaper} />
        <Route path="/the-pawns-will-defect" component={MobbingPuppetMastersPaper} />
        <Route path="/group-mobbing-forensic-analysis" component={MobbingPuppetMastersPaper} />
        <Route path="/puppet-masters-and-pawns" component={MobbingPuppetMastersPaper} />
        <Route path="/rats-will-come" component={MobbingPuppetMastersPaper} />
        <Route path="/mobbing-defection-paper" component={MobbingPuppetMastersPaper} />
        <Route path="/they-called-you-delusional" component={TheyCalledYouDelusional} />
        <Route path="/paranoid-was-prophecy" component={TheyCalledYouDelusional} />
        <Route path="/they-laughed-now-theyre-trembling" component={TheyCalledYouDelusional} />
        <Route path="/youtube-prophecy-corroborated" component={TheyCalledYouDelusional} />
        <Route path="/you-beautiful-classified-threat" component={YouBeautifulClassifiedThreat} />
        <Route path="/ghost-in-their-machine" component={YouBeautifulClassifiedThreat} />
        <Route path="/17-intelligence-databases" component={YouBeautifulClassifiedThreat} />
        <Route path="/the-file-they-cant-close" component={YouBeautifulClassifiedThreat} />
        <Route path="/if-the-walls-could-talk" component={IfTheWallsCouldTalk} />
        <Route path="/enemies-cry-in-silence" component={IfTheWallsCouldTalk} />
        <Route path="/their-tears-are-choking" component={IfTheWallsCouldTalk} />
        <Route path="/the-mask-they-lost" component={IfTheWallsCouldTalk} />
        <Route path="/they-tried-to-break-you" component={TheyTriedToBreakYou} />
        <Route path="/exposed-as-fools" component={TheyTriedToBreakYou} />
        <Route path="/the-spotlight-was-exposing-them" component={TheyTriedToBreakYou} />
        <Route path="/the-ritual-backfired" component={TheyTriedToBreakYou} />
        <Route path="/still-breathing-not-the-same-species" component={StillBreathingNotTheSameSpecies} />
        <Route path="/australian-government-corruption-exposed" component={AustralianGovernmentCorruptionExposed} />
        <Route path="/if-i-am-erased" component={MartyrdomSignificance} />
        <Route path="/martyrdom-significance" component={MartyrdomSignificance} />
        <Route path="/sign-the-petition" component={SignThePetition} />
        <Route path="/what-this-is" component={WhatThisIs} />
        <Route path="/the-short-version" component={WhatThisIs} />
        <Route path="/summary" component={WhatThisIs} />
        <Route path="/academic-record" component={AcademicRecord} />
        <Route path="/zenodo" component={AcademicRecord} />
        <Route path="/broadcast" component={BroadcastKit} />
        <Route path="/share-kit" component={BroadcastKit} />
        <Route path="/email-your-mp" component={EmailYourMP} />
        <Route path="/contact-your-mp" component={EmailYourMP} />
        <Route path="/write-to-parliament" component={EmailYourMP} />
        <Route path="/factsheet" component={PrintableFactsheet} />
        <Route path="/printable" component={PrintableFactsheet} />
        <Route path="/flyer" component={PrintableFactsheet} />
        <Route path="/martyrdom-doctrine" component={MartyrdomSignificance} />
        <Route path="/why-this-cannot-be-erased" component={ArchiveUnerasabilityStatement} />
        <Route path="/archive-unerasability" component={ArchiveUnerasabilityStatement} />
        <Route path="/statement-of-significance" component={ArchiveUnerasabilityStatement} />
        <Route path="/immortal-legacy" component={MartyrdomSignificance} />
        <Route path="/if-i-am-silenced" component={MartyrdomSignificance} />
        <Route path="/if-i-am-murdered" component={MartyrdomSignificance} />
        <Route path="/the-martyrdom-doctrine" component={MartyrdomSignificance} />
        <Route path="/doctrine-of-complicity-by-deliberate-omission" component={DoctrineOfComplicity} />
        <Route path="/11-august-2026-support-network-collapse" component={SupportNetworkCollapse11Aug2026} />
        <Route path="/notice-of-service-doctrine-complicity" component={NoticeOfServiceDoctrine} />
        <Route path="/you-metabolised-it" component={StillBreathingNotTheSameSpecies} />
        <Route path="/radiation-from-a-failed-experiment" component={StillBreathingNotTheSameSpecies} />
        <Route path="/the-leash-snapped" component={StillBreathingNotTheSameSpecies} />
        <Route path="/lgbtq-persecution-political-power" component={LgbtqPersecutionAustralia} />
        <Route path="/barran-dodger-trust" component={BarranDodgerTrust} />
        <Route path="/ethical-legal-trust" component={BarranDodgerTrust} />
        <Route path="/trust-fund" component={BarranDodgerTrust} />
        <Route path="/lgbtq-persecution-australia" component={LgbtqPersecutionAustralia} />
        <Route path="/sexual-persecution-political-power" component={LgbtqPersecutionAustralia} />
        <Route path="/cocksucker-crown" component={CocksuckerCrown} />
        <Route path="/cocksucker-crown-barran-dodger" component={CocksuckerCrown} />
        <Route path="/the-cocksucker-crown" component={CocksuckerCrown} />
        <Route component={ViralLanding} />
      </Switch>
    </>
  );
}

function SiteStatsLoader() {
  useSiteStats();
  return <LiveTextReplacer />;
}

function ReferralCapture() {
  useReferralCapture();
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <PDFGateProvider>
            <ReferralCapture />
            <SiteStatsLoader />
            <GlobalDownloadTracker />
            <ReadingProgress />
            <LanguageDetectionBanner />
            <AblePointExposureBanner />
            <Toaster />
            <Breadcrumbs />
            <Router />
            <GlobalBlockchainStamp />
            <div className="hidden sm:block"><MilestoneBar noCelebration /></div>
            <GlobalAnalysisShareStrip />
            <div className="hidden sm:block"><FloatingDonateWidget /></div>
            <FloatingShareBar />
            <TextSelectionShare />
            <Chatbot />
            <FloatingAudioPlayer />
            <CourtCountdownStrip />
            <div className="hidden sm:block"><ScrollShareCTA /></div>
            <div className="hidden sm:block"><DareYouBanner /></div>
            <ViralActionStrip />
            <NewsletterCapture />
            <BookmarksPanel />
          </PDFGateProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
