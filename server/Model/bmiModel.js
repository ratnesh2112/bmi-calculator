const mongoose = require('mongoose')

const bmischema = mongoose.Schema({
    weight : Number,
    height : Number,
    BMI : Number,
    userId : String
})

const BMImodel = mongoose.model("bmical" , bmischema)

module.exports = BMImodel