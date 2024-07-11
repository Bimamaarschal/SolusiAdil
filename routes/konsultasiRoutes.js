const express = require("express");
const router = express.Router();
const konsultasiController = require("../controllers/konsultasiController");
const cekLogin = require("../middlewares/cekLogin");

router.post("/konsultasidata", konsultasiController.konsultasiData);

router.get("/konsultasidt", konsultasiController.getDetailKonsultasi);

module.exports = router;
