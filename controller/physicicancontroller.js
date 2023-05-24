const PhysicianInformation = require("../models/physicicanSchema");

const Factory = require("./handelerFactory");

const getPhysician = Factory.getAll(
  PhysicianInformation,
  "PhysicianInformation"
);

const getSpicificPhisician = Factory.getOne(PhysicianInformation);

const createPhysician = Factory.createOne(PhysicianInformation);

const updatePhysician = Factory.updateOne(PhysicianInformation);

const changePassword = Factory.changePassword(PhysicianInformation);

module.exports = {
  getPhysician,
  createPhysician,
  updatePhysician,
  getSpicificPhisician,
  changePassword,
};
