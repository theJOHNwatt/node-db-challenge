
exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      task_description: "test 1",
      notes: "optional",
      completed: false,
      project_id: 1
    },
    {
      task_description: "test 2",
      notes: "optional",
      completed: false,
      project_id: 2
    },
    {
      task_description: "test 3",
      notes: "optional",
      completed: false,
      project_id: 3
    },
    {
      task_description: "test 4",
      notes: "optional",
      completed: false,
      project_id: 3
    },
    {
      task_description: "test 4",
      notes: "optional",
      completed: false,
      project_id: 1
    }
  ]);
};
