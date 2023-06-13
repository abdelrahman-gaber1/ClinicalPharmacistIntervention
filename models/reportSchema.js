const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    // محتاجه تتعدل من عندهم
    pharmacistId: {
      type: Number,
      trim: true,
      required: [true, "pharmacistId is required"],
    },
    pharmacistName: {
      type: String,
      trim: true,
      required: [true, "pharmacistName is Required"],
    },
    consultantName: {
      type: String,
      trim: true,
      required: [true, "consultantName is Required"],
    },
    departmentName: String,
    residentName: {
      type: String,
      trim: true,
      required: [true, "residentName is Required"],
    },
    residentAge: Number,
    residentGender: {
      type: String,
      enum: ["Male", "Female"],
      default: "Male",
    },
    bedNumber: Number,
    medicalRecordNumber: {
      type: Number,
    },
    problemType: String,
    problemDescription: String,
    drugTherapyProblem: Boolean,
    errorCategory: String,
    errorDescription: String,
    typeofError: String,
    medicalError: Boolean,
    referenceError: String,
    intervention: String,
    possibleCauses: String,
    drugName: [
      {
        name: String,
        physicianDose: Number,
        pharmacistDose: Number,
      },
    ],
    physicianAcceptance: {
      type: String,
      enum: ["Pending", "Acceptance", "Rejected"],
      default: "Pending",
    },
    Pharmacist: {
      type: mongoose.Schema.ObjectId,
      ref: "PharmacistInformation",
      required: [true, "Report must be belong to Pharmacist"],
    },
    Physician: {
      type: mongoose.Schema.ObjectId,
      ref: "PhysicianInformation",
      required: [true, "Report must be belong to Physician"],
    },
  },
  { timestamps: true }
);

// Mongoose query middleware
reportSchema.pre(/^find/, function (next) {
  this.populate({
    path: "Pharmacist",
    select: "userName-_id",
  });
  this.populate({
    path: "Physician",
    select: "userName-_id",
  });
  next();
});

const ReportSchema = mongoose.model("ReportSchema", reportSchema);
module.exports = ReportSchema;
