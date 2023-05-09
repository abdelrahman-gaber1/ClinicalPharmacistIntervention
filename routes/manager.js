const express = require("express");
const router = express.Router();

const managercontroller = require("../controller/managercontroller");

// ***************************عمل اكونت جديد للمانجر وتخزين البيانات************************
// لازم يبعتلي بوست ريكويست
// فيه لينك معين
router.post("/signin", managercontroller.manager_signin_post);

// **********************************تاكيد الدخول للمانجر  *******************************
// لازم يبعتلي بوست ريكويست
// فيه لينك معين
router.post("/login", managercontroller.manager_login_post);

// *******************************************تعديل بروفايل المانجر********************************************
// لازم يبعتلي بوست ريكويست
// فيه لينك معين
router.post("/:id", managercontroller.manager_post);

module.exports = router;
