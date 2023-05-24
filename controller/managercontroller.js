const ManagerInformation = require("../models/managerSchema");

const Factory = require("./handelerFactory");

const createManager = Factory.createOne(ManagerInformation);

const updateManager = Factory.updateOne(ManagerInformation);

const getSpecificManager = Factory.getOne(ManagerInformation);

const changePassword = Factory.changePassword(ManagerInformation);

module.exports = {
  createManager,
  updateManager,
  getSpecificManager,
  changePassword,
};
