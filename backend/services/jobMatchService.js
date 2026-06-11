

const axios = require("axios");

const getJobsFromRemotive = async (searchTerms) => {
  try {
    const query = searchTerms.join(" ");

    const response = await axios.get(
      `https://remotive.com/api/remote-jobs?search=${encodeURIComponent(
        query,
      )}`,
    );

    return response.data.jobs || [];
  } catch (error) {
    console.log(error.message);

    return [];
  }
};

const calculateMatch = (resumeSkills, jobText) => {
  let matches = 0;

  resumeSkills.forEach((skill) => {
    if (jobText.toLowerCase().includes(skill.toLowerCase())) {
      matches++;
    }
  });

  return Math.round((matches / resumeSkills.length) * 100);
};

module.exports = {
  getJobsFromRemotive,
  calculateMatch,
};