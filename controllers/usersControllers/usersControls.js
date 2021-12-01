/* eslint-disable quotes */
/* eslint-disable semi */
module.exports = {
  singup: require("./model/signup.js"),
  login: require("./model/login.js"),
  logout: require("./model/logout.js"),
  currentUser: require("./model/currentUser.js"),
  updUserAvatar: require("./model/updAvatar.js"),
  verifyUser: require("./model/verifyUser.js"),
  repVerifyUser: require("./model/repVerifyUser.js")
};
