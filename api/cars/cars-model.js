const db = require("../../data/dbConfig.js");

function getAll() {
  return db("cars");
}

function getById(id) {
  return db("cars").where("id", id).first();
}

module.exports = {
  getAll,
  getById,
};
