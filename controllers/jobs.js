
const getAllJobs = async (req, res) => {
    res.send("get all jobs...");
  },
  getJob = async (req, res) => {
    res.send("getting a job...");
  },
  createJob = async (req, res) => {
    res.send("creating job...");
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
