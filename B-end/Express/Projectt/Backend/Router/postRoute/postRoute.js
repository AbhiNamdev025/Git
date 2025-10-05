const express = require("express");
const router = express.Router();
const {
  postStudent,
  postCourse,
} = require("../../Controller/postController/postController");

router.post("/student", postStudent);

router.post("/course", postCourse);
module.exports = router;
