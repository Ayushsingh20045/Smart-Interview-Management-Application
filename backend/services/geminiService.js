

const { GoogleGenerativeAI } = require("@google/generative-ai");

const generateQuestions = async (company, role, level) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

   

    const prompt = `
Return ONLY valid JSON.

{
  "technical":[
    "question1",
    "question2"
  ],
  "hr":[
    "question1",
    "question2"
  ],
  "behavioral":[
    "question1",
    "question2"
  ]
}

Company: ${company}
Role: ${role}
Experience: ${level}
`;

    // const result = await model.generateContent(prompt);

    // return result.response.text();
    const result = await model.generateContent(prompt);

    const text = result.response.text();

    // Remove markdown code fences if Gemini adds them
    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanText);
  } catch (error) {
    console.log("Gemini Error:", error.message);

    return {
      technical: [
        "Explain the Node.js Event Loop.",
        "What is JWT authentication?",
        "Difference between SQL and MongoDB?",
        "What is middleware in Express?",
        "Explain REST APIs.",
      ],

      hr: [
        "Tell me about yourself.",
        `Why do you want to join ${company}?`,
        "What are your strengths and weaknesses?",
        "Where do you see yourself in 5 years?",
        "Why should we hire you?",
      ],

      behavioral: [
        "Describe a challenging project.",
        "Tell me about a time you worked in a team.",
        "How do you handle deadlines?",
        "How do you deal with criticism?",
        "Describe a problem you solved creatively.",
      ],
    };
  }
};

module.exports = {
  generateQuestions,
};