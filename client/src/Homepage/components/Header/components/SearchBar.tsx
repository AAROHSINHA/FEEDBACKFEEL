import { Search } from "lucide-react";
const SearchBar = () => {
  return (
    <div className="flex-1 max-w-md mx-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          placeholder="Search..."
          className="w-full rounded-md bg-gray-900 border border-gray-800 pl-10 pr-16 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gray-600"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-gray-400">
          <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-xs">Ctrl</kbd>
          <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-xs">K</kbd>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
