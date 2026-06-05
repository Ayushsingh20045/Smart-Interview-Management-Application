import axiosInstance from "../utils/axiosInstance";

export const getJobs = async () => {
  const res = await axiosInstance.get("/jobs");

  return res.data;
};

export const createJob = async (data) => {
  const res = await axiosInstance.post("/jobs", data);

  return res.data;
};

export const deleteJob = async (id) => {
  const res = await axiosInstance.delete(`/jobs/${id}`);

  return res.data;
};

export const updateJob = async (id, data) => {
  const res = await axiosInstance.put(`/jobs/${id}`, data);

  return res.data;
};
