const axios = require("axios");

exports.loginUser = async (req, res) => {
  try {
    const { id_masyarakat, password } = req.body;
    const response = await axios.post(
      "https://solusiadil-api.vercel.app/users/login",
      { id_masyarakat, password }
    );
    
    // Pastikan respons dari server berisi data pengguna yang diharapkan
    if(response.data.message === "Login successful" && response.data.userData) {
      // Simpan informasi pengguna di session
      const userData = response.data.userData;
      req.session.user = {
        nama: userData.nama,
        id_masyarakat: userData.id_masyarakat
      };
      res.redirect(`/beranda?usidsolusiadil=${id_masyarakat}`);
    } else {
      // Jika respons tidak sesuai, kembalikan ke halaman login dengan pesan error
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
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("Gagal logout");
    } else {
      res.redirect("/");
    }
  });
};
