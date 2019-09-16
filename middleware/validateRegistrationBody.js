const User = require("../resources/user/user.model");

const validateRegistrationBody = async (req, res, next) => {
  const { last_name, first_name, email, password } = req.body;

  const errors = [];

  if (last_name.length < 2) {
    errors.push("Last name must have 2 or more characters.");
  }

  if (first_name.length < 2) {
    errors.push("First name must have 2 or more characters.");
  }

  if (email.length < 2) {
    errors.push("Email must have 2 or more characters.");
  }

  if (password.length < 6) {
    errors.push("Password must have 6 or more characters.");
  }

  const user = await User.query().findOne({ email });

  if (user) {
    errors.push("Your email has been taken.");
  }

  if (errors.length === 0) {
    next();
  } else {
    res.status(400).json({ message: errors });
  }
};

module.exports = validateRegistrationBody;
