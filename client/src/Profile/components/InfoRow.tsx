import { div } from "motion/react-client";
import { useState } from "react";

type RowProps = { label: string; value: string; api: boolean };

export function InfoRow({ label, value, api }: RowProps) {
  const [showApi, setShowApi] = useState(false);
  const [text, setText] = useState("");
  const handleClick = () => {
    if (showApi) {
      navigator.clipboard.writeText(value);
      setText("Copied!");
      setShowApi(false);
      return;
    }
    setText("");
    setShowApi(true);
  };
  return (
    <div className="flex items-center justify-between rounded-md px-4 py-3 ring-1 ring-white/10 bg-background/40 text-gray-200">
      <span className="text-lg font-medium text-gray-300">{label}</span>
      {api ? (
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-semibold text-white truncate max-w-xs">
              {showApi ? value : "****************"}
            </span>
            <button
              onClick={handleClick}
              className="px-2 py-1 text-xs bg-gray-700 rounded hover:bg-gray-600 hover:cursor-pointer"
            >
              {showApi ? "Copy" : "Show"}
            </button>
          </div>
          <p className="text-green-400 text-[9px] text-center mt-[1em] tracking-[3px]">
            {text}
          </p>
        </div>
      ) : (
        <span
          className="text-[12px] font-semibold text-white truncate max-w-xs"
          title={value}
        >
          {value}
        </span>
      )}
    </div>
  );
}
