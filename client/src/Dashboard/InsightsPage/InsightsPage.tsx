import { useInsightsStats } from "../Hooks/useInsightsStats";
import type { FeedbackDataInterface } from "../Types/types";
import { FeedbackCard } from "./components/FeedbackCard";
import FeedbackText from "./components/FeedbackText/FeedbackText";
const SAMPLE_LOGS = [
  {
    id: "1",
    text: "Loved the new dashboard layout, very intuitive!, Loved the new dashboard layout, very intuitive!, Loved the new dashboard layout, very intuitive!, Loved the new dashboard layout, very intuitive!, Loved the new dashboard layout, very intuitive!",
    bookmarked: true,
    read: true,
  },
  {
    id: "2",
    text: "Performance is great, but loading spinner shows too long on mobile.",
    bookmarked: false,
    read: false,
  },
  {
    id: "3",
    text: "Neutral on the latest update, didn’t impact my workflow.",
    bookmarked: false,
    read: true,
  },
  {
    id: "4",
    text: "Found a bug: export CSV includes duplicate rows.",
    bookmarked: true,
    read: false,
  },
  {
    id: "5",
    text: "Please add keyboard shortcuts for switching tabs.",
    bookmarked: false,
    read: true,
  },
];

interface InsightsProps {
  data: FeedbackDataInterface[];
}

export default function Insights({ data }: InsightsProps) {
  const feedback_data = useInsightsStats(data);
  return (
    <section className="px-4 sm:px-8 md:px-16 py-8">
      <div className="flex flex-col md:flex-row gap-6 h-auto">
        {/* Left panel: Feedback summary */}
        <div className="w-full md:w-[420px] flex-shrink-0">
          <FeedbackCard
            overallPercent={feedback_data.sentiment_percentage}
            overallLabel="Customer Sentiment"
            totalFeedbacks={feedback_data.total_feedbacks}
            positivePercent={Math.round(
              (feedback_data.positive_feedbacks /
                feedback_data.total_feedbacks) *
                100
            )}
            neutralPercent={Math.round(
              (feedback_data.neutral_feedbacks /
                feedback_data.total_feedbacks) *
                100
            )}
            negativePercent={Math.round(
              (feedback_data.negative_feedbacks /
                feedback_data.total_feedbacks) *
                100
            )}
            spamFeedbacks={feedback_data.potential_spam_encountered}
          />
        </div>

        {/* Right panel: Feedback logs */}
        <div className="flex-1 h-113">
          <FeedbackText logs={SAMPLE_LOGS} />
        </div>
      </div>
    </section>
  );
}
