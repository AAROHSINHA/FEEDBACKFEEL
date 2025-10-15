import { useState, useEffect } from "react";
import { useDashboardData } from "./useDashboardData";

interface AnalyticsKeywordsInterface {
  positiveWords: [] | [string] | [string, string] | [string, string, string];
  negativeWords: [] | [string] | [string, string] | [string, string, string];
  overallWords: [] | [string] | [string, string] | [string, string, string];
  loading: boolean;
  error: boolean;
}

const tfIdfFunction = (feedbacks: string[]) => {};

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
    setAnalyticsData({
      positiveWords: [positiveFeedbackTexts[0]],
      negativeWords: [negativeFeedbackTexts[0]],
      overallWords: [allFeedbackTexts[0]],
      loading: false,
      error: false,
    });
  }, [dashboardDataHook.loading, dashboardDataHook.error]);
  return analyticsData;
};
