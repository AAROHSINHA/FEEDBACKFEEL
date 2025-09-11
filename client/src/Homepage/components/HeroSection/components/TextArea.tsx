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
        Seamless feedback collection for modern products
      </h1>

      {/* Subtitle */}
      <p className="text-sm md:text-md text-gray-500 mb-6 leading-relaxed max-w-3xl mx-auto">
        Leverage an end-to-end ML pipeline that classifies feedback by
        sentiment, detects spam, and delivers real-time insights. FeedbackFeel
        makes feedback collection intelligent, scalable, and effortless.
        <br />
        <b>
          <i>FeedbackFeel brings the best of modern feedback systems.</i>
        </b>
      </p>
    </div>
  );
};
