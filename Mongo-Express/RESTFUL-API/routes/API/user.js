const express = require('express')
const mongoose = require("mongoose");
let router = express.Router();
var bcrypt = require('bcryptjs');

const {register,SignUp,login} = require("../../models/user")

router.post("/sign-up",async(req,res)=>
{
    let register = new register();
    register.name = req.body.name;
    register.email = req.body.email;
    register.password = req.body.password;
    await register.save();
    return res.send(register)
})

module.exports=router;