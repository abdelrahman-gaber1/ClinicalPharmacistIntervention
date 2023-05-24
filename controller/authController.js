const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const ApiError = require("../utils/ApiError");

const asyncHandler = require("express-async-handler");

const managerModel = require("../models/managerSchema");
const pharmacistModel = require("../models/pharmacistSchema");
const physicianModel = require("../models/physicicanSchema");

const generateToken = (payload) =>
  jwt.sign({ userId: payload }, process.env.JWT_SECRETE_KEY, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });

// @desc    managerSignup
// @route   GET /api/v1/auth/managersignup
// @access  Public
const managersignup = asyncHandler(async (req, res, next) => {
  const manager = await managerModel.create({
    userName: req.body.userName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    hospitalId: req.body.hospitalId,
    role: "Manager",
  });

  const token = generateToken(manager._id);
  res.status(201).json({ data: manager, token });
});

// @desc    pharmacitSignup
// @route   GET /api/v1/auth/pharmacistsignup
// @access  Public
const pharmacistsignup = asyncHandler(async (req, res, next) => {
  const pharmacist = await pharmacistModel.create({
    userName: req.body.userName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    hospitalId: req.body.hospitalId,
    role: "Pharmacist",
  });

  const token = generateToken(pharmacist._id);

  res.status(201).json({ data: pharmacist, token });
});

// @desc    Signup
// @route   GET /api/v1/auth/signup
// @access  Public
const physiciansignup = asyncHandler(async (req, res, next) => {
  const physician = await physicianModel.create({
    userName: req.body.userName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    hospitalId: req.body.hospitalId,
    role: "Physician",
  });
  const token = generateToken(physician._id);

  res.status(201).json({ data: physician, token });
});

const managerLogin = asyncHandler(async (req, res, next) => {
  const manager = await managerModel.findOne({ email: req.body.email });
  if (
    !manager ||
    !(await bcrypt.compare(req.body.password, manager.password))
  ) {
    return next(new ApiError("Incorrect email or password", 401));
  }
  const token = generateToken(manager._id);
  res.status(200).json({ data: manager, token });
});

const pharmacistLogin = asyncHandler(async (req, res, next) => {
  const pharmacist = await pharmacistModel.findOne({ email: req.body.email });
  if (
    !pharmacist ||
    !(await bcrypt.compare(req.body.password, pharmacist.password))
  ) {
    return next(new ApiError("Incorrect email or password", 401));
  }
  const token = generateToken(pharmacist._id);
  res.status(200).json({ data: pharmacist, token });
});

const physicianLogin = asyncHandler(async (req, res, next) => {
  const physician = await pharmacistModel.findOne({ email: req.body.email });
  if (
    !physician ||
    !(await bcrypt.compare(req.body.password, manager.password))
  ) {
    return next(new ApiError("Incorrect email or password", 401));
  }
  const token = generateToken(physician._id);
  res.status(200).json({ data: physician, token });
});

const authorization = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new ApiError("You Are not login", 401));
  }
  return token;
});

const managerAuthorization = asyncHandler(async (req, res, next) => {
  const token = authorization();

  const decoded = jwt.verify(token, process.env.JWT_SECRETE_KEY);

  const currentUser = await managerModel.findById(decoded.userId);
  if (!currentUser) {
    return next(
      new ApiError("The User that belong to this token no longer exist ", 401)
    );
  }
});

const physicianAuthorization = asyncHandler(async (req, res, next) => {
  const token = authorization();

  const decoded = jwt.verify(token, process.env.JWT_SECRETE_KEY);

  const currentUser = await physicianModel.findById(decoded.userId);
  if (!currentUser) {
    return next(
      new ApiError("The User that belong to this token no longer exist ", 401)
    );
  }
});

const pharmacistAuthorization = asyncHandler(async (req, res, next) => {
  const token = authorization();

  const decoded = jwt.verify(token, process.env.JWT_SECRETE_KEY);

  const currentUser = await pharmacistModel.findById(decoded.userId);
  if (!currentUser) {
    return next(
      new ApiError("The User that belong to this token no longer exist ", 401)
    );
  }
});

module.exports = {
  managersignup,
  pharmacistsignup,
  physiciansignup,
  physicianLogin,
  pharmacistLogin,
  managerLogin,
  managerAuthorization,
  physicianAuthorization,
  pharmacistAuthorization,
};
