const express = require('express');
const { protect, admin } = require('../middleware/auth');
const { getManagerEmployees, assignEmployees } = require('../controllers/managerController');

const router = express.Router();

// Get manager's employees
router.get('/employees', protect, admin, getManagerEmployees);

// Assign employees to a manager
router.post('/assign', protect, admin, assignEmployees);

module.exports = router;