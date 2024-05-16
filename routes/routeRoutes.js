
const express = require('express');
const router = express.Router();
const path = require('path');

function checkLoggedIn(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/masuk');
    }
}

router.get('/tentangkami', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'tentangkami.html'));
});

router.get('/blog',  checkLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'blog.html'));
});

router.get('/konsultasi', checkLoggedIn, (req, res) => {
    res.render('konsultasi');
});

router.get('/layanan',  checkLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'layanan.html'));
});

router.get('/kontak', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'kontak.html'));
});


router.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'faq.html'));
});

router.get('/gabung', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'gabung.html'));
});

module.exports = router;
