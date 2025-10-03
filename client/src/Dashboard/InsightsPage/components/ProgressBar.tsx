import type { BarProps } from "./interfaces";

export function ProgressBar({ value, label, tone = "neutral" }: BarProps) {
  const v = Math.max(0, Math.min(100, Math.round(value)));

  let fillColor = "orange"; // neutral fallback
  if (tone === "positive") fillColor = "green";
  else if (tone === "negative") fillColor = "red";

  return (
    <div className="w-full" role="group" aria-label={`${label} ${v} percent`}>
      <div className="flex items-center justify-between mb-2 text-gray-600 text-sm">
        <span>{label}</span>
        <span className="font-medium text-gray-100">{v}%</span>
      </div>
      <div
        className="h-2 w-full rounded-full bg-gray-300"
        role="meter"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={v}
        aria-label={label}
      >
        <div
          className="h-2 rounded-full transition-[width] duration-500 ease-out"
          style={{ width: `${v}%`, backgroundColor: fillColor }}
        />
      </div>
    </div>
  );
}
