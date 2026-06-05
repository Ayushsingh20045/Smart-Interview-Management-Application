import { create } from "zustand";

import { getStats } from "../services/statsService";

const useStatsStore = create((set) => ({
  stats: {
    totalApplications: 0,
    interviews: 0,
    offers: 0,
    rejected: 0,
  },

  fetchStats: async () => {
    try {
      const data = await getStats();

      set({
        stats: data,
      });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useStatsStore;
