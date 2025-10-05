const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  courseId: { type: Number, required: true },
  email: { type: String, required: true },
  feestatus: { type: String, required: true },
});

exports.Student = mongoose.model("Student", studentSchema);
