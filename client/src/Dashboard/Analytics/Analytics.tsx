import { TopSection } from "./components/TopSection/TopSection";
import { GraphSection } from "./components/GraphSection/GraphSection";
import { LLMSection } from "./components/LLMSection/LLMSection";
import { useAnalyticsKeywords } from "../Hooks/useAnalyticsKeywords";
import { useEffect } from "react";

export const Analytics = () => {
  const analyticsKeywordsHooks = useAnalyticsKeywords();
  useEffect(() => {
    console.log(analyticsKeywordsHooks);
  }, [analyticsKeywordsHooks.loading, analyticsKeywordsHooks.error]);
  return (
    <section className="px-4 sm:px-8 md:px-16 py-8 min-h-screen overflow-hidden">
      <TopSection />
      <GraphSection />
      <LLMSection />
    </section>
  );
};
