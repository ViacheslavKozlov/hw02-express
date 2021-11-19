/* eslint-disable semi */
/* eslint-disable quotes */
module.exports = {
  getAllContacts: require("./models/getAllContacts.js"),
  getContactById: require("./models/getContactById"),
  createContact: require("./models/createContact"),
  removeContact: require("./models/removeContact.js"),
  updExistingContact: require("./models/updExistingContact"),
  updFavoriteField: require("./models/updFavoriteField")
};
