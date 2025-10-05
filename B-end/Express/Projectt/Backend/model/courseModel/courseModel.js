const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  coursename: { type: String, required: true },
  fee: { type: Number, required: true },
  courseId: { type: Number, required: true },
});

exports.Course = mongoose.model("Course", courseSchema);
