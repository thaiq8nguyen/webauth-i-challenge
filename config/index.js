const { merge } = require("lodash");
const environment = process.env.NODE_ENV || "staging";

const baseConfig = {
  environment,
  port: 4000,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: "1h"
  }
};

let environmentConfig = {};

switch (environment) {
  case "development":
    environmentConfig = require("./development").config;
    break;
  case "staging":
    environmentConfig = require("./staging").config;
    break;
  case "production":
    environmentConfig = require("./production").config;
    break;
  default:
    environmentConfig = require("./development").config;
}

module.exports = merge(baseConfig, environmentConfig);
