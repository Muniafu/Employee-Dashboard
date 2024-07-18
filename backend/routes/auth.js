const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const Manager = require('../models/Manager');

// Register route
router.post('/register', async (req,res) => {
    const { name, email, password, role } = req.body;
    try {
        let user;
        if (role === 'employee') {
            user = new Employee({ name, email, password });
        } else if (role === 'manager') {
            user = new Manager({ name, email, password });
        } else {
            return res.status(400).json({ msg: 'Invalid Role' });
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
            user: {
                id: user.id,
                role: role
            }
        };

        jwt.sign (
            payload,
            'your_jwt_secret',
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const {email, password } =req.body;
    try {
        let user = await Employee.findOne({ email });
        if (!user) {
            user = await Manager.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id,
                role: user instanceof Employee ? 'employee' : 'manager'
            }
        };

        jwt.sign (
            payload,
            'your_jwt_secret',
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = router;