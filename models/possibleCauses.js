const mongoose = require("mongoose");

const PossibleCauses = new mongoose.Schema(
  {
    PossibleCauses: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const possibleCauses = mongoose.model("PossibleCauses", PossibleCauses);
module.exports = possibleCauses;
