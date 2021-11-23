/* eslint-disable quotes */
/* eslint-disable semi */
const { contactsServices } = require("../../../services");

const remove = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  try {
    const data = await contactsServices.removeContact(contactId, _id);
    if (!data) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }
    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
      data: data
    });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
