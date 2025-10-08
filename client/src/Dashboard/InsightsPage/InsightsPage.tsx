import { useInsightsStats } from "../Hooks/useInsightsStats";
import type { FeedbackDataInterface } from "../Types/types";
import { FeedbackCard } from "./components/FeedbackCard";
import FeedbackText from "./components/FeedbackText/FeedbackText";
const SAMPLE_LOGS = [
  {
    id: "1",
    text: "Loved the new dashboard layout, very intuitive!, Loved the new dashboard layout, very intuitive!, Loved the new dashboard layout, very intuitive!, Loved the new dashboard layout, very intuitive!, Loved the new dashboard layout, very intuitive!",
    sentiment: "Positive",
    bookmarked: true,
    date: "24/07/25",
  },
  {
    id: "2",
    text: "Such a bad site man! Such a bad one....",
    sentiment: "Negative",
    bookmarked: false,
    date: "12/08/25",
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
