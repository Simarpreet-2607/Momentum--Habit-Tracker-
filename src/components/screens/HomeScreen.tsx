import { Check, GlassWater, BookOpen, Salad } from "lucide-react";
import { useState } from "react";
import { MountainPath } from "./MountainPath";

type Habit = {
  id: string;
  name: string;
  detail: string;
  streak: number;
  Icon: React.ComponentType<{ className?: string }>;
  glyph: string;
};

const HABITS: Habit[] = [
  { id: "water", name: "Drink Water", detail: "8 glasses", streak: 3, Icon: GlassWater, glyph: "💧" },
  { id: "study", name: "Study", detail: "2 hours", streak: 3, Icon: BookOpen, glyph: "📚" },
  { id: "eat",   name: "Eat Clean", detail: "Whole foods", streak: 2, Icon: Salad, glyph: "🥗" },
];

export function HomeScreen() {
  const [logged, setLogged] = useState<Record<string, boolean>>({ water: true });

  const toggle = (id: string) =>
    setLogged((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="screen-scroll bg-surface text-surface-foreground animate-screen-in">
      {/* Status bar spacer (notch handled outside) */}
      <div className="h-14" />

      <div className="px-6 pt-4 pb-2">
        <p className="text-[11px] uppercase tracking-[0.18em] text-ink-faint font-medium">
          Saturday · May 2
        </p>
        <h1 className="font-display mt-3 text-[34px] leading-[1.05] font-bold text-ink">
          Good morning,<br />Simar.
        </h1>
        <p className="mt-2 text-sm text-ink-soft">Day 3 of your journey</p>
      </div>

      {/* Habit cards */}
      <div className="px-5 mt-6 space-y-3">
        {HABITS.map((h) => {
          const on = !!logged[h.id];
          return (
            <div
              key={h.id}
              className="flex items-center justify-between rounded-3xl bg-card-muted px-5 py-4 border border-hairline/60"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-surface flex items-center justify-center text-xl shadow-[0_1px_0_hsl(0_0%_100%/0.6)_inset,0_1px_2px_hsl(0_0%_0%/0.04)]">
                  <span aria-hidden>{h.glyph}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-display text-[17px] font-semibold leading-tight text-ink truncate">
                    {h.name}
                  </p>
                  <p className="text-xs text-ink-soft mt-0.5">
                    {h.detail} · <span className="text-ink-faint">{h.streak}-day streak</span>
                  </p>
                </div>
              </div>
              <button
                aria-label={`Log ${h.name}`}
                aria-pressed={on}
                onClick={() => toggle(h.id)}
                data-on={on}
                className="tap-ring"
              >
                <Check className="tap-check" size={20} strokeWidth={3} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Mountain journey strip */}
      <div className="mx-5 mt-7 rounded-3xl bg-card border border-hairline/70 p-5">
        <div className="flex items-center justify-between">
          <p className="font-display text-[13px] font-semibold text-ink tracking-tight">
            Week 1 — your climb
          </p>
          <p className="text-[11px] text-ink-faint">Day 3 of 7</p>
        </div>
        <div className="mt-3">
          <MountainPath currentDay={3} />
        </div>
      </div>

      {/* Social proof banner */}
      <div className="mx-5 mt-4 mb-10 rounded-3xl bg-foreground text-background px-5 py-4">
        <p className="font-display text-[15px] leading-snug font-medium text-balance">
          Most people quit at Day 5.
        </p>
        <p className="text-[13px] text-background/65 mt-1">
          You’re ahead of 70% of users.
        </p>
      </div>
    </div>
  );
}
