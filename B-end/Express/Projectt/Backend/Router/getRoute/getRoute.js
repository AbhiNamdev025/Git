const express = require("express");
const router = express.Router();
const StudentData = require("../../Controller/getController/getController");
const CourseData = require("../../Controller/getController/getController");
const courseDetails = require("../../Controller/getController/getController");

router.get("/student", StudentData.getStudent);
router.get("/course", CourseData.getCourse);
router.get("/student/course", courseDetails.getStudentWithCourse);
module.exports = router;
