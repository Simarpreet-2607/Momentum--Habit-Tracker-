import { useMemo } from "react";

type Piece = { left: number; delay: number; dur: number; tx: number; rot: number; size: number; gold: boolean; };

function useConfetti(count = 60): Piece[] {
  return useMemo(() => {
    const seed = (i: number) => Math.sin(i * 9301 + 49297) * 233280;
    const r = (i: number) => Math.abs(seed(i) - Math.floor(seed(i)));
    return Array.from({ length: count }, (_, i) => ({
      left: r(i) * 100,
      delay: r(i + 1) * 2.5,
      dur: 3 + r(i + 2) * 2.5,
      tx: (r(i + 3) - 0.5) * 120,
      rot: (r(i + 4) - 0.5) * 1080,
      size: 4 + r(i + 5) * 5,
      gold: r(i + 6) > 0.55,
    }));
  }, [count]);
}

export function Confetti() {
  const pieces = useConfetti(70);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 rounded-[2px]"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.6}px`,
            background: p.gold ? "hsl(var(--gold))" : "hsl(0 0% 100%)",
            opacity: 0.95,
            ["--tx" as string]: `${p.tx}px`,
            ["--rot" as string]: `${p.rot}deg`,
            animation: `confetti-fall ${p.dur}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
