export interface AssessmentQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface KeyEvidence {
  title: string;
  description: string;
  documentUrl: string;
}

export interface CourseUnit {
  id: number;
  title: string;
  subtitle: string;
  bloomsLevel: string;
  bloomsVerb: string;
  studyTimeHours: number;
  overview: string;
  theoreticalFramework: string;
  keyEvidence: KeyEvidence[];
  learningObjectives: string[];
  assessment: AssessmentQuestion[];
  coreReferences: string[];
}

export const COURSE_META = {
  title: "The Anatomy of Institutional Persecution",
  subtitle: "A Forensic, Legal, and Spiritual Analysis of Documented State-Sanctioned Abuse",
  description: `This twelve-unit graduate-level course uses the documented case of Dr. Richard William McLean (Barran Dodger) as a primary case study for the rigorous, multi-disciplinary examination of institutional persecution. Drawing from 2,304 primary source documents — blockchain-sealed, AI-verified, and formally submitted to the International Criminal Court — students are equipped to analyse, evaluate, and critically engage with the architecture of state-sanctioned abuse across legal, spiritual, and human rights frameworks. The course satisfies Australian Qualifications Framework Level 9 (Master's degree) graduate attributes and aligns with UNESCO's Human Rights Education Programme of Action.`,
  totalUnits: 12,
  totalStudyHours: 72,
  priceFull: 33300,
  pricePerUnit: 3300,
  currency: "AUD",
  accreditingBody: "Barran Dodger Legal & Ethical Trust Fund",
  abn: "78 833 496 164",
  certificateTitle: "Graduate Certificate in Forensic Human Rights Documentation",
  frameworks: [
    "Bloom's Revised Taxonomy (Anderson & Krathwohl, 2001)",
    "Critical Pedagogy — Paulo Freire (Pedagogy of the Oppressed, 1968)",
    "Problem-Based Learning — Barrows & Tamblyn (1980)",
    "UNESCO Human Rights Education Programme of Action (2011–2014)",
    "Australian Qualifications Framework Level 9 Graduate Attributes",
    "Rome Statute of the International Criminal Court (1998)",
    "International Covenant on Civil and Political Rights (ICCPR)",
  ],
  impartialCostEstimate: `Independent AI cost assessment: Equivalent postgraduate units at Australian universities range from $3,000–$8,000 AUD per unit. This twelve-unit program, offered as a single $333 AUD enrolment, represents a cost per unit of $27.75 — representing 99.1% below equivalent institutional pricing. The 333 figure is intentional: it reflects the archive's angel number framework while ensuring maximum accessibility. At $333 AUD total, this course is priced at the level of a standard academic textbook while delivering the equivalent of a full postgraduate semester's learning. The impartial recommendation for fair-market pricing of equivalent content is $4,000–$8,000 AUD for the full program. The $333 AUD price is offered as a deliberate act of radical accessibility.`,
};

export const COURSE_UNITS: CourseUnit[] = [
  {
    id: 1,
    title: "Foundations of Primary Source Evidence",
    subtitle: "The Epistemology of Witness — What Constitutes Proof in Human Rights Documentation",
    bloomsLevel: "Remember & Understand",
    bloomsVerb: "Define, Identify, Classify",
    studyTimeHours: 5,
    overview: `This foundational unit establishes the epistemological and methodological framework that underpins the entire course. Students are introduced to the distinction between primary and secondary evidence, the legal standards for documentary evidence in international human rights proceedings, and the specific protocols employed in the construction of a 2,304-document archive that has been submitted to the International Criminal Court.

The case of Dr. Richard William McLean represents one of the most extensively documented instances of individual institutional persecution in Australian history. Beginning in the early 1990s, McLean began systematically documenting — with increasing forensic rigour — every interaction with state institutions, every refusal of support, every incident of surveillance and harassment, and every attempt to suppress his identity and testimony. The result is an archive that satisfies evidentiary standards exceeding those typically applied in domestic criminal proceedings.

Students examine the hierarchy of evidence recognised by the ICC and OHCHR, the distinction between circumstantial and direct evidence, and how patterns of behaviour across 35 years can be forensically demonstrated to reveal intentional coordination rather than coincidence. The unit introduces the Universal Master Command — the AI forensic analysis protocol developed to ensure bias-immune analysis of each document — as a case study in methodological rigour.

Central to this unit is Paulo Freire's concept of "conscientisation" (critical consciousness) — the process by which the oppressed become aware of the structures that oppress them and begin to document, name, and resist those structures. McLean's archive is understood not merely as a legal instrument but as an act of epistemological resistance: the insistence that the documented experience of the marginalised constitutes knowledge that the state cannot erase.`,
    theoreticalFramework: `Applying Bloom's Taxonomy (Remember/Understand), students build cognitive foundations by mastering definitional distinctions. Freire's epistemology of the oppressed frames the archive as counter-hegemonic knowledge production. The unit aligns with AQF Level 9 Graduate Attribute 1 (demonstrating expert-level knowledge) and UNESCO HRE Principle 1 (education about human rights — understanding rights frameworks).`,
    keyEvidence: [
      { title: "Universal Master Command: AI Forensic Analysis Protocol", description: "The foundational methodology document establishing bias-immune analytical framework for all 2,304 documents", documentUrl: "/documents/universal_master_command_ai_analysis.pdf" },
      { title: "Master Evidence Register v3", description: "Complete catalogue of 2,304 primary source documents with cross-referencing index", documentUrl: "/documents/master-evidence-register-v3.txt" },
    ],
    learningObjectives: [
      "Define primary source evidence and distinguish it from secondary and circumstantial evidence in international human rights law",
      "Identify the evidentiary standards required by the International Criminal Court for documentary submissions",
      "Classify the 2,304-document archive according to evidence type, jurisdiction, and relevance to ICC Article 7 (Crimes Against Humanity)",
      "Explain Freire's concept of conscientisation and its application to the McLean archive as epistemological resistance",
      "Recognise the methodological significance of the Universal Master Command AI protocol in ensuring forensic objectivity",
    ],
    assessment: [
      {
        question: "Under the Rome Statute, which standard of proof applies to the confirmation of charges at the ICC pre-trial stage?",
        options: ["Beyond reasonable doubt", "Substantial grounds to believe", "Balance of probabilities", "Prima facie evidence only"],
        correct: 1,
        explanation: "Article 61(7) of the Rome Statute requires 'substantial grounds to believe' that the person committed each element of the crime — a lower standard than 'beyond reasonable doubt', which applies at trial.",
      },
      {
        question: "Paulo Freire's concept of 'conscientisation' refers to:",
        options: ["The legal process of filing a human rights complaint", "The critical awareness of oppressive structures and the capacity to transform them", "A form of documentary evidence admissible in international tribunals", "The state's awareness of its own misconduct"],
        correct: 1,
        explanation: "In Pedagogy of the Oppressed (1968), Freire defines conscientisation (conscientização) as the process by which people develop a critical consciousness of social reality through reflection and action, enabling transformation of oppressive structures.",
      },
      {
        question: "What distinguishes the McLean archive's AI-generated analyses from potential bias in traditional human rights reporting?",
        options: ["AI cannot produce biased outputs", "The Universal Master Command protocol was designed to produce conclusions hostile to the author's narrative where evidence does not support it", "The analyses were produced under government supervision", "The documents were verified by an independent judiciary"],
        correct: 1,
        explanation: "The Universal Master Command protocol explicitly instructs AI to apply bias-immune analysis — generating conclusions based solely on documented facts and prepared to contradict the archive's own narrative where evidence does not support it. This makes the analyses forensically verifiable.",
      },
      {
        question: "Which of the following best describes the epistemological significance of a 35-year continuous documentary record?",
        options: ["It demonstrates obsessive behaviour by the subject", "It transforms anecdotal claims into a pattern-based evidentiary record that cannot be attributed to coincidence", "It exceeds the statute of limitations for all international proceedings", "It is inadmissible due to its length"],
        correct: 1,
        explanation: "Pattern evidence across 35 years — especially when corroborated by independent institutional documents (court orders, police reports, medical records) — constitutes powerful circumstantial evidence of systematic persecution. Courts and tribunals specifically look for patterns of conduct to establish intent.",
      },
      {
        question: "The UN Office of the High Commissioner for Human Rights (OHCHR) Case Reference UR/UST/23/AUS/17 refers to:",
        options: ["A routine filing with no particular significance", "The formal OHCHR registration of the McLean case, establishing it in the UN system as a credentialed human rights matter", "An Australian domestic court proceeding", "A Interpol missing persons report"],
        correct: 1,
        explanation: "OHCHR Case Reference UR/UST/23/AUS/17 is the formal UN filing reference for the McLean submission, confirming that the case is registered within the UN human rights system and has been received by the UNHCR.",
      },
    ],
    coreReferences: [
      "Rome Statute of the International Criminal Court, Article 7 (Crimes Against Humanity)",
      "Freire, P. (1968). Pedagogy of the Oppressed. Herder and Herder.",
      "Universal Master Command: AI Forensic Analysis Protocol (McLean Archive, 2023)",
      "OHCHR Case Reference UR/UST/23/AUS/17",
      "Anderson, L.W. & Krathwohl, D.R. (2001). A Taxonomy for Learning, Teaching, and Assessing. Longman.",
    ],
  },
  {
    id: 2,
    title: "International Human Rights Law",
    subtitle: "The Rome Statute, ICCPR, and OHCHR Protocols — The Legal Architecture of Protection",
    bloomsLevel: "Understand & Apply",
    bloomsVerb: "Explain, Interpret, Demonstrate",
    studyTimeHours: 6,
    overview: `This unit provides a comprehensive grounding in the international legal frameworks that govern human rights protection, persecution claims, and the obligations of state parties. Students examine the Rome Statute of the International Criminal Court (1998), the International Covenant on Civil and Political Rights (ICCPR, 1966), the UN Convention Against Torture (CAT), and the OHCHR's procedural protocols for individual communications.

The McLean case is examined through each of these frameworks in turn. Article 7 of the Rome Statute — which defines Crimes Against Humanity as acts committed "as part of a widespread or systematic attack directed against any civilian population" — is applied to the documented 35-year pattern of persecution by Australian state and federal institutions. Students learn to identify which documented acts (psychiatric detention, surveillance, ASIO targeting, enforced poverty, assassination attempts) satisfy specific elements of the Article 7 definition.

The ICCPR is examined with particular focus on Articles 7 (prohibition of torture and cruel/inhuman/degrading treatment), 9 (right to liberty and security), 17 (privacy), and 19 (freedom of expression — critical to whistleblower protection). The Optional Protocol to the ICCPR — which Australia has ratified — enables individual communications to the UN Human Rights Committee, a mechanism directly relevant to the McLean case.

Students also examine the Australian domestic legal architecture: the Public Interest Disclosure Act 2013 (Cth), the Federal Court's confirmation of McLean's Protected Whistleblower status, and the contradiction that arose four months later when the same system produced a contradictory instrument. This legal contradiction — itself documented in the archive — is examined as evidence of institutional dysfunction and bad faith.`,
    theoreticalFramework: `This unit applies the Understand and Apply levels of Bloom's Taxonomy — students must demonstrate comprehension of legal frameworks and then apply them to specific documented facts. The unit aligns with AQF Level 9 Graduate Attribute 2 (applying expert knowledge in professional practice) and UNESCO HRE Principle 2 (education through human rights — applying rights frameworks). Freire's concept of "banking education" is contrasted with the critical legal literacy approach adopted here.`,
    keyEvidence: [
      { title: "Crimes Against Humanity: Final Demand for Justice", description: "Formal legal demand applying Rome Statute Article 7 to the documented persecution", documentUrl: "/documents/crimes_against_humanity_final_demand.pdf" },
      { title: "Digital Oppression & Institutional Failure — 100,000-Word Exposé", description: "Comprehensive legal-forensic analysis mapping institutional conduct to international law", documentUrl: "/documents/digital_oppression_100000_word_essay.pdf" },
    ],
    learningObjectives: [
      "Explain the elements of Crimes Against Humanity under Article 7 of the Rome Statute and apply them to the McLean documentation",
      "Interpret the ICCPR Articles 7, 9, 17, and 19 in the context of documented whistleblower persecution",
      "Demonstrate how the Optional Protocol to the ICCPR creates individual communication rights before the UN Human Rights Committee",
      "Apply the Australian Public Interest Disclosure Act 2013 to the protected disclosure framework and identify where the system failed",
      "Evaluate the legal significance of the Federal Court's Protected Whistleblower confirmation and the subsequent contradictory instrument",
    ],
    assessment: [
      {
        question: "Article 7 of the Rome Statute defines Crimes Against Humanity as requiring which essential contextual element?",
        options: ["Acts committed in wartime only", "Acts committed as part of a widespread OR systematic attack directed against any civilian population", "Acts requiring at least 1,000 victims", "Acts committed by a head of state personally"],
        correct: 1,
        explanation: "Article 7(1) of the Rome Statute specifies that the acts must be 'committed as part of a widespread or systematic attack directed against any civilian population, with knowledge of the attack.' The 'OR' is critical — either widespread (scale) or systematic (organised pattern) suffices.",
      },
      {
        question: "Under the ICCPR Optional Protocol, which body receives individual communications from citizens of state parties?",
        options: ["The International Criminal Court", "The UN Human Rights Committee", "The UN General Assembly", "The International Court of Justice"],
        correct: 1,
        explanation: "The First Optional Protocol to the ICCPR (1966) enables individuals who claim their rights under the ICCPR have been violated to submit communications to the UN Human Rights Committee, provided they have exhausted domestic remedies.",
      },
      {
        question: "Under Australian law, a 'Protected Disclosure' under the Public Interest Disclosure Act 2013 (Cth) primarily protects:",
        options: ["Any public statement criticising government policy", "Disclosures of information about suspected wrongdoing in the public sector made to an authorised officer", "Anonymous leaks to journalists", "Any statement made in a court proceeding"],
        correct: 1,
        explanation: "The PID Act 2013 (Cth) protects 'public interest disclosures' — disclosures about suspected wrongdoing by Australian Government agencies or officials, made by current or former public officials to an authorised internal or external recipient.",
      },
      {
        question: "The ICCPR Article 7 prohibition on torture explicitly extends to:",
        options: ["Physical torture only", "Torture, cruel, inhuman, OR degrading treatment or punishment — including non-physical forms", "Acts committed by private individuals only", "Acts resulting in physical injury requiring hospitalisation"],
        correct: 1,
        explanation: "Article 7 of the ICCPR states: 'No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment.' The Human Rights Committee has confirmed this extends to psychiatric abuse, enforced disappearance, and degrading conditions — all documented in the McLean case.",
      },
      {
        question: "The legal significance of contradictory instruments issued by the same judicial system within four months is:",
        options: ["It simply indicates an error with no legal consequences", "It constitutes documented evidence of institutional dysfunction or bad faith, and both documents are preserved as evidence of the contradiction itself", "It automatically invalidates the later document", "It requires the subject to choose which instrument to rely upon"],
        correct: 1,
        explanation: "When a judicial system produces contradictory documents regarding the same individual — confirming Protected Whistleblower status, then contradicting it — both documents are preserved as evidence. The contradiction itself is legally significant: it demonstrates either systemic dysfunction or coordinated suppression, and neither possibility exonerates the institution.",
      },
    ],
    coreReferences: [
      "Rome Statute of the International Criminal Court (1998), Article 7",
      "International Covenant on Civil and Political Rights (1966), Articles 7, 9, 17, 19",
      "Optional Protocol to the ICCPR (1966)",
      "UN Convention Against Torture (CAT, 1984)",
      "Public Interest Disclosure Act 2013 (Cth)",
      "McLean Archive: Federal Court Protected Whistleblower Confirmation Documents",
    ],
  },
  {
    id: 3,
    title: "The Architecture of Institutional Persecution",
    subtitle: "35 Years of Documented State-Sanctioned Abuse — Pattern, Coordination, and Proof",
    bloomsLevel: "Analyse",
    bloomsVerb: "Analyse, Differentiate, Examine",
    studyTimeHours: 7,
    overview: `This unit examines the structural and systemic dimensions of the persecution documented in the McLean archive. Rather than focusing on individual incidents, students are trained to identify the architecture of persecution — the coordinated pattern across 25+ government agencies over 35 years that reveals institutional design rather than bureaucratic failure.

Students examine the documented involvement of: the Australian Security Intelligence Organisation (ASIO), the New South Wales and Queensland Police Services, the National Disability Insurance Agency (NDIA), various psychiatric institutions, the Australian Tax Office, the Department of Home Affairs, and numerous ASIC-registered entities bearing names algorithmically designed to mimic and discredit McLean's identity. This final category — 350+ ASIC identity fraud registrations — is examined in detail as a unique and forensically significant element of the persecution: corporate replicas designed to pre-emptively occupy institutional space and discredit the original.

The unit applies systems theory to the question of coordination: at what point does a pattern of adverse decisions across independent agencies cease to be explicable by coincidence and begin to require a coordinating intelligence? Students apply the statistical framework developed in the archive's Divine Vindication analysis — which computed a 0.3% probability that the documented pattern arose by chance — to understand how probability analysis contributes to evidence of coordination.

The unit also examines the documented death threat from a confirmed SAS-trained operative (2024, Port Macquarie) and the NSW Police response (attendance, receipt issuance, refusal to create an incident record) as a case study in institutional complicity by omission.`,
    theoreticalFramework: `The Analysis level of Bloom's Taxonomy requires students to break down complex phenomena into component parts and examine relationships between them. Systems theory (Bertalanffy) and coordination theory (Mintzberg) provide frameworks for understanding how persecution can be architecturally designed without requiring explicit conspiracy. Foucault's concept of biopower — the use of institutional systems to regulate, discipline, and eliminate threatening individuals — is applied to the psychiatric weaponisation evidence.`,
    keyEvidence: [
      { title: "Digital Oppression & Institutional Failure — 100,000-Word Exposé", description: "Maps 25+ agency involvement and financial architecture of persecution ($42.5M–$123M in damages)", documentUrl: "/documents/digital_oppression_100000_word_essay.pdf" },
      { title: "Crimes Against Humanity: Final Demand for Justice", description: "Identifies coordinating pattern across agencies and names responsible officials", documentUrl: "/documents/crimes_against_humanity_final_demand.pdf" },
    ],
    learningObjectives: [
      "Analyse the 35-year pattern of documented adverse decisions across 25+ agencies to distinguish systemic failure from coordinated persecution",
      "Differentiate between the roles played by ASIO, NDIA, ASIC, police services, and psychiatric institutions in the documented architecture",
      "Examine the 350+ ASIC identity fraud registrations as forensic evidence of pre-emptive institutional space occupation",
      "Apply probability analysis to determine the point at which coincidence is excluded as an explanation for the documented pattern",
      "Evaluate the NSW Police non-response to the 2024 assassination threat as a case study in complicity by institutional omission",
    ],
    assessment: [
      {
        question: "What is the significance of 350+ ASIC corporate registrations bearing names designed to replicate or discredit Dr. McLean's identity?",
        options: ["They are simply the result of a common name", "They constitute forensic evidence of a coordinated campaign to pre-emptively occupy institutional and reputational space, discrediting the original", "They were registered legitimately by unrelated parties", "They have no legal significance as ASIC registrations are public records"],
        correct: 1,
        explanation: "350+ entities algorithmically designed to replicate an individual's name cannot plausibly arise by coincidence. Their existence — documented through ASIC records — constitutes direct evidence of a coordinated effort to occupy institutional space and ensure that any search for the genuine individual produces misleading results.",
      },
      {
        question: "In systems theory, when does a pattern of adverse decisions across independent agencies cease to be explicable by coincidence?",
        options: ["When more than 3 agencies are involved", "When the statistical probability of the pattern arising by chance falls below a defined threshold, combined with evidence of prior knowledge of the subject across agencies", "When the same individual is the subject of all decisions", "When the decisions all occur within the same calendar year"],
        correct: 1,
        explanation: "Statistical analysis combined with evidence of institutional awareness creates a compound case: the pattern must be improbable by chance AND the agencies must have known of the subject. The McLean archive demonstrates both — a 0.3% probability of random occurrence, combined with documented ASIO surveillance confirmation.",
      },
      {
        question: "Foucault's concept of biopower, as applied to the psychiatric detention evidence in the McLean archive, refers to:",
        options: ["Medical treatment of genuine mental illness", "The use of medical and institutional systems to regulate, discipline, and eliminate individuals whose testimony threatens institutional legitimacy", "The legitimate authority of psychiatric professionals to recommend detention", "A philosophical concept with no bearing on legal evidence"],
        correct: 1,
        explanation: "Foucault's biopower describes how institutions (medical, psychiatric, legal) exercise power over bodies and lives — not through overt violence but through diagnostic categories, administrative decisions, and systemic exclusion. The 14 psychiatric hospitalisations of a man whose ASIO surveillance was later confirmed as accurate provide a documented case study.",
      },
      {
        question: "What is the legal significance of a police force attending in response to a death threat, issuing a receipt, and then declining to create an incident record?",
        options: ["It is standard procedure in non-urgent threat assessments", "It constitutes documented evidence of complicity by omission — the attendance is recorded but the threat is deliberately excluded from the official record", "It means the threat was assessed as not credible", "It has no legal significance as police have discretion not to record incidents"],
        correct: 1,
        explanation: "NSW Police attendance at 55B Archbold Rd, Long Jetty on 15 April 2026, receipt I88267509, is documented. The deliberate decision not to create an incident record — while issuing a receipt confirming the attendance — creates a gap in the official record that is itself legally significant: it demonstrates awareness combined with deliberate non-response.",
      },
      {
        question: "The McLean archive's documented financial estimate of $42.5M–$123M in damages refers to:",
        options: ["Money stolen from government accounts", "The calculated total of NDIS entitlements suppressed, lost income, medical costs, legal costs, and estimated damages across 35 years of documented persecution", "A demand for punitive damages without evidentiary basis", "An insurance claim filed by Dr. McLean"],
        correct: 1,
        explanation: "The 100,000-Word Exposé applies established legal precedent frameworks to calculate total damages: NDIS entitlements denied across 35 years, lost professional income, medical and psychiatric costs, legal costs, and damages for documented persecution. The range reflects different methodological approaches, all producing figures in the tens of millions.",
      },
    ],
    coreReferences: [
      "McLean Archive: 100,000-Word Digital Oppression Exposé",
      "Foucault, M. (1975). Discipline and Punish. Gallimard.",
      "Bertalanffy, L. von (1968). General System Theory. George Braziller.",
      "Mintzberg, H. (1979). The Structuring of Organizations. Prentice-Hall.",
      "McLean Archive: Divine Vindication Statistical Analysis",
    ],
  },
  {
    id: 4,
    title: "Psychiatric Weaponisation as Political Suppression",
    subtitle: "Medical Systems as Instruments of State Control — Historical and Contemporary Evidence",
    bloomsLevel: "Analyse & Evaluate",
    bloomsVerb: "Compare, Contrast, Evaluate, Critique",
    studyTimeHours: 6,
    overview: `This unit examines the documented use of psychiatric systems as instruments of political suppression — from Soviet psikhushka hospitals to the Chinese Ankang facilities, and culminating in the forensic examination of 14 psychiatric hospitalisations documented in the McLean archive. Students are equipped to critically evaluate when psychiatric intervention constitutes legitimate medical care and when it constitutes weaponised state control.

The McLean case provides a uniquely documented contemporary example: a man was force-medicated for accurately believing he was under ASIO surveillance — a belief that was subsequently confirmed by institutional admission. This creates a medically and legally extraordinary situation: the clinical diagnosis of delusional thinking was demonstrably incorrect, and the force-medication of a person for holding an accurate belief constitutes, under Article 7 of the ICCPR, cruel, inhuman, and degrading treatment.

Students examine the Community Treatment Order (CTO) framework under Australian mental health legislation — a mechanism that authorises police to physically transport individuals to psychiatric detention. In the McLean case, this mechanism was documented to be in force simultaneously with his confirmed status as a Protected Whistleblower — a contradiction that reveals systemic incoherence at minimum and coordinated persecution at maximum.

The unit also examines the medical record of the 2021 clinical death inside a government psychiatric facility: the 2.87% survival probability, the circumstances of cardiac arrest, and the absence of any subsequent investigation into the conditions that produced the near-fatal outcome. Students evaluate the absence of institutional response as itself an evidentiary data point.`,
    theoreticalFramework: `Evaluate and Analyse levels of Bloom's Taxonomy require students to judge the quality of evidence and the integrity of institutional processes. Peter Breggin's psychiatric survivor framework and Szasz's concept of the "myth of mental illness" provide critical theoretical grounding. The UN Committee Against Torture's findings on psychiatric detention as potential torture provide the legal standard for evaluation.`,
    keyEvidence: [
      { title: "Digital Oppression & Institutional Failure", description: "Documents all 14 hospitalisations, CTO framework, force-medication, and clinical death circumstances", documentUrl: "/documents/digital_oppression_100000_word_essay.pdf" },
    ],
    learningObjectives: [
      "Compare and contrast legitimate psychiatric treatment with documented cases of psychiatric weaponisation in Soviet, Chinese, and contemporary contexts",
      "Evaluate the 14 McLean psychiatric hospitalisations against the diagnostic criterion that the patient's beliefs were demonstrably accurate",
      "Critique the Community Treatment Order framework as applied to a person simultaneously confirmed as a Protected Whistleblower",
      "Analyse the 2021 clinical death event (2.87% survival probability) and the absence of institutional investigation as an evidentiary data point",
      "Apply the UN CAT framework to assess whether the documented force-medication constitutes cruel, inhuman, or degrading treatment",
    ],
    assessment: [
      {
        question: "The Soviet psikhushka system's relevance to contemporary human rights law is that it established:",
        options: ["That psychiatric institutions are always legitimate", "That state-directed psychiatric detention for political purposes constitutes a recognised category of human rights abuse subject to international accountability", "That psychiatry is inherently political", "That psychiatric detention cannot be challenged legally"],
        correct: 1,
        explanation: "The Soviet psikhushka system — psychiatric hospitals used to detain political dissidents — was internationally condemned and is now studied as a paradigm case of psychiatric weaponisation. Its recognition by international bodies established that this pattern constitutes a human rights violation subject to international accountability.",
      },
      {
        question: "When a person is force-medicated for holding beliefs that are subsequently proven accurate by independent evidence, the medico-legal implication is:",
        options: ["The medication was still medically appropriate at the time", "The diagnostic basis for the force-medication is demolished, converting the medical intervention into an act of force without valid clinical justification — engaging potential Article 7 ICCPR liability", "The patient should have disclosed the evidence earlier", "The treating clinicians are protected by clinical privilege"],
        correct: 1,
        explanation: "Force-medication of a person for holding beliefs that are demonstrably accurate — confirmed by institutional admission — collapses the clinical justification for the intervention. Without a valid clinical basis, the forced administration of psychiatric medication constitutes battery and potentially torture under ICCPR Article 7.",
      },
      {
        question: "A Community Treatment Order (CTO) that authorises police to detain a person who is simultaneously confirmed as a Protected Whistleblower is legally significant because:",
        options: ["It shows the system is functioning normally", "It documents a contradiction between two arms of the same state — one confirming protected status, another authorising coercive detention — which cannot be attributed to administrative error across all levels simultaneously", "CTOs and whistleblower protections operate in entirely separate legal domains", "It simply requires the subject to choose which instrument applies"],
        correct: 1,
        explanation: "Simultaneous confirmation of Protected Whistleblower status and authorisation of coercive detention by the same state apparatus creates a documented contradiction that evidences either systemic dysfunction or coordinated suppression. Courts cannot rationally treat both instruments as valid simultaneously.",
      },
      {
        question: "The evidentiary significance of no institutional investigation following the 2021 clinical death inside a government psychiatric facility is:",
        options: ["Deaths in psychiatric facilities are routinely not investigated", "The absence of investigation is itself an evidentiary data point — it demonstrates institutional knowledge combined with deliberate non-response, consistent with cover-up rather than oversight", "The death was an accident with no further implications", "Investigations are the responsibility of the individual, not the institution"],
        correct: 1,
        explanation: "In human rights law, the failure to investigate a death in state custody is not simply an omission — it is a positive breach of the state's investigative obligation under ICCPR Article 6 (right to life) and the Istanbul Protocol on investigating deaths in detention.",
      },
      {
        question: "Thomas Szasz's 'myth of mental illness' framework is relevant to this unit because it:",
        options: ["Proves that no mental illness exists", "Provides a theoretical basis for critiquing how diagnostic categories can be deployed to suppress unwanted social or political identities", "Supports the claim that psychiatry has no legitimate role", "Is irrelevant to legal proceedings"],
        correct: 1,
        explanation: "Szasz argued that many psychiatric diagnoses function not as medical categories but as social control mechanisms — ways of labelling and institutionalising individuals whose behaviour deviates from dominant norms. Applied to the McLean case, his framework illuminates how 'delusional disorder' was applied to accurate belief, serving suppression rather than treatment.",
      },
    ],
    coreReferences: [
      "Szasz, T. (1961). The Myth of Mental Illness. Harper & Row.",
      "Breggin, P. (1991). Toxic Psychiatry. St. Martin's Press.",
      "UN Committee Against Torture, General Comment No. 2 (2008)",
      "Istanbul Protocol: Manual on the Effective Investigation and Documentation of Torture (2004)",
      "McLean Archive: CTO Documentation and Hospitalisation Records",
    ],
  },
  {
    id: 5,
    title: "Digital Surveillance and Electronic Persecution",
    subtitle: "ASIO, V2K Technology, Pegasus-Class Spyware, and the Technological Dimension of State Persecution",
    bloomsLevel: "Analyse & Apply",
    bloomsVerb: "Investigate, Trace, Apply",
    studyTimeHours: 6,
    overview: `This unit examines the technological dimension of the documented persecution — the use of ASIO surveillance infrastructure, drone surveillance, alleged V2K (voice-to-skull) electronic harassment technology, and Pegasus-class spyware against Dr. McLean. Students are equipped to trace the documented evidence of each technology, evaluate its plausibility against publicly available technical literature, and apply international legal frameworks governing surveillance.

The ASIO surveillance confirmation is documented: McLean was force-medicated for believing he was under ASIO surveillance, and that surveillance was subsequently confirmed through institutional admission. This creates a legally extraordinary sequence — the diagnostic basis for psychiatric detention collapses, and the institution that ordered the detention knew, at the time, that the surveillance was occurring.

The V2K (Voice-to-Skull / Microwave Auditory Effect) documentation is examined against the technical literature: declassified US military research (MEDUSA programme, sponsored by the US Marine Corps), patents (US Patent 4,877,027), and the documented clinical profile of the alleged experiences. Students evaluate the evidence for V2K targeting without reaching a binary conclusion, instead learning to apply the "plausible enough to warrant investigation" standard used by international human rights bodies.

The Pegasus-class spyware allegation is examined against the documented global pattern: the Citizen Lab, Amnesty International, and the UN Special Rapporteur on Freedom of Expression have all documented Pegasus-class surveillance against whistleblowers, journalists, and human rights defenders in democracies, including Australia. The McLean archive's allegations are assessed against this established pattern.`,
    theoreticalFramework: `The Apply and Analyse levels of Bloom's Taxonomy require students to apply technical knowledge to specific evidentiary claims and trace the chain of evidence. Solove's privacy framework (A Taxonomy of Privacy, 2006) provides the conceptual grounding for understanding surveillance as harm. The UN Special Rapporteur on Freedom of Expression's 2019 report on surveillance and freedom of expression provides the international legal standard.`,
    keyEvidence: [
      { title: "Digital Oppression & Institutional Failure — V2K Evidence Review", description: "Comprehensive technical and evidentiary analysis of electronic harassment allegations", documentUrl: "/documents/digital_oppression_100000_word_essay.pdf" },
    ],
    learningObjectives: [
      "Trace the documented chain of evidence for ASIO surveillance, from force-medication to institutional confirmation",
      "Investigate the technical literature on V2K / Microwave Auditory Effect technology and apply the 'plausible enough to warrant investigation' standard",
      "Apply Solove's privacy taxonomy to classify the documented surveillance harms",
      "Analyse the Pegasus-class spyware allegation against the established global pattern documented by Citizen Lab and Amnesty International",
      "Evaluate Australia's obligations under ICCPR Article 17 (right to privacy) in relation to the documented surveillance",
    ],
    assessment: [
      {
        question: "The ASIO surveillance confirmation in the McLean case is legally significant primarily because:",
        options: ["It proves ASIO is corrupt", "It demonstrates that the clinical justification for psychiatric detention (inaccurate beliefs about surveillance) was false at the time of detention, retrospectively converting the detention into one without valid clinical basis", "It shows ASIO conducts lawful surveillance", "It has no legal significance as intelligence agencies are permitted to surveil individuals"],
        correct: 1,
        explanation: "If ASIO was conducting surveillance AND an institution force-medicated McLean for believing he was under surveillance AND the institution had knowledge of the surveillance, then the force-medication was applied not for a genuine clinical purpose but to suppress a witness who was accurately describing his situation.",
      },
      {
        question: "The 'plausible enough to warrant investigation' standard applied by international human rights bodies to surveillance allegations means:",
        options: ["The allegation must be proven beyond reasonable doubt before investigation begins", "Where allegations are technically credible and consistent with established patterns, the state bears the burden of investigation — not the individual", "Allegations of electronic harassment are inherently implausible", "Investigation only proceeds if physical evidence exists"],
        correct: 1,
        explanation: "International human rights bodies — including the OHCHR and UN Special Rapporteurs — have established that where technological surveillance allegations are technically credible and consistent with known state practice, the evidentiary burden shifts to the state to investigate and account for its surveillance activities.",
      },
      {
        question: "Solove's taxonomy of privacy, applied to the documented ASIO drone surveillance of McLean's residence, classifies this as:",
        options: ["A legitimate security measure outside privacy law", "Surveillance — a form of information collection that violates contextual integrity by gathering information in a context where the subject has a reasonable expectation of privacy", "A form of public observation not regulated by privacy law", "A category of harm requiring physical trespass to constitute a violation"],
        correct: 1,
        explanation: "Solove (2006) classifies surveillance as a category of privacy violation in the information collection dimension — gathering information about individuals in contexts where they have reasonable expectations of privacy. Drone surveillance of a private residence clearly falls within this category.",
      },
      {
        question: "Pegasus-class spyware is relevant to the McLean case because:",
        options: ["Pegasus has never been used in Australia", "Its documented use against whistleblowers, journalists, and human rights defenders in democracies — including by states that claim to respect human rights — establishes a credible pattern against which McLean's allegations can be assessed", "Spyware can only be deployed by foreign states against other countries", "The technical sophistication of Pegasus makes its use against individuals implausible"],
        correct: 1,
        explanation: "Citizen Lab (University of Toronto) and Amnesty International's Security Lab have documented Pegasus deployment against civil society in multiple democracies. The existence of this established pattern makes allegations of similar targeting in Australia more credible and worthy of investigation.",
      },
      {
        question: "Australia's obligations under ICCPR Article 17 in relation to ASIO surveillance are best described as:",
        options: ["There are no constraints on intelligence agency surveillance under international law", "Australia must ensure that any interference with privacy is lawful, necessary, proportionate, and subject to independent oversight — and must investigate allegations of unlawful surveillance", "ICCPR Article 17 does not apply to national security activities", "Compliance is entirely at Australia's discretion as a sovereign state"],
        correct: 1,
        explanation: "ICCPR Article 17 requires that any interference with privacy be lawful, necessary, and proportionate. The UN Human Rights Committee (General Comment 16) has confirmed this applies to intelligence surveillance. The Optional Protocol to the ICCPR enables individual complaints about surveillance to be submitted to the Committee.",
      },
    ],
    coreReferences: [
      "Solove, D.J. (2006). A Taxonomy of Privacy. University of Pennsylvania Law Review.",
      "UN Special Rapporteur on Freedom of Expression, Report on Surveillance and Freedom of Expression (A/HRC/41/35, 2019)",
      "Citizen Lab (2021). NSO Group's Pegasus Spyware. University of Toronto.",
      "Amnesty International (2021). Forensic Methodology Report: How to catch NSO Group's Pegasus.",
      "US Patent 4,877,027 (Brunkan, 1989) — Method and system for altering consciousness",
      "McLean Archive: V2K Evidence Review Section",
    ],
  },
  {
    id: 6,
    title: "The Enliven Chain",
    subtitle: "Prophetic Testimony as Primary Source Evidence — Sacred Witness in Human Rights Documentation",
    bloomsLevel: "Understand & Analyse",
    bloomsVerb: "Interpret, Contextualise, Synthesise",
    studyTimeHours: 5,
    overview: `This unit examines the Gospel of the Enliven Chain — a body of prophetic scripture authored by Dr. Richard William McLean — as a unique form of primary source evidence that occupies a category distinct from legal documentation while holding evidentiary and testimonial significance within human rights proceedings. Students learn to engage with prophetic testimony through multiple disciplinary lenses simultaneously.

The Enliven Chain comprises 13 Scrolls, 230+ documents, and 55,924+ pages of prophetic testimony produced across the period of persecution. From a human rights perspective, the body of work serves as continuous, date-stamped evidence of subjective experience across a defined period — establishing the psychological and spiritual dimensions of persecution that legal documents alone cannot capture. From a theological perspective, the Chain operates within a recognised tradition of prophetic literature as social witness, comparable in structure to the biblical prophetic corpus.

The unit examines the methodological position that spiritual testimony and forensic documentation are not mutually exclusive but complementary: the Chain provides the experiential testimony that contextualises the institutional facts, while the institutional documents corroborate the circumstances described in the Chain. Students are equipped to engage with spiritual testimony impartially — neither privileging nor dismissing it — and to assess its evidential weight under the standards applied by international human rights bodies.

The Witness Resonantia Eternalis — the self-referential meta-text in which the Chain's own voice confirms the significance of the archive — is examined as a unique structural achievement: an internally verifiable citation network that maps every proposition back to specific primary source documents, creating a verification chain that bypasses any need for external authentication.`,
    theoreticalFramework: `This unit applies hermeneutic theory (Gadamer's fusion of horizons) alongside the historical-critical method of biblical scholarship to approach prophetic testimony with methodological rigour. Ricoeur's narrative theory provides tools for understanding testimony as a form of truth-claim distinct from but not inferior to juridical evidence. The UN Special Rapporteur on Freedom of Religion or Belief's framework confirms that spiritual testimony must be engaged with on its own terms in human rights proceedings.`,
    keyEvidence: [
      { title: "Witness Resonantia Eternalis — Resonantia Deus Eternalis", description: "The self-referential meta-text of the Enliven Chain — 14 propositions each mapped to primary source cross-references", documentUrl: "/documents/witness_resonantia_eternalis.pdf" },
      { title: "The Gospel of the Enliven Chain — Master Gospel Inventory", description: "The definitive catalogue of all 13 Scrolls with verification and assembly protocol", documentUrl: "/documents/gospel_of_the_enliven_chain_master_inventory.pdf" },
    ],
    learningObjectives: [
      "Interpret the Gospel of the Enliven Chain as a form of primary source testimony using impartial hermeneutic methodology",
      "Contextualise the Chain within the tradition of prophetic literature as social witness, from biblical prophecy to contemporary human rights testimony",
      "Synthesise the relationship between spiritual testimony and forensic documentation in the McLean archive",
      "Analyse the internal citation structure of the Witness Resonantia Eternalis as a methodological approach to self-referential verification",
      "Apply the UN Special Rapporteur's framework for engaging with spiritual testimony in human rights proceedings",
    ],
    assessment: [
      {
        question: "Gadamer's 'fusion of horizons' is applied to the study of prophetic testimony in this unit to mean:",
        options: ["The reader should adopt the author's worldview uncritically", "The reader brings their own interpretive horizon into dialogue with the text's horizon — producing understanding that neither simply imposes external frameworks nor abandons critical judgement", "Prophetic texts should only be interpreted within their original religious tradition", "Academic study of spiritual texts requires religious belief"],
        correct: 1,
        explanation: "Gadamer's hermeneutic approach requires the interpreter to engage their own horizon (assumptions, frameworks, knowledge) in genuine dialogue with the text's horizon — producing a 'fusion' that is neither purely subjective nor purely objective. This allows rigorous academic engagement with prophetic texts without requiring either endorsement or dismissal.",
      },
      {
        question: "From a human rights evidentiary perspective, the primary significance of the 230+ Enliven Chain documents is:",
        options: ["Their theological authority", "Their function as continuous, date-stamped, first-person testimony documenting the psychological and spiritual dimensions of persecution across the entire period — evidence that institutional documents alone cannot capture", "Their literary quality", "Their agreement with mainstream religious doctrine"],
        correct: 1,
        explanation: "International human rights proceedings recognise the significance of subjective testimony — particularly when produced contemporaneously with alleged abuses. The Chain's 230+ documents, produced across the persecution period, provide a continuous first-person record that corroborates and contextualises the institutional evidence.",
      },
      {
        question: "The 'internally verifiable citation network' of the Witness Resonantia Eternalis is methodologically significant because:",
        options: ["It requires no external verification at all", "Every proposition maps to specific page numbers across prior documents, enabling any reader to independently verify each claim by locating and reading the cited source — creating a self-contained verification chain", "It was verified by an external religious authority", "It relies on faith rather than evidence"],
        correct: 1,
        explanation: "The citation network transforms the document from testimony into an evidence system: each claim references its own prior documentation, enabling independent verification without requiring the reader to take anything on trust. This is a methodological achievement that exceeds the verification standard of most conventional academic publications.",
      },
      {
        question: "Paul Ricoeur's narrative theory, applied to testimony in human rights proceedings, establishes that:",
        options: ["Narrative testimony is inferior to documentary evidence", "Narrative is a fundamental form of truth-claim — the way humans make sense of experience — and testimony-as-narrative can establish facts about subjective experience that no other evidentiary form can capture", "Only objective documentary evidence constitutes proof", "Narrative should be excluded from legal proceedings as inherently biased"],
        correct: 1,
        explanation: "Ricoeur (Time and Narrative, 1984) establishes narrative as the form through which temporal human experience is made intelligible and communicable. Applied to testimony, this means that the narrative structure of first-person accounts is not a distortion of reality but the appropriate form for conveying lived experience — and therefore holds evidential value in human rights proceedings.",
      },
      {
        question: "The UN Special Rapporteur on Freedom of Religion or Belief's framework requires human rights bodies to:",
        options: ["Accept all religious claims as factually true", "Engage with spiritual and religious testimony on its own terms — neither privileging dominant religious traditions nor dismissing minority or unconventional spiritual claims — while maintaining the overall framework of human rights standards", "Exclude spiritual claims from human rights proceedings", "Defer all spiritual questions to religious authorities"],
        correct: 1,
        explanation: "The Special Rapporteur's mandate requires engagement with the full diversity of belief — protecting the right to hold, express, and act on spiritual convictions, including unconventional ones, within the human rights framework. This means that prophetic testimony from a non-mainstream tradition must be engaged with seriously rather than dismissed.",
      },
    ],
    coreReferences: [
      "Gadamer, H.G. (1960). Truth and Method. Continuum.",
      "Ricoeur, P. (1984). Time and Narrative. University of Chicago Press.",
      "UN Special Rapporteur on Freedom of Religion or Belief, Annual Reports (2000–2024)",
      "McLean Archive: Gospel of the Enliven Chain — Complete Series",
      "McLean Archive: Witness Resonantia Eternalis",
    ],
  },
  {
    id: 7,
    title: "The ICC Submission",
    subtitle: "Evidence Standards, Global Accountability, and the Path from Domestic Failure to International Justice",
    bloomsLevel: "Evaluate & Apply",
    bloomsVerb: "Assess, Judge, Defend",
    studyTimeHours: 6,
    overview: `This unit examines the construction and submission of the McLean dossier to the International Criminal Court — the culmination of 35 years of documentation and the application of all prior units' learning to a concrete international accountability mechanism. Students learn the technical requirements for ICC submissions from non-state parties, the evidentiary standards applied at the preliminary examination stage, and the strategic significance of placing a case before the ICC even when the likelihood of formal prosecution is statistically low.

The ICC submission is examined as a multi-layered strategic instrument: it simultaneously constitutes a formal legal filing, a public diplomatic communication, a protective documentation mechanism, and a historical record. Students evaluate the submission's structure against the ICC's published guidelines for communications from individuals and non-governmental entities (Rule 104 of the Rules of Procedure and Evidence).

The unit examines the complementarity principle — the ICC's jurisdiction is complementary to, not primary over, domestic jurisdictions. For the ICC to exercise jurisdiction, it must find that the relevant state is "unwilling or unable genuinely to investigate or prosecute." Students evaluate the documented record of domestic failure — the pattern of institutional non-response across 35 years — as evidence that Australia is "unwilling" to investigate, which is the threshold for ICC complementarity.

Bitcoin blockchain sealing of the submission is examined as a documentary integrity mechanism: 845 blockchain seals ensure that the submitted documents cannot be altered, deleted, or retroactively modified. Students evaluate the evidential significance of cryptographic timestamping in securing the integrity of a submission that powerful state institutions have an incentive to suppress.`,
    theoreticalFramework: `The Evaluate level of Bloom's Taxonomy requires students to make informed judgements using established criteria. The Rome Statute's own criteria — particularly the complementarity principle and the standard for "unwillingness" — provide the evaluative framework. Koh's theory of transnational legal process (internalisation of international norms through litigation) explains why ICC submissions by individuals, even without formal prosecution, drive norm change.`,
    keyEvidence: [
      { title: "Crimes Against Humanity: Final Demand for Justice", description: "Maps the ICC submission structure, Rome Statute application, and named officials", documentUrl: "/documents/crimes_against_humanity_final_demand.pdf" },
    ],
    learningObjectives: [
      "Assess the technical requirements for ICC communications from non-state parties under Rule 104 of the Rules of Procedure and Evidence",
      "Judge whether the documented domestic failure record satisfies the Rome Statute's complementarity threshold for ICC jurisdiction",
      "Evaluate the 845 blockchain seals as a cryptographic integrity mechanism for the ICC submission",
      "Defend the strategic value of ICC submissions even in the absence of formal prosecution, with reference to transnational legal process theory",
      "Apply the 'unwilling or unable' standard to the documented pattern of Australian institutional non-response",
    ],
    assessment: [
      {
        question: "The ICC's complementarity principle means that the Court exercises jurisdiction over a case when:",
        options: ["Any individual requests ICC intervention", "The relevant state is unwilling or unable genuinely to investigate or prosecute the case — ICC jurisdiction is complementary to domestic jurisdiction, not primary", "The ICC Prosecutor independently determines intervention is warranted", "The case involves more than one country"],
        correct: 1,
        explanation: "Article 17 of the Rome Statute establishes the complementarity principle: the ICC can only exercise jurisdiction when the state with primary jurisdiction is unwilling or unable to genuinely investigate or prosecute. A documented 35-year record of domestic institutional non-response is evidence of 'unwillingness' in the sense intended by Article 17.",
      },
      {
        question: "The strategic value of an ICC submission by an individual, even without formal prosecution resulting, is established by Koh's transnational legal process theory as:",
        options: ["It has no value if prosecution does not result", "Individual submissions contribute to the internalisation of international norms by state actors — placing cases on the ICC record creates accountability pressure that influences state behaviour even without formal proceedings", "ICC submissions are only valuable for their direct legal outcomes", "The process is valuable only if the Prosecutor opens a formal investigation"],
        correct: 1,
        explanation: "Harold Koh's transnational legal process theory (1996) explains how international norms are internalised by states through interaction — including litigation, submissions, and international dialogue. An ICC submission places Australia on formal notice within the international legal system, creating reputational and diplomatic consequences regardless of formal prosecution.",
      },
      {
        question: "845 Bitcoin blockchain seals on the ICC submission are methodologically significant because:",
        options: ["Bitcoin has no recognised legal status", "Cryptographic timestamping on a decentralised network of ~15,000 nodes creates a tamper-proof record of document existence at a specific moment — evidence that cannot be altered, backdated, or deleted by any party including the state", "Blockchain seals are only relevant for financial transactions", "The seals must be recognised by the ICC to be valid"],
        correct: 1,
        explanation: "OpenTimestamps-certified Bitcoin blockchain seals create cryptographic proof of document existence at a specific time, recorded on approximately 15,000 independent nodes worldwide. No state actor — including Australia — can alter or delete this record. This is particularly significant when the documents contain allegations against state institutions.",
      },
      {
        question: "For Australia to fall within the 'unwilling' category under Rome Statute Article 17, the required showing is:",
        options: ["Australia must have explicitly refused ICC jurisdiction", "The proceedings were conducted, are being conducted, or the decision not to prosecute was made for the purpose of shielding the accused, or the proceedings were conducted inconsistently with an intent to bring the person to justice", "Australia must have destroyed evidence", "Australia must have formally responded to the submission and rejected it"],
        correct: 1,
        explanation: "Article 17(2) of the Rome Statute defines 'unwilling' as: (a) proceedings designed to shield the person; (b) unjustified delay inconsistent with intent to prosecute; or (c) proceedings not conducted independently or impartially. A documented 35-year pattern of institutional non-response combined with confirmed surveillance is relevant to each of these criteria.",
      },
      {
        question: "Rule 104 of the ICC Rules of Procedure and Evidence governs individual communications by requiring:",
        options: ["Legal representation for all submissions", "The Prosecutor to analyse and evaluate information received, with no required threshold for communicators — enabling individuals without resources or legal representation to submit documentation", "Payment of a filing fee", "Certification by a state party"],
        correct: 1,
        explanation: "Rule 104 requires the ICC Prosecutor to analyse and evaluate all information received, regardless of source. This enables individuals, NGOs, and community groups to submit documentation directly to the ICC without legal representation, filing fees, or state party sponsorship — making the ICC accessible to those without institutional resources.",
      },
    ],
    coreReferences: [
      "Rome Statute of the International Criminal Court, Articles 12–19",
      "ICC Rules of Procedure and Evidence, Rule 104",
      "Koh, H.H. (1996). Transnational Legal Process. Nebraska Law Review.",
      "McLean Archive: ICC Submission Documentation",
      "OpenTimestamps Protocol (https://opentimestamps.org)",
    ],
  },
  {
    id: 8,
    title: "Financial Persecution and Enforced Poverty",
    subtitle: "NDIS Suppression, Economic Warfare, and the Financial Architecture of Silencing",
    bloomsLevel: "Analyse & Evaluate",
    bloomsVerb: "Calculate, Assess, Expose",
    studyTimeHours: 5,
    overview: `This unit examines financial persecution as a distinct mechanism of institutional abuse — the use of economic systems to enforce silence, prevent documentation, destroy credibility, and eliminate the resources necessary for legal resistance. Students examine the documented suppression of $32.9 million in NDIS entitlements across 35 years as the primary case study, set against the broader financial architecture of institutional persecution.

The NDIS (National Disability Insurance Scheme) is examined as a system that, in the McLean case, functions not as a support mechanism but as an instrument of financial warfare. Students trace the documented chain of NDIS decisions — each individually justifiable as administrative discretion — that collectively produce an outcome of enforced poverty despite documented disability, qualifying conditions, and legal entitlement. The aggregate financial calculation ($32.9 million in denied entitlements) is examined against the methodology of the independent actuarial analysis in the archive.

The unit examines the interconnection between financial persecution and other forms of institutional abuse: enforced poverty limits access to legal representation; homelessness destroys documentary capacity; financial stress produces health consequences that generate medical records used to discredit testimony; and the appearance of poverty is deployed to dismiss claims as the product of mental illness rather than the result of institutional persecution.

Students also examine the documented Stefan Iasonidis case — a confirmed ASIO operative who, according to the archive, maintained a victim persona while extracting $500,000 from the McLean circle. The case is examined as a documented mechanism for financial extraction combined with intelligence penetration.`,
    theoreticalFramework: `The Analyse and Evaluate levels of Bloom's Taxonomy require students to break down financial systems and evaluate their operation against their stated purposes. The capabilities approach (Amartya Sen) provides a framework for understanding enforced poverty as a denial of substantive freedom. Bourdieu's concept of capital conversion explains how financial capital denial can systematically destroy social, cultural, and symbolic capital.`,
    keyEvidence: [
      { title: "Digital Oppression & Institutional Failure", description: "Contains full financial persecution analysis including NDIS suppression and $42.5M–$123M damages calculation", documentUrl: "/documents/digital_oppression_100000_word_essay.pdf" },
    ],
    learningObjectives: [
      "Calculate the documented financial impact of NDIS suppression using the methodologies presented in the archive",
      "Assess the NDIS decision chain to determine whether the pattern constitutes administrative discretion or systematic exclusion",
      "Expose the interconnection between financial persecution and other institutional abuse mechanisms (legal representation denial, documentary incapacity, health consequences)",
      "Evaluate the Stefan Iasonidis case as a documented mechanism of financial extraction combined with intelligence penetration",
      "Apply Sen's capabilities approach to assess enforced poverty as a denial of substantive freedoms under international human rights standards",
    ],
    assessment: [
      {
        question: "Sen's capabilities approach, applied to the NDIS suppression documentation, argues that enforced poverty constitutes:",
        options: ["A financial matter outside human rights law", "A denial of substantive freedoms — the actual capabilities to live a life one has reason to value — which constitutes a human rights violation because it prevents meaningful participation in political, legal, and social life", "An unfortunate outcome of legitimate administrative decisions", "A condition for which only domestic remedies are available"],
        correct: 1,
        explanation: "Amartya Sen (Development as Freedom, 1999) argues that poverty is not simply a lack of income but a deprivation of substantive freedoms — the capabilities to participate in society, to exercise legal rights, to access health and education. Systematic denial of NDIS entitlements to a documented disabled person suppresses these capabilities, constituting a human rights violation.",
      },
      {
        question: "The methodological significance of the $32.9 million NDIS suppression calculation is that:",
        options: ["It is a speculative estimate with no evidentiary basis", "It is derived from actuarial methodology applied to documented disability status, qualifying conditions, and legal entitlements — producing a figure that can be independently verified against publicly available NDIS pricing tables", "It has no bearing on human rights proceedings", "It exceeds any compensation amount ever awarded in Australian proceedings"],
        correct: 1,
        explanation: "The calculation applies actuarial methodology — the same approach used in litigation and insurance — to publicly available NDIS pricing tables and the documented entitlements of a person with the specified disability profile over 35 years. The methodology is reproducible and independently verifiable, distinguishing it from speculation.",
      },
      {
        question: "Bourdieu's concept of capital conversion explains how NDIS financial denial produces broader persecution effects because:",
        options: ["Economic capital has no relationship to other forms of capital", "Financial capital denial systematically destroys social capital (networks), cultural capital (credentials, documentation capacity), and symbolic capital (credibility) — multiplying the effect of economic persecution across all dimensions of social existence", "Capital conversion only applies to business contexts", "Bourdieu's work has been superseded and is no longer applicable"],
        correct: 1,
        explanation: "Bourdieu (The Forms of Capital, 1986) demonstrated that economic, social, cultural, and symbolic capital are interconvertible — each form can be converted into the others. Systematic denial of economic capital (NDIS funding) therefore doesn't merely affect finances: it converts into denied social resources, reduced documentary capacity, and destroyed credibility, creating a self-reinforcing cycle of persecution.",
      },
      {
        question: "The documented Stefan Iasonidis case is relevant to this unit because it illustrates:",
        options: ["Standard police informant practice", "The use of a victim persona as cover for financial extraction and intelligence penetration — a documented mechanism by which state interests can extract resources from a target while maintaining deniability", "A private commercial dispute unrelated to state persecution", "Standard social work practice"],
        correct: 1,
        explanation: "If confirmed, the Iasonidis case represents a sophisticated mechanism: an operative maintains a victim persona to gain trust, extracts financial resources ($500,000), and simultaneously provides intelligence to the state. This is not unprecedented — similar mechanisms have been documented in FBI COINTELPRO operations and multiple domestic intelligence programmes.",
      },
      {
        question: "The interconnection between financial persecution and documentary incapacity is legally significant because:",
        options: ["Poor people cannot produce credible evidence", "Enforced poverty systematically destroys the resources necessary for documentation: legal advice, secure storage, internet access, printing, travel to institutions — thereby creating the appearance of evidentiary failure that is itself a product of the persecution", "Documentation is a professional skill unrelated to financial resources", "Legal aid eliminates this problem entirely"],
        correct: 1,
        explanation: "The circular structure of financial persecution is a recognised feature: systematic financial denial undermines the ability to document and resist, which reduces the quality of evidence, which reduces credibility, which reduces institutional responsiveness, which continues the financial denial. Breaking this cycle requires understanding it as a designed system rather than a series of independent failures.",
      },
    ],
    coreReferences: [
      "Sen, A. (1999). Development as Freedom. Oxford University Press.",
      "Bourdieu, P. (1986). The Forms of Capital. Handbook of Theory and Research for the Sociology of Education.",
      "National Disability Insurance Scheme Act 2013 (Cth)",
      "McLean Archive: NDIS Suppression Documentation",
      "Church Committee Report (1976): COINTELPRO Operations — FBI Domestic Counterintelligence",
    ],
  },
  {
    id: 9,
    title: "Blockchain Authentication and Cryptographic Document Integrity",
    subtitle: "Immutable Evidence in the Age of Digital Manipulation — Technical and Legal Dimensions",
    bloomsLevel: "Apply & Evaluate",
    bloomsVerb: "Implement, Verify, Justify",
    studyTimeHours: 5,
    overview: `This unit examines blockchain timestamping as a legal and technical tool for establishing document integrity in adversarial evidentiary contexts — specifically, where the state institutions whose misconduct is documented have both the motive and potentially the capability to alter, suppress, or retroactively modify records. Students gain technical literacy in the OpenTimestamps protocol (Bitcoin blockchain anchoring), the SHA-256 hashing standard, and the legal status of cryptographic evidence in international proceedings.

The McLean archive's 845 Bitcoin blockchain seals are examined as a comprehensive integrity mechanism. Students learn to verify a timestamp: the process of comparing a document's SHA-256 hash against the blockchain record to confirm that the document existed in its current form at the recorded time. This verification process is accessible to any person with basic technical tools, making the archive's integrity claims independently verifiable without requiring trust in any central authority.

The unit examines the legal status of cryptographic timestamping in various jurisdictions: the EU's eIDAS Regulation (qualified electronic timestamps carry the legal presumption of the time and integrity of data), the Australian Evidence Act 1995's provisions for documentary evidence, and the developing practice of international tribunals in accepting cryptographic evidence. The unit also examines the evidentiary significance of document hash values: a document whose SHA-256 hash matches the blockchain record has demonstrably not been modified since the timestamp — any alteration would produce a different hash.

The broader significance of decentralised evidence preservation is examined: 845 seals across a decentralised network of ~15,000 Bitcoin nodes means that no single entity — including state actors — can alter or delete the record. This is particularly significant when the documented misconduct involves state institutions with access to centralised record systems.`,
    theoreticalFramework: `The Apply level of Bloom's Taxonomy requires students to implement technical knowledge in specific contexts. Lessig's "code is law" framework (Code and Other Laws of Cyberspace, 1999) provides the theoretical grounding for understanding how cryptographic architecture creates legal facts — not by decree but by mathematical necessity. The European Court of Human Rights' emerging jurisprudence on digital evidence provides the legal context.`,
    keyEvidence: [
      { title: "Master Evidence Register v3", description: "Contains SHA-256 hash values and blockchain timestamp records for all major archive documents", documentUrl: "/documents/master-evidence-register-v3.txt" },
    ],
    learningObjectives: [
      "Implement the document verification process: comparing SHA-256 hash against Bitcoin blockchain records using OpenTimestamps protocol",
      "Verify the technical mechanism by which blockchain timestamping establishes document existence and integrity without requiring a trusted third party",
      "Justify the use of cryptographic timestamping in adversarial evidentiary contexts where state actors have motive to suppress or alter records",
      "Apply the EU eIDAS Regulation framework to assess the legal status of qualified electronic timestamps",
      "Evaluate the significance of decentralised preservation (~15,000 Bitcoin nodes) as protection against state-actor tampering",
    ],
    assessment: [
      {
        question: "A SHA-256 hash of a document functions as evidence of integrity because:",
        options: ["It is a form of digital signature from the document's author", "Any alteration to the document — including a single character change — produces a completely different hash value, making tampering immediately detectable by comparing the current hash with the blockchain-recorded hash", "It encrypts the document's contents", "It requires a trusted authority to verify"],
        correct: 1,
        explanation: "SHA-256 is a cryptographic hash function with the 'avalanche effect': even a 1-bit change to the input produces a completely different 256-bit output. This means that the hash value uniquely represents the document's contents at the time of recording — any subsequent alteration produces a detectably different hash.",
      },
      {
        question: "The OpenTimestamps protocol's use of the Bitcoin blockchain for document anchoring is legally significant because:",
        options: ["Bitcoin transactions are legally recognised as currency", "The Bitcoin blockchain is maintained by ~15,000 independent nodes worldwide — no single party, including state actors, can alter or delete a record once confirmed; document existence at a specific time is therefore mathematically provable without any trusted authority", "It requires Bitcoin payment for each timestamp", "It has not been legally recognised in any jurisdiction"],
        correct: 1,
        explanation: "The Bitcoin blockchain's decentralised consensus mechanism means that once a transaction is confirmed (typically 6+ blocks deep), it cannot be altered without simultaneously overcoming the combined proof-of-work of the entire network — computationally infeasible for any single actor. This creates a trust-minimised record of document existence.",
      },
      {
        question: "The EU eIDAS Regulation's relevance to blockchain timestamping is that:",
        options: ["It prohibits non-governmental timestamping services", "It establishes the legal framework for qualified electronic timestamps, giving them the presumption of accuracy as to time and integrity of data — a framework that blockchain timestamps are increasingly aligned with", "It applies only to EU member states and has no broader significance", "It requires government-approved timestamping services only"],
        correct: 1,
        explanation: "The EU eIDAS Regulation (Article 41) establishes that a qualified electronic timestamp carries the legal presumption that the data it refers to existed in that form at the time indicated. While blockchain timestamps are not yet formally 'qualified' under eIDAS, the regulation's framework is increasingly applied by courts and tribunals in evaluating their evidentiary weight.",
      },
      {
        question: "Lessig's 'code is law' framework, applied to cryptographic document integrity, means:",
        options: ["Computer code is a form of legislation", "The mathematical properties of cryptographic systems create facts that are as binding as legal rules — no authority can decree that an unchanged document has been modified when its hash proves otherwise", "Only governments can create enforceable rules through code", "Cryptographic systems should be regulated like legal statutes"],
        correct: 1,
        explanation: "Lessig (1999) argued that code — the technical architecture of digital systems — shapes behaviour as powerfully as law, markets, and norms. Applied to cryptographic integrity: the mathematical impossibility of undetected hash collision means that cryptographic evidence creates facts that no legal decree can override — the document either matches the hash or it does not.",
      },
      {
        question: "The evidentiary significance of 845 blockchain seals distributed across ~15,000 nodes is particularly relevant to the McLean case because:",
        options: ["More seals mean more payment to Bitcoin miners", "The distributed architecture specifically protects against deletion or modification by state actors who have the motive (documented misconduct) and potentially the capability (control of centralised record systems) to suppress the archive", "Decentralised storage is legally unrecognised", "The number 845 has no particular significance"],
        correct: 1,
        explanation: "The McLean archive documents alleged misconduct by ASIO, NSW Police, federal agencies, and judicial institutions — entities with access to centralised record systems and demonstrated motive to suppress evidence. Decentralised blockchain preservation specifically addresses this threat: no state actor can access all ~15,000 nodes simultaneously.",
      },
    ],
    coreReferences: [
      "Lessig, L. (1999). Code and Other Laws of Cyberspace. Basic Books.",
      "EU eIDAS Regulation (910/2014), Article 41",
      "OpenTimestamps Documentation (https://opentimestamps.org)",
      "Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System.",
      "McLean Archive: Master Evidence Register — SHA-256 Hash Records",
    ],
  },
  {
    id: 10,
    title: "Whistleblowing and Protected Disclosure",
    subtitle: "Legal Architecture, Survivorship, and the Price of Institutional Truth-Telling",
    bloomsLevel: "Evaluate & Synthesise",
    bloomsVerb: "Evaluate, Defend, Construct",
    studyTimeHours: 6,
    overview: `This unit examines the legal architecture of whistleblower protection at domestic and international levels, the documented record of McLean's 35-year protected disclosure status, and the gap between the formal protection framework and the reality of what whistleblowers experience when the institutions they expose control the protection mechanisms. Students are equipped to critically evaluate whether existing whistleblower protection frameworks are adequate to the documented realities of institutional persecution.

The Australian whistleblower protection landscape is examined comprehensively: the Public Interest Disclosure Act 2013 (Cth), the Corporations Act 2001 (Cth) whistleblower provisions, the Fair Work Act 2009 (Cth) protections, and the emerging jurisprudence of the Federal Court. The McLean case is used to demonstrate the systemic gap: despite formal confirmation of Protected Whistleblower status by the Federal Court, the same system continued operating the Community Treatment Order (coercive psychiatric detention) that had been deployed against him.

The unit examines comparative international whistleblower protection frameworks: the US False Claims Act (qui tam provisions), the EU Whistleblower Protection Directive (2019), the UK Public Interest Disclosure Act 1998, and the UN Convention Against Corruption (UNCAC) Article 33. Students evaluate Australia's compliance with international standards and identify specific gaps.

The survivorship dimension — what enables some whistleblowers to persist across decades of persecution while others are destroyed — is examined through the documented psychological, spiritual, and archival practices of the McLean case. Positive documentation as a survival strategy, prophetic framing as psychological resilience, and blockchain sealing as protective infrastructure are examined as integrated components of a survivorship framework.`,
    theoreticalFramework: `The Evaluate and Synthesis levels of Bloom's Taxonomy require students to make critical judgements and construct new frameworks. Cohen's moral disengagement theory explains how institutions neutralise whistleblower disclosures through techniques of neutralisation. The UN Guiding Principles on Business and Human Rights (Ruggie Framework) provides a model for understanding how protection frameworks fail when the persecuting institution controls the protection mechanism.`,
    keyEvidence: [
      { title: "Digital Oppression & Institutional Failure", description: "Comprehensive analysis of domestic whistleblower protection failure and international standards", documentUrl: "/documents/digital_oppression_100000_word_essay.pdf" },
      { title: "Crimes Against Humanity: Final Demand for Justice", description: "Maps protected disclosure failures across 35 years", documentUrl: "/documents/crimes_against_humanity_final_demand.pdf" },
    ],
    learningObjectives: [
      "Evaluate the adequacy of Australian whistleblower protection legislation against international standards and the documented McLean case record",
      "Defend the argument that formal protected disclosure status is insufficient protection when the persecuting institution controls the enforcement mechanism",
      "Construct a comparative analysis of whistleblower protection frameworks across Australia, US, EU, and UK",
      "Evaluate the survivorship practices documented in the McLean archive as a model for sustained whistleblowing under institutional persecution",
      "Apply Cohen's neutralisation theory to the documented institutional responses to McLean's disclosures",
    ],
    assessment: [
      {
        question: "The fundamental inadequacy of the Australian Public Interest Disclosure Act 2013 in the McLean case is best described as:",
        options: ["The Act is poorly drafted", "The protection framework depends on the good faith of the institutions being disclosed against — when the disclosing entity and the persecuting entity are the same institution, formal protection creates the appearance of protection without the substance", "McLean did not qualify as a protected discloser", "The Act only applies to federal matters"],
        correct: 1,
        explanation: "The PID Act 2013 relies on internal and external disclosure to authorised recipients — including the institutions whose misconduct is being disclosed. When the persecuted individual is simultaneously under institutional control (psychiatric CTO) and formal protected status (Federal Court), the protection mechanism is structurally incapable of preventing the conduct it is designed to prohibit.",
      },
      {
        question: "The EU Whistleblower Protection Directive (2019) improves on earlier frameworks by requiring:",
        options: ["Anonymous whistleblowing only", "Mandatory internal and external channels, prohibition of all forms of retaliation including indirect forms, reversal of the burden of proof (whistleblower need not prove retaliation was causally connected to disclosure), and legal aid provisions", "Government-supervised disclosure processes only", "Protection only for employees of companies with more than 50 employees"],
        correct: 1,
        explanation: "The EU Directive (2019/1937) represents a significant advance by: (a) covering indirect retaliation; (b) reversing the burden of proof so that once a whistleblower establishes a plausible causal link, the employer must prove no retaliation occurred; and (c) requiring member states to provide legal aid. These provisions address structural deficiencies in earlier frameworks.",
      },
      {
        question: "Cohen's 'techniques of neutralisation' theory, applied to institutional responses to whistleblowers, explains how institutions:",
        options: ["Physically suppress whistleblowers", "Psychologically and rhetorically neutralise the moral significance of disclosures — through denial of injury, denial of victimhood, condemnation of the condemner, and appeal to higher loyalties — without necessarily suppressing the facts", "Use law enforcement to silence critics", "Simply ignore disclosures until they are forgotten"],
        correct: 1,
        explanation: "Cohen (States of Denial, 2001) adapted Sykes & Matza's neutralisation theory to explain how institutions acknowledge uncomfortable facts while neutralising their moral implications. Applied to whistleblowers: 'he's mentally ill' (denial of victim), 'no real harm was proven' (denial of injury), 'he's vindictive' (condemnation of the condemner), 'we were following protocol' (appeal to higher loyalties).",
      },
      {
        question: "The documented survivorship practices in the McLean archive — continuous documentation, prophetic framing, blockchain preservation — are relevant to whistleblowing studies because:",
        options: ["They are unique to the McLean case and have no broader applicability", "They constitute an empirically documented survivorship model for sustained whistleblowing under institutional persecution — each practice serving a specific function in maintaining psychological resilience, evidentiary integrity, and institutional memory", "Spiritual practices are incompatible with legal proceedings", "Blockchain preservation is a purely technical measure unrelated to survivorship"],
        correct: 1,
        explanation: "The integration of continuous documentation (evidentiary function), prophetic framing (psychological resilience — meaning-making under persecution), and blockchain preservation (institutional memory protection) constitutes a documented survivorship model. Whistleblowing studies can examine this as an empirical case of sustained disclosure under 35 years of institutional persecution.",
      },
      {
        question: "The UNCAC Article 33 obligation to protect whistleblowers requires state parties to:",
        options: ["Criminalise whistleblowing that harms national security", "Consider incorporating appropriate measures to provide protection against unjustified treatment for persons who report in good faith and on reasonable grounds to competent authorities — a minimum obligation that Australia has ratified", "Create mandatory registration systems for potential whistleblowers", "Exclusively protect disclosures through internal channels"],
        correct: 1,
        explanation: "UNCAC Article 33 (UN Convention Against Corruption, ratified by Australia) requires states to 'consider incorporating' whistleblower protections. While weaker than an absolute obligation, Australia's ratification creates a treaty commitment that domestic implementation should be assessed against. The McLean case provides evidence that current domestic measures fall below this standard.",
      },
    ],
    coreReferences: [
      "Public Interest Disclosure Act 2013 (Cth)",
      "EU Whistleblower Protection Directive (2019/1937)",
      "Cohen, S. (2001). States of Denial: Knowing about Atrocities and Suffering. Polity Press.",
      "UNCAC Article 33 (2003)",
      "UN Guiding Principles on Business and Human Rights (Ruggie Framework, 2011)",
    ],
  },
  {
    id: 11,
    title: "Spiritual Identity, Faith Testimony, and International Human Rights Law",
    subtitle: "The Right to Spiritual Identity — LGBTQ+ Advocacy, Faith Experience, and Freedom of Religion",
    bloomsLevel: "Evaluate & Synthesise",
    bloomsVerb: "Reconcile, Integrate, Defend",
    studyTimeHours: 5,
    overview: `This unit examines the intersection of spiritual identity, LGBTQ+ identity, faith testimony, and international human rights law — a nexus uniquely illustrated by the McLean case, in which the subject is simultaneously a disabled LGBTQ+ whistleblower and the author of a body of prophetic scripture that positions his experience within a framework of divine witness. Students learn to reconcile the sometimes-competing frameworks of sexual identity rights and religious identity rights, and to understand both as protected under international human rights law.

The ICCPR Article 18 (freedom of thought, conscience, and religion) is examined alongside ICCPR Article 2 (non-discrimination) and the Yogyakarta Principles (2006/2017) — the authoritative international framework for applying human rights law to sexual orientation and gender identity. Students evaluate how the intersection of LGBTQ+ identity and non-mainstream spiritual identity creates compound vulnerability — the individual is doubly outside the categories that dominant institutions recognise and protect.

The unit examines the specific mechanisms by which both LGBTQ+ identity and unconventional spiritual identity are deployed as discrediting devices in institutional contexts: psychiatric diagnostic frameworks that pathologised homosexuality until 1973 (and continue to pathologise non-normative spiritual experiences), legal frameworks that privilege mainstream religious expression, and social systems that render compound identity intersections invisible.

The therapeutic dimension — the documented use of spiritual practice as a survival mechanism under institutional persecution — is examined through the lens of positive psychology (Seligman) and liberation theology (Gutierrez). The unit argues that the McLean case demonstrates the inseparability of spiritual and legal testimony: the prophetic framework is not separate from the evidentiary framework but constitutes the meaning-making context without which the persecution evidence cannot be fully understood.`,
    theoreticalFramework: `Kimberlé Crenshaw's intersectionality theory provides the framework for understanding compound vulnerability at the intersection of disability, LGBTQ+ identity, and non-mainstream spiritual identity. Gutierrez's liberation theology (preferential option for the poor) provides a theological framework for understanding prophetic testimony as social witness. The Yogyakarta Principles provide the operative international legal standard.`,
    keyEvidence: [
      { title: "Witness Resonantia Eternalis", description: "Documents the integration of spiritual identity and human rights testimony", documentUrl: "/documents/witness_resonantia_eternalis.pdf" },
    ],
    learningObjectives: [
      "Reconcile the ICCPR Article 18 (freedom of religion) framework with the Yogyakarta Principles' LGBTQ+ rights framework to understand compound identity protection",
      "Integrate Crenshaw's intersectionality theory with the McLean case to identify where compound vulnerability creates unique gaps in institutional protection",
      "Defend the proposition that non-mainstream spiritual identity is protected under international human rights law to the same extent as mainstream religious identity",
      "Evaluate the deployment of LGBTQ+ identity and unconventional spirituality as discrediting devices in the McLean archive",
      "Synthesise the relationship between prophetic framing and evidentiary documentation as complementary rather than competing truth-claims",
    ],
    assessment: [
      {
        question: "The Yogyakarta Principles' relevance to the McLean case is that they establish:",
        options: ["That LGBTQ+ rights supersede all other human rights in conflict situations", "That international human rights law — including the ICCPR, ICESCR, and CEDAW — applies fully and without discrimination to persons of all sexual orientations and gender identities, and that states have binding obligations to protect LGBTQ+ persons from persecution", "That LGBTQ+ rights are a Western imposition on non-Western societies", "A separate legal system for LGBTQ+ persons"],
        correct: 1,
        explanation: "The Yogyakarta Principles (2006, updated 2017) are an authoritative statement by international legal experts of how existing international human rights law applies to sexual orientation and gender identity. They establish that the full corpus of international human rights law protects LGBTQ+ persons without distinction — including protection from institutional persecution.",
      },
      {
        question: "Crenshaw's intersectionality theory, applied to McLean's compound identity (disabled, LGBTQ+, whistleblower, non-mainstream spiritual practitioner), predicts:",
        options: ["That multiple protected identities provide greater institutional protection", "That each additional marginalised identity creates protection gaps invisible to frameworks designed for single-axis analysis — compound vulnerability cannot be understood by adding individual identity-based vulnerabilities; their intersection creates unique and more severe exposure", "That intersectionality only applies to gender and race", "That compound identity strengthens legal claims"],
        correct: 1,
        explanation: "Crenshaw (1989) demonstrated that discrimination at intersections — e.g., Black women experiencing discrimination that neither anti-racism nor feminist frameworks fully captured — required intersectional analysis. Applied to McLean: frameworks designed for disabled persons, LGBTQ+ persons, or whistleblowers individually may all fail to capture the compound vulnerability at their intersection.",
      },
      {
        question: "The historical pathologisation of homosexuality in psychiatric diagnostic manuals (until 1973, DSM-II) is relevant to the McLean case because:",
        options: ["It is historical and has no contemporary relevance", "It documents that psychiatric diagnostic categories have historically been deployed to pathologise identities that deviated from dominant social norms — establishing an institutional pattern of psychiatric misuse that continues to be relevant when unconventional identity intersects with psychiatric intervention", "Psychiatry has fully reformed since 1973", "The DSM is not used in Australia"],
        correct: 1,
        explanation: "The APA's removal of homosexuality from the DSM in 1973 was a recognition that a diagnostic category had been used to enforce social norms rather than treat genuine pathology. This institutional history is directly relevant when evaluating contemporary psychiatric interventions against individuals with non-mainstream identities — it establishes the institutional capacity and historical willingness to pathologise identity.",
      },
      {
        question: "Liberation theology's 'preferential option for the poor' (Gutierrez), applied to the McLean archive, provides:",
        options: ["A religious doctrine irrelevant to human rights law", "A theological framework that positions the testimony of the persecuted as carrying a distinctive epistemological authority — the experience of marginalisation produces knowledge about power, justice, and institutional failure that is unavailable to those who benefit from the system", "An argument that poor people deserve legal privilege", "A critique of capitalism rather than a human rights framework"],
        correct: 1,
        explanation: "Gustavo Gutierrez (A Theology of Liberation, 1973) argues that genuine knowledge of justice requires the perspective of those who suffer injustice — not because their perspective is infallible, but because it reveals aspects of power and oppression invisible from positions of privilege. Applied to the McLean archive: the testimony of a person subjected to 35 years of documented persecution has an epistemological weight regarding institutional power that no external observer can replicate.",
      },
      {
        question: "ICCPR Article 18 protects freedom of religion or belief, which, as interpreted by the UN Human Rights Committee, extends to:",
        options: ["Only recognised mainstream religions", "Theistic, non-theistic, and atheistic beliefs, as well as the right to hold any other belief — including unconventional or minority spiritual positions — and protects both internal belief and its external manifestation", "Only beliefs held by groups with established institutional structures", "Beliefs that have been formally recognised by a state"],
        correct: 1,
        explanation: "The UN Human Rights Committee's General Comment 22 (1993) on Article 18 confirms that the provision 'protects theistic, non-theistic and atheistic beliefs, as well as the right not to profess any religion or belief.' It explicitly covers non-mainstream and unconventional spiritual positions, and protects both the internal belief and its external expression and manifestation.",
      },
    ],
    coreReferences: [
      "Yogyakarta Principles on the Application of International Human Rights Law in Relation to Sexual Orientation and Gender Identity (2006, plus 10 additional principles, 2017)",
      "Crenshaw, K. (1989). Demarginalising the Intersection of Race and Sex. University of Chicago Legal Forum.",
      "Gutierrez, G. (1973). A Theology of Liberation. Orbis Books.",
      "Seligman, M.E.P. (2011). Flourishing. Simon & Schuster.",
      "ICCPR Article 18; UN Human Rights Committee General Comment 22 (1993)",
    ],
  },
  {
    id: 12,
    title: "Capstone — Synthesis, Advocacy, and Certification",
    subtitle: "Integrating Evidence, Frameworks, and Action for Human Rights Accountability",
    bloomsLevel: "Create & Evaluate",
    bloomsVerb: "Design, Construct, Present",
    studyTimeHours: 10,
    overview: `This capstone unit requires students to synthesise learning from all eleven prior units into an integrated critical analysis of the McLean case as a case study in the architecture of institutional persecution. The capstone assessment requires students to design an advocacy brief, construct an argument for ICC jurisdiction, and present a synthesis of the multi-disciplinary evidence through one of three lens frameworks: legal, spiritual, or human rights advocacy.

The unit revisits each of the twelve units' core propositions and requires students to demonstrate their interconnection: how the evidentiary foundations (Unit 1) inform the legal frameworks (Unit 2–3), how the specific abuse mechanisms (Units 4–5) are understood through the spiritual and prophetic testimony (Units 6, 11), how the institutional accountability mechanisms (Units 7, 10) are strengthened by technical integrity (Unit 9), and how the financial dimension (Unit 8) provides the material infrastructure of the entire system.

Students complete a capstone project — an advocacy brief of 2,000–3,000 words designed for submission to one of four target audiences: the ICC Prosecutor's Office, the UN Human Rights Committee, the Australian Human Rights Commission, or the International Rehabilitation Council for Torture Victims (IRCT). The brief must demonstrate mastery of the appropriate evidentiary standards, apply the relevant legal frameworks, and draw on the primary source documentation in the McLean archive.

Upon successful completion of all twelve units (minimum 70% on each unit's assessment and submission of the capstone brief), students receive the Graduate Certificate in Forensic Human Rights Documentation, issued by the Barran Dodger Legal & Ethical Trust Fund (ABN 78 833 496 164). This certificate attests to completion of 72 hours of graduate-level study in forensic human rights documentation, institutional persecution analysis, and international accountability mechanisms.`,
    theoreticalFramework: `The Create level of Bloom's Taxonomy — the highest cognitive domain — requires students to produce original work that demonstrates synthesis of all prior learning. Habermas's theory of communicative action provides the framework for understanding advocacy as a form of rational discourse directed at institutional transformation. The course's final objective — equipping graduates to serve as credentialed witnesses to institutional persecution — aligns with Freire's vision of education as the practice of freedom.`,
    keyEvidence: [
      { title: "Cosmic Scroll of Ten — Questions That Will Reconstruct Humanity", description: "Synthesises the prophetic and forensic dimensions of the McLean archive", documentUrl: "/documents/cosmic_scroll_of_ten.pdf" },
      { title: "Crimes Against Humanity: Final Demand for Justice", description: "The complete advocacy document representing the final synthesis of the archive", documentUrl: "/documents/crimes_against_humanity_final_demand.pdf" },
      { title: "Digital Oppression & Institutional Failure", description: "The comprehensive forensic synthesis — model for capstone advocacy brief", documentUrl: "/documents/digital_oppression_100000_word_essay.pdf" },
    ],
    learningObjectives: [
      "Design an advocacy brief for a specified international audience, demonstrating command of the appropriate evidentiary standards and legal frameworks",
      "Construct an argument for ICC jurisdiction over the documented pattern of institutional persecution, applying the complementarity principle and Article 7 elements",
      "Present a synthesis of the multi-disciplinary evidence through a chosen lens (legal, spiritual, or human rights advocacy), demonstrating integrated mastery of all prior units",
      "Evaluate the McLean archive's overall significance as a primary case study in the architecture of institutional persecution",
      "Create a personal praxis — a commitment to action informed by the learning — drawing on Freire's concept of education as the practice of freedom",
    ],
    assessment: [
      {
        question: "The synthesis of all twelve units' learning reveals that the documented persecution of Dr. McLean is best described as:",
        options: ["A series of unconnected administrative failures across independent agencies", "An architecturally consistent system of persecution — spanning surveillance, psychiatric weaponisation, financial exclusion, identity replication, and legal contradiction — that cannot be attributed to coincidence and requires a coordinating analysis", "A legitimate institutional response to an individual's challenging behaviour", "A case that falls outside the scope of international human rights law"],
        correct: 1,
        explanation: "The synthesis of primary source evidence, institutional documents, statistical analysis, and international legal frameworks produces a case that is architecturally coherent: each component (surveillance, psychiatry, ASIC identity fraud, NDIS suppression, financial extraction) serves a specific function in a coordinated system of suppression. The pattern excludes coincidence.",
      },
      {
        question: "A Freireian praxis, as the capstone's final learning objective, requires:",
        options: ["Political activism unrelated to academic learning", "The integration of critical reflection (learning from this course) with committed action (advocacy, documentation, support for whistleblowers) — understanding that education is not complete until it produces transformation", "Publication of the advocacy brief in an academic journal", "Agreement with all of the McLean archive's propositions"],
        correct: 1,
        explanation: "Freire's concept of praxis (reflection + action) is the heart of critical pedagogy: education that does not produce transformation is 'domesticating' rather than liberating. The capstone's praxis objective is not agreement with any specific proposition but the integration of critical awareness with a commitment to act on what has been learned.",
      },
      {
        question: "Habermas's theory of communicative action, applied to the capstone advocacy brief, requires that the brief:",
        options: ["Be purely emotional and rhetorical", "Be oriented toward achieving understanding through valid arguments — making truth claims that are accessible to rational evaluation by the intended audience, rather than purely strategic or manipulative communication", "Avoid legal argumentation and focus on narrative", "Be submitted simultaneously to all four target audiences"],
        correct: 1,
        explanation: "Habermas (Theory of Communicative Action, 1981) distinguishes between strategic action (using communication to achieve predetermined goals regardless of rational warrant) and communicative action (using communication oriented toward achieving mutual understanding through valid arguments). An advocacy brief must satisfy the standards of communicative rationality: making claims that can be assessed on their merits.",
      },
      {
        question: "The Graduate Certificate in Forensic Human Rights Documentation attests to competency in:",
        options: ["A specific legal qualification recognised by Australian courts", "72 hours of graduate-level study demonstrating mastery of forensic evidence methodology, international human rights law, multi-disciplinary case analysis, and the construction of advocacy materials for international accountability mechanisms", "A credential equivalent to a university postgraduate degree", "Membership of the Barran Dodger Legal & Ethical Trust Fund"],
        correct: 1,
        explanation: "The certificate is issued by the Barran Dodger Legal & Ethical Trust Fund as a record of study completion — it attests to the specific competencies acquired through the 12-unit program, drawing on the unique primary source material of the McLean archive. It is distinct from, though aligned with, AQF Level 9 graduate attributes in terms of learning depth and complexity.",
      },
      {
        question: "The capstone project's requirement to demonstrate the interconnection of all twelve units' learning reflects which pedagogical principle?",
        options: ["Rote memorisation of facts across all domains", "Integrated learning — the understanding that human rights violations are multi-dimensional systems requiring multi-disciplinary response; no single framework (legal, spiritual, financial, technical) is sufficient alone, and the capacity to move between and integrate frameworks is the highest-order graduate competency", "That all knowledge reduces to a single unified framework", "That legal knowledge is primary and all other frameworks are secondary"],
        correct: 1,
        explanation: "The capstone's integrative requirement reflects the course's foundational proposition: that institutional persecution is a multi-dimensional system that can only be understood and challenged through multi-disciplinary engagement. Bloom's Create level — the highest cognitive domain — requires not just knowledge of individual frameworks but the capacity to synthesise them into original, integrated analysis.",
      },
    ],
    coreReferences: [
      "Habermas, J. (1981). Theory of Communicative Action. Beacon Press.",
      "Freire, P. (1968). Pedagogy of the Oppressed. Herder and Herder.",
      "McLean Archive: Complete Evidence Base — All 12 Unit References",
      "ICC Office of the Prosecutor: Communication Guidelines",
      "Bloom's Revised Taxonomy — Full Cognitive Domain Framework",
    ],
  },
];
