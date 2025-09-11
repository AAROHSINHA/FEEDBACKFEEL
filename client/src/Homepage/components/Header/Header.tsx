import { Search, Github, Globe, Moon } from "lucide-react";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import RightNavigation from "./components/RightNavigation";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";

const Header = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <header
      className={`px-6 py-4 relative z-20 ${
        themeContext?.theme === "dark"
          ? "shadow-[0_0_2px_rgba(255,255,255,0.5)]"
          : "shadow-md shadow-[0_0_2px_rgba(18, 18, 26,0.5)]"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Logo />

        {/* Search Bar */}
        <SearchBar />

        {/* Right Navigation */}
        <RightNavigation />
      </div>
    </header>
  );
};

export default Header;
