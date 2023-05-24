const { check } = require("express-validator");
const validatorMiddleware = require("../../Middleware/validatorMiddleware");
const managerModel = require("../../models/managerSchema");
const physicianModel = require("../../models/physicicanSchema");
const pharmacistModel = require("../../models/pharmacistSchema");

const managersignupvalidator = [
  check("userName")
    .notEmpty()
    .withMessage("user Required")
    .isLength({ min: 3 })
    .withMessage("Too short  username"),

  check("email")
    .notEmpty()
    .withMessage("Email is Required")
    .isEmail()
    .withMessage("Invalid Address Email")
    .custom((val) =>
      managerModel.findOne({ email: val }).then((result) => {
        if (result) {
          return Promise.reject(new Error("Email already used"));
        }
      })
    ),
  check("phoneNumber")
    .isMobilePhone("ar-EG")
    .withMessage("Invalid Phone Number accepted only Egy")
    .optional(),
  check("password")
    .notEmpty()
    .withMessage("password Required")
    .isLength({ min: 8 })
    .withMessage("Password Must be at least 8 Character")
    .custom((password, { req }) => {
      if (password !== req.body.confirmPassword) {
        throw new Error("Password Conformation not Correct");
      }
      return true;
    }),

  check("confirmPassword").notEmpty().withMessage("confirmPassword Required"),

  validatorMiddleware,
];

const pharmacistsignupvalidator = [
  check("userName")
    .isLength({ min: 3 })
    .withMessage("Too short  user name")
    .notEmpty()
    .withMessage("user Required"),
  check("email")
    .notEmpty()
    .withMessage("Email is Required")
    .isEmail()
    .withMessage("Invalid Address Email")
    .custom((val) =>
      pharmacistModel.findOne({ email: val }).then((result) => {
        if (result) {
          return Promise.reject(new Error("Email already used"));
        }
      })
    ),
  check("phoneNumber")
    .isMobilePhone("ar-EG")
    .withMessage("Invalid Phone Number accepted only Egy")
    .optional(),
  check("password")
    .notEmpty()
    .withMessage("password Required")
    .isLength({ min: 8 })
    .withMessage("Password Must be at least 8 Character")
    .custom((password, { req }) => {
      if (password !== req.body.confirmPassword) {
        throw new Error("Password Conformation not Correct");
      }
      return true;
    }),

  check("confirmPassword").notEmpty().withMessage("confirmPassword Required"),

  validatorMiddleware,
];

const physiciansignupvalidator = [
  check("userName")
    .isLength({ min: 3 })
    .withMessage("Too short  user name")
    .notEmpty()
    .withMessage("user Required"),
  check("email")
    .notEmpty()
    .withMessage("Email is Required")
    .isEmail()
    .withMessage("Invalid Address Email")
    .custom((val) =>
      physicianModel.findOne({ email: val }).then((result) => {
        if (result) {
          return Promise.reject(new Error("Email already used"));
        }
      })
    ),
  check("phoneNumber")
    .isMobilePhone("ar-EG")
    .withMessage("Invalid Phone Number accepted only Egy")
    .optional(),
  check("password")
    .notEmpty()
    .withMessage("password Required")
    .isLength({ min: 8 })
    .withMessage("Password Must be at least 8 Character")
    .custom((password, { req }) => {
      if (password !== req.body.confirmPassword) {
        throw new Error("Password Conformation not Correct");
      }
      return true;
    }),

  check("confirmPassword").notEmpty().withMessage("confirmPassword Required"),

  validatorMiddleware,
];

const loginValidator = [
  check("email")
    .notEmpty()
    .withMessage("Email is Required")
    .isEmail()
    .withMessage("Invalid Address Email"),

  check("password")
    .notEmpty()
    .withMessage("password Required")
    .isLength({ min: 8 })
    .withMessage("Password Must be at least 8 Character"),

  validatorMiddleware,
];

module.exports = {
  managersignupvalidator,
  pharmacistsignupvalidator,
  physiciansignupvalidator,
  loginValidator,
};
