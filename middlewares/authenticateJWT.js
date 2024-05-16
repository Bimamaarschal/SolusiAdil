const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key'; // Ganti dengan secret key yang aman

const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token; // Mengambil token dari cookies

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Token tidak valid
      }
      req.user = user; // Menambahkan informasi pengguna ke objek req
      next();
    });
  } else {
    res.sendStatus(401); // Tidak ada token
  }
};

module.exports = authenticateJWT;
