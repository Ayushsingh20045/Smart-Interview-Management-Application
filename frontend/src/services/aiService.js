import axiosInstance from "../utils/axiosInstance";

export const generateQuestions = async (data) => {
  const response = await axiosInstance.post("/ai/questions", data);

  return response.data;
};
