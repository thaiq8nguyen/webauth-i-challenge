const knex = require("knex");
const knexConfig = require("../knexfile");

const config = {
  port: process.env.PORT,

  dbConfig: knex(knexConfig.production)
};

module.exports = {
  config
};
