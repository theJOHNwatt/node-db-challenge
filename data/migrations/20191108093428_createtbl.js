
exports.up = function(knex) {
  return knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl
            .string('project_name')
            .unique()
            .notNullable();
        tbl.string('project_description', 255);
        tbl
            .boolean('completed')
            .defaultTo(false)
            .notNullable();
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl
            .string('task_description', 255)
            .notNullable();
        tbl.string('notes');
        tbl
            .boolean('completed')
            .defaultTo(false)
            .notNullable();
        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl
            .string('name')
            .unique()
            .notNullable();
        tbl.string('description', 255);   
    })
    .createTable('project_resource', tbl => {
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        tbl
            .integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resource')
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resource')
};
