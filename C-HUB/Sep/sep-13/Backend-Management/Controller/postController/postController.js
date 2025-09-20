const express = require("express");
const UserModal = require("../../Model/User Model/userModel");

exports.postUser = (req, res) => {
  UserModal.User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};
