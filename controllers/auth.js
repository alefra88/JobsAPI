const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { badRequestError } = require("../errors");

const register = async (req, res) => {
    const user = await User.create({ ...req.body });
    res.status(StatusCodes.CREATED).json({ user });
  },
  login = async (req, res) => {
    res.send("login user");
  };

module.exports = {
  register,
  login,
};
