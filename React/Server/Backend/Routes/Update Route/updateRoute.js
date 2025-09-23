const express = require("express");
const updateData = require("../../Controllers/Update Conroller/updateController");
const router = express.Router();

router.put("/update/user/:id", updateData.updateUser);

module.exports = router;
