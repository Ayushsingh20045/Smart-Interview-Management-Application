// // // const pdfParse = require("pdf-parse");
// // // const { extractSkills } = require("../services/resumeService");

// // // exports.uploadResume = async (req, res) => {
// // //   try {
// // //     const pdfData = await pdfParse(req.file.buffer);

// // //     const resumeText = pdfData.text;

// // //     const skillsData = await extractSkills(resumeText);

// // //     res.status(200).json({
// // //       success: true,
// // //       skills: skillsData.skills,
// // //     });
// // //   } catch (error) {
// // //     console.log(error);

// // //     res.status(500).json({
// // //       message: error.message,
// // //     });
// // //   }
// // // };

// // const pdfParse = require("pdf-parse");
// // const { extractSkills } = require("../services/resumeService");
// // const {
// //   getJobsFromRemotive,
// //   calculateMatch,
// // } = require("../services/jobMatchService");

// // exports.uploadResume = async (req, res) => {
// //   try {
// //     const pdfData = await pdfParse(req.file.buffer);

// //     const resumeText = pdfData.text;

// //     const skillsData = await extractSkills(resumeText);

// //     const jobs = await getJobsFromRemotive(skillsData.skills);

// //     const matchedJobs = jobs
// //       .map((job) => {
// //         const searchableText = `
// //           ${job.title}
// //           ${job.description}
// //         `;

// //         let matches = 0;

// //         skillsData.skills.forEach((skill) => {
// //           if (searchableText.toLowerCase().includes(skill.toLowerCase())) {
// //             matches++;
// //           }
// //         });

// //         const score = Math.round((matches / skillsData.skills.length) * 100);

// //         return {
// //           title: job.title,
// //           company: job.company_name,
// //           location: job.candidate_required_location,
// //           url: job.url,
// //           match: score,
// //         };
// //       })
// //       .sort((a, b) => b.match - a.match)
// //       .slice(0, 10);

// //     res.status(200).json({
// //       success: true,
// //       skills: skillsData.skills,
// //       jobs: matchedJobs,
// //     });
// //     // console.log(jobs.length);
// //     // console.log(jobs[0]);
// //   } catch (error) {
// //     console.log(error);

// //     res.status(500).json({
// //       message: error.message,
// //     });
// //   }
// // };

// const pdfParse = require("pdf-parse");

// const { extractSkills } = require("../services/resumeService");

// const {
//   getJobsFromRemotive,
//   calculateMatch,
// } = require("../services/jobMatchService");

// exports.uploadResume = async (req, res) => {
//   try {
//     // Parse PDF
//     const pdfData = await pdfParse(req.file.buffer);

//     const resumeText = pdfData.text;

//     // Extract Role + Skills using Gemini
//     const skillsData = await extractSkills(resumeText);

//     // Search jobs using detected role
//     const jobs = await getJobsFromRemotive([
//       skillsData.role,
//       skillsData.skills[0],
//     ]);

//     // Calculate matching score
//     const matchedJobs = jobs
//       .map((job) => {
//         const searchableText = `
//           ${job.title}
//           ${job.description}
//         `;

//         const score = calculateMatch(skillsData.skills, searchableText);

//         return {
//           title: job.title,
//           company: job.company_name,
//           location: job.candidate_required_location,
//           url: job.url,
//           match: score,
//         };
//       })
//       .sort((a, b) => b.match - a.match)
//       .slice(0, 10);

//     res.status(200).json({
//       success: true,
//       role: skillsData.role,
//       skills: skillsData.skills,
//       jobs: matchedJobs,
//     });
//   } catch (error) {
//     console.log("Resume Upload Error:", error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

const pdfParse = require("pdf-parse");

const { extractSkills } = require("../services/resumeService");

const { getJobsFromRemotive } = require("../services/jobMatchService");

exports.uploadResume = async (req, res) => {
  try {
    const pdfData = await pdfParse(req.file.buffer);

    const resumeText = pdfData.text;

    const skillsData = await extractSkills(resumeText);

    const jobs = await getJobsFromRemotive([
      skillsData.role,
      skillsData.skills[0],
    ]);

    // Filter irrelevant jobs
   const relevantJobs = jobs.filter((job) => {
     const searchableText = `
    ${job.title}
    ${job.description}
  `.toLowerCase();

     const matchedSkills = skillsData.skills.filter((skill) =>
       searchableText.includes(skill.toLowerCase()),
     );

     // Require at least 2 skill matches
     return matchedSkills.length >= 2;
   });

    const matchedJobs = relevantJobs
      .map((job) => {
        const searchableText = `
          ${job.title}
          ${job.description}
        `.toLowerCase();

        const matchedSkills = skillsData.skills.filter((skill) =>
          searchableText.includes(skill.toLowerCase()),
        );

        // Better scoring
        const score = Math.min(95, matchedSkills.length * 15);

        return {
          title: job.title,
          company: job.company_name,
          location: job.candidate_required_location,
          url: job.url,
          match: score,
          matchedSkills,
        };
      })
      .sort((a, b) => b.match - a.match)
      .slice(0, 10);

    res.status(200).json({
      success: true,
      role: skillsData.role,
      skills: skillsData.skills,
      jobs: matchedJobs,
    });
  } catch (error) {
    console.log("Resume Upload Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};