const express = require("express");
const StudentModal = require("../../model/studentModel/studentModel");
const courseModal = require("../../model/courseModel/courseModel");
exports.getStudent = (req, res) => {
  StudentModal.Student.find()
    .then((studentData) => res.json(studentData))
    .catch((err) => res.json(err));
};

exports.getCourse = (req, res) => {
  courseModal.Course.find()
    .then((courseData) => res.json(courseData))
    .catch((err) => res.json(err));
};

exports.getStudentWithCourse = (req, res) => {
  StudentModal.Student.aggregate([
    {
      $lookup: {
        from: "courses",
        localField: "courseId",
        foreignField: "courseId",
        as: "courseDetails",
      },
    },
    {
      $match: {
        "courseDetails.fee": { $gte: 120000 },
      },
    },
    {
      $project: {
        name: 1,
        feestatus: 1,
        "courseDetails.coursename": 1,
        "courseDetails.fee": 1,
        _id: 0,
      },
    },
    { $sort: { "courseDetails.fee": -1 } },
  ])
    .then((results) => res.json(results))
    .catch((err) => res.json({ error: err.message }));
};
