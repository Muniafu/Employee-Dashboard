const express = require('express');
const { protect } = require('../middleware/auth');
const { submitFeedback, getFeedbacks } = require('../controllers/feedbackController');

const router = express.Router();

// Submit feedback
router.post('/', protect, submitFeedback);

// Get all feedback
router.get('/', protect, getFeedbacks);

module.exports = router;