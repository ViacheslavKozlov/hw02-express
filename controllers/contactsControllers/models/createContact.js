/* eslint-disable quotes */
/* eslint-disable semi */
const { contactsServices } = require("../../../services");

const create = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const data = await contactsServices.addContact({ ...req.body, owner: _id });
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
