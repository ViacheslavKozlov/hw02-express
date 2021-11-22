/* eslint-disable quotes */
/* eslint-disable semi */
const { User } = require("../../../schema");
const { Conflict } = require("../../../helpers/errors");

const singup = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const data = await User.findOne({ email });
    if (data) {
      throw new Conflict("Email in use");
    }
    const user = new User({ email });
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
