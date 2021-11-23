/* eslint-disable quotes */
/* eslint-disable semi */
const { usersServices } = require("../../../services");
const { Unauthorized } = require("../../../helpers/errors.js");

const currentUser = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const user = await usersServices.getCurrentUser(_id);
    if (!user) {
      throw new Unauthorized("Not authorized");
    }
    res.json({
      status: "OK",
      code: 200,
      data: { user }
    });
  } catch (error) {
    next(error);
  }
};
module.exports = currentUser;
