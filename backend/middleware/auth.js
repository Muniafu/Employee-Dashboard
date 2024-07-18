const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const Manager = require('../models/Manager');

const auth = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;

        // Check user role
        if (req.user.role === 'manager') {
            const manager = await Manager.findById(req.user.id);
            if (!manager) return res.status(401).json({ message: 'Manager not found' });
        } else if (req.user.role === 'employee') {
            const employee = await Employee.findById(req.user.id);
            if (!employee) return res.status(401).json({ message: 'Employee not found' });
        }

        next();
    } catch (e) {
        res.status(400).json({ message: 'Token is not valid' });
    }
};

module.exports =auth;