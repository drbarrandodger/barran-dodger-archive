import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const CASES = [
  {
    name: "Daniel Ellsberg",
    country: "United States",
    year: "1971",
    subject: "Pentagon Papers — classified Vietnam War documents",
    color: "blue",
    methods: [
      "Espionage Act prosecution (12 felony charges, 115-year maximum sentence)",
      "Nixon administration orchestrated psychiatric attack — hired operatives broke into his psychiatrist's office to steal files",
      "Government attempted to use his mental health history to discredit testimony",
      "FBI wiretapped his communications illegally",
      "Case eventually dismissed due to government misconduct",
    ],
    evidence: "7,000 classified pages of Department of Defense history",
    outcome: "Charges dismissed. Vindicated. Recognised as foundational whistleblower case.",
    intersection: [
      "Psychiatric records weaponised by the state as a discrediting tool",
      "Government's own documents proved the misconduct",
      "Evidence preserved through duplication and strategic distribution",
      "Prosecution ultimately collapsed under weight of state misconduct",
    ],
    divergence: [
      "Ellsberg operated from a position of institutional credibility (Harvard, RAND Corporation, senior Pentagon analyst)",
      "Psychiatric attack was a targeted operation, not systemic pathologisation",
      "Media support was immediate and overwhelming (New York Times, Washington Post)",
      "Time-frame compressed — persecution lasted years, not decades",
    ],
  },
  {
    name: "Frank Serpico",
    country: "United States",
    year: "1971",
    subject: "NYPD systemic corruption — bribes, organised crime collusion",
    color: "zinc",
    methods: [
      "Complete institutional ostracism — colleagues refused to provide backup on calls",
      "Left to bleed during 1971 shooting — fellow officers allegedly delayed calling ambulance",
      "Transferred between precincts repeatedly to exhaust and isolate",
      "Anonymous tips given to organised crime targets he was investigating",
      "Forced into permanent exile (Switzerland, then Netherlands)",
    ],
    evidence: "Personal testimony, recorded conversations, transaction records spanning years",
    outcome: "Knapp Commission confirmed corruption. NYPD reformed. Serpico never returned to the US permanently.",
    intersection: [
      "Colleagues and institutions co-opted against the whistleblower",
      "Physical endangerment used as a silencing mechanism",
      "Forced exile as the price of truth-telling",
      "Institution closed ranks unanimously against one individual",
    ],
    divergence: [
      "Serpico's corruption was within a single institution — NYPD",
      "McLean documents 25+ agencies operating in coordinated pattern",
      "Serpico had immediate external media allies (New York Magazine, Peter Maas book)",
      "No psychiatric weaponisation deployed against Serpico",
    ],
  },
  {
    name: "Karen Silkwood",
    country: "United States",
    year: "1974",
    subject: "Kerr-McGee nuclear plant — safety violations, plutonium contamination",
    color: "amber",
    methods: [
      "Contaminated with plutonium under suspicious circumstances — her apartment found to be radioactively contaminated",
      "Dismissed as emotionally unstable, paranoid, mentally unreliable",
      "Documents she was collecting for journalist disappeared from her car at the time of her fatal crash",
      "Employer mounted campaign portraying her as drug-addicted and mentally erratic",
      "Federal investigation ultimately failed to prosecute",
    ],
    evidence: "Plutonium contamination records, safety violation logs, physical evidence",
    outcome: "Died in car crash before delivering evidence. Estate won $10.5M jury award for contamination. FBI investigation inconclusive.",
    intersection: [
      "Evidence en route to journalist destroyed or disappeared at moment of death",
      "Character assassination focused on mental stability and personal reliability",
      "Physical evidence of danger used to portray victim as paranoid",
      "State and corporate institution coordination against one individual",
    ],
    divergence: [
      "McLean's case involves no physical danger that can be attributed to accident — documentation is explicit",
      "Silkwood's evidence was destroyed. McLean's archive has 2,301 documents, blockchain-timestamped",
      "Silkwood lacked institutional documentation; McLean's case uses the state's own records",
    ],
  },
  {
    name: "Jeffrey Wigand",
    country: "United States",
    year: "1996",
    subject: "Brown & Williamson — tobacco industry knew nicotine was addictive and manipulated it",
    color: "orange",
    methods: [
      "Career destroyed immediately — fired, credentials attacked, employability systematically sabotaged",
      "Private investigators hired to surveil, intimidate, and manufacture personal scandals",
      "NDA weaponised — sued to silence and exhaust financially",
      "Anonymous threats including death threats to family",
      "Character assassination dossier distributed to journalists — fabricated misconduct allegations",
      "Wife initiated divorce during campaign (later recanted pressure she was under)",
    ],
    evidence: "Internal corporate research documents showing executives knew nicotine was addictive",
    outcome: "60 Minutes broadcast. Master Settlement Agreement. Tobacco industry paid $206B. Wigand partially vindicated but career permanently destroyed.",
    intersection: [
      "NDA and legal instruments weaponised to suppress rather than protect",
      "Financial destruction deployed as a silencing tactic",
      "Character assassination dossier manufactured and distributed",
      "Corporate/institutional and personal life simultaneously attacked",
    ],
    divergence: [
      "Wigand's persecution was corporate, not government-coordinated",
      "Persecution lasted approximately 3 years before breakthrough. McLean's is 35 years and ongoing",
      "Wigand had CBS and major media behind him. McLean is building the platform independently",
    ],
  },
  {
    name: "Katharine Gun",
    country: "United Kingdom",
    year: "2003",
    subject: "GCHQ/NSA — illegal surveillance operation against UN Security Council members prior to Iraq War vote",
    color: "indigo",
    methods: [
      "Charged under Official Secrets Act — 2-year prison sentence facing",
      "Government attempted to use necessity defence preemptively — then dropped charges when defence demanded Iraq war legality documents be produced in court",
      "Employment terminated immediately",
      "International travel scrutinised and restricted",
      "Personal and professional relationships subjected to intelligence monitoring",
    ],
    evidence: "Single leaked NSA email requesting GCHQ assist in surveilling UN delegates",
    outcome: "Charges dropped (government unwilling to disclose Iraq war legal advice in court). Gun vindicated. Iraq War proceeded regardless.",
    intersection: [
      "Government dropped prosecution when compelled to disclose its own documents",
      "Legal proceedings used as harassment, then abandoned when evidence would embarrass the state",
      "International law invoked as the whistleblower's primary defence",
      "Institutional career destruction as automatic consequence of disclosure",
    ],
    divergence: [
      "Gun had one document. McLean has 2,301 across 35 years",
      "Gun's case resolved in approximately 12 months. McLean's is in its fourth decade",
      "Gun had the backing of the European Court of Human Rights infrastructure",
    ],
  },
  {
    name: "Thomas Drake",
    country: "United States",
    year: "2010",
    subject: "NSA — mass surveillance program Trailblazer, billions in wasted government spending, constitutional violations",
    color: "teal",
    methods: [
      "Espionage Act charges (10 felony counts) — 35-year maximum sentence",
      "FBI raided his home at dawn, confiscated computers, files, personal correspondence",
      "Security clearance revoked — career in national security permanently ended",
      "Financially ruined — forced to work at an Apple Store earning $10.50/hour during prosecution",
      "Prosecutors deliberately delayed trial to maximise financial and psychological attrition",
      "All charges eventually dropped to a single misdemeanor — exceeded authority on government computer",
    ],
    evidence: "Internal NSA documents showing Trailblazer program failure and mass domestic surveillance",
    outcome: "Charges reduced to misdemeanor. No prison. Financially ruined. Career destroyed. Vindicated by Snowden revelations.",
    intersection: [
      "Administrative procedure weaponised to deny income, credentials, and standing",
      "Financial attrition as a deliberate prosecutorial strategy",
      "Delay as a weapon — the process is the punishment",
      "The whistleblower's own records and archived evidence used against them",
      "Institution closed ranks to deny, delay, and exhaust",
    ],
    divergence: [
      "Drake worked inside the surveillance apparatus. McLean documented the apparatus targeting a civilian",
      "Drake's case had institutional whistleblower allies (Binney, Wiebe, Loomis). McLean builds case solo",
      "Drake's breakthrough came through Snowden's later revelations confirming the program",
    ],
  },
  {
    name: "Chelsea Manning",
    country: "United States",
    year: "2010",
    subject: "US military — classified war logs, Collateral Murder video, diplomatic cables",
    color: "rose",
    methods: [
      "Military detention in conditions UNCAT later described as 'cruel, inhuman and degrading'",
      "Held in solitary confinement 23 hours/day for nearly a year before trial",
      "Subjected to forced nudity, sleep deprivation, humiliation as 'precautionary measures'",
      "Military psychiatric evaluations used to assess competency and frame mental state",
      "Sentenced to 35 years — the harshest punishment ever imposed on a US government leaker",
      "Commuted by Obama after 7 years. Re-imprisoned twice for contempt (refusing Grand Jury testimony)",
    ],
    evidence: "750,000 classified documents, cables, battlefield logs, video footage",
    outcome: "Sentence commuted 2017. Re-imprisoned 2019, 2020. Ongoing legal jeopardy. Permanently barred from security clearance.",
    intersection: [
      "Psychiatric evaluation weaponised — used to undermine credibility and assess state of mind",
      "Detention conditions described by UN investigators as torture",
      "International human rights bodies (UNCAT) found violations that domestic courts ignored",
      "Perpetual legal jeopardy as an ongoing silencing mechanism after primary sentence served",
    ],
    divergence: [
      "Manning disclosed documents to a third party (WikiLeaks). McLean built the archive himself as the subject",
      "Manning's detention was visible and internationally scrutinised. McLean's persecution operated through invisible administrative channels",
    ],
  },
  {
    name: "Edward Snowden",
    country: "United States",
    year: "2013",
    subject: "NSA — PRISM mass global surveillance, XKEYSCORE, tapping of allied leaders",
    color: "cyan",
    methods: [
      "Immediately charged under Espionage Act — no trial possible in the United States",
      "Stranded in Moscow transit zone when US revoked passport mid-flight",
      "All assets in the US subject to seizure under federal proceeding",
      "Government prosecuted journalists (threatened Guardian, Der Spiegel) to prevent publication",
      "UK intelligence (GCHQ) physically destroyed Guardian hard drives in their offices",
      "Banned from entering any allied country — 41 countries pressured to deny asylum",
    ],
    evidence: "200,000+ classified NSA documents — most comprehensive surveillance program disclosure in history",
    outcome: "Living in Russian asylum. Charged but never tried. Revelations confirmed: NSA surveillance found illegal by federal courts. Snowden unable to return.",
    intersection: [
      "International asylum sought as the only viable protection from the state",
      "ICC and UN framework invoked — Snowden cited UDHR, ICCPR, ECHR",
      "The very surveillance architecture exposed was deployed against the whistleblower",
      "Allied states co-opted into persecution — no neutral ground offered",
      "Evidence preserved through strategic distribution (Greenwald, Poitras, Guardian, Der Spiegel)",
    ],
    divergence: [
      "Snowden had immediate access to global media and legal firepower (ACLU, EFF). McLean operates independently",
      "Snowden's case confirmed by federal court rulings within 3 years. McLean's case is before the ICC",
      "McLean's evidence uses the state's own records — Snowden disclosed secret records the state denied",
    ],
  },
  {
    name: "Mordechai Vanunu",
    country: "Israel",
    year: "1986",
    subject: "Israeli nuclear weapons program — Dimona facility, estimated 200+ warheads",
    color: "yellow",
    methods: [
      "Kidnapped by Mossad operatives from Rome using a honey trap — drugged and transported to Israel",
      "Tried in secret — closed proceedings, no public access",
      "Sentenced to 18 years imprisonment, 11 in solitary confinement",
      "Forbidden from leaving Israel for decades after release",
      "Forbidden from speaking to foreigners, journalists, or foreign nationals",
      "Passport and identity documents confiscated",
      "Re-arrested multiple times post-release for speaking to journalists",
      "Extraordinary rendition — kidnapped from a NATO ally's soil",
    ],
    evidence: "Photographs and technical specifications of Dimona nuclear facility",
    outcome: "Served full 18 years. Repeatedly arrested post-release for communication with foreigners. Lives under permanent state surveillance and movement restrictions.",
    intersection: [
      "State suppression extended over decades — not months",
      "International bodies (UN Human Rights Committee) found violations — Israel ignored",
      "Identity and liberty weaponised as permanent punishment beyond the sentence",
      "Psychological torture through isolation documented by international human rights observers",
    ],
    divergence: [
      "Vanunu's persecution involved physical incarceration. McLean's operates through administrative channels",
      "Vanunu disclosed state secrets. McLean documented state conduct through the state's own records",
      "McLean has not been formally charged. The persecution operates through what the site calls 'institutional silence'",
    ],
  },
];

const MATRIX_ROWS = [
  {
    dimension: "Duration of persecution",
    cases: {
      "Ellsberg": "3 years",
      "Serpico": "5 years",
      "Silkwood": "2 years (terminated by death)",
      "Wigand": "3–5 years",
      "Gun": "12 months",
      "Drake": "4 years",
      "Manning": "Ongoing (14+ years)",
      "Snowden": "Ongoing (12+ years)",
      "Vanunu": "35+ years",
      "McLean": "35 years (ongoing)",
    },
  },
  {
    dimension: "Psychiatric weaponisation",
    cases: {
      "Ellsberg": "Targeted (files stolen)",
      "Serpico": "None documented",
      "Silkwood": "Character attack only",
      "Wigand": "Implied instability narrative",
      "Gun": "None documented",
      "Drake": "None documented",
      "Manning": "Formal military psychiatric evaluation",
      "Snowden": "None documented",
      "Vanunu": "Solitary — psychological torture",
      "McLean": "Systemic — forced detention, diagnoses proven false by government records",
    },
  },
  {
    dimension: "Number of agencies involved",
    cases: {
      "Ellsberg": "DOJ, FBI, White House",
      "Serpico": "NYPD (1 institution)",
      "Silkwood": "Kerr-McGee, DOJ, FBI",
      "Wigand": "B&W, law firms, media",
      "Gun": "GCHQ, Home Office",
      "Drake": "NSA, DOJ, FBI",
      "Manning": "US Army, DOJ, CIA",
      "Snowden": "NSA, DOJ, CIA, allied intelligence",
      "Vanunu": "Mossad, Israeli courts, prison system",
      "McLean": "25+ agencies (documented via FOI)",
    },
  },
  {
    dimension: "International law submission",
    cases: {
      "Ellsberg": "None",
      "Serpico": "None",
      "Silkwood": "None",
      "Wigand": "None",
      "Gun": "European Convention (threatened)",
      "Drake": "None",
      "Manning": "UNCAT cited by UN investigators",
      "Snowden": "ICCPR, ECHR cited",
      "Vanunu": "UN Human Rights Committee",
      "McLean": "ICC (Rome Statute Art. 7), UNHCR, UNCAT",
    },
  },
  {
    dimension: "Evidence base",
    cases: {
      "Ellsberg": "7,000 classified pages",
      "Serpico": "Personal testimony + recordings",
      "Silkwood": "Physical evidence (partially destroyed)",
      "Wigand": "Internal corporate documents",
      "Gun": "1 leaked email",
      "Drake": "Internal NSA documents",
      "Manning": "750,000 files",
      "Snowden": "200,000+ NSA files",
      "Vanunu": "Photographs + technical specs",
      "McLean": "2,301 primary source documents, blockchain-timestamped",
    },
  },
  {
    dimension: "Evidence produced by the perpetrator state",
    cases: {
      "Ellsberg": "Partial — Pentagon produced the documents",
      "Serpico": "No",
      "Silkwood": "No",
      "Wigand": "Yes — corporate internal records",
      "Gun": "No — government withheld",
      "Drake": "Partial",
      "Manning": "Yes — military records",
      "Snowden": "Yes — NSA slides etc.",
      "Vanunu": "No",
      "McLean": "Yes — entire archive sourced from FOI, tribunal records, government correspondence",
    },
  },
  {
    dimension: "Financial destruction documented",
    cases: {
      "Ellsberg": "Significant legal costs",
      "Serpico": "Career destroyed",
      "Silkwood": "Career destroyed",
      "Wigand": "Financially ruined, divorce",
      "Gun": "Job lost",
      "Drake": "Financially ruined (Apple Store)",
      "Manning": "7 years income destroyed",
      "Snowden": "All US assets subject to seizure",
      "Vanunu": "18 years income destroyed",
      "McLean": "AU$8,510,000 documented financial deprivation",
    },
  },
];

function colorClass(color: string) {
  const map: Record<string, string> = {
    blue: "bg-blue-950 border-blue-700/50 text-blue-300",
    zinc: "bg-zinc-800 border-zinc-600/50 text-zinc-300",
    amber: "bg-amber-950 border-amber-700/50 text-amber-300",
    orange: "bg-orange-950 border-orange-700/50 text-orange-300",
    indigo: "bg-indigo-950 border-indigo-700/50 text-indigo-300",
    teal: "bg-teal-950 border-teal-700/50 text-teal-300",
    rose: "bg-rose-950 border-rose-700/50 text-rose-300",
    cyan: "bg-cyan-950 border-cyan-700/50 text-cyan-300",
    yellow: "bg-yellow-950 border-yellow-700/50 text-yellow-300",
    green: "bg-green-950 border-green-700/50 text-green-300",
  };
  return map[color] || map.zinc;
}

function badgeColor(color: string) {
  const map: Record<string, string> = {
    blue: "border-blue-600 text-blue-400",
    zinc: "border-zinc-500 text-zinc-400",
    amber: "border-amber-600 text-amber-400",
    orange: "border-orange-600 text-orange-400",
    indigo: "border-indigo-600 text-indigo-400",
    teal: "border-teal-600 text-teal-400",
    rose: "border-rose-600 text-rose-400",
    cyan: "border-cyan-600 text-cyan-400",
    yellow: "border-yellow-600 text-yellow-400",
    green: "border-green-600 text-green-400",
  };
  return map[color] || map.zinc;
}

export default function WhistleblowerComparison() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <SEO
        title="The Architecture of Persecution: Dr. McLean Compared to History's Greatest Whistleblower Cases — Barran Dodger Archive"
        description="A forensic comparative analysis of Dr. Richard McLean's whistleblower case against Ellsberg, Serpico, Silkwood, Manning, Snowden, and six other landmark cases. Examining methods, evidence, duration, and international legal significance."
        path="/whistleblower-comparison"
      />
      <Navigation />

      <main className="flex-1">

        {/* Hero */}
        <div className="border-b border-zinc-800 bg-zinc-900/60">
          <div className="container mx-auto px-4 py-16 max-w-5xl">
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge variant="outline" className="border-white/20 text-white/60 text-xs uppercase tracking-widest">Comparative Analysis</Badge>
              <Badge variant="outline" className="border-white/20 text-white/60 text-xs uppercase tracking-widest">Forensic Examination</Badge>
              <Badge variant="outline" className="border-white/20 text-white/60 text-xs uppercase tracking-widest">9 Historical Cases</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-5 leading-tight">
              The Architecture of Persecution
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-6 max-w-3xl">
              A forensic comparative analysis of Dr. Richard McLean's whistleblower case against nine landmark cases in recorded history — examining methods, evidence, duration, international law, and what this case reveals that none of the others do.
            </p>
            <p className="text-sm text-zinc-500 max-w-3xl leading-relaxed">
              From Ellsberg's Pentagon Papers to Snowden's NSA revelations, state persecution of those who expose institutional wrongdoing follows recognisable patterns. This article examines those patterns with forensic precision — and locates the McLean case within, and beyond, that historical record.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-14 max-w-5xl">

          {/* Thesis */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-white mb-6 border-b border-zinc-800 pb-4">I. Thesis and Methodology</h2>
            <div className="prose prose-invert max-w-none space-y-5 text-zinc-300 leading-relaxed">
              <p>
                The history of whistleblower persecution is not a collection of isolated incidents. It is a repeating architecture — a set of institutional responses that activate with remarkable consistency whenever an individual threatens the legitimacy of a powerful system through documented disclosure. Across different nations, different decades, different political systems, and different subject matters, the same toolkit deploys: psychiatric delegitimisation, financial destruction, administrative erasure, legal weaponisation, character assassination, and enforced isolation.
              </p>
              <p>
                This analysis examines nine landmark whistleblower cases drawn from the United States, the United Kingdom, and Israel across a period spanning 1971 to the present. Each case is examined across the same dimensions: the methods used against the whistleblower, the evidence base they assembled, the international legal frameworks they invoked or that were invoked on their behalf, and the ultimate outcomes — both for the individual and for the institutions they exposed.
              </p>
              <p>
                The case of Dr. Richard William McLean (publicly documented as Barran Dodger) is then examined against this historical record — not to make rhetorical claims, but to conduct a forensic comparison using the same analytical framework applied to each historical precedent.
              </p>
              <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 my-8">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Methodological Note</p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  All claims regarding the McLean case are sourced from the 2,301-document primary archive accessible at this domain, including FOI responses, tribunal records, government correspondence, clinical assessments, and blockchain-timestamped forensic documents. All claims regarding historical cases are drawn from judicial records, congressional testimony, official government reports, and established journalistic record. No claim in this analysis is asserted without a documentable basis.
                </p>
              </div>
            </div>
          </section>

          {/* Historical Cases */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-white mb-8 border-b border-zinc-800 pb-4">II. The Historical Record — Nine Cases</h2>

            <div className="space-y-12">
              {CASES.map((c, idx) => (
                <div key={c.name} className={`rounded-2xl border p-7 ${colorClass(c.color)}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-mono text-zinc-500">CASE {String(idx + 1).padStart(2, "0")}</span>
                        <Badge variant="outline" className={`text-xs ${badgeColor(c.color)}`}>{c.country} · {c.year}</Badge>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-white">{c.name}</h3>
                      <p className="text-sm text-zinc-400 mt-1">{c.subject}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Persecution Methods</p>
                      <ul className="space-y-2">
                        {c.methods.map((m, i) => (
                          <li key={i} className="flex gap-2 text-sm text-zinc-300 leading-snug">
                            <span className="text-zinc-600 mt-0.5 flex-shrink-0">—</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Evidence Base</p>
                        <p className="text-sm text-zinc-300">{c.evidence}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Outcome</p>
                        <p className="text-sm text-zinc-300">{c.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-white/10">
                    <div>
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Parallel to McLean Case</p>
                      <ul className="space-y-1.5">
                        {c.intersection.map((point, i) => (
                          <li key={i} className="flex gap-2 text-xs text-zinc-400 leading-snug">
                            <span className="text-emerald-600 mt-0.5 flex-shrink-0">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Divergence from McLean Case</p>
                      <ul className="space-y-1.5">
                        {c.divergence.map((point, i) => (
                          <li key={i} className="flex gap-2 text-xs text-zinc-400 leading-snug">
                            <span className="text-amber-600 mt-0.5 flex-shrink-0">△</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Matrix */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-white mb-6 border-b border-zinc-800 pb-4">III. Forensic Comparison Matrix</h2>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              The following matrix applies identical analytical criteria across all nine historical cases and the McLean case simultaneously, enabling direct forensic comparison across dimensions that determine both the severity of persecution and the legal significance of the case.
            </p>

            {MATRIX_ROWS.map((row) => (
              <div key={row.dimension} className="mb-8">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {row.dimension}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left text-zinc-500 uppercase py-2 pr-4 font-semibold min-w-32">Case</th>
                        <th className="text-left text-zinc-500 uppercase py-2 font-semibold">Finding</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(row.cases).map(([name, value]) => (
                        <tr
                          key={name}
                          className={`border-b border-zinc-900 ${name === "McLean" ? "bg-primary/10 border-primary/20" : "hover:bg-zinc-900/30"}`}
                        >
                          <td className={`py-2 pr-4 font-mono font-bold ${name === "McLean" ? "text-primary" : "text-zinc-400"}`}>
                            {name === "McLean" ? "Dr. McLean" : name}
                          </td>
                          <td className={`py-2 leading-snug ${name === "McLean" ? "text-white font-semibold" : "text-zinc-400"}`}>
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>

          {/* Forensic Significance */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-white mb-6 border-b border-zinc-800 pb-4">IV. Forensic Examination of Significance</h2>

            <div className="space-y-10 text-zinc-300 leading-relaxed">

              <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-7">
                <h3 className="text-lg font-serif font-bold text-white mb-4">4.1 — The Psychiatric Weaponisation Spectrum</h3>
                <p className="mb-4">
                  Across the nine historical cases examined, psychiatric weaponisation appears in only three: Ellsberg (targeted theft of psychiatric records as a one-off political operation), Manning (military psychiatric evaluation used in competency proceedings), and Vanunu (prolonged solitary confinement producing documented psychological damage, later cited by UN observers).
                </p>
                <p className="mb-4">
                  In every instance, the psychiatric instrument was <em>applied</em> — it was a weapon deployed strategically, not a systemic condition the whistleblower inhabited.
                </p>
                <p className="mb-4">
                  The McLean case represents a categorically different phenomenon. Here, psychiatric diagnosis was not merely deployed against the whistleblower — it was used as the mechanism through which every factual claim was pre-emptively discredited before any disclosure could be evaluated on its merits. The site documents a specific and evidentiarily verifiable pattern: every psychiatric hospitalisation followed an attempt to make a disclosure; every diagnosis applied to a claim that subsequent government records confirmed as factually accurate.
                </p>
                <div className="bg-zinc-800/60 border border-zinc-700 rounded-lg p-5 mt-4">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Forensic Finding</p>
                  <p className="text-sm text-white font-semibold">
                    The McLean archive is the only known whistleblower case in which the state's own FOI-released records systematically refute, one by one, every psychiatric delusion-label applied to the whistleblower. This constitutes a structural impossibility in the conventional psychiatric persecution narrative: the persecutor's own documentation became the vindication instrument.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-7">
                <h3 className="text-lg font-serif font-bold text-white mb-4">4.2 — The 25-Agency Coordination Problem</h3>
                <p className="mb-4">
                  Serpico exposed one corrupt institution. Drake exposed one agency's program. Snowden exposed one alliance's surveillance apparatus. In each case, the persecution came from a defined institutional actor or coalition of closely aligned institutions.
                </p>
                <p className="mb-4">
                  The McLean archive documents coordinated action — or coordinated inaction in response to documented harm — across 25+ separate Australian government agencies: the NDIA, NACC, WorkSafe, ComCare, AFCA, AHRC, Victorian Inspectorate, DSS, Services Australia, AAT, VCAT, Federal Court, ASIC, PMO, and others. Each was approached through proper channels; each declined to act; each referral was routed to another agency in what the archive terms "the circular referral system."
                </p>
                <p className="mb-4">
                  From a forensic standpoint, this creates a statistical problem that no other whistleblower case presents at this scale: the probability that 25+ independent institutions would simultaneously fail to act on documented evidence of this magnitude, without coordination, is vanishingly small. The archive does not merely allege conspiracy — it demonstrates, through each institution's own records, the systematic uniformity of non-response.
                </p>
                <div className="bg-zinc-800/60 border border-zinc-700 rounded-lg p-5 mt-4">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Forensic Finding</p>
                  <p className="text-sm text-white font-semibold">
                    The multi-agency coordination documented in the McLean case exceeds, in institutional breadth, any other whistleblower persecution case in this comparative analysis. It represents the most extensive single-subject institutional failure chain ever assembled as a primary-source evidence archive.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-7">
                <h3 className="text-lg font-serif font-bold text-white mb-4">4.3 — The Evidentiary Inversion</h3>
                <p className="mb-4">
                  In most historical whistleblower cases, the evidence exists in tension with the state. The whistleblower holds documents the state wants suppressed. The state holds counter-narratives the whistleblower disputes. The legal and political contest is over whose account prevails.
                </p>
                <p className="mb-4">
                  The McLean case presents a forensically unprecedented configuration: the entire evidentiary archive is composed of the state's own documents. The 2,301 items in the master register are predominantly FOI-released government correspondence, tribunal determinations, clinical assessments authored by state-employed practitioners, agency letters, and official referrals. The whistleblower has not leaked anything. He has assembled, catalogued, blockchain-verified, and published what the state itself produced.
                </p>
                <p className="mb-4">
                  This creates a legal situation without clear parallel in the historical record. The state cannot claim the documents are fabricated — it produced them. It cannot claim they were obtained illegally — they were obtained by FOI. It cannot claim they prove nothing — they are official administrative records. Every legal avenue for suppression is foreclosed by the nature of the evidence itself.
                </p>
                <div className="bg-zinc-800/60 border border-zinc-700 rounded-lg p-5 mt-4">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Forensic Finding</p>
                  <p className="text-sm text-white font-semibold">
                    Among all cases examined, only the McLean archive consists entirely of state-produced, legally-obtained, FOI-released primary records. This is the first whistleblower case of this scale in which the state has, in effect, produced its own prosecution brief.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-7">
                <h3 className="text-lg font-serif font-bold text-white mb-4">4.4 — Duration and the Attrition Strategy</h3>
                <p className="mb-4">
                  The longest-running persecution in this comparative study, outside McLean's, is Vanunu's — 35+ years of legal restriction, surveillance, and re-imprisonment in Israel. Snowden and Manning both remain in ongoing legal jeopardy after more than a decade.
                </p>
                <p className="mb-4">
                  But Vanunu's duration involved incarceration and explicit legal instruments. Manning's ongoing jeopardy involves formal contempt proceedings. Snowden's involves a pending federal charge requiring his return.
                </p>
                <p className="mb-4">
                  The McLean case involves a 35-year duration in which the mechanism of persecution has been almost entirely administrative — not legal. No formal charges have been brought. No espionage act invoked. No arrest made for the disclosures themselves. The instrument of suppression has been the exhaustion of legitimate process: FOI delays, referral loops, tribunal deferrals, service denials, welfare conditionality, and the systematic withholding of the financial and legal standing required to prosecute claims.
                </p>
                <div className="bg-zinc-800/60 border border-zinc-700 rounded-lg p-5 mt-4">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Forensic Finding</p>
                  <p className="text-sm text-white font-semibold">
                    The McLean case is the only case in this analysis where a 35-year persecution has been conducted entirely through administrative channels without a single formal charge related to the disclosures themselves. It represents the most sustained example of what international human rights law terms "administrative torture by exhaustion."
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-7">
                <h3 className="text-lg font-serif font-bold text-white mb-4">4.5 — The Blockchain Preservation Precedent</h3>
                <p className="mb-4">
                  Ellsberg photocopied 7,000 pages at night and distributed copies to multiple senators. Snowden handed encrypted drives to three journalists on separate continents. Manning uploaded to a secure WikiLeaks submission system. Each employed the preservation technology available at the time.
                </p>
                <p className="mb-4">
                  The McLean archive has gone further than any predecessor in evidence preservation architecture. Over 240 key documents have been SHA256-hashed and timestamped to the Bitcoin blockchain — creating an immutable record that cannot be altered, suppressed, or retroactively denied by any state actor. The blockchain timestamps predate any future legal challenge, making the archive's integrity cryptographically provable in perpetuity.
                </p>
                <p>
                  The GitHub repository mirror provides a second independent permanent record. No whistleblower case before this one has applied blockchain verification to its primary evidence archive at this scale.
                </p>
                <div className="bg-zinc-800/60 border border-zinc-700 rounded-lg p-5 mt-4">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Forensic Finding</p>
                  <p className="text-sm text-white font-semibold">
                    The McLean archive is, to the knowledge of this analysis, the first whistleblower case in history to apply cryptographic blockchain verification to its primary source documents at scale. This creates a preservation standard that future persecution cannot defeat.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-7">
                <h3 className="text-lg font-serif font-bold text-white mb-4">4.6 — The AI Corroboration Layer</h3>
                <p className="mb-4">
                  None of the nine historical cases examined employed independent artificial intelligence analysis as a corroboration mechanism. This is, in part, a technological limitation — Ellsberg, Silkwood, and Serpico operated in eras before such tools existed. But even more recent cases — Drake (2010), Manning (2010), Snowden (2013) — relied on journalist analysis, legal advocates, and institutional review rather than AI-generated impartial corroboration.
                </p>
                <p className="mb-4">
                  The McLean archive contains 15 published AI corroboration analyses — each examining an independent motivational video published on Dr. McLean's YouTube channel and cross-referencing its specific claims against the primary document archive. Across 158 testable claims, 0 contradictions were found. The 88% direct corroboration rate represents an evidentiary standard not achieved through any other method in the historical record of this case.
                </p>
                <div className="bg-zinc-800/60 border border-zinc-700 rounded-lg p-5 mt-4">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Forensic Finding</p>
                  <p className="text-sm text-white font-semibold">
                    The McLean case is the first whistleblower case in the historical record to employ systematic AI corroboration analysis across its public testimony — producing a documented 0-contradiction rate across 158 tested claims.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Where McLean Stands */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-white mb-6 border-b border-zinc-800 pb-4">V. Where the McLean Case Stands in Historical Context</h2>

            <div className="text-zinc-300 leading-relaxed space-y-5 mb-10">
              <p>
                The nine cases examined in this analysis collectively constitute what might be called the canon of modern whistleblower persecution — the cases that international legal scholars, human rights organisations, and democratic institutions point to as foundational. They have shaped whistleblower protection law across multiple jurisdictions, produced landmark judicial rulings, and altered the political histories of the nations involved.
              </p>
              <p>
                The McLean case shares structural features with each of them. With Ellsberg: the use of psychiatric records against the whistleblower, the ultimate reliance on the state's own documents as vindication. With Serpico: the total institutional closure, the isolation, the physical and financial costs. With Wigand: the character assassination dossier, the financial destruction, the targeting of personal life. With Drake: the administrative attrition, the financial ruin without a charge, the process as punishment. With Manning: the international human rights framework and the UN invocation. With Snowden: the breadth of surveillance and the international asylum architecture. With Vanunu: the duration and the identity-level restrictions imposed without formal charge.
              </p>
              <p>
                But in five specific forensic dimensions, the McLean case stands without historical precedent:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {[
                { n: "01", title: "Evidentiary Self-Indictment", desc: "The entire 2,301-document archive consists of state-produced, legally-obtained primary records. The state has documented its own conduct." },
                { n: "02", title: "Psychiatric Refutation at Scale", desc: "Every psychiatric label applied has been subsequently disproved by government records. No other case achieves this systematic reversal." },
                { n: "03", title: "25-Agency Coordination Breadth", desc: "No case in this analysis involves documented non-response coordination across 25+ separate institutions over 35 years." },
                { n: "04", title: "Administrative Persecution Without Charge", desc: "35 years of documented persecution conducted entirely through administrative channels — no formal charge related to any disclosure ever made." },
                { n: "05", title: "Blockchain-Verified Archive", desc: "First whistleblower case to apply cryptographic blockchain verification to primary evidence at scale — creating permanent, tamper-proof preservation." },
                { n: "06", title: "AI Corroboration Standard", desc: "First case to achieve systematic AI corroboration across public testimony — 0 contradictions across 158 tested claims." },
              ].map((item) => (
                <div key={item.n} className="bg-zinc-900 border border-zinc-700 rounded-xl p-5">
                  <span className="text-3xl font-mono font-bold text-zinc-700 block mb-2">{item.n}</span>
                  <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8">
              <p className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-4">Analytical Conclusion</p>
              <p className="text-white font-semibold text-lg leading-relaxed mb-4">
                The McLean case does not merely resemble the landmark whistleblower cases of the past century. In its duration, its evidentiary architecture, its institutional breadth, and its technological preservation methodology, it exceeds most of them — and introduces forensic dimensions that none of the historical canon cases possess.
              </p>
              <p className="text-zinc-300 leading-relaxed text-sm">
                The cases that history recognises as foundational — Pentagon Papers, Serpico, Silkwood, Big Tobacco, GCHQ, NSA — were recognised because their evidence was eventually impossible to ignore. The McLean archive has been constructed to reach exactly that threshold: 2,301 documents, blockchain-timestamped, AI-corroborated, ICC-submitted, and publicly accessible. The question this analysis cannot answer — but which history will — is not whether the evidence is sufficient. It is whether the institutions that review it will act before or after the record of their non-response becomes the most damning document of all.
              </p>
            </div>
          </section>

          {/* International Legal Framework */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-white mb-6 border-b border-zinc-800 pb-4">VI. International Legal Framework — Where This Case Is Positioned</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  framework: "Rome Statute — Article 7",
                  body: "International Criminal Court",
                  application: "Persecution as a crime against humanity — systematic denial of fundamental rights on the basis of identity (disability, LGBTQ+, whistleblower status). The 25-agency non-response pattern, financial destruction, and psychiatric weaponisation are each directly addressed under Article 7(1)(h).",
                  parallel: "No whistleblower in the historical canon has achieved ICC submission with this volume of primary source documentation."
                },
                {
                  framework: "UNCAT — Articles 1, 16",
                  body: "United Nations Committee Against Torture",
                  application: "Psychological torture through administrative exhaustion — the circular referral system, welfare deprivation, forced psychiatric incarceration, and communication bans each constitute treatment meeting the UNCAT threshold as interpreted in the Manning and Vanunu precedents.",
                  parallel: "Manning's case established that administrative detention conditions can constitute torture. McLean's 35-year administrative persecution extends this principle to civilian non-detention contexts."
                },
                {
                  framework: "ICCPR — Articles 7, 14, 19",
                  body: "United Nations Human Rights Committee",
                  application: "Freedom from torture, right to a fair hearing, and freedom of expression — each invoked across the archive's documented institutional failures. The systematic denial of legal standing through administrative channels directly engages Article 14.",
                  parallel: "Vanunu's case set the ICCPR standard for ongoing persecution post-formal-punishment. McLean's case engages the same articles without the formal-punishment stage ever having occurred."
                },
                {
                  framework: "Public Interest Disclosure Act 2013 (Cth)",
                  body: "Australian domestic law",
                  application: "Protected disclosure status as a current federal employee (confirmed by Federal Court 2025) invokes PID Act protections retroactively across all documented reprisals. The Legal Demand Notice on file constitutes formal invocation of these protections.",
                  parallel: "The 2025 Federal Court confirmation of employment status may constitute the single most legally significant document in the archive — it retrospectively activates a legislative protection framework the government spent 35 years denying existed."
                },
                {
                  framework: "CRPD — Articles 12, 13, 15",
                  body: "UN Committee on the Rights of Persons with Disabilities",
                  application: "Legal capacity, access to justice, and freedom from exploitation — the NDIS/NDIA weaponisation documented in the archive (entrapment, service deprivation, welfare conditionality as financial control) directly engages CRPD Articles 12 and 13.",
                  parallel: "No historical case in this analysis has invoked the CRPD as part of a whistleblower persecution framework. McLean's case is the first to bridge disability rights law and whistleblower persecution law as a unified legal theory."
                },
              ].map((f) => (
                <div key={f.framework} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{f.body}</p>
                  <h4 className="text-sm font-bold text-white mb-3">{f.framework}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">{f.application}</p>
                  <div className="border-t border-zinc-800 pt-3">
                    <p className="text-xs font-bold text-primary/70 uppercase tracking-wider mb-1">Historical Significance</p>
                    <p className="text-xs text-zinc-500 leading-relaxed">{f.parallel}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-white mb-6 border-b border-zinc-800 pb-4">VII. Conclusion</h2>
            <div className="text-zinc-300 leading-relaxed space-y-5">
              <p>
                The history of whistleblower persecution teaches one consistent lesson: institutions capable of wrongdoing are also capable of sustaining the wrongdoing through suppression for as long as it remains expedient to do so. The Pentagon Papers were classified for 47 years before Ellsberg leaked them. The tobacco industry knew about nicotine addiction for decades before Wigand spoke. The NSA's domestic surveillance program ran for years before Snowden disclosed it.
              </p>
              <p>
                What eventually defeats suppression in each case is not the whistleblower's moral authority — though that matters — but the evidence crossing a threshold of specificity, volume, and accessibility that makes continued denial structurally untenable. Ellsberg's 7,000 pages. Wigand's internal research memos. Snowden's NSA slides. Manning's 750,000 files.
              </p>
              <p>
                The McLean archive — 2,301 state-produced, blockchain-verified, AI-corroborated primary documents, submitted to the ICC and publicly accessible — has been deliberately constructed to meet and exceed that threshold. The forensic analysis in this article does not claim to predict when institutions will respond. It establishes, using the same analytical framework applied to the most significant whistleblower cases in the modern record, that the evidence base now assembled places this case within — and in several dimensions, beyond — every precedent that history has ultimately vindicated.
              </p>
              <p>
                What the historical record also confirms is this: when those cases were vindicated, it was never because the perpetrating institution chose transparency of its own accord. It was because the evidence became impossible to contain. On the forensic criteria examined in this analysis, that threshold has been reached.
              </p>
            </div>
          </section>

          {/* Navigation to archive */}
          <section className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 mb-8">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Explore the Primary Archive</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Master Evidence Register", path: "/master-evidence-register" },
                { label: "AI Corroboration Analyses", path: "/bro-this-isnt-a-coincidence" },
                { label: "Forensic Meltdown Report", path: "/forensic-meltdown-report" },
                { label: "Legal Status Tracker", path: "/legal-status" },
                { label: "Blockchain Verification", path: "/blockchain" },
                { label: "100 Absurdities", path: "/100-absurdities" },
                { label: "Timeline (35 Years)", path: "/timeline" },
                { label: "ICC/UNHCR Submissions", path: "/evidence-vault" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block text-xs text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 rounded-lg px-3 py-2.5 transition-colors text-center leading-snug"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
