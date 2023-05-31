const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  console.log(err);
  let error = { ...err };

  error.message = err.message;

  if (err.name === "CastError") {
    const message = "Resource not found";
    error = new ErrorResponse(message, 404);
  }

  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  if (
    error.name === "ValidationError" &&
    error.inner &&
    Array.isArray(error.inner)
  ) {
    const message = Object.values(err.errors).join(", ");
    error = new ErrorResponse(message, 422);
  }

  if (
    error.name === "ValidationError" &&
    !error.inner &&
    !Array.isArray(error.inner)
  ) {
    const message = Object.values(err.errors)
      .map((error) => error.message)
      .join(", ");
    error = new ErrorResponse(message, 422);
  }

  if (error.name === "TokenExpiredError") {
    const message = "Invalid Token";
    error = new ErrorResponse(message, 422);
  }
  res.status(error.statusCode || 500).json({
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
