const express = require("express");

const router = express.Router({ mergeParams: true });

const {
  createReportvalidator,
  getReportValidator,
} = require("../utils/validator/reportValidator");

const {
  allReports,
  getReport,
  createReport,
  createFiterObject,
  setPharmacitIdtobody,
} = require("../controller/reportcontroller");

router
  .route("/")
  .get(createFiterObject, allReports)
  .post(setPharmacitIdtobody, createReportvalidator, createReport);

router.route("/:id").get(getReportValidator, getReport);

module.exports = router;
