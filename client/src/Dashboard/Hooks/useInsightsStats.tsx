import { useMemo } from "react";
import type { FeedbackDataInterface } from "../Types/types";
import type { statsDataInterface } from "../Types/types";

export const useInsightsStats = (data: FeedbackDataInterface[]) => {
  const StatsData = useMemo((): statsDataInterface => {
    // 🎯 Single pass through data - more efficient!
    let positive_feedbacks = 0;
    let negative_feedbacks = 0;
    let potential_spam_encountered = 0;
    let sentiment_net_score = 0;

    data.forEach((feedback) => {
      if (feedback.spam) {
        potential_spam_encountered++;
      } else if (
        feedback.sentiment === "Positive" &&
        feedback.confidence >= 60
      ) {
        positive_feedbacks++;
        sentiment_net_score += 1.4 * feedback.confidence;
      } else if (
        feedback.sentiment === "Negative" &&
        feedback.confidence >= 60
      ) {
        negative_feedbacks++;
        sentiment_net_score -= 0.8 * feedback.confidence;
      } else {
        sentiment_net_score += 0.7 * feedback.confidence;
      }
    });

    const total_feedbacks = data.length;
    let neutral_feedbacks =
      total_feedbacks -
      (positive_feedbacks + negative_feedbacks + potential_spam_encountered);
    const sentiment_percentage = Math.round(
      (sentiment_net_score / (total_feedbacks * 100)) * 100
    );

    return {
      sentiment_percentage,
      total_feedbacks,
      positive_feedbacks,
      negative_feedbacks,
      neutral_feedbacks,
      potential_spam_encountered,
    };
  }, [data]);

  return StatsData;
};
