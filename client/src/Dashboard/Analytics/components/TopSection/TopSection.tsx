import { Cards } from "./components/Cards";
import { useAnalyticsKeywords } from "../../../Hooks/useAnalyticsKeywords";
import { useEffect, useState } from "react";

interface wordListInterface {
  positiveWordList: string[];
  negativeWordList: string[];
  overallWordList: string[];
}

export const TopSection = () => {
  const [wordList, setWordList] = useState<wordListInterface>({
    positiveWordList: [],
    negativeWordList: [],
    overallWordList: [],
  });
  const analyticsKeywordsHooks = useAnalyticsKeywords();
  useEffect(() => {
    if (analyticsKeywordsHooks.loading) return;
    if (analyticsKeywordsHooks.error) {
      alert("ERROR IN ANALYTICS KEYWORDS HOOKS");
      return;
    }
    setWordList({
      positiveWordList: analyticsKeywordsHooks.positiveWords,
      negativeWordList: analyticsKeywordsHooks.negativeWords,
      overallWordList: analyticsKeywordsHooks.overallWords,
    });
  }, [analyticsKeywordsHooks.loading, analyticsKeywordsHooks.error]);

  return (
    <section className="flex flex-col md:flex-row justify-between mx-5">
      <Cards title="Positive" words={wordList.positiveWordList} />
      <Cards title="Negative" words={wordList.negativeWordList} />
      <Cards title="Overall" words={wordList.overallWordList} />
    </section>
  );
};
