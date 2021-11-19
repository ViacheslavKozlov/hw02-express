/* eslint-disable quotes */
/* eslint-disable semi */
const { contactsServices } = require("../../../services");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const data = await contactsServices.getContactById(contactId);
    if (!data) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }
    res.json({
      status: "success",
      code: 200,
      data: data
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;