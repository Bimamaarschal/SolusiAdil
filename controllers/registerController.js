const axios = require("axios");

exports.registerUser = async (req, res) => {
  try {
    const {
      id_masyarakat,
      nama,
      nik,
      alamat,
      email,
      foto = "FOTO BELUM DI INPUT",
      jenis_kelamin,
      no_tlp,
      password,
      tgl_lahir,
    } = req.body;

    const response = await axios.post(
      "https://solusiadil-api.vercel.app/users",
      {
        id_masyarakat,
        nama,
        nik,
        alamat,
        email,
        foto,
        jenis_kelamin,
        no_tlp,
        password,
        tgl_lahir,
      }
    );

    if (response.status === 201) {
      res.send(`
        <html>
          <head>
            <title>Registration Success</title>
            <script>
              alert("User berhasil didaftarkan");
              window.location.href = "/masuk";
            </script>
          </head>
          <body>
            <p>Redirecting...</p>
          </body>
        </html>
      `);
    } else {
      throw new Error("Gagal mendaftarkan user");
    }
  } catch (error) {
    console.error("Error:", error);
    res.send(`
      <html>
        <head>
          <title>Registration Failed</title>
          <script>
            alert("User Gagal Daftar karena ${error.message}");
            window.location.href = "/daftar";
          </script>
        </head>
        <body>
          <p>Redirecting...</p>
        </body>
      </html>
    `);
  }
};
