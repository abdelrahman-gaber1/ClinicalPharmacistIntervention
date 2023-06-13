const mongoose = require("mongoose");

const TypeOfError = new mongoose.Schema(
  {
    typeOfError: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const typeOfError = mongoose.model("TypeOfError", TypeOfError);
module.exports = typeOfError;
