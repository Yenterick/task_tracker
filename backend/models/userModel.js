const db = require('../config/database.js');

const userModel = {
    selectAllUsers : async () => {
        try {
            const [ rows ] = await db.promise().query('SELECT * FROM users');
            return { success: true, data: rows};
        } catch (e) {
            return { success: false, message: e };
        }
    },

    insertUser : async (email, username, password) => {
        try {
            const [ rows ] = await db.promise().query('INSERT INTO users (username, email, password) values (?, ?, ?)', [email, username, password]);
            return { success: true, data: rows };
        } catch (e) {
            return { success: false, message: e };
        }
    },

    findUser : async (id) => {
        try {
            const [ rows ] = await db.promise().query('SELECT * FROM users WHERE id = ', [id]);
            return { success: true, data: rows};
        } catch (e) {
            return { success: false, message: e };
        }
    },

    logUser : async (email) => {
        try {
            const [ rows ] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
            return { succes: true, data: rows };
        } catch (e) {
            return { success: false, error: e};
        }
    }
};

module.exports = userModel;