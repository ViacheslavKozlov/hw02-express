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

class Conflict extends Error {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}
class Unauthorized extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

const errorHandler = (error, req, res, next) => {
  if (
    error instanceof Conflict ||
    error instanceof Unauthorized ||
    error instanceof ValidationError ||
    error instanceof MissedParamsError
  ) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: error.message });
};

module.exports = {
  Conflict,
  Unauthorized,
  ValidationError,
  MissedParamsError,
  errorHandler
};
