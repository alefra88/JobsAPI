const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { badRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
  },
  login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new badRequestError(`please provide email and password`);
    }
    const user = await User.findOne({ email });
    //compare password
    if (!user) {
      throw new UnauthenticatedError("Invalid credentials");
    }
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
  };

module.exports = {
  register,
  login,
};
