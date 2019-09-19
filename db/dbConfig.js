const knex = require("knex");
const environment = process.env.NODE_ENV || "development";
const knexConfig = require("../knexfile");

module.exports = knex(knexConfig[environment]);