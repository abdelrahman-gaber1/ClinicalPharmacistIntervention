const express = require("express");

const router = express.Router();

const { getTypeOfError } = require("../controller/typeOfErrorController");

router.route("/").get(getTypeOfError);

module.exports = router;
