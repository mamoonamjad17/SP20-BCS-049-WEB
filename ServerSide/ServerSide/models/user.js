const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confirmPassword:String,
    role:
    {
        type:String,
        default:'user'
    }
});

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;
