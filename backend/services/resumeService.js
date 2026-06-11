// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const extractSkills = async (resumeText) => {
//   const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

//   const model = genAI.getGenerativeModel({
//     model: "gemini-2.5-flash",
//   });

// const prompt = `
// Analyze this resume.

// Extract the TOP 10 MOST IMPORTANT technical skills.

// Return ONLY JSON.

// {
//   "skills":[]
// }

// Resume:

// ${resumeText}
// `;

//   const result = await model.generateContent(prompt);

//   const text = result.response.text();

//   const cleaned = text
//     .replace(/```json/g, "")
//     .replace(/```/g, "")
//     .trim();

//   return JSON.parse(cleaned);
// };

// module.exports = {
//   extractSkills,
// };

const { GoogleGenerativeAI } = require("@google/generative-ai");

const extractSkills = async (resumeText) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

const prompt = `
Analyze this resume carefully.

Tasks:

1. Identify the SINGLE most suitable professional job role.
2. The role can belong to ANY industry (Technology, Marketing, Finance, HR, Sales, Design, Healthcare, Education, etc.).
3. Use a standard industry job title.
4. Extract the TOP 10 most important skills relevant to that role.
5. Ignore personal details and soft skills.

Return ONLY valid JSON.

{
  "role": "",
  "skills": []
}

Resume:

${resumeText}
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const parsed = JSON.parse(cleaned);

  return {
    role: parsed.role || "Software Developer",
    skills: parsed.skills || [],
  };
};

module.exports = {
  extractSkills,
};