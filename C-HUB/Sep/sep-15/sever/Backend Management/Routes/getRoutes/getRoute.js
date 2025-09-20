const express = require("express");
const router = express.Router();
const Data = require("../../Controller/getController/getController");

router.get("/data", Data.getUser);

module.exports = router;
