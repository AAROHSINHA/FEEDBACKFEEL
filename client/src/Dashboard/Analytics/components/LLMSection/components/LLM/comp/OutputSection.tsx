const loadingMessages = [
  "Loading Response!",
  "Wait a few seconds!",
  "Analyzing feedback!",
  "Crunching the data!",
  "Almost there!",
];

export const OutputSection = () => {
  return (
    <section className="flex flex-col justify-center mt-4 h-20  text-center">
      <p className="text-green-300 font-thin animate-pulse">
        Loading Response...
      </p>
    </section>
  );
};
