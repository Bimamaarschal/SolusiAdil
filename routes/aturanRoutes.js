const express = require("express");
const router = express.Router();
const aturanController = require("../controllers/aturanController");
const cekJWT = require('../middlewares/cekJWT');

router.get("/dataaturan",  cekJWT, aturanController.getDataaturan);
router.get('/bacaaturan', cekJWT,aturanController.aturanbacaData);


module.exports = router;
