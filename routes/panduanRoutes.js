const express = require("express");
const router = express.Router();
const panduanController = require("../controllers/panduanController");
const cekJWT = require('../middlewares/cekJWT');

router.get("/datapanduan",  cekJWT, panduanController.getDatapanduan);
router.get('/bacapanduan', cekJWT, panduanController.panduanbacaData);

module.exports = router;

