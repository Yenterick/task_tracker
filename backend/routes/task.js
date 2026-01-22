const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware.js');
const {
   showAllTasks,
   showTasks, 
   addTask,
   deleteTask,
   updateTask,
   updateTaskStatus
} = require('../controllers/task.js');

router.get('/', auth, showTasks);
router.post('/', auth, addTask);
router.delete('/:task_id', auth, deleteTask);
router.put('/:task_id', auth, updateTask);
router.put('/status/:task_id', auth, updateTaskStatus);

module.exports = router;