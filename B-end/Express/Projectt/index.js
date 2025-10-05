const express = require("express");
const mongoose = require("mongoose");

const getStudentData = require("./Backend/Router/getRoute/getRoute");
const addStudentData = require("./Backend/Router/postRoute/postRoute");
const getCourseData = require("./Backend/Router/getRoute/getRoute");
const addCourseData = require("./Backend/Router/postRoute/postRoute");
const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/StudentsData")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

//Working
app.get("/", (req, res) => {
  res.json(working);
});

// for student
app.use("/get", getStudentData);
app.use("/post", addStudentData);

//for Courses
app.use("/post", addCourseData);
app.use("/get", getCourseData);

// port
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
