const Manager = require("../models/Manager");

// Get manager's employees
const getManagerEmployees = async (req, res) => {
    try {
        const manager = await Manager.findOne(req.user._id).populate('employees');

        if (manager) return res.status(404).json({ message: 'Manager not found' });

        res.json(manager.getManagerEmployees);
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
};

// Assign employees to manager
const assignEmployees = async (req, res ) => {
    const { employeeIds } = req.body;

    try {
        const manager = await Manager.findOne({ user: req.user._id });
        if (!manager) return res.status(404).json({
            message: 'Manager not found'
        });

        manager.employees.push(...employeeIds);
        await manager.save();

        res.json(manager);
    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
};

module.exports = { getManagerEmployees, assignEmployees };