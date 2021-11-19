/* eslint-disable quotes */
/* eslint-disable semi */
const { contactsServices } = require("../../../services");

const get = async (req, res, next) => {
  try {
    const data = await contactsServices.listContacts();
    res.json({
      status: "success",
      code: 200,
      data: data
    });
  } catch (error) {
    next(error);
  }
};

module.exports = get;
