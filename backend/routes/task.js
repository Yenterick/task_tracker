const express = require('express')
const router = express.Router()
const {
   showAllTasks,
   showTasks, 
   addTask,
   deleteTask,
   updateTask,
   updateTaskStatus
} = require('../controllers/task.js');

router.get('/:user_id', showTasks);
router.post('/:user_id', addTask);
router.delete('/:task_id', deleteTask);
router.put('/:task_id', updateTask);
router.put('/status/:task_id', updateTaskStatus);

module.exports = router;