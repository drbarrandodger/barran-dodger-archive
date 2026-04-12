import { motion } from "framer-motion";
import { AlertTriangle, MapPin, Phone, Mail, Shield, FileText, Globe, Heart, Scale, Zap, ExternalLink, Download, Eye, Home, Landmark } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
