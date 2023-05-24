const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const physicianInformation = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: [true, "userName is required"],
      trim: true,
    },
    hospitalId: {
      type: Number,
      required: [true, "ID is required"],
      unique: [true, "ID must  be Unique"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email  is required"],
      trim: true,
      unique: [true, "Email must  be Unique"],
      lowercase: true,
    },
    phoneNumber: {
      type: Number,
      required: [true, "PhoneNumber  is required"],
      trim: true,
      unique: [true, "PhoneNumber must  be Unique"],
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

physicianInformation.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const PhysicianInformation = mongoose.model(
  "PhysicianInformation",
  physicianInformation
);
module.exports = PhysicianInformation;
