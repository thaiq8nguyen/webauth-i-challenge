const User = require("../resources/user/user.model");

const validateLoginBody = async (req, res, next) => {
  const { email, password } = req.body;

  if (email && password) {
    const user = await User.query().findOne({ email });

    if (user) {
      next();
    } else {
      res.status(400).json({ message: "Cannot find your account" });
    }
  } else {
    res
      .status(400)
      .json({ message: "Missing email and password combination." });
  }
};

module.exports = validateLoginBody;
