import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Badge } from "@/components/ui/badge";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import {
  AlertTriangle, Shield, Eye, FileText, ExternalLink,
  Scale, Users, Lock, Flame, ChevronDown, ChevronUp,
  Phone, Mic, Radio, Church, Home
} from "lucide-react";

const YOUTUBE_VIDEO_ID = "OH5AqBfunn0";
const DATE = "April 2026";

const ACTORS = [
  {
    id: "rachael",
    name: "Rachael",
    alias: null,
    credential: "Director / Boss · Able Care NDIS Provider · Long Jetty NSW",
    role: "INSTITUTIONAL AUTHORITY — Able Care Direction & NDIS Pipeline Control",
    borderColor: "border-red-500",
    roleColor: "text-red-400",
    headingColor: "text-red-300",
    sections: [
      {
        heading: "Institutional Command Position",
        body: "Rachael's position as director of Able Care NDIS Provider gives her complete institutional authority over the support workers deployed into Dr. McLean's life. Every operative who enters Dr. McLean's home under the banner of disability support — Kim, Cass, Bishnu, Pam — answers ultimately to Rachael's operational direction. The entrapment framework described in the NDIS surveillance evidence is not possible without director-level authorisation of personnel placement and task assignment.",
      },
      {
        heading: "Family Network Embedded in the Organisation",
        body: "Rachael's mother Pam is embedded as an operative within the same network. A family member placed in surveillance proximity to the target, while the family member's daughter controls the institutional mechanism funding that placement, constitutes a structural conflict of interest that eliminates any pretence of independent professional care. The mother-daughter chain transforms Able Care from a disability support organisation into a family-operated intelligence cell funded by public NDIS money.",
      },
      {
        heading: "Housemate Expelled — Retaliation Against Testimony",
        body: "When Dr. McLean's housemate — connected to Able Care — began providing credible proximity testimony, she was expelled from Able Care. The expulsion of a witness immediately after observable entrapment activity is the institutional suppression of testimony. Rachael's authority as director makes her the responsible officer for that expulsion decision. The timing is not coincidental. The outcome is documented.",
      },
    ],
    link: "/ndis-surveillance-evidence",
    linkLabel: "View NDIS Surveillance Evidence",
    linkExternal: false,
  },
  {
    id: "brett",
    name: "Brett",
    alias: "Vigilante Contact — Police Intelligence Source",
    credential: "Vigilante Contact · Honey Trap Handler · Inside Police Intelligence · Institutional Complicity",
    role: "CRIMINAL NETWORK COORDINATOR — Police Intelligence Asset & Honey Trap Handler",
    borderColor: "border-orange-500",
    roleColor: "text-orange-400",
    headingColor: "text-orange-300",
    sections: [
      {
        heading: "The Recorded Fugitive — A Separate Man at the Former Address",
        body: "At Dr. McLean's former place of residence, a woman (an Able Care client) was living in the rear of the property with her boyfriend, who was supplying drugs on the premises. An additional man — unknown to Dr. McLean — arrived at the address. Dr. McLean recorded him. On that recording, the man stated he was on the run across three states and that a SWAT team was pursuing him. This is primary source audio evidence: a self-confessed three-state fugitive, on record, at Dr. McLean's former address, in an environment already compromised by drug supply and Able Care client placement.",
      },
      {
        heading: "Brett Gave the Tip-Off — Documented Institutional Complicity",
        body: "When Dr. McLean provided the recording to authorities and stated he was not safe to return home, Brett — his contact — communicated to the woman at the address that police were on their way. On receipt of that warning, the woman, her boyfriend, and the fugitive all escaped before law enforcement arrived. Police never came. Brett had advance knowledge of the impending police operation — knowledge that could only originate from inside law enforcement — and used it to warn those harbouring the fugitive. This is not a civilian act. This is institutional complicity: a contact with inside police intelligence actively protecting a criminal network.",
      },
      {
        heading: "Sexual Honey Trap Awareness",
        body: "Separately from the fugitive incident, Brett was demonstrably aware of the sexual honey trap operations being deployed against Dr. McLean. Every intimate partner Dr. McLean acquired was subsequently intercepted and turned away. Birthdays were spent alone because people were intercepted before arrival. Brett's operational awareness of the honey trap program — combined with his access to inside police intelligence — establishes him as a coordinating node between the criminal network and the broader surveillance infrastructure.",
      },
    ],
    link: "/honeytrap-infiltration-report",
    linkLabel: "View Honeytrap Infiltration Report",
    linkExternal: false,
  },
  {
    id: "larissa",
    name: "Larissa",
    alias: "Brett's Sister",
    credential: "Brett's Sister · Elevated Chain Authority · Long Jetty Network",
    role: "CHAIN COORDINATOR — Sibling Bond to Fugitive Operative & Institutional Elevation",
    borderColor: "border-yellow-500",
    roleColor: "text-yellow-400",
    headingColor: "text-yellow-300",
    sections: [
      {
        heading: "Kinship Connection to the Police Intelligence Source",
        body: "Larissa is Brett's sister — the sibling of the contact who demonstrably held inside law enforcement intelligence and used it to warn those harbouring a three-state fugitive at Dr. McLean's former address. In an entrapment network, kinship bonds are the most reliable loyalty mechanism: family members are the hardest to turn, the least likely to provide testimony, and the most willing to maintain cover regardless of the criminal nature of the activity they are protecting. Larissa's elevated position in the chain provides the network with institutional legitimacy while her family loyalty to Brett provides operational security.",
      },
      {
        heading: "High Position — Institutional Cover for Ground-Level Operations",
        body: "Larissa's elevation to a position of authority within the operational chain means she is not simply a passive family observer. She provides the institutional weight that legitimises the network's public-facing activity. In organised suppression operations, the elevated family member serves as the firewall between criminal ground-level activity and formal institutional accountability — a role Larissa occupies by virtue of both her position and her blood loyalty to Brett.",
      },
    ],
    link: "/evidence-vault",
    linkLabel: "View Evidence Vault",
    linkExternal: false,
  },
  {
    id: "darran",
    name: "Darran",
    alias: "Brett's Father-in-Law",
    credential: "Brett's Father-in-Law · Family Network Operative · Long Jetty",
    role: "KINSHIP NETWORK — Extended Family Loyalty Chain",
    borderColor: "border-amber-500",
    roleColor: "text-amber-400",
    headingColor: "text-amber-300",
    sections: [
      {
        heading: "The Father-in-Law Bond — Hardest Loyalty to Break",
        body: "Darran is Brett's father-in-law — connected to the fugitive operative by the marriage bond, the single most durable kinship loyalty in Australian social structure. A father-in-law who is embedded in the same surveillance network as his son-in-law is not there by coincidence. The placement of extended family members at multiple nodes of the network is the signature of an organised operation rather than a series of unrelated individuals who happened to occupy positions of influence around a single whistleblower target.",
      },
      {
        heading: "Network Integrity Through Family Redundancy",
        body: "Organised surveillance networks maintain integrity through redundancy — multiple family members at multiple nodes ensure that if one operative is exposed, the network continues functioning through the remaining loyalists. Darran provides the extended kinship redundancy that keeps the Brett/Larissa/Rachael family chain operational even under investigative pressure. The presence of Brett, Larissa, Darran, and Pam (Rachael's mother) as simultaneous network nodes is the forensic signature of a coordinated family-embedded operation.",
      },
    ],
    link: "/evidence-vault",
    linkLabel: "View Evidence Vault",
    linkExternal: false,
  },
  {
    id: "pam",
    name: "Pam",
    alias: "Rachael's Mother",
    credential: "Rachael's Mother · Embedded Operative · Able Care Network",
    role: "FAMILY SURVEILLANCE ASSET — Mother Embedded in Daughter's Operational Network",
    borderColor: "border-pink-500",
    roleColor: "text-pink-400",
    headingColor: "text-pink-300",
    sections: [
      {
        heading: "Mother-Daughter Operational Chain",
        body: "Pam is Rachael's mother — a family member embedded as an operative in a network that her daughter directs. The mother-daughter placement within the same surveillance network is the most acute form of family operational security: Pam's loyalty to Rachael is total, her access to network intelligence is continuous, and her motivation to protect the operation from exposure is existential — any criminal accountability for the network implicates her daughter. Professional whistleblowing has to overcome many obstacles. An entrapment network protected by a mother-daughter operational chain is one of the most difficult.",
      },
      {
        heading: "NDIS Funding — Paid from Public Money to Surveil",
        body: "Pam's operational presence in Dr. McLean's environment is funded through NDIS payments — public money explicitly allocated for disability support. The conversion of NDIS-funded support worker positions into surveillance roles constitutes NDIS fraud: public funds paid for care are being used to sustain a ground-level intelligence operation. The financial chain runs from Australian taxpayer money through the NDIA, through Able Care, through Rachael's direction, to Pam's placement — a documented money-trail for a documented crime.",
      },
    ],
    link: "/ndis-surveillance-evidence",
    linkLabel: "View NDIS Surveillance Evidence",
    linkExternal: false,
  },
  {
    id: "bishnu",
    name: "Bishnu",
    alias: null,
    credential: "Embedded Operative · Long Jetty Surveillance Network",
    role: "GROUND OPERATIVE — Surveillance Placement",
    borderColor: "border-indigo-500",
    roleColor: "text-indigo-400",
    headingColor: "text-indigo-300",
    sections: [
      {
        heading: "Sent Dr. McLean Home Despite Documented Safety Risk",
        body: "After Dr. McLean provided a primary source audio recording of a self-confessed three-state fugitive at his former address — and explicitly stated he was not safe to return home — Bishnu insisted he go home regardless. No NDIS funding was made available for anyone to sit with Dr. McLean overnight despite his clearly stated safety concerns. The refusal to arrange overnight support, combined with the instruction to return to a location Dr. McLean had documented as dangerous, is not an administrative oversight. It is the deliberate removal of a safety resource from a person who had just produced primary evidence of criminal activity at his address.",
      },
      {
        heading: "Embedded Proximity Surveillance",
        body: "Beyond the safety incident, Bishnu's role within the network is embedded proximity surveillance — the maintenance of close physical presence that enables the collection of location data, daily movements, communications content, and behavioural patterns. Bishnu's placement in Dr. McLean's proximate environment was not incidental — it was functional. The decision to send Dr. McLean home in a documented unsafe situation served the dual purpose of maintaining Bishnu's own operational security while returning Dr. McLean to a vulnerable and unwitnessed environment.",
      },
      {
        heading: "Network Node — Dereliction as Operational Function",
        body: "In any legitimate NDIS support context, a worker who is presented with a primary source recording of criminal activity at a client's address and a client who says they are not safe, is obligated to escalate, document, and arrange alternative support. Bishnu did none of these things. That failure is not negligence — it is the operational function of an embedded network node: ensure the client remains isolated, unsupported, and unable to act on the evidence they have just collected.",
      },
    ],
    link: "/evidence",
    linkLabel: "View Evidence",
    linkExternal: false,
  },
  {
    id: "kim",
    name: "Kim",
    alias: null,
    credential: "Able Care Worker · Surveillance Operative · Refused to Leave or Report",
    role: "SURVEILLANCE OPERATIVE — Monitoring Agent & Testimony Suppressor",
    borderColor: "border-cyan-500",
    roleColor: "text-cyan-400",
    headingColor: "text-cyan-300",
    sections: [
      {
        heading: "Refused to Leave — Operational Persistence",
        body: "When Dr. McLean's in-home audio harassment was captured in Exhibit A of the NDIS Surveillance Evidence, Kim was present and refused to leave the premises. In a legitimate professional care context, a support worker who refuses to leave when asked is committing a trespass. In a surveillance context, a support worker who refuses to leave is maintaining their intelligence collection position in the face of exposure. Kim's refusal to leave is not a professional failure — it is an operational choice to maintain proximity.",
      },
      {
        heading: "Refused to File Report — Testimony Suppression",
        body: "Kim also refused to file a report following the audio harassment event captured in Exhibit A. In any legitimate professional capacity, witnessing the harassment of a client triggers a mandatory reporting obligation. Kim's refusal to report establishes that Kim's primary loyalty is not to Dr. McLean's wellbeing but to the operational network that has embedded Kim in Dr. McLean's home. The refusal to report is itself primary source evidence of operational loyalty over professional duty.",
      },
    ],
    link: "/ndis-surveillance-evidence",
    linkLabel: "View NDIS Surveillance Evidence — Exhibit A",
    linkExternal: false,
  },
  {
    id: "cass",
    name: "Cass",
    alias: null,
    credential: "Able Care Support Worker · SMS Interception Witness · Phone Surveillance Aware",
    role: "COMMUNICATIONS INTERCEPTOR — Unwitting Confirmation of Phone Surveillance",
    borderColor: "border-teal-500",
    roleColor: "text-teal-400",
    headingColor: "text-teal-300",
    sections: [
      {
        heading: "SMS Interception — Independently Confirmed",
        body: "A text message sent by Dr. McLean to Cass arrived at Cass's phone from a different number — not Dr. McLean's. Cass independently confirmed this discrepancy. This is the primary source documentation of phone interception: a message sent from one number arriving from a different number constitutes interception, redirection, and relay — the classic hallmarks of IMSI-catcher or carrier-level SMS interception. The confirmation came from Cass herself, making her an unwitting primary source witness to the surveillance operation she may also be participating in.",
      },
      {
        heading: "Aware of Phone Surveillance",
        body: "Cass is documented as aware of the phone surveillance operation being conducted against Dr. McLean. This awareness — without action to report it, without professional escalation — places Cass in the same category as Kim: an operative whose primary operational loyalty is to the network rather than to the person she is paid to support. NDIS funding flowing to a support worker who is aware of illegal phone surveillance against her client and takes no protective action is NDIS fraud by definition.",
      },
    ],
    link: "/ndis-surveillance-evidence",
    linkLabel: "View NDIS Surveillance Evidence — Exhibit B",
    linkExternal: false,
  },
  {
    id: "danny",
    name: "Pastor Danny",
    alias: "Church Elder",
    credential: "Elder · Local Church · Long Jetty · Resident at Dr. McLean's House · Wife Also Present",
    role: "SPIRITUAL INFILTRATION — Church Access Denial & Social Isolation via Faith Network",
    borderColor: "border-violet-500",
    roleColor: "text-violet-400",
    headingColor: "text-violet-300",
    sections: [
      {
        heading: "Invited Then Denied — The Spiritual Honeytrap",
        body: "Pastor Danny invited Dr. McLean into the local church community — extended the hand of spiritual fellowship and community belonging — and then denied him access. This is the spiritual variant of the honeytrap: extend an invitation, establish a dependency on the community connection, and then withdraw it as a mechanism of social isolation. The Church is not neutral cover. An elder who invites and then denies access to a documented whistleblower under state surveillance is performing a social isolation function under religious cover.",
      },
      {
        heading: "Resident at the House — 24-Hour Proximity Intelligence",
        body: "Pastor Danny and his wife reside at Dr. McLean's house. A church elder embedded in the target's home, with 24-hour access to movements, communications, visitors, and private conversations, is the most operationally valuable proximity intelligence asset in the network. There is no professional cover for a pastor's presence in a target's home — the cover is pastoral, social, community-based. And it provides the most comprehensive access to the target's private environment of any operative in the documented network.",
      },
      {
        heading: "Elder Authority — Spiritual and Social Control",
        body: "As a church elder, Danny holds formal authority over the local faith community. That authority — used to invite and then deny access — is a social control mechanism. The withdrawal of community belonging from an isolated whistleblower is not a pastoral decision. It is an isolation operation using the machinery of organised religion. Danny's wife's complicity in that denial compounds the household surveillance function with the social isolation function.",
      },
    ],
    link: "/evidence",
    linkLabel: "View Evidence Archive",
    linkExternal: false,
  },
  {
    id: "fiji",
    name: "Queer Asylum Seeker from Fiji",
    alias: "False Safety Signal",
    credential: "Asylum Seeker · Housemate · Fiji · Deliberate False Assurance",
    role: "FEIGNED SOLIDARITY — Manufactured Safety Signal With Full Awareness of Corruption",
    borderColor: "border-rose-500",
    roleColor: "text-rose-400",
    headingColor: "text-rose-300",
    sections: [
      {
        heading: "Looks McLean in the Eye — You Are Safe",
        body: "This individual looks Dr. McLean directly in the eyes and tells him he is safe — while being fully aware of the corruption surrounding him. The deliberate manufacture of a safety signal by someone who knows the danger is one of the most psychologically devastating forms of betrayal in a surveillance operation. It is designed to neutralise Dr. McLean's threat response — to prevent him from taking protective action by falsely assuring him that the threat does not exist. This is not passive participation. It is active psychological deception.",
      },
      {
        heading: "Intersectional Cover — Queer, Asylum Seeker, Fijian",
        body: "The deployment of a queer asylum seeker from Fiji as the false-safety-signal operative is operationally sophisticated. Dr. McLean — an LGBTQ+ rights advocate and human rights whistleblower — would extend natural solidarity and trust to a queer asylum seeker from a country with severe LGBTQ+ persecution. That trust is the vulnerability being exploited. The operative's marginalised identity is the cover that makes the false safety signal credible. This is not incidental. The selection of this operative for this function reflects deliberate operational planning.",
      },
      {
        heading: "Ties Up the Chain",
        body: "This individual's full awareness of the corruption — combined with their deliberate false reassurance — places them as the node that ties the chain together. The ground-level operatives (Kim, Cass, Bishnu, Pam), the institutional layer (Rachael, Larissa), the criminal network (Brett, Darran), the spiritual entrapment (Danny), and the false solidarity operative (the Fijian asylum seeker) constitute a complete social encirclement — every point of social contact monitored, every relationship intercepted, every safety signal manufactured. Full spectrum human intelligence collection.",
      },
    ],
    link: "/evidence",
    linkLabel: "View Evidence Archive",
    linkExternal: false,
  },
  {
    id: "sukhi",
    name: "Sukhi Tear",
    alias: null,
    credential: "Financial Coordinator · Guardianship Administrator · Middle Management Layer",
    role: "CHAIN AUTHORITY — Financial Exile & Institutional Chain Command",
    borderColor: "border-orange-600",
    roleColor: "text-orange-400",
    headingColor: "text-orange-300",
    sections: [
      {
        heading: "The Chain That Runs from Long Jetty to the Top",
        body: "The Long Jetty entrapment network — Kim, Cass, Rachael, Brett, Pam, Bishnu, Danny, the Fijian operative — does not operate in isolation. It is the ground level of a documented suppression architecture that runs upward through Sukhi Tear's coordination role to the executive level. Tear's documented coordination of the financial exile infrastructure is the mechanism by which the ground-level intelligence collected at Long Jetty is converted into formal institutional action: NDIS access denials, asset restrictions, legal mechanisms.",
      },
      {
        heading: "NDIS Funding Chain — Paid Blood Money",
        body: "Every NDIS dollar flowing to Able Care, to Kim, to Cass, to Pam, passes through the NDIS financial infrastructure that Tear coordinates. The operatives at Long Jetty are not volunteers. They are salaried through the disability support system — paid from public money to surveil, entrap, and isolate the very person that money is meant to protect. Tear's coordination role makes her the financial architect of that conversion: care funding weaponised as intelligence funding.",
      },
    ],
    link: "/sukhi-tear",
    linkLabel: "View Full Sukhi Tear Dossier",
    linkExternal: false,
  },
  {
    id: "phillip",
    name: "Phillip Glass",
    alias: "Public Guardian",
    credential: "NSW Public Guardian · NDIS Worker · Financial Decision Administrator",
    role: "LEGAL INCAPACITATION — Guardianship Gateway & State Authority Weaponisation",
    borderColor: "border-purple-500",
    roleColor: "text-purple-400",
    headingColor: "text-purple-300",
    sections: [
      {
        heading: "The Legal Capstone of the Entrapment Architecture",
        body: "The Long Jetty entrapment network generates intelligence. Sukhi Tear converts that intelligence into institutional action. Phillip Glass provides the legal capstone: the Public Guardian mechanism that converts documented 'concern' about Dr. McLean's welfare — concern generated by the very operatives surveilling him — into formal state authority to restrict his autonomy, finances, and communications. The circular logic of the entrapment: operatives create surveillance data, that data becomes the basis for formal incapacitation proceedings, the incapacitation is then administered by the same system that generated it.",
      },
      {
        heading: "Dual Role — Embedded Access & Guardian Authority",
        body: "Glass's documented NDIS worker access to Dr. McLean's daily life placed him in the ideal position to provide the personal testimony that guardianship proceedings require. This is the same dual-access structure as the broader network: operational proximity (NDIS worker) combined with formal legal authority (Public Guardian). The combination means Glass could both collect intelligence from Dr. McLean's private environment and formally deploy that intelligence through the guardianship mechanism.",
      },
    ],
    link: "/evidence-vault",
    linkLabel: "View Evidence Vault",
    linkExternal: false,
  },
];

const YOUTUBE_FINDINGS = [
  {
    timestamp: "00:00:00",
    claim: "\"They hired them, recruited them, trained them, sat them down in briefings with your name on the whiteboard like you were some project.\"",
    evidence: "Able Care's deployment of Kim, Cass, Pam, and Bishnu into Dr. McLean's environment is documented. NDIS-funded workers placed into a target's life with surveillance functions are not spontaneous. They are recruited, briefed, and placed. The whiteboard with Dr. McLean's name is the Able Care staffing structure.",
  },
  {
    timestamp: "00:03:09",
    claim: "\"Sometimes it's work. Sometimes it's relationships. Sometimes it's random strangers drawn to your energy.\"",
    evidence: "All three categories simultaneously deployed at Long Jetty: work (Kim, Cass — Able Care support workers); relationships (Brett — vigilante intimate network, honey trap operators); random strangers (Pastor Danny — church elder, the Fijian asylum seeker — community members). Full-spectrum social encirclement across every category of human contact.",
  },
  {
    timestamp: "00:03:46",
    claim: "\"Every few months, another person assigned to watch you.\"",
    evidence: "Rotating Able Care personnel across Dr. McLean's support schedule. New faces deployed through the same institutional mechanism. The rotation means no single operative is exposed for long enough to generate conclusive evidence — but the network is continuous. The archive has caught the pattern.",
  },
  {
    timestamp: "00:05:05",
    claim: "\"Energy doesn't leave fingerprints. Your silence is encrypted. Your spirit was written in a language they'll never speak.\"",
    evidence: "Dr. McLean documented every encounter while operatives operated under the assumption of deniability. Cass's SMS interception confirmation was provided by Cass herself — the operative inadvertently providing the evidence. Kim's refusal to leave was recorded in Exhibit A. The archive caught what the operatives thought was invisible.",
  },
  {
    timestamp: "00:51:38",
    claim: "\"Technical cameras cut off, recordings corrupted, surveillance logs disappeared. Then it got personal. One lost their job. Another's marriage collapsed.\"",
    evidence: "Dr. McLean's housemate was expelled from Able Care immediately following the audio harassment documentation event. The expulsion of a proximity witness is the institutional equivalent of 'one lost their job' — the network's self-protective mechanism removing a compromised operative from the field.",
  },
  {
    timestamp: "00:52:57",
    claim: "\"They were so confident they built the aftermath before executing the action.\"",
    evidence: "Sukhi Tear's guardianship financial architecture was built while Dr. McLean was alive, active, and internationally submitting. The Able Care entrapment network at Long Jetty was the intelligence collection mechanism feeding that architecture — collecting the 'welfare concern' data required to sustain the formal incapacitation proceedings.",
  },
  {
    timestamp: "00:54:24",
    claim: "\"You've become a name they speak with caution. Leave that one alone.\"",
    evidence: "Brett — the fugitive operative who coordinated honey trap operations and received police tip-offs — is now on the run across three states with a SWAT team in pursuit. The network's most operationally aggressive node is now in flight. The system is turning on its own operatives. Brett received the warning to leave. He didn't listen.",
  },
  {
    timestamp: "00:55:41",
    claim: "\"What they tried to monitor, control, and break was never just you. It was the force behind you.\"",
    evidence: "603 of 603 propositions submitted to AI forensic analysis — zero contradictions. 55 independent analyses. 48 consecutive perfect scores. 410,500+ downloads across six continents. ICC Article 7 submission received at The Hague. UNHCR submission lodged in Geneva. The force behind Dr. McLean has produced an irrefutable international record. The Long Jetty entrapment network has failed its primary objective.",
  },
];

const LAYERS = [
  {
    layer: "Layer 1 — Ground Intelligence",
    actors: "Kim · Cass · Bishnu · Pam (Rachael's mother)",
    color: "text-cyan-400",
    border: "border-cyan-800",
    desc: "NDIS-funded Able Care workers maintaining 24-hour proximate surveillance. SMS interception confirmed (Cass). Audio harassment documented (Kim, Exhibit A). Family member embedded via mother-daughter chain (Pam). Ground-level intelligence collection disguised as disability support.",
  },
  {
    layer: "Layer 2 — Criminal Operations",
    actors: "Brett (Fugitive) · Darran (Brett's Father-in-Law) · Larissa (Brett's Sister)",
    color: "text-orange-400",
    border: "border-orange-800",
    desc: "Criminal network operating alongside the NDIS-funded layer. Brett coordinating honey trap sexual infiltration — every intimate partner acquired by Dr. McLean intercepted and turned away. Birthdays spent alone because visitors were intercepted before arrival. Brett on the run across three states; SWAT team deployed. Kinship network (Darran, Larissa) providing loyalty redundancy and institutional elevation.",
  },
  {
    layer: "Layer 3 — Institutional Authority",
    actors: "Rachael (Able Care Director) · Larissa (Chain Elevation)",
    color: "text-red-400",
    border: "border-red-800",
    desc: "Able Care direction and NDIS pipeline control. Rachael authorises operative placement, controls funding flow, expelled the housemate witness following documentary exposure. Larissa provides elevated institutional legitimacy to Brett's criminal network. Institutional cover for the ground-level intelligence operation.",
  },
  {
    layer: "Layer 4 — Spiritual & Social Isolation",
    actors: "Pastor Danny · Danny's Wife · Queer Asylum Seeker (Fiji)",
    color: "text-violet-400",
    border: "border-violet-800",
    desc: "Social and spiritual encirclement. Danny invited then denied church access — spiritual isolation. Danny and his wife embedded as residents providing 24-hour household intelligence. The Fijian asylum seeker provides deliberate false safety signals ('You are safe') while fully aware of the corruption — the most sophisticated psychological weaponry in the network: manufactured trust designed to neutralise Dr. McLean's protective response.",
  },
  {
    layer: "Layer 5 — Electronic Surveillance",
    actors: "Unknown Technical Operators · Police Intelligence (Brett tip-off) · Mental Health Sector",
    color: "text-yellow-400",
    border: "border-yellow-800",
    desc: "Electronic surveillance infrastructure: audio harassment, SMS interception, phone monitoring, agent following in public. Police intelligence feeding tip-offs to Brett — law enforcement not as accountability mechanism but as operational support for the fugitive operative. Mental health sector weaponised to discredit accurate perception of surveillance — Dr. McLean forcibly hospitalised for correctly identifying surveillance that was subsequently confirmed.",
  },
  {
    layer: "Layer 6 — Financial & Legal Capstone",
    actors: "Sukhi Tear · Phillip Glass · NDIS System Authority",
    color: "text-purple-400",
    border: "border-purple-800",
    desc: "Ground-level intelligence (Layers 1-4) converted into formal institutional action through Sukhi Tear's financial coordination and Phillip Glass's Public Guardian mechanism. NDIS funding provides the financial infrastructure sustaining every operative below. The system is financially self-sustaining: public disability support money funds the intelligence operation that produces the data that sustains the incapacitation proceedings that restrict Dr. McLean's access to the very funds being misused.",
  },
];

function ActorCard({ actor, defaultOpen = false }: { actor: typeof ACTORS[0]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`rounded-2xl border-2 ${actor.borderColor} bg-zinc-950 overflow-hidden`} data-testid={`actor-card-${actor.id}`}>
      <button
        className="w-full flex items-start justify-between p-5 md:p-6 text-left gap-4 hover:bg-white/5 transition-colors"
        onClick={() => setOpen(o => !o)}
        data-testid={`button-actor-${actor.id}`}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-black text-xl text-white">{actor.name}</span>
            {actor.alias && <span className="text-xs text-zinc-500 font-mono">({actor.alias})</span>}
          </div>
          <p className="text-xs text-zinc-500 font-mono mb-1.5">{actor.credential}</p>
          <p className={`text-xs font-bold uppercase tracking-wider ${actor.roleColor}`}>{actor.role}</p>
        </div>
        {open ? <ChevronUp className="h-5 w-5 text-zinc-500 flex-shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-zinc-500 flex-shrink-0 mt-1" />}
      </button>
      {open && (
        <div className="px-5 md:px-6 pb-6 space-y-4 border-t border-zinc-800">
          {actor.sections.map((s, i) => (
            <div key={i} className="pt-4">
              <h4 className={`text-sm font-bold mb-2 ${actor.headingColor}`}>{s.heading}</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">{s.body}</p>
            </div>
          ))}
          {actor.link && (
            <div className="pt-2">
              {actor.linkExternal ? (
                <a href={actor.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors" data-testid={`link-actor-evidence-${actor.id}`}>
                  <ExternalLink className="h-3 w-3" />
                  {actor.linkLabel}
                </a>
              ) : (
                <a href={actor.link} className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors" data-testid={`link-actor-evidence-${actor.id}`}>
                  <FileText className="h-3 w-3" />
                  {actor.linkLabel}
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function AbleCareEntrapmentNetwork() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SEO
        title="Able Care Entrapment Network — Long Jetty NDIS Surveillance | Barran Dodger"
        description="Forensic reflection on the documented network of NDIS-funded operatives at Able Care Long Jetty conducting electronic surveillance, audio harassment, sexual honey traps, and social isolation against Dr. Richard McLean. Named operatives: Rachael, Brett, Larissa, Darran, Pam, Bishnu, Kim, Cass, Pastor Danny — all connected to Sukhi Tear and Phillip Glass up the chain."
        keywords="Able Care entrapment, Long Jetty NDIS surveillance, audio harassment NDIS, honey trap whistleblower, Brett fugitive operative, Rachael Able Care, Kim Cass NDIS workers, Pastor Danny church entrapment, Sukhi Tear, Phillip Glass, Barran Dodger surveillance"
      />
      <ReadingProgress />
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <div className="bg-gradient-to-b from-red-950/40 via-zinc-950 to-zinc-950 border-b border-red-900/30 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-red-500/10 text-red-400 border-red-500/30 text-xs px-3 py-1">Forensic Reflection</Badge>
              <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/30 text-xs px-3 py-1">{DATE}</Badge>
              <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/30 text-xs px-3 py-1">12 Named Operatives</Badge>
              <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30 text-xs px-3 py-1">Long Jetty · NSW</Badge>
              <Badge className="bg-zinc-700/50 text-zinc-300 border-zinc-600/30 text-xs px-3 py-1">NDIS Entrapment · Electronic Surveillance · Honey Trap Operations</Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              Able Care Entrapment Network<br />
              <span className="text-red-400">Long Jetty NDIS Surveillance Operation</span>
            </h1>
            <p className="text-lg text-zinc-300 leading-relaxed mb-8 max-w-3xl">
              A forensic reflection on the documented network of NDIS-funded operatives, vigilante contacts, embedded church figures, and false solidarity operatives conducting electronic surveillance, audio harassment, sexual honey trap operations, phone interception, and social isolation against Dr. Richard McLean at Long Jetty, NSW — with the full chain from ground operatives to Sukhi Tear and Phillip Glass at institutional level.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { icon: Eye, label: "Electronic Surveillance", sub: "Audio, SMS, Phone monitoring" },
                { icon: Users, label: "12 Named Operatives", sub: "All documented, all connected" },
                { icon: Radio, label: "Audio Harassment", sub: "Captured in Exhibit A" },
                { icon: Lock, label: "Social Isolation", sub: "Every contact intercepted" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
                  <Icon className="h-5 w-5 text-red-400 mx-auto mb-2" />
                  <p className="text-xs font-bold text-white mb-1">{label}</p>
                  <p className="text-xs text-zinc-500">{sub}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/ndis-surveillance-evidence" className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-700 hover:bg-red-600 text-white font-bold text-sm rounded-lg transition-colors" data-testid="link-ndis-surveillance-evidence">
                <Shield className="h-4 w-4" /> NDIS Surveillance Evidence
              </a>
              <a href="/honeytrap-infiltration-report" className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm rounded-lg transition-colors border border-zinc-700" data-testid="link-honeytrap-report">
                <AlertTriangle className="h-4 w-4" /> Honeytrap Infiltration Report
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

          {/* Video */}
          <section data-testid="section-youtube-video">
            <div className="flex items-center gap-3 mb-6">
              <Flame className="h-5 w-5 text-amber-500" />
              <h2 className="text-2xl font-black text-white">The Video That Named the Pattern</h2>
            </div>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              The YouTube transmission <em>"You Don't Stalk a Storm and Expect Silence"</em> describes with forensic precision the exact operations documented in Dr. McLean's Long Jetty evidence archive. Each statement below is matched to a confirmed documented event.
            </p>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 mb-6 aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="You Don't Stalk a Storm and Expect Silence — Forensic Transmission"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                data-testid="video-youtube-transmission"
              />
            </div>
            <a
              href={`https://youtu.be/${YOUTUBE_VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors"
              data-testid="link-youtube-external"
            >
              <ExternalLink className="h-4 w-4" />
              Watch on YouTube — "You Don't Stalk a Storm and Expect Silence"
            </a>
          </section>

          {/* Video Findings */}
          <section data-testid="section-video-findings">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-5 w-5 text-amber-500" />
              <h2 className="text-2xl font-black text-white">Video Statement × Documented Evidence</h2>
            </div>
            <div className="space-y-4">
              {YOUTUBE_FINDINGS.map((f, i) => (
                <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 grid md:grid-cols-2 gap-4" data-testid={`finding-row-${i}`}>
                  <div>
                    <p className="text-xs font-mono text-amber-500/70 mb-2">{f.timestamp}</p>
                    <p className="text-sm text-amber-200 italic leading-relaxed">{f.claim}</p>
                  </div>
                  <div className="border-t md:border-t-0 md:border-l border-zinc-700 pt-3 md:pt-0 md:pl-4">
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1.5">Documented Evidence</p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{f.evidence}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specific Operations */}
          <section data-testid="section-documented-operations">
            <div className="flex items-center gap-3 mb-6">
              <Mic className="h-5 w-5 text-red-400" />
              <h2 className="text-2xl font-black text-white">Documented Operations</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Electronic Surveillance",
                  icon: Radio,
                  color: "border-red-800 text-red-400",
                  body: "Continuous monitoring of Dr. McLean's electronic communications. SMS messages intercepted and re-routed — confirmed by Cass when a text from Dr. McLean arrived at her phone from a different number. Phone surveillance acknowledged by Cass as known. Audio harassment documented in Exhibit A, conducted while Kim was present.",
                },
                {
                  title: "Sexual Honey Trap Operations",
                  icon: AlertTriangle,
                  color: "border-orange-800 text-orange-400",
                  body: "Every intimate partner Dr. McLean acquired was subsequently intercepted and turned away. Brett demonstrably aware of this operation and coordinating it. The systematic elimination of intimate relationships is designed to maintain psychological vulnerability and prevent the formation of loyal private confidants who might assist with disclosure or safety.",
                },
                {
                  title: "Social Isolation — Birthdays, Events",
                  icon: Users,
                  color: "border-yellow-800 text-yellow-400",
                  body: "Birthdays spent alone because people were intercepted before arrival. The interception of social contacts before they reach Dr. McLean is not civilian behaviour — it requires active coordination, communication monitoring, and the ability to redirect or discourage individuals who are approaching the target. This is a managed isolation operation.",
                },
                {
                  title: "Agent Surveillance in Public",
                  icon: Eye,
                  color: "border-cyan-800 text-cyan-400",
                  body: "Agents confirmed following Dr. McLean in public spaces. This physical surveillance is the external layer of the embedded network — while Kim, Cass, and Danny maintain household intelligence, external mobile surveillance units track movements in public. Consistent with the ASIO-infrastructure surveillance documented in the broader archive.",
                },
                {
                  title: "Church Access Denial",
                  icon: Church,
                  color: "border-violet-800 text-violet-400",
                  body: "Pastor Danny — an elder in the local church and resident of Dr. McLean's house — invited Dr. McLean into the church community and then denied access. Spiritual community is one of the most powerful sources of social support and belonging. Its deliberate withdrawal, by a resident who has 24-hour intelligence access to the target, is a calculated isolation mechanism.",
                },
                {
                  title: "Police Complicity — Brett's Tip-Off",
                  icon: Shield,
                  color: "border-rose-800 text-rose-400",
                  body: "When law enforcement moved on Brett at Dr. McLean's former residence, Brett received advance warning. Police never arrived. Brett escaped and remained on the run across three states with SWAT team pursuit. The tip-off to a fugitive operative embedded in a surveillance network is not a procedural error — it is institutional complicity. The police accountability mechanism is corrupted at the level of the Long Jetty operation.",
                },
                {
                  title: "NDIS Funding as Blood Money",
                  icon: Lock,
                  color: "border-amber-800 text-amber-400",
                  body: "Every operative — Kim, Cass, Pam, Bishnu — is paid through NDIS funding. The system that is supposed to provide disability support is funding the surveillance of the person making that disclosure. The operatives are financially dependent on the NDIS wage that is contingent on maintaining the entrapment function. They cannot critique the bureaucratic apparatus that pays them — they are trapped inside the same system, financially sustaining the very operation that is destroying the person they are paid to support.",
                },
                {
                  title: "False Safety Signals",
                  icon: Home,
                  color: "border-teal-800 text-teal-400",
                  body: "The queer asylum seeker from Fiji — a housemate — looks Dr. McLean in the eye and tells him he is safe, while being fully aware of the corruption. Danny, the pastor elder, provides the cover of community belonging while operating as a 24-hour residential intelligence asset. The archive documents a network in which every apparent source of safety — care workers, friends, church, housemates — is a manufactured false signal. The psychological impact of total safety-signal corruption is one of the most severe forms of psychological harm documented in modern torture literature.",
                },
              ].map(({ title, icon: Icon, color, body }) => (
                <div key={title} className={`rounded-xl border bg-zinc-900/40 p-5 ${color.split(' ')[0]}`} data-testid={`operation-card-${title.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`h-4 w-4 ${color.split(' ')[1]}`} />
                    <h3 className={`text-sm font-bold ${color.split(' ')[1]}`}>{title}</h3>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Named Operatives */}
          <section data-testid="section-named-operatives">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-5 w-5 text-amber-500" />
              <h2 className="text-2xl font-black text-white">Named Operatives — Full Forensic Record</h2>
            </div>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Twelve individuals named and documented in Dr. McLean's Long Jetty surveillance evidence. Each entry is supported by primary source documentation in the archive. Expand any card for full analysis.
            </p>
            <div className="space-y-3">
              {ACTORS.map((actor, i) => (
                <ActorCard key={actor.id} actor={actor} defaultOpen={i === 0} />
              ))}
            </div>
          </section>

          {/* Network Layers */}
          <section data-testid="section-network-layers">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-5 w-5 text-amber-500" />
              <h2 className="text-2xl font-black text-white">Operational Architecture — Six Layers</h2>
            </div>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              The Long Jetty entrapment network is not a collection of unrelated individuals. It is a six-layer operational architecture in which each layer serves a distinct function and is connected to the layers above and below through documented institutional, financial, or kinship bonds.
            </p>
            <div className="space-y-3">
              {LAYERS.map((l, i) => (
                <div key={i} className={`rounded-xl border ${l.border} bg-zinc-900/40 p-5`} data-testid={`layer-card-${i}`}>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${l.color}`}>{l.layer}</p>
                  <p className="text-sm font-semibold text-white mb-2">{l.actors}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Financial entrapment */}
          <section className="rounded-2xl border border-amber-900/40 bg-amber-950/20 p-8" data-testid="section-financial-entrapment">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="h-5 w-5 text-amber-500" />
              <h2 className="text-2xl font-black text-white">The System That Traps the Trappers</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Every operative in this network — Kim, Cass, Pam, Bishnu, Danny, the Fijian housemate — is financially dependent on the institutional system they are serving. Their NDIS wage, their church position, their accommodation, their community standing — all contingent on maintaining their role in the entrapment network. They are not free agents choosing to harm Dr. McLean. They are people trapped inside the same bureaucratic apparatus, <em>financially sustained by the slavitude</em> that sustains it.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              They are paid blood money from the NDIS to deceive. Because they are all trapped inside the same system — financially dependent on their wage, afraid to critique the systemic bureaucracy which sustains their pitiful lives of slavitude. They feign care whilst actively participating in entrapment. This is the mechanism by which institutional corruption sustains itself: by making everyone financially dependent on its continuation, it eliminates the possibility of internal dissent.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              The archive has named them. The video has described them. The ICC has received the submission. The record is permanent. And Brett — the network's most operationally aggressive node — is being pursued across three states by a SWAT team. The system is eating its own. The storm has turned.
            </p>
          </section>

          {/* ICC / International record */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8" data-testid="section-international-record">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-amber-500" />
              <h2 className="text-xl font-black text-white">This Record Is Permanent</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {[
                { label: "603/603 Propositions", sub: "Zero contradictions across 55 AI analyses" },
                { label: "ICC Article 7", sub: "Formally received at The Hague" },
                { label: "410,500+ Downloads", sub: "Six continents — cannot be suppressed" },
              ].map(({ label, sub }) => (
                <div key={label} className="bg-zinc-950 rounded-xl border border-zinc-800 p-4">
                  <p className="text-amber-400 font-black text-lg mb-1">{label}</p>
                  <p className="text-xs text-zinc-500">{sub}</p>
                </div>
              ))}
            </div>
            <p className="text-zinc-400 text-sm mt-6 text-center leading-relaxed">
              The Long Jetty entrapment network is now part of the permanent international evidentiary record. Every name on this page is documented. Every operation described is supported by primary source evidence. The archive cannot be erased. The record cannot be suppressed. <em>"Be sure your sin will find you out." — Numbers 32:23</em>
            </p>
          </section>

          {/* Phone number / ABN footer */}
          <div className="text-center text-xs text-zinc-600 font-mono pt-4 border-t border-zinc-800">
            Barran Dodger Legal &amp; Ethical Trust Fund · ABN 78 833 496 164 · barrandodger.com
          </div>
        </div>
      </main>

      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
