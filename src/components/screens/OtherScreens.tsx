import { Plus, Battery, Wifi, Signal } from "lucide-react";
import { useState } from "react";

export function HabitLimitScreen() {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative h-full w-full bg-surface text-ink animate-screen-in overflow-hidden">
      {/* Faux dashboard behind */}
      <div className="h-14" />
      <div className="px-6">
        <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint font-medium">Today</p>
        <h1 className="font-display mt-3 text-[28px] leading-[1.05] font-bold text-ink">Your habits</h1>
      </div>
      <div className="px-5 mt-5 space-y-3">
        {["💧 Drink Water", "📚 Study", "🥗 Eat Clean"].map((t) => (
          <div key={t} className="flex items-center justify-between rounded-3xl bg-card-muted px-5 py-4 border border-hairline/60">
            <p className="font-display text-[15px] font-medium text-ink">{t}</p>
            <div className="tap-ring" />
          </div>
        ))}
        <button
          onClick={() => setOpen(true)}
          className="w-full mt-2 flex items-center justify-center gap-2 rounded-3xl border border-dashed border-ink/20 px-5 py-4 text-ink-soft text-[14px] font-medium hover:bg-card-muted transition"
        >
          <Plus size={16} /> Add habit
        </button>
      </div>

      {/* Scrim */}
      {open && (
        <div
          className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px] animate-fade-in"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Bottom sheet */}
      {open && (
        <div className="absolute inset-x-0 bottom-0 animate-sheet-up">
          <div className="bg-surface rounded-t-[28px] px-6 pt-3 pb-8 shadow-[0_-12px_40px_-12px_hsl(0_0%_0%/0.25)]">
            <div className="mx-auto h-1 w-10 rounded-full bg-ink/15 mb-5" />
            <h2 className="font-display text-[22px] font-bold leading-tight text-ink text-balance">
              Most successful users start with 1 to 3 habits.
            </h2>
            <p className="mt-2 text-[14px] text-ink-soft text-balance">
              Want to keep it focused for now?
            </p>

            <div className="mt-6 space-y-2">
              <button
                onClick={() => setOpen(false)}
                className="btn-pill-dark w-full"
              >
                Keep it focused
              </button>
              <button
                onClick={() => setOpen(false)}
                className="btn-pill-ghost w-full text-ink-soft text-[14px]"
              >
                Add anyway
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function NotificationsScreen() {
  return (
    <div
      className="relative h-full w-full text-background overflow-hidden animate-screen-in"
      style={{
        background:
          "linear-gradient(180deg, hsl(0 0% 6%) 0%, hsl(220 15% 14%) 100%)",
      }}
    >
      {/* status bar */}
      <div className="flex items-center justify-between px-8 pt-3 text-[12px] font-semibold">
        <span>9:41</span>
        <div className="flex items-center gap-1.5 opacity-90">
          <Signal size={14} />
          <Wifi size={14} />
          <Battery size={16} />
        </div>
      </div>

      {/* Lock screen time */}
      <div className="text-center mt-8">
        <p className="text-[13px] tracking-wider text-background/70 uppercase">Saturday, May 2</p>
        <p className="font-display text-[88px] leading-none font-light tracking-tight mt-1">
          9:41
        </p>
      </div>

      {/* Notifications */}
      <div className="mt-10 px-3 space-y-2.5">
        <NotifCard
          time="now"
          title="Summit"
          body="Your journey starts today. One tap to begin."
        />
        <NotifCard
          time="6m ago"
          title="Summit"
          body="Your streak is waiting. 60 seconds is all it takes."
        />
        <NotifCard
          time="1h ago"
          title="Summit"
          body="Even climbers rest. Your progress is safe — come back tomorrow."
        />
      </div>

      {/* bottom hint */}
      <div className="absolute bottom-6 inset-x-0 flex flex-col items-center gap-2 text-background/60">
        <p className="text-[12px]">Swipe up to open</p>
        <div className="h-1 w-32 rounded-full bg-background/40" />
      </div>
    </div>
  );
}

function NotifCard({ time, title, body }: { time: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-background/15 backdrop-blur-xl border border-background/15 px-4 py-3 text-background">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-background text-foreground flex items-center justify-center text-[11px] font-bold">
            S
          </div>
          <p className="text-[12px] font-semibold uppercase tracking-wider">{title}</p>
        </div>
        <span className="text-[11px] text-background/60">{time}</span>
      </div>
      <p className="mt-1.5 text-[14px] leading-snug text-background/95">{body}</p>
    </div>
  );
}
