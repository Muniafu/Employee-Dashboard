const express = require('express');
const router = express.router;
const Employee = require('../models/Employee');
const auth = require('../middleware/auth');

// Get analysis data
router.get('/', auth, async (req, res) => {
    try {
        const employeeCount = await Employee.countDocuments();
        const averageEvaluationScore = await Employee.aggregate([{ $group: {_id: null, avgScore: { $avg: '$evaluationScores' } } }]);
        res.json({ employeeCount, averageEvaluationScore: averageEvaluationScore[0]. avgScore });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;