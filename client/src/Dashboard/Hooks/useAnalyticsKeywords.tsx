import { useState, useEffect } from "react";
import { useDashboardData } from "./useDashboardData";
import { useTFIDF } from "./useTFIDF";

interface AnalyticsKeywordsInterface {
  positiveWords: string[];
  negativeWords: string[];
  overallWords: string[];
  loading: boolean;
  error: boolean;
}

export const useAnalyticsKeywords = () => {
  const [analyticsData, setAnalyticsData] =
    useState<AnalyticsKeywordsInterface>({
      positiveWords: [],
      negativeWords: [],
      overallWords: [],
      loading: true,
      error: false,
    });
  const dashboardDataHook = useDashboardData();
  useEffect(() => {
    if (dashboardDataHook.loading) {
      return;
    }
    if (dashboardDataHook.error) {
      setAnalyticsData({
        positiveWords: [],
        negativeWords: [],
        overallWords: [],
        loading: false,
        error: true,
      });
    }

    let allFeedbackTexts: string[] = [];
    let positiveFeedbackTexts: string[] = [];
    let negativeFeedbackTexts: string[] = [];
    for (const feedbackKey in dashboardDataHook.data) {
      const feedbackObject = dashboardDataHook.data[feedbackKey];
      allFeedbackTexts.push(feedbackObject.feedback_text);
      if (feedbackObject.sentiment.toLowerCase() == "positive") {
        positiveFeedbackTexts.push(feedbackObject.feedback_text);
      } else {
        negativeFeedbackTexts.push(feedbackObject.feedback_text);
      }
    }
    const topPositiveWords = useTFIDF({ feedbacks: positiveFeedbackTexts });
    const topNegativeWords = useTFIDF({ feedbacks: negativeFeedbackTexts });
    const topOverallWords = useTFIDF({ feedbacks: allFeedbackTexts });
    setAnalyticsData({
      positiveWords: topPositiveWords.slice(0, 3),
      negativeWords: topNegativeWords.slice(0, 3),
      overallWords: topOverallWords.slice(0, 3),
      loading: false,
      error: false,
    });
  }, [dashboardDataHook.loading, dashboardDataHook.error]);
  return analyticsData;
};
