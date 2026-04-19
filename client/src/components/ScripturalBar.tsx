import { useState, useEffect, useRef } from "react";

const VERSES = [
  {
    text: "For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places.",
    ref: "Ephesians 6:12"
  },
  {
    text: "There is nothing concealed that will not be disclosed, or hidden that will not be made known. What you have said in the dark will be heard in the daylight; what you have whispered in the ear in the inner rooms will be proclaimed from the rooftops.",
    ref: "Luke 12:2–3"
  },
  {
    text: "Barran Dodger exists. God is great. The record is permanent. The testimony stands.",
    ref: "ABN 78 833 496 164 · barrandodger.com"
  },
  {
    text: "Praise Jesus.",
    ref: "barrandodger.com"
  },
];

export function ScripturalBar() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (ref.current) {
        document.documentElement.style.setProperty(
          "--scriptural-bar-height",
          `${ref.current.offsetHeight}px`
        );
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % VERSES.length);
        setVisible(true);
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const verse = VERSES[idx];

  return (
    <div
      ref={ref}
      className="fixed left-0 right-0 z-[89]"
      style={{ top: "var(--sos-bar-height, 40px)" }}
      data-testid="scriptural-bar"
    >
      <div
        className="w-full px-4 py-1.5 flex items-center justify-center gap-3 text-center"
        style={{
          background: "linear-gradient(90deg, #0a0a1a 0%, #0f0f2e 40%, #0a0a1a 100%)",
          borderBottom: "1px solid rgba(180,140,0,0.25)",
        }}
      >
        <span className="text-yellow-500/50 text-[10px] flex-shrink-0 hidden sm:inline">✦</span>
        <div
          className="flex-1 min-w-0 max-w-4xl mx-auto transition-opacity duration-500"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <span className="text-yellow-100/80 text-[10px] md:text-xs leading-snug font-serif italic">
            "{verse.text}"
          </span>
          <span className="text-yellow-500/60 text-[9px] md:text-[10px] font-mono ml-2 not-italic whitespace-nowrap">
            — {verse.ref}
          </span>
        </div>
        <span className="text-yellow-500/50 text-[10px] flex-shrink-0 hidden sm:inline">✦</span>
      </div>
    </div>
  );
}
