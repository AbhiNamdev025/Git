const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const getUserData = require("./Backend/Routes/getRoute/getRoute");
const postUserData = require("./Backend/Routes/postRoute/postRoute");
const DeleteUserData = require("./Backend/Routes/Delete Route/deleteRoute");
const UpdateUserData = require("./Backend/Routes/Update Route/updateRoute");



const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/signUpFormData")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection failed:", err));

app.use("/add", postUserData);
app.use("/find", getUserData);
app.use("/api", DeleteUserData);
app.use("/api", UpdateUserData);



app.listen(2525, () => {
  console.log("server is running on 2525");
});
