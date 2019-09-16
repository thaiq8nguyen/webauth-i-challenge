const User = require("./user.model");
const bcrypt = require("bcryptjs");
const controller = {
  createUser: async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    try {
      const user = await User.query().insert({
        first_name,
        last_name,
        email,
        password: bcrypt.hashSync(password, 14)
      });
      res.status(201).json({ user });
    } catch (e) {
      res.status(500).json({ message: "Unable to create a new user." });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.query().select(
        "first_name",
        "last_name",
        "email"
      );
      res.json({ users });
    } catch (e) {
      res.status(500).json({ message: "Unable to retrieve users." });
    }
  }
};

module.exports = controller;
