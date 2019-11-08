
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('description', 255);
        tbl.boolean('completed')
    })
    .createTable('resource', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('description', 255);
        tbl.unique('name');
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 255).notNullable();
        tbl.boolean('completed')
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects')
  .dropTableIfExists('resource')
  .dropTableIfExists('tasks')
};
