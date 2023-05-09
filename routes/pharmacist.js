const express = require("express");
const router = express.Router();

const pharmacistcontroller = require("../controller/pharmacistcontroller");

// ************************عمل اكونت جديد للصيدلي وتخزين البيانات **************************
// لازم يبعتلي بوست ريكويست
// فيه لينك معين
router.post("/signin", pharmacistcontroller.pharmacist_signin_post);

// **********************************تاكيد الدخول للصيدلي   *******************************
// لازم يبعتلي بوست ريكويست
// فيه لينك معين
router.post("/login", pharmacistcontroller.pharmacist_login_post);

// ***************************************تعديل بروفايل الصيدلي *************************************************
// لازم يبعتلي بوست ريكويست
// فيه لينك معين
router.post("/:id", pharmacistcontroller.pharmacist_post);

module.exports = router;
