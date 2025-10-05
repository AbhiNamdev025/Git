const express = require("express");
const studentModal = require("../../model/studentModel/studentModel");
const courseModal = require("../../model/courseModel/courseModel");

exports.postStudent = (req, res) => {
  studentModal.Student.create(req.body)
    .then((studentData) => res.json(studentData))
    .catch((err) => res.json(err));
};

exports.postCourse = (req, res) => {
  courseModal.Course.create(req.body)
    .then((courseData) => res.json(courseData))
    .catch((err) => res.json(err));
};
