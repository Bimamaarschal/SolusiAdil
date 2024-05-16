const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const berandaController = require('../controllers/berandaController');
const authenticateJWT = require('../middlewares/authenticateJWT');
const checkLoggedInJWT = require('../middlewares/checkLoggedInJWT');


router.get('/masuk', checkLoggedInJWT, (req, res) => {
    const { authError } = req;
    res.render('masuk', { authError });
});

router.post('/login',  loginController.loginUser);
router.get('/logout', loginController.logoutUser);
router.get('/beranda', authenticateJWT, berandaController.getBeranda);

module.exports = router;
