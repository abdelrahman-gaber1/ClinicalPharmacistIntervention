const typeOfError = require("../models/typeOfError");

const Factory = require("./handelerFactory");

const getTypeOfError = Factory.getAll(typeOfError, "typeOfError");

module.exports = {
  getTypeOfError,
};
