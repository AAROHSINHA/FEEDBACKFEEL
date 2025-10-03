"use client";

import * as React from "react";

type LogItem = {
  id: string;
  text: string;
  bookmarked?: boolean;
  read?: boolean;
};

type FeedbackLogsProps = {
  title?: string;
  logs: LogItem[];
  // Optional callbacks if you want interactivity
  onToggleBookmark?: (id: string) => void;
  onToggleRead?: (id: string) => void;
};

export default function FeedbackText({
  title = "Feedback Logs",
  logs,
  onToggleBookmark,
  onToggleRead,
}: FeedbackLogsProps) {
  const [tab, setTab] = React.useState<"all" | "bookmarked">("all");

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
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-pretty text-base md:text-lg font-medium text-white">
          {title}
        </h2>
        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Logs filter"
          className="inline-flex rounded-lg overflow-hidden"
        >
          <button
            role="tab"
            aria-selected={tab === "all"}
            onClick={() => setTab("all")}
            className={`px-3 py-1.5 text-sm outline-none transition-colors
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
            className={`px-3 py-1.5 text-sm outline-none transition-colors
              ${
                tab === "bookmarked"
                  ? "bg-[#222224] text-white"
                  : "bg-[#1c1c1d] text-[#a6a6a6] hover:text-white"
              }`}
          >
            Bookmarked
          </button>
        </div>
      </header>

      {/* Scrollable logs */}
      <ul
        role="list"
        className="divide-y divide-[#222224]/60 rounded-lg overflow-y-auto px-1 h-90"
      >
        {filtered.length === 0 ? (
          <li className="p-4 text-sm text-[#b5b5b6]">No logs found.</li>
        ) : (
          filtered.map((item, idx) => (
            <li
              key={item.id}
              role="listitem"
              className={`flex items-center gap-3 p-3 md:p-4`}
              style={{
                backgroundColor: idx % 2 === 0 ? "#1c1c1d" : "#202022",
              }}
            >
              {/* Read indicator circle */}
              <button
                type="button"
                aria-label={item.read ? "Mark as unread" : "Mark as read"}
                onClick={() => onToggleRead?.(item.id)}
                className="shrink-0 h-3.5 w-3.5 rounded-full ring-2 ring-[#2b2b2c]"
                title={item.read ? "Read" : "Unread"}
                style={{ backgroundColor: item.read ? "#22c55e" : "#6b7280" }}
              />

              {/* Text */}
              <p className="flex-1 text-sm md:text-[15px] leading-relaxed text-[#e7e7e8]">
                {item.text}
              </p>

              {/* Bookmark toggle */}
              <button
                type="button"
                aria-label={
                  item.bookmarked ? "Remove bookmark" : "Add bookmark"
                }
                title={item.bookmarked ? "Bookmarked" : "Bookmark"}
                onClick={() => onToggleBookmark?.(item.id)}
                className="shrink-0 inline-flex items-center justify-center rounded-md p-1.5 hover:bg-[#262628] transition-colors"
              >
                <BookmarkIcon
                  className="h-5 w-5"
                  fill={item.bookmarked ? "#f5c542" : "none"}
                  stroke={item.bookmarked ? "#f5c542" : "#a6a6a6"}
                />
                <span className="sr-only">
                  {item.bookmarked ? "Bookmarked" : "Not bookmarked"}
                </span>
              </button>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

function BookmarkIcon({
  className,
  fill = "none",
  stroke = "currentColor",
}: {
  className?: string;
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill={fill}
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 4.75A2.75 2.75 0 0 1 8.75 2h6.5A2.75 2.75 0 0 1 18 4.75V21l-6-3-6 3V4.75Z" />
    </svg>
  );
}
