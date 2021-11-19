/* eslint-disable quotes */
/* eslint-disable semi */

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class MissedParamsError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

const errorHandler = (error, req, res, next) => {
  if (error instanceof ValidationError ?? error instanceof MissedParamsError) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: error.message });
};

module.exports = {
  ValidationError,
  MissedParamsError,
  errorHandler
};
