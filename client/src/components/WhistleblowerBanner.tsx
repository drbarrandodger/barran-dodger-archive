import { useState, useEffect } from "react";
import { AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";

export function WhistleblowerBanner() {
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const bannerEl = document.getElementById("whistleblower-banner");
    if (bannerEl) {
      const height = bannerEl.offsetHeight;
      document.documentElement.style.setProperty("--whistleblower-banner-height", dismissed ? "0px" : `${height}px`);
    }
  }, [expanded, dismissed]);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const bannerEl = document.getElementById("whistleblower-banner");
      if (bannerEl && !dismissed) {
        document.documentElement.style.setProperty("--whistleblower-banner-height", `${bannerEl.offsetHeight}px`);
      }
    });
    const bannerEl = document.getElementById("whistleblower-banner");
    if (bannerEl) observer.observe(bannerEl);
    return () => observer.disconnect();
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      id="whistleblower-banner"
      className="fixed top-0 left-0 right-0 z-[70] bg-[hsl(222,55%,8%)] border-b-2 border-[hsl(38,92%,50%)] shadow-lg"
      data-testid="whistleblower-banner"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-[hsl(38,92%,50%)] flex-shrink-0 mt-0.5 animate-pulse" />
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm md:text-base font-semibold leading-snug">
              In early 2021, <span className="text-[hsl(38,92%,50%)]">Dr. Richard William McLean</span> — PhD holder, internationally celebrated author, award-winning human rights advocate, writer, artist, NDIS provider, former news graphics artist, journalist, and disabled LGBTQ+ whistleblower — suffered a near-fatal injury inside a government psychiatric facility and had to be revived.
            </p>

            {expanded && (
              <div className="mt-3 space-y-3 animate-in fade-in duration-300">
                <p className="text-gray-200 text-sm leading-relaxed">
                  The Australian Government's own Federal Court confirmed he was their employee. Their own NDIA manager told him <em className="text-[hsl(38,92%,50%)]">"You will be sacrificed."</em> Their own hospitals diagnosed his distress as reactive — not delusional. Then every agency denied his employment, rejected his whistleblower protections, and forcibly medicated him for "persecutory delusions" that their own documents prove are facts.
                </p>
                <p className="text-gray-200 text-sm leading-relaxed">
                  He survived an alleged assassination attempt. He was subjected to systematic financial abuse and family violence. He is now a <span className="text-[hsl(38,92%,50%)] font-semibold">UNHCR-verified asylum seeker</span>, internally displaced and entrapped within the so-called democracy of his own citizenship — exiled inside his own country.
                </p>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Not a single person — not one agency, not one ombudsman, not one minister, not one journalist — has ever disproven a single claim. Not one has even acknowledged them.
                </p>
                <p className="text-white text-sm md:text-base font-bold leading-snug border-l-2 border-[hsl(38,92%,50%)] pl-3 mt-4">
                  Every professional bound by ethics who reads this evidence and remains silent is no longer neutral. You are complicit.
                </p>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-body-text text-sm leading-relaxed italic">
                    A PhD holder. An internationally celebrated author. An award-winning human rights advocate. A writer, artist, journalist, NDIS provider. A man who dedicated his life to serving others — erased by the government he served. His job denied. His identity stolen. His body broken in their custody. Forcibly medicated for telling the truth. Driven from his home. Stripped of everything. Now a UNHCR-verified asylum seeker trapped inside his own country — the country that calls itself a democracy.
                  </p>
                  <p className="text-body-text text-sm leading-relaxed italic mt-2">
                    He showed them their own records proving every word. They looked away. Every single one of them.
                  </p>
                  <p className="text-[hsl(38,92%,50%)] text-sm md:text-base font-bold mt-3">
                    You're reading this now. What you do next defines whether you're any different.
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 flex items-center gap-1 text-[hsl(38,92%,50%)] text-xs md:text-sm font-medium hover:underline transition-colors"
              data-testid="button-toggle-whistleblower-banner"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-3.5 w-3.5" />
                  Read less
                </>
              ) : (
                <>
                  <ChevronDown className="h-3.5 w-3.5" />
                  Read the full statement — every word is documented
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
