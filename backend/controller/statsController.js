const Job = require("../models/Job");

const getStats = async (req, res) => {
  try {
    const jobs = await Job.find({
      userId: req.user,
    });

    const stats = {
      totalApplications: jobs.length,

      interviews: jobs.filter((job) => job.status === "Interview").length,

      offers: jobs.filter((job) => job.status === "Offer").length,

      rejected: jobs.filter((job) => job.status === "Rejected").length,
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getStats,
};
