import React from "react";
import useHttpClient from "../api/useHttpClient";
import { GRAPH } from "../../constants/apiEndpoints";

const useGraph = () => {
  const { sendAuthorizedRequest, isLoading } = useHttpClient();

  const visualizeSalesData = async () => {
    try {
      console.log("🟡 Fetching graph data...");
      const res = await sendAuthorizedRequest("seller", GRAPH, "GET");
      console.log("✅ Response from GRAPH API:", res);
  
      if (!res || !res.data) {
        console.warn("❌ GRAPH API returned no data");
        return null;
      }
  
      return res.data;
    } catch (error) {
      console.error("🔥 Error while fetching GRAPH data:", error);
      return null;
    }
  };
  

  return { visualizeSalesData, isLoading };
};

export default useGraph;
