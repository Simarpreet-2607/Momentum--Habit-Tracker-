import { Confetti } from "./Confetti";

export function Day7Screen() {
  return (
    <div className="relative h-full w-full bg-foreground text-background animate-screen-in overflow-hidden">
      <Confetti />

      <div className="relative h-full flex flex-col px-7 pt-20 pb-10">
        <p className="text-[11px] uppercase tracking-[0.22em] text-background/55 text-center">
          Week 1 · Summit reached
        </p>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {/* Mountain illustration */}
          <SummitMountain />

          <h1 className="font-display mt-6 text-[40px] leading-[1.02] font-bold tracking-tight text-balance animate-fade-up">
            You summited<br />Week 1.
          </h1>
          <p className="mt-4 text-[14px] text-background/65 max-w-[280px] text-balance animate-fade-up"
             style={{ animationDelay: "120ms" }}>
            A real habit is forming. Most people never make it here.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 animate-fade-up"
               style={{ animationDelay: "200ms" }}>
            {[
              { g: "💧", l: "Water" },
              { g: "📚", l: "Study" },
              { g: "🥗", l: "Eat Clean" },
              { g: "🧘", l: "Mindful" },
            ].map((c) => (
              <span key={c.l} className="inline-flex items-center gap-1.5 rounded-full bg-background/10 border border-background/15 px-3 py-1.5 text-[12px]">
                <span aria-hidden>{c.g}</span>
                <span className="text-background/85">{c.l}</span>
              </span>
            ))}
          </div>
        </div>

        <button className="btn-pill-light w-full font-semibold">
          Start Week 2
        </button>
      </div>
    </div>
  );
}

function SummitMountain() {
  return (
    <svg viewBox="0 0 200 130" className="w-[200px] h-[130px]" aria-hidden>
      {/* mountain filled */}
      <polygon
        points="20,115 80,55 110,80 140,40 180,115"
        fill="hsl(0 0% 100%)"
        opacity="0.95"
      />
      {/* snowcap shadow */}
      <polygon
        points="80,55 90,68 75,80 70,75"
        fill="hsl(0 0% 0% / 0.15)"
      />
      <polygon
        points="140,40 150,58 132,68 128,55"
        fill="hsl(0 0% 0% / 0.18)"
      />
      {/* flagpole */}
      <line x1="140" y1="40" x2="140" y2="22" stroke="hsl(0 0% 0%)" strokeWidth="1.6" strokeLinecap="round" />
      <polygon points="140,22 154,26 140,30" fill="hsl(var(--gold))" />
      {/* avatar dot at peak */}
      <circle cx="140" cy="36" r="3.5" fill="hsl(var(--gold))" />
      <circle cx="140" cy="36" r="6" fill="hsl(var(--gold) / 0.25)" />
    </svg>
  );
}
