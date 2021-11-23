/* eslint-disable quotes */
/* eslint-disable semi */
const { usersServices } = require("../../../services");

const logout = async (req, res, next) => {
  const { _id } = req.user;
  try {
    await usersServices.logoutUser(_id);
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
