const express = require("express");
const userModel = require("../../Models/userModel/userModel");

exports.getUser = (req,res)=>{
    userModel.User.find()
    .then((userData)=>res.json(userData))
    .catch((err)=>res.json(err))
}