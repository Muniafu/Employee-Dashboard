const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Get Employee Data
router.get('/:id', async (req, res) => {
    try {
        const employees = await Employee.findById(req.params.id);
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new employee
router.post('/', auth, async (req, res) => {
    const { name, email, password, goals, progress, evaluationScores, feedback } = req.body;
    try {
        const newEmployee = new Employee({ name, email, password, goals, progress, evaluationScores, feedback });
        const employee = await newEmployee.save();
        res.json(employee);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update employee data
router.put('/:id', auth, async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(employee);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete employee data
router.delete('/:id', auth, async (req, res) => {
    try {
        await Employee,findByIdAndDelete(req.params.id);
        res.json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;