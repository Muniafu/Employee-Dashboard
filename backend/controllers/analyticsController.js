const Employee = require('../models/Employee');
const Feedback = require('../models/Feedback');

// Get analytics (employee count and average feedback rating)
const getEmployeeAnalytics = async (req, res) => {
    try {
        const employeeCount = await Employee.countDocuments();
        const averageRating = await Feedback.aggregate([{ 
            $group: { _id: null, avgRating: { $avg: "$rating"}}}]);
        res.json({
            totalEmployees: employeeCount,
            averageFeedbackRating: averageRating[0]?.avgRating || 0,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
};

module.exports = { getEmployeeAnalytics };