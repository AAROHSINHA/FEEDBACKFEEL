interface TabsInterface {
  tab: "all" | "bookmarked" | "spam";
  setTab: React.Dispatch<React.SetStateAction<"all" | "bookmarked" | "spam">>;
}

export function Tabs({ tab, setTab }: TabsInterface) {
  return (
    <div
      role="tablist"
      aria-label="Logs filter"
      className="inline-flex rounded-lg overflow-hidden"
    >
      <button
        role="tab"
        aria-selected={tab === "all"}
        onClick={() => setTab("all")}
        className={`hover:cursor-pointer px-3 py-1.5 text-sm outline-none transition-colors
              ${
                tab === "all"
                  ? "bg-[#222224] text-white"
                  : "bg-[#1c1c1d] text-[#a6a6a6] hover:text-white"
              }`}
      >
        All feedbacks
      </button>
      <button
        role="tab"
        aria-selected={tab === "bookmarked"}
        onClick={() => setTab("bookmarked")}
        className={`hover:cursor-pointer px-3 py-1.5 text-sm outline-none transition-colors
              ${
                tab === "bookmarked"
                  ? "bg-[#222224] text-white"
                  : "bg-[#1c1c1d] text-[#a6a6a6] hover:text-white"
              }`}
      >
        Bookmarked
      </button>
      <button
        role="tab"
        aria-selected={tab === "spam"}
        onClick={() => setTab("spam")}
        className={`hover:cursor-pointer px-3 py-1.5 text-sm rounded-md outline-none font-medium transition-all duration-200
      ${
        tab === "spam"
          ? "bg-red-500/90 text-white shadow-sm"
          : "bg-[#1c1c1d] text-red-300 hover:text-red-400 hover:bg-[#222224]"
      }`}
      >
        Spam
      </button>
    </div>
  );
}
