const mongoose = require('mongoose');
const { Schema } = mongoose;

const FeedbackSchema = new mongoose.Schema({
    employee: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
    },
    feedbackTo: { 
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
}, { timestamps: true });

const Feedback = mongoose.model('Feedback', FeedbackSchema);
module.exports = Feedback;