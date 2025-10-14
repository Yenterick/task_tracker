const db = require("../config/database");

const TaskModel = {
    selectAllTasks : async () => {
        try {
            const [ rows ] = await db.promise().query('SELECT * FROM tasks');
            return { success: true, data: rows };
        } catch (e) {
            return { success: false, error: e };
        }
    },

    selectAllUserTasks : async (user_id) => {
        try {
            const [ rows ] = await db.promise().query('SELECT * FROM tasks WHERE user_id = ?', [user_id]);
            return { success: true, data: rows };
        } catch (e) {
            return { success: false, error: e };
        }
    },

    insertTask : async (user_id, title, description, priority) => {
        try {
            const [ rows ] = await db.promise().query('INSERT INTO tasks (user_id, title, description, status, priority) VALUES (?, ?, ?, ?, ?)', [user_id, title, description, "pending", priority]);
            return { successs: true, data: rows };
        } catch (e) {
            return { success: false, error: e };
        }
    },

    deleteTask : async (task_id) => {
        try {
            const [ rows ] = await db.promise().query('DELETE * FROM tasks WHERE id = ?', [task_id]);
            return { success: true, data: rows };
        } catch (e) {
            return { success: false, error: e};
        }
    }
};

module.exports = TaskModel;