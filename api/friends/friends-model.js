const db = require("../../data/dbConfigs");

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

async function insert(hobbit) {
  return await db("freinds")
    .insert(hobbit)
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
