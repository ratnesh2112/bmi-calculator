const express = require('express')
const jwt = require('jsonwebtoken')


const UserModel = require('../Model/userModel')


const userRoute = express.Router()

userRoute.post("/register" ,async (req,res)=>{
    const {name,email,password} = req.body

    const newUser = new UserModel({name,email,password})

    newUser.save()

    res.send("Registeration Successfull")
})

userRoute.post("/login" , async(req,res)=>{
    const {email,password} = req.body

    const user = await UserModel.findOne({email,password})
    if(!user)
    {
        res.send("Invalid credentials")
    }
    else{
        const userId = user.id

        token = jwt.sign({email,userId} , "Tericsoft")
    
        res.send({message:"Login Successfull" , token : token})
    }
})

module.exports = {userRoute}