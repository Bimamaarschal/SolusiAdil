
const express = require('express');
const router = express.Router();
const path = require('path');

function checkLoggedIn(req, res, next) {
    if (req.session.user) {
        res.redirect('/beranda');
    } else {
        next();
    }
}

router.get('/',  checkLoggedIn,  (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = router;
