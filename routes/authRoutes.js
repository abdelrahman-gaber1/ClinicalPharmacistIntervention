const express = require("express");

const router = express.Router();
const {
  managersignupvalidator,
  pharmacistsignupvalidator,
  physiciansignupvalidator,
  loginValidator,
} = require("../utils/validator/authValidator");
const {
  managersignup,
  pharmacistsignup,
  physiciansignup,
  managerLogin,
  pharmacistLogin,
  physicianLogin,
} = require("../controller/authController");

router.route("/managersignup").post(managersignupvalidator, managersignup);
router.route("/managerlogin").post(loginValidator, managerLogin);
router
  .route("/pharmacistsignup")
  .post(pharmacistsignupvalidator, pharmacistsignup);
router.route("/pharmacistlogin").post(loginValidator, pharmacistLogin);
router
  .route("/physiciansignup")
  .post(physiciansignupvalidator, physiciansignup);
router.route("/physicianlogin").post(loginValidator, physicianLogin);
module.exports = router;
