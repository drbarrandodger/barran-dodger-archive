import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "wouter";
import {
  Play, Pause, Square, SkipBack, SkipForward,
  Volume2, ChevronUp, ChevronDown, Settings, Zap, Headphones, X
} from "lucide-react";

function extractPageText(): { title: string; sentences: string[] } {
  const h1El =
    document.querySelector("main h1") ||
    document.querySelector("article h1") ||
    document.querySelector("h1");
  const title =
    h1El?.textContent?.trim() ||
    document.title.split("|")[0].trim() ||
    "This page";

  const selectors = [
    "main h1", "main h2", "main h3", "main h4",
    "main p", "main li", "main blockquote",
    "article h1", "article h2", "article h3", "article h4",
    "article p", "article li",
    "[data-tts] p", "[data-tts] h2", "[data-tts] h3",
  ].join(", ");

  const elements = Array.from(document.querySelectorAll(selectors));
  const seen = new Set<string>();
  const sentences: string[] = [];

  elements.forEach((el) => {
    const raw = el.textContent?.trim();
    if (!raw || raw.length < 12 || seen.has(raw)) return;
    seen.add(raw);
    const parts = raw.match(/[^.!?]+[.!?]+/g) || [raw];
    parts.forEach((p) => {
      const clean = p.trim();
      if (clean.length > 8) sentences.push(clean);
    });
  });

  return { title, sentences };
}

const SPEEDS = [0.75, 1, 1.25, 1.5, 2];
const HD_VOICES = [
  { id: "nova", label: "Nova (Warm)" },
  { id: "alloy", label: "Alloy (Neutral)" },
  { id: "echo", label: "Echo (Deep)" },
  { id: "fable", label: "Fable (Expressive)" },
  { id: "onyx", label: "Onyx (Strong)" },
  { id: "shimmer", label: "Shimmer (Soft)" },
];

export function FloatingAudioPlayer() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [sentences, setSentences] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(1);
  const [mode, setMode] = useState<"browser" | "hd">("browser");
  const [hdVoice, setHdVoice] = useState("nova");
  const [showSettings, setShowSettings] = useState(false);
  const [browserVoices, setBrowserVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceIdx, setVoiceIdx] = useState(0);
  const [hdLoading, setHdLoading] = useState(false);
  const [error, setError] = useState("");

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const hdAudioRef = useRef<HTMLAudioElement | null>(null);
  const idxRef = useRef(0);
  const sentencesRef = useRef<string[]>([]);
  const speedRef = useRef(1);
  const modeRef = useRef<"browser" | "hd">("browser");
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const hdVoiceRef = useRef("nova");
  const activeRef = useRef(false);

  speedRef.current = SPEEDS[speedIdx];
  modeRef.current = mode;
  hdVoiceRef.current = hdVoice;

  useEffect(() => {
    const load = () => {
      const v = window.speechSynthesis.getVoices().filter(
        (v) => v.lang.startsWith("en")
      );
      setBrowserVoices(v);
      if (v.length > 0) voiceRef.current = v[0];
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  useEffect(() => {
    if (browserVoices[voiceIdx]) voiceRef.current = browserVoices[voiceIdx];
  }, [voiceIdx, browserVoices]);

  useEffect(() => {
    if (isPlaying || isPaused) {
      stopAll();
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentIdx(0);
      idxRef.current = 0;
    }
  }, [location]);

  const stopAll = useCallback(() => {
    activeRef.current = false;
    if (utteranceRef.current) {
      window.speechSynthesis.cancel();
      utteranceRef.current = null;
    }
    if (hdAudioRef.current) {
      hdAudioRef.current.pause();
      const src = hdAudioRef.current.src;
      if (src.startsWith("blob:")) URL.revokeObjectURL(src);
      hdAudioRef.current = null;
    }
    setHdLoading(false);
  }, []);

  const loadContent = useCallback(() => {
    const { title: t, sentences: s } = extractPageText();
    setTitle(t);
    setSentences(s);
    sentencesRef.current = s;
    return s;
  }, []);

  const speakNext = useCallback((idx: number) => {
    if (!activeRef.current) return;
    const s = sentencesRef.current;
    if (idx >= s.length) {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentIdx(0);
      idxRef.current = 0;
      activeRef.current = false;
      return;
    }
    setCurrentIdx(idx);
    idxRef.current = idx;

    if (modeRef.current === "hd") {
      setHdLoading(true);
      fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: s[idx], voice: hdVoiceRef.current }),
      })
        .then((r) => {
          if (!r.ok) throw new Error("TTS failed");
          return r.blob();
        })
        .then((blob) => {
          if (!activeRef.current) return;
          setHdLoading(false);
          const url = URL.createObjectURL(blob);
          const audio = new Audio(url);
          audio.playbackRate = speedRef.current;
          hdAudioRef.current = audio;
          audio.play().catch(() => {});
          audio.onended = () => {
            URL.revokeObjectURL(url);
            hdAudioRef.current = null;
            if (activeRef.current) speakNext(idx + 1);
          };
          audio.onerror = () => {
            setError("HD audio error — switching to browser voice");
            setMode("browser");
            modeRef.current = "browser";
            if (activeRef.current) speakNextBrowser(idx);
          };
        })
        .catch(() => {
          if (!activeRef.current) return;
          setHdLoading(false);
          setError("HD quality unavailable — using browser voice");
          setMode("browser");
          modeRef.current = "browser";
          speakNextBrowser(idx);
        });
    } else {
      speakNextBrowser(idx);
    }
  }, []);

  const speakNextBrowser = useCallback((idx: number) => {
    if (!activeRef.current) return;
    const s = sentencesRef.current;
    if (idx >= s.length) {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentIdx(0);
      idxRef.current = 0;
      activeRef.current = false;
      return;
    }
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(s[idx]);
    utt.rate = speedRef.current;
    utt.pitch = 1;
    utt.volume = 1;
    if (voiceRef.current) utt.voice = voiceRef.current;
    utt.onend = () => {
      utteranceRef.current = null;
      if (activeRef.current) speakNext(idx + 1);
    };
    utt.onerror = () => {
      if (activeRef.current) speakNext(idx + 1);
    };
    utteranceRef.current = utt;
    window.speechSynthesis.speak(utt);
  }, [speakNext]);

  const handlePlay = useCallback(() => {
    setError("");
    const s = sentences.length > 0 ? sentences : loadContent();
    if (s.length === 0) {
      setError("No readable content found on this page");
      return;
    }
    sentencesRef.current = s;
    activeRef.current = true;
    setIsPlaying(true);
    setIsPaused(false);
    speakNext(idxRef.current);
  }, [sentences, loadContent, speakNext]);

  const handlePause = useCallback(() => {
    if (modeRef.current === "browser") {
      window.speechSynthesis.pause();
    } else if (hdAudioRef.current) {
      hdAudioRef.current.pause();
    }
    activeRef.current = false;
    setIsPlaying(false);
    setIsPaused(true);
  }, []);

  const handleResume = useCallback(() => {
    setError("");
    if (modeRef.current === "browser") {
      window.speechSynthesis.resume();
    } else if (hdAudioRef.current) {
      hdAudioRef.current.play().catch(() => {});
    } else {
      activeRef.current = true;
      speakNext(idxRef.current);
      setIsPlaying(true);
      setIsPaused(false);
      return;
    }
    activeRef.current = true;
    setIsPlaying(true);
    setIsPaused(false);
  }, [speakNext]);

  const handleStop = useCallback(() => {
    stopAll();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentIdx(0);
    idxRef.current = 0;
  }, [stopAll]);

  const handleBack = useCallback(() => {
    const newIdx = Math.max(0, idxRef.current - 1);
    if (isPlaying) {
      stopAll();
      activeRef.current = true;
      setIsPlaying(true);
      speakNext(newIdx);
    } else {
      setCurrentIdx(newIdx);
      idxRef.current = newIdx;
    }
  }, [isPlaying, stopAll, speakNext]);

  const handleForward = useCallback(() => {
    const newIdx = Math.min(sentencesRef.current.length - 1, idxRef.current + 1);
    if (isPlaying) {
      stopAll();
      activeRef.current = true;
      setIsPlaying(true);
      speakNext(newIdx);
    } else {
      setCurrentIdx(newIdx);
      idxRef.current = newIdx;
    }
  }, [isPlaying, stopAll, speakNext]);

  const handleOpen = useCallback(() => {
    const { title: t, sentences: s } = extractPageText();
    setTitle(t);
    setSentences(s);
    sentencesRef.current = s;
    setCurrentIdx(0);
    idxRef.current = 0;
    setIsOpen(true);
    setError("");
  }, []);

  const handleClose = useCallback(() => {
    handleStop();
    setIsOpen(false);
    setShowSettings(false);
  }, [handleStop]);

  const progress =
    sentences.length > 0 ? Math.round((currentIdx / sentences.length) * 100) : 0;

  const currentSentence = sentences[currentIdx] || "";

  if (!isOpen) {
    return (
      <button
        onClick={handleOpen}
        className="fixed bottom-14 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-[#1a2744] border border-[#e9a00a]/40 text-[#e9a00a] rounded-full px-4 py-2 shadow-lg hover:bg-[#1a2744]/90 hover:border-[#e9a00a] transition-all text-sm font-medium group"
        title="Listen to this page"
        data-testid="button-listen-open"
      >
        <Headphones className="w-4 h-4" />
        <span>Listen</span>
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-14 left-1/2 -translate-x-1/2 z-50 w-[min(96vw,520px)] bg-[#0d1526] border border-[#e9a00a]/30 rounded-2xl shadow-2xl overflow-hidden"
      data-testid="panel-audio-player"
    >
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a2744] border-b border-[#e9a00a]/20">
        <Headphones className="w-4 h-4 text-[#e9a00a] flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="text-white text-xs font-semibold truncate">{title}</div>
          <div className="text-[#e9a00a]/60 text-[10px] font-mono">
            {sentences.length > 0
              ? `Sentence ${currentIdx + 1} of ${sentences.length}`
              : "Ready to play"}
          </div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            onClick={() => setShowSettings((s) => !s)}
            className={`p-1.5 rounded-lg transition-colors ${showSettings ? "text-[#e9a00a] bg-[#e9a00a]/10" : "text-slate-400 hover:text-white"}`}
            title="Settings"
            data-testid="button-audio-settings"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
            title="Close player"
            data-testid="button-audio-close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Settings panel */}
      {showSettings && (
        <div className="px-4 py-3 bg-[#111d35] border-b border-[#e9a00a]/10 space-y-3">
          {/* Mode toggle */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-xs w-16 flex-shrink-0">Quality</span>
            <div className="flex rounded-lg overflow-hidden border border-slate-700 text-xs">
              <button
                onClick={() => setMode("browser")}
                className={`px-3 py-1.5 flex items-center gap-1 transition-colors ${mode === "browser" ? "bg-[#e9a00a] text-black font-semibold" : "text-slate-300 hover:text-white"}`}
                data-testid="button-mode-browser"
              >
                <Volume2 className="w-3 h-3" /> Browser (free)
              </button>
              <button
                onClick={() => setMode("hd")}
                className={`px-3 py-1.5 flex items-center gap-1 transition-colors ${mode === "hd" ? "bg-[#e9a00a] text-black font-semibold" : "text-slate-300 hover:text-white"}`}
                data-testid="button-mode-hd"
              >
                <Zap className="w-3 h-3" /> HD (OpenAI)
              </button>
            </div>
          </div>

          {/* Speed */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-xs w-16 flex-shrink-0">Speed</span>
            <div className="flex gap-1">
              {SPEEDS.map((s, i) => (
                <button
                  key={s}
                  onClick={() => {
                    setSpeedIdx(i);
                    speedRef.current = s;
                    if (hdAudioRef.current) hdAudioRef.current.playbackRate = s;
                  }}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${speedIdx === i ? "bg-[#e9a00a] text-black font-bold" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`}
                  data-testid={`button-speed-${s}`}
                >
                  {s}×
                </button>
              ))}
            </div>
          </div>

          {/* Browser voice selector */}
          {mode === "browser" && browserVoices.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-xs w-16 flex-shrink-0">Voice</span>
              <select
                value={voiceIdx}
                onChange={(e) => setVoiceIdx(Number(e.target.value))}
                className="flex-1 bg-slate-700 text-white text-xs rounded px-2 py-1.5 border border-slate-600 focus:outline-none focus:border-[#e9a00a]"
                data-testid="select-browser-voice"
              >
                {browserVoices.map((v, i) => (
                  <option key={v.name} value={i}>
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* HD voice selector */}
          {mode === "hd" && (
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-xs w-16 flex-shrink-0">Voice</span>
              <div className="flex flex-wrap gap-1">
                {HD_VOICES.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setHdVoice(v.id)}
                    className={`px-2 py-1 rounded text-[10px] transition-colors ${hdVoice === v.id ? "bg-[#e9a00a] text-black font-semibold" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`}
                    data-testid={`button-hd-voice-${v.id}`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Current sentence */}
      <div className="px-4 py-3 min-h-[52px] flex items-center">
        {error ? (
          <p className="text-amber-400 text-xs">{error}</p>
        ) : hdLoading ? (
          <div className="flex items-center gap-2 text-[#e9a00a] text-xs">
            <span className="animate-spin inline-block w-3 h-3 border border-[#e9a00a] border-t-transparent rounded-full" />
            Generating HD audio…
          </div>
        ) : currentSentence ? (
          <p className="text-slate-200 text-xs leading-relaxed line-clamp-2">
            {currentSentence}
          </p>
        ) : (
          <p className="text-slate-500 text-xs">Press play to start listening</p>
        )}
      </div>

      {/* Progress bar */}
      {sentences.length > 0 && (
        <div className="px-4 pb-1">
          <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#e9a00a] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 px-4 py-3">
        <button
          onClick={handleBack}
          className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          title="Previous sentence"
          data-testid="button-audio-back"
        >
          <SkipBack className="w-4 h-4" />
        </button>

        {isPlaying ? (
          <button
            onClick={handlePause}
            className="p-3 rounded-full bg-[#e9a00a] text-black hover:bg-[#e9a00a]/90 transition-all shadow-lg"
            title="Pause"
            data-testid="button-audio-pause"
          >
            <Pause className="w-5 h-5" />
          </button>
        ) : isPaused ? (
          <button
            onClick={handleResume}
            className="p-3 rounded-full bg-[#e9a00a] text-black hover:bg-[#e9a00a]/90 transition-all shadow-lg"
            title="Resume"
            data-testid="button-audio-resume"
          >
            <Play className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handlePlay}
            className="p-3 rounded-full bg-[#e9a00a] text-black hover:bg-[#e9a00a]/90 transition-all shadow-lg"
            title="Play"
            data-testid="button-audio-play"
          >
            <Play className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={handleForward}
          className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          title="Next sentence"
          data-testid="button-audio-forward"
        >
          <SkipForward className="w-4 h-4" />
        </button>

        <button
          onClick={handleStop}
          className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          title="Stop"
          data-testid="button-audio-stop"
        >
          <Square className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-slate-700 mx-1" />

        <button
          onClick={() => {
            handleStop();
            handleOpen();
          }}
          className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          title="Re-scan page"
          data-testid="button-audio-rescan"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>

      {/* Mode indicator */}
      <div className="px-4 pb-2.5 flex items-center justify-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-green-400 animate-pulse" : isPaused ? "bg-amber-400" : "bg-slate-600"}`} />
        <span className="text-slate-500 text-[10px] font-mono">
          {mode === "hd" ? "OpenAI HD" : "Browser Voice"} · {SPEEDS[speedIdx]}×
          {isPlaying ? " · Playing" : isPaused ? " · Paused" : " · Ready"}
        </span>
      </div>
    </div>
  );
}
