const express = require("express");

const router = express.Router();

const {
  createPharmacistvalidator,
  ubdatePharmacistvalidator,
  getPharmacistvalidator,
  changePharmacistPasswordValidator,
} = require("../utils/validator/pharmacistValidator");

const {
  updatePharmacist,
  createPharmacist,
  getPharmacist,
  getSpicificPhamacist,
  changePassword,
} = require("../controller/pharmacistcontroller");

const ReportRoutes = require("./report");

router.use("/:pharmacistId/pharmacistReport", ReportRoutes);

router.put(
  "/changepassword/:id",
  changePharmacistPasswordValidator,
  changePassword
);

router
  .route("/")
  .get(getPharmacist)
  .post(createPharmacistvalidator, createPharmacist);

router
  .route("/:id")
  .put(ubdatePharmacistvalidator, updatePharmacist)
  .get(getPharmacistvalidator, getSpicificPhamacist);

module.exports = router;
