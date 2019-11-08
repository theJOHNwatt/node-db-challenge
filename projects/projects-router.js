const express = require('express');
const db = require('./projects-model.js');
const router = express.Router();

router.get('/', (req,res) => {
    db.getProjects()
        .then(proj => {
            proj.forEach(item => {
                if (item.completed) {
                    item.completed = 'true'
                } else {
                    item.completed = 'false'
                }
            })
            res.status(201).json(proj)
        })
        .catch(err => {
            res.status(500).json({error: 'Error getting projects'})
        })
})

router.get('/resources', (req,res) => {
    db.getResources()
    .then(reso => {
        res.status(201).json(reso)
    })
    .catch(err => {
        res.status(500).json({error:'Could not find resources'})
    })
})

router.get('/tasks', (req, res) => {
    db.getTasks()
        .then(task => {
            task.forEach(item => {
                if (item.completed) {
                    item.completed = 'true'
                } else {
                    item.completed = 'false'
                }
            })
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({error:'Error getting tasks'})
        })
})

router.post('/', (req, res) => {
    db.addProject(req.body)
        .then(proj => {
            res.status(201).json(proj)
        })
        .catch(err => {
            res.status(500).json({error: 'Error adding project'})
        })
})

router.post('/tasks', (req, res) => {
    db.addTask(req.body)
        .then(proj => {
            res.status(201).json(proj)
        })
        .catch(err => {
            res.status(500).json({error: 'Error adding task'})
        })
})

router.post('/resources', (req, res) => {
    db.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({error: 'Error adding resource: '})
        })
})

module.exports = router;