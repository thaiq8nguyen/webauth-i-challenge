const knex = require("knex");
const knexConfig = require("../knexfile");

const config = {
  secrets: {
    jwt: "I Love Node JS!"
  },

  dbConfig: knex(knexConfig.staging)
};

module.exports = {
  config
};
