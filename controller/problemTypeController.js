const problemType = require("../models/problemType");

const Factory = require("./handelerFactory");

const getProblemType = Factory.getAll(problemType, "problemType");

module.exports = {
  getProblemType,
};
