const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const PharmacistInformation = mongoose.model(
  "PharmacistInformation",
  pharmacistInformation
);
module.exports = PharmacistInformation;
