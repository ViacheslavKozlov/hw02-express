/* eslint-disable quotes */
/* eslint-disable semi */
const express = require("express");
const router = express.Router();

const { usersControls } = require("../controllers");
const authentification = require("../middlewares/authentification");

router.post("/signup", usersControls.singup);
router.post("/login", usersControls.login);
router.post("/logout", authentification, usersControls.logout);

module.exports = router;
