const { body, validationResult } = require("express-validator");

exports.RegisterValidation = [
  body("name", "name should contain at least 4 character").isLength({ min: 4 }),
  body("email", "please enter a valid email").isEmail(),
  body("password", "password should contain at least 5 character ").isLength({
    min: 5,
  }),
];

exports.LogValidation = [body("email", "please enter a valid email").isEmail()];

exports.Validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
