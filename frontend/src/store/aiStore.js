
import { create } from "zustand";

import { generateQuestions } from "../services/aiService";

const useAIStore = create((set) => ({
  questions: null,

  loading: false,

  error: null,

  generate: async (formData) => {
    set({
      loading: true,
      error: null,
    });

    try {
      const data = await generateQuestions(formData);

      console.log("AI DATA:", data);

      set({
        questions: data,
      });
    } catch (error) {
      console.error(error);

      set({
        error: error.response?.data?.message || "AI service unavailable",

        questions: null,
      });
    } finally {
      set({
        loading: false,
      });
    }
  },
}));

export default useAIStore;