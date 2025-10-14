import CustomLineChart from "./components/CustomLineChart";

const sampleData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 35 },
  { name: "Apr", value: 70 },
  { name: "May", value: 60 },
];

export const GraphSection = () => {
  return (
    <div className="p-6 flex-col">
      <div className="my-5">
        <h2 className="text-xl font-bold text-gray-100 mb-4">
          Daily Feedbacks Counts
        </h2>
        <CustomLineChart
          data={sampleData}
          strokeColor="#22D3EE" // cyan-400
          gridColor="#334155" // slate-700
          lineWidth={3}
        />
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-100 mb-4">
          Daily Overall Sentiments
        </h2>
        <CustomLineChart
          data={sampleData}
          strokeColor="#22D3EE" // cyan-400
          gridColor="#334155" // slate-700
          lineWidth={3}
        />
      </div>
    </div>
  );
};
