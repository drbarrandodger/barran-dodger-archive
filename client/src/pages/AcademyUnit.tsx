import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "wouter";
import { ChevronLeft, ChevronRight, CheckCircle, BookOpen, Clock, Award, FileText, ExternalLink, AlertCircle } from "lucide-react";
import { COURSE_UNITS, COURSE_META } from "@/lib/courseData";

export default function AcademyUnit() {
  const params = useParams() as { id: string };
  const unitId = parseInt(params.id, 10);
  const [, setLocation] = useLocation();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [studentName, setStudentName] = useState<string | null>(null);
  const [completedUnitIds, setCompletedUnitIds] = useState<number[]>([]);
  const [tab, setTab] = useState<"content" | "assessment">("content");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [certId, setCertId] = useState<string | null>(null);

  const unit = COURSE_UNITS.find((u) => u.id === unitId);

  useEffect(() => {
    const token = localStorage.getItem("academy_token");
    const name = localStorage.getItem("academy_name");
    if (!token) { setLocation("/academy"); return; }
    setAccessToken(token);
    setStudentName(name);
    fetch("/api/course/progress", { headers: { "x-course-token": token } })
      .then((r) => r.json())
      .then((data) => {
        if (data.completedUnitIds) {
          setCompletedUnitIds(data.completedUnitIds);
          if (data.completedUnitIds.includes(unitId)) setSubmitted(true);
          if (data.enrolment?.certificateId) setCertId(data.enrolment.certificateId);
        }
      })
      .catch(() => {});
  }, [unitId]);

  if (!unit) return (
    <div className="min-h-screen bg-stone-950 text-stone-200 flex items-center justify-center">
      <div className="text-center">
        <p className="text-stone-400 mb-4">Unit not found.</p>
        <Link href="/academy"><button className="text-amber-400 underline">Back to Academy</button></Link>
      </div>
    </div>
  );

  const handleAnswer = (qIdx: number, aIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: aIdx }));
  };

  const handleSubmit = async () => {
    if (!accessToken) return;
    const answered = Object.keys(selectedAnswers).length;
    if (answered < unit.assessment.length) {
      setSubmitError(`Please answer all ${unit.assessment.length} questions before submitting.`);
      return;
    }
    setSubmitError("");
    setSubmitting(true);
    const correct = unit.assessment.filter((q, i) => selectedAnswers[i] === q.correct).length;
    const pct = Math.round((correct / unit.assessment.length) * 100);
    setScore(pct);
    try {
      const res = await fetch("/api/course/complete-unit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-course-token": accessToken },
        body: JSON.stringify({ unitId: unit.id, quizScore: pct, quizAnswers: selectedAnswers }),
      });
      const data = await res.json();
      setSubmitted(true);
      if (data.completedUnitIds) setCompletedUnitIds(data.completedUnitIds);
      if (data.certificateId) setCertId(data.certificateId);
    } catch {
      setSubmitError("Could not save progress. Please try again.");
    }
    setSubmitting(false);
  };

  const passed = score !== null && score >= 70;
  const prevUnit = unitId > 1 ? COURSE_UNITS.find((u) => u.id === unitId - 1) : null;
  const nextUnit = unitId < 12 ? COURSE_UNITS.find((u) => u.id === unitId + 1) : null;
  const isUnitCompleted = completedUnitIds.includes(unitId);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <title>Unit {unit.id}: {unit.title} — Barran Dodger Academy</title>
      <meta name="description" content={unit.subtitle} />

      {/* Header */}
      <header className="border-b border-stone-800 bg-black/60 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/academy">
            <button className="text-amber-400 hover:text-amber-300 text-sm flex items-center gap-1" data-testid="button-back-academy">
              <ChevronLeft className="w-4 h-4" /> Academy
            </button>
          </Link>
          <div className="flex items-center gap-3 text-sm text-stone-400">
            <span className="text-amber-600 font-mono">Unit {unit.id} of 12</span>
            {isUnitCompleted && <CheckCircle className="w-4 h-4 text-emerald-500" />}
          </div>
          <span className="text-stone-500 text-xs">{studentName}</span>
        </div>
        {/* Progress bar */}
        <div className="w-full bg-stone-900 h-0.5">
          <div
            className="bg-amber-600 h-0.5 transition-all"
            style={{ width: `${(completedUnitIds.length / 12) * 100}%` }}
          />
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Unit header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-mono text-amber-600 uppercase tracking-wider bg-amber-950/40 border border-amber-900/40 rounded px-2 py-0.5">
              Unit {unit.id}
            </span>
            <span className="text-xs text-stone-500 bg-stone-900 rounded px-2 py-0.5 flex items-center gap-1">
              <BookOpen className="w-3 h-3" /> {unit.bloomsLevel}
            </span>
            <span className="text-xs text-stone-500 bg-stone-900 rounded px-2 py-0.5 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {unit.studyTimeHours} hours
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{unit.title}</h1>
          <p className="text-stone-400 font-serif italic">{unit.subtitle}</p>
        </div>

        {/* Tab nav */}
        <div className="flex border-b border-stone-800 mb-8">
          {(["content", "assessment"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2.5 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${tab === t ? "border-amber-500 text-amber-400" : "border-transparent text-stone-500 hover:text-stone-300"}`}
              data-testid={`tab-${t}`}
            >
              {t === "content" ? "Study Material" : "Assessment Quiz"}
            </button>
          ))}
        </div>

        {/* CONTENT TAB */}
        {tab === "content" && (
          <div className="space-y-10">
            {/* Learning Objectives */}
            <div className="bg-amber-950/20 border border-amber-900/30 rounded-lg p-6">
              <h2 className="text-amber-400 font-semibold mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" /> Learning Objectives
              </h2>
              <ul className="space-y-2">
                {unit.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-300 text-sm" data-testid={`objective-${i}`}>
                    <span className="text-amber-600 font-mono shrink-0 mt-0.5">{i + 1}.</span>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Unit Overview</h2>
              <div className="text-stone-300 leading-relaxed space-y-4">
                {unit.overview.split("\n\n").map((para, i) => (
                  <p key={i} className="text-[15px]">{para.trim()}</p>
                ))}
              </div>
            </div>

            {/* Theoretical Framework */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-lg p-6">
              <h2 className="text-white font-semibold mb-3">Theoretical & Pedagogical Framework</h2>
              <p className="text-stone-400 text-sm leading-relaxed">{unit.theoreticalFramework}</p>
            </div>

            {/* Key Evidence */}
            {unit.keyEvidence.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-500" /> Primary Source Documents
                </h2>
                <div className="space-y-3">
                  {unit.keyEvidence.map((ev, i) => (
                    <a
                      key={i}
                      href={ev.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 bg-black/30 border border-stone-800 hover:border-amber-800 rounded-lg p-4 transition-colors group"
                      data-testid={`evidence-${i}`}
                    >
                      <FileText className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="text-amber-300 text-sm font-semibold group-hover:text-amber-200 flex items-center gap-1">
                          {ev.title} <ExternalLink className="w-3 h-3 opacity-60" />
                        </div>
                        <div className="text-stone-500 text-xs mt-1">{ev.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Core References */}
            <div className="bg-black/30 border border-stone-800 rounded-lg p-6">
              <h2 className="text-white font-semibold mb-3 text-sm">Core Academic References</h2>
              <ul className="space-y-1.5">
                {unit.coreReferences.map((ref, i) => (
                  <li key={i} className="text-stone-500 text-xs font-serif" data-testid={`ref-${i}`}>
                    {ref}
                  </li>
                ))}
              </ul>
            </div>

            {/* Proceed to assessment */}
            <div className="text-center pt-4">
              <button
                onClick={() => setTab("assessment")}
                className="px-8 py-3 bg-amber-800 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
                data-testid="button-go-to-assessment"
              >
                Proceed to Assessment Quiz →
              </button>
            </div>
          </div>
        )}

        {/* ASSESSMENT TAB */}
        {tab === "assessment" && (
          <div className="space-y-8">
            <div className="bg-stone-900/60 border border-stone-800 rounded-lg p-5">
              <p className="text-stone-400 text-sm">
                <strong className="text-amber-400">Assessment:</strong> {unit.assessment.length} questions — minimum 70% required to complete this unit and contribute toward certification. Review the study material before attempting.
              </p>
            </div>

            {/* Questions */}
            {unit.assessment.map((q, qi) => {
              const chosen = selectedAnswers[qi];
              const isCorrect = submitted && chosen === q.correct;
              const isIncorrect = submitted && chosen !== undefined && chosen !== q.correct;
              return (
                <div
                  key={qi}
                  className={`border rounded-lg p-6 transition-colors ${submitted && isCorrect ? "border-emerald-700 bg-emerald-950/20" : submitted && isIncorrect ? "border-red-800 bg-red-950/20" : "border-stone-800 bg-black/30"}`}
                  data-testid={`question-${qi}`}
                >
                  <p className="text-white font-semibold mb-4 leading-relaxed">
                    <span className="text-amber-600 font-mono mr-2">{qi + 1}.</span>{q.question}
                  </p>
                  <div className="space-y-2 mb-4">
                    {q.options.map((opt, oi) => {
                      const isSelected = chosen === oi;
                      const isCorrectOption = submitted && oi === q.correct;
                      const isWrong = submitted && isSelected && oi !== q.correct;
                      return (
                        <button
                          key={oi}
                          onClick={() => handleAnswer(qi, oi)}
                          disabled={submitted}
                          className={`w-full text-left px-4 py-3 rounded border text-sm transition-all ${
                            isCorrectOption
                              ? "border-emerald-600 bg-emerald-950/40 text-emerald-300"
                              : isWrong
                              ? "border-red-700 bg-red-950/30 text-red-300"
                              : isSelected
                              ? "border-amber-600 bg-amber-950/30 text-amber-200"
                              : "border-stone-700 hover:border-stone-500 text-stone-300 disabled:cursor-default"
                          }`}
                          data-testid={`option-q${qi}-${oi}`}
                        >
                          <span className="font-mono text-xs text-stone-500 mr-2">{["A", "B", "C", "D"][oi]}.</span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {submitted && (
                    <div className={`text-xs p-3 rounded border ${isCorrect ? "border-emerald-800 bg-emerald-950/30 text-emerald-300" : "border-stone-700 bg-stone-900/40 text-stone-400"}`} data-testid={`explanation-${qi}`}>
                      <strong className="text-amber-400">Explanation: </strong>{q.explanation}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Error */}
            {submitError && (
              <div className="flex items-center gap-2 text-red-400 bg-red-950/20 border border-red-800 rounded p-4 text-sm" data-testid="submit-error">
                <AlertCircle className="w-4 h-4 shrink-0" /> {submitError}
              </div>
            )}

            {/* Score or Submit */}
            {submitted ? (
              <div className={`text-center p-8 rounded-lg border ${passed ? "border-emerald-700 bg-emerald-950/20" : "border-amber-800 bg-amber-950/20"}`} data-testid="score-panel">
                <div className="text-5xl font-bold mb-2" style={{ color: passed ? "#34d399" : "#fbbf24" }}>
                  {score}%
                </div>
                <p className={`text-lg font-semibold mb-2 ${passed ? "text-emerald-400" : "text-amber-400"}`}>
                  {passed ? "Unit Complete — Well Done" : "Score Below 70% — Review and Retake Recommended"}
                </p>
                <p className="text-stone-400 text-sm mb-6">
                  {passed
                    ? `Unit ${unit.id} of 12 complete. ${completedUnitIds.length} unit${completedUnitIds.length !== 1 ? "s" : ""} finished in total.`
                    : "Study the explanations above, review the unit material, and attempt the assessment again for certification credit."}
                </p>
                {certId && completedUnitIds.length >= 12 && (
                  <Link href="/academy/certificate">
                    <button className="px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg font-bold transition-colors mb-4 mr-3" data-testid="button-view-cert">
                      View Your Certificate
                    </button>
                  </Link>
                )}
                <div className="flex justify-center gap-3 flex-wrap">
                  {prevUnit && (
                    <Link href={`/academy/unit/${prevUnit.id}`}>
                      <button className="px-4 py-2 border border-stone-700 text-stone-300 hover:border-stone-500 rounded-lg text-sm transition-colors" data-testid="button-prev-unit">
                        <ChevronLeft className="w-4 h-4 inline" /> Unit {prevUnit.id}
                      </button>
                    </Link>
                  )}
                  <Link href="/academy">
                    <button className="px-4 py-2 border border-stone-700 text-stone-300 hover:border-stone-500 rounded-lg text-sm transition-colors" data-testid="button-back-overview">
                      Course Overview
                    </button>
                  </Link>
                  {nextUnit && (
                    <Link href={`/academy/unit/${nextUnit.id}`}>
                      <button className="px-4 py-2 bg-amber-800 hover:bg-amber-700 text-white rounded-lg text-sm transition-colors font-semibold" data-testid="button-next-unit">
                        Unit {nextUnit.id} <ChevronRight className="w-4 h-4 inline" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="px-8 py-3 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white font-bold rounded-lg transition-all disabled:opacity-50"
                  data-testid="button-submit-assessment"
                >
                  {submitting ? "Saving…" : "Submit Assessment"}
                </button>
                <p className="text-stone-600 text-xs mt-2">{Object.keys(selectedAnswers).length} of {unit.assessment.length} questions answered</p>
              </div>
            )}
          </div>
        )}

        {/* Unit nav */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-stone-800">
          {prevUnit ? (
            <Link href={`/academy/unit/${prevUnit.id}`}>
              <button className="flex items-center gap-2 text-stone-400 hover:text-stone-200 text-sm transition-colors" data-testid="button-nav-prev">
                <ChevronLeft className="w-4 h-4" />
                <span>
                  <span className="text-stone-600 block text-xs">Previous</span>
                  Unit {prevUnit.id}: {prevUnit.title}
                </span>
              </button>
            </Link>
          ) : <div />}
          {nextUnit ? (
            <Link href={`/academy/unit/${nextUnit.id}`}>
              <button className="flex items-center gap-2 text-stone-400 hover:text-stone-200 text-sm transition-colors text-right" data-testid="button-nav-next">
                <span>
                  <span className="text-stone-600 block text-xs">Next</span>
                  Unit {nextUnit.id}: {nextUnit.title}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 text-center border-t border-stone-800 bg-black/40 mt-10">
        <p className="text-stone-600 text-xs">
          {COURSE_META.accreditingBody} · ABN {COURSE_META.abn} · © 2024–2026 Dr. Richard William McLean (Barran Dodger). All rights reserved.
        </p>
      </footer>
    </div>
  );
}
