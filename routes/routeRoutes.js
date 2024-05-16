const express = require("express");
const router = express.Router();
const berandaController = require("../controllers/berandaController");
const cekBeranda = require("../middlewares/cekBeranda");
const cekLoginMasuk = require("../middlewares/cekLoginMasuk");

router.get("/beranda", cekBeranda, berandaController.getBeranda);

router.get("/konsultasi", cekLoginMasuk, (req, res) => {
  res.render("konsultasi");
});

router.get("/tentangkami", (req, res) => {
  res.render("tentangkami");
});

router.get("/blog", cekLoginMasuk, (req, res) => {
  res.render("blog");
});

router.get("/layanan", cekLoginMasuk, (req, res) => {
  res.render("layanan");
});

router.get("/kontak", (req, res) => {
  res.render("kontak");
});

router.get("/faq", (req, res) => {
  res.render("faq");
});

router.get("/gabung", cekLoginMasuk, (req, res) => {
  res.render("gabung");
});

module.exports = router;
