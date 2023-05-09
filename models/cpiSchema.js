const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  pharmacistId: Number,
  pharmacistName: String,
  date: {
    type: Date,
    default: Date.now,
  },
  consaltantName: String,
  departmentName: String,
  residentName: String,
  residentAge: Number,
  residentGender: Boolean,
  bedNumber: Number,
  medicalRecordNumber: Number,
  problemType: String,
  problemDescription: String,
  drugTherapyProblem: Boolean,
  errorCategory: String,
  errorDescripion: String,
  typeofError: String,
  medicalError: Boolean,
  referenceError: String,
  intervention: String,
  drugName: [
    {
      name: String,
      physicianDose: Number,
      pharmacistDose: Number,
    },
  ],
  physicianAcceptance: String,
});

const allDrug = new Schema({
  drugName: String,
});

const pharmacistInformation = new Schema({
  userName: {
    type: String,
    require: true,
  },
  id: {
    type: Number,
    require: true,
    uniqe: true,
  },
  email: {
    type: String,
    require: true,
    uniqe: true,
  },
  phoneNumber: Number,
  password: {
    type: String,
    require: true,
    minlenght: 8,
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

const physicianInformation = new Schema({
  userName: {
    type: String,
    require: true,
  },
  id: {
    type: Number,
    require: true,
    uniqe: true,
  },
  email: {
    type: String,
    require: true,
    uniqe: true,
  },
  phoneNumber: Number,
  department: String,
  password: {
    type: String,
    require: true,
    minlenght: 8,
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

const managerInformation = new Schema({
  userName: {
    type: String,
    require: true,
  },
  id: {
    type: Number,
    require: true,
    uniqe: true,
  },
  email: {
    type: String,
    require: true,
    uniqe: true,
  },
  phoneNumber: Number,
  department: String,
  password: {
    type: String,
    require: true,
    minlenght: 8,
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

const ReportSchema = mongoose.model("ReportSchema", reportSchema);
module.exports = ReportSchema;

const AllDrug = mongoose.model("AllDrug", allDrug);
module.exports = AllDrug;

const PharmacistInformation = mongoose.model(
  "PharmacistInformation",
  pharmacistInformation
);
module.exports = PharmacistInformation;

const PhysicianInformation = mongoose.model(
  "PhysicianInformation",
  physicianInformation
);
module.exports = PhysicianInformation;

const ManagerInformation = mongoose.model(
  "ManagerInformation",
  managerInformation
);
module.exports = ManagerInformation;
