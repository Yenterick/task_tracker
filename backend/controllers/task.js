const taskModel = require('../models/taskModel.js');

const showAllTasks = async (req, res) => {
    const result = await taskModel.selectAllTasks();
    if (result.error) {
        res.status(400).json({ succes: false, message: result.error});
    } else {
        res.status(200).json({ success: true, data: result.data });
    }
}

const showTasks = async (req, res) => {
    const { user_id } = req.params;

    const result = await taskModel.selectAllUserTasks(user_id);

    if (result.error) {
        res.status(400).json({ success: false, message: result.error });
    } else {
        res.status(200).json({ success: true, data: result.data });
    }
}

const addTask = async (req, res) => {
    const { user_id } = req.params;
    const { title, description, priority } = req.body;

    const result = await taskModel.insertTask(user_id, title, description, priority);
    
    if (result.error) {
        res.status(400).json({ success: false, message: error });
    } else {
        res.status(201).json({ success: true, message: "Task created successfully"});
    }
}

const deleteTask = async (req, res) => {
    const { task_id } = req.params;

    const result = await taskModel.deleteTask(task_id);
    
    if (result.error) {
        res.status(400).json({ success: false, message: error });
    } else {
        res.status(204).json({ success: true, message: "Task deleted succesfully"});
    }
}

module.exports = {
    showAllTasks,
    showTasks,
    addTask,
    deleteTask
}