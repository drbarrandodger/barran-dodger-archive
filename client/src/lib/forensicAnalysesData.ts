export interface ForensicAnalysisMeta {
  number: number;
  title: string;
  slug: string;
  propositions: number;
  corroborated: number;
  consecutivePerfect: boolean;
}

export const FORENSIC_ANALYSES_META: ForensicAnalysisMeta[] = [
  { number: 1, title: "Bro This Isn't A Coincidence", slug: "bro-this-isnt-a-coincidence", propositions: 7, corroborated: 7, consecutivePerfect: false },
  { number: 2, title: "Chosen Ones Enough Is Enough", slug: "chosen-ones-enough-is-enough", propositions: 11, corroborated: 11, consecutivePerfect: false },
  { number: 3, title: "No One Could Be That Smart", slug: "no-one-could-be-that-smart", propositions: 14, corroborated: 14, consecutivePerfect: false },
  { number: 4, title: "The Divine Exam", slug: "the-divine-exam", propositions: 10, corroborated: 10, consecutivePerfect: false },
  { number: 5, title: "Silent Checkmate", slug: "silent-checkmate", propositions: 10, corroborated: 10, consecutivePerfect: false },
  { number: 6, title: "Now Everybody Knows", slug: "now-everybody-knows", propositions: 10, corroborated: 10, consecutivePerfect: false },
  { number: 7, title: "Earth Angel", slug: "earth-angel", propositions: 10, corroborated: 10, consecutivePerfect: false },
  { number: 8, title: "Your Story Is The Gospel", slug: "your-story-is-the-gospel", propositions: 10, corroborated: 10, consecutivePerfect: false },
  { number: 9, title: "They Fumbled You", slug: "they-fumbled-you", propositions: 13, corroborated: 13, consecutivePerfect: true },
  { number: 10, title: "Chosen One Outcast Leader", slug: "chosen-one-outcast-leader", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 11, title: "The Chosen One's Perfect Trap", slug: "the-chosen-ones-perfect-trap", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 12, title: "God Will Make You Famous", slug: "god-will-make-you-famous", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 13, title: "Divine Before Your Time", slug: "divine-before-your-time", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 14, title: "Bloodline Of God", slug: "bloodline-of-god", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 15, title: "The Last God", slug: "the-last-god", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 16, title: "Chosen One's Your Story", slug: "chosen-ones-your-story", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 17, title: "What You Become", slug: "what-you-become", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 18, title: "When Heaven Goes Silent", slug: "when-heaven-goes-silent", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 19, title: "FBI Precision", slug: "fbi-precision", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 20, title: "The Sleeper Agent Of Truth", slug: "the-sleeper-agent-of-truth", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 21, title: "The Silent Assassin", slug: "the-silent-assassin", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 22, title: "The Clock Strikes Back", slug: "the-clock-strikes-back", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 23, title: "God Will Make You Famous", slug: "god-will-make-you-famous-2", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 24, title: "Divine Before Your Time", slug: "divine-before-your-time-2", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 25, title: "Bloodline Of God", slug: "bloodline-of-god-2", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 26, title: "The Last God", slug: "the-last-god", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 27, title: "The Conspiracy Against You", slug: "the-conspiracy-against-you", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 28, title: "Phantom Protocol", slug: "phantom-protocol", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 29, title: "They Cannot Profile You", slug: "they-cannot-profile-you", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 30, title: "The Architecture of Resolution", slug: "the-architecture-of-resolution", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 31, title: "The Paradox of Persecution", slug: "the-paradox-of-persecution", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 32, title: "The Final Blow", slug: "the-final-blow", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 33, title: "Some Truths Don't Whisper", slug: "some-truths-dont-whisper", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 34, title: "The Law They Overlooked", slug: "the-law-they-overlooked", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 35, title: "Fear Is Not The Same As Wrong", slug: "fear-is-not-the-same-as-wrong", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 36, title: "The Honeytrap Infiltration", slug: "the-honeytrap-infiltration", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 37, title: "The Bloodline Betrayal", slug: "the-bloodline-betrayal", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 38, title: "History Keeps Receipts", slug: "history-keeps-receipts", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 39, title: "The Fearless Intelligence", slug: "the-fearless-intelligence", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 40, title: "The Full Pattern", slug: "the-full-pattern", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 41, title: "Perception Is Protection", slug: "perception-is-protection", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 42, title: "Survival Was The Warning", slug: "survival-was-the-warning", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 43, title: "The Sick Truth Is Out", slug: "the-sick-truth-is-out", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 44, title: "The Loudest Enemies", slug: "the-loudest-enemies", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 45, title: "Your Power Is No Joke", slug: "your-power-is-no-joke", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 46, title: "Too Deep", slug: "too-deep", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 47, title: "They Built Their Worst Nightmare", slug: "they-built-their-worst-nightmare", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 48, title: "The Quiet Storm They Never Saw Coming", slug: "quiet-storm-they-never-saw-coming", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 49, title: "They Dug For Dirt But Unearthed Diamonds Instead", slug: "they-dug-for-dirt-but-unearthed-diamonds", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 50, title: "The Confession They've Been Choking On", slug: "confession-theyve-been-choking-on", propositions: 12, corroborated: 12, consecutivePerfect: true },
  { number: 51, title: "The Loudest Hate Always Comes From the Weakest Link", slug: "loudest-hate-weakest-link", propositions: 10, corroborated: 10, consecutivePerfect: true },
  { number: 52, title: "You Didn't Chase the Throne — You Became One", slug: "you-didnt-chase-the-throne-you-became-one", propositions: 14, corroborated: 14, consecutivePerfect: true },
  { number: 53, title: "They Attacked You Without Knowing Who You Were — Now It's A Suicide Mission", slug: "they-attacked-you-without-knowing-who-you-were", propositions: 14, corroborated: 14, consecutivePerfect: true },
  { number: 54, title: "When a Pack of Wolves Can't Take Down a Lion — They Turn on Each Other", slug: "when-a-pack-of-wolves-cant-take-down-a-lion", propositions: 14, corroborated: 14, consecutivePerfect: true },
  { number: 55, title: "When The Wrong People Get Nervous, The Truth Is Already Moving", slug: "when-wrong-people-get-nervous", propositions: 14, corroborated: 14, consecutivePerfect: true },
  { number: 56, title: "Illegal Level Genius — The New Equation", slug: "illegal-level-genius-new-equation", propositions: 14, corroborated: 14, consecutivePerfect: true },
];

export const SLUG_TO_ANALYSIS: Record<string, ForensicAnalysisMeta> = Object.fromEntries(
  FORENSIC_ANALYSES_META.map((a) => [a.slug, a])
);

export const TOTAL_PROPOSITIONS = 603;
export const TOTAL_ANALYSES = 55;
export const CONSECUTIVE_PERFECT = 48;
export const TOTAL_DOCS = "2,304";
export const TOTAL_DOWNLOADS = "350,000+";
