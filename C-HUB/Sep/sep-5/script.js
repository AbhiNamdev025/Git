const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/tryurl", (req, res) => {
  res.send("Hlo Trying");
});

app.listen(2525, () => {
  console.log("Server working on port 2525");
});
