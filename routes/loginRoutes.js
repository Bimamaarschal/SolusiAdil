const express = require('express');
const router = express.Router();
const path = require('path');
const loginController = require('../controllers/loginController');

function checkLoggedIn(req, res, next) {
    if (req.session.user) {
        res.redirect('/beranda');
    } else {
        next();
    }
}

router.get('/masuk', checkLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

router.post('/login', loginController.loginUser);
router.get('/logout', loginController.logoutUser);

router.get('/beranda', (req, res) => {
    if (req.session.user) {
        const filePath = path.join(__dirname, '../public', 'beranda.html');
        res.sendFile(filePath);
    } else {
        res.redirect('/masuk');
    }
});

module.exports = router;
