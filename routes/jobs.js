const { Router } = require("express"),
router = Router();

const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

router.route("/api/v1/jobs").post(createJob).get(getAllJobs);
router.route("api/v1/jobs/:id").get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
