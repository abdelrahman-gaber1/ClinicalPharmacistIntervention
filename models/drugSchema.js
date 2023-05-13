const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allDrug = new Schema({
  drugName: String,
});

const AllDrug = mongoose.model("AllDrug", allDrug);
module.exports = AllDrug;
