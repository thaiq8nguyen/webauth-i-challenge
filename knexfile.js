// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db/management.sqlite3"
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/development/seeds"
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      }
    }
  },

  staging: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "webauth",
      user: "postgres",
      password: ""
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/staging"
    },

    useNullAsDefault: true
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
