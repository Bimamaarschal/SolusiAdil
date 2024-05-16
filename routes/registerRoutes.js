const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const cekLogin = require("../middlewares/cekLogin");

router.get("/daftar", cekLogin, (req, res) => {
  const { authError } = req;
  res.render("daftar", { authError });
});

router.post("/register", registerController.registerUser);

module.exports = router;
