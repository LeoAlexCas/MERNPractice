const express = require('express');
const router = express.Router();

const Task = require('../models/tasks');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const taskOne = new Task({title, description});
    await taskOne.save();
    res.json({status: "task saved"});
});

router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const updateTask = { title, description };
    await Task.findByIdAndUpdate(req.params.id, updateTask);
    res.json({status: "task updated"});

})

module.exports = router;