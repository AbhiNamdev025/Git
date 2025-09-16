const express = require("express"); //exporting express
const mongoose = require("mongoose"); //exporting mongodb
const app = express(); //calling express

// Midleware
app.use(express.json());

// haw to connect db
mongoose
  .connect("mongodb://127.0.0.1:27017/try")
  .then(() => console.log("✅ DB connected"))
  .catch((err) => console.log("❌ DB connection error:", err));

//Creating Schema

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});

const user = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.send(" Express + MongoDB is working ");
});

// sending data to db via post req through postman
app.post("/try", (req, res) => {
  user
    .create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => res.json(err));
});

// find all data

app.get("/try", (req, res) => {
  user
    .find()
    .then((userData) => res.json(userData))
    .catch((err) => res.json(err));
});

// find specific ones

app.get("/try/na", (req, res) => {
  user
    .find({}, { name: 1, _id: 0 })
    .then((userData) => res.json(userData))
    .catch((err) => res.json(err));
});

//find by id
app.get("/try/:id", (req, res) => {
  user
    .findById(req.params.id)
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => res.json(err));
});

//port

app.listen(2525, () => {
  console.log(" Server running on port 2525");
});
