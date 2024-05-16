const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const cekLogin = require("../middlewares/cekLogin");

router.get("/masuk", cekLogin, (req, res) => {
  const { authError } = req;
  res.render("masuk", { authError });
});

router.post("/login", loginController.loginUser);
router.get("/logout", loginController.logoutUser);

module.exports = router;
