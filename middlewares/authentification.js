/* eslint-disable quotes */
/* eslint-disable semi */
const jwt = require("jsonwebtoken");
const { User } = require("../schema");
const { Unauthorized } = require("../helpers/errors");
// const { log } = require("npmlog");
const { SECRET_KEY } = process.env;

const authentification = async (req, res, next) => {
  const { authorization } = req.headers;
  // console.log(authorization);
  // console.log(token);
  // console.log(bearer);
  if (!authorization) {
    throw new Unauthorized("Not authorized");
  }

  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    throw new Unauthorized("Not authorized");
  }

  try {
    const { _id } = jwt.verify(token, SECRET_KEY);
    // console.log(_id);
    const user = await User.findById(_id);
    // console.log(user);
    if (!user.token) {
      throw new Unauthorized("Not authorized");
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentification;
