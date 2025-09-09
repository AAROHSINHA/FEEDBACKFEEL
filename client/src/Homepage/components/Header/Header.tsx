import { Search, Github, Globe, Moon } from "lucide-react";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import RightNavigation from "./components/RightNavigation";

const Header = () => {
  return (
    <header className="px-6 py-4 shadow-[0_0_2px_rgba(255,255,255,0.5)] relative z-20">
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
