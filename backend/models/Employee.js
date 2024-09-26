const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new mongoose.Schema({
    name: { 
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true 
    },
    department: {
        type: String,
        required: true,
    },
    joiningDate: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true,});

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;