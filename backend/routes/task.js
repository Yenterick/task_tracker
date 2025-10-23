const express = require('express')
const router = express.Router()
const {
   showAllTasks,
   showTasks, 
   addTask,
   deleteTask,
   updateTask
} = require('../controllers/task.js');

router.get('/:user_id', showTasks);
router.post('/:user_id', addTask);
router.delete('/:task_id', deleteTask);
router.put('/:task_id', updateTask);

module.exports = router;