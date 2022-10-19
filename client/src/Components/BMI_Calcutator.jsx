import React, { useState } from 'react'
import {Box, Button,Input,Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const BMI_Calcutator = () => {

    const [weight , setWeight] = useState()

    const [height , setHeight] = useState()

    const [bmi,setBmi] = useState()
  
    const navigate = useNavigate()

    const calculate =() =>{
        let x = height/3.28
        let data = weight/x**x
        setBmi(data)
        

    }
    const savebmi = ()=>{
        const payload = {
            weight,height,BMI:bmi
        }
        fetch("http://localhost:8050/bmi/calculatebmi",{
            method:"POST",
            body:JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json',
                'authorization' : `bearer ${localStorage.getItem("usertoken")}`
            }
        })
        .then((res)=>{
            alert("BMI Stored successfully")
        })
    }

  return (
    <Box>
        <div>
          <h2>Please Provide Following details</h2>
        </div>
        <Box  width="30%" margin="auto" style={{boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",padding:"15px"}}>
            <Input value={weight} placeholder='Enter Weight in kg...' onChange={(e)=>setWeight(e.target.value)}/>
            <Input value={height} placeholder='Enter height in feet...' onChange={(e)=>setHeight(e.target.value)}/>
        </Box>
        <Box padding="25px">
            <Button onClick={calculate}>Calculate BMI</Button>
        </Box>
        <Box>
            <h2>Your BMI is : {bmi}</h2>
        </Box>

        <Box padding="25px">
            <Button onClick={savebmi}>Store</Button>
        </Box>
    </Box>
  )
}

export default BMI_Calcutator