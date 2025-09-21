const express = require("express");
const getData = require("../../Controllers/getController/getController");
const router = express.Router();

router.get("/user", getData.getUser);

module.exports = router;
