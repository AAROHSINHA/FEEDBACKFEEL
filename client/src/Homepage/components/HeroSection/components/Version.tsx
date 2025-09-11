import { ChevronDown } from "lucide-react";
export const Version = () => {
  return (
    <div className="mb-6 relative inline-block">
      <button className="flex items-center border border-gray-600/40 text-gray-600 hover:bg-gray-500/10 rounded-md px-4 py-1.5 text-sm font-semibold transition-colors hover:cursor-pointer">
        FeedbackFeel v1
        <ChevronDown className="ml-2 w-4 h-4" />
      </button>
    </div>
  );
};
