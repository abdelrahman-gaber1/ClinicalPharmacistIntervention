const ReportSchema = require("../models/reportSchema");

const Factory = require("./handelerFactory");

// Nested Route
const setPharmacitIdtobody = (req, res, next) => {
  if (!req.body.Pharmacist) req.body.pharmacist = req.params.pharmacistId;
  next();
};

// Nested Route
const setPhycicianIdtobody = (req, res, next) => {
  if (!req.body.Physician) req.body.Physician = req.params.physicianId;
  next();
};

// Nested Route
// @route   GET /api/v1/pharmacist/:pharmacistId/pharmacistreport
const createFiterObject = (req, res, next) => {
  let filterObject = {};
  if (req.params.pharmacistId) {
    filterObject = { Pharmacist: req.params.pharmacistId };
  } else if (req.params.physicianId) {
    filterObject = { Physician: req.params.physicianId };
  }
  req.filterObject = filterObject;
  next();
};

const createReport = Factory.createOne(ReportSchema);

const getReport = Factory.getOne(ReportSchema);

const allReports = Factory.getAll(ReportSchema, "ReportSchema");

module.exports = {
  allReports,
  getReport,
  createReport,
  createFiterObject,
  setPharmacitIdtobody,
  setPhycicianIdtobody,
};
