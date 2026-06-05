// const { generateQuestions } = require("../services/geminiService");

// const getQuestions = async (req, res) => {
//   try {
//     console.log("BODY:", req.body);

//     const { company, role, level } = req.body;

//     const response = await generateQuestions(company, role, level);

//     res.status(200).json({
//       response,
//     });
//   } catch (error) {
//     console.error("AI ERROR =>", error);

//     if (error.status === 429) {
//       return res.status(429).json({
//         message: "AI quota exceeded. Please try again later.",
//       });
//     }

//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   getQuestions,
// };

const { generateQuestions } = require("../services/geminiService");

const getQuestions = async (req, res) => {
  try {
    const { company, role, level } = req.body;

    const response = await generateQuestions(company, role, level);

    res.status(200).json(response);
  } catch (error) {
    console.error("AI ERROR =>", error);

    res.status(500).json({
      message: error.message || "Failed to generate questions",
    });
  }
};

module.exports = {
  getQuestions,
};