const User = require("../models/User")

const register = async (req, res) => {
    res.json(req.body);
  },
  login = async (req, res) => {
    res.send("login user");
  };

module.exports = {
  register,
  login,
};
