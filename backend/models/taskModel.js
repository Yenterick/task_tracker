const db = require("../config/database");

const TaskModel = {
    selectAllTasks : async () => {
        try {
            const [ rows ] = await db.promise().query('SELECT * FROM tasks');
            return { success: true, data: rows};
        } catch (e) {
            return { success: false, message: e };
        }
    },

    selectAllUserTasks : async (user_id) => {
        try{
            const [ rows ] = await db.promise().query('SELECT * FROM tasks WHERE user_id = ?', [user_id]);
            return { success: true, data: rows };
        } catch (e) {
            return { success: false, message: e};
        }
    },

    insertTask : async ()


};

module.exports = TaskModel;