/**
 * Inline SVG chart thumbnails for projects that don't have a screenshot.
 * Each chart is purely decorative but visually communicates the project domain.
 * All SVG elements include aria-hidden so screen readers skip them.
 */

interface ChartProps {
  className?: string;
}

/** Bar chart — used for SAP Inventory (stock levels) */
export function InventoryBarChart({ className = "" }: ChartProps) {
  const bars = [65, 40, 80, 55, 90, 45, 70, 60, 85, 50];
  const maxH = 80;
  const w = 28;
  const gap = 6;
  const totalW = bars.length * (w + gap) - gap;

  return (
    <svg
      viewBox={`0 0 ${totalW + 20} 120`}
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="inv-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="inv-bar-low" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[0, 25, 50, 75, 100].map((pct) => (
        <line
          key={pct}
          x1="10"
          y1={10 + (maxH * (100 - pct)) / 100}
          x2={totalW + 10}
          y2={10 + (maxH * (100 - pct)) / 100}
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
      ))}
      {bars.map((val, i) => {
        const barH = (val / 100) * maxH;
        const x = 10 + i * (w + gap);
        const y = 10 + maxH - barH;
        const isLow = val < 50;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={barH}
            rx="4"
            fill={isLow ? "url(#inv-bar-low)" : "url(#inv-bar)"}
          />
        );
      })}
      {/* X-axis label */}
      <text x={totalW / 2 + 10} y="115" textAnchor="middle" fontSize="9" fill="currentColor" fillOpacity="0.4">
        Inventory Stock Levels by SKU
      </text>
    </svg>
  );
}

/** Donut / pie chart — used for Sentiment Analysis */
export function SentimentDonutChart({ className = "" }: ChartProps) {
  // Positive 62%, Neutral 23%, Negative 15%
  const segments = [
    { pct: 62, color: "#10b981", label: "Positive" },
    { pct: 23, color: "#f59e0b", label: "Neutral" },
    { pct: 15, color: "#ef4444", label: "Negative" },
  ];

  const cx = 60;
  const cy = 60;
  const r = 44;
  const innerR = 26;

  let cumulative = 0;
  const paths = segments.map((seg) => {
    const startAngle = (cumulative / 100) * 2 * Math.PI - Math.PI / 2;
    cumulative += seg.pct;
    const endAngle = (cumulative / 100) * 2 * Math.PI - Math.PI / 2;

    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const ix1 = cx + innerR * Math.cos(endAngle);
    const iy1 = cy + innerR * Math.sin(endAngle);
    const ix2 = cx + innerR * Math.cos(startAngle);
    const iy2 = cy + innerR * Math.sin(startAngle);

    const largeArc = seg.pct > 50 ? 1 : 0;
    const d = [
      `M ${x1} ${y1}`,
      `A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`,
      `L ${ix1} ${iy1}`,
      `A ${innerR} ${innerR} 0 ${largeArc} 0 ${ix2} ${iy2}`,
      "Z",
    ].join(" ");

    return { d, color: seg.color, label: seg.label, pct: seg.pct };
  });

  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true" role="img">
      {paths.map((p) => (
        <path key={p.label} d={p.d} fill={p.color} fillOpacity="0.85" />
      ))}
      {/* Center text */}
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor">
        62%
      </text>
      <text x={cx} y={cy + 9} textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.6">
        Positive
      </text>
      {/* Legend */}
      {segments.map((seg, i) => (
        <g key={seg.label} transform={`translate(120, ${20 + i * 22})`}>
          <rect width="10" height="10" rx="2" fill={seg.color} fillOpacity="0.85" />
          <text x="14" y="9" fontSize="8" fill="currentColor" fillOpacity="0.7">
            {seg.label} {seg.pct}%
          </text>
        </g>
      ))}
      <text x="80" y="115" textAnchor="middle" fontSize="8" fill="currentColor" fillOpacity="0.4">
        Sentiment Distribution
      </text>
    </svg>
  );
}

/** Line chart — used for Financial Dashboard (revenue trend) */
export function FinancialLineChart({ className = "" }: ChartProps) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const revenue = [42, 55, 48, 63, 70, 65, 78, 82, 75, 90, 88, 95];
  const budget = [50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72];

  const chartW = 260;
  const chartH = 80;
  const padL = 10;
  const padT = 10;

  const toX = (i: number) => padL + (i / (months.length - 1)) * chartW;
  const toY = (v: number) => padT + chartH - ((v - 30) / 70) * chartH;

  const revPath = revenue.map((v, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(v)}`).join(" ");
  const budPath = budget.map((v, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(v)}`).join(" ");
  const areaPath = `${revPath} L ${toX(11)} ${padT + chartH} L ${toX(0)} ${padT + chartH} Z`;

  return (
    <svg viewBox="0 0 280 120" className={className} aria-hidden="true" role="img">
      <defs>
        <linearGradient id="fin-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {/* Grid */}
      {[0, 25, 50, 75, 100].map((pct) => (
        <line
          key={pct}
          x1={padL}
          y1={padT + (chartH * (100 - pct)) / 100}
          x2={padL + chartW}
          y2={padT + (chartH * (100 - pct)) / 100}
          stroke="currentColor"
          strokeOpacity="0.07"
          strokeWidth="1"
        />
      ))}
      {/* Area fill */}
      <path d={areaPath} fill="url(#fin-area)" />
      {/* Budget line */}
      <path d={budPath} fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.7" />
      {/* Revenue line */}
      <path d={revPath} fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Data points */}
      {revenue.map((v, i) => (
        <circle key={i} cx={toX(i)} cy={toY(v)} r="2.5" fill="#0ea5e9" />
      ))}
      {/* Month labels (every 3) */}
      {months.filter((_, i) => i % 3 === 0).map((m, i) => (
        <text key={m} x={toX(i * 3)} y={padT + chartH + 12} textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.45">
          {m}
        </text>
      ))}
      {/* Legend */}
      <g transform="translate(10, 105)">
        <line x1="0" y1="4" x2="12" y2="4" stroke="#0ea5e9" strokeWidth="2" />
        <text x="15" y="8" fontSize="7" fill="currentColor" fillOpacity="0.6">Revenue</text>
        <line x1="60" y1="4" x2="72" y2="4" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="75" y="8" fontSize="7" fill="currentColor" fillOpacity="0.6">Budget</text>
      </g>
    </svg>
  );
}
