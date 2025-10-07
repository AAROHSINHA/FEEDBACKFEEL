import Navbar from "./Navbar/Navbar";
import { SegmentedTabs } from "./SegmentedTabs/SegmentedTabs";
import Insights from "./InsightsPage/InsightsPage";
import { AuthContext } from "../AuthContext";
import { useContext, useEffect, useState } from "react";
import { useDashboardData } from "./Hooks/useDashboardData";
import { useNavigate } from "react-router-dom";
import { Analytics } from "./Analytics/Analytics";
import { ResolutionPortal } from "./ResolutionPortal/ResolutionPortal";

export default function () {
  const [currentTab, setCurrentTab] = useState<
    "insights" | "analytics" | "resolution portal"
  >("insights");
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { data, loading, error } = useDashboardData();
  useEffect(() => {
    if (authContext.authLoading) {
      return;
    }
    if (loading) return;
    if (!authContext.isLoggedIn) navigate("/login");
    // console.log(data, loading, error);
  }, [authContext.isLoggedIn, navigate, authContext.authLoading, loading]);

  return (
    <section className="bg-[#19191a] min-h-screen">
      <Navbar />
      <SegmentedTabs
        items={[
          { id: "insights", label: "Insights" },
          { id: "analytics", label: "Analytics" },
          { id: "resolution portal", label: "Resolution Portal" },
        ]}
        defaultValue="insights"
        onValueChange={(id) =>
          setCurrentTab(id as "insights" | "analytics" | "resolution portal")
        }
        className="my-4"
        aria-label="Example Segmented Tabs"
      />
      {currentTab == "insights" && <Insights />}
      {currentTab == "analytics" && <Analytics />}
      {currentTab == "resolution portal" && <ResolutionPortal />}
    </section>
  );
}
