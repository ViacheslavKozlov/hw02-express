/* eslint-disable quotes */
/* eslint-disable semi */

const { User } = require("../../schema");

const createUser = async body => {
  try {
    const user = await User.create(body);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

const loginUser = async (_id, token) => {
  try {
    const user = await User.findByIdAndUpdate(_id, { token });
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

const logoutUser = async _id => {
  // console.log(_id);
  try {
    await User.findByIdAndUpdate(_id, { token: null });
  } catch (error) {
    console.log(error.message);
  }
};

const getCurrentUser = async _id => {
  try {
    const user = await User.findById(_id);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
  getCurrentUser
};
