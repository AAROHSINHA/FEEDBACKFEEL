"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
  strokeColor?: string;
  gridColor?: string;
  lineWidth?: number;
}

export default function CustomLineChart({
  data,
  strokeColor = "#4F46E5", // default indigo
  gridColor = "#374151", // gray-700
  lineWidth = 3,
}: LineChartProps) {
  return (
    <div className="w-full h-64 bg-[#1f1f1f] p-4 rounded-2xl shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{ backgroundColor: "#111827", border: "none" }}
            labelStyle={{ color: "#E5E7EB" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={strokeColor}
            strokeWidth={lineWidth}
            dot={{ r: 4, stroke: "#fff", strokeWidth: 1 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
