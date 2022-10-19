const express = require('express')
const cors = require('cors')
require('dotenv').config()

const connection = require('./Config/config')
const {userRoute} = require('./Controller/userController')
const authentication = require('./Middleware/authentication')
const bmiRoute = require('./Controller/bmiController')



const app = express()

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/user" , userRoute)

app.use("/bmi" ,authentication, bmiRoute)


app.listen(process.env.PORT || 8050 , async()=>{
    try{
       await connection
       console.log("Connected to DB")
    }
    catch{
        console.log("Eror in connection")
    }
    console.log("server on port",process.env.PORT)
})