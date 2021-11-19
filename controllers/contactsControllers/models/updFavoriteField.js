/* eslint-disable quotes */
/* eslint-disable semi */
const { contactsServices } = require("../../../services");

const updContactFavoriteField = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    if (!Object.keys(req.body)) {
      const error = new Error("missing field favorite");
      error.status = 400;
      throw error;
    }
    const data = await contactsServices.updateContact(contactId, req.body);
    if (!data) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      status: "success",
      code: 201,
      data: data
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updContactFavoriteField;