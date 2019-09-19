const bcrypt = require("bcryptjs");
const User = require("../user/user.model");
const jwt = require("jsonwebtoken");
const config = require("../../config");

const createToken = data => {
  const i = "Management"; //Issuer
  const s = "management@staging.com"; //subject
  const a = "http://dev.com"; // audience

  const signOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: config.secrets.jwtExp,
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
          lastName: user.last_name
        });

        res.json({ token });
      } else {
        res
          .status(401)
          .json({ error: true, message: ["Invalid email and password"] });
      }
    } catch (e) {
      res
        .status(500)
        .json({ error: true, message: ["Unable to login right now"] });
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
        lastName: user.last_name
      });

      res.status(201).json({ token });
    } catch (e) {
      res
        .status(500)
        .json({ error: true, message: ["Unable to create a new user."] });
    }
  }
};

module.exports = controller;
