export const GenerateButton = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-5 w-full">
      <button className="bg-blue-500 hover:bg-blue-600 text-gray-200 py-2 px-4 rounded transition-colors hover:cursor-pointer w-full sm:w-auto">
        Generate Site Review And Suggestions
      </button>
      <p className="text-gray-300 text-sm text-right w-full sm:w-auto">
        You have 3 calls remaining today!
      </p>
    </section>
  );
};
