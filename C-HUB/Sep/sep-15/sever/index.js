const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PostData = require("./Backend Management/Routes/postRoutes/postRoute");
const GetData = require("./Backend Management/Routes/getRoutes/getRoute");
const app = express();

// Middleware
app.use(express.json());

app.use(cors());
// Connection with Db
mongoose
  .connect("mongodb://127.0.0.1:27017/formData")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

//Working
app.use("/add", PostData);

app.use("/show", GetData);

app.listen(2525, () => {
  console.log("server is running rn");
});
