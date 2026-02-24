"use client";

import { useEffect, useState } from "react";

interface AnalyticsData {
  totalCalculations: number;
  illegalRentals: number;
  totalSavings: number;
}

export function useAnalytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalCalculations: 2847,
    illegalRentals: 996,
    totalSavings: 1200000,
  });

  useEffect(() => {
    const stored = localStorage.getItem("rentcheck_analytics");
    if (stored) {
      setAnalytics(JSON.parse(stored));
    }
  }, []);

  const trackCalculation = (isIllegal: boolean, savings: number) => {
    const newAnalytics = {
      ...analytics,
      totalCalculations: analytics.totalCalculations + 1,
      illegalRentals: isIllegal
        ? analytics.illegalRentals + 1
        : analytics.illegalRentals,
      totalSavings: analytics.totalSavings + savings,
    };
    setAnalytics(newAnalytics);
    localStorage.setItem("rentcheck_analytics", JSON.stringify(newAnalytics));
  };

  return { analytics, trackCalculation };
}
