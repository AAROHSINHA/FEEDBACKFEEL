import { useContext } from "react";
import { ThemeContext } from "../../../../ThemeContext";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const themeContext = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      className="flex items-center gap-2 hover:cursor-pointer"
      onClick={handleClick}
    >
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
