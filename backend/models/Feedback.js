const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee'},
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee'},
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);