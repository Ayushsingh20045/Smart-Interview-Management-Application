const Job = require("../models/Job");

// CREATE JOB

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create({
      ...req.body,
      userId: req.user,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL JOBS

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({
      userId: req.user,
    }).sort({
      createdAt: -1,
    });

    res.json(jobs);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE

exports.deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE

exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(job);
  } catch (error) {
    res.status(500).json(error);
  }
};
