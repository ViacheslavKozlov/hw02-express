/* eslint-disable quotes */
/* eslint-disable semi */
const express = require("express");
const router = express.Router();
const { contactsControls } = require("../controllers");
const contactBodyValidator = require("../middlewares/validationMiddleware.js");

router.get("/", contactsControls.getAllContacts);
router.get("/:contactId", contactsControls.getContactById);
router.post("/", contactBodyValidator, contactsControls.createContact);
router.delete("/:contactId", contactsControls.removeContact);
router.put("/:contactId", contactBodyValidator, contactsControls.updExistingContact);
router.patch("/:contactId/favorite", contactsControls.updFavoriteField);

module.exports = router;
