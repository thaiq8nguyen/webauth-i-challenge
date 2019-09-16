const { merge } = require("lodash");
const environment = process.env.NODE_ENV || "development";

const baseConfig = {
  environment,
  port: 4000,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: "3d"
  }
};

let environmentConfig = {};

if (environment === "development") {
  environmentConfig = require("./development").config;
}

module.exports = {
  config: merge(baseConfig, environmentConfig)
};
