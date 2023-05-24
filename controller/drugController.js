const AllDrug = require("../models/drugSchema");

const Factory = require("./handelerFactory");

const getDrugs = Factory.getAll(AllDrug, "AllDrug");

module.exports = {
  getDrugs,
};
