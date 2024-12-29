const mongoose = require("mongose");

const userModel = mongoose.Schema({
  name:{type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
},{timeStamp:true}); 

const User = mongoose.Schema("user",userModel);
module.exports = User;
