const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(express.json());

// Connection with Db
mongoose
  .connect("mongodb://127.0.0.1:27017/usersDB")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

// Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

//Working or not
app.get("/test", (req, res) => {
  res.send("Server is working");
});




// Create User
app.post("/user/add", (req, res) => {
  User.create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => res.status(400).json(err));
});

// port
app.listen(2550, () => {
  console.log("Server running on port 2550");
});
