const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    goals: [{ type: String }],
    progress: { type: String },
    evaluationScores: { type: Number },
    feedback: [{ type: String }]
});

module.exports = mongoose.model('Employee', EmployeeSchema);