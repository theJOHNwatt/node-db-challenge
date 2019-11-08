
exports.seed = function(knex) {
  return knex("projects").insert([
    {
      name: "seed project 1",
      description: "test 1",
      completed: false
    },
    {
      name: "seed project 2",
      description: "test 2",
      completed: false
    },
    {
      name: "seed project 3",
      description: "test 3",
      completed: false
    }
  ]);
};
