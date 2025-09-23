const express = require("express");
const userModel = require("../../Models/userModel/userModel");

exports.deleteUser = (req, res) => {
  console.log(req.body);
  userModel.User.findByIdAndDelete(req.params.id)
    .then((userData) => res.json(userData))
    .catch((err) => res.json(err));
};
