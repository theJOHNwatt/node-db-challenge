const db = require("../data/db-config.js");

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks
};


function getProjects() {
    return db('projects');
}

function getResources() {
    return db('resources')
}

function getTasks() {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.id')
        .select('t.task_description', 't.notes', 't.completed', 'p.project_name', 'p.project_description')
}

function addProject(project) {
    return db("projects").insert(project)
}

function addTask(task) {
    return db("tasks").insert(task)
}

function addResource(resource) {
    return db("resources").insert(resource)
}