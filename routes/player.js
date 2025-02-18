const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

// API đăng ký người chơi mới
router.post('/register', async (req, res) => {
    try {
        const { username } = req.body;
        // Tạo mới người chơi
        const player = await Player.create({ username });
        res.json(player);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// API để lấy thông tin người chơi
router.get('/:id', async (req, res) => {
    try {
        const player = await Player.findByPk(req.params.id);
        if (!player) {
            return res.status(404).json({ error: 'Player not found' });
        }
        res.json(player);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
