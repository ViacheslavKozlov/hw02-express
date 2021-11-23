/* eslint-disable quotes */
/* eslint-disable semi */
const { contactsServices } = require("../../../services");

const updContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  const { _id } = req.user;
  try {
    const data = await contactsServices.updateContact(contactId, req.body, _id);
    if (!name ?? !email ?? !phone) {
      const error = new Error("missing fields");
      error.status = 400;
      throw error;
    }
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

module.exports = updContact;
