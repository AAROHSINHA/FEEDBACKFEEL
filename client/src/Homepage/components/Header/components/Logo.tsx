import { useContext } from "react";
import { ThemeContext } from "../../../../ThemeContext";
const Logo = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">FF</span>
      </div>
      <span
        className={`text-xl font-semibold ${
          themeContext?.theme === "dark" ? "text-white" : "text-[#12121a]"
        }`}
      >
        FeedbackFeel
      </span>
    </div>
  );
};
export default Logo;
