const express = require("express");
const postData = require("../../Controllers/postController/postController");
const router = express.Router();

router.post("/user", postData.postUser);

module.exports = router;
