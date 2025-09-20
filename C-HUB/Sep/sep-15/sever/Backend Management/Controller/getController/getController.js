const express = require("express");
const UserModal = require("../../Model/User Model/userModel");

exports.getUser=   (req,res)=>{
UserModal.User.find()
.then((data)=>res.json(data))
.catch((err)=>res.json(err))
}

 