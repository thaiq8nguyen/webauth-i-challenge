const { config } = require("../config");

const sessionConfig = {
  name: "_management",
  secret: config.secrets.jwt,
  cookie: {
    maxAge: 1000 * 60,
    secure: false, // true means only send cookie over http
    httpOnly: true // true means JS has no access to the cookie
  },
  resave: false,
  saveUninitialized: true // GPDR Compliance
};

module.exports = sessionConfig;
