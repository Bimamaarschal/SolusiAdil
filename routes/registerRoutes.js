// registerRoutes.js

const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const path = require('path'); // Import module path

// Route untuk register user
router.post('/register', registerController.registerUser);

// Rute untuk menampilkan halaman register.html
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'register.html'));
});

module.exports = router;
