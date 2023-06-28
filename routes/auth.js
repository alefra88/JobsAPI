const { Router } = require("express"),
  router = Router();

const { login, register } = require("../controllers/auth");

router.post("/api/v1/auth/register", register);

router.post("/api/v1/auth/login", login);

module.exports = router;
