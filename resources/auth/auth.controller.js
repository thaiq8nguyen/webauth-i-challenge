const bcrypt = require("bcryptjs");
const User = require("../user/user.model");
const jwt = require("jsonwebtoken");
const { config } = require("../../config");

const createToken = data => {
  const i = "localhost"; //Issuer
  const s = "admin@localhost.com"; //subject
  const a = "http://dev.com"; // audience

  const signOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: "1h",
    algorithm: "HS256"
  };
  return jwt.sign(data, config.secrets.jwt, signOptions);
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
          lastName: user.last_name
        });
        console.log(token);
        req.session.token = token; // making a cookie
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
        lastName: user.last_name
      });
      req.session.token = token;
      res.status(201).json({ error: false });
    } catch (e) {
      res
        .status(500)
        .json({ error: true, message: "Unable to create a new user." });
    }
  }
};

module.exports = controller;
