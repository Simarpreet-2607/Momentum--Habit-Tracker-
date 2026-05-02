import { useState } from "react";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { Day1Screen } from "@/components/screens/Day1Screen";
import { Day7Screen } from "@/components/screens/Day7Screen";
import { GraceScreen } from "@/components/screens/GraceScreen";
import { HabitLimitScreen, NotificationsScreen } from "@/components/screens/OtherScreens";

type ScreenKey = "home" | "day1" | "day7" | "grace" | "limit" | "notif";

const SCREENS: { key: ScreenKey; label: string; sub: string }[] = [
  { key: "home",  label: "Home",         sub: "Dashboard" },
  { key: "day1",  label: "Day 1",        sub: "Showed up" },
  { key: "day7",  label: "Day 7",        sub: "Summit" },
  { key: "grace", label: "Grace",        sub: "Rest day" },
  { key: "limit", label: "Limit",        sub: "Add 4th" },
  { key: "notif", label: "Notifications", sub: "Lock screen" },
];

const Index = () => {
  const [active, setActive] = useState<ScreenKey>("home");

  return (
    <main className="min-h-screen w-full bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:py-14">
        {/* Header */}
        <header className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-ink text-balance">
              A minimal habit tracker, one mountain at a time.
            </h1>
            <p className="mt-2 text-sm text-ink-soft max-w-xl">
              Five screens & lock-screen notifications. Black, white, warm gray. Tap a chip to switch.
            </p>
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:items-start">
          {/* Screen switcher */}
          <nav aria-label="Screens" className="flex flex-wrap gap-2 lg:flex-col lg:gap-1.5">
            {SCREENS.map((s) => {
              const on = active === s.key;
              return (
                <button
                  key={s.key}
                  onClick={() => setActive(s.key)}
                  aria-pressed={on}
                  className={
                    "group flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all " +
                    (on
                      ? "bg-foreground text-background border-foreground"
                      : "bg-card text-ink border-hairline hover:border-ink/30")
                  }
                >
                  <div>
                    <p className="font-display text-[14px] font-semibold leading-tight">{s.label}</p>
                    <p className={"text-[11px] mt-0.5 " + (on ? "text-background/60" : "text-ink-faint")}>
                      {s.sub}
                    </p>
                  </div>
                  <span className={"text-[11px] tabular-nums " + (on ? "text-background/70" : "text-ink-faint")}>
                    0{SCREENS.findIndex((x) => x.key === s.key) + 1}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Phone */}
          <div className="flex justify-center lg:justify-start">
            <div className="iphone-frame">
              <div className="iphone-notch" />
              <div className="iphone-screen">
                {active === "home" && <HomeScreen />}
                {active === "day1" && <Day1Screen />}
                {active === "day7" && <Day7Screen />}
                {active === "grace" && <GraceScreen />}
                {active === "limit" && <HabitLimitScreen />}
                {active === "notif" && <NotificationsScreen />}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Index;
