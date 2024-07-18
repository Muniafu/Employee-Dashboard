const express = require('express');
const router = express.Router();
const Manager = require('../models/Manager');
const Employee = require ('../models/Employee');
const auth = require('../middleware/auth');

// Get manager data
router.get('/:id', auth, async (req, res) => {
    try {
        const manager = await Manager.findById(req.params.id).populate('team');
        res.json(manager);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create new manager
router.post('/', auth, async (req, res) => {
    const { name, email, password, team } = req.body;
    try {
        const newManager = new Manager({ name, email, password, team });
        const manager = await newManager.save();
        res.json(manager);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update manager data
router.put('/:id', auth, async (req, res) => {
    try {
        const manager = await Manager.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(manager);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete manager data
router.delete('/:id', auth, async (req, res) => {
    try {
        await Manager.findByIdAndDelete(req.params.id);
        res.json({ message: 'Manager deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;