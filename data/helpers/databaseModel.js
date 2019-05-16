const db = require("../dbConfig.js");

module.exports = {
  insert,
  remove,
  getAll,
  findById
};

function getAll() {
  return db("database");
}

function insert(data) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db("database")
    .insert(data, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("database")
    .where({ id })
    .first();
}

function remove(id) {
  return db("database")
    .where({ id })
    .del();
}
