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

const ReportSchema = mongoose.model("ReportSchema", reportSchema);
module.exports = ReportSchema;
