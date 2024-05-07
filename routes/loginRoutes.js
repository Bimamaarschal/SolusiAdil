const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Middleware untuk memeriksa apakah pengguna telah login
function checkLoggedIn(req, res, next) {
    if (req.session.user) {
        // Jika pengguna telah login, arahkan ke beranda
        res.redirect('/beranda');
    } else {
        // Jika pengguna belum login, lanjutkan ke halaman login
        next();
    }
}

router.get('/masuk', checkLoggedIn, (req, res) => {
    res.sendFile('login.html', { root: './public' });
});

router.post('/login', loginController.loginUser);
router.get('/logout', loginController.logoutUser);

router.get('/beranda', (req, res) => {
    if (req.session.user) {
        res.sendFile('beranda.html', { root: './public' });
    } else {
        res.redirect('/masuk');
    }
});

module.exports = router;
