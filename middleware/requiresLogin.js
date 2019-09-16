const jwt = require("jsonwebtoken");
const { config } = require("../config");

const requiresLogin = (req, res, next) => {
  const token = req.token;

  try {
    const isAuthorized = jwt.verify(token, config.secrets.jwt);
    next();
  } catch (e) {
    res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = requiresLogin;
