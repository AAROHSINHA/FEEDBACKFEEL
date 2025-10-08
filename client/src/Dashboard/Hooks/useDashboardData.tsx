import { useState, useEffect } from "react";
import { api } from "../../api";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import type { FeedbackDataInterface } from "../Types/types";
import type { DashboardDataInterface } from "../Types/types";

export const useDashboardData = () => {
  const [dashboardData, setDashboardData] = useState<DashboardDataInterface>({
    data: [],
    error: false,
    loading: true,
  });
  const authContext = useContext(AuthContext);
  const fetchData = async () => {
    if (!authContext.dev_id) {
      //   console.log("Waiting for dev_id...");
      return;
    }
    try {
      const data = await api.get(
        `/feedbacks/get-feedback-data?dev_id=${authContext.dev_id}`,
        { withCredentials: true }
      );
      console.log(data.data);
      const feedbacks_data: FeedbackDataInterface[] = data.data;
      setDashboardData({
        data: feedbacks_data,
        error: false,
        loading: false,
      });
      //   console.log("FETCHED DATA!");
    } catch (error) {
      console.log("ERROR FETCHING DATA - useDashboardData.tsx");
      setDashboardData({
        data: [],
        error: true,
        loading: false,
      });
    }
  };
  useEffect(() => {
    fetchData();
    // console.log("🔄 Executed!");
  }, [authContext.dev_id, authContext.authLoading]);
  //   console.log(authContext.dev_id);
  //   console.log("🔄 useDashboardData function executing");
  return dashboardData;
};
