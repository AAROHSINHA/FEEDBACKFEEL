import { ProgressBar } from "./ProgressBar";
import { PercentageCircle } from "./PercentageCircle";
import type { FeedbackCardProps } from "./interfaces";
import { NumberStat } from "./NumberStat";

export function FeedbackCard({
  overallPercent,
  overallLabel = "Overall",
  totalFeedbacks,
  positivePercent,
  neutralPercent,
  negativePercent,
  spamFeedbacks,
  className,
}: FeedbackCardProps) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: "#1f1f1f",
        color: "#4b5563", // gray-600
        borderRadius: "0.5rem",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      {/* Percentage circle + label */}
      <div className="flex flex-col items-center gap-3">
        <PercentageCircle
          value={overallPercent}
          label={`${overallLabel} percentage`}
          trackColor="#ddd"
          progressColor="green"
        />
        <p className="text-sm text-gray-600 text-center">{overallLabel}</p>
      </div>

      {/* Stats section */}
      <div className="mt-6 grid gap-5">
        <NumberStat title="Total Feedbacks" value={totalFeedbacks} />

        <ProgressBar
          label="Positive Feedbacks"
          value={positivePercent}
          tone="positive"
        />
        <ProgressBar
          label="Neutral Feedbacks"
          value={neutralPercent}
          tone="neutral"
        />
        <ProgressBar
          label="Negative Feedbacks"
          value={negativePercent}
          tone="negative"
        />

        <NumberStat title="Potential Spam Encoutered" value={spamFeedbacks} />
      </div>
    </div>
  );
}
