const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key';

const cekLogin = (req, res, next) => {
  const token = req.cookies.token;
    if (token) {
      jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
          console.error('Error verifying JWT:', err.message);
          req.authError = 'Gagal verifikasi token. Silakan masuk kembali.';
          next();
        } else {
          req.user = user;
          res.redirect('/beranda');
        }
      });
    } else {
      req.authError = 'Token tidak ditemukan. Silakan masuk kembali.';
      next();
    }
  };

module.exports = cekLogin;
