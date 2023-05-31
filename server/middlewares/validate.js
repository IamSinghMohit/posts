const Yup = require("yup");

class Validate {
  static signinValidation(req, res, next) {
    const schema = Yup.object({
      body: Yup.object({
        name: Yup.string().min(2).required("Please enter your name"),
        email: Yup.string().email().required("Please enter your email"),
        password: Yup.string().min(5).required("Please enter your password"),
      }),
    })

    return Validate.validate(schema)(req, res, next);
  }

  static validate(schema) {
    return async (req, res, next) => {
      try {
        await schema.validate({
          body: req.body,
          /* query: req.query,
          params: req.params, */
        });
        return next();
      } catch (err) {
        next(err);
      }
    };
  }
}

module.exports = Validate;
