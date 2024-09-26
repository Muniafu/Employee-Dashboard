const express= require('express');
const { registerUser, authUser } = require('../controllers/authController') 

const router = express.Router();

// Register a new user (employee or manager)
router.post('/register', registerUser);

// Login user
router.post('/login', authUser);

module.exports = router;