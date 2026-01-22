const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware.js');
const { 
    showAllSubtasks,
    showSubTasks,
    addSubTask,
    deleteSubTask,
    updateSubTask
} = require('../controllers/subtask.js');

router.get('/:task_id', auth, showSubTasks);
router.post('/:task_id', auth, addSubTask);
router.delete('/:subtask_id', auth, deleteSubTask);
router.put('/:subtask_id', auth, updateSubTask);

module.exports = router;


