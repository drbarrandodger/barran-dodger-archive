import { useState } from "react";
import { Shield, ExternalLink, Download, Mic, Tv, BookOpen, Award, Users, AlertTriangle, ChevronDown, ChevronUp, Gavel, Radio, FileText, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";

export default function ThePublicAdvocateTheySilenced() {
  const [expandedSection, setExpandedSection] = useState<string | null>("ridley");

  const toggle = (id: string) => setExpandedSection(expandedSection === id ? null : id);

  return (
    <>
      <SEO
        title="The Public Advocate They Systematically Silenced | Barran Dodger"
        description="Tony Ridley's named confession of the conspiracy network, Dr. McLean's full 20-year advocacy record, qualifications, awards, and the documented systematic refusal of every professional institution to acknowledge the record of the person who helped them most."
        path="/the-public-advocate-they-silenced"
      />
      <Navigation />
      <main
        className="min-h-screen bg-zinc-950 text-zinc-100"
        style={{ paddingTop: "calc(var(--banner-height, 40px) + var(--nav-height, 64px))" }}
      >
        {/* HERO */}
        <section className="px-4 py-20 max-w-5xl mx-auto text-center space-y-6">
          <Badge className="bg-red-500/10 text-red-400 border-red-500/30 text-xs uppercase tracking-widest font-mono px-4 py-1">
            Primary Forensic Exhibit — Testimony & Advocacy Record
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            The Public Advocate<br className="hidden md:block" /> They Systematically Silenced
          </h1>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            For over twenty years, Dr. Richard McLean publicly advocated for people with mental illness and their carers — in parliament, on national television, in international universities, in psychiatric hospitals, in print media, on every major Australian radio network. He admitted his own failings publicly. He helped thousands. Not one professional institution — police, lawyers, politicians, media, the mental health system — ever acknowledged his story or admitted a single shortcoming in return.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button variant="outline" className="gap-2 border-red-500/40 text-red-300 hover:bg-red-500/10" asChild data-testid="button-download-text-pdf">
              <a href="/documents/the-perfect-mother-myth-familial-betrayal-whistleblower-testimony.pdf" download>
                <Download className="h-4 w-4" />
                Text Message Forensic Record (PDF)
              </a>
            </Button>
            <Button variant="outline" className="gap-2" asChild data-testid="button-forensic-index">
              <a href="/forensic-analysis">
                <Shield className="h-4 w-4" />
                All 49 Forensic Analyses
              </a>
            </Button>
          </div>
        </section>

        {/* TONY RIDLEY SECTION */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-red-800/60 bg-red-950/20 px-6 py-5 flex items-start gap-4 hover:bg-red-950/30 transition-colors"
            onClick={() => toggle("ridley")}
            data-testid="button-expand-ridley"
          >
            <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <Badge className="bg-red-500/15 text-red-300 border-red-500/30 text-xs font-mono">PRIMARY EVIDENCE</Badge>
                <Badge className="bg-amber-500/15 text-amber-300 border-amber-500/30 text-xs font-mono">NAMED CONSPIRATORS</Badge>
              </div>
              <h2 className="text-xl font-serif font-bold text-white">Tony Ridley's Threat, Confession and the Named Conspiracy Network</h2>
              <p className="text-sm text-zinc-400 mt-1">Documented confession naming six co-conspirators. Triggered by contact with Alan Rigby — confirming the investigation's surveillance reach.</p>
            </div>
            {expandedSection === "ridley" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>

          {expandedSection === "ridley" && (
            <div className="mt-2 rounded-2xl border border-red-800/30 bg-zinc-900/60 p-8 space-y-8">
              <div className="p-5 rounded-xl bg-red-950/30 border border-red-700/40 space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-red-400">The Trigger: Contact with Alan Rigby</p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  Alan Rigby was Dr. McLean's former partner. When "Recovered, Not Cured: A Journey Through Schizophrenia" was released in North America, Alan Rigby travelled to Canada to provide personal support for the launch — a documented act of loyalty and solidarity during one of the most publicly significant moments of Dr. McLean's advocacy career. Alan Rigby's presence in Canada during the North American release is part of the documentary record of the book's international reach.
                </p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  When Dr. McLean subsequently contacted Alan Ridley, Tony Ridley — a named perpetrator in the archive — confronted Dr. McLean directly. The confrontation was a threat. And in threatening Dr. McLean for making that contact, Tony Ridley revealed something the investigation was never supposed to confirm: that Dr. McLean's social connections were being monitored, that contact with specific individuals triggered institutional response, and that the investigation had operational reach into Dr. McLean's personal relationships.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-amber-400">Tony Ridley's Named Co-Conspirators — "All On Board In Deceiving Me"</p>
                <p className="text-zinc-300 leading-relaxed text-sm">
                  In the course of the confrontation, Tony Ridley went further than the threat. He named the individuals who were, in his words, on board in deceiving Dr. McLean. This constitutes a documented confession of the conspiracy's membership — not inferred, not extrapolated, but stated by a named perpetrator in direct confrontation. The names Tony Ridley provided are:
                </p>
                <div className="grid gap-3">
                  {[
                    { name: "Steve Iasonidis", role: "Documented in the archive as ASIO intelligence operative (referred to throughout as Stefan Iasonidis). The ASIO operative placed as co-tenant at 10 Raleigh St Footscray — whose residential intelligence deployment is an ICC Article 7 exhibit. Tony Ridley's naming of Iasonidis as 'on board' confirms the ASIO operative's role was known to and coordinated with the broader conspiracy network, not a standalone intelligence operation.", category: "Intelligence Operative" },
                    { name: "Debbie Morgan", role: "Named by Tony Ridley as a participant in the deception programme. Debbie Morgan's inclusion in the named list confirms the social network penetration extended beyond the immediate family and residential environments documented elsewhere in the archive — into friendship or professional relationships that were co-opted into the surveillance and deception operation.", category: "Named Participant" },
                    { name: "Bruce McMaster", role: "Named by Tony Ridley as a participant in the deception programme. Bruce McMaster's inclusion confirms additional social network penetration. The naming of individuals across multiple relationship categories — family, social, professional — is consistent with the coordinated exclusion architecture documented across the 49 forensic analyses.", category: "Named Participant" },
                    { name: "April McLean", role: "Dr. McLean's family member. Named by Tony Ridley as on board in the deception. April McLean's inclusion establishes family-level co-ordination with the broader network — consistent with the familial betrayal pattern documented in the 'Heaven Exposes the Sister' analysis (Jodie McLean, Today Show) and the familial forensic record in the archive.", category: "Family Member" },
                    { name: "Doug McLean", role: "Dr. McLean's family member. Named by Tony Ridley as on board in the deception. Doug McLean's 14 pages of crisis text messages — documented in the archive as contact without advocacy — are contextualised by Tony Ridley's naming: the contact was within a family member who was, by Tony Ridley's account, co-ordinated with the deception programme.", category: "Family Member" },
                    { name: "Jodie McLean (Bongetti)", role: "Dr. McLean's sister. Named by Tony Ridley as on board in the deception. Jodie McLean is already the most extensively documented family perpetrator in the archive: the Today Show appearance to reframe 35 years of documented persecution as a schizophrenia story is a key ICC exhibit. Tony Ridley's naming confirms what the Today Show appearance evidenced structurally: Jodie McLean's conduct was co-ordinated with the broader deception network.", category: "Sister — Today Show" },
                    { name: "Brad McLean", role: "Dr. McLean's brother. Named by Tony Ridley as on board in the deception. Brad McLean's inclusion in the named list completes the sibling documentation: both siblings — Jodie and Brad — named by Tony Ridley as participants in the deception programme. The complete sibling co-ordination, confirmed by a named perpetrator's own statement, is documented evidence of the familial dimension of the suppression architecture.", category: "Brother" },
                  ].map((person, i) => (
                    <div key={i} className="rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-4 space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-sm font-bold text-white">{person.name}</span>
                        <Badge className="bg-zinc-700/50 text-zinc-300 border-zinc-600/40 text-xs">{person.category}</Badge>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">{person.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-700/30 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-amber-400">Forensic Significance of Tony Ridley's Confession</p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  Tony Ridley's threat and named confession is one of the most significant primary-source testimonial events in the archive for the following reason: it is not a document produced by Dr. McLean. It is a statement made by a named perpetrator, confirming the conspiracy's membership, triggered by a surveillance response to a social contact. The triggering event — contact with Alan Rigby — proves that the investigation was monitoring Dr. McLean's personal communications and relationships in real time. The response — a confrontational threat — proves that the investigation had operational authority to intervene in Dr. McLean's personal relationships. The content of the threat — naming six co-conspirators — is the conspiracy confirming its own membership through the mouth of one of its members.
                </p>
                <p className="text-zinc-200 leading-relaxed text-sm">
                  The archive records this alongside the ASIO co-tenancy (Stefan/Steve Iasonidis at 10 Raleigh St Footscray), the death threat, the 14 psychiatric hospitalisations, the ATO drugging letter, and the 350+ ASIC identity fraud registrations — each confirming a different dimension of the coordinated suppression programme. Tony Ridley's confession confirms the social network dimension: the conspiracy extended into Dr. McLean's personal relationships, monitored them in real time, and was prepared to use confrontational threat to control them.
                </p>
                <p className="text-zinc-200 leading-relaxed text-sm font-semibold">
                  Dr. McLean has the evidence of this. It is part of the archive.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* ADVOCACY RECORD */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-zinc-700 bg-zinc-900/40 px-6 py-5 flex items-start gap-4 hover:bg-zinc-800/40 transition-colors"
            onClick={() => toggle("advocacy")}
            data-testid="button-expand-advocacy"
          >
            <Mic className="h-5 w-5 text-amber-400 shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <Badge className="bg-amber-500/15 text-amber-300 border-amber-500/30 text-xs font-mono">20+ YEARS</Badge>
              </div>
              <h2 className="text-xl font-serif font-bold text-white">Full Radio, Television and Print Advocacy Record</h2>
              <p className="text-sm text-zinc-400 mt-1">Every major Australian network. International television. Parliament. National newspapers. The complete documented public record of advocacy.</p>
            </div>
            {expandedSection === "advocacy" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>

          {expandedSection === "advocacy" && (
            <div className="mt-2 rounded-2xl border border-zinc-700/30 bg-zinc-900/60 p-8 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Radio className="h-4 w-4 text-amber-400" />
                  <h3 className="text-base font-bold text-amber-300 uppercase tracking-wider text-sm">Radio Stations</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    { station: "Radio National — 'Life Matters'", host: "Julie McCrossin, ABC National" },
                    { station: "Triple J Youth Network", host: "Rachel Kerr" },
                    { station: "Radio 2SM, Sydney", host: "Tricia Duffield" },
                    { station: "ABC Gold & Sunshine Coasts, QLD", host: "Martin Powley" },
                    { station: "ABC Radio Adelaide", host: "Fiona Sewell" },
                    { station: "ABC Statewide Afternoons", host: "" },
                    { station: "ABC Radio 702", host: "James Valentine" },
                    { station: "Radio 3AW 'Nightline'", host: "Phillip Brady & Bruce Mansfield" },
                    { station: "Spectrum FM Radio", host: "John Weeks" },
                    { station: "Curtin Radio, Perth", host: "Pieta O'Shaughnessy" },
                    { station: "Triple R Melbourne — Smart Arts", host: "Tony Wilson & Richard Watts" },
                    { station: "Radio 2NUR, Newcastle", host: "Felicity Biggins" },
                    { station: "ABC National — AM Program", host: "" },
                    { station: "JOY FM — National Gay & Lesbian Broadcaster", host: "" },
                    { station: "Radio National — Life Matters: Art and Psychosis", host: "" },
                    { station: "ABC Regional, Dubbo", host: "" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-zinc-800/30 border border-zinc-700/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-zinc-200">{r.station}</p>
                        {r.host && <p className="text-xs text-zinc-500">{r.host}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Tv className="h-4 w-4 text-blue-400" />
                  <h3 className="text-base font-bold text-blue-300 uppercase tracking-wider text-sm">Television</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    { show: "Good Morning Australia", detail: "Steve Leidman — For 'Compulsive Executions' exhibition and book launch" },
                    { show: "The Today Show", detail: "National broadcast — the same platform later used by Jodie McLean (Bongetti) to reframe the persecution narrative" },
                    { show: "Reuters TV — International Video Interview", detail: "Frankie Fathers — International broadcast" },
                    { show: "Stateline, ABC TV", detail: "" },
                    { show: "The Drug Debate, SBS Television", detail: "Jenny Brocky" },
                    { show: "Channel 31 News", detail: "" },
                    { show: "Channel Seven News", detail: "" },
                    { show: "SANE DVD — 'Psychosis, Speaking from Experience'", detail: "National mental health education resource" },
                    { show: "The Dax Collection — 'Collected Thoughts 3' (DVD Film)", detail: "Aimed at Year 11 and 12 students across Australia" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-zinc-800/30 border border-zinc-700/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-zinc-200">{r.show}</p>
                        {r.detail && <p className="text-xs text-zinc-500">{r.detail}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-emerald-400" />
                  <h3 className="text-base font-bold text-emerald-300 uppercase tracking-wider text-sm">Print Media</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "The Australian — 'Mental Health hits the Political Frontline' (after speaking in Australian Parliament)",
                    "The Age — 'Rider of the storm', Michael Winkler",
                    "Sydney Morning Herald — Reviewer Anne Deveson",
                    "Herald Sun — 'My Descent Into Madness'",
                    "The Australian, The Age, The Herald Sun, Sydney Morning Herald (multiple articles)",
                    "MCV Melbourne Community Voice — Gay and Lesbian Street Press",
                    "eclinicalpsychiatrynews.com — Article on visionary art and psychosis",
                    "world-schizophrenia.org — Hard copy mail-out review",
                    "Huffington Post — 'Happiness Advice From an Artist Living With Schizophrenia'",
                    "The Good Men Project — 'Follow Your Passions to Make Life Bearable and Find Your True Authentic Self' (also republished on Huffington Post)",
                    "Medium.com — 'Bright Lights and Dark Corners: Images and Words'",
                    "Arts Access Australia — Interview",
                    "Makers of Melbourne — Artist Profile Interview",
                    "Alex Grey's COSM (Chapel Of Sacred Mirrors) — Featured 2017, 2018, 2019",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-zinc-800/30 border border-zinc-700/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <p className="text-xs text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* PRESENTATIONS */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-zinc-700 bg-zinc-900/40 px-6 py-5 flex items-start gap-4 hover:bg-zinc-800/40 transition-colors"
            onClick={() => toggle("presentations")}
            data-testid="button-expand-presentations"
          >
            <Users className="h-5 w-5 text-violet-400 shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-xl font-serif font-bold text-white">National and International Public Presentations</h2>
              <p className="text-sm text-zinc-400 mt-1">Parliament House. Royal Melbourne Hospital. McGill University Montreal. 500 high school students at a time. The complete documented speaking record.</p>
            </div>
            {expandedSection === "presentations" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>

          {expandedSection === "presentations" && (
            <div className="mt-2 rounded-2xl border border-zinc-700/30 bg-zinc-900/60 p-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-2">
                {[
                  { venue: "Parliament House, Canberra", detail: "SANE's Guide to Electoral Offices — The only person in this archive to speak in the Australian Parliament on mental health and be subsequently persecuted by the same government" },
                  { venue: "McGill University, Montreal, Canada", detail: "Multiple presentations at the College of Philosophical and Religious Studies — International academic platform for advocacy" },
                  { venue: "Paragraphe Bookstore, Montreal, Canada", detail: "North American book tour for 'Recovered, Not Cured' — Supported by former partner Alan Rigby" },
                  { venue: "Douglas Hospital, Montreal, Canada", detail: "Local psychiatric care unit — Lived experience advocacy in international clinical setting" },
                  { venue: "Royal Melbourne Hospital (with MHRI)", detail: "Mental Health Research Institute — 'Psychosis and Cannabis' forum — To researchers, biochemists, social workers and psychologists" },
                  { venue: "Mental Health Research Institute (MHRI)", detail: "Weekly lectures to Year 11 and 12 students on art and mental health — Sustained ongoing contribution to youth mental health education" },
                  { venue: "Australian Centre for Youth Literature (ACYL)", detail: "To librarians and school teachers — and separately to 500 high school students" },
                  { venue: "34th Annual Mental Health Nurses Conference, Melbourne", detail: "Guest keynote speaker — Cebel Townhouse" },
                  { venue: "Forensicare Psychiatric Hospital, Fairfield", detail: "To consumer groups — and judging/feedback for an art competition" },
                  { venue: "Forensicare — Thomas Embling Hospital", detail: "Mental Health Week presentation" },
                  { venue: "EPPIC — Early Prevention Psychosis", detail: "For young people experiencing first signs of psychosis — early intervention advocacy" },
                  { venue: "People Like You (non-profit), Victoria", detail: "Multiple presentations throughout Victoria including Albury/Wodonga" },
                  { venue: "Baw Baw Youth Network", detail: "To social workers and youth planners" },
                  { venue: "The Richmond Fellowship, Warrnambool", detail: "To consumers and their families" },
                  { venue: "North West Area Mental Health, Coburg", detail: "To consumer advocacy group, families, consumers and their carers" },
                  { venue: "The Dax Centre Melbourne", detail: "Presentation for state leaders and providers of the Victorian Education System (VCAT)" },
                  { venue: "Cunningham Dax Centre", detail: "Many monthly presentations to psychology students in Year 11 and 12" },
                  { venue: "St Andrews Market, Melbourne", detail: "Mental Health Week public advocacy" },
                  { venue: "Art Against Stigma, Sydney", detail: "Guest keynote speaker for the national exhibition at www.artagainststigma.org" },
                  { venue: "Artholes Gallery, Fitzroy", detail: "Exhibition launch — lived experience art and advocacy" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-zinc-800/30 border border-zinc-700/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-zinc-200">{item.venue}</p>
                      <p className="text-xs text-zinc-500 mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* BOOK AND AWARDS */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-zinc-700 bg-zinc-900/40 px-6 py-5 flex items-start gap-4 hover:bg-zinc-800/40 transition-colors"
            onClick={() => toggle("book")}
            data-testid="button-expand-book"
          >
            <BookOpen className="h-5 w-5 text-amber-400 shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-xl font-serif font-bold text-white">'Recovered, Not Cured' — Book, Awards, North American Release and the Alan Rigby Connection</h2>
              <p className="text-sm text-zinc-400 mt-1">Human Rights Award. SANE Book of the Year. ABC National broadcast internationally. The book that made Tony Ridley's threat necessary.</p>
            </div>
            {expandedSection === "book" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>

          {expandedSection === "book" && (
            <div className="mt-2 rounded-2xl border border-zinc-700/30 bg-zinc-900/60 p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">The Book</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    <strong className="text-white">'Recovered, Not Cured: A Journey Through Schizophrenia'</strong> was published by Allen & Unwin (Australia's largest independent publisher). Dr. McLean described it as "an accidental autobiography I wrote when I was twenty-six." It documents his experience of non-ordinary reality, neglect, abuse, sexuality, drug use, and the psychiatric system — written in raw, unfiltered lived experience.
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    The book was recorded by Australia's ABC National for the <em>Life Matters</em> program and broadcast internationally to critical acclaim. It is available as a free five-part abridged audiobook on Audible, read by Rich McLean himself. It was also released in North America — with Dr. McLean's former partner Alan Rigby travelling to Canada to support the launch.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-wider">Awards</h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="h-4 w-4 text-emerald-400" />
                        <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Highly Commended, 2003</span>
                      </div>
                      <p className="text-sm text-zinc-200 font-semibold">Human Rights Award — Human Rights and Equal Opportunity Commission</p>
                      <p className="text-xs text-zinc-500 mt-1">Arts Non-Fiction Category</p>
                    </div>
                    <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="h-4 w-4 text-amber-400" />
                        <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Winner, 2004</span>
                      </div>
                      <p className="text-sm text-zinc-200 font-semibold">SANE Australia Book of the Year</p>
                      <p className="text-xs text-zinc-500 mt-1">National mental health organisation's highest literary recognition</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-red-950/20 border border-red-700/30 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-red-400">Alan Rigby — The Connection That Triggered Tony Ridley's Threat</p>
                <p className="text-sm text-zinc-200 leading-relaxed">
                  Alan Rigby was Dr. McLean's former partner. For the North American release of "Recovered, Not Cured," Alan Rigby travelled to Canada to provide personal support — a documented act of loyalty during one of the most significant public advocacy moments of Dr. McLean's career. When Dr. McLean subsequently contacted Alan Rigby, Tony Ridley confronted Dr. McLean with a threat. The contact with Alan Rigby — a person associated with the book's international human rights advocacy record — was monitored by the investigation. The threat in response to that contact reveals that the investigation's surveillance of Dr. McLean's relationships extended to former partners associated with his public advocacy work. The full significance: a Human Rights Award-winning author was being monitored for contacting a former partner who had supported his international book launch. The investigation was not about justice. It was about control.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* QUALIFICATIONS */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-zinc-700 bg-zinc-900/40 px-6 py-5 flex items-start gap-4 hover:bg-zinc-800/40 transition-colors"
            onClick={() => toggle("qualifications")}
            data-testid="button-expand-qualifications"
          >
            <Award className="h-5 w-5 text-emerald-400 shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-xl font-serif font-bold text-white">Academic Qualifications, Credentials and Professional Registrations</h2>
              <p className="text-sm text-zinc-400 mt-1">Bachelor of Fine Art. Masters of Education. Merit-based PhD scholarship. Illustrator for The Age and The Herald Sun. 25 years of professional arts practice.</p>
            </div>
            {expandedSection === "qualifications" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>

          {expandedSection === "qualifications" && (
            <div className="mt-2 rounded-2xl border border-zinc-700/30 bg-zinc-900/60 p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { qual: "Bachelor of Fine Art (Drawing, Honours)", institution: "Formal undergraduate qualification in fine art" },
                  { qual: "Associate Diploma in Computer-Aided Art & Design (CAAD)", institution: "Technical arts qualification" },
                  { qual: "Masters of Education — A/r/tography (MEd)", institution: "Postgraduate education research qualification through arts-based methodology" },
                  { qual: "PhD — 'The Divine Shaman and Her Proteges'", institution: "Passed via merit-based scholarship (pending changes). Arts-based qualitative research on young people's ethical opinions regarding AI, posthumanism and superintelligence" },
                  { qual: "Past Illustrator — The Age", institution: "Australia's foremost broadsheet newspaper" },
                  { qual: "Past Illustrator — The Herald Sun", institution: "Australia's highest circulation daily newspaper" },
                  { qual: "NDIS Therapeutic Arts-Life Coach", institution: "Fully insured. Working with Children Check. Police Check current." },
                  { qual: "25+ Years Professional Arts Practice", institution: "Continuous professional career in visual arts, advocacy and lived experience work" },
                  { qual: "Human Rights Awarded Autobiographer", institution: "HREOC Human Rights Award (Highly Commended, 2003) and SANE Book of the Year (2004)" },
                  { qual: "Public Advocate for People with Mental Illness — 20+ Years", institution: "Documented through Parliament House, McGill University, Royal Melbourne Hospital, MHRI, Forensicare, and 30+ additional venues" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl border border-zinc-700/50 bg-zinc-800/30 space-y-1">
                    <p className="text-sm font-bold text-white">{item.qual}</p>
                    <p className="text-xs text-zinc-500">{item.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* PHD */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-zinc-700 bg-zinc-900/40 px-6 py-5 flex items-start gap-4 hover:bg-zinc-800/40 transition-colors"
            onClick={() => toggle("phd")}
            data-testid="button-expand-phd"
          >
            <BookOpen className="h-5 w-5 text-violet-400 shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-xl font-serif font-bold text-white">PhD Research — 'The Divine Shaman and Her Proteges'</h2>
              <p className="text-sm text-zinc-400 mt-1">Young people's ethical opinions on AI, posthumanism and the future of humanity. Merit-based scholarship. Passed. Pending changes.</p>
            </div>
            {expandedSection === "phd" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>

          {expandedSection === "phd" && (
            <div className="mt-2 rounded-2xl border border-zinc-700/30 bg-zinc-900/60 p-8 space-y-6">
              <p className="text-sm text-zinc-300 leading-relaxed">
                <strong className="text-white">'The Divine Shaman and Her Proteges'</strong> is Dr. McLean's doctoral research project — an arts-based, practice-led, qualitative investigation completed via merit-based scholarship. It passed examination (pending changes).
              </p>
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-violet-400">Research Focus</p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  The research's central goal was amplifying <strong className="text-white">young people's ethical opinions</strong> of what it means to be human — both now and in the future — through three cumulative technological lenses: artificial intelligence and anticipated superintelligence; posthumanism (the use of technology to enhance human skills, abilities, and lifespans); and the ethical implications of gene modification, entity design, and the transcendence of biological limitations.
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  The research extrapolated from recorded interviews with young people, examining ethical lives through retrospective art and memory. It crossed generational divides out of compassion for sentient beings, the Earth, and anthropocentric ethics — whilst considering global catastrophic risks. The methodology drew on A/r/tography, Arts-Based Research, Narrative Inquiry and Lived Experience.
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  An unexpected existential creative artefact emerged — metaphorically mirroring 'The Event Horizon' of the technological singularity. A shamanic disruption of Western psychiatric paradigm limitations emerged alongside the formal academic content. The research argues that Dr. McLean's 'paranormal' experience exists as yet-to-be-unveiled ontological science — positioning the very experience the psychiatric system labelled as illness as evidence of a consciousness beyond the institution's capacity to categorise.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-700/30">
                <p className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">Forensic Significance</p>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  The doctoral research was completed during the same period the institutional suppression programme was being deployed. The merit-based scholarship confirms academic peer recognition of the research's legitimacy and value. A person being simultaneously persecuted by 25+ institutions, involuntarily hospitalised 14 times, pharmacologically assaulted, monitored by an ASIO co-tenant, and issued a death threat completed peer-reviewed doctoral research on the future of human ethical consciousness. The institution that labelled the researcher delusional was simultaneously awarding him a merit scholarship. The contradiction is documented.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* TEXT MESSAGES */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-zinc-700 bg-zinc-900/40 px-6 py-5 flex items-start gap-4 hover:bg-zinc-800/40 transition-colors"
            onClick={() => toggle("texts")}
            data-testid="button-expand-texts"
          >
            <FileText className="h-5 w-5 text-blue-400 shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-xl font-serif font-bold text-white">Forensic Text Message Record — Familial Betrayal Documented in Real Time</h2>
              <p className="text-sm text-zinc-400 mt-1">The complete text message record with Dr. McLean's mother, over years. Contact without advocacy. Documented in real time. Available as a primary-source PDF exhibit.</p>
            </div>
            {expandedSection === "texts" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>

          {expandedSection === "texts" && (
            <div className="mt-2 rounded-2xl border border-zinc-700/30 bg-zinc-900/60 p-8 space-y-6">
              <p className="text-sm text-zinc-300 leading-relaxed">
                The forensic record of text messages between Dr. McLean and his mother — documented across multiple years — is preserved in the archive as a primary-source exhibit. The full PDF record is available for download below.
              </p>
              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-blue-400">What the Text Record Documents</p>
                <div className="space-y-3">
                  {[
                    { point: "Contact Without Advocacy", detail: "The text messages document the pattern that defines the familial betrayal record across the archive: consistent contact maintained while consistent advocacy was withheld. Dr. McLean's mother communicated with her son across multiple years while the suppression programme that Tony Ridley would later confirm included her family members (Doug McLean, Jodie McLean, Brad McLean) continued to operate around him. The contact is documented. The advocacy is documented by its absence." },
                    { point: "The 'Perfect Mother' Myth — Forensically Refuted", detail: "The archive PDF is titled 'The Perfect Mother Myth: Familial Betrayal Whistleblower Testimony.' The title names the exact contradiction the text record establishes: the public narrative of maternal care deployed within a family that Tony Ridley named as 'on board in deceiving' Dr. McLean. The text messages document the period during which Dr. McLean was experiencing homelessness, acquired brain injury, the clinical near-death at 2.87% probability, pharmacological assault, and the coordinated suppression programme — while communication was maintained and advocacy withheld." },
                    { point: "Real-Time Primary Source Evidence", detail: "Unlike retrospective accounts, text messages are timestamped, unedited, and generated in real time without the knowledge that they would become evidence. The archive's text message record is therefore the most forensically reliable form of familial communication evidence available — each message timestamped, each exchange chronologically ordered, each absence of advocacy response documentable against the events the archive records for the same period." },
                    { point: "Significance in the Context of Tony Ridley's Confession", detail: "Doug McLean (Dr. McLean's father), Jodie McLean, and Brad McLean were named by Tony Ridley as participants in the deception programme. The text message record with Dr. McLean's mother is therefore situated within a family framework in which the named participants — her husband and two of her children — were confirmed by a co-conspirator as operating within the deception network. The text message record documents Dr. McLean's mother's communications against this background. It is evidence of the full familial dimension of the suppression programme." },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl border border-zinc-700/40 bg-zinc-800/30 space-y-2">
                      <p className="text-sm font-bold text-white">{item.point}</p>
                      <p className="text-xs text-zinc-400 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Button variant="outline" className="gap-2 border-blue-500/40 text-blue-300 hover:bg-blue-500/10" asChild data-testid="button-download-texts">
                <a href="/documents/the-perfect-mother-myth-familial-betrayal-whistleblower-testimony.pdf" download>
                  <Download className="h-4 w-4" />
                  Download: Familial Text Message Forensic Record (PDF)
                </a>
              </Button>
            </div>
          )}
        </section>

        {/* PROFESSIONAL INDIFFERENCE */}
        <section className="px-4 pb-6 max-w-5xl mx-auto">
          <button
            className="w-full text-left rounded-2xl border border-zinc-700 bg-zinc-900/40 px-6 py-5 flex items-start gap-4 hover:bg-zinc-800/40 transition-colors"
            onClick={() => toggle("indifference")}
            data-testid="button-expand-indifference"
          >
            <Gavel className="h-5 w-5 text-red-400 shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <Badge className="bg-red-500/15 text-red-300 border-red-500/30 text-xs font-mono">ZERO PROFESSIONAL ACKNOWLEDGMENT</Badge>
              </div>
              <h2 className="text-xl font-serif font-bold text-white">The Systematic Professional Indifference Record — Not One Shortcoming Admitted</h2>
              <p className="text-sm text-zinc-400 mt-1">Every cop. Every lawyer. Every politician. Every media outlet. The entire mental health system. All refused to help. Not one admitted a single failing in return.</p>
            </div>
            {expandedSection === "indifference" ? <ChevronUp className="h-5 w-5 text-zinc-500 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 shrink-0 mt-1" />}
          </button>

          {expandedSection === "indifference" && (
            <div className="mt-2 rounded-2xl border border-zinc-700/30 bg-zinc-900/60 p-8 space-y-8">
              <div className="p-5 rounded-xl bg-zinc-800/60 border border-zinc-600/40">
                <p className="text-base font-serif text-zinc-100 leading-relaxed italic">
                  "Every cop, lawyer, politician, media representative and public official refused to help after I willingly made myself vulnerable and admitted my inefficiencies and failings publicly over years and helped a lot of people. Not a single professional person acknowledged my story or admitted one of their inefficiencies or shortcomings."
                </p>
                <p className="text-xs text-zinc-500 mt-3 font-mono uppercase tracking-wider">— Dr. Richard McLean (Barran Dodger)</p>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-red-400">The Asymmetry That Defines the Record</p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Dr. McLean's advocacy was built on radical public vulnerability. He did not advocate from a position of institutional authority. He advocated from lived experience — from the record of non-ordinary reality, psychiatric hospitalisation, abuse, sexuality, drug use, and the systems that failed him — made public in a Human Rights Award-winning book that he read aloud on ABC National Radio for international broadcast. He admitted his own failings. He acknowledged his own inefficiencies. He was the person the system pointed to as the example of recovery made possible. He helped thousands of people through twenty years of public advocacy.
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  And when he needed help — when the documentation showed that the same institutional systems had assaulted him pharmacologically (ATO letter), deployed an intelligence operative against him (Stefan/Steve Iasonidis at 10 Raleigh St Footscray), issued him a death threat, involuntarily hospitalised him fourteen times, suppressed $32.9M in entitlements, registered 350+ fraudulent identities under his name, and executed a coordinated 25+ agency circular referral to prevent accountability — not one professional person who benefited from his advocacy acknowledged the record.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { category: "Police", record: "The 25+ circular referral system documented in the archive includes police participation. Police who were contacted about the death threat, the pharmacological assault, the identity fraud registrations, and the coordinated suppression programme redirected without engagement. Not one officer acknowledged a single aspect of the documented primary-source record." },
                  { category: "Lawyers", record: "Dr. McLean produced the Federal Court PID to CEO Sia Lagos under conditions of homelessness and acquired brain injury — a formal legal document referencing the ATO drugging, $1.5M AHRC insurance suppression, and DSS employment confirmation. He did this without legal representation. Not one lawyer from any institution that received the documentation acknowledged the record formally or admitted any failure of the legal advocacy system." },
                  { category: "Politicians", record: "Dr. McLean spoke in Parliament House, Canberra, for SANE's Guide to Electoral Offices. His advocacy record was used by parliamentary mental health advocates. His Human Rights Award was issued by the Human Rights and Equal Opportunity Commission — a Commonwealth statutory body. Not one politician who subsequently received documentation of the coordinated suppression programme acknowledged the primary-source record or admitted institutional failure." },
                  { category: "The Media", record: "Every major Australian media outlet — The Australian, The Age, The Herald Sun, the Sydney Morning Herald, ABC National, SBS, Channel Seven, Good Morning Australia, The Today Show, Triple J — had interviewed, published, or broadcast Dr. McLean's advocacy. When 2,304 primary-source documents documenting his persecution were made publicly available, none of those outlets acknowledged the record. The same media that used his lived experience for content refused to acknowledge when that lived experience included documented persecution by the institutions they reported on." },
                  { category: "The Mental Health System", record: "Dr. McLean presented at EPPIC, Forensicare, Thomas Embling Hospital, the Mental Health Research Institute, the Royal Melbourne Hospital, the Cunningham Dax Centre, the Richmond Fellowship, and 25+ additional mental health institutions. His 'Recovered, Not Cured' was SANE Australia's Book of the Year. He was the person the mental health system cited as a recovery exemplar. The same system deployed 14 involuntary psychiatric hospitalisations against him, used diagnostic labels (schizophrenia, paranoia, delusional disorder) as instruments of suppression, and produced clinical records that are now ICC Article 7 exhibits. Not one clinician, researcher, or institutional representative who benefited from his advocacy acknowledged the record of what the system did to him." },
                  { category: "Public Officials", record: "25+ public accountability bodies — ombudsmen, commissioners, parliamentary representatives, departmental heads — received documentation of the coordinated suppression programme and redirected without engagement. Not one produced a formal acknowledgment of the documented record. Not one admitted a single institutional shortcoming. The 25+ circular referral letterheads documenting their non-engagement are now ICC Article 7 exhibits. The accounting for that non-engagement is at The Hague." },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl border border-red-800/30 bg-red-950/10 space-y-2">
                    <p className="text-sm font-bold text-red-300">{item.category}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.record}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-700/30 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-amber-400">The Significance: The Most Complete Documented Asymmetry in the Archive</p>
                <p className="text-sm text-zinc-200 leading-relaxed">
                  The asymmetry documented in this record is the following: the same professional institutions and individuals who used Dr. McLean's public vulnerability, lived experience, advocacy, and radical personal honesty for their platforms, their publications, their research, their education resources, and their credibility as institutions that support people with mental illness — every one of those institutions refused to acknowledge the documented record when the same person who had helped them came to them for help. They benefited from his openness. They refused to match it with a single admission of their own. The person who admitted his failings most publicly in Australia over twenty years could not get a single professional acknowledgment of a single institutional failing in return.
                </p>
                <p className="text-sm text-zinc-200 leading-relaxed font-semibold">
                  That asymmetry is documented. It is the most complete record of institutional moral failure in the archive. It is part of the ICC Article 7 submission. The accounting is at The Hague.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* CLOSING CTA */}
        <section className="px-4 pb-24 max-w-5xl mx-auto">
          <div className="rounded-2xl border-2 border-zinc-700/40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-10 text-center space-y-6">
            <Eye className="h-10 w-10 text-amber-500 mx-auto" />
            <h2 className="text-2xl font-serif font-black text-white">The Archive Is the Witness</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto text-sm leading-relaxed">
              Dr. Richard McLean spent twenty years helping every institution that subsequently refused to help him. He made himself publicly vulnerable so others could heal. He won a Human Rights Award from the same government whose institutions persecuted him. He spoke in Parliament. He presented at McGill University. He had a book recorded by ABC National and broadcast internationally. He passed a merit-based PhD scholarship. Tony Ridley named seven people who were on board in deceiving him. Not one professional person has admitted a shortcoming. Every institution's non-engagement is documented. The archive is the witness. The accounting is at The Hague.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button variant="outline" className="gap-2 border-amber-500/40 text-amber-300 hover:bg-amber-500/10" asChild data-testid="button-download-final">
                <a href="/documents/the-perfect-mother-myth-familial-betrayal-whistleblower-testimony.pdf" download>
                  <Download className="h-4 w-4" />
                  Text Message Forensic Record
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild data-testid="button-forensic-final">
                <a href="/forensic-analysis">
                  <Shield className="h-4 w-4" />
                  49 Forensic Analyses
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild data-testid="button-what-proves">
                <a href="/what-this-proves">
                  <ExternalLink className="h-4 w-4" />
                  What This Proves
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ArchiveCrossLinks />
      <Footer />
    </>
  );
}
