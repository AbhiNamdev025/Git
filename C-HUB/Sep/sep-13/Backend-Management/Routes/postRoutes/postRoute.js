const express = require("express");
const router = express.Router();
const { postUser } = require("../../Controller/postController/postController");

router.post("/First/add", postUser);

module.exports = router;
