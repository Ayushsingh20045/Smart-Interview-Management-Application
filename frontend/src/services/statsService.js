import axiosInstance from "../utils/axiosInstance";

export const getStats = async () => {
  const res = await axiosInstance.get("/stats");

  return res.data;
};
