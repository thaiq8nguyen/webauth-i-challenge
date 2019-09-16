const dotenv = require("dotenv");
dotenv.config();

const config = {
  secrets: {
    jwt: process.env.JWT_SECRET
  }
};

module.exports = {
  config
};
