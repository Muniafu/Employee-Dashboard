const Employee = require('../models/Employee');

// Get all employees
const getEmployee = async (req, res) => {
    try {
    const employee = await Employee.find().populate('user', 'name email role');
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create new employee
const createEmployee = async (req, res) => {
    const { user, department } = req.body;

    try {
        const employee = new Employee({ user, department });
        const createdEmployee = await employee.save();
        res.status(201).json(createdEmployee);
    } catch (error) {
        res.status(400).json({
            message: 'Invalid employee data'
        });
    }
};

module.exports = { getEmployee, createEmployee };