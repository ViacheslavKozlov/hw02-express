/* eslint-disable quotes */
/* eslint-disable semi */
const jwt = require("jsonwebtoken");
const { User } = require("../schema");
const { Unauthorized } = require("../helpers/errors");
const { SECRET_KEY } = process.env;

const authentification = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    next(new Unauthorized("Not authorized"));
  }

  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(new Unauthorized("Not authorized"));
  }

  try {
    const { _id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(_id);
    if (!user.token) {
      next(new Unauthorized("Not authorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentification;
