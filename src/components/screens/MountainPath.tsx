type Props = {
  currentDay: number; // 1..7
  variant?: "light" | "dark";
};

/** Small horizontal mountain path, Day 1..7.
 *  Day 3 = small peak, Day 5 = bigger peak, Day 7 = tallest peak with flag. */
export function MountainPath({ currentDay, variant = "light" }: Props) {
  const w = 300;
  const h = 90;
  // x positions for 7 days
  const xs = Array.from({ length: 7 }, (_, i) => 18 + i * ((w - 36) / 6));
  // y baseline & peak heights per day
  const baseY = 70;
  const peakY: Record<number, number> = { 1: 64, 2: 58, 3: 44, 4: 50, 5: 28, 6: 36, 7: 12 };

  // Build path
  const points = xs.map((x, i) => `${x},${peakY[i + 1]}`).join(" ");

  const stroke = variant === "dark" ? "hsl(0 0% 100% / 0.55)" : "hsl(var(--ink) / 0.55)";
  const fillSoft = variant === "dark" ? "hsl(0 0% 100% / 0.06)" : "hsl(var(--ink) / 0.04)";
  const dotInk = variant === "dark" ? "hsl(0 0% 100%)" : "hsl(var(--ink))";
  const dotEmpty = variant === "dark" ? "hsl(0 0% 100% / 0.25)" : "hsl(var(--ink) / 0.22)";

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[90px]" aria-hidden>
        {/* soft mountain silhouette fill */}
        <polygon
          points={`0,${baseY} ${points} ${w},${baseY} ${w},${h} 0,${h}`}
          fill={fillSoft}
        />
        {/* ridge line */}
        <polyline
          points={points}
          fill="none"
          stroke={stroke}
          strokeWidth="1.25"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* flag at day 7 */}
        <g>
          <line x1={xs[6]} y1={peakY[7]} x2={xs[6]} y2={peakY[7] - 12} stroke={stroke} strokeWidth="1.25" strokeLinecap="round" />
          <polygon
            points={`${xs[6]},${peakY[7] - 12} ${xs[6] + 8},${peakY[7] - 9} ${xs[6]},${peakY[7] - 6}`}
            fill={dotInk}
          />
        </g>

        {/* day dots */}
        {xs.map((x, i) => {
          const day = i + 1;
          const y = peakY[day];
          const isCurrent = day === currentDay;
          const isDone = day < currentDay;
          return (
            <g key={day}>
              {isCurrent ? (
                <>
                  <circle cx={x} cy={y} r={8} fill={dotInk} fillOpacity="0.08" />
                  <circle cx={x} cy={y} r={4.5} fill={dotInk}>
                    <animate attributeName="r" values="4.5;5.5;4.5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.85;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                </>
              ) : isDone ? (
                <circle cx={x} cy={y} r={3.5} fill={dotInk} />
              ) : (
                <circle cx={x} cy={y} r={3.5} fill="none" stroke={dotEmpty} strokeWidth="1.25" />
              )}
            </g>
          );
        })}
      </svg>

      <div className="flex justify-between px-1 mt-1">
        {Array.from({ length: 7 }, (_, i) => {
          const day = i + 1;
          const isCurrent = day === currentDay;
          return (
            <span
              key={day}
              className={
                "text-[10px] tabular-nums " +
                (isCurrent
                  ? variant === "dark"
                    ? "text-background font-semibold"
                    : "text-ink font-semibold"
                  : variant === "dark"
                  ? "text-background/45"
                  : "text-ink-faint")
              }
            >
              D{day}
            </span>
          );
        })}
      </div>
    </div>
  );
}
