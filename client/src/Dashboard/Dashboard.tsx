import Navbar from "./Navbar/Navbar";
import { SegmentedTabs } from "./SegmentedTabs/SegmentedTabs";
import Insights from "./InsightsPage/InsightsPage";

export default function () {
  return (
    <section className="bg-[#19191a] min-h-screen">
      <Navbar />
      <SegmentedTabs
        items={[
          { id: "insights", label: "Insights" },
          { id: "analytics", label: "Analytics" },
          { id: "action center", label: "Action Center" },
        ]}
        defaultValue="insights"
        onValueChange={(id) => console.log("Selected tab:", id)}
        className="my-4"
        aria-label="Example Segmented Tabs"
      />
      <Insights />
    </section>
  );
}
