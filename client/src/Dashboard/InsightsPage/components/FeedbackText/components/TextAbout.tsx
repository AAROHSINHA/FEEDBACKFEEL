interface TextAboutInterface {
  text: string;
  sentiment: string;
  date: string;
}
export default function TextAbout({
  text,
  sentiment,
  date,
}: TextAboutInterface) {
  return (
    <div className="flex-1">
      <p className="text-sm md:text-[15px] leading-relaxed text-[#e7e7e8] mb-1">
        {text}
      </p>
      {/* Sentiment */}
      <span
        className={`text-xs px-2 py-1 rounded ${
          sentiment === "Positive"
            ? "bg-green-500/20 text-green-400"
            : sentiment === "Negative"
            ? "bg-red-500/20 text-red-400"
            : "bg-orange-500/20 text-orange-400"
        }`}
      >
        {sentiment}
      </span>
      {/* Date - small and secondary */}
      <p className="text-xs mt-2 text-[#a6a6a6]">{date.split("T")[0]}</p>
    </div>
  );
}
