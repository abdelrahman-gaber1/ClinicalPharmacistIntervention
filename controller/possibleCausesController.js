const possibleCauses = require("../models/possibleCauses");

const Factory = require("./handelerFactory");

const getPossibleCauses = Factory.getAll(possibleCauses, "possibleCauses");

module.exports = {
  getPossibleCauses,
};
