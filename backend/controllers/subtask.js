const subtaskModel = require('../models/subtaskModel.js');
const taskModel = require('../models/taskModel.js');

const showAllSubtasks = async (req, res) => {
  try {
    const result = await subtaskModel.selectAllSubTasks();

    if (result.error) {
      return res.status(400).json({ success: false, message: result.error.message });
    }

    res.status(200).json({ success: true, data: result.data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const showSubTasks = async (req, res) => {
  try {
    const { task_id } = req.params;
    const user_id = req.user.id;

    const taskResult = await taskModel.selectTaskByID(task_id);
    const task = taskResult.data[0];

    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    if (task.user_id !== user_id) {
      return res.status(403).json({ success: false, message: 'Authorization declined' });
    }

    const result = await subtaskModel.selectAllTaskSubtasks(task_id);

    if (result.error) {
      return res.status(400).json({ success: false, message: result.error.message });
    }

    res.status(200).json({ success: true, data: result.data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const addSubTask = async (req, res) => {
  try {
    const { task_id } = req.params;
    const { title } = req.body;
    const user_id = req.user.id;

    const taskResult = await taskModel.selectTaskByID(task_id);
    const task = taskResult.data[0];

    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    if (task.user_id !== user_id) {
      return res.status(403).json({ success: false, message: 'Authorization declined' });
    }

    const result = await subtaskModel.insertSubTask(task_id, title);

    if (result.error) {
      return res.status(400).json({ success: false, message: result.error.message });
    }

    res.status(201).json({ success: true, message: 'Subtask created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const deleteSubTask = async (req, res) => {
  try {
    const { subtask_id } = req.params;
    const user_id = req.user.id;

    const subtaskResult = await subtaskModel.selectSubTaskByID(subtask_id);
    const subtask = subtaskResult.data[0];

    if (!subtask) {
      return res.status(404).json({ success: false, message: 'Subtask not found' });
    }

    const taskResult = await taskModel.selectTaskByID(subtask.task_id);
    const task = taskResult.data[0];

    if (!task || task.user_id !== user_id) {
      return res.status(403).json({ success: false, message: 'Authorization declined' });
    }

    const result = await subtaskModel.deleteSubTask(subtask_id);

    if (result.error) {
      return res.status(400).json({ success: false, message: result.error.message });
    }

    res.status(200).json({ success: true, message: 'Subtask deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const updateSubTask = async (req, res) => {
  try {
    const { subtask_id } = req.params;
    const { newStatus } = req.body;
    const user_id = req.user.id;

    const subtaskResult = await subtaskModel.selectSubTaskByID(subtask_id);
    const subtask = subtaskResult.data[0];

    if (!subtask) {
      return res.status(404).json({ success: false, message: 'Subtask not found' });
    }

    const taskResult = await taskModel.selectTaskByID(subtask.task_id);
    const task = taskResult.data[0];

    if (!task || task.user_id !== user_id) {
      return res.status(403).json({ success: false, message: 'Authorization declined' });
    }

    const result = await subtaskModel.updateSubTaskStatus(subtask_id, newStatus);

    if (result.error) {
      return res.status(400).json({ success: false, message: result.error.message });
    }

    res.status(200).json({ success: true, message: 'Subtask updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  showAllSubtasks,
  showSubTasks,
  addSubTask,
  deleteSubTask,
  updateSubTask
};
