const express = require('express');
const router = express.Router();
const path = require('path'); // Import modul path untuk menangani path file
const userController = require('../controllers/registerController');

// Rute untuk menyajikan halaman beranda
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html')); // Mengirimkan file index.html
});

// Rute untuk menyajikan halaman login
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html')); // Mengirimkan file login.html
});

// Rute untuk menyajikan halaman registrasi
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'register.html')); // Mengirimkan file register.html
});

router.get('/beranda', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'beranda.html')); // Mengirimkan file register.html
});


// Rute untuk membuat pengguna baru
router.post('/users/register', userController.registerUser);

// Rute untuk melakukan login
router.post('/users/login', userController.loginUser);

module.exports = router;
