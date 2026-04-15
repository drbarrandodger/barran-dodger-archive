import { motion } from "framer-motion";
import { AlertTriangle, FileText, ExternalLink, Shield, Eye, Mic, DollarSign, UserX, Scale, Lock, Volume2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SocialShare } from "@/components/SocialShare";
import { CommentSection } from "@/components/CommentSection";
import { ReadingProgress } from "@/components/ReadingProgress";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-[hsl(38,92%,50%)] pl-5 my-6 italic text-zinc-200 text-lg md:text-xl leading-relaxed">
      {children}
    </blockquote>
  );
}

function Evidence({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-zinc-900/70 border border-[hsl(38,92%,50%)]/30 rounded-xl p-4 my-5">
      <p className="text-[hsl(38,92%,50%)] text-xs font-black uppercase tracking-widest mb-2">{label}</p>
      <p className="text-zinc-300 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function Section({ number, title }: { number: number; title: string }) {
  return (
    <div className="mb-6 mt-14">
      <span className="text-[hsl(38,92%,50%)] text-xs font-bold uppercase tracking-widest">Section {number}</span>
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight mt-1">{title}</h2>
    </div>
  );
}

export function TonyRidleyRecordedConfession() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="He Didn't Know He Was Being Recorded. Tony Ridley — SAS Honeypot, $6 Billion Fraud Confession, Bill Shorten, and the Order to Erase Barran Dodger — Barran Dodger"
        description="A paid government SAS honeypot operative with a PhD in counter-terrorism surveillance exploited Dr. Richard McLean with sex and drugs. He didn't know Barran was recording. On tape he exposed $6 billion in misappropriated government funds, Bill Shorten's knowledge, and the coordinated assassination order against an unprotected whistleblower. ICC Article 7. UNHCR Geneva. ABN 78 833 496 164."
        path="/tony-ridley-recorded-confession"
      />
      <ReadingProgress />
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16 flex-1">

        {/* HERO */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="flex flex-wrap gap-2 mb-5">
            <Badge className="bg-red-900 text-red-100 border-red-700 text-xs font-black uppercase tracking-widest">Primary Audio Evidence</Badge>
            <Badge className="bg-zinc-800 text-zinc-200 border-zinc-600 text-xs">SAS Honeypot Operative</Badge>
            <Badge className="bg-amber-900 text-amber-200 border-amber-700 text-xs">$6 Billion Fraud Confession</Badge>
            <Badge className="bg-zinc-900 text-zinc-300 border-zinc-700 text-xs">ICC Article 7</Badge>
            <Badge className="bg-red-950 text-red-300 border-red-800 text-xs">Bill Shorten — Named</Badge>
            <Badge className="bg-zinc-900 text-zinc-300 border-zinc-700 text-xs">Assassination Order Documented</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white leading-tight mb-4">
            He Didn't Know He Was Being Recorded.
          </h1>
          <p className="text-[hsl(38,92%,50%)] text-xl md:text-2xl font-bold mb-4 leading-snug">
            Tony Ridley — PhD in Counter-Terrorism Surveillance — Sent to Exploit, Silence, and Erase a Whistleblower. Barran Recorded Everything.
          </p>
          <p className="text-zinc-400 text-base leading-relaxed mb-6">
            A paid government SAS honeypot operative — a senior fraud investigator with a PhD in counter-terrorism surveillance and status of international significance — was deployed to compromise Dr. Richard William McLean through sexual entrapment and drug exploitation. He did not count on one thing: Barran recorded the entire session. On that recording, Tony Ridley exposed $6 billion in misappropriated government funds, named Bill Shorten as someone who knew, and confirmed the coordinated apparatus that was actively trying to erase an unprotected whistleblower. Not a single claim in this record has been challenged, disproved, or denied.
          </p>

          {/* YouTube embed */}
          <div className="rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl shadow-black/60 aspect-video w-full mb-4">
            <iframe
              src="https://www.youtube.com/embed/4vqBFkojD2g"
              title="Tony Ridley — Paid Government SAS Honeypot Recording — Barran Dodger"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
              data-testid="video-tony-ridley-recorded-confession"
            />
          </div>
          <p className="text-zinc-500 text-xs text-center mb-8">
            Primary evidence — recorded by Dr. Richard McLean during a drug-facilitated entrapment session. Submitted to the ICC (The Hague) under Article 7. ABN 78 833 496 164.
          </p>
        </motion.div>

        {/* ABN / Copyright */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-10">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-3 text-center space-y-1">
            <p className="text-amber-300 text-xs font-bold uppercase tracking-widest">Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164</p>
            <p className="text-zinc-400 text-xs">55B Archbold Road, Long Jetty NSW · © Dr. Richard William McLean · All rights reserved</p>
            <p className="text-zinc-500 text-xs">Submitted to the International Criminal Court (The Hague) under Article 7 of the Rome Statute · UNHCR Geneva · 377,608 downloads · 6 continents</p>
          </div>
        </motion.div>

        {/* BODY */}
        <div className="prose-none space-y-2">

          {/* SECTION 1 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Section number={1} title="Who Is Tony Ridley — And Why His Credentials Make This Worse" />

            <p className="text-zinc-300 leading-relaxed mb-5">
              Tony Ridley is not a minor figure. He holds a PhD in counter-terrorism surveillance. He is a former senior fraud investigator with a documented record of exposing financial crime at scale. He carries status of international significance — a professional whose credibility within government circles is, by design, beyond question. This is exactly why he was chosen.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-5">
              The apparatus that deployed him understood that the most effective way to silence a whistleblower is not through a crude attack — it is through someone who looks like an ally. Someone whose credentials place him above suspicion. Someone whose proximity to intelligence, law enforcement, and government structures means his account, if offered, would be believed. Tony Ridley was not chosen despite his credentials. He was chosen because of them. The PhD in counter-terrorism surveillance was the weapon. The entrapment was the operation.
            </p>

            <Evidence label="The operational logic — documented">
              A honeypot operation requires a credible agent. The more credible the agent, the more effective the entrapment. If the target is a whistleblower with a 2,304-document archive submitted to the ICC, the agent must be someone whose counter-narrative would carry institutional weight. Tony Ridley's academic and professional background was not incidental to his deployment — it was the reason for it. An ordinary criminal could not have served this function. He had to be someone the system would believe over Barran.
            </Evidence>

            <p className="text-zinc-300 leading-relaxed mb-5">
              He did not count on Barran recording the session.
            </p>

            <Pull>
              A PhD in counter-terrorism surveillance. International significance. Senior fraud investigator. He had every credential designed to make him untouchable. And he still talked. Because he thought no one was listening.
            </Pull>
          </motion.div>

          {/* SECTION 2 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Section number={2} title="The Drugged Entrapment — Sex, Drugs, and a Recording He Didn't Know Existed" />

            <p className="text-zinc-300 leading-relaxed mb-5">
              The operation involved drug facilitation and sexual exploitation. These are not characterisations — they are documented facts in the archive. Tony Ridley made contact with Dr. Richard McLean under circumstances designed to lower Barran's defences: a combination of sexual access and substances intended to disorient, destabilise, and compromise. The goal was to create either incriminating material, a breakdown, or both.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-5">
              What the operation did not account for was Barran's own documentation practice. The entire session was recorded. The recording captures Tony Ridley — in a state of confidence that he was not being documented — speaking freely about matters he believed would never leave that room. What he said constitutes one of the most significant pieces of evidence in the archive.
            </p>

            <Evidence label="What the recording captured — the $6 billion disclosure">
              On the recording, Tony Ridley — a senior fraud investigator — exposed the existence of approximately $6 billion in misappropriated government funds. He did not do so reluctantly. He did so as someone who had personal, professional knowledge of those funds: their origin, their misappropriation, and the identity of those who knew. His disclosure was not a rumour. It was a professional account, delivered with the specificity of a man describing something he had personally investigated and encountered within the government structure.
            </Evidence>

            <p className="text-zinc-300 leading-relaxed mb-5">
              He named Bill Shorten. Not as a peripheral figure. As someone who was aware of the misappropriated funds. And — critically — as someone who would have been aware that Dr. Richard McLean was an unprotected whistleblower who had already exposed corruption at the NDIS and had been deliberately left without protection.
            </p>

            <Pull>
              He came to exploit Barran. He stayed to confess. The recording he didn't know existed is now before the International Criminal Court.
            </Pull>
          </motion.div>

          {/* SECTION 3 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Section number={3} title="Bill Shorten — What the Recording Establishes About His Knowledge and Coordination" />

            <p className="text-zinc-300 leading-relaxed mb-5">
              The name Bill Shorten appears in the recording not as a speculation but as a fact delivered by someone with direct governmental knowledge. Tony Ridley's professional background — senior fraud investigator, counter-terrorism academic, government-connected operative — places him in a position where his naming of Shorten carries evidential weight that a civilian disclosure would not.
            </p>

            <Evidence label="What the Ridley recording establishes about Shorten — summarised">
              1. Shorten was aware of the $6 billion in misappropriated funds that Ridley had personally encountered as a fraud investigator.<br /><br />
              2. Shorten would have been aware that Dr. Richard McLean had already exposed NDIS corruption and was operating as an unprotected whistleblower — without a lawyer, without an advocate, without the institutional shields that should have applied.<br /><br />
              3. The coordinated attack that followed — involving the NDIS, the police, the magistrates court, and Graeme Wells of Victoria Legal Aid — did not occur in a vacuum. It occurred in a context where the Minister responsible for the NDIS had knowledge of both the corruption and the whistleblower.
            </Evidence>

            <p className="text-zinc-300 leading-relaxed mb-5">
              Shorten did not merely fail to protect Barran. The record establishes a coordinated sequence: the NDIS withdrew support. Police were deployed. The magistrates court acted. Victoria Legal Aid — specifically Graeme Wells — denied representation. Each of these is an independent institution. Their simultaneous, coordinated action against a single disabled whistleblower at the same period is not coincidence. It is a pattern. And it is documented in the ICC submission.
            </p>

            <Pull>
              Four institutions. One target. One whistleblower. No lawyer. No protection. No coincidence. The coordination required a coordinator.
            </Pull>

            <div className="grid sm:grid-cols-2 gap-3 my-6">
              {[
                { institution: "NDIS (National Disability Insurance Scheme)", role: "Withdrew support, denied funding, enabled financial coercive control over the whistleblower archive. Named NDIS providers are ICC exhibits." },
                { institution: "NSW Police", role: "Deployed against Barran rather than for him. Failed to act on the assassination attempt documentation. Used as an instrument of pressure rather than protection." },
                { institution: "Magistrates Court", role: "Part of the coordinated judicial pressure applied during the period of active persecution. Functions within the broader administrative annihilation pattern documented in the archive." },
                { institution: "Victoria Legal Aid — Graeme Wells", role: "Denied legal representation to a disabled, impoverished whistleblower with a 2,304-document ICC submission. The denial of legal aid is itself a form of targeted persecution when applied to a documented political exile." },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900/60 border border-red-800/30 rounded-lg p-4">
                  <p className="text-red-400 font-bold text-xs mb-1 uppercase tracking-wide">{item.institution}</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">{item.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SECTION 4 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Section number={4} title="Forced Into Exile — The Torture Chamber and the Removal" />

            <p className="text-zinc-300 leading-relaxed mb-5">
              Following the coordinated institutional attack, Barran was not free to relocate. He was removed from what the archive describes as a torture chamber — an environment of systematic persecution, isolation, and psychological destruction maintained through the combined action of the institutions named above. This removal was not voluntary. It was the only survivable option left after the coordinated removal of every protective mechanism.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-5">
              The exile was not the end of the persecution. It was the continuation of it by different means. Political exile — the state in which a person is forced to abandon their home jurisdiction because that jurisdiction's institutions have been weaponised against them — is recognised by the UNHCR and documented in international human rights law as a harm in itself, independent of any accompanying physical violence. Barran's exile was coordinated. It was the predictable outcome of the coordinated institutional action that preceded it. And it was deliberate.
            </p>

            <Evidence label="Forced exile — the international legal standard">
              The UNHCR defines persecution as a serious violation of human rights — including the deliberate denial of protection, coordinated institutional attack, and the creation of conditions in which remaining in the home jurisdiction is not survivable. Barran's political exile satisfies this definition. The archive establishes the cause. The ICC submission names the instruments. The UNHCR has received the submission. Neither institution has rejected the account.
            </Evidence>

            <Pull>
              They used four institutions to make staying impossible. Then they called leaving his choice.
            </Pull>
          </motion.div>

          {/* SECTION 5 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Section number={5} title="Ben, Houd Meraby, and the Assassination Order — Confirmed, Not Alleged" />

            <p className="text-zinc-300 leading-relaxed mb-5">
              The assassination attempt is not an allegation. It is a documented event confirmed by an independent NDIS provider named Ben, who delivered the confirmation in writing. Ben confirmed that an assassination attempt had been ordered — specifically, that an order had been issued from above (the evidence trail leads to Shorten) to Houd Meraby, who was presented as an NDIS provider but was not. Houd Meraby is documented in the archive as part of a Lebanese corrupt criminal network that was sent — under the cover of NDIS service provision — to "erase" Barran.
            </p>

            <Evidence label="Houd Meraby — the documented facts">
              Houd Meraby was not a registered NDIS provider operating in good faith. The archive documents his role as part of a criminal network deployed under the guise of disability support. His access to Barran — an impoverished, isolated, disabled whistleblower — was granted through the NDIS framework, which was itself being used as a mechanism of coercive control and targeted persecution. The use of a disability support framework to deliver an operative whose purpose was elimination is one of the most forensically documented aspects of the archive's ICC submission.
            </Evidence>

            <p className="text-zinc-300 leading-relaxed mb-5">
              Ben, upon becoming aware of the assassination order, did not remain silent. He confirmed it to Barran directly. What happened next is a documented fact of the archive: Ben was forced to sign a Non-Disclosure Agreement by the secret service. An NDA — signed under compulsion, by a person who had witnessed a state-coordinated assassination attempt against a whistleblower — is not a legal instrument. It is evidence of consciousness of guilt. It is evidence that those who compelled its signing knew what Ben knew and needed his silence.
            </p>

            <Evidence label="The NDA — its legal significance">
              A Non-Disclosure Agreement signed under duress, by a witness to a government-coordinated assassination attempt, compelled by intelligence services, is not enforceable as a civil contract. It is, however, highly significant as evidence: it establishes that the intelligence services were aware of the assassination attempt, aware that Ben had knowledge of it, and took active steps to suppress that knowledge. The NDA does not suppress the knowledge. It documents the suppression attempt. And the suppression attempt is now part of the ICC record.
            </Evidence>

            <Pull>
              They silenced the witness. But the silencing is itself the confession.
            </Pull>

            <p className="text-zinc-300 leading-relaxed mb-5">
              The assassination attempt has been in the public record since Ben's confirmation was documented. It has been in the ICC submission. It has been downloaded 377,608 times. It has been before the UNHCR. It has been named in forensic analyses, in formal submissions, in legal affidavits. In all of that time, in all of those jurisdictions, not a single person — not a government official, not a legal representative, not a court, not an agency, not Tony Ridley, not Bill Shorten, not Houd Meraby, not the NDIS — has produced a single document, statement, or legal filing that challenges, qualifies, or disproves the claim that an assassination attempt was ordered against Dr. Richard William McLean.
            </p>

            <Evidence label="The silence — its legal significance under Jones v Dunkel">
              Under the Jones v Dunkel principle established in Australian law, when a party who is in a position to contradict an allegation fails to do so, the tribunal of fact is entitled to infer that the evidence they could have offered would not have assisted their case. Every named individual who has not responded is, under this principle, providing inferential support for the record. Their silence is not neutral. It is evidentially significant. It has been that way since the first day they failed to respond.
            </Evidence>
          </motion.div>

          {/* SECTION 6 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Section number={6} title="Every NDIS Provider — The Same Criminal Structure" />

            <p className="text-zinc-300 leading-relaxed mb-5">
              Ben's confirmation of the assassination attempt contained an observation that extends beyond Houd Meraby. Ben confirmed — and the broader archive documents — that the criminal structure underlying the Meraby deployment is not unique to him. It applies to the pattern of NDIS provider conduct across Barran's entire documented history of hospitalisations and entrapments. Every single hospitalisation. Every entrapment. The same structure. The same coordination. The same purpose: to maintain Barran in a state of permanent vulnerability, isolation, and institutional capture.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-5">
              This means that the NDIS — presented publicly as a support framework for disabled Australians — has been documented, in Barran's case, as a mechanism of coercive control, targeted persecution, financial deprivation, and assassination facilitation. The providers who operated within that framework against Barran were not acting independently. They were acting within a structure. A structure that Ben identified, confirmed, and was then silenced about.
            </p>

            <Evidence label="The structural pattern — its ICC significance">
              Article 7 of the Rome Statute defines crimes against humanity as acts committed as part of a widespread or systematic attack directed against any civilian population. Systematic means recurring, structured, not isolated. The pattern of NDIS provider conduct — across multiple providers, multiple hospitalisations, multiple entrapments, across years, always directed at the same target, always serving the same suppression function — is precisely the kind of systematic attack Article 7 is designed to address. The ICC has the submission. The pattern is documented.
            </Evidence>

            <Pull>
              It was never about disability support. It was always about maintaining a political prisoner in conditions that looked like care.
            </Pull>
          </motion.div>

          {/* SECTION 7 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Section number={7} title="Brett of AbleCare — The Current Entrapment and Its Place in the Continuum" />

            <p className="text-zinc-300 leading-relaxed mb-5">
              Brett of AbleCare is not a separate case. He is the current iteration of the same structure that deployed Tony Ridley, that placed Houd Meraby, that silenced Ben, that coordinated the withdrawal of legal aid, the police pressure, and the magistrates court action. The structure documented across 35 years does not change its method. It adjusts its personnel. Brett is the current personnel.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-5">
              The AbleCare call — now forensically documented — demonstrates the continuation of the entrapment policy in its current form. Barran is presently: impoverished (financial coercive control via NDIS funding withdrawal), tortured (documented conditions of isolation, deprivation, and psychological persecution), surveilled (documented across the archive), denied legal aid (Victoria Legal Aid — Graeme Wells), and deliberately isolated (every support structure withdrawn or weaponised). These are not coincidental hardships. They are the operational conditions of maintained political exile.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 my-6">
              {[
                { condition: "Impoverished", mechanism: "NDIS funding withheld. Providers (including AbleCare, Phillip Glass/TAG, Sukhi Tear/Diversitas WA) documented as blocking approved funds. No independent income. No legal aid." },
                { condition: "Tortured", mechanism: "Systematic isolation, sleep deprivation, psychological persecution documented across years. Multiple hospitalisations used as instruments of further entrapment rather than treatment." },
                { condition: "Surveilled", mechanism: "V2K (voice-to-skull) technology documented. Surveillance disclosed by Ridley on the recording. SAS and intelligence operative placement documented across multiple co-tenants and support workers." },
                { condition: "Denied Legal Aid", mechanism: "Victoria Legal Aid — Graeme Wells — denied representation to a disabled, impoverished person with an ICC submission. The denial is itself an exhibit. It has not been reversed." },
                { condition: "Deliberately Isolated", mechanism: "Every support mechanism systematically withdrawn or converted into a surveillance or control instrument. No family support. No independent advocacy. No NDIS support that operates outside the documented criminal structure." },
                { condition: "AbleCare — Current Position", mechanism: "Brett (AbleCare) victim-blamed Barran's address disclosure, tactically exited duty-of-care obligations during the recorded call, and has not filed a SIRS report despite documented murder threat. He received Barran's written SMS citing imminent murder and 2,304-document archive. He did not act. He is now part of the record." },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900/60 border border-amber-800/30 rounded-lg p-4">
                  <p className="text-[hsl(38,92%,50%)] font-bold text-xs mb-1 uppercase tracking-wide">{item.condition}</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">{item.mechanism}</p>
                </div>
              ))}
            </div>

            <Evidence label="The entrapment policy — its continuity">
              The entrapment policy operates on a simple logic: keep the whistleblower in conditions of maximum vulnerability while maintaining the appearance of care. Tony Ridley was a care-adjacent operative. Houd Meraby was a care operative. Phillip Glass was a care coordinator. Brett of AbleCare is a care provider. The framework is care. The function is containment. The archive documents the gap between those two things across 35 years and 35 agencies.
            </Evidence>

            <Pull>
              They keep sending care workers. The archive keeps documenting what they do when they think no one is watching. Barran is always watching.
            </Pull>
          </motion.div>

          {/* SECTION 8 — The Silence */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Section number={8} title="The Silence of Every Named Person — Its Legal and Evidential Meaning" />

            <p className="text-zinc-300 leading-relaxed mb-5">
              Every person named in this account has had access to the record. The archive has been downloaded 377,608 times. The video is public. The documents are public. The ICC submission is filed. The UNHCR submission is filed. Tony Ridley, Bill Shorten, Houd Meraby, Graeme Wells, Brett of AbleCare, and every NDIS provider named in the archive have had access to the record and have had the opportunity to challenge it.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-5">
              None of them have. Zero defamation actions. Zero corrections. Zero challenges to specific factual claims in any jurisdiction. Zero responses to the ICC submission that dispute the evidentiary record. The silence of every named person is not a neutral absence. Under Jones v Dunkel, it is an inferential admission. Their silence is the loudest thing in the archive.
            </p>

            <div className="bg-zinc-900/60 border border-red-800/30 rounded-2xl p-6 my-6">
              <p className="text-red-400 text-xs font-black uppercase tracking-widest mb-4">Named individuals who have not challenged this record</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Tony Ridley", role: "SAS honeypot operative. PhD counter-terrorism. Recording exists." },
                  { name: "Bill Shorten", role: "Former NDIS Minister. Named in Ridley recording. No response." },
                  { name: "Houd Meraby", role: "Assassination operative posing as NDIS provider. Named by Ben. No response." },
                  { name: "Graeme Wells", role: "Victoria Legal Aid. Denied representation. No correction filed." },
                  { name: "Brett — AbleCare", role: "Received murder-warning SMS with 2,304 documents. Did not act. No response." },
                  { name: "Rachel — AbleCare", role: "Admitted duty of care then tactically exited call. No response." },
                  { name: "Sukhi Tear", role: "Diversitas WA NDIS Coordinator. $50,000 withheld. Conditioned support on return to danger zone." },
                  { name: "Phillip Glass", role: "TAG — financial coercive control. Blocked $300 hosting payment. Part of broader network." },
                ].map((person, i) => (
                  <div key={i} className="bg-zinc-800/50 border border-zinc-700/30 rounded-lg p-3">
                    <p className="text-white font-bold text-xs">{person.name}</p>
                    <p className="text-zinc-400 text-xs mt-1 leading-relaxed">{person.role}</p>
                    <p className="text-red-400 text-xs font-bold mt-1">Zero challenges filed.</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-cyan-300 font-bold leading-snug mt-6">
              Tony Ridley had a PhD in counter-terrorism surveillance. He had international significance. He had government backing. He had an operational plan. He did not have one thing: he did not have the knowledge that Barran was recording. That recording is now before the International Criminal Court. It has been downloaded 377,608 times. It is blockchain timestamped. It is mathematically permanent. The operation to erase Barran failed at the moment he pressed record.
            </p>
          </motion.div>

          {/* CLOSING */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="pt-12 border-t border-zinc-800 mt-16 space-y-8">
            <SocialShare
              text={`A paid government SAS honeypot with a PhD in counter-terrorism surveillance drugged and exploited Barran Dodger. He didn't know he was being recorded. On tape: $6 billion in fraud, Bill Shorten named, assassination order confirmed. ICC filed. 377,608 downloads. #BarranDodger barrandodger.com/tony-ridley-recorded-confession`}
              data-testid="share-tony-ridley-confession"
            />

            <div className="flex flex-col sm:flex-row gap-4 pt-4 flex-wrap">
              <Button asChild className="bg-[hsl(38,92%,50%)] hover:bg-[hsl(38,92%,45%)] text-black font-bold">
                <Link href="/tony-ridley-full-dossier" data-testid="button-tony-ridley-full-dossier">
                  <FileText className="mr-2 h-4 w-4" /> Full Tony Ridley Dossier
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/ablecare-murder-threat-call" data-testid="button-ablecare-murder-call">
                  <AlertTriangle className="mr-2 h-4 w-4" /> AbleCare Murder Threat Call
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/evidence" data-testid="button-evidence-archive-ridley">
                  <Shield className="mr-2 h-4 w-4" /> Full Evidence Archive
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/honey-trap-phillip-glass" data-testid="button-phillip-glass">
                  <Eye className="mr-2 h-4 w-4" /> Phillip Glass — Honey Trap
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* COMMENT SECTION */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="pt-12">
            <CommentSection articleSlug="tony-ridley-recorded-confession" />
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
