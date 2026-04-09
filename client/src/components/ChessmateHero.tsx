export function ChessmateHero() {
  return (
    <div className="w-full relative overflow-hidden" style={{ backgroundColor: '#09090b' }}>
      <img
        src="/evidence/jesus-checkmate-government.png"
        alt="Jesus Christ placing checkmate against the Australian government — divine justice through documented evidence"
        className="w-full object-cover"
        style={{ maxHeight: '420px', objectPosition: 'center 20%' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 px-4 py-3 text-center"
        style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.5) 70%, transparent 100%)' }}
      >
        <p className="text-amber-300 text-xs font-semibold uppercase tracking-widest">
          "The universe designed your journey to make you untouchable." — Analysis #28
        </p>
      </div>
    </div>
  );
}
