import type { PercentageCircleProps } from "./interfaces";

export function PercentageCircle({
  value,
  size = 120,
  strokeWidth = 12,
  className,
  label = "Overall percentage",
  trackColor = "var(--color-muted)",
  progressColor = "var(--color-primary)",
}: PercentageCircleProps) {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - v / 100);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        className || ""
      }`}
      role="img"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={v}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="block"
      >
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute text-center">
        {/* inherit parent text color for better contrast */}
        <div className="text-xl font-semibold" aria-hidden="true">
          {v}%
        </div>
        <span className="sr-only">{v} percent</span>
      </div>
    </div>
  );
}
