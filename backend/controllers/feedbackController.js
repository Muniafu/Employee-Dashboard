const Feedback = require('../models/Feedback');


// Submit feedback
const submitFeedback = async (req, res) => {
    const { feedbackTo, message, rating } = req.body;

    if (!message || rating || !feedbackTo) return res.status(400).json({
        message: 'All fields are required '
    });

    try {
        const feedback = new Feedback({
            feedbackFrom: req.user._id,
            feedbackTo,
            message:
            rating,
        });
        const savedFeedback = await feedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
};

// Get all feedbacks
const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find()
            .populate('feedbackFrom', 'name role')
            .populate('feedbackTo', 'name role');
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({
            message: 'Server error '
        });
    }
};

module.exports = { submitFeedback, getFeedbacks };