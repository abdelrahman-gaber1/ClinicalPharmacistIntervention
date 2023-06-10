const express = require("express");

const router = express.Router();

const {
  createPhysicianvalidator,
  ubdatePhysicianvalidator,
  getPhysicianvalidator,
  changePhysicianPasswordValidator,
} = require("../utils/validator/physicianValidator");

const {
  getPhysician,
  createPhysician,
  updatePhysician,
  getSpicificPhisician,
  changePassword,
} = require("../controller/physicicancontroller");

const ReportRoutes = require("./report");

router.use("/:physicianId/physicianReport", ReportRoutes);

router.put(
  "/changepassword/:id",
  changePhysicianPasswordValidator,
  changePassword
);

router
  .route("/")
  .get(getPhysician)
  .post(createPhysicianvalidator, createPhysician);

router
  .route("/:id")
  .put(ubdatePhysicianvalidator, updatePhysician)
  .get(getPhysicianvalidator, getSpicificPhisician);

module.exports = router;
