/* eslint-disable quotes */
/* eslint-disable semi */
// const { usersServices } = require("../../../services");
const { User } = require("../../../schema");

const logout = async (req, res, next) => {
  const { _id } = req.user;
  try {
    await User.findByIdAndUpdate(_id, { token: null });
    res.json({
      status: "No Content",
      code: 204,
      message: "success logout"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
