const axios = require("axios");

exports.loginUser = async (req, res) => {
  try {
    const { id_masyarakat, password } = req.body;
    const response = await axios.post(
      "https://solusiadil-api.vercel.app/users/login",
      { id_masyarakat, password }
    );
    req.session.user = response.data;
    res.redirect(`/beranda?usidsolusiadil=${id_masyarakat}`);
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
