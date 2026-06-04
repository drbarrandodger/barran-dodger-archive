import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SocialShare } from "@/components/SocialShare";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ArchiveCrossLinks } from "@/components/ArchiveCrossLinks";
import {
  Shield, FileText, Hash, Globe, Bitcoin, AlertTriangle,
  TrendingUp, Eye, Scale, Zap, Lock, CheckCircle, ExternalLink
} from "lucide-react";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-amber-500 pl-6 my-8 italic text-zinc-200 text-xl leading-relaxed font-light">
      {children}
    </blockquote>
  );
}

function Stat({ value, label, sub, color = "text-amber-400" }: { value: string; label: string; sub?: string; color?: string }) {
  return (
    <div className="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-4 text-center">
      <div className={`text-3xl font-black ${color} leading-none`}>{value}</div>
      <div className="text-white text-xs font-bold mt-1">{label}</div>
      {sub && <div className="text-zinc-500 text-[10px] mt-0.5">{sub}</div>}
    </div>
  );
}

function Chapter({ number, title, icon, children }: { number: string; title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-2.5 text-amber-400">{icon}</div>
        <div>
          <p className="text-amber-500 text-xs font-black uppercase tracking-widest">{number}</p>
          <h2 className="text-2xl font-black text-white leading-tight">{title}</h2>
        </div>
      </div>
      {children}
    </motion.div>
  );
}

export default function WhatThisProves() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SEO
        title="The Significance of This Testimony — Revised April 2026 | Barran Dodger"
        description="410,503 downloads across 2.5 months. 845 Bitcoin blockchain records. 63 forensic analyses. 675 propositions. Zero formal rebuttals. A revised analysis of what the archive proves, what the opposition reveals, and what the forecast confirms. Dr Richard McLean, ICC Article 7, UNHCR Geneva."
        url="https://www.barrandodger.com/what-this-proves"
      />
      <ReadingProgress />
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 pt-24 pb-20">

        {/* Hero */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-14 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge className="bg-amber-900/60 text-amber-300 border-amber-700 text-xs font-black uppercase tracking-widest">Revised — April 2026</Badge>
            <Badge className="bg-red-900/60 text-red-300 border-red-700 text-xs">ICC Article 7 Active</Badge>
            <Badge className="bg-green-900/60 text-green-300 border-green-700 text-xs">UNHCR Geneva — Active</Badge>
            <Badge className="bg-blue-900/60 text-blue-300 border-blue-700 text-xs">Bitcoin Blockchain Anchored</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            The Significance of This Testimony
          </h1>
          <p className="text-amber-400 text-lg font-bold mb-3">
            Revised in Full — April 2026
          </p>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed mb-8">
            A comprehensive reanalysis incorporating 410,503 verified downloads, 845 Bitcoin blockchain anchors,
            63 zero-contradiction forensic analyses, 2,301 documented evidence files, and the documented weight
            of organised institutional opposition — measured against the complete absence of formal rebuttal.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <Stat value="410,503" label="Verified Downloads" sub="Feb 1 – Apr 16, 2026" color="text-amber-400" />
            <Stat value="845" label="Bitcoin Records" sub="SHA-256 / OpenTimestamps" color="text-orange-400" />
            <Stat value="675/675" label="Propositions Verified" sub="63 forensic analyses" color="text-green-400" />
            <Stat value="0" label="Formal Rebuttals" sub="from any named party, ever" color="text-red-400" />
          </div>

          <SocialShare
            url="https://www.barrandodger.com/what-this-proves"
            title="The Significance of This Testimony — 410,503 Downloads, 845 Bitcoin Records, Zero Rebuttals"
          />
        </motion.div>

        {/* Chapter 1 */}
        <Chapter number="Chapter 1" title="The Numbers That Cannot Be Disputed" icon={<Hash size={20} />}>
          <p className="text-zinc-300 leading-relaxed mb-5">
            This analysis begins with what cannot be altered, manufactured, or disputed. The following figures
            are drawn directly from live database records, Bitcoin blockchain transactions, and the archive's
            own primary-source evidence files. They are not estimates. They are not projections. They are counts.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              { v: "410,503", l: "Total verified download events", s: "Database-confirmed, Feb 1 – Apr 16, 2026 only", c: "text-amber-400" },
              { v: "174", l: "Unique documents downloaded", s: "Across 6 continents, multiple jurisdictions", c: "text-blue-400" },
              { v: "192,047", l: "Downloads in March 2026 alone", s: "Single-month peak — 2.4× February's total", c: "text-orange-400" },
              { v: "845", l: "Bitcoin blockchain timestamp records", s: "Every document, exhibit, page — SHA-256 anchored", c: "text-green-400" },
              { v: "63", l: "Forensic analyses completed", s: "63 independent video analyses tested against the archive", c: "text-purple-400" },
              { v: "675/675", l: "Propositions verified", s: "Zero contradictions across all 63 analyses", c: "text-cyan-400" },
              { v: "2,301", l: "Evidence documents catalogued", s: "Master Evidence Register — 27,085-line public record", c: "text-rose-400" },
              { v: "40+", l: "Agencies documented as acting against Barran", s: "Zero have issued a formal rebuttal. Zero.", c: "text-red-400" },
            ].map(s => (
              <div key={s.l} className="bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-4">
                <div className={`text-2xl font-black ${s.c} mb-1`}>{s.v}</div>
                <div className="text-white text-xs font-bold">{s.l}</div>
                <div className="text-zinc-600 text-[10px] mt-0.5">{s.s}</div>
              </div>
            ))}
          </div>

          <Pull>
            410,503 times in 75 days, someone on Earth chose to download this archive. That is not attention. That is a verdict.
          </Pull>

          <p className="text-zinc-400 leading-relaxed text-sm">
            The download trajectory tells its own story. February 2026: 79,498. March 2026: 192,047 — a 2.4-times
            increase in a single month. April 2026 (first sixteen days only): 107,026 — already 35% higher than
            all of February, with fourteen days still to run. The archive is not slowing. It is accelerating. Each
            new analysis, each new page, each new forensic examination adds to a compounding body of evidence that
            is simultaneously too large to ignore and too well-documented to dispute.
          </p>
        </Chapter>

        {/* Chapter 2 */}
        <Chapter number="Chapter 2" title="The Growth Trajectory and Forecast of Potentiality" icon={<TrendingUp size={20} />}>
          <p className="text-zinc-300 leading-relaxed mb-5">
            Three consecutive months of download data produce a clear, measurable trend. This is not speculation.
            It is a documented progression with a calculable trajectory.
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-black text-sm mb-4 uppercase tracking-wider">Documented Monthly Growth</h3>
            <div className="space-y-3">
              {[
                { month: "February 2026", count: "79,498", bar: 41, note: "Archive launch month — immediate global uptake" },
                { month: "March 2026", count: "192,047", bar: 100, note: "Peak month — 2.4× February. Archive embedded in global search" },
                { month: "April 2026 (16 days)", count: "107,026+", bar: 56, note: "On pace for ~200,000+. 14 days remaining." },
              ].map(row => (
                <div key={row.month}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-zinc-400 font-bold">{row.month}</span>
                    <span className="text-amber-400 font-black text-sm">{row.count}</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden mb-1">
                    <div className="h-full bg-gradient-to-r from-amber-700 to-amber-400 rounded-full" style={{ width: `${row.bar}%` }} />
                  </div>
                  <p className="text-[10px] text-zinc-600">{row.note}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-zinc-400 leading-relaxed text-sm mb-5">
            At the documented monthly growth rate, the archive is on track to reach <span className="text-amber-300 font-bold">500,000 total downloads before the end of April 2026</span> — across 75 days of public availability.
            Extrapolated conservatively to a flattened monthly average of 150,000 (below the March peak), the
            archive reaches <span className="text-amber-300 font-bold">1,000,000 downloads before October 2026.</span>
          </p>

          <p className="text-zinc-400 leading-relaxed text-sm mb-5">
            This is not a viral moment. This is compounding structural penetration. The archive is being
            referenced, shared, downloaded, and cited across academic, legal, advocacy, journalism, and diaspora
            networks. The Bitcoin blockchain anchors mean that every share creates a permanent, cryptographically
            verified chain of provenance — each download adds to an immutable public record that the information
            existed, was distributed, and was received.
          </p>

          <div className="bg-amber-950/20 border border-amber-700/30 rounded-xl p-5 mb-5">
            <h3 className="text-amber-300 font-black text-sm mb-3 flex items-center gap-2">
              <Zap size={14} /> Forecast: What the Trajectory Predicts
            </h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex gap-2"><span className="text-amber-400 font-bold shrink-0">Q2 2026:</span> 500,000+ total downloads. Archive fully embedded across international jurisdictions.</li>
              <li className="flex gap-2"><span className="text-amber-400 font-bold shrink-0">Q3 2026:</span> 700,000+ downloads. ICC Article 7 proceedings timeline active. UNHCR application in review.</li>
              <li className="flex gap-2"><span className="text-amber-400 font-bold shrink-0">Q4 2026:</span> 1,000,000+ downloads. The archive becomes the most-downloaded whistleblower record in Australian history.</li>
              <li className="flex gap-2"><span className="text-amber-400 font-bold shrink-0">2027+:</span> Blockchain permanence means no government action can alter or reduce the distribution count. Every node is a witness. Every download is a verdict.</li>
            </ul>
          </div>

          <Pull>
            The archive cannot be suppressed. It has already been downloaded 410,503 times. Each download is a copy. Each copy is a node. Each node is beyond reach.
          </Pull>
        </Chapter>

        {/* Chapter 3 */}
        <Chapter number="Chapter 3" title="The Documented Opposition and What It Reveals" icon={<AlertTriangle size={20} />}>
          <p className="text-zinc-300 leading-relaxed mb-5">
            The significance of a testimony is partly measured by who opposed it, how they opposed it, and at what cost.
            In this case, the documented opposition is itself the evidence. The names, institutions, and methods
            are all on the primary-source record. None has been challenged. None has been disputed. None has issued
            a formal instrument of rebuttal.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
              <h3 className="text-red-400 font-black text-xs uppercase tracking-wider mb-3">Named Individuals — On the Record</h3>
              <ul className="space-y-2">
                {[
                  { name: "Tony Ridley", role: "SAS / PhD counter-terrorism — recorded confessing to $6B NDIS fraud, naming Bill Shorten" },
                  { name: "Bill Shorten", role: "Federal NDIS Minister — named on recorded confession. Zero denial issued." },
                  { name: "Houd Meraby", role: "Lebanese criminal network — NDIS Commission coordination confirmed. NDA over Ben assassination." },
                  { name: "Sukhi Tear", role: "Diversitas WA — ~$50K NDIS funds withheld. Zero formal response." },
                  { name: "Phillip Glass", role: "TAG NSW — honeytrap/entrapment. Zero formal response." },
                  { name: "Brett Gibbons", role: "AbleCare — murder threat call, audio-evidenced. Zero police response." },
                  { name: "Graeme Wells", role: "Victoria Legal Aid — denied access to justice. Zero challenge to documentation." },
                  { name: "Jodie McLean (Bongetti)", role: "Sibling — appeared on Today Show reframing persecution as psychiatric illness." },
                ].map(p => (
                  <li key={p.name} className="border-b border-zinc-800/50 pb-2 last:border-0 last:pb-0">
                    <span className="text-white font-bold text-xs">{p.name}</span>
                    <p className="text-zinc-500 text-[10px] mt-0.5">{p.role}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
              <h3 className="text-red-400 font-black text-xs uppercase tracking-wider mb-3">Institutional Opposition — Documented</h3>
              <ul className="space-y-1">
                {[
                  "VCAT · NCAT · VOCAT · Administrative Appeals Tribunal",
                  "Federal Court of Australia · Federal Circuit Court",
                  "Magistrates' Court of Victoria · Court Services Victoria",
                  "Victoria Police · Australian Federal Police · NSW Police",
                  "Law Enforcement Conduct Commission (LECC)",
                  "NDIA / NDIS · NDIS Quality & Safeguards Commission",
                  "Comcare · WorkSafe Victoria · WorkCover",
                  "Australian Taxation Office (ATO)",
                  "ASIC — 350+ fraudulent business registrations in Barran's name",
                  "AFSA · AHPRA · AHRC · Commonwealth Ombudsman",
                  "Department of Social Services · Department of Health",
                  "Department of Human Services · Centrelink",
                  "Attorney-General's Department · Victoria Legal Aid",
                  "Melbourne Health · Eastern Health",
                  "Australian Financial Complaints Authority",
                ].map(a => (
                  <li key={a} className="text-[10px] text-zinc-600 border-b border-zinc-800/30 pb-1 last:border-0">{a}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-zinc-400 leading-relaxed text-sm mb-4">
            The opposition documented here is not the work of individual prejudice or administrative error. The
            sheer volume — 40+ separate agencies, coordinated over 35 years, all producing the same outcome of
            denial, obstruction, and poverty — eliminates coincidence as a statistical explanation. The Master
            Evidence Register (27,085 lines, 2,301 documents) proves that the pattern of institutional response
            predated every individual NDIS provider by years or decades. Sukhi Tear, Phillip Glass, Brett and
            Rachel did not create the apparatus. They entered one where the outcome was already decided.
          </p>

          <Pull>
            You do not deploy a former SAS operative with a PhD in counter-terrorism against someone who doesn't matter. The investment in opposition is the proof of the threat.
          </Pull>

          <p className="text-zinc-400 leading-relaxed text-sm">
            The financial cost of the documented opposition is equally revealing. <span className="text-white font-bold">$32.9 million in suppressed documented entitlements.</span> 350+ fraudulent ASIC business registrations.
            $50,000 in NDIS funds withheld by a single provider. Clinical psychiatric labels applied on
            14 separate occasions — each one documented with the institutional author, the date, and the
            primary-source contradiction. The investment in suppressing one person is the strongest possible
            evidence of what was being suppressed.
          </p>
        </Chapter>

        {/* Chapter 4 */}
        <Chapter number="Chapter 4" title="Zero Formal Rebuttals — What Silence Proves Under International Law" icon={<Scale size={20} />}>
          <p className="text-zinc-300 leading-relaxed mb-5">
            Every named individual in this archive has been publicly identified, with their documented actions
            described in primary-source detail, across 2,304 publicly available documents, for months. The archive
            has been downloaded 410,503 times. It has been submitted to the International Criminal Court. It has
            been submitted to UNHCR Geneva. It has been shared across six continents.
          </p>

          <div className="bg-red-950/20 border border-red-700/30 rounded-xl p-6 mb-6">
            <h3 className="text-red-400 font-black text-sm mb-4 flex items-center gap-2 uppercase tracking-wider">
              <AlertTriangle size={16} /> The Rebuttal Record
            </h3>
            <div className="text-center py-6">
              <div className="text-7xl font-black text-red-500 mb-3">0</div>
              <p className="text-white font-black text-lg">Formal Rebuttals Received</p>
              <p className="text-zinc-500 text-xs mt-2">From any named individual or agency · Across any jurisdiction · In any form</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mt-4">
              {[
                { label: "Legal proceedings initiated against the archive", value: "0" },
                { label: "Defamation claims filed anywhere in the world", value: "0" },
                { label: "Corrections sought from any named party", value: "0" },
              ].map(s => (
                <div key={s.label} className="bg-red-950/30 rounded-xl p-3 text-center">
                  <div className="text-2xl font-black text-red-400">{s.value}</div>
                  <div className="text-[10px] text-zinc-500 mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-zinc-400 leading-relaxed text-sm mb-4">
            Under the evidential principles applied by the International Criminal Court, the UN Human Rights
            Committee, and every common law jurisdiction, silence in the face of documented accusation — when
            the accused has access to the full apparatus of government, legal, and institutional authority and
            chooses not to respond — constitutes tacit admission. The named parties here have had months, in
            some cases years, and in every case the full resources of the Australian government and legal system
            at their disposal. They have not responded.
          </p>

          <p className="text-zinc-400 leading-relaxed text-sm mb-4">
            Tony Ridley's recorded confession has been publicly accessible since the page was published. Bill
            Shorten's name appears in the archived analysis with a direct account of the recording. Sukhi Tear,
            Phillip Glass, Brett Gibbons, and Rachel are each documented with specific financial figures, dates,
            and primary-source references. Graeme Wells is named with the precise denial-of-justice mechanism.
            None has issued a correction, a denial, a legal challenge, or a withdrawal.
          </p>

          <Pull>
            The most powerful form of validation available under international law is the silence of those who could have spoken and chose not to. They had every resource. They said nothing. The record stands.
          </Pull>
        </Chapter>

        {/* Chapter 5 */}
        <Chapter number="Chapter 5" title="845 Bitcoin Records — The Mathematical Infrastructure of Permanence" icon={<Bitcoin size={20} />}>
          <p className="text-zinc-300 leading-relaxed mb-5">
            As of April 16, 2026, every document, evidence exhibit, forensic analysis page, and archive page in
            this record has been individually SHA-256 hashed and submitted to the OpenTimestamps Bitcoin blockchain
            calendar network. The result is 845 permanent, publicly verifiable records anchored into the Bitcoin
            blockchain — the most immutable public ledger that has ever existed.
          </p>

          <div className="grid sm:grid-cols-4 gap-3 mb-6">
            {[
              { v: "180", l: "PDF Documents", c: "text-blue-400" },
              { v: "573", l: "Evidence Exhibits", c: "text-purple-400" },
              { v: "55", l: "Forensic Analysis Pages", c: "text-amber-400" },
              { v: "37", l: "Archive Pages", c: "text-green-400" },
            ].map(s => (
              <div key={s.l} className="bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-3 text-center">
                <div className={`text-2xl font-black ${s.c}`}>{s.v}</div>
                <div className="text-zinc-400 text-[10px] mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <p className="text-zinc-400 leading-relaxed text-sm mb-4">
            What Bitcoin blockchain anchoring means, in precise terms, for the ICC and UNHCR submissions:
            each document now has a mathematical proof of existence that is anchored in a distributed network
            of approximately 15,000 independent nodes worldwide — each one maintaining a full copy of the
            Bitcoin transaction history. To alter or remove a Bitcoin-anchored SHA-256 hash, one would need
            to simultaneously alter more than half of those 15,000 nodes — a computational task that exceeds
            the combined processing power of every computer on Earth.
          </p>

          <p className="text-zinc-400 leading-relaxed text-sm mb-5">
            This is what "permanently imprinted into the mathematical infrastructure of humanity" means
            in practise. The ICC submission is not merely a PDF sent to The Hague. It is a document whose
            existence is mathematically proven, permanently timestamped, and independently verifiable by any
            court, any researcher, or any person on Earth. The chain of evidence is unbreakable because the
            chain is not held by any institution. It is held by mathematics.
          </p>

          <div className="bg-zinc-900/60 border border-amber-700/30 rounded-xl p-5 mb-5">
            <div className="flex items-start gap-3">
              <Lock size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-300 font-black text-sm mb-1">Complete Blockchain Manifest — Public Record</p>
                <p className="text-zinc-400 text-xs leading-relaxed mb-3">
                  The complete public record of all 845 blockchain timestamp entries — including every SHA-256 hash,
                  submission timestamp, OpenTimestamps verification link, and category — is published at
                  barrandodger.com/blockchain-manifest and available as a downloadable JSON file.
                  This manifest itself constitutes a primary-source evidentiary exhibit.
                </p>
                <div className="flex gap-3">
                  <a href="/blockchain-manifest" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors">
                    <Eye size={12} /> View All 845 Records <ExternalLink size={10} />
                  </a>
                  <a href="/api/bitcoin-timestamp/manifest.json" download className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-zinc-300 transition-colors">
                    <Hash size={12} /> Download JSON Manifest
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Chapter>

        {/* Chapter 6 */}
        <Chapter number="Chapter 6" title="The Investment of Opposition — What It Validates" icon={<Eye size={20} />}>
          <p className="text-zinc-300 leading-relaxed mb-5">
            The significance of a person is most clearly revealed not by what they claimed about themselves, but
            by what those who tried to erase them were willing to spend. The documented opposition to Dr. Richard
            William McLean (Barran Dodger) constitutes the most powerful possible independent corroboration of
            his significance — because it was produced by those who sought to deny it.
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                label: "A former SAS operative with a PhD in counter-terrorism was deployed",
                detail: "Tony Ridley — documented, recorded, and publicly identified — was used in a honeytrap entrapment operation. The deployment of this level of intelligence asset against a disability support recipient confirms that the subject of elimination was assessed at state-level threat.",
                color: "border-red-700/40 bg-red-950/10"
              },
              {
                label: "A Lebanese criminal network was contracted for NDA enforcement over an assassination",
                detail: "Houd Meraby and the network around Ben's death — including the forced non-disclosure agreement with secret service involvement — represent organised criminal coordination with institutional backing. This level of resource deployment is not used to silence irrelevant people.",
                color: "border-red-700/40 bg-red-950/10"
              },
              {
                label: "$32.9 million in entitlements were suppressed across 35 years",
                detail: "The documented financial cost of suppressing this record — WorkSafe, Comcare, VOCAT, NDIS, AHRC, and 35 years of systematically denied entitlements — totals $32.9 million. This is not administrative error. The precision required to maintain systematic denial across 40+ agencies for 35 years is itself a form of investment.",
                color: "border-orange-700/40 bg-orange-950/10"
              },
              {
                label: "14 psychiatric labels were weaponised to discredit the testimony",
                detail: "Each psychiatric diagnosis is now a primary-source ICC exhibit — documented with the institution, the clinician, the date, and the forensic contradiction. The systematic use of psychiatric labelling as an instrument of persecution is itself a documented crime under Article 7.",
                color: "border-amber-700/40 bg-amber-950/10"
              },
              {
                label: "350+ fraudulent ASIC registrations were made in Barran's name",
                detail: "The Australian Securities and Investments Commission records show 350+ business registrations made using Dr. McLean's identity without his knowledge or consent. This constitutes identity fraud at scale — documented, primary-source, and uncontested.",
                color: "border-amber-700/40 bg-amber-950/10"
              },
            ].map(item => (
              <div key={item.label} className={`border ${item.color} rounded-xl p-5`}>
                <p className="text-white font-black text-sm mb-2 flex items-start gap-2">
                  <CheckCircle size={14} className="text-amber-400 shrink-0 mt-0.5" />
                  {item.label}
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed pl-5">{item.detail}</p>
              </div>
            ))}
          </div>

          <Pull>
            They needed 40 agencies, one SAS operative, a criminal network, 14 psychiatric labels, $32.9M in suppressed funds, and 35 years. And still the archive exists. That is not defeat. That is the most precise possible confirmation of significance.
          </Pull>
        </Chapter>

        {/* Chapter 7 */}
        <Chapter number="Chapter 7" title="What This Validates — A Formal Assessment" icon={<Shield size={20} />}>
          <p className="text-zinc-300 leading-relaxed mb-6">
            This chapter sets out what the combined body of evidence formally validates. These are not claims.
            They are conclusions drawn from the primary-source record, confirmed by forensic analysis, and
            anchored permanently in the Bitcoin blockchain.
          </p>

          <div className="space-y-3 mb-8">
            {[
              {
                num: "01",
                title: "The persecution was real, systematic, and state-coordinated",
                body: "2,301 documents from 40+ agencies producing the same outcome across 35 years is the operational definition of systematic persecution. The Master Evidence Register proves this predated every individual NDIS provider. The pattern was set before Sukhi Tear, Phillip Glass, Brett, or Rachel ever appeared."
              },
              {
                num: "02",
                title: "The archive is the most comprehensively documented whistleblower record in Australian history",
                body: "63 independent zero-contradiction forensic analyses. 675 propositions tested. 2,301 evidence documents. 845 Bitcoin blockchain records. 410,503 downloads across 2.5 months. There is no comparable Australian whistleblower case — in scope, in documentation, or in distribution."
              },
              {
                num: "03",
                title: "The ICC submission is valid and substantiated",
                body: "Article 7 of the Rome Statute covers persecution as a crime against humanity when directed against a person on political or other grounds by a state or state-like apparatus. The documented facts — 35 years, 40+ agencies, coordinated denial, financial destruction, forced exile, and an assassination-adjacent NDA — meet the threshold. Submission has been made. Receipts exist."
              },
              {
                num: "04",
                title: "The UNHCR asylum application is substantiated",
                body: "Forced exile from one's country of nationality, documented persecution by state institutions, and a credible well-founded fear of further harm constitute the threshold for refugee status under the 1951 Convention. Every element is documented. Every document is blockchain-verified."
              },
              {
                num: "05",
                title: "The silence of named parties confirms the record",
                body: "Under the evidential weight principles recognised by the ICC, UNHCR, and every common law court, the sustained failure of named parties — with full access to legal counsel and governmental authority — to challenge, correct, or rebut the documented record constitutes tacit acknowledgment. The record stands unchallenged. The record is the verdict."
              },
              {
                num: "06",
                title: "The archive has passed the point of suppressibility",
                body: "410,503 downloads across 174 documents, 6 continents, with 845 Bitcoin blockchain records. The archive is distributed across thousands of independent devices, international jurisdictions, institutional servers, and the Bitcoin blockchain itself. There is no mechanism — legal, technical, or political — by which this record can now be suppressed. This is permanent."
              },
            ].map(item => (
              <div key={item.num} className="bg-zinc-900/40 border border-zinc-800/50 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="text-amber-500 font-black text-2xl leading-none shrink-0 mt-0.5">{item.num}</span>
                  <div>
                    <p className="text-white font-black text-sm mb-2">{item.title}</p>
                    <p className="text-zinc-400 text-xs leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Chapter>

        {/* Chapter 8 */}
        <Chapter number="Chapter 8" title="What This Means — A Reflection" icon={<Globe size={20} />}>
          <p className="text-zinc-300 leading-relaxed mb-5">
            On February 1, 2026, the first download event was recorded. On April 16, 2026 — 75 days later —
            the count stands at 410,503. In those 75 days: 63 forensic analyses were completed, each one
            returning zero contradictions. 845 separate hashes were submitted to the Bitcoin blockchain. The
            archive was submitted to the International Criminal Court and to UNHCR Geneva. And not one named
            individual, not one named agency, not one institution with access to the full power of the
            Australian state issued a single formal instrument of challenge.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-5 text-sm">
            What this means is not abstract. It means that a man who was told, repeatedly, systematically,
            and across 35 years, that he was delusional — that no one would believe him, that no one would
            help him, that the system would always win — has produced a record so complete, so documented,
            so independently verified, and so broadly distributed that the system can no longer reach it.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-5 text-sm">
            The 410,503 people who downloaded this archive are not passive recipients. They are witnesses.
            Each download is a person who has encountered the evidence. Each Bitcoin node holding the
            blockchain record is an independent verifier. The ICC submission is not a petition. It is a
            primary-source criminal referral with 845 cryptographically timestamped exhibits. The UNHCR
            application is not a cry for help. It is a documented, blockchain-verified record of state
            persecution meeting every legal threshold.
          </p>

          <Pull>
            They tried to make you disappear. Instead, you became indelible. 410,503 people have the evidence. 845 Bitcoin nodes hold the hashes. The ICC has the file. The silence of the guilty is the loudest confirmation of all.
          </Pull>

          <p className="text-zinc-400 leading-relaxed mb-5 text-sm">
            The forecast is not optimistic speculation. It is a mathematical projection from three months of
            documented, database-verified growth. The archive will reach one million downloads. The ICC
            process will advance. The UNHCR application will be reviewed. And every day that passes without
            a formal rebuttal from any named party further consolidates the record's evidential authority.
          </p>

          <p className="text-zinc-400 leading-relaxed text-sm">
            What is left to say has already been said — in 2,301 evidence documents, 63 forensic analyses,
            845 Bitcoin transactions, and 410,503 downloads. The testimony is not pending.{" "}
            <span className="text-white font-bold">The testimony is complete.</span> The accounting is at The Hague.
          </p>

          <div className="mt-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-700/50 rounded-2xl p-6">
            <div className="grid sm:grid-cols-2 gap-4 text-xs text-zinc-500">
              <div>
                <p className="text-amber-400 font-black text-xs uppercase tracking-widest mb-2">Archive Identity</p>
                <p>Dr. Richard William McLean (Barran Dodger)</p>
                <p>Barran Dodger Legal &amp; Ethical Trust Fund</p>
                <p>ABN 78 833 496 164</p>
                <p>55B Archbold Road, Long Jetty NSW</p>
              </div>
              <div>
                <p className="text-amber-400 font-black text-xs uppercase tracking-wider mb-2">International Submissions</p>
                <p>ICC — The Hague — Article 7, Rome Statute</p>
                <p>UNHCR — Geneva — 1951 Convention Application</p>
                <p>Bitcoin Blockchain — 845 records — OpenTimestamps</p>
                <p>barrandodger.com — publicly accessible</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/blockchain-manifest" className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors">
              <Bitcoin size={13} className="text-amber-400" /> View All 845 Blockchain Records
            </a>
            <a href="/testimony-went-global" className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors">
              <Globe size={13} className="text-blue-400" /> Download Stats — Global Reach
            </a>
            <a href="/urgent-protection-request" className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors">
              <Shield size={13} className="text-red-400" /> SOS — Physical Protection
            </a>
            <a href="/forensic-analysis" className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors">
              <Hash size={13} className="text-purple-400" /> 63 Forensic Analyses
            </a>
          </div>
        </Chapter>

      </main>
      <ArchiveCrossLinks />
      <Footer />
    </div>
  );
}
