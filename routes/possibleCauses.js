const express = require("express");

const router = express.Router();

const { getPossibleCauses } = require("../controller/possibleCausesController");

router.route("/").get(getPossibleCauses);

module.exports = router;
