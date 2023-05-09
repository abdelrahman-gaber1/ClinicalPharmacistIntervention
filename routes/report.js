const express = require("express");
const router = express.Router();

const reportcontroller = require("../controller/reportcontroller");

// ***************************اضافه ريبورت جديد للداتا بيز********************************
// لازم يبعتلي بوست ريكويست
// فيه لينك معين
router.post("/add", reportcontroller.report_post);

// **********************************التقارير الخصاصه بكل صيدلي ***************************
router.get("/:id", reportcontroller.report_get);
// محتاج يبعتلي جيت ريكويست

// ******************************كل التقارير الموجوده قي الداتابيز ***********************

router.get("/all", reportcontroller.report_all_get);

// لازم يبعتلي جيت ريكويست
// ***************************************************************************************
module.exports = router;
