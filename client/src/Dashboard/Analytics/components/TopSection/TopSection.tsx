import { Cards } from "./components/Cards";
import { useAnalyticsKeywords } from "../../../Hooks/useAnalyticsKeywords";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
  const navigate = useNavigate();
  useEffect(() => {
    if (analyticsKeywordsHooks.loading) return;
    if (analyticsKeywordsHooks.error) {
      navigate("/");
      toast.error("Servers are down!");
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
