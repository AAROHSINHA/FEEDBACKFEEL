"use client";

import * as React from "react";

type Item = {
  id: string;
  label: string;
  icon?: React.ReactNode;
};

type SegmentedTabsProps = {
  items: Item[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (id: string) => void;
  className?: string;
  "aria-label"?: string;
};

export function SegmentedTabs({
  items,
  value,
  defaultValue,
  onValueChange,
  className = "",
  "aria-label": ariaLabel = "Segmented tabs",
}: SegmentedTabsProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState(
    defaultValue ?? items[0]?.id
  );
  const active = isControlled ? value : internalValue;

  function select(id: string) {
    if (!isControlled) setInternalValue(id);
    onValueChange?.(id);
  }

  return (
    <div
      className={`px-5 w-full sm:px-18 py-6 ${className}`}
      style={{ background: "#19191a" }}
    >
      <div className="flex justify-start gap-4">
        {items.map((item) => {
          const selected = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => select(item.id)}
              className={`transition-all duration-300 mx-3 hover:cursor-pointer ${
                selected
                  ? "text-white font-bold text-4xl scale-110"
                  : "text-gray-700 font-sm text-lg scale-90 flex flex-col justify-end"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
