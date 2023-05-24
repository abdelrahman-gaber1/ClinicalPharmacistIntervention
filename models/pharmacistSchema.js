const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const pharmacistInformation = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "userName is required"],
      trim: true,
    },
    hospitalId: {
      type: Number,
      unique: [true, "ID must  be Unique"],
      required: [true, "ID is required"],
      trim: true,
    },
    email: {
      type: String,
      unique: [true, "Email must  be Unique"],
      required: [true, "Email  is required"],
      trim: true,
      lowercase: true,
    },
    phoneNumber: {
      type: Number,
      unique: [true, "PhoneNumber must  be Unique"],
      required: [true, "PhoneNumber  is required"],
      trim: true,
    },
    role: {
      type: String,
      enum: ["Manager", "Pharmacist", "Physician"],
      default: "Pharmacist",
    },
    profileImg: String,
    department: String,
    password: {
      type: String,
      trim: true,
      required: [true, "password  is required"],
      minlength: [8, "to Short Password"],
    },
  },
  { timestamps: true }
);

pharmacistInformation.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const PharmacistInformation = mongoose.model(
  "PharmacistInformation",
  pharmacistInformation
);
module.exports = PharmacistInformation;
