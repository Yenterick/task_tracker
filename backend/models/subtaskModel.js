const db = require("../config/database.js");

const subtaskModel = {
    selectAllSubTasks : async () => {
        try {
            const [ rows ] = await db.promise().query('SELECT * FROM subtasks');
            return { success: true, data: rows };
        } catch (e) {
            return { success: false, error: e };
        }
    },

    selectAllTaskSubtasks : async (subtask_id) => {
        try {
            const [ rows ] = await db.promise().query('SELECT * FROM subtasks WHERE task_id = ?', [subtask_id]);
            return { success: true, data: rows };
        } catch (e) {
            return { success: false, error: e };
        }
    },

    insertSubTask : async (task_id, title) => {
        try {
            const [ rows ] = await db.promise().query('INSERT INTO subtasks (task_id, title, status) VALUES (?, ?, ?)', [task_id, title, "pending"]);
            return { success: true, data: rows };
        } catch (e) {
            return { success: false, error: e };
        }
    },

    deleteSubTask : async (subtask_id) => {
        try {
            const [ rows ] = await db.promise().query('DELETE FROM subtasks WHERE id = ?', [subtask_id]);
            return { success: true, data: rows };
        } catch (e) {
            return { success: false, error: e };
        }
    },

    updateSubTaskStatus : async (subtask_id, newStatus) => {
        try {
            const [ rows ] = await db.promise().query('UPDATE subtasks SET status = ? WHERE id = ?', [newStatus, subtask_id]);
            return { success: true, data: rows };
        } catch (e) {
            return { success: false, error: e };
        } 
    }

};

module.exports = subtaskModel;