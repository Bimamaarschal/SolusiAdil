const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key';

const cekBeranda = (req, res, next) => {
  const token = req.cookies.token;
    if (token) {
      jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.redirect('/masuk');
    }
  };

module.exports = cekBeranda;
