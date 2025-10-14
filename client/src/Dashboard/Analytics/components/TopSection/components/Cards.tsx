import { Info } from "lucide-react";

interface CardsInterface {
  title: string;
  words: [] | [string] | [string, string] | [string, string, string];
}

export const Cards = ({ title, words }: CardsInterface) => {
  const textColor =
    title.toLowerCase() == "positive"
      ? "text-green-400"
      : title.toLowerCase() == "negative"
      ? "text-red-400"
      : "text-orange-400";
  return (
    <section
      className="w-[100%] mb-3 md:w-[32%] h-55"
      style={{
        backgroundColor: "#1f1f1f",
        color: "#4b5563", // gray-600
        borderRadius: "0.5rem",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <div className="flex justify-between mb-3">
        <div className="tracking-[3px]">{title}</div>
        <div
          onClick={() => alert(`MOST COMMON KEYWORDS FROM ${title} Feedbacks`)}
          className="hover:cursor-pointer"
        >
          <Info />
        </div>
      </div>
      <div className="h-[80%] flex-col justify-between items-center">
        {words.map((word, index) => (
          <h3 className={`text-[1.8em] font-bold ${textColor}`} key={index}>
            {word}
          </h3>
        ))}
      </div>
    </section>
  );
};
