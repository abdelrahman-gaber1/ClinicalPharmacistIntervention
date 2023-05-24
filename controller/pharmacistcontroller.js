const PharmacistInformation = require("../models/pharmacistSchema");

const Factory = require("./handelerFactory");

const getPharmacist = Factory.getAll(
  PharmacistInformation,
  "PharmacistInformation"
);
const updatePharmacist = Factory.updateOne(PharmacistInformation);

const createPharmacist = Factory.createOne(PharmacistInformation);

const getSpicificPhamacist = Factory.getOne(PharmacistInformation);

const changePassword = Factory.changePassword(PharmacistInformation);

module.exports = {
  updatePharmacist,
  createPharmacist,
  getPharmacist,
  getSpicificPhamacist,
  changePassword,
};
