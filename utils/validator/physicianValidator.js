const { check } = require("express-validator");
const validatorMiddleware = require("../../Middleware/validatorMiddleware");
const physicicanSchema = require("../../models/physicicanSchema");
const bcrypt = require("bcryptjs");

const createPhysicianvalidator = [
  check("userName")
    .isLength({ min: 2 })
    .withMessage("Too short  Physician name")
    .isLength({ max: 100 })
    .withMessage("Too long Physician name")
    .notEmpty()
    .withMessage("Physician Name Required"),
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
      physicicanSchema.findOne({ email: val }).then((result) => {
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
    .withMessage("phoneNumber is Required"),

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

const ubdatePhysicianvalidator = [
  check("id").isMongoId().withMessage("In Valid Physician Id Format"),
  check("email")
    .notEmpty()
    .withMessage("Email is Required")
    .isEmail()
    .withMessage("Invalid Address Email")
    .custom(
      (val) =>
        physicicanSchema.findOne({ email: val }).then((result) => {
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
const getPhysicianvalidator = [
  check("id").isMongoId().withMessage("In Valid Physician Id Format"),
  validatorMiddleware,
];

const changePhysicianPasswordValidator = [
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
      const user = await physicicanSchema.findById(req.params.id);
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
  createPhysicianvalidator,
  ubdatePhysicianvalidator,
  getPhysicianvalidator,
  changePhysicianPasswordValidator,
};
