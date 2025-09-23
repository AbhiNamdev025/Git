const express = require("express");
const postData = require("../../Controllers/Delete Controller/delController");
const router = express.Router();

router.delete("/delete/user/:id", postData.deleteUser);

module.exports = router;
