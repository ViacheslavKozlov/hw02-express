/* eslint-disable quotes */
/* eslint-disable semi */
const jwt = require("jsonwebtoken");
const { usersServices } = require("../../../services");
const { User } = require("../../../schema");
const { Unauthorized, NotFound } = require("../../../helpers/errors");

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !user.comparePassword(password)) {
      throw new Unauthorized("Email or password is wrong");
    }
    if (!user.verify) {
      throw new NotFound("User not found");
    }

    const { _id } = user;
    const payload = { _id };
    const token = jwt.sign(payload, SECRET_KEY);

    await usersServices.loginUser(_id, token);
    res.json({
      status: "OK",
      code: 200,
      data: {
        token,
        user: {
          email: email,
          password: password
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
