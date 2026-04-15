import { motion } from "framer-motion";
import { AlertTriangle, MapPin, Phone, Mail, Shield, FileText, Globe, Heart, Scale, Zap, ExternalLink, Download, Eye, Home, Landmark, Lock, Camera, MessageSquare, UserX, Link2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ViralDownloadButton } from "@/components/ViralDownloadButton";
import scruffIasonidisEmbezzle from "@assets/IMG_0013_1776207977160.png";
import benAssassination from "@assets/IMG_1004_1776208003721.png";
import benBillShorten from "@assets/IMG_1005_1776208003721.png";
import benHitmenCaught from "@assets/27A51392-28E5-40D2-B8A9-A9BFE2D35452_1776208003721.png";
import benConsensualSex from "@assets/IMG_0352_1776208003721.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function UrgentProtectionRequest() {
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
                      "Publishing these videos globally — with 368,000+ downloads of corroborating documentation — establishes a public evidentiary chain. Any institutional referral based on these encounters must now contend with the counter-record being visible internationally.",
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
                        body: "The archive exists on Replit, GitHub, Scribd, Wayback Machine, and multiple international platforms. It is EPUB-distributed across 6 continents. 368,000+ downloads. The 'key' — the evidentiary record — cannot be suppressed because it has already been distributed beyond any institutional reach. Arresting the witness does not delete the testimony. This is why the ICC submission matters and why the response to the submission has been — silence."
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
