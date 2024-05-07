const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const path = require('path');

router.post('/register', registerController.registerUser);

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'register.html'));
});

module.exports = router;
