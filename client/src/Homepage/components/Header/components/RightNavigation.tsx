import { Globe, Moon, Github } from "lucide-react";

const RightNavigation = () => {
  return (
    <div className="flex items-center gap-4">
      <button className="flex items-center gap-1 text-gray-400 hover:text-white text-sm hover:cursor-pointer">
        <Globe className="w-5 h-5" />
        EN
      </button>
      <button className="text-gray-400 hover:text-white hover:cursor-pointer">
        <Moon className="w-5 h-5" />
      </button>
      <button className="text-gray-400 hover:text-white hover:cursor-pointer">
        <Github className="w-5 h-5" />
      </button>
    </div>
  );
};
export default RightNavigation;
