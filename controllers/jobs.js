const Job = require("../models/Job"),
  { StatusCodes } = require("http-status-codes"),
  { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
    const jobs = await job
      .find({ createdBy: req.res.userId })
      .sort("createdAt");
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
  },
  getJob = async (req, res) => {
    res.send("getting job...");
  },
  createJob = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
    res.json(req.body);
  },
  updateJob = async (req, res) => {
    res.send("updating job...");
  },
  deleteJob = async (req, res) => {
    res.send("deleting job...");
  };

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
