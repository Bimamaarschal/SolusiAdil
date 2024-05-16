
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

router.get('/konsultasi', checkLoggedIn, (req, res) => {
    res.render('konsultasi');
});

router.get('/tentangkami', (req, res) => {
    res.render('tentangkami');
});

router.get('/blog', checkLoggedIn, (req, res) => {
    res.render('blog');
});

router.get('/layanan', checkLoggedIn, (req, res) => {
    res.render('layanan');
});

router.get('/kontak', (req, res) => {
    res.render('kontak');
});

router.get('/faq', (req, res) => {
    res.render('faq');
});

router.get('/gabung', (req, res) => {
    res.render('gabung');
});


module.exports = router;
