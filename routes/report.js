const express = require("express");

// allow us to access prams of another routes
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
  setPhycicianIdtobody,
} = require("../controller/reportcontroller");

router
  .route("/")
  .get(createFiterObject, allReports)
  .post(
    setPharmacitIdtobody,
    setPhycicianIdtobody,
    createReportvalidator,
    createReport
  );

router.route("/:id").get(getReportValidator, getReport);

module.exports = router;
