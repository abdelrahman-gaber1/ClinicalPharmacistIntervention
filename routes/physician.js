const express = require("express");
const router = express.Router();

const physiciancontroller = require("../controller/physicicancontroller");

// ****************************عمل اكونت جديد للدكتور وتخزين البيانات************************
// لازم يبعتلي بوست ريكويست
// فيه لينك معين
router.post("/signin", physiciancontroller.pharmacist_signin_post);

// ************************************الحصول علي بيانات الدكاتره ***************************
// لازم يبعتلي جيت ريكويست

router.get("/information", physiciancontroller.physician_get);

// **********************************تاكيد الدخول للدكتور  *******************************
// لازم يبعتلي بوست ريكويست
// فيه لينك معين
router.post("/log-in", physiciancontroller.pharmacist_login_post);

// *********************************************تعديل بروفايل الدكتور*********************************************
// لازم يبعتلي بوست ريكويست
// فيه لينك معين
router.post("/:id", physiciancontroller.physician_post);

module.exports = router;
