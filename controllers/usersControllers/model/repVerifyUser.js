/* eslint-disable quotes */
/* eslint-disable semi */
const { User } = require("../../../schema");
const { MissedParamsError } = require("../../../helpers/errors.js");

const repeat = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    throw new MissedParamsError("missing required field email");
  }
  const user = await User.findOne({ email });
  if (!user.verify) {
    await User.findOneAndUpdate(user.verifyToken, { verifyToken: null, verify: true });
  } else {
    throw new MissedParamsError("Verification has already been passed");
  }
  res.json({
    status: "success",
    code: 200,
    message: "Verification email sent"
  });
};
module.exports = repeat;
