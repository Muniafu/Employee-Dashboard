const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const auth = require('../middleware/auth');

// Get feedback for an employee
router.get('/to/:employeeId', auth, async (req, res) => {
    try {
        const feedbacks = await Feedback.find({ to: req.params.employeeId }).populate('from to');
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create feedback
router.post('/', auth, async (req, res) => {
    const { from, to, message } = req.body;
    try {
        const newFeedback = new Feedback({ from, to, message });
        const feedback = await newFeedback.save();
        res.json(feedback);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;