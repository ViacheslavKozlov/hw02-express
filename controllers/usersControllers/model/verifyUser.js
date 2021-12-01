/* eslint-disable quotes */
/* eslint-disable semi */
const { User } = require("../../../schema");
const { NotFound } = require("../../../helpers/errors.js");

const verify = async (req, res, next) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verifyToken: verificationToken });
  if (!user) {
    throw new NotFound("User not found");
  }
  const { _id } = user;
  await User.findByIdAndUpdate(_id, {
    verifyToken: null,
    verify: true
  });
  res.json({
    status: "success",
    code: 200,
    message: "Verification successful"
  });
};

module.exports = verify;
