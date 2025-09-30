import { Globe, User, Moon, Github } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../../../ThemeContext";
import Login from "./Login";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../AuthContext";

const RightNavigation = () => {
  const themeContext = useContext(ThemeContext);
  const { isLoggedIn } = useContext(AuthContext);
  const changeTheme = () => {
    const newTheme = themeContext?.theme == "dark" ? "light" : "dark";
    themeContext?.setTheme(newTheme);
  };
  return (
    <div className="flex items-center gap-8">
      <button
        className="text-gray-400 hover:text-white hover:cursor-pointer"
        onClick={changeTheme}
      >
        <Moon className="w-5 h-5" />
      </button>
      <button className="text-gray-400 hover:text-white hover:cursor-pointer">
        <Github className="w-5 h-5" />
      </button>
      {isLoggedIn ? (
        <Login />
      ) : (
        <Link to={"/sign-up"}>
          <button className="flex items-center gap-1 text-gray-400 hover:text-white text-sm hover:cursor-pointer">
            <User className="w-5 h-5" />
            Sign In
          </button>
        </Link>
      )}
    </div>
  );
};
export default RightNavigation;
