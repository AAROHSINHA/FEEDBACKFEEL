import { useContext } from "react";
import { ThemeContext } from "../../../../ThemeContext";

export const TextArea = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      {/* Main Heading */}
      <h1
        className={`${
          themeContext?.theme === "dark" ? "text-white" : "text-gray-600"
        } text-5xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight`}
      >
        Capture feedback, resolve issues, track results
      </h1>

      {/* Subtitle */}
      <p className="text-sm md:text-md text-gray-500 mb-6 leading-relaxed max-w-3xl mx-auto">
        Leverage an ML pipeline that classifies feedback, detects spam, and
        delivers insights. FeedbackFeel makes feedback collection intelligent
        and effortless, with a resolution tracker to turn feedback into action.
        <br />
        <b>
          <i>FeedbackFeel brings the best of modern feedback systems.</i>
        </b>
      </p>
    </div>
  );
};
