const express = require("express");
const mongoose = require("mongoose");

const PostData = require("./Backend-Management/Routes/postRoutes/postRoute");
const getData = require("./Backend-Management/Routes/getRoutes/getRoute");

const app = express();

// Middleware
app.use(express.json());

// Connection with Db
mongoose
  .connect("mongodb://127.0.0.1:27017/NEW")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

//Working
app.use("/post", PostData);
app.use("/get", getData);

app.listen(2525, () => {
  console.log("server is running rn");
});
