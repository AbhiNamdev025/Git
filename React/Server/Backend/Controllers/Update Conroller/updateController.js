const express = require("express");
const userModel = require("../../Models/userModel/userModel");

exports.updateUser = (req, res) => {
  console.log(req.body);
  userModel.User.findByIdAndUpdate(req.params.id, req.body)
    .then((userData) => res.json(userData))
    .catch((err) => res.json(err));
};
