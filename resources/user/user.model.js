const { Model } = require("objection");
//const dbConfig = require("../../db/dbConfig");
const config = require("../../config");

Model.knex(config.dbConfig);

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get idColumn() {
    return "id";
  }

  fullName() {
    return this.first_name + " " + this.last_name;
  }

  static get virtualAttributes() {
    return ["fullName"];
  }
}

module.exports = User;
