const express = require('express')
const router = express.Router()
const { 
    showAllSubtasks,
    showSubTasks,
    addSubTask,
    deleteSubTask,
    updateSubTask
} = require('../controllers/subtask.js')

router.get('/test', showAllSubtasks);
router.get('/:task_id', showSubTasks);
router.post('/:task_id', addSubTask);
router.delete('/:subtask_id', deleteSubTask);
router.put('/:subtask_id', updateSubTask);

module.exports = router;


