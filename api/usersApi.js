/* eslint-disable quotes */
/* eslint-disable semi */
const express = require("express");
const router = express.Router();

const { usersControls } = require("../controllers");
const { userBodyValidator } = require("../middlewares/validationMiddleware.js");
const authentification = require("../middlewares/authentification");

router.post("/signup", userBodyValidator, usersControls.singup);
router.post("/login", userBodyValidator, usersControls.login);
router.post("/logout", authentification, usersControls.logout);
router.get("/current", authentification, usersControls.currentUser);

module.exports = router;
