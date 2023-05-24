const { check } = require("express-validator");
const validatorMiddleware = require("../../Middleware/validatorMiddleware");
const pharmacistSchema = require("../../models/pharmacistSchema");

const createReportvalidator = [
  check("pharmacistId")
    .isNumeric()
    .withMessage("pharmacistId must be Number")
    .notEmpty()
    .withMessage("pharmacistName is Required"),
  check("pharmacistName").notEmpty().withMessage("pharmacistName is Required"),
  check("consultantName").notEmpty().withMessage("consultantName is Required"),
  check("residentName").notEmpty().withMessage("residentName is Required"),
  check("residentAge").isNumeric().withMessage("residentAge must be Number"),
  check("bedNumber").isNumeric().withMessage("bedNumber must be Number"),
  check("medicalRecordNumber")
    .notEmpty()
    .withMessage("medicalRecordNumber is Required"),
  check("drugName").notEmpty().withMessage("drugName is Required"),
  check("Pharmacist")
    .notEmpty()
    .withMessage("Report must be belong to a Pharmacist")
    .isMongoId()
    .withMessage("Invalid ID formate")
    .custom((PharmacistID) =>
      pharmacistSchema.findById(PharmacistID).then((Pharmacist) => {
        if (!Pharmacist) {
          return Promise.reject(
            new Error(`No Pharmacist for this Id ${PharmacistID}`)
          );
        }
      })
    ),
  validatorMiddleware,
];

const getReportValidator = [
  check("id").isMongoId().withMessage("Invalid ID formate"),
  validatorMiddleware,
];

module.exports = {
  createReportvalidator,
  getReportValidator,
};
