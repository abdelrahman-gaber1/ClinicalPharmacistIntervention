const express = require("express");

const router = express.Router();

const { getDrugs } = require("../controller/drugController");

router.route("/").get(getDrugs);

module.exports = router;
