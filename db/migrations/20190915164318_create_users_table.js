exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments().primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table
      .string("email")
      .notNullable()
      .unique();
    table.string("password").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
