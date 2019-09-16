const faker =  require("faker");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(14);

const numberOfUsers = 10;

const createUser = () => {
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync(faker.internet.password(), salt)

  }
}
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const users = [];
  for(let i = 0; i < numberOfUsers; i++) {
    users.push(createUser())
  }
  await knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert(users);
      
    });
};
