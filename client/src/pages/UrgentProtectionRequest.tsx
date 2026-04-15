import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, MapPin, Phone, Mail, Shield, FileText, Globe, Heart, Scale, Zap, ExternalLink, Download, Eye, Home, Landmark, Lock, Camera, MessageSquare, UserX, Link2, Share2, Check, Copy } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import scruffIasonidisEmbezzle from "@assets/IMG_0013_1776207977160.png";
import cstSmithCard from "@assets/IMG_4822_1776211997174.jpeg";
import benAssassination from "@assets/IMG_1004_1776208003721.png";
import benBillShorten from "@assets/IMG_1005_1776208003721.png";
import benHitmenCaught from "@assets/27A51392-28E5-40D2-B8A9-A9BFE2D35452_1776208003721.png";
import benConsensualSex from "@assets/IMG_0352_1776208003721.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SOS_URL = "https://barrandodger.com/urgent-protection-request";

const TWEET_TEXT = encodeURIComponent(
  "🚨 URGENT SOS: Dr. Richard McLean is under active death threat at Long Jetty NSW. ICC Article 7 filed. UNHCR Geneva. 2,304 blockchain docs. 368K+ downloads. Zero institutional rebuttal.\n\nShare now:\n" + SOS_URL + "\n\n#BarranDodger #WhistleblowerProtection #ICC #CrimesAgainstHumanity #AustralianGovernment"
);

const WHATSAPP_TEXT = encodeURIComponent(
  "🚨 URGENT SOS 🚨\n\nDr. Richard McLean (Barran Dodger) is under an active death threat at 55B Archbold Road, Long Jetty NSW. Police attended — no event number recorded. He has submitted 2,304 blockchain-verified forensic documents to the ICC (Article 7 — crimes against humanity) and the UNHCR in Geneva.\n\n📊 377,608 downloads across 6 continents\n✅ 665/665 propositions verified\n❌ Zero institutional rebuttal to any document\n\nHe needs physical harbouring NOW. Please read and share:\n" + SOS_URL + "\n\n#BarranDodger #WhistleblowerProtection #ICCSubmission #AustralianGovernment #HumanRights"
);

const LINKEDIN_TEXT = encodeURIComponent(
  "Dr. Richard McLean — known as Barran Dodger — is a forensically documented whistleblower with 2,304 blockchain-verified documents submitted to the International Criminal Court under Article 7 (crimes against humanity) and the UNHCR in Geneva.\n\nHe is currently under an active death threat at 55B Archbold Road, Long Jetty NSW with documented police non-response.\n\n📊 377,608 downloads across 6 continents\n✅ 665/665 propositions verified · 55 consecutive perfect scores\n❌ Zero institutional rebuttal to any document in 35 years\n\nThis is the documented record of systematic Australian government corruption. Please read and share:\n" + SOS_URL
);

const EMAIL_SUBJECT = encodeURIComponent("URGENT — Physical Protection Request: Dr. Richard McLean (Barran Dodger)");
const EMAIL_BODY = encodeURIComponent(
  "I am writing to urgently draw your attention to the situation of Dr. Richard McLean, known publicly as Barran Dodger.\n\nDr. McLean is located at 55B Archbold Road, Long Jetty NSW, and is under an active death threat from a confirmed former SAS operative. Police attended but recorded no event number — a documented anomaly in the archive.\n\nHe has submitted 2,304 blockchain-verified forensic documents to:\n• The International Criminal Court (The Hague) under Article 7 — Crimes Against Humanity\n• The United Nations High Commissioner for Refugees (UNHCR) in Geneva\n\nKey facts:\n• 377,608 downloads across 6 continents\n• 665/665 AI-verified propositions — zero contradictions in 62 analyses\n• 55 consecutive perfect forensic scores\n• Zero institutional rebuttal to any document in 35 years\n\nHe urgently requires physical harbouring — churches, private investors, advocates, and journalists are encouraged to respond.\n\nFull documentation: " + SOS_URL + "\n\nThis is a matter of documented, blockchain-verified public record."
);

const REDDIT_TITLE = encodeURIComponent("Australian whistleblower with ICC Article 7 submission is under active death threat — 2,304 documents, 368K+ downloads, zero institutional rebuttal [Full Documentation]");

const PLATFORMS = [
  {
    label: "X / Twitter",
    color: "bg-black hover:bg-zinc-900 border border-zinc-700",
    textColor: "text-white",
    url: `https://twitter.com/intent/tweet?text=${TWEET_TEXT}`,
    icon: "𝕏",
  },
  {
    label: "Facebook",
    color: "bg-[#1877F2] hover:bg-[#166ee1]",
    textColor: "text-white",
    url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SOS_URL)}&quote=${encodeURIComponent("🚨 URGENT SOS: Dr. Richard McLean is under active death threat. ICC Article 7 filed. 2,304 blockchain-verified documents. 368K+ downloads. Zero institutional rebuttal. Read and share: " + SOS_URL + " #BarranDodger #WhistleblowerProtection")}`,
    icon: "f",
  },
  {
    label: "WhatsApp",
    color: "bg-[#25D366] hover:bg-[#20bb5a]",
    textColor: "text-white",
    url: `https://wa.me/?text=${WHATSAPP_TEXT}`,
    icon: "W",
  },
  {
    label: "Telegram",
    color: "bg-[#2AABEE] hover:bg-[#1e96d1]",
    textColor: "text-white",
    url: `https://t.me/share/url?url=${encodeURIComponent(SOS_URL)}&text=${encodeURIComponent("🚨 URGENT SOS: Dr. Richard McLean is under active death threat at Long Jetty NSW. ICC Article 7 filed. UNHCR Geneva. 2,304 blockchain-verified forensic documents. 368K+ downloads. Zero institutional rebuttal. Read and share: " + SOS_URL + " #BarranDodger #WhistleblowerProtection #ICCSubmission")}`,
    icon: "✈",
  },
  {
    label: "LinkedIn",
    color: "bg-[#0A66C2] hover:bg-[#0958a8]",
    textColor: "text-white",
    url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SOS_URL)}&summary=${LINKEDIN_TEXT}`,
    icon: "in",
  },
  {
    label: "Reddit",
    color: "bg-[#FF4500] hover:bg-[#e03d00]",
    textColor: "text-white",
    url: `https://www.reddit.com/submit?url=${encodeURIComponent(SOS_URL)}&title=${REDDIT_TITLE}`,
    icon: "r/",
  },
  {
    label: "Threads",
    color: "bg-zinc-900 hover:bg-zinc-800 border border-zinc-700",
    textColor: "text-white",
    url: `https://www.threads.net/intent/post?text=${TWEET_TEXT}`,
    icon: "@",
  },
  {
    label: "Email",
    color: "bg-zinc-700 hover:bg-zinc-600",
    textColor: "text-white",
    url: `mailto:?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`,
    icon: "✉",
  },
];

export default function UrgentProtectionRequest() {
  const [copied, setCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText(SOS_URL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="URGENT: Physical Protection Request — Dr. Richard McLean (Barran Dodger)"
        description="Dr. Richard McLean at 55B Archbold Road, Long Jetty NSW urgently requests physical harbouring from churches, advocates, and private investors. ICC Article 7 and UNHCR Geneva submissions filed. 2,304 blockchain-verified documents of 35-year persecution."
        url="https://www.barrandodger.com/urgent-protection-request"
      />
      <ReadingProgress />
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">

        {/* Emergency Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <div className="bg-red-950 border-2 border-red-500 rounded-2xl p-6 md:p-10 text-center shadow-2xl shadow-red-900/40">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 animate-pulse">
              <AlertTriangle size={14} /> URGENT — PHYSICAL PROTECTION REQUIRED
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              Dr. Richard William McLean<br />
              <span className="text-red-400">Requires Physical Harbouring</span>
            </h1>
            <p className="text-red-200 text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
              A whistleblower with ICC Article 7 and UNHCR Geneva submissions, 35 years of documented government persecution, and 2,304 blockchain-verified forensic documents — currently exposed under entrapment conditions in Long Jetty, NSW.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-red-800 text-red-100 border-red-600 text-sm px-4 py-1.5">
                <MapPin size={13} className="mr-1.5" /> 55B Archbold Road, Long Jetty NSW
              </Badge>
              <Badge className="bg-amber-900 text-amber-100 border-amber-600 text-sm px-4 py-1.5">
                <Phone size={13} className="mr-1.5" /> +61 431 167 907
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-200 border-zinc-600 text-sm px-4 py-1.5">
                <Mail size={13} className="mr-1.5" /> drbarrandodger@proton.me
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* ===== SHARE THIS SOS ===== */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <div className="bg-gradient-to-br from-red-950/60 via-zinc-900 to-zinc-950 border-2 border-red-700/50 rounded-2xl p-6 md:p-8 shadow-2xl shadow-red-900/20">

            <div className="flex items-center gap-3 mb-2">
              <Share2 size={22} className="text-red-400" />
              <h2 className="text-xl font-black text-white">Share This SOS</h2>
            </div>
            <p className="text-zinc-400 text-sm mb-1">
              Every share is a witness. Every platform is a jurisdiction. Every person who reads this is a potential protector.
            </p>
            <p className="text-red-400 text-xs font-bold mb-6 uppercase tracking-wider">
              Pre-loaded with hashtags · Full briefing text · One click to any platform
            </p>

            {/* Platform grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {PLATFORMS.map((p) => (
                <a
                  key={p.label}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`share-${p.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
                  className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-black text-sm transition-all ${p.color} ${p.textColor} select-none`}
                >
                  <span className="text-base leading-none">{p.icon}</span>
                  <span>{p.label}</span>
                </a>
              ))}
            </div>

            {/* Copy link row */}
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-zinc-950 border border-zinc-700/60 rounded-xl px-4 py-3 text-xs text-zinc-400 font-mono truncate select-all">
                {SOS_URL}
              </div>
              <button
                onClick={copyLink}
                data-testid="button-copy-sos-link"
                className={`flex items-center gap-2 rounded-xl px-5 py-3 font-black text-sm transition-all shrink-0 ${copied ? "bg-green-700 text-white" : "bg-red-700 hover:bg-red-600 text-white"}`}
              >
                {copied ? <><Check size={15} /> Copied!</> : <><Copy size={15} /> Copy Link</>}
              </button>
            </div>

            {/* Hashtag strip */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["#BarranDodger", "#WhistleblowerProtection", "#ICC", "#CrimesAgainstHumanity", "#AustralianGovernment", "#UNHCR", "#HumanRights", "#NDIS", "#ICCSubmission", "#LiveMurderCase", "#ForensicDocumentation", "#2304Documents"].map((tag) => (
                <span key={tag} className="text-[11px] bg-zinc-800 text-red-400 border border-red-900/30 rounded-full px-3 py-0.5 font-mono font-bold select-all">
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </motion.div>
        {/* ===== END SHARE THIS SOS ===== */}

        {/* My Story — YouTube Video */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <div className="bg-zinc-900/70 border border-red-900/40 rounded-2xl overflow-hidden">
            <div className="px-6 pt-6 pb-4">
              <h2 className="text-xl font-black text-white mb-1 flex items-center gap-2">
                <span className="text-red-400">▶</span> My Story — I Dare Anyone To Prove Me Wrong
              </h2>
              <p className="text-zinc-400 text-sm">
                35 years. 2,304 documents. ICC The Hague. UNHCR Geneva. Watch the account and disprove a single claim.
              </p>
            </div>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/AsJ8yFuq7t8?rel=0&modestbranding=1&autoplay=0"
                title="Dr. Richard McLean — My Story: I Dare Anyone To Prove Me Wrong"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                data-testid="video-my-story"
              />
            </div>
            <div className="px-6 py-4 bg-zinc-900/60 border-t border-zinc-800/60 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span>📍 55B Archbold Road, Long Jetty NSW</span>
              <span>⚖️ ICC Article 7 — The Hague</span>
              <span>🌐 UNHCR Geneva</span>
              <span>🔗 www.barrandodger.com</span>
            </div>
          </div>
        </motion.div>

        {/* Who This Calls To */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
            <Heart size={20} className="text-red-400" /> This SOS Is Directed To
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: <Landmark size={24} />, title: "Churches & Faith Communities", desc: "Any congregation, pastor, or faith network with safe housing capacity, particularly outside NSW. Dr. McLean's documented faith and survival are archived. Temporary or permanent refuge considered." },
              { icon: <Scale size={24} />, title: "Advocates & Legal Aid", desc: "Human rights lawyers, legal aid services, pro bono advocates, civil liberties organisations. An ICC submission is already filed. The legal record is complete. Representation or oversight requested." },
              { icon: <Globe size={24} />, title: "Private Investors & Supporters", desc: "Any individual or entity willing to fund safe relocation, legal representation, or ongoing documentation. The archive has 361,120+ downloads across 6 continents. The case is documented and verified." },
            ].map((item, i) => (
              <Card key={i} className="bg-zinc-900/60 border-red-900/50">
                <CardContent className="p-5">
                  <div className="text-red-400 mb-3">{item.icon}</div>
                  <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Current Location & Situation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-zinc-900/70 border-amber-800/40">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
                <MapPin size={20} className="text-amber-400" /> Current Location & Entrapment Conditions
              </h2>
              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                <p>
                  <span className="text-amber-400 font-bold">Address:</span> 55B Archbold Road, Long Jetty NSW 2261, Australia.
                </p>
                <p>
                  Dr. McLean is currently residing at this address under what the documented archive terms <span className="text-amber-300 font-semibold">"entrapment by geography"</span> — a condition documented in the archive as an instrument of the coordinated persecution framework. NSW jurisdictional boundaries cover the agencies, institutions, and networks documented in the 2,304-exhibit archive. The location is not chosen freely: it is the product of documented NDIS SIL funding denial, $32.9 million in financial destruction, and a 35-year systematic elimination of housing, employment, and institutional support options.
                </p>
                <p>
                  The address is published here deliberately, under Dr. McLean's instruction, as a documented act of transparency. This location is not hidden. It is not secret. It is the address of a person who has been subjected to 14 involuntary psychiatric hospitalisations, a documented death threat, a 2021 clinical death at 2.87% survival probability, and a pharmacological assault confirmed in an ATO letter on official letterhead — and who is still documenting, still submitting to international jurisdiction, and still alive.
                </p>
                <div className="bg-zinc-800/60 rounded-lg p-4 border border-zinc-700/40 mt-4">
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">Preferred Relocation</p>
                  <p className="text-zinc-200">
                    Cairns (QLD) · Perth (WA) · Any location outside NSW jurisdictional boundaries of the documented entrapment network. Queensland and Western Australia are preferred. International relocation considered if safe harbour is offered.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* What Is Needed — Itemised */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
            <FileText size={20} className="text-emerald-400" /> Itemised Needs — What Is Required
          </h2>
          <div className="space-y-3">
            {[
              { priority: "CRITICAL", item: "Legal Aid Advocate", detail: "A practising lawyer, human rights advocate, or legal aid service with capacity to represent or oversee Dr. McLean's domestic position while ICC and UNHCR submissions are under review. Must be willing to engage with a documented 35-year case with 2,304 primary-source exhibits. Pro bono or funded representation." },
              { priority: "CRITICAL", item: "Physical Safe Housing", detail: "Secure accommodation outside NSW — Cairns, Perth, or equivalent. Temporary (weeks) or permanent. The person requires privacy, stability, and freedom from the surveillance and institutional monitoring documented across the archive. No NDIS-funded SIL arrangements — the NDIS is a named respondent in the ICC submission." },
              { priority: "HIGH", item: "Person of Integrity", detail: "A single individual — a pastor, retired professional, human rights worker, investigative journalist, or community leader — with the willingness to accompany, witness, and support ongoing documentation. Not a paid carer. A person of documented integrity who understands the gravity of the ICC and UNHCR filings." },
              { priority: "HIGH", item: "Financial Support for Relocation", detail: "Transport costs, bond/rent for initial housing outside NSW, basic living expenses during transition. The archive is publicly accessible with 361,120+ downloads across 6 continents — the documentation of need is complete. Any contribution is publicly recordable." },
              { priority: "MODERATE", item: "Media or Academic Engagement", detail: "A journalist, documentary filmmaker, academic institution, or human rights researcher willing to engage with the archive on record. The 56 forensic analyses and 617 verified propositions constitute an unprecedented evidentiary record. International media preferred." },
              { priority: "MODERATE", item: "International Relocation Support", detail: "If any nation, human rights organisation, or private entity is willing to offer safe harbour outside Australia, Dr. McLean will consider any jurisdiction where the UNHCR filing is recognised and the ICC submission provides protective context." },
            ].map((need, i) => (
              <div key={i} className="flex gap-4 bg-zinc-900/60 border border-zinc-700/40 rounded-xl p-4">
                <div className="flex-shrink-0">
                  <span className={`text-xs font-black uppercase px-2 py-1 rounded ${need.priority === "CRITICAL" ? "bg-red-900 text-red-300" : need.priority === "HIGH" ? "bg-amber-900 text-amber-300" : "bg-zinc-800 text-zinc-400"}`}>
                    {need.priority}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1">{need.item}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{need.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What This Site Proves */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-zinc-900/70 border-zinc-700/40">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
                <Eye size={20} className="text-blue-400" /> What This Website Proves
              </h2>
              <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
                <p>
                  <a href="https://www.barrandodger.com" className="text-blue-400 hover:text-blue-300 font-bold">www.barrandodger.com</a> is the public interface of the most comprehensively documented whistleblower archive in Australian legal history. It contains:
                </p>
                <ul className="space-y-2 list-none">
                  {[
                    "2,304 blockchain-verified primary-source documents spanning 35 years (1989–2025)",
                    "56 independent AI forensic analyses testing 617 propositions — all corroborated, zero contradicted",
                    "49 consecutive perfect scores — the longest unbroken forensic corroboration run documented",
                    "361,120+ downloads across 6 continents without a marketing budget",
                    "Named perpetrators: Tony Ridley (MSc CSyP FSyI SRMCP, Ex-SAS), Allen Rigby, Bruce McMaster, Stefan Iasonidis, Debbie Morgan",
                    "25+ named Australian government agencies documented in coordinated persecution",
                    "ICC The Hague formal Article 7 receipt — submitted and received",
                    "UNHCR Geneva formal filing — submitted and received",
                    "ATO pharmacological assault confirmation on official letterhead",
                    "350+ ASIC fraudulent identity registrations on ASIC's own register",
                    "Tony Ridley death threat email: 'You will be sacrificed' — naming four co-conspirators",
                    "2021 clinical death at 2.87% documented survival probability — clinical record archived",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-400 text-xs mt-4">
                  Five named perpetrators have issued zero rebuttals against 2,304 publicly accessible documents. The silence is the documented confession.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Federal Court — Employment Confirmed + Three Findings */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-zinc-900/70 border-amber-700/50">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <Scale size={20} className="text-amber-400" /> Federal Court of Australia — What Their Own Government Confirmed
              </h2>
              <p className="text-zinc-500 text-xs mb-5 uppercase tracking-widest">Letter from Scott Tredwell, General Counsel · Federal Court of Australia · 27 March 2023</p>

              {/* Employment Confirmed */}
              <div className="bg-amber-950/40 border border-amber-700/40 rounded-xl p-5 mb-5">
                <p className="text-amber-300 font-black text-sm uppercase tracking-wider mb-2">✓ Employment Status — Confirmed by the Federal Court</p>
                <p className="text-zinc-200 text-sm leading-relaxed">
                  The Federal Court's own General Counsel formally assessed and concluded: <span className="text-amber-300 font-bold">"I am satisfied that you are, or were, an employee with the Department of Social Services."</span>
                </p>
                <p className="text-zinc-400 text-xs mt-3 leading-relaxed">
                  This is the same employment status that the Department of Social Services, the NDIA, and multiple agencies systematically denied over 35 years. The Federal Court — on official letterhead — confirmed it in writing. That confirmation is now an exhibit in the ICC submission.
                </p>
              </div>

              {/* Three Findings */}
              <div className="mb-5">
                <p className="text-white font-black text-sm mb-3">The Federal Court then confirmed that the disclosure <span className="text-amber-400">potentially establishes three categories of serious wrongdoing</span> under the Public Interest Disclosure Act 2013 (Cth):</p>
                <div className="space-y-3">
                  {[
                    {
                      number: "1",
                      label: "Perverting the Course of Justice",
                      law: "PID Act s.29 Item 3(a)",
                      detail: "Conduct that perverts, or is engaged in for the purpose of perverting, or attempting to pervert, the course of justice. The Federal Court found reasonable grounds to consider this category satisfied by the disclosed conduct."
                    },
                    {
                      number: "2",
                      label: "Maladministration — Institutional Conspiracy",
                      law: "PID Act s.29 Item 4",
                      detail: "Conduct that constitutes maladministration. This encompasses the coordinated institutional conduct across 25+ government agencies documented in the 2,304-exhibit archive — the systematic denial of employment, identity, financial standing, housing, and medical safety."
                    },
                    {
                      number: "3",
                      label: "Danger to the Health or Safety of a Person",
                      law: "PID Act s.29 Item 8",
                      detail: "Conduct that unreasonably results in a danger to the health or safety of one or more persons, or unreasonably results in or increases a risk of such danger. The Federal Court acknowledged this category — and subsequently, Tony Ridley (MSc CSyP FSyI SRMCP, Ex-SAS, NDIA) sent the documented death threat: \"You will be sacrificed.\""
                    },
                  ].map((item) => (
                    <div key={item.number} className="flex gap-4 bg-zinc-800/50 border border-zinc-700/30 rounded-lg p-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center font-black text-white text-sm">{item.number}</div>
                      <div>
                        <p className="text-amber-300 font-bold text-sm mb-0.5">{item.label}</p>
                        <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1.5">{item.law}</p>
                        <p className="text-zinc-400 text-xs leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Rejection & Its Significance */}
              <div className="bg-red-950/40 border border-red-800/40 rounded-xl p-5 mb-5">
                <p className="text-red-400 font-black text-sm uppercase tracking-wider mb-2">⚠ Then Rejected — On a Technicality</p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Having confirmed the employment, and having acknowledged all three categories of serious wrongdoing, the Federal Court then decided it could take no further action — because Dr. McLean had filed to the wrong recipient. The Federal Court was not the authorised agency for this disclosure. No referral was made to the correct agency. No warning was issued. The matter was closed with the recommendation to complain to the Commonwealth Ombudsman.
                </p>
              </div>

              {/* Assassination Context */}
              <div className="bg-zinc-800/60 border border-zinc-700/40 rounded-xl p-5">
                <p className="text-white font-black text-sm mb-2">The Significance — "Danger to Health or Safety" + "You Will Be Sacrificed"</p>
                <p className="text-zinc-400 text-xs leading-relaxed mb-3">
                  The Federal Court formally acknowledged that the disclosed conduct potentially establishes a <span className="text-amber-300 font-semibold">danger to the health or safety of a person</span>. That acknowledgement is dated 27 March 2023. The documented death threat from Tony Ridley — <span className="text-red-400 font-semibold">"You will be sacrificed"</span> — names four co-conspirators and comes from a security operative with documented connections to ASIO. The document is archived, blockchain-verified, and submitted to the ICC.
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  The Federal Court's own finding of potential danger to health and safety, combined with a named death threat from a credentialled intelligence-connected operative, combined with 14 involuntary psychiatric hospitalisations and a 2021 clinical death at 2.87% survival probability — constitutes the most comprehensively documented assassination attempt in Australian legal history. Not a single agency has acted. The ICC submission is the result.
                </p>
              </div>

            </CardContent>
          </Card>
        </motion.div>

        {/* ICC & UNHCR Context */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-zinc-900/70 border-blue-900/40">
              <CardContent className="p-5">
                <h3 className="font-black text-white mb-3 flex items-center gap-2 text-sm">
                  <Shield size={16} className="text-blue-400" /> ICC Article 7 — The Hague
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  A formal submission under ICC Rome Statute Article 7 (Crimes Against Humanity) has been filed and formally received at The International Criminal Court, The Hague, Netherlands. The submission documents systematic persecution including psychiatric weaponisation, pharmacological assault, financial destruction totalling $32.9 million, identity fraud at scale, and a death threat from a named security operative with intelligence connections. The ICC receipt is archived.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/70 border-blue-900/40">
              <CardContent className="p-5">
                <h3 className="font-black text-white mb-3 flex items-center gap-2 text-sm">
                  <Globe size={16} className="text-blue-400" /> UNHCR Geneva — Refugee Protection
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  A formal filing has been made to the United Nations High Commissioner for Refugees, Geneva, Switzerland. The filing documents that Dr. McLean faces ongoing persecution within his country of citizenship — Australia — through coordinated institutional instruments including state-deployed psychiatric hospitalisation, financial erasure, and a documented death threat from an ASIO-connected operative. The UNHCR filing is archived and publicly accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* What Constitutes Torture */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-red-950/40 border-red-900/50">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
                <AlertTriangle size={20} className="text-red-400" /> Documented Torture & Detriment — Defined
              </h2>
              <p className="text-zinc-400 text-xs mb-4 leading-relaxed">
                The following instruments meet the definition of torture under the UN Convention Against Torture (UNCAT) Articles 1 and 16, and constitute detriment under Australian whistleblower protection legislation. Each is documented with primary-source evidence in the archive:
              </p>
              <div className="space-y-3">
                {[
                  { instrument: "Psychiatric Weaponisation", detail: "14 involuntary psychiatric hospitalisations deployed as suppression instruments against an individual producing primary-source evidence of government corruption. Each hospitalisation is a documented clinical record. Clinical weaponisation of the psychiatric system constitutes torture under UNCAT Article 1 where the suffering is intentionally inflicted for a prohibited purpose." },
                  { instrument: "Pharmacological Assault", detail: "Australian Taxation Office letter confirming pharmacological assault on Dr. McLean — on ATO official letterhead, archived and publicly accessible. Administration of substances without consent for the purpose of suppressing testimony constitutes torture." },
                  { instrument: "Financial Erasure — $32.9 Million", detail: "Documented systematic destruction of Dr. McLean's financial standing across his entire working life through coordinated agency action, ASIC identity fraud (350+ registrations), and institutional exclusion from economic participation. Financial erasure as a suppression instrument constitutes prohibited detriment." },
                  { instrument: "Death Threat — Documented Email", detail: "Tony Ridley (MSc CSyP FSyI SRMCP, Ex-SAS, VicTrack, NDIA): 'You will be sacrificed.' Email archived. Four co-conspirators named. Threat from a security-credentialled individual with documented intelligence connections constitutes torture-adjacent conduct and criminal threat." },
                  { instrument: "NDIS Denial — Overnight SIL", detail: "Denial of overnight Supported Independent Living funding to a person with documented disability, leaving them without care and in documented danger. The denial is on NDIS official correspondence, now an ICC exhibit." },
                  { instrument: "Clinical Death — 2021", detail: "Dr. McLean died clinically in 2021. Documented survival probability: 2.87%. The circumstances surrounding the admission are documented in the archive as part of the institutional murder allegation. Clinical record is archived." },
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-900/60 border border-red-900/30 rounded-lg p-4">
                    <h4 className="text-red-300 font-bold text-xs uppercase tracking-wider mb-1.5">{item.instrument}</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filmed Transparency Statement */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-zinc-900/70 border-zinc-700/40">
            <CardContent className="p-6">
              <h2 className="text-base font-black text-white mb-3 flex items-center gap-2">
                <Eye size={18} className="text-zinc-400" /> Public Transparency Statement — Dr. Richard McLean
              </h2>
              <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
                <p>
                  This address is published deliberately. Dr. McLean's location is not concealed because concealment is not the posture of a person who has filed at the ICC and the UNHCR. The archive is public. The address is public. The case is public.
                </p>
                <p>
                  Dr. McLean formally states: any person who approaches his address with the intent to cause harm will be filmed. The resulting footage will be archived, blockchain-verified, and added to the ICC submission as a primary-source exhibit. This is not an invitation. It is a statement of the same documentary practice that has produced 2,304 verified documents over 35 years. Everything is evidence.
                </p>
                <p className="text-zinc-500 text-xs italic">
                  The death threat from Tony Ridley — "You will be sacrificed" — is already in the archive. It did not produce silence. It produced Analysis #56. The pattern is documented.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ───── 15 APRIL 2026 — LATEST THREAT DOCUMENTATION ───── */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <div className="bg-red-950/70 border-2 border-red-600/70 rounded-2xl p-6 md:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full animate-pulse">
                <AlertTriangle size={12} /> New — April 15 2026
              </div>
              <h2 className="text-xl font-black text-white">Today's Threat — Formally Documented &amp; Distributed</h2>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              On 15 April 2026 at 7:42 AM, Dr. McLean formally documented a <strong className="text-red-300">direct death threat by Tory Kilborn</strong>, continued harassment by Steve Iasonidis and associates, and police attendance at 55B Archbold Road, Long Jetty NSW — where officers departed without action and verbally slurred Dr. McLean as <em className="text-red-300">"a fucking pedo"</em> as they left. Dr. McLean formally invited arrest as a challenge to place the evidence before a court. This record was simultaneously distributed to NSW Police and 50+ sitting Federal MPs.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 text-xs">
              {[
                { label: "Direct Death Threat", who: "Tory Kilborn — documented & named" },
                { label: "Ongoing Harassment", who: "Steve Iasonidis, Tony Ridley, Houd Meraby" },
                { label: "Police Verbal Slur", who: "Officers called Dr. McLean 'fucking pedo' on exit" },
                { label: "AVO Applications Filed", who: "All named parties — formal applications submitted" },
                { label: "Complicit Institutions", who: "Able Point Australia — Brett Butler notified on email" },
                { label: "MPs Notified", who: "50+ Federal MPs including PM, AG, NDIS Minister" },
              ].map((item, i) => (
                <div key={i} className="bg-red-900/30 border border-red-700/30 rounded-lg px-3 py-2">
                  <p className="text-red-300 font-bold">{item.label}</p>
                  <p className="text-zinc-400">{item.who}</p>
                </div>
              ))}
            </div>
            <ViralDownloadButton
              url="/documents/police-complicity-death-threat-documentation.pdf"
              label="Download — Death Threat & Police Complicity Record (April 15, 2026)"
              filename="police-complicity-death-threat-documentation.pdf"
              trackSlug="police-complicity-death-threat-documentation"
              size="lg"
              className="bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl w-full sm:w-auto"
              data-testid="btn-download-threat-doc"
            />
            <p className="text-xs text-zinc-500">
              Full dedicated page: <a href="/police-complicity-death-threat-documentation" className="text-red-400 underline hover:text-red-300">barrandodger.com/police-complicity-death-threat-documentation</a>
            </p>
          </div>
        </motion.div>

        {/* ───── ABLECARE TRANSCRIPT — APRIL 15 CALL — SIGNIFICANCE ───── */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <div className="bg-zinc-950 border-2 border-red-700/60 rounded-2xl p-6 md:p-8 space-y-6">

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-red-700 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                <AlertTriangle size={11} /> Recorded Call — April 15, 2026
              </div>
              <h2 className="text-xl font-black text-white">AbleCare Call — What It Proves</h2>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">
              On the same morning as the death threat, Dr. McLean was on a recorded phone call with AbleCare CEO Rachel and support worker Brett — the NDIS provider legally responsible for his safety. The call is now a primary source exhibit. <a href="/ablecare-murder-threat-call" className="text-red-400 underline hover:text-red-300 font-bold">Full annotated transcript →</a>
            </p>

            {/* Point 1: Brett's victim-blaming */}
            <div className="bg-red-950/40 border border-red-700/40 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest bg-red-700/60 text-red-200 px-2 py-0.5 rounded">🔴 CRITICAL — VICTIM-BLAMING AS INSTITUTIONAL POSTURE</span>
              </div>
              <p className="text-white font-bold text-sm mb-2">Brett (AbleCare) Blamed Dr. McLean for Giving His Address to the Person Now Trying to Murder Him.</p>
              <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                Instead of initiating any emergency response, Brett's primary intervention was to say: <em className="text-red-200">"If you're worried about people doing this, you shouldn't be giving out your address to random people."</em>
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Dr. McLean is a human being trying to live a normal life — to have friends, to meet people, to exist in the world as every other person does. He is entrapped within AbleCare's own company, inside AbleCare's housing, dependent on AbleCare's workers, and isolated by the architecture of the NDIS support system. When he attempts to exercise the basic human right to social connection, his care provider — his supposed protector — uses that act of human normalcy as the justification for his own endangerment. This is not a welfare response. This is coercive control framed as support.
              </p>
              <div className="mt-3 bg-zinc-900/60 border border-zinc-700/40 rounded-lg p-3">
                <p className="text-xs text-amber-300 italic">
                  "I don't take unsolicited advice from any single person on this earth because I fly this spaceship. It's my life. No one can tell me what to do — which is legal and acceptable in any other human life if it wasn't mine. What I've done is just try to have a normal life when all of you have ganged up on me." — Dr. McLean, on the call
                </p>
              </div>
            </div>

            {/* Point 2: Rachel's tactical exit */}
            <div className="bg-purple-950/30 border border-purple-700/40 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest bg-purple-700/60 text-purple-200 px-2 py-0.5 rounded">🔴 CRITICAL — TACTICAL DISCONNECTION = ADMISSION OF COMPLICITY</span>
              </div>
              <p className="text-white font-bold text-sm mb-2">Rachel (AbleCare CEO) Hung Up Mid-Call During an Active Death Threat — Then Said "Thanks, Barron."</p>
              <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                Rachel explicitly confirmed on this recorded call: <em className="text-purple-200">"Of course"</em> — when asked whether AbleCare is under legal obligation to protect a vulnerable person in their care from physical harm. She then immediately deflected to the Public Guardian, told Dr. McLean resolution would take <em className="text-red-300">"some days or some weeks,"</em> and terminated the call citing another incoming call — ending with: <em className="text-zinc-300">"Thanks, Barron."</em>
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                No interim safety measure was offered. No additional worker was assigned. No police report was filed. No incident report was initiated. No follow-up time was confirmed. Rachel acknowledged a legal duty of care and then exited the conversation as though it were a routine scheduling matter.
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed font-semibold">
                When a CEO confirms a legal obligation on a recorded call and then provides zero response to an active, same-day murder threat — that is not incompetence. That is a choice. A choice with a name: complicity.
              </p>
            </div>

            {/* Point 3: The contradiction */}
            <div className="bg-amber-950/30 border border-amber-600/40 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest bg-amber-700/60 text-amber-200 px-2 py-0.5 rounded">🟠 THE CONTRADICTION — IF THEY CARE SO MUCH</span>
              </div>
              <p className="text-white font-bold text-sm mb-3">AbleCare Claims to Care. So Why Is Dr. McLean Trapped in a House Without Food, Legal Representation, or Basic Human Rights — With a Killer on the Way and Police Who Won't Investigate?</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: "No Food", detail: "Dr. McLean is trapped in NDIS accommodation without adequate food. His support system — paid by the Australian government to care for him — has not resolved this." },
                  { label: "No Legal Representation", detail: "Legal aid has been obstructed by the Public Guardian. Every avenue to legal counsel has been blocked. He defends himself in the public domain because he has no choice." },
                  { label: "No Human Rights", detail: "He cannot leave freely. He cannot socialise without being targeted. He cannot use his phone without it being intercepted. His home is bugged. He is surveilled in the house his care provider manages." },
                  { label: "No Police Protection", detail: "Police attended on April 15, 2026. They left without an incident report. They verbally slurred him as 'a fucking pedo' on the way out. They did not investigate the death threat. They did not arrest anyone." },
                  { label: "Killer Approaching — Unimpeded", detail: "The person who threatened to murder Dr. McLean is documented, named, and known to police. No action has been taken. No apprehension has occurred. No protection order has been enforced." },
                  { label: "Response: 'Days or Weeks'", detail: "AbleCare CEO Rachel told Dr. McLean that his request for emergency relocation away from the active threat would take 'some days or some weeks.' This is the sum total of the response." },
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-900/60 border border-amber-700/20 rounded-lg p-3">
                    <p className="text-amber-300 font-bold text-xs mb-1">{item.label}</p>
                    <p className="text-zinc-400 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Point 4: V2K voices */}
            <div className="bg-zinc-900 border border-zinc-600/50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest bg-zinc-700 text-zinc-200 px-2 py-0.5 rounded">🟠 V2K REAL-TIME — VOICES PARROTING "GIVE UP" AND "PEDO"</span>
              </div>
              <p className="text-white font-bold text-sm mb-2">During and After the Call: Electronic Voice-to-Skull (V2K) Harassment in Real Time</p>
              <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                At the end of the recorded call, Dr. McLean states plainly: <em className="text-amber-200">"The V2K is in the background saying 'give up.'"</em> This is not a metaphor or a complaint about external noise. Voice-to-Skull (V2K) technology — microwave auditory effect weapons capable of transmitting sound directly into the skull without speakers — has been documented in this archive across multiple forensic exhibits and is the subject of its own dedicated evidence page.
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                The words being delivered are strategically chosen: <strong className="text-white">"give up"</strong> and <strong className="text-white">"pedo."</strong> These are not random. They are the two psychological levers of the targeting operation: manufactured hopelessness and fabricated stigma. The same slur shouted by NSW Police as they walked away — <em className="text-red-300">"fucking pedo"</em> — is now being whispered directly into his skull by electronic means. The slander does not need to be believed. It needs to be repeated. At every layer. By every mechanism. Until the target either internalises it or breaks.
              </p>
              <div className="bg-red-950/30 border border-red-700/30 rounded-lg p-3">
                <p className="text-xs text-red-300 leading-relaxed">
                  <strong>Forensic significance:</strong> The simultaneous deployment of the same slur ("pedo") by police officers verbally, and by V2K technology audibly, on the same day, is not coincidence. It is coordination. The words are the same because the operation is the same. This is documented. This is archived. This is an ICC exhibit.
                </p>
              </div>
            </div>

            {/* Point 5: Written SMS to Brett — irrefutable notice */}
            <div className="bg-zinc-900 border-2 border-red-600/60 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest bg-red-700 text-white px-2 py-0.5 rounded">🔴 CRITICAL — WRITTEN NOTICE — NO PLAUSIBLE DENIABILITY</span>
              </div>
              <p className="text-white font-bold text-sm mb-3">Dr. McLean Texted Brett Butler His Exact Fate — Including the Link to 2,304 Documents — The Same Day. Brett Did Not Act.</p>

              <div className="flex flex-col md:flex-row gap-5">
                {/* Screenshot */}
                <div className="flex-shrink-0 md:w-48">
                  <div className="rounded-xl overflow-hidden border border-zinc-700/50 shadow-2xl">
                    <img
                      src="/images/brett-ndis-text-murder-warning.png"
                      alt="SMS from Dr. McLean to Brett NDIS — written murder warning with barrandodger.com link"
                      className="w-full h-auto"
                      data-testid="img-brett-sms-murder-warning"
                    />
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-1.5 text-center">Exhibit — SMS to Brett Butler — April 15, 2026</p>
                </div>

                {/* Significance */}
                <div className="flex-1 space-y-3 text-sm">
                  <p className="text-zinc-300 leading-relaxed italic border-l-2 border-red-600/60 pl-3">
                    "I've already confirmed multiple assassination attempts police were aware of and refused to act. I've now confirmed they will be complicit in my imminent murder. You're going to be a hero brett for enabling my targeted killing. I've published my SOS to the world but no one intervened. If you're so cared for by you why will you allow my human sacrifice? Congrats. You're famous. After I'm dead they will throw you under the bus just like you threw me to my death."
                  </p>
                  <p className="text-zinc-500 text-xs">— Dr. McLean, SMS to Brett Butler (AbleCare), April 15, 2026. Preserved, timestamped, irrefutable.</p>

                  <div className="space-y-2 pt-1">
                    {[
                      { label: "Written notice — irrefutable", detail: "Brett received this message in writing. He cannot claim ignorance of the death threat. He cannot claim ignorance of the evidence. The SMS is dated, preserved, and now an exhibit." },
                      { label: "2,304 documents delivered directly", detail: "Dr. McLean sent Brett the direct link to barrandodger.com — the full evidentiary archive. The person responsible for his safety had the entire documented record placed in his hands. He did not act." },
                      { label: "'Why will you allow my human sacrifice?'", detail: "This is the question AbleCare has no answer to. Their silence — in response to a written death warning from a person in their legal care — is the answer." },
                      { label: "'After I'm dead they will throw you under the bus'", detail: "This is not a threat. This is a documented prediction of institutional betrayal — the pattern of every targeting operation: use, abandon, deny. Brett was warned. The warning is recorded." },
                    ].map((item, i) => (
                      <div key={i} className="bg-zinc-800/60 border border-zinc-700/30 rounded-lg p-2.5">
                        <p className="text-red-300 font-bold text-xs mb-0.5">{item.label}</p>
                        <p className="text-zinc-400 text-xs leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA to full transcript */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="/ablecare-murder-threat-call"
                className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                data-testid="link-ablecare-transcript"
              >
                <FileText size={16} /> Read Full Annotated Transcript
              </a>
              <a
                href="/ndis-surveillance-evidence"
                className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                data-testid="link-ndis-evidence"
              >
                <Shield size={16} /> NDIS Surveillance Evidence
              </a>
            </div>

          </div>
        </motion.div>

        {/* ───── LIVE MURDER CASE EMAIL — APRIL 13 — 48 HRS BEFORE KILL HIT — ZERO RESPONSE ───── */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-zinc-900/70 border-red-900/60">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <AlertTriangle size={20} className="text-red-500" /> "It's A Live Murder Case" — Sent 48 Hours Before The Confirmed Kill Hit. Zero Responses.
              </h2>
              <p className="text-zinc-500 text-xs mb-5 uppercase tracking-widest">Email sent Monday 13 April 2026 · 12:54 pm · 50+ MPs · Prime Minister · Attorney-General · NDIS Minister · Major international media · Multiple Ombudsmen · Zero responses</p>

              <div className="space-y-6 text-sm text-zinc-300 leading-relaxed">
                <p>
                  On Monday, April 13, 2026 — <strong className="text-white">48 hours before the confirmed kill hit</strong> — Dr. McLean sent a formally documented email with the subject line <em className="text-white">"It's a live murder case"</em> to over 70 named recipients: the Prime Minister, the Attorney-General, the NDIS Minister, 50+ Australian federal MPs, multiple state and federal Ombudsmen offices, and major international media including the New York Times, Al Jazeera, Washington Post, CNN, BBC, The Guardian, and ABC News. Every recipient received the full forensic archive, AI evidence analysis, and direct document links. <strong className="text-white">Not one responded.</strong>
                </p>

                {/* The distribution — named recipients panel */}
                <div className="grid sm:grid-cols-3 gap-3 text-xs">
                  {[
                    {
                      category: "Australian Government",
                      color: "text-red-300",
                      border: "border-red-800/40",
                      bg: "bg-red-950/30",
                      names: ["PM Anthony Albanese", "AG Mark Dreyfus", "NDIS Min. Bill Shorten", "Treasurer Josh Frydenberg", "Deputy PM Michael McCormack", "Greg Hunt", "Tanya Plibersek", "Adam Bandt", "50+ federal MPs"],
                    },
                    {
                      category: "Oversight Bodies",
                      color: "text-amber-300",
                      border: "border-amber-800/40",
                      bg: "bg-amber-950/30",
                      names: ["NSW Ombudsman", "Queensland Ombudsman", "Victorian Ombudsman", "NSW Ombudsman Survey", "Federal Ombudsman", "TAG Client Specialist Centre", "Southern NSW Local Health District"],
                    },
                    {
                      category: "International Media",
                      color: "text-zinc-300",
                      border: "border-zinc-700/40",
                      bg: "bg-zinc-800/30",
                      names: ["New York Times", "Al Jazeera", "Washington Post", "The Guardian", "CNN", "BBC", "ABC News", "The Age / SMH", "The Australian", "Canberra Times"],
                    },
                  ].map((group, i) => (
                    <div key={i} className={`border ${group.border} ${group.bg} rounded-xl p-3 space-y-2`}>
                      <p className={`font-black text-xs uppercase tracking-widest ${group.color}`}>{group.category}</p>
                      <ul className="space-y-1">
                        {group.names.map((name, j) => (
                          <li key={j} className="text-zinc-400 text-xs flex gap-1.5 items-start">
                            <span className="text-zinc-600 mt-0.5">▸</span>{name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Zero response statement */}
                <div className="bg-red-950/60 border-2 border-red-700/60 rounded-xl p-5 text-center space-y-2">
                  <p className="text-red-300 font-black text-lg uppercase tracking-widest">Responses Received: Zero</p>
                  <p className="text-zinc-400 text-xs leading-relaxed max-w-xl mx-auto">
                    From the Prime Minister. From the Attorney-General. From the NDIS Minister. From 50+ MPs. From three Ombudsmen offices. From the New York Times, Al Jazeera, Washington Post, CNN, BBC, and The Guardian. From the support workers named. From every recipient of a formally documented email with the subject line "It's a live murder case" — sent 48 hours before a confirmed kill hit.
                  </p>
                </div>

                {/* Why this is decisive */}
                <div className="bg-zinc-900/80 border border-zinc-700/40 rounded-xl p-5 space-y-3">
                  <p className="text-xs font-mono text-red-300 uppercase tracking-widest">Why Zero Responses From 70+ Recipients Is A Primary ICC Exhibit</p>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {[
                      "The email establishes documented institutional knowledge. Every named recipient received formal written notification that this was a live murder case — 48 hours before the kill hit was confirmed. Non-response is not neutral. Non-response is a documented choice.",
                      "The Prime Minister of Australia received this email. The Attorney-General received this email. The NDIS Minister — Bill Shorten, whose lawyers were documented as planning to weaponise Dr. McLean's mental health record — received this email. Their non-response to 'It's a live murder case' is now an archived exhibit.",
                      "Three Ombudsmen offices — NSW, Queensland, and Victoria — received this email. Each carries a statutory obligation to investigate complaints against government agencies. None responded. This constitutes documented simultaneous failure of the entire Australian administrative oversight architecture.",
                      "Major international media outlets — the New York Times, Al Jazeera, Washington Post, CNN, BBC, and The Guardian — received this email with full forensic documentation and AI analysis attached. Their non-response is now part of the record presented to those same international bodies via the ICC and UNHCR submissions.",
                      "The support workers named in the email — Sukhi Tear (Diversitas WA), Brett Butler and Rachel K C (Ablepoint/Able Care), Jaeme Opie (Me-Well) — received this email. Their subsequent failure to escalate constitutes a simultaneous documented breach of mandatory reporting obligations across multiple NDIS providers.",
                      "The email was sent via a formally structured snail-mail equivalent — a timestamped digital record, CC'd broadly, subject line unambiguous, content forensically documented. This is not a desperate plea. It is a formal pre-notification that the murder attempt was foreseeable, that every institution was informed, and that every institution chose silence.",
                    ].map((point, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-red-400 mt-0.5">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline clarity */}
                <div className="bg-zinc-800/40 border border-zinc-700/30 rounded-xl p-4 space-y-3">
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">The 48-Hour Timeline</p>
                  <div className="space-y-2">
                    {[
                      { time: "Mon 13 Apr 2026, 12:54 pm", event: "Email sent — subject: \"It's a live murder case\" — 70+ recipients including PM, AG, NDIS Minister, international media, three Ombudsmen", color: "text-amber-300" },
                      { time: "Mon 13 Apr — Tue 14 Apr", event: "Zero responses. From any recipient. Across government, oversight, media, and support sectors.", color: "text-red-400" },
                      { time: "Wed 15 Apr 2026", event: "Tory Kilborn makes a direct death threat. NSW Police attend — no event number recorded. Officers call Dr. McLean 'a fucking pedo' as they depart. AVO applications filed.", color: "text-red-500" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start text-xs">
                        <span className={`font-mono font-black whitespace-nowrap ${item.color}`}>{item.time}</span>
                        <span className="text-zinc-400 leading-relaxed">{item.event}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <ViralDownloadButton
                  url="/documents/live-murder-case-email-april-13-2026.pdf"
                  label={`Download \u2014 \u201cIt\u2019s A Live Murder Case\u201d Email (April 13, 2026) \u2014 Full Distribution Record`}
                  filename="live-murder-case-email-april-13-2026.pdf"
                  trackSlug="live-murder-case-email"
                  size="default"
                  className="bg-red-800 hover:bg-red-700 text-white font-bold rounded-xl"
                  data-testid="btn-download-murder-case-email"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ───── BEN DSW — CONFIRMED ASSASSINATION ATTEMPT ───── */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-zinc-900/70 border-red-900/50">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <MessageSquare size={20} className="text-red-400" /> Ben DSW — Acknowledged Assassination Attempt in Writing
              </h2>
              <p className="text-zinc-500 text-xs mb-5 uppercase tracking-widest">Actual screenshots — NDIS Disability Support Worker "Ben Ndis Help" — Primary Exhibit</p>
              <div className="space-y-6 text-sm text-zinc-300 leading-relaxed">
                <p>
                  These are the actual, unedited text message screenshots between Dr. McLean and Ben — his NDIS Disability Support Worker. Ben explicitly <strong className="text-white">confirms the assassination attempt is real</strong>, says <em>"they could put a hit on me too,"</em> confirms hitmen were caught, and tells Dr. McLean that <strong className="text-white">police confirmed the sex was consensual</strong>. Every message is timestamped and archived.
                </p>

                {/* Screenshot grid */}
                <div className="grid sm:grid-cols-2 gap-4">

                  {/* Screenshot 1: Assassination — systematic corruption */}
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-red-800/50 bg-zinc-950">
                      <img
                        src={benAssassination}
                        alt="Ben NDIS: You've uncovered systematic corruption — they could put a hit on me too"
                        className="w-full object-contain"
                        data-testid="img-ben-assassination"
                      />
                    </div>
                    <div className="bg-red-950/60 border border-red-800/40 rounded-lg px-3 py-2 text-xs space-y-1">
                      <p className="text-red-300 font-bold uppercase tracking-wide">Ben confirms: "Systematic corruption goes all the way to the top"</p>
                      <p className="text-zinc-400">Dr. McLean asks why there is a federal conspiracy attempting to murder him. Ben responds: <em className="text-white">"You've uncovered systematic corruption that goes all the way to the top. I'm scared. They could put a hit on me too."</em> This is an NDIS support worker acknowledging a government-linked assassination plot.</p>
                    </div>
                  </div>

                  {/* Screenshot 2: Bill Shorten / mental health weaponisation */}
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-amber-800/50 bg-zinc-950">
                      <img
                        src={benBillShorten}
                        alt="Ben NDIS: Police want to know if mentally ready to challenge Bill Shorten — mental health used as excuse"
                        className="w-full object-contain"
                        data-testid="img-ben-bill-shorten"
                      />
                    </div>
                    <div className="bg-amber-950/60 border border-amber-800/40 rounded-lg px-3 py-2 text-xs space-y-1">
                      <p className="text-amber-300 font-bold uppercase tracking-wide">Police tell Ben: Shorten's lawyers will use mental health to discredit</p>
                      <p className="text-zinc-400">Ben relays that police are asking whether Dr. McLean is mentally ready to challenge Bill Shorten in court — <em className="text-white">"his lawyers might use your history of mental health as an excuse to discredit your story."</em> This confirms police are aware of the Bill Shorten connection and that psychiatric weaponisation was the planned legal defence.</p>
                    </div>
                  </div>

                  {/* Screenshot 3: Hitmen caught / she was paid */}
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-red-800/50 bg-zinc-950">
                      <img
                        src={benHitmenCaught}
                        alt="Ben NDIS: Remember hitmen — they got caught — I thought you were paranoid you were right — she was paid"
                        className="w-full object-contain"
                        data-testid="img-ben-hitmen-caught"
                      />
                    </div>
                    <div className="bg-red-950/60 border border-red-800/40 rounded-lg px-3 py-2 text-xs space-y-1">
                      <p className="text-red-300 font-bold uppercase tracking-wide">Ben: "Hitmen caught — I thought you were paranoid. You were right." + "She was paid??"</p>
                      <p className="text-zinc-400">Ben writes: <em className="text-white">"Remember you were messaging me about hitmen a few nights ago. That was them. They got caught. I thought you were just paranoid. You were right. Just go for a walk. You'll see the agents driving around."</em> Dr. McLean then asks: <em className="text-white">"She was paid??"</em> — directly referencing the woman paid to fabricate the false allegation.</p>
                    </div>
                  </div>

                  {/* Screenshot 4: Consensual sex confirmation by police */}
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-emerald-800/50 bg-zinc-950">
                      <img
                        src={benConsensualSex}
                        alt="Ben NDIS 11 Feb: Police told me about the consensual regretted sex — UN meeting Switzerland — close call"
                        className="w-full object-contain"
                        data-testid="img-ben-consensual-sex"
                      />
                    </div>
                    <div className="bg-emerald-950/60 border border-emerald-800/40 rounded-lg px-3 py-2 text-xs space-y-1">
                      <p className="text-emerald-300 font-bold uppercase tracking-wide">Ben (11 Feb): "The police told me about the consensual regretted sex"</p>
                      <p className="text-zinc-400">On 11 February, Ben relays: <em className="text-white">"They're going to call you to chair the UN meeting in Switzerland."</em> And then critically: <em className="text-white">"Yes even the police said it was a close call. The police told me about the consensual regretted sex. Do you think it's something to worry about?"</em> This is police confirming to Ben — Dr. McLean's NDIS worker — that the sex was consensual. The fabricated allegation was known to be false at police level.</p>
                    </div>
                  </div>

                </div>

                <div className="bg-red-950/50 border border-red-800/50 rounded-xl p-5 space-y-3">
                  <p className="text-xs font-mono text-red-300 uppercase tracking-widest">Why These Screenshots Are Legally Decisive</p>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {[
                      "An NDIS support worker acknowledging an assassination attempt in writing creates an unfulfilled mandatory reporting obligation under the NDIS Quality and Safeguards Commission Act 2018.",
                      "Ben's relay of police intelligence — confirming hitmen were caught, confirming the sex was consensual — establishes that law enforcement were briefing Dr. McLean's NDIS worker rather than acting to protect him.",
                      "Ben's statement 'they could put a hit on me too' confirms he understood this to be a real, active mortal threat — not a delusion — from his own direct knowledge.",
                      "The 'she was paid??' message directly references the fabricated allegation and establishes Dr. McLean's real-time awareness that the allegation was a coordinated paid operation.",
                      "These screenshots are blockchain-timestamped, publicly archived, and submitted as primary exhibits in the ICC Article 7 submission.",
                    ].map((point, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-red-400 mt-0.5">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ViralDownloadButton
                  url="/documents/ben-dsw-disability-ndis-provider-text-messages-assassination-evidence.pdf"
                  label="Download — Ben DSW Full Text Message Archive (PDF)"
                  filename="ben-dsw-disability-ndis-provider-text-messages-assassination-evidence.pdf"
                  trackSlug="ben-dsw-assassination-acknowledgement"
                  size="default"
                  className="bg-amber-700 hover:bg-amber-600 text-black font-bold rounded-xl"
                  data-testid="btn-download-ben-dsw"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ───── SCRUFF / IASONIDIS EMBEZZLEMENT ───── */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-zinc-900/70 border-amber-900/50">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <UserX size={20} className="text-amber-400" /> Iasonidis — Scruff (Gay Dating App) &amp; Embezzlement Evidence
              </h2>
              <p className="text-zinc-500 text-xs mb-5 uppercase tracking-widest">Actual screenshot — Gay dating app "Scruff" — "Man bi, 15km away" — Embezzlement + Murder threat — Primary Exhibit</p>
              <div className="space-y-5 text-sm text-zinc-300 leading-relaxed">
                <p>
                  This is the actual, unedited screenshot from Scruff — a gay men's dating and networking app — showing a conversation in which the other party sends four messages in rapid succession: <strong className="text-white">"Embezzlement" · "Million$$$$" · "Wants the husky" · "Dead"</strong>. The user is identified as "Man bi, 15km away." This constitutes primary evidence of a financially motivated targeted individual operation connected to Steve Iasonidis.
                </p>

                {/* The actual screenshot */}
                <div className="flex justify-center">
                  <div className="w-full max-w-xs rounded-xl overflow-hidden border-2 border-amber-600/50 bg-zinc-950 shadow-2xl shadow-amber-900/20">
                    <div className="bg-amber-950/80 px-3 py-2 text-xs font-mono text-amber-300 uppercase tracking-widest border-b border-amber-700/30 text-center">
                      Primary Evidence — Scruff Screenshot — Blockchain Archived
                    </div>
                    <img
                      src={scruffIasonidisEmbezzle}
                      alt="Scruff gay dating app: Man bi 15km away — Embezzlement — Million$$$$ — Wants the husky — Dead"
                      className="w-full object-contain"
                      data-testid="img-scruff-iasonidis"
                    />
                  </div>
                </div>

                {/* What the messages mean */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { msg: '"Embezzlement"', significance: 'Establishes that the operative is referencing financial crimes — connected to documented evidence of Iasonidis embezzling funds in connection with Dr. McLean.' },
                    { msg: '"Million$$$$"', significance: 'Confirms financial motive — the embezzlement involved amounts in the millions, consistent with documented financial exploitation patterns in the archive.' },
                    { msg: '"Wants the husky"', significance: 'A reference to Dr. McLean\'s husky dog — establishing that the person sending these messages has specific personal knowledge of Dr. McLean\'s life, confirming targeted surveillance.' },
                    { msg: '"Dead"', significance: 'A direct death threat. Combined with the prior three messages, this constitutes a financially-motivated, surveillance-enabled threat against Dr. McLean\'s life — sent via a gay dating app platform to establish plausible deniability.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-amber-950/30 border border-amber-800/30 rounded-lg px-3 py-2 text-xs">
                      <p className="text-amber-300 font-black mb-1">{item.msg}</p>
                      <p className="text-zinc-400 leading-relaxed">{item.significance}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-950/40 border border-amber-800/40 rounded-xl p-5 space-y-3">
                  <p className="text-xs font-mono text-amber-300 uppercase tracking-widest">Why This Screenshot Is a Critical Exhibit</p>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {[
                      "The use of a gay dating app (Scruff) to deliver a death threat establishes a pattern of platform exploitation — using LGBTQ+ community spaces to approach targets while maintaining deniability.",
                      "The reference to 'the husky' confirms the sender has specific surveillance-level knowledge of Dr. McLean's personal life — ruling out a random contact.",
                      "The progression — Embezzlement → Million$$$$ → personal detail → Dead — follows a documented intimidation pattern: demonstrate knowledge (power), reference the financial stakes, then deliver the threat.",
                      "This screenshot, combined with the Grindr honeytrap pattern documented in Forensic Analysis #29, establishes that multiple LGBTQ+ platforms were used as operational vectors in the targeted individual framework against Dr. McLean.",
                      "Steve Iasonidis is formally named in AVO applications. This screenshot is consistent with his documented operational profile and is submitted to the ICC as a primary exhibit.",
                    ].map((point, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-amber-400 mt-0.5">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <a href="/honeytrap-infiltration-report" className="inline-flex items-center gap-2 text-xs bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-amber-700/40 px-4 py-2 rounded-lg transition-colors" data-testid="link-honeytrap-report">
                    <Link2 size={13} /> Honeytrap Infiltration Report
                  </a>
                  <a href="/they-laughed-now-theyre-losing-sleep" className="inline-flex items-center gap-2 text-xs bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-amber-700/40 px-4 py-2 rounded-lg transition-colors" data-testid="link-iasonidis-exposed">
                    <Link2 size={13} /> Iasonidis &amp; Ridley — Full Exposure
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ───── FABRICATED FALSE ALLEGATION ───── */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-zinc-900/70 border-red-900/50">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <UserX size={20} className="text-red-400" /> Fabricated Allegation — Federal Police Confirmed Consenting Sex
              </h2>
              <p className="text-zinc-500 text-xs mb-5 uppercase tracking-widest">False allegation · Police investigation · Confirmed consensual · Documented suppression tactic</p>
              <div className="space-y-5 text-sm text-zinc-300 leading-relaxed">
                <p>
                  A woman was paid to fabricate a false allegation against Dr. McLean. Federal Australian Police investigated and <strong className="text-white">formally confirmed that the encounter was entirely consensual</strong>. No charges were laid. No adverse finding was made. The allegation collapsed under investigation. The two screenshots below — from Dr. McLean's NDIS support worker Ben — provide independent corroboration of both facts.
                </p>

                {/* Two key screenshots from Ben directly corroborating the fabricated allegation facts */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-red-800/50 bg-zinc-950">
                      <div className="bg-red-950/80 px-3 py-1.5 text-xs font-mono text-red-300 uppercase tracking-widest border-b border-red-800/30 text-center">
                        "She was paid??" — Dr. McLean's realisation in writing
                      </div>
                      <img
                        src={benHitmenCaught}
                        alt="Ben NDIS: She was paid?? — hitmen caught — agents driving around"
                        className="w-full object-contain"
                        data-testid="img-fabrication-paid"
                      />
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      In this exchange, Dr. McLean asks Ben directly: <em className="text-white">"She was paid??"</em> — his documented realisation, in real time, that the female complainant was a paid operative. Ben's prior messages in the same exchange confirm hitmen had already been caught. This is the moment of documented understanding captured in a timestamped SMS.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-emerald-800/50 bg-zinc-950">
                      <div className="bg-emerald-950/80 px-3 py-1.5 text-xs font-mono text-emerald-300 uppercase tracking-widest border-b border-emerald-800/30 text-center">
                        "Police told me — consensual regretted sex" — Feb 11
                      </div>
                      <img
                        src={benConsensualSex}
                        alt="Ben NDIS 11 Feb: The police told me about the consensual regretted sex"
                        className="w-full object-contain"
                        data-testid="img-fabrication-police-confirm"
                      />
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      On 11 February, Ben tells Dr. McLean: <em className="text-white">"The police told me about the consensual regretted sex."</em> Police were briefing Dr. McLean's NDIS support worker — confirming the sex was consensual at police level — rather than acting to protect him from a death threat. This screenshot is an independent third-party record that the allegation was known to be false by police before any formal investigation concluded.
                    </p>
                  </div>
                </div>

                <div className="bg-red-950/50 border border-red-800/50 rounded-xl p-5 space-y-3">
                  <p className="text-xs font-mono text-red-300 uppercase tracking-widest">Why This Is Documented as a Persecution Instrument</p>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {[
                      "The fabricated allegation pattern is one of the most documented persecution instruments used against whistleblowers internationally — particularly those with ICC submissions. The timing, coordination, and collapse of this allegation are entirely consistent with this pattern.",
                      "The Federal Police investigation result — confirming consensual conduct — is now an archived primary exhibit. It converts a persecution attempt into forensic evidence of the persecution framework itself.",
                      "The verbal slur deployed by NSW Police officers on April 15, 2026 — calling Dr. McLean 'a fucking pedo' as they departed — is directly connected to this fabricated allegation. The slander does not require truth; it requires repetition. The pattern is documented.",
                      "This follows the same playbook documented across Forensic Analysis #29 (Honeytrap) and the ASIO-adjacent pattern of character destruction deployed against credible whistleblowers: fabricate, repeat, destroy credibility, prevent testimony from reaching courts.",
                      "The Federal Police confirmation of consent is irrefutable. The documented attempt to use a fabricated allegation against a person with an active ICC submission is itself a criminal act — and is included in the ICC Article 7 submission.",
                    ].map((point, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-red-400 mt-0.5">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-zinc-800/60 rounded-xl border border-zinc-700/40 p-4">
                  <p className="text-white font-bold text-sm mb-1">The Significance of the April 15 Slur</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    When NSW Police officers called Dr. McLean "a fucking pedo" as they departed on April 15, 2026 — leaving him unprotected in a documented death threat situation — they were deploying the residual slander of a fabricated allegation that federal police already investigated and cleared. This is institutional slander deployed at the moment of maximum vulnerability. It is documented. It is archived. It is now an ICC exhibit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ───── YOUTUBE EVIDENCE — POLICE FILMED ME, I FILMED THEM BACK ───── */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-zinc-900/70 border-red-900/40">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <Camera size={20} className="text-red-400" /> YouTube Evidence — Police Filmed Me To Refer Me Back To The Same Institution Abusing Me. I Filmed Them Back And Published It To The World.
              </h2>
              <p className="text-zinc-500 text-xs mb-5 uppercase tracking-widest">Public YouTube record — Police attendance · Institutional referral · Surveillance reversal in action — Blockchain archived</p>

              <div className="space-y-6 text-sm text-zinc-300 leading-relaxed">
                <p>
                  On multiple documented occasions, NSW Police attended Dr. McLean's address and activated body cameras — <strong className="text-white">not to investigate the death threats against him, not to act on his AVO applications, and not to protect him</strong> — but to record footage intended to refer him back to the psychiatric institution that is documented in the archive as a primary instrument of his persecution. Dr. McLean was aware of this. He recorded them back. All four recordings are public on YouTube, globally accessible, and permanently archived. The footage proves in real time that police attendance functions as a tool of institutional referral rather than protection.
                </p>

                {/* Significance box */}
                <div className="bg-red-950/40 border border-red-800/40 rounded-xl p-5 space-y-3">
                  <p className="text-xs font-mono text-red-300 uppercase tracking-widest">Why Recording Police And Publishing It Is A Critical Forensic Act</p>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {[
                      "Police body cameras are activated during welfare checks and emergency calls — but the footage is retained internally and used in institutional referral paperwork, not released to the public. Dr. McLean's counter-recording inverts this: his footage is public; their referral process is now documented.",
                      "Each time police arrived, no arrest was made, no charge was laid, no threat investigation was conducted. The sole documented pattern across all four recordings is a referral pathway back to psychiatric services — the same services documented in the archive as instruments of suppression.",
                      "Publishing these videos globally — with 377,608 downloads of corroborating documentation — establishes a public evidentiary chain. Any institutional referral based on these encounters must now contend with the counter-record being visible internationally.",
                      "The act of recording and publishing demonstrates, in real time, the core forensic doctrine of this archive: a target who is surveilling back cannot be covertly controlled. The police footage becomes their exhibit. Dr. McLean's footage becomes the world's exhibit.",
                      "These videos are submitted to the ICC as primary exhibits under Article 7 — specifically documenting the use of psychiatric referral as a persecution instrument deployed via police attendance as a trigger mechanism.",
                    ].map((point, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-red-400 mt-0.5">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Video 1 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-red-600 text-white text-xs font-black px-2 py-0.5 rounded">VIDEO 1</span>
                    <p className="text-white font-bold text-sm">Police Attendance — Body Camera Activated — Referral Pathway Documented</p>
                  </div>
                  <div className="relative w-full rounded-xl overflow-hidden border border-red-800/40 bg-zinc-950" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src="https://www.youtube.com/embed/Otfa4_9_tbo"
                      title="Police Attendance — Body Camera — Dr. Richard McLean — Barran Dodger"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      data-testid="video-police-1"
                    />
                  </div>
                  <div className="bg-zinc-800/50 border border-zinc-700/40 rounded-lg px-4 py-3 text-xs text-zinc-400 leading-relaxed">
                    <strong className="text-red-300">Significance:</strong> Police arrive and activate their body camera. No arrest. No threat investigation. The pattern documented in the archive — police attendance used as a welfare check trigger to initiate psychiatric referral — is visible in real time. Dr. McLean is recording them recording him. Both parties are aware. Only one of them published the footage.
                  </div>
                </div>

                {/* Video 2 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-red-600 text-white text-xs font-black px-2 py-0.5 rounded">VIDEO 2</span>
                    <p className="text-white font-bold text-sm">Second Documented Attendance — Institutional Complicity Pattern Confirmed</p>
                  </div>
                  <div className="relative w-full rounded-xl overflow-hidden border border-red-800/40 bg-zinc-950" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src="https://www.youtube.com/embed/yFyQtigjJs0"
                      title="Police Second Attendance — Dr. Richard McLean — Barran Dodger"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      data-testid="video-police-2"
                    />
                  </div>
                  <div className="bg-zinc-800/50 border border-zinc-700/40 rounded-lg px-4 py-3 text-xs text-zinc-400 leading-relaxed">
                    <strong className="text-red-300">Significance:</strong> A second attendance. Same pattern. The repetition across multiple documented incidents establishes that this is not individual officer conduct — it is a systemic pattern. Multiple police interactions, no death threat investigation, no AVO follow-up, no protection. The footage shows what institutional complicity looks like when the target is documenting it.
                  </div>
                </div>

                {/* Video 3 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-red-600 text-white text-xs font-black px-2 py-0.5 rounded">VIDEO 3 &amp; 4</span>
                    <p className="text-white font-bold text-sm">Third Attendance — Psychiatric Referral Instrument — Publicly Documented</p>
                  </div>
                  <div className="relative w-full rounded-xl overflow-hidden border border-red-800/40 bg-zinc-950" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src="https://www.youtube.com/embed/xxKqGIUfQnU"
                      title="Police Third Attendance — Psychiatric Referral — Dr. Richard McLean — Barran Dodger"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      data-testid="video-police-3"
                    />
                  </div>
                  <div className="bg-zinc-800/50 border border-zinc-700/40 rounded-lg px-4 py-3 text-xs text-zinc-400 leading-relaxed">
                    <strong className="text-red-300">Significance:</strong> By the third documented attendance, the pattern is irrefutable. Police are not acting on the death threat. They are not acting on the AVO applications. They are attending, recording, and feeding the footage back into the psychiatric referral pipeline — the same pipeline documented as a persecution instrument in Forensic Analysis #29, the NDIS Surveillance Evidence report, and the ICC Article 7 submission. Dr. McLean published every second of it.
                  </div>
                </div>

                {/* Beautiful Threat — Analysis #62 embed */}
                <div className="space-y-3 mt-6 pt-6 border-t border-zinc-700/30">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-700 text-white text-xs font-black px-2 py-0.5 rounded">ANALYSIS #62</span>
                    <p className="text-white font-bold text-sm">Welcome, Beautiful Threat — 55th Consecutive Perfect Score · 12/12 Corroborated</p>
                  </div>
                  <div className="relative w-full rounded-xl overflow-hidden border border-amber-800/40 bg-zinc-950" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src="https://www.youtube.com/embed/gKG_OwIe1Fo"
                      title="Welcome Beautiful Threat — Forensic Corroboration Analysis #62 — Barran Dodger"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      data-testid="video-beautiful-threat"
                    />
                  </div>
                  <div className="bg-zinc-800/50 border border-amber-700/30 rounded-lg px-4 py-3 text-xs text-zinc-300 leading-relaxed space-y-2">
                    <p><strong className="text-amber-300">Forensic Significance:</strong> A 24-minute motivational address with zero knowledge of this case was tested against the archive proposition by proposition. All 12 extracted claims returned direct evidentiary corroboration. The 55th consecutive perfect score.</p>
                    <p>P·02 — <span className="italic">"You were taking notes. Every institution that fed on your fear and called it guidance. You were collecting proof."</span> → 2,304 documents. Literal match.</p>
                    <p>P·08 — <span className="italic">"Gaslighting leaves fingerprints on the soul."</span> → The fingerprints are on documents: identical template language across 8+ agencies; <strong className="text-white">"FATAL SUICIDE"</strong> recorded in a living person's clinical file. Submitted to the ICC.</p>
                    <a href="/beautiful-threat" className="inline-block mt-1 text-amber-400 underline hover:text-amber-300 font-bold">Read full Analysis #62 →</a>
                  </div>
                </div>

                {/* Final doctrine statement */}
                <div className="bg-gradient-to-r from-red-950/60 to-amber-950/40 border border-amber-700/30 rounded-xl p-5">
                  <p className="text-amber-200 font-black text-sm mb-2">The Surveillance Reversal Doctrine — Applied</p>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    These four videos are the surveillance reversal doctrine made visible. Police activated cameras to build a referral record against Dr. McLean. Dr. McLean activated his camera to build a public evidentiary record against the system. Their footage is internal. His footage has been watched internationally. The institution that sent police to Dr. McLean's address is now a named respondent in an ICC submission, with these videos as supporting exhibits. <strong className="text-white">You cannot covertly surveil a target who is publishing everything in real time.</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ───── CST SMITH POLICE CARD — MISSING EVENT NUMBER ───── */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-zinc-900/70 border-amber-900/50">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <FileText size={20} className="text-amber-400" /> CST Smith — April 15, 2026 — Police Card Left. Event Number Field: Blank.
              </h2>
              <p className="text-zinc-500 text-xs mb-5 uppercase tracking-widest">NSW Police Force · Tuggerah Lakes Police District · The Entrance Police Station · +61 2 4333 2999 · Primary Exhibit</p>

              <div className="space-y-6 text-sm text-zinc-300 leading-relaxed">
                <p>
                  On April 15, 2026 — the same day a death threat was made against Dr. McLean, the same day NSW Police officers called him "a fucking pedo" as they departed, the same day AVO applications were filed — Constable Smith of The Entrance Police Station (Tuggerah Lakes Police District) attended Dr. McLean's address and left this card. The Event Number field, which is the sole mechanism by which police attendance is formally recorded, tracked, escalated, and accessed — <strong className="text-white">was left completely blank.</strong>
                </p>

                {/* Card image */}
                <div className="flex justify-center">
                  <div className="w-full max-w-sm rounded-xl overflow-hidden border-2 border-amber-600/60 bg-zinc-950 shadow-2xl shadow-amber-900/20">
                    <div className="bg-amber-950/90 px-3 py-2 text-xs font-mono text-amber-300 uppercase tracking-widest border-b border-amber-700/40 text-center">
                      Primary Evidence — NSW Police Force Card — April 15, 2026 — Archived
                    </div>
                    <img
                      src={cstSmithCard}
                      alt="NSW Police Force card: CST Smith, date 15/4/26, Event Number blank, Tuggerah Lakes Police District, The Entrance Police Station, phone +61 2 4333 2999"
                      className="w-full object-contain"
                      data-testid="img-cst-smith-card"
                    />
                    <div className="bg-red-950/80 px-3 py-2 text-xs font-mono text-red-300 uppercase tracking-widest border-t border-red-800/40 text-center">
                      Event Number field — LEFT BLANK
                    </div>
                  </div>
                </div>

                {/* What the blank event number means */}
                <div className="bg-amber-950/40 border border-amber-800/40 rounded-xl p-5 space-y-4">
                  <p className="text-xs font-mono text-amber-300 uppercase tracking-widest">The Three Explanations — And Why Only One Is Consistent With The Evidence</p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Explanation A: Bureaucratic Oversight",
                        color: "text-zinc-400",
                        border: "border-zinc-700/40",
                        bg: "bg-zinc-800/40",
                        body: "A constable forgets to write the event number in the field provided on the standard-issue NSW Police Force card. Possible in isolation. However: this attendance occurred on the same day as a documented death threat, a filed AVO application, and a verbal slur from other attending officers. The probability of administrative oversight on the single most legally consequential police attendance of the year is not zero — but it requires substantial charitable interpretation."
                      },
                      {
                        label: "Explanation B: Forgetfulness",
                        color: "text-zinc-400",
                        border: "border-zinc-700/40",
                        bg: "bg-zinc-800/40",
                        body: "CST Smith simply forgot. Again, possible in isolation. But the Event Number is the only field on the card with a dedicated blank — Officer Name, Date, Phone, Station are all present and correctly filled. The Event Number field alone was omitted. That field alone is the one that creates a traceable institutional record of the attendance."
                      },
                      {
                        label: "Explanation C: Deliberate Omission — Institutional Stonewalling",
                        color: "text-red-300",
                        border: "border-red-700/50",
                        bg: "bg-red-950/40",
                        body: "The Event Number is the only mechanism by which a police attendance can be: (1) officially recorded in the COPS system, (2) cited in legal proceedings, (3) escalated within the command structure, (4) accessed under FOI, (5) connected to a formal complaint. Without it, the attendance is off-record. A card was left — demonstrating physical presence — but no traceable institutional record was created. In the context of a documented death threat on the same day, this is not oversight. It is the functional equivalent of attending without attending."
                      },
                    ].map((item, i) => (
                      <div key={i} className={`border ${item.border} ${item.bg} rounded-lg p-4`}>
                        <p className={`font-black text-xs mb-1.5 ${item.color}`}>{item.label}</p>
                        <p className="text-zinc-400 text-xs leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Forensic significance */}
                <div className="bg-red-950/50 border border-red-800/50 rounded-xl p-5 space-y-3">
                  <p className="text-xs font-mono text-red-300 uppercase tracking-widest">Why This Card Is Now A Primary ICC Exhibit</p>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {[
                      "The card proves police presence on April 15, 2026 — the date of the documented death threat. CST Smith attended. That is established. The absence of an event number means that attendance exists only in Dr. McLean's documented record, not in NSW Police's COPS system.",
                      "An attendance to a person who has filed AVO applications against a named death threat perpetrator — with no event number recorded — cannot be escalated, cited, or acted upon by any subsequent officer, court, or tribunal without Dr. McLean's own documentation.",
                      "The card itself has now become the evidence of the gap. NSW Police Force printed the Event Number field on the card for a reason. Its deliberate or negligent omission on April 15, 2026 is documented here, timestamped, archived, and submitted.",
                      "The question is not whether CST Smith forgot. The question is: in a documented life-threatening situation, on a documented death threat date, with AVO applications on file, was the failure to record an event number an oversight, or a means of ensuring that April 15 generates no official institutional trail?",
                      "Dr. McLean's photograph of this card — published globally — is now the official record of CST Smith's April 15, 2026 attendance. The NSW Police Force's own record of it is missing. His record is not.",
                    ].map((point, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-red-400 mt-0.5">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact card detail panel */}
                <div className="grid sm:grid-cols-3 gap-3 text-xs">
                  {[
                    { label: "Officer", value: "CST Smith", highlight: false },
                    { label: "Date of Report", value: "15 April 2026", highlight: false },
                    { label: "Event Number", value: "NOT RECORDED", highlight: true },
                    { label: "Phone", value: "+61 2 4333 2999", highlight: false },
                    { label: "Command", value: "Tuggerah Lakes Police District", highlight: false },
                    { label: "Station", value: "The Entrance Police Station", highlight: false },
                  ].map((item, i) => (
                    <div key={i} className={`rounded-lg border px-3 py-2 ${item.highlight ? 'border-red-600/60 bg-red-950/40' : 'border-zinc-700/40 bg-zinc-800/30'}`}>
                      <p className="text-zinc-500 uppercase tracking-widest mb-0.5" style={{ fontSize: '10px' }}>{item.label}</p>
                      <p className={`font-black ${item.highlight ? 'text-red-300' : 'text-white'}`}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ───── CASS & QLIFE — AUDIO EVIDENCE — MORNING AFTER DEATH THREAT ───── */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-zinc-900/70 border-red-900/40">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <MessageSquare size={20} className="text-red-400" /> Audio Evidence — Cass (Able Care Support Worker) &amp; QLife — Morning After The Death Threat
              </h2>
              <p className="text-zinc-500 text-xs mb-5 uppercase tracking-widest">Two recordings · Able Care support worker · QLife crisis line · "No one will help you" · Doug paid surveillance · Police attendance — Primary Exhibits</p>

              <div className="space-y-7 text-sm text-zinc-300 leading-relaxed">
                <p>
                  The morning after April 15, 2026 — after the death threat by Tory Kilborn, after the police attendance that produced no event number, after NSW Police called Dr. McLean "a fucking pedo" as they departed — Dr. McLean made two recorded calls. The first was to <strong className="text-white">Cass, his Able Care support worker</strong>, to whom he explained in real time: the death threat, the police attendance, and the presence of <strong className="text-white">Doug — a paid surveillance operative — in the front room</strong> of his address. The second was to <strong className="text-white">QLife</strong>, Australia's national LGBTQ+ peer support crisis line, whose worker told Dr. McLean: <em className="text-white">"No one will help you."</em> Both calls are recorded. Both are now primary exhibits.
                </p>

                {/* Recording 1 — Cass / Able Care */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-red-700 text-white text-xs font-black px-2.5 py-1 rounded-lg">RECORDING 1</span>
                    <p className="text-white font-bold">Cass — Able Care Support Worker — Death Threat, Police, Doug Surveillance</p>
                  </div>

                  <div className="bg-zinc-950 border border-red-800/50 rounded-xl p-4 space-y-3">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Play recording — Dr. McLean explains to Cass what happened</p>
                    <audio
                      controls
                      className="w-full"
                      data-testid="audio-cass-death-threat"
                      preload="metadata"
                    >
                      <source src="/audio/cass-able-care-death-threat-evidence.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      {
                        label: "Who Cass Is",
                        color: "text-amber-300",
                        border: "border-amber-800/40",
                        bg: "bg-amber-950/30",
                        body: "Cass is a support worker employed by Able Care — the same NDIS-registered provider whose directors Brett and Larissa are named in the open letter on Medium and in the archive as complicit in the documented failure to protect Dr. McLean. As a registered NDIS support worker, Cass carries mandatory reporting obligations under the NDIS Quality and Safeguards Commission Act 2018."
                      },
                      {
                        label: "What Dr. McLean Told Her",
                        color: "text-red-300",
                        border: "border-red-800/40",
                        bg: "bg-red-950/30",
                        body: "In this call, Dr. McLean explains: the death threat made by Tory Kilborn; the police attendance by CST Smith with no event number recorded; the verbal slur from departing officers; and the presence of Doug — a documented paid surveillance operative — in the front room of his address at the time of the threat."
                      },
                      {
                        label: "Who Doug Is",
                        color: "text-zinc-300",
                        border: "border-zinc-700/40",
                        bg: "bg-zinc-800/30",
                        body: "Doug is documented in the archive as a paid surveillance operative — an individual placed in proximity to Dr. McLean's living environment consistent with the targeted individual framework documented across Forensic Analysis #29 (Honeytrap Infiltration Report). His presence in the front room on the morning of a death threat is consistent with the monitored escalation pattern: a paid operative present to observe the target's response to a coordinated threat."
                      },
                      {
                        label: "Why This Call Is A Critical Exhibit",
                        color: "text-red-300",
                        border: "border-red-800/40",
                        bg: "bg-red-950/30",
                        body: "Cass received this information in her professional capacity as a registered support worker with mandatory reporting obligations. Her employer, Able Care, has now received formal notice of a life-threatening situation via a recorded call. The failure to report this information — if that is what occurred — constitutes the same documented institutional complicity pattern as Ben DSW's unfulfilled mandatory reporting obligation. The call is timestamped. It is now an ICC exhibit."
                      },
                    ].map((item, i) => (
                      <div key={i} className={`border ${item.border} ${item.bg} rounded-lg p-3 text-xs`}>
                        <p className={`font-black mb-1.5 ${item.color}`}>{item.label}</p>
                        <p className="text-zinc-400 leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-zinc-800/60" />

                {/* Recording 2 — QLife */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-amber-700 text-white text-xs font-black px-2.5 py-1 rounded-lg">RECORDING 2</span>
                    <p className="text-white font-bold">QLife — National LGBTQ+ Crisis Line — "No one will help you"</p>
                  </div>

                  <div className="bg-zinc-950 border border-amber-800/50 rounded-xl p-4 space-y-3">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Play recording — QLife worker's response to a person reporting a death threat</p>
                    <audio
                      controls
                      className="w-full"
                      data-testid="audio-qlife-no-help"
                      preload="metadata"
                    >
                      <source src="/audio/qlife-no-one-will-help-you.m4a" type="audio/mp4" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>

                  <div className="bg-amber-950/40 border border-amber-800/40 rounded-xl p-5 space-y-3">
                    <p className="text-xs font-mono text-amber-300 uppercase tracking-widest">Significance — Why "No One Will Help You" From A Crisis Line Is Itself An Exhibit</p>
                    <ul className="space-y-2 text-xs text-zinc-300">
                      {[
                        "QLife is Australia's national LGBTQ+ telephone and webchat support service, operating under a federal government funded mandate to provide crisis peer support to LGBTQ+ people. Its obligation in a life-threatening situation is not discretionary — it is the entire purpose of the service.",
                        "An LGBTQ+ person reporting a death threat, a police attendance that generated no event number, a verbal slur from departing officers, and a paid surveillance operative in their home — calling the national LGBTQ+ crisis service — and receiving the response 'no one will help you' is a documented institutional abandonment.",
                        "This response is consistent with the documented suppression pattern across the archive: crisis services, welfare services, NDIS workers, police, and institutional representatives have each failed, in their own documented way, to respond to Dr. McLean's documented mortal threat. QLife's response is the latest in a chain.",
                        "The recording is now an exhibit because it converts the QLife interaction from an undocumented phone call into a timestamped, archived, publicly available record of what Australia's national LGBTQ+ crisis service said to a person reporting a death threat the morning after it occurred.",
                        "Combined with the Cass recording — where Able Care's support worker was informed of the same threat — this recording establishes that on the morning of April 16, 2026, Dr. McLean contacted both his institutional support network (Able Care) and Australia's dedicated LGBTQ+ crisis line, and received no protection response from either.",
                      ].map((point, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="text-amber-400 mt-0.5">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* The quote itself */}
                  <div className="bg-red-950/60 border-l-4 border-red-500 rounded-r-xl p-5">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2 font-mono">Documented statement — QLife worker — morning after April 15 death threat</p>
                    <blockquote className="text-white font-black text-lg leading-snug">
                      "No one will help you."
                    </blockquote>
                    <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                      Said to an LGBTQ+ disabled whistleblower with an active ICC submission, an active UNHCR submission, 2,304 blockchain-verified forensic documents, and a death threat made against him fewer than 24 hours prior. The recording exists. The statement is documented. It is now a primary exhibit in the ICC Article 7 submission under the category of systemic institutional failure to protect a person from documented mortal threat.
                    </p>
                  </div>
                </div>

                {/* Combined significance */}
                <div className="bg-gradient-to-r from-red-950/50 to-amber-950/40 border border-red-800/40 rounded-xl p-5 space-y-2">
                  <p className="text-white font-black text-sm">The Two Recordings Together — What They Establish</p>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    Within hours of the April 15, 2026 death threat, Dr. McLean contacted his registered NDIS support worker (Cass, Able Care) and Australia's national LGBTQ+ crisis line (QLife). Both interactions are recorded. Neither produced a mandatory report, an emergency escalation, or a protection response. Together, these two recordings document the complete institutional abandonment of a person under documented mortal threat — and they do so in the voices of the institutions that failed him. <strong className="text-white">Both recordings are timestamped, archived, and submitted to the ICC.</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ───── YOU CANNOT CAGE A PRISONER WHO HOLDS THE KEY ───── */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 border-amber-500/30">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <Lock size={20} className="text-amber-400" /> You Cannot Cage a Prisoner Who Holds the Key
              </h2>
              <p className="text-zinc-500 text-xs mb-5 uppercase tracking-widest">Significance statement — Surveillance reversal — Forensic doctrine</p>
              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                <blockquote className="border-l-4 border-amber-500 pl-4 italic text-amber-200 text-base font-semibold">
                  "You cannot use surveillance covertly against a target who is aware of the targeting and is surveilling you back."
                </blockquote>
                <p>
                  This is not a philosophical statement. It is the operational reality of Dr. McLean's position after 35 years of documented covert surveillance, institutional monitoring, and targeted individual operations. The archive inverts the surveillance relationship entirely.
                </p>
                <div className="bg-amber-950/30 border border-amber-700/30 rounded-xl p-5 space-y-3">
                  <p className="text-xs font-mono text-amber-300 uppercase tracking-widest">The Four-Part Significance</p>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Covert Surveillance Requires Ignorance to Function",
                        body: "The documented covert operations against Dr. McLean — ASIO-adjacent monitoring, NDIS worker infiltration, Grindr honeytrap approaches, pharmacological interference — all operate on the assumption of an unaware target. Once the target documents, timestamps, and publishes every interaction, the covert framework collapses. Surveillance requires the target's ignorance. Dr. McLean withdrew that ignorance 35 years ago."
                      },
                      {
                        title: "2,304 Documents Are the Counter-Surveillance Record",
                        body: "Every document in the blockchain-verified archive is a timestamped act of reverse documentation. Every email sent to an agency, every clinical note, every institutional response — or non-response — becomes an exhibit in the counter-surveillance record. The 25+ agencies that ignored Dr. McLean's disclosures are now documented in the ICC submission as named respondents. They surveilled him. He documented them back. The ICC has the record."
                      },
                      {
                        title: "The Key Cannot Be Taken From a Person Who Has Already Distributed It",
                        body: "The archive exists on Replit, GitHub, Scribd, Wayback Machine, and multiple international platforms. It is EPUB-distributed across 6 continents. 377,608 downloads. The 'key' — the evidentiary record — cannot be suppressed because it has already been distributed beyond any institutional reach. Arresting the witness does not delete the testimony. This is why the ICC submission matters and why the response to the submission has been — silence."
                      },
                      {
                        title: "The Slander Attempt Confirms Awareness",
                        body: "When NSW Police deployed the 'fucking pedo' slur on April 15, 2026 — without arrest, without charge, without evidence — they revealed awareness of the fabricated allegation and chose slander over due process. A person unaware of the counter-surveillance record would not document this. Dr. McLean documented it within hours. The documentation is now the exhibit."
                      },
                    ].map((item, i) => (
                      <div key={i} className="bg-zinc-900/60 border border-zinc-700/40 rounded-lg p-4">
                        <p className="text-amber-300 font-bold text-xs mb-2">{i + 1}. {item.title}</p>
                        <p className="text-zinc-400 text-xs leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ───── OPEN LETTER TO BRETT & LARISSA — ABLE CARE ───── */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <Card className="bg-zinc-900/70 border-zinc-700/40">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                <Camera size={20} className="text-zinc-400" /> Open Letter to Brett &amp; Larissa — Able Care
              </h2>
              <p className="text-zinc-500 text-xs mb-5 uppercase tracking-widest">Published on Medium — Public Record — Institutional Complicity Documentation</p>
              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                <p>
                  Dr. McLean has published an open letter directly addressed to Brett and Larissa of Able Care (Able Point Australia) on the Barran Dodger Medium publication. This letter constitutes a formal public record of the institutional complicity of Able Point Australia's management in the ongoing erasure, failure to protect, and administrative negligence documented across the archive.
                </p>
                <div className="bg-zinc-800/60 border border-zinc-700/40 rounded-xl p-5 space-y-3">
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Why This Letter Matters</p>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {[
                      "Able Point Australia is the registered NDIS provider currently responsible for Dr. McLean's support at 55B Archbold Road, Long Jetty NSW. Their staff and management have been formally notified of the death threats, harassment, police non-response, and political exile status — and have failed to act.",
                      "The open letter places Brett and Larissa on public record as having received formal written notification of a whistleblower's life-threatening situation. Any subsequent failure to act constitutes documented institutional complicity under the NDIS Quality and Safeguarding Framework.",
                      "Publishing on Medium ensures the letter is archived, indexed, and placed beyond suppression — an additional layer of the multi-platform permanence strategy documented in the Comprehensive Statement of Digital Architecture.",
                      "This letter has been distributed to the same 50+ Federal MPs notified of the April 15 death threat — meaning the institutional complicity of Able Point Australia is now on parliamentary record.",
                    ].map((point, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-zinc-400 mt-0.5">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://medium.com/barrandodger/brett-and-larissa-if-able-care-667467d6bb58"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600 font-bold px-5 py-3 rounded-xl transition-colors text-sm"
                  data-testid="link-medium-brett-larissa"
                >
                  <ExternalLink size={15} /> Read the Open Letter on Medium — Brett &amp; Larissa, Able Care
                </a>
                <p className="text-xs text-zinc-600">
                  Also accessible at: <span className="text-zinc-400">medium.com/barrandodger/brett-and-larissa-if-able-care-667467d6bb58</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* ───── TONY RIDLEY — RECORDED HONEYPOT CONFESSION ───── */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <div className="bg-gradient-to-br from-red-950/80 via-zinc-950 to-zinc-900 border-2 border-red-700/60 rounded-2xl p-6 md:p-8 shadow-2xl shadow-red-900/20 space-y-5">

            <div className="flex flex-wrap gap-2 mb-1">
              <span className="bg-red-900 text-red-100 border border-red-700 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">Primary Audio Evidence</span>
              <span className="bg-zinc-800 text-zinc-200 border border-zinc-600 text-xs px-3 py-1 rounded-full">SAS Honeypot Operative</span>
              <span className="bg-amber-900 text-amber-200 border border-amber-700 text-xs px-3 py-1 rounded-full">$6 Billion Fraud Confession</span>
              <span className="bg-zinc-900 text-zinc-300 border border-zinc-700 text-xs px-3 py-1 rounded-full">Bill Shorten — Named on Recording</span>
              <span className="bg-red-950 text-red-300 border border-red-800 text-xs px-3 py-1 rounded-full">Assassination Order — Documented</span>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-white leading-tight mb-1">
                He Didn't Know He Was Being Recorded.
              </h2>
              <p className="text-[hsl(38,92%,50%)] font-bold text-base leading-snug">
                Tony Ridley — PhD Counter-Terrorism Surveillance, Ex-SAS, Senior Fraud Investigator — Sent as a Government Honeypot. Barran Recorded the Entire Drugged Session.
              </p>
            </div>

            {/* YouTube embed */}
            <div className="rounded-xl overflow-hidden border border-zinc-700/50 shadow-xl aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/4vqBFkojD2g"
                title="Tony Ridley — Paid Government SAS Honeypot Recording — Barran Dodger"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                data-testid="video-tony-ridley-honeypot-sos"
              />
            </div>
            <p className="text-zinc-500 text-xs text-center">Primary evidence — recorded by Dr. Richard McLean during a drug-facilitated entrapment session. ICC Article 7 exhibit. ABN 78 833 496 164.</p>

            {/* The 8 pillars */}
            <div className="space-y-4 pt-2">

              {/* Pillar 1 — Who Ridley is */}
              <div className="bg-zinc-900/60 border border-red-800/30 rounded-xl p-4">
                <p className="text-red-300 font-black text-xs uppercase tracking-widest mb-2">1 — Who Tony Ridley Is — And Why His Credentials Make This Worse</p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Tony Ridley is not an ordinary criminal. He holds a <strong className="text-white">PhD in counter-terrorism surveillance</strong>, is a former <strong className="text-white">senior fraud investigator</strong> with a track record of exposing financial crime at scale, and carries <strong className="text-white">status of international significance</strong>. He was not chosen despite these credentials — he was chosen <em>because</em> of them. A honeypot agent must be credible enough that if the target ever spoke out, the agent's institutional standing would override the target's account. Against an unprotected, impoverished, disabled whistleblower, those credentials were meant to be decisive. They were not. Because Barran recorded everything.
                </p>
              </div>

              {/* Pillar 2 — The drugged session */}
              <div className="bg-zinc-900/60 border border-red-800/30 rounded-xl p-4">
                <p className="text-red-300 font-black text-xs uppercase tracking-widest mb-2">2 — The Drugged Entrapment — Sex, Drugs, and a Recording He Didn't Know Existed</p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  The operation involved sexual exploitation and drug facilitation — documented instruments of a honeypot entrapment designed to compromise, destabilise, and produce either incriminating material or a breakdown. Ridley believed he was in control of the room. He was not. Dr. McLean recorded the entire session. On that recording, Tony Ridley — speaking freely, confident he was unobserved — disclosed the existence of <strong className="text-white">approximately $6 billion in misappropriated government funds</strong> that he had personally encountered as a fraud investigator. He named <strong className="text-red-300">Bill Shorten</strong> as someone who was aware of those funds. The confession was not elicited. It was volunteered by someone who thought no one was listening.
                </p>
              </div>

              {/* Pillar 3 — Shorten */}
              <div className="bg-zinc-900/60 border border-red-800/30 rounded-xl p-4">
                <p className="text-red-300 font-black text-xs uppercase tracking-widest mb-2">3 — Bill Shorten — Named on the Recording — His Knowledge and Coordination</p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  The Ridley recording establishes three things about Shorten: (a) he was aware of the $6 billion misappropriation; (b) he would have been aware that Dr. McLean had already exposed NDIS corruption and was an <strong className="text-white">unprotected whistleblower</strong>; and (c) the coordinated attack that followed — involving the <strong className="text-white">NDIS, the police, the magistrates court, and Graeme Wells of Victoria Legal Aid</strong> — did not occur in a vacuum. Four independent institutions acting simultaneously against a single disabled whistleblower, at the same moment, with the same suppression purpose, is not coincidence. It is coordination. Coordination requires a coordinator.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {[
                    { name: "NDIS", action: "Withdrew support. Enabled financial coercive control. Providers weaponised." },
                    { name: "NSW Police", action: "Deployed against Barran rather than for him. No action on assassination documentation." },
                    { name: "Magistrates Court", action: "Part of the coordinated judicial pressure. Administrative annihilation documented." },
                    { name: "Victoria Legal Aid — Graeme Wells", action: "Denied representation to a disabled, impoverished person with an ICC submission." },
                  ].map((item, i) => (
                    <div key={i} className="bg-zinc-800/60 border border-zinc-700/30 rounded-lg p-2.5">
                      <p className="text-[hsl(38,92%,50%)] font-bold text-xs">{item.name}</p>
                      <p className="text-zinc-400 text-xs mt-1">{item.action}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillar 4 — Exile */}
              <div className="bg-zinc-900/60 border border-red-800/30 rounded-xl p-4">
                <p className="text-red-300 font-black text-xs uppercase tracking-widest mb-2">4 — Forced Into Political Exile — Removed From the Torture Chamber</p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Following the coordinated institutional attack, Barran was removed from what the archive describes as a torture chamber — an environment of systematic persecution, isolation, and psychological destruction maintained through the combined action of the institutions above. The removal was not voluntary in any meaningful sense: it was the only survivable option after every protective mechanism had been withdrawn or weaponised. The UNHCR recognises this as political exile. It is documented in the submission. The ICC has the record.
                </p>
              </div>

              {/* Pillar 5 — Ben, Meraby, NDA */}
              <div className="bg-zinc-900/60 border border-red-800/30 rounded-xl p-4">
                <p className="text-red-300 font-black text-xs uppercase tracking-widest mb-2">5 — Ben, Houd Meraby, and the Assassination Order — Confirmed, Not Alleged</p>
                <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                  The assassination attempt is not an allegation. It is a documented event confirmed in writing by an independent NDIS provider named <strong className="text-white">Ben</strong>. Ben confirmed that an assassination order had been issued — the trail leads to Shorten — to <strong className="text-red-300">Houd Meraby</strong>, who was presented as an NDIS provider but was not. Meraby is documented as part of a <strong className="text-white">Lebanese corrupt criminal network sent to "erase" Barran</strong> under the cover of disability support.
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Upon confirming the assassination attempt, Ben was forced to sign a <strong className="text-white">Non-Disclosure Agreement by the secret service</strong>. An NDA signed under intelligence-service compulsion — by a witness to a state-coordinated assassination attempt against a whistleblower — is not a civil contract. It is evidence of consciousness of guilt. It establishes that the intelligence services knew what Ben knew and needed his silence. The NDA does not suppress the knowledge. It documents the suppression attempt. The suppression attempt is now part of the ICC record.
                </p>
              </div>

              {/* Pillar 6 — Structural pattern */}
              <div className="bg-zinc-900/60 border border-red-800/30 rounded-xl p-4">
                <p className="text-red-300 font-black text-xs uppercase tracking-widest mb-2">6 — Every NDIS Provider — The Same Criminal Structure</p>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Ben's confirmation extended beyond Houd Meraby. He confirmed that the criminal structure underlying the Meraby deployment applies to the pattern of NDIS provider conduct across Barran's entire documented history of hospitalisations and entrapments. <strong className="text-white">Every single hospitalisation. Every entrapment. The same structure. The same coordination. The same purpose.</strong> The NDIS — presented as a disability support framework — has been used, in Barran's case, as a mechanism of coercive control, targeted persecution, financial deprivation, and assassination facilitation. Under Article 7 of the Rome Statute, this is the definition of a systematic attack. The ICC has the submission.
                </p>
              </div>

              {/* Pillar 7 — Brett / AbleCare continuum */}
              <div className="bg-zinc-900/60 border border-amber-800/30 rounded-xl p-4">
                <p className="text-[hsl(38,92%,50%)] font-black text-xs uppercase tracking-widest mb-2">7 — Brett of AbleCare — The Current Iteration of the Same Structure</p>
                <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                  Brett of AbleCare is not a separate case. He is the current personnel of the same apparatus that deployed Tony Ridley, that placed Houd Meraby, that silenced Ben, that coordinated the withdrawal of legal aid. The entrapment policy does not change its method — it changes its face. Brett is the current face. And Barran is presently maintained in the same conditions that have applied throughout:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { condition: "Impoverished", detail: "NDIS funding withheld. AbleCare, TAG (Phillip Glass), Diversitas WA (Sukhi Tear) all documented as blocking approved funds." },
                    { condition: "Tortured", detail: "Systematic isolation, psychological persecution, multiple hospitalisations used as entrapment instruments rather than treatment." },
                    { condition: "Surveilled", detail: "V2K technology documented. SAS and intelligence operatives placed as co-tenants and support workers. Ridley himself disclosed the surveillance apparatus." },
                    { condition: "Denied Legal Aid", detail: "Victoria Legal Aid — Graeme Wells — denied representation. The denial has not been reversed. It is an exhibit." },
                    { condition: "Deliberately Isolated", detail: "Every support mechanism withdrawn or weaponised. No independent advocacy. No protective relationship that is not documented as part of the targeting apparatus." },
                    { condition: "Brett — AbleCare", detail: "Received written SMS of imminent murder warning with 2,304-document link. Did not act. Did not file SIRS. Is now part of the permanent record." },
                  ].map((item, i) => (
                    <div key={i} className="bg-zinc-800/50 border border-zinc-700/30 rounded-lg p-2.5">
                      <p className="text-[hsl(38,92%,50%)] font-bold text-xs">{item.condition}</p>
                      <p className="text-zinc-500 text-xs mt-1">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pillar 8 — The silence */}
              <div className="bg-zinc-900/60 border border-red-800/30 rounded-xl p-4">
                <p className="text-red-300 font-black text-xs uppercase tracking-widest mb-2">8 — Not One Person Has Disproved the Assassination Attempt. Not One.</p>
                <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                  The assassination attempt has been in the public record since Ben's written confirmation was documented. It has been in the ICC submission. It has been downloaded 377,608 times. It has been before the UNHCR. In all of that time — Tony Ridley, Bill Shorten, Houd Meraby, Graeme Wells, Brett of AbleCare, the NDIS, NSW Police — not one person has produced a document, statement, or legal filing that challenges, qualifies, or disproves the claim. Under <strong className="text-white">Jones v Dunkel</strong>, their silence is an inferential admission. It has been legally significant from the first day they declined to respond.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: "Tony Ridley", status: "Recording exists. PhD operative. Zero challenge filed." },
                    { name: "Bill Shorten", status: "Named on recording. Former NDIS Minister. Zero response." },
                    { name: "Houd Meraby", status: "Named by Ben. Assassination operative. Zero response." },
                    { name: "Graeme Wells — VLA", status: "Denied legal aid. Not reversed. Zero correction." },
                    { name: "Brett — AbleCare", status: "Received murder-warning SMS. Did not act. Zero response." },
                    { name: "NSW Police", status: "Verbally slurred Barran on exit. No investigation filed." },
                  ].map((person, i) => (
                    <div key={i} className="bg-zinc-800/50 border border-zinc-700/30 rounded-lg p-2.5">
                      <p className="text-white font-bold text-xs">{person.name}</p>
                      <p className="text-zinc-400 text-xs mt-0.5">{person.status}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <a
              href="/tony-ridley-recorded-confession"
              className="inline-flex items-center gap-2 bg-red-800 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm"
              data-testid="link-tony-ridley-full-page"
            >
              <ExternalLink size={15} /> Full Analysis — Tony Ridley Recorded Confession →
            </a>

          </div>
        </motion.div>

        {/* Key Evidence Links */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
            <FileText size={20} className="text-amber-400" /> Key Documented Evidence — Direct Links
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Complete Forensic Archive — 56 Analyses", href: "/forensic-analysis-index", internal: true },
              { label: "Evidence Vault — Primary Documents", href: "/evidence-vault", internal: true },
              { label: "ICC Article 7 Submission", href: "/icc-submission", internal: true },
              { label: "Free Downloads — All 56 EPUB Reports", href: "/free-ebooks", internal: true },
              { label: "Able Care Entrapment Network", href: "/able-care-entrapment-network", internal: true },
              { label: "Tony Ridley Death Threat Archive", href: "/evidence-vault", internal: true },
              { label: "Download Barran Dodger Archive (Scribd)", href: "https://www.scribd.com/user/832988488/Richard-McLean", internal: false },
              { label: "Contact — Proton Encrypted Email", href: "mailto:drbarrandodger@proton.me", internal: false },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.internal ? undefined : "_blank"}
                rel={link.internal ? undefined : "noopener noreferrer"}
                className="flex items-center gap-3 bg-zinc-900/60 border border-zinc-700/40 hover:border-amber-600/50 rounded-lg p-3.5 transition-colors group"
                data-testid={`link-sos-evidence-${i}`}
              >
                <ExternalLink size={14} className="text-amber-400 group-hover:text-amber-300 flex-shrink-0" />
                <span className="text-zinc-200 group-hover:text-white text-sm transition-colors">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Final Call */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="bg-gradient-to-br from-red-950/70 to-zinc-900/80 border border-red-800/50 rounded-2xl p-8 text-center">
            <AlertTriangle size={32} className="text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              If You Can Help — Contact Now
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed mb-6">
              35 years of documented persecution. 2,304 blockchain-verified exhibits. ICC The Hague. UNHCR Geneva. 617 forensic propositions verified. Zero contradictions. One person, still alive, still documenting, still at 55B Archbold Road, Long Jetty NSW — asking for physical harbouring, legal representation, and a person of integrity to stand with them.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a
                href="mailto:drbarrandodger@proton.me"
                className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
                data-testid="btn-sos-email"
              >
                <Mail size={16} /> Email — drbarrandodger@proton.me
              </a>
              <a
                href="tel:+61431167907"
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
                data-testid="btn-sos-phone"
              >
                <Phone size={16} /> Call — +61 431 167 907
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-zinc-500">
              <span className="flex items-center gap-1"><Shield size={12} /> ICC Article 7 — The Hague — Formally Received</span>
              <span className="flex items-center gap-1"><Globe size={12} /> UNHCR Geneva — Formally Filed</span>
              <span className="flex items-center gap-1"><Zap size={12} /> Barran Dodger Legal & Ethical Trust Fund | ABN 78 833 496 164</span>
            </div>
          </div>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
}
