const jwt = require("jsonwebtoken");
const { config } = require("../config");

const requiresLogin = (req, res, next) => {
  const token = req.token;

  try {
    jwt.verify(token, config.secrets.jwt, (error, decoded) => {
      next();
    });
  } catch (e) {
    res.status(401).json({ error: true, message: "Invalid token." });
  }
};

module.exports = requiresLogin;
