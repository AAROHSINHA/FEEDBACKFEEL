import { ChevronDown, ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto relative z-20">
      {/* Version Dropdown (simplified) */}
      <div className="mb-6 relative inline-block">
        <button className="flex items-center border border-green-600/40 text-green-600 hover:bg-green-500/10 rounded-md px-4 py-1.5 text-sm font-semibold transition-colors hover:cursor-pointer">
          FeedbackFeel v1
          <ChevronDown className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
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

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="flex items-center bg-white text-black hover:bg-gray-100 px-6 py-2.5 text-base font-medium rounded-md hover:cursor-pointer">
          Get started
          <ArrowRight className="ml-2 w-4.5 h-4.5" />
        </button>
        <button className="flex items-center border border-gray-800 text-gray-300 hover:bg-gray-900 hover:text-white px-6 py-2.5 text-base font-medium rounded-md hover:cursor-pointer">
          <Star className="mr-2 w-4.5 h-4.5" />
          Star on GitHub
        </button>
      </div>
    </div>
  );
};
export default HeroSection;
