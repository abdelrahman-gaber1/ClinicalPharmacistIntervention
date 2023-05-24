const { check } = require("express-validator");
const validatorMiddleware = require("../../Middleware/validatorMiddleware");
const managerSchema = require("../../models/managerSchema");
const bcrypt = require("bcryptjs");

const createManagervalidator = [
  check("userName")
    .isLength({ min: 2 })
    .withMessage("Too short  Manager name")
    .isLength({ max: 32 })
    .withMessage("Too long Manager name")
    .notEmpty()
    .withMessage("Manager Name Required"),
  // must be unique
  check("hospitalId")
    .isNumeric()
    .withMessage("ID must be Numeric")
    .notEmpty()
    .withMessage("ID is Required"),
  // must be unique
  check("email")
    .notEmpty()
    .withMessage("Email is Required")
    .isEmail()
    .withMessage("Invalid Address Email")
    .custom((val) =>
      managerSchema.findOne({ email: val }).then((result) => {
        if (result) {
          return Promise.reject(new Error("Email already used"));
        }
      })
    ),
  // must be unique
  check("phoneNumber")
    .isNumeric()
    .withMessage("phoneNumber must be Numeric")
    .notEmpty()
    .withMessage("phoneNumber is Required")
    .isLength({ min: 11 })
    .withMessage("Too short  phoneNumber name")
    .isLength({ max: 25 })
    .withMessage("Too long phoneNumber name"),
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

  check("profileImg").optional(),
  check("phoneNumber")
    .isMobilePhone("ar-EG")
    .withMessage("Invalid Phone Number accepted only Egy"),
  validatorMiddleware,
];

// password

const ubdateManagervalidator = [
  check("id").isMongoId().withMessage("Invalid Manager id format"),
  check("email")
    .notEmpty()
    .withMessage("Email is Required")
    .isEmail()
    .withMessage("Invalid Address Email")
    .custom(
      (val) =>
        managerSchema.findOne({ email: val }).then((result) => {
          if (result) {
            return Promise.reject(new Error("Email already used"));
          }
        }),
      check("profileImg").optional(),
      check("role").optional()
    ),
  check("phoneNumber")
    .isMobilePhone("ar-EG")
    .withMessage("Invalid Phone Number accepted only Egy")
    .optional(),
  validatorMiddleware,
];

const getManagervalidator = [
  check("id").isMongoId().withMessage("Invalid Manager id format"),
  validatorMiddleware,
];

const changeManagerPasswordValidator = [
  check("id").isMongoId().withMessage("In Valid user Id Format"),

  check("currentPassword")
    .notEmpty()
    .withMessage("must Insert Current Password"),

  check("passwordConfirm")
    .notEmpty()
    .withMessage("must Insert Confirm Password"),

  check("password")
    .notEmpty()
    .withMessage("must Insert Password")
    .custom(async (val, { req }) => {
      const user = await managerSchema.findById(req.params.id);
      if (!user) {
        throw new Error("this user not found");
      }
      const isCorrect = await bcrypt.compare(
        req.body.currentPassword,
        user.password
      );
      if (!isCorrect) {
        throw new Error("Incorrect Current Password");
      }
      if (val !== req.body.confirmPassword) {
        throw new Error("Password Conformation not Correct");
      }
      return true;
    }),
  validatorMiddleware,
];

module.exports = {
  createManagervalidator,
  ubdateManagervalidator,
  getManagervalidator,
  changeManagerPasswordValidator,
};
