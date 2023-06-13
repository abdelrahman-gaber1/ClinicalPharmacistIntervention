const express = require("express");

const router = express.Router();

const { getProblemType } = require("../controller/problemTypeController");

router.route("/").get(getProblemType);

module.exports = router;
