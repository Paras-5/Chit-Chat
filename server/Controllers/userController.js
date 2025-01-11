const express = require("express");
const UserModal = require("../modals/userModel");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../Config/generateToken");


const loginController = expressAsyncHandler(async(req,res) => {
    console.log(req.body);
    const {name , password } = req.body;

    const user = await UserModal.findOne({name})

    console.log("fetched user data ", user);
    console.log(await user.matchPassword(password));
    if(user && (await user.matchPassword(password))){
        res.json({
            _id : user._id,
            name :user.name,
            email : user.email,
            isAdmin :user.isAdmin,
            token :generateToken(user._id) 
        })
    }else{
        res.status(401)
        throw new Error("Invalid UserName or Password");
        
    }
});

const registerController =  expressAsyncHandler(async (req,res) => {
    const {name , email , password} = req.body;

    //check all fields 
    if(!name || !email || !password ){
        res.send(400)
        throw new Error("All necessary input fields have not been filled");
    }

    //pre-existing  user
    const userExist = await UserModal.findOne({email});
    if(userExist){
        throw new Error("User already exists");
    }

    //pre-existing user name
    const userNameExist = await UserModal.findOne({name});
    if(userNameExist){
        throw new Error("UserName already taken");
        
    }

    //creting an entry in Db
    const user = await UserModal.create({name,email,password});
    if(user){
        res.status(201).json({
            _id : user._id,
            name :user.name,
            email : user.email,
            isAdmin :user.isAdmin,
            token :generateToken(user._id) 
        })
    }else{
        res.status(400);
        throw new Error("Registration Error");
        

    }


});

module.exports = {loginController,registerController};