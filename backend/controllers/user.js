const userModel = require('../models/userModel.js');
const { generateToken } = require('../config/jwt.js');
const bcrypt = require('bcrypt');
const saltRounds = 3;

const showAllUsers = async (req, res) => {
    const result = await userModel.selectAllUsers();
    if (result.error) {
        res.status(400).json({ succes: false, message: result.error.message });
    } else {
        res.status(200).json({ success: true, data: result.data });
    }
}

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const hashed = await bcrypt.hash(password, saltRounds);

    const result = await userModel.insertUser(username, email, hashed);

    if (result.error) {
        res.status(400).json({ success: false, message: result.error.message });
    } else {
        res.status(201).json({ success: true, message: "User created successfully" });
    }
}

const logUser = async (req, res) => {
    const { email, password } = req.body;
    const result = await userModel.logUser(email);

    if (result.error) return res.status(400).json({ success: false, message: result.error.message });
    if (result.data.length === 0) return res.status(404).json({ success: false, message: "Email doesn't exists" });

    const user = result.data[0];
    const valid = await bcrypt.compare(password, user.password);

    if (!valid) return res.status(401).json({ success: false, message: "Incorrect password" });

    const token = generateToken({ id: user.id, email: user.email });

    res.status(200).json({ success: true, message: "Logged successfully", token, id: user.id });
}

module.exports = {
    showAllUsers,
    registerUser,
    logUser,
}
