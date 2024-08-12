const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const cekJWT = require('../middlewares/cekJWT');

router.get("/datablog",  cekJWT, blogController.getDatablog);
router.get('/bacablog', cekJWT,blogController.blogbacaData);

module.exports = router;
