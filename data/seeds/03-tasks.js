
exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      desription: "test 1",
      notes: "optional",
      completed: false,
      project_id: 1
    },
    {
      desription: "test 2",
      notes: "optional",
      completed: false,
      project_id: 2
    },
    {
      desription: "test 3",
      notes: "optional",
      completed: false,
      project_id: 3
    },
    {
      desription: "test 4",
      notes: "optional",
      completed: false,
      project_id: 3
    },
    {
      desription: "test 4",
      notes: "optional",
      completed: false,
      project_id: 1
    }
  ]);
};
