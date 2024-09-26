const express = require('express');
const { protect, admin } = require('../middleware/auth');
const { getEmployeeAnalytics } = require('../controllers/analyticsController');

const router = express.Router();

// Get analytics (only for managers)
router.get('/employees', protect, admin, getEmployeeAnalytics);

module.exports = router;