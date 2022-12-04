
const mongoose =require("mongoose")
const joi = require("joi")


const userSchema = mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    }
)
const userModel = mongoose.model("users",userSchema)

function userValidation(data){
    const schema = joi.object({
        name:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().password().min(5).max(15).required(),
    })
}
function userLogin(data){
    const schema = joi.object({
        email:joi.string().email().required(),
        password:joi.string().password().min(5).max(15).required(),
    })
}

const funcs = {register:userModel, SignUp:userValidation, login:userLogin,}

module.exports=funcs;