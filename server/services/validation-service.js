const Joi = require("@hapi/joi");

class ValidationService {
  signin(data) {
    const schema = Joi.object({
      email: Joi.string()
        .email()
        .lowercase()
        .required()
        .message("invalid email"),
      password: Joi.string()
        .min(6)
        .required()
        .message("password must be valid string"),
      name: Joi.string().required().message("name is required"),
    });

    return schema.validate(data);
  }

  login(data) {
    const schema = Joi.object({
      email: Joi.string()
        .email()
        .lowercase()
        .required()
        .message("invalid email"),
      password: Joi.string()
        .min(6)
        .required()
        .message("password must be valid string"),
    });

    return schema.validate(data);
  }
}

module.exports = new ValidationService();
