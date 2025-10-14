const express = require('express')
const router = express.Router()
const {
   showAllTasks,
   showTasks, 
   addTask,
   deleteTask
} = require('../controllers/task');

router.get('/:user_id', showTasks);
router.post('/addTask/:user_id', addTask);
router.delete('/:task_id', deleteTask);

module.exports = router;