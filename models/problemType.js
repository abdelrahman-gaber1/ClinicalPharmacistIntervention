const mongoose = require("mongoose");

const ProblemType = new mongoose.Schema(
  {
    ProblemType: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const problemType = mongoose.model("ProblemType", ProblemType);
module.exports = problemType;
