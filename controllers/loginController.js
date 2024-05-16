const axios = require('axios');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_key'; // Ganti dengan secret key yang aman

exports.loginUser = async (req, res) => {
  try {
    const { id_masyarakat, password } = req.body;
    const response = await axios.post(
      'https://solusiadil-api.vercel.app/users/login',
      { id_masyarakat, password }
    );

    if (response.data.message === 'Login successful' && response.data.userData) {
      const userData = response.data.userData;

      const token = jwt.sign(
        {
          nama: userData.nama,
          id_masyarakat: userData.id_masyarakat
        },
        JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.cookie('token', token, { httpOnly: true });
      res.redirect(`/beranda?usidsolusiadil=${id_masyarakat}`);
    } else {
      res.send(`
        <html>
          <head>
            <title>Login Gagal</title>
            <script>
              alert("User Gagal Login karena data pengguna tidak valid");
              window.location.href = "/masuk";
            </script>
          </head>
          <body>
            <p>Redirecting...</p>
          </body>
        </html>
      `);
    }
  } catch (error) {
    console.error("Error:", error);
    res.send(`
      <html>
        <head>
          <title>Login Gagal</title>
          <script>
            alert("User Gagal Login karena ${error.message}");
            window.location.href = "/masuk";
          </script>
        </head>
        <body>
          <p>Redirecting...</p>
        </body>
      </html>
    `);
  }
};

exports.logoutUser = (req, res) => {
  res.clearCookie('token');
  res.redirect("/");
};
