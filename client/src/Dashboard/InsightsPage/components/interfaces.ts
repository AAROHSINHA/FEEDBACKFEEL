export interface FeedbackCardProps {
  overallPercent: number;
  overallLabel?: string;
  totalFeedbacks: number;
  positivePercent: number;
  neutralPercent: number;
  negativePercent: number;
  spamFeedbacks: number;
  className?: string;
}

export interface PercentageCircleProps {
  value: number; // 0-100
  size?: number; // px
  strokeWidth?: number; // px
  className?: string;
  label?: string; // optional aria label
  trackColor?: string;
  progressColor?: string;
}

export interface BarProps {
  value: number; // 0-100
  label: string;
  tone?: "positive" | "neutral" | "negative";
}
