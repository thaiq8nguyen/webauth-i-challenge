const bcrypt = require("bcryptjs");
const User = require("../user/user.model");
const jwt = require("jsonwebtoken");
const { config } = require("../../config");

const createToken = data => {
  return jwt.sign(data, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  });
};

const controller = {
  // login
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.query().findOne({ email });

      if (user && bcrypt.compareSync(password, user.password)) {
        const token = createToken({
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email
        });
        req.session.token = token;
        res.json({ error: false });
      } else {
        res
          .status(401)
          .json({ error: true, message: "Invalid email and password" });
      }
    } catch (e) {
      res
        .status(500)
        .json({ error: true, message: "Unable to login right now" });
    }
  },

  // registration
  register: async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    try {
      const user = await User.query().insert({
        first_name,
        last_name,
        email,
        password: bcrypt.hashSync(password, 14)
      });

      const token = createToken({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email
      });

      res.status(201).json({ token });
    } catch (e) {
      res.status(500).json({ message: "Unable to create a new user." });
    }
  }
};

module.exports = controller;
