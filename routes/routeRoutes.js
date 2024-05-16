
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_key';

const checkLoggedInJWT = (req, res, next) => {
    const token = req.cookies.token;
  
    if (token) {
      jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
          return res.redirect('/masuk');
        }
        req.user = user;
        next();
      });
    } else {
      res.redirect('/masuk');
    }
  };
  
router.get('/konsultasi', checkLoggedInJWT, (req, res) => {
    res.render('konsultasi');
});


router.get('/tentangkami', (req, res) => {
    res.render('tentangkami');
});

router.get('/blog', checkLoggedInJWT, (req, res) => {
    res.render('blog');
});

router.get('/layanan', checkLoggedInJWT, (req, res) => {
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
