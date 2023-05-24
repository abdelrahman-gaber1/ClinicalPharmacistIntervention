const express = require("express");

const router = express.Router();

const {
  createManagervalidator,
  ubdateManagervalidator,
  getManagervalidator,
  changeManagerPasswordValidator,
} = require("../utils/validator/managerValidator");

const {
  createManager,
  getSpecificManager,
  updateManager,
  changePassword,
} = require("../controller/managercontroller");

router.route("/").post(createManagervalidator, createManager);

router.put(
  "/changepassword/:id",
  changeManagerPasswordValidator,
  changePassword
);

router
  .route("/:id")
  .put(ubdateManagervalidator, updateManager)
  .get(getManagervalidator, getSpecificManager);

module.exports = router;
