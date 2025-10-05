const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/newOne")
  .then(() => {
    console.log("DB Connected Successfully✅🔥");
  })
  .catch((err) => console.log(err));

const Schema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: Number },
  age: { type: Number },
  bloodgroup: { type: String },
});

const users = mongoose.model("users", Schema);

//Add POST

app.post("/add", (req, res) => {
  users
    .create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => res.json(err));
});

// Read Get

app.get("/get", (req, res) => {
  users
    .find({}, { name: 1, email: 1, mobile: 1 })
    .then((userData) => res.json(userData))
    .catch((err) => res.json(err));
});

//Update PUT
app.put("/:update", (req, res) => {
  users
    .findByIdAndUpdate(req.params.update, req.body, {
      new: true,
      runValidators: true,
    })
    .then((userData) => res.json(userData))
    .catch((err) => res.json(err));
});

//DELETE delete
app.delete("/:delete", (req, res) => {
  users
    .findByIdAndDelete(req.params.delete, req.body, {
      new: true,
      runValidators: true,
    })
    .then((userData) => res.json(userData))
    .catch((err) => res.json(err));
});

app.listen(5000, () => {
  console.log(" Server running on port 5000 ✅💣");
});
