const express = require('express');
const { protect } = require('../middleware/auth');
const { getEmployee, createEmployee } = require('../controllers/employeeController');

const router = express.Router();

// Get all employees (protected)
router.get('/', protect, getEmployee);

// Create employee (protected)
router.post('/', protect, createEmployee);

module.exports = router;