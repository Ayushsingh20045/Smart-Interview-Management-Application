import { create } from "zustand";

import * as jobService from "../services/jobService";
import useStatsStore from "./stateStore";

const useJobStore = create((set) => ({
  jobs: [],

  fetchJobs: async () => {
    try {
      const jobs = await jobService.getJobs();

      set({ jobs });
    } catch (error) {
      console.log(error);
    }
  },

  addJob: async (formData) => {
    try {
      const job = await jobService.createJob(formData);

      set((state) => ({
        jobs: [job, ...state.jobs],
      }));

      useStatsStore.getState().fetchStats();
    } catch (error) {
      console.log(error);
    }
  },

  deleteJob: async (id) => {
    try {
      await jobService.deleteJob(id);

      set((state) => ({
        jobs: state.jobs.filter((job) => job._id !== id),
      }));

      useStatsStore.getState().fetchStats();
    } catch (error) {
      console.log(error);
    }
  },

  // updateJob: async (id, updatedData) => {
  //   set((state) => ({
  //     jobs: state.jobs.map((job) =>
  //       job._id === id
  //         ? {
  //             ...job,
  //             ...updatedData,
  //           }
  //         : job,
  //     ),
  //   }));

  //   try {
  //     await jobService.updateJob(id, updatedData);

  //     useStatsStore.getState().fetchStats();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  updateJob: async (id, updatedData) => {
    const previousJobs = useJobStore.getState().jobs;

    set((state) => ({
      jobs: state.jobs.map((job) =>
        job._id === id
          ? {
              ...job,
              ...updatedData,
            }
          : job,
      ),
    }));

    try {
      const updatedJob = await jobService.updateJob(id, updatedData);

      set((state) => ({
        jobs: state.jobs.map((job) => (job._id === id ? updatedJob : job)),
      }));

      useStatsStore.getState().fetchStats();
    } catch (error) {
      console.log(error);

      set({
        jobs: previousJobs,
      });
    }
  },
}));

export default useJobStore;
