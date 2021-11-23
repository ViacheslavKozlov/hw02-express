/* eslint-disable quotes */
/* eslint-disable semi */

const Joi = require("joi");
const { ValidationError } = require("../helpers/errors.js");

const contactBodyValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean()
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    next(new ValidationError(validationResult.error.details));
  }
  next();
};

const userBodyValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    next(new ValidationError(validationResult.error.details));
  }
  next();
};

module.exports = { contactBodyValidator, userBodyValidator };
