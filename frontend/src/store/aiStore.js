// // import { create } from "zustand";

// // import { generateQuestions } from "../services/aiService";

// // const useAIStore = create((set) => ({
// //   questions: "",

// //   loading: false,

// //   generate: async (formData) => {
// //     set({
// //       loading: true,
// //     });

// //     try {
// //       const data = await generateQuestions(formData);

// //       set({
// //         questions: data.questions,
// //       });
// //     } finally {
// //       set({
// //         loading: false,
// //       });
// //     }
// //   },
// // }));

// // export default useAIStore;

// import { create } from "zustand";

// import { generateQuestions } from "../services/aiService";

// const useAIStore = create((set) => ({
//   questions:null,

//   loading: false,

//   error: null,

//   generate: async (formData) => {
//     set({
//       loading: true,
//       error: null,
//     });

//     try {
//       const data = await generateQuestions(formData);
// console.log("AI DATA:", data);
//       set({
//         questions: data,
//       });
//     } catch (error) {
//       console.error(error);

//       set({
//         error: error.response?.data?.message || "AI service unavailable",
//         questions:
//           "Unable to generate AI questions right now. Please try again later.",
//       });
//     } finally {
//       set({
//         loading: false,
//       });
//     }
//   },
// }));

// export default useAIStore;

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