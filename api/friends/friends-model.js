const db = require("../../data/dbConfig");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
};

function getAll() {
  return db("friends");
}

function getById(id) {
  return db("friends").where("id", id).first();
}

async function insert(freind) {
  return await db("friends")
    .insert(freind)
    .then(([id]) => {
      return db("friends").where("id", id).first();
    });
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}
