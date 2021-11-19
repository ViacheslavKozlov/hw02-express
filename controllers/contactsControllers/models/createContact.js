/* eslint-disable quotes */
/* eslint-disable semi */
const { contactsServices } = require("../../../services");

const create = async (req, res, next) => {
  try {
    const data = await contactsServices.addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: data
    });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
