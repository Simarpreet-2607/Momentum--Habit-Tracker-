import { MountainPath } from "./MountainPath";

export function Day1Screen() {
  return (
    <div className="relative h-full w-full bg-foreground text-background animate-screen-in overflow-hidden">
      {/* subtle starfield-ish dots */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]"
           style={{
             backgroundImage:
               "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)",
             backgroundSize: "22px 22px",
           }} />

      <div className="relative h-full flex flex-col px-7 pt-24 pb-10">
        <p className="text-[11px] uppercase tracking-[0.22em] text-background/55 text-center">
          Day 1 · Complete
        </p>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="font-display text-[44px] leading-[1.02] font-bold tracking-tight text-balance animate-fade-up">
            You showed up.
          </h1>
          <p className="mt-5 text-[15px] text-background/65 max-w-[260px] text-balance animate-fade-up"
             style={{ animationDelay: "120ms" }}>
            Just 2 more days to a 3-day streak.
          </p>

          <div className="mt-12 w-full max-w-[280px] animate-fade-up" style={{ animationDelay: "200ms" }}>
            <MountainPath currentDay={1} variant="dark" />
          </div>
        </div>

        <div className="space-y-3">
          <button className="btn-pill-light w-full">
            Start Day 2 tomorrow
          </button>
          <p className="text-center text-xs text-background/50">
            We’ll remind you at your time.
          </p>
        </div>
      </div>
    </div>
  );
}
