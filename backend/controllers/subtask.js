const subtaskModel = require('../models/subtaskModel.js')

//TODO: Implement all the model functions

const showAllSubtasks = async (req, res) => {

    const result = await subtaskModel.selectAllSubTasks();

    if (result.error) {
        res.status(400).json({ succes: false, message: result.error});
    } else {
        res.status(200).json({ success: true, data: result.data });
    }
}

const showSubTasks = async (req, res) => {
    const { task_id } = req.params;

    const result = await subtaskModel.selectAllTaskSubtasks(task_id);

    if (result.error) {
        res.status(400).json({ success: false, message: result.error });
    } else {
        res.status(200).json({ success: true, data: result.data });
    }
}

const addSubTask = async (req, res) => {
    const { task_id } = req.params;
    const { title } = req.body;

    const result = await subtaskModel.insertSubTask(task_id, title);
    
    if (result.error) {
        res.status(400).json({ success: false, message: error });
    } else {
        res.status(201).json({ success: true, message: "Subtask created successfully"});
    }
}

const deleteSubTask = async (req, res) => {
    const { subtask_id } = req.params;

    const result = await subtaskModel.deleteSubTask(subtask_id);
    
    if (result.error) {
        res.status(400).json({ success: false, message: error });
    } else {
        res.status(200).json({ success: true, message: "Subtask deleted succesfully"});
    }
}

const updateSubTask = async (req, res) => {
    const { subtask_id } = req.params;
    const { newStatus } = req.body;

    const result = await subtaskModel.updateSubTaskStatus(subtask_id, newStatus);

    if (result.error) {
        res.status(400).json({ success: false, message: error });
    } else {
        res.status(200).json({ success: true, message: "Subtask updated succesfully"});
    }
}

module.exports = {
    showAllSubtasks,
    showSubTasks,
    addSubTask,
    deleteSubTask,
    updateSubTask
}