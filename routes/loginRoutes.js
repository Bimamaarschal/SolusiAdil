const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const path = require('path');

function checkLoggedIn(req, res, next) {
    if (req.session.user) {
        res.redirect('/beranda');
    } else {
        next();
    }
}

router.get('/masuk', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

router.post('/login', loginController.loginUser);
router.get('/logout', loginController.logoutUser);

router.get('/beranda', (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, '../public', 'beranda.html'));
    } else {
        res.redirect('/masuk');
    }
});

module.exports = router;

