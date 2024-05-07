const axios = require("axios");

exports.loginUser = async (req, res) => {
    try {
      const { nik, password } = req.body;
      const response = await axios.post(
        "https://solusiadil-api.vercel.app/users/login",
        { nik, password }
      );
      req.session.user = response.data;
  
      const userDataResponse = await axios.get(`https://solusiadil-api.vercel.app/users/nik/${nik}`);
      const userData = userDataResponse.data;
  
      req.session.userData = userData;
  
      res.redirect("/beranda");
    } catch (error) {
      res.status(400).send(error.response.data);
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
