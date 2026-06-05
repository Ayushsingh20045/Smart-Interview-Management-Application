

const { GoogleGenerativeAI } = require("@google/generative-ai");

const generateQuestions = async (company, role, level) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

//     const prompt = `
// Generate interview questions.

// Company: ${company}
// Role: ${role}
// Experience: ${level}

// Give:
// 1. Technical Questions
// 2. HR Questions
// 3. Behavioral Questions

// Format in markdown.
// `;

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

    return `
# Technical Questions

1. Explain the Node.js Event Loop.
2. What is JWT authentication?
3. Difference between SQL and MongoDB?
4. What is middleware in Express?
5. Explain REST APIs.

# HR Questions

1. Tell me about yourself.
2. Why do you want to join ${company}?
3. What are your strengths and weaknesses?
4. Where do you see yourself in 5 years?
5. Why should we hire you?

# Behavioral Questions

1. Describe a challenging project.
2. Tell me about a time you worked in a team.
3. How do you handle deadlines?
4. How do you deal with criticism?
5. Describe a problem you solved creatively.
`;
  }
};

module.exports = {
  generateQuestions,
};