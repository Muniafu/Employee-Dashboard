const mongoose = require('mongoose');
const { Schema } = mongoose;

const ManagerSchema = new mongoose.Schema({
    name: { 
        type: Schema.Type.ObjectId,
        ref: 'User', 
        required: true 
    },
    employees: [{
        type: Schema.Types.ObjectId,
        ref: 'Employee',
    }],
}, { timestamps: true });

const Manager = mongoose.model('Manager', ManagerSchema);
module.exports = Manager;