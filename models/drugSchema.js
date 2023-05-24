const mongoose = require("mongoose");

const allDrug = new mongoose.Schema(
  {
    drugName: {
      type: String,
      trim: true,
      unique: [true, "Name must be unique"],
    },
  },
  { timestamps: true }
);

const AllDrug = mongoose.model("AllDrug", allDrug);
module.exports = AllDrug;
