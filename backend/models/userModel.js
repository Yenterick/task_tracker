const db = require('../config/database.js');

const userModel = {
    selectAllUsers : async () => {
        try {
            const [ rows ] = await db.promise().query('SELECT * FROM users');
            return { success: true, data: rows }
        } catch (e) {
            return { success: false, error: e }
        }
    },

    insertUser : async (username, email, password) => {
        try {
            const [ rows ] = await db.promise().query('INSERT INTO users (username, email, password) values (?, ?, ?)', [username, email, password]);
            return { success: true, data: rows };
        } catch (e) {
            return { success: false, error: e }
        }
    },

    findUser : async (id) => {
        try {
            const [ rows ] = await db.promise().query('SELECT * FROM users WHERE id = ', [id]);
            return { success: true, data: rows }
        } catch (e) {
            return { success: false, error: e }
        }
    },

    logUser : async (email) => {
        try {
            const [ rows ] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
            return { succes: true, data: rows }
        } catch (e) {
            return { success: false, error: e }
        }
    }
};

module.exports = userModel;