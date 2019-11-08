
exports.seed = function(knex) {
  return knex("projects").insert([
    {
      project_name: "seed project 1",
      project_description: "test 1",
      completed: false
    },
    {
      project_name: "seed project 2",
      project_description: "test 2",
      completed: false
    },
    {
      project_name: "seed project 3",
      project_description: "test 3",
      completed: false
    }
  ]);
};
