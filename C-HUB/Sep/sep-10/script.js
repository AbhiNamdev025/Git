const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(express.json());

// Connection with Db
mongoose
  .connect("mongodb://127.0.0.1:27017/CRUD")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

// Schema
const userSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

//Working or not
app.get("/", (req, res) => {
  res.send("Server is working");
});

//Creating

app.post("/api/users", (req, res) => {
  User.create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => res.status(400).json(err));
});

//all user find()

app.get("/api/users", (req, res) => {
  User.find()
    .then((users) => {
      if (users.length === 0) {
        return res.json("No users found");
      }
      res.json(users);
    })
    .catch((err) => res.json(err));
});

//single user findbyId()
// app.get("/api/users/:id", (req, res) => {
//   User.findById(req.params.id)
//     .then((userData) => {
//       if (!userData) {
//         return res.status(404).json("User not found");
//       }
//       res.json(userData);
//     })
//     .catch((err) => res.json(err));
// });

//Update
// app.put("/api/users/:id", (req, res) => {
//   User.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   })
//     .then((userData) => {
//       if (!userData) {
//         return res.status(404).json("User not found");
//       }
//       res.json(userData);
//     })
//     .catch((err) => res.json(err));
// });

//Delete
// app.delete("/api/users/:id", (req, res) => {
//   User.findByIdAndDelete(req.params.id)
//     .then((userData) => {
//       if (!userData) {
//         return res.status(404).json("User not found");
//       }
//       res.json("User deleted successfully");
//     })
//     .catch((err) => res.json(err));
// });
















//Schema 2

//Schemaworker
const workSchema = new mongoose.Schema({
  workerId: { type: Number, required: true },
  worker: { type: String, required: true },
});
const Worker = mongoose.model("Worker", workSchema);

//Working
app.get("/worker", (req, res) => {
  res.send("Worker Server is working");
});

//Created Worker

app.post("/api/workers", (req, res) => {
  Worker.create(req.body)
    .then((workerData) => res.json(workerData))
    .catch((err) => res.status(400).json(err));
});
//all workers find()

app.get("/api/workers", (req, res) => {
  Worker.find()
    .then((workers) => {
      if (workers.length === 0) {
        return res.json("No users found");
      }
      res.json(workers);
    })
    .catch((err) => res.json(err));
});
//Lookup users with Workers

app.get("/api/users/workers", (req, res) => {
  Worker.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "workerId",
        foreignField: "_id",
        as: "personName",
      },
    },
  ])
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json({ error: err.message }));
});



















//Schema 3

//SchemaSalary
const SalarySchema = new mongoose.Schema({
  SalaryId: { type: Number, required: true },
  Salary: { type: Number, required: true },
});

const Salary = mongoose.model("Salary", SalarySchema);

//Working 
app.get("/salary", (req, res) => {
  res.send("Salary Server is working");
});

//adding salary data
app.post("/api/salary", (req, res) => {
  Salary.create(req.body)
    .then((salaryData) => res.json(salaryData))
    .catch((err) => res.status(400).json(err));
});

// get all salary info
app.get("/api/workers/salary", (req, res) => {
  Salary.find()
    .then((salaries) => {
      if (salaries.length === 0) {
        return res.json("No Data found");
      }
      res.json(salaries);
    })
    .catch((err) => res.json(err));
});

//Lookup users with Salary Via Worker
app.get("/api/users/workers/salary", (req, res) => {
  Salary.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "SalaryId",
        foreignField: "_id",
        as: "WorkerSalary",
      },
    },
    {
      $project: {
        WorkerSalary: 1,
        name: 1,
        Salary: 1,
      },
    },
  ])
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// port
app.listen(2525, () => {
  console.log("Server running on port 2525");
});
