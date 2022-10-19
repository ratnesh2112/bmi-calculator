const express = require('express')
const BMImodel = require('../Model/bmiModel')


const UserModel = require('../Model/userModel')


const bmiRoute = express.Router()

bmiRoute.get("/profile" ,async (req,res)=>{
    const {userId} = req.body

    const user = await UserModel.findOne({userId})

    res.send(user)
})

bmiRoute.post("/calculatebmi" ,async (req,res)=>{

    const {weight,height,BMI,userId} = req.body

    const userBMI = new BMImodel({weight , height , BMI , userId})

    userBMI.save()

    console.log(userBMI)
    res.send({message:"Bmi Added successfully" ,userBMI})
})
bmiRoute.get("/history" ,async (req,res)=>{
    const {userId} = req.body

    const allBMI = await BMImodel.find({userId})

    res.send(allBMI)
})
bmiRoute.delete("/:id/deletebmi" ,async (req,res)=>{

    const {id} = req.params

    await BMImodel.findByIdAndDelete({_id:id})

    res.send("BMI Deleted Successfully")

})

module.exports = bmiRoute