import { ArrowRight, Star } from "lucide-react";
export const CTAButtons = () => {
  return (
    <div>
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
