const express = require("express");
const userModel = require("../../Models/userModel/userModel");

exports.postUser = (req, res) => {
  console.log(req.body);
  userModel.User.create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => res.json(err));
};
