/* eslint-disable quotes */
/* eslint-disable semi */
const gravatar = require("gravatar");
const { User } = require("../../../schema");
const { Conflict } = require("../../../helpers/errors");

const singup = async (req, res, next) => {
  const { email, password } = req.body;
  const avatar = gravatar.url(email, { s: 200 }, false);
  try {
    const data = await User.findOne({ email });
    if (data) {
      return new Conflict("Email in use");
    }
    const user = new User({ email, avatarURL: avatar });
    user.setPassword(password);
    await user.save();
    res.status(201).json({
      status: "created",
      code: 201,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

module.exports = singup;
