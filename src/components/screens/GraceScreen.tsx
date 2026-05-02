import { useState } from "react";

export function GraceScreen() {
  const [used, setUsed] = useState(false);
  return (
    <div className="relative h-full w-full bg-card-muted text-ink animate-screen-in overflow-hidden">
      <div className="h-full flex flex-col px-7 pt-20 pb-10">
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink-faint">
            Grace day
          </p>
          {used && (
            <span className="rounded-full bg-foreground text-background text-[10px] font-medium px-2.5 py-1 uppercase tracking-wider">
              Grace day used
            </span>
          )}
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <RestStop />

          <h1 className="font-display mt-8 text-[36px] leading-[1.05] font-bold tracking-tight text-balance">
            Even climbers rest.
          </h1>
          <p className="mt-3 text-[15px] text-ink-soft max-w-[280px] text-balance">
            Your streak is safe. Come back tomorrow and keep going.
          </p>
        </div>

        <button
          onClick={() => setUsed(true)}
          disabled={used}
          className="btn-pill-dark w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {used ? "See you tomorrow" : "I’ll be back tomorrow"}
        </button>
      </div>
    </div>
  );
}

function RestStop() {
  return (
    <svg viewBox="0 0 260 120" className="w-[260px] h-[120px]" aria-hidden>
      {/* path */}
      <path
        d="M5,95 Q70,75 110,85 T255,70"
        fill="none"
        stroke="hsl(var(--ink) / 0.35)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 5"
      />
      {/* small mountain silhouette behind */}
      <polygon
        points="150,80 200,30 250,80"
        fill="hsl(var(--ink) / 0.08)"
      />
      <polyline
        points="150,80 200,30 250,80"
        fill="none"
        stroke="hsl(var(--ink) / 0.45)"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />

      {/* tent at rest stop */}
      <g transform="translate(85,55)">
        <polygon points="0,30 18,0 36,30" fill="hsl(var(--ink))" />
        <polygon points="14,30 18,18 22,30" fill="hsl(var(--card-muted))" />
      </g>

      {/* avatar (paused climber) */}
      <g transform="translate(70,72)">
        <circle cx="0" cy="0" r="6" fill="hsl(var(--ink))" />
        <circle cx="0" cy="0" r="9" fill="hsl(var(--ink) / 0.15)" />
      </g>
    </svg>
  );
}
