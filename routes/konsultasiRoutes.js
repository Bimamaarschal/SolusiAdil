const express = require("express");
const router = express.Router();
const konsultasiController = require("../controllers/konsultasiController");
const cekLogin = require("../middlewares/cekLogin");

router.post("/konsultasidata", konsultasiController.konsultasiData);

router.get("/konsultasidt", konsultasiController.getDetailKonsultasi);
router.get("/konsultasidiproses", konsultasiController.getDiprosesKonsultasi);
router.get("/konsultasiend", konsultasiController.getEndKonsultasi);
router.post('/updateKonsultasi', konsultasiController.updateKonsultasi);
router.get("/konsultasicetak", konsultasiController.cetakKonsultasi);


module.exports = router;
