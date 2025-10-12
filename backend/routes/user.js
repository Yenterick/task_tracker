const express = require('express');
const router = express.Router();
const {
    registerUser,
    logUser,
    showAllUsers
} = require ('../controllers/user');

router.post("/register", registerUser);

router.post("/login", logUser);

router.get("/test", showAllUsers);

module.exports = router;