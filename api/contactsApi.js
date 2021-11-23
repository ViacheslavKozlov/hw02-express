/* eslint-disable quotes */
/* eslint-disable semi */
const express = require("express");
const router = express.Router();
const { contactsControls } = require("../controllers");
const { contactBodyValidator } = require("../middlewares/validationMiddleware.js");
const authentification = require("../middlewares/authentification");

router.get("/", authentification, contactsControls.getAllContacts);
router.get("/:contactId", authentification, contactsControls.getContactById);
router.post("/", authentification, contactBodyValidator, contactsControls.createContact);
router.delete("/:contactId", authentification, contactsControls.removeContact);
router.put("/:contactId", authentification, contactBodyValidator, contactsControls.updExistingContact);
router.patch("/:contactId/favorite", authentification, contactsControls.updFavoriteField);

module.exports = router;
