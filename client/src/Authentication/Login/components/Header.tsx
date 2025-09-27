import { ArrowLeft } from "lucide-react";
export const Header = () => {
  return (
    <header className="relative z-10 flex items-center justify-between p-6">
      <a
        href="/"
        className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </a>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
          FF
        </div>
        <span className="font-semibold text-lg">FeedbackFeel</span>
      </div>
    </header>
  );
};
