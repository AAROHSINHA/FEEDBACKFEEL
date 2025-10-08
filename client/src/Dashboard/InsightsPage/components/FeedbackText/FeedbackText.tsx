"use client";

import * as React from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

type LogItem = {
  id: string;
  text: string;
  sentiment: string;
  bookmarked: boolean;
  date: string;
};

type FeedbackLogsProps = {
  title?: string;
  logs: LogItem[];
};

export default function FeedbackText({
  title = "Feedback Logs",
  logs,
}: FeedbackLogsProps) {
  const [tab, setTab] = React.useState<"all" | "bookmarked" | "spam">("all");

  const filtered = React.useMemo(
    () => (tab === "all" ? logs : logs.filter((l) => l.bookmarked)),
    [logs, tab]
  );

  return (
    <section
      aria-label={title}
      className="rounded-xl p-4 md:p-6 shadow-sm w-full max-w-4xl mx-auto h-full" // widened
      style={{
        backgroundColor: "#1f1f1f",
        color: "#4b5563", // gray-600
        borderRadius: "0.5rem",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <Header title={title} tab={tab} setTab={setTab} />{" "}
      {/* HEADER CONTAINS TABS ALSO */}
      {/* Scrollable logs */}
      <ul
        role="list"
        className="divide-y divide-[#222224]/60 rounded-lg overflow-y-auto px-1 h-90"
      >
        {filtered.length === 0 ? (
          <li className="p-4 text-sm text-[#b5b5b6]">No logs found.</li>
        ) : (
          filtered.map((item, idx) => (
            <FeedbackItem
              index={idx}
              id={item.id}
              text={item.text}
              sentiment={item.sentiment}
              date={item.date}
              bookmarked={item.bookmarked}
            />
          ))
        )}
      </ul>
    </section>
  );
}
