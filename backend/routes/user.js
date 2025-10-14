const express = require('express');
const router = express.Router();
const {
    showAllUsers,
    registerUser,
    logUser,
} = require ('../controllers/user.js');

router.post('/register', registerUser);
router.post('/login', logUser);

module.exports = router;