interface PullQuoteProps {
  quote: string;
  source: string;
  accent?: "gold" | "purple" | "green";
}

const ACCENT_STYLES = {
  gold: {
    border: "#e9a00a",
    quote: "rgba(233,160,10,0.9)",
    source: "rgba(233,160,10,0.5)",
    bg: "rgba(233,160,10,0.04)",
  },
  purple: {
    border: "#c084fc",
    quote: "rgba(220,235,255,0.9)",
    source: "rgba(192,132,252,0.6)",
    bg: "rgba(168,85,247,0.04)",
  },
  green: {
    border: "#84cc16",
    quote: "rgba(220,235,255,0.9)",
    source: "rgba(132,204,22,0.6)",
    bg: "rgba(132,204,22,0.04)",
  },
};

export function PullQuote({ quote, source, accent = "gold" }: PullQuoteProps) {
  const s = ACCENT_STYLES[accent];
  return (
    <blockquote
      className="my-10 mx-auto max-w-2xl rounded-xl px-8 py-6 relative"
      style={{ background: s.bg, borderLeft: `4px solid ${s.border}` }}
      data-testid="pull-quote"
    >
      <svg
        className="absolute top-4 left-4 opacity-20"
        width="28" height="22" viewBox="0 0 28 22" fill="none"
        aria-hidden="true"
      >
        <path d="M0 22V13.2C0 5.906 4.667 1.54 14 0l1.4 2.2C9.8 3.373 6.767 6.293 6.3 10.56H12V22H0zm16 0V13.2C16 5.906 20.667 1.54 30 0l1.4 2.2C25.8 3.373 22.767 6.293 22.3 10.56H28V22H16z"
          fill={s.border} />
      </svg>
      <p
        className="font-serif text-xl md:text-2xl font-bold leading-relaxed pl-4"
        style={{ color: s.quote }}
      >
        "{quote}"
      </p>
      <footer className="mt-4 pl-4">
        <cite
          className="not-italic font-mono text-[10px] uppercase tracking-[0.25em]"
          style={{ color: s.source }}
        >
          {source}
        </cite>
      </footer>
    </blockquote>
  );
}
