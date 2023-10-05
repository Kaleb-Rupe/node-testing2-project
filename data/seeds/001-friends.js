exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex("friends")
    .truncate()
    .then(function () {
      return knex("friends").insert([
        { name: "mark" },
        { name: "ryan" },
        { name: "kyle" },
        { name: "jordan" },
      ]);
    });
};
