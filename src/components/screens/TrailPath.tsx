type Props = {
  currentDay?: number; // default 1
};

/** Curved winding mountain trail with 7 day dots and peaks behind.
 *  Designed for the Day 1 completion screen (dark bg). */
export function TrailPath({ currentDay = 1 }: Props) {
  const w = 300;
  const h = 260;

  // 7 points along a winding trail, bottom-left -> top-right
  const pts: { x: number; y: number }[] = [
    { x: 38,  y: 226 }, // D1
    { x: 78,  y: 198 }, // D2
    { x: 118, y: 178 }, // D3 (small peak nearby)
    { x: 158, y: 152 }, // D4
    { x: 198, y: 122 }, // D5 (medium peak nearby)
    { x: 232, y: 92  }, // D6
    { x: 262, y: 50  }, // D7 (largest peak with flag)
  ];

  // Smooth curve through points using quadratic midpoints
  const trailD = (() => {
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const cur = pts[i];
      // control point offset to make it wind
      const cx = (prev.x + cur.x) / 2 + (i % 2 === 0 ? -14 : 14);
      const cy = (prev.y + cur.y) / 2 + (i % 2 === 0 ? 8 : -8);
      d += ` Q ${cx} ${cy} ${cur.x} ${cur.y}`;
    }
    return d;
  })();

  const stroke = "hsl(0 0% 100% / 0.55)";
  const dotEmpty = "hsl(0 0% 100% / 0.28)";
  const dotInk = "hsl(0 0% 100%)";
  const peakStroke = "hsl(0 0% 100% / 0.22)";
  const peakFill = "hsl(0 0% 100% / 0.05)";

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" aria-hidden>
      {/* Mountain peaks (behind trail) */}
      {/* Day 3 — small peak */}
      <polygon
        points="92,182 118,148 144,182"
        fill={peakFill}
        stroke={peakStroke}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Day 5 — medium peak */}
      <polygon
        points="160,128 198,68 236,128"
        fill={peakFill}
        stroke={peakStroke}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* tiny snowcap shadow */}
      <polyline
        points="186,84 198,68 210,84"
        fill="none"
        stroke="hsl(0 0% 100% / 0.35)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Day 7 — largest peak with flag */}
      <polygon
        points="208,108 262,12 296,108"
        fill={peakFill}
        stroke={peakStroke}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <polyline
        points="246,32 262,12 278,32"
        fill="none"
        stroke="hsl(0 0% 100% / 0.4)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* flag at top of D7 peak */}
      <line x1="262" y1="12" x2="262" y2="-2" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" />
      <polygon points="262,-2 274,2 262,6" fill={dotInk} opacity="0.85" />

      {/* Trail line */}
      <path
        d={trailD}
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0"
      />

      {/* Day dots + labels */}
      {pts.map((p, i) => {
        const day = i + 1;
        const isCurrent = day === currentDay;
        return (
          <g key={day}>
            {isCurrent ? (
              <>
                <circle cx={p.x} cy={p.y} r={14} fill={dotInk} fillOpacity="0.08" />
                <circle cx={p.x} cy={p.y} r={9} fill={dotInk} fillOpacity="0.16" />
                <circle cx={p.x} cy={p.y} r={5} fill={dotInk}>
                  <animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0.85;1" dur="2s" repeatCount="indefinite" />
                </circle>
              </>
            ) : (
              <circle
                cx={p.x}
                cy={p.y}
                r={4}
                fill="hsl(0 0% 0%)"
                stroke={dotEmpty}
                strokeWidth="1.25"
              />
            )}
            <text
              x={p.x}
              y={p.y + (day === 1 ? 22 : -12)}
              textAnchor="middle"
              fontSize="9"
              fill={isCurrent ? dotInk : "hsl(0 0% 100% / 0.45)"}
              fontWeight={isCurrent ? 600 : 400}
              fontFamily="Poppins, system-ui, sans-serif"
            >
              D{day}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
