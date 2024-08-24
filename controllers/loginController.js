const axios = require('axios');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_key';

function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const randomStringLength = 50;
const randomString = generateRandomString(randomStringLength);


exports.loginUser = async (req, res) => {
  try {
    const { id_masyarakat, password, 'g-recaptcha-response': captchaResponse } = req.body;

    // Verifikasi CAPTCHA
    const verifyCaptcha = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {
        secret: '6LerQy4qAAAAAPHtQZrXfHR6ELXzY8_NubFZBCBX',
        response: captchaResponse
      }
    });

    if (verifyCaptcha.data.success !== true) {
      return res.send(`
        <html>
          <head>
            <title>Login Gagal</title>
            <script>
              alert("Verifikasi CAPTCHA gagal. Silakan coba lagi.");
              window.location.href = "/masuk";
            </script>
          </head>
          <body>
            <p>Kembalikan...</p>
          </body>
        </html>
      `);
    }

    // Lanjutkan dengan proses login jika CAPTCHA berhasil diverifikasi
    const response = await axios.post(
      'https://solusiadil-api.vercel.app/users/login',
      { id_masyarakat, password }
    );

    if (response.data.message === 'Login successful' && response.data.userData) {
      const userData = response.data.userData;

      const token = jwt.sign(
        {
          nama: userData.nama,
          id_masyarakat: userData.id_masyarakat,
          nik: userData.nik
        },
        JWT_SECRET,
        { expiresIn: '3h' }
      );
      res.cookie('token', token, { httpOnly: true });
      res.redirect(`/beranda?${randomString}&${id_masyarakat}&${randomString}`);
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
            <p>Kembalikan...</p>
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
          <p>Kembalikan...</p>
        </body>
      </html>
    `);
  }
};

exports.logoutUser = (req, res) => {
  res.clearCookie('token');
  res.redirect("/");
};
