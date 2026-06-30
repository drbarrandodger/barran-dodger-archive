function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function HighlightText({
  text,
  query,
  className = "",
}: {
  text: string;
  query: string;
  className?: string;
}) {
  if (!query.trim()) {
    return <span className={className}>{text}</span>;
  }
  const terms = query.trim().split(/\s+/).filter(Boolean);
  const pattern = terms.map(escapeRegex).join("|");
  const regex = new RegExp(`(${pattern})`, "gi");
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="rounded px-0.5 font-semibold not-italic" style={{ background: "rgba(132,204,22,0.25)", color: "#84cc16" }}>
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}
